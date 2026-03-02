[Header 2 ("3dmake_foundation-3dmake_final_exam", [], []) [Str "3dMake Foundation Final Exam"], Para [Str "Name: | Date:"], Para [Str "Total Points: 100 (4 points per problem)"], Para [Str "Instructions:"], BulletList [[Plain [Str "Answer all 25 questions"]], [Plain [Str "For code errors, identify the specific problem and explain why it's wrong"]], [Plain [Str "For behavioral questions, show your reasoning"]], [Plain [Str "For design problems, explain your approach and why it solves the stated challenge"]], [Plain [Str "You may reference the OpenSCAD documentation and appendices"]], [Plain [Str "All work must be your own"]]], Header 3 ("section-1-error-detection--code-analysis-problems-1-10", ["unnumbered", "unlisted"], []) [Str "Section 1: Error Detection & Code Analysis (Problems 1-10)"], Para [Str "For each code block, identify any errors. If there is an error, explain what's wrong and how to fix it. If the code is correct, state \"No error\" and explain what the code does."], Header 4 ("problem-1-primitive-definition-error", ["unnumbered", "unlisted"], []) [Str "Problem 1: Primitive Definition Error"], CodeBlock ("", ["openscad"], []) "cube([10, 10, 10], center=true);
sphere(r=5, $fn=16);
cylinder(h=20, r=8);
", Para [Str "Question: Is there an error in this code? If yes, identify it. If no, explain what this code renders."], Para [Str "Answer:"], Header 4 ("problem-2-transform-syntax-error", ["unnumbered", "unlisted"], []) [Str "Problem 2: Transform Syntax Error"], CodeBlock ("", ["openscad"], []) "translate([5, 5, 0])
  rotate([0, 45, 0])
    cube([10, 10, 10], center=true);
", Para [Str "Question: Does this code have a syntax error? Explain what this code does."], Para [Str "Answer:"], Header 4 ("problem-3-csg-operation-error", ["unnumbered", "unlisted"], []) [Str "Problem 3: CSG Operation Error"], CodeBlock ("", ["openscad"], []) "cube([20, 20, 20], center=true);
difference() {
  sphere(r=12);
  cylinder(h=30, r=5, center=true);
}
", Para [Str "Question: What is wrong with this CSG operation? Explain the fix."], Para [Str "Answer:"], Header 4 ("problem-4-module-definition-error", ["unnumbered", "unlisted"], []) [Str "Problem 4: Module Definition Error"], CodeBlock ("", ["openscad"], []) "module bracket(width, height, depth) {
  cube([width, height, depth], center=true);
  translate([width/2 + 2, 0, 0])
    cube([4, height, depth/2], center=true);
}
bracket(20, 15, 10);
", Para [Str "Question: Is there an error in this module definition or call? Why or why not?"], Para [Str "Answer:"], Header 4 ("problem-5-parameter--variable-scoping-error", ["unnumbered", "unlisted"], []) [Str "Problem 5: Parameter & Variable Scoping Error"], CodeBlock ("", ["openscad"], []) "wallthickness = 2;
module hollowcube(size) {
  difference() {
    cube([size, size, size]);
    cube([size - 2*wallthickness, size - 2*wallthickness, size]);
  }
}
hollowcube(20);
", Para [Str "Question: Is there an error in this module definition? If yes, identify it. If no, explain what this code does."], Para [Str "Answer:"], HorizontalRule, Header 2 ("final-exam--corrections-and-supplementary-scaffolding", ["unnumbered", "unlisted"], []) [Str "Final Exam — Corrections and Supplementary Scaffolding"], HorizontalRule, Header 3 ("exam-administration-notes-instructor", ["unnumbered", "unlisted"], []) [Str "Exam Administration Notes (Instructor)"], Header 4 ("sequencing-fix--problem-20", ["unnumbered", "unlisted"], []) [Str "Sequencing Fix — Problem 20"], Para [Str "Problem 20 tests non-manifold geometry diagnosis, which is formally introduced in ", Strong [Str "Lesson 10"], Str ". If this exam is administered before Lesson 10 is completed, add the following notice:"], BlockQuote [Para [Strong [Str "Problem 20 Note:"], Str " This problem covers content from Lesson 10. If you have not yet completed Lesson 10, skip this problem and return to it after completing that lesson. Problem 20 is not counted in the passing threshold for Lessons 1–9."]], Para [Str "If the exam is administered after all 10 lessons, no change is needed — this problem is fair."], HorizontalRule, Header 4 ("problem-20--non-manifold-diagnosis-corrected-with-rubric", ["unnumbered", "unlisted"], []) [Str "Problem 20 — Non-Manifold Diagnosis (Corrected with Rubric)"], Para [Strong [Str "Original problem:"], Str " Given the following code, identify all non-manifold issues and fix them."], CodeBlock ("", ["openscad"], []) "// PROBLEM CODE — find and fix all issues
difference() {
  cube([40, 40, 25]);
  translate([10, 10, 0])        // NON-MANIFOLD: co-planar bottom face
    cylinder(r=8, h=25, $fn=24);
  translate([20, 20, 25])       // NON-MANIFOLD: co-planar top face
    cylinder(r=5, h=10, $fn=24);
}

// NON-MANIFOLD: these two cubes share a face (just touching, not overlapping)
translate([40, 0, 0])  cube([15, 40, 25]);
translate([55, 0, 0])  cube([15, 40, 25]);
", Para [Strong [Str "Corrected version (model answer):"]], CodeBlock ("", ["openscad"], []) "// CORRECTED — all non-manifold issues fixed

difference() {
  cube([40, 40, 25]);
  // FIX 1: extend cylinder 0.001 below base AND above top
  translate([10, 10, -0.001])
    cylinder(r=8, h=25.002, $fn=24);

  // FIX 2: extend the top-entry cylinder 0.001 into the solid
  translate([20, 20, 25 - 9.999])  // starts 9.999mm from base, cuts through to z=25.001
    cylinder(r=5, h=10.001, $fn=24);
}

// FIX 3: overlap the two touching cubes by 0.001 and use explicit union()
union() {
  translate([40, 0, 0])  cube([15.001, 40, 25]);  // extends 0.001 into next cube
  translate([55, 0, 0])  cube([15, 40, 25]);
}
", Para [Strong [Str "Rubric:"]], BulletList [[Plain [Str "Identifies all 3 issues: 3 points"]], [Plain [Str "Fixes issue 1 (co-planar bottom) correctly: 2 points"]], [Plain [Str "Fixes issue 2 (co-planar top) correctly: 2 points"]], [Plain [Str "Fixes issue 3 (touching faces) correctly: 2 points"]], [Plain [Str "Model builds cleanly with no CGAL warnings: 1 point"]]], HorizontalRule, Header 4 ("problem-24--keycap-loop-corrected-with-scaffold", ["unnumbered", "unlisted"], []) [Str "Problem 24 — Keycap Loop (Corrected with Scaffold)"], Para [Strong [Str "Original problem:"], Str " Write a loop that generates keycaps A–E using string indexing."], Para [Strong [Str "Corrected version (with scaffold for students who haven't seen string indexing):"]], BlockQuote [Para [Strong [Str "Hint:"], Str " In OpenSCAD, strings are indexed like lists. ", Code ("", [], []) "\"ABCDE\"[0]", Str " returns ", Code ("", [], []) "\"A\"", Str ", ", Code ("", [], []) "\"ABCDE\"[1]", Str " returns ", Code ("", [], []) "\"B\"", Str ", and so on. The ", Code ("", [], []) "len()", Str " function returns the number of characters in a string."]], CodeBlock ("", ["openscad"], []) "// Problem 24 Scaffold — do not modify the module; write the loop below

letters   = \"ABCDE\";
keysize   = 18;    // mm — key outer dimension
key_gap   = 2;     // mm — gap between keys

module keycap(letter, size=18) {
  // Base key shape with bevel
  difference() {
    // Outer key body
    hull() {
      cube([size, size, 4]);
      translate([1, 1, 6]) cube([size - 2, size - 2, 0.1]);
    }
    // Legend depression
    translate([size/2, size/2, 5.5])
      linear_extrude(1)
        text(letter, size=8,
             font=\"Liberation Sans:style=Bold\",
             halign=\"center\", valign=\"center\");
  }
}

// ─── Write your solution below this line ─────────────────────────────────────

// EXAMPLE ANSWER:
for (i = [0 : len(letters) - 1]) {
  translate([i * (keysize + key_gap), 0, 0])
    keycap(letters[i], keysize);
}

// ─── End of solution area ─────────────────────────────────────────────────────
", Para [Strong [Str "Expected output:"], Str " 5 keycaps labeled A, B, C, D, E, evenly spaced in a row."], Para [Strong [Str "Rubric:"]], BulletList [[Plain [Str "Correct use of ", Code ("", [], []) "for", Str " with range syntax: 2 points"]], [Plain [Str "Correct string indexing ", Code ("", [], []) "letters[i]", Str ": 3 points"]], [Plain [Str "Correct ", Code ("", [], []) "translate()", Str " to space keys apart: 2 points"]], [Plain [Str "All 5 keycaps render without errors: 3 points"]]], HorizontalRule, Header 3 ("extension-projects--advanced-additions", ["unnumbered", "unlisted"], []) [Str "Extension Projects — Advanced Additions"], Header 4 ("extension-a--recursive-fractal-geometry", ["unnumbered", "unlisted"], []) [Str "Extension A — Recursive Fractal Geometry"], Para [Str "Demonstrates recursive OpenSCAD for visual/mathematical interest. Recommended after Lesson 3."], CodeBlock ("", ["openscad"], []) "// Recursive Menger Sponge (first 3 levels)
// Level 0 = solid cube, Level 1 = 3x3x3 with center removed, etc.
// WARNING: Level 4+ will take minutes to render — stay at Level ≤ 3

function menger_holes(size, level) = [
  // Returns list of hole positions for Menger sponge at given level
  // (implementation via lookup — approximate for illustration)
  for (x=[0:2]) for (y=[0:2]) for (z=[0:2])
    if (
      // Keep corners (exactly 3 odd coordinates) and edges; remove centers
      (x==1 && y==1) || (x==1 && z==1) || (y==1 && z==1)
    )
      [x, y, z]
];

module menger(size=27, level=2) {
  if (level == 0) {
    cube(size, center=true);
  } else {
    s3 = size / 3;
    difference() {
      cube(size, center=true);
      // Remove the 7 center-of-face and center squares
      for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
        // Remove if 2 or more coordinates are 0 (center positions)
        if ((x==0 ? 1 : 0) + (y==0 ? 1 : 0) + (z==0 ? 1 : 0) >= 2) {
          translate([x*s3, y*s3, z*s3])
            cube(s3 + 0.002, center=true);  // +0.002 for clean CSG
        }
      }
    }
    // Recurse: render the 20 remaining sub-cubes
    for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
      if (!((x==0?1:0)+(y==0?1:0)+(z==0?1:0) >= 2)) {
        translate([x*s3, y*s3, z*s3])
          menger(s3, level-1);
      }
    }
  }
}

menger(size=27, level=2);  // ← change level to 0, 1, or 2; 3 is slow
", HorizontalRule, Header 4 ("extension-b--generative-pattern-arrays", ["unnumbered", "unlisted"], []) [Str "Extension B — Generative Pattern Arrays"], Para [Str "Demonstrates list comprehensions and math functions for artistic/functional array generation."], CodeBlock ("", ["openscad"], []) "// Generative perforation pattern using mathematical functions

plate_w = 120;
plate_d = 80;
plate_h = 3;

// Perforation parameters
hole_d    = 4;      // hole diameter
grid_s    = 8;      // grid spacing
wave_amp  = 3;      // wave amplitude for hole size variation
wave_freq = 0.1;    // spatial frequency of the wave

module perforated_panel() {
  difference() {
    cube([plate_w, plate_d, plate_h]);

    // Generate hole positions with variable diameter based on wave function
    cols = floor(plate_w / grid_s);
    rows = floor(plate_d / grid_s);

    for (cx = [1 : cols - 1]) {
      for (ry = [1 : rows - 1]) {
        x = cx * grid_s;
        y = ry * grid_s;

        // Modulate hole size with a 2D sine wave
        wave_val = sin(x * wave_freq * 360) * sin(y * wave_freq * 360);
        d = hole_d + wave_amp * wave_val;

        // Only render holes with positive diameter
        if (d > 0.5) {
          translate([x, y, -0.001])
            cylinder(d=d, h=plate_h + 0.002, $fn=16);
        }
      }
    }
  }
}

perforated_panel();
", HorizontalRule, Header 4 ("extension-c--multi-platform-build-pipeline", ["unnumbered", "unlisted"], []) [Str "Extension C — Multi-Platform Build Pipeline"], Para [Str "Full CI/CD-style pipeline with all three shell environments covered."], Header 5 ("makefile-linuxmacos", ["unnumbered", "unlisted"], []) [Str "Makefile (Linux/macOS)"], CodeBlock ("", ["makefile"], []) "# Makefile — 3dMake build pipeline for Linux/macOS

.PHONY: all build clean variants archive test

SRC     := src/main.scad
OUTPUT  := build/main.stl
WIDTHS  := 20 30 40 50 80

all: build test archive

build: $(OUTPUT)

$(OUTPUT): $(SRC) | build/
	openscad -o $@ $<
	3dm info

build/:
	mkdir -p build build/variants build/logs

clean:
	rm -rf build/

variants: build/
	@for w in $(WIDTHS); do \\
	  echo \"Building width=$$w...\"; \\
	  openscad -D \"width=$$w\" -o \"build/variants/main_w$$w.stl\" $(SRC); \\
	  echo \"  Done: $$?\"; \\
	done

archive: build/
	$(eval TS := $(shell date +%Y%m%d_%H%M%S))
	mkdir -p \"archives/$(TS)\"
	cp $(OUTPUT) \"archives/$(TS)/\"
	cp $(SRC)    \"archives/$(TS)/\"
	3dm info > \"archives/$(TS)/BUILD_INFO.txt\"
	@echo \"Archived: archives/$(TS)\"

test: build/
	@echo \"Testing parameter bounds...\"
	@for w in 10 30 80; do \\
	  openscad -D \"width=$$w\" -o \"/tmp/test_w$$w.stl\" $(SRC) && \\
	  echo \"  width=$$w: OK\" || echo \"  width=$$w: FAILED\"; \\
	done
", HorizontalRule, Header 5 ("powershell-invoke-build-windows", ["unnumbered", "unlisted"], []) [Str "PowerShell Invoke-Build (Windows)"], CodeBlock ("", [""], []) "```powershell
# .build.ps1 — Invoke-Build task file for Windows
# Install: Install-Module -Name InvokeBuild
# Run: Invoke-Build all

param($Width = 30)

$src    = \"src\\main.scad\"
$output = \"build\\main.stl\"
$widths = @(20, 30, 40, 50, 80)

task init {
    New-Item -Force -ItemType Directory -Path \"build\",\"build\\variants\",\"build\\logs\" | Out-Null
}

task build init, {
    exec { openscad -D \"width=$Width\" -o $output $src }
    exec { 3dm info }
}

task clean {
    Remove-Item -Recurse -Force \"build\" -ErrorAction SilentlyContinue
}

task variants init, {
    foreach ($w in $widths) {
        Write-Host \"Building width=$w...\"
        exec { openscad -D \"width=$w\" -o \"build\\variants\\main_w$w.stl\" $src }
    }
}

task archive build, {
    $ts = Get-Date -Format \"yyyyMMdd_HHmmss\"
    $dir = \"archives\\$ts\"
    New-Item -Force -ItemType Directory -Path $dir | Out-Null
    Copy-Item $output $dir
    Copy-Item $src    $dir
    & 3dm info | Out-File \"$dir\\BUILD_INFO.txt\" -Encoding UTF8
    Write-Host \"Archived: $dir\"
}

task test init, {
    foreach ($w in @(10, 30, 80)) {
        Write-Host \"Testing width=$w...\"
        try {
            exec { openscad -D \"width=$w\" -o \"build\\test_w$w.stl\" $src }
            Write-Host \"  OK\"
        } catch {
            Write-Warning \"  FAILED\"
        }
    }
}

task all build, test, archive
```

---

#### CMD Batch Master Script (Windows Legacy)
```cmd
@echo off
REM build_all.cmd — master build pipeline for Windows CMD
REM Usage: build_all.cmd [build|clean|variants|archive|all]

SET ACTION=%1
IF \"%ACTION%\"==\"\" SET ACTION=all

IF \"%ACTION%\"==\"build\"    GOTO :BUILD
IF \"%ACTION%\"==\"clean\"    GOTO :CLEAN
IF \"%ACTION%\"==\"variants\" GOTO :VARIANTS
IF \"%ACTION%\"==\"archive\"  GOTO :ARCHIVE
IF \"%ACTION%\"==\"all\"      GOTO :ALL
ECHO Unknown action: %ACTION%. Use: build, clean, variants, archive, all
EXIT /b 1

:ALL
CALL :BUILD_STEP
IF %ERRORLEVEL% NEQ 0 EXIT /b 1
CALL :VARIANTS_STEP
CALL :ARCHIVE_STEP
GOTO :EOF

:BUILD
CALL :BUILD_STEP
GOTO :EOF

:BUILD_STEP
echo [BUILD] Building src\\main.scad...
mkdir build 2>nul
openscad -o build\\main.stl src\\main.scad
IF %ERRORLEVEL% NEQ 0 (echo [BUILD] FAILED & EXIT /b 1)
3dm info
echo [BUILD] OK
EXIT /b 0

:CLEAN
echo [CLEAN] Removing build directory...
rmdir /s /q build 2>nul
echo [CLEAN] Done
GOTO :EOF

:VARIANTS
CALL :VARIANTS_STEP
GOTO :EOF

:VARIANTS_STEP
echo [VARIANTS] Building parameter variants...
mkdir build\\variants 2>nul
FOR %%W IN (20 30 40 50 80) DO (
    echo   width=%%W
    openscad -D \"width=%%W\" -o \"build\\variants\\main_w%%W.stl\" src\\main.scad
)
echo [VARIANTS] Done
EXIT /b 0

:ARCHIVE
CALL :ARCHIVE_STEP
GOTO :EOF

:ARCHIVE_STEP
FOR /f \"tokens=2 delims==\" %%D IN ('wmic os get localdatetime /value') DO SET DT=%%D
SET TS=%DT:~0,8%_%DT:~8,6%
mkdir \"archives\\%TS%\" 2>nul
copy build\\main.stl \"archives\\%TS%\\\" >nul
copy src\\main.scad  \"archives\\%TS%\\\" >nul
echo Build: %TS% > \"archives\\%TS%\\BUILD_INFO.txt\"
3dm info >> \"archives\\%TS%\\BUILD_INFO.txt\" 2>&1
echo [ARCHIVE] Saved to archives\\%TS%
EXIT /b 0
```

---

## Quick Reference — All Shell Equivalents

| Task               | bash (Linux/macOS)               | PowerShell (Windows)                      | CMD (Windows)                           |
|--------------------|----------------------------------|-------------------------------------------|-----------------------------------------|
| Build              | `3dm build`                      | `3dm build`                               | `3dm build`                             |
| Info               | `3dm info`                       | `3dm info`                                | `3dm info`                              |
| Parameter (number) | `-D \"width=50\"`                  | `-D \"width=50\"`                           | `-D \"width=50\"`                         |
| Parameter (string) | `-D 'label=\"A\"'`                 | `-D 'label=\"A\"'`                          | `-D \"label=\"\"A\"\"\"`                      |
| Loop over list     | `for x in a b c; do ... done`    | `foreach ($x in @(...)) {...}`            | `FOR %%X IN (a b c) DO ...`             |
| Make directory     | `mkdir -p dir`                   | `New-Item -Force -ItemType Directory dir` | `mkdir dir 2>nul`                       |
| Copy file          | `cp src dst`                     | `Copy-Item src dst`                       | `copy src dst`                          |
| Check exit code    | `if [ $? -ne 0 ]`                | `if ($LASTEXITCODE -ne 0)`                | `IF %ERRORLEVEL% NEQ 0`                 |
| Write to file      | `echo text > file`               | `\"text\" | Out-File file`                  | `echo text > file`                      |
| Append to file     | `echo text >> file`              | `\"text\" | Add-Content file`               | `echo text >> file`                     |
| Date/time          | `date +%Y%m%d_%H%M%S`            | `Get-Date -Format \"yyyyMMdd_HHmmss\"`      | `wmic os get localdatetime`             |
| File size (bytes)  | `stat -c%s file`                 | `(Get-Item file).Length`                  | `FOR /F \"tokens=4\" %%S IN ('dir file')` |
| Watch for changes  | `ls src/*.scad | entr 3dm build` | (see Lesson 9 watcher)                    | (use PowerShell)                        |

````
"]