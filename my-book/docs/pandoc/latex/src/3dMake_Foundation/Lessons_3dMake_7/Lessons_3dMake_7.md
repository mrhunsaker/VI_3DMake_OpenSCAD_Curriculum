[Header 3 ("lesson-7--parametric-transforms-and-the-phone-stand-project", [], []) [Str "Lesson 7 — Parametric Transforms and the Phone Stand Project"], Para [Emph [Str "[", Str "CORRECTED — March 2026 Curriculum Revision", Str "]"]], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Understand and predict the result of stacked transforms (translate, rotate, scale, mirror)"]], [Plain [Str "Read transform chains correctly by applying them inside-out"]], [Plain [Str "Use ", Code ("", [], []) "multmatrix()", Str " for combined transforms in a single operation"]], [Plain [Str "Design a fully parametric phone stand with validated parameters"]], [Plain [Str "Use defensive programming (", Code ("", [], []) "assert()", Str ", ", Code ("", [], []) "max()", Str ", ", Code ("", [], []) "min()", Str " clamps) to prevent invalid geometry"]]], HorizontalRule, Header 4 ("step-1--the-transform-mental-model", ["unnumbered", "unlisted"], []) [Str "Step 1 — The Transform Mental Model"], Para [Strong [Str "The most important rule in OpenSCAD transforms:"], Str " Transforms are applied from the ", Emph [Str "inside out"], Str " (or equivalently, from the ", Emph [Str "bottom up"], Str " in the code)."], Para [Str "The object starts at the world origin. The innermost transform acts on it first. Each outer transform then acts on the result."], Para [Strong [Str "Think of it like a coordinate system:"], Str " Each transform shifts the local coordinate system of the child. The child is drawn in its own local space, then that space is placed into the world by the transforms."], CodeBlock ("", ["openscad"], []) "// Version A: translate first (outer), then rotate (inner)
// Reading inside-out: the cube ROTATES first (around world origin),
// then the rotated cube TRANSLATES to (30, 0, 0)
translate([30, 0, 0])    // STEP 2: move the result to X=30
  rotate([0, 0, 45])     // STEP 1: rotate 45° around Z
    cube([10, 5, 5], center=true);

// Version B: rotate first (outer), then translate (inner)
// Reading inside-out: the cube TRANSLATES first (within its local space),
// then the translated result ROTATES around the world origin
// The cube ends up in a completely different position!
color(\"red\")
rotate([0, 0, 45])       // STEP 2: rotate the translated result around origin
  translate([30, 0, 0])  // STEP 1: move cube to X=30 in local space
    cube([10, 5, 5], center=true);
", Para [Strong [Str "Compass analogy:"], Str " Imagine you're a courier holding a compass."], BulletList [[Plain [Str "\"Translate then rotate\": You walk 30 steps east, then spin 45° in place. The compass faces northeast but you're at the eastern position."]], [Plain [Str "\"Rotate then translate\": You spin 45° in place first, then walk 30 steps — but \"east\" for you is now northeast! You end up farther from origin than in the first case."]]], CodeBlock ("", ["openscad"], []) "// Practical reading technique: read from BOTTOM to TOP (or innermost to outermost)
// to trace an object's transformation sequence

color(\"SteelBlue\")
translate([0, 0, 50])    // 4th: move up 50mm
  rotate([90, 0, 0])     // 3rd: tip it forward (nose down)
    translate([0, 0, 20]) // 2nd: move it 20mm along its own Z
      rotate([0, 0, 30]) // 1st: spin 30° around its own Z
        cube([10, 5, 3], center=true);

// To understand this: start with the cube, apply 1st, then 2nd, etc.
", HorizontalRule, Header 4 ("step-2--the-mirror-transform", ["unnumbered", "unlisted"], []) [Str "Step 2 — The ", Code ("", [], []) "mirror()", Str " Transform"], CodeBlock ("", ["openscad"], []) "// mirror([x, y, z]) reflects across a plane defined by the normal vector
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
", HorizontalRule, Header 4 ("step-3--multmatrix--combined-transforms", ["unnumbered", "unlisted"], []) [Str "Step 3 — ", Code ("", [], []) "multmatrix()", Str " — Combined Transforms"], Para [Code ("", [], []) "multmatrix()", Str " applies a 4×4 transformation matrix. This is advanced usage, but understanding it helps you understand ", Emph [Str "why"], Str " transform order matters — and it enables shearing, which translate/rotate/scale cannot do."], CodeBlock ("", ["openscad"], []) "// A 4×4 transformation matrix:
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
", HorizontalRule, Header 4 ("step-4--the-phone-stand-project", ["unnumbered", "unlisted"], []) [Str "Step 4 — The Phone Stand Project"], Para [Str "A fully parametric, defensively coded phone stand demonstrating all transform and CSG concepts."], CodeBlock ("", ["openscad"], []) "// ============================================================
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
  str(\"phone_w out of range: \", phone_w, \"mm. Expected 30-200mm.\"));
assert(stand_angle >= 30 && stand_angle <= 80,
  str(\"stand_angle out of range: \", stand_angle, \"°. Expected 30-80°.\"));
assert(wall >= 1.5,
  str(\"wall must be >= 1.5mm for printability, got: \", wall));
assert(corner_r < wall,
  str(\"corner_r (\", corner_r, \") must be less than wall (\", wall,
      \") — would create invalid geometry\"));
assert(cable_slot_w < phone_w - 2*wall,
  str(\"cable_slot_w (\", cable_slot_w, \") too wide for phone_w (\", phone_w,
      \") with wall (\", wall, \")\"));

// --- Computed Geometry ---
cradle_w = phone_w  + 2*wall + 0.3;  // +0.3 clearance
cradle_h = phone_t  + 2*wall;
back_reach = sin(stand_angle) * (phone_h * 0.5);  // how far back the support goes

// --- Modules ---
module rounded_plate(w, d, h, r) {
  // Validate fillet doesn't exceed geometry
  safe_r = min(r, w/2 - 0.1, d/2 - 0.1);
  assert(safe_r > 0,
    str(\"rounded_plate: dimensions too small for r=\", r,
        \" (w=\", w, \", d=\", d, \")\"));

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
  color(\"SteelBlue\")
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
  color(\"CornflowerBlue\")
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
// color(\"gray\", 0.3)
// translate([wall + 0.15, base_d * 0.3, foot_h + wall + 0.15])
//   rotate([90 - stand_angle, 0, 0])
//     cube([phone_w, phone_t, phone_h]);
", HorizontalRule, Header 4 ("step-5--defensive-parameter-bounds", ["unnumbered", "unlisted"], []) [Str "Step 5 — Defensive Parameter Bounds"], Para [Str "The phone stand above already uses ", Code ("", [], []) "assert()", Str ". Here is an extended reference for the common defensive patterns:"], CodeBlock ("", ["openscad"], []) "// PATTERN 1: Clamp a value to a safe range
module fillet_cube(w, d, h, r) {
  // Don't let r exceed half of the smallest face dimension
  safe_r = min(r, w/2 - 0.01, d/2 - 0.01);
  echo(\"Requested r:\", r, \"  Applied r:\", safe_r);

  linear_extrude(h)
    offset(r=safe_r) offset(delta=-safe_r)
      square([w, d]);
}

// PATTERN 2: Assert meaningful relationship constraints
module snap_arm(beam_l, beam_t, beam_w) {
  ratio = beam_t / beam_l;
  assert(ratio < 0.15,
    str(\"snap_arm: beam_t/beam_l = \", ratio,
        \" exceeds 0.15 — arm will not flex without breaking. \",
        \"Try beam_t=\", floor(beam_l * 0.12 * 10) / 10, \"mm\"));
  cube([beam_w, beam_l, beam_t]);
}

// PATTERN 3: Warn about values that are valid but unusual
module plate_with_holes(w, d, h, hole_d, nx=2, ny=2) {
  spacing_x = w / (nx + 1);
  spacing_y = d / (ny + 1);
  min_spacing = min(spacing_x, spacing_y);

  if (hole_d > min_spacing * 0.8) {
    echo(\"WARNING: hole_d is large relative to spacing — holes may merge\");
    echo(\"  hole_d:\", hole_d, \"  min spacing:\", min_spacing);
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
", HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 7.1:"], Str " Predict where a cube ", Code ("", [], []) "[10, 5, 3]", Str " will appear with the transforms:"], CodeBlock ("", [""], []) "translate([20, 0, 0]) rotate([0, 0, 45]) translate([10, 0, 0]) cube([10, 5, 3], center=true);
", Para [Str "Write your prediction first, then verify with OpenSCAD."], Para [Strong [Str "Exercise 7.2:"], Str " Modify the phone stand to add two M3 bolt holes in the base (for desk mounting). Use the ", Code ("", [], []) "m3_bolt_hole()", Str " module from Lesson 3. Validate that the holes are positioned at least 5mm from any edge."], Para [Strong [Str "Exercise 7.3:"], Str " Use ", Code ("", [], []) "mirror()", Str " to generate a symmetric phone stand variant that has the cable slot on the opposite side without changing any other parameters."], Para [Strong [Str "Exercise 7.4 (Advanced):"], Str " Write a ", Code ("", [], []) "shear_cube(w, d, h, shear_x)", Str " module using ", Code ("", [], []) "multmatrix()", Str " that creates a cube that leans in the X direction. A ", Code ("", [], []) "shear_x", Str " of 0.5 should mean the top face is offset 0.5mm for every 1mm of height."], Header 3 ("lesson-7-parametric-transforms-and-the-phone-stand-project", ["unnumbered", "unlisted"], []) [Str "Lesson 7: Parametric Transforms and the Phone Stand Project"], Para [Str "Estimated time: 90–120 minutes"], Header 4 ("learning-objectives-1", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Apply ", Code ("", [], []) "translate()", Str ", ", Code ("", [], []) "rotate()", Str ", ", Code ("", [], []) "scale()", Str ", and ", Code ("", [], []) "mirror()", Str " correctly"]], [Plain [Str "Understand transform order of operations"]], [Plain [Str "Use ", Code ("", [], []) "minkowski()", Str " for organic edge rounding"]], [Plain [Str "Apply trigonometric functions (", Code ("", [], []) "sin()", Str ", ", Code ("", [], []) "cos()", Str ", ", Code ("", [], []) "atan()", Str ", ", Code ("", [], []) "atan2()", Str ") for angular positioning"]], [Plain [Str "Build a complete parametric phone stand"]]], Header 4 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project"]], [Plain [Str "Terminal and editor"]], [Plain [Str "Calipers for measuring your phone"]]], Header 4 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 5 ("1-master-transforms-and-order-of-operations-", ["unnumbered", "unlisted"], []) [Str "1. Master Transforms and Order of Operations ", Note [Para [Str "OpenSCAD User Manual — Transformations. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations", "")]]], Para [Str "Transforms in OpenSCAD apply right-to-left (innermost first). Order matters:"], CodeBlock ("", ["openscad"], []) "// rotate THEN translate (object moves to [20,0,0] first, then rotates in place)
rotate([0, 0, 45]) translate([20, 0, 0]) cube([10, 5, 5]);

// translate THEN rotate (object moves 20mm, then rotates around origin)
translate([20, 0, 0]) rotate([0, 0, 45]) cube([10, 5, 5]);
", Para [Str "These produce different results. A helpful rule: read transforms from the inside out."], Header 5 ("2-use-trigonometric-and-math-functions-", ["unnumbered", "unlisted"], []) [Str "2. Use Trigonometric and Math Functions ", Note [Para [Str "OpenSCAD User Manual — Mathematical Functions. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions", "")]]], CodeBlock ("", ["openscad"], []) "// Place objects in a circle using sin() and cos()
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
", Para [Strong [Str "When to use ", Code ("", [], []) "atan2(y, x)", Str " vs ", Code ("", [], []) "atan(y/x)", Str ":"], Str " Use ", Code ("", [], []) "atan2()", Str " whenever you have both x and y components and need the correct quadrant. ", Code ("", [], []) "atan()", Str " only returns values in the range -90° to +90° and divides by zero when x=0."], Header 5 ("3-apply-minkowski-sum-for-rounded-edges-", ["unnumbered", "unlisted"], []) [Str "3. Apply Minkowski Sum for Rounded Edges ", Note [Para [Str "OpenSCAD User Manual — Minkowski and Hull. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull", "")]]], CodeBlock ("", ["openscad"], []) "// Minkowski adds the shape of one object to every point of another
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
", Header 5 ("4-apply-scale-and-mirror", ["unnumbered", "unlisted"], []) [Str "4. Apply scale() and mirror()"], CodeBlock ("", ["openscad"], []) "// scale() stretches geometry — use when you need non-uniform scaling
scale([1, 1, 2]) sphere(r=10, $fn=32);  // stretch sphere 2x in Z = ellipsoid

// mirror() reflects geometry across a plane
module ear() {
  translate([20, 0, 0]) cylinder(r=5, h=3, $fn=32);
}
// Original + mirrored = symmetric pair
ear();
mirror([1, 0, 0]) ear();  // reflect across YZ plane
", Header 5 ("5-build-the-complete-phone-stand", ["unnumbered", "unlisted"], []) [Str "5. Build the Complete Phone Stand"], CodeBlock ("", ["openscad"], []) "// ============================================================
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
", Header 5 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 2: ", Code ("", [], []) "echo()", Str " outputs confirm trig function results."]], [Plain [Str "After step 3: The ", Code ("", [], []) "rounded_cube", Str " module produces a smooth-edged box (check in preview)."]], [Plain [Str "After step 5: The phone stand stands at the correct angle and the lip depth matches your ", Code ("", [], []) "lip_h", Str " parameter."]]], Header 4 ("advanced-transform-patterns", ["unnumbered", "unlisted"], []) [Str "Advanced Transform Patterns"], Header 5 ("vector-math-functions", ["unnumbered", "unlisted"], []) [Str "Vector Math Functions"], CodeBlock ("", ["openscad"], []) "// dot product: measures how aligned two vectors are
a = [1, 0, 0];
b = [0.7, 0.7, 0];
echo(a * b);         // scalar dot product = 0.7

// cross product: finds a vector perpendicular to two input vectors
c = cross([1, 0, 0], [0, 1, 0]);  // = [0, 0, 1]

// norm: vector magnitude (length)
v = [3, 4, 0];
echo(norm(v));       // 5 (Pythagorean theorem)
", Header 5 ("adaptive-quality-with-preview", ["unnumbered", "unlisted"], []) [Str "Adaptive Quality with $preview"], CodeBlock ("", ["openscad"], []) "// Use lower $fn during preview for fast rendering, higher for export
$fn = $preview ? 16 : 64;

// This speeds up preview without compromising final export quality
sphere(r=20, $fn=$fn);
", Header 4 ("quiz--lesson-3dmake7-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.7 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "In OpenSCAD, do transforms apply left-to-right or right-to-left (innermost or outermost first)?"]], [Plain [Str "What is the result of ", Code ("", [], []) "atan(1)", Str "?"]], [Plain [Str "What is the advantage of ", Code ("", [], []) "atan2(y, x)", Str " over ", Code ("", [], []) "atan(y/x)", Str "?"]], [Plain [Str "What does ", Code ("", [], []) "minkowski()", Str " do geometrically?"]], [Plain [Str "What does ", Code ("", [], []) "mirror([1, 0, 0])", Str " do?"]], [Plain [Str "What does ", Code ("", [], []) "scale([1, 1, 2])", Str " do to a sphere?"]], [Plain [Str "Write the code to place 6 cylinders evenly spaced around a circle of radius 25 mm."]], [Plain [Str "What does ", Code ("", [], []) "norm([3, 4, 0])", Str " return?"]], [Plain [Str "True or False: ", Code ("", [], []) "translate([10,0,0]) rotate([0,0,45]) cube(5)", Str " rotates the cube and then moves it."]], [Plain [Str "Why would you use ", Code ("", [], []) "$preview", Str " to conditionally set ", Code ("", [], []) "$fn", Str "?"]], [Plain [Str "Describe the difference between ", Code ("", [], []) "atan(y/x)", Str " and ", Code ("", [], []) "atan2(y, x)", Str ". In which quadrant does ", Code ("", [], []) "atan()", Str " fail to return the correct angle?"]], [Plain [Str "A phone stand design uses ", Code ("", [], []) "rotate([angle - 90, 0, 0])", Str " to tilt the back support. If ", Code ("", [], []) "angle = 65", Str ", what is the actual rotation applied?"]], [Plain [Str "What does ", Code ("", [], []) "cross([1,0,0], [0,1,0])", Str " return, and what is the geometric meaning of the cross product?"]], [Plain [Str "Explain why using ", Code ("", [], []) "minkowski()", Str " with a sphere produces a different edge profile than using ", Code ("", [], []) "minkowski()", Str " with a cylinder."]], [Plain [Str "A design requires placing components at the vertices of an equilateral triangle centered at the origin. Using ", Code ("", [], []) "cos()", Str " and ", Code ("", [], []) "sin()", Str ", calculate the coordinates of all three vertices for a circumradius of 30 mm."]]], Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Redesign your phone stand with a cable slot cut through the base. Make the slot width a parameter."]], [Plain [Str "Add rubber feet pockets to the base of your phone stand: four small rectangular cutouts that could hold adhesive rubber bumpers."]], [Plain [Str "Create a phone stand variant that holds the phone in landscape (horizontal) orientation. What parameters change?"]], [Plain [Str "Build a radially symmetric decoration: 12 identical fins evenly spaced around a central cylinder using a ", Code ("", [], []) "for", Str " loop and ", Code ("", [], []) "rotate()", Str "."]], [Plain [Str "Use ", Code ("", [], []) "atan2()", Str " to compute the angle of a slope and apply it with ", Code ("", [], []) "rotate()", Str " to align a part precisely with the slope."]], [Plain [Str "Design a phone stand for a large tablet: update parameters and verify the design still holds at the correct angle."]], [Plain [Str "Build a \"compound arm\": three rigid links connected at joints, each rotated by a parameter angle. Display all three links as an assembly."]], [Plain [Str "Create an ergonomic keyboard wrist rest using ", Code ("", [], []) "minkowski()", Str " with an ellipsoid for smooth contouring."]], [Plain [Str "Demonstrate transform order: build a visual example that shows the difference between ", Code ("", [], []) "rotate -> translate", Str " and ", Code ("", [], []) "translate -> rotate", Str " using colored shapes."]], [Plain [Str "Redesign the phone stand as a wall-mount: replace the base with a plate that has two mounting holes, positioned so the phone faces outward."]], [Plain [Str "Build a mirror-symmetric earring holder: design one arm with pegs, then use ", Code ("", [], []) "mirror()", Str " to create the symmetric pair."]], [Plain [Str "Use ", Code ("", [], []) "norm()", Str " to calculate the diagonal of a rectangular prism and use that value to size a through-hole in the design."]], [Plain [Str "Research OpenSCAD's ", Code ("", [], []) "multmatrix()", Str " function. Build a shear transformation example that could not be achieved with ", Code ("", [], []) "translate()", Str " and ", Code ("", [], []) "rotate()", Str " alone."]], [Plain [Str "Add snap-fit clips to the phone stand: two small flexible fingers on either side of the cradle that hold the phone securely. Use the snap-fit principles from Lesson 8."]], [Plain [Str "Design a dual-phone stand using a ", Code ("", [], []) "for", Str " loop and ", Code ("", [], []) "translate()", Str " to create two side-by-side stands at different angles, parametrically spaced."]]], Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs%5Cpandoc%5Clatex%5Csrc%5Cassets%5CProgramming_with_OpenSCAD.epub", ""), Str " — Transforms chapter"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Phone stand worked example"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — Math and transform functions"]]]]