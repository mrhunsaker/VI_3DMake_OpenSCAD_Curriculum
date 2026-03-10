# Windows Command Prompt (CMD) for Screen Reader Users — Complete Curriculum

**Last Updated:** February 2026  
**Total Duration:** 30–45 hours of instruction and practice (for screen reader users)  
**Target Users:** Anyone using a screen reader — NVDA, JAWS, Windows Narrator, and Dolphin SuperNova are all covered throughout this curriculum.  
**Alternate to:** PowerShell curriculum (same concepts, CMD syntax)

*This single file contains the complete CMD Foundation curriculum in reading order. All lessons, quizzes, extension problems, and the unit exam are included. No additional files are needed.*

---

## Table of Contents

| Section | Title | Estimated Time |
|---|---|---|
| [Screen Reader Accessibility Guide](#accessibility-guide) | NVDA, JAWS, Narrator, and SuperNova reference for CMD | 1.5 hours |
| [Lesson Pre: Your First Terminal](#lesson-pre) | Opening CMD, first commands, basic navigation | 1.5–2 hours |
| [Lesson 0: Getting Started](#lesson-0) | Paths, shortcuts, tab completion | 1.5 hours |
| [Lesson 1: Navigation](#lesson-1) | Moving around the file system confidently | 2–2.5 hours |
| [Lesson 2: File and Folder Manipulation](#lesson-2) | Create, copy, move, delete files and folders | 2.5–3 hours |
| [Lesson 3: Input, Output, and Piping](#lesson-3) | Redirect output, chain commands with pipes | 2.5–3 hours |
| [Lesson 4: Environment Variables and Aliases](#lesson-4) | Automate settings, create doskey shortcuts | 2–2.5 hours |
| [Lesson 5: Filling in the Gaps](#lesson-5) | Autorun scripts, history, debugging | 2–2.5 hours |
| [Lesson 6: Advanced Techniques](#lesson-6) | Batch scripts, subroutines, loops, professional workflows | 4–4.5 hours |
| [Unit Exam](#unit-exam) | Comprehensive assessment — Lessons 0 through 6 | 60–90 minutes |

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

**Rule 1 — Always know where you are.**  
Every session, first thing: `cd` (with no arguments). If you do not know your path, you will get lost.

**Rule 2 — Check before you delete.**  
Before any `del` or `rmdir` command: `dir /B` to confirm exactly what you are about to remove. Deleted files do not go to the Recycle Bin from CMD.

**Rule 3 — Use `dir /B` for listings.**  
Always `dir /B` — never bare `dir`. The `/B` flag gives one name per line, which all screen readers can follow reliably.

**Rule 4 — When output is confusing, redirect to a file.**  
`command > output.txt` then `notepad.exe output.txt`. This works with all four screen readers.

**Rule 5 — Save everything you create.**  
Keep all practice files in a dedicated learning folder: `mkdir %USERPROFILE%\CMD_Learning`

---



---

<a id="accessibility-guide"></a>

# Screen Reader Accessibility Guide

---

Target Users: NVDA, JAWS, and other screen reader users  
Last Updated: 2026

This guide supports the CMD Foundation curriculum and helps screen reader users navigate and work efficiently with the Windows Command Prompt.

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

Both NVDA and JAWS work with CMD; NVDA is free and often easiest to start with. JAWS provides advanced features for power users. Dolphin SuperNova and Windows Narrator are also options:

- Dolphin SuperNova: commercial speech, braille, and magnification (use vendor docs for key mappings).
- Windows Narrator: built into Windows for quick, no-install access.

### Before You Start

1. Start your screen reader before opening CMD.
2. Open Command Prompt and listen for the window title and prompt.
3. If silent, press Alt+Tab to find the window.

### What is CMD?

CMD (Command Prompt) is the classic Windows shell. Common commands include `dir`, `type`, and `more`. Paths use backslashes (e.g., `C:\Users\You`).

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

<a id="lesson-pre"></a>

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

<a id="lesson-0"></a>

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

<a id="lesson-1"></a>

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

<a id="lesson-2"></a>

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

```cmd
del filename.txt                         :: Delete one specific file
del *.txt                                :: Delete all .txt files in current folder
del /Q *.tmp                             :: Delete quietly (no confirmation prompt)
```

**Warning:** `del` does not send files to the Recycle Bin. Deleted files are gone immediately.

### Delete Folders: `rmdir`

```cmd
rmdir foldername                         :: Delete an empty folder
rmdir /S /Q foldername                   :: Delete a folder and ALL its contents (no undo)
```

**Warning:** `rmdir /S` is permanent. Always verify the folder name before running this command.

---

## Safe File Operations

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

<a id="lesson-3"></a>

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

<a id="lesson-4"></a>

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

<a id="lesson-5"></a>

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

<a id="lesson-6"></a>

# Lesson 6: Advanced Techniques — Batch Scripts, Subroutines, and Professional Workflows

---

**Duration:** 4-4.5 hours (for screen reader users)
**Prerequisites:** Complete Command Line Lesson 0 through Command Line Lesson 5
**Skill Level:** Advanced intermediate

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