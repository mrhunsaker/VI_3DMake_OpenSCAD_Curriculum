# Course Setup Guide — Setting Up Your Class Folder (PowerShell & Screen Reader Edition)

This guide walks you through setting up a well-organized course folder structure using PowerShell and screen reader-friendly navigation.

---

## Part 1: Understanding Course Structure

### Why Organization Matters

A well-structured course folder ensures:

- **Easy navigation** — All materials in predictable locations
- **Screen reader friendliness** — Clear file naming and hierarchy
- **Quick access** — Index file points to everything
- **Collaboration ready** — Classmates can find what they need
- **Version control** — Easy to track updates and assignments

### The Goal Structure

By the end of this guide, you'll have:

```bash
CourseFolder/
├── 00_COURSE_INDEX.md          ← START HERE
├── 01_PowerShell_Foundation/
│   ├── 01_basics/
│   ├── 02_navigation/
│   ├── 03_file_operations/
│   └── ...
├── 02_3DMake_Foundation/
│   ├── 01_installation/
│   ├── 02_first_project/
│   ├── 03_rendering/
│   └── ...
├── 03_Extension_Projects/
│   ├── 01_Your_First_Print/
│   ├── 02_Your_Second_Print/
│   ├── 03_Accessibility_Audit/
│   └── ...
├── 04_Resources/
│   ├── Cheat_Sheets/
│   ├── Templates/
│   └── Reference_Materials/
└── 05_Assignments_Submissions/
    ├── Assignment_01/
    ├── Assignment_02/
    └── ...
```

---

## Part 2: Creating the Folder Structure (PowerShell)

### Prerequisites

- PowerShell access on your computer
- Screen reader installed and running
- About 5-10 minutes

### Step 1: Open PowerShell

**On Windows:**

Press `Win + X`, then select "Windows PowerShell" or "Terminal".

For screen reader users: You'll hear "Administrator: Windows PowerShell" or similar.

### Step 2: Navigate to Your Documents or Desktop

Choose a location where you want the course folder:

```powershell
# Option A: Use Documents
cd Documents

# Option B: Use Desktop
cd Desktop

# Option C: Create in a specific location
cd "C:\Users\YourName\Documents"
```

**Screen reader check:** Type `pwd` (print working directory) and listen to confirm your location:

```powershell
pwd
```

### Step 3: Create the Main Course Folder

```powershell
mkdir "VI_Friendly_3D_Printing_Course"
cd "VI_Friendly_3D_Printing_Course"
pwd
```

### Step 4: Create Subfolder Structure

Copy and paste this entire block into PowerShell:

```powershell
# Create main category folders
mkdir 01_PowerShell_Foundation
mkdir 02_3DMake_Foundation
mkdir 03_Extension_Projects
mkdir 04_Resources
mkdir 05_Assignments_Submissions

# PowerShell subfolder structure
mkdir 01_PowerShell_Foundation/01_basics
mkdir 01_PowerShell_Foundation/02_navigation
mkdir 01_PowerShell_Foundation/03_file_operations
mkdir 01_PowerShell_Foundation/04_piping_redirection
mkdir 01_PowerShell_Foundation/05_environment_variables
mkdir 01_PowerShell_Foundation/06_quiz_and_assessments

# 3DMake subfolder structure
mkdir 02_3DMake_Foundation/01_installation
mkdir 02_3DMake_Foundation/02_first_project
mkdir 02_3DMake_Foundation/03_rendering_exporting
mkdir 02_3DMake_Foundation/04_validation_tools
mkdir 02_3DMake_Foundation/05_parametric_design

# Extension projects subfolder structure
mkdir 03_Extension_Projects/01_Your_First_Print
mkdir 03_Extension_Projects/02_Your_Second_Print
mkdir 03_Extension_Projects/03_Accessibility_Audit
mkdir 03_Extension_Projects/04_Dice_Dice_Dice
mkdir 03_Extension_Projects/05_Parametric_Keychain
mkdir 03_Extension_Projects/06_Snap_Fit_Clip
mkdir 03_Extension_Projects/07_Bonus_Print
mkdir 03_Extension_Projects/08_Miniature_Assembly

# Resources subfolder structure
mkdir 04_Resources/Cheat_Sheets
mkdir 04_Resources/Templates
mkdir 04_Resources/Reference_Materials
mkdir 04_Resources/Helpful_Links

# Assignments subfolder structure
mkdir 05_Assignments_Submissions/Assignment_01_PowerShell_Basics
mkdir 05_Assignments_Submissions/Assignment_02_3DMake_Setup
mkdir 05_Assignments_Submissions/Assignment_03_First_Model
mkdir 05_Assignments_Submissions/Assignment_04_Extension_Project
```

### Step 5: Verify the Structure

```powershell
Get-ChildItem -Recurse
```

Screen reader users: This lists every folder. With a screen reader enabled, you'll hear the full hierarchy. Listen carefully to confirm all folders are created.

---

## Part 3: Creating the Course Index File

### What Is an Index File?

The index file is a master document that:

- **Lists everything** in the course
- **Provides descriptions** of each section
- **Shows where files are** with clear paths
- **Acts as a roadmap** for the entire course

You'll create this as `00_COURSE_INDEX.md` in your main course folder.

### Step 1: Navigate to Course Root

```powershell
# Make sure you're in the main course folder
cd "VI_Friendly_3D_Printing_Course"
pwd
```

### Step 2: Create the Index File

```powershell
# Open Notepad to create the index file
notepad "00_COURSE_INDEX.md"
```

A Notepad window will open. Copy and paste the content below.

### Step 3: Paste Course Index Content

Copy the following content into Notepad:

```markdown
# VI-Friendly 3D Printing & OpenSCAD Course — Master Index

Welcome! This document is your roadmap to the entire course. Click on any section below to navigate.

---

## Quick Navigation

- **New to the course?** Start with [Section 1: PowerShell Foundation](#section-1-powershell-foundation)
- **Want to jump to 3D design?** Go to [Section 2: 3DMake Foundation](#section-2-3dmake-foundation)
- **Ready for projects?** See [Section 3: Extension Projects](#section-3-extension-projects)
- **Need help?** Check [Section 4: Resources](#section-4-resources)

---

## Section 1: PowerShell Foundation

**Location:** `01_PowerShell_Foundation/`

PowerShell is your command-line tool for navigating folders, managing files, and running programs.

### Subsections:

- `01_basics/` — Getting started with PowerShell (navigation, commands, output)
- `02_navigation/` — Moving between folders, understanding paths
- `03_file_operations/` — Creating, copying, deleting files and folders
- `04_piping_redirection/` — Sending output between commands
- `05_environment_variables/` — Setting and using variables
- `06_quiz_and_assessments/` — Practice and test your knowledge

**Estimated time:** 8-10 hours spread across 2-3 weeks

**What you'll learn:**
- Command basics
- Directory navigation
- File management
- Piping (connecting commands)
- Screen reader tips for terminal work

---

## Section 2: 3DMake Foundation

**Location:** `02_3DMake_Foundation/`

3DMake is the tool that automates your 3D model creation workflow. Learn to install it, create projects, and export models.

### Subsections:

- `01_installation/` — Install 3dMake and dependencies
- `02_first_project/` — Create and organize your first project
- `03_rendering_exporting/` — Turn models into printable files
- `04_validation_tools/` — Check your models for errors
- `05_parametric_design/` — Make reusable, flexible designs

**Estimated time:** 6-8 hours spread across 2 weeks

**What you'll learn:**
- Installation and setup
- Project structure
- Model creation workflow
- Quality checking
- Parametric techniques

---

## Section 3: Extension Projects

**Location:** `03_Extension_Projects/`

These are real-world projects that combine everything. Each one has specific deliverables.

### Available Projects:

1. **Your_First_Print** (`01_Your_First_Print/`)
   - Create a simple test cube
   - Slice and print it
   - Deliverable: Printed cube + documentation

2. **Your_Second_Print** (`02_Your_Second_Print/`)
   - Design a functional object
   - Verify it works
   - Deliverable: Printed object + reflection

3. **Accessibility_Audit** (`03_Accessibility_Audit/`)
   - Evaluate an existing design for accessibility
   - Propose improvements
   - Deliverable: Written report + suggestions

4. **Dice_Dice_Dice** (`04_Dice_Dice_Dice/`)
   - Create parametric dice
   - Export multiple sizes
   - Deliverable: 3 different dice + file package

5. **Parametric_Keychain** (`05_Parametric_Keychain/`)
   - Design a customizable keychain
   - Create variations
   - Deliverable: Keychain + customization guide

6. **Snap_Fit_Clip** (`06_Snap_Fit_Clip/`)
   - Build a joining mechanism
   - Test strength and assembly
   - Deliverable: Printed clip + testing notes

7. **Bonus_Print** (`07_Bonus_Print/`)
   - Challenge project of your choice
   - Combines all learned skills
   - Deliverable: Final project + reflection

8. **Miniature_Assembly** (`08_Miniature_Assembly/`)
   - Design interlocking parts
   - Test assembly
   - Deliverable: Assembled model + instructions

**Estimated time:** 15-20 hours across 4-5 weeks (1-2 projects per week)

---

## Section 4: Resources

**Location:** `04_Resources/`

Supporting materials to help you throughout the course.

### Subsections:

- `Cheat_Sheets/` — Quick reference guides for commands and syntax
- `Templates/` — Ready-to-use document and code templates
- `Reference_Materials/` — Detailed guides (slicing, markdown, OpenSCAD)
- `Helpful_Links/` — External resources (documentation, tutorials, forums)

### Key Resources:

- **OpenSCAD Cheat Sheet** — All syntax in one place
- **3dMake Setup Guide** — Detailed installation instructions
- **Slicing Settings Reference** — Printer-specific settings (Prusa, Anycubic, Bambu)
- **Markdown Starter Guide** — Create formatted documents
- **Screen Reader Tips** — Accessibility hints for each tool

---

## Section 5: Assignments & Submissions

**Location:** `05_Assignments_Submissions/`

Each assignment has its own folder with instructions and a place for your work.

### Assignments:

| Assignment | Topic | Deadline | Folder |
| ----------- | ------- | ---------- | -------- |
| 1 | PowerShell Basics | Week 1 | `Assignment_01_PowerShell_Basics/` |
| 2 | 3dMake Installation | Week 2 | `Assignment_02_3DMake_Setup/` |
| 3 | Your First Model | Week 3 | `Assignment_03_First_Model/` |
| 4 | Complete 1-2 Extension Projects | Week 8 | `Assignment_04_Extension_Project/` |

**For each assignment:**
1. Read the instructions in that folder
2. Complete your work
3. Save files in the same folder
4. Submit by the deadline

---

## How to Navigate This Course Structure

### Using PowerShell

```powershell
# List the current folder's contents
Get-ChildItem

# Go into a section
cd "01_PowerShell_Foundation"

# Go back up one level
cd ..

# See where you are
pwd

# View a file's contents
cat "00_COURSE_INDEX.md"
```

### Using a File Manager (with Screen Reader)

1. Open File Explorer
2. Navigate to your course folder
3. Use arrow keys to move between folders
4. Press Enter to open a folder
5. Screen reader will announce folder and file names

### For Screen Reader Users

**Best practice:** Use PowerShell with `Get-ChildItem` for clear announcements of folder structure.

```powershell
# See everything with descriptions
Get-ChildItem -Recurse | Select-Object FullName
```

---

## Course Timeline (Suggested Pace)

| Week | Topic | Time | Deliverable |
| ----- | ------- | ------ | ------------ |
| 1 | PowerShell Basics (Section 1: Subsections 1-2) | 2-3 hrs | Quiz answers |
| 2 | PowerShell Advanced (Section 1: Subsections 3-5) + 3dMake Install | 4-5 hrs | Assignment 2 |
| 3 | 3dMake Foundation (Section 2: Subsections 1-3) + First Print Project | 4-5 hrs | Printed cube |
| 4-5 | Extension Project 1-2 | 6-8 hrs | 2 Projects |
| 6-7 | Extension Project 3-4 | 6-8 hrs | 2 Projects |
| 8 | Final Project + Portfolio | 4-6 hrs | Final deliverable |

---

## Getting Help

**In this course:**

- Ask your instructor (name and email)
- Check the relevant Reference Material
- Review the Cheat Sheet for your topic

**Online resources:**

- OpenSCAD forums: <https://forum.openscad.org/>
- 3dMake documentation: <https://3dmake.org/>
- PowerShell docs: <https://learn.microsoft.com/powershell/>

---

## File Paths Quick Reference

```bash
VI_Friendly_3D_Printing_Course/
│
├── 00_COURSE_INDEX.md                    ← YOU ARE HERE
│
├── 01_PowerShell_Foundation/
│   ├── 01_basics/
│   ├── 02_navigation/
│   ├── 03_file_operations/
│   ├── 04_piping_redirection/
│   ├── 05_environment_variables/
│   └── 06_quiz_and_assessments/
│
├── 02_3DMake_Foundation/
│   ├── 01_installation/
│   ├── 02_first_project/
│   ├── 03_rendering_exporting/
│   ├── 04_validation_tools/
│   └── 05_parametric_design/
│
├── 03_Extension_Projects/
│   ├── 01_Your_First_Print/
│   ├── 02_Your_Second_Print/
│   ├── 03_Accessibility_Audit/
│   ├── 04_Dice_Dice_Dice/
│   ├── 05_Parametric_Keychain/
│   ├── 06_Snap_Fit_Clip/
│   ├── 07_Bonus_Print/
│   └── 08_Miniature_Assembly/
│
├── 04_Resources/
│   ├── Cheat_Sheets/
│   ├── Templates/
│   ├── Reference_Materials/
│   └── Helpful_Links/
│
└── 05_Assignments_Submissions/
    ├── Assignment_01_PowerShell_Basics/
    ├── Assignment_02_3DMake_Setup/
    ├── Assignment_03_First_Model/
    └── Assignment_04_Extension_Project/
```

---

## Next Steps

1. **Save this file** in your course root folder as `00_COURSE_INDEX.md`
2. **Start Section 1** by navigating to `01_PowerShell_Foundation`
3. **Read the README.md** in the first subsection
4. **Bookmark this index** — refer to it often!

---

## Course Metadata

- **Course Name:** VI-Friendly 3D Printing & OpenSCAD Foundation
- **Duration:** 8 weeks (flexible)
- **Format:** Self-paced with guided projects
- **Prerequisites:** Basic computer literacy
- **Accessibility:** Screen reader friendly; PowerShell focus; keyboard navigation
- **Created:** February 2026
- **Last Updated:** February 2026

---

Good luck with your course! You've got this!

### Step 4: Save the File

In Notepad:

1. Press `Ctrl + S` (Save)
2. Confirm the filename is `00_COURSE_INDEX.md`
3. Make sure you're in your course root folder
4. Click "Save"

### Step 5: Verify the File Was Created

```powershell
ls 00_COURSE_INDEX.md
```

You should see the file listed.

---

## Part 4: Adding Content to Each Folder

### Creating README Files for Each Section

Each major folder should have a `README.md` explaining what's inside.

**Example for PowerShell section:**

```powershell
notepad "01_PowerShell_Foundation/README.md"
```

In Notepad, paste:

```markdown
# PowerShell Foundation

## Overview

Learn PowerShell basics for navigating your computer and managing files using the command line.

## Lessons

1. **01_basics** — What is PowerShell, opening it, basic commands
2. **02_navigation** — Moving between folders, understanding file paths
3. **03_file_operations** — Creating, copying, and deleting files
4. **04_piping_redirection** — Connecting commands together
5. **05_environment_variables** — Using and setting variables
6. **06_quiz_and_assessments** — Test your knowledge

## Time Estimate

8-10 hours over 2-3 weeks

## Skills You'll Gain

- Navigate folders without a mouse
- Manage files from the command line
- Understand file paths
- Use pipes and redirection
- Tips for screen reader users
```

Repeat for other main sections.

---

## Part 5: Setting Up Assignments Folder

### Create Assignment Instructions

For each assignment, create an `INSTRUCTIONS.md` file:

```powershell
notepad "05_Assignments_Submissions/Assignment_01_PowerShell_Basics/INSTRUCTIONS.md"
```

In Notepad, paste:

```markdown
# Assignment 1: PowerShell Basics

## Due Date
End of Week 1

## Instructions

Complete the following tasks using PowerShell:

1. **Create a folder** named "test_folder"
2. **Create three files** named file1.txt, file2.txt, file3.txt
3. **Copy** file1.txt to file1_backup.txt
4. **List** all files using Get-ChildItem
5. **Delete** file3.txt

## Submission

Save a screenshot or text file showing your terminal commands and output.

Name it: `Assignment_01_YourName.txt`

## Grading

- [ ] Created folder correctly
- [ ] Created all three files
- [ ] Copied file successfully
- [ ] Listed files
- [ ] Deleted file
- [ ] Submitted work on time

**Total: 6 points**
```

---

## Part 6: Using Your Course Structure

### For Daily Study

```powershell
# Go to your course folder
cd "VI_Friendly_3D_Printing_Course"

# See what's available
Get-ChildItem

# Read the index
notepad "00_COURSE_INDEX.md"

# Navigate to today's lesson
cd "01_PowerShell_Foundation"
cd "01_basics"

# View the lesson
Get-ChildItem
```

### For Screen Reader Users

1. **Launch your screen reader** before opening PowerShell
2. **Use `Get-ChildItem`** frequently for clear audio feedback
3. **Rename files clearly** with full names (avoid abbreviations)
4. **Use descriptive folder names** (e.g., "01_basics" not "01" or "b")
5. **Test navigation** aloud to confirm you're in the right place

---

## Part 7: Tips for Success

### File Naming Best Practices

**Do:**

- Use numbers at the start (01_basics, 02_navigation)
- Use underscores instead of spaces
- Be specific (01_PowerShell_Basics, not 01_PS)

**Avoid:**

- Spaces in filenames (harder for screen readers)
- Numbers only (confusing)
- Special characters (!@#$%)

### Screen Reader Optimization

```powershell
# Always use full paths for clarity
Set-Location "C:\Users\YourName\Documents\VI_Friendly_3D_Printing_Course"

# Verify your location
pwd

# List with full details
Get-ChildItem -Force
```

### Backup Your Work

```powershell
# Create a backup folder
mkdir backups

# Copy everything to backup (weekly)
Copy-Item -Path "." -Destination "backups/backup_$(Get-Date -Format 'yyyy-MM-dd')" -Recurse
```

---

## Troubleshooting

### "Folder not found" error

**Solution:** Check the path with `pwd`:

```powershell
pwd
cd ..  # Go up one level
ls
```

### Can't see folder contents

**Solution:** Try these:

```powershell
# List all items (including hidden)
Get-ChildItem -Force

# List with more details
Get-ChildItem -Recurse

# Just show names
Get-ChildItem | Select-Object Name
```

### Screen reader not reading folder names clearly

**Solution:** Rename folders to be more descriptive:

```powershell
# Rename a folder
Rename-Item "01_basics" "01_PowerShell_Basics_Foundation"
```

---

## Next Steps

1. Creat your main course folder
2. Set up subfolders for each section
3. Created 00_COURSE_INDEX.md
4. Read the index file
5. Next: Copy course materials into each folder
6. Next: Start with PowerShell Foundation (Section 1)

---

## Part 8: Quick Setup Command (Advanced)

If you want to automate everything in one go, use this PowerShell script:

```powershell
# Save this as "setup_course.ps1"
# Run with: powershell -ExecutionPolicy Bypass -File setup_course.ps1

# Change to Documents
Set-Location Documents

# Create main folder
New-Item -ItemType Directory -Name "VI_Friendly_3D_Printing_Course" -Force
Set-Location "VI_Friendly_3D_Printing_Course"

# Create all subfolders
$folders = @(
    "01_PowerShell_Foundation\01_basics",
    "01_PowerShell_Foundation\02_navigation",
    "01_PowerShell_Foundation\03_file_operations",
    "01_PowerShell_Foundation\04_piping_redirection",
    "01_PowerShell_Foundation\05_environment_variables",
    "01_PowerShell_Foundation\06_quiz_and_assessments",
    "02_3DMake_Foundation\01_installation",
    "02_3DMake_Foundation\02_first_project",
    "02_3DMake_Foundation\03_rendering_exporting",
    "02_3DMake_Foundation\04_validation_tools",
    "02_3DMake_Foundation\05_parametric_design",
    "03_Extension_Projects\01_Your_First_Print",
    "03_Extension_Projects\02_Your_Second_Print",
    "03_Extension_Projects\03_Accessibility_Audit",
    "03_Extension_Projects\04_Dice_Dice_Dice",
    "03_Extension_Projects\05_Parametric_Keychain",
    "03_Extension_Projects\06_Snap_Fit_Clip",
    "03_Extension_Projects\07_Bonus_Print",
    "03_Extension_Projects\08_Miniature_Assembly",
    "04_Resources\Cheat_Sheets",
    "04_Resources\Templates",
    "04_Resources\Reference_Materials",
    "04_Resources\Helpful_Links",
    "05_Assignments_Submissions\Assignment_01_PowerShell_Basics",
    "05_Assignments_Submissions\Assignment_02_3DMake_Setup",
    "05_Assignments_Submissions\Assignment_03_First_Model",
    "05_Assignments_Submissions\Assignment_04_Extension_Project"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

Write-Host "Course structure created successfully!"
Get-ChildItem -Recurse
```

---

## Summary

You now have:

✅ A fully organized course folder structure  
✅ A master index file (00_COURSE_INDEX.md)  
✅ Subfolders for each course section  
✅ Assignment folders ready for your work  
✅ A screen reader-friendly navigation system  
✅ PowerShell commands to maintain your structure

Start with the `00_COURSE_INDEX.md` and follow the course timeline!

---

## Sources

Microsoft. (2025). *PowerShell documentation & tutorials*. <https://learn.microsoft.com/powershell/>  
Web Accessibility in Mind. (2025). *Creating accessible digital content*. <https://www.webacm.org/>  
Course Design Best Practices. (2024). *Organizing materials for accessibility*. <https://www.eddesign.org/>
