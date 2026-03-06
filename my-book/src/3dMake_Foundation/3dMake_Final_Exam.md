# 3dMake Foundation — Final Exam

Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date:

**Total Points: 100 (4 points per problem)**

**Instructions:**

- Answer all 25 questions
- For code errors, identify the specific problem and explain why it's wrong
- For behavioral questions, show your reasoning
- For design problems, explain your approach and why it solves the stated challenge
- You may reference the OpenSCAD documentation and appendices
- All work must be your own

---

## Section 1: Error Detection & Code Analysis (Problems 1–10)

For each code block, identify any errors. If there is an error, explain what's wrong and how to fix it. If the code is correct, state "No error" and explain what the code does.

---

### Problem 1: Primitive Definition Error

```openscad
cube([10, 10, 10], center=true);
sphere(r=5, $fn=16);
cylinder(h=20, r=8);
```

Is there an error in this code? If yes, identify it. If no, explain what this code renders.

**Answer:**

---

### Problem 2: Transform Syntax Error

```openscad
translate([5, 5, 0])
  rotate([0, 45, 0])
    cube([10, 10, 10], center=true);
```

Does this code have a syntax error? Explain what this code does.

**Answer:**

---

### Problem 3: CSG Operation Error

```openscad
cube([20, 20, 20], center=true);
difference() {
  sphere(r=12);
  cylinder(h=30, r=5, center=true);
}
```

What is wrong with this CSG operation? Explain the fix.

**Answer:**

---

### Problem 4: Module Definition Error

```openscad
module bracket(width, height, depth) {
  cube([width, height, depth], center=true);
  translate([width/2 + 2, 0, 0])
    cube([4, height, depth/2], center=true);
}
bracket(20, 15, 10);
```

Is there an error in this module definition or call? Why or why not?

**Answer:**

---

### Problem 5: Parameter & Variable Scoping Error

```openscad
wallthickness = 2;
module hollowcube(size) {
  difference() {
    cube([size, size, size], center=true);
    cube([size - wallthickness, size - wallthickness, size - wallthickness], center=true);
  }
}
hollowcube(20);
```

Will this code work correctly? If not, what is the problem and how would you fix it?

**Answer:**

---

### Problem 6: Loop & Iteration Error

```openscad
for (i = [0:5:20]) {
  translate([i, 0, 0])
    cube([4, 4, 4]);
}
```

Will this code produce 5 cubes? Show the positions and explain why or why not.

**Answer:**

---

### Problem 7: Center Parameter Misunderstanding

```openscad
cube([10, 10, 20], center=false);
sphere(r=5);
```

What is the relationship between these two shapes? Where would the sphere appear relative to the cube?

**Answer:**

---

### Problem 8: Intersection Error

```openscad
intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=8, $fn=32);
}
```

Is there an error? What will this code render?

**Answer:**

---

### Problem 9: Nested Transform Error

```openscad
translate([10, 0, 0])
  rotate([0, 0, 45])
    translate([5, 0, 0])
      cube([5, 5, 5], center=true);
```

Are the transforms applied in the correct order? Trace the final position of the cube.

**Answer:**

---

### Problem 10: Resolution Parameter Error

```openscad
sphere(r=10, $fn=4);
cylinder(h=20, r=8, $fn=3);
cube([10, 10, 10]);
```

Identify the problem(s) with resolution in this code. What will happen when rendered?

**Answer:**

---

## Section 2: Code Behavior & Theory (Problems 11–17)

For each question, show your reasoning. You may draw diagrams if helpful.

---

### Problem 11: Vertex Coordinates

A cube is defined as `cube([10, 10, 20], center=false)`.

**a)** List the XYZ coordinates of all 8 vertices.

**Answer:**

- Vertex 1:
- Vertex 2:
- Vertex 3:
- Vertex 4:
- Vertex 5:
- Vertex 6:
- Vertex 7:
- Vertex 8:

**b)** Now define the SAME cube with `center=true`. List the NEW coordinates of all 8 vertices.

**Answer:**

- Vertex 1:
- Vertex 2:
- Vertex 3:
- Vertex 4:
- Vertex 5:
- Vertex 6:
- Vertex 7:
- Vertex 8:

---

### Problem 12: Sphere Geometry

Explain the difference between `sphere(r=10, $fn=8)` and `sphere(r=10, $fn=128)`.

Which would you use for a prototype and which for final printing? Why?

**Answer:**

---

### Problem 13: Transform Order

Given this code:

```openscad
translate([10, 0, 0])
  rotate([0, 0, 45])
    cube([5, 5, 5], center=true);
```

Does the order matter? What if you swap translate and rotate? Show both final positions.

**Answer:**

---

### Problem 14: Boolean Operation Behavior

You have a solid cube and you want to create a hole through it. Which CSG operation would you use: `union()`, `difference()`, or `intersection()`?

Explain your choice and write pseudocode showing how you'd accomplish this.

**Answer:**

---

### Problem 15: Parametric Design Advantage

Compare these two approaches:

**Approach A:** Hard-coded cube with fixed dimensions

```openscad
cube([10, 10, 20]);
```

**Approach B:** Parametric cube

```openscad
module parametricbox(width, height, depth) {
  cube([width, height, depth], center=true);
}
parametricbox(10, 10, 20);
```

Why is Approach B better for design iteration? Give an example of how you'd use it.

**Answer:**

---

### Problem 16: Scale Transform Behavior

If you apply `scale([2, 1, 0.5])` to a `cube([10, 10, 10], center=true)`, what are the NEW dimensions of the cube?

**Answer — New dimensions:**

Show your calculation:

---

### Problem 17: Library Organization

You've created three useful modules:

- `bracket(width, height, depth)`
- `hollowcube(size, wallthickness)`
- `connectorpin(diameter, height)`

How would you organize these into a reusable library? What file structure would you create and why?

**Answer:**

---

## Section 3: Design & Problem-Solving (Problems 18–25)

These problems test your ability to design solutions, debug real-world issues, and think creatively.

---

### Problem 18: Tolerance Design Challenge

You're designing a snap-fit connector. The male part has a thickness of 2mm. The female slot needs to accommodate this part with enough flexibility to snap but not fall out.

Should the slot be:

- a) Exactly 2mm wide
- b) 2.1mm wide
- c) 1.9mm wide
- d) 2.5mm wide

Explain your choice and the design thinking behind it.

**Answer:**

---

### Problem 19: Design Iteration Problem

You print a keycap with `keysize=12` and the text embossing is too shallow to feel. Your code uses:

```openscad
linear_extrude(height=1)
  text("A", size=8);
```

What parameter(s) would you adjust to make the embossing deeper? Show your new code.

**Answer:**

---

### Problem 20: Error Diagnosis

Your 3dMake build fails with this error: "Geometry is non-manifold." You have this code:

```openscad
difference() {
  cube([20, 20, 20], center=true);
  cylinder(h=30, r=4, center=true);
}
```

Why might this fail? What's the common fix for non-manifold geometry?

**Answer:**

---

### Problem 21: Multi-Part Assembly

You're designing a two-part box (lid + base). The base has dimensions [50, 30, 20]. The lid should sit on top of the base.

Write parametric modules for both parts and show how you'd position them together. Include appropriate positioning logic.

**Answer:**

```openscad
module base(length, width, height) {
  // Your code here
}

module lid(length, width, height) {
  // Your code here
}

// Positioning code here:
```

---

### Problem 22: Optimization Challenge

You have a design that takes 5 minutes to render. You notice you have:

```openscad
sphere(r=10, $fn=256);
cylinder(h=20, r=8, $fn=256);
cube([20, 20, 20]);
```

Which parameter(s) would you reduce to speed up rendering while maintaining acceptable quality for a prototype? Explain your choices.

**Answer:**

---

### Problem 23: Real-World Constraint Problem

A stakeholder requests a custom handle for a tool. They specify:

- Must fit a hand (approximately 80mm long)
- Must accommodate fingers 60mm long inside
- Wall thickness must be at least 3mm for durability
- Should be ergonomic (slightly curved)

Sketch or describe a parametric design for this handle. What parameters would you expose to allow customization?

**Answer:**

---

### Problem 24: Code Reusability Challenge

You've created a single keycap module. Now you need to create a keyboard with 5 keys arranged in a row, spaced 15mm apart.

Write code using a loop that creates 5 keycaps with letters A–E, properly spaced.

> **Hint:** In OpenSCAD, strings are indexed like lists. `"ABCDE"[0]` returns `"A"`, `"ABCDE"[1]` returns `"B"`, and so on. The `len()` function returns the number of characters in a string.

**Answer:**

```openscad
module keycap(letter, keysize=10) {
  // Keycap code here (you can assume this exists)
}

// Your loop code here:
```

---

### Problem 25: Design Thinking & Iteration

You've printed Iteration 1 of a product and measured the results. The wall thickness is 3mm but feels too fragile. In Iteration 2, you increased it to 5mm, and now it feels too rigid and won't flex as intended.

For Iteration 3, what thickness would you try and why? How would you make this decision more scientific/data-driven?

**Answer:**

---

## Bonus Challenge (Optional, +5 points)

Design a parametric model for a custom assistive technology device (e.g., a tactile measuring tool, a custom gripper, an adapted eating utensil, etc.).

- Identify the user's specific need
- Specify the key dimensions and parameters
- Write at least one module with realistic dimensions
- Explain how the design would be tested and iterated

**Answer:**

```openscad
// Your design here:
```

**User Need:**

**Parameters:**

**Testing Plan:**

---

## Scoring Rubric

| Points | Criteria                                                                         |
| ------ | -------------------------------------------------------------------------------- |
| 4      | Correct answer with clear, complete explanation; demonstrates deep understanding |
| 3      | Mostly correct answer; minor gaps in explanation or reasoning                    |
| 2      | Partially correct; shows some understanding but has significant gaps             |
| 1      | Minimal effort; shows limited understanding                                      |
| 0      | No answer or completely incorrect                                                |

**Total Possible: 100 + 5 bonus = 105 points**

---

## References You May Use

- [3dMake Quick Reference](3dMake_Quick_Reference.md)
- [OpenSCAD Cheat Sheet](Lessons_3dMake_2/openscad-cheat-sheet.md)
- [Appendix A: Comprehensive Slicing Guide](Appendix_A_Comprehensive_Slicing_Guide.md)
- [Appendix C: Tolerance Testing & QA Matrix](Appendix_C_Tolerance_QA.md)
- [Appendix D: PowerShell Integration](Appendix_D_PowerShell_Integration.md)

---

_End of Final Exam_

**Submission Instructions:**

1. Answer all 25 questions completely
2. Show your work for calculations and reasoning
3. Include code samples where requested
4. Submit as a PDF with your name and date
5. Scoring will be based on correctness, clarity, and depth of understanding

_Good luck!_

---

---

---

# INSTRUCTOR APPENDIX

### Not for student distribution

---

## Exam Administration Notes

### Sequencing — Problem 20

Problem 20 tests non-manifold geometry diagnosis, which is formally introduced in **Lesson 10**.

- **If administered before Lesson 10 is complete:** Problem 20 is not counted in the passing threshold for Lessons 1–9. Consider adding a notice directing students to skip and return to it after Lesson 10.
- **If administered after all 10 lessons:** No changes needed — the problem is fair game.

---

## Answer Keys & Rubrics

### Problem 20 — Non-Manifold Geometry (Extended Model Answer)

The exam version tests the core concept with a simple case. The extended variant below can be used as an enrichment rubric or for a more advanced cohort. It contains **three non-manifold issues:**

```openscad
// PROBLEM CODE — find and fix all issues
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
```

1. **Co-planar bottom face** — the first cylinder's base is flush with the cube's base (`z=0`).
2. **Co-planar top face** — the second cylinder starts exactly at the cube's top (`z=25`).
3. **Touching faces** — the two side cubes share an exact face (just touching, not overlapping).

**Corrected version:**

```openscad
difference() {
  cube([40, 40, 25]);

  // FIX 1: extend cylinder 0.001 below base AND above top
  translate([10, 10, -0.001])
    cylinder(r=8, h=25.002, $fn=24);

  // FIX 2: extend the top-entry cylinder 0.001 into the solid
  translate([20, 20, 25 - 9.999])
    cylinder(r=5, h=10.001, $fn=24);
}

// FIX 3: overlap the two touching cubes by 0.001 and use explicit union()
union() {
  translate([40, 0, 0])  cube([15.001, 40, 25]);
  translate([55, 0, 0])  cube([15, 40, 25]);
}
```

**Extended rubric (10 points):**

- Identifies all 3 issues: 3 pts
- Fixes issue 1 (co-planar bottom) correctly: 2 pts
- Fixes issue 2 (co-planar top) correctly: 2 pts
- Fixes issue 3 (touching faces) correctly: 2 pts
- Model builds cleanly with no CGAL warnings: 1 pt

---

### Problem 24 — Keycap Loop (Model Answer)

```openscad
letters  = "ABCDE";
keysize  = 10;
key_gap  = 15;

for (i = [0 : len(letters) - 1]) {
  translate([i * (keysize + key_gap), 0, 0])
    keycap(letters[i], keysize);
}
```

**Expected output:** 5 keycaps labeled A, B, C, D, E, evenly spaced in a row.

**Rubric (4 points):**

- Correct `for` with range syntax: 1 pt
- Correct string indexing `letters[i]`: 1 pt
- Correct `translate()` to space keys apart: 1 pt
- All 5 keycaps render without errors: 1 pt

---

## Extension Projects (Optional / Post-Exam)

These projects are not part of the graded exam. Assign as enrichment after students complete all 10 lessons.

---

### Extension A — Recursive Fractal Geometry

Recommended after Lesson 3. Demonstrates recursive OpenSCAD for visual and mathematical interest.

> **Warning:** Level 4+ will take minutes to render — stay at Level ≤ 3.

```openscad
module menger(size=27, level=2) {
  if (level == 0) {
    cube(size, center=true);
  } else {
    s3 = size / 3;
    difference() {
      cube(size, center=true);
      for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
        if ((x==0 ? 1 : 0) + (y==0 ? 1 : 0) + (z==0 ? 1 : 0) >= 2) {
          translate([x*s3, y*s3, z*s3])
            cube(s3 + 0.002, center=true);
        }
      }
    }
    for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
      if (!((x==0?1:0)+(y==0?1:0)+(z==0?1:0) >= 2)) {
        translate([x*s3, y*s3, z*s3])
          menger(s3, level-1);
      }
    }
  }
}

menger(size=27, level=2);  // change level to 0, 1, or 2
```

---

### Extension B — Generative Pattern Arrays

Demonstrates list comprehensions and math functions for artistic/functional array generation.

```openscad
plate_w = 120;
plate_d = 80;
plate_h = 3;

hole_d    = 4;
grid_s    = 8;
wave_amp  = 3;
wave_freq = 0.1;

module perforated_panel() {
  difference() {
    cube([plate_w, plate_d, plate_h]);
    cols = floor(plate_w / grid_s);
    rows = floor(plate_d / grid_s);
    for (cx = [1 : cols - 1]) {
      for (ry = [1 : rows - 1]) {
        x = cx * grid_s;
        y = ry * grid_s;
        wave_val = sin(x * wave_freq * 360) * sin(y * wave_freq * 360);
        d = hole_d + wave_amp * wave_val;
        if (d > 0.5) {
          translate([x, y, -0.001])
            cylinder(d=d, h=plate_h + 0.002, $fn=16);
        }
      }
    }
  }
}

perforated_panel();
```

---

### Extension C — Multi-Platform Build Pipeline

Full build pipeline scripts for all three shell environments.

#### Makefile (Linux/macOS)

```makefile
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
	@for w in $(WIDTHS); do \
	  echo "Building width=$$w..."; \
	  openscad -D "width=$$w" -o "build/variants/main_w$$w.stl" $(SRC); \
	done

archive: build/
	$(eval TS := $(shell date +%Y%m%d_%H%M%S))
	mkdir -p "archives/$(TS)"
	cp $(OUTPUT) "archives/$(TS)/"
	cp $(SRC)    "archives/$(TS)/"
	3dm info > "archives/$(TS)/BUILD_INFO.txt"

test: build/
	@for w in 10 30 80; do \
	  openscad -D "width=$$w" -o "/tmp/test_w$$w.stl" $(SRC) && \
	  echo "  width=$$w: OK" || echo "  width=$$w: FAILED"; \
	done
```

#### PowerShell (Windows)

```powershell
param($Width = 30)

$src    = "src\main.scad"
$output = "build\main.stl"
$widths = @(20, 30, 40, 50, 80)

task init {
    New-Item -Force -ItemType Directory -Path "build","build\variants","build\logs" | Out-Null
}

task build init, {
    exec { openscad -D "width=$Width" -o $output $src }
    exec { 3dm info }
}

task clean {
    Remove-Item -Recurse -Force "build" -ErrorAction SilentlyContinue
}

task variants init, {
    foreach ($w in $widths) {
        exec { openscad -D "width=$w" -o "build\variants\main_w$w.stl" $src }
    }
}

task archive build, {
    $ts  = Get-Date -Format "yyyyMMdd_HHmmss"
    $dir = "archives\$ts"
    New-Item -Force -ItemType Directory -Path $dir | Out-Null
    Copy-Item $output $dir
    Copy-Item $src    $dir
    & 3dm info | Out-File "$dir\BUILD_INFO.txt" -Encoding UTF8
}

task test init, {
    foreach ($w in @(10, 30, 80)) {
        try {
            exec { openscad -D "width=$w" -o "build\test_w$w.stl" $src }
            Write-Host "  width=$w: OK"
        } catch { Write-Warning "  width=$w: FAILED" }
    }
}

task all build, test, archive
```

#### CMD Batch (Windows Legacy)

```cmd
@echo off
SET ACTION=%1
IF "%ACTION%"=="" SET ACTION=all

IF "%ACTION%"=="build"    GOTO :BUILD
IF "%ACTION%"=="clean"    GOTO :CLEAN
IF "%ACTION%"=="variants" GOTO :VARIANTS
IF "%ACTION%"=="archive"  GOTO :ARCHIVE
IF "%ACTION%"=="all"      GOTO :ALL

:ALL
CALL :BUILD_STEP
IF %ERRORLEVEL% NEQ 0 EXIT /b 1
CALL :VARIANTS_STEP
CALL :ARCHIVE_STEP
GOTO :EOF

:BUILD_STEP
mkdir build 2>nul
openscad -o build\main.stl src\main.scad
IF %ERRORLEVEL% NEQ 0 (echo [BUILD] FAILED & EXIT /b 1)
3dm info
EXIT /b 0

:CLEAN
rmdir /s /q build 2>nul
GOTO :EOF

:VARIANTS_STEP
mkdir build\variants 2>nul
FOR %%W IN (20 30 40 50 80) DO (
    openscad -D "width=%%W" -o "build\variants\main_w%%W.stl" src\main.scad
)
EXIT /b 0

:ARCHIVE_STEP
FOR /f "tokens=2 delims==" %%D IN ('wmic os get localdatetime /value') DO SET DT=%%D
SET TS=%DT:~0,8%_%DT:~8,6%
mkdir "archives\%TS%" 2>nul
copy build\main.stl "archives\%TS%\" >nul
copy src\main.scad  "archives\%TS%\" >nul
3dm info >> "archives\%TS%\BUILD_INFO.txt" 2>&1
EXIT /b 0
```

---

## Quick Reference — Shell Equivalents

| Task               | bash (Linux/macOS)                | PowerShell (Windows)                      | CMD (Windows)                           |
| ------------------ | --------------------------------- | ----------------------------------------- | --------------------------------------- |
| Build              | `3dm build`                       | `3dm build`                               | `3dm build`                             |
| Info               | `3dm info`                        | `3dm info`                                | `3dm info`                              |
| Parameter (number) | `-D "width=50"`                   | `-D "width=50"`                           | `-D "width=50"`                         |
| Parameter (string) | `-D 'label="A"'`                  | `-D 'label="A"'`                          | `-D "label=""A"""`                      |
| Loop over list     | `for x in a b c; do ... done`     | `foreach ($x in @(...)) {...}`            | `FOR %%X IN (a b c) DO ...`             |
| Make directory     | `mkdir -p dir`                    | `New-Item -Force -ItemType Directory dir` | `mkdir dir 2>nul`                       |
| Copy file          | `cp src dst`                      | `Copy-Item src dst`                       | `copy src dst`                          |
| Check exit code    | `if [ $? -ne 0 ]`                 | `if ($LASTEXITCODE -ne 0)`                | `IF %ERRORLEVEL% NEQ 0`                 |
| Write to file      | `echo text > file`                | `"text" \| Out-File file`                 | `echo text > file`                      |
| Append to file     | `echo text >> file`               | `"text" \| Add-Content file`              | `echo text >> file`                     |
| Date/time          | `date +%Y%m%d_%H%M%S`             | `Get-Date -Format "yyyyMMdd_HHmmss"`      | `wmic os get localdatetime`             |
| File size (bytes)  | `stat -c%s file`                  | `(Get-Item file).Length`                  | `FOR /F "tokens=4" %%S IN ('dir file')` |
| Watch for changes  | `ls src/*.scad \| entr 3dm build` | (see Lesson 9 watcher)                    | (use PowerShell)                        |
