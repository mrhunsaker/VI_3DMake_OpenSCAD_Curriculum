[Header 3 ("lesson-10--hands-on-practice-exercises-and-troubleshooting", [], []) [Str "Lesson 10 — Hands-On Practice Exercises and Troubleshooting"], Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Apply ", Code ("", [], []) "hull()", Str " and ", Code ("", [], []) "minkowski()", Note [Para [Str "OpenSCAD User Manual — Hull and Minkowski."]], Str " with awareness of their performance cost"]], [Plain [Str "Use ", Code ("", [], []) "$preview", Str " to conditionally disable slow operations during development"]], [Plain [Str "Create 2D templates with ", Code ("", [], []) "projection()", Str " for drilling guides and laser cutting"]], [Plain [Str "Diagnose and fix non-manifold geometry"]], [Plain [Str "Apply ", Code ("", [], []) "resize()", Str " to imported models and use ", Code ("", [], []) "surface()", Str " for height-map geometry"]], [Plain [Str "Write advanced parametric assemblies using ", Code ("", [], []) "children()", Str " and ", Code ("", [], []) "$children"]]], HorizontalRule, Header 4 ("step-1--hull-for-organic-shapes", ["unnumbered", "unlisted"], []) [Str "Step 1 — ", Code ("", [], []) "hull()", Str " for Organic Shapes"], Para [Code ("", [], []) "hull()", Str " creates the convex hull of its children — the smallest convex shape that contains all of them. It is much faster than ", Code ("", [], []) "minkowski()", Str " and excellent for creating smooth transitions between shapes."], Header 5 ("example-1-smooth-transition-between-a-hexagonal-cylinder-and-a-sphere", ["unnumbered", "unlisted"], []) [Str "Example 1: Smooth transition between a hexagonal cylinder and a sphere"], CodeBlock ("", ["openscad"], []) "// hull() between two different shapes at different heights
// Creates a smooth transition (like a funnel or transition piece)
hull() {
  cylinder(r=20, h=1, $fn=6);       // hexagon at bottom
  translate([0, 0, 30])
    sphere(r=8, $fn=32);             // sphere at top
}
", Header 5 ("example-2-rounded-box-using-hull-of-8-spheres", ["unnumbered", "unlisted"], []) [Str "Example 2: Rounded box using ", Code ("", [], []) "hull()", Str " of 8 spheres"], Para [Str "Place one sphere at each of the 8 corners; ", Code ("", [], []) "hull()", Str " fills the space between them,", SoftBreak, Str "rounding every corner and edge by the sphere radius."], CodeBlock ("", ["openscad"], []) "r = 5;  // corner radius
w = 40; d = 30; h = 20;

hull() {
  for (x = [r, w-r]) {
    for (y = [r, d-r]) {
      translate([x, y, 0]) sphere(r=r, $fn=24);
      translate([x, y, h]) sphere(r=r, $fn=24);
    }
  }
}
", Header 5 ("example-3-wing--aerofoil-profile", ["unnumbered", "unlisted"], []) [Str "Example 3: Wing / aerofoil profile"], CodeBlock ("", ["openscad"], []) "// hull() of two cylinders at different positions and radii
// produces a smooth aerofoil cross-section
translate([0, 50, 0])
hull() {
  cylinder(r=6, h=2, $fn=32);            // leading edge (round)
  translate([40, 0, 0])
    cylinder(r=1, h=2, $fn=16);          // trailing edge (sharp)
}
", HorizontalRule, Header 4 ("step-2--minkowski--performance-warning-and-pattern", ["unnumbered", "unlisted"], []) [Str "Step 2 — ", Code ("", [], []) "minkowski()", Str " — Performance Warning and Pattern"], Para [Code ("", [], []) "minkowski()", Str " computes the Minkowski sum: it \"rolls\" the secondary shape around every point on the primary shape's surface. This produces perfectly rounded or offset geometry, but the computation scales with the product of both shapes' face counts."], BlockQuote [Para [Str "⚠ A complex primary shape combined with a sphere at ", Code ("", [], []) "$fn=64", Str " can take many minutes to render. Always use ", Code ("", [], []) "$preview", Str " to skip the ", Code ("", [], []) "minkowski()", Str " call during development."]], BlockQuote [Para [Strong [Str "Version note:"], Str " ", Code ("", [], []) "$preview", Str " is available in ", Strong [Str "OpenSCAD 2019.05 and later"], Str ". In earlier versions it is undefined (treated as ", Code ("", [], []) "false", Str "). If you are using an older version, omit the ", Code ("", [], []) "$preview", Str " guard and only run F6 when you need the final result."]], CodeBlock ("", ["openscad"], []) "// $preview is TRUE during F5 (fast preview) and FALSE during F6 (full render).
// Use it to swap between a fast placeholder and the full Minkowski computation.

module rounded_box(w, d, h, r=4) {
  if ($preview) {
    // Fast preview mode: plain cube — renders instantly.
    // Color it orange as a reminder this is NOT the final shape.
    color(\"orange\", 0.6) cube([w, d, h]);
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
", Header 5 ("hull-as-a-faster-minkowski-alternative", ["unnumbered", "unlisted"], []) [Code ("", [], []) "hull()", Str " as a faster ", Code ("", [], []) "minkowski()", Str " alternative"], Para [Code ("", [], []) "hull()", Str " only works for convex shapes, but it is far faster than ", Code ("", [], []) "minkowski()", Str ".", SoftBreak, Str "For a simple rounded box you can get an equivalent result by placing a sphere at", SoftBreak, Str "each corner and taking the hull:"], CodeBlock ("", ["openscad"], []) "translate([0, 60, 0])
hull() {
  // Equivalent to minkowski(cube, sphere) — much faster for convex shapes
  r = 4;
  w = 50; d = 40; h = 16;
  for (x = [r, w-r]) for (y = [r, d-r]) for (z = [r, h-r]) {
    translate([x, y, z]) sphere(r=r, $fn=12);
  }
}
", Para [Strong [Str "Performance guidelines for ", Code ("", [], []) "minkowski()", Str ":"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.3275862068965517)), (AlignDefault, (ColWidth 0.25862068965517243)), (AlignDefault, (ColWidth 0.41379310344827586))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Primary shape faces"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Secondary "]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "$fn"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Expected render time"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "<", Str " 100"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8–16"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "<", Str " 1 second"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "100–500"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8–16"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "1–10 seconds"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "500–2000"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "8"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "10–60 seconds"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "> 2000"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "any"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Minutes to hours — avoid"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 4 ("step-3--projection-for-2d-templates", ["unnumbered", "unlisted"], []) [Str "Step 3 — ", Code ("", [], []) "projection()", Str " for 2D Templates"], Para [Code ("", [], []) "projection()", Str " flattens a 3D model onto the XY plane, creating a 2D outline. Use it to:"], BulletList [[Plain [Str "Generate drilling and assembly templates"]], [Plain [Str "Create laser-cut outlines from 3D models"]], [Plain [Str "Check the footprint of a part before printing"]], [Plain [Str "Export DXF files for CNC machining"]]], CodeBlock ("", ["openscad"], []) "// projection(cut=false) — complete silhouette (shadow from above)
// projection(cut=true)  — cross-section at z=0 (slice through the model)

module phone_stand_example() {
  cube([90, 70, 5]);
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post A
  translate([75, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post B
}

// 3D model (for printing)
phone_stand_example();

// 2D silhouette (footprint) — placed beside the 3D model for comparison
color(\"LightGreen\")
translate([110, 0, 0])
  linear_extrude(1)   // 1mm thick so it is visible in 3D preview
    projection(cut=false)
      phone_stand_example();

// Cross-section at z=3 — shows internal structure at that height
color(\"LightCoral\")
translate([220, 0, 0])
  linear_extrude(1)
    projection(cut=true)
      translate([0, 0, -3])  // shift model so the cut falls at z=3 of the part
        phone_stand_example();
", Para [Strong [Str "Exporting a 2D DXF for laser cutting or CNC:"]], BlockQuote [Para [Strong [Str "Note:"], Str " ", Code ("", [], []) "3dm", Str " is designed for building STL output. Use the ", Code ("", [], []) "openscad", Str " CLI directly for DXF export — do ", Strong [Str "not"], Str " use ", Code ("", [], []) "3dm build", Str " for this step."]], CodeBlock ("", ["bash"], []) "# Linux / macOS
openscad -o template.dxf src/template_projection.scad

# Windows (PowerShell or CMD)
openscad -o template.dxf src\\\\template_projection.scad
", Para [Strong [Str "Template projection source file pattern:"]], CodeBlock ("", ["openscad"], []) "// src/template_projection.scad
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
", HorizontalRule, Header 4 ("step-4--diagnosing-non-manifold-geometry", ["unnumbered", "unlisted"], []) [Str "Step 4 — Diagnosing Non-Manifold Geometry"], Para [Str "A mesh is ", Strong [Str "manifold"], Str " (or \"watertight\") when every edge is shared by exactly two faces and the surface has no holes, zero-thickness walls, or self-intersections. Slicers require manifold geometry."], Header 5 ("problem-1--co-planar-faces-in-difference", ["unnumbered", "unlisted"], []) [Str "Problem 1 — Co-planar faces in ", Code ("", [], []) "difference()"], Para [Str "When the cutter exactly coincides with the face of the base shape, OpenSCAD cannot determine which side of the face to keep. Fix: extend the cutter by 0.001 mm on each side."], CodeBlock ("", ["openscad"], []) "difference() {
  cube([20, 20, 20]);
  translate([5, 5, -0.001])           // extend 0.001 below base
    cylinder(r=5, h=20.002, $fn=24);  // extend 0.001 above top
}
", Header 5 ("problem-2--zero-thickness-or-negative-thickness-walls", ["unnumbered", "unlisted"], []) [Str "Problem 2 — Zero-thickness or negative-thickness walls"], CodeBlock ("", ["openscad"], []) "module thin_wall_box(w, d, h, wall=2) {
  assert(wall > 0 && wall < min(w,d)/2,
    str(\"wall must be 0 < wall < \", min(w,d)/2, \", got: \", wall));
  difference() {
    cube([w, d, h]);
    translate([wall, wall, wall])
      cube([w - 2*wall, d - 2*wall, h]);  // open top — valid manifold
  }
}
", Header 5 ("problem-3--shapes-that-only-touch-not-overlap", ["unnumbered", "unlisted"], []) [Str "Problem 3 — Shapes that only touch (not overlap)"], Para [Str "Two shapes that share a face but do not overlap create a non-manifold edge. Fix: overlap by 0.001 mm and wrap in ", Code ("", [], []) "union()", Str "."], CodeBlock ("", ["openscad"], []) "module two_boxes() {
  union() {
    cube([10, 10, 10]);
    translate([10 - 0.001, 0, 0])   // overlap by 0.001 — not just touch
      cube([10, 10, 10]);
  }
}
", Header 5 ("problem-4--inverted-normals-from-negative-scale", ["unnumbered", "unlisted"], []) [Str "Problem 4 — Inverted normals from negative ", Code ("", [], []) "scale()"], Para [Code ("", [], []) "scale()", Str " with a negative value flips face normals, creating inside-out geometry. Use ", Code ("", [], []) "mirror()", Str " instead."], CodeBlock ("", ["openscad"], []) "// WRONG — negative scale flips normals:
// scale([-1, 1, 1]) some_module();

// CORRECT — mirror() preserves normals:
mirror([1, 0, 0]) some_module();
", Header 5 ("debugging-tip--ghost-modifier", ["unnumbered", "unlisted"], []) [Str "Debugging tip — ghost modifier"], CodeBlock ("", ["openscad"], []) "// Use the % modifier to render a shape as a transparent ghost
// so you can see inside the model and verify cutter placement.
difference() {
  cube([20, 20, 20]);
  % cylinder(r=5, h=25, $fn=24);  // ghost the cutter
}
", Header 5 ("manifold-check-workflow", ["unnumbered", "unlisted"], []) [Str "Manifold check workflow"], CodeBlock ("", ["bash"], []) "# Build the STL
3dm build

# OpenSCAD prints manifold warnings to the console, e.g.:
#   WARNING: Object may not be a valid 2-manifold ...
# Check for this message after every build.

# For more detail, use admesh:
# Linux:   apt install admesh
# macOS:   brew install admesh
admesh --analyze build/main.stl

# Or open the STL in PrusaSlicer and enable \"Check for geometry errors\"
# to see orange highlights on problem edges.
", BlockQuote [Para [Str "⚠ The correct OpenSCAD manifold warning is ", Strong [Str "\"WARNING: Object may not be a valid 2-manifold\""], Str ". Searching for any other string will cause you to miss real errors."]], HorizontalRule, Header 4 ("step-5--surface-for-height-map-geometry", ["unnumbered", "unlisted"], []) [Str "Step 5 — ", Code ("", [], []) "surface()", Str " for Height-Map Geometry"], Para [Code ("", [], []) "surface()", Str " reads a grayscale image or a ", Code ("", [], []) ".dat", Str " data file and creates a 3D surface where pixel brightness maps to height. Black = 0 height, white = maximum height. This is useful for terrain, texture panels, and embossed artwork."], Header 5 ("example-1-minimal-self-contained-surface-from-a-dat-file", ["unnumbered", "unlisted"], []) [Str "Example 1: Minimal self-contained ", Code ("", [], []) "surface()", Str " from a ", Code ("", [], []) ".dat", Str " file"], Para [Str "Save the matrix below as ", Code ("", [], []) "terrain.dat", Str " in the same folder as your ", Code ("", [], []) ".scad", Str " file, then run the ", Code ("", [], []) "surface()", Str " call. No external image editor required."], CodeBlock ("", [""], []) " 0  10  20  10   0
10  40  60  40  10
20  60 100  60  20
10  40  60  40  10
 0  10  20  10   0
", CodeBlock ("", ["openscad"], []) "// In your .scad file:
scale([5, 5, 0.3])   // each cell = 5 mm wide; height scaled from 0–100
  surface(file=\"terrain.dat\", center=true);
", Header 5 ("example-2-embossed-logo-panel", ["unnumbered", "unlisted"], []) [Str "Example 2: Embossed logo panel"], Para [Str "Create a grayscale PNG (logo = white, background = black), save it as ", Code ("", [], []) "src/logo_heightmap.png", Str ", then use the module below."], CodeBlock ("", ["openscad"], []) "module logo_panel(panel_w=60, panel_d=40, panel_h=3, relief=1.5) {
  // Base plate
  cube([panel_w, panel_d, panel_h]);

  // Embossed surface on top.
  // Assumes logo_heightmap.png is 100×100 pixels; scale to fit the panel.
  translate([0, 0, panel_h])
    scale([panel_w/100, panel_d/100, relief/255])
      surface(file=\"src/logo_heightmap.png\", center=false, invert=false);
}

logo_panel();
", BlockQuote [Para [Str "✓ ", Code ("", [], []) "surface()", Str " supports PNG (grayscale or colour — uses luminance) and ", Code ("", [], []) ".dat", Str " (whitespace-separated matrix). Always check that the image dimensions match the aspect ratio you want before scaling."]], HorizontalRule, Header 4 ("step-6--advanced-children-and-custom-container-modules", ["unnumbered", "unlisted"], []) [Str "Step 6 — Advanced: ", Code ("", [], []) "children()", Str " and Custom Container Modules"], Para [Code ("", [], []) "children()", Str " gives modules access to the geometry passed to them, enabling powerful reusable \"container\" patterns. ", Code ("", [], []) "$children", Str " holds the count of child objects passed."], Header 5 ("example-1-mounted_on_plate--place-any-geometry-on-a-base-with-corner-posts", ["unnumbered", "unlisted"], []) [Str "Example 1: ", Code ("", [], []) "mounted_on_plate", Str " — place any geometry on a base with corner posts"], CodeBlock ("", ["openscad"], []) "module mounted_on_plate(plate_w, plate_d, plate_h=3, post_h=5) {
  // Base plate
  color(\"LightGray\")
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
", Header 5 ("example-2-repeat_children--tile-multiple-named-children-in-a-grid", ["unnumbered", "unlisted"], []) [Str "Example 2: ", Code ("", [], []) "repeat_children", Str " — tile multiple named children in a grid"], Para [Code ("", [], []) "$children", Str " gives you the count of children passed. Use ", Code ("", [], []) "children(i)", Str " to render the i-th child individually."], CodeBlock ("", ["openscad"], []) "module repeat_children(n=3, spacing=25) {
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
", BlockQuote [Para [Str "✓ OpenSCAD does ", Strong [Str "not"], Str " expose bounding-box queries at runtime. Always pass dimensions explicitly to container modules rather than trying to compute them from children."]], HorizontalRule, Header 4 ("step-7--advanced-lookup-tables-and-search", ["unnumbered", "unlisted"], []) [Str "Step 7 — Advanced: Lookup Tables and ", Code ("", [], []) "search()"], Para [Code ("", [], []) "search()", Str " finds the index of a value in a list. Combined with lookup tables, this replaces long ", Code ("", [], []) "if", Str "/", Code ("", [], []) "else", Str " chains. ", Code ("", [], []) "lookup()", Str " interpolates a value from a table of ", Code ("", [], []) "[input, output]", Str " pairs."], Header 5 ("example-1-lookup-for-smooth-parametric-curves", ["unnumbered", "unlisted"], []) [Str "Example 1: ", Code ("", [], []) "lookup()", Str " for smooth parametric curves"], CodeBlock ("", ["openscad"], []) "// Temperature-to-fan-speed lookup table
speed_table = [
  [0,   0],   //  0°C -> fan off
  [40,  0],   // 40°C -> fan off
  [50, 50],   // 50°C -> 50% speed
  [60, 80],   // 60°C -> 80% speed
  [70, 100]   // 70°C -> full speed
];

temp = 55;
fan_speed = lookup(temp, speed_table);
echo(\"Fan speed at\", temp, \"°C:\", fan_speed, \"%\");  // -> 65%
", Header 5 ("example-2-search-to-look-up-material-properties", ["unnumbered", "unlisted"], []) [Str "Example 2: ", Code ("", [], []) "search()", Str " to look up material properties"], CodeBlock ("", ["openscad"], []) "materials = [\"PLA\",  \"PETG\", \"ABS\",  \"TPU\",  \"Nylon\"];
densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];

selected = \"PETG\";
idx = search([selected], materials)[0];
density = densities[idx];
echo(str(selected, \" density: \", density, \" g/cm³\"));
", Header 5 ("example-3-print-cost-estimator-with-search-and-assert", ["unnumbered", "unlisted"], []) [Str "Example 3: Print cost estimator with ", Code ("", [], []) "search()", Str " and ", Code ("", [], []) "assert()"], CodeBlock ("", ["openscad"], []) "module print_cost_label(volume_mm3, material=\"PLA\") {
  materials = [\"PLA\",  \"PETG\", \"ABS\",  \"TPU\",  \"Nylon\"];
  densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];
  costs_g   = [ 0.020,  0.025,  0.018,  0.035,  0.045];

  // search() returns a list of lists.
  // matches[0] is the first result: an index on success, [] on failure.
  matches = search([material], materials);
  assert(len(matches[0]) > 0,
    str(\"Unknown material: \\\\\"\", material, \"\\\\\". Valid: \", materials));
  idx = matches[0];

  mass_g = (volume_mm3 / 1000) * densities[idx];
  cost   = mass_g * costs_g[idx];
  label  = str(material, \": \", round(mass_g * 10) / 10, \"g / $\",
               round(cost * 100) / 100);

  echo(\"Cost estimate:\", label);
  linear_extrude(1)
    text(label, size=4, font=\"Liberation Sans\", halign=\"center\");
}

print_cost_label(12000, \"PETG\");
", BlockQuote [Para [Str "⚠ ", Code ("", [], []) "search()", Str " returns a list of lists. Check ", Code ("", [], []) "len(matches[0]) > 0", Str " for a valid result — ", Code ("", [], []) "idx != []", Str " does ", Strong [Str "not"], Str " work correctly in OpenSCAD."]], HorizontalRule, Header 4 ("exercise-set-a-phone-stand", ["unnumbered", "unlisted"], []) [Str "Exercise Set A: Phone Stand"], Header 5 ("a1--hull-transition", ["unnumbered", "unlisted"], []) [Str "A1 — Hull Transition"], Para [Str "Add a smooth ", Code ("", [], []) "hull()", Str " transition between the base plate and the mounting post:"], CodeBlock ("", ["openscad"], []) "hull() {
  translate([15, 20, 0]) cylinder(r=8, h=1, $fn=32);   // post footprint on base
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);  // actual post
}
", Header 5 ("a2--tolerance-stack-up", ["unnumbered", "unlisted"], []) [Str "A2 — Tolerance Stack-Up"], Para [Str "Measure the three main structural parts of your phone stand and record them in a table. Calculate worst-case stack-up:"], Para [Strong [Str "Worst case = sum of all individual tolerances"]], Para [Str "Example for three parts each at ±0.15 mm: 0.15 + 0.15 + 0.15 = ", Strong [Str "±0.45 mm total"]], Para [Str "Document your own measurements in a similar table."], Header 5 ("a3--add-a-cable-slot", ["unnumbered", "unlisted"], []) [Str "A3 — Add a Cable Slot"], Para [Str "Extend your phone stand design with a cable slot through the base:"], CodeBlock ("", ["openscad"], []) "cable_slot_w  = 12;   // mm
cable_slot_d  = 5;    // mm
cable_slot_z  = -0.001;

// Add inside your main difference() block:
translate([base_w/2 - cable_slot_w/2, 0, cable_slot_z])
  cube([cable_slot_w, cable_slot_d, base_h + 0.002]);
", HorizontalRule, Header 4 ("exercise-set-b-keycap-with-text", ["unnumbered", "unlisted"], []) [Str "Exercise Set B: Keycap with Text"], Header 5 ("b1--build-a-mechanical-keyboard-keycap", ["unnumbered", "unlisted"], []) [Str "B1 — Build a Mechanical Keyboard Keycap"], CodeBlock ("", ["openscad"], []) "// Parametric keycap for Cherry MX switches
key_w      = 18;
key_d      = 18;
key_h      = 7;
stem_r     = 2.75;  // MX stem: 5.5 mm diameter
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

// Engrave label on top
translate([0, 0, key_h/2 - 0.8])
  linear_extrude(1.2)
    text(label_text, size=8, font=\"Liberation Sans:style=Bold\",
         halign=\"center\", valign=\"center\", $fn=4);
", Header 5 ("b2--validate-with-3dm-info", ["unnumbered", "unlisted"], []) [Str "B2 — Validate with ", Code ("", [], []) "3dm info", Note [Para [Str "3DMake GitHub Repository — Command reference including ", Code ("", [], []) "3dm info", Str "."]]], CodeBlock ("", ["bash"], []) "3dm info
", Para [Str "Document what the model description reports and compare it to your design intent."], Header 5 ("b3--print-and-test", ["unnumbered", "unlisted"], []) [Str "B3 — Print and Test"], Para [Str "Print the keycap and test it on a Cherry MX switch (or compatible). If the stem is too tight, increase the clearance from ", Code ("", [], []) "stem_r + 0.1", Str " to ", Code ("", [], []) "stem_r + 0.15", Str ". If too loose, decrease to ", Code ("", [], []) "stem_r + 0.05", Str "."], HorizontalRule, Header 4 ("exercise-set-c-stackable-bins", ["unnumbered", "unlisted"], []) [Str "Exercise Set C: Stackable Bins"], Header 5 ("c1--build-a-three-size-bin-set", ["unnumbered", "unlisted"], []) [Str "C1 — Build a Three-Size Bin Set"], CodeBlock ("", ["openscad"], []) "// Small bin
translate([0, 0, 0])
  bin_assembly(bin_w=60, bin_d=45, bin_h=30);

// Medium bin
translate([80, 0, 0])
  bin_assembly(bin_w=80, bin_d=60, bin_h=40);

// Large bin
translate([180, 0, 0])
  bin_assembly(bin_w=100, bin_d=80, bin_h=50);
", Header 5 ("c2--diagnose-and-fix-non-manifold-geometry", ["unnumbered", "unlisted"], []) [Str "C2 — Diagnose and Fix Non-Manifold Geometry"], Para [Str "Non-manifold geometry occurs when faces share edges inconsistently (T-junctions, missing faces, zero-thickness walls). A common cause is two shapes that touch at exactly one face:"], CodeBlock ("", ["openscad"], []) "// PROBLEM: two cubes share a face exactly — may produce a non-manifold edge
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
", CodeBlock ("", ["bash"], []) "# Diagnosis
3dm info  # AI will often flag non-manifold geometry
# Also open the STL in your slicer and enable \"Check for geometry errors\"
", Header 5 ("c3--advanced-geometry-hull-and-minkowski", ["unnumbered", "unlisted"], []) [Str "C3 — Advanced Geometry: ", Code ("", [], []) "hull()", Str " and ", Code ("", [], []) "minkowski()"], CodeBlock ("", ["openscad"], []) "// hull() creates a convex envelope — useful for organic transitions
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
", HorizontalRule, Header 4 ("quiz--lesson-3dmake10-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.10 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What tool do you use to measure printed part dimensions against the design specification?"]], [Plain [Str "What is tolerance stack-up, and why does it matter for multi-part assemblies?"]], [Plain [Str "What causes non-manifold geometry in OpenSCAD, and how do you detect it?"]], [Plain [Str "How does ", Code ("", [], []) "hull()", Str " differ from ", Code ("", [], []) "union()", Str "?"]], [Plain [Str "What does ", Code ("", [], []) "3dm info", Str " help you verify about your model?"]], [Plain [Str "What is the diameter of a Cherry MX stem, and what clearance would you add for a slip-fit keycap?"]], [Plain [Str "True or False: ", Code ("", [], []) "find -newer", Str " is an event-driven file change detection method."]], [Plain [Str "If three parts each have ±0.15 mm tolerance, what is the worst-case total error for a three-part stack?"]], [Plain [Str "What does the ", Code ("", [], []) "$fn", Str " parameter control in OpenSCAD?"]], [Plain [Str "Describe two methods for fixing non-manifold geometry caused by two touching (but not overlapping) shapes."]], [Plain [Str "What is the difference between ", Code ("", [], []) "hull()", Str " and ", Code ("", [], []) "minkowski()", Str " for creating organic shapes? Give one use case for each."]], [Plain [Str "What does ", Code ("", [], []) "resize([50, 0, 0])", Str " do, and why might ", Code ("", [], []) "resize()", Str " behave unexpectedly for non-uniform scaling?"]], [Plain [Str "When measuring a printed part with calipers", Note [Para [Str "Digital Calipers Measurement Technique — General metrology reference."]], Str ", what is the difference between an inside measurement and an outside measurement, and when does that distinction matter for tolerance analysis?"]], [Plain [Str "Describe the iterative workflow for dialling in press-fit tolerances: what do you print, what do you measure, and how do you adjust?"]], [Plain [Str "If ", Code ("", [], []) "3dm info", Str " reports \"the model appears non-manifold,\" what are three possible causes you would investigate in your OpenSCAD code?"]]], HorizontalRule, Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a tolerance sensitivity study: build 5 keycaps with stem clearance from 0.05–0.25 mm in 0.05 mm increments, print them, and record which values fit your switches."]], [Plain [Str "Design a go/no-go gauge for a 10 mm nominal hole: a part with a \"go\" pin sized for slip-fit and a \"no-go\" pin sized for interference fit."]], [Plain [Str "Write a printer calibration SOP: bed levelling, first-layer calibration, and dimension verification. Include a measurement checklist."]], [Plain [Str "Build a three-tier stackable storage system for art supplies. Each tier has a different inner grid."]], [Plain [Str "Conduct a tolerance stack-up analysis for your stackable bin system. Calculate worst-case misalignment."]], [Plain [Str "Build a parametric test coupon that tests four wall thicknesses (0.8, 1.2, 1.6, 2.0 mm) in a single print."]], [Plain [Str "Design a caliper stand: a holder that keeps your digital calipers at a comfortable angle for one-handed operation."]], [Plain [Str "Build a non-manifold error catalogue: intentionally create 5 different types of non-manifold geometry, document how each was created, and how to fix it."]], [Plain [Str "Use ", Code ("", [], []) "hull()", Str " to design a smooth ergonomic tool handle and compare it to a simple cylinder handle."]], [Plain [Str "Create a printability checklist for new designs: overhangs, wall thickness, minimum feature size, support requirements. Apply it to your keycap and bin designs."]], [Plain [Str "Research the ", Code ("", [], []) "resize()", Str " function. Build an example showing how it behaves differently from ", Code ("", [], []) "scale()", Str " for non-uniform resizing."]], [Plain [Str "Design a multi-part assembly tutorial: a three-piece interlocking puzzle that teaches tolerance, alignment, and slip-fit."]], [Plain [Str "Build a \"measurement worksheet\" template in OpenSCAD: render a flat sheet that lists all key dimensions of a part as text, for printing alongside the part."]], [Plain [Str "Create a chi-squared goodness-of-fit test for your printer's dimensional accuracy: measure 20 prints of the same part and determine whether the errors are normally distributed."]], [Plain [Str "Write a comprehensive troubleshooting guide covering the 10 most common 3D printing failures you have encountered or researched, with causes, prevention, and fixes."]]], HorizontalRule, Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Para [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull"], Para [Str "See also: Measurement Worksheet Asset (assets/3dMake_Foundation/measurement_worksheet.md)"], Para [Str "https://github.com/tdeck/3dmake"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Str "Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub"]], [Plain [Str "CodeSolutions Repository: https://github.com/ProgrammingWithOpenSCAD/CodeSolutions"]], [Plain [Str "OpenSCAD Quick Reference: https://programmingwithopenscad.github.io/quick-reference.html"]], [Plain [Str "Master Rubric: assets/3dMake_Foundation/master-rubric.md"]]]]