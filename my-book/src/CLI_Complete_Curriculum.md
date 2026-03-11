# Foundation of Command Line Tools — Complete Curriculum

## Command-Line Fundamentals — Choose Your Path

Welcome! Before diving into 3D design with OpenSCAD, you'll master command-line fundamentals. This page will help you understand what command-line interfaces are and choose the best path for you.

## What is a Command-Line Interface (CLI)?

A command-line interface is a text-based way to control your computer by typing commands instead of clicking buttons. It's like sending written instructions to your computer.

### Why learn it?

- Speed: Text commands are often faster than clicking through menus
- Precision: Exact control over what your computer does
- Accessibility: Perfect for screen readers - text is naturally readable
- Automation: Repeat tasks automatically
- 3D Printing: Essential for batch processing models and integrating tools

### Real-world example

Instead of:

1. Opening File Explorer (click)
2. Navigating folders (click, click, click)
3. Right-clicking a file (click)
4. Selecting "Copy" (click)
5. Navigating to destination (click, click)
6. Right-clicking (click)
7. Selecting "Paste" (click)

You type: `cp myfile.txt backup/` and press Enter. Done.

## Three Command-Line Options on Windows

Windows offers three ways to use the command line. All are accessible with screen readers. Here's how they compare:

### Option 1: Windows Command Prompt (CMD)

What it is: The original Windows command-line (1981-present)

Best for: Absolute beginners, maximum simplicity

Pros:

- Simple commands and syntax
- Minimal learning curve
- Easy to understand error messages
- Great for basic file operations
- Perfect entry point to command-line world

Cons:

- Limited advanced features
- Less powerful than alternatives
- No built-in piping (but available)
- Smaller ecosystem

Typical command:

```cmd
copy myfile.txt backup\
```

### Option 2: PowerShell

What it is: Microsoft's modern, powerful shell (2006-present)

Best for: Intermediate users, advanced automation

Pros:

- Very powerful for scripting
- Modern syntax and features
- Excellent for 3D printing automation
- Professional workflows
- Large community

Cons:

- Steeper learning curve than CMD
- More complex syntax
- More "wordy" commands
- Overkill for simple tasks

Typical command:

```powershell
Copy-Item -Path myfile.txt -Destination backup/
```

### Option 3: Git Bash

What it is: A Unix/Linux shell on Windows (runs bash inside Git for Windows)

Best for: Programmers, users familiar with Linux, advanced users

Pros:

- Familiar if you know Linux/Unix
- Powerful piping and text processing
- Consistent with other platforms (macOS, Linux)
- Excellent for advanced workflows
- Industry-standard for developers

Cons:

- Requires Git installation
- Steeper learning curve
- Path syntax is different from native Windows
- Less integrated with Windows system tools
- May be "too much" for beginners

Typical command:

```bash
cp myfile.txt backup/
```

## Command Comparison Table

Here's how common tasks compare across the three options:

| Task                  | Command Prompt            | PowerShell                      | Git Bash                 |
|-----------------------|---------------------------|---------------------------------|--------------------------|
| Show current location | `cd`                      | `pwd`                           | `pwd`                    |
| List files            | `dir /B`                  | `ls -n`                         | `ls`                     |
| Go to folder          | `cd Documents`            | `cd Documents`                  | `cd Documents`           |
| Go up one level       | `cd ..`                   | `cd ..`                         | `cd ..`                  |
| Go home               | `cd %USERPROFILE%`        | `cd ~`                          | `cd ~`                   |
| Create folder         | `mkdir Projects`          | `mkdir Projects`                | `mkdir Projects`         |
| Create file           | `echo text > file.txt`    | `echo "text" > file.txt`        | `echo "text" > file.txt` |
| Copy file             | `copy old.txt new.txt`    | `Copy-Item old.txt new.txt`     | `cp old.txt new.txt`     |
| Move file             | `move old.txt folder/`    | `Move-Item old.txt folder/`     | `mv old.txt folder/`     |
| Delete file           | `del file.txt`            | `Remove-Item file.txt`          | `rm file.txt`            |
| List with filter      | `dir /B *.txt`            | `ls *.txt`                      | `ls *.txt`               |
| Save output to file   | `dir > list.txt`          | `ls > list.txt`                 | `ls > list.txt`          |
| Page through output   | `dir \| more`             | `ls \| more`                    | `ls \| less`             |
| Search in files       | `findstr "text" file.txt` | `Select-String "text" file.txt` | `grep "text" file.txt`   |
| Show file contents    | `type file.txt`           | `cat file.txt` or `Get-Content` | `cat file.txt`           |
| Create script         | `.bat` files              | `.ps1` files                    | `.sh` files              |
| Run script            | `script.bat`              | `.\script.ps1`                  | `./script.sh`            |

## Feature Comparison Table

| Feature                  | CMD          | PowerShell   | Git Bash     |
|--------------------------|--------------|--------------|--------------|
| Simplicity               | Easiest      | Moderate     | Hardest      |
| Beginner-Friendly        | Best         | Good         | Challenging  |
| Power/Capability         | Basic        | Excellent    | Excellent    |
| Screen Reader Compatible | Perfect      | Perfect      | Perfect      |
| Linux/macOS Skills       | Windows-only | Some overlap | Full overlap |
| 3D Printing Automation   | Adequate     | Excellent    | Adequate     |
| Learning Curve           | Gentle       | Moderate     | Steep        |
| Community Support        | Moderate     | Excellent    | Excellent    |
| Windows Integration      | Perfect      | Perfect      | Good         |
| Installation Difficulty  | Built-in     | Built-in     | Requires Git |

## Quick Learner Profile Test

Answer these questions to find your best match:

### Question 1: Experience Level

- A: I've never used a command line Easier paths better (CMD or PowerShell)
- B: I've used terminals before Any path works
- C: I use macOS or Linux Git Bash most natural

### Question 2: What matters most?

- A: Simplicity and quick learning Choose CMD
- B: Power and advanced features Choose PowerShell
- C: Consistency across Windows/Mac/Linux Choose Git Bash

### Question 3: Future goals

- A: Just need to manage files for 3D printing CMD is fine
- B: Advanced automation and scripting PowerShell recommended
- C: Professional development workflows Git Bash best

### Question 4: Your main concern

- A: Don't want steep learning curve CMD
- B: Want industry-standard skills Git Bash
- C: Want Microsoft's modern tool PowerShell

## Recommendation by Goal

### Goal: "I want to learn the basics and get to 3D printing quickly"

#### Start with CMD (Command Prompt)

- Simplest syntax
- Fastest to get productive
- All core concepts transfer to others
- Can switch later if needed

[Start CMD Foundation — jump to Part 2 ↓](#part-2-cmd)

### Goal: "I want power and professional automation"

#### Start with PowerShell

- Microsoft's modern, recommended tool
- Professional-grade capabilities
- Better for complex 3D printing workflows
- Skills are in-demand

[Start PowerShell Foundation — jump to Part 1 ↓](#part-1-powershell)

### Goal: "I want skills that work on Windows, Mac, and Linux"

#### Start with Git Bash

- Unix/bash skills transfer everywhere
- Great preparation for professional development
- Consistent across all platforms
- Growing standard in 3D printing tools

[Start Git Bash Foundation — jump to Part 3 ↓](#part-3-gitbash)

## Can I Switch Paths Later?

Yes, absolutely! All three teach the same fundamental concepts:

- File navigation and organization
- Creating and managing files/folders
- Combining commands for powerful workflows
- Scripting and automation basics

Once you learn one, switching to another is quick. The concepts are identical; only the syntax changes.

Example: If you learn CMD first, then later want PowerShell's power, you'll find it easy. The command `cd Documents` works the same way in all three.

## Important: All Are Equally Accessible

### Screen readers work perfectly with all three

- Text-based by nature (perfect for NVDA, JAWS)
- No mouse required
- Output is naturally readable
- Keyboard-only workflows

>[!NOTE]
>All three shells — CMD, PowerShell, and Git Bash — work perfectly with NVDA, JAWS, Dolphin SuperNova, and Windows Narrator. Don't let accessibility concerns influence your choice.

Don't let accessibility concerns influence your choice. All are fully accessible.

## Getting Started: Your Decision

Take a moment and choose:

### 1. I want the simplest path

[Command Prompt Foundation — jump to Part 2 ↓](#part-2-cmd)

- Time to first success: ~30 minutes
- Learning curve: Gentlest
- When to upgrade: Once you're comfortable and want power

### 2. I want modern, powerful Windows tools

[PowerShell Foundation — jump to Part 1 ↓](#part-1-powershell)

- Time to first success: ~45 minutes
- Learning curve: Moderate
- Best for: Professional automation, 3D printing workflows

### 3. I want Unix/Linux skills that work everywhere

[Git Bash Foundation — jump to Part 3 ↓](#part-3-gitbash)

- Time to first success: ~1 hour
- Learning curve: Steeper but rewarding
- Best for: Professional development, cross-platform work

## Not Sure? Here's What Most People Do

If you're reading this and unsure:

>[!TIP]
>Start with Command Prompt (CMD). It's the gentlest introduction, and you'll be productive quickly. You can always switch to PowerShell or Git Bash later — the concepts transfer completely.

After completing CMD:

- Want more power? PowerShell is next
- Want Linux skills? Git Bash is next
- Want to stick with CMD? You have all the skills you need

## FAQ

Q: Do I need to pick now and stick with it forever?
A: No. Start with one, try another, switch between them. They're tools. Use what works.

Q: Will my 3D printing skills work in all three?
A: Yes. Once you understand the concepts (file organization, automation, piping), they apply everywhere.

Q: If I pick CMD, can I learn PowerShell later?
A: Absolutely. Many learners do exactly this. CMD gets you productive; PowerShell adds power.

Q: Is Git Bash harder?
A: Slightly, due to path syntax and Unix conventions. But not dramatically. If you take time with it, you'll learn it.

Q: Which do professional 3D printing developers use?
A: Mix of all three, but Git Bash/Linux is most common in cross-platform teams.

## Ready to Begin?

Choose your path above and click to start. Remember:

- Each lesson includes practice exercises
>[!TIP]
>You can't break your computer by typing a wrong command. The worst that happens is an error message. Mistakes are learning opportunities — just read the message and try again.

- You can't break anything
- Mistakes are learning opportunities
- Ask for help if stuck

Let's get you comfortable with the command line!


Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) for vendor documentation.
---

**Last Updated:** February 2026
**Total Duration:** ~30–45 hours per track (screen reader users)
**Target Users:** Anyone using a screen reader — NVDA, JAWS, Dolphin SuperNova, Windows Narrator

This combined curriculum covers three command-line environments taught in parallel. Each section follows the same lesson structure (Pre → 0 → 1 → 2 → 3 → 4 → 5 → 6 → Unit Exam) with shell-specific syntax and examples.

---

## Master Table of Contents

### Part 1 — PowerShell

| Section | Title | Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#ps-accessibility-guide) | NVDA, JAWS, and terminal accessibility reference | 1.5 hrs |
| [Lesson Pre: Your First Terminal](#ps-lesson-pre) | Opening PowerShell, first commands, basic navigation | 2–2.5 hrs |
| [Lesson 0: Getting Started](#ps-lesson-0) | Paths, shortcuts, tab completion | 1.5 hrs |
| [Lesson 1: Navigation](#ps-lesson-1) | Moving around the file system confidently | 2–2.5 hrs |
| [Lesson 2: File and Folder Manipulation](#ps-lesson-2) | Create, copy, move, delete files and folders | 2.5–3 hrs |
| [Lesson 3: Input, Output, and Piping](#ps-lesson-3) | Chain commands together, redirect output | 2.5–3 hrs |
| [Lesson 4: Environment Variables and Aliases](#ps-lesson-4) | Automate settings, create shortcuts | 2–2.5 hrs |
| [Lesson 5: Filling in the Gaps](#ps-lesson-5) | Profiles, history, debugging | 2–2.5 hrs |
| [Lesson 6: Advanced Techniques](#ps-lesson-6) | Scripts, functions, loops, professional workflows | 4–4.5 hrs |
| [Unit Exam](#ps-unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 min |

### Part 2 — Windows Command Prompt (CMD)

| Section | Title | Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#cmd-accessibility-guide) | NVDA, JAWS, Narrator, and SuperNova reference for CMD | 1.5 hrs |
| [Lesson Pre: Your First Terminal](#cmd-lesson-pre) | Opening CMD, first commands, basic navigation | 1.5–2 hrs |
| [Lesson 0: Getting Started](#cmd-lesson-0) | Paths, shortcuts, tab completion | 1.5 hrs |
| [Lesson 1: Navigation](#cmd-lesson-1) | Moving around the file system confidently | 2–2.5 hrs |
| [Lesson 2: File and Folder Manipulation](#cmd-lesson-2) | Create, copy, move, delete files and folders | 2.5–3 hrs |
| [Lesson 3: Input, Output, and Piping](#cmd-lesson-3) | Redirect output, chain commands with pipes | 2.5–3 hrs |
| [Lesson 4: Environment Variables and Aliases](#cmd-lesson-4) | Automate settings, create doskey shortcuts | 2–2.5 hrs |
| [Lesson 5: Filling in the Gaps](#cmd-lesson-5) | Autorun scripts, history, debugging | 2–2.5 hrs |
| [Lesson 6: Advanced Techniques](#cmd-lesson-6) | Batch scripts, subroutines, loops, professional workflows | 4–4.5 hrs |
| [Unit Exam](#cmd-unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 min |

### Part 3 — Git Bash

| Section | Title | Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#gb-accessibility-guide) | NVDA, JAWS, Narrator, and SuperNova reference for Git Bash | 1–1.5 hrs |
| [Tutorial: Git Bash Quick Start](#gb-tutorial) | Prompt orientation, core commands, path concepts | 30–45 min |
| [Lesson Pre: Your First Terminal](#gb-lesson-pre) | Installing Git Bash, opening it, first commands | 1.5–2 hrs |
| [Lesson 0: Getting Started](#gb-lesson-0) | Paths, `~`, `./`, `../`, tab completion | 20–30 min |
| [Lesson 1: Navigation](#gb-lesson-1) | `pwd`, `cd`, `ls` and flags, wildcards | 1 class period |
| [Lesson 2: File and Folder Manipulation](#gb-lesson-2) | `touch`, `mkdir`, `cp`, `mv`, `rm`, `rmdir` | 30–45 min |
| [Lesson 3: Input, Output, and Piping](#gb-lesson-3) | `echo`, `cat`, `>`, `>>`, `\|`, `clip`, `grep` | 1 class period |
| [Lesson 4: Environment Variables and Aliases](#gb-lesson-4) | `$VARNAME`, `PATH`, `which`, `alias`, `.bashrc` | 30–45 min |
| [Lesson 5: Filling in the Gaps](#gb-lesson-5) | `history`, `Ctrl+R`, `.bashrc`, `./` | 30–45 min |
| [Lesson 6: Advanced Techniques](#gb-lesson-6) | Shell scripts, functions, loops, professional workflows | 4–4.5 hrs |
| [Unit Exam](#gb-unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 min |

---

## Quick Jump — By Lesson Across All Three Shells

| Lesson | PowerShell | CMD | Git Bash |
|--------|-----------|-----|----------|
| Accessibility Guide | [PS](#ps-accessibility-guide) | [CMD](#cmd-accessibility-guide) | [Git Bash](#gb-accessibility-guide) |
| Lesson Pre | [PS](#ps-lesson-pre) | [CMD](#cmd-lesson-pre) | [Git Bash](#gb-lesson-pre) |
| Lesson 0: Getting Started | [PS](#ps-lesson-0) | [CMD](#cmd-lesson-0) | [Git Bash](#gb-lesson-0) |
| Lesson 1: Navigation | [PS](#ps-lesson-1) | [CMD](#cmd-lesson-1) | [Git Bash](#gb-lesson-1) |
| Lesson 2: File & Folder Manipulation | [PS](#ps-lesson-2) | [CMD](#cmd-lesson-2) | [Git Bash](#gb-lesson-2) |
| Lesson 3: Input, Output & Piping | [PS](#ps-lesson-3) | [CMD](#cmd-lesson-3) | [Git Bash](#gb-lesson-3) |
| Lesson 4: Environment Variables | [PS](#ps-lesson-4) | [CMD](#cmd-lesson-4) | [Git Bash](#gb-lesson-4) |
| Lesson 5: Filling in the Gaps | [PS](#ps-lesson-5) | [CMD](#cmd-lesson-5) | [Git Bash](#gb-lesson-5) |
| Lesson 6: Advanced Techniques | [PS](#ps-lesson-6) | [CMD](#cmd-lesson-6) | [Git Bash](#gb-lesson-6) |
| Unit Exam | [PS](#ps-unit-exam) | [CMD](#cmd-unit-exam) | [Git Bash](#gb-unit-exam) |

---

<a id="part-1-powershell"></a>

# Part 1 — PowerShell

---

**Last Updated:** February 2026  
**Total Duration:** 30–45 hours of instruction and practice (for screen reader users)  
**Target Users:** Anyone using a screen reader (NVDA, JAWS, Dolphin SuperNova, Windows Narrator, or other)

*This single file contains the complete PowerShell Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional files are needed.*

---

## Table of Contents

| Section | Title | Estimated Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#ps-accessibility-guide) | NVDA, JAWS, and terminal accessibility reference | 1.5 hours |
| [Lesson Pre: Your First Terminal](#ps-lesson-pre) | Opening PowerShell, first commands, basic navigation | 2–2.5 hours |
| [Lesson 0: Getting Started](#ps-lesson-0) | Paths, shortcuts, tab completion | 1.5 hours |
| [Lesson 1: Navigation](#ps-lesson-1) | Moving around the file system confidently | 2–2.5 hours |
| [Lesson 2: File and Folder Manipulation](#ps-lesson-2) | Create, copy, move, delete files and folders | 2.5–3 hours |
| [Lesson 3: Input, Output, and Piping](#ps-lesson-3) | Chain commands together, redirect output | 2.5–3 hours |
| [Lesson 4: Environment Variables and Aliases](#ps-lesson-4) | Automate settings, create shortcuts | 2–2.5 hours |
| [Lesson 5: Filling in the Gaps](#ps-lesson-5) | Profiles, history, debugging | 2–2.5 hours |
| [Lesson 6: Advanced Techniques](#ps-lesson-6) | Scripts, functions, loops, professional workflows | 4–4.5 hours |
| [Unit Exam](#ps-unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 minutes |

**Total:** approximately 30–45 hours including practice exercises

---

## How to Use This File

**If you have never used a terminal before:** read from the top in order. Do not skip lessons — each builds on the one before it.

**If you have used a terminal but not with a screen reader:** start with the Accessibility Guide, skim Lesson Pre, then continue from Lesson 0.

**If you are experienced with both:** jump directly to the lesson you need. Use the quiz at the end of each lesson to self-test before moving on.

**Reference while working:** the Accessibility Guide and Lesson 0 contain material you will return to throughout the curriculum. Keep a copy open or bookmark those sections.

---

## Curriculum Rules (Read These First)

**Rule 1 — Always know where you are.**  
Every session, first thing: `pwd`. If you don't know your path, you'll get lost.

**Rule 2 — Check before you delete.**  
Before any `rm` command: `ls -n` to confirm what you're about to remove.

**Rule 3 — Use `-n` with `ls`.**  
Always `ls -n` — never bare `ls`. The `-n` flag gives one name per line, which screen readers can follow.

**Rule 4 — When lost, redirect to a file.**  
If output is confusing: `command > output.txt` then `notepad.exe output.txt`. This always works.

**Rule 5 — Save everything you create.**  
Keep all practice files in a dedicated learning folder: `mkdir ~/PS_Learning`.

---



---

<a id="ps-accessibility-guide"></a>

# Screen Reader Accessibility Guide

---

Target Users: NVDA, JAWS, and other screen reader users  
Last Updated: 2026

This guide supports the PowerShell Foundation curriculum and helps screen reader users navigate and work efficiently with PowerShell on Windows.

## Table of Contents

1. [Getting Started with Screen Readers](#ps-getting-started)
2. [NVDA-Specific Tips](#ps-nvda-tips)
3. [JAWS-Specific Tips](#ps-jaws-tips)
4. [General Terminal Accessibility](#ps-general-terminal)
5. [Working with Long Output](#ps-long-output)
6. [Keyboard Shortcuts Reference](#ps-shortcuts)
7. [Troubleshooting](#ps-troubleshooting)

<a id="ps-getting-started"></a>
## Getting Started with Screen Readers

### Which Screen Reader Should I Use?

NVDA is free and often recommended for new users; JAWS is a powerful commercial option. Also consider Dolphin SuperNova and Windows Narrator:

- Dolphin SuperNova: commercial speech, braille and magnification (check vendor docs for keyboard mappings).
- Windows Narrator: built into Windows and useful for quick access without installing third-party software.

### Before You Start

1. Start your screen reader before opening PowerShell.
2. Open PowerShell and listen for the window title and prompt.
3. If silent, press Alt+Tab to find the window.

### What is PowerShell?

PowerShell is the modern Windows shell and scripting environment. Common commands include `Get-ChildItem`, `Get-Content`, and `Out-File`. PowerShell provides richer objects and piping than CMD.

<a id="ps-nvda-tips"></a>
## NVDA-Specific Tips

NVDA is available from [https://www.nvaccess.org/](https://www.nvaccess.org/)

### Dolphin SuperNova

Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) — commercial option providing speech and magnification; consult vendor guides for features and commands.

### Windows Narrator

Windows Narrator: [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) — built-in Narrator has a different set of commands; it can be enabled via Windows Settings > Accessibility.

### Key Commands for PowerShell

| Command         | What It Does                                          |
|-----------------|-------------------------------------------------------|
| NVDA+Home       | Read the current line (your command or output)        |
| NVDA+Down Arrow | Read from cursor to end of screen                     |
| NVDA+Up Arrow   | Read from top to cursor                               |
| NVDA+Page Down  | Read next page                                        |
| NVDA+Page Up    | Read previous page                                    |
| NVDA+F7         | Open the Review Mode viewer (can scroll through text) |

### Example: Reading Long Output

If `Get-ChildItem` produces many lines, redirect to a file and open it in Notepad:

```powershell
Get-ChildItem -Name > list.txt
notepad list.txt
```

`-Name` prints one item per line (screen reader friendly).

<a id="ps-jaws-tips"></a>
## JAWS-Specific Tips

JAWS is available from [https://www.freedomscientific.com/](https://www.freedomscientific.com/)

### Key Commands for PowerShell

| Command           | What It Does               |
|-------------------|----------------------------|
| Insert+Down Arrow | Read line by line downward |
| Insert+Up Arrow   | Read line by line upward   |
| Insert+Page Down  | Read next page of text     |
| Insert+Page Up    | Read previous page of text |

### Example: Reading Long Output

1. Redirect: `Get-ChildItem -Name > list.txt`
2. Open Notepad: `notepad list.txt`
3. Use Insert+Ctrl+Down to read full contents.

<a id="ps-general-terminal"></a>
## General Terminal Accessibility

### Understanding the PowerShell Layout

PowerShell shows a title bar, content area, and a prompt that looks like:

```powershell
PS C:\Users\YourName>
```

### Navigation Sequence

1. Screen reader announces the title
2. Then it announces the prompt line
3. Anything above prompt is prior output

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

| Key        | Action                          |
|------------|---------------------------------|
| Up Arrow   | Show previous command           |
| Down Arrow | Show next command               |
| Tab        | Auto-complete file/folder names |
| Home       | Jump to start of line           |
| End        | Jump to end of line             |
| Ctrl+C     | Stop command                    |
| Enter      | Run command                     |

<a id="ps-troubleshooting"></a>
## Troubleshooting

### Problem: "I Can't Hear the Output"

1. Redirect to file and open in Notepad.
2. Use End to jump to the end of text.

### Problem: "Tab Completion Isn't Working"

1. Type some characters before Tab.

### Problem: "Command Not Found"

1. Use `Get-Command programname` to check availability.

## Pro Tips

1. Use `Get-ChildItem -Name` for one-per-line listings.
2. Use `Out-File -FilePath list.txt` to capture output with encoding options.

## Recommended Workflow

1. `Set-Location` (or `cd`) to the project folder
2. `Get-ChildItem -Name` to list files
3. Redirect large output to files and open in Notepad

## Additional Resources

- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/support/](https://www.freedomscientific.com/support/)
- PowerShell Documentation: [https://docs.microsoft.com/powershell](https://docs.microsoft.com/powershell)
- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/support/](https://www.freedomscientific.com/support/)
- Dolphin SuperNova: [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)
- Windows Narrator: [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator)


---

<a id="ps-lesson-pre"></a>

# Lesson Pre: Your First Terminal

---

Duration: 1.5-2 hours (for screen reader users)  
Prerequisites: None - this is the starting point  
Accessibility Note: This lesson is designed specifically for screen reader users (NVDA, JAWS)

## What is a Terminal?

A terminal (also called a command line or shell) is a text-based interface where you type commands instead of clicking buttons. Think of it like sending written instructions to your computer instead of pointing and clicking.

Why learn this?
- Faster and more precise work (especially for 3D printing scripts and automation)
- Essential for programming and using tools like OpenSCAD
- Accessibility: Many command line tools work perfectly with screen readers
- Scripting: Automate repetitive tasks

## Opening PowerShell for the First Time
### 3DMake: Your First Real-World Goal

**3DMake** ([github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)) is a free, accessibility-first command-line tool for designing and 3D-printing models entirely from the terminal — no mouse required. Every PowerShell skill in this curriculum directly supports a real 3DMake workflow.

Here is the end goal — one command that builds your OpenSCAD model, slices it, and sends it to the printer:

```powershell
# Navigate to your project folder
cd ~/Documents/3d_projects/my_cube

# Build, slice, and print in a single command
3dm build slice print
```

Keep this goal in mind as you work through each lesson.

## Opening PowerShell for the First Time

### On Windows

Method 1: Search (Easiest)
1. Press the Windows key alone
2. You should hear "Search"
3. Type: `PowerShell`
4. You'll hear search results appear
5. Press Enter to open the first result (Windows PowerShell)
6. PowerShell will open in a new window

Method 2: Using the Start Menu
1. Press Windows key + X (opens the Quick Link menu)
2. Look for "Windows PowerShell" or "Terminal"
3. Press Enter

Method 3: From File Explorer
1. Open File Explorer
2. Navigate to any folder
3. In the menu bar, select "File" -> "Open Windows PowerShell here"
4. PowerShell opens in that folder location

### First Connection: Understanding the Prompt

When PowerShell opens, your screen reader will announce the window title and then the prompt. The prompt is where you type commands.

What you'll hear:
```
PS C:\Users\YourName>
```

What this means:
- `PS` = "PowerShell" indicator
- `C:\Users\YourName` = Your current location (the "path")
- `>` = The prompt is ready for your input

> [!IMPORTANT]
>  Your cursor is blinking right after the `>`. This is where you type.

## Your First Commands (Screen Reader Edition)

### Command 1: "Where Am I?" - `pwd`

What it does: Tells you your current location

Type this:
```powershell
pwd
```

Press Enter

What you'll hear:
Your screen reader will announce the current path, something like:
```
C:\Users\YourName
```

Understanding paths:
- Paths show your location in the file system (like a mailing address)
- Windows paths use backslashes: `C:\Users\YourName\Documents`
- Think of it like folders inside folders: `C:\` (main drive) -> `Users` -> `YourName` -> `Documents`

### Command 2: "What's Here?" - `ls -n`

What it does: Lists all files and folders in your current location. The `-n` flag makes it screen-reader friendly (names only, one per line)

Type this:
```powershell
ls -n
```

Press Enter

What you'll hear:
Your screen reader will announce each file and folder name, one per line:
```
Desktop
Documents
Downloads
Music
Pictures
...
```

Why `-n`?
- Without `-n`, PowerShell shows files in columns (hard to read with a screen reader)
- With `-n`, each file/folder is on its own line (perfect for screen readers)

### Command 3: "Go There" - `cd Documents`

What it does: Changes your location (navigates to a folder)

Type this:
```powershell
cd Documents
```

Press Enter

What you'll hear:
The prompt changes to show your new location. You might hear something like:
```
PS C:\Users\YourName\Documents>
```

Practice navigation:
1. Run `pwd` to confirm you're in Documents
2. Run `ls -n` to see what files are in Documents
3. Try going back: `cd ..` (the `..` means "go up one level")
4. Run `pwd` again to confirm
5. Go back to Documents: `cd Documents`

## Reading Screen Reader Output (Critical Skills)

### Dealing with Long Lists

When you run `ls -n` in a folder with many files, the list might be very long. Your screen reader might announce 50+ items rapidly.

Solution 1: Save to a File
```powershell
ls -n > list.txt
notepad.exe list.txt
```

This saves the list to a file and opens it in Notepad where you can read it more slowly.

Solution 2: Search Within the Output
```powershell
ls -n | findstr "search-term"
```

Example: If you're looking for files containing "scad", type:
```powershell
ls -n | findstr "scad"
```

### Navigating Tab Completion

One of the most powerful screen reader tricks is Tab completion:

How it works:
1. Type the first few letters of a folder or file name
2. Press Tab
3. PowerShell automatically completes the rest

Example:
1. You're in `C:\Users\YourName>`
2. Type: `cd Doc`
3. Press Tab
4. PowerShell auto-completes it to: `cd Documents`
5. Press Enter to go there

With a screen reader:
1. As you type `Doc`, your screen reader announces each letter
2. When you press Tab, PowerShell types the rest and your screen reader announces the full command
3. This is much faster than typing the whole thing

## Creating and Editing Files

### Create a Simple File

Type this:
```powershell
echo "Hello, PowerShell!" > hello.txt
```

What this does:
- `echo` sends text to the screen (or file)
- `"Hello, PowerShell!"` is the text
- `>` redirects it to a file called `hello.txt`

### Read the File Back

Type this:
```powershell
cat hello.txt
```

What you'll hear:
Your screen reader announces:
```
Hello, PowerShell!
```

### Open and Edit the File

Type this:
```powershell
notepad.exe hello.txt
```

This opens the file in Notepad where you can edit it with your screen reader.

## Essential Keyboard Shortcuts

These work in PowerShell and are crucial for screen reader users:

| Key Combination | What It Does                                                 |
|-----------------|--------------------------------------------------------------|
| Up Arrow        | Shows your previous command (press again to go further back) |
| Down Arrow      | Shows your next command (if you went back)                   |
| Tab             | Auto-completes folder/file names                             |
>[!IMPORTANT]
>**Ctrl+C** stops any running command immediately. If a command seems frozen or is producing endless output, press Ctrl+C to regain control of the prompt.

| Ctrl+C          | Stops a running command                                      |
| Ctrl+L          | Clears the screen                                            |
| Enter           | Runs the command                                             |

Screen reader tip: These all work perfectly with your screen reader. Try them!

## Screen Reader-Specific Tips

### NVDA Users

1. Reading Command Output:
   - Use NVDA+Home to read the current line
   - Use NVDA+Down Arrow to read to the end of the screen
   - Use NVDA+Page Down to read the next page

2. Reviewing Text:
   - Use NVDA+Shift+Page Up to review text above

### JAWS Users

1. Reading Output:
   - Use Insert+Down Arrow to read line-by-line
   - Use Insert+Page Down to read by page
   - Use Insert+End to jump to the end of text

2. Reading All Text:
   - Use Insert+Down Arrow repeatedly
   - Or use Insert+Ctrl+Down to read to the end

### Common Issue: "I Can't Hear the Output"

Problem: You run a command but don't hear the output

Solutions:
1. Make sure your cursor is at the prompt (try pressing End or Ctrl+End)
2. Use Up Arrow to go back to your previous command and review it
3. Try redirecting to a file: `command > output.txt` then open the file
4. In NVDA: Try pressing NVDA+F7 to open the Review Mode viewer

## Practice Exercises

Complete these in order. Take your time with each one:

### Exercise 1: Basic Navigation
1. Open PowerShell
2. Run `pwd` and note your location
3. Run `ls -n` and listen to what's there
4. Try `cd Documents` or another folder
5. Run `pwd` to confirm your new location
6. Run `ls -n` in this new location

Goal: You should be comfortable knowing where you are and what's around you

### Exercise 2: Using Tab Completion
1. In your home directory, type `cd D` (just the letter D)
2. Press Tab
3. PowerShell should auto-complete to a folder starting with D
4. Repeat with other folder names
5. Try typing a longer name: `cd Down` and Tab to `Downloads`

Goal: Tab completion should feel natural

### Exercise 3: Creating and Viewing Files
1. Create a file: `echo "Test content" > test.txt`
2. View it: `cat test.txt`
3. Create another: `echo "Line 2" > another.txt`
4. List both: `ls -n`

Goal: You understand create, view, and list operations

### Exercise 4: Going Up Levels
1. Navigate into several folders: `cd Documents`, then `cd folder1`, etc.
2. From deep inside, use `cd ..` multiple times to go back up
3. After each `cd ..`, run `pwd` to confirm your location

Goal: You understand relative navigation with `..`

### Exercise 5: Redirecting Output
1. Create a list: `ls -n > directory_list.txt`
2. Open it: `notepad.exe directory_list.txt`
3. Read it with your screen reader
4. Close Notepad
5. Verify the file exists: `ls -n | findstr "directory"`

Goal: You can save long outputs to files for easier reading

## Checkpoint Questions

After completing this lesson, you should be able to answer:

1. What does `pwd` do?
2. What does `ls -n` do?
3. Why do we use `-n` with `ls`?
4. What path are you in right now?
5. How do you navigate to a new folder?
6. How do you go up one level?
7. What's the Tab key for?
8. What does `echo "text" > file.txt` do?
9. How do you read a file back?
10. How do you stop a command that's running?

You should be able to answer all 10 with confidence before moving to Lesson 0.

## Common Questions

Q: Do I need to use PowerShell? Can I use Command Prompt (cmd.exe)?
A: PowerShell is more powerful and works better with modern tools. We recommend PowerShell, but Command Prompt basics are similar.

>[!TIP]
>If your screen reader isn't announcing terminal output, use `command > file.txt` to save output to a file, then open it with `notepad.exe file.txt` for reliable reading. This trick works with all four screen readers throughout the curriculum.

Q: Why is my screen reader not reading the output?
A: This is common. Use `command > file.txt` to save output to a file, then open it with Notepad for reliable reading.

Q: What if I type something wrong?
A: Just press Enter and you'll see an error message. Type the correct command on the next line. No harm done!

Q: How do I get help with a command?
A: Type `Get-Help command-name` (we'll cover this in Lesson 0)

Q: Can I make PowerShell more accessible?
A: Yes! We'll cover customization in Lesson 5.

## Next Steps

Once you're comfortable with these basics:
- Move to Lesson 0: Getting Started for deeper path understanding
- Then continue through Lessons 1–5 for full terminal mastery

## Resources

- Microsoft PowerShell Docs: [https://docs.microsoft.com/powershell/](https://docs.microsoft.com/powershell/)
- NVDA Screen Reader: [https://www.nvaccess.org/](https://www.nvaccess.org/)
- JAWS Screen Reader: [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- Windows Terminal Accessibility: [https://docs.microsoft.com/windows/terminal/](https://docs.microsoft.com/windows/terminal/)

<a id="ps-troubleshooting"></a>
## Troubleshooting

| Issue                      | Solution                                                                         |
|----------------------------|----------------------------------------------------------------------------------|
| PowerShell won't open      | Try searching Windows, or right-click a folder and select "Open PowerShell here" |
| Can't hear the output      | Try redirecting to a file: `command > output.txt`                                |
| Tab completion not working | Make sure you typed at least one character before pressing Tab                   |
| Command not found          | Make sure you spelled it correctly; try `Get-Command` to see available commands  |
| Stuck in a command         | Press Ctrl+C to stop it                                                          |

Still stuck? The checkpoint questions and exercises are your best teacher. Work through them multiple times until comfortable.


Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) for vendor documentation.


---

<a id="ps-lesson-0"></a>

# Lesson 0: Getting Started — Layout, Paths, and the Shell

---

Estimated time: 20-30 minutes

## Learning Objectives
- Launch PowerShell and locate the prompt
- Understand path notation and shortcuts (`~`, `./`, `../`)
- Use tab completion to navigate quickly

## Materials
- Computer with PowerShell
- Editor (Notepad/VS Code)

## Step-by-step Tasks
1. Open PowerShell and note the prompt (it includes the current path).
2. Run `pwd` and say or note the printed path.
3. Use `ls -n` to list names in your home directory.
4. Practice `cd Documents`, `cd ../` and `cd ~` until comfortable.
5. Try tab-completion: type `cd ~/D` and press Tab.

## Checkpoints
- Confirm you can state your current path and move to `Documents`.

## Quiz - Lesson PS.0
## 3DMake Quick-Start: Your First Real Project

You now know enough PowerShell to set up a real 3DMake project. Do this now — it is the fastest path to a printed object.

**Step 1 — Download and run the 3DMake setup wizard:**

```powershell
# Go to your Downloads folder (where you extracted 3dmake_windows.zip)
cd ~/Downloads/3dmake

# Run the guided setup (answer the questions about your printer)
./3dm setup
```

**Step 2 — Create your first project:**

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

You just used `mkdir`, `cd`, and `ls -n` on a real project. You are ready to print.


## Checkpoints
- Confirm you can state your current path and move to `Documents`.

## Quiz - Lesson PS.0

1. What is a path?
2. What does `~` mean?
3. How do you autocomplete a path?
4. How do you go up one directory?
5. What command lists only names (`ls` flag)?
6. True or False: On Windows, PowerShell uses backslashes (`\`) in paths, but forward slashes (/) are also accepted.
7. Explain the difference between an absolute path and a relative path.
8. If you are in `C:\Users\YourName\Documents` and you type `cd ../`, where do you end up?
9. What happens when you press Tab while typing a folder name in PowerShell?
10. Describe a practical reason why understanding paths is important for a 3D printing workflow.
11. What does `./` mean in a path, and when would you use it?
12. If a folder path contains spaces (e.g., `Program Files`), how do you navigate to it with `cd`?
13. Explain what the prompt `PS C:\Users\YourName>` tells you about your current state.
14. How would you navigate to your home directory from any location using a single command?
15. What is the advantage of using relative paths (like `../`) versus absolute paths in automation scripts?

## Extension Problems
1. Create a nested folder and practice `cd` into it by typing partial names and using Tab.
2. Use `ls -n -af` to list only files in a folder.
3. Save `pwd` output to a file and open it in Notepad.
4. Try `cd` into a folder whose name contains spaces; observe how quotes are handled.
5. Create a short note file and open it from PowerShell.
6. Build a folder structure that mirrors your project organization; navigate to each level and document the path.
7. Create a script that prints your current path and the total number of files in it; run it from different locations.
8. Investigate the special paths (e.g., `$HOME`, `$PSScriptRoot`); write down what each contains and when you'd use them.
9. Compare absolute vs. relative paths by navigating to the same folder using each method; explain which is easier for automation.
10. Create a PowerShell function that changes to a frequently-used folder and lists its contents in one command; test it from different starting locations.
11. Navigate to three different locations and at each one note the prompt, the path from `pwd`, and verify you understand what each shows.
12. Create a complex folder tree (at least 5 levels deep) and navigate it using only relative paths; verify your location at each step.
13. Document all shortcuts you know (`~`, `./`, `../`, `$HOME`) and demonstrate each one works as expected.
14. Write a guide for a peer on how to understand the PowerShell prompt and path notation without using GUI file explorer.
15. Create a troubleshooting flowchart: if someone says "I don't know where I am," what commands do you give them to find out?

## References

- Microsoft. (2024). *PowerShell scripting overview and documentation*. [https://learn.microsoft.com/powershell/scripting/overview](https://learn.microsoft.com/powershell/scripting/overview)
- Microsoft. (2024). *Filesystem navigation in PowerShell*. [https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem](https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem)
- Microsoft. (2024). *Accessibility features in PowerShell ISE*. [https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)

## Helpful Resources

- [PowerShell Basics - Microsoft Learn](https://learn.microsoft.com/powershell/scripting/overview)
- [Filesystem Navigation Guide](https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem)
- [Understanding Path Notation](https://poshcode.gitbook.io/powershell-faq/src/getting-started/filesystem-navigation)
- [Tab Completion Reference](https://learn.microsoft.com/powershell/module/psreadline/about/about_psreadline_functions)
- [Accessibility in PowerShell ISE](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)


---

<a id="ps-lesson-1"></a>

# Lesson 1: Navigation — Moving Around Your File System

---

Duration: 1 class period  
Prerequisite: Lesson 0 (Getting Started)

Learning Objectives
By the end of this lesson, you will be able to:

- Use `pwd` to print your current location
- Use `cd` to move between directories
- Use `ls` (and its flags) to list files and folders
- Use wildcards `*` and `?` to filter listings
- Navigate relative vs. absolute paths
- Search for files by name and extension

Materials

- PowerShell
- Text editor (Notepad or VS Code)

## Commands Covered in This Lesson

| Command          | What It Does                                       |
|------------------|----------------------------------------------------|
| `pwd`            | Print Working Directory - shows where you are      |
| `cd path`        | Change Directory - move to a new location          |
| `ls`             | List - shows files and folders in current location |
| `ls -n`          | List names only (screen reader friendly)           |
| `ls -n -af`      | List names of files only                           |
| `ls -n -ad`      | List names of directories only                     |
| `ls *.extension` | List files matching a pattern                      |

## `pwd` - Where Am I?

Type `pwd` and press `Enter`. PowerShell prints the full path to your current location.

```powershell
pwd
# Output: C:\Users\YourName
```

When to use: Always run this if you're unsure of your current location.

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

Use `ls -n` for screen reader compatibility.

```powershell
# List all files and folders (names only)
ls -n
# List only files (no folders)
ls -n -af
# List only folders (no files)
ls -n -ad
```

## Wildcards - Finding Files by Pattern

Wildcards help you find files without typing the full name.

`*` (asterisk) matches any number of characters:

```powershell
# List all .scad files
ls -n *.scad
# List all files starting with "part"
ls -n part*
# List all files ending with "_final"
ls -n *_final*
```

`?` (question mark) matches exactly one character:

```powershell
# Find files like model1.scad, model2.scad (but not model12.scad)
ls -n model?.scad
```

## Step-by-step Practice

## 3DMake in Practice: Navigating a Project

Navigation commands are exactly what you need to explore and manage 3DMake projects:

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

Tab completion makes navigation fast: type `cd ~/Doc` and press Tab.


## Step-by-step Practice

1. Run `pwd` and confirm your location
2. Move to `Documents`: `cd Documents`
3. Confirm you moved: `pwd`
4. List files and folders: `ls -n`
5. List only files: `ls -n -af`
6. Go back up: `cd ..`
7. Search for files: `ls -n *.txt`

## Checkpoints

After this lesson, you should be able to:

- [ ] Navigate to any folder using `cd`
- [ ] Confirm your location with `pwd`
- [ ] List files and folders with `ls -n`
- [ ] Use wildcards to find files by pattern
- [ ] Move between absolute and relative paths confidently

## Quiz - Lesson PS.1

1. What does `pwd` show?
2. How do you list directories only with `ls`?
3. What wildcard matches any number of characters?
4. How do you list files with the `.scad` extension?
5. Give an example of an absolute path and a relative path.
6. True or False: The `*` wildcard matches exactly one character.
7. Explain the difference between `ls -n` and `ls -n -ad`.
8. Write a command that would list all `.txt` files in your Documents folder using a wildcard.
9. How would you search for files containing "part" in their name across multiple files?
10. Describe a practical scenario where using wildcards saves time in a 3D printing workflow.
11. What happens when you use `ls -n part?.scad` versus `ls -n part*.scad`?
12. How would you navigate to a folder whose name contains both spaces and special characters?
13. If you're in `/Documents/Projects/3D` and you want to go to `/Documents/Resources`, what command would you use?
14. Write a command sequence that navigates to the Downloads folder, lists only files, then returns to home.
15. Explain the purpose of using `ls -n -af` specifically in a screen reader context.

## Extension Problems

1. Write a one-line script that lists `.scad` files and saves to `scad_list.txt`.
2. Use `ls -n ~/Documents | more` to page through long listings.
3. Combine `ls` with `Select-String` to search for a filename pattern.
4. Create a shortcut alias in the session for a long path and test it.
5. Practice tab-completion in a directory with many similarly named files.
6. Build a PowerShell script that recursively lists all `.scad` and `.stl` files in a directory tree; save the results to a file.
7. Compare the output of `ls`, `Get-ChildItem`, and `gci` to understand PowerShell aliasing; document what each command does.
8. Create a filtering command that displays only files modified in the last 7 days; test it on your documents folder.
9. Write a non-visual guide to PowerShell navigation; include descriptions of common patterns and how to verify directory contents audibly.
10. Develop a navigation workflow for a typical 3D printing project: move between CAD, slicing, and print-log folders efficiently; document the commands.
11. Create a complex wildcard search: find all files in a folder and subfolders that match multiple patterns (e.g., `*_v1.* OR *_final.*`).
12. Build a script that navigates through a folder tree, counts files at each level, and reports the structure.
13. Document the output differences between `ls -n`, `ls -n -af`, `ls -n -ad`, and `Get-ChildItem`; explain when to use each.
14. Create a navigation "cheat sheet" as a PowerShell script that prints common paths and how to navigate to them.
15. Design a project folder structure on your computer, document each path, then create a script that validates all folders exist.

## References

- Microsoft. (2024). *Get-ChildItem cmdlet reference*. [https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-childitem](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-childitem)
- Microsoft. (2024). *PowerShell wildcards and filtering*. [https://learn.microsoft.com/powershell/scripting/learn/shell/using-wildcards](https://learn.microsoft.com/powershell/scripting/learn/shell/using-wildcards)
- Microsoft. (2024). *Navigation best practices in PowerShell*. [https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem](https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem)

## Helpful Resources

- [Get-ChildItem Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/get-childitem)
- [PowerShell Wildcards and Filtering](https://learn.microsoft.com/powershell/scripting/learn/shell/using-wildcards)
- [Navigation Best Practices](https://learn.microsoft.com/powershell/scripting/learn/shell/navigate-the-filesystem)
- [Relative and Absolute Paths](https://poshcode.gitbook.io/powershell-faq/src/getting-started/filesystem-navigation)
- [Screen Reader Tips for PowerShell](https://learn.microsoft.com/powershell/scripting/windows-powershell/ise/accessibility-in-windows-powershell-ise)


---

<a id="ps-lesson-2"></a>

# Lesson 2: File and Folder Manipulation

---

Estimated time: 30-45 minutes

Learning Objectives
- Create, copy, move, and delete files and folders from PowerShell
- Use `ni`, `mkdir`, `cp`, `mv`, `rm`, and `rmdir` safely
- Understand when operations are permanent and how to confirm results

Materials
- PowerShell
- Small practice folder for exercises

Step-by-step Tasks
1. Create a practice directory: `mkdir ~/Documents/PS_Practice` and `cd` into it.
2. Create two files: `ni file1.txt` and `ni file2.txt`.
3. Copy `file1.txt` to `file1_backup.txt` with `cp` and confirm with `ls -n`.
4. Rename `file2.txt` to `notes.txt` using `mv` and confirm.
5. Delete `file1.txt` with `rm` and verify the backup remains.

Checkpoints
- After step 3 you should see both the original and the backup file.
## 3DMake in Practice: Organizing Your Projects

File management commands are essential for 3DMake project organization:

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
- After step 3 you should see both the original and the backup file.

## Quiz - Lesson PS.2

1. How do you create an empty file from PowerShell?
2. What command copies a file?
3. How do you rename a file?
4. What does `rm -r` do?
5. Why is `rm` potentially dangerous?
6. True or False: `cp` requires the `-r` flag to copy both files and folders.
7. Explain the difference between `rm` and `rmdir`.
8. If you delete a file with `rm`, can you recover it from PowerShell?
9. Write a command that would copy an entire folder and all its contents to a new location.
10. Describe a practical safety check you would perform before running `rm -r` on a folder.
>[!CAUTION]
>By default, `cp` **silently overwrites** an existing file at the destination with no warning. Use `cp -i` (interactive) to get a confirmation prompt before overwriting, especially when working with important files.

11. What happens if you `cp` a file to a destination where a file with the same name already exists? How would you handle this safely?
12. Compare `mv old_name.txt new_name.txt` vs `mv old_name.txt ~/Documents/new_name.txt`. What is the key difference?
13. Design a workflow to safely delete 50 files matching the pattern `*.bak` from a folder containing 500 files. What commands and verifications would you use?
14. Explain how you could back up all `.scad` files from a project folder into a timestamped backup folder in one command.
15. When organizing a 3D printing project, you need to move completed designs to an archive folder and delete failed prototypes. How would you structure this as a safe, auditable process?

## Extension Problems
1. Create a folder tree and copy it to a new location with `cp -r`.
2. Write a one-line command that creates three files named `a b c` and lists them.
3. Move a file into a new folder and confirm the move.
4. Use wildcards to delete files matching a pattern in a safe test folder.
5. Export a listing of the practice folder to `practice_listing.txt`.
6. Create a backup script that copies all `.scad` files from your project folder to a backup folder with timestamp naming.
7. Build a safe deletion workflow: list files matching a pattern, verify count, then delete with confirmation; document the steps.
8. Write a PowerShell script that organizes files by extension into subfolders; test it on a sample folder tree.
9. Create a file operation audit trail: log all copy, move, and delete operations to a text file for review.
10. Develop a project template generator: a script that creates a standard folder structure for a new 3D printing project with essential subfolders.
11. Implement a file conflict handler: write a script that handles cases where `cp` would overwrite an existing file by renaming the existing file with a timestamp before copying.
12. Create a batch rename operation: use a script to rename all files in a folder from `old_prefix_*` to `new_prefix_*`; test with actual files and verify the results.
13. Build a folder comparison tool: list all files in two folders and identify which files exist in one but not the other; output to a report.
14. Write a destructive operation validator: before executing `rm -r`, create a script that lists exactly what will be deleted, shows file counts by type, and requires explicit user confirmation to proceed.
15. Design a complete project lifecycle workflow: create folders for active projects, completed designs, and archive; include move operations between folders, backup steps, and verification that all files arrive intact.

## References

- Microsoft. (2024). *New-Item cmdlet reference*. [https://learn.microsoft.com/powershell/module/microsoft.powershell.management/new-item](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/new-item)
- Microsoft. (2024). *Copy-Item and Move-Item cmdlets*. [https://learn.microsoft.com/powershell/module/microsoft.powershell.management/copy-item](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/copy-item)
- Microsoft. (2024). *File system operations guide*. [https://learn.microsoft.com/powershell/scripting/learn/shell/manipulating-items](https://learn.microsoft.com/powershell/scripting/learn/shell/manipulating-items)

## Helpful Resources

- [New-Item Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/new-item)
- [Copy-Item and Move-Item](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/copy-item)
- [Remove-Item Cmdlet Reference](https://learn.microsoft.com/powershell/module/microsoft.powershell.management/remove-item)
- [File System Operations Guide](https://learn.microsoft.com/powershell/scripting/learn/shell/manipulating-items)
- [Safe Deletion Practices](https://poshcode.gitbook.io/powershell-faq/src/getting-started/file-management)


---

<a id="ps-lesson-3"></a>

# Lesson 3: Input, Output, and Piping

---

Duration: 1 class period
Prerequisite: Lesson 2 (File and Folder Manipulation)

## Learning Objectives

By the end of this lesson, you will be able to:

- Use `echo` to print text to the screen
- Use `cat` to read file contents
- Use `>` to redirect output into a file
- Use `|` (pipe) to send one command's output to another
- Copy output to the clipboard with `clip`
- Open files with a text editor from the command line

## Commands Covered

| Command                | What It Does                                    |
|------------------------|-------------------------------------------------|
| `echo "text"`          | Print text to the screen                        |
| `cat filename`         | Print the contents of a file                    |
| `> filename`           | Redirect output into a file (overwrites)        |
| `>> filename`          | Append output to a file (adds to end)           |
| `\|`                   | Pipe - send output from one command to the next |
| `clip`                 | Copy piped input to the Windows clipboard       |
| `notepad.exe filename` | Open a file in Notepad                          |

## `echo` - Printing Text

`echo` prints text to the screen. It is useful for testing, for writing text into files, and for understanding how piping works.

```powershell
echo "Hello, World"
echo "This is a test"
```

## `cat` - Reading Files

`cat` prints the contents of a file to the screen.

```powershell
# Read a text file
cat ~/Documents/notes.txt
# Read an OpenSCAD file
cat ~/Documents/OpenSCAD_Projects/project0.scad
```

With a long file, use `cat filename | more` to read it page by page (press `Space` to advance, `Q` to quit).

## `>` - Redirecting Output to a File

The `>` symbol redirects output from the screen into a file instead.

```powershell
# Create a file with a single line
echo "Author: Your Name" > header.txt
# Confirm the file was created and has content
cat header.txt
```

> [!WARNING]
>  `>` overwrites the file if it already exists. Use `>>` to append instead:

```powershell
echo "Date: 2025" >> header.txt
echo "Project: Floor Marker" >> header.txt
cat header.txt
```

## `|` - Piping

The pipe symbol `|` sends the output of one command to the input of the next. This lets you chain commands together.

```powershell
# List files and send the list to clip (copies to clipboard)
ls -n | clip
## 3DMake in Practice: Capturing Build Output

Piping and redirection are essential for working with 3DMake's output accessibly:

```powershell
# Build and save the full log to a file so you can read it in Notepad
3dm build > build_log.txt
notepad.exe build_log.txt

# Build and slice, keeping only lines with errors or warnings
3dm build slice 2>&1 | Select-String -Pattern "error|warning" -CaseSensitive:$false

# List all STL files produced so far
ls -n build/ | findstr ".stl"

# Get a list of available printer profiles and save for reference
3dm list-profiles > profiles.txt
notepad.exe profiles.txt

# Get a list of material overlays (PLA, PETG, supports, etc.)
3dm list-overlays > overlays.txt
notepad.exe overlays.txt

# Get an AI description of your model and save it
3dm info > model_description.txt
notepad.exe model_description.txt
```


```powershell
# List files and send the list to clip (copies to clipboard)
ls -n | clip
# Now paste with Ctrl + V anywhere
```

```powershell
# Search within a file's contents using Select-String (like grep)
cat project0.scad | Select-String "cube"
```

## `clip` - Copying to Clipboard

`clip` takes whatever is piped to it and puts it on the Windows clipboard.

```powershell
# Copy your current directory path to the clipboard
pwd | clip
# Copy a file listing to clipboard
ls -n | clip
# Copy the contents of a file to clipboard
cat notes.txt | clip
```

After any of these, press `Ctrl + V` in any application to paste.

## Opening Files in Notepad

```powershell
# Open a file in Notepad
notepad.exe ~/Documents/notes.txt
# Open a .scad file
notepad.exe ~/Documents/OpenSCAD_Projects/project0.scad
# Create a new file and open it
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
- Microsoft. (2024). *Out-File cmdlet for redirection*. [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-file](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-file)
- Microsoft. (2024). *Select-String piping reference*. [https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string)
- Microsoft. (2024). *PowerShell pipeline concepts*. [https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-pipeline](https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-pipeline)
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

# Quick function to run the full build-slice-print pipeline
function 3dprint { 3dm build slice print }

# Quick function to build and get an AI model description
function 3dinfo { 3dm build; 3dm info }

# Add these functions to your PowerShell profile so they load every session
notepad.exe $PROFILE
# (Paste the three functions above into the file, then save)

# Reload your profile without restarting PowerShell
. $PROFILE

# Now use them:
3dp            # jump to your 3D projects folder
3dprint        # run the full pipeline
3dinfo         # build and describe the model
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

- Microsoft. (2024). *Environment variables in PowerShell*. [https://learn.microsoft.com/powershell/scripting/learn/shell/using-environment-variables](https://learn.microsoft.com/powershell/scripting/learn/shell/using-environment-variables)
- Microsoft. (2024). *Set-Alias cmdlet reference*. [https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/set-alias](https://learn.microsoft.com/powershell/module/microsoft.powershell.utility/set-alias)
- Microsoft. (2024). *Creating and using PowerShell profiles*. [https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)

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
>[!CAUTION]
>Before any destructive operation — mass delete, bulk overwrite, or recursive removal — use history review (`Get-History`) and dry-run techniques (e.g., `What-If`) to verify the command is correct. A single mistaken path in a bulk delete can be unrecoverable.

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

- Microsoft. (2024). *PowerShell history and recall functionality*. [https://learn.microsoft.com/powershell/scripting/learn/shell/using-history](https://learn.microsoft.com/powershell/scripting/learn/shell/using-history)
- Microsoft. (2024). *Understanding and creating PowerShell profiles*. [https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_profiles)
- Microsoft. (2024). *The call operator (&) for running executables*. [https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-](https://learn.microsoft.com/powershell/module/microsoft.powershell.core/about/about_operators#call-operator-)

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
# batch_print.ps1 - build and print every 3DMake project in a folder
param(
    [string]$ProjectsDir = "$HOME\Documents\3d_projects"
)

Get-ChildItem -Path $ProjectsDir -Directory | ForEach-Object {
    $project = $_.FullName
    $name = $_.Name
    Write-Host "Processing: $name"
    Set-Location $project

    # Build and slice; capture all output
    $output = & 3dm build slice 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  OK - sending to printer"
        & 3dm print
    } else {
        Write-Host "  FAILED - log saved to build_error.txt"
        $output | Out-File "build_error.txt"
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
notepad.exe my-first-script.ps1
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
.\my-first-script.ps1
```

What happens:
PowerShell runs each command in sequence and shows output.

### Important: Script Execution Policy

>[!CAUTION]
>If you get an "execution policy" error when running a `.ps1` script, PowerShell's security is blocking unsigned scripts. Use `-Scope Process` to bypass it only for the current session — this is safer than changing the policy machine-wide.

On some Windows systems, you might get an error about "execution policy". This is a security feature.

To fix it temporarily:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Then try your script again:
```powershell
.\my-first-script.ps1
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
foreach ($file in $scadFiles) {
    Write-Output "=== File: $file ==="
    cat $file
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
Write-Output "Processing SCAD files in: $scadFolder"
Write-Output "Found $($scadFiles.Count) files"
Write-Output ""
foreach ($file in $scadFiles) {
    $fullPath = Join-Path -Path $scadFolder -ChildPath $file
    if (Test-Path -Path $fullPath) {
        Write-Output " Found: $file"
    } else {
        Write-Output " Missing: $file"
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
Processing SCAD files in: C:\Users\YourName\Documents\3D_Projects
Found 10 files

 Found: model1.scad
 Found: model2.scad
 Found: model3.scad
[... more files ...]
Batch processing complete!
```

## Error Handling

### Try-Catch Blocks

What if something goes wrong? Use try-catch:

Example:
```powershell
try {
    $file = "C:\nonexistent\path\file.txt"
    $content = cat $file
    Write-Output $content
} catch {
    Write-Output "Error: Could not read file"
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
writ-output "hello"
# Correct:
Write-Output "hello"
```

#### Error 2: "Variable is null"

Cause: Variable was never assigned

Fix: Make sure variable is set before using it
```powershell
$myvar = "hello"  # Set first
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

>[!WARNING]
>**"Access denied"** means PowerShell doesn't have permission to perform the operation. Always understand *why* you need administrator privileges before elevating — running everything as admin creates unnecessary security risk.

#### Error 4: "Access denied"

Cause: Don't have permission

Fix: Run PowerShell as administrator
- Right-click PowerShell -> Run as administrator

### Debugging Technique: Trace Output

Add `Write-Output` statements to track what's happening:

```powershell
$path = "C:\Users\YourName\Documents"
Write-Output "Starting script. Path is: $path"
$files = ls -n $path
Write-Output "Found $($files.Count) files"
foreach ($file in $files) {
    Write-Output "Processing: $file"
    # Do something with $file
    Write-Output "Done with: $file"
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
    mkdir "$projectFolder\output" -Force
    mkdir "$projectFolder\notes" -Force
    # Create a README
    $readmeContent = @"
# $projectName
Created: $(Get-Date)
## Designs
All .scad files go here.
## Output
STL and other exports go here.
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
        "output",
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
        Write-Output "Some files are missing!"
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
.\my-script.ps1 > output.txt
notepad.exe output.txt
```

Solution 2: Use Write-Output with clear sections
```powershell
Write-Output "========== STARTING =========="
Write-Output ""
# ... script ...
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
$files = ls -n *.scad
$count = 0
foreach ($file in $files) {
    $count++
    Write-Output "Processing $count of $($files.Count): $file"
    # Do something with $file
}
Write-Output "All $count files processed!"
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

>[!IMPORTANT]
>`>` **overwrites** a file completely — all previous content is lost. `>>` **appends** to the end of a file, preserving existing content. Using `>` when you meant `>>` will permanently destroy the file's previous contents.

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

>[!WARNING]
>`rm -r ~/Documents/my_folder` permanently deletes the folder and **everything inside it** — all files, all subdirectories — with no confirmation and no undo. Always verify the path with `ls -1` first and consider making a backup with `cp -r` before running recursive deletions.

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
|-----------------|-----------|-------------|-------|
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

*This single file contains the complete CMD Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional files are needed.*

---

## Table of Contents

| Section | Title | Estimated Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#cmd-accessibility-guide) | NVDA, JAWS, Narrator, and SuperNova reference for CMD | 1.5 hours |
| [Lesson Pre: Your First Terminal](#cmd-lesson-pre) | Opening CMD, first commands, basic navigation | 1.5–2 hours |
| [Lesson 0: Getting Started](#cmd-lesson-0) | Paths, shortcuts, tab completion | 1.5 hours |
| [Lesson 1: Navigation](#cmd-lesson-1) | Moving around the file system confidently | 2–2.5 hours |
| [Lesson 2: File and Folder Manipulation](#cmd-lesson-2) | Create, copy, move, delete files and folders | 2.5–3 hours |
| [Lesson 3: Input, Output, and Piping](#cmd-lesson-3) | Redirect output, chain commands with pipes | 2.5–3 hours |
| [Lesson 4: Environment Variables and Aliases](#cmd-lesson-4) | Automate settings, create doskey shortcuts | 2–2.5 hours |
| [Lesson 5: Filling in the Gaps](#cmd-lesson-5) | Autorun scripts, history, debugging | 2–2.5 hours |
| [Lesson 6: Advanced Techniques](#cmd-lesson-6) | Batch scripts, subroutines, loops, professional workflows | 4–4.5 hours |
| [Unit Exam](#cmd-unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 minutes |

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

>[!IMPORTANT]
>**Rule 1 — Always know where you are.** Start every session with `cd` (no arguments) to print your current location. If you don't know your path, you will get lost and may operate on the wrong files.

**Rule 1 — Always know where you are.**  
Every session, first thing: `cd` (with no arguments). If you do not know your path, you will get lost.

>[!WARNING]
>**Files deleted from CMD do not go to the Recycle Bin.** They are permanently gone immediately. Always run `dir /B` to confirm exactly what you are about to delete before running `del` or `rmdir /S`.

**Rule 2 — Check before you delete.**  
Before any `del` or `rmdir` command: `dir /B` to confirm exactly what you are about to remove. Deleted files do not go to the Recycle Bin from CMD.

>[!TIP]
>Always use `dir /B` — never bare `dir`. The `/B` (bare) flag outputs one name per line, which screen readers can follow reliably. Bare `dir` outputs multi-column details that can be difficult to navigate audibly.

**Rule 3 — Use `dir /B` for listings.**  
Always `dir /B` — never bare `dir`. The `/B` flag gives one name per line, which all screen readers can follow reliably.

>[!TIP]
>When terminal output is confusing or overwhelming, redirect it to a file: `command > output.txt`, then open it with `notepad.exe output.txt`. This is clearer than reading raw terminal output and works with all four screen readers.

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
|-----------------|-------------------------------------------------------|
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
|-------------------|----------------------------|
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
|------------|---------------------------------|
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

REM Build, slice, and print in a single command
3dm build slice print
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
|-----------------|----------------------------------------------------------------|
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
|--------------------------------|---------------------------------------------------------------------------|
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
REM Go to your Downloads folder (where you extracted 3dmake_windows.zip)
cd %USERPROFILE%\Downloads\3dmake

REM Run the guided setup (answer the questions about your printer)
3dm setup
```

**Step 2 — Create your first project:**

```cmd
REM Create a folder for all your 3D projects
mkdir %USERPROFILE%\Documents\3d_projects

REM Create your first project folder and initialize it
mkdir %USERPROFILE%\Documents\3d_projects\my_cube
cd %USERPROFILE%\Documents\3d_projects\my_cube
3dm new
```

**Step 3 — Confirm the project structure:**

```cmd
REM You should see three items: src, build, and 3dmake.toml
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

- Microsoft. (2024). *Command line reference*. [https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)
- Microsoft. (2024). *Using the cd command*. [https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd_1](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd_1)

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
cd FolderName          :: Go into a folder
cd ..                  :: Go up one level
cd \                   :: Go to root of current drive (e.g., C:\)
cd %USERPROFILE%       :: Go to home directory
```

### Command: `dir /B` (List Contents)

```cmd
dir /B                 :: List all names (one per line, screen-reader friendly)
dir /B /A:D            :: List only directories/folders
dir /B /A:F            :: List only files
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
cd Documents\3DPrinting    :: Go into Documents, then into 3DPrinting
cd ..                      :: Go up one level
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
cd                        :: Verify your new location
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
mkdir OpenSCAD
cd OpenSCAD
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
cd FolderName              :: Go into a folder
cd ..                      :: Go up one level
cd ..\..                   :: Go up two levels
cd \                       :: Go to drive root
cd %USERPROFILE%           :: Go to home folder
dir /B                     :: List folder contents
dir /B /A:D                :: List only folders
dir /B /A:F                :: List only files
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
echo This is some content > filename.txt    :: Create a file with text content
echo. > emptyfile.txt                       :: Create an empty file
```

Note: `echo.` (echo followed immediately by a period, no space) creates an empty file. `echo` with a space would put a space character in the file.

### Copy Files: `copy`

```cmd
copy source.txt destination.txt          :: Copy a file to a new name
copy source.txt backup\                  :: Copy a file into a folder
copy *.txt backup\                       :: Copy all .txt files to backup folder
```

### Copy Folders: `xcopy`

```cmd
xcopy sourcefolder destinationfolder /E /I    :: Copy a folder and all its contents
```

- `/E` copies all subdirectories including empty ones.
- `/I` treats the destination as a folder (not a file) if it doesn't exist.

### Move and Rename: `move`

```cmd
move oldname.txt newname.txt             :: Rename a file
move file.txt folder\                    :: Move a file into a folder
move *.txt archive\                      :: Move all .txt files to archive folder
```

`move` renames when both source and destination are in the same folder. It moves when the destination is a different folder.

### Delete Files: `del`

>[!CAUTION]
>The `/Q` flag suppresses the confirmation prompt — `del /Q` deletes immediately and silently. Only use `/Q` in scripts where you have already verified the targets; never use it interactively when learning.

```cmd
del filename.txt                         :: Delete one specific file
del *.txt                                :: Delete all .txt files in current folder
del /Q *.tmp                             :: Delete quietly (no confirmation prompt)
```

>[!WARNING]
>`del` does **not** send files to the Recycle Bin. Deleted files are permanently gone with no undo. Always verify the target with `dir /B` before deleting.

### Delete Folders: `rmdir`

```cmd
rmdir foldername                         :: Delete an empty folder
rmdir /S /Q foldername                   :: Delete a folder and ALL its contents (no undo)
```

>[!WARNING]
>`rmdir /S /Q` permanently deletes a folder and **all its contents** with no confirmation and no undo. Always verify the exact folder name with `dir /B` first — one wrong character can delete the wrong folder entirely.

---

## Safe File Operations

>[!CAUTION]
>**Check, then delete.** Never run `del` or `rmdir` without first running `dir /B` to confirm exactly what you're about to remove. Wildcards like `del *.txt` will delete every matching file instantly and permanently.

### Rule 1: Always Check Before Deleting

```cmd
dir /B                   :: See exactly what is here
dir /B *.txt             :: See exactly which .txt files exist
del *.txt                :: Only then delete
```

### Rule 2: Make Backups First

```cmd
mkdir backup
copy *.txt backup\       :: Copy all .txt files to a backup folder first
del *.txt                :: Now safe to delete originals
```

### Rule 3: Test on One File First

```cmd
del test-one-file.txt    :: Test deletion on a single file
dir /B                   :: Confirm it is gone
```

Only then proceed with bulk operations.

---

## Using Wildcards

Wildcards let you operate on multiple files matching a pattern.

### `*` Wildcard (Match Any Number of Characters)

```cmd
dir /B *.txt             :: List all files ending in .txt
copy *.scad backup\      :: Copy all .scad files to backup
del *.tmp                :: Delete all .tmp files
```

### `?` Wildcard (Match Exactly One Character)

```cmd
dir /B file?.txt         :: Matches file1.txt, file2.txt, filea.txt, etc.
copy model?.scad models\ :: Copy model1.scad, model2.scad, etc.
```

---

## Practical Examples

## 3DMake in Practice: Navigating a Project

Navigation commands are exactly what you need to explore and manage 3DMake projects:

```cmd
REM Go to your project root
cd %USERPROFILE%\Documents\3d_projects\my_cube

REM See the project layout: src, build, 3dmake.toml
dir /B

REM Enter the source folder where your .scad model files live
cd src
dir /B

REM Open the main model in Notepad
3dm edit-model

REM Go back to project root, then check build output
cd ..
cd build
dir /B *.stl

REM Return to project root
cd ..

REM Use wildcards to find all projects with "cube" in the name
dir /B %USERPROFILE%\Documents\3d_projects\*cube*
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
copy project.scad project-backup.scad    :: Create a backup copy
:: (edit project.scad)
copy project.scad project-v2.scad        :: Save a new versioned copy
```

### Example 3: Organize Files by Type

```cmd
mkdir scad-files
mkdir text-files
move *.scad scad-files\
move *.txt text-files\
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
REM Create a new project from scratch
mkdir %USERPROFILE%\Documents\3d_projects\bottle_cap
cd %USERPROFILE%\Documents\3d_projects\bottle_cap
3dm new

REM Back up a working project before making big changes
cd %USERPROFILE%\Documents\3d_projects
xcopy /E /I bottle_cap bottle_cap_backup

REM Rename the main model file to something more specific
cd bottle_cap\src
rename main.scad bottle_cap.scad

REM List only .scad files to confirm the rename
dir /B *.scad

REM Delete a draft STL you no longer need
del %USERPROFILE%\Documents\3d_projects\bottle_cap\build\draft.stl

REM Build the renamed model (using the -m flag to specify the name)
cd %USERPROFILE%\Documents\3d_projects\bottle_cap
3dm build -m bottle_cap

REM See the fresh output in the build folder
dir /B build
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

>[!IMPORTANT]
>After any `copy`, `move`, or `del` operation, always verify with `dir /B` to confirm the expected result. Never assume an operation succeeded without checking — silent failures do occur.

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
|--------------------|-------------------------------------------------|
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
echo This is a test
```

---

## `type` - Reading Files

`type` prints the contents of a file to the screen.

```cmd
:: Read a text file
type %USERPROFILE%\Documents\notes.txt

:: Read an OpenSCAD file
type %USERPROFILE%\Documents\OpenSCAD_Projects\project0.scad
```

With a long file, use `type filename | more` to read it page by page (press `Space` to advance, `Q` to quit).

---

## `>` - Redirecting Output to a File

The `>` symbol redirects output from the screen into a file instead.

```cmd
:: Create a file with a single line
echo Author: Your Name > header.txt

:: Confirm the file was created and has content
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

```cmd
:: List files and send the list to clip (copies to clipboard)
dir /B | clip
## 3DMake in Practice: Capturing Build Output

Piping and redirection are essential for working with 3DMake's output accessibly:

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
```


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

`clip` takes whatever is piped to it and puts it on the Windows clipboard.

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

1. Create `practice.txt` with three lines using `echo` and `>`/`>>`.
2. Read the file with `type practice.txt`.
3. Pipe the file into `find` to search for a word.
4. Copy the file contents to clipboard with `type practice.txt | clip`.
5. Redirect `dir /B` into `list.txt` and open it in Notepad.

## Checkpoints

- After step 3 you should be able to find a keyword using piping.

## Quiz - Lesson CMD.3

1. What is the difference between `>` and `>>`?
2. What does the pipe `|` do?
3. How do you copy output to the clipboard?
4. How would you page through long output?
5. How do you suppress output (send it nowhere)?
6. True or False: The pipe operator `|` connects the output of one command to the input of another.
7. Explain why redirecting output to a file is useful for screen reader users.
8. Write a command that would search for the word "sphere" in all `.scad` files in a directory.
9. How would you count the number of lines in a file using CMD piping?
10. Describe a practical scenario in 3D printing where you would pipe or redirect command output.
11. What would be the difference in output between `echo test > file.txt` (run twice) vs `echo test >> file.txt` (run twice)? Show the expected file contents.
12. Design a three-step piping chain: read a file, filter for specific content, and save the results; explain what each pipe does.
13. You have a 500-line `.scad` file and need to find all instances of `sphere()` and count them. Write the command.
14. Explain how `clip` is particularly valuable for screen reader users when working with file paths or long output strings.
15. Describe how you would use pipes and redirection to create a timestamped backup report of all `.stl` files in a 3D printing project folder.

## Extension Problems

1. Use piping to count lines in a file (hint: `type file.txt | find /C /V ""`).
2. Save a long `dir /B` output and search it with `find`.
3. Chain multiple pipes to filter and then save results.
4. Practice copying different command outputs to clipboard and pasting.
5. Create a small batch script that generates a report (counts of files by extension).
6. Build a data processing pipeline: read a text file, filter rows, and export results; document each step.
7. Write a batch script that pipes directory listing to count occurrences of each file extension; create a summary report.
8. Create a log analysis command: read a log file, filter for errors, and save matching lines to a separate error log.
9. Design a piping workflow for 3D printing file management: find `.stl` files, extract their names, and generate a report.
10. Develop a reusable piping pattern library: create batch scripts for common filtering, sorting, and reporting patterns; test each with different inputs.
11. Build a complex filter pipeline: read a `.scad` file, extract lines containing specific geometry commands, count each type, and output a summary to both screen and file.
12. Create an interactive filtering tool: build a batch script that accepts a search term, pipes through multiple filters, and displays paginated results.
13. Develop a performance analysis tool: use piping to combine file listing, metadata extraction, and statistical reporting; export results to a dated report file.
14. Implement a comprehensive error-handling pipeline: read output, catch errors, log them separately, and generate a summary of successes vs failures.
15. Design and execute a real-world project backup workflow: use piping to verify file existence, count files by type, generate a backup manifest, and create audit logs — all in one integrated command pipeline.

## References

- Microsoft. (2024). *Using redirection operators in CMD*. [https://example.com](https://example.com)
- Microsoft. (2024). *FIND command reference*. [https://example.com](https://example.com)
- Microsoft. (2024). *CMD pipeline concepts*. [https://example.com](https://example.com)

## Helpful Resources

- [Using Redirection in CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/redirection)
- [Piping and FIND](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/find)
- [TYPE Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/type)
- [FINDSTR for Advanced Searching](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/findstr)
- [CMD Pipeline Concepts](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)


---

<a id="cmd-lesson-4"></a>

# Lesson 4: Environment Variables, PATH, and Aliases

---

Estimated time: 30-45 minutes

## Learning Objectives

- Read environment variables with `%VARNAME%`
- Inspect and verify programs in the `PATH`
- Create temporary aliases with `doskey` and understand making them persistent via a startup script

## Materials

- Command Prompt

## Step-by-step Tasks

1. Show your username and home path with `echo %USERNAME%` and `echo %USERPROFILE%`.
2. Inspect `echo %PATH%` and identify whether `openscad` or `code` would be found.
3. Run `where openscad` and note the result.
4. Create a temporary alias: `doskey preview=openscad $*` and test `preview myfile.scad`.
5. Open your startup script (`notepad.exe autorun.bat`) and add the doskey line to make it persistent (advanced).

## Checkpoints

- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson CMD.4
## 3DMake in Practice: DOSKEY Macros for 3DMake

DOSKEY macros give you fast shortcuts for your most-used 3DMake commands:

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

- After step 3 you can determine whether a program will be found by `PATH`.

## Quiz - Lesson CMD.4

1. How do you print an environment variable?
2. What is the purpose of `PATH`?
3. How do you check whether `openscad` is available?
4. How do you create a temporary alias in CMD?
5. Where would you make an alias permanent?
6. True or False: Environment variable names in CMD are case-sensitive.
7. Explain why having a program in your PATH is useful compared to always using its full file path.
8. Write a command that would create a doskey alias called `slicer` for the OpenSCAD executable.
9. What file or technique would you use to make a doskey alias persist across CMD sessions?
10. Describe a practical benefit of using the `%TEMP%` directory for temporary files in a 3D printing workflow.
11. You have a custom batch script at `C:\Scripts\backup_models.bat` that you want to run from anywhere as `backup-now`. What steps would you take to make this work?
12. Explain the difference between setting an environment variable in the current session with `set` vs. using `setx` for permanence.
13. Design a strategy for managing multiple 3D printing projects, each with different tool paths and directories; show how to structure environment variables for each.
14. If a program is not found by `where`, what are the possible reasons, and how would you troubleshoot?
15. Describe how you would verify that your CMD autorun script is loading correctly and how to debug issues if aliases or environment variables don't appear after opening a new CMD session.

## Extension Problems

1. Add a folder to PATH for a test program (describe steps; do not change system PATH without admin).
2. Create a short autorun snippet that sets two aliases and test re-opening CMD.
3. Use `where` to list the path for several common programs.
4. Explore `%TEMP%` and create a file there.
5. Save a copy of your current PATH to a text file and examine it in your editor.
6. Create a CMD autorun script that loads custom aliases and environment variables for your 3D printing workflow; test it in a new session.
7. Build a "project profile" batch script that sets environment variables for CAD, slicing, and print directories; switch between profiles for different projects.
8. Write a batch script that audits your current environment variables and creates a summary report of what's set and why.
9. Design a custom alias system using doskey for common 3D printing commands; document the aliases and their purposes.
10. Create a profile migration guide: document how to export and import your CMD aliases and variables across machines for consistent workflows.
11. Implement a safe PATH modification script: create a utility that allows you to add/remove directories from PATH for the current session only; show how to make it permanent with `setx`.
12. Build a comprehensive autorun framework: create separate `.bat` files for aliases, environment variables, and helper macros; have your main autorun load all of them.
13. Develop an environment validation tool: write a batch script that checks whether all required programs (OpenSCAD, slicers, etc.) are accessible via PATH; report findings and suggest fixes.
14. Create a project-switching alias system: design a batch script that changes all environment variables and aliases based on the current project; test switching between multiple projects.
15. Build a troubleshooting guide: create a batch script that exports your current environment state (variables, aliases, PATH) to a timestamped file, allowing you to compare states before and after changes.

## References

- Microsoft. (2024). *Environment variables in CMD*. [https://example.com](https://example.com)
- Microsoft. (2024). *DOSKEY command reference*. [https://example.com](https://example.com)
- Microsoft. (2024). *WHERE command reference*. [https://example.com](https://example.com)

## Helpful Resources

- [Environment Variables in CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/set)
- [Understanding the PATH Variable](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/path)
- [DOSKEY Alias Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/doskey)
- [WHERE Command for Locating Programs](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/where)
- [SETX for Permanent Variables](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/setx)


---

<a id="cmd-lesson-5"></a>

# Lesson 5: Filling in the Gaps — Startup Scripts, History, and Useful Tricks

---

Estimated time: 30-45 minutes

## Learning Objectives

- Use history and abort commands (`doskey /history`, `F7`, `Ctrl+C`)
- Inspect and edit your CMD autorun script for persistent settings
- Run programs by full path using the `start` or call operator
- Handle common screen reader edge cases when using the terminal

## Materials

- Command Prompt and an editor (Notepad/VS Code)

## Step-by-step Tasks

1. Run several simple commands (e.g., `cd`, `dir /B`, `echo hi`) then press `F7` or run `doskey /history` to view them.
2. Use `F8` to search back through history, or use the up-arrow to re-run a previous command.
3. Practice aborting a long-running command with `Ctrl + C` (for example, `ping 8.8.8.8`).
4. Open your autorun script: `notepad.exe autorun.bat`; if it doesn't exist, create it with `echo. > autorun.bat`.
5. Add a persistent alias line to your autorun script (example: `doskey preview=openscad $*`), save, and configure CMD to use it by registering it in the registry (advanced).

## Checkpoints

- After step 2 you can re-run a recent command from history.
- After step 5 your alias should persist across CMD sessions.

## Quiz - Lesson CMD.5

1. How do you view the command history in CMD?
2. Which key combination aborts a running command?
3. What does `echo %CMDCMDLINE%` show?
4. How does the `start` command help run executables?
5. What is one strategy if terminal output stops being announced by your screen reader?
6. True or False: Using `Ctrl+C` permanently deletes any files created by the command you abort.
7. Explain the difference between pressing `F7` and running `doskey /history` in CMD.
8. If you add a doskey macro to your autorun script but it doesn't take effect after opening a new CMD window, what should you verify?
9. Write a command that would run a program at the path `C:\Program Files\OpenSCAD\openscad.exe` directly.
10. Describe a practical workflow scenario where having keyboard shortcuts (doskey macros) in your autorun script would save time.
11. Explain how to re-run the 5th command from your history using `F7` and selection, and what would happen if that command had file operations (creates/deletes).
12. Design an autorun initialization strategy that separates utilities for different projects; explain how you would switch between them.
13. Walk through a troubleshooting workflow: your screen reader stops announcing output after running a long command. What steps would you take to diagnose and resolve the issue?
14. Create a safety checkpoint system: before any destructive operation (mass delete, overwrite), how would you use autorun macros and history to verify the command is correct?
15. Develop a comprehensive capstone scenario: integrate everything from Command Line Lesson 0 through Command Line Lesson 5 (navigation, file operations, piping, environment setup, history) to design an automated 3D printing project workflow with error handling and logging.

## Extension Problems

1. Add a doskey macro and an environment variable change to your autorun script and document the behavior after reopening CMD.
2. Create a short batch script that automates creating a project folder and an initial `.scad` file.
3. Experiment with running OpenSCAD by full path using `start` and by placing it in PATH; compare results.
4. Practice redirecting `help` output to a file and reading it in Notepad for screen reader clarity.
5. Document three screen reader troubleshooting steps you used and when they helped.
6. Build a comprehensive CMD autorun script that includes aliases, environment variables, and helper macros for your 3D printing workflow.
7. Create a batch script that troubleshoots common CMD issues (missing commands, permission errors, command not found); test at least three scenarios.
8. Write a batch script that coordinates multiple tasks: creates a project folder, starts OpenSCAD, and opens a notes file.
9. Design a screen-reader accessibility guide for CMD: document commands, outputs, and accessible navigation patterns.
10. Develop an advanced CMD workflow: implement error handling, logging, and confirmation prompts for risky operations.
11. Implement an "undo" system using history: create a batch script that logs destructive commands (`del`, `move`, `copy /Y`) and allows you to review the last operation.
12. Build an autorun debugger: create a script that compares two CMD sessions' environment states (variables, aliases, macros) to identify what loaded/failed to load.
13. Develop a multi-project autorun manager: design a system where you can switch entire environments (paths, aliases, variables) for different 3D printing projects by running a single script.
14. Create a comprehensive accessibility analyzer: write a batch script that tests whether key CMD commands produce screen-reader-friendly output; document workarounds for commands that don't.
15. Design a complete capstone project: build an integrated automation suite that manages a 3D printing workflow (project setup, file organization, CAD/slicing tool automation, output logging, error recovery, and audit trails) with full error handling and documentation.

## References

- Microsoft. (2024). *CMD history and recall functionality*. [https://example.com](https://example.com)
- Microsoft. (2024). *Using CMD autorun scripts*. [https://example.com](https://example.com)
- Microsoft. (2024). *The START command for running executables*. [https://example.com](https://example.com)

## Helpful Resources

- [DOSKEY History and Recall](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/doskey)
- [CMD Autorun Scripts](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd)
- [START Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/start)
- [CMD History Navigation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)
- [Screen Reader Tips for CMD](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands-glossary)


---

<a id="cmd-lesson-6"></a>

# Lesson 6: Advanced Techniques — Batch Scripts, Subroutines, and Professional Workflows

---

**Duration:** 4-4.5 hours (for screen reader users)
**Prerequisites:** Complete Command Line Lesson 0 through Command Line Lesson 5
**Skill Level:** Advanced intermediate

## 3DMake in Practice: Automating Your Print Workflow

Use a batch script to fully automate a 3DMake workflow across multiple projects:

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

Save as `batch_print.bat` and run by typing `batch_print`. This script uses loops, conditionals, and output redirection — all from this lesson.


This lesson extends CMD skills to professional-level workflows. You'll learn to automate complex tasks, write reusable batch scripts, and integrate tools for 3D printing workflows.

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Create and run batch files (.bat files)
- Write subroutines that accept parameters
- Use loops to repeat tasks automatically
- Automate batch processing of 3D models
- Debug batch scripts when something goes wrong
- Create professional workflows combining multiple tools

---

## Batch Script Basics

### What's a Batch Script?

A batch file (`.bat`) contains multiple CMD commands that run in sequence. Instead of typing commands one by one, you put them in a file and run them all at once.

**Why use batch scripts?**

- Repeatability: Run the same task 100 times identically
- Documentation: Commands are written down for reference
- Complexity: Combine many commands logically
- Automation: Schedule scripts to run automatically

### Creating Your First Batch Script

**Step 1: Open a text editor**

```cmd
notepad.exe my-first-script.bat
```

**Step 2: Type this script**

```batch
@echo off
:: This is a comment - screen readers will read it
echo Script is running!
cd
dir /B
echo Script is done!
```

**Step 3: Save the file**

- In Notepad: Ctrl+S
- Make sure filename ends in `.bat`
- Save in an easy-to-find location (like Documents)

**Step 4: Run the script**

```cmd
my-first-script.bat
```

**What happens:**
CMD runs each command in sequence and shows output.

### Important: `@echo off`

On some scripts, each command is echoed before running. `@echo off` at the top suppresses this, showing only output — not the commands themselves.

```batch
@echo off
:: Now only output is shown, not each command
echo Hello!
```

---

## Variables and Parameters

### Using Variables

Variables store values you want to use later.

**Example script:**

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

A subroutine is reusable code that you can call with different inputs using `:label` and `call`.

**Example: A subroutine that lists files in a folder**

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
- `%~1` is the first argument passed to the subroutine
- `call :ListFolder "path"` calls the subroutine with a path
- `goto :eof` exits the subroutine (or script)

**Screen reader tip:** When you call a subroutine, CMD will announce the results just like any command.

---

## Loops - Repeating Tasks

### Loop Over Files

Imagine you have 10 SCAD files and want to print their names. You could do it 10 times manually, or use a loop.

**Example: Print every .scad file in a folder**

```batch
@echo off
for %%f in (*.scad) do (
    echo === File: %%f ===
    type %%f
    echo.
)
```

**What's happening:**

- `for %%f in (*.scad) do` iterates over each `.scad` file
- `%%f` is the loop variable (use `%f` in interactive CMD, `%%f` in batch files)
- Inside the parentheses, do something with each file

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

You have 10 OpenSCAD (.scad) files in a folder. You want to:

1. List them all
2. Check how many there are
3. For each one, verify it exists

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
- `for %%f in (...\*.scad)` = find all .scad files
- `if exist "%%f"` = check if file exists
- `%%~nxf` = just the filename with extension (not the full path)
- `set /A count+=1` = increment the counter

### Running the Script

1. Save as `batch-process.bat`
2. Edit `scadFolder` to match your real folder
3. Run it:

   ```cmd
   batch-process.bat
   ```

**Screen reader output:**

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

- After any command, `%errorlevel%` holds `0` for success or non-zero for failure
- `if %errorlevel% neq 0` checks for failure
- Handle the error gracefully

**Screen reader advantage:** Errors are announced clearly instead of crashing silently.

### Validating Input

**Example: Make sure a folder exists before processing**

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
- `goto :eof` exits the script early if error

---

## Debugging Batch Scripts

### Common Errors and Solutions

#### Error 1: "Command not found"

**Cause:** Typo in command name or program not in PATH

**Fix:** Check spelling and verify PATH

```batch
:: Wrong:
dri /B

:: Correct:
dir /B
```

#### Error 2: "Variable is empty"

**Cause:** Variable was never set or has a typo

**Fix:** Make sure variable is set before using it

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

Your screen reader will announce each step, so you know where errors happen.

---

## Creating Professional Workflows

### Example 1: Automated Project Setup

**Scenario:** You start a new 3D printing project regularly. Instead of creating folders manually:

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

- Prompts for a project name
- Creates folder structure for a new project
- Sets up subfolders for designs, output, notes
- Creates a README file automatically

### Example 2: Batch File Verification

**Scenario:** Before processing, verify all required files exist:

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

## Screen Reader Tips for Batch Scripts

### Making Script Output Readable

**Problem:** Script runs but output scrolls too fast or is hard to follow

**Solution 1: Save to file**

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

**Solution 3: Pause between major sections**

```batch
echo Pausing... Press any key to continue
pause > nul
```

Your screen reader will announce the pause, give you time to read output.

### Announcing Progress

**For long-running scripts:**

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

**Goal:** Create and run a simple batch script

**Steps:**

1. Create file: `notepad.exe hello.bat`
2. Type:

   ```batch
   @echo off
   echo Hello from my first CMD batch script!
   cd
   dir /B
   ```

3. Save and run: `hello.bat`

**Checkpoint:** You should see output for each command.

### Exercise 2: Script with a Variable

**Goal:** Use a variable to make the script flexible

**Steps:**

1. Create file: `notepad.exe smart-listing.bat`
2. Type:

   ```batch
   @echo off
   set targetFolder=C:\Users\YourName\Documents
   echo Listing contents of: %targetFolder%
   dir /B "%targetFolder%"
   ```

3. Edit `targetFolder` to a real folder on your computer
4. Run: `smart-listing.bat`

**Checkpoint:** You should see listing of that specific folder.

### Exercise 3: Subroutine

**Goal:** Create a reusable subroutine

**Steps:**

1. Create file: `notepad.exe navigate.bat`
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

**Checkpoint:** Both subroutine calls should work, showing contents of each folder.

### Exercise 4: Loop

**Goal:** Use a loop to repeat an action

**Steps:**

1. Create file: `notepad.exe repeat.bat`
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

**Checkpoint:** Should print "Iteration 1" through "Iteration 5".

### Exercise 5: Real-World Script

**Goal:** Create a useful script for a real task

**Steps:**

1. Create a folder: `mkdir C:\Users\YourName\Documents\TestFiles`
2. Create some test files:

   ```cmd
   echo test > C:\Users\YourName\Documents\TestFiles\file1.txt
   echo test > C:\Users\YourName\Documents\TestFiles\file2.txt
   echo test > C:\Users\YourName\Documents\TestFiles\file3.txt
   ```

3. Create script: `notepad.exe report.bat`
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

**Checkpoint:** Should show report of all files in the test folder.

---

## Quiz - Lesson CMD.6

1. What is a CMD batch script?
2. What file extension do CMD batch scripts use?
3. What is a variable in a batch script and how do you create one?
4. What is a subroutine (`:label`) and why would you use one?
5. How do you run a batch script?
6. What is a `for` loop and what does `for %%f in (*.scad) do` do?
7. What does `if exist` do?
8. How do you handle errors in a batch script?
9. When would you use `if %errorlevel% neq 0`?
10. What technique makes batch script output readable for screen readers?

---

## Extension Problems

1. **Auto-Backup Script:** Create a batch script that copies all files from one folder to another, announcing progress
2. **File Counter:** Write a subroutine that counts files by extension (.txt, .scad, .stl, etc.)
3. **Folder Cleaner:** Batch script that deletes files older than 30 days (with user confirmation)
4. **Project Template:** Subroutine that creates a complete project folder structure with all needed files
5. **Batch Rename:** Script that renames all files in a folder according to a pattern
6. **Log Generator:** Create a script that records what it does to a log file for later review
7. **Scheduled Task:** Set up a batch script to run automatically every day at a specific time
8. **File Verifier:** Check that all SCAD files in a folder have corresponding STL exports
9. **Report Generator:** Create a summary report of all projects in a folder
10. **Error Tracker:** Script that lists all commands that had errors and logs them with timestamps

---

## Important Notes

- **Always test scripts on small sets of files first** before running them on important data
- **Save your work regularly** — use version naming if possible
- **Test error handling** — make sure errors don't crash silently
- **Document your scripts** — use `::` comments so you remember what each part does
- **Backup before batch operations** — if something goes wrong, you have the original

---

## References

- **Microsoft CMD Batch Scripting Guide:** [https://example.com](https://example.com)
- **FOR Loop Documentation:** [https://example.com](https://example.com)
- **IF Statement Reference:** [https://example.com](https://example.com)
- **SET Variable Reference:** [https://example.com](https://example.com)

---

**Next Steps:** After mastering this lesson, explore advanced batch scripting, scheduled tasks, and 3D printing integration in the main curriculum.


---

<a id="cmd-unit-exam"></a>

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

Users who have completed Command Line Lesson 0 through Command Line Lesson 6 and need to demonstrate mastery of Command Prompt fundamentals.

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

2. Which command shows your current working directory in CMD?
   - A) `dir /B`
   - B) `cd` (with no arguments)
   - C) `pwd`
   - D) `whoami`

3. What does `%USERPROFILE%` represent in CMD?
   - A) The root directory
   - B) The current directory
   - C) The parent directory
   - D) Your home directory

4. How do you list only file names (not full details) in a screen-reader-friendly way?
   - A) `dir`
   - B) `dir /B`
   - C) `dir /L`
   - D) `type /B`

5. Which command creates a new empty file in CMD?
   - A) `mkdir filename`
   - B) `echo. > filename`
   - C) `touch filename`
   - D) `new filename`

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

8. Which command copies a file in CMD?
   - A) `move`
   - B) `del`
   - C) `copy`
   - D) `cd`

9. How do you rename a file from `oldname.txt` to `newname.txt` in CMD?
   - A) `copy oldname.txt newname.txt`
   - B) `move oldname.txt newname.txt`
   - C) `rename oldname.txt newname.txt`
   - D) Both B and C are correct

10. What is the purpose of `find` in CMD piping?
    - A) Find files in a directory
    - B) Search for text patterns within output
    - C) Find a string to copy to clipboard
    - D) Find which shell to use

11. Which key allows you to autocomplete a path in CMD?
    - A) `Ctrl + A`
    - B) `Ctrl + E`
    - C) `Tab`
    - D) `Space`

12. How do you copy text to the Windows clipboard from CMD?
    - A) `type filename > clipboard`
    - B) `type filename | clip`
    - C) `copy filename`
    - D) `type filename | paste`

13. What does `where openscad` do?
    - A) Opens the OpenSCAD application
    - B) Gets help about the openscad command
    - C) Locates the full path of the openscad executable
    - D) Lists all available commands

14. Which wildcard matches any single character?
    - A) `*`
    - B) `?`
    - C) `%`
    - D) `#`

15. What is the purpose of the `start` command?
    - A) Run a script or executable, optionally in a new window
    - B) Execute all commands in parallel
    - C) Combine multiple commands
    - D) Create an alias

16. How do you create a temporary alias (macro) in CMD?
    - A) `alias preview='openscad'`
    - B) `doskey preview=openscad $*`
    - C) `set preview=openscad`
    - D) `macro preview openscad`

17. How can doskey macros be made to persist across CMD sessions?
    - A) They are automatically saved
    - B) By adding them to a startup batch script registered as an autorun
    - C) By using the Windows Control Panel
    - D) Doskey macros cannot be made permanent

18. How do you abort a long-running command in CMD?
    - A) Press `Escape`
    - B) Press `Ctrl + X`
    - C) Press `Ctrl + C`
    - D) Press `Alt + F4`

19. What command shows the history of previously run commands in CMD?
    - A) `history`
    - B) `doskey /history`
    - C) `F7` (opens history popup)
    - D) Both B and C are correct

20. How do you make an environment variable permanent in CMD (for all future sessions)?
    - A) Use `set` in the terminal every time
    - B) Use `setx` to write it to the registry
    - C) Use the Windows Control Panel only
    - D) Environment variables cannot be made permanent in CMD

---

## Part B: Short Answer Questions (10 questions)

Answer each question in one to two sentences. Each question is worth 2 points.

1. Explain the difference between absolute and relative paths. Give one example of each.

2. Why is `dir /B` preferred over `dir` for screen reader users? Describe what flag you would add to list only files.

3. What is the purpose of redirecting output to a file, and give an example of when you would use `>` instead of `>>`?

>[!WARNING]
>`rmdir /S /Q C:\Documents\my_folder` permanently deletes the folder and **all its contents** with no confirmation prompt and no undo. Always run `dir /B C:\Documents\my_folder` first to confirm what you're about to destroy.

4. Describe what would happen if you ran `rmdir /S /Q C:\Documents\my_folder` and why this command should be used carefully.

5. How would you search for all files with a `.scad` extension in your current directory? Write the command.

6. Explain what happens when you pipe the output of `dir /B` into `clip`. What would you do next?

7. What is an environment variable, and give one example of how you might use it in CMD.

8. If a program is not in your `PATH`, what two methods could you use to run it from CMD?

9. Describe how you would open a file in Notepad and also add a line to it from CMD.

10. What is one strategy you would use if your screen reader stops announcing terminal output while using CMD?

---

## Part C: Hands-On Tasks (10 tasks)

Complete each task and capture evidence (screenshots, output files, or command transcripts). Each task is worth 3 points.

### Tasks 1-5: File System and Navigation

1. Create a folder structure `%USERPROFILE%\Documents\CMD_Assessment\Projects` using a single command. Capture the `dir /B` output showing the creation.

2. Create five files named `project_1.scad`, `project_2.scad`, `project_3.txt`, `notes_1.txt`, and `notes_2.txt` inside the `Projects` folder. Use wildcards to list only `.scad` files, then capture the output.

3. Copy the entire `Projects` folder to `Projects_Backup` using `xcopy /E /I`. Capture the `dir /B` output showing both folders exist.

4. Move (rename) `project_1.scad` to `project_1_final.scad`. Capture the `dir /B` output showing the renamed file.

5. Delete `notes_1.txt` and `notes_2.txt` using a single `del` command with wildcards. Capture the final `dir /B` output.

### Tasks 6-10: Advanced Operations and Scripting

1. Create a file called `my_data.txt` with at least four lines using `echo` and `>>`. Then read it with `type my_data.txt` and capture the output.

2. Use `find` to search for a keyword (e.g., "project") in `my_data.txt` and pipe the results to `clip`. Paste the results into Notepad and capture a screenshot.

3. List all files in the `Projects` folder and redirect the output to `projects_list.txt`. Open it in Notepad and capture a screenshot of the file.

4. Create a temporary `doskey` alias called `mydir` that runs `dir /B`, test it, and capture the output. Then explain what would be required to make it persistent.

5. Run `help dir` and redirect the output to `help_output.txt`. Open the file in Notepad and capture a screenshot showing at least the first page of help content.

---

## Grading Rubric

| Section         | Questions | Points Each | Total  |
|-----------------|-----------|-------------|--------|
| Multiple Choice | 20        | 1           | 20     |
| Short Answer    | 10        | 2           | 20     |
| Hands-On Tasks  | 10        | 3           | 30     |
| **Total**       | **40**    | -           | **70** |

**Passing Score:** 49 points (70%)

---

## Helpful Resources for Review

- [CMD Command Reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands-glossary)
- [Navigation and File System](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cd)
- [Using Pipes and Filtering](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/find)
- [DOSKEY and Aliases](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/doskey)
- [Screen Reader Accessibility Tips](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/)

---

## Submission Checklist

- [ ] All 20 multiple choice questions answered
- [ ] All 10 short answer questions answered (1-2 sentences each)
- [ ] All 10 hands-on tasks completed with evidence captured
- [ ] Files/screenshots organized and labeled clearly
- [ ] Submission includes this checklist

---

<a id="part-3-gitbash"></a>

# Part 3 — Git Bash

---

**Last Updated:** February 2026  
**Total Duration:** 30–45 hours of instruction and practice (for screen reader users)  
**Target Users:** Anyone using a screen reader — NVDA, JAWS, Windows Narrator, and Dolphin SuperNova are all covered throughout this curriculum.  
**Platform:** Git Bash on Windows (commands transfer directly to macOS Terminal and Linux)  
**Alternate to:** PowerShell curriculum and CMD curriculum (same concepts, Bash/Unix syntax)

*This single file contains the complete Git Bash Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional files are needed.*

---

## Table of Contents

| Section | Title | Estimated Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#gb-accessibility-guide) | NVDA, JAWS, Narrator, and SuperNova reference for Git Bash | 1–1.5 hours |
| [Tutorial: Git Bash Quick Start](#gb-tutorial) | Prompt orientation, core commands, path concepts | 30–45 minutes |
| [Lesson Pre: Your First Terminal](#gb-lesson-pre) | Installing Git Bash, opening it, first commands | 1.5–2 hours |
| [Lesson 0: Getting Started](#gb-lesson-0) | Paths, `~`, `./`, `../`, tab completion | 20–30 minutes |
| [Lesson 1: Navigation](#gb-lesson-1) | `pwd`, `cd`, `ls` and flags, wildcards | 1 class period |
| [Lesson 2: File and Folder Manipulation](#gb-lesson-2) | `touch`, `mkdir`, `cp`, `mv`, `rm`, `rmdir` | 30–45 minutes |
| [Lesson 3: Input, Output, and Piping](#gb-lesson-3) | `echo`, `cat`, `>`, `>>`, `|`, `clip`, `grep` | 1 class period |
| [Lesson 4: Environment Variables and Aliases](#gb-lesson-4) | `$VARNAME`, `PATH`, `which`, `alias`, `.bashrc` | 30–45 minutes |
| [Lesson 5: Filling in the Gaps](#gb-lesson-5) | `history`, `Ctrl+R`, `Ctrl+C`, `.bashrc`, `./` | 30–45 minutes |
| [Lesson 6: Advanced Techniques](#gb-lesson-6) | Shell scripts, functions, loops, professional workflows | 4–4.5 hours |
| [Unit Exam](#gb-unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 minutes |

**Total:** approximately 30–45 hours including practice exercises

---

## How to Use This File

**If you have never used a terminal before:** start with the Accessibility Guide, then the Tutorial, then Lesson Pre. Read in order from the top — each lesson builds on the previous one.

**If you have used a terminal (CMD or PowerShell) but not Git Bash:** read the Tutorial section for the key differences (Unix paths, forward slashes, `ls` vs `dir`, `cat` vs `type`). Then start at Lesson 0.

**If you are experienced with Bash on macOS or Linux:** jump to the Accessibility Guide for screen-reader-specific techniques, then skip to whatever lesson covers your gap.

**Reference while working:** the Accessibility Guide and Tutorial contain material you will return to throughout the curriculum. Bookmark those sections.

**CMD or PowerShell users:** this curriculum covers the same concepts as the CMD and PowerShell curricula but uses Bash/Unix syntax. Commands learned here transfer directly to macOS Terminal and Linux. Choose one pathway and stay consistent.

---

## Curriculum Rules (Read These First)

>[!IMPORTANT]
>**Rule 1 — Always know where you are.** Start every session with `pwd`. If you don't know your current path, you risk operating on the wrong files or folders.

**Rule 1 — Always know where you are.**  
Every session, first thing: `pwd`. If you do not know your path, you will get lost.

>[!WARNING]
>**There is no Recycle Bin in the terminal.** Files deleted with `rm` are permanently gone immediately — no undo, no recovery. Always run `ls -1` to confirm exactly what you're about to delete before running any `rm` command.

**Rule 2 — Check before you delete.**  
Before any `rm` or `rm -r` command: `ls -1` to confirm exactly what you are about to remove. Deleted files are gone immediately — there is no Recycle Bin in the terminal.

>[!TIP]
>Always use `ls -1` (the number **1**, not the letter L) — never bare `ls`. The `-1` flag outputs one name per line, which screen readers can follow reliably. Bare `ls` outputs a multi-column grid that is difficult to navigate audibly.

**Rule 3 — Use `ls -1` for listings.**  
Always `ls -1` — never bare `ls`. The `-1` flag gives one name per line, which all screen readers can follow reliably. (That is the number one, not the letter L.)

>[!TIP]
>When output is long or confusing, redirect it to a file: `command > output.txt`, then open with `notepad.exe output.txt`. This is always clearer than reading raw terminal output and works with all four screen readers.

**Rule 4 — When output is confusing, redirect to a file.**  
`command > output.txt` then `notepad.exe output.txt`. This works with all four screen readers and is always clearer than reading raw terminal output.

**Rule 5 — Save everything you create.**  
Keep all practice files in a dedicated learning folder: `mkdir -p ~/Documents/GitBash_Learning`

---



---

<a id="gb-accessibility-guide"></a>

# Screen Reader Accessibility Guide for Git Bash

---

Target Users: NVDA, JAWS, and other screen reader users  
Last Updated: 2026

This guide is used throughout the Git Bash Foundation curriculum to help screen reader users navigate and work efficiently with the terminal.

## Table of Contents

1. [Getting Started with Screen Readers](#gb-getting-started)
2. [NVDA-Specific Tips](#gb-nvda-tips)
3. [JAWS-Specific Tips](#gb-jaws-tips)
4. [General Terminal Accessibility](#gb-general-terminal)
5. [Working with Long Output](#gb-long-output)
6. [Keyboard Shortcuts Reference](#gb-shortcuts)
7. [Troubleshooting](#gb-troubleshooting)

<a id="gb-getting-started"></a>
## Getting Started with Screen Readers

### Which Screen Reader Should I Use?

Both NVDA and JAWS work well with Git Bash, but they have different strengths:

| Feature          | NVDA      | JAWS                 |
|------------------|-----------|----------------------|
| Cost             | Free      | Commercial (paid)    |
| Installation     | Simple    | Complex but thorough |
| Git Bash Support | Excellent | Excellent            |
| Learning Curve   | Gentle    | Steeper              |
| Customization    | Good      | Extensive            |

Recommendation: Start with NVDA if you're new to screen readers. Both will work for this curriculum.

Additional options: Dolphin SuperNova is a commercial screen reader/ magnifier popular in some education settings; Windows Narrator is built into Windows and useful for quick access without installing additional software. Choose based on availability and personal preference.

### Before You Start

1. Make sure your screen reader is running before opening Git Bash
2. Open Git Bash and let your screen reader read the window title and prompt
3. If you don't hear anything, press Alt+Tab to cycle windows and find Git Bash
4. Use your screen reader's screen review features to understand the layout

### What is Git Bash?

Git Bash is a terminal application for Windows that provides a Unix-style command-line experience (Bash shell). It is installed as part of Git for Windows, which is free software available at [https://git-scm.com/](https://git-scm.com/). When you open Git Bash, you get the same `bash`, `ls`, `grep`, `cat`, and other Unix tools used on Linux and macOS - but running on your Windows computer.

<a id="gb-nvda-tips"></a>
## NVDA-Specific Tips

NVDA is free and available from [https://www.nvaccess.org/](https://www.nvaccess.org/)

### Key Commands for Git Bash

| Command                | What It Does                                          |
|------------------------|-------------------------------------------------------|
| NVDA+Home              | Read the current line (your command or output)        |
| NVDA+Down Arrow        | Read from cursor to end of screen                     |
| NVDA+Up Arrow          | Read from top to cursor                               |
| NVDA+Page Down         | Read next page                                        |
| NVDA+Page Up           | Read previous page                                    |
| NVDA+F7                | Open the Review Mode viewer (can scroll through text) |
| NVDA+Shift+Right Arrow | Read next word                                        |
| NVDA+Shift+Down Arrow  | Read entire screen                                    |
| NVDA+End               | Jump to end of line                                   |
| NVDA+Home              | Jump to start of line                                 |

### Example: Reading Long Output

Scenario: You ran `ls` and it listed 50 files.

Solution with NVDA:

1. After the command finishes, press NVDA+Home to read the current line
2. Press NVDA+Down Arrow repeatedly to read all output
3. Or press NVDA+F7 to open Review Mode and use arrow keys to scroll

### Tip: Use `ls -1` for Screen Reader Friendly Listings

By default, `ls` in Git Bash may display files in columns. Use `ls -1` (the number one, not the letter L) to display one file per line - much easier to follow with a screen reader.

<a id="gb-jaws-tips"></a>
## JAWS-Specific Tips

JAWS is a commercial screen reader available from [https://www.freedomscientific.com/](https://www.freedomscientific.com/)

### Dolphin SuperNova

Dolphin SuperNova (commercial): [https://example.com](https://example.com) — provides speech and braille support and tightly integrated magnification. Refer to vendor docs for keyboard mappings; many users rely on review-mode features similar to NVDA/JAWS.

### Windows Narrator

Windows Narrator (built-in): [https://example.com](https://example.com) — good for quick checks and lightweight usage; Narrator command keys differ by Windows version (use Narrator key + arrow keys to read). Add Narrator to your workflow when a full third-party screen reader isn't available.

### Key Commands for Git Bash

| Command           | What It Does                    |
|-------------------|---------------------------------|
| Insert+Down Arrow | Read line by line downward      |
| Insert+Up Arrow   | Read line by line upward        |
| Insert+Page Down  | Read next page of text          |
| Insert+Page Up    | Read previous page of text      |
| Insert+End        | Jump to end of text on screen   |
| Insert+Home       | Jump to start of text on screen |
| Insert+Ctrl+Down  | Read to end of screen           |
| Insert+Ctrl+Up    | Read to beginning of screen     |
| Insert+F3         | Open JAWS menu                  |

### Example: Reading Long Output

Scenario: You ran `ls > list.txt` and saved output to a file.

Solution with JAWS:

1. Open the file: `notepad list.txt`
2. In Notepad, press Insert+Ctrl+Down to hear all content
3. Use Insert+Down Arrow to read line by line at your own pace

<a id="gb-general-terminal"></a>
## General Terminal Accessibility

### Understanding the Git Bash Layout

The Git Bash window contains:

1. Title bar: Window name (e.g., "MINGW64:/c/Users/YourName")
2. Content area: Command history and output
3. Prompt: Where you type (e.g., `YourName@COMPUTER MINGW64 ~$`)

Your screen reader reads from top to bottom, but focus is at the prompt (bottom).

### The Git Bash Prompt

The default Git Bash prompt looks like:

```bash
YourName@COMPUTERNAME MINGW64 ~/Documents
$
```

- `YourName` = your Windows username
- `COMPUTERNAME` = your computer's name
- `MINGW64` = the environment type (64-bit)
- `~/Documents` = your current location
- `$` = ready for input

Note: Paths in Git Bash use forward slashes (`/`) and your Windows `C:\Users\YourName` folder appears as `/c/Users/YourName` or simply `~`.

### Navigation Sequence

When you open Git Bash:

1. Your screen reader announces the window title
2. Then it announces the prompt line
3. Anything before the prompt is previous output
4. Anything after the prompt is where new output will appear

### Reading Output Effectively

Strategy 1: Immediate Output (Small Amount)

- Run a command
- Your screen reader announces output immediately
- This works well for short outputs (a few lines)

Strategy 2: Large Output (Many Lines)

- Redirect to a file: `command > output.txt`
- Open the file: `notepad output.txt`
- Read in Notepad (easier for long text)

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

Tells you how many items there are. If the count is over 20, use the file method.

<a id="gb-shortcuts"></a>
## Keyboard Shortcuts Reference

### All Users (Works in Git Bash Regardless of Screen Reader)

| Key        | Action                               |
|------------|--------------------------------------|
| Up Arrow   | Show previous command                |
| Down Arrow | Show next command                    |
| Tab        | Auto-complete file/folder names      |
| Shift+Tab  | Cycle backward through completions   |
| Home       | Jump to start of line                |
| End        | Jump to end of line                  |
| Ctrl+A     | Jump to start of line (alternate)    |
| Ctrl+E     | Jump to end of line (alternate)      |
| Ctrl+C     | Stop command                         |
| Ctrl+L     | Clear screen                         |
| Enter      | Run command                          |
| Ctrl+R     | Search command history interactively |

<a id="gb-troubleshooting"></a>
## Troubleshooting

### Problem 1: "I Can't Hear the Output After Running a Command"

1. Redirect to file: `command > output.txt` then `notepad output.txt`
2. Press End or Ctrl+End to go to end of text
3. Use Up Arrow to review previous command

### Problem 2: "Tab Completion Isn't Working"

1. Need at least one character - type `cd D` then Tab (not just `cd` then Tab)
2. Check if item exists - use `ls` first to see available items
3. Multiple matches - press Tab twice to list all options

### Problem 3: "'Command Not Found' Error"

1. Check spelling carefully
2. Git Bash uses Unix commands: use `ls` not `dir`, use `cat` not `type`
3. Verify the program is installed and in your PATH: `which openscad`

### Problem 4: "Paths Look Weird"

Git Bash converts Windows paths to Unix style:

- Windows: `C:\Users\YourName\Documents`
- Git Bash: `/c/Users/YourName/Documents` or `~/Documents`

Both refer to the same location. When opening files in Windows apps (like Notepad), you may need to use the Windows path format.

### Problem 5: "Command Runs Forever and Won't Stop"

Press Ctrl+C

### Problem 6: "I Need to Edit My Last Command"

1. Press Up Arrow to show previous command
2. Use arrow keys to move through it
3. Edit the command
4. Press Enter to run the modified version

## Pro Tips for Efficiency

### 1. Use `ls -1` for Screen Reader Friendly Listings

```bash
ls -1
```

One file per line - much easier to follow with a screen reader.

### 2. Create Aliases for Frequently Used Commands

```bash
alias la='ls -1a'
```

Add this to your `~/.bashrc` file to make it permanent.

### 3. Use Command History Effectively

```bash
history
```

Run a previous command by number:

```bash
!5
```

(Runs the 5th command in history)

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

For every new task:

1. Know where you are: `pwd`
2. See what's around: `ls -1`
3. Plan your next step: Think before typing
4. Run the command: Type and press Enter
5. Check the output: Use screen reader or redirect to file
6. Move forward: Next command or `cd` to next folder

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

- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/support/](https://www.freedomscientific.com/support/)
- Git for Windows (includes Git Bash): [https://git-scm.com/](https://git-scm.com/)
- Bash Manual: [https://www.gnu.org/software/bash/manual/](https://www.gnu.org/software/bash/manual/)


---

<a id="gb-tutorial"></a>

# Tutorial: Git Bash Quick Start

---

Estimated time: 30-45 minutes

Learning Objectives
- Launch Git Bash and identify the prompt
- Understand and use basic path notation (`~`, `./`, `../`)
- Use `pwd`, `ls -1`, and `cd` to navigate the filesystem
- Open files in an external editor and run simple commands

Materials
- A computer with Git Bash installed (install via [https://git-scm.com/](https://git-scm.com/))
- Access to a text editor (Notepad, VS Code)

## Pre-Requisite Knowledge
- Typing and basic text-editing skills
- Familiarity with file/folder concepts and basic OS navigation
- Basic screen-reading familiarity (if applicable)

## What is Git Bash?

Git Bash is a free terminal application for Windows that provides a Bash (Unix shell) environment. It is installed as part of Git for Windows. When you open Git Bash, you can use Unix commands like `ls`, `cat`, `grep`, and `echo` - the same commands used on Linux and macOS - right on your Windows computer.

Git Bash is useful for:
- Running CLI programs (like OpenSCAD, slicers, or 3DMake)
- Navigating the filesystem with keyboard-only commands
- Automating repetitive tasks with scripts
- Accessibility: works cleanly with NVDA, JAWS, and other screen readers

## What We'll Do and Why

You'll use Git Bash to run CLI programs, navigate the filesystem, and manipulate files - tasks that are especially efficient when using a keyboard or a screen reader.

## Quick Tutorial & Core Concepts

### Paths and Navigation

* `~` - home directory (e.g., `/c/Users/YourName`)
* `.` - current directory
* `..` - parent directory
* `./` - current directory shortcut (used to run scripts: `./script.sh`)
* `../` - parent directory shortcut
* Use Tab to autocomplete files and folders

Git Bash uses forward slashes (`/`) for paths, just like Linux. Your Windows `C:\Users\YourName` folder is accessible as `/c/Users/YourName` or simply `~`.

### Useful Commands (Examples)

```bash
pwd                # show current directory
ls -1              # list files, one per line (screen-reader friendly)
cd path/to/dir     # change directory
whoami             # current user
```

### Wildcards

* `*` matches zero or more characters
* `?` matches a single character

Use `ls *.scad` to filter by extension, for example.

## Common Operations

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

Use `|` to pipe output and `>` to redirect into files.

### Editing and Running Programs

```bash
notepad file.txt         # open in Notepad (Windows)
code file.txt            # open in VS Code (if in PATH)
./script.sh              # run a script in the current directory
chmod +x script.sh       # make a script executable
```

## Screen-Reader Friendly Tips

- Prefer `ls -1` for name-only, one-per-line output.
- Filter lists with `grep`: `ls -1 ~/Documents | grep "\.scad$"` (files only ending in .scad).
- Redirect very long outputs to a file and open it in an editor.

## Error Handling and Control

- Abort a running command: `Ctrl+C`
- View history: Up/Down arrows or `history`
- Clear screen: `clear` (or `Ctrl+L`)
- If an error is long, read the first few lines for the gist and copy short snippets into a file to examine.

## Environment Variables & PATH

Environment variables configure your session. `PATH` tells the shell where to find executables.

```bash
echo $PATH
echo $HOME
echo $USER
```

To add a directory to PATH for the current session:
```bash
export PATH="$PATH:/path/to/my/tools"
```

To make it permanent, add that line to `~/.bashrc`.

## Running CLI Applications and Archives

To extract ZIP archives in Git Bash:

```bash
# Unzip a file
unzip file.zip -d destinationfolder

# Or use Windows' built-in tool (from Git Bash):
powershell.exe Expand-Archive -Path file.zip -DestinationPath folder
```

## Aliases and Cross-Platform Notes

Git Bash provides Unix commands that work identically on Linux and macOS. This means your Git Bash skills transfer directly if you ever work on a Mac or Linux system.

Useful aliases to add to `~/.bashrc`:
```bash
alias ll='ls -la'
alias la='ls -1a'
alias ..='cd ..'
alias ...='cd ../..'
```

## Step-by-step Tasks (Hands-On)
1. Open Git Bash; listen for the prompt and current path.
2. Run `pwd` to confirm your location.
3. Run `ls -1` in your home directory and note the output.
4. Practice `cd Documents`, `cd ../`, and `cd ~` to move between folders.
5. Create and open a file: `touch example.txt && notepad example.txt` (or `code example.txt`).

## Checkpoints
- After step 3 you should be able to state your current directory.
- After step 5 you should be able to create and open a text file from Git Bash.

## Quick Quiz (10 questions)
1. What command prints your current directory?
2. What does `~` represent?
3. How do you list only names, one per line?
4. How do you go up one directory level?
5. How would you open `notes.txt` in Notepad from Git Bash?
6. True or False: The pipe operator `|` sends output to a file.
7. Explain why running a script requires `chmod +x` first.
8. What is the difference between running a script with `./script.sh` versus `bash script.sh`?
9. Describe how you would handle a very long command output when using a screen reader.
10. What does the `PATH` environment variable do, and why is it important when running programs like OpenSCAD?

## Extension Problems
1. Create a folder `OpenSCADProjects` in Documents and verify its contents.
2. Create three files named `a.scad`, `b.scad`, `c.scad` and list them with a wildcard.
3. Save `ls -1 ~/Documents` output to `doclist.txt` and open it.
4. Try tab-completion in a deeply nested folder and note behavior.
5. Capture `pwd` output into a file and open it: `pwd > cwd.txt && notepad cwd.txt`.
6. Build an automated setup script that creates a complete project directory structure, initializes placeholder files, and generates a README.
7. Create a Git Bash cheat sheet for your most-used commands; organize by category (navigation, files, scripting, troubleshooting).
8. Write a non-visual tutorial for Git Bash basics; use audio descriptions and keyboard-only navigation as the primary learning method.
9. Develop a workflow automation script: combines multiple Git Bash concepts (folders, aliases, piping) to solve a real 3D printing task.
10. Create a Git Bash proficiency self-assessment: list all concepts covered, provide test commands for each, and reflect on what you learned.

## References
- Git for Windows. (2024). *Git Bash*. [https://gitforwindows.org/](https://gitforwindows.org/)
- GNU. (2024). *Bash reference manual*. [https://www.gnu.org/software/bash/manual/bash.html](https://www.gnu.org/software/bash/manual/bash.html)
- The Linux Documentation Project. (2024). *Bash Beginners Guide*. [https://tldp.org/LDP/Bash-Beginners-Guide/html/](https://tldp.org/LDP/Bash-Beginners-Guide/html/)

## Helpful Resources
- [Git for Windows](https://gitforwindows.org/)
- [Bash Reference Manual (GNU)](https://www.gnu.org/software/bash/manual/bash.html)
- [Bash Beginners Guide](https://tldp.org/LDP/Bash-Beginners-Guide/html/)
- [GNU Coreutils](https://www.gnu.org/software/coreutils/manual/)


Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://example.com](https://example.com) and [https://example.com](https://example.com) for vendor documentation.


---

<a id="gb-lesson-pre"></a>

# Lesson Pre: Your First Terminal — Screen Reader Navigation Fundamentals

---

Duration: 1.5-2 hours (for screen reader users)  
Prerequisites: None - this is the starting point  
Accessibility Note: This lesson is designed specifically for screen reader users (NVDA, JAWS)  
> [!IMPORTANT]
>  Git Bash uses Unix/bash commands, different from Windows CMD/PowerShell

## What is Git Bash?

Git Bash is a Unix/Linux shell running on Windows. It gives you bash commands (same as macOS and Linux) while staying on your Windows computer.

Why learn this?
- Faster and more precise work (especially for 3D printing scripts and automation)
- Essential for programming and using tools like OpenSCAD
- Accessibility: Git Bash works perfectly with screen readers
- Transferable: Same commands work on macOS and Linux
- Industry-standard: Professional developers use this everywhere

## Installing and Opening Git Bash
### 3DMake: Your First Real-World Goal

**3DMake** ([github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)) is a free, accessibility-first command-line tool for designing and 3D-printing models entirely from the terminal — no mouse required. Every Git Bash skill in this curriculum directly supports a real 3DMake workflow.

Here is the end goal — one command that builds your OpenSCAD model, slices it, and sends it to the printer:

```bash
# Navigate to your project folder
cd ~/Documents/3d_projects/my_cube

# Build, slice, and print in a single command
3dm build slice print
```

Keep this goal in mind as you work through each lesson.


## Installing and Opening Git Bash

### Installation (If Not Already Installed)

1. Download from: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Run the installer
3. Accept defaults (all options work fine)
4. Installation takes ~5 minutes

### Opening Git Bash

Method 1: Search (Easiest)
1. Press the Windows key alone
2. You should hear "Search"
3. Type: `Git Bash`
4. You'll hear search results appear
5. Press Enter to open

Method 2: From File Explorer
1. Open File Explorer
2. Navigate to any folder
3. Right-click on the folder
4. Look for "Git Bash Here"
5. Press Enter

### First Connection: Understanding the Prompt

When Git Bash opens, your screen reader will announce the window title and then the prompt. 

What you'll hear (typical example):
```
user@computer MINGW64 ~
$
```

What this means:
- `user` = Your username
- `@computer` = Your computer name
- `MINGW64` = Version of Git Bash
- `~` = Your current location (home directory)
- `$` = The prompt is ready for your input

> [!IMPORTANT]
>  Your cursor is blinking right after the `$`. This is where you type.

## Your First Commands (Screen Reader Edition)

### Command 1: "Where Am I?" - `pwd`

What it does: Tells you your current location

Type this:
```bash
pwd
```

Press Enter

What you'll hear:
Your screen reader will announce the current path, something like:
```
/c/Users/YourName
```

Understanding paths in Git Bash:
- Paths use forward slashes: `/c/Users/YourName/Documents`
- `/c/` means the C: drive (Windows drive)
- This is Unix-style, same as macOS and Linux
- Think of it like folders inside folders: `/c/` (main drive) -> `Users` -> `YourName` -> `Documents`

### Command 2: "What's Here?" - `ls`

What it does: Lists all files and folders in your current location

Type this:
```bash
ls
```

Press Enter

What you'll hear:
Your screen reader will announce a list of file and folder names, one per line. Perfect for screen readers!

### Command 3: "Go There" - `cd Documents`

What it does: Changes your location (navigates to a folder)

Type this:
```bash
cd Documents
```

Press Enter

What you'll hear:
The prompt changes to show your new location. You might hear something like:
```
user@computer MINGW64 ~/Documents
$
```

Practice navigation:
1. Run `pwd` to confirm you're in Documents
2. Run `ls` to see what files are in Documents
3. Try going back: `cd ..` (the `..` means "go up one level")
4. Run `pwd` again to confirm
5. Go back to Documents: `cd Documents`

## Creating and Viewing Files

### Create a Simple File

Type this:
```bash
echo "Hello, Git Bash!" > hello.txt
```

What this does:
- `echo` sends text to the screen (or file)
- `"Hello, Git Bash!"` is the text
- `>` redirects it to a file called `hello.txt`

### Read the File Back

Type this:
```bash
cat hello.txt
```

What you'll hear:
Your screen reader announces:
```
Hello, Git Bash!
```

### Open and Edit the File

Type this:
```bash
notepad.exe hello.txt
```

This opens the file in Notepad where you can edit it with your screen reader.

## Essential Keyboard Shortcuts

These work in Git Bash and are crucial for screen reader users:

| Key Combination | What It Does                                                 |
|-----------------|--------------------------------------------------------------|
| Up Arrow        | Shows your previous command (press again to go further back) |
| Down Arrow      | Shows your next command (if you went back)                   |
| Tab             | Auto-completes folder/file names                             |
| Ctrl+C          | Stops a running command                                      |
| Ctrl+L          | Clears the screen                                            |
| Ctrl+A          | Go to beginning of line                                      |
| Ctrl+E          | Go to end of line                                            |
| Enter           | Runs the command                                             |

Screen reader tip: These all work perfectly with your screen reader. Try them!

## Screen Reader-Specific Tips

### NVDA Users

1. Reading Command Output:
   - Use NVDA+Home to read the current line
   - Use NVDA+Down Arrow to read to the end of the screen
   - Use NVDA+Page Down to read the next page

2. Reviewing Text:
   - Use NVDA+Shift+Page Up to review text above

### JAWS Users

1. Reading Output:
   - Use Insert+Down Arrow to read line-by-line
   - Use Insert+Page Down to read by page
   - Use Insert+End to jump to the end of text

2. Reading All Text:
   - Use Insert+Down Arrow repeatedly
   - Or use Insert+Ctrl+Down to read to the end

### Common Issue: "I Can't Hear the Output"

Problem: You run a command but don't hear the output

Solutions:
1. Make sure your cursor is at the prompt (try pressing End or Ctrl+E)
2. Use Up Arrow to go back to your previous command and review it
3. Try redirecting to a file: `command > output.txt` then open the file
4. In NVDA: Try pressing NVDA+F7 to open the Review Mode viewer

## Practice Exercises

Complete these in order. Take your time with each one:

### Exercise 1: Basic Navigation
1. Open Git Bash
2. Run `pwd` and note your location
3. Run `ls` and listen to what's there
4. Try `cd Documents` or another folder
5. Run `pwd` to confirm your new location
6. Run `ls` in this new location

Goal: You should be comfortable knowing where you are and what's around you

### Exercise 2: Using Tab Completion
1. In your home directory, type `cd D` (just the letter D)
2. Press Tab
3. Git Bash should auto-complete to a folder starting with D
4. Repeat with other folder names
5. Try typing a longer name: `cd Down` and Tab

Goal: Tab completion should feel natural

### Exercise 3: Creating and Viewing Files
1. Create a file: `echo "Test content" > test.txt`
2. View it: `cat test.txt`
3. Create another: `echo "Line 2" > another.txt`
4. List both: `ls *.txt`

Goal: You understand create, view, and list operations

### Exercise 4: Going Up Levels
1. Navigate into several folders: `cd Documents`, then `cd folder1`, etc.
2. From deep inside, use `cd ..` multiple times to go back up
3. After each `cd ..`, run `pwd` to confirm your location

Goal: You understand relative navigation with `..`

### Exercise 5: Redirecting Output
1. Create a list: `ls > directorylist.txt`
2. Open it: `notepad.exe directorylist.txt`
3. Read it with your screen reader
4. Close Notepad
5. Verify the file exists: `ls | grep directory`

Goal: You can save long outputs to files for easier reading

## Checkpoint Questions

After completing this lesson, you should be able to answer:

1. What does `pwd` do?
2. What does `ls` do?
3. Why do we use `ls` for listings?
4. What path are you in right now?
5. How do you navigate to a new folder?
6. How do you go up one level?
7. What's the Tab key for?
8. What does `echo "text" > file.txt` do?
9. How do you read a file back?
10. How do you stop a command that's running?

You should be able to answer all 10 with confidence before moving to Bash Lesson 0.

## Common Questions

Q: Is Git Bash the same as Command Prompt or PowerShell?
A: No. Git Bash uses Unix/bash commands. CMD and PowerShell use Windows commands. This curriculum teaches bash (Unix) style.

Q: Why is my screen reader not reading the output?
A: This is common. Use `command > file.txt` to save output to a file, then open it with Notepad for reliable reading.

Q: What if I type something wrong?
A: Just press Enter and you'll see an error message. Type the correct command on the next line. No harm done!

Q: How do I get help with a command?
A: Type `man command-name` (we'll cover this in Bash Lesson 0)

Q: Why do paths look different in Git Bash?
A: Git Bash uses Unix-style paths with forward slashes, not Windows backslashes. Don't worry - you'll get used to it quickly.

## Path Comparison: Windows vs Git Bash

| Style    | Example                   | Where Used                        |
|----------|---------------------------|-----------------------------------|
| Windows  | `C:\Users\Name\Documents` | CMD, PowerShell, Windows Explorer |
| Git Bash | `/c/Users/Name/Documents` | Git Bash, macOS Terminal, Linux   |

In Git Bash:
- `C:\` becomes `/c/`
- Backslashes `\` become forward slashes `/`
- Otherwise identical

## Next Steps

Once you're comfortable with these basics:
- Move to Bash Lesson 0: Getting Started for deeper path understanding
- Then continue through Bash Lesson 1 through Bash Lesson 5 for full terminal mastery

## Resources

- Git Bash Installation Guide: [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Bash Basics: [https://www.gnu.org/software/bash/manual/bash.html#Basic-Shell-Features](https://www.gnu.org/software/bash/manual/bash.html#Basic-Shell-Features)
- NVDA Screen Reader: [https://www.nvaccess.org/](https://www.nvaccess.org/)
- JAWS Screen Reader: [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)

<a id="ps-troubleshooting"></a>
## Troubleshooting

| Issue                      | Solution                                                             |
|----------------------------|----------------------------------------------------------------------|
| Git Bash won't open        | Make sure it's installed; search for "Git Bash" in Start menu        |
| Can't hear the output      | Try redirecting to a file: `command > output.txt`                    |
| Tab completion not working | Make sure you typed at least one character before pressing Tab       |
| Command not found          | Make sure you spelled it correctly; try `man` for available commands |
| Stuck in a command         | Press Ctrl+C to stop it                                              |

Still stuck? The checkpoint questions and exercises are your best teacher. Work through them multiple times until comfortable.



Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) and [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) for vendor documentation.


---

<a id="gb-lesson-0"></a>

# Lesson 0: Getting Started — Layout, Paths, and the Shell

---

Estimated time: 20-30 minutes

## Learning Objectives
- Launch Git Bash and locate the prompt
- Understand Unix-style path notation and shortcuts (`~`, `./`, `../`)
- Use tab completion to navigate quickly

## Materials
- Computer with Git Bash installed
- Editor (Notepad/VS Code)

## Step-by-step Tasks
1. Open Git Bash and note the prompt (it includes the current path).
2. Run `pwd` and say or note the printed path.
3. Use `ls` to list names in your home directory.
4. Practice `cd Documents`, `cd ../` and `cd ~` until comfortable.
5. Try tab-completion: type `cd ~/D` and press Tab.

## Checkpoints
- Confirm you can state your current path and move to `Documents`.

## Quiz - Lesson GitBash.0
## 3DMake Quick-Start: Your First Real Project

You now know enough Git Bash to set up a real 3DMake project. Do this now — it is the fastest path to a printed object.

**Step 1 — Download and run the 3DMake setup wizard:**

```bash
# Go to your Downloads folder (where you extracted 3dmake)
cd ~/Downloads/3dmake

# Run the guided setup (answer the questions about your printer)
./3dm setup
```

**Step 2 — Create your first project:**

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

You just used `mkdir`, `cd`, and `ls -1` on a real project. You are ready to print.


## Checkpoints
- Confirm you can state your current path and move to `Documents`.

## Quiz - Lesson GitBash.0

1. What is a path?
2. What does `~` mean?
3. How do you autocomplete a path?
4. How do you go up one directory?
5. What command lists file names?
>[!NOTE]
>Git Bash uses **forward slashes** (`/`) in paths, not Windows-style backslashes (`\`). For example: `/c/Users/YourName/Documents`. This is the Unix convention and transfers directly to macOS and Linux.

6. True or False: Git Bash uses backslashes (`\`) in paths like Windows CMD.
7. Explain the difference between an absolute path and a relative path.
8. If you are in `/c/Users/YourName/Documents` and you type `cd ../`, where do you end up?
9. What happens when you press Tab while typing a folder name in Git Bash?
10. Describe a practical reason why understanding paths is important for a 3D printing workflow.
11. What does `./` mean in a path, and when would you use it?
>[!NOTE]
>When a folder name contains spaces, always wrap the full path in **double quotes**: `cd "My Projects"`. Without quotes, the shell interprets the space as a separator between two separate arguments.

12. If a folder path contains spaces (e.g., `My Projects`), how do you navigate to it with `cd`?
13. Explain what the prompt `YourName@COMPUTER MINGW64 ~/Documents $` tells you about your current state.
14. How would you navigate to your home directory from any location using a single command?
15. What is the advantage of using relative paths (like `../`) versus absolute paths in automation scripts?

## Extension Problems
1. Create a nested folder and practice `cd` into it by typing partial names and using Tab.
2. Use `ls -la` to list all files including hidden ones in a folder.
3. Save `pwd` output to a file and open it in Notepad.
4. Try `cd` into a folder whose name contains spaces; observe how quotes are handled.
5. Create a short note file and open it from Git Bash.
6. Build a folder structure that mirrors your project organization; navigate to each level and document the path.
7. Create a script that prints your current path and the total number of files in it; run it from different locations.
8. Investigate special paths (e.g., `$HOME`, `$USER`); write down what each contains and when you'd use them.
9. Compare absolute vs. relative paths by navigating to the same folder using each method; explain which is easier for automation.
10. Create a bash function that changes to a frequently-used folder and lists its contents in one command; test it from different starting locations.
11. Navigate to three different locations and at each one note the prompt, the path from `pwd`, and verify you understand what each shows.
12. Create a complex folder tree (at least 5 levels deep) and navigate it using only relative paths; verify your location at each step.
13. Document all shortcuts you know (`~`, `./`, `../`, `$HOME`) and demonstrate each one works as expected.
14. Write a guide for a peer on how to understand the Git Bash prompt and path notation without using GUI file explorer.
15. Create a troubleshooting flowchart: if someone says "I don't know where I am," what commands do you give them to find out?

## References

- GNU. (2024). *Bash Manual*. [https://example.com](https://example.com)
- Git SCM. (2024). *Git Bash documentation*. [https://example.com](https://example.com)
- Linux Foundation. (2024). *The Linux Command Line*. [https://example.com](https://example.com)

## Helpful Resources

- [Bash Manual - Navigation](https://www.gnu.org/software/bash/manual/htmlnode/Bourne-Shell-Builtins.html)
- [Git Bash Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Linux Path Guide](https://linuxcommand.org/lc3lts0020.php)
- [Understanding Bash Prompts](https://www.gnu.org/software/bash/manual/htmlnode/Controlling-the-Prompt.html)
- [Tab Completion in Bash](https://www.gnu.org/software/bash/manual/htmlnode/Commands-For-Completion.html)


---

<a id="gb-lesson-1"></a>

# Lesson 1: Navigation — Moving Around Your File System

---

**Duration:** 1 class period
**Prerequisite:** Bash Lesson 0 (Getting Started)

## Learning Objectives
By the end of this lesson, you will be able to:

- Use `pwd` to print your current location
- Use `cd` to move between directories
- Use `ls` (and its flags) to list files and folders
- Use wildcards `*` and `?` to filter listings
- Navigate relative vs. absolute paths
- Search for files by name and extension

## Materials
- Git Bash
- Text editor (Notepad or VS Code)

---

## Commands Covered in This Lesson

| Command          | What It Does                                           |
|------------------|--------------------------------------------------------|
| `pwd`            | Print Working Directory - shows where you are          |
| `cd path`        | Change Directory - move to a new location              |
| `ls`             | List - shows files and folders in current location     |
| `ls -1`          | List names only, one per line (screen reader friendly) |
| `ls -1 -F`       | List names with type indicators (/ for directories)    |
| `ls *.extension` | List files matching a pattern                          |

---

## `pwd` - Where Am I?

Type `pwd` and press `Enter`. Git Bash prints the full path to your current location.

```bash
pwd
# Output: /c/Users/YourName
```

**When to use:** Always run this if you're unsure of your current location.

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

Use `ls -1` for screen reader compatibility — names only, one per line.

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

Wildcards help you find files without typing the full name.

**`*` (asterisk)** matches any number of characters:
```bash
# List all .scad files
ls *.scad

# List all files starting with "part"
ls part*

# List all files ending with "_final"
ls *_final*
```

**`?` (question mark)** matches exactly one character:
```bash
# Find files like model1.scad, model2.scad (but not model12.scad)
ls model?.scad
```

---

## Step-by-step Practice

1. Run `pwd` and confirm your location
2. Move to `Documents`: `cd Documents`
## 3DMake in Practice: Navigating a Project

Navigation commands are exactly what you need to explore and manage 3DMake projects:

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

Tab completion makes navigation fast: type `cd ~/Doc` and press Tab.


---

## Step-by-step Practice

1. Run `pwd` and confirm your location
2. Move to `Documents`: `cd Documents`
3. Confirm you moved: `pwd`
4. List files and folders: `ls -1`
5. List only files: `ls -1 -p | grep -v /`
6. Go back up: `cd ..`
7. Search for files: `ls *.txt`

---

## Checkpoints

After this lesson, you should be able to:
- [ ] Navigate to any folder using `cd`
- [ ] Confirm your location with `pwd`
- [ ] List files and folders with `ls -1`
- [ ] Use wildcards to find files by pattern
- [ ] Move between absolute and relative paths confidently

## Quiz - Lesson GitBash.1

1. What does `pwd` show?
2. How do you list directories only with `ls`?
3. What wildcard matches any number of characters?
4. How do you list files with the `.scad` extension?
5. Give an example of an absolute path and a relative path.
6. True or False: The `*` wildcard matches exactly one character.
7. Explain the difference between `ls -1` and `ls -1 -d */`.
8. Write a command that would list all `.txt` files in your Documents folder using a wildcard.
9. How would you search for files containing "part" in their name across multiple files?
10. Describe a practical scenario where using wildcards saves time in a 3D printing workflow.
11. What happens when you use `ls model?.scad` versus `ls model*.scad`?
12. How would you navigate to a folder whose name contains both spaces and special characters?
13. If you're in `~/Documents/Projects/3D` and you want to go to `~/Documents/Resources`, what command would you use?
14. Write a command sequence that navigates to the Downloads folder, lists only files, then returns to home.
15. Explain the purpose of using `ls -1` specifically in a screen reader context.

## Extension Problems
1. Write a one-line command that lists `.scad` files and saves to `scad_list.txt`.
2. Use `ls -1 ~/Documents | less` to page through long listings.
3. Combine `ls` with `grep` to search for a filename pattern.
4. Create a shortcut alias in the session for a long path and test it.
5. Practice tab-completion in a directory with many similarly named files.
6. Build a bash script that recursively lists all `.scad` and `.stl` files in a directory tree; save the results to a file.
7. Compare the output of `ls`, `ls -1`, `ls -la`, and `ls -1 -d */` to understand the flags; document what each command does.
8. Create a filtering command that displays only files modified in the last 7 days; test it on your documents folder.
9. Write a non-visual guide to Git Bash navigation; include descriptions of common patterns and how to verify directory contents audibly.
10. Develop a navigation workflow for a typical 3D printing project: move between CAD, slicing, and print-log folders efficiently; document the commands.
11. Create a complex wildcard search: find all files in a folder and subfolders that match multiple patterns (e.g., `*_v1.*` or `*_final.*`).
12. Build a script that navigates through a folder tree, counts files at each level, and reports the structure.
13. Document the output differences between `ls`, `ls -1`, `ls -la`, and `ls -1 -d */`; explain when to use each.
14. Create a navigation "cheat sheet" as a bash script that prints common paths and how to navigate to them.
15. Design a project folder structure on your computer, document each path, then create a script that validates all folders exist.

## References

- GNU. (2024). *ls command reference*. [https://example.com](https://example.com)
- GNU. (2024). *Bash wildcards and globbing*. [https://example.com](https://example.com)
- GNU. (2024). *Navigation best practices in Bash*. [https://example.com](https://example.com)

## Helpful Resources

- [ls Command Reference](https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html)
- [Bash Wildcards and Globbing](https://www.gnu.org/software/bash/manual/htmlnode/Pattern-Matching.html)
- [Navigation Best Practices](https://linuxcommand.org/lc3lts0020.php)
- [Relative and Absolute Paths in Bash](https://linuxize.com/post/linux-cd-command/)
- [Screen Reader Tips for Git Bash](https://www.nvaccess.org/documentation/)


---

<a id="gb-lesson-2"></a>

# Lesson 2: File and Folder Manipulation

---

Estimated time: 30-45 minutes

## Learning Objectives
- Create, copy, move, and delete files and folders from Git Bash
- Use `touch`, `mkdir`, `cp`, `mv`, `rm`, and `rmdir` safely
- Understand when operations are permanent and how to confirm results

## Materials
- Git Bash
- Small practice folder for exercises

## Step-by-step Tasks
1. Create a practice directory: `mkdir ~/Documents/GitBash_Practice` and `cd` into it.
2. Create two files: `touch file1.txt` and `touch file2.txt`.
3. Copy `file1.txt` to `file1_backup.txt` with `cp` and confirm with `ls -1`.
4. Rename `file2.txt` to `notes.txt` using `mv` and confirm.
5. Delete `file1.txt` with `rm` and verify the backup remains.

## Checkpoints
- After step 3 you should see both the original and the backup file.
## 3DMake in Practice: Organizing Your Projects

File management commands are essential for 3DMake project organization:

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
- After step 3 you should see both the original and the backup file.

## Quiz - Lesson GitBash.2

1. How do you create an empty file from Git Bash?
2. What command copies a file?
3. How do you rename a file?
4. What does `rm -r` do?
>[!WARNING]
>`rm` permanently deletes files with no undo and no Recycle Bin. There is no recovery from Git Bash. Always run `ls -1` first to confirm exactly what you're targeting, especially when using wildcards.

5. Why is `rm` potentially dangerous?
6. True or False: `cp` requires the `-r` flag to copy both files and folders.
7. Explain the difference between `rm` and `rmdir`.
8. If you delete a file with `rm`, can you recover it from Git Bash?
9. Write a command that would copy an entire folder and all its contents to a new location.
10. Describe a practical safety check you would perform before running `rm -r` on a folder.
11. What happens if you `cp` a file to a destination where a file with the same name already exists? How would you handle this safely?
12. Compare `mv old_name.txt new_name.txt` vs `mv old_name.txt ~/Documents/new_name.txt`. What is the key difference?
13. Design a workflow to safely delete 50 files matching the pattern `*.bak` from a folder containing 500 files. What commands and verifications would you use?
14. Explain how you could back up all `.scad` files from a project folder into a timestamped backup folder in one command.
15. When organizing a 3D printing project, you need to move completed designs to an archive folder and delete failed prototypes. How would you structure this as a safe, auditable process?

## Extension Problems
1. Create a folder tree and copy it to a new location with `cp -r`.
2. Write a one-line command that creates three files named `a`, `b`, `c` and lists them.
3. Move a file into a new folder and confirm the move.
4. Use wildcards to delete files matching a pattern in a safe test folder.
5. Export a listing of the practice folder to `practice_listing.txt`.
6. Create a backup shell script that copies all `.scad` files from your project folder to a backup folder with timestamp naming.
7. Build a safe deletion workflow: list files matching a pattern, verify count, then delete with confirmation; document the steps.
8. Write a bash script that organizes files by extension into subfolders; test it on a sample folder tree.
9. Create a file operation audit trail: log all copy, move, and delete operations to a text file for review.
10. Develop a project template generator: a bash script that creates a standard folder structure for a new 3D printing project with essential subfolders.
11. Implement a file conflict handler: write a bash script that handles cases where `cp` would overwrite an existing file by renaming the existing file with a timestamp before copying.
12. Create a batch rename operation: use a script to rename all files in a folder from `old_prefix_*` to `new_prefix_*`; test with actual files and verify the results.
13. Build a folder comparison tool: list all files in two folders and identify which files exist in one but not the other; output to a report.
14. Write a destructive operation validator: before executing `rm -r`, create a script that lists exactly what will be deleted, shows file counts by type, and requires explicit user confirmation to proceed.
15. Design a complete project lifecycle workflow: create folders for active projects, completed designs, and archive; include move operations between folders, backup steps, and verification that all files arrive intact.

## References

- GNU. (2024). *touch command reference*. [https://example.com](https://example.com)
- GNU. (2024). *cp and mv commands*. [https://example.com](https://example.com)
- GNU. (2024). *File system operations guide*. [https://example.com](https://example.com)

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
**Prerequisite:** Bash Lesson 2 (File and Folder Manipulation)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Use `echo` to print text to the screen
- Use `cat` to read file contents
- Use `>` to redirect output into a file
- Use `|` (pipe) to send one command's output to another
- Copy output to the clipboard with `clip`
- Open files with a text editor from the command line

---

## Commands Covered

| Command                | What It Does                                         |
|------------------------|------------------------------------------------------|
| `echo "text"`          | Print text to the screen                             |
| `cat filename`         | Print the contents of a file                         |
| `> filename`           | Redirect output into a file (overwrites)             |
| `>> filename`          | Append output to a file (adds to end)                |
| `\|`                   | Pipe - send output from one command to the next      |
| `clip`                 | Copy piped input to the Windows clipboard (Git Bash) |
| `notepad.exe filename` | Open a file in Notepad                               |

---

## `echo` - Printing Text

`echo` prints text to the screen. It is useful for testing, for writing text into files, and for understanding how piping works.

```bash
echo "Hello, World"
echo "This is a test"
```

---

## `cat` - Reading Files

`cat` prints the contents of a file to the screen.

```bash
# Read a text file
cat ~/Documents/notes.txt

# Read an OpenSCAD file
cat ~/Documents/OpenSCAD_Projects/project0.scad
```

With a long file, use `cat filename | less` to read it page by page (press `Space` to advance, `Q` to quit).

---

## `>` - Redirecting Output to a File

The `>` symbol redirects output from the screen into a file instead.

```bash
# Create a file with a single line
echo "Author: Your Name" > header.txt

# Confirm the file was created and has content
cat header.txt
```

**Warning:** `>` overwrites the file if it already exists. Use `>>` to append instead:

```bash
echo "Date: 2025" >> header.txt
echo "Project: Floor Marker" >> header.txt
cat header.txt
```

---

## `|` - Piping

The pipe symbol `|` sends the output of one command to the input of the next. This lets you chain commands together.

```bash
# List files and send the list to clip (copies to clipboard)
ls -1 | clip
## 3DMake in Practice: Capturing Build Output

Piping and redirection are essential for working with 3DMake's output accessibly:

```bash
# Build and save the full log to a file so you can read it
3dm build > build_log.txt
cat build_log.txt

# Build and slice, keeping only lines with errors or warnings
3dm build slice 2>&1 | grep -i "error\|warning"

# List all STL files produced so far
ls -1 build/*.stl

# Get a list of available printer profiles and save for reference
3dm list-profiles > profiles.txt
cat profiles.txt

# Get a list of material overlays (PLA, PETG, supports, etc.)
3dm list-overlays > overlays.txt
cat overlays.txt

# Get an AI description of your model, then copy to clipboard
3dm info > model_description.txt
cat model_description.txt | clip
```


```bash
# List files and send the list to clip (copies to clipboard)
ls -1 | clip

# Now paste with Ctrl + V anywhere
```

```bash
# Search within a file's contents using grep
cat project0.scad | grep "cube"
```

---

## `clip` - Copying to Clipboard

`clip` takes whatever is piped to it and puts it on the Windows clipboard.

```bash
# Copy your current directory path to the clipboard
pwd | clip

# Copy a file listing to clipboard
ls -1 | clip

# Copy the contents of a file to clipboard
cat notes.txt | clip
```

After any of these, press `Ctrl + V` in any application to paste.

---

## Opening Files in Notepad

```bash
# Open a file in Notepad
notepad.exe ~/Documents/notes.txt

# Open a .scad file
notepad.exe ~/Documents/OpenSCAD_Projects/project0.scad

# Create a new file and open it
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

- GNU. (2024). *Redirections in Bash*. [https://example.com](https://example.com)
- GNU. (2024). *grep command reference*. [https://example.com](https://example.com)
- GNU. (2024). *Bash pipeline concepts*. [https://example.com](https://example.com)

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

# Full build-slice-print pipeline in one word
alias 3dprint='3dm build slice print'

# Build and then get an AI description of the model
alias 3dinfo='3dm build && 3dm info'

# Make sure 3dm is in your PATH (add to .bashrc if needed)
echo 'export PATH="$PATH:$HOME/Downloads/3dmake"' >> ~/.bashrc

# Persist all three aliases in .bashrc
echo "alias 3dp='cd ~/Documents/3d_projects'" >> ~/.bashrc
echo "alias 3dprint='3dm build slice print'" >> ~/.bashrc
echo "alias 3dinfo='3dm build && 3dm info'" >> ~/.bashrc

# Reload .bashrc immediately without restarting
source ~/.bashrc

# Now use them:
3dp         # jump to your 3D projects folder
3dprint     # run the full pipeline
3dinfo      # build and describe the model
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

- GNU. (2024). *Environment variables in Bash*. [https://example.com](https://example.com)
- GNU. (2024). *alias command reference*. [https://example.com](https://example.com)
- GNU. (2024). *Creating and using Bash profiles*. [https://example.com](https://example.com)

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

- GNU. (2024). *Bash history and recall functionality*. [https://example.com](https://example.com)
- GNU. (2024). *Understanding and creating Bash profiles*. [https://example.com](https://example.com)
- GNU. (2024). *Running scripts and executables in Bash*. [https://example.com](https://example.com)

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
# batch_print.sh - build and print every 3DMake project in a folder

PROJECTS_DIR="$HOME/Documents/3d_projects"

for project in "$PROJECTS_DIR"/*/; do
    name=$(basename "$project")
    echo "Processing: $name"
    cd "$project"

    if 3dm build slice > build_log.txt 2>&1; then
        echo "  OK - sending to printer"
        3dm print
    else
        echo "  FAILED - check build_log.txt"
        cat build_log.txt
    fi
done

echo "Batch complete."
```

>[!TIP]
>Save as `batch_print.sh`, run `chmod +x batch_print.sh` once to make it executable, then run with `./batch_print.sh`. If you forget `chmod +x` you'll get "Permission denied" — just run the `chmod` command and try again.

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
notepad.exe my-first-script.sh
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

>[!NOTE]
>Before you can run a `.sh` script, you must make it executable with `chmod +x scriptname.sh`. This is a one-time step per script. Without it, running `./script.sh` will produce a "Permission denied" error even though the file exists.

**Step 4: Make it executable and run the script**
```bash
chmod +x my-first-script.sh
./my-first-script.sh
```

**What happens:**
Bash runs each command in sequence and shows output.

>[!IMPORTANT]
>Always start shell scripts with `#!/bin/bash` (the "shebang" line). Without it, the system may use a different shell to run your script, which can cause unexpected errors — especially on systems where `/bin/sh` is not bash.

### Important: The Shebang Line

The `#!/bin/bash` at the top of your script (called a "shebang") tells the system which shell to use to run the script.

```bash
#!/bin/bash
# Now bash runs every command below
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
>[!TIP]
>Always quote variables that contain file paths: use `"$mypath"` not `$mypath`. Without quotes, spaces in folder names will break your script. This is one of the most common bash scripting mistakes.

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
for file in *.scad; do
    echo "=== File: $file ==="
    cat "$file"
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

echo "Processing SCAD files in: $scad_folder"
echo ""

for file in "$scad_folder"/*.scad; do
    if [ -f "$file" ]; then
        echo "  Found: $(basename "$file")"
        count=$((count + 1))
    else
        echo "  Missing: $(basename "$file")"
    fi
done

echo ""
echo "Total files found: $count"
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
Processing SCAD files in: /c/Users/YourName/Documents/3D_Projects

  Found: model1.scad
  Found: model2.scad
  Found: model3.scad
[... more files ...]

Total files found: 10
Batch processing complete!
```

---

## Error Handling

### Try-Style Checks with Exit Codes

What if something goes wrong? Use exit code checks:

**Example:**
```bash
#!/bin/bash
file="$HOME/nonexistent/path/file.txt"

if cat "$file" 2>/dev/null; then
    echo "File read successfully"
else
    echo "Error: Could not read file"
    echo "File path was: $file"
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
myvar="hello"  # Set first
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
chmod +x my-script.sh
```

### Debugging Technique: Trace Output with `set -x`

Add `set -x` at the top of your script to print each command before it runs:

```bash
#!/bin/bash
set -x  # Enable trace mode
path_var="$HOME/Documents"
echo "Starting script. Path is: $path_var"

for file in "$path_var"/*; do
    echo "Processing: $file"
    # Do something with $file
    echo "Done with: $file"
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
read -p "Enter project name: " project_name
base_folder="$HOME/Documents/3D_Projects"
project_folder="$base_folder/$project_name"

# Create folder structure
mkdir -p "$project_folder"
mkdir -p "$project_folder/designs"
mkdir -p "$project_folder/output"
mkdir -p "$project_folder/notes"

# Create a README
cat > "$project_folder/README.txt" << EOF
# $project_name

Created: $(date)

## Designs
All .scad files go here.

## Output
STL and other exports go here.

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
    local required_items=("README.txt" "designs" "output" "notes")
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
        echo "Some files are missing!"
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
./my-script.sh > output.txt
notepad.exe output.txt
```

**Solution 2: Use echo with clear sections**
```bash
echo "========== STARTING =========="
echo ""
# ... script ...
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

for file in *.scad; do
    count=$((count + 1))
    echo "Processing $count of $total: $file"
    # Do something with $file
done

echo "All $count files processed!"
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
   echo "Hello from my first Git Bash shell script!"
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
   echo "test" > ~/Documents/TestFiles/file1.txt
   echo "test" > ~/Documents/TestFiles/file2.txt
   echo "test" > ~/Documents/TestFiles/file3.txt
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
   for file in "$folder"/*; do
       echo "  - $(basename "$file")"
       count=$((count + 1))
   done
   echo ""
   echo "Total: $count files"
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
6. What is a `for` loop and what does `for file in *.scad; do` do?
7. What does `[ -f "$file" ]` check?
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

>[!TIP]
>Use `which programname` to check whether a program is in your PATH and find its full path. If `which openscad` returns nothing, OpenSCAD is not in your PATH and you'll need to add it or call it by its full path.

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

>[!IMPORTANT]
>Aliases saved only in the terminal session are lost when you close Git Bash. To make an alias permanent, add it to `~/.bashrc`. After editing `.bashrc`, run `source ~/.bashrc` to apply changes without restarting.

17. Where is a Git Bash alias typically stored to persist across sessions?
    - A) `C:\Program Files\Git\profile.sh`
    - B) In the `~/.bashrc` file
    - C) `~/bash_profile`
    - D) Aliases cannot be made permanent

>[!IMPORTANT]
>**Ctrl+C** is the universal "abort" key — it stops any running command immediately and returns you to the prompt. This works in Git Bash, CMD, and PowerShell. Use it whenever a command hangs, loops unexpectedly, or produces unwanted output.

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

>[!TIP]
>After editing `~/.bashrc`, run `source ~/.bashrc` to apply your changes immediately without restarting Git Bash. Without this step, new aliases and variables won't take effect until the next time you open a terminal.

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

10. Run `man ls` (or `ls --help`) and redirect the output to `help_output.txt`. Open the file in Notepad and capture a screenshot showing at least the first page of help content.

---

## Grading Rubric

| Section         | Questions | Points Each | Total  |
|-----------------|-----------|-------------|--------|
| Multiple Choice | 20        | 1           | 20     |
| Short Answer    | 10        | 2           | 20     |
| Hands-On Tasks  | 10        | 3           | 30     |
| **Total**       | **40**    | -           | **70** |

**Passing Score:** 49 points (70%)

---

## Helpful Resources for Review

- [Git Bash Command Reference](https://git-scm.com/book/en/v2)
- [Navigation and File System](https://linuxcommand.org/lc3lts0020.php)
- [Using Pipes and Filtering](https://www.gnu.org/software/grep/manual/grep.html)
- [Bash Profile and Aliases](https://www.gnu.org/software/bash/manual/htmlnode/Bash-Startup-Files.html)
- [Screen Reader Accessibility Tips](https://www.nvaccess.org/documentation/)

---

## Submission Checklist

- [ ] All 20 multiple choice questions answered
- [ ] All 10 short answer questions answered (1-2 sentences each)
- [ ] All 10 hands-on tasks completed with evidence captured
- [ ] Files/screenshots organized and labeled clearly
- [ ] Submission includes this checklist