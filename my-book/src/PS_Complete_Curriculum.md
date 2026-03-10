# PowerShell for Screen Reader Users — Complete Curriculum

**Last Updated:** February 2026  
**Total Duration:** 30–45 hours of instruction and practice (for screen reader users)  
**Target Users:** Anyone using a screen reader (NVDA, JAWS, Dolphin SuperNova, Windows Narrator, or other)

*This single file contains the complete PowerShell Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional files are needed.*

---

## Table of Contents

| Section | Title | Estimated Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#accessibility-guide) | NVDA, JAWS, and terminal accessibility reference | 1.5 hours |
| [Lesson Pre: Your First Terminal](#lesson-pre) | Opening PowerShell, first commands, basic navigation | 2–2.5 hours |
| [Lesson 0: Getting Started](#lesson-0) | Paths, shortcuts, tab completion | 1.5 hours |
| [Lesson 1: Navigation](#lesson-1) | Moving around the file system confidently | 2–2.5 hours |
| [Lesson 2: File and Folder Manipulation](#lesson-2) | Create, copy, move, delete files and folders | 2.5–3 hours |
| [Lesson 3: Input, Output, and Piping](#lesson-3) | Chain commands together, redirect output | 2.5–3 hours |
| [Lesson 4: Environment Variables and Aliases](#lesson-4) | Automate settings, create shortcuts | 2–2.5 hours |
| [Lesson 5: Filling in the Gaps](#lesson-5) | Profiles, history, debugging | 2–2.5 hours |
| [Lesson 6: Advanced Techniques](#lesson-6) | Scripts, functions, loops, professional workflows | 4–4.5 hours |
| [Unit Exam](#unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 minutes |

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

<a id="accessibility-guide"></a>

# Screen Reader Accessibility Guide

---

Target Users: NVDA, JAWS, and other screen reader users  
Last Updated: 2026

This guide supports the PowerShell Foundation curriculum and helps screen reader users navigate and work efficiently with PowerShell on Windows.

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

NVDA is free and often recommended for new users; JAWS is a powerful commercial option. Also consider Dolphin SuperNova and Windows Narrator:

- Dolphin SuperNova: commercial speech, braille and magnification (check vendor docs for keyboard mappings).
- Windows Narrator: built into Windows and useful for quick access without installing third-party software.

### Before You Start

1. Start your screen reader before opening PowerShell.
2. Open PowerShell and listen for the window title and prompt.
3. If silent, press Alt+Tab to find the window.

### What is PowerShell?

PowerShell is the modern Windows shell and scripting environment. Common commands include `Get-ChildItem`, `Get-Content`, and `Out-File`. PowerShell provides richer objects and piping than CMD.

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

<a id="lesson-pre"></a>

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

<a id="lesson-0"></a>

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

<a id="lesson-1"></a>

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

<a id="lesson-2"></a>

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

<a id="lesson-3"></a>

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

<a id="lesson-4"></a>

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

<a id="lesson-5"></a>

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

<a id="lesson-6"></a>

# Lesson 6: Advanced Techniques — Scripts, Functions, and Professional Workflows

---

Duration: 4-4.5 hours (for screen reader users)  
Prerequisites: Complete Lessons 0–5  
Skill Level: Advanced intermediate

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