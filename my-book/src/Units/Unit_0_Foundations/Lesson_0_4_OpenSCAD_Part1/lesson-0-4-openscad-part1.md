# Lesson 0.4: Introduction to OpenSCAD — Part 1 

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example `.scad` files so screen-reader users can follow step-by-step.

**Unit:** 0 — Foundations  
**Duration:** 1–2 class periods (50–60 min each)  
**Prerequisite:** Lessons 0.1–0.3

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Open OpenSCAD and navigate the interface
- Write and render the three basic 3D primitives: `cube()`, `sphere()`, `cylinder()`
- Use named variables to store dimensions
- Preview and render a model (F5 vs F6)
- Export a model as an `.stl` file

---

## What Is OpenSCAD?

Most 3D design software works like drawing — you use a mouse to drag, pull, and sculpt shapes. OpenSCAD is different: **you describe shapes by writing code**. This might sound harder, but it has major advantages:

- **Precision.** Every dimension is a number. You type `70` and you get exactly 70 mm.
- **Parametric design.** If you store dimensions in variables, you can change one number and update the entire design instantly.
- **Reproducibility.** Code is easy to share, version, and modify.
- **Math.** You can write `height / 2` and OpenSCAD will calculate the correct value automatically.

OpenSCAD is free, open-source, and available for Windows, Mac, and Linux.

**Download:** [https://openscad.org/downloads.html](https://openscad.org/downloads.html)

## Using OpenSCAD with editors and 3dMake

- Editors: you can edit `.scad` files in the OpenSCAD editor, but many users prefer a full-featured text editor. Visual Studio Code (VSCode) has OpenSCAD extensions for syntax highlighting and snippets; Notepad++ is a lightweight alternative on Windows. Both make editing, searching, and managing multiple files easier.
- 3dMake: for automated workflows and batch rendering, use `3dMake` (or your preferred build pipeline) to run OpenSCAD headlessly, render, and export STL files from the command line. This is helpful for class pipelines, automation, and when integrating with slicers. Example (pseudo):

```bash
3dmake render project.scad --output project.stl
```

Include editor and pipeline setup in your lesson notes so students can open, edit, and render files using the workflow you choose.

---

## The OpenSCAD Interface

When you open OpenSCAD, you will see three panels:

```
┌─────────────────────────────────────────────────────┐
│                  Menu Bar                            │
├─────────────────────────────┬───────────────────────┤
│                             │                       │
│   CODE EDITOR               │   3D PREVIEW          │
│   (left panel)              │   (right panel)       │
│                             │                       │
│   Type your OpenSCAD code   │   Your model appears  │
│   here                      │   here                │
│                             │                       │
├─────────────────────────────┴───────────────────────┤
│   CONSOLE (bottom) — error messages and output      │
└─────────────────────────────────────────────────────┘
```

### Key Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `F5` | Preview (fast, good for working) |
| `F6` | Full render (slower, needed for export) |
box_height = 10;
# Lesson 0.4 — Introduction to OpenSCAD — Part 1 

Estimated time: 45–75 minutes

Learning objectives:
- Open OpenSCAD, create `cube()`, `sphere()`, and `cylinder()` primitives, and export an STL
- Use named variables and comments to make code readable and parametric

Materials:
- OpenSCAD installed; text editor optional; example `practice0_4.scad` file

Step-by-step student tasks:
1. Open OpenSCAD and create a new file named `lesson0_4.scad`.
2. Type and preview the example cube: `cube([70,16,5]);` Press `F5`.
3. Replace literal numbers with variables at the top of the file:
   `length=70; width=16; height=5; cube([length,width,height]);`
4. Add comments explaining each section and save the file.
5. Create a `sphere(d=20);` and set `$fn=24` to preview, then `$fn=80` for a smoother render.
6. Create a cylinder `cylinder(h=20,d=10);` and preview.
7. Press `F6` for final render and export as STL.

Checkpoint (submit or self-check):
- Attach `lesson0_4.scad` showing variables and comments and an exported `lesson0_4.stl`.

Quiz — Lesson 0.4 (5 items):
1. Short answer: What is the difference between `F5` and `F6`?
2. Multiple choice: Which command creates a box? (A) `sphere()` (B) `cube()` (C) `cylinder()` — Answer: B
3. Practical: Provide code that defines `length=50` and creates a cube using that variable.
4. Short answer: What does `$fn` affect? (brief)
5. Practical: Export an STL and report the filename and file size (or note if not possible).

Extension problems (5):
1. Create a short cheat-sheet (one page) of OpenSCAD syntax common to Lessons 0.4–0.5.
2. Write a comment-based walkthrough inside `lesson0_4.scad` explaining each line for a peer who is blind or low-vision.
3. Create three variations of a cube (different dimensions via variables) and export all three STLs.
4. Explore `$fn` at values 12, 40, and 120; document preview and render times and quality differences.
5. Add a second primitive and translate it so both are visible in the preview; submit the `.scad` file.


