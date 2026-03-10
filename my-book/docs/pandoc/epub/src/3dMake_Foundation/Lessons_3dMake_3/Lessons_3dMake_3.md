[Header 3 ("lesson-3--parametric-architecture-and-modular-libraries", [], []) [Str "Lesson 3 — Parametric Architecture and Modular Libraries"], Para [Strong [Str "Estimated Time:"], Str " 90–120 minutes", LineBreak, Strong [Str "Course:"], Str " 3dMake Certification — High School Distance Learning Track"], HorizontalRule, Header 4 ("before-you-start", ["unnumbered", "unlisted"], []) [Str "Before You Start"], Para [Str "You can now create shapes and combine them using CSG. That's the vocabulary. Now it's time to learn the ", Emph [Str "grammar"], Str " — how to organize and generalize your code so it's maintainable, reusable, and professional."], Para [Str "The difference between a beginner OpenSCAD file and a professional one isn't usually the shapes — it's the structure. A beginner file has magic numbers scattered throughout, the same geometry copy-pasted in three places, and no indication of what any variable is for. A professional file has clearly named parameters at the top, organized modules, validation that catches errors before they become bad prints, and code you could hand to someone else and they'd immediately understand."], Para [Str "This lesson introduces the complete system for professional OpenSCAD structure: modules, functions, libraries, and the DRY principle. It also covers one of the most confusing aspects of OpenSCAD for programmers coming from other languages: how variables work here is completely different from Python, JavaScript, or Java — and understanding that difference upfront will save you hours of debugging."], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Understand and work with OpenSCAD's unique \"last-wins\" variable scoping rules"]], [Plain [Str "Write parametric modules with validated inputs using ", Code ("", [], []) "assert()"]], [Plain [Str "Organize reusable geometry into library files using ", Code ("", [], []) "use", Str " and ", Code ("", [], []) "include"]], [Plain [Str "Write recursive functions for mathematical and spatial computations"]], [Plain [Str "Apply list comprehensions and vector operations for advanced parametric design"]], [Plain [Str "Apply the DRY (Don't Repeat Yourself) principle through modules and functions"]], [Plain [Str "Use ", Code ("", [], []) "for", Str " loops, conditionals, and list comprehensions to generate repetitive geometry"]], [Plain [Str "Write type-safe modules using ", Code ("", [], []) "is_number()", Str ", ", Code ("", [], []) "is_list()", Str ", and ", Code ("", [], []) "is_string()"]]], HorizontalRule, Header 4 ("concept-1-how-variables-work-in-openscad-its-different", ["unnumbered", "unlisted"], []) [Str "Concept 1: How Variables Work in OpenSCAD (It's Different)"], Header 5 ("the-most-important-thing-to-understand-in-this-lesson", ["unnumbered", "unlisted"], []) [Str "The Most Important Thing to Understand in This Lesson"], Para [Str "If you've ever programmed in Python, JavaScript, Java, or almost any other language, you have a mental model of variables that works a certain way: you assign a value, the program runs, and that variable holds that value until you change it. Variables are like buckets — you put a value in, you can read what's in there, and you can put a new value in later."], Para [Strong [Str "OpenSCAD does not work this way."], Str " The difference is fundamental and will cause bugs if you misunderstand it. Let's dig in."], Header 5 ("how-openscad-actually-works", ["unnumbered", "unlisted"], []) [Str "How OpenSCAD Actually Works"], Para [Str "OpenSCAD processes your file in two distinct passes:"], Para [Strong [Str "Pass 1 — Parse:"], Str " OpenSCAD reads the entire file from top to bottom, collects every variable assignment and module/function definition, and resolves what every variable equals. No geometry is created during this pass."], Para [Strong [Str "Pass 2 — Render:"], Str " OpenSCAD creates geometry using the values that were determined in Pass 1."], Para [Str "This two-pass system leads to three rules that govern all OpenSCAD code:"], Para [Strong [Str "Rule 1: There is no assignment during execution."], Str " You cannot update a variable while the geometry is being computed. Variables are set during parse time and then read during render time. \"Updating\" a variable mid-computation isn't a concept in OpenSCAD."], Para [Strong [Str "Rule 2: The last assignment in a scope wins — everywhere in that scope."], Str " This is the most confusing rule. If you write ", Code ("", [], []) "x = 5;", Str " on line 3 and then ", Code ("", [], []) "x = 10;", Str " on line 20, the value of ", Code ("", [], []) "x", Str " is ", Code ("", [], []) "10", Str " ", Emph [Str "everywhere"], Str " in that scope — including on line 3, even though you hadn't written the second assignment yet. It's as if OpenSCAD reads the entire file first, decides what everything equals, and then uses those final values. Writing ", Code ("", [], []) "x = 5; echo(x); x = 10;", Str " will print ", Code ("", [], []) "10", Str ", not ", Code ("", [], []) "5", Str "."], Para [Strong [Str "Rule 3: Variables inside modules are local."], Str " A variable declared inside a module exists only within that module. The global variable with the same name is unchanged."], CodeBlock ("", ["openscad"], []) "// COMMON MISTAKE — expecting x to change during execution
x = 5;
echo(\"x =\", x);   // This prints 10, NOT 5 — because the last assignment wins
x = 10;

// CORRECT PATTERN — each value gets its own name
base_size    = 20;          // 20
padded_size  = base_size + 10;   // 30 — computed from base_size
doubled_size = base_size * 2;    // 40 — computed from base_size
echo(base_size, padded_size, doubled_size);  // 20, 30, 40

// MODULE SCOPE — variables inside a module are completely separate
wall_t = 3;   // global wall thickness

module demo_box(size) {
  wall_t = 1;           // This is a DIFFERENT variable — local to this module
  cube([size, size, wall_t]);   // uses the local wall_t = 1
}

demo_box(20);
echo(\"Global wall_t is still:\", wall_t);  // Still 3 — unchanged by the module

// CHOOSING BETWEEN VALUES conditionally — use a ternary expression
mode = \"large\";
box_size = (mode == \"large\") ? 40 : 20;   // If mode is \"large\", 40; otherwise 20
cube([box_size, box_size, 5]);
", Header 5 ("what-this-means-in-practice", ["unnumbered", "unlisted"], []) [Str "What This Means in Practice"], Para [Str "Because you can't update a variable during execution, you can't accumulate a total like ", Code ("", [], []) "total = total + item", Str ". Instead, you describe ", Emph [Str "relationships"], Str " between values mathematically. If the width of your inner wall depends on the outer wall and the wall thickness, you write that as a formula: ", Code ("", [], []) "inner_width = outer_width - 2 * wall_t;", Str ". The system computes the value once, and that value is used everywhere."], Para [Str "This is actually quite elegant once you adjust to it. You're writing equations, not instructions. Each variable is defined once and means exactly one thing."], Para [Str "For cases where you genuinely need to choose between values or compute something iteratively, OpenSCAD provides ", Strong [Str "ternary expressions"], Str " (condition ? value_if_true : value_if_false), ", Strong [Str "recursive functions"], Str ", and ", Strong [Str "list comprehensions"], Str " — all covered in this lesson."], HorizontalRule, Header 4 ("step-1--modules-named-reusable-geometry", ["unnumbered", "unlisted"], []) [Str "Step 1 — Modules: Named, Reusable Geometry"], Header 5 ("what-a-module-is", ["unnumbered", "unlisted"], []) [Str "What a Module Is"], Para [Str "A ", Strong [Str "module"], Str " is a named, reusable piece of geometry. When you find yourself writing the same shape code in multiple places, that's the signal to create a module. Modules accept parameters — just like functions in other languages — so you can write one module that creates many different variations of the same shape."], Para [Str "The syntax is:"], CodeBlock ("", ["openscad"], []) "module name(param1, param2=default_value) {
  // geometry code here
  // uses param1 and param2
}
", Para [Str "Parameters with default values (", Code ("", [], []) "param2=default_value", Str ") are optional — callers can omit them and the default will be used. Parameters without defaults are required."], Para [Str "You call a module just like a statement:"], CodeBlock ("", ["openscad"], []) "name(value1, value2);
", Header 5 ("the-dry-principle", ["unnumbered", "unlisted"], []) [Str "The DRY Principle"], Para [Strong [Str "DRY"], Str " stands for ", Strong [Str "Don't Repeat Yourself"], Str ". It's a fundamental principle of good programming, and it applies directly to OpenSCAD design."], Para [Str "If you need four mounting holes in a plate, you could write the cylinder code four times — once for each hole. But now if you need to change the hole size, you have to change it in four places. If you miss one, your design is inconsistent. If you need to add a fifth hole later, you have to remember the pattern and paste it again."], Para [Str "The DRY approach: write a module ", Code ("", [], []) "mounting_hole(r, depth)", Str " once, then call it four times. Now the hole geometry is defined in exactly one place. Change it once, every hole updates. Add more holes as easily as one line each."], CodeBlock ("", ["openscad"], []) "// WRONG — copy-pasted, hard to maintain
difference() {
  cube([60, 40, 5]);
  translate([5,  5,  -0.001]) cylinder(r=2, h=5.002, $fn=16);
  translate([55, 5,  -0.001]) cylinder(r=2, h=5.002, $fn=16);
  translate([5,  35, -0.001]) cylinder(r=2, h=5.002, $fn=16);
  translate([55, 35, -0.001]) cylinder(r=2, h=5.002, $fn=16);
}

// CORRECT — DRY: one module, used multiple times
module mounting_hole(r=2, depth=5) {
  // The 0.001 offsets prevent co-planar face problems (Lesson 2)
  translate([0, 0, -0.001])
    cylinder(r=r, h=depth + 0.002, $fn=16);
}

difference() {
  cube([60, 40, 5]);
  translate([5,  5,  0]) mounting_hole();
  translate([55, 5,  0]) mounting_hole();
  translate([5,  35, 0]) mounting_hole();
  translate([55, 35, 0]) mounting_hole();
}
", Para [Str "The second version is easier to read, easier to change, and scales effortlessly. If you need a larger hole, change ", Code ("", [], []) "r=2", Str " to ", Code ("", [], []) "r=3", Str " in one place, and all four holes update."], HorizontalRule, Header 4 ("step-2--assert-for-parameter-validation", ["unnumbered", "unlisted"], []) [Str "Step 2 — ", Code ("", [], []) "assert()", Str " for Parameter Validation"], Header 5 ("why-your-modules-should-validate-their-inputs", ["unnumbered", "unlisted"], []) [Str "Why Your Modules Should Validate Their Inputs"], Para [Str "In a parametric design, other people (and future-you) will change parameter values. What happens if someone sets ", Code ("", [], []) "wall_thickness = 0", Str "? Or ", Code ("", [], []) "cylinder_radius = -5", Str "? Depending on the code, it might silently produce garbage geometry, or it might produce a cryptic error that doesn't explain what went wrong."], Para [Code ("", [], []) "assert()", Str " is OpenSCAD's built-in validation statement. It takes a condition and an optional message. If the condition is false, OpenSCAD ", Emph [Str "stops rendering immediately"], Str " and displays your message in the console. This is vastly better than allowing invalid values to silently produce a broken model."], Para [Str "Think of ", Code ("", [], []) "assert()", Str " as making your design constraints machine-enforceable. Instead of just knowing that ", Code ("", [], []) "wall_t", Str " must be at least 1.2 mm for a 0.4 mm nozzle, you write it as an assertion and the tool enforces it automatically."], Header 5 ("how-assert-works", ["unnumbered", "unlisted"], []) [Str "How ", Code ("", [], []) "assert()", Str " Works"], CodeBlock ("", ["openscad"], []) "assert(condition, \"message if condition is false\");
", Para [Str "If ", Code ("", [], []) "condition", Str " evaluates to true, nothing happens — the code continues normally. If ", Code ("", [], []) "condition", Str " is false, the render stops and the message is printed. The message should be descriptive enough that anyone reading it immediately understands what went wrong."], CodeBlock ("", ["openscad"], []) "module safe_cylinder(r, h, fn=32) {
  // Validate all inputs before creating any geometry
  assert(is_num(r) && r > 0,
    str(\"safe_cylinder: radius must be a positive number, got: \", r));
  assert(is_num(h) && h > 0,
    str(\"safe_cylinder: height must be a positive number, got: \", h));
  assert(fn >= 3,
    str(\"safe_cylinder: fn must be at least 3, got: \", fn));
  assert(r < 500,
    str(\"safe_cylinder: radius \", r, \"mm seems wrong — did you enter cm instead of mm?\"));

  cylinder(r=r, h=h, $fn=fn);
}

safe_cylinder(5, 20);          // fine
// safe_cylinder(-3, 20);      // STOPS: \"radius must be a positive number, got: -3\"
// safe_cylinder(5, 20, fn=1); // STOPS: \"fn must be at least 3, got: 1\"
", Para [Str "The ", Code ("", [], []) "str()", Str " function assembles a string from multiple values — very useful for error messages that include the bad value so the user knows exactly what to fix."], Para [Strong [Str "Best practice:"], Str " add ", Code ("", [], []) "assert()", Str " statements to every module you write, at the very top of the module body, before any geometry. This turns bad-input problems into clear messages instead of mysterious rendering failures."], HorizontalRule, Header 4 ("step-3--library-files-use-vs-include", ["unnumbered", "unlisted"], []) [Str "Step 3 — Library Files: ", Code ("", [], []) "use", Str " vs. ", Code ("", [], []) "include"], Header 5 ("organizing-code-across-multiple-files", ["unnumbered", "unlisted"], []) [Str "Organizing Code Across Multiple Files"], Para [Str "Once you have a collection of useful modules — mounting holes, standoffs, snap clips, text labels — you'll want to reuse them across multiple projects without copy-pasting them every time. The solution is a ", Strong [Str "library file"], Str ": a separate ", Code ("", [], []) ".scad", Str " file containing only module and function definitions, which you can import into any project."], Para [Str "There are two ways to load a library:"], Para [Strong [Code ("", [], []) "use <filename.scad>"], Str " — imports only the module and function ", Strong [Str "definitions"], Str " from the file. Any top-level geometry statements in the file (bare ", Code ("", [], []) "cube()", Str ", ", Code ("", [], []) "cylinder()", Str ", etc.) are ", Emph [Str "not"], Str " executed. This is almost always what you want: you want the tools, not any leftover test geometry the library file might contain."], Para [Strong [Code ("", [], []) "include <filename.scad>"], Str " — executes the ", Strong [Str "entire file"], Str ", including any top-level geometry statements. If the library file has a ", Code ("", [], []) "cube([10,10,10]);", Str " at the top level, that cube will appear in your model. Use this sparingly and intentionally."], Para [Str "The mental model: ", Code ("", [], []) "use", Str " is like importing a Python module to get its functions. ", Code ("", [], []) "include", Str " is like copy-pasting the entire file into your code."], CodeBlock ("", ["openscad"], []) "// === lib/hardware.scad ===
// A reusable hardware library. Load with: use <../lib/hardware.scad>

module m3_bolt_hole(depth=10, countersink=false) {
  // M3 clearance hole: 3.4mm diameter (ISO standard M3 clearance)
  assert(depth > 0, \"m3_bolt_hole: depth must be positive\");
  translate([0, 0, -0.001]) {
    cylinder(d=3.4, h=depth + 0.002, $fn=16);
    if (countersink) {
      // Add a countersunk cone for flat-head screws
      translate([0, 0, depth - 2.5])
        cylinder(d1=3.4, d2=7.0, h=3, $fn=32);
    }
  }
}

module m3_standoff(height=5, outer_d=6) {
  // Hollow cylindrical standoff with M3 hole through center
  assert(height > 2, \"m3_standoff: height must be > 2mm\");
  difference() {
    cylinder(d=outer_d, h=height, $fn=16);
    m3_bolt_hole(depth=height);  // Modules can call other modules from the library
  }
}
", CodeBlock ("", ["openscad"], []) "// === src/main.scad ===
use <../lib/hardware.scad>   // loads definitions; no top-level geometry executes

// Place M3 standoffs at all four corners of a mounting plate
cube([60, 40, 5]);
for (pos = [[5,5], [55,5], [5,35], [55,35]]) {
  translate([pos[0], pos[1], 0])
    m3_standoff(height=8);
}
", Header 5 ("structuring-a-good-library", ["unnumbered", "unlisted"], []) [Str "Structuring a Good Library"], Para [Str "A well-organized library groups related modules, documents each one, and validates inputs. Here's a template:"], CodeBlock ("", ["openscad"], []) "// ============================================================
// fasteners.scad — Parametric fastener library
// Usage: use <fasteners.scad>
// All dimensions follow ISO metric standards.
// ============================================================

module m3_hole(depth=10) {
  // M3 clearance hole: 3.2mm diameter
  cylinder(r=1.6, h=depth + 0.001, $fn=16);
}

module m4_hole(depth=10) {
  // M4 clearance hole: 4.3mm diameter
  cylinder(r=2.15, h=depth + 0.001, $fn=16);
}

module m3_nut_trap(extra_depth=0) {
  // M3 hex nut trap: 6.4mm across-flats, 2.4mm thick
  cylinder(r=3.2, h=2.4 + extra_depth, $fn=6);  // $fn=6 makes a hexagon
}
", HorizontalRule, Header 4 ("step-4--for-loops-and-conditionals", ["unnumbered", "unlisted"], []) [Str "Step 4 — ", Code ("", [], []) "for", Str " Loops and Conditionals"], Header 5 ("repeating-geometry-with-for", ["unnumbered", "unlisted"], []) [Str "Repeating Geometry with ", Code ("", [], []) "for"], Para [Str "OpenSCAD's ", Code ("", [], []) "for", Str " loop iterates over a list or range and creates geometry for each iteration. Each iteration is ", Strong [Str "independent"], Str " — you can't pass values between iterations. But you can create geometry in each one."], Para [Str "Three forms:"], Para [Code ("", [], []) "for (variable = list)", Str " — iterates over every element in a list."], Para [Code ("", [], []) "for (variable = [start : end])", Str " — iterates over a range with a step of 1. ", Code ("", [], []) "[0:5]", Str " gives 0, 1, 2, 3, 4, 5."], Para [Code ("", [], []) "for (variable = [start : step : end])", Str " — iterates over a range with a specified step. ", Code ("", [], []) "[0:45:315]", Str " gives 0, 45, 90, 135, 180, 225, 270, 315."], CodeBlock ("", ["openscad"], []) "// Place pegs at four specific positions
peg_positions = [[0,0], [20,0], [40,0], [20,20]];

for (pos = peg_positions) {
  translate([pos[0], pos[1], 0]) cylinder(r=3, h=10, $fn=32);
}

// Place cylinders every 45° around a circle (8 cylinders total)
for (angle = [0 : 45 : 315]) {
  rotate([0, 0, angle])
    translate([20, 0, 0])
      cylinder(r=2, h=5, $fn=16);
}

// Conditional: if show_lid is true, draw a lid
show_lid = true;
if (show_lid) {
  translate([0, 0, 30]) cube([50, 30, 3]);
}
", Para [Strong [Str "Evenly spacing around a circle:"], Str " If you want N objects evenly spaced, the angular step is ", Code ("", [], []) "360 / N", Str ". For 12 objects, that's 30° each. Use ", Code ("", [], []) "[0 : 360/N : 360 - 360/N]", Str " to avoid duplicating the first position at 360°."], Header 5 ("using-for-with-multiple-variables", ["unnumbered", "unlisted"], []) [Str "Using ", Code ("", [], []) "for", Str " with Multiple Variables"], Para [Str "You can use multiple ", Code ("", [], []) "for", Str " clauses in a single statement to create grids:"], CodeBlock ("", ["openscad"], []) "// 4×4 grid of cylinders — nested for in a single statement
for (x = [0:3], y = [0:3]) {
  translate([x * 20, y * 20, 0]) cylinder(r=3, h=5, $fn=16);
}
", Para [Str "This is equivalent to two nested ", Code ("", [], []) "for", Str " loops but more compact."], HorizontalRule, Header 4 ("step-5--recursive-functions", ["unnumbered", "unlisted"], []) [Str "Step 5 — Recursive Functions"], Header 5 ("why-openscad-needs-recursion", ["unnumbered", "unlisted"], []) [Str "Why OpenSCAD Needs Recursion"], Para [Str "Most programming languages let you write a loop that accumulates a value: ", Code ("", [], []) "total = 0; for item in list: total += item", Str ". OpenSCAD doesn't allow this — variables are fixed after parse time. So when you need to compute something iteratively, you use ", Strong [Str "recursive functions"], Str "."], Para [Str "A recursive function is one that calls itself with a smaller version of the problem. Every recursive function has two parts:"], Para [Strong [Str "The base case"], Str " — the input is simple enough to handle directly, so return an answer without recursing."], Para [Strong [Str "The recursive case"], Str " — reduce the problem slightly and call yourself with the smaller version, then combine the result."], Header 5 ("functions-vs-modules--a-critical-distinction", ["unnumbered", "unlisted"], []) [Str "Functions vs. Modules — A Critical Distinction"], Para [Str "Before we look at examples, there is an important rule in OpenSCAD that trips up almost every programmer coming from other languages:"], Para [Strong [Str "Functions return values (numbers, strings, lists). They cannot create geometry."]], Para [Strong [Str "Modules create geometry. They cannot return values."]], Para [Str "This is a hard boundary. A function with a ", Code ("", [], []) "cylinder()", Str " call inside it won't work — you need a module for that. A module that tries to return a value won't work — you need a function for that."], CodeBlock ("", ["openscad"], []) "// FUNCTION — computes and returns a value
// This is a function because it's defined with \"function\" and uses \"=\"
function factorial(n) = (n <= 1) ? 1 : n * factorial(n - 1);

echo(factorial(5));   // prints 120
echo(factorial(0));   // prints 1

// Another function: Fibonacci sequence
function fib(n) = (n <= 1) ? n : fib(n-1) + fib(n-2);

// Use the function to space pegs with Fibonacci spacing
// fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8, fib(7)=13, fib(8)=21, fib(9)=34
for (i = [2:9]) {
  translate([fib(i) * 4, 0, 0])
    cylinder(r=1.5, h=5, $fn=16);
}

// A useful function: generate N evenly-spaced values between start and stop
function linspace(start, stop, n) =
  (n <= 1)
    ? [start]
    : concat([start], linspace(start + (stop - start) / (n - 1), stop, n - 1));

positions = linspace(0, 50, 6);   // evaluates to [0, 10, 20, 30, 40, 50]
echo(\"Positions:\", positions);

for (p = positions) {
  translate([p, 0, 0]) sphere(r=2, $fn=16);
}
", Header 5 ("reading-a-recursive-function", ["unnumbered", "unlisted"], []) [Str "Reading a Recursive Function"], Para [Str "The ", Code ("", [], []) "factorial", Str " function works like this:"], BulletList [[Plain [Code ("", [], []) "factorial(5)", Str " → is ", Code ("", [], []) "n <= 1", Str "? No. → return ", Code ("", [], []) "5 * factorial(4)"]], [Plain [Code ("", [], []) "factorial(4)", Str " → is ", Code ("", [], []) "n <= 1", Str "? No. → return ", Code ("", [], []) "4 * factorial(3)"]], [Plain [Str "...and so on until..."]], [Plain [Code ("", [], []) "factorial(1)", Str " → is ", Code ("", [], []) "n <= 1", Str "? Yes. → return ", Code ("", [], []) "1"]]], Para [Str "Then the chain unwinds: ", Code ("", [], []) "1 * 2 * 3 * 4 * 5 = 120", Str "."], Para [Str "The ternary expression ", Code ("", [], []) "(condition) ? value_if_true : value_if_false", Str " is the standard way to write the base-case branch in OpenSCAD functions."], HorizontalRule, Header 4 ("step-6--list-comprehensions", ["unnumbered", "unlisted"], []) [Str "Step 6 — List Comprehensions"], Header 5 ("what-a-list-comprehension-is", ["unnumbered", "unlisted"], []) [Str "What a List Comprehension Is"], Para [Str "A ", Strong [Str "list comprehension"], Str " is a compact way to generate a list by applying an expression to every element of a range or existing list, optionally filtering elements. Instead of writing a loop that builds a list step by step, you describe the entire list in one expression."], Para [Str "The syntax:"], CodeBlock ("", [""], []) "[for (variable = range_or_list) expression]
[for (variable = range_or_list) if (condition) expression]
", Para [Str "List comprehensions are OpenSCAD's answer to the fact that you can't use ", Code ("", [], []) "for", Str " loops to accumulate values. If you need a list of computed values, a comprehension gives you the entire list at once."], CodeBlock ("", ["openscad"], []) "// Generate heights: [5, 10, 15, 20, 25]
heights = [for (i = [1:5]) i * 5];
echo(heights);   // [5, 10, 15, 20, 25]

// Generate 8 evenly-spaced positions along the X axis
positions = [for (i = [0:7]) [i * 12, 0, 0]];
for (pos = positions) {
  translate(pos)
    cylinder(h = 5 + pos[0] * 0.3, r=3, $fn=16);  // height increases with X position
}

// Filter: generate only even numbers from 0 to 18
evens = [for (i = [0:9]) if (i % 2 == 0) i * 2];
echo(evens);   // [0, 4, 8, 12, 16]

// 2D grid of points — nested comprehension generates a flat list of [x,y,0] vectors
grid = [for (x = [0:3]) for (y = [0:3]) [x * 20, y * 20, 0]];
for (pt = grid) {
  translate(pt) cylinder(r=2, h=8, $fn=16);
}
", Para [Str "List comprehensions are the preferred way in OpenSCAD to generate lists of positions, sizes, or other computed values that drive the placement of geometry. Master them and you'll be able to generate complex repetitive patterns with very compact code."], HorizontalRule, Header 4 ("step-7--vector-math-and-math-functions", ["unnumbered", "unlisted"], []) [Str "Step 7 — Vector Math and Math Functions"], Header 5 ("working-with-vectors", ["unnumbered", "unlisted"], []) [Str "Working with Vectors"], Para [Str "Positions and dimensions in 3D space are naturally expressed as vectors — lists of three numbers representing X, Y, and Z. OpenSCAD supports arithmetic directly on vectors, which makes geometric calculations much more readable."], CodeBlock ("", ["openscad"], []) "v1 = [10, 20, 5];
v2 = [3, 4, 0];

sum    = v1 + v2;    // [13, 24, 5]  — add matching components
diff   = v1 - v2;    // [7,  16, 5]  — subtract matching components
scaled = v1 * 2;     // [20, 40, 10] — multiply each component by a scalar
dot    = v1 * v2;    // 110          — dot product: v1·v2 = 10*3 + 20*4 + 5*0
length = norm(v1);   // ≈ 22.9       — Euclidean length (√(10² + 20² + 5²))
", Header 5 ("important-math-functions", ["unnumbered", "unlisted"], []) [Str "Important Math Functions"], CodeBlock ("", ["openscad"], []) "abs(-5)         // 5    — absolute value
ceil(3.2)       // 4    — round up to nearest integer
floor(3.8)      // 3    — round down to nearest integer
round(3.5)      // 4    — round to nearest integer
max(3, 7, 2)    // 7    — largest of all arguments
min(3, 7, 2)    // 2    — smallest of all arguments
pow(2, 8)       // 256  — 2 raised to the power 8
sqrt(144)       // 12   — square root

// Trigonometry — CRITICAL: OpenSCAD uses DEGREES, not radians
sin(90)         // 1    — sine of 90 degrees
cos(0)          // 1    — cosine of 0 degrees
tan(45)         // 1    — tangent of 45 degrees
atan2(1, 1)     // 45   — arctangent of y/x, safe for all quadrants
", Para [Str "The ", Code ("", [], []) "atan2(y, x)", Str " function deserves special attention. When you need to convert a (x, y) position to an angle, the naive approach ", Code ("", [], []) "atan(y/x)", Str " fails when ", Code ("", [], []) "x", Str " is zero or negative (wrong quadrant). ", Code ("", [], []) "atan2(y, x)", Str " handles all cases correctly by taking both components separately."], HorizontalRule, Header 4 ("step-8--controlling-curve-quality-with-fn-fa-fs", ["unnumbered", "unlisted"], []) [Str "Step 8 — Controlling Curve Quality with ", Code ("", [], []) "$fn", Str ", ", Code ("", [], []) "$fa", Str ", ", Code ("", [], []) "$fs"], Header 5 ("why-you-need-to-think-about-this", ["unnumbered", "unlisted"], []) [Str "Why You Need to Think About This"], Para [Str "Spheres, cylinders, and circles in OpenSCAD are approximations — they're actually polygons with many flat faces. The more faces, the smoother the curve looks, but the longer the render takes and the larger the file."], Para [Strong [Code ("", [], []) "$fn"], Str " (facets number) — sets the exact number of faces. ", Code ("", [], []) "$fn=8", Str " gives a rough octagon. ", Code ("", [], []) "$fn=64", Str " gives a very smooth circle. Setting it on a single shape overrides the global value for that shape only."], Para [Strong [Code ("", [], []) "$fa"], Str " (minimum angle per face) — the smaller this is, the more faces large curves get. Default: 12°."], Para [Strong [Code ("", [], []) "$fs"], Str " (minimum face size in mm) — very small features automatically use more faces. Default: 2 mm."], Para [Str "When all three are specified, OpenSCAD uses whichever produces the ", Emph [Str "most"], Str " faces."], CodeBlock ("", ["openscad"], []) "// During development: low $fn for fast rendering
sphere(r=10, $fn=8);     // rough but fast

// For final export: high $fn for smooth curves
translate([30, 0, 0])
  sphere(r=10, $fn=64);  // smooth for printing

// Set globally at the top of a file:
$fa = 5;    // max 5 degrees per face
$fs = 0.5;  // minimum 0.5mm face size (more faces on small features)
", Para [Strong [Str "Recommended practice:"], Str " set ", Code ("", [], []) "$fn=16", Str " or ", Code ("", [], []) "$fn=24", Str " during development for fast iteration. Use ", Code ("", [], []) "$fn=64", Str " or higher for spheres and visible curves in the final exported file. Use ", Code ("", [], []) "$fn=32", Str " for functional cylindrical features like bolt holes — it's smooth enough for function without being slow to render."], HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 3.1:"], Str " Write a module ", Code ("", [], []) "safe_box(w, d, h, wall=2)", Str " that validates all parameters with ", Code ("", [], []) "assert()", Str " and creates a hollow box. Add a constraint that ", Code ("", [], []) "wall", Str " must be less than half of the smallest dimension."], Para [Strong [Str "Exercise 3.2:"], Str " Create a library file ", Code ("", [], []) "lib/fasteners.scad", Str " with modules for M2, M3, and M4 bolt holes. Use ", Code ("", [], []) "use", Str " to load it in a main file and place holes at the four corners of a 60 × 40 mm plate."], Para [Strong [Str "Exercise 3.3:"], Str " Write a recursive function ", Code ("", [], []) "sum_list(lst, i=0)", Str " that returns the sum of all elements in a list. Use it to compute the total volume of a set of cylinders."], Para [Strong [Str "Exercise 3.4 (Advanced):"], Str " Use a list comprehension to generate a 5×5 grid of cylinders where each cylinder's height equals ", Code ("", [], []) "row_index + col_index + 1", Str ". Use ", Code ("", [], []) "echo()", Str " to verify the maximum and minimum height values."], HorizontalRule, Header 4 ("quiz--lesson-3-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What is the DRY principle and why is it important in parametric OpenSCAD design?"]], [Plain [Str "What is the difference between a module and a function in OpenSCAD?"]], [Plain [Str "What does ", Code ("", [], []) "include <library.scad>", Str " do differently from ", Code ("", [], []) "use <library.scad>", Str "? When would you use each?"]], [Plain [Str "If you write ", Code ("", [], []) "x = 5;", Str " on line 3 and ", Code ("", [], []) "x = 10;", Str " on line 20 in the same file, what is the value of ", Code ("", [], []) "x", Str " everywhere in that file? Why?"]], [Plain [Str "What does ", Code ("", [], []) "is_number()", Str " return, and give one example of when to use it in a module."]], [Plain [Str "What does the list comprehension ", Code ("", [], []) "[for (i=[0:5:20]) i*2]", Str " evaluate to?"]], [Plain [Str "What does the ", Code ("", [], []) "echo()", Str " function do in OpenSCAD, and where does its output appear?"]], [Plain [Str "True or False: a function in OpenSCAD can contain a ", Code ("", [], []) "cylinder()", Str " call and create geometry."]], [Plain [Str "How do you specify a default parameter value in an OpenSCAD module? Write an example."]], [Plain [Str "What is the ternary operator in OpenSCAD? Write an example that picks a box size based on a ", Code ("", [], []) "\"small\"", Str " or ", Code ("", [], []) "\"large\"", Str " variable."]], [Plain [Str "Write an OpenSCAD ", Code ("", [], []) "for", Str " loop that places 8 cylinders evenly spaced around a circle of radius 25."]], [Plain [Str "What is the difference between ", Code ("", [], []) "[0:10]", Str " and ", Code ("", [], []) "[0:2:10]", Str " as OpenSCAD range expressions?"]], [Plain [Str "Explain why you might use ", Code ("", [], []) "assert()", Str " in a module rather than relying on the caller to pass correct values."]], [Plain [Str "Describe how a recursive function works. What are the two required parts of any recursive function?"]], [Plain [Str "A library file called ", Code ("", [], []) "shapes.scad", Str " contains a ", Code ("", [], []) "module rounded_box(...)", Str " and also a top-level ", Code ("", [], []) "cube([5,5,5]);", Str ". What happens when you load it with ", Code ("", [], []) "use", Str "? What happens when you load it with ", Code ("", [], []) "include", Str "?"]]], HorizontalRule, Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Create a ", Code ("", [], []) "bolts.scad", Str " library with M3, M4, and M5 clearance holes and nut traps. Use it in a test plate with one of each type."]], [Plain [Str "Build a parametric pegboard using a ", Code ("", [], []) "for", Str " loop. Parameters: ", Code ("", [], []) "cols", Str ", ", Code ("", [], []) "rows", Str ", ", Code ("", [], []) "spacing", Str ", ", Code ("", [], []) "peg_r", Str ", ", Code ("", [], []) "peg_h", Str ". Every parameter should have an ", Code ("", [], []) "assert()", Str " validation."]], [Plain [Str "Implement a recursive function that generates a Fibonacci sequence up to ", Code ("", [], []) "n", Str " terms and use it to space objects with Fibonacci distances."]], [Plain [Str "Build a module that validates all its inputs using ", Code ("", [], []) "assert()", Str " and logs informational output with ", Code ("", [], []) "echo()", Str ". Document when ", Code ("", [], []) "assert()", Str " halts rendering vs. what ", Code ("", [], []) "echo()", Str " does."]], [Plain [Str "Create two library files — one for mechanical fasteners and one for decorative shapes — and use both in one combined project."]], [Plain [Str "Design a parametric gear profile module with ", Code ("", [], []) "teeth", Str ", ", Code ("", [], []) "module_size", Str ", and ", Code ("", [], []) "thickness", Str " parameters. Use ", Code ("", [], []) "assert()", Str " to validate that the number of teeth is at least 8."]], [Plain [Str "Build a \"shelf peg\" system: a board with N parametrically positioned holes and matching pegs sized to press-fit into them."]], [Plain [Str "Use a list comprehension to generate a spiral path of evenly-spaced points and place a small sphere at each point on the spiral."]], [Plain [Str "Extend a fastener library with threaded insert pockets for M3, M4, and M5 heat-set inserts, with the insert dimensions as parameters."]], [Plain [Str "Write a module that draws a text label with a surrounding rectangular border frame. Parameters: ", Code ("", [], []) "text_str", Str ", ", Code ("", [], []) "font_size", Str ", ", Code ("", [], []) "padding", Str ", ", Code ("", [], []) "border_thickness", Str "."]], [Plain [Str "Build a parametric snap-fit lid for a rectangular box using ", Code ("", [], []) "for", Str " loops to generate evenly-spaced snap clips around the perimeter."]], [Plain [Str "Write a module that takes a list of 3D coordinate vectors as input and draws a connecting chain of cylinders between consecutive points."]], [Plain [Str "Create a parametric honeycomb panel module. Parameters: ", Code ("", [], []) "rows", Str ", ", Code ("", [], []) "cols", Str ", ", Code ("", [], []) "cell_r", Str ", ", Code ("", [], []) "wall_t", Str ", ", Code ("", [], []) "depth", Str ". Each cell should be a hexagonal through-hole."]], [Plain [Str "Research the BOSL2 library (https://github.com/BelfrySCAD/BOSL2). Find two modules that solve problems you've encountered in this course, and write a documented example using each."]], [Plain [Str "Design a comprehensive test suite: build 10 small parametric shapes each specifically testing a different OpenSCAD feature from this lesson. Export them all from one main file that uses a ", Code ("", [], []) "for", Str " loop."]]], HorizontalRule, Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/epub/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — Chapters on modules, functions, and libraries"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked examples for parametric architecture"]], [Plain [Link ("", [], []) [Str "BOSL2 GitHub Repository"] ("https://github.com/BelfrySCAD/BOSL2", ""), Str " — Comprehensive parametric library"]], [Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", ""), Str " — Build workflow reference"]]]]