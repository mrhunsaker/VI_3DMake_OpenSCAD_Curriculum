# TECHNICAL REFERENCE
## Parametric 3D Fabrication Systems  
### OpenSCAD • 3dMake • PowerShell • Command Prompt • Git Bash

---

# PART I — SYSTEMS ARCHITECTURE

## 1.1 Digital Fabrication Pipeline

```
Source (.scad)
    ↓
OpenSCAD Engine
    ↓
STL (Mesh Geometry)
    ↓
Slicer
    ↓
G-code
    ↓
FDM Printer Firmware
    ↓
Physical Object
```

Automation Overlay:

```
CLI -> Script -> Build Directory -> Version Control -> Reproducible Artifact
```

---

# PART II — OPENSCAD PROFESSIONAL MODELING REFERENCE

## 2.1 Language Architecture

OpenSCAD is:

- Declarative
- CSG-based
- Deterministic
- Single-pass evaluation
- Non-interactive

Implication:
Models must be architected intentionally.

---

## 2.2 Advanced Geometry Techniques

### 2.2.1 Transform Stack Order

Transformations apply from inside outward.

```openscad
translate([10,0,0])
    rotate([0,0,45])
        cube(10);
```

Order matters.

---

### 2.2.2 Hull()

Creates convex hull of objects.

```openscad
hull() {
    translate([0,0,0]) sphere(5);
    translate([20,0,0]) sphere(5);
}
```

---

### 2.2.3 Minkowski()

Expands object by shape kernel.

```openscad
minkowski() {
    cube([10,10,10]);
    sphere(1);
}
```

Warning:
Computationally expensive.

---

### 2.2.4 Linear and Rotational Extrusion

```openscad
linear_extrude(height=10)
    square(5);

rotate_extrude()
    translate([10,0,0])
        circle(5);
```

---

### 2.2.5 Projection

```openscad
projection(cut=true)
    sphere(10);
```

---

## 2.3 CLI Operation of OpenSCAD

### Render STL (All shells)

```bash
openscad -o output.stl input.scad
```

### Specify Variables via CLI

```bash
openscad -D width=50 -o model.stl model.scad
```

---

# PART III — 3DMAKE PROFESSIONAL USAGE

## 3.1 3dMake Overview

3dMake automates model generation and batch workflows.

Core capabilities:

- Batch STL generation
- File processing pipelines
- Integration with OpenSCAD CLI
- Script-driven builds

Repository:
https://github.com/tdeck/3dmake

---

## 3.2 Example Automated Pipeline (PowerShell)

```powershell
New-Item -ItemType Directory -Force build
openscad -D width=40 -o build/model.stl src/model.scad
if ($LASTEXITCODE -ne 0) { exit 1 }
```

---

## 3.3 Batch Processing (cmd.exe)

```cmd
for %%f in (src\*.scad) do openscad -o build\%%~nf.stl %%f
```

---

## 3.4 Batch Processing (Git Bash)

```bash
for f in src/*.scad; do
  openscad -o build/$(basename "$f" .scad).stl "$f"
done
```

---

# PART IV — WINDOWS COMMAND PROMPT (CMD.EXE) FULL REFERENCE

## 4.1 cmd Architecture

- Text-based
- Legacy DOS-compatible syntax
- String-based (not object-based)

Executable:
```
C:\Windows\System32\cmd.exe
```

---

## 4.2 File System Operations

### List Files

```cmd
dir
```

### Change Directory

```cmd
cd builds
```

### Create Directory

```cmd
mkdir build
```

### Remove Directory

```cmd
rmdir /s /q build
```

---

## 4.3 Running Programs

```cmd
openscad.exe -o model.stl model.scad
```

---

## 4.4 PATH Inspection

```cmd
echo %PATH%
```

---

## 4.5 Temporary Environment Variables

```cmd
set MYVAR=value
```

---

## 4.6 Exit Codes

```cmd
echo %ERRORLEVEL%
```

Conditional:

```cmd
if %ERRORLEVEL% NEQ 0 echo Build failed
```

---

## 4.7 Batch Files (.bat)

Example build.bat:

```cmd
@echo off
mkdir build
openscad -o build\model.stl src\model.scad
if %ERRORLEVEL% NEQ 0 exit /b 1
```

---

# PART V — POWERSHELL PROFESSIONAL REFERENCE

## 5.1 Architecture

- Object-based pipeline
- .NET-backed
- Strong scripting support

---

## 5.2 Execution Policy

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 5.3 Structured Error Handling

```powershell
try {
    openscad -o model.stl model.scad
}
catch {
    Write-Host "Failure"
}
```

---

# PART VI — GIT BASH (UNIX-LIKE SHELL)

## 6.1 POSIX-Compatible Commands

```bash
ls
pwd
mkdir
rm -rf build
```

---

## 6.2 Shell Variables

```bash
VAR=value
echo $VAR
```

---

# PART VII — ADVANCED TROUBLESHOOTING COMPENDIUM

---

# A. OpenSCAD Failures

## A.1 Segmentation Fault

Cause:
- Deep Minkowski
- Memory exhaustion

Fix:
- Reduce $fn
- Simplify geometry

---

## A.2 Empty STL Output

Cause:
- Geometry evaluates to null

Diagnosis:
Add temporary primitive to confirm render pipeline.

---

## A.3 Boolean Artifacts

Cause:
- Coplanar faces

Fix:
- Add small offsets (0.01mm)

---

## A.4 Syntax Errors

### Missing Semicolons

Cause:
```openscad
cube([10,10,10])  // Missing semicolon
```

Fix:
```openscad
cube([10,10,10]);
```

---

### Unmatched Brackets

Common errors:
- `{ }` curly brackets
- `[ ]` square brackets
- `( )` parentheses

Diagnosis:
Check error line number in console.

---

### Comment Syntax Errors

Invalid multiline comment:
```openscad
/* Comment
// Still in comment
*/
```

Single-line comments use `//`
Multiline comments use `/* */`

---

## A.5 Logical Operator Errors

### && (AND) Usage

```openscad
if (x > 5 && y < 10) {
    cube([10,10,10]);
}
```

### || (OR) Usage

```openscad
if (x > 5 || y < 10) {
    cube([10,10,10]);
}
```

Missing parentheses can cause evaluation errors.

---

## A.6 $fn Performance Issues

Cause:
- Excessive fragment count

Example:
```openscad
$fn = 500;  // Too high
sphere(5);
```

Fix:
```openscad
$fn = 50;   // Sufficient for most cases
sphere(5);
```

---

# B. 3dMake Failures

## B.1 Command Not Found

Verify:

```cmd
where openscad
```

Or check 3dm:

```cmd
where 3dm
```

---

## B.2 Silent Failure

Check exit code:

```cmd
echo %ERRORLEVEL%
```

---

## B.3 3dm build Failures

Common causes:
- Source file not found
- Syntax errors in .scad
- OpenSCAD not in PATH

Diagnosis:
```bash
3dm build --verbose
```

---

## B.4 3dm info Not Working

Requirements:
- Valid STL file
- Network connection (for AI service)

Check:
```bash
3dm info
```

If info works but describe doesn't, check network.

---

# C. Command Line Lesson Specific Failures

## C.1 "Access is denied"

Cause:
- Insufficient privileges

Fix:
Run as Administrator.

---

## C.2 Incorrect Variable Expansion in Loop

In batch files use:

```
%%f
```

In interactive shell use:

```
%f
```

---

# D. PowerShell-Specific Failures

## D.1 Script Not Running

Fix:

```powershell
Set-ExecutionPolicy RemoteSigned
```

---

## D.2 Command Returns But File Not Created

Check:

```powershell
Test-Path build\model.stl
```

---

# E. Git Bash Issues

## E.1 Windows Path Confusion

Use forward slashes:

```bash
openscad -o build/model.stl src/model.scad
```

---

# F. 3D Printing Mechanical Failures

## F.1 Warping

Solutions:
- Increase bed temp
- Use enclosure
- Add brim

---

## F.2 Under-Extrusion

Cause:
- Clogged nozzle
- Incorrect flow rate

---

## F.3 Dimensional Error

Test with calibration cube.

---

# G. Performance Diagnostics

## G.1 Slow Render

Reduce:
- $fn
- Minkowski usage
- Nested difference()

---

## G.2 High CPU Usage

Expected during full render.

---

## G.3 For Loop Performance

Inefficient:
```openscad
for (i = [0:1000]) {
    translate([i, 0, 0])
        minkowski() { ... }  // Very slow
}
```

Better:
```openscad
for (i = [0:100]) {  // Reduce iterations
    translate([i, 0, 0])
        hull() { ... }   // Faster than minkowski
}
```

---

## G.4 Hull vs Minkowski Performance

- `hull()` — Fast for convex shapes
- `minkowski()` — Slow but precise

Use hull() when possible.

---

# H. SYSTEM DIAGNOSTIC CHECKLIST

1. Is OpenSCAD in PATH?
2. Does CLI produce STL?
3. Is STL manifold?
4. Does slicer preview correctly?
5. Is G-code generated?
6. Does printer firmware accept G-code?
7. Is first layer adhering?
8. Are dimensions within tolerance?
9. Are all brackets matched?
10. Are comments properly closed?
11. Is $fn set reasonably?
12. Are transform operations in correct order?

---

# J. EDITOR AND IDE TROUBLESHOOTING

## J.1 VS Code OpenSCAD Extension Issues

Symptom:
- No syntax highlighting

Fix:
1. Install "OpenSCAD" extension
2. Restart VS Code
3. Check file extension is `.scad`

---

## J.2 Notepad++ Syntax Highlighting

Setup:
1. Settings > Style Configurator
2. Select Language: C or C++
3. Apply to `.scad` files

---

## J.3 Indentation Issues

Mixed tabs/spaces:

Fix:
```
Convert tabs to spaces
Set indent to 4 spaces
```

---

## J.4 Screen Reader + Editor Issues

### NVDA with VS Code

Settings:
- Enable "Editor > Accessibility: Support"
- Set "Editor > Render Whitespace": "all"

### Indent Announcement

NVDA:
- Document Formatting > Report line indentation

JAWS:
- Settings Center > Reading > Report Indentation

---

# K. SLICER-SPECIFIC TROUBLESHOOTING

## K.1 PrusaSlicer Import Failures

Symptom:
- STL won't load

Causes:
- Non-manifold geometry
- File corruption
- Incorrect file path

Fix:
```bash
openscad -o model.stl model.scad --check
```

---

## K.2 Cura Slicing Errors

Common:
- Model outside build volume
- Unsupported overhangs

Fix:
- Scale model down
- Enable supports

---

## K.3 Bambu Studio Issues

Plate adhesion:
- Clean build plate
- Increase bed temperature
- Add brim/raft

---

# L. MATERIAL-SPECIFIC FAILURES

## L.1 PLA Printing Issues

### Stringing

Fix:
- Enable retraction
- Lower temperature by 5-10°C

### Warping

- Rare with PLA
- Add brim if occurs

---

## L.2 PETG Challenges

### Stringing

Common with PETG.

Fix:
- Increase retraction distance
- Lower temperature

### Bed Adhesion

Too good — may damage bed.

Use:
- Glue stick as release agent

---

## L.3 TPU (Flexible) Problems

### Under-extrusion

Cause:
- Too fast print speed

Fix:
- Reduce to 20-30 mm/s

### Stringing

Minimal retraction:
- Set to 1-2mm only

---

## L.4 ABS Warping

Major challenge.

Required:
- Heated enclosure
- 100°C+ bed temp
- Large brim

---

# M. MEASUREMENT AND QA FAILURES

## M.1 Caliper Measurement Errors

### Over-tightening

Cause:
- Pressing too hard

Result:
- Part deforms
- Inaccurate reading

Fix:
- Use gentle pressure

---

## M.2 Tolerance Stack-up Issues

Multiple parts don't fit.

Analysis:
```
Part A: +0.15mm error
Part B: +0.12mm error
Total: +0.27mm
```

Fix:
- Adjust design tolerances
- Print test pieces first

---

## M.3 Dimensional Accuracy Check

Print calibration cube:
```openscad
cube([20,20,20]);
```

Measure all dimensions.
Expected: 20.00 ± 0.2mm

---

# I. FULL BUILD VALIDATION SCRIPT (CMD)

```cmd
@echo off
echo Validating environment...
where openscad >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo OpenSCAD not found.
    exit /b 1
)

mkdir build
openscad -o build\model.stl src\model.scad
if %ERRORLEVEL% NEQ 0 (
    echo Build failed.
    exit /b 1
)

echo Build succeeded.
```

---

# N. TEXT EMBOSSING TROUBLESHOOTING

## N.1 Font Not Found

Symptom:
```
WARNING: No match for font family
```

Cause:
- Font name incorrect
- Font not installed

Fix:

Windows (PowerShell):
```powershell
[System.Drawing.Text.InstalledFontCollection]::new().Families | Select-Object Name
```

Linux:
```bash
fc-list | grep -i "font name"
```

---

## N.2 Text Not Visible

Cause:
- Forgot `linear_extrude()`

Wrong:
```openscad
text("HELLO");
```

Correct:
```openscad
linear_extrude(height=2)
    text("HELLO");
```

---

## N.3 Text Size Too Large/Small

Cause:
- Size parameter is cap height in mm

Fix:
```openscad
text("HELLO", size=8);  // 8mm tall letters
```

---

# O. TRANSFORM OPERATION ERRORS

## O.1 Transform Order Confusion

Transforms apply **inside-out**.

Example:
```openscad
translate([10,0,0])    // Applied SECOND
    rotate([0,0,45])    // Applied FIRST
        cube([10,10,10]);
```

Order matters!

---

## O.2 Rotate Angles Wrong

Angles in **degrees**, not radians.

```openscad
rotate([0, 0, 45]);  // 45 degrees
```

---

## O.3 Scale Issues

```openscad
scale([2, 1, 1])  // 2x wider only
    cube([10,10,10]);
```

Result: 20×10×10 cube

---

## O.4 Mirror Confusion

Mirror plane:
```openscad
mirror([1, 0, 0])  // Mirror across YZ plane
    cube([10,10,10]);
```

---

# P. IMPORT AND EXPORT ERRORS

## P.1 Import STL Failed

Cause:
- File path incorrect
- File corrupted

Fix:
```openscad
import("path/to/file.stl");
```

Use forward slashes even on Windows.

---

## P.2 Export Failed

Check:
1. Write permissions
2. Sufficient disk space
3. Valid file path

---

# Q. RANDOMIZATION ISSUES

## Q.1 rands() Not Random

Cause:
- Same seed produces same output

```openscad
vals = rands(0, 100, 10, 42);  // Seed = 42
```

Change seed for different results.

---

## Q.2 Random Position Overlap

Objects placed randomly may overlap.

Need collision detection logic.

---
