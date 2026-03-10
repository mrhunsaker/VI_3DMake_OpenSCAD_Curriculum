# Lesson 2 — Geometric Primitives and Constructive Solid Geometry

**Estimated Time:** 90–120 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## Before You Start

In Lesson 1, you made a box by calling `cube()`. You understood the coordinate system, installed the tools, and ran the complete build-verify workflow. That's a real foundation — but a single rectangular box isn't going to take you very far as a designer.

This lesson introduces the complete vocabulary of 3D shapes OpenSCAD knows how to build, and — more importantly — the three operations that let you combine those shapes into virtually anything you can imagine. Those three operations are **union** (merge), **difference** (subtract), and **intersection** (keep only what overlaps). Together with the primitive shapes, they form a system called **Constructive Solid Geometry**, and nearly every 3D model ever built in OpenSCAD is made from these tools.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Use all core OpenSCAD 3D primitives: `cube`, `sphere`, `cylinder`, `polygon`
- Combine shapes with `union()`, `difference()`, and `intersection()`
- Apply the 0.001 mm offset rule and understand exactly why it exists
- Create 2D profiles with `polygon()` and extrude them into 3D geometry
- Use `rotate_extrude()` and `linear_extrude()` to create complex rotational shapes
- Use the four debugging modifier characters (`#`, `%`, `!`, `*`)
- Use `hull()` to create convex envelope shapes

---

## Concept 1: What Are Primitives?

### The Raw Materials of 3D Design

A **primitive** is the simplest, most basic shape a system can produce from scratch, with no prior shape as input. Everything more complex gets built by combining and modifying these primitives. Think of them the way a sculptor thinks about blocks of material: the primitive is the raw material, and the operations you'll learn in this lesson are the tools you use to shape it.

OpenSCAD has four main 3D primitives. Every complex shape you'll ever design in this course is built from some combination of these four, using the CSG operations to combine them.

---

## Step 1 — The Four Core 3D Primitives

### `cube([width, depth, height])` — The Rectangular Box

Despite the name `cube`, this primitive creates any rectangular box — it doesn't have to be a perfect cube. The three numbers you provide are the dimensions along the X, Y, and Z axes respectively. `cube([30, 20, 10])` creates a box that is 30 mm wide (X), 20 mm deep (Y), and 10 mm tall (Z).

The `center=true` option (which you learned about in Lesson 1) centers the box on the origin rather than placing one corner there. Remember: `center=false` is the default, and it's usually what you want for parts that should sit on the build plate.

### `sphere(r=radius)` — The Round Ball

`sphere(r=10)` creates a sphere with a 10 mm radius (so 20 mm diameter). The sphere is centered on the origin by default — it can't be un-centered the way a cube can.

The key parameter to know here is **`$fn`** — short for "facet number." OpenSCAD doesn't have a mathematically perfect curved surface; it approximates curves by using lots of flat faces. A sphere with `$fn=8` looks like a faceted gem. A sphere with `$fn=64` looks smooth and round. The catch is that higher `$fn` values take longer to compute. During development, use `$fn=16` for speed. Use `$fn=64` or higher only when you're generating your final print file. Many designers set `$fn` globally at the top of their file.

### `cylinder(h=height, r=radius)` — The Tube, Cone, or Pipe

`cylinder(h=20, r=8)` creates a 20 mm tall cylinder with an 8 mm radius. Like spheres, `$fn` controls how round it looks.

There's an especially powerful variant: instead of a single `r` (which makes both the top and bottom the same radius), you can specify **`r1`** for the bottom radius and **`r2`** for the top radius. This creates tapered shapes:

- `r1=10, r2=5` creates a cone that's wider at the bottom and narrower at the top
- `r1=8, r2=0` creates a spike — the top radius is zero, so the top comes to a point
- `r1=0, r2=8` creates an upside-down spike — a shape that tapers to a point at the bottom

This flexibility makes `cylinder` far more versatile than its name suggests.

### `polygon(points)` — The Custom 2D Shape

None of the above shapes can make an L-shape, a T-shape, a hexagon, or a star. That's what `polygon()` is for.

`polygon()` accepts a list of (x, y) coordinate pairs and creates a flat 2D shape in the XY plane by connecting them in order. The shape automatically closes — the last point connects back to the first. Points should be listed in **counterclockwise order** as seen from above — this convention tells OpenSCAD which side is the "inside" of the polygon.

By itself, a `polygon()` is a flat 2D cutout. Combined with `linear_extrude(height=N)`, it gets pushed straight up along the Z axis to become a 3D prism with that polygon as its cross-section. This is your escape hatch for any shape that can't be described with boxes, spheres, and cylinders.

```openscad
// All four primitives demonstrated:

// 1. A simple box (already familiar from Lesson 1)
cube([30, 20, 10]);

// 2. A sphere — note it's centered on origin by default
// Translate it sideways so it doesn't overlap the cube
translate([40, 0, 10])
  sphere(r=10, $fn=32);    // $fn=32 gives a smooth appearance

// 3. A standard cylinder
translate([70, 0, 0])
  cylinder(h=20, r=8, $fn=32);

// 4. A tapered cylinder (cone) — wider at the bottom
translate([100, 0, 0])
  cylinder(h=20, r1=10, r2=3, $fn=32);

// 5. A spike — r2=0 makes a pointed top
translate([130, 0, 0])
  cylinder(h=20, r1=8, r2=0, $fn=32);

// 6. A polygon extruded into a prism
// This L-shape profile gets pushed up 5 mm to become a 3D L-bracket
translate([0, 40, 0])
  linear_extrude(height=5)
    polygon([[0,0],[40,0],[40,8],[8,8],[8,30],[0,30]]);
```

After building this code, run `3dm info` to check the bounding box of each shape and make sure you understand the relationship between the numbers you typed and the dimensions reported.

---

## Concept 2: Constructive Solid Geometry

### The Logic Behind Combining Shapes

**Constructive Solid Geometry (CSG)** is a technique for building complex 3D shapes by performing logical operations on simpler ones. The word "Boolean" comes from Boolean algebra — the mathematics of true/false logic. In 3D space, a Boolean operation asks a question about every point in space: is this point inside shape A? Inside shape B? Inside both? Inside neither?

The three answers to those questions correspond to the three CSG operations.

### Why This Approach Is So Powerful

Think about how you'd make a box with a cylindrical hole drilled through it. You can't do that with a single primitive. But you can:

1. Create a box
2. Create a cylinder the size of the hole
3. Subtract the cylinder from the box

That's `difference()`. Most real-world parts are designed exactly this way: start with a basic solid shape, then cut, drill, and hollow it using additional shapes as "tools."

Now think about a phone stand that has a rounded edge. You can't describe that with a box. But you can:

1. Create the main body as a box
2. Create a sphere slightly larger than the corner radius
3. Use `hull()` to create a smooth, rounded version

That's the power of CSG: you're building a vocabulary of operations that let you describe arbitrarily complex geometry by combining simple pieces.

---

## Step 2 — The Three CSG Operations

### `union()` — Merge Shapes Together

`union()` combines two or more shapes into a single solid. Any point that is inside _any_ of the shapes is inside the result.

An important subtlety: `union()` isn't the same as just rendering two objects next to each other. If shapes overlap, `union()` properly merges them into a single watertight solid. Two overlapping objects without a CSG wrapper can cause problems for the slicer — it may not know whether the overlapping region should be treated as solid once or twice. Always use `union()` when shapes share space.

```openscad
// union() — combines a cube and a sphere into one solid piece
// The sphere sits on top of the cube, and the two are fused where they meet.
union() {
  cube([20, 20, 5]);
  translate([10, 10, 5])
    sphere(r=10, $fn=32);
}
```

Build this and notice: the cube and sphere are one object. You can't select them separately.

### `difference()` — Subtract Shapes

`difference()` subtracts child shapes from the first child. The **first** shape listed inside `difference()` is the base — the "workpiece." Every shape listed after it acts as a cutting tool, removing its volume from the base.

Think of a drill press: the block of material is the first child, and the drill bits are the shapes that follow. You position the drills where you want the holes, and `difference()` removes exactly the volume each drill bit occupies.

```openscad
// difference() — a cube with a cylindrical hole drilled through it
// The cube is the base. The cylinder is the cutting tool.
difference() {
  cube([20, 20, 20]);
  translate([10, 10, -0.001])       // see Step 4 for why this -0.001 matters
    cylinder(h=20.002, r=5, $fn=32);
}
```

The most common mistake beginners make with `difference()` is accidentally listing the cutting tool first and the base second — in that case, the entire result is empty or backwards. Always check: is the first child in your `difference()` the piece you want to _keep_?

### `intersection()` — Keep Only What Overlaps

`intersection()` keeps only the volume that exists inside **all** shapes simultaneously. If shape A and shape B overlap, `intersection()` gives you just the overlapping region — everything that is inside both at the same time.

A practical mental model: `intersection()` is like a cookie cutter. The cookie cutter shape is one child, the dough is another. The result is the piece of dough within the cutter's outline.

```openscad
// intersection() — keeps only the region inside both shapes
// A cube intersected with a sphere = a cube with rounded corners
intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=12, $fn=64);
}
```

Build this and observe: the straight edges of the cube are rounded off wherever the sphere's surface cuts through them. The result is a shape that's simultaneously box-like and rounded.

### Visualizing Each Operation

The best way to internalize these operations is to build each example above separately and study the result before moving on. When you can predict what each operation will produce before you build it, you're ready to combine them in more complex designs.

Here's a quick mental checklist:

- **union()**: Think "merge everything together, fill in any gaps."
- **difference()**: Think "start with the first thing, carve away everything else."
- **intersection()**: Think "keep only the parts that are inside every single child."

---

## Step 3 — `polygon()` for Custom 2D Profiles

### When Primitives Aren't the Right Shape

Boxes, spheres, and cylinders get you surprisingly far. But eventually you'll need a shape that doesn't fit any of them — an L-bracket, a triangular wedge, a hexagonal base, an irregular outline traced from a measurement. That's where `polygon()` earns its place.

`polygon()` takes a list of (x, y) coordinate pairs and creates the 2D shape enclosed by connecting them in order. The shape is drawn in the XY plane. Because it's 2D, you can't print it directly — but combined with `linear_extrude(height=N)`, it becomes a 3D solid with that exact cross-section.

Here's how to use it: sketch your cross-section shape on graph paper. Mark the coordinates of every corner. Transfer those coordinates into the `polygon()` list. Connect the last point back to the first (OpenSCAD does this automatically). List them **counterclockwise** when viewed from above.

```openscad
// An L-shaped bracket: cross-section traced from corner coordinates
bracket_profile = [
  [0,  0],    // bottom-left
  [40, 0],    // bottom-right
  [40, 8],    // step up — beginning of horizontal arm's top edge
  [8,  8],    // inside corner of the L
  [8,  30],   // top of the vertical arm
  [0,  30]    // top-left
];

// Extrude 5 mm along Z — this produces a 3D L-bracket
linear_extrude(height=5)
  polygon(bracket_profile);
```

Walk through those coordinates: starting at the bottom-left, moving right along the bottom, up and left to form the horizontal arm, then up the vertical arm, and back to the start. The result is a shape you genuinely cannot make with `cube()` alone.

**The graph-paper method works for almost any traced shape.** Measure your object, draw it on grid paper, read off the corner coordinates, and type them in. This is a real engineering workflow.

---

## Step 4 — The 0.001 mm Offset Rule

### The Co-Planar Face Problem

When you use `difference()` to cut one shape with another, there's a subtle problem that occurs when the cutting shape shares an exact face with the base shape — for example, when the bottom face of a cutting cylinder sits at exactly Z=0, the same as the bottom face of the box it's cutting.

At that shared boundary, OpenSCAD faces an ambiguity: does this face belong to the outer solid or the inner (cutting) solid? The geometry engine can't make that decision cleanly, and the result is **undefined behavior** — sometimes a rendering artifact, sometimes a non-manifold edge that crashes the slicer, sometimes output that looks fine in preview but is broken in the exported STL.

This problem is called a **co-planar face problem**, and it's one of the most common sources of mysterious errors in OpenSCAD files.

### The Fix

The solution is simple and absolute: whenever you're subtracting a shape, extend the cutting shape slightly beyond the surface it needs to cut through. Specifically, move it **0.001 mm past the face on the entry side** and make it **0.002 mm longer total**.

Why 0.001 mm? It's large enough to eliminate the ambiguity entirely — the cutting shape now unambiguously passes through the surface. It's also small enough that no printer in the world can detect it. The 0.001 mm offset is invisible in the physical print.

```openscad
// WRONG — co-planar faces: the cutting shape is exactly as tall as the base
// This may produce rendering artifacts or slicer errors.
difference() {
  cube([20, 20, 10]);
  translate([1, 1, 0])      // cutting shape's bottom at Z=0, same as base
    cube([18, 18, 10]);     // cutting shape's top at Z=10, same as base's top
}

// CORRECT — the 0.001 offset rule applied
// The cutting shape starts 0.001 mm BELOW the base bottom
// and extends 0.001 mm ABOVE the base top.
difference() {
  cube([20, 20, 10]);
  translate([1, 1, -0.001])         // start 0.001 mm below the floor
    cube([18, 18, 10 + 0.002]);     // 0.001 below + 0.001 above = 0.002 extra height
}
```

**The pattern to memorize:** when cutting along the Z axis, use `translate([x, y, -0.001])` to start the cut 0.001 mm below the floor, and add 0.002 to the cutting shape's height (0.001 below + 0.001 above = 0.002 total extra). For cuts along the X or Y axis, apply the same logic to those dimensions instead.

---

## Step 5 — Debugging Modifier Characters

### The Four Special Modifiers

OpenSCAD provides four **modifier characters** that you can prefix onto any shape to temporarily change how it appears in the preview. These are debugging tools — they don't change the final exported geometry. Always remove them before exporting a file for printing.

**`#` (hash / highlight)** — renders the shape in translucent pink/red, _and_ keeps it in the model. Use this when you want to see exactly where a cutting shape is sitting relative to the base. Add `#` to a cylinder inside a `difference()` and you'll see the cutting tool highlighted.

**`%` (percent / ghost)** — renders the shape as a transparent ghost, and **excludes it from the model output**. Use this for reference geometry — a ghost outline of a component you're designing something to attach to — that helps you position things but shouldn't be in the final print.

**`!` (bang / isolate)** — renders **only this shape**, ignoring everything else in the entire file. Use this when you want to check a single module or shape by itself, without every other object in the scene blocking the view.

**`*` (star / disable)** — completely disables this shape; it's not rendered at all and produces no output. Use this to temporarily turn off part of your design during debugging, without deleting the code.

```openscad
// USING MODIFIERS FOR DEBUGGING:

difference() {
  cube([30, 30, 20]);

  // # highlights the cutting shape so you can see where it's cutting
  # translate([15, 15, -0.001])
    cylinder(h=20.002, r=8, $fn=32);
}

// % ghost reference — helps position but doesn't print
% translate([0, 0, 20])
  cube([30, 30, 5]);   // ghost of a lid that will sit on top
```

**F5 vs F6 in OpenSCAD (if using the GUI):** F5 runs a fast approximate preview that isn't manifold-safe. It's good for quickly seeing your shape while you type. F6 runs the full CGAL geometric kernel — slower, but accurate and manifold-safe. Always use F6 (or `3dm build`) before sending anything to print.

---

## Step 6 — `linear_extrude()` and `rotate_extrude()`

### Two Ways to Create 3D Shapes from 2D Profiles

You've already used `linear_extrude()` with `polygon()`. Now let's understand it more fully, and introduce its sibling `rotate_extrude()`.

**`linear_extrude(height=N)`** takes a 2D profile (any 2D shape: `circle`, `square`, `polygon`, or a combination) and pushes it straight up along the Z axis, creating a prism. The cross-section of the prism matches the 2D profile exactly.

Two important optional parameters:

- `twist=angle` — rotates the profile as it extrudes, creating a spiral or helix. A `twist=90` on a square profile creates a twisted square column.
- `scale=factor` — changes the size of the profile from bottom to top. `scale=0.5` means the top is half the size of the bottom, creating a tapered shape.

**`rotate_extrude(angle=360)`** takes a 2D profile and rotates it around the **Z axis**, sweeping it in a circle to create a rotationally symmetric solid. Imagine a lathe: the profile is the outline of a piece, and the lathe spins it to create a solid of revolution.

The profile for `rotate_extrude()` must be positioned in **positive X space** — to the right of the Z axis. The X distance from the Z axis becomes the radius of the resulting shape. If you place a small circle at X=15 and rotate-extrude it, you get a torus (donut) with a 15 mm ring radius.

```openscad
// linear_extrude: circle pushed straight up = a cylinder
linear_extrude(height=20) {
  circle(r=10, $fn=32);
}

// linear_extrude with twist: a twisted square column
translate([30, 0, 0])
linear_extrude(height=30, twist=90) {
  square([10, 10], center=true);
}

// linear_extrude with scale: a tapered shape (like a pyramid with a square base)
translate([60, 0, 0])
linear_extrude(height=30, scale=0.1) {
  square([15, 15], center=true);
}

// rotate_extrude: a circle swept around the Z axis = a torus (donut)
translate([0, 50, 0])
rotate_extrude(angle=360, $fn=64) {
  translate([15, 0, 0]) circle(r=5, $fn=32);
}
```

Any shape that is rotationally symmetric — a bowl, a cup, a ring, a knob, a vase — can and should be made with `rotate_extrude()`. It's dramatically more elegant than building the same shape from many overlapping cylinders.

---

## Step 7 — `hull()` — The Convex Envelope

### What `hull()` Does

`hull()` computes the **convex hull** of all its children — the smallest convex shape that completely contains all of them. The easiest mental model: imagine stretching a rubber band around a collection of objects laid on a table. The shape the rubber band makes when it snaps tight around all of them is the convex hull.

Notice the key word: **convex**. A convex shape has no indentations or concave regions — every surface curves outward. `hull()` fills in any gaps or concavities between the shapes you give it.

### How `hull()` Differs from `union()`

`union()` takes all the shapes and merges them, preserving their individual forms including any gaps or indentations between them.

`hull()` takes all the shapes and creates the smoothest possible outer envelope that touches or contains all of them, filling in any gaps.

This makes `hull()` excellent for:

- Creating smooth transitions between two shapes of different sizes
- Making rounded boxes (place a small sphere at each corner, take the hull)
- Creating organic, blob-like shapes
- Generating ramps and smooth blends

```openscad
// hull() of three spheres — creates a smooth rounded triangle
hull() {
  translate([0,  0,  0]) sphere(r=5, $fn=32);
  translate([30, 0,  0]) sphere(r=5, $fn=32);
  translate([15, 20, 0]) sphere(r=5, $fn=32);
}

// Practical use: a rounded box
// Place small spheres at the eight corners of a box
// The hull creates a box with perfectly rounded edges
translate([0, 40, 0])
hull() {
  for (x = [3, 27], y = [3, 17], z = [3, 7]) {
    translate([x, y, z]) sphere(r=3, $fn=16);
  }
}
```

The rounded box pattern is one of the most commonly used techniques in OpenSCAD. The sphere radius controls how round the edges are. The positions of the spheres control the overall box dimensions. Change the sphere radius to change how much rounding you get.

---

## Advanced CSG: Putting It All Together

### A Parametric Mounting Bracket

Here is a complete practical example that uses nested CSG operations to create a real functional part. Read through it carefully — notice how the design intent is encoded as named variables at the top, and the geometry simply uses those variables.

```openscad
// Parametric Mounting Bracket
// Change these values to resize the bracket
width  = 40;    // mm — total bracket width
height = 30;    // mm — total bracket height
depth  = 8;     // mm — bracket thickness (front to back)
hole_r = 4;     // mm — radius of mounting holes
slot_w = 6;     // mm — width of top slot
slot_h = 15;    // mm — height of top slot
wall   = 3;     // mm — material remaining above slot

module bracket() {
  difference() {
    // Base: a solid rectangular block — this is what everything gets cut from
    cube([width, depth, height]);

    // Two circular mounting holes drilled through the Y axis
    // The rotate([-90,0,0]) turns the cylinder to point in the Y direction
    translate([10, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);
    translate([30, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);

    // A slot cut through the top portion of the bracket
    translate([width/2 - slot_w/2, -0.001, height - slot_h - wall])
      cube([slot_w, depth + 0.002, slot_h]);
  }
}

bracket();
```

Walk through this mentally: start with a solid block. Drill two circular holes through it from front to back. Cut a slot down from the top. The result is a bracket with two mounting holes and an adjustment slot — all from one parametric design.

Try changing `hole_r`, `slot_w`, or `width` and rebuilding. Watch how every feature adapts automatically.

---

## Quiz — Lesson 2 (15 questions)

1. What are the four main 3D primitives in OpenSCAD?
2. What does `difference()` do? Which child is the base, and which children are the cutting tools?
3. Why do you add 0.001 mm to the cutting geometry in a `difference()` operation? What problem does it prevent?
4. What does the `#` modifier character do, and when would you use it during debugging?
5. What is the difference between F5 and F6 in the OpenSCAD GUI? Which should you use before printing?
6. What does `hull()` produce? How is it different from `union()`?
7. What does the `%` modifier do to a shape in OpenSCAD?
8. Describe what `rotate_extrude()` does and give one example of a shape it could produce.
9. What does `intersection()` return when applied to a cube and a sphere that partially overlap?
10. True or False: the `*` modifier renders a shape as a transparent ghost for debugging purposes.
11. Describe what `linear_extrude()` does and explain what the `twist` parameter changes.
12. What is a co-planar face, and what problem does it cause in a `difference()` operation?
13. If you want to subtract a cylinder from a cube and the cylinder is exactly as tall as the cube, what two adjustments do you need to make to ensure a clean cut?
14. When using `polygon()`, what order should points be listed in, and why?
15. What is the difference between combining two overlapping shapes with `union()` versus rendering two separate overlapping objects without any CSG operation?

---

## Extension Problems (15)

1. Build a hollow sphere with 1.5 mm walls using `difference()` and the 0.001 mm rule. Document the outer and inner radii you chose and verify the wall thickness using `3dm info`.
2. Create a vase shape using `rotate_extrude()` and a custom 2D profile. The vase should be wider in the middle than at the top and bottom.
3. Design a bracket or clip using nested `difference()` and `union()`. Add a comment to every CSG step explaining what it does.
4. Use `hull()` to create a smooth, rounded box with 3 mm radius corners. Document the sphere placement strategy you used.
5. Use the `%` modifier to create a ghost reference shape that helps you position a snap-fit clip around a cylinder. Screenshot the debugging view and explain it.
6. Create a parametric name badge: a flat rectangular base with your name text embossed (raised) on the top face, using `linear_extrude()` combined with `text()`. Make the text height a parameter.
7. Build a compound hinge using two cylinders (the barrel), a `hull()` for the hinge leaf, and alignment holes through the barrel. Document the design intent.
8. Design a 10-sided (decagonal) prism using `cylinder()` with `$fn=10` and a `difference()` to cut a hexagonal through-hole aligned with the prism's center.
9. Create a single test print that exercises all three CSG operations (`union`, `difference`, `intersection`) in one part. Add header comments explaining what each operation does in the design.
10. Using only `cube()`, `sphere()`, `difference()`, and `hull()`, build a simple chess pawn. It should be recognizable as a pawn when printed.
11. Create a lattice cube: a solid cube with a grid of cylindrical holes drilled through it in all three axes. Calculate and document the relationship between hole spacing and remaining wall thickness.
12. Build a parametric ring using `rotate_extrude()` where the cross-section shape (round, square, or custom polygon) is easily changeable by modifying a variable.
13. Research and document the `surface()` primitive: what input does it accept, what shape does it produce, and when would you use it instead of `polyhedron()`? Include a working example.
14. Design a tolerance test set: five pairs of pegs and holes with clearances from 0.0 mm to 0.4 mm in 0.1 mm increments. Print one set and document which clearance allows free movement on your specific printer.
15. Write a short guide explaining all four modifier characters (`#`, `!`, `%`, `*`) with one concrete use case for each, and a note on why you must always remove them before exporting the final file.

---

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Primitive Solids and Boolean Operations — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids

[^2]: OpenSCAD User Manual — CSG Modelling — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling

[^3]: OpenSCAD User Manual — Transformations and Extrusions — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem

[^4]: OpenSCAD User Manual — Modifier Characters — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub — Chapters on CSG and primitives
- CodeSolutions Repository — https://github.com/ProgrammingWithOpenSCAD/CodeSolutions — Worked examples for CSG, hull, and extrusions
- OpenSCAD Quick Reference — https://programmingwithopenscad.github.io/quick-reference.html — All primitive and CSG syntax at a glance
- 3DMake GitHub Repository — https://github.com/tdeck/3dmake — Build workflow reference
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Projects and Reference Appendices

_All supporting documents for Lesson 2 are included below. You do not need to open any additional files._

---

## Appendix A: OpenSCAD Quick Reference — Cheat Sheet

_Keep this handy during all OpenSCAD work. For full documentation: https://openscad.org/documentation.html_

---

### Basic Shapes (Primitives)

```openscad
cube([length, width, height]);           // rectangular box at origin
cube([l, w, h], center=true);           // box centered at origin

sphere(r=radius);                        // sphere by radius
sphere(d=diameter);                      // sphere by diameter

cylinder(h=height, r=radius);            // cylinder
cylinder(h=height, d=diameter);          // by diameter
cylinder(h=height, r1=5, r2=2);         // cone (different top/bottom radii)

$fn = 50;  // curve resolution — higher = smoother, slower to render
```

---

### Transformations

```openscad
translate([x, y, z]) shape;             // move
rotate([x_deg, y_deg, z_deg]) shape;    // rotate around each axis
scale([x, y, z]) shape;                 // scale (1.5 = 150%)
mirror([1, 0, 0]) shape;               // mirror across YZ plane
                                        // use [0,1,0] for XZ, [0,0,1] for XY
```

---

### Boolean Operations

```openscad
union() { shape1; shape2; }             // combine shapes
difference() { base; subtract; }        // remove one shape from another
intersection() { shape1; shape2; }      // keep only the overlapping region
```

**Critical rule for `difference()`:** always make the subtracting shape extend 0.001 mm past each shared face to avoid co-planar artifacts.

```openscad
// Example — box with a through-hole:
difference() {
  cube([30, 30, 10]);
  translate([15, 15, -0.001])           // extends past bottom face
    cylinder(h=10.002, r=5, $fn=32);   // extends past top face
}
```

---

### Variables and Parameters

```openscad
length = 70;      // define a variable
width  = 16;
height = 5;

cube([length, width, height]);          // use variables
cube([length * 2, width, height]);      // math in expressions
```

---

### Modules (Reusable Functions)

```openscad
// Define:
module my_box(l=20, w=15, h=10) {
  cube([l, w, h]);
}

// Call:
my_box();               // uses all defaults
my_box(30, 20, 8);     // positional arguments
my_box(l=50);           // named argument; others use defaults
```

---

### Loops

```openscad
// Repeat a shape N times:
for (i = [0:4]) {                       // i goes 0, 1, 2, 3, 4
  translate([i * 20, 0, 0]) cube([15, 15, 5]);
}

// With step size:
for (i = [0:5:20]) {                    // i goes 0, 5, 10, 15, 20
  translate([i, 0, 0]) sphere(r=3);
}
```

---

### 2D Shapes (for Extrusion)

```openscad
circle(r=10);                           // 2D circle
square([w, h]);                         // 2D rectangle
polygon([[0,0],[10,0],[5,10]]);         // arbitrary 2D shape

// Extrude into 3D:
linear_extrude(height=5) circle(r=10); // cylinder from 2D circle
linear_extrude(height=10, twist=90)    // twisted extrusion
  square([10, 5]);
rotate_extrude()                        // solid of revolution
  translate([15, 0]) circle(r=3);      // torus
```

---

### Modifier Characters (Debugging — Remove Before Final Export)

| Modifier | Effect                            | When to use                                  |
| :------: | --------------------------------- | -------------------------------------------- |
|   `#`    | Highlight shape in red/orange     | Finding where a hole or subtractive shape is |
|   `%`    | Render shape as transparent ghost | Checking alignment of mating parts           |
|   `!`    | Render ONLY this shape            | Isolating one component for inspection       |
|   `*`    | Disable (ignore) this shape       | Temporarily removing geometry                |

**Always remove all modifiers before exporting your final STL.**

---

### Useful Functions

```openscad
len([a, b, c])     // returns 3 — length of a vector
sqrt(25)           // returns 5
pow(2, 8)          // returns 256 (2^8)
abs(-5)            // returns 5
min(3, 5, 1)       // returns 1
max(3, 5, 1)       // returns 5
```

---

### Keyboard Shortcuts

| Key        | Action                                                         |
| ---------- | -------------------------------------------------------------- |
| `F5`       | Preview — fast, approximate (use for checking while designing) |
| `F6`       | Full render — exact, required before export                    |
| `Ctrl + S` | Save                                                           |
| `Ctrl + Z` | Undo                                                           |
| `F3`       | Reset camera view                                              |

---

### Export Workflow

1. Press `F6` (full render — wait for it to complete)
2. File → Export → Export as STL
3. Save with a descriptive filename: `projectname_v2.stl`
4. Run `3dm info` on the exported file to verify dimensions before slicing

---

## Appendix B: Bonus Print — Extension Project

**Estimated time:** 3–5 hours

### Overview

This extension project builds on your first successful print by introducing purposeful modification. You'll take an existing model from an online repository, decide on a specific change that improves or adapts it for a new purpose, apply that change in OpenSCAD or the slicer, and document the entire process. The goal is to experience the design iteration cycle — make a change, understand why you made it, evaluate the result.

### Learning Objectives

By completing this project, you will:

- Apply scaling and simple modifications to an existing model
- Understand how scaling affects tolerances and assembly fit
- Document design changes with enough detail that someone else could reproduce your work
- Practice logging print time, filament use, and outcome for reproducibility

### Materials

- Online repository access (Thingiverse, Printables), slicer, printer, filament

### Tasks

1. **Choose a model** from Thingiverse or Printables. Note its original stated dimensions.

2. **Decide on a purposeful modification** — scale it up or down, add a mounting hole, strengthen a thin feature, or combine it with another model. Write one paragraph explaining what the modification is and why you're making it. Who benefits from this change?

3. **Apply the change** in OpenSCAD (preferred) or by scaling in the slicer. Record the new dimensions and what changed relative to the original.

4. **Slice and print** all parts in one session where possible. Log: print time, filament used (in grams), layer height, infill %, and any slicer settings you adjusted.

5. **Create a short construction note**: describe how the modified print is used or assembled. Photograph the result.

### Probing Questions

1. What motivated the modification, and who benefits from it?
2. How did scaling affect tolerances or assembly fit? If the model connects to anything else, did the fit change?

### Starter Code

If adapting a model using OpenSCAD, use this scaling scaffold as a starting point:

```openscad
// Bonus Print Modification Scaffold
// Import an STL and apply modifications parametrically.

// ---- Parameters ----
scale_factor  = 1.5;    // 1.0 = original, 1.5 = 50% larger, 0.75 = 25% smaller
add_mount     = true;   // set false to skip the mount hole
mount_r       = 2.5;    // mm — mount hole radius (for M5 screw: 2.75mm)
mount_pos     = [25, 0, 0]; // mm — position of mount hole center

// ---- Base Model ----
// Replace "original.stl" with your actual file path
module base_model() {
  scale([scale_factor, scale_factor, scale_factor])
    import("original.stl", convexity=10);
}

// ---- Mount Hole (optional) ----
module mount_hole() {
  if (add_mount) {
    translate(mount_pos)
      cylinder(h=100, r=mount_r, center=true, $fn=32);
  }
}

// ---- Assembly ----
difference() {
  base_model();
  mount_hole();
}
```

---

## Appendix C: Bonus Print — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**Date:** \_\_\_\_\_\_\_\_\_\_
**Description:** Modify an existing 3D model and document the design changes and print outcomes.

---

### Original Model

- Model name and source:
- Link or file name:
- Original stated dimensions:
- Why did you choose this model for modification?

---

### Modification Plan

- What change will you make, and why?
- Who benefits from this modification?
- Will this be done in OpenSCAD, or by scaling in the slicer? Why?

---

### Variant Specifications

|        Variant         | Scale or Change | Est. print time | Est. filament (g) | Key dimensions |
| :--------------------: | --------------- | :-------------: | :---------------: | -------------- |
|  Original (reference)  | —               |                 |                   |                |
| V1 (your modification) |                 |                 |                   |                |
|     V2 (optional)      |                 |                 |                   |                |

---

### Print Results

|   Variant    | Actual print time | Actual filament (g) | Quality | Notes |
| :----------: | :---------------: | :-----------------: | ------- | ----- |
|      V1      |                   |                     |         |       |
| V2 (if made) |                   |                     |         |       |

---

### How Does Scaling Affect Fit?

If your model connects to anything (a wall mount, another printed part, a standard fastener), describe how the scaled dimensions affect the fit:

Original mating dimension: \_\_\_\_ mm → Scaled dimension: \_\_\_\_ mm → Fit result:

---

### Reflections

- Which variant is most effective for its intended purpose, and why?
- How did scaling or modification affect print time and material use?
- What trade-offs did you observe (strength vs. speed, size vs. material cost)?
- If you made a third variant, what would it be?

---

### Attachments Checklist

- [ ] `.scad` file with modification code (or slicer project file if scaled in slicer)
- [ ] Photos of original and modified prints side by side (if both available)
- [ ] Print log for each variant
- [ ] Completed variant specification table above

---

### Teacher Feedback

| Category                                                                           | Score (0–3) | Notes |
| ---------------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — modification is purposeful; print(s) successful               |             |       |
| Design & Code Quality — modification is documented; parametric if done in OpenSCAD |             |       |
| Documentation — variant table complete; scaling effects addressed                  |             |       |
| **Total (0–9)**                                                                    |             |       |

---

## Appendix D: Real-Life Problem Solver — Extension Project

**Estimated time:** 4–8 hours (design, adapt, print, and document)

### Overview

This extension project asks you to do something harder than downloading and printing: identify a real problem in your life or environment, find or design a 3D-printed solution, adapt it to meet the actual constraints of that situation, and document the full process. This is the closest this course gets to professional design work at this stage — it requires a problem statement, candidate research, a design decision, iteration, and evaluation.

### Learning Objectives

By completing this project, you will:

- Identify a user problem and write a problem statement that defines what success looks like
- Evaluate candidate printed solutions and choose one to adapt
- Make at least one documented design modification
- Test and measure a prototype with documented results
- Write a final report summarizing performance and next steps

### Materials

- Computer with slicer and access to repositories
- Printer, filament, basic hand tools for post-processing

### Tasks

1. **Write a problem statement.** Interview a potential user (yourself counts) and write one paragraph that describes: what the person is trying to do, what gets in their way, and what a successful solution would let them do. Be specific — "it's inconvenient" is not a problem statement; "my headphones fall off the desk and the cable gets tangled" is.

2. **Research candidate models.** Search Thingiverse or Printables for at least three options that could address your problem. List all three in your documentation, explain why each could or couldn't work, and justify your final selection.

3. **Adapt the model.** Make at least one modification — scale it, add or remove features, combine it with another model, or change the material or infill for durability. Document your changes in a short changelog with one entry per change.

4. **Print and test.** Run a supervised test of the prototype. Log any failures and what corrective actions you took. If the first print fails or doesn't work as intended, print again with documented changes.

5. **Write a final report** summarizing: how well the prototype performed, measured deviations from specifications, any remaining limitations, and what you would change in the next iteration.

### Probing Questions

1. What assumptions did you make about the user's context? How could you validate those assumptions with someone other than yourself?
2. Which modification had the biggest impact on whether the part worked, and why?

---

## Appendix E: Real-Life Problem Solver — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**Date:** \_\_\_\_\_\_\_\_\_\_
**Description:** Adapt an existing 3D model to solve a real problem, with documented design changes and test results.

---

### Problem Statement

Write one paragraph. Who is the user? What are they trying to do? What gets in their way? What would a successful solution let them do?

---

### Candidate Models

|  #  | Model name and source | Why it could work | Why it might not work |
| :-: | --------------------- | ----------------- | --------------------- |
|  1  |                       |                   |                       |
|  2  |                       |                   |                       |
|  3  |                       |                   |                       |

**Selected model:** \_\_\_\_\_ **Reason for selection:**

---

### Modification Changelog

|  #  | Change made | Why | Result |
| :-: | ----------- | --- | ------ |
|  1  |             |     |        |
|  2  |             |     |        |
|  3  |             |     |        |

---

### Original vs. Adapted Specifications

| Parameter | Original | Adapted | Reason |
| --------- | :------: | :-----: | ------ |
|           |          |         |        |
|           |          |         |        |
|           |          |         |        |

---

### Design Iteration Cycle

#### Print 1

- Date:
- Settings (layer height, infill, supports):
- Result:
- Issues observed:
- Next action:

#### Print 2 (if made)

- Date:
- What changed from Print 1:
- Result:
- Issues resolved / remaining:

---

### Test Results

How did you test whether the prototype solves the problem? What did you observe?

- Test method:
- Did the prototype succeed? Yes / Partially / No
- Any deformation, failure, or fit issues?
- User feedback (if you had a second person try it):

---

### Reflections

**What worked:**

**What didn't work:**

**What you would change in iteration 3:**

**What this taught you about the gap between a design on screen and a physical object that works in real life:**

---

### Accessibility Considerations

- How would you describe this modified design to someone who cannot see it?
- What measurements or tactile features would help a non-visual user understand or use the part?

---

### Attachments Checklist

- [ ] Problem statement (one paragraph, specific)
- [ ] Three candidate models with analysis
- [ ] Modification changelog
- [ ] `.scad` or `.stl` files for each iteration
- [ ] Photos of each printed iteration
- [ ] Test results documentation
- [ ] Final report (performance summary and next steps)

---

### Teacher Feedback

| Category                                                                       | Score (0–3) | Notes |
| ------------------------------------------------------------------------------ | :---------: | ----- |
| Problem & Solution — modification functional; problem addressed                |             |       |
| Design & Code Quality — changes documented; iteration evident                  |             |       |
| Documentation — changelog complete; test results recorded; reflection specific |             |       |
| **Total (0–9)**                                                                |             |       |

**Resubmission:** attach a paragraph explaining what was changed and why. Resubmission score replaces original.

---

## Appendix F: Real-Life Problem Solver — Instructor Reference

### Project Context

This is the most demanding extension project in Lessons 1–2. It requires students to work through a full design loop: problem definition → research → selection → modification → testing → evaluation. The quality of the outcome depends heavily on the quality of the problem statement — students who write a vague problem statement produce vague designs. Front-load the problem statement review.

### Key Learning Points to Reinforce

**A problem statement is not a solution.** Students tend to jump to "I want to print a phone stand" without explaining why. The problem statement should describe a situation and a gap, not a predetermined output. "My phone falls off my desk and I can't see notifications while working" is a problem statement. "I want a phone stand" is a solution.

**A changelog creates accountability.** Every design change should have a reason. Students who change things without documenting why have no basis for evaluating whether the change helped. Reinforce this by asking "why did you make this change?" at every iteration review.

**Testing must be observable.** A test that consists of "I tried it and it worked" is not documentation. Students should describe the test method (how many times, under what conditions, measured how), not just the result.

### Constraints (Enforce These)

- Problem statement must be written before model selection
- At least one print iteration is required — first-attempt submissions are not acceptable
- Changelog must have at least one entry per design change
- Test results must include an observable measurement or observation, not just a pass/fail judgment

### Assessment Notes

**Strong submissions** show: a specific problem statement that identifies a real user, a justified model selection (not just "I found this one"), a changelog that explains the reasoning behind each change, and a test result that describes what was actually measured or observed.

**Common weak areas:** problem statements that are really solution statements, modification changelogs with a single vague entry, and test sections that say "it worked fine" without any specifics. Push back on all three in feedback.

**Extension for advanced students:** have them repeat the design loop with a second user who is different from themselves. Designing for yourself and discovering that a different person has different constraints is a powerful experience.
