# Lesson 10: Hands-On Practice Exercises and Troubleshooting

Estimated time: 120–150 minutes

## Learning Objectives [^1]
- Apply skills from Lessons 1–9 in three integrated design exercises
- Use calipers to measure and validate printed parts against specifications
- Diagnose and fix non-manifold geometry errors
- Perform tolerance stack-up analysis
- Use `3dm info` for non-visual validation

## Materials
- 3dMake project
- Printer and PLA filament
- Digital calipers
- Printed parts from previous lessons (or new prints from exercises below)

## Exercise Set A: Phone Stand Refinement

### A1 — Measure and Iterate

Using calipers, measure your printed phone stand against the design specification[^2]:

```markdown
# Lesson 10 — Hands-On Practice Exercises and Troubleshooting
*[CORRECTED — March 2026 Curriculum Revision]*

---

## Learning Objectives

By the end of this lesson you will be able to:

- Apply `hull()` and `minkowski()` with awareness of their performance cost
- Use `$preview` to conditionally disable slow operations during development
- Create 2D templates with `projection()` for drilling guides and laser cutting
- Diagnose and fix non-manifold geometry
- Apply `resize()` to imported models and use `surface()` for height-map geometry
- Write advanced parametric assemblies using `children()` and `$children`

---

## Step 1 — `hull()` for Organic Shapes

`hull()` creates the convex hull of its children — the smallest convex shape that contains all of them. It is much faster than `minkowski()` and excellent for creating smooth transitions between shapes.

```openscad
// hull() between two different shapes at different heights
// Creates a smooth transition (like a transition piece or funnel)

  cylinder(r=20, h=1, $fn=6);          // hexagon at bottom
  translate([0, 0, 30])
    sphere(r=8, $fn=32);                // sphere at top
}

// Rounded box using hull of 4 spheres
// Each sphere is at a corner; hull fills the space between them
r = 5;  // corner radius
w = 40; d = 30; h = 20;
Worst case (all errors same direction): 0.12 + 0.13 + 0.09 = 0.34mm — still within spec
  for (x = [r, w-r]) {
    for (y = [r, d-r]) {
      translate([x, y, 0]) sphere(r=r, $fn=24);
      translate([x, y, h]) sphere(r=r, $fn=24);
    }
  }
}

// Wing / aerofoil profile — hull of two offset cylinders
translate([0, 50, 0])
```
  cylinder(r=6, h=2, $fn=32);              // leading edge (round)
  translate([40, 0, 0]) cylinder(r=1, h=2, $fn=16);  // trailing edge (sharp)
}
```

---

## Step 2 — `minkowski()` — Performance Warning and Pattern

`minkowski()` computes the Minkowski sum: it "rolls" the secondary shape around every point on the primary shape's surface. This produces perfectly rounded or offset geometry, but the computation scales with the product of both shapes' face counts.

**A complex primary shape + sphere with $fn=64 can take minutes to render.** Always use `$preview` to skip it during development.

```openscad
// $preview is TRUE during F5 (fast preview) and FALSE during F6 (full render)
// Use it to swap between a fast approximation and the full computation

PREVIEW = $preview;

module rounded_box(w, d, h, r=4) {
  if (PREVIEW) {
    // Fast preview mode: plain cube — renders instantly
    // (add color to remind you this is not the final shape)
    color("orange", 0.6) cube([w, d, h]);
  } else {
    // Full render mode: proper Minkowski sum
    // Keep the secondary shape (sphere) LOW-POLY to limit face explosion
    minkowski() {
      cube([w - 2*r, d - 2*r, h - r]);
      sphere(r=r, $fn=12);  // keep $fn LOW for minkowski — 12 is enough
    }
  }
}

rounded_box(50, 40, 20, r=5);

// hull() as a faster minkowski() alternative:
// hull() only works for convex shapes, but is MUCH faster
translate([0, 60, 0])

  // Create the equivalent of minkowski(cube, sphere) using hull of 8 spheres
  r = 4;
  w = 50; d = 40; h = 16;
  for (x = [r, w-r]) for (y = [r, d-r]) for (z = [r, h-r]) {
    translate([x, y, z]) sphere(r=r, $fn=12);
  }
}
```

**Performance guidelines for `minkowski()`:**

| Primary shape faces | Secondary shape `$fn` | Expected render time     |
|---------------------|-----------------------|--------------------------|
| < 100               | 8–16                  | < 1 second               |
| 100–500             | 8–16                  | 1–10 seconds             |
| 500–2000            | 8                     | 10–60 seconds            |
| > 2000              | any                   | Minutes to hours — avoid |

---

## Step 3 — `projection()` for 2D Templates

`projection()` flattens a 3D model onto the XY plane, creating a 2D outline. Use it to:
- Generate drilling templates
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

// 2D silhouette (footprint) — place beside the 3D model for comparison
color("LightGreen")
translate([110, 0, 0])
  linear_extrude(1)    // make it 1mm thick so it's visible in 3D preview
    projection(cut=false)
      phone_stand_example();

// Cross-section at z=3 — shows the internal structure at that height
color("LightCoral")
translate([220, 0, 0])
  linear_extrude(1)
    projection(cut=true)
      translate([0, 0, -3])  // shift model so the cut happens at z=3 of the part
        phone_stand_example();
```

**Exporting a 2D DXF for laser cutting or CNC:**

```bash
# Export the projection as DXF (OpenSCAD command line)
# Your .scad file should contain ONLY the projection() call for clean export

# Linux/macOS (bash)
openscad -o template.dxf src/template_projection.scad

# Windows (PowerShell)
openscad -o template.dxf src\template_projection.scad

# Windows (CMD)
openscad -o template.dxf src\template_projection.scad
```

**Template projection source file pattern:**
```openscad
// src/template_projection.scad
// This file exports a 2D projection for DXF output
// Import the 3D model and project it

use <../src/main.scad>

// Only the projection — no 3D geometry
projection(cut=false)
  main_assembly();

// Add mounting hole markers (as circles — DXF circles are standard)
// These appear as circles in the DXF, ready for CNC drilling
hole_positions = [[10, 10], [80, 10], [10, 60], [80, 60]];
for (pos = hole_positions) {
  translate(pos)
    circle(r=1.75, $fn=16);  // 3.5mm diameter holes
}
```

---

## Step 4 — Diagnosing Non-Manifold Geometry

A mesh is **manifold** (or "watertight") when every edge is shared by exactly two faces and the surface has no holes or self-intersections. Slicers require manifold geometry.

**Common causes and fixes:**

```openscad
// PROBLEM 1: Co-planar faces in difference()
// FIX: Apply the 0.001 rule
difference() {
  cube([20, 20, 20]);
  translate([5, 5, -0.001])    // ← extend 0.001 below base
    cylinder(r=5, h=20.002, $fn=24);  // ← extend 0.001 above top
}

// PROBLEM 2: Zero-thickness walls (geometry that "almost" closes)
// FIX: Ensure all walls have positive thickness
module thin_wall_box(w, d, h, wall=2) {
  assert(wall > 0 && wall < min(w,d)/2,
    str("wall must be 0 < wall < ", min(w,d)/2, ", got: ", wall));
  difference() {
    cube([w, d, h]);
    translate([wall, wall, wall])
      cube([w - 2*wall, d - 2*wall, h]);  // open top — valid manifold
  }
}

// PROBLEM 3: Touching (not overlapping) shapes
// Shapes that just touch at a face create a non-manifold edge
// FIX: Overlap by 0.001 and use union()
module two_boxes() {
  union() {   // explicit union ensures proper merging
    cube([10, 10, 10]);
    translate([10 - 0.001, 0, 0])    // overlap by 0.001 — not just touch
      cube([10, 10, 10]);
  }
}

// PROBLEM 4: Inverted normals (inside-out geometry)
// Usually caused by scale() with negative values
// FIX: Avoid negative scale; use mirror() instead
// WRONG:
// scale([-1, 1, 1]) some_module();  // negative scale flips normals
// CORRECT:
// mirror([1, 0, 0]) some_module();  // mirror preserves normals

// DIAGNOSE: Use the % modifier to ghost shapes and see through walls
// difference() {
//   cube([20, 20, 20]);
//   % cylinder(r=5, h=25, $fn=24);  // ghost the cutter to see it
// }
```

**Manifold check workflow:**

```bash
# Linux/macOS (bash)
3dm build
# Check console for "WARNING: Number of surfaces is odd:" — sign of non-manifold

# Open in PrusaSlicer and look for orange highlights on problem edges
# Or use: admesh --analyze build/main.stl (install with: apt install admesh)

# Windows (PowerShell)
3dm build
# Same console check applies

# Windows (CMD)
3dm build
```

---

## Step 5 — `surface()` for Height-Map Geometry

`surface()` reads a grayscale image or data file and creates a 3D surface where brightness = height. This is useful for terrain, texture panels, and embossed artwork.

```openscad
// surface() reads a PNG or DAT file
// Black = 0 height, White = maximum height

// From an image file (grayscale PNG)
// surface(file="heightmap.png", center=true, invert=false);

// From an inline DAT file (matrix of height values 0-255)
// Create a simple wave pattern as a DAT file, then use surface()

// Inline demonstration using a simple pattern:
// (In real use, provide a .dat or .png file)

// This creates a 10x10 terrain from a data file
// surface(file = "terrain.dat", center = true);

// PRACTICAL PATTERN: Embossed logo panel
// 1. Create a grayscale version of your logo in any image editor
// 2. Save as terrain.png (all non-logo area = black, logo = white)
// 3. Place it in your project's src/ folder

module logo_panel(panel_w=60, panel_d=40, panel_h=3, relief=1.5) {
  // Base plate
  cube([panel_w, panel_d, panel_h]);
  // Embossed surface on top (requires a heightmap file)
  // translate([0, 0, panel_h])
  //   scale([panel_w/100, panel_d/100, relief/255])
  //     surface(file="src/logo_heightmap.png", center=false);
}

---

## Step 6 — Advanced: `children()` and Custom Container Modules

`children()` gives modules access to the geometry passed to them. This enables powerful reusable "container" patterns.

```openscad
// A container module that adds a base plate under any child geometry
module on_base(base_h=3, margin=5) {
  // Get the bounding box of children (approximate — OpenSCAD doesn't expose exact bbox)
  // Place the children on top of a plate
  children();  // render the child geometry at its natural position

  // We can't easily query bbox, so use a fixed-size base or pass dimensions
}

// Correct approach: pass dimensions explicitly
module mounted_on_plate(plate_w, plate_d, plate_h=3, post_h=5) {
  // Base plate
  color("LightGray")
    cube([plate_w, plate_d, plate_h]);

  // Mount posts at corners
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

// Usage: wrap any geometry with mounted_on_plate
mounted_on_plate(80, 60, plate_h=3, post_h=8) {
  // These children sit on the mounting plate
  cylinder(r=15, h=20, $fn=32);
}

// $children gives you the count of children
module repeat_children(n=3, spacing=25) {
  for (i = [0:$children-1]) {
    for (j = [0:n-1]) {
      translate([j * spacing, i * spacing, 0])
        children(i);  // render the i-th child
    }
  }
}

translate([0, 100, 0])
repeat_children(n=4, spacing=20) {
  sphere(r=5, $fn=16);          // child 0
  cylinder(r=4, h=10, $fn=16);  // child 1
  cube([8, 8, 6]);               // child 2
}

---

## Step 7 — Advanced: Lookup Tables and `search()`

`search()` finds the index of a value in a list. Combined with lookup tables, this replaces complex if/else chains.

```openscad
// lookup() interpolates a value from a table of [input, output] pairs
// Use for smooth parametric curves

// Speed-to-fan-speed lookup table
speed_table = [
  [0,  0],    // 0°C → fan off
  [40, 0],    // 40°C → fan off
  [50, 50],   // 50°C → 50% speed
  [60, 80],   // 60°C → 80% speed
  [70, 100]   // 70°C → full speed
];

temp = 55;
fan_speed = lookup(temp, speed_table);
echo("Fan speed at", temp, "°C:", fan_speed, "%");  // 65%

// search() — find index of a value in a list
materials = ["PLA", "PETG", "ABS", "TPU", "Nylon"];
densities = [1.24,  1.27,  1.05, 1.20,  1.14];

selected = "PETG";
idx = search([selected], materials)[0];
density = densities[idx];
echo(str(selected, " density: ", density, " g/cm³"));

// Applied: select filament properties dynamically
module print_cost_label(volume_mm3, material="PLA") {
  materials = ["PLA",  "PETG", "ABS",  "TPU",  "Nylon"];
  densities = [1.24,   1.27,   1.05,   1.20,   1.14];
  costs_g   = [0.020,  0.025,  0.018,  0.035,  0.045];

  idx = search([material], materials)[0];
  assert(len(idx) > 0 || idx != [],
    str("Unknown material: ", material, ". Valid: ", materials));

  mass_g = (volume_mm3 / 1000) * densities[idx];
  cost   = mass_g * costs_g[idx];
  label  = str(material, ": ", round(mass_g * 10) / 10, "g / $",
               round(cost * 100) / 100);

  echo("Cost estimate:", label);
  linear_extrude(1)
    text(label, size=4, font="Liberation Sans", halign="center");
```
Document your own measurements in a similar table.

### A3 — Add a Cable Slot [^3]

Extend your phone stand design with a cable slot through the base:

```openscad
cable_slot_w  = 12;   // mm
cable_slot_d  = 5;    // mm
cable_slot_z  = -0.001;

// Add to main difference() block:
translate([base_w/2 - cable_slot_w/2, 0, cable_slot_z])
  cube([cable_slot_w, cable_slot_d, base_h + 0.002]);
```

## Exercise Set B: Keycap with Text

### B1 — Build a Mechanical Keyboard Keycap

```openscad
// Parametric keycap
key_w      = 18;
key_d      = 18;
key_h      = 7;
stem_r     = 2.75;  // MX stem: 5.5mm diameter
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

// Engrave label
translate([0, 0, key_h/2 - 0.8])
  linear_extrude(1.2)
    text(label_text, size=8, font="Liberation Sans:style=Bold",
         halign="center", valign="center", $fn=4);
```

### B2 — Validate with 3dm info

```bash
3dm info
```

Expected output should confirm the keycap geometry. Document what the AI description says and compare it to your design intent.

### B3 — Print and Test

Print the keycap and test it on a Cherry MX switch (or compatible). If the stem is too tight, increase `stem_r + 0.1` to `stem_r + 0.15`. If too loose, decrease to `stem_r + 0.05`.

## Exercise Set C: Stackable Bins

### C1 — Build a Three-Size Bin Set

Using the stackable bin module from Lesson 8, generate three sizes:

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

Non-manifold geometry occurs when faces share edges inconsistently (T-junctions, missing faces, zero-thickness walls). Common causes:

```openscad
// PROBLEM: two cubes share a face exactly — may produce non-manifold edge
cube([20, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);  // touching at x=20 — ambiguous edge

// FIX 1: use union()
union() {
  cube([20, 20, 10]);
  translate([20, 0, 0]) cube([20, 20, 10]);
}

// FIX 2: overlap slightly
cube([20.001, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);
```

Diagnosis tool:
```bash
3dm info  # AI will often flag non-manifold geometry
# Also open STL in slicer and enable "Check for geometry errors"
```

### C3 — Advanced Geometry: hull() and minkowski()

```openscad
// hull() creates a convex envelope — useful for organic shapes
module smooth_transition() {
  hull() {
    translate([0, 0, 0]) cylinder(r=15, h=5, $fn=64);
    translate([0, 0, 30]) cylinder(r=5, h=2, $fn=64);
  }
}

smooth_transition();

// minkowski() adds the shape of a small object to every surface point
module rounded_hull() {
  minkowski() {
    hull() {
      cylinder(r=10, h=3, $fn=8);      // octagonal prism
      translate([30, 0, 0]) sphere(r=8, $fn=32);
    }
    sphere(r=2, $fn=16);  // rounds all edges by 2mm
  }
}

rounded_hull();
```

## Quiz — Lesson 3dMake.10 (15 questions)

1. What tool do you use to measure printed part dimensions against the design specification?
2. What is tolerance stack-up, and why does it matter for multi-part assemblies?
3. What causes non-manifold geometry in OpenSCAD, and how do you detect it?
4. How does `hull()` differ from `union()`?
5. What does `3dm info` help you verify about your model?
6. What does a Cherry MX stem measure in diameter, and what clearance would you add for a slip-fit keycap?
7. True or False: `find -newer` is an event-driven file change detection method.
8. If three parts each have ±0.15 mm tolerance, what is the worst-case total error for a three-part stack?
9. What does the `$fn` parameter control in OpenSCAD?
10. Describe two methods for fixing non-manifold geometry caused by two touching (but not overlapping) shapes.
11. What is the difference between `hull()` and `minkowski()` for creating organic shapes? Give one use case for each.
12. What does `resize([50, 0, 0])` do, and why might `resize()` behave unexpectedly for non-uniform scaling?
13. When measuring a printed part with calipers, what is the difference between an inside measurement and an outside measurement, and when does that distinction matter for tolerance analysis?
14. Describe the iterative design workflow for dialing in press-fit tolerances: what do you print, what do you measure, and how do you adjust?
15. If `3dm info` reports "the model appears non-manifold," what are three possible causes you would investigate in your OpenSCAD code?

## Extension Problems (15)

1. Create a tolerance sensitivity study: build 5 keycaps with stem clearance from 0.05–0.25 mm in 0.05 mm increments, print them, and record which values fit your switches.
2. Design a go/no-go gauge for a 10 mm nominal hole: a part with a "go" pin sized for slip-fit and a "no-go" pin sized for interference fit.
3. Write a printer calibration SOP (standard operating procedure): bed leveling, first-layer calibration, and dimension verification. Include a measurement checklist.
4. Build a three-tier stackable storage system for art supplies. Each tier has a different inner grid.
5. Conduct a tolerance stack-up analysis for your stackable bin system. Calculate worst-case misalignment.
6. Build a parametric test coupon that tests four different wall thicknesses (0.8, 1.2, 1.6, 2.0 mm) in a single print.
7. Design a caliper stand: a holder that holds your digital calipers at a comfortable angle for one-handed operation.
8. Build a non-manifold error catalog: intentionally create 5 different types of non-manifold geometry, document how each was created and how to fix it.
9. Use `hull()` to design a smooth ergonomic tool handle and compare it to a simple cylinder handle.
10. Create a printability checklist for new designs: overhangs, wall thickness, minimum feature size, support requirements. Apply it to your keycap and bin designs.
11. Research the `resize()` function in OpenSCAD. Build an example showing how it behaves differently from `scale()` for non-uniform resizing.
12. Design a multi-part assembly tutorial: a three-piece interlocking puzzle that teaches the concepts of tolerance, alignment, and slip-fit.
13. Build a "measurement worksheet" template in OpenSCAD: render a flat sheet that lists all key dimensions of a part as text, for printing alongside the part.
14. Create a chi-squared goodness-of-fit test for your printer's dimensional accuracy: measure 20 prints of the same part and determine if the errors are normally distributed.
15. Write a comprehensive troubleshooting guide covering the 10 most common 3D printing failures you have encountered (or researched), with causes, prevention, and fixes.

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Hull and Minkowski. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull)

[^2]: Digital Calipers Measurement Technique — General metrology reference. See also: [Measurement Worksheet Asset](../../assets/3dMake_Foundation/measurement_worksheet.md)

[^3]: 3DMake GitHub Repository — Command reference including `3dm info`. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Troubleshooting and advanced geometry chapters
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked practice exercises
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — Function reference
- [Master Rubric](../../assets/3dMake_Foundation/master-rubric.md) — Assessment criteria for practice exercises
