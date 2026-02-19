# Lesson 0.5: Introduction to OpenSCAD — Part 2 (Self-Paced)

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example `.scad` files so screen-reader users can follow step-by-step.

**Unit:** 0 — Foundations  
**Duration:** 1–2 class periods (50–60 min each)  
**Prerequisite:** Lesson 0.4 (Part 1)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Move objects using `translate()`
- Rotate objects using `rotate()`
- Combine objects using `union()`
- Create holes and subtractions using `difference()`
- Design a simple composite object (a box with a hole in it)
- Understand the concept of constructive solid geometry (CSG)

---

## Constructive Solid Geometry (CSG)

OpenSCAD uses a design approach called **constructive solid geometry**. The idea is that complex shapes are made by combining, subtracting, or intersecting simple shapes.

Think of it like working with **clay** — you start with basic blocks and either add more clay (union) or carve pieces away (difference).

The three Boolean operations in OpenSCAD:

| Operation | What It Does | Analogy |
|-----------|-------------|---------|
| `union()` | Combines two or more shapes into one | Gluing pieces together |
| `difference()` | Subtracts one shape from another | Carving a hole |
| `intersection()` | Keeps only the overlapping region | Cookie-cutter through two shapes |

---

# Lesson 0.5 — Introduction to OpenSCAD — Part 2 (Self-Paced)

Estimated time: 45–75 minutes

Learning objectives:
- Use `translate()` and `rotate()` to position parts
- Combine and subtract primitives with `union()` and `difference()`
- Build a small composite object (slotted box or stand) and export STL

Materials:
- OpenSCAD; example `practice0_5.scad` file; calculator for simple expressions

Step-by-step student tasks:
1. Open `lesson0_5.scad` (or create a new file) and copy the slotted box example below.
2. Preview (F5) after each edit; use `$fn=40` for smoother curves while testing.
3. Replace hard-coded numbers with variables for box length, width, height, and slot size.
4. Add a circular hole at one end using `difference()` + `cylinder()`; extend the cylinder 1–2 mm past the box to ensure a clean subtraction.
5. Practice using `translate()` and `rotate()` to place a small decorative cylinder on the top surface.
6. Render (F6) and export an STL when complete.

Checkpoint (submit or self-check):
- Attach `lesson0_5.scad` and `lesson0_5.stl` (or note if export not possible).

Quiz — Lesson 0.5 (5 items):
1. Short answer: Name the three CSG operations in OpenSCAD.
2. Multiple choice: Which command removes material? (A) `union()` (B) `difference()` (C) `intersection()` — Answer: B
3. Practical: Provide code that subtracts a centered cylinder from a cube to make a hole.
4. Short answer: Why should the subtracting shape extend beyond the target shape by a small amount?
5. Practical: Show code that translates a cube by 10 mm on X and 5 mm on Z.

Extension problems (5):
1. Create a slotted box with two different slot sizes and export both versions.
2. Make a clip-style mount using `difference()` and `union()`; document dimensions with variables.
3. Use `rotate()` to create a compound object (e.g., four cylinders rotated to form a flower); export an image of the preview.
4. Write an accessible comment-based walkthrough inside your `.scad` for a peer who is blind or low-vision.
5. Automate rendering two variants using your 3dMake pipeline or a simple shell script.

Example starter code (type and test):

```scad
// Starter — slotted box with hole
box_l = 60; box_w = 30; box_h = 10;
slot_w = 20; slot_h = 4;
$fn = 40;

difference() {
    cube([box_l, box_w, box_h]);
    // slot through top
    translate([(box_l - slot_w)/2, -1, box_h - slot_h])
        cube([slot_w, box_w+2, slot_h+1]);
    // round hole on one end
    translate([5, box_w/2, box_h/2]) rotate([90,0,0]) cylinder(h = box_w+4, r = 3);
}
```

// Author: (your name)
// Date: (today)

// Variables
box_l = 60;
box_w = 30;
box_h = 10;
slot_w = 20;
slot_h = 4;
wall = 3;

$fn = 40;

// Main box with a rectangular slot cut through the top
difference() {
    cube([box_l, box_w, box_h]);
    
    // Slot in the center of the top
    translate([(box_l - slot_w) / 2, -1, box_h - slot_h])
        cube([slot_w, box_w + 2, slot_h + 1]);
}
```

**Challenge:** Add a circular hole on one end of the box using `difference()` and `cylinder()`.

---

## Common Mistakes and Fixes

| Mistake | Symptom | Fix |
|---------|---------|-----|
| Forgetting `;` at end of line | Red error in console | Add semicolons to every statement |
| Forgetting `{` `}` around a Boolean operation | Shapes don't combine correctly | Always wrap multiple shapes in `{ }` |
| Subtracting shape doesn't extend through the base | Thin "skin" remains at top/bottom of hole | Extend the subtracting shape 1 mm above and below |
| Shapes overlap unexpectedly | Parts fuse together | Use `translate()` to position shapes carefully |
| Rotated object is in the wrong place | Shape ends up in a strange location | Remember: `rotate()` applies before `translate()` |

---

## Video Resources

1. **OpenSCAD Tutorial Part 3: Transformations** — via Class Central  
   [https://www.classcentral.com/course/youtube-openscad-tutorial-90515](https://www.classcentral.com/course/youtube-openscad-tutorial-90515)  
   *Watch Part 3 (Transformations) and Part 8 (3D Boolean Operations) from this playlist.*

2. **OpenSCAD Tutorial Chapter 2 — Wikibooks** (translate, rotate, union, difference)  
   [https://en.wikibooks.org/wiki/OpenSCAD_Tutorial](https://en.wikibooks.org/wiki/OpenSCAD_Tutorial)  
   *Free written tutorial continuing from Chapter 1. Covers all transformations and Boolean operations.*

3. **i.materialise OpenSCAD Tutorial — Part 1** (moving, rotating, and subtracting)  
   [https://3dprint.com/161219/openscad-imaterialise-tutorial/](https://3dprint.com/161219/openscad-imaterialise-tutorial/)  
   *Short videos that demonstrate copy-paste-rotate workflow and difference() for making holes.*

4. **Programming with OpenSCAD — No Starch Press** (Chapter 2: More Ways to Transform Shapes)  
   [https://nostarch.com/programmingopenscad](https://nostarch.com/programmingopenscad)  
   *Chapters 1 and 2 cover exactly the content of Lessons 0.4 and 0.5.*

5. **OpenSCAD Official Cheat Sheet**  
   [https://openscad.org/cheatsheet/](https://openscad.org/cheatsheet/)  
   *A single-page reference for every OpenSCAD command. Bookmark this — you'll use it constantly.*

---

## Challenge Project

Design a **simple stand or mount** using only what you've learned in Lessons 0.4 and 0.5:
- At least two different primitives
- At least one `translate()` or `rotate()`
- At least one `difference()` (a hole, slot, or recess)
- Use variables for all major dimensions
- Add comments explaining your design

This is a practice file — it does not need to be printed. But if you'd like to print it, bring it to your instructor.

---

## References

All3DP. (2023). *OpenSCAD tutorial for beginners: 10 easy steps*. https://all3dp.com/2/openscad-tutorial-beginner/

Class Central. (n.d.). *OpenSCAD tutorial* [YouTube course]. https://www.classcentral.com/course/youtube-openscad-tutorial-90515

Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects*. No Starch Press. https://nostarch.com/programmingopenscad

OpenSCAD. (n.d.). *OpenSCAD cheatsheet*. https://openscad.org/cheatsheet/

Wikibooks. (2019). *OpenSCAD tutorial*. https://en.wikibooks.org/wiki/OpenSCAD_Tutorial

3DPrint.com. (2021). *Learn how to use OpenSCAD software with helpful i.materialise tutorial and how-to videos*. https://3dprint.com/161219/openscad-imaterialise-tutorial/

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.
