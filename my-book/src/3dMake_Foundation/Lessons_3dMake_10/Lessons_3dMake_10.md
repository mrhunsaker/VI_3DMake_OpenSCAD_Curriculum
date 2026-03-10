# Lesson 10 — Hands-On Practice Exercises and Troubleshooting

**Estimated time:** 120–150 minutes

---

## Before You Start

You've built a substantial toolkit over the first nine lessons: primitives, CSG operations, parametric modules, transforms, tolerances, interlocking features, automation scripts. This lesson is where those skills converge. Rather than introducing a single new concept, Lesson 10 is about _depth_ — applying advanced OpenSCAD features to real design problems, understanding when to use each tool, and developing the troubleshooting instincts that separate experienced designers from beginners.

The advanced features in this lesson — `hull()`, `minkowski()`, `projection()`, `surface()`, `children()`, and `search()` — are not obscure corners of OpenSCAD. They're the tools that unlock the difference between "looks like a 3D-printed object" and "looks like a professionally designed product."

---

## Learning Objectives

By the end of this lesson you will be able to:

- Apply `hull()` and `minkowski()` with awareness of their performance cost
- Use `$preview` to conditionally disable slow operations during development
- Create 2D templates with `projection()` for drilling guides and laser cutting
- Diagnose and fix all four common types of non-manifold geometry
- Apply `surface()` for height-map terrain and embossed artwork
- Write advanced parametric assemblies using `children()` and `$children`
- Use `search()` and `lookup()` for data-driven parametric design

---

## Concept: From Functional to Refined

Up to now, most designs have used right-angle geometry — boxes, cylinders, straight edges. This produces functional parts, but real products rarely look like that. Consider a smartphone: it has rounded corners, smooth transitions between surfaces, organic curves. None of those were added by accident — each one was a deliberate design choice that improves how the product feels in your hand and looks on a shelf.

The tools in this lesson let you add that kind of refinement to your OpenSCAD designs without abandoning the parametric approach. You'll still define everything with numbers and variables — but the shapes those numbers produce will be much more sophisticated.

---

## Step 1 — `hull()` for Organic Shapes

### What `hull()` Does

Imagine stretching a rubber band around several objects placed on a table. The rubber band forms the tightest possible loop that touches all of them, following the outside curve of each object. This is exactly what `hull()` does in 3D: it computes the **convex hull** — the smallest convex shape that contains all its children.

"Convex" means the shape never curves inward. A sphere is convex. A donut is not (it has a hole — a concave feature). The convex hull of two spheres is like a capsule — the two spheres connected by a smooth, outward-curving surface.

### When to Use `hull()`

`hull()` is excellent for:

- **Smooth transitions** between two different shapes at different heights (like the neck of a bottle smoothly widening into the body)
- **Rounded boxes** — place a small sphere at each corner, take the hull, and every corner and edge becomes rounded
- **Organic profiles** — aerofoil cross-sections, ergonomic handles, teardrop shapes
- **Anywhere** you want to avoid sharp 90-degree corners without adding complex geometry

`hull()` is **much faster** than `minkowski()` (covered in Step 2) and should be your first choice for organic shapes.

### Important Limitation

`hull()` only produces **convex** shapes. If you need a shape that curves inward — a saddle, a cup, a grip with a waist — `hull()` alone can't do it. You'd need to use `hull()` as a building block and then use `difference()` to carve in the concave features.

### Example 1: Smooth Transition Between a Hexagonal Cylinder and a Sphere

```openscad
// hull() between two different shapes at different heights
// Creates a smooth transition (like a funnel or transition piece)
hull() {
  cylinder(r=20, h=1, $fn=6);       // hexagon at bottom
  translate([0, 0, 30])
    sphere(r=8, $fn=32);             // sphere at top
}
```

This produces a smooth funnel-like shape — hexagonal at the base, tapering to a sphere at the top. Without `hull()`, you'd need complex math to define the intermediate surface.

### Example 2: Rounded Box Using `hull()` of 8 Spheres

Place one sphere at each of the 8 corners; `hull()` fills the space between them, rounding every corner and edge by the sphere radius.

```openscad
r = 5;  // corner radius
w = 40; d = 30; h = 20;

hull() {
  for (x = [r, w-r]) {
    for (y = [r, d-r]) {
      translate([x, y, 0]) sphere(r=r, $fn=24);
      translate([x, y, h]) sphere(r=r, $fn=24);
    }
  }
}
```

The sphere radius `r` controls how rounded the corners are. Setting `r=1` gives subtle rounding; `r=10` gives very rounded, pillow-like corners.

### Example 3: Wing / Aerofoil Profile

```openscad
// hull() of two cylinders at different positions and radii
// produces a smooth aerofoil cross-section
translate([0, 50, 0])
hull() {
  cylinder(r=6, h=2, $fn=32);            // leading edge (round)
  translate([40, 0, 0])
    cylinder(r=1, h=2, $fn=16);          // trailing edge (sharp)
}
```

The larger cylinder becomes the rounded leading edge; the small cylinder becomes the sharp trailing edge. `hull()` constructs the smooth surface connecting them automatically.

---

## Step 2 — `minkowski()` — Performance Warning and Pattern

### What Minkowski Sum Means

`minkowski()` computes the **Minkowski sum**: it places a copy of the secondary shape at every point on the surface of the primary shape, then takes the union of all those copies. The result is as if you "rolled" the secondary shape across every surface, corner, and edge of the primary shape.

The practical effect: if your primary shape is a cube and your secondary shape is a small sphere, the result is a cube with perfectly rounded corners and edges — where the rounding radius equals the sphere radius.

This is mathematically precise rounding that handles any geometry, including complex shapes with many faces. It's also how you create "offset" versions of shapes — the Minkowski sum with a sphere produces a shape that is uniformly larger in all directions by the sphere's radius.

### The Performance Warning

Here's the problem: the face count of the Minkowski result is roughly **the product** of the face counts of the two input shapes. A cube has 6 faces. A sphere with `$fn=32` has about 1,000 faces. The Minkowski sum has roughly 6,000 faces to compute. Now substitute a complex curved primary shape with 500 faces, and you're computing 500,000 faces. This can take minutes on a modern computer.

> ⚠ A complex primary shape combined with a sphere at `$fn=64` can take many minutes to render. Always use `$preview` to skip the `minkowski()` call during development.

### `$preview`: Fast Development, Accurate Rendering

OpenSCAD has two rendering modes:

- **F5 (Preview):** Fast, approximate. Uses OpenCSG rendering. `$preview` is `true`.
- **F6 (Full Render):** Exact, uses CGAL library. Much slower but produces accurate manifold geometry for export. `$preview` is `false`.

Use `$preview` as a conditional: show a fast placeholder during development (F5), and run the expensive `minkowski()` only during final render (F6).

> **Version note:** `$preview` is available in **OpenSCAD 2019.05 and later**. In earlier versions it is undefined (treated as `false`). If you are using an older version, omit the `$preview` guard and only run F6 when you need the final result.

```openscad
// $preview is TRUE during F5 (fast preview) and FALSE during F6 (full render).
// Use it to swap between a fast placeholder and the full Minkowski computation.

module rounded_box(w, d, h, r=4) {
  if ($preview) {
    // Fast preview mode: plain cube — renders instantly.
    // Color it orange as a reminder this is NOT the final shape.
    color("orange", 0.6) cube([w, d, h]);
  } else {
    // Full render mode: proper Minkowski sum.
    // Keep the secondary sphere LOW-POLY to limit face-count explosion.
    minkowski() {
      cube([w - 2*r, d - 2*r, h - r]);
      sphere(r=r, $fn=12);  // keep $fn LOW for minkowski — 12 is usually enough
    }
  }
}

rounded_box(50, 40, 20, r=5);
```

### `hull()` as a Faster `minkowski()` Alternative

`hull()` only works for convex shapes, but it is far faster than `minkowski()`. For a simple rounded box you can get an equivalent result by placing a sphere at each corner and taking the hull:

```openscad
translate([0, 60, 0])
hull() {
  // Equivalent to minkowski(cube, sphere) — much faster for convex shapes
  r = 4;
  w = 50; d = 40; h = 16;
  for (x = [r, w-r]) for (y = [r, d-r]) for (z = [r, h-r]) {
    translate([x, y, z]) sphere(r=r, $fn=12);
  }
}
```

**Performance guidelines for `minkowski()`:**

| Primary shape faces | Secondary `$fn` | Expected render time     |
| ------------------- | --------------- | ------------------------ |
| < 100               | 8–16            | < 1 second               |
| 100–500             | 8–16            | 1–10 seconds             |
| 500–2000            | 8               | 10–60 seconds            |
| > 2000              | any             | Minutes to hours — avoid |

**Rule of thumb:** If the primary shape is a simple primitive (cube, cylinder, basic extrusion), `minkowski()` is manageable. If the primary shape is itself a complex CSG result, use `hull()` instead.

---

## Step 3 — `projection()` for 2D Templates

### The Concept: Flattening 3D to 2D

`projection()` takes a 3D shape and flattens it onto the XY plane, producing a 2D outline. Think of shining a light straight down onto a 3D object: the shadow it casts on the floor is the projection.

This is useful in fabrication contexts because real-world assembly often requires 2D templates:

- A **drilling template** — print a flat sheet that shows exactly where to drill holes in a wall, shelf, or PCB
- A **laser-cut profile** — export the 2D shape of a part as a DXF for a laser cutter to follow
- A **footprint check** — verify that your design will actually fit in the space you have before printing
- A **CNC machining path** — export a cross-section as a DXF for a CNC router

`projection()` has two modes:

- `cut=false` — projects the full silhouette (shadow from above): every part of the shape, regardless of height
- `cut=true` — projects a cross-section _at z=0_: only the parts of the shape at exactly that height plane

```openscad
// projection(cut=false) — complete silhouette (shadow from above)
// projection(cut=true)  — cross-section at z=0 (slice through the model)

module phone_stand_example() {
  cube([90, 70, 5]);
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post A
  translate([75, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post B
}

// 3D model (for printing)
phone_stand_example();

// 2D silhouette (footprint) — placed beside the 3D model for comparison
color("LightGreen")
translate([110, 0, 0])
  linear_extrude(1)   // 1mm thick so it is visible in 3D preview
    projection(cut=false)
      phone_stand_example();

// Cross-section at z=3 — shows internal structure at that height
color("LightCoral")
translate([220, 0, 0])
  linear_extrude(1)
    projection(cut=true)
      translate([0, 0, -3])  // shift model so the cut falls at z=3 of the part
        phone_stand_example();
```

### Exporting DXF for Laser Cutting or CNC

> **Note:** `3dm` is designed for building STL output. Use the `openscad` CLI directly for DXF export — do **not** use `3dm build` for this step.

```bash
# Linux / macOS
openscad -o template.dxf src/template_projection.scad

# Windows (PowerShell or CMD)
openscad -o template.dxf src\\template_projection.scad
```

**Best practice: keep projection files separate.** Create a dedicated `.scad` file for DXF export that imports your main model and wraps it in `projection()`. This keeps your main model file clean.

```openscad
// src/template_projection.scad
// This file is used exclusively for DXF export.
// It should contain only projection() — no 3D geometry.

use <../src/main.scad>

// Project the full silhouette
projection(cut=false)
  main_assembly();

// Add mounting-hole markers as circles.
// DXF circles are standard and ready for CNC drilling.
hole_positions = [[10, 10], [80, 10], [10, 60], [80, 60]];
for (pos = hole_positions) {
  translate(pos)
    circle(r=1.75, $fn=16);  // 3.5 mm diameter holes
}
```

---

## Step 4 — Diagnosing Non-Manifold Geometry

### What "Manifold" Means and Why It Matters

A mesh is **manifold** (also called "watertight") when it follows two strict rules:

1. Every edge is shared by exactly two faces — no more, no fewer
2. The surface has no holes, zero-thickness walls, or self-intersections

Think of a manifold mesh like a sealed plastic bag. You can fill it with water and it won't leak anywhere. Every point on the surface is clearly either "inside" or "outside." Slicers need this to determine which areas to fill with material.

A non-manifold mesh is like a bag with a hole in it, or two bags fused at a single edge with no material connecting them. Slicers can't slice it correctly — they might produce missing layers, extra walls, or simply refuse to import the file.

### How OpenSCAD Produces Non-Manifold Geometry

OpenSCAD's CSG operations are mathematically defined, but floating-point arithmetic and co-planar face interactions can create subtle mesh problems. The four most common causes:

### Problem 1 — Co-Planar Faces in `difference()`

When the cutter exactly coincides with the face of the base shape, OpenSCAD cannot determine which side of the face to keep. The result is an ambiguous, possibly non-manifold edge. Fix: extend the cutter by 0.001 mm on each side so it clearly passes through the material.

```openscad
difference() {
  cube([20, 20, 20]);
  translate([5, 5, -0.001])           // extend 0.001 below base
    cylinder(r=5, h=20.002, $fn=24);  // extend 0.001 above top
}
```

This is the same 0.001 mm rule introduced in Lesson 2. It's worth repeating because forgetting it is the most common cause of non-manifold geometry in student work.

### Problem 2 — Zero-Thickness or Negative-Thickness Walls

If your wall thickness calculation ever produces zero or a negative number, the resulting geometry has no material — creating a degenerate mesh.

```openscad
module thin_wall_box(w, d, h, wall=2) {
  assert(wall > 0 && wall < min(w,d)/2,
    str("wall must be 0 < wall < ", min(w,d)/2, ", got: ", wall));
  difference() {
    cube([w, d, h]);
    translate([wall, wall, wall])
      cube([w - 2*wall, d - 2*wall, h]);  // open top — valid manifold
  }
}
```

The `assert()` guard here catches the problem before it reaches the renderer. This is better than discovering it in the slicer.

### Problem 3 — Shapes That Only Touch (Not Overlap)

Two shapes that share a face but do not overlap create a non-manifold edge — an edge that belongs to faces from both shapes but with no clear "inside." Fix: overlap by 0.001 mm and wrap in `union()`.

```openscad
module two_boxes() {
  union() {
    cube([10, 10, 10]);
    translate([10 - 0.001, 0, 0])   // overlap by 0.001 — not just touch
      cube([10, 10, 10]);
  }
}
```

### Problem 4 — Inverted Normals from Negative `scale()`

`scale()` with a negative value flips face normals (the direction each face "points"), creating inside-out geometry. The shape looks correct in the preview but has every face pointing the wrong direction — which slicers interpret as solid material where there should be empty space.

```openscad
// WRONG — negative scale flips normals:
// scale([-1, 1, 1]) some_module();

// CORRECT — mirror() preserves normals:
mirror([1, 0, 0]) some_module();
```

### Debugging Tip: The Ghost Modifier

```openscad
// Use the % modifier to render a shape as a transparent ghost
// so you can see inside the model and verify cutter placement.
difference() {
  cube([20, 20, 20]);
  % cylinder(r=5, h=25, $fn=24);  // ghost the cutter
}
```

The `%` modifier makes the cutter semi-transparent in preview mode, letting you visually verify it's positioned and sized correctly before committing to the render.

### Manifold Check Workflow

```bash
# Build the STL
3dm build

# OpenSCAD prints manifold warnings to the console, e.g.:
#   WARNING: Object may not be a valid 2-manifold ...
# Check for this message after every build.

# For more detail, use admesh:
# Linux:   apt install admesh
# macOS:   brew install admesh
admesh --analyze build/main.stl

# Or open the STL in PrusaSlicer and enable "Check for geometry errors"
# to see orange highlights on problem edges.
```

> ⚠ The correct OpenSCAD manifold warning is **"WARNING: Object may not be a valid 2-manifold"**. Searching for any other string will cause you to miss real errors.

---

## Step 5 — `surface()` for Height-Map Geometry

### The Concept: Images as 3D Terrain

`surface()` reads a grayscale image or a `.dat` data file and creates a 3D surface where pixel brightness maps to Z height. Black pixels (value 0) produce no height; white pixels (value 255) produce maximum height. Every shade of gray in between produces an intermediate height, interpolated smoothly between pixels.

Think of a topographic map where elevation is encoded in color — `surface()` works exactly like that. You can create terrain landscapes from satellite elevation data, embossed artwork from any image, textured panels from grayscale photographs, or precise surface profiles from engineering data.

### Why `surface()` Is Powerful

Traditional CSG modeling works from the outside in: you define shapes geometrically and combine them. `surface()` lets you work from _data_ — the shape emerges from a dataset rather than from geometric primitives. This is how architectural visualization software creates terrain, how prosthetic designers create textured grip surfaces, and how engineers create test panels with complex surface profiles.

### Example 1: Minimal Self-Contained `surface()` from a `.dat` File

Save the matrix below as `terrain.dat` in the same folder as your `.scad` file, then run the `surface()` call. No external image editor required.

```
 0  10  20  10   0
10  40  60  40  10
20  60 100  60  20
10  40  60  40  10
 0  10  20  10   0
```

```openscad
// In your .scad file:
scale([5, 5, 0.3])   // each cell = 5 mm wide; height scaled from 0–100
  surface(file="terrain.dat", center=true);
```

This produces a small mountain shape — highest at the center, tapering outward. The `scale()` controls the physical dimensions: X/Y scale determines how wide each data cell becomes, and Z scale determines the vertical exaggeration.

### Example 2: Embossed Logo Panel

Create a grayscale PNG (logo = white, background = black), save it as `src/logo_heightmap.png`, then use the module below.

```openscad
module logo_panel(panel_w=60, panel_d=40, panel_h=3, relief=1.5) {
  // Base plate
  cube([panel_w, panel_d, panel_h]);

  // Embossed surface on top.
  // Assumes logo_heightmap.png is 100×100 pixels; scale to fit the panel.
  translate([0, 0, panel_h])
    scale([panel_w/100, panel_d/100, relief/255])
      surface(file="src/logo_heightmap.png", center=false, invert=false);
}

logo_panel();
```

> ✓ `surface()` supports PNG (grayscale or colour — uses luminance) and `.dat` (whitespace-separated matrix). Always check that the image dimensions match the aspect ratio you want before scaling.

---

## Step 6 — Advanced: `children()` and Custom Container Modules

### The Concept: Modules That Accept Geometry as Input

So far, every module you've written produces geometry from parameters. `children()` lets you write modules that _wrap_ geometry — they accept shapes as input and do something with them. This is like writing a picture frame that works with any picture, rather than one specific picture built into the frame.

The pattern is called a **container module**: a module that defines a structural context (a base plate, a grid, a mounting system) and places its children in that context. The caller provides the geometry; the module provides the infrastructure.

### `$children`: How Many Children Were Passed

`$children` is an automatic variable that contains the count of child objects passed to a module. You can use it to loop over children with `children(i)` to access each one individually by index (0-based).

### Example 1: `mounted_on_plate` — Place Any Geometry on a Base with Corner Posts

```openscad
module mounted_on_plate(plate_w, plate_d, plate_h=3, post_h=5) {
  // Base plate
  color("LightGray")
    cube([plate_w, plate_d, plate_h]);

  // Corner mounting posts
  for (x = [5, plate_w - 5]) {
    for (y = [5, plate_d - 5]) {
      translate([x, y, plate_h])
        cylinder(r=3, h=post_h, $fn=16);
    }
  }

  // Child geometry sits on top of the posts
  translate([0, 0, plate_h + post_h])
    children();
}

// Usage: any geometry wrapped in mounted_on_plate()
mounted_on_plate(80, 60, plate_h=3, post_h=8) {
  cylinder(r=15, h=20, $fn=32);
}
```

`children()` here is called without an index, which passes _all_ children as a group. The cylinder in the usage example will be placed on top of the posts — without the module knowing or caring what shape it is.

### Example 2: `repeat_children` — Tile Multiple Named Children in a Grid

`$children` gives you the count of children passed. Use `children(i)` to render the i-th child individually.

```openscad
module repeat_children(n=3, spacing=25) {
  for (i = [0 : $children - 1]) {
    for (j = [0 : n - 1]) {
      translate([j * spacing, i * spacing, 0])
        children(i);  // render the i-th child
    }
  }
}

translate([0, 100, 0])
repeat_children(n=4, spacing=20) {
  sphere(r=5, $fn=16);           // child 0
  cylinder(r=4, h=10, $fn=16);   // child 1
  cube([8, 8, 6]);                // child 2
}
```

This tiles each child shape in its own row — spheres in the first row, cylinders in the second, cubes in the third — repeated 4 times horizontally. The module doesn't know what shapes it's tiling; it just repeats whatever is passed to it.

> ✓ OpenSCAD does **not** expose bounding-box queries at runtime. Always pass dimensions explicitly to container modules rather than trying to compute them from children.

---

## Step 7 — Advanced: Lookup Tables and `search()`

### The Concept: Data-Driven Parametric Design

So far, parametric design meant: change a number, the shape changes. This step takes it further: **data-driven design** means the shape is determined by structured data — tables, lists, databases of values.

Instead of hardcoding `density = 1.24` for PLA and remembering to change it manually when you switch materials, you define a material table and let the code look up the right values automatically. The design reacts to the material choice; you just change one variable.

This is how professional parametric CAD systems work. A single master file can describe a family of parts at different sizes, materials, and configurations — all driven by lookup tables.

### `lookup()`: Smooth Interpolation from a Table

`lookup()` finds an output value by interpolating between entries in a `[input, output]` table. If the input falls between two entries, the output is linearly interpolated between them.

```openscad
// Temperature-to-fan-speed lookup table
speed_table = [
  [0,   0],   //  0°C -> fan off
  [40,  0],   // 40°C -> fan off
  [50, 50],   // 50°C -> 50% speed
  [60, 80],   // 60°C -> 80% speed
  [70, 100]   // 70°C -> full speed
];

temp = 55;
fan_speed = lookup(temp, speed_table);
echo("Fan speed at", temp, "°C:", fan_speed, "%");  // -> 65%
```

`lookup()` is especially useful for smoothly varying geometric properties — rounding radii that increase with part size, wall thicknesses that scale with load, fin counts that increase with diameter.

### `search()`: Exact Match in a List

`search()` finds the index of a value in a list, enabling exact-match lookup for categorical data like material names.

> ⚠ `search()` returns a **list of lists**. Check `len(matches[0]) > 0` for a valid result — `idx != []` does **not** work correctly in OpenSCAD.

```openscad
materials = ["PLA",  "PETG", "ABS",  "TPU",  "Nylon"];
densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];

selected = "PETG";
idx = search([selected], materials)[0];
density = densities[idx];
echo(str(selected, " density: ", density, " g/cm³"));
```

### Example 3: Print Cost Estimator with `search()` and `assert()`

This module demonstrates the full pattern: a lookup table for material properties, `search()` to find the right row, `assert()` to catch invalid material names, and computed geometry that reacts to all of it.

```openscad
module print_cost_label(volume_mm3, material="PLA") {
  materials = ["PLA",  "PETG", "ABS",  "TPU",  "Nylon"];
  densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];
  costs_g   = [ 0.020,  0.025,  0.018,  0.035,  0.045];

  // search() returns a list of lists.
  // matches[0] is the first result: an index on success, [] on failure.
  matches = search([material], materials);
  assert(len(matches[0]) > 0,
    str("Unknown material: \"", material, "\". Valid: ", materials));
  idx = matches[0];

  mass_g = (volume_mm3 / 1000) * densities[idx];
  cost   = mass_g * costs_g[idx];
  label  = str(material, ": ", round(mass_g * 10) / 10, "g / $",
               round(cost * 100) / 100);

  echo("Cost estimate:", label);
  linear_extrude(1)
    text(label, size=4, font="Liberation Sans", halign="center");
}

print_cost_label(12000, "PETG");
```

---

## Exercise Set A: Phone Stand

### A1 — Hull Transition

Add a smooth `hull()` transition between the base plate and the mounting post:

```openscad
hull() {
  translate([15, 20, 0]) cylinder(r=8, h=1, $fn=32);   // post footprint on base
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);  // actual post
}
```

### A2 — Tolerance Stack-Up

Measure the three main structural parts of your phone stand and record them in a table. Calculate worst-case stack-up:

**Worst case = sum of all individual tolerances**

Example for three parts each at ±0.15 mm: 0.15 + 0.15 + 0.15 = **±0.45 mm total**

Document your own measurements in a similar table.

### A3 — Add a Cable Slot

Extend your phone stand design with a cable slot through the base:

```openscad
cable_slot_w  = 12;   // mm
cable_slot_d  = 5;    // mm
cable_slot_z  = -0.001;

// Add inside your main difference() block:
translate([base_w/2 - cable_slot_w/2, 0, cable_slot_z])
  cube([cable_slot_w, cable_slot_d, base_h + 0.002]);
```

---

## Exercise Set B: Keycap with Text

### B1 — Build a Mechanical Keyboard Keycap

```openscad
// Parametric keycap for Cherry MX switches
key_w      = 18;
key_d      = 18;
key_h      = 7;
stem_r     = 2.75;  // MX stem: 5.5 mm diameter
stem_h     = 3.8;
wall       = 1.5;
label_text = "A";

module keycap() {
  difference() {
    // Keycap body with slight top curve
    hull() {
      cube([key_w, key_d, key_h - 2], center=true);
      translate([0, 0, 1]) cube([key_w - 2, key_d - 2, key_h], center=true);
    }
    // Hollow inside
    translate([0, 0, -wall])
      cube([key_w - 2*wall, key_d - 2*wall, key_h], center=true);
    // MX stem hole
    translate([0, 0, -(key_h/2 + 0.001)])
      cylinder(r=stem_r + 0.1, h=stem_h + 0.001, $fn=16);
  }
}

module stem_mount() {
  translate([0, 0, -(key_h/2 + stem_h)])
    difference() {
      cylinder(r=stem_r + wall, h=stem_h, $fn=16);
      cylinder(r=stem_r, h=stem_h + 0.001, $fn=16);
    }
}

keycap();
stem_mount();

// Engrave label on top
translate([0, 0, key_h/2 - 0.8])
  linear_extrude(1.2)
    text(label_text, size=8, font="Liberation Sans:style=Bold",
         halign="center", valign="center", $fn=4);
```

### B2 — Validate with `3dm info`[^3]

```bash
3dm info
```

Document what the model description reports and compare it to your design intent.

### B3 — Print and Test

Print the keycap and test it on a Cherry MX switch (or compatible). If the stem is too tight, increase the clearance from `stem_r + 0.1` to `stem_r + 0.15`. If too loose, decrease to `stem_r + 0.05`.

---

## Exercise Set C: Stackable Bins

### C1 — Build a Three-Size Bin Set

```openscad
// Small bin
translate([0, 0, 0])
  bin_assembly(bin_w=60, bin_d=45, bin_h=30);

// Medium bin
translate([80, 0, 0])
  bin_assembly(bin_w=80, bin_d=60, bin_h=40);

// Large bin
translate([180, 0, 0])
  bin_assembly(bin_w=100, bin_d=80, bin_h=50);
```

### C2 — Diagnose and Fix Non-Manifold Geometry

Non-manifold geometry occurs when faces share edges inconsistently (T-junctions, missing faces, zero-thickness walls). A common cause is two shapes that touch at exactly one face:

```openscad
// PROBLEM: two cubes share a face exactly — may produce a non-manifold edge
cube([20, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);  // touching at x=20

// FIX 1: use union()
union() {
  cube([20, 20, 10]);
  translate([20, 0, 0]) cube([20, 20, 10]);
}

// FIX 2: overlap slightly
union() {
  cube([20.001, 20, 10]);
  translate([20, 0, 0]) cube([20, 20, 10]);
}
```

```bash
# Diagnosis
3dm info  # AI will often flag non-manifold geometry
# Also open the STL in your slicer and enable "Check for geometry errors"
```

### C3 — Advanced Geometry: `hull()` and `minkowski()`

```openscad
// hull() creates a convex envelope — useful for organic transitions
module smooth_transition() {
  hull() {
    translate([0, 0, 0])  cylinder(r=15, h=5, $fn=64);
    translate([0, 0, 30]) cylinder(r=5,  h=2, $fn=64);
  }
}
smooth_transition();

// minkowski() adds the secondary shape to every surface point
// Result: all edges rounded by 2 mm
module rounded_hull() {
  minkowski() {
    hull() {
      cylinder(r=10, h=3, $fn=8);           // octagonal prism
      translate([30, 0, 0]) sphere(r=8, $fn=32);
    }
    sphere(r=2, $fn=16);  // rounds all edges by 2 mm
  }
}
rounded_hull();
```

---

## Quiz — Lesson 3dMake.10 (15 questions)

1. What tool do you use to measure printed part dimensions against the design specification?
2. What is tolerance stack-up, and why does it matter for multi-part assemblies?
3. What causes non-manifold geometry in OpenSCAD, and how do you detect it?
4. How does `hull()` differ from `union()`?
5. What does `3dm info` help you verify about your model?
6. What is the diameter of a Cherry MX stem, and what clearance would you add for a slip-fit keycap?
7. True or False: `find -newer` is an event-driven file change detection method.
8. If three parts each have ±0.15 mm tolerance, what is the worst-case total error for a three-part stack?
9. What does the `$fn` parameter control in OpenSCAD?
10. Describe two methods for fixing non-manifold geometry caused by two touching (but not overlapping) shapes.
11. What is the difference between `hull()` and `minkowski()` for creating organic shapes? Give one use case for each.
12. What does `resize([50, 0, 0])` do, and why might `resize()` behave unexpectedly for non-uniform scaling?
13. When measuring a printed part with calipers[^2], what is the difference between an inside measurement and an outside measurement, and when does that distinction matter for tolerance analysis?
14. Describe the iterative workflow for dialling in press-fit tolerances: what do you print, what do you measure, and how do you adjust?
15. If `3dm info` reports "the model appears non-manifold," what are three possible causes you would investigate in your OpenSCAD code?

---

## Extension Problems (15)

1. Create a tolerance sensitivity study: build 5 keycaps with stem clearance from 0.05–0.25 mm in 0.05 mm increments, print them, and record which values fit your switches.
2. Design a go/no-go gauge for a 10 mm nominal hole: a part with a "go" pin sized for slip-fit and a "no-go" pin sized for interference fit.
3. Write a printer calibration SOP: bed levelling, first-layer calibration, and dimension verification. Include a measurement checklist.
4. Build a three-tier stackable storage system for art supplies. Each tier has a different inner grid.
5. Conduct a tolerance stack-up analysis for your stackable bin system. Calculate worst-case misalignment.
6. Build a parametric test coupon that tests four wall thicknesses (0.8, 1.2, 1.6, 2.0 mm) in a single print.
7. Design a caliper stand: a holder that keeps your digital calipers at a comfortable angle for one-handed operation.
8. Build a non-manifold error catalogue: intentionally create 5 different types of non-manifold geometry, document how each was created, and how to fix it.
9. Use `hull()` to design a smooth ergonomic tool handle and compare it to a simple cylinder handle.
10. Create a printability checklist for new designs: overhangs, wall thickness, minimum feature size, support requirements. Apply it to your keycap and bin designs.
11. Research the `resize()` function. Build an example showing how it behaves differently from `scale()` for non-uniform resizing.
12. Design a multi-part assembly tutorial: a three-piece interlocking puzzle that teaches tolerance, alignment, and slip-fit.
13. Build a "measurement worksheet" template in OpenSCAD: render a flat sheet that lists all key dimensions of a part as text, for printing alongside the part.
14. Create a chi-squared goodness-of-fit test for your printer's dimensional accuracy: measure 20 prints of the same part and determine whether the errors are normally distributed.
15. Write a comprehensive troubleshooting guide covering the 10 most common 3D printing failures you have encountered or researched, with causes, prevention, and fixes.

---

## References and Helpful Resources

[^1]:
    OpenSCAD User Manual — Hull and Minkowski.
    https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull

[^2]: Digital Calipers Measurement Technique — see Appendix B of this document.

[^3]:
    3DMake GitHub Repository — Command reference including `3dm info`.
    https://github.com/tdeck/3dmake

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub
- CodeSolutions Repository: https://github.com/ProgrammingWithOpenSCAD/CodeSolutions
- OpenSCAD Quick Reference: https://programmingwithopenscad.github.io/quick-reference.html
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Reference Appendices

_All supporting documents for Lesson 10 are included below. You do not need to open any additional files._

---

## Appendix A: Measurement Worksheet

**Use this for:** Measuring real-world objects before modeling. Record three measurements per feature, then use the average in your OpenSCAD code — never a single measurement.

**Student Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_\_\_  
**Project / Assignment:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### How to Use This Worksheet

1. Measure each feature three times and record all three values.
2. Calculate the average: add the three values and divide by 3.
3. Round to one decimal place (e.g., 23.4 mm).
4. Use the average in your OpenSCAD code — not any single measurement.

_Units: All measurements in millimeters (mm) unless otherwise noted._

---

### Object 1

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

Notes / sketches:

```
(describe the object here — label which direction is X, Y, Z)
```

---

### Object 2

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

Notes / sketches:

```
(describe the object here)
```

---

### Object 3

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

---

### Object 4

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

---

### Object 5

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

---

### Accuracy Check

After completing all measurements, compare your averages with a partner who measured the same objects.

| Object | My Average (mm) | Partner's Average (mm) | Difference (mm) | Within 1 mm? |
| :----: | :-------------: | :--------------------: | :-------------: | :----------: |
|   1    |                 |                        |                 |              |
|   2    |                 |                        |                 |              |
|   3    |                 |                        |                 |              |
|   4    |                 |                        |                 |              |
|   5    |                 |                        |                 |              |

If any difference is greater than 1 mm, remeasure together and find the source of the discrepancy.

### Percent Error (Optional / Extension)

If your instructor provides the "true" dimension of an object, calculate your percent error:

`% error = (|your average − true value| / true value) × 100`

| Object | Your Average | True Value | Difference | % Error |
| :----: | :----------: | :--------: | :--------: | :-----: |
|        |              |            |            |         |
|        |              |            |            |         |

A percent error under 2% is excellent for caliper work at this level.

### Reflection

_Answer in complete sentences._

1. Which measurement was most difficult to take and why?

2. Did your three measurements for any feature vary significantly? What might cause that variation?

3. If you were designing an object in OpenSCAD that needed to fit _over_ one of these objects, which measurement would you use — your smallest, your largest, or your average? Why?

---

## Appendix B: Measurement Calibration Guide

_Ensure accurate dimensions in your printed parts through proper calibration and verification._

### Why Calibration Matters

Printed dimensions often deviate from designed dimensions due to nozzle width variations, inconsistent extrusion flow rate, plastic shrinkage during cooling, slicer interpretation differences, and material-specific shrinkage (ABS can shrink 0.3–1%).

- Typical tolerances **without** calibration: ±0.3–0.5 mm
- Typical tolerances **with** calibration: ±0.1–0.2 mm

---

### Pre-Print Calibration

#### 1. Nozzle Diameter Verification

Print a simple 10 mm × 10 mm × 5 mm solid box at default 0.4 mm line width with 100% flow rate. Measure the result. If it deviates significantly from 10 mm, the nozzle may be partially clogged (clean it) or the wrong size (replace it).

#### 2. E-Steps Calibration (Extrusion Rate)

E-steps control how many stepper-motor steps produce 1 mm of filament movement. If this is wrong, every print will be over- or under-extruded.

**Method:**

1. Heat extruder to printing temperature.
2. Mark filament 100 mm from the extruder entrance with a marker.
3. Command extrusion of exactly 100 mm (`G1 E100 F100`).
4. Measure the actual distance the mark moved.

**Formula:**

```
New E-steps = Current E-steps × (100 mm / Actual distance moved)

Example:
  Current: 93 steps/mm
  Commanded: 100 mm
  Actual moved: 92 mm
  New: 93 × (100 / 92) = 101 steps/mm
```

Apply with `M92 E101` then `M500` to save (Marlin), or update configuration file (Klipper).

#### 3. First Layer Height Verification

Print a single-layer square (base layer only). The first layer should be 0.2–0.25 mm thick — roughly the thickness of a standard piece of printer paper. Adjust Z-offset by ±0.05 mm increments until correct.

---

### XY Dimension Calibration

**Test file (OpenSCAD):**

```openscad
cube_size      = 20;
wall_thickness = 2;

difference() {
  cube([cube_size, cube_size, cube_size], center=true);
  cube([cube_size - 2*wall_thickness,
        cube_size - 2*wall_thickness,
        cube_size + 1], center=true);  // open top
}
```

Print at 100% flow rate. Allow complete cooling (2+ hours). Measure the _internal_ dimension at 3 locations per axis. Expected internal width: `20 - 2×2 = 16 mm`.

**Calibration formula:**

```
Flow rate adjustment = (Expected internal / Actual internal) × 100%

Example:
  Expected: 16.00 mm
  Actual: 15.75 mm
  Adjustment: (16.00 / 15.75) × 100% = 101.6%  →  set flow to 101.6% in slicer
```

---

### Shrinkage Compensation by Material

| Material | Typical Shrinkage | Recommended Action                             |
| -------- | :---------------: | ---------------------------------------------- |
| PLA      |     0.3–0.5%      | Usually acceptable; no action needed           |
| PETG     |      0.5–1%       | Scale design up 0.5–1% for critical dimensions |
| ABS      |     0.8–1.5%      | Scale up 1% minimum                            |
| TPU      |       1–2%        | Scale up 1–2% for critical dimensions          |

Apply in OpenSCAD:

```openscad
final_size        = 20;
material_shrink   = 1.01;  // 1% for ABS
designed_size     = final_size * material_shrink;
```

---

### Critical Measurements to Track

| Measurement        | Method             | Acceptable Tolerance | Frequency   |
| ------------------ | ------------------ | :------------------: | ----------- |
| Wall thickness     | Calipers (3 spots) |       ±0.1 mm        | Every print |
| Hole diameter      | Calipers or gauge  |     ±0.1–0.2 mm      | Every print |
| Overall dimensions | Calipers           |       ±0.2 mm        | Monthly     |
| Layer height       | Stack on calipers  |       ±0.02 mm       | Monthly     |
| Vertical height    | Measure side face  |       ±0.1 mm        | Every print |

---

### Quick Calibration Checklist

**Before first print with new settings:**

- [ ] E-steps calibration complete
- [ ] First layer height verified
- [ ] Nozzle diameter confirmed
- [ ] Test print completed and measured

**Monthly maintenance:**

- [ ] Calibration cube printed and measured
- [ ] Flow rate adjusted if needed
- [ ] Layer height verified
- [ ] Temperature consistency checked

**After any hardware change (nozzle swap, bed relevel, material change):**

- [ ] Re-verify nozzle diameter
- [ ] Re-verify first layer height
- [ ] Test print and measure before production prints

---

### Recommended Measurement Tools

| Tool             | Typical Cost | Accuracy | Best Use                        |
| ---------------- | :----------: | :------: | ------------------------------- |
| Digital calipers |    $5–15     | ±0.05 mm | Primary tool for all work       |
| Steel ruler      |    $3–10     |  ±1 mm   | Quick rough checks              |
| Vernier calipers |    $10–30    | ±0.05 mm | Precision work                  |
| Micrometer       |    $20–50    | ±0.01 mm | Critical tolerance verification |

**Recommendation:** Digital calipers are the most versatile and affordable starting point. Buy a pair before you print your first functional part.

---

### Calibration Record

| Field                    | Value |
| ------------------------ | ----- |
| Last Calibration Date    |       |
| Printer Model            |       |
| Current E-Steps          |       |
| Current Flow Rate        |       |
| Materials Calibrated For |       |

---

## Appendix C: Diagnostic Checklist

_Use this checklist to systematically diagnose and troubleshoot printing issues before consulting the solutions guide._

### Quick Diagnosis Flowchart

```
Print Problem?
|
+---- [Before Print] Issues?
|  +---- Filament won't load  ->  CHECK: Temperature, drive gear, nozzle
|  +---- Printer won't heat   ->  CHECK: Power, temp sensor, firmware
|  +---- Bed not level        ->  CHECK: Leveling routine, bed surface
|
+---- [First Layer] Issues?
|  +---- Won't stick          ->  CHECK: Bed temp, cleanliness, nozzle height
|  +---- Too squished         ->  CHECK: Nozzle height, bed temp
|  +---- Gaps / uneven        ->  CHECK: Bed levelness, hot end alignment
|
+---- [Mid-Print] Issues?
|  +---- Stops extruding      ->  CHECK: Clog, temp drop, jam
|  +---- Layers shift         ->  CHECK: Loose belts, mechanical bind
|  +---- Print wobbles        ->  CHECK: Build plate, print stability
|
+---- [Print Quality] Issues?
   +---- Weak / brittle       ->  CHECK: Temperature, flow rate, layer adhesion
   +---- Rough surface        ->  CHECK: Flow rate, speed, temperature
   +---- Warped               ->  CHECK: Bed temperature, cooling, material
```

---

### Pre-Print Diagnostics

#### A — Power and Connectivity

- [ ] Printer powered on; LED indicators normal
- [ ] No error codes displayed; interface responding
- [ ] USB connected (if applicable)

If failed: check power outlet, cable, power supply specs; power-cycle (off 30 sec, back on).

#### B — Temperature System

Heat hot end to 200°C; time to reach temperature should be 2–4 minutes with a steady rise (no plateau). Heat bed to 60°C; should reach target in 5–10 minutes.

**Stability test:** After reaching target, record temperature every minute for 10 minutes.

| Range  | Assessment                            |
| :----: | ------------------------------------- |
|  ±2°C  | Excellent                             |
|  ±5°C  | Acceptable                            |
| ±10°C  | Marginal — investigate thermal sensor |
| >±10°C | Problem — do not print until resolved |

#### C — Mechanical Systems

Disable motors (if firmware allows) and manually move each axis. Expected: smooth, no grinding.

| Axis   | Result                 |
| ------ | ---------------------- |
| X-axis | smooth / rough / stuck |
| Y-axis | smooth / rough / stuck |
| Z-axis | smooth / rough / stuck |

If rough or stuck: check for visible obstructions, inspect rails, verify pulleys turn freely, check belt tension, lubricate dry joints.

#### D — Build Plate Leveling (Paper Method)

1. Heat bed and nozzle to printing temperature.
2. Move nozzle to each corner; adjust leveling screw until a standard sheet of paper drags slightly under the nozzle.
3. Repeat for all 4 corners, then check center.
4. Target: consistent slight paper drag at all points; nozzle does not contact bed anywhere.

#### E — Filament and Extruder

- [ ] Filament diameter visually consistent over ~50 cm
- [ ] No visible cracks, kinks, or damage
- [ ] Spool rotates freely without binding
- [ ] Filament path clear of obstructions

**Manual extrusion test:** Heat to printing temperature. Push 10–20 mm of filament through manually. Expected: smooth push, consistent flow at nozzle tip.

---

### First Layer Appearance Guide

| Appearance               | Cause                          | Fix                                 |
| ------------------------ | ------------------------------ | ----------------------------------- |
| Wavy / embossed lines    | Nozzle too close to bed        | Raise Z-offset                      |
| Gaps between lines       | Nozzle too far from bed        | Lower Z-offset                      |
| Completely squished flat | Nozzle too low or bed too high | Raise Z-offset or re-level          |
| Partial adhesion only    | Bed too cool or dirty          | Clean bed; increase bed temperature |
| Consistent, even lines   | Correct                        | Continue print                      |

---

### Mid-Print Extrusion Failure

When extrusion stops during a print:

1. **Pause** (do not cancel) immediately.
2. Listen for extruder grinding sounds (indicates jam).
3. Observe whether filament is still feeding into the extruder.

```
Is filament stuck in the extruder?
+---- YES  -->  Nozzle clog likely
|               Try: cold pull, retract, then clean nozzle
|               See Appendix D (Common Issues) for full procedure
|
+---- NO   -->  Loading/path issue
               Is spool binding?     -->  Fix spool rotation
               Is path blocked?      -->  Clear obstruction
               Is drive gear slipping? -->  Clean and re-tension drive gear
```

---

### Dimensional Accuracy Check (After Print Cools)

Let the print cool for at least 2 hours before measuring.

**Measurement protocol:**

1. Measure each dimension 3 times at different locations.
2. Calculate average.
3. Compare to the design dimension.
4. Calculate deviation: `Deviation % = ((Measured − Design) / Design) × 100%`

|     Tolerance     |  Status  | Action                          |
| :---------------: | :------: | ------------------------------- |
| ±0.5 mm or better |   PASS   | No adjustment needed            |
|     ±0.5–1 mm     | MARGINAL | Document and monitor            |
|      >±1 mm       |   FAIL   | Adjust flow rate or recalibrate |

---

### Diagnostic Report Template

_Fill this out before seeking help — it ensures you've systematically checked the most common causes._

```
DIAGNOSTIC REPORT
=================
Printer Model:
Problem Description:
When it occurs: (always / sometimes / first 5 layers / etc.)
Recent changes (nozzle swap, new filament, new settings):

DIAGNOSTICS PERFORMED:
[ ] Power / connectivity verified
[ ] Temperatures verified and stable
[ ] Mechanical movement tested on all axes
[ ] Bed leveling checked
[ ] Filament loading tested
[ ] First layer inspected and evaluated
[ ] Print quality evaluated mid-print

Key Findings:
1.
2.
3.

Attempted Solutions:
1.
2.

Result: (Solved / Partial / Ongoing)
```

---

## Appendix D: Common Issues and Solutions

_Comprehensive troubleshooting guide for the most frequent 3D printing problems. Cross-reference with the Diagnostic Checklist (Appendix C) to identify which section applies to your situation._

---

### Pre-Print Issues

#### Problem: Filament Won't Load

**Symptoms:** Extruder clicks or grinds but no filament moves; nothing extrudes when manual extrude is commanded.

**Diagnosis checklist:**

- [ ] Nozzle temperature high enough for the material?
- [ ] Filament path clear of obstructions?
- [ ] Drive gear still has grip (not worn smooth)?
- [ ] Extruder tension set correctly?

**Solutions (try in order):**

1. Increase nozzle temperature by 10°C — too cold makes extrusion harder.
2. Clean the extruder drive gear with a wire brush to restore grip.
3. Check filament diameter — should be 1.75 mm ±0.03 mm. A spool that measured correctly when new may have inconsistent sections.
4. Verify extruder tension — should grip firmly but not crush the filament.
5. Inspect nozzle for partial clog (see "Nozzle Clog" below).

#### Problem: Warped or Damaged Filament

**Symptoms:** Filament appears kinked on the spool; inconsistent diameter; melted spots.

**Solutions:**

1. Cut off ~30 cm of the damaged section and discard.
2. If the filament seems brittle or stringy: dry it in a low oven at 50°C for 2 hours (PLA). Moisture absorption causes significantly worse print quality.
3. Store filament sealed with desiccant between sessions — especially important for Nylon, PETG, and TPU, which are hygroscopic.

---

### Print Quality Issues

#### Problem: Poor Bed Adhesion (First Layer Lifts)

**Symptoms:** Print lifts off bed during printing; edges curl up; print comes free entirely.

**Solutions (most effective first):**

1. Re-level the build plate — cold plate leveling is more accurate.
2. Clean the build plate — wipe with isopropyl alcohol to remove oils and dust.
3. Lower the nozzle — if it's too high, reduce Z-offset by 0.05–0.1 mm.
4. Increase bed temperature by 5–10°C.
5. Material-specific adhesion aids:
   - PLA: Painter's tape, glue stick, or clean bare PEI/glass
   - PETG: Textured PEI or thin glue layer (prevents it from bonding _too_ strongly to smooth surfaces)
   - ABS: Heated enclosure + blue tape + ABS slurry (acetone + scraps)
   - TPU: Clean bed, slightly elevated temperature

#### Problem: Nozzle Clog

**Symptoms:** No extrusion after initial layers; consistent gap between nozzle and surface; clicking from extruder; pressure building in hot end.

**Solutions (increasing intensity — try each before escalating):**

1. **Cold Pull:** Heat nozzle to 200°C, grip filament, pull firmly while the nozzle cools. Repeat 5–10 times. The extracted filament should have a "plug" shape that brought debris with it.

2. **Poke from top:** Heat to printing temperature. Carefully insert a 0.3–0.4 mm drill bit or acupuncture needle through the top of the nozzle (from the heatbreak side). Do not force — the goal is to break up, not compact, the clog.

3. **Soak and clean:** Remove the nozzle while hot (use wrench). Soak in acetone for 20–30 minutes. Use an ultrasonic cleaner if available. Clear the passage with a thin needle.

4. **Replace:** If the clog persists, the nozzle may be damaged internally. Replacement nozzles cost $3–10 — keep spares on hand.

#### Problem: Under-Extrusion (Thin Walls, Weak Prints)

**Symptoms:** Walls thinner than expected; layers separate easily; visible horizontal gaps; sections that appear lighter in color.

**Solutions:**

1. Check for partial nozzle clog (a fully extruding nozzle means a partial clog is possible).
2. Increase flow rate by 5–10% in the slicer.
3. Raise temperature by 5–10°C.
4. Reduce print speed by 10–20%.
5. Calibrate E-steps (see Appendix B).
6. Clean drive gear to remove accumulated plastic dust.

#### Problem: Over-Extrusion (Blobs, Rough Texture)

**Symptoms:** Excess material squishing between layers; rough, bumpy surface; blobs or zits on walls.

**Solutions:**

1. Reduce flow rate to 95% in the slicer.
2. Lower temperature by 5–10°C.
3. Verify line width — should be approximately 1.2× the nozzle diameter (0.4 mm nozzle → 0.48 mm line width).
4. Check slicer settings for nozzle size — ensure it matches the actual nozzle installed.

#### Problem: Layer Shifting

**Symptoms:** Layers offset horizontally mid-print; top portion of print is misaligned; usually occurs at a specific layer height.

**Solutions:**

1. Check mechanics: manually move X/Y (motors disabled) — should feel smooth, no resistance. Tighten all visible screws. Inspect belts for fraying.
2. Reduce travel speed by 20–30%. Reduce acceleration in firmware.
3. Check print orientation — tall, thin prints are vulnerable to the nozzle catching an edge and shifting. Rotate or add a brim.
4. If recently updated firmware: verify acceleration settings (try 1000 mm/s²) and step/mm calibration.

#### Problem: Stringing (Fine Threads Between Parts)

**Cause:** Nozzle oozes molten filament while traveling between print sections.

**Solutions:**

1. Reduce temperature by 5–10°C.
2. Increase retraction distance by 0.5–1.5 mm.
3. Increase retraction speed.
4. Enable "wipe on retract" in slicer.
5. Check for worn nozzle — worn nozzles ooze more than new ones.

#### Problem: Warping (Corners Curl Up)

**Cause:** Material cools unevenly and contracts at different rates across the print.

**By material:**

- ABS: Use a heated enclosure, slow cooling fan, higher bed temperature (100–110°C).
- PETG: Reduce cooling fan speed; increase bed temperature.
- PLA: Usually warps if bed temperature is _too high_ — reduce it.

---

### Maintenance to Prevent Issues

| Issue                | Prevention                                                |     Frequency     |
| -------------------- | --------------------------------------------------------- | :---------------: |
| Clogs                | Clean nozzle; avoid heat-creep by maintaining cooling fan | Before each print |
| Bed adhesion         | Level bed; clean plate with IPA                           | Before each print |
| Layer shift          | Check belt tension and drive gear screws                  |      Monthly      |
| Inconsistent quality | Calibrate E-steps; standardize environment                |     Quarterly     |
| Worn nozzle          | Monitor extrusion quality; replace on schedule            |  Every 6 months   |
| Moisture in filament | Store sealed with desiccant                               |      Ongoing      |

---

## Appendix E: Accessibility Audit — Extension Project

_Estimated time: 2–4 hours. This is an optional extension project for students who want to go deeper into inclusive design._

### Overview

Accessibility means designing tools, documents, and workflows so that people with different abilities — including visual impairment, motor differences, and cognitive differences — can use them fully. In a fabrication context, accessibility applies to both the physical products you design and the documentation you produce about them.

This extension project asks you to evaluate one lesson or project for non-visual accessibility barriers, implement concrete improvements, and document what you found.

### Learning Objectives

By completing this project, you will:

- Evaluate digital content for accessibility barriers related to vision, blindness, and low vision
- Apply concrete accessibility best practices (alt-text, code comments, plain language)
- Document improvements and estimate implementation effort
- Strengthen your awareness of inclusive design as a professional responsibility

### Tasks

1. Select one lesson or project (an OpenSCAD file plus its markdown instructions) and review it for accessibility shortcomings.
2. Create a checklist covering: image alt-text, code walkthroughs, tactile cues, plain-language explanations, and file naming conventions. Apply it to the chosen resource.
3. Implement at least three small improvements (add alt text, improve code comments, write a text-only step-by-step walkthrough) and document every change.
4. Produce a one-page audit report summarizing what you found, what you fixed, and what larger improvements would require instructor time.

### Deliverable

A one-page audit report plus a documented set of proposed changes (a "patch" or diff) for the target lesson.

### Accessibility Principles to Apply

**Alt-text for images:** Every image in a document should have a written description that conveys the same information. For a diagram showing a cross-section, the alt-text describes what the cross-section shows, not just "diagram."

**Code walkthroughs:** OpenSCAD files should include a plain-English comment block at the top describing what the file does and how to navigate it. Each module should have a comment explaining its purpose and parameters in plain language.

**Tactile cues in designs:** When designing objects that will be used physically, consider how they work for people who navigate by touch. Distinct ridges, chamfered corners, and different textures at key locations all improve usability for visually impaired users.

**Plain language:** Avoid jargon where a simpler word works. When technical terms are necessary, define them on first use.

---

### Student Audit Documentation Template

**Author:** \_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_  
**Lesson/Project Audited:** \_\_\_\_\_\_\_\_

#### Audit Scope

Resources reviewed:

1.
2.
3.

Testing methodology used (screen reader, keyboard-only navigation, checklist review, other):

---

#### Detailed Findings

For each resource reviewed, complete the following:

**Resource 1: \_\_\_\_\_\_\_\_**

Screen reader assessment:

- Navigation: clear / unclear / broken
- Output readability: readable / partially readable / unreadable
- Error messages: helpful / unclear / missing
- Specific barriers found:

Keyboard navigation:

- All functions accessible via keyboard: Yes / No
- Tab order logical: Yes / No
- Specific barriers:

| Recommendation | Priority (H/M/L) | Feasibility (Easy/Med/Hard) | Impact (H/M/L) |
| -------------- | :--------------: | :-------------------------: | :------------: |
|                |                  |                             |                |
|                |                  |                             |                |

_(Repeat for each resource)_

---

#### Summary of Barriers Found

| Barrier | Frequency | Severity | Resources Affected |
| ------- | --------- | -------- | ------------------ |
|         |           |          |                    |
|         |           |          |                    |

---

#### Recommendations Matrix

| Priority | Feasibility | Impact | Recommendation | Implementation Steps |
| :------: | :---------: | :----: | -------------- | -------------------- |
|   High   |    Easy     |  High  |                |                      |
|   High   |   Medium    |  High  |                |                      |
|  Medium  |    Easy     | Medium |                |                      |

---

#### Reflection Questions

Answer in complete sentences:

1. What surprised you about the accessibility barriers you found?
2. How would you prioritize improvements if you had limited time?
3. What role should users with disabilities play in accessibility testing, rather than non-disabled designers guessing at barriers?
4. What would it take to make accessibility review a standard part of the lesson development process?

---

#### Action Plan

- Which improvements will you tackle first, and why?
- How will you verify that your improvements actually help?
- Timeline for implementation:

---

### Assessment (if graded)

| Category                                                                | Score (0–3) | Notes |
| ----------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — barriers identified, improvements actionable       |             |       |
| Design & Code Quality — testing methodology rigorous, findings specific |             |       |
| Documentation — template complete, recommendations prioritized          |             |       |
| **Total (0–9)**                                                         |             |       |
