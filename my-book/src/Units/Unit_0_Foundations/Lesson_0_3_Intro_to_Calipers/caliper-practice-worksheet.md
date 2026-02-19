
# Caliper Practice Worksheet (Self-Paced)

**Accessibility:** Add short guidance for screen-reader users: include a text-based walkthrough of each measurement step and annotate expected results so non-visual learners can follow the worksheet.

Student Name: ______________________  Date: ___________

Before you begin checklist:
- [ ] Caliper clean and dry
- [ ] Jaws close and display reads `0.0 mm`
- [ ] Units set to `mm`

Part A — Measure three features on Object 1 (outside length, width, height). Record three trials and compute average.

Feature — Outside length:
Trial 1: _____ mm
Trial 2: _____ mm
Trial 3: _____ mm
Average: _____ mm

Feature — Outside width:
Trial 1: _____ mm
Trial 2: _____ mm
Trial 3: _____ mm
Average: _____ mm

Feature — Height:
Trial 1: _____ mm
Trial 2: _____ mm
Trial 3: _____ mm
Average: _____ mm

Part B — Inside diameter (if present): three trials and average.

Part C — Depth measurement: three trials and average.

Part D — OpenSCAD translation (use your averages):
```
length = ; // your averaged length
width  = ; // your averaged width
height = ; // your averaged height
cube([length, width, height]);
```

Checkpoint: Submit the filled worksheet and the OpenSCAD snippet. If working independently, attach a photo of one measured object for verification.

Quiz — Worksheet quick quiz (5 items):
1. Short answer: What is the first step before measuring with a caliper? (Zero the tool)
2. Multiple choice: Which jaws measure inside diameters? (A) outside jaws (B) inside jaws (C) depth rod — Answer: B
3. Short answer: Why take three trials and average them? (short answer)
4. Practical: Provide three trial values and the calculated average.
5. Short answer: When measuring depth, which part of the caliper do you use? (depth rod)

Extension problems (5):
1. Compare measurements from two different calipers and explain any differences.
2. Measure a threaded nut and estimate clearance needed for a matching bolt.
3. Create a short screencast (or audio note) describing how to measure inside diameter.
4. Propose a storage routine to keep calipers accurate and safe.
5. Design a short 1-page illustrated guide for first-time caliper users.


**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.
