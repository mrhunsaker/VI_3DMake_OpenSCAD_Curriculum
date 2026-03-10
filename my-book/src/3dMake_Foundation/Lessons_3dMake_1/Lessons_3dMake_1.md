# Lesson 1 — Environmental Configuration and the Developer Workflow

**Estimated Time:** 60–90 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## A Message to You Before We Begin

Welcome to your first lesson. If you've never used a command line, never written code, or never sent a file to a 3D printer before, you are in exactly the right place. This lesson is designed so that someone who has done none of those things can follow every step.

If you _have_ done some of those things, you'll still find this lesson useful — because the way 3D printing tools fit together is different from most software you've used before, and understanding the full picture from the start will save you real trouble later.

By the time you finish this lesson, you will have your tools installed and working, you'll understand the basic logic of the coordinate system your designs live in, and you'll have run your first parametric 3D model through the complete build-and-verify workflow.

Take your time here. The concepts in this first lesson are the foundation everything else is built on.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Install and verify the 3dMake toolchain on Windows, macOS, and Linux
- Understand the OpenSCAD coordinate system and unit conventions
- Write and build your first parametric `.scad` file
- Read and interpret `3dm info` output without a visual display
- Use the core developer workflow: edit → build → verify

---

## Concept 1: What Is Parametric 3D Design?

### The Two Ways to Design for 3D Printing

There are two ways to design a 3D object for printing. The first way is to use a **visual editor** — a program where you click, drag, and push shapes around the screen until they look right. Programs like Tinkercad work this way. They're intuitive and fast for simple objects, but they have a limitation: if you want to change the size of something, you often have to go back and manually adjust every related dimension by hand.

The second way is to use **code**. You write instructions that describe your object mathematically. "Make a box that is 30 millimeters wide, 20 millimeters deep, and 10 millimeters tall." If you later decide that 30 mm is too narrow and 40 mm would be better, you change one number, and the model automatically updates everywhere that number is used. This is called **parametric design** — the word "parametric" means the design is controlled by _parameters_, which are the named values you can adjust.

Parametric design is how professional engineers create parts. An engineer designing a phone stand might create one file that works for phone models ranging from 60 to 90 mm wide just by changing a single variable. That single source file _is the design concept_, and specific values turn it into specific objects.

**OpenSCAD** is the tool you'll use for parametric design in this course. Instead of clicking and dragging, you write code that describes shapes and their relationships. The learning curve is steeper than a visual editor at the very beginning, but within a few lessons you'll be creating things that would be extremely difficult or impossible in a drag-and-drop tool.

### What 3dMake Does

OpenSCAD by itself is powerful, but its workflow has a lot of friction. To go from code to a printable file, you'd normally need to open OpenSCAD, manually trigger a render, export an STL file, open a separate slicer program, check for geometry errors, and save the output. That's a lot of steps just to see if your idea works.

**3dMake** is a tool that wraps around OpenSCAD and smooths out that friction. When you type `3dm build`, it runs the entire compile-and-export process for you automatically. When you type `3dm info`, it analyzes your model and tells you its dimensions, volume, and a description in plain language. The more time you spend designing rather than managing files, the faster you learn and the more you make.

Think of it this way: OpenSCAD is the engine, and 3dMake is the dashboard. You could use the engine directly, but the dashboard makes it dramatically easier to operate.

---

## Concept 2: The Command Line

### What It Is and Why We Use It

You're going to be working with the **command line** throughout this course. If you've mostly used computers by clicking icons and menus, the command line can feel strange at first — but it's really just a different way to talk to your computer.

Here is the basic idea: the command line is a text box where you type an instruction, press Enter, and the computer does something and prints a response. That's the whole interaction model. Type a command. Press Enter. Read the result. Repeat.

For example, if you type `3dm build` and press Enter, the computer finds the 3dMake program, tells it to build your project, and then prints either a success message with your model's dimensions, or an error message with a line number pointing to the problem. This feedback loop is tight, fast, and precise — which is exactly what you want when you're designing and testing.

The command line has another advantage: it's repeatable. If you type a command that works, you can type it again. You can save it in a script and run it automatically. You can share it with someone else, and they can run the same command and get the same result. Clicking around menus is difficult to document and impossible to automate; text commands are both.

### Which Terminal to Use

**Windows users:** You have two options. **PowerShell** is the modern choice and the one we recommend — it's more powerful and consistent with what you'll find in professional environments. To open it, press the Windows key, type `PowerShell`, and press Enter. Alternatively, **Command Prompt (CMD)** is an older option that still works for basic tasks. This course provides code examples for both.

**macOS users:** Open **Terminal** by going to Applications → Utilities → Terminal. It runs a shell called `bash` (or `zsh` on newer Macs — both work for this course).

**Linux users:** You almost certainly already know how to open a terminal. If not, look for "Terminal" in your applications menu.

### A Few Things to Know Before We Start

- On macOS and Linux, **file paths use forward slashes**: `src/main.scad`
- On Windows, **file paths use backslashes**: `src\main.scad`
- Commands are **case-sensitive on macOS and Linux** — `3DM` and `3dm` are different things, and only the lowercase version will work
- When a command says it "isn't found," it almost never means the software isn't installed — it usually means the terminal opened before the installation updated its search path (we'll cover how to fix this in Step 1)

---

## Step 1 — Install the 3dMake Toolchain

### Understanding What You're Installing

You're installing two pieces of software that work together:

**OpenSCAD** is the underlying 3D geometry engine. It reads your `.scad` code files and turns them into 3D model files (specifically `.stl` files). You can think of it like a compiler for 3D geometry — the same way a Python interpreter turns Python code into running behavior, OpenSCAD turns design code into physical geometry. You don't need to interact with OpenSCAD directly very often; 3dMake does it for you.

**3dMake** is the project management layer that sits on top of OpenSCAD. It organizes your project files, runs OpenSCAD with the right settings, analyzes your model output, and provides the plain-English `3dm info` descriptions you'll use to verify your work.

The installer sets up both. Run the appropriate command for your operating system below, let it finish completely, and then run the verification commands before doing anything else.

### Installation Commands

**Linux and macOS (bash terminal):**

```bash
# Download and run the official installer
curl -fsSL https://get.3dmake.dev | bash

# After it finishes, verify both tools are installed correctly.
# Both of these commands should print version numbers, not errors.
3dm --version
openscad --version
```

**Windows (PowerShell):**

```powershell
# Install using Windows Package Manager
winget install 3dMake.3dMake

# If winget isn't available, download the installer directly:
# https://3dmake.dev/install
# Run the downloaded installer, then open a NEW PowerShell window.

# Verify the installation:
3dm --version
openscad --version
```

**Windows (Command Prompt / CMD):**

```cmd
REM After installation, open a NEW CMD window and verify:
3dm --version
openscad --version

REM If you see "not recognized as an internal or external command",
REM see the troubleshooting section below.
```

### What the Version Numbers Mean

When you run `3dm --version`, you should see output like `3dMake v1.4.2` (the exact number doesn't matter as long as something prints). When you run `openscad --version`, you should see `OpenSCAD version 2021.01` or later. If either command produces an error instead of a version number, something went wrong with the installation. Read the troubleshooting section before moving on.

### Troubleshooting Installation

**"command not found" or "is not recognized as an internal or external command"**

This is the most common issue and it almost always has the same cause: your terminal session started before the installer ran. When the installer finishes, it adds the 3dMake folder to a system setting called the **PATH** — a list of folders your computer searches when you type a command name. But a terminal that was already open when the installer ran doesn't know about the change. The fix is simple: **close your terminal completely and open a new one**, then try the verification commands again.

**What is PATH?** When you type `3dm` at the command line, your computer doesn't search your entire hard drive — that would take forever. Instead, it searches only the folders listed in PATH. If 3dMake's folder isn't in that list, the computer genuinely can't find the program even though it's installed. Closing and reopening the terminal forces it to reload the PATH list.

If opening a new terminal doesn't fix it, you may need to add the folder manually. On Windows, search the Start menu for "Edit the system environment variables," click "Environment Variables," and add the 3dMake installation folder to the `Path` variable. On macOS/Linux, add the folder path to your `~/.bashrc` or `~/.zshrc` file and restart the terminal.

**OpenSCAD version too old**

3dMake requires OpenSCAD 2021 or later. If you have an older version from a previous installation, download the latest release from openscad.org, uninstall the old version, and install the new one.

---

## Concept 3: The Coordinate System — Where Objects Live in 3D Space

### Why You Need to Understand This Before Writing Code

Imagine you're on the phone with a friend trying to tell them where to place a chair in an empty room. You'd need to agree on two things: where to measure from (a corner? the center of the room?), and which directions count as "forward," "sideways," and "up." Without that shared reference, your instructions are meaningless.

OpenSCAD works exactly the same way. Every object you create lives at a specific location in 3D space. That space has a fixed starting point called the **origin** and three directions called **axes**. If you don't know these, you'll place objects and wonder why they appear where they do.

### The Three Axes

OpenSCAD uses a **right-handed XYZ coordinate system** — a standard that's shared by engineering software worldwide, so learning it here transfers directly to other professional tools.

Picture a 3D printer's build plate in front of you:

- **X axis** — points to the **right** across the build plate. Positive X is rightward; negative X is leftward.
- **Y axis** — points **away from you**, toward the back of the build plate. Positive Y is away from you; negative Y is toward you.
- **Z axis** — points **straight up**, perpendicular to the build plate. Positive Z is upward; negative Z would be underground.

The **origin** — the point (0, 0, 0) — sits at the front-left corner of the build space, right at bed level. When you type `cube([20, 20, 10])` without any translation, it appears with its front-left-bottom corner at the origin, extending 20 mm to the right, 20 mm back, and 10 mm up.

### Why This Matters for Printing

Because the Z axis points up and the origin is at bed level, any geometry with a negative Z coordinate would be "underground" — below the build plate. The printer can't print there. Part of your job when designing is to make sure your entire model lives in positive Z space (Z ≥ 0) so it sits on the bed correctly.

### Units: Always Millimeters

OpenSCAD has no built-in concept of units — it just works with numbers. The convention in this course (and in the 3D printing community generally) is that **all dimensions are in millimeters**. This is not optional or adjustable — it's a universal agreement.

When you write `cube([30, 20, 10])`, that means 30 mm × 20 mm × 10 mm. If you accidentally think in centimeters and write `cube([3, 2, 1])` meaning "3 cm by 2 cm by 1 cm," OpenSCAD will treat those as millimeters and your print will come out ten times too small. Always, always, always think in millimeters.

### The `center` Parameter: Where Does the Object Anchor?

Every 3D primitive in OpenSCAD has a `center` parameter. This is one of the most important things to understand early, because it affects where objects appear and how easy your placement math is.

**`center=false`** (this is the default — it applies if you don't write anything): the object's **bottom-left-front corner** sits at the position you specify. A `cube([20, 20, 10])` with no translation occupies the space from X=0 to X=20, Y=0 to Y=20, Z=0 to Z=10. The object lives entirely in positive space and sits neatly on the build plate.

**`center=true`**: the object's **geometric center** sits at the position you specify. The same cube at the origin would extend from X=−10 to X=10, Y=−10 to Y=10, Z=−5 to Z=5. Half of it would be underground — which means if you print it without moving it up first, you'll only get the top half.

Neither option is wrong. You choose based on which makes your math simpler. For parts that should sit on the build plate, `center=false` is more natural. For parts you want to rotate around their center, `center=true` is much cleaner.

```openscad
// Demonstrating center=false vs center=true
// Build this and use 3dm info to see the bounding box of each shape.

// This cube sits on the bed naturally — its bottom is at Z=0.
cube([20, 20, 10]);                    // corner at origin; occupies X:0–20, Y:0–20, Z:0–10

// This cube straddles the origin — half of it is underground!
// Move it sideways with translate() so it doesn't overlap the first one.
translate([35, 0, 0])
  cube([20, 20, 10], center=true);     // center at origin; occupies X:25–45, Y:-10–10, Z:-5–5

// A small red sphere marks where the origin is.
color("red") sphere(r=1.5, $fn=16);

// Colored cylinders mark the positive direction of each axis.
color("red")   translate([25, 0, 0]) cylinder(r=0.5, h=1, $fn=8);  // +X
color("green") translate([0, 25, 0]) cylinder(r=0.5, h=1, $fn=8);  // +Y
color("blue")  cylinder(r=0.5, h=25, $fn=8);                        // +Z
```

Build this code and run `3dm info` to read the bounding boxes. Notice how the centered cube has negative Y coordinates in its bounding box — that's the underground half. In a real project, you'd use `translate()` to lift it up so its bottom is at Z=0.

---

## Step 2 — Create Your First Project

### What a "Project" Is

3dMake organizes work into **projects** — folders with a specific, standard structure. This structure keeps your source code separate from generated output, which makes it easy to clean, rebuild, back up, and share your work.

Here is what a project folder looks like:

```
my_project/
  src/          ← your .scad source files live here (YOU write and edit these)
  build/        ← generated STL files go here (3dMake creates these automatically)
  3dmake.toml   ← project configuration file (created when you initialize the project)
```

The most important rule: **never manually edit files in the `build/` folder**. Everything in there is generated automatically. If you make changes to a build file, they'll be overwritten the next time you run `3dm build`. All your actual work goes in `src/`.

### Creating the Project

**Linux / macOS (bash):**

```bash
# Create the project folder and its standard subdirectories
mkdir my_first_project
cd my_first_project
mkdir src build

# Create the main design file
cat > src/main.scad << 'EOF'
// My First Parametric Model
// ========================
// All dimensions in millimeters.
// To customize this design, change the values below and run: 3dm build

width  = 30;   // mm — how wide the box is (X dimension)
depth  = 20;   // mm — how deep the box is (Y dimension, front to back)
height = 10;   // mm — how tall the box is (Z dimension)

cube([width, depth, height]);
EOF
```

**Windows (PowerShell):**

```powershell
# Create project folder and subdirectories
New-Item -ItemType Directory -Path "my_first_project\src","my_first_project\build"
Set-Location "my_first_project"

# Create the main design file
@'
// My First Parametric Model
// All dimensions in millimeters.
// Change values below and run: 3dm build

width  = 30;   // mm
depth  = 20;   // mm
height = 10;   // mm

cube([width, depth, height]);
'@ | Out-File -FilePath "src\main.scad" -Encoding UTF8
```

**Windows (CMD):**

```cmd
mkdir my_first_project\src
mkdir my_first_project\build
cd my_first_project

echo // My First Parametric Model > src\main.scad
echo width  = 30; >> src\main.scad
echo depth  = 20; >> src\main.scad
echo height = 10; >> src\main.scad
echo cube([width, depth, height]); >> src\main.scad
```

### Reading the Code Line by Line

This small file introduces the core pattern you'll use for the entire course. Let's read every line carefully.

`// My First Parametric Model` — this is a **comment**. In OpenSCAD, anything following `//` on a line is ignored by the computer — it's a note for human readers. Comments are essential. They explain what the code does, what the units are, and what you were thinking when you wrote it.

`width = 30;` — this **declares a variable** named `width` and sets it equal to 30. The semicolon at the end is required — it tells OpenSCAD "this statement is finished." The comment `// mm` reminds anyone reading the file that this value is in millimeters.

`depth = 20;` and `height = 10;` — same pattern. Each variable represents one dimension of the box.

`cube([width, depth, height]);` — this creates a box. The brackets `[]` enclose a list of three values: the X size, the Y size, and the Z size. Instead of writing `cube([30, 20, 10])` with raw numbers, you use the variable names. This is the magic of parametric design: if you change `width = 30` to `width = 50` at the top, the cube automatically becomes 50 mm wide everywhere `width` is used — which might be one place in a simple file, but could be dozens of places in a complex one.

This pattern — declare named parameters at the top of the file, use them in geometry below — is the single most important habit this course will teach you.

---

## Step 3 — Build and Verify

### Running Your First Build

With your terminal open inside the `my_first_project/` folder, run:

```bash
3dm build
```

This single command does several things: it finds your `src/main.scad` file, runs OpenSCAD on it to turn the code into geometry, checks the result for basic validity, and saves the output as `build/main.stl`.

If the build succeeds, you'll see output indicating the file was written. If there's an error in your code, you'll see an error message with a line number pointing to the problem. Error messages with line numbers are extremely helpful — they tell you exactly where to look to fix the issue.

### Understanding the Model Information

Now run:

```bash
3dm info
```

This analyzes your built model and prints a report. You'll see something like this:

```
File:         build/main.stl
Bounding Box: 30.0 x 20.0 x 10.0 mm
Volume:       6000.0 mm³
Triangles:    12
Description:  A small rectangular box measuring 30mm wide by 20mm deep by 10mm tall.
```

Let's understand each piece.

**Bounding Box:** The bounding box is the smallest rectangular box that perfectly contains your entire model. `30.0 x 20.0 x 10.0 mm` means your model is 30 mm in X, 20 mm in Y, and 10 mm in Z. This number is your primary verification tool — if the bounding box doesn't match what you designed, something went wrong. Check it every single time you build.

**Volume:** This is how much solid material fills the model. A solid box that is 30 × 20 × 10 mm contains exactly 30 × 20 × 10 = 6,000 cubic millimeters of material. If your model were hollow, the volume would be less. Volume directly predicts how much filament you'll need.

**Triangles:** STL files represent surfaces as a mesh of triangles. More triangles means more geometric detail (and a larger file). A simple box needs only 12 triangles. A sphere with smooth curves needs thousands.

**Description:** The plain-English description comes from an AI analysis of the geometry. It's useful for a quick sanity check, but it's not a replacement for checking the bounding box numbers yourself.

**What if the bounding box shows 0 × 0 × 0?** This means the build failed and no geometry was produced. Go back and look at the output from `3dm build` — the error messages will point you to the specific line in your code where something went wrong.

### Estimating Material Cost from Volume

Before printing anything — especially something that might take hours — it's professional practice to estimate the cost. Here is the formula:

```
mass (grams) = (volume_mm³ ÷ 1000) × filament_density_g_per_cm³
cost ($)     = mass_g × (spool_price_$ ÷ spool_weight_g)
```

For our 6,000 mm³ box using PLA filament:

```
mass = (6000 ÷ 1000) × 1.24 = 7.44 grams
cost = 7.44 × (20 ÷ 1000)   = $0.15
```

**Common filament densities:** PLA = 1.24 g/cm³, PETG = 1.27 g/cm³, ABS = 1.05 g/cm³, TPU = 1.20 g/cm³.

This calculation won't be exact (slicer settings affect actual usage), but it gives you a reasonable estimate within about 20% of the actual cost.

---

## Concept 4: The FDM Printing Pipeline

### How Your Code Becomes a Physical Object

Understanding how 3D printing actually works changes how you design. The printing process has physical constraints — things it can and can't do — and every design decision you make either works with those constraints or fights against them. Here's the complete journey from your code to a finished print.

**Stage 1 — STL File**
When you run `3dm build`, OpenSCAD converts your `.scad` code into an STL file. STL stands for **Standard Triangle Language** (sometimes called Standard Tessellation Language). An STL file describes the _surface_ of your 3D model as a mesh of tiny triangles — like wrapping a shape in a piece of paper made of triangles. It contains no color, no material information, no internal structure — just the outer surface geometry.

**Stage 2 — Slicing**
A program called a **slicer** (PrusaSlicer and Cura are popular options) reads the STL and slices the model into horizontal layers, like cutting through a loaf of bread to see the shape of each slice. The thickness of each slice is the **layer height** — typically 0.15 to 0.30 mm.

**Stage 3 — G-code**
The slicer converts those layer slices into a file of **G-code** — a language of machine instructions telling the printer exactly what to do. G-code commands look like: "move the print head to X=50, Y=30; heat the nozzle to 215°C; extrude 2.3 mm of filament." The printer reads these instructions literally and executes them in sequence.

**Stage 4 — Printing**
The printer reads the G-code and executes it. The nozzle heats to between 200°C and 240°C (depending on the material), melts a thin strand of plastic filament, and deposits it in the shape of each layer — one layer on top of the last, slowly building up the 3D form.

**Stage 5 — Cooling and Bonding**
As each layer is deposited, it needs to cool and bond to the layer below it. This inter-layer fusion is what holds the part together. However, it also means 3D-printed parts are slightly weaker in the vertical direction than in the horizontal direction — because the bond between layers is never quite as strong as the plastic itself. Good design takes this into account: parts that will experience stress should be oriented so the layers are perpendicular to the direction of that stress.

### The Three Key Slicer Settings to Know

**Layer Height** — how thick each printed layer is, typically 0.15 to 0.30 mm. Thinner layers produce smoother surfaces with more detail, but require more layers to reach the same total height, so prints take longer. For most classroom projects, 0.20 mm is a good starting point.

**Infill Percentage** — the internal structure of a print. A 100% infill print is completely solid. A 0% print is just the outer walls (hollow). In practice, most parts work well at 15–20% infill — the slicer creates a grid-like internal structure that supports the walls without using much material. Structural parts that will bear loads or stress should use 40–50% infill.

**Supports** — if your design has overhanging geometry (parts that extend horizontally without anything underneath them), the slicer can add temporary scaffolding called supports. These get removed after printing. The problem is that supports can leave rough surfaces and add both print time and material cost. Good design minimizes overhangs, which reduces or eliminates the need for supports.

### First Prints Are Tests, Not Final Products

You will almost never get a perfect-fitting part on the first print. Tolerances vary between printers, filament brands, and slicer settings. The professional approach — which this course teaches systematically in Lesson 8 — is to treat the first print of any new feature as a **test print**: a quick, small print specifically designed to tell you what needs to be adjusted. This saves time and material because you're testing deliberately, not accidentally printing a large part only to find out the hole is 0.3 mm too small.

---

## Step 4 — The Edit–Build–Verify Workflow

### The Fundamental Loop

Professional software development runs on a tight feedback cycle: write some code, run it, check the result, fix any problems, and repeat. The shorter each cycle is, the faster you learn and the fewer problems pile up. Parametric 3D design works exactly the same way:

```
EDIT → BUILD → VERIFY → repeat

Edit:   Change src/main.scad in any text editor. Save the file.
Build:  3dm build   → compiles your .scad code into build/main.stl
Verify: 3dm info    → confirms bounding box and volume match your design intent
        (optional)  → open build/main.stl in your slicer for a visual check
```

The most important habit to build is **verifying after every meaningful change** — not just when you think you're done. When you verify frequently, any problem you find is always close to the last thing you changed, which makes it easy to identify and fix. When you verify only at the end of a long work session, you may have dozens of changes to sift through to find one small mistake.

### Watch Mode: Automatic Rebuilds

If you're iterating quickly on a design, you can tell 3dMake to automatically rebuild every time you save your source file:

```bash
3dm watch
```

Run this in one terminal window, keep your text editor open in another. Every time you save `src/main.scad`, the terminal automatically runs `3dm build` and reports the result. This creates a nearly real-time feedback loop: you save the file and, a few seconds later, see whether it built successfully and what the new dimensions are.

---

## Step 5 — Building Parametric Variants

### Overriding Parameters at Build Time

Once your design uses variables for all its dimensions, you can generate different versions without editing the source file at all. The `-D` flag tells OpenSCAD to override a variable at build time:

```bash
openscad -D "width=50" -o build/main_wide.stl src/main.scad
```

This builds a version with `width=50` instead of the `width=30` in the file — without changing the file. You can combine multiple overrides:

```bash
openscad -D "width=50" -D "height=15" -o build/main_large.stl src/main.scad
```

### Building Multiple Variants Automatically

You can use a shell loop to generate a whole family of variants automatically:

**Linux / macOS (bash):**

```bash
# Build four width variants — generates four separate STL files
for w in 20 30 40 50; do
  openscad -D "width=$w" -o "build/main_w${w}.stl" src/main.scad
  echo "Built: width=${w}mm → build/main_w${w}.stl"
done
```

**Windows (PowerShell):**

```powershell
$widths = @(20, 30, 40, 50)
foreach ($w in $widths) {
  openscad -D "width=$w" -o "build\main_w$w.stl" "src\main.scad"
  Write-Host "Built: width=${w}mm → build\main_w$w.stl"
}
```

**Windows (CMD):**

```cmd
FOR %%W IN (20 30 40 50) DO (
  openscad -D "width=%%W" -o build\main_w%%W.stl src\main.scad
  echo Built width=%%W
)
```

This is one of the most powerful things about parametric design: one source file, many specific outputs. The file represents the concept; the parameters turn it into instances.

---

## Concept 5: Code Documentation Standards

### Why Documented Code Is Part of Certification

When you return to a file weeks later, you will not remember what every variable was for. When a classmate, instructor, or future collaborator reads your code, they need to understand your design intent without asking you. When you submit work for this certification, well-documented code demonstrates professional-level practice — not just that you got the geometry right, but that you thought about it clearly.

OpenSCAD documentation has three levels:

**File Header Comments** — a block comment at the very top of the file explaining: what this part is, what it's used for, print recommendations (layer height, infill, supports needed?), and which parameters are meant to be customized. This is the first thing anyone reads.

**Parameter Line Comments** — every variable declaration should have a comment stating the unit and a reasonable range. This:

```openscad
wall = 2;   // mm — wall thickness (1.5–3.0 for a 0.4mm nozzle)
```

is dramatically more useful than just `wall = 2;`.

**Module Comments** — every module (a named, reusable chunk of geometry — covered in depth in Lesson 3) should have a one-line description of what shape it creates.

### A Well-Documented File Template

```openscad
// ==============================================================
// Parametric Box Lid
// ==============================================================
// Purpose:     Snap-fit lid for the storage box (box.scad)
// Print time:  ~8 minutes at 0.20 mm layers
// Material:    ~6 g PLA
//
// PARAMETERS TO CUSTOMIZE:
// - box_width:   width of the matching box (default: 60 mm)
// - box_depth:   depth of the matching box (default: 40 mm)
// - lip_height:  how deep the lid lip fits into the box (default: 3 mm)
//
// PRINT RECOMMENDATIONS:
// - Layer height: 0.20 mm
// - Infill:       15%
// - Supports:     not needed
// - Orientation:  print flat, face-down
// ==============================================================

box_width  = 60;   // mm — must match box.scad box_width
box_depth  = 40;   // mm — must match box.scad box_depth
lip_height = 3;    // mm — depth the lid lip extends downward (2–5 mm)
wall       = 2;    // mm — lid wall thickness (1.5–3.0 mm)

// (Geometry below this line — uses the parameters above)
```

This header comment takes about two minutes to write and saves many minutes of confusion later. Make it a habit starting with your very first project.

---

## Summary Table

| Concept           | Key Point                                                                   |
| ----------------- | --------------------------------------------------------------------------- |
| Parametric design | Change one number, model updates everywhere it's used                       |
| OpenSCAD          | Code-based 3D geometry engine; you describe shapes with text                |
| 3dMake            | Project manager layer; `3dm build` and `3dm info` are your main commands    |
| Units             | Always millimeters — no exceptions                                          |
| Origin (0,0,0)    | Front-left corner of build space, at bed level                              |
| X axis            | Points right                                                                |
| Y axis            | Points away from you (back)                                                 |
| Z axis            | Points straight up                                                          |
| `center=false`    | Default — one corner of the object sits at the specified position           |
| `center=true`     | Object straddles the specified position (center is at that point)           |
| `3dm build`       | Compiles `src/main.scad` → `build/main.stl`                                 |
| `3dm info`        | Reports bounding box, volume, triangle count, AI description                |
| `3dm watch`       | Auto-rebuilds whenever you save a `.scad` file                              |
| Bounding box      | Smallest rectangle containing the whole model — your #1 verification metric |
| STL file          | Triangle-mesh representation of surface geometry                            |
| FDM pipeline      | STL → Slicer → G-code → Print → Cool                                        |
| Layer height      | Thickness of each printed layer; 0.20 mm is a good default                  |
| Infill            | Internal density; 15–20% for typical parts, 40–50% for structural           |
| Supports          | Temporary scaffolding for overhangs; minimize them in your design           |

---

## Extension Resources

### Lesson 1 Asset Folder

- [Your First Print guide](../../assets/3dMake_Foundation/Lessons_3dMake_1/Your_First_Print/your-first-print.md)
- [Basic project scaffold template](../../assets/3dMake_Foundation/Lessons_3dMake_1/basic_project_scaffold.scad)

### Learning Series Sample Projects (`3dmake_learning_series/`)

- `01_cube_keycap` (Beginner) — Text embossing basics
- `02_parametric_phone_stand` (Intermediate) — Transforms and Minkowski fillets
- `03_stackable_bins` (Advanced) — Tolerance and assemblies

### Reference Materials (`Reference_Materials/`)

- `3dmake-setup-guide.md` — Complete setup walkthrough
- `openscad-cheat-sheet.md` — Keyboard shortcuts and common functions
- `filament-comparison-table.md` — Material properties reference
- `master-rubric.md` — Assessment criteria

---

## Quiz — Lesson 1 (15 questions)

1. What command initializes a 3dMake project?
2. What folder holds generated STL files?
3. How do you run 3dMake's automatic rebuild mode?
4. Why is it useful to run `3dm build` frequently during development rather than only at the end?
5. Give one reason to prefer an external text editor over the built-in OpenSCAD editor for this workflow.
6. True or False: 3dMake requires a graphical user interface to use effectively.
7. Explain what the `3dmake.toml` file does in your project.
8. Describe what the `src/` and `build/` project folders are used for and which one you edit directly.
9. In your own words, explain the difference between a visual 3D editor (like Tinkercad) and a code-based parametric design tool (like OpenSCAD). What is the main advantage of the parametric approach?
10. What validation step should you always perform after running `3dm build` before sending a file to print?
11. If the bounding box reported by `3dm info` shows `0 × 0 × 0 mm`, what does that tell you, and what should you do next?
12. Explain what `center=false` and `center=true` mean for a `cube()`. For each, where does the object appear relative to the position you specify?
13. What does FDM stand for, and what are the five stages of the FDM pipeline from STL file to cooled physical part?
14. A box has dimensions 50 × 40 × 25 mm and you're printing it in PLA (density 1.24 g/cm³) at 100% infill. Using a $22 / 1 kg spool, what is the estimated material cost? Show your calculation.
15. You run `3dm build` and receive the error "No such file or directory: src/main.scad". List two likely causes and the fix for each.

---

## Extension Problems (15)

1. Add a README entry explaining your top-level parameters and expected units.
2. Create a parameter variant by changing `width` by 20% and build both variants; compare dimensions using `3dm info` to confirm the change.
3. Script a command sequence that automates the entire new-project setup: create folder, create `src/main.scad`, and run `3dm build` — in a single script file.
4. Intentionally introduce a syntax error in your `.scad` file (remove a semicolon), run `3dm build`, and document what the error message says and which line it points to. Then fix it.
5. Prepare a short instructor sign-off checklist describing the safety checks you should complete before sending a file to print.
6. Build a variant testing suite: create 5 different combinations of `width`, `depth`, and `height`, build all five, and record the bounding box and volume for each.
7. Create a 3dMake project template with best-practice structure, documentation header, and parameter comments. Write a README explaining how to use it.
8. Write a short accessibility guide explaining how a student using a screen reader could use `3dm info` output to understand a model's geometry without a visual preview.
9. Design a simple parametric part library (three or more related parts) in a single project. Document all parameters with units and example values.
10. Write a comprehensive troubleshooting guide for common `3dm build` errors, with the cause and fix for each.
11. Add a `.gitignore` file to your project, commit it using Git, make a parameter change and create a second commit. In 2–3 sentences, explain why version control is valuable for parametric design.
12. Edit the global configuration file using `3dm edit-global-config` to change the default editor. Document the setting name and how you verified the change took effect.
13. Create a project with three `.scad` source files and build each using `3dm build -m <n>`. Record the output STL filenames.
14. Research the FDM layer height trade-off: slice the same model at 0.15 mm, 0.20 mm, and 0.30 mm. Record the estimated print time and filament use for each. What is the trade-off?
15. Write a one-page "new student onboarding guide" for 3dMake covering installation, project creation, first build, and first print. Write it as if your audience is a classmate who has never used the command line.

---

## References and Helpful Resources

[^1]: 3DMake GitHub Repository — https://github.com/tdeck/3dmake

[^2]: OpenSCAD Manual — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual

[^3]: OpenSCAD Parametric Design — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables

[^4]: OpenSCAD Review — CadHub — https://learn.cadhub.xyz/blog/openscad-review/

[^5]: PrusaSlicer Validation Tools — https://docs.prusa3d.com/en/guide/39012-validation-tools/

[^6]: 3dmake e2e_test.py — https://github.com/tdeck/3dmake/blob/main/e2e_test.py

[^7]: PrusaSlicer Documentation — https://docs.prusa3d.com/en/

[^8]: OpenSCAD Non-Manifold FAQ — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ#Why_is_my_model_not_manifold.3F

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub
- CodeSolutions Repository — https://github.com/ProgrammingWithOpenSCAD/CodeSolutions
- OpenSCAD Quick Reference — https://programmingwithopenscad.github.io/quick-reference.html
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 1 are included below. You do not need to open any additional files._

---

## Appendix A: Your First Print — Extension Project

**Estimated time:** 2–4 hours (including setup and print monitoring)

### Overview

This extension project applies the workflow and concepts from Lesson 1 to a real physical print. Rather than designing from scratch, you'll select a simple ready-made model, evaluate whether it's appropriate for a beginner print, configure slicer settings, run the print safely, and document what happened. The goal is to complete one full cycle of the pipeline you just learned — from file to printed object — and to practice the observation and documentation habits you'll use for every print in this course.

### Learning Objectives

By completing this project, you will:

- Select a simple ready-made model and evaluate its printability for a classroom printer
- Configure slicer settings for a short-duration print and prepare the printer safely
- Monitor a print in progress and recognize early warning signs of failure
- Document print parameters and reflect on the physical outcome

### Materials

- Computer with slicer and access to an online model repository
- Classroom-approved printer, filament spool

### Tasks

1. **Choose a simple model** (under 2 hours estimated print time) from Thingiverse or Printables. Download the STL.

2. **Inspect the model** before loading it in the slicer. Look at it from all angles. Note any overhangs, thin features, or very small details. Write two short reasons why this model is appropriate for a first print — specifically, why it is not risky.

3. **Load the model in your slicer**, select the classroom profile, and adjust settings only if necessary. Record the final print time estimate, layer height, infill %, and filament weight estimate.

4. **Perform safety checks** using the checklist in Lesson 5 Appendix A (or the condensed checklist below). Start the print and **remain present and watching for the first 15 minutes**. Note what you observe about first-layer adhesion and extrusion quality.

5. **After the print cools**, measure three critical dimensions using calipers (or by comparing against the model's stated dimensions). Record the measured values and any deviations.

### Condensed Pre-Print Safety Checklist

- [ ] Bed clean and level
- [ ] Filament loaded and extruding cleanly (run a short purge)
- [ ] Build area clear of obstructions
- [ ] Print area free of flammable materials
- [ ] You will remain present for the first 15 minutes

### Probing Questions

1. Why did you select this model? What specific risks did you anticipate, and how does this model avoid or minimize them?
2. Which slicer setting most affects print time for this model, and why?
3. If a thin feature failed during printing, what is the minimum change you would make to give it a better chance on the next attempt?

### Starter Code

If you want to build a simple printable object from scratch rather than downloading one, use this scaffold as your starting point:

```openscad
// Basic Project Scaffold
// ============================================
// PROJECT CONFIGURATION
// ============================================
// Set your project dimensions here. All other geometry derives from these.

object_w  = 50;   // mm — overall width
object_d  = 50;   // mm — overall depth
object_h  = 20;   // mm — overall height
wall      = 2.0;  // mm — wall thickness (2–3mm recommended for FDM)
$fn       = 30;   // curve resolution (higher = smoother, slower to render)

// ============================================
// MAIN DESIGN
// ============================================

module base_shape() {
  // Replace this cube with your own geometry
  cube([object_w, object_d, object_h]);
}

module hollow_version() {
  // Creates a hollow version by removing an inner volume
  difference() {
    base_shape();
    translate([wall, wall, wall])
      cube([object_w - 2*wall,
            object_d - 2*wall,
            object_h]);  // open top — no overhang needed
  }
}

// Render your design:
hollow_version();
```

### Deliverables

- Short report: model selected, key slicer settings, measured dimensions and deviations, answers to probing questions
- Photos of the final print (at least two angles)
- Completed student documentation template (Appendix B)

---

## Appendix B: Your First Print — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**Date:** \_\_\_\_\_\_\_\_\_\_
**Description:** Select a simple 3D model, configure slicer settings, and complete your first independent print job.

---

### Model Selection

- Model name and source (Thingiverse, Printables, etc.):
- Link or file name:
- Why did you choose this model?
- Why is this model appropriate for a first print (two specific reasons)?

---

### Printability Assessment

- Estimated print time (from slicer): \_\_\_\_ hours \_\_\_\_ min
- Estimated filament: \_\_\_\_ g
- Layer height selected: \_\_\_\_ mm
- Infill %: \_\_\_\_
- Supports required? Yes / No — if yes, describe where:
- Any overhangs or thin features that concerned you?

---

### Printer Setup Log

| Parameter          | Value |
| ------------------ | ----- |
| Printer model      |       |
| Nozzle diameter    | mm    |
| Nozzle temperature | °C    |
| Bed temperature    | °C    |
| Layer height       | mm    |
| Infill %           |       |
| Support settings   |       |
| Print speed        | mm/s  |

---

### Safety Checks

- [ ] Bed clean and level
- [ ] Filament loaded and purged cleanly
- [ ] Nozzle at correct first-layer height
- [ ] Print area clear of obstructions
- [ ] I remained present and watching for the first 15 minutes

---

### Print Monitoring Notes

- What did you observe in the first layer?
- Was first-layer adhesion good, marginal, or poor?
- Any extrusion issues observed (clicking, skipping, thin lines)?
- Print completed successfully? Yes / No / Partially
- If partially or no — what happened and at what layer?

---

### Dimensional Verification (After Cooling)

Measure three features on the printed part and compare to the model's stated dimensions:

| Feature | Model Spec (mm) | Measured (mm) | Deviation (mm) | Notes |
| ------- | :-------------: | :-----------: | :------------: | ----- |
|         |                 |               |                |       |
|         |                 |               |                |       |
|         |                 |               |                |       |

---

### Reflections

**What went well:**

**What didn't go well:**

**What would you do differently next time:**

**If you printed this again, what settings would you change and why?**

---

### Attachments Checklist

- [ ] STL file or link to source model
- [ ] Slicer settings (screenshot or exported settings file)
- [ ] Photo of final print — at least two angles
- [ ] Completed measurement table above
- [ ] Answers to probing questions

---

### Teacher Feedback

| Category                                                                      | Score (0–3) | Notes |
| ----------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — appropriate model selected; print completed              |             |       |
| Setup & Documentation — printer setup log complete; safety checks done        |             |       |
| Reflection — measurements recorded; reflection is specific and shows learning |             |       |
| **Total (0–9)**                                                               |             |       |

**Resubmission:** If resubmitting, attach a paragraph explaining what was changed and why. The resubmission score replaces the original.

---

## Appendix C: Your First Print — Instructor Reference

### Project Context

This is the first physical print extension project in the course. Its primary purpose is to establish safe printer operation habits and complete documentation practices — not to produce a complex or impressive object. A student who selects an appropriate model, monitors the print safely, and documents the outcome accurately has succeeded, regardless of whether the print is visually impressive.

### Key Learning Points to Reinforce

**Model selection discipline.** The most common mistake at this stage is selecting a model that is too complex, too large, or has features that will fail (overhangs without supports, very thin walls, very fine detail). Push students to justify their selection in terms of printability, not just aesthetics.

**The first 15 minutes rule.** Students must stay and watch. A print that lifts off the bed in the first few layers becomes a tangled failure that wastes material and time. Students should not start a print and walk away.

**Documentation enables iteration.** A student who records their slicer settings has something to start from on the next print. A student who doesn't has to guess. Reinforce this constantly.

### Constraints (Enforce These)

- Model must be under 2 hours estimated print time
- Minimal or no support requirements recommended
- Student must record slicer settings, not just print the file
- Dimensional measurements must be taken after the part has fully cooled

### Assessment Notes

**Strong submissions** show: clear model selection reasoning (not just "it looked cool"), a complete printer setup log, specific first-layer observations, measurements that reflect actual caliper readings (not round numbers), and a reflection that identifies something specific to do differently.

**Common weak areas:** Vague reflections ("it went well"), missing measurements, and skipped safety checks. Address all three in feedback.

---

## Appendix D: 3dMake Setup and Workflow Guide

### Installing 3dMake

#### Prerequisites

Before installing 3dMake, you need:

- **Node.js** version 18 or higher — download from https://nodejs.org
- **OpenSCAD** — download from https://openscad.org/downloads.html

To verify both are installed, open a terminal (PowerShell on Windows, Terminal on macOS/Linux) and run:

```bash
node --version    # should print v18.0.0 or higher
openscad --version  # should print a version number
```

If either command returns "not found," install that software first before continuing.

#### Installing 3dMake

```bash
npm install -g 3dmake
```

Verify the installation:

```bash
3dm --version
```

You should see a version number. If you get "command not found," check that npm's global bin directory is in your PATH (see Troubleshooting below).

---

### Creating Your First Project

```bash
# Create a new folder for your project and enter it
mkdir my_project
cd my_project

# Initialize a 3dMake project
3dm init
```

`3dm init` creates this project structure:

```
my_project/
├── src/
│   └── main.scad      ← Your design code goes here
├── build/             ← Generated STL files appear here (auto-created)
└── 3dmake.toml        ← Project configuration
```

**The `src/` folder** is where you write your OpenSCAD code. You should never need to edit files in `build/` directly — that folder is managed by 3dMake.

**`3dmake.toml`** stores your project settings: the slicer path, filament density, cost-per-gram, and other project-level configuration. Open it with any text editor to see the available settings.

---

### The Core Workflow

Every design session follows this cycle:

```
edit src/main.scad  →  3dm build  →  3dm info  →  review / repeat
```

**`3dm build`** — compiles your `.scad` source into an STL file in the `build/` folder.

```bash
3dm build              # standard build
3dm build --clean      # delete build/ first, then rebuild
3dm build --watch      # auto-rebuild whenever you save src/main.scad
```

**`3dm info`** — reports on the most recently built STL: bounding box, volume, triangle count, and an AI-generated description.

```bash
3dm info
3dm info --view front
3dm info --view top,front,isometric
```

**`3dm preview`** — renders an image of your model to `build/preview.png`.

**`3dm orient`** — recommends a print orientation based on your model's geometry.

**`3dm slice`** — calls your configured slicer on the current STL.

---

### Command Reference

| Command                  | Purpose                              | Notes                                    |
| ------------------------ | ------------------------------------ | ---------------------------------------- |
| `3dm init`               | Initialize a new project             | Run once per project                     |
| `3dm build`              | Compile source → STL                 | Run after every code change              |
| `3dm info`               | Report dimensions and AI description | Always run before sending to print       |
| `3dm preview`            | Render model image                   | Use for quick visual check               |
| `3dm orient`             | AI print orientation suggestion      | Use as a starting point, verify yourself |
| `3dm slice`              | Run slicer on current build          | Requires slicer path in `3dmake.toml`    |
| `3dm edit-global-config` | Edit the global settings file        | For changing default editor, slicer path |

---

### Configuring Your Slicer

Edit `3dmake.toml` in your project folder and add your slicer path:

**Windows (PrusaSlicer):**

```toml
[slicer]
path = "C:/Program Files/Prusa3D/PrusaSlicer/prusa-slicer.exe"
```

**macOS (PrusaSlicer):**

```toml
[slicer]
path = "/Applications/PrusaSlicer.app/Contents/MacOS/PrusaSlicer"
```

**Linux:**

```toml
[slicer]
path = "/usr/bin/prusa-slicer"
```

---

### Configuring Cost Estimation

To use the cost estimation feature, set your filament density and spool price:

```toml
[filament]
density = 1.24        # g/cm³ — PLA default (see Lesson 5 Appendix C for other materials)
spool_weight = 1000   # grams per spool
spool_price = 22.00   # dollars per spool
```

3dMake will then include cost estimates in `3dm info` output.

---

### Troubleshooting

**`3dm: command not found` after installation**

npm's global bin directory isn't in your PATH. Find the directory:

```bash
npm config get prefix
```

Add the `bin` subdirectory of that path to your PATH. On Windows, this is usually `C:\Users\YourName\AppData\Roaming\npm`. On macOS/Linux, it's usually `~/.npm-global/bin` or `/usr/local/bin`.

**`No such file or directory: src/main.scad`**

You either haven't run `3dm init`, or you're in the wrong folder. Run `pwd` to confirm your current location, and `ls` (or `dir` on Windows) to see if `src/` exists.

**`OpenSCAD: command not found` during build**

OpenSCAD isn't in your PATH. On Windows, find where OpenSCAD is installed (usually `C:\Program Files\OpenSCAD\`) and add it to your PATH in System Settings → Environment Variables.

**Build succeeds but `3dm info` shows `0 × 0 × 0 mm`**

Your OpenSCAD code compiled without errors but produced no geometry. Check that your shapes are actually being rendered (not commented out), and that no `difference()` has subtracted more than it started with.

**`WARNING: Normalized tree is empty`**

Same as above from OpenSCAD's perspective. The most common causes: a shape with zero volume, all geometry inside a `difference()` was subtracted away, or a module was defined but never called.

---

## Appendix E: Navigating This Curriculum (mdBook Guide)

_This curriculum is published as a web book using mdBook. This guide explains how to find what you need, navigate between chapters, and use the book with a screen reader._

### Basic Navigation

**Sidebar table of contents** — the left side of the page lists all chapters by unit and lesson. Click or tap any title to jump to it. On a small screen, the sidebar may be hidden — look for a hamburger menu icon (three horizontal lines) to show it.

**Arrow navigation** — at the bottom of every page are Previous and Next links. You can also use keyboard arrow keys:

- `Left Arrow` — go to the previous chapter
- `Right Arrow` — go to the next chapter

**Search** — press `S` to open the search box. Type your search term; results appear as a dropdown. Click any result to jump to that chapter. Press `Escape` to close search.

| Key           | Action                               |
| ------------- | ------------------------------------ |
| `S`           | Focus the search box                 |
| `Escape`      | Close search results                 |
| `Left Arrow`  | Previous chapter                     |
| `Right Arrow` | Next chapter                         |
| `T`           | Toggle the table of contents sidebar |

---

### Screen Reader Navigation

#### With NVDA (Chrome, Firefox, or Edge recommended)

- `H` — jump between headings; the fastest way to skim a long lesson
- `D` — move between landmark regions (use to reach the sidebar)
- `NVDA + F7` — open the Elements List; select "Landmarks" to navigate to the sidebar directly
- Set punctuation level to Most or All before reading code blocks: `NVDA + P` to cycle
- `Ctrl + F` — browser Find, works alongside mdBook search

#### With JAWS (Chrome or Edge recommended)

- `H` — jump between headings
- `R` — move between landmark regions to reach the sidebar
- `JAWS Key + F6` — list all headings on the current page
- Set punctuation to All before reading code: `JAWS Key + Shift + 2`
- `JAWS Key + F5` — links list
- `Ctrl + F` — browser find

#### With VoiceOver (Mac / iOS)

- `VO + U` — open the rotor; select Headings to navigate by heading
- `H` (Quick Nav on) — move between headings
- iOS: use the rotor (`two-finger rotate`) to set navigation mode to Headings

---

### Finding What You Need

**If you know the unit or project:** open the table of contents and look for the unit name. Structure: Unit 0 (Foundation lessons) → Unit 1 (Guided projects) → Unit 2 (Intermediate skills) → Unit 3 (Open-ended projects) → Reference Materials.

**If you're looking for a specific term or command:** use Search (`S`). Search for an OpenSCAD command (`difference`, `translate`), a vocabulary word (`infill`, `tolerance`), or a project name.

**While working:** keep a second browser tab open to the Reference Materials section. Useful pages to bookmark: OpenSCAD Cheat Sheet, Slicing Settings Quick Reference, Filament Comparison Table, Screen Reader Coding Tips.

---

## Appendix F: Screen Reader Coding Tips (NVDA and JAWS)

### General Principles

**Turn punctuation up.** All OpenSCAD syntax — semicolons, brackets, parentheses, commas — is meaningful. If your screen reader skips punctuation, you will miss syntax errors. Set to Most or All before coding.

**Navigate by line.** Arrow up and down through code one line at a time. Use `Ctrl + Left/Right` to move word by word within a line.

**Use go-to-line.** OpenSCAD errors always give a line number. In VSCode: `Ctrl + G`, type the number, press Enter.

**Comment as you go.** A short comment after a block of code lets you navigate back to it by searching with `Ctrl + F`.

---

### NVDA Quick Reference

**Setting punctuation level:** `NVDA + P` cycles through None → Some → Most → All. For code: Most or All.

| Action             | Keys                              |
| ------------------ | --------------------------------- |
| Read current line  | `NVDA + Up Arrow`                 |
| Spell current line | `NVDA + Up Arrow` (twice quickly) |
| Read from cursor   | `NVDA + Down Arrow`               |
| Read current word  | `NVDA + Numpad 5`                 |
| Spell current word | `NVDA + Numpad 5` (twice quickly) |
| Stop reading       | `Ctrl`                            |

**Navigation in VSCode with NVDA:**

| Action              | Keys                             |
| ------------------- | -------------------------------- |
| Move by character   | `Left / Right Arrow`             |
| Move by word        | `Ctrl + Left / Right Arrow`      |
| Move by line        | `Up / Down Arrow`                |
| Start / end of line | `Home / End`                     |
| Go to line number   | `Ctrl + G`, type number, `Enter` |
| Find text           | `Ctrl + F`                       |
| Toggle line comment | `Ctrl + /`                       |

If NVDA stops reading the editor: press `NVDA + Space` to toggle between Browse and Application mode. For code editors, you want Application mode.

---

### JAWS Quick Reference

**Setting punctuation level:** `JAWS Key + Shift + 2` cycles through levels. For code: All.

| Action               | Keys                                  |
| -------------------- | ------------------------------------- |
| Read current line    | `JAWS Key + Up Arrow`                 |
| Spell current line   | `JAWS Key + Up Arrow` (twice quickly) |
| Read from cursor     | `JAWS Key + A`                        |
| Read current word    | `JAWS Key + Numpad 5`                 |
| Stop reading         | `Ctrl`                                |
| Increase speech rate | `Alt + Ctrl + Page Up`                |
| Decrease speech rate | `Alt + Ctrl + Page Down`              |

**Navigation in VSCode with JAWS:**

| Action            | Keys                        |
| ----------------- | --------------------------- |
| Move by character | `Left / Right Arrow`        |
| Move by word      | `Ctrl + Left / Right Arrow` |
| Move by line      | `Up / Down Arrow`           |
| Go to line number | `Ctrl + G`                  |
| Find text         | `Ctrl + F`                  |
| Toggle comment    | `Ctrl + /`                  |

If JAWS stops reading the editor: press `JAWS Key + Z` to toggle Virtual mode off. You want Virtual mode OFF in VSCode.

---

### OpenSCAD-Specific Tips

**Reading errors.** OpenSCAD errors always include a line number. Use `Ctrl + G` in VSCode to jump to it. Common errors:

| Error message                       | What it usually means                                         |
| ----------------------------------- | ------------------------------------------------------------- |
| `Expected ';' ...`                  | Missing semicolon at end of a statement                       |
| `Expected ',' or ')' ...`           | Missing comma between parameters, or unclosed parenthesis     |
| `Identifier ... is undefined`       | Variable name typed wrong, or used before declaration         |
| `WARNING: Normalized tree is empty` | Shape has no geometry — subtracted more than you started with |

**Bracket matching.** Every `(` needs a `)`, every `[` needs a `]`, every `{` needs a `}`. In VSCode, cursor on a bracket highlights its match. Navigate to the matching bracket with `Ctrl + Shift + \`.

**Commenting out code.** To test without deleting: `//` before a line, or `Ctrl + /` in VSCode to toggle comment on selected lines.

---

### Caliper and OpenSCAD Workflow Tip

When measuring and entering into OpenSCAD: say the measurement aloud before typing, then read it back after typing to confirm.

1. Measure → say "seventy point three millimeters"
2. Type `70.3` in OpenSCAD
3. Read back: "seven zero point three" — confirm match

---

## Appendix G: VSCode Setup Guide for NVDA and JAWS

### Why VSCode Instead of the OpenSCAD Editor

The built-in OpenSCAD editor has inconsistent behavior with screen readers — focus can jump unexpectedly and the editor sometimes stops being read after certain actions. VSCode is a mainstream code editor with strong, well-tested accessibility support for both NVDA and JAWS.

You write code in VSCode. OpenSCAD runs in the background to render the preview. You never need to interact with the OpenSCAD editor itself.

---

### Install Required Software

**Install VSCode** — download from https://code.visualstudio.com/
During installation: check "Add to PATH" and "Register Code as an editor for supported file types."

**Install OpenSCAD** — download from https://openscad.org/downloads.html
Use the installer version (not portable). After installing, verify it's in your PATH:

```powershell
openscad --version
```

**Optional: OpenSCAD VSCode Extension** — press `Ctrl + Shift + X`, search for "OpenSCAD Language Support," install it. Adds syntax highlighting and keyword completion for `.scad` files.

---

### Configure the Task Runner

The task runner lets you open your `.scad` file in OpenSCAD or export an STL with a single keypress.

**Create or open your workspace folder** in VSCode:

```powershell
cd ~/Documents/OpenSCAD_Projects
code .
```

**Create tasks.json:**

1. Press `Ctrl + Shift + P` to open the Command Palette
2. Type `Tasks: Configure Task` and press Enter
3. Select "Create tasks.json file from template" → "Others"

Replace the file's entire contents with:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Preview in OpenSCAD",
      "type": "shell",
      "command": "openscad",
      "args": ["${file}"],
      "group": { "kind": "build", "isDefault": true },
      "presentation": { "reveal": "silent", "panel": "shared" },
      "problemMatcher": []
    },
    {
      "label": "Export STL",
      "type": "shell",
      "command": "openscad",
      "args": [
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}.stl",
        "${file}"
      ],
      "group": "build",
      "presentation": { "reveal": "always", "panel": "shared" },
      "problemMatcher": []
    }
  ]
}
```

Save with `Ctrl + S`.

**Run the preview:** with a `.scad` file open, press `Ctrl + Shift + B`. OpenSCAD opens and displays your model. `Alt + Tab` to return to VSCode.

**Export STL:** `Ctrl + Shift + P` → "Tasks: Run Task" → "Export STL."

---

### NVDA Settings for VSCode

- Symbol level: Most (`NVDA + N` → Preferences → Settings → Speech → Symbol level: Most)
- For code reading: `NVDA + P` to cycle to Most or All on the fly

### JAWS Settings for VSCode

- Toggle Virtual mode OFF: `JAWS Key + Z` (you want Virtual mode off in VSCode)
- Punctuation level: All (`JAWS Key + Shift + 2`)

---

### Workflow Summary

```
1. Open VSCode workspace          code ~/Documents/OpenSCAD_Projects
2. Open or create a .scad file    Ctrl + P → type filename
3. Write OpenSCAD code
4. Preview in OpenSCAD            Ctrl + Shift + B
5. Export STL                     Ctrl + Shift + P → Tasks: Run Task → Export STL
6. Open slicer, import STL, slice, export G-code
7. Print
```

---

### Troubleshooting

| Problem                          | Solution                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| OpenSCAD doesn't open            | Confirm `openscad --version` works in PowerShell                                                     |
| VSCode not read by screen reader | JAWS: press `JAWS Key + Z` to exit Virtual mode; NVDA: click inside the editor once to confirm focus |
| Can't find error in code         | Error includes a line number — use `Ctrl + G` to jump to it                                          |
| `.scad` has an error             | `Alt + Tab` to OpenSCAD to read the console; arrow through the error message                         |
