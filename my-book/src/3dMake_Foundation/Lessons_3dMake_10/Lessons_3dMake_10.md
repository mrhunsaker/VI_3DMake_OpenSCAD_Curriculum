# Lesson 10 — Hands-On Practice Exercises and Troubleshooting

## Learning Objectives

By the end of this lesson you will be able to:

- Apply `hull()` and `minkowski()`[^1] with awareness of their performance cost
- Use `$preview` to conditionally disable slow operations during development
- Create 2D templates with `projection()` for drilling guides and laser cutting
- Diagnose and fix non-manifold geometry
- Apply `resize()` to imported models and use `surface()` for height-map geometry
- Write advanced parametric assemblies using `children()` and `$children`

---

## Step 1 — `hull()` for Organic Shapes

`hull()` creates the convex hull of its children — the smallest convex shape that contains all of them. It is much faster than `minkowski()` and excellent for creating smooth transitions between shapes.

### Example 1: Smooth transition between a hexagonal cylinder and a sphere

```openscad
// hull() between two different shapes at different heights
// Creates a smooth transition (like a funnel or transition piece)
hull() {
  cylinder(r=20, h=1, $fn=6);       // hexagon at bottom
  translate([0, 0, 30])
    sphere(r=8, $fn=32);             // sphere at top
}
```

### Example 2: Rounded box using `hull()` of 8 spheres

Place one sphere at each of the 8 corners; `hull()` fills the space between them,
rounding every corner and edge by the sphere radius.

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

### Example 3: Wing / aerofoil profile

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

---

## Step 2 — `minkowski()` — Performance Warning and Pattern

`minkowski()` computes the Minkowski sum: it "rolls" the secondary shape around every point on the primary shape's surface. This produces perfectly rounded or offset geometry, but the computation scales with the product of both shapes' face counts.

> ⚠ A complex primary shape combined with a sphere at `$fn=64` can take many minutes to render. Always use `$preview` to skip the `minkowski()` call during development.

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

### `hull()` as a faster `minkowski()` alternative

`hull()` only works for convex shapes, but it is far faster than `minkowski()`.
For a simple rounded box you can get an equivalent result by placing a sphere at
each corner and taking the hull:

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

| Primary shape faces | Secondary `$fn` | Expected render time |
|---|---|---|
| < 100 | 8–16 | < 1 second |
| 100–500 | 8–16 | 1–10 seconds |
| 500–2000 | 8 | 10–60 seconds |
| > 2000 | any | Minutes to hours — avoid |

---

## Step 3 — `projection()` for 2D Templates

`projection()` flattens a 3D model onto the XY plane, creating a 2D outline. Use it to:

- Generate drilling and assembly templates
- Create laser-cut outlines from 3D models
- Check the footprint of a part before printing
- Export DXF files for CNC machining

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

**Exporting a 2D DXF for laser cutting or CNC:**

> **Note:** `3dm` is designed for building STL output. Use the `openscad` CLI directly for DXF export — do **not** use `3dm build` for this step.

```bash
# Linux / macOS
openscad -o template.dxf src/template_projection.scad

# Windows (PowerShell or CMD)
openscad -o template.dxf src\\template_projection.scad
```

**Template projection source file pattern:**

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

A mesh is **manifold** (or "watertight") when every edge is shared by exactly two faces and the surface has no holes, zero-thickness walls, or self-intersections. Slicers require manifold geometry.

### Problem 1 — Co-planar faces in `difference()`

When the cutter exactly coincides with the face of the base shape, OpenSCAD cannot determine which side of the face to keep. Fix: extend the cutter by 0.001 mm on each side.

```openscad
difference() {
  cube([20, 20, 20]);
  translate([5, 5, -0.001])           // extend 0.001 below base
    cylinder(r=5, h=20.002, $fn=24);  // extend 0.001 above top
}
```

### Problem 2 — Zero-thickness or negative-thickness walls

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

### Problem 3 — Shapes that only touch (not overlap)

Two shapes that share a face but do not overlap create a non-manifold edge. Fix: overlap by 0.001 mm and wrap in `union()`.

```openscad
module two_boxes() {
  union() {
    cube([10, 10, 10]);
    translate([10 - 0.001, 0, 0])   // overlap by 0.001 — not just touch
      cube([10, 10, 10]);
  }
}
```

### Problem 4 — Inverted normals from negative `scale()`

`scale()` with a negative value flips face normals, creating inside-out geometry. Use `mirror()` instead.

```openscad
// WRONG — negative scale flips normals:
// scale([-1, 1, 1]) some_module();

// CORRECT — mirror() preserves normals:
mirror([1, 0, 0]) some_module();
```

### Debugging tip — ghost modifier

```openscad
// Use the % modifier to render a shape as a transparent ghost
// so you can see inside the model and verify cutter placement.
difference() {
  cube([20, 20, 20]);
  % cylinder(r=5, h=25, $fn=24);  // ghost the cutter
}
```

### Manifold check workflow

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

`surface()` reads a grayscale image or a `.dat` data file and creates a 3D surface where pixel brightness maps to height. Black = 0 height, white = maximum height. This is useful for terrain, texture panels, and embossed artwork.

### Example 1: Minimal self-contained `surface()` from a `.dat` file

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

### Example 2: Embossed logo panel

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

`children()` gives modules access to the geometry passed to them, enabling powerful reusable "container" patterns. `$children` holds the count of child objects passed.

### Example 1: `mounted_on_plate` — place any geometry on a base with corner posts

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

### Example 2: `repeat_children` — tile multiple named children in a grid

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

> ✓ OpenSCAD does **not** expose bounding-box queries at runtime. Always pass dimensions explicitly to container modules rather than trying to compute them from children.

---

## Step 7 — Advanced: Lookup Tables and `search()`

`search()` finds the index of a value in a list. Combined with lookup tables, this replaces long `if`/`else` chains. `lookup()` interpolates a value from a table of `[input, output]` pairs.

### Example 1: `lookup()` for smooth parametric curves

```openscad
// Temperature-to-fan-speed lookup table
speed_table = [
  [0,   0],   //  0°C → fan off
  [40,  0],   // 40°C → fan off
  [50, 50],   // 50°C → 50% speed
  [60, 80],   // 60°C → 80% speed
  [70, 100]   // 70°C → full speed
];

temp = 55;
fan_speed = lookup(temp, speed_table);
echo("Fan speed at", temp, "°C:", fan_speed, "%");  // → 65%
```

### Example 2: `search()` to look up material properties

```openscad
materials = ["PLA",  "PETG", "ABS",  "TPU",  "Nylon"];
densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];

selected = "PETG";
idx = search([selected], materials)[0];
density = densities[idx];
echo(str(selected, " density: ", density, " g/cm³"));
```

### Example 3: Print cost estimator with `search()` and `assert()`

```openscad
module print_cost_label(volume_mm3, material="PLA") {
  materials = ["PLA",  "PETG", "ABS",  "TPU",  "Nylon"];
  densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];
  costs_g   = [ 0.020,  0.025,  0.018,  0.035,  0.045];

  // search() returns a list of lists.
  // matches[0] is the first result: an index on success, [] on failure.
  matches = search([material], materials);
  assert(len(matches[0]) > 0,
    str("Unknown material: \\"", material, "\\". Valid: ", materials));
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

> ⚠ `search()` returns a list of lists. Check `len(matches[0]) > 0` for a valid result — `idx != []` does **not** work correctly in OpenSCAD.

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

[^1]: OpenSCAD User Manual — Hull and Minkowski.
https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull

[^2]: Digital Calipers Measurement Technique — General metrology reference.
See also: Measurement Worksheet Asset (assets/3dMake_Foundation/measurement_worksheet.md)

[^3]: 3DMake GitHub Repository — Command reference including `3dm info`.
https://github.com/tdeck/3dmake

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub
- CodeSolutions Repository: https://github.com/ProgrammingWithOpenSCAD/CodeSolutions
- OpenSCAD Quick Reference: https://programmingwithopenscad.github.io/quick-reference.html
- Master Rubric: assets/3dMake_Foundation/master-rubric.md
