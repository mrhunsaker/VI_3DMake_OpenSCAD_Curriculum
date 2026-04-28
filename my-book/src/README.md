# Introduction {#readme}

This course teaches {{hi:3D {{i:design}}}}3D {{i:design}} and digital fabrication {{i:using}} a fully accessible, {{i:command}}-line-driven toolchain centered on {{i:OpenSCAD}} ({{i:text}}-based CAD), {{i:3DMake}} (non-visual {{i:build}} automation), and accessible editors ({{hi:VS Code}}VS Code, {{hi:Notepad++}}Notepad++, {{i:command}}-line editors) with screen {{i:reader}} {{i:support}}.

The curriculum is explicitly designed for blind and visually impaired learners who use screen readers ({{i:NVDA}}, {{i:JAWS}}, Orca, VoiceOver). It eliminates GUI {{i:navigation}} and visual feedback in favor of keyboard-driven, {{i:text}}-based workflows that screen readers {{i:can}} fully access. Accessibility is not an add-on. It is the foundation of every tool, {{i:workflow}}, and lesson in this curriculum.

## Curriculum Structure

### {{i:Screen}} Reader Setup & Accessibility Fundamentals

Before choosing a {{i:command}}-line pathway, students learn to optimize their screen {{i:reader}} setup for terminal {{i:work}} and understand {{i:accessibility}} options.

What's Included:

- [{{i:Screen}} Reader Accessibility Guide](Setup_Accessibility_Complete.md#{{i:accessibility}}-guide) - Comprehensive {{i:NVDA}} & {{i:JAWS}} {{i:reference}} with terminal tips for {{hi:{{i:PowerShell}}}}{{i:PowerShell}}, {{hi:CMD}}CMD, and {{hi:{{i:Git}} {{i:Bash}}}}{{i:Git}} {{i:Bash}}
- [{{i:Screen}} Reader Choice: {{i:Windows}} CLI](Setup_Accessibility_Complete.md#screen-{{i:reader}}-choice) - Help choosing {{i:between}} {{i:NVDA}} and {{i:JAWS}}
- [Braille Display & Terminal Mode](Setup_Accessibility_Complete.md#{{i:braille}}-displays) - Advanced {{i:accessibility}} setup with refreshable {{i:braille}} displays
- [Editor Selection and Setup](Setup_Accessibility_Complete.md#editor-setup) - Choosing and configuring an accessible {{i:text}} editor

Why start here? {{i:Screen}} {{i:reader}} optimization is the foundation for all {{i:command}}-line {{i:work}}. Students learn keyboard shortcuts, {{i:navigation}} techniques, and terminal-{{i:specific}} {{i:accessibility}} {{i:before}} diving {{i:into}} any {{hi:CLI}}CLI pathway.

### Command-Line Foundation (Choose Your Path)

Students master terminal/{{i:command}}-line fundamentals {{i:before}} learning 3D {{i:design}}. You choose {{i:between}} three equivalent pathways based on your operating system and learning preferences.

#### Compare All Three Pathways

[Command Line Interface Selection Guide](Command_Line_Interface_Selection/Command_Line_Interface_Selection.md)

This guide provides a comprehensive comparison including:

- Feature matrix comparing all three shells
- Command comparison table ({{i:navigation}}, {{i:file}} operations, scripting)
- Learner profiles to help {{i:you}} choose
- Goal-based recommendations
- FAQ addressing {{i:common}} questions

#### {{i:PowerShell}} Foundation (Recommended for {{i:Windows}} Users)

Where to Start: [{{i:PowerShell}} Curriculum Overview](PS_Complete_Curriculum.md#{{i:part}}-1-powershell)

Lessons Included:

- Powershell Lesson Pre: Your First Terminal - Opening {{i:PowerShell}}, {{i:first}} {{i:commands}}, screen {{i:reader}} tricks
- Powershell Lesson 0: Getting Started - Paths, shortcuts, tab completion
- Powershell Lesson 1: Navigation - Moving around the {{i:file}} system confidently
- Powershell Lesson 2: {{hi:File and Folder Manipulation}}File and Folder Manipulation - Creating, editing, moving {{i:files}}
- Powershell Lesson 3: {{hi:Input, Output, and Piping}}Input, Output, and Piping - Redirecting {{i:output}}, piping {{i:commands}}
- Powershell Lesson 4: Environment {{hi:Variables}}Variables and Aliases - Setting {{i:variables}}, creating shortcuts
- Powershell Lesson 5: Filling in the Gaps - Control flow, profiles, useful tricks
- Powershell Lesson 6: Advanced Terminal Techniques - Scripts, functions, professional workflows
- {{i:PowerShell}} Unit Test & Practice - Comprehensive self-assessment

Time commitment: 30-45 hours (for screen {{i:reader}} users)
Best for: Users who want modern {{i:Windows}} features and advanced automation
Skills: Terminal {{i:navigation}}, piping, advanced scripting, professional automation

#### {{i:Windows}} Command Prompt Foundation (Simplified Alternative)

Where to Start: [CMD Curriculum Overview](CMD_Complete_Curriculum.md#{{i:part}}-2-cmd)

Lessons Included:

- Command Line Lesson Pre: Your First Terminal - Opening CMD, {{i:first}} {{i:commands}}, screen {{i:reader}} tricks
- Command Line Lesson 0: Getting Started - Paths, shortcuts, {{i:command}} basics
- Command Line Lesson 1: Navigation - Moving around the {{i:file}} system confidently
- Command Line Lesson 2: File and Folder Manipulation - Creating, editing, moving {{i:files}}
- Command Line Lesson 3: Input, Output & Redirection - Redirecting {{i:output}}, piping {{i:commands}}
- Command Line Lesson 4: Environment Variables & Shortcuts - Setting {{i:variables}}, shortcuts
- Command Line Lesson 5: Filling in the Gaps - Batch {{i:files}}, advanced techniques
- Command Line Lesson 6: Advanced Terminal Techniques - Scripts, automation, professional workflows
- CMD Unit Test & Practice - Comprehensive self-assessment

Time commitment: 30-45 hours (for screen {{i:reader}} users)
Best for: Absolute beginners or users who prefer simplicity
Skills: Terminal {{i:navigation}}, {{i:file}} operations, batch scripting, basic automation

#### {{i:Git}} {{i:Bash}} Foundation (Cross-Platform Skills)

Where to Start: [{{i:Git}} {{i:Bash}} Curriculum Overview](GitBash_Complete_Curriculum.md#{{i:part}}-3-{{i:git}}-bash)

Introductory & Reference Materials:

Lessons Included:

- {{i:Bash}} Lesson Pre: Your First Terminal - Opening {{i:Git}} {{i:Bash}}, {{i:first}} {{i:commands}}, screen {{i:reader}} tricks
- {{i:Bash}} Lesson 0: Getting Started - Paths, shortcuts, Unix path notation
- {{i:Bash}} Lesson 1: Navigation - Moving around the {{i:file}} system confidently
- {{i:Bash}} Lesson 2: File and Folder Manipulation - Creating, editing, moving {{i:files}}
- {{i:Bash}} Lesson 3: Input, Output & Piping - Redirecting {{i:output}}, piping {{i:commands}}
- {{i:Bash}} Lesson 4: Environment Variables & Aliases - Setting {{i:variables}}, creating shortcuts
- {{i:Bash}} Lesson 5: Filling in the Gaps - {{i:Shell}} profiles, history, {{hi:Debugging}}debugging
- {{i:Bash}} Lesson 6: Advanced Terminal Techniques - Scripts, functions, professional workflows
- GitBash Unit Test & Practice - Comprehensive self-assessment

Time commitment: 30-45 hours (for screen {{i:reader}} users)
Best for: Users who want cross-platform skills ({{i:Windows}}, macOS, Linux)
Skills: Unix/bash {{i:commands}}, {{i:shell}} scripting, cross-platform automation

> [!IMPORTANT]
> Choose ONE pathway and complete it fully. All three teach identical fundamental concepts {{i:using}} different tools. Each integrates fully with 3D {{i:design}} workflows.

### 3dMake Foundation & {{i:Design}} (11 Lessons + 6 Appendices)

Where to Start: [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md)

Students {{i:build}} {{i:parametric}} 3D designs {{i:using}} {{i:OpenSCAD}} and automate the {{i:workflow}} with {{i:3DMake}}.

#### Main Curriculum: 11 Progressive Lessons

| Part                  | Lessons | Focus                                                                         | Duration  |
|-----------------------|---------|-------------------------------------------------------------------------------|-----------|
| Foundations           | 1-3     | Environment setup, primitives, {{i:parametric}} {{i:design}} + advanced language features | 4-5 hours |
| Verification & Safety | 4-5     | AI verification, safety protocols, materials                                  | 2-3 hours |
| Applied Projects      | 6-8     | Practical {{i:commands}}, {{i:text}} functions, transforms, assembly patterns             | 5-6 hours |
| Advanced Topics       | 9-10    | Automation with {{i:file}} I/O, troubleshooting, mastery                            | 3-4 hours |
| Leadership            | 11      | {{hi:Stakeholder-Centric {{i:Design}}}}Stakeholder-centric {{i:design}}                                                    | 2-3 hours |

Total: 45-55 hours instruction + practice projects

#### Reference Appendices

**Command Line Tools:**  
- [Appendix A: Command Line (CMD/Batch) Integration for SCAD Workflows](CLI_Appendices_Complete.md#appendix-a) - Batch processing and automation for CMD users
- [Appendix B: {{i:PowerShell}} Integration for SCAD Workflows](CLI_Appendices_Complete.md#appendix-b) - Batch processing, automation {{i:scripts}}, and advanced {{i:workflow}} integration for {{i:PowerShell}} users
- [Appendix C: {{i:Git}} {{i:Bash}} / POSIX {{i:Shell}} Integration for SCAD Workflows](CLI_Appendices_Complete.md#appendix-c) - {{i:Shell}} scripting and automation for {{i:Git}} {{i:Bash}} / Unix {{i:shell}} users

**3dMake:**  
- [{{i:3DMake}} CLI Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Quick {{i:reference}} for 3dm {{i:command}}-line tool
- [Appendix A: Comprehensive Slicing Guide](3DMake_Appendices_Complete.md#appendix-b) - Complete {{i:reference}} for {{hi:PrusaSlicer}}PrusaSlicer, {{hi:Bambu}}Bambu Studio, {{hi:Cura}}Cura, and OrcaSlicer configuration
- [Appendix B: Material Properties & Selection Guide](3DMake_Appendices_Complete.md#appendix-c) - Detailed {{i:material}} {{i:reference}} including shrinkage data, {{i:print}} settings, and properties
- [Appendix C: Tolerance Testing & Quality Assurance Matrix](3DMake_Appendices_Complete.md#appendix-d) - Comprehensive QA procedures and tolerance validation methods
- [Appendix D: Advanced {{i:OpenSCAD}} Concepts](3DMake_Appendices_Complete.md#appendix-e) - Specialized topics including gears, batch processing, performance, {{i:print}} orientation, and recursion
- [3dMake Code Examples & Assets](assets/3dMake_Foundation/README.md) - {{i:OpenSCAD}} {{i:code}} examples and {{i:reference}} designs

## The Accessible Toolchain

### {{i:Screen}} Reader Compatibility Throughout

This course uses tools designed for screen {{i:reader}} access:

- Terminal/Command line - Text-based, fully accessible to {{i:NVDA}}, {{i:JAWS}}, Orca, VoiceOver
- {{i:OpenSCAD}} - Free, open-source {{i:text}}-based CAD (no visual-only GUI dependency)
- {{i:3DMake}} - Command-line {{i:build}} tool eliminating GUI {{i:navigation}}
- Accessible {{i:text}} editors - Notepad, VS Code, Notepad++, Nano, Vim, etc. (all keyboard-driven, screen {{i:reader}} friendly)

See [Appendix A: {{i:3DMake}} Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) for detailed keyboard shortcuts and configuration.

### {{i:3DMake}}: Non-Visual Build Automation

{{i:3DMake}} makes the entire {{i:design}}-to-{{i:print}} pipeline accessible:

```bash
3dm build        -> Compiles main.scad to main.stl
3dm info         -> Validates geometry and runs diagnostics
3dm slice        -> Prepares model for printing
```

- No GUI {{i:navigation}} needed
- Automation eliminates repetitive manual steps
- Configuration {{i:files}} store {{hi:Parameters}}{{i:parameters}} as human-readable {{i:text}}
- Error reporting is {{i:text}}-based (screen {{i:reader}} accessible)
- Works with {{i:command}}-line slicers

### Iterative, Non-Visual {{i:Design}}

Students learn to {{i:design}} through {{i:code}} and testing, not visual previews:

- Write {{i:parametric}} {{i:OpenSCAD}} {{i:code}} in accessible editors
- Run `3dm build` to compile to printable {{i:file}}
- Use measurement-based verification ({{hi:Calipers}}calipers, scales, functional testing)
- Iterate by editing {{i:parameters}} and rebuilding
- No reliance on 3D preview or visual feedback

## Project-Based Learning

3dMake lessons include hands-on projects:

- Lesson 6: Keychain with embossed {{i:text}} (3dm {{i:commands}})
- Lesson 7: Phone stand ({{hi:Parametric Transforms}}{{i:parametric}} transforms)
- Lesson 8: Stackable bins (interlocking features, tolerances)
- Lesson 9: Build automation ({{i:PowerShell}} batch processing)
- Lesson 10: QA testing + {{i:accessibility}} audit (measurement, troubleshooting)
- Lesson 11: Beaded jewelry holder (stakeholder-driven {{i:design}})

Each project requires:

- Parametric {{i:OpenSCAD}} {{i:code}} (clean, well-commented)
- Functional prototype (tested, iterated)
- Complete documentation (reflections, measurements, decisions)

## Learning Support

### Primary Navigation & Overview

[Curriculum Guide](3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.md) - Detailed overview of all lessons and appendices  
[Quick Reference](3DMake_Appendices_Complete.md#appendix-a) - At-a-glance {{i:command}} and syntax {{i:reference}}  
[mdBook Navigation Guide](3dMake_All_Lessons.md) - How to navigate this curriculum  

### Setup & Configuration Guides

[3dMake Setup Guide](3dMake_All_Lessons.md) - Installation walkthrough  
[VSCode Setup Guide](3dMake_All_Lessons.md) - Accessibility configuration  
[{{i:Screen}} Reader Coding Tips ({{i:NVDA}} & {{i:JAWS}})](3dMake_All_Lessons.md) - Keyboard shortcuts and coding configuration  

### Quick Reference Materials

[{{i:OpenSCAD}} Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Syntax quick-{{i:reference}}  
[{{i:3DMake}} CLI Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Complete 3dm {{i:command}} {{i:reference}}  
[Filament Comparison Table](3DMake_Appendices_Complete.md#appendix-c) - Material selection guide  
[Master Rubric](3DMake_Appendices_Complete.md#appendix-d) - Project assessment criteria  

### Safety & Maintenance

[Safety Checklist](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) - Pre-{{i:print}} safety procedures  
[Maintenance Log](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) - Printer maintenance tracking  

### Troubleshooting & Diagnostics

[{{i:Common}} Issues and Solutions](Backmatter_Complete.md#troubleshooting) - Comprehensive troubleshooting guide  
[Diagnostic Checklist](Backmatter_Complete.md#troubleshooting) - Systematic problem diagnosis  
[Technical Reference](Backmatter_Complete.md#troubleshooting) - Advanced systems architecture and professional {{i:reference}}  

### Glossaries & Terminology

[Student Glossary](Backmatter_Complete.md#student-glossary) - Complete terminology {{i:reference}} for {{i:OpenSCAD}}, 3dMake, {{hi:3D {{i:printing}}}}3D Printing, and CLI  
[Teacher Glossary](Backmatter_Complete.md#teacher-glossary) - Pedagogical framework and instructional {{i:design}} terminology  

### Command Line Integration Appendices

[CLI Appendices Overview](Appendices/CLI_Appendices.md) - All {{i:command}} line integration guides  
[Appendix A: CMD/Batch Integration](CLI_Appendices_Complete.md#appendix-a) - {{i:Windows}} CMD automation  
[Appendix B: {{i:PowerShell}} Integration](CLI_Appendices_Complete.md#appendix-b) - {{i:PowerShell}} {{i:workflow}} automation  
[Appendix C: {{i:Git}} {{i:Bash}} Integration](CLI_Appendices_Complete.md#appendix-c) - Unix {{i:shell}} integration  

### 3dMake & {{i:OpenSCAD}} Appendices

[3dMake Appendices Overview](Appendices/3DMake_Appendices.md) - All 3dMake {{i:reference}} materials  
[Appendix A: Comprehensive Slicing Guide](3DMake_Appendices_Complete.md#appendix-b) - PrusaSlicer, Bambu Studio, Cura, OrcaSlicer  
[Appendix B: Material Properties & Selection Guide](3DMake_Appendices_Complete.md#appendix-c) - Detailed {{i:material}} specifications  
[Appendix C: Tolerance Testing & QA Matrix](3DMake_Appendices_Complete.md#appendix-d) - Quality assurance procedures  
[Appendix D: Advanced {{i:OpenSCAD}} Concepts](3DMake_Appendices_Complete.md#appendix-e) - Gears, recursion, performance optimization  

### Code Examples & Assets

[3dMake Code Examples & Assets](assets/3dMake_Foundation/README.md) - {{i:OpenSCAD}} {{i:code}} examples and {{i:reference}} designs  

### Further Reading & References

[References & Further Reading](Backmatter_Complete.md#further-reading) - Peer-reviewed research and scholarly works  
  
## Supplemental Resources & Textbooks

### Textbook Options

**Beginner-Friendly Textbooks:**

- [Programming with {{i:OpenSCAD}}: A Beginner's Guide to Coding 3D-Printable Objects](https://nostarch.com/programmingopenscad) by Justin Gohde and Marius Kintel - Comprehensive {{i:reference}} covering {{i:OpenSCAD}} syntax, {{i:geometry}} concepts, and {{i:design}} patterns. Ideal for deep dives {{i:into}} {{i:specific}} topics and as a {{i:reference}} guide throughout the course. Available in EPUB format (screen {{i:reader}} accessible).
- [Simplifying 3D Printing with {{i:OpenSCAD}}](https://www.packtpub.com/en-us/product/simplifying-3d-{{i:printing}}-with-openscad-9781801813174) by Alicia Noors - Focused on practical workflows, optimization, and real-world {{i:printing}} scenarios. Available in EPUB/PDF formats.
- [{{i:OpenSCAD}} for 3D Printing](https://www.apress.com/gp/book/9781484213292) by Al Williams - Hands-on introduction to {{i:OpenSCAD}} with practical 3D {{i:printing}} projects. Covers basics through intermediate topics with step-by-step tutorials.
- [Mastering {{i:OpenSCAD}}](https://www.amazon.com/Mastering-{{i:OpenSCAD}}-Jochen-Kerdels/dp/1803243538) by Jochen Kerdels - Project-based learning approach with emphasis on {{i:parametric}} {{i:design}} and reusable {{i:code}} {{hi:Modules}}modules.

**Free Online Resources:**

- [Official {{i:OpenSCAD}} Documentation](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual) - Complete language {{i:reference}} and user manual on Wikibooks. Fully accessible and searchable.
- [{{i:OpenSCAD}} Tutorial](https://openscad.org/documentation.html) - Official beginner tutorial covering core concepts and syntax.
- [{{i:OpenSCAD}} Cheat Sheet (Official)](https://openscad.org/cheatsheet/) - Quick {{i:reference}} for all {{i:OpenSCAD}} {{i:commands}} and functions.

### Companion Teaching Resources

**Curriculum-Specific Materials:**

[Practice Worksheets](https://programmingwithopenscad.github.io/learning.html) - Printable worksheets for visualization practice, {{hi:Decomposition}}decomposition exercises, vocabulary building, and assessment.  
[Visual Quick Reference](https://programmingwithopenscad.github.io/quick-{{i:reference}}.html) - Command syntax guides and {{i:geometry}} {{i:reference}}.  
[Code Solutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) - Working {{i:OpenSCAD}} examples organized by topic ({{hi:3D shapes}}3D shapes, transformations, loops, modules, if-statements, advanced techniques).

**Community Resources:**

- [Thingiverse {{i:OpenSCAD}} Designs](https://www.thingiverse.com/search?q=openscad&type=things) - Community-created {{i:parametric}} designs with source {{i:code}} available for study and modification.
- [{{i:OpenSCAD}} Forums](https://forum.openscad.org/) - Active community {{i:support}} for troubleshooting and learning.
- [{{i:OpenSCAD}} Tutorials (YouTube)](https://www.youtube.com/results?search_query=openscad+tutorial+beginner) - Video tutorials (note: supplemental to {{i:text}}-based curriculum; transcripts recommended for {{i:accessibility}}).  

## Getting Started

### For Students

**Step 1: {{i:Screen}} Reader Setup & Accessibility**

Before beginning any technical {{i:work}}, optimize your screen {{i:reader}} configuration for {{i:command}}-line and coding {{i:work}}:

- Start with [{{i:Screen}} Reader Accessibility Guide](Setup_Accessibility_Complete.md#{{i:accessibility}}-guide) - Configure {{i:NVDA}}/{{i:JAWS}} for terminal {{i:work}}
- Review [{{i:Screen}} Reader Choice: {{i:Windows}} CLI](Setup_Accessibility_Complete.md#screen-{{i:reader}}-choice) - Help choosing {{i:between}} {{i:NVDA}} and {{i:JAWS}}
- Optional: [Braille Display & Terminal Mode](Setup_Accessibility_Complete.md#{{i:braille}}-displays) - Refreshable {{i:braille}} display configuration
- Complete [Editor Selection and Setup](Setup_Accessibility_Complete.md#editor-setup) - Choose and configure an accessible {{i:text}} editor

**Step 2: Choose Your Command Line Pathway**

Read [Command Line Interface Selection Guide](Command_Line_Interface_Selection/Command_Line_Interface_Selection.md) to compare all three CLI options, then select ONE pathway:

- [{{i:PowerShell}} Curriculum Overview](PS_Complete_Curriculum.md#{{i:part}}-1-powershell) - Recommended for {{i:Windows}} users
- [CMD Curriculum Overview](CMD_Complete_Curriculum.md#{{i:part}}-2-cmd) - Simplified alternative for beginners
- [{{i:Git}} {{i:Bash}} Curriculum Overview](GitBash_Complete_Curriculum.md#{{i:part}}-3-{{i:git}}-bash) - Cross-platform Unix skills

Complete ALL lessons in your chosen pathway (Pre through Lesson 6 + Unit Test) {{i:before}} moving to Step 3.

**Step 3: Begin 3dMake Foundation**

Once {{i:you}}'ve completed your CLI foundation:

1. Read [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md) - Overview of {{i:OpenSCAD}} and 3dMake
2. Start [Lesson 1: Environmental Configuration](3dMake_All_Lessons.md) - Install {{i:OpenSCAD}} and 3dMake
3. Progress through Lessons 2-11 sequentially
4. Complete all project templates as {{i:you}} encounter them
5. Review [3dMake Foundation Curriculum Guide](3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.md) for detailed lesson descriptions

**Step 4: Projects & Documentation**

Use the [Student Templates](3dMake_Foundation/Templates/Student/) for all project documentation:

- Your First Print (Lesson 1)
- Your Second Print & Bonus Print (Lesson 2)
- Dice Dice Dice (Lesson 4)
- Parametric Keychain (Lesson 6)
- Miniature Assembly (Lesson 7)
- Snap Fit Clip (Lesson 8)
- Accessibility Audit (Lesson 10)
- Projects 0, 1, and 3 (Lesson 11)

**Step 5: Final Assessment**

Complete [3dMake Foundation Final Exam](3dMake_All_Lessons.md) to demonstrate mastery of {{i:OpenSCAD}}, {{i:3DMake}}, and {{i:parametric}} {{i:design}} principles.

---

### For Instructors

**Course Setup & Planning:**

1. Review [Syllabus](Syllabus.md) - Complete course structure, philosophy, learning objectives, and assessment framework
2. Read [3dMake Foundation Curriculum Guide](3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.md) - Detailed lesson-by-lesson breakdown with timing and objectives
3. Study [Master Rubric](3DMake_Appendices_Complete.md#appendix-d) - Comprehensive project assessment criteria
4. Explore [Teacher Glossary](Backmatter_Complete.md#teacher-glossary) - Pedagogical framework and instructional terminology

**Assessment Materials:**

Use the [Teacher Templates](3dMake_Foundation/Templates/Teacher/) for grading and feedback:

- your_first_print_teacher_template.md
- your_second_print_teacher_template.md
- bonus_print_teacher_template.md
- dice_dice_dice_teacher_template.md
- parametric_keychain_teacher_template.md
- miniature_assembly_teacher_template.md
- snap_fit_clip_teacher_template.md
- accessibility_audit_teacher_template.md
- project_0_teacher_template.md
- project_1_teacher_template.md
- project_3_teacher_template.md

**Final Exam:**

Administer [3dMake Foundation Final Exam](3dMake_All_Lessons.md) - 25-question comprehensive assessment covering {{i:error}} detection, {{i:code}} analysis, {{i:design}} challenges, and real-world application (100 points total).

**Accessibility Support:**

- Ensure all students complete [{{i:Screen}} Reader Setup](Setup_Accessibility_Complete.md#{{i:accessibility}}-guide) {{i:before}} beginning coursework
- Reference [{{i:Screen}} Reader Coding Tips ({{i:NVDA}} & {{i:JAWS}})](3dMake_All_Lessons.md) for troubleshooting student screen {{i:reader}} issues
- Provide access to [Student Glossary](Backmatter_Complete.md#student-glossary) for terminology {{i:reference}}

**Additional Resources:**

- [Technical Reference](Backmatter_Complete.md#troubleshooting) - Advanced troubleshooting and systems architecture
- [Further Reading](Backmatter_Complete.md#further-reading) - Peer-reviewed research supporting curriculum {{i:design}}
- [Quick Reference](3DMake_Appendices_Complete.md#appendix-a) - At-a-glance lesson and {{i:command}} {{i:reference}} for student handouts  


## {{i:Screen}} Readers

We know that users of this curriculum will primarily be {{i:JAWS}} and {{i:NVDA}} screenreader users, or else users of Orca if on a Linux-based system. Dolphin SuperNova (commercial) and {{i:Windows}} Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/{{i:ScreenReader}}-Training](https://yourdolphin.com/{{i:ScreenReader}}-Training) and [https://{{i:support}}.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1](https://{{i:support}}.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) for vendor documentation.

