# Lesson 4 — AI-Enhanced Verification and Multimodal Feedback

**Estimated Time:** 90–120 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## Before You Start

Every lesson so far has ended with "build and verify." But what does verification actually mean? And when can you trust the result? This lesson is about that question.

The workflow you've been using — `3dm build` followed by `3dm info` — involves two types of tools: deterministic tools (which always give the same answer for the same input) and AI tools (which interpret and describe, but can be vague or wrong). Knowing the difference, and knowing which to use when, is one of the most important skills in modern digital fabrication.

Many beginners treat AI output as authoritative. When `3dm info` says "a small peg-like protrusion," they assume everything is correct. But AI descriptions can be vague, can miss features, and can be flat-out wrong about specifics. This lesson gives you a structured, layered verification approach that combines AI descriptions, deterministic tools, and your own judgment — and makes clear which tool to reach for in which situation.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Use `3dm info` effectively and know its real capabilities and limitations
- Verify AI-generated OpenSCAD code systematically before printing
- Build a personal verification chain for any critical design feature
- Use `3dm preview` and slicer layer view as verification methods
- Apply AI description to accessibility workflows for visually impaired makers
- Distinguish deterministic from AI-assisted validation
- Apply prompt engineering techniques for better AI design feedback
- Recognize when to trust, question, or reject AI suggestions
- Understand data privacy considerations when using cloud AI tools

---

## Concept 1: Deterministic vs. AI-Based Validation

### Two Fundamentally Different Types of Tools

When you run `3dm info` after a build, you get two very different types of information in the same output. It's critical to understand the difference.

**Deterministic output** comes from directly reading the geometry of the STL file — no interpretation involved. The bounding box (`30.0 × 20.0 × 10.0 mm`) is computed from the actual vertex coordinates in the mesh. The volume is computed from the triangle faces. These numbers are produced by a formula applied to the file, and they will be identical every time you run the command on the same file. There is no randomness, no ambiguity, no "interpretation." If the bounding box says 30.0 mm, your model is 30.0 mm wide — full stop.

**AI-based output** is the natural-language description portion of `3dm info`. An AI vision model "looks at" a rendered image of your model and generates a text description. This is fundamentally different: it involves interpretation, and interpretations can vary. The same model might be described as "a small peg" one time and "a narrow cylindrical protrusion" another time. The AI might miss a feature that is too small to be clearly visible. It might describe a 3.2 mm hole as "approximately 3 mm" or "roughly 3–4 mm." The description is genuinely useful for a quick sanity check, but it is not a measurement.

### The Rule That Follows from This

**Always verify critical dimensions using deterministic methods first.** Bounding box, volume, triangle count — these are computed from the mesh and cannot lie if the build succeeded. Only after confirming the numbers should you look at the AI description, and then only for orientation and general-shape confirmation.

---

## Step 1 — Using `3dm info` Effectively

### What `3dm info` Does

`3dm info` runs after `3dm build` and produces a report about your built STL file. It always includes deterministic data (bounding box, volume, triangle count) and optionally generates an AI description by rendering the model from a specific angle.

```bash
# Standard usage — run after every build
3dm build
3dm info

# Request a description from a specific viewing angle
3dm info --view front
3dm info --view top
3dm info --view isometric

# Save the description to a log file
3dm info --output description.txt

# Windows PowerShell
3dm info | Out-File -FilePath description.txt -Encoding UTF8

# Windows CMD
3dm info > description.txt
```

### What `3dm info` Does Well

`3dm info` is genuinely useful for:

**Overall shape identification** — confirming a part is roughly the right shape. If you designed a bracket and the description says "an L-shaped bracket," that's a useful confirmation that the basic geometry is correct.

**Relative positions** — confirming which part is on top of which, or that a protrusion sticks out from the side rather than the front.

**Component counting** — "a base plate with four cylindrical protrusions" tells you the four pegs you expected are there and visible.

**Accessibility** — a student who cannot easily see a rendered 3D model can use `3dm info` to get a verbal description of what they've built.

### What `3dm info` Does Poorly

`3dm info` is **not** reliable for:

**Precise measurements** — it cannot replace checking the bounding box or using calipers. "Approximately 10 mm" is not the same as "exactly 9.8 mm."

**Small features** — features smaller than about 1–2 mm may not be clearly visible in the rendered view and might be ignored or described vaguely.

**Internal geometry** — walls, cavities, and internal structures that aren't visible on the exterior surface won't be described.

**Tolerance-critical features** — a 0.2 mm clearance gap that determines whether two parts fit together is invisible to visual AI.

---

## Step 2 — The Verification Escalation Chain

### A Layered Approach to Verification

When you need to confirm that your design is correct, don't jump straight to printing. Instead, follow a layered chain of verification methods from most reliable (and fastest) to most authoritative (and slowest). Start at the top and only go further down if you need more certainty.

**Level 1 — Bounding Box and Volume (always accurate)**

The very first thing to check after every build. If these numbers don't match your design intent, something is wrong and you stop here to fix it before going further.

```bash
3dm info
# Look for: Bounding Box: [expected width] × [expected depth] × [expected height] mm
# Look for: Volume: [reasonable volume] mm³
```

**Level 2 — Slicer Layer Preview**

Open `build/main.stl` in your slicer (PrusaSlicer, Cura, etc.) and step through layers one at a time. Each layer is a cross-section through your model at a specific height — like slicing a loaf of bread and looking at each slice. This reveals:

- Wall thicknesses that the bounding box can't show
- Internal geometry and cavities
- Whether holes cut all the way through or stop short
- Overhanging geometry that may need supports

The slicer layer view is the best non-physical verification tool available. Use it for anything more complex than a simple box.

**Level 3 — Isolate and Test a Single Module**

If your full model is complex and `3dm info` gives a vague or confusing description, temporarily modify your file to render only the specific module you're trying to verify:

```openscad
// Temporarily comment out everything else, render only one module
// full_assembly();     // commented out
// base_plate();        // commented out
snap_clip();            // only this renders — easier for 3dm info to describe
```

Build and run `3dm info` on just that isolated piece. A simpler model gives more reliable AI descriptions and easier-to-check bounding boxes.

**Level 4 — Physical Measurement**

For anything tolerance-critical — a hole size that determines fit, a slot width for a specific component, a snap-fit clearance — print a test coupon and measure with digital calipers. Physical measurement is the ground truth. Nothing replaces it for precise fit verification.

Lesson 8 covers test coupons in detail, but the principle is simple: design a small, fast-printing test piece that includes only the critical feature you're validating. Print it, measure it, and adjust before printing the full part.

---

## Step 3 — A Verification Log

### Creating an Audit Trail

When you verify a design feature, record which method you used and what it confirmed. This creates a professional audit trail — evidence that you thought carefully about whether your design was correct.

Here's a simple verification log format:

```
DESIGN VERIFICATION LOG
Project: phone_stand_v2.scad
Date: 2026-03-10

Feature: USB-C charging slot
  Designed: 9.5mm wide × 3.5mm tall
  Level 1 — Bounding box of isolated slot_module(): 9.5 × 3.5mm ✓
  Level 2 — Slicer layer view: rectangular hole visible at Z=5–8.5mm ✓
  Level 3 (AI): "rectangular cutout, approximately 10mm wide" (too vague for precision)
  Level 4 — Calipers after first test print: 9.4mm wide (0.1mm under — acceptable) ✓

Feature: Rubber foot posts (4×)
  Designed: 3.0mm diameter × 2.0mm tall
  Level 1 — Bounding box of isolated foot_post(): 3.0 × 3.0 × 2.0mm ✓
  Level 2 — Slicer: four small protrusions visible on bottom face ✓
  Level 3 (AI): "four small round protrusions" ✓
  Level 4 — Not yet printed
```

This log takes a few minutes to fill in, and it demonstrates exactly the kind of professional thinking that certification assessments reward.

---

## Step 4 — AI-Generated OpenSCAD Code: How to Verify It

### AI Can Write Code, but You Must Check It

AI tools like Claude or ChatGPT can write OpenSCAD code from a plain-English description. This is a genuinely useful way to get a first draft of a design quickly. But **AI-generated OpenSCAD code is frequently wrong in subtle ways.** The code will look plausible, it may even build without errors, and it can still produce geometry that doesn't match your intent or that will fail in the slicer.

The most common errors AI makes in OpenSCAD:

**Forgetting the 0.001 co-planar rule.** The AI writes a `difference()` with touching surfaces and omits the critical offset. The code looks correct, but the cut may produce rendering artifacts or non-manifold geometry.

**Python-style variable reassignment.** The AI writes `x = 5; x = x + 1;` as if variables work like Python, which doesn't work in OpenSCAD (remember from Lesson 3: last assignment wins at parse time).

**Wrong transform order.** The AI reverses the order of `translate()` and `rotate()`, producing geometry in the wrong location. In OpenSCAD, transforms are applied in reverse order — `rotate()` then `translate()` is not the same as `translate()` then `rotate()`.

**Non-manifold geometry.** The code looks correct but produces a solid that isn't a properly sealed, watertight mesh. Slicers will reject it or produce incorrect layers.

**Wrong clearance values.** The AI invents plausible-sounding tolerances (like "0.1 mm clearance") that don't match your specific printer. Tolerances must be calibrated — they can't be looked up in a general reference.

### The AI Code Verification Checklist

Apply these checks to every piece of AI-generated OpenSCAD code before treating it as correct:

```
AI CODE VERIFICATION CHECKLIST
Run each check in order. Do not proceed if a check fails.

[ ] 1. SYNTAX
      3dm build → does it compile without errors?

[ ] 2. DIMENSIONS
      3dm info → does the bounding box match what you asked for?

[ ] 3. BOOLEAN OPERATIONS
      Does every difference() use the 0.001 offset rule?
      Look for: translate([*, *, 0]) inside difference()
      Should be: translate([*, *, -0.001])

[ ] 4. PARAMETER BEHAVIOR
      Change each parameter to an extreme value (minimum, maximum, zero).
      Does the model change correctly? Are there any edge cases that break it?

[ ] 5. MANIFOLD CHECK
      Open build/main.stl in your slicer.
      Are there any geometry warnings or errors?

[ ] 6. PRINT FEASIBILITY
      Are all walls at least 1.2mm thick for your nozzle size?
      Are there any overhangs steeper than 45°?
      Are all features large enough to be printable?
```

---

## Step 5 — Prompt Engineering for Better AI Results

### Weak Prompts Produce Weak Results

The quality of AI output depends heavily on the quality of your input prompt. A vague request produces a vague or incorrect response. A specific, structured request produces specific, actionable feedback.

**Weak prompt:**

```
Review my OpenSCAD code.
```

This gives the AI almost no information about what to look for. The response will be generic and may miss exactly the issues you care about.

**Strong prompt:**

```
I have an OpenSCAD model of a parametric mounting bracket with two M3 bolt holes.
Parameters: width=40, height=30, depth=8, hole_r=3.2.

Please review this code for:
1. Correct use of the 0.001 offset rule in all difference() operations
2. Manifold-safe geometry (no co-planar faces)
3. Whether hole_r=3.2mm is the correct M3 clearance hole diameter per ISO standards
4. Any parameter combinations that could produce invalid geometry

For each issue found, provide:
- Severity: critical / warning / note
- Line number (if applicable)
- Explanation of the problem
- Suggested fix
```

This prompt tells the AI exactly what to look for, what standard to check against, and how to format its response. The output is dramatically more useful.

### Four Characteristics of a Strong Code Review Prompt

**Specificity** — name the design, state the parameters, describe the intent. Don't make the AI guess what you're trying to build.

**Explicit criteria** — list the specific things you want checked. If you're worried about the 0.001 rule, say so. If you want to verify dimensional correctness, specify the intended dimensions.

**Standard references** — mention the standards or rules you want applied ("ISO M3 clearance hole", "0.001 co-planar offset rule", "minimum 1.2mm wall for 0.4mm nozzle").

**Output format request** — ask for a structured response (severity, line, explanation, fix) rather than a prose paragraph.

---

## Step 6 — Design Intent Guards with `assert()`

### Making Constraints Automatic

In Lesson 3, you learned how to use `assert()` inside modules to validate parameters. You can also use `assert()` at the top level of your file to enforce the same constraints you'd put in your verification log. This turns manual checks into automatic ones.

```openscad
// Top-level design constraints
// These run before any geometry is computed.
width  = 30;
height = 10;
wall_t = 2;

assert(width  >= 10, str("width must be >= 10mm for structural integrity, got: ", width));
assert(height >= 5,  str("height must be >= 5mm to fit standard hardware, got: ", height));
assert(wall_t >= 1.5, str("wall_t must be >= 1.5mm to print reliably with 0.4mm nozzle, got: ", wall_t));
assert(wall_t < width / 2,
  str("wall_t (", wall_t, ") must be less than half of width (", width/2, ")"));

// Geometry — guaranteed to be within valid bounds by the asserts above
difference() {
  cube([width, width, height]);
  translate([wall_t, wall_t, -0.001])
    cube([width - 2*wall_t, width - 2*wall_t, height + 0.002]);
}
```

Every constraint you can express as an `assert()` is a constraint that no longer requires manual verification. If someone changes `wall_t = 0.5` (too thin to print), the build immediately stops with a clear message instead of silently producing a model that fails on the printer.

---

## Concept 2: Privacy and AI Tools

### What Happens to Files You Upload

When you use cloud-based AI tools — including the `3dm info` AI description feature when it connects to a cloud model, or an external AI chat like Claude or ChatGPT — your files and prompts are processed on remote servers. Depending on the service and its privacy policy, that data may be:

- Used to improve the AI model (potentially meaning others could see examples from your session)
- Stored for a period of time
- Subject to the provider's legal obligations in their jurisdiction

For classroom learning projects, this is generally a non-issue — there's nothing sensitive about learning how to make a parametric box. But if you're ever working on a design that represents real intellectual property (a product idea, a client's design, proprietary measurements), you need to understand what you're sending and to whom.

**Best practices for privacy-sensitive work:**

- Check the AI service's data retention policy before uploading
- Simplify or abstract the design before sending for review (remove specific dimensions, replace proprietary shapes with generic approximations)
- Use local/offline tools for final verification of sensitive designs — the bounding box and slicer checks don't require network access

For the purposes of this certification course, all your projects are learning work and standard cloud AI tools are appropriate. But developing the habit of thinking about this now is professional practice.

---

## Validation Type Summary

| Validation Type                  | What It Checks                               | Reliability                           |
| -------------------------------- | -------------------------------------------- | ------------------------------------- |
| `3dm info` bounding box & volume | Exact model dimensions                       | Deterministic — identical every run   |
| `3dm info` AI description        | Overall shape, component layout              | Non-deterministic — may vary          |
| Slicer layer view                | Wall thickness, internal features, overhangs | Deterministic — reliable for geometry |
| Physical calipers                | Printed part dimensions                      | Ground truth — most authoritative     |
| `assert()` guards                | Parameter validity before render             | Deterministic — runs at build time    |

---

## Quiz — Lesson 4 (15 questions)

1. What does `3dm info` do? What two fundamentally different types of information does it provide?
2. What is the key difference between deterministic validation and AI-based validation?
3. Give two specific examples of information that `3dm info`'s AI description cannot reliably provide.
4. In the verification escalation chain, which level provides "ground truth" for dimensional accuracy, and why?
5. List three common errors that AI tools make when generating OpenSCAD code.
6. True or False: the bounding box reported by `3dm info` might be slightly different each time you run it on the same file.
7. What data privacy concern should you consider before uploading a proprietary design to a cloud AI service?
8. What does the slicer layer view let you verify that the bounding box cannot show?
9. What two characteristics distinguish a strong AI code review prompt from a weak one?
10. If an AI describes your model as "a small cylindrical protrusion" and you designed it as 3.2 mm in diameter, why is this description insufficient for print verification?
11. What is "prompt engineering" and why does it matter when asking an AI to review OpenSCAD code?
12. Write an `assert()` statement that ensures a variable called `layer_height` is between 0.05 mm and 0.4 mm.
13. What is the advantage of using `assert()` at the top of a file compared to manually checking parameter values before every build?
14. Describe one scenario where AI validation would be genuinely useful and one where you must rely on deterministic tools instead.
15. A classmate says "the AI said my model looked fine, so I sent it to print." What is wrong with this approach, and what should they have done instead?

---

## Extension Problems (15)

1. Design a five-item verification checklist for a new 3D printed part. Include items that are deterministic and items that benefit from AI assistance. Label each.
2. Build a "prompt library" for three common design review scenarios (mounting bracket, enclosure with lid, text embossing). Test each prompt against an AI tool and document the output quality.
3. Run `3dm info` on the same STL file five times. Document any variation in the AI description output. What does this variation tell you about using AI for precision work?
4. Create a structured accept/reject log for one full design cycle: design → verification checklist → AI review → physical test → decision to print or revise.
5. Research what "hallucination" means in the context of AI language models. Describe two specific ways an AI could hallucinate during a design review of OpenSCAD code.
6. Create a set of deliberately flawed OpenSCAD files — one with a missing 0.001 offset, one with a Python-style variable reassignment, one with a thin wall below 1.2 mm. Test whether an AI code review catches each flaw.
7. Write a one-page data privacy policy for a classroom 3D printing lab that uses cloud AI tools. What should students be required to understand before uploading files?
8. Build a "verification script" that automatically runs `3dm build`, checks the exit code, runs `3dm info`, and extracts the bounding box for comparison against expected values.
9. Research the difference between "AI-assisted" and "AI-automated" workflows. At what point does removing a human from the verification loop become risky in a manufacturing context?
10. Design an experiment: ask three different AI tools to review the same OpenSCAD file. Document the similarities and differences in their feedback. What does this tell you about AI reliability?
11. Build a comparison table: for five design features (bolt holes, thin walls, snap-fit gaps, embossed text, threaded inserts), identify whether AI review, slicer validation, or physical calipers is most reliable.
12. Research and document what "manifold" means in geometry. What makes a mesh non-manifold? What are the three most common causes in OpenSCAD?
13. Write a one-page explanation of the verification escalation chain written for a student in the 8th grade who has never heard of 3D printing. Use no technical jargon without defining it.
14. Create an `assert()` suite for a parametric box design: validate width, depth, height, wall thickness, and the relationship between wall thickness and overall size. Test it with at least three invalid parameter sets.
15. Write a short guide titled "When to Trust AI and When Not To" specifically for 3D design workflows. Include at least five specific decision rules.

---

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Manifold and Geometry Validation — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language

[^2]: Anthropic Prompt Engineering Guide — https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview

[^3]: Data Privacy — Review your AI provider's terms of service and data retention policy before submitting proprietary design files.

[^4]: NIST AI Risk Management Framework (AI RMF 1.0) — https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf

### Supplemental Resources

- 3DMake GitHub Repository — https://github.com/tdeck/3dmake
- Anthropic Prompt Engineering Overview — https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- NIST AI RMF — https://airc.nist.gov/Home
- PrusaSlicer Documentation — https://docs.prusa3d.com/en/
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 4 are included below. You do not need to open any additional files._

---

## Appendix A: Dice, Dice, Dice — Extension Project

**Estimated time:** 3–6 hours

### Overview

This extension project connects the verification and AI-assisted feedback skills from Lesson 4 to a physical object where design precision is directly measurable: a six-sided die. A fair die is one of the most demanding manufactured objects you can design — it requires uniform geometry, controlled mass distribution, and a randomness that can be tested statistically. The design is straightforward. The verification is where the real learning happens.

This project also inverts the lesson's AI-skepticism lesson in a productive way: it uses AI as part of the design ideation process, then requires _you_ to verify every claim with physical testing and statistical analysis. A die that the AI describes as "balanced and symmetric" should be tested with 100+ real rolls. If the data disagrees with the description, the data wins.

### Learning Objectives

By completing this project, you will:

- Design parametric dice in OpenSCAD with controlled geometry and mass distribution
- Apply the verification chain from Lesson 4 to a physical fabrication outcome
- Test durability and randomness for small, thrown objects
- Conduct and document statistical fairness testing
- Understand how infill, wall thickness, and pip geometry affect roll behavior

### Materials

- Computer with OpenSCAD and slicer
- Printer and filament (PLA recommended — easy to print and dimensionally consistent)
- A small throwing surface (book, box lid, or low-sided tray)
- Calipers if available (for dimensional verification)

### Tasks

1. **Design three distinct die variants** in OpenSCAD using parameters (`size`, `wall`, `infill_proxy`, `pip_depth`, `pip_r`). Each variant must differ in at least one meaningful way — for example: different pip geometry (sunken vs. flat), different wall thickness, or different overall size. All three must be generated from the same parametric module by changing variables at the top of the file.

2. **Document your design decisions.** For each variant, write one short paragraph explaining which parameters you changed and why you expected that change to affect fairness or durability.

3. **Print one sample of each variant.** Use the same material and layer height for all three to isolate the design variable.

4. **Durability test:** five throws onto a soft surface for each die. Record whether any delamination, corner chipping, or pip damage is visible after testing.

5. **Fairness test:** roll each die at least 100 times on a consistent surface. Record every result in the roll data table (Appendix B). Compute the frequency of each face and compare to the expected 16.67%.

6. **Statistical analysis:** calculate the deviation from expected for each face. A die within ±3% per face on 100 rolls is performing within normal random variation. A face appearing more than 20% of the time suggests a design or print bias that warrants investigation.

### Probing Questions

- How does internal infill or a hollow cavity affect mass distribution and roll randomness?
- Which parameter change had the largest effect on fairness or durability, and why do you think that is?
- If one face came up significantly more often than expected, what is the most likely physical cause?

---

### Starter Code

```openscad
// Parametric Six-Sided Die
// All critical dimensions are top-level parameters.
// Change these to create your three variants.

// ---- Parameters ----
die_size   = 16;     // mm — overall cube side length
wall       = 2.0;    // mm — wall thickness (increase for more durability)
pip_r      = 1.0;    // mm — radius of pip hemispheres
pip_depth  = 0.6;    // mm — how deep pips are pressed into the face
corner_r   = 1.2;    // mm — chamfer/rounding radius on die edges
$fn        = 32;     // curve resolution

// Verify printability
assert(wall >= 1.2,
  str("wall (", wall, "mm) is below minimum printable thickness (1.2mm)"));
assert(pip_r > 0 && pip_r < die_size / 6,
  str("pip_r (", pip_r, "mm) is unreasonable for this die size"));
assert(pip_depth < wall,
  str("pip_depth (", pip_depth, "mm) must be less than wall (", wall, "mm)"));

// ---- Pip Positions (for each face, relative to face center) ----
// Each face is a list of [x, y] offsets from center, in pip-spacing units.
// spacing = die_size / 5 gives a comfortable pip layout.
pip_spacing = die_size / 5;

face_1_pips = [[0, 0]];
face_2_pips = [[-1, -1], [1, 1]];
face_3_pips = [[-1, -1], [0, 0], [1, 1]];
face_4_pips = [[-1, -1], [1, -1], [-1, 1], [1, 1]];
face_5_pips = [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]];
face_6_pips = [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]];

// ---- Single Pip (hemisphere subtracted from a face) ----
module pip(depth=pip_depth, r=pip_r) {
  sphere(r=r, $fn=16);
}

// ---- Pips on a face (2D positions, extruded onto face surface) ----
// This module places pips at the given positions on the +Z face of the die.
module place_pips(positions, face_z, r=pip_r, depth=pip_depth, spacing=pip_spacing) {
  for (pos = positions) {
    translate([die_size/2 + pos[0]*spacing,
               die_size/2 + pos[1]*spacing,
               face_z + r - depth])
      pip(depth, r);
  }
}

// ---- Die Body ----
module die_body() {
  // Simple cube — replace with minkowski sphere for rounded edges
  cube([die_size, die_size, die_size]);
}

// ---- Full Die with Pips Subtracted ----
module die() {
  difference() {
    die_body();

    // Face +Z (top): 1 pip
    place_pips(face_1_pips, die_size);
    // Face -Z (bottom): 6 pips (opposite of 1)
    mirror([0, 0, 1])
      place_pips(face_6_pips, 0);
    // Face +X (right): 2 pips (opposite of 5)
    rotate([0, -90, 0]) translate([0, 0, -die_size])
      place_pips(face_2_pips, die_size);
    // Face -X (left): 5 pips
    rotate([0, 90, 0])
      place_pips(face_5_pips, die_size);
    // Face +Y (front): 3 pips (opposite of 4)
    rotate([90, 0, 0]) translate([0, 0, -die_size])
      place_pips(face_3_pips, die_size);
    // Face -Y (back): 4 pips
    rotate([-90, 0, 0])
      place_pips(face_4_pips, die_size);
  }
}

die();
```

**Notes on using this scaffold:**

- To create Variant 2, change `wall` and `pip_depth`. To create Variant 3, change `die_size`. Keep all other parameters the same between variants so you isolate the effect.
- The `assert()` statements will catch unreasonable parameter combinations before rendering.
- For rounded-corner dice (more realistic feel, less edge chipping), replace `die_body()` with a `minkowski()` of a smaller cube and a `sphere(r=corner_r)` — see the AI code gallery in Appendix D for a worked example of this technique.

### Quiz Questions (from workshop)

1. What parameter controls wall thickness in your `.scad` file?
2. Name one method to increase a die's impact resistance without changing its overall size.
3. How would you test a die for randomness? What is the minimum number of rolls for a meaningful result?
4. Why might a hollow die behave differently from a solid one of the same external dimensions?
5. What is a simple visual sign of print-layer delamination on a die?
6. True or False: A perfectly fair die must have uniform weight distribution throughout, including the internal structure.
7. Describe two design approaches for rendering the face numbers: one using `difference()` to create sunken pips, one using `linear_extrude()` for raised numbers.
8. Your die lands on face 1 significantly more often than any other face in 100 rolls. Name two possible physical causes and describe how you would diagnose each.
9. If you increase infill from 15% to 50%, what is the primary effect? (A) Dramatically longer print time, same weight (B) Significantly longer print time and higher weight (C) Same weight, different surface finish. Answer: B
10. Explain why a fair die is an excellent test of manufacturing precision. How does this project connect design decisions to real-world measurable outcomes?

---

## Appendix B: Dice, Dice, Dice — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**Date:** \_\_\_\_\_\_\_\_\_\_
**Description:** Design parametric 3D-printed dice and test for fairness through physical testing and statistical analysis.

---

### Design Concept

- Overall die size and material:
- How will you address uniform weight distribution in your design?
- What design details will differentiate your three variants?

---

### Design Specifications

| Parameter          | Variant 1 | Variant 2 | Variant 3 |
| ------------------ | :-------: | :-------: | :-------: |
| `die_size` (mm)    |           |           |           |
| `wall` (mm)        |           |           |           |
| `pip_r` (mm)       |           |           |           |
| `pip_depth` (mm)   |           |           |           |
| `corner_r` (mm)    |           |           |           |
| Infill % (slicer)  |           |           |           |
| Estimated mass (g) |           |           |           |
| Actual mass (g)    |           |           |           |

**Variant 1 design rationale** (one paragraph — what did you change and what outcome did you expect?):

**Variant 2 design rationale:**

**Variant 3 design rationale:**

---

### Dimensional Verification

Run `3dm build` then `3dm info` on each variant. Record the deterministic output:

| Measurement                  | Variant 1 | Variant 2 | Variant 3 |
| ---------------------------- | :-------: | :-------: | :-------: |
| Bounding box X (mm)          |           |           |           |
| Bounding box Y (mm)          |           |           |           |
| Bounding box Z (mm)          |           |           |           |
| Volume (mm³)                 |           |           |           |
| Expected die_size (mm)       |           |           |           |
| Deviation from expected (mm) |           |           |           |

If any dimension deviates by more than 0.5 mm from `die_size`, investigate before printing.

---

### Durability Test

Five throws per variant onto a soft surface (book cover, box lid, fabric).

| Throw | Variant 1 — Observations | Variant 2 — Observations | Variant 3 — Observations |
| :---: | ------------------------ | ------------------------ | ------------------------ |
|   1   |                          |                          |                          |
|   2   |                          |                          |                          |
|   3   |                          |                          |                          |
|   4   |                          |                          |                          |
|   5   |                          |                          |                          |

Post-durability inspection:

- Any layer delamination visible? (Variant 1 / 2 / 3):
- Any corner chipping? (Variant 1 / 2 / 3):
- Any pip damage? (Variant 1 / 2 / 3):

---

### Fairness Testing — Roll Results

Complete this table for your best-performing variant (or all three if time permits). Minimum 100 rolls per die tested.

**Variant tested:** \_\_\_\_ **Total rolls:** \_\_\_\_ **Date:** \_\_\_\_ **Surface used:** \_\_\_\_

|   Face    | Tally (mark each roll) | Frequency | Percentage | Expected (16.67%) | Deviation |
| :-------: | ---------------------- | :-------: | :--------: | :---------------: | :-------: |
|     1     |                        |           |     %      |      16.67%       |           |
|     2     |                        |           |     %      |      16.67%       |           |
|     3     |                        |           |     %      |      16.67%       |           |
|     4     |                        |           |     %      |      16.67%       |           |
|     5     |                        |           |     %      |      16.67%       |           |
|     6     |                        |           |     %      |      16.67%       |           |
| **Total** |                        |  **100**  |  **100%**  |     **100%**      |           |

---

### Statistical Analysis

**Maximum deviation from expected** (the highest "Deviation" value in your table): \_\_\_\_ %

**Interpretation:**

- Deviation ≤ 3% on all faces: Normal random variation — die performs within acceptable range
- Deviation 3–5% on one face: Mild bias — investigate print quality and pip geometry
- Deviation > 5% on any face: Significant bias — design or print issue warrants redesign

**Your conclusion** (is this die fair within statistical tolerance?):

**Most frequent face:** \_\_\_\_ **Least frequent face:** \_\_\_\_

If the die shows bias, what physical cause do you suspect? (Pip depth on the heavy face? Bed adhesion producing a flatter bottom? Asymmetric corner rounding?):

---

### Reflections

1. Were you surprised by the fairness test results? Did the die perform better or worse than you expected?

2. Which design parameter had the largest effect on the test outcome, and what does that tell you about the physics of the die?

3. What would you change in a fourth iteration to improve fairness?

4. What did this project teach you about the gap between a design that looks correct on screen and one that performs correctly in the physical world?

---

### Attachments Checklist

- [ ] `.scad` file with parametric die module (all three variants producible from one file)
- [ ] Photo of all three printed die variants
- [ ] Raw roll data tally sheet (the actual marks for each roll)
- [ ] Completed frequency and statistical analysis table
- [ ] Dimensional verification output from `3dm info` for each variant

---

### Teacher Feedback

| Category                                                                                                  | Score (0–3) | Notes |
| --------------------------------------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — dice print successfully; fairness testing conducted rigorously                       |             |       |
| Design & Code Quality — parametric module produces all three variants; `assert()` used; code is commented |             |       |
| Documentation — roll data complete; statistical analysis accurate; reflections show understanding         |             |       |
| **Total (0–9)**                                                                                           |             |       |

---

## Appendix C: Dice, Dice, Dice — Instructor Reference

### Project Context

This extension project reinforces the lesson's central theme — trusting data over descriptions — by making the verification stakes concrete and measurable. The fairness of a printed die is something a student can test with their own hands. A die that the AI describes as "perfectly symmetric" but lands on face 1 thirty percent of the time is an immediate, visceral demonstration of why physical testing matters.

The chi-squared test is mentioned in the teacher rubric but is not required for baseline completion. Students who complete it should receive recognition for the additional rigor; students who compute simple percentage deviation are satisfying the core requirement.

### Key Learning Points to Reinforce

**Verification is empirical, not descriptive.** The workflow mirrors Lesson 4's verification chain directly: deterministic check (`3dm info` bounding box), then visual check (slicer layer view), then physical test (the roll data). A student who prints without running `3dm info` first has skipped the deterministic layer.

**Parametric design means one module, multiple variants.** Students who create three separate `.scad` files (one per variant) miss the core parametric design goal. The correct approach is a single file where changing variables at the top produces each variant. This is directly assessable in the code review.

**Statistical fairness has a physical explanation.** When a face appears too frequently, the most common causes are: (1) pip depth asymmetry — faces with fewer/shallower pips have more mass on that face, causing it to face down more often; (2) bed adhesion flattening the bottom face slightly during printing; (3) infill asymmetry if the model origin isn't centered. Students should be guided toward diagnosing the _cause_, not just noting the result.

### Constraints (Enforce These)

- All three variants must be produced from a single parametric `.scad` file
- `assert()` statements must validate key parameters (wall thickness minimum, pip depth less than wall)
- Minimum 100 rolls for fairness testing — 50 rolls is not statistically meaningful
- Raw roll data (the actual tally) must be submitted, not just the summary table

### Assessment Notes

**Strong submissions** show: roll data with a tally sheet (not just a filled-in table), a physical explanation for any bias observed, and a genuine iteration — the student changed something between variants because of a hypothesis, not randomly.

**Common weak areas:** Single-variant testing because "it looked fine," statistical tables with numbers that don't add up to 100%, and designs where pip depth equals wall thickness (causing holes through the die). The `assert()` in the starter code catches the last one at render time.

**Extension for advanced students:** A formal chi-squared goodness-of-fit test. With 100 rolls and 6 faces, the critical value at p=0.05 significance is χ² = 11.07 (5 degrees of freedom). If the computed chi-squared exceeds this value, the die has a statistically significant bias. This is a meaningful cross-curricular mathematics application.

---

## Appendix D: AI Guidance — Advantages, Disadvantages, and Flawed Code Gallery

_This appendix expands on the lesson's AI discussion and provides concrete debuggable examples of typical AI mistakes. Use the flawed examples as debugging exercises — fix each one, then run `3dm build` → `3dm info` → slicer layer view to confirm the fix._

---

### D1 — Advantages of AI in OpenSCAD Development

**Rapid ideation and scaffolding.** AI can convert a natural-language description into a first-draft parametric scaffold quickly. This is useful for getting a starting structure, but the generated code must always be verified — never sent directly to print.

**Accessibility support.** Natural-language descriptions via `3dm info` make model verification more accessible to visually impaired makers who cannot rely on visual inspection of the 3D preview. AI-assisted verbal description of model geometry can substitute for visual inspection when implemented carefully.

**Promptable code review.** A well-structured prompt asking an AI to review OpenSCAD code for boolean pitfalls, coplanar faces, and thin walls can catch issues that a visual scan might miss — as long as you verify any issues it raises rather than trusting its "all clear."

**Iteration speed.** AI can propose parameterizations and printability tips rapidly, letting you evaluate more design directions before committing to print. The key is that you verify deterministically; AI accelerates the ideation, not the verification.

---

### D2 — Disadvantages and Risks

**Non-determinism.** The same prompt given twice may produce different answers. AI is not a source of truth for design specifications or dimensional requirements.

**No geometric guarantees.** AI generates descriptions based on inference from rendered images or code text — it does not compute solid geometry. It can describe a model as correct that has non-manifold geometry or zero-thickness walls that will fail in the slicer.

**Standards and tolerances gaps.** AI may suggest clearances, wall thicknesses, or print settings that contradict established practice for your specific printer and material. Always check AI suggestions against the lesson's reference values.

**Hallucinations.** AI tools sometimes generate code using functions that do not exist in OpenSCAD, such as `rounded_cube()`, `fillet3d()`, or `bevel_edge()`. These functions will cause a compile error if you attempt to use them. The AI is not aware it has invented them.

**Privacy and IP exposure.** Cloud AI tools may retain uploaded files or use them for training data, depending on their terms of service. Before uploading a design file to any cloud AI service, check the provider's data retention and privacy policy. In a classroom context, no personally identifiable or commercially sensitive designs should be uploaded without explicit instructor approval.

---

### D3 — Flawed AI-Generated OpenSCAD — Debugging Gallery

Use each example below as a debugging exercise. Identify the flaw, fix it, and verify the fix with `3dm build` followed by `3dm info`.

---

**Example 1: Hallucinated Convenience Function**

The AI claims OpenSCAD has a `rounded_cube()` built-in. It does not.

```openscad
// ❌ FLAWED — rounded_cube() does not exist in OpenSCAD
module enclosure() {
  rounded_cube(size=[60, 40, 20], r=3);
  translate([10, 10, 0]) cylinder(h=20, r=2, center=false);
}
enclosure();
```

**Fixed version** — use `minkowski()` with a `sphere()` instead:

```openscad
// ✅ CORRECT — native minkowski approach for rounded corners
module rounded_box(x=60, y=40, z=20, r=3) {
  minkowski() {
    cube([x - 2*r, y - 2*r, z - 2*r]);
    sphere(r=r, $fn=32);
  }
}
rounded_box();
```

_What to learn from this:_ If an AI gives you OpenSCAD code that uses a function name you haven't seen before, look it up in the OpenSCAD documentation before using it. A compile error at render time is the warning sign.

---

**Example 2: Coplanar Boolean (Missing 0.001 Offset)**

When the subtracted shape shares an exact face with the outer shape, some renderers produce Z-fighting artifacts and unreliable geometry.

```openscad
// ❌ FLAWED — bottom faces are coplanar (Z=0 on both shapes)
difference() {
  cube([30, 30, 10]);
  translate([5, 5, 0]) cube([20, 20, 10]);
}
```

**Fixed version** — extend the subtracted shape by 0.001 mm past each coplanar face:

```openscad
// ✅ CORRECT — 0.001 overshoot on both Z faces
difference() {
  cube([30, 30, 10]);
  translate([5, 5, -0.001]) cube([20, 20, 10 + 0.002]);
}
```

_What to learn from this:_ Any time a `difference()` subtraction should go all the way through a face, add a 0.001 mm overshoot. This is a mechanical rule, not an approximation — apply it consistently.

---

**Example 3: Wrong Transform Order (Misplaced Holes)**

Rotate-then-translate and translate-then-rotate produce different results. AI often gets this wrong.

```openscad
// ❌ FLAWED — rotate applied before translate; hole ends up in wrong position
module bracket(width=40, height=20, th=3, hole_r=3) {
  difference() {
    cube([width, th, height]);
    translate([width/2, th/2, height/2])
      rotate([90, 0, 0])
        cylinder(h=th, r=hole_r, center=true);
  }
}
bracket();
```

**Fixed version** — the translate sets the center, then the rotate orients correctly:

```openscad
// ✅ CORRECT — translate to center, then rotate into the correct plane
module bracket(width=40, height=20, th=3, hole_r=3) {
  difference() {
    cube([width, th, height]);
    translate([width/2, th/2, height/2])
      rotate([90, 0, 0])
        cylinder(h=th + 0.002, r=hole_r, center=true);
  }
}
bracket();
```

_What to learn from this:_ Always check hole placement in the slicer layer view. The AI's code may look syntactically correct but produce geometry that is correct only for a specific, unverified set of assumptions about how transforms compose.

---

**Example 4: Procedural Variable Reassignment**

OpenSCAD is a declarative language — variables are not mutable. AI trained on Python, JavaScript, or other imperative languages sometimes generates code that assumes variables can be updated.

```openscad
// ❌ FLAWED — OpenSCAD does not allow reassignment of variables
width = 60;
width = width + 10; // This silently uses the LAST assignment; the first is ignored
cube([width, 20, 10]);
```

**Fixed version** — use distinct names for derived values:

```openscad
// ✅ CORRECT — derive a new variable from the base value
base_w  = 60;
final_w = base_w + 10;
cube([final_w, 20, 10]);
```

_What to learn from this:_ In OpenSCAD, a variable that appears assigned twice will use the last assignment for the entire file — including places that appear before the second assignment in the code. This is a source of subtle bugs. Always use a new name for derived values.

---

**Example 5: Unsafe Parameter Limits (Geometry Inversion)**

AI-generated modules often lack parameter validation. When given edge-case values, the geometry inverts silently.

```openscad
// ❌ FLAWED — no validation; wall=12 on a w=20 box inverts the geometry
module box(w=30, d=30, h=20, wall=3) {
  difference() {
    cube([w, d, h]);
    translate([wall, wall, -0.001])
      cube([w - 2*wall, d - 2*wall, h + 0.002]);
  }
}
box(w=20, d=20, h=15, wall=12); // wall larger than half the width — silent failure
```

**Fixed version** — add `assert()` to catch invalid combinations:

```openscad
// ✅ CORRECT — assert() catches invalid parameters before geometry is computed
module box(w=30, d=30, h=20, wall=3) {
  assert(w > 0 && d > 0 && h > 0, "All dimensions must be positive");
  assert(wall > 0 && wall < min(w, d) / 2,
    str("wall (", wall, "mm) must be less than min(w,d)/2 = ", min(w,d)/2, "mm"));
  difference() {
    cube([w, d, h]);
    translate([wall, wall, -0.001])
      cube([w - 2*wall, d - 2*wall, h + 0.002]);
  }
}
box(w=20, d=20, h=15, wall=12); // will halt with a clear error message
```

_What to learn from this:_ `assert()` is your safety net for parametric designs. Any relationship between parameters that could produce invalid geometry should have an `assert()` checking it. This is especially important for designs you share with others.

---

**Example 6: Hallucinated Text Function + Misplaced Emboss**

Two compound errors: a function that doesn't exist (`fillet_text()`), and a text position that extends outside the model face.

```openscad
// ❌ FLAWED — fillet_text() does not exist; second translate puts text outside the body
difference() {
  cube([80, 40, 6]);
  translate([0, 0, 0])
    fillet_text("RYAN", size=10, radius=1); // bogus function
  translate([70, 20, 3])
    linear_extrude(2) text("RYAN", size=10); // misplaced — extends off the edge
}
```

**Fixed version** — use standard `text()` with `linear_extrude()`, centered on the face:

```openscad
// ✅ CORRECT — centered debossed text using standard OpenSCAD functions
module top_deboss(txt="RYAN", size=10, depth=1) {
  translate([40, 20, 6 + 0.001])  // position at center of top face
    linear_extrude(height=depth)
      text(txt, size=size, halign="center", valign="center");
}

difference() {
  cube([80, 40, 6]);
  top_deboss();
}
```

_What to learn from this:_ Text positioning requires knowing the face center, not just a rough location. Use `halign="center"` and `valign="center"` with a translate to the face center. The 0.001 mm overshoot on the Z translate ensures the subtracted text breaks through the face cleanly.

---

**Example 7: Zero Clearance on a Fitted Lid**

AI-generated box and lid designs often omit clearance, making the lid impossible to remove after printing.

```openscad
// ❌ FLAWED — zero clearance means the lid walls will fuse to the box walls
module box_outer(sz=[60, 40, 20], wall=2) { cube(sz); }
module box_inner(sz=[60, 40, 20], wall=2) { cube([sz[0]-2*wall, sz[1]-2*wall, sz[2]]); }

difference() {
  box_outer();
  translate([2, 2, -0.001]) box_inner(); // clearance = 0; lid won't come off
}
```

**Fixed version** — add a clearance parameter to the socket dimensions:

```openscad
// ✅ CORRECT — clearance creates the physical gap needed for the lid to fit and move
module box_with_clearance(w=60, d=40, h=20, wall=2, clr=0.25) {
  assert(clr > 0 && clr < 1.0, "Clearance should be between 0 and 1mm for most FDM fits");
  difference() {
    cube([w, d, h]);
    translate([wall + clr, wall + clr, -0.001])
      cube([w - 2*(wall + clr), d - 2*(wall + clr), h + 0.002]);
  }
}
box_with_clearance();
```

_What to learn from this:_ FDM-printed parts that are designed to fit together always need clearance. A nominal 0mm gap at design time produces a stuck or impossible fit after printing. Typical clearance for a slip fit is 0.2–0.3 mm; for a press fit, 0.0–0.1 mm. This topic is covered in depth in Lesson 8.
