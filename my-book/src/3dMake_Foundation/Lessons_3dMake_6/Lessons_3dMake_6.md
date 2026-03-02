# Lesson 6 — Practical 3dm Commands and Text Embossing
*[CORRECTED — March 2026 Curriculum Revision]*

---

## Learning Objectives

By the end of this lesson you will be able to:

- Use `text()` to add embossed and debossed labels to 3D models
- Find available fonts on your system and write font-agnostic code
- Size text to fit a specific container using the cap-height model
- Use `3dm` commands for build management and output organization
- Automate multi-variant text label generation in bash, PowerShell, and CMD

---

## Step 1 — The `text()` Function

`text()` creates a 2D shape (a flat outline) of a text string[^2]. You extrude it to make 3D labels.

```openscad
// Basic text — always use linear_extrude to make it 3D
linear_extrude(height=2)
  text("HELLO", size=8, font="Liberation Sans:style=Bold",
       halign="center", valign="center");

// Full parameter reference:
linear_extrude(height=1.5)
  text(
    text    = "3dMake",          // the string to render
    size    = 10,                 // cap height in mm (see Step 3)
    font    = "Liberation Sans",  // font name (see Step 2)
    halign  = "center",           // horizontal: "left", "center", "right"
    valign  = "baseline",         // vertical: "top", "center", "baseline", "bottom"
    spacing = 1.0,                // letter spacing multiplier (1.0 = normal)
    direction = "ltr",            // "ltr" (left-to-right) or "rtl"
    language  = "en",             // ISO language code
    script    = "latin"           // script system
  );

// EMBOSSED text — raised above the surface (text stands up)
difference() {
  cube([80, 15, 5]);    // base plate
}
translate([40, 7.5, 5])
  linear_extrude(height=1.5)
    text("FRONT", size=6, font="Liberation Sans:style=Bold",
         halign="center", valign="center");

// DEBOSSED text — sunken into the surface (text is carved in)
difference() {
  translate([0, 20, 0]) cube([80, 15, 5]);
  translate([40, 27.5, 5 - 0.8])  // start at (height - depth), go slightly through top
    linear_extrude(height=1)
      text("BACK", size=6, font="Liberation Sans:style=Bold",
           halign="center", valign="center");
}
```

---

## Step 2 — Finding Available Fonts

Font availability varies by operating system. Always find the exact font name before using it in your design.

### Linux (bash)
```bash
# List all available fonts
fc-list | sort | less

# Search for a specific font family
fc-list | grep -i "liberation"
fc-list | grep -i "dejavu"

# Get the exact name needed for OpenSCAD (including style suffix)
fc-list --format="%{family}:style=%{style}\n" | grep -i liberation | sort | head -20

# Example output:
# Liberation Mono:style=Bold
# Liberation Sans:style=Bold
# Liberation Sans:style=Regular
# Liberation Serif:style=Regular
```

### Windows (PowerShell)
```powershell
# List all fonts registered in Windows
[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$fonts = (New-Object System.Drawing.Text.InstalledFontCollection).Families
$fonts | Select-Object Name | Sort-Object Name

# Search for a specific font
$fonts | Where-Object { $_.Name -like "*Arial*" } | Select-Object Name

# OpenSCAD on Windows also has a Font List viewer:
# In OpenSCAD: Help menu → Font List
# This shows exact font name strings ready to copy
```

### Windows (CMD)
```cmd
REM CMD cannot enumerate fonts directly. Use PowerShell or the OpenSCAD Font List:
REM OpenSCAD: Help > Font List

REM Alternative: list installed fonts from the registry
REM (output is font file names, not family names — less useful)
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Fonts" | findstr /i "arial"
```

### macOS (bash)
```bash
# List all available fonts
fc-list | sort
# or
system_profiler SPFontsDataType | grep "Full Name" | sort

# Search for a specific font
fc-list | grep -i "helvetica"
```

---

## Step 3 — Font-Agnostic Code Pattern

Different computers may not have the same fonts installed. Write your code so the font is a parameter that can be changed without editing the geometry.

```openscad
// Font-agnostic module pattern
// Change the font once at the top; the rest of the code adapts automatically

// Select one of these based on your OS and available fonts:
LABEL_FONT = "Liberation Sans:style=Bold";   // Linux (common)
// LABEL_FONT = "DejaVu Sans:style=Bold";    // Linux alternative
// LABEL_FONT = "Arial:style=Bold";          // Windows / macOS
// LABEL_FONT = "Helvetica:style=Bold";      // macOS

module label(txt, size=8) {
  text(txt,
       font   = LABEL_FONT,
       size   = size,
       halign = "center",
       valign = "center");
}

module embossed_plate(message, plate_w=80, plate_d=15, plate_h=5,
                       text_size=8, relief=1.5) {
  // Base plate
  cube([plate_w, plate_d, plate_h]);
  // Text raised above the surface
  translate([plate_w/2, plate_d/2, plate_h])
    linear_extrude(height=relief)
      label(message, size=text_size);
}

embossed_plate("FRONT", text_size=8);
translate([0, 20, 0]) embossed_plate("BACK", text_size=8);
```

> **If a font is missing from your system:** OpenSCAD falls back to an internal default font and renders an error to the console. Check the console for `WARNING: No match for requested font family` — this tells you the font name was not found.

---

## Step 4 — Text Sizing and Fitting Text to a Container

In OpenSCAD, `size` is the **cap height** (the height of a capital letter) in millimeters. This is NOT the total line height. A capital "A" at `size=8` will be approximately 8mm tall.

**Rules of thumb:**
- Total text height (including descenders like 'g', 'y') ≈ `size × 1.25`
- A capital letter's width ≈ `size × 0.65` to `size × 0.75` (varies by font and character)
- For all-caps text, width ≈ `size × 0.65 × character_count`

```openscad
// Module to automatically fit text within a bounding box
module fitted_text(txt, container_w, container_h,
                   font="Liberation Sans:style=Bold") {
  char_count  = len(txt);

  // Estimate width-constrained size (all caps, typical width ratio)
  size_by_w   = container_w / (char_count * 0.68);

  // Estimate height-constrained size (leave 20% margin top/bottom)
  size_by_h   = container_h * 0.75;

  fitted_size = min(size_by_w, size_by_h);

  echo(str("Fitted size for '", txt, "': ", fitted_size, "mm"));

  text(txt,
       size   = fitted_size,
       font   = font,
       halign = "center",
       valign = "center");
}

// Example: fit "HELLO" into a 60mm × 12mm container
module demo_plate() {
  difference() {
    cube([60, 12, 5]);
    // Centered debossed text
    translate([30, 6, 5 - 0.8])
      linear_extrude(height=1)
        fitted_text("HELLO", 60, 12);
  }
}

demo_plate();

// Embossed variant (text raised above surface)
translate([0, 20, 0]) {
  cube([60, 12, 5]);
  translate([30, 6, 5])
    linear_extrude(height=1.5)
      fitted_text("WORLD", 60, 12);
}
```

---

## Step 5 — Practical `3dm` Commands Reference

```bash
# BUILD COMMANDS
3dm build                        # build src/main.scad → build/main.stl
3dm build --clean                # delete build/ first, then rebuild
3dm build --watch                # auto-rebuild when src/ files change

# INFORMATION
3dm info                         # bounding box, volume, triangle count
3dm info --file path/to/file.stl # query a specific STL file

# AI DESCRIPTION
3dm info                                # default isometric view
3dm info --view front                   # front view
3dm info --view top,front,isometric     # multiple views

# EXPORTING VARIANTS
# Override parameters for one-off exports
openscad -D "text_label=\"FRONT\"" -o build/front.stl src/main.scad
openscad -D "text_label=\"BACK\""  -o build/back.stl  src/main.scad

# PREVIEW
3dm preview                      # open STL in default viewer
```

---

## Step 6 — Automating Multi-Label Generation

A common task: generate the same model with different text labels (serial numbers, names, part codes).

### Linux / macOS (bash)
```bash
#!/bin/bash
# generate_labels.sh — generate multiple labeled parts from one template

LABELS=("FRONT" "BACK" "LEFT" "RIGHT" "TOP")
mkdir -p build/labels

for label in "${LABELS[@]}"; do
  # Sanitize label for filename (lowercase, replace spaces with underscores)
  filename=$(echo "$label" | tr '[:upper:]' '[:lower:]' | tr ' ' '_')
  output="build/labels/${filename}.stl"

  echo "Generating: $label → $output"
  openscad -D "text_label=\"${label}\"" \
           -o "$output" \
           src/main.scad

  if [ $? -eq 0 ]; then
    size=$(stat -c%s "$output")
    echo "  OK: ${size} bytes"
  else
    echo "  FAILED"
  fi
done

echo "Done. Output: build/labels/"
```

### Windows (PowerShell)
```powershell
# generate_labels.ps1 — multi-label generation for Windows

$labels = @("FRONT", "BACK", "LEFT", "RIGHT", "TOP")
New-Item -ItemType Directory -Force -Path "build\labels" | Out-Null

foreach ($label in $labels) {
    $filename = $label.ToLower() -replace ' ', '_'
    $output   = "build\labels\$filename.stl"

    Write-Host "Generating: $label → $output"

    # Note: string parameters require escaped quotes inside -D
    $dParam = "text_label=`"$label`""
    openscad -D $dParam -o $output "src\main.scad"

    if ($LASTEXITCODE -eq 0) {
        $size = (Get-Item $output).Length
        Write-Host "  OK: $size bytes"
    } else {
        Write-Host "  FAILED"
    }
}

Write-Host "Done. Output: build\labels\"
```

### Windows (CMD)
```cmd
@echo off
REM generate_labels.cmd — multi-label generation in CMD
REM Note: CMD has limited string handling; use PowerShell for production use

mkdir build\labels 2>nul

SET LABELS=FRONT BACK LEFT RIGHT TOP

FOR %%L IN (%LABELS%) DO (
    echo Generating: %%L
    REM CMD cannot easily do lowercase conversion — use literal filenames
    openscad -D "text_label=\"%%L\"" -o "build\labels\%%L.stl" src\main.scad
    IF %ERRORLEVEL% EQU 0 (echo   OK) ELSE (echo   FAILED)
)

echo Done.
```

---

## Step 7 — Advanced: Dynamic Labels with `str()`

```openscad
// Dynamically construct text strings in OpenSCAD using str()
// str() concatenates any mix of strings and numbers

part_number = 42;
revision    = "B";
quantity    = 100;

// Build a label: "P/N: 042-B  QTY: 100"
label = str("P/N: ", str(part_number), "-", revision, "  QTY: ", quantity);
echo("Label:", label);

linear_extrude(height=1.5)
  text(label, size=5, font="Liberation Sans", halign="center");

// Serial number generation via loop
translate([0, 20, 0])
for (i = [1:5]) {
  serial = str("SN-", i < 10 ? "0" : "", i);  // SN-01 through SN-05
  translate([i * 30, 0, 0])
    linear_extrude(1.5)
      text(serial, size=4, font="Liberation Sans", halign="center");
}
```

---

## Exercises

**Exercise 6.1:** Find the available fonts on your computer using the appropriate command for your OS. List three font names in the exact format needed for OpenSCAD's `font=` parameter.

**Exercise 6.2:** Create a parametric name plate: a rectangular plate where the text is automatically sized to fill 75% of the plate width. Test with text strings of 3, 6, 9, and 12 characters to verify scaling.

**Exercise 6.3 (Advanced):** Write a script in your preferred shell (bash, PowerShell, or CMD) that generates 10 identical parts with serial numbers SN-001 through SN-010 embossed on each. The script should report success/failure for each part and display the total file count at the end.
# Lesson 6: Practical 3dm Commands and Text Embossing

Estimated time: 90–120 minutes

## Learning Objectives
- Use the full `3dm` command suite: `describe`, `preview`, `orient`, `slice`
- Emboss and engrave text using OpenSCAD's `text()` function with `linear_extrude()`
- Use OpenSCAD string functions: `str()`, `len()`, `search()`, `substr()`
- Apply `let()` for scoped variable declarations
- Build a parametric label-making system

## Materials
- 3dMake project from previous lessons
- Terminal and editor
- Slicer (PrusaSlicer or equivalent)

## Step-by-step Tasks

### 1. Master the 3dm Command Suite

```bash
# Describe your current model using AI analysis (non-visual validation)
3dm info

# Generate a preview image (PNG) of the model
3dm preview

# Suggest optimal print orientation
3dm orient

# Slice the model using your configured slicer settings
3dm slice
```

Quick Reference:

| Command        | What It Does               | Output                           |
|----------------|----------------------------|----------------------------------|
| `3dm build`    | Compile `.scad` → `.stl`   | `build/main.stl`                 |
| `3dm info` | AI geometry description    | Console text                     |
| `3dm preview`  | Render model to PNG image  | `build/preview.png`              |
| `3dm orient`   | Suggest print orientation  | Console text with recommendation |
| `3dm slice`    | Call slicer on current STL | G-code file                      |

Note: `3dm info` and `3dm orient` both use the AI backend configured in your `3dmake.toml`.[^1]

### 2. Emboss Text with text() and linear_extrude()

```openscad
// Basic text emboss (text raised above a base). See [^2] for more on text and fonts.
module embossed_label(label_text, font_size=8, depth=1.5) {
  linear_extrude(height=depth) {
    text(label_text,
         size=font_size,
         font="Liberation Sans:style=Bold",
         halign="center",
         valign="center",
         $fn=4   // $fn affects curve resolution on letters
    );
  }
}

// Base plate with embossed text
difference() {
  cube([60, 20, 5], center=true);
  translate([0, 0, 4])
    embossed_label("HELLO", font_size=8, depth=2);  // cuts 2mm into plate (engrave)
}

// OR: emboss (text proud of surface)
union() {
  cube([60, 20, 3], center=true);
  translate([0, 0, 3])
    embossed_label("HELLO", font_size=8, depth=1.5);
}
```

### 3. Use String Functions

```openscad
// str() - convert and concatenate values into strings
part_id = str("PART-", 2026, "-", 42);
echo(part_id);  // PART-2026-42

// len() - length of a string or list
name = "OpenSCAD";
echo(len(name));  // 8

// search() - find a character's position
echo(search("S", "OpenSCAD"));  // [[4]]

// substr() - extract substring
full = "BATCH-001";
batch = substr(full, 0, 5);   // "BATCH"
number = substr(full, 6, 3);  // "001"
echo(batch, number);
```

### 4. Use let() for Scoped Variables

```openscad
// let() scopes variables to a block — they don't pollute the global namespace
let (
  base_w = 80,
  base_d = 50,
  text_offset_z = 5
) {
  cube([base_w, base_d, text_offset_z]);
  translate([base_w/2, base_d/2, text_offset_z])
    linear_extrude(2) text("v1.0", size=6, halign="center", valign="center");
}
```

### 5. Build a Parametric Label Maker

```openscad
// Parametric label: all dimensions and content are parameters
label_text   = "STORAGE BOX";
label_w      = 80;
label_h      = 18;
plate_depth  = 3;
text_depth   = 1.2;
font_size    = 7;
corner_r     = 2;

module label_plate(txt, w, h, t, td, fs, cr) {
  difference() {
    // Rounded base plate
    minkowski() {
      cube([w - 2*cr, h - 2*cr, t], center=true);
      cylinder(r=cr, h=0.01, $fn=16);
    }
    // Engraved text
    translate([0, 0, t/2 - td + 0.001])
      linear_extrude(td + 0.001)
        text(txt, size=fs, font="Liberation Sans:style=Bold",
             halign="center", valign="center", $fn=4);
    // Mounting hole
    translate([w/2 - 6, 0, -0.001])
      cylinder(r=1.5, h=t + 0.002, $fn=16);
  }
}

label_plate(label_text, label_w, label_h, plate_depth, text_depth, font_size, corner_r);
```

### Checkpoint
- After step 1: All four commands run without error and produce expected output.
- After step 2: `3dm build` produces an STL with readable text in the slicer preview.
- After step 5: Your label plate shows the text correctly positioned and engraved.

## Font Handling

OpenSCAD accesses system fonts. Use `fontconfig` syntax for precise control:

```openscad
// Font specification format: "FontName:style=StyleName"
text("Hello", font="Liberation Sans:style=Bold");
text("Hello", font="Liberation Mono:style=Regular");
text("Hello", font="DejaVu Serif:style=Italic");

// List available fonts from the OpenSCAD Help menu > Font List
// Or from terminal (Linux):
// fc-list | grep -i "liberation"
```

Common classroom-safe fonts (widely available on Linux):
- `Liberation Sans` — clean, readable sans-serif (Arial-compatible)
- `Liberation Mono` — monospace (good for part numbers)
- `DejaVu Serif` — serif option

## Quiz — Lesson 3dMake.6 (15 questions)

1. What does `3dm info` do?
2. What does `3dm orient` output, and when would you use it?
3. What is the difference between embossed text and engraved text in 3D printing?
4. What parameter in `text()` controls horizontal alignment?
5. What does `str("PART-", 2024, "-", 1)` return?
6. What does `len("OpenSCAD")` return?
7. What is the purpose of `let()` in OpenSCAD?
8. What does `$fn=4` do to letters rendered with `text()`?
9. True or False: `3dm slice` compiles your `.scad` file before slicing.
10. What font specification format does OpenSCAD use?
11. Explain the difference between `halign="left"` and `halign="center"` in the `text()` function and describe when you would use each.
12. What does `substr("BATCH-001", 6, 3)` return?
13. Describe the role of `linear_extrude()` when used with `text()`. What would happen if you omitted it?
14. Write the OpenSCAD code to engrave the text "LOT-42" into a 50×20×4 mm base plate, centered, with 1.5 mm engraving depth.
15. What is the difference between scoped variables declared with `let()` and top-level global variables in an OpenSCAD file?

## Extension Problems (15)

1. Build a parametric serial number generator: accept a prefix string and a number, concatenate them with `str()`, and emboss the result onto a label plate.
2. Create a dynamic version label: use `str()` to combine a product name and a version number, where both are top-level parameters.
3. Design a 4-up label sheet: 4 identical labels arranged in a 2×2 grid using `translate()` and a `for` loop.
4. Build a multi-line label system: stack two `text()` calls at different Z heights to create a two-line label.
5. Create a label with a decorative border using `difference()` to cut a frame outline around the text.
6. Use `3dm orient` on three different models (flat slab, tall cylinder, L-bracket) and document whether the AI orientation suggestion agrees with your own analysis.
7. Build a "batch tag" system: a module that generates different serial numbers from a list, placing each on a separate small tag in a row.
8. Design a keychain tag: a rounded rectangle with a hole for a ring, parametric text, and two mounting ridges.
9. Use `search()` to find the position of a dash character in a part-number string. Write the code and explain why this might be useful.
10. Build a "negative space" text plate: instead of engraving text, create a plate with all letters cut completely through (silhouette/stencil style).
11. Design a parametric drawer label holder: a clip that slides over the edge of a drawer and holds a label card. Make all dimensions parameters.
12. Create a font comparison tool: render the same text string in Liberation Sans, Liberation Mono, and DejaVu Serif side by side on one plate.
13. Build a screen-reader accessibility guide for the five `3dm` commands taught in this lesson. For each command, document: the command name, what it does, expected output, and how to interpret the output without visual reference.
14. Write a parametric module that auto-sizes the font: given a fixed label width and a string, reduce the font size until the text fits within the width.
15. Create a part-marking system for a small production batch: design a jig that holds 10 labels in a row, each with an incremented part number, ready to print all at once.

## References and Helpful Resources

[^1]: 3DMake GitHub Repository — Command Reference. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake). See README for full list of available commands.

[^2]: OpenSCAD User Manual — Text and Fonts. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — String functions and text embossing examples
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — All string function syntax
- [3DMake Terminal Quickstart Guide](../../assets/3dMake_Foundation/3dmake-setup-guide.md)
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked text embossing examples
