[Header 3 ("lesson-4--ai-enhanced-verification-and-multimodal-feedback", [], []) [Str "Lesson 4 — AI-Enhanced Verification and Multimodal Feedback"], Para [Emph [Str "[", Str "CORRECTED — March 2026 Curriculum Revision", Str "]"]], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Use ", Code ("", [], []) "3dm info", Str " effectively and know what to do when it fails"]], [Plain [Str "Verify AI-generated OpenSCAD code systematically before printing"]], [Plain [Str "Build a personal verification chain for any critical design feature"]], [Plain [Str "Use ", Code ("", [], []) "3dm preview", Str " and slicer layer view as fallback verification methods"]], [Plain [Str "Apply AI description to accessibility workflows for visually impaired makers"]]], HorizontalRule, Header 4 ("step-1--using-3dm-info", ["unnumbered", "unlisted"], []) [Str "Step 1 — Using ", Code ("", [], []) "3dm info"], Para [Code ("", [], []) "3dm info", Str " sends your built STL to an AI vision model and returns a natural-language description of the geometry."], CodeBlock ("", ["bash"], []) "# Basic usage — Linux/macOS
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
", Para [Strong [Str "What ", Code ("", [], []) "3dm info", Str " does well:"]], BulletList [[Plain [Str "Identifying overall shape (box, cylinder, curved surface)"]], [Plain [Str "Counting distinct parts in a colored assembly"]], [Plain [Str "Describing relative positions of components"]], [Plain [Str "Confirming presence of holes, slots, and cutouts"]]], Para [Strong [Str "What ", Code ("", [], []) "3dm info", Str " does poorly:"]], BulletList [[Plain [Str "Precise dimensional measurements (it is not a caliper)"]], [Plain [Str "Distinguishing very similar shapes (two similar cylinders, thin walls)"]], [Plain [Str "Complex interiors that are not visible from outside"]], [Plain [Str "Geometry with very fine detail smaller than ", Str "~", Str "1mm"]]], HorizontalRule, Header 4 ("step-2--when-3dm-info-is-not-useful", ["unnumbered", "unlisted"], []) [Str "Step 2 — When ", Code ("", [], []) "3dm info", Str " Is Not Useful"], Para [Str "AI geometry descriptions can be vague, wrong, or generic. When you receive a response like ", Emph [Str "\"The model appears to be a complex 3D shape with multiple features\""], Str ", use this escalation path:"], Para [Strong [Str "Fallback Verification Chain (in order of reliability):"]], Para [Strong [Str "1. ", Code ("", [], []) "3dm info", Str " — always accurate"]], CodeBlock ("", ["bash"], []) "3dm info
# Bounding Box: 50.0 x 40.0 x 30.0 mm
# Volume:       18000 mm³
", Para [Str "The bounding box and volume are computed deterministically from the mesh — they cannot be wrong if the build succeeded."], Para [Strong [Str "2. Slicer layer preview"], SoftBreak, Str "Open ", Code ("", [], []) "build/main.stl", Str " in your slicer (Cura, PrusaSlicer, etc.) and navigate layer by layer. Screen readers can announce layer numbers; each layer shows a cross-section of the geometry."], CodeBlock ("", ["bash"], []) "# Generate a layer-by-layer preview using 3dm (if supported)
3dm preview slice --layer-count

# Windows PowerShell
3dm preview slice --layer-count | Out-File -FilePath slice_report.txt -Encoding UTF8

# Windows CMD
3dm preview slice --layer-count > slice_report.txt
", Para [Strong [Str "3. Isolate and describe a single module"], SoftBreak, Str "If your full model is too complex to describe accurately, build one module at a time:"], CodeBlock ("", ["bash"], []) "# Temporarily add to your .scad file:
# module_name_here();  // comment out everything else
3dm build
3dm info
", Para [Strong [Str "4. Physical measurement"], SoftBreak, Str "For tolerance-critical features, print a test coupon (see Lesson 8) and measure with digital calipers. Physical measurement is the ground truth."], HorizontalRule, Header 4 ("step-3--documentation-pattern-for-verification", ["unnumbered", "unlisted"], []) [Str "Step 3 — Documentation Pattern for Verification"], Para [Str "When you verify a critical design feature, write down ", Emph [Str "which method"], Str " confirmed it. This is your design audit trail."], CodeBlock ("", [""], []) "DESIGN VERIFICATION LOG — phone_stand_v2.scad
Date: 2026-03-01

Feature: USB-C slot width
  Designed: 9.5mm wide × 3.5mm tall
  Verified by: 3dm info bounding box of isolated slot module → 9.5 × 3.5 confirmed ✓
  AI description: \"rectangular cutout, approximately 10mm wide\" (approximate only)
  Physical: measured with calipers after first test print → 9.4mm (within 0.1mm tolerance) ✓

Feature: Mounting feet height
  Designed: 2.0mm
  Verified by: 3dm info of isolated foot module → 2.0mm ✓
  AI description: vague (\"small protrusion\")
  Physical: not yet printed
", HorizontalRule, Header 4 ("step-4--using-ai-to-generate-openscad-code", ["unnumbered", "unlisted"], []) [Str "Step 4 — Using AI to Generate OpenSCAD Code"], Para [Str "AI tools (ChatGPT, Claude, Copilot) can write OpenSCAD code from a text description. This accelerates development but introduces a verification requirement: ", Strong [Str "AI-generated geometry code is frequently subtly wrong"], Str "."], Para [Str "The most common AI errors in OpenSCAD:"], BulletList [[Plain [Str "Forgetting the 0.001 co-planar rule in ", Code ("", [], []) "difference()"]], [Plain [Str "Using Python-style variable reassignment (doesn't work in OpenSCAD)"]], [Plain [Str "Getting transform order wrong (see Lesson 7)"]], [Plain [Str "Producing non-manifold geometry that looks correct but fails the slicer"]]], Para [Strong [Str "AI Code Generation Verification Checklist:"]], CodeBlock ("", [""], []) "AI-GENERATED CODE VERIFICATION CHECKLIST
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
        Check for \"non-manifold\" or \"open shells\" warnings

[ ] 6. ASSEMBLY   If multi-part: do components fit together in slicer?
        Import all parts; check for collisions and gaps
", HorizontalRule, Header 4 ("step-5--batch-verification-across-parameter-variants", ["unnumbered", "unlisted"], []) [Str "Step 5 — Batch Verification Across Parameter Variants"], Para [Str "When you have a parametric model, verify it at the extremes of its parameter range — not just the default values. A model can be valid at ", Code ("", [], []) "width=30", Str " but invalid at ", Code ("", [], []) "width=5", Str "."], Header 5 ("linux--macos-bash", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# batch_verify.sh — build and check bounding box for multiple parameter sets

set -e
LOG=\"build/verify_log.txt\"
> \"$LOG\"  # clear log

verify_build() {
  local params=\"$1\"
  local desc=\"$2\"
  echo \"Testing: $desc\" | tee -a \"$LOG\"

  # Build with parameters
  if openscad $params -o /tmp/test_verify.stl src/main.scad 2>>/tmp/build_err.txt; then
    info=$(3dm info --file /tmp/test_verify.stl 2>/dev/null || echo \"info failed\")
    echo \"  OK: $info\" | tee -a \"$LOG\"
  else
    echo \"  FAILED — see /tmp/build_err.txt\" | tee -a \"$LOG\"
  fi
}

verify_build '-D \"width=10\" -D \"height=5\"'   \"minimum size\"
verify_build '-D \"width=30\" -D \"height=10\"'  \"default size\"
verify_build '-D \"width=80\" -D \"height=25\"'  \"maximum size\"

echo \"\"
echo \"Full log: $LOG\"
", Header 5 ("windows-powershell", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# batch_verify.ps1 — build and verify parameter variants

$logFile = \"build\\verify_log.txt\"
New-Item -Force -Path $logFile -ItemType File | Out-Null

function Test-Build($params, $description) {
    Write-Host \"Testing: $description\"
    Add-Content $logFile \"Testing: $description\"

    $argList = $params + @(\"-o\", \"build\\test_verify.stl\", \"src\\main.scad\")
    $result = & openscad @argList 2>&1

    if ($LASTEXITCODE -eq 0) {
        $info = & 3dm info --file \"build\\test_verify.stl\" 2>&1
        $msg = \"  OK: $info\"
    } else {
        $msg = \"  FAILED\"
    }

    Write-Host $msg
    Add-Content $logFile $msg
}

Test-Build @(\"-D\", \"width=10\", \"-D\", \"height=5\")  \"minimum size\"
Test-Build @(\"-D\", \"width=30\", \"-D\", \"height=10\") \"default size\"
Test-Build @(\"-D\", \"width=80\", \"-D\", \"height=25\") \"maximum size\"

Write-Host \"Full log: $logFile\"
", Header 5 ("windows-cmd", ["unnumbered", "unlisted"], []) [Str "Windows (CMD)"], CodeBlock ("", ["cmd"], []) "@echo off
REM batch_verify.cmd — simple parameter variant check (use PowerShell for full features)

echo Testing minimum size...
openscad -D \"width=10\" -D \"height=5\" -o build\\test_min.stl src\\main.scad
if %ERRORLEVEL% EQU 0 (echo   OK) else (echo   FAILED)

echo Testing default size...
openscad -D \"width=30\" -D \"height=10\" -o build\\test_default.stl src\\main.scad
if %ERRORLEVEL% EQU 0 (echo   OK) else (echo   FAILED)

echo Testing maximum size...
openscad -D \"width=80\" -D \"height=25\" -o build\\test_max.stl src\\main.scad
if %ERRORLEVEL% EQU 0 (echo   OK) else (echo   FAILED)
", HorizontalRule, Header 4 ("step-6--advanced-encoding-design-intent-as-assert-guards", ["unnumbered", "unlisted"], []) [Str "Step 6 — Advanced: Encoding Design Intent as ", Code ("", [], []) "assert()", Str " Guards"], Para [Str "When using AI-generated code, add ", Code ("", [], []) "assert()", Str " guards at the top of your file to encode your design intent. If a future code change violates the intent, rendering halts with a message."], CodeBlock ("", ["openscad"], []) "// Design intent guards — run at parse time, before any geometry
width  = 30;
height = 10;
wall_t = 2;

// These asserts define and enforce design constraints:
assert(width  >= 10,  str(\"width must be >= 10mm for structural integrity, got: \", width));
assert(height >= 5,   str(\"height must be >= 5mm, got: \", height));
assert(wall_t >= 1.5, str(\"wall_t must be >= 1.5mm to print reliably, got: \", wall_t));
assert(wall_t < width / 2,
  str(\"wall_t (\", wall_t, \") must be less than half of width (\", width/2, \")\"));

// Now the geometry — guaranteed to be within valid bounds
difference() {
  cube([width, width, height]);
  translate([wall_t, wall_t, -0.001])
    cube([width - 2*wall_t, width - 2*wall_t, height + 0.002]);
}
", HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 4.1:"], Str " Build your phone stand from Lesson 3. Run ", Code ("", [], []) "3dm info", Str " from multiple angles (", Code ("", [], []) "--view front", Str ", ", Code ("", [], []) "--view top", Str ", ", Code ("", [], []) "--view isometric", Str "). Write a verification log documenting which features you could and couldn't confirm."], Para [Strong [Str "Exercise 4.2:"], Str " Ask an AI tool to generate OpenSCAD code for a simple parametric box with a lid. Apply the AI Code Generation Verification Checklist to the result. Document every error you find."], Para [Strong [Str "Exercise 4.3 (Advanced):"], Str " Write a bash/PowerShell script that tests your phone stand at 5 different ", Code ("", [], []) "angle", Str " parameter values (30°, 45°, 60°, 75°, 90°) and logs the bounding box for each. Confirm that the bounding box height increases as angle increases."], Header 3 ("lesson-4--ai-enhanced-verification-and-multimodal-feedback-1", ["unnumbered", "unlisted"], []) [Str "Lesson 4 — AI-Enhanced Verification and Multimodal Feedback"], Para [Str "Estimated time: 90–120 minutes"], Header 4 ("learning-objectives-1", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Use ", Code ("", [], []) "3dm info", Str " to generate AI-assisted descriptions of STL geometry"]], [Plain [Str "Understand deterministic vs. AI-assisted validation"]], [Plain [Str "Apply prompt engineering techniques for design feedback"]], [Plain [Str "Recognize when to trust, question, or reject AI suggestions"]], [Plain [Str "Understand data privacy considerations when using cloud AI tools"]]], Header 4 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project with a completed STL from Lessons 1–3"]], [Plain [Str "Terminal"]], [Plain [Str "Optional: AI chat interface (Claude, ChatGPT, or similar)"]]], Header 4 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 5 ("1-run-3dm-info-on-your-current-model", ["unnumbered", "unlisted"], []) [Str "1. Run 3dm info on Your Current Model"], Para [Code ("", [], []) "3dm info", Str " sends your STL to an AI service and returns a natural-language description of the geometry. This is especially useful for non-visual validation."], CodeBlock ("", ["bash"], []) "3dm info
", Para [Str "Expected output (example):"], CodeBlock ("", [""], []) "Model: build/main.stl
The model appears to be a rectangular box approximately 50mm x 30mm x 5mm.
It has uniform wall thickness and no visible holes or undercuts.
Suggested print orientation: flat on the largest face.
", Para [Str "Review the description. Does it match your design intent? Note any discrepancies."], Header 5 ("2-understand-deterministic-vs-ai-validation", ["unnumbered", "unlisted"], []) [Str "2. Understand Deterministic vs. AI Validation"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.13076923076923078)), (AlignDefault, (ColWidth 0.4846153846153846)), (AlignDefault, (ColWidth 0.38461538461538464))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Validation Type"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "What It Checks"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Reliability"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slicer validation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Manifold geometry, wall thickness, overhang angles"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Deterministic — same result every run"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm info", Str " (AI)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Human-readable shape description, print orientation suggestions"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Non-deterministic — may vary slightly between runs"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Manual calipers"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Printed part dimensions"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Ground truth"]]]])] (TableFoot ("", [], []) []), Para [Str "AI-assisted tools like ", Code ("", [], []) "3dm info", Str " are useful for generating first-pass descriptions and spotting obvious issues, but they should not replace deterministic checks (slicer validation, geometry analysis).", Note [Para [Str "OpenSCAD User Manual — Manifold and Geometry Validation - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language", "")]]], Header 5 ("3-craft-effective-verification-prompts", ["unnumbered", "unlisted"], []) [Str "3. Craft Effective Verification Prompts"], Para [Str "When using an AI assistant (Claude, GPT, etc.) to review OpenSCAD code, prompt quality determines output quality:"], Para [Strong [Str "Weak prompt:"]], CodeBlock ("", [""], []) "Review my OpenSCAD code.
", Para [Strong [Str "Strong prompt:"]], CodeBlock ("", [""], []) "I have an OpenSCAD model that creates a parametric mounting bracket with two M3 holes.
Parameters: width=40, height=30, depth=8, hole_r=3.2.
Please review this code for:
1. Correct use of the 0.001 offset rule in all difference() operations
2. Manifold-safe geometry (no co-planar faces)
3. Whether hole_r=3.2 is an appropriate M3 clearance hole diameter
4. Any parameters that could produce invalid geometry if set to extreme values
Respond with: issues found, severity (critical/warning/note), and suggested fix for each.
", Para [Str "A structured prompt produces structured, actionable feedback.", Note [Para [Str "Anthropic Prompt Engineering Guide — ", Link ("", [], []) [Str "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview"] ("https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", ""), Str ". Covers structured prompting techniques applicable to code review use cases."]]], Header 5 ("4-validate-ai-suggestions-before-applying-them", ["unnumbered", "unlisted"], []) [Str "4. Validate AI Suggestions Before Applying Them"], Para [Str "AI tools can produce plausible-sounding but incorrect recommendations. Always apply a verification step:"], CodeBlock ("", [""], []) "AI suggests: \"Change hole_r to 3.0 for an M3 clearance hole\"

Verification steps:
1. Check ISO standard: M3 clearance hole = 3.2mm (medium fit), 3.4mm (loose fit)
2. AI recommendation of 3.0mm would be an interference fit, not a clearance hole
3. Reject the suggestion; keep 3.2mm

Conclusion: AI was wrong. Apply human domain knowledge.
", Para [Str "Document your accept/reject decisions in your project notes for future reference."], Header 5 ("5-apply-privacy-and-data-considerations", ["unnumbered", "unlisted"], []) [Str "5. Apply Privacy and Data Considerations"], Para [Str "When using cloud AI tools:"], BulletList [[Plain [Strong [Str "Don't upload proprietary designs"], Str " to free-tier AI services without checking their data retention policies"]], [Plain [Strong [Str "Anonymize or simplify"], Str " your model before requesting AI review if IP is a concern"]], [Plain [Code ("", [], []) "3dm info", Str " uses the same AI backend as configured in your 3dMake settings — check your instance's privacy settings"]]], Para [Str "For classroom use, ", Code ("", [], []) "3dm info", Str " on non-sensitive learning projects is appropriate. For professional designs, consult your organization's data policy.", Note [Para [Str "Data Privacy in AI-Assisted Tools — General guidance: review your AI provider's terms of service and data retention policy before submitting proprietary or sensitive design files."]]], Header 5 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 2: You can articulate the difference between deterministic and AI-based validation."]], [Plain [Str "After step 3: Your AI prompt produces structured, reviewable output."]], [Plain [Str "After step 4: You have documented at least one accept or reject decision for an AI suggestion."]]], Header 4 ("common-ai-validation-patterns", ["unnumbered", "unlisted"], []) [Str "Common AI Validation Patterns"], Header 5 ("pattern-1-geometry-sanity-check", ["unnumbered", "unlisted"], []) [Str "Pattern 1: Geometry Sanity Check"], CodeBlock ("", ["bash"], []) "# Ask AI to describe what it \"sees\" in your model
3dm info

# Then compare to your design checklist:
# - Correct overall dimensions? ✓/✗
# - Expected number of holes/features? ✓/✗
# - No unexpected geometry? ✓/✗
# - Print orientation makes sense? ✓/✗
", Header 5 ("pattern-2-code-review-prompt-template", ["unnumbered", "unlisted"], []) [Str "Pattern 2: Code Review Prompt Template"], Para [Str "Use this template when asking an AI to review OpenSCAD code:"], CodeBlock ("", [""], []) "Context: [describe what the part is and what it will be used for]
Code: [paste your OpenSCAD code]
Parameters: [list key parameter values]
Review for:
  - Boolean operation correctness (0.001 offsets where needed)
  - Parameter range safety (will extreme values break geometry?)
  - Printability (overhangs, thin walls, minimum feature size)
  - Code clarity (variable names, comments)
Output format: numbered list of issues, each with severity and fix
", Header 5 ("pattern-3-iterative-improvement-loop", ["unnumbered", "unlisted"], []) [Str "Pattern 3: Iterative Improvement Loop"], CodeBlock ("", [""], []) "1. Write initial design
2. Run 3dm build → fix compile errors
3. Run slicer → fix geometry errors (deterministic)
4. Run 3dm info or AI review → address suggestions (with verification)
5. Print test piece → compare to spec
6. Iterate on parameters if needed
", Header 4 ("quiz--lesson-3dmake4-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.4 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does ", Code ("", [], []) "3dm info", Str " do?"]], [Plain [Str "What is the difference between deterministic validation and AI-based validation?"]], [Plain [Str "Give two elements of a strong AI code review prompt that a weak prompt lacks."]], [Plain [Str "Why should you always verify AI suggestions before applying them? Give a specific example."]], [Plain [Str "What type of geometry errors does slicer validation catch that AI description does not?"]], [Plain [Str "True or False: ", Code ("", [], []) "3dm info", Str " will always produce identical output for the same STL file."]], [Plain [Str "What data privacy concern should you consider when uploading a design to a cloud AI service?"]], [Plain [Str "In the iterative improvement loop described above, at which step should you run slicer validation?"]], [Plain [Str "What does it mean for a model to be \"non-deterministic\" in the context of AI feedback?"]], [Plain [Str "Describe one scenario where AI validation would be useful and one where you must rely on deterministic tools instead."]], [Plain [Str "What is \"prompt engineering\" and why does it matter when using AI for code review?"]], [Plain [Str "If an AI tool suggests a geometry change that contradicts an ISO standard, what should you do?"]], [Plain [Str "What is the NIST AI Risk Management Framework, and in what professional context would it be relevant to AI-assisted design validation?", Note [Para [Str "NIST AI Risk Management Framework (AI RMF 1.0) — National Institute of Standards and Technology, 2023. ", Link ("", [], []) [Str "https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf"] ("https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf", ""), Str ". Provides a structured framework for managing risks in AI-integrated workflows."]]]], [Plain [Str "Describe two ways you could reduce IP exposure when using a cloud AI tool to review a proprietary design."]], [Plain [Str "In the validation table (deterministic vs. AI vs. calipers), which method provides \"ground truth\" and why?"]]], Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Design a validation checklist for a new 3D printed part. Include at least five items that are deterministic and three that benefit from AI assistance."]], [Plain [Str "Build a \"prompt library\" for three common design review scenarios: mounting brackets, enclosures, and text embossing. Test each prompt and document the output quality."]], [Plain [Str "Run ", Code ("", [], []) "3dm info", Str " on the same STL five times. Document any variation in output. What does this tell you about reproducibility?"]], [Plain [Str "Create a structured accept/reject log for one full design cycle (design → AI review → verification → decision). Share the log with a classmate for peer review."]], [Plain [Str "Research what \"hallucination\" means in the context of AI language models. Document two examples of how an AI might hallucinate in a design review context."]], [Plain [Str "Design an experiment to compare AI-suggested print orientation with slicer-suggested orientation for 10 different models. Tabulate the agreement rate."]], [Plain [Str "Write a one-page data privacy policy for an imaginary classroom 3D printing lab that uses cloud AI tools. Reference your school's existing digital privacy guidelines."]], [Plain [Str "Create a set of deliberately flawed OpenSCAD files (missing 0.001 offsets, wrong hole sizes, thin walls) and test whether AI review catches all the flaws."]], [Plain [Str "Build a \"verification script\" using ", Code ("", [], []) "3dm build", Str " and slicer command-line tools that automates the deterministic validation steps in the iterative loop."]], [Plain [Str "Interview a classmate using the stakeholder interview technique from Lesson 11 to understand their mental model of AI validation. What assumptions do they have that might be incorrect?"]], [Plain [Str "Research the difference between AI classification tasks (is this a manifold mesh?) and AI generation tasks (describe this mesh). Document why classification is more reliable for geometric validation."]], [Plain [Str "Build a comparison table: for each of five design features (holes, thin walls, overhangs, text, interlocking parts), list whether AI review, slicer validation, or physical test is most reliable."]], [Plain [Str "Write a \"red teaming\" exercise: intentionally try to get an AI tool to give you incorrect geometry advice. Document what prompts succeeded and what that means for how you use AI in design work."]], [Plain [Str "Create a lesson plan (5 minutes) explaining AI validation concepts to a fellow student who has never used an AI tool. Focus on the deterministic vs. non-deterministic distinction."]], [Plain [Str "Research and document the difference between \"AI-assisted\" and \"AI-automated\" workflows. At what point does removing the human from the validation loop become risky?"]]], Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", ""), Str " — Source for ", Code ("", [], []) "3dm info", Str " and other commands"]], [Plain [Link ("", [], []) [Str "Anthropic Prompt Engineering Overview"] ("https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview", ""), Str " — Prompting best practices"]], [Plain [Link ("", [], []) [Str "NIST AI RMF"] ("https://airc.nist.gov/Home", ""), Str " — AI risk management in professional contexts"]], [Plain [Link ("", [], []) [Str "PrusaSlicer Documentation"] ("https://docs.prusa3d.com/en/", ""), Str " — Deterministic slicer validation reference"]]]]