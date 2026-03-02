# Lesson 3 — Parametric Architecture and Modular Libraries
*[CORRECTED — March 2026 Curriculum Revision]*

---

## Learning Objectives

By the end of this lesson you will be able to:

- Understand OpenSCAD's unique variable scoping rules (the "last-wins" model)
- Write parametric modules with validated inputs using `assert()`
- Organize reusable geometry into library files using `use` and `include`
- Write recursive functions for mathematical and spatial computations
- Apply list comprehensions and vector operations for advanced parametric design

---

## Step 1 — How OpenSCAD Variables Work (It's Different!)

OpenSCAD variables do **not** work like variables in Python, JavaScript, or C. Understanding this prevents one of the most common beginner bugs.

**The three rules:**

1. **There is no assignment during execution.** Variables are bound at parse time (when the file is read), not when the geometry is drawn.
2. **The last assignment in a scope wins.** If you write `x = 5;` and then `x = 10;`, `x` is always `10` — the first line is silently overridden.
3. **Variables inside modules are local.** They do not affect global variables with the same name.

```openscad
// COMMON MISTAKE: thinking x changes value during execution
x = 5;
echo("x = ", x);  // Prints 10, NOT 5 — last assignment wins at parse time
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
echo("Global wall_t is still:", wall_t);  // still 3 — not changed

// PRACTICAL IMPLICATION: to conditionally vary a parameter, use a ternary
mode = "large";
box_size = (mode == "large") ? 40 : 20;  // ternary — correct pattern
cube([box_size, box_size, 5]);
```

---

## Step 2 — `assert()` for Parameter Validation

`assert()` is the correct tool for validating module parameters. It halts rendering immediately with a descriptive error message if a condition is false. This is far better than `echo()`, which only warns and allows bad geometry to continue rendering.

```openscad
// assert(condition, message)
// If condition is false: rendering stops; message is shown in the console

module safe_cylinder(r, h, fn=32) {
  // Validate every parameter before it can produce invalid geometry
  assert(is_num(r) && r > 0,
    str("safe_cylinder: r must be a positive number, got: ", r));
  assert(is_num(h) && h > 0,
    str("safe_cylinder: h must be a positive number, got: ", h));
  assert(fn >= 3,
    str("safe_cylinder: $fn must be >= 3, got: ", fn));
  assert(r < 500,
    str("safe_cylinder: r=", r, "mm seems wrong — did you use cm instead of mm?"));

  cylinder(r=r, h=h, $fn=fn);
}

safe_cylinder(5, 20);         // works fine
// safe_cylinder(-3, 20);     // STOPS with: "r must be a positive number, got: -3"
// safe_cylinder(0, 20);      // STOPS with: "r must be a positive number, got: 0"

// Compare with echo() — only warns, does NOT stop rendering:
module unsafe_cylinder(r, h) {
  if (r <= 0) echo("WARNING: r should be positive");  // continues anyway!
  cylinder(r=r, h=h, $fn=32);  // produces invalid geometry
}

// ADVANCED: Multi-condition assert with compound expressions
module slot(length, width, depth) {
  assert(length > width,
    str("slot: length (", length, ") must be greater than width (", width, ")"));
  assert(depth > 0 && depth <= 50,
    "slot: depth must be between 0 and 50mm");

  translate([-length/2, -width/2, -0.001])
    cube([length, width, depth + 0.001]);
}
```

---

## Step 3 — Modules and Library Files

Modules are reusable geometry factories. Put shared modules in a separate file and load them with `use` or `include`.

```openscad
// === lib/hardware.scad ===

// Standard M3 bolt hole (adds 0.2mm clearance for real M3 bolts)
module m3_bolt_hole(depth=10, countersink=false) {
  assert(depth > 0, "m3_bolt_hole: depth must be positive");
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
  assert(height > 2, "m3_standoff: height must be > 2mm");
  difference() {
    cylinder(d=outer_d, h=height, $fn=16);
    m3_bolt_hole(depth=height);
  }
}
```

```openscad
// === src/main.scad ===

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
```

---

## Step 4 — Recursive Functions

Recursive functions compute values by calling themselves with a smaller input. OpenSCAD supports recursion for **value computation** (not for geometry directly).

```openscad
// Factorial: n! = n × (n-1) × ... × 1
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
echo("Positions:", positions);

for (p = positions) {
  translate([p, 0, 0]) sphere(r=2, $fn=16);
}
```

---

## Step 5 — List Comprehensions and Vector Math

List comprehensions let you generate lists of values or geometry positions using compact functional syntax.

```openscad
// List comprehension: [expression for variable in range if condition]

// Generate a list of cylinder heights: [5, 10, 15, 20, 25]
heights = [for (i = [1:5]) i * 5];
echo("Heights:", heights);  // [5, 10, 15, 20, 25]

// Place cylinders at computed positions
positions = [for (i = [0:7]) [i * 12, 0, 0]];
for (pos = positions) {
  translate(pos)
    cylinder(h = 5 + pos[0] * 0.3, r=3, $fn=16);  // height grows with X position
}

// Filter with a condition: only even-indexed items
even_positions = [for (i = [0:9]) if (i % 2 == 0) i * 15];
echo("Even positions:", even_positions);  // [0, 15, 30, 45, 60]

// 2D grid of points
grid = [for (x = [0:3]) for (y = [0:3]) [x * 20, y * 20, 0]];
for (pt = grid) {
  translate(pt)
    cylinder(r=2, h=8, $fn=16);
}

// Geometric series — rapidly growing spacing (useful for logarithmic layouts)
geo_series = [for (i = [0:5]) pow(2, i) * 3];  // [3, 6, 12, 24, 48, 96]
echo("Geometric series:", geo_series);
```

---

## Step 6 — Working with Vectors and Math Functions

```openscad
// Vector arithmetic is built in
v1 = [10, 20, 5];
v2 = [3, 4, 0];

sum   = v1 + v2;         // [13, 24, 5]
diff  = v1 - v2;         // [7, 16, 5]
scaled = v1 * 2;         // [20, 40, 10]  (scalar multiplication)

echo("sum:", sum, "diff:", diff, "scaled:", scaled);

// Dot product and norm (vector length)
dot_product = v1 * v2;          // 10*3 + 20*4 + 5*0 = 110
length_v1   = norm(v1);         // sqrt(10²+20²+5²) ≈ 22.9
echo("dot:", dot_product, "norm:", length_v1);

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
echo("cross:", cross_v);
```

---

## Step 7 — `$fn`, `$fa`, `$fs` — Controlling Curve Resolution

```openscad
// $fn: fixed number of faces (overrides $fa and $fs)
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
```

---

## Exercises

**Exercise 3.1:** Write a module `safe_box(w, d, h, wall=2)` that validates all parameters with `assert()` and creates a hollow box. The wall thickness must be less than half of the smallest dimension.

**Exercise 3.2:** Create a library file `lib/fasteners.scad` with modules for M2, M3, and M4 bolt holes. Use `use` to load it in a main file and place bolt holes at the corners of a 60 × 40 mm plate.

**Exercise 3.3:** Write a recursive function `sum_list(lst, i=0)` that returns the sum of all elements in a list. Use it to compute the total material volume of a set of cylinders.

**Exercise 3.4 (Advanced):** Use a list comprehension to generate a 5 × 5 grid of cylinders where each cylinder's height equals `row + column + 1` (so heights go from 1 to 9). Use `echo()` to verify the maximum height.
# Lesson 3: Parametric Architecture and Modular Libraries

Estimated time: 90–120 minutes

## Learning Objectives
- Understand and apply the DRY (Don't Repeat Yourself) principle through modules and functions
- Use `include` vs `use` for library files
- Apply `for` loops, conditionals, and list comprehensions
- Write type-safe modules using `is_number()`, `is_list()`, and `is_string()`
- Build a reusable module library

## Materials
- 3dMake project from Lessons 1–2
- Terminal and editor

## Step-by-step Tasks


### 1. Define a Reusable Module

Modules create named geometry. They accept parameters and can be called anywhere in the file. See [^1].

```openscad
// Modules create geometry; calling them produces shapes
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
```

### 2. Write a Function (Computes a Value, No Geometry)

```openscad
// Functions return values, never geometry
function clearance_fit(nominal) = nominal + 0.2;
function tight_fit(nominal)    = nominal - 0.1;

hole_diameter = clearance_fit(8);   // = 8.2
peg_diameter  = tight_fit(8);       // = 7.9

cylinder(r=hole_diameter/2, h=10, $fn=64);
```

### 3. Use include and use for Libraries

```openscad
// include: executes the file (modules, functions, AND top-level geometry)
include <BOSL2/std.scad>

// use: imports modules and functions only — no top-level geometry executes
use <my_library.scad>
```

Key distinction: `include` will also render any top-level geometry in the library file; `use` imports only the module and function definitions.
For more on `include` and `use`, see [^4].


### 4. Apply For Loops and Conditionals

For loop and conditional syntax is described in [^2].

```openscad
// Array of peg positions
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
```


### 5. Use Type Testing and List Comprehensions

The BOSL2 library provides many advanced parametric modules and functions [^3].

```openscad
// Type testing prevents hard-to-debug errors
module validated_cylinder(r, h) {
  if (!is_number(r)) echo("WARNING: r must be a number");
  if (!is_number(h)) echo("WARNING: h must be a number");
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
```

### Checkpoint
- After step 1: calling `rounded_box(50, 30, 20)` builds a rounded box. Verify in preview.
- After step 3: `include` vs `use` behavior should be tested by placing a top-level `cube()` in a library file and using both import methods.
- After step 5: `echo()` output appears in the OpenSCAD console window.

## Building a Practical Library

A well-designed module library is the backbone of efficient parametric design. Here is a starter library structure:

```openscad
// ============================================================
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
```

Using the library:
```openscad
use <fasteners.scad>

difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_hole(depth=10.002);
  translate([30, 15, -0.001]) m3_hole(depth=10.002);
}
```

## Quiz — Lesson 3dMake.3 (15 questions)

1. What is the DRY principle and why is it important in parametric design?
2. What is the difference between a module and a function in OpenSCAD?
3. What does `include <library.scad>` do differently from `use <library.scad>`?
4. Write a `for` loop that places a sphere every 30° around a circle of radius 20.
5. What does `is_number()` return, and give one example of when to use it.
6. What does a list comprehension `[for (i=[0:5:20]) i*2]` evaluate to?
7. What does the `echo()` function do in OpenSCAD?
8. True or False: a function in OpenSCAD can create geometry.
9. How do you specify a default parameter value in an OpenSCAD module?
10. What does the `$preview` special variable allow you to do in OpenSCAD?
11. Write an OpenSCAD `for` loop that creates 8 evenly spaced holes around a circle using `for (i = [0:45:315])`.
12. What is the difference between `[0:10]` and `[0:2:10]` in an OpenSCAD range expression?
13. Explain why you might use type testing (`is_number()`, `is_list()`) in a module rather than relying on the caller to pass correct types.
14. Describe how recursive functions work in OpenSCAD and give a simple example.
15. What would happen if you accidentally used `include` instead of `use` for a library that contains a top-level `cube([10,10,10]);` statement?

## Extension Problems (15)

1. Create a `bolts.scad` library with at least M3, M4, and M5 clearance holes and nut traps; use it in a test plate.
2. Build a parametric pegboard using a `for` loop. Parameters: `cols`, `rows`, `spacing`, `peg_r`, `peg_h`.
3. Implement a recursive function that generates a Fibonacci sequence up to `n` terms and use it to space pegs.
4. Build a module that validates all its inputs using `assert()` and logs warnings with `echo()`; document when `assert()` halts rendering vs. `echo()`.
5. Create two library files—one for mechanical fasteners and one for artistic decorations—and include both in a combined project.
6. Design a parametric gear profile module. Parameters: `teeth`, `module_size`, `thickness`. (You don't need to compute true involute gear geometry — a simplified triangular-tooth approximation is fine.)
7. Build a "shelf peg" system: a board with N parametrically positioned holes and matching pegs that press-fit into them.
8. Use a list comprehension to generate a spiral path of points and place a small cylinder at each point.
9. Extend the `fasteners.scad` library with threaded insert pockets for M3, M4, and M5 heat-set inserts (look up brass insert dimensions).
10. Write a module that draws a parametric text label with a surrounding bordered frame; parameters: `text_str`, `font_size`, `padding`, `border_thickness`.
11. Build a parametric snap-fit lid for a rectangular box: the lid uses `for` loops to generate evenly-spaced snap clips, and all dimensions are parameters.
12. Write a module that takes a list of coordinate pairs as input and draws a connecting chain of cylinders between consecutive points.
13. Create a parametric honeycomb panel module using a `for` loop and `rotate()`; parameters: `rows`, `cols`, `cell_r`, `wall_t`, `depth`.
14. Research BOSL2's `regular_ngon()` and `bezier_path()` modules. Build a shape that uses both and document what each does.
15. Design a test suite: build 10 small parametric shapes, each testing a different OpenSCAD feature (extrusion, rotation, for loop, intersection, etc.), and export them all from one main file.

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Modules - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules)

[^2]: OpenSCAD User Manual — For Loops and Conditionals - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop)

[^3]: BOSL2 Library Documentation - [https://github.com/BelfrySCAD/BOSL2/wiki](https://github.com/BelfrySCAD/BOSL2/wiki)

[^4]: OpenSCAD User Manual — Include and Use - [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Chapters on modules, functions, and libraries
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked examples for parametric architecture
- [BOSL2 GitHub Repository](https://github.com/BelfrySCAD/BOSL2) — Comprehensive parametric library
- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Build workflow reference
