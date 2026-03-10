# Lesson 3 — Parametric Architecture and Modular Libraries

**Estimated Time:** 90–120 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## Before You Start

You can now create shapes and combine them using CSG. That's the vocabulary. Now it's time to learn the _grammar_ — how to organize and generalize your code so it's maintainable, reusable, and professional.

The difference between a beginner OpenSCAD file and a professional one isn't usually the shapes — it's the structure. A beginner file has magic numbers scattered throughout, the same geometry copy-pasted in three places, and no indication of what any variable is for. A professional file has clearly named parameters at the top, organized modules, validation that catches errors before they become bad prints, and code you could hand to someone else and they'd immediately understand.

This lesson introduces the complete system for professional OpenSCAD structure: modules, functions, libraries, and the DRY principle. It also covers one of the most confusing aspects of OpenSCAD for programmers coming from other languages: how variables work here is completely different from Python, JavaScript, or Java — and understanding that difference upfront will save you hours of debugging.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Understand and work with OpenSCAD's unique "last-wins" variable scoping rules
- Write parametric modules with validated inputs using `assert()`
- Organize reusable geometry into library files using `use` and `include`
- Write recursive functions for mathematical and spatial computations
- Apply list comprehensions and vector operations for advanced parametric design
- Apply the DRY (Don't Repeat Yourself) principle through modules and functions
- Use `for` loops, conditionals, and list comprehensions to generate repetitive geometry
- Write type-safe modules using `is_number()`, `is_list()`, and `is_string()`

---

## Concept 1: How Variables Work in OpenSCAD (It's Different)

### The Most Important Thing to Understand in This Lesson

If you've ever programmed in Python, JavaScript, Java, or almost any other language, you have a mental model of variables that works a certain way: you assign a value, the program runs, and that variable holds that value until you change it. Variables are like buckets — you put a value in, you can read what's in there, and you can put a new value in later.

**OpenSCAD does not work this way.** The difference is fundamental and will cause bugs if you misunderstand it. Let's dig in.

### How OpenSCAD Actually Works

OpenSCAD processes your file in two distinct passes:

**Pass 1 — Parse:** OpenSCAD reads the entire file from top to bottom, collects every variable assignment and module/function definition, and resolves what every variable equals. No geometry is created during this pass.

**Pass 2 — Render:** OpenSCAD creates geometry using the values that were determined in Pass 1.

This two-pass system leads to three rules that govern all OpenSCAD code:

**Rule 1: There is no assignment during execution.** You cannot update a variable while the geometry is being computed. Variables are set during parse time and then read during render time. "Updating" a variable mid-computation isn't a concept in OpenSCAD.

**Rule 2: The last assignment in a scope wins — everywhere in that scope.** This is the most confusing rule. If you write `x = 5;` on line 3 and then `x = 10;` on line 20, the value of `x` is `10` _everywhere_ in that scope — including on line 3, even though you hadn't written the second assignment yet. It's as if OpenSCAD reads the entire file first, decides what everything equals, and then uses those final values. Writing `x = 5; echo(x); x = 10;` will print `10`, not `5`.

**Rule 3: Variables inside modules are local.** A variable declared inside a module exists only within that module. The global variable with the same name is unchanged.

```openscad
// COMMON MISTAKE — expecting x to change during execution
x = 5;
echo("x =", x);   // This prints 10, NOT 5 — because the last assignment wins
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
echo("Global wall_t is still:", wall_t);  // Still 3 — unchanged by the module

// CHOOSING BETWEEN VALUES conditionally — use a ternary expression
mode = "large";
box_size = (mode == "large") ? 40 : 20;   // If mode is "large", 40; otherwise 20
cube([box_size, box_size, 5]);
```

### What This Means in Practice

Because you can't update a variable during execution, you can't accumulate a total like `total = total + item`. Instead, you describe _relationships_ between values mathematically. If the width of your inner wall depends on the outer wall and the wall thickness, you write that as a formula: `inner_width = outer_width - 2 * wall_t;`. The system computes the value once, and that value is used everywhere.

This is actually quite elegant once you adjust to it. You're writing equations, not instructions. Each variable is defined once and means exactly one thing.

For cases where you genuinely need to choose between values or compute something iteratively, OpenSCAD provides **ternary expressions** (condition ? value_if_true : value_if_false), **recursive functions**, and **list comprehensions** — all covered in this lesson.

---

## Step 1 — Modules: Named, Reusable Geometry

### What a Module Is

A **module** is a named, reusable piece of geometry. When you find yourself writing the same shape code in multiple places, that's the signal to create a module. Modules accept parameters — just like functions in other languages — so you can write one module that creates many different variations of the same shape.

The syntax is:

```openscad
module name(param1, param2=default_value) {
  // geometry code here
  // uses param1 and param2
}
```

Parameters with default values (`param2=default_value`) are optional — callers can omit them and the default will be used. Parameters without defaults are required.

You call a module just like a statement:

```openscad
name(value1, value2);
```

### The DRY Principle

**DRY** stands for **Don't Repeat Yourself**. It's a fundamental principle of good programming, and it applies directly to OpenSCAD design.

If you need four mounting holes in a plate, you could write the cylinder code four times — once for each hole. But now if you need to change the hole size, you have to change it in four places. If you miss one, your design is inconsistent. If you need to add a fifth hole later, you have to remember the pattern and paste it again.

The DRY approach: write a module `mounting_hole(r, depth)` once, then call it four times. Now the hole geometry is defined in exactly one place. Change it once, every hole updates. Add more holes as easily as one line each.

```openscad
// WRONG — copy-pasted, hard to maintain
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
```

The second version is easier to read, easier to change, and scales effortlessly. If you need a larger hole, change `r=2` to `r=3` in one place, and all four holes update.

---

## Step 2 — `assert()` for Parameter Validation

### Why Your Modules Should Validate Their Inputs

In a parametric design, other people (and future-you) will change parameter values. What happens if someone sets `wall_thickness = 0`? Or `cylinder_radius = -5`? Depending on the code, it might silently produce garbage geometry, or it might produce a cryptic error that doesn't explain what went wrong.

`assert()` is OpenSCAD's built-in validation statement. It takes a condition and an optional message. If the condition is false, OpenSCAD _stops rendering immediately_ and displays your message in the console. This is vastly better than allowing invalid values to silently produce a broken model.

Think of `assert()` as making your design constraints machine-enforceable. Instead of just knowing that `wall_t` must be at least 1.2 mm for a 0.4 mm nozzle, you write it as an assertion and the tool enforces it automatically.

### How `assert()` Works

```openscad
assert(condition, "message if condition is false");
```

If `condition` evaluates to true, nothing happens — the code continues normally. If `condition` is false, the render stops and the message is printed. The message should be descriptive enough that anyone reading it immediately understands what went wrong.

```openscad
module safe_cylinder(r, h, fn=32) {
  // Validate all inputs before creating any geometry
  assert(is_num(r) && r > 0,
    str("safe_cylinder: radius must be a positive number, got: ", r));
  assert(is_num(h) && h > 0,
    str("safe_cylinder: height must be a positive number, got: ", h));
  assert(fn >= 3,
    str("safe_cylinder: fn must be at least 3, got: ", fn));
  assert(r < 500,
    str("safe_cylinder: radius ", r, "mm seems wrong — did you enter cm instead of mm?"));

  cylinder(r=r, h=h, $fn=fn);
}

safe_cylinder(5, 20);          // fine
// safe_cylinder(-3, 20);      // STOPS: "radius must be a positive number, got: -3"
// safe_cylinder(5, 20, fn=1); // STOPS: "fn must be at least 3, got: 1"
```

The `str()` function assembles a string from multiple values — very useful for error messages that include the bad value so the user knows exactly what to fix.

**Best practice:** add `assert()` statements to every module you write, at the very top of the module body, before any geometry. This turns bad-input problems into clear messages instead of mysterious rendering failures.

---

## Step 3 — Library Files: `use` vs. `include`

### Organizing Code Across Multiple Files

Once you have a collection of useful modules — mounting holes, standoffs, snap clips, text labels — you'll want to reuse them across multiple projects without copy-pasting them every time. The solution is a **library file**: a separate `.scad` file containing only module and function definitions, which you can import into any project.

There are two ways to load a library:

**`use <filename.scad>`** — imports only the module and function **definitions** from the file. Any top-level geometry statements in the file (bare `cube()`, `cylinder()`, etc.) are _not_ executed. This is almost always what you want: you want the tools, not any leftover test geometry the library file might contain.

**`include <filename.scad>`** — executes the **entire file**, including any top-level geometry statements. If the library file has a `cube([10,10,10]);` at the top level, that cube will appear in your model. Use this sparingly and intentionally.

The mental model: `use` is like importing a Python module to get its functions. `include` is like copy-pasting the entire file into your code.

```openscad
// === lib/hardware.scad ===
// A reusable hardware library. Load with: use <../lib/hardware.scad>

module m3_bolt_hole(depth=10, countersink=false) {
  // M3 clearance hole: 3.4mm diameter (ISO standard M3 clearance)
  assert(depth > 0, "m3_bolt_hole: depth must be positive");
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
  assert(height > 2, "m3_standoff: height must be > 2mm");
  difference() {
    cylinder(d=outer_d, h=height, $fn=16);
    m3_bolt_hole(depth=height);  // Modules can call other modules from the library
  }
}
```

```openscad
// === src/main.scad ===
use <../lib/hardware.scad>   // loads definitions; no top-level geometry executes

// Place M3 standoffs at all four corners of a mounting plate
cube([60, 40, 5]);
for (pos = [[5,5], [55,5], [5,35], [55,35]]) {
  translate([pos[0], pos[1], 0])
    m3_standoff(height=8);
}
```

### Structuring a Good Library

A well-organized library groups related modules, documents each one, and validates inputs. Here's a template:

```openscad
// ============================================================
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
```

---

## Step 4 — `for` Loops and Conditionals

### Repeating Geometry with `for`

OpenSCAD's `for` loop iterates over a list or range and creates geometry for each iteration. Each iteration is **independent** — you can't pass values between iterations. But you can create geometry in each one.

Three forms:

`for (variable = list)` — iterates over every element in a list.

`for (variable = [start : end])` — iterates over a range with a step of 1. `[0:5]` gives 0, 1, 2, 3, 4, 5.

`for (variable = [start : step : end])` — iterates over a range with a specified step. `[0:45:315]` gives 0, 45, 90, 135, 180, 225, 270, 315.

```openscad
// Place pegs at four specific positions
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
```

**Evenly spacing around a circle:** If you want N objects evenly spaced, the angular step is `360 / N`. For 12 objects, that's 30° each. Use `[0 : 360/N : 360 - 360/N]` to avoid duplicating the first position at 360°.

### Using `for` with Multiple Variables

You can use multiple `for` clauses in a single statement to create grids:

```openscad
// 4×4 grid of cylinders — nested for in a single statement
for (x = [0:3], y = [0:3]) {
  translate([x * 20, y * 20, 0]) cylinder(r=3, h=5, $fn=16);
}
```

This is equivalent to two nested `for` loops but more compact.

---

## Step 5 — Recursive Functions

### Why OpenSCAD Needs Recursion

Most programming languages let you write a loop that accumulates a value: `total = 0; for item in list: total += item`. OpenSCAD doesn't allow this — variables are fixed after parse time. So when you need to compute something iteratively, you use **recursive functions**.

A recursive function is one that calls itself with a smaller version of the problem. Every recursive function has two parts:

**The base case** — the input is simple enough to handle directly, so return an answer without recursing.

**The recursive case** — reduce the problem slightly and call yourself with the smaller version, then combine the result.

### Functions vs. Modules — A Critical Distinction

Before we look at examples, there is an important rule in OpenSCAD that trips up almost every programmer coming from other languages:

**Functions return values (numbers, strings, lists). They cannot create geometry.**

**Modules create geometry. They cannot return values.**

This is a hard boundary. A function with a `cylinder()` call inside it won't work — you need a module for that. A module that tries to return a value won't work — you need a function for that.

```openscad
// FUNCTION — computes and returns a value
// This is a function because it's defined with "function" and uses "="
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
echo("Positions:", positions);

for (p = positions) {
  translate([p, 0, 0]) sphere(r=2, $fn=16);
}
```

### Reading a Recursive Function

The `factorial` function works like this:

- `factorial(5)` → is `n <= 1`? No. → return `5 * factorial(4)`
- `factorial(4)` → is `n <= 1`? No. → return `4 * factorial(3)`
- ...and so on until...
- `factorial(1)` → is `n <= 1`? Yes. → return `1`

Then the chain unwinds: `1 * 2 * 3 * 4 * 5 = 120`.

The ternary expression `(condition) ? value_if_true : value_if_false` is the standard way to write the base-case branch in OpenSCAD functions.

---

## Step 6 — List Comprehensions

### What a List Comprehension Is

A **list comprehension** is a compact way to generate a list by applying an expression to every element of a range or existing list, optionally filtering elements. Instead of writing a loop that builds a list step by step, you describe the entire list in one expression.

The syntax:

```
[for (variable = range_or_list) expression]
[for (variable = range_or_list) if (condition) expression]
```

List comprehensions are OpenSCAD's answer to the fact that you can't use `for` loops to accumulate values. If you need a list of computed values, a comprehension gives you the entire list at once.

```openscad
// Generate heights: [5, 10, 15, 20, 25]
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
```

List comprehensions are the preferred way in OpenSCAD to generate lists of positions, sizes, or other computed values that drive the placement of geometry. Master them and you'll be able to generate complex repetitive patterns with very compact code.

---

## Step 7 — Vector Math and Math Functions

### Working with Vectors

Positions and dimensions in 3D space are naturally expressed as vectors — lists of three numbers representing X, Y, and Z. OpenSCAD supports arithmetic directly on vectors, which makes geometric calculations much more readable.

```openscad
v1 = [10, 20, 5];
v2 = [3, 4, 0];

sum    = v1 + v2;    // [13, 24, 5]  — add matching components
diff   = v1 - v2;    // [7,  16, 5]  — subtract matching components
scaled = v1 * 2;     // [20, 40, 10] — multiply each component by a scalar
dot    = v1 * v2;    // 110          — dot product: v1·v2 = 10*3 + 20*4 + 5*0
length = norm(v1);   // ≈ 22.9       — Euclidean length (√(10² + 20² + 5²))
```

### Important Math Functions

```openscad
abs(-5)         // 5    — absolute value
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
```

The `atan2(y, x)` function deserves special attention. When you need to convert a (x, y) position to an angle, the naive approach `atan(y/x)` fails when `x` is zero or negative (wrong quadrant). `atan2(y, x)` handles all cases correctly by taking both components separately.

---

## Step 8 — Controlling Curve Quality with `$fn`, `$fa`, `$fs`

### Why You Need to Think About This

Spheres, cylinders, and circles in OpenSCAD are approximations — they're actually polygons with many flat faces. The more faces, the smoother the curve looks, but the longer the render takes and the larger the file.

**`$fn`** (facets number) — sets the exact number of faces. `$fn=8` gives a rough octagon. `$fn=64` gives a very smooth circle. Setting it on a single shape overrides the global value for that shape only.

**`$fa`** (minimum angle per face) — the smaller this is, the more faces large curves get. Default: 12°.

**`$fs`** (minimum face size in mm) — very small features automatically use more faces. Default: 2 mm.

When all three are specified, OpenSCAD uses whichever produces the _most_ faces.

```openscad
// During development: low $fn for fast rendering
sphere(r=10, $fn=8);     // rough but fast

// For final export: high $fn for smooth curves
translate([30, 0, 0])
  sphere(r=10, $fn=64);  // smooth for printing

// Set globally at the top of a file:
$fa = 5;    // max 5 degrees per face
$fs = 0.5;  // minimum 0.5mm face size (more faces on small features)
```

**Recommended practice:** set `$fn=16` or `$fn=24` during development for fast iteration. Use `$fn=64` or higher for spheres and visible curves in the final exported file. Use `$fn=32` for functional cylindrical features like bolt holes — it's smooth enough for function without being slow to render.

---

## Exercises

**Exercise 3.1:** Write a module `safe_box(w, d, h, wall=2)` that validates all parameters with `assert()` and creates a hollow box. Add a constraint that `wall` must be less than half of the smallest dimension.

**Exercise 3.2:** Create a library file `lib/fasteners.scad` with modules for M2, M3, and M4 bolt holes. Use `use` to load it in a main file and place holes at the four corners of a 60 × 40 mm plate.

**Exercise 3.3:** Write a recursive function `sum_list(lst, i=0)` that returns the sum of all elements in a list. Use it to compute the total volume of a set of cylinders.

**Exercise 3.4 (Advanced):** Use a list comprehension to generate a 5×5 grid of cylinders where each cylinder's height equals `row_index + col_index + 1`. Use `echo()` to verify the maximum and minimum height values.

---

## Quiz — Lesson 3 (15 questions)

1. What is the DRY principle and why is it important in parametric OpenSCAD design?
2. What is the difference between a module and a function in OpenSCAD?
3. What does `include <library.scad>` do differently from `use <library.scad>`? When would you use each?
4. If you write `x = 5;` on line 3 and `x = 10;` on line 20 in the same file, what is the value of `x` everywhere in that file? Why?
5. What does `is_number()` return, and give one example of when to use it in a module.
6. What does the list comprehension `[for (i=[0:5:20]) i*2]` evaluate to?
7. What does the `echo()` function do in OpenSCAD, and where does its output appear?
8. True or False: a function in OpenSCAD can contain a `cylinder()` call and create geometry.
9. How do you specify a default parameter value in an OpenSCAD module? Write an example.
10. What is the ternary operator in OpenSCAD? Write an example that picks a box size based on a `"small"` or `"large"` variable.
11. Write an OpenSCAD `for` loop that places 8 cylinders evenly spaced around a circle of radius 25.
12. What is the difference between `[0:10]` and `[0:2:10]` as OpenSCAD range expressions?
13. Explain why you might use `assert()` in a module rather than relying on the caller to pass correct values.
14. Describe how a recursive function works. What are the two required parts of any recursive function?
15. A library file called `shapes.scad` contains a `module rounded_box(...)` and also a top-level `cube([5,5,5]);`. What happens when you load it with `use`? What happens when you load it with `include`?

---

## Extension Problems (15)

1. Create a `bolts.scad` library with M3, M4, and M5 clearance holes and nut traps. Use it in a test plate with one of each type.
2. Build a parametric pegboard using a `for` loop. Parameters: `cols`, `rows`, `spacing`, `peg_r`, `peg_h`. Every parameter should have an `assert()` validation.
3. Implement a recursive function that generates a Fibonacci sequence up to `n` terms and use it to space objects with Fibonacci distances.
4. Build a module that validates all its inputs using `assert()` and logs informational output with `echo()`. Document when `assert()` halts rendering vs. what `echo()` does.
5. Create two library files — one for mechanical fasteners and one for decorative shapes — and use both in one combined project.
6. Design a parametric gear profile module with `teeth`, `module_size`, and `thickness` parameters. Use `assert()` to validate that the number of teeth is at least 8.
7. Build a "shelf peg" system: a board with N parametrically positioned holes and matching pegs sized to press-fit into them.
8. Use a list comprehension to generate a spiral path of evenly-spaced points and place a small sphere at each point on the spiral.
9. Extend a fastener library with threaded insert pockets for M3, M4, and M5 heat-set inserts, with the insert dimensions as parameters.
10. Write a module that draws a text label with a surrounding rectangular border frame. Parameters: `text_str`, `font_size`, `padding`, `border_thickness`.
11. Build a parametric snap-fit lid for a rectangular box using `for` loops to generate evenly-spaced snap clips around the perimeter.
12. Write a module that takes a list of 3D coordinate vectors as input and draws a connecting chain of cylinders between consecutive points.
13. Create a parametric honeycomb panel module. Parameters: `rows`, `cols`, `cell_r`, `wall_t`, `depth`. Each cell should be a hexagonal through-hole.
14. Research the BOSL2 library (https://github.com/BelfrySCAD/BOSL2). Find two modules that solve problems you've encountered in this course, and write a documented example using each.
15. Design a comprehensive test suite: build 10 small parametric shapes each specifically testing a different OpenSCAD feature from this lesson. Export them all from one main file that uses a `for` loop.

---

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Modules — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules

[^2]: OpenSCAD User Manual — For Loops and Conditionals — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop

[^3]: BOSL2 Library Documentation — https://github.com/BelfrySCAD/BOSL2/wiki

[^4]: OpenSCAD User Manual — Include and Use — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Chapters on modules, functions, and libraries
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked examples for parametric architecture
- [BOSL2 GitHub Repository](https://github.com/BelfrySCAD/BOSL2) — Comprehensive parametric library
- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Build workflow reference
