# Lesson 11 — Stakeholder-Centric Design and the Final Project

**Course:** 3dMake Certification — Leadership Level
**Estimated Time:** 3–6 weeks (iterative; worked in phases)

---

## A Message to You Before We Begin

You have spent this course mastering the _how_ of digital fabrication: coding geometric primitives, managing tolerances, automating builds. This final lesson focuses on the _why_. A professional designer does not simply build what they want — they build what a stakeholder needs.

This lesson bridges the gap between being a maker and being a design professional. It introduces Design Thinking and Requirement Engineering, then puts those tools to work in a sustained final project you will carry through from a single conversation with a real person all the way to a finished, documented, physical artifact.

The goal is not perfection on the first try. The goal is to experience the full design cycle — the same cycle that professional product designers, engineers, and makers go through when creating physical products. You will make decisions, encounter problems, revise your approach, and end up with something better than you could have imagined at the start.

---

## Learning Objectives

By the end of this lesson and project, you will be able to:

- Conduct a structured stakeholder interview using open-ended questioning strategies
- Extract Functional Requirements and define measurable Acceptance Criteria from user data
- Translate human needs into a Technical Design Specification
- Build a fully parametric assembly in OpenSCAD that solves a specific user problem
- Iterate a design based on systematic feedback collection
- Demonstrate mastery of all prior curriculum concepts in a single integrated project

---

## Part 1: Concepts — Stakeholder-Centric Design

### What "Stakeholder-Centric" Means

In engineering, a **stakeholder** is anyone affected by your design. This includes the person who asked for it, the person who will use it, the person who maintains it, and anyone who lives near it or depends on it. Professional designers do not start with shapes — they start with _people_.

The shift from "maker" to "design professional" is exactly this: a maker builds what they find interesting. A design professional builds what the stakeholder actually needs, which is often different.

This is harder than it sounds. People are not always able to articulate what they need. They describe symptoms, not root causes. They say "it needs to be bigger" when what they mean is "it's too hard to grab with one hand." Your job is to ask the right questions, listen carefully, and translate what you hear into design constraints.

### The Design Loop for Professionals

Design Thinking is a structured method for solving problems that begins with understanding humans, not geometry. The five-stage loop is:

1. **Empathize** — Interview the user to understand their "pain points." What do they struggle with? What workarounds do they currently use?
2. **Define** — Create a list of requirements the part must satisfy. Make them specific and testable.
3. **Ideate** — Use your OpenSCAD skills to create a parametric solution that addresses the requirements.
4. **Prototype & Test** — Build the part and have the stakeholder test it with their own hands.
5. **Iterate** — Refine the parameters based on their feedback. Go back to step 1 if the problem changed.

An important point: this is **not** a linear process. You will frequently loop back. You might build a prototype only to discover during testing that you defined the wrong problem. That is not a failure — that is the process working correctly. The goal is to discover that early, while revisions are cheap.

---

### Concept 2: The Stakeholder Interview

You cannot design for someone you don't understand. A stakeholder interview is a structured conversation, not a quick survey. Done well, it reveals needs the user didn't know how to express on their own.

#### Strategy: Open-Ended Questions

The single most important skill in an interview is asking questions that cannot be answered with "yes" or "no."

Compare these two approaches:

| Closed Question                    | Open-Ended Alternative                                            |
| ---------------------------------- | ----------------------------------------------------------------- |
| "Do you want it to be 10 cm wide?" | "How would you use this in your daily space?"                     |
| "Is it too heavy?"                 | "Tell me about a time you had trouble using something like this." |
| "Should it be red?"                | "What does the space where this will live look like?"             |

The open-ended version invites the user to tell you things you didn't know to ask about. The closed version only confirms or denies what you already assumed.

#### What to Listen For

As the user talks, you're listening for three categories of constraint:

- **Physical constraints:** "It needs to fit on my nightstand." "I only have 15 cm of clearance on the shelf."
- **Accessibility constraints:** "I need to find the beads by touch alone." "My hands shake, so I need large controls."
- **Durability/use constraints:** "I tend to drop things — it can't be fragile." "My kids will try to pull it apart."

Write down exact quotes. The user's own words often contain the most precise requirements.

---

### Concept 3: Engineering Functional Requirements

After the interview, you have a set of notes full of observations, stories, and opinions. Before writing any code, you must **translate** that material into Functional Requirements (FRs) — specific, testable statements of what the design must do.

#### The "User Story" Pattern

Use this format for every requirement:

> "As a **[user type]**, I want to **[action]** so that **[benefit]**."

This structure forces you to keep the user's perspective central. Examples:

- _"As a jewelry collector, I want the holder to have 2 mm clearance so that my bracelets slide on easily but don't fall off."_
- _"As an elderly user, I want the clasp to require only one hand to operate so that I can put it on independently."_
- _"As a person with low vision, I want distinct tactile ridges on each section so that I can identify compartments without looking."_

#### Acceptance Criteria

Once you have a requirement, you need a **test** for it — a specific condition that, when met, proves the requirement is satisfied. Without acceptance criteria, you can never know if you're done.

| Functional Requirement              | Acceptance Criterion                                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------------------------- |
| Must support weight without tipping | Holds 200 g with center of gravity at the rim; does not tip on a 5° incline                    |
| Bead hole accommodates 1.5 mm cord  | A 1.5 mm test cord passes through with finger pressure; does not fall out under its own weight |
| No sharp edges                      | A flat palm pressed across all surfaces for 5 seconds produces no discomfort or marks          |

---

### Concept 4: Technical Design Specification

A Technical Design Specification is the bridge between requirements and code. It maps each FR to a named OpenSCAD parameter, defines the calculation behind each dimension, and records the reasoning.

This document is not bureaucracy. It is a record of _decisions_. When you revisit a design three weeks later and wonder "why did I make the base this wide?", the specification has the answer.

#### Code Pattern: Requirement Mapping

Variable names in your code should reflect the requirement they satisfy. Anyone reading the code should be able to trace a variable back to the FR that motivated it.

```openscad
// FR1: Must fit standard bracelet diameters (typically 50–70 mm)
bracelet_max_d = 70;

// FR2: Must be stable without external support.
// Calculation: base width = 1.2 × total height (stability ratio)
base_w = 1.2 * total_height;

// FR3: Accessibility. Add tactile ridges for orientation by touch.
module tactile_marker() {
  sphere(r=2, $fn=16);
}
```

When a reviewer reads this code, they see not just _what_ you built, but _why_. That's the mark of professional-level documentation.

---

### Concept 5: Feedback and Iteration

After your first print, the work is not done — it has just shifted. You move from designing to _testing_, and the user's hands are your most important instrument.

#### Structured Feedback Collection

Don't just ask "what do you think?" That produces vague answers. Instead, observe the user _using_ the object before asking any questions. Watch for:

- Hesitation (something isn't intuitive)
- Workarounds (they're compensating for a flaw)
- Surprise (positive or negative — both are signals)

Then ask specific questions: "Was it easy to open with one hand?" "Did any part feel rough or uncomfortable?" "Is there anything you'd want to be different?"

#### The Refinement Rule

**Never guess at a fix based on vague feedback.** If the user says "it's too tight," measure the actual fit with calipers before changing anything. Calculate the required clearance. Update your `TOLERANCE` constant. Print a test coupon before printing the full part.

This is the difference between engineering and guessing. Engineering produces predictable results. Guessing produces random results that occasionally work.

---

## Part 2: The Project

You have two options for your final project. Both use the Design Thinking framework above. Your instructor will specify which option applies to your cohort.

---

### Option A: The Beaded Jewelry Project

**Unit:** 3 — Open-Ended Projects
**Estimated Duration:** 1 week

#### Project Brief

Design and produce a wearable beaded jewelry piece that includes at least eight 3D-printed beads generated in OpenSCAD. Your design must use two distinct parametric bead modules and combine them into a completed, wearable piece (necklace, bracelet, or similar).

The jewelry project is an accessible entry point into stakeholder-centric design: the "stakeholder" is a real person (yourself, a friend, or a family member) with specific aesthetic preferences and physical requirements, and the "product" must be safe to wear, comfortable, and actually assembled.

#### Constraints (must follow)

- Your prototype must include a 3D-printed component designed in OpenSCAD.
- Code your project in a single `.scad` file that parameterizes bead shapes for repeatability.
- Use at least two different bead shapes in the final assembly.
- The final piece must be wearable and assembled — not just a set of loose beads.

#### Learning Objectives

- Create parametric OpenSCAD modules for repeated geometry
- Combine modular parts into a coherent assembled object
- Document design decisions and printing notes for reproducibility
- Evaluate designs against measurable functional requirements

#### Step-by-Step Milestones

**Day 1 — Project Setup**

- Read this briefing and complete your Stakeholder Interview (use the template in Part 3 of this document).
- Create a project folder. Initialize your Design Notes document.
- Define at least 3 Functional Requirements using the FR template in Part 3.

**Days 1–2 — Bead Module Development**

- Implement `bead_A(size, detail)` and `bead_B(size, detail)` parametric modules.
- Your modules must accept at least two parameters: a size parameter and a detail/resolution parameter.
- Test-print a single bead from each module. Record optimal print temperature and bed settings.

Here is a minimal starting scaffold — replace the geometry with your own design:

```openscad
// ============================================================
// Beaded Jewelry — Main Source File
// Author: [Your Name]
// Date: [YYYY-MM-DD]
// ============================================================

// ---- Key Parameters (change these to adapt the design) ----
bead_size    = 12;    // mm — controls overall bead scale
detail       = 32;    // $fn equivalent — increase for smoother curves
hole_d       = 2.8;   // mm — cord hole diameter (measure your cord + 0.3 mm clearance)
clearance    = 0.3;   // mm — added to hole for reliable cord passage

// ---- Bead A: Round/Sphere Variant ----
module bead_A(size=bead_size, fn=detail) {
  difference() {
    sphere(r=size/2, $fn=fn);
    // Cord hole through center
    translate([0, 0, -(size/2 + 0.001)])
      cylinder(r=(hole_d + clearance)/2, h=size + 0.002, $fn=16);
  }
}

// ---- Bead B: Bicone/Diamond Variant ----
module bead_B(size=bead_size, fn=detail) {
  difference() {
    // Bicone: hull of two cones meeting at midpoint
    hull() {
      translate([0, 0, size/4])  cylinder(r=size/2, h=0.1, $fn=fn, center=true);
      translate([0, 0, -size/2]) cylinder(r=0.1,    h=0.1, $fn=fn, center=true);
      translate([0, 0,  size/2]) cylinder(r=0.1,    h=0.1, $fn=fn, center=true);
    }
    // Cord hole
    translate([0, 0, -(size/2 + 0.001)])
      cylinder(r=(hole_d + clearance)/2, h=size + 0.002, $fn=16);
  }
}

// ---- Assembly: arrange 8+ beads in a line for spacing test ----
// Comment/uncomment individual modules to render one at a time for export

spacing = bead_size * 1.1;  // 10% gap between beads

for (i = [0:7]) {
  translate([i * spacing, 0, 0])
    if (i % 2 == 0) bead_A();
    else            bead_B();
}
```

**Days 3–4 — Assembly and Iteration**

- Create an assembly that arranges at least 8 beads and tests fit and tolerances.
- Print and string the beads on your chosen cord.
- Iterate hole diameter and spacing until beads slide freely but do not fall off.
- Record every iteration in your revision log.

**Day 5 — Final Prototype and Documentation**

- Print the final bead set. Assemble the complete piece.
- Photograph the result (multiple views, at least one worn).
- Complete all deliverables listed below.

#### Deliverables

Submit both digitally and physically as instructed:

- `.scad` file containing parametric bead modules and the assembly script
- `.stl` files (exported as needed) for printed parts
- Technical documentation including:
  - Design Notes (ideas, measurements, parameter values, revision log)
  - Construction / 3D printing notes (temperatures, speeds, supports, any failures)
  - Completed Stakeholder Interview (Part 3 of this document)
  - Completed Functional Requirements (Part 3)
  - Photos of final prototype (multiple views)
- Physical turn-in: one assembled piece (if required by instructor)

#### Functional Requirements (examples — adapt to your design)

- The bead module must allow a hole diameter adjustable in 0.1 mm increments between 2.0–4.0 mm.
- The assembly must include at least 8 beads and remain wearable (fits comfortably on intended body part).
- The OpenSCAD file must be parameterized such that changing a single `scale` parameter adjusts bead size consistently.
- The assembled piece must not have sharp edges that would injure skin under normal use.

#### Accessibility Note

Provide alt-text for all photos in your documentation. Include a short written walkthrough of how your `.scad` file generates the bead shapes so screen-reader users can understand the sequence and parameters.

#### Grading Rubric — Option A (0–9 scale)

See the Master Rubric in Part 3 of this document for the full scoring framework. For Option A:

| Category                         | Max Points | What Is Evaluated                                                      |
| -------------------------------- | :--------: | ---------------------------------------------------------------------- |
| Implementation & parametric code |     3      | Modules are parametric, well-named, commented; assembly uses variables |
| Functionality & wearability      |     3      | Piece is wearable; holes fit cord; no sharp edges; FRs met             |
| Documentation & print notes      |     2      | Design notes, revision log, FR document, print settings recorded       |
| Presentation & photos            |     1      | Multiple views; worn photo; alt-text provided                          |

#### Quiz — Option A: Beaded Jewelry (15 questions)

1. Why use parametric modules for repeated parts rather than copying geometry? (one sentence)
2. What is a reliable way to test a bead hole size for a given cord diameter before printing the full set?
3. Name two OpenSCAD features or techniques useful for repeating geometry across a pattern.
4. What print setting is most likely to affect hole diameter accuracy in FDM printing?
5. How would you document an iteration that changed hole diameter from 2.5 mm to 2.7 mm?
6. True or False: Once your first bead prints successfully, all subsequent iterations will print exactly the same.
7. Explain what "wearability" means for a jewelry design. Name two specific checks you would perform to confirm a necklace is comfortable.
8. Your bead design uses a 3 mm hole. When strung on cord, it's too tight to slide. What are two OpenSCAD-level solutions?
9. When documenting your design for reproducibility, should you record (A) final bead dimensions only, (B) all iterations including failed attempts, or (C) just the most recent version?
10. Why does the Stakeholder Interview happen _before_ you write any code?
11. Write a User Story for the following requirement: the cord hole must accommodate a 1.5 mm nylon cord.
12. What is an Acceptance Criterion, and how does it differ from a Functional Requirement?
13. You receive feedback that the beads "feel scratchy." Describe the engineering process for investigating and fixing this — do not just say "sand them."
14. What is the `hull()` function useful for in bead design? Give one specific example.
15. Describe how the Design Loop (Empathize → Define → Ideate → Prototype → Iterate) applied to your specific jewelry project. Reference at least one concrete decision you made at each stage.

#### Extension Problems — Option A (15)

1. Design an interlocking bead (snap-fit connection between beads) and document the clearances required.
2. Create a parametric clasp module that integrates with your bead string and includes a documented pass/fail test.
3. Modify one bead to include decorative text or a pattern generated procedurally in OpenSCAD.
4. Convert your single `.scad` project into a small library: separate bead modules into `use`-able include files and demonstrate reuse.
5. Propose a modification to make the piece weather-resistant for outdoor wear (materials, coatings, or geometry changes). Justify each choice.
6. Design and print a complete jewelry set: matching beads, clasp, and string connector with a consistent design language.
7. Create a variant generator that produces 10+ different bead designs from single-parameter changes. Document aesthetic and functional differences.
8. Build a design system document for your jewelry: modular bead library, material requirements, assembly instructions, and care guide.
9. Investigate material effects: print the same bead in two or more materials. Compare durability, aesthetics, and wearability with measurements.
10. Develop a parametric customization guide: enable another person to modify size, spacing, and aesthetics through top-level variables alone.
11. Conduct a tolerance sensitivity study: print 5 versions of a bead hole from 2.5 mm to 3.5 mm in 0.25 mm increments. Record which passes, which fails, and why.
12. Design a "tolerance coupon" — a single flat print that tests 4 different hole diameters simultaneously — so you can calibrate your printer for bead work in one print.
13. Use `surface()` or `minkowski()` to add a texture to your bead surface. Document the performance impact and the `$preview` guard you used.
14. Write a batch build script that exports STLs for 8 bead variants (different sizes or shapes) automatically, with timestamped output names.
15. Conduct a formal stakeholder feedback session using the Feedback Collection Template (Part 3). Document the changes you made as a result.

---

### Option B: Open-Ended Final Project

**Estimated Duration:** 3–6 weeks

#### Project Brief

Design, build, test, iterate, and document a real functional 3D-printed product of your choosing. This is not a tutorial — there are no step-by-step instructions, no starter code, no single correct answer. You choose the problem; you design the solution; you prove it works.

#### What Makes a Good Project?

**Functional:** It does something real. Not a demonstration object — an actual thing that solves a problem or serves a purpose.

**Multi-part:** At least two printed components that must fit together. This forces you to engage with tolerances, alignment, and interlocking features.

**Parametric:** Defined by variables, not hardcoded geometry. Someone else should be able to adapt your design to a different size or use case by changing a few numbers.

**Printable:** All components can be printed on a standard FDM printer without exotic supports or materials.

**Original:** Designed by you from scratch. You may be inspired by existing designs, but the code must be yours.

#### Suggested Project Categories

**Category A: Organizer / Storage** — A system for organizing a specific collection of physical objects. Examples: parametric desktop organizer with interlocking cells; tool wall panel with snap-on holders; cable management clips sized for real cable diameters. _Why it works:_ real measurements to take, natural parametric axis, tolerance requirements throughout.

**Category B: Mounting / Enclosure** — A mount, bracket, or enclosure for a specific real-world object. Examples: Raspberry Pi enclosure with lid and vent pattern; custom camera mount for a specific model; weatherproof sensor housing. _Why it works:_ must fit real hardware, heat-set insert practice, printability constraints.

**Category C: Ergonomic Tool or Accessory** — Something designed to be held, worn, or operated. Examples: custom stylus grip, thumb ring for archery, ergonomic handle with grip texture. _Why it works:_ forces `hull()` for organic shapes, material selection for comfort, iterative refinement by feel.

**Category D: Mechanical Mechanism** — A mechanism with moving parts. Examples: living hinge box, adjustable ratcheting stand, pen plotter stage. _Why it works:_ most demanding tolerances, deep engagement with clearance and snap-fit mechanics.

**Category E: Educational / Demonstrative Object** — A physical object that teaches a concept. Examples: parametric gear train, manifold geometry demonstration set, printer calibration kit. _Why it works:_ strong parametric requirements, mathematical derivation in code, natural documentation need.

---

## Project Phases (Option B)

The project is organized into four phases. Work through them sequentially — do not skip ahead.

---

### Phase 1: Define and Plan (Week 1)

**Goal:** Understand the problem before writing any code.

The most common mistake in design projects is rushing to CAD. Phase 1 forces you to think before you model.

#### Phase 1 Deliverables

**1.1 — Stakeholder Interview**
Conduct a 45-minute interview using the Stakeholder Interview Template (Part 3). Your stakeholder is a real person who will use or benefit from your design.

**1.2 — Problem Statement (200–400 words)**
Answer in prose: What specific problem does your design solve? Who will use it, and when? What must it do to be considered successful? What are the key constraints?

Do not describe the geometry yet. Describe the _need_.

**1.3 — Measurement Worksheet**
Before modeling, measure everything relevant in the real world with digital calipers.

| Dimension | Description | Nominal (mm) | Measured (mm) | Tolerance |
| --------- | ----------- | :----------: | :-----------: | :-------: |
| ...       | ...         |     ...      |      ...      |   ±...    |

Measure at least 10 dimensions. For enclosures, measure the enclosed object completely. For mechanisms, measure all hardware that must interface with printed parts.

**1.4 — Functional Requirements**
Use the FR Template (Part 3) to write at least 3 Functional Requirements, each with a User Story and at least one Acceptance Criterion.

**1.5 — Design Specification**
Use the Design Specification Template (Part 3) to map your FRs to named OpenSCAD parameters.

**1.6 — Sketch / Block Diagram**
Draw your design by hand (or any drawing tool). Label all key dimensions. Identify every interface between parts.

**1.7 — Preliminary Bill of Materials**

| Part | Material | Est. print time | Est. filament (g) | Qty |
| ---- | -------- | :-------------: | :---------------: | :-: |

Include both printed and non-printed components.

**1.8 — Risk Assessment**
Identify three design challenges you anticipate. For each: what could go wrong, which tolerances are critical, and how will you address the risk.

---

### Phase 2: Prototype and Test (Weeks 2–3)

**Goal:** Build a working first version. Find the problems.

A prototype is a physical question: "Does this work?" Print fast, test aggressively, find the failure modes.

#### Phase 2 Deliverables

**2.1 — Parametric Source File**

```openscad
// ============================================================
// [Project Name] — Main Source File
// Author: [Your Name]
// Date: [YYYY-MM-DD]
// Version: 0.1 (prototype)
// ============================================================

// ---- Key Parameters (change these to adapt the design) ----
// wall          = 2.0;   // mm — minimum print wall thickness
// clearance     = 0.2;   // mm — slip-fit clearance for interlocking parts
// corner_r      = 3.0;   // mm — exterior corner rounding radius

// ---- Derived Values (computed from parameters — do not edit directly) ----

// ---- Module Definitions ----

// ---- Assembly (uncomment the component to render/export) ----
```

Requirements for the source file:

- All key dimensions as named variables at the top
- At least one module per major component
- `assert()` guards on critical parameters
- Comments explaining every non-obvious design decision

**2.2 — First Print and Test Log**

| Component | Version | Print date | Key measurements | Pass/Fail | Issues found |
| --------- | ------- | :--------: | :--------------: | :-------: | ------------ |
| ...       | v0.1    |    ...     |       ...        |    ...    | ...          |

**2.3 — Tolerance Test Results**
Print a tolerance test coupon for every critical interface before printing the full part. Document: nominal dimension, measured printed dimension, correction factor applied, whether the next print passed.

**2.4 — Revision Log (first entries)**

```
v0.1 → v0.2 (YYYY-MM-DD)
  - Changed wall thickness from 1.5 to 2.0 mm: v0.1 cracked during snap-fit test
  - Increased lid clearance from 0.1 to 0.25 mm: lid was too tight to open one-handed
  - Added 2 mm chamfer to all interior edges: test part showed stress fracture at sharp corners
```

---

### Phase 3: Refine and Iterate (Weeks 3–5)

**Goal:** Make it good. Systematic improvement based on test results.

Every decision in Phase 3 must be driven by test data, not intuition. "I think it will be stronger" is not enough — print it, test it, measure it, decide.

#### Required Iterations

You must complete at least three complete design-print-test-revise cycles. For each cycle, document:

1. What you changed and why (reference a specific failure mode)
2. What you printed (component name, version, parameters used)
3. How you tested it (specific test — not just "I tried it")
4. What you measured (calipers, fit test, load test)
5. What you concluded (did the change fix the problem? Create new ones?)
6. What you'll change next

#### Phase 3 Deliverables

**3.1 — Iteration Cycles (3 minimum)** as described above.

**3.2 — Feedback Collection**
Conduct a structured feedback session with your stakeholder using the Feedback Collection Template (Part 3). Document the changes you made as a result.

**3.3 — Build Automation Script**
A script (bash or PowerShell) that builds all printable components, verifies each STL, logs results with timestamps, and archives all STLs with version tags.

```bash
#!/bin/bash
# build_all.sh — builds all project components
set -euo pipefail

VERSION="v1.0"
OUTPUT_DIR="build/$VERSION"
mkdir -p "$OUTPUT_DIR"
echo "Building $VERSION..."

components=("lid" "base" "clip" "tray")  # replace with your component names

for comp in "${components[@]}"; do
  echo "  Building: $comp"
  openscad -D "component=\"${comp}\"" -o "$OUTPUT_DIR/${comp}.stl" src/main.scad
  SIZE=$(stat -c%s "$OUTPUT_DIR/${comp}.stl")
  echo "  OK: ${comp}.stl ($SIZE bytes)"
done

echo ""
echo "All components built: $OUTPUT_DIR"
```

**3.4 — Advanced Feature Implementation**
Implement at least one advanced feature from Lesson 10:

- `hull()` or `minkowski()` for organic shaping
- `surface()` for textured or embossed panels
- `children()` container module
- `search()` or `lookup()` table for material or size variants

Document which feature you chose, where it appears, and why.

**3.5 — `projection()` Template (if applicable)**
If your design requires drilling or alignment of non-printed parts, produce a DXF template using `projection()`.

---

### Phase 4: Document and Ship (Weeks 5–6)

**Goal:** Make the design reproducible by someone who wasn't there when you built it.

A design that only works because you know all the tricks isn't finished.

#### Phase 4 Deliverables

**4.1 — README.md**

```markdown
# [Project Name]

[One-sentence description]

## What You Need

### Printed Parts

- [Part name] × [qty] — [material] — [est. print time]
  - Print settings: [layer height, infill, supports?]

### Hardware

- [Item] × [qty] — [spec / source]

### Tools

- Digital calipers
- [Other tools]

## Printing Instructions

[Orientation? Supports? Infill for structural parts? Temperature?]

## Assembly Instructions

[Step-by-step numbered. Note tolerance-sensitive steps.]

## Customization

[Key parameters and what they do. How to adapt for a different use case.]

## Known Limitations

[What doesn't work perfectly. What you'd improve with more time.]

## Version History

[Summary of major revisions]

## License

[Your chosen license]
```

**4.2 — Final Bill of Materials**

| Part | File / Source | Material | Print Settings | Est. Time | Est. Weight (g) | Qty |
| ---- | ------------- | -------- | -------------- | :-------: | :-------------: | :-: |

**4.3 — Final STL Files**
Export one STL per printable component. Name them: `[project]-[component]-v[X.Y].stl`

**4.4 — Reflection Essay (400–600 words)**
Answer in essay form (not a list): What was the hardest design challenge, and how did you solve it? What would you do differently if you started over? What did you learn that surprised you? How has this project changed how you think about the physical objects you use every day?

---

## Assessment Rubric (Option B)

Each criterion is scored 1–4.

| Criterion                 | 1 — Beginning                               | 2 — Developing                         | 3 — Proficient                                    | 4 — Exemplary                                                                |
| ------------------------- | ------------------------------------------- | -------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Parametric Design**     | Hardcoded dimensions; no variables          | Some variables; not all key dimensions | All key dimensions parametric; named clearly      | Fully parametric; changing one variable produces a valid design at any scale |
| **CSG Modeling**          | Primitives only; no CSG                     | CSG used but with co-planar artifacts  | CSG correct; 0.001 offsets applied                | No non-manifold geometry; CSG used for all complex shapes                    |
| **Tolerance & Fit**       | No tolerance consideration; parts don't fit | Tolerances guessed; some parts fit     | Tolerances measured and calibrated; all parts fit | Test coupon printed; stack-up calculated; all fits confirmed                 |
| **Interlocking Features** | None                                        | One feature, poorly fit                | One feature, well-designed and functional         | Two or more features; each type chosen appropriately                         |
| **Build Automation**      | No build script                             | Script builds but no error handling    | Script builds, verifies, and archives             | Handles all platforms; batch variants supported                              |
| **Documentation**         | README missing or minimal                   | README present but incomplete          | README covers all required sections               | README enables a stranger to reproduce the design from scratch               |
| **Iteration**             | No documented revisions                     | 1–2 revisions, partially documented    | 3 revisions, fully documented with rationale      | 4+ revisions; each driven by measured test data                              |
| **Advanced Features**     | None                                        | One feature present                    | One feature well-integrated                       | Two or more; each justified in documentation                                 |
| **Reflection**            | Superficial or missing                      | Present but generic                    | Genuine reflection on specific challenges         | Insightful; demonstrates growth and changed thinking                         |

**Scoring:** 33–36 = Distinction / 27–32 = Merit / 18–26 = Pass / Below 18 = Needs revision

---

### Quiz — Option B: Final Project (15 questions)

1. What is a stakeholder, and why is identifying stakeholders the first step in a design project?
2. What is the difference between a Maker and a Design Professional, as described in this lesson?
3. Why are open-ended interview questions preferred over yes/no questions?
4. Write a complete User Story for this requirement: "The lid must be openable with one hand."
5. What are Acceptance Criteria, and how do they make a Functional Requirement testable?
6. How does a Design Specification bridge requirements and OpenSCAD code? Give an example.
7. True or False: Design Thinking is a linear process that ends after the first prototype.
8. Why should you never adjust a design based on vague feedback like "it feels too tight" without first taking measurements?
9. How can `3dm info` involve a stakeholder who cannot see the 3D model visually?
10. Your stakeholder says the holder "feels wobbly." Describe the full engineering process from that comment to a revised design — what do you measure, what do you change, how do you verify?
11. What is tolerance stack-up, and why does it become critical in Phase 1 rather than something to fix later?
12. Describe the purpose of printing a tolerance test coupon before printing a full assembly.
13. What should a revision log entry contain? Write an example entry for a wall thickness change.
14. Your build automation script reports that one STL is 340 bytes. What does this likely indicate, and what do you do next?
15. In your own words, explain why the Reflection Essay is a required deliverable — what is it meant to capture that a build log cannot?

### Extension Problems — Option B (15)

1. Conduct a full tolerance stack-up analysis for your assembly. Calculate worst-case misalignment across all interfaces.
2. Design a go/no-go gauge for your most critical fit — a test part that passes only when the tolerance is correct.
3. Write a multi-platform build script that detects the OS and uses the appropriate shell commands automatically.
4. Implement semantic versioning in your build system: automatically increment a patch version on each successful build.
5. Build a Git pre-commit hook that runs your build script and refuses the commit if the build fails.
6. Create a "golden master" verification script: save the bounding box of a known-good build, then flag any future build that deviates by more than 0.1 mm.
7. Design a three-part interlocking system where all parts can be assembled in only one correct order. Document the design intent.
8. Write a GitHub Actions CI/CD workflow that builds all components on every push to the `main` branch and uploads STL artifacts.
9. Implement `lookup()` tables for material-specific parameters (density, clearance, recommended wall thickness). Make switching materials a one-variable change.
10. Produce a full DXF drilling template using `projection()` for any part of your design that requires holes in a non-printed substrate.
11. Build a "measurement worksheet" that renders in OpenSCAD as a flat printed sheet listing all key dimensions — print it alongside your prototype.
12. Conduct a formal failure mode analysis: list every way your design could fail in real use, assess probability and impact, and describe your mitigation for each.
13. Create a parametric variant generator: a script that builds your design at 5 different scale factors and logs the bounding box and estimated weight for each.
14. Redesign your most complex module to use `children()` as a container pattern, then demonstrate it with three different child geometries.
15. Write a comprehensive retrospective document (600–1000 words) covering: what you planned vs. what you built, every significant decision point, what you would do differently, and what skills from earlier lessons proved most valuable.

---

## Milestone Check-Ins (Option B)

| Week          | Checkpoint          | What to Show                                                                                              |
| ------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| End of Week 1 | Phase 1 complete    | Interview notes, problem statement, measurement worksheet, FRs, design spec, sketch, BOM, risk assessment |
| End of Week 2 | First print         | At least one component printed and tested; Phase 2 test log started                                       |
| End of Week 3 | Three revisions     | Phase 3 cycles 1–3 documented; feedback session complete; build script working                            |
| End of Week 4 | Feature complete    | All components printing and fitting; advanced feature implemented                                         |
| End of Week 5 | Documentation draft | README draft; STL files exported; reflection drafted                                                      |
| End of Week 6 | Final submission    | All Phase 4 deliverables complete                                                                         |

---

## Working Independently: Tips for Distance Learners

**Work in sessions, not marathons.** Two 90-minute sessions per week with clear goals produces better work than one 6-hour session. At the end of every session, write one sentence in your revision log about where you stopped and what you'll do next.

**Print early, print often.** The instinct is to keep refining in CAD until the design is "perfect" before printing. Resist this. A bad print teaches you something a perfect render doesn't. Print at 30% infill and coarse layer height for test prints — save fine settings for final parts.

**Describe your problems in writing before asking for help.** "My lid doesn't close" is not a problem description. "My lid doesn't close; the measured inner width of the base is 60.4 mm but the outer width of the lid is 60.2 mm, giving 0.2 mm per side clearance, but it still binds — I suspect the corners because the lid snaps in at a tilt" is a problem description.

**Use your revision log as a thinking tool.** Don't just record what changed. Record what you expected, what happened, and what you think that means.

**The design is done when it works, not when it's perfect.**

---

## Features Checklist (both options)

Use this checklist to verify you've applied required curriculum concepts:

- [ ] All key dimensions are named variables at the top of the source file
- [ ] `assert()` guards protect critical parameters
- [ ] At least two modules, each with a clear single responsibility
- [ ] CSG operations use 0.001 mm offsets on co-planar faces
- [ ] At least one interlocking feature (snap-fit, dovetail, thread, or friction fit)
- [ ] Tolerance test coupon designed, printed, and measured
- [ ] `clearance` constant used in at least one interface
- [ ] Build automation script builds all components and verifies output
- [ ] At least one advanced feature from Lesson 10
- [ ] All STL files are manifold (no slicer warnings)
- [ ] Stakeholder interview completed and documented
- [ ] Functional requirements with acceptance criteria written
- [ ] README complete (all required sections)
- [ ] Bill of materials complete and accurate
- [ ] At least three documented revision cycles
- [ ] Feedback collection session completed
- [ ] Reflection essay complete

---

## Supplemental Resources

- Master Rubric: Part 3 of this document / `assets/3dMake_Foundation/master-rubric.md`
- Programming with OpenSCAD EPUB Textbook: `assets/Programming_with_OpenSCAD.epub`
- OpenSCAD Quick Reference: https://programmingwithopenscad.github.io/quick-reference.html
- 3DMake GitHub Repository: https://github.com/tdeck/3dmake
- CodeSolutions Repository: https://github.com/ProgrammingWithOpenSCAD/CodeSolutions

---

## A Final Note

Every professional product you interact with went through a version of this process. The chair you're sitting in was measured, prototyped, printed or machined, tested, revised, and documented before it reached you. The phone in your pocket has revision histories stretching back years, with engineers who made the exact kinds of decisions you're making now — just faster, with bigger teams, and with more sophisticated tools.

What you're learning in this project is not just how to use OpenSCAD. You're learning how to think through a physical design problem: how to start from a need, move through measurement and modeling, test against reality, iterate until it works, and communicate your process to others.

That thinking process transfers to any design tool, any material, and any scale. Take it seriously.

Good luck.

---

# Part 3: Project Templates

_These templates are referenced throughout Lesson 11. Complete them as part of your project documentation. They are included here so the entire lesson is self-contained — you do not need a separate file._

---

## Template 1: Stakeholder Interview

**Use this for:** Phase 1 of Option B; Day 1 of Option A.
**Estimated duration:** 45–60 minutes.

---

### Pre-Interview Preparation

| Field                                            | Your Entry |
| ------------------------------------------------ | ---------- |
| Date                                             |            |
| Stakeholder Name                                 |            |
| Their Role / Relationship to Project             |            |
| Interview Location                               |            |
| Interview Objective (what do you need to learn?) |            |

---

### Section 1: Context and Background (5 minutes)

1. "Tell me about your role and how this design would fit into your life."
   - _Notes:_

2. "What problem are we trying to solve together?"
   - _Notes:_

3. "Who else might be affected by this design?"
   - _Notes:_

---

### Section 2: Current Situation (10 minutes)

4. "How do you currently handle this problem — what do you do today?"
   - _Notes:_

5. "What works well about what you do now?"
   - _Notes:_

6. "What frustrates you most about the current situation?"
   - _Notes (listen for exact words — these often become requirements):_

**Pain Points Summary:**

- Primary:
- Secondary:

---

### Section 3: Ideal Solution (15 minutes)

_Use open-ended questions only. Do not suggest dimensions or shapes._

7. "Ideally, what would a perfect solution do for you?"
   - _Notes:_

8. "Walk me through how you'd use it in a typical situation."
   - _Notes:_

9. "Where would it live — what space does it need to fit into?"
   - _Notes:_

**Constraints heard (fill in as they come up):**

| Type                      | What they said | Design implication |
| ------------------------- | -------------- | ------------------ |
| Physical size             |                |                    |
| Weight                    |                |                    |
| Temperature / environment |                |                    |
| Durability                |                |                    |
| Budget                    |                |                    |
| Timeline                  |                |                    |

---

### Section 4: Usage Patterns (10 minutes)

10. "How often would you use this?"
    - [ ] Daily [ ] Weekly [ ] Monthly [ ] Occasionally
    - _Notes:_

11. "Who else might use it? Are there any accessibility considerations I should know about?"
    - _Notes:_

---

### Section 5: Success Criteria (10 minutes)

12. "If this design worked perfectly, how would you know? What would be different about your day?"
    - _Notes:_

13. "What would make you say this design failed?"
    - _Notes:_

**Success Criteria (draft):**

1.
2.
3.

---

### Section 6: Priorities (10 minutes)

14. "If you could only have three features, which three would matter most to you?"
    1. _(Priority: /10)_
    2. _(Priority: /10)_
    3. _(Priority: /10)_

---

### Post-Interview Analysis

**Key Takeaways (your summary, not a transcript):**

1.
2.
3.

**Surprising things you didn't expect to hear:**

**Open questions to follow up on:**

1.
2.

**How did this change your initial design idea?**

_Conducted by:_ \_\_\_\_\_\_\_\_ _Date documented:_ \_\_\_\_\_\_\_\_

---

## Template 2: Functional Requirements

**Use this for:** Phase 1 (Options A and B). Complete one FR block per requirement.

---

### Project Information

| Field        | Your Entry |
| ------------ | ---------- |
| Project Name |            |
| Version      |            |
| Date         |            |
| Prepared By  |            |

---

### FR1: [Name this requirement]

**Priority:** [ ] Critical [ ] High [ ] Medium [ ] Low

**Description** — what the design must do:

**User Story:**

> "As a \_\_\_\_\_\_, I want to \_\_\_\_\_\_ so that \_\_\_\_\_\_."

**Acceptance Criteria** (each must be independently testable):

- [ ]
- [ ]
- [ ]

**Source** (which part of the interview led to this requirement?):

---

### FR2: [Name this requirement]

**Priority:** [ ] Critical [ ] High [ ] Medium [ ] Low

**Description:**

**User Story:**

> "As a \_\_\_\_\_\_, I want to \_\_\_\_\_\_ so that \_\_\_\_\_\_."

**Acceptance Criteria:**

- [ ]
- [ ]

**Source:**

---

### FR3: [Name this requirement]

**Priority:** [ ] Critical [ ] High [ ] Medium [ ] Low

**Description:**

**User Story:**

> "As a \_\_\_\_\_\_, I want to \_\_\_\_\_\_ so that \_\_\_\_\_\_."

**Acceptance Criteria:**

- [ ]
- [ ]

**Source:**

---

_Add FR4, FR5, etc. by copying the block above._

---

### Scope

## **In Scope (this design will address):**

-
- **Out of Scope (explicitly excluded):**

-
- ***

### Verification Plan

| Requirement | Test Method | Pass Condition | Status |
| ----------- | ----------- | -------------- | ------ |
| FR1         |             |                |        |
| FR2         |             |                |        |
| FR3         |             |                |        |

---

## Template 3: Design Specification

**Use this for:** Mapping FRs to OpenSCAD parameters before writing code.

---

### Project Information

| Field       | Your Entry |
| ----------- | ---------- |
| Project     |            |
| Version     |            |
| Date        |            |
| Designed By |            |

---

### Design Overview

**Problem Statement** (one paragraph):

**Solution Approach** (high-level):

**Key Design Decisions:**

1.
2.
3.

---

### Requirement → Parameter Mapping

For each Functional Requirement, identify the OpenSCAD variable(s) that implement it.

| FR  | OpenSCAD Variable | Value / Formula | Rationale |
| --- | ----------------- | --------------- | --------- |
| FR1 |                   |                 |           |
| FR2 |                   |                 |           |
| FR3 |                   |                 |           |

**Code pattern — paste your parameter block here after writing it:**

```openscad
// ---- Parameters derived from requirements ----

// FR1: [Requirement name]
// [variable] = [value];  // mm — [explanation]

// FR2: [Requirement name]
// [variable] = [value];  // [explanation]
```

---

### Component Breakdown

For each printed component:

**Component 1: [Name]**

- Purpose:
- Dimensions (L × W × H):
- Material:
- Interfaces with: _(which other parts?)_
- Print orientation:
- Supports needed: [ ] Yes [ ] No
- Estimated print time:

**Component 2: [Name]**
_(copy block above)_

---

### Tolerance and Fit Analysis

| Interface       | Type of fit          | Nominal dim. | Clearance used | Rationale |
| --------------- | -------------------- | :----------: | :------------: | --------- |
| Part A → Part B | Press / Slip / Loose |              |                |           |

---

### Material Selection

**Primary material:**

| Property               | Requirement | Why this material satisfies it |
| ---------------------- | ----------- | ------------------------------ |
| Strength               |             |                                |
| Flexibility            |             |                                |
| Temperature resistance |             |                                |
| Cost                   |             |                                |

---

### Risk Register

| Risk | Probability | Impact | Mitigation |
| ---- | :---------: | :----: | ---------- |
|      |    H/M/L    | H/M/L  |            |
|      |    H/M/L    | H/M/L  |            |

---

### Design Change Log

| Version | Date | Change         | Reason |
| ------- | ---- | -------------- | ------ |
| 0.1     |      | Initial design |        |

---

## Template 4: Feedback Collection

**Use this for:** Phase 3 — structured feedback session with your stakeholder.

---

### Session Information

| Field             | Your Entry |
| ----------------- | ---------- |
| Date              |            |
| Stakeholder Name  |            |
| Prototype Version |            |
| Session Duration  |            |

---

### Section 1: First Impressions (5 minutes)

_Hand the prototype to the stakeholder without explanation. Observe for 60 seconds before asking anything._

**Observations** (what did they do first?):

1. "What is your first reaction to this?"
   - _Response:_

2. "Is it what you expected?"
   - [ ] More than expected [ ] As expected [ ] Less than expected
   - _Why:_

3. "Would you use this?"
   - [ ] Definitely [ ] Probably [ ] Maybe [ ] No
   - _Why:_

---

### Section 2: Usability (15 minutes)

_Ask them to demonstrate using it as they normally would. Do not explain how it works — observe._

**Observations** (hesitations, workarounds, confusion):

4. "Was it easy to figure out how to use?"
   - [ ] Very easy [ ] Easy [ ] Neutral [ ] Difficult [ ] Very difficult
   - _What was confusing:_

5. "Are there any parts that don't work well together?"
   - _Response:_

**Usability Issues Observed:**

| Issue | Severity (H/M/L) | Stakeholder's suggestion |
| ----- | :--------------: | ------------------------ |
|       |                  |                          |
|       |                  |                          |

---

### Section 3: Functional Assessment (10 minutes)

Test each Functional Requirement explicitly.

| Requirement | Result                        | Notes |
| ----------- | ----------------------------- | ----- |
| FR1:        | [ ] Pass [ ] Partial [ ] Fail |       |
| FR2:        | [ ] Pass [ ] Partial [ ] Fail |       |
| FR3:        | [ ] Pass [ ] Partial [ ] Fail |       |

6. "What's missing that you expected to be there?"
   - _Response:_

---

### Section 4: Physical Assessment (10 minutes)

7. Size: [ ] Too large [ ] Just right [ ] Too small
   - _Notes:_

8. Weight: [ ] Too heavy [ ] Just right [ ] Too light
   - _Notes:_

9. "Does the material / finish feel appropriate?"
   - _Response:_

10. "Any parts that feel fragile or rough?"
    - _Response:_

---

### Section 5: Overall Satisfaction (5 minutes)

| Criterion                       | Score (1–5) | Comments |
| ------------------------------- | :---------: | -------- |
| Overall satisfaction            |             |          |
| Meets my needs                  |             |          |
| Design quality                  |             |          |
| Would recommend to someone else |             |          |

_(1 = Poor, 5 = Excellent)_

---

### Section 6: Suggestions (10 minutes)

11. "What one change would have the biggest positive impact?"
    - _Response:_

12. "What should we keep exactly as-is?"
    - _Response:_

---

### Post-Session Analysis

**Key Insights:**

1.
2.

## **Critical Issues** (block use):

## **Should-fix Issues** (reduce satisfaction):

**Design Changes Resulting from This Session:**

| Original design | Feedback received | Change made | Rationale |
| --------------- | ----------------- | ----------- | --------- |
|                 |                   |             |           |

_Session conducted by:_ \_\_\_\_\_\_\_\_ _Date:_ \_\_\_\_\_\_\_\_

---

## Template 5: Master Project Rubric

_This rubric applies to all Unit 1, 2, and 3 projects unless the project briefing specifies otherwise. Project 0 is complete/incomplete only._

---

### Rubric Overview

Projects are scored 0–9 across three categories, 3 points each:

| Category           | Max Points | What Is Evaluated                                                      |
| ------------------ | :--------: | ---------------------------------------------------------------------- |
| Problem & Solution |     3      | How well the prototype meets the identified problem or FRs             |
| Design Quality     |     3      | Complexity, originality, technical quality; evidence of iteration      |
| Documentation      |     3      | Completeness, accuracy, and thoughtfulness of all written deliverables |

---

### Category 1: Problem & Solution (0–3 points)

| Score | Description                                                                                                             |
| :---: | ----------------------------------------------------------------------------------------------------------------------- |
|   3   | Prototype clearly and effectively solves the stated problem. All FRs are met. Evidence of testing against requirements. |
|   2   | Prototype mostly meets the problem. Most FRs met. Minor gaps between design and requirements.                           |
|   1   | Prototype partially addresses the problem. Several FRs unmet or not clearly tested.                                     |
|   0   | Prototype does not address the stated problem, or no FRs were established.                                              |

---

### Category 2: Design Quality (0–3 points)

| Score | Description                                                                                                                                                                                              |
| :---: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   3   | Design is original, well-considered, technically executed. Code is clean, uses variables and modules appropriately, and is well-commented. Print is clean. Evidence of at least one meaningful revision. |
|   2   | Design is functional and shows thought. Code works but may lack structure (few comments, raw numbers). Print quality acceptable. Some iteration evident.                                                 |
|   1   | Design is basic or borrowed without modification. Code has issues. Print quality has unaddressed defects.                                                                                                |
|   0   | No meaningful original design. Print is non-functional or not completed.                                                                                                                                 |

---

### Category 3: Documentation (0–3 points)

| Score | Description                                                                                                                                                                         |
| :---: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   3   | All required sections present, complete, and specific. Reflections are thoughtful and reference specific decisions, problems, and learning. Photos included. Measurements recorded. |
|   2   | Most sections present. Some sections vague or missing detail. Reflections show thought but are brief or generic.                                                                    |
|   1   | Documentation incomplete. Major sections missing or one-line responses. Reflections minimal.                                                                                        |
|   0   | Documentation not submitted or essentially empty.                                                                                                                                   |

---

### Score Interpretation

| Total Score | Interpretation                      | Next Step                                              |
| :---------: | ----------------------------------- | ------------------------------------------------------ |
|     8–9     | Excellent work                      | Move to next project                                   |
|     6–7     | Good work with room for improvement | Move on; instructor may suggest revisiting one element |
|     4–5     | Meets basic expectations            | Resubmission of specific weak areas recommended        |
|     2–3     | Does not meet expectations          | Resubmission required                                  |
|     0–1     | Missing major deliverables          | Meet with instructor; create a completion plan         |

---

### Resubmission Policy

Students may resubmit any project as many times as needed to improve their score. Resubmissions must include a one-paragraph explanation of what was changed and why. The resubmission score replaces the original score.
