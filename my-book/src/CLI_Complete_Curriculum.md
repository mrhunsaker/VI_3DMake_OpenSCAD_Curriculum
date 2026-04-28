# Foundation of Command Line Tools — Complete Curriculum

## Command-Line Fundamentals — Choose Your Path

Welcome! Before diving {{i:into}} {{hi:3D {{i:design}}}}3D {{i:design}} with {{i:OpenSCAD}}, {{i:you}}'ll master {{i:command}}-line fundamentals. This page will help {{i:you}} understand what {{i:command}}-line interfaces are and choose the best path for {{i:you}}.

## What is a Command-Line Interface (CLI)?

A {{i:command}}-line interface is a {{i:text}}-based way to control your computer by typing {{i:commands}} instead of clicking buttons. It's like sending written instructions to your computer.

### Why learn it?

- Speed: {{hi:Text {{i:commands}}}}Text {{i:commands}} are often faster than clicking through menus
- Precision: Exact control over what your computer does
- Accessibility: Perfect for screen readers - {{i:text}} is naturally readable
- Automation: Repeat tasks automatically
- {{hi:3D {{i:printing}}}}3D Printing: Essential for batch processing models and integrating tools

### Real-world example

Instead of:

1. Opening File Explorer (click)
2. Navigating folders (click, click, click)
3. Right-clicking a {{i:file}} (click)
4. Selecting "Copy" (click)
5. Navigating to destination (click, click)
6. Right-clicking (click)
7. Selecting "Paste" (click)

You type: `cp myfile.txt backup/` and press Enter. Done.

## Three Command-Line Options on {{i:Windows}}

{{i:Windows}} offers three ways to use the {{i:command}} line. All are accessible with screen readers. Here's how they compare:

### Option 1: {{i:Windows}} Command Prompt (CMD)

What it is: The original {{i:Windows}} {{i:command}}-line (1981-present)

Best for: Absolute beginners, maximum simplicity

Pros:

- Simple {{i:commands}} and syntax
- Minimal learning curve
- Easy to understand {{i:error}} messages
- Great for basic {{i:file}} operations
- Perfect entry point to {{i:command}}-line world

Cons:

- Limited advanced features
- Less powerful than alternatives
- No built-in piping (but available)
- Smaller ecosystem

Typical {{i:command}}:

```cmd
copy myfile.txt backup\
```

### Option 2: {{i:PowerShell}}

What it is: Microsoft's modern, powerful {{i:shell}} (2006-present)

Best for: Intermediate users, advanced automation

Pros:

- Very powerful for scripting
- Modern syntax and features
- Excellent for 3D {{i:printing}} automation
- Professional workflows
- Large community

Cons:

- Steeper learning curve than {{hi:CMD}}CMD
- More complex syntax
- More "wordy" {{i:commands}}
- Overkill for simple tasks

Typical {{i:command}}:

```powershell
Copy-Item -Path myfile.txt -Destination backup/
```

### Option 3: {{i:Git}} {{i:Bash}}

What it is: A Unix/Linux {{i:shell}} on {{i:Windows}} (runs bash inside {{i:Git}} for {{i:Windows}})

Best for: Programmers, users familiar with Linux, advanced users

Pros:

- Familiar if {{i:you}} know Linux/Unix
- Powerful piping and {{i:text}} processing
- Consistent with other platforms (macOS, Linux)
- Excellent for advanced workflows
- Industry-standard for developers

Cons:

- Requires {{i:Git}} installation
- Steeper learning curve
- Path syntax is different from native {{i:Windows}}
- Less integrated with {{i:Windows}} system tools
- May be "too much" for beginners

Typical {{i:command}}:

```bash
cp myfile.txt backup/
```

## Command Comparison Table

Here's how {{i:common}} tasks compare across the three options:

| Task                            | Command Prompt            | {{hi:{{i:PowerShell}}}}{{i:PowerShell}} | {{hi:{{i:Git}} {{i:Bash}}}}{{i:Git}} {{i:Bash}} |
| ------------------------------- | ------------------------- | --------------------------------------- | ----------------------------------------------- |
| Show current location           | `cd`                      | `pwd`                                   | `pwd`                                           |
| {{i:List}} {{i:files}}          | `dir /B`                  | `ls -n`                                 | `ls`                                            |
| Go to folder                    | `cd Documents`            | `cd Documents`                          | `cd Documents`                                  |
| Go up {{i:one}} level           | `cd ..`                   | `cd ..`                                 | `cd ..`                                         |
| Go home                         | `cd %USERPROFILE%`        | `cd ~`                                  | `cd ~`                                          |
| Create folder                   | `mkdir Projects`          | `mkdir Projects`                        | `mkdir Projects`                                |
| Create {{i:file}}               | `echo text > file.txt`    | `echo "text" > file.txt`                | `echo "text" > file.txt`                        |
| Copy {{i:file}}                 | `copy old.txt new.txt`    | `Copy-Item old.txt new.txt`             | `cp old.txt new.txt`                            |
| Move {{i:file}}                 | `move old.txt folder/`    | `Move-Item old.txt folder/`             | `mv old.txt folder/`                            |
| Delete {{i:file}}               | `del file.txt`            | `Remove-Item file.txt`                  | `rm file.txt`                                   |
| {{i:List}} with filter          | `dir /B *.txt`            | `ls *.txt`                              | `ls *.txt`                                      |
| Save {{i:output}} to {{i:file}} | `dir > list.txt`          | `ls > list.txt`                         | `ls > list.txt`                                 |
| Page through {{i:output}}       | `dir \| more`             | `ls \| more`                            | `ls \| less`                                    |
| Search in {{i:files}}           | `findstr "text" file.txt` | `Select-String "text" file.txt`         | `grep "text" file.txt`                          |
| Show {{i:file}} contents        | `type file.txt`           | `cat file.txt` or `Get-Content`         | `cat file.txt`                                  |
| Create {{i:script}}             | `.bat` {{i:files}}        | `.ps1` {{i:files}}                      | `.sh` {{i:files}}                               |
| Run {{i:script}}                | `script.bat`              | `.\script.ps1`                          | `./script.sh`                                   |

## Feature Comparison Table

| Feature                        | CMD                | {{i:PowerShell}} | {{i:Git}} {{i:Bash}} |
| ------------------------------ | ------------------ | ---------------- | -------------------- |
| Simplicity                     | Easiest            | Moderate         | Hardest              |
| Beginner-Friendly              | Best               | Good             | Challenging          |
| Power/Capability               | Basic              | Excellent        | Excellent            |
| {{i:Screen}} Reader Compatible | Perfect            | Perfect          | Perfect              |
| Linux/macOS Skills             | {{i:Windows}}-only | Some overlap     | Full overlap         |
| 3D Printing Automation         | Adequate           | Excellent        | Adequate             |
| Learning Curve                 | Gentle             | Moderate         | Steep                |
| Community Support              | Moderate           | Excellent        | Excellent            |
| {{i:Windows}} Integration      | Perfect            | Perfect          | Good                 |
| Installation Difficulty        | Built-in           | Built-in         | Requires {{i:Git}}   |

## Quick Learner Profile Test

Answer these questions to find your best match:

### Question 1: Experience Level

- A: I've never used a {{i:command}} line Easier paths better (CMD or {{i:PowerShell}})
- B: I've used terminals {{i:before}} {{i:Any}} path works
- C: I use macOS or Linux {{i:Git}} {{i:Bash}} most natural

### Question 2: What matters most?

- A: Simplicity and quick learning Choose CMD
- B: Power and advanced features Choose {{i:PowerShell}}
- C: Consistency across {{i:Windows}}/Mac/Linux Choose {{i:Git}} {{i:Bash}}

### Question 3: Future goals

- A: Just need to manage {{i:files}} for 3D {{i:printing}} CMD is fine
- B: Advanced automation and scripting {{i:PowerShell}} recommended
- C: Professional development workflows {{i:Git}} {{i:Bash}} best

### Question 4: Your main concern

- A: Don't want steep learning curve CMD
- B: Want industry-standard skills {{i:Git}} {{i:Bash}}
- C: Want Microsoft's modern tool {{i:PowerShell}}

## Recommendation by Goal

### Goal: "I want to learn the basics and get to 3D {{i:printing}} quickly"

#### Start with CMD (Command Prompt)

- Simplest syntax
- Fastest to get productive
- All core concepts transfer to others
- Can switch later if needed

[Start CMD Foundation — jump to Part 2 ↓](#{{i:part}}-2-cmd)

### Goal: "I want power and professional automation"

#### Start with {{i:PowerShell}}

- Microsoft's modern, recommended tool
- Professional-grade capabilities
- Better for complex 3D {{i:printing}} workflows
- Skills are in-demand

[Start {{i:PowerShell}} Foundation — jump to Part 1 ↓](#{{i:part}}-1-powershell)

### Goal: "I want skills that {{i:work}} on {{i:Windows}}, Mac, and Linux"

#### Start with {{i:Git}} {{i:Bash}}

- Unix/bash skills transfer everywhere
- Great preparation for professional development
- Consistent across all platforms
- Growing standard in 3D {{i:printing}} tools

[Start {{i:Git}} {{i:Bash}} Foundation — jump to Part 3 ↓](#{{i:part}}-3-gitbash)

## Can I Switch Paths Later?

Yes, absolutely! All three teach the same fundamental concepts:

- File {{i:navigation}} and organization
- Creating and managing {{i:files}}/folders
- Combining {{i:commands}} for powerful workflows
- Scripting and automation basics

Once {{i:you}} learn {{i:one}}, switching to another is quick. The concepts are identical; only the syntax changes.

Example: If {{i:you}} learn CMD {{i:first}}, then later want {{i:PowerShell}}'s power, {{i:you}}'ll find it easy. The {{i:command}} `cd Documents` works the same way in all three.

## Important: All Are Equally Accessible

### {{i:Screen}} readers {{i:work}} perfectly with all three

- Text-based by nature (perfect for {{i:NVDA}}, {{i:JAWS}})
- No mouse required
- Output is naturally readable
- Keyboard-only workflows

> [!NOTE]
> All three shells — CMD, {{i:PowerShell}}, and {{i:Git}} {{i:Bash}} — {{i:work}} perfectly with {{i:NVDA}}, {{i:JAWS}}, Dolphin SuperNova, and {{i:Windows}} Narrator. Don't let {{i:accessibility}} concerns influence your choice.

Don't let {{i:accessibility}} concerns influence your choice. All are fully accessible.

## Getting Started: Your Decision

Take a moment and choose:

### 1. I want the simplest path

[Command Prompt Foundation — jump to Part 2 ↓](#{{i:part}}-2-cmd)

- Time to {{i:first}} success: ~30 minutes
- Learning curve: Gentlest
- When to upgrade: Once {{i:you}}'re comfortable and want power

### 2. I want modern, powerful {{i:Windows}} tools

[{{i:PowerShell}} Foundation — jump to Part 1 ↓](#{{i:part}}-1-powershell)

- Time to {{i:first}} success: ~45 minutes
- Learning curve: Moderate
- Best for: Professional automation, 3D {{i:printing}} workflows

### 3. I want Unix/Linux skills that {{i:work}} everywhere

[{{i:Git}} {{i:Bash}} Foundation — jump to Part 3 ↓](#{{i:part}}-3-gitbash)

- Time to {{i:first}} success: ~1 hour
- Learning curve: Steeper but rewarding
- Best for: Professional development, cross-platform {{i:work}}

## Not Sure? Here's What Most People Do

If {{i:you}}'re reading this and unsure:

> [!TIP]
> Start with Command Prompt (CMD). It's the gentlest introduction, and {{i:you}}'ll be productive quickly. You {{i:can}} always switch to {{i:PowerShell}} or {{i:Git}} {{i:Bash}} later — the concepts transfer completely.

After completing CMD:

- Want more power? {{i:PowerShell}} is next
- Want Linux skills? {{i:Git}} {{i:Bash}} is next
- Want to stick with CMD? You have all the skills {{i:you}} need

## FAQ

Q: Do I need to pick now and stick with it forever?
A: No. Start with {{i:one}}, try another, switch {{i:between}} them. They're tools. Use what works.

Q: Will my 3D {{i:printing}} skills {{i:work}} in all three?
A: Yes. Once {{i:you}} understand the concepts ({{i:file}} organization, automation, piping), they apply everywhere.

Q: If I pick CMD, {{i:can}} I learn {{i:PowerShell}} later?
A: Absolutely. Many learners do exactly this. CMD gets {{i:you}} productive; {{i:PowerShell}} adds power.

Q: Is {{i:Git}} {{i:Bash}} harder?
A: Slightly, due to path syntax and Unix conventions. But not dramatically. If {{i:you}} take {{i:time}} with it, {{i:you}}'ll learn it.

Q: Which do professional 3D {{i:printing}} developers use?
A: Mix of all three, but {{i:Git}} {{i:Bash}}/Linux is most {{i:common}} in cross-platform teams.

## Ready to Begin?

Choose your path above and click to start. Remember:

- Each lesson includes practice exercises

  > [!TIP]
  > You {{i:can}}'t break your computer by typing a wrong {{i:command}}. The worst that happens is an {{i:error}} message. Mistakes are learning opportunities — just read the message and try again.

- You {{i:can}}'t break anything
- Mistakes are learning opportunities
- Ask for help if stuck

Let's get {{i:you}} comfortable with the {{i:command}} line!

Other {{i:Screen}} Readers

## Dolphin SuperNova (commercial) and {{i:Windows}} Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://{{i:support}}.microsoft.com/narrator](https://{{i:support}}.microsoft.com/narrator) for vendor documentation.

**Last Updated:** February 2026
**Total Duration:** ~30–45 hours per track (screen {{i:reader}} users)
**Target Users:** Anyone {{i:using}} a screen {{i:reader}} — {{i:NVDA}}, {{i:JAWS}}, Dolphin SuperNova, {{i:Windows}} Narrator

This combined curriculum covers three {{i:command}}-line environments taught in parallel. Each section follows the same lesson structure (Pre → 0 → 1 → 2 → 3 → 4 → 5 → 6 → Unit Exam) with {{i:shell}}-{{i:specific}} syntax and examples.

---

## Master Table of Contents

### Part 1 — {{i:PowerShell}}

| Section                                                                  | Title                                                                        | Time      |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | --------- |
| [{{i:Screen}} Reader Accessibility Guide](#ps-{{i:accessibility}}-guide) | {{i:NVDA}}, {{i:JAWS}}, and terminal {{i:accessibility}} {{i:reference}}     | 1.5 hrs   |
| [Lesson Pre: Your First Terminal](#ps-lesson-pre)                        | Opening {{i:PowerShell}}, {{i:first}} {{i:commands}}, basic {{i:navigation}} | 2–2.5 hrs |
| [Lesson 0: Getting Started](#ps-lesson-0)                                | Paths, shortcuts, tab completion                                             | 1.5 hrs   |
| [Lesson 1: Navigation](#ps-lesson-1)                                     | Moving around the {{i:file}} system confidently                              | 2–2.5 hrs |
| [Lesson 2: File and Folder Manipulation](#ps-lesson-2)                   | Create, {{i:copy}}, move, delete {{i:files}} and folders                     | 2.5–3 hrs |
| [Lesson 3: Input, Output, and Piping](#ps-lesson-3)                      | Chain {{i:commands}} together, redirect {{i:output}}                         | 2.5–3 hrs |
| [Lesson 4: Environment Variables and Aliases](#ps-lesson-4)              | Automate settings, {{i:create}} shortcuts                                    | 2–2.5 hrs |
| [Lesson 5: Filling in the Gaps](#ps-lesson-5)                            | Profiles, history, {{hi:Debugging}}debugging                                 | 2–2.5 hrs |
| [Lesson 6: Advanced Techniques](#ps-lesson-6)                            | Scripts, functions, loops, professional workflows                            | 4–4.5 hrs |
| [Unit Exam](#ps-unit-exam)                                               | Comprehensive assessment — Lessons 0 through 6                               | 60–90 min |

### Part 2 — {{i:Windows}} Command Prompt (CMD)

| Section                                                                   | Title                                                                   | Time      |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| [{{i:Screen}} Reader Accessibility Guide](#cmd-{{i:accessibility}}-guide) | {{i:NVDA}}, {{i:JAWS}}, Narrator, and SuperNova {{i:reference}} for CMD | 1.5 hrs   |
| [Lesson Pre: Your First Terminal](#cmd-lesson-pre)                        | Opening CMD, {{i:first}} {{i:commands}}, basic {{i:navigation}}         | 1.5–2 hrs |
| [Lesson 0: Getting Started](#cmd-lesson-0)                                | Paths, shortcuts, tab completion                                        | 1.5 hrs   |
| [Lesson 1: Navigation](#cmd-lesson-1)                                     | Moving around the {{i:file}} system confidently                         | 2–2.5 hrs |
| [Lesson 2: File and Folder Manipulation](#cmd-lesson-2)                   | Create, {{i:copy}}, move, delete {{i:files}} and folders                | 2.5–3 hrs |
| [Lesson 3: Input, Output, and Piping](#cmd-lesson-3)                      | Redirect {{i:output}}, chain {{i:commands}} with pipes                  | 2.5–3 hrs |
| [Lesson 4: Environment Variables and Aliases](#cmd-lesson-4)              | Automate settings, {{i:create}} doskey shortcuts                        | 2–2.5 hrs |
| [Lesson 5: Filling in the Gaps](#cmd-lesson-5)                            | Autorun {{i:scripts}}, history, debugging                               | 2–2.5 hrs |
| [Lesson 6: Advanced Techniques](#cmd-lesson-6)                            | Batch {{i:scripts}}, subroutines, loops, professional workflows         | 4–4.5 hrs |
| [Unit Exam](#cmd-unit-exam)                                               | Comprehensive assessment — Lessons 0 through 6                          | 60–90 min |

### Part 3 — {{i:Git}} {{i:Bash}}

| Section                                                                  | Title                                                                                    | Time           |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | -------------- |
| [{{i:Screen}} Reader Accessibility Guide](#gb-{{i:accessibility}}-guide) | {{i:NVDA}}, {{i:JAWS}}, Narrator, and SuperNova {{i:reference}} for {{i:Git}} {{i:Bash}} | 1–1.5 hrs      |
| [Tutorial: {{i:Git}} {{i:Bash}} Quick Start](#gb-tutorial)               | Prompt orientation, core {{i:commands}}, path concepts                                   | 30–45 min      |
| [Lesson Pre: Your First Terminal](#gb-lesson-pre)                        | Installing {{i:Git}} {{i:Bash}}, opening it, {{i:first}} {{i:commands}}                  | 1.5–2 hrs      |
| [Lesson 0: Getting Started](#gb-lesson-0)                                | Paths, `~`, `./`, `../`, tab completion                                                  | 20–30 min      |
| [Lesson 1: Navigation](#gb-lesson-1)                                     | `pwd`, `cd`, `ls` and flags, wildcards                                                   | 1 class period |
| [Lesson 2: File and Folder Manipulation](#gb-lesson-2)                   | `touch`, `mkdir`, `cp`, `mv`, `rm`, `rmdir`                                              | 30–45 min      |
| [Lesson 3: Input, Output, and Piping](#gb-lesson-3)                      | `echo`, `cat`, `>`, `>>`, `\|`, `clip`, `grep`                                           | 1 class period |
| [Lesson 4: Environment Variables and Aliases](#gb-lesson-4)              | `$VARNAME`, `PATH`, `which`, `alias`, `.bashrc`                                          | 30–45 min      |
| [Lesson 5: Filling in the Gaps](#gb-lesson-5)                            | `history`, `Ctrl+R`, `.bashrc`, `./`                                                     | 30–45 min      |
| [Lesson 6: Advanced Techniques](#gb-lesson-6)                            | {{i:Shell}} {{i:scripts}}, functions, loops, professional workflows                      | 4–4.5 hrs      |
| [Unit Exam](#gb-unit-exam)                                               | Comprehensive assessment — Lessons 0 through 6                                           | 60–90 min      |

---

## Quick Jump — By Lesson Across All Three Shells

| Lesson                                          | {{i:PowerShell}}                    | CMD                                   | {{i:Git}} {{i:Bash}}                                  |
| ----------------------------------------------- | ----------------------------------- | ------------------------------------- | ----------------------------------------------------- |
| Accessibility Guide                             | [PS](#ps-{{i:accessibility}}-guide) | [CMD](#cmd-{{i:accessibility}}-guide) | [{{i:Git}} {{i:Bash}}](#gb-{{i:accessibility}}-guide) |
| Lesson Pre                                      | [PS](#ps-lesson-pre)                | [CMD](#cmd-lesson-pre)                | [{{i:Git}} {{i:Bash}}](#gb-lesson-pre)                |
| Lesson 0: Getting Started                       | [PS](#ps-lesson-0)                  | [CMD](#cmd-lesson-0)                  | [{{i:Git}} {{i:Bash}}](#gb-lesson-0)                  |
| Lesson 1: Navigation                            | [PS](#ps-lesson-1)                  | [CMD](#cmd-lesson-1)                  | [{{i:Git}} {{i:Bash}}](#gb-lesson-1)                  |
| Lesson 2: File & Folder Manipulation            | [PS](#ps-lesson-2)                  | [CMD](#cmd-lesson-2)                  | [{{i:Git}} {{i:Bash}}](#gb-lesson-2)                  |
| Lesson 3: Input, Output & Piping                | [PS](#ps-lesson-3)                  | [CMD](#cmd-lesson-3)                  | [{{i:Git}} {{i:Bash}}](#gb-lesson-3)                  |
| Lesson 4: Environment {{hi:Variables}}Variables | [PS](#ps-lesson-4)                  | [CMD](#cmd-lesson-4)                  | [{{i:Git}} {{i:Bash}}](#gb-lesson-4)                  |
| Lesson 5: Filling in the Gaps                   | [PS](#ps-lesson-5)                  | [CMD](#cmd-lesson-5)                  | [{{i:Git}} {{i:Bash}}](#gb-lesson-5)                  |
| Lesson 6: Advanced Techniques                   | [PS](#ps-lesson-6)                  | [CMD](#cmd-lesson-6)                  | [{{i:Git}} {{i:Bash}}](#gb-lesson-6)                  |
| Unit Exam                                       | [PS](#ps-unit-exam)                 | [CMD](#cmd-unit-exam)                 | [{{i:Git}} {{i:Bash}}](#gb-unit-exam)                 |

---

<a id="part-1-powershell"></a>

# Part 1 — {{i:PowerShell}}

---

**Last Updated:** February 2026  
**Total Duration:** 30–45 hours of instruction and practice (for screen {{i:reader}} users)  
**Target Users:** Anyone {{i:using}} a screen {{i:reader}} ({{i:NVDA}}, {{i:JAWS}}, Dolphin SuperNova, {{i:Windows}} Narrator, or other)

_This single {{i:file}} contains the complete {{i:PowerShell}} Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional {{i:files}} are needed._

---

## Table of Contents

| Section                                                                  | Title                                                                        | Estimated Time |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | -------------- |
| [{{i:Screen}} Reader Accessibility Guide](#ps-{{i:accessibility}}-guide) | {{i:NVDA}}, {{i:JAWS}}, and terminal {{i:accessibility}} {{i:reference}}     | 1.5 hours      |
| [Lesson Pre: Your First Terminal](#ps-lesson-pre)                        | Opening {{i:PowerShell}}, {{i:first}} {{i:commands}}, basic {{i:navigation}} | 2–2.5 hours    |
| [Lesson 0: Getting Started](#ps-lesson-0)                                | Paths, shortcuts, tab completion                                             | 1.5 hours      |
| [Lesson 1: Navigation](#ps-lesson-1)                                     | Moving around the {{i:file}} system confidently                              | 2–2.5 hours    |
| [Lesson 2: File and Folder Manipulation](#ps-lesson-2)                   | Create, {{i:copy}}, move, delete {{i:files}} and folders                     | 2.5–3 hours    |
| [Lesson 3: Input, Output, and Piping](#ps-lesson-3)                      | Chain {{i:commands}} together, redirect {{i:output}}                         | 2.5–3 hours    |
| [Lesson 4: Environment Variables and Aliases](#ps-lesson-4)              | Automate settings, {{i:create}} shortcuts                                    | 2–2.5 hours    |
| [Lesson 5: Filling in the Gaps](#ps-lesson-5)                            | Profiles, history, debugging                                                 | 2–2.5 hours    |
| [Lesson 6: Advanced Techniques](#ps-lesson-6)                            | Scripts, functions, loops, professional workflows                            | 4–4.5 hours    |
| [Unit Exam](#ps-unit-exam)                                               | Comprehensive assessment — Lessons 0 through 6                               | 60–90 minutes  |

**Total:** approximately 30–45 hours including practice exercises

---

## How to Use This File

**If {{i:you}} have never used a terminal {{i:before}}:** read from the top in order. Do not skip lessons — {{i:each}} builds on the {{i:one}} {{i:before}} it.

**If {{i:you}} have used a terminal but not with a screen {{i:reader}}:** start with the Accessibility Guide, skim Lesson Pre, then continue from Lesson 0.

**If {{i:you}} are experienced with both:** jump directly to the lesson {{i:you}} need. Use the quiz at the end of {{i:each}} lesson to self-{{i:test}} {{i:before}} moving on.

**Reference while working:** the Accessibility Guide and Lesson 0 contain {{i:material}} {{i:you}} will return to throughout the curriculum. Keep a {{i:copy}} open or bookmark those sections.

---

## Curriculum Rules (Read These First)

**Rule 1 — Always know where {{i:you}} are.**  
Every session, {{i:first}} thing: `pwd`. If {{i:you}} don't know your path, {{i:you}}'ll get lost.

**Rule 2 — Check {{i:before}} {{i:you}} delete.**  
Before any `rm` {{i:command}}: `ls -n` to confirm what {{i:you}}'re about to remove.

**Rule 3 — Use `-n` with `ls`.**  
Always `ls -n` — never bare `ls`. The `-n` flag gives {{i:one}} {{i:name}} per line, which screen readers {{i:can}} follow.

**Rule 4 — When lost, redirect to a {{i:file}}.**  
If {{i:output}} is confusing: `command > output.txt` then `notepad.exe output.txt`. This always works.

**Rule 5 — Save everything {{i:you}} {{i:create}}.**  
Keep all practice {{i:files}} in a dedicated learning folder: `mkdir ~/PS_Learning`.

---

---

<a id="ps-accessibility-guide"></a>

# {{i:Screen}} Reader Accessibility Guide

---

Target Users: {{i:NVDA}}, {{i:JAWS}}, and other screen {{i:reader}} users  
Last Updated: 2026

This guide supports the {{i:PowerShell}} Foundation curriculum and helps screen {{i:reader}} users navigate and {{i:work}} efficiently with {{i:PowerShell}} on {{i:Windows}}.

## Table of Contents

1. [Getting Started with {{i:Screen}} Readers](#ps-getting-started)
2. [{{i:NVDA}}-Specific Tips](#ps-nvda-tips)
3. [{{i:JAWS}}-Specific Tips](#ps-jaws-tips)
4. [General Terminal Accessibility](#ps-general-terminal)
5. [Working with Long Output](#ps-long-{{i:output}})
6. [Keyboard Shortcuts Reference](#ps-shortcuts)
7. [Troubleshooting](#ps-troubleshooting)

<a id="ps-getting-started"></a>

## Getting Started with {{i:Screen}} Readers

### Which {{i:Screen}} Reader Should I Use?

{{i:NVDA}} is free and often recommended for {{i:new}} users; {{i:JAWS}} is a powerful commercial option. Also consider Dolphin SuperNova and {{i:Windows}} Narrator:

- Dolphin SuperNova: commercial speech, {{i:braille}} and magnification (check vendor docs for keyboard mappings).
- {{i:Windows}} Narrator: built {{i:into}} {{i:Windows}} and useful for quick access without installing third-party software.

### Before You Start

1. Start your screen {{i:reader}} {{i:before}} opening {{i:PowerShell}}.
2. Open {{i:PowerShell}} and listen for the window title and prompt.
3. If silent, press Alt+Tab to find the window.

### What is {{i:PowerShell}}?

{{i:PowerShell}} is the modern {{i:Windows}} {{i:shell}} and scripting {{i:environment}}. {{i:Common}} {{i:commands}} include `Get-ChildItem`, `Get-Content`, and `Out-File`. {{i:PowerShell}} provides richer objects and piping than CMD.

<a id="ps-nvda-tips"></a>

## {{i:NVDA}}-Specific Tips

{{i:NVDA}} is available from [https://www.nvaccess.org/](https://www.nvaccess.org/)

### Dolphin SuperNova

Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) — commercial option providing speech and magnification; consult vendor guides for features and {{i:commands}}.

### {{i:Windows}} Narrator

{{i:Windows}} Narrator: [https://{{i:support}}.microsoft.com/narrator](https://{{i:support}}.microsoft.com/narrator) — built-in Narrator has a different set of {{i:commands}}; it {{i:can}} be enabled via {{i:Windows}} Settings > Accessibility.

### Key Commands for {{i:PowerShell}}

| Command               | What It Does                                                      |
| --------------------- | ----------------------------------------------------------------- |
| {{i:NVDA}}+Home       | Read the current line (your {{i:command}} or {{i:output}})        |
| {{i:NVDA}}+Down Arrow | Read from cursor to end of screen                                 |
| {{i:NVDA}}+Up Arrow   | Read from top to cursor                                           |
| {{i:NVDA}}+Page Down  | Read next page                                                    |
| {{i:NVDA}}+Page Up    | Read previous page                                                |
| {{i:NVDA}}+F7         | Open the Review Mode viewer ({{i:can}} scroll through {{i:text}}) |

### Example: Reading Long Output

If `Get-ChildItem` produces many lines, redirect to a {{i:file}} and open it in Notepad:

```powershell
Get-ChildItem -Name > list.txt
notepad list.txt
```

`-Name` prints {{i:one}} item per line (screen {{i:reader}} friendly).

<a id="ps-jaws-tips"></a>

## {{i:JAWS}}-Specific Tips

{{i:JAWS}} is available from [https://www.freedomscientific.com/](https://www.freedomscientific.com/)

### Key Commands for {{i:PowerShell}}

| Command           | What It Does                     |
| ----------------- | -------------------------------- |
| Insert+Down Arrow | Read line by line downward       |
| Insert+Up Arrow   | Read line by line upward         |
| Insert+Page Down  | Read next page of {{i:text}}     |
| Insert+Page Up    | Read previous page of {{i:text}} |

### Example: Reading Long Output

1. Redirect: `Get-ChildItem -Name > list.txt`
2. Open Notepad: `notepad list.txt`
3. Use Insert+Ctrl+Down to read full contents.

<a id="ps-general-terminal"></a>

## General Terminal Accessibility

### Understanding the {{i:PowerShell}} Layout

{{i:PowerShell}} shows a title bar, content area, and a prompt that looks like:

```powershell
PS C:\Users\YourName>
```

### Navigation Sequence

1. {{i:Screen}} {{i:reader}} announces the title
2. Then it announces the prompt line
3. Anything above prompt is prior {{i:output}}

<a id="ps-long-output"></a>

## Working with Long Output

### Solution 1: Redirect to a File

```powershell
Get-ChildItem -Name > list.txt
notepad list.txt
```

### Solution 2: Use Pagination

```powershell
Get-Content largefile.txt | more
```

### Solution 3: Filter Output

```powershell
Get-ChildItem -Name | Where-Object { $_ -like "*.scad" }
```

### Solution 4: Count Before Displaying

```powershell
(Get-ChildItem -Name).Count
```

<a id="ps-shortcuts"></a>

## Keyboard Shortcuts Reference

| Key        | Action                                |
| ---------- | ------------------------------------- |
| Up Arrow   | Show previous {{i:command}}           |
| Down Arrow | Show next {{i:command}}               |
| Tab        | Auto-complete {{i:file}}/folder names |
| Home       | Jump to start of line                 |
| End        | Jump to end of line                   |
| Ctrl+C     | Stop {{i:command}}                    |
| Enter      | Run {{i:command}}                     |

<a id="ps-troubleshooting"></a>

## Troubleshooting

### Problem: "I Can't Hear the Output"

1. Redirect to {{i:file}} and open in Notepad.
2. Use End to jump to the end of {{i:text}}.

### Problem: "Tab Completion Isn't Working"

1. Type some characters {{i:before}} Tab.

### Problem: "Command Not Found"

1. Use `Get-Command programname` to check availability.

## Pro Tips

1. Use `Get-ChildItem -Name` for {{i:one}}-per-line listings.
2. Use `Out-File -FilePath list.txt` to capture {{i:output}} with encoding options.

## Recommended Workflow

1. `Set-Location` (or `cd`) to the project folder
2. `Get-ChildItem -Name` to list {{i:files}}
3. Redirect large {{i:output}} to {{i:files}} and open in Notepad

## Additional Resources

- {{i:NVDA}} Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- {{i:JAWS}} Documentation: [https://www.freedomscientific.com/{{i:support}}/](https://www.freedomscientific.com/{{i:support}}/)
- {{i:PowerShell}} Documentation: [https://docs.microsoft.com/powershell](https://docs.microsoft.com/powershell)
- {{i:NVDA}} Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- {{i:JAWS}} Documentation: [https://www.freedomscientific.com/{{i:support}}/](https://www.freedomscientific.com/{{i:support}}/)
- Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)
- {{i:Windows}} Narrator: [https://{{i:support}}.microsoft.com/narrator](https://{{i:support}}.microsoft.com/narrator)

---

<a id="ps-lesson-pre"></a>

# Lesson Pre: Your First Terminal

---

Duration: 1.5-2 hours (for screen {{i:reader}} users)  
Prerequisites: None - this is the starting point  
Accessibility Note: This lesson is designed specifically for screen {{i:reader}} users ({{i:NVDA}}, {{i:JAWS}})

## What is a Terminal?

A terminal (also called a {{i:command}} line or {{i:shell}}) is a {{i:text}}-based interface where {{i:you}} type {{i:commands}} instead of clicking buttons. Think of it like sending written instructions to your computer instead of pointing and clicking.

Why learn this?

- Faster and more precise {{i:work}} (especially for 3D {{i:printing}} {{i:scripts}} and automation)
- Essential for programming and {{i:using}} tools like {{i:OpenSCAD}}
- Accessibility: Many {{i:command}} line tools {{i:work}} perfectly with screen readers
- Scripting: Automate repetitive tasks

## Opening {{i:PowerShell}} for the First Time

### {{i:3DMake}}: Your First Real-World Goal

**{{i:3DMake}}** ([github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)) is a free, {{i:accessibility}}-{{i:first}} {{i:command}}-line tool for designing and 3D-{{i:printing}} models entirely from the terminal — no mouse required. Every {{i:PowerShell}} skill in this curriculum directly supports a real {{i:3DMake}} {{i:workflow}}.

Here is the end goal — {{i:one}} {{i:command}} that builds your {{i:OpenSCAD}} model, slices it, and sends it to the {{i:printer}}:

```powershell
# Navigate to your project folder
cd ~/Documents/3d_projects/my_cube

# Build, slice, and print in a single command
3dm build slice print
```

Keep this goal in mind as {{i:you}} {{i:work}} through {{i:each}} lesson.

## Opening {{i:PowerShell}} for the First Time

### On {{i:Windows}}

Method 1: Search (Easiest)

1. Press the {{i:Windows}} key alone
2. You should hear "Search"
3. Type: `PowerShell`
4. You'll hear search results appear
5. Press Enter to open the {{i:first}} result ({{i:Windows}} {{i:PowerShell}})
6. {{i:PowerShell}} will open in a {{i:new}} window

Method 2: Using the Start Menu

1. Press {{i:Windows}} key + X (opens the Quick Link menu)
2. Look for "{{i:Windows}} {{i:PowerShell}}" or "Terminal"
3. Press Enter

Method 3: From File Explorer

1. Open File Explorer
2. Navigate to any folder
3. In the menu bar, select "File" -> "Open {{i:Windows}} {{i:PowerShell}} here"
4. {{i:PowerShell}} opens in that folder location

### First Connection: Understanding the Prompt

When {{i:PowerShell}} opens, your screen {{i:reader}} will announce the window title and then the prompt. The prompt is where {{i:you}} type {{i:commands}}.

What {{i:you}}'ll hear:

```
PS C:\Users\YourName>
```

What this means:

- `PS` = "{{i:PowerShell}}" indicator
- `C:\Users\YourName` = Your current location (the "path")
- `>` = The prompt is ready for your input

> [!IMPORTANT]
> Your cursor is blinking right after the `>`. This is where {{i:you}} type.

## Your First Commands ({{i:Screen}} Reader Edition)

### Command 1: "Where Am I?" - `pwd`

What it does: Tells {{i:you}} your current location

Type this:

```powershell
pwd
```

Press Enter

What {{i:you}}'ll hear:
Your screen {{i:reader}} will announce the current path, something like:

```
C:\Users\YourName
```

Understanding paths:

- Paths show your location in the {{i:file}} system (like a mailing address)
- {{i:Windows}} paths use backslashes: `C:\Users\YourName\Documents`
- Think of it like folders inside folders: `C:\` (main drive) -> `Users` -> `YourName` -> `Documents`

### Command 2: "What's Here?" - `ls -n`

What it does: Lists all {{i:files}} and folders in your current location. The `-n` flag makes it screen-{{i:reader}} friendly (names only, {{i:one}} per line)

Type this:

```powershell
ls -n
```

Press Enter

What {{i:you}}'ll hear:
Your screen {{i:reader}} will announce {{i:each}} {{i:file}} and folder {{i:name}}, {{i:one}} per line:

```
Desktop
Documents
Downloads
Music
Pictures
...
```

Why `-n`?

- Without `-n`, {{i:PowerShell}} shows {{i:files}} in columns (hard to read with a screen {{i:reader}})
- With `-n`, {{i:each}} {{i:file}}/folder is on its own line (perfect for screen readers)

### Command 3: "Go There" - `cd Documents`

What it does: Changes your location (navigates to a folder)

Type this:

```powershell
cd Documents
```

Press Enter

What {{i:you}}'ll hear:
The prompt changes to show your {{i:new}} location. You might hear something like:

```
PS C:\Users\YourName\Documents>
```

Practice {{i:navigation}}:

1. Run `pwd` to confirm {{i:you}}'re in Documents
2. Run `ls -n` to see what {{i:files}} are in Documents
3. Try going back: `cd ..` (the `..` means "go up {{i:one}} level")
4. Run `pwd` again to confirm
5. Go back to Documents: `cd Documents`

## Reading {{i:Screen}} Reader Output (Critical Skills)

### Dealing with Long Lists

When {{i:you}} {{i:run}} `ls -n` in a folder with many {{i:files}}, the list might be very long. Your screen {{i:reader}} might announce 50+ items rapidly.

Solution 1: Save to a File

```powershell
ls -n > list.txt
notepad.exe list.txt
```

This saves the list to a {{i:file}} and opens it in Notepad where {{i:you}} {{i:can}} read it more slowly.

Solution 2: Search Within the Output

```powershell
ls -n | findstr "search-term"
```

Example: If {{i:you}}'re looking for {{i:files}} containing "scad", type:

```powershell
ls -n | findstr "scad"
```

### Navigating Tab Completion

One of the most powerful screen {{i:reader}} tricks is Tab completion:

How it works:

1. Type the {{i:first}} few letters of a folder or {{i:file}} {{i:name}}
2. Press Tab
3. {{i:PowerShell}} automatically completes the rest

Example:

1. You're in `C:\Users\YourName>`
2. Type: `cd Doc`
3. Press Tab
4. {{i:PowerShell}} auto-completes it to: `cd Documents`
5. Press Enter to go there

With a screen {{i:reader}}:

1. As {{i:you}} type `Doc`, your screen {{i:reader}} announces {{i:each}} letter
2. When {{i:you}} press Tab, {{i:PowerShell}} types the rest and your screen {{i:reader}} announces the full {{i:command}}
3. This is much faster than typing the whole thing

## Creating and Editing Files

### Create a Simple File

Type this:

```powershell
echo "Hello, PowerShell!" > hello.txt
```

What this does:

- `echo` sends {{i:text}} to the screen (or {{i:file}})
- `"Hello, PowerShell!"` is the {{i:text}}
- `>` redirects it to a {{i:file}} called `hello.txt`

### Read the File Back

Type this:

```powershell
cat hello.txt
```

What {{i:you}}'ll hear:
Your screen {{i:reader}} announces:

```
Hello, PowerShell!
```

### Open and Edit the File

Type this:

```powershell
notepad.exe hello.txt
```

This opens the {{i:file}} in Notepad where {{i:you}} {{i:can}} edit it with your screen {{i:reader}}.

## Essential Keyboard Shortcuts

These {{i:work}} in {{i:PowerShell}} and are crucial for screen {{i:reader}} users:

| Key Combination | What It Does                                                       |
| --------------- | ------------------------------------------------------------------ |
| Up Arrow        | Shows your previous {{i:command}} (press again to go further back) |
| Down Arrow      | Shows your next {{i:command}} (if {{i:you}} went back)             |
| Tab             | Auto-completes folder/{{i:file}} names                             |

> [!IMPORTANT]
> **Ctrl+C** stops any running {{i:command}} immediately. If a {{i:command}} seems frozen or is producing endless {{i:output}}, press Ctrl+C to regain control of the prompt.

| Ctrl+C | Stops a running {{i:command}} |
| Ctrl+L | Clears the screen |
| Enter | Runs the {{i:command}} |

{{i:Screen}} {{i:reader}} tip: These all {{i:work}} perfectly with your screen {{i:reader}}. Try them!

## {{i:Screen}} Reader-Specific Tips

### {{i:NVDA}} Users

1. Reading Command Output:
   - Use {{i:NVDA}}+Home to read the current line
   - Use {{i:NVDA}}+Down Arrow to read to the end of the screen
   - Use {{i:NVDA}}+Page Down to read the next page

2. Reviewing Text:
   - Use {{i:NVDA}}+Shift+Page Up to review {{i:text}} above

### {{i:JAWS}} Users

1. Reading Output:
   - Use Insert+Down Arrow to read line-by-line
   - Use Insert+Page Down to read by page
   - Use Insert+End to jump to the end of {{i:text}}

2. Reading All Text:
   - Use Insert+Down Arrow repeatedly
   - Or use Insert+Ctrl+Down to read to the end

### {{i:Common}} Issue: "I Can't Hear the Output"

Problem: You {{i:run}} a {{i:command}} but don't hear the {{i:output}}

Solutions:

1. Make sure your cursor is at the prompt (try pressing End or Ctrl+End)
2. Use Up Arrow to go back to your previous {{i:command}} and review it
3. Try redirecting to a {{i:file}}: `command > output.txt` then open the {{i:file}}
4. In {{i:NVDA}}: Try pressing {{i:NVDA}}+F7 to open the Review Mode viewer

## Practice Exercises

Complete these in order. Take your {{i:time}} with {{i:each}} {{i:one}}:

### Exercise 1: Basic Navigation

1. Open {{i:PowerShell}}
2. Run `pwd` and note your location
3. Run `ls -n` and listen to what's there
4. Try `cd Documents` or another folder
5. Run `pwd` to confirm your {{i:new}} location
6. Run `ls -n` in this {{i:new}} location

Goal: You should be comfortable knowing where {{i:you}} are and what's around {{i:you}}

### Exercise 2: Using Tab Completion

1. In your home directory, type `cd D` (just the letter D)
2. Press Tab
3. {{i:PowerShell}} should auto-complete to a folder starting with D
4. Repeat with other folder names
5. Try typing a longer {{i:name}}: `cd Down` and Tab to `Downloads`

Goal: Tab completion should feel natural

### Exercise 3: Creating and Viewing Files

1. Create a {{i:file}}: `echo "Test content" > test.txt`
2. View it: `cat test.txt`
3. Create another: `echo "Line 2" > another.txt`
4. {{i:List}} both: `ls -n`

Goal: You understand {{i:create}}, view, and list operations

### Exercise 4: Going Up Levels

1. Navigate {{i:into}} several folders: `cd Documents`, then `cd folder1`, etc.
2. From deep inside, use `cd ..` multiple times to go back up
3. After {{i:each}} `cd ..`, {{i:run}} `pwd` to confirm your location

Goal: You understand relative {{i:navigation}} with `..`

### Exercise 5: Redirecting Output

1. Create a list: `ls -n > directory_list.txt`
2. Open it: `notepad.exe directory_list.txt`
3. Read it with your screen {{i:reader}}
4. Close Notepad
5. Verify the {{i:file}} exists: `ls -n | findstr "directory"`

Goal: You {{i:can}} save long outputs to {{i:files}} for easier reading

## Checkpoint Questions

After completing this lesson, {{i:you}} should be able to answer:

1. What does `pwd` do?
2. What does `ls -n` do?
3. Why do we use `-n` with `ls`?
4. What path are {{i:you}} in right now?
5. How do {{i:you}} navigate to a {{i:new}} folder?
6. How do {{i:you}} go up {{i:one}} level?
7. What's the Tab key for?
8. What does `echo "text" > file.txt` do?
9. How do {{i:you}} read a {{i:file}} back?
10. How do {{i:you}} stop a {{i:command}} that's running?

You should be able to answer all 10 with confidence {{i:before}} moving to Lesson 0.

## {{i:Common}} Questions

Q: Do I need to use {{i:PowerShell}}? Can I use Command Prompt (cmd.exe)?
A: {{i:PowerShell}} is more powerful and works better with modern tools. We recommend {{i:PowerShell}}, but Command Prompt basics are similar.

> [!TIP]
> If your screen {{i:reader}} isn't announcing terminal {{i:output}}, use `command > file.txt` to save {{i:output}} to a {{i:file}}, then open it with `notepad.exe file.txt` for reliable reading. This trick works with all four screen readers throughout the curriculum.

Q: Why is my screen {{i:reader}} not reading the {{i:output}}?
A: This is {{i:common}}. Use `command > file.txt` to save {{i:output}} to a {{i:file}}, then open it with Notepad for reliable reading.

Q: What if I type something wrong?
A: Just press Enter and {{i:you}}'ll see an {{i:error}} message. Type the correct {{i:command}} on the next line. No harm done!

Q: How do I get help with a {{i:command}}?
A: Type `Get-Help command-name` (we'll cover this in Lesson 0)

Q: Can I make {{i:PowerShell}} more accessible?
A: Yes! We'll cover customization in Lesson 5.

## Next Steps

Once {{i:you}}'re comfortable with these basics:

- Move to Lesson 0: Getting Started for deeper path understanding
- Then continue through Lessons 1–5 for full terminal mastery

## Resources

- Microsoft {{i:PowerShell}} Docs: [https://docs.microsoft.com/powershell/](https://docs.microsoft.com/powershell/)
- {{i:NVDA}} {{i:Screen}} Reader: [https://www.nvaccess.org/](https://www.nvaccess.org/)
- {{i:JAWS}} {{i:Screen}} Reader: [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- {{i:Windows}} Terminal Accessibility: [https://docs.microsoft.com/windows/terminal/](https://docs.microsoft.com/windows/terminal/)

<a id="ps-troubleshooting"></a>

## Troubleshooting

| Issue                       | Solution                                                                                     |
| --------------------------- | -------------------------------------------------------------------------------------------- |
| {{i:PowerShell}} won't open | Try searching {{i:Windows}}, or right-click a folder and select "Open {{i:PowerShell}} here" |
| Can't hear the {{i:output}} | Try redirecting to a {{i:file}}: `command > output.txt`                                      |
| Tab completion not working  | Make sure {{i:you}} typed at least {{i:one}} character {{i:before}} pressing Tab             |
| Command not found           | Make sure {{i:you}} spelled it correctly; try `Get-Command` to see available {{i:commands}}  |
| Stuck in a {{i:command}}    | Press Ctrl+C to stop it                                                                      |

Still stuck? The checkpoint questions and exercises are your best teacher. Work through them multiple times until comfortable.

Other {{i:Screen}} Readers

Dolphin SuperNova (commercial) and {{i:Windows}} Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://{{i:support}}.microsoft.com/narrator](https://{{i:support}}.microsoft.com/narrator) for vendor documentation.

---

<a id="ps-lesson-0"></a>

# Lesson 0: Getting Started — Layout, Paths, and the {{i:Shell}}

---

Estimated {{i:time}}: 20-30 minutes

## Learning Objectives

- Launch {{i:PowerShell}} and locate the prompt
- Understand path notation and shortcuts (`~`, `./`, `../`)
- Use tab completion to navigate quickly

## Materials

- Computer with {{i:PowerShell}}
- Editor (Notepad/VS Code)

## Step-by-step Tasks

1. Open {{i:PowerShell}} and note the prompt (it includes the current path).
2. Run `pwd` and say or note the printed path.
3. Use `ls -n` to list names in your home directory.
4. Practice `cd Documents`, `cd ../` and `cd ~` until comfortable.
5. Try tab-completion: type `cd ~/D` and press Tab.

## Checkpoints

- Confirm {{i:you}} {{i:can}} state your current path and move to `Documents`.

## Quiz - Lesson PS.0

## {{i:3DMake}} Quick-Start: Your First Real Project

You now know enough {{i:PowerShell}} to set up a real {{i:3DMake}} project. Do this now — it is the fastest path to a printed object.

**Step 1 — Download and {{i:run}} the {{i:3DMake}} setup wizard:**

```powershell
# Go to your Downloads folder (where you extracted 3dmake_windows.zip)
cd ~/Downloads/3dmake

# Run the guided setup (answer the questions about your printer)
./3dm setup
```

**Step 2 — Create your {{i:first}} project:**

```powershell
# Create a folder for all your 3D projects
mkdir ~/Documents/3d_projects

# Create your first project folder and initialize it
mkdir ~/Documents/3d_projects/my_cube
cd ~/Documents/3d_projects/my_cube
3dm new
```

**Step 3 — Confirm the project structure:**

```powershell
# You should see three items: src, build, and 3dmake.toml
ls -n
```

You just used `mkdir`, `cd`, and `ls -n` on a real project. You are ready to {{i:print}}.

## Checkpoints

- Confirm {{i:you}} {{i:can}} state your current path and move to `Documents`.

## Quiz - Lesson PS.0

1. What is a path?
2. What does `~` mean?
3. How do {{i:you}} autocomplete a path?
4. How do {{i:you}} go up {{i:one}} directory?
5. What {{i:command}} lists only names (`ls` flag)?
6. True or False: On {{i:Windows}}, {{i:PowerShell}} uses backslashes (`\`) in paths, but forward slashes (/) are also accepted.
7. Explain the {{i:difference}} {{i:between}} an absolute path and a relative path.
8. If {{i:you}} are in `C:\Users\YourName\Documents` and {{i:you}} type `cd ../`, where do {{i:you}} end up?
9. What happens when {{i:you}} press Tab while typing a folder {{i:name}} in {{i:PowerShell}}?
10. Describe a practical reason why understanding paths is important for a 3D {{i:printing}} {{i:workflow}}.
11. What does `./` mean in a path, and when would {{i:you}} use it?
12. If a folder path contains spaces (e.g., `Program Files`), how do {{i:you}} navigate to it with `cd`?
13. Explain what the prompt `PS C:\Users\YourName>` tells {{i:you}} about your current state.
14. How would {{i:you}} navigate to your home directory from any location {{i:using}} a single {{i:command}}?
15. What is the advantage of {{i:using}} relative paths (like `../`) versus absolute paths in automation {{i:scripts}}?

## Extension Problems

1. Create a nested folder and practice `cd` {{i:into}} it by typing partial names and {{i:using}} Tab.
2. Use `ls -n -af` to list only {{i:files}} in a folder.
3. Save `pwd` {{i:output}} to a {{i:file}} and open it in Notepad.
4. Try `cd` {{i:into}} a folder whose {{i:name}} contains spaces; observe how quotes are handled.
5. Create a short note {{i:file}} and open it from {{i:PowerShell}}.
6. Build a folder structure that mirrors your project organization; navigate to {{i:each}} level and document the path.
7. Create a {{i:script}} that prints your current path and the total number of {{i:files}} in it; {{i:run}} it from different locations.
8. Investigate the special paths (e.g., `$HOME`, `$PSScriptRoot`); {{i:write}} down what {{i:each}} contains and when {{i:you}}'d use them.
9. Compare absolute vs. relative paths by navigating to the same folder {{i:using}} {{i:each}} method; explain which is easier for automation.
10. Create a {{i:PowerShell}} function that changes to a frequently-used folder and lists its contents in {{i:one}} {{i:command}}; {{i:test}} it from different starting locations.
11. Navigate to three different locations and at {{i:each}} {{i:one}} note the prompt, the path from `pwd`, and verify {{i:you}} understand what {{i:each}} shows.
12. Create a complex folder tree (at least 5 levels deep) and navigate it {{i:using}} only relative paths; verify your location at {{i:each}} step.
13. Document all shortcuts {{i:you}} know (`~`, `./`, `../`, `$HOME`) and demonstrate {{i:each}} {{i:one}} works as expected.
14. Write a guide for a peer on how to understand the {{i:PowerShell}} prompt and path notation without {{i:using}} GUI {{i:file}} explorer.
15. Create a troubleshooting flowchart: if someone says "I don't know where I am," what {{i:commands}} do {{i:you}} give them to find out?

## References

- Microsoft. (2024). _{{i:PowerShell}} scripting overview and documentation_. [https://learn.microsoft.com/powershell/scripting/overview](https://learn.microsoft.com/powershell/scripting/overview)
- Microsoft. (2024). _Filesystem {{i:navigation}} in {{i:PowerShell}}_. [https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/navigate-the-filesystem](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/navigate-the-filesystem)
- Microsoft. (2024). _Accessibility features in {{i:PowerShell}} ISE_. [https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/{{i:accessibility}}-in-windows-powershell-ise](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/{{i:accessibility}}-in-windows-powershell-ise)

## Helpful Resources

- [{{i:PowerShell}} Basics - Microsoft Learn](https://learn.microsoft.com/powershell/scripting/overview)
- [Filesystem Navigation Guide](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/navigate-the-filesystem)
- [Understanding Path Notation](https://poshcode.gitbook.io/powershell-faq/src/getting-started/filesystem-{{i:navigation}})
- [Tab Completion Reference](https://learn.microsoft.com/powershell/{{i:module}}/psreadline/about/about_psreadline_functions)
- [Accessibility in {{i:PowerShell}} ISE](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/{{i:accessibility}}-in-windows-powershell-ise)

---

<a id="ps-lesson-1"></a>

# Lesson 1: Navigation — Moving Around Your File System

---

Duration: 1 class period  
Prerequisite: Lesson 0 (Getting Started)

Learning Objectives
By the end of this lesson, {{i:you}} will be able to:

- Use `pwd` to {{i:print}} your current location
- Use `cd` to move {{i:between}} directories
- Use `ls` (and its flags) to list {{i:files}} and folders
- Use wildcards `*` and `?` to filter listings
- Navigate relative vs. absolute paths
- Search for {{i:files}} by {{i:name}} and extension

Materials

- {{i:PowerShell}}
- Text editor (Notepad or {{hi:VS Code}}VS Code)

## Commands Covered in This Lesson

| Command          | What It Does                                                   |
| ---------------- | -------------------------------------------------------------- |
| `pwd`            | Print Working Directory - shows where {{i:you}} are            |
| `cd path`        | Change Directory - move to a {{i:new}} location                |
| `ls`             | {{i:List}} - shows {{i:files}} and folders in current location |
| `ls -n`          | {{i:List}} names only (screen {{i:reader}} friendly)           |
| `ls -n -af`      | {{i:List}} names of {{i:files}} only                           |
| `ls -n -ad`      | {{i:List}} names of directories only                           |
| `ls *.extension` | {{i:List}} {{i:files}} matching a pattern                      |

## `pwd` - Where Am I?

Type `pwd` and press `Enter`. {{i:PowerShell}} prints the full path to your current location.

```powershell
pwd
# Output: C:\Users\YourName
```

When to use: Always {{i:run}} this if {{i:you}}'re unsure of your current location.

## `cd` - Changing Directories

`cd` stands for "change directory."

```powershell
# Go to Documents
cd Documents
# Go up one level to parent directory
cd ..
# Go to home directory
cd ~
# Go to a specific path
cd C:\Users\YourName\Documents\3D_Projects
```

## `ls` - Listing Files and Folders

Use `ls -n` for screen {{i:reader}} compatibility.

```powershell
# List all files and folders (names only)
ls -n
# List only files (no folders)
ls -n -af
# List only folders (no files)
ls -n -ad
```

## Wildcards - Finding Files by Pattern

Wildcards help {{i:you}} find {{i:files}} without typing the full {{i:name}}.

`*` (asterisk) matches any number of characters:

```powershell
# List all .scad files
ls -n *.scad
# List all files starting with "part"
ls -n part*
# List all files ending with "_final"
ls -n *_final*
```

`?` (question mark) matches exactly {{i:one}} character:

```powershell
# Find files like model1.scad, model2.scad (but not model12.scad)
ls -n model?.scad
```

## Step-by-step Practice

## {{i:3DMake}} in Practice: Navigating a Project

Navigation {{i:commands}} are exactly what {{i:you}} need to explore and manage {{i:3DMake}} projects:

```powershell
# Go to your project root
cd ~/Documents/3d_projects/my_cube

# See the project layout: src/, build/, 3dmake.toml
ls -n

# Enter the source folder where your .scad model files live
cd src
ls -n

# Open the main model in your text editor
3dm edit-model

# Go back to project root, then check the build output
cd ..
cd build
ls -n *.stl        # list any STL files already built

# Return to project root
cd ..

# Use wildcards to find all projects with "cube" in the name
ls -n ~/Documents/3d_projects/*cube*
```

Tab completion makes {{i:navigation}} fast: type `cd ~/Doc` and press Tab.

## Step-by-step Practice

1. Run `pwd` and confirm your location
2. Move to `Documents`: `cd Documents`
3. Confirm {{i:you}} moved: `pwd`
4. {{i:List}} {{i:files}} and folders: `ls -n`
5. {{i:List}} only {{i:files}}: `ls -n -af`
6. Go back up: `cd ..`
7. Search for {{i:files}}: `ls -n *.txt`

## Checkpoints

After this lesson, {{i:you}} should be able to:

- [ ] Navigate to any folder {{i:using}} `cd`
- [ ] Confirm your location with `pwd`
- [ ] {{i:List}} {{i:files}} and folders with `ls -n`
- [ ] Use wildcards to find {{i:files}} by pattern
- [ ] Move {{i:between}} absolute and relative paths confidently

## Quiz - Lesson PS.1

1. What does `pwd` show?
2. How do {{i:you}} list directories only with `ls`?
3. What wildcard matches any number of characters?
4. How do {{i:you}} list {{i:files}} with the `.scad` extension?
5. Give an example of an absolute path and a relative path.
6. True or False: The `*` wildcard matches exactly {{i:one}} character.
7. Explain the {{i:difference}} {{i:between}} `ls -n` and `ls -n -ad`.
8. Write a {{i:command}} that would list all `.txt` {{i:files}} in your Documents folder {{i:using}} a wildcard.
9. How would {{i:you}} search for {{i:files}} containing "{{i:part}}" in their {{i:name}} across multiple {{i:files}}?
10. Describe a practical scenario where {{i:using}} wildcards saves {{i:time}} in a 3D {{i:printing}} {{i:workflow}}.
11. What happens when {{i:you}} use `ls -n part?.scad` versus `ls -n part*.scad`?
12. How would {{i:you}} navigate to a folder whose {{i:name}} contains both spaces and special characters?
13. If {{i:you}}'re in `/Documents/Projects/3D` and {{i:you}} want to go to `/Documents/Resources`, what {{i:command}} would {{i:you}} use?
14. Write a {{i:command}} sequence that navigates to the Downloads folder, lists only {{i:files}}, then returns to home.
15. Explain the purpose of {{i:using}} `ls -n -af` specifically in a screen {{i:reader}} context.

## Extension Problems

1. Write a {{i:one}}-line {{i:script}} that lists `.scad` {{i:files}} and saves to `scad_list.txt`.
2. Use `ls -n ~/Documents | more` to page through long listings.
3. Combine `ls` with `Select-String` to search for a filename pattern.
4. Create a shortcut alias in the session for a long path and {{i:test}} it.
5. Practice tab-completion in a directory with many similarly named {{i:files}}.
6. Build a {{i:PowerShell}} {{i:script}} that recursively lists all `.scad` and `.stl` {{i:files}} in a directory tree; save the results to a {{i:file}}.
7. Compare the {{i:output}} of `ls`, `Get-ChildItem`, and `gci` to understand {{i:PowerShell}} aliasing; document what {{i:each}} {{i:command}} does.
8. Create a filtering {{i:command}} that displays only {{i:files}} modified in the last 7 days; {{i:test}} it on your documents folder.
9. Write a non-visual guide to {{i:PowerShell}} {{i:navigation}}; include descriptions of {{i:common}} patterns and how to verify directory contents audibly.
10. Develop a {{i:navigation}} {{i:workflow}} for a typical 3D {{i:printing}} project: move {{i:between}} CAD, slicing, and {{i:print}}-log folders efficiently; document the {{i:commands}}.
11. Create a complex wildcard search: find all {{i:files}} in a folder and subfolders that match multiple patterns (e.g., `*_v1.* OR *_final.*`).
12. Build a {{i:script}} that navigates through a folder tree, counts {{i:files}} at {{i:each}} level, and reports the structure.
13. Document the {{i:output}} differences {{i:between}} `ls -n`, `ls -n -af`, `ls -n -ad`, and `Get-ChildItem`; explain when to use {{i:each}}.
14. Create a {{i:navigation}} "cheat sheet" as a {{i:PowerShell}} {{i:script}} that prints {{i:common}} paths and how to navigate to them.
15. {{i:Design}} a project folder structure on your computer, document {{i:each}} path, then {{i:create}} a {{i:script}} that validates all folders exist.

## References

- Microsoft. (2024). _Get-ChildItem cmdlet {{i:reference}}_. [https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/get-childitem](https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/get-childitem)
- Microsoft. (2024). _{{i:PowerShell}} wildcards and filtering_. [https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/{{i:using}}-wildcards](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/{{i:using}}-wildcards)
- Microsoft. (2024). _Navigation best practices in {{i:PowerShell}}_. [https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/navigate-the-filesystem](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/navigate-the-filesystem)

## Helpful Resources

- [Get-ChildItem Cmdlet Reference](https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/get-childitem)
- [{{i:PowerShell}} Wildcards and Filtering](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/{{i:using}}-wildcards)
- [Navigation Best Practices](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/navigate-the-filesystem)
- [Relative and Absolute Paths](https://poshcode.gitbook.io/powershell-faq/src/getting-started/filesystem-{{i:navigation}})
- [{{i:Screen}} Reader Tips for {{i:PowerShell}}](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/{{i:accessibility}}-in-windows-powershell-ise)

---

<a id="ps-lesson-2"></a>

# Lesson 2: File and Folder Manipulation

---

Estimated {{i:time}}: 30-45 minutes

Learning Objectives

- Create, {{i:copy}}, move, and delete {{i:files}} and folders from {{i:PowerShell}}
- Use `ni`, `mkdir`, `cp`, `mv`, `rm`, and `rmdir` safely
- Understand when operations are permanent and how to confirm results

Materials

- {{i:PowerShell}}
- Small practice folder for exercises

Step-by-step Tasks

1. Create a practice directory: `mkdir ~/Documents/PS_Practice` and `cd` {{i:into}} it.
2. Create two {{i:files}}: `ni file1.txt` and `ni file2.txt`.
3. Copy `file1.txt` to `file1_backup.txt` with `cp` and confirm with `ls -n`.
4. Rename `file2.txt` to `notes.txt` {{i:using}} `mv` and confirm.
5. Delete `file1.txt` with `rm` and verify the backup remains.

Checkpoints

- After step 3 {{i:you}} should see both the original and the backup {{i:file}}.

## {{i:3DMake}} in Practice: Organizing Your Projects

File management {{i:commands}} are essential for {{i:3DMake}} project organization:

```powershell
# Create a new project from scratch
mkdir ~/Documents/3d_projects/bottle_cap
cd ~/Documents/3d_projects/bottle_cap
3dm new

# Back up a working project before making big changes
cd ~/Documents/3d_projects
cp -r bottle_cap bottle_cap_backup

# Rename the main model file to something more specific
cd bottle_cap/src
mv main.scad bottle_cap.scad

# List only .scad files to confirm the rename
ls -n *.scad

# Delete a draft STL you no longer need
rm ~/Documents/3d_projects/bottle_cap/build/draft.stl

# Now build the renamed model (using the -m flag to specify the name)
cd ~/Documents/3d_projects/bottle_cap
3dm build -m bottle_cap

# See the fresh output in the build folder
ls -n build/
```

Checkpoints

- After step 3 {{i:you}} should see both the original and the backup {{i:file}}.

## Quiz - Lesson PS.2

1. How do {{i:you}} {{i:create}} an empty {{i:file}} from {{i:PowerShell}}?
2. What {{i:command}} copies a {{i:file}}?
3. How do {{i:you}} rename a {{i:file}}?
4. What does `rm -r` do?
5. Why is `rm` potentially dangerous?
6. True or False: `cp` requires the `-r` flag to {{i:copy}} both {{i:files}} and folders.
7. Explain the {{i:difference}} {{i:between}} `rm` and `rmdir`.
8. If {{i:you}} delete a {{i:file}} with `rm`, {{i:can}} {{i:you}} recover it from {{i:PowerShell}}?
9. Write a {{i:command}} that would {{i:copy}} an entire folder and all its contents to a {{i:new}} location.
10. Describe a practical safety check {{i:you}} would perform {{i:before}} running `rm -r` on a folder.

    > [!CAUTION]
    > By default, `cp` **silently overwrites** an existing {{i:file}} at the destination with no warning. Use `cp -i` (interactive) to get a confirmation prompt {{i:before}} overwriting, especially when working with important {{i:files}}.

11. What happens if {{i:you}} `cp` a {{i:file}} to a destination where a {{i:file}} with the same {{i:name}} already exists? How would {{i:you}} handle this safely?
12. Compare `mv old_name.txt new_name.txt` vs `mv old_name.txt ~/Documents/new_name.txt`. What is the key {{i:difference}}?
13. {{i:Design}} a {{i:workflow}} to safely delete 50 {{i:files}} matching the pattern `*.bak` from a folder containing 500 {{i:files}}. What {{i:commands}} and verifications would {{i:you}} use?
14. Explain how {{i:you}} could back up all `.scad` {{i:files}} from a project folder {{i:into}} a timestamped backup folder in {{i:one}} {{i:command}}.
15. When organizing a 3D {{i:printing}} project, {{i:you}} need to move completed designs to an archive folder and delete failed prototypes. How would {{i:you}} structure this as a safe, auditable process?

## Extension Problems

1. Create a folder tree and {{i:copy}} it to a {{i:new}} location with `cp -r`.
2. Write a {{i:one}}-line {{i:command}} that creates three {{i:files}} named `a b c` and lists them.
3. Move a {{i:file}} {{i:into}} a {{i:new}} folder and confirm the move.
4. Use wildcards to delete {{i:files}} matching a pattern in a safe {{i:test}} folder.
5. Export a listing of the practice folder to `practice_listing.txt`.
6. Create a backup {{i:script}} that copies all `.scad` {{i:files}} from your project folder to a backup folder with timestamp naming.
7. Build a safe deletion {{i:workflow}}: list {{i:files}} matching a pattern, verify count, then delete with confirmation; document the steps.
8. Write a {{i:PowerShell}} {{i:script}} that organizes {{i:files}} by extension {{i:into}} subfolders; {{i:test}} it on a sample folder tree.
9. Create a {{i:file}} operation audit trail: log all {{i:copy}}, move, and delete operations to a {{i:text}} {{i:file}} for review.
10. Develop a project template generator: a {{i:script}} that creates a standard folder structure for a {{i:new}} 3D {{i:printing}} project with essential subfolders.
11. Implement a {{i:file}} conflict handler: {{i:write}} a {{i:script}} that handles cases where `cp` would overwrite an existing {{i:file}} by renaming the existing {{i:file}} with a timestamp {{i:before}} copying.
12. Create a batch rename operation: use a {{i:script}} to rename all {{i:files}} in a folder from `old_prefix_*` to `new_prefix_*`; {{i:test}} with actual {{i:files}} and verify the results.
13. Build a folder comparison tool: list all {{i:files}} in two folders and identify which {{i:files}} exist in {{i:one}} but not the other; {{i:output}} to a report.
14. Write a destructive operation validator: {{i:before}} executing `rm -r`, {{i:create}} a {{i:script}} that lists exactly what will be deleted, shows {{i:file}} counts by type, and requires explicit user confirmation to proceed.
15. {{i:Design}} a complete project lifecycle {{i:workflow}}: {{i:create}} folders for active projects, completed designs, and archive; include move operations {{i:between}} folders, backup steps, and verification that all {{i:files}} arrive intact.

## References

- Microsoft. (2024). _New-Item cmdlet {{i:reference}}_. [https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/{{i:new}}-item](https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/{{i:new}}-item)
- Microsoft. (2024). _Copy-Item and Move-Item cmdlets_. [https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/{{i:copy}}-item](https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/{{i:copy}}-item)
- Microsoft. (2024). _File system operations guide_. [https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/manipulating-items](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/manipulating-items)

## Helpful Resources

- [New-Item Cmdlet Reference](https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/{{i:new}}-item)
- [Copy-Item and Move-Item](https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/{{i:copy}}-item)
- [Remove-Item Cmdlet Reference](https://learn.microsoft.com/powershell/{{i:module}}/microsoft.powershell.management/remove-item)
- [File System Operations Guide](https://learn.microsoft.com/powershell/scripting/learn/{{i:shell}}/manipulating-items)
- [Safe Deletion Practices](https://poshcode.gitbook.io/powershell-faq/src/getting-started/{{i:file}}-management)

---

<a id="ps-lesson-3"></a>

# Lesson 3: Input, Output, and Piping

---

Duration: 1 class period
Prerequisite: Lesson 2 ({{hi:File and Folder Manipulation}}File and Folder Manipulation)

## Learning Objectives

By the end of this lesson, {{i:you}} will be able to:

- Use `echo` to {{i:print}} {{i:text}} to the screen
- Use `cat` to read {{i:file}} contents
- Use `>` to redirect {{i:output}} {{i:into}} a {{i:file}}
- Use `|` (pipe) to send {{i:one}} {{i:command}}'s {{i:output}} to another
- Copy {{i:output}} to the clipboard with `clip`
- Open {{i:files}} with a {{i:text}} editor from the {{i:command}} line

## Commands Covered

| Command                | What It Does                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| `echo "text"`          | Print {{i:text}} to the screen                                    |
| `cat filename`         | Print the contents of a {{i:file}}                                |
| `> filename`           | Redirect {{i:output}} {{i:into}} a {{i:file}} (overwrites)        |
| `>> filename`          | Append {{i:output}} to a {{i:file}} (adds to end)                 |
| `\|`                   | Pipe - send {{i:output}} from {{i:one}} {{i:command}} to the next |
| `clip`                 | Copy piped input to the {{i:Windows}} clipboard                   |
| `notepad.exe filename` | Open a {{i:file}} in Notepad                                      |

## `echo` - Printing Text

`echo` prints {{i:text}} to the screen. It is useful for testing, for writing {{i:text}} {{i:into}} {{i:files}}, and for understanding how piping works.

```powershell
echo "Hello, World"
echo "This is a test"
```

## `cat` - Reading Files

`cat` prints the contents of a {{i:file}} to the screen.

```powershell
# Read a text file
cat ~/Documents/notes.txt
# Read an OpenSCAD file
cat ~/Documents/OpenSCAD_Projects/project0.scad
```

With a long {{i:file}}, use `cat filename | more` to read it page by page (press `Space` to advance, `Q` to quit).

## `>` - Redirecting Output to a File

The `>` symbol redirects {{i:output}} from the screen {{i:into}} a {{i:file}} instead.

```powershell
# Create a file with a single line
echo "Author: Your Name" > header.txt
# Confirm the file was created and has content
cat header.txt
```

> [!WARNING]
> `>` overwrites the {{i:file}} if it already exists. Use `>>` to append instead:

```powershell
echo "Date: 2025" >> header.txt
echo "Project: Floor Marker" >> header.txt
cat header.txt
```

## `|` - Piping

The pipe symbol `|` sends the {{i:output}} of {{i:one}} {{i:command}} to the input of the next. This lets {{i:you}} chain {{i:commands}} together.

````powershell
# List files and send the list to clip (copies to clipboard)
ls -n | clip
## 3DMake in Practice: Capturing Build Output

Piping and redirection are essential for working with 3DMake's output accessibly:

```powershell
# Build and save the full log to a {{i:file}} so {{i:you}} {{i:can}} read it in Notepad
{{hi:3dm {{i:build}}}}3dm {{i:build}} > build_log.txt
notepad.exe build_log.txt

# Build and slice, keeping only lines with errors or warnings
3dm {{i:build}} slice 2>&1 | Select-String -Pattern "{{i:error}}|warning" -CaseSensitive:$false

# {{i:List}} all {{i:STL}} {{i:files}} produced so far
ls -n {{i:build}}/ | findstr ".stl"

# Get a list of available {{i:printer}} profiles and save for {{i:reference}}
3dm list-profiles > profiles.txt
notepad.exe profiles.txt

# Get a list of {{i:material}} overlays (PLA, PETG, supports, etc.)
3dm list-overlays > overlays.txt
notepad.exe overlays.txt

# Get an AI description of your model and save it
{{hi:3dm info}}3dm info > model_description.txt
notepad.exe model_description.txt
````

```powershell
# {{i:List}} {{i:files}} and send the list to clip (copies to clipboard)
ls -n | clip
# Now paste with Ctrl + V anywhere
```

```powershell
# Search within a {{i:file}}'s contents {{i:using}} Select-String (like grep)
cat project0.scad | Select-String "{{i:cube}}"
```

## `clip` - Copying to Clipboard

`clip` takes whatever is piped to it and puts it on the Windows clipboard.

```powershell
# Copy your current directory path to the clipboard
pwd | clip
# Copy a {{i:file}} listing to clipboard
ls -n | clip
# Copy the contents of a {{i:file}} to clipboard
cat notes.txt | clip
```

After any of these, press `Ctrl + V` in any application to paste.

## Opening Files in Notepad

```powershell
# Open a {{i:file}} in Notepad
notepad.exe ~/Documents/notes.txt
# Open a .scad {{i:file}}
notepad.exe ~/Documents/OpenSCAD_Projects/project0.scad
# Create a {{i:new}} {{i:file}} and open it
notepad new_notes.txt
```

## Step-by-step Tasks

1. Create `practice.txt` with three lines using `echo` and `>`/`>>`.
2. Read the file with `cat practice.txt`.
3. Pipe the file into `Select-String` to search for a word.
4. Copy the file contents to clipboard with `cat practice.txt | clip`.
5. Redirect `ls -n` into `list.txt` and open it in Notepad.
   Checkpoints

- After step 3 you should be able to find a keyword using piping.

## Quiz - Lesson PS.3

1. What is the difference between `>` and `>>`?
2. What does the pipe `|` do?
3. How do you copy output to the clipboard?
4. How would you page through long output?
5. How do you suppress output to nowhere?
6. True or False: The pipe operator `|` connects the output of one command to the input of another.
7. Explain why redirecting output to a file is useful for screen reader users.
8. Write a command that would search for the word "sphere" in all `.scad` files in a directory.
9. How would you count the number of lines in a file using PowerShell piping?
10. Describe a practical scenario in 3D printing where you would pipe or redirect command output.
11. What would be the difference in output between `echo "test" > file.txt` (run twice) vs `echo "test" >> file.txt` (run twice)? Show the expected file contents.
12. Design a three-step piping chain: read a file, filter for specific content, and save the results; explain what each pipe does.
13. You have a 500-line `.scad` file and need to find all instances of `sphere()` and count them. Write the command.
14. Explain how `clip` is particularly valuable for screen reader users when working with file paths or long output strings.
15. Describe how you would use pipes and redirection to create a timestamped backup report of all `.stl` files in a 3D printing project folder.

## Extension Problems

1. Use piping to count lines in a file (hint: `Select-String -Pattern '.' | Measure-Object`).
2. Save a long `ls -n` output and search it with `Select-String`.
3. Chain multiple pipes to filter and then save results.
4. Practice copying different command outputs to clipboard and pasting.
5. Create a small script that generates a report (counts of files by extension).
6. Build a data processing pipeline: read a CSV file, filter rows, and export results; document each step.
7. Write a script that pipes directory listing to Count occurrences of each file extension; create a summary report.
8. Create a log analysis command: read a log file, filter for errors, and save matching lines to a separate error log.
9. Design a piping workflow for 3D printing file management: find `.stl` files, extract their sizes, and generate a report.
10. Develop a reusable piping function library: create functions for common filtering, sorting, and reporting patterns; test each function with different inputs.
11. Build a complex filter pipeline: read a `.scad` file, extract lines containing specific geometry commands, count each type, and output a summary to both screen and file.
12. Create an interactive piping tool: build a script that accepts user input for a search term, pipes through multiple filters, and displays paginated results.
13. Develop a performance analysis tool: use piping to combine file listing, metadata extraction, and statistical reporting; export results to a dated report file.
14. Implement a comprehensive error-handling pipeline: read output, catch errors, log them separately, and generate a summary of successes vs failures.
15. Design and execute a real-world project backup workflow: use piping to verify file integrity, count files by type, generate a backup manifest, and create audit logs-all in one integrated command pipeline.

## References

- Microsoft. (2024). _Out-File cmdlet for redirection_. [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-file](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-file)
- Microsoft. (2024). _Select-String piping reference_. [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string)
- Microsoft. (2024). _PowerShell pipeline concepts_. [https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-pipeline](https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-pipeline)

## Helpful Resources

- [Using Out-File for Redirection](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/out-file)
- [Piping and Select-String](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/select-string)
- [Get-Content Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-content)
- [Measure-Object for Counting](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/measure-object)
- [PowerShell Pipeline Concept](https://learn.microsoft.com/powershell/scripting/learn/shell/using-the-pipeline)

---

<a id="ps-lesson-4"></a>

# Lesson 4: Environment Variables, PATH, and Aliases

---

Estimated time: 30-45 minutes

Learning Objectives

- Read environment variables with `$env:VARNAME`
- Inspect and verify programs in the `PATH`
- Create temporary aliases and understand making them persistent via the profile

Materials

- PowerShell (with rights to open profile if desired)

Step-by-step Tasks

1. Show your username and home path with `echo $env:USERNAME` and `echo $env:USERPROFILE`.
2. Inspect `echo $env:PATH` and identify whether `openscad` or `code` would be found.
3. Run `Get-Command openscad` and note the result.
4. Create a temporary alias: `Set-Alias -Name preview -Value openscad` and test `preview myfile.scad`.
5. Open your profile (`notepad.exe $PROFILE`) and add the alias line to make it persistent (advanced).

Checkpoints

- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson PS.4

## 3DMake in Practice: Aliases and Profile Setup

PowerShell aliases and profile scripts make your 3DMake workflow much faster:

```powershell
# Quick function to jump to your 3D projects folder
function 3dp { Set-Location ~/Documents/3d_projects }

# Quick function to {{i:run}} the full {{i:build}}-slice-{{i:print}} pipeline
function 3dprint { 3dm {{i:build}} slice {{i:print}} }

# Quick function to {{i:build}} and get an AI model description
function 3dinfo { 3dm {{i:build}}; 3dm info }

# Add these functions to your {{i:PowerShell}} profile so they load every session
notepad.exe $PROFILE
# (Paste the three functions above {{i:into}} the {{i:file}}, then save)

# Reload your profile without restarting {{i:PowerShell}}
. $PROFILE

# Now use them:
3dp            # jump to your 3D projects folder
3dprint        # {{i:run}} the full pipeline
3dinfo         # {{i:build}} and describe the model
```

Checkpoints

- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson PS.4

1. How do you print an environment variable?
2. What is the purpose of `PATH`?
3. How do you check whether `openscad` is available?
4. How do you create a temporary alias?
5. Where would you make an alias permanent?
6. True or False: Environment variables are case-sensitive on all platforms.
7. Explain why having a program in your PATH is useful compared to always using its full file path.
8. Write a command that would create an alias called `slicer` for the OpenSCAD executable.
9. What file would you edit to make an alias persist across PowerShell sessions?
10. Describe a practical benefit of using the `$env:TEMP` directory for temporary files in a 3D printing workflow.
11. You have a custom script at `C:\Scripts\backup_models.ps1` that you want to run from anywhere as `backup-now`. What steps would you take to make this work?
12. Explain the difference between setting an environment variable in the current session vs. adding it to your profile for permanence.
13. Design a profile strategy for managing multiple 3D printing projects, each with different tool paths and directories; show how to structure environment variables for each.
14. If a program is not found by `Get-Command`, what are the possible reasons, and how would you troubleshoot?
15. Describe how you would verify that your PowerShell profile is loading correctly and how to debug issues if aliases or environment variables don't appear after restarting PowerShell.

## Extension Problems

1. Add a folder to PATH for a test program (describe steps; do not change system PATH without admin).
2. Create a short profile snippet that sets two aliases and test re-opening PowerShell.
3. Use `Get-Command` to list the path for several common programs.
4. Explore `$env:TEMP` and create a file there.
5. Save a copy of your current PATH to a text file and examine it in your editor.
6. Create a PowerShell profile script that loads custom aliases and environment variables for your 3D printing workflow; test it in a new session.
7. Build a "project profile" that sets environment variables for CAD, slicing, and print directories; switch between profiles for different projects.
8. Write a script that audits your current environment variables and creates a summary report of what's set and why.
9. Design a custom alias system for common 3D printing commands; document the aliases and their purposes.
10. Create a profile migration guide: document how to export and import your PowerShell profile across machines for consistent workflows.
11. Implement a safe PATH modification script: create a utility that allows you to add/remove directories from PATH for the current session only; show how to make it permanent in your profile.
12. Build a comprehensive profile framework with modules: create separate .ps1 files for aliases, environment variables, and functions; have your main profile load all of them dynamically.
13. Develop an environment validation tool: write a script that checks whether all required programs (OpenSCAD, slicers, etc.) are accessible via PATH; report findings and suggest fixes.
14. Create a project-switching alias system: design a function that changes all environment variables and aliases based on the current project; test switching between multiple projects.
15. Build a profile troubleshooting guide: create a script that exports your current environment state (variables, aliases, PATH) to a timestamped file, allowing you to compare states before and after changes and identify what broke.

## References

- Microsoft. (2024). _Environment variables in PowerShell_. [https://learn.microsoft.com/powershell/scripting/learn/shell/using-environment-variables](https://learn.microsoft.com/powershell/scripting/learn/shell/using-environment-variables)
- Microsoft. (2024). _Set-Alias cmdlet reference_. [https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/set-alias](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/set-alias)
- Microsoft. (2024). _Creating and using PowerShell profiles_. [https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)

## Helpful Resources

- [Environment Variables in PowerShell](https://learn.microsoft.com/powershell/scripting/learn/shell/using-environment-variables)
- [Understanding the PATH Variable](https://poshcode.gitbook.io/powershell-faq/src/getting-started/environment-variables)
- [Set-Alias Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/set-alias)
- [Creating a PowerShell Profile](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)
- [Get-Command for Locating Programs](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/get-command)

---

<a id="ps-lesson-5"></a>

# Lesson 5: Filling in the Gaps — Profiles and History

---

Estimated time: 30-45 minutes

Learning Objectives

- Use history and abort commands (`history`, `Ctrl+C`)
- Inspect and edit your PowerShell profile for persistent settings
- Run programs by full path using the `&` operator
- Handle common screen reader edge cases when using the terminal

Materials

- PowerShell and an editor (Notepad/ VS Code)

Step-by-step Tasks

1. Run several simple commands (e.g., `pwd`, `ls -n`, `echo hi`) then run `history` to view them.
2. Use `Invoke-History <n>` to re-run a previous command (replace `<n>` with a history number).
3. Practice aborting a long-running command with `Ctrl + C` (for example, `ping 8.8.8.8`).
4. Open your profile: `notepad.exe $PROFILE`; if it doesn't exist, create it: `ni $PROFILE -Force`.
5. Add a persistent alias line to your profile (example: `Set-Alias -Name preview -Value openscad`), save, and reopen PowerShell to verify.

Checkpoints

- After step 2 you can re-run a recent command by history number.
- After step 5 your alias should persist across sessions.

## Quiz - Lesson PS.5

1. How do you view the command history?
2. Which key combination aborts a running command?
3. What does `echo $PROFILE` show?
4. How does the `&` operator help run executables?
5. What is one strategy if terminal output stops being announced by your screen reader?
6. True or False: Using `Ctrl+C` permanently deletes any files created by the command you abort.
7. Explain the difference between `history` and `Get-History` in PowerShell.
8. If you place code in your profile but it doesn't take effect after opening a new PowerShell window, what should you verify?
9. Write a command that would run a program at the path `C:\Program Files\OpenSCAD\openscad.exe` directly.
10. Describe a practical workflow scenario where having keyboard shortcuts (aliases) in your profile would save time.
11. Explain how to re-run the 5th command from your history, and what would happen if that command had file operations (creates/deletes).
12. Design a profile initialization strategy that separates utilities for different projects; explain how you would switch between them.
13. Walk through a troubleshooting workflow: your screen reader stops announcing output after running a long command. What steps would you take to diagnose and resolve the issue?

    > [!CAUTION]
    > Before any destructive operation — mass delete, bulk overwrite, or recursive removal — use history review (`Get-History`) and dry-run techniques (e.g., `What-If`) to verify the command is correct. A single mistaken path in a bulk delete can be unrecoverable.

14. Create a safety checkpoint system: before any destructive operation (mass delete, overwrite), how would you use profile functions and history to verify the command is correct?
15. Develop a comprehensive capstone scenario: integrate everything from Lessons 0–5 (navigation, file operations, piping, environment setup, history) to design an automated 3D printing project workflow with error handling and logging.

## Extension Problems

1. Add an alias and an environment variable change to your profile and document the behavior after reopening PowerShell.
2. Create a short script that automates creating a project folder and an initial .scad file.
3. Experiment with running OpenSCAD by full path using `&` and by placing it in PATH; compare results.
4. Practice redirecting `Get-Help` output to a file and reading it in Notepad for screen reader clarity.
5. Document three screen reader troubleshooting steps you used and when they helped.
6. Build a comprehensive PowerShell profile that includes aliases, environment variables, and helper functions for your 3D printing workflow.
7. Create a script that troubleshoots common PowerShell issues (module loading, permission errors, command not found); test at least three scenarios.
8. Write a PowerShell function that coordinates multiple tasks: creates a project folder, starts OpenSCAD, and opens slicing software.
9. Design a screen-reader accessibility guide for PowerShell: document commands, outputs, and accessible navigation patterns.
10. Develop an advanced PowerShell workflow: implement error handling, logging, and confirmation prompts for risky operations.
11. Implement a "undo" system using history: create a function that logs destructive commands (rm, mv, cp -Force) and allows you to review/rollback the last operation.
12. Build a profile debugger: create a script that compares two PowerShell sessions' environment states (variables, aliases, functions) to identify what loaded/failed to load.
13. Develop a multi-project profile manager: design a system where you can switch entire environments (paths, aliases, variables) for different 3D printing projects by running a single command.
14. Create a comprehensive accessibility analyzer: write a script that tests whether key PowerShell commands produce screen-reader-friendly output; document workarounds for commands that don't.
15. Design a complete capstone project: build an integrated automation suite that manages a 3D printing workflow (project setup, file organization, CAD/slicing tool automation, output logging, error recovery, and audit trails) with full error handling and documentation.

## References

- Microsoft. (2024). _PowerShell history and recall functionality_. [https://learn.microsoft.com/powershell/scripting/learn/shell/using-history](https://learn.microsoft.com/powershell/scripting/learn/shell/using-history)
- Microsoft. (2024). _Understanding and creating PowerShell profiles_. [https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)
- Microsoft. (2024). _The call operator (&) for running executables_. [https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-)

## Helpful Resources

- [PowerShell History and Recall](https://learn.microsoft.com/powershell/scripting/learn/shell/using-history)
- [Understanding Profiles](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)
- [Invoke-History Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/invoke-history)
- [The Call Operator (&)](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-)
- [Screen Reader Tips and Tricks](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)

---

<a id="ps-lesson-6"></a>

# Lesson 6: Advanced Techniques — Scripts, Functions, and Professional Workflows

---

Duration: 4-4.5 hours (for screen reader users)  
Prerequisites: Complete Lessons 0–5  
Skill Level: Advanced intermediate

## 3DMake in Practice: Automating Your Print Workflow

Use PowerShell scripting to fully automate a 3DMake workflow across multiple projects:

```powershell
# batch_print.ps1 - {{i:build}} and {{i:print}} every {{i:3DMake}} project in a folder
param(
    [string]$ProjectsDir = "$HOME\Documents\3d_projects"
)

Get-ChildItem -Path $ProjectsDir -Directory | ForEach-Object {
    $project = $_.FullName
    ${{i:name}} = $_.Name
    Write-Host "Processing: ${{i:name}}"
    Set-Location $project

    # Build and slice; capture all {{i:output}}
    ${{i:output}} = & 3dm {{i:build}} slice 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  OK - sending to {{i:printer}}"
        & 3dm {{i:print}}
    } else {
        Write-Host "  FAILED - log saved to build_error.txt"
        ${{i:output}} | Out-File "build_error.txt"
        notepad.exe "build_error.txt"
    }
}

Write-Host "Batch complete."
```

Save as `batch_print.ps1` and run with `.\batch_print.ps1`. This script uses loops, conditionals, and piping — all from this lesson.

This lesson extends PowerShell skills to professional-level workflows. You'll learn to automate complex tasks, write reusable code, and integrate tools for 3D printing workflows.

## Learning Objectives

By the end of this lesson, you will be able to:

- Create and run PowerShell scripts (.ps1 files)
- Write functions that accept parameters
- Use loops to repeat tasks automatically
- Automate batch processing of 3D models
- Debug scripts when something goes wrong
- Create professional workflows combining multiple tools

## PowerShell Scripts Basics

### What's a Script?

A script is a file containing PowerShell commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once.

Why use scripts?

- Repeatability: Run the same task 100 times identically
- Documentation: Commands are written down for reference
- Complexity: Combine many commands logically
- Automation: Schedule scripts to run automatically

### Creating Your First Script

Step 1: Open a text editor

```powershell
notepad.exe my-{{i:first}}-{{i:script}}.ps1
```

Step 2: Type this script

```powershell
# This is a comment - screen readers will read it
Write-Output "Script is running!"
pwd
ls -n
Write-Output "Script is done!"
```

Step 3: Save the file

- In Notepad: Ctrl+S
- Make sure filename ends in `.ps1`
- Save in an easy-to-find location (like Documents)

Step 4: Run the script

```powershell
.\my-{{i:first}}-{{i:script}}.ps1
```

What happens:
PowerShell runs each command in sequence and shows output.

### Important: Script Execution Policy

> [!CAUTION]
> If you get an "execution policy" error when running a `.ps1` script, PowerShell's security is blocking unsigned scripts. Use `-Scope Process` to bypass it only for the current session — this is safer than changing the policy machine-wide.

On some Windows systems, you might get an error about "execution policy". This is a security feature.

To fix it temporarily:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Then try your script again:

```powershell
.\my-{{i:first}}-{{i:script}}.ps1
```

Note for screen readers: Your screen reader will announce the error if there is one. Use `Get-Help Get-ExecutionPolicy` for more information.

## Variables and Parameters

### Using Variables

Variables store values you want to use later.

Example script:

```powershell
$mypath = "C:\Users\YourName\Documents"
cd $mypath
Write-Output "I am now in:"
pwd
ls -n
```

Breaking it down:

- `$mypath` = variable name (always starts with `$`)
- `=` = assign the value after this
- `"C:\Users..."` = the value (a path)
- `cd $mypath` = use the variable (replace `$mypath` with its value)

### Functions with Parameters

A function is reusable code that you can run with different inputs.

Example: A function that lists files in a folder

```powershell
function ListFolder {
    param(
        [string]$path
    )
    Write-Output "Contents of: $path"
    cd $path
    ls -n
}
# Use the function:
ListFolder -path "C:\Users\YourName\Documents"
ListFolder -path "C:\Users\YourName\Downloads"
```

What's happening:

- `function ListFolder` = name of the function
- `param([string]$path)` = the function accepts a parameter called `$path`
- Inside the function, use `$path` like any variable
- Call the function with `-path "value"`

Screen reader tip: When you call a function, PowerShell will announce the results just like any command.

## Loops - Repeating Tasks

### Loop Over Files

Imagine you have 10 SCAD files and want to print their contents. You could do it 10 times manually, or use a loop.

Example: Print every .scad file in a folder

```powershell
$scadFiles = ls -n *.scad
foreach (${{i:file}} in $scadFiles) {
    Write-Output "=== File: ${{i:file}} ==="
    cat ${{i:file}}
    Write-Output ""
}
```

What's happening:

- `$scadFiles = ls -n *.scad` = find all .scad files and store in variable
- `foreach ($file in $scadFiles)` = for each file, do this:
  - `Write-Output "=== File: $file ==="` = announce which file
  - `cat $file` = show contents
  - `Write-Output ""` = blank line between files

Result: All files printed one after another, organized and readable.

### Loop with a Counter

Example: Do something 5 times

```powershell
for ($i = 1; $i -le 5; $i++) {
    Write-Output "This is iteration number $i"
    # Do something here
}
```

What's happening:

- `for ($i = 1; $i -le 5; $i++)` = loop from 1 to 5
- `$i` = counter variable (starts at 1, increases each loop)
- `-le` = "less than or equal to" (stop when $i > 5)
- `$i++` = add 1 to $i each time through

## Real-World Example - Batch Processing SCAD Files

### Scenario

You have 10 OpenSCAD (.scad) files in a folder. You want to:

1. List them all
2. Check how many there are
3. For each one, verify it exists

### The Script

```powershell
# Batch Processing Script for SCAD Files
$scadFolder = "C:\Users\YourName\Documents\3D_Projects"
$scadFiles = ls $scadFolder -Filter *.scad -Name
Write-Output "Processing SCAD {{i:files}} in: $scadFolder"
Write-Output "Found $($scadFiles.Count) {{i:files}}"
Write-Output ""
foreach (${{i:file}} in $scadFiles) {
    $fullPath = Join-Path -Path $scadFolder -ChildPath ${{i:file}}
    if (Test-Path -Path $fullPath) {
        Write-Output " Found: ${{i:file}}"
    } else {
        Write-Output " Missing: ${{i:file}}"
    }
}
Write-Output ""
Write-Output "Batch processing complete!"
```

Breaking it down:

- `$scadFolder` = where to look
- `ls $scadFolder -Filter *.scad -Name` = find .scad files, show names only
- `foreach` = process each file
- `Join-Path` = combine folder and filename into full path
- `Test-Path` = check if file exists
- `if` = do different things based on condition

### Running the Script

1. Save as `batch-process.ps1`
2. Edit `$scadFolder` to match your real folder
3. Run it:
   ```powershell
   .\batch-process.ps1
   ```

Screen reader output:

```
Processing SCAD {{i:files}} in: C:\Users\YourName\Documents\3D_Projects
Found 10 {{i:files}}

 Found: model1.scad
 Found: model2.scad
 Found: model3.scad
[... more {{i:files}} ...]
Batch processing complete!
```

## Error Handling

### Try-Catch Blocks

What if something goes wrong? Use try-catch:

Example:

```powershell
try {
    ${{i:file}} = "C:\nonexistent\path\{{i:file}}.txt"
    $content = cat ${{i:file}}
    Write-Output $content
} catch {
    Write-Output "Error: Could not read {{i:file}}"
    Write-Output "Details: $_"
}
```

What's happening:

- `try` = run these commands
- If an error happens, PowerShell jumps to `catch`
- `catch` = handle the error gracefully
- `$_` = the error message

Screen reader advantage: Errors are announced clearly instead of crashing silently.

### Validating Input

Example: Make sure a folder exists before processing

```powershell
function ProcessFolder {
    param([string]$folderPath)
    if (-not (Test-Path -Path $folderPath)) {
        Write-Output "Error: Folder does not exist: $folderPath"
        return
    }
    Write-Output "Processing folder: $folderPath"
    ls -n $folderPath
}
ProcessFolder -folderPath "C:\Users\YourName\Documents"
```

What's happening:

- `Test-Path` = check if folder exists
- `-not` = if NOT true
- `return` = exit the function early if error

## Debugging Scripts

### Common Errors and Solutions

#### Error 1: "Command not found"

Cause: Typo in command name

Fix: Check spelling

```powershell
# Wrong:
writ-{{i:output}} "hello"
# Correct:
Write-Output "hello"
```

#### Error 2: "Variable is null"

Cause: Variable was never assigned

Fix: Make sure variable is set before using it

```powershell
$myvar = "hello"  # Set {{i:first}}
Write-Output $myvar  # Then use
```

#### Error 3: "Cannot find path"

Cause: Wrong folder path

Fix: Verify path exists

```powershell
# Check if path exists:
Test-Path -Path "C:\Users\YourName\Documents"
# If false, the path is wrong
```

> [!WARNING]
> **"Access denied"** means PowerShell doesn't have permission to perform the operation. Always understand _why_ you need administrator privileges before elevating — running everything as admin creates unnecessary security risk.

#### Error 4: "Access denied"

Cause: Don't have permission

Fix: Run PowerShell as administrator

- Right-click PowerShell -> Run as administrator

### Debugging Technique: Trace Output

Add `Write-Output` statements to track what's happening:

```powershell
$path = "C:\Users\YourName\Documents"
Write-Output "Starting {{i:script}}. Path is: $path"
${{i:files}} = ls -n $path
Write-Output "Found $(${{i:files}}.Count) {{i:files}}"
foreach (${{i:file}} in ${{i:files}}) {
    Write-Output "Processing: ${{i:file}}"
    # Do something with ${{i:file}}
    Write-Output "Done with: ${{i:file}}"
}
Write-Output "Script complete"
```

Your screen reader will announce each step, so you know where errors happen.

## Creating Professional Workflows

### Example 1: Automated Project Setup

Scenario: You start a new 3D printing project regularly. Instead of creating folders manually:

```powershell
function SetupNewProject {
    param([string]$projectName)
    $baseFolder = "C:\Users\YourName\Documents\3D_Projects"
    $projectFolder = Join-Path -Path $baseFolder -ChildPath $projectName
    # Create folder structure
    mkdir $projectFolder -Force
    mkdir "$projectFolder\designs" -Force
    mkdir "$projectFolder\{{i:output}}" -Force
    mkdir "$projectFolder\notes" -Force
    # Create a README
    $readmeContent = @"
# $projectName
Created: $(Get-Date)
## Designs
All .scad {{i:files}} go here.
## Output
{{i:STL}} and other exports go here.
## Notes
Project notes and observations.
"@
    $readmeContent | Out-File -FilePath "$projectFolder\README.txt" -Encoding utf8
    Write-Output "Project setup complete: $projectFolder"
}
# Use it:
SetupNewProject -projectName "MyKeychain"
SetupNewProject -projectName "PhoneStand"
```

What it does:

- Creates folder structure for a new project
- Sets up subfolders for designs, output, notes
- Creates a README file automatically

### Example 2: Batch File Verification

Scenario: Before processing, verify all required files exist:

```powershell
function VerifyProjectFiles {
    param([string]$projectFolder)
    $requiredFiles = @(
        "README.txt",
        "designs",
        "{{i:output}}",
        "notes"
    )
    $allGood = $true
    foreach ($item in $requiredFiles) {
        $path = Join-Path -Path $projectFolder -ChildPath $item
        if (Test-Path -Path $path) {
            Write-Output " Found: $item"
        } else {
            Write-Output " Missing: $item"
            $allGood = $false
        }
    }
    if ($allGood) {
        Write-Output "All checks passed!"
        return $true
    } else {
        Write-Output "Some {{i:files}} are missing!"
        return $false
    }
}
# Use it:
$verified = VerifyProjectFiles -projectFolder "C:\Users\YourName\Documents\3D_Projects\MyKeychain"
if ($verified) {
    Write-Output "Safe to proceed with processing"
}
```

## Screen Reader Tips for Scripts

### Making Script Output Readable

Problem: Script runs but output scrolls too fast or is hard to follow

Solution 1: Save to file

```powershell
.\my-{{i:script}}.ps1 > {{i:output}}.txt
notepad.exe {{i:output}}.txt
```

Solution 2: Use Write-Output with clear sections

```powershell
Write-Output "========== STARTING =========="
Write-Output ""
# ... {{i:script}} ...
Write-Output ""
Write-Output "========== COMPLETE =========="
```

Solution 3: Pause between major sections

```powershell
Write-Output "Pausing... Press Enter to continue"
Read-Host
```

Your screen reader will announce the pause, give you time to read output.

### Announcing Progress

For long-running scripts:

```powershell
${{i:files}} = ls -n *.scad
$count = 0
foreach (${{i:file}} in ${{i:files}}) {
    $count++
    Write-Output "Processing $count of $(${{i:files}}.Count): ${{i:file}}"
    # Do something with ${{i:file}}
}
Write-Output "All $count {{i:files}} processed!"
```

## Practice Exercises

### Exercise 1: Your First Script

Goal: Create and run a simple script

Steps:

1. Create file: `notepad.exe hello.ps1`
2. Type:
   ```powershell
   Write-Output "Hello from my first PowerShell script!"
   pwd
   ls -n
   ```
3. Save and run: `.\hello.ps1`

Checkpoint: You should see output for each command.

### Exercise 2: Script with a Variable

Goal: Use a variable to make the script flexible

Steps:

1. Create file: `notepad.exe smart-listing.ps1`
2. Type:
   ```powershell
   $targetFolder = "C:\Users\YourName\Documents"
   Write-Output "Listing contents of: $targetFolder"
   ls -n $targetFolder
   ```
3. Edit `$targetFolder` to a real folder on your computer
4. Run: `.\smart-listing.ps1`

Checkpoint: You should see listing of that specific folder.

### Exercise 3: Function

Goal: Create a reusable function

Steps:

1. Create file: `notepad.exe navigate.ps1`
2. Type:
   ```powershell
   function GoTo {
       param([string]$path)
       if (Test-Path -Path $path) {
           cd $path
           Write-Output "Now in: $(pwd)"
           Write-Output "Contents:"
           ls -n
       } else {
           Write-Output "Path does not exist: $path"
       }
   }
   # Test the function:
   GoTo -path "C:\Users\YourName\Documents"
   GoTo -path "C:\Users\YourName\Downloads"
   ```
3. Run: `.\navigate.ps1`

Checkpoint: Both commands should work, showing contents of each folder.

### Exercise 4: Loop

Goal: Use a loop to repeat an action

Steps:

1. Create file: `notepad.exe repeat.ps1`
2. Type:
   ```powershell
   Write-Output "Demonstrating a loop:"
   for ($i = 1; $i -le 5; $i++) {
       Write-Output "Iteration $i: Hello!"
   }
   Write-Output "Loop complete!"
   ```
3. Run: `.\repeat.ps1`

Checkpoint: Should print "Iteration 1" through "Iteration 5".

### Exercise 5: Real-World Script

Goal: Create a useful script for a real task

Steps:

1. Create a folder: `mkdir C:\Users\YourName\Documents\TestFiles`
2. Create some test files:
   ```powershell
   echo "test" > C:\Users\YourName\Documents\TestFiles\file1.txt
   echo "test" > C:\Users\YourName\Documents\TestFiles\file2.txt
   echo "test" > C:\Users\YourName\Documents\TestFiles\file3.txt
   ```
3. Create script: `notepad.exe report.ps1`
4. Type:
   ```powershell
   $folder = "C:\Users\YourName\Documents\TestFiles"
   $files = ls -n $folder
   Write-Output "=== FILE REPORT ==="
   Write-Output "Folder: $folder"
   Write-Output "Total files: $($files.Count)"
   Write-Output ""
   Write-Output "Files:"
   foreach ($file in $files) {
       Write-Output "  - $file"
   }
   Write-Output ""
   Write-Output "=== END REPORT ==="
   ```
5. Run: `.\report.ps1`

Checkpoint: Should show report of all files in the test folder.

## Quiz — Lesson 6

1. What is a PowerShell script?
2. What file extension do PowerShell scripts use?
3. What is a variable and how do you create one?
4. What is a function and why would you use one?
5. How do you run a script?
6. What is a loop and what does `foreach` do?
7. What does `Test-Path` do?
8. How do you handle errors in a script?
9. When would you use `Try-Catch`?
10. What technique makes script output readable for screen readers?

## Extension Problems

1. Auto-Backup Script: Create a script that copies all files from one folder to another, announcing progress
2. File Counter: Write a function that counts files by extension (.txt, .scad, .stl, etc.)
3. Folder Cleaner: Script that deletes files older than 30 days (with user confirmation)
4. Project Template: Function that creates a complete project folder structure with all needed files
5. Batch Rename: Script that renames all files in a folder according to a pattern
6. Log Generator: Create a script that records what it does to a log file for later review
7. Scheduled Task: Set up a script to run automatically every day at a specific time
8. File Verifier: Check that all SCAD files in a folder have corresponding STL exports
9. Report Generator: Create a summary report of all projects in a folder
10. Error Tracker: Script that lists all commands that had errors in your recent history

## Important Notes

- Always test scripts on small sets of files first before running them on important data
- Save your work regularly - use version control if possible
- Test error handling - make sure errors don't crash silently
- Document your scripts - use comments so you remember what each part does
- Backup before batch operations - if something goes wrong, you have the original

## References

- Microsoft PowerShell Scripting Guide: [https://docs.microsoft.com/powershell/scripting/](https://docs.microsoft.com/powershell/scripting/)
- Function Documentation: [https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_functions_advanced](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_functions_advanced)
- Error Handling: [https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_error_handling](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_error_handling)
- Loops: [https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_foreach](https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_foreach)

Next Steps: After mastering this lesson, explore PowerShell modules, remoting, and 3D printing integration in the main curriculum.

---

<a id="ps-unit-exam"></a>

# Unit Exam — Comprehensive Assessment

---

Estimated time: 60-90 minutes

## Key Learning Outcomes Assessed

By completing this unit test, you will demonstrate:

1. Understanding of file system navigation and path concepts
2. Proficiency with file and folder manipulation commands
3. Ability to redirect and pipe command output
4. Knowledge of environment variables and aliases
5. Screen-reader accessibility best practices in terminal environments
6. Problem-solving and command chaining skills

## Target Audience:

Users who have completed Lessons 0–5 and need to demonstrate mastery of PowerShell fundamentals.

## Instructions:

Complete all sections below. For multiple choice, select the best answer. For short answers, write one to two sentences. For hands-on tasks, capture evidence (screenshots or output files) and submit alongside your answers.

## Part A: Multiple Choice Questions (20 questions)

Select the best answer for each question. Each question is worth 1 point.

1. What is the primary purpose of the `PATH` environment variable?
   - A) Store your home directory location
   - B) Tell the shell where to find executable programs
   - C) Configure the visual appearance of the terminal
   - D) Store the current working directory name

2. Which command prints your current working directory?
   - A) `ls -n`
   - B) `cd`
   - C) `pwd`
   - D) `whoami`

3. What does the `~` symbol represent in PowerShell paths?
   - A) The root directory
   - B) The current directory
   - C) The parent directory
   - D) The home directory

4. How do you list only file names (not full details) in a way that is screen-reader friendly?
   - A) `ls`
   - B) `ls -n`
   - C) `ls -l`
   - D) `cat -n`

5. Which command creates a new empty file?
   - A) `mkdir filename`
   - B) `ni filename`
   - C) `touch filename`
   - D) `echo filename`

> [!IMPORTANT]
> `>` **overwrites** a file completely — all previous content is lost. `>>` **appends** to the end of a file, preserving existing content. Using `>` when you meant `>>` will permanently destroy the file's previous contents.

6. What is the difference between `>` and `>>`?
   - A) `>` redirects to file, `>>` displays on screen
   - B) `>` overwrites a file, `>>` appends to a file
   - C) They do the same thing
   - D) `>` is for text, `>>` is for binary

7. What does the pipe operator `|` do?
   - A) Creates a folder
   - B) Sends the output of one command to the input of another
   - C) Deletes files matching a pattern
   - D) Lists all processes

8. Which command copies a file?
   - A) `mv`
   - B) `rm`
   - C) `cp`
   - D) `cd`

9. How do you rename a file from `oldname.txt` to `newname.txt`?
   - A) `cp oldname.txt newname.txt`
   - B) `mv oldname.txt newname.txt`
   - C) `rename oldname.txt newname.txt`
   - D) `rn oldname.txt newname.txt`

10. What is the purpose of `Select-String`?
    - A) Select files in a directory
    - B) Search for text patterns within a file
    - C) Select a string to copy to clipboard
    - D) Select which shell to use

11. Which key combination allows you to autocomplete a path in PowerShell?
    - A) `Ctrl + A`
    - B) `Ctrl + E`
    - C) `Tab`
    - D) `Space`

12. How do you copy text to the Windows clipboard from PowerShell?
    - A) `cat filename > clipboard`
    - B) `cat filename | clip`
    - C) `copy filename`
    - D) `cat filename | paste`

13. What does `Get-Command openscad` do?
    - A) Opens the OpenSCAD application
    - B) Gets help about the OpenSCAD command
    - C) Locates the full path of the openscad executable
    - D) Lists all available commands

14. Which wildcard matches any single character?
    - A) `*`
    - B) `?`
    - C) `%`
    - D) `#`

15. What is the purpose of the `&` call operator?
    - A) Run a script or executable by full path
    - B) Execute all commands in parallel
    - C) Combine multiple commands
    - D) Create an alias

16. How do you create a temporary alias for a command?
    - A) `alias preview='openscad'`
    - B) `Set-Alias -Name preview -Value openscad`
    - C) `New-Alias preview openscad`
    - D) `Alias preview = openscad`

17. Where is your PowerShell profile typically stored?
    - A) C:\Program Files\PowerShell\profile.ps1
    - B) The location returned by `echo $PROFILE`
    - C) ~/PowerShell/profile.ps1
    - D) ~/.bashrc

18. How do you abort a long-running command in PowerShell?
    - A) Press `Escape`
    - B) Press `Ctrl + X`
    - C) Press `Ctrl + C`
    - D) Press `Alt + F4`

19. What command shows the history of previously run commands?
    - A) `history`
    - B) `Get-History`
    - C) `Show-History`
    - D) Both A and B

20. How do you permanently set an alias so it persists across PowerShell sessions?
    - A) Use `Set-Alias` in the terminal every time
    - B) Add the `Set-Alias` line to your PowerShell profile
    - C) Use the Windows Control Panel
    - D) Aliases cannot be made permanent

## Part B: Short Answer Questions (10 questions)

Answer each question in one to two sentences. Each question is worth 2 points.

1. Explain the difference between absolute and relative paths. Give one example of each.

2. Why is `ls -n` preferred over `ls` for screen reader users? Describe what flag you would use to list only files.

3. What is the purpose of redirecting output to a file, and give an example of when you would use `>` instead of `>>`?

> [!WARNING]
> `rm -r ~/Documents/my_folder` permanently deletes the folder and **everything inside it** — all files, all subdirectories — with no confirmation and no undo. Always verify the path with `ls -1` first and consider making a backup with `cp -r` before running recursive deletions.

4. Describe what would happen if you ran `rm -r ~/Documents/my_folder` and why this command should be used carefully.

5. How would you search for all files with a `.scad` extension in your current directory? Write the command.

6. Explain what happens when you pipe the output of `ls -n` into `clip`. What would you do next?

7. What is an environment variable, and give one example of how you might use it in PowerShell.

8. If a program is not in your `PATH`, what two methods could you use to run it from PowerShell?

9. Describe how you would open a file in Notepad and also add a line to it from PowerShell.

10. What is one strategy you would use if your screen reader stops announcing terminal output while using PowerShell?

## Part C: Hands-On Tasks (10 tasks)

Complete each task and capture evidence (screenshots, output files, or command transcripts). Each task is worth 3 points.

### Tasks 1-5: File System and Navigation

1. Create a folder structure `~/Documents/PowerShell_Assessment/Projects` using a single command. Capture the `ls -n` output showing the creation.

2. Create five files named `project_1.scad`, `project_2.scad`, `project_3.txt`, `notes_1.txt`, and `notes_2.txt` inside the `Projects` folder. Use wildcards to list only `.scad` files, then capture the output.

3. Copy the entire `Projects` folder to `Projects_Backup` using `cp -r`. Capture the `ls -n` output showing both folders exist.

4. Move (rename) `project_1.scad` to `project_1_final.scad`. Capture the `ls -n` output showing the renamed file.

5. Delete `notes_1.txt` and `notes_2.txt` using a single `rm` command with wildcards. Capture the final `ls -n` output.

### Tasks 6-10: Advanced Operations and Scripting

6. Create a file called `my_data.txt` with at least four lines using `echo` and `>>`. Then read it with `cat my_data.txt` and capture the output.

7. Use `Select-String` to search for a keyword (e.g., "project") in `my_data.txt` and pipe the results to `clip`. Paste the results into Notepad and capture a screenshot.

8. List all files in the `Projects` folder and redirect the output to `projects_list.txt`. Open it in Notepad and capture a screenshot of the file.

9. Create a temporary alias called `myls` that runs `ls -n`, test it, and capture the output. Then explain what would be required to make it permanent.

10. Run `Get-Help Get-ChildItem` and redirect the output to `help_output.txt`. Open the file in Notepad and capture a screenshot showing at least the first page of help content.

## Grading Rubric

| Section         | Questions | Points Each | Total |
| --------------- | --------- | ----------- | ----- |
| Multiple Choice | 20        | 1           | 20    |
| Short Answer    | 10        | 2           | 20    |
| Hands-On Tasks  | 10        | 3           | 30    |
| Total           | 40        | -           | 70    |

Passing Score: 49 points (70%)

## Helpful Resources for Review

- [PowerShell Command Reference](https://learn.microsoft.com/powershell/scripting/overview)
- [Navigation and File System](https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem)
- [Using Pipes and Filtering](https://learn.microsoft.com/powershell/scripting/learn/shell/using-the-pipeline)
- [Profile and Aliases](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)
- [Screen Reader Accessibility Tips](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)

## Submission Checklist

- [ ] All 20 multiple choice questions answered
- [ ] All 10 short answer questions answered (1-2 sentences each)
- [ ] All 10 hands-on tasks completed with evidence captured
- [ ] Files/screenshots organized and labeled clearly
- [ ] Submission includes this checklist

---

<a id="part-2-cmd"></a>

# Part 2 — Windows Command Prompt (CMD)

---

**Last Updated:** February 2026  
**Total Duration:** 30–45 hours of instruction and practice (for screen reader users)  
**Target Users:** Anyone using a screen reader — NVDA, JAWS, Windows Narrator, and Dolphin SuperNova are all covered throughout this curriculum.  
**Alternate to:** PowerShell curriculum (same concepts, CMD syntax)

_This single file contains the complete CMD Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional files are needed._

---

## Table of Contents

| Section                                                       | Title                                                     | Estimated Time |
| ------------------------------------------------------------- | --------------------------------------------------------- | -------------- |
| [Screen Reader Accessibility Guide](#cmd-accessibility-guide) | NVDA, JAWS, Narrator, and SuperNova reference for CMD     | 1.5 hours      |
| [Lesson Pre: Your First Terminal](#cmd-lesson-pre)            | Opening CMD, first commands, basic navigation             | 1.5–2 hours    |
| [Lesson 0: Getting Started](#cmd-lesson-0)                    | Paths, shortcuts, tab completion                          | 1.5 hours      |
| [Lesson 1: Navigation](#cmd-lesson-1)                         | Moving around the file system confidently                 | 2–2.5 hours    |
| [Lesson 2: File and Folder Manipulation](#cmd-lesson-2)       | Create, copy, move, delete files and folders              | 2.5–3 hours    |
| [Lesson 3: Input, Output, and Piping](#cmd-lesson-3)          | Redirect output, chain commands with pipes                | 2.5–3 hours    |
| [Lesson 4: Environment Variables and Aliases](#cmd-lesson-4)  | Automate settings, create doskey shortcuts                | 2–2.5 hours    |
| [Lesson 5: Filling in the Gaps](#cmd-lesson-5)                | Autorun scripts, history, debugging                       | 2–2.5 hours    |
| [Lesson 6: Advanced Techniques](#cmd-lesson-6)                | Batch scripts, subroutines, loops, professional workflows | 4–4.5 hours    |
| [Unit Exam](#cmd-unit-exam)                                   | Comprehensive assessment — Lessons 0 through 6            | 60–90 minutes  |

**Total:** approximately 30–45 hours including practice exercises

---

## How to Use This File

**If you have never used a terminal before:** read from the top in order. Do not skip lessons — each builds on the one before it.

**If you have used a terminal but not with a screen reader:** start with the Accessibility Guide, skim Lesson Pre, then continue from Lesson 0.

**If you are experienced with both:** jump directly to the lesson you need. Use the quiz at the end of each lesson to self-test before moving on.

**Reference while working:** the Accessibility Guide contains material you will return to throughout the curriculum. Keep a copy open or bookmark that section.

**PowerShell users:** this curriculum covers the same concepts as the PowerShell curriculum but uses CMD syntax. The two curricula are interchangeable as learning paths — choose one and stay consistent.

---

## Curriculum Rules (Read These First)

> [!IMPORTANT]
> **Rule 1 — Always know where you are.** Start every session with `cd` (no arguments) to print your current location. If you don't know your path, you will get lost and may operate on the wrong files.

**Rule 1 — Always know where you are.**  
Every session, first thing: `cd` (with no arguments). If you do not know your path, you will get lost.

> [!WARNING]
> **Files deleted from CMD do not go to the Recycle Bin.** They are permanently gone immediately. Always run `dir /B` to confirm exactly what you are about to delete before running `del` or `rmdir /S`.

**Rule 2 — Check before you delete.**  
Before any `del` or `rmdir` command: `dir /B` to confirm exactly what you are about to remove. Deleted files do not go to the Recycle Bin from CMD.

> [!TIP]
> Always use `dir /B` — never bare `dir`. The `/B` (bare) flag outputs one name per line, which screen readers can follow reliably. Bare `dir` outputs multi-column details that can be difficult to navigate audibly.

**Rule 3 — Use `dir /B` for listings.**  
Always `dir /B` — never bare `dir`. The `/B` flag gives one name per line, which all screen readers can follow reliably.

> [!TIP]
> When terminal output is confusing or overwhelming, redirect it to a file: `command > output.txt`, then open it with `notepad.exe output.txt`. This is clearer than reading raw terminal output and works with all four screen readers.

**Rule 4 — When output is confusing, redirect to a file.**  
`command > output.txt` then `notepad.exe output.txt`. This works with all four screen readers.

**Rule 5 — Save everything you create.**  
Keep all practice files in a dedicated learning folder: `mkdir %USERPROFILE%\CMD_Learning`

---

---

<a id="cmd-accessibility-guide"></a>

# Screen Reader Accessibility Guide

---

Target Users: NVDA, JAWS, and other screen reader users  
Last Updated: 2026

This guide supports the CMD Foundation curriculum and helps screen reader users navigate and work efficiently with the Windows Command Prompt.

## Table of Contents

1. [Getting Started with Screen Readers](#cmd-getting-started)
2. [NVDA-Specific Tips](#cmd-nvda-tips)
3. [JAWS-Specific Tips](#cmd-jaws-tips)
4. [General Terminal Accessibility](#cmd-general-terminal)
5. [Working with Long Output](#cmd-long-output)
6. [Keyboard Shortcuts Reference](#cmd-shortcuts)
7. [Troubleshooting](#cmd-troubleshooting)

<a id="cmd-getting-started"></a>

## Getting Started with Screen Readers

### Which Screen Reader Should I Use?

Both NVDA and JAWS work with CMD; NVDA is free and often easiest to start with. JAWS provides advanced features for power users. Dolphin SuperNova and Windows Narrator are also options:

- Dolphin SuperNova: commercial speech, braille, and magnification (use vendor docs for key mappings).
- Windows Narrator: built into Windows for quick, no-install access.

### Before You Start

1. Start your screen reader before opening CMD.
2. Open Command Prompt and listen for the window title and prompt.
3. If silent, press Alt+Tab to find the window.

### What is CMD?

CMD (Command Prompt) is the classic Windows shell. Common commands include `dir`, `type`, and `more`. Paths use backslashes (e.g., `C:\Users\You`).

<a id="cmd-nvda-tips"></a>

## NVDA-Specific Tips

NVDA is available from [https://www.nvaccess.org/](https://www.nvaccess.org/)

### Dolphin SuperNova

Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) — commercial screen reader and magnifier; check institutional licensing.

### Windows Narrator

Windows Narrator: [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) — built-in, simpler command set; useful when third-party readers are unavailable.

### Key Commands for CMD

| Command         | What It Does                                          |
| --------------- | ----------------------------------------------------- |
| NVDA+Home       | Read the current line (your command or output)        |
| NVDA+Down Arrow | Read from cursor to end of screen                     |
| NVDA+Up Arrow   | Read from top to cursor                               |
| NVDA+Page Down  | Read next page                                        |
| NVDA+Page Up    | Read previous page                                    |
| NVDA+F7         | Open the Review Mode viewer (can scroll through text) |

### Example: Reading Long Output

If `dir` produces many lines, redirect to a file and open it in Notepad:

```cmd
dir /b > list.txt
notepad list.txt
```

`dir /b` shows one item per line (screen reader friendly).

<a id="cmd-jaws-tips"></a>

## JAWS-Specific Tips

JAWS is available from [https://www.freedomscientific.com/](https://www.freedomscientific.com/)

### Key Commands for CMD

| Command           | What It Does               |
| ----------------- | -------------------------- |
| Insert+Down Arrow | Read line by line downward |
| Insert+Up Arrow   | Read line by line upward   |
| Insert+Page Down  | Read next page of text     |
| Insert+Page Up    | Read previous page of text |

### Example: Reading Long Output

1. Redirect: `dir /b > list.txt`
2. Open Notepad: `notepad list.txt`
3. Use Insert+Ctrl+Down to read full contents.

<a id="cmd-general-terminal"></a>

## General Terminal Accessibility

### Understanding the CMD Layout

The Command Prompt window shows a title bar, a content area, and the prompt (e.g., `C:\Users\YourName>`).

### The CMD Prompt

Example:

```plaintext
C:\Users\YourName>
```

### Navigation Sequence

1. Screen reader announces the title
2. Then it announces the prompt line
3. Anything above prompt is prior output

<a id="cmd-long-output"></a>

## Working with Long Output

### Solution 1: Redirect to a File

```cmd
dir /b > list.txt
notepad list.txt
```

### Solution 2: Use Pagination

```cmd
type largefile.txt | more
```

Use Space for next page and Q to quit.

### Solution 3: Filter Output

```cmd
dir /b | findstr /R "\.scad$"
```

### Solution 4: Count Before Displaying

```cmd
dir /b | find /v "" /c
```

<a id="cmd-shortcuts"></a>

## Keyboard Shortcuts Reference

| Key        | Action                          |
| ---------- | ------------------------------- |
| Up Arrow   | Show previous command           |
| Down Arrow | Show next command               |
| Tab        | Auto-complete file/folder names |
| Home       | Jump to start of line           |
| End        | Jump to end of line             |
| Ctrl+C     | Stop command                    |
| Enter      | Run command                     |

<a id="cmd-troubleshooting"></a>

## Troubleshooting

### Problem: "I Can't Hear the Output"

1. Redirect to file and open in Notepad.
2. Use End to jump to the end of text.

### Problem: "Tab Completion Isn't Working"

1. Type at least one character before Tab.

### Problem: "Command Not Found"

1. Use `where programname` to find installed programs.

## Pro Tips

1. Use `dir /b` for one-per-line listings.
2. Create a personal notes file and open it in Notepad for quick reference.

## Recommended Workflow

1. `cd` to the project folder
2. `dir /b` to list files
3. Redirect large output to files and open in Notepad

## Additional Resources

- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/support/](https://www.freedomscientific.com/support/)
- Windows CMD Reference: [https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands)
- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/support/](https://www.freedomscientific.com/support/)
- Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)
- Windows Narrator: [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator)

---

<a id="cmd-lesson-pre"></a>

# Lesson Pre: Your First Terminal — Screen Reader Navigation Fundamentals

---

**Duration:** 1.5-2 hours (for screen reader users)  
**Prerequisites:** None — this is the starting point  
**Accessibility Note:** This lesson is designed specifically for screen reader users. Tips are provided for NVDA, JAWS, Windows Narrator, and Dolphin SuperNova.

---

## What is a Terminal?

A terminal (also called command line or Command Prompt) is a text-based interface where you type commands instead of clicking buttons. Think of it like sending written instructions to your computer instead of pointing and clicking.

**Why learn this?**

- Faster and more precise work, especially for 3D printing scripts and automation.
- Essential for using tools like OpenSCAD.
- Accessibility: command-line tools work reliably with screen readers — output is plain text.
- Simple automation without complex graphical interfaces.

---

## Opening Command Prompt for the First Time

### 3DMake: Your First Real-World Goal

**3DMake** ([github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)) is a free, accessibility-first command-line tool for designing and 3D-printing models entirely from the terminal — no mouse required. Every CMD skill in this curriculum directly supports a real 3DMake workflow.

Here is the end goal — one command that builds your OpenSCAD model, slices it, and sends it to the printer:

```cmd
REM Navigate to your project folder
cd %USERPROFILE%\Documents\3d_projects\my_cube

REM Build, slice, and {{i:print}} in a single {{i:command}}
3dm {{i:build}} slice {{i:print}}
```

Keep this goal in mind as you work through each lesson.

---

## Opening Command Prompt for the First Time

### Method 1: Search (Easiest)

1. Press the **Windows key** alone.
2. Type: `cmd`
3. You will hear search results appear.
4. Press **Enter** to open the first result (Command Prompt).

### Method 2: Using the Run Dialog

1. Press **Windows key + R** (opens the Run dialog).
2. Type: `cmd`
3. Press **Enter**.

### Method 3: From the Start Menu

1. Press the **Windows key**.
2. Navigate to **Windows System** or **Windows Tools** (depending on your Windows version).
3. Open **Command Prompt**.

### First Connection: Understanding the Prompt

When Command Prompt opens, your screen reader will announce the window title and then the **prompt**. The prompt is where you type commands.

**What you will hear:**

```plaintext
C:\Users\YourName>
```

**What this means:**

- `C:\Users\YourName` = Your current location (the path).
- `>` = The prompt is ready for input.

Your cursor is right after the `>`. This is where you type.

---

## Your First Commands (Screen Reader Edition)

### Command 1: "Where Am I?" — `cd`

Running `cd` with no arguments shows your current directory.

**Type this and press Enter:**

```cmd
cd
```

**What you will hear:**
Your screen reader announces the current path, for example:

```plaintext
C:\Users\YourName
```

**Understanding paths:**

- A path shows your location in the file system, like a mailing address.
- Windows paths use backslashes: `C:\Users\YourName\Documents`
- Think of it as nested folders: `C:\` (the main drive) > `Users` > `YourName` > `Documents`

### Command 2: "What's Here?" — `dir`

**Type this and press Enter:**

```cmd
dir /B
```

**What you will hear:**
Your screen reader announces folder and file names, one per line. The `/B` flag gives a clean "bare" listing — names only, no dates or sizes — which is much easier to follow with a screen reader.

If you want more detail (sizes, dates), run `dir` without `/B`. But for navigation, `dir /B` is preferred.

### Command 3: "Go There" — `cd Documents`

**Type this and press Enter:**

```cmd
cd Documents
```

**What you will hear:**
The prompt changes to show your new location:

```plaintext
C:\Users\YourName\Documents>
```

**Practice navigation:**

1. Run `cd` to confirm you are in Documents.
2. Run `dir /B` to see what is there.
3. Go back up: `cd ..` (the `..` means "go up one level").
4. Run `cd` again to confirm.
5. Return to Documents: `cd Documents`

---

## Reading Screen Reader Output (Critical Skills)

### Dealing with Long Lists

When you run `dir` in a folder with many files, the list may be very long. Here is how to manage it:

**Solution 1: Save to a File**

```cmd
dir /B > list.txt
notepad.exe list.txt
```

This saves the listing to a file and opens it in Notepad, where you can read it calmly with your screen reader.

**Solution 2: Use Pause**

```cmd
dir /B | more
```

Shows output one page at a time. Press **Space** to go to the next page, **Q** to quit. Note: some screen readers read `more` output less reliably than a saved file — if this is difficult, use Solution 1.

### Tab Completion

Tab completion is one of the most powerful screen reader techniques in the terminal.

**How it works:**

1. Type the first few letters of a folder or file name.
2. Press **Tab**.
3. Command Prompt automatically completes the rest.

**Example:**

1. You are at `C:\Users\YourName>`
2. Type: `cd Doc`
3. Press **Tab**
4. Command Prompt completes it to: `cd Documents`
5. Press **Enter** to navigate there.

With a screen reader, when you press Tab the screen reader announces the completed command — much faster and more accurate than typing the whole thing.

---

## Creating and Viewing Files

### Create a Simple File

```cmd
echo Hello, Command Prompt! > hello.txt
```

- `echo` outputs text.
- `>` redirects it to a file called `hello.txt`.

### Read the File Back

```cmd
type hello.txt
```

Your screen reader announces the file contents.

### Open and Edit the File

```cmd
notepad.exe hello.txt
```

Opens the file in Notepad for comfortable editing with your screen reader.

---

## Essential Keyboard Shortcuts

| Key Combination | What It Does                                                   |
| --------------- | -------------------------------------------------------------- |
| **Up Arrow**    | Shows your previous command (press again for earlier commands) |
| **Down Arrow**  | Shows a more recent command in history                         |
| **Tab**         | Auto-completes folder and file names                           |
| **Ctrl+C**      | Stops a running command                                        |
| **cls**         | Clears the screen (type this and press Enter)                  |
| **Enter**       | Runs the command you have typed                                |
| **Home**        | Moves cursor to start of command line                          |
| **End**         | Moves cursor to end of command line                            |

---

## Screen Reader-Specific Tips

### NVDA Users

NVDA is available free from [https://www.nvaccess.org/](https://www.nvaccess.org/)

1. **After running a command**, press **NVDA+Home** (Insert+Home or CapsLock+Home) to read the current line.
2. **To read all output**, press **NVDA+Down Arrow** to read from the cursor to the end of the screen.
3. **To browse previous output**, use the NVDA review cursor: press **Numpad 8/2** (desktop) or the equivalent laptop keys to move up and down through lines.
4. **If output scrolled past**, redirect to a file: `command > output.txt`, then `notepad.exe output.txt`.
5. **To open NVDA settings**: press **NVDA+N** (opens NVDA menu), then go to Preferences.

> **NVDA key note:** The NVDA modifier key is **Insert** by default on desktops. On laptops it is often **CapsLock**. Check your NVDA settings if these shortcuts do not work as described.

### JAWS Users

JAWS is available from [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)

1. **After running a command**, press **Insert+Up Arrow** to re-read the current line.
2. **To read all output**, press **Insert+Ctrl+Down** to read to the end of the screen.
3. **To move through output line by line**, press **Insert+Down Arrow** repeatedly.
4. **If output is too long**, redirect to a file: `command > output.txt`, then `notepad.exe output.txt`.
5. **JAWS demo mode reminder:** If you are using JAWS without a license, sessions are limited to approximately 40 minutes. Save your work and restart the session if JAWS stops responding.

> **JAWS key note:** The JAWS modifier key is **Insert** by default. On some laptops it can be set to **CapsLock** in JAWS Settings Center.

### Windows Narrator Users

Windows Narrator is built into Windows 10 and Windows 11. Enable it with **Windows+Ctrl+Enter**.

1. **After running a command**, press **Narrator+D** (CapsLock+D or Insert+D) to read the current line.
2. **To read all output from here**, press **Narrator+R** to read from the cursor position.
3. **To move through output**, use **Narrator+Up/Down Arrow** in scan mode (press **Narrator+Space** to toggle scan mode on).
4. **For long outputs**, always redirect to a file: `command > output.txt`, then `notepad.exe output.txt`. Notepad is more comfortable for Narrator users than reading directly from the terminal.
5. **Narrator settings**: Windows key > Settings > Accessibility > Narrator.

> **Narrator key note:** The Narrator modifier key is **CapsLock** or **Insert**. You can change it in Settings > Accessibility > Narrator > Keyboard shortcuts.

### Dolphin SuperNova Users

Dolphin SuperNova is available from [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)

1. **After running a command**, press **CapsLock+L** to read the current line.
2. **To read all output**, press **CapsLock+Numpad Plus** (say all from current position).
3. **To move through output**, press **CapsLock+Numpad 8** (up) and **CapsLock+Numpad 2** (down) to move line by line through the review buffer.
4. **For long outputs**, redirect to a file: `command > output.txt`, then `notepad.exe output.txt`.
5. **SuperNova settings**: press **CapsLock+SpaceBar** to open the SuperNova Control Panel.

> **Dolphin key note:** The SuperNova modifier key is **CapsLock** by default. This can be changed in the SuperNova Control Panel > Keyboard.

---

## Common Issue: "I Can't Hear the Output"

This happens to everyone starting out. Here are the solutions:

1. **Make sure your screen reader was running before you opened Command Prompt.** If not, close Command Prompt, confirm your screen reader is running, then reopen it.
2. **Press End** to make sure your cursor is at the prompt.
3. **Redirect to a file**: `command > output.txt`, then `notepad.exe output.txt`. This always works with all screen readers.
4. **Use the screen reader's review commands** listed above to scan back through previous output.

---

## Practice Exercises

Complete these in order. Take your time.

### Exercise 1: Basic Navigation

1. Open Command Prompt.
2. Run `cd` and note your location.
3. Run `dir /B` and listen to the listing.
4. Type `cd Documents` and press Enter.
5. Run `cd` to confirm your new location.
6. Run `dir /B` in this new location.

**Goal:** You know where you are and what is around you.

### Exercise 2: Using Tab Completion

1. In your home directory, type `cd D` (just those two characters).
2. Press **Tab**.
3. Command Prompt should auto-complete to a folder starting with D.
4. Repeat with other folder names.
5. Try `cd Down` and Tab to `Downloads`.

**Goal:** Tab completion feels natural.

### Exercise 3: Creating and Viewing Files

1. Create a file: `echo Test content > test.txt`
2. View it: `type test.txt`
3. Create another: `echo Line 2 > another.txt`
4. List both: `dir /B *.txt`

**Goal:** You understand create, view, and list operations.

### Exercise 4: Going Up Levels

1. Navigate into several folders: `cd Documents`, then `cd folder1`, etc.
2. From inside, run `cd ..` multiple times to come back up.
3. After each `cd ..`, run `cd` to confirm your location.

**Goal:** You are comfortable with relative navigation using `..`

### Exercise 5: Redirecting Output

1. Create a listing: `dir /B > directorylist.txt`
2. Open it: `notepad.exe directorylist.txt`
3. Read it with your screen reader.
4. Close Notepad.

**Goal:** You can save long outputs to files for easier reading.

---

## Checkpoint Questions

After this lesson, you should be able to answer all ten with confidence:

1. What does `cd` do with no arguments?
2. What does `dir /B` do?
3. Why do we use `/B` with `dir`?
4. What is your current path right now?
5. How do you navigate to a new folder?
6. How do you go up one level?
7. What is the Tab key for?
8. What does `echo text > file.txt` do?
9. How do you read a file back in the terminal?
10. How do you stop a command that is running?

**Answer all 10 before moving to Command Line Lesson 0.**

---

## Common Questions

**Q: Should I use Command Prompt or PowerShell?**  
A: Command Prompt is simpler and a good starting point. PowerShell is more powerful. Both work well with all four screen readers covered in this curriculum. Start with whichever your curriculum pathway specifies.

**Q: Why is my screen reader not reading the output?**  
A: This is common. Use `command > file.txt` to save output to a file, then open it with `notepad.exe file.txt` for reliable reading.

**Q: What if I type something wrong?**  
A: Press **Enter** and you will see an error message. Type the correct command on the next line. No harm done.

**Q: How do I get help with a command?**  
A: Type `help command-name` (for example, `help cd`). Or type `command /?` for built-in help (for example, `dir /?`).

---

## Next Steps

Once comfortable with these basics, move to **Command Line Lesson 0: Getting Started** for deeper path understanding, then continue through Command Line Lesson 1 to Command Line Lesson 5 for full terminal mastery.

---

<a id="ps-troubleshooting"></a>

## Troubleshooting

| Issue                          | Solution                                                                  |
| ------------------------------ | ------------------------------------------------------------------------- |
| Command Prompt won't open      | Press Windows+R, type `cmd`, press Enter                                  |
| Cannot hear the output         | Redirect to a file: `command > output.txt`, then `notepad.exe output.txt` |
| Tab completion not working     | Type at least one character before pressing Tab                           |
| Command not found              | Check spelling; try `help` for a list of available commands               |
| Stuck in a command             | Press **Ctrl+C** to stop it                                               |
| JAWS stops working mid-session | If using JAWS demo: restart computer, demo sessions last ~40 minutes      |

---

## Resources

- **NVDA:** [https://www.nvaccess.org/](https://www.nvaccess.org/)
- **JAWS:** [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- **Windows Narrator guide:** [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator)
- **Dolphin SuperNova:** [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)
- **Windows CMD Reference:** [https://example.com](https://example.com)

---

<a id="cmd-lesson-0"></a>

# Lesson 0: Getting Started — Layout, Paths, and the Shell

---

Estimated time: 20-30 minutes

## Learning Objectives

- Launch Command Prompt and locate the prompt
- Understand path notation and shortcuts (`C:\`, `..`, `.`)
- Use tab completion to navigate quickly

## Materials

- Computer with Windows
- Editor (Notepad/VS Code)

## Step-by-step Tasks

1. Open Command Prompt and note the prompt (it includes the current path).
2. Run `cd` and say or note the printed path.
3. Use `dir /B` to list names in your home directory.
4. Practice `cd Documents`, `cd ..` and `cd \` until comfortable.
5. Try tab-completion: type `cd D` and press Tab.

## Checkpoints

- Confirm you can state your current path and move to `Documents`.

## 3DMake Quick-Start: Your First Real Project

You now know enough CMD to set up a real 3DMake project. Do this now — it is the fastest path to a printed object.

**Step 1 — Download and run the 3DMake setup wizard:**

```cmd
REM Go to your Downloads folder (where {{i:you}} extracted 3dmake_windows.zip)
cd %USERPROFILE%\Downloads\3dmake

REM Run the guided setup (answer the questions about your {{i:printer}})
3dm setup
```

**Step 2 — Create your first project:**

```cmd
REM Create a folder for all your 3D projects
mkdir %USERPROFILE%\Documents\3d_projects

REM Create your {{i:first}} project folder and initialize it
mkdir %USERPROFILE%\Documents\3d_projects\my_cube
cd %USERPROFILE%\Documents\3d_projects\my_cube
3dm {{i:new}}
```

**Step 3 — Confirm the project structure:**

```cmd
REM You should see three items: src, {{i:build}}, and 3dmake.toml
dir /B
```

You just used `mkdir`, `cd`, and `dir /B` on a real project. You are ready to print.

## Checkpoints

- Confirm you can state your current path and move to `Documents`.

## Quiz - Lesson CMD.0

1. What is a path?
2. What does `..` mean?
3. How do you autocomplete a path?
4. How do you go up one directory?
5. What command lists only names (`dir` flag)?
6. True or False: On Windows, CMD uses backslashes (`\`) in paths, but forward slashes (`/`) are also accepted in some contexts.
7. Explain the difference between an absolute path and a relative path.
8. If you are in `C:\Users\YourName\Documents` and you type `cd ..`, where do you end up?
9. What happens when you press Tab while typing a folder name in Command Prompt?
10. Describe a practical reason why understanding paths is important for a 3D printing workflow.
11. What does `C:\` mean in a path, and when would you use it?
12. If a folder path contains spaces (e.g., `Program Files`), how do you navigate to it with `cd`?
13. Explain what the prompt `C:\Users\YourName>` tells you about your current state.
14. How would you navigate to your home directory from any location using a single command?
15. What is the advantage of using relative paths (like `..`) versus absolute paths in automation scripts?

## Extension Problems

1. Create a nested folder and practice `cd` into it by typing partial names and using Tab.
2. Use `dir /B /A:F` to list only files in a folder.
3. Save `cd` output (the path) to a file and open it in Notepad.
4. Try `cd` into a folder whose name contains spaces; observe how quotes are handled.
5. Create a short note file and open it from Command Prompt.
6. Build a folder structure that mirrors your project organization; navigate to each level and document the path.
7. Use `echo %cd%` to print your current path and save it to a file.
8. Investigate special paths (e.g., `%USERPROFILE%`, `%TEMP%`); write down what each contains and when you'd use them.
9. Compare absolute vs. relative paths by navigating to the same folder using each method; explain which is easier for automation.
10. Create a batch file that changes to a frequently-used folder and lists its contents in one command; test it from different starting locations.
11. Navigate to three different locations and at each one note the prompt, the path from `cd`, and verify you understand what each shows.
12. Create a complex folder tree (at least 5 levels deep) and navigate it using only relative paths; verify your location at each step.
13. Document all path shortcuts you know (`C:\`, `..`, `.`) and demonstrate each one works as expected.
14. Write a guide for a peer on how to understand the Command Prompt and path notation without using GUI file explorer.
15. Create a troubleshooting flowchart: if someone says "I don't know where I am," what commands do you give them to find out?

## References

- Microsoft. (2024). _Command line reference_. [https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)
- Microsoft. (2024). _Using the cd command_. [https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd_1](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd_1)

## Helpful Resources

- [Windows Command Reference](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands-glossary)
- [CD Command Guide](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd)
- [DIR Command Reference](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/dir)
- [Understanding Windows Paths](https://superuser.com/questions/167461/what-are-path-separators-on-windows)

---

<a id="cmd-lesson-1"></a>

# Lesson 1: Navigation — Moving Around Your File System

---

**Duration:** 1.5-2 hours (for screen reader users)  
**Prerequisites:** Command Line Lesson Pre and Command Line Lesson 0  
**Learning Objectives:**

- Navigate confidently to any folder location
- Understand and use relative versus absolute paths
- Use shortcuts to move between common folders
- Organize your file system logically

---

## Core Navigation Commands

### Command: `cd` (Change Directory)

```cmd
cd FolderName          :: Go {{i:into}} a folder
cd ..                  :: Go up {{i:one}} level
cd \                   :: Go to root of current drive (e.g., C:\)
cd %USERPROFILE%       :: Go to home directory
```

### Command: `dir /B` (List Contents)

```cmd
dir /B                 :: {{i:List}} all names ({{i:one}} per line, screen-{{i:reader}} friendly)
dir /B /A:D            :: {{i:List}} only directories/folders
dir /B /A:F            :: {{i:List}} only {{i:files}}
```

### Command: Show Current Location

```cmd
cd                     :: Running cd with no arguments shows current path
```

---

## Understanding Paths

### Absolute Paths (Full Address)

An absolute path starts from the root and shows the complete location:

```cmd
C:\Users\YourName\Documents\3DPrinting
```

- `C:\` — The C drive root
- `Users` — First folder
- `YourName` — Your user folder
- `Documents` — Documents folder
- `3DPrinting` — Your 3D printing folder

**Navigate there directly:**

```cmd
cd C:\Users\YourName\Documents\3DPrinting
```

### Relative Paths (Directions From Here)

```cmd
cd Documents\3DPrinting    :: Go {{i:into}} Documents, then {{i:into}} 3DPrinting
cd ..                      :: Go up {{i:one}} level
cd ..\..                   :: Go up two levels
```

**Shortcuts:**

- `.` = Current folder
- `..` = Parent folder (up one level)
- `%USERPROFILE%` = Your home folder

---

## Common Navigation Patterns

### Pattern 1: Navigating Down

```cmd
C:\>cd Users
C:\Users>cd YourName
C:\Users\YourName>cd Documents
C:\Users\YourName\Documents>
```

### Pattern 2: Navigating Up

```cmd
C:\Users\YourName\Documents>cd ..
C:\Users\YourName>cd ..
C:\Users>cd ..
C:\>
```

### Pattern 3: Jump to a Known Path

```cmd
C:\Deep\Folder\Somewhere>cd C:\Users\YourName
C:\Users\YourName>
```

### Pattern 4: Going Home

```cmd
cd %USERPROFILE%
```

---

## Special Folders and Shortcuts

```cmd
%USERPROFILE%              :: Your home folder
%USERPROFILE%\Desktop      :: Your Desktop
%USERPROFILE%\Documents    :: Your Documents
%USERPROFILE%\Downloads    :: Your Downloads
%ProgramFiles%             :: Program Files folder
C:\                        :: Root of C drive
```

---

## Tab Completion (Essential Skill)

1. Type the first few characters of a folder name.
2. Press **Tab**.
3. Command Prompt completes it.

**Example:**

```cmd
C:\Users\YourName>cd Doc  [press Tab]
C:\Users\YourName>cd Documents
```

- Your screen reader announces the completed name immediately.
- Press **Tab** multiple times to cycle through all matches.

---

## Screen Reader Tips for Navigation

### NVDA Users

1. After each `cd` command, run `cd` alone to confirm location. Press **NVDA+Home** (Insert+Home) to read the current line.
2. Press **NVDA+Down Arrow** to read through `dir /B` output.
3. For long listings: `dir /B > listing.txt`, then `notepad.exe listing.txt`.

### JAWS Users

1. After each `cd` command, press **Insert+Up Arrow** to re-read the current line.
2. Press **Insert+Down Arrow** repeatedly to read output line by line.
3. For long listings: `dir /B > listing.txt`, then `notepad.exe listing.txt`.

### Windows Narrator Users

1. After each `cd` command, press **Narrator+D** (CapsLock+D) to read the current line.
2. Press **Narrator+R** to read output from the current position.
3. For long listings, always redirect to a file and open in Notepad — Notepad is more comfortable for Narrator users than reading directly from the terminal buffer.

### Dolphin SuperNova Users

1. After each `cd` command, press **CapsLock+L** to read the current line.
2. Press **CapsLock+Numpad Plus** (say all) to read all output from the current position.
3. For long listings: `dir /B > listing.txt`, then `notepad.exe listing.txt`.

### Best Practice for All Screen Readers

Always confirm your location after moving:

```cmd
cd FolderName
cd                        :: Verify your {{i:new}} location
```

---

## Practice Exercises

### Exercise 1: Basic Down Navigation

1. `cd %USERPROFILE%`
2. Run `cd` to see location.
3. `dir /B`
4. `cd Documents`
5. Run `cd` to confirm.
6. `dir /B`

### Exercise 2: Using Tab Completion

1. `cd %USERPROFILE%`
2. Type `cd Doc` then press **Tab**.
3. Press **Enter**.
4. Run `cd` to confirm.

### Exercise 3: Navigating Up

1. Navigate several levels deep.
2. Run `cd` to see full path.
3. Use `cd ..` to go up one level at a time.
4. Run `cd` after each step.

### Exercise 4: Absolute Path Navigation

1. Navigate deep (3+ levels).
2. Run `cd %USERPROFILE%` to jump home.
3. Run `cd` to confirm.

### Exercise 5: Creating and Navigating a Structure

```cmd
mkdir 3DPractice
cd 3DPractice
mkdir Models
cd Models
mkdir {{i:OpenSCAD}}
cd {{i:OpenSCAD}}
```

Run `cd` at each level. Then navigate back up using only `cd ..`.

---

## Checkpoint Questions

Answer all 10 before moving to Command Line Lesson 2:

1. What is the difference between `cd Documents` and `cd \`?
2. What does `cd ..` do?
3. How do you go to your home folder from anywhere?
4. What is an absolute path? Give an example.
5. What is a relative path? Give an example.
6. How do you confirm your current location?
7. What does Tab completion do?
8. How would you navigate 3 levels deep, then back home?
9. What is the difference between `.` and `..`?
10. If you are lost, what command should you run first?

---

## Extension Problems

1. Create a folder with spaces in the name (e.g., `My Projects`) and navigate to it using quotes.
2. Use Tab completion to navigate 5+ levels deep without typing full names.
3. Create a script that saves `cd` output at each level to a log file.
4. Navigate to the same destination using both absolute and relative paths from different starting locations.
5. Build a complex folder tree (5+ levels) and navigate using only relative paths.
6. Document the full paths to your 5 most-used folders.
7. Create folders named `01Folder`, `02Folder`, etc. and practice Tab completion through them.
8. Navigate to a folder, save the path with `cd > mypath.txt`, navigate away, then return using the saved path.
9. Challenge: navigate to a destination using only relative paths without running `cd` to check at each step.
10. Create a batch file that navigates to a project folder and lists its contents in one step.

---

## Common Issues

### "The system cannot find the path specified"

- Check spelling with `dir /B` to see correct folder names.
- Use Tab completion to avoid typos.
- Use the absolute path: `cd C:\Users\YourName\Documents`.

### "I'm lost"

```cmd
cd
```

This always shows your current location.

### Tab Completion Not Working

- Type at least one character before pressing Tab.
- Confirm the folder exists with `dir /B`.
- Press Tab again to cycle through multiple matches.

---

## Quick Reference

```cmd
cd                         :: Show current location
cd FolderName              :: Go {{i:into}} a folder
cd ..                      :: Go up {{i:one}} level
cd ..\..                   :: Go up two levels
cd \                       :: Go to drive root
cd %USERPROFILE%           :: Go to home folder
dir /B                     :: {{i:List}} folder contents
dir /B /A:D                :: {{i:List}} only folders
dir /B /A:F                :: {{i:List}} only {{i:files}}
```

---

## Next Steps

Complete all exercises, pass the checkpoint questions, then move to **Command Line Lesson 2: File & Folder Manipulation**.

---

<a id="cmd-lesson-2"></a>

# Lesson 2: File and Folder Manipulation

---

**Duration:** 2-2.5 hours (for screen reader users)  
**Prerequisites:** Command Line Lesson Pre, Command Line Lesson 0, Command Line Lesson 1

**Learning Objectives:**

- Create, copy, move, and delete files and folders safely
- Use wildcards to operate on multiple files
- Understand dangerous operations and how to stay safe
- Rename files and understand file extensions

---

## Core File Manipulation Commands

### Create Folders: `mkdir`

```cmd
mkdir FolderName                     :: Create a single folder
mkdir Folder1 Folder2 Folder3        :: Create multiple folders at once
mkdir A\B\C                          :: Create nested folders (A, then B inside A, then C inside B)
```

### Create Files: `echo` with Redirection

```cmd
echo This is some content > filename.txt    :: Create a {{i:file}} with {{i:text}} content
echo. > emptyfile.txt                       :: Create an empty {{i:file}}
```

Note: `echo.` (echo followed immediately by a period, no space) creates an empty file. `echo` with a space would put a space character in the file.

### Copy Files: `copy`

```cmd
{{i:copy}} source.txt destination.txt          :: Copy a {{i:file}} to a {{i:new}} {{i:name}}
{{i:copy}} source.txt backup\                  :: Copy a {{i:file}} {{i:into}} a folder
{{i:copy}} *.txt backup\                       :: Copy all .txt {{i:files}} to backup folder
```

### Copy Folders: `xcopy`

```cmd
xcopy sourcefolder destinationfolder /E /I    :: Copy a folder and all its contents
```

- `/E` copies all subdirectories including empty ones.
- `/I` treats the destination as a folder (not a file) if it doesn't exist.

### Move and Rename: `move`

```cmd
move oldname.txt newname.txt             :: Rename a {{i:file}}
move {{i:file}}.txt folder\                    :: Move a {{i:file}} {{i:into}} a folder
move *.txt archive\                      :: Move all .txt {{i:files}} to archive folder
```

`move` renames when both source and destination are in the same folder. It moves when the destination is a different folder.

### Delete Files: `del`

> [!CAUTION]
> The `/Q` flag suppresses the confirmation prompt — `del /Q` deletes immediately and silently. Only use `/Q` in scripts where you have already verified the targets; never use it interactively when learning.

```cmd
del filename.txt                         :: Delete {{i:one}} {{i:specific}} {{i:file}}
del *.txt                                :: Delete all .txt {{i:files}} in current folder
del /Q *.tmp                             :: Delete quietly (no confirmation prompt)
```

> [!WARNING]
> `del` does **not** send files to the Recycle Bin. Deleted files are permanently gone with no undo. Always verify the target with `dir /B` before deleting.

### Delete Folders: `rmdir`

```cmd
rmdir foldername                         :: Delete an empty folder
rmdir /S /Q foldername                   :: Delete a folder and ALL its contents (no undo)
```

> [!WARNING]
> `rmdir /S /Q` permanently deletes a folder and **all its contents** with no confirmation and no undo. Always verify the exact folder name with `dir /B` first — one wrong character can delete the wrong folder entirely.

---

## Safe File Operations

> [!CAUTION]
> **Check, then delete.** Never run `del` or `rmdir` without first running `dir /B` to confirm exactly what you're about to remove. Wildcards like `del *.txt` will delete every matching file instantly and permanently.

### Rule 1: Always Check Before Deleting

```cmd
dir /B                   :: See exactly what is here
dir /B *.txt             :: See exactly which .txt {{i:files}} exist
del *.txt                :: Only then delete
```

### Rule 2: Make Backups First

```cmd
mkdir backup
{{i:copy}} *.txt backup\       :: Copy all .txt {{i:files}} to a backup folder {{i:first}}
del *.txt                :: Now safe to delete originals
```

### Rule 3: Test on One File First

```cmd
del {{i:test}}-{{i:one}}-{{i:file}}.txt    :: Test deletion on a single {{i:file}}
dir /B                   :: Confirm it is gone
```

Only then proceed with bulk operations.

---

## Using Wildcards

Wildcards let you operate on multiple files matching a pattern.

### `*` Wildcard (Match Any Number of Characters)

```cmd
dir /B *.txt             :: {{i:List}} all {{i:files}} ending in .txt
{{i:copy}} *.scad backup\      :: Copy all .scad {{i:files}} to backup
del *.tmp                :: Delete all .tmp {{i:files}}
```

### `?` Wildcard (Match Exactly One Character)

```cmd
dir /B {{i:file}}?.txt         :: Matches file1.txt, file2.txt, filea.txt, etc.
{{i:copy}} model?.scad models\ :: Copy model1.scad, model2.scad, etc.
```

---

## Practical Examples

## 3DMake in Practice: Navigating a Project

Navigation commands are exactly what you need to explore and manage 3DMake projects:

```cmd
REM Go to your project root
cd %USERPROFILE%\Documents\3d_projects\my_cube

REM See the project layout: src, {{i:build}}, 3dmake.toml
dir /B

REM Enter the source folder where your .scad model {{i:files}} live
cd src
dir /B

REM Open the main model in Notepad
3dm edit-model

REM Go back to project root, then check {{i:build}} {{i:output}}
cd ..
cd {{i:build}}
dir /B *.stl

REM Return to project root
cd ..

REM Use wildcards to find all projects with "{{i:cube}}" in the {{i:name}}
dir /B %USERPROFILE%\Documents\3d_projects\*{{i:cube}}*
```

Tab completion makes navigation fast: type `cd %USERPROFILE%\Doc` and press Tab.

---

## Practical Examples

### Example 1: Create a Project Structure

```cmd
mkdir 3DProjects
cd 3DProjects
mkdir Models Prints Documentation Backups
dir /B /A:D
```

### Example 2: Backup Before Editing

```cmd
{{i:copy}} project.scad project-backup.scad    :: Create a backup {{i:copy}}
:: (edit project.scad)
{{i:copy}} project.scad project-v2.scad        :: Save a {{i:new}} versioned {{i:copy}}
```

### Example 3: Organize Files by Type

```cmd
mkdir scad-{{i:files}}
mkdir {{i:text}}-{{i:files}}
move *.scad scad-{{i:files}}\
move *.txt {{i:text}}-{{i:files}}\
dir /B /A:D
```

---

## Practice Exercises

### Exercise 1: Create a Folder Structure

1. `mkdir practice-session`
2. `cd practice-session`
3. `mkdir files documents models`
4. `dir /B /A:D`

**Goal:** Create organized folder structures confidently.

### Exercise 2: Create and Copy Files

1. `echo Hello World > test.txt`
2. `type test.txt`
3. `copy test.txt test-backup.txt`
4. `dir /B *.txt`
5. `type test-backup.txt`

**Goal:** Create and copy files without errors.

### Exercise 3: Safe Deletion Practice

1. `echo content > file1.txt`
2. `echo content > file2.txt`
3. `echo content > file3.txt`
4. `dir /B *.txt` (confirm all three exist)
5. `del file1.txt` (delete just one)
6. `dir /B *.txt` (confirm only two remain)

**Goal:** Practice the "check, then delete" pattern.

### Exercise 4: Wildcard Operations

## 3DMake in Practice: Organizing Your Projects

File management commands are essential for 3DMake project organization:

```cmd
REM Create a {{i:new}} project from scratch
mkdir %USERPROFILE%\Documents\3d_projects\bottle_cap
cd %USERPROFILE%\Documents\3d_projects\bottle_cap
3dm {{i:new}}

REM Back up a working project {{i:before}} making big changes
cd %USERPROFILE%\Documents\3d_projects
xcopy /E /I bottle_cap bottle_cap_backup

REM Rename the main model {{i:file}} to something more {{i:specific}}
cd bottle_cap\src
rename main.scad bottle_cap.scad

REM {{i:List}} only .scad {{i:files}} to confirm the rename
dir /B *.scad

REM Delete a draft {{i:STL}} {{i:you}} no longer need
del %USERPROFILE%\Documents\3d_projects\bottle_cap\{{i:build}}\draft.stl

REM Build the renamed model ({{i:using}} the -m flag to specify the {{i:name}})
cd %USERPROFILE%\Documents\3d_projects\bottle_cap
3dm {{i:build}} -m bottle_cap

REM See the fresh {{i:output}} in the {{i:build}} folder
dir /B {{i:build}}
```

### Exercise 4: Wildcard Operations

1. Create three files: `echo a > doc1.txt`, `echo b > doc2.txt`, `echo c > doc3.txt`
2. `dir /B *.txt`
3. `mkdir archive`
4. `copy *.txt archive\`
5. `cd archive`
6. `dir /B *.txt`

**Goal:** Comfortable using wildcards for bulk operations.

---

## Screen Reader Tips

### NVDA Users

After file operations, run `dir /B` and press **NVDA+Down Arrow** to verify results. Redirect output to a file for complex verification: `dir /B > check.txt`, then `notepad.exe check.txt`.

### JAWS Users

After file operations, run `dir /B` and press **Insert+Down Arrow** to read results. For complex output: `dir /B > check.txt`, then `notepad.exe check.txt`.

### Windows Narrator Users

After file operations, run `dir /B` and press **Narrator+R** to read from the current position. Redirect to a file and open in Notepad for long output.

### Dolphin SuperNova Users

After file operations, run `dir /B` and press **CapsLock+Numpad Plus** to read results. For long output: `dir /B > check.txt`, then `notepad.exe check.txt`.

> [!IMPORTANT]
> After any `copy`, `move`, or `del` operation, always verify with `dir /B` to confirm the expected result. Never assume an operation succeeded without checking — silent failures do occur.

### General Tip for All Screen Readers

After any `copy`, `move`, or `del` operation, always verify with `dir /B` to confirm the expected result. Never assume an operation worked without checking.

---

## Checkpoint Questions

1. How do you create a folder?
2. How do you copy a file?
3. How do you rename a file?
4. How do you delete a file safely (checking first)?
5. What does `*` match in a wildcard pattern?
6. What does `?` match in a wildcard pattern?
7. How would you copy all .scad files to a backup folder?
8. What should you always do before deleting?
9. How do you delete a folder and all its contents?
10. Why is it important to create a backup before editing?

---

## Extension Problems

1. Create a nested folder structure (5+ levels) using a single `mkdir` command with backslashes.
2. Create 10 files and organize them into subfolders using `move` with wildcards.
3. Create a date-based backup strategy: copy all files to a folder named with today's date.
4. Use wildcards to select specific file types and copy them to separate organized folders.
5. Create a file-renaming system (file001.txt, file002.txt, etc.) and practice moving them between folders.

---

## Next Steps

Complete all exercises, pass the checkpoint questions, then move to **Command Line Lesson 3: Input, Output & Redirection**.

---

<a id="cmd-lesson-3"></a>

# Lesson 3: Input, Output, and Piping

---

**Duration:** 1 class period
**Prerequisite:** Command Line Lesson 2 (File and Folder Manipulation)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Use `echo` to print text to the screen
- Use `type` to read file contents
- Use `>` to redirect output into a file
- Use `|` (pipe) to send one command's output to another
- Copy output to the clipboard with `clip`
- Open files with a text editor from the command line

---

## Commands Covered

| Command            | What It Does                                    |
| ------------------ | ----------------------------------------------- |
| `echo text`        | Print text to the screen                        |
| `type filename`    | Print the contents of a file                    |
| `> filename`       | Redirect output into a file (overwrites)        |
| `>> filename`      | Append output to a file (adds to end)           |
| `\|`               | Pipe - send output from one command to the next |
| `clip`             | Copy piped input to the Windows clipboard       |
| `notepad filename` | Open a file in Notepad                          |

---

## `echo` - Printing Text

`echo` prints text to the screen. It is useful for testing, for writing text into files, and for understanding how piping works.

```cmd
echo Hello, World
echo This is a {{i:test}}
```

---

## `type` - Reading Files

`type` prints the contents of a file to the screen.

```cmd
:: Read a {{i:text}} {{i:file}}
type %USERPROFILE%\Documents\notes.txt

:: Read an {{i:OpenSCAD}} {{i:file}}
type %USERPROFILE%\Documents\OpenSCAD_Projects\project0.scad
```

With a long file, use `type filename | more` to read it page by page (press `Space` to advance, `Q` to quit).

---

## `>` - Redirecting Output to a File

The `>` symbol redirects output from the screen into a file instead.

```cmd
:: Create a {{i:file}} with a single line
echo Author: Your Name > header.txt

:: Confirm the {{i:file}} was created and has content
type header.txt
```

**Warning:** `>` overwrites the file if it already exists. Use `>>` to append instead:

```cmd
echo Date: 2025 >> header.txt
echo Project: Floor Marker >> header.txt
type header.txt
```

---

## `|` - Piping

The pipe symbol `|` sends the output of one command to the input of the next. This lets you chain commands together.

````cmd
:: {{i:List}} {{i:files}} and send the list to clip (copies to clipboard)
dir /B | clip
## {{i:3DMake}} in Practice: Capturing Build Output

Piping and redirection are essential for working with {{i:3DMake}}'s {{i:output}} accessibly:

```cmd
REM Build and save the full log to a file so you can read it in Notepad
3dm build > build_log.txt
notepad build_log.txt

REM Build and slice, keeping only lines with errors or warnings
3dm build slice 2>&1 | findstr /I "error warning"

REM List all STL files produced so far
dir /B build\*.stl

REM Get a list of available printer profiles and save for reference
3dm list-profiles > profiles.txt
notepad profiles.txt

REM Get a list of material overlays (PLA, PETG, supports, etc.)
3dm list-overlays > overlays.txt
notepad overlays.txt

REM Get an AI description of your model and save it
3dm info > model_description.txt
notepad model_description.txt
````

```cmd
:: List files and send the list to clip (copies to clipboard)
dir /B | clip

:: Now paste with Ctrl + V anywhere
```

```cmd
:: Search within a file's contents using find
type project0.scad | find "cube"
```

---

## `clip` - Copying to Clipboard

`clip` takes whatever is piped to it and puts it on the {{i:Windows}} clipboard.

```cmd
:: Copy your current directory path to the clipboard
cd | clip

:: Copy a file listing to clipboard
dir /B | clip

:: Copy the contents of a file to clipboard
type notes.txt | clip
```

After any of these, press `Ctrl + V` in any application to paste.

---

## Opening Files in Notepad

```cmd
:: Open a file in Notepad
notepad %USERPROFILE%\Documents\notes.txt

:: Open a .scad file
notepad %USERPROFILE%\Documents\OpenSCAD_Projects\project0.scad

:: Create a new file and open it
echo. > new_notes.txt
notepad new_notes.txt
```

---

## Step-by-step Tasks

1. Create `practice.txt` with three lines {{i:using}} `echo` and `>`/`>>`.
2. Read the {{i:file}} with `type practice.txt`.
3. Pipe the {{i:file}} {{i:into}} `find` to search for a word.
4. Copy the {{i:file}} contents to clipboard with `type practice.txt | clip`.
5. Redirect `dir /B` {{i:into}} `list.txt` and open it in Notepad.

## Checkpoints

- After step 3 {{i:you}} should be able to find a keyword {{i:using}} piping.

## Quiz - Lesson CMD.3

1. What is the {{i:difference}} {{i:between}} `>` and `>>`?
2. What does the pipe `|` do?
3. How do {{i:you}} {{i:copy}} {{i:output}} to the clipboard?
4. How would {{i:you}} page through long {{i:output}}?
5. How do {{i:you}} suppress {{i:output}} (send it nowhere)?
6. True or False: The pipe operator `|` connects the {{i:output}} of {{i:one}} {{i:command}} to the input of another.
7. Explain why redirecting {{i:output}} to a {{i:file}} is useful for screen {{i:reader}} users.
8. Write a {{i:command}} that would search for the word "sphere" in all `.scad` {{i:files}} in a directory.
9. How would {{i:you}} count the number of lines in a {{i:file}} {{i:using}} CMD piping?
10. Describe a practical scenario in 3D {{i:printing}} where {{i:you}} would pipe or redirect {{i:command}} {{i:output}}.
11. What would be the {{i:difference}} in {{i:output}} {{i:between}} `echo test > file.txt` ({{i:run}} twice) vs `echo test >> file.txt` ({{i:run}} twice)? Show the expected {{i:file}} contents.
12. {{i:Design}} a three-step piping chain: read a {{i:file}}, filter for {{i:specific}} content, and save the results; explain what {{i:each}} pipe does.
13. You have a 500-line `.scad` {{i:file}} and need to find all instances of `sphere()` and count them. Write the {{i:command}}.
14. Explain how `clip` is particularly valuable for screen {{i:reader}} users when working with {{i:file}} paths or long {{i:output}} strings.
15. Describe how {{i:you}} would use pipes and redirection to {{i:create}} a timestamped backup report of all `.stl` {{i:files}} in a 3D {{i:printing}} project folder.

## Extension Problems

1. Use piping to count lines in a {{i:file}} (hint: `type file.txt | find /C /V ""`).
2. Save a long `dir /B` {{i:output}} and search it with `find`.
3. Chain multiple pipes to filter and then save results.
4. Practice copying different {{i:command}} outputs to clipboard and pasting.
5. Create a small batch {{i:script}} that generates a report (counts of {{i:files}} by extension).
6. Build a data processing pipeline: read a {{i:text}} {{i:file}}, filter rows, and export results; document {{i:each}} step.
7. Write a batch {{i:script}} that pipes directory listing to count occurrences of {{i:each}} {{i:file}} extension; {{i:create}} a summary report.
8. Create a log analysis {{i:command}}: read a log {{i:file}}, filter for errors, and save matching lines to a separate {{i:error}} log.
9. {{i:Design}} a piping {{i:workflow}} for 3D {{i:printing}} {{i:file}} management: find `.stl` {{i:files}}, extract their names, and generate a report.
10. Develop a reusable piping pattern library: {{i:create}} batch {{i:scripts}} for {{i:common}} filtering, sorting, and reporting patterns; {{i:test}} {{i:each}} with different inputs.
11. Build a complex filter pipeline: read a `.scad` {{i:file}}, extract lines containing {{i:specific}} {{i:geometry}} {{i:commands}}, count {{i:each}} type, and {{i:output}} a summary to both screen and {{i:file}}.
12. Create an interactive filtering tool: {{i:build}} a batch {{i:script}} that accepts a search term, pipes through multiple filters, and displays paginated results.
13. Develop a performance analysis tool: use piping to combine {{i:file}} listing, metadata extraction, and statistical reporting; export results to a dated report {{i:file}}.
14. Implement a comprehensive {{i:error}}-handling pipeline: read {{i:output}}, catch errors, log them separately, and generate a summary of successes vs failures.
15. {{i:Design}} and execute a real-world project backup {{i:workflow}}: use piping to verify {{i:file}} existence, count {{i:files}} by type, generate a backup manifest, and {{i:create}} audit logs — all in {{i:one}} integrated {{i:command}} pipeline.

## References

- Microsoft. (2024). _Using redirection operators in CMD_. [https://example.com](https://example.com)
- Microsoft. (2024). _FIND {{i:command}} {{i:reference}}_. [https://example.com](https://example.com)
- Microsoft. (2024). _CMD pipeline concepts_. [https://example.com](https://example.com)

## Helpful Resources

- [Using Redirection in CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/redirection)
- [Piping and FIND](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/find)
- [TYPE Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/type)
- [FINDSTR for Advanced Searching](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/findstr)
- [CMD Pipeline Concepts](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/)

---

<a id="cmd-lesson-4"></a>

# Lesson 4: Environment Variables, {{i:PATH}}, and Aliases

---

Estimated {{i:time}}: 30-45 minutes

## Learning Objectives

- Read {{i:environment}} {{i:variables}} with `%VARNAME%`
- Inspect and verify programs in the `PATH`
- Create temporary aliases with `doskey` and understand making them persistent via a startup {{i:script}}

## Materials

- Command Prompt

## Step-by-step Tasks

1. Show your username and home path with `echo %USERNAME%` and `echo %USERPROFILE%`.
2. Inspect `echo %PATH%` and identify whether `openscad` or `code` would be found.
3. Run `where openscad` and note the result.
4. Create a temporary alias: `doskey preview=openscad $*` and {{i:test}} `preview myfile.scad`.
5. Open your startup {{i:script}} (`notepad.exe autorun.bat`) and add the doskey line to make it persistent (advanced).

## Checkpoints

- After step 3 {{i:you}} {{i:can}} determine whether a program will be found by `PATH`.

## Quiz - Lesson CMD.4

## {{i:3DMake}} in Practice: DOSKEY Macros for {{i:3DMake}}

DOSKEY macros give {{i:you}} fast shortcuts for your most-used {{i:3DMake}} {{i:commands}}:

```cmd
REM Quick macro to jump to your 3D projects folder
doskey 3dp=cd %USERPROFILE%\Documents\3d_projects

REM Quick macro to run the full build-slice-print pipeline
doskey 3dprint=3dm build slice print

REM Quick macro to build then describe the model
doskey 3dinfo=3dm build $T 3dm info

REM Test the macros in the current session
3dp
3dprint

REM To make these permanent, add them to a startup batch file
notepad %USERPROFILE%\cmd_startup.cmd
REM Add the doskey lines, save, and then register via Windows Registry:
REM HKCU\Software\Microsoft\Command Processor\AutoRun = %USERPROFILE%\cmd_startup.cmd
```

## Checkpoints

- After step 3 {{i:you}} {{i:can}} determine whether a program will be found by `PATH`.

## Quiz - Lesson CMD.4

1. How do {{i:you}} {{i:print}} an {{i:environment}} variable?
2. What is the purpose of `PATH`?
3. How do {{i:you}} check whether `openscad` is available?
4. How do {{i:you}} {{i:create}} a temporary alias in CMD?
5. Where would {{i:you}} make an alias permanent?
6. True or False: Environment variable names in CMD are case-sensitive.
7. Explain why having a program in your {{i:PATH}} is useful compared to always {{i:using}} its full {{i:file}} path.
8. Write a {{i:command}} that would {{i:create}} a doskey alias called `slicer` for the {{i:OpenSCAD}} executable.
9. What {{i:file}} or technique would {{i:you}} use to make a doskey alias persist across CMD sessions?
10. Describe a practical benefit of {{i:using}} the `%TEMP%` directory for temporary {{i:files}} in a 3D {{i:printing}} {{i:workflow}}.
11. You have a custom batch {{i:script}} at `C:\Scripts\backup_models.bat` that {{i:you}} want to {{i:run}} from anywhere as `backup-now`. What steps would {{i:you}} take to make this {{i:work}}?
12. Explain the {{i:difference}} {{i:between}} setting an {{i:environment}} variable in the current session with `set` vs. {{i:using}} `setx` for permanence.
13. {{i:Design}} a strategy for managing multiple 3D {{i:printing}} projects, {{i:each}} with different tool paths and directories; show how to structure {{i:environment}} {{i:variables}} for {{i:each}}.
14. If a program is not found by `where`, what are the possible reasons, and how would {{i:you}} troubleshoot?
15. Describe how {{i:you}} would verify that your CMD autorun {{i:script}} is loading correctly and how to debug issues if aliases or {{i:environment}} {{i:variables}} don't appear after opening a {{i:new}} CMD session.

## Extension Problems

1. Add a folder to {{i:PATH}} for a {{i:test}} program (describe steps; do not change system {{i:PATH}} without admin).
2. Create a short autorun snippet that sets two aliases and {{i:test}} re-opening CMD.
3. Use `where` to list the path for several {{i:common}} programs.
4. Explore `%TEMP%` and {{i:create}} a {{i:file}} there.
5. Save a {{i:copy}} of your current {{i:PATH}} to a {{i:text}} {{i:file}} and examine it in your editor.
6. Create a CMD autorun {{i:script}} that loads custom aliases and {{i:environment}} {{i:variables}} for your 3D {{i:printing}} {{i:workflow}}; {{i:test}} it in a {{i:new}} session.
7. Build a "project profile" batch {{i:script}} that sets {{i:environment}} {{i:variables}} for CAD, slicing, and {{i:print}} directories; switch {{i:between}} profiles for different projects.
8. Write a batch {{i:script}} that audits your current {{i:environment}} {{i:variables}} and creates a summary report of what's set and why.
9. {{i:Design}} a custom alias system {{i:using}} doskey for {{i:common}} 3D {{i:printing}} {{i:commands}}; document the aliases and their purposes.
10. Create a profile migration guide: document how to export and {{hi:Import}}import your CMD aliases and {{i:variables}} across machines for consistent workflows.
11. Implement a safe {{i:PATH}} modification {{i:script}}: {{i:create}} a utility that allows {{i:you}} to add/remove directories from {{i:PATH}} for the current session only; show how to make it permanent with `setx`.
12. Build a comprehensive autorun framework: {{i:create}} separate `.bat` {{i:files}} for aliases, {{i:environment}} {{i:variables}}, and helper macros; have your main autorun load all of them.
13. Develop an {{i:environment}} validation tool: {{i:write}} a batch {{i:script}} that checks whether all required programs ({{i:OpenSCAD}}, slicers, etc.) are accessible via {{i:PATH}}; report findings and suggest fixes.
14. Create a project-switching alias system: {{i:design}} a batch {{i:script}} that changes all {{i:environment}} {{i:variables}} and aliases based on the current project; {{i:test}} switching {{i:between}} multiple projects.
15. Build a troubleshooting guide: {{i:create}} a batch {{i:script}} that exports your current {{i:environment}} state ({{i:variables}}, aliases, {{i:PATH}}) to a timestamped {{i:file}}, allowing {{i:you}} to compare states {{i:before}} and after changes.

## References

- Microsoft. (2024). _Environment {{i:variables}} in CMD_. [https://example.com](https://example.com)
- Microsoft. (2024). _DOSKEY {{i:command}} {{i:reference}}_. [https://example.com](https://example.com)
- Microsoft. (2024). _WHERE {{i:command}} {{i:reference}}_. [https://example.com](https://example.com)

## Helpful Resources

- [Environment Variables in CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/set)
- [Understanding the {{i:PATH}} Variable](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/path)
- [DOSKEY Alias Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/doskey)
- [WHERE Command for Locating Programs](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/where)
- [SETX for Permanent Variables](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/setx)

---

<a id="cmd-lesson-5"></a>

# Lesson 5: Filling in the Gaps — Startup Scripts, History, and Useful Tricks

---

Estimated {{i:time}}: 30-45 minutes

## Learning Objectives

- Use history and abort {{i:commands}} (`doskey /history`, `F7`, `Ctrl+C`)
- Inspect and edit your CMD autorun {{i:script}} for persistent settings
- Run programs by full path {{i:using}} the `start` or call operator
- Handle {{i:common}} screen {{i:reader}} edge cases when {{i:using}} the terminal

## Materials

- Command Prompt and an editor (Notepad/VS Code)

## Step-by-step Tasks

1. Run several simple {{i:commands}} (e.g., `cd`, `dir /B`, `echo hi`) then press `F7` or {{i:run}} `doskey /history` to view them.
2. Use `F8` to search back through history, or use the up-arrow to re-{{i:run}} a previous {{i:command}}.
3. Practice aborting a long-running {{i:command}} with `Ctrl + C` (for example, `ping 8.8.8.8`).
4. Open your autorun {{i:script}}: `notepad.exe autorun.bat`; if it doesn't exist, {{i:create}} it with `echo. > autorun.bat`.
5. Add a persistent alias line to your autorun {{i:script}} (example: `doskey preview=openscad $*`), save, and configure CMD to use it by registering it in the registry (advanced).

## Checkpoints

- After step 2 {{i:you}} {{i:can}} re-{{i:run}} a recent {{i:command}} from history.
- After step 5 your alias should persist across CMD sessions.

## Quiz - Lesson CMD.5

1. How do {{i:you}} view the {{i:command}} history in CMD?
2. Which key combination aborts a running {{i:command}}?
3. What does `echo %CMDCMDLINE%` show?
4. How does the `start` {{i:command}} help {{i:run}} executables?
5. What is {{i:one}} strategy if terminal {{i:output}} stops being announced by your screen {{i:reader}}?
6. True or False: Using `Ctrl+C` permanently deletes any {{i:files}} created by the {{i:command}} {{i:you}} abort.
7. Explain the {{i:difference}} {{i:between}} pressing `F7` and running `doskey /history` in CMD.
8. If {{i:you}} add a doskey macro to your autorun {{i:script}} but it doesn't take effect after opening a {{i:new}} CMD window, what should {{i:you}} verify?
9. Write a {{i:command}} that would {{i:run}} a program at the path `C:\Program Files\OpenSCAD\openscad.exe` directly.
10. Describe a practical {{i:workflow}} scenario where having keyboard shortcuts (doskey macros) in your autorun {{i:script}} would save {{i:time}}.
11. Explain how to re-{{i:run}} the 5th {{i:command}} from your history {{i:using}} `F7` and selection, and what would happen if that {{i:command}} had {{i:file}} operations (creates/deletes).
12. {{i:Design}} an autorun initialization strategy that separates utilities for different projects; explain how {{i:you}} would switch {{i:between}} them.
13. Walk through a troubleshooting {{i:workflow}}: your screen {{i:reader}} stops announcing {{i:output}} after running a long {{i:command}}. What steps would {{i:you}} take to diagnose and resolve the issue?
14. Create a safety checkpoint system: {{i:before}} any destructive operation (mass delete, overwrite), how would {{i:you}} use autorun macros and history to verify the {{i:command}} is correct?
15. Develop a comprehensive capstone scenario: integrate everything from Command Line Lesson 0 through Command Line Lesson 5 ({{i:navigation}}, {{i:file}} operations, piping, {{i:environment}} setup, history) to {{i:design}} an automated 3D {{i:printing}} project {{i:workflow}} with {{i:error}} handling and logging.

## Extension Problems

1. Add a doskey macro and an {{i:environment}} variable change to your autorun {{i:script}} and document the behavior after reopening CMD.
2. Create a short batch {{i:script}} that automates creating a project folder and an initial `.scad` {{i:file}}.
3. Experiment with running {{i:OpenSCAD}} by full path {{i:using}} `start` and by placing it in {{i:PATH}}; compare results.
4. Practice redirecting `help` {{i:output}} to a {{i:file}} and reading it in Notepad for screen {{i:reader}} clarity.
5. Document three screen {{i:reader}} troubleshooting steps {{i:you}} used and when they helped.
6. Build a comprehensive CMD autorun {{i:script}} that includes aliases, {{i:environment}} {{i:variables}}, and helper macros for your 3D {{i:printing}} {{i:workflow}}.
7. Create a batch {{i:script}} that troubleshoots {{i:common}} CMD issues (missing {{i:commands}}, permission errors, {{i:command}} not found); {{i:test}} at least three scenarios.
8. Write a batch {{i:script}} that coordinates multiple tasks: creates a project folder, starts {{i:OpenSCAD}}, and opens a notes {{i:file}}.
9. {{i:Design}} a screen-{{i:reader}} {{i:accessibility}} guide for CMD: document {{i:commands}}, outputs, and accessible {{i:navigation}} patterns.
10. Develop an advanced CMD {{i:workflow}}: implement {{i:error}} handling, logging, and confirmation prompts for risky operations.
11. Implement an "undo" system {{i:using}} history: {{i:create}} a batch {{i:script}} that logs destructive {{i:commands}} (`del`, `move`, `copy /Y`) and allows {{i:you}} to review the last operation.
12. Build an autorun debugger: {{i:create}} a {{i:script}} that compares two CMD sessions' {{i:environment}} states ({{i:variables}}, aliases, macros) to identify what loaded/failed to load.
13. Develop a multi-project autorun manager: {{i:design}} a system where {{i:you}} {{i:can}} switch entire environments (paths, aliases, {{i:variables}}) for different 3D {{i:printing}} projects by running a single {{i:script}}.
14. Create a comprehensive {{i:accessibility}} analyzer: {{i:write}} a batch {{i:script}} that tests whether key CMD {{i:commands}} produce screen-{{i:reader}}-friendly {{i:output}}; document workarounds for {{i:commands}} that don't.
15. {{i:Design}} a complete capstone project: {{i:build}} an integrated automation suite that manages a 3D {{i:printing}} {{i:workflow}} (project setup, {{i:file}} organization, CAD/slicing tool automation, {{i:output}} logging, {{i:error}} recovery, and audit trails) with full {{i:error}} handling and documentation.

## References

- Microsoft. (2024). _CMD history and recall functionality_. [https://example.com](https://example.com)
- Microsoft. (2024). _Using CMD autorun {{i:scripts}}_. [https://example.com](https://example.com)
- Microsoft. (2024). _The START {{i:command}} for running executables_. [https://example.com](https://example.com)

## Helpful Resources

- [DOSKEY History and Recall](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/doskey)
- [CMD Autorun Scripts](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/cmd)
- [START Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/start)
- [CMD History Navigation](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/)
- [{{i:Screen}} Reader Tips for CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/windows-{{i:commands}}-glossary)

---

<a id="cmd-lesson-6"></a>

# Lesson 6: Advanced Techniques — Batch Scripts, Subroutines, and Professional Workflows

---

**Duration:** 4-4.5 hours (for screen {{i:reader}} users)
**Prerequisites:** Complete Command Line Lesson 0 through Command Line Lesson 5
**Skill Level:** Advanced intermediate

## {{i:3DMake}} in Practice: Automating Your Print Workflow

Use a batch {{i:script}} to fully automate a {{i:3DMake}} {{i:workflow}} across multiple projects:

```cmd
@echo off
REM batch_print.bat - build and print every 3DMake project subfolder

set PROJECTS=%USERPROFILE%\Documents\3d_projects

for /D %%P in ("%PROJECTS%\*") do (
    echo Processing: %%~nxP
    cd "%%P"

    3dm build slice > build_log.txt 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo   OK - sending to printer
        3dm print
    ) else (
        echo   FAILED - check build_log.txt
        notepad build_log.txt
    )
)

echo Batch complete.
```

Save as `batch_print.bat` and {{i:run}} by typing `batch_print`. This {{i:script}} uses loops, conditionals, and {{i:output}} redirection — all from this lesson.

This lesson extends CMD skills to professional-level workflows. You'll learn to automate complex tasks, {{i:write}} reusable batch {{i:scripts}}, and integrate tools for 3D {{i:printing}} workflows.

---

## Learning Objectives

By the end of this lesson, {{i:you}} will be able to:

- Create and {{i:run}} batch {{i:files}} (.bat {{i:files}})
- Write subroutines that accept {{hi:Parameters}}{{i:parameters}}
- Use loops to repeat tasks automatically
- Automate batch processing of 3D models
- Debug batch {{i:scripts}} when something goes wrong
- Create professional workflows combining multiple tools

---

## Batch Script Basics

### What's a Batch Script?

A batch {{i:file}} (`.bat`) contains multiple CMD {{i:commands}} that {{i:run}} in sequence. Instead of typing {{i:commands}} {{i:one}} by {{i:one}}, {{i:you}} put them in a {{i:file}} and {{i:run}} them all at once.

**Why use batch {{i:scripts}}?**

- Repeatability: Run the same task 100 times identically
- Documentation: Commands are written down for {{i:reference}}
- Complexity: Combine many {{i:commands}} logically
- Automation: Schedule {{i:scripts}} to {{i:run}} automatically

### Creating Your First Batch Script

**Step 1: Open a {{i:text}} editor**

```cmd
notepad.exe my-first-script.bat
```

**Step 2: Type this {{i:script}}**

```batch
@echo off
:: This is a comment - screen readers will read it
echo Script is running!
cd
dir /B
echo Script is done!
```

**Step 3: Save the {{i:file}}**

- In Notepad: Ctrl+S
- Make sure filename ends in `.bat`
- Save in an easy-to-find location (like Documents)

**Step 4: Run the {{i:script}}**

```cmd
my-first-script.bat
```

**What happens:**
CMD runs {{i:each}} {{i:command}} in sequence and shows {{i:output}}.

### Important: `@echo off`

On some {{i:scripts}}, {{i:each}} {{i:command}} is echoed {{i:before}} running. `@echo off` at the top suppresses this, showing only {{i:output}} — not the {{i:commands}} themselves.

```batch
@echo off
:: Now only output is shown, not each command
echo Hello!
```

---

## Variables and Parameters

### Using Variables

Variables store values {{i:you}} want to use later.

**Example {{i:script}}:**

```batch
@echo off
set mypath=C:\Users\YourName\Documents
cd %mypath%
echo I am now in:
cd
dir /B
```

**Breaking it down:**

- `set mypath=...` assigns the variable
- `%mypath%` uses the variable (wraps it in `%`)
- Variables in CMD are always referenced with `%VARNAME%`

### Subroutines with Parameters

A subroutine is reusable {{i:code}} that {{i:you}} {{i:can}} call with different inputs {{i:using}} `:label` and `call`.

**Example: A subroutine that lists {{i:files}} in a folder**

```batch
@echo off
call :ListFolder "C:\Users\YourName\Documents"
call :ListFolder "C:\Users\YourName\Downloads"
goto :eof

:ListFolder
echo Contents of: %~1
cd /D %~1
dir /B
goto :eof
```

**What's happening:**

- `:ListFolder` marks the start of the subroutine
- `%~1` is the {{i:first}} argument passed to the subroutine
- `call :ListFolder "path"` calls the subroutine with a path
- `goto :eof` exits the subroutine (or {{i:script}})

**{{i:Screen}} {{i:reader}} tip:** When {{i:you}} call a subroutine, CMD will announce the results just like any {{i:command}}.

---

## Loops - Repeating Tasks

### Loop Over Files

Imagine {{i:you}} have 10 SCAD {{i:files}} and want to {{i:print}} their names. You could do it 10 times manually, or use a loop.

**Example: Print every .scad {{i:file}} in a folder**

```batch
@echo off
for %%f in (*.scad) do (
    echo === File: %%f ===
    type %%f
    echo.
)
```

**What's happening:**

- `for %%f in (*.scad) do` iterates over {{i:each}} `.scad` {{i:file}}
- `%%f` is the loop variable (use `%f` in interactive CMD, `%%f` in batch {{i:files}})
- Inside the parentheses, do something with {{i:each}} {{i:file}}

### Loop with a Counter

**Example: Do something 5 times**

```batch
@echo off
for /L %%i in (1,1,5) do (
    echo This is iteration number %%i
)
```

**What's happening:**

- `for /L %%i in (start,step,end)` counts from start to end
- `%%i` is the counter variable

---

## Real-World Example - Batch Processing SCAD Files

### Scenario

You have 10 {{i:OpenSCAD}} (.scad) {{i:files}} in a folder. You want to:

1. {{i:List}} them all
2. Check how many there are
3. For {{i:each}} {{i:one}}, verify it exists

### The Script

```batch
@echo off
set scadFolder=C:\Users\YourName\Documents\3D_Projects
set count=0

echo Processing SCAD files in: %scadFolder%
echo.

for %%f in (%scadFolder%\*.scad) do (
    if exist "%%f" (
        echo  Found: %%~nxf
        set /A count+=1
    ) else (
        echo  Missing: %%~nxf
    )
)

echo.
echo Total files found: %count%
echo Batch processing complete!
```

**Breaking it down:**

- `set scadFolder=...` = where to look
- `for %%f in (...\*.scad)` = find all .scad {{i:files}}
- `if exist "%%f"` = check if {{i:file}} exists
- `%%~nxf` = just the filename with extension (not the full path)
- `set /A count+=1` = increment the counter

### Running the Script

1. Save as `batch-process.bat`
2. Edit `scadFolder` to match your real folder
3. Run it:

   ```cmd
   batch-process.bat
   ```

**{{i:Screen}} {{i:reader}} {{i:output}}:**

```plaintext
Processing SCAD files in: C:\Users\YourName\Documents\3D_Projects

 Found: model1.scad
 Found: model2.scad
 Found: model3.scad
[... more files ...]

Total files found: 10
Batch processing complete!
```

---

## Error Handling

### Checking Error Levels

What if something goes wrong? Use `errorlevel` checks:

**Example:**

```batch
@echo off
type C:\nonexistent\path\file.txt
if %errorlevel% neq 0 (
    echo Error: Could not read file
    echo Errorlevel: %errorlevel%
)
```

**What's happening:**

- After any {{i:command}}, `%errorlevel%` holds `0` for success or non-zero for failure
- `if %errorlevel% neq 0` checks for failure
- Handle the {{i:error}} gracefully

**{{i:Screen}} {{i:reader}} advantage:** Errors are announced clearly instead of crashing silently.

### Validating Input

**Example: Make sure a folder exists {{i:before}} processing**

```batch
@echo off
set folderPath=C:\Users\YourName\Documents

if not exist "%folderPath%\" (
    echo Error: Folder does not exist: %folderPath%
    goto :eof
)

echo Processing folder: %folderPath%
dir /B "%folderPath%"
```

**What's happening:**

- `if not exist "%folderPath%\"` checks if folder exists (trailing `\` ensures it's a folder)
- `goto :eof` exits the {{i:script}} early if {{i:error}}

---

## Debugging Batch Scripts

### {{i:Common}} Errors and Solutions

#### Error 1: "Command not found"

**Cause:** Typo in {{i:command}} {{i:name}} or program not in {{i:PATH}}

**Fix:** Check spelling and verify {{i:PATH}}

```batch
:: Wrong:
dri /B

:: Correct:
dir /B
```

#### Error 2: "Variable is empty"

**Cause:** Variable was never set or has a typo

**Fix:** Make sure variable is set {{i:before}} {{i:using}} it

```batch
set myvar=hello
echo %myvar%
```

#### Error 3: "The system cannot find the path specified"

**Cause:** Wrong folder path

**Fix:** Verify path exists

```batch
:: Check if path exists:
if exist "C:\Users\YourName\Documents\" echo Path exists
```

#### Error 4: "Access denied"

**Cause:** Don't have permission

**Fix:** Run CMD as administrator

- Right-click Command Prompt -> Run as administrator

### Debugging Technique: Trace Output

Add `echo` statements to track what's happening:

```batch
@echo off
set path_var=C:\Users\YourName\Documents
echo Starting script. Path is: %path_var%

for %%f in (%path_var%\*) do (
    echo Processing: %%f
    :: Do something with %%f
    echo Done with: %%f
)

echo Script complete
```

Your screen {{i:reader}} will announce {{i:each}} step, so {{i:you}} know where errors happen.

---

## Creating Professional Workflows

### Example 1: Automated Project Setup

**Scenario:** You start a {{i:new}} 3D {{i:printing}} project regularly. Instead of creating folders manually:

```batch
@echo off
set /p projectName=Enter project name:
set baseFolder=C:\Users\YourName\Documents\3D_Projects
set projectFolder=%baseFolder%\%projectName%

:: Create folder structure
mkdir "%projectFolder%"
mkdir "%projectFolder%\designs"
mkdir "%projectFolder%\output"
mkdir "%projectFolder%\notes"

:: Create a README
echo # %projectName% > "%projectFolder%\README.txt"
echo. >> "%projectFolder%\README.txt"
echo Created: %date% >> "%projectFolder%\README.txt"
echo. >> "%projectFolder%\README.txt"
echo ## Designs >> "%projectFolder%\README.txt"
echo All .scad files go here. >> "%projectFolder%\README.txt"
echo. >> "%projectFolder%\README.txt"
echo ## Output >> "%projectFolder%\README.txt"
echo STL and other exports go here. >> "%projectFolder%\README.txt"

echo Project setup complete: %projectFolder%
```

**What it does:**

- Prompts for a project {{i:name}}
- Creates folder structure for a {{i:new}} project
- Sets up subfolders for designs, {{i:output}}, notes
- Creates a README {{i:file}} automatically

### Example 2: Batch File Verification

**Scenario:** Before processing, verify all required {{i:files}} exist:

```batch
@echo off
set projectFolder=C:\Users\YourName\Documents\3D_Projects\MyKeychain
set allGood=1

for %%i in (README.txt designs output notes) do (
    if exist "%projectFolder%\%%i" (
        echo  Found: %%i
    ) else (
        echo  Missing: %%i
        set allGood=0
    )
)

if %allGood%==1 (
    echo All checks passed!
) else (
    echo Some files are missing!
)
```

---

## {{i:Screen}} Reader Tips for Batch Scripts

### Making Script Output Readable

**Problem:** Script runs but {{i:output}} scrolls too fast or is hard to follow

**Solution 1: Save to {{i:file}}**

```cmd
my-script.bat > output.txt
notepad.exe output.txt
```

**Solution 2: Use echo with clear sections**

```batch
echo ========== STARTING ==========
echo.
:: ... script ...
echo.
echo ========== COMPLETE ==========
```

**Solution 3: Pause {{i:between}} major sections**

```batch
echo Pausing... Press any key to continue
pause > nul
```

Your screen {{i:reader}} will announce the pause, give {{i:you}} {{i:time}} to read {{i:output}}.

### Announcing Progress

**For long-running {{i:scripts}}:**

```batch
@echo off
set count=0
for %%f in (*.scad) do (
    set /A count+=1
    echo Processing file %%f
)
echo All %count% files processed!
```

---

## Practice Exercises

### Exercise 1: Your First Batch Script

**Goal:** Create and {{i:run}} a simple batch {{i:script}}

**Steps:**

1. Create {{i:file}}: `notepad.exe hello.bat`
2. Type:

   ```batch
   @echo off
   echo Hello from my first CMD batch script!
   cd
   dir /B
   ```

3. Save and {{i:run}}: `hello.bat`

**Checkpoint:** You should see {{i:output}} for {{i:each}} {{i:command}}.

### Exercise 2: Script with a Variable

**Goal:** Use a variable to make the {{i:script}} flexible

**Steps:**

1. Create {{i:file}}: `notepad.exe smart-listing.bat`
2. Type:

   ```batch
   @echo off
   set targetFolder=C:\Users\YourName\Documents
   echo Listing contents of: %targetFolder%
   dir /B "%targetFolder%"
   ```

3. Edit `targetFolder` to a real folder on your computer
4. Run: `smart-listing.bat`

**Checkpoint:** You should see listing of that {{i:specific}} folder.

### Exercise 3: Subroutine

**Goal:** Create a reusable subroutine

**Steps:**

1. Create {{i:file}}: `notepad.exe navigate.bat`
2. Type:

   ```batch
   @echo off
   call :GoTo "C:\Users\YourName\Documents"
   call :GoTo "C:\Users\YourName\Downloads"
   goto :eof

   :GoTo
   if exist "%~1\" (
       cd /D "%~1"
       echo Now in:
       cd
       echo Contents:
       dir /B
   ) else (
       echo Path does not exist: %~1
   )
   goto :eof
   ```

3. Run: `navigate.bat`

**Checkpoint:** Both subroutine calls should {{i:work}}, showing contents of {{i:each}} folder.

### Exercise 4: Loop

**Goal:** Use a loop to repeat an action

**Steps:**

1. Create {{i:file}}: `notepad.exe repeat.bat`
2. Type:

   ```batch
   @echo off
   echo Demonstrating a loop:
   for /L %%i in (1,1,5) do (
       echo Iteration %%i: Hello!
   )
   echo Loop complete!
   ```

3. Run: `repeat.bat`

**Checkpoint:** Should {{i:print}} "Iteration 1" through "Iteration 5".

### Exercise 5: Real-World Script

**Goal:** Create a useful {{i:script}} for a real task

**Steps:**

1. Create a folder: `mkdir C:\Users\YourName\Documents\TestFiles`
2. Create some {{i:test}} {{i:files}}:

   ```cmd
   echo test > C:\Users\YourName\Documents\TestFiles\file1.txt
   echo test > C:\Users\YourName\Documents\TestFiles\file2.txt
   echo test > C:\Users\YourName\Documents\TestFiles\file3.txt
   ```

3. Create {{i:script}}: `notepad.exe report.bat`
4. Type:

   ```batch
   @echo off
   set folder=C:\Users\YourName\Documents\TestFiles
   set count=0

   echo === FILE REPORT ===
   echo Folder: %folder%
   echo.
   echo Files:
   for %%f in ("%folder%\*") do (
       echo   - %%~nxf
       set /A count+=1
   )
   echo.
   echo Total: %count% files
   echo === END REPORT ===
   ```

5. Run: `report.bat`

**Checkpoint:** Should show report of all {{i:files}} in the {{i:test}} folder.

---

## Quiz - Lesson CMD.6

1. What is a CMD batch {{i:script}}?
2. What {{i:file}} extension do CMD batch {{i:scripts}} use?
3. What is a variable in a batch {{i:script}} and how do {{i:you}} {{i:create}} {{i:one}}?
4. What is a subroutine (`:label`) and why would {{i:you}} use {{i:one}}?
5. How do {{i:you}} {{i:run}} a batch {{i:script}}?
6. What is a `for` loop and what does `for %%f in (*.scad) do` do?
7. What does `if exist` do?
8. How do {{i:you}} handle errors in a batch {{i:script}}?
9. When would {{i:you}} use `if %errorlevel% neq 0`?
10. What technique makes batch {{i:script}} {{i:output}} readable for screen readers?

---

## Extension Problems

1. **Auto-Backup Script:** Create a batch {{i:script}} that copies all {{i:files}} from {{i:one}} folder to another, announcing progress
2. **File Counter:** Write a subroutine that counts {{i:files}} by extension (.txt, .scad, .stl, etc.)
3. **Folder Cleaner:** Batch {{i:script}} that deletes {{i:files}} older than 30 days (with user confirmation)
4. **Project Template:** Subroutine that creates a complete project folder structure with all needed {{i:files}}
5. **Batch Rename:** Script that renames all {{i:files}} in a folder according to a pattern
6. **Log Generator:** Create a {{i:script}} that records what it does to a log {{i:file}} for later review
7. **Scheduled Task:** Set up a batch {{i:script}} to {{i:run}} automatically every day at a {{i:specific}} {{i:time}}
8. **File Verifier:** Check that all SCAD {{i:files}} in a folder have corresponding {{i:STL}} exports
9. **Report Generator:** Create a summary report of all projects in a folder
10. **Error Tracker:** Script that lists all {{i:commands}} that had errors and logs them with timestamps

---

## Important Notes

- **Always {{i:test}} {{i:scripts}} on small sets of {{i:files}} {{i:first}}** {{i:before}} running them on important data
- **Save your {{i:work}} regularly** — use version naming if possible
- **Test {{i:error}} handling** — make sure errors don't crash silently
- **Document your {{i:scripts}}** — use `::` {{hi:Comments}}comments so {{i:you}} remember what {{i:each}} {{i:part}} does
- **Backup {{i:before}} batch operations** — if something goes wrong, {{i:you}} have the original

---

## References

- **Microsoft CMD Batch Scripting Guide:** [https://example.com](https://example.com)
- **FOR Loop Documentation:** [https://example.com](https://example.com)
- **{{hi:If statement}}IF Statement Reference:** [https://example.com](https://example.com)
- **SET Variable Reference:** [https://example.com](https://example.com)

---

**Next Steps:** After mastering this lesson, explore advanced batch scripting, scheduled tasks, and 3D {{i:printing}} integration in the main curriculum.

---

<a id="cmd-unit-exam"></a>

# Unit Exam — Comprehensive Assessment

---

Estimated {{i:time}}: 60-90 minutes

## Key Learning Outcomes Assessed

By completing this unit {{i:test}}, {{i:you}} will demonstrate:

1. Understanding of {{i:file}} system {{i:navigation}} and path concepts
2. Proficiency with {{i:file}} and folder manipulation {{i:commands}}
3. Ability to redirect and pipe {{i:command}} {{i:output}}
4. Knowledge of {{i:environment}} {{i:variables}} and aliases
5. {{i:Screen}}-{{i:reader}} {{i:accessibility}} best practices in terminal environments
6. Problem-solving and {{i:command}} chaining skills

## Target Audience

Users who have completed Command Line Lesson 0 through Command Line Lesson 6 and need to demonstrate mastery of Command Prompt fundamentals.

## Instructions

Complete all sections below. For multiple choice, select the best answer. For short answers, {{i:write}} {{i:one}} to two sentences. For hands-on tasks, capture evidence (screenshots or {{i:output}} {{i:files}}) and submit alongside your answers.

---

## Part A: Multiple Choice Questions (20 questions)

Select the best answer for {{i:each}} question. Each question is worth 1 point.

1. What is the primary purpose of the `PATH` {{i:environment}} variable?
   - A) Store your home directory location
   - B) Tell the {{i:shell}} where to find executable programs
   - C) Configure the visual appearance of the terminal
   - D) Store the current working directory {{i:name}}

2. Which {{i:command}} shows your current working directory in CMD?
   - A) `dir /B`
   - B) `cd` (with no arguments)
   - C) `pwd`
   - D) `whoami`

3. What does `%USERPROFILE%` represent in CMD?
   - A) The root directory
   - B) The current directory
   - C) The parent directory
   - D) Your home directory

4. How do {{i:you}} list only {{i:file}} names (not full details) in a screen-{{i:reader}}-friendly way?
   - A) `dir`
   - B) `dir /B`
   - C) `dir /L`
   - D) `type /B`

5. Which {{i:command}} creates a {{i:new}} empty {{i:file}} in CMD?
   - A) `mkdir filename`
   - B) `echo. > filename`
   - C) `touch filename`
   - D) `new filename`

6. What is the {{i:difference}} {{i:between}} `>` and `>>`?
   - A) `>` redirects to {{i:file}}, `>>` displays on screen
   - B) `>` overwrites a {{i:file}}, `>>` appends to a {{i:file}}
   - C) They do the same thing
   - D) `>` is for {{i:text}}, `>>` is for binary

7. What does the pipe operator `|` do?
   - A) Creates a folder
   - B) Sends the {{i:output}} of {{i:one}} {{i:command}} to the input of another
   - C) Deletes {{i:files}} matching a pattern
   - D) Lists all processes

8. Which {{i:command}} copies a {{i:file}} in CMD?
   - A) `move`
   - B) `del`
   - C) `copy`
   - D) `cd`

9. How do {{i:you}} rename a {{i:file}} from `oldname.txt` to `newname.txt` in CMD?
   - A) `copy oldname.txt newname.txt`
   - B) `move oldname.txt newname.txt`
   - C) `rename oldname.txt newname.txt`
   - D) Both B and C are correct

10. What is the purpose of `find` in CMD piping?
    - A) Find {{i:files}} in a directory
    - B) Search for {{i:text}} patterns within {{i:output}}
    - C) Find a string to {{i:copy}} to clipboard
    - D) Find which {{i:shell}} to use

11. Which key allows {{i:you}} to autocomplete a path in CMD?
    - A) `Ctrl + A`
    - B) `Ctrl + E`
    - C) `Tab`
    - D) `Space`

12. How do {{i:you}} {{i:copy}} {{i:text}} to the {{i:Windows}} clipboard from CMD?
    - A) `type filename > clipboard`
    - B) `type filename | clip`
    - C) `copy filename`
    - D) `type filename | paste`

13. What does `where openscad` do?
    - A) Opens the {{i:OpenSCAD}} application
    - B) Gets help about the openscad {{i:command}}
    - C) Locates the full path of the openscad executable
    - D) Lists all available {{i:commands}}

14. Which wildcard matches any single character?
    - A) `*`
    - B) `?`
    - C) `%`
    - D) `#`

15. What is the purpose of the `start` {{i:command}}?
    - A) Run a {{i:script}} or executable, optionally in a {{i:new}} window
    - B) Execute all {{i:commands}} in parallel
    - C) Combine multiple {{i:commands}}
    - D) Create an alias

16. How do {{i:you}} {{i:create}} a temporary alias (macro) in CMD?
    - A) `alias preview='openscad'`
    - B) `doskey preview=openscad $*`
    - C) `set preview=openscad`
    - D) `macro preview openscad`

17. How {{i:can}} doskey macros be made to persist across CMD sessions?
    - A) They are automatically saved
    - B) By adding them to a startup batch {{i:script}} registered as an autorun
    - C) By {{i:using}} the {{i:Windows}} Control Panel
    - D) Doskey macros cannot be made permanent

18. How do {{i:you}} abort a long-running {{i:command}} in CMD?
    - A) Press `Escape`
    - B) Press `Ctrl + X`
    - C) Press `Ctrl + C`
    - D) Press `Alt + F4`

19. What {{i:command}} shows the history of previously {{i:run}} {{i:commands}} in CMD?
    - A) `history`
    - B) `doskey /history`
    - C) `F7` (opens history popup)
    - D) Both B and C are correct

20. How do {{i:you}} make an {{i:environment}} variable permanent in CMD (for all future sessions)?
    - A) Use `set` in the terminal every {{i:time}}
    - B) Use `setx` to {{i:write}} it to the registry
    - C) Use the {{i:Windows}} Control Panel only
    - D) Environment {{i:variables}} cannot be made permanent in CMD

---

## Part B: Short Answer Questions (10 questions)

Answer {{i:each}} question in {{i:one}} to two sentences. Each question is worth 2 points.

1. Explain the {{i:difference}} {{i:between}} absolute and relative paths. Give {{i:one}} example of {{i:each}}.

2. Why is `dir /B` preferred over `dir` for screen {{i:reader}} users? Describe what flag {{i:you}} would add to list only {{i:files}}.

3. What is the purpose of redirecting {{i:output}} to a {{i:file}}, and give an example of when {{i:you}} would use `>` instead of `>>`?

> [!WARNING]
> `rmdir /S /Q C:\Documents\my_folder` permanently deletes the folder and **all its contents** with no confirmation prompt and no undo. Always {{i:run}} `dir /B C:\Documents\my_folder` {{i:first}} to confirm what {{i:you}}'re about to destroy.

4. Describe what would happen if {{i:you}} ran `rmdir /S /Q C:\Documents\my_folder` and why this {{i:command}} should be used carefully.

5. How would {{i:you}} search for all {{i:files}} with a `.scad` extension in your current directory? Write the {{i:command}}.

6. Explain what happens when {{i:you}} pipe the {{i:output}} of `dir /B` {{i:into}} `clip`. What would {{i:you}} do next?

7. What is an {{i:environment}} variable, and give {{i:one}} example of how {{i:you}} might use it in CMD.

8. If a program is not in your `PATH`, what two methods could {{i:you}} use to {{i:run}} it from CMD?

9. Describe how {{i:you}} would open a {{i:file}} in Notepad and also add a line to it from CMD.

10. What is {{i:one}} strategy {{i:you}} would use if your screen {{i:reader}} stops announcing terminal {{i:output}} while {{i:using}} CMD?

---

## Part C: Hands-On Tasks (10 tasks)

Complete {{i:each}} task and capture evidence (screenshots, {{i:output}} {{i:files}}, or {{i:command}} transcripts). Each task is worth 3 points.

### Tasks 1-5: File System and Navigation

1. Create a folder structure `%USERPROFILE%\Documents\CMD_Assessment\Projects` {{i:using}} a single {{i:command}}. Capture the `dir /B` {{i:output}} showing the creation.

2. Create five {{i:files}} named `project_1.scad`, `project_2.scad`, `project_3.txt`, `notes_1.txt`, and `notes_2.txt` inside the `Projects` folder. Use wildcards to list only `.scad` {{i:files}}, then capture the {{i:output}}.

3. Copy the entire `Projects` folder to `Projects_Backup` {{i:using}} `xcopy /E /I`. Capture the `dir /B` {{i:output}} showing both folders exist.

4. Move (rename) `project_1.scad` to `project_1_final.scad`. Capture the `dir /B` {{i:output}} showing the renamed {{i:file}}.

5. Delete `notes_1.txt` and `notes_2.txt` {{i:using}} a single `del` {{i:command}} with wildcards. Capture the final `dir /B` {{i:output}}.

### Tasks 6-10: Advanced Operations and Scripting

1. Create a {{i:file}} called `my_data.txt` with at least four lines {{i:using}} `echo` and `>>`. Then read it with `type my_data.txt` and capture the {{i:output}}.

2. Use `find` to search for a keyword (e.g., "project") in `my_data.txt` and pipe the results to `clip`. Paste the results {{i:into}} Notepad and capture a screenshot.

3. {{i:List}} all {{i:files}} in the `Projects` folder and redirect the {{i:output}} to `projects_list.txt`. Open it in Notepad and capture a screenshot of the {{i:file}}.

4. Create a temporary `doskey` alias called `mydir` that runs `dir /B`, {{i:test}} it, and capture the {{i:output}}. Then explain what would be required to make it persistent.

5. Run `help dir` and redirect the {{i:output}} to `help_output.txt`. Open the {{i:file}} in Notepad and capture a screenshot showing at least the {{i:first}} page of help content.

---

## Grading Rubric

| Section         | Questions | Points Each | Total  |
| --------------- | --------- | ----------- | ------ |
| Multiple Choice | 20        | 1           | 20     |
| Short Answer    | 10        | 2           | 20     |
| Hands-On Tasks  | 10        | 3           | 30     |
| **Total**       | **40**    | -           | **70** |

**Passing Score:** 49 points (70%)

---

## Helpful Resources for Review

- [CMD Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/windows-{{i:commands}}-glossary)
- [Navigation and File System](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/cd)
- [Using Pipes and Filtering](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/find)
- [DOSKEY and Aliases](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/doskey)
- [{{i:Screen}} Reader Accessibility Tips](https://learn.microsoft.com/en-us/windows-server/administration/windows-{{i:commands}}/)

---

## Submission Checklist

- [ ] All 20 multiple choice questions answered
- [ ] All 10 short answer questions answered (1-2 sentences {{i:each}})
- [ ] All 10 hands-on tasks completed with evidence captured
- [ ] Files/screenshots organized and labeled clearly
- [ ] Submission includes this checklist

---

<a id="part-3-gitbash"></a>

# Part 3 — {{i:Git}} {{i:Bash}}

---

**Last Updated:** February 2026  
**Total Duration:** 30–45 hours of instruction and practice (for screen {{i:reader}} users)  
**Target Users:** Anyone {{i:using}} a screen {{i:reader}} — {{i:NVDA}}, {{i:JAWS}}, {{i:Windows}} Narrator, and Dolphin SuperNova are all covered throughout this curriculum.  
**Platform:** {{i:Git}} {{i:Bash}} on {{i:Windows}} ({{i:commands}} transfer directly to macOS Terminal and Linux)  
**Alternate to:** {{i:PowerShell}} curriculum and CMD curriculum (same concepts, {{i:Bash}}/Unix syntax)

_This single {{i:file}} contains the complete {{i:Git}} {{i:Bash}} Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional {{i:files}} are needed._

---

## Table of Contents

| Section                                                                  | Title                                                                                    | Estimated Time    |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- | ----------------- | -------------- |
| [{{i:Screen}} Reader Accessibility Guide](#gb-{{i:accessibility}}-guide) | {{i:NVDA}}, {{i:JAWS}}, Narrator, and SuperNova {{i:reference}} for {{i:Git}} {{i:Bash}} | 1–1.5 hours       |
| [Tutorial: {{i:Git}} {{i:Bash}} Quick Start](#gb-tutorial)               | Prompt orientation, core {{i:commands}}, path concepts                                   | 30–45 minutes     |
| [Lesson Pre: Your First Terminal](#gb-lesson-pre)                        | Installing {{i:Git}} {{i:Bash}}, opening it, {{i:first}} {{i:commands}}                  | 1.5–2 hours       |
| [Lesson 0: Getting Started](#gb-lesson-0)                                | Paths, `~`, `./`, `../`, tab completion                                                  | 20–30 minutes     |
| [Lesson 1: Navigation](#gb-lesson-1)                                     | `pwd`, `cd`, `ls` and flags, wildcards                                                   | 1 class period    |
| [Lesson 2: File and Folder Manipulation](#gb-lesson-2)                   | `touch`, `mkdir`, `cp`, `mv`, `rm`, `rmdir`                                              | 30–45 minutes     |
| [Lesson 3: Input, Output, and Piping](#gb-lesson-3)                      | `echo`, `cat`, `>`, `>>`, `                                                              | `, `clip`, `grep` | 1 class period |
| [Lesson 4: Environment Variables and Aliases](#gb-lesson-4)              | `$VARNAME`, `PATH`, `which`, `alias`, `.bashrc`                                          | 30–45 minutes     |
| [Lesson 5: Filling in the Gaps](#gb-lesson-5)                            | `history`, `Ctrl+R`, `Ctrl+C`, `.bashrc`, `./`                                           | 30–45 minutes     |
| [Lesson 6: Advanced Techniques](#gb-lesson-6)                            | {{i:Shell}} {{i:scripts}}, functions, loops, professional workflows                      | 4–4.5 hours       |
| [Unit Exam](#gb-unit-exam)                                               | Comprehensive assessment — Lessons 0 through 6                                           | 60–90 minutes     |

**Total:** approximately 30–45 hours including practice exercises

---

## How to Use This File

**If {{i:you}} have never used a terminal {{i:before}}:** start with the Accessibility Guide, then the Tutorial, then Lesson Pre. Read in order from the top — {{i:each}} lesson builds on the previous {{i:one}}.

**If {{i:you}} have used a terminal (CMD or {{i:PowerShell}}) but not {{i:Git}} {{i:Bash}}:** read the Tutorial section for the key differences (Unix paths, forward slashes, `ls` vs `dir`, `cat` vs `type`). Then start at Lesson 0.

**If {{i:you}} are experienced with {{i:Bash}} on macOS or Linux:** jump to the Accessibility Guide for screen-{{i:reader}}-{{i:specific}} techniques, then skip to whatever lesson covers your gap.

**Reference while working:** the Accessibility Guide and Tutorial contain {{i:material}} {{i:you}} will return to throughout the curriculum. Bookmark those sections.

**CMD or {{i:PowerShell}} users:** this curriculum covers the same concepts as the CMD and {{i:PowerShell}} curricula but uses {{i:Bash}}/Unix syntax. Commands learned here transfer directly to macOS Terminal and Linux. Choose {{i:one}} pathway and stay consistent.

---

## Curriculum Rules (Read These First)

> [!IMPORTANT]
> **Rule 1 — Always know where {{i:you}} are.** Start every session with `pwd`. If {{i:you}} don't know your current path, {{i:you}} risk operating on the wrong {{i:files}} or folders.

**Rule 1 — Always know where {{i:you}} are.**  
Every session, {{i:first}} thing: `pwd`. If {{i:you}} do not know your path, {{i:you}} will get lost.

> [!WARNING]
> **There is no Recycle Bin in the terminal.** Files deleted with `rm` are permanently gone immediately — no undo, no recovery. Always {{i:run}} `ls -1` to confirm exactly what {{i:you}}'re about to delete {{i:before}} running any `rm` {{i:command}}.

**Rule 2 — Check {{i:before}} {{i:you}} delete.**  
Before any `rm` or `rm -r` {{i:command}}: `ls -1` to confirm exactly what {{i:you}} are about to remove. Deleted {{i:files}} are gone immediately — there is no Recycle Bin in the terminal.

> [!TIP]
> Always use `ls -1` (the number **1**, not the letter L) — never bare `ls`. The `-1` flag outputs {{i:one}} {{i:name}} per line, which screen readers {{i:can}} follow reliably. Bare `ls` outputs a multi-column grid that is difficult to navigate audibly.

**Rule 3 — Use `ls -1` for listings.**  
Always `ls -1` — never bare `ls`. The `-1` flag gives {{i:one}} {{i:name}} per line, which all screen readers {{i:can}} follow reliably. (That is the number {{i:one}}, not the letter L.)

> [!TIP]
> When {{i:output}} is long or confusing, redirect it to a {{i:file}}: `command > output.txt`, then open with `notepad.exe output.txt`. This is always clearer than reading raw terminal {{i:output}} and works with all four screen readers.

**Rule 4 — When {{i:output}} is confusing, redirect to a {{i:file}}.**  
`command > output.txt` then `notepad.exe output.txt`. This works with all four screen readers and is always clearer than reading raw terminal {{i:output}}.

**Rule 5 — Save everything {{i:you}} {{i:create}}.**  
Keep all practice {{i:files}} in a dedicated learning folder: `mkdir -p ~/Documents/GitBash_Learning`

---

---

<a id="gb-accessibility-guide"></a>

# {{i:Screen}} Reader Accessibility Guide for {{i:Git}} {{i:Bash}}

---

Target Users: {{i:NVDA}}, {{i:JAWS}}, and other screen {{i:reader}} users  
Last Updated: 2026

This guide is used throughout the {{i:Git}} {{i:Bash}} Foundation curriculum to help screen {{i:reader}} users navigate and {{i:work}} efficiently with the terminal.

## Table of Contents

1. [Getting Started with {{i:Screen}} Readers](#gb-getting-started)
2. [{{i:NVDA}}-Specific Tips](#gb-nvda-tips)
3. [{{i:JAWS}}-Specific Tips](#gb-jaws-tips)
4. [General Terminal Accessibility](#gb-general-terminal)
5. [Working with Long Output](#gb-long-{{i:output}})
6. [Keyboard Shortcuts Reference](#gb-shortcuts)
7. [Troubleshooting](#gb-troubleshooting)

<a id="gb-getting-started"></a>

## Getting Started with {{i:Screen}} Readers

### Which {{i:Screen}} Reader Should I Use?

Both {{i:NVDA}} and {{i:JAWS}} {{i:work}} well with {{i:Git}} {{i:Bash}}, but they have different strengths:

| Feature                      | {{i:NVDA}} | {{i:JAWS}}           |
| ---------------------------- | ---------- | -------------------- |
| Cost                         | Free       | Commercial (paid)    |
| Installation                 | Simple     | Complex but thorough |
| {{i:Git}} {{i:Bash}} Support | Excellent  | Excellent            |
| Learning Curve               | Gentle     | Steeper              |
| Customization                | Good       | Extensive            |

Recommendation: Start with {{i:NVDA}} if {{i:you}}'re {{i:new}} to screen readers. Both will {{i:work}} for this curriculum.

Additional options: Dolphin SuperNova is a commercial screen {{i:reader}}/ magnifier popular in some education settings; {{i:Windows}} Narrator is built {{i:into}} {{i:Windows}} and useful for quick access without installing additional software. Choose based on availability and personal preference.

### Before You Start

1. Make sure your screen {{i:reader}} is running {{i:before}} opening {{i:Git}} {{i:Bash}}
2. Open {{i:Git}} {{i:Bash}} and let your screen {{i:reader}} read the window title and prompt
3. If {{i:you}} don't hear anything, press Alt+Tab to cycle windows and find {{i:Git}} {{i:Bash}}
4. Use your screen {{i:reader}}'s screen review features to understand the layout

### What is {{i:Git}} {{i:Bash}}?

{{i:Git}} {{i:Bash}} is a terminal application for {{i:Windows}} that provides a Unix-style {{i:command}}-line experience ({{i:Bash}} {{i:shell}}). It is installed as {{i:part}} of {{i:Git}} for {{i:Windows}}, which is free software available at [https://{{i:git}}-scm.com/](https://{{i:git}}-scm.com/). When {{i:you}} open {{i:Git}} {{i:Bash}}, {{i:you}} get the same `bash`, `ls`, `grep`, `cat`, and other Unix tools used on Linux and macOS - but running on your {{i:Windows}} computer.

<a id="gb-nvda-tips"></a>

## {{i:NVDA}}-Specific Tips

{{i:NVDA}} is free and available from [https://www.nvaccess.org/](https://www.nvaccess.org/)

### Key Commands for {{i:Git}} {{i:Bash}}

| Command                      | What It Does                                                      |
| ---------------------------- | ----------------------------------------------------------------- |
| {{i:NVDA}}+Home              | Read the current line (your {{i:command}} or {{i:output}})        |
| {{i:NVDA}}+Down Arrow        | Read from cursor to end of screen                                 |
| {{i:NVDA}}+Up Arrow          | Read from top to cursor                                           |
| {{i:NVDA}}+Page Down         | Read next page                                                    |
| {{i:NVDA}}+Page Up           | Read previous page                                                |
| {{i:NVDA}}+F7                | Open the Review Mode viewer ({{i:can}} scroll through {{i:text}}) |
| {{i:NVDA}}+Shift+Right Arrow | Read next word                                                    |
| {{i:NVDA}}+Shift+Down Arrow  | Read entire screen                                                |
| {{i:NVDA}}+End               | Jump to end of line                                               |
| {{i:NVDA}}+Home              | Jump to start of line                                             |

### Example: Reading Long Output

Scenario: You ran `ls` and it listed 50 {{i:files}}.

Solution with {{i:NVDA}}:

1. After the {{i:command}} finishes, press {{i:NVDA}}+Home to read the current line
2. Press {{i:NVDA}}+Down Arrow repeatedly to read all {{i:output}}
3. Or press {{i:NVDA}}+F7 to open Review Mode and use arrow keys to scroll

### Tip: Use `ls -1` for {{i:Screen}} Reader Friendly Listings

By default, `ls` in {{i:Git}} {{i:Bash}} may display {{i:files}} in columns. Use `ls -1` (the number {{i:one}}, not the letter L) to display {{i:one}} {{i:file}} per line - much easier to follow with a screen {{i:reader}}.

<a id="gb-jaws-tips"></a>

## {{i:JAWS}}-Specific Tips

{{i:JAWS}} is a commercial screen {{i:reader}} available from [https://www.freedomscientific.com/](https://www.freedomscientific.com/)

### Dolphin SuperNova

Dolphin SuperNova (commercial): [https://example.com](https://example.com) — provides speech and {{i:braille}} {{i:support}} and tightly integrated magnification. Refer to vendor docs for keyboard mappings; many users rely on review-mode features similar to {{i:NVDA}}/{{i:JAWS}}.

### {{i:Windows}} Narrator

{{i:Windows}} Narrator (built-in): [https://example.com](https://example.com) — good for quick checks and lightweight usage; Narrator {{i:command}} keys differ by {{i:Windows}} version (use Narrator key + arrow keys to read). Add Narrator to your {{i:workflow}} when a full third-party screen {{i:reader}} isn't available.

### Key Commands for {{i:Git}} {{i:Bash}}

| Command           | What It Does                          |
| ----------------- | ------------------------------------- |
| Insert+Down Arrow | Read line by line downward            |
| Insert+Up Arrow   | Read line by line upward              |
| Insert+Page Down  | Read next page of {{i:text}}          |
| Insert+Page Up    | Read previous page of {{i:text}}      |
| Insert+End        | Jump to end of {{i:text}} on screen   |
| Insert+Home       | Jump to start of {{i:text}} on screen |
| Insert+Ctrl+Down  | Read to end of screen                 |
| Insert+Ctrl+Up    | Read to beginning of screen           |
| Insert+F3         | Open {{i:JAWS}} menu                  |

### Example: Reading Long Output

Scenario: You ran `ls > list.txt` and saved {{i:output}} to a {{i:file}}.

Solution with {{i:JAWS}}:

1. Open the {{i:file}}: `notepad list.txt`
2. In Notepad, press Insert+Ctrl+Down to hear all content
3. Use Insert+Down Arrow to read line by line at your own pace

<a id="gb-general-terminal"></a>

## General Terminal Accessibility

### Understanding the {{i:Git}} {{i:Bash}} Layout

The {{i:Git}} {{i:Bash}} window contains:

1. Title bar: Window {{i:name}} (e.g., "MINGW64:/c/Users/YourName")
2. Content area: Command history and {{i:output}}
3. Prompt: Where {{i:you}} type (e.g., `YourName@COMPUTER MINGW64 ~$`)

Your screen {{i:reader}} reads from top to bottom, but focus is at the prompt (bottom).

### The {{i:Git}} {{i:Bash}} Prompt

The default {{i:Git}} {{i:Bash}} prompt looks like:

```bash
YourName@COMPUTERNAME MINGW64 ~/Documents
$
```

- `YourName` = your {{i:Windows}} username
- `COMPUTERNAME` = your computer's {{i:name}}
- `MINGW64` = the {{i:environment}} type (64-bit)
- `~/Documents` = your current location
- `$` = ready for input

Note: Paths in {{i:Git}} {{i:Bash}} use forward slashes (`/`) and your {{i:Windows}} `C:\Users\YourName` folder appears as `/c/Users/YourName` or simply `~`.

### Navigation Sequence

When {{i:you}} open {{i:Git}} {{i:Bash}}:

1. Your screen {{i:reader}} announces the window title
2. Then it announces the prompt line
3. Anything {{i:before}} the prompt is previous {{i:output}}
4. Anything after the prompt is where {{i:new}} {{i:output}} will appear

### Reading Output Effectively

Strategy 1: Immediate Output (Small Amount)

- Run a {{i:command}}
- Your screen {{i:reader}} announces {{i:output}} immediately
- This works well for short outputs (a few lines)

Strategy 2: Large Output (Many Lines)

- Redirect to a {{i:file}}: `command > output.txt`
- Open the {{i:file}}: `notepad output.txt`
- Read in Notepad (easier for long {{i:text}})

Strategy 3: Searching Output

- Use `grep` to filter:

  ```bash
  ls | grep "pattern"
  ```

- Only results matching "pattern" are shown

<a id="gb-long-output"></a>

## Working with Long Output

### Solution 1: Redirect to a File

```bash
ls -1 > list.txt
notepad list.txt
```

### Solution 2: Use Pagination

```bash
ls | less
```

- Press Space to see next page
- Press Q to quit
- Note: Some screen readers struggle with `less`, so Solution 1 is preferred

### Solution 3: Filter Output

```bash
ls | grep "\.scad"
```

### Solution 4: Count Before Displaying

```bash
ls | wc -l
```

Tells {{i:you}} how many items there are. If the count is over 20, use the {{i:file}} method.

<a id="gb-shortcuts"></a>

## Keyboard Shortcuts Reference

### All Users (Works in {{i:Git}} {{i:Bash}} Regardless of {{i:Screen}} Reader)

| Key        | Action                                     |
| ---------- | ------------------------------------------ |
| Up Arrow   | Show previous {{i:command}}                |
| Down Arrow | Show next {{i:command}}                    |
| Tab        | Auto-complete {{i:file}}/folder names      |
| Shift+Tab  | Cycle backward through completions         |
| Home       | Jump to start of line                      |
| End        | Jump to end of line                        |
| Ctrl+A     | Jump to start of line (alternate)          |
| Ctrl+E     | Jump to end of line (alternate)            |
| Ctrl+C     | Stop {{i:command}}                         |
| Ctrl+L     | Clear screen                               |
| Enter      | Run {{i:command}}                          |
| Ctrl+R     | Search {{i:command}} history interactively |

<a id="gb-troubleshooting"></a>

## Troubleshooting

### Problem 1: "I Can't Hear the Output After Running a Command"

1. Redirect to {{i:file}}: `command > output.txt` then `notepad output.txt`
2. Press End or Ctrl+End to go to end of {{i:text}}
3. Use Up Arrow to review previous {{i:command}}

### Problem 2: "Tab Completion Isn't Working"

1. Need at least {{i:one}} character - type `cd D` then Tab (not just `cd` then Tab)
2. Check if item exists - use `ls` {{i:first}} to see available items
3. Multiple matches - press Tab twice to list all options

### Problem 3: "'Command Not Found' Error"

1. Check spelling carefully
2. {{i:Git}} {{i:Bash}} uses Unix {{i:commands}}: use `ls` not `dir`, use `cat` not `type`
3. Verify the program is installed and in your {{i:PATH}}: `which openscad`

### Problem 4: "Paths Look Weird"

{{i:Git}} {{i:Bash}} converts {{i:Windows}} paths to Unix style:

- {{i:Windows}}: `C:\Users\YourName\Documents`
- {{i:Git}} {{i:Bash}}: `/c/Users/YourName/Documents` or `~/Documents`

Both refer to the same location. When opening {{i:files}} in {{i:Windows}} apps (like Notepad), {{i:you}} may need to use the {{i:Windows}} path format.

### Problem 5: "Command Runs Forever and Won't Stop"

Press Ctrl+C

### Problem 6: "I Need to Edit My Last Command"

1. Press Up Arrow to show previous {{i:command}}
2. Use arrow keys to move through it
3. Edit the {{i:command}}
4. Press Enter to {{i:run}} the modified version

## Pro Tips for Efficiency

### 1. Use `ls -1` for {{i:Screen}} Reader Friendly Listings

```bash
ls -1
```

One {{i:file}} per line - much easier to follow with a screen {{i:reader}}.

### 2. Create Aliases for Frequently Used Commands

```bash
alias la='ls -1a'
```

Add this to your `~/.bashrc` {{i:file}} to make it permanent.

### 3. Use Command History Effectively

```bash
history
```

Run a previous {{i:command}} by number:

```bash
!5
```

(Runs the 5th {{i:command}} in history)

Or search history interactively:

```bash
# Press Ctrl+R then type part of a previous command
```

### 4. Redirect Everything to Files for Accessibility

```bash
command-name > results.txt
notepad results.txt
```

### 5. Create a README for Yourself

```bash
echo "ls -1 means list files one per line (screen reader friendly)" > my-notes.txt
echo "cd means change directory" >> my-notes.txt
notepad my-notes.txt
```

## Recommended Workflow

For every {{i:new}} task:

1. Know where {{i:you}} are: `pwd`
2. See what's around: `ls -1`
3. Plan your next step: Think {{i:before}} typing
4. Run the {{i:command}}: Type and press Enter
5. Check the {{i:output}}: Use screen {{i:reader}} or redirect to {{i:file}}
6. Move forward: Next {{i:command}} or `cd` to next folder

## Quick Reference Card

```plaintext
EVERY COMMAND STARTS WITH:
1. pwd (where am I?)
2. ls -1 (what's here?)
3. cd path (go there)

LONG OUTPUT?
-> command > file.txt
-> notepad file.txt

STUCK?
-> Ctrl+C

WANT TO REPEAT?
-> Up Arrow
-> history

NEED HELP?
-> man command-name  (or: command --help)
```

## Additional Resources

- {{i:NVDA}} Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- {{i:JAWS}} Documentation: [https://www.freedomscientific.com/{{i:support}}/](https://www.freedomscientific.com/{{i:support}}/)
- {{i:Git}} for {{i:Windows}} (includes {{i:Git}} {{i:Bash}}): [https://{{i:git}}-scm.com/](https://{{i:git}}-scm.com/)
- {{i:Bash}} Manual: [https://www.gnu.org/software/bash/manual/](https://www.gnu.org/software/bash/manual/)

---

<a id="gb-tutorial"></a>

# Tutorial: {{i:Git}} {{i:Bash}} Quick Start

---

Estimated {{i:time}}: 30-45 minutes

Learning Objectives

- Launch {{i:Git}} {{i:Bash}} and identify the prompt
- Understand and use basic path notation (`~`, `./`, `../`)
- Use `pwd`, `ls -1`, and `cd` to navigate the filesystem
- Open {{i:files}} in an external editor and {{i:run}} simple {{i:commands}}

Materials

- A computer with {{i:Git}} {{i:Bash}} installed (install via [https://{{i:git}}-scm.com/](https://{{i:git}}-scm.com/))
- Access to a {{i:text}} editor (Notepad, VS Code)

## Pre-Requisite Knowledge

- Typing and basic {{i:text}}-editing skills
- Familiarity with {{i:file}}/folder concepts and basic OS {{i:navigation}}
- Basic screen-reading familiarity (if applicable)

## What is {{i:Git}} {{i:Bash}}?

{{i:Git}} {{i:Bash}} is a free terminal application for {{i:Windows}} that provides a {{i:Bash}} (Unix {{i:shell}}) {{i:environment}}. It is installed as {{i:part}} of {{i:Git}} for {{i:Windows}}. When {{i:you}} open {{i:Git}} {{i:Bash}}, {{i:you}} {{i:can}} use Unix {{i:commands}} like `ls`, `cat`, `grep`, and `echo` - the same {{i:commands}} used on Linux and macOS - right on your {{i:Windows}} computer.

{{i:Git}} {{i:Bash}} is useful for:

- Running {{hi:CLI}}CLI programs (like {{i:OpenSCAD}}, slicers, or {{i:3DMake}})
- Navigating the filesystem with keyboard-only {{i:commands}}
- Automating repetitive tasks with {{i:scripts}}
- Accessibility: works cleanly with {{i:NVDA}}, {{i:JAWS}}, and other screen readers

## What We'll Do and Why

You'll use {{i:Git}} {{i:Bash}} to {{i:run}} CLI programs, navigate the filesystem, and manipulate {{i:files}} - tasks that are especially efficient when {{i:using}} a keyboard or a screen {{i:reader}}.

## Quick Tutorial & Core Concepts

### Paths and Navigation

- `~` - home directory (e.g., `/c/Users/YourName`)
- `.` - current directory
- `..` - parent directory
- `./` - current directory shortcut (used to {{i:run}} {{i:scripts}}: `./script.sh`)
- `../` - parent directory shortcut
- Use Tab to autocomplete {{i:files}} and folders

{{i:Git}} {{i:Bash}} uses forward slashes (`/`) for paths, just like Linux. Your {{i:Windows}} `C:\Users\YourName` folder is accessible as `/c/Users/YourName` or simply `~`.

### Useful Commands (Examples)

```bash
pwd                # show current directory
ls -1              # list files, one per line (screen-reader friendly)
cd path/to/dir     # change directory
whoami             # current user
```

### Wildcards

- `*` matches zero or more characters
- `?` matches a single character

Use `ls *.scad` to filter by extension, for example.

## {{i:Common}} Operations

### File and Folder Manipulation

```bash
mkdir my-folder          # create folder
mkdir -p a/b/c           # create nested folders at once
cp -r src dest           # copy (use -r for directories)
mv oldname newname       # rename or move
rm file                  # remove file
rm -r folder             # remove folder and contents
touch filename.txt       # create new empty file
```

### Input, Output, and Piping

```bash
echo 'hello' | clip      # copy to clipboard
command > output.txt     # redirect output to file
command >> output.txt    # append output to file
command > /dev/null      # discard/suppress output
```

Use `|` to pipe {{i:output}} and `>` to redirect {{i:into}} {{i:files}}.

### Editing and Running Programs

```bash
notepad file.txt         # open in Notepad (Windows)
code file.txt            # open in VS Code (if in PATH)
./script.sh              # run a script in the current directory
chmod +x script.sh       # make a script executable
```

## {{i:Screen}}-Reader Friendly Tips

- Prefer `ls -1` for {{i:name}}-only, {{i:one}}-per-line {{i:output}}.
- Filter lists with `grep`: `ls -1 ~/Documents | grep "\.scad$"` ({{i:files}} only ending in .scad).
- Redirect very long outputs to a {{i:file}} and open it in an editor.

## Error Handling and Control

- Abort a running {{i:command}}: `Ctrl+C`
- View history: Up/Down arrows or `history`
- Clear screen: `clear` (or `Ctrl+L`)
- If an {{i:error}} is long, read the {{i:first}} few lines for the gist and {{i:copy}} short snippets {{i:into}} a {{i:file}} to examine.

## Environment Variables & {{i:PATH}}

Environment {{i:variables}} configure your session. `PATH` tells the {{i:shell}} where to find executables.

```bash
echo $PATH
echo $HOME
echo $USER
```

To add a directory to {{i:PATH}} for the current session:

```bash
export PATH="$PATH:/path/to/my/tools"
```

To make it permanent, add that line to `~/.bashrc`.

## Running CLI Applications and Archives

To extract ZIP archives in {{i:Git}} {{i:Bash}}:

```bash
# Unzip a file
unzip file.zip -d destinationfolder

# Or use Windows' built-in tool (from Git Bash):
powershell.exe Expand-Archive -Path file.zip -DestinationPath folder
```

## Aliases and Cross-Platform Notes

{{i:Git}} {{i:Bash}} provides Unix {{i:commands}} that {{i:work}} identically on Linux and macOS. This means your {{i:Git}} {{i:Bash}} skills transfer directly if {{i:you}} ever {{i:work}} on a Mac or Linux system.

Useful aliases to add to `~/.bashrc`:

```bash
alias ll='ls -la'
alias la='ls -1a'
alias ..='cd ..'
alias ...='cd ../..'
```

## Step-by-step Tasks (Hands-On)

1. Open {{i:Git}} {{i:Bash}}; listen for the prompt and current path.
2. Run `pwd` to confirm your location.
3. Run `ls -1` in your home directory and note the {{i:output}}.
4. Practice `cd Documents`, `cd ../`, and `cd ~` to move {{i:between}} folders.
5. Create and open a {{i:file}}: `touch example.txt && notepad example.txt` (or `code example.txt`).

## Checkpoints

- After step 3 {{i:you}} should be able to state your current directory.
- After step 5 {{i:you}} should be able to {{i:create}} and open a {{i:text}} {{i:file}} from {{i:Git}} {{i:Bash}}.

## Quick Quiz (10 questions)

1. What {{i:command}} prints your current directory?
2. What does `~` represent?
3. How do {{i:you}} list only names, {{i:one}} per line?
4. How do {{i:you}} go up {{i:one}} directory level?
5. How would {{i:you}} open `notes.txt` in Notepad from {{i:Git}} {{i:Bash}}?
6. True or False: The pipe operator `|` sends {{i:output}} to a {{i:file}}.
7. Explain why running a {{i:script}} requires `chmod +x` {{i:first}}.
8. What is the {{i:difference}} {{i:between}} running a {{i:script}} with `./script.sh` versus `bash script.sh`?
9. Describe how {{i:you}} would handle a very long {{i:command}} {{i:output}} when {{i:using}} a screen {{i:reader}}.
10. What does the `PATH` {{i:environment}} variable do, and why is it important when running programs like {{i:OpenSCAD}}?

## Extension Problems

1. Create a folder `OpenSCADProjects` in Documents and verify its contents.
2. Create three {{i:files}} named `a.scad`, `b.scad`, `c.scad` and list them with a wildcard.
3. Save `ls -1 ~/Documents` {{i:output}} to `doclist.txt` and open it.
4. Try tab-completion in a deeply nested folder and note behavior.
5. Capture `pwd` {{i:output}} {{i:into}} a {{i:file}} and open it: `pwd > cwd.txt && notepad cwd.txt`.
6. Build an automated setup {{i:script}} that creates a complete project directory structure, initializes placeholder {{i:files}}, and generates a README.
7. Create a {{i:Git}} {{i:Bash}} cheat sheet for your most-used {{i:commands}}; organize by category ({{i:navigation}}, {{i:files}}, scripting, troubleshooting).
8. Write a non-visual tutorial for {{i:Git}} {{i:Bash}} basics; use audio descriptions and keyboard-only {{i:navigation}} as the primary learning method.
9. Develop a {{i:workflow}} automation {{i:script}}: combines multiple {{i:Git}} {{i:Bash}} concepts (folders, aliases, piping) to solve a real 3D {{i:printing}} task.
10. Create a {{i:Git}} {{i:Bash}} proficiency self-assessment: list all concepts covered, provide {{i:test}} {{i:commands}} for {{i:each}}, and reflect on what {{i:you}} learned.

## References

- {{i:Git}} for {{i:Windows}}. (2024). _{{i:Git}} {{i:Bash}}_. [https://gitforwindows.org/](https://gitforwindows.org/)
- GNU. (2024). _{{i:Bash}} {{i:reference}} manual_. [https://www.gnu.org/software/bash/manual/bash.html](https://www.gnu.org/software/bash/manual/bash.html)
- The Linux Documentation Project. (2024). _{{i:Bash}} Beginners Guide_. [https://tldp.org/LDP/{{i:Bash}}-Beginners-Guide/html/](https://tldp.org/LDP/{{i:Bash}}-Beginners-Guide/html/)

## Helpful Resources

- [{{i:Git}} for {{i:Windows}}](https://gitforwindows.org/)
- [{{i:Bash}} Reference Manual (GNU)](https://www.gnu.org/software/bash/manual/bash.html)
- [{{i:Bash}} Beginners Guide](https://tldp.org/LDP/{{i:Bash}}-Beginners-Guide/html/)
- [GNU Coreutils](https://www.gnu.org/software/coreutils/manual/)

Other {{i:Screen}} Readers

Dolphin SuperNova (commercial) and {{i:Windows}} Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://example.com](https://example.com) and [https://example.com](https://example.com) for vendor documentation.

---

<a id="gb-lesson-pre"></a>

# Lesson Pre: Your First Terminal — {{i:Screen}} Reader Navigation Fundamentals

---

Duration: 1.5-2 hours (for screen {{i:reader}} users)  
Prerequisites: None - this is the starting point  
Accessibility Note: This lesson is designed specifically for screen {{i:reader}} users ({{i:NVDA}}, {{i:JAWS}})

> [!IMPORTANT]
> {{i:Git}} {{i:Bash}} uses Unix/bash {{i:commands}}, different from {{i:Windows}} CMD/{{i:PowerShell}}

## What is {{i:Git}} {{i:Bash}}?

{{i:Git}} {{i:Bash}} is a Unix/Linux {{i:shell}} running on {{i:Windows}}. It gives {{i:you}} bash {{i:commands}} (same as macOS and Linux) while staying on your {{i:Windows}} computer.

Why learn this?

- Faster and more precise {{i:work}} (especially for 3D {{i:printing}} {{i:scripts}} and automation)
- Essential for programming and {{i:using}} tools like {{i:OpenSCAD}}
- Accessibility: {{i:Git}} {{i:Bash}} works perfectly with screen readers
- Transferable: Same {{i:commands}} {{i:work}} on macOS and Linux
- Industry-standard: Professional developers use this everywhere

## Installing and Opening {{i:Git}} {{i:Bash}}

### {{i:3DMake}}: Your First Real-World Goal

**{{i:3DMake}}** ([github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)) is a free, {{i:accessibility}}-{{i:first}} {{i:command}}-line tool for designing and 3D-{{i:printing}} models entirely from the terminal — no mouse required. Every {{i:Git}} {{i:Bash}} skill in this curriculum directly supports a real {{i:3DMake}} {{i:workflow}}.

Here is the end goal — {{i:one}} {{i:command}} that builds your {{i:OpenSCAD}} model, slices it, and sends it to the {{i:printer}}:

```bash
# Navigate to your project folder
cd ~/Documents/3d_projects/my_cube

# Build, slice, and print in a single command
3dm build slice print
```

Keep this goal in mind as {{i:you}} {{i:work}} through {{i:each}} lesson.

## Installing and Opening {{i:Git}} {{i:Bash}}

### Installation (If Not Already Installed)

1. Download from: [https://{{i:git}}-scm.com/download/win](https://{{i:git}}-scm.com/download/win)
2. Run the installer
3. Accept defaults (all options {{i:work}} fine)
4. Installation takes ~5 minutes

### Opening {{i:Git}} {{i:Bash}}

Method 1: Search (Easiest)

1. Press the {{i:Windows}} key alone
2. You should hear "Search"
3. Type: `Git Bash`
4. You'll hear search results appear
5. Press Enter to open

Method 2: From File Explorer

1. Open File Explorer
2. Navigate to any folder
3. Right-click on the folder
4. Look for "{{i:Git}} {{i:Bash}} Here"
5. Press Enter

### First Connection: Understanding the Prompt

When {{i:Git}} {{i:Bash}} opens, your screen {{i:reader}} will announce the window title and then the prompt.

What {{i:you}}'ll hear (typical example):

```
user@computer MINGW64 ~
$
```

What this means:

- `user` = Your username
- `@computer` = Your computer {{i:name}}
- `MINGW64` = Version of {{i:Git}} {{i:Bash}}
- `~` = Your current location (home directory)
- `$` = The prompt is ready for your input

> [!IMPORTANT]
> Your cursor is blinking right after the `$`. This is where {{i:you}} type.

## Your First Commands ({{i:Screen}} Reader Edition)

### Command 1: "Where Am I?" - `pwd`

What it does: Tells {{i:you}} your current location

Type this:

```bash
pwd
```

Press Enter

What {{i:you}}'ll hear:
Your screen {{i:reader}} will announce the current path, something like:

```
/c/Users/YourName
```

Understanding paths in {{i:Git}} {{i:Bash}}:

- Paths use forward slashes: `/c/Users/YourName/Documents`
- `/c/` means the C: drive ({{i:Windows}} drive)
- This is Unix-style, same as macOS and Linux
- Think of it like folders inside folders: `/c/` (main drive) -> `Users` -> `YourName` -> `Documents`

### Command 2: "What's Here?" - `ls`

What it does: Lists all {{i:files}} and folders in your current location

Type this:

```bash
ls
```

Press Enter

What {{i:you}}'ll hear:
Your screen {{i:reader}} will announce a list of {{i:file}} and folder names, {{i:one}} per line. Perfect for screen readers!

### Command 3: "Go There" - `cd Documents`

What it does: Changes your location (navigates to a folder)

Type this:

```bash
cd Documents
```

Press Enter

What {{i:you}}'ll hear:
The prompt changes to show your {{i:new}} location. You might hear something like:

```
user@computer MINGW64 ~/Documents
$
```

Practice {{i:navigation}}:

1. Run `pwd` to confirm {{i:you}}'re in Documents
2. Run `ls` to see what {{i:files}} are in Documents
3. Try going back: `cd ..` (the `..` means "go up {{i:one}} level")
4. Run `pwd` again to confirm
5. Go back to Documents: `cd Documents`

## Creating and Viewing Files

### Create a Simple File

Type this:

```bash
echo "Hello, Git Bash!" > hello.txt
```

What this does:

- `echo` sends {{i:text}} to the screen (or {{i:file}})
- `"Hello, Git Bash!"` is the {{i:text}}
- `>` redirects it to a {{i:file}} called `hello.txt`

### Read the File Back

Type this:

```bash
cat hello.txt
```

What {{i:you}}'ll hear:
Your screen {{i:reader}} announces:

```
Hello, Git Bash!
```

### Open and Edit the File

Type this:

```bash
notepad.exe hello.txt
```

This opens the {{i:file}} in Notepad where {{i:you}} {{i:can}} edit it with your screen {{i:reader}}.

## Essential Keyboard Shortcuts

These {{i:work}} in {{i:Git}} {{i:Bash}} and are crucial for screen {{i:reader}} users:

| Key Combination | What It Does                                                       |
| --------------- | ------------------------------------------------------------------ |
| Up Arrow        | Shows your previous {{i:command}} (press again to go further back) |
| Down Arrow      | Shows your next {{i:command}} (if {{i:you}} went back)             |
| Tab             | Auto-completes folder/{{i:file}} names                             |
| Ctrl+C          | Stops a running {{i:command}}                                      |
| Ctrl+L          | Clears the screen                                                  |
| Ctrl+A          | Go to beginning of line                                            |
| Ctrl+E          | Go to end of line                                                  |
| Enter           | Runs the {{i:command}}                                             |

{{i:Screen}} {{i:reader}} tip: These all {{i:work}} perfectly with your screen {{i:reader}}. Try them!

## {{i:Screen}} Reader-Specific Tips

### {{i:NVDA}} Users

1. Reading Command Output:
   - Use {{i:NVDA}}+Home to read the current line
   - Use {{i:NVDA}}+Down Arrow to read to the end of the screen
   - Use {{i:NVDA}}+Page Down to read the next page

2. Reviewing Text:
   - Use {{i:NVDA}}+Shift+Page Up to review {{i:text}} above

### {{i:JAWS}} Users

1. Reading Output:
   - Use Insert+Down Arrow to read line-by-line
   - Use Insert+Page Down to read by page
   - Use Insert+End to jump to the end of {{i:text}}

2. Reading All Text:
   - Use Insert+Down Arrow repeatedly
   - Or use Insert+Ctrl+Down to read to the end

### {{i:Common}} Issue: "I Can't Hear the Output"

Problem: You {{i:run}} a {{i:command}} but don't hear the {{i:output}}

Solutions:

1. Make sure your cursor is at the prompt (try pressing End or Ctrl+E)
2. Use Up Arrow to go back to your previous {{i:command}} and review it
3. Try redirecting to a {{i:file}}: `command > output.txt` then open the {{i:file}}
4. In {{i:NVDA}}: Try pressing {{i:NVDA}}+F7 to open the Review Mode viewer

## Practice Exercises

Complete these in order. Take your {{i:time}} with {{i:each}} {{i:one}}:

### Exercise 1: Basic Navigation

1. Open {{i:Git}} {{i:Bash}}
2. Run `pwd` and note your location
3. Run `ls` and listen to what's there
4. Try `cd Documents` or another folder
5. Run `pwd` to confirm your {{i:new}} location
6. Run `ls` in this {{i:new}} location

Goal: You should be comfortable knowing where {{i:you}} are and what's around {{i:you}}

### Exercise 2: Using Tab Completion

1. In your home directory, type `cd D` (just the letter D)
2. Press Tab
3. {{i:Git}} {{i:Bash}} should auto-complete to a folder starting with D
4. Repeat with other folder names
5. Try typing a longer {{i:name}}: `cd Down` and Tab

Goal: Tab completion should feel natural

### Exercise 3: Creating and Viewing Files

1. Create a {{i:file}}: `echo "Test content" > test.txt`
2. View it: `cat test.txt`
3. Create another: `echo "Line 2" > another.txt`
4. {{i:List}} both: `ls *.txt`

Goal: You understand {{i:create}}, view, and list operations

### Exercise 4: Going Up Levels

1. Navigate {{i:into}} several folders: `cd Documents`, then `cd folder1`, etc.
2. From deep inside, use `cd ..` multiple times to go back up
3. After {{i:each}} `cd ..`, {{i:run}} `pwd` to confirm your location

Goal: You understand relative {{i:navigation}} with `..`

### Exercise 5: Redirecting Output

1. Create a list: `ls > directorylist.txt`
2. Open it: `notepad.exe directorylist.txt`
3. Read it with your screen {{i:reader}}
4. Close Notepad
5. Verify the {{i:file}} exists: `ls | grep directory`

Goal: You {{i:can}} save long outputs to {{i:files}} for easier reading

## Checkpoint Questions

After completing this lesson, {{i:you}} should be able to answer:

1. What does `pwd` do?
2. What does `ls` do?
3. Why do we use `ls` for listings?
4. What path are {{i:you}} in right now?
5. How do {{i:you}} navigate to a {{i:new}} folder?
6. How do {{i:you}} go up {{i:one}} level?
7. What's the Tab key for?
8. What does `echo "text" > file.txt` do?
9. How do {{i:you}} read a {{i:file}} back?
10. How do {{i:you}} stop a {{i:command}} that's running?

You should be able to answer all 10 with confidence {{i:before}} moving to {{i:Bash}} Lesson 0.

## {{i:Common}} Questions

Q: Is {{i:Git}} {{i:Bash}} the same as Command Prompt or {{i:PowerShell}}?
A: No. {{i:Git}} {{i:Bash}} uses Unix/bash {{i:commands}}. CMD and {{i:PowerShell}} use {{i:Windows}} {{i:commands}}. This curriculum teaches bash (Unix) style.

Q: Why is my screen {{i:reader}} not reading the {{i:output}}?
A: This is {{i:common}}. Use `command > file.txt` to save {{i:output}} to a {{i:file}}, then open it with Notepad for reliable reading.

Q: What if I type something wrong?
A: Just press Enter and {{i:you}}'ll see an {{i:error}} message. Type the correct {{i:command}} on the next line. No harm done!

Q: How do I get help with a {{i:command}}?
A: Type `man command-name` (we'll cover this in {{i:Bash}} Lesson 0)

Q: Why do paths look different in {{i:Git}} {{i:Bash}}?
A: {{i:Git}} {{i:Bash}} uses Unix-style paths with forward slashes, not {{i:Windows}} backslashes. Don't worry - {{i:you}}'ll get used to it quickly.

## Path Comparison: {{i:Windows}} vs {{i:Git}} {{i:Bash}}

| Style                | Example                   | Where Used                                    |
| -------------------- | ------------------------- | --------------------------------------------- |
| {{i:Windows}}        | `C:\Users\Name\Documents` | CMD, {{i:PowerShell}}, {{i:Windows}} Explorer |
| {{i:Git}} {{i:Bash}} | `/c/Users/Name/Documents` | {{i:Git}} {{i:Bash}}, macOS Terminal, Linux   |

In {{i:Git}} {{i:Bash}}:

- `C:\` becomes `/c/`
- Backslashes `\` become forward slashes `/`
- Otherwise identical

## Next Steps

Once {{i:you}}'re comfortable with these basics:

- Move to {{i:Bash}} Lesson 0: Getting Started for deeper path understanding
- Then continue through {{i:Bash}} Lesson 1 through {{i:Bash}} Lesson 5 for full terminal mastery

## Resources

- {{i:Git}} {{i:Bash}} Installation Guide: [https://{{i:git}}-scm.com/book/en/v2/Getting-Started-Installing-{{i:Git}}](https://{{i:git}}-scm.com/book/en/v2/Getting-Started-Installing-{{i:Git}})
- {{i:Bash}} Basics: [https://www.gnu.org/software/bash/manual/bash.html#Basic-{{i:Shell}}-Features](https://www.gnu.org/software/bash/manual/bash.html#Basic-{{i:Shell}}-Features)
- {{i:NVDA}} {{i:Screen}} Reader: [https://www.nvaccess.org/](https://www.nvaccess.org/)
- {{i:JAWS}} {{i:Screen}} Reader: [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)

<a id="ps-troubleshooting"></a>

## Troubleshooting

| Issue                           | Solution                                                                         |
| ------------------------------- | -------------------------------------------------------------------------------- |
| {{i:Git}} {{i:Bash}} won't open | Make sure it's installed; search for "{{i:Git}} {{i:Bash}}" in Start menu        |
| Can't hear the {{i:output}}     | Try redirecting to a {{i:file}}: `command > output.txt`                          |
| Tab completion not working      | Make sure {{i:you}} typed at least {{i:one}} character {{i:before}} pressing Tab |
| Command not found               | Make sure {{i:you}} spelled it correctly; try `man` for available {{i:commands}} |
| Stuck in a {{i:command}}        | Press Ctrl+C to stop it                                                          |

Still stuck? The checkpoint questions and exercises are your best teacher. Work through them multiple times until comfortable.

Other {{i:Screen}} Readers

Dolphin SuperNova (commercial) and {{i:Windows}} Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://{{i:support}}.microsoft.com/narrator](https://{{i:support}}.microsoft.com/narrator) for vendor documentation.

---

<a id="gb-lesson-0"></a>

# Lesson 0: Getting Started — Layout, Paths, and the {{i:Shell}}

---

Estimated {{i:time}}: 20-30 minutes

## Learning Objectives

- Launch {{i:Git}} {{i:Bash}} and locate the prompt
- Understand Unix-style path notation and shortcuts (`~`, `./`, `../`)
- Use tab completion to navigate quickly

## Materials

- Computer with {{i:Git}} {{i:Bash}} installed
- Editor (Notepad/VS Code)

## Step-by-step Tasks

1. Open {{i:Git}} {{i:Bash}} and note the prompt (it includes the current path).
2. Run `pwd` and say or note the printed path.
3. Use `ls` to list names in your home directory.
4. Practice `cd Documents`, `cd ../` and `cd ~` until comfortable.
5. Try tab-completion: type `cd ~/D` and press Tab.

## Checkpoints

- Confirm {{i:you}} {{i:can}} state your current path and move to `Documents`.

## Quiz - Lesson GitBash.0

## {{i:3DMake}} Quick-Start: Your First Real Project

You now know enough {{i:Git}} {{i:Bash}} to set up a real {{i:3DMake}} project. Do this now — it is the fastest path to a printed object.

**Step 1 — Download and {{i:run}} the {{i:3DMake}} setup wizard:**

```bash
# Go to your Downloads folder (where you extracted 3dmake)
cd ~/Downloads/3dmake

# Run the guided setup (answer the questions about your printer)
./3dm setup
```

**Step 2 — Create your {{i:first}} project:**

```bash
# Create a folder for all your 3D projects and initialize the first one
mkdir -p ~/Documents/3d_projects/my_cube
cd ~/Documents/3d_projects/my_cube
3dm new
```

**Step 3 — Confirm the project structure:**

```bash
# You should see three items: src/, build/, and 3dmake.toml
ls -1
```

You just used `mkdir`, `cd`, and `ls -1` on a real project. You are ready to {{i:print}}.

## Checkpoints

- Confirm {{i:you}} {{i:can}} state your current path and move to `Documents`.

## Quiz - Lesson GitBash.0

1. What is a path?
2. What does `~` mean?
3. How do {{i:you}} autocomplete a path?
4. How do {{i:you}} go up {{i:one}} directory?
5. What {{i:command}} lists {{i:file}} names?

   > [!NOTE]
   > {{i:Git}} {{i:Bash}} uses **forward slashes** (`/`) in paths, not {{i:Windows}}-style backslashes (`\`). For example: `/c/Users/YourName/Documents`. This is the Unix convention and transfers directly to macOS and Linux.

6. True or False: {{i:Git}} {{i:Bash}} uses backslashes (`\`) in paths like {{i:Windows}} CMD.
7. Explain the {{i:difference}} {{i:between}} an absolute path and a relative path.
8. If {{i:you}} are in `/c/Users/YourName/Documents` and {{i:you}} type `cd ../`, where do {{i:you}} end up?
9. What happens when {{i:you}} press Tab while typing a folder {{i:name}} in {{i:Git}} {{i:Bash}}?
10. Describe a practical reason why understanding paths is important for a 3D {{i:printing}} {{i:workflow}}.
11. What does `./` mean in a path, and when would {{i:you}} use it?

    > [!NOTE]
    > When a folder {{i:name}} contains spaces, always wrap the full path in **double quotes**: `cd "My Projects"`. Without quotes, the {{i:shell}} interprets the space as a separator {{i:between}} two separate arguments.

12. If a folder path contains spaces (e.g., `My Projects`), how do {{i:you}} navigate to it with `cd`?
13. Explain what the prompt `YourName@COMPUTER MINGW64 ~/Documents $` tells {{i:you}} about your current state.
14. How would {{i:you}} navigate to your home directory from any location {{i:using}} a single {{i:command}}?
15. What is the advantage of {{i:using}} relative paths (like `../`) versus absolute paths in automation {{i:scripts}}?

## Extension Problems

1. Create a nested folder and practice `cd` {{i:into}} it by typing partial names and {{i:using}} Tab.
2. Use `ls -la` to list all {{i:files}} including hidden ones in a folder.
3. Save `pwd` {{i:output}} to a {{i:file}} and open it in Notepad.
4. Try `cd` {{i:into}} a folder whose {{i:name}} contains spaces; observe how quotes are handled.
5. Create a short note {{i:file}} and open it from {{i:Git}} {{i:Bash}}.
6. Build a folder structure that mirrors your project organization; navigate to {{i:each}} level and document the path.
7. Create a {{i:script}} that prints your current path and the total number of {{i:files}} in it; {{i:run}} it from different locations.
8. Investigate special paths (e.g., `$HOME`, `$USER`); {{i:write}} down what {{i:each}} contains and when {{i:you}}'d use them.
9. Compare absolute vs. relative paths by navigating to the same folder {{i:using}} {{i:each}} method; explain which is easier for automation.
10. Create a bash function that changes to a frequently-used folder and lists its contents in {{i:one}} {{i:command}}; {{i:test}} it from different starting locations.
11. Navigate to three different locations and at {{i:each}} {{i:one}} note the prompt, the path from `pwd`, and verify {{i:you}} understand what {{i:each}} shows.
12. Create a complex folder tree (at least 5 levels deep) and navigate it {{i:using}} only relative paths; verify your location at {{i:each}} step.
13. Document all shortcuts {{i:you}} know (`~`, `./`, `../`, `$HOME`) and demonstrate {{i:each}} {{i:one}} works as expected.
14. Write a guide for a peer on how to understand the {{i:Git}} {{i:Bash}} prompt and path notation without {{i:using}} GUI {{i:file}} explorer.
15. Create a troubleshooting flowchart: if someone says "I don't know where I am," what {{i:commands}} do {{i:you}} give them to find out?

## References

- GNU. (2024). _{{i:Bash}} Manual_. [https://example.com](https://example.com)
- {{i:Git}} SCM. (2024). _{{i:Git}} {{i:Bash}} documentation_. [https://example.com](https://example.com)
- Linux Foundation. (2024). _The Linux Command Line_. [https://example.com](https://example.com)

## Helpful Resources

- [{{i:Bash}} Manual - Navigation](https://www.gnu.org/software/bash/manual/htmlnode/Bourne-{{i:Shell}}-Builtins.html)
- [{{i:Git}} {{i:Bash}} Basics](https://{{i:git}}-scm.com/book/en/v2/{{i:Git}}-Basics-Getting-a-{{i:Git}}-Repository)
- [Linux Path Guide](https://linuxcommand.org/lc3lts0020.php)
- [Understanding {{i:Bash}} Prompts](https://www.gnu.org/software/bash/manual/htmlnode/Controlling-the-Prompt.html)
- [Tab Completion in {{i:Bash}}](https://www.gnu.org/software/bash/manual/htmlnode/Commands-For-Completion.html)

---

<a id="gb-lesson-1"></a>

# Lesson 1: Navigation — Moving Around Your File System

---

**Duration:** 1 class period
**Prerequisite:** {{i:Bash}} Lesson 0 (Getting Started)

## Learning Objectives

By the end of this lesson, {{i:you}} will be able to:

- Use `pwd` to {{i:print}} your current location
- Use `cd` to move {{i:between}} directories
- Use `ls` (and its flags) to list {{i:files}} and folders
- Use wildcards `*` and `?` to filter listings
- Navigate relative vs. absolute paths
- Search for {{i:files}} by {{i:name}} and extension

## Materials

- {{i:Git}} {{i:Bash}}
- Text editor (Notepad or VS Code)

---

## Commands Covered in This Lesson

| Command          | What It Does                                                             |
| ---------------- | ------------------------------------------------------------------------ |
| `pwd`            | Print Working Directory - shows where {{i:you}} are                      |
| `cd path`        | Change Directory - move to a {{i:new}} location                          |
| `ls`             | {{i:List}} - shows {{i:files}} and folders in current location           |
| `ls -1`          | {{i:List}} names only, {{i:one}} per line (screen {{i:reader}} friendly) |
| `ls -1 -F`       | {{i:List}} names with type indicators (/ for directories)                |
| `ls *.extension` | {{i:List}} {{i:files}} matching a pattern                                |

---

## `pwd` - Where Am I?

Type `pwd` and press `Enter`. {{i:Git}} {{i:Bash}} prints the full path to your current location.

```bash
pwd
# Output: /c/Users/YourName
```

**When to use:** Always {{i:run}} this if {{i:you}}'re unsure of your current location.

---

## `cd` - Changing Directories

`cd` stands for "change directory."

```bash
# Go to Documents
cd Documents

# Go up one level to parent directory
cd ..

# Go to root of file system
cd /

# Go to home directory
cd ~

# Go to a specific path
cd /c/Users/YourName/Documents/3D_Projects

# Go to previous directory
cd -
```

---

## `ls` - Listing Files and Folders

Use `ls -1` for screen {{i:reader}} compatibility — names only, {{i:one}} per line.

```bash
# List all files and folders (names only, one per line)
ls -1

# List only files (no hidden, no directories)
ls -1 -p | grep -v /

# List only directories
ls -1 -d */
```

---

## Wildcards - Finding Files by Pattern

Wildcards help {{i:you}} find {{i:files}} without typing the full {{i:name}}.

**`*` (asterisk)** matches any number of characters:

```bash
# List all .scad files
ls *.scad

# List all files starting with "part"
ls part*

# List all files ending with "_final"
ls *_final*
```

**`?` (question mark)** matches exactly {{i:one}} character:

```bash
# Find files like model1.scad, model2.scad (but not model12.scad)
ls model?.scad
```

---

## Step-by-step Practice

1. Run `pwd` and confirm your location
2. Move to `Documents`: `cd Documents`

## {{i:3DMake}} in Practice: Navigating a Project

Navigation {{i:commands}} are exactly what {{i:you}} need to explore and manage {{i:3DMake}} projects:

```bash
# Go to your project root
cd ~/Documents/3d_projects/my_cube

# See the project layout: src/, build/, 3dmake.toml
ls -1

# Enter the source folder where your .scad model files live
cd src
ls -1

# Open the main model in your text editor
3dm edit-model

# Go back to project root, then check build output
cd ..
cd build
ls -1 *.stl

# Return to project root
cd ..

# Use wildcards to find all projects with "cube" in the name
ls -1 ~/Documents/3d_projects/*cube*
```

Tab completion makes {{i:navigation}} fast: type `cd ~/Doc` and press Tab.

---

## Step-by-step Practice

1. Run `pwd` and confirm your location
2. Move to `Documents`: `cd Documents`
3. Confirm {{i:you}} moved: `pwd`
4. {{i:List}} {{i:files}} and folders: `ls -1`
5. {{i:List}} only {{i:files}}: `ls -1 -p | grep -v /`
6. Go back up: `cd ..`
7. Search for {{i:files}}: `ls *.txt`

---

## Checkpoints

After this lesson, {{i:you}} should be able to:

- [ ] Navigate to any folder {{i:using}} `cd`
- [ ] Confirm your location with `pwd`
- [ ] {{i:List}} {{i:files}} and folders with `ls -1`
- [ ] Use wildcards to find {{i:files}} by pattern
- [ ] Move {{i:between}} absolute and relative paths confidently

## Quiz - Lesson GitBash.1

1. What does `pwd` show?
2. How do {{i:you}} list directories only with `ls`?
3. What wildcard matches any number of characters?
4. How do {{i:you}} list {{i:files}} with the `.scad` extension?
5. Give an example of an absolute path and a relative path.
6. True or False: The `*` wildcard matches exactly {{i:one}} character.
7. Explain the {{i:difference}} {{i:between}} `ls -1` and `ls -1 -d */`.
8. Write a {{i:command}} that would list all `.txt` {{i:files}} in your Documents folder {{i:using}} a wildcard.
9. How would {{i:you}} search for {{i:files}} containing "{{i:part}}" in their {{i:name}} across multiple {{i:files}}?
10. Describe a practical scenario where {{i:using}} wildcards saves {{i:time}} in a 3D {{i:printing}} {{i:workflow}}.
11. What happens when {{i:you}} use `ls model?.scad` versus `ls model*.scad`?
12. How would {{i:you}} navigate to a folder whose {{i:name}} contains both spaces and special characters?
13. If {{i:you}}'re in `~/Documents/Projects/3D` and {{i:you}} want to go to `~/Documents/Resources`, what {{i:command}} would {{i:you}} use?
14. Write a {{i:command}} sequence that navigates to the Downloads folder, lists only {{i:files}}, then returns to home.
15. Explain the purpose of {{i:using}} `ls -1` specifically in a screen {{i:reader}} context.

## Extension Problems

1. Write a {{i:one}}-line {{i:command}} that lists `.scad` {{i:files}} and saves to `scad_list.txt`.
2. Use `ls -1 ~/Documents | less` to page through long listings.
3. Combine `ls` with `grep` to search for a filename pattern.
4. Create a shortcut alias in the session for a long path and {{i:test}} it.
5. Practice tab-completion in a directory with many similarly named {{i:files}}.
6. Build a bash {{i:script}} that recursively lists all `.scad` and `.stl` {{i:files}} in a directory tree; save the results to a {{i:file}}.
7. Compare the {{i:output}} of `ls`, `ls -1`, `ls -la`, and `ls -1 -d */` to understand the flags; document what {{i:each}} {{i:command}} does.
8. Create a filtering {{i:command}} that displays only {{i:files}} modified in the last 7 days; {{i:test}} it on your documents folder.
9. Write a non-visual guide to {{i:Git}} {{i:Bash}} {{i:navigation}}; include descriptions of {{i:common}} patterns and how to verify directory contents audibly.
10. Develop a {{i:navigation}} {{i:workflow}} for a typical 3D {{i:printing}} project: move {{i:between}} CAD, slicing, and {{i:print}}-log folders efficiently; document the {{i:commands}}.
11. Create a complex wildcard search: find all {{i:files}} in a folder and subfolders that match multiple patterns (e.g., `*_v1.*` or `*_final.*`).
12. Build a {{i:script}} that navigates through a folder tree, counts {{i:files}} at {{i:each}} level, and reports the structure.
13. Document the {{i:output}} differences {{i:between}} `ls`, `ls -1`, `ls -la`, and `ls -1 -d */`; explain when to use {{i:each}}.
14. Create a {{i:navigation}} "cheat sheet" as a bash {{i:script}} that prints {{i:common}} paths and how to navigate to them.
15. {{i:Design}} a project folder structure on your computer, document {{i:each}} path, then {{i:create}} a {{i:script}} that validates all folders exist.

## References

- GNU. (2024). _ls {{i:command}} {{i:reference}}_. [https://example.com](https://example.com)
- GNU. (2024). _{{i:Bash}} wildcards and globbing_. [https://example.com](https://example.com)
- GNU. (2024). _Navigation best practices in {{i:Bash}}_. [https://example.com](https://example.com)

## Helpful Resources

- [ls Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html)
- [{{i:Bash}} Wildcards and Globbing](https://www.gnu.org/software/bash/manual/htmlnode/Pattern-Matching.html)
- [Navigation Best Practices](https://linuxcommand.org/lc3lts0020.php)
- [Relative and Absolute Paths in {{i:Bash}}](https://linuxize.com/post/linux-cd-{{i:command}}/)
- [{{i:Screen}} Reader Tips for {{i:Git}} {{i:Bash}}](https://www.nvaccess.org/documentation/)

---

<a id="gb-lesson-2"></a>

# Lesson 2: File and Folder Manipulation

---

Estimated {{i:time}}: 30-45 minutes

## Learning Objectives

- Create, {{i:copy}}, move, and delete {{i:files}} and folders from {{i:Git}} {{i:Bash}}
- Use `touch`, `mkdir`, `cp`, `mv`, `rm`, and `rmdir` safely
- Understand when operations are permanent and how to confirm results

## Materials

- {{i:Git}} {{i:Bash}}
- Small practice folder for exercises

## Step-by-step Tasks

1. Create a practice directory: `mkdir ~/Documents/GitBash_Practice` and `cd` {{i:into}} it.
2. Create two {{i:files}}: `touch file1.txt` and `touch file2.txt`.
3. Copy `file1.txt` to `file1_backup.txt` with `cp` and confirm with `ls -1`.
4. Rename `file2.txt` to `notes.txt` {{i:using}} `mv` and confirm.
5. Delete `file1.txt` with `rm` and verify the backup remains.

## Checkpoints

- After step 3 {{i:you}} should see both the original and the backup {{i:file}}.

## {{i:3DMake}} in Practice: Organizing Your Projects

File management {{i:commands}} are essential for {{i:3DMake}} project organization:

```bash
# Create a new project from scratch
mkdir -p ~/Documents/3d_projects/bottle_cap
cd ~/Documents/3d_projects/bottle_cap
3dm new

# Back up a working project before making big changes
cd ~/Documents/3d_projects
cp -r bottle_cap bottle_cap_backup

# Rename the main model file to something more specific
cd bottle_cap/src
mv main.scad bottle_cap.scad

# List only .scad files to confirm the rename
ls -1 *.scad

# Delete a draft STL you no longer need
rm ~/Documents/3d_projects/bottle_cap/build/draft.stl

# Build the renamed model (using the -m flag to specify the name)
cd ~/Documents/3d_projects/bottle_cap
3dm build -m bottle_cap

# See the fresh output in the build folder
ls -1 build/
```

## Checkpoints

- After step 3 {{i:you}} should see both the original and the backup {{i:file}}.

## Quiz - Lesson GitBash.2

1. How do {{i:you}} {{i:create}} an empty {{i:file}} from {{i:Git}} {{i:Bash}}?
2. What {{i:command}} copies a {{i:file}}?
3. How do {{i:you}} rename a {{i:file}}?
4. What does `rm -r` do?

   > [!WARNING]
   > `rm` permanently deletes {{i:files}} with no undo and no Recycle Bin. There is no recovery from {{i:Git}} {{i:Bash}}. Always {{i:run}} `ls -1` {{i:first}} to confirm exactly what {{i:you}}'re targeting, especially when {{i:using}} wildcards.

5. Why is `rm` potentially dangerous?
6. True or False: `cp` requires the `-r` flag to {{i:copy}} both {{i:files}} and folders.
7. Explain the {{i:difference}} {{i:between}} `rm` and `rmdir`.
8. If {{i:you}} delete a {{i:file}} with `rm`, {{i:can}} {{i:you}} recover it from {{i:Git}} {{i:Bash}}?
9. Write a {{i:command}} that would {{i:copy}} an entire folder and all its contents to a {{i:new}} location.
10. Describe a practical safety check {{i:you}} would perform {{i:before}} running `rm -r` on a folder.
11. What happens if {{i:you}} `cp` a {{i:file}} to a destination where a {{i:file}} with the same {{i:name}} already exists? How would {{i:you}} handle this safely?
12. Compare `mv old_name.txt new_name.txt` vs `mv old_name.txt ~/Documents/new_name.txt`. What is the key {{i:difference}}?
13. {{i:Design}} a {{i:workflow}} to safely delete 50 {{i:files}} matching the pattern `*.bak` from a folder containing 500 {{i:files}}. What {{i:commands}} and verifications would {{i:you}} use?
14. Explain how {{i:you}} could back up all `.scad` {{i:files}} from a project folder {{i:into}} a timestamped backup folder in {{i:one}} {{i:command}}.
15. When organizing a 3D {{i:printing}} project, {{i:you}} need to move completed designs to an archive folder and delete failed prototypes. How would {{i:you}} structure this as a safe, auditable process?

## Extension Problems

1. Create a folder tree and {{i:copy}} it to a {{i:new}} location with `cp -r`.
2. Write a {{i:one}}-line {{i:command}} that creates three {{i:files}} named `a`, `b`, `c` and lists them.
3. Move a {{i:file}} {{i:into}} a {{i:new}} folder and confirm the move.
4. Use wildcards to delete {{i:files}} matching a pattern in a safe {{i:test}} folder.
5. Export a listing of the practice folder to `practice_listing.txt`.
6. Create a backup {{i:shell}} {{i:script}} that copies all `.scad` {{i:files}} from your project folder to a backup folder with timestamp naming.
7. Build a safe deletion {{i:workflow}}: list {{i:files}} matching a pattern, verify count, then delete with confirmation; document the steps.
8. Write a bash {{i:script}} that organizes {{i:files}} by extension {{i:into}} subfolders; {{i:test}} it on a sample folder tree.
9. Create a {{i:file}} operation audit trail: log all {{i:copy}}, move, and delete operations to a {{i:text}} {{i:file}} for review.
10. Develop a project template generator: a bash {{i:script}} that creates a standard folder structure for a {{i:new}} 3D {{i:printing}} project with essential subfolders.
11. Implement a {{i:file}} conflict handler: {{i:write}} a bash {{i:script}} that handles cases where `cp` would overwrite an existing {{i:file}} by renaming the existing {{i:file}} with a timestamp {{i:before}} copying.
12. Create a batch rename operation: use a {{i:script}} to rename all {{i:files}} in a folder from `old_prefix_*` to `new_prefix_*`; {{i:test}} with actual {{i:files}} and verify the results.
13. Build a folder comparison tool: list all {{i:files}} in two folders and identify which {{i:files}} exist in {{i:one}} but not the other; {{i:output}} to a report.
14. Write a destructive operation validator: {{i:before}} executing `rm -r`, {{i:create}} a {{i:script}} that lists exactly what will be deleted, shows {{i:file}} counts by type, and requires explicit user confirmation to proceed.
15. {{i:Design}} a complete project lifecycle {{i:workflow}}: {{i:create}} folders for active projects, completed designs, and archive; include move operations {{i:between}} folders, backup steps, and verification that all {{i:files}} arrive intact.

## References

- GNU. (2024). _touch {{i:command}} {{i:reference}}_. [https://example.com](https://example.com)
- GNU. (2024). _cp and mv {{i:commands}}_. [https://example.com](https://example.com)
- GNU. (2024). _File system operations guide_. [https://example.com](https://example.com)

## Helpful Resources

- [touch Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/touch-invocation.html)
- [cp Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html)
- [mv Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/mv-invocation.html)
- [rm Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html)
- [Safe Deletion Practices](https://linuxcommand.org/lc3lts0050.php)

---

<a id="gb-lesson-3"></a>

# Lesson 3: Input, Output, and Piping

---

**Duration:** 1 class period
**Prerequisite:** {{i:Bash}} Lesson 2 (File and Folder Manipulation)

---

## Learning Objectives

By the end of this lesson, {{i:you}} will be able to:

- Use `echo` to {{i:print}} {{i:text}} to the screen
- Use `cat` to read {{i:file}} contents
- Use `>` to redirect {{i:output}} {{i:into}} a {{i:file}}
- Use `|` (pipe) to send {{i:one}} {{i:command}}'s {{i:output}} to another
- Copy {{i:output}} to the clipboard with `clip`
- Open {{i:files}} with a {{i:text}} editor from the {{i:command}} line

---

## Commands Covered

| Command                | What It Does                                                           |
| ---------------------- | ---------------------------------------------------------------------- |
| `echo "text"`          | Print {{i:text}} to the screen                                         |
| `cat filename`         | Print the contents of a {{i:file}}                                     |
| `> filename`           | Redirect {{i:output}} {{i:into}} a {{i:file}} (overwrites)             |
| `>> filename`          | Append {{i:output}} to a {{i:file}} (adds to end)                      |
| `\|`                   | Pipe - send {{i:output}} from {{i:one}} {{i:command}} to the next      |
| `clip`                 | Copy piped input to the {{i:Windows}} clipboard ({{i:Git}} {{i:Bash}}) |
| `notepad.exe filename` | Open a {{i:file}} in Notepad                                           |

---

## `echo` - Printing Text

`echo` prints {{i:text}} to the screen. It is useful for testing, for writing {{i:text}} {{i:into}} {{i:files}}, and for understanding how piping works.

```bash
echo "Hello, World"
echo "This is a test"
```

---

## `cat` - Reading Files

`cat` prints the contents of a {{i:file}} to the screen.

```bash
# Read a text file
cat ~/Documents/notes.txt

# Read an OpenSCAD file
cat ~/Documents/OpenSCAD_Projects/project0.scad
```

With a long {{i:file}}, use `cat filename | less` to read it page by page (press `Space` to advance, `Q` to quit).

---

## `>` - Redirecting Output to a File

The `>` symbol redirects {{i:output}} from the screen {{i:into}} a {{i:file}} instead.

```bash
# Create a file with a single line
echo "Author: Your Name" > header.txt

# Confirm the file was created and has content
cat header.txt
```

**Warning:** `>` overwrites the {{i:file}} if it already exists. Use `>>` to append instead:

```bash
echo "Date: 2025" >> header.txt
echo "Project: Floor Marker" >> header.txt
cat header.txt
```

---

## `|` - Piping

The pipe symbol `|` sends the {{i:output}} of {{i:one}} {{i:command}} to the input of the next. This lets {{i:you}} chain {{i:commands}} together.

````bash
# List files and send the list to clip (copies to clipboard)
ls -1 | clip
## 3DMake in Practice: Capturing Build Output

Piping and redirection are essential for working with 3DMake's output accessibly:

```bash
# Build and save the full log to a {{i:file}} so {{i:you}} {{i:can}} read it
3dm {{i:build}} > build_log.txt
cat build_log.txt

# Build and slice, keeping only lines with errors or warnings
3dm {{i:build}} slice 2>&1 | grep -i "{{i:error}}\|warning"

# {{i:List}} all {{i:STL}} {{i:files}} produced so far
ls -1 {{i:build}}/*.stl

# Get a list of available {{i:printer}} profiles and save for {{i:reference}}
3dm list-profiles > profiles.txt
cat profiles.txt

# Get a list of {{i:material}} overlays (PLA, PETG, supports, etc.)
3dm list-overlays > overlays.txt
cat overlays.txt

# Get an AI description of your model, then {{i:copy}} to clipboard
3dm info > model_description.txt
cat model_description.txt | clip
````

```bash
# {{i:List}} {{i:files}} and send the list to clip (copies to clipboard)
ls -1 | clip

# Now paste with Ctrl + V anywhere
```

```bash
# Search within a {{i:file}}'s contents {{i:using}} grep
cat project0.scad | grep "{{i:cube}}"
```

---

## `clip` - Copying to Clipboard

`clip` takes whatever is piped to it and puts it on the Windows clipboard.

```bash
# Copy your current directory path to the clipboard
pwd | clip

# Copy a {{i:file}} listing to clipboard
ls -1 | clip

# Copy the contents of a {{i:file}} to clipboard
cat notes.txt | clip
```

After any of these, press `Ctrl + V` in any application to paste.

---

## Opening Files in Notepad

```bash
# Open a {{i:file}} in Notepad
notepad.exe ~/Documents/notes.txt

# Open a .scad {{i:file}}
notepad.exe ~/Documents/OpenSCAD_Projects/project0.scad

# Create a {{i:new}} {{i:file}} and open it
touch new_notes.txt
notepad.exe new_notes.txt
```

---

## Step-by-step Tasks

1. Create `practice.txt` with three lines using `echo` and `>`/`>>`.
2. Read the file with `cat practice.txt`.
3. Pipe the file into `grep` to search for a word.
4. Copy the file contents to clipboard with `cat practice.txt | clip`.
5. Redirect `ls -1` into `list.txt` and open it in Notepad.

## Checkpoints

- After step 3 you should be able to find a keyword using piping.

## Quiz - Lesson GitBash.3

1. What is the difference between `>` and `>>`?
2. What does the pipe `|` do?
3. How do you copy output to the clipboard?
4. How would you page through long output?
5. How do you suppress output (send it to `/dev/null`)?
6. True or False: The pipe operator `|` connects the output of one command to the input of another.
7. Explain why redirecting output to a file is useful for screen reader users.
8. Write a command that would search for the word "sphere" in all `.scad` files in a directory.
9. How would you count the number of lines in a file using bash piping?
10. Describe a practical scenario in 3D printing where you would pipe or redirect command output.
11. What would be the difference in output between `echo "test" > file.txt` (run twice) vs `echo "test" >> file.txt` (run twice)? Show the expected file contents.
12. Design a three-step piping chain: read a file, filter for specific content, and save the results; explain what each pipe does.
13. You have a 500-line `.scad` file and need to find all instances of `sphere()` and count them. Write the command.
14. Explain how `clip` is particularly valuable for screen reader users when working with file paths or long output strings.
15. Describe how you would use pipes and redirection to create a timestamped backup report of all `.stl` files in a 3D printing project folder.

## Extension Problems

1. Use piping to count lines in a file (hint: `cat file.txt | wc -l`).
2. Save a long `ls -1` output and search it with `grep`.
3. Chain multiple pipes to filter and then save results.
4. Practice copying different command outputs to clipboard and pasting.
5. Create a small bash script that generates a report (counts of files by extension).
6. Build a data processing pipeline: read a text file, filter rows, and export results; document each step.
7. Write a script that pipes directory listing to count occurrences of each file extension; create a summary report.
8. Create a log analysis command: read a log file, filter for errors, and save matching lines to a separate error log.
9. Design a piping workflow for 3D printing file management: find `.stl` files, extract their names, and generate a report.
10. Develop a reusable piping function library: create bash functions for common filtering, sorting, and reporting patterns; test each with different inputs.
11. Build a complex filter pipeline: read a `.scad` file, extract lines containing specific geometry commands, count each type, and output a summary to both screen and file.
12. Create an interactive filtering tool: build a bash script that accepts a search term, pipes through multiple filters, and displays paginated results.
13. Develop a performance analysis tool: use piping to combine file listing, metadata extraction, and statistical reporting; export results to a dated report file.
14. Implement a comprehensive error-handling pipeline: read output, catch errors, log them separately, and generate a summary of successes vs failures.
15. Design and execute a real-world project backup workflow: use piping to verify file existence, count files by type, generate a backup manifest, and create audit logs — all in one integrated command pipeline.

## References

- GNU. (2024). _Redirections in Bash_. [https://example.com](https://example.com)
- GNU. (2024). _grep command reference_. [https://example.com](https://example.com)
- GNU. (2024). _Bash pipeline concepts_. [https://example.com](https://example.com)

## Helpful Resources

- [Bash Redirections](https://www.gnu.org/software/bash/manual/htmlnode/Redirections.html)
- [Piping and grep](https://www.gnu.org/software/grep/manual/grep.html)
- [cat Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/cat-invocation.html)
- [wc for Counting](https://www.gnu.org/software/coreutils/manual/html_node/wc-invocation.html)
- [Bash Pipeline Concepts](https://www.gnu.org/software/bash/manual/htmlnode/Pipelines.html)

---

<a id="gb-lesson-4"></a>

# Lesson 4: Environment Variables, PATH, and Aliases

---

Estimated time: 30-45 minutes

## Learning Objectives

- Read environment variables with `$VARNAME`
- Inspect and verify programs in the `PATH`
- Create temporary aliases and understand making them persistent via `.bashrc`

## Materials

- Git Bash (with rights to edit `.bashrc`)

## Step-by-step Tasks

1. Show your username and home path with `echo $USER` and `echo $HOME`.
2. Inspect `echo $PATH` and identify whether `openscad` or `code` would be found.
3. Run `which openscad` and note the result.
4. Create a temporary alias: `alias preview='openscad'` and test `preview myfile.scad`.
5. Open your profile (`notepad.exe ~/.bashrc`) and add the alias line to make it persistent.

## Checkpoints

- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson GitBash.4

## 3DMake in Practice: Aliases in .bashrc

Bash aliases make your 3DMake workflow much faster:

```bash
# Quick alias to jump to your 3D projects folder
alias 3dp='cd ~/Documents/3d_projects'

# Full {{i:build}}-slice-{{i:print}} pipeline in {{i:one}} word
alias 3dprint='3dm {{i:build}} slice {{i:print}}'

# Build and then get an AI description of the model
alias 3dinfo='3dm {{i:build}} && 3dm info'

# Make sure 3dm is in your {{i:PATH}} (add to .bashrc if needed)
echo 'export {{i:PATH}}="${{i:PATH}}:$HOME/Downloads/3dmake"' >> ~/.bashrc

# Persist all three aliases in .bashrc
echo "alias 3dp='cd ~/Documents/3d_projects'" >> ~/.bashrc
echo "alias 3dprint='3dm {{i:build}} slice {{i:print}}'" >> ~/.bashrc
echo "alias 3dinfo='3dm {{i:build}} && 3dm info'" >> ~/.bashrc

# Reload .bashrc immediately without restarting
source ~/.bashrc

# Now use them:
3dp         # jump to your 3D projects folder
3dprint     # {{i:run}} the full pipeline
3dinfo      # {{i:build}} and describe the model
```

## Checkpoints

- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson GitBash.4

1. How do you print an environment variable?
2. What is the purpose of `PATH`?
3. How do you check whether `openscad` is available?
4. How do you create a temporary alias?
5. Where would you make an alias permanent?
6. True or False: Environment variables in bash are case-sensitive.
7. Explain why having a program in your PATH is useful compared to always using its full file path.
8. Write a command that would create an alias called `slicer` for the OpenSCAD executable.
9. What file would you edit to make an alias persist across Git Bash sessions?
10. Describe a practical benefit of using the `$TMPDIR` or `/tmp` directory for temporary files in a 3D printing workflow.
11. You have a custom script at `~/scripts/backup_models.sh` that you want to run from anywhere as `backup-now`. What steps would you take to make this work?
12. Explain the difference between setting an environment variable in the current session with `export` vs. adding it to `.bashrc` for permanence.
13. Design a `.bashrc` strategy for managing multiple 3D printing projects, each with different tool paths and directories; show how to structure environment variables for each.
14. If a program is not found by `which`, what are the possible reasons, and how would you troubleshoot?
15. Describe how you would verify that your `.bashrc` is loading correctly and how to debug issues if aliases or environment variables don't appear after restarting Git Bash.

## Extension Problems

1. Add a folder to PATH for a test program (describe steps; do not change system PATH without admin).
2. Create a short `.bashrc` snippet that sets two aliases and test re-opening Git Bash.
3. Use `which` to list the path for several common programs.
4. Explore `$TMPDIR` or `/tmp` and create a file there.
5. Save a copy of your current PATH to a text file and examine it in your editor.
6. Create a `.bashrc` script that loads custom aliases and environment variables for your 3D printing workflow; test it in a new session.
7. Build a "project profile" that sets environment variables for CAD, slicing, and print directories; switch between profiles for different projects.
8. Write a script that audits your current environment variables and creates a summary report of what's set and why.
9. Design a custom alias system for common 3D printing commands; document the aliases and their purposes.
10. Create a profile migration guide: document how to export and import your `.bashrc` across machines for consistent workflows.
11. Implement a safe PATH modification script: create a utility that allows you to add/remove directories from PATH for the current session only; show how to make it permanent in `.bashrc`.
12. Build a comprehensive `.bashrc` framework with modular sourcing: create separate `.sh` files for aliases, environment variables, and functions; have your main `.bashrc` source all of them.
13. Develop an environment validation tool: write a bash script that checks whether all required programs (OpenSCAD, slicers, etc.) are accessible via PATH; report findings and suggest fixes.
14. Create a project-switching alias system: design a function that changes all environment variables and aliases based on the current project; test switching between multiple projects.
15. Build a `.bashrc` troubleshooting guide: create a script that exports your current environment state (variables, aliases, PATH) to a timestamped file, allowing you to compare states before and after changes.

## References

- GNU. (2024). _Environment variables in Bash_. [https://example.com](https://example.com)
- GNU. (2024). _alias command reference_. [https://example.com](https://example.com)
- GNU. (2024). _Creating and using Bash profiles_. [https://example.com](https://example.com)

## Helpful Resources

- [Environment Variables in Bash](https://www.gnu.org/software/bash/manual/htmlnode/Environment.html)
- [Understanding the PATH Variable](https://linuxize.com/post/how-to-add-directory-to-path-in-linux/)
- [Bash alias Reference](https://www.gnu.org/software/bash/manual/htmlnode/Aliases.html)
- [Creating a Bash Profile (.bashrc)](https://www.gnu.org/software/bash/manual/htmlnode/Bash-Startup-Files.html)
- [which Command for Locating Programs](https://linux.die.net/man/1/which)

---

<a id="gb-lesson-5"></a>

# Lesson 5: Filling in the Gaps — Shell Profiles, History, and Useful Tricks

---

Estimated time: 30-45 minutes

## Learning Objectives

- Use history and abort commands (`history`, `Ctrl+R`, `Ctrl+C`)
- Inspect and edit your `.bashrc` profile for persistent settings
- Run programs by full path using `./` or absolute paths
- Handle common screen reader edge cases when using the terminal

## Materials

- Git Bash and an editor (Notepad/VS Code)

## Step-by-step Tasks

1. Run several simple commands (e.g., `pwd`, `ls -1`, `echo hi`) then run `history` to view them.
2. Use `!<n>` to re-run a previous command by its history number (replace `<n>` with a history number).
3. Practice aborting a long-running command with `Ctrl + C` (for example, `ping google.com`).
4. Open your profile: `notepad.exe ~/.bashrc`; if it doesn't exist, create it: `touch ~/.bashrc`.
5. Add a persistent alias line to your profile (example: `alias preview='openscad'`), save, and run `source ~/.bashrc` or reopen Git Bash to verify.

## Checkpoints

- After step 2 you can re-run a recent command by history number.
- After step 5 your alias should persist across sessions.

## Quiz - Lesson GitBash.5

1. How do you view the command history in Git Bash?
2. Which key combination aborts a running command?
3. What does `echo $BASH_VERSION` show?
4. How does `./` help run scripts and executables in the current directory?
5. What is one strategy if terminal output stops being announced by your screen reader?
6. True or False: Using `Ctrl+C` permanently deletes any files created by the command you abort.
7. Explain the difference between `history` and `Ctrl+R` (reverse history search) in Git Bash.
8. If you add an alias to `.bashrc` but it doesn't take effect after opening a new Git Bash window, what should you verify?
9. Write a command that would run a script at the path `~/scripts/openscad_runner.sh` directly.
10. Describe a practical workflow scenario where having keyboard shortcuts (aliases) in your `.bashrc` would save time.
11. Explain how to re-run the 5th command from your history using `!5`, and what would happen if that command had file operations (creates/deletes).
12. Design a `.bashrc` initialization strategy that separates utilities for different projects; explain how you would switch between them.
13. Walk through a troubleshooting workflow: your screen reader stops announcing output after running a long command. What steps would you take to diagnose and resolve the issue?
14. Create a safety checkpoint system: before any destructive operation (mass delete, overwrite), how would you use `.bashrc` functions and history to verify the command is correct?
15. Develop a comprehensive capstone scenario: integrate everything from Bash Lesson 0 through Bash Lesson 5 (navigation, file operations, piping, environment setup, history) to design an automated 3D printing project workflow with error handling and logging.

## Extension Problems

1. Add an alias and an environment variable change to your `.bashrc` and document the behavior after reopening Git Bash.
2. Create a short bash script that automates creating a project folder and an initial `.scad` file.
3. Experiment with running OpenSCAD by full path using `./` and by placing it in PATH; compare results.
4. Practice redirecting `man ls` output to a file and reading it in Notepad for screen reader clarity.
5. Document three screen reader troubleshooting steps you used and when they helped.
6. Build a comprehensive `.bashrc` that includes aliases, environment variables, and helper functions for your 3D printing workflow.
7. Create a bash script that troubleshoots common Git Bash issues (module loading, permission errors, command not found); test at least three scenarios.
8. Write a bash function that coordinates multiple tasks: creates a project folder, starts OpenSCAD, and opens a notes file.
9. Design a screen-reader accessibility guide for Git Bash: document commands, outputs, and accessible navigation patterns.
10. Develop an advanced Git Bash workflow: implement error handling, logging, and confirmation prompts for risky operations.
11. Implement an "undo" system using history: create a function that logs destructive commands (`rm`, `mv`, `cp`) and allows you to review the last operation.
12. Build a `.bashrc` debugger: create a script that compares two Git Bash sessions' environment states (variables, aliases, functions) to identify what loaded/failed to load.
13. Develop a multi-project profile manager: design a system where you can switch entire environments (paths, aliases, variables) for different 3D printing projects by running a single command.
14. Create a comprehensive accessibility analyzer: write a bash script that tests whether key Git Bash commands produce screen-reader-friendly output; document workarounds for commands that don't.
15. Design a complete capstone project: build an integrated automation suite that manages a 3D printing workflow (project setup, file organization, CAD/slicing tool automation, output logging, error recovery, and audit trails) with full error handling and documentation.

## References

- GNU. (2024). _Bash history and recall functionality_. [https://example.com](https://example.com)
- GNU. (2024). _Understanding and creating Bash profiles_. [https://example.com](https://example.com)
- GNU. (2024). _Running scripts and executables in Bash_. [https://example.com](https://example.com)

## Helpful Resources

- [Bash History and Recall](https://www.gnu.org/software/bash/manual/htmlnode/Bash-History-Facilities.html)
- [Understanding .bashrc](https://www.gnu.org/software/bash/manual/htmlnode/Bash-Startup-Files.html)
- [history Command Reference](https://www.gnu.org/software/bash/manual/htmlnode/Bash-History-Builtins.html)
- [Running Scripts with ./](https://www.gnu.org/software/bash/manual/htmlnode/Executing-Scripts.html)
- [Screen Reader Tips and Tricks](https://www.nvaccess.org/documentation/)

---

<a id="gb-lesson-6"></a>

# Lesson 6: Advanced Techniques — Shell Scripts, Functions, and Professional Workflows

---

**Duration:** 4-4.5 hours (for screen reader users)
**Prerequisites:** Complete Bash Lesson 0 through Bash Lesson 5
**Skill Level:** Advanced intermediate

## 3DMake in Practice: Automating Your Print Workflow

Use a shell script to fully automate a 3DMake workflow across multiple projects:

```bash
#!/bin/bash
# batch_print.sh - {{i:build}} and {{i:print}} every {{i:3DMake}} project in a folder

PROJECTS_DIR="$HOME/Documents/3d_projects"

for project in "$PROJECTS_DIR"/*/; do
    {{i:name}}=$(basename "$project")
    echo "Processing: ${{i:name}}"
    cd "$project"

    if 3dm {{i:build}} slice > build_log.txt 2>&1; then
        echo "  OK - sending to {{i:printer}}"
        3dm {{i:print}}
    else
        echo "  FAILED - check build_log.txt"
        cat build_log.txt
    fi
done

echo "Batch complete."
```

> [!TIP]
> Save as `batch_print.sh`, run `chmod +x batch_print.sh` once to make it executable, then run with `./batch_print.sh`. If you forget `chmod +x` you'll get "Permission denied" — just run the `chmod` command and try again.

Save as `batch_print.sh`, make executable with `chmod +x batch_print.sh`, then run with `./batch_print.sh`. This script uses loops, conditionals, and redirection — all from this lesson.

This lesson extends Git Bash skills to professional-level workflows. You'll learn to automate complex tasks, write reusable shell scripts, and integrate tools for 3D printing workflows.

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Create and run shell scripts (.sh files)
- Write functions that accept parameters
- Use loops to repeat tasks automatically
- Automate batch processing of 3D models
- Debug scripts when something goes wrong
- Create professional workflows combining multiple tools

---

## Shell Script Basics

### What's a Shell Script?

A shell script (`.sh`) contains multiple bash commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once.

**Why use shell scripts?**

- Repeatability: Run the same task 100 times identically
- Documentation: Commands are written down for reference
- Complexity: Combine many commands logically
- Automation: Schedule scripts to run automatically

### Creating Your First Shell Script

**Step 1: Open a text editor**

```bash
notepad.exe my-{{i:first}}-{{i:script}}.sh
```

**Step 2: Type this script**

```bash
#!/bin/bash
# This is a comment - screen readers will read it
echo "Script is running!"
pwd
ls -1
echo "Script is done!"
```

**Step 3: Save the file**

- In Notepad: Ctrl+S
- Make sure filename ends in `.sh`
- Save in an easy-to-find location (like Documents)

> [!NOTE]
> Before you can run a `.sh` script, you must make it executable with `chmod +x scriptname.sh`. This is a one-time step per script. Without it, running `./script.sh` will produce a "Permission denied" error even though the file exists.

**Step 4: Make it executable and run the script**

```bash
chmod +x my-{{i:first}}-{{i:script}}.sh
./my-{{i:first}}-{{i:script}}.sh
```

**What happens:**
Bash runs each command in sequence and shows output.

> [!IMPORTANT]
> Always start shell scripts with `#!/bin/bash` (the "shebang" line). Without it, the system may use a different shell to run your script, which can cause unexpected errors — especially on systems where `/bin/sh` is not bash.

### Important: The Shebang Line

The `#!/bin/bash` at the top of your script (called a "shebang") tells the system which shell to use to run the script.

```bash
#!/bin/bash
# Now bash runs every {{i:command}} below
echo "Hello!"
```

---

## Variables and Parameters

### Using Variables

Variables store values you want to use later.

**Example script:**

```bash
#!/bin/bash
mypath="$HOME/Documents"
cd "$mypath"
echo "I am now in:"
pwd
ls -1
```

**Breaking it down:**

- `mypath="..."` assigns the variable (no spaces around `=`)

  > [!TIP]
  > Always quote variables that contain file paths: use `"$mypath"` not `$mypath`. Without quotes, spaces in folder names will break your script. This is one of the most common bash scripting mistakes.

- `"$mypath"` uses the variable (quote it to handle spaces in paths)
- Variables in bash are always referenced with `$`

### Functions with Parameters

A function is reusable code that you can run with different inputs.

**Example: A function that lists files in a folder**

```bash
#!/bin/bash
list_folder() {
    local path="$1"
    echo "Contents of: $path"
    cd "$path"
    ls -1
}

# Use the function:
list_folder "$HOME/Documents"
list_folder "$HOME/Downloads"
```

**What's happening:**

- `list_folder()` defines the function
- `local path="$1"` assigns the first argument to a local variable
- `$1` is the first argument passed to the function
- Call the function with `list_folder "path/to/folder"`

**Screen reader tip:** When you call a function, bash will announce the results just like any command.

---

## Loops - Repeating Tasks

### Loop Over Files

Imagine you have 10 SCAD files and want to print their contents. You could do it 10 times manually, or use a loop.

**Example: Print every .scad file in a folder**

```bash
#!/bin/bash
for {{i:file}} in *.scad; do
    echo "=== File: ${{i:file}} ==="
    cat "${{i:file}}"
    echo ""
done
```

**What's happening:**

- `for file in *.scad; do` iterates over each `.scad` file
- `$file` holds the current filename
- `done` ends the loop
- Inside the loop, do something with each `$file`

### Loop with a Counter

**Example: Do something 5 times**

```bash
#!/bin/bash
for i in $(seq 1 5); do
    echo "This is iteration number $i"
    # Do something here
done
```

**What's happening:**

- `for i in $(seq 1 5)` loops with `i` from 1 to 5
- `$i` is the counter variable

---

## Real-World Example - Batch Processing SCAD Files

### Scenario

You have 10 OpenSCAD (.scad) files in a folder. You want to:

1. List them all
2. Check how many there are
3. For each one, verify it exists

### The Script

```bash
#!/bin/bash
scad_folder="$HOME/Documents/3D_Projects"
count=0

echo "Processing SCAD {{i:files}} in: $scad_folder"
echo ""

for {{i:file}} in "$scad_folder"/*.scad; do
    if [ -f "${{i:file}}" ]; then
        echo "  Found: $(basename "${{i:file}}")"
        count=$((count + 1))
    else
        echo "  Missing: $(basename "${{i:file}}")"
    fi
done

echo ""
echo "Total {{i:files}} found: $count"
echo "Batch processing complete!"
```

**Breaking it down:**

- `scad_folder="..."` = where to look
- `for file in "$scad_folder"/*.scad` = find all .scad files
- `if [ -f "$file" ]` = check if file exists and is a regular file
- `basename "$file"` = just the filename (not the full path)
- `count=$((count + 1))` = increment the counter

### Running the Script

1. Save as `batch-process.sh`
2. Edit `scad_folder` to match your real folder
3. Make it executable and run it:
   ```bash
   chmod +x batch-process.sh
   ./batch-process.sh
   ```

**Screen reader output:**

```
Processing SCAD {{i:files}} in: /c/Users/YourName/Documents/3D_Projects

  Found: model1.scad
  Found: model2.scad
  Found: model3.scad
[... more {{i:files}} ...]

Total {{i:files}} found: 10
Batch processing complete!
```

---

## Error Handling

### Try-Style Checks with Exit Codes

What if something goes wrong? Use exit code checks:

**Example:**

```bash
#!/bin/bash
{{i:file}}="$HOME/nonexistent/path/{{i:file}}.txt"

if cat "${{i:file}}" 2>/dev/null; then
    echo "File read successfully"
else
    echo "Error: Could not read {{i:file}}"
    echo "File path was: ${{i:file}}"
fi
```

**What's happening:**

- `2>/dev/null` suppresses error messages from `cat`
- `if cat ...; then` checks whether the command succeeded
- `else` handles the failure gracefully

**Screen reader advantage:** Errors are announced clearly instead of crashing silently.

### Validating Input

**Example: Make sure a folder exists before processing**

```bash
#!/bin/bash
process_folder() {
    local folder_path="$1"

    if [ ! -d "$folder_path" ]; then
        echo "Error: Folder does not exist: $folder_path"
        return 1
    fi

    echo "Processing folder: $folder_path"
    ls -1 "$folder_path"
}

process_folder "$HOME/Documents"
```

**What's happening:**

- `[ ! -d "$folder_path" ]` checks if the path is NOT a directory
- `return 1` exits the function early with a non-zero (error) status

---

## Debugging Shell Scripts

### Common Errors and Solutions

#### Error 1: "Command not found"

**Cause:** Typo in command name

**Fix:** Check spelling

```bash
# Wrong:
ech "hello"

# Correct:
echo "hello"
```

#### Error 2: "Variable is empty"

**Cause:** Variable was never assigned or has a typo

**Fix:** Make sure variable is set before using it

```bash
myvar="hello"  # Set {{i:first}}
echo "$myvar"  # Then use
```

#### Error 3: "No such file or directory"

**Cause:** Wrong folder path

**Fix:** Verify path exists

```bash
# Check if path exists:
if [ -d "$HOME/Documents" ]; then
    echo "Path exists"
fi
```

#### Error 4: "Permission denied"

**Cause:** Script not executable, or no write permission

**Fix:** Make the script executable, or check file permissions

```bash
chmod +x my-{{i:script}}.sh
```

### Debugging Technique: Trace Output with `set -x`

Add `set -x` at the top of your script to print each command before it runs:

```bash
#!/bin/bash
set -x  # Enable trace mode
path_var="$HOME/Documents"
echo "Starting {{i:script}}. Path is: $path_var"

for {{i:file}} in "$path_var"/*; do
    echo "Processing: ${{i:file}}"
    # Do something with ${{i:file}}
    echo "Done with: ${{i:file}}"
done

echo "Script complete"
```

Your screen reader will announce each step, so you know where errors happen.

---

## Creating Professional Workflows

### Example 1: Automated Project Setup

**Scenario:** You start a new 3D printing project regularly. Instead of creating folders manually:

```bash
#!/bin/bash
read -p "Enter project {{i:name}}: " project_name
base_folder="$HOME/Documents/3D_Projects"
project_folder="$base_folder/$project_name"

# Create folder structure
mkdir -p "$project_folder"
mkdir -p "$project_folder/designs"
mkdir -p "$project_folder/{{i:output}}"
mkdir -p "$project_folder/notes"

# Create a README
cat > "$project_folder/README.txt" << EOF
# $project_name

Created: $(date)

## Designs
All .scad {{i:files}} go here.

## Output
{{i:STL}} and other exports go here.

## Notes
Project notes and observations.
EOF

echo "Project setup complete: $project_folder"
```

**What it does:**

- Prompts for a project name
- Creates folder structure for a new project
- Sets up subfolders for designs, output, notes
- Creates a README file automatically

### Example 2: Batch File Verification

**Scenario:** Before processing, verify all required files exist:

```bash
#!/bin/bash
verify_project() {
    local project_folder="$1"
    local required_items=("README.txt" "designs" "{{i:output}}" "notes")
    local all_good=true

    for item in "${required_items[@]}"; do
        local path="$project_folder/$item"
        if [ -e "$path" ]; then
            echo "  Found: $item"
        else
            echo "  Missing: $item"
            all_good=false
        fi
    done

    if $all_good; then
        echo "All checks passed!"
        return 0
    else
        echo "Some {{i:files}} are missing!"
        return 1
    fi
}

# Use it:
project="$HOME/Documents/3D_Projects/MyKeychain"
if verify_project "$project"; then
    echo "Safe to proceed with processing"
fi
```

---

## Screen Reader Tips for Shell Scripts

### Making Script Output Readable

**Problem:** Script runs but output scrolls too fast or is hard to follow

**Solution 1: Save to file**

```bash
./my-{{i:script}}.sh > {{i:output}}.txt
notepad.exe {{i:output}}.txt
```

**Solution 2: Use echo with clear sections**

```bash
echo "========== STARTING =========="
echo ""
# ... {{i:script}} ...
echo ""
echo "========== COMPLETE =========="
```

**Solution 3: Pause between major sections**

```bash
echo "Pausing... Press Enter to continue"
read
```

Your screen reader will announce the pause, give you time to read output.

### Announcing Progress

**For long-running scripts:**

```bash
#!/bin/bash
count=0
total=$(ls *.scad | wc -l)

for {{i:file}} in *.scad; do
    count=$((count + 1))
    echo "Processing $count of $total: ${{i:file}}"
    # Do something with ${{i:file}}
done

echo "All $count {{i:files}} processed!"
```

---

## Practice Exercises

### Exercise 1: Your First Shell Script

**Goal:** Create and run a simple shell script

**Steps:**

1. Create file: `notepad.exe hello.sh`
2. Type:
   ```bash
   #!/bin/bash
   echo "Hello from my {{i:first}} {{i:Git}} {{i:Bash}} {{i:shell}} {{i:script}}!"
   pwd
   ls -1
   ```
3. Save, make executable, and run:
   ```bash
   chmod +x hello.sh
   ./hello.sh
   ```

**Checkpoint:** You should see output for each command.

### Exercise 2: Script with a Variable

**Goal:** Use a variable to make the script flexible

**Steps:**

1. Create file: `notepad.exe smart-listing.sh`
2. Type:
   ```bash
   #!/bin/bash
   target_folder="$HOME/Documents"
   echo "Listing contents of: $target_folder"
   ls -1 "$target_folder"
   ```
3. Edit `target_folder` to a real folder on your computer
4. Run:
   ```bash
   chmod +x smart-listing.sh
   ./smart-listing.sh
   ```

**Checkpoint:** You should see listing of that specific folder.

### Exercise 3: Function

**Goal:** Create a reusable function

**Steps:**

1. Create file: `notepad.exe navigate.sh`
2. Type:

   ```bash
   #!/bin/bash
   go_to() {
       local path="$1"
       if [ -d "$path" ]; then
           cd "$path"
           echo "Now in: $(pwd)"
           echo "Contents:"
           ls -1
       else
           echo "Path does not exist: $path"
       fi
   }

   # Test the function:
   go_to "$HOME/Documents"
   go_to "$HOME/Downloads"
   ```

3. Run:
   ```bash
   chmod +x navigate.sh
   ./navigate.sh
   ```

**Checkpoint:** Both function calls should work, showing contents of each folder.

### Exercise 4: Loop

**Goal:** Use a loop to repeat an action

**Steps:**

1. Create file: `notepad.exe repeat.sh`
2. Type:

   ```bash
   #!/bin/bash
   echo "Demonstrating a loop:"

   for i in $(seq 1 5); do
       echo "Iteration $i: Hello!"
   done

   echo "Loop complete!"
   ```

3. Run:
   ```bash
   chmod +x repeat.sh
   ./repeat.sh
   ```

**Checkpoint:** Should print "Iteration 1" through "Iteration 5".

### Exercise 5: Real-World Script

**Goal:** Create a useful script for a real task

**Steps:**

1. Create a folder: `mkdir ~/Documents/TestFiles`
2. Create some test files:
   ```bash
   echo "{{i:test}}" > ~/Documents/TestFiles/file1.txt
   echo "{{i:test}}" > ~/Documents/TestFiles/file2.txt
   echo "{{i:test}}" > ~/Documents/TestFiles/file3.txt
   ```
3. Create script: `notepad.exe report.sh`
4. Type:

   ```bash
   #!/bin/bash
   folder="$HOME/Documents/TestFiles"
   count=0

   echo "=== FILE REPORT ==="
   echo "Folder: $folder"
   echo ""
   echo "Files:"
   for {{i:file}} in "$folder"/*; do
       echo "  - $(basename "${{i:file}}")"
       count=$((count + 1))
   done
   echo ""
   echo "Total: $count {{i:files}}"
   echo "=== END REPORT ==="
   ```

5. Run:
   ```bash
   chmod +x report.sh
   ./report.sh
   ```

**Checkpoint:** Should show report of all files in the test folder.

---

## Quiz - Lesson GitBash.6

1. What is a shell script?
2. What file extension do bash shell scripts use?
3. What is a variable in bash and how do you create one?
4. What is a function and why would you use one?
5. How do you run a shell script?
6. What is a `for` loop and what does `for {{i:file}} in *.scad; do` do?
7. What does `[ -f "${{i:file}}" ]` check?
8. How do you handle errors in a bash script?
9. When would you use `if [ ! -d "$path" ]; then`?
10. What technique makes shell script output readable for screen readers?

---

## Extension Problems

1. **Auto-Backup Script:** Create a bash script that copies all files from one folder to another, announcing progress
2. **File Counter:** Write a function that counts files by extension (.txt, .scad, .stl, etc.)
3. **Folder Cleaner:** Script that deletes files older than 30 days (with user confirmation)
4. **Project Template:** Function that creates a complete project folder structure with all needed files
5. **Batch Rename:** Script that renames all files in a folder according to a pattern
6. **Log Generator:** Create a script that records what it does to a log file for later review
7. **Scheduled Task:** Set up a script to run automatically using cron or Task Scheduler
8. **File Verifier:** Check that all SCAD files in a folder have corresponding STL exports
9. **Report Generator:** Create a summary report of all projects in a folder
10. **Error Tracker:** Script that lists all commands that had errors and logs them with timestamps

---

## Important Notes

- **Always test scripts on small sets of files first** before running them on important data
- **Save your work regularly** — use version naming if possible
- **Test error handling** — make sure errors don't crash silently
- **Document your scripts** — use `#` comments so you remember what each part does
- **Backup before batch operations** — if something goes wrong, you have the original

---

## References

- **GNU Bash Scripting Guide:** [https://example.com](https://example.com)
- **Function Documentation:** [https://example.com](https://example.com)
- **Error Handling:** [https://example.com](https://example.com)
- **Loops:** [https://example.com](https://example.com)

---

<a id="gb-unit-exam"></a>

# Unit Exam — Comprehensive Assessment

---

Estimated time: 60-90 minutes

## Key Learning Outcomes Assessed

By completing this unit test, you will demonstrate:

1. Understanding of file system navigation and path concepts
2. Proficiency with file and folder manipulation commands
3. Ability to redirect and pipe command output
4. Knowledge of environment variables and aliases
5. Screen-reader accessibility best practices in terminal environments
6. Problem-solving and command chaining skills

## Target Audience

Users who have completed Bash Lesson 0 through Bash Lesson 6 and need to demonstrate mastery of Git Bash fundamentals.

## Instructions

Complete all sections below. For multiple choice, select the best answer. For short answers, write one to two sentences. For hands-on tasks, capture evidence (screenshots or output files) and submit alongside your answers.

---

## Part A: Multiple Choice Questions (20 questions)

Select the best answer for each question. Each question is worth 1 point.

1. What is the primary purpose of the `PATH` environment variable?
   - A) Store your home directory location
   - B) Tell the shell where to find executable programs
   - C) Configure the visual appearance of the terminal
   - D) Store the current working directory name

2. Which command prints your current working directory in Git Bash?
   - A) `ls -1`
   - B) `cd`
   - C) `pwd`
   - D) `whoami`

3. What does the `~` symbol represent in Git Bash paths?
   - A) The root directory
   - B) The current directory
   - C) The parent directory
   - D) The home directory

4. How do you list only file names (not full details) in a way that is screen-reader friendly?
   - A) `ls`
   - B) `ls -1`
   - C) `ls -l`
   - D) `cat -1`

5. Which command creates a new empty file in Git Bash?
   - A) `mkdir filename`
   - B) `touch filename`
   - C) `new filename`
   - D) `echo filename`

6. What is the difference between `>` and `>>`?
   - A) `>` redirects to file, `>>` displays on screen
   - B) `>` overwrites a file, `>>` appends to a file
   - C) They do the same thing
   - D) `>` is for text, `>>` is for binary

7. What does the pipe operator `|` do?
   - A) Creates a folder
   - B) Sends the output of one command to the input of another
   - C) Deletes files matching a pattern
   - D) Lists all processes

8. Which command copies a file in Git Bash?
   - A) `mv`
   - B) `rm`
   - C) `cp`
   - D) `cd`

9. How do you rename a file from `oldname.txt` to `newname.txt` in Git Bash?
   - A) `cp oldname.txt newname.txt`
   - B) `mv oldname.txt newname.txt`
   - C) `rename oldname.txt newname.txt`
   - D) `rn oldname.txt newname.txt`

10. What is the purpose of `grep` in Git Bash piping?
    - A) Find files in a directory
    - B) Search for text patterns within output or files
    - C) Select a string to copy to clipboard
    - D) Select which shell to use

11. Which key allows you to autocomplete a path in Git Bash?
    - A) `Ctrl + A`
    - B) `Ctrl + E`
    - C) `Tab`
    - D) `Space`

12. How do you copy text to the Windows clipboard from Git Bash?
    - A) `cat filename > clipboard`
    - B) `cat filename | clip`
    - C) `copy filename`
    - D) `cat filename | paste`

> [!TIP]
> Use `which programname` to check whether a program is in your PATH and find its full path. If `which openscad` returns nothing, OpenSCAD is not in your PATH and you'll need to add it or call it by its full path.

13. What does `which openscad` do?
    - A) Opens the OpenSCAD application
    - B) Gets help about the openscad command
    - C) Locates the full path of the openscad executable
    - D) Lists all available commands

14. Which wildcard matches any single character in Git Bash?
    - A) `*`
    - B) `?`
    - C) `%`
    - D) `#`

15. What is the purpose of `./` before a script name?
    - A) Run a script in the current directory
    - B) Execute all commands in parallel
    - C) Combine multiple commands
    - D) Create an alias

16. How do you create a temporary alias in Git Bash?
    - A) `set-alias preview='openscad'`
    - B) `alias preview='openscad'`
    - C) `new-alias preview openscad`
    - D) `preview = openscad`

> [!IMPORTANT]
> Aliases saved only in the terminal session are lost when you close Git Bash. To make an alias permanent, add it to `~/.bashrc`. After editing `.bashrc`, run `source ~/.bashrc` to apply changes without restarting.

17. Where is a Git Bash alias typically stored to persist across sessions?
    - A) `C:\Program Files\{{i:Git}}\profile.sh`
    - B) In the `~/.bashrc` file
    - C) `~/bash_profile`
    - D) Aliases cannot be made permanent

> [!IMPORTANT]
> **Ctrl+C** is the universal "abort" key — it stops any running command immediately and returns you to the prompt. This works in Git Bash, CMD, and PowerShell. Use it whenever a command hangs, loops unexpectedly, or produces unwanted output.

18. How do you abort a long-running command in Git Bash?
    - A) Press `Escape`
    - B) Press `Ctrl + X`
    - C) Press `Ctrl + C`
    - D) Press `Alt + F4`

19. What command shows the history of previously run commands in Git Bash?
    - A) `history`
    - B) `get-history`
    - C) `show-history`
    - D) `bash-history`

> [!TIP]
> After editing `~/.bashrc`, run `source ~/.bashrc` to apply your changes immediately without restarting Git Bash. Without this step, new aliases and variables won't take effect until the next time you open a terminal.

20. How do you reload your `.bashrc` without restarting Git Bash?
    - A) Use `reload ~/.bashrc` in the terminal
    - B) Use `source ~/.bashrc`
    - C) Use the Windows Control Panel
    - D) `.bashrc` reloads automatically

---

## Part B: Short Answer Questions (10 questions)

Answer each question in one to two sentences. Each question is worth 2 points.

1. Explain the difference between absolute and relative paths. Give one example of each.

2. Why is `ls -1` preferred over `ls` for screen reader users? Describe what flag combination you would use to list only directories.

3. What is the purpose of redirecting output to a file, and give an example of when you would use `>` instead of `>>`?

4. Describe what would happen if you ran `rm -r ~/Documents/my_folder` and why this command should be used carefully.

5. How would you search for all files with a `.scad` extension in your current directory? Write the command.

6. Explain what happens when you pipe the output of `ls -1` into `clip`. What would you do next?

7. What is an environment variable, and give one example of how you might use it in Git Bash.

8. If a program is not in your `PATH`, what two methods could you use to run it from Git Bash?

9. Describe how you would open a file in Notepad and also add a line to it from Git Bash.

10. What is one strategy you would use if your screen reader stops announcing terminal output while using Git Bash?

---

## Part C: Hands-On Tasks (10 tasks)

Complete each task and capture evidence (screenshots, output files, or command transcripts). Each task is worth 3 points.

### Tasks 1-5: File System and Navigation

1. Create a folder structure `~/Documents/GitBash_Assessment/Projects` using a single command. Capture the `ls -1` output showing the creation.

2. Create five files named `project_1.scad`, `project_2.scad`, `project_3.txt`, `notes_1.txt`, and `notes_2.txt` inside the `Projects` folder. Use wildcards to list only `.scad` files, then capture the output.

3. Copy the entire `Projects` folder to `Projects_Backup` using `cp -r`. Capture the `ls -1` output showing both folders exist.

4. Move (rename) `project_1.scad` to `project_1_final.scad`. Capture the `ls -1` output showing the renamed file.

5. Delete `notes_1.txt` and `notes_2.txt` using a single `rm` command with wildcards. Capture the final `ls -1` output.

### Tasks 6-10: Advanced Operations and Scripting

6. Create a file called `my_data.txt` with at least four lines using `echo` and `>>`. Then read it with `cat my_data.txt` and capture the output.

7. Use `grep` to search for a keyword (e.g., "project") in `my_data.txt` and pipe the results to `clip`. Paste the results into Notepad and capture a screenshot.

8. List all files in the `Projects` folder and redirect the output to `projects_list.txt`. Open it in Notepad and capture a screenshot of the file.

9. Create a temporary alias called `myls` that runs `ls -1`, test it, and capture the output. Then explain what would be required to make it persistent.

10. Run `man ls` (or `ls --help`) and redirect the output to `help_output.txt`. Open the {{i:file}} in Notepad and capture a screenshot showing at least the {{i:first}} page of help content.

---

## Grading Rubric

| Section         | Questions | Points Each | Total  |
| --------------- | --------- | ----------- | ------ |
| Multiple Choice | 20        | 1           | 20     |
| Short Answer    | 10        | 2           | 20     |
| Hands-On Tasks  | 10        | 3           | 30     |
| **Total**       | **40**    | -           | **70** |

**Passing Score:** 49 points (70%)

---

## Helpful Resources for Review

- [{{i:Git}} {{i:Bash}} Command Reference](https://{{i:git}}-scm.com/book/en/v2)
- [Navigation and File System](https://linuxcommand.org/lc3lts0020.php)
- [Using Pipes and Filtering](https://www.gnu.org/software/grep/manual/grep.html)
- [{{i:Bash}} Profile and Aliases](https://www.gnu.org/software/bash/manual/htmlnode/{{i:Bash}}-Startup-Files.html)
- [{{i:Screen}} Reader Accessibility Tips](https://www.nvaccess.org/documentation/)

---

## Submission Checklist

- [ ] All 20 multiple choice questions answered
- [ ] All 10 short answer questions answered (1-2 sentences {{i:each}})
- [ ] All 10 hands-on tasks completed with evidence captured
- [ ] Files/screenshots organized and labeled clearly
- [ ] Submission includes this checklist
