# Back Matter — Complete Reference

Supplementary reference material for *Accessible 3D Printing with OpenSCAD and 3dMake*. These sections are designed for lookup rather than linear reading — consult them as needed throughout the curriculum.

---

## Contents

| Section | Title | Purpose |
|---|---|---|
| [Technical Reference and Troubleshooting](#troubleshooting) | Systems architecture, CLI reference, and fault-by-fault troubleshooting compendium | Diagnose and resolve errors in OpenSCAD, 3dMake, CMD, PowerShell, Git Bash, slicers, and printers |
| [Student Glossary](#student-glossary) | Terms, definitions, and code examples across all curriculum systems | Look up any term encountered in lessons, with syntax examples for each shell |
| [Teacher Glossary](#teacher-glossary) | Pedagogical frameworks, instructional strategies, and assessment rubrics | Instructors: curriculum design, scaffolding, computational thinking, and cross-curricular connections |
| [Further Reading and References](#further-reading) | Scholarly works, official documentation, industry resources, and community links | Continue learning; cite sources; find community support |

---



---

<a id="troubleshooting"></a>

# Technical Reference and Troubleshooting Guide

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
[https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

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


---

<a id="student-glossary"></a>

# Student Glossary — OpenSCAD • 3dMake • 3D Printing • PowerShell • Command Prompt • Git Bash

---

*OpenSCAD • 3dMake • 3D Printing • PowerShell • Command Prompt • Git Bash*

This glossary provides:

- Formal definitions  
- Operational context  
- Cross-system distinctions  
- CLI examples  
- Practical implications in 3D printing workflows  

---

# SECTION I — Additive Manufacturing & Fabrication

## Additive Manufacturing

A manufacturing methodology in which objects are fabricated layer-by-layer from digital models.  
In desktop contexts, this typically refers to FDM (Fused Deposition Modeling).

### Technical Characteristics
- Layer-based deposition
- Toolpath-generated geometry
- STL-to-G-code workflow
- Thermoplastic extrusion (in FDM)

### Workflow Position
OpenSCAD -> STL -> Slicer -> G-code -> Printer -> Physical object

---

## FDM (Fused Deposition Modeling)

A thermoplastic extrusion process in which filament is melted and deposited in sequential layers.

### Critical Variables
- Nozzle temperature
- Bed temperature
- Layer height
- Print speed
- Cooling rate

---

## Layer Height

The vertical thickness of each printed layer.

- Smaller values increase surface fidelity.
- Larger values increase speed.

Example:
- 0.2 mm = standard
- 0.1 mm = high resolution

---

## Infill

Internal structural lattice inside a model.

Typical values:
- 10–20% for visual models
- 40%+ for structural parts

---

## Material Properties

### PLA (Polylactic Acid)

- Easy to print
- Low warping
- Biodegradable
- Not heat-resistant

### PETG

- Stronger than PLA
- Chemical resistant
- Slight flexibility

### TPU (Thermoplastic Polyurethane)

- Flexible
- Rubber-like
- Requires slow printing

### ABS (Acrylonitrile Butadiene Styrene)

- Strong and durable
- Higher temperature
- Requires enclosure
- Prone to warping

---

## Tolerance

Intentional dimensional offset to ensure mechanical fit.

Example:
A 10mm peg may require a 10.2mm hole for clearance.

---

## Manifold (Watertight Model)

A printable model with:
- No self-intersections
- No zero-thickness faces
- No holes in mesh

Non-manifold geometry causes slicer failure.

---

# SECTION II — OpenSCAD (Parametric Modeling)

## OpenSCAD

A script-based solid modeling system using Constructive Solid Geometry (CSG).

Official site:
[https://openscad.org](https://openscad.org)

---

## Constructive Solid Geometry (CSG)

Modeling technique combining primitives using Boolean operations.

---

## Primitive

Basic geometric object.

Examples:

```openscad
cube([10,10,10]);
sphere(5);
cylinder(h=20, d=10);
```

---

## Cone

A tapered cylinder created using different top and bottom diameters.

```openscad
cylinder(h=20, d1=10, d2=0);
```

---

## 2D Shapes

Flat geometry that can be extruded to 3D.

Examples:

```openscad
square([10,10]);
circle(5);
polygon([[0,0], [10,0], [5,10]]);
```

---

## Polygon

Custom 2D shape defined by vertices.

```openscad
polygon(points=[[0,0], [10,0], [10,10], [0,10]]);
```

---

## Text Commands

Create text geometry for embossing or debossing.

```openscad
linear_extrude(height=2)
    text("HELLO", size=10, font="Liberation Sans");
```

---

## Boolean Operations

### union()

Combines shapes.

```openscad
union() {
    cube([10,10,10]);
    sphere(6);
}
```

---

### difference()

Subtracts shapes.

```openscad
difference() {
    cube([20,20,20]);
    cylinder(h=25, d=5);
}
```

---

### intersection()

Keeps overlapping geometry.

```openscad
intersection() {
    sphere(10);
    cube([15,15,15], center=true);
}
```

---

## Transform Operations

### Translate

Move geometry in 3D space.

```openscad
translate([10, 20, 30])
    cube([10,10,10]);
```

---

### Rotate

Rotate geometry around axes.

```openscad
rotate([0, 0, 45])
    cube([10,10,10]);
```

---

### Scale

Resize geometry by multiplier.

```openscad
scale([2, 1, 1])
    cube([10,10,10]);
```

---

### Mirror

Flip geometry across a plane.

```openscad
mirror([1, 0, 0])
    cube([10,10,10]);
```

---

## Advanced Operations

### Hull

Creates convex hull of children objects.

```openscad
hull() {
    sphere(5);
    translate([20,0,0]) sphere(5);
}
```

---

### Minkowski Sum

Expands geometry by rolling one shape around another.

```openscad
minkowski() {
    cube([10,10,10]);
    sphere(2, $fn=12);
}
```

Warning: Computationally expensive.

---

### Linear Extrude

Extends 2D shapes into 3D.

```openscad
linear_extrude(height=10)
    square([10,10]);
```

---

### Offset

Expands or contracts 2D shapes.

```openscad
offset(r=2)
    square([10,10]);
```

---

## Variable

A named parameter used to control geometry.

```openscad
width = 30;
cube([width,10,5]);
```

---

## Parametric Design

Geometry controlled by variables.

Advantages:
- Rapid iteration
- Reusability
- Scalable models

---

## Module

Reusable geometry block.

```openscad
module peg(d, h) {
    cylinder(d=d, h=h);
}

peg(5, 20);
```

---

## Control Structures

### For Loop

Repeat operations.

```openscad
for (i = [0:5]) {
    translate([i*15, 0, 0])
        cube([10,10,10]);
}
```

---

### If Statement

Conditional execution.

```openscad
if (width > 20) {
    cube([width, 10, 10]);
}
```

---

### Else and ElseIf

Extended conditionals.

```openscad
if (width > 20) {
    cube([width, 10, 10]);
} else if (width > 10) {
    cylinder(h=10, d=width);
} else {
    sphere(width/2);
}
```

---

## Echo Function

Print debug information to console.

```openscad
width = 30;
echo("Width is:", width);
```

---

## Random Numbers

Generate random values.

```openscad
rands(min, max, count, seed);

// Example:
positions = rands(0, 100, 5);
```

---

## Import

Load external STL or other files.

```openscad
import("model.stl");
```

---

## $fn (Fragment Number)

Controls circular resolution.

```openscad
$fn = 100;
sphere(10);
```

Higher values increase smoothness and render time.

---

## # (Hash Mark - Debug Modifier)

Highlights geometry in transparent red during preview.

```openscad
#cube([10,10,10]);
```

Used for debugging geometry positions.

---

## Comments

Non-executable text for documentation.

### Single-line Comments

```openscad
// This is a comment
cube([10,10,10]);
```

### Multiline Comments

```openscad
/*
  This is a
  multiline comment
*/
cube([10,10,10]);
```

---

## Logical Operators

### && (And)

Logical AND operator.

```openscad
if (x > 5 && y < 10) {
    cube([10,10,10]);
}
```

### || (Or)

Logical OR operator.

```openscad
if (x > 5 || y < 10) {
    cube([10,10,10]);
}
```

---

## Brackets and Delimiters

### [ ] (Square Brackets)

Used for vectors and arrays.

```openscad
position = [10, 20, 30];
cube([10,10,10]);
```

### { } (Curly Brackets)

Define code blocks.

```openscad
if (x > 5) {
    cube([10,10,10]);
}
```

### < > (Angle Brackets)

Used in some operations and comparisons.

```openscad
if (x < 10 && y > 5) { }
```

---

## Preview vs Render

- F5 = Preview (OpenGL approximation)
- F6 = Render (full CSG evaluation)

CLI equivalent:

```bash
openscad -o model.stl model.scad
```

---

# SECTION III — 3dMake (Automation Tool)

## 3dMake

A command-line tool for automating 3D model generation and processing.

Repository:
[https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

---

## 3dm build

Command to generate STL from OpenSCAD source.

```bash
3dm build
```

Outputs to `build/` directory.

---

## 3dm info

AI-powered geometric description for non-visual validation.

```bash
3dm info --view front
```

---

## Headless Rendering

Running OpenSCAD without GUI.

```bash
openscad -o output.stl input.scad
```

---

## Automated Build Pipeline

Example PowerShell pipeline:

```powershell
openscad -o model.stl model.scad
```

Example Bash:

```bash
openscad -o model.stl model.scad
```

---

# SECTION IV — Command-Line Systems

# CLI (Command-Line Interface)

A text-based interface for interacting with the operating system.

---

# Shell

A program that interprets commands.

Examples:
- PowerShell
- Command Prompt
- Git Bash

---

# PowerShell

Object-oriented Windows shell.

### List Files

```powershell
Get-ChildItem
```

### Change Directory

```powershell
Set-Location Documents
```

### Run Script

```powershell
.\build.ps1
```

### Check Exit Code

```powershell
$LASTEXITCODE
```

---

# Command Prompt (cmd.exe)

Traditional Windows shell.

### List Files

```cmd
dir
```

### Change Directory

```cmd
cd Documents
```

### Run Program

```cmd
openscad.exe -o model.stl model.scad
```

### Check Exit Code

```cmd
echo %ERRORLEVEL%
```

---

# Git Bash

Unix-like shell for Windows.

### List Files

```bash
ls
```

### Change Directory

```bash
cd Documents
```

### Make Directory

```bash
mkdir builds
```

---

# Working Directory

The directory in which commands execute.

### Print Working Directory

```bash
pwd
```

```powershell
Get-Location
```

---

# PATH (Environment Variable)

Tells system where executables are located.

### View PATH (PowerShell)

```powershell
$env:PATH
```

### View PATH (cmd)

```cmd
echo %PATH%
```

---

# Environment Variable

A system-level configuration variable.

### Set Temporarily (PowerShell)

```powershell
$env:TESTVAR="hello"
```

### Set Temporarily (cmd)

```cmd
set TESTVAR=hello
```

---

# Exit Code

Numeric status returned by command.

- 0 = Success
- Non-zero = Error

Example:

```powershell
if ($LASTEXITCODE -ne 0) { Write-Host "Build Failed" }
```

```bash
if [ $? -ne 0 ]; then echo "Build Failed"; fi
```

---

# Pipe

Pass output from one command to another.

```powershell
Get-ChildItem | Select-String ".scad"
```

```bash
ls | grep ".scad"
```

---

# SECTION V — Git & Version Control

## Git

Distributed version control system.

---

## Repository

Tracked project folder.

```bash
git init
```

---

## Commit

Snapshot of changes.

```bash
git add .
git commit -m "Initial model"
```

---

## Branch

Parallel development path.

```bash
git branch feature-peg
git checkout feature-peg
```

---

## Clone

Download remote repository.

```bash
git clone https://github.com/user/project.git
```

---

## Status

Check changes.

```bash
git status
```

---

# SECTION VI — File Formats

## STL

Triangle mesh file used in 3D printing.

Generated by:

```bash
openscad -o model.stl model.scad
```

---

## Slicer Software

Converts STL to G-code.

### PrusaSlicer

Open-source slicer with advanced features.

### Cura

User-friendly slicer by Ultimaker.

### Bambu Studio

Slicer for Bambu Lab printers.

---

## G-code

Machine instructions generated by slicer.

Example fragment:

```gcode
G1 X10 Y10 Z0.2 F1500
```

---

# SECTION VII — Automation Concepts

## Script

File containing executable instructions.

Examples:
- `.ps1`
- `.sh`
- `.scad`

---

## Debugging

Process of finding and fixing errors in code.

Techniques:
- Use `echo()` statements
- Use `#` modifier to highlight geometry
- Test modules independently
- Check console for warnings

---

## Reproducibility

Ability to regenerate identical outputs from identical inputs.

---

## Automation

Using scripts instead of manual steps.

Example build script (PowerShell):

```powershell
openscad -o build/model.stl src/model.scad
```

---

# SECTION VIII — Accessibility & Documentation

## Markdown

Lightweight markup language.

Example:

```markdown
# Heading
- Bullet
```

---

## Semantic Structure

Proper heading hierarchy:

```
# Title
## Section
### Subsection
```

Important for screen readers.

---

## Editor Setup

### VS Code

Recommended extensions:
- OpenSCAD Language Support
- Bracket Pair Colorizer

---

### Notepad++

Lightweight editor with syntax highlighting.

Configure:
- Settings > Preferences > Language
- Select OpenSCAD or C-style syntax

---

## Indentation

Proper code formatting for readability.

```openscad
module example() {
    if (condition) {
        cube([10,10,10]);
    }
}
```

Use consistent spacing (2 or 4 spaces per level).

---

## Screen Reader

Software that reads text aloud.

Examples:
- NVDA
- JAWS
- Orca
- VoiceOver

---

# SECTION IX — Mechanical Design Concepts

## Clearance Fit

Loose fit allowing movement.

## Press Fit

Tight fit requiring force.

## Overhang

Unsupported geometry exceeding safe angle (≈45° for FDM).

---

## Tolerance

Intentional dimensional offset for mechanical fit.

Example:
- Designed hole: 10.2mm
- Designed peg: 10.0mm
- Clearance: 0.2mm

---

## Calipers

Precision measurement tool for verifying printed dimensions.

Types:
- Digital calipers (recommended)
- Vernier calipers

Accuracy: ±0.01mm typical

---

# SECTION X — Advanced Workflow Concepts

## Headless CI Build

Automated rendering using scripts or CI tools.

```bash
openscad -o output.stl model.scad
```

---

## Deterministic Modeling

Same input -> same output every time.

OpenSCAD is deterministic.

---

## Dependency

External program required for workflow.

Example:
- OpenSCAD must be in PATH.

---


---

<a id="teacher-glossary"></a>

# Teacher Glossary — Pedagogical Concepts for 3D Design and Computational Thinking Instruction

---

*Pedagogical Concepts for 3D Design & Computational Thinking Instruction*

This glossary provides instructors with:
- Pedagogical frameworks
- Teaching strategies
- Assessment concepts
- Accessibility guidance
- Curriculum design principles

---

# SECTION I — Computational Thinking Framework

## Computational Thinking

Problem-solving approach using concepts fundamental to computer science.

Core pillars:
- **Decomposition** — Breaking problems into smaller parts
- **Pattern Recognition** — Identifying similarities
- **Abstraction** — Focusing on relevant details
- **Algorithms** — Creating step-by-step solutions

Application in OpenSCAD:
Students decompose complex models into primitive shapes, recognize geometric patterns, abstract parameters, and write algorithmic module definitions.

---

## Decomposition

Breaking a complex problem into manageable sub-problems.

### In 3D Design Context

Example:
A phone stand is decomposed into:
1. Base plate
2. Support angle
3. Lip to hold phone
4. Optional cable slot

Each component becomes a separate module.

---

## Abstraction

Removing unnecessary details to focus on essential features.

### In Parametric Design

```openscad
module bolt(diameter, length) {
    // Abstract "bolt" concept
    // Hide implementation details
}
```

Students learn to identify which details matter and which can be parameterized.

---

## Pattern Recognition

Identifying repeating structures or concepts.

### Examples in OpenSCAD

- Repeated geometric elements (array of holes)
- Similar transformation sequences
- Common parameter relationships

---

## Algorithms

Step-by-step procedures for solving problems.

### In Code

```openscad
// Algorithm for creating gear teeth
for (i = [0:teeth-1]) {
    rotate([0, 0, i * 360/teeth])
        translate([radius, 0, 0])
            tooth_profile();
}
```

---

# SECTION II — Instructional Design Strategies

## Walking Skeleton Approach

Agile development practice: build minimal working version first, then iterate.

### In 3D Design Curriculum

1. Create basic cube
2. Add one parameter
3. Add one transformation
4. Build and verify
5. Repeat

Prevents overwhelming students with complexity.

---

## Design Cycle

Iterative process:

```
Define -> Ideate -> Prototype -> Test -> Refine -> Repeat
```

### In 3dMake Context

```
Edit .scad -> 3dm build -> 3dm info -> Measure print -> Adjust parameters
```

---

## Scaffolding

Temporary support structures that enable learning.

Examples:
- Starter code templates
- Pre-defined modules
- Graduated exercises
- Checklists

Remove scaffolding as competency increases.

---

## Physical Computing

Learning that connects digital design to physical artifacts.

3D printing provides immediate tangible feedback:
- Code -> STL -> Physical object
- Reinforces cause-and-effect
- Engages kinesthetic learners

---

## Stakeholder-Centric Design

Designing with end-user needs in focus.

### Teaching Application

Have students:
1. Interview stakeholders
2. Define requirements
3. Create design constraints
4. Iterate based on feedback

Example: Design assistive device for specific user needs.

---

# SECTION III — Assessment & Validation

## Code Review Criteria

Assess student code on:

1. **Functionality** — Does it work?
2. **Parametrization** — Are values abstracted?
3. **Documentation** — Are comments clear?
4. **Modularity** — Is code reusable?
5. **Efficiency** — Is approach optimal?

---

## Quality Assurance

Systematic verification process.

### For 3D Prints

- Measure with calipers
- Compare to specification
- Document deviations
- Adjust parameters
- Retest

Teaches scientific method and iterative refinement.

---

## Safety Protocols

### 3D Printing Safety

Required instruction:
- Ventilation requirements
- Hot surface warnings
- Electrical safety
- Material handling (MSDS)
- Emergency shutdown procedures

---

# SECTION IV — Accessibility & Universal Design

## Screen Reader Accessibility Guide

Ensure all students can access curriculum.

### Key Principles

1. **Semantic HTML/Markdown** — Proper heading structure
2. **Alt text for images** — Describe geometric concepts
3. **CLI-first workflows** — Reduce GUI dependence
4. **Descriptive output** — `3dm info` provides text descriptions

---

## Braille Display Setup

For students using refreshable braille displays:

1. Ensure code editors support screen readers
2. Use semantic indentation (not tabs)
3. Provide geometric descriptions in text
4. Test commands with NVDA/JAWS

---

## Indent Announcement Configuration

Configure screen readers to verbalize indentation level.

### NVDA

Settings > Document Formatting > Report line indentation

### JAWS

Settings Center > Reading > Report Indentation

Critical for understanding OpenSCAD block structure.

---

## Non-Visual Toolchain Introduction

Guide blind/low-vision students through:

1. CLI navigation (`pwd`, `ls`, `cd`)
2. Text editor setup (VS Code with extensions)
3. `3dm build` command
4. `3dm info` for validation
5. Caliper measurement techniques (tactile)

---

## Editor Setup for Accessibility

### VS Code

Recommended extensions:
- Screen Reader Optimized
- Bracket Pair Colorizer (announces nesting)
- OpenSCAD Language Support

### Notepad++

Lightweight alternative:
- Configure indentation announcement
- Enable line number reading
- Set up hotkeys for navigation

---

# SECTION V — Technical Teaching Concepts

## Parametric Architecture

Design philosophy where dimensions are variables, not fixed values.

### Why Teach This

- Promotes computational thinking
- Enables design reuse
- Teaches variable scope
- Reinforces algebra concepts

---

## Geometric Primitives

Basic 3D shapes that combine to form complex objects.

### Teaching Sequence

1. Cube
2. Sphere
3. Cylinder (including cones)
4. Boolean operations
5. Transformations
6. Compound models

---

## Tolerance Management

Critical mechanical engineering concept.

### Teaching Approach

1. Print test parts
2. Measure with calipers
3. Calculate error
4. Adjust tolerance parameters
5. Reprint and verify

Teaches:
- Precision vs accuracy
- Measurement techniques
- Iterative refinement

---

## Interlocking Features

Mechanical joints and assemblies.

Examples:
- Snap fits
- Press fits
- Sliding joints
- Threaded connections

Requires understanding of:
- Clearance tolerances
- Material properties
- Force analysis

---

# SECTION VI — Curriculum Design Elements

## Design Mode vs Print Mode

OpenSCAD workflows:
- **Design Mode** (F5) — Fast preview
- **Print Mode** (F6) — Full render for STL export

Teach distinction early to avoid confusion.

---

## Editor Window vs Preview Window

OpenSCAD interface:
- Left: Code editor
- Right: 3D preview

Non-visual students use editor + CLI tools instead of preview.

---

## File Format Progression

Teach file types in order:

1. `.scad` — Source code
2. `.stl` — 3D mesh
3. `.gcode` — Machine instructions

Each represents different abstraction level.

---

## Debugging Strategies

Systematic approaches to finding errors.

### For Students

1. Read error messages carefully
2. Use `echo()` to print values
3. Test modules independently
4. Use `#` modifier to highlight geometry
5. Simplify to minimal failing case

---

# SECTION VII — Cross-Curricular Connections

## Mathematics Integration

3D design reinforces:
- Coordinate geometry (X, Y, Z axes)
- Trigonometry (rotation angles)
- Algebra (parametric equations)
- Measurement & units

---

## Physics Applications

- Center of mass calculations
- Material properties (stress, strain)
- Thermal expansion
- Friction coefficients

---

## Engineering Design Process

Professional workflow:
1. Define problem
2. Research requirements
3. Brainstorm solutions
4. Build prototype
5. Test and evaluate
6. Refine design

3D printing makes this tangible.

---

# SECTION VIII — Slicing & Print Management

## Slicing Guides for Instruction

### PrusaSlicer

Recommended teaching slicer:
- Visual layer preview
- Built-in supports
- Print time estimates

### Cura

Alternative:
- Simpler interface
- Good for beginners

### Bambu Studio

For Bambu Lab printers:
- Automated features
- Multi-color support

---

## Material Selection Pedagogy

### PLA

Start here:
- Easiest to print
- Lowest temperature
- Minimal warping

### PETG

Intermediate:
- Stronger
- More forgiving than ABS

### TPU

Advanced:
- Flexible prints
- Requires special techniques

### ABS

Advanced:
- Professional applications
- Requires enclosure
- Warping challenges teach troubleshooting

---

# SECTION IX — Language & Syntax Teaching

## Code Statement

Single executable instruction.

```openscad
cube([10,10,10]);  // One statement
```

---

## Comments as Documentation

Teach commenting best practices:

1. Explain **why**, not **what**
2. Document parameters
3. Include units
4. Note constraints

---

## Arithmetic in Code

Reinforce math concepts:

```openscad
width = 10;
spacing = width * 1.5;  // Arithmetic
```

---

# SECTION X — Assessment Rubrics

## Parametric Design Rubric

| Criterion | Novice | Developing | Proficient | Advanced |
|-----------|--------|------------|------------|----------|
| Parameterization | Hard-coded values | Some parameters | Most values parameterized | Full parametric architecture |
| Documentation | No comments | Minimal comments | Clear parameter docs | Comprehensive documentation |
| Modularity | No modules | Basic modules | Reusable modules | Library-quality modules |
| Functionality | Doesn't build | Builds with errors | Meets requirements | Exceeds requirements |

---

## Manufacturing Readiness Rubric

| Criterion | Assessment |
|-----------|------------|
| Manifold geometry | Pass/Fail |
| Tolerance specified | Pass/Fail |
| Documentation complete | Pass/Fail |
| Quality measurements recorded | Pass/Fail |

---

# SECTION XI — Troubleshooting Pedagogy

## Teaching Debugging

Framework:
1. **Reproduce** — Can you make it fail consistently?
2. **Isolate** — What's the minimal failing case?
3. **Hypothesize** — What might cause this?
4. **Test** — How can you verify?
5. **Document** — What did you learn?

---

## Common Student Errors

### Syntax Errors

- Missing semicolons
- Unmatched brackets
- Typos in keywords

### Logical Errors

- Wrong parameter order
- Incorrect units
- Transform order confusion

### Practical Errors

- Model too large for print bed
- Overhangs without support
- Wall thickness too thin

---

# SECTION XII — Project-Based Learning

## Scaffolded Project Sequence

1. **Week 1-2:** Primitives and transformations
2. **Week 3-4:** Modules and parameters
3. **Week 5-6:** Boolean operations
4. **Week 7-8:** Multi-part assemblies
5. **Week 9-10:** Student-designed project

---

## Portfolio Assessment

Students maintain portfolio showing:
- Design evolution
- Failed prototypes (with analysis)
- Final products
- Measurements and QA data
- Reflection on process

---


---

<a id="further-reading"></a>

# Further Reading and References

---

## Peer-Reviewed and Scholarly Works

Gonzalez Avila, J. F., Pietrzak, T., Girouard, A., & Casiez, G. (2024). *Understanding the challenges of OpenSCAD users for 3D printing.* In *Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI ’24)* (Article 351, pp. 1–20). Association for Computing Machinery. [https://doi.org/10.1145/3613904.3642566](https://doi.org/10.1145/3613904.3642566)

Li, G. (2024). *Chinese dragon modeling based on OpenSCAD.* *Applied and Computational Engineering, 67*, 1–12. [https://doi.org/10.54254/2755-2721/67/20240585](https://doi.org/10.54254/2755-2721/67/20240585)

Kwon, N., Sun, T., Gao, Y., Zhao, L., Wang, X., Kim, J., & Hong, S. R. (2024). *3DPFIX: Improving remote novices’ 3D printing troubleshooting through human-AI collaboration.* arXiv. [https://doi.org/10.48550/arXiv.2401.15877](https://doi.org/10.48550/arXiv.2401.15877) :contentReference[oaicite:2]{index=2}

## Government & Standards

Centers for Disease Control and Prevention, National Institute for Occupational Safety and Health. (2020, May 14). *Health and safety considerations for 3D printing.* [https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-printing/](https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-printing/)  

Centers for Disease Control and Prevention, National Institute for Occupational Safety and Health. (2024). *Approaches to safe 3D printing.* [https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html](https://www.cdc.gov/niosh/blogs/2024/safe-3d-printing.html)  

National Institute of Standards and Technology. (2023). *Artificial Intelligence Risk Management Framework (AI RMF 1.0).* [https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf)  

Occupational Safety and Health Administration. (n.d.). *Hierarchy of controls.* [https://www.osha.gov/hierarchy-of-controls](https://www.osha.gov/hierarchy-of-controls)  

Washington State Department of Health. (n.d.). *3D printers in schools.* [https://doh.wa.gov/community-and-environment/schools/3d-printers](https://doh.wa.gov/community-and-environment/schools/3d-printers)  

## Industry & Commercial Documentation

All3DP. (n.d.). *3D printer filament types explained.* [https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/](https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/)  

All3DP. (n.d.). *FDM 3D printing tolerances.* [https://all3dp.com/2/fdm-3d-printing-tolerances/](https://all3dp.com/2/fdm-3d-printing-tolerances/)  

Anycubic. (n.d.). *Anycubic.* [https://www.anycubic.com/](https://www.anycubic.com/)  

Autodesk. (n.d.). *Fusion 360.* [https://www.autodesk.com/products/fusion-360](https://www.autodesk.com/products/fusion-360)  

Bambu Lab. (n.d.). *Downloads.* [https://bambulab.com/en/download](https://bambulab.com/en/download)  

Bambu Lab. (n.d.). *Bambu Studio.* [https://bambulab.com/en/download/studio](https://bambulab.com/en/download/studio)  

Bambu Lab Wiki. (n.d.). *Bambu Lab Wiki.* [https://wiki.bambulab.com](https://wiki.bambulab.com)  

Hubs. (n.d.). *What is FDM 3D printing?* [https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/](https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/)  

IDEA Maker (Raise3D). (n.d.). *ideaMaker.* [https://www.raise3d.com/ideamaker](https://www.raise3d.com/ideamaker)  

MatterHackers. (n.d.). *3D printer filament comparison.* [https://www.matterhackers.com/3d-printer-filament-compare](https://www.matterhackers.com/3d-printer-filament-compare)  

Prusa Research. (n.d.). *PrusaSlicer 4.2.4.* [https://www.prusa3d.com/page/prusaslicer424/](https://www.prusa3d.com/page/prusaslicer424/)  

Prusa Research. (n.d.). *PrusaSlicer 4.1.0.* [https://www.prusa3d.com/page/prusaslicer_410/](https://www.prusa3d.com/page/prusaslicer_410/)  

Prusa Research. (n.d.). *Support.* [https://www.prusa3d.com/support/](https://www.prusa3d.com/support/)  

Stratasys. (n.d.). *Stratasys.* [https://stratasys.com/](https://stratasys.com/)  

UL Research Institutes. (n.d.). *3D printing emissions study.* [https://www.ul.com/news/ul-research-institutes-releases-3d-printing-emissions-study](https://www.ul.com/news/ul-research-institutes-releases-3d-printing-emissions-study)  

Ultimaker. (n.d.). *Ultimaker Cura.* [https://ultimaker.com/software/ultimaker-cura](https://ultimaker.com/software/ultimaker-cura)  

ZenML. (n.d.). *LLM-powered 3D model generation for 3D printing.* [https://www.zenml.io/llmops-database/llm-powered-3d-model-generation-for-3d-printing](https://www.zenml.io/llmops-database/llm-powered-3d-model-generation-for-3d-printing)  

## Open-Source Software & Technical Documentation

Anthropic. (n.d.). *Prompt engineering overview.* [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)  

Apache Software Foundation. (2004). *Apache License, Version 2.0.* [https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)  

BelfrySCAD. (n.d.). *BOSL2.* [https://github.com/BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)  

Deck, T. (2025). *3DMake repository.* [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)  

Free Software Foundation. (n.d.). *GNU Bash manual.* [https://www.gnu.org/software/bash/manual/](https://www.gnu.org/software/bash/manual/)  

Free Software Foundation. (n.d.). *GNU Coreutils manual.* [https://www.gnu.org/software/coreutils/manual/](https://www.gnu.org/software/coreutils/manual/)  

Free Software Foundation. (n.d.). *GNU Grep manual.* [https://www.gnu.org/software/grep/manual/grep.html](https://www.gnu.org/software/grep/manual/grep.html)  

Git SCM. (n.d.). *Git documentation.* [https://git-scm.com/docs](https://git-scm.com/docs)  

Google Cloud. (2025). *Get started with Gemini models.* [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3)  

Microsoft. (n.d.). *PowerShell documentation.* [https://learn.microsoft.com/powershell/](https://learn.microsoft.com/powershell/)  

Microsoft. (n.d.). *Windows commands documentation.* [https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)  

OpenSCAD. (n.d.). *OpenSCAD documentation.* [https://openscad.org/documentation.html](https://openscad.org/documentation.html)  

OpenSCAD User Manual Contributors. (n.d.). *OpenSCAD User Manual.* [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)  

Programming with OpenSCAD. (n.d.). *Programming with OpenSCAD.* [https://programmingwithopenscad.github.io/](https://programmingwithopenscad.github.io/)  

Rust Project Developers. (n.d.). *mdBook.* [https://rust-lang.github.io/mdBook/](https://rust-lang.github.io/mdBook/)  

SuperSlicer. (n.d.). *SuperSlicer repository.* [https://github.com/supermerill/SuperSlicer](https://github.com/supermerill/SuperSlicer)  

The Linux Documentation Project. (n.d.). *Bash Beginner’s Guide.* [https://tldp.org/LDP/Bash-Beginners-Guide/html/](https://tldp.org/LDP/Bash-Beginners-Guide/html/)  

## Educational & Community Resources

A11Y-101. (n.d.). *Inclusive documentation design.* [https://www.a11y-101.com/design/inclusive-documentation](https://www.a11y-101.com/design/inclusive-documentation)  

Class Central. (n.d.). *OpenSCAD courses.* [https://www.classcentral.com/subject/openscad](https://www.classcentral.com/subject/openscad)  

Khan Academy. (n.d.). *Algorithms.* [https://www.khanacademy.org/computing/computer-science/algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)  

Salt Lake City Public Library. (n.d.). *Creative Lab.* [https://services.slcpl.org/creativelab](https://services.slcpl.org/creativelab)  

Salt Lake County Library. (n.d.). *Create spaces.* [https://www.slcolibrary.org/what-we-have/create](https://www.slcolibrary.org/what-we-have/create)  

University of Utah. (n.d.). *ProtoSpace.* [https://lib.utah.edu/protospace.php](https://lib.utah.edu/protospace.php)  

### Accessibility & Assistive Tech

Freedom Scientific. (n.d.). *JAWS screen reader.* [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)  

Microsoft. (n.d.). *Narrator guide.* [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator)  

NV Access. (n.d.). *NVDA screen reader.* [https://www.nvaccess.org/](https://www.nvaccess.org/)  

Your Dolphin. (n.d.). *SuperNova.* [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)  

### Community & Media

Discord. (n.d.). *3D printing community server.* [https://discord.gg/F2Nx2VxTB7](https://discord.gg/F2Nx2VxTB7)  

Reddit. (n.d.). *r/3Dprinting subreddit.* [https://www.reddit.com/r/3Dprinting/](https://www.reddit.com/r/3Dprinting/)  

Reddit. (n.d.). *r/OpenSCAD subreddit.* [https://www.reddit.com/r/openscad/](https://www.reddit.com/r/openscad/)  

YouTube. (n.d.). *Luke’s Lab channel.* [https://www.youtube.com/@LukesBlab](https://www.youtube.com/@LukesBlab)  

YouTube. (n.d.). *Teaching Tech channel.* [https://www.youtube.com/@TeachingTech](https://www.youtube.com/@TeachingTech)
