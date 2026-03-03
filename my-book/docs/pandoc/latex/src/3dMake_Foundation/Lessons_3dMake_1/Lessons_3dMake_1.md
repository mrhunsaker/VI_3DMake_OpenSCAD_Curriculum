[Header 3 ("lesson-1--environmental-configuration-and-the-developer-workflow", [], []) [Str "Lesson 1 — Environmental Configuration and the Developer Workflow"], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Install and verify the 3dMake toolchain on Windows, macOS, and Linux"]], [Plain [Str "Understand the OpenSCAD coordinate system and unit conventions"]], [Plain [Str "Write and build your first parametric ", Code ("", [], []) ".scad", Str " file"]], [Plain [Str "Read and interpret ", Code ("", [], []) "3dm info", Str " output without a visual display"]], [Plain [Str "Use the core developer workflow: edit → build → verify"]]], HorizontalRule, Header 4 ("step-1--install-the-3dmake-toolchain", ["unnumbered", "unlisted"], []) [Str "Step 1 — Install the 3dMake Toolchain"], Header 5 ("linux--macos-bash", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "# Install via the official installer
curl -fsSL https://get.3dmake.dev | bash

# Verify installation
3dm --version
openscad --version
", Header 5 ("windows-powershell", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# Install via winget (Windows Package Manager)
winget install 3dMake.3dMake

# Or download the installer from https://3dmake.dev/install and run it
# Then verify in a new PowerShell window:
3dm --version
openscad --version
", Header 5 ("windows-command-prompt--cmd", ["unnumbered", "unlisted"], []) [Str "Windows (Command Prompt / CMD)"], CodeBlock ("", ["cmd"], []) "REM Verify after installation
3dm --version
openscad --version
REM If command not found, add C:\\\\Program Files\\\\3dMake\\\\bin to your PATH
", HorizontalRule, Header 4 ("step-2--understanding-the-openscad-coordinate-system", ["unnumbered", "unlisted"], []) [Str "Step 2 — Understanding the OpenSCAD Coordinate System"], Para [Strong [Str "Before writing any geometry, you must understand where objects are placed."]], Para [Str "OpenSCAD uses a ", Strong [Str "right-handed XYZ coordinate system"], Note [Para [Str "OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, ", Link ("", [], []) [Str "https://learn.cadhub.xyz/blog/openscad-review/"] ("https://learn.cadhub.xyz/blog/openscad-review/", "")]], Str ". The origin (0, 0, 0) is a fixed point in space:"], BulletList [[Plain [Strong [Str "X axis"], Str " — points to the right"]], [Plain [Strong [Str "Y axis"], Str " — points away from you (toward the back of the build plate)"]], [Plain [Strong [Str "Z axis"], Str " — points up (away from the build plate)"]]], Para [Strong [Str "All units are millimeters"], Str " unless you explicitly configure your slicer otherwise. A ", Code ("", [], []) "cube([10, 10, 10])", Str " creates a 10 mm × 10 mm × 10 mm cube. Always design in millimeters."], Para [Strong [Code ("", [], []) "center=false", Str " vs ", Code ("", [], []) "center=true"], Str " controls where the object sits relative to the origin:"], BulletList [[Plain [Code ("", [], []) "center=false", Str " (default): one corner of the cube sits at the origin; the cube occupies positive X, Y, and Z space"]], [Plain [Code ("", [], []) "center=true", Str ": the cube is centered on the origin; it extends from −5 to +5 in each axis"]]], CodeBlock ("", ["openscad"], []) "// Coordinate System Demonstration
// Run this to understand where (0,0,0) is relative to your shapes

// Default cube — sits with one corner at origin
// Occupies X: 0-20, Y: 0-20, Z: 0-10
cube([20, 20, 10]);

// Centered cube — straddles origin
// Occupies X: -10 to 10, Y: -10 to 10, Z: -5 to 5
translate([35, 0, 0])
  cube([20, 20, 10], center=true);

// Tiny marker at the exact origin so you can see where (0,0,0) is
color(\"red\") sphere(r=1.5, $fn=16);

// Axis markers
color(\"red\")   translate([25, 0, 0]) cylinder(r=0.5, h=1, $fn=8);  // +X
color(\"green\") translate([0, 25, 0]) cylinder(r=0.5, h=1, $fn=8);  // +Y
color(\"blue\")  cylinder(r=0.5, h=25, $fn=8);                        // +Z
", BlockQuote [Para [Strong [Str "Screen Reader Note:"], Str " When using ", Code ("", [], []) "3dm info", Str ", the description will reflect the absolute position of each object in the coordinate space. If an object is not where you expect it, first check whether you used ", Code ("", [], []) "center=false", Str " or ", Code ("", [], []) "center=true", Str "."]], HorizontalRule, Header 4 ("step-3--create-your-first-project", ["unnumbered", "unlisted"], []) [Str "Step 3 — Create Your First Project"], Header 5 ("linux--macos-bash-1", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "mkdir my_first_project
cd my_first_project
mkdir src build

# Create a starter file
cat > src/main.scad << 'EOF'
// My First Parametric Model
width  = 30;   // mm
depth  = 20;   // mm
height = 10;   // mm

cube([width, depth, height]);
EOF
", Header 5 ("windows-powershell-1", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "New-Item -ItemType Directory -Path \"my_first_project\\\\src\",\"my_first_project\\\\build\"
Set-Location \"my_first_project\"

# Create a starter file
@'
// My First Parametric Model
width  = 30;   // mm
depth  = 20;   // mm
height = 10;   // mm

cube([width, depth, height]);
'@ | Out-File -FilePath \"src\\\\main.scad\" -Encoding UTF8
", Header 5 ("windows-cmd", ["unnumbered", "unlisted"], []) [Str "Windows (CMD)"], CodeBlock ("", ["cmd"], []) "mkdir my_first_project\\\\src
mkdir my_first_project\\\\build
cd my_first_project

REM Create the scad file using echo (use a text editor for real projects)
echo // My First Parametric Model > src\\\\main.scad
echo width  = 30; >> src\\\\main.scad
echo depth  = 20; >> src\\\\main.scad
echo height = 10; >> src\\\\main.scad
echo cube([width, depth, height]); >> src\\\\main.scad
", HorizontalRule, Header 4 ("step-4--build-and-verify", ["unnumbered", "unlisted"], []) [Str "Step 4 — Build and Verify"], Header 5 ("build-all-platforms", ["unnumbered", "unlisted"], []) [Str "Build (all platforms)"], CodeBlock ("", ["bash"], []) "# Linux/macOS
3dm build

# Windows PowerShell or CMD — identical command
3dm build
", Header 5 ("read-the-output", ["unnumbered", "unlisted"], []) [Str "Read the output"], CodeBlock ("", ["bash"], []) "3dm info
", Para [Strong [Str "Sample output:"]], CodeBlock ("", [""], []) "File:         build/main.stl
Bounding Box: 30.0 x 20.0 x 10.0 mm
Volume:       6000.0 mm³
Triangles:    12
", Para [Strong [Str "Reading ", Code ("", [], []) "3dm info", Str " without a visual display:"]], Para [Str "The bounding box tells you the outer envelope of your model in millimeters:"], BulletList [[Plain [Code ("", [], []) "30.0 x 20.0 x 10.0 mm", Str " means the model is 30 mm wide (X), 20 mm deep (Y), and 10 mm tall (Z)"]], [Plain [Str "If you designed ", Code ("", [], []) "cube([30, 20, 10])", Str ", this confirms the model built correctly"]], [Plain [Str "If the bounding box is 0 × 0 × 0, the model failed to build (check the error log)"]], [Plain [Strong [Str "Volume"], Str " tells you how much material will be used — approximately 1 cm³ per 1,000 mm³"]]], Para [Strong [Str "Estimating material cost from volume:"]], CodeBlock ("", [""], []) "mass_g  = (volume_mm3 / 1000) × filament_density_g_per_cm3
cost_$  = mass_g × (spool_price / spool_weight_g)

Example: 6000 mm³ of PLA (density 1.24 g/cm³), $20/1000g spool
  mass  = (6000/1000) × 1.24  = 7.44 g
  cost  = 7.44 × (20/1000)    = $0.15 in filament
", HorizontalRule, Header 4 ("step-5--the-core-developer-workflow", ["unnumbered", "unlisted"], []) [Str "Step 5 — The Core Developer Workflow"], CodeBlock ("", [""], []) "EDIT  →  BUILD  →  VERIFY  →  repeat

Edit:    Change src/main.scad in any text editor
Build:   3dm build
Verify:  3dm info   (bounding box, volume)
         3dm info  (AI geometry description)
         Open build/main.stl in slicer for layer preview
", Header 5 ("watch-mode-auto-rebuild-on-save", ["unnumbered", "unlisted"], []) [Str "Watch mode (auto-rebuild on save)"], CodeBlock ("", ["bash"], []) "# Linux/macOS
3dm watch

# Windows PowerShell
3dm watch

# Windows CMD
3dm watch
", HorizontalRule, Header 4 ("step-6--advanced-technique-parameterized-builds-from-the-command-line", ["unnumbered", "unlisted"], []) [Str "Step 6 — Advanced Technique: Parameterized Builds from the Command Line"], Para [Str "Once your model uses variables at the top, you can override them from the command line without editing the file. This is essential for batch builds and CI automation."], Header 5 ("linux--macos-bash-2", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "# Build with different parameter values
openscad -D \"width=50\" -D \"height=15\" -o build/main_large.stl src/main.scad

# Loop over multiple sizes
for w in 20 30 40 50; do
  openscad -D \"width=$w\" -o \"build/main_w${w}.stl\" src/main.scad
  echo \"Built: width=$w → build/main_w${w}.stl\"
done
", Header 5 ("windows-powershell-2", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# Build with different parameter values
openscad -D \"width=50\" -D \"height=15\" -o \"build\\\\main_large.stl\" \"src\\\\main.scad\"

# Loop over multiple sizes
$widths = @(20, 30, 40, 50)
foreach ($w in $widths) {
  openscad -D \"width=$w\" -o \"build\\\\main_w$w.stl\" \"src\\\\main.scad\"
  Write-Host \"Built: width=$w -> build/main_w$w.stl\"
}
", Header 5 ("windows-cmd-1", ["unnumbered", "unlisted"], []) [Str "Windows (CMD)"], CodeBlock ("", ["cmd"], []) "REM Build with a parameter override
openscad -D \"width=50\" -D \"height=15\" -o build\\\\main_large.stl src\\\\main.scad

REM Note: loops in CMD are limited. Use PowerShell for automation tasks.
FOR %%W IN (20 30 40 50) DO (
  openscad -D \"width=%%W\" -o build\\\\main_w%%W.stl src\\\\main.scad
  echo Built width=%%W
)
", HorizontalRule, Header 4 ("summary", ["unnumbered", "unlisted"], []) [Str "Summary"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.1927710843373494)), (AlignDefault, (ColWidth 0.8072289156626506))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Concept"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Key Point"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Units"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Always millimeters"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Origin"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "(0, 0, 0) — lower-left-front of build space"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "X axis"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Points right"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Y axis"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Points away from you"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Z axis"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Points up"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "center=false"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Default — one corner at origin"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "center=true"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Object straddles origin"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm info"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Deterministic — use for verification when AI description is vague"]]]])] (TableFoot ("", [], []) []), HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 1.1:"], Str " Create a cube that is exactly 50 mm × 30 mm × 8 mm. Use ", Code ("", [], []) "3dm info", Str " to confirm the bounding box matches."], Para [Strong [Str "Exercise 1.2:"], Str " Change your cube to ", Code ("", [], []) "center=true", Str ". What does ", Code ("", [], []) "3dm info", Str " report? Why does the bounding box stay the same even though the position changed?"], Para [Strong [Str "Exercise 1.3 (Advanced):"], Str " Write a bash/PowerShell loop that generates 5 STL files with heights 5, 10, 15, 20, and 25 mm, using command-line parameter overrides. Confirm each file's bounding box with ", Code ("", [], []) "3dm info", Str "."], CodeBlock ("", ["openscad"], []) "  difference() {
    cube([outer_w, outer_d, outer_h], center=true);
    cube([outer_w - 2*wall, outer_d - 2*wall, outer_h], center=true);
  }
", OrderedList (3, DefaultStyle, DefaultDelim) [[Plain [Str "Document Known Limitations"]]], CodeBlock ("", ["openscad"], []) "// Phone Stand v2
// Limitations:
// - Not suitable for phones heavier than 200g
// - Recommend PLA or PETG (TPU may warp at recommended angles)
// - Print with 20%+ infill for stability
// - Supports may be needed on underside of angle > 70 degrees
", OrderedList (4, DefaultStyle, DefaultDelim) [[Plain [Str "Accessibility in Code Documentation"]]], BulletList [[Plain [Str "Use plain language, not jargon (or explain jargon)"]], [Plain [Str "Explain visual concepts in text (e.g., \"fillet radius of 3mm rounds sharp corners\")"]], [Plain [Str "Include parameter ranges and units always"]], [Plain [Str "Describe geometry relationships (e.g., \"lip height 1/3 of stand height\")"]]], Header 5 ("example-well-documented-file", ["unnumbered", "unlisted"], []) [Str "Example: Well-Documented File"], CodeBlock ("", ["openscad"], []) "// ==============================================================
// Parametric Keycap with Embossed Letter
// ==============================================================
// Purpose: Customizable keyboard keycap for 3D printing
// Applications: Custom keyboards, gaming, accessibility
// Print Time: 3-5 min per cap (varies by size)
// Material: ~2g PLA per cap
//
// PARAMETERS TO CUSTOMIZE:
// - cap_size: 12-28 mm (small to large keycap)
// - cap_height: 6-15 mm
// - letter: any single character to emboss
//
// PRINT RECOMMENDATIONS:
// - Layer height: 0.15 mm (better letter quality)
// - Infill: 15% (sufficient for keyboard use)
// - No supports needed
// - Print with smooth base facing bed
//
// TESTING CHECKLIST:
// - Measure cap_size with calipers (should match design within 0.3mm)
// - Test embossed letter is legible (raised ~0.5mm from surface)
// - Test fit on actual keyboard switch (should snap fit snugly)
// ==============================================================
// ============================================
// CUSTOMIZABLE PARAMETERS
// ============================================
cap_size = 14;        // mm - key size (typical: 12-18 for alphanumeric)
cap_height = 10;      // mm - distance from base to top
wall_thickness = 1.2; // mm - side wall thickness (1-1.5 typical)
letter = \"A\";         // Character to emboss on top
emboss_depth = 0.8;   // mm - how deep letter is raised (0.5-1.0 recommended)
// ============================================
// DERIVED CALCULATIONS
// ============================================
inner_size = cap_size - 2 * wall_thickness;
// ============================================
// MODULE: Hollow shell
// ============================================
module keycap_shell() {
  difference() {
    // Outer box
    cube([cap_size, cap_size, cap_height], center = false);
    // Hollow interior (removed part)
    translate([wall_thickness, wall_thickness, wall_thickness])
      cube([inner_size, inner_size, cap_height], center = false);
  }
}
// ============================================
// MODULE: Embossed letter on top
// ============================================
module embossed_letter() {
  translate([cap_size / 2, cap_size / 2, cap_height - 0.01])
    linear_extrude(height = emboss_depth)
      text(letter, 
           size = cap_size * 0.5,
           halign = \"center\",
           valign = \"center\",
           font = \"Impact:style=Regular\");
}
// ============================================
// ASSEMBLY: Combine shell + emboss
// ============================================
union() {
  keycap_shell();
  embossed_letter();
}
", Para [Str "This level of documentation makes your code:"], BulletList [[Plain [Str "Reusable: Others can use it without reading every line"]], [Plain [Str "Maintainable: You can modify it months later and understand why things are designed a certain way"]], [Plain [Str "Accessible: Non-visual users can understand the design intent and constraints"]], [Plain [Str "Professional: Employers and collaborators trust well-documented code"]]], Header 5 ("checkpoints", ["unnumbered", "unlisted"], []) [Str "Checkpoints"], BulletList [[Plain [Str "After step 2 you can locate ", Code ("", [], []) "3dmake.toml", Str " and the ", Code ("", [], []) "build/", Str " directory. Ensure your project scaffold matches the expected structure described in the 3dMake repository", Note [Para [Str "3DMake GitHub Repository - ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake"] ("https://github.com/tdeck/3dmake", "")]], Str "."]], [Plain [Str "After step 4 the ", Code ("", [], []) "build/", Str " folder contains a valid ", Code ("", [], []) "main.stl", Str ". Verify the geometry using your slicer's validation tools", Note [Para [Str "Slicer Validation Tools - PrusaSlicer Documentation - ", Link ("", [], []) [Str "https://docs.prusa3d.com/en/guide/39012-validation-tools/"] ("https://docs.prusa3d.com/en/guide/39012-validation-tools/", "")]], Str "."]], [Plain [Str "After this section, your code includes file header, parameter documentation, and module descriptions following professional standards."]]], Header 4 ("understanding-3d-printing-technology-the-fdm-pipeline", ["unnumbered", "unlisted"], []) [Str "Understanding 3D Printing Technology: The FDM Pipeline"], Para [Str "Before you send your first print, it's important to understand how 3D printers work and how the choices you make in the slicer affect the final result. This section builds on the workflow you learned above by explaining ", Emph [Str "what happens after"], Str " ", Code ("", [], []) "3dm build", Str "."], Header 5 ("the-fdm-fused-deposition-modeling-process", ["unnumbered", "unlisted"], []) [Str "The FDM (Fused Deposition Modeling) Process"], Para [Str "FDM printing builds objects layer by layer, where each layer is a thin horizontal slice of your STL file. Here's the complete pipeline:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "STL File -> Your 3dMake model exported as an STL geometry file"]], [Plain [Str "Slicer Analysis -> Software like PrusaSlicer reads the STL and divides it into layers"]], [Plain [Str "G-code Generation -> The slicer converts layers into machine instructions (coordinates, temperature, speed)"]], [Plain [Str "Printing -> The printer reads G-code, heats the nozzle to ", Str "~", Str "200-230C, and extrudes plastic one layer at a time"]], [Plain [Str "Cooling & Solidification -> Each layer cools and bonds to the layer below"]]], Header 5 ("critical-settings-that-affect-your-print", ["unnumbered", "unlisted"], []) [Str "Critical Settings That Affect Your Print"], Para [Str "When you open your STL in a slicer, you'll encounter several parameters that directly impact quality, time, and strength:"], Header 6 ("layer-height", ["unnumbered", "unlisted"], []) [Str "Layer Height"], BulletList [[Plain [Str "Definition: The thickness of each printed layer (typically 0.15-0.30 mm)"]], [Plain [Str "Effect on Time: Smaller layers = more detail but longer print time. A layer height of 0.15 mm prints slower than 0.30 mm because more layers must be printed"]], [Plain [Str "Effect on Quality: Smaller layers produce smoother surfaces; larger layers print faster but appear more \"stepped\""]], [Plain [Str "Common Choice: 0.20 mm is a good balance for classroom projects"]]], Header 6 ("infill", ["unnumbered", "unlisted"], []) [Str "Infill"], BulletList [[Plain [Str "Definition: The interior solid percentage of your model (0-100%)"]], [Plain [Str "Purpose: Infill provides internal strength without using solid material throughout (which would be wasteful and heavy)"]], [Plain [Str "Common Values for Classroom: 15-20% infill is typical; 10% for very light parts, 50% for functional parts"]], [Plain [Str "Infill Patterns: Grid, gyroid, or honeycomb patterns determine how the internal structure looks. Grid is simple and fast; gyroid is strong but more complex"]], [Plain [Str "Rule of Thumb: Higher infill = stronger, heavier, and longer print time"]]], Header 6 ("supports", ["unnumbered", "unlisted"], []) [Str "Supports"], BulletList [[Plain [Str "Definition: Temporary structures the printer creates to hold overhanging geometry during printing"]], [Plain [Str "When Needed: Any geometry that \"hangs\" at a steep angle (typically > 45 from vertical) requires supports"]], [Plain [Str "Post-Processing: Supports must be removed after printing (breaking them off, dissolving them, or picking them away)"]], [Plain [Str "Cost: Supports increase print time and waste material, so good STL design minimizes them"]]], Header 5 ("why-this-matters-for-your-design", ["unnumbered", "unlisted"], []) [Str "Why This Matters for Your Design"], Para [Str "When you wrote ", Code ("", [], []) "src/main.scad", Str " in the tasks above, you created a parametric model. Those parameters become ", Emph [Str "constraints"], Str " that affect how well your part prints:"], BulletList [[Plain [Str "A ", Code ("", [], []) "thickness", Str " of 0.5 mm might be too thin for FDM (will break easily)"]], [Plain [Str "A ", Code ("", [], []) "width", Str " of 300 mm will take many hours to print"]], [Plain [Str "Sharp corners and thin walls can cause printing failures"]]], Para [Str "Understanding the FDM pipeline helps you design parts that not only look correct in OpenSCAD but will actually ", Emph [Str "print successfully"], Str "."], Header 5 ("next-steps-the-slicer", ["unnumbered", "unlisted"], []) [Str "Next Steps: The Slicer"], Para [Str "After you create an STL with ", Code ("", [], []) "3dm build", Str ", you open it in a slicer to:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Verify geometry (check for thin walls or non-manifold faces)", Note [Para [Str "OpenSCAD User Manual - Non-Manifold Geometry, accessed February 18, 2026, ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ#Why_is_my_model_not_manifold.3F"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/FAQ#Why_is_my_model_not_manifold.3F", "")]]]], [Plain [Str "Set layer height, infill, and supports"]], [Plain [Str "Preview the layers to see what the printer will do"]], [Plain [Str "Export as G-code to send to the printer"]]], Para [Str "You'll practice this workflow in Lesson 2, where you'll iterate on a simple part and resolve common printing issues."], Header 4 ("getting-started-guided-projects--extension-resources", ["unnumbered", "unlisted"], []) [Str "Getting Started: Guided Projects & Extension Resources"], Para [Str "Once you've completed this lesson, you're ready to work on hands-on projects. The curriculum includes several guided projects and extension resources:"], Header 5 ("extension-projects-beginner-to-advanced", ["unnumbered", "unlisted"], []) [Str "Extension Projects (Beginner to Advanced)"], Para [Str "These projects are located in the Lesson 1 assets folder and are designed to reinforce your skills in practical contexts:"], BulletList [[Para [Str "Your First Print (", Link ("", [], []) [Str "Lesson 1 Assets - Your First Print"] ("docs/pandoc/latex/src/assets/3dMake_Foundation/Lessons_3dMake_1/Your_First_Print/your-first-print.md", ""), Str ")"], BulletList [[Plain [Str "Goal: Low-friction introduction to the complete printing workflow"]], [Plain [Str "Skills: Setup, basic slicing, first-time print validation"]], [Plain [Str "Best for: After completing Lesson 1"]], [Plain [Str "Asset folder: ", Link ("", [], []) [Str "assets/Lessons_3dMake_1/Your_First_Print/"] ("docs/pandoc/latex/src/assets/3dMake_Foundation/Lessons_3dMake_1/Your_First_Print", "")]]]], [Para [Str "Basic Project Scaffold Template (", Link ("", [], []) [Str "Lesson 1 Assets - SCAD Template"] ("docs/pandoc/latex/src/assets/3dMake_Foundation/Lessons_3dMake_1/basic_project_scaffold.scad", ""), Str ")"], BulletList [[Plain [Str "A starter template for your own 3D printing projects"]], [Plain [Str "Includes parameter configuration and TODO sections"]]]]], Header 5 ("learning-series-sample-projects", ["unnumbered", "unlisted"], []) [Str "Learning Series Sample Projects"], Para [Str "The ", Code ("", [], []) "3dmake_learning_series/", Str " folder contains worked examples aligned with this curriculum:"], BulletList [[Plain [Str "01_cube_keycap (Beginner) - Text embossing basics"]], [Plain [Str "02_parametric_phone_stand (Intermediate) - Transforms and Minkowski fillets"]], [Plain [Str "03_stackable_bins (Advanced) - Tolerance and assemblies"]]], Header 5 ("reference-materials", ["unnumbered", "unlisted"], []) [Str "Reference Materials"], Para [Str "Quick-reference guides are available in ", Code ("", [], []) "Reference_Materials/", Str ":"], BulletList [[Plain [Str "3dmake-setup-guide.md - Complete setup walkthrough and command reference"]], [Plain [Str "openscad-cheat-sheet.md - Keyboard shortcuts, syntax, and common functions"]], [Plain [Str "filament-comparison-table.md - Material properties for different print scenarios"]], [Plain [Str "master-rubric.md - Assessment criteria for evaluating student work"]]], Header 4 ("quiz---lesson-3dmake1-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz - Lesson 3dMake.1 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What command initializes a 3dMake project?"]], [Plain [Str "What folder holds generated STLs?"]], [Plain [Str "How do you open the main model editor from the CLI?"]], [Plain [Str "Why is it useful to run ", Code ("", [], []) "3dm build", Str " frequently during development?"]], [Plain [Str "Give one reason to prefer an external editor over editing inline."]], [Plain [Str "True or False: 3dMake requires a graphical user interface to use effectively."]], [Plain [Str "Explain what the ", Code ("", [], []) "3dmake.toml", Str " file does in your project."]], [Plain [Str "Describe what the ", Code ("", [], []) "src/", Str ", ", Code ("", [], []) "build/", Str ", and other project scaffold folders are used for."]], [Plain [Str "How would you compare the 3dMake build workflow to traditional OpenSCAD workflows?"]], [Plain [Str "What validation steps should you perform after running ", Code ("", [], []) "3dm build", Str " and before sending a file to print?"]], [Plain [Str "What is the difference between the global configuration file (", Code ("", [], []) "defaults.toml", Str ") and the project configuration file (", Code ("", [], []) "3dmake.toml", Str ")? Which takes precedence when both define the same setting?"]], [Plain [Str "Describe what a TOML boolean value looks like and give one example of a 3dMake setting that would use a boolean."]], [Plain [Str "What command would you run to see all available 3dMake commands, and what command shows the installed version number?"]], [Plain [Str "Explain what FDM stands for and describe the five-step pipeline from STL file to cooled physical part."]], [Plain [Str "You run ", Code ("", [], []) "3dm build", Str " and receive the error \"No such file or directory: src/main.scad\". What are two likely causes and how would you fix each one?"]]], Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Add a README entry explaining your top-level parameters and expected units. Reference best practices from the OpenSCAD documentation", Note [Para [Str "OpenSCAD Manual - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual", "")]], Str "."]], [Plain [Str "Create a parameter variant by changing ", Code ("", [], []) "width", Str " by 20% and build both variants; compare dimensions with calipers. This demonstrates the power of parametric design discussed in programming resources", Note [Para [Str "OpenSCAD Parametric Design - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/The_OpenSCAD_Language#Variables", "")]], Str "."]], [Plain [Str "Script a ", Code ("", [], []) "3dm", Str " command sequence that automates new -> edit -> build for the scaffold. Review the 3dMake test suite for inspiration", Note [Para [Str "3dmake/e2e_test.py at main - GitHub, accessed February 18, 2026, ", Link ("", [], []) [Str "https://github.com/tdeck/3dmake/blob/main/e2e_test.py"] ("https://github.com/tdeck/3dmake/blob/main/e2e_test.py", "")]], Str "."]], [Plain [Str "Intentionally create a thin-wall error and document the steps you took to find and fix it. Consult slicing guides", Note [Para [Str "Slicing Guides and Common Geometry Issues - PrusaSlicer Documentation, accessed February 18, 2026, ", Link ("", [], []) [Str "https://docs.prusa3d.com/en/"] ("https://docs.prusa3d.com/en/", "")]], Str " for identifying common geometry issues."]], [Plain [Str "Prepare a short instructor sign-off checklist describing safety checks before printing."]], [Plain [Str "Build a variant testing suite: create 5+ parameter combinations, export STLs, and compare file sizes and estimated print times."]], [Plain [Str "Create a 3dMake project template with best-practice structure, documentation, and reusable modules for future projects."]], [Plain [Str "Develop a screen-reader accessibility guide for 3dMake CLI commands and parameter syntax."]], [Plain [Str "Design a parametric part library in 3dMake format; document all parameters, units, and example usage."]], [Plain [Str "Write a comprehensive troubleshooting guide for common 3dMake build errors, with solutions and prevention tips."]], [Plain [Str "Add a ", Code ("", [], []) ".gitignore", Str " file to a new project, commit the scaffold using Git, then make a parameter change and create a second commit. Write a one-paragraph explanation of why version control is valuable for parametric design."]], [Plain [Str "Edit the global configuration file using ", Code ("", [], []) "3dm edit-global-config", Str " to change the default editor. Document the setting name, the value you chose, and how you verified the change took effect."]], [Plain [Str "Create a project with three ", Code ("", [], []) ".scad", Str " files (e.g., ", Code ("", [], []) "main.scad", Str ", ", Code ("", [], []) "lid.scad", Str ", ", Code ("", [], []) "base.scad", Str ") and build each using ", Code ("", [], []) "3dm build -m <name>", Str ". Record the output STL filenames for each."]], [Plain [Str "Research the FDM layer height trade-off: slice the same model at 0.15 mm, 0.20 mm, and 0.30 mm layer heights. Record estimated print time and filament use for each. Write two sentences explaining the trade-off."]], [Plain [Str "Write a one-page \"new student onboarding guide\" for 3dMake that covers installation, project creation, first build, and first print. Use accessible language suitable for someone with no prior terminal experience."]]], Header 4 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], Para [Str "For deeper exploration of OpenSCAD and parametric design, consult these resources:"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/latex/src/assets/Programming_with_OpenSCAD.epub", ""), Str " - Comprehensive reference with examples of parametric design, transformations, and modules"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " - Working OpenSCAD code organized by topic, including 3D primitives and parametric examples relevant to Lesson 1"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " - Visual syntax guide and command reference"]]]]