# Git Bash (Bash Shell) for Screen Reader Users — Complete Curriculum

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
| [Screen Reader Accessibility Guide](#accessibility-guide) | NVDA, JAWS, Narrator, and SuperNova reference for Git Bash | 1–1.5 hours |
| [Tutorial: Git Bash Quick Start](#tutorial) | Prompt orientation, core commands, path concepts | 30–45 minutes |
| [Lesson Pre: Your First Terminal](#lesson-pre) | Installing Git Bash, opening it, first commands | 1.5–2 hours |
| [Lesson 0: Getting Started](#lesson-0) | Paths, `~`, `./`, `../`, tab completion | 20–30 minutes |
| [Lesson 1: Navigation](#lesson-1) | `pwd`, `cd`, `ls` and flags, wildcards | 1 class period |
| [Lesson 2: File and Folder Manipulation](#lesson-2) | `touch`, `mkdir`, `cp`, `mv`, `rm`, `rmdir` | 30–45 minutes |
| [Lesson 3: Input, Output, and Piping](#lesson-3) | `echo`, `cat`, `>`, `>>`, `|`, `clip`, `grep` | 1 class period |
| [Lesson 4: Environment Variables and Aliases](#lesson-4) | `$VARNAME`, `PATH`, `which`, `alias`, `.bashrc` | 30–45 minutes |
| [Lesson 5: Filling in the Gaps](#lesson-5) | `history`, `Ctrl+R`, `Ctrl+C`, `.bashrc`, `./` | 30–45 minutes |
| [Lesson 6: Advanced Techniques](#lesson-6) | Shell scripts, functions, loops, professional workflows | 4–4.5 hours |
| [Unit Exam](#unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 minutes |

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

**Rule 1 — Always know where you are.**  
Every session, first thing: `pwd`. If you do not know your path, you will get lost.

**Rule 2 — Check before you delete.**  
Before any `rm` or `rm -r` command: `ls -1` to confirm exactly what you are about to remove. Deleted files are gone immediately — there is no Recycle Bin in the terminal.

**Rule 3 — Use `ls -1` for listings.**  
Always `ls -1` — never bare `ls`. The `-1` flag gives one name per line, which all screen readers can follow reliably. (That is the number one, not the letter L.)

**Rule 4 — When output is confusing, redirect to a file.**  
`command > output.txt` then `notepad.exe output.txt`. This works with all four screen readers and is always clearer than reading raw terminal output.

**Rule 5 — Save everything you create.**  
Keep all practice files in a dedicated learning folder: `mkdir -p ~/Documents/GitBash_Learning`

---



---

<a id="accessibility-guide"></a>

# Screen Reader Accessibility Guide for Git Bash

---

Target Users: NVDA, JAWS, and other screen reader users  
Last Updated: 2026

This guide is used throughout the Git Bash Foundation curriculum to help screen reader users navigate and work efficiently with the terminal.

## Table of Contents

1. [Getting Started with Screen Readers](#getting-started)
2. [NVDA-Specific Tips](#nvda-tips)
3. [JAWS-Specific Tips](#jaws-tips)
4. [General Terminal Accessibility](#general-terminal)
5. [Working with Long Output](#long-output)
6. [Keyboard Shortcuts Reference](#shortcuts)
7. [Troubleshooting](#troubleshooting)

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

<a id="tutorial"></a>

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

<a id="lesson-pre"></a>

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

<a id="lesson-0"></a>

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

1. What is a path?
2. What does `~` mean?
3. How do you autocomplete a path?
4. How do you go up one directory?
5. What command lists file names?
6. True or False: Git Bash uses backslashes (`\`) in paths like Windows CMD.
7. Explain the difference between an absolute path and a relative path.
8. If you are in `/c/Users/YourName/Documents` and you type `cd ../`, where do you end up?
9. What happens when you press Tab while typing a folder name in Git Bash?
10. Describe a practical reason why understanding paths is important for a 3D printing workflow.
11. What does `./` mean in a path, and when would you use it?
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

<a id="lesson-1"></a>

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

<a id="lesson-2"></a>

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

## Quiz - Lesson GitBash.2

1. How do you create an empty file from Git Bash?
2. What command copies a file?
3. How do you rename a file?
4. What does `rm -r` do?
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

<a id="lesson-3"></a>

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

<a id="lesson-4"></a>

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

<a id="lesson-5"></a>

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

<a id="lesson-6"></a>

# Lesson 6: Advanced Techniques — Shell Scripts, Functions, and Professional Workflows

---

**Duration:** 4-4.5 hours (for screen reader users)
**Prerequisites:** Complete Bash Lesson 0 through Bash Lesson 5
**Skill Level:** Advanced intermediate

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

**Step 4: Make it executable and run the script**
```bash
chmod +x my-first-script.sh
./my-first-script.sh
```

**What happens:**
Bash runs each command in sequence and shows output.

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

<a id="unit-exam"></a>

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

17. Where is a Git Bash alias typically stored to persist across sessions?
    - A) `C:\Program Files\Git\profile.sh`
    - B) In the `~/.bashrc` file
    - C) `~/bash_profile`
    - D) Aliases cannot be made permanent

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