# Lesson 4 — AI-Enhanced Verification and Multimodal Feedback

Estimated time: 90–120 minutes

---

## Learning Objectives

By the end of this lesson you will be able to:

- Use `3dm info` effectively and know what to do when it fails
- Verify AI-generated OpenSCAD code systematically before printing
- Build a personal verification chain for any critical design feature
- Use `3dm preview` and slicer layer view as fallback verification methods
- Apply AI description to accessibility workflows for visually impaired makers
- Understand deterministic vs. AI-assisted validation
- Apply prompt engineering techniques for design feedback
- Recognize when to trust, question, or reject AI suggestions
- Understand data privacy considerations when using cloud AI tools

---

## Materials

- 3dMake project with a completed STL from Lessons 1–3
- Terminal
- Optional: AI chat interface (Claude, ChatGPT, or similar)

---

## Step 1 — Using `3dm info`

`3dm info` sends your built STL to an AI vision model and returns a natural-language description of the geometry.

```bash
# Basic usage — Linux/macOS
3dm build
3dm info

# With a specific view angle
3dm info --view front
3dm info --view top
3dm info --view isometric

# Save the description to a file for review
3dm info --output description.txt

# Windows PowerShell
3dm build
3dm info | Out-File -FilePath description.txt -Encoding UTF8

# Windows CMD
3dm build
3dm info > description.txt
```

**What `3dm info` does well:**

- Identifying overall shape (box, cylinder, curved surface)
- Counting distinct parts in a colored assembly
- Describing relative positions of components
- Confirming presence of holes, slots, and cutouts

**What `3dm info` does poorly:**

- Precise dimensional measurements (it is not a caliper)
- Distinguishing very similar shapes (two similar cylinders, thin walls)
- Complex interiors that are not visible from outside
- Geometry with very fine detail smaller than ~1mm

---

## Step 2 — When `3dm info` Is Not Useful

AI geometry descriptions can be vague, wrong, or generic. When you receive a response like _"The model appears to be a complex 3D shape with multiple features"_, use this escalation path:

**Fallback Verification Chain (in order of reliability):**

**1. `3dm info` — always accurate**

```bash
3dm info
# Bounding Box: 50.0 x 40.0 x 30.0 mm
# Volume:       18000 mm³
```

The bounding box and volume are computed deterministically from the mesh — they cannot be wrong if the build succeeded.

**2. Slicer layer preview**  
Open `build/main.stl` in your slicer (Cura, PrusaSlicer, etc.) and navigate layer by layer. Screen readers can announce layer numbers; each layer shows a cross-section of the geometry.

```bash
# Generate a layer-by-layer preview using 3dm (if supported)
3dm preview slice --layer-count

# Windows PowerShell
3dm preview slice --layer-count | Out-File -FilePath slice_report.txt -Encoding UTF8

# Windows CMD
3dm preview slice --layer-count > slice_report.txt
```

**3. Isolate and describe a single module**  
If your full model is too complex to describe accurately, build one module at a time:

```bash
# Temporarily add to your .scad file:
# module_name_here();  // comment out everything else
3dm build
3dm info
```

**4. Physical measurement**  
For tolerance-critical features, print a test coupon (see Lesson 8) and measure with digital calipers. Physical measurement is the ground truth.

---

## Step 3 — Documentation Pattern for Verification

When you verify a critical design feature, write down _which method_ confirmed it. This is your design audit trail.

```
DESIGN VERIFICATION LOG — phone_stand_v2.scad
Date: 2026-03-01

Feature: USB-C slot width
  Designed: 9.5mm wide × 3.5mm tall
  Verified by: 3dm info bounding box of isolated slot module -> 9.5 × 3.5 confirmed ✓
  AI description: "rectangular cutout, approximately 10mm wide" (approximate only)
  Physical: measured with calipers after first test print -> 9.4mm (within 0.1mm tolerance) ✓

Feature: Mounting feet height
  Designed: 2.0mm
  Verified by: 3dm info of isolated foot module -> 2.0mm ✓
  AI description: vague ("small protrusion")
  Physical: not yet printed
```

---

## Step 4 — Using AI to Generate OpenSCAD Code

AI tools (ChatGPT, Claude, Copilot) can write OpenSCAD code from a text description. This accelerates development but introduces a verification requirement: **AI-generated geometry code is frequently subtly wrong. It is also hilariously and catastrophically wrong**.

The most common AI errors in OpenSCAD:

- Forgetting the 0.001 co-planar rule in `difference()`
- Using Python-style variable reassignment (doesn't work in OpenSCAD)
- Getting transform order wrong (see Lesson 7)
- Producing non-manifold geometry that looks correct but fails the slicer

**AI Code Generation Verification Checklist:**

```
AI-GENERATED CODE VERIFICATION CHECKLIST
Run each check in order. Stop if any check fails and fix before proceeding.

[ ] 1. SYNTAX     Does it build without errors?
        3dm build   ← no red errors in console

[ ] 2. DIMENSIONS Does the bounding box match your intent?
        3dm info    ← check width × depth × height

[ ] 3. BOOLEAN    Does every difference() use the 0.001 offset rule?
        Search the code for: translate([*, *, 0])  inside difference()
        Should be:           translate([*, *, -0.001])

[ ] 4. PARAMETERS Does changing each parameter produce expected results?
        Test min values, max values, and zero edge cases

[ ] 5. MANIFOLD   Does the slicer accept it without warnings?
        Open build/main.stl in PrusaSlicer or Cura
        Check for "non-manifold" or "open shells" warnings

[ ] 6. ASSEMBLY   If multi-part: do components fit together in slicer?
        Import all parts; check for collisions and gaps
```

### Quick AI Guidance + Simple Flaw Example

**When AI Helps:** rapid scaffolding of parametric structures, natural-language descriptions for accessibility, and idea generation.

**When to be Skeptical:** anything involving tolerances, boolean boundaries, transform order, or process-dependent fit.

**Simple flawed AI example (coplanar subtraction):**

```openscad
// Flawed: inner subtraction is coplanar -> slicer artifacts
difference() {
  cube([30,30,10]);
  translate([5,5,0]) cube([20,20,10]);
}
```

**Fix:**

```openscad
// Correct: nudge Z with -0.001 and +0.002 for robust difference
difference() {
  cube([30,30,10]);
  translate([5,5,-0.001]) cube([20,20,10+0.002]);
}
```

---

## Step 5 — Batch Verification Across Parameter Variants

When you have a parametric model, verify it at the extremes of its parameter range — not just the default values. A model can be valid at `width=30` but invalid at `width=5`.

### Linux / macOS (bash)

```bash
#!/bin/bash
# batch_verify.sh — build and check bounding box for multiple parameter sets

set -e
LOG="build/verify_log.txt"
> "$LOG"  # clear log

verify_build() {
  local params="$1"
  local desc="$2"
  echo "Testing: $desc" | tee -a "$LOG"

  # Build with parameters
  if openscad $params -o /tmp/test_verify.stl src/main.scad 2>>/tmp/build_err.txt; then
    info=$(3dm info --file /tmp/test_verify.stl 2>/dev/null || echo "info failed")
    echo "  OK: $info" | tee -a "$LOG"
  else
    echo "  FAILED — see /tmp/build_err.txt" | tee -a "$LOG"
  fi
}

verify_build '-D "width=10" -D "height=5"'   "minimum size"
verify_build '-D "width=30" -D "height=10"'  "default size"
verify_build '-D "width=80" -D "height=25"'  "maximum size"

echo ""
echo "Full log: $LOG"
```

### Windows (PowerShell)

```powershell
# batch_verify.ps1 — build and verify parameter variants

$logFile = "build\verify_log.txt"
New-Item -Force -Path $logFile -ItemType File | Out-Null

function Test-Build($params, $description) {
    Write-Host "Testing: $description"
    Add-Content $logFile "Testing: $description"

    $argList = $params + @("-o", "build\test_verify.stl", "src\main.scad")
    $result = & openscad @argList 2>&1

    if ($LASTEXITCODE -eq 0) {
        $info = & 3dm info --file "build\test_verify.stl" 2>&1
        $msg = "  OK: $info"
    } else {
        $msg = "  FAILED"
    }

    Write-Host $msg
    Add-Content $logFile $msg
}

Test-Build @("-D", "width=10", "-D", "height=5")  "minimum size"
Test-Build @("-D", "width=30", "-D", "height=10") "default size"
Test-Build @("-D", "width=80", "-D", "height=25") "maximum size"

Write-Host "Full log: $logFile"
```

### Windows (CMD)

```cmd
@echo off
REM batch_verify.cmd — simple parameter variant check (use PowerShell for full features)

echo Testing minimum size...
openscad -D "width=10" -D "height=5" -o build\test_min.stl src\main.scad
if %ERRORLEVEL% EQU 0 (echo   OK) else (echo   FAILED)

echo Testing default size...
openscad -D "width=30" -D "height=10" -o build\test_default.stl src\main.scad
if %ERRORLEVEL% EQU 0 (echo   OK) else (echo   FAILED)

echo Testing maximum size...
openscad -D "width=80" -D "height=25" -o build\test_max.stl src\main.scad
if %ERRORLEVEL% EQU 0 (echo   OK) else (echo   FAILED)
```

---

## Step 6 — Advanced: Encoding Design Intent as `assert()` Guards

When using AI-generated code, add `assert()` guards at the top of your file to encode your design intent. If a future code change violates the intent, rendering halts with a message.

```openscad
// Design intent guards — run at parse time, before any geometry
width  = 30;
height = 10;
wall_t = 2;

// These asserts define and enforce design constraints:
assert(width  >= 10,  str("width must be >= 10mm for structural integrity, got: ", width));
assert(height >= 5,   str("height must be >= 5mm, got: ", height));
assert(wall_t >= 1.5, str("wall_t must be >= 1.5mm to print reliably, got: ", wall_t));
assert(wall_t < width / 2,
  str("wall_t (", wall_t, ") must be less than half of width (", width/2, ")"));

// Now the geometry — guaranteed to be within valid bounds
difference() {
  cube([width, width, height]);
  translate([wall_t, wall_t, -0.001])
    cube([width - 2*wall_t, width - 2*wall_t, height + 0.002]);
}
```

---

## Concepts & Best Practices

### Deterministic vs. AI Validation

| Validation Type   | What It Checks                                                  | Reliability                                                          |
| ----------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| Slicer validation | Manifold geometry, wall thickness, overhang angles              | Deterministic — same result every run                                |
| `3dm info` (AI)   | Human-readable shape description, print orientation suggestions | Non-deterministic — may vary slightly (or dramatically) between runs |
| Manual calipers   | Printed part dimensions                                         | Ground truth                                                         |

AI-assisted tools like `3dm info` are useful for generating first-pass descriptions and spotting obvious issues, but they should not replace deterministic checks (slicer validation, geometry analysis).[^1]

### Craft Effective Verification Prompts

When using an AI assistant (Claude, GPT, etc.) to review OpenSCAD code, prompt quality determines output quality:

**Weak prompt:**

```
Review my OpenSCAD code.
```

or

```
tell me what I need to do to improve this model
```

**Strong prompt:**

```
I have an OpenSCAD model that creates a parametric mounting bracket with two M3 holes.
Parameters: width=40, height=30, depth=8, hole_r=3.2.
Please review this code for:
1. Correct use of the 0.001 offset rule in all difference() operations
2. Manifold-safe geometry (no co-planar faces)
3. Whether hole_r=3.2 is an appropriate M3 clearance hole diameter
4. Any parameters that could produce invalid geometry if set to extreme values
Respond with: issues found, severity (critical/warning/note), and suggested fix for each.
```

A structured prompt produces structured, actionable feedback.[^2]

### Validate AI Suggestions Before Applying Them

AI tools can produce plausible-sounding but incorrect recommendations. Always apply a verification step:

```
AI suggests: "Change hole_r to 3.0 for an M3 clearance hole"

Verification steps:
1. Check ISO standard: M3 clearance hole = 3.2mm (medium fit), 3.4mm (loose fit)
2. AI recommendation of 3.0mm would be an interference fit, not a clearance hole
3. Reject the suggestion; keep 3.2mm

Conclusion: AI was wrong. Apply human domain knowledge.
```

Document your accept/reject decisions in your project notes for future reference.

### Privacy and Data Considerations

- **Don't upload proprietary designs** to free-tier AI services without checking their data retention policies
- **Anonymize or simplify** your model before requesting AI review if IP is a concern
- `3dm info` uses the same AI backend as configured in your 3dMake settings — check your instance's privacy settings

For classroom use, `3dm info` on non-sensitive learning projects is appropriate. For professional designs, consult your organization's data policy.[^3]

### Checkpoint

- After step 2: You can articulate the difference between deterministic and AI-based validation.
- After step 3: Your AI prompt produces structured, reviewable output.
- After step 4: You have documented at least one accept or reject decision for an AI suggestion.

### Common AI Validation Patterns

**Pattern 1: Geometry Sanity Check**

```bash
# Ask AI to describe what it "sees" in your model
3dm info

# Then compare to your design checklist:
# - Correct overall dimensions? ✓/✗
# - Expected number of holes/features? ✓/✗
# - No unexpected geometry? ✓/✗
# - Print orientation makes sense? ✓/✗
```

**Pattern 2: Code Review Prompt Template**

Use this template when asking an AI to review OpenSCAD code:

```
Context: [describe what the part is and what it will be used for]
Code: [paste your OpenSCAD code]
Parameters: [list key parameter values]
Review for:
  - Boolean operation correctness (0.001 offsets where needed)
  - Parameter range safety (will extreme values break geometry?)
  - Printability (overhangs, thin walls, minimum feature size)
  - Code clarity (variable names, comments)
Output format: numbered list of issues, each with severity and fix
```

**Pattern 3: Iterative Improvement Loop**

```
1. Write initial design
2. Run 3dm build -> fix compile errors
3. Run slicer -> fix geometry errors (deterministic)
4. Run 3dm info or AI review -> address suggestions (with verification)
5. Print test piece -> compare to spec
6. Iterate on parameters if needed
```

See the **AI Appendix for this chapter — AI Guidance & Flawed OpenSCAD Examples** for detailed failure modes and corrected code patterns.

---

## Exercises

**Exercise 4.1:** Build your phone stand from Lesson 3. Run `3dm info` from multiple angles (`--view front`, `--view top`, `--view isometric`). Write a verification log documenting which features you could and couldn't confirm.

**Exercise 4.2:** Ask an AI tool to generate OpenSCAD code for a simple parametric box with a lid. Apply the AI Code Generation Verification Checklist to the result. Document every error you find.

**Exercise 4.3 (Advanced):** Write a bash/PowerShell script that tests your phone stand at 5 different `angle` parameter values (30°, 45°, 60°, 75°, 90°) and logs the bounding box for each. Confirm that the bounding box height increases as angle increases.

---

## Quiz — Lesson 3dMake.4 (15 questions)

1. What does `3dm info` do?
2. What is the difference between deterministic validation and AI-based validation?
3. Give two elements of a strong AI code review prompt that a weak prompt lacks.
4. Why should you always verify AI suggestions before applying them? Give a specific example.
5. What type of geometry errors does slicer validation catch that AI description does not?
6. True or False: `3dm info` will always produce identical output for the same STL file.
7. What data privacy concern should you consider when uploading a design to a cloud AI service?
8. In the iterative improvement loop described above, at which step should you run slicer validation?
9. What does it mean for a model to be "non-deterministic" in the context of AI feedback?
10. Describe one scenario where AI validation would be useful and one where you must rely on deterministic tools instead.
11. What is "prompt engineering" and why does it matter when using AI for code review?
12. If an AI tool suggests a geometry change that contradicts an ISO standard, what should you do?
13. What is the NIST AI Risk Management Framework, and in what professional context would it be relevant to AI-assisted design validation?[^4]
14. Describe two ways you could reduce IP exposure when using a cloud AI tool to review a proprietary design.
15. In the validation table (deterministic vs. AI vs. calipers), which method provides "ground truth" and why?

---

## Extension Problems (15)

1. Design a validation checklist for a new 3D printed part. Include at least five items that are deterministic and three that benefit from AI assistance.
2. Build a "prompt library" for three common design review scenarios: mounting brackets, enclosures, and text embossing. Test each prompt and document the output quality.
3. Run `3dm info` on the same STL five times. Document any variation in output. What does this tell you about reproducibility?
4. Create a structured accept/reject log for one full design cycle (design -> AI review -> verification -> decision). Share the log with a classmate for peer review.
5. Research what "hallucination" means in the context of AI language models. Document two examples of how an AI might hallucinate in a design review context.
6. Design an experiment to compare AI-suggested print orientation with slicer-suggested orientation for 10 different models. Tabulate the agreement rate.
7. Write a one-page data privacy policy for an imaginary classroom 3D printing lab that uses cloud AI tools. Reference your school's existing digital privacy guidelines.
8. Create a set of deliberately flawed OpenSCAD files (missing 0.001 offsets, wrong hole sizes, thin walls) and test whether AI review catches all the flaws.
9. Build a "verification script" using `3dm build` and slicer command-line tools that automates the deterministic validation steps in the iterative loop.
10. Interview a classmate using the stakeholder interview technique from Lesson 11 to understand their mental model of AI validation. What assumptions do they have that might be incorrect?
11. Research the difference between AI classification tasks (is this a manifold mesh?) and AI generation tasks (describe this mesh). Document why classification is more reliable for geometric validation.
12. Build a comparison table: for each of five design features (holes, thin walls, overhangs, text, interlocking parts), list whether AI review, slicer validation, or physical test is most reliable.
13. Write a "red teaming" exercise: intentionally try to get an AI tool to give you incorrect geometry advice. Document what prompts succeeded and what that means for how you use AI in design work.
14. Create a lesson plan (5 minutes) explaining AI validation concepts to a fellow student who has never used an AI tool. Focus on the deterministic vs. non-deterministic distinction.
15. Research and document the difference between "AI-assisted" and "AI-automated" workflows. At what point does removing the human from the validation loop become risky?

---

## References and Helpful Resources

[^1]: OpenSCAD User Manual — Manifold and Geometry Validation - https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language

[^2]: Anthropic Prompt Engineering Guide — https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview. Covers structured prompting techniques applicable to code review use cases.

[^3]: Data Privacy in AI-Assisted Tools — General guidance: review your AI provider's terms of service and data retention policy before submitting proprietary or sensitive design files.

[^4]: NIST AI Risk Management Framework (AI RMF 1.0) — National Institute of Standards and Technology, 2023. https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf. Provides a structured framework for managing risks in AI-integrated workflows.

### Supplemental Resources

- 3DMake GitHub Repository — https://github.com/tdeck/3dmake
- Anthropic Prompt Engineering Overview — https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- NIST AI RMF — https://airc.nist.gov/Home
- PrusaSlicer Documentation — https://docs.prusa3d.com/en/
