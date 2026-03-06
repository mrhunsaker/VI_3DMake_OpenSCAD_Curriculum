# Lesson 7 — Parametric Transforms and the Phone Stand Project
*[CORRECTED — March 2026 Curriculum Revision]*

---

## Learning Objectives

By the end of this lesson you will be able to:

- Understand and predict the result of stacked transforms (translate, rotate, scale, mirror)
- Read transform chains correctly by applying them inside-out
- Use `multmatrix()` for combined transforms in a single operation
- Design a fully parametric phone stand with validated parameters
- Use defensive programming (`assert()`, `max()`, `min()` clamps) to prevent invalid geometry

---

## Step 1 — The Transform Mental Model

**The most important rule in OpenSCAD transforms:** Transforms are applied from the *inside out* (or equivalently, from the *bottom up* in the code).

The object starts at the world origin. The innermost transform acts on it first. Each outer transform then acts on the result.

**Think of it like a coordinate system:** Each transform shifts the local coordinate system of the child. The child is drawn in its own local space, then that space is placed into the world by the transforms.

```openscad
// Version A: translate first (outer), then rotate (inner)
// Reading inside-out: the cube ROTATES first (around world origin),
// then the rotated cube TRANSLATES to (30, 0, 0)
translate([30, 0, 0])    // STEP 2: move the result to X=30
  rotate([0, 0, 45])     // STEP 1: rotate 45° around Z
    cube([10, 5, 5], center=true);

// Version B: rotate first (outer), then translate (inner)
// Reading inside-out: the cube TRANSLATES first (within its local space),
// then the translated result ROTATES around the world origin
// The cube ends up in a completely different position!
color("red")
rotate([0, 0, 45])       // STEP 2: rotate the translated result around origin
  translate([30, 0, 0])  // STEP 1: move cube to X=30 in local space
    cube([10, 5, 5], center=true);
```

**Compass analogy:** Imagine you're a courier holding a compass.
- "Translate then rotate": You walk 30 steps east, then spin 45° in place. The compass faces northeast but you're at the eastern position.
- "Rotate then translate": You spin 45° in place first, then walk 30 steps — but "east" for you is now northeast! You end up farther from origin than in the first case.

```openscad
// Practical reading technique: read from BOTTOM to TOP (or innermost to outermost)
// to trace an object's transformation sequence

color("SteelBlue")
translate([0, 0, 50])    // 4th: move up 50mm
  rotate([90, 0, 0])     // 3rd: tip it forward (nose down)
    translate([0, 0, 20]) // 2nd: move it 20mm along its own Z
      rotate([0, 0, 30]) // 1st: spin 30° around its own Z
        cube([10, 5, 3], center=true);

// To understand this: start with the cube, apply 1st, then 2nd, etc.
```

---

## Step 2 — The `mirror()` Transform

```openscad
// mirror([x, y, z]) reflects across a plane defined by the normal vector
// mirror([1,0,0]) reflects across the YZ plane (flips X)
// mirror([0,1,0]) reflects across the XZ plane (flips Y)
// mirror([0,0,1]) reflects across the XY plane (flips Z)

module asymmetric_bracket() {
  difference() {
    cube([20, 10, 30]);
    translate([5, 5, -0.001]) cylinder(r=3, h=30.002, $fn=16);
  }
}

// Original
asymmetric_bracket();

// Mirrored version placed beside it
translate([25, 0, 0])
  mirror([1, 0, 0])  // flip left-right
    asymmetric_bracket();

// ADVANCED PATTERN: use mirror to generate symmetric geometry from one half
module full_handle(length=60, grip_d=20, end_d=12, wall=2) {
  // Only design one half; mirror it for the other half
  // This guarantees perfect symmetry — no rounding errors
  module half_handle() {
    translate([0, 0, 0])
      cylinder(d1=end_d, d2=grip_d, h=length/2, $fn=32);
  }

  half_handle();
  mirror([0, 0, 1])  // flip Z
    half_handle();
}

translate([60, 0, 0]) full_handle();
```

---

## Step 3 — `multmatrix()` — Combined Transforms

`multmatrix()` applies a 4×4 transformation matrix. This is advanced usage, but understanding it helps you understand *why* transform order matters — and it enables shearing, which translate/rotate/scale cannot do.

```openscad
// A 4×4 transformation matrix:
// [scale_x,  shear_xy, shear_xz, translate_x]
// [shear_yx, scale_y,  shear_yz, translate_y]
// [shear_zx, shear_zy, scale_z,  translate_z]
// [0,        0,        0,        1          ]

// Identity matrix — no transformation
multmatrix([
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]) cube([10, 10, 10]);

// Shear in X by 0.5 (no equivalent with rotate/translate)
// Each mm of Z height shifts the X position by 0.5mm
translate([20, 0, 0])
multmatrix([
  [1, 0, 0.5, 0],  // shear: X shifts 0.5 per unit of Z
  [0, 1, 0,   0],
  [0, 0, 1,   0],
  [0, 0, 0,   1]
]) cube([10, 10, 20]);

// Combined translation and rotation as a matrix
// (Normally use translate+rotate; multmatrix for when you get a matrix from elsewhere)
angle = 30;  // degrees
c = cos(angle);
s = sin(angle);
translate([50, 0, 0])
multmatrix([
  [c,  -s, 0, 5],   // rotate Z by 30°, then translate X by 5
  [s,   c, 0, 5],
  [0,   0, 1, 0],
  [0,   0, 0, 1]
]) cube([10, 5, 5], center=true);
```

---

## Step 4 — The Phone Stand Project

A fully parametric, defensively coded phone stand demonstrating all transform and CSG concepts.

```openscad
// ============================================================
// Parametric Phone Stand
// ============================================================

// --- Parameters ---
// Phone dimensions
phone_w     = 75;   // phone width in mm
phone_h     = 160;  // phone height in mm
phone_t     = 9;    // phone thickness in mm (with case)

// Stand geometry
stand_angle = 65;   // viewing angle from vertical (30-80 degrees)
base_d      = 60;   // base depth (front to back)
wall        = 2.5;  // wall thickness
corner_r    = 3;    // fillet radius for all outer corners
foot_h      = 3;    // height of rubber feet pads

// Cable cutout
cable_slot_w  = 12;  // USB-C slot width
cable_slot_h  = 5;   // USB-C slot height

// --- Input Validation ---
assert(phone_w > 30 && phone_w < 200,
  str("phone_w out of range: ", phone_w, "mm. Expected 30-200mm."));
assert(stand_angle >= 30 && stand_angle <= 80,
  str("stand_angle out of range: ", stand_angle, "°. Expected 30-80°."));
assert(wall >= 1.5,
  str("wall must be >= 1.5mm for printability, got: ", wall));
assert(corner_r < wall,
  str("corner_r (", corner_r, ") must be less than wall (", wall,
      ") — would create invalid geometry"));
assert(cable_slot_w < phone_w - 2*wall,
  str("cable_slot_w (", cable_slot_w, ") too wide for phone_w (", phone_w,
      ") with wall (", wall, ")"));

// --- Computed Geometry ---
cradle_w = phone_w  + 2*wall + 0.3;  // +0.3 clearance
cradle_h = phone_t  + 2*wall;
back_reach = sin(stand_angle) * (phone_h * 0.5);  // how far back the support goes

// --- Modules ---
module rounded_plate(w, d, h, r) {
  // Validate fillet doesn't exceed geometry
  safe_r = min(r, w/2 - 0.1, d/2 - 0.1);
  assert(safe_r > 0,
    str("rounded_plate: dimensions too small for r=", r,
        " (w=", w, ", d=", d, ")"));

  // Hull of 4 cylinders = rounded rectangle (2D extrusion approach)
  linear_extrude(height=h)
    offset(r=safe_r)
      offset(delta=-safe_r)
        square([w, d]);
}

module cable_slot_cutout() {
  // Centered cable slot at bottom of cradle — accounts for offset
  translate([cradle_w/2, -0.001, wall])
    rotate([270, 0, 0])  // rotate so slot faces down through base
      linear_extrude(height=wall + 0.002)
        hull() {
          translate([-cable_slot_w/2 + cable_slot_h/2, 0, 0])
            circle(d=cable_slot_h, $fn=16);
          translate([cable_slot_w/2 - cable_slot_h/2, 0, 0])
            circle(d=cable_slot_h, $fn=16);
        }
}

module phone_pocket() {
  // The negative space where the phone sits
  translate([wall, -0.001, foot_h + wall])
    cube([phone_w + 0.3, wall + 0.002, phone_t + 0.3]);  // side gap
}

module base() {
  color("SteelBlue")
  difference() {
    rounded_plate(cradle_w, base_d, foot_h + wall, corner_r);
    // Grip texture — small indentations on base surface
    for (x = [10:10:cradle_w - 10]) {
      translate([x, base_d/2, foot_h - 0.5])
        cylinder(r=2, h=1, $fn=6);  // hex pattern
    }
  }
}

module back_support() {
  color("CornflowerBlue")
  rotate([90 - stand_angle, 0, 0])
    translate([0, 0, 0])
      difference() {
        rounded_plate(cradle_w, back_reach, cradle_h, corner_r);
        // Phone slot — cutout in the middle
        phone_pocket();
      }
}

module stand() {
  // Base
  base();
  // Back support, pivoted from the rear of the base
  translate([0, base_d, 0])
    back_support();
  // Cable slot
  cable_slot_cutout();
}

// Render
stand();

// Uncomment to see phone outline for fit check:
// color("gray", 0.3)
// translate([wall + 0.15, base_d * 0.3, foot_h + wall + 0.15])
//   rotate([90 - stand_angle, 0, 0])
//     cube([phone_w, phone_t, phone_h]);
```

---

## Step 5 — Defensive Parameter Bounds

The phone stand above already uses `assert()`. Here is an extended reference for the common defensive patterns:

```openscad
// PATTERN 1: Clamp a value to a safe range
module fillet_cube(w, d, h, r) {
  // Don't let r exceed half of the smallest face dimension
  safe_r = min(r, w/2 - 0.01, d/2 - 0.01);
  echo("Requested r:", r, "  Applied r:", safe_r);

  linear_extrude(h)
    offset(r=safe_r) offset(delta=-safe_r)
      square([w, d]);
}

// PATTERN 2: Assert meaningful relationship constraints
module snap_arm(beam_l, beam_t, beam_w) {
  ratio = beam_t / beam_l;
  assert(ratio < 0.15,
    str("snap_arm: beam_t/beam_l = ", ratio,
        " exceeds 0.15 — arm will not flex without breaking. ",
        "Try beam_t=", floor(beam_l * 0.12 * 10) / 10, "mm"));
  cube([beam_w, beam_l, beam_t]);
}

// PATTERN 3: Warn about values that are valid but unusual
module plate_with_holes(w, d, h, hole_d, nx=2, ny=2) {
  spacing_x = w / (nx + 1);
  spacing_y = d / (ny + 1);
  min_spacing = min(spacing_x, spacing_y);

  if (hole_d > min_spacing * 0.8) {
    echo("WARNING: hole_d is large relative to spacing — holes may merge");
    echo("  hole_d:", hole_d, "  min spacing:", min_spacing);
  }

  difference() {
    cube([w, d, h]);
    for (row = [1:ny]) for (col = [1:nx]) {
      translate([col * spacing_x, row * spacing_y, -0.001])
        cylinder(d=hole_d, h=h + 0.002, $fn=16);
    }
  }
}

plate_with_holes(80, 60, 5, 8, nx=3, ny=2);
```

---

## Exercises

**Exercise 7.1:** Predict where a cube `[10, 5, 3]` will appear with the transforms:
```
translate([20, 0, 0]) rotate([0, 0, 45]) translate([10, 0, 0]) cube([10, 5, 3], center=true);
```
Write your prediction first, then verify with OpenSCAD.

**Exercise 7.2:** Modify the phone stand to add two M3 bolt holes in the base (for desk mounting). Use the `m3_bolt_hole()` module from Lesson 3. Validate that the holes are positioned at least 5mm from any edge.

**Exercise 7.3:** Use `mirror()` to generate a symmetric phone stand variant that has the cable slot on the opposite side without changing any other parameters.

**Exercise 7.4 (Advanced):** Write a `shear_cube(w, d, h, shear_x)` module using `multmatrix()` that creates a cube that leans in the X direction. A `shear_x` of 0.5 should mean the top face is offset 0.5mm for every 1mm of height.
# Lesson 7: Parametric Transforms and the Phone Stand Project

Estimated time: 90–120 minutes

## Learning Objectives
- Apply `translate()`, `rotate()`, `scale()`, and `mirror()` correctly
- Understand transform order of operations
- Use `minkowski()` for organic edge rounding
- Apply trigonometric functions (`sin()`, `cos()`, `atan()`, `atan2()`) for angular positioning
- Build a complete parametric phone stand

## Materials
- 3dMake project
- Terminal and editor
- Calipers for measuring your phone

## Step-by-step Tasks

### 1. Master Transforms and Order of Operations [^1]

Transforms in OpenSCAD apply right-to-left (innermost first). Order matters:

```openscad
// rotate THEN translate (object moves to [20,0,0] first, then rotates in place)
rotate([0, 0, 45]) translate([20, 0, 0]) cube([10, 5, 5]);

// translate THEN rotate (object moves 20mm, then rotates around origin)
translate([20, 0, 0]) rotate([0, 0, 45]) cube([10, 5, 5]);
```

These produce different results. A helpful rule: read transforms from the inside out.

### 2. Use Trigonometric and Math Functions [^2]

```openscad
// Place objects in a circle using sin() and cos()
r = 30;
for (i = [0 : 45 : 315]) {
  x = r * cos(i);
  y = r * sin(i);
  translate([x, y, 0]) cylinder(r=3, h=5, $fn=16);
}

// atan(y/x) gives angle from a ratio (single-argument arctangent)
angle_a = atan(1);      // 45 degrees

// atan2(y, x) gives angle from x and y components directly
// Use atan2() when both x and y are known — it handles all four quadrants correctly
angle_b = atan2(1, 1);  // 45 degrees (equivalent for this case)
angle_c = atan2(1, -1); // 135 degrees (atan(1/-1) would give -45 — wrong quadrant!)

echo(angle_a, angle_b, angle_c);  // 45, 45, 135

// Round/floor/ceil/pow/sqrt
echo(round(3.6));   // 4
echo(floor(3.6));   // 3
echo(ceil(3.6));    // 4
echo(pow(2, 8));    // 256
echo(sqrt(144));    // 12
```

**When to use `atan2(y, x)` vs `atan(y/x)`:** Use `atan2()` whenever you have both x and y components and need the correct quadrant. `atan()` only returns values in the range -90° to +90° and divides by zero when x=0.

### 3. Apply Minkowski Sum for Rounded Edges [^3]

```openscad
// Minkowski adds the shape of one object to every point of another
// Result: rounded box with smooth edges
module rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h - r], center=false);
    sphere(r=r, $fn=16);
  }
}

// Flat-base rounded box (cylinder instead of sphere)
module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h], center=false);
    cylinder(r=r, h=0.01, $fn=24);
  }
}
```

### 4. Apply scale() and mirror()

```openscad
// scale() stretches geometry — use when you need non-uniform scaling
scale([1, 1, 2]) sphere(r=10, $fn=32);  // stretch sphere 2x in Z = ellipsoid

// mirror() reflects geometry across a plane
module ear() {
  translate([20, 0, 0]) cylinder(r=5, h=3, $fn=32);
}
// Original + mirrored = symmetric pair
ear();
mirror([1, 0, 0]) ear();  // reflect across YZ plane
```

### 5. Build the Complete Phone Stand

```openscad
// ============================================================
// Parametric Phone Stand
// ============================================================
// Measure your phone and set these parameters:
phone_w = 75;   // mm — phone width
phone_d = 9;    // mm — phone thickness
angle   = 65;   // degrees — viewing angle from horizontal
lip_h   = 15;   // mm — depth of cradle lip

// Derived dimensions
base_d      = (phone_d + 10) / cos(90 - angle);
base_h      = 5;
cradle_wall = 3;
r_fillet    = 3;

module base_plate() {
  flat_rounded_cube(phone_w + 20, base_d + 10, base_h, r_fillet);
}

module back_support() {
  rotate([angle - 90, 0, 0])
    translate([0, 0, 0])
      flat_rounded_cube(phone_w + 6, cradle_wall, 60, r_fillet);
}

module lip() {
  rotate([angle - 90, 0, 0])
    translate([0, -lip_h, 0])
      flat_rounded_cube(phone_w + 6, lip_h + cradle_wall, cradle_wall, r_fillet);
}

module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([max(1, w - 2*r), max(1, d - 2*r), h]);
    cylinder(r=r, h=0.01, $fn=24);
  }
}

translate([0, 0, base_h]) {
  back_support();
  lip();
}
base_plate();
```

### Checkpoint
- After step 2: `echo()` outputs confirm trig function results.
- After step 3: The `rounded_cube` module produces a smooth-edged box (check in preview).
- After step 5: The phone stand stands at the correct angle and the lip depth matches your `lip_h` parameter.

## Advanced Transform Patterns

### Vector Math Functions

```openscad
// dot product: measures how aligned two vectors are
a = [1, 0, 0];
b = [0.7, 0.7, 0];
echo(a * b);         // scalar dot product = 0.7

// cross product: finds a vector perpendicular to two input vectors
c = cross([1, 0, 0], [0, 1, 0]);  // = [0, 0, 1]

// norm: vector magnitude (length)
v = [3, 4, 0];
echo(norm(v));       // 5 (Pythagorean theorem)
```

### Adaptive Quality with $preview

```openscad
// Use lower $fn during preview for fast rendering, higher for export
$fn = $preview ? 16 : 64;

// This speeds up preview without compromising final export quality
sphere(r=20, $fn=$fn);
```

## Quiz — Lesson 3dMake.7 (15 questions)

1. In OpenSCAD, do transforms apply left-to-right or right-to-left (innermost or outermost first)?
2. What is the result of `atan(1)`?
3. What is the advantage of `atan2(y, x)` over `atan(y/x)`?
4. What does `minkowski()` do geometrically?
5. What does `mirror([1, 0, 0])` do?
6. What does `scale([1, 1, 2])` do to a sphere?
7. Write the code to place 6 cylinders evenly spaced around a circle of radius 25 mm.
8. What does `norm([3, 4, 0])` return?
9. True or False: `translate([10,0,0]) rotate([0,0,45]) cube(5)` rotates the cube and then moves it.
10. Why would you use `$preview` to conditionally set `$fn`?
11. Describe the difference between `atan(y/x)` and `atan2(y, x)`. In which quadrant does `atan()` fail to return the correct angle?
12. A phone stand design uses `rotate([angle - 90, 0, 0])` to tilt the back support. If `angle = 65`, what is the actual rotation applied?
13. What does `cross([1,0,0], [0,1,0])` return, and what is the geometric meaning of the cross product?
14. Explain why using `minkowski()` with a sphere produces a different edge profile than using `minkowski()` with a cylinder.
15. A design requires placing components at the vertices of an equilateral triangle centered at the origin. Using `cos()` and `sin()`, calculate the coordinates of all three vertices for a circumradius of 30 mm.

## Extension Problems (15)

1. Redesign your phone stand with a cable slot cut through the base. Make the slot width a parameter.
2. Add rubber feet pockets to the base of your phone stand: four small rectangular cutouts that could hold adhesive rubber bumpers.
3. Create a phone stand variant that holds the phone in landscape (horizontal) orientation. What parameters change?
4. Build a radially symmetric decoration: 12 identical fins evenly spaced around a central cylinder using a `for` loop and `rotate()`.
5. Use `atan2()` to compute the angle of a slope and apply it with `rotate()` to align a part precisely with the slope.
6. Design a phone stand for a large tablet: update parameters and verify the design still holds at the correct angle.
7. Build a "compound arm": three rigid links connected at joints, each rotated by a parameter angle. Display all three links as an assembly.
8. Create an ergonomic keyboard wrist rest using `minkowski()` with an ellipsoid for smooth contouring.
9. Demonstrate transform order: build a visual example that shows the difference between `rotate -> translate` and `translate -> rotate` using colored shapes.
10. Redesign the phone stand as a wall-mount: replace the base with a plate that has two mounting holes, positioned so the phone faces outward.
11. Build a mirror-symmetric earring holder: design one arm with pegs, then use `mirror()` to create the symmetric pair.
12. Use `norm()` to calculate the diagonal of a rectangular prism and use that value to size a through-hole in the design.
13. Research OpenSCAD's `multmatrix()` function. Build a shear transformation example that could not be achieved with `translate()` and `rotate()` alone.
14. Add snap-fit clips to the phone stand: two small flexible fingers on either side of the cradle that hold the phone securely. Use the snap-fit principles from Lesson 8.
15. Design a dual-phone stand using a `for` loop and `translate()` to create two side-by-side stands at different angles, parametrically spaced.

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Transformations. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations)

[^2]: OpenSCAD User Manual — Mathematical Functions. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions)

[^3]: OpenSCAD User Manual — Minkowski and Hull. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Transforms chapter
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Phone stand worked example
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — Math and transform functions
