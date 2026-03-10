# 3D Design & Printing Curriculum - Non-Visual Toolchain Edition {#syllabus}

Author: Michael Ryan Hunsaker, M.Ed., Ph.D.  
Last Updated: 2026-03-04  
## Overview

This curriculum teaches 3D design and digital fabrication using a fully accessible, command-line-driven toolchain centered on OpenSCAD (text-based CAD), 3DMake (non-visual build automation), and accessible editors (VS Code, Notepad++, command-line editors) with screen reader support. Students progress from foundational command-line skills through guided projects to real-world, stakeholder-driven design challenges.

### Who This Course Is For

This course is explicitly designed for blind and visually impaired learners who use screen readers (NVDA, JAWS, Orca, VoiceOver, Windows Narrator, Dolphin SuperNova). It eliminates GUI navigation and visual feedback in favor of keyboard-driven, text-based workflows that screen readers can fully access.

Accessibility is not an add-on. It is the foundation of every tool, workflow, and lesson in this curriculum.

### Core Philosophy

1. Text-First Design: All core work happens in text editors and command-line interfaces - no graphical CAD previews, no mouse-dependent menu navigation.

2. Parametric Thinking: Students learn to express geometry as code using OpenSCAD, enabling precise, reproducible, and iterable designs without visual feedback.

3. Automation and Independence: 3DMake automates the journey from code to printed object, handling compilation, slicing orchestration, and metadata management through simple command-line commands and text configuration files.

4. Screen Reader Mastery: Students develop fluency with accessibility technologies (NVDA, JAWS, VoiceOver) and accessible editors, building skills that apply to careers in software, engineering, and digital fabrication.

5. Real-World Impact: Projects culminate in designing assistive-technology solutions for real stakeholders, combining technical skill with human-centered design and documentation.

## Curriculum Structure & Scope/Sequence

### Setup & Accessibility Fundamentals (Prerequisite - 2-3 hours)

Start here: [Screen Reader Accessibility Guide](Setup_Accessibility_Complete.md#accessibility-guide)

Before choosing a command-line pathway, students optimize their screen reader setup for terminal work.

| Component                                                                                                         | Duration    | Content                                                                   |
|-------------------------------------------------------------------------------------------------------------------|-------------|---------------------------------------------------------------------------|
| [Screen Reader Accessibility Guide](Setup_Accessibility_Complete.md#accessibility-guide) | 1-1.5 hours | NVDA/JAWS reference for PowerShell, CMD, and Git Bash; keyboard shortcuts |
| [Screen Reader Choice: Windows CLI](Setup_Accessibility_Complete.md#screen-reader-choice)                           | 30 min      | Comparing NVDA, JAWS, Narrator, and Dolphin; choosing the right tool      |
| [Braille Display & Terminal Mode](Setup_Accessibility_Complete.md#braille-displays)                                     | 30 min      | Optional: configuring refreshable braille displays for terminal work      |
| [Editor Selection and Setup](Setup_Accessibility_Complete.md#editor-setup)                              | 30 min      | Choosing Notepad, Notepad++, or VS Code; configuring indent announcement  |

### Command-Line Foundation (Choose Your Path)

Start here: [Command Line Interface Selection Guide](Command_Line_Interface_Selection/Command_Line_Interface_Selection.md)

Students master terminal/command-line fundamentals before learning 3D design. Choose one of three equivalent pathways based on your operating system and preferences. All three pathways teach the same concepts and prepare you equally well for 3dMake work.

> [!IMPORTANT]
> Choose ONE pathway and complete it fully. All three teach identical fundamental concepts using different tools. Each integrates fully with 3D design workflows.

#### Pathway A: PowerShell Foundation (Recommended for Windows)

Total Duration: 30-45 hours
Start here: [PowerShell Curriculum Overview](PS_Complete_Curriculum.md#part-1-powershell)

| Component                                                                                                                                          | Duration    | Content                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-----------------------------------------------------------------------------|
| [PowerShell Introduction](PS_Complete_Curriculum.md#part-1-powershell)                                                | 20-30 min   | Screen-reader-friendly quick-start (JAWS/NVDA); essential commands overview |
| [PowerShell Tutorial](PS_Complete_Curriculum.md#part-1-powershell)                                                            | 30-45 min   | Hands-on tutorial: paths, navigation, wildcards, running scripts            |
| [Powershell Lesson Pre: Your First Terminal](PS_Complete_Curriculum.md#ps-lesson-pre)                                      | 2-2.5 hours | Opening PowerShell, first commands, basic navigation, screen reader tricks  |
| [Powershell Lesson 0: Getting Started](PS_Complete_Curriculum.md#ps-lesson-0)                              | 1.5 hours   | Paths, shortcuts, tab completion                                            |
| [Powershell Lesson 1: Navigation](PS_Complete_Curriculum.md#ps-lesson-1)                                                                       | 2-2.5 hours | Moving around the file system confidently                                   |
| [Powershell Lesson 2: File & Folder Manipulation](PS_Complete_Curriculum.md#ps-lesson-2) | 2.5-3 hours | Creating, editing, moving, copying, deleting files and directories          |
| [Powershell Lesson 3: Input, Output & Piping](PS_Complete_Curriculum.md#ps-lesson-3)                                         | 2.5-3 hours | Redirecting output, piping commands, understanding data flow                |
| [Powershell Lesson 4: Environment Variables & Aliases](PS_Complete_Curriculum.md#ps-lesson-4)            | 2-2.5 hours | Setting variables, creating shortcuts, persistent configurations            |
| [Powershell Lesson 5: Filling in the Gaps](PS_Complete_Curriculum.md#ps-lesson-5)                                            | 2.5-3 hours | Control flow, profiles, useful tricks, scripting fundamentals               |
| [Powershell Lesson 6: Advanced Terminal Techniques](PS_Complete_Curriculum.md#ps-lesson-6)                                   | 4-4.5 hours | Scripts, functions, loops, professional workflows, automation patterns      |
| [PowerShell Unit Test & Practice](PS_Complete_Curriculum.md#ps-unit-exam)                                                              | 2-3 hours   | Practice exercises, assessment, reinforcement                               |

Outcomes: Terminal fluency, file system mastery, basic scripting, screen reader optimization, automation readiness

#### Pathway B: Windows Command Prompt (CMD) (Simpler alternative)

Total Duration: 30-45 hours
Start here: [CMD Curriculum Overview](CMD_Complete_Curriculum.md#part-2-cmd)

| Component                                                                                                                                      | Duration    | Content                                                             |
|------------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------------------------------------------------------|
| [Command Line Lesson Pre: Your First Terminal](CMD_Complete_Curriculum.md#cmd-lesson-pre)                                      | 2-2.5 hours | Opening CMD, first commands, basic navigation, screen reader tricks |
| [Command Line Lesson 0: Getting Started](CMD_Complete_Curriculum.md#cmd-lesson-0)                              | 1.5 hours   | Paths, shortcuts, command basics                                    |
| [Command Line Lesson 1: Navigation](CMD_Complete_Curriculum.md#cmd-lesson-1)                                                                       | 2-2.5 hours | Moving around the file system confidently                           |
| [Command Line Lesson 2: File & Folder Manipulation](CMD_Complete_Curriculum.md#cmd-lesson-2) | 2.5-3 hours | Creating, editing, moving, copying, deleting files and directories  |
| [Command Line Lesson 3: Input, Output & Redirection](CMD_Complete_Curriculum.md#cmd-lesson-3)                                    | 2-2.5 hours | Redirecting output, piping commands, understanding data flow        |
| [Command Line Lesson 4: Environment Variables & Shortcuts](CMD_Complete_Curriculum.md#cmd-lesson-4)          | 2-2.5 hours | Setting variables, creating shortcuts, persistent configurations    |
| [Command Line Lesson 5: Filling in the Gaps](CMD_Complete_Curriculum.md#cmd-lesson-5)                                            | 2.5-3 hours | Batch files, advanced techniques, scripting fundamentals            |
| [Command Line Lesson 6: Advanced Terminal Techniques](CMD_Complete_Curriculum.md#cmd-lesson-6)                                   | 3-3.5 hours | Scripts, automation patterns, professional workflows                |
| [CMD Unit Test & Practice](CMD_Complete_Curriculum.md#cmd-unit-exam)                                                                      | 2-3 hours   | Practice exercises, assessment, reinforcement                       |

Outcomes: Terminal fluency, file system mastery, batch scripting, screen reader optimization, automation readiness

#### Pathway C: Git Bash (Best for macOS/Linux or cross-platform development)

Total Duration: 20-25 hours
Start here: [Git Bash Curriculum Overview](GitBash_Complete_Curriculum.md#part-3-git-bash)

| Component                                                                                                                                                        | Duration      | Content                                                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------|
| [Git Bash Introduction](GitBash_Complete_Curriculum.md#part-3-git-bash)                                                                         | 20-30 min     | Screen-reader-friendly quick-start (JAWS/NVDA); essential commands       |
| [Git Bash Tutorial](GitBash_Complete_Curriculum.md#gb-tutorial)                                                                                     | 30-45 min     | Hands-on tutorial: paths, navigation, wildcards, running scripts         |
| [Screen Reader Accessibility Guide for Git Bash](GitBash_Complete_Curriculum.md#gb-accessibility-guide)                      | 30-45 min     | NVDA and JAWS configuration specific to Git Bash                         |
| [Bash Lesson Pre: Your First Terminal](GitBash_Complete_Curriculum.md#gb-lesson-pre)                                        | 2-2.5 hours   | Opening Git Bash, first commands, basic navigation, screen reader tricks |
| [Bash Lesson 0: Getting Started](GitBash_Complete_Curriculum.md#gb-lesson-0)                                | 1.5 hours     | Unix-style paths, shortcuts, command basics, Windows path conversion     |
| [Bash Lesson 1: Navigation](GitBash_Complete_Curriculum.md#gb-lesson-1)                                                                         | 2-2.5 hours   | Moving around the file system confidently                                |
| [Bash Lesson 2: File and Folder Manipulation](GitBash_Complete_Curriculum.md#gb-lesson-2) | 2-2.5 hours   | Creating, editing, moving, copying, deleting files and directories       |
| [Bash Lesson 3: Input, Output & Piping](GitBash_Complete_Curriculum.md#gb-lesson-3)                                           | 2-2.5 hours   | Redirecting output, piping with grep/sort/wc, understanding data flow    |
| [Bash Lesson 4: Environment Variables & Aliases](GitBash_Complete_Curriculum.md#gb-lesson-4)              | 1.5-2 hours   | Setting variables, creating aliases, editing .bashrc                     |
| [Bash Lesson 5: Filling in the Gaps](GitBash_Complete_Curriculum.md#gb-lesson-5)                                              | 2-2.5 hours   | Shell profiles, command history, debugging                               |
| [Bash Lesson 6: Advanced Terminal Techniques](GitBash_Complete_Curriculum.md#gb-lesson-6)                                     | 2.5-3.5 hours | Shell scripts, functions, loops, professional workflows                  |
| [GitBash Unit Test & Practice](GitBash_Complete_Curriculum.md#gb-unit-exam)                                                                        | 2-2.5 hours   | Practice exercises, assessment, reinforcement                            |

Outcomes: Terminal fluency, file system mastery, bash scripting, version control basics, automation readiness

### Common Outcomes (All Pathways)

- Comfort with terminal/command-line interface
- File system navigation and manipulation
- Basic scripting and automation
- Screen reader optimization for terminal work
- Foundation for 3DMake automation tasks

### 3dMake Foundation (Main Curriculum - 16-20 hours)

Start here: [3dMake Introduction](3dMake_Foundation/3dMake_Intro/3dMake_Intro.md)

11 progressive lessons building from foundational concepts to leadership-level design thinking, organized in 5 parts. Version 2.1 adds comprehensive advanced programming and design topics throughout.

#### Foundations (Lessons 1-3 | ~4-5 hours)

| Lesson                                                             | Focus                                                           | Duration   | Project |
|--------------------------------------------------------------------|-----------------------------------------------------------------|------------|---------|
| [Lesson 1](3dMake_All_Lessons.md) | Environmental Configuration + Code Documentation Standards      | 60-90 min  | None    |
| [Lesson 2](3dMake_All_Lessons.md) | Primitives & Boolean Operations + Modifier Characters Debugging | 75-90 min  | None    |
| [Lesson 3](3dMake_All_Lessons.md) | Parametric Architecture + Advanced Programming Concepts         | 90-120 min | None    |

#### Verification & Safety (Lessons 4-5 | ~2 hours)

| Lesson                                                             | Focus                                    | Duration  | Project |
|--------------------------------------------------------------------|------------------------------------------|-----------|---------|
| [Lesson 4](3dMake_All_Lessons.md) | AI-Enhanced Verification & Feedback      | 45-60 min | None    |
| [Lesson 5](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) | Safety Protocols & Material Introduction | 60-90 min | None    |

#### Applied Projects (Lessons 6-8 | ~5-6 hours)

| Lesson                                                             | Focus                                     | Duration    | Project             |
|--------------------------------------------------------------------|-------------------------------------------|-------------|---------------------|
| [Lesson 6](3dMake_All_Lessons.md) | Practical 3dm Commands + String Functions | 75-105 min  | Customizable Keycap |
| [Lesson 7](3dMake_All_Lessons.md) | Parametric Transforms + Math Functions    | 90-120 min  | Phone Stand         |
| [Lesson 8](3dMake_All_Lessons.md) | Advanced Design + Assembly Best Practices | 105-150 min | Stackable Bins      |

#### Advanced Topics (Lessons 9-10 | ~3-4 hours)

| Lesson                                                                | Focus                                                     | Duration    | Project                          |
|-----------------------------------------------------------------------|-----------------------------------------------------------|-------------|----------------------------------|
| [Lesson 9](3dMake_All_Lessons.md)    | Automation + File Import/Export (requires CLI Foundation) | 75-105 min  | Batch Processing Automation      |
| [Lesson 10](3dMake_All_Lessons.md) | Troubleshooting & Mastery with Measurement                | 120-150 min | QA Testing + Accessibility Audit |

#### Leadership (Lesson 11 | ~2 hours)

| Lesson                                                                | Focus                                        | Duration   | Project               |
|-----------------------------------------------------------------------|----------------------------------------------|------------|-----------------------|
| [Lesson 11](3dMake_All_Lessons.md) | Stakeholder-Centric Design & Design Thinking | 90-120 min | Beaded Jewelry Holder |

Total: 16-20 hours of instruction + projects

### Reference Appendices

#### Overview Documents

- **[CLI Appendices Overview](Appendices/CLI_Appendices.md)** - Summary of all command line integration guides  
- **[3dMake Appendices Overview](Appendices/3DMake_Appendices.md)** - Summary of all 3dMake reference materials

#### Command Line Integration Appendices

Located in `Command_Line_Interface_Selection/`:

| Appendix                                                                                                                | Title                                           | Use When                                                     |
|-------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------------------|
| [Appendix A](CLI_Appendices_Complete.md#appendix-a)                                    | CMD/Batch Integration for SCAD Workflows        | Automating with Windows Command Prompt and batch files       |
| [Appendix B](CLI_Appendices_Complete.md#appendix-b)                                     | PowerShell Integration for SCAD Workflows       | Automating with PowerShell scripts and advanced workflows    |
| [Appendix C](CLI_Appendices_Complete.md#appendix-c)                                        | Git Bash / POSIX Shell Integration for SCAD     | Automating with Unix/bash shell scripts for cross-platform   |

#### 3dMake & OpenSCAD Appendices

Located in `3dMake_Foundation/`:

| Appendix                                                                                | Title                                        | Use When                                                 |
|-----------------------------------------------------------------------------------------|----------------------------------------------|----------------------------------------------------------|
| [3DMake Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a)                | Complete 3dm CLI Reference                   | Quick command lookup, troubleshooting 3dm commands       |
| [Appendix A](3DMake_Appendices_Complete.md#appendix-b)               | Comprehensive Slicing Guide                  | Slicing questions, switching slicers, quality issues     |
| [Appendix B](3DMake_Appendices_Complete.md#appendix-c)                       | Material Properties & Selection Guide        | Choosing material, troubleshooting prints, cost analysis |
| [Appendix C](3DMake_Appendices_Complete.md#appendix-d)                              | Tolerance Testing & Quality Assurance Matrix | Starting a project, verifying dimensions, quality issues |
| [Appendix D](3DMake_Appendices_Complete.md#appendix-e)                | Advanced OpenSCAD Concepts                   | Building mechanical systems, optimizing complex models   |
| [Code Examples & Assets](assets/3dMake_Foundation/README.md)                            | 3dMake Code Examples & Assets                | Reference designs, working code examples                 |

### Project Templates & Assessment Materials

#### Student Project Templates

Located in `3dMake_Foundation/Templates/Student/`, these templates guide students through structured documentation for each project:

- **your_first_print_student_template.md** - Lesson 1 extension project  
- **your_second_print_student_template.md** - Lesson 2 basic parametric design  
- **bonus_print_student_template.md** - Lesson 2 advanced practice  
- **dice_dice_dice_student_template.md** - Lesson 4 verification project  
- **parametric_keychain_student_template.md** - Lesson 6 practical 3dm commands  
- **miniature_assembly_student_template.md** - Lesson 7 transforms project  
- **snap_fit_clip_student_template.md** - Lesson 8 assembly design  
- **accessibility_audit_student_template.md** - Lesson 10 QA testing  
- **project_0_student_template.md** - Lesson 11 preliminary design  
- **project_1_student_template.md** - Lesson 11 prototype iteration  
- **project_3_student_template.md** - Lesson 11 final stakeholder project  

Each template includes sections for problem statement, design decisions, code documentation, testing results, measurements, reflections, and iteration notes.

#### Teacher Assessment Templates

Located in `3dMake_Foundation/Templates/Teacher/`, corresponding templates provide grading rubrics and feedback frameworks:

- **your_first_print_teacher_template.md**  
- **your_second_print_teacher_template.md**  
- **bonus_print_teacher_template.md**  
- **dice_dice_dice_teacher_template.md**  
- **parametric_keychain_teacher_template.md**  
- **miniature_assembly_teacher_template.md**  
- **snap_fit_clip_teacher_template.md**  
- **accessibility_audit_teacher_template.md**  
- **project_0_teacher_template.md**  
- **project_1_teacher_template.md**  
- **project_3_teacher_template.md**  

Each teacher template includes the 0-9 rubric scoring guide, common issues to watch for, and focus areas for feedback.

#### Final Assessment

**[3dMake Foundation Final Exam](3dMake_All_Lessons.md)** - Comprehensive 25-question assessment (100 points total) covering:

- Section 1: Error Detection & Code Analysis (Problems 1-10)  
- Section 2: Design Challenges & Real-World Application (Problems 11-25)  

Questions include error identification, code explanation, behavioral analysis, and design problem-solving.

#### Master Rubric

**[Master Rubric](3DMake_Appendices_Complete.md#appendix-d)** - Unified assessment framework used across all projects, providing detailed criteria for the three scoring categories (Problem & Solution, Design & Code Quality, Documentation).

### Reference Materials for Students & Teachers

#### Glossaries

- **[Student Glossary](Backmatter_Complete.md#student-glossary)** - Complete terminology reference for OpenSCAD, 3dMake, 3D Printing, and CLI  
- **[Teacher Glossary](Backmatter_Complete.md#teacher-glossary)** - Pedagogical framework, instructional design strategies, assessment concepts, and accessibility terminology

#### Technical References

- **[Technical Reference & Troubleshooting](Backmatter_Complete.md#troubleshooting)** - Advanced systems architecture, OpenSCAD professional modeling reference, 3DMake professional usage, CLI references (CMD, PowerShell, Git Bash), and comprehensive troubleshooting compendium  
- **[Further Reading & References](Backmatter_Complete.md#further-reading)** - Peer-reviewed research and scholarly works supporting curriculum design

#### Quick References

- **[3dMake Foundation Curriculum Guide](3dMake_Foundation/3dMake_Foundation_Curriculum_Guide.md)** - Detailed lesson-by-lesson breakdown with objectives and timing  
- **[3dMake Quick Reference](3DMake_Appendices_Complete.md#appendix-a)** - At-a-glance command and syntax reference

## Learning Progression: Student Roles

Students move through roles across the curriculum:

| Phase               | Role             | Core Tools                       | Focus                                          |
|---------------------|------------------|----------------------------------|------------------------------------------------|
| CLI Foundation      | Observer/Learner | Terminal, command line           | CLI fundamentals and keyboard navigation       |
| 3dMake Lessons 1-5  | Observer/Learner | OpenSCAD, 3DMake, editor         | Using CLI tools, safety, concepts, measurement |
| 3dMake Lessons 6-8  | Operator         | Editor, OpenSCAD, 3DMake, slicer | Hands-on practice with structured projects     |
| 3dMake Lessons 9-10 | Designer         | Full toolchain                   | Parametric design, automation, troubleshooting |
| 3dMake Lesson 11    | Problem-Solver   | Full toolchain + documentation   | Stakeholder design, real-world impact          |

## The Accessible Toolchain: How It Works

### OpenSCAD - Text-Based 3D Design

OpenSCAD is a free, open-source CAD tool that uses a programming language to describe 3D geometry. Students write code that defines shapes, transforms them, and combines them using Boolean operations.

Why OpenSCAD?

- Screen reader friendly: All work happens in a text editor; no visual-only 3D preview.
- Repeatable: Code is version-controlled, documented, and shareable.
- Parametric: Variables allow students to design once and generate variations by changing numbers.
- No visual dependency: Students reason about geometry through code structure and testing.

### 3DMake - The Non-Visual Build Bridge

3DMake is a command-line tool that automates the journey from OpenSCAD code to a printable file:

```bash
3dm build
3dm info
3dm slice
```

Why 3DMake?

- No GUI navigation: All interaction is keyboard-driven and text-based.
- Automation: Eliminates repetitive manual steps.
- Metadata tracking: Configuration files store parameters as human-readable text.
- Error reporting: Diagnostic output is text that screen readers can read aloud.

### Accessible Editors

Students write OpenSCAD code using screen reader-accessible editors:

- VS Code (Windows, macOS, Linux): Industry-standard with built-in screen reader support
- Notepad++ (Windows): Lightweight, keyboard-driven, excellent screen reader support
- Command-line editors (Nano, Vim, Emacs): Full keyboard control, no mouse needed

## Prerequisites by Section

| Section             | Prerequisites                         | What You'll Learn                                                      |
|---------------------|---------------------------------------|------------------------------------------------------------------------|
| Setup               | None - start here                     | Screen reader optimization, editor selection, accessibility setup      |
| CLI Foundation      | Setup                                 | Terminal basics, keyboard navigation, file operations, basic scripting |
| 3dMake Lessons 1-5  | Setup (CLI Foundation recommended)    | 3D printing concepts, safety, measurement, OpenSCAD basics, debugging  |
| 3dMake Lessons 6-8  | Lessons 1-5                           | Building projects, parametric design, transforms, tolerances           |
| 3dMake Lessons 9-10 | Lessons 6-8 + CLI Foundation required | Automation, troubleshooting, advanced measurement and QA               |
| 3dMake Lesson 11    | Lessons 9-10                          | Stakeholder design, real-world prototyping, leadership                 |

## Grading Rubric

All projects are scored on a 0-9 scale across three equally weighted categories (3 points each):

| Category              | Points | What We Measure                                                                                                            |
|-----------------------|--------|----------------------------------------------------------------------------------------------------------------------------|
| Problem & Solution    | 0-3    | Does the design solve the stated problem? Are all functional requirements met?                                             |
| Design & Code Quality | 0-3    | Is the OpenSCAD code clean, well-commented, and well-structured? Does the print work well? Is there evidence of iteration? |
| Documentation         | 0-3    | Are all sections complete? Are reflections thoughtful and specific? Are measurements recorded?                             |

### Category 1: Problem & Solution (0-3 points)

| Score | Description                                                                                                                                                            |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | The prototype clearly and effectively solves the stated problem. All functional requirements are met. The solution shows evidence of testing against the requirements. |
| 2     | The prototype mostly meets the problem. Most functional requirements are met. Minor gaps between the design and the requirements.                                      |
| 1     | The prototype partially addresses the problem. Several functional requirements are not met or were not clearly tested.                                                 |
| 0     | The prototype does not address the stated problem, or no functional requirements were established.                                                                     |

### Category 2: Design & Code Quality (0-3 points)

OpenSCAD code is central to this course. We evaluate the clarity, structure, and documentation of your code as much as the print quality.

| Score | Description                                                                                                                                                                                          |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | Code is clean, well-organized, and thoroughly commented. Variables/modules are used appropriately. Print quality is excellent. Design shows original thinking and at least one meaningful iteration. |
| 2     | Code works but lacks clear structure or comments. Variables are used but could be better named. Print quality is acceptable. Some iteration evident.                                                 |
| 1     | Code is functional but poorly organized. Comments are minimal or missing. Print quality has defects. Little or no iteration.                                                                         |
| 0     | Code does not work, is not submitted, or shows no original thinking. Print is not functional.                                                                                                        |

### Category 3: Documentation (0-3 points)

| Score | Description                                                                                                                                                                                   |
|-------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 3     | All required sections are present, complete, and specific. Reflections are thoughtful and reference specific decisions, problems encountered, and learning. Photos/measurements are included. |
| 2     | Most required sections are present. Some sections are vague or missing detail. Reflections show some thought but are brief or generic.                                                        |
| 1     | Documentation is incomplete. Major sections are missing or consist of one-line responses. Reflections are minimal.                                                                            |
| 0     | Documentation is not submitted or is essentially empty.                                                                                                                                       |

### Score Interpretation

| Total Score | Interpretation                      | Next Step                                              |
|-------------|-------------------------------------|--------------------------------------------------------|
| 8-9         | Excellent work                      | Move on to next project                                |
| 6-7         | Good work with room for improvement | Move on; instructor may suggest revisiting one element |
| 4-5         | Meets basic expectations            | Resubmission of specific weak areas recommended        |
| 2-3         | Does not meet expectations          | Resubmission required                                  |
| 0-1         | Missing major deliverables          | Meet with instructor; create a completion plan         |

### Resubmission Policy

Students may resubmit any project as many times as they need to improve their score. Resubmissions must include a one-paragraph explanation of what was changed and why. The resubmission score replaces the original score.

## Quick Links to Essential Tools & Setup

### Core Design Toolchain

OpenSCAD

- [OpenSCAD Download](https://openscad.org/downloads.html) - Free, cross-platform CAD (all major OS)
- [OpenSCAD Documentation](https://openscad.org/documentation.html) - Official reference
- [OpenSCAD Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Quick syntax reference

3DMake

- [3DMake Documentation & Installation](https://github.com/tdeck/3dmake) - Command-line build tool for OpenSCAD
- [3DMake CLI Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Complete command reference
- [3dMake Quick Reference](3DMake_Appendices_Complete.md#appendix-a) - Command and workflow reference

Editors
- [VS Code Download](https://code.visualstudio.com/) - Free, screen-reader-accessible code editor
- [Notepad++ Download](https://notepad-plus-plus.org/) - Free, lightweight Windows editor
- [Editor Selection and Setup Guide](Setup_Accessibility_Complete.md#editor-setup) - Accessibility-focused setup guide

### Screen Reader & Accessibility

Screen Readers

- [NVDA Download](https://www.nvaccess.org/) - Free, open-source screen reader (Windows)
- [JAWS Screen Reader](https://www.freedomscientific.com/products/software/jaws/) - Commercial screen reader (Windows, macOS)
- [Orca Screen Reader](https://help.gnome.org/users/orca/stable/) - Built-in screen reader for Linux/GNOME desktop
- [Windows Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) - Built-in Windows screen reader
- [Dolphin SuperNova](https://yourdolphin.com/ScreenReader-Training) - Commercial screen reader (Windows)

Note: This curriculum is designed to work with all major screen readers. The workflows are tested primarily with NVDA and JAWS but apply to all screen readers listed above.

Accessibility Configuration

- [Screen Reader Accessibility Guide](Setup_Accessibility_Complete.md#accessibility-guide) - Comprehensive terminal accessibility guide
- [Screen Reader Coding Tips (NVDA & JAWS)](3dMake_All_Lessons.md) - Keyboard shortcuts and configuration
- [VSCode Setup Guide](3dMake_All_Lessons.md) - Accessibility-focused editor configuration
- [Git Bash Screen Reader Guide](GitBash_Complete_Curriculum.md#gb-accessibility-guide) - NVDA and JAWS configuration for Git Bash

### Slicing Software

- [PrusaSlicer](https://www.prusa3d.com/page/prusaslicer424/)
- [Bambu Studio](https://bambulab.com/en/download/studio)
- [Cura](https://ultimaker.com/software/ultimaker-cura)
- [OrcaSlicer](https://github.com/SoftFever/OrcaSlicer/releases)
- [Appendix A: Comprehensive Slicing Guide](3DMake_Appendices_Complete.md#appendix-b) - Detailed setup guides for all major slicers

### Supplemental Textbooks & Learning Resources

**Beginner-Friendly Textbooks:**

- [Programming with OpenSCAD: A Beginner's Guide to Coding 3D-Printable Objects](https://nostarch.com/programmingopenscad) by Justin Gohde and Marius Kintel - Comprehensive reference covering OpenSCAD syntax, geometry concepts, and design patterns. Available in EPUB format (screen reader accessible).
- [Simplifying 3D Printing with OpenSCAD](https://www.packtpub.com/en-us/product/simplifying-3d-printing-with-openscad-9781801813174) by Alicia Noors - Focused on practical workflows, optimization, and real-world printing scenarios. Available in EPUB/PDF formats.
- [OpenSCAD for 3D Printing](https://www.apress.com/gp/book/9781484213292) by Al Williams - Hands-on introduction to OpenSCAD with practical 3D printing projects. Covers basics through intermediate topics.
- [Mastering OpenSCAD](https://www.amazon.com/Mastering-OpenSCAD-Jochen-Kerdels/dp/1803243538) by Jochen Kerdels - Project-based learning approach with emphasis on parametric design and reusable code modules.

**Free Online Resources:**

- [Official OpenSCAD Documentation](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual) - Complete language reference and user manual on Wikibooks. Fully accessible and searchable.
- [OpenSCAD Tutorial](https://openscad.org/documentation.html) - Official beginner tutorial covering core concepts and syntax.
- [OpenSCAD Cheat Sheet (Official)](https://openscad.org/cheatsheet/) - Quick reference for all OpenSCAD commands and functions.

**Curriculum-Specific Resources:**

- [Programming with OpenSCAD Companion Resources](https://programmingwithopenscad.github.io/learning.html) - Practice worksheets for visualization, decomposition exercises, vocabulary building, and assessment.
- [Visual Quick Reference](https://programmingwithopenscad.github.io/quick-reference.html) - Command syntax guides and geometry reference.
- [Code Solutions Repository](https://github.com/ProgrammingWithOpenSCAD/CodeSolutions) - Working OpenSCAD examples organized by topic (3D shapes, transformations, loops, modules, if-statements, advanced techniques).

**Community Resources:**

- [Thingiverse OpenSCAD Designs](https://www.thingiverse.com/search?q=openscad&type=things) - Community-created parametric designs with source code for study and modification.
- [OpenSCAD Forums](https://forum.openscad.org/) - Active community support for troubleshooting and learning.
- [OpenSCAD Tutorials (YouTube)](https://www.youtube.com/results?search_query=openscad+tutorial+beginner) - Video tutorials (note: supplemental to text-based curriculum; transcripts recommended for accessibility).

## Local Resources: Utah Makerspaces & Community Printing

### Public Library Make Spaces

Salt Lake City Public Library

- [SLC Public Creative Lab](https://services.slcpl.org/creativelab) - Main Library (Level 1)
  - Hardware: Prusa i3 MK3, LulzBot Taz 5, Elegoo Mars 2 (resin)
  - Pricing: Free for prints under 6 hours; $0.50/hr + material cost otherwise

Salt Lake County Library System

- [County Library "Create" Spaces](https://www.slcolibrary.org/what-we-have/create)
  - Hardware: Flashforge Adventurer 5M Pro, LulzBot Workhorse, laser cutters
  - Pricing: $0.06 per gram of filament used

### Makerspaces & Community Centers

Make Salt Lake

- Location: 663 W 100 S, Salt Lake City, UT 84101
- Website: [https://makesaltlake.org/](https://makesaltlake.org/)
- Equipment: Full metal shop, CNC machines, large-scale FDM and resin printing

University of Utah Maker Spaces

- [Lassonde Studios](https://www.theblackbookofinnovation.com/lassonde-studios)
- [Marriott Library ProtoSpace](https://lib.utah.edu/protospace.php)

## Troubleshooting & Getting Help

### Quick Reference Materials

**Setup & Configuration:**

- [3dMake Setup Guide](3dMake_All_Lessons.md) - Installation walkthrough
- [VSCode Setup Guide](3dMake_All_Lessons.md) - Accessibility-focused editor configuration
- [mdBook Navigation Guide](3dMake_All_Lessons.md) - How to navigate this curriculum

**Syntax & Commands:**

- [OpenSCAD Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - Complete syntax quick-reference
- [3DMake CLI Cheat Sheet](3DMake_Appendices_Complete.md#appendix-a) - All 3dm commands and options

**Materials & Safety:**

- [Filament Comparison Table](3DMake_Appendices_Complete.md#appendix-c) - Material selection guide
- [Safety Checklist](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) - Pre-print safety procedures
- [Maintenance Log](3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md) - Printer maintenance tracking

### When You're Stuck

**For Technical Issues:**

1. Check [Common Issues and Solutions](Backmatter_Complete.md#troubleshooting) - Comprehensive troubleshooting guide
2. Review [Diagnostic Checklist](Backmatter_Complete.md#troubleshooting) - Systematic problem diagnosis
3. Consult [Technical Reference](Backmatter_Complete.md#troubleshooting) - Advanced systems architecture and professional reference
4. Post in [OpenSCAD Discord](https://discord.gg/F2Nx2VxTB7) or [Reddit r/openscad](https://www.reddit.com/r/openscad/)
5. Visit your local makerspace for hands-on support

**For Accessibility Support:**

- Contact your NVDA/JAWS vendor directly for technical assistance
- Refer to the [Screen Reader Accessibility Guide](Setup_Accessibility_Complete.md#accessibility-guide)
- Review [Screen Reader Coding Tips (NVDA & JAWS)](3dMake_All_Lessons.md)
- Check the [Git Bash Screen Reader Guide](GitBash_Complete_Curriculum.md#gb-accessibility-guide) if using Git Bash

**For Design & Concept Questions:**

- Review [Student Glossary](Backmatter_Complete.md#student-glossary) for terminology clarification
- Check project-specific guides in lesson folders
- Consult the [Master Rubric](3DMake_Appendices_Complete.md#appendix-d) for assessment expectations

