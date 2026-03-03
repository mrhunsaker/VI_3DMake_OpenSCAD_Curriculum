[Header 3 ("lesson-10-hands-on-practice-exercises-and-troubleshooting", [], []) [Str "Lesson 10: Hands-On Practice Exercises and Troubleshooting"], Para [Str "Estimated time: 120–150 minutes"], Header 4 ("learning-objectives-", ["unnumbered", "unlisted"], []) [Str "Learning Objectives ", Note [Para [Str "OpenSCAD User Manual — Hull and Minkowski. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull", "")]]], BulletList [[Plain [Str "Apply skills from Lessons 1–9 in three integrated design exercises"]], [Plain [Str "Use calipers to measure and validate printed parts against specifications"]], [Plain [Str "Diagnose and fix non-manifold geometry errors"]], [Plain [Str "Perform tolerance stack-up analysis"]], [Plain [Str "Use ", Code ("", [], []) "3dm info", Str " for non-visual validation"]]], Header 4 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project"]], [Plain [Str "Printer and PLA filament"]], [Plain [Str "Digital calipers"]], [Plain [Str "Printed parts from previous lessons (or new prints from exercises below)"]]], Header 4 ("exercise-set-a-phone-stand-refinement", ["unnumbered", "unlisted"], []) [Str "Exercise Set A: Phone Stand Refinement"], Header 5 ("a1--measure-and-iterate", ["unnumbered", "unlisted"], []) [Str "A1 — Measure and Iterate"], Para [Str "Using calipers, measure your printed phone stand against the design specification", Note [Para [Str "Digital Calipers Measurement Technique — General metrology reference. See also: ", Link ("", [], []) [Str "Measurement Worksheet Asset"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_10/../../assets/3dMake_Foundation/measurement_worksheet.md", "")]], Str ":"], CodeBlock ("", ["markdown"], []) "# Lesson 10 — Hands-On Practice Exercises and Troubleshooting
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
", Para [Str "cylinder(r=6, h=2, $fn=32);              // leading edge (round)", SoftBreak, Str "translate(", Str "[", Str "40, 0, 0", Str "]", Str ") cylinder(r=1, h=2, $fn=16);  // trailing edge (sharp)", SoftBreak, Str "}"], CodeBlock ("", [""], []) "
---

## Step 2 — `minkowski()` — Performance Warning and Pattern

`minkowski()` computes the Minkowski sum: it \"rolls\" the secondary shape around every point on the primary shape's surface. This produces perfectly rounded or offset geometry, but the computation scales with the product of both shapes' face counts.

**A complex primary shape + sphere with $fn=64 can take minutes to render.** Always use `$preview` to skip it during development.

```openscad
// $preview is TRUE during F5 (fast preview) and FALSE during F6 (full render)
// Use it to swap between a fast approximation and the full computation

PREVIEW = $preview;

module rounded_box(w, d, h, r=4) {
  if (PREVIEW) {
    // Fast preview mode: plain cube — renders instantly
    // (add color to remind you this is not the final shape)
    color(\"orange\", 0.6) cube([w, d, h]);
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
", Para [Strong [Str "Performance guidelines for ", Code ("", [], []) "minkowski()", Str ":"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.3)), (AlignDefault, (ColWidth 0.32857142857142857)), (AlignDefault, (ColWidth 0.37142857142857144))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Primary shape faces"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Secondary shape "]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "$fn"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Expected render time"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "<", Str " 100"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8–16"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "<", Str " 1 second"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "100–500"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8–16"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "1–10 seconds"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "500–2000"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "10–60 seconds"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "> 2000"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "any"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Minutes to hours — avoid"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 4 ("step-3--projection-for-2d-templates", ["unnumbered", "unlisted"], []) [Str "Step 3 — ", Code ("", [], []) "projection()", Str " for 2D Templates"], Para [Code ("", [], []) "projection()", Str " flattens a 3D model onto the XY plane, creating a 2D outline. Use it to:"], BulletList [[Plain [Str "Generate drilling templates"]], [Plain [Str "Create laser-cut outlines from 3D models"]], [Plain [Str "Check the footprint of a part before printing"]], [Plain [Str "Export DXF files for CNC machining"]]], CodeBlock ("", ["openscad"], []) "// projection(cut=false) — complete silhouette (shadow from above)
// projection(cut=true)  — cross-section at z=0 (slice through the model)

module phone_stand_example() {
  cube([90, 70, 5]);
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post A
  translate([75, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post B
}

// 3D model (for printing)
phone_stand_example();

// 2D silhouette (footprint) — place beside the 3D model for comparison
color(\"LightGreen\")
translate([110, 0, 0])
  linear_extrude(1)    // make it 1mm thick so it's visible in 3D preview
    projection(cut=false)
      phone_stand_example();

// Cross-section at z=3 — shows the internal structure at that height
color(\"LightCoral\")
translate([220, 0, 0])
  linear_extrude(1)
    projection(cut=true)
      translate([0, 0, -3])  // shift model so the cut happens at z=3 of the part
        phone_stand_example();
", Para [Strong [Str "Exporting a 2D DXF for laser cutting or CNC:"]], CodeBlock ("", ["bash"], []) "# Export the projection as DXF (OpenSCAD command line)
# Your .scad file should contain ONLY the projection() call for clean export

# Linux/macOS (bash)
openscad -o template.dxf src/template_projection.scad

# Windows (PowerShell)
openscad -o template.dxf src\\template_projection.scad

# Windows (CMD)
openscad -o template.dxf src\\template_projection.scad
", Para [Strong [Str "Template projection source file pattern:"]], CodeBlock ("", ["openscad"], []) "// src/template_projection.scad
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
", HorizontalRule, Header 4 ("step-4--diagnosing-non-manifold-geometry", ["unnumbered", "unlisted"], []) [Str "Step 4 — Diagnosing Non-Manifold Geometry"], Para [Str "A mesh is ", Strong [Str "manifold"], Str " (or \"watertight\") when every edge is shared by exactly two faces and the surface has no holes or self-intersections. Slicers require manifold geometry."], Para [Strong [Str "Common causes and fixes:"]], CodeBlock ("", ["openscad"], []) "// PROBLEM 1: Co-planar faces in difference()
// FIX: Apply the 0.001 rule
difference() {
  cube([20, 20, 20]);
  translate([5, 5, -0.001])    // ← extend 0.001 below base
    cylinder(r=5, h=20.002, $fn=24);  // ← extend 0.001 above top
}

// PROBLEM 2: Zero-thickness walls (geometry that \"almost\" closes)
// FIX: Ensure all walls have positive thickness
module thin_wall_box(w, d, h, wall=2) {
  assert(wall > 0 && wall < min(w,d)/2,
    str(\"wall must be 0 < wall < \", min(w,d)/2, \", got: \", wall));
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
", Para [Strong [Str "Manifold check workflow:"]], CodeBlock ("", ["bash"], []) "# Linux/macOS (bash)
3dm build
# Check console for \"WARNING: Number of surfaces is odd:\" — sign of non-manifold

# Open in PrusaSlicer and look for orange highlights on problem edges
# Or use: admesh --analyze build/main.stl (install with: apt install admesh)

# Windows (PowerShell)
3dm build
# Same console check applies

# Windows (CMD)
3dm build
", HorizontalRule, Header 4 ("step-5--surface-for-height-map-geometry", ["unnumbered", "unlisted"], []) [Str "Step 5 — ", Code ("", [], []) "surface()", Str " for Height-Map Geometry"], Para [Code ("", [], []) "surface()", Str " reads a grayscale image or data file and creates a 3D surface where brightness = height. This is useful for terrain, texture panels, and embossed artwork."], CodeBlock ("", ["openscad"], []) "// surface() reads a PNG or DAT file
// Black = 0 height, White = maximum height

// From an image file (grayscale PNG)
// surface(file=\"heightmap.png\", center=true, invert=false);

// From an inline DAT file (matrix of height values 0-255)
// Create a simple wave pattern as a DAT file, then use surface()

// Inline demonstration using a simple pattern:
// (In real use, provide a .dat or .png file)

// This creates a 10x10 terrain from a data file
// surface(file = \"terrain.dat\", center = true);

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
  //     surface(file=\"src/logo_heightmap.png\", center=false);
}

---

## Step 6 — Advanced: `children()` and Custom Container Modules

`children()` gives modules access to the geometry passed to them. This enables powerful reusable \"container\" patterns.

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
  color(\"LightGray\")
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
echo(\"Fan speed at\", temp, \"°C:\", fan_speed, \"%\");  // 65%

// search() — find index of a value in a list
materials = [\"PLA\", \"PETG\", \"ABS\", \"TPU\", \"Nylon\"];
densities = [1.24,  1.27,  1.05, 1.20,  1.14];

selected = \"PETG\";
idx = search([selected], materials)[0];
density = densities[idx];
echo(str(selected, \" density: \", density, \" g/cm³\"));

// Applied: select filament properties dynamically
module print_cost_label(volume_mm3, material=\"PLA\") {
  materials = [\"PLA\",  \"PETG\", \"ABS\",  \"TPU\",  \"Nylon\"];
  densities = [1.24,   1.27,   1.05,   1.20,   1.14];
  costs_g   = [0.020,  0.025,  0.018,  0.035,  0.045];

  idx = search([material], materials)[0];
  assert(len(idx) > 0 || idx != [],
    str(\"Unknown material: \", material, \". Valid: \", materials));

  mass_g = (volume_mm3 / 1000) * densities[idx];
  cost   = mass_g * costs_g[idx];
  label  = str(material, \": \", round(mass_g * 10) / 10, \"g / $\",
               round(cost * 100) / 100);

  echo(\"Cost estimate:\", label);
  linear_extrude(1)
    text(label, size=4, font=\"Liberation Sans\", halign=\"center\");
", Para [Str "Document your own measurements in a similar table."], Header 5 ("a3--add-a-cable-slot-", ["unnumbered", "unlisted"], []) [Str "A3 — Add a Cable Slot ", Note [Para [Str "3DMake GitHub Repository — Command reference including ", Code ("", [], []) "3dm info", Str ". ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]]], Para [Str "Extend your phone stand design with a cable slot through the base:"], CodeBlock ("", ["openscad"], []) "cable_slot_w  = 12;   // mm
cable_slot_d  = 5;    // mm
cable_slot_z  = -0.001;

// Add to main difference() block:
translate([base_w/2 - cable_slot_w/2, 0, cable_slot_z])
  cube([cable_slot_w, cable_slot_d, base_h + 0.002]);
", Header 4 ("exercise-set-b-keycap-with-text", ["unnumbered", "unlisted"], []) [Str "Exercise Set B: Keycap with Text"], Header 5 ("b1--build-a-mechanical-keyboard-keycap", ["unnumbered", "unlisted"], []) [Str "B1 — Build a Mechanical Keyboard Keycap"], CodeBlock ("", ["openscad"], []) "// Parametric keycap
key_w      = 18;
key_d      = 18;
key_h      = 7;
stem_r     = 2.75;  // MX stem: 5.5mm diameter
stem_h     = 3.8;
wall       = 1.5;
label_text = \"A\";

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
    text(label_text, size=8, font=\"Liberation Sans:style=Bold\",
         halign=\"center\", valign=\"center\", $fn=4);
", Header 5 ("b2--validate-with-3dm-info", ["unnumbered", "unlisted"], []) [Str "B2 — Validate with 3dm info"], CodeBlock ("", ["bash"], []) "3dm info
", Para [Str "Expected output should confirm the keycap geometry. Document what the AI description says and compare it to your design intent."], Header 5 ("b3--print-and-test", ["unnumbered", "unlisted"], []) [Str "B3 — Print and Test"], Para [Str "Print the keycap and test it on a Cherry MX switch (or compatible). If the stem is too tight, increase ", Code ("", [], []) "stem_r + 0.1", Str " to ", Code ("", [], []) "stem_r + 0.15", Str ". If too loose, decrease to ", Code ("", [], []) "stem_r + 0.05", Str "."], Header 4 ("exercise-set-c-stackable-bins", ["unnumbered", "unlisted"], []) [Str "Exercise Set C: Stackable Bins"], Header 5 ("c1--build-a-three-size-bin-set", ["unnumbered", "unlisted"], []) [Str "C1 — Build a Three-Size Bin Set"], Para [Str "Using the stackable bin module from Lesson 8, generate three sizes:"], CodeBlock ("", ["openscad"], []) "// Small bin
translate([0, 0, 0])
  bin_assembly(bin_w=60, bin_d=45, bin_h=30);

// Medium bin
translate([80, 0, 0])
  bin_assembly(bin_w=80, bin_d=60, bin_h=40);

// Large bin
translate([180, 0, 0])
  bin_assembly(bin_w=100, bin_d=80, bin_h=50);
", Header 5 ("c2--diagnose-and-fix-non-manifold-geometry", ["unnumbered", "unlisted"], []) [Str "C2 — Diagnose and Fix Non-Manifold Geometry"], Para [Str "Non-manifold geometry occurs when faces share edges inconsistently (T-junctions, missing faces, zero-thickness walls). Common causes:"], CodeBlock ("", ["openscad"], []) "// PROBLEM: two cubes share a face exactly — may produce non-manifold edge
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
", Para [Str "Diagnosis tool:"], CodeBlock ("", ["bash"], []) "3dm info  # AI will often flag non-manifold geometry
# Also open STL in slicer and enable \"Check for geometry errors\"
", Header 5 ("c3--advanced-geometry-hull-and-minkowski", ["unnumbered", "unlisted"], []) [Str "C3 — Advanced Geometry: hull() and minkowski()"], CodeBlock ("", ["openscad"], []) "// hull() creates a convex envelope — useful for organic shapes
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
", Header 4 ("quiz--lesson-3dmake10-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.10 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What tool do you use to measure printed part dimensions against the design specification?"]], [Plain [Str "What is tolerance stack-up, and why does it matter for multi-part assemblies?"]], [Plain [Str "What causes non-manifold geometry in OpenSCAD, and how do you detect it?"]], [Plain [Str "How does ", Code ("", [], []) "hull()", Str " differ from ", Code ("", [], []) "union()", Str "?"]], [Plain [Str "What does ", Code ("", [], []) "3dm info", Str " help you verify about your model?"]], [Plain [Str "What does a Cherry MX stem measure in diameter, and what clearance would you add for a slip-fit keycap?"]], [Plain [Str "True or False: ", Code ("", [], []) "find -newer", Str " is an event-driven file change detection method."]], [Plain [Str "If three parts each have ±0.15 mm tolerance, what is the worst-case total error for a three-part stack?"]], [Plain [Str "What does the ", Code ("", [], []) "$fn", Str " parameter control in OpenSCAD?"]], [Plain [Str "Describe two methods for fixing non-manifold geometry caused by two touching (but not overlapping) shapes."]], [Plain [Str "What is the difference between ", Code ("", [], []) "hull()", Str " and ", Code ("", [], []) "minkowski()", Str " for creating organic shapes? Give one use case for each."]], [Plain [Str "What does ", Code ("", [], []) "resize([50, 0, 0])", Str " do, and why might ", Code ("", [], []) "resize()", Str " behave unexpectedly for non-uniform scaling?"]], [Plain [Str "When measuring a printed part with calipers, what is the difference between an inside measurement and an outside measurement, and when does that distinction matter for tolerance analysis?"]], [Plain [Str "Describe the iterative design workflow for dialing in press-fit tolerances: what do you print, what do you measure, and how do you adjust?"]], [Plain [Str "If ", Code ("", [], []) "3dm info", Str " reports \"the model appears non-manifold,\" what are three possible causes you would investigate in your OpenSCAD code?"]]], Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a tolerance sensitivity study: build 5 keycaps with stem clearance from 0.05–0.25 mm in 0.05 mm increments, print them, and record which values fit your switches."]], [Plain [Str "Design a go/no-go gauge for a 10 mm nominal hole: a part with a \"go\" pin sized for slip-fit and a \"no-go\" pin sized for interference fit."]], [Plain [Str "Write a printer calibration SOP (standard operating procedure): bed leveling, first-layer calibration, and dimension verification. Include a measurement checklist."]], [Plain [Str "Build a three-tier stackable storage system for art supplies. Each tier has a different inner grid."]], [Plain [Str "Conduct a tolerance stack-up analysis for your stackable bin system. Calculate worst-case misalignment."]], [Plain [Str "Build a parametric test coupon that tests four different wall thicknesses (0.8, 1.2, 1.6, 2.0 mm) in a single print."]], [Plain [Str "Design a caliper stand: a holder that holds your digital calipers at a comfortable angle for one-handed operation."]], [Plain [Str "Build a non-manifold error catalog: intentionally create 5 different types of non-manifold geometry, document how each was created and how to fix it."]], [Plain [Str "Use ", Code ("", [], []) "hull()", Str " to design a smooth ergonomic tool handle and compare it to a simple cylinder handle."]], [Plain [Str "Create a printability checklist for new designs: overhangs, wall thickness, minimum feature size, support requirements. Apply it to your keycap and bin designs."]], [Plain [Str "Research the ", Code ("", [], []) "resize()", Str " function in OpenSCAD. Build an example showing how it behaves differently from ", Code ("", [], []) "scale()", Str " for non-uniform resizing."]], [Plain [Str "Design a multi-part assembly tutorial: a three-piece interlocking puzzle that teaches the concepts of tolerance, alignment, and slip-fit."]], [Plain [Str "Build a \"measurement worksheet\" template in OpenSCAD: render a flat sheet that lists all key dimensions of a part as text, for printing alongside the part."]], [Plain [Str "Create a chi-squared goodness-of-fit test for your printer's dimensional accuracy: measure 20 prints of the same part and determine if the errors are normally distributed."]], [Plain [Str "Write a comprehensive troubleshooting guide covering the 10 most common 3D printing failures you have encountered (or researched), with causes, prevention, and fixes."]]], Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/epub/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — Troubleshooting and advanced geometry chapters"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked practice exercises"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — Function reference"]], [Plain [Link ("", [], []) [Str "Master Rubric"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_10/../../assets/3dMake_Foundation/master-rubric.md", ""), Str " — Assessment criteria for practice exercises"]]]]