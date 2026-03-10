[Header 3 ("lesson-7--parametric-transforms-and-the-phone-stand-project", [], []) [Str "Lesson 7 — Parametric Transforms and the Phone Stand Project"], Para [Strong [Str "Estimated Time:"], Str " 90–120 minutes", LineBreak, Strong [Str "Course:"], Str " 3dMake Certification — High School Distance Learning Track"], HorizontalRule, Header 4 ("before-you-start", ["unnumbered", "unlisted"], []) [Str "Before You Start"], Para [Str "You can now create shapes, combine them with CSG, organize them into modules, and add text. This lesson is about the next layer of precision: ", Emph [Str "moving, rotating, mirroring, and scaling"], Str " objects with mathematical exactness."], Para [Str "You've used ", Code ("", [], []) "translate()", Str " before to move shapes around. But there's a subtlety about how OpenSCAD applies transforms — specifically, the ", Emph [Str "order"], Str " in which they execute — that is one of the most common sources of confusing bugs in OpenSCAD designs. Understanding the order rule deeply is one of the most valuable things you'll get from this lesson."], Para [Str "This lesson also builds your first complete, multi-module project: a parametric phone stand. It's not just an exercise — it's a real, functional object. You'll measure your actual phone, enter those measurements as parameters, and the math will generate the exact geometry needed to hold your phone at the angle you specify. Change the angle parameter and the entire stand recalculates."], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Apply ", Code ("", [], []) "translate()", Str ", ", Code ("", [], []) "rotate()", Str ", and ", Code ("", [], []) "scale()", Str " in the correct order for compound transforms"]], [Plain [Str "Use trigonometric functions (", Code ("", [], []) "sin()", Str ", ", Code ("", [], []) "cos()", Str ", ", Code ("", [], []) "atan2()", Str ") to compute precise geometry positions"]], [Plain [Str "Use ", Code ("", [], []) "minkowski()", Str " to create rounded edges and ", Code ("", [], []) "mirror()", Str " to create perfectly symmetric parts"]], [Plain [Str "Build a complete parametric phone stand from three measured dimensions"]], [Plain [Str "Use ", Code ("", [], []) "$preview", Str " to conditionally speed up rendering during development"]], [Plain [Str "Apply vector math functions: ", Code ("", [], []) "norm()", Str ", ", Code ("", [], []) "cross()", Str ", and the dot product"]]], HorizontalRule, Header 4 ("concept-1-transform-order--the-most-important-rule-in-this-lesson", ["unnumbered", "unlisted"], []) [Str "Concept 1: Transform Order — The Most Important Rule in This Lesson"], Header 5 ("how-openscad-applies-multiple-transforms", ["unnumbered", "unlisted"], []) [Str "How OpenSCAD Applies Multiple Transforms"], Para [Str "When you write multiple transforms on the same line, OpenSCAD applies them in ", Strong [Str "right-to-left order"], Str " — the transform closest to the geometry object applies first."], Para [Str "Read this line:"], CodeBlock ("", ["openscad"], []) "translate([10, 0, 0]) rotate([0, 0, 45]) cube(5);
", Para [Str "Your eye reads left to right: \"translate, then rotate.\" But OpenSCAD executes right to left: first ", Code ("", [], []) "rotate", Str " (it's closer to ", Code ("", [], []) "cube", Str "), then ", Code ("", [], []) "translate", Str ". So the cube is first rotated 45° around the origin, and ", Emph [Str "then"], Str " moved 10 mm in X."], Para [Str "Now read this:"], CodeBlock ("", ["openscad"], []) "rotate([0, 0, 45]) translate([10, 0, 0]) cube(5);
", Para [Str "This time: first ", Code ("", [], []) "translate", Str " (cube moves 10 mm right), then ", Code ("", [], []) "rotate", Str " (the cube, now positioned at X=10, rotates around the origin). The result is that the cube ends up in a completely different location — it orbits around the origin rather than rotating in place."], Header 5 ("why-this-matters", ["unnumbered", "unlisted"], []) [Str "Why This Matters"], Para [Str "This rule has a real consequence: ", Strong [Str "changing the order of transforms changes the position of your geometry"], Str ", even if the transforms themselves are identical. This is the source of a lot of frustrating bugs in OpenSCAD designs, especially when the code looks correct to you."], Para [Str "The way to internalize it: think of it as nested functions. In ", Code ("", [], []) "translate(rotate(cube()))", Str ", ", Code ("", [], []) "cube()", Str " runs first, then ", Code ("", [], []) "rotate()", Str " acts on its output, then ", Code ("", [], []) "translate()", Str " acts on that result. The same way ", Code ("", [], []) "f(g(x))", Str " in math means \"apply g first, then f.\""], CodeBlock ("", ["openscad"], []) "// Example A: cube rotates 45° in place, then moves 10mm right
// (rotate happens to the stationary cube, then translate moves it)
translate([10, 0, 0]) rotate([0, 0, 45]) cube(5);

// Example B: cube moves 10mm right first, then the rotated version orbits the origin
// (translate moves it first, then rotate spins it around origin — completely different result)
rotate([0, 0, 45]) translate([10, 0, 0]) cube(5);
", Para [Strong [Str "Build both of these side by side."], Str " Look at where each cube ends up. The visual difference makes this rule concrete in a way that reading about it can't."], Header 5 ("the-rule-in-plain-language", ["unnumbered", "unlisted"], []) [Str "The Rule in Plain Language"], Para [Str "\"The last transform written (closest to the shape) runs first.\" Repeat this until it's automatic."], HorizontalRule, Header 4 ("step-1--translate-rotate-scale", ["unnumbered", "unlisted"], []) [Str "Step 1 — Translate, Rotate, Scale"], Header 5 ("translatex-y-z--move", ["unnumbered", "unlisted"], []) [Code ("", [], []) "translate([x, y, z])", Str " — Move"], Para [Code ("", [], []) "translate()", Str " moves its child object by the specified amount in each axis. ", Code ("", [], []) "translate([10, 0, 0])", Str " moves 10 mm to the right. ", Code ("", [], []) "translate([0, 0, 5])", Str " moves 5 mm up. Negative values move in the opposite direction."], Para [Str "You already know this one from previous lessons. The key reminder is the order rule above."], Header 5 ("rotatex_deg-y_deg-z_deg--rotate", ["unnumbered", "unlisted"], []) [Code ("", [], []) "rotate([x_deg, y_deg, z_deg])", Str " — Rotate"], Para [Code ("", [], []) "rotate()", Str " rotates its child around the X, Y, and/or Z axes by the specified angles in degrees. The rotation happens around the origin — if the object isn't at the origin, it will orbit around it (which is sometimes what you want, sometimes not)."], Para [Code ("", [], []) "rotate([0, 0, 45])", Str " rotates around the Z axis (spins in the XY plane).", SoftBreak, Code ("", [], []) "rotate([90, 0, 0])", Str " rotates around the X axis (tips the object forward/backward).", SoftBreak, Code ("", [], []) "rotate([0, 90, 0])", Str " rotates around the Y axis (tips the object left/right)."], Para [Str "When you want to rotate an object around its own center (not the origin), translate it to the origin first, rotate it, then translate it to its final position:"], CodeBlock ("", ["openscad"], []) "// Rotate a cylinder around its own center, then position it
translate([20, 30, 0])        // 3. move to final position
  rotate([0, 90, 0])          // 2. rotate (runs before translate due to order rule)
    cylinder(h=20, r=5);      // 1. cylinder starts at origin
", Header 5 ("scalex-y-z--stretch-or-compress", ["unnumbered", "unlisted"], []) [Code ("", [], []) "scale([x, y, z])", Str " — Stretch or Compress"], Para [Code ("", [], []) "scale([1, 1, 2])", Str " doubles the height of an object without changing its width or depth. ", Code ("", [], []) "scale([0.5, 0.5, 0.5])", Str " shrinks everything by half. ", Code ("", [], []) "scale([1, 2, 1])", Str " doubles depth only."], Para [Code ("", [], []) "scale()", Str " is less common than the others because it changes proportions — a sphere becomes an ellipsoid, a cube becomes a rectangular box. But it's useful for quick dimension experiments or for stretching a symmetrical part in one direction."], CodeBlock ("", ["openscad"], []) "// Stretch a sphere 2x in Z to create an egg shape
scale([1, 1, 2]) sphere(r=10, $fn=32);
", HorizontalRule, Header 4 ("step-2--trigonometry-for-geometric-positioning", ["unnumbered", "unlisted"], []) [Str "Step 2 — Trigonometry for Geometric Positioning"], Header 5 ("why-you-need-trig-in-design", ["unnumbered", "unlisted"], []) [Str "Why You Need Trig in Design"], Para [Str "Trigonometry shows up in 3D design whenever you need to:"], BulletList [[Plain [Str "Place objects evenly around a circle"]], [Plain [Str "Compute an angle from a measured slope"]], [Plain [Str "Position something at a known distance and direction from a reference point"]], [Plain [Str "Calculate how deep a feature needs to be at a given angle"]]], Para [Str "Fortunately, you don't need to understand all of trigonometry deeply — you need three functions and one rule."], Para [Strong [Str "The rule: all angles in OpenSCAD are in degrees."], Str " Not radians. This is different from most programming languages. ", Code ("", [], []) "sin(90)", Str " in OpenSCAD returns 1 (correct for 90°). If you accidentally use radians, your numbers will be wildly off."], Header 5 ("sin-cos-and-placing-things-around-a-circle", ["unnumbered", "unlisted"], []) [Code ("", [], []) "sin()", Str ", ", Code ("", [], []) "cos()", Str ", and Placing Things Around a Circle"], Para [Code ("", [], []) "sin(angle)", Str " and ", Code ("", [], []) "cos(angle)", Str " return the Y and X components of a unit vector pointing at that angle. Multiplying by a radius gives you the actual coordinates."], Para [Str "For a circle of radius ", Code ("", [], []) "r", Str ", the (x, y) position at angle ", Code ("", [], []) "a", Str " is:"], BulletList [[Plain [Code ("", [], []) "x = cos(a) * r"]], [Plain [Code ("", [], []) "y = sin(a) * r"]]], CodeBlock ("", ["openscad"], []) "// Place 6 cylinders evenly around a circle of radius 25mm
// 360° / 6 = 60° apart
for (i = [0:5]) {
  angle = i * 60;
  translate([cos(angle) * 25, sin(angle) * 25, 0])
    cylinder(r=3, h=5, $fn=16);
}
", Header 5 ("atan2y-x--the-safe-angle-calculator", ["unnumbered", "unlisted"], []) [Code ("", [], []) "atan2(y, x)", Str " — The Safe Angle Calculator"], Para [Str "When you need to go the other direction — from (x, y) coordinates back to an angle — use ", Code ("", [], []) "atan2(y, x)", Str "."], Para [Code ("", [], []) "atan(y/x)", Str " seems like it would work, but it fails in two quadrants. When x is negative (the left half of the circle), the division produces a value that places the angle in the wrong half of the circle. ", Code ("", [], []) "atan2(y, x)", Str " takes both components separately and always returns the correct angle for all four quadrants."], CodeBlock ("", ["openscad"], []) "dx = -5;  dy = 5;
angle_correct = atan2(dy, dx);   // 135° — correct (upper-left quadrant)
angle_wrong   = atan(dy / dx);   // -45° — wrong (treats it as lower-right)
echo(\"atan2:\", angle_correct, \"  atan:\", angle_wrong);
", Para [Str "Always use ", Code ("", [], []) "atan2()", Str " when computing angles from coordinate pairs. Make this a habit."], HorizontalRule, Header 4 ("step-3--minkowski-for-rounded-edges", ["unnumbered", "unlisted"], []) [Str "Step 3 — ", Code ("", [], []) "minkowski()", Str " for Rounded Edges"], Header 5 ("what-the-minkowski-sum-does", ["unnumbered", "unlisted"], []) [Str "What the Minkowski Sum Does"], Para [Code ("", [], []) "minkowski()", Str " computes something called the ", Strong [Str "Minkowski sum"], Str " of its children. The geometric meaning: it \"rolls\" the second shape over every point on the surface of the first shape, and the result is all the space swept out by this rolling."], Para [Str "In practice, the most useful application is rounding the edges and corners of a box. If you take the Minkowski sum of a cube and a small sphere, you get a box with perfectly rounded corners and edges — the rounding radius equals the sphere's radius."], Para [Str "The variation used most often for printable parts is to use a ", Strong [Str "cylinder"], Str " instead of a sphere. A very flat cylinder (nearly zero height) rounds the vertical edges of a box but keeps the bottom face flat. This is ideal for parts that will sit on a surface, because a sphere-Minkowski box has a rounded bottom that makes it rock."], CodeBlock ("", ["openscad"], []) "// Rounded box — sphere rounds all corners and edges including bottom
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
", Header 5 ("performance-warning", ["unnumbered", "unlisted"], []) [Str "Performance Warning"], Para [Code ("", [], []) "minkowski()", Str " is computationally expensive. With high ", Code ("", [], []) "$fn", Str " values on the secondary shape, it can take several minutes to compute. During development, keep the secondary shape at ", Code ("", [], []) "$fn=12–16", Str ". Only use ", Code ("", [], []) "$fn=32+", Str " for final export. Even better: use the ", Code ("", [], []) "$preview", Str " technique in Step 5 to skip Minkowski entirely during quick iterations."], HorizontalRule, Header 4 ("step-4--mirror-for-symmetry", ["unnumbered", "unlisted"], []) [Str "Step 4 — ", Code ("", [], []) "mirror()", Str " for Symmetry"], Header 5 ("design-one-half-mirror-the-other", ["unnumbered", "unlisted"], []) [Str "Design One Half, Mirror the Other"], Para [Str "Many designs have a line of symmetry — two legs, two wings, two ears, two cable clips. Instead of designing both halves separately (which introduces the risk of slight misalignment), design one half and mirror it. The mirrored copy is guaranteed to be exactly symmetric."], Para [Code ("", [], []) "mirror([1, 0, 0])", Str " reflects across the YZ plane — negates X coordinates.", SoftBreak, Code ("", [], []) "mirror([0, 1, 0])", Str " reflects across the XZ plane — negates Y coordinates.", SoftBreak, Code ("", [], []) "mirror([0, 0, 1])", Str " reflects across the XY plane — negates Z coordinates."], CodeBlock ("", ["openscad"], []) "// Design one ear, mirror it to get a symmetric pair
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
", HorizontalRule, Header 4 ("step-5--build-the-complete-phone-stand", ["unnumbered", "unlisted"], []) [Str "Step 5 — Build the Complete Phone Stand"], Header 5 ("why-build-this", ["unnumbered", "unlisted"], []) [Str "Why Build This"], Para [Str "The phone stand is your first complete multi-module project. It's functional, parametric, and applies trigonometry to solve a real design problem. More importantly, it's something you'll actually use — which is a good test of your own design work."], Header 5 ("measuring-your-phone", ["unnumbered", "unlisted"], []) [Str "Measuring Your Phone"], Para [Str "Before writing code, use a ruler or calipers to measure:"], BulletList [[Plain [Strong [Str "Phone width"], Str ": the dimension across the face (X dimension in the cradle)"]], [Plain [Strong [Str "Phone thickness"], Str ": how thick the phone is (determines cradle depth)"]], [Plain [Strong [Str "Preferred angle"], Str ": how far you want the phone to lean back from vertical (65° from horizontal is a comfortable default for most people)"]]], Header 5 ("the-full-parametric-design", ["unnumbered", "unlisted"], []) [Str "The Full Parametric Design"], CodeBlock ("", ["openscad"], []) "// ============================================================
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
  assert(w > 2*r && d > 2*r, \"Dimensions too small for the rounding radius\");
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
", Header 5 ("understanding-the-trigonometry", ["unnumbered", "unlisted"], []) [Str "Understanding the Trigonometry"], Para [Str "The rotation ", Code ("", [], []) "rotate([angle - 90, 0, 0])", Str " deserves an explanation."], Para [Str "In OpenSCAD, a rotation of 0° around the X axis means the object is vertical (standing straight up). A rotation of -90° tips it flat forward (horizontal). When we want the back support to lean at ", Code ("", [], []) "angle", Str " degrees from horizontal, we need a rotation of ", Code ("", [], []) "angle - 90", Str " degrees:"], BulletList [[Plain [Str "If ", Code ("", [], []) "angle = 90", Str " (vertical phone): ", Code ("", [], []) "rotate([0, 0, 0])", Str " — no rotation, support is vertical"]], [Plain [Str "If ", Code ("", [], []) "angle = 65", Str " (typical lean): ", Code ("", [], []) "rotate([-25, 0, 0])", Str " — leans 25° back"]], [Plain [Str "If ", Code ("", [], []) "angle = 45", Str " (steeper lean): ", Code ("", [], []) "rotate([-45, 0, 0])", Str " — leans 45° back"]]], Para [Str "After building the stand, try changing ", Code ("", [], []) "angle", Str " from 45 to 80 in 5-degree steps and rebuild each time. Watch the support geometry recalculate automatically for every value."], HorizontalRule, Header 4 ("step-6--adaptive-quality-with-preview", ["unnumbered", "unlisted"], []) [Str "Step 6 — Adaptive Quality with ", Code ("", [], []) "$preview"], Header 5 ("fast-during-development-high-quality-for-export", ["unnumbered", "unlisted"], []) [Str "Fast During Development, High-Quality for Export"], Para [Code ("", [], []) "$preview", Str " is a special OpenSCAD variable that is automatically ", Code ("", [], []) "true", Str " during F5 preview (the fast OpenSCAD preview) and ", Code ("", [], []) "false", Str " during F6 full render and ", Code ("", [], []) "3dm build", Str ". You can use it to conditionally use lower-quality (faster) settings during development and automatically switch to high quality for final export."], CodeBlock ("", ["openscad"], []) "// Low $fn during preview for fast renders; high $fn for final build
$fn = $preview ? 16 : 64;

sphere(r=20);  // uses $fn=16 in preview, $fn=64 during 3dm build
", Para [Str "This is especially valuable with ", Code ("", [], []) "minkowski()", Str ", which can be very slow at high ", Code ("", [], []) "$fn", Str ". During development, replace the Minkowski operation with a plain box placeholder:"], CodeBlock ("", ["openscad"], []) "module rounded_box_adaptive(w, d, h, r=4) {
  if ($preview) {
    // Fast placeholder during development
    color(\"orange\", 0.6) cube([w, d, h]);
  } else {
    // Full, accurate Minkowski sum for final export
    minkowski() {
      cube([w - 2*r, d - 2*r, h - r]);
      sphere(r=r, $fn=12);
    }
  }
}
", HorizontalRule, Header 4 ("concept-2-vector-math-functions", ["unnumbered", "unlisted"], []) [Str "Concept 2: Vector Math Functions"], Header 5 ("three-functions-worth-knowing", ["unnumbered", "unlisted"], []) [Str "Three Functions Worth Knowing"], Para [Strong [Code ("", [], []) "norm(v)"], Str " — returns the length (magnitude) of a vector. ", Code ("", [], []) "norm([3, 4, 0])", Str " = 5. This is the Euclidean distance from the origin to the point (3, 4, 0), and it follows from the Pythagorean theorem: √(3² + 4² + 0²) = 5."], Para [Strong [Str "Dot product (", Code ("", [], []) "a * b", Str ")"], Str " — returns a single number that measures how \"aligned\" two vectors are. If both vectors point in exactly the same direction, the dot product equals the product of their lengths. If they're perpendicular, it equals 0. If they point in opposite directions, it's negative. Useful for checking angles between directions."], Para [Strong [Code ("", [], []) "cross(a, b)"], Str " — returns a vector perpendicular to both input vectors. ", Code ("", [], []) "cross([1,0,0], [0,1,0])", Str " returns ", Code ("", [], []) "[0,0,1]", Str " — the Z axis is perpendicular to both X and Y. Useful for computing surface normals or finding the axis of rotation between two vectors."], CodeBlock ("", ["openscad"], []) "// norm: length of a vector
v = [3, 4, 0];
echo(\"Length:\", norm(v));   // 5

// dot product: alignment measure
a = [1, 0, 0];   // X axis
b = [0.7, 0.7, 0];
echo(\"Dot product:\", a * b);   // 0.7

// cross product: vector perpendicular to both
c = cross([1, 0, 0], [0, 1, 0]);
echo(\"Cross:\", c);   // [0, 0, 1] — the Z axis
", HorizontalRule, Header 4 ("quiz--lesson-7-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 7 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "In OpenSCAD, do transforms apply left-to-right or right-to-left (which transform runs first)?"]], [Plain [Str "What is the result of ", Code ("", [], []) "cos(0)", Str " and ", Code ("", [], []) "sin(90)", Str " in OpenSCAD (working in degrees)?"]], [Plain [Str "What is the key advantage of ", Code ("", [], []) "atan2(y, x)", Str " over ", Code ("", [], []) "atan(y/x)", Str " for computing angles?"]], [Plain [Str "What does ", Code ("", [], []) "minkowski()", Str " do geometrically? Describe it in plain language."]], [Plain [Str "What does ", Code ("", [], []) "mirror([1, 0, 0])", Str " do? Which plane does it reflect across?"]], [Plain [Str "What does ", Code ("", [], []) "scale([1, 1, 2])", Str " do to a sphere?"]], [Plain [Str "Write OpenSCAD code to place 8 cylinders evenly spaced around a circle of radius 30 mm."]], [Plain [Str "What does ", Code ("", [], []) "norm([3, 4, 0])", Str " return, and how is this computed?"]], [Plain [Str "True or False: ", Code ("", [], []) "translate([10,0,0]) rotate([0,0,45]) cube(5)", Str " rotates the cube first, then translates it."]], [Plain [Str "What does setting ", Code ("", [], []) "$preview", Str " to ", Code ("", [], []) "true", Str " mean in OpenSCAD, and when is it set automatically?"]], [Plain [Str "Why does using ", Code ("", [], []) "minkowski()", Str " with ", Code ("", [], []) "cylinder(h=0.01)", Str " instead of ", Code ("", [], []) "sphere()", Str " produce a flat bottom surface?"]], [Plain [Str "In the phone stand design, the back support uses ", Code ("", [], []) "rotate([angle - 90, 0, 0])", Str ". If ", Code ("", [], []) "angle = 70", Str ", what is the actual rotation applied? What does this mean physically?"]], [Plain [Str "What does ", Code ("", [], []) "cross([1,0,0], [0,1,0])", Str " return and what is the geometric meaning?"]], [Plain [Str "Explain why designing one half of a symmetric part and using ", Code ("", [], []) "mirror()", Str " is better than designing both halves separately."]], [Plain [Str "A design requires placing 5 components at the vertices of a regular pentagon centered at the origin. Using ", Code ("", [], []) "cos()", Str " and ", Code ("", [], []) "sin()", Str ", what is the formula for the coordinates of each vertex, given a circumradius of 25 mm?"]]], HorizontalRule, Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Redesign your phone stand with a USB cable slot cut through the lip. Make the slot width and depth parameters."]], [Plain [Str "Add rubber foot pockets to the base plate: four small rectangular cutouts on the bottom face, positioned at the corners."]], [Plain [Str "Create a phone stand variant that holds the phone in landscape (horizontal) orientation. Document which parameters changed and why."]], [Plain [Str "Build a radially symmetric decoration: 12 identical fins evenly spaced around a central cylinder using ", Code ("", [], []) "for", Str " loop and ", Code ("", [], []) "rotate()", Str "."]], [Plain [Str "Use ", Code ("", [], []) "atan2()", Str " to compute the angle of a ramp and use that angle with ", Code ("", [], []) "rotate()", Str " to align a small object precisely on the ramp surface."]], [Plain [Str "Design a phone stand for a large tablet (e.g., 180mm × 240mm). Update the parameters, rebuild, and verify the stand still holds at the correct angle."]], [Plain [Str "Build a \"compound arm\" — three rigid link segments connected end-to-end, each at a different angle. Display all three as an assembly with no gaps or overlaps."]], [Plain [Str "Create an ergonomic keyboard wrist rest using ", Code ("", [], []) "minkowski()", Str " with a cylinder for smooth, flat-base contouring."]], [Plain [Str "Build a visual transform order demo: two colored objects that differ only in the order of ", Code ("", [], []) "translate()", Str " and ", Code ("", [], []) "rotate()", Str ", placed side by side with labels."]], [Plain [Str "Redesign the phone stand as a wall-mount: replace the base plate with a flat back plate that has two M3 mounting holes."]], [Plain [Str "Build a mirror-symmetric earring holder: design one branch with pegs, then use ", Code ("", [], []) "mirror()", Str " to create the symmetric partner. Both branches should connect to a central hanging loop."]], [Plain [Str "Use ", Code ("", [], []) "norm()", Str " to calculate the space diagonal of a rectangular prism (distance from one corner to the opposite corner) and use that value as a dimension in the design."]], [Plain [Str "Research OpenSCAD's ", Code ("", [], []) "multmatrix()", Str " function. Build a shear transformation example (slanting a box into a parallelogram-shaped prism) that can't be achieved with standard transforms."]], [Plain [Str "Add snap-fit clips to the phone stand cradle: two small flexible fingers that slightly grip the phone. Dimension the fingers using snap-fit principles from Lesson 8."]], [Plain [Str "Design a dual phone stand: two cradles side by side at different angles, sharing a common base. Use a ", Code ("", [], []) "for", Str " loop and parametric spacing."]]], HorizontalRule, Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/latex/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — Transforms chapter"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Phone stand worked example"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — Math and transform functions"]]]]