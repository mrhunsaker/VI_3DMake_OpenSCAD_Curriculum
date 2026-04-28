# Introduction {#readme}

This course teaches {{hi:3D design}}3D design and digital fabrication using a fully accessible, command-line-driven toolchain centered on OpenSCAD (text-based CAD), 3DMake (non-visual build automation), and accessible editors ({{hi:VS Code}}VS Code, {{hi:Notepad++}}Notepad++, command-line editors) with screen reader support.

The curriculum is explicitly designed for blind and visually impaired learners who use screen readers (NVDA, JAWS, Orca, VoiceOver). It eliminates GUI navigation and visual feedback in favor of keyboard-driven, text-based workflows that screen readers can fully access. Accessibility is not an add-on. It is the foundation of every tool, workflow, and lesson in this curriculum.

## Curriculum Structure

### Screen Reader Setup & Accessibility Fundamentals

Before choosing a command-line pathway, students learn to optimize their screen reader setup for terminal work and understand accessibility options.

What's Included:

- [Screen Reader Accessibility Guide](Setup_Accessibility_Complete.md#accessibility-guide) - Comprehensive NVDA & JAWS reference with terminal tips for {{hi:PowerShell}}PowerShell, {{hi:CMD}}CMD, and {{hi:Git Bash}}Git Bash
- [Screen Reader Choice: Windows CLI](Setup_Accessibility_Complete.md#screen-reader-choice) - Help choosing between NVDA and JAWS
- [Braille Display & Terminal Mode](Setup_Accessibility_Complete.md#braille-displays) - Advanced accessibility setup with refreshable braille displays
- [Editor Selection and Setup](Setup_Accessibility_Complete.md#editor-setup) - Choosing and configuring an accessible text editor

Why start here? Screen reader optimization is the foundation for all command-line work. Students learn keyboard shortcuts, navigation techniques, and terminal-specific accessibility before diving into any {{hi:CLI}}CLI pathway.

### Command-Line Foundation (Choose Your Path)

Students master terminal/command-line fundamentals before learning 3D design. You choose between three equivalent pathways based on your operating system and learning preferences.

#### Compare All Three Pathways

[Command Line Interface Selection Guide](Command_Line_Interface_Selection/Command_Line_Interface_Selection.md)

This guide provides a comprehensive comparison including:

- Feature matrix comparing all three shells
- Command comparison table (navigation, file operations, scripting)
- Learner profiles to help you choose
- Goal-based recommendations
- FAQ addressing common questions

#### PowerShell Foundation (Recommended for Windows Users)

Where to Start: [PowerShell Curriculum Overview](PS_Complete_Curriculum.md#part-1-powershell)

Lessons Included:

- Powershell Lesson Pre: Your First Terminal - Opening PowerShell, first commands, screen reader tricks
- Powershell Lesson 0: Getting Started - Paths, shortcuts, tab completion
- Powershell Lesson 1: Navigation - Moving around the file system confidently
- Powershell Lesson 2: {{hi:File and Folder Manipulation}}File and Folder Manipulation - Creating, editing, moving files
- Powershell Lesson 3: {{hi:Input, Output, and Piping}}Input, Output, and Piping - Redirecting output, piping commands
- Powershell Lesson 4: Environment {{hi:Variables}}Variables and Aliases - Setting variables, creating shortcuts
- Powershell Lesson 5: Filling in the Gaps - Control flow, profiles, useful tricks
- Powershell Lesson 6: Advanced Terminal Techniques - Scripts, functions, professional workflows
- PowerShell Unit Test & Practice - Comprehensive self-assessment

Time commitment: 30-45 hours (for screen reader users)
Best for: Users who want modern Windows features and advanced automation
Skills: Terminal navigation, piping, advanced scripting, professional automation

#### Windows Command Prompt Foundation (Simplified Alternative)

Where to Start: [CMD Curriculum Overview](CMD_Complete_Curriculum.md#part-2-cmd)

Lessons Included:

- Command Line Lesson Pre: Your First Terminal - Opening CMD, first commands, screen reader tricks
- Command Line Lesson 0: Getting Started - Paths, shortcuts, command basics
- Command Line Lesson 1: Navigation - Moving around the file system confidently
- Command Line Lesson 2: File and Folder Manipulation - Creating, editing, moving files
- Command Line Lesson 3: Input, Output & Redirection - Redirecting output, piping commands
- Command Line Lesson 4: Environment Variables & Shortcuts - Setting variables, shortcuts
- Command Line Lesson 5: Filling in the Gaps - Batch files, advanced techniques
- Command Line Lesson 6: Advanced Terminal Techniques - Scripts, automation, professional workflows
- CMD Unit Test & Practice - Comprehensive self-assessment

Time commitment: 30-45 hours (for screen reader users)
Best for: Absolute beginners or users who prefer simplicity
Skills: Terminal navigation, file operations, batch scripting, basic automation

#### Git Bash Foundation (Cross-Platform Skills)

Where to Start: [Git Bash Curriculum Overview](GitBash_Complete_Curriculum.md#part-3-git-bash)

Introductory & Reference Materials:

Lessons Included:

- Bash Lesson Pre: Your First Terminal - Opening Git Bash, first commands, screen reader tricks
- Bash Lesson 0: Getting Started - Paths, shortcuts, Unix path notation
- Bash Lesson 1: Navigation - Moving around the file system confidently
- Bash Lesson 2: File and Folder Manipulation - Creating, editing, moving files
- Bash Lesson 3: Input, Output & Piping - Redirecting output, piping commands
- Bash Lesson 4: Environment Variables & Aliases - Setting variables, creating shortcuts
- Bash Lesson 5: Filling in the Gaps - Shell profiles, history, {{hi:Debugging}}debugging
- Bash Lesson 6: Advanced Terminal Techniques - Scripts, functions, professional workflows
- GitBash Unit Test & Practice - Comprehensive self-assessment

Time commitment: 30-45 hours (for screen reader users)
Best for: Users who want cross-platform skills (Windows, macOS, Linux)
Skills: Unix/bash commands, shell scripting, cross-platform automation

> [!IMPORTANT]
> Choose ONE pathway and complete it fully. All three teach identical fundamental concepts using different tools. Each integrates fully with 3D design workflows.

### 3dMake Foundation & Design (11 Lessons + 6 Appendices)

Where to Start: [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md)

Students build parametric 3D designs using OpenSCAD and automate the workflow with 3DMake.

#### Main Curriculum: 11 Progressive Lessons

| Part                  | Lessons | Focus                                                                         | Duration  |
|-----------------------|---------|-------------------------------------------------------------------------------|-----------|
| Foundations           | 1-3     | Environment setup, primitives, parametric design + advanced language features | 4-5 hours |
| Verification & Safety | 4-5     | AI verification, safety protocols, materials                                  | 2-3 hours |
| Applied Projects      | 6-8     | Practical commands, text functions, transforms, assembly patterns             | 5-6 hours |
| Advanced Topics       | 9-10    | Automation with file I/O, troubleshooting, mastery                            | 3-4 hours |
| Leadership            | 11      | {{hi:Stakeholder-Centric Design}}Stakeholder-centric design                                                    | 2-3 hours |

Total: 45-55 hours instruction + practice projects

#### Reference Appendices

**Command Line Tools:**  
- [Appendix A: Command Line (CMD/Batch) Integration for SCAD Workflows](CLI_Appendices_Complete.md#appendix-a) - Batch processing and automation for CMD users
- [Appendix B: PowerShell Integration for SCAD Workflows](CLI_Appendices_Complete.md#appendix-b) - Batch processing, automation scripts, and advanced workflow integration for PowerShell users
- [Appendix C: Git Bash / POSIX Shell Integration for SCAD Workflows](CLI_Appendices_Complete.md#appendix-c) - Shell scripting and automation for Git Bash / Unix shell users

**3dMake:**  
- [3DMake CLI Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Quick reference for 3dm command-line tool
- [Appendix A: Comprehensive Slicing Guide](3DMake_Appendices_Complete.md#appendix-b) - Complete reference for {{hi:PrusaSlicer}}PrusaSlicer, {{hi:Bambu}}Bambu Studio, {{hi:Cura}}Cura, and OrcaSlicer configuration
- [Appendix B: Material Properties & Selection Guide](3DMake_Appendices_Complete.md#appendix-c) - Detailed material reference including shrinkage data, print settings, and properties
- [Appendix C: Tolerance Testing & Quality Assurance Matrix](3DMake_Appendices_Complete.md#appendix-d) - Comprehensive QA procedures and tolerance validation methods
- [Appendix D: Advanced OpenSCAD Concepts](3DMake_Appendices_Complete.md#appendix-e) - Specialized topics including gears, batch processing, performance, print orientation, and recursion
- [3dMake Code Examples & Assets](assets/3dMake_Foundation/README.md) - OpenSCAD code examples and reference designs

## The Accessible Toolchain

### Screen Reader Compatibility Throughout

This course uses tools designed for screen reader access:

- Terminal/Command line - Text-based, fully accessible to NVDA, JAWS, Orca, VoiceOver
- OpenSCAD - Free, open-source text-based CAD (no visual-only GUI dependency)
- 3DMake - Command-line build tool eliminating GUI navigation
- Accessible text editors - Notepad, VS Code, Notepad++, Nano, Vim, etc. (all keyboard-driven, screen reader friendly)

See [Appendix A: 3DMake Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) for detailed keyboard shortcuts and configuration.

### 3DMake: Non-Visual Build Automation

3DMake makes the entire design-to-print pipeline accessible:

```bash
3dm build        -> Compiles main.scad to main.stl
3dm info         -> Validates geometry and runs diagnostics
3dm slice        -> Prepares model for printing
```

- No GUI navigation needed
- Automation eliminates repetitive manual steps
- Configuration files store {{hi:Parameters}}parameters as human-readable text
- Error reporting is text-based (screen reader accessible)
- Works with command-line slicers

### Iterative, Non-Visual Design

Students learn to design through code and testing, not visual previews:

- Write parametric OpenSCAD code in accessible editors
- Run `3dm build` to compile to printable file
- Use measurement-based verification ({{hi:Calipers}}calipers, scales, functional testing)
- Iterate by editing parameters and rebuilding
- No reliance on 3D preview or visual feedback

## Project-Based Learning

3dMake lessons include hands-on projects:

- Lesson 6: Keychain with embossed text (3dm commands)
- Lesson 7: Phone stand ({{hi:Parametric Transforms}}parametric transforms)
- Lesson 8: Stackable bins (interlocking features, tolerances)
- Lesson 9: Build automation (PowerShell batch processing)
- Lesson 10: QA testing + accessibility audit (measurement, troubleshooting)
- Lesson 11: Beaded jewelry holder (stakeholder-driven design)

Each project requires:

- Parametric OpenSCAD code (clean, well-commented)
- Functional prototype (tested, iterated)
- Complete documentation (reflections, measurements, decisions)

## Learning Support

### Primary Navigation & Overview

[Curriculum Guide](3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.md) - Detailed overview of all lessons and appendices  
[Quick Reference](3DMake_Appendices_Complete.md#appendix-a) - At-a-glance command and syntax reference  
[mdBook Navigation Guide](3dMake_All_Lessons.md) - How to navigate this curriculum  

### Setup & Configuration Guides

[3dMake Setup Guide](3dMake_All_Lessons.md) - Installation walkthrough  
[VSCode Setup Guide](3dMake_All_Lessons.md) - Accessibility configuration  
[Screen Reader Coding Tips (NVDA & JAWS)](3dMake_All_Lessons.md) - Keyboard shortcuts and coding configuration  

### Quick Reference Materials

[OpenSCAD Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Syntax quick-reference  
[3DMake CLI Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Complete 3dm command reference  
[Filament Comparison Table](3DMake_Appendices_Complete.md#appendix-c) - Material selection guide  
[Master Rubric](3DMake_Appendices_Complete.md#appendix-d) - Project assessment criteria  

### Safety & Maintenance

[Safety Checklist](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) - Pre-print safety procedures  
[Maintenance Log](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) - Printer maintenance tracking  

### Troubleshooting & Diagnostics

[Common Issues and Solutions](Backmatter_Complete.md#troubleshooting) - Comprehensive troubleshooting guide  
[Diagnostic Checklist](Backmatter_Complete.md#troubleshooting) - Systematic problem diagnosis  
[Technical Reference](Backmatter_Complete.md#troubleshooting) - Advanced systems architecture and professional reference  

### Glossaries & Terminology

[Student Glossary](Backmatter_Complete.md#student-glossary) - Complete terminology reference for OpenSCAD, 3dMake, {{hi:3D printing}}3D Printing, and CLI  
[Teacher Glossary](Backmatter_Complete.md#teacher-glossary) - Pedagogical framework and instructional design terminology  

### Command Line Integration Appendices

[CLI Appendices Overview](Appendices/CLI_Appendices.md) - All command line integration guides  
[Appendix A: CMD/Batch Integration](CLI_Appendices_Complete.md#appendix-a) - Windows CMD automation  
[Appendix B: PowerShell Integration](CLI_Appendices_Complete.md#appendix-b) - PowerShell workflow automation  
[Appendix C: Git Bash Integration](CLI_Appendices_Complete.md#appendix-c) - Unix shell integration  

### 3dMake & OpenSCAD Appendices

[3dMake Appendices Overview](Appendices/3DMake_Appendices.md) - All 3dMake reference materials  
[Appendix A: Comprehensive Slicing Guide](3DMake_Appendices_Complete.md#appendix-b) - PrusaSlicer, Bambu Studio, Cura, OrcaSlicer  
[Appendix B: Material Properties & Selection Guide](3DMake_Appendices_Complete.md#appendix-c) - Detailed material specifications  
[Appendix C: Tolerance Testing & QA Matrix](3DMake_Appendices_Complete.md#appendix-d) - Quality assurance procedures  
[Appendix D: Advanced OpenSCAD Concepts](3DMake_Appendices_Complete.md#appendix-e) - Gears, recursion, performance optimization  

### Code Examples & Assets

[3dMake Code Examples & Assets](assets/3dMake_Foundation/README.md) - OpenSCAD code examples and reference designs  

### Further Reading & References

[References & Further Reading](Backmatter_Complete.md#further-reading) - Peer-reviewed research and scholarly works  
  
## Supplemental Resources & Textbooks

### Textbook Options

**Beginner-Friendly Textbooks:**

- [Programming with OpenSCAD: A Beginner's Guide to Coding 3D-Printable Objects](https://nostarch.com/programmingopenscad) by Justin Gohde and Marius Kintel - Comprehensive reference covering OpenSCAD syntax, geometry concepts, and design patterns. Ideal for deep dives into specific topics and as a reference guide throughout the course. Available in EPUB format (screen reader accessible).
- [Simplifying 3D Printing with OpenSCAD](https://www.packtpub.com/en-us/product/simplifying-3d-printing-with-openscad-9781801813174) by Alicia Noors - Focused on practical workflows, optimization, and real-world printing scenarios. Available in EPUB/PDF formats.
- [OpenSCAD for 3D Printing](https://www.apress.com/gp/book/9781484213292) by Al Williams - Hands-on introduction to OpenSCAD with practical 3D printing projects. Covers basics through intermediate topics with step-by-step tutorials.
- [Mastering OpenSCAD](https://www.amazon.com/Mastering-OpenSCAD-Jochen-Kerdels/dp/1803243538) by Jochen Kerdels - Project-based learning approach with emphasis on parametric design and reusable code {{hi:Modules}}modules.

**Free Online Resources:**

- [Official OpenSCAD Documentation](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual) - Complete language reference and user manual on Wikibooks. Fully accessible and searchable.
- [OpenSCAD Tutorial](https://openscad.org/documentation.html) - Official beginner tutorial covering core concepts and syntax.
- [OpenSCAD Cheat Sheet (Official)](https://openscad.org/cheatsheet/) - Quick reference for all OpenSCAD commands and functions.

### Companion Teaching Resources

**Curriculum-Specific Materials:**

[Practice Worksheets](https://programmingwithopenscad.github.io/learning.html) - Printable worksheets for visualization practice, {{hi:Decomposition}}decomposition exercises, vocabulary building, and assessment.  
[Visual Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) - Command syntax guides and geometry reference.  
[Code Solutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) - Working OpenSCAD examples organized by topic ({{hi:3D shapes}}3D shapes, transformations, loops, modules, if-statements, advanced techniques).

**Community Resources:**

- [Thingiverse OpenSCAD Designs](https://www.thingiverse.com/search?q=openscad&type=things) - Community-created parametric designs with source code available for study and modification.
- [OpenSCAD Forums](https://forum.openscad.org/) - Active community support for troubleshooting and learning.
- [OpenSCAD Tutorials (YouTube)](https://www.youtube.com/results?search_query=openscad+tutorial+beginner) - Video tutorials (note: supplemental to text-based curriculum; transcripts recommended for accessibility).  

## Getting Started

### For Students

**Step 1: Screen Reader Setup & Accessibility**

Before beginning any technical work, optimize your screen reader configuration for command-line and coding work:

- Start with [Screen Reader Accessibility Guide](Setup_Accessibility_Complete.md#accessibility-guide) - Configure NVDA/JAWS for terminal work
- Review [Screen Reader Choice: Windows CLI](Setup_Accessibility_Complete.md#screen-reader-choice) - Help choosing between NVDA and JAWS
- Optional: [Braille Display & Terminal Mode](Setup_Accessibility_Complete.md#braille-displays) - Refreshable braille display configuration
- Complete [Editor Selection and Setup](Setup_Accessibility_Complete.md#editor-setup) - Choose and configure an accessible text editor

**Step 2: Choose Your Command Line Pathway**

Read [Command Line Interface Selection Guide](Command_Line_Interface_Selection/Command_Line_Interface_Selection.md) to compare all three CLI options, then select ONE pathway:

- [PowerShell Curriculum Overview](PS_Complete_Curriculum.md#part-1-powershell) - Recommended for Windows users
- [CMD Curriculum Overview](CMD_Complete_Curriculum.md#part-2-cmd) - Simplified alternative for beginners
- [Git Bash Curriculum Overview](GitBash_Complete_Curriculum.md#part-3-git-bash) - Cross-platform Unix skills

Complete ALL lessons in your chosen pathway (Pre through Lesson 6 + Unit Test) before moving to Step 3.

**Step 3: Begin 3dMake Foundation**

Once you've completed your CLI foundation:

1. Read [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md) - Overview of OpenSCAD and 3dMake
2. Start [Lesson 1: Environmental Configuration](3dMake_All_Lessons.md) - Install OpenSCAD and 3dMake
3. Progress through Lessons 2-11 sequentially
4. Complete all project templates as you encounter them
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

Complete [3dMake Foundation Final Exam](3dMake_All_Lessons.md) to demonstrate mastery of OpenSCAD, 3DMake, and parametric design principles.

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

Administer [3dMake Foundation Final Exam](3dMake_All_Lessons.md) - 25-question comprehensive assessment covering error detection, code analysis, design challenges, and real-world application (100 points total).

**Accessibility Support:**

- Ensure all students complete [Screen Reader Setup](Setup_Accessibility_Complete.md#accessibility-guide) before beginning coursework
- Reference [Screen Reader Coding Tips (NVDA & JAWS)](3dMake_All_Lessons.md) for troubleshooting student screen reader issues
- Provide access to [Student Glossary](Backmatter_Complete.md#student-glossary) for terminology reference

**Additional Resources:**

- [Technical Reference](Backmatter_Complete.md#troubleshooting) - Advanced troubleshooting and systems architecture
- [Further Reading](Backmatter_Complete.md#further-reading) - Peer-reviewed research supporting curriculum design
- [Quick Reference](3DMake_Appendices_Complete.md#appendix-a) - At-a-glance lesson and command reference for student handouts  


## Screen Readers

We know that users of this curriculum will primarily be JAWS and NVDA screenreader users, or else users of Orca if on a Linux-based system. Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/ScreenReader-Training](https://yourdolphin.com/ScreenReader-Training) and [https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) for vendor documentation.

