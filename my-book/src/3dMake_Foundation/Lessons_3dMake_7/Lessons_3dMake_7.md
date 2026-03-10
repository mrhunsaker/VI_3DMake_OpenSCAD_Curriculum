# Lesson 7 — Parametric Transforms and the Phone Stand Project

**Estimated Time:** 90–120 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## Before You Start

You can now create shapes, combine them with CSG, organize them into modules, and add text. This lesson is about the next layer of precision: _moving, rotating, mirroring, and scaling_ objects with mathematical exactness.

You've used `translate()` before to move shapes around. But there's a subtlety about how OpenSCAD applies transforms — specifically, the _order_ in which they execute — that is one of the most common sources of confusing bugs in OpenSCAD designs. Understanding the order rule deeply is one of the most valuable things you'll get from this lesson.

This lesson also builds your first complete, multi-module project: a parametric phone stand. It's not just an exercise — it's a real, functional object. You'll measure your actual phone, enter those measurements as parameters, and the math will generate the exact geometry needed to hold your phone at the angle you specify. Change the angle parameter and the entire stand recalculates.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Apply `translate()`, `rotate()`, and `scale()` in the correct order for compound transforms
- Use trigonometric functions (`sin()`, `cos()`, `atan2()`) to compute precise geometry positions
- Use `minkowski()` to create rounded edges and `mirror()` to create perfectly symmetric parts
- Build a complete parametric phone stand from three measured dimensions
- Use `$preview` to conditionally speed up rendering during development
- Apply vector math functions: `norm()`, `cross()`, and the dot product

---

## Concept 1: Transform Order — The Most Important Rule in This Lesson

### How OpenSCAD Applies Multiple Transforms

When you write multiple transforms on the same line, OpenSCAD applies them in **right-to-left order** — the transform closest to the geometry object applies first.

Read this line:

```openscad
translate([10, 0, 0]) rotate([0, 0, 45]) cube(5);
```

Your eye reads left to right: "translate, then rotate." But OpenSCAD executes right to left: first `rotate` (it's closer to `cube`), then `translate`. So the cube is first rotated 45° around the origin, and _then_ moved 10 mm in X.

Now read this:

```openscad
rotate([0, 0, 45]) translate([10, 0, 0]) cube(5);
```

This time: first `translate` (cube moves 10 mm right), then `rotate` (the cube, now positioned at X=10, rotates around the origin). The result is that the cube ends up in a completely different location — it orbits around the origin rather than rotating in place.

### Why This Matters

This rule has a real consequence: **changing the order of transforms changes the position of your geometry**, even if the transforms themselves are identical. This is the source of a lot of frustrating bugs in OpenSCAD designs, especially when the code looks correct to you.

The way to internalize it: think of it as nested functions. In `translate(rotate(cube()))`, `cube()` runs first, then `rotate()` acts on its output, then `translate()` acts on that result. The same way `f(g(x))` in math means "apply g first, then f."

```openscad
// Example A: cube rotates 45° in place, then moves 10mm right
// (rotate happens to the stationary cube, then translate moves it)
translate([10, 0, 0]) rotate([0, 0, 45]) cube(5);

// Example B: cube moves 10mm right first, then the rotated version orbits the origin
// (translate moves it first, then rotate spins it around origin — completely different result)
rotate([0, 0, 45]) translate([10, 0, 0]) cube(5);
```

**Build both of these side by side.** Look at where each cube ends up. The visual difference makes this rule concrete in a way that reading about it can't.

### The Rule in Plain Language

"The last transform written (closest to the shape) runs first." Repeat this until it's automatic.

---

## Step 1 — Translate, Rotate, Scale

### `translate([x, y, z])` — Move

`translate()` moves its child object by the specified amount in each axis. `translate([10, 0, 0])` moves 10 mm to the right. `translate([0, 0, 5])` moves 5 mm up. Negative values move in the opposite direction.

You already know this one from previous lessons. The key reminder is the order rule above.

### `rotate([x_deg, y_deg, z_deg])` — Rotate

`rotate()` rotates its child around the X, Y, and/or Z axes by the specified angles in degrees. The rotation happens around the origin — if the object isn't at the origin, it will orbit around it (which is sometimes what you want, sometimes not).

`rotate([0, 0, 45])` rotates around the Z axis (spins in the XY plane).
`rotate([90, 0, 0])` rotates around the X axis (tips the object forward/backward).
`rotate([0, 90, 0])` rotates around the Y axis (tips the object left/right).

When you want to rotate an object around its own center (not the origin), translate it to the origin first, rotate it, then translate it to its final position:

```openscad
// Rotate a cylinder around its own center, then position it
translate([20, 30, 0])        // 3. move to final position
  rotate([0, 90, 0])          // 2. rotate (runs before translate due to order rule)
    cylinder(h=20, r=5);      // 1. cylinder starts at origin
```

### `scale([x, y, z])` — Stretch or Compress

`scale([1, 1, 2])` doubles the height of an object without changing its width or depth. `scale([0.5, 0.5, 0.5])` shrinks everything by half. `scale([1, 2, 1])` doubles depth only.

`scale()` is less common than the others because it changes proportions — a sphere becomes an ellipsoid, a cube becomes a rectangular box. But it's useful for quick dimension experiments or for stretching a symmetrical part in one direction.

```openscad
// Stretch a sphere 2x in Z to create an egg shape
scale([1, 1, 2]) sphere(r=10, $fn=32);
```

---

## Step 2 — Trigonometry for Geometric Positioning

### Why You Need Trig in Design

Trigonometry shows up in 3D design whenever you need to:

- Place objects evenly around a circle
- Compute an angle from a measured slope
- Position something at a known distance and direction from a reference point
- Calculate how deep a feature needs to be at a given angle

Fortunately, you don't need to understand all of trigonometry deeply — you need three functions and one rule.

**The rule: all angles in OpenSCAD are in degrees.** Not radians. This is different from most programming languages. `sin(90)` in OpenSCAD returns 1 (correct for 90°). If you accidentally use radians, your numbers will be wildly off.

### `sin()`, `cos()`, and Placing Things Around a Circle

`sin(angle)` and `cos(angle)` return the Y and X components of a unit vector pointing at that angle. Multiplying by a radius gives you the actual coordinates.

For a circle of radius `r`, the (x, y) position at angle `a` is:

- `x = cos(a) * r`
- `y = sin(a) * r`

```openscad
// Place 6 cylinders evenly around a circle of radius 25mm
// 360° / 6 = 60° apart
for (i = [0:5]) {
  angle = i * 60;
  translate([cos(angle) * 25, sin(angle) * 25, 0])
    cylinder(r=3, h=5, $fn=16);
}
```

### `atan2(y, x)` — The Safe Angle Calculator

When you need to go the other direction — from (x, y) coordinates back to an angle — use `atan2(y, x)`.

`atan(y/x)` seems like it would work, but it fails in two quadrants. When x is negative (the left half of the circle), the division produces a value that places the angle in the wrong half of the circle. `atan2(y, x)` takes both components separately and always returns the correct angle for all four quadrants.

```openscad
dx = -5;  dy = 5;
angle_correct = atan2(dy, dx);   // 135° — correct (upper-left quadrant)
angle_wrong   = atan(dy / dx);   // -45° — wrong (treats it as lower-right)
echo("atan2:", angle_correct, "  atan:", angle_wrong);
```

Always use `atan2()` when computing angles from coordinate pairs. Make this a habit.

---

## Step 3 — `minkowski()` for Rounded Edges

### What the Minkowski Sum Does

`minkowski()` computes something called the **Minkowski sum** of its children. The geometric meaning: it "rolls" the second shape over every point on the surface of the first shape, and the result is all the space swept out by this rolling.

In practice, the most useful application is rounding the edges and corners of a box. If you take the Minkowski sum of a cube and a small sphere, you get a box with perfectly rounded corners and edges — the rounding radius equals the sphere's radius.

The variation used most often for printable parts is to use a **cylinder** instead of a sphere. A very flat cylinder (nearly zero height) rounds the vertical edges of a box but keeps the bottom face flat. This is ideal for parts that will sit on a surface, because a sphere-Minkowski box has a rounded bottom that makes it rock.

```openscad
// Rounded box — sphere rounds all corners and edges including bottom
module rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h - r], center=false);
    sphere(r=r, $fn=16);
  }
}

// Flat-base rounded box — cylinder rounds edges but keeps bottom flat
// The w/d dimensions shrink by 2r, and the height stays the same
module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h], center=false);
    cylinder(r=r, h=0.01, $fn=24);   // nearly zero height: rounds edges, not top/bottom
  }
}

rounded_cube(40, 30, 20, r=4);
translate([50, 0, 0]) flat_rounded_cube(40, 30, 20, r=4);
```

### Performance Warning

`minkowski()` is computationally expensive. With high `$fn` values on the secondary shape, it can take several minutes to compute. During development, keep the secondary shape at `$fn=12–16`. Only use `$fn=32+` for final export. Even better: use the `$preview` technique in Step 5 to skip Minkowski entirely during quick iterations.

---

## Step 4 — `mirror()` for Symmetry

### Design One Half, Mirror the Other

Many designs have a line of symmetry — two legs, two wings, two ears, two cable clips. Instead of designing both halves separately (which introduces the risk of slight misalignment), design one half and mirror it. The mirrored copy is guaranteed to be exactly symmetric.

`mirror([1, 0, 0])` reflects across the YZ plane — negates X coordinates.
`mirror([0, 1, 0])` reflects across the XZ plane — negates Y coordinates.
`mirror([0, 0, 1])` reflects across the XY plane — negates Z coordinates.

```openscad
// Design one ear, mirror it to get a symmetric pair
module ear_peg() {
  translate([20, 0, 0]) cylinder(r=4, h=8, $fn=32);
}

ear_peg();                     // right ear
mirror([1, 0, 0]) ear_peg();  // left ear — exact mirror image

// Mirror works for complex modules too
module mounting_clip() {
  difference() {
    cube([15, 8, 10]);
    translate([7.5, -0.001, 2])
      cylinder(r=3, h=8.002, $fn=32);  // cable channel
  }
}

translate([0, 20, 0]) {
  mounting_clip();
  translate([15, 0, 0]) mirror([1, 0, 0]) mounting_clip();  // symmetric partner
}
```

---

## Step 5 — Build the Complete Phone Stand

### Why Build This

The phone stand is your first complete multi-module project. It's functional, parametric, and applies trigonometry to solve a real design problem. More importantly, it's something you'll actually use — which is a good test of your own design work.

### Measuring Your Phone

Before writing code, use a ruler or calipers to measure:

- **Phone width**: the dimension across the face (X dimension in the cradle)
- **Phone thickness**: how thick the phone is (determines cradle depth)
- **Preferred angle**: how far you want the phone to lean back from vertical (65° from horizontal is a comfortable default for most people)

### The Full Parametric Design

```openscad
// ============================================================
// Parametric Phone Stand
// ============================================================
// Measure your phone and enter the three values below.
// All other dimensions are computed automatically.
//
// PARAMETERS TO CUSTOMIZE:
// - phone_w: width of your phone in mm
// - phone_d: thickness of your phone in mm
// - angle:   viewing angle from horizontal (60–80 degrees typically)
// ============================================================

phone_w = 75;   // mm — phone width (fits in cradle)
phone_d = 9;    // mm — phone thickness (sets cradle clearance)
angle   = 65;   // degrees — viewing angle from horizontal

// Internal dimensions — computed from the parameters above
lip_h       = 15;   // mm — depth of cradle lip
base_h      = 5;    // mm — base plate thickness
cradle_wall = 3;    // mm — wall thickness around phone
r_fillet    = 3;    // mm — rounded edge radius

// Trigonometry: compute base depth from the viewing angle
// The phone support must be at the correct lean angle
base_d = (phone_d + 10) / cos(90 - angle);

module flat_rounded_cube(w, d, h, r=3) {
  // Guard against degenerate dimensions after subtracting rounding radius
  assert(w > 2*r && d > 2*r, "Dimensions too small for the rounding radius");
  minkowski() {
    cube([w - 2*r, d - 2*r, h]);
    cylinder(r=r, h=0.01, $fn=24);
  }
}

module base_plate() {
  // Wide, flat base that anchors the stand
  flat_rounded_cube(phone_w + 20, base_d + 10, base_h, r_fillet);
}

module back_support() {
  // Angled wall that supports the back of the phone
  // rotate([angle-90, 0, 0]) tilts the wall to the viewing angle
  rotate([angle - 90, 0, 0])
    flat_rounded_cube(phone_w + 6, cradle_wall, 60, r_fillet);
}

module lip() {
  // Bottom ledge that the phone rests on
  rotate([angle - 90, 0, 0])
    translate([0, -lip_h, 0])
      flat_rounded_cube(phone_w + 6, lip_h + cradle_wall, cradle_wall, r_fillet);
}

// Final assembly: base + back support + lip
base_plate();
translate([0, 0, base_h]) {
  back_support();
  lip();
}
```

### Understanding the Trigonometry

The rotation `rotate([angle - 90, 0, 0])` deserves an explanation.

In OpenSCAD, a rotation of 0° around the X axis means the object is vertical (standing straight up). A rotation of -90° tips it flat forward (horizontal). When we want the back support to lean at `angle` degrees from horizontal, we need a rotation of `angle - 90` degrees:

- If `angle = 90` (vertical phone): `rotate([0, 0, 0])` — no rotation, support is vertical
- If `angle = 65` (typical lean): `rotate([-25, 0, 0])` — leans 25° back
- If `angle = 45` (steeper lean): `rotate([-45, 0, 0])` — leans 45° back

After building the stand, try changing `angle` from 45 to 80 in 5-degree steps and rebuild each time. Watch the support geometry recalculate automatically for every value.

---

## Step 6 — Adaptive Quality with `$preview`

### Fast During Development, High-Quality for Export

`$preview` is a special OpenSCAD variable that is automatically `true` during F5 preview (the fast OpenSCAD preview) and `false` during F6 full render and `3dm build`. You can use it to conditionally use lower-quality (faster) settings during development and automatically switch to high quality for final export.

```openscad
// Low $fn during preview for fast renders; high $fn for final build
$fn = $preview ? 16 : 64;

sphere(r=20);  // uses $fn=16 in preview, $fn=64 during 3dm build
```

This is especially valuable with `minkowski()`, which can be very slow at high `$fn`. During development, replace the Minkowski operation with a plain box placeholder:

```openscad
module rounded_box_adaptive(w, d, h, r=4) {
  if ($preview) {
    // Fast placeholder during development
    color("orange", 0.6) cube([w, d, h]);
  } else {
    // Full, accurate Minkowski sum for final export
    minkowski() {
      cube([w - 2*r, d - 2*r, h - r]);
      sphere(r=r, $fn=12);
    }
  }
}
```

---

## Concept 2: Vector Math Functions

### Three Functions Worth Knowing

**`norm(v)`** — returns the length (magnitude) of a vector. `norm([3, 4, 0])` = 5. This is the Euclidean distance from the origin to the point (3, 4, 0), and it follows from the Pythagorean theorem: √(3² + 4² + 0²) = 5.

**Dot product (`a * b`)** — returns a single number that measures how "aligned" two vectors are. If both vectors point in exactly the same direction, the dot product equals the product of their lengths. If they're perpendicular, it equals 0. If they point in opposite directions, it's negative. Useful for checking angles between directions.

**`cross(a, b)`** — returns a vector perpendicular to both input vectors. `cross([1,0,0], [0,1,0])` returns `[0,0,1]` — the Z axis is perpendicular to both X and Y. Useful for computing surface normals or finding the axis of rotation between two vectors.

```openscad
// norm: length of a vector
v = [3, 4, 0];
echo("Length:", norm(v));   // 5

// dot product: alignment measure
a = [1, 0, 0];   // X axis
b = [0.7, 0.7, 0];
echo("Dot product:", a * b);   // 0.7

// cross product: vector perpendicular to both
c = cross([1, 0, 0], [0, 1, 0]);
echo("Cross:", c);   // [0, 0, 1] — the Z axis
```

---

## Quiz — Lesson 7 (15 questions)

1. In OpenSCAD, do transforms apply left-to-right or right-to-left (which transform runs first)?
2. What is the result of `cos(0)` and `sin(90)` in OpenSCAD (working in degrees)?
3. What is the key advantage of `atan2(y, x)` over `atan(y/x)` for computing angles?
4. What does `minkowski()` do geometrically? Describe it in plain language.
5. What does `mirror([1, 0, 0])` do? Which plane does it reflect across?
6. What does `scale([1, 1, 2])` do to a sphere?
7. Write OpenSCAD code to place 8 cylinders evenly spaced around a circle of radius 30 mm.
8. What does `norm([3, 4, 0])` return, and how is this computed?
9. True or False: `translate([10,0,0]) rotate([0,0,45]) cube(5)` rotates the cube first, then translates it.
10. What does setting `$preview` to `true` mean in OpenSCAD, and when is it set automatically?
11. Why does using `minkowski()` with `cylinder(h=0.01)` instead of `sphere()` produce a flat bottom surface?
12. In the phone stand design, the back support uses `rotate([angle - 90, 0, 0])`. If `angle = 70`, what is the actual rotation applied? What does this mean physically?
13. What does `cross([1,0,0], [0,1,0])` return and what is the geometric meaning?
14. Explain why designing one half of a symmetric part and using `mirror()` is better than designing both halves separately.
15. A design requires placing 5 components at the vertices of a regular pentagon centered at the origin. Using `cos()` and `sin()`, what is the formula for the coordinates of each vertex, given a circumradius of 25 mm?

---

## Extension Problems (15)

1. Redesign your phone stand with a USB cable slot cut through the lip. Make the slot width and depth parameters.
2. Add rubber foot pockets to the base plate: four small rectangular cutouts on the bottom face, positioned at the corners.
3. Create a phone stand variant that holds the phone in landscape (horizontal) orientation. Document which parameters changed and why.
4. Build a radially symmetric decoration: 12 identical fins evenly spaced around a central cylinder using `for` loop and `rotate()`.
5. Use `atan2()` to compute the angle of a ramp and use that angle with `rotate()` to align a small object precisely on the ramp surface.
6. Design a phone stand for a large tablet (e.g., 180mm × 240mm). Update the parameters, rebuild, and verify the stand still holds at the correct angle.
7. Build a "compound arm" — three rigid link segments connected end-to-end, each at a different angle. Display all three as an assembly with no gaps or overlaps.
8. Create an ergonomic keyboard wrist rest using `minkowski()` with a cylinder for smooth, flat-base contouring.
9. Build a visual transform order demo: two colored objects that differ only in the order of `translate()` and `rotate()`, placed side by side with labels.
10. Redesign the phone stand as a wall-mount: replace the base plate with a flat back plate that has two M3 mounting holes.
11. Build a mirror-symmetric earring holder: design one branch with pegs, then use `mirror()` to create the symmetric partner. Both branches should connect to a central hanging loop.
12. Use `norm()` to calculate the space diagonal of a rectangular prism (distance from one corner to the opposite corner) and use that value as a dimension in the design.
13. Research OpenSCAD's `multmatrix()` function. Build a shear transformation example (slanting a box into a parallelogram-shaped prism) that can't be achieved with standard transforms.
14. Add snap-fit clips to the phone stand cradle: two small flexible fingers that slightly grip the phone. Dimension the fingers using snap-fit principles from Lesson 8.
15. Design a dual phone stand: two cradles side by side at different angles, sharing a common base. Use a `for` loop and parametric spacing.

---

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Transformations — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations

[^2]: OpenSCAD User Manual — Mathematical Functions — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions

[^3]: OpenSCAD User Manual — Minkowski and Hull — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Transforms chapter
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Phone stand worked example
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — Math and transform functions
