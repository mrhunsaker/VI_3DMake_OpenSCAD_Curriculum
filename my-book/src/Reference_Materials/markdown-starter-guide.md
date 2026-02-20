# Getting Started with Markdown — Easy Formatted Text Without Office Suites

Markdown is a simple, plain-text way to create beautifully formatted documents. No Word, Excel, or Google Docs needed—just a text editor and simple syntax.

---

## Part 1: What Is Markdown?

### Why Use Markdown?

| Advantage | Benefit |
|-----------|---------|
| **Plain text** | Works on any computer, any device |
| **Version control friendly** | Easy to track changes with Git |
| **Fast to write** | No menu-clicking required |
| **Screen reader friendly** | Clear structure for accessibility |
| **Converts to anything** | Export to PDF, HTML, Word, etc. |
| **Free** | No software licenses needed |

### What Markdown Is NOT

- ❌ A replacement for design software
- ❌ Meant for complex page layouts
- ❌ Limited to one output format
- ❌ Complicated or hard to learn

### Real-World Examples

Markdown is used for:

- Documentation (APIs, software, courses)
- README files (GitHub, GitLab)
- Blog posts (Medium, Dev.to)
- Course materials
- Technical writing
- Note-taking systems

**Fact:** The instructions you're reading right now are in Markdown!

---

## Part 2: Getting Started

### What You Need

1. **A text editor** (free options):
   - VS Code (Windows, Mac, Linux)
   - Notepad++ (Windows)
   - Nano/Vim (command line)
   - Apple Notes (Mac)
   - Any basic text editor

2. **A way to preview Markdown** (optional):
   - VS Code with preview
   - GitHub (renders automatically)
   - Markdown viewers online

### Step 1: Create Your First Markdown File

Open your text editor and create a new file named `my-document.md`.

**Important:** The `.md` file extension tells software it's Markdown.

### Step 2: Write Your First Sentence

Type this:

```markdown
# My First Document

This is my first Markdown document!
```

### Step 3: Save the File

Save it as `my-first.md` in your Documents folder.

### Step 4: View It

Option A: Open in VS Code and use the preview  
Option B: Upload to GitHub and view online  
Option C: Open with a Markdown viewer

---

## Part 3: Essential Markdown Syntax

### Headings

Use `#` symbols to create headings. More `#` symbols = smaller heading.

```markdown
# This is a level 1 heading (title)
## This is a level 2 heading (section)
### This is a level 3 heading (subsection)
#### This is a level 4 heading
##### This is a level 5 heading
###### This is a level 6 heading
```

**Screen reader tip:** Use one `#` per document, then `##` for main sections.

### Paragraphs

Just type text normally. Press Enter twice to create a new paragraph.

```markdown
This is the first paragraph.

This is the second paragraph.
```

### Text Formatting

**Bold text:**
```markdown
**This is bold** or __this is also bold__
```

*Italic text:*
```markdown
*This is italic* or _this is also italic_
```

***Bold and italic:***
```markdown
***This is bold and italic***
```

`Code (inline):` ``` `this is code` ```

### Lists

**Unordered (bullet points):**

```markdown
- First item
- Second item
- Third item
```

**Ordered (numbered):**

```markdown
1. First step
2. Second step
3. Third step
```

**Nested lists:**

```markdown
- Main item
  - Sub item 1
  - Sub item 2
- Another main item
  - Sub item
```

### Horizontal Lines

```markdown
---
```

Creates a separator line.

### Blockquotes

```markdown
> This is a quote.
> It can span multiple lines.

> This is a separate quote.
```

---

## Part 4: Creating Tables

### Basic Table Syntax

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
```

**Output:**

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

### Table Alignment

Add colons to align text:

```markdown
| Left align | Center align | Right align |
|:-----------|:------------:|------------:|
| Left       | Center       | Right       |
| A          | B            | C           |
```

### Screen Reader Optimization

Make tables simple and clear:

```markdown
| Feature | Requirement |
|---------|------------|
| RAM | 8 GB minimum |
| Storage | 50 GB free space |
| Processor | 4 cores recommended |
```

---

## Part 5: Links and Images

### Links

**Basic link:**

```markdown
[Link text](https://example.com)
```

**Link with title:**

```markdown
[Link text](https://example.com "Title when you hover")
```

**Reference-style link:**

```markdown
This is [a link][1] to the resource.

[1]: https://example.com
```

### Images

**Basic image:**

```markdown
![Alt text](image.jpg)
```

**Image with link:**

```markdown
[![Alt text](image.jpg)](https://example.com)
```

**Screen reader tip:** Always write descriptive alt text!

**Good:** `![A red cube 50mm on a printer bed](cube_on_bed.jpg)`  
**Bad:** `![image](photo.jpg)`

---

## Part 6: Code Blocks

### Inline Code

Use backticks for command or code references:

```markdown
Use the `cd` command to change directories.
```

### Code Blocks (Multiple Lines)

Use triple backticks with optional language name:

```markdown
\```powershell
Get-ChildItem
cd Documents
\```
```

**Supported languages:**

- `powershell` — PowerShell commands
- `bash` — Linux/Mac commands
- `python` — Python code
- `markdown` — Markdown syntax
- `html` — HTML code
- `javascript` — JavaScript code

**Example:**

```powershell
# List items in a folder
Get-ChildItem

# Navigate to Documents
cd Documents

# Go back one level
cd ..
```

### Screen Reader Optimization for Code

Add comments describing the code:

```powershell
# Create a new folder named "MyProject"
mkdir MyProject

# Navigate into it
cd MyProject

# List the contents
Get-ChildItem
```

---

## Part 7: Advanced Features

### Footnotes

```markdown
This is text with a footnote[^1].

[^1]: This is the footnote content.
```

**Output:** "This is text with a footnote." with a link to the note at the bottom.

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [x] Another done task
```

**Output:**
- [x] Completed task
- [ ] Incomplete task
- [x] Another done task

### Strikethrough

```markdown
~~This text is crossed out~~
```

**Output:** ~~This text is crossed out~~

### Emoji (Optional)

```markdown
:smile: :heart: :thumbsup:
```

**Renders as:** 😊 ❤️ 👍

---

## Part 8: Practical Examples

### Example 1: Course Assignment

```markdown
# Assignment 1: PowerShell Basics

**Due Date:** February 28, 2026  
**Worth:** 10 points

## Instructions

Complete these tasks using PowerShell:

1. Create a folder named "TestFolder"
2. Create three files inside it
3. Copy one file
4. Delete one file
5. List the remaining files

## Submission

Save a screenshot showing your terminal output.

### Grading Rubric

| Criterion | Points | Notes |
|-----------|--------|-------|
| Folder created | 2 | Must use correct name |
| Files created | 3 | All three required |
| File copied | 2 | Original and copy both exist |
| File deleted | 2 | Correct file removed |
| List shown | 1 | Terminal output visible |

**Total: 10 points**

## Helpful Resources

- [PowerShell Tutorial](https://example.com/ps-tutorial)
- [Command Reference](https://example.com/commands)
```

### Example 2: Project Documentation

```markdown
# My 3D Printing Project

## Overview

This project creates a parametric storage box for my desk.

## Specifications

| Feature | Value |
|---------|-------|
| Dimensions | 10cm × 10cm × 5cm |
| Material | PLA |
| Color | Red |
| Print Time | ~4 hours |

## Files

- `box_main.scad` — Main box body
- `box_lid.scad` — Removable lid
- `box_assembly.md` — Assembly instructions

## Status

- [x] Design complete
- [x] Test print done
- [ ] Refine based on test
- [ ] Final print

## Next Steps

1. Check fit of lid on body
2. Adjust tolerance if needed
3. Print final version

## References

- [OpenSCAD Docs](https://openscad.org/)
- [Box Design Tutorial](https://example.com/box-design)
```

### Example 3: Study Notes

```markdown
# PowerShell Navigation Notes

## Key Concepts

### Current Directory

The **current directory** is where you are right now in the file system.

### Paths

- **Absolute path:** Complete address (e.g., `C:\Users\Name\Documents`)
- **Relative path:** From current location (e.g., `../Documents`)

## Important Commands

```powershell
pwd                    # Print working directory
cd FolderName         # Change directory
cd ..                 # Go up one level
ls                    # List files (Mac/Linux)
Get-ChildItem         # List files (PowerShell)
```

## Practice Tasks

- [ ] Navigate to Documents
- [ ] Go up two levels
- [ ] List files in current folder
- [ ] Go back to home directory

## Questions for Review

1. What's the difference between absolute and relative paths?
2. When would you use `cd ..`?
3. How do you see what folder you're in?
```

---

## Part 9: Converting Markdown to Other Formats

### Using Pandoc (Free Tool)

Pandoc is a document converter that works with Markdown.

**Install Pandoc:**

- Windows: https://pandoc.org/installing.html
- Mac: `brew install pandoc`
- Linux: `apt-get install pandoc`

**Convert to PDF:**

```bash
pandoc myfile.md -o myfile.pdf
```

**Convert to Word:**

```bash
pandoc myfile.md -o myfile.docx
```

**Convert to HTML:**

```bash
pandoc myfile.md -o myfile.html
```

### Using Online Converters

No installation needed:

- Pandoc Online: https://pandoc.org/try/
- Markdown to PDF: https://markdown2pdf.com
- GitHub: Upload .md file to see it rendered

---

## Part 10: Best Practices for Accessibility

### Screen Reader Optimization

1. **Use proper heading hierarchy** — Start with `#`, not `##`
2. **Keep lists clear** — Use bullets, not paragraphs
3. **Write descriptive links** — `[Click here](url)` is bad; `[Comprehensive Guide to PowerShell](url)` is good
4. **Alt text for images** — Always describe what the image shows
5. **Avoid special formatting** — Use `**bold**`, not `_____` (lines)

### Writing for Clarity

**Do:**
- Use short paragraphs (3-4 sentences max)
- Start sections with a summary
- Use lists for multiple items
- Number steps in order

**Avoid:**
- Wall-of-text paragraphs
- Complex nested structures
- Unusual special characters
- Abbreviations without explanation

### Example: Bad vs. Good

**Bad (hard to read):**
```markdown
This doc contains info about setup and stuff. You need to do some things first before starting. Like make a folder. Also you need PowerShell. And files. Lots of files. Read the guide below for all the details about everything.
```

**Good (clear structure):**
```markdown
## Prerequisites

Before starting, ensure you have:

- PowerShell installed
- A folder for your project
- A text editor

## Setup Steps

1. Create your project folder
2. Open PowerShell
3. Navigate to the folder
4. Begin work
```

---

## Part 11: Common Markdown Mistakes

### Mistake 1: Forgetting Space After `#`

```markdown
# Correct heading
#Wrong heading (won't format)
```

Always add a space: `# Heading`

### Mistake 2: Mixing List Styles

```markdown
# Bad mixing
- Item 1
* Item 2
+ Item 3

# Good (consistent)
- Item 1
- Item 2
- Item 3
```

### Mistake 3: Nested Lists Not Indented

```markdown
# Wrong
- Item 1
- Sub item (not indented — won't show as nested)

# Correct
- Item 1
  - Sub item (indented with spaces)
```

### Mistake 4: Forgetting Blank Lines Between Elements

```markdown
# No blank lines (won't format correctly)
## Section 1
This is text.
## Section 2

# Correct (blank lines between)
## Section 1

This is text.

## Section 2
```

---

## Part 12: Quick Reference Cheat Sheet

### Syntax Overview

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold** and *Italic* and ***Both***

- Bullet list
  - Nested item
  
1. Numbered list
2. Second item

[Link text](https://example.com)

![Alt text](image.jpg)

| Header | Header |
|--------|--------|
| Cell   | Cell   |

> Quote

\```code block\```

---

Horizontal line
```

### File Naming

- Use `.md` extension
- Use descriptive names: `course-setup-guide.md`
- Use hyphens for spaces: `my-document.md` (not `my document.md`)
- Number sections: `01_introduction.md`, `02_basics.md`

### Screen Reader Commands

**In VS Code:**
- `Ctrl + Shift + P` → Type "Preview" → View Markdown preview
- `Ctrl + K V` → Open preview side-by-side

**In Terminal:**
- `cat myfile.md` → View content
- `less myfile.md` → Scroll through file

---

## Part 13: Next Steps

### Practice Tasks

1. **Create a resume in Markdown**
   - Use headings for sections
   - Use lists for skills and experience
   - Export to PDF with Pandoc

2. **Write assignment instructions**
   - Use clear numbered steps
   - Add a grading table
   - Include due date and requirements

3. **Take notes in Markdown**
   - Use headings for topics
   - Add task lists for review items
   - Link to references

4. **Create a project README**
   - Describe the project
   - List files and folders
   - Add instructions for others

### Learning Resources

- **Official Markdown Guide:** https://www.markdownguide.org/
- **GitHub Markdown:** https://github.github.com/gfm/
- **Pandoc Documentation:** https://pandoc.org/
- **VS Code Markdown:** https://code.visualstudio.com/Docs/languages/markdown

---

## Part 14: Troubleshooting

### Problem: Markdown won't format

**Solution:** Check that:
- File has `.md` extension
- Headings have space after `#`
- Syntax is correct (see cheat sheet)
- Preview tool supports the syntax

### Problem: Links don't work

**Solution:**
```markdown
# Wrong
[Link](http://example.com)

# Correct
[Link](https://example.com)
```

Always use `https://` when possible.

### Problem: Screen reader not reading table clearly

**Solution:** Simplify the table or use a list instead:

```markdown
# Instead of complex table, use a list:

**System Requirements:**
- RAM: 8 GB minimum
- Storage: 50 GB free
- Processor: 4 cores
```

### Problem: Can't open .md file

**Solution:** Right-click the file → "Open with" → Choose your text editor or VS Code

---

## Summary

You now know:

✅ What Markdown is and why it's useful  
✅ How to write headings, lists, and text formatting  
✅ How to create tables and code blocks  
✅ How to add links and images  
✅ Best practices for accessibility  
✅ How to convert Markdown to PDF/Word  
✅ Common mistakes and how to fix them  

**Start writing:** Create your first `.md` file and practice the syntax!

---

## Sources

Markdown Guide. (2025). *The comprehensive Markdown reference*. https://www.markdownguide.org/  
GitHub Flavored Markdown. (2025). *Specification and documentation*. https://github.github.com/gfm/  
Pandoc. (2025). *Universal document converter*. https://pandoc.org/  
Web Accessibility Guidelines. (2025). *Creating accessible technical documentation*. https://www.w3.org/WAI/
