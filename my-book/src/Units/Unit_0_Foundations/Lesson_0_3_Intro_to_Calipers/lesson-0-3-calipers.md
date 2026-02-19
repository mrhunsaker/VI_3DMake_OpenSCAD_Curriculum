# Lesson 0.3 — Introduction to Calipers (Self-Paced)

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example `.scad` files so screen-reader users can follow step-by-step.

Estimated time: 45–75 minutes

Learning objectives:
- Identify caliper parts and take outside, inside, and depth measurements accurately
- Record three trials and calculate an average to use in OpenSCAD

Materials:
- Digital caliper (or vernier/dial), 5 small objects for practice, practice worksheet in this folder

Step-by-step practice:
1. Power on the caliper and zero it with the jaws closed. Confirm display reads `0.0 mm`.
2. Measure the outside width of Object 1 three times, record the values, calculate the average, and write the value in the worksheet.
3. Measure an inside diameter with the small jaws and record three trials.
4. Use the depth rod to measure a recess and record three trials.
5. Enter your averaged values into a short OpenSCAD snippet and preview (example below).

Example OpenSCAD snippet (use your measured averages):
```
length = 24.1; // example average
width  = 10.5;
height = 5.0;
cube([length, width, height]);
```

Checkpoint:
- Submit your part A worksheet (filled) and the OpenSCAD snippet with averaged values.

Quiz — Lesson 0.3 (5 items):
1. Short answer: What does the ON/ZERO button do and when should you press it?
2. Multiple choice: Which jaws are used for inside diameter? (A) large outside jaws (B) small inside jaws (C) depth rod — Answer: B
3. Practical: Measure a small object three times and report the three values and the average.
4. Short answer: Why is averaging three trials better than using one reading? (short answer)
5. Practical: Provide the OpenSCAD code that uses your averaged values to create a cube.

Extension problems (5):
1. Create a short 1-page guide with photos demonstrating three correct and three incorrect caliper techniques.
2. Measure a threaded nut's inside diameter and estimate the tolerance needed for a matching bolt (brief justification).
3. Using three different calipers (if available), measure the same object and compare results; report discrepancies and possible causes.
4. Create a short screencast (or audio) explaining how to measure depth with a caliper.
5. Propose a simple classroom routine for checking and storing calipers to keep them in working condition.


System Scale. (2025). *How to use digital calipers*. https://www.system-scale.com/how-to-use-digital-calipers

**Accessibility:** When including sample images or slicer screenshots, add a short alt-text description and provide a comment-based walkthrough for any example .scad files so screen-reader users can follow step-by-step.
