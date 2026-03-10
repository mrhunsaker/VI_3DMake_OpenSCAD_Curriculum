# Lesson 6 — Practical 3dm Commands and Text Embossing

**Estimated Time:** 90–120 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## Before You Start

You've built solid 3D geometry, organized it into modules, learned to verify it rigorously, and understood the physical realities of printing it safely. Now we're going to add two powerful new capabilities to your toolkit.

The first is **text**. Adding text to 3D parts is more useful than it might sound at first. Engineers put part numbers on manufactured components so they can be identified after assembly. Makers label storage bins so they can find what they need. Designers emboss names and logos on products. Accessibility designers create braille labels. OpenSCAD's `text()` function makes all of this parametric — you can generate a hundred labeled bins automatically, make the text content a parameter, and produce variants for different languages or quantities without touching the geometry code at all.

The second is the **full `3dm` command suite**. You've been using `3dm build` and `3dm info`. There are three more commands — `preview`, `orient`, and `slice` — that round out the workflow from design to print.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Use `text()` to add embossed and debossed labels to 3D models
- Find available fonts on your system and write portable font code
- Size text to fit a specific container using the cap-height model
- Use the full `3dm` command suite: `build`, `info`, `preview`, `orient`, `slice`
- Use OpenSCAD string functions: `str()`, `len()`, `search()`, `substr()`
- Apply `let()` for scoped variable declarations
- Automate multi-variant text label generation in bash, PowerShell, and CMD

---

## Concept 1: The Full `3dm` Command Suite

### Five Commands, One Workflow

You've been using two commands. Here's the complete set:

| Command       | What It Does                              | Output                      |
| ------------- | ----------------------------------------- | --------------------------- |
| `3dm build`   | Compiles `.scad` source → `.stl` geometry | `build/main.stl`            |
| `3dm info`    | Reports dimensions and AI description     | Console text                |
| `3dm preview` | Renders model to an image file            | `build/preview.png`         |
| `3dm orient`  | AI-suggested print orientation            | Console text recommendation |
| `3dm slice`   | Calls your slicer on the current STL      | G-code file                 |

```bash
# BUILD VARIANTS
3dm build                          # standard build
3dm build --clean                  # delete build/ folder first, then rebuild
3dm build --watch                  # auto-rebuild when src/ files change

# INFORMATION AND DESCRIPTION
3dm info                           # bounding box, volume, triangle count, AI description
3dm info --file path/to/file.stl   # query a specific STL (not just the current build)
3dm info --view front              # generate description from the front view
3dm info --view top,front,isometric  # generate from multiple views

# ORIENTATION, PREVIEW, SLICING
3dm preview                        # render model to build/preview.png
3dm orient                         # AI recommendation for best print orientation
3dm slice                          # call slicer on build/main.stl
```

### `3dm orient` — What It Does and How to Use It

`3dm orient` uses AI to analyze your model's geometry and recommend which face should be placed down on the build plate for printing. This recommendation considers two things: minimizing the need for supports (overhangs), and maximizing the quality of visible surfaces (which sit better when they're on the top or sides, not facing down toward the bed).

Use `3dm orient` as a starting suggestion, but verify it with your own judgment. For complex parts, you may have competing priorities — perhaps the AI recommends an orientation that minimizes supports but puts a cosmetically important surface face-down against the bed, where it will look rough. Your own analysis matters.

---

## Concept 2: Text on 3D Parts

### Why 3D Text Is Useful

Before diving into syntax, it's worth thinking about why you'd want text on a 3D print:

**Identification** — part numbers, serial numbers, batch codes. Manufacturing parts need to be traceable. A part with its number embossed on it can never be confused with another part.

**Directional labels** — "FRONT," "TOP," "THIS SIDE UP." Assembly instructions encoded directly in the part.

**Storage and organization** — labels for bins, drawers, shelves. Parametric text means you can batch-generate 30 labeled bins automatically.

**Personalization** — names, logos, messages on gifts, art, and personal projects.

**Accessibility** — braille labels for visually impaired users. OpenSCAD can generate braille if you encode the dot patterns.

---

## Step 1 — The `text()` Function

### How Text Works in OpenSCAD

`text()` creates a **2D** shape from a text string. By itself, it's flat — it has no height. You add height by wrapping it in `linear_extrude()`, which pushes the 2D letterforms straight up along the Z axis.

**Embossed text** is raised above the surface — the letters stand up above the base. This is more visible and readable, especially at small sizes, because there's contrast between the raised letters and the surrounding surface.

**Debossed text** (also called engraved or incised) is carved into the surface — the letters are sunken below the surrounding surface. This reads well when the sunken areas catch shadow, or when filled with paint. It also doesn't add any height to the overall part dimensions.

```openscad
// Full text() parameter reference
linear_extrude(height=1.5)
  text(
    text      = "3dMake",           // the string to display
    size      = 10,                  // cap height in mm (capital letter height)
    font      = "Liberation Sans",   // font family name (more on this in Step 2)
    halign    = "center",            // horizontal alignment: "left", "center", "right"
    valign    = "baseline",          // vertical alignment: "top", "center", "baseline", "bottom"
    spacing   = 1.0,                 // letter spacing multiplier (1.0 = normal)
    direction = "ltr",               // text direction: "ltr" (left-to-right) or "rtl"
    language  = "en",
    script    = "latin"
  );

// EMBOSSED: raised letters sitting on top of the base
cube([80, 15, 5]);
translate([40, 7.5, 5])             // sit text on top face (Z=5)
  linear_extrude(height=1.5)        // letters are 1.5mm tall
    text("FRONT", size=6, font="Liberation Sans:style=Bold",
         halign="center", valign="center");

// DEBOSSED (ENGRAVED): letters carved into the surface
difference() {
  translate([0, 20, 0]) cube([80, 15, 5]);
  translate([40, 27.5, 5 - 0.8])   // start 0.8mm below the top face
    linear_extrude(height=1)        // 1mm cut: 0.8 into + 0.2 through (clean cut)
      text("BACK", size=6, font="Liberation Sans:style=Bold",
           halign="center", valign="center");
}
```

**Understanding the debossed depth calculation:** If the plate is 5 mm tall and you want 0.8 mm deep engraving, start the extrusion at `z = 5 - 0.8 = 4.2`. Extrude 1.0 mm (so it reaches z=5.2 — 0.2 mm past the top). This uses the 0.001 rule logic from Lesson 2: the cutter goes slightly beyond the face for a clean cut. The visible result is letters engraved 0.8 mm deep.

---

## Step 2 — Finding and Using Fonts

### Why Font Availability Is a Portability Problem

OpenSCAD uses fonts installed on your operating system. Different computers have different fonts. If you write code that uses "Arial" and another student or instructor tries to render it on a Linux machine that doesn't have Arial, OpenSCAD will fall back to a substitute font — and the text proportions may change, potentially causing the text to overflow its container or look wrong.

The solution has two parts: check which fonts are available on your machine before writing your code, and define your font choice as a single parameter at the top of the file so it's easy to change.

### Finding Available Fonts

**Linux (bash):**

```bash
# List all available fonts
fc-list | sort | less

# Find fonts with "liberation" in the name
fc-list | grep -i "liberation"

# Get the exact format needed for OpenSCAD's font= parameter
fc-list --format="%{family}:style=%{style}\n" | grep -i liberation | sort | head -20
# Output examples:
# Liberation Sans:style=Bold
# Liberation Sans:style=Regular
# Liberation Mono:style=Bold
```

**Windows (PowerShell):**

```powershell
# List all installed fonts
[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$fonts = (New-Object System.Drawing.Text.InstalledFontCollection).Families
$fonts | Select-Object Name | Sort-Object Name

# Search for a specific font
$fonts | Where-Object { $_.Name -like "*Arial*" } | Select-Object Name
```

On Windows, the most convenient method is the **Help → Font List** menu inside the OpenSCAD application — it shows every available font with its exact name string.

**macOS (bash):**

```bash
fc-list | sort
# or
system_profiler SPFontsDataType | grep "Full Name" | sort
```

### Classroom-Safe Fonts (Available on Most Linux Systems)

These fonts are widely pre-installed and safe to use in code you'll share with classmates:

- `Liberation Sans` — clean, modern sans-serif, compatible proportionally with Arial
- `Liberation Mono` — monospaced, excellent for part numbers and code
- `DejaVu Serif` — serif font with good contrast for labels

If OpenSCAD can't find the font you specified, it prints `WARNING: No match for requested font family` in the console. If your text looks wrong or uses a different font than intended, look for this warning.

---

## Step 3 — Font-Agnostic Code Pattern

### Define Your Font Once

Instead of hardcoding a font name at every text call, define it once as a constant at the top of your file. This way, switching fonts is a one-line change, and the font choice is clearly documented.

```openscad
// Define font choice once at the top — comment/uncomment for your OS
LABEL_FONT = "Liberation Sans:style=Bold";   // Linux
// LABEL_FONT = "DejaVu Sans:style=Bold";    // Linux alternative
// LABEL_FONT = "Arial:style=Bold";          // Windows / macOS
// LABEL_FONT = "Helvetica:style=Bold";      // macOS

module label(txt, size=8) {
  text(txt, font=LABEL_FONT, size=size, halign="center", valign="center");
}

module embossed_plate(message, plate_w=80, plate_d=15, plate_h=5,
                      text_size=8, relief=1.5) {
  cube([plate_w, plate_d, plate_h]);
  translate([plate_w/2, plate_d/2, plate_h])
    linear_extrude(height=relief)
      label(message, size=text_size);
}

embossed_plate("FRONT");
translate([0, 20, 0]) embossed_plate("BACK");
translate([0, 40, 0]) embossed_plate("LEFT");
```

---

## Step 4 — Text Sizing: The Cap-Height Model

### How the `size` Parameter Works

The `size` parameter in `text()` sets the **cap height** — the height of a capital letter in millimeters. This is not the total height of the text block; lowercase letters with descenders (g, p, q, y) extend further below the baseline.

Useful rules of thumb:

- Total text block height ≈ `size × 1.25` (to include descenders)
- Width of a capital letter ≈ `size × 0.65` to `size × 0.75`
- Total width of an all-caps string ≈ `size × 0.65 × character_count`

These are approximations — the exact values depend on the specific font.

### Auto-Fitting Text to a Container

When you need text to fill a specific width and height automatically, this module computes the right size:

```openscad
module fitted_text(txt, container_w, container_h,
                   font="Liberation Sans:style=Bold") {
  char_count  = len(txt);
  size_by_w   = container_w / (char_count * 0.68);  // size that fills width
  size_by_h   = container_h * 0.75;                  // size that fills height
  fitted_size = min(size_by_w, size_by_h);            // use whichever is smaller

  echo(str("Fitted text size for '", txt, "': ", fitted_size, "mm"));

  text(txt, size=fitted_size, font=font,
       halign="center", valign="center");
}

// These labels auto-size to fit their containers
difference() {
  cube([60, 12, 5]);
  translate([30, 6, 5 - 0.8])
    linear_extrude(height=1)
      fitted_text("HELLO", 60, 12);
}

translate([0, 20, 0]) {
  cube([60, 12, 5]);
  translate([30, 6, 5])
    linear_extrude(height=1.5)
      fitted_text("WORLD", 60, 12);
}
```

---

## Step 5 — String Functions

### Building Labels Dynamically

The `str()` function converts any value to its string representation and concatenates multiple values into a single string. This is how you create part numbers, serial numbers, and version stamps programmatically.

```openscad
// str() — convert values to strings and concatenate
part_id = str("PART-", 2026, "-", 42);
echo(part_id);   // PART-2026-42

// len() — length of a string or list
name = "OpenSCAD";
echo(len(name));   // 8

// search() — find the position of a character in a string
// Returns a list; [[4]] means found at index 4
echo(search("S", "OpenSCAD"));   // [[4]]

// substr() — extract a substring
// substr(string, start_index, length)
full = "BATCH-001";
batch  = substr(full, 0, 5);   // "BATCH"
number = substr(full, 6, 3);   // "001"
echo(batch, number);
```

### Auto-Generating Serial Numbers

```openscad
// Generate 5 parts with serial numbers SN-01 through SN-05
for (i = [1:5]) {
  serial = str("SN-", i < 10 ? "0" : "", i);   // zero-pad single digits
  translate([i * 35, 0, 0]) {
    cube([30, 12, 4]);
    translate([15, 6, 4])
      linear_extrude(1.5)
        text(serial, size=5, font="Liberation Sans:style=Bold",
             halign="center", valign="center");
  }
}
```

---

## Step 6 — `let()` for Scoped Variables

### What `let()` Does

In Lesson 3 you learned that OpenSCAD global variables are resolved at parse time, and that last-assignment wins. `let()` provides a way to declare variables that are scoped to a specific block — they only exist inside the `let()` block and don't affect global scope.

`let()` is useful when you need intermediate calculated values in one place and don't want them polluting the global namespace, or when you want to make a series of dependent calculations explicit within one block.

```openscad
// let() scopes variables to the block they're declared in
let (
  base_w          = 80,
  base_d          = 50,
  plate_height    = 5,
  text_center_x   = base_w / 2,
  text_center_y   = base_d / 2
) {
  cube([base_w, base_d, plate_height]);
  translate([text_center_x, text_center_y, plate_height])
    linear_extrude(2)
      text("v1.0", size=6, halign="center", valign="center");
}
// text_center_x and text_center_y are not accessible outside the let() block
```

---

## Step 7 — A Complete Parametric Label Plate

Here is a production-quality label module that uses every concept from this lesson:

```openscad
// Parametric Label Plate
// Adjust these parameters and run: 3dm build
label_text   = "STORAGE BOX";
label_w      = 80;        // mm — plate width
label_h      = 18;        // mm — plate height
plate_depth  = 3;         // mm — plate thickness
text_depth   = 1.2;       // mm — engraving depth
font_size    = 7;         // mm — cap height of text
corner_r     = 2;         // mm — corner rounding radius

module label_plate(txt, w, h, t, td, fs, cr) {
  difference() {
    // Rounded rectangle base (minkowski creates rounded corners)
    minkowski() {
      cube([w - 2*cr, h - 2*cr, t], center=true);
      cylinder(r=cr, h=0.01, $fn=16);
    }
    // Engraved text, centered
    translate([0, 0, t/2 - td + 0.001])
      linear_extrude(td + 0.001)
        text(txt, size=fs, font="Liberation Sans:style=Bold",
             halign="center", valign="center", $fn=4);
    // Mounting hole for wall attachment
    translate([w/2 - 6, 0, -0.001])
      cylinder(r=1.5, h=t + 0.002, $fn=16);
  }
}

label_plate(label_text, label_w, label_h, plate_depth, text_depth, font_size, corner_r);
```

---

## Step 8 — Automating Multi-Label Generation

Once your label design is parametric, you can generate a whole set of labels automatically — one build command per label variant.

**Linux / macOS (bash):**

```bash
#!/bin/bash
LABELS=("FRONT" "BACK" "LEFT" "RIGHT" "TOP" "BOTTOM")
mkdir -p build/labels

for label in "${LABELS[@]}"; do
  filename=$(echo "$label" | tr '[:upper:]' '[:lower:]')
  output="build/labels/${filename}.stl"
  echo "Generating: $label → $output"
  openscad -D "label_text=\"${label}\"" -o "$output" src/main.scad
  [ $? -eq 0 ] && echo "  OK" || echo "  FAILED"
done
echo "Done. Output: build/labels/"
```

**Windows (PowerShell):**

```powershell
$labels = @("FRONT", "BACK", "LEFT", "RIGHT", "TOP", "BOTTOM")
New-Item -ItemType Directory -Force -Path "build\labels" | Out-Null

foreach ($label in $labels) {
  $filename = $label.ToLower()
  $output   = "build\labels\$filename.stl"
  Write-Host "Generating: $label → $output"
  openscad -D "label_text=`"$label`"" -o $output "src\main.scad"
  if ($LASTEXITCODE -eq 0) { Write-Host "  OK" } else { Write-Host "  FAILED" }
}
Write-Host "Done."
```

**Windows (CMD):**

```cmd
@echo off
mkdir build\labels 2>nul
FOR %%L IN (FRONT BACK LEFT RIGHT TOP BOTTOM) DO (
  echo Generating: %%L
  openscad -D "label_text=\"%%L\"" -o "build\labels\%%L.stl" src\main.scad
  IF %ERRORLEVEL% EQU 0 (echo   OK) ELSE (echo   FAILED)
)
echo Done.
```

---

## Exercises

**Exercise 6.1:** Find the fonts available on your computer using the appropriate command for your OS. List three font names in the exact format required by OpenSCAD's `font=` parameter (e.g., `Liberation Sans:style=Bold`).

**Exercise 6.2:** Create a parametric name plate module where the text is auto-sized to fill 75% of the plate width. Test it with strings of 3, 6, 9, and 12 characters — verify that the text scales correctly and doesn't overflow.

**Exercise 6.3 (Advanced):** Write a shell script that generates 10 identical parts with serial numbers SN-001 through SN-010 embossed on each. Display success or failure for each part and the total file count at the end.

---

## Quiz — Lesson 6 (15 questions)

1. What does `3dm orient` output and when would you use it?
2. What is the difference between embossed text and debossed (engraved) text in 3D printing? How does the OpenSCAD code differ?
3. What does the `size` parameter in `text()` represent specifically? Is it the total height of the text block?
4. What parameter in `text()` controls horizontal alignment, and what are the three main options?
5. What does `str("PART-", 2024, "-", 1)` return?
6. What does `len("OpenSCAD")` return?
7. What is the purpose of `let()` in OpenSCAD, and how does it differ from declaring a global variable?
8. What does setting `$fn=4` do to letters rendered with `text()`?
9. What does `3dm preview` produce and where does the output file go?
10. What is the format for specifying a font style (e.g., bold) in OpenSCAD's `font=` parameter?
11. Explain the depth calculation for debossed text: if a plate is 6 mm tall and you want 1 mm engraving depth, where do you position the `linear_extrude()` call and what height do you give it?
12. What does `substr("BATCH-001", 6, 3)` return?
13. What happens if you use `text()` without wrapping it in `linear_extrude()`?
14. Why is defining the font as a constant at the top of your file (e.g., `LABEL_FONT = "Liberation Sans:style=Bold"`) better than hardcoding it in every `text()` call?
15. Write the OpenSCAD code to create a 50×20×4mm plate with the text "LOT-42" engraved 1.5mm deep, centered on the top face.

---

## Extension Problems (15)

1. Build a parametric serial number generator: accept a prefix string and a starting number, and generate a set of embossed labels with incrementing serial numbers.
2. Create a dynamic version stamp: use `str()` to combine a product name, major version, and minor version, all as separate parameters.
3. Design a 4-up label sheet: four identical labels in a 2×2 grid, using `translate()` and a `for` loop with two variables.
4. Build a two-line label: stack two `text()` calls at different heights. Line 1 is the label text; line 2 is a smaller subtitle.
5. Create a label with a decorative border: use `difference()` to cut a framing slot into the top face of the label plate.
6. Use `3dm orient` on three different models (a flat slab, a tall cylinder, an L-bracket) and document whether you agree with the AI suggestion in each case.
7. Build a "batch tag" system: a module that generates 12 small tags in a row, each with a different serial number from a list.
8. Design a keychain tag: a rounded rectangle with a ring hole, parametric text, and a border around the text.
9. Use `search()` to find the position of a separator character (dash or underscore) in a part-number string. Explain a practical use case for this.
10. Build a "negative space" text plate: a plate with all letters cut completely through, creating a stencil or silhouette effect.
11. Design a parametric drawer label holder: a clip that attaches to the front edge of a drawer and holds a flat label insert.
12. Create a font comparison plate: render the same text string using Liberation Sans, Liberation Mono, and DejaVu Serif side by side on one base plate.
13. Write a screen-reader accessibility guide for the five `3dm` commands. For each command: what it does, expected output, and how to interpret that output without visual reference.
14. Write a module that auto-reduces font size to fit text within a fixed-width container. The module should reduce size in 0.5 mm steps until the estimated width fits.
15. Design a production part-marking system: a jig that holds 10 small labels in a row, each with an incremented part number, ready to print all at once as one STL file.

---

## References and Helpful Resources

[^1]: 3DMake GitHub Repository — Command Reference — https://github.com/tdeck/3dmake

[^2]: OpenSCAD User Manual — Text and Fonts — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub — String functions and text embossing examples
- OpenSCAD Quick Reference — https://programmingwithopenscad.github.io/quick-reference.html — All string function syntax
- CodeSolutions Repository — https://github.com/ProgrammingWithOpenSCAD/CodeSolutions — Worked text embossing examples
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 6 are included below. You do not need to open any additional files._

---

## Appendix A: Parametric Keychain — Extension Project

**Estimated time:** 2–4 hours

### Overview

This extension project applies the text embossing and parametric design skills from Lesson 6 to build something immediately usable: a personalized keychain. The goal is not just to make one keychain — it's to build a _system_ that can produce any variant (different names, sizes, materials) by changing a small set of top-level variables. That's what makes it a professional parametric design rather than a one-off model.

### Learning Objectives

By completing this project, you will:

- Create parametric OpenSCAD modules that accept user inputs as top-level variables
- Implement embossed and debossed text using `linear_extrude()` of 2D text shapes
- Generate and test multiple design variants systematically
- Document design parameters for reproducibility and user customization

### Objective

Create a `keychain.scad` file that adapts to custom text, dimensions, and attachment ring size — all through top-level parameter variables. Anyone with your `.scad` file should be able to produce a custom keychain by changing only the variables at the top of the file.

### Tasks

1. **Create `keychain.scad`** with these top-level parameters at minimum: `name`, `tag_w`, `tag_h`, `tag_thickness`, `text_size`, `ring_d`. Add others as your design requires. Every dimension in the file should trace back to one of these variables.

2. **Implement text** using `linear_extrude()` of a 2D `text()` shape. Add either embossed text (the letters rise above the surface) or debossed text (the letters are engraved into the surface). Embossed text is more durable; debossed text is easier to read when painted or filled with ink.

3. **Produce three size variants** — small (25 mm wide), medium (35 mm wide), large (45 mm wide) — by changing only `tag_w` and `tag_h` proportionally. Export an STL for each and record print time and filament weight.

4. **Test the key ring attachment** by inserting a standard key ring (typically 25–30 mm diameter wire) through the attachment loop. Document what ring diameter fits, and whether the attachment point survives a reasonable tug test.

### Deliverables

- `keychain.scad` — fully parametric source file with all key dimensions as named variables and comments explaining each
- Three STL variant files (small, medium, large)
- Completed student documentation template (Appendix B of this document)
- Print settings log and fit-test report for key ring attachment

---

### Starter Code

Use the minimal keycap example as your starting structure for the shell + emboss pattern. The more advanced examples below show how to add circular text arrangements, multi-line compositions, and font variation.

**Minimal Starting Point:**

```openscad
// Cube Keycap — Structural Reference
// This shows the shell + emboss pattern. Replace with keychain geometry.

keysize    = 18;    // mm — tag size
keyheight  = 12;    // mm — tag thickness
wall       = 1.2;   // mm — shell wall
letter     = "R";   // change to your text
lettersize = 10;    // mm — text size
letteraise = 0.8;   // mm — emboss height above surface

module shell() {
  difference() {
    cube([keysize, keysize, keyheight], center=false);
    translate([wall, wall, wall])
      cube([keysize - 2*wall, keysize - 2*wall, keyheight], center=false);
  }
}

module emboss() {
  translate([keysize/2, keysize/2, keyheight - 0.01])
    linear_extrude(height=letteraise)
      text(letter, size=lettersize, halign="center", valign="center");
}

union() {
  shell();
  emboss();
}
```

---

**Parametric Keychain Nameplate** — use this as your primary starting scaffold:

```openscad
// Customizable Keychain Nameplate
// Change the parameters below to create your own variant.

// ---- Top-Level Parameters (change these) ----
name          = "ALEX";    // text to emboss on the tag
tag_w         = 35;        // mm — tag width
tag_h         = 20;        // mm — tag height (vertical dimension)
tag_thickness = 5;         // mm — tag thickness (Z height)
wall          = 1.2;       // mm — shell wall thickness
text_size     = 12;        // mm — font cap-height
text_raise    = 0.8;       // mm — emboss height above top face
ring_d        = 6;         // mm — key ring hole inner diameter
ring_wall     = 2;         // mm — wall thickness around ring hole

// ---- Derived Values ----
ring_outer_d  = ring_d + 2 * ring_wall;

// Verify ring attachment won't be too thin to print reliably
assert(ring_wall >= 1.2,
  str("ring_wall too thin to print reliably: ", ring_wall, "mm. Minimum: 1.2mm"));

// ---- Shell Module ----
module tag_shell() {
  difference() {
    cube([tag_w, tag_h, tag_thickness]);
    translate([wall, wall, wall])
      cube([tag_w - 2*wall, tag_h - 2*wall, tag_thickness]);  // open top — hollow shell
  }
}

// ---- Text Module ----
module tag_text() {
  translate([tag_w/2, tag_h/2, tag_thickness - 0.01])
    linear_extrude(height=text_raise)
      text(name,
           size=text_size,
           font="Liberation Sans:style=Bold",
           halign="center",
           valign="center",
           $fn=4);   // $fn=4 speeds up preview; use $fn=32 for final render
}

// ---- Key Ring Attachment Loop ----
// A short cylinder projecting from the top edge center with a hole through it.
module ring_attachment() {
  translate([tag_w/2, tag_h + ring_outer_d/2 - 0.001, tag_thickness/2])
    rotate([90, 0, 0])
      difference() {
        cylinder(d=ring_outer_d, h=tag_thickness, center=true, $fn=32);
        cylinder(d=ring_d,       h=tag_thickness + 0.002, center=true, $fn=32);
      }
}

// ---- Assembly ----
union() {
  tag_shell();
  tag_text();
  ring_attachment();
}
```

---

**Advanced Technique: Circular Text Arrangement**

```openscad
// Arrange text in a circle around a center point.
// Useful for medallion-style keychains, badge designs, or decorative borders.

module rotate_text(display_text,
    text_size    = 10,
    distance     = 20,
    rotation_span = 360,
    tilt         = 0)
{
  rotate([0, 0, tilt])
  for (i = [0 : len(display_text) - 1]) {
    rotate([0, 0, -i * rotation_span / len(display_text)])
    translate([0, distance, 0])
      text(display_text[i],
           font="Liberation Sans:style=Bold",
           size=text_size,
           halign="center");
  }
}

// Usage: extrude the circular text arrangement
linear_extrude(height=2)
  rotate_text("MAKER", text_size=12, distance=30, rotation_span=75, tilt=30);
```

---

**Advanced Technique: Multi-Line Text Composition**

```openscad
// Combine multiple text elements at different sizes for a professional nameplate.

module nameplate(name, role, plate_w=120, plate_d=60, plate_h=3) {
  union() {
    // Base plate
    cube([plate_w, plate_d, plate_h], center=true);

    // Main name — large, centered near top
    translate([0, 15, plate_h/2 + 1.5])
      linear_extrude(height=2)
        text(name, size=24, font="Liberation Sans:style=Bold",
             halign="center", valign="center");

    // Role — medium
    translate([0, 0, plate_h/2 + 1.5])
      linear_extrude(height=2)
        text(role, size=14, font="Liberation Sans:style=Regular",
             halign="center", valign="center");
  }
}

nameplate("Alex Chen", "3D Design Engineer");
```

---

**Font Reference: Cross-Platform Options**

The fonts below are widely available. Always fall back gracefully — define your font as a constant at the top of your file so you change it in one place.

```openscad
// Define font as a constant — change here, applies everywhere
BODY_FONT  = "Liberation Sans:style=Bold";    // clean, reliable on all platforms
MONO_FONT  = "Liberation Mono:style=Regular"; // technical/code style
SERIF_FONT = "DejaVu Serif:style=Regular";    // classic, decorative

// Usage
linear_extrude(height=2)
  text("BOLD", size=20, font=BODY_FONT, halign="center");
```

### Assessment Questions

1. How did you use OpenSCAD parameters to enable customization without requiring users to edit code logic?
2. What were the key differences in print time and material usage between your three size variants?
3. How did you test the key ring attachment, and what adjustments did your testing reveal?

---

## Appendix B: Parametric Keychain — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**Date:** \_\_\_\_\_\_\_\_\_\_
**Description:** Design a fully parametric keychain that supports personalization and customization through top-level variables.

---

### Design Concept

- Keychain theme or purpose (personal use, gift, label system, other):
- Design elements (shape, attachment method, text or symbol, any decorative features):
- Parametric strategy — what will be variables, and what will be fixed geometry?

---

### Parametric Variables

List every named variable in your file and what it controls.

| Variable | Default Value | Unit | Purpose / What it affects |
| -------- | :-----------: | :--: | ------------------------- |
|          |               |  mm  |                           |
|          |               |  mm  |                           |
|          |               |  mm  |                           |
|          |               |  mm  |                           |
|          |               |  —   |                           |

---

### Variant Configurations

Document the three variants you produced. Change only size-related variables between variants — text, attachment, and structural relationships should scale automatically.

| Variant | `tag_w` (mm) | `tag_h` (mm) | `text_size` (mm) | Est. print time | Est. filament (g) |
| :-----: | :----------: | :----------: | :--------------: | :-------------: | :---------------: |
|  Small  |              |              |                  |                 |                   |
| Medium  |              |              |                  |                 |                   |
|  Large  |              |              |                  |                 |                   |

---

### Print Settings Used

| Setting            | Value    | Notes |
| ------------------ | -------- | ----- |
| Layer height       |          |       |
| Infill             |          |       |
| Supports           | Yes / No |       |
| Nozzle temperature | °C       |       |
| Bed temperature    | °C       |       |
| Material           |          |       |

---

### Key Ring Attachment Test

| Test                                  | Result           |
| ------------------------------------- | ---------------- |
| Ring diameter tested                  | mm               |
| Did ring fit through attachment loop? | Yes / No / Tight |
| Does the loop survive a firm tug?     | Yes / No         |
| Wall thickness at attachment point    | mm               |
| Any deformation or cracking observed? |                  |

Adjustments needed based on testing:

---

### Print and Assembly Results

For each variant, describe the print result:

**Small variant:**

- Text legibility (clear / readable / hard to read):
- Surface quality:
- Any print issues:

**Medium variant:**

- Text legibility:
- Surface quality:
- Any print issues:

**Large variant:**

- Text legibility:
- Surface quality:
- Any print issues:

---

### Customization Guide

Write this section for a future user who will download your `.scad` file and want to make their own version:

1. **To change the name:** set `name = "YOUR TEXT"` at line \_\_\_.
2. **To change the size:** adjust `tag_w` and `tag_h` proportionally. Recommended ratio: `tag_h = tag_w * 0.57`.
3. **To change the font:** update the `LABEL_FONT` constant at line \_\_\_.
4. **Common customizations:**
   - Smaller text that doesn't overflow: reduce `text_size` until the preview looks right.
   - Different ring size: change `ring_d` to match your key ring's wire diameter + 1 mm clearance.

---

### Reflections

1. Which parameterization decision had the most impact on the usefulness of the final design?

2. How could someone who doesn't know OpenSCAD still customize this design? What instructions would you write for them?

3. What would you add in a future iteration — a second line of text, a logo, a different attachment style?

---

### Attachments Checklist

- [ ] `.scad` file with full parametric structure and comments on all variables
- [ ] Photos of all three printed variants side by side
- [ ] Photos of key ring fit test (ring inserted through attachment loop)
- [ ] Completed variant configuration table
- [ ] Customization guide written for a future user

---

### Teacher Feedback

| Category                                                                                  | Score (0–3) | Notes |
| ----------------------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — keychains print and function; key ring fits                          |             |       |
| Design & Code Quality — fully parametric; all dimensions are variables; code is commented |             |       |
| Documentation — variant table complete; customization guide usable by a stranger          |             |       |
| **Total (0–9)**                                                                           |             |       |

---

## Appendix C: Parametric Keychain — Instructor Reference

### Project Context

This extension project reinforces the core text embossing and parametric design content of Lesson 6. The key educational goal is **parameter-driven design**: every visible dimension should trace back to a named variable, so changing one number updates the entire design proportionally. Students who hardcode numbers (e.g., `translate([35/2, 20/2, 5])` instead of `translate([tag_w/2, tag_h/2, tag_thickness])`) miss the point even if the print looks fine.

### Key Learning Points to Reinforce

**All dimensions must be variables.** A fully parametric design produces a different variant for every combination of input values, without any code changes. If changing `tag_w` from 25 to 45 produces a broken design (text overflow, attachment loop detaches, walls become invalid), the design is not truly parametric.

**The font constant pattern.** Students should define `LABEL_FONT = "Liberation Sans:style=Bold"` at the top of the file and reference it in every `text()` call. This is a direct application of the DRY principle from Lesson 3. Hardcoding font strings in every text call is a common mistake.

**Text overflow is a design failure, not a rendering quirk.** OpenSCAD does not automatically fit text to a container — if `text_size` is too large, the text will extend beyond the tag boundary and produce an illegal geometry when combined with the shell. Students should either add an `assert()` that checks estimated text width, or test each variant in preview before exporting.

**The key ring attachment geometry is the most technically demanding part.** The cylinder that forms the attachment loop must: (1) be large enough for a real key ring wire to fit through, (2) have walls thick enough to print reliably (minimum ~1.2 mm), and (3) connect cleanly to the main tag body. The 0.001 mm overlap in the starter code's `translate()` prevents non-manifold geometry at the junction.

### Constraints (Enforce These)

- All key dimensions (width, height, thickness, text size, ring diameter) must be named variables — no hardcoded numbers in geometry
- At least three variants must be printed, not just rendered
- Key ring attachment must be physically tested, not just visually inspected

### Assessment Notes

**Strong submissions** show: text that scales proportionally with `text_size` as a variable, a ring attachment that has been tested with a real key ring, and a customization guide that actually tells a non-programmer how to make their own version.

**Common weak areas:** Text overflow not detected until printing (add `assert()` or preview check to starter code reminder), attachment loop too thin to be durable (check `ring_wall >= 1.2 mm`), and documentation that describes the final design but doesn't guide future customization.

**Extension opportunity:** Students who finish early can investigate font rendering differences on their platform (Linux vs. macOS vs. Windows font availability), or add a second line of text (a subtitle or date) as a separate variable.

---

## Appendix D: Slicing Settings Quick Reference

_Use this reference when preparing your keychain (or any Lesson 6 design) for printing. Find your slicer and printer below. Recommended settings for most keychain prints: 0.20 mm layer height, 20% infill, no supports._

---

### D1 — PrusaSlicer (Prusa Printers)

#### Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                          |
| ---------------------- | :----------: | :----: | :-------: | ------------------------------ |
| Quick test / prototype |   0.30 mm    |  10%   | As needed | Draft — fastest, roughest      |
| Standard project       |   0.20 mm    | 15–20% | As needed | Best all-around starting point |
| Functional part        |   0.20 mm    | 30–40% | As needed | Use for parts under stress     |
| Fine detail / display  |   0.15 mm    |  15%   | As needed | Smoother surface; slower       |
| Solid reference part   |   0.20 mm    | 40–50% |  Rarely   | Rarely needed; long print      |

#### Filament Temperature Settings

| Filament | Nozzle Temp | Bed Temp | Notes                                      |
| -------- | :---------: | :------: | ------------------------------------------ |
| PLA      |  200–215°C  | 50–60°C  | Easiest to print; default choice           |
| PETG     |  230–250°C  | 70–85°C  | Use glue stick on PEI bed                  |
| TPU      |  220–240°C  | 30–60°C  | Print at 20–30 mm/s max; direct drive only |
| ABS      |  230–250°C  | 90–110°C | Requires enclosure; ventilate the room     |

_Always check the temperature range printed on your filament spool — it varies by brand._

#### Support Settings Guide

| Overhang Angle | Supports Needed? | Recommendation                |
| :------------: | :--------------: | ----------------------------- |
|     < 45°      |        No        | None                          |
|     45–60°     |      Maybe       | Preview first; add if sagging |
|     > 60°      |       Yes        | Support on build plate only   |
| Bridge < 20 mm |        No        | Bridges usually fine          |
| Bridge > 20 mm |      Maybe       | Preview; consider reorienting |

#### Common Problems and Quick Fixes

| Problem                      | Likely Cause                            | Fix                                       |
| ---------------------------- | --------------------------------------- | ----------------------------------------- |
| Print lifts off bed          | Poor adhesion / warping                 | Add brim; use glue stick; re-level bed    |
| Stringing between parts      | Temp too high / retraction              | Lower temp 5°C; check retraction settings |
| Layer lines very visible     | Layer height too thick                  | Use 0.15 mm or 0.20 mm                    |
| Print takes too long         | Layer height too thin / infill too high | Use 0.30 mm draft; reduce infill          |
| Holes too small              | FDM tolerance — always undersized       | Add 0.2–0.3 mm to hole diameter           |
| Part broke at layer boundary | Load perpendicular to layers            | Reorient so load is parallel to layers    |
| First layer not sticking     | Bed not level                           | Run bed leveling routine                  |
| Spaghetti / print failure    | Overhang without supports               | Add supports or reorient                  |

#### G-code Export Checklist

Before exporting, confirm:

- [ ] Correct printer profile selected
- [ ] Correct filament profile selected
- [ ] Layer height appropriate for use case
- [ ] Infill percentage set
- [ ] Supports enabled if needed
- [ ] Layer preview reviewed (no floating parts; supports where needed)
- [ ] Print time and filament weight noted for your records

_Sources: Prusa Research PrusaSlicer knowledge base (help.prusa3d.com); Hubs FDM guide (hubs.com)_

---

### D2 — Cura / Anycubic i3 Mega

#### Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                          |
| ---------------------- | :----------: | :----: | :-------: | ------------------------------ |
| Quick test / prototype |   0.30 mm    |  10%   | As needed | Draft — fastest, roughest      |
| Standard project       |   0.20 mm    | 15–20% | As needed | Best all-around starting point |
| Functional part        |   0.20 mm    | 30–40% | As needed | Use for parts under stress     |
| Fine detail / display  |   0.15 mm    |  15%   | As needed | Smoother surface; slower       |
| Solid reference part   |   0.20 mm    | 40–50% |  Rarely   | Rarely needed; long print      |

#### Filament Temperature Settings

| Filament | Nozzle Temp | Bed Temp  | Notes                                              |
| -------- | :---------: | :-------: | -------------------------------------------------- |
| PLA      |  200–210°C  |  50–60°C  | Easiest to print; Anycubic default                 |
| PETG     |  230–240°C  |  70–80°C  | Use painter's tape on steel bed                    |
| TPU      |  220–235°C  |  30–50°C  | Reduce speed to 25–30 mm/s                         |
| ABS      |  240–250°C  | 100–110°C | Requires ventilation; enclosed chamber recommended |

#### Support Settings Guide

| Overhang Angle | Supports Needed? | Recommendation                          |
| :------------: | :--------------: | --------------------------------------- |
|     < 45°      |        No        | None                                    |
|     45–60°     |      Maybe       | Preview first; add if sagging           |
|     > 60°      |       Yes        | Tree supports (Cura) — easier to remove |
| Bridge < 20 mm |        No        | Bridges usually fine                    |
| Bridge > 20 mm |      Maybe       | Preview; consider reorienting           |

#### Common Problems and Quick Fixes

| Problem                         | Likely Cause                       | Fix                                    |
| ------------------------------- | ---------------------------------- | -------------------------------------- |
| Print not adhering to steel bed | Poor leveling / worn tape          | Re-level; refresh painter's tape       |
| Filament oozing on travel       | Temperature too high               | Lower temp 5°C; check Z-hop setting    |
| Rough bottom layer              | Bed too close                      | Adjust leveling knob                   |
| Holes too small                 | FDM tolerance — always undersized  | Add 0.2–0.3 mm to hole diameter        |
| Part broke at layer boundary    | Load perpendicular to layers       | Reorient so load is parallel to layers |
| Clogs at nozzle                 | Moisture in filament / debris      | Dry filament; clear nozzle with needle |
| Spaghetti / complete failure    | Bed not leveled or supports missed | Re-level; add supports or reorient     |

#### G-code Export Checklist (Cura)

- [ ] Anycubic i3 Mega printer profile selected
- [ ] Correct filament type and diameter (1.75 mm)
- [ ] Layer height set appropriately
- [ ] Infill percentage set
- [ ] Supports enabled if needed (tree supports preferred)
- [ ] Nozzle and bed temperatures verified
- [ ] Print preview checked (no floating parts)
- [ ] Estimated time and filament weight noted

_Sources: Anycubic official documentation (anycubic.com); Ultimaker Cura guide (ultimaker.com)_

---

### D3 — Bambu Studio / X1 Series

#### Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                                    |
| ---------------------- | :----------: | :----: | :-------: | ---------------------------------------- |
| Quick test / prototype |   0.30 mm    |  10%   | As needed | Draft — use Standard mode                |
| Standard project       |   0.20 mm    | 15–20% | As needed | Best all-around; Bambu default-optimized |
| Functional part        |   0.20 mm    | 30–40% | As needed | Use for load-bearing parts               |
| Fine detail / display  |   0.15 mm    |  15%   | As needed | Bambu achieves excellent detail at speed |
| Solid reference part   |   0.20 mm    | 40–50% |  Rarely   | Modern infill usually sufficient         |

#### Filament Temperature Settings

| Filament       | Nozzle Temp | Bed Temp  | Notes                                              |
| -------------- | :---------: | :-------: | -------------------------------------------------- |
| PLA (standard) |  200–210°C  |  50–60°C  | Fastest print times; Bambu-optimized profiles      |
| PETG           |  230–250°C  |  70–80°C  | Slight cooling fan reduction for layer adhesion    |
| TPU            |  220–240°C  |  20–30°C  | Best quality with Bambu's tuned retraction         |
| ABS            |  240–260°C  | 100–110°C | Requires chamber heating; enclosed AMS recommended |

_Check Bambu's material database for current profile updates — these are dynamically optimized._

#### Support Settings Guide

| Overhang Angle | Supports Needed? | Recommendation                                   |
| :------------: | :--------------: | ------------------------------------------------ |
|     < 45°      |        No        | None                                             |
|     45–60°     |      Maybe       | Auto-supports may activate; accept defaults      |
|     > 60°      |       Yes        | Bambu auto-tree supports; minimal removal effort |
| Bridge < 20 mm |        No        | Excellent bridging on Bambu — no supports needed |
| Bridge > 20 mm |      Maybe       | Often bridgeable; preview before confirming      |

#### Common Problems and Quick Fixes

| Problem                         | Likely Cause                       | Fix                                       |
| ------------------------------- | ---------------------------------- | ----------------------------------------- |
| Nozzle clogging mid-print       | Thermal runaway / wet filament     | Dry filament in AMS; check nozzle temp    |
| Layer splitting                 | Wrong material in AMS slot         | Verify correct material in Bambu Studio   |
| Stringing / blobbing            | Cooling fan too low                | Increase cooling; adjust material profile |
| Print lifts off bed             | Bed leveling drift (rare on Bambu) | Auto-calibrate via Bambu Studio           |
| Holes undersized                | FDM tolerance — always undersized  | Add 0.3–0.4 mm to hole diameter           |
| Part broke at layer boundary    | Load perpendicular to layers       | Reorient so load is parallel to layers    |
| Print aborts unexpectedly       | AMS issue / filament jam           | Clear AMS; verify filament path           |
| Multi-material print misaligned | Nozzle offset miscalibration       | Run auto-calibration in maintenance menu  |

#### G-code Export Checklist (Bambu Studio)

- [ ] Correct printer (X1 / X1E) and hotend selected
- [ ] Filament material and color match actual AMS configuration
- [ ] Layer height optimal for desired quality
- [ ] Infill and supports set appropriately
- [ ] Print preview shows correct color layering (if multi-material)
- [ ] Estimated time and filament weight acceptable
- [ ] Camera enabled for remote monitoring
- [ ] Web upload or USB export ready

_Sources: Bambu Lab documentation (bambulab.com); Bambu Lab Community forums (community.bambulab.com)_
