# 3dMake Setup & Workflow Guide (Comprehensive)

This guide walks you through installing 3dMake, creating projects, and managing your workflow efficiently.

---

## Part 1: Installing 3dMake

### Prerequisites

Before installing 3dMake, ensure you have:

- Python 3.8+ installed on your system
- pip (Python package manager) available in your PATH
- Terminal or PowerShell access
- Internet connection to download packages

### Step-by-Step Installation

#### Step 1: Open Your Terminal

**PowerShell (Windows):**

- Press `Win + X` and select "Windows PowerShell" or "Terminal"
- For screen reader users: Use `Alt + F2` and type `powershell` if needed

**Linux/Mac:**

- Open your terminal application (Terminal, Konsole, etc.)

#### Step 2: Verify Python Installation

```bash
python --version
```

If you see a version number (e.g., `Python 3.9.13`), proceed to Step 3. If not, install Python from [https://python.org](https://python.org).

#### Step 3: Install 3dMake via pip

```bash
pip install 3dmake
```

This downloads and installs 3dMake and all dependencies.

#### Step 4: Verify Installation

```bash
3dmake --version
```

You should see the installed version number. If you see an error, troubleshoot by running:

```bash
pip install --upgrade 3dmake
```

#### Step 5: Get Help

```bash
3dmake --help
```

This displays all available 3dMake commands.

---

## Part 2: Creating and Managing Projects

### What Is a 3dMake Project?

A 3dMake project is a folder structure that organizes:

- **OpenSCAD files** (.scad) — your 3D models
- **STL exports** (.stl) — ready-to-print files
- **Configuration files** — project settings
- **Metadata** — project information and logs

### Creating Your First Project

#### Step 1: Choose or Create a Project Directory

Decide where you want your project. Examples:

```powershell
C:\Users\YourName\Documents\MyProjects\
/home/username/3d-projects/
~/Desktop/MyPrinter/
```

Create the directory if it doesn't exist:

**PowerShell:**

```powershell
mkdir C:\Users\YourName\Documents\3d-projects\FirstProject
```

**Linux/Mac:**

```bash
mkdir -p ~/3d-projects/FirstProject
```

#### Step 2: Navigate Into Your Project Directory

**PowerShell:**

```powershell
cd C:\Users\YourName\Documents\3d-projects\FirstProject
```

**Linux/Mac:**

```bash
cd ~/3d-projects/FirstProject
```

For screen reader users: Use `pwd` (print working directory) to confirm you're in the right folder.

#### Step 3: Initialize a 3dMake Project

```bash
3dmake new
```

This creates the project structure:

```bash
FirstProject/
├── models/           (stores your .scad files)
├── exports/          (stores exported .stl files)
├── 3dmake.config     (project settings)
└── README.md         (project documentation)
```

#### Step 4: Verify Project Creation

```bash
ls -la
```

or in PowerShell:

```powershell
Get-ChildItem -Force
```

You should see the project files listed.

---

## Part 3: Working With Your Project

### Creating OpenSCAD Models

#### Step 1: Create a New OpenSCAD File

Place your .scad files in the `models/` folder. You can create them in two ways:

##### **Option A: Create in OpenSCAD editor, then move file**

1. Open OpenSCAD
2. Write your code
3. Save as `models/mymodel.scad`

##### **Option B: Create directly in the models folder**

```bash
# Navigate to models folder
cd models

# Create and edit a new file (use your preferred editor)
# nano, vim, or open in VS Code:
code mymodel.scad
```

#### Step 2: Verify Your Model

Before exporting, check that your model renders without errors in OpenSCAD.

### Rendering and Exporting Models

#### Step 1: List Available Models

From your project root directory:

```bash
3dmake list
```

This shows all .scad files in the `models/` folder.

#### Step 2: Render a Specific Model

```bash
3dmake render models/mymodel.scad
```

This generates the mesh from your OpenSCAD code.

#### Step 3: Export to STL

```bash
3dmake export models/mymodel.scad --format stl
```

The STL file automatically goes into the `exports/` folder.

#### Step 4: Verify the Export

```bash
ls exports/
```

Your `mymodel.stl` should be listed.

### Using 3dMake's Analysis Tools

3dMake includes built-in analysis for quality checks:

#### Check Model Statistics

```bash
3dmake info models/mymodel.scad
```

Output includes:

- **Face count** — total triangles in the mesh
- **Volume** — cubic millimeters of material
- **Bounding box** — dimensions (X, Y, Z)
- **Manifold status** — whether model is watertight

#### Example Output

```powershell
=== Model Info: mymodel.scad ===
Volume: 1234.56 mm³
Faces: 2048
Bounding Box: 50.0 × 40.0 × 30.0 mm
Manifold: Yes ✓
```

#### Generate a Quality Report

```bash
3dmake validate models/mymodel.scad
```

This checks for:

- Non-manifold geometry
- Intersecting faces
- Thin walls
- Isolated vertices

#### Fix Common Issues

If validation finds issues:

1. **Non-manifold edges:** Ensure all faces form a closed solid
2. **Thin walls:** Check wall thickness (minimum 0.8–1.0 mm recommended)
3. **Intersecting faces:** Fix overlapping geometry in your OpenSCAD code

---

## Part 4: Managing Multiple Projects

### Switching Between Projects

#### Method 1: Navigate via Terminal

```bash
# Leave current project
cd ..

# Enter a different project
cd ../SecondProject
pwd  # Verify you're in the right place
```

For screen reader users, always use `pwd` after navigating to confirm your location.

#### Method 2: Create a Projects Directory Structure

Create a central folder for all projects:

```bash
3d-projects/
├── FirstProject/
│   ├── models/
│   ├── exports/
│   └── 3dmake.config
├── SecondProject/
│   ├── models/
│   ├── exports/
│   └── 3dmake.config
└── README.md (project index)
```

#### Method 3: Use a Project Index

Create a `README.md` in your `3d-projects/` folder:

```markdown
# My 3D Projects

## Project List

1. **FirstProject** — My initial test models
   - Location: `./FirstProject/models/`
   - Status: In progress
   - Latest model: `cube_test.scad`

2. **SecondProject** — Parametric keychain designs
   - Location: `./SecondProject/models/`
   - Status: Complete
   - Latest model: `keychain_v3.scad`

3. **ThirdProject** — Functional brackets for printing
   - Location: `./ThirdProject/models/`
   - Status: In progress
   - Latest model: `bracket_assembly.scad`
```

### Exporting from All Projects

To batch-export STLs from all projects:

**PowerShell:**

```powershell
Get-ChildItem -Directory | ForEach-Object {
    cd $_.FullName
    3dmake export models/*.scad --format stl
    cd ..
}
```

**Bash:**

```bash
for project in */; do
    cd "$project"
    3dmake export models/*.scad --format stl
    cd ..
done
```

---

## Part 5: Workflow Best Practices

### File Naming Conventions

Use clear, descriptive names:

**Good:**

- `cube_5cm.scad`
- `parametric_box_v2.scad`
- `bracket_for_motor.scad`

**Avoid:**

- `test.scad`
- `model1.scad`
- `final_final_FINAL.scad`

### Version Control (Optional)

If you're using Git, add a `.gitignore` to avoid committing large export files:

```bash
# .gitignore
exports/
*.stl
.DS_Store
__pycache__/
```

Then initialize Git:

```bash
git init
git add .
git commit -m "Initial project setup"
```

### Backup Strategy

Regularly backup your `models/` folder:

**PowerShell:**

```powershell
Copy-Item -Path "models" -Destination "backups/models_$(Get-Date -Format 'yyyy-MM-dd')" -Recurse
```

**Bash:**

```bash
cp -r models backups/models_$(date +%Y-%m-%d)
```

### Documentation

Keep a `models/README.md` describing each model:

```markdown
# Models in This Project

## cube_5cm.scad
- **Purpose:** Basic cube test
- **Parameters:** width=50, height=50, depth=50
- **Last modified:** 2025-02-20
- **Notes:** Used for adhesion testing on new printer

## parametric_box_v2.scad
- **Purpose:** Customizable storage box
- **Parameters:** length, width, height, wall_thickness
- **Last modified:** 2025-02-18
- **Notes:** Includes snap-fit lid
```

---

## Part 6: Troubleshooting

### Common Issues

#### "3dmake command not found"

**Solution:**

```bash
pip install --upgrade 3dmake
```

Then restart your terminal.

#### Model exports to wrong folder

**Solution:** Always verify you're in the correct project directory:

```bash
pwd
```

Make sure you see your project path, then verify `exports/` exists:

```bash
ls -la exports/
```

#### Screen reader doesn't read 3dMake output clearly

**Solution:** Use the `--verbose` flag for more detailed output:

```bash
3dmake export models/mymodel.scad --verbose
```

This logs each step, making it easier for screen readers to follow.

#### OpenSCAD model won't render in 3dMake

**Checklist:**

- [ ] File is named with `.scad` extension
- [ ] File is in the `models/` folder
- [ ] File has valid OpenSCAD syntax
- [ ] Run `3dmake validate` to check for errors

---

## Part 7: Quick Reference

### Essential Commands

| Command | Purpose |
| --------- | --------- |
| `3dmake --version` | Show installed version |
| `3dmake --help` | Display all commands |
| `3dmake init` | Initialize new project |
| `3dmake list` | List all models in project |
| `3dmake render <file>` | Render a model |
| `3dmake export <file>` | Export to STL format |
| `3dmake info <file>` | Show model statistics |
| `3dmake validate <file>` | Check for geometry issues |

### Directory Structure Reference

```bash
YourProject/
├── models/              ← Place .scad files here
├── exports/             ← STL files auto-save here
├── 3dmake.config        ← Project settings
├── README.md            ← Project documentation
└── backups/             ← Optional: backup folder
```

---

## Part 8: Next Steps

Once you're comfortable with basic projects:

1. **Learn parametric design** — Make reusable models with variables
2. **Explore modules** — Organize code into reusable functions
3. **Integrate with slicing** — Export directly to Bambu/Prusa/Anycubic
4. **Automate workflows** — Write scripts to batch-process models
5. **Collaborate** — Use Git to share projects with classmates

For advanced topics, see:

- [OpenSCAD Cheat Sheet](openscad-cheat-sheet.md)
- [Slicing Settings by Printer](Reference_Materials/slicing-settings-reference-prusa.md)

---

## Sources

3dMake Official Documentation. (2025). *3dMake — 3D modeling automation*. [https://3dmake.org/docs/](https://3dmake.org/docs/)  
OpenSCAD Community. (2025). *OpenSCAD user manual*. [https://openscad.org/manual/](https://openscad.org/manual/)  
Teaching Tech. (2024). *3D printing workflow optimization*. [https://www.youtube.com/@TeachingTech](https://www.youtube.com/@TeachingTech)
