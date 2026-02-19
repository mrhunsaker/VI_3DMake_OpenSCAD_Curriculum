# Tolerance Test Design — Lesson 2.2 Companion

**Accessibility:** When describing printed test pieces, include short, step-by-step text instructions and expected tactile cues so non-visual learners can perform the clearance tests.

*This document accompanies Lesson 2.2: Tolerances & Fit. Print the test piece, run the tests below, and record your results. Keep this sheet — you will reference your printer's clearance value in every project that requires parts to fit together.*

---

## What You Are Testing

You printed a set of test blocks, each with a cylindrical hole at a different diameter. You also printed a reference peg with a known diameter. Your goal: find the minimum clearance needed for the peg to fit into a hole, and characterize what each clearance feels like.

---

## Before Testing: Verify the Peg

Measure the reference peg with your calipers:

| Trial | Peg Diameter (mm) |
|-------|------------------|
| 1 | |
| 2 | |
| 3 | |
| **Average** | |

How close is your measured average to the designed value of **5.0 mm**?

Difference: _______ mm

This difference tells you something about your printer's dimensional accuracy on external (outside) dimensions.

---

## Test Results Table

For each test block, try to insert the peg. Record what happens.

| Block | Designed Hole Diameter | Does It Fit? | Fit Description |
|-------|----------------------|-------------|----------------|
# Tolerance Test Worksheet — Self-Paced Companion

Use this worksheet while you print and evaluate the tolerance test. Keep your filled worksheet in your project folder for future reference.

Before testing:
1. Measure the reference peg three times with calipers and record the average.
2. Note the filament and printer used.

Test results (fill these during hands-on work):

| Block | Designed Hole (mm) | Measured Hole (mm) | Fits? (Y/N) | Fit Notes |
|-------|--------------------|--------------------|-------------|----------|
| 0.0 mm | 5.0 | | | |
| 0.1 mm | 5.1 | | | |
| 0.2 mm | 5.2 | | | |
| 0.3 mm | 5.3 | | | |
| 0.5 mm | 5.5 | | | |

Determine your printer's standard clearances and write them here for future projects:

Press fit: _____ mm
Snug fit: _____ mm
Normal fit: _____ mm
Free sliding: _____ mm

Reflection (short answers):
1. Were holes printed larger or smaller than designed? By about _____ mm.
2. Which clearance produced a reliable "snug" fit for your printer?
3. For a cord diameter of X mm and your normal clearance, what hole size will you design? Show calc.

Extension: create a parametric tester that generates N holes using `for(i=[0:N-1])` and accepts base peg diameter and step size as parameters.

Date tested: ________________

Press fit:      _______ mm
Snug fit:       _______ mm
Normal fit:     _______ mm
Free sliding:   _______ mm

Holes print approx _______ mm SMALLER than designed.
```

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.
