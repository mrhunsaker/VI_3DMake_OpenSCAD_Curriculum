# 3dMake Foundation & {{i:Design}} — Complete Course Compendium

> **Course:** Accessible {{hi:3D {{i:printing}}}}3D Printing with {{i:OpenSCAD}} and {{i:3DMake}}
> **Track:** 3dMake Certification — High School Distance Learning
> **Contents:** Instructional Framework · Curriculum Guide · All 11 Lessons · Final Exam · Quick Reference Guide

---

# Part I — Instructional Framework

_A pedagogical overview of the {{i:3DMake}} and {{i:OpenSCAD}} ecosystem for secondary STEM education._

## The Architecture of Programmatic {{i:Design}}

Programmatic CAD differs from standard industry tools like Fusion 360 or SolidWorks by utilizing a "{{i:code}}-as-model" philosophy. {{i:OpenSCAD}}, the primary engine supported by {{i:3DMake}}, uses a functional programming language to define three-dimensional volumes.[^3] This approach is particularly robust for {{i:parametric}} {{i:design}}, where the dimensions of an object are defined as {{hi:Variables}}{{i:variables}}, allowing for instantaneous reconfiguration without manual rebuilding.[^4] {{i:3DMake}} enhances this by providing a unified {{i:command}}-line interface ({{hi:CLI}}CLI) to manage the entire process, from editing source {{i:files}} to triggering remote {{i:print}} jobs through interfaces like OctoPrint or {{hi:Bambu}}Bambu Connect.[^1]

The educational value of this toolchain lies in its transparency. Students are not hidden behind a proprietary user interface; they interact directly with the {{i:file}} system, configuration {{i:files}}, and API integrations. This exposure fosters a deeper understanding of how modern software interacts with hardware — a skill set increasingly vital in robotics and aerospace engineering.[^6] However, the shift to a terminal-based {{i:environment}} requires a structured instructional approach to overcome initial barriers to entry.

## AI Integration and {{i:Model}} Descriptive Feedback

The integration of artificial intelligence {{i:into}} the {{i:3DMake}} {{i:workflow}} represents a significant advancement in democratizing CAD for students with varying levels of spatial reasoning skills. The `3dm info` {{i:command}} acts as a multimodal bridge {{i:between}} the deterministic world of {{i:OpenSCAD}} and the probabilistic world of LLMs.[^1]

When a student executes `3dm info`, the system initiates a rendering pipeline, generating multiple viewpoints of the current model, which are packaged as image data and sent to the configured AI (e.g., Gemini) along with a descriptive prompt. The AI's response provides a summary that {{i:can}} include the model's intended function, aesthetic qualities, and potential engineering failures.[^1]

### The Limits of AI Spatial Reasoning

While powerful, current LLMs do not possess a true "3D world model" — they are trained primarily on 2D images and {{i:text}}.[^10] {{i:Common}} failures include:

- **Detached Geometry:** The AI might describe a "table" even if the legs are hovering below the tabletop.[^10]
- **Scale Misinterpretation:** Without a {{i:reference}} object in the render, the AI may misjudge scale, leading to inappropriate feedback on wall thickness.[^1]

> [!CAUTION]
> **Hallucination of Detail:** The AI may describe features it expects to see (like "engraved {{i:text}}") even if the student's {{i:code}} failed to render them.[^10]

> [!IMPORTANT]
> **AI is a verification assistant, not a source of truth.** The deterministic rendering of {{i:OpenSCAD}} remains the final authority on {{i:geometry}}. AI is most useful as a "sanity check" to catch obvious mistakes {{i:before}} wasting {{i:filament}}.[^1]

## Occupational Health and Safety

Safety in the {{i:3DMake}} {{i:workflow}} extends to the physical act of {{i:printing}}, which involves thermal, chemical, and mechanical risks. The National Institute for Occupational Safety and Health (NIOSH) provides a clear framework for these risks.[^12]

### Chemical and Particulate Emissions

The melting of plastic {{i:filament}} is a thermal degradation process. {{hi:ABS}}ABS releases styrene, a known respiratory irritant and potential carcinogen.[^12] Even {{hi:PLA}}PLA emits millions of ultrafine particles (UFPs) per minute during extrusion — particles smaller than 100 nanometers that {{i:can}} penetrate deep {{i:into}} the lungs.[^12]

| Emission Component         | Primary Source Filaments | Mitigation Strategy                                   |
| :------------------------- | :----------------------- | :---------------------------------------------------- |
| Styrene                    | ABS, ASA                 | Enclosed {{i:printer}} with carbon filtration.[^12]         |
| Formaldehyde               | POM, Nylon               | High-efficiency external ventilation.[^12]            |
| Ultrafine Particles        | All filaments            | HEPA filtration and "20-minute" settling period.[^14] |
| Volatile Organic Compounds | All filaments            | Minimum 6 air changes per hour in the room.[^15]      |

> [!WARNING]
> ABS and ASA filaments release styrene — a respiratory irritant and potential carcinogen. Always use an enclosed {{i:printer}} with carbon filtration for these materials.

### Physical and Mechanical Hazards

The extruder nozzle {{i:can}} reach 260°C and the heated {{i:build}} plate {{i:can}} reach 110°C.[^13] Standard operating procedures for a student lab must include:

- **Pre-use Inspection:** Check for frayed wires, loose belts, and a clear {{i:build}} surface.[^15]
- **Environmental Controls:** Prohibit eating or drinking in the {{i:print}} area to avoid ingestion of contaminants.[^13]
- **Emergency Response:** Locate the nearest ABC fire extinguisher (Class D for metal prints).[^16]
- **Post-Print Cooling:** Ensure the {{i:printer}} has cooled below 30°C {{i:before}} removing the model.[^15]

## Challenges Inherent in the {{i:OpenSCAD}} Language

{{i:OpenSCAD}}'s declarative nature and unique rendering kernel present {{i:specific}} hurdles for students. Unlike imperative languages, {{i:OpenSCAD}} describes _what_ a shape is, not _how_ to {{i:build}} it step by step.[^19]

### Immutable State

> [!NOTE]
> Variables in {{i:OpenSCAD}} are more like constants within a scope. If a student writes `x = 5; x = 10;`, {{i:OpenSCAD}} will use the last assigned value (`x = 10`) for the entire {{i:script}}.[^20] This requires adopting a functional programming mindset where {{i:geometry}} is defined by its state rather than a sequence of movements.

### Performance Bottlenecks

> [!NOTE]
> {{i:OpenSCAD}}'s CGAL {{i:geometry}} kernel is highly accurate but slow for certain operations. **Minkowski sums** (used for rounding corners) {{i:can}} take minutes at high `$fn` values. Keep `$fn` low while developing and only raise it for final renders.[^21] {{i:OpenSCAD}} also has no native "fillet" {{i:command}} — students must construct these manually {{i:using}} boolean subtractions or libraries like BOSL2.[^4]

### The Absolute Coordinate Barrier

{{i:OpenSCAD}} has no concept of relative constraints — every object is positioned in absolute (X, Y, Z) space.[^9] If a student moves {{i:one}} {{i:part}}, they must manually calculate and update the translation of every related {{i:part}}. This necessitates heavy use of {{i:variables}} and mathematical offsets.[^9]

## Technical Limitations of {{i:3DMake}}

| Limitation       | Technical Root Cause                                | Educational Impact                                                   |
| :--------------- | :-------------------------------------------------- | :------------------------------------------------------------------- |
| CLI Barrier      | No graphical interface for configuration            | Steep learning curve for students with zero terminal experience.[^1] |
| API Dependency   | AI features require external internet and API keys  | Advanced features fail in offline school networks.[^1]               |
| {{i:Slicer}} Lock-in   | Reliant on external templates for G-{{i:code}} generation | Students may not learn the nuance of slicing settings.[^1]           |
| Feedback Latency | No real-{{i:time}} "live" preview in the editor           | The edit-compile-view cycle is slower than GUI-based CAD.[^1]        |

> [!CAUTION]
> AI features (`3dm info` descriptions, `3dm orient`) require an active internet connection and a configured API key. These features will fail silently on offline school networks — plan accordingly.

> [!CAUTION]
> **Non-manifold {{i:geometry}}** (zero-thickness walls or improperly closed polyhedrons) will generate an {{i:STL}} without warning from `3dm build`, but the `slice` {{i:command}} may then fail or produce corrupt G-{{i:code}}. Always verify mesh integrity {{i:before}} {{i:printing}}.[^24] Students must learn mesh verification skills {{i:using}} tools like MeshLab or {{hi:PrusaSlicer}}PrusaSlicer's repair functions.[^28]

## Local Resources — Utah Makerspaces

Utah provides a broad network of makerspaces across public libraries, universities, and community nonprofits.

### Public Library Makerspaces

**Salt Lake City Public Library – Creative Lab** (Main + Marmalade, Glendale, Sprague branches): 3D printers, Cricut cutters, Adobe Creative Cloud, sound booth, and more.[^turn1search11]

**Salt Lake County Library – Create Spaces** (Daybreak, Granite, Holladay, Kearns, Magna, Sandy): Flashforge and LulzBot 3D printers, VR/robotics kits, audio/visual studios.[^turn1search12]

**Weber County Library Makerspaces:** Laser cutters, vinyl cutters, embroidery machines, and {{i:design}} software stations.[^turn1search8]

**Washington County Library – Sid Atkin Makerspace (St. George):** Large-format 3D printers, CNC cutters, sewing machines, electronics kits, and woodworking tools.[^turn1search14]

**Logan Library – Cytiva STEM Makerspace (Cache County):** Bambu 3D printers, laser engravers, heat presses, and digitization tools.[^turn1search10]

### University & Higher-Education Makerspaces

**University of Utah – Marriott Library ProtoSpace:** Prusa MK4 and Prusa XL printers, 3D scanners, open to students and staff.[^turn1search15]

**Utah Tech University – Jr. Makerspace (St. George):** Supports K–12 and community visitors with training and STEM events.[^turn1search9]

**Southern Utah University – Thunderworks Makerspace (Cedar City):** CNC tools, 3D printers, electronics benches, and generous public hours.[^turn1search9]

### Regional STEM Hubs

**Make Salt Lake:** Nonprofit makerspace with woodshop, metal shop, laser cutters, 3D {{i:printer}} labs, and electronics benches.[^turn1search9]

The **Utah STEM Action Center's Innovation Hub Network** maintains a statewide directory across all counties: [stem.utah.gov/innovationhubnetwork](https://stem.utah.gov/innovationhubnetwork/).

### National Makerspace Directories

- [Nation of Makers](https://www.nationofmakers.us/find-a-maker-organization) — U.S. crowdsourced map of makerspaces and hackerspaces
- [Makerspace.com Global Directory](https://makerspace.com/directory/) — Worldwide listing with search and filters
- [Makerspace Directory (makerspacedir.com)](https://makerspacedir.com/) — U.S.-focused, covers Fab Labs, youth programs, and coworking hybrids
- [WorkMakeCreate](https://workmakecreate.com/) — Find free and public makerspaces by ZIP {{i:code}}

## Supplemental Learning Resources

- [Programming with {{i:OpenSCAD}}: A Beginner's Guide to Coding 3D-Printable Objects](../../textbooks/Programming_with_OpenSCAD.epub) — Complete {{i:reference}} covering syntax, {{i:geometry}} concepts, {{i:design}} patterns, and best practices
- [Simplifying 3D Printing with {{i:OpenSCAD}}](../../textbooks/Simplifying_3D_Printing_with_OpenSCAD.epub) — Focused guide to practical workflows, optimization, and real-world {{i:printing}}
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Working {{i:OpenSCAD}} examples organized by topic and difficulty
- [Practice Worksheets and Guides](https://programmingwithopenscad.github.io/learning.html) — Printable materials for visualization practice and assessment

## References

Deck, T. (2025). _3DMake: A {{i:command}}-line tool for 3D {{i:printing}} workflows_. {{i:GitHub}}. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

Gohde, J., & Kintel, M. (2021). _Programming with {{i:OpenSCAD}}: A beginner's guide to coding 3D-printable objects_. No Starch Press.

Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). _Understanding the challenges of {{i:OpenSCAD}} users for 3D printing_. ACM UIST.

NIOSH. (2024). _Approaches to safe 3D printing_. [https://www.cdc.gov/niosh/blogs/2024/safe-3d-{{i:printing}}.html](https://www.cdc.gov/niosh/blogs/2024/safe-3d-{{i:printing}}.html)

Ohio State University EHS. (2026). _3D {{i:printer}} safety concerns and ventilation_. [https://ehs.osu.edu/kb/3d-{{i:printer}}-safety](https://ehs.osu.edu/kb/3d-{{i:printer}}-safety)

Washington State Department of Health. (2026). _3D {{i:printer}} and {{i:filament}} selection for safe school environments_. [https://doh.wa.gov/community-and-{{i:environment}}/schools/3d-printers](https://doh.wa.gov/community-and-{{i:environment}}/schools/3d-printers)

[^1]: Deck, T. (2025). _3DMake_. {{i:GitHub}}. [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

[^3]: Programming with {{i:OpenSCAD}}. [https://programmingwithopenscad.github.io/](https://programmingwithopenscad.github.io/)

[^4]: CadHub. _OpenSCAD Review_. [https://learn.cadhub.xyz/blog/openscad-review/](https://learn.cadhub.xyz/blog/openscad-review/)

[^6]: Class Central. _OpenSCAD Courses_. [https://www.classcentral.com/subject/openscad](https://www.classcentral.com/subject/openscad)

[^9]: Hacker News. [https://news.ycombinator.com/item?id=46338565](https://news.ycombinator.com/item?id=46338565)

[^10]: ZenML. _LLM-Powered 3D {{i:Model}} Generation_. [https://www.zenml.io/llmops-database/llm-powered-3d-model-generation-for-3d-{{i:printing}}](https://www.zenml.io/llmops-database/llm-powered-3d-model-generation-for-3d-{{i:printing}})

[^12]: Ohio State University EHS. [https://ehs.osu.edu/kb/3d-{{i:printer}}-safety](https://ehs.osu.edu/kb/3d-{{i:printer}}-safety)

[^13]: RIT EHS. [https://www.rit.edu/ehs/3-d-{{i:printer}}-safety](https://www.rit.edu/ehs/3-d-{{i:printer}}-safety)

[^14]: CDC/NIOSH. [https://www.cdc.gov/niosh/blogs/2024/safe-3d-{{i:printing}}.html](https://www.cdc.gov/niosh/blogs/2024/safe-3d-{{i:printing}}.html)

[^15]: Washington State DoH. [https://doh.wa.gov/community-and-{{i:environment}}/schools/3d-printers](https://doh.wa.gov/community-and-{{i:environment}}/schools/3d-printers)

[^16]: UTK EHS. [https://ehs.utk.edu/index.php/table-of-policies-plans-procedures-guides/3d-{{i:printer}}-safety/](https://ehs.utk.edu/index.php/table-of-policies-plans-procedures-guides/3d-{{i:printer}}-safety/)

[^19]: Gonzalez Avila et al. [https://thomaspietrzak.com/bibliography/gonzalez24.pdf](https://thomaspietrzak.com/bibliography/gonzalez24.pdf)

[^20]: Reddit. [https://www.reddit.com/r/openscad/comments/1fxj8xv/](https://www.reddit.com/r/openscad/comments/1fxj8xv/)

[^21]: {{i:OpenSCAD}} Issue #6297. [https://github.com/openscad/openscad/issues/6297](https://github.com/openscad/openscad/issues/6297)

[^24]: {{i:OpenSCAD}} Issue #6114. [https://github.com/openscad/openscad/issues/6114](https://github.com/openscad/openscad/issues/6114)

[^28]: Tom's Hardware. [https://www.tomshardware.com/3d-{{i:printing}}/how-to-repair-stl-{{i:files}}-in-meshlab](https://www.tomshardware.com/3d-{{i:printing}}/how-to-repair-stl-{{i:files}}-in-meshlab)

[^turn1search8]: [https://www.weberpl.lib.ut.us/use-your-library/makerspaces](https://www.weberpl.lib.ut.us/use-your-library/makerspaces)

[^turn1search9]: [https://stem.utah.gov/innovationhubnetwork/](https://stem.utah.gov/innovationhubnetwork/)

[^turn1search10]: [https://library.loganutah.org/about_us/services/makerspace.php](https://library.loganutah.org/about_us/services/makerspace.php)

[^turn1search11]: [https://services.slcpl.org/creativelab](https://services.slcpl.org/creativelab)

[^turn1search12]: [https://www.slcolibrary.org/what-we-have/{{i:create}}](https://www.slcolibrary.org/what-we-have/{{i:create}})

[^turn1search14]: [https://library.washco.utah.gov/st-george/makerspace/](https://library.washco.utah.gov/st-george/makerspace/)

[^turn1search15]: [https://www.lib.utah.edu/services/3d-{{i:printing}}.php](https://www.lib.utah.edu/services/3d-{{i:printing}}.php)

- [https://www.nationofmakers.us/find-a-maker-organization](https://www.nationofmakers.us/find-a-maker-organization)

- [https://makerspace.com/directory/](https://makerspace.com/directory/)

- [https://makerspacedir.com/](https://makerspacedir.com/)

- [https://workmakecreate.com/](https://workmakecreate.com/)

---

# Part II — Curriculum Guide

_Structure, learning paths, and {{i:reference}} {{i:material}} for the complete 11-lesson course._

## Overview

This 11-lesson curriculum (plus 4 {{i:reference}} appendices) teaches non-visual 3D modeling, {{i:parametric}} {{i:design}} principles, and the complete 3D {{i:printing}} {{i:workflow}} through integrated projects. Each lesson builds on prior knowledge, introducing real-world examples and hands-on activities.

**Target Audience:** High school and early undergraduate students, makers, and anyone interested in programmatic CAD and 3D {{i:printing}}
**Estimated Total Time:** 30–40 hours (11 lessons + 4 appendices + projects)

## Lesson Structure at a Glance

| #   | Title                         | Duration    | Level         | Key Project         |
| --- | ----------------------------- | ----------- | ------------- | ------------------- |
| 1   | Environmental Configuration   | 2.5–3.5 hrs | Beginner      | Project scaffold    |
| 2   | {{hi:Geometric Primitives}}Geometric Primitives & CSG    | 1 hr        | Beginner      | 3 CSG examples      |
| 3   | {{hi:Parametric Architecture}}Parametric Architecture       | 2.5 hrs     | Beginner+     | Parametric bracket  |
| 4   | AI Verification               | 2–2.5 hrs   | Intermediate  | AI-notes.md         |
| 5   | Safety & Physical Interface   | 2.5–3.5 hrs | Intermediate  | Pre-{{i:print}} checklist |
| 6   | 3dm Commands & {{hi:Text Embossing}}Text Embossing | 2.5–3.5 hrs | Intermediate  | Keycap variants     |
| 7   | {{hi:Parametric Transforms}}Parametric Transforms         | 3–3.5 hrs   | Intermediate+ | Phone Stand         |
| 8   | Advanced Parametric {{i:Design}}    | 1.5-2 hrs   | Advanced      | Stackable Bins      |
| 9   | Automation & Workflows        | 2.5–3.5 hrs | Advanced      | Batch {{i:build}} {{i:script}}  |
| 10  | Troubleshooting & Mastery     | 5–6 hrs     | Advanced      | 3 complete projects |
| 11  | {{hi:Stakeholder-Centric {{i:Design}}}}Stakeholder-Centric {{i:Design}}    | 3.5–4.5 hrs | Advanced+     | Jewelry Holder      |

## Learning Paths

**Path 1 — Complete Mastery (30–40 hours):** Lessons 1–11 + all appendices. Best for {{i:first}}-{{i:time}} learners wanting comprehensive understanding.

**Path 2 — {{i:Design}} Focus (Fast Track):** Lessons 1 → 2 → 3 → 6 → 7 → 8 → 9. Best for experienced designers {{i:new}} to programmatic CAD.

**Path 3 — Project-Based:** Lessons 1–3 → 6 (Keycap) → 7 (Phone Stand) → 8 (Bins) → 9 (Automation) → 10 (Troubleshooting) → 11 (Leadership). Best for learning by doing.

**Path 4 — Safety & Printing Focus:** Lessons 1, 2, 5, 6, 10 + Appendices A, B, C. Best for practical {{i:printing}} and {{i:quality}} focus.

## Detailed Lesson Descriptions

### Lesson 1: Environmental Configuration and the Developer Workflow

Install and configure 3dMake, {{i:create}} a project scaffold, and {{i:run}} your {{i:first}} {{i:build}}. Covers installation and tool verification, project structure (`src/`, `build/`, `3dmake.toml`), {{i:parametric}} {{i:design}} philosophy, and the `3dm build` {{i:command}}. **Checkpoint:** You {{i:can}} initialize a project, edit a {{i:parametric}} model, and generate an {{i:STL}} {{i:file}}.

### Lesson 2: Geometric Primitives and Constructive Solid Geometry (CSG)

Combine basic shapes {{i:using}} {{hi:Boolean operations}}boolean operations. Covers `cube()`, `sphere()`, `cylinder()`; CSG operations (`union()`, `difference()`, `intersection()`); the 0.001 offset rule for non-manifold {{i:geometry}}; and low-resolution renders for faster {{hi:Debugging}}debugging. **Checkpoint:** You understand CSG operations and {{i:can}} diagnose {{i:common}} {{i:geometry}} issues.

### Lesson 3: Parametric Architecture and Modular Libraries

Create reusable {{hi:Modules}}modules and organize {{i:code}} {{i:into}} libraries {{i:using}} the DRY principle. Covers {{i:module}} definitions, derived calculations, library organization (`lib/` folder), BOSL2, and low-resolution testing with `$fn`. **Checkpoint:** You {{i:can}} {{i:create}} {{i:parametric}} modules and organize {{i:code}} {{i:into}} libraries.

### Lesson 4: AI-Enhanced Verification and Multimodal Feedback

Use `3dm info` to generate AI diagnostics and validate designs. Covers the `3dm info` {{i:command}}, AI-generated descriptions, AI limitations, privacy and governance, and prompt engineering basics. **Checkpoint:** You {{i:can}} use AI tools to supplement your {{i:design}} validation.

### Lesson 5: Safety Protocols and the Physical Fabrication Interface

Transition from digital {{i:design}} to physical {{i:printing}}. Covers the Hierarchy of Controls, chemical and particulate emissions, pre-{{i:print}} environmental and equipment checks, post-{{i:print}} inspection, and spool metadata. **Checkpoint:** You understand safety procedures and {{i:can}} safely conduct supervised prints.

### Lesson 6: Practical 3dm Commands and Text Embossing

Master key 3dm {{i:commands}} by building a customizable keycap. Covers `3dm info`, `3dm preview`, `3dm orient`, `3dm slice`, and {{i:text}} embossing with `linear_extrude()` and `text()`. **Project:** Generate 3+ keycap variants (small, medium, large). **Checkpoint:** You {{i:can}} generate keycaps with embossed {{i:text}} and understand all major 3dm {{i:commands}}.

### Lesson 7: Parametric Transforms and the Phone Stand Project

Apply transforms to {{i:build}} a multi-{{i:part}} assembly. Covers `translate()`, `rotate()`, `scale()`, Minkowski sum for edge rounding, multi-{{i:part}} assemblies, and {{i:parametric}} angle variations. **Project:** Phone stand with configurations for phones, tablets, and documents. **Checkpoint:** You {{i:can}} {{i:design}} multi-{{i:part}} assemblies with positioned components.

### Lesson 8: Advanced Parametric {{i:Design}} and Interlocking Features

{{i:Design}} tolerance-critical assemblies where parts snap together. Covers tolerance and clearance management, stack-up {{i:error}}, interlocking rims, snap-fit connectors, and chamfers. **Project:** Stackable storage bins — {{i:test}} different `stack_clear` values, {{i:create}} size variants, add optional dividers. **Checkpoint:** You understand tolerance management and {{i:can}} {{i:design}} stackable assemblies.

### Lesson 9: Automation and 3dm Workflows

Automate {{i:design}} workflows {{i:using}} {{i:shell}} {{i:scripts}}. Covers chaining 3dm {{i:commands}} with `&&`, {{i:shell}} {{i:script}} batch processing, library management (`3dm lib`), variant testing matrices, and production {{i:build}} workflows. **Checkpoint:** You {{i:can}} automate {{i:design}} workflows and manage {{i:parametric}} variants at scale.

### Lesson 10: Hands-On Practice Exercises and Troubleshooting

Capstone lesson synthesizing all prior learning across three exercise sets: **Set A** (guided projects: Phone Stand, Keycap Set, Storage System), **Set B** (problem diagnosis: non-manifold {{i:geometry}}, {{i:print}} failure prevention, dimensional accuracy), and **Set C** (validation and documentation templates). **Checkpoint:** You {{i:can}} complete real projects from concept to verified {{i:print}}.

### Lesson 11: Stakeholder-Centric {{i:Design}} and the Beaded Jewelry Project

{{i:Design}} for real users, not just yourself. Covers stakeholder identification and interview techniques, extracting functional requirements, defining measurable acceptance criteria, {{i:design}} iteration based on feedback, and documentation for reproducibility. **Project:** Beaded jewelry bracelet holder — interview a stakeholder, extract requirements, {{i:design}} parametrically, {{i:test}} with actual bracelets, iterate. **Checkpoint:** You {{i:can}} conduct a real interview, {{i:translate}} needs {{i:into}} measurable requirements, and iterate a {{i:design}} based on user feedback.

## Project Completion Tracking

| Project      | Lessons | Output Files                | Est. Print Time |
| ------------ | ------- | --------------------------- | --------------- |
| Keycap Set   | 1–6     | 5+ SCAD {{i:files}}, 3+ {{i:STL}} {{i:files}} | 15–30 min total |
| Phone Stand  | 1–7     | 1 SCAD with 3+ variants     | 30–60 min total |
| Storage Bins | 1–8     | 1 {{i:parametric}} SCAD, 3 sizes  | 60–90 min total |

## Assessment and Completion

Each lesson includes learning objectives, step-by-step tasks, checkpoints, a 10-question self-assessment quiz, and 10 extension problems.

**Lesson completion criteria:** Watched/read entire lesson · Completed all step-by-step tasks · Reached all checkpoints · Answered quiz questions · Attempted at least 3 extension problems · Documented findings.

**Project completion criteria:** Code builds without errors · All {{hi:Parameters}}{{i:parameters}} functional · {{i:STL}} generated and inspected · Measurements documented · Assembly tested (if multi-{{i:part}}) · README or documentation included.

## Appendices Overview

| Appendix                           | Focus                                                                           | Use When                                     |
| ---------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------------- | --------------------------------- |
| A: Comprehensive Slicing Guide     | PrusaSlicer, Bambu Studio, {{hi:Cura}}Cura, OrcaSlicer, and more                           | Slicing questions, slicer {{i:reference}}          |
| B: {{hi:Material Properties}}Material Properties & Selection | PLA, {{hi:PETG}}PETG, ABS, {{hi:TPU}}TPU, Polycarbonate, Nylon — properties, settings, decision tree | Choosing {{i:material}}, troubleshooting prints    |
| C: Tolerance Testing & QA Matrix   | Measurement procedures, functional testing, stack-up calculations               | Quality verification, measurement techniques |
| D: {{hi:{{i:PowerShell}}}}{{i:PowerShell}} Integration          | Batch processing, automation {{i:scripts}}, {{i:workflow}} integration                      | Building automation, batch processing        |
| E: Advanced {{i:OpenSCAD}} Concepts      | Gears, batch/statistical analysis, performance optimization, recursion          | Optional                                     | Specialized/advanced applications |

## Accessibility Features

This curriculum is designed for non-visual learners: {{i:text}} descriptions of all models via `3dm info`, tactile 2D previews via `3dm preview`, structured written documentation, {{i:command}}-line based (no graphical interface required), and measurement-based validation without visual inspection.

## Next Steps After Completion

Upon completing this curriculum, students are ready for: advanced BOSL2 library features and {{i:parametric}} assemblies; multi-{{i:material}} {{i:printing}} (TPU, Nylon, etc.); mechanical assemblies with bearings, gears, and mechanisms; community contribution via shared designs and libraries; and professional applications in product {{i:design}}, prototyping, and manufacturing.

---

# Part III — Using {{i:OpenSCAD}} for 3D Printing Curriculum

# Lesson 1 — Environmental Configuration and the Developer Workflow

**Estimated Time:** 60–90 minutes  
**Course:** 3D Printing for the Blind

---

## A Message to You Before We Begin

Welcome to your {{i:first}} lesson. If {{i:you}}'ve never used a {{i:command}} line, never written {{i:code}}, or never sent a {{i:file}} to a 3D {{i:printer}} {{i:before}}, {{i:you}} are in exactly the right place. This lesson is designed so that someone who has done none of those things {{i:can}} follow every step.

If {{i:you}} _have_ done some of those things, {{i:you}}'ll still find this lesson useful — because the way 3D {{i:printing}} tools fit together is different from most software {{i:you}}'ve used {{i:before}}, and understanding the full picture from the start will save {{i:you}} real trouble later.

By the {{i:time}} {{i:you}} finish this lesson, {{i:you}} will have your tools installed and working, {{i:you}}'ll understand the basic logic of the coordinate system your designs live in, and {{i:you}}'ll have {{i:run}} your {{i:first}} {{i:parametric}} 3D model through the complete {{i:build}}-and-verify {{i:workflow}}.

Take your {{i:time}} here. The concepts in this {{i:first}} lesson are the foundation everything else is built on.

---

## Learning Objectives

By the end of this lesson {{i:you}} will be able to:

- Install and verify the 3dMake toolchain on {{i:Windows}} and Linux (MacOS requires a {{i:build}} from scratch and official {{i:support}} is not yet finalized)
- Understand the {{i:OpenSCAD}} coordinate system and unit conventions
- Write and {{i:build}} your {{i:first}} {{i:parametric}} `.scad` {{i:file}}
- Read and interpret `3dm info` {{i:output}} without a visual display
- Use the core developer {{i:workflow}}: edit → {{i:build}} → verify

---

## Concept 1: What Is Parametric 3D {{i:Design}}?

### The Two Ways to {{i:Design}} for 3D Printing

There are two ways to {{i:design}} a 3D object for {{i:printing}}. The {{i:first}} way is to use a **visual editor** — a program where {{i:you}} click, drag, and push shapes around the screen until they look right. Programs like Tinkercad {{i:work}} this way. They're intuitive and fast for simple objects, but they have a limitation: if {{i:you}} want to change the size of something, {{i:you}} often have to go back and manually adjust every related dimension by hand.

The second way is to use **{{i:code}}**. You {{i:write}} instructions that describe your object mathematically. "Make a box that is 30 millimeters wide, 20 millimeters deep, and 10 millimeters tall." If {{i:you}} later decide that 30 mm is too narrow and 40 mm would be better, {{i:you}} change {{i:one}} number, and the model automatically updates everywhere that number is used. This is called **{{i:parametric}} {{i:design}}** — the word "{{i:parametric}}" means the {{i:design}} is controlled by _parameters_, which are the named values {{i:you}} {{i:can}} adjust.

Parametric {{i:design}} is how professional engineers {{i:create}} parts. An engineer designing a phone stand might {{i:create}} {{i:one}} {{i:file}} that works for phone models ranging from 60 to 90 mm wide just by changing a single variable. That single source {{i:file}} _is the {{i:design}} concept_, and {{i:specific}} values turn it {{i:into}} {{i:specific}} objects.

**{{i:OpenSCAD}}** is the tool {{i:you}}'ll use for {{i:parametric}} {{i:design}} in this course. Instead of clicking and dragging, {{i:you}} {{i:write}} {{i:code}} that describes shapes and their relationships. The learning curve is steeper than a visual editor at the very beginning, but within a few lessons {{i:you}}'ll be creating things that would be extremely difficult or impossible in a drag-and-drop tool.

### What 3dMake Does

{{i:OpenSCAD}} by itself is powerful, but its {{i:workflow}} has a lot of friction. To go from {{i:code}} to a printable {{i:file}}, {{i:you}}'d normally need to open {{i:OpenSCAD}}, manually trigger a render, export an {{i:STL}} {{i:file}}, open a separate slicer program, check for {{i:geometry}} errors, and save the {{i:output}}. That's a lot of steps just to see if your idea works.

**3dMake** is a tool that wraps around {{i:OpenSCAD}} and smooths out that friction. When {{i:you}} type `3dm build`, it runs the entire compile-and-export process for {{i:you}} automatically. When {{i:you}} type `3dm info`, it analyzes your model and tells {{i:you}} its dimensions, volume, and a description in plain language. The more {{i:time}} {{i:you}} spend designing rather than managing {{i:files}}, the faster {{i:you}} learn and the more {{i:you}} make.

Think of it this way: {{i:OpenSCAD}} is the engine, and 3dMake is the dashboard. You could use the engine directly, but the dashboard makes it dramatically easier to operate.

---

## Concept 2: The Command Line

### What It Is and Why We Use It

You're going to be working with the **{{i:command}} line** throughout this course. If {{i:you}}'ve mostly used computers by clicking icons and menus, the {{i:command}} line {{i:can}} feel strange at {{i:first}} — but it's really just a different way to talk to your computer.

Here is the basic idea: the {{i:command}} line is a {{i:text}} box where {{i:you}} type an instruction, press Enter, and the computer does something and prints a response. That's the whole interaction model. Type a {{i:command}}. Press Enter. Read the result. Repeat. The challenge is being sure that {{i:you}} and the {{i:command}} line are speaking the same language.

For example, if {{i:you}} type `3dm build` and press Enter, the computer finds the 3dMake program, tells it to {{i:build}} your project, and then prints either a success message with your model's dimensions, or an {{i:error}} message with a line number pointing to the problem. This feedback loop is tight, fast, and precise — which is exactly what {{i:you}} want when {{i:you}}'re designing and testing.

The {{i:command}} line has another advantage: it's repeatable. If {{i:you}} type a {{i:command}} that works, {{i:you}} {{i:can}} type it again. You {{i:can}} save it in a {{i:script}} and {{i:run}} it automatically. You {{i:can}} share it with someone else, and they {{i:can}} {{i:run}} the same {{i:command}} and get the same result. Clicking around menus is difficult to document and impossible to automate; {{hi:Text {{i:commands}}}}{{i:text}} {{i:commands}} are both.

### Which Terminal to Use

**{{i:Windows}} users:** You have three options, two are built-in and {{i:one}} {{i:you}} have to install. **{{i:PowerShell}}** is the modern choice and the {{i:one}} we recommend — it's more powerful and consistent with what {{i:you}}'ll find in professional environments. To open it, press the {{i:Windows}} key, type `PowerShell`, and press Enter. Alternatively, **Command Prompt ({{hi:CMD}}CMD)** is an older option that still works for basic tasks. There also is a version of `bash` that has been poreted from Linux to {{i:Windows}} as {{i:part}} of {{i:using}} a program called `git`. This course provides {{i:code}} examples and curriculum paths for {{i:each}}.

**macOS users:** Open **Terminal** by going to Applications → Utilities → Terminal. It runs a {{i:shell}} called `bash` (`zsh` is default on newer Macs — both `bash` and `zsh` {{i:work}} for this course and at the level we are working the syntax is the same).

**Linux users:** You almost certainly already know how to open a terminal. If not, look for "Terminal" in your applications menu. This course assumes {{i:you}} are {{i:using}} `bash` or `zsh`. I do not cover dsh or fish in this course.

### A Few Things to Know Before We Start

- On macOS, Linux, and {{hi:{{i:Git}} {{i:Bash}}}}{{i:Git}} {{i:Bash}} on {{i:Windows}}, **{{i:file}} paths use forward slashes**: `src/main.scad`
- On {{i:Windows}} Powershell and COmmand Line, **{{i:file}} paths use backslashes**: `src\main.scad`
- Commands are **case-sensitive on macOS and Linux** — `3DM` and `3dm` are different things, and only the lowercase version will {{i:work}}.
  - On {{i:Windows}} some {{i:commands}} are case sensitive and some are not. So {{i:common}} sense is to treat them as all case sensitive.
- When a {{i:command}} says a program "isn't found" but {{i:you}} did install it, it does not mean the software isn't installed — it usually means the terminal opened {{i:before}} the installation updated its search path (we'll cover how to fix this in Step 1)

---

## Step 1 — Install the 3dMake Toolchain

### Understanding What You're Installing

You're installing two pieces of software that {{i:work}} together:

**{{i:OpenSCAD}}** is the underlying 3D {{i:geometry}} engine. It reads your `.scad` {{i:code}} {{i:files}} and turns them {{i:into}} 3D model {{i:files}} (specifically `.stl` {{i:files}}). You {{i:can}} think of it like a compiler for 3D {{i:geometry}} — the same way a Python interpreter turns Python {{i:code}} {{i:into}} running behavior, {{i:OpenSCAD}} turns {{i:design}} {{i:code}} {{i:into}} physical {{i:geometry}}. You don't need to interact with {{i:OpenSCAD}} directly very often; 3dMake does it for {{i:you}}.

**3dMake** is the project management {{i:layer}} that sits on top of {{i:OpenSCAD}}. It organizes your project {{i:files}}, runs {{i:OpenSCAD}} with the right settings, analyzes your model {{i:output}}, and provides the plain-English `3dm info` descriptions {{i:you}}'ll use to verify your {{i:work}}.

The installer sets up both. Run the appropriate {{i:command}} for your operating system below, let it finish completely, and then {{i:run}} the verification {{i:commands}} {{i:before}} doing anything else.

### Installation Commands

**Linux and macOS (bash terminal):**

Download and {{i:run}} the most recent official insallation {{i:file}} from Github [https://github.com/tdeck/3dmake/releases](https://github.com/tdeck/3dmake/releases) or the project website [https://blindmakers.net/3dmake/](https://blindmakers.net/3dmake/)

I recommend choosing a location like `~/Applications/3dmake` as the target for extracting the {{i:files}}

Do the following at the {{i:command}} line:

```bash
# Navigate to the file
cd ~/Applications/3dmake
# Run the initial setup to "install" the program
./3dm setup
# After it finishes, verify both tools are installed correctly.
# Both of these commands should print version numbers, not errors.
3dm --version
openscad --version
```

**{{i:Windows}} ({{i:PowerShell}}):**

Download and {{i:run}} the most recent official insallation {{i:file}} from Github [https://github.com/tdeck/3dmake/releases](https://github.com/tdeck/3dmake/releases) or the project website [https://blindmakers.net/3dmake/](https://blindmakers.net/3dmake/)

I recommend choosing a location like `~/3dmake` as the target for extracting the {{i:files}}

Do the following at the {{i:command}} line:

```powershell
# Navigate to the file
cd ~/3dmake
# Run the initial setup to "install" the program
./3dm.exe setup
# After it finishes, verify both tools are installed correctly.
# Verify the installation:
3dm --version
openscad --version
```

**{{i:Windows}} (Command Prompt / CMD):**

Download and {{i:run}} the most recent official insallation {{i:file}} from Github [https://github.com/tdeck/3dmake/releases](https://github.com/tdeck/3dmake/releases) or the project website [https://blindmakers.net/3dmake/](https://blindmakers.net/3dmake/)

I recommend choosing a location like `~/3dmake` as the target for extracting the {{i:files}}

Do the following at the {{i:command}} line:

```batch
REM Navigate to the file
cd ~/3dmake
REM Run the initial setup to "install" the program
./3dm.exe setup
REM After installation, open a NEW CMD window and verify:
3dm --version
openscad --version
```

### What the Version Numbers Mean

When {{i:you}} {{i:run}} `3dm --version`, {{i:you}} will see {{i:output}} like

```pwsh
3dm v0.9
```

The exact number doesn't matter as long as something prints. When {{i:you}} {{i:run}} `openscad --version`, {{i:you}} should see `OpenSCAD version 2021.01` or later. If either {{i:command}} produces an {{i:error}} instead of a version number, something went wrong with the installation. Read the troubleshooting section {{i:before}} moving on.

### Troubleshooting Installation

**"{{i:command}} not found" or "is not recognized as an internal or external {{i:command}}"**

This is the most {{i:common}} issue and it almost always has the same cause: your terminal session started {{i:before}} the installer ran. When the installer finishes, it adds the 3dMake folder to a system setting called the **{{i:PATH}}** — a list of folders your computer searches when {{i:you}} type a {{i:command}} {{i:name}}. But a terminal that was already open when the installer ran doesn't know about the change. The fix is simple: **close your terminal completely and open a {{i:new}} {{i:one}}**, then try the verification {{i:commands}} again.

**What is {{i:PATH}}?** When {{i:you}} type `3dm` at the {{i:command}} line, your computer doesn't search your entire hard drive — that would take forever. Instead, it searches only the folders listed in {{i:PATH}}. If 3dMake's folder isn't in that list, the computer genuinely {{i:can}}'t find the program even though it's installed. Closing and reopening the terminal forces it to reload the {{i:PATH}} list.

If opening a {{i:new}} terminal doesn't fix it, {{i:you}} may need to add the folder manually. On {{i:Windows}}, search the Start menu for "Edit the system {{i:environment}} {{i:variables}}," click "Environment Variables," and add the 3dMake installation folder to the `Path` variable. On macOS/Linux, add the folder path to your `~/.bashrc` or `~/.zshrc` {{i:file}} and restart the terminal.

**{{i:OpenSCAD}} version too old**

3dMake requires {{i:OpenSCAD}} 2021 or later. If {{i:you}} have an older version from a previous installation, download the latest release from openscad.org, uninstall the old version, and install the {{i:new}} {{i:one}}.

---

## Concept 3: The Coordinate System — Where Objects Live in 3D Space

### Why You Need to Understand This Before Writing Code

Imagine {{i:you}}'re on the phone with a friend trying to tell them where to place a chair in an empty room. You'd need to agree on two things: where to measure from (a corner? the center of the room?), and which directions count as "forward," "sideways," and "up." Without that shared {{i:reference}}, your instructions are meaningless.

{{i:OpenSCAD}} works exactly the same way. Every object {{i:you}} {{i:create}} lives at a {{i:specific}} location in 3D space. That space has a fixed starting point called the **origin** and three directions called **axes**. If {{i:you}} don't know these, {{i:you}}'ll place objects and wonder why they appear where they do.

### The Three Axes

{{i:OpenSCAD}} uses a **right-handed XYZ coordinate system** — a standard that's shared by engineering software worldwide, so learning it here transfers directly to other professional tools.

Picture a 3D {{i:printer}}'s {{i:build}} plate in front of {{i:you}}:

- **X axis** — points to the **right** across the {{i:build}} plate. Positive X is rightward; negative X is leftward.
- **Y axis** — points **away from {{i:you}}**, toward the back of the {{i:build}} plate. Positive Y is away from {{i:you}}; negative Y is toward {{i:you}}.
- **Z axis** — points **straight up**, perpendicular to the {{i:build}} plate. Positive Z is upward; negative Z would be underground.

The **origin** — the point (0, 0, 0) — sits at the front-left corner of the {{i:build}} space, right at {{i:bed}} level. When {{i:you}} type `cube([20, 20, 10])` without any translation, it appears with its front-left-bottom corner at the origin, extending 20 mm to the right, 20 mm back, and 10 mm up.

### Why This Matters for Printing

Because the Z axis points up and the origin is at {{i:bed}} level, any {{i:geometry}} with a negative Z coordinate would be "underground" — below the {{i:build}} plate. The {{i:printer}} {{i:can}}'t {{i:print}} there. Part of your job when designing is to make sure your entire model lives in positive Z space (Z ≥ 0) so it sits on the {{i:bed}} correctly.

If {{i:you}} use a negative Z in your {{i:build}}, slicing programs treat the lowest Z value as (Z = 0) by moving the entire model upwards in Z until the lowest Z value = 0.

### Units: Always Millimeters

{{i:OpenSCAD}} has no built-in concept of units — it just works with numbers. The convention in this course (and in the 3D {{i:printing}} community generally) is that **all dimensions are in millimeters**. This is not optional or adjustable — it's a universal agreement.

When {{i:you}} {{i:write}} `cube([30, 20, 10])`, that means 30 mm × 20 mm × 10 mm. If {{i:you}} accidentally think in centimeters and {{i:write}} `cube([3, 2, 1])` meaning "3 cm by 2 cm by 1 cm," {{i:OpenSCAD}} will treat those as millimeters and your {{i:print}} will come out ten times too small. Always, always, always think in millimeters.

### The `center` Parameter: Where Does the Object Anchor?

Every 3D primitive in {{i:OpenSCAD}} has a `center` {{i:parameter}}. This is {{i:one}} of the most important things to understand early, because it affects where objects appear and how easy your placement math is.

**`center=false`** (this is the default — it applies if {{i:you}} don't {{i:write}} anything): the object's **bottom-left-front corner** sits at the position {{i:you}} specify. A `cube([20, 20, 10])` with no translation occupies the space from X=0 to X=20, Y=0 to Y=20, Z=0 to Z=10. The object lives entirely in positive space and sits neatly on the {{i:build}} plate.

**`center=true`**: the object's **geometric center** sits at the position {{i:you}} specify. The same {{i:cube}} at the origin would extend from X=−10 to X=10, Y=−10 to Y=10, Z=−5 to Z=5. Half of it would be underground — which means if {{i:you}} {{i:print}} it without moving it up {{i:first}}, {{i:you}}'ll only get the top half.

Neither option is wrong. You choose based on which makes your math simpler. For parts that should sit on the {{i:build}} plate, `center=false` is more natural. For parts {{i:you}} want to rotate around their center, `center=true` is much cleaner.

```openscad
// "Note that in OpenSCAD code a "//" starts a comment. Any code to the right of this is ignored by the program
//
// Demonstrating center=false vs center=true
// Build this and use 3dm info to see the bounding box of each shape.

// This cube sits on the bed naturally — its bottom is at Z=0.
cube([20, 20, 10]);                    // corner at origin; occupies X:0–20, Y:0–20, Z:0–10

// This cube straddles the origin — half of it is underground!
// Move it sideways with translate() so it doesn't overlap the first one.
translate([35, 0, 0])
  cube([20, 20, 10], center=true);     // center at origin (0,0,0); occupies X:25–45, Y:-10–10, Z:-5–5

// A small red sphere marks where the origin is.
color("red") sphere(r=1.5, $fn=16);

// Colored cylinders mark the positive direction of each axis.
color("red")   translate([25, 0, 0]) cylinder(r=0.5, h=1, $fn=8);  // +X
color("green") translate([0, 25, 0]) cylinder(r=0.5, h=1, $fn=8);  // +Y
color("blue")  cylinder(r=0.5, h=25, $fn=8);                        // +Z
```

> [!NOTE]
> When {{i:using}} `center=true`, notice how the bounding box may show negative coordinates — that's {{i:geometry}} underground.

Build this {{i:code}} usifn `3dm build` and {{i:run}} `3dm info` to read the bounding boxes.

You should get this result (AI description of the project has been turned off for this {{i:output}}):

```pwsh
Examining...
    Mesh size: x=46.47, y=35.50, z=30.00
    Mesh center: x=21.76, y=7.75, z=10.00
Done.
```

---

## Step 2 — Create Your First Project

### What a "Project" Is

3dMake organizes {{i:work}} {{i:into}} **projects** — folders with a {{i:specific}}, standard structure. This structure keeps your source {{i:code}} separate from generated {{i:output}}, which makes it easy to clean, rebuild, back up, and share your {{i:work}}.

Here is what a project folder looks like:

```
my_project/
  src/          ← your .scad source files live here (YOU write and edit these when you call `3dm edit-model`)
  build/        ← generated STL files go here (3dMake creates these when you call `3dm build`)
  3dmake.toml   ← project configuration file (created when you initialize the project)
```

> [!IMPORTANT]
> Never manually edit {{i:files}} in the `build/` folder. Everything in there is generated automatically — changes will be overwritten the next {{i:time}} {{i:you}} {{i:run}} `3dm build`. All your actual {{i:work}} goes in `src/`.

### Creating the Project

**Linux / macOS (bash):**

```bash
# Create the project folder and its standard subdirectories
mkdir my_first_project
cd my_first_project
mkdir src build

# Create the main design file
cat > src/main.scad << 'EOF'
// My First Parametric Model
// ========================
// All dimensions in millimeters.
// To customize this design, change the values below and run: 3dm build

width  = 30;   // mm — how wide the box is (X dimension)
depth  = 20;   // mm — how deep the box is (Y dimension, front to back)
height = 10;   // mm — how tall the box is (Z dimension)

cube([width, depth, height]);
EOF
```

**{{i:Windows}} ({{i:PowerShell}}):**

```powershell
# Create project folder and subdirectories
New-Item -ItemType Directory -Path "my_first_project\src","my_first_project\build"
Set-Location "my_first_project"

# Create the main design file
@'
// My First Parametric Model
// All dimensions in millimeters.
// Change values below and run: 3dm build

width  = 30;   // mm
depth  = 20;   // mm
height = 10;   // mm

cube([width, depth, height]);
'@ | Out-File -FilePath "src\main.scad" -Encoding UTF8
```

**{{i:Windows}} (CMD):**

```cmd
mkdir my_first_project\src
mkdir my_first_project\build
cd my_first_project

echo // My First Parametric Model > src\main.scad
echo width  = 30; >> src\main.scad
echo depth  = 20; >> src\main.scad
echo height = 10; >> src\main.scad
echo cube([width, depth, height]); >> src\main.scad
```

### Reading the Code Line by Line

This small {{i:file}} introduces the core pattern {{i:you}}'ll use for the entire course. Let's read every line carefully.

`// My First Parametric Model` — this is a **comment**. In {{i:OpenSCAD}}, anything following `//` on a line is ignored by the computer — it's a note for human readers. {{hi:Comments}}Comments are essential. They explain what the {{i:code}} does, what the units are, and what {{i:you}} were thinking when {{i:you}} wrote it.

`width = 30;` — this **declares a variable** named `width` and sets it equal to 30. The semicolon at the end is required — it tells {{i:OpenSCAD}} "this statement is finished." The comment `// mm` reminds anyone reading the {{i:file}} that this value is in millimeters.

`depth = 20;` and `height = 10;` — same pattern. Each variable represents {{i:one}} dimension of the box.

`cube([width, depth, height]);` — this creates a box. The brackets `[]` enclose a list of three values: the X size, the Y size, and the Z size. Instead of writing `cube([30, 20, 10])` with raw numbers, {{i:you}} use the variable names. This is the magic of {{i:parametric}} {{i:design}}: if {{i:you}} change `width = 30` to `width = 50` at the top, the {{i:cube}} automatically becomes 50 mm wide everywhere `width` is used — which might be {{i:one}} place in a simple {{i:file}}, but could be dozens of places in a complex {{i:one}}.

This pattern — declare named {{i:parameters}} at the top of the {{i:file}}, use them in {{i:geometry}} below — is the single most important habit this course will teach {{i:you}}.

---

## Step 3 — Build and Verify

### Running Your First Build

With your terminal open inside the `my_first_project/` folder, {{i:run}}:

```bash
3dm build
```

This single {{i:command}} does several things: it finds your `src/main.scad` {{i:file}}, runs {{i:OpenSCAD}} on it to turn the {{i:code}} {{i:into}} {{i:geometry}}, checks the result for basic validity, and saves the {{i:output}} as `build/main.stl`.

If the {{i:build}} succeeds, {{i:you}}'ll see {{i:output}} indicating the {{i:file}} was written. If there's an {{i:error}} in your {{i:code}}, {{i:you}}'ll see an {{i:error}} message with a line number pointing to the problem. Error messages with line numbers are extremely helpful — they tell {{i:you}} exactly where to look to fix the issue.

### Understanding the {{i:Model}} Information

Now {{i:run}}:

```bash
3dm info
```

This analyzes your built model and prints a report. You'll see something like this:

```
File:         build/main.stl
Bounding Box: 30.0 x 20.0 x 10.0 mm
Volume:       6000.0 mm³
Triangles:    12
Description:  A small rectangular box measuring 30mm wide by 20mm deep by 10mm tall.
```

Let's understand {{i:each}} piece.

**Bounding Box:** The bounding box is the smallest rectangular box that perfectly contains your entire model. `30.0 x 20.0 x 10.0 mm` means your model is 30 mm in X, 20 mm in Y, and 10 mm in Z. This number is your primary verification tool — if the bounding box doesn't match what {{i:you}} designed, something went wrong. Check it every single {{i:time}} {{i:you}} {{i:build}}.

**Volume:** This is how much solid {{i:material}} fills the model. A solid box that is 30 × 20 × 10 mm contains exactly 30 × 20 × 10 = 6,000 cubic millimeters of {{i:material}}. If your model were hollow, the volume would be less. Volume directly predicts how much {{i:filament}} {{i:you}}'ll need.

**Triangles:** {{i:STL}} {{i:files}} represent surfaces as a mesh of triangles. More triangles means more geometric detail (and a larger {{i:file}}). A simple box needs only 12 triangles. A sphere with smooth curves needs thousands.

**Description:** The plain-English description comes from an AI analysis of the {{i:geometry}}. It's useful for a quick sanity check, but it's not a replacement for checking the bounding box numbers yourself.

> [!CAUTION]
> If the bounding box shows **0 × 0 × 0**, the {{i:build}} failed and no {{i:geometry}} was produced. Check the {{i:output}} from `3dm build` — {{i:error}} messages will point to the {{i:specific}} line in your {{i:code}}.

### Estimating Material Cost from Volume

Before {{i:printing}} anything — especially something that might take hours — it's professional practice to estimate the cost. Here is the formula:

```
mass (grams) = (volume_mm³ ÷ 1000) × filament_density_g_per_cm³
cost ($)     = mass_g × (spool_price_$ ÷ spool_weight_g)
```

For our 6,000 mm³ box {{i:using}} PLA {{i:filament}}:

```
mass = (6000 ÷ 1000) × 1.24 = 7.44 grams
cost = 7.44 × (20 ÷ 1000)   = $0.15
```

**{{i:Common}} {{i:filament}} densities:** PLA = 1.24 g/cm³, PETG = 1.27 g/cm³, ABS = 1.05 g/cm³, TPU = 1.20 g/cm³.

This calculation won't be exact (slicer settings affect actual usage), but it gives {{i:you}} a reasonable estimate within about 20% of the actual cost.

---

## Concept 4: The FDM Printing Pipeline

### How Your Code Becomes a Physical Object

Understanding how 3D {{i:printing}} actually works changes how {{i:you}} {{i:design}}. The {{i:printing}} process has physical constraints — things it {{i:can}} and {{i:can}}'t do — and every {{i:design}} decision {{i:you}} make either works with those constraints or fights against them. Here's the complete journey from your {{i:code}} to a finished {{i:print}}.

**Stage 1 — {{i:STL}} File**
When {{i:you}} {{i:run}} `3dm build`, {{i:OpenSCAD}} converts your `.scad` {{i:code}} {{i:into}} an {{i:STL}} {{i:file}}. {{i:STL}} stands for **Standard Triangle Language** (sometimes called Standard Tessellation Language). An {{i:STL}} {{i:file}} describes the _surface_ of your 3D model as a mesh of tiny triangles — like wrapping a shape in a piece of paper made of triangles. It contains no color, no {{i:material}} information, no internal structure — just the outer surface {{i:geometry}}.

**Stage 2 — Slicing**
A program called a **slicer** (PrusaSlicer and Cura are popular options, 3dm uses a CLI version of PrusaSlicer internally) reads the {{i:STL}} and slices the model {{i:into}} horizontal layers, like cutting through a loaf of bread to see the shape of {{i:each}} slice. The thickness of {{i:each}} slice is the **{{i:layer}} {{i:height}}** — typically 0.15 to 0.30 mm.

**Stage 3 — G-{{i:code}}**
The slicer converts those {{i:layer}} slices {{i:into}} a {{i:file}} of **G-{{i:code}}** — a language of machine instructions telling the {{i:printer}} exactly what to do. G-{{i:code}} {{i:commands}} look like: "move the {{i:print}} head to X=50, Y=30; heat the nozzle to 215°C; extrude 2.3 mm of {{i:filament}}." The {{i:printer}} reads these instructions literally and executes them in sequence.

**Stage 4 — Printing**
The {{i:printer}} reads the G-{{i:code}} and executes it. The nozzle heats to {{i:between}} 200°C and 240°C (depending on the {{i:material}}), melts a thin strand of plastic {{i:filament}}, and deposits it in the shape of {{i:each}} {{i:layer}} — {{i:one}} {{i:layer}} on top of the last, slowly building up the 3D form.

**Stage 5 — Cooling and Bonding**
As {{i:each}} {{i:layer}} is deposited, it needs to cool and bond to the {{i:layer}} below it. This inter-{{i:layer}} fusion is what holds the {{i:part}} together. However, it also means 3D-printed parts are slightly weaker in the vertical direction than in the horizontal direction — because the bond {{i:between}} layers is never quite as strong as the plastic itself. Good {{i:design}} takes this {{i:into}} account: parts that will experience stress should be oriented so the layers are perpendicular to the direction of that stress.

### The Three Key {{i:Slicer}} Settings to Know

**Layer Height** — how thick {{i:each}} printed {{i:layer}} is, typically 0.15 to 0.30 mm. Thinner layers produce smoother surfaces with more detail, but require more layers to reach the same total {{i:height}}, so prints take longer. For most classroom projects, 0.20 mm is a good starting point.

**Infill Percentage** — the internal structure of a {{i:print}}. A 100% infill {{i:print}} is completely solid. A 0% {{i:print}} is just the outer walls (hollow). In practice, most parts {{i:work}} well at 15–20% infill — the slicer creates a grid-like internal structure that supports the walls without {{i:using}} much {{i:material}}. Structural parts that will bear loads or stress should use 40–50% infill.

**Supports** — if your {{i:design}} has overhanging {{i:geometry}} (parts that extend horizontally without anything underneath them), the slicer {{i:can}} add temporary scaffolding called supports. These get removed after {{i:printing}}. The problem is that supports {{i:can}} leave rough surfaces and add both {{i:print}} {{i:time}} and {{i:material}} cost. Good {{i:design}} minimizes overhangs, which reduces or eliminates the need for supports.

> [!TIP]
> You will almost never get a perfect-fitting {{i:part}} on the {{i:first}} {{i:print}}. Treat the {{i:first}} {{i:print}} of any {{i:new}} feature as a **{{i:test}} {{i:print}}**: a quick, small {{i:print}} specifically designed to tell {{i:you}} what needs to be adjusted. This saves {{i:time}} and {{i:material}} by testing deliberately rather than accidentally {{i:printing}} a large {{i:part}} only to find the hole is 0.3 mm too small.

---

## Step 4 — The Edit–Build–Verify Workflow

### The Fundamental Loop

Professional software development runs on a tight feedback cycle: {{i:write}} some {{i:code}}, {{i:run}} it, check the result, fix any problems, and repeat. The shorter {{i:each}} cycle is, the faster {{i:you}} learn and the fewer problems pile up. Parametric {{hi:3D {{i:design}}}}3D {{i:design}} works exactly the same way:

EDIT → BUILD → VERIFY → repeat

- Edit: Change src/main.scad in any {{i:text}} editor. Save the {{i:file}}.
- Build: {{hi:3dm {{i:build}}}}3dm {{i:build}} → compiles your .scad {{i:code}} {{i:into}} {{i:build}}/main.stl
- Verify: {{hi:3dm info}}3dm info → confirms bounding box and volume match your {{i:design}} intent
  - (optional) → open {{i:build}}/main.stl in your slicer for a visual check

````

> [!TIP]
> **Verify after every meaningful change**, not just when you think you're done. Frequent verification means any problem is always close to the last thing you changed. Verifying only at the end of a long session means sifting through dozens of changes to find one small mistake.

---

## Step 5 — Building Parametric Variants

### Overriding Parameters at Build Time

Once your design uses variables for all its dimensions, you can generate different versions without editing the source file at all. The `-D` flag tells OpenSCAD to override a variable at build time:

```bash
openscad -D "width=50" -o {{i:build}}/main_wide.stl src/main.scad
````

This builds a version with `width=50` instead of the `width=30` in the file — without changing the file. You can combine multiple overrides:

```bash
openscad -D "width=50" -D "{{i:height}}=15" -o {{i:build}}/main_large.stl src/main.scad
```

### Building Multiple Variants Automatically

You can use a shell loop to generate a whole family of variants automatically:

**Linux / macOS (bash):**

> [!TIP]
> Use shell loops to generate multiple parametric variants automatically. Each run creates a separate STL file — a fast way to produce a tolerance test matrix without manually editing the source file.

```bash
# Build four width variants — generates four separate {{i:STL}} {{i:files}}
for w in 20 30 40 50; do
  openscad -D "width=$w" -o "{{i:build}}/main_w${w}.stl" src/main.scad
  echo "Built: width=${w}mm → {{i:build}}/main_w${w}.stl"
done
```

**Windows (PowerShell):**

```powershell
$widths = @(20, 30, 40, 50)
foreach ($w in $widths) {
  openscad -D "width=$w" -o "{{i:build}}\main_w$w.stl" "src\main.scad"
  Write-Host "Built: width=${w}mm → {{i:build}}\main_w$w.stl"
}
```

**Windows (CMD):**

```cmd
FOR %%W IN (20 30 40 50) DO (
  openscad -D "width=%%W" -o {{i:build}}\main_w%%W.stl src\main.scad
  echo Built width=%%W
)
```

This is one of the most powerful things about parametric design: one source file, many specific outputs. The file represents the concept; the parameters turn it into instances.

---

## Concept 5: Code Documentation Standards

### Why Documented Code Is Part of Certification

When you return to a file weeks later, you will not remember what every variable was for. When a classmate, instructor, or future collaborator reads your code, they need to understand your design intent without asking you. When you submit work for this certification, well-documented code demonstrates professional-level practice — not just that you got the geometry right, but that you thought about it clearly.

OpenSCAD documentation has three levels:

**File Header Comments** — a block comment at the very top of the file explaining: what this part is, what it's used for, print recommendations (layer height, infill, supports needed?), and which parameters are meant to be customized. This is the first thing anyone reads. There is no standard for this, but I like to surround these in multiline commend indicators `/* multiline comments here */`

**Parameter Line Comments** — every variable declaration should have a comment stating the unit and a reasonable range. This:

```openscad
wall = 2;   // mm — wall thickness (1.5–3.0 for a 0.4mm nozzle)
```

is dramatically more useful than just `wall = 2;`.

**Module Comments** — every module (a named, reusable chunk of geometry — covered in depth in Lesson 3) should have a one-line description of what shape it creates.

### A Well-Documented File Template

```openscad
// ==============================================================
// Parametric Box Lid
// ==============================================================
// Purpose:     Snap-fit lid for the storage box (box.scad)
// Print {{i:time}}:  ~8 minutes at 0.20 mm layers
// Material:    ~6 g PLA
//
// PARAMETERS TO CUSTOMIZE:
//   box_width:   width of the matching box (default: 60 mm)
//   box_depth:   depth of the matching box (default: 40 mm)
//   lip_height:  how deep the lid lip fits {{i:into}} the box (default: 3 mm)
//
// PRINT RECOMMENDATIONS:
//   Layer {{i:height}}: 0.20 mm
//   Infill:       15%
//   Supports:     not needed
//   Orientation:  {{i:print}} flat, face-down
// ==============================================================

box_width  = 60;   // mm — must match box.scad box_width
box_depth  = 40;   // mm — must match box.scad box_depth
lip_height = 3;    // mm — depth the lid lip extends downward (2–5 mm)
wall       = 2;    // mm — lid wall thickness (1.5–3.0 mm)

// (Geometry below this line — uses the {{i:parameters}} above)
```

This header comment takes about two minutes to write and saves many minutes of confusion later. Make it a habit starting with your very first project.

---

## Summary Table

| Concept           | Key Point                                                                   |
| ----------------- | --------------------------------------------------------------------------- |
| Parametric design | Change one number, model updates everywhere it's used                       |
| OpenSCAD          | Code-based 3D geometry engine; you describe shapes with text                |
| 3dMake            | Project manager layer; `3dm build` and `3dm info` are your main commands    |
| Units             | Always millimeters — no exceptions                                          |
| Origin (0,0,0)    | Front-left corner of build space, at bed level                              |
| X axis            | Points right                                                                |
| Y axis            | Points away from you (back)                                                 |
| Z axis            | Points straight up                                                          |
| `center=false`    | Default — one corner of the object sits at the specified position           |
| `center=true`     | Object straddles the specified position (center is at that point)           |
| `3dm build`       | Compiles `src/main.scad` → `build/main.stl`                                 |
| `3dm info`        | Reports bounding box, volume, triangle count, AI description                |
| Bounding box      | Smallest rectangle containing the whole model — your #1 verification metric |
| STL file          | Triangle-mesh representation of surface geometry                            |
| FDM pipeline      | STL → Slicer → G-code → Print → Cool                                        |
| Layer height      | Thickness of each printed layer; 0.20 mm is a good default                  |
| Infill            | Internal density; 15–20% for typical parts, 40–50% for structural           |
| Supports          | Temporary scaffolding for overhangs; minimize them in your design           |

---

## Extension Resources

### Lesson 1 Asset Folder

- [Your First Print guide](3dMake_Foundation/Templates/Student/your_first_print_student_template.md)
- [Basic project scaffold template](assets/3dMake_Foundation/Lessons_3dMake_1/basic_project_scaffold.scad)

### Learning Series Sample Projects (`3dmake_learning_series/`)

- `01_cube_keycap` (Beginner) — Text embossing basics
- `02_parametric_phone_stand` (Intermediate) — Transforms and Minkowski fillets
- `03_stackable_bins` (Advanced) — Tolerance and assemblies

### Reference Materials (`Reference_Materials/`)

- `3dmake-setup-guide.md` — Complete setup walkthrough
- `openscad-cheat-sheet.md` — Keyboard shortcuts and common functions
- `filament-comparison-table.md` — Material properties reference
- `master-rubric.md` — Assessment criteria

---

## Quiz — Lesson 1 (15 questions)

1. What command initializes a 3dMake project?
2. What folder holds generated STL files?
3. How do you run 3dMake's automatic rebuild mode?
4. Why is it useful to run `3dm build` frequently during development rather than only at the end?
5. Give one reason to prefer an external text editor over the built-in OpenSCAD editor for this workflow.
6. True or False: 3dMake requires a graphical user interface to use effectively.
7. Explain what the `3dmake.toml` file does in your project.
8. Describe what the `src/` and `build/` project folders are used for and which one you edit directly.
9. In your own words, explain the difference between a visual 3D editor (like Tinkercad) and a code-based parametric design tool (like OpenSCAD). What is the main advantage of the parametric approach?
10. What validation step should you always perform after running `3dm build` before sending a file to print?
11. If the bounding box reported by `3dm info` shows `0 × 0 × 0 mm`, what does that tell you, and what should you do next?
12. Explain what `center=false` and `center=true` mean for a `cube()`. For each, where does the object appear relative to the position you specify?
13. What does FDM stand for, and what are the five stages of the FDM pipeline from STL file to cooled physical part?
14. A box has dimensions 50 × 40 × 25 mm and you're printing it in PLA (density 1.24 g/cm³) at 100% infill. Using a $22 / 1 kg spool, what is the estimated material cost? Show your calculation.
15. You run `3dm build` and receive the error "No such file or directory: src/main.scad". List two likely causes and the fix for each.

---

## Extension Problems (15)

1. Add a README entry explaining your top-level parameters and expected units.
2. Create a parameter variant by changing `width` by 20% and build both variants; compare dimensions using `3dm info` to confirm the change.
3. Script a command sequence that automates the entire new-project setup: create folder, create `src/main.scad`, and run `3dm build` — in a single script file.
4. Intentionally introduce a syntax error in your `.scad` file (remove a semicolon), run `3dm build`, and document what the error message says and which line it points to. Then fix it.
5. Prepare a short instructor sign-off checklist describing the safety checks you should complete before sending a file to print.
6. Build a variant testing suite: create 5 different combinations of `width`, `depth`, and `height`, build all five, and record the bounding box and volume for each.
7. Create a 3dMake project template with best-practice structure, documentation header, and parameter comments. Write a README explaining how to use it.
8. Write a short accessibility guide explaining how a student using a screen reader could use `3dm info` output to understand a model's geometry without a visual preview.
9. Design a simple parametric part library (three or more related parts) in a single project. Document all parameters with units and example values.
10. Write a comprehensive troubleshooting guide for common `3dm build` errors, with the cause and fix for each.
11. Add a `.gitignore` file to your project, commit it using Git, make a parameter change and create a second commit. In 2–3 sentences, explain why version control is valuable for parametric design.
12. Edit the global configuration file using `3dm edit-global-config` to change the default editor. Document the setting name and how you verified the change took effect.
13. Create a project with three `.scad` source files and build each using `3dm build -m <n>`. Record the output STL filenames.
14. Research the FDM layer height trade-off: slice the same model at 0.15 mm, 0.20 mm, and 0.30 mm. Record the estimated print time and filament use for each. What is the trade-off?
15. Write a one-page "new student onboarding guide" for 3dMake covering installation, project creation, first build, and first print. Write it as if your audience is a classmate who has never used the command line.

---

## References and Helpful Resources

- 3DMake GitHub Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)
- OpenSCAD Manual — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)
- OpenSCAD Parametric Design — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables)
- OpenSCAD Review — CadHub — [https://learn.cadhub.xyz/blog/openscad-review/](https://learn.cadhub.xyz/blog/openscad-review/)
- PrusaSlicer Validation Tools — [https://docs.prusa3d.com/en/guide/39012-validation-tools/](https://docs.prusa3d.com/en/guide/39012-validation-tools/)
- 3dmake e2e_test.py — [https://github.com/tdeck/3dmake/blob/main/e2e_test.py](https://github.com/tdeck/3dmake/blob/main/e2e_test.py)
- PrusaSlicer Documentation — [https://docs.prusa3d.com/en/](https://docs.prusa3d.com/en/)
- OpenSCAD Non-Manifold FAQ — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ#Why_is_my_model_not_manifold.3F](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ#Why_is_my_model_not_manifold.3F)

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub
- CodeSolutions Repository — [https://github.com/ProgrammingWithOpenSCAD/CodeSolutions](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions)
- OpenSCAD Quick Reference — [https://programmingwithopenscad.github.io/quick-reference.html](https://programmingwithopenscad.github.io/quick-reference.html)
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 1 are included below. You do not need to open any additional files._

---

## Appendix A: Your First Print — Extension Project

**Estimated time:** 2–4 hours (including setup and print monitoring)

### Overview

This extension project applies the workflow and concepts from Lesson 1 to a real physical print. Rather than designing from scratch, you'll select a simple ready-made model, evaluate whether it's appropriate for a beginner print, configure slicer settings, run the print safely, and document what happened. The goal is to complete one full cycle of the pipeline you just learned — from file to printed object — and to practice the observation and documentation habits you'll use for every print in this course.

### Learning Objectives

By completing this project, you will:

- Select a simple ready-made model and evaluate its printability for a classroom printer
- Configure slicer settings for a short-duration print and prepare the printer safely
- Monitor a print in progress and recognize early warning signs of failure
- Document print parameters and reflect on the physical outcome

### Materials

- Computer with slicer and access to an online model repository
- Classroom-approved printer, filament spool

### Tasks

1. **Choose a simple model** (under 2 hours estimated print time) from Thingiverse or Printables. Download the STL.
2. **Inspect the model** before loading it in the slicer. Look at it from all angles. Note any overhangs, thin features, or very small details. Write two short reasons why this model is appropriate for a first print — specifically, why it is not risky.
3. **Load the model in your slicer**, select the classroom profile, and adjust settings only if necessary. Record the final print time estimate, layer height, infill %, and filament weight estimate.
4. **Perform safety checks** using the checklist in Lesson 5 Appendix A (or the condensed checklist below). Start the print and **remain present and watching for the first 15 minutes**. Note what you observe about first-layer adhesion and extrusion quality.
5. **After the print cools**, measure three critical dimensions using calipers (or by comparing against the model's stated dimensions). Record the measured values and any deviations.

### Condensed Pre-Print Safety Checklist

- [ ] Bed clean and level
- [ ] Filament loaded and extruding cleanly (run a short purge)
- [ ] Build area clear of obstructions
- [ ] Print area free of flammable materials
- [ ] You will remain present for the first 15 minutes

### Probing Questions

1. Why did you select this model? What specific risks did you anticipate, and how does this model avoid or minimize them?
2. Which slicer setting most affects print time for this model, and why?
3. If a thin feature failed during printing, what is the minimum change you would make to give it a better chance on the next attempt?

### Starter Code

If you want to build a simple printable object from scratch rather than downloading one, use this scaffold as your starting point:

```openscad
// Basic Project Scaffold
// ============================================
// PROJECT CONFIGURATION
// ============================================
// Set your project dimensions here. All other {{i:geometry}} derives from these.

object_w  = 50;   // mm — overall width
object_d  = 50;   // mm — overall depth
object_h  = 20;   // mm — overall {{i:height}}
wall      = 2.0;  // mm — wall thickness (2–3mm recommended for FDM)
$fn       = 30;   // curve resolution (higher = smoother, slower to render)

// ============================================
// MAIN DESIGN
// ============================================

{{i:module}} base_shape() {
  // Replace this {{i:cube}} with your own {{i:geometry}}
  {{i:cube}}([object_w, object_d, object_h]);
}

{{i:module}} hollow_version() {
  // Creates a hollow version by removing an inner volume
  {{i:difference}}() {
    base_shape();
    {{i:translate}}([wall, wall, wall])
      {{i:cube}}([object_w - 2*wall,
            object_d - 2*wall,
            object_h]);  // open top — no overhang needed
  }
}

// Render your {{i:design}}:
hollow_version();
```

### Deliverables

- Short report: model selected, key slicer settings, measured dimensions and deviations, answers to probing questions
- Photos of the final print (at least two angles)
- Completed student documentation template (Appendix B)

---

## Appendix B: Your First Print — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Date:** \_\_\_\_\_\_\_\_\_\_

**Description:** Select a simple 3D model, configure slicer settings, and complete your first independent print job.

---

### Model Selection

- Model name and source (Thingiverse, Printables, etc.):
- Link or file name:
- Why did you choose this model?
- Why is this model appropriate for a first print (two specific reasons)?

---

### Printability Assessment

- Estimated print time (from slicer): \_\_\_\_ hours \_\_\_\_ min
- Estimated filament: \_\_\_\_ g
- Layer height selected: \_\_\_\_ mm
- Infill %: \_\_\_\_
- Supports required? Yes / No — if yes, describe where:
- Any overhangs or thin features that concerned you?

---

### Printer Setup Log

| Parameter          | Value | Units |
| ------------------ | ----- | ----- |
| Printer model      |       |       |
| Nozzle diameter    |       | mm    |
| Nozzle temperature |       | °C    |
| Bed temperature    |       | °C    |
| Layer height       |       | mm    |
| Infill %           |       |       |
| Support settings   |       |       |
| Print speed        |       | mm/s  |

---

### Safety Checks

- [ ] Bed clean and level
- [ ] Filament loaded and purged cleanly
- [ ] Nozzle at correct first-layer height
- [ ] Print area clear of obstructions
- [ ] I remained present and watching for the first 15 minutes

---

### Print Monitoring Notes

- What did you observe in the first layer?
- Was first-layer adhesion good, marginal, or poor?
- Any extrusion issues observed (clicking, skipping, thin lines)?
- Print completed successfully? Yes / No / Partially
- If partially or no — what happened and at what layer?

---

### Dimensional Verification (After Cooling)

Measure three features on the printed part and compare to the model's stated dimensions:

| Feature | Model Spec (mm) | Measured (mm) | Deviation (mm) | Notes |
| ------- | :-------------: | :-----------: | :------------: | ----- |
|         |                 |               |                |       |
|         |                 |               |                |       |
|         |                 |               |                |       |

---

### Reflections

**What went well:**

**What didn't go well:**

**What would you do differently next time:**

**If you printed this again, what settings would you change and why?**

---

### Attachments Checklist

- [ ] STL file or link to source model
- [ ] Slicer settings (screenshot or exported settings file)
- [ ] Photo of final print — at least two angles
- [ ] Completed measurement table above
- [ ] Answers to probing questions

---

### Teacher Feedback

| Category                                                                      | Score (0–3) | Notes |
| ----------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — appropriate model selected; print completed              |             |       |
| Setup & Documentation — printer setup log complete; safety checks done        |             |       |
| Reflection — measurements recorded; reflection is specific and shows learning |             |       |
| **Total (0–9)**                                                               |             |       |

**Resubmission:** If resubmitting, attach a paragraph explaining what was changed and why. The higher of the resubmission and the original will be kept.

---

## Appendix C: Your First Print — Instructor Reference

### Project Context

This is the first physical print extension project in the course. Its primary purpose is to establish safe printer operation habits and complete documentation practices — not to produce a complex or impressive object. A student who selects an appropriate model, monitors the print safely, and documents the outcome accurately has succeeded, regardless of whether the print is visually impressive.

### Key Learning Points to Reinforce

**Model selection discipline.** The most common mistake at this stage is selecting a model that is too complex, too large, or has features that will fail (overhangs without supports, very thin walls, very fine detail). Push students to justify their selection in terms of printability, not just aesthetics.

> [!IMPORTANT]
> **The first 15 minutes rule:** students must stay and watch the printer for the first 15 minutes of every print. A print that lifts off the bed in the first few layers becomes a tangled failure — you must be present to catch it early.

**Documentation enables iteration.** A student who records their slicer settings has something to start from on the next print. A student who doesn't has to guess. Reinforce this constantly.

### Constraints (Enforce These)

- Model must be under 2 hours estimated print time
- Minimal or no support requirements recommended
- Student must record slicer settings, not just print the file
- Dimensional measurements must be taken after the part has fully cooled

### Assessment Notes

**Strong submissions** show: clear model selection reasoning (not just "it looked cool"), a complete printer setup log, specific first-layer observations, measurements that reflect actual caliper readings (not round numbers), and a reflection that identifies something specific to do differently.

**Common weak areas:** Vague reflections ("it went well"), missing measurements, and skipped safety checks. Address all three in feedback.

---

## Appendix D: 3dMake Setup and Workflow Guide

### Creating Your First Project

```bash
# Create a {{i:new}} folder for your project and enter it
mkdir my_project
cd my_project

# Initialize a 3dMake project
3dm setup
```

`3dm setup` creates this project structure:

```
my_project/
├── src/
│   └── main.scad      ← Your {{i:design}} {{i:code}} goes here
├── {{i:build}}/             ← Generated {{i:STL}} {{i:files}} appear here (auto-created)
└── 3dmake.toml        ← Project configuration
```

**The `src/` folder** is where you write your OpenSCAD code. You should never need to edit files in `build/` directly — that folder is managed by 3dMake.

**`3dmake.toml`** stores your project settings: the slicer path, filament density, cost-per-gram, and other project-level configuration. Open it with any text editor to see the available settings.

---

### The Core Workflow

Every design session follows this cycle:

edit src/main.scad → 3dm build → 3dm info → review / repeat

**`3dm build`** — compiles your `.scad` source into an STL file in the `build/` folder.

```bash
3dm {{i:build}}              # standard {{i:build}}
```

**`3dm info`** — reports on the most recently built STL: bounding box, volume, triangle count, and an AI-generated description.

```bash
3dm info
3dm info --view front
3dm info --view top,front,isometric
```

**`3dm preview`** — renders a 2d image of your model to `build/main-3sil.svg`.

**`3dm orient`** — recommends a print orientation based on your model's geometry.

**`3dm slice`** — calls your configured slicer on the current STL.

This returns information such as the following (note the recommendation I add supports as this file will not print correctly as designed without supports):

```pwsh
Using {{i:3DMake}} project in parent directory...

Slicing...
    10 => Processing triangulated mesh
    20 => Generating perimeters
    30 => Preparing infill
    45 => Making infill
    65 => Searching {{i:support}} spots
    69 => Alert if supports needed
    {{i:print}} warning: Detected {{i:print}} stability issues:

    main.stl
    Floating object {{i:part}}, Floating bridge anchors, Loose extrusions, Long bridging extrusions

    Consider enabling supports.
    89 => Calculating overhanging perimeters
    88 => Generating skirt and brim
    90 => Exporting G-{{i:code}} to C:\Users\Ryan Hunsaker\{{i:test}}\{{i:build}}\{{i:test}}-main.gcode
    [2026-04-27 10:17:03.967105] [0x00007ffc] [{{i:error}}]   GCodeProcessor encountered an invalid toolchange (T1000).
    [2026-04-27 10:17:03.967105] [0x00007ffc] [{{i:error}}]   GCodeProcessor encountered an invalid toolchange (T1000).
    [2026-04-27 10:17:04.014849] [0x00007ffc] [{{i:error}}]   GCodeProcessor encountered an invalid toolchange, maybe from a custom gcode (T255).
    Slicing result exported to C:\Users\Ryan Hunsaker\{{i:test}}\{{i:build}}\{{i:test}}-main.gcode
    {{i:print}} warning: Detected {{i:print}} stability issues:

    main.stl
    Floating object {{i:part}}, Floating bridge anchors, Loose extrusions, Long bridging extrusions

    Consider enabling supports.

    Hotend temperature: 220 Celsius
    Estimated {{i:print}} {{i:time}}: 14 minutes 59 seconds
    Filament used: about 1.54 meters (4.66 grams)
    Extrusion stats (longest {{i:time}} {{i:first}}):
        Internal infill               7 minutes 28 seconds (397 mm)
        Solid infill                  5 minutes 39 seconds (314 mm)
        Perimeter                     4 minutes 37 seconds (249 mm)
        External perimeter            4 minutes 29 seconds (246 mm)
        Bridge infill                 1 minute 22 seconds (108 mm)
        Top solid infill              1 minute 1 second (56 mm)
        Custom                        11 seconds (163 mm)
        Overhang perimeter            6 seconds (5 mm)
Done.
```

---

### Command Reference

| Command                  | Purpose                              | Notes                                    |
| ------------------------ | ------------------------------------ | ---------------------------------------- |
| `3dm setup`              | Initialize a new project             | Run once per project                     |
| `3dm build`              | Compile source → STL                 | Run after every code change              |
| `3dm info`               | Report dimensions and AI description | Always run before sending to print       |
| `3dm preview`            | Render model image                   | Use for quick visual check               |
| `3dm orient`             | AI print orientation suggestion      | Use as a starting point, verify yourself |
| `3dm slice`              | Run slicer on current build          | Requires slicer path in `3dmake.toml`    |
| `3dm edit-global-config` | Edit the global settings file        | For changing default editor, slicer path |

---

### Troubleshooting

**`3dm: command not found` after installation**

You either haven't run `3dm setup`, or you're in the wrong folder. Run `pwd` to confirm your current location, and `ls` (or `dir` on Windows) to see if `src/` exists.

**`OpenSCAD: command not found` during build**

OpenSCAD isn't in your PATH. On Windows, find where OpenSCAD is installed (usually `C:\Program Files\OpenSCAD\`) and add it to your PATH in System Settings → Environment Variables.

**Build succeeds but `3dm info` shows `0 × 0 × 0 mm`**

Your OpenSCAD code compiled without errors but produced no geometry. Check that your shapes are actually being rendered (not commented out), and that no `difference()` has subtracted more than it started with.

**`WARNING: Normalized tree is empty`**

Same as above from OpenSCAD's perspective. The most common causes: a shape with zero volume, all geometry inside a `difference()` was subtracted away, or a module was defined but never called.

---

## Appendix E: Navigating This Curriculum (mdBook Guide)

_This curriculum is published as a web book using mdBook. This guide explains how to find what you need, navigate between chapters, and use the book with a screen reader._

### Basic Navigation

**Sidebar table of contents** — the left side of the page lists all chapters by unit and lesson. Click or tap any title to jump to it. On a small screen, the sidebar may be hidden — look for a hamburger menu icon (three horizontal lines) to show it.

**Arrow navigation** — at the bottom of every page are Previous and Next links. You can also use keyboard arrow keys:

- `Left Arrow` — go to the previous chapter
- `Right Arrow` — go to the next chapter

**Search** — press `S` to open the search box. Type your search term; results appear as a dropdown. Click any result to jump to that chapter. Press `Escape` to close search.

| Key           | Action                               |
| ------------- | ------------------------------------ |
| `S`           | Focus the search box                 |
| `Escape`      | Close search results                 |
| `Left Arrow`  | Previous chapter                     |
| `Right Arrow` | Next chapter                         |
| `T`           | Toggle the table of contents sidebar |

---

### Screen Reader Navigation

#### With NVDA (Chrome, Firefox, or Edge recommended)

- `H` — jump between headings; the fastest way to skim a long lesson
- `D` — move between landmark regions (use to reach the sidebar)
- `NVDA + F7` — open the Elements List; select "Landmarks" to navigate to the sidebar directly
- Set punctuation level to Most or All before reading code blocks: `NVDA + P` to cycle
- `Ctrl + F` — browser Find, works alongside mdBook search

#### With JAWS (Chrome or Edge recommended)

- `H` — jump between headings
- `R` — move between landmark regions to reach the sidebar
- `JAWS Key + F6` — list all headings on the current page
- Set punctuation to All before reading code: `JAWS Key + Shift + 2`
- `JAWS Key + F5` — links list
- `Ctrl + F` — browser find

#### With VoiceOver (Mac / iOS)

- `VO + U` — open the rotor; select Headings to navigate by heading
- `H` (Quick Nav on) — move between headings
- iOS: use the rotor (`two-finger rotate`) to set navigation mode to Headings

---

### Finding What You Need

**If you know the unit or project:** open the table of contents and look for the unit name. Structure: Unit 0 (Foundation lessons) → Unit 1 (Guided projects) → Unit 2 (Intermediate skills) → Unit 3 (Open-ended projects) → Reference Materials.

**If you're looking for a specific term or command:** use Search (`S`). Search for an OpenSCAD command (`difference`, `translate`), a vocabulary word (`infill`, `tolerance`), or a project name.

**While working:** keep a second browser tab open to the Reference Materials section. Useful pages to bookmark: OpenSCAD Cheat Sheet, Slicing Settings Quick Reference, Filament Comparison Table, Screen Reader Coding Tips.

---

## Appendix F: Screen Reader Coding Tips (NVDA and JAWS)

### General Principles

**Increase Level of Reported Punctuation** All OpenSCAD syntax — semicolons, brackets, parentheses, commas — is meaningful. If your screen reader skips punctuation, you will miss syntax errors. Set to Most or All before coding.

**Navigate by line.** Arrow up and down through code one line at a time. Use `Ctrl + Left/Right` to move word by word within a line.

**Use go-to-line.** OpenSCAD errors always give a line number. In VSCode: `Ctrl + G`, type the number, press Enter.

**Comment as you go.** A short comment after a block of code lets you navigate back to it by searching with `Ctrl + F`.

---

### NVDA Quick Reference

**Setting punctuation level:** `NVDA + P` cycles through None → Some → Most → All. For code: Most or All.

| Action             | Keys                              |
| ------------------ | --------------------------------- |
| Read current line  | `NVDA + Up Arrow`                 |
| Spell current line | `NVDA + Up Arrow` (twice quickly) |
| Read from cursor   | `NVDA + Down Arrow`               |
| Read current word  | `NVDA + Numpad 5`                 |
| Spell current word | `NVDA + Numpad 5` (twice quickly) |
| Stop reading       | `Ctrl`                            |

**Navigation in VSCode with NVDA:**

| Action              | Keys                             |
| ------------------- | -------------------------------- |
| Move by character   | `Left / Right Arrow`             |
| Move by word        | `Ctrl + Left / Right Arrow`      |
| Move by line        | `Up / Down Arrow`                |
| Start / end of line | `Home / End`                     |
| Go to line number   | `Ctrl + G`, type number, `Enter` |
| Find text           | `Ctrl + F`                       |
| Toggle line comment | `Ctrl + /`                       |

If NVDA stops reading the content of the editor: press `NVDA + Space` to toggle between Browse and Application mode. For code editors, you want Application mode. Sometimes F6 then Shift+F6 quickly will also fix this issue.

---

### JAWS Quick Reference

**Setting punctuation level:** `JAWS Key + Shift + 2` cycles through levels. For code: All.

| Action               | Keys                                  |
| -------------------- | ------------------------------------- |
| Read current line    | `JAWS Key + Up Arrow`                 |
| Spell current line   | `JAWS Key + Up Arrow` (twice quickly) |
| Read from cursor     | `JAWS Key + A`                        |
| Read current word    | `JAWS Key + Numpad 5`                 |
| Stop reading         | `Ctrl`                                |
| Increase speech rate | `Alt + Ctrl + Page Up`                |
| Decrease speech rate | `Alt + Ctrl + Page Down`              |

**Navigation in VSCode with JAWS:**

| Action            | Keys                                        |
| ----------------- | ------------------------------------------- |
| Move by character | `Left Arrow` or `Right Arrow`               |
| Move by word      | `Ctrl + Left Arrow` or `Ctrl + Right Arrow` |
| Move by line      | `Up Arrow` or `Down Arrow`                  |
| Go to line number | `Ctrl + G`                                  |
| Find text         | `Ctrl + F`                                  |
| Toggle comment    | `Ctrl + /`                                  |

If JAWS stops reading the editor: press `JAWS Key + Z` to toggle Virtual mode off. You want Virtual mode OFF in VSCode.

---

### OpenSCAD-Specific Tips

**Reading errors.** OpenSCAD errors always include a line number. Use `Ctrl + G` in VSCode to jump to it. Common errors:

| Error message                       | What it usually means                                         |
| ----------------------------------- | ------------------------------------------------------------- |
| `Expected ';' ...`                  | Missing semicolon at end of a statement                       |
| `Expected ',' or ')' ...`           | Missing comma between parameters, or unclosed parenthesis     |
| `Identifier ... is undefined`       | Variable name typed wrong, or used before declaration         |
| `WARNING: Normalized tree is empty` | Shape has no geometry — subtracted more than you started with |

**Bracket matching.** Every `(` needs a `)`, every `[` needs a `]`, every `{` needs a `}`. In VSCode, cursor on a bracket highlights its match. Navigate to the matching bracket with `Ctrl + Shift + \`.

**Commenting out code.** To test without deleting: `//` before a line, or `Ctrl + /` in VSCode to toggle comment on selected lines.

---

### Caliper and OpenSCAD Workflow Tip

When measuring and entering into OpenSCAD: say the measurement aloud before typing, then read it back after typing to confirm.

1. Measure → say "seventy point three millimeters"
2. Type `70.3` in OpenSCAD
3. Read back: "seven zero point three" — confirm match

---

## Appendix G: VSCode Setup Guide for NVDA and JAWS

### Why VSCode Instead of the OpenSCAD Editor

The built-in OpenSCAD editor has inconsistent behavior with screen readers — focus can jump unexpectedly and the editor sometimes stops being read after certain actions. VSCode is a mainstream code editor with strong, well-tested accessibility support for both NVDA and JAWS.

You write code in VSCode. OpenSCAD runs in the background to render the preview. You never need to interact with the OpenSCAD editor itself.

---

### Install Required Software

**Install VSCode** — download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
During installation: check "Add to PATH" and "Register Code as an editor for supported file types."

**Install OpenSCAD** — download from [https://openscad.org/downloads.html](https://openscad.org/downloads.html)
Use the installer version (not portable). After installing, verify it's in your PATH:

```powershell
openscad --version
```

**Optional: OpenSCAD VSCode Extension** — press `Ctrl + Shift + X`, search for "OpenSCAD Language Support," install it. Adds syntax highlighting and keyword completion for `.scad` files.

---

### Configure the Task Runner

The task runner lets you open your `.scad` file in OpenSCAD or export an STL with a single keypress.

**Create or open your workspace folder** in VSCode:

```powershell
cd ~/Documents/OpenSCAD_Projects
{{i:code}} .
```

**Create tasks.json:**

1. Press `Ctrl + Shift + P` to open the Command Palette
2. Type `Tasks: Configure Task` and press Enter
3. Select "Create tasks.json file from template" → "Others"

Replace the file's entire contents with:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "{{i:Preview}} in {{i:OpenSCAD}}",
      "type": "{{i:shell}}",
      "{{i:command}}": "openscad",
      "args": ["${{{i:file}}}"],
      "group": { "kind": "{{i:build}}", "isDefault": true },
      "presentation": { "reveal": "silent", "panel": "shared" },
      "problemMatcher": []
    },
    {
      "label": "Export {{i:STL}}",
      "type": "{{i:shell}}",
      "{{i:command}}": "openscad",
      "args": [
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}.stl",
        "${{{i:file}}}"
      ],
      "group": "{{i:build}}",
      "presentation": { "reveal": "always", "panel": "shared" },
      "problemMatcher": []
    }
  ]
}
```

Save with `Ctrl + S`.

**Run the preview:** with a `.scad` file open, press `Ctrl + Shift + B`. OpenSCAD opens and displays your model. `Alt + Tab` to return to VSCode.

**Export STL:** `Ctrl + Shift + P` → "Tasks: Run Task" → "Export STL."

---

### NVDA Settings for VSCode

- Symbol level: Most (`NVDA + N` → Preferences → Settings → Speech → Symbol level: Most)
- For code reading: `NVDA + P` to cycle to Most or All on the fly

### JAWS Settings for VSCode

- Toggle Virtual mode OFF: `JAWS Key + Z` (you want Virtual mode off in VSCode)
- Punctuation level: All (`JAWS Key + Shift + 2`)

---

### Workflow Summary

1. Open VSCode workspace code ~/Documents/OpenSCAD_Projects
2. Open or create a .scad file Ctrl + P → type filename
3. Write OpenSCAD code
4. Preview in OpenSCAD Ctrl + Shift + B
5. Export STL Ctrl + Shift + P → Tasks: Run Task → Export STL
6. Open slicer, import STL, slice, export G-code
7. Print

---

### Troubleshooting

| Problem                          | Solution                                                                                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| OpenSCAD doesn't open            | Confirm `openscad --version` works in PowerShell                                                                                   |
| VSCode not read by screen reader | JAWS: press `JAWS Key + Z` to exit Virtual mode; NVDA: `NVDA Key + Spacebar` Either: click inside the editor once to confirm focus |
| Can't find error in code         | Error includes a line number — use `Ctrl + G` to jump to it                                                                        |
| `.scad` has an error             | `Alt + Tab` to OpenSCAD to read the console; arrow through the error message                                                       |

---

# Lesson 2 — Geometric Primitives and Constructive Solid Geometry

**Estimated Time:** 90–120 minutes  
**Course:** 3D Printing for the Blind

---

## Before You Start

In Lesson 1, you made a box by calling `cube()`. You understood the coordinate system, installed the tools, and ran the complete build-verify workflow. That's a real foundation — but a single rectangular box isn't going to take you very far as a designer.

This lesson introduces the complete vocabulary of 3D shapes OpenSCAD knows how to build, and — more importantly — the three operations that let you combine those shapes into virtually anything you can imagine. Those three operations are **union** (merge), **difference** (subtract), and **intersection** (keep only what overlaps). Together with the primitive shapes, they form a system called **Constructive Solid Geometry**, and nearly every 3D model ever built in OpenSCAD is made from these tools.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Use all core OpenSCAD 3D primitives: `cube`, `sphere`, `cylinder`, `polygon`
- Combine shapes with `union()`, `difference()`, and `intersection()`
- Apply the +/- 0.001 mm offset rule and understand exactly why it exists
- Create 2D profiles with `polygon()` and extrude them into 3D geometry
- Use `rotate_extrude()` and `linear_extrude()` to create complex rotational shapes
- Use the four debugging modifier characters (`#`, `%`, `!`, `*`)
- Use `hull()` to create convex envelope shapes

---

## Concept 1: What Are Primitives?

### The Raw Materials of 3D Design

A **primitive** is the simplest, most basic shape a system can produce from scratch, with no prior shape as input. Everything more complex gets built by combining and modifying these primitives. Think of them the way a sculptor thinks about blocks of material: the primitive is the raw material, and the operations you'll learn in this lesson are the tools you use to shape it.

OpenSCAD has four main 3D primitives. Every complex shape you'll ever design in this course is built from some combination of these four, using the CSG operations to combine them.

---

## Step 1 — The Four Core 3D Primitives

### `cube([width, depth, height])` — The Rectangular Box

Despite the name `cube`, this primitive creates any rectangular box — it doesn't have to be a perfect cube. The three numbers you provide are the dimensions along the X, Y, and Z axes respectively. `cube([30, 20, 10])` creates a box that is 30 mm wide (X), 20 mm deep (Y), and 10 mm tall (Z).

The `center=true` option (which you learned about in Lesson 1) centers the box on the origin rather than placing one corner there. Remember: `center=false` is the default, and it's usually what you want for parts that should sit on the build plate. It also makes math a lot easier if trying to connect multiple cubes together or dubtract one from another.

### `sphere(r=radius)` — The Round Ball

`sphere(r=10)` creates a sphere with a 10 mm radius (so 20 mm diameter). The sphere is centered on the origin by default — it can't be un-centered the way a cube can.

The key parameter to know here is **`$fn`** — short for "facet number." OpenSCAD doesn't have a mathematically perfect curved surface; it approximates curves by using lots of flat faces. A sphere with `$fn=8` looks like a faceted gem. A sphere with `$fn=64` looks smooth and round. The catch is that higher `$fn` values take longer to compute. During development, use `$fn=16` for speed. Use `$fn=64` or higher only when you're generating your final print file. Many designers set `$fn` globally at the top of their file.

### `cylinder(h=height, r=radius)` — The Tube, Cone, or Pipe

`cylinder(h=20, r=8)` creates a 20 mm tall cylinder with an 8 mm radius. Like spheres, `$fn` controls how round it looks.

There's an especially powerful variant: instead of a single `r` (which makes both the top and bottom the same radius), you can specify **`r1`** for the bottom radius and **`r2`** for the top radius. This creates tapered shapes:

- `r1=10, r2=5` creates a cone that's wider at the bottom and narrower at the top
- `r1=8, r2=0` creates a spike — the top radius is zero, so the top comes to a point
- `r1=0, r2=8` creates an upside-down spike — a shape that tapers to a point at the bottom

This flexibility makes `cylinder` far more versatile than its name suggests.

### `polygon(points)` — The Custom 2D Shape

None of the above shapes can make an L-shape, a T-shape, a hexagon, or a star. That's what `polygon()` is for.

`polygon()` accepts a list of (x, y) coordinate pairs and creates a flat 2D shape in the XY plane by connecting them in order. The shape automatically closes — the last point connects back to the first. Points should be listed in **counterclockwise order** as seen from above — this convention tells OpenSCAD which side is the "inside" of the polygon.

By itself, a `polygon()` is a flat 2D cutout. Combined with `linear_extrude(height=N)`, it gets pushed straight up along the Z axis to become a 3D prism with that polygon as its cross-section. This is your escape hatch for any shape that can't be described with boxes, spheres, and cylinders.

```openscad
// All four primitives demonstrated:

// 1. A simple box (already familiar from Lesson 1)
{{i:cube}}([30, 20, 10]);

// 2. A sphere — note it's centered on origin by default
// Translate it sideways so it doesn't overlap the {{i:cube}}
{{i:translate}}([40, 0, 10])
  sphere(r=10, $fn=32);    // $fn=32 gives a smooth appearance

// 3. A standard cylinder
{{i:translate}}([70, 0, 0])
  cylinder(h=20, r=8, $fn=32); //$fn=6 gives a hexagonal cylinder

// 4. A tapered cylinder (cone) — wider at the bottom
{{i:translate}}([100, 0, 0])
  cylinder(h=20, r1=10, r2=3, $fn=32);

// 5. A spike — r2=0 makes a pointed top
{{i:translate}}([130, 0, 0])
  cylinder(h=20, r1=8, r2=0, $fn=32);

// 6. A polygon extruded {{i:into}} a prism
// This L-shape profile gets pushed up 5 mm to become a 3D L-bracket
{{i:translate}}([0, 40, 0])
  linear_extrude({{i:height}}=5)
    polygon([[0,0],[40,0],[40,8],[8,8],[8,30],[0,30]]);
```

After building this code, run `3dm info` to check the bounding box of each shape and make sure you understand the relationship between the numbers you typed and the dimensions reported.

---

## Concept 2: Constructive Solid Geometry

### The Logic Behind Combining Shapes

**Constructive Solid Geometry (CSG)** is a technique for building complex 3D shapes by performing logical operations on simpler ones. The word "Boolean" comes from Boolean algebra — the mathematics of true/false logic. In 3D space, a Boolean operation asks a question about every point in space: is this point inside shape A? Inside shape B? Inside both? Inside neither?

The three answers to those questions correspond to the three CSG operations.

### Why This Approach Is So Powerful

Think about how you'd make a box with a cylindrical hole drilled through it. You can't do that with a single primitive. But you can:

1. Create a box
2. Create a cylinder the size of the hole
3. **Subtract** the cylinder from the box

That's `difference()`. Most real-world parts are designed exactly this way: start with a basic solid shape, then cut, drill, and hollow it using additional shapes as "tools."

Now think about a phone stand that has a rounded edge. You can't describe that with a box. But you can:

1. Create the main body as a box
2. Create a sphere slightly larger than the corner radius
3. Use `hull()` to create a smooth, rounded version

That's the power of CSG: you're building a vocabulary of operations that let you describe arbitrarily complex geometry by combining simple pieces.

---

## Step 2 — The Three CSG Operations

### `union()` — Merge Shapes Together

`union()` combines two or more shapes into a single solid. Any point that is inside _any_ of the shapes is inside the result.

An important subtlety: `union()` isn't the same as just rendering two objects next to each other. If shapes overlap, `union()` properly merges them into a single watertight solid. Two overlapping objects without a CSG wrapper can cause problems for the slicer — it may not know whether the overlapping region should be treated as solid once or twice. Always use `union()` when shapes share space.

```openscad
// union() — combines a {{i:cube}} and a sphere {{i:into}} {{i:one}} solid piece
// The sphere sits on top of the {{i:cube}}, and the two are fused where they meet.
union() {
  {{i:cube}}([20, 20, 5]);
  {{i:translate}}([10, 10, 5])
    sphere(r=10, $fn=32);
}
```

Build this and notice: the cube and sphere are one object. You can't select them separately.

### `difference()` — Subtract Shapes

`difference()` subtracts child shapes from the first child. The **first** shape listed inside `difference()` is the base — the "workpiece." Every shape listed after it acts as a cutting tool, removing its volume from the base.

Think of a drill press: the block of material is the first child, and the drill bits are the shapes that follow. You position the drills where you want the holes, and `difference()` removes exactly the volume each drill bit occupies.

```openscad
// {{i:difference}}() — a {{i:cube}} with a cylindrical hole drilled through it
// The {{i:cube}} is the base. The cylinder is the cutting tool.
{{i:difference}}() {
  {{i:cube}}([20, 20, 20]);
  {{i:translate}}([10, 10, -0.001])       // see Step 4 for why this -0.001 matters
    cylinder(h=20.002, r=5, $fn=32);
}
```

> [!CAUTION]
> The most common mistake with `difference()` is accidentally listing the cutting tool first and the base second — the result will be empty or backwards. Always check: is the first item in your `difference()` the piece you want to **keep**?

Make this and identify the problem

```openscad
// {{i:difference}}() — a {{i:cube}} with a cylindrical hole drilled through it
// The {{i:cube}} is the base. The cylinder is the cutting tool.
{{i:difference}}() {
  {{i:translate}}([10, 10, -0.001])       // see Step 4 for why this -0.001 matters
    cylinder(h=20.002, r=5, $fn=32);
      {{i:cube}}([20, 20, 20]);

}
```

### `intersection()` — Keep Only What Overlaps

`intersection()` keeps only the volume that exists inside **all** shapes simultaneously. If shape A and shape B overlap, `intersection()` gives you just the overlapping region — everything that is inside both at the same time.

A practical mental model: `intersection()` is like a cookie cutter. The cookie cutter shape is one child, the dough is another. The result is the piece of dough within the cutter's outline.

```openscad
// intersection() — keeps only the region inside both shapes
// A {{i:cube}} intersected with a sphere = a {{i:cube}} with rounded corners
intersection() {
  {{i:cube}}([20, 20, 20], center=true);
  sphere(r=12, $fn=64);
}
```

Build this and observe: the straight edges of the cube are rounded off wherever the sphere's surface cuts through them. The result is a shape that's simultaneously box-like and rounded.

### Visualizing Each Operation

The best way to internalize these operations is to build each example above separately and study the result before moving on. When you can predict what each operation will produce before you build it, you're ready to combine them in more complex designs.

Here's a quick mental checklist:

- **union()**: Think "merge everything together, fill in any gaps."
- **difference()**: Think "start with the first thing, carve away everything else."
- **intersection()**: Think "keep only the parts that are inside every single child."

---

## Step 3 — `polygon()` for Custom 2D Profiles

### When Primitives Aren't the Right Shape

Boxes, spheres, and cylinders get you surprisingly far. But eventually you'll need a shape that doesn't fit any of them — an L-bracket, a triangular wedge, a hexagonal base, an irregular outline traced from a measurement. That's where `polygon()` earns its place.

`polygon()` takes a list of (x, y) coordinate pairs and creates the 2D shape enclosed by connecting them in order. The shape is drawn in the XY plane. Because it's 2D, you can't print it directly — but combined with `linear_extrude(height=N)`, it becomes a 3D solid with that exact cross-section.

Here's how to use it: sketch your cross-section shape on graph paper. Mark the coordinates of every corner. Transfer those coordinates into the `polygon()` list. Connect the last point back to the first (OpenSCAD does this automatically). List them **counterclockwise** when viewed from above.

```openscad
// An L-shaped bracket: cross-section traced from corner coordinates
bracket_profile = [
  [0,  0],    // bottom-left
  [40, 0],    // bottom-right
  [40, 8],    // step up — beginning of horizontal arm's top edge
  [8,  8],    // inside corner of the L
  [8,  30],   // top of the vertical arm
  [0,  30]    // top-left
];

// Extrude 5 mm along Z — this produces a 3D L-bracket that is 5 mm tall
linear_extrude({{i:height}}=5)
  polygon(bracket_profile);
```

Walk through those coordinates: starting at the bottom-left, moving right along the bottom, up and left to form the horizontal arm, then up the vertical arm, and back to the start. The result is a shape you genuinely cannot make with `cube()` alone.

**The graph-paper method works for almost any traced shape.** Measure your object, draw it on grid paper, read off the corner coordinates, and type them in. This is a real engineering workflow.

---

## Step 4 — The 0.001 mm Offset Rule

### The Co-Planar Face Problem

When you use `difference()` to cut one shape with another, there's a subtle problem that occurs when the cutting shape shares an exact face with the base shape — for example, when the bottom face of a cutting cylinder sits at exactly Z=0, the same as the bottom face of the box it's cutting.

> [!TIP]
> Reason through this idea using a thought experiment. Students 1-5 are in group A and students 5-9 are in group B. What group is student 5 in? This is what the computer tries and fails to solve when a cut shape and a shape to be cut share a plane.

At that shared boundary, OpenSCAD faces an ambiguity: does this face belong to the outer solid or the inner (cutting) solid? The geometry engine can't make that decision cleanly, and the result is **undefined behavior** — sometimes a rendering artifact, sometimes a non-manifold edge that crashes the slicer, sometimes output that looks fine in preview but is broken in the exported STL. Visually, it looks like a shimmering sometimes transparent and sometimes opaque in the OpenSCAD Gui.

This problem is called a **co-planar face problem**, and it's one of the most common sources of mysterious errors in OpenSCAD files.

### The Fix

> [!IMPORTANT]
> **The 0.001 mm offset rule:** whenever subtracting a shape, extend the cutting shape **0.001 mm past each face** it needs to pass through (0.002 mm total extra length). This eliminates co-planar face ambiguity that causes rendering artifacts and slicer errors.

Specifically, move it **0.001 mm outside the face on the entry side** and make it **0.002 mm longer total** so it extends **0.001 mm past the exit side**.

Why 0.001 mm? It's large enough to eliminate the ambiguity entirely — the cutting shape now unambiguously passes through the surface. It's also small enough that no printer in the world can detect it. The 0.001 mm offset is invisible in the physical print.

Counterexample and Example of the 0.001 mm rule.

```openscad
// WRONG — co-planar faces: the cutting shape is exactly as tall as the base
// This may produce rendering artifacts or slicer errors.
{{i:difference}}() {
  {{i:cube}}([20, 20, 10]);
  {{i:translate}}([1, 1, 0])      // cutting shape's bottom at Z=0, same as base
    {{i:cube}}([18, 18, 10]);     // cutting shape's top at Z=10, same as base's top
}
```

```openscad
// CORRECT — the 0.001 offset rule applied
// The cutting shape starts 0.001 mm BELOW the base bottom
// and extends 0.001 mm ABOVE the base top.
{{i:difference}}() {
  {{i:cube}}([20, 20, 10]);
  {{i:translate}}([1, 1, -0.001])         // start 0.001 mm below the floor
    {{i:cube}}([18, 18, 10 + 0.002]);     // 0.001 below + 0.001 above = 0.002 extra {{i:height}}
}
```

**The pattern to memorize:** when cutting along the Z axis, use `translate([x, y, -0.001])` to start the cut 0.001 mm below the floor, and add 0.002 to the cutting shape's height (0.001 below + 0.001 above = 0.002 total extra). For cuts along the X or Y axis, apply the same logic to those dimensions instead (e.g., `translate([-0.001, y, z])` for X axis and `translate([x, -0.001, z])` for Y axis).

---

## Step 5 — Debugging Modifier Characters

### The Four Special Modifiers

OpenSCAD provides four **modifier characters** that you can prefix onto any shape to temporarily change how it appears in the preview. These are debugging tools — they don't change the final exported geometry. Always remove them before exporting a file for printing.

**`#` (hash / highlight)** — renders the shape in translucent pink/red, _and_ keeps it in the model. Use this when you want to see exactly where a cutting shape is sitting relative to the base. Add `#` to a cylinder inside a `difference()` and you'll see the cutting tool highlighted.

**`%` (percent / ghost)** — renders the shape as a transparent ghost, and **excludes it from the model output**. Use this for reference geometry — a ghost outline of a component you're designing something to attach to — that helps you position things but shouldn't be in the final print.

**`!` (bang / isolate)** — renders **only this shape**, ignoring everything else in the entire file. Use this when you want to check a single module or shape by itself, without every other object in the scene blocking the view.

**`*` (star / disable)** — completely disables this shape; it's not rendered at all and produces no output. Use this to temporarily turn off part of your design during debugging, without deleting the code.

```openscad
// USING MODIFIERS FOR DEBUGGING:

{{i:difference}}() {
  {{i:cube}}([30, 30, 20]);

  // # highlights the cutting shape so {{i:you}} {{i:can}} see where it's cutting
  # {{i:translate}}([15, 15, -0.001])
    cylinder(h=20.002, r=8, $fn=32);
}

// % ghost {{i:reference}} — helps position but doesn't {{i:print}}
% {{i:translate}}([0, 0, 20])
  {{i:cube}}([30, 30, 5]);   // ghost of a lid that will sit on top
```

> [!IMPORTANT]
> **F5 vs F6:** F5 runs a fast approximate preview that is NOT manifold-safe — good for quick visual checks only. F6 runs the full CGAL geometric kernel: slower, but accurate and manifold-safe. Always use **F6** (or `3dm build`) to create the necessary information to save the file as an stl using **F7** (also part of `3dm build`).

---

## Step 6 — `linear_extrude()` and `rotate_extrude()`

### Two Ways to Create 3D Shapes from 2D Profiles

You've already used `linear_extrude()` with `polygon()`. Now let's understand it more fully, and introduce its sibling `rotate_extrude()`.

**`linear_extrude(height=N)`** takes a 2D profile (any 2D shape: `circle`, `square`, `polygon`, or a combination) and pushes it straight up along the Z axis, creating a prism. The cross-section of the prism matches the 2D profile exactly.

Two important optional parameters:

- `twist=angle` — rotates the profile as it extrudes, creating a spiral or helix. A `twist=90` on a square profile creates a twisted square column.
- `scale=factor` — changes the size of the profile from bottom to top. `scale=0.5` means the top is half the size of the bottom, creating a tapered shape.

**`rotate_extrude(angle=360)`** takes a 2D profile and rotates it around the **Z axis**, sweeping it in a circle to create a rotationally symmetric solid. Imagine a lathe: the profile is the outline of a piece, and the lathe spins it to create a solid of revolution.

The profile for `rotate_extrude()` must be positioned in **positive X space** — to the right of the Z axis. The X distance from the Z axis becomes the radius of the resulting shape. If you place a small circle at X=15 and rotate-extrude it, you get a torus (donut) with a 15 mm ring radius.

```openscad
// linear_extrude: circle extruded straight up = a cylinder
linear_extrude({{i:height}}=20) {
  circle(r=10, $fn=32);
}

// linear_extrude with twist: a twisted square column
{{i:translate}}([30, 0, 0])
linear_extrude({{i:height}}=30, twist=90) {
  square([10, 10], center=true);
}

// linear_extrude with scale: a tapered shape (like a pyramid with a square base)
{{i:translate}}([60, 0, 0])
linear_extrude({{i:height}}=30, scale=0.1) {
  square([15, 15], center=true);
}

// rotate_extrude: a circle swept around the Z axis = a torus (donut)
{{i:translate}}([0, 50, 0])
rotate_extrude(angle=360, $fn=64) {
  {{i:translate}}([15, 0, 0]) circle(r=5, $fn=32);
}
```

Any shape that is rotationally symmetric — a bowl, a cup, a ring, a knob, a vase — can and should be made with `rotate_extrude()`. It's dramatically more elegant than building the same shape from many overlapping cylinders.

---

## Step 7 — `hull()` — The Convex Envelope

### What `hull()` Does

`hull()` computes the **convex hull** of all its children — the smallest convex shape that completely contains all of them. The easiest mental model: imagine stretching a rubber band around a collection of objects laid on a table. The shape the rubber band makes when it snaps tight around all of them is the convex hull.

Notice the key word: **convex**. A convex shape has no indentations or concave regions — every surface curves outward. `hull()` fills in any gaps or concavities between the shapes you give it.

### How `hull()` Differs from `union()`

`union()` takes all the shapes and merges them, preserving their individual forms including any gaps or indentations between them.

`hull()` takes all the shapes and creates the smoothest possible outer envelope that touches or contains all of them, filling in any gaps.

This makes `hull()` excellent for:

- Creating smooth transitions between two shapes of different sizes
- Making rounded boxes (place a small sphere at each corner, take the hull)
- Creating organic, blob-like shapes
- Generating ramps and smooth blends

```openscad
// hull() of three spheres — creates a smooth rounded triangle
hull() {
  {{i:translate}}([0,  0,  0]) sphere(r=5, $fn=32);
  {{i:translate}}([30, 0,  0]) sphere(r=5, $fn=32);
  {{i:translate}}([15, 20, 0]) sphere(r=5, $fn=32);
}

// Practical use: a rounded box
// Place small spheres at the eight corners of a box
// The hull creates a box with perfectly rounded edges
{{i:translate}}([0, 40, 0])
hull() {
  for (x = [3, 27], y = [3, 17], z = [3, 7]) {
    {{i:translate}}([x, y, z]) sphere(r=3, $fn=16);
  }
}
```

The rounded box pattern is one of the most commonly used techniques in OpenSCAD. The sphere radius controls how round the edges are. The positions of the spheres control the overall box dimensions. Change the sphere radius to change how much rounding you get.

---

## Advanced CSG: Putting It All Together

### A Parametric Mounting Bracket

Here is a complete practical example that uses nested CSG operations to create a real functional part. Read through it carefully — notice how the design intent is encoded as named variables at the top, and the geometry simply uses those variables.

```openscad
// Parametric Mounting Bracket
// Change these values to resize the bracket
width  = 40;    // mm — total bracket width
{{i:height}} = 30;    // mm — total bracket {{i:height}}
depth  = 8;     // mm — bracket thickness (front to back)
hole_r = 4;     // mm — radius of mounting holes
slot_w = 6;     // mm — width of top slot
slot_h = 15;    // mm — {{i:height}} of top slot
wall   = 3;     // mm — {{i:material}} remaining above slot

{{i:module}} bracket() {
  {{i:difference}}() {
    // Base: a solid rectangular block — this is what everything gets cut from
    {{i:cube}}([width, depth, {{i:height}}]);

    // Two circular mounting holes drilled through the Y axis
    // The rotate([-90,0,0]) turns the cylinder to point in the Y direction
    {{i:translate}}([10, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);
    {{i:translate}}([30, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);

    // A slot cut through the top portion of the bracket
    {{i:translate}}([width/2 - slot_w/2, -0.001, {{i:height}} - slot_h - wall])
      {{i:cube}}([slot_w, depth + 0.002, slot_h]);
  }
}

bracket();
```

Walk through this mentally: start with a solid block. Drill two circular holes through it from front to back. Cut a slot down from the top. The result is a bracket with two mounting holes and an adjustment slot — all from one parametric design.

Try changing `hole_r`, `slot_w`, or `width` and rebuilding. Watch how every feature adapts automatically.

---

## Quiz — Lesson 2 (15 questions)

1. What are the four main 3D primitives in OpenSCAD?
2. What does `difference()` do? Which child is the base, and which children are the cutting tools?
3. Why do you add 0.001 mm to the cutting geometry in a `difference()` operation? What problem does it prevent?
4. What does the `#` modifier character do, and when would you use it during debugging?
5. What is the difference between F5 and F6 in the OpenSCAD GUI? Which should you use before printing?
6. What does `hull()` produce? How is it different from `union()`?
7. What does the `%` modifier do to a shape in OpenSCAD?
8. Describe what `rotate_extrude()` does and give one example of a shape it could produce.
9. What does `intersection()` return when applied to a cube and a sphere that partially overlap?
10. True or False: the `*` modifier renders a shape as a transparent ghost for debugging purposes.
11. Describe what `linear_extrude()` does and explain what the `twist` parameter changes.
12. What is a co-planar face, and what problem does it cause in a `difference()` operation?
13. If you want to subtract a cylinder from a cube and the cylinder is exactly as tall as the cube, what two adjustments do you need to make to ensure a clean cut? Does the order matter?
14. When using `polygon()`, what order should points be listed in, and why?
15. What is the difference between combining two overlapping shapes with `union()` versus rendering two separate overlapping objects without any CSG operation?

---

## Extension Problems (15)

1. Build a hollow sphere with 1.5 mm walls using `difference()` and the 0.001 mm rule. Document the outer and inner radii you chose and verify the wall thickness using `3dm info`.
2. Create a vase shape using `rotate_extrude()` and a custom 2D profile. The vase should be wider in the middle than at the top and bottom.
3. Design a bracket or clip using nested `difference()` and `union()`. Add a comment to every CSG step explaining what it does.
4. Use `hull()` to create a smooth, rounded box with 3 mm radius corners. Document the sphere placement strategy you used.
5. Use the `%` modifier to create a ghost reference shape that helps you position a snap-fit clip around a cylinder. Screenshot the debugging view and explain it.
6. Create a parametric name badge: a flat rectangular base with your name text embossed (raised) on the top face, using `linear_extrude()` combined with `text()`. Make the text height a parameter.
7. Build a compound hinge using two cylinders (the barrel), a `hull()` for the hinge leaf, and alignment holes through the barrel. Document the design intent.
8. Design a 10-sided (decagonal) prism using `cylinder()` with `$fn=10` and a `difference()` to cut a hexagonal through-hole aligned with the prism's center.
9. Create a single test print that exercises all three CSG operations (`union`, `difference`, `intersection`) in one part. Add header comments explaining what each operation does in the design.
10. Using only `cube()`, `sphere()`, `difference()`, and `hull()`, build a simple chess pawn. It should be recognizable as a pawn when printed.
11. Create a lattice cube: a solid cube with a grid of cylindrical holes drilled through it in all three axes. Calculate and document the relationship between hole spacing and remaining wall thickness.
12. Build a parametric ring using `rotate_extrude()` where the cross-section shape (round, square, or custom polygon) is easily changeable by modifying a variable.
13. Research and document the `surface()` primitive: what input does it accept, what shape does it produce, and when would you use it instead of `polyhedron()`? Include a working example.
14. Design a tolerance test set: five pairs of pegs and holes with clearances from 0.0 mm to 0.4 mm in 0.1 mm increments. Print one set and document which clearance allows free movement on your specific printer.
15. Write a short guide explaining all four modifier characters (`#`, `!`, `%`, `*`) with one concrete use case for each, and a note on why you must always remove them before exporting the final file.

---

## References and Helpful Resources

- OpenSCAD User Manual — Primitive Solids and Boolean Operations — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids)
- OpenSCAD User Manual — CSG Modelling — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling)
- OpenSCAD User Manual — Transformations and Extrusions — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem)
- OpenSCAD User Manual — Modifier Characters — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters)

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub — Chapters on CSG and primitives
- CodeSolutions Repository — [https://github.com/ProgrammingWithOpenSCAD/CodeSolutions](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked examples for CSG, hull, and extrusions
- OpenSCAD Quick Reference — [https://programmingwithopenscad.github.io/quick-reference.html](https://programmingwithopenscad.github.io/quick-reference.html) — All primitive and CSG syntax at a glance
- 3DMake GitHub Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake) — Build workflow reference
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Projects and Reference Appendices

_All supporting documents for Lesson 2 are included below. You do not need to open any additional files._

---

## Appendix A: OpenSCAD Quick Reference — Cheat Sheet

_Keep this handy during all OpenSCAD work. For full documentation: [https://openscad.org/documentation.html](https://openscad.org/documentation.html)_

---

### Basic Shapes (Primitives)

```openscad
{{i:cube}}([length, width, {{i:height}}]);           // rectangular box at origin
{{i:cube}}([l, w, h], center=true);           // box centered at origin

sphere(r=radius);                        // sphere by radius
sphere(d=diameter);                      // sphere by diameter

cylinder(h={{i:height}}, r=radius);            // cylinder
cylinder(h={{i:height}}, d=diameter);          // by diameter
cylinder(h={{i:height}}, r1=5, r2=2);         // cone (different top/bottom radii)

$fn = 50;  // curve resolution — higher = smoother, slower to render
```

---

### Transformations

```openscad
{{i:translate}}([x, y, z]) shape;             // move
rotate([x_deg, y_deg, z_deg]) shape;    // rotate around {{i:each}} axis
scale([x, y, z]) shape;                 // scale (1.5 = 150%)
mirror([1, 0, 0]) shape;               // mirror across YZ plane
                                        // use [0,1,0] for XZ, [0,0,1] for XY
```

---

### Boolean Operations

```openscad
union() { shape1; shape2; }             // combine shapes
{{i:difference}}() { base; subtract; }        // remove {{i:one}} shape from another
intersection() { shape1; shape2; }      // keep only the overlapping region
```

**Critical rule for `difference()`:** always make the subtracting shape extend 0.001 mm past each shared face to avoid co-planar artifacts.

```openscad
// Example — box with a through-hole:
{{i:difference}}() {
  {{i:cube}}([30, 30, 10]);
  {{i:translate}}([15, 15, -0.001])           // extends past bottom face
    cylinder(h=10.002, r=5, $fn=32);   // extends past top face
}
```

---

### Variables and Parameters

```openscad
length = 70;      // define a variable
width  = 16;
{{i:height}} = 5;

{{i:cube}}([length, width, {{i:height}}]);          // use {{i:variables}}
{{i:cube}}([length * 2, width, {{i:height}}]);      // math in expressions
```

---

### Modules (Reusable Functions)

```openscad
// Define:
{{i:module}} my_box(l=20, w=15, h=10) {
  {{i:cube}}([l, w, h]);
}

// Call:
my_box();               // uses all defaults
my_box(30, 20, 8);     // positional arguments
my_box(l=50);           // named argument; others use defaults
```

---

### Loops

```openscad
// Repeat a shape N times:
for (i = [0:4]) {                       // i goes 0, 1, 2, 3, 4
  {{i:translate}}([i * 20, 0, 0]) {{i:cube}}([15, 15, 5]);
}

// With step size:
for (i = [0:5:20]) {                    // i goes 0, 5, 10, 15, 20
  {{i:translate}}([i, 0, 0]) sphere(r=3);
}
```

---

### 2D Shapes (for Extrusion)

```openscad
circle(r=10);                           // 2D circle
square([w, h]);                         // 2D rectangle
polygon([[0,0],[10,0],[5,10]]);         // arbitrary 2D shape

// Extrude {{i:into}} 3D:
linear_extrude({{i:height}}=5) circle(r=10); // cylinder from 2D circle
linear_extrude({{i:height}}=10, twist=90)    // twisted extrusion
  square([10, 5]);
rotate_extrude()                        // solid of revolution
  {{i:translate}}([15, 0]) circle(r=3);      // torus
```

---

### Modifier Characters (Debugging — Remove Before Final Export)

| Modifier | Effect                            | When to use                                  |
| :------: | --------------------------------- | -------------------------------------------- |
|   `#`    | Highlight shape in red/orange     | Finding where a hole or subtractive shape is |
|   `%`    | Render shape as transparent ghost | Checking alignment of mating parts           |
|   `!`    | Render ONLY this shape            | Isolating one component for inspection       |
|   `*`    | Disable (ignore) this shape       | Temporarily removing geometry                |

> [!WARNING]
> Always remove all modifier characters (`#`, `%`, `!`, `*`) before exporting your final STL. Leaving them in can alter or omit geometry in the exported file.

---

### Keyboard Shortcuts

| Key        | Action                                                         |
| ---------- | -------------------------------------------------------------- |
| `F5`       | Preview — fast, approximate (use for checking while designing) |
| `F6`       | Full render — exact, required before export                    |
| `F7`       | Export as STL formatted file                                   |
| `Ctrl + S` | Save the .scad file                                            |
| `Ctrl + Z` | Undo                                                           |
| `F3`       | Reset camera view                                              |

---

### Export Workflow

1. Press `F6` (full render — wait for it to complete)
2. File → Export → Export as STL (or `F7`)
3. Save with a descriptive filename: `projectname_v2.stl`
4. Run `3dm info` on the exported file to verify dimensions before slicing

---

## Appendix B: Bonus Print — Extension Project

**Estimated time:** 3–5 hours

### Overview

This extension project builds on your first successful print by introducing purposeful modification. You'll take an existing model from an online repository, decide on a specific change that improves or adapts it for a new purpose, apply that change in OpenSCAD or the slicer, and document the entire process. The goal is to experience the design iteration cycle — make a change, understand why you made it, evaluate the result.

### Learning Objectives

By completing this project, you will:

- Apply scaling and simple modifications to an existing model
- Understand how scaling affects tolerances and assembly fit
- Document design changes with enough detail that someone else could reproduce your work
- Practice logging print time, filament use, and outcome for reproducibility

### Materials

- Online repository access (Thingiverse, Printables, Yeggi, Cults3d), slicer, printer, filament

### Tasks

1. **Choose a model** from Thingiverse or Printables. Note its original stated dimensions.

2. **Decide on a purposeful modification** — scale it up or down, add a mounting hole, strengthen a thin feature, or combine it with another model. Write one paragraph explaining what the modification is and why you're making it. Who benefits from this change?

3. **Apply the change** in OpenSCAD (preferred) or by scaling in the slicer. Record the new dimensions and what changed relative to the original.

4. **Slice and print** all parts in one session where possible. Log: print time, filament used (in grams), layer height, infill %, and any slicer settings you adjusted.

5. **Create a short construction note**: describe how the modified print is used or assembled. Photograph the result.

### Probing Questions

1. What motivated the modification, and who benefits from it?
2. How did scaling affect tolerances or assembly fit? If the model connects to anything else, did the fit change?

### Starter Code

If adapting a model using OpenSCAD, use this scaling scaffold as a starting point:

```openscad
// Bonus Print Modification Scaffold
// {{hi:Import}}Import an {{i:STL}} and apply modifications parametrically.

// ---- Parameters ----
scale_factor  = 1.5;        // 1.0 = original, 1.5 = 50% larger, 0.75 = 25% smaller
add_mount     = true;       // set false to skip the mount hole
mount_r       = 2.5;        // mm — mount hole radius (for M5 screw: 2.75mm)
mount_pos     = [25, 0, 0]; // mm — position of mount hole center

// ---- Base {{i:Model}} ----
// Replace "original.stl" with your actual {{i:file}} path
{{i:module}} base_model() {
  scale([scale_factor, scale_factor, scale_factor])
    import("original.stl", convexity=10);
}

// ---- Mount Hole (optional) ----
{{i:module}} mount_hole() {
  if (add_mount) {
    {{i:translate}}(mount_pos)
      cylinder(h=100, r=mount_r, center=true, $fn=32);
  }
}

// ---- Assembly ----
{{i:difference}}() {
  base_model();
  mount_hole();
}
```

---

## Appendix C: Bonus Print — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_\_\_  
**Description:** Modify an existing 3D model and document the design changes and print outcomes.

---

### Original Model

- Model name and source:
- Link or file name:
- Original stated dimensions:
- Why did you choose this model for modification?

---

### Modification Plan

- What change will you make, and why?
- Who benefits from this modification?
- Will this be done in OpenSCAD, or by scaling in the slicer? Why?

---

### Variant Specifications

|        Variant         | Scale or Change | Est. print time | Est. filament (g) | Key dimensions |
| :--------------------: | --------------- | :-------------: | :---------------: | -------------- |
|  Original (reference)  |                 |                 |                   |                |
| V1 (your modification) |                 |                 |                   |                |
|     V2 (optional)      |                 |                 |                   |                |

---

### Print Results

|   Variant    | Actual print time | Actual filament (g) | Quality | Notes |
| :----------: | :---------------: | :-----------------: | ------- | ----- |
|      V1      |                   |                     |         |       |
| V2 (if made) |                   |                     |         |       |

---

### How Does Scaling Affect Fit?

If your model connects to anything (a wall mount, another printed part, a standard fastener), describe how the scaled dimensions affect the fit:

Original mating dimension: \_\_\_\_ mm → Scaled dimension: \_\_\_\_ mm → Fit result:

---

### Reflections

- Which variant is most effective for its intended purpose, and why?
- How did scaling or modification affect print time and material use?
- What trade-offs did you observe (strength vs. speed, size vs. material cost)?
- If you made a third variant, what would it be?

---

### Attachments Checklist

- [ ] `.scad` file with modification code (or slicer project file if scaled in slicer)
- [ ] Photos of original and modified prints side by side (if both available)
- [ ] Print log for each variant
- [ ] Completed variant specification table above

---

### Teacher Feedback

| Category                                                                           | Score (0–3) | Notes |
| ---------------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — modification is purposeful; print(s) successful               |             |       |
| Design & Code Quality — modification is documented; parametric if done in OpenSCAD |             |       |
| Documentation — variant table complete; scaling effects addressed                  |             |       |
| **Total (0–9)**                                                                    |             |       |

---

## Appendix D: Real-Life Problem Solver — Extension Project

**Estimated time:** 4–8 hours (design, adapt, print, and document)

### Overview

This extension project asks you to do something harder than downloading and printing: identify a real problem in your life or environment, find or design a 3D-printed solution, adapt it to meet the actual constraints of that situation, and document the full process. This is the closest this course gets to professional design work at this stage — it requires a problem statement, candidate research, a design decision, iteration, and evaluation.

### Learning Objectives

By completing this project, you will:

- Identify a user problem and write a problem statement that defines what success looks like
- Evaluate candidate printed solutions and choose one to adapt
- Make at least one documented design modification
- Test and measure a prototype with documented results
- Write a final report summarizing performance and next steps

### Materials

- Computer with slicer and access to repositories
- Printer, filament, basic hand tools for post-processing

### Tasks

1. **Write a problem statement.** Interview a potential user (yourself counts) and write one paragraph that describes: what the person is trying to do, what gets in their way, and what a successful solution would let them do. Be specific — "it's inconvenient" is not a problem statement; "my headphones fall off the desk and the cable gets tangled" is.
2. **Research candidate models.** Search Thingiverse or Printables for at least three options that could address your problem. List all three in your documentation, explain why each could or couldn't work, and justify your final selection.
3. **Adapt the model.** Make at least one modification — scale it, add or remove features, combine it with another model, or change the material or infill for durability. Document your changes in a short changelog with one entry per change.
4. **Print and test.** Run a supervised test of the prototype. Log any failures and what corrective actions you took. If the first print fails or doesn't work as intended, print again with documented changes.
5. **Write a final report** summarizing: how well the prototype performed, measured deviations from specifications, any remaining limitations, and what you would change in the next iteration.

### Probing Questions

1. What assumptions did you make about the user's context? How could you validate those assumptions with someone other than yourself?
2. Which modification had the biggest impact on whether the part worked, and why?

---

## Appendix E: Real-Life Problem Solver — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_\_\_  
**Description:** Adapt an existing 3D model to solve a real problem, with documented design changes and test results.

---

### Problem Statement

Write one paragraph. Who is the user? What are they trying to do? What gets in their way? What would a successful solution let them do?

---

### Candidate Models

|  #  | Model name and source | Why it could work | Why it might not work |
| :-: | --------------------- | ----------------- | --------------------- |
|  1  |                       |                   |                       |
|  2  |                       |                   |                       |
|  3  |                       |                   |                       |

**Selected model:** \_\_\_\_\_ **Reason for selection:** \_\_\_\_\_

---

### Modification Changelog

|  #  | Change made | Why | Result |
| :-: | ----------- | --- | ------ |
|  1  |             |     |        |
|  2  |             |     |        |
|  3  |             |     |        |

---

### Original vs. Adapted Specifications

| Parameter | Original | Adapted | Reason |
| --------- | :------: | :-----: | ------ |
|           |          |         |        |
|           |          |         |        |
|           |          |         |        |

---

### Design Iteration Cycle

#### Print 1

- Date:
- Settings (layer height, infill, supports):
- Result:
- Issues observed:
- Next action:

#### Print 2 (if made)

- Date:
- What changed from Print 1:
- Result:
- Issues resolved / remaining:

---

### Test Results

How did you test whether the prototype solves the problem? What did you observe?

- Test method:
- Did the prototype succeed? Yes / Partially / No
- Any deformation, failure, or fit issues?
- User feedback (if you had a second person try it):

---

### Reflections

**What worked:**

**What didn't work:**

**What you would change in iteration 3:**

**What this taught you about the gap between a design on screen and a physical object that works in real life:**

---

### Accessibility Considerations

- How would you describe this modified design to someone who cannot see it?
- What measurements or tactile features would help a non-visual user understand or use the part?

---

### Attachments Checklist

- [ ] Problem statement (one paragraph, specific)
- [ ] Three candidate models with analysis
- [ ] Modification changelog
- [ ] `.scad` or `.stl` files for each iteration
- [ ] Photos of each printed iteration
- [ ] Test results documentation
- [ ] Final report (performance summary and next steps)

---

### Teacher Feedback

| Category                                                                       | Score (0–3) | Notes |
| ------------------------------------------------------------------------------ | :---------: | ----- |
| Problem & Solution — modification functional; problem addressed                |             |       |
| Design & Code Quality — changes documented; iteration evident                  |             |       |
| Documentation — changelog complete; test results recorded; reflection specific |             |       |
| **Total (0–9)**                                                                |             |       |

**Resubmission:** attach a paragraph explaining what was changed and why. Highest score of resubmission score and original is kept.

---

## Appendix F: Real-Life Problem Solver — Instructor Reference

### Project Context

This is the most demanding extension project in Lessons 1–2. It requires students to work through a full design loop: problem definition → research → selection → modification → testing → evaluation. The quality of the outcome depends heavily on the quality of the problem statement — students who write a vague problem statement produce vague designs. Front-load the problem statement review.

### Key Learning Points to Reinforce

**A problem statement is not a solution.** Students tend to jump to "I want to print a phone stand" without explaining why. The problem statement should describe a situation and a gap, not a predetermined output. "My phone falls off my desk and I can't see notifications while working" is a problem statement. "I want a phone stand" is a solution.

**A changelog creates accountability.** Every design change should have a reason. Students who change things without documenting why have no basis for evaluating whether the change helped. Reinforce this by asking "why did you make this change?" at every iteration review.

**Testing must be observable.** A test that consists of "I tried it and it worked" is not documentation. Students should describe the test method (how many times, under what conditions, measured how), not just the result.

### Constraints (Enforce These)

- Problem statement must be written before model selection
- At least one print iteration is required — first-attempt submissions are not acceptable
- Changelog must have at least one entry per design change
- Test results must include an observable measurement or observation, not just a pass/fail judgment

### Assessment Notes

**Strong submissions** show: a specific problem statement that identifies a real user, a justified model selection (not just "I found this one"), a changelog that explains the reasoning behind each change, and a test result that describes what was actually measured or observed.

**Common weak areas:** problem statements that are really solution statements, modification changelogs with a single vague entry, and test sections that say "it worked fine" without any specifics. Push back on all three in feedback.

**Extension for advanced students:** have them repeat the design loop with a second user who is different from themselves. Designing for yourself and discovering that a different person has different constraints is a powerful experience.

---

# Lesson 3 — Parametric Architecture and Modular Libraries

**Estimated Time:** 90–120 minutes  
**Course:** 3D Printing for the Blind

---

## Before You Start

You can now create shapes and combine them using CSG. That's the vocabulary. Now it's time to learn the _grammar_ — how to organize and generalize your code so it's maintainable, reusable, and professional.

The difference between a beginner OpenSCAD file and a professional one isn't usually the shapes — it's the structure. A beginner file has magic numbers scattered throughout, the same geometry copy-pasted in three places, and no indication of what any variable is for. A professional file has clearly named parameters at the top, organized modules, validation that catches errors before they become bad prints, and code you could hand to someone else and they'd immediately understand.

This lesson introduces the complete system for professional OpenSCAD structure: modules, functions, libraries, and the DRY principle. It also covers one of the most confusing aspects of OpenSCAD for programmers coming from other languages: how variables work here is completely different from Python, JavaScript, or Java — and understanding that difference upfront will save you hours of debugging.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Understand and work with OpenSCAD's unique "last-wins" variable scoping rules
- Write parametric modules with validated inputs using `assert()`
- Organize reusable geometry into library files using `use` and `include`
- Write recursive functions for mathematical and spatial computations
- Apply list comprehensions and vector operations for advanced parametric design
- Apply the DRY (Don't Repeat Yourself) principle through modules and functions
- Use `for` loops, conditionals, and list comprehensions to generate repetitive geometry
- Write type-safe modules using `is_number()`, `is_list()`, and `is_string()`

---

## Concept 1: How Variables Work in OpenSCAD (It's Different)

### The Most Important Thing to Understand in This Lesson

If you've ever programmed in Python, JavaScript, Java, or almost any other language, you have a mental model of variables that works a certain way: you assign a value, the program runs, and that variable holds that value until you change it. Variables are like buckets — you put a value in, you can read what's in there, and you can put a new value in later.

**OpenSCAD does not work this way.** The difference is fundamental and will cause bugs if you misunderstand it. Let's dig in.

### How OpenSCAD Actually Works

OpenSCAD processes your file in two distinct passes:

**Pass 1 — Parse:** OpenSCAD reads the entire file from top to bottom, collects every variable assignment and module/function definition, and resolves what every variable equals. No geometry is created during this pass.

**Pass 2 — Render:** OpenSCAD creates geometry using the values that were determined in Pass 1.

This two-pass system leads to three rules that govern all OpenSCAD code:

**Rule 1: There is no assignment during execution.** You cannot update a variable while the geometry is being computed. Variables are set during parse time and then read during render time. "Updating" a variable mid-computation isn't a concept in OpenSCAD.

**Rule 2: The last assignment in a scope wins — everywhere in that scope.** This is the most confusing rule. If you write `x = 5;` on line 3 and then `x = 10;` on line 20, the value of `x` is `10` _everywhere_ in that scope — including on line 3, even though you hadn't written the second assignment yet. It's as if OpenSCAD reads the entire file first, decides what everything equals, and then uses those final values. Writing `x = 5; echo(x); x = 10;` will print `10`, not `5`.

**Rule 3: Variables inside modules are local.** A variable declared inside a module exists only within that module. The global variable with the same name is unchanged.

```openscad
// COMMON MISTAKE — expecting x to change during execution
x = 5;
echo("x =", x);   // This prints 10, NOT 5 — because the last assignment wins
x = 10;

// CORRECT PATTERN — {{i:each}} value gets its own {{i:name}}
base_size    = 20;          // 20
padded_size  = base_size + 10;   // 30 — computed from base_size
doubled_size = base_size * 2;    // 40 — computed from base_size
echo(base_size, padded_size, doubled_size);  // 20, 30, 40

// MODULE SCOPE — {{i:variables}} inside a {{i:module}} are completely separate
wall_t = 3;   // global wall thickness

{{i:module}} demo_box(size) {
  wall_t = 1;           // This is a DIFFERENT variable — local to this {{i:module}}
  {{i:cube}}([size, size, wall_t]);   // uses the local wall_t = 1
}

demo_box(20);
echo("Global wall_t is still:", wall_t);  // Still 3 — unchanged by the {{i:module}}

// CHOOSING BETWEEN VALUES conditionally — use a ternary expression
mode = "large";
box_size = (mode == "large") ? 40 : 20;   // If mode is "large", 40; otherwise 20
{{i:cube}}([box_size, box_size, 5]);
```

### What This Means in Practice

Because you can't update a variable during execution, you can't accumulate a total like `total = total + item`. Instead, you describe _relationships_ between values mathematically. If the width of your inner wall depends on the outer wall and the wall thickness, you write that as a formula: `inner_width = outer_width - 2 * wall_t;`. The system computes the value once, and that value is used everywhere.

This is actually quite elegant once you adjust to it. You're writing equations, not instructions. Each variable is defined once and means exactly one thing.

For cases where you genuinely need to choose between values or compute something iteratively, OpenSCAD provides **ternary expressions** (condition ? value_if_true : value_if_false), **recursive functions**, and **list comprehensions** — all covered in this lesson.

---

## Step 1 — Modules: Named, Reusable Geometry

### What a Module Is

A **module** is a named, reusable piece of geometry. When you find yourself writing the same shape code in multiple places, that's the signal to create a module. Modules accept parameters — just like functions in other languages — so you can write one module that creates many different variations of the same shape.

The syntax is:

```openscad
{{i:module}} {{i:name}}(param1, param2=default_value) {
  // {{i:geometry}} {{i:code}} here
  // uses param1 and param2
}
```

Parameters with default values (`param2=default_value`) are optional — callers can omit them and the default will be used. Parameters without defaults are required.

You call a module just like a statement:

```openscad
{{i:name}}(value1, value2);
```

### The DRY Principle

> [!TIP]
> **DRY — Don't Repeat Yourself.** If geometry is defined in one module, changing it once updates everywhere it's used. Copy-pasting the same geometry multiple times means one missed update creates inconsistency across your design.

If you need four mounting holes in a plate, you could write the cylinder code four times — once for each hole. But now if you need to change the hole size, you have to change it in four places. If you miss one, your design is inconsistent. If you need to add a fifth hole later, you have to remember the pattern and paste it again.

The DRY approach: write a module `mounting_hole(r, depth)` once, then call it four times. Now the hole geometry is defined in exactly one place. Change it once, every hole updates. Add more holes as easily as one line each.

```openscad
// WRONG — {{i:copy}}-pasted, hard to maintain
{{i:difference}}() {
  {{i:cube}}([60, 40, 5]);
  {{i:translate}}([5,  5,  -0.001]) cylinder(r=2, h=5.002, $fn=16);
  {{i:translate}}([55, 5,  -0.001]) cylinder(r=2, h=5.002, $fn=16);
  {{i:translate}}([5,  35, -0.001]) cylinder(r=2, h=5.002, $fn=16);
  {{i:translate}}([55, 35, -0.001]) cylinder(r=2, h=5.002, $fn=16);
}

// CORRECT — DRY: {{i:one}} {{i:module}}, used multiple times
{{i:module}} mounting_hole(r=2, depth=5) {
  // The 0.001 offsets prevent co-planar face problems (Lesson 2)
  {{i:translate}}([0, 0, -0.001])
    cylinder(r=r, h=depth + 0.002, $fn=16);
}

{{i:difference}}() {
  {{i:cube}}([60, 40, 5]);
  {{i:translate}}([5,  5,  0]) mounting_hole();
  {{i:translate}}([55, 5,  0]) mounting_hole();
  {{i:translate}}([5,  35, 0]) mounting_hole();
  {{i:translate}}([55, 35, 0]) mounting_hole();
}
```

The second version is easier to read, easier to change, and scales effortlessly. If you need a larger hole, change `r=2` to `r=3` in one place, and all four holes update.

---

## Step 2 — `assert()` for Parameter Validation

### Why Your Modules Should Validate Their Inputs

In a parametric design, other people (and future-you) will change parameter values. What happens if someone sets `wall_thickness = 0`? Or `cylinder_radius = -5`? Depending on the code, it might silently produce garbage geometry, or it might produce a cryptic error that doesn't explain what went wrong.

`assert()` is OpenSCAD's built-in validation statement. It takes a condition and an optional message. If the condition is false, OpenSCAD _stops rendering immediately_ and displays your message in the console. This is vastly better than allowing invalid values to silently produce a broken model.

Think of `assert()` as making your design constraints machine-enforceable. Instead of just knowing that `wall_t` must be at least 1.2 mm for a 0.4 mm nozzle, you write it as an assertion and the tool enforces it automatically.

### How `assert()` Works

```openscad
assert(condition, "message if condition is false");
```

If `condition` evaluates to true, nothing happens — the code continues normally. If `condition` is false, the render stops and the message is printed. The message should be descriptive enough that anyone reading it immediately understands what went wrong.

```openscad
{{i:module}} safe_cylinder(r, h, fn=32) {
  // Validate all inputs {{i:before}} creating any {{i:geometry}}
  assert(is_num(r) && r > 0,
    str("safe_cylinder: radius must be a positive number, got: ", r));
  assert(is_num(h) && h > 0,
    str("safe_cylinder: {{i:height}} must be a positive number, got: ", h));
  assert(fn >= 3,
    str("safe_cylinder: fn must be at least 3, got: ", fn));
  assert(r < 500,
    str("safe_cylinder: radius ", r, "mm seems wrong — did {{i:you}} enter cm instead of mm?"));

  cylinder(r=r, h=h, $fn=fn);
}

safe_cylinder(5, 20);          // fine
// safe_cylinder(-3, 20);      // STOPS: "radius must be a positive number, got: -3"
// safe_cylinder(5, 20, fn=1); // STOPS: "fn must be at least 3, got: 1"
```

If I run safe_cylinder(-3, 20) as the last line, I get the following in my Console:

```pwsh
Compiling {{i:design}} (CSG Tree generation)...
ERROR: Assertion '(is_num(r) && (r > 0))' failed: "safe_cylinder: radius must be a positive number, got: -5" in {{i:file}} ., line 3
TRACE: called by 'assert' in {{i:file}} ., line 3
TRACE: call of 'safe_cylinder(r = -5, h = 20, fn = 32)' in {{i:file}} ., line 1
TRACE: called by 'safe_cylinder' in {{i:file}} ., line 15
Compiling {{i:design}} (CSG Products generation)...
```

The `str()` function assembles a string from multiple values — very useful for error messages that include the bad value so the user knows exactly what to fix.

> [!TIP]
> Add `assert()` statements to every module at the very top of the module body, before any geometry. This turns bad-input problems into clear, descriptive messages instead of mysterious rendering failures.

---

## Step 3 — Library Files: `use` vs. `include`

### Organizing Code Across Multiple Files

Once you have a collection of useful modules — mounting holes, standoffs, snap clips, text labels — you'll want to reuse them across multiple projects without copy-pasting them every time. The solution is a **library file**: a separate `.scad` file containing only module and function definitions, which you can import into any project.

There are two ways to load a library:

**`use <filename.scad>`** — imports only the module and function **definitions** from the file. Any top-level geometry statements in the file (bare `cube()`, `cylinder()`, etc.) are _not_ executed. This is almost always what you want: you want the tools, not any leftover test geometry the library file might contain.

**`include <filename.scad>`** — executes the **entire file**, including any top-level geometry statements. If the library file has a `cube([10,10,10]);` at the top level, that cube will appear in your model. Use this sparingly and intentionally.

> [!NOTE]
> `use <file.scad>` imports only module/function **definitions** — top-level geometry in the file is ignored. `include <file.scad>` executes the **entire file** including any top-level geometry. Prefer `use` for libraries to avoid unexpected geometry.

The file with definitions I will use later:

```openscad
// === lib/hardware.scad ===
// A reusable hardware library. Load with: use <../lib/hardware.scad>

{{i:module}} m3_bolt_hole(depth=10, countersink=false) {
  // M3 clearance hole: 3.4mm diameter (ISO standard M3 clearance)
  assert(depth > 0, "m3_bolt_hole: depth must be positive");
  {{i:translate}}([0, 0, -0.001]) {
    cylinder(d=3.4, h=depth + 0.002, $fn=16);
    if (countersink) {
      // Add a countersunk cone for flat-head screws
      {{i:translate}}([0, 0, depth - 2.5])
        cylinder(d1=3.4, d2=7.0, h=3, $fn=32);
    }
  }
}

{{i:module}} m3_standoff({{i:height}}=5, outer_d=6) {
  // Hollow cylindrical standoff with M3 hole through center
  assert({{i:height}} > 2, "m3_standoff: {{i:height}} must be > 2mm");
  {{i:difference}}() {
    cylinder(d=outer_d, h={{i:height}}, $fn=16);
    m3_bolt_hole(depth={{i:height}});  // Modules {{i:can}} call other modules from the library
  }
}
```

I call `use` to import the definitions from the above file without accidentally importing any actual bolts/screws that may exist later on in the file.

```openscad
// === src/main.scad ===
use <../lib/hardware.scad>   // loads definitions; no top-level {{i:geometry}} executes

// Place M3 standoffs at all four corners of a mounting plate
{{i:cube}}([60, 40, 5]);
for (pos = [[5,5], [55,5], [5,35], [55,35]]) {
  {{i:translate}}([pos[0], pos[1], 0])
    m3_standoff({{i:height}}=8);
}
```

### Structuring a Good Library

A well-organized library groups related modules, documents each one, and validates inputs. Here's a template:

```openscad
// ============================================================
// fasteners.scad — Parametric fastener library
// Usage: use <fasteners.scad>
// All dimensions follow ISO metric standards.
// ============================================================

{{i:module}} m3_hole(depth=10) {
  // M3 clearance hole: 3.2mm diameter
  cylinder(r=1.6, h=depth + 0.001, $fn=16);
}

{{i:module}} m4_hole(depth=10) {
  // M4 clearance hole: 4.3mm diameter
  cylinder(r=2.15, h=depth + 0.001, $fn=16);
}

{{i:module}} m3_nut_trap(extra_depth=0) {
  // M3 hex nut trap: 6.4mm across-flats, 2.4mm thick
  cylinder(r=3.2, h=2.4 + extra_depth, $fn=6);  // $fn=6 makes a hexagon
}
```

---

## Step 4 — `for` Loops and Conditionals

### Repeating Geometry with `for`

OpenSCAD's `for` loop iterates over a list or range and creates geometry for each iteration. Each iteration is **independent** — you can't pass values between iterations. But you can create geometry in each one.

Three forms:

`for (variable = list)` — iterates over every element in a list.

`for (variable = [start : end])` — iterates over a range with a step of 1. `[0:5]` gives 0, 1, 2, 3, 4, 5.

`for (variable = [start : step : end])` — iterates over a range with a specified step. `[0:45:315]` gives 0, 45, 90, 135, 180, 225, 270, 315.

```openscad
// Place pegs at four {{i:specific}} positions
peg_positions = [[0,0], [20,0], [40,0], [20,20]];

for (pos = peg_positions) {
  {{i:translate}}([pos[0], pos[1], 0]) cylinder(r=3, h=10, $fn=32);
}

// Place cylinders every 45° around a circle (8 cylinders total)
for (angle = [0 : 45 : 315]) {
  rotate([0, 0, angle])
    {{i:translate}}([20, 0, 0])
      cylinder(r=2, h=5, $fn=16);
}

// Conditional: if show_lid is true, draw a lid
show_lid = true;
if (show_lid) {
  {{i:translate}}([0, 0, 30]) {{i:cube}}([50, 30, 3]);
}
```

**Evenly spacing around a circle:** If you want N objects evenly spaced, the angular step is `360 / N`. For 12 objects, that's 30° each. Use `[0 : 360/N : 360 - 360/N]` to avoid duplicating the first position at 360°.

### Using `for` with Multiple Variables

You can use multiple `for` clauses in a single statement to create grids:

```openscad
// 4×4 grid of cylinders — nested for in a single statement
for (x = [0:3], y = [0:3]) {
  {{i:translate}}([x * 20, y * 20, 0]) cylinder(r=3, h=5, $fn=16);
}
```

This is equivalent to two nested `for` loops but more compact.

---

## Step 5 — Recursive Functions

### Why OpenSCAD Needs Recursion

Most programming languages let you write a loop that accumulates a value: `total = 0; for item in list: total += item`. OpenSCAD doesn't allow this — variables are fixed after parse time. So when you need to compute something iteratively, you use **recursive functions**.

A recursive function is one that calls itself with a smaller version of the problem. Every recursive function has two parts:

**The base case** — the input is simple enough to handle directly, so return an answer without recursing.

**The recursive case** — reduce the problem slightly and call yourself with the smaller version, then combine the result.

### Functions vs. Modules — A Critical Distinction

Before we look at examples, there is an important rule in OpenSCAD that trips up almost every programmer coming from other languages:

**Functions return values (numbers, strings, lists). They cannot create geometry.**

**Modules create geometry. They cannot return values.**

> [!IMPORTANT]
> This is a hard boundary in OpenSCAD: **Functions return values — they cannot create geometry. Modules create geometry — they cannot return values.** A function with a `cylinder()` call inside it won't work, and a module cannot return a value.

```openscad
// FUNCTION — computes and returns a value
// This is a function because it's defined with "function" and uses "="
function factorial(n) = (n <= 1) ? 1 : n * factorial(n - 1);

echo(factorial(5));   // prints 120
echo(factorial(0));   // prints 1

// Another function: Fibonacci sequence
function fib(n) = (n <= 1) ? n : fib(n-1) + fib(n-2);

// Use the function to space pegs with Fibonacci spacing
// fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8, fib(7)=13, fib(8)=21, fib(9)=34
for (i = [2:9]) {
  {{i:translate}}([fib(i) * 4, 0, 0])
    cylinder(r=1.5, h=5, $fn=16);
}

// A useful function: generate N evenly-spaced values {{i:between}} start and stop
function linspace(start, stop, n) =
  (n <= 1)
    ? [start]
    : concat([start], linspace(start + (stop - start) / (n - 1), stop, n - 1));

positions = linspace(0, 50, 6);   // evaluates to [0, 10, 20, 30, 40, 50]
echo("Positions:", positions);

for (p = positions) {
  {{i:translate}}([p, 0, 0]) sphere(r=2, $fn=16);
}
```

### Reading a Recursive Function

The `factorial` function works like this:

- `factorial(5)` → is `n <= 1`? No. → return `5 * factorial(4)`
- `factorial(4)` → is `n <= 1`? No. → return `4 * factorial(3)`
- ...and so on until...
- `factorial(1)` → is `n <= 1`? Yes. → return `1`

Then the chain unwinds: `1 * 2 * 3 * 4 * 5 = 120`.

The ternary expression `(condition) ? value_if_true : value_if_false` is the standard way to write the base-case branch in OpenSCAD functions.

---

## Step 6 — List Comprehensions

### What a List Comprehension Is

A **list comprehension** is a compact way to generate a list by applying an expression to every element of a range or existing list, optionally filtering elements. Instead of writing a loop that builds a list step by step, you describe the entire list in one expression.

The syntax:

```openscad
[for (variable = range_or_list) expression]
[for (variable = range_or_list) if (condition) expression]
```

List comprehensions are OpenSCAD's answer to the fact that you can't use `for` loops to accumulate values. If you need a list of computed values, a comprehension gives you the entire list at once.

```openscad
// Generate heights: [5, 10, 15, 20, 25]
heights = [for (i = [1:5]) i * 5];
echo(heights);   // [5, 10, 15, 20, 25]

// Generate 8 evenly-spaced positions along the X axis
positions = [for (i = [0:7]) [i * 12, 0, 0]];
for (pos = positions) {
  {{i:translate}}(pos)
    cylinder(h = 5 + pos[0] * 0.3, r=3, $fn=16);  // {{i:height}} increases with X position
}

// Filter: generate only even numbers from 0 to 18
evens = [for (i = [0:9]) if (i % 2 == 0) i * 2];
echo(evens);   // [0, 4, 8, 12, 16]

// 2D grid of points — nested comprehension generates a flat list of [x,y,0] vectors
grid = [for (x = [0:3]) for (y = [0:3]) [x * 20, y * 20, 0]];
for (pt = grid) {
  {{i:translate}}(pt) cylinder(r=2, h=8, $fn=16);
}
```

List comprehensions are the preferred way in OpenSCAD to generate lists of positions, sizes, or other computed values that drive the placement of geometry. Master them and you'll be able to generate complex repetitive patterns with very compact code.

---

## Step 7 — Vector Math and Math Functions

### Working with Vectors

Positions and dimensions in 3D space are naturally expressed as vectors — lists of three numbers representing X, Y, and Z. OpenSCAD supports arithmetic directly on vectors, which makes geometric calculations much more readable.

```openscad
v1 = [10, 20, 5];
v2 = [3, 4, 0];

sum    = v1 + v2;    // [13, 24, 5]  — add matching components
diff   = v1 - v2;    // [7,  16, 5]  — subtract matching components
scaled = v1 * 2;     // [20, 40, 10] — multiply {{i:each}} component by a scalar
dot    = v1 * v2;    // 110          — dot product: v1·v2 = 10*3 + 20*4 + 5*0
length = norm(v1);   // ≈ 22.9       — Euclidean length (√(10² + 20² + 5²))
```

### Important Math Functions

```openscad
abs(-5)         // 5    — absolute value
ceil(3.2)       // 4    — round up to nearest integer
floor(3.8)      // 3    — round down to nearest integer
round(3.5)      // 4    — round to nearest integer
max(3, 7, 2)    // 7    — largest of all arguments
min(3, 7, 2)    // 2    — smallest of all arguments
pow(2, 8)       // 256  — 2 raised to the power 8
sqrt(144)       // 12   — square root

// Trigonometry — CRITICAL: {{i:OpenSCAD}} uses DEGREES, not radians
sin(90)         // 1    — sine of 90 degrees
cos(0)          // 1    — cosine of 0 degrees
tan(45)         // 1    — tangent of 45 degrees
atan2(1, 1)     // 45   — arctangent of y/x, safe for all quadrants
```

> [!IMPORTANT]
> OpenSCAD trigonometry uses **degrees, not radians**. `sin(90)` = 1 (correct). If you pass radians by mistake, your geometry will be wildly wrong.

## The `atan2(y, x)` function deserves special attention. When you need to convert a (x, y) position to an angle, the naive approach `atan(y/x)` fails when `x` is zero or negative (wrong quadrant). `atan2(y, x)` handles all cases correctly by taking both components separately

## Step 8 — Controlling Curve Quality with `$fn`, `$fa`, `$fs`

### Why You Need to Think About This

Spheres, cylinders, and circles in OpenSCAD are approximations — they're actually polygons with many flat faces. The more faces, the smoother the curve looks, but the longer the render takes and the larger the file.

**`$fn`** (facets number) — sets the exact number of faces. `$fn=8` gives a rough octagon. `$fn=64` gives a very smooth circle. Setting it on a single shape overrides the global value for that shape only.

**`$fa`** (minimum angle per face) — the smaller this is, the more faces large curves get. Default: 12°.

**`$fs`** (minimum face size in mm) — very small features automatically use more faces. Default: 2 mm.

When all three are specified, OpenSCAD uses whichever produces the _most_ faces.

```openscad
// During development: low $fn for fast rendering
sphere(r=10, $fn=8);     // rough but fast

// For final export: high $fn for smooth curves
{{i:translate}}([30, 0, 0])
  sphere(r=10, $fn=64);  // smooth for {{i:printing}}

// Set globally at the top of a {{i:file}}:
$fa = 5;    // max 5 degrees per face
$fs = 0.5;  // minimum 0.5mm face size (more faces on small features)
```

**Recommended practice:** set `$fn=16` or `$fn=24` during development for fast iteration. Use `$fn=64` or higher for spheres and visible curves in the final exported file. Use `$fn=32` for functional cylindrical features like bolt holes — it's smooth enough for function without being slow to render.

---

## Exercises

**Exercise 3.1:** Write a module `safe_box(w, d, h, wall=2)` that validates all parameters with `assert()` and creates a hollow box. Add a constraint that `wall` must be less than half of the smallest dimension.

**Exercise 3.2:** Create a library file `lib/fasteners.scad` with modules for M2, M3, and M4 bolt holes. Use `use` to load it in a main file and place holes at the four corners of a 60 × 40 mm plate.

**Exercise 3.3:** Write a recursive function `sum_list(lst, i=0)` that returns the sum of all elements in a list. Use it to compute the total volume of a set of cylinders.

**Exercise 3.4 (Advanced):** Use a list comprehension to generate a 5×5 grid of cylinders where each cylinder's height equals `row_index + col_index + 1`. Use `echo()` to verify the maximum and minimum height values.

---

## Quiz — Lesson 3 (15 questions)

1. What is the DRY principle and why is it important in parametric OpenSCAD design?
2. What is the difference between a module and a function in OpenSCAD?
3. What does `include <library.scad>` do differently from `use <library.scad>`? When would you use each?
4. If you write `x = 5;` on line 3 and `x = 10;` on line 20 in the same file, what is the value of `x` everywhere in that file? Why?
5. What does `is_number()` return, and give one example of when to use it in a module.
6. What does the list comprehension `[for (i=[0:5:20]) i*2]` evaluate to?
7. What does the `echo()` function do in OpenSCAD, and where does its output appear?
8. True or False: a function in OpenSCAD can contain a `cylinder()` call and create geometry.
9. How do you specify a default parameter value in an OpenSCAD module? Write an example.
10. What is the ternary operator in OpenSCAD? Write an example that picks a box size based on a `"small"` or `"large"` variable.
11. Write an OpenSCAD `for` loop that places 8 cylinders evenly spaced around a circle of radius 25.
12. What is the difference between `[0:10]` and `[0:2:10]` as OpenSCAD range expressions?
13. Explain why you might use `assert()` in a module rather than relying on the caller to pass correct values.
14. Describe how a recursive function works. What are the two required parts of any recursive function?
15. A library file called `shapes.scad` contains a `module rounded_box(...)` and also a top-level `cube([5,5,5]);`. What happens when you load it with `use`? What happens when you load it with `include`?

---

## Extension Problems (15)

1. Create a `bolts.scad` library with M3, M4, and M5 clearance holes and nut traps. Use it in a test plate with one of each type.
2. Build a parametric pegboard using a `for` loop. Parameters: `cols`, `rows`, `spacing`, `peg_r`, `peg_h`. Every parameter should have an `assert()` validation.
3. Implement a recursive function that generates a Fibonacci sequence up to `n` terms and use it to space objects with Fibonacci distances.
4. Build a module that validates all its inputs using `assert()` and logs informational output with `echo()`. Document when `assert()` halts rendering vs. what `echo()` does.
5. Create two library files — one for mechanical fasteners and one for decorative shapes — and use both in one combined project.
6. Design a parametric gear profile module with `teeth`, `module_size`, and `thickness` parameters. Use `assert()` to validate that the number of teeth is at least 8.
7. Build a "shelf peg" system: a board with N parametrically positioned holes and matching pegs sized to press-fit into them.
8. Use a list comprehension to generate a spiral path of evenly-spaced points and place a small sphere at each point on the spiral.
9. Extend a fastener library with threaded insert pockets for M3, M4, and M5 heat-set inserts, with the insert dimensions as parameters.
10. Write a module that draws a text label with a surrounding rectangular border frame. Parameters: `text_str`, `font_size`, `padding`, `border_thickness`.
11. Build a parametric snap-fit lid for a rectangular box using `for` loops to generate evenly-spaced snap clips around the perimeter.
12. Write a module that takes a list of 3D coordinate vectors as input and draws a connecting chain of cylinders between consecutive points.
13. Create a parametric honeycomb panel module. Parameters: `rows`, `cols`, `cell_r`, `wall_t`, `depth`. Each cell should be a hexagonal through-hole.
14. Research the BOSL2 library [https://github.com/BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2). Find two modules that solve problems you've encountered in this course, and write a documented example using each.
15. Design a comprehensive test suite: build 10 small parametric shapes each specifically testing a different OpenSCAD feature from this lesson. Export them all from one main file that uses a `for` loop.

---

## References and Helpful Resources

- OpenSCAD User Manual — Modules — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/User-Defined_Functions_and_Modules)

- OpenSCAD User Manual — For Loops and Conditionals — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#for_loop)

- BOSL2 Library Documentation — [https://github.com/BelfrySCAD/BOSL2/wiki](https://github.com/BelfrySCAD/BOSL2/wiki)

- OpenSCAD User Manual — Include and Use — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Include_Statement)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../textbooks/Programming_with_OpenSCAD.epub) — Chapters on modules, functions, and libraries
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked examples for parametric architecture
- [BOSL2 GitHub Repository](https://github.com/BelfrySCAD/BOSL2) — Comprehensive parametric library
- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Build workflow reference
  -e

---

# Lesson 4 — AI-Enhanced Verification and Multimodal Feedback

**Estimated Time:** 90–120 minutes  
**Course:** 3D Printing for the Blind

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
# Standard usage — {{i:run}} after every {{i:build}}
3dm {{i:build}}
3dm info

# Request a description from a {{i:specific}} viewing angle
3dm info --view front
3dm info --view top
3dm info --view isometric

# Save the description to a log {{i:file}}
3dm info --{{i:output}} description.txt

# {{i:Windows}} {{i:PowerShell}}
3dm info | Out-File -FilePath description.txt -Encoding UTF8

# {{i:Windows}} CMD
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
# Look for: Bounding Box: [expected width] × [expected depth] × [expected {{i:height}}] mm
# Look for: Volume: [reasonable volume] mm³
```

**Level 2 — Slicer Layer Preview**

Open `build/main.stl` in your slicer (PrusaSlicer, Cura, etc.) and step through layers one at a time. Each layer is a cross-section through your model at a specific height — like slicing a loaf of bread and looking at each slice. This can be taking screenshots and feeding into an AI or using a friend or coworker. This reveals:

- Wall thicknesses that the bounding box can't show
- Internal geometry and cavities
- Whether holes cut all the way through or stop short
- Overhanging geometry that may need supports

The slicer layer view is the best non-physical verification tool available. Use it for anything more complex than a simple box.

**Level 3 — Isolate and Test a Single Module**

If your full model is complex and `3dm info` gives a vague or confusing description, temporarily modify your file to render only the specific module you're trying to verify:

```openscad
// Temporarily comment out everything else, render only {{i:one}} {{i:module}}
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

```plaintext
DESIGN VERIFICATION LOG
Project: phone_stand_v2.scad
Date: 2026-03-10

Feature: USB-C charging slot
  Designed: 9.5mm wide × 3.5mm tall
  Level 1 — Bounding box of isolated slot_module(): 9.5 × 3.5mm ✓
  Level 2 — {{i:Slicer}} {{i:layer}} view: rectangular hole visible at Z=5–8.5mm ✓
  Level 3 (AI): "rectangular cutout, approximately 10mm wide" (too vague for precision)
  Level 4 — {{hi:Calipers}}Calipers after {{i:first}} {{i:test}} {{i:print}}: 9.4mm wide (0.1mm under — acceptable) ✓

Feature: Rubber foot posts (4×)
  Designed: 3.0mm diameter × 2.0mm tall
  Level 1 — Bounding box of isolated foot_post(): 3.0 × 3.0 × 2.0mm ✓
  Level 2 — {{i:Slicer}}: four small protrusions visible on bottom face ✓
  Level 3 (AI): "four small round protrusions" ✓
  Level 4 — Not yet printed
```

This log takes a few minutes to fill in, and it demonstrates exactly the kind of professional thinking that certification assessments reward.

---

## Step 4 — AI-Generated OpenSCAD Code: How to Verify It

### AI Can Write Code, but You Must Check It

AI tools like Claude or ChatGPT can write OpenSCAD code from a plain-English description. This is a genuinely useful way to get a first draft of a design quickly. But **AI-generated OpenSCAD code is frequently wrong in subtle ways.** The code will look plausible, it may even build without errors, and it can still produce geometry that doesn't match your intent or that will fail in the slicer.

The most common errors AI makes in OpenSCAD (As of April 2026 using Anthropic Claude, OpenAI ChatGPT, and Google Gemini):

**Forgetting the 0.001 co-planar rule.** The AI writes a `difference()` with touching surfaces and omits the critical offset. The code looks correct, but the cut may produce rendering artifacts or non-manifold geometry.

**Python-style variable reassignment.** The AI writes `x = 5; x = x + 1;` or `x = 5; x = x++;` as if variables work like Python, which doesn't work in OpenSCAD (remember from Lesson 3: last assignment wins at parse time).

**Wrong transform order.** The AI reverses the order of `translate()` and `rotate()`, producing geometry in the wrong location. In OpenSCAD, transforms are applied in reverse order — `rotate()` then `translate()` is not the same as `translate()` then `rotate()`.

**Non-manifold geometry.** The code looks correct but produces a solid that isn't a properly sealed, watertight mesh. Slicers will reject it or produce incorrect layers.

**Wrong clearance values.** The AI invents plausible-sounding tolerances (like "0.1 mm clearance") that don't match your specific printer. Tolerances must be calibrated — they can't be looked up in a general reference.

### The AI Code Verification Checklist

Apply these checks to every piece of AI-generated OpenSCAD code before treating it as correct:

```plaintext
AI CODE VERIFICATION CHECKLIST
Run {{i:each}} check in order. Do not proceed if a check fails.

[ ] 1. SYNTAX
      3dm {{i:build}} → does it compile without errors?

[ ] 2. DIMENSIONS
      3dm info → does the bounding box match what {{i:you}} asked for?

[ ] 3. BOOLEAN OPERATIONS
      Does every {{i:difference}}() use the 0.001 offset rule?
      Look for: {{i:translate}}([*, *, 0]) inside {{i:difference}}()
      Should be: {{i:translate}}([*, *, -0.001])

[ ] 4. PARAMETER BEHAVIOR
      Change {{i:each}} {{i:parameter}} to an extreme value (minimum, maximum, zero).
      Does the model change correctly? Are there any edge cases that break it?

[ ] 5. MANIFOLD CHECK
      Open {{i:build}}/main.stl in your slicer.
      Are there any {{i:geometry}} warnings or errors?

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

```plaintext
Review my {{i:OpenSCAD}} {{i:code}}.
```

This gives the AI almost no information about what to look for. The response will be generic and may miss exactly the issues you care about.

**Strong prompt:**

```plaintext
I have an {{i:OpenSCAD}} model of a {{i:parametric}} mounting bracket with two M3 bolt holes.
Parameters: width=40, {{i:height}}=30, depth=8, hole_r=3.2.

Please review this {{i:code}} for:
1. Correct use of the 0.001 offset rule in all {{i:difference}}() operations
2. Manifold-safe {{i:geometry}} (no co-planar faces)
3. Whether hole_r=3.2mm is the correct M3 clearance hole diameter per ISO standards
4. {{i:Any}} {{i:parameter}} combinations that could produce invalid {{i:geometry}}

For {{i:each}} issue found, provide:
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
// Top-level {{i:design}} constraints
// These {{i:run}} {{i:before}} any {{i:geometry}} is computed.
width  = 30;
{{i:height}} = 10;
wall_t = 2;

assert(width  >= 10, str("width must be >= 10mm for structural integrity, got: ", width));
assert({{i:height}} >= 5,  str("{{i:height}} must be >= 5mm to fit standard hardware, got: ", {{i:height}}));
assert(wall_t >= 1.5, str("wall_t must be >= 1.5mm to {{i:print}} reliably with 0.4mm nozzle, got: ", wall_t));
assert(wall_t < width / 2,
  str("wall_t (", wall_t, ") must be less than half of width (", width/2, ")"));

// Geometry — guaranteed to be within valid bounds by the asserts above
{{i:difference}}() {
  {{i:cube}}([width, width, {{i:height}}]);
  {{i:translate}}([wall_t, wall_t, -0.001])
    {{i:cube}}([width - 2*wall_t, width - 2*wall_t, {{i:height}} + 0.002]);
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

- OpenSCAD User Manual — Manifold and Geometry Validation — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language)

- Anthropic Prompt Engineering Guide — [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)

- Data Privacy — Review your AI provider's terms of service and data retention policy before submitting proprietary design files.

- NIST AI Risk Management Framework (AI RMF 1.0) — [https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf)

### Supplemental Resources

- 3DMake GitHub Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)
- Anthropic Prompt Engineering Overview — [https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- NIST AI RMF — [https://airc.nist.gov/Home](https://airc.nist.gov/Home)
- PrusaSlicer Documentation — [https://docs.prusa3d.com/en/](https://docs.prusa3d.com/en/)
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 4 are included below. You do not need to open any additional files._

---

## Appendix A: Dice, Dice, Dice — Extension Project

**Estimated time:** 3–6 hours

### Overview

This extension project connects the verification and AI-assisted feedback skills from Lesson 4 to a physical object where design precision is directly measurable: a six-sided die. A fair die is one of the most demanding manufactured objects you can design — it requires uniform geometry, controlled mass distribution, and a randomness that can be tested statistically. The design is straightforward. The verification is where the real learning happens.

This project also inverts the lesson's AI-skepticism lesson in a productive way: it uses AI as part of the design ideation process, then requires _you_ to verify every claim with physical testing and statistical analysis. A die that the AI describes as "balanced and symmetric" should be tested with 100+ real rolls.

> [!IMPORTANT]
> If real world data disagrees with an AI generated description, the data wins.

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
// All critical dimensions are top-level {{i:parameters}}.
// Change these to {{i:create}} your three variants.

// ---- Parameters ----
die_size   = 16;     // mm — overall {{i:cube}} side length
wall       = 2.0;    // mm — wall thickness (increase for more durability)
pip_r      = 1.0;    // mm — radius of pip hemispheres
pip_depth  = 0.6;    // mm — how deep pips are pressed {{i:into}} the face
corner_r   = 1.2;    // mm — chamfer/rounding radius on die edges
$fn        = 32;     // curve resolution

// Verify printability
assert(wall >= 1.2,
  str("wall (", wall, "mm) is below minimum printable thickness (1.2mm)"));
assert(pip_r > 0 && pip_r < die_size / 6,
  str("pip_r (", pip_r, "mm) is unreasonable for this die size"));
assert(pip_depth < wall,
  str("pip_depth (", pip_depth, "mm) must be less than wall (", wall, "mm)"));

// ---- Pip Positions (for {{i:each}} face, relative to face center) ----
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
{{i:module}} pip(depth=pip_depth, r=pip_r) {
  sphere(r=r, $fn=16);
}

// ---- Pips on a face (2D positions, extruded onto face surface) ----
// This {{i:module}} places pips at the given positions on the +Z face of the die.
{{i:module}} place_pips(positions, face_z, r=pip_r, depth=pip_depth, spacing=pip_spacing) {
  for (pos = positions) {
    {{i:translate}}([die_size/2 + pos[0]*spacing,
               die_size/2 + pos[1]*spacing,
               face_z + r - depth])
      pip(depth, r);
  }
}

// ---- Die Body ----
{{i:module}} die_body() {
  // Simple {{i:cube}} — replace with minkowski sphere for rounded edges
  {{i:cube}}([die_size, die_size, die_size]);
}

// ---- Full Die with Pips Subtracted ----
{{i:module}} die() {
  {{i:difference}}() {
    die_body();

    // Face +Z (top): 1 pip
    place_pips(face_1_pips, die_size);
    // Face -Z (bottom): 6 pips (opposite of 1)
    mirror([0, 0, 1])
      place_pips(face_6_pips, 0);
    // Face +X (right): 2 pips (opposite of 5)
    rotate([0, -90, 0]) {{i:translate}}([0, 0, -die_size])
      place_pips(face_2_pips, die_size);
    // Face -X (left): 5 pips
    rotate([0, 90, 0])
      place_pips(face_5_pips, die_size);
    // Face +Y (front): 3 pips (opposite of 4)
    rotate([90, 0, 0]) {{i:translate}}([0, 0, -die_size])
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
9. If you increase infill from 15% to 50%, what is the primary effect? (A) Dramatically longer print time, same weight (B) Significantly longer print time and higher weight (C) Same weight, different surface finish.
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
// FLAWED — rounded_cube() does not exist in {{i:OpenSCAD}}. Somewhere on {{i:GitHub}} someone has developed a personal project with that {{i:name}}
{{i:module}} enclosure() {
  rounded_cube(size=[60, 40, 20], r=3);
  {{i:translate}}([10, 10, 0]) cylinder(h=20, r=2, center=false);
}
enclosure();
```

**Fixed version** — use `minkowski()` with a `sphere()` instead:

```openscad
// CORRECT — native minkowski approach for rounded corners
{{i:module}} rounded_box(x=60, y=40, z=20, r=3) {
  minkowski() {
    {{i:cube}}([x - 2*r, y - 2*r, z - 2*r]);
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
// FLAWED — bottom faces are coplanar (Z=0 on both shapes)
{{i:difference}}() {
  {{i:cube}}([30, 30, 10]);
  {{i:translate}}([5, 5, 0]) {{i:cube}}([20, 20, 10]);
}
```

**Fixed version** — extend the subtracted shape by 0.001 mm past each coplanar face:

```openscad
// CORRECT — 0.001 overshoot on both Z faces
{{i:difference}}() {
  {{i:cube}}([30, 30, 10]);
  {{i:translate}}([5, 5, -0.001]) {{i:cube}}([20, 20, 10 + 0.002]);
}
```

_What to learn from this:_ Any time a `difference()` subtraction should go all the way through a face, add a 0.001 mm overshoot. This is a mechanical rule, not an approximation — apply it consistently.

---

**Example 3: Wrong Transform Order (Misplaced Holes)**

Rotate-then-translate and translate-then-rotate produce different results. AI often gets this wrong.

```openscad
// FLAWED — rotate applied {{i:before}} {{i:translate}}; hole ends up in wrong position
{{i:module}} bracket(width=40, {{i:height}}=20, th=3, hole_r=3) {
  {{i:difference}}() {
    {{i:cube}}([width, th, {{i:height}}]);
    {{i:translate}}([width/2, th/2, {{i:height}}/2])
      rotate([90, 0, 0])
        cylinder(h=th, r=hole_r, center=true);
  }
}
bracket();
```

**Fixed version** — the translate sets the center, then the rotate orients correctly:

```openscad
// CORRECT — {{i:translate}} to center, then rotate {{i:into}} the correct plane
{{i:module}} bracket(width=40, {{i:height}}=20, th=3, hole_r=3) {
  {{i:difference}}() {
    {{i:cube}}([width, th, {{i:height}}]);
    {{i:translate}}([width/2, th/2, {{i:height}}/2])
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
// FLAWED — {{i:OpenSCAD}} does not allow reassignment of {{i:variables}}
width = 60;
width = width + 10; // This silently uses the LAST assignment; the {{i:first}} is ignored
{{i:cube}}([width, 20, 10]);
```

**Fixed version** — use distinct names for derived values:

```openscad
// CORRECT — derive a {{i:new}} variable from the base value
base_w  = 60;
final_w = base_w + 10;
{{i:cube}}([final_w, 20, 10]);
```

_What to learn from this:_ In OpenSCAD, a variable that appears assigned twice will use the last assignment for the entire file — including places that appear before the second assignment in the code. This is a source of subtle bugs. Always use a new name for derived values.

---

**Example 5: Unsafe Parameter Limits (Geometry Inversion)**

AI-generated modules often lack parameter validation. When given edge-case values, the geometry inverts silently.

```openscad
// FLAWED — no validation; wall=12 on a w=20 box inverts the {{i:geometry}}
{{i:module}} box(w=30, d=30, h=20, wall=3) {
  {{i:difference}}() {
    {{i:cube}}([w, d, h]);
    {{i:translate}}([wall, wall, -0.001])
      {{i:cube}}([w - 2*wall, d - 2*wall, h + 0.002]);
  }
}
box(w=20, d=20, h=15, wall=12); // wall larger than half the width — silent failure
```

**Fixed version** — add `assert()` to catch invalid combinations:

```openscad
// CORRECT — assert() catches invalid {{i:parameters}} {{i:before}} {{i:geometry}} is computed
{{i:module}} box(w=30, d=30, h=20, wall=3) {
  assert(w > 0 && d > 0 && h > 0, "All dimensions must be positive");
  assert(wall > 0 && wall < min(w, d) / 2,
    str("wall (", wall, "mm) must be less than min(w,d)/2 = ", min(w,d)/2, "mm"));
  {{i:difference}}() {
    {{i:cube}}([w, d, h]);
    {{i:translate}}([wall, wall, -0.001])
      {{i:cube}}([w - 2*wall, d - 2*wall, h + 0.002]);
  }
}
box(w=20, d=20, h=15, wall=12); // will halt with a clear {{i:error}} message
```

_What to learn from this:_ `assert()` is your safety net for parametric designs. Any relationship between parameters that could produce invalid geometry should have an `assert()` checking it. This is especially important for designs you share with others.

---

**Example 6: Hallucinated Text Function + Misplaced Emboss**

Two compound errors: a function that doesn't exist (`fillet_text()`), and a text position that extends outside the model face.

```openscad
// FLAWED — fillet_text() does not exist; second {{i:translate}} puts {{i:text}} outside the body
{{i:difference}}() {
  {{i:cube}}([80, 40, 6]);
  {{i:translate}}([0, 0, 0])
    fillet_text("RYAN", size=10, radius=1); // bogus function
  {{i:translate}}([70, 20, 3])
    linear_extrude(2) {{i:text}}("RYAN", size=10); // misplaced — extends off the edge
}
```

**Fixed version** — use standard `text()` with `linear_extrude()`, centered on the face:

```openscad
// CORRECT — centered debossed {{i:text}} {{i:using}} standard {{i:OpenSCAD}} functions
{{i:module}} top_deboss(txt="RYAN", size=10, depth=1) {
  {{i:translate}}([40, 20, 6 + 0.001])  // position at center of top face
    linear_extrude({{i:height}}=depth)
      {{i:text}}(txt, size=size, halign="center", valign="center");
}

{{i:difference}}() {
  {{i:cube}}([80, 40, 6]);
  top_deboss();
}
```

_What to learn from this:_ Text positioning requires knowing the face center, not just a rough location. Use `halign="center"` and `valign="center"` with a translate to the face center. The 0.001 mm overshoot on the Z translate ensures the subtracted text breaks through the face cleanly.

---

**Example 7: Zero Clearance on a Fitted Lid**

AI-generated box and lid designs often omit clearance, making the lid impossible to remove after printing.

```openscad
// FLAWED — zero clearance means the lid walls will fuse to the box walls
{{i:module}} box_outer(sz=[60, 40, 20], wall=2) { {{i:cube}}(sz); }
{{i:module}} box_inner(sz=[60, 40, 20], wall=2) { {{i:cube}}([sz[0]-2*wall, sz[1]-2*wall, sz[2]]); }

{{i:difference}}() {
  box_outer();
  {{i:translate}}([2, 2, -0.001]) box_inner(); // clearance = 0; lid won't come off
}
```

**Fixed version** — add a clearance parameter to the socket dimensions:

```openscad
// CORRECT — clearance creates the physical gap needed for the lid to fit and move
{{i:module}} box_with_clearance(w=60, d=40, h=20, wall=2, clr=0.25) {
  assert(clr > 0 && clr < 1.0, "Clearance should be {{i:between}} 0 and 1mm for most FDM fits");
  {{i:difference}}() {
    {{i:cube}}([w, d, h]);
    {{i:translate}}([wall + clr, wall + clr, -0.001])
      {{i:cube}}([w - 2*(wall + clr), d - 2*(wall + clr), h + 0.002]);
  }
}
box_with_clearance();
```

_What to learn from this:_ FDM-printed parts that are designed to fit together always need clearance. A nominal 0mm gap at design time produces a stuck or impossible fit after printing. Typical clearance for a slip fit is 0.2–0.3 mm; for a press fit, 0.0–0.1 mm. This topic is covered in depth in Lesson 8.

---

# Lesson 5: Safety Protocols and the Physical Fabrication Interface

**Estimated Time:** 90–120 minutes  
**Course:** 3D Printing for the Blind

---

## Before You Start

Every lesson so far has been entirely digital: code on a screen, commands in a terminal, virtual geometry. Now we're moving into the physical world. 3D printers are machines that get very hot, draw substantial electrical current, and produce airborne particles and vapors. This lesson exists because these machines are genuinely safe when you know what you're doing, and genuinely dangerous when you don't.

The good news is that 3D printing safety is not complicated. The hazards are well-understood, the mitigations are straightforward, and the incidents that do happen are almost always caused by ignoring simple rules. The goal of this lesson is to make sure you know the rules and understand _why_ they exist — not just as things to memorize for a quiz, but as habits you can apply in any shop or makerspace you ever work in.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Identify and apply the Hierarchy of Controls for 3D printing hazards
- Apply fire, electrical, and fume safety protocols for FDM printing
- Understand filament-specific hazards and safe material handling
- Follow a safe printer startup, monitoring, and shutdown sequence
- Select appropriate filament materials for given projects
- Use pre-flight build scripts to estimate cost before committing to a print
- Design parts that minimize safety risks during printing

---

## Concept 1: The Hierarchy of Controls

### Why We Don't Just "Be Careful"

When it comes to workplace and lab safety, the common advice "just be careful" is the least effective approach available. It relies entirely on individual attention, and attention is inconsistent — everyone gets tired, distracted, or hurried sometimes. Professional safety systems are designed to work even when individual attention lapses.

The **Hierarchy of Controls** is a framework developed by OSHA (the U.S. Occupational Safety and Health Administration) and adopted worldwide. It ranks safety strategies from most effective to least effective, and it says: apply the most effective strategy you can afford, and layer additional strategies below it.

The five levels, from most to least effective:

**1. Elimination** — Remove the hazard entirely. If a filament requires a sealed enclosure with active filtration and you're in an open classroom, the safest choice is simply not to use that filament. If a print requires supports made from difficult material, redesign the print to not need supports. Elimination always wins.

**2. Substitution** — Replace the hazard with a less dangerous one. Use PLA instead of ABS. Use a PEI spring steel bed instead of a glass bed that can shatter. Substitution keeps the functionality while reducing the risk.

**3. Engineering Controls** — Build protection into the environment. A fume enclosure with a HEPA + activated carbon filter. Thermal runaway protection in the printer firmware. A smoke detector mounted above the printer. These controls work automatically without relying on human behavior.

**4. Administrative Controls** — Rules, procedures, and training. The startup checklist, the monitoring schedule, the training program you're in right now. Administrative controls are less reliable than engineering ones because they depend on people following rules consistently.

**5. Personal Protective Equipment (PPE)** — Gloves, goggles, respirators. PPE is the last resort — it protects one person, it can fail or be used incorrectly, and it doesn't actually remove the hazard. Always apply higher-level controls first and use PPE as a supplement.

**The key insight:** many beginners think that putting on gloves and goggles makes them safe. In the hierarchy, PPE is the weakest protection. Real safety comes from eliminating or substituting hazards, and then engineering the remaining risks away. PPE is what you use when those options aren't available.

---

## Step 1 — Fire and Electrical Safety

### The Golden Rule

**Never leave an FDM printer completely unattended during the first layer.** Print failures most often happen at the start — the first layer either bonds to the bed or it doesn't. If it doesn't bond and nobody is watching, the printer may continue for hours, dragging filament across the bed in a mess called "spaghetti" that can tangle around the print head, cause jams, or — in rare worst cases — create a fire hazard.

Be present and watching for at least the first 15 minutes of every print. For long prints, check in every 30 minutes or set up remote monitoring via OctoPrint or a camera.

### Fire Hazards

Fire risk in FDM printing comes from two main sources. First, **electrical failure**: wiring that cracks from repeated movement, loose connections at terminal blocks, or a faulty temperature sensor that allows the heater to run without limit. Second, **filament accumulation**: plastic that melts and collects on the hot nozzle can sometimes ignite if the build-up becomes large enough.

Fire safety protocols:

- Keep a **Class ABC fire extinguisher** within arm's reach of every printer
- Never run the printer while away from the building
- Keep the print area clear of flammable materials: paper, fabric, solvent containers
- Mount a **smoke detector** directly above the printer so rising smoke reaches it quickly
- Know where the power switch is _before_ you start — cutting power is the first response to any emergency
- If smoke appears: cut power immediately, do not try to continue the print, and report the incident

### Electrical Safety

- Use a **surge protector** to protect the printer's control board from voltage spikes
- Inspect all wiring periodically, especially the flexible cable bundle that runs to the heated bed — this bundle flexes with every print and can crack the insulation over time
- Never open the power supply enclosure or work on any electrical component while the printer is plugged in. The power supply contains mains voltage (120V or 240V) that can kill.

> [!WARNING]
> **Thermal runaway protection must be enabled.** This firmware feature monitors the temperature sensor and shuts the heater off if the temperature climbs unexpectedly or the sensor fails. A printer without thermal runaway protection can overheat catastrophically. Never disable this protection. If your printer doesn't have it, do not use it.

---

## Step 2 — Fume Safety

### Why Fumes Matter

All FDM printing produces some airborne emissions. These fall into two categories: **particulates** (tiny plastic particles, especially ultrafine particles below 0.1 microns) and **VOCs** (volatile organic compounds — chemical vapors that off-gas from the hot plastic). Both can affect respiratory health with repeated exposure, and the risk varies significantly by material.

| Material         | Fume Risk  | Required Mitigation                                                                                 |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| PLA              | Low        | Good room ventilation (open window or HVAC on)                                                      |
| PETG             | Low–Medium | Active ventilation; avoid enclosed spaces without air exchange                                      |
| ABS              | High       | Dedicated fume enclosure with HEPA + activated carbon filter required; NOT safe for open classrooms |
| ASA              | High       | Same as ABS                                                                                         |
| TPU              | Medium     | Active ventilation; keep nozzle temperature at the minimum needed                                   |
| Resin (SLA/MSLA) | Very High  | Full enclosure; nitrile gloves; UV-blocking goggles; no open-workspace use                          |

> [!WARNING]
> ABS and ASA are **NOT safe for open classrooms** without a dedicated fume enclosure with HEPA + activated carbon filtration. Do not print ABS or ASA in any space without proper exhaust infrastructure.

### The Safe Choice: PLA

PLA is generally considered the safer choice for classroom 3D printing when there is no dedicated HVAC system because it prints at lower temperatures and typically releases fewer and less concerning airborne emissions than PET-G or ABS. ABS is the main material of concern in this comparison: when heated, it can release higher levels of ultrafine particles and volatile organic compounds, including styrene, which is associated with irritation and is a poor fit for enclosed learning spaces. PET-G is often viewed as a middle-ground material, but it still prints hotter than PLA and can produce noticeable fumes and particles, especially during long print jobs or if temperatures are set too high.

PLA also tends to have a milder odor and is less likely to create the kind of air-quality complaints that matter in classrooms, libraries, makerspaces, and other shared indoor environments. That does not mean PLA is fume-free or completely harmless. Any filament printing process creates some airborne particles, and good practice still includes ventilation, keeping printers away from students’ breathing zone, and avoiding unnecessary time around active prints. But if the choice is between PLA, PET-G, and ABS in a space without dedicated fume mitigation, PLA is usually the lowest-risk option for routine educational use.

For that reason, PLA is often the default recommendation for schools and other lightly ventilated settings: it is easier to print, requires less heat, and presents fewer air-quality concerns than PET-G or ABS. ABS is usually the least appropriate option in such spaces because of its emissions profile, while PET-G may be acceptable in some cases but still does not match PLA for fume safety. In a classroom without dedicated HVAC, PLA is typically the most practical and safety-conscious filament choice.

> [!TIP]
> **PLA is the safest classroom filament available.** Made from bio-derived sources, it prints at low temperatures (190–220°C) and produces the lowest emissions of any common FDM material. Default to PLA for any project where mechanical requirements don't specifically demand something else.

### What "Good Ventilation" Actually Means

"Good ventilation" means that the air in the room is actively exchanging with outside air. This is not the same as "a window that's crackable." Active ventilation means:

- A window open with a fan pulling air through the room, or
- An HVAC system that is running and moving air, not just recirculating internal air

If you're printing ABS or ASA, room ventilation is not sufficient. You need an enclosure with a filtered exhaust system — a box around the printer with an internal fan that pulls fumes through a HEPA filter (for particles) and an activated carbon filter (for VOCs) before exhausting outside or into a large ventilated space.

---

## Step 3 — Material Selection

### Choosing the Right Filament

The right material for a project depends on what the part needs to do and where it will be used. This table gives you a practical guide:

| Filament | Strength    | Flexibility       | Heat Resistance          | Print Difficulty | Best Uses                                                                   |
| -------- | ----------- | ----------------- | ------------------------ | ---------------- | --------------------------------------------------------------------------- |
| PLA      | Medium      | Rigid             | Low (softens at 50–60°C) | Easy             | Prototypes, display models, artwork, educational parts                      |
| PETG     | Medium-High | Slightly flexible | Medium (75–80°C)         | Easy–Medium      | Functional parts, food-adjacent applications, water contact                 |
| ABS      | High        | Semi-rigid        | High (85–100°C)          | Hard             | Hot environments, automotive interiors, post-processing (acetone smoothing) |
| TPU      | Medium      | Very flexible     | Medium                   | Medium           | Gaskets, grips, phone cases, flexible joints                                |
| Nylon    | Very High   | Flexible          | High                     | Hard             | Mechanical parts, gears, load-bearing functional parts                      |
| ASA      | High        | Semi-rigid        | Very High (90°C+)        | Hard             | Outdoor use, UV-exposed parts                                               |

### What "Hard" to Print Actually Means

When a material is listed as "hard," that means it requires one or more of the following: a higher nozzle temperature, a heated enclosure to prevent warping, special bed adhesion (glue stick, hairspray, specialized plates), slower print speeds, or more careful tuning of retraction settings. Starting with a difficult material before you have PLA dialed in is a recipe for frustration and wasted filament.

> [!TIP]
> **The practical material rule:** use PLA until you have a specific functional reason not to. Need better heat resistance? Try PETG next. Reserve ABS and specialty materials for when you have the appropriate safety infrastructure.

### PLA and Sustainability — A Realistic Picture

PLA is often marketed as "biodegradable" and "eco-friendly." These claims deserve some scrutiny. PLA _is_ bio-derived — made from fermented plant starch rather than petroleum — which reduces its carbon footprint somewhat compared to petroleum plastics. But PLA only biodegrades under very specific industrial composting conditions (temperatures above 58°C sustained for weeks). It does not break down in a home compost bin or a landfill.

The most sustainable approach to FDM printing is not any particular material — it's designing durable parts that don't need to be reprinted, using the minimum infill that meets your mechanical requirements, and avoiding test prints you don't need (which is exactly why this course emphasizes verification before printing).

---

## Step 4 — Estimating Print Cost Before You Print

### Always Estimate First

> [!TIP]
> Always estimate filament cost and print time **before** sending a model to print. For small parts the cost is trivial, but large high-infill parts can cost several dollars and several hours — time you can't recover if the part needs revision.

The estimate formula from Lesson 1 applies here:

```plaintext
mass (grams)  = (volume_mm³ ÷ 1000) × filament_density_g_per_cm³
cost ($)      = mass × (spool_price_$ ÷ spool_weight_g)
```

The preflight scripts below automate this calculation and require you to confirm before proceeding.

### Pre-Flight Cost Check Scripts

**Linux / macOS (bash):**

```bash
#!/bin/bash
set -e

3dm {{i:build}}
INFO=$(3dm info)
echo "$INFO"

# Extract volume from 3dm info {{i:output}}
VOLUME=$(echo "$INFO" | grep -oP '(?<=Volume:\s)\d+\.?\d*')
if [ -z "$VOLUME" ]; then
  echo "ERROR: Could not parse volume from 3dm info {{i:output}}"
  exit 1
fi

DENSITY=1.24    # g/cm³ — PLA density (change for other materials)
COST_PER_G=0.02 # $/g  — adjust for your spool price

MASS=$(echo "$VOLUME $DENSITY" | awk '{printf "%.1f", ($1/1000)*$2}')
COST=$(echo "$MASS $COST_PER_G" | awk '{printf "%.2f", $1*$2}')

echo ""
echo "=== PRE-FLIGHT SUMMARY ==="
echo "Volume:   ${VOLUME} mm³"
echo "Mass:     ${MASS} g  (PLA @ ${DENSITY} g/cm³)"
echo "Filament: \$${COST}  (@ \$${COST_PER_G}/g)"
echo ""
echo "Proceed? [y/N]"
read CONFIRM
if [ "$CONFIRM" != "y" ]; then
  echo "Cancelled."
  exit 0
fi
echo "Approved. Send to slicer."
```

**Windows (PowerShell):**

```powershell
3dm {{i:build}}
$info = 3dm info
Write-Host $info

$volumeMatch = $info | Select-String -Pattern "Volume:\s+([\d.]+)"
if (-not $volumeMatch) { Write-Error "Could not parse volume"; exit 1 }
$volume = [double]$volumeMatch.Matches.Groups[1].Value

$density  = 1.24    # PLA
$costPerG = 0.02
$mass     = ($volume / 1000) * $density
$cost     = $mass * $costPerG

Write-Host ""
Write-Host "=== PRE-FLIGHT SUMMARY ==="
Write-Host ("Volume:   {0:F0} mm3" -f $volume)
Write-Host ("Mass:     {0:F1} g  (PLA)" -f $mass)
Write-Host ("`$Filament: {0:F2}" -f $cost)
Write-Host ""
$confirm = Read-Host "Proceed? [y/N]"
if ($confirm -ne "y") { Write-Host "Cancelled."; exit 0 }
Write-Host "Approved. Send to slicer."
```

---

## Step 5 — The Printer Startup Checklist

### Before Every Print Session

Use this checklist before starting any print. It takes about 5 minutes and prevents the most common causes of print failure.

```markdown
PRINTER STARTUP CHECKLIST
□ Bed level verified (run auto-level, or manually check at all four corners)
□ Build plate clean (wipe with IPA — remove finger oils and dust)
□ Nozzle cleared (cold pull if returning from more than a day idle)
□ Filament loaded and extruding cleanly (run 50mm manual extrude purge)
□ First layer height set correctly (0.2mm gap typical for 0.4mm nozzle)
□ Print fan operational (watch it spin up at the start)
□ Workspace clear of flammable materials
□ You will remain present for the first 15 minutes of the print
□ Power switch is accessible and you know where it is
```

### Why Each Item Matters

> [!IMPORTANT]
> **Bed leveling is the single most critical setting for successful prints.** A bed that is just 0.1 mm too high or too low can cause every print to fail. Always verify leveling before each print session. Most modern printers have automatic bed leveling (ABL), but you should still understand how it works and check that it's running correctly.

**Clean build plate** prevents adhesion failures. Skin oils from touching the plate are invisible but dramatically reduce how well plastic sticks. An isopropyl alcohol (IPA) wipe before every print takes 30 seconds and prevents a common failure mode.

**Cold pull (nozzle clearing)** removes degraded filament from inside the nozzle. Heat the nozzle to print temperature, push some filament through, then let it cool to about 90°C and pull the filament out firmly. The end of the pulled filament should bring out any debris or degraded material from inside the hot end.

**Filament loaded correctly** means the extruder is feeding without clicking or skipping, the filament is straight in the Bowden tube (if present), and the purge line at the start of the print flows smoothly with no bubbles or gaps.

---

## Step 6 — Monitoring During Prints

### What to Watch For

Checking in periodically during a print takes only a few seconds each time and lets you catch problems early. A problem caught at layer 10 is a minor inconvenience. The same problem discovered at layer 100 means you've wasted 90 layers of material and print time.

> [!WARNING]
> **Spaghetti** is the most common print failure: the part lifts off the bed and the nozzle drags filament through the air. If you see this, **pause or cancel the print immediately** — catching it at layer 10 is a minor inconvenience; catching it at layer 100 wastes 90 layers of material and time.

> [!CAUTION]
> **Layer shifts** (horizontal displacements in the print) usually indicate a mechanical problem — belt tension, loose pulley, or a motor skipping steps. Cancel the print and diagnose the cause before trying again.

**Nozzle clog** — the extruder starts making a clicking or ticking sound as the gear slips because material isn't flowing. Filament may start grinding. Pause the print and clear the clog before restarting.

**Stringing** — thin wisps of filament connecting different parts of the print. Usually a retraction or temperature setting issue rather than an emergency, but it may require post-processing cleanup.

> [!WARNING]
> **Smoke is an immediate emergency.** Cut power immediately. Do not attempt to continue or diagnose while the printer is running. Notify your instructor. Do not restart the printer until the cause has been fully identified and corrected.

---

## Step 7 — Safe Shutdown and Part Removal

### The Right Way to End a Print

A print ending doesn't mean the work is done. Follow these steps after every print:

> [!CAUTION]
> **Wait for the nozzle to cool below 50°C** before reaching anywhere near the hot end. The nozzle can reach 200°C+ during printing and retains heat for several minutes after shutdown.

1. **Wait for the nozzle to cool below 50°C** before reaching anywhere near the hot end.
2. **Wait for the bed to cool below 30°C** before removing the part. Parts printed on a hot bed can warp slightly if removed while the bed is still warm. Many PEI-coated beds release parts naturally as they cool — you may not even need tools.
3. **Use a spatula or palette knife** to gently separate the part from the build plate. Never force parts off with your fingers — the edge of a part against a spring steel bed can cut skin. Apply the spatula at a low angle and use a gentle rocking motion.

> [!NOTE]
> **Store filament in a sealed bag with desiccant.** Filament absorbs moisture (hygroscopy), causing bubbling, popping sounds, and reduced mechanical properties during extrusion. This is especially critical for Nylon and PETG. A silica gel desiccant packet in a ziplock bag is sufficient for short-term storage.

---

## Concept 2: Design for Printability and Safety

### Your Design Choices Affect Safety

The decisions you make in OpenSCAD directly affect how safe and reliable the printing process will be. Good design doesn't just mean a part that looks right — it means a part that prints reliably without requiring dangerous materials, excessive supports, or heroic printer tuning.

**Minimize overhangs.** Any geometry that extends more than about 45° from vertical needs supports — temporary scaffolding that the printer adds automatically. Supports increase print time, use more material, often leave rough marks where they're removed, and increase the risk of print failure due to tangled support material. Good design reorients parts or modifies geometry to eliminate or reduce overhangs.

> [!CAUTION]
> **Minimum wall thickness for a 0.4 mm nozzle:** walls below 0.8 mm (2× nozzle width) may not print reliably, and walls below ~0.8 mm may be omitted entirely by the slicer. Use at least 1.2 mm (3× nozzle width) for any structural wall.

**Use the safest material that meets requirements.** If PLA is strong enough, use PLA. Don't introduce PETG, ABS, or specialty materials unless you have a specific reason and the appropriate safety infrastructure.

**Encode printability constraints in your code:**

```openscad
// Printability constants — these drive safe design decisions
wall_min     = 1.2;    // mm — minimum wall for 0.4mm nozzle (3× nozzle width)
hole_min_r   = 1.5;    // mm — minimum hole radius for reliable circular holes
clearance    = 0.2;    // mm — fitting clearance between mating faces
overhang_max = 45;     // degrees — maximum overhang without supports

module printable_box(w, d, h, wall=2) {
  // Validate against printability limits
  assert(wall >= wall_min, str("wall (", wall, "mm) must be >= ", wall_min, "mm"));
  assert(w > 2 * wall, "width must be greater than two wall thicknesses");
  assert(d > 2 * wall, "depth must be greater than two wall thicknesses");

  // Open-top box: no overhangs on the inside
  difference() {
    cube([w, d, h]);
    translate([wall, wall, wall])
      cube([w - 2*wall, d - 2*wall, h]);  // open at top — no overhang required
  }
}

printable_box(50, 40, 30);
```

---

## Exercises

**Exercise 5.1:** Run `3dm info` on your model from Lesson 3. Calculate the material cost in PLA and in PETG (density 1.27 g/cm³). If PLA spools cost $20/kg and PETG spools cost $25/kg, what is the cost difference for your part?

**Exercise 5.2:** Write a pre-flight script (bash or PowerShell) that builds your model, reports the estimated cost, and requires a `y` confirmation before proceeding.

**Exercise 5.3 (Advanced):** Modify the pre-flight script to accept a `--material` argument (options: `pla`, `petg`, `abs`, `tpu`) and calculate cost using the correct density for the selected material.

---

## Quiz — Lesson 5 (15 questions)

1. What are the five levels of the Hierarchy of Controls, from most to least effective?
2. Why is Elimination considered the most effective safety control?
3. Which filament requires a dedicated fume enclosure with HEPA + activated carbon filtration and is NOT recommended for open classrooms?
4. At what temperature should you wait before removing a print from the bed?
5. What should you do immediately if you see smoke coming from your 3D printer?
6. Give three reasons why PLA is considered the safest classroom filament.
7. What is the minimum reliable wall thickness for a 0.4 mm nozzle, and why does this minimum exist?
8. What is the purpose of storing filament with desiccant?
9. True or False: It is safe to leave a 3D printer completely unattended for hours once the first layer has printed successfully.
10. What is "spaghetti" in the context of a 3D printing failure, and what causes it?
11. What is thermal runaway protection, and why is it critical that it remain enabled?
12. What are the two types of airborne emissions from FDM printing, and which filaments produce the most hazardous levels of each?
13. Describe one engineering control and one administrative control you could implement in a classroom 3D printing lab.
14. Explain why minimizing overhangs in your design is both a safety consideration and a quality consideration.
15. A student wants to print a car dashboard mount in ABS because it will be in a hot car. The classroom has no fume enclosure. Using the Hierarchy of Controls, what recommendations would you make?

---

## Extension Problems (15)

1. Create a material selection flowchart that guides a user from mechanical requirements to the safest filament that meets them.
2. Conduct a ventilation assessment of your classroom or makerspace. Document air exchange methods, window locations, and any existing filtration.
3. Write a Standard Operating Procedure (SOP) for ABS printing that includes all required safety equipment and ventilation infrastructure.
4. Design and describe a "first layer test tile" — a 100 × 100 × 0.4 mm flat tile — and explain how you'd use it to verify bed leveling.
5. Build a parametric filament storage clip in OpenSCAD: a clip that holds the free end of a filament spool. Parameters: filament diameter, clip width.
6. Research OSHA's published guidance on VOC exposure in 3D printing environments. Summarize the key recommendations.
7. Compare the Safety Data Sheets (SDS) for PLA and ABS filament from two manufacturers. Document differences in recommended exposure limits and PPE.
8. Design a simple printer enclosure in OpenSCAD: four walls, a front door opening, and a top panel with a circular vent hole. Document the parametric variables.
9. Create a safety poster covering the five most important 3D printing safety rules, organized using the Hierarchy of Controls framework.
10. Write a one-page risk assessment for a new FDM printer being added to a classroom.
11. Design and describe a parametric filament moisture indicator holder: a small box that holds a humidity indicator card inside a resealable filament storage bag.
12. Build a "print monitoring log" template: a paper form with columns for time, nozzle temperature, bed temperature, layer number, visual observations, and action taken.
13. Research the difference between particle emissions and VOC emissions from FDM printing. Which is considered more hazardous at typical classroom distances from the printer?
14. Design a parametric build plate corner protector: a small clip that attaches to the edge of a glass or spring steel build plate to protect it from spatula damage.
15. Write a hypothetical "near-miss incident report" for a fictional 3D printing incident using a standard workplace incident report format (date, location, description, contributing factors, corrective actions).

---

## References and Helpful Resources

- OSHA Hierarchy of Controls — [https://www.osha.gov/hierarchy-of-controls> / NIOSH — [https://www.cdc.gov/niosh/topics/hierarchy/default.html](https://www.osha.gov/hierarchy-of-controls](https://www.cdc.gov/niosh/topics/hierarchy/default.html](https://www.osha.gov/hierarchy-of-controls)

- UL Research Institutes — 3D Printing Emissions Study — [https://www.ul.com/news/ul-research-institutes-releases-3d-printing-emissions-study](https://www.ul.com/news/ul-research-institutes-releases-3d-printing-emissions-study)

- NIOSH Science Blog — Health and Safety Considerations for 3D Printing — [https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-printing/](https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-printing/)

- PrusaSlicer Documentation — [https://docs.prusa3d.com/en/](https://docs.prusa3d.com/en/)

- All3DP Filament Types — [https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/](https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/)

- MatterHackers Filament Compare — [https://www.matterhackers.com/3d-printer-filament-compare](https://www.matterhackers.com/3d-printer-filament-compare)

- Prusa Research Materials Guide — [https://help.prusa3d.com/materials](https://help.prusa3d.com/materials)

### Supplemental Resources

- 3DMake GitHub Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)
- OpenSCAD User Manual — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Reference Appendices

_All supporting documents for Lesson 5 are included below. You do not need to open any additional files._

---

## Appendix A: Safety Checklist for 3D Printing

_Complete this checklist before and after each printing session. Print it out and keep a copy at your printer station._

---

### Pre-Print Setup

**Work Area**

- [ ] Desk or table cleared of unnecessary items
- [ ] Tripping hazards removed from around the printer
- [ ] Adequate ventilation confirmed (window open, fan running, or fume enclosure active)
- [ ] Class ABC fire extinguisher within arm's reach
- [ ] Smoke detector mounted above printer is functional

**Printer Inspection**

- [ ] Nozzle is clean — no old filament residue baked on
- [ ] Build plate is level (re-level if the printer has been moved or bumped)
- [ ] Heated bed temperature sensor is attached and secure
- [ ] All cables are secure and none are frayed or cracked — especially the flexible bed cable bundle
- [ ] Thermal runaway protection is enabled (check firmware settings if unsure)

**Filament Preparation**

- [ ] Filament spool rotates freely on the holder — no binding or tangling
- [ ] Filament path is clear of obstructions from spool to extruder
- [ ] Extruder drive gear is clean — not clogged with ground plastic
- [ ] Filament is correctly loaded and primed (a few mm of filament extruded before starting)

**Environmental Conditions**

- [ ] Room temperature is adequate (18–25°C ideal — extreme cold slows bed heating; extreme heat can soften PLA)
- [ ] No direct drafts from windows or air conditioning blowing on the printer (drafts cause warping and layer splitting)
- [ ] Adequate lighting to clearly see the first layer as it prints

---

### During Print

**First Layer Monitoring (Do Not Leave)**

- [ ] Watch the first 2–3 layers without interruption
- [ ] Bed adhesion is correct — filament sticks flat, not lifting at corners or curling
- [ ] Nozzle temperature is stable at target value
- [ ] No unusual sounds (grinding, clicking, popping)

**Regular Checks (Every 15–30 Minutes)**

- [ ] Print is building correctly — no layer shifting, no spaghetti
- [ ] Filament is feeding smoothly from the spool
- [ ] No grinding or skipping sounds from the extruder
- [ ] No warping visible at part edges

**Temperature Stability**

- [ ] Heated bed maintains consistent temperature throughout
- [ ] Nozzle temperature does not fluctuate more than ±5°C
- [ ] No thermal runaway warnings on the printer display

---

### Stop the Print Immediately If

- [ ] The nozzle jams or extrudes unevenly
- [ ] Filament stops feeding entirely
- [ ] Any burning smell is detected
- [ ] Visible layer shifting occurs
- [ ] Grinding or skipping sounds from the extruder
- [ ] Any unusual chemical or burning odor
- [ ] Smoke appears — **cut power immediately**

---

### Post-Print

**Cool Down**

- [ ] Allow the heated bed to cool naturally for 10–15 minutes before attempting print removal
- [ ] Keep hands clear of the nozzle until it reads below 50°C
- [ ] Confirm the printer is idle and all temperatures are dropping before touching

**Print Removal**

- [ ] Use a proper spatula or scraper — not fingers or improvised tools
- [ ] Remove the print only when the bed has fully cooled (PLA releases easily from PEI beds when cool)
- [ ] Inspect the print for sharp edges, support stubs, or layer delamination
- [ ] Sand or file sharp edges if the part will be handled

**Equipment Cleaning**

- [ ] Wipe the nozzle with a brass wire brush when cooled to 50°C (never cold — residue must be slightly soft)
- [ ] Remove any plastic debris and failed print material from the build plate
- [ ] Check the extruder for embedded filament residue
- [ ] Clear any visible dust from the electronics area

**Workspace Cleanup**

- [ ] Return all tools to their proper storage location
- [ ] Dispose of support material and failed prints in a bin (not on the floor)
- [ ] Store filament in a sealed bag with desiccant
- [ ] Confirm the workspace is clear and safe for the next user

---

### Hazard Reference Summary

| Hazard                    | Temperature / Condition | Response                                 |
| ------------------------- | ----------------------- | ---------------------------------------- |
| Hot nozzle                | 190–260°C               | Do not touch; wait for < 50°C            |
| Hot bed                   | 50–110°C                | Do not touch; allow full cool-down       |
| Fumes (ABS/PETG)          | At operating temp       | Ventilate; use enclosure with filtration |
| Electrical (power supply) | 120V / 240V mains       | Never open while plugged in              |
| Tangled filament          | Any                     | Clear before printing; never force-pull  |

### Emergency Actions

- **Fire:** Unplug immediately. Use a dry chemical (Class ABC) extinguisher — NOT water on electrical fires. Evacuate and call emergency services.
- **Burns:** Rinse with cool (not cold) running water for 15+ minutes. Seek medical attention for any burn larger than a coin.
- **Fume inhalation:** Move to fresh air immediately. Seek medical attention if symptoms (headache, dizziness, nausea) persist.

_Last Reviewed:_ \_\_\_\_\_\_\_\_\_\_ _Reviewed By:_ \_\_\_\_\_\_\_\_\_\_

---

## Appendix B: Filament Comparison Table

_Quick reference for choosing the right filament. All temperature values are typical ranges — always check the label on your specific spool. The spool always wins over this table._

---

### Side-by-Side Comparison

| Property                       | PLA           | PETG                  | TPU (Flex)        | ABS                       |
| ------------------------------ | ------------- | --------------------- | ----------------- | ------------------------- |
| **Difficulty**                 | Easiest       | Moderate              | Hard              | Very Hard                 |
| **Nozzle temp**                | 190–220°C     | 230–250°C             | 220–240°C         | 230–250°C                 |
| **Bed temp**                   | 50–60°C       | 70–85°C               | 30–60°C           | 90–110°C                  |
| **Enclosure needed?**          | No            | No                    | No                | Yes                       |
| **Rigidity**                   | High          | Medium                | None — flexible   | High                      |
| **Impact resistance**          | Low (brittle) | Medium                | Very high         | Medium                    |
| **Heat resistance**            | Low (~60°C)   | Medium (~80°C)        | Medium            | High (~100°C)             |
| **Flexibility**                | None          | Slight                | Rubber-like       | None                      |
| **Moisture sensitivity**       | Low           | Medium                | High              | Medium                    |
| **Fume concern**               | Lowest        | Low                   | Moderate          | High                      |
| **Bed adhesion**               | Easy          | Use glue stick on PEI | Easy              | Requires enclosure + glue |
| **Print speed**                | Normal        | Normal                | Slow (20–30 mm/s) | Normal                    |
| **Stringing tendency**         | Low           | Medium–High           | High              | Low                       |
| **Approximate cost**           | $15–25/kg     | $15–30/kg             | $20–40/kg         | $15–25/kg                 |
| **Recommended for beginners?** | Yes           | After PLA             | After experience  | No                        |

---

### When to Use Each Material

**PLA — Use for:**

- Prototypes and test prints
- Classroom projects
- Decorative objects and tactile models
- Anything that won't be exposed to heat, moisture, or heavy mechanical stress

**PLA — Avoid for:**

- Objects left in a hot car or direct sun (softens above ~60°C)
- Parts that need to flex or bend without cracking
- High-impact applications

**PETG — Use for:**

- Functional parts that need to be tougher than PLA
- Parts exposed to mild heat or moisture
- Mechanical components: brackets, clips, mounts
- Food-contact applications (check your specific brand for food-safe certification)

**PETG — Avoid for:**

- Very fine surface detail (it strings more than PLA)
- Projects where you need the easiest possible first-time print

**TPU / Flexible — Use for:**

- Wearable objects (wristbands, phone cases, watch straps)
- Bumpers and shock absorbers
- Grips and handles
- Objects that must deform under pressure and return to shape

**TPU — Avoid for:**

- Fine surface detail
- Printers with Bowden extruders (the flexible filament buckles in the tube — direct drive only)
- Your first few prints while still learning

**ABS — Use for:**

- High-heat environments (car interiors, near motors)
- Parts requiring post-processing (ABS sands, bonds with acetone vapor, and paints easily)
- Professional or industrial contexts with proper dedicated ventilation

**ABS — Avoid for:**

- Any classroom without a dedicated sealed fume enclosure and active filtration
- Beginners
- Any print where warping at the edges would be a problem and you have no enclosure

---

### Slicer Profile Quick Reference

| Filament | PrusaSlicer Profile | Key Changes from PLA Default                        |
| -------- | ------------------- | --------------------------------------------------- |
| PLA      | Generic PLA         | Baseline — no changes needed                        |
| PETG     | Generic PETG        | Higher temps; slower cooling; glue stick on PEI bed |
| TPU      | Generic Flex        | Reduce speed to 20–30 mm/s; reduce retraction       |
| ABS      | Generic ABS         | Higher temps; disable cooling fan; use enclosure    |

---

### Filament Storage

All filament absorbs moisture from the air over time. Wet filament causes: popping or crackling sounds during printing, bubbles in extruded plastic, excessive stringing, and weak or brittle finished parts.

| Filament | Moisture Sensitivity | Storage Recommendation                                                      |
| -------- | -------------------- | --------------------------------------------------------------------------- |
| PLA      | Low                  | Sealed bag with desiccant when not in use                                   |
| PETG     | Medium               | Sealed bag with desiccant; dry before use if stored open for weeks          |
| TPU      | High                 | Always store sealed; dry in oven at 65°C for 4–6 hours if moisture-absorbed |
| ABS      | Medium               | Sealed bag with desiccant                                                   |

_Sources: All3DP Filament Types Guide; MatterHackers Filament Compare; Prusa Research Materials Guide_

---

## Appendix C: Material Properties Quick Reference

_Essential material data for FDM/FFF printing. Use alongside the Filament Comparison Table for material selection decisions._

---

### Properties at a Glance

| Property            | PLA        | PETG       | ABS           | TPU            |
| ------------------- | ---------- | ---------- | ------------- | -------------- |
| Nozzle temp (°C)    | 200–220    | 235–250    | 240–260       | 220–240        |
| Bed temp (°C)       | 20–60      | 70–90      | 100–110       | 20–60          |
| Strength            | Moderate   | High       | Very High     | Low (flexible) |
| Flexibility         | None       | Slight     | Slight        | High           |
| Ease of printing    | Very Easy  | Easy       | Hard          | Moderate       |
| Cost ($/kg)         | $15–25     | $20–30     | $18–28        | $30–50         |
| Print speed         | 40–60 mm/s | 30–50 mm/s | 20–40 mm/s    | 10–30 mm/s     |
| Bed adhesion        | Easy       | Moderate   | Requires prep | Easy           |
| UV resistance       | Low        | Moderate   | High          | Low            |
| Chemical resistance | No         | Moderate   | Yes           | No             |

---

### Heat Resistance After Printing

This is one of the most common reasons to choose a material other than PLA.

| Material | Safe to use up to | Softens at | Notes                                                     |
| -------- | :---------------: | :--------: | --------------------------------------------------------- |
| PLA      |     ~50–60°C      |  ~60–70°C  | Not suitable for car interiors or items near heat sources |
| PETG     |     ~80–100°C     | ~100–110°C | Handles warm environments well                            |
| ABS      |     ~90–110°C     | ~110–120°C | Good heat resistance; most demanding to print             |
| TPU      |     ~60–80°C      | ~80–100°C  | Limited heat resistance despite flex durability           |

---

### Chemical Resistance

| Material |  Water   | Alcohol  |  Acetone  |   Oils   |  Acids   |
| -------- | :------: | :------: | :-------: | :------: | :------: |
| PLA      |   Low    |   Low    | Dissolves |   Low    |   Low    |
| PETG     |   High   | Moderate | Moderate  |   High   | Moderate |
| ABS      |   High   | Moderate | Dissolves |   High   | Moderate |
| TPU      | Moderate |   Low    |    Low    | Moderate |   Low    |

**Acetone note:** Can be used to smooth ABS surfaces (vapor or liquid application). Also dissolves PLA — keep acetone away from PLA prints and filament spools.

---

### Strength After Printing — Curing Time

Freshly printed parts are not at full strength.

| Time After Printing | Approximate Strength     |
| ------------------- | ------------------------ |
| 0–24 hours          | 70–80% of final strength |
| 24–48 hours         | 90–95% of final strength |
| 48–72 hours         | ~99% of final strength   |
| 7+ days             | Maximum strength         |

Do not stress-test functional parts immediately after printing. Allow at least 24 hours before load testing.

---

### Storage Conditions

| Factor              | Recommended Range             |
| ------------------- | ----------------------------- |
| Storage temperature | 15–25°C                       |
| Relative humidity   | 30–50%                        |
| Light exposure      | Away from direct sunlight     |
| Container           | Sealed with desiccant packets |

---

### Quick Material Selection Guide

| Question                | Answer                                   |
| ----------------------- | ---------------------------------------- |
| First time printing?    | PLA                                      |
| Need durability?        | PETG or ABS                              |
| Need flexibility?       | TPU                                      |
| Need high strength?     | ABS or PETG                              |
| Quick test / prototype? | PLA                                      |
| Outdoor use?            | PETG or ABS                              |
| Food contact?           | Food-grade certified PETG (verify brand) |
| Heat resistant?         | ABS                                      |
| Easiest possible print? | PLA                                      |

---

## Appendix D: Printer Maintenance Log

_Copy this log and keep a printed or digital copy with your printer. Fill in the Printer Information section first, then log every maintenance event and issue as it occurs. A complete log is your best diagnostic tool when problems arise._

---

### Printer Information

| Field                        | Value |
| ---------------------------- | ----- |
| Printer model                |       |
| Serial number                |       |
| Purchase date                |       |
| Firmware version             |       |
| Last service date            |       |
| Warranty expiry              |       |
| Manufacturer support contact |       |

---

### Maintenance Schedule

**Before each use (Daily)**

- [ ] Visual inspection — no visible damage, cables intact
- [ ] Clean nozzle tip if residue is present
- [ ] Verify build plate is level (re-level if printer was moved)
- [ ] Confirm filament spool rotates freely with no tangles

**Weekly**

- [ ] Clean extruder drive gear (compressed air or brush out ground plastic)
- [ ] Inspect and wipe Z-axis rails and lead screw
- [ ] Check all cable connections at the control board
- [ ] Test emergency stop / power cut

**Monthly**

- [ ] Full build plate leveling procedure (manual or automatic)
- [ ] Clean interior of print chamber
- [ ] Inspect heating elements and thermistor connections
- [ ] Run a temperature calibration test print

**Quarterly (every 3 months)**

- [ ] Replace nozzle if inner bore shows wear or repeat clogging
- [ ] Full mechanical inspection — belt tension, eccentric nuts, frame screws
- [ ] Check firmware for updates
- [ ] Run a full calibration test print and document results

---

### Maintenance Log

| Date | Type | Description | Time Spent | Issues Found | Resolution | By  |
| ---- | ---- | ----------- | ---------- | ------------ | ---------- | --- |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |

_Types: Routine / Repair / Calibration / Cleaning / Part replacement_

---

### Issue Tracking Log

| Date | Symptom | Diagnosis | Action Taken | Status | Notes |
| ---- | ------- | --------- | ------------ | ------ | ----- |
|      |         |           |              |        |       |
|      |         |           |              |        |       |
|      |         |           |              |        |       |
|      |         |           |              |        |       |
|      |         |           |              |        |       |

_Statuses: Open / In progress / Resolved / Monitoring_

---

### Parts Replacement Record

| Date | Part Replaced | Reason | Supplier | Cost | Notes |
| ---- | ------------- | ------ | -------- | ---- | ----- |
|      |               |        |          |      |       |
|      |               |        |          |      |       |
|      |               |        |          |      |       |

---

### Filament Compatibility Notes

Record your tested settings for each material on this specific printer. Published temperature ranges are starting points — your printer may run hotter or cooler than its display indicates.

| Filament | Brand | Nozzle Temp | Bed Temp | Speed | Success Rate | Notes |
| -------- | ----- | :---------: | :------: | :---: | :----------: | ----- |
| PLA      |       |             |          |       |              |       |
| PETG     |       |             |          |       |              |       |
| ABS      |       |             |          |       |              |       |
| TPU      |       |             |          |       |              |       |
| Other    |       |             |          |       |              |       |

---

### Troubleshooting Quick Reference

**Nozzle Clog**

- First response: Cold pull (heat to printing temp, push filament through manually, cool to 90°C, pull sharply)
- Second response: Acupuncture needle or nozzle cleaning filament
- Last resort: Replace nozzle

**Bed Adhesion Problems**

- Check: Bed level, nozzle height from bed, bed surface condition (clean? worn?)
- Fix by material: PLA → clean PEI with IPA; PETG → apply glue stick; ABS → glue stick + enclosure

**Layer Shifting**

- Common causes: Belt too loose, motor current too low, print speed too high, X/Y axis obstruction
- Check belt tension first — it's the most common cause

**Extrusion Issues (Under-extrusion)**

- Common causes: Partial clog, worn drive gear, incorrect extruder steps/mm, wet filament
- Run a flow rate test: extrude 100 mm and measure actual output

---

### Monthly Performance Summary

| Month | Print Success Rate | Common Issues | Overall Assessment |
| ----- | :----------------: | ------------- | ------------------ |
|       |                    |               |                    |
|       |                    |               |                    |
|       |                    |               |                    |
|       |                    |               |                    |

_Last log entry:_ \_\_\_\_\_\_\_\_\_\_ _Logged by:_ \_\_\_\_\_\_\_\_\_\_

---

# Lesson 6 — Practical 3dm Commands and Text Embossing

**Estimated Time:** 90–120 minutes  
**Course:** 3D Printing for the Blind

---

## Before You Start

You've built solid 3D geometry, organized it into modules, learned to verify it rigorously, and understood the physical realities of printing it safely. Now we're going to add two powerful new capabilities to your toolkit.

The first is **text**. Adding text to 3D parts is more useful than it might sound at first. Engineers put part numbers on manufactured components so they can be identified after assembly. Makers label storage bins so they can find what they need. Designers emboss names and logos on products. Accessibility designers create braille labels. OpenSCAD's `text()` function makes all of this parametric — you can generate a hundred labeled bins automatically, make the text content a parameter, and produce variants for different languages or quantities without touching the geometry code at all.

The second is the **full `3dm` command suite**. You've been using `3dm build` and `3dm info`. There are three more commands — `preview`, `orient`, and `slice` — that round out the workflow from design to print.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Use `text()` to add embossed and debossed labels to 3D models
- Find available fonts on your system and write portable font code
- Size text to fit a specific container using the cap-height model
- Use the full `3dm` command suite: `build`, `info`, `preview`, `orient`, `slice`
- Use OpenSCAD string functions: `str()`, `len()`, `search()`, `substr()`
- Apply `let()` for scoped variable declarations
- Automate multi-variant text label generation in bash, PowerShell, and CMD

---

## Concept 1: The Full `3dm` Command Suite

### Five Commands, One Workflow

You've been using two commands. Here's the complete set:

| Command       | What It Does                              | Output                      |
| ------------- | ----------------------------------------- | --------------------------- |
| `3dm build`   | Compiles `.scad` source → `.stl` geometry | `build/main.stl`            |
| `3dm info`    | Reports dimensions and AI description     | Console text                |
| `3dm preview` | Renders model to an image file            | `build/main-3Sil.svg`       |
| `3dm orient`  | AI-suggested print orientation            | Console text recommendation |
| `3dm slice`   | Calls your slicer on the current STL      | G-code file, console text   |

```bash
# BUILD VARIANTS
3dm build                          # standard build
3dm build --clean                  # delete build/ folder first, then rebuild
3dm build --watch                  # auto-rebuild when src/ files change

# INFORMATION AND DESCRIPTION
3dm info                           # bounding box, volume, triangle count, AI description
3dm info --file path/to/file.stl   # query a specific STL (not just the current build)
3dm info --view front              # generate description from the front view
3dm info --view top,front,isometric  # generate from multiple views

# ORIENTATION, PREVIEW, SLICING
3dm preview                        # render model to build/mail-3sil.svg
3dm orient                         # AI recommendation for best print orientation
3dm slice                          # call slicer on build/main.stl
```

### `3dm orient` — What It Does and How to Use It

`3dm orient` uses AI to analyze your model's geometry and recommend which face should be placed down on the build plate for printing. This recommendation considers two things: minimizing the need for supports (overhangs), and maximizing the quality of visible surfaces (which sit better when they're on the top or sides, not facing down toward the bed).

Use `3dm orient` as a starting suggestion, but verify it with your own judgment. For complex parts, you may have competing priorities — perhaps the AI recommends an orientation that minimizes supports but puts a cosmetically important surface face-down against the bed, where it will look rough. Your own analysis matters.

---

## Concept 2: Text on 3D Parts

### Why 3D Text Is Useful

Before diving into syntax, it's worth thinking about why you'd want text on a 3D print:

**Identification** — part numbers, serial numbers, batch codes. Manufacturing parts need to be traceable. A part with its number embossed on it can never be confused with another part.

**Directional labels** — "FRONT," "TOP," "THIS SIDE UP." Assembly instructions encoded directly in the part.

**Storage and organization** — labels for bins, drawers, shelves. Parametric text means you can batch-generate 30 labeled bins automatically.

**Personalization** — names, logos, messages on gifts, art, and personal projects.

**Accessibility** — braille labels for visually impaired users. OpenSCAD can generate braille if you encode the dot patterns.

---

## Step 1 — The `text()` Function

### How Text Works in OpenSCAD

`text()` creates a **2D** shape from a text string. By itself, it's flat — it has no height. You add height by wrapping it in `linear_extrude()`, which pushes the 2D letterforms straight up along the Z axis.

**Embossed text** is raised above the surface — the letters stand up above the base. This is more visible and readable, especially at small sizes, because there's contrast between the raised letters and the surrounding surface.

**Debossed text** (also called engraved or incised) is carved into the surface — the letters are sunken below the surrounding surface. This reads well when the sunken areas catch shadow, or when filled with paint. It also doesn't add any height to the overall part dimensions.

```openscad
// Full text() parameter reference
linear_extrude(height=1.5)
  text(
    text      = "3dMake",           // the string to display
    size      = 10,                  // cap height in mm (capital letter height)
    font      = "Liberation Sans",   // font family name (more on this in Step 2)
    halign    = "center",            // horizontal alignment: "left", "center", "right"
    valign    = "baseline",          // vertical alignment: "top", "center", "baseline", "bottom"
    spacing   = 1.0,                 // letter spacing multiplier (1.0 = normal)
    direction = "ltr",               // text direction: "ltr" (left-to-right) or "rtl"
    language  = "en",
    script    = "latin"
  );

// EMBOSSED: raised letters sitting on top of the base
cube([80, 15, 5]);
translate([40, 7.5, 5])             // sit text on top face (Z=5)
  linear_extrude(height=1.5)        // letters are 1.5mm tall
    text("FRONT", size=6, font="Liberation Sans:style=Bold",
         halign="center", valign="center");

// DEBOSSED (ENGRAVED): letters carved into the surface
difference() {
  translate([0, 20, 0]) cube([80, 15, 5]);
  translate([40, 27.5, 5 - 0.8])   // start 0.8mm below the top face
    linear_extrude(height=1)        // 1mm cut: 0.8 into + 0.2 through (clean cut)
      text("BACK", size=6, font="Liberation Sans:style=Bold",
           halign="center", valign="center");
}
```

**Understanding the debossed depth calculation:** If the plate is 5 mm tall and you want 0.8 mm deep engraving, start the extrusion at `z = 5 - 0.8 = 4.2`. Extrude 1.0 mm (so it reaches z=5.2 — 0.2 mm past the top). This uses the 0.001 rule logic from Lesson 2: the cutter goes slightly beyond the face for a clean cut. The visible result is letters engraved 0.8 mm deep.

---

## Step 2 — Finding and Using Fonts

### Why Font Availability Is a Portability Problem

OpenSCAD uses fonts installed on your operating system. Different computers have different fonts. If you write code that uses "Arial" and another student or instructor tries to render it on a Linux machine that doesn't have Arial, OpenSCAD will fall back to a substitute font — and the text proportions may change, potentially causing the text to overflow its container or look wrong.

The solution has two parts: check which fonts are available on your machine before writing your code, and define your font choice as a single parameter at the top of the file so it's easy to change.

### Finding Available Fonts

**Linux (bash):**

```bash
# List all available fonts
fc-list | sort | less

# Find fonts with "liberation" in the name
fc-list | grep -i "liberation"

# Get the exact format needed for OpenSCAD's font= parameter
fc-list --format="%{family}:style=%{style}\n" | grep -i liberation | sort | head -20
# Output examples:
# Liberation Sans:style=Bold
# Liberation Sans:style=Regular
# Liberation Mono:style=Bold
```

**Windows (PowerShell):**

```powershell
# List all installed fonts
[System.Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$fonts = (New-Object System.Drawing.Text.InstalledFontCollection).Families
$fonts | Select-Object Name | Sort-Object Name

# Search for a specific font
$fonts | Where-Object { $_.Name -like "*Arial*" } | Select-Object Name
```

On Windows, the most convenient method is the **Help → Font List** menu inside the OpenSCAD application — it shows every available font with its exact name string.

**macOS (bash):**

```bash
fc-list | sort
# or
system_profiler SPFontsDataType | grep "Full Name" | sort
```

### Classroom-Safe Fonts (Available on Most Linux Systems)

These fonts are widely pre-installed and safe to use in code you'll share with classmates:

- `Liberation Sans` — clean, modern sans-serif, compatible proportionally with Arial
- `Liberation Mono` — monospaced, excellent for part numbers and code
- `DejaVu Serif` — serif font with good contrast for labels

> [!NOTE]
> If OpenSCAD can't find your specified font, it prints `WARNING: No match for requested font family` in the console. Font availability varies by OS — if text looks wrong, check the console for this warning and substitute an available font.

---

## Step 3 — Font-Agnostic Code Pattern

### Define Your Font Once

Instead of hardcoding a font name at every text call, define it once as a constant at the top of your file. This way, switching fonts is a one-line change, and the font choice is clearly documented.

```openscad
// Define font choice once at the top — comment/uncomment for your OS
LABEL_FONT = "Liberation Sans:style=Bold";   // Linux
// LABEL_FONT = "DejaVu Sans:style=Bold";    // Linux alternative
// LABEL_FONT = "Arial:style=Bold";          // Windows / macOS
// LABEL_FONT = "Helvetica:style=Bold";      // macOS

module label(txt, size=8) {
  text(txt, font=LABEL_FONT, size=size, halign="center", valign="center");
}

module embossed_plate(message, plate_w=80, plate_d=15, plate_h=5,
                      text_size=8, relief=1.5) {
  cube([plate_w, plate_d, plate_h]);
  translate([plate_w/2, plate_d/2, plate_h])
    linear_extrude(height=relief)
      label(message, size=text_size);
}

embossed_plate("FRONT");
translate([0, 20, 0]) embossed_plate("BACK");
translate([0, 40, 0]) embossed_plate("LEFT");
```

---

## Step 4 — Text Sizing: The Cap-Height Model

### How the `size` Parameter Works

The `size` parameter in `text()` sets the **cap height** — the height of a capital letter in millimeters. This is not the total height of the text block; lowercase letters with descenders (g, p, q, y) extend further below the baseline.

Useful rules of thumb:

- Total text block height ≈ `size × 1.25` (to include descenders)
- Width of a capital letter ≈ `size × 0.65` to `size × 0.75`
- Total width of an all-caps string ≈ `size × 0.65 × character_count`

These are approximations — the exact values depend on the specific font.

### Auto-Fitting Text to a Container

When you need text to fill a specific width and height automatically, this module computes the right size:

```openscad
module fitted_text(txt, container_w, container_h,
                   font="Liberation Sans:style=Bold") {
  char_count  = len(txt);
  size_by_w   = container_w / (char_count * 0.68);  // size that fills width
  size_by_h   = container_h * 0.75;                  // size that fills height
  fitted_size = min(size_by_w, size_by_h);            // use whichever is smaller

  echo(str("Fitted text size for '", txt, "': ", fitted_size, "mm"));

  text(txt, size=fitted_size, font=font,
       halign="center", valign="center");
}

// These labels auto-size to fit their containers
difference() {
  cube([60, 12, 5]);
  translate([30, 6, 5 - 0.8])
    linear_extrude(height=1)
      fitted_text("HELLO", 60, 12);
}

translate([0, 20, 0]) {
  cube([60, 12, 5]);
  translate([30, 6, 5])
    linear_extrude(height=1.5)
      fitted_text("WORLD", 60, 12);
}
```

---

## Step 5 — String Functions

### Building Labels Dynamically

The `str()` function converts any value to its string representation and concatenates multiple values into a single string. This is how you create part numbers, serial numbers, and version stamps programmatically.

```openscad
// str() — convert values to strings and concatenate
part_id = str("PART-", 2026, "-", 42);
echo(part_id);   // PART-2026-42

// len() — length of a string or list
name = "OpenSCAD";
echo(len(name));   // 8

// search() — find the position of a character in a string
// Returns a list; [[4]] means found at index 4
echo(search("S", "OpenSCAD"));   // [[4]]

// substr() — extract a substring
// substr(string, start_index, length)
full = "BATCH-001";
batch  = substr(full, 0, 5);   // "BATCH"
number = substr(full, 6, 3);   // "001"
echo(batch, number);
```

### Auto-Generating Serial Numbers

```openscad
// Generate 5 parts with serial numbers SN-01 through SN-05
for (i = [1:5]) {
  serial = str("SN-", i < 10 ? "0" : "", i);   // zero-pad single digits
  translate([i * 35, 0, 0]) {
    cube([30, 12, 4]);
    translate([15, 6, 4])
      linear_extrude(1.5)
        text(serial, size=5, font="Liberation Sans:style=Bold",
             halign="center", valign="center");
  }
}
```

---

## Step 6 — `let()` for Scoped Variables

### What `let()` Does

In Lesson 3 you learned that OpenSCAD global variables are resolved at parse time, and that last-assignment wins. `let()` provides a way to declare variables that are scoped to a specific block — they only exist inside the `let()` block and don't affect global scope.

`let()` is useful when you need intermediate calculated values in one place and don't want them polluting the global namespace, or when you want to make a series of dependent calculations explicit within one block.

```openscad
// let() scopes variables to the block they're declared in
let (
  base_w          = 80,
  base_d          = 50,
  plate_height    = 5,
  text_center_x   = base_w / 2,
  text_center_y   = base_d / 2
) {
  cube([base_w, base_d, plate_height]);
  translate([text_center_x, text_center_y, plate_height])
    linear_extrude(2)
      text("v1.0", size=6, halign="center", valign="center");
}
// text_center_x and text_center_y are not accessible outside the let() block
```

---

## Step 7 — A Complete Parametric Label Plate

Here is a production-quality label module that uses every concept from this lesson:

```openscad
// Parametric Label Plate
// Adjust these parameters and run: 3dm build
label_text   = "STORAGE BOX";
label_w      = 80;        // mm — plate width
label_h      = 18;        // mm — plate height
plate_depth  = 3;         // mm — plate thickness
text_depth   = 1.2;       // mm — engraving depth
font_size    = 7;         // mm — cap height of text
corner_r     = 2;         // mm — corner rounding radius

module label_plate(txt, w, h, t, td, fs, cr) {
  difference() {
    // Rounded rectangle base (minkowski creates rounded corners)
    minkowski() {
      cube([w - 2*cr, h - 2*cr, t], center=true);
      cylinder(r=cr, h=0.01, $fn=16);
    }
    // Engraved text, centered
    translate([0, 0, t/2 - td + 0.001])
      linear_extrude(td + 0.001)
        text(txt, size=fs, font="Liberation Sans:style=Bold",
             halign="center", valign="center", $fn=4);
    // Mounting hole for wall attachment
    translate([w/2 - 6, 0, -0.001])
      cylinder(r=1.5, h=t + 0.002, $fn=16);
  }
}

label_plate(label_text, label_w, label_h, plate_depth, text_depth, font_size, corner_r);
```

---

## Step 8 — Automating Multi-Label Generation

Once your label design is parametric, you can generate a whole set of labels automatically — one build command per label variant.

**Linux / macOS (bash):**

```bash
#!/bin/bash
LABELS=("FRONT" "BACK" "LEFT" "RIGHT" "TOP" "BOTTOM")
mkdir -p build/labels

for label in "${LABELS[@]}"; do
  filename=$(echo "$label" | tr '[:upper:]' '[:lower:]')
  output="build/labels/${filename}.stl"
  echo "Generating: $label → $output"
  openscad -D "label_text=\"${label}\"" -o "$output" src/main.scad
  [ $? -eq 0 ] && echo "  OK" || echo "  FAILED"
done
echo "Done. Output: build/labels/"
```

**Windows (PowerShell):**

```powershell
$labels = @("FRONT", "BACK", "LEFT", "RIGHT", "TOP", "BOTTOM")
New-Item -ItemType Directory -Force -Path "build\labels" | Out-Null

foreach ($label in $labels) {
  $filename = $label.ToLower()
  $output   = "build\labels\$filename.stl"
  Write-Host "Generating: $label → $output"
  openscad -D "label_text=`"$label`"" -o $output "src\main.scad"
  if ($LASTEXITCODE -eq 0) { Write-Host "  OK" } else { Write-Host "  FAILED" }
}
Write-Host "Done."
```

**Windows (CMD):**

```cmd
@echo off
mkdir build\labels 2>nul
FOR %%L IN (FRONT BACK LEFT RIGHT TOP BOTTOM) DO (
  echo Generating: %%L
  openscad -D "label_text=\"%%L\"" -o "build\labels\%%L.stl" src\main.scad
  IF %ERRORLEVEL% EQU 0 (echo   OK) ELSE (echo   FAILED)
)
echo Done.
```

---

## Exercises

**Exercise 6.1:** Find the fonts available on your computer using the appropriate command for your OS. List three font names in the exact format required by OpenSCAD's `font=` parameter (e.g., `Liberation Sans:style=Bold`).

**Exercise 6.2:** Create a parametric name plate module where the text is auto-sized to fill 75% of the plate width. Test it with strings of 3, 6, 9, and 12 characters — verify that the text scales correctly and doesn't overflow.

**Exercise 6.3 (Advanced):** Write a shell script that generates 10 identical parts with serial numbers SN-001 through SN-010 embossed on each. Display success or failure for each part and the total file count at the end.

---

## Quiz — Lesson 6 (15 questions)

1. What does `3dm orient` output and when would you use it?
2. What is the difference between embossed text and debossed (engraved) text in 3D printing? How does the OpenSCAD code differ?
3. What does the `size` parameter in `text()` represent specifically? Is it the total height of the text block?
4. What parameter in `text()` controls horizontal alignment, and what are the three main options?
5. What does `str("PART-", 2024, "-", 1)` return?
6. What does `len("OpenSCAD")` return?
7. What is the purpose of `let()` in OpenSCAD, and how does it differ from declaring a global variable?
8. What does setting `$fn=4` do to letters rendered with `text()`?
9. What does `3dm preview` produce and where does the output file go?
10. What is the format for specifying a font style (e.g., bold) in OpenSCAD's `font=` parameter?
11. Explain the depth calculation for debossed text: if a plate is 6 mm tall and you want 1 mm engraving depth, where do you position the `linear_extrude()` call and what height do you give it?
12. What does `substr("BATCH-001", 6, 3)` return?
13. What happens if you use `text()` without wrapping it in `linear_extrude()`?
14. Why is defining the font as a constant at the top of your file (e.g., `LABEL_FONT = "Liberation Sans:style=Bold"`) better than hardcoding it in every `text()` call?
15. Write the OpenSCAD code to create a 50×20×4mm plate with the text "LOT-42" engraved 1.5mm deep, centered on the top face.

---

## Extension Problems (15)

1. Build a parametric serial number generator: accept a prefix string and a starting number, and generate a set of embossed labels with incrementing serial numbers.
2. Create a dynamic version stamp: use `str()` to combine a product name, major version, and minor version, all as separate parameters.
3. Design a 4-up label sheet: four identical labels in a 2×2 grid, using `translate()` and a `for` loop with two variables.
4. Build a two-line label: stack two `text()` calls at different heights. Line 1 is the label text; line 2 is a smaller subtitle.
5. Create a label with a decorative border: use `difference()` to cut a framing slot into the top face of the label plate.
6. Use `3dm orient` on three different models (a flat slab, a tall cylinder, an L-bracket) and document whether you agree with the AI suggestion in each case.
7. Build a "batch tag" system: a module that generates 12 small tags in a row, each with a different serial number from a list.
8. Design a keychain tag: a rounded rectangle with a ring hole, parametric text, and a border around the text.
9. Use `search()` to find the position of a separator character (dash or underscore) in a part-number string. Explain a practical use case for this.
10. Build a "negative space" text plate: a plate with all letters cut completely through, creating a stencil or silhouette effect.
11. Design a parametric drawer label holder: a clip that attaches to the front edge of a drawer and holds a flat label insert.
12. Create a font comparison plate: render the same text string using Liberation Sans, Liberation Mono, and DejaVu Serif side by side on one base plate.
13. Write a screen-reader accessibility guide for the five `3dm` commands. For each command: what it does, expected output, and how to interpret that output without visual reference.
14. Write a module that auto-reduces font size to fit text within a fixed-width container. The module should reduce size in 0.5 mm steps until the estimated width fits.
15. Design a production part-marking system: a jig that holds 10 small labels in a row, each with an incremented part number, ready to print all at once as one STL file.

---

## References and Helpful Resources

- 3DMake GitHub Repository — Command Reference — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

- OpenSCAD User Manual — Text and Fonts — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Text)

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub — String functions and text embossing examples
- OpenSCAD Quick Reference — [https://programmingwithopenscad.github.io/quick-reference.html](https://programmingwithopenscad.github.io/quick-reference.html) — All string function syntax
- CodeSolutions Repository — [https://github.com/ProgrammingWithOpenSCAD/CodeSolutions](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Worked text embossing examples
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 6 are included below. You do not need to open any additional files._

---

## Appendix A: Parametric Keychain — Extension Project

**Estimated time:** 2–4 hours

### Overview

This extension project applies the text embossing and parametric design skills from Lesson 6 to build something immediately usable: a personalized keychain. The goal is not just to make one keychain — it's to build a _system_ that can produce any variant (different names, sizes, materials) by changing a small set of top-level variables. That's what makes it a professional parametric design rather than a one-off model.

### Learning Objectives

By completing this project, you will:

- Create parametric OpenSCAD modules that accept user inputs as top-level variables
- Implement embossed and debossed text using `linear_extrude()` of 2D text shapes
- Generate and test multiple design variants systematically
- Document design parameters for reproducibility and user customization

### Objective

Create a `keychain.scad` file that adapts to custom text, dimensions, and attachment ring size — all through top-level parameter variables. Anyone with your `.scad` file should be able to produce a custom keychain by changing only the variables at the top of the file.

### Tasks

1. **Create `keychain.scad`** with these top-level parameters at minimum: `name`, `tag_w`, `tag_h`, `tag_thickness`, `text_size`, `ring_d`. Add others as your design requires. Every dimension in the file should trace back to one of these variables.

2. **Implement text** using `linear_extrude()` of a 2D `text()` shape. Add either embossed text (the letters rise above the surface) or debossed text (the letters are engraved into the surface). Embossed text is more durable; debossed text is easier to read when painted or filled with ink.

3. **Produce three size variants** — small (25 mm wide), medium (35 mm wide), large (45 mm wide) — by changing only `tag_w` and `tag_h` proportionally. Export an STL for each and record print time and filament weight.

4. **Test the key ring attachment** by inserting a standard key ring (typically 25–30 mm diameter wire) through the attachment loop. Document what ring diameter fits, and whether the attachment point survives a reasonable tug test.

### Deliverables

- `keychain.scad` — fully parametric source file with all key dimensions as named variables and comments explaining each
- Three STL variant files (small, medium, large)
- Completed student documentation template (Appendix B of this document)
- Print settings log and fit-test report for key ring attachment

---

### Starter Code

Use the minimal keycap example as your starting structure for the shell + emboss pattern. The more advanced examples below show how to add circular text arrangements, multi-line compositions, and font variation.

**Minimal Starting Point:**

```openscad
// Cube Keycap — Structural Reference
// This shows the shell + emboss pattern. Replace with keychain geometry.

keysize    = 18;    // mm — tag size
keyheight  = 12;    // mm — tag thickness
wall       = 1.2;   // mm — shell wall
letter     = "R";   // change to your text
lettersize = 10;    // mm — text size
letteraise = 0.8;   // mm — emboss height above surface

module shell() {
  difference() {
    cube([keysize, keysize, keyheight], center=false);
    translate([wall, wall, wall])
      cube([keysize - 2*wall, keysize - 2*wall, keyheight], center=false);
  }
}

module emboss() {
  translate([keysize/2, keysize/2, keyheight - 0.01])
    linear_extrude(height=letteraise)
      text(letter, size=lettersize, halign="center", valign="center");
}

union() {
  shell();
  emboss();
}
```

---

**Parametric Keychain Nameplate** — use this as your primary starting scaffold:

```openscad
// Customizable Keychain Nameplate
// Change the parameters below to create your own variant.

// ---- Top-Level Parameters (change these) ----
name          = "ALEX";    // text to emboss on the tag
tag_w         = 35;        // mm — tag width
tag_h         = 20;        // mm — tag height (vertical dimension)
tag_thickness = 5;         // mm — tag thickness (Z height)
wall          = 1.2;       // mm — shell wall thickness
text_size     = 12;        // mm — font cap-height
text_raise    = 0.8;       // mm — emboss height above top face
ring_d        = 6;         // mm — key ring hole inner diameter
ring_wall     = 2;         // mm — wall thickness around ring hole

// ---- Derived Values ----
ring_outer_d  = ring_d + 2 * ring_wall;

// Verify ring attachment won't be too thin to print reliably
assert(ring_wall >= 1.2,
  str("ring_wall too thin to print reliably: ", ring_wall, "mm. Minimum: 1.2mm"));

// ---- Shell Module ----
module tag_shell() {
  difference() {
    cube([tag_w, tag_h, tag_thickness]);
    translate([wall, wall, wall])
      cube([tag_w - 2*wall, tag_h - 2*wall, tag_thickness]);  // open top — hollow shell
  }
}

// ---- Text Module ----
module tag_text() {
  translate([tag_w/2, tag_h/2, tag_thickness - 0.01])
    linear_extrude(height=text_raise)
      text(name,
           size=text_size,
           font="Liberation Sans:style=Bold",
           halign="center",
           valign="center",
           $fn=4);   // $fn=4 speeds up preview; use $fn=32 for final render
}

// ---- Key Ring Attachment Loop ----
// A short cylinder projecting from the top edge center with a hole through it.
module ring_attachment() {
  translate([tag_w/2, tag_h + ring_outer_d/2 - 0.001, tag_thickness/2])
    rotate([90, 0, 0])
      difference() {
        cylinder(d=ring_outer_d, h=tag_thickness, center=true, $fn=32);
        cylinder(d=ring_d,       h=tag_thickness + 0.002, center=true, $fn=32);
      }
}

// ---- Assembly ----
union() {
  tag_shell();
  tag_text();
  ring_attachment();
}
```

---

**Advanced Technique: Circular Text Arrangement**

```openscad
// Arrange text in a circle around a center point.
// Useful for medallion-style keychains, badge designs, or decorative borders.

module rotate_text(display_text,
    text_size    = 10,
    distance     = 20,
    rotation_span = 360,
    tilt         = 0)
{
  rotate([0, 0, tilt])
  for (i = [0 : len(display_text) - 1]) {
    rotate([0, 0, -i * rotation_span / len(display_text)])
    translate([0, distance, 0])
      text(display_text[i],
           font="Liberation Sans:style=Bold",
           size=text_size,
           halign="center");
  }
}

// Usage: extrude the circular text arrangement
linear_extrude(height=2)
  rotate_text("MAKER", text_size=12, distance=30, rotation_span=75, tilt=30);
```

---

**Advanced Technique: Multi-Line Text Composition**

```openscad
// Combine multiple text elements at different sizes for a professional nameplate.

module nameplate(name, role, plate_w=120, plate_d=60, plate_h=3) {
  union() {
    // Base plate
    cube([plate_w, plate_d, plate_h], center=true);

    // Main name — large, centered near top
    translate([0, 15, plate_h/2 + 1.5])
      linear_extrude(height=2)
        text(name, size=24, font="Liberation Sans:style=Bold",
             halign="center", valign="center");

    // Role — medium
    translate([0, 0, plate_h/2 + 1.5])
      linear_extrude(height=2)
        text(role, size=14, font="Liberation Sans:style=Regular",
             halign="center", valign="center");
  }
}

nameplate("Alex Chen", "3D Design Engineer");
```

---

**Font Reference: Cross-Platform Options**

The fonts below are widely available. Always fall back gracefully — define your font as a constant at the top of your file so you change it in one place.

```openscad
// Define font as a constant — change here, applies everywhere
BODY_FONT  = "Liberation Sans:style=Bold";    // clean, reliable on all platforms
MONO_FONT  = "Liberation Mono:style=Regular"; // technical/code style
SERIF_FONT = "DejaVu Serif:style=Regular";    // classic, decorative

// Usage
linear_extrude(height=2)
  text("BOLD", size=20, font=BODY_FONT, halign="center");
```

### Assessment Questions

1. How did you use OpenSCAD parameters to enable customization without requiring users to edit code logic?
2. What were the key differences in print time and material usage between your three size variants?
3. How did you test the key ring attachment, and what adjustments did your testing reveal?

---

## Appendix B: Parametric Keychain — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_\_\_  
**Description:** Design a fully parametric keychain that supports personalization and customization through top-level variables.

---

### Design Concept

- Keychain theme or purpose (personal use, gift, label system, other):
- Design elements (shape, attachment method, text or symbol, any decorative features):
- Parametric strategy — what will be variables, and what will be fixed geometry?

---

### Parametric Variables

List every named variable in your file and what it controls.

| Variable | Default Value | Unit | Purpose / What it affects |
| -------- | :-----------: | :--: | ------------------------- |
|          |               |  mm  |                           |
|          |               |  mm  |                           |
|          |               |  mm  |                           |
|          |               |  mm  |                           |
|          |               |  —   |                           |

---

### Variant Configurations

Document the three variants you produced. Change only size-related variables between variants — text, attachment, and structural relationships should scale automatically.

| Variant | `tag_w` (mm) | `tag_h` (mm) | `text_size` (mm) | Est. print time | Est. filament (g) |
| :-----: | :----------: | :----------: | :--------------: | :-------------: | :---------------: |
|  Small  |              |              |                  |                 |                   |
| Medium  |              |              |                  |                 |                   |
|  Large  |              |              |                  |                 |                   |

---

### Print Settings Used

| Setting            | Value    | Notes |
| ------------------ | -------- | ----- |
| Layer height       |          |       |
| Infill             |          |       |
| Supports           | Yes / No |       |
| Nozzle temperature | °C       |       |
| Bed temperature    | °C       |       |
| Material           |          |       |

---

### Key Ring Attachment Test

| Test                                  | Result           |
| ------------------------------------- | ---------------- |
| Ring diameter tested                  | mm               |
| Did ring fit through attachment loop? | Yes / No / Tight |
| Does the loop survive a firm tug?     | Yes / No         |
| Wall thickness at attachment point    | mm               |
| Any deformation or cracking observed? |                  |

Adjustments needed based on testing:

---

### Print and Assembly Results

For each variant, describe the print result:

**Small variant:**

- Text legibility (clear / readable / hard to read):
- Surface quality:
- Any print issues:

**Medium variant:**

- Text legibility:
- Surface quality:
- Any print issues:

**Large variant:**

- Text legibility:
- Surface quality:
- Any print issues:

---

### Customization Guide

Write this section for a future user who will download your `.scad` file and want to make their own version:

1. **To change the name:** set `name = "YOUR TEXT"` at line \_\_\_.
2. **To change the size:** adjust `tag_w` and `tag_h` proportionally. Recommended ratio: `tag_h = tag_w * 0.57`.
3. **To change the font:** update the `LABEL_FONT` constant at line \_\_\_.
4. **Common customizations:**
   - Smaller text that doesn't overflow: reduce `text_size` until the preview looks right.
   - Different ring size: change `ring_d` to match your key ring's wire diameter + 1 mm clearance.

---

### Reflections

1. Which parameterization decision had the most impact on the usefulness of the final design?

2. How could someone who doesn't know OpenSCAD still customize this design? What instructions would you write for them?

3. What would you add in a future iteration — a second line of text, a logo, a different attachment style?

---

### Attachments Checklist

- [ ] `.scad` file with full parametric structure and comments on all variables
- [ ] Photos of all three printed variants side by side
- [ ] Photos of key ring fit test (ring inserted through attachment loop)
- [ ] Completed variant configuration table
- [ ] Customization guide written for a future user

---

### Teacher Feedback

| Category                                                                                  | Score (0–3) | Notes |
| ----------------------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — keychains print and function; key ring fits                          |             |       |
| Design & Code Quality — fully parametric; all dimensions are variables; code is commented |             |       |
| Documentation — variant table complete; customization guide usable by a stranger          |             |       |
| **Total (0–9)**                                                                           |             |       |

---

## Appendix C: Parametric Keychain — Instructor Reference

### Project Context

This extension project reinforces the core text embossing and parametric design content of Lesson 6. The key educational goal is **parameter-driven design**: every visible dimension should trace back to a named variable, so changing one number updates the entire design proportionally. Students who hardcode numbers (e.g., `translate([35/2, 20/2, 5])` instead of `translate([tag_w/2, tag_h/2, tag_thickness])`) miss the point even if the print looks fine.

### Key Learning Points to Reinforce

**All dimensions must be variables.** A fully parametric design produces a different variant for every combination of input values, without any code changes. If changing `tag_w` from 25 to 45 produces a broken design (text overflow, attachment loop detaches, walls become invalid), the design is not truly parametric.

**The font constant pattern.** Students should define `LABEL_FONT = "Liberation Sans:style=Bold"` at the top of the file and reference it in every `text()` call. This is a direct application of the DRY principle from Lesson 3. Hardcoding font strings in every text call is a common mistake.

**Text overflow is a design failure, not a rendering quirk.** OpenSCAD does not automatically fit text to a container — if `text_size` is too large, the text will extend beyond the tag boundary and produce an illegal geometry when combined with the shell. Students should either add an `assert()` that checks estimated text width, or test each variant in preview before exporting.

**The key ring attachment geometry is the most technically demanding part.** The cylinder that forms the attachment loop must: (1) be large enough for a real key ring wire to fit through, (2) have walls thick enough to print reliably (minimum ~1.2 mm), and (3) connect cleanly to the main tag body. The 0.001 mm overlap in the starter code's `translate()` prevents non-manifold geometry at the junction.

### Constraints (Enforce These)

- All key dimensions (width, height, thickness, text size, ring diameter) must be named variables — no hardcoded numbers in geometry
- At least three variants must be printed, not just rendered
- Key ring attachment must be physically tested, not just visually inspected

### Assessment Notes

**Strong submissions show:** text that scales proportionally with `text_size` as a variable, a ring attachment that has been tested with a real key ring, and a customization guide that actually tells a non-programmer how to make their own version.

**Common weak areas:** Text overflow not detected until printing (add `assert()` or preview check to starter code reminder), attachment loop too thin to be durable (check `ring_wall >= 1.2 mm`), and documentation that describes the final design but doesn't guide future customization.

**Extension opportunity:** Students who finish early can investigate font rendering differences on their platform (Linux vs. macOS vs. Windows font availability), or add a second line of text (a subtitle or date) as a separate variable.

---

## Appendix D: Slicing Settings Quick Reference

_Use this reference when preparing your keychain (or any Lesson 6 design) for printing. Find your slicer and printer below. Recommended settings for most keychain prints: 0.20 mm layer height, 20% infill, no supports._

---

### D1 — PrusaSlicer (Prusa Printers)

#### Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                          |
| ---------------------- | :----------: | :----: | :-------: | ------------------------------ |
| Quick test / prototype |   0.30 mm    |  10%   | As needed | Draft — fastest, roughest      |
| Standard project       |   0.20 mm    | 15–20% | As needed | Best all-around starting point |
| Functional part        |   0.20 mm    | 30–40% | As needed | Use for parts under stress     |
| Fine detail / display  |   0.15 mm    |  15%   | As needed | Smoother surface; slower       |
| Solid reference part   |   0.20 mm    | 40–50% |  Rarely   | Rarely needed; long print      |

#### Filament Temperature Settings

| Filament | Nozzle Temp | Bed Temp | Notes                                      |
| -------- | :---------: | :------: | ------------------------------------------ |
| PLA      |  200–215°C  | 50–60°C  | Easiest to print; default choice           |
| PETG     |  230–250°C  | 70–85°C  | Use glue stick on PEI bed                  |
| TPU      |  220–240°C  | 30–60°C  | Print at 20–30 mm/s max; direct drive only |
| ABS      |  230–250°C  | 90–110°C | Requires enclosure; ventilate the room     |

_Always check the temperature range printed on your filament spool — it varies by brand._

#### Support Settings Guide

| Overhang Angle | Supports Needed? | Recommendation                |
| :------------: | :--------------: | ----------------------------- |
|     < 45°      |        No        | None                          |
|     45–60°     |      Maybe       | Preview first; add if sagging |
|     > 60°      |       Yes        | Support on build plate only   |
| Bridge < 20 mm |        No        | Bridges usually fine          |
| Bridge > 20 mm |      Maybe       | Preview; consider reorienting |

#### Common Problems and Quick Fixes

| Problem                      | Likely Cause                            | Fix                                       |
| ---------------------------- | --------------------------------------- | ----------------------------------------- |
| Print lifts off bed          | Poor adhesion / warping                 | Add brim; use glue stick; re-level bed    |
| Stringing between parts      | Temp too high / retraction              | Lower temp 5°C; check retraction settings |
| Layer lines very visible     | Layer height too thick                  | Use 0.15 mm or 0.20 mm                    |
| Print takes too long         | Layer height too thin / infill too high | Use 0.30 mm draft; reduce infill          |
| Holes too small              | FDM tolerance — always undersized       | Add 0.2–0.3 mm to hole diameter           |
| Part broke at layer boundary | Load perpendicular to layers            | Reorient so load is parallel to layers    |
| First layer not sticking     | Bed not level                           | Run bed leveling routine                  |
| Spaghetti / print failure    | Overhang without supports               | Add supports or reorient                  |

#### G-code Export Checklist

Before exporting, confirm:

- [ ] Correct printer profile selected
- [ ] Correct filament profile selected
- [ ] Layer height appropriate for use case
- [ ] Infill percentage set
- [ ] Supports enabled if needed
- [ ] Layer preview reviewed (no floating parts; supports where needed)
- [ ] Print time and filament weight noted for your records

_Sources: Prusa Research PrusaSlicer knowledge base (help.prusa3d.com); Hubs FDM guide (hubs.com)_

---

### D2 — Cura / Anycubic i3 Mega

#### Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                          |
| ---------------------- | :----------: | :----: | :-------: | ------------------------------ |
| Quick test / prototype |   0.30 mm    |  10%   | As needed | Draft — fastest, roughest      |
| Standard project       |   0.20 mm    | 15–20% | As needed | Best all-around starting point |
| Functional part        |   0.20 mm    | 30–40% | As needed | Use for parts under stress     |
| Fine detail / display  |   0.15 mm    |  15%   | As needed | Smoother surface; slower       |
| Solid reference part   |   0.20 mm    | 40–50% |  Rarely   | Rarely needed; long print      |

#### Filament Temperature Settings

| Filament | Nozzle Temp | Bed Temp  | Notes                                              |
| -------- | :---------: | :-------: | -------------------------------------------------- |
| PLA      |  200–210°C  |  50–60°C  | Easiest to print; Anycubic default                 |
| PETG     |  230–240°C  |  70–80°C  | Use painter's tape on steel bed                    |
| TPU      |  220–235°C  |  30–50°C  | Reduce speed to 25–30 mm/s                         |
| ABS      |  240–250°C  | 100–110°C | Requires ventilation; enclosed chamber recommended |

#### Support Settings Guide

| Overhang Angle | Supports Needed? | Recommendation                          |
| :------------: | :--------------: | --------------------------------------- |
|     < 45°      |        No        | None                                    |
|     45–60°     |      Maybe       | Preview first; add if sagging           |
|     > 60°      |       Yes        | Tree supports (Cura) — easier to remove |
| Bridge < 20 mm |        No        | Bridges usually fine                    |
| Bridge > 20 mm |      Maybe       | Preview; consider reorienting           |

#### Common Problems and Quick Fixes

| Problem                         | Likely Cause                       | Fix                                    |
| ------------------------------- | ---------------------------------- | -------------------------------------- |
| Print not adhering to steel bed | Poor leveling / worn tape          | Re-level; refresh painter's tape       |
| Filament oozing on travel       | Temperature too high               | Lower temp 5°C; check Z-hop setting    |
| Rough bottom layer              | Bed too close                      | Adjust leveling knob                   |
| Holes too small                 | FDM tolerance — always undersized  | Add 0.2–0.3 mm to hole diameter        |
| Part broke at layer boundary    | Load perpendicular to layers       | Reorient so load is parallel to layers |
| Clogs at nozzle                 | Moisture in filament / debris      | Dry filament; clear nozzle with needle |
| Spaghetti / complete failure    | Bed not leveled or supports missed | Re-level; add supports or reorient     |

#### G-code Export Checklist (Cura)

- [ ] Anycubic i3 Mega printer profile selected
- [ ] Correct filament type and diameter (1.75 mm)
- [ ] Layer height set appropriately
- [ ] Infill percentage set
- [ ] Supports enabled if needed (tree supports preferred)
- [ ] Nozzle and bed temperatures verified
- [ ] Print preview checked (no floating parts)
- [ ] Estimated time and filament weight noted

_Sources: Anycubic official documentation (anycubic.com); Ultimaker Cura guide (ultimaker.com)_

---

### D3 — Bambu Studio / X and P Series

#### Recommended Settings by Use Case

| Use Case               | Layer Height | Infill | Supports  | Notes                                    |
| ---------------------- | :----------: | :----: | :-------: | ---------------------------------------- |
| Quick test / prototype |   0.30 mm    |  10%   | As needed | Draft — use Standard mode                |
| Standard project       |   0.20 mm    | 15–20% | As needed | Best all-around; Bambu default-optimized |
| Functional part        |   0.20 mm    | 30–40% | As needed | Use for load-bearing parts               |
| Fine detail / display  |   0.15 mm    |  15%   | As needed | Bambu achieves excellent detail at speed |
| Solid reference part   |   0.20 mm    | 40–50% |  Rarely   | Modern infill usually sufficient         |

#### Filament Temperature Settings

| Filament       | Nozzle Temp | Bed Temp  | Notes                                              |
| -------------- | :---------: | :-------: | -------------------------------------------------- |
| PLA (standard) |  200–210°C  |  50–60°C  | Fastest print times; Bambu-optimized profiles      |
| PETG           |  230–250°C  |  70–80°C  | Slight cooling fan reduction for layer adhesion    |
| TPU            |  220–240°C  |  20–30°C  | Best quality with Bambu's tuned retraction         |
| ABS            |  240–260°C  | 100–110°C | Requires chamber heating; enclosed AMS recommended |

_Check Bambu's material database for current profile updates — these are dynamically optimized._

#### Support Settings Guide

| Overhang Angle | Supports Needed? | Recommendation                                   |
| :------------: | :--------------: | ------------------------------------------------ |
|     < 45°      |        No        | None                                             |
|     45–60°     |      Maybe       | Auto-supports may activate; accept defaults      |
|     > 60°      |       Yes        | Bambu auto-tree supports; minimal removal effort |
| Bridge < 20 mm |        No        | Excellent bridging on Bambu — no supports needed |
| Bridge > 20 mm |      Maybe       | Often bridgeable; preview before confirming      |

#### Common Problems and Quick Fixes

| Problem                         | Likely Cause                       | Fix                                       |
| ------------------------------- | ---------------------------------- | ----------------------------------------- |
| Nozzle clogging mid-print       | Thermal runaway / wet filament     | Dry filament in AMS; check nozzle temp    |
| Layer splitting                 | Wrong material in AMS slot         | Verify correct material in Bambu Studio   |
| Stringing / blobbing            | Cooling fan too low                | Increase cooling; adjust material profile |
| Print lifts off bed             | Bed leveling drift (rare on Bambu) | Auto-calibrate via Bambu Studio           |
| Holes undersized                | FDM tolerance — always undersized  | Add 0.3–0.4 mm to hole diameter           |
| Part broke at layer boundary    | Load perpendicular to layers       | Reorient so load is parallel to layers    |
| Print aborts unexpectedly       | AMS issue / filament jam           | Clear AMS; verify filament path           |
| Multi-material print misaligned | Nozzle offset miscalibration       | Run auto-calibration in maintenance menu  |

#### G-code Export Checklist (Bambu Studio)

- [ ] Correct printer (X1 / X1E) and hotend selected
- [ ] Filament material and color match actual AMS configuration
- [ ] Layer height optimal for desired quality
- [ ] Infill and supports set appropriately
- [ ] Print preview shows correct color layering (if multi-material)
- [ ] Estimated time and filament weight acceptable
- [ ] Camera enabled for remote monitoring
- [ ] Web upload or USB export ready

_Sources: Bambu Lab documentation (bambulab.com); Bambu Lab Community forums (community.bambulab.com)_

---

# Lesson 7 — Parametric Transforms and the Phone Stand Project

**Estimated Time:** 90–120 minutes  
**Course:** 3D Printing for the Blind

---

## Before You Start

You can now create shapes, combine them with CSG, organize them into modules, and add text. This lesson is about the next layer of precision: _moving, rotating, mirroring, and scaling_ objects with mathematical exactness.

You've used `translate()` before to move shapes around. But there's a subtlety about how OpenSCAD applies transforms — specifically, the _order_ in which they execute — that is one of the most common sources of confusing bugs in OpenSCAD designs. Understanding the order rule deeply is one of the most valuable things you'll get from this lesson.

This lesson also builds your first complete, multi-module project: a parametric phone stand. It's not just an exercise — it's a real, functional object. You'll measure your actual phone, enter those measurements as parameters, and the math will generate the exact geometry needed to hold your phone at the angle you specify. Change the angle parameter and the entire stand recalculates.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Apply `translate()`, `rotate()`, and `scale()` in the correct order for compound transforms
- Use trigonometric functions (`sin()`, `cos()`, `atan2()`) to compute precise geometry positions
- Use `minkowski()` to create rounded edges and `mirror()` to create perfectly symmetric parts
- Build a complete parametric phone stand from three measured dimensions
- Use `$preview` to conditionally speed up rendering during development
- Apply vector math functions: `norm()`, `cross()`, and the dot product

---

## Concept 1: Transform Order — The Most Important Rule in This Lesson

### How OpenSCAD Applies Multiple Transforms

When you write multiple transforms on the same line, OpenSCAD applies them in **right-to-left order** — the transform closest to the geometry object applies first.

Read this line:

```openscad
translate([10, 0, 0]) rotate([0, 0, 45]) cube(5);
```

Your eye reads left to right: "translate, then rotate." But OpenSCAD executes right to left: first `rotate` (it's closer to `cube`), then `translate`. So the cube is first rotated 45° around the origin, and _then_ moved 10 mm in X.

Now read this:

```openscad
rotate([0, 0, 45]) translate([10, 0, 0]) cube(5);
```

This time: first `translate` (cube moves 10 mm right), then `rotate` (the cube, now positioned at X=10, rotates around the origin). The result is that the cube ends up in a completely different location — it orbits around the origin rather than rotating in place.

### Why This Matters

This rule has a real consequence: **changing the order of transforms changes the position of your geometry**, even if the transforms themselves are identical. This is the source of a lot of frustrating bugs in OpenSCAD designs, especially when the code looks correct to you.

The way to internalize it: think of it as nested functions. In `translate(rotate(cube()))`, `cube()` runs first, then `rotate()` acts on its output, then `translate()` acts on that result. The same way `f(g(x))` in math means "apply g first, then f."

```openscad
// Example A: cube rotates 45° in place, then moves 10mm right
// (rotate happens to the stationary cube, then translate moves it)
translate([10, 0, 0]) rotate([0, 0, 45]) cube(5);

// Example B: cube moves 10mm right first, then the rotated version orbits the origin
// (translate moves it first, then rotate spins it around origin — completely different result)
rotate([0, 0, 45]) translate([10, 0, 0]) cube(5);
```

**Build both of these side by side.** Look at where each cube ends up. The visual difference makes this rule concrete in a way that reading about it can't.

### The Rule in Plain Language

"The last transform written (closest to the shape) runs first." Repeat this until it's automatic.

---

## Step 1 — Translate, Rotate, Scale

### `translate([x, y, z])` — Move

`translate()` moves its child object by the specified amount in each axis. `translate([10, 0, 0])` moves 10 mm to the right. `translate([0, 0, 5])` moves 5 mm up. Negative values move in the opposite direction.

You already know this one from previous lessons. The key reminder is the order rule above.

### `rotate([x_deg, y_deg, z_deg])` — Rotate

`rotate()` rotates its child around the X, Y, and/or Z axes by the specified angles in degrees. The rotation happens around the origin — if the object isn't at the origin, it will orbit around it (which is sometimes what you want, sometimes not).

`rotate([0, 0, 45])` rotates around the Z axis (spins in the XY plane).
`rotate([90, 0, 0])` rotates around the X axis (tips the object forward/backward).
`rotate([0, 90, 0])` rotates around the Y axis (tips the object left/right).

When you want to rotate an object around its own center (not the origin), translate it to the origin first, rotate it, then translate it to its final position:

```openscad
// Rotate a cylinder around its own center, then position it
translate([20, 30, 0])        // 3. move to final position
  rotate([0, 90, 0])          // 2. rotate (runs before translate due to order rule)
    cylinder(h=20, r=5);      // 1. cylinder starts at origin
```

### `scale([x, y, z])` — Stretch or Compress

`scale([1, 1, 2])` doubles the height of an object without changing its width or depth. `scale([0.5, 0.5, 0.5])` shrinks everything by half. `scale([1, 2, 1])` doubles depth only.

`scale()` is less common than the others because it changes proportions — a sphere becomes an ellipsoid, a cube becomes a rectangular box. But it's useful for quick dimension experiments or for stretching a symmetrical part in one direction.

```openscad
// Stretch a sphere 2x in Z to create an egg shape
scale([1, 1, 2]) sphere(r=10, $fn=32);
```

---

## Step 2 — Trigonometry for Geometric Positioning

### Why You Need Trig in Design

Trigonometry shows up in 3D design whenever you need to:

- Place objects evenly around a circle
- Compute an angle from a measured slope
- Position something at a known distance and direction from a reference point
- Calculate how deep a feature needs to be at a given angle

Fortunately, you don't need to understand all of trigonometry deeply — you need three functions and one rule.

**The rule: all angles in OpenSCAD are in degrees.** Not radians. This is different from most programming languages. `sin(90)` in OpenSCAD returns 1 (correct for 90°). If you accidentally use radians, your numbers will be wildly off.

### `sin()`, `cos()`, and Placing Things Around a Circle

`sin(angle)` and `cos(angle)` return the Y and X components of a unit vector pointing at that angle. Multiplying by a radius gives you the actual coordinates.

For a circle of radius `r`, the (x, y) position at angle `a` is:

- `x = cos(a) * r`
- `y = sin(a) * r`

```openscad
// Place 6 cylinders evenly around a circle of radius 25mm
// 360° / 6 = 60° apart
for (i = [0:5]) {
  angle = i * 60;
  translate([cos(angle) * 25, sin(angle) * 25, 0])
    cylinder(r=3, h=5, $fn=16);
}
```

### `atan2(y, x)` — The Safe Angle Calculator

When you need to go the other direction — from (x, y) coordinates back to an angle — use `atan2(y, x)`.

`atan(y/x)` seems like it would work, but it fails in two quadrants. When x is negative (the left half of the circle), the division produces a value that places the angle in the wrong half of the circle. `atan2(y, x)` takes both components separately and always returns the correct angle for all four quadrants.

```openscad
dx = -5;  dy = 5;
angle_correct = atan2(dy, dx);   // 135° — correct (upper-left quadrant)
angle_wrong   = atan(dy / dx);   // -45° — wrong (treats it as lower-right)
echo("atan2:", angle_correct, "  atan:", angle_wrong);
```

Always use `atan2()` when computing angles from coordinate pairs. Make this a habit.

---

## Step 3 — `minkowski()` for Rounded Edges

### What the Minkowski Sum Does

`minkowski()` computes something called the **Minkowski sum** of its children. The geometric meaning: it "rolls" the second shape over every point on the surface of the first shape, and the result is all the space swept out by this rolling.

In practice, the most useful application is rounding the edges and corners of a box. If you take the Minkowski sum of a cube and a small sphere, you get a box with perfectly rounded corners and edges — the rounding radius equals the sphere's radius.

The variation used most often for printable parts is to use a **cylinder** instead of a sphere. A very flat cylinder (nearly zero height) rounds the vertical edges of a box but keeps the bottom face flat. This is ideal for parts that will sit on a surface, because a sphere-Minkowski box has a rounded bottom that makes it rock.

```openscad
// Rounded box — sphere rounds all corners and edges including bottom
module rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h - r], center=false);
    sphere(r=r, $fn=16);
  }
}

// Flat-base rounded box — cylinder rounds edges but keeps bottom flat
// The w/d dimensions shrink by 2r, and the height stays the same
module flat_rounded_cube(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h], center=false);
    cylinder(r=r, h=0.01, $fn=24);   // nearly zero height: rounds edges, not top/bottom
  }
}

rounded_cube(40, 30, 20, r=4);
translate([50, 0, 0]) flat_rounded_cube(40, 30, 20, r=4);
```

### Performance Warning

`minkowski()` is computationally expensive. With high `$fn` values on the secondary shape, it can take several minutes to compute. During development, keep the secondary shape at `$fn=12–16`. Only use `$fn=32+` for final export. Even better: use the `$preview` technique in Step 5 to skip Minkowski entirely during quick iterations.

---

## Step 4 — `mirror()` for Symmetry

### Design One Half, Mirror the Other

Many designs have a line of symmetry — two legs, two wings, two ears, two cable clips. Instead of designing both halves separately (which introduces the risk of slight misalignment), design one half and mirror it. The mirrored copy is guaranteed to be exactly symmetric.

`mirror([1, 0, 0])` reflects across the YZ plane — negates X coordinates.
`mirror([0, 1, 0])` reflects across the XZ plane — negates Y coordinates.
`mirror([0, 0, 1])` reflects across the XY plane — negates Z coordinates.

```openscad
// Design one ear, mirror it to get a symmetric pair
module ear_peg() {
  translate([20, 0, 0]) cylinder(r=4, h=8, $fn=32);
}

ear_peg();                     // right ear
mirror([1, 0, 0]) ear_peg();  // left ear — exact mirror image

// Mirror works for complex modules too
module mounting_clip() {
  difference() {
    cube([15, 8, 10]);
    translate([7.5, -0.001, 2])
      cylinder(r=3, h=8.002, $fn=32);  // cable channel
  }
}

translate([0, 20, 0]) {
  mounting_clip();
  translate([15, 0, 0]) mirror([1, 0, 0]) mounting_clip();  // symmetric partner
}
```

---

## Step 5 — Build the Complete Phone Stand

### Why Build This

The phone stand is your first complete multi-module project. It's functional, parametric, and applies trigonometry to solve a real design problem. More importantly, it's something you'll actually use — which is a good test of your own design work.

### Measuring Your Phone

Before writing code, use a ruler or calipers to measure:

- **Phone width**: the dimension across the face (X dimension in the cradle)
- **Phone thickness**: how thick the phone is (determines cradle depth)
- **Preferred angle**: how far you want the phone to lean back from vertical (65° from horizontal is a comfortable default for most people)

### The Full Parametric Design

```openscad
// ============================================================
// Parametric Phone Stand
// ============================================================
// Measure your phone and enter the three values below.
// All other dimensions are computed automatically.
//
// PARAMETERS TO CUSTOMIZE:
// - phone_w: width of your phone in mm
// - phone_d: thickness of your phone in mm
// - angle:   viewing angle from horizontal (60–80 degrees typically)
// ============================================================

phone_w = 75;   // mm — phone width (fits in cradle)
phone_d = 9;    // mm — phone thickness (sets cradle clearance)
angle   = 65;   // degrees — viewing angle from horizontal

// Internal dimensions — computed from the parameters above
lip_h       = 15;   // mm — depth of cradle lip
base_h      = 5;    // mm — base plate thickness
cradle_wall = 3;    // mm — wall thickness around phone
r_fillet    = 3;    // mm — rounded edge radius

// Trigonometry: compute base depth from the viewing angle
// The phone support must be at the correct lean angle
base_d = (phone_d + 10) / cos(90 - angle);

module flat_rounded_cube(w, d, h, r=3) {
  // Guard against degenerate dimensions after subtracting rounding radius
  assert(w > 2*r && d > 2*r, "Dimensions too small for the rounding radius");
  minkowski() {
    cube([w - 2*r, d - 2*r, h]);
    cylinder(r=r, h=0.01, $fn=24);
  }
}

module base_plate() {
  // Wide, flat base that anchors the stand
  flat_rounded_cube(phone_w + 20, base_d + 10, base_h, r_fillet);
}

module back_support() {
  // Angled wall that supports the back of the phone
  // rotate([angle-90, 0, 0]) tilts the wall to the viewing angle
  rotate([angle - 90, 0, 0])
    flat_rounded_cube(phone_w + 6, cradle_wall, 60, r_fillet);
}

module lip() {
  // Bottom ledge that the phone rests on
  rotate([angle - 90, 0, 0])
    translate([0, -lip_h, 0])
      flat_rounded_cube(phone_w + 6, lip_h + cradle_wall, cradle_wall, r_fillet);
}

// Final assembly: base + back support + lip
base_plate();
translate([0, 0, base_h]) {
  back_support();
  lip();
}
```

### Understanding the Trigonometry

The rotation `rotate([angle - 90, 0, 0])` deserves an explanation.

In OpenSCAD, a rotation of 0° around the X axis means the object is vertical (standing straight up). A rotation of -90° tips it flat forward (horizontal). When we want the back support to lean at `angle` degrees from horizontal, we need a rotation of `angle - 90` degrees:

- If `angle = 90` (vertical phone): `rotate([0, 0, 0])` — no rotation, support is vertical
- If `angle = 65` (typical lean): `rotate([-25, 0, 0])` — leans 25° back
- If `angle = 45` (steeper lean): `rotate([-45, 0, 0])` — leans 45° back

After building the stand, try changing `angle` from 45 to 80 in 5-degree steps and rebuild each time. Watch the support geometry recalculate automatically for every value.

---

## Step 6 — Adaptive Quality with `$preview`

### Fast During Development, High-Quality for Export

`$preview` is a special OpenSCAD variable that is automatically `true` during F5 preview (the fast OpenSCAD preview) and `false` during F6 full render and `3dm build`. You can use it to conditionally use lower-quality (faster) settings during development and automatically switch to high quality for final export.

```openscad
// Low $fn during preview for fast renders; high $fn for final build
$fn = $preview ? 16 : 64;

sphere(r=20);  // uses $fn=16 in preview, $fn=64 during 3dm build
```

This is especially valuable with `minkowski()`, which can be very slow at high `$fn`. During development, replace the Minkowski operation with a plain box placeholder:

```openscad
module rounded_box_adaptive(w, d, h, r=4) {
  if ($preview) {
    // Fast placeholder during development
    color("orange", 0.6) cube([w, d, h]);
  } else {
    // Full, accurate Minkowski sum for final export
    minkowski() {
      cube([w - 2*r, d - 2*r, h - r]);
      sphere(r=r, $fn=12);
    }
  }
}
```

---

## Concept 2: Vector Math Functions

### Three Functions Worth Knowing

**`norm(v)`** — returns the length (magnitude) of a vector. `norm([3, 4, 0])` = 5. This is the Euclidean distance from the origin to the point (3, 4, 0), and it follows from the Pythagorean theorem: √(3² + 4² + 0²) = 5.

**Dot product (`a * b`)** — returns a single number that measures how "aligned" two vectors are. If both vectors point in exactly the same direction, the dot product equals the product of their lengths. If they're perpendicular, it equals 0. If they point in opposite directions, it's negative. Useful for checking angles between directions.

**`cross(a, b)`** — returns a vector perpendicular to both input vectors. `cross([1,0,0], [0,1,0])` returns `[0,0,1]` — the Z axis is perpendicular to both X and Y. Useful for computing surface normals or finding the axis of rotation between two vectors.

```openscad
// norm: length of a vector
v = [3, 4, 0];
echo("Length:", norm(v));   // 5

// dot product: alignment measure
a = [1, 0, 0];   // X axis
b = [0.7, 0.7, 0];
echo("Dot product:", a * b);   // 0.7

// cross product: vector perpendicular to both
c = cross([1, 0, 0], [0, 1, 0]);
echo("Cross:", c);   // [0, 0, 1] — the Z axis
```

---

## Quiz — Lesson 7 (15 questions)

1. In OpenSCAD, do transforms apply left-to-right or right-to-left (which transform runs first)?
2. What is the result of `cos(0)` and `sin(90)` in OpenSCAD (working in degrees)?
3. What is the key advantage of `atan2(y, x)` over `atan(y/x)` for computing angles?
4. What does `minkowski()` do geometrically? Describe it in plain language.
5. What does `mirror([1, 0, 0])` do? Which plane does it reflect across?
6. What does `scale([1, 1, 2])` do to a sphere?
7. Write OpenSCAD code to place 8 cylinders evenly spaced around a circle of radius 30 mm.
8. What does `norm([3, 4, 0])` return, and how is this computed?
9. True or False: `translate([10,0,0]) rotate([0,0,45]) cube(5)` rotates the cube first, then translates it.
10. What does setting `$preview` to `true` mean in OpenSCAD, and when is it set automatically?
11. Why does using `minkowski()` with `cylinder(h=0.01)` instead of `sphere()` produce a flat bottom surface?
12. In the phone stand design, the back support uses `rotate([angle - 90, 0, 0])`. If `angle = 70`, what is the actual rotation applied? What does this mean physically?
13. What does `cross([1,0,0], [0,1,0])` return and what is the geometric meaning?
14. Explain why designing one half of a symmetric part and using `mirror()` is better than designing both halves separately.
15. A design requires placing 5 components at the vertices of a regular pentagon centered at the origin. Using `cos()` and `sin()`, what is the formula for the coordinates of each vertex, given a circumradius of 25 mm?

---

## Extension Problems (15)

1. Redesign your phone stand with a USB cable slot cut through the lip. Make the slot width and depth parameters.
2. Add rubber foot pockets to the base plate: four small rectangular cutouts on the bottom face, positioned at the corners.
3. Create a phone stand variant that holds the phone in landscape (horizontal) orientation. Document which parameters changed and why.
4. Build a radially symmetric decoration: 12 identical fins evenly spaced around a central cylinder using `for` loop and `rotate()`.
5. Use `atan2()` to compute the angle of a ramp and use that angle with `rotate()` to align a small object precisely on the ramp surface.
6. Design a phone stand for a large tablet (e.g., 180mm × 240mm). Update the parameters, rebuild, and verify the stand still holds at the correct angle.
7. Build a "compound arm" — three rigid link segments connected end-to-end, each at a different angle. Display all three as an assembly with no gaps or overlaps.
8. Create an ergonomic keyboard wrist rest using `minkowski()` with a cylinder for smooth, flat-base contouring.
9. Build a visual transform order demo: two colored objects that differ only in the order of `translate()` and `rotate()`, placed side by side with labels.
10. Redesign the phone stand as a wall-mount: replace the base plate with a flat back plate that has two M3 mounting holes.
11. Build a mirror-symmetric earring holder: design one branch with pegs, then use `mirror()` to create the symmetric partner. Both branches should connect to a central hanging loop.
12. Use `norm()` to calculate the space diagonal of a rectangular prism (distance from one corner to the opposite corner) and use that value as a dimension in the design.
13. Research OpenSCAD's `multmatrix()` function. Build a shear transformation example (slanting a box into a parallelogram-shaped prism) that can't be achieved with standard transforms.
14. Add snap-fit clips to the phone stand cradle: two small flexible fingers that slightly grip the phone. Dimension the fingers using snap-fit principles from Lesson 8.
15. Design a dual phone stand: two cradles side by side at different angles, sharing a common base. Use a `for` loop and parametric spacing.

---

## References and Helpful Resources

- OpenSCAD User Manual — Transformations — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Transformations)

- OpenSCAD User Manual — Mathematical Functions — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Mathematical_Functions)

- OpenSCAD User Manual — Minkowski and Hull — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../textbooks/Programming_with_OpenSCAD.epub) — Transforms chapter
- [CodeSolutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) — Phone stand worked example
- [OpenSCAD Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) — Math and transform functions
  -e

---

# Lesson 8 — Advanced Parametric Design and Interlocking Features

**Estimated Time:** 90–120 minutes  
**Course:** 3D Printing for the Blind

---

## Before You Start

Every design you've built so far has been a single-piece print. This lesson moves to **multi-part assemblies**: designs where two or more printed pieces must physically fit together. This is where the gap between "looks right on screen" and "works in real life" becomes most critical.

The central concept of this lesson is **tolerance**: the intentional gap between mating parts that makes them fit together correctly. Too tight and the pieces won't go together at all. Too loose and they wobble, rattle, or fall apart. The exact right amount of clearance depends on your specific printer, your specific filament, and your slicer settings — and the only reliable way to know it is to measure it.

This lesson gives you a systematic, professional approach: print a tolerance test coupon, measure the actual results, encode those measurements as named constants in your code, and build designs that work the first time instead of after three reprints.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Explain why FDM-printed holes are always undersized and how to compensate
- Design press-fit and slip-fit joints using printer-specific tolerance values
- Print and use a tolerance test coupon to measure your printer's actual clearances
- Design snap-fit cantilever arms sized correctly for different materials
- Design dovetail slide joints and stackable assemblies
- Use threaded insert pockets for secure metal-to-plastic fastening
- Apply true chamfer geometry
- Apply tolerance values as named constants throughout a design

---

## Concept 1: The Physics of FDM Tolerances

### Why Printed Holes Are Always Too Small

This is one of the most important physical facts about FDM printing, and it surprises almost every beginner the first time they encounter it.

When an FDM printer extrudes a bead of filament, that bead spreads slightly as it deposits — it squishes outward from the center of the extrusion path. This happens at every wall, but the _direction_ of the squishing is important:

- On **outer walls** (the outside of a part), the extrusion squishes _outward_ from the wall's nominal surface. The part comes out slightly larger than designed.
- On **inner walls** (the inside of a hole), the extrusion squishes _inward_ — toward the center of the hole. The hole comes out smaller than designed.

The result: a hole designed to be 10 mm in diameter prints as approximately 9.6–9.8 mm. A peg designed to be 10 mm prints as approximately 9.8–10.0 mm. Two parts with a 10 mm nominal dimension will not fit together — the peg is too large for the hole.

This isn't a flaw in your printer. It's a fundamental consequence of how FDM extrusion works, and every designer working with FDM printing accounts for it.

### What "Clearance" Means

**Clearance** is the intentional difference in size between a peg (or shaft, or tab) and its mating socket (or hole, or slot). You make the peg slightly smaller than the socket — the amount of this size difference is the clearance.

Different clearances produce different fits:

| Fit Type              | Clearance (typical PLA, 0.4mm nozzle) | Behavior                                                   |
| --------------------- | ------------------------------------- | ---------------------------------------------------------- |
| Press-fit (permanent) | 0.0 – 0.1 mm                          | Requires force to assemble; doesn't come apart easily      |
| Slip-fit (removable)  | 0.2 – 0.3 mm                          | Slides smoothly; can be assembled and disassembled by hand |
| Loose/clearance fit   | 0.4 – 0.5 mm                          | Some play and wobble; appropriate for hinges and pivots    |

These are starting-point estimates. Your actual values will differ based on your printer and materials. That's what the test coupon is for.

---

## Step 1 — The Tolerance Test Coupon

### Print This Before Every New Printer or Material

The tolerance test coupon is a small, quick print that gives you empirical data about your specific printer's actual clearances. Print it once with your standard material and settings. Test each peg-socket pair. Record the results. These numbers become the constants in your design files.

You'll need to do this test if you:

- Use a new printer you haven't printed on before
- Switch to a significantly different filament (e.g., from PLA to PETG)
- Change your nozzle size
- Change your slicer settings significantly (especially layer height)

```openscad
// Tolerance Test Coupon
// Prints a row of pegs and a row of matching sockets at five clearance values.
// After printing: test each peg in each socket. Record which clearances give
// press-fit, slip-fit, and loose fit.

nominal        = 10;     // mm — nominal peg diameter
test_h         = 8;      // mm — peg height
plate_t        = 3;      // mm — socket plate thickness
socket_d_outer = nominal + 8;   // mm — outer diameter of socket annulus

clearances = [0.0, 0.1, 0.2, 0.3, 0.4];   // mm — the five clearances to test

module test_peg(clearance) {
  // Peg diameter = nominal - clearance
  color("SteelBlue")
    cylinder(d=nominal - clearance, h=test_h, $fn=32);
}

module test_socket() {
  // All sockets have the same nominal hole; pegs vary
  color("Coral")
  difference() {
    cylinder(d=socket_d_outer, h=plate_t, $fn=32);
    translate([0, 0, -0.001])
      cylinder(d=nominal, h=plate_t + 0.002, $fn=32);
  }
}

module clearance_label(clearance) {
  // Small label showing the clearance value
  translate([0, -(nominal/2 + 5), 0])
    linear_extrude(1)
      text(str(clearance, "mm"), size=2.5, font="Liberation Sans",
           halign="center", $fn=4);
}

// Row 1: Pegs — each has a different clearance reduction applied
for (i = [0 : len(clearances) - 1]) {
  translate([i * (socket_d_outer + 4), 0, 0]) {
    test_peg(clearances[i]);
    clearance_label(clearances[i]);
  }
}

// Row 2: Sockets — all have the same nominal hole
translate([0, -(socket_d_outer + 8), 0])
  for (i = [0 : len(clearances) - 1]) {
    translate([i * (socket_d_outer + 4), 0, 0])
      test_socket();
  }
```

### How to Read the Results

After printing, test each peg in each socket. Record:

| Fit Type      | Test Method                                               | What to Record       |
| ------------- | --------------------------------------------------------- | -------------------- |
| Press-fit     | Tightest peg that enters socket with firm thumb pressure  | Your press clearance |
| Slip-fit      | Loosest peg that doesn't rattle in the socket when shaken | Your slip clearance  |
| Bearing/pivot | Loosest peg that rotates smoothly without visible wobble  | Slip + 0.05–0.1 mm   |

These measured values replace the rough estimates in the table above. Record them in a note or file, and use them for every design from now on.

---

## Step 2 — Encoding Tolerance as Named Constants

### Never Hardcode Tolerance Values

Tolerance clearance values should appear in your design file exactly once — at the top, as named constants. When you measure different clearances (because you're on a different printer, or using PETG instead of PLA), you change the constant in one place and the entire design updates.

```openscad
// ============================================================
// TOLERANCE CONSTANTS — measured from your test coupon print
// Run the test coupon, measure, and update these values.
// ============================================================
PRESS_FIT_C = 0.2;    // mm — tightest peg that enters with thumb pressure
SLIP_FIT_C  = 0.3;    // mm — loosest peg that doesn't rattle
SNAP_C      = PRESS_FIT_C;   // snap-fits use press-fit clearance

// Use these constants throughout the file:
// hole_r = peg_r - SLIP_FIT_C    (for a slip-fit hole)
// hole_r = peg_r - PRESS_FIT_C   (for a press-fit hole)
```

This is exactly the same DRY principle from Lesson 3 applied to physical measurements. The constants are derived from reality (your test print); the geometry uses those constants; change one measurement and everything that depends on it updates automatically.

---

## Step 3 — Snap-Fit Cantilever Arms

### What a Snap-Fit Is

A snap-fit is a self-locking fastener made entirely from the printed plastic itself. A thin, flexible beam (the cantilever arm) deflects as the mating part pushes past it, then springs back to its original position, locking the parts together. Think of the plastic tab that holds a battery cover in place, or the clip that holds a phone case together.

Snap-fits are one of the most elegant features you can design. When they work well, they're intuitive, require no separate hardware, and can be assembled and disassembled dozens of times without wearing out. When they're designed wrong, they either crack (too stiff) or don't hold (too flexible).

### The Flexibility Rule

The key design parameter is the **beam flexibility ratio**: `beam_thickness / beam_length`. For PLA, this ratio must be **0.15 or less** — meaning the beam's thickness must be at most 15% of its length. A beam that's too thick relative to its length won't flex and will crack instead of deflecting.

Different materials allow different ratios because they have different stiffness (elastic modulus):

| Material | Maximum beam_t / beam_l | Why                                                |
| -------- | ----------------------- | -------------------------------------------------- |
| PLA      | 0.15                    | Relatively stiff; snaps or cracks if over-flexed   |
| PETG     | 0.18                    | Slightly more flexible than PLA                    |
| Nylon    | 0.20                    | Good flexibility and fatigue resistance            |
| TPU      | 0.25                    | Very flexible; excellent for repeated flex         |
| ABS      | 0.12                    | More brittle than PLA; needs shorter/thinner beams |

```openscad
module snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.2, hook_angle=30,
                material="PLA") {

  // Maximum flexibility ratio by material
  max_ratio = (material == "TPU")  ? 0.25 :
              (material == "PETG") ? 0.18 :
              (material == "Nylon")? 0.20 :
              (material == "ABS")  ? 0.12 :
              0.15;  // default: PLA

  ratio = beam_t / beam_l;

  // Validate before any geometry is created
  assert(ratio <= max_ratio,
    str("snap_arm: beam_t/beam_l ratio (", ratio,
        ") exceeds maximum for ", material, " (", max_ratio,
        "). Reduce beam_t to ≤ ", floor(beam_l * max_ratio * 10) / 10, "mm."));

  union() {
    // The flexible beam itself
    cube([beam_w, beam_l, beam_t]);
    // The hook at the end of the beam that catches the mating part
    translate([0, beam_l, 0]) union() {
      rotate([0, -hook_angle, 0])
        cube([beam_w, 2, hook_h]);
      translate([0, 0, beam_t])
        cube([beam_w, 2, hook_h]);
    }
  }
}

// PLA snap arm — standard sizing
snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.5, material="PLA");
// For a 20mm PLA beam: max thickness = 20 × 0.15 = 3.0mm. This design uses 1.8mm — safe.

// PETG snap arm — can be slightly thicker, more resilient
translate([15, 0, 0])
  snap_arm(beam_l=20, beam_t=2.2, beam_w=8, hook_h=1.5, material="PETG");
```

### Orienting the Snap-Fit for Printing

Snap-fit beams need to flex in one specific direction. For maximum strength and flexibility, the beam should be printed so that the flex direction is perpendicular to the layer lines. This means orienting the print so the beam runs horizontally and flexes up-down (in the Z direction), not sideways (where layer interfaces would create a weakness).

---

## Step 4 — Dovetail Slide Joint

### What a Dovetail Is and Why It's Useful

A dovetail joint has a trapezoidal cross-section — wider at one end than the other, like the tail of a dove. This shape means the joint can only slide in one direction. You can slide two dovetail pieces apart, but you cannot pull them perpendicular to the slide direction — the trapezoidal shape prevents it.

This makes dovetails excellent for: drawer rails, camera slider tracks, adjustable phone mounts, and any assembly where you want parts that can be separated easily but don't fall apart during normal use.

```openscad
dt_l     = 50;    // mm — length of the slide
dt_w_top = 8;     // mm — narrower dimension (top of trapezoid)
dt_w_bot = 12;    // mm — wider dimension (base of trapezoid)
dt_h     = 5;     // mm — depth of the dovetail profile
clearance = 0.2;  // mm — your measured slip-fit clearance

module dovetail_male(l=dt_l, w_top=dt_w_top, w_bot=dt_w_bot, h=dt_h) {
  // The trapezoidal profile, extruded along the Y axis
  profile = [
    [-w_bot/2, 0], [ w_bot/2, 0],   // wide base
    [ w_top/2, h], [-w_top/2, h]    // narrow top
  ];
  rotate([90, 0, 0])
    linear_extrude(l)
      polygon(profile);
}

module dovetail_female(l=dt_l, w_top=dt_w_top, w_bot=dt_w_bot, h=dt_h, c=clearance) {
  // Female slot: same shape but all dimensions enlarged by clearance
  profile = [
    [-(w_bot/2 + c), -0.001], [ w_bot/2 + c, -0.001],
    [ w_top/2 + c,   h + c ], [-(w_top/2 + c), h + c]
  ];
  rotate([90, 0, 0])
    linear_extrude(l + 0.002)
      polygon(profile);
}

// Part A: a plate with a female dovetail slot
difference() {
  cube([30, dt_l, 15]);
  translate([15, -0.001, 5])
    dovetail_female();
}

// Part B: the sliding piece with a male dovetail
translate([40, 0, 0]) {
  cube([30, dt_l, 10]);
  translate([55 - 40, 0, 5])
    dovetail_male();
}
```

---

## Step 5 — Stackable Bin System

### Designing Bins That Stack

For parts that stack vertically, one piece needs a raised lip on top that fits inside the walls of the next piece. The outer dimensions of this lip must be slightly smaller than the inner dimensions of the wall — by your slip-fit clearance — so the stacked bin sits snugly but can still be separated by hand.

```openscad
bin_w     = 80;    // mm — bin width
bin_d     = 60;    // mm — bin depth
bin_h     = 40;    // mm — bin height
wall      = 2.5;   // mm — wall thickness
lip_h     = 5;     // mm — height of the stacking lip
lip_clear = 0.25;  // mm — your measured slip-fit clearance

module bin_body() {
  difference() {
    cube([bin_w, bin_d, bin_h]);
    translate([wall, wall, wall])
      cube([bin_w - 2*wall, bin_d - 2*wall, bin_h]);  // hollow interior, open top
  }
}

module stacking_lip() {
  // Lip outer dimensions = bin inner dimensions - clearance
  // This makes the lip fit inside the next bin's walls
  translate([lip_clear, lip_clear, bin_h])
    difference() {
      cube([bin_w - 2*lip_clear, bin_d - 2*lip_clear, lip_h]);
      translate([wall - lip_clear, wall - lip_clear, wall])
        cube([bin_w - 2*wall, bin_d - 2*wall, lip_h]);
    }
}

bin_body();
stacking_lip();
```

After building this, change `lip_clear` and note how it affects the stacking fit. If you print two bins and they don't stack or are too loose, adjust `lip_clear` by 0.05–0.10 mm and reprint the test piece.

---

## Step 6 — Heat-Set Threaded Inserts

### The Problem with Plastic Threads

If you tap a thread directly into printed plastic and screw a bolt into it repeatedly, the plastic threads will wear down and eventually strip. This makes plastic-threaded holes unsuitable for any assembly that will be disassembled and reassembled multiple times.

**Heat-set threaded inserts** solve this problem. They are small brass cylinders with internal threads and external ridges. You heat them with a soldering iron and press them into a printed hole — the heat melts the plastic around the insert, the ridges embed into the material, and when it cools, you have a permanent metal thread that won't strip even after many assembly cycles.

Heat-set inserts are commonly available in M2, M3, and M4 sizes and are standard hardware in professional product design.

```openscad
// M3 brass heat-set insert dimensions:
// Outer diameter: ~4.5mm; Length: ~5.7mm
module m3_insert_pocket(depth=6) {
  // Slightly undersized hole — insert is heated and pressed in with force
  cylinder(r=2.35, h=depth + 0.001, $fn=16);  // (4.5 + 0.2) / 2
}

// M4 brass heat-set insert:
// Outer diameter: ~5.6mm
module m4_insert_pocket(depth=8) {
  cylinder(r=2.9, h=depth + 0.001, $fn=16);   // (5.6 + 0.2) / 2
}

// Example: a plate with two M3 insert pockets
difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_insert_pocket(depth=10.002);
  translate([30, 15, -0.001]) m3_insert_pocket(depth=10.002);
}
```

**Note:** Heat-set insert hole dimensions vary between manufacturers. Check the datasheet for your specific inserts. The values above are typical for common brass inserts.

---

## Step 7 — True Chamfers

### What a Chamfer Is

A chamfer is a 45° beveled edge where two surfaces meet at a sharp corner. Chamfers serve two purposes in printed parts: they look more professional than a sharp edge, and they can act as lead-ins that help parts align during assembly.

A common mistake is creating a chamfer by simply cropping the top of a part at an angle — this produces a slanted surface, but it's not a true chamfer created from the model's geometry. A true chamfer is created using a `difference()` boolean cut.

```openscad
module chamfered_box(w, d, h, c=2) {
  // c = chamfer size in mm (both horizontal and vertical dimension of the bevel)
  difference() {
    cube([w, d, h]);
    // Remove the top c millimeters of the edges
    // by cutting a hollow frame shape from the top
    translate([0, 0, h - c])
      difference() {
        cube([w, d, c + 0.001]);                      // top layer of the box
        translate([c, c, 0]) cube([w - 2*c, d - 2*c, c + 0.001]);  // inset rectangle
      }
  }
}

chamfered_box(50, 40, 20, c=3);
```

The chamfer logic: take the top `c` mm of the box as a separate region. Subtract an inset rectangle from it, leaving only the border frame. Remove that border frame from the original box. The result is a clean 45° bevel around the top perimeter.

---

## Step 8 — Dowel Pins for Alignment

### Why Alignment Pins Matter

When two parts are assembled by hand, they may not align perfectly — especially if the mating surfaces are flat. Dowel pins are small cylindrical protrusions on one part that fit into matching pockets on the other. They guarantee precise alignment regardless of how the parts were held during assembly.

One part has the pins (protruding pegs). The other has the pockets (matching blind holes). The pins enter the pockets with a press-fit or slip-fit clearance, locking the parts into perfect alignment.

```openscad
pin_r     = 3;      // mm — pin radius
pin_h     = 6;      // mm — pin height
pin_clear = 0.15;   // mm — slightly tighter than slip-fit for precise alignment

module alignment_pin() {
  cylinder(r=pin_r, h=pin_h, $fn=32);
}

module alignment_pocket() {
  // Slightly larger radius and slightly deeper — ensures pin seats fully
  cylinder(r=pin_r + pin_clear, h=pin_h + 0.5, $fn=32);
}

// Part A — has two alignment pins protruding from top face
cube([50, 40, 5]);
translate([10, 10, 5]) alignment_pin();
translate([40, 30, 5]) alignment_pin();

// Part B — has matching pockets in bottom face
translate([60, 0, 0])
  difference() {
    cube([50, 40, 5]);
    translate([10, 10, -0.001]) alignment_pocket();
    translate([40, 30, -0.001]) alignment_pocket();
  }
```

---

## Exercises

**Exercise 8.1:** Print the tolerance test coupon. Test each peg-socket pair. Record your press-fit and slip-fit clearance values. Update `PRESS_FIT_C` and `SLIP_FIT_C` with your measured values.

**Exercise 8.2:** Design a snap-fit battery cover for a 60 × 40 × 20 mm space using your measured press-fit clearance and the `snap_arm()` module. Verify the beam flexibility ratio before printing.

**Exercise 8.3 (Advanced):** Create a parametric box set where a `size_scale` parameter (values 0.5, 1.0, 2.0) generates small, medium, and large boxes that all use the same lid design and tolerance values. Generate all three sizes with a bash/PowerShell loop and verify each with `3dm info`.

---

## Quiz — Lesson 8 (15 questions)

1. Why do FDM-printed holes consistently come out smaller than designed? Explain the physical mechanism.
2. What clearance range (in mm) produces a slip-fit for a typical FDM printer with a 0.4mm nozzle and PLA?
3. What is a press-fit, and what application would you use one for?
4. What is the beam_t / beam_l flexibility rule for PLA snap-fit cantilever beams?
5. Why must you print a tolerance test coupon rather than using published clearance values from a chart?
6. What is a heat-set threaded insert and why is it preferred over a plastic-tapped hole for assemblies that are disassembled repeatedly?
7. What is a dovetail joint and in which direction does it lock?
8. What does a stacking lip do in a stackable bin design, and how does clearance factor into its dimensions?
9. True or False: a thicker snap-fit beam is easier to deflect than a thinner one of the same length.
10. What happens if you design a stacking lip with clearance = 0mm?
11. Explain the concept of "tolerance stack-up." If three parts each have ±0.2mm dimensional variation, what is the worst-case total gap variation in an assembled chain of three?
12. Why should tolerance clearance values be defined as named constants at the top of a file rather than hardcoded at each use?
13. Describe how a chamfer is created using `difference()`. What shape is subtracted from the original?
14. For a snap-fit clip made of PLA with `beam_l = 18mm`, what is the maximum `beam_t` allowed by the flexibility rule? Show your calculation.
15. Describe how you would design and conduct a complete tolerance test for a new printer. What prints would you make, what would you measure, and how would you decide on your final clearance values?

---

## Extension Problems (15)

1. Design a complete stackable bin set (small, medium, large) where each size nests inside the next. Use your measured tolerance values throughout.
2. Build a snap-fit box lid that attaches with four clips. Make the number of clips a parameter and validate the beam dimensions with `assert()`.
3. Design a press-fit peg and socket set with five clearances from 0.0 to 0.4 mm. Print one set, test all pairs, and create a table showing which clearance produced which fit type on your printer.
4. Create a wall-mount organizer using snap-fit clips that attach to a standard pegboard (hole pitch = 25.4mm, hole diameter = 6.35mm).
5. Build a two-part enclosure with heat-set insert pockets for M3 screws and matching through-holes for the bolts. Test with real hardware.
6. Design a snap-together dice tray: the tray snaps into a carrying case lid using four snap clips.
7. Create an alignment jig using two dowel pins and matching pockets. Use it to verify your printer's positional accuracy by measuring pin spacing with calipers.
8. Build a cable management clip with a snap-fit that can be opened and closed repeatedly for easy cable insertion and removal.
9. Design a telescoping tube: an inner cylinder that slides freely inside an outer cylinder using your measured slip-fit clearance.
10. Create a bayonet mount: a part that locks with a 90° twist.
11. Design a "living hinge" — a thin flexible connection between two rigid sections that can be folded. Research the appropriate wall thickness and document which materials are suitable.
12. Build a parametric drawer divider system: interlocking slotted panels that can be arranged in any grid configuration.
13. Design a self-locking dovetail joint that slides together in one direction and resists being pulled apart in any perpendicular direction.
14. Create a complete assembly drawing in OpenSCAD: an exploded view with each component translated away from the assembly center, with clear labels and a tolerance reference table as a comment block.
15. Conduct a failure mode analysis for a snap-fit clip: list five ways it could fail in use, rate each by likelihood and severity, and propose a design modification to reduce the top two risks.

---

## References and Helpful Resources

- Snap-Fit Design Principles — Bayer Material Science Snap-Fit Design Manual — [https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1556891135.pdf](https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1556891135.pdf)

- OpenSCAD User Manual — Difference and Boolean Operations — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling)

- Tolerance and Fit in FDM Printing — All3DP Guide — [https://all3dp.com/2/fdm-3d-printing-tolerances/](https://all3dp.com/2/fdm-3d-printing-tolerances/)

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub — Assemblies and interlocking features
- 3DMake GitHub Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 8 are included below. You do not need to open any additional files._

---

## Appendix A: Snap-Fit Clip — Extension Project

**Estimated time:** 3–6 hours

### Overview

This extension project takes the snap-fit concepts from Lesson 8 and turns them into a systematic engineering investigation. Rather than building a snap-fit and hoping it works, you will design a parametric test structure, print it at three different tolerance values, measure what happens, and let the data drive your final design.

This is how snap-fit components are actually designed in professional practice: tolerance ranges are established empirically for a specific material-printer combination, then codified as constants for future designs.

### Learning Objectives

By completing this project, you will:

- Design flexible components that must bend without failing
- Conduct tolerance and material testing systematically
- Understand the relationship between geometry, material properties, and functional performance
- Document design iterations and trade-offs in a format that would transfer to a colleague

### Objective

Design a parametric snap-fit clip with adjustable clip thickness and spacing. Use it to determine optimal tolerances for your specific printer and material combination.

### Tasks

1. **Design** a parametric snap-fit test piece with adjustable clip thickness and spacing. All key dimensions must be variables. The design must include at least one cantilever beam using the beam_t / beam_l flexibility rule from Lesson 8.

2. **Print test pieces** for three tolerance values. For each variant, change _only_ the tolerance variable — keep all other parameters fixed. Label each print (embossed text, or a note taped to the print).

3. **Test each clip** for snap-fit behavior. For each variant: assemble and disassemble at least 5 times. Record the effort required, any deformation observed, and whether the clip still functions after 5 cycles.

4. **Refine dimensions** based on results. Choose the tolerance value that produced the most reliable behavior and create a final clip design. Write a one-paragraph justification of your choice.

### Deliverables

- Source `.scad` file with parametric clip modules (all key dimensions as named variables)
- Test print results table (see student documentation template in Appendix B)
- Final clip design with recommended print settings documented
- Completed student documentation template

---

### Starter Code

The stackable bins example from Lesson 8 demonstrates the stacking rim and clearance pattern that snap-fit features build on. Use it as a reference for parametric structure, then design your own snap-fit geometry.

```openscad
// Stackable Storage Bins — Structural Reference
// This example shows the clearance and rim pattern.
// Your snap-fit clip will use similar parametric constants.

bin_w        = 80;    // mm — bin width
bin_d        = 120;   // mm — bin depth
bin_h        = 60;    // mm — bin height
wall         = 2;     // mm — wall thickness
rim          = 3;     // mm — interlock rim height
chamfer      = 2;     // mm — top edge chamfer
stack_clear  = 0.6;   // mm — clearance between stacked bins (measure yours)

module outer() {
  cube([bin_w, bin_d, bin_h]);
}

module inner() {
  translate([wall, wall, wall])
    cube([bin_w - 2*wall, bin_d - 2*wall, bin_h - 2*wall]);
}

module body() {
  difference() { outer(); inner(); }
}

module rim_outer() {
  translate([0, 0, bin_h])
    cube([bin_w, bin_d, rim]);
}

module rim_inner() {
  translate([wall + stack_clear, wall + stack_clear, bin_h])
    cube([bin_w - 2*(wall + stack_clear),
          bin_d - 2*(wall + stack_clear), rim]);
}

module chamfer_top() {
  difference() {
    children();
    translate([-1, -1, bin_h - chamfer])
      cube([bin_w + 2, bin_d + 2, chamfer + 2]);
  }
}

union() {
  chamfer_top() { body(); }
  rim_outer();
  difference() { rim_outer(); rim_inner(); }
}
```

**Snap-fit beam starting scaffold** — adapt this for your test piece:

```openscad
// Snap-Fit Cantilever Beam — Parametric Test Scaffold
// Replace the base_body and target geometry with your own design.

// ---- Key Parameters ----
beam_l      = 15;    // mm — beam length (longer = more flex)
beam_t      = 1.5;   // mm — beam thickness (thinner = more flex)
beam_w      = 6;     // mm — beam width
hook_h      = 1.2;   // mm — hook catch height (the lip that locks)
tolerance   = 0.2;   // mm — clearance for the socket opening
base_w      = 30;    // mm — base block width
base_d      = 20;    // mm — base block depth
base_h      = 4;     // mm — base block height

// Flexibility check: beam_t / beam_l should be < 0.1 for PLA
echo("Flexibility ratio:", beam_t / beam_l,
     "(target < 0.1 for reliable snap-fit)");
assert(beam_t / beam_l < 0.12,
  str("Beam too stiff: beam_t/beam_l = ", beam_t/beam_l,
      ". Reduce beam_t or increase beam_l."));

// ---- Snap-Fit Arm ----
module snap_arm() {
  union() {
    // Main cantilever beam
    cube([beam_w, beam_l, beam_t]);
    // Hook at tip
    translate([0, beam_l - hook_h, 0])
      cube([beam_w, hook_h, beam_t + hook_h]);
  }
}

// ---- Socket (receiver) ----
// The socket opening is wider than the arm by 2×tolerance
module snap_socket() {
  socket_opening = beam_w + 2 * tolerance;
  difference() {
    cube([base_w, base_d, base_h]);
    // Socket slot
    translate([(base_w - socket_opening) / 2, 0, -0.001])
      cube([socket_opening, beam_l + hook_h + tolerance, base_h + 0.002]);
  }
}

// ---- Test Assembly (render both for sizing check) ----
snap_socket();
translate([(base_w - beam_w) / 2, 0, base_h])
  snap_arm();
```

### Assessment Questions

1. What clip thickness and spacing values produced a reliable snap-fit for your specific printer and material?
2. How did you balance flexibility (easy to snap and unsnap) with durability (no premature failure)?
3. What would you change in the design if this clip needed to survive 1,000+ assembly cycles?

---

## Appendix B: Snap-Fit Clip — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_\_\_  
**Description:** Design a snap-fit connector that joins two 3D-printed parts without external fasteners.

---

### Design Concept

- What two parts will your snap-fit connect?
- Design approach (cantilever arm, torsion box, other):
- Material selected and expected flex limits:
- How did you verify the beam flexibility ratio (beam_t / beam_l)?

---

### Tolerance Specifications

| Parameter                | Nominal Value (mm) | Tolerance Applied (mm) | Rationale |
| ------------------------ | :----------------: | :--------------------: | --------- |
| Beam thickness (beam_t)  |                    |                        |           |
| Beam length (beam_l)     |                    |                        |           |
| Hook height              |                    |                        |           |
| Socket opening clearance |                    |                        |           |
| Contact area width       |                    |                        |           |

**Flexibility ratio check:**

```
beam_t / beam_l = ___ / ___ = ___
Target: < 0.1 for PLA, < 0.08 for PETG
Result: [ ] Pass   [ ] Fail — adjusted to: ___
```

---

### Test Print Results

Print three variants with different tolerance values. Change **only** the tolerance variable between variants.

| Variant | Tolerance (mm) | Assembly effort | Disassembly effort | Deformation after 5 cycles | Pass / Fail |
| :-----: | :------------: | :-------------: | :----------------: | :------------------------: | :---------: |
|   V1    |                |                 |                    |                            |             |
|   V2    |                |                 |                    |                            |             |
|   V3    |                |                 |                    |                            |             |

**Selected tolerance value:** \_\_\_\_\_ mm
**Justification** (one paragraph — reference your test data, not intuition):

---

### Assembly Testing Log

#### Cycle 1 — Initial Assembly

- Date:
- Effort required to snap together (easy / moderate / hard / wouldn't snap):
- Snap strength — resistance to pulling apart (weak / moderate / strong / won't release):
- Visual inspection — any deformation, whitening at bend, or cracking:

#### Cycle 2

- Date:
- Observations:

#### Cycle 3

- Date:
- Observations:

#### Cycle 4

- Date:
- Observations:

#### Cycle 5

- Date:
- Observations:

#### Durability Assessment

- After 5 cycles, is the snap-fit still functional? Yes / No / Partially
- Any permanent deformation observed? Describe:
- Estimated service life based on observed degradation rate:

---

### Mechanical Analysis

Answer in complete sentences:

1. Describe the snap mechanism — explain _why_ it works mechanically, not just that it does.

2. What material properties enable this design? What would happen if you printed the same geometry in a rigid material with no flex (like resin)?

3. Where are the stress concentration points in your design? How did you address them?

---

### Reflections

1. Did the snap-fit work as expected on the first print? If not, what surprised you?

2. What tolerance adjustment had the most significant effect, and by how much?

3. How would you modify this design for a clip that needs to work at outdoor temperatures (hot car in summer, cold winter)?

4. What materials would fail with this exact geometry? Why?

---

### Attachments Checklist

- [ ] `.scad` file with parametric snap-fit module (all key dimensions as named variables)
- [ ] Photos of test variants before assembly (labeled V1, V2, V3)
- [ ] Photos of assembled connections for each variant
- [ ] Photos showing any deformation after 5 cycles
- [ ] Completed tolerance specifications table
- [ ] Completed testing log with dates and observations

---

### Teacher Feedback

| Category                                                                    | Score (0–3) | Notes |
| --------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — snap-fit works reliably; meets functional requirements |             |       |
| Design & Code Quality — parametric, mechanically sound, beam rule applied   |             |       |
| Documentation — testing log complete; tolerance rationale explained         |             |       |
| **Total (0–9)**                                                             |             |       |

---

## Appendix C: Snap-Fit Clip — Instructor Reference

### Project Context

This extension project reinforces the core tolerance and snap-fit content of Lesson 8 through hands-on empirical testing. The key distinction from a standard assignment is the **systematic testing approach**: students must let printed test data drive their final design decisions, not intuition or first-attempt results.

### Key Learning Points to Reinforce

**Tolerance engineering is empirical.** Published clearance values are starting points. The only reliable way to know what works on a specific printer with a specific material is to print and measure. Students who skip the test coupon step and jump straight to a final design will encounter this lesson the hard way.

**The beam flexibility ratio is a design rule, not a guideline.** Beam_t / beam_l < 0.1 (PLA) is derived from material yield strain. A beam that violates this ratio will either not snap (too stiff) or crack on first use (overstressed). The `assert()` in the starter code enforces this at render time.

**Snap-fits degrade with cycles.** PLA creep under repeated stress means a PLA snap-fit that works perfectly at cycle 1 may be noticeably looser at cycle 20. This is not a design failure — it's an expected material behavior that students should document and account for.

### Constraints (Enforce These)

- Snap-fit must join two printed parts without any external fasteners
- All key dimensions must be variables (parametric code required)
- At least three variants must be printed and tested — no single-attempt submissions
- Assembly must be tested over at least 5 cycles with observations recorded for each

### Functional Requirements (Evaluation Criteria)

- Parts snap together securely without over-constraint or binding
- Connection resists separation under intended use without permanent deformation at cycle 1
- Snap mechanism is reusable for at least 5 assembly cycles
- Design reflects understanding of tolerance and material behavior (visible in code comments and documentation)

### Assessment Notes

**Strong submissions** show: tolerance test data driving the final design decision (not guessing), multiple assembly cycles documented with specific observations, and a reflection that discusses material limits with reference to measured results.

**Common weak areas:** Single-variant testing ("it worked so I stopped"), vague reflection ("I would make it thicker"), and tolerance values with no rationale. Push back on these in feedback.

**Extension opportunity:** Students who finish early can investigate material property comparisons — print the same geometry in PLA and PETG (if available) and compare flex behavior and cycle durability. This connects directly to the material selection content in Lesson 5.

---

# Lesson 9 — Automation and 3dm Workflows

**Estimated time:** 90–120 minutes

---

## Before You Start

In Lessons 1–8, you built real, functional 3D models — phone stands, keycaps, stackable bins — and learned how parametric design lets a single `.scad` file produce many different variants just by changing numbers. You've been running builds manually: open a terminal, type `3dm build`, check the output, repeat. That's fine when you're developing one part. But what happens when you need to build 20 variants of a part for a batch test? Or when you need to _prove_ that every commit to your project builds correctly before you send files to a printer?

This lesson is about the next step: **automation**. You'll learn to write scripts that build, verify, archive, and iterate without you sitting at the keyboard. These are real software engineering skills — the same techniques used in companies that ship physical products with embedded software. By the end of this lesson, you'll understand how professional fabrication workflows work and be able to apply those patterns to your own projects.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Write robust automation scripts in bash (Linux/macOS), PowerShell (Windows), and CMD (Windows legacy)
- Use proper error handling, logging, and trap/exit patterns for unattended builds
- Pass string and numeric parameters correctly to `openscad -D` from all three shells
- Automate batch builds, archiving, and variant generation
- Implement a watch mode that rebuilds automatically when source files change
- Integrate 3dMake automation into CI/CD pipelines with GitHub Actions

---

## Concept: Why Automation Matters

Before writing any code, let's understand the problem automation solves.

### The Manual Build Problem

Suppose you're building a parametric shelf bracket that needs to be tested at three different wall thicknesses (1.2 mm, 1.6 mm, 2.0 mm) across four different bracket widths (60 mm, 80 mm, 100 mm, 120 mm). That's 12 combinations. Running each build manually means:

1. Open terminal
2. Type the command with the right parameter values
3. Wait for OpenSCAD to render
4. Check that the output exists
5. Rename the file so it doesn't overwrite the last one
6. Repeat 11 more times

This takes time, introduces human error (typos in parameter values, forgetting to rename files), and produces results that are hard to reproduce later — "which settings did I use for the 80mm bracket again?"

### Automation Solves Four Problems

**Repeatability:** A script runs exactly the same way every time. Parameter values, file names, output locations — all defined once in code, not typed by hand each time.

**Error detection:** A good script notices when something goes wrong and stops immediately, rather than silently producing broken output and continuing.

**Documentation:** A build script _is_ documentation. Reading a well-written script tells you exactly how the project is supposed to be built — what parameters matter, what the expected output looks like, how things are organized.

**Scalability:** Whether you need 12 builds or 1,200, the automation works the same way.

### Automation Is a Safety Net

Think of build automation like the safety rails on a mountain trail. The trail was perfectly safe without them — but the rails mean you can focus on the view instead of watching every step. Automation removes the tedious, error-prone parts of your workflow so you can focus on design.

---

## Step 1 — The OpenSCAD `-D` Flag and Parameter Passing

### What the `-D` Flag Does

OpenSCAD's `-D` flag overrides any variable in your `.scad` file at the command line. This is the bridge between your automation scripts and your parametric models. Instead of editing the `.scad` file to change a value, you pass the new value directly when you run the build.

Think of it like a recipe where the recipe card has the default quantities written in pencil. The `-D` flag lets you write different numbers in the margin for this particular batch — without erasing the original recipe.

```bash
# The .scad file has: width = 40;
# The -D flag overrides it to 60 for this build
openscad -D "width=60" -o output.stl src/main.scad
```

### Numeric Parameters: Straightforward

For numeric values, the syntax is identical on all platforms:

```bash
# Works the same on Linux/macOS/Windows
openscad -D "width=50" -D "height=15" -o output.stl src/main.scad
openscad -D "width=50" -D "height=15" -D "wall=2.5" -o output.stl src/main.scad
```

You can pass as many `-D` flags as you need. Each one overrides one variable.

### String Parameters: The Hard Part

String values are much trickier, and this is where most beginners get tripped up. In OpenSCAD, a string value must be surrounded by double quotes: `label="FRONT"`. But you're passing this string _inside another string_ on the command line, which creates a quoting conflict.

**This is the #1 source of silent failures in automation scripts.** If you get the quoting wrong, OpenSCAD may accept the command without error but produce a model where the label is empty or incorrect. No error message. No warning. Just wrong output.

#### Why Quoting Is Different on Each Platform

Each shell — bash (Linux/macOS), PowerShell (Windows), and CMD (Windows legacy) — has its own rules for how quotes work inside quotes. There's no single universal syntax. You need to learn the rule for each environment you use.

The underlying goal is always the same: you need OpenSCAD to receive the string `label="FRONT"` with the double quotes intact. Each shell provides a different way to achieve that.

#### Linux / macOS (bash)

**The rule:** Use single quotes around the entire `-D` value to protect inner double quotes. Single-quoted strings in bash are completely literal — nothing inside them is interpreted.

```bash
# CORRECT: single quotes around the entire -D value protect inner double quotes
openscad -D 'label="FRONT"' -o out.stl src/main.scad

# CORRECT: backslash-escaped double quotes inside a double-quoted string
openscad -D "label=\"FRONT\"" -o out.stl src/main.scad

# CORRECT: variable with proper escaping
LABEL="FRONT PANEL"
openscad -D "label=\"${LABEL}\"" -o out.stl src/main.scad

# DEBUGGING TIP: echo the command before running to verify quoting
echo "openscad -D 'label=\"${LABEL}\"' -o out.stl src/main.scad"

# WRONG — string value will be malformed; OpenSCAD may use an empty string
openscad -D "label=FRONT" -o out.stl src/main.scad    # missing inner quotes
```

**Debugging trick:** Before running a command, `echo` it first to see exactly what your shell will send to OpenSCAD. If the echoed command looks wrong, it _is_ wrong — fix the quoting before running it for real.

#### Windows (PowerShell)

**The rule:** Single quotes work the same way as in bash — they protect inner double quotes. PowerShell also supports backtick (`` ` ``) as an escape character inside double-quoted strings.

```powershell
# CORRECT: single quotes protect inner double quotes
openscad -D 'label="FRONT"' -o out.stl src\main.scad

# CORRECT: backtick escapes for double quotes inside a double-quoted string
$label = "FRONT PANEL"
openscad -D "label=`"$label`"" -o out.stl src\main.scad

# CORRECT: build the argument string explicitly
$dArg = 'label="' + $label + '"'
openscad -D $dArg -o out.stl src\main.scad

# DEBUGGING TIP: display the argument before using it
Write-Host "D argument: $dArg"
```

#### Windows (CMD)

**The rule:** CMD uses doubled double-quotes (`""`) to produce a single literal double quote inside a string. This is the most visually confusing notation — `""FRONT""` means: open double-quote, then the word FRONT, then close double-quote.

```cmd
REM CMD uses doubled double-quotes to produce a literal double-quote inside a string
openscad -D "label=""FRONT""" -o out.stl src\main.scad

REM With a variable
SET LABEL=FRONT
openscad -D "label=""%LABEL%""" -o out.stl src\main.scad

REM DEBUGGING: echo first to verify
echo label=""%LABEL%""
```

### Common Mistake: Assuming Silent Success

OpenSCAD will often not report an error when string quoting is wrong. The variable just gets an empty string or `undef` as its value. If your label text disappears from the rendered model, check your quoting before anything else.

---

## Step 2 — Robust Error Handling

### What "Robust" Means

A script is _robust_ if it handles failure gracefully: it detects when something went wrong, reports the failure clearly, and stops before making things worse. A _fragile_ script ignores errors and continues — which often means you end up with a folder full of broken or empty output files.

### The Three Failure Modes to Guard Against

**Silent failure:** The command runs, returns an error code, but the script doesn't check and keeps going. You discover the problem later when the output files don't work.

**Partial output:** The build starts, produces a partially-written file, then crashes. The file exists but is corrupted. Your script needs to check that the output is complete and has a reasonable size.

**Cascade failure:** One failure causes subsequent steps to fail too, making the error messages confusing. Stop at the first failure — don't keep running.

### Error Handling in bash

Bash has three critical safety settings that should be at the top of every automation script:

- `set -e` — exit immediately if any command returns a non-zero exit code (non-zero = failure)
- `set -u` — error if you reference a variable that was never defined (catches typos in variable names)
- `set -o pipefail` — catch errors inside pipelines, not just the last command in the pipe

Think of these as your script's "safety mode." Without them, bash will happily continue running after errors. With them, the first problem causes an immediate stop.

```bash
#!/bin/bash
# build.sh — robust build script with logging and error handling

set -e           # exit immediately if any command returns a non-zero exit code
set -u           # error on use of any unset variable
set -o pipefail  # catch errors inside pipelines (not just the last command)

LOG_DIR="build/logs"
LOG_FILE="$LOG_DIR/build_$(date +%Y%m%d_%H%M%S).log"
mkdir -p "$LOG_DIR" build

# Logging function: prints with timestamp and appends to log file
log() {
  local level="$1"
  shift
  echo "[$(date +%H:%M:%S)] [$level] $*" | tee -a "$LOG_FILE"
}

# Trap: runs when any error occurs, reports which line failed
on_error() {
  log "ERROR" "Build failed at line $1. Check: $LOG_FILE"
  exit 1
}
trap 'on_error $LINENO' ERR

log "INFO" "=== Build started ==="
log "INFO" "Source: src/main.scad"

# Build — capture stderr, show on screen, and append to log
if ! openscad -o build/main.stl src/main.scad 2>&1 | tee -a "$LOG_FILE"; then
  log "ERROR" "OpenSCAD exited with error"
  exit 1
fi

# Verify the output file was actually created and has reasonable size
STL_PATH="build/main.stl"
if [ ! -f "$STL_PATH" ]; then
  log "ERROR" "STL file not created: $STL_PATH"
  exit 1
fi

STL_SIZE=$(stat -c%s "$STL_PATH")
if [ "$STL_SIZE" -lt 1000 ]; then
  log "WARN" "STL file suspiciously small: ${STL_SIZE} bytes — may be empty geometry"
fi

log "INFO" "Build complete: $STL_PATH (${STL_SIZE} bytes)"
3dm info 2>&1 | tee -a "$LOG_FILE"
log "INFO" "=== Build finished ==="
```

### Error Handling in PowerShell

PowerShell uses try/catch blocks and checks the `$LASTEXITCODE` variable (which holds the exit code of the last external command) to detect failures. The key difference from bash: PowerShell doesn't automatically stop on error — you must check `$LASTEXITCODE` yourself after every external command.

```powershell
# build.ps1 — robust build script for Windows

param(
    [string]$Source    = "src\main.scad",
    [string]$Output    = "build\main.stl",
    [string]$LogDir    = "build\logs"
)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
New-Item -ItemType Directory -Force -Path $LogDir, "build" | Out-Null
$logFile = Join-Path $LogDir "build_$timestamp.log"

function Write-Log {
    param([string]$Level, [string]$Message)
    $entry = "[$(Get-Date -Format 'HH:mm:ss')] [$Level] $Message"
    Write-Host $entry
    Add-Content -Path $logFile -Value $entry
}

Write-Log "INFO" "=== Build started ==="
Write-Log "INFO" "Source: $Source"

try {
    $buildOutput = & openscad -o $Output $Source 2>&1
    $buildOutput | Tee-Object -FilePath $logFile -Append | Write-Host
    if ($LASTEXITCODE -ne 0) { throw "OpenSCAD returned exit code $LASTEXITCODE" }
} catch {
    Write-Log "ERROR" "Build failed: $_"
    exit 1
}

if (-not (Test-Path $Output)) {
    Write-Log "ERROR" "STL file not created: $Output"
    exit 1
}

$stlSize = (Get-Item $Output).Length
if ($stlSize -lt 1000) {
    Write-Log "WARN" "STL suspiciously small: $stlSize bytes"
}

Write-Log "INFO" "Build complete: $Output ($stlSize bytes)"
3dm info 2>&1 | Tee-Object -FilePath $logFile -Append
Write-Log "INFO" "=== Build finished ==="
```

---

## Step 3 — Batch Builds and Variant Generation

### The Concept: Parametric Variants at Scale

Now that you can build reliably with error handling, you can automate the generation of multiple variants. The pattern is simple: loop over a list of parameter combinations, run a build for each, name the output file to reflect the parameters used.

Good output naming is critical. A file called `main.stl` tells you nothing. A file called `bracket_w80_h60_wall2.stl` tells you exactly what parameters produced it — you can reconstruct the build command just from the filename.

### Batch Build in bash

```bash
#!/bin/bash
# batch_variants.sh

set -e
set -u
set -o pipefail

OUTPUT_DIR="build/variants"
mkdir -p "$OUTPUT_DIR"

SUCCESS=0
FAIL=0
FAILED_BUILDS=()

for WIDTH in 60 80 100 120; do
  for WALL in 1.2 1.6 2.0; do
    NAME="bracket_w${WIDTH}_wall${WALL/./_}"
    OUT="$OUTPUT_DIR/${NAME}.stl"

    echo "Building: $NAME ..."
    if openscad -D "width=${WIDTH}" -D "wall=${WALL}" \
                -o "$OUT" src/main.scad 2>/dev/null; then
      echo "  OK: $OUT"
      SUCCESS=$((SUCCESS + 1))
    else
      echo "  FAILED: $NAME"
      FAIL=$((FAIL + 1))
      FAILED_BUILDS+=("$NAME")
    fi
  done
done

echo ""
echo "=== Batch complete: $SUCCESS succeeded, $FAIL failed ==="
if [ ${#FAILED_BUILDS[@]} -gt 0 ]; then
  echo "Failed builds:"
  for b in "${FAILED_BUILDS[@]}"; do
    echo "  - $b"
  done
  exit 1
fi
```

### Batch Build in PowerShell

```powershell
# batch_variants.ps1

$outputDir = "build\variants"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$success = 0
$fail    = 0
$failed  = @()

foreach ($width in @(60, 80, 100, 120)) {
  foreach ($wall in @(1.2, 1.6, 2.0)) {
    $wallStr = "$wall" -replace '\.', '_'
    $name    = "bracket_w${width}_wall${wallStr}"
    $out     = "$outputDir\${name}.stl"

    Write-Host "Building: $name ..."
    & openscad -D "width=$width" -D "wall=$wall" -o $out src\main.scad 2>$null
    if ($LASTEXITCODE -eq 0 -and (Test-Path $out)) {
      Write-Host "  OK: $out"
      $success++
    } else {
      Write-Host "  FAILED: $name"
      $fail++
      $failed += $name
    }
  }
}

Write-Host ""
Write-Host "=== Batch complete: $success succeeded, $fail failed ==="
if ($failed.Count -gt 0) {
  Write-Host "Failed builds:"
  $failed | ForEach-Object { Write-Host "  - $_" }
  exit 1
}
```

---

## Step 4 — Timestamped Archiving

### Why Archive Builds?

Imagine you printed a part two weeks ago that fit perfectly. Now you've made some changes to the model, and the new version doesn't fit. You need to go back to the version that worked — but you only have one `build/main.stl` file, which has been overwritten.

Timestamped archiving solves this. Every successful build is saved with a timestamp in its filename. You can always go back to any previous version. Over time, you build a history of exactly when each change was made.

### Archive Script

```bash
#!/bin/bash
# archive_build.sh

set -e
set -u

ARCHIVE_DIR="build/archive"
mkdir -p "$ARCHIVE_DIR"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ARCHIVE_NAME="main_${TIMESTAMP}.stl"

# Build
3dm build

# Archive the successful result
cp build/main.stl "$ARCHIVE_DIR/$ARCHIVE_NAME"
echo "Archived: $ARCHIVE_DIR/$ARCHIVE_NAME"

# Optional: remove archives older than 30 days
find "$ARCHIVE_DIR" -name "*.stl" -mtime +30 -delete
echo "Old archives cleaned."
```

---

## Step 5 — Watch Mode

### The Concept: Automatic Rebuild on Save

Watch mode is a script that monitors your source files and automatically runs a build whenever a file changes. Instead of switching to your terminal and running `3dm build` every time you save a change in your editor, the script does it for you.

This creates a tight feedback loop: save your `.scad` file, glance at the terminal, and the new build result is already there. It's like having an assistant who runs the build the instant you save.

### How Watch Mode Works

There are two approaches:

**Poll-based:** Check the file's modification timestamp every few seconds. If it changed since the last check, trigger a rebuild. Simple to implement; works everywhere. Slightly wasteful — you're checking constantly even when nothing changes.

**Event-based:** The operating system notifies you the instant a file changes (using `inotify` on Linux, `FSEvents` on macOS, `FileSystemWatcher` on Windows). More efficient; responds immediately. More complex to set up.

For development workflows, the poll-based approach is usually good enough.

```bash
#!/bin/bash
# watch_and_build.sh — poll-based watch mode

set -u

WATCH_FILE="src/main.scad"
POLL_INTERVAL=2   # seconds between checks

echo "Watching: $WATCH_FILE (Ctrl+C to stop)"

LAST_MOD=""

while true; do
  CURRENT_MOD=$(stat -c%Y "$WATCH_FILE" 2>/dev/null || echo "0")

  if [ "$CURRENT_MOD" != "$LAST_MOD" ]; then
    LAST_MOD="$CURRENT_MOD"
    if [ -n "$LAST_MOD" ] && [ "$LAST_MOD" != "0" ]; then
      echo ""
      echo "[$(date +%H:%M:%S)] Change detected — rebuilding..."
      3dm build && echo "  Build OK" || echo "  Build FAILED"
    fi
  fi

  sleep "$POLL_INTERVAL"
done
```

```powershell
# watch_and_build.ps1 — poll-based watch mode for Windows

$watchFile    = "src\main.scad"
$pollInterval = 2  # seconds

Write-Host "Watching: $watchFile (Ctrl+C to stop)"

$lastMod = $null

while ($true) {
    if (Test-Path $watchFile) {
        $currentMod = (Get-Item $watchFile).LastWriteTime

        if ($currentMod -ne $lastMod) {
            $lastMod = $currentMod
            if ($null -ne $lastMod) {
                Write-Host ""
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Change detected — rebuilding..."
                & 3dm build
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "  Build OK"
                } else {
                    Write-Host "  Build FAILED"
                }
            }
        }
    }
    Start-Sleep -Seconds $pollInterval
}
```

---

## Step 6 — CI/CD Integration

### What CI/CD Means

CI/CD stands for **Continuous Integration / Continuous Deployment**. In software development, CI/CD means that every time you push code to a shared repository, an automated system builds and tests your project in a clean environment — not on your computer, but on a server in the cloud.

For a 3D printing project, CI/CD means:

- Every time you commit a change to your `.scad` files, GitHub automatically builds your STL
- If the build fails (syntax error, empty geometry, etc.), you get an email notification immediately
- The built STL is saved as a downloadable artifact — you can prove to anyone that this exact commit produced this exact file
- You can track exactly when changes were made and whether they broke anything

This sounds like overkill for a hobby project — but even for personal projects, CI/CD is a useful safety net. It catches problems you might miss locally, and it creates a reliable record of your design history.

### How GitHub Actions Works

GitHub Actions is a CI/CD system built into GitHub. You define a "workflow" in a YAML file inside your repository. The workflow runs automatically on events you specify — such as every push to the `main` branch.

The workflow runs on a fresh Ubuntu virtual machine in GitHub's cloud. It has no memory of previous builds. Every run starts from scratch: clone the repository, install dependencies, run the build, save the output.

```yaml
# .github/workflows/build.yml
# This file tells GitHub Actions what to do on every push.

name: Build STL

on:
  push:
    paths:
      - "src/**" # only trigger when .scad files change

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install OpenSCAD
        run: |
          sudo apt-get update
          sudo apt-get install -y openscad

      - name: Install 3dMake
        run: curl -fsSL https://get.3dmake.dev | bash

      - name: Build
        run: |
          3dm build
          3dm info

      - name: Verify STL exists and has reasonable size
        run: |
          test -f build/main.stl
          SIZE=$(stat -c%s build/main.stl)
          echo "STL size: $SIZE bytes"
          test "$SIZE" -gt 1000

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: stl-output-${{ github.sha }}
          path: build/main.stl
```

When this is set up, every push to the repository triggers a fresh build in GitHub's cloud. If the build fails, you get an email notification. The built STL is saved as an artifact you can download directly from the GitHub interface.

### What Each Section Does

**`on: push: paths:`** — Only run the workflow when files in the `src/` directory change. This prevents the workflow from running when you update the README, for example.

**`runs-on: ubuntu-latest`** — Use GitHub's latest Ubuntu virtual machine. This is a standard Linux environment with nothing pre-installed.

**`actions/checkout@v4`** — Clone your repository into the virtual machine. Without this, the machine has no idea what your project looks like.

**`Install OpenSCAD` / `Install 3dMake`** — Install your build tools. Every run starts fresh, so tools must be installed every time.

**`Build`** — Run your build. If this fails (non-zero exit code), the whole workflow fails.

**`Verify STL exists and has reasonable size`** — An explicit sanity check. `test -f` verifies the file exists. `test "$SIZE" -gt 1000` verifies it's not empty.

**`Upload artifact`** — Save the built STL so you can download it from GitHub. The `${{ github.sha }}` part includes the commit hash in the artifact name, so you always know which commit produced which STL.

---

## Exercises

**Exercise 9.1:** Adapt the batch_variants script to your platform. Generate your phone stand at 5 different `stand_angle` values (30°, 45°, 60°, 70°, 80°). Log the bounding box for each to a file.

**Exercise 9.2:** Write a build script in your preferred shell that: (1) builds the model, (2) verifies the STL size is > 10,000 bytes, (3) archives the result with a timestamp if the build succeeds, (4) prints a failure message to the console if it fails.

**Exercise 9.3 (Advanced):** Create a parametric `Makefile` (Linux/macOS) or a PowerShell `Invoke-Build` task file (Windows) with separate targets: `build`, `clean`, `variants`, `archive`, and `test`. Running `make all` should run all targets in the correct order.

---

## Quiz — Lesson 3dMake.9 (15 questions)

1. What does `set -e` do in a bash script?
2. Why is passing string parameters with `-D` more complex than passing numeric parameters?
3. What does `trap 'on_error $LINENO' ERR` do in a bash script?
4. What is the correct way to pass `label="FRONT"` as an OpenSCAD `-D` argument in bash?
5. What does `set -u` protect against?
6. How would you verify that an output STL was actually created in a build script?
7. What is a "silent failure" in the context of automation, and how do you prevent one?
8. In PowerShell, what character is used to escape a double quote inside a double-quoted string?
9. What does `$LASTEXITCODE` contain in a PowerShell script after running an external command?
10. Describe the purpose of a timestamped build archive and when you would use it.
11. What is CI/CD, and how does it apply to a 3D printing project workflow?
12. True or False: In CMD, doubled double-quotes inside a quoted string produce a single literal double-quote.
13. Explain the difference between a poll-based file watcher and an event-based file watcher. What are the trade-offs?
14. In a GitHub Actions workflow, what does `on: push: paths: - 'src/**'` specify?
15. If a batch build script runs 10 builds and each may succeed or fail independently, describe the logic for reporting: total built, total failed, and which specific builds failed.

---

## Extension Problems (15)

1. Write a batch build script that tests 10 parameter combinations and generates a summary report with pass/fail status for each.
2. Create a "golden master" verification script: build your reference model, save the bounding box, then verify that future builds match those dimensions within 0.1 mm.
3. Implement the timestamped archive system and add a rotation policy: automatically delete archives older than 30 days.
4. Build a Git pre-commit hook that runs `3dm build` and fails the commit if the build doesn't succeed.
5. Create a build dashboard: a script that runs all your projects' builds, collects their `3dm info` outputs, and formats them into a summary report.
6. Implement parallel builds: run multiple OpenSCAD builds simultaneously using background processes or PowerShell jobs. Measure the speedup.
7. Create a "changelog" generator: compare the bounding boxes of all archived builds and generate a list of which builds had dimension changes.
8. Write a CI/CD pipeline configuration for GitLab CI or Bitbucket Pipelines (instead of GitHub Actions).
9. Build a build notification system: send a Slack message or email when a build fails.
10. Create a "test suite" of deliberately bad `.scad` files (empty geometry, non-manifold shapes, syntax errors) and verify your build script catches all of them.
11. Implement semantic versioning in your build system: automatically increment a patch version number on each successful build.
12. Write a multi-platform build script that detects the current OS and uses the appropriate commands (bash on Linux/macOS, PowerShell on Windows).
13. Create a build matrix: for each of 5 designs × 4 materials, build the design with material-specific parameters and verify each output.
14. Implement a "regression test": store the bounding box of each successful build, and flag any build where the bounding box changes unexpectedly.
15. Research and implement "build caching": skip rebuilds when the source file hasn't changed since the last successful build.

---

## References and Helpful Resources

- Bash Reference Manual — [https://www.gnu.org/software/bash/manual/bash.html](https://www.gnu.org/software/bash/manual/bash.html)

- PowerShell Documentation — [https://docs.microsoft.com/en-us/powershell/](https://docs.microsoft.com/en-us/powershell/)

- GitHub Actions Documentation — [https://docs.github.com/en/actions](https://docs.github.com/en/actions)

- 3DMake GitHub Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub
- 3DMake GitHub Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)
- OpenSCAD User Manual — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)

---

# Lesson 10 — Hands-On Practice Exercises and Troubleshooting

**Estimated time:** 120–150 minutes

---

## Before You Start

You've built a substantial toolkit over the first nine lessons: primitives, CSG operations, parametric modules, transforms, tolerances, interlocking features, automation scripts. This lesson is where those skills converge. Rather than introducing a single new concept, Lesson 10 is about _depth_ — applying advanced OpenSCAD features to real design problems, understanding when to use each tool, and developing the troubleshooting instincts that separate experienced designers from beginners.

The advanced features in this lesson — `hull()`, `minkowski()`, `projection()`, `surface()`, `children()`, and `search()` — are not obscure corners of OpenSCAD. They're the tools that unlock the difference between "looks like a 3D-printed object" and "looks like a professionally designed product."

---

## Learning Objectives

By the end of this lesson you will be able to:

- Apply `hull()` and `minkowski()` with awareness of their performance cost
- Use `$preview` to conditionally disable slow operations during development
- Create 2D templates with `projection()` for drilling guides and laser cutting
- Diagnose and fix all four common types of non-manifold geometry
- Apply `surface()` for height-map terrain and embossed artwork
- Write advanced parametric assemblies using `children()` and `$children`
- Use `search()` and `lookup()` for data-driven parametric design

---

## Concept: From Functional to Refined

Up to now, most designs have used right-angle geometry — boxes, cylinders, straight edges. This produces functional parts, but real products rarely look like that. Consider a smartphone: it has rounded corners, smooth transitions between surfaces, organic curves. None of those were added by accident — each one was a deliberate design choice that improves how the product feels in your hand and looks on a shelf.

The tools in this lesson let you add that kind of refinement to your OpenSCAD designs without abandoning the parametric approach. You'll still define everything with numbers and variables — but the shapes those numbers produce will be much more sophisticated.

---

## Step 1 — `hull()` for Organic Shapes

### What `hull()` Does

Imagine stretching a rubber band around several objects placed on a table. The rubber band forms the tightest possible loop that touches all of them, following the outside curve of each object. This is exactly what `hull()` does in 3D: it computes the **convex hull** — the smallest convex shape that contains all its children.

"Convex" means the shape never curves inward. A sphere is convex. A donut is not (it has a hole — a concave feature). The convex hull of two spheres is like a capsule — the two spheres connected by a smooth, outward-curving surface.

### When to Use `hull()`

`hull()` is excellent for:

- **Smooth transitions** between two different shapes at different heights (like the neck of a bottle smoothly widening into the body)
- **Rounded boxes** — place a small sphere at each corner, take the hull, and every corner and edge becomes rounded
- **Organic profiles** — aerofoil cross-sections, ergonomic handles, teardrop shapes
- **Anywhere** you want to avoid sharp 90-degree corners without adding complex geometry

`hull()` is **much faster** than `minkowski()` (covered in Step 2) and should be your first choice for organic shapes.

### Important Limitation

`hull()` only produces **convex** shapes. If you need a shape that curves inward — a saddle, a cup, a grip with a waist — `hull()` alone can't do it. You'd need to use `hull()` as a building block and then use `difference()` to carve in the concave features.

### Example 1: Smooth Transition Between a Hexagonal Cylinder and a Sphere

```openscad
// hull() between two different shapes at different heights
// Creates a smooth transition (like a funnel or transition piece)
hull() {
  cylinder(r=20, h=1, $fn=6);       // hexagon at bottom
  translate([0, 0, 30])
    sphere(r=8, $fn=32);             // sphere at top
}
```

This produces a smooth funnel-like shape — hexagonal at the base, tapering to a sphere at the top. Without `hull()`, you'd need complex math to define the intermediate surface.

### Example 2: Rounded Box Using `hull()` of 8 Spheres

Place one sphere at each of the 8 corners; `hull()` fills the space between them, rounding every corner and edge by the sphere radius.

```openscad
r = 5;  // corner radius
w = 40; d = 30; h = 20;

hull() {
  for (x = [r, w-r]) {
    for (y = [r, d-r]) {
      translate([x, y, 0]) sphere(r=r, $fn=24);
      translate([x, y, h]) sphere(r=r, $fn=24);
    }
  }
}
```

The sphere radius `r` controls how rounded the corners are. Setting `r=1` gives subtle rounding; `r=10` gives very rounded, pillow-like corners.

### Example 3: Wing / Aerofoil Profile

```openscad
// hull() of two cylinders at different positions and radii
// produces a smooth aerofoil cross-section
translate([0, 50, 0])
hull() {
  cylinder(r=6, h=2, $fn=32);            // leading edge (round)
  translate([40, 0, 0])
    cylinder(r=1, h=2, $fn=16);          // trailing edge (sharp)
}
```

The larger cylinder becomes the rounded leading edge; the small cylinder becomes the sharp trailing edge. `hull()` constructs the smooth surface connecting them automatically.

---

## Step 2 — `minkowski()` — Performance Warning and Pattern

### What Minkowski Sum Means

`minkowski()` computes the **Minkowski sum**: it places a copy of the secondary shape at every point on the surface of the primary shape, then takes the union of all those copies. The result is as if you "rolled" the secondary shape across every surface, corner, and edge of the primary shape.

The practical effect: if your primary shape is a cube and your secondary shape is a small sphere, the result is a cube with perfectly rounded corners and edges — where the rounding radius equals the sphere radius.

This is mathematically precise rounding that handles any geometry, including complex shapes with many faces. It's also how you create "offset" versions of shapes — the Minkowski sum with a sphere produces a shape that is uniformly larger in all directions by the sphere's radius.

### The Performance Warning

Here's the problem: the face count of the Minkowski result is roughly **the product** of the face counts of the two input shapes. A cube has 6 faces. A sphere with `$fn=32` has about 1,000 faces. The Minkowski sum has roughly 6,000 faces to compute. Now substitute a complex curved primary shape with 500 faces, and you're computing 500,000 faces. This can take minutes on a modern computer.

> ⚠ A complex primary shape combined with a sphere at `$fn=64` can take many minutes to render. Always use `$preview` to skip the `minkowski()` call during development.

### `$preview`: Fast Development, Accurate Rendering

OpenSCAD has two rendering modes:

- **F5 (Preview):** Fast, approximate. Uses OpenCSG rendering. `$preview` is `true`.
- **F6 (Full Render):** Exact, uses CGAL library. Much slower but produces accurate manifold geometry for export. `$preview` is `false`.

Use `$preview` as a conditional: show a fast placeholder during development (F5), and run the expensive `minkowski()` only during final render (F6).

> **Version note:** `$preview` is available in **OpenSCAD 2019.05 and later**. In earlier versions it is undefined (treated as `false`). If you are using an older version, omit the `$preview` guard and only run F6 when you need the final result.

```openscad
// $preview is TRUE during F5 (fast preview) and FALSE during F6 (full render).
// Use it to swap between a fast placeholder and the full Minkowski computation.

module rounded_box(w, d, h, r=4) {
  if ($preview) {
    // Fast preview mode: plain cube — renders instantly.
    // Color it orange as a reminder this is NOT the final shape.
    color("orange", 0.6) cube([w, d, h]);
  } else {
    // Full render mode: proper Minkowski sum.
    // Keep the secondary sphere LOW-POLY to limit face-count explosion.
    minkowski() {
      cube([w - 2*r, d - 2*r, h - r]);
      sphere(r=r, $fn=12);  // keep $fn LOW for minkowski — 12 is usually enough
    }
  }
}

rounded_box(50, 40, 20, r=5);
```

### `hull()` as a Faster `minkowski()` Alternative

`hull()` only works for convex shapes, but it is far faster than `minkowski()`. For a simple rounded box you can get an equivalent result by placing a sphere at each corner and taking the hull:

```openscad
translate([0, 60, 0])
hull() {
  // Equivalent to minkowski(cube, sphere) — much faster for convex shapes
  r = 4;
  w = 50; d = 40; h = 16;
  for (x = [r, w-r]) for (y = [r, d-r]) for (z = [r, h-r]) {
    translate([x, y, z]) sphere(r=r, $fn=12);
  }
}
```

**Performance guidelines for `minkowski()`:**

| Primary shape faces | Secondary `$fn` | Expected render time     |
| ------------------- | --------------- | ------------------------ |
| < 100               | 8–16            | < 1 second               |
| 100–500             | 8–16            | 1–10 seconds             |
| 500–2000            | 8               | 10–60 seconds            |
| > 2000              | any             | Minutes to hours — avoid |

**Rule of thumb:** If the primary shape is a simple primitive (cube, cylinder, basic extrusion), `minkowski()` is manageable. If the primary shape is itself a complex CSG result, use `hull()` instead.

---

## Step 3 — `projection()` for 2D Templates

### The Concept: Flattening 3D to 2D

`projection()` takes a 3D shape and flattens it onto the XY plane, producing a 2D outline. Think of shining a light straight down onto a 3D object: the shadow it casts on the floor is the projection.

This is useful in fabrication contexts because real-world assembly often requires 2D templates:

- A **drilling template** — print a flat sheet that shows exactly where to drill holes in a wall, shelf, or PCB
- A **laser-cut profile** — export the 2D shape of a part as a DXF for a laser cutter to follow
- A **footprint check** — verify that your design will actually fit in the space you have before printing
- A **CNC machining path** — export a cross-section as a DXF for a CNC router

`projection()` has two modes:

- `cut=false` — projects the full silhouette (shadow from above): every part of the shape, regardless of height
- `cut=true` — projects a cross-section _at z=0_: only the parts of the shape at exactly that height plane

```openscad
// projection(cut=false) — complete silhouette (shadow from above)
// projection(cut=true)  — cross-section at z=0 (slice through the model)

module phone_stand_example() {
  cube([90, 70, 5]);
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post A
  translate([75, 20, 5]) cylinder(r=5, h=35, $fn=24);  // mounting post B
}

// 3D model (for printing)
phone_stand_example();

// 2D silhouette (footprint) — placed beside the 3D model for comparison
color("LightGreen")
translate([110, 0, 0])
  linear_extrude(1)   // 1mm thick so it is visible in 3D preview
    projection(cut=false)
      phone_stand_example();

// Cross-section at z=3 — shows internal structure at that height
color("LightCoral")
translate([220, 0, 0])
  linear_extrude(1)
    projection(cut=true)
      translate([0, 0, -3])  // shift model so the cut falls at z=3 of the part
        phone_stand_example();
```

### Exporting DXF for Laser Cutting or CNC

> **Note:** `3dm` is designed for building STL output. Use the `openscad` CLI directly for DXF export — do **not** use `3dm build` for this step.

```bash
# Linux / macOS
openscad -o template.dxf src/template_projection.scad

# Windows (PowerShell or CMD)
openscad -o template.dxf src\\template_projection.scad
```

**Best practice: keep projection files separate.** Create a dedicated `.scad` file for DXF export that imports your main model and wraps it in `projection()`. This keeps your main model file clean.

```openscad
// src/template_projection.scad
// This file is used exclusively for DXF export.
// It should contain only projection() — no 3D geometry.

use <../src/main.scad>

// Project the full silhouette
projection(cut=false)
  main_assembly();

// Add mounting-hole markers as circles.
// DXF circles are standard and ready for CNC drilling.
hole_positions = [[10, 10], [80, 10], [10, 60], [80, 60]];
for (pos = hole_positions) {
  translate(pos)
    circle(r=1.75, $fn=16);  // 3.5 mm diameter holes
}
```

---

## Step 4 — Diagnosing Non-Manifold Geometry

### What "Manifold" Means and Why It Matters

A mesh is **manifold** (also called "watertight") when it follows two strict rules:

1. Every edge is shared by exactly two faces — no more, no fewer
2. The surface has no holes, zero-thickness walls, or self-intersections

Think of a manifold mesh like a sealed plastic bag. You can fill it with water and it won't leak anywhere. Every point on the surface is clearly either "inside" or "outside." Slicers need this to determine which areas to fill with material.

A non-manifold mesh is like a bag with a hole in it, or two bags fused at a single edge with no material connecting them. Slicers can't slice it correctly — they might produce missing layers, extra walls, or simply refuse to import the file.

### How OpenSCAD Produces Non-Manifold Geometry

OpenSCAD's CSG operations are mathematically defined, but floating-point arithmetic and co-planar face interactions can create subtle mesh problems. The four most common causes:

### Problem 1 — Co-Planar Faces in `difference()`

When the cutter exactly coincides with the face of the base shape, OpenSCAD cannot determine which side of the face to keep. The result is an ambiguous, possibly non-manifold edge. Fix: extend the cutter by 0.001 mm on each side so it clearly passes through the material.

```openscad
difference() {
  cube([20, 20, 20]);
  translate([5, 5, -0.001])           // extend 0.001 below base
    cylinder(r=5, h=20.002, $fn=24);  // extend 0.001 above top
}
```

This is the same 0.001 mm rule introduced in Lesson 2. It's worth repeating because forgetting it is the most common cause of non-manifold geometry in student work.

### Problem 2 — Zero-Thickness or Negative-Thickness Walls

If your wall thickness calculation ever produces zero or a negative number, the resulting geometry has no material — creating a degenerate mesh.

```openscad
module thin_wall_box(w, d, h, wall=2) {
  assert(wall > 0 && wall < min(w,d)/2,
    str("wall must be 0 < wall < ", min(w,d)/2, ", got: ", wall));
  difference() {
    cube([w, d, h]);
    translate([wall, wall, wall])
      cube([w - 2*wall, d - 2*wall, h]);  // open top — valid manifold
  }
}
```

The `assert()` guard here catches the problem before it reaches the renderer. This is better than discovering it in the slicer.

### Problem 3 — Shapes That Only Touch (Not Overlap)

Two shapes that share a face but do not overlap create a non-manifold edge — an edge that belongs to faces from both shapes but with no clear "inside." Fix: overlap by 0.001 mm and wrap in `union()`.

```openscad
module two_boxes() {
  union() {
    cube([10, 10, 10]);
    translate([10 - 0.001, 0, 0])   // overlap by 0.001 — not just touch
      cube([10, 10, 10]);
  }
}
```

### Problem 4 — Inverted Normals from Negative `scale()`

`scale()` with a negative value flips face normals (the direction each face "points"), creating inside-out geometry. The shape looks correct in the preview but has every face pointing the wrong direction — which slicers interpret as solid material where there should be empty space.

```openscad
// WRONG — negative scale flips normals:
// scale([-1, 1, 1]) some_module();

// CORRECT — mirror() preserves normals:
mirror([1, 0, 0]) some_module();
```

### Debugging Tip: The Ghost Modifier

```openscad
// Use the % modifier to render a shape as a transparent ghost
// so you can see inside the model and verify cutter placement.
difference() {
  cube([20, 20, 20]);
  % cylinder(r=5, h=25, $fn=24);  // ghost the cutter
}
```

The `%` modifier makes the cutter semi-transparent in preview mode, letting you visually verify it's positioned and sized correctly before committing to the render.

### Manifold Check Workflow

```bash
# Build the STL
3dm build

# OpenSCAD prints manifold warnings to the console, e.g.:
#   WARNING: Object may not be a valid 2-manifold ...
# Check for this message after every build.

# For more detail, use admesh:
# Linux:   apt install admesh
# macOS:   brew install admesh
admesh --analyze build/main.stl

# Or open the STL in PrusaSlicer and enable "Check for geometry errors"
# to see orange highlights on problem edges.
```

> ⚠ The correct OpenSCAD manifold warning is **"WARNING: Object may not be a valid 2-manifold"**. Searching for any other string will cause you to miss real errors.

---

## Step 5 — `surface()` for Height-Map Geometry

### The Concept: Images as 3D Terrain

`surface()` reads a grayscale image or a `.dat` data file and creates a 3D surface where pixel brightness maps to Z height. Black pixels (value 0) produce no height; white pixels (value 255) produce maximum height. Every shade of gray in between produces an intermediate height, interpolated smoothly between pixels.

Think of a topographic map where elevation is encoded in color — `surface()` works exactly like that. You can create terrain landscapes from satellite elevation data, embossed artwork from any image, textured panels from grayscale photographs, or precise surface profiles from engineering data.

### Why `surface()` Is Powerful

Traditional CSG modeling works from the outside in: you define shapes geometrically and combine them. `surface()` lets you work from _data_ — the shape emerges from a dataset rather than from geometric primitives. This is how architectural visualization software creates terrain, how prosthetic designers create textured grip surfaces, and how engineers create test panels with complex surface profiles.

### Example 1: Minimal Self-Contained `surface()` from a `.dat` File

Save the matrix below as `terrain.dat` in the same folder as your `.scad` file, then run the `surface()` call. No external image editor required.

```
 0  10  20  10   0
10  40  60  40  10
20  60 100  60  20
10  40  60  40  10
 0  10  20  10   0
```

```openscad
// In your .scad file:
scale([5, 5, 0.3])   // each cell = 5 mm wide; height scaled from 0–100
  surface(file="terrain.dat", center=true);
```

This produces a small mountain shape — highest at the center, tapering outward. The `scale()` controls the physical dimensions: X/Y scale determines how wide each data cell becomes, and Z scale determines the vertical exaggeration.

### Example 2: Embossed Logo Panel

Create a grayscale PNG (logo = white, background = black), save it as `src/logo_heightmap.png`, then use the module below.

```openscad
module logo_panel(panel_w=60, panel_d=40, panel_h=3, relief=1.5) {
  // Base plate
  cube([panel_w, panel_d, panel_h]);

  // Embossed surface on top.
  // Assumes logo_heightmap.png is 100×100 pixels; scale to fit the panel.
  translate([0, 0, panel_h])
    scale([panel_w/100, panel_d/100, relief/255])
      surface(file="src/logo_heightmap.png", center=false, invert=false);
}

logo_panel();
```

> ✓ `surface()` supports PNG (grayscale or colour — uses luminance) and `.dat` (whitespace-separated matrix). Always check that the image dimensions match the aspect ratio you want before scaling.

---

## Step 6 — Advanced: `children()` and Custom Container Modules

### The Concept: Modules That Accept Geometry as Input

So far, every module you've written produces geometry from parameters. `children()` lets you write modules that _wrap_ geometry — they accept shapes as input and do something with them. This is like writing a picture frame that works with any picture, rather than one specific picture built into the frame.

The pattern is called a **container module**: a module that defines a structural context (a base plate, a grid, a mounting system) and places its children in that context. The caller provides the geometry; the module provides the infrastructure.

### `$children`: How Many Children Were Passed

`$children` is an automatic variable that contains the count of child objects passed to a module. You can use it to loop over children with `children(i)` to access each one individually by index (0-based).

### Example 1: `mounted_on_plate` — Place Any Geometry on a Base with Corner Posts

```openscad
module mounted_on_plate(plate_w, plate_d, plate_h=3, post_h=5) {
  // Base plate
  color("LightGray")
    cube([plate_w, plate_d, plate_h]);

  // Corner mounting posts
  for (x = [5, plate_w - 5]) {
    for (y = [5, plate_d - 5]) {
      translate([x, y, plate_h])
        cylinder(r=3, h=post_h, $fn=16);
    }
  }

  // Child geometry sits on top of the posts
  translate([0, 0, plate_h + post_h])
    children();
}

// Usage: any geometry wrapped in mounted_on_plate()
mounted_on_plate(80, 60, plate_h=3, post_h=8) {
  cylinder(r=15, h=20, $fn=32);
}
```

`children()` here is called without an index, which passes _all_ children as a group. The cylinder in the usage example will be placed on top of the posts — without the module knowing or caring what shape it is.

### Example 2: `repeat_children` — Tile Multiple Named Children in a Grid

`$children` gives you the count of children passed. Use `children(i)` to render the i-th child individually.

```openscad
module repeat_children(n=3, spacing=25) {
  for (i = [0 : $children - 1]) {
    for (j = [0 : n - 1]) {
      translate([j * spacing, i * spacing, 0])
        children(i);  // render the i-th child
    }
  }
}

translate([0, 100, 0])
repeat_children(n=4, spacing=20) {
  sphere(r=5, $fn=16);           // child 0
  cylinder(r=4, h=10, $fn=16);   // child 1
  cube([8, 8, 6]);                // child 2
}
```

This tiles each child shape in its own row — spheres in the first row, cylinders in the second, cubes in the third — repeated 4 times horizontally. The module doesn't know what shapes it's tiling; it just repeats whatever is passed to it.

> ✓ OpenSCAD does **not** expose bounding-box queries at runtime. Always pass dimensions explicitly to container modules rather than trying to compute them from children.

---

## Step 7 — Advanced: Lookup Tables and `search()`

### The Concept: Data-Driven Parametric Design

So far, parametric design meant: change a number, the shape changes. This step takes it further: **data-driven design** means the shape is determined by structured data — tables, lists, databases of values.

Instead of hardcoding `density = 1.24` for PLA and remembering to change it manually when you switch materials, you define a material table and let the code look up the right values automatically. The design reacts to the material choice; you just change one variable.

This is how professional parametric CAD systems work. A single master file can describe a family of parts at different sizes, materials, and configurations — all driven by lookup tables.

### `lookup()`: Smooth Interpolation from a Table

`lookup()` finds an output value by interpolating between entries in a `[input, output]` table. If the input falls between two entries, the output is linearly interpolated between them.

```openscad
// Temperature-to-fan-speed lookup table
speed_table = [
  [0,   0],   //  0°C -> fan off
  [40,  0],   // 40°C -> fan off
  [50, 50],   // 50°C -> 50% speed
  [60, 80],   // 60°C -> 80% speed
  [70, 100]   // 70°C -> full speed
];

temp = 55;
fan_speed = lookup(temp, speed_table);
echo("Fan speed at", temp, "°C:", fan_speed, "%");  // -> 65%
```

`lookup()` is especially useful for smoothly varying geometric properties — rounding radii that increase with part size, wall thicknesses that scale with load, fin counts that increase with diameter.

### `search()`: Exact Match in a List

`search()` finds the index of a value in a list, enabling exact-match lookup for categorical data like material names.

> ⚠ `search()` returns a **list of lists**. Check `len(matches[0]) > 0` for a valid result — `idx != []` does **not** work correctly in OpenSCAD.

```openscad
materials = ["PLA",  "PETG", "ABS",  "TPU",  "Nylon"];
densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];

selected = "PETG";
idx = search([selected], materials)[0];
density = densities[idx];
echo(str(selected, " density: ", density, " g/cm³"));
```

### Example 3: Print Cost Estimator with `search()` and `assert()`

This module demonstrates the full pattern: a lookup table for material properties, `search()` to find the right row, `assert()` to catch invalid material names, and computed geometry that reacts to all of it.

```openscad
module print_cost_label(volume_mm3, material="PLA") {
  materials = ["PLA",  "PETG", "ABS",  "TPU",  "Nylon"];
  densities = [ 1.24,   1.27,   1.05,   1.20,   1.14];
  costs_g   = [ 0.020,  0.025,  0.018,  0.035,  0.045];

  // search() returns a list of lists.
  // matches[0] is the first result: an index on success, [] on failure.
  matches = search([material], materials);
  assert(len(matches[0]) > 0,
    str("Unknown material: \"", material, "\". Valid: ", materials));
  idx = matches[0];

  mass_g = (volume_mm3 / 1000) * densities[idx];
  cost   = mass_g * costs_g[idx];
  label  = str(material, ": ", round(mass_g * 10) / 10, "g / $",
               round(cost * 100) / 100);

  echo("Cost estimate:", label);
  linear_extrude(1)
    text(label, size=4, font="Liberation Sans", halign="center");
}

print_cost_label(12000, "PETG");
```

---

## Exercise Set A: Phone Stand

### A1 — Hull Transition

Add a smooth `hull()` transition between the base plate and the mounting post:

```openscad
hull() {
  translate([15, 20, 0]) cylinder(r=8, h=1, $fn=32);   // post footprint on base
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);  // actual post
}
```

### A2 — Tolerance Stack-Up

Measure the three main structural parts of your phone stand and record them in a table. Calculate worst-case stack-up:

**Worst case = sum of all individual tolerances**

Example for three parts each at ±0.15 mm: 0.15 + 0.15 + 0.15 = **±0.45 mm total**

Document your own measurements in a similar table.

### A3 — Add a Cable Slot

Extend your phone stand design with a cable slot through the base:

```openscad
cable_slot_w  = 12;   // mm
cable_slot_d  = 5;    // mm
cable_slot_z  = -0.001;

// Add inside your main difference() block:
translate([base_w/2 - cable_slot_w/2, 0, cable_slot_z])
  cube([cable_slot_w, cable_slot_d, base_h + 0.002]);
```

---

## Exercise Set B: Keycap with Text

### B1 — Build a Mechanical Keyboard Keycap

```openscad
// Parametric keycap for Cherry MX switches
key_w      = 18;
key_d      = 18;
key_h      = 7;
stem_r     = 2.75;  // MX stem: 5.5 mm diameter
stem_h     = 3.8;
wall       = 1.5;
label_text = "A";

module keycap() {
  difference() {
    // Keycap body with slight top curve
    hull() {
      cube([key_w, key_d, key_h - 2], center=true);
      translate([0, 0, 1]) cube([key_w - 2, key_d - 2, key_h], center=true);
    }
    // Hollow inside
    translate([0, 0, -wall])
      cube([key_w - 2*wall, key_d - 2*wall, key_h], center=true);
    // MX stem hole
    translate([0, 0, -(key_h/2 + 0.001)])
      cylinder(r=stem_r + 0.1, h=stem_h + 0.001, $fn=16);
  }
}

module stem_mount() {
  translate([0, 0, -(key_h/2 + stem_h)])
    difference() {
      cylinder(r=stem_r + wall, h=stem_h, $fn=16);
      cylinder(r=stem_r, h=stem_h + 0.001, $fn=16);
    }
}

keycap();
stem_mount();

// Engrave label on top
translate([0, 0, key_h/2 - 0.8])
  linear_extrude(1.2)
    text(label_text, size=8, font="Liberation Sans:style=Bold",
         halign="center", valign="center", $fn=4);
```

### B2 — Validate with `3dm info`[^112]

```bash
3dm info
```

Document what the model description reports and compare it to your design intent.

### B3 — Print and Test

Print the keycap and test it on a Cherry MX switch (or compatible). If the stem is too tight, increase the clearance from `stem_r + 0.1` to `stem_r + 0.15`. If too loose, decrease to `stem_r + 0.05`.

---

## Exercise Set C: Stackable Bins

### C1 — Build a Three-Size Bin Set

```openscad
// Small bin
translate([0, 0, 0])
  bin_assembly(bin_w=60, bin_d=45, bin_h=30);

// Medium bin
translate([80, 0, 0])
  bin_assembly(bin_w=80, bin_d=60, bin_h=40);

// Large bin
translate([180, 0, 0])
  bin_assembly(bin_w=100, bin_d=80, bin_h=50);
```

### C2 — Diagnose and Fix Non-Manifold Geometry

Non-manifold geometry occurs when faces share edges inconsistently (T-junctions, missing faces, zero-thickness walls). A common cause is two shapes that touch at exactly one face:

```openscad
// PROBLEM: two cubes share a face exactly — may produce a non-manifold edge
cube([20, 20, 10]);
translate([20, 0, 0]) cube([20, 20, 10]);  // touching at x=20

// FIX 1: use union()
union() {
  cube([20, 20, 10]);
  translate([20, 0, 0]) cube([20, 20, 10]);
}

// FIX 2: overlap slightly
union() {
  cube([20.001, 20, 10]);
  translate([20, 0, 0]) cube([20, 20, 10]);
}
```

```bash
# Diagnosis
3dm info  # AI will often flag non-manifold geometry
# Also open the STL in your slicer and enable "Check for geometry errors"
```

### C3 — Advanced Geometry: `hull()` and `minkowski()`

```openscad
// hull() creates a convex envelope — useful for organic transitions
module smooth_transition() {
  hull() {
    translate([0, 0, 0])  cylinder(r=15, h=5, $fn=64);
    translate([0, 0, 30]) cylinder(r=5,  h=2, $fn=64);
  }
}
smooth_transition();

// minkowski() adds the secondary shape to every surface point
// Result: all edges rounded by 2 mm
module rounded_hull() {
  minkowski() {
    hull() {
      cylinder(r=10, h=3, $fn=8);           // octagonal prism
      translate([30, 0, 0]) sphere(r=8, $fn=32);
    }
    sphere(r=2, $fn=16);  // rounds all edges by 2 mm
  }
}
rounded_hull();
```

---

## Quiz — Lesson 3dMake.10 (15 questions)

1. What tool do you use to measure printed part dimensions against the design specification?
2. What is tolerance stack-up, and why does it matter for multi-part assemblies?
3. What causes non-manifold geometry in OpenSCAD, and how do you detect it?
4. How does `hull()` differ from `union()`?
5. What does `3dm info` help you verify about your model?
6. What is the diameter of a Cherry MX stem, and what clearance would you add for a slip-fit keycap?
7. True or False: `find -newer` is an event-driven file change detection method.
8. If three parts each have ±0.15 mm tolerance, what is the worst-case total error for a three-part stack?
9. What does the `$fn` parameter control in OpenSCAD?
10. Describe two methods for fixing non-manifold geometry caused by two touching (but not overlapping) shapes.
11. What is the difference between `hull()` and `minkowski()` for creating organic shapes? Give one use case for each.
12. What does `resize([50, 0, 0])` do, and why might `resize()` behave unexpectedly for non-uniform scaling?
13. When measuring a printed part with calipers[^111], what is the difference between an inside measurement and an outside measurement, and when does that distinction matter for tolerance analysis?
14. Describe the iterative workflow for dialling in press-fit tolerances: what do you print, what do you measure, and how do you adjust?
15. If `3dm info` reports "the model appears non-manifold," what are three possible causes you would investigate in your OpenSCAD code?

---

## Extension Problems (15)

1. Create a tolerance sensitivity study: build 5 keycaps with stem clearance from 0.05–0.25 mm in 0.05 mm increments, print them, and record which values fit your switches.
2. Design a go/no-go gauge for a 10 mm nominal hole: a part with a "go" pin sized for slip-fit and a "no-go" pin sized for interference fit.
3. Write a printer calibration SOP: bed levelling, first-layer calibration, and dimension verification. Include a measurement checklist.
4. Build a three-tier stackable storage system for art supplies. Each tier has a different inner grid.
5. Conduct a tolerance stack-up analysis for your stackable bin system. Calculate worst-case misalignment.
6. Build a parametric test coupon that tests four wall thicknesses (0.8, 1.2, 1.6, 2.0 mm) in a single print.
7. Design a caliper stand: a holder that keeps your digital calipers at a comfortable angle for one-handed operation.
8. Build a non-manifold error catalogue: intentionally create 5 different types of non-manifold geometry, document how each was created, and how to fix it.
9. Use `hull()` to design a smooth ergonomic tool handle and compare it to a simple cylinder handle.
10. Create a printability checklist for new designs: overhangs, wall thickness, minimum feature size, support requirements. Apply it to your keycap and bin designs.
11. Research the `resize()` function. Build an example showing how it behaves differently from `scale()` for non-uniform resizing.
12. Design a multi-part assembly tutorial: a three-piece interlocking puzzle that teaches tolerance, alignment, and slip-fit.
13. Build a "measurement worksheet" template in OpenSCAD: render a flat sheet that lists all key dimensions of a part as text, for printing alongside the part.
14. Create a chi-squared goodness-of-fit test for your printer's dimensional accuracy: measure 20 prints of the same part and determine whether the errors are normally distributed.
15. Write a comprehensive troubleshooting guide covering the 10 most common 3D printing failures you have encountered or researched, with causes, prevention, and fixes.

---

## References and Helpful Resources

- OpenSCAD User Manual — Hull and Minkowski.
  [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Minkowski_and_Hull)

[^111]: Digital Calipers Measurement Technique — see Appendix B of this document.

[^112]:
    3DMake GitHub Repository — Command reference including `3dm info`.
    [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub
- CodeSolutions Repository: [https://github.com/ProgrammingWithOpenSCAD/CodeSolutions](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions)
- OpenSCAD Quick Reference: [https://programmingwithopenscad.github.io/quick-reference.html](https://programmingwithopenscad.github.io/quick-reference.html)
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Reference Appendices

_All supporting documents for Lesson 10 are included below. You do not need to open any additional files._

---

## Appendix A: Measurement Worksheet

**Use this for:** Measuring real-world objects before modeling. Record three measurements per feature, then use the average in your OpenSCAD code — never a single measurement.

**Student Name:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_\_\_  
**Project / Assignment:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### How to Use This Worksheet

1. Measure each feature three times and record all three values.
2. Calculate the average: add the three values and divide by 3.
3. Round to one decimal place (e.g., 23.4 mm).
4. Use the average in your OpenSCAD code — not any single measurement.

_Units: All measurements in millimeters (mm) unless otherwise noted._

---

### Object 1

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

Notes / sketches:

```
(describe the object here — label which direction is X, Y, Z)
```

---

### Object 2

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

Notes / sketches:

```
(describe the object here)
```

---

### Object 3

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

---

### Object 4

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

---

### Object 5

Object description: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| Feature    | What You're Measuring | M1 (mm) | M2 (mm) | M3 (mm) | Average (mm) |
| ---------- | --------------------- | :-----: | :-----: | :-----: | :----------: |
| Length (X) |                       |         |         |         |              |
| Width (Y)  |                       |         |         |         |              |
| Height (Z) |                       |         |         |         |              |
| Feature 4  |                       |         |         |         |              |
| Feature 5  |                       |         |         |         |              |

---

### Accuracy Check

After completing all measurements, compare your averages with a partner who measured the same objects.

| Object | My Average (mm) | Partner's Average (mm) | Difference (mm) | Within 1 mm? |
| :----: | :-------------: | :--------------------: | :-------------: | :----------: |
|   1    |                 |                        |                 |              |
|   2    |                 |                        |                 |              |
|   3    |                 |                        |                 |              |
|   4    |                 |                        |                 |              |
|   5    |                 |                        |                 |              |

If any difference is greater than 1 mm, remeasure together and find the source of the discrepancy.

### Percent Error (Optional / Extension)

If your instructor provides the "true" dimension of an object, calculate your percent error:

`% error = (|your average − true value| / true value) × 100`

| Object | Your Average | True Value | Difference | % Error |
| :----: | :----------: | :--------: | :--------: | :-----: |
|        |              |            |            |         |
|        |              |            |            |         |

A percent error under 2% is excellent for caliper work at this level.

### Reflection

_Answer in complete sentences._

1. Which measurement was most difficult to take and why?

2. Did your three measurements for any feature vary significantly? What might cause that variation?

3. If you were designing an object in OpenSCAD that needed to fit _over_ one of these objects, which measurement would you use — your smallest, your largest, or your average? Why?

---

## Appendix B: Measurement Calibration Guide

_Ensure accurate dimensions in your printed parts through proper calibration and verification._

### Why Calibration Matters

Printed dimensions often deviate from designed dimensions due to nozzle width variations, inconsistent extrusion flow rate, plastic shrinkage during cooling, slicer interpretation differences, and material-specific shrinkage (ABS can shrink 0.3–1%).

- Typical tolerances **without** calibration: ±0.3–0.5 mm
- Typical tolerances **with** calibration: ±0.1–0.2 mm

---

### Pre-Print Calibration

#### 1. Nozzle Diameter Verification

Print a simple 10 mm × 10 mm × 5 mm solid box at default 0.4 mm line width with 100% flow rate. Measure the result. If it deviates significantly from 10 mm, the nozzle may be partially clogged (clean it) or the wrong size (replace it).

#### 2. E-Steps Calibration (Extrusion Rate)

E-steps control how many stepper-motor steps produce 1 mm of filament movement. If this is wrong, every print will be over- or under-extruded.

**Method:**

1. Heat extruder to printing temperature.
2. Mark filament 100 mm from the extruder entrance with a marker.
3. Command extrusion of exactly 100 mm (`G1 E100 F100`).
4. Measure the actual distance the mark moved.

**Formula:**

```
New E-steps = Current E-steps × (100 mm / Actual distance moved)

Example:
  Current: 93 steps/mm
  Commanded: 100 mm
  Actual moved: 92 mm
  New: 93 × (100 / 92) = 101 steps/mm
```

Apply with `M92 E101` then `M500` to save (Marlin), or update configuration file (Klipper).

#### 3. First Layer Height Verification

Print a single-layer square (base layer only). The first layer should be 0.2–0.25 mm thick — roughly the thickness of a standard piece of printer paper. Adjust Z-offset by ±0.05 mm increments until correct.

---

### XY Dimension Calibration

**Test file (OpenSCAD):**

```openscad
cube_size      = 20;
wall_thickness = 2;

difference() {
  cube([cube_size, cube_size, cube_size], center=true);
  cube([cube_size - 2*wall_thickness,
        cube_size - 2*wall_thickness,
        cube_size + 1], center=true);  // open top
}
```

Print at 100% flow rate. Allow complete cooling (2+ hours). Measure the _internal_ dimension at 3 locations per axis. Expected internal width: `20 - 2×2 = 16 mm`.

**Calibration formula:**

```
Flow rate adjustment = (Expected internal / Actual internal) × 100%

Example:
  Expected: 16.00 mm
  Actual: 15.75 mm
  Adjustment: (16.00 / 15.75) × 100% = 101.6%  →  set flow to 101.6% in slicer
```

---

### Shrinkage Compensation by Material

| Material | Typical Shrinkage | Recommended Action                             |
| -------- | :---------------: | ---------------------------------------------- |
| PLA      |     0.3–0.5%      | Usually acceptable; no action needed           |
| PETG     |      0.5–1%       | Scale design up 0.5–1% for critical dimensions |
| ABS      |     0.8–1.5%      | Scale up 1% minimum                            |
| TPU      |       1–2%        | Scale up 1–2% for critical dimensions          |

Apply in OpenSCAD:

```openscad
final_size        = 20;
material_shrink   = 1.01;  // 1% for ABS
designed_size     = final_size * material_shrink;
```

---

### Critical Measurements to Track

| Measurement        | Method             | Acceptable Tolerance | Frequency   |
| ------------------ | ------------------ | :------------------: | ----------- |
| Wall thickness     | Calipers (3 spots) |       ±0.1 mm        | Every print |
| Hole diameter      | Calipers or gauge  |     ±0.1–0.2 mm      | Every print |
| Overall dimensions | Calipers           |       ±0.2 mm        | Monthly     |
| Layer height       | Stack on calipers  |       ±0.02 mm       | Monthly     |
| Vertical height    | Measure side face  |       ±0.1 mm        | Every print |

---

### Quick Calibration Checklist

**Before first print with new settings:**

- [ ] E-steps calibration complete
- [ ] First layer height verified
- [ ] Nozzle diameter confirmed
- [ ] Test print completed and measured

**Monthly maintenance:**

- [ ] Calibration cube printed and measured
- [ ] Flow rate adjusted if needed
- [ ] Layer height verified
- [ ] Temperature consistency checked

**After any hardware change (nozzle swap, bed relevel, material change):**

- [ ] Re-verify nozzle diameter
- [ ] Re-verify first layer height
- [ ] Test print and measure before production prints

---

### Recommended Measurement Tools

| Tool             | Typical Cost | Accuracy | Best Use                        |
| ---------------- | :----------: | :------: | ------------------------------- |
| Digital calipers |    $5–15     | ±0.05 mm | Primary tool for all work       |
| Steel ruler      |    $3–10     |  ±1 mm   | Quick rough checks              |
| Vernier calipers |    $10–30    | ±0.05 mm | Precision work                  |
| Micrometer       |    $20–50    | ±0.01 mm | Critical tolerance verification |

**Recommendation:** Digital calipers are the most versatile and affordable starting point. Buy a pair before you print your first functional part.

---

### Calibration Record

| Field                    | Value |
| ------------------------ | ----- |
| Last Calibration Date    |       |
| Printer Model            |       |
| Current E-Steps          |       |
| Current Flow Rate        |       |
| Materials Calibrated For |       |

---

## Appendix C: Diagnostic Checklist

_Use this checklist to systematically diagnose and troubleshoot printing issues before consulting the solutions guide._

### Quick Diagnosis Flowchart

```
Print Problem?
|
+---- [Before Print] Issues?
|  +---- Filament won't load  ->  CHECK: Temperature, drive gear, nozzle
|  +---- Printer won't heat   ->  CHECK: Power, temp sensor, firmware
|  +---- Bed not level        ->  CHECK: Leveling routine, bed surface
|
+---- [First Layer] Issues?
|  +---- Won't stick          ->  CHECK: Bed temp, cleanliness, nozzle height
|  +---- Too squished         ->  CHECK: Nozzle height, bed temp
|  +---- Gaps / uneven        ->  CHECK: Bed levelness, hot end alignment
|
+---- [Mid-Print] Issues?
|  +---- Stops extruding      ->  CHECK: Clog, temp drop, jam
|  +---- Layers shift         ->  CHECK: Loose belts, mechanical bind
|  +---- Print wobbles        ->  CHECK: Build plate, print stability
|
+---- [Print Quality] Issues?
   +---- Weak / brittle       ->  CHECK: Temperature, flow rate, layer adhesion
   +---- Rough surface        ->  CHECK: Flow rate, speed, temperature
   +---- Warped               ->  CHECK: Bed temperature, cooling, material
```

---

### Pre-Print Diagnostics

#### A — Power and Connectivity

- [ ] Printer powered on; LED indicators normal
- [ ] No error codes displayed; interface responding
- [ ] USB connected (if applicable)

If failed: check power outlet, cable, power supply specs; power-cycle (off 30 sec, back on).

#### B — Temperature System

Heat hot end to 200°C; time to reach temperature should be 2–4 minutes with a steady rise (no plateau). Heat bed to 60°C; should reach target in 5–10 minutes.

**Stability test:** After reaching target, record temperature every minute for 10 minutes.

| Range  | Assessment                            |
| :----: | ------------------------------------- |
|  ±2°C  | Excellent                             |
|  ±5°C  | Acceptable                            |
| ±10°C  | Marginal — investigate thermal sensor |
| >±10°C | Problem — do not print until resolved |

#### C — Mechanical Systems

Disable motors (if firmware allows) and manually move each axis. Expected: smooth, no grinding.

| Axis   | Result                 |
| ------ | ---------------------- |
| X-axis | smooth / rough / stuck |
| Y-axis | smooth / rough / stuck |
| Z-axis | smooth / rough / stuck |

If rough or stuck: check for visible obstructions, inspect rails, verify pulleys turn freely, check belt tension, lubricate dry joints.

#### D — Build Plate Leveling (Paper Method)

1. Heat bed and nozzle to printing temperature.
2. Move nozzle to each corner; adjust leveling screw until a standard sheet of paper drags slightly under the nozzle.
3. Repeat for all 4 corners, then check center.
4. Target: consistent slight paper drag at all points; nozzle does not contact bed anywhere.

#### E — Filament and Extruder

- [ ] Filament diameter visually consistent over ~50 cm
- [ ] No visible cracks, kinks, or damage
- [ ] Spool rotates freely without binding
- [ ] Filament path clear of obstructions

**Manual extrusion test:** Heat to printing temperature. Push 10–20 mm of filament through manually. Expected: smooth push, consistent flow at nozzle tip.

---

### First Layer Appearance Guide

| Appearance               | Cause                          | Fix                                 |
| ------------------------ | ------------------------------ | ----------------------------------- |
| Wavy / embossed lines    | Nozzle too close to bed        | Raise Z-offset                      |
| Gaps between lines       | Nozzle too far from bed        | Lower Z-offset                      |
| Completely squished flat | Nozzle too low or bed too high | Raise Z-offset or re-level          |
| Partial adhesion only    | Bed too cool or dirty          | Clean bed; increase bed temperature |
| Consistent, even lines   | Correct                        | Continue print                      |

---

### Mid-Print Extrusion Failure

When extrusion stops during a print:

1. **Pause** (do not cancel) immediately.
2. Listen for extruder grinding sounds (indicates jam).
3. Observe whether filament is still feeding into the extruder.

```
Is filament stuck in the extruder?
+---- YES  -->  Nozzle clog likely
|               Try: cold pull, retract, then clean nozzle
|               See Appendix D (Common Issues) for full procedure
|
+---- NO   -->  Loading/path issue
               Is spool binding?     -->  Fix spool rotation
               Is path blocked?      -->  Clear obstruction
               Is drive gear slipping? -->  Clean and re-tension drive gear
```

---

### Dimensional Accuracy Check (After Print Cools)

Let the print cool for at least 2 hours before measuring.

**Measurement protocol:**

1. Measure each dimension 3 times at different locations.
2. Calculate average.
3. Compare to the design dimension.
4. Calculate deviation: `Deviation % = ((Measured − Design) / Design) × 100%`

|     Tolerance     |  Status  | Action                          |
| :---------------: | :------: | ------------------------------- |
| ±0.5 mm or better |   PASS   | No adjustment needed            |
|     ±0.5–1 mm     | MARGINAL | Document and monitor            |
|      >±1 mm       |   FAIL   | Adjust flow rate or recalibrate |

---

### Diagnostic Report Template

_Fill this out before seeking help — it ensures you've systematically checked the most common causes._

```
DIAGNOSTIC REPORT
=================
Printer Model:
Problem Description:
When it occurs: (always / sometimes / first 5 layers / etc.)
Recent changes (nozzle swap, new filament, new settings):

DIAGNOSTICS PERFORMED:
[ ] Power / connectivity verified
[ ] Temperatures verified and stable
[ ] Mechanical movement tested on all axes
[ ] Bed leveling checked
[ ] Filament loading tested
[ ] First layer inspected and evaluated
[ ] Print quality evaluated mid-print

Key Findings:
1.
2.
3.

Attempted Solutions:
1.
2.

Result: (Solved / Partial / Ongoing)
```

---

## Appendix D: Common Issues and Solutions

_Comprehensive troubleshooting guide for the most frequent 3D printing problems. Cross-reference with the Diagnostic Checklist (Appendix C) to identify which section applies to your situation._

---

### Pre-Print Issues

#### Problem: Filament Won't Load

**Symptoms:** Extruder clicks or grinds but no filament moves; nothing extrudes when manual extrude is commanded.

**Diagnosis checklist:**

- [ ] Nozzle temperature high enough for the material?
- [ ] Filament path clear of obstructions?
- [ ] Drive gear still has grip (not worn smooth)?
- [ ] Extruder tension set correctly?

**Solutions (try in order):**

1. Increase nozzle temperature by 10°C — too cold makes extrusion harder.
2. Clean the extruder drive gear with a wire brush to restore grip.
3. Check filament diameter — should be 1.75 mm ±0.03 mm. A spool that measured correctly when new may have inconsistent sections.
4. Verify extruder tension — should grip firmly but not crush the filament.
5. Inspect nozzle for partial clog (see "Nozzle Clog" below).

#### Problem: Warped or Damaged Filament

**Symptoms:** Filament appears kinked on the spool; inconsistent diameter; melted spots.

**Solutions:**

1. Cut off ~30 cm of the damaged section and discard.
2. If the filament seems brittle or stringy: dry it in a low oven at 50°C for 2 hours (PLA). Moisture absorption causes significantly worse print quality.
3. Store filament sealed with desiccant between sessions — especially important for Nylon, PETG, and TPU, which are hygroscopic.

---

### Print Quality Issues

#### Problem: Poor Bed Adhesion (First Layer Lifts)

**Symptoms:** Print lifts off bed during printing; edges curl up; print comes free entirely.

**Solutions (most effective first):**

1. Re-level the build plate — cold plate leveling is more accurate.
2. Clean the build plate — wipe with isopropyl alcohol to remove oils and dust.
3. Lower the nozzle — if it's too high, reduce Z-offset by 0.05–0.1 mm.
4. Increase bed temperature by 5–10°C.
5. Material-specific adhesion aids:
   - PLA: Painter's tape, glue stick, or clean bare PEI/glass
   - PETG: Textured PEI or thin glue layer (prevents it from bonding _too_ strongly to smooth surfaces)
   - ABS: Heated enclosure + blue tape + ABS slurry (acetone + scraps)
   - TPU: Clean bed, slightly elevated temperature

#### Problem: Nozzle Clog

**Symptoms:** No extrusion after initial layers; consistent gap between nozzle and surface; clicking from extruder; pressure building in hot end.

**Solutions (increasing intensity — try each before escalating):**

1. **Cold Pull:** Heat nozzle to 200°C, grip filament, pull firmly while the nozzle cools. Repeat 5–10 times. The extracted filament should have a "plug" shape that brought debris with it.

2. **Poke from top:** Heat to printing temperature. Carefully insert a 0.3–0.4 mm drill bit or acupuncture needle through the top of the nozzle (from the heatbreak side). Do not force — the goal is to break up, not compact, the clog.

3. **Soak and clean:** Remove the nozzle while hot (use wrench). Soak in acetone for 20–30 minutes. Use an ultrasonic cleaner if available. Clear the passage with a thin needle.

4. **Replace:** If the clog persists, the nozzle may be damaged internally. Replacement nozzles cost $3–10 — keep spares on hand.

#### Problem: Under-Extrusion (Thin Walls, Weak Prints)

**Symptoms:** Walls thinner than expected; layers separate easily; visible horizontal gaps; sections that appear lighter in color.

**Solutions:**

1. Check for partial nozzle clog (a fully extruding nozzle means a partial clog is possible).
2. Increase flow rate by 5–10% in the slicer.
3. Raise temperature by 5–10°C.
4. Reduce print speed by 10–20%.
5. Calibrate E-steps (see Appendix B).
6. Clean drive gear to remove accumulated plastic dust.

#### Problem: Over-Extrusion (Blobs, Rough Texture)

**Symptoms:** Excess material squishing between layers; rough, bumpy surface; blobs or zits on walls.

**Solutions:**

1. Reduce flow rate to 95% in the slicer.
2. Lower temperature by 5–10°C.
3. Verify line width — should be approximately 1.2× the nozzle diameter (0.4 mm nozzle → 0.48 mm line width).
4. Check slicer settings for nozzle size — ensure it matches the actual nozzle installed.

#### Problem: Layer Shifting

**Symptoms:** Layers offset horizontally mid-print; top portion of print is misaligned; usually occurs at a specific layer height.

**Solutions:**

1. Check mechanics: manually move X/Y (motors disabled) — should feel smooth, no resistance. Tighten all visible screws. Inspect belts for fraying.
2. Reduce travel speed by 20–30%. Reduce acceleration in firmware.
3. Check print orientation — tall, thin prints are vulnerable to the nozzle catching an edge and shifting. Rotate or add a brim.
4. If recently updated firmware: verify acceleration settings (try 1000 mm/s²) and step/mm calibration.

#### Problem: Stringing (Fine Threads Between Parts)

**Cause:** Nozzle oozes molten filament while traveling between print sections.

**Solutions:**

1. Reduce temperature by 5–10°C.
2. Increase retraction distance by 0.5–1.5 mm.
3. Increase retraction speed.
4. Enable "wipe on retract" in slicer.
5. Check for worn nozzle — worn nozzles ooze more than new ones.

#### Problem: Warping (Corners Curl Up)

**Cause:** Material cools unevenly and contracts at different rates across the print.

**By material:**

- ABS: Use a heated enclosure, slow cooling fan, higher bed temperature (100–110°C).
- PETG: Reduce cooling fan speed; increase bed temperature.
- PLA: Usually warps if bed temperature is _too high_ — reduce it.

---

### Maintenance to Prevent Issues

| Issue                | Prevention                                                |     Frequency     |
| -------------------- | --------------------------------------------------------- | :---------------: |
| Clogs                | Clean nozzle; avoid heat-creep by maintaining cooling fan | Before each print |
| Bed adhesion         | Level bed; clean plate with IPA                           | Before each print |
| Layer shift          | Check belt tension and drive gear screws                  |      Monthly      |
| Inconsistent quality | Calibrate E-steps; standardize environment                |     Quarterly     |
| Worn nozzle          | Monitor extrusion quality; replace on schedule            |  Every 6 months   |
| Moisture in filament | Store sealed with desiccant                               |      Ongoing      |

---

## Appendix E: Accessibility Audit — Extension Project

_Estimated time: 2–4 hours. This is an optional extension project for students who want to go deeper into inclusive design._

### Overview

Accessibility means designing tools, documents, and workflows so that people with different abilities — including visual impairment, motor differences, and cognitive differences — can use them fully. In a fabrication context, accessibility applies to both the physical products you design and the documentation you produce about them.

This extension project asks you to evaluate one lesson or project for non-visual accessibility barriers, implement concrete improvements, and document what you found.

### Learning Objectives

By completing this project, you will:

- Evaluate digital content for accessibility barriers related to vision, blindness, and low vision
- Apply concrete accessibility best practices (alt-text, code comments, plain language)
- Document improvements and estimate implementation effort
- Strengthen your awareness of inclusive design as a professional responsibility

### Tasks

1. Select one lesson or project (an OpenSCAD file plus its markdown instructions) and review it for accessibility shortcomings.
2. Create a checklist covering: image alt-text, code walkthroughs, tactile cues, plain-language explanations, and file naming conventions. Apply it to the chosen resource.
3. Implement at least three small improvements (add alt text, improve code comments, write a text-only step-by-step walkthrough) and document every change.
4. Produce a one-page audit report summarizing what you found, what you fixed, and what larger improvements would require instructor time.

### Deliverable

A one-page audit report plus a documented set of proposed changes (a "patch" or diff) for the target lesson.

### Accessibility Principles to Apply

**Alt-text for images:** Every image in a document should have a written description that conveys the same information. For a diagram showing a cross-section, the alt-text describes what the cross-section shows, not just "diagram."

**Code walkthroughs:** OpenSCAD files should include a plain-English comment block at the top describing what the file does and how to navigate it. Each module should have a comment explaining its purpose and parameters in plain language.

**Tactile cues in designs:** When designing objects that will be used physically, consider how they work for people who navigate by touch. Distinct ridges, chamfered corners, and different textures at key locations all improve usability for visually impaired users.

**Plain language:** Avoid jargon where a simpler word works. When technical terms are necessary, define them on first use.

---

### Student Audit Documentation Template

**Author:** \_\_\_\_\_\_\_\_  
**Date:** \_\_\_\_\_\_\_\_  
**Lesson/Project Audited:** \_\_\_\_\_\_\_\_

#### Audit Scope

Resources reviewed:

1.
2.
3.

Testing methodology used (screen reader, keyboard-only navigation, checklist review, other):

---

#### Detailed Findings

For each resource reviewed, complete the following:

**Resource 1: \_\_\_\_\_\_\_\_**

Screen reader assessment:

- Navigation: clear / unclear / broken
- Output readability: readable / partially readable / unreadable
- Error messages: helpful / unclear / missing
- Specific barriers found:

Keyboard navigation:

- All functions accessible via keyboard: Yes / No
- Tab order logical: Yes / No
- Specific barriers:

| Recommendation | Priority (H/M/L) | Feasibility (Easy/Med/Hard) | Impact (H/M/L) |
| -------------- | :--------------: | :-------------------------: | :------------: |
|                |                  |                             |                |
|                |                  |                             |                |

_(Repeat for each resource)_

---

#### Summary of Barriers Found

| Barrier | Frequency | Severity | Resources Affected |
| ------- | --------- | -------- | ------------------ |
|         |           |          |                    |
|         |           |          |                    |

---

#### Recommendations Matrix

| Priority | Feasibility | Impact | Recommendation | Implementation Steps |
| :------: | :---------: | :----: | -------------- | -------------------- |
|   High   |    Easy     |  High  |                |                      |
|   High   |   Medium    |  High  |                |                      |
|  Medium  |    Easy     | Medium |                |                      |

---

#### Reflection Questions

Answer in complete sentences:

1. What surprised you about the accessibility barriers you found?
2. How would you prioritize improvements if you had limited time?
3. What role should users with disabilities play in accessibility testing, rather than non-disabled designers guessing at barriers?
4. What would it take to make accessibility review a standard part of the lesson development process?

---

#### Action Plan

- Which improvements will you tackle first, and why?
- How will you verify that your improvements actually help?
- Timeline for implementation:

---

### Assessment (if graded)

| Category                                                                | Score (0–3) | Notes |
| ----------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — barriers identified, improvements actionable       |             |       |
| Design & Code Quality — testing methodology rigorous, findings specific |             |       |
| Documentation — template complete, recommendations prioritized          |             |       |
| **Total (0–9)**                                                         |             |       |

---

# Lesson 11 — Stakeholder-Centric Design and the Final Project

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
    // Bicone: hull of two {{hi:Cones}}cones meeting at midpoint
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
9. When documenting your design for reproducibility, should you record
   A. final bead dimensions only
   B. all iterations including failed attempts
   C. just the most recent version?
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
|      |          |                 |                   |     |

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
// Version: 0.1 (prototype) or YYYY.MM-prototype
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
v0.1 → v0.2 (YYYY-MM-DD) or YYYY.MM-prototype → YYYY.MM-prototype2
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
|      |               |          |                |           |                 |     |

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

- Programming with OpenSCAD EPUB Textbook: [../assets/Programming_with_OpenSCAD.epub](../assets/Programming_with_OpenSCAD.epub)
- OpenSCAD Quick Reference: [https://programmingwithopenscad.github.io/quick-reference.html](https://programmingwithopenscad.github.io/quick-reference.html)
- 3DMake GitHub Repository: [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)
- CodeSolutions Repository: [https://github.com/ProgrammingWithOpenSCAD/CodeSolutions](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions)

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

1. "How do you currently handle this problem — what do you do today?"
   - _Notes:_

2. "What works well about what you do now?"
   - _Notes:_

3. "What frustrates you most about the current situation?"
   - _Notes (listen for exact words — these often become requirements):_

**Pain Points Summary:**

- Primary:
- Secondary:

---

### Section 3: Ideal Solution (15 minutes)

_Use open-ended questions only. Do not suggest dimensions or shapes._

1. "Ideally, what would a perfect solution do for you?"
   - _Notes:_

2. "Walk me through how you'd use it in a typical situation."
   - _Notes:_

3. "Where would it live — what space does it need to fit into?"
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

1. "How often would you use this?"
   - [ ] Daily [ ] Weekly [ ] Monthly [ ] Occasionally
   - _Notes:_

2. "Who else might use it? Are there any accessibility considerations I should know about?"
   - _Notes:_

---

### Section 5: Success Criteria (10 minutes)

1. "If this design worked perfectly, how would you know? What would be different about your day?"
   - _Notes:_

2. "What would make you say this design failed?"
   - _Notes:_

**Success Criteria (draft):**

1.
2.
3.

---

### Section 6: Priorities (10 minutes)

1. "If you could only have three features, which three would matter most to you?"
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

1. "Was it easy to figure out how to use?"
   - [ ] Very easy [ ] Easy [ ] Neutral [ ] Difficult [ ] Very difficult
   - _What was confusing:_

2. "Are there any parts that don't work well together?"
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

1. "What's missing that you expected to be there?"
   - _Response:_

---

### Section 4: Physical Assessment (10 minutes)

1. Size: [ ] Too large [ ] Just right [ ] Too small
   - _Notes:_

2. Weight: [ ] Too heavy [ ] Just right [ ] Too light
   - _Notes:_

3. "Does the material / finish feel appropriate?"
   - _Response:_

4. "Any parts that feel fragile or rough?"
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

1. "What one change would have the biggest positive impact?"
   - _Response:_

2. "What should we keep exactly as-is?"
   - _Response:_

---

### Post-Session Analysis

**Key Insights:**

1.
2.

## **Critical Issues** (block use)

## **Should-fix Issues** (reduce satisfaction)

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

---

# Part IV — Final Exam

# 3dMake Foundation — Final Exam

Name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Date: \_\_\_\_\_\_\_\_\_\_\_\_

**Total Points: 100 (4 points per problem)**

**Instructions:**

- Answer all 25 questions
- For code errors, identify the specific problem and explain why it's wrong
- For behavioral questions, show your reasoning
- For design problems, explain your approach and why it solves the stated challenge
- You may reference the OpenSCAD documentation and appendices
- All work must be your own

---

## Section 1: Error Detection & Code Analysis (Problems 1–10)

For each code block, identify any errors. If there is an error, explain what's wrong and how to fix it. If the code is correct, state "No error" and explain what the code does.

---

### Problem 1: Primitive Definition Error

```openscad
cube([10, 10, 10], center=true);
sphere(r=5, $fn=16);
cylinder(h=20, r=8);
```

Is there an error in this code? If yes, identify it. If no, explain what this code renders.

**Answer:**

---

### Problem 2: Transform Syntax Error

```openscad
translate([5, 5, 0])
  rotate([0, 45, 0])
    cube([10, 10, 10], center=true);
```

Does this code have a syntax error? Explain what this code does.

**Answer:**

---

### Problem 3: CSG Operation Error

```openscad
cube([20, 20, 20], center=true);
difference() {
  sphere(r=12);
  cylinder(h=30, r=5, center=true);
}
```

What is wrong with this CSG operation? Explain the fix.

**Answer:**

---

### Problem 4: Module Definition Error

```openscad
module bracket(width, height, depth) {
  cube([width, height, depth], center=true);
  translate([width/2 + 2, 0, 0])
    cube([4, height, depth/2], center=true);
}
bracket(20, 15, 10);
```

Is there an error in this module definition or call? Why or why not?

**Answer:**

---

### Problem 5: Parameter & Variable Scoping Error

```openscad
wallthickness = 2;
module hollowcube(size) {
  difference() {
    cube([size, size, size], center=true);
    cube([size - wallthickness, size - wallthickness, size - wallthickness], center=true);
  }
}
hollowcube(20);
```

Will this code work correctly? If not, what is the problem and how would you fix it?

**Answer:**

---

### Problem 6: Loop & Iteration Error

```openscad
for (i = [0:5:20]) {
  translate([i, 0, 0])
    cube([4, 4, 4]);
}
```

Will this code produce 5 cubes? Show the positions and explain why or why not.

**Answer:**

---

### Problem 7: Center Parameter Misunderstanding

```openscad
cube([10, 10, 20], center=false);
sphere(r=5);
```

What is the relationship between these two shapes? Where would the sphere appear relative to the cube?

**Answer:**

---

### Problem 8: Intersection Error

```openscad
intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=8, $fn=32);
}
```

Is there an error? What will this code render?

**Answer:**

---

### Problem 9: Nested Transform Error

```openscad
translate([10, 0, 0])
  rotate([0, 0, 45])
    translate([5, 0, 0])
      cube([5, 5, 5], center=true);
```

Are the transforms applied in the correct order? Trace the final position of the cube.

**Answer:**

---

### Problem 10: Resolution Parameter Error

```openscad
sphere(r=10, $fn=4);
cylinder(h=20, r=8, $fn=3);
cube([10, 10, 10]);
```

Identify the problem(s) with resolution in this code. What will happen when rendered?

**Answer:**

---

## Section 2: Code Behavior & Theory (Problems 11–17)

For each question, show your reasoning. You may draw diagrams if helpful.

---

### Problem 11: Vertex Coordinates

A cube is defined as `cube([10, 10, 20], center=false)`.

**a)** List the XYZ coordinates of all 8 vertices.

**Answer:**

- Vertex 1:
- Vertex 2:
- Vertex 3:
- Vertex 4:
- Vertex 5:
- Vertex 6:
- Vertex 7:
- Vertex 8:

**b)** Now define the SAME cube with `center=true`. List the NEW coordinates of all 8 vertices.

**Answer:**

- Vertex 1:
- Vertex 2:
- Vertex 3:
- Vertex 4:
- Vertex 5:
- Vertex 6:
- Vertex 7:
- Vertex 8:

---

### Problem 12: Sphere Geometry

Explain the difference between `sphere(r=10, $fn=8)` and `sphere(r=10, $fn=128)`.

Which would you use for a prototype and which for final printing? Why?

**Answer:**

---

### Problem 13: Transform Order

Given this code:

```openscad
translate([10, 0, 0])
  rotate([0, 0, 45])
    cube([5, 5, 5], center=true);
```

Does the order matter? What if you swap translate and rotate? Show both final positions.

**Answer:**

---

### Problem 14: Boolean Operation Behavior

You have a solid cube and you want to create a hole through it. Which CSG operation would you use: `union()`, `difference()`, or `intersection()`?

Explain your choice and write pseudocode showing how you'd accomplish this.

**Answer:**

---

### Problem 15: Parametric Design Advantage

Compare these two approaches:

**Approach A:** Hard-coded cube with fixed dimensions

```openscad
cube([10, 10, 20]);
```

**Approach B:** Parametric cube

```openscad
module parametricbox(width, height, depth) {
  cube([width, height, depth], center=true);
}
parametricbox(10, 10, 20);
```

Why is Approach B better for design iteration? Give an example of how you'd use it.

**Answer:**

---

### Problem 16: Scale Transform Behavior

If you apply `scale([2, 1, 0.5])` to a `cube([10, 10, 10], center=true)`, what are the NEW dimensions of the cube?

**Answer — New dimensions:**

Show your calculation:

---

### Problem 17: Library Organization

You've created three useful modules:

- `bracket(width, height, depth)`
- `hollowcube(size, wallthickness)`
- `connectorpin(diameter, height)`

How would you organize these into a reusable library? What file structure would you create and why?

**Answer:**

---

## Section 3: Design & Problem-Solving (Problems 18–25)

These problems test your ability to design solutions, debug real-world issues, and think creatively.

---

### Problem 18: Tolerance Design Challenge

You're designing a snap-fit connector. The male part has a thickness of 2mm. The female slot needs to accommodate this part with enough flexibility to snap but not fall out.

Should the slot be:

- a) Exactly 2mm wide
- b) 2.1mm wide
- c) 1.9mm wide
- d) 2.5mm wide

Explain your choice and the design thinking behind it.

**Answer:**

---

### Problem 19: Design Iteration Problem

You print a keycap with `keysize=12` and the text embossing is too shallow to feel. Your code uses:

```openscad
linear_extrude(height=1)
  text("A", size=8);
```

What parameter(s) would you adjust to make the embossing deeper? Show your new code.

**Answer:**

---

### Problem 20: Error Diagnosis

Your 3dMake build fails with this error: "Geometry is non-manifold." You have this code:

```openscad
difference() {
  cube([20, 20, 20], center=true);
  cylinder(h=30, r=4, center=true);
}
```

Why might this fail? What's the common fix for non-manifold geometry?

**Answer:**

---

### Problem 21: Multi-Part Assembly

You're designing a two-part box (lid + base). The base has dimensions [50, 30, 20]. The lid should sit on top of the base.

Write parametric modules for both parts and show how you'd position them together. Include appropriate positioning logic.

**Answer:**

```openscad
module base(length, width, height) {
  // Your code here
}

module lid(length, width, height) {
  // Your code here
}

// Positioning code here:
```

---

### Problem 22: Optimization Challenge

You have a design that takes 5 minutes to render. You notice you have:

```openscad
sphere(r=10, $fn=256);
cylinder(h=20, r=8, $fn=256);
cube([20, 20, 20]);
```

Which parameter(s) would you reduce to speed up rendering while maintaining acceptable quality for a prototype? Explain your choices.

**Answer:**

---

### Problem 23: Real-World Constraint Problem

A stakeholder requests a custom handle for a tool. They specify:

- Must fit a hand (approximately 80mm long)
- Must accommodate fingers 60mm long inside
- Wall thickness must be at least 3mm for durability
- Should be ergonomic (slightly curved)

Sketch or describe a parametric design for this handle. What parameters would you expose to allow customization?

**Answer:**

---

### Problem 24: Code Reusability Challenge

You've created a single keycap module. Now you need to create a keyboard with 5 keys arranged in a row, spaced 15mm apart.

Write code using a loop that creates 5 keycaps with letters A–E, properly spaced.

> **Hint:** In OpenSCAD, strings are indexed like lists. `"ABCDE"[0]` returns `"A"`, `"ABCDE"[1]` returns `"B"`, and so on. The `len()` function returns the number of characters in a string.

**Answer:**

```openscad
module keycap(letter, keysize=10) {
  // Keycap code here (you can assume this exists)
}

// Your loop code here:
```

---

### Problem 25: Design Thinking & Iteration

You've printed Iteration 1 of a product and measured the results. The wall thickness is 3mm but feels too fragile. In Iteration 2, you increased it to 5mm, and now it feels too rigid and won't flex as intended.

For Iteration 3, what thickness would you try and why? How would you make this decision more scientific/data-driven?

**Answer:**

---

## Bonus Challenge (Optional, +5 points)

Design a parametric model for a custom assistive technology device (e.g., a tactile measuring tool, a custom gripper, an adapted eating utensil, etc.).

- Identify the user's specific need
- Specify the key dimensions and parameters
- Write at least one module with realistic dimensions
- Explain how the design would be tested and iterated

**Answer:**

```openscad
// Your design here:
```

**User Need:**

**Parameters:**

**Testing Plan:**

---

## Scoring Rubric

| Points | Criteria                                                                         |
| ------ | -------------------------------------------------------------------------------- |
| 4      | Correct answer with clear, complete explanation; demonstrates deep understanding |
| 3      | Mostly correct answer; minor gaps in explanation or reasoning                    |
| 2      | Partially correct; shows some understanding but has significant gaps             |
| 1      | Minimal effort; shows limited understanding                                      |
| 0      | No answer or completely incorrect                                                |

**Total Possible: 100 + 5 bonus = 105 points**

---

## References You May Use

- [3dMake Quick Reference](3DMake_Appendices_Complete.md#appendix-a)
- [OpenSCAD Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a)
- [Appendix A: Comprehensive Slicing Guide](3DMake_Appendices_Complete.md#appendix-b)
- [Appendix C: Tolerance Testing & QA Matrix](3DMake_Appendices_Complete.md#appendix-d)
- [Appendix D: PowerShell Integration](CLI_Appendices_Complete.md#appendix-b)

---

_End of Final Exam_

**Submission Instructions:**

1. Answer all 25 questions completely
2. Show your work for calculations and reasoning
3. Include code samples where requested
4. Submit as a PDF with your name and date
5. Scoring will be based on correctness, clarity, and depth of understanding

_Good luck!_

---

# INSTRUCTOR APPENDIX

### Not for student distribution

---

## Exam Administration Notes

### Sequencing — Problem 20

Problem 20 tests non-manifold geometry diagnosis, which is formally introduced in **Lesson 10**.

- **If administered before Lesson 10 is complete:** Problem 20 is not counted in the passing threshold for Lessons 1–9. Consider adding a notice directing students to skip and return to it after Lesson 10.
- **If administered after all 10 lessons:** No changes needed — the problem is fair game.

---

## Answer Keys & Rubrics

### Problem 20 — Non-Manifold Geometry (Extended Model Answer)

The exam version tests the core concept with a simple case. The extended variant below can be used as an enrichment rubric or for a more advanced cohort. It contains **three non-manifold issues:**

```openscad
// PROBLEM CODE — find and fix all issues
difference() {
  cube([40, 40, 25]);
  translate([10, 10, 0])        // NON-MANIFOLD: co-planar bottom face
    cylinder(r=8, h=25, $fn=24);
  translate([20, 20, 25])       // NON-MANIFOLD: co-planar top face
    cylinder(r=5, h=10, $fn=24);
}

// NON-MANIFOLD: these two cubes share a face (just touching, not overlapping)
translate([40, 0, 0])  cube([15, 40, 25]);
translate([55, 0, 0])  cube([15, 40, 25]);
```

1. **Co-planar bottom face** — the first cylinder's base is flush with the cube's base (`z=0`).
2. **Co-planar top face** — the second cylinder starts exactly at the cube's top (`z=25`).
3. **Touching faces** — the two side cubes share an exact face (just touching, not overlapping).

**Corrected version:**

```openscad
difference() {
  cube([40, 40, 25]);

  // FIX 1: extend cylinder 0.001 below base AND above top
  translate([10, 10, -0.001])
    cylinder(r=8, h=25.002, $fn=24);

  // FIX 2: extend the top-entry cylinder 0.001 into the solid
  translate([20, 20, 25 - 9.999])
    cylinder(r=5, h=10.001, $fn=24);
}

// FIX 3: overlap the two touching cubes by 0.001 and use explicit union()
union() {
  translate([40, 0, 0])  cube([15.001, 40, 25]);
  translate([55, 0, 0])  cube([15, 40, 25]);
}
```

**Extended rubric (10 points):**

- Identifies all 3 issues: 3 pts
- Fixes issue 1 (co-planar bottom) correctly: 2 pts
- Fixes issue 2 (co-planar top) correctly: 2 pts
- Fixes issue 3 (touching faces) correctly: 2 pts
- Model builds cleanly with no CGAL warnings: 1 pt

---

### Problem 24 — Keycap Loop (Model Answer)

```openscad
letters  = "ABCDE";
keysize  = 10;
key_gap  = 15;

for (i = [0 : len(letters) - 1]) {
  translate([i * (keysize + key_gap), 0, 0])
    keycap(letters[i], keysize);
}
```

**Expected output:** 5 keycaps labeled A, B, C, D, E, evenly spaced in a row.

**Rubric (4 points):**

- Correct `for` with range syntax: 1 pt
- Correct string indexing `letters[i]`: 1 pt
- Correct `translate()` to space keys apart: 1 pt
- All 5 keycaps render without errors: 1 pt

---

## Extension Projects (Optional / Post-Exam)

These projects are not part of the graded exam. Assign as enrichment after students complete all 10 lessons.

---

### Extension A — Recursive Fractal Geometry

Recommended after Lesson 3. Demonstrates recursive OpenSCAD for visual and mathematical interest.

> **Warning:** Level 4+ will take minutes to render — stay at Level ≤ 3.

```openscad
module menger(size=27, level=2) {
  if (level == 0) {
    cube(size, center=true);
  } else {
    s3 = size / 3;
    difference() {
      cube(size, center=true);
      for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
        if ((x==0 ? 1 : 0) + (y==0 ? 1 : 0) + (z==0 ? 1 : 0) >= 2) {
          translate([x*s3, y*s3, z*s3])
            cube(s3 + 0.002, center=true);
        }
      }
    }
    for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
      if (!((x==0?1:0)+(y==0?1:0)+(z==0?1:0) >= 2)) {
        translate([x*s3, y*s3, z*s3])
          menger(s3, level-1);
      }
    }
  }
}

menger(size=27, level=2);  // change level to 0, 1, or 2
```

---

### Extension B — Generative Pattern Arrays

Demonstrates list comprehensions and math functions for artistic/functional array generation.

```openscad
plate_w = 120;
plate_d = 80;
plate_h = 3;

hole_d    = 4;
grid_s    = 8;
wave_amp  = 3;
wave_freq = 0.1;

module perforated_panel() {
  difference() {
    cube([plate_w, plate_d, plate_h]);
    cols = floor(plate_w / grid_s);
    rows = floor(plate_d / grid_s);
    for (cx = [1 : cols - 1]) {
      for (ry = [1 : rows - 1]) {
        x = cx * grid_s;
        y = ry * grid_s;
        wave_val = sin(x * wave_freq * 360) * sin(y * wave_freq * 360);
        d = hole_d + wave_amp * wave_val;
        if (d > 0.5) {
          translate([x, y, -0.001])
            cylinder(d=d, h=plate_h + 0.002, $fn=16);
        }
      }
    }
  }
}

perforated_panel();
```

---

### Extension C — Multi-Platform Build Pipeline

Full build pipeline scripts for all three shell environments.

#### Makefile (Linux/macOS)

```makefile
.PHONY: all build clean variants archive test

SRC     := src/main.scad
OUTPUT  := build/main.stl
WIDTHS  := 20 30 40 50 80

all: build test archive

build: $(OUTPUT)

$(OUTPUT): $(SRC) | build/
  openscad -o $@ $<
  3dm info

build/:
  mkdir -p build build/variants build/logs

clean:
  rm -rf build/

variants: build/
  @for w in $(WIDTHS); do \
    echo "Building width=$$w..."; \
    openscad -D "width=$$w" -o "build/variants/main_w$$w.stl" $(SRC); \
  done

archive: build/
  $(eval TS := $(shell date +%Y%m%d_%H%M%S))
  mkdir -p "archives/$(TS)"
  cp $(OUTPUT) "archives/$(TS)/"
  cp $(SRC)    "archives/$(TS)/"
  3dm info > "archives/$(TS)/BUILD_INFO.txt"

test: build/
  @for w in 10 30 80; do \
    openscad -D "width=$$w" -o "/tmp/test_w$$w.stl" $(SRC) && \
    echo "  width=$$w: OK" || echo "  width=$$w: FAILED"; \
  done
```

#### PowerShell (Windows)

```powershell
param($Width = 30)

$src    = "src\main.scad"
$output = "build\main.stl"
$widths = @(20, 30, 40, 50, 80)

task init {
    New-Item -Force -ItemType Directory -Path "build","build\variants","build\logs" | Out-Null
}

task build init, {
    exec { openscad -D "width=$Width" -o $output $src }
    exec { 3dm info }
}

task clean {
    Remove-Item -Recurse -Force "build" -ErrorAction SilentlyContinue
}

task variants init, {
    foreach ($w in $widths) {
        exec { openscad -D "width=$w" -o "build\variants\main_w$w.stl" $src }
    }
}

task archive build, {
    $ts  = Get-Date -Format "yyyyMMdd_HHmmss"
    $dir = "archives\$ts"
    New-Item -Force -ItemType Directory -Path $dir | Out-Null
    Copy-Item $output $dir
    Copy-Item $src    $dir
    & 3dm info | Out-File "$dir\BUILD_INFO.txt" -Encoding UTF8
}

task test init, {
    foreach ($w in @(10, 30, 80)) {
        try {
            exec { openscad -D "width=$w" -o "build\test_w$w.stl" $src }
            Write-Host "  width=$w: OK"
        } catch { Write-Warning "  width=$w: FAILED" }
    }
}

task all build, test, archive
```

#### CMD Batch (Windows Legacy)

```cmd
@echo off
SET ACTION=%1
IF "%ACTION%"=="" SET ACTION=all

IF "%ACTION%"=="build"    GOTO :BUILD
IF "%ACTION%"=="clean"    GOTO :CLEAN
IF "%ACTION%"=="variants" GOTO :VARIANTS
IF "%ACTION%"=="archive"  GOTO :ARCHIVE
IF "%ACTION%"=="all"      GOTO :ALL

:ALL
CALL :BUILD_STEP
IF %ERRORLEVEL% NEQ 0 EXIT /b 1
CALL :VARIANTS_STEP
CALL :ARCHIVE_STEP
GOTO :EOF

:BUILD_STEP
mkdir build 2>nul
openscad -o build\main.stl src\main.scad
IF %ERRORLEVEL% NEQ 0 (echo [BUILD] FAILED & EXIT /b 1)
3dm info
EXIT /b 0

:CLEAN
rmdir /s /q build 2>nul
GOTO :EOF

:VARIANTS_STEP
mkdir build\variants 2>nul
FOR %%W IN (20 30 40 50 80) DO (
    openscad -D "width=%%W" -o "build\variants\main_w%%W.stl" src\main.scad
)
EXIT /b 0

:ARCHIVE_STEP
FOR /f "tokens=2 delims==" %%D IN ('wmic os get localdatetime /value') DO SET DT=%%D
SET TS=%DT:~0,8%_%DT:~8,6%
mkdir "archives\%TS%" 2>nul
copy build\main.stl "archives\%TS%\" >nul
copy src\main.scad  "archives\%TS%\" >nul
3dm info >> "archives\%TS%\BUILD_INFO.txt" 2>&1
EXIT /b 0
```

---

## Quick Reference — Shell Equivalents

| Task               | bash (Linux/macOS)                | PowerShell (Windows)                      | CMD (Windows)                           |
| ------------------ | --------------------------------- | ----------------------------------------- | --------------------------------------- |
| Build              | `3dm build`                       | `3dm build`                               | `3dm build`                             |
| Info               | `3dm info`                        | `3dm info`                                | `3dm info`                              |
| Parameter (number) | `-D "width=50"`                   | `-D "width=50"`                           | `-D "width=50"`                         |
| Parameter (string) | `-D 'label="A"'`                  | `-D 'label="A"'`                          | `-D "label=""A"""`                      |
| Loop over list     | `for x in a b c; do ... done`     | `foreach ($x in @(...)) {...}`            | `FOR %%X IN (a b c) DO ...`             |
| Make directory     | `mkdir -p dir`                    | `New-Item -Force -ItemType Directory dir` | `mkdir dir 2>nul`                       |
| Copy file          | `cp src dst`                      | `Copy-Item src dst`                       | `copy src dst`                          |
| Check exit code    | `if [ $? -ne 0 ]`                 | `if ($LASTEXITCODE -ne 0)`                | `IF %ERRORLEVEL% NEQ 0`                 |
| Write to file      | `echo text > file`                | `"text" \| Out-File file`                 | `echo text > file`                      |
| Append to file     | `echo text >> file`               | `"text" \| Add-Content file`              | `echo text >> file`                     |
| Date/time          | `date +%Y%m%d_%H%M%S`             | `Get-Date -Format "yyyyMMdd_HHmmss"`      | `wmic os get localdatetime`             |
| File size (bytes)  | `stat -c%s file`                  | `(Get-Item file).Length`                  | `FOR /F "tokens=4" %%S IN ('dir file')` |
| Watch for changes  | `ls src/*.scad \| entr 3dm build` | (see Lesson 9 watcher)                    | (use PowerShell)                        |

---

---

# Part V — Quick Reference Guide

# 3dMake Foundation Quick Reference Guide {#3dmake_foundation-3dmake_quick_reference}

Fast lookup for lessons, projects, resources, and common tasks

## Lesson Quick Reference

### All 11 Lessons at a Glance

| #   | Title                       | Duration | Level         | Main Topics                                   | Key Project            |
| --- | --------------------------- | -------- | ------------- | --------------------------------------------- | ---------------------- |
| 1   | Environmental Configuration | 60-90m   | Beginner      | Setup, project structure, `3dm build`         | None                   |
| 2   | Geometric Primitives & CSG  | 60m      | Beginner      | Primitives, CSG operations, debugging         | None                   |
| 3   | Parametric Architecture     | 60m      | Beginner+     | Modules, libraries, parameters                | None                   |
| 4   | AI Verification             | 45-60m   | Intermediate  | `3dm info`, validation, design documentation  | None                   |
| 5   | Safety & Physical Interface | 60-90m   | Intermediate  | Safety protocols, materials, pre-print checks | None                   |
| 6   | 3dm Commands & Text         | 60-90m   | Intermediate  | `3dm info/preview/orient/slice`, embossing    | Keycap                 |
| 7   | Parametric Transforms       | 75-90m   | Intermediate+ | Transforms, multi-part design, assembly       | Phone Stand            |
| 8   | Advanced Parametric Design  | 90-120m  | Advanced      | Tolerance, interlocking features, snap-fits   | Stackable Bins         |
| 9   | Automation & Workflows      | 60-90m   | Advanced      | PowerShell scripting, batch processing, CI/CD | [key] Batch Automation |
| 10  | Troubleshooting & Mastery   | 120-150m | Advanced      | Measurement, QA testing, diagnostics          | [dice] QA + Audit      |
| 11  | Stakeholder-Centric Design  | 90-120m  | Advanced+     | Design thinking, user research, iteration     | [beads] Jewelry Holder |

## 4 Reference Appendices

Quick links to comprehensive reference materials:

| Appendix                                                                                    | Focus                                                      | Size         | Use When                                     |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------ | -------------------------------------------- |
| [A: Comprehensive Slicing Guide](3DMake_Appendices_Complete.md#appendix-b)                  | PrusaSlicer, Bambu Studio, Cura, OrcaSlicer configuration  | 1,500+ lines | Slicing questions, slicer reference          |
| [B: Material Properties & Selection Guide](3DMake_Appendices_Complete.md#appendix-c)        | Shrinkage data, print settings, material properties        | 1,200+ lines | Choosing material, troubleshooting prints    |
| [C: Tolerance Testing & Quality Assurance Matrix](3DMake_Appendices_Complete.md#appendix-d) | QA procedures, tolerance validation methods                | 1,200+ lines | Quality verification, measurement techniques |
| [D: PowerShell Integration for SCAD Workflows](CLI_Appendices_Complete.md#appendix-b)       | Batch processing, automation scripts, workflow integration | 1,100+ lines | Building automation, batch processing        |

## Learning Paths

### Path 1: Complete Mastery (18-22 hours)

-> Lessons 1-11 + All Appendices

Best for: Complete skill development, comprehensive understanding

### Path 2: Design Focus (12-15 hours)

-> Lessons 1-3, 6-8, 11 + Appendices A, B, C

Best for: Experienced makers new to programmatic CAD

### Path 3: Project-Based (14-18 hours)

-> Lessons 1-5 (Foundations) -> 6 (Keycap) -> 7 (Stand) -> 8 (Bins) -> 9 (Automation) -> 10 (Troubleshooting) -> 11 (Leadership)

Best for: Learning through building

### Path 4: Safety & Printing (10-12 hours)

-> Lessons 1, 2, 5, 6, 10 + Appendices A, B, C

Best for: Focus on practical printing and quality

## 3dm Command Reference

### Essential Commands

```bash
# Setup
./3dm setup                 # Initial configuration

# Development
3dm edit-model file.scad    # Open in editor
3dm build src/main.scad     # Generate STL from SCAD

# Inspection
3dm info file.scad      # Text analysis (AI if configured)
3dm preview file.scad       # Generate 2D tactile preview

# Optimization
3dm orient file.scad        # Suggest print orientation

# Production
3dm slice file.scad         # Generate G-code
3dm send build/main.gcode   # Send to printer

# Libraries
3dm lib list                # Show available libraries
3dm lib install BOSL2       # Install a library
```

### Command Chaining

```bash
# Sequential with error handling
3dm build src/main.scad && 3dm slice src/main.scad && echo "Ready to print"

# Loop through files
for f in src/*.scad; do 3dm build "$f" && 3dm slice "$f"; done
```

## OpenSCAD Quick Reference

### Primitives

```openscad
cube([width, height, depth], center=false);
sphere(r=radius, $fn=32);
cylinder(r=radius, h=height, $fn=32);
```

### Transforms

```openscad
translate([x, y, z]) { ... }
rotate([x_deg, y_deg, z_deg]) { ... }
scale([x, y, z]) { ... }
```

### Boolean Operations

```openscad
union() { shape1; shape2; }         // Combine
difference() { shape1; shape2; }    // Subtract
intersection() { shape1; shape2; }  // Keep overlap
```

### Modules

```openscad
module my_shape(size) {
  cube([size, size, size]);
}
my_shape(20);   // Call module
```

### Parameters

```openscad
width = 50;     // mm
height = 30;    // mm
inner = width - 2*wall;
```

## Projects Reference

### Project 1: Parametric Keycap (Lesson 6)

Key Parameters:

```openscad
key_size = 18;      // mm
key_height = 12;    // mm
wall = 1.2;         // mm
letter = "A";       // Character
```

Variants to Try:

- Small: 12mm, 10mm height
- Medium: 18mm, 12mm height
- Large: 24mm, 14mm height

Files:

- Code: Lesson 6 (Keycap section)
- Output: keycap_X.scad, keycap_X.stl

### Project 2: Phone Stand (Lesson 7)

Key Parameters:

```openscad
phone_width = 75;   // mm
base_width = 85;    // mm
angle = 60;         // degrees
lip_height = 15;    // mm
```

Configurations:

| Phone  | Width | Angle | Result            |
| ------ | ----- | ----- | ----------------- |
| iPhone | 60mm  | 60    | Portrait viewing  |
| iPad   | 100mm | 40    | Landscape viewing |
| Tablet | 150mm | 35    | Document viewing  |

Files:

- Code: Lesson 7 (Phone Stand section)
- Output: stand_X.stl, stand_X.gcode

### Project 3: Stackable Bins (Lesson 8)

Key Parameters:

```openscad
bin_w = 80;         // width (mm)
bin_d = 120;        // depth (mm)
bin_h = 60;         // height (mm)
wall = 2;           // thickness (mm)
stack_clear = 0.6;  // tolerance (mm) - CRITICAL
```

Tolerance Testing:

```plaintext
stack_clear = 0.4mm  -> Too tight (hard to stack)
stack_clear = 0.6mm  -> Ideal (smooth fit)
stack_clear = 0.8mm  -> Too loose (unstable)
```

Files:

- Code: Lesson 8 (Bins section)
- Output: bin\_\*.stl, tolerance_matrix.md

## Code Template Library

### Generic Parametric Part Template

```openscad
// ====== PARAMETERS (customize here) ======
param1 = 50;        // mm
param2 = 30;        // mm
param3 = 5;         // mm
$fn = 32;           // Resolution (lower = faster)
// ====== CALCULATED PARAMETERS ======
derived_param = param1 - 2*param3;
// ====== MODULES ======
module my_part() {
  cube([param1, param2, param3]);
}
// ====== MAIN ======
my_part();
```

### Hollow Box Template

```openscad
outer_size = 50;
inner_size = 40;
wall = 5;
difference() {
  cube([outer_size, outer_size, outer_size]);
  translate([wall, wall, wall])
    cube([inner_size, inner_size, inner_size]);
}
```

### Batch Build Script Template

```bash
#!/bin/bash
# batch_build.sh

for scad in src/*.scad; do
  name=$(basename "$scad" .scad)
  echo "Building: $name"
  3dm build "$scad" || continue
  cp "build/main.stl" "build/${name}.stl"
done
```

## Troubleshooting Quick Fixes

### Problem: Model won't build

Diagnosis:

```bash
3dm info file.scad
# Look for error messages
```

{{i:Common}} Fixes:

- Check syntax (missing semicolons, parentheses)
- Look for non-manifold {{i:geometry}}
- Use `$fn=12` for faster {{i:test}} renders

### Problem: Parts don't fit together

Diagnosis:

- Print and {{i:test}} fit
- Measure with calipers

Solution:

- Adjust `stack_clear` (smaller = tighter)
- Increase `wall` thickness
- Test with tolerance matrix

### Problem: Embossed {{i:text}} looks bad

Diagnosis:

- Check preview in slicer
- Use `3dm preview` for tactile version

Solution:

- Increase `letter_raise` (deeper emboss)
- Use larger `$fn` in `text()`
- Simplify character or use different size

### Problem: Print fails

Diagnosis:

- Check slicer {{i:layer}} preview
- Verify {{i:bed}} adhesion and temperature

Solution:

- Check pre-{{i:print}} checklist (Lesson 5)
- Adjust {{i:print}} temperature
- Verify {{i:bed}} is level and clean

## Assessment Checklist

### Lesson Completion Criteria

- [ ] Watched/read entire lesson
- [ ] Completed all step-by-step tasks
- [ ] Reached all checkpoints
- [ ] Answered all quiz questions (self-assessed)
- [ ] Attempted at least 3 extension problems
- [ ] Documented findings

### Project Completion Criteria

- [ ] Code builds without errors
- [ ] All {{i:parameters}} functional
- [ ] {{i:STL}} generated and inspected
- [ ] Measurements documented
- [ ] Assembly tested (if multi-{{i:part}})
- [ ] README or documentation included

### Quality Standards

- [ ] Code is well-commented
- [ ] Parameters have clear names and units
- [ ] Modules are reusable
- [ ] {{i:Design}} follows DRY principle
- [ ] Documentation is complete

## Resources & Links

### Official Docs

- [{{i:OpenSCAD}} Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)
- [{{i:3DMake}} {{i:GitHub}}](https://github.com/tdeck/3dmake)
- [BOSL2 Library](https://github.com/revarbat/BOSL2)

### Tutorials

- [{{i:OpenSCAD}} Basics](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language)
- [3D Printing Guide](https://www.prusa3d.com/{{i:support}}/)

### Community

- [{{i:OpenSCAD}} Forums](https://forum.openscad.org/)
- [r/3Dprinting](https://www.reddit.com/r/3Dprinting/)

## Tips & Tricks

### Debugging

> [!TIP]
> Lower `$fn` to **8–12 during development** for fast renders, then raise it to 32–64 for final export. High `$fn` values (especially with Minkowski) {{i:can}} make renders take minutes.

- Lower `$fn` to 8-12 for faster renders during development
- Use `3dm info` frequently to catch issues early
- Test components individually {{i:before}} assembling
- Generate `3dm preview` for 2D tactile verification

### {{i:Design}}

- Keep {{i:parameters}} at the top of {{i:file}} for easy modification
- Use descriptive names (not `w`, use `width`)
- Include units in comments
- Document {{i:parameter}} ranges (e.g., `// 0-100 mm`)

### Organization

- Use `src/` for SCAD {{i:files}}, `lib/` for modules, `build/` for outputs
- Create variants by copying {{i:files}} and renaming
- Use bash {{i:scripts}} for batch operations
- Archive successful builds with timestamps

### Accessibility

> [!IMPORTANT]
> For accessible {{i:design}}, always use `3dm info` to verify non-visual usability and `3dm preview` to generate a tactile inspection image. Document all measurements clearly and {{i:test}} assembly without visual guidance.

- Always use `3dm info` to verify non-visual usability
- Generate `3dm preview` for tactile inspection
- Document measurements clearly
- Test assembly without visual guidance

## Glossary

| Term       | Definition                                                            |
| ---------- | --------------------------------------------------------------------- |
| CSG        | Constructive Solid Geometry - combining shapes {{i:using}} union/{{i:difference}} |
| Manifold   | Water-tight {{i:geometry}} with clear inside/outside                        |
| Parametric | Driven by {{i:variables}}; changing {{i:parameters}} updates {{i:design}}               |
| Tolerance  | Acceptable variation in dimensions                                    |
| Stack-up   | Cumulative {{i:error}} from multiple tolerances                             |
| {{i:Module}}     | Reusable {{i:code}} block in {{i:OpenSCAD}}                                       |
| $fn        | Resolution {{i:parameter}} (higher = more detail but slower)                |
| G-{{i:code}}     | Machine instructions for 3D {{i:printer}}                                   |
| {{i:STL}}        | 3D model {{i:file}} format for {{i:printing}}                                     |

## Quick Answers

Q: Where do I put my SCAD {{i:files}}?  
A: In the `src/` folder of your 3dMake project

Q: How do I {{i:test}} if my {{i:design}} will fit?  
A: Use the tolerance testing matrix; {{i:print}} variants with different {{i:parameters}}

Q: What should I measure after {{i:printing}}?  
A: Critical dimensions and compare to {{i:design}} specifications

> [!TIP]
> **Non-manifold fix:** Use the 0.001 offset rule — `translate([0, 0, -0.001])` {{i:before}} subtracting and add 0.002 to the cutting shape's {{i:height}}.

Q: How do I fix non-manifold {{i:geometry}}?  
A: Use the 0.001 offset rule: `translate([0, 0, 0.001])` {{i:before}} subtracting

Q: Can I combine multiple SCAD {{i:files}}?  
A: Yes, use `include <path/to/file.scad>` or `use <path/to/file.scad>`

Q: How do I make designs accessible?  
A: Use `3dm info` and `3dm preview` and include written measurements/descriptions
