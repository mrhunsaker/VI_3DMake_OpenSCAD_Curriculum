# Setup and Accessibility Fundamentals — Complete Guide

Everything you need to configure an accessible working environment before starting the command-line or 3dMake curriculum. Read these sections in order the first time through; return to individual sections as reference when needed.

---

## Contents

| Section | Title |
|---|---|
| [Part 1: Choosing a Screen Reader](#screen-reader-choice) | Compare NVDA, JAWS, Windows Narrator, and Dolphin SuperNova for command-line work |
| [Part 2: Screen Reader Accessibility Guide](#accessibility-guide) | Key commands and terminal strategies for all four screen readers |
| [Part 3: Braille Display Setup](#braille-displays) | Connecting and configuring a braille display with any screen reader |
| [Part 4: Editor Selection and Setup](#editor-setup) | Choosing and configuring VS Code or other editors for accessible OpenSCAD work |

**Recommended reading order:** Part 1 → Part 2 → Part 3 (if applicable) → Part 4. Parts 3 and 4 can be deferred until you need them.

---



---

<a id="screen-reader-choice"></a>

# Part 1: Choosing a Screen Reader for Windows Command-Line Work

---

Screen readers provide speech output and, where supported, braille output that make text-based interfaces accessible to people who are blind or have low vision. In command-line environments they convert terminal text, prompts, and keyboard navigation into audible or tactile feedback so users can work independently in shells such as Windows Terminal, Command Prompt, PowerShell, and Git Bash.

Choosing a screen reader is a personal decision. There is no single reader that is universally better or worse for every user. Preferences depend on workflow, training, budget, and comfort with customization. Each product has genuine strengths and trade-offs. If possible, try the available options and pick what feels most natural for you.

---

## The Four Screen Readers Covered in This Curriculum

### NVDA (NonVisual Desktop Access)

NVDA is a free, open-source screen reader developed by NV Access. It is one of the most widely used screen readers in the world.

**Advantages:**
- Free to download and use; supported by donations.
- Actively developed with frequent updates.
- Excellent support for Windows terminals (Command Prompt, PowerShell, Windows Terminal, Git Bash).
- Extensible through a rich add-on ecosystem.
- Strong community support, forums, and troubleshooting resources.
- Good braille display support via built-in braille drivers and the BRLTTY/LibLouis library.

**Disadvantages:**
- Advanced paid support is community-driven rather than available from a commercial vendor helpdesk.
- Some edge-case compatibility differences compared to commercial readers.

**Cost:** Free (donations welcomed at [https://www.nvaccess.org/](https://www.nvaccess.org/)).

**Trial:** Not applicable — NVDA is always free.

**Download:** [https://www.nvaccess.org/download/](https://www.nvaccess.org/download/)

---

### JAWS (Job Access With Speech)

JAWS is a commercial screen reader developed by Freedom Scientific (part of Vispero). It is one of the most feature-rich and widely deployed screen readers in enterprise and educational settings.

**Advantages:**
- Mature product with decades of development and broad application compatibility.
- Extensive scripting system allows deep customization for specific applications.
- Vendor-provided paid support, training, and documentation.
- Advanced braille display support and configuration.
- Widely used in workplaces and schools, so shared knowledge base is large.

**Disadvantages:**
- Commercial product with significant licensing cost.
- JAWS demo mode limits session length to approximately 40 minutes before requiring a computer restart or session reset to continue. This can be disruptive during extended practice sessions.
- Some advanced customization (JAWS scripts) requires a learning curve.

**Cost:** Commercial. Typical U.S. pricing is several hundred dollars per year for a software maintenance agreement (SMA), or a higher one-time perpetual license fee. Check [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/) for current pricing.

**Trial:** JAWS offers a time-limited demonstration mode (approximately 40 minutes per session). After the demo period expires, you must restart the computer to continue using JAWS without a license. This applies to the full JAWS installer — there is no separate shorter trial download.

**Download:** [https://www.freedomscientific.com/downloads/jaws/](https://www.freedomscientific.com/downloads/jaws/)

---

### Windows Narrator

Windows Narrator is Microsoft's built-in screen reader, included with Windows 10 and Windows 11 at no extra cost. It has improved significantly with recent Windows releases.

**Advantages:**
- Already installed on every Windows 10 and Windows 11 computer — no download or installation needed.
- No cost.
- Simple to start: press **Windows+Ctrl+Enter** to toggle Narrator on and off.
- Reasonable support for Windows Terminal, Command Prompt, and PowerShell.
- Integrates tightly with Windows accessibility features.

**Disadvantages:**
- Fewer customization options than JAWS or NVDA for complex command-line workflows.
- Braille display support exists but is more limited than dedicated screen readers.
- Less powerful for advanced scripting, code editing, or rapid navigation in large terminal outputs.
- Less community documentation for terminal-specific workflows compared to NVDA and JAWS.

**Cost:** Free (included with Windows).

**Trial:** Not applicable — Narrator is always available on Windows.

**Enable:** Settings > Accessibility > Narrator, or press **Windows+Ctrl+Enter**.

---

### Dolphin SuperNova

Dolphin SuperNova (sometimes referred to as "Dolphin Screen Reader" or simply "SuperNova") is a commercial product from Dolphin Computer Access. It is available in several editions: Magnifier, Magnifier & Speech, and Screen Reader. The Screen Reader and Magnifier & Speech editions provide full screen reader functionality.

**Advantages:**
- Commercial product with vendor support, training options, and documentation.
- Offers combined magnification and speech in a single product — useful for users with low vision who benefit from both.
- Good braille display support.
- Works with Windows terminals (Command Prompt, PowerShell, Windows Terminal).
- Full-featured 30-day trial license available for evaluation before purchase.

**Disadvantages:**
- Commercial licensing cost.
- Less widely used than NVDA or JAWS, so community resources and third-party documentation are more limited.
- Configuration for some terminal workflows may require additional setup.

**Cost:** Commercial. Pricing varies by edition (Magnifier only, Magnifier & Speech, or Screen Reader). Check [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) for current pricing. Expect costs broadly similar to other commercial screen readers.

**Trial:** Dolphin provides a full-featured 30-day trial license. This is more generous than JAWS's per-session demo and allows uninterrupted evaluation over a full month.

**Download:** [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)

---

## Choosing Between Them for Command-Line Work

Use this decision guide to narrow your choice:

**If budget is the primary constraint:**  
Start with NVDA or Windows Narrator. Both are free. NVDA is generally more capable and better documented for terminal work. Windows Narrator requires no installation and is a good quick-start option.

**If you already own or have access to JAWS or Dolphin through school or work:**  
Use what you have. Both work well for this curriculum.

**If you have low vision (partial sight) in addition to using a screen reader:**  
Consider Dolphin SuperNova, which combines magnification and speech in one product, or use Windows Magnifier alongside NVDA.

**If your organization requires vendor-supported software:**  
JAWS and Dolphin SuperNova both offer commercial support contracts.

**If you are unsure:**  
Install NVDA (free, no risk) and try a few lessons. You can always switch later, and the terminal commands you learn work identically regardless of which screen reader you use.

---

## Terminal Command Reference by Screen Reader

All four screen readers can perform the same tasks in the terminal. The table below shows the key actions and how to perform them with each reader. Exact key names can vary by keyboard layout and screen reader configuration.

| Task                                    | NVDA                                    | JAWS                                     | Windows Narrator                     | Dolphin SuperNova                           |
|-----------------------------------------|-----------------------------------------|------------------------------------------|--------------------------------------|---------------------------------------------|
| **Read current line or prompt**         | NVDA+Home (reads current line)          | Insert+Up Arrow (re-reads current line)  | Narrator+D (reads current line)      | CapsLock+L (reads current line)             |
| **Read all output from here**           | NVDA+Down Arrow (read to end of screen) | Insert+Ctrl+Down (read to end of screen) | Narrator+R (read from cursor)        | CapsLock+Numpad Plus (say all)              |
| **Move to previous line of output**     | Up Arrow in review mode                 | Insert+Up Arrow (line by line)           | Narrator+Up Arrow (scan mode)        | CapsLock+Numpad 8                           |
| **Move to next line of output**         | Down Arrow in review mode               | Insert+Down Arrow (line by line)         | Narrator+Down Arrow (scan mode)      | CapsLock+Numpad 2                           |
| **Jump to end of screen/buffer**        | NVDA+End                                | Insert+End                               | Narrator+End                         | CapsLock+Page Down                          |
| **Jump to start of screen/buffer**      | NVDA+Home                               | Insert+Home                              | Narrator+Home                        | CapsLock+Page Up                            |
| **Recall last command (shell history)** | Up Arrow (shell native; SR reads it)    | Up Arrow (shell native; SR reads it)     | Up Arrow (shell native; SR reads it) | Up Arrow (shell native; SR reads it)        |
| **Stop reading**                        | Ctrl                                    | Ctrl                                     | Ctrl                                 | Ctrl                                        |
| **Open screen reader settings**         | NVDA+N > Preferences                    | Insert+F3 > Options/Settings             | Windows+Ctrl+N (Narrator settings)   | CapsLock+SpaceBar (SuperNova control panel) |

> **Notes on modifier keys:**
> - **NVDA key** is Insert by default; can be changed to CapsLock in NVDA Preferences > Keyboard.
> - **JAWS key** is Insert by default; can be changed to CapsLock in JAWS Settings Center.
> - **Narrator key** is CapsLock or Insert; configurable in Settings > Accessibility > Narrator > Keyboard shortcuts.
> - **Dolphin key** is CapsLock by default; configurable in SuperNova Control Panel > Keyboard.

---

## Important Notes for This Curriculum

1. **All four screen readers work with all three shells** (CMD, PowerShell, Git Bash) covered in this curriculum. You do not need to change screen readers based on which shell pathway you choose.

2. **The best practice for all four screen readers** when dealing with long terminal output is to redirect it to a file and open it in Notepad:

   ```plaintext
   command > output.txt
   notepad output.txt
   ```
   
   This works in CMD, PowerShell, and Git Bash, and gives you a stable document that all four screen readers can read comfortably.

3. **Braille display users** can use a braille display alongside any of these four screen readers. See the Braille Display Setup guide for detailed instructions.

4. **The screen reader tips in each lesson** of this curriculum are written for NVDA, JAWS, Windows Narrator, and Dolphin SuperNova. If the specific key commands differ from what you hear when practicing, check your screen reader's documentation for the equivalent command — the underlying concept is always the same.

---

## Additional Resources

| Screen Reader     | Official Documentation                     | Support / Help                             |
|-------------------|--------------------------------------------|--------------------------------------------|
| NVDA              | [https://www.nvaccess.org/](https://www.nvaccess.org/) | [https://www.nvaccess.org/download/](https://www.nvaccess.org/download/) |
| JAWS              | [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/) | [https://www.freedomscientific.com/downloads/jaws/](https://www.freedomscientific.com/downloads/jaws/) |
| Windows Narrator  | [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) | [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator) |
| Dolphin SuperNova | [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) | [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/) |


---

<a id="accessibility-guide"></a>

# Part 2: Screen Reader Accessibility Guide for Command-Line Terminals

---

**Target Users:** NVDA, JAWS, Windows Narrator, and Dolphin SuperNova users using PowerShell, CMD, or Git Bash  
**Last Updated:** February 2026

This guide is used throughout the Command-Line Foundation curriculum (PowerShell, CMD, and Git Bash pathways) to help screen reader users navigate and work efficiently with the terminal.

---

## Table of Contents

1. [Which Terminal Should I Use?](#which-terminal)
2. [Getting Started with Screen Readers](#getting-started)
3. [NVDA-Specific Tips](#nvda-tips)
4. [JAWS-Specific Tips](#jaws-tips)
5. [Windows Narrator-Specific Tips](#narrator-tips)
6. [Dolphin SuperNova-Specific Tips](#dolphin-tips)
7. [General Terminal Accessibility](#general-terminal)
8. [Working with Long Output](#long-output)
9. [Keyboard Shortcuts Reference](#shortcuts)
10. [Shell-Specific Differences](#shell-differences)
11. [Troubleshooting](#troubleshooting)

---

## Which Terminal Should I Use?

All three command-line shells (PowerShell, CMD, Git Bash) work well with screen readers. Choose the one that best fits your setup:

| Feature                   | PowerShell           | CMD                    | Git Bash                     |
|---------------------------|----------------------|------------------------|------------------------------|
| **Platform**              | Windows only         | Windows only           | Windows, macOS, Linux        |
| **Screen Reader Support** | Excellent            | Excellent              | Excellent                    |
| **Learning Curve**        | Moderate             | Gentle                 | Moderate-Steep               |
| **Use Case**              | Modern automation    | Familiar simplicity    | Cross-platform/Git workflows |
| **Recommended For**       | 3D design automation | Getting started easily | Software developers          |

**Key Point:** Choose one pathway and complete it fully. All three teach the same skills and prepare you equally well for 3dMake work. Don't switch mid-curriculum.

---

## Getting Started with Screen Readers

### Which Screen Reader Should I Use?

NVDA, JAWS, Windows Narrator, and Dolphin SuperNova all work with the three shells covered in this curriculum. Here is a brief comparison:

| Feature              | NVDA                   | JAWS                   | Windows Narrator          | Dolphin SuperNova  |
|----------------------|------------------------|------------------------|---------------------------|--------------------|
| **Cost**             | Free (open-source)     | Commercial (paid)      | Free (built into Windows) | Commercial (paid)  |
| **Installation**     | Simple download        | Complex but thorough   | Already installed         | Standard installer |
| **Terminal Support** | Excellent (all shells) | Excellent (all shells) | Good (all shells)         | Good (all shells)  |
| **Learning Curve**   | Gentle                 | Steeper                | Minimal                   | Moderate           |
| **Customization**    | Good (add-ons)         | Extensive (scripts)    | Limited                   | Good               |

**Recommendation:** If you are new to screen readers, start with NVDA (free, well-documented, good community support) or Windows Narrator (already on your computer, no installation needed). JAWS and Dolphin SuperNova are excellent choices if you already own a license or your organization provides one.

### Before You Start

1. Make sure your screen reader is running **before** opening your terminal.
2. Open your terminal (PowerShell, CMD, or Git Bash) and let your screen reader read the title and prompt.
3. If you do not hear anything, press **Alt+Tab** to cycle windows and find your terminal.
4. Use your screen reader's review/virtual cursor to understand the layout.

---

## NVDA-Specific Tips

NVDA is free and available from [https://www.nvaccess.org/](https://www.nvaccess.org/)

These tips work across all shells: PowerShell, CMD, and Git Bash.

### Key Commands for Terminals

| Command                    | What It Does                                   |
|----------------------------|------------------------------------------------|
| **NVDA+Home**              | Read the current line (your command or output) |
| **NVDA+Down Arrow**        | Read from cursor position to end of screen     |
| **NVDA+Up Arrow**          | Read from top of screen to cursor              |
| **NVDA+Page Down**         | Read next page                                 |
| **NVDA+Page Up**           | Read previous page                             |
| **NVDA+F7**                | Open the Elements List / Review Mode viewer    |
| **NVDA+Shift+Right Arrow** | Read next word                                 |
| **NVDA+Shift+Down Arrow**  | Read entire visible screen                     |
| **NVDA+End**               | Jump to end of line                            |
| **NVDA+Home**              | Jump to start of line                          |
| **NVDA+Numpad 5**          | Announce the character under the review cursor |
| **NVDA+Shift+Numpad 5**    | Announce the word under the review cursor      |

> **Note on NVDA key:** On desktop keyboards the NVDA modifier is typically the **Insert** key. On laptops without a numpad the NVDA key is often **CapsLock**. You can change this in NVDA Preferences > Keyboard.

### Example: Reading Long Output

**Scenario:** You ran a command and it listed 50 files. You cannot hear them all at once.

**Solution with NVDA:**
1. After the command finishes, press **NVDA+Home** to read the current line.
2. Press **NVDA+Down Arrow** repeatedly to read all output line by line.
3. Or redirect to a file first: `command > output.txt`, then open with `notepad output.txt` for more comfortable reading.

### NVDA Settings for Terminals

1. Press **NVDA+N** to open the NVDA menu.
2. Go to **Preferences > Settings > Speech**.
3. Increase or decrease verbosity to taste.
4. Under **Document Formatting**, enable **"Report indentation"** (important for reading code).
5. Under **Terminal**, enable **"Speak typed characters"** so you hear each key as you type.

---

## JAWS-Specific Tips

JAWS is a commercial screen reader available from [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)

These tips work across all shells: PowerShell, CMD, and Git Bash.

### Key Commands for Terminals

| Command                    | What It Does                            |
|----------------------------|-----------------------------------------|
| **Insert+Down Arrow**      | Read all / say all from cursor downward |
| **Insert+Up Arrow**        | Re-read current line                    |
| **Insert+Page Down**       | Read next page of terminal output       |
| **Insert+Page Up**         | Read previous page of terminal output   |
| **Insert+End**             | Jump to end of text on screen           |
| **Insert+Home**            | Jump to start of text on screen         |
| **Insert+Ctrl+Down**       | Read to end of screen                   |
| **Insert+Ctrl+Up**         | Read to beginning of screen             |
| **Insert+Shift+Page Down** | Select and read next page               |
| **Insert+F3**              | Open JAWS menu                          |
| **Insert+Z**               | Toggle JAWS virtual cursor on/off       |
| **Insert+F2**              | Open JAWS Manager (Settings Center)     |

> **Note on JAWS key:** The JAWS modifier is typically **Insert** on a standard keyboard. On laptops, JAWS can be configured to use **CapsLock** as the modifier instead.

### Example: Reading Long Output

**Scenario:** You ran a command and saved output to a file.

**Solution with JAWS:**
1. Open the file in Notepad: `notepad file.txt`
2. In Notepad, press **Insert+Ctrl+Down** to hear all content from the top.
3. Use **Insert+Down Arrow** to read line by line at your own pace.
4. Use **Insert+F** (JAWS Find) to search for specific text within the file.

### JAWS Settings for Terminals

1. Press **Insert+F3** to open the JAWS menu.
2. Go to **Options > Settings Center** (or **Utilities > Settings Manager** in older versions).
3. Search for **"terminal"** or **"console"**.
4. Enable **"Announce output"** and verify **"Speak when program speaks"** is on.
5. For indent reporting, search for **"Indent"** and set to **"Tones"** or **"Tones and Speech"**.

---

## Windows Narrator-Specific Tips

Windows Narrator is built into Windows 10 and Windows 11 at no extra cost. Enable it via **Settings > Accessibility > Narrator** or press **Windows+Ctrl+Enter**.

These tips work across all shells: PowerShell, CMD, and Git Bash.

### Key Commands for Terminals

| Command                       | What It Does                                     |
|-------------------------------|--------------------------------------------------|
| **Narrator+D**                | Read current line                                |
| **Narrator+M**                | Read next line                                   |
| **Narrator+I**                | Read current item or focused element             |
| **Narrator+R**                | Read from cursor / read all from here            |
| **Narrator+Ctrl+R**           | Read page / read all                             |
| **Narrator+Left/Right Arrow** | Move to previous/next item                       |
| **Narrator+Up/Down Arrow**    | Move to previous/next line in scan mode          |
| **Narrator+Enter**            | Activate/interact with current item              |
| **Narrator+Space**            | Toggle Narrator scan mode (browse vs. type mode) |
| **Narrator+F1**               | Open Narrator help                               |
| **Windows+Ctrl+Enter**        | Start or stop Narrator                           |

> **Note on Narrator key:** The Narrator modifier is **CapsLock** or **Insert** by default. You can change this in **Settings > Accessibility > Narrator > Keyboard shortcuts**.

### Working with Terminals Using Narrator

Narrator works well in **focus mode** (the default when a terminal is active). In focus mode, arrow keys move through command history and output rather than triggering Narrator navigation.

**Tips:**
- After running a command, press **Narrator+D** to read the current line.
- Use **Narrator+R** to read all output from the current position.
- For long outputs, always redirect to a file: `command > output.txt`, then open in Notepad where Narrator's reading experience is more comfortable.
- In Windows Terminal, enable **"Accessible terminal"** mode in Windows Terminal settings for better Narrator integration.

### Narrator Settings for Terminals

1. Open **Settings > Accessibility > Narrator**.
2. Under **"Change what you hear when typing"**, enable **"Hear characters as you type"**.
3. Under **"Change what Narrator reads"**, enable **"Read hints for controls and buttons"**.
4. Set verbosity level to **3 or 4** for a good balance of detail.
5. Under **"Choose a Narrator voice"**, select a voice you find comfortable for extended use.

**Known limitation:** Narrator has fewer customization options than JAWS or NVDA for advanced terminal work. If you find Narrator insufficient for complex workflows, consider switching to NVDA (free) or JAWS.

---

## Dolphin SuperNova-Specific Tips

Dolphin SuperNova is a commercial screen reader (with optional magnification) available from [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)

These tips work across all shells: PowerShell, CMD, and Git Bash.

### Key Commands for Terminals

| Command                                | What It Does                             |
|----------------------------------------|------------------------------------------|
| **Caps Lock+Down Arrow** (or NumPad 2) | Read current line                        |
| **Caps Lock+Numpad 5**                 | Read current word                        |
| **Caps Lock+Numpad 6**                 | Read next word                           |
| **Caps Lock+Numpad 4**                 | Read previous word                       |
| **Caps Lock+Numpad 8**                 | Read from cursor to top                  |
| **Caps Lock+Numpad 2**                 | Read from cursor to bottom               |
| **Caps Lock+Numpad Plus**              | Say all / read all from current position |
| **Caps Lock+L**                        | Re-read current line                     |
| **Caps Lock+Right Arrow**              | Read next character                      |
| **Caps Lock+Left Arrow**               | Read previous character                  |
| **Caps Lock+Page Down**                | Jump to end of document or screen        |
| **Caps Lock+Page Up**                  | Jump to start of document or screen      |

> **Note on Dolphin key:** Dolphin SuperNova typically uses **Caps Lock** as its modifier key (referred to as the "Dolphin key"). This can be changed in **SuperNova Control Panel > Keyboard**.

### Working with Terminals Using Dolphin SuperNova

1. Open SuperNova **before** opening your terminal application.
2. Dolphin SuperNova automatically tracks focus as you move between the editor, terminal, and file explorer.
3. In the terminal, use the **Dolphin key+Numpad Plus** (say all) to have the screen read after running a command.
4. For complex output, redirect to a file and open in Notepad: `command > output.txt`, then `notepad output.txt`.

### Dolphin SuperNova Settings for Terminals

1. Open **SuperNova Control Panel** (press Caps Lock+SpaceBar, or click the SuperNova icon).
2. Go to **Speech > Verbosity** and set a comfortable level (3 or 4 recommended for terminal work).
3. Go to **Speech > Text Processing > Indentation** and enable indentation announcement (important for code).
4. Go to **Braille > Settings** if you are using a braille display alongside speech.
5. In **General > Application Settings**, you can set terminal-specific verbosity so SuperNova behaves differently in your terminal versus other programs.

**Note:** Dolphin SuperNova's magnification features can be helpful if you have some remaining vision. Terminal text can be magnified while still receiving speech output.

---

## General Terminal Accessibility

### Understanding the Terminal Layout

All terminals (PowerShell, CMD, Git Bash) follow the same basic layout:
1. **Title bar:** Window name (e.g., "Windows PowerShell", "Command Prompt", "Git Bash")
2. **Content area:** Command history and output
3. **Prompt:** The area where you type (e.g., `PS>`, `C:\>`, `$`)

**Your screen reader reads from top to bottom, but focus is at the prompt (bottom).**

### Navigation Sequence

**When you open any terminal:**
1. Your screen reader announces the window title.
2. Then it announces the prompt line.
3. Anything before the prompt is previous output.
4. Anything after the prompt is where new output will appear.

### Reading Output Effectively

**Strategy 1: Immediate Output (Small Amount)**
- Run a command.
- Your screen reader announces output immediately.
- This works well for short outputs (a few lines).

**Strategy 2: Large Output (Many Lines)**
- Redirect to a file: `command > output.txt`
- Open the file: `notepad output.txt` (works in all shells on Windows)
- Read in Notepad — easier and more controllable for all screen readers.

**Strategy 3: Filtering Output**
- Use filtering commands to reduce output.
- PowerShell: `command | Select-String "pattern"`
- CMD: `command | find "pattern"`
- Git Bash: `command | grep "pattern"`

---

## Working with Long Output

This is one of the most common challenges for screen reader users. Here are proven solutions:

### Solution 1: Redirect to a File (Recommended)

```
command > output.txt
notepad output.txt
```

**Advantages:** Easy to navigate at your own pace, works with all screen readers, output does not scroll away, you can save it for later reference.

### Solution 2: Use Pagination

```
command | more
```

Press **Space** to see the next page, **Q** to quit. Note: some screen readers struggle with `more`; Solution 1 is generally preferred.

### Solution 3: Filter Output

```
# PowerShell
ls | Select-String "\.scad"

# CMD
dir | find ".scad"

# Git Bash
ls -la | grep ".scad"
```

### Solution 4: Count Before Displaying

```powershell
# PowerShell
(ls).Count
```

This tells you how many items there are before deciding whether to redirect to a file.

---

## Keyboard Shortcuts Reference

### Shell Navigation (Works Regardless of Screen Reader)

| Key            | Action                             | Why It Matters                   |
|----------------|------------------------------------|----------------------------------|
| **Up Arrow**   | Show previous command              | Repeat commands without retyping |
| **Down Arrow** | Show next command                  | Navigate through history         |
| **Tab**        | Auto-complete path or command name | Faster and more accurate         |
| **Shift+Tab**  | Cycle backward through completions | If Tab went too far              |
| **Home**       | Jump to start of command line      | Edit beginning of a command      |
| **End**        | Jump to end of command line        | Edit end of a command            |
| **Ctrl+A**     | Select all text on line            | Copy entire command              |
| **Ctrl+C**     | Stop / interrupt running command   | Abort long-running tasks         |
| **Ctrl+L**     | Clear screen                       | Start fresh visually             |
| **Enter**      | Run command                        | Execute what you typed           |

### Screen Reader Navigation Quick Reference

| Task                    | NVDA                | JAWS              | Windows Narrator  | Dolphin SuperNova    |
|-------------------------|---------------------|-------------------|-------------------|----------------------|
| Read current line       | NVDA+Home           | Insert+Up Arrow   | Narrator+D        | CapsLock+L           |
| Read all from here      | NVDA+Down Arrow     | Insert+Ctrl+Down  | Narrator+R        | CapsLock+Numpad Plus |
| Read next line          | Down Arrow (review) | Insert+Down Arrow | Narrator+M        | CapsLock+Numpad 2    |
| Read previous line      | Up Arrow (review)   | Insert+Up Arrow   | Narrator+Up Arrow | CapsLock+Numpad 8    |
| Jump to end of output   | NVDA+End            | Insert+End        | Narrator+End      | CapsLock+Page Down   |
| Jump to start of output | NVDA+Home           | Insert+Home       | Narrator+Home     | CapsLock+Page Up     |
| Stop reading            | Ctrl                | Ctrl              | Ctrl              | Ctrl                 |

---

## Shell-Specific Differences

While all three shells work equally well with screen readers, there are differences in commands and syntax:

### File Listing and Navigation

| Task                 | PowerShell              | CMD                | Git Bash           |
|----------------------|-------------------------|--------------------|--------------------|
| **List files**       | `ls` or `Get-ChildItem` | `dir`              | `ls -la`           |
| **List names only**  | `ls -Name`              | `dir /B`           | `ls -1`            |
| **Change directory** | `cd path`               | `cd path`          | `cd path`          |
| **Current location** | `pwd`                   | `cd` (no args)     | `pwd`              |
| **Create folder**    | `mkdir foldername`      | `mkdir foldername` | `mkdir foldername` |
| **Delete file**      | `Remove-Item file.txt`  | `del file.txt`     | `rm file.txt`      |
| **Home directory**   | `$HOME` or `~`          | `%USERPROFILE%`    | `~`                |

### Output Redirection

| Task               | PowerShell                        | CMD                      | Git Bash                     |
|--------------------|-----------------------------------|--------------------------|------------------------------|
| **Save to file**   | `command > file.txt`              | `command > file.txt`     | `command > file.txt`         |
| **Append to file** | `command >> file.txt`             | `command >> file.txt`    | `command >> file.txt`        |
| **Filter output**  | `command \| Select-String "text"` | `command \| find "text"` | `command \| grep "text"`     |
| **Open file**      | `notepad file.txt`                | `notepad file.txt`       | `notepad file.txt` (Windows) |

### Scripting and Automation

| Feature            | PowerShell          | CMD             | Git Bash      |
|--------------------|---------------------|-----------------|---------------|
| **File extension** | `.ps1`              | `.bat`          | `.sh`         |
| **Comment**        | `#`                 | `REM` or `::`   | `#`           |
| **Variable**       | `$var = "value"`    | `set var=value` | `var=value`   |
| **Echo text**      | `Write-Host "text"` | `echo text`     | `echo text`   |
| **Get help**       | `Get-Help command`  | `help command`  | `man command` |

**Choose ONE pathway and stick with it.** Each curriculum teaches you the concepts using that specific shell's syntax. The accessibility experience is virtually identical across all four screen readers in all three shells — only the command syntax differs.

---

## Troubleshooting

### Problem 1: "I Can't Hear the Output After Running a Command"

**Causes and Solutions:**

1. **Cursor is not at the prompt** — Press **End** or **Ctrl+End** to go to the end of text, then use screen reader commands to review.
2. **Output scrolled off-screen** — Redirect to file: `command > output.txt`, then `notepad output.txt`.
3. **Screen reader focus is on window title, not content** — Press **Tab** or arrow keys to move into the content area.
4. **Large output overwhelming screen reader** — Use filtering: `command | grep "pattern"` (Git Bash), `command | find "text"` (CMD), or `command | Select-String "text"` (PowerShell).

### Problem 2: "Tab Completion Isn't Working"

1. You must type at least one character before pressing Tab.
2. The folder or file must exist — run `dir` (CMD), `ls` (PowerShell/Git Bash) to check.
3. If multiple matches exist, press Tab again to cycle through them.

### Problem 3: "Access Denied or Permission Denied"

1. Close your terminal, right-click it, and choose **Run as administrator**. Confirm the UAC prompt.
2. If the file is in use by another program, close that program and try again.
3. If the path contains spaces, use quotes: `cd "Program Files"`.

### Problem 4: "A Command Runs Forever and Won't Stop"

Press **Ctrl+C** to interrupt any running command.

### Problem 5: "I Need to Edit My Last Command"

1. Press **Up Arrow** to recall the previous command.
2. Use **Left/Right Arrow** keys to move through it.
3. Edit as needed and press **Enter** to run the modified version.

### Problem 6: Screen Reader is Not Announcing Indentation

Proper indent announcement is critical for reading code. Enable it for your screen reader:

- **NVDA:** NVDA Menu > Preferences > Settings > Document Formatting > enable **"Report indentation"**, set to **"Tones and speech"**.
- **JAWS:** Settings Center > search **"Indent"** > enable **"Announce Indentation"**, set mode to **"Tones"** or **"Tones and Speech"**.
- **Windows Narrator:** Settings > Accessibility > Narrator > Advanced Options > enable **"Report indentation"** (limited options compared to NVDA/JAWS).
- **Dolphin SuperNova:** SuperNova Control Panel > Speech > Text Processing > Indentation > enable and set preferred announcement style.

---

## Pro Tips for Efficiency

### Create Aliases for Frequently Used Commands

**PowerShell:** `Set-Alias -Name ll -Value "Get-ChildItem -Name"`  
**CMD:** Create a `.bat` file in a folder on your PATH.  
**Git Bash:** `alias ll='ls -la'` (add to `~/.bashrc` to make permanent)

### Use Command History

All shells support **Up/Down Arrow** to navigate history. In PowerShell, `history` shows a numbered list and `Invoke-History 5` reruns command number 5. In Git Bash, `history` and `!5` work similarly.

### Redirect Everything to Files for Accessibility

If a command produces output, save it:

```plaintext
command > results.txt
notepad results.txt
```

This is always more accessible than reading from the terminal directly.

---

## Quick Reference Card

```plaintext
EVERY SESSION STARTS WITH:
1. pwd / cd            (where am I?)
2. dir / ls            (what is here?)
3. cd path             (go there)

LONG OUTPUT?
-> command > file.txt
-> notepad file.txt

STUCK?
-> Ctrl+C

WANT TO REPEAT?
-> Up Arrow

NEED HELP?
-> PowerShell:  `Get-Help command-name`
-> CMD:         `help command-name`
-> Git Bash:    `man command-name`
```

---

## Additional Resources

- **NVDA:** [https://www.nvaccess.org/](https://www.nvaccess.org/)
- **JAWS:** [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- **Windows Narrator:** [https://support.microsoft.com/narrator](https://support.microsoft.com/narrator)
- **Dolphin SuperNova:** [https://yourdolphin.com/supernova/](https://yourdolphin.com/supernova/)
- **PowerShell Docs:** [https://example.com](https://example.com)
- **CMD Documentation:** [https://example.com](https://example.com)
- **Git Bash / Git for Windows:** [https://example.com](https://example.com)
- **Accessibility Best Practices:** [https://example.com](https://example.com)


---

<a id="braille-displays"></a>

# Part 3: Using a Braille Display with the Curriculum

---

Many blind and low-vision programmers prefer tactile output alongside or instead of speech. A refreshable braille display presents terminal text as a row (or multiple rows) of braille cells and allows you to read at your own pace, re-read lines without interrupting speech, and work quietly. This page covers how to connect and configure a braille display with each screen reader used in this curriculum.

---

## How a Braille Display Works with a Terminal

A refreshable braille display uses small pins that rise and fall to form braille characters. When connected to a computer and paired with a screen reader, the display shows the line of text where the screen reader's focus or review cursor is located. You can pan left and right across a long line or press routing buttons to move the screen reader cursor to a specific position.

In a terminal environment:
- The display shows the current command line (what you are typing).
- After running a command, you can use your screen reader's review cursor and the display's pan keys to read through the output line by line.
- Routing keys (small buttons above or below each braille cell) let you move the cursor directly to that point in the text — useful for re-running or editing commands from history.

---

## Connecting a Braille Display

### USB Connection
1. Plug the display's USB cable into your computer.
2. Windows will attempt to install drivers automatically. If the display is not recognized, install the vendor's driver software first (see vendor links at the end of this page).
3. Open your screen reader's braille settings and select the connected display.

### Bluetooth Connection
1. Put the braille display into pairing mode (refer to the device's quick-start guide).
2. On Windows, go to **Settings > Bluetooth & devices > Add a device** and pair the display.
3. Once paired, open your screen reader's braille settings and select the display.

### Before Opening the Terminal
Always confirm the display is connected and showing output before opening your terminal. A quick test: open Notepad, type a few words, and verify they appear on the display. This confirms the screen reader is routing output correctly before you add the complexity of a terminal session.

---

## Configuring Each Screen Reader for Braille

### NVDA

NVDA includes built-in braille support for a wide range of displays without requiring separate vendor software for many devices.

1. Connect your display via USB or Bluetooth.
2. Open the NVDA menu: press **NVDA+N** (Insert+N or CapsLock+N depending on your modifier key setting).
3. Go to **Preferences > Settings > Braille** (or press **NVDA+Ctrl+B** as a shortcut on some versions).
4. In the **"Braille display"** dropdown, select your display from the list. NVDA supports automatic detection for many displays — you can also select **"Automatic"** and let NVDA detect it.
5. Set your preferred **braille output table** (e.g., Unified English Braille Grade 1 or Grade 2, or your country's national table).
6. Set **"Braille input table"** if you want to type commands using the display's braille keyboard (if equipped).
7. Enable **"Show cursor"** so you can see the caret position on the display.
8. Click **OK** and test by moving the cursor in Notepad.

**Recommended NVDA braille settings for terminal work:**
- Output table: Unified English Braille Grade 1 (uncontracted) is recommended for reading code — contractions in Grade 2 can make code harder to read.
- Cursor shape: Dots 7 and 8 (underline) is a common choice.
- Enable **"Word wrap"** to avoid cutting words at the display's edge.

**NVDA braille keyboard shortcut reference (while braille display is active):**

| Action                                  | NVDA Command                     |
|-----------------------------------------|----------------------------------|
| Pan braille display right               | Display's right pan key          |
| Pan braille display left                | Display's left pan key           |
| Toggle braille tethered to focus/review | NVDA+Ctrl+T                      |
| Move to previous braille line           | NVDA+Shift+Up (or display key)   |
| Move to next braille line               | NVDA+Shift+Down (or display key) |
| Open braille settings                   | NVDA+Ctrl+B (some versions)      |

---

### JAWS

JAWS supports a wide range of braille displays through its built-in braille manager and additional vendor drivers.

1. Connect your display via USB or Bluetooth.
2. Install the vendor's display driver if required (check the vendor's website — some displays work without a driver in JAWS, others need one).
3. Open the JAWS menu: press **Insert+F3** (or your JAWS key+F3).
4. Go to **Options > Basics > Braille** or use the **JAWS Settings Center** and search for **"Braille"**.
5. In Braille Settings, select your display model from the list.
6. Choose your **braille translation table** (e.g., English Unified Grade 1 for uncontracted, Grade 2 for contracted).
7. Configure **cursor routing** so that pressing a routing button on the display moves the JAWS cursor to that position.
8. Test in Notepad before moving to a terminal.

**JAWS braille settings for terminal work:**
- Use **Grade 1 (uncontracted) braille** for reading code and terminal output. Grade 2 contractions can make commands and file paths difficult to parse.
- Enable **"Show active cursor"** in JAWS braille settings.
- In the JAWS Settings Center, look for **"Braille for Applications"** — you can set different braille behavior for specific applications (e.g., a terminal vs. a word processor).

**Accessing braille settings:**
- **Insert+F3** > Options > Basics > Braille
- Or: **Insert+F2** (JAWS Manager) > Settings Center > search "braille"

---

### Windows Narrator

Windows Narrator supports braille output through the **Windows braille service** (Windows 10 version 1903 and later, and Windows 11).

1. Connect your display via USB or Bluetooth.
2. Install the vendor's display driver if required.
3. Open **Settings > Accessibility > Narrator > Braille** (Windows 11) or **Settings > Ease of Access > Narrator > Use Braille** (Windows 10).
4. Turn on **"Install braille"** (first-time setup may require downloading the braille translation component — approximately 70 MB).
5. Select your **display brand and model** from the list.
6. Choose a **braille table** (Grade 1 recommended for terminal work).
7. Test in Notepad before using in a terminal.

**Important Narrator braille notes:**
- Narrator's braille support uses the **BRLTTY** back-end on Windows, which supports most mainstream displays.
- If your display is not listed, check for a Windows Update or visit the display vendor's website for a Windows Narrator-compatible driver.
- Narrator's braille customization is less extensive than NVDA's or JAWS's. If you need more control, consider using NVDA (free) for braille-heavy work.
- The **braille display showing Narrator output** does not change the fact that Narrator's keyboard commands remain the same — your display shows what Narrator is currently reading.

---

### Dolphin SuperNova

Dolphin SuperNova includes integrated braille support as part of its screen reader editions (SuperNova Magnifier & Speech and SuperNova Screen Reader).

1. Connect your display via USB or Bluetooth.
2. Install the vendor's driver if required.
3. Open the **SuperNova Control Panel**: press **CapsLock+SpaceBar** or click the SuperNova icon in the taskbar.
4. Go to **Braille > Display** and select your display model from the list.
5. Go to **Braille > Translation** and select your braille table (Grade 1 / uncontracted recommended for code).
6. Go to **Braille > Settings** to configure cursor style, word wrap, and other options.
7. Click **Apply** and test in Notepad.

**Dolphin SuperNova braille tips for terminal work:**
- SuperNova supports a wide range of displays from Freedom Scientific (Focus), HumanWare (Brailliant, BrailleNote as terminal), HIMS, Optelec, and others.
- Use **Grade 1 (uncontracted)** braille for terminal and code work.
- SuperNova's **"Braille cursor tracking"** setting determines whether the braille display follows the text cursor or the screen review cursor — set this to **"Cursor"** when working in a terminal.
- Dolphin provides a **braille viewer** on screen (a visual representation of what is on the braille display) — useful when setting up or troubleshooting.

---

## Using the Braille Display in a Terminal

Once your display is configured, here is how to work in a terminal:

1. **Reading the prompt:** The display shows your current prompt (e.g., `C:\Users\YourName>` or `PS C:\>`). Pan right if the prompt is longer than your display width.
2. **Reading output:** After running a command, use your screen reader's review cursor commands (see the Screen Reader Accessibility Guide) to move through the output. The display shows one line at a time and updates as you move.
3. **Redirecting long output:** For long terminal output, redirect to a file and open in Notepad:
   ```
   command > output.txt
   notepad output.txt
   ```
   In Notepad, you can pan through the braille display comfortably without the output scrolling away.
4. **Using routing keys:** Press the routing key above a word or character to move your cursor to that position. This is especially useful for editing commands recalled from shell history.

---

## Braille Grade and Code

For all screen readers, use **Grade 1 (uncontracted) braille** when working in terminals and with code. Contracted braille (Grade 2) uses abbreviations designed for reading prose, and those contractions will make command names, file paths, and code syntax difficult or impossible to read correctly.

Example: In Grade 2, the letters "cd" might be represented as a contraction meaning something other than the Change Directory command. In Grade 1, `cd` is always shown as the letters c and d.

---

## Notetakers and BrailleNote / BrailleSense Devices

BrailleNote Touch+ (HumanWare) and BrailleSense (HIMS) devices run Android as their primary operating system. **They cannot run `3dMake` or Windows-based terminal workflows natively.** These devices are not supported as standalone authoring environments for this curriculum.

**Workaround — using them as braille terminals:** Both device families can function as a braille display when connected to a Windows computer via USB or Bluetooth. In that configuration:
- The device acts as a standard refreshable braille display.
- Your Windows screen reader (NVDA, JAWS, Narrator, or SuperNova) drives the output.
- Commands are typed on the Windows keyboard; the BrailleNote/BrailleSense shows the output as braille.

To set this up, refer to your device's documentation for "Terminal mode" or "PC connection mode" and then follow the screen reader braille configuration steps above for your chosen screen reader.

---

## Multiline Braille Displays

Standard refreshable braille displays show a single line of braille (typically 32, 40, or 80 cells). Multiline displays show several lines simultaneously, which can significantly improve the experience of reading code or terminal output because you can see context above and below the current line.

### Examples

**Monarch (APH / HumanWare partnership):**  
A multiline braille device developed by the American Printing House for the Blind (APH) in partnership with HumanWare. It presents multiple lines of braille and supports graphical braille output, making it useful for reviewing blocks of code, diagrams, and structured text. Confirm current driver and screen reader compatibility before purchase.

**DotPad (Dot Inc.):**  
A multiline braille and tactile graphics display. Its multiline capability allows programmers to scan several lines of code or terminal output at once. Useful for reviewing structured output without panning repeatedly. Check current Windows compatibility and screen reader support status.

**Graphiti and Graphiti Plus (Orbit Research):**  
Multiline tactile displays from Orbit Research designed for reading text and tactile graphics. Their expanded line count helps with reading code structure and terminal output. Check current driver support for NVDA, JAWS, Narrator, and SuperNova.

### Considerations for Multiline Displays

- **Driver and screen reader support:** Multiline displays are newer technology and support varies. Confirm that your chosen screen reader (NVDA, JAWS, Narrator, or SuperNova) has a driver for the specific device before purchase.
- **Size and portability:** Multiline displays are larger and heavier than single-line models. Consider your workspace and whether you need portability.
- **Cost:** Multiline displays are significantly more expensive than single-line displays. Evaluate whether the workflow benefit justifies the cost for your situation.
- **Learning curve:** Using a multiline display effectively — navigating across lines, understanding the spatial layout — requires some practice beyond what is needed for single-line displays.

---

## Troubleshooting

**Display shows nothing / no braille output:**
- Verify the USB or Bluetooth connection and check that the display is powered on.
- In your screen reader's braille settings, confirm the correct display model is selected.
- Try disconnecting and reconnecting. Restart the screen reader if needed.
- Install or reinstall the vendor's display driver.

**Display shows output but navigation is out of sync:**
- Toggle your screen reader's braille mode off and on (usually in the braille settings).
- Restart the screen reader (not the whole computer) and reopen the terminal.
- Try a different terminal emulator (Windows Terminal, Command Prompt, PowerShell) to see if the issue is terminal-specific.

**Display driver not found:**
- Go to the vendor's website (links below) and download the latest driver for your operating system version.
- Some displays require firmware updates to work with newer Windows versions.

**Routing keys not moving the cursor:**
- In your screen reader's braille settings, confirm that cursor routing is enabled.
- In NVDA, this is under Preferences > Settings > Braille > enable "Move system cursor when routing review cursor".
- In JAWS, check the routing settings in the JAWS braille configuration.

---

## Vendor Resources

| Vendor             | Products                                 | Support / Drivers                          |
|--------------------|------------------------------------------|--------------------------------------------|
| HumanWare          | Brailliant, BrailleNote Touch+           | https://www.humanware.com/ |
| Freedom Scientific | Focus Blue series                        | https://www.freedomscientific.com/Products/Blindness/FocusBlue/ |
| HIMS               | BrailleSense, Braille EDGE, Smart Beetle | https://www.hims-inc.com/ |
| Optelec            | Braille STAR, Easy Link                  | https://www.optelec.com/ |
| Orbit Research     | Graphiti, Orbit 20/40                    | https://www.orbitresearch.com/ |
| APH                | Monarch                                  | https://www.aph.org/ |
| Dot Inc.           | DotPad                                   | https://dotincorp.com/ |
| Dolphin            | GuideConnect, braille accessories        | https://yourdolphin.com/ |

---

## Connecting a Braille Display: Summary Table

| Screen Reader     | Where to Find Braille Settings                              | Recommended Braille Table for Code     |
|-------------------|-------------------------------------------------------------|----------------------------------------|
| NVDA              | NVDA Menu > Preferences > Settings > Braille                | Unified English Braille Grade 1        |
| JAWS              | Insert+F3 > Options > Basics > Braille (or Settings Center) | English Braille Grade 1 (uncontracted) |
| Windows Narrator  | Settings > Accessibility > Narrator > Braille               | English Grade 1 (uncontracted)         |
| Dolphin SuperNova | CapsLock+SpaceBar > Braille > Display and Translation       | Grade 1 (uncontracted)                 |

This page gives a practical overview. Always consult your braille display vendor's documentation and your screen reader's braille guide for device-specific setup steps and advanced configuration options.


---

<a id="editor-setup"></a>

# Part 4: Editor Selection and Accessibility Setup Guide

---

## Table of Contents
1. [Editor Comparison](#editor-comparison)
2. [Editor Setup for 3dMake](#editor-setup-for-3dmake)
3. [Screen Reader Indent Announcement Configuration](#screen-reader-indent-announcement-configuration)
4. [Curriculum-Specific Editor Recommendations](#curriculum-specific-editor-recommendations)

## Editor Comparison

### Overview Table

| Feature                 | Notepad         | Notepad++                | Visual Studio Code                 |
|-------------------------|-----------------|--------------------------|------------------------------------|
| Cost                    | Free (built-in) | Free                     | Free                               |
| Learning Curve          | Minimal         | Low                      | Moderate                           |
| Screen Reader Support   | Good (basic)    | Good (syntax features)   | Excellent (built-in accessibility) |
| Extension/Plugin System | None            | Limited                  | Extensive                          |
| Keyboard Navigation     | Good            | Good                     | Excellent                          |
| Customization           | None            | Moderate                 | Very high                          |
| Performance             | Excellent       | Very good                | Good                               |
| Syntax Highlighting     | None            | Yes (OpenSCAD available) | Yes (OpenSCAD available)           |
| Terminal Integration    | None            | None                     | Built-in                           |
| Real-time Feedback      | None            | None                     | Yes (with extensions)              |
| Hot Key Customization   | Limited         | Good                     | Excellent                          |
| File Size Handling      | Good            | Good                     | Excellent                          |
| Built-in Debugging      | None            | None                     | Limited                            |

### Detailed Comparison

#### Notepad
Advantages:
- Minimal interface with no distractions-excellent for absolute beginners
- Very predictable behavior for screen reader users
- Extremely fast file operations
- No configuration required; works immediately
- Pure text editing with no formatting surprises

Disadvantages:
- No syntax highlighting (OpenSCAD code appears as plain text)
- No keyboard shortcuts for common editing tasks
- Limited undo/redo capabilities compared to modern editors
- No integrated terminal (requires separate command prompt window)
- No way to run 3dm commands directly

Best For: Users who prefer absolute simplicity and want minimal cognitive load during learning phase

Screen Reader Experience: Windows Narrator reads all content clearly; JAWS and NVDA work well with standard keyboard navigation

#### Notepad++
Advantages:
- Lightweight and fast
- Good syntax highlighting for OpenSCAD code
- Customizable interface with configurable keyboard shortcuts
- Tab management for multiple files
- Better organization than Notepad for managing projects
- Good screen reader support for basic operations

Disadvantages:
- No built-in terminal (requires external command prompt)
- Plugin system is limited compared to VSCode
- Screen reader experience with syntax highlighting features can be inconsistent
- Less extensive keyboard customization than VSCode
- No integrated development environment features

Best For: Users who want a lightweight editor with syntax highlighting but prefer not to use a full IDE

Screen Reader Experience: JAWS and NVDA handle navigation well; Windows Narrator works but may struggle with complex UI elements

#### Visual Studio Code
Advantages:
- Extensive built-in accessibility features (accessibility inspector, keyboard navigation shortcuts)
- Excellent OpenSCAD extension available (scad-preview)
- Integrated terminal allows running 3dm commands without context switching
- Powerful keyboard shortcut customization
- Rich extension ecosystem for workflow enhancement
- Remote development capabilities
- Native support for multiple projects and workspaces
- Excellent search and find/replace functionality

Disadvantages:
- Steeper learning curve than Notepad or Notepad++
- Requires initial configuration for accessibility
- More resource-intensive than lighter editors
- Built-in terminal can be distracting for some users (alternative: Alt-Tab to standalone terminal)

Best For: Users building comprehensive accessibility workflow and wanting integrated development environment

Screen Reader Experience: Excellent; built specifically with accessibility in mind. NVDA, JAWS, Windows Narrator, and Dolphin all receive high-quality support.

## Editor Setup for 3dMake

### Setting Default Editor in 3dMake

The 3dMake tool uses your system default text editor. However it can be changed with an edit to the global configuration file by typing this into any terminal.

```plaintext 
3dm edit-global-config
```

You get a file like this in your default text edit program, typically notepad on Windows. 

```toml
view = "3sil"
model_name = "main"
auto_Start_prints = true
printer_profile = "bambu_labs_X1_carbon"
```

Add one of the following lines to the end of the file:

`editor = "code"` for VSCode
`editor = "notepad"` for notepad (already the default)
`editor = '''C:\Program Files (x86)\Notepad++\notepad++.exe'''` for Notepad++ (the triple apostrophes mean you do not have to escape the spaces)


### Notepad Setup

Configuration Steps:

1. Open 3dMake-generated .scad files directly:
   - Navigate to your project folder in File Explorer
   - Right-click the `.scad` file -> "Open with" -> "Notepad"
   - File opens immediately for editing

2. Edit and Save:
   - Make changes to your code
   - Press `Ctrl+S` to save
   - File updates automatically if 3dMake renders in background

3. Run 3dMake Commands:
   - Save your edits (Ctrl+S)
   - Alt-Tab to Command Prompt or PowerShell window
   - Navigate to project directory: `cd C:\path\to\project`
   - Run 3dMake command: `3dMake render project.scad`

Keyboard Shortcuts:
- `Ctrl+H`: Find and Replace
- `Ctrl+G`: Go to Line (newer versions)
- `Ctrl+Z`: Undo
- `Ctrl+Y`: Redo

### Notepad++ Setup

Installation and Configuration:

1. Download from: [https://notepad-plus-plus.org/downloads/](https://notepad-plus-plus.org/downloads/)
2. Choose: Standard Installer (for automatic system integration)

3. Configure OpenSCAD Language Support:
   - Open Notepad++
   - Language -> User Defined Language -> Import... (if OpenSCAD UDL available)
   - Or manually set syntax highlighting:
     - Language -> OpenSCAD (if available in language menu)
     - Otherwise Language -> C++ (provides similar highlighting)

4. Customize for Accessibility:
   - Settings -> Preferences -> General
   - Check: "Minimize to system tray" (optional)
   - Settings -> Preferences -> MISC.
   - Ensure Word Wrap is set to preference
   - Settings -> Preferences -> Backup
   - Enable regular backups of your work

5. Set as Default Editor (see registry method above)

Recommended Keyboard Shortcuts (User-Defined):

Create custom shortcuts by:
- Settings -> Shortcut Mapper
- Add shortcuts for frequently used actions:
  - Save and Switch to Terminal: Alt+T
  - Copy File Path: Ctrl+Shift+C

Tab Management:
- Open multiple files: Each opens in a separate tab
- Switch between tabs: Ctrl+Tab (next) / Ctrl+Shift+Tab (previous)
- Close tab: Ctrl+W

Running 3dMake Commands:
- Save file with Ctrl+S
- Alt-Tab to standalone terminal or command prompt
- Run: `3dMake render filename.scad`

### Visual Studio Code Setup

Installation:

1. Download from: [https://code.visualstudio.com/](https://code.visualstudio.com/) or type `winget search VSCode` in a terminal and then `winget install ` whichever option you prefer
2. Install: Run installer and follow prompts
3. Launch: Open VSCode

Enable OpenSCAD Support:

1. Open Extensions (Ctrl+Shift+X)
2. Search: "OpenSCAD"
3. Install: "scad-preview" by Antyos
4. Install: "OpenSCAD Syntax Highlighter" (optional, for better syntax highlighting)

Initial Accessibility Configuration:

1. Open Settings: Ctrl+,
2. Search: "accessibility"
3. Enable Key Settings:
   - Accessible View: Toggle ON
   - Screen Reader: Select your screen reader (NVDA, JAWS, Narrator, Dolphin)
   - Keyboard Navigation: Ensure enabled
   - Bracket Pair Guides: Can help with code structure understanding

4. Configure Editor Font:
   - Search: "editor.fontSize"
   - Set to comfortable size (recommend 14-16 for better readability)
   - Search: "editor.fontFamily"
   - Select monospace font (e.g., "Consolas" or "Courier New")

Set as Default Editor (see registry method above)

VSCode Terminal Options:

#### Option 1: Using Built-in Terminal (Less Accessible)

1. View -> Terminal (or Ctrl+\`)
2. Terminal opens at bottom of VSCode window
3. Run commands: `3dMake render filename.scad`
4. Note: Switching focus between editor and terminal requires Tab navigation, which can be cumbersome for screen reader users

Keyboard Navigation:
- Ctrl+\` : Toggle terminal visibility
- Ctrl+Shift+` : Create new terminal
- Alt+^/v : Switch between terminals

#### Option 2: Alt-Tab to Standalone Terminal (RECOMMENDED for Accessibility)

1. Keep Command Prompt/PowerShell open:
   - Open Command Prompt (Win+R, type "cmd", Enter)
   - Position window or minimize to taskbar
   - Navigate to project directory: `cd C:\path\to\project`

2. From VSCode, switch terminals:
   - Alt+Tab to Command Prompt
   - Run command: `3dMake render filename.scad`
   - Alt+Tab back to VSCode
   - Continue editing

Why This Is More Accessible:
- Screen reader focus switches clearly between two applications
- Terminal output is read without VSCode context interference
- Cleaner context switching for command-line workflows
- Easier to diagnose issues when editor and terminal are separate

Keyboard Shortcuts for Common Tasks:

| Action           | Shortcut       |
|------------------|----------------|
| Save             | Ctrl+S         |
| Find             | Ctrl+F         |
| Find and Replace | Ctrl+H         |
| Go to Line       | Ctrl+G         |
| Open File        | Ctrl+O         |
| Open Folder      | Ctrl+K, Ctrl+O |
| Open Terminal | Ctrl+` |
| Alt-Tab to Another Window | Alt+Tab |
| Command Palette | Ctrl+Shift+P |

Project Organization in VSCode:

1. Open Project Folder:
   - File -> Open Folder (Ctrl+K, Ctrl+O)
   - Select your project directory
   - All project files appear in Explorer sidebar

2. File Navigation:
   - Press Ctrl+P for Quick Open
   - Type filename to search and jump to file
   - Press Enter to open

3. Quick Switch Between Files:
   - Ctrl+Tab : Open recent files list
   - Arrow keys to select
   - Enter to open

## Screen Reader Indent Announcement Configuration

Proper indent announcement is critical for OpenSCAD development, as indentation indicates code nesting and structure.

### NVDA (NonVisual Desktop Access)

Enable Indent Announcement:

1. Open NVDA Menu: Alt+N or right-click NVDA icon
2. Preferences -> Settings (Ctrl+Comma)
3. Document Formatting: Tab to it
4. Check: "Report indentation"
5. In the "Indentation reporting" dropdown: Select "Tones and speech"
6. Tone Description: NVDA will announce indent level as progressively higher tones (or speaking indent amount)
7. Apply: Click OK

Additional Tab Stop Configuration:

1. Preferences -> Settings -> Document Formatting
2. Check: "Report line indentation"
3. This will announce: "Indent level 4" or similar as you navigate code

Testing:
- Open a `.scad` file with nested code (e.g., difference() { cube(); sphere(); })
- Press Down Arrow to move line by line
- NVDA announces indentation level on each new indented line

Keyboard Control:
- NVDA+3 on Numpad: Cycles indent/outline level reporting

### JAWS (Freedom Scientific)

Enable Indent Announcement:

1. Open JAWS Manager: Press JAWSKey+F2 (or right-click JAWS icon)
2. Utilities -> Settings Manager
3. Search: "Indent"
4. Look for setting: "Announce Indentation" or "Report Indentation"
5. Enable: Set to "Tones" or "Tones and Speech"
6. Speech Indent Announcement: Speak indent level
7. Tone Indent Announcement: Pitch increases with indent level

Advanced Configuration (Custom Scripts):

If built-in settings don't work:
1. JAWSKey+F2 -> Utilities -> Settings Manager
2. Search: "Line Breaks" or "Formatting"
3. Ensure: "Report line indentation" is enabled
4. Set tone adjustment: Higher pitch for deeper indents

Testing:
- Open `.scad` file with nested code
- Navigate with arrow keys
- JAWS announces indent changes with tones or speech

Keyboard Shortcuts:
- JAWSKey+Alt+I: Toggle indent reporting
- JAWSKey+Alt+Shift+I: Cycle between indent reporting modes (speech/tones/off)

### Windows Narrator

Enable Indent Announcement:

1. Open Settings: Win+I
2. Ease of Access -> Narrator
3. Advanced Options: Scroll down
4. Check: "Report indentation"
5. Indentation Reporting: Select "Tones" (less intrusive) or "Speech" (explicit)
6. Apply settings

Narrator Keyboard Shortcuts:
- Narrator+Page Down: Read from current position to end of window
- Narrator+Alt+Arrow Keys: Navigate text
- Narrator+V, I: Customize indentation reporting (in Narrator settings)

Testing:
- Open `.scad` file
- Use Narrator+Page Down to read through code
- Listen for indent tone changes or announcements

Note: Windows Narrator has fewer customization options than JAWS/NVDA; consider NVDA or JAWS for deeper indent control

### Dolphin EasyConverter (Dolphin Screen Reader)

Enable Indent Announcement:

1. Open Dolphin Central: Right-click Dolphin icon or click Dolphin icon in taskbar
2. Utilities -> Settings -> Text Processing
3. Look for: "Indentation" section
4. Enable: "Announce indentation"
5. Mode: Select "Tones", "Speech", or "Tones and Speech"
6. Tone Pitch: Configure pitch increase for deeper indents
7. Apply

ECO (Ease of Cursor Operation) Customization:
1. Dolphin Central -> Utilities -> ECO Settings
2. Text Options -> Indentation Reporting
3. Set preferred announcement style

Testing:
- Open `.scad` file with indented code
- Navigate with arrows
- Dolphin announces indent changes

Keyboard Shortcuts:
- Ctrl+Dolphin+I: Toggle indent reporting on/off
- Ctrl+Dolphin+Shift+I: Cycle indent reporting mode

## Curriculum-Specific Editor Recommendations

### For Absolute Beginners (Lesson 1-2)

Recommended: Notepad or Notepad++

Rationale:
- Minimal interface reduces cognitive load
- Focus stays on learning OpenSCAD syntax, not editor features
- Keyboard navigation is straightforward
- Screen reader experience is predictable

Setup:
1. Use Notepad or Notepad++ as default editor
2. Configure screen reader indent announcement
3. Keep separate Command Prompt window open for 3dMake commands
4. Alt-Tab workflow between editor and terminal

Workflow Example:
```
1. Open Command Prompt -> Navigate to project folder
2. Run: 3dMake new myproject
3. Alt+Tab to file explorer, open myproject.scad
4. Notepad++ opens file
5. Edit code
6. Ctrl+S to save
7. Alt+Tab to Command Prompt
8. Run: 3dMake render myproject.scad
9. Check output, return to Notepad++ to refine code
```

### For Intermediate Users (Lesson 3-6)

Recommended: Notepad++ or VSCode

Notepad++:
- Adds project organization without overwhelming complexity
- Tab support for managing multiple files
- Syntax highlighting improves code understanding
- Still lightweight and predictable

VSCode:
- Opens doors to more sophisticated workflows
- Extension system enables advanced features (OpenSCAD preview)
- Keyboard customization becomes valuable
- Terminal integration useful but use Alt-Tab method

Setup Decision Tree:
- Choose Notepad++ if: You prefer simplicity and want to focus on code logic
- Choose VSCode if: You're ready to invest time learning editor features for long-term benefit

Workflow Example with VSCode:
```
1. Open VSCode (folder view of project)
2. Press Ctrl+P to open file search
3. Type filename and press Enter to open
4. Edit code with autocomplete
5. Ctrl+H for find/replace across project
6. Ctrl+S to save
7. Alt+Tab to Command Prompt
8. Run: 3dMake render filename.scad
9. Alt+Tab back to VSCode to refine code
```

### For Advanced Users (Lesson 7-11)

Recommended: Visual Studio Code

Rationale:
- Powerful search/replace across large projects
- Extension system enables specialized workflows
- Keyboard customization reaches full potential
- Workspace management for complex projects
- Debugging capabilities aid troubleshooting

Advanced Setup:
1. Create custom keyboard shortcuts:
   - Ctrl+Alt+R: Save and render current file
   - Ctrl+Alt+P: Preview (if using scad-preview extension)

2. Install Additional Extensions:
   - "scad-preview": Real-time 3D preview
   - "Better Comments": Categorize comments with colors/tones
   - "Bracket Pair Colorizer": Visual/tonal bracket matching
   - "GitLens": Track code changes over time

3. Create Task Runner for Common Commands:
   - Ctrl+Shift+B: Configure build task to run 3dMake
   - Create separate tasks for render, export, etc.

4. Use Workspaces:
   - File -> Save Workspace As...
   - Save project-specific workspace with all settings
   - Reopen same workspace configuration automatically

Advanced Workflow Example:
```
1. Open VSCode with project workspace
2. Ctrl+Shift+P -> Run Task -> "3dMake Render Current"
3. Renders file and shows output
4. Use scad-preview extension for real-time 3D view
5. Edit code with advanced search/replace
6. Ctrl+Alt+R saves and renders automatically
7. Use version control (Git) for tracking changes
```

## Quick Reference: Editor Comparison for Curriculum

### Foundations (Lessons 1-2)
- Primary: Notepad or Notepad++
- Focus: Learn syntax and basic concepts
- Terminal: Standalone Command Prompt (Alt-Tab)

### Core Skills (Lessons 3-6)
- Primary: Notepad++ or VSCode
- New Features: Begin using editor syntax highlighting
- Terminal: Standalone (continue Alt-Tab method)
- Skills: File organization, search/replace basics

### Advanced Projects (Lessons 7-11)
- Primary: VSCode (strongly recommended)
- Advanced: Use extensions, real-time preview, complex project management
- Terminal: Choose Alt-Tab or built-in based on preference
- Skills: Workspaces, task automation, version control

## Troubleshooting Common Issues

### Problem: Screen Reader Not Announcing Indent
Solution:
1. Verify indent announcement is enabled in screen reader settings (see above)
2. Test with existing `.scad` file with clear indentation
3. Try different announcement modes (tones vs. speech)
4. Restart screen reader: Alt+Ctrl+N (NVDA) or app restart (JAWS)

### Problem: 3dMake Commands Not Running from VSCode Terminal
Solution:
1. Ensure 3dMake is in your system PATH
2. Use standalone terminal instead (Alt-Tab method) - more reliable
3. In VSCode terminal, manually navigate to correct directory first
4. Verify command syntax: `3dMake render filename.scad`

### Problem: File Not Saving in Editor
Solution:
1. Verify you pressed Ctrl+S
2. Check file permissions on project folder
3. Try "Save As" instead
4. Ensure filename includes `.scad` extension

### Problem: Syntax Highlighting Not Working
Solution:
1. Verify file has `.scad` extension
2. In Notepad++: Language menu -> select OpenSCAD or C++
3. In VSCode: Install OpenSCAD extension (search Extensions)
4. Restart editor

### Problem: Alt-Tab Not Switching Between Windows
Solution:
1. Ensure Command Prompt is open and minimized (not closed)
2. Press Alt+Tab and hold briefly to see window switcher
3. Use Alt+Tab multiple times if more than 2 windows open
4. Alternatively, click taskbar directly (Alt+Tab usually more accessible)

## Next Steps

After completing this setup guide:

1. Choose your editor based on the recommendations for your skill level
2. Configure screen reader indent announcement immediately (critical for code structure understanding)
3. Set editor as default for `.scad` files
4. Test with a simple file: Create a test project and edit it
5. Practice Alt-Tab workflow before moving to Lesson 1
6. Document your setup in a personal note for reference

You are now ready to begin Lesson 1: Environmental Configuration and Developer Workflow

## Additional Resources

- NVDA Documentation: [https://www.nvaccess.org/documentation/](https://www.nvaccess.org/documentation/)
- JAWS Documentation: [https://www.freedomscientific.com/products/software/jaws/](https://www.freedomscientific.com/products/software/jaws/)
- VSCode Accessibility: [https://code.visualstudio.com/docs/editor/accessibility](https://code.visualstudio.com/docs/editor/accessibility)
- Windows Narrator Guide: [https://support.microsoft.com/en-us/help/22798/windows-11-narrator-get-started](https://support.microsoft.com/en-us/help/22798/windows-11-narrator-get-started)
- Notepad++ Documentation: [https://notepad-plus-plus.org/online-help/](https://notepad-plus-plus.org/online-help/)