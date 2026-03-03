[Header 3 ("lesson-3--parametric-architecture-and-modular-libraries", [], []) [Str "Lesson 3 — Parametric Architecture and Modular Libraries"], Para [Emph [Str "[", Str "CORRECTED — March 2026 Curriculum Revision", Str "]"]], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Understand OpenSCAD's unique variable scoping rules (the \"last-wins\" model)"]], [Plain [Str "Write parametric modules with validated inputs using ", Code ("", [], []) "assert()"]], [Plain [Str "Organize reusable geometry into library files using ", Code ("", [], []) "use", Str " and ", Code ("", [], []) "include"]], [Plain [Str "Write recursive functions for mathematical and spatial computations"]], [Plain [Str "Apply list comprehensions and vector operations for advanced parametric design"]]], HorizontalRule, Header 4 ("step-1--how-openscad-variables-work-its-different", ["unnumbered", "unlisted"], []) [Str "Step 1 — How OpenSCAD Variables Work (It's Different!)"], Para [Str "OpenSCAD variables do ", Strong [Str "not"], Str " work like variables in Python, JavaScript, or C. Understanding this prevents one of the most common beginner bugs."], Para [Strong [Str "The three rules:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "There is no assignment during execution."], Str " Variables are bound at parse time (when the file is read), not when the geometry is drawn."]], [Plain [Strong [Str "The last assignment in a scope wins."], Str " If you write ", Code ("", [], []) "x = 5;", Str " and then ", Code ("", [], []) "x = 10;", Str ", ", Code ("", [], []) "x", Str " is always ", Code ("", [], []) "10", Str " — the first line is silently overridden."]], [Plain [Strong [Str "Variables inside modules are local."], Str " They do not affect global variables with the same name."]]], CodeBlock ("", ["openscad"], []) "// COMMON MISTAKE: thinking x changes value during execution
x = 5;
echo(\"x = \", x);  // Prints 10, NOT 5 — last assignment wins at parse time
x = 10;

// WHY: OpenSCAD reads the ENTIRE file before rendering anything.
// By the time it renders, x has already been resolved to 10.

// CORRECT PATTERN: use distinct names, not reassignment
base_size    = 20;
padded_size  = base_size + 10;   // 30 — this is fine
doubled_size = base_size * 2;    // 40 — fine too
echo(base_size, padded_size, doubled_size);  // 20, 30, 40

// Module scope: variables inside a module are LOCAL
wall_t = 3;   // global wall thickness

module demo_box(size) {
  wall_t = 1;           // LOCAL — does not affect the global wall_t
  cube([size, size, wall_t]);  // uses local wall_t = 1
}

demo_box(20);
echo(\"Global wall_t is still:\", wall_t);  // still 3 — not changed

// PRACTICAL IMPLICATION: to conditionally vary a parameter, use a ternary
mode = \"large\";
box_size = (mode == \"large\") ? 40 : 20;  // ternary — correct pattern
cube([box_size, box_size, 5]);
", HorizontalRule, Header 4 ("step-2--assert-for-parameter-validation", ["unnumbered", "unlisted"], []) [Str "Step 2 — ", Code ("", [], []) "assert()", Str " for Parameter Validation"], Para [Code ("", [], []) "assert()", Str " is the correct tool for validating module parameters. It halts rendering immediately with a descriptive error message if a condition is false. This is far better than ", Code ("", [], []) "echo()", Str ", which only warns and allows bad geometry to continue rendering."], CodeBlock ("", ["openscad"], []) "// assert(condition, message)
// If condition is false: rendering stops; message is shown in the console

module safe_cylinder(r, h, fn=32) {
  // Validate every parameter before it can produce invalid geometry
  assert(is_num(r) && r > 0,
    str(\"safe_cylinder: r must be a positive number, got: \", r));
  assert(is_num(h) && h > 0,
    str(\"safe_cylinder: h must be a positive number, got: \", h));
  assert(fn >= 3,
    str(\"safe_cylinder: $fn must be >= 3, got: \", fn));
  assert(r < 500,
    str(\"safe_cylinder: r=\", r, \"mm seems wrong — did you use cm instead of mm?\"));

  cylinder(r=r, h=h, $fn=fn);
}

safe_cylinder(5, 20);         // works fine
// safe_cylinder(-3, 20);     // STOPS with: \"r must be a positive number, got: -3\"
// safe_cylinder(0, 20);      // STOPS with: \"r must be a positive number, got: 0\"

// Compare with echo() — only warns, does NOT stop rendering:
module unsafe_cylinder(r, h) {
  if (r <= 0) echo(\"WARNING: r should be positive\");  // continues anyway!
  cylinder(r=r, h=h, $fn=32);  // produces invalid geometry
}

// ADVANCED: Multi-condition assert with compound expressions
module slot(length, width, depth) {
  assert(length > width,
    str(\"slot: length (\", length, \") must be greater than width (\", width, \")\"));
  assert(depth > 0 && depth <= 50,
    \"slot: depth must be between 0 and 50mm\");

  translate([-length/2, -width/2, -0.001])
    cube([length, width, depth + 0.001]);
}
", HorizontalRule, Header 4 ("step-3--modules-and-library-files", ["unnumbered", "unlisted"], []) [Str "Step 3 — Modules and Library Files"], Para [Str "Modules are reusable geometry factories. Put shared modules in a separate file and load them with ", Code ("", [], []) "use", Str " or ", Code ("", [], []) "include", Str "."], CodeBlock ("", ["openscad"], []) "// === lib/hardware.scad ===

// Standard M3 bolt hole (adds 0.2mm clearance for real M3 bolts)
module m3_bolt_hole(depth=10, countersink=false) {
  assert(depth > 0, \"m3_bolt_hole: depth must be positive\");
  translate([0, 0, -0.001]) {
    cylinder(d=3.4, h=depth + 0.002, $fn=16);  // M3 clearance
    if (countersink) {
      translate([0, 0, depth - 2.5])
        cylinder(d1=3.4, d2=7.0, h=3, $fn=16);  // countersink cone
    }
  }
}

// Standard M3 standoff (for PCB mounting)
module m3_standoff(height=5, outer_d=6) {
  assert(height > 2, \"m3_standoff: height must be > 2mm\");
  difference() {
    cylinder(d=outer_d, h=height, $fn=16);
    m3_bolt_hole(depth=height);
  }
}
", CodeBlock ("", ["openscad"], []) "// === src/main.scad ===

// use: loads module/function definitions but does NOT execute top-level geometry
use <../lib/hardware.scad>

// include: loads AND executes everything (use sparingly — can cause geometry conflicts)
// include <../lib/settings.scad>

// Now m3_bolt_hole and m3_standoff are available
difference() {
  cube([40, 30, 5]);
  // Place 4 bolt holes at PCB mounting pattern
  for (pos = [[5,5], [35,5], [5,25], [35,25]]) {
    translate([pos[0], pos[1], 0])
      m3_bolt_hole(depth=5);
  }
}
", HorizontalRule, Header 4 ("step-4--recursive-functions", ["unnumbered", "unlisted"], []) [Str "Step 4 — Recursive Functions"], Para [Str "Recursive functions compute values by calling themselves with a smaller input. OpenSCAD supports recursion for ", Strong [Str "value computation"], Str " (not for geometry directly)."], CodeBlock ("", ["openscad"], []) "// Factorial: n! = n × (n-1) × ... × 1
// Base case: factorial(0) = 1 or factorial(1) = 1
function factorial(n) = (n <= 1) ? 1 : n * factorial(n - 1);

echo(factorial(1));   // 1
echo(factorial(5));   // 120
echo(factorial(10));  // 3628800

// Fibonacci sequence: each term is the sum of the two before it
// fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5 ...
function fib(n) = (n <= 1) ? n : fib(n-1) + fib(n-2);

// Use Fibonacci spacing to place pegs — natural, visually pleasing distribution
for (i = [2:9]) {
  translate([fib(i) * 4, 0, 0])
    cylinder(r=1.5, h=5, $fn=16);
}

// ADVANCED: Recursive list building — generate evenly-spaced points
// This replaces a for loop when you need a VALUE (list) rather than geometry
function linspace(start, stop, n) =
  (n <= 1)
    ? [start]
    : concat([start], linspace(start + (stop - start) / (n - 1), stop, n - 1));

positions = linspace(0, 50, 6);  // [0, 10, 20, 30, 40, 50]
echo(\"Positions:\", positions);

for (p = positions) {
  translate([p, 0, 0]) sphere(r=2, $fn=16);
}
", HorizontalRule, Header 4 ("step-5--list-comprehensions-and-vector-math", ["unnumbered", "unlisted"], []) [Str "Step 5 — List Comprehensions and Vector Math"], Para [Str "List comprehensions let you generate lists of values or geometry positions using compact functional syntax."], CodeBlock ("", ["openscad"], []) "// List comprehension: [expression for variable in range if condition]

// Generate a list of cylinder heights: [5, 10, 15, 20, 25]
heights = [for (i = [1:5]) i * 5];
echo(\"Heights:\", heights);  // [5, 10, 15, 20, 25]

// Place cylinders at computed positions
positions = [for (i = [0:7]) [i * 12, 0, 0]];
for (pos = positions) {
  translate(pos)
    cylinder(h = 5 + pos[0] * 0.3, r=3, $fn=16);  // height grows with X position
}

// Filter with a condition: only even-indexed items
even_positions = [for (i = [0:9]) if (i % 2 == 0) i * 15];
echo(\"Even positions:\", even_positions);  // [0, 15, 30, 45, 60]

// 2D grid of points
grid = [for (x = [0:3]) for (y = [0:3]) [x * 20, y * 20, 0]];
for (pt = grid) {
  translate(pt)
    cylinder(r=2, h=8, $fn=16);
}

// Geometric series — rapidly growing spacing (useful for logarithmic layouts)
geo_series = [for (i = [0:5]) pow(2, i) * 3];  // [3, 6, 12, 24, 48, 96]
echo(\"Geometric series:\", geo_series);
", HorizontalRule, Header 4 ("step-6--working-with-vectors-and-math-functions", ["unnumbered", "unlisted"], []) [Str "Step 6 — Working with Vectors and Math Functions"], CodeBlock ("", ["openscad"], []) "// Vector arithmetic is built in
v1 = [10, 20, 5];
v2 = [3, 4, 0];

sum   = v1 + v2;         // [13, 24, 5]
diff  = v1 - v2;         // [7, 16, 5]
scaled = v1 * 2;         // [20, 40, 10]  (scalar multiplication)

echo(\"sum:\", sum, \"diff:\", diff, \"scaled:\", scaled);

// Dot product and norm (vector length)
dot_product = v1 * v2;          // 10*3 + 20*4 + 5*0 = 110
length_v1   = norm(v1);         // sqrt(10²+20²+5²) ≈ 22.9
echo(\"dot:\", dot_product, \"norm:\", length_v1);

// Built-in math functions
echo(abs(-5));      // 5
echo(ceil(3.2));    // 4
echo(floor(3.8));   // 3
echo(round(3.5));   // 4
echo(max(3,7,2));   // 7
echo(min(3,7,2));   // 2
echo(pow(2, 8));    // 256
echo(sqrt(144));    // 12
echo(log(100));     // 2 (log base 10)
echo(ln(exp(1)));   // 1 (natural log)

// Trigonometry — angles in DEGREES (not radians)
echo(sin(90));      // 1
echo(cos(0));       // 1
echo(tan(45));      // 1
echo(atan2(1, 1));  // 45 — two-argument arctangent (safe for all quadrants)

// Cross product (needed for surface normals)
cross_v = cross(v1, v2);
echo(\"cross:\", cross_v);
", HorizontalRule, Header 4 ("step-7--fn-fa-fs--controlling-curve-resolution", ["unnumbered", "unlisted"], []) [Str "Step 7 — ", Code ("", [], []) "$fn", Str ", ", Code ("", [], []) "$fa", Str ", ", Code ("", [], []) "$fs", Str " — Controlling Curve Resolution"], CodeBlock ("", ["openscad"], []) "// $fn: fixed number of faces (overrides $fa and $fs)
// $fa: minimum angle per face in degrees (default 12)
// $fs: minimum size of each face in mm (default 2)

// LOW $fn — fast to render, blocky (use during development)
sphere(r=10, $fn=8);

// HIGH $fn — slow to render, smooth (use for final export only)
translate([30, 0, 0]) sphere(r=10, $fn=64);

// GLOBAL defaults — set once at the top of your file
$fa = 5;    // faces no more than 5° apart
$fs = 0.5;  // faces no smaller than 0.5mm
// All subsequent curves use these defaults

// Per-shape override — finer control
translate([70, 0, 0])
  cylinder(h=20, r=10, $fn=24);   // this one uses 24 faces regardless of globals

// PRACTICAL GUIDELINE:
// During development: $fn=16 or $fn=24
// For final export:   $fn=64 or higher for visible smooth curves
//                     $fn=32 is usually sufficient for functional parts
", HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 3.1:"], Str " Write a module ", Code ("", [], []) "safe_box(w, d, h, wall=2)", Str " that validates all parameters with ", Code ("", [], []) "assert()", Str " and creates a hollow box. The wall thickness must be less than half of the smallest dimension."], Para [Strong [Str "Exercise 3.2:"], Str " Create a library file ", Code ("", [], []) "lib/fasteners.scad", Str " with modules for M2, M3, and M4 bolt holes. Use ", Code ("", [], []) "use", Str " to load it in a main file and place bolt holes at the corners of a 60 × 40 mm plate."], Para [Strong [Str "Exercise 3.3:"], Str " Write a recursive function ", Code ("", [], []) "sum_list(lst, i=0)", Str " that returns the sum of all elements in a list. Use it to compute the total material volume of a set of cylinders."], Para [Strong [Str "Exercise 3.4 (Advanced):"], Str " Use a list comprehension to generate a 5 × 5 grid of cylinders where each cylinder's height equals ", Code ("", [], []) "row + column + 1", Str " (so heights go from 1 to 9). Use ", Code ("", [], []) "echo()", Str " to verify the maximum height."], Header 3 ("lesson-3-parametric-architecture-and-modular-libraries", ["unnumbered", "unlisted"], []) [Str "Lesson 3: Parametric Architecture and Modular Libraries"], Para [Str "Estimated time: 90–120 minutes"], Header 4 ("learning-objectives-1", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Understand and apply the DRY (Don't Repeat Yourself) principle through modules and functions"]], [Plain [Str "Use ", Code ("", [], []) "include", Str " vs ", Code ("", [], []) "use", Str " for library files"]], [Plain [Str "Apply ", Code ("", [], []) "for", Str " loops, conditionals, and list comprehensions"]], [Plain [Str "Write type-safe modules using ", Code ("", [], []) "is_number()", Str ", ", Code ("", [], []) "is_list()", Str ", and ", Code ("", [], []) "is_string()"]], [Plain [Str "Build a reusable module library"]]], Header 4 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project from Lessons 1–2"]], [Plain [Str "Terminal and editor"]]], Header 4 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 5 ("1-define-a-reusable-module", ["unnumbered", "unlisted"], []) [Str "1. Define a Reusable Module"], Para [Str "Modules create named geometry. They accept parameters and can be called anywhere in the file. See ", Note [Para [Str "OpenSCAD User Manual — Modules - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Modules create geometry; calling them produces shapes
module rounded_box(w, d, h, r=2) {
  // r is the corner rounding radius, defaulting to 2mm
  minkowski() {
    cube([w - 2*r, d - 2*r, h], center=true);
    cylinder(r=r, h=0.01, $fn=32);
  }
}

// Call the module with different sizes
rounded_box(50, 30, 20);
translate([60, 0, 0]) rounded_box(40, 40, 15, r=5);
", Header 5 ("2-write-a-function-computes-a-value-no-geometry", ["unnumbered", "unlisted"], []) [Str "2. Write a Function (Computes a Value, No Geometry)"], CodeBlock ("", ["openscad"], []) "// Functions return values, never geometry
function clearance_fit(nominal) = nominal + 0.2;
function tight_fit(nominal)    = nominal - 0.1;

hole_diameter = clearance_fit(8);   // = 8.2
peg_diameter  = tight_fit(8);       // = 7.9

cylinder(r=hole_diameter/2, h=10, $fn=64);
", Header 5 ("3-use-include-and-use-for-libraries", ["unnumbered", "unlisted"], []) [Str "3. Use include and use for Libraries"], CodeBlock ("", ["openscad"], []) "// include: executes the file (modules, functions, AND top-level geometry)
include <BOSL2/std.scad>

// use: imports modules and functions only — no top-level geometry executes
use <my_library.scad>
", Para [Str "Key distinction: ", Code ("", [], []) "include", Str " will also render any top-level geometry in the library file; ", Code ("", [], []) "use", Str " imports only the module and function definitions.", SoftBreak, Str "For more on ", Code ("", [], []) "include", Str " and ", Code ("", [], []) "use", Str ", see ", Note [Para [Str "OpenSCAD User Manual — Include and Use - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement", "")]], Str "."], Header 5 ("4-apply-for-loops-and-conditionals", ["unnumbered", "unlisted"], []) [Str "4. Apply For Loops and Conditionals"], Para [Str "For loop and conditional syntax is described in ", Note [Para [Str "OpenSCAD User Manual — For Loops and Conditionals - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Array of peg positions
peg_positions = [[0,0], [20,0], [40,0], [20,20]];

for (pos = peg_positions) {
  translate([pos[0], pos[1], 0]) cylinder(r=3, h=10, $fn=32);
}

// Conditional: only add a lid if show_lid is true
show_lid = true;
if (show_lid) {
  translate([0, 0, 30]) cube([50, 30, 3]);
}

// For loop with range [start:step:end]
for (i = [0 : 5 : 45]) {
  rotate([0, 0, i]) translate([20, 0, 0]) cylinder(r=2, h=5, $fn=16);
}
", Header 5 ("5-use-type-testing-and-list-comprehensions", ["unnumbered", "unlisted"], []) [Str "5. Use Type Testing and List Comprehensions"], Para [Str "The BOSL2 library provides many advanced parametric modules and functions ", Note [Para [Str "BOSL2 Library Documentation - ", Link ("", [], []) [Str "https://github.com/BelfrySCAD/BOSL2/wiki"] ("https://github.com/BelfrySCAD/BOSL2/wiki", "")]], Str "."], CodeBlock ("", ["openscad"], []) "// Type testing prevents hard-to-debug errors
module validated_cylinder(r, h) {
  if (!is_number(r)) echo(\"WARNING: r must be a number\");
  if (!is_number(h)) echo(\"WARNING: h must be a number\");
  cylinder(r=r, h=h, $fn=64);
}

// List comprehension: create a list of computed values
angles = [for (i = [0:10:350]) i];
echo(angles);  // [0, 10, 20, ..., 350]

// Use list comprehension to build geometry positions
positions = [for (i=[0:3]) i * 25];
for (x = positions) {
  translate([x, 0, 0]) cube([20, 20, 5]);
}
", Header 5 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 1: calling ", Code ("", [], []) "rounded_box(50, 30, 20)", Str " builds a rounded box. Verify in preview."]], [Plain [Str "After step 3: ", Code ("", [], []) "include", Str " vs ", Code ("", [], []) "use", Str " behavior should be tested by placing a top-level ", Code ("", [], []) "cube()", Str " in a library file and using both import methods."]], [Plain [Str "After step 5: ", Code ("", [], []) "echo()", Str " output appears in the OpenSCAD console window."]]], Header 4 ("building-a-practical-library", ["unnumbered", "unlisted"], []) [Str "Building a Practical Library"], Para [Str "A well-designed module library is the backbone of efficient parametric design. Here is a starter library structure:"], CodeBlock ("", ["openscad"], []) "// ============================================================
// fasteners.scad — Parametric fastener library
// Usage: use <fasteners.scad>
// ============================================================

// M3 clearance hole (ISO standard: 3.2mm diameter)
module m3_hole(depth=10) {
  cylinder(r=1.6, h=depth + 0.001, $fn=16);
}

// M4 clearance hole (ISO standard: 4.3mm diameter)
module m4_hole(depth=10) {
  cylinder(r=2.15, h=depth + 0.001, $fn=16);
}

// Countersink pocket for M3 flat-head screw
module m3_countersink(depth=3) {
  union() {
    cylinder(r=1.6, h=10, $fn=16);  // shaft
    cylinder(r1=3.2, r2=1.6, h=depth, $fn=32);  // conical seat
  }
}

// Hex nut trap (for embedding M3 hex nut)
module m3_nut_trap(extra_depth=0) {
  // M3 nut: 5.5mm across flats, 2.4mm thick
  cylinder(r=3.2, h=2.4 + extra_depth, $fn=6);
}
", Para [Str "Using the library:"], CodeBlock ("", ["openscad"], []) "use <fasteners.scad>

difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_hole(depth=10.002);
  translate([30, 15, -0.001]) m3_hole(depth=10.002);
}
", Header 4 ("quiz--lesson-3dmake3-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.3 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is the DRY principle and why is it important in parametric design?"]], [Plain [Str "What is the difference between a module and a function in OpenSCAD?"]], [Plain [Str "What does ", Code ("", [], []) "include <library.scad>", Str " do differently from ", Code ("", [], []) "use <library.scad>", Str "?"]], [Plain [Str "Write a ", Code ("", [], []) "for", Str " loop that places a sphere every 30° around a circle of radius 20."]], [Plain [Str "What does ", Code ("", [], []) "is_number()", Str " return, and give one example of when to use it."]], [Plain [Str "What does a list comprehension ", Code ("", [], []) "[for (i=[0:5:20]) i*2]", Str " evaluate to?"]], [Plain [Str "What does the ", Code ("", [], []) "echo()", Str " function do in OpenSCAD?"]], [Plain [Str "True or False: a function in OpenSCAD can create geometry."]], [Plain [Str "How do you specify a default parameter value in an OpenSCAD module?"]], [Plain [Str "What does the ", Code ("", [], []) "$preview", Str " special variable allow you to do in OpenSCAD?"]], [Plain [Str "Write an OpenSCAD ", Code ("", [], []) "for", Str " loop that creates 8 evenly spaced holes around a circle using ", Code ("", [], []) "for (i = [0:45:315])", Str "."]], [Plain [Str "What is the difference between ", Code ("", [], []) "[0:10]", Str " and ", Code ("", [], []) "[0:2:10]", Str " in an OpenSCAD range expression?"]], [Plain [Str "Explain why you might use type testing (", Code ("", [], []) "is_number()", Str ", ", Code ("", [], []) "is_list()", Str ") in a module rather than relying on the caller to pass correct types."]], [Plain [Str "Describe how recursive functions work in OpenSCAD and give a simple example."]], [Plain [Str "What would happen if you accidentally used ", Code ("", [], []) "include", Str " instead of ", Code ("", [], []) "use", Str " for a library that contains a top-level ", Code ("", [], []) "cube([10,10,10]);", Str " statement?"]]], Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a ", Code ("", [], []) "bolts.scad", Str " library with at least M3, M4, and M5 clearance holes and nut traps; use it in a test plate."]], [Plain [Str "Build a parametric pegboard using a ", Code ("", [], []) "for", Str " loop. Parameters: ", Code ("", [], []) "cols", Str ", ", Code ("", [], []) "rows", Str ", ", Code ("", [], []) "spacing", Str ", ", Code ("", [], []) "peg_r", Str ", ", Code ("", [], []) "peg_h", Str "."]], [Plain [Str "Implement a recursive function that generates a Fibonacci sequence up to ", Code ("", [], []) "n", Str " terms and use it to space pegs."]], [Plain [Str "Build a module that validates all its inputs using ", Code ("", [], []) "assert()", Str " and logs warnings with ", Code ("", [], []) "echo()", Str "; document when ", Code ("", [], []) "assert()", Str " halts rendering vs. ", Code ("", [], []) "echo()", Str "."]], [Plain [Str "Create two library files—one for mechanical fasteners and one for artistic decorations—and include both in a combined project."]], [Plain [Str "Design a parametric gear profile module. Parameters: ", Code ("", [], []) "teeth", Str ", ", Code ("", [], []) "module_size", Str ", ", Code ("", [], []) "thickness", Str ". (You don't need to compute true involute gear geometry — a simplified triangular-tooth approximation is fine.)"]], [Plain [Str "Build a \"shelf peg\" system: a board with N parametrically positioned holes and matching pegs that press-fit into them."]], [Plain [Str "Use a list comprehension to generate a spiral path of points and place a small cylinder at each point."]], [Plain [Str "Extend the ", Code ("", [], []) "fasteners.scad", Str " library with threaded insert pockets for M3, M4, and M5 heat-set inserts (look up brass insert dimensions)."]], [Plain [Str "Write a module that draws a parametric text label with a surrounding bordered frame; parameters: ", Code ("", [], []) "text_str", Str ", ", Code ("", [], []) "font_size", Str ", ", Code ("", [], []) "padding", Str ", ", Code ("", [], []) "border_thickness", Str "."]], [Plain [Str "Build a parametric snap-fit lid for a rectangular box: the lid uses ", Code ("", [], []) "for", Str " loops to generate evenly-spaced snap clips, and all dimensions are parameters."]], [Plain [Str "Write a module that takes a list of coordinate pairs as input and draws a connecting chain of cylinders between consecutive points."]], [Plain [Str "Create a parametric honeycomb panel module using a ", Code ("", [], []) "for", Str " loop and ", Code ("", [], []) "rotate()", Str "; parameters: ", Code ("", [], []) "rows", Str ", ", Code ("", [], []) "cols", Str ", ", Code ("", [], []) "cell_r", Str ", ", Code ("", [], []) "wall_t", Str ", ", Code ("", [], []) "depth", Str "."]], [Plain [Str "Research BOSL2's ", Code ("", [], []) "regular_ngon()", Str " and ", Code ("", [], []) "bezier_path()", Str " modules. Build a shape that uses both and document what each does."]], [Plain [Str "Design a test suite: build 10 small parametric shapes, each testing a different OpenSCAD feature (extrusion, rotation, for loop, intersection, etc.), and export them all from one main file."]]], Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs%5Cpandoc%5Clatex%5Csrc%5Cassets%5CProgramming_with_OpenSCAD.epub", ""), Str " — Chapters on modules, functions, and libraries"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked examples for parametric architecture"]], [Plain [Link ("", [], []) [Str "BOSL2 GitHub Repository"] ("https://github.com/BelfrySCAD/BOSL2", ""), Str " — Comprehensive parametric library"]], [Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", ""), Str " — Build workflow reference"]]]]