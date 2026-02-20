# Lesson 2.2 — Tolerances & Fit 

**Accessibility:** Provide a short text description of the tolerance test layout and include annotated `.scad` comments for screen-reader users to follow measurement and comparison steps.

**Unit:** 2 — Intermediate Skills  
**Duration:** 1–2 class periods (plus a print session)  
**Prerequisite:** Lesson 2.1; understanding of calipers (Lesson 0.3)

---

## Learning Objectives

By the end of this lesson, students will be able to:
- Explain why 3D printed objects do not exactly match their designed dimensions
- Define tolerance, clearance, and the three types of fit (clearance, transition, interference)
- Design and print a tolerance test part to characterize their specific printer
- Apply appropriate tolerance values when designing parts that must fit together
- Understand why holes in printed parts are always slightly undersized

---

## The Problem: Your Print Won't Be Exactly the Right Size

When you type `cube([20, 20, 20])` in OpenSCAD, you expect a 20 mm cube. In practice, **FDM printing introduces small dimensional errors** — typically ±0.1 to ±0.3 mm for a desktop printer.

This matters enormously when designing parts that:
- Must fit over, around, or inside another object (like a command strip, a bolt, or a cord)
- Must snap or press together with another printed part
- Must slide freely against another surface

A 0.2 mm error is invisible to your eye. But if you're trying to fit a peg into a hole, 0.2 mm is the difference between "fits perfectly" and "won't fit at all."

---

## Key Terms

**Tolerance:** The allowable deviation from the intended dimension. For FDM printing, typical tolerance is ±0.15–0.30 mm.

**Clearance:** The intentional gap between two parts. To make a sliding fit, you add clearance to the design.

**Types of Fit:**

| Fit Type | Description | Gap | Example Use |
| ---------- | ------------- | ----- | ------------- |
| **Interference fit** (press fit) | Part is slightly larger than the hole; must be forced in | Negative clearance | Permanent assembly |
| **Transition fit** | May be tight or may slide depending on print variation | Near zero | Light press or snug slip |
| **Clearance fit** | Definite space between parts; moves freely | Positive clearance | Sliding drawer, loose hinge |

### Practical Clearance Values for FDM

| Desired Fit | Clearance to Add | Notes |
| ------------ | ---------------- | ------- |
| Tight / press fit | 0.00–0.05 mm | Requires force; semi-permanent |
| Snug (hand-tight) | 0.10–0.15 mm | Firm but removable |
| Normal / loose | 0.20–0.30 mm | Fits easily by hand |
| Sliding / free | 0.40–0.60 mm | Moves freely with no play |

**Note:** These values are starting points. Every printer is slightly different. The tolerance test in this lesson will determine the right values for your specific printer.

---

Estimated time: 60–120 minutes (includes print time)

Learning objectives:
- Explain tolerance, clearance, and common fit types for FDM parts
- Run a tolerance test print and record peg/hole fits
- Apply measured clearances to designs that must fit together

Materials:
- Tolerance test `.scad` file (provided), calipers, printer access

Step-by-step student tasks:
1. Open the provided `tolerance_test.scad` and preview the file in OpenSCAD.
2. Export the STL and slice it with your normal classroom profile (0.20 mm, 15% infill).
3. Print the file and use the reference peg to test each hole. Record whether each peg fits and how it feels.
4. Measure the holes and pegs with calipers and compute the measured clearance for each test.
5. Choose a working "normal fit" clearance for your printer and record it in your notes.

Checkpoint:
- Upload your filled tolerance table (which hole fits which description) and the chosen normal clearance value.

**Accessibility:** Provide a short text description of the tolerance test layout and annotate the STL preview images so screen-reader users can follow your results.
Quiz — Lesson 2.2 (5 items):
1. Short answer: Define "clearance" in one sentence.
2. Multiple choice: Which fit type usually requires negative clearance? (A) Clearance fit (B) Transition fit (C) Interference fit) — Answer: C
3. Practical: If your peg measures 5.02 mm and the hole measures 5.30 mm, what is the clearance? (show calculation)
4. Short answer: Why are printed holes often smaller than their design values?
5. Practical: Given a cord diameter of 2.0 mm and your measured normal clearance of 0.3 mm, what hole diameter should you design? Show the formula.

Extension problems (5):
1. Design a tolerance strip that tests both horizontal and vertical holes; explain differences you observe.
2. Create a parametric tolerance tester `.scad` that generates N holes with user-set spacing and clearances using a `for()` loop.
3. Run the tolerance test with three different slicer profiles (0.15, 0.20, 0.30 mm) and report differences.
4. Design a snap-fit test piece and determine what clearance yields a reliable snap for your printer.
5. Write a short guide for future students describing your printer's tolerance behavior and recommended clearances.


MakerVerse. (2025). *How to manage 3D printing tolerances: Smart design for reliable results*. https://www.makerverse.com/resources/3d-printing/3d-printing-tolerances-guide/

Markforged. (2021). *3D printing design tips*. https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips

Sinterit. (2025). *Tolerances for 3D printing: Accuracy, clearance & design tips*. https://sinterit.com/3d-printing-guide/design-for-3d-printing/tolerances-3d-printing/
