[Header 3 ("lesson-6--practical-3dm-commands-and-text-embossing", [], []) [Str "Lesson 6 — Practical 3dm Commands and Text Embossing"], Para [Strong [Str "Estimated Time:"], Str " 90–120 minutes", LineBreak, Strong [Str "Course:"], Str " 3dMake Certification — High School Distance Learning Track"], HorizontalRule, Header 4 ("before-you-start", ["unnumbered", "unlisted"], []) [Str "Before You Start"], Para [Str "You've built solid 3D geometry, organized it into modules, learned to verify it rigorously, and understood the physical realities of printing it safely. Now we're going to add two powerful new capabilities to your toolkit."], Para [Str "The first is ", Strong [Str "text"], Str ". Adding text to 3D parts is more useful than it might sound at first. Engineers put part numbers on manufactured components so they can be identified after assembly. Makers label storage bins so they can find what they need. Designers emboss names and logos on products. Accessibility designers create braille labels. OpenSCAD's ", Code ("", [], []) "text()", Str " function makes all of this parametric — you can generate a hundred labeled bins automatically, make the text content a parameter, and produce variants for different languages or quantities without touching the geometry code at all."], Para [Str "The second is the ", Strong [Str "full ", Code ("", [], []) "3dm", Str " command suite"], Str ". You've been using ", Code ("", [], []) "3dm build", Str " and ", Code ("", [], []) "3dm info", Str ". There are three more commands — ", Code ("", [], []) "preview", Str ", ", Code ("", [], []) "orient", Str ", and ", Code ("", [], []) "slice", Str " — that round out the workflow from design to print."], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Use ", Code ("", [], []) "text()", Str " to add embossed and debossed labels to 3D models"]], [Plain [Str "Find available fonts on your system and write portable font code"]], [Plain [Str "Size text to fit a specific container using the cap-height model"]], [Plain [Str "Use the full ", Code ("", [], []) "3dm", Str " command suite: ", Code ("", [], []) "build", Str ", ", Code ("", [], []) "info", Str ", ", Code ("", [], []) "preview", Str ", ", Code ("", [], []) "orient", Str ", ", Code ("", [], []) "slice"]], [Plain [Str "Use OpenSCAD string functions: ", Code ("", [], []) "str()", Str ", ", Code ("", [], []) "len()", Str ", ", Code ("", [], []) "search()", Str ", ", Code ("", [], []) "substr()"]], [Plain [Str "Apply ", Code ("", [], []) "let()", Str " for scoped variable declarations"]], [Plain [Str "Automate multi-variant text label generation in bash, PowerShell, and CMD"]]], HorizontalRule, Header 4 ("concept-1-the-full-3dm-command-suite", ["unnumbered", "unlisted"], []) [Str "Concept 1: The Full ", Code ("", [], []) "3dm", Str " Command Suite"], Header 5 ("five-commands-one-workflow", ["unnumbered", "unlisted"], []) [Str "Five Commands, One Workflow"], Para [Str "You've been using two commands. Here's the complete set:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.16049382716049382)), (AlignDefault, (ColWidth 0.5061728395061729)), (AlignDefault, (ColWidth 0.3333333333333333))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Command"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "What It Does"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Output"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm build"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Compiles ", Code ("", [], []) ".scad", Str " source → ", Code ("", [], []) ".stl", Str " geometry"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "build/main.stl"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm info"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Reports dimensions and AI description"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Console text"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm preview"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Renders model to an image file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "build/preview.png"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm orient"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "AI-suggested print orientation"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Console text recommendation"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm slice"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Calls your slicer on the current STL"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "G-code file"]]]])] (TableFoot ("", [], []) []), CodeBlock ("", ["bash"], []) "# BUILD VARIANTS
3dm build                          # standard build
3dm build --clean                  # delete build/ folder first, then rebuild
3dm build --watch                  # auto-rebuild when src/ files change

# INFORMATION AND DESCRIPTION
3dm info                           # bounding box, volume, triangle count, AI description
3dm info --file path/to/file.stl   # query a specific STL (not just the current build)
3dm info --view front              # generate description from the front view
3dm info --view top,front,isometric  # generate from multiple views

# ORIENTATION, PREVIEW, SLICING
3dm preview                        # render model to build/preview.png
3dm orient                         # AI recommendation for best print orientation
3dm slice                          # call slicer on build/main.stl
", Header 5 ("3dm-orient--what-it-does-and-how-to-use-it", ["unnumbered", "unlisted"], []) [Code ("", [], []) "3dm orient", Str " — What It Does and How to Use It"], Para [Code ("", [], []) "3dm orient", Str " uses AI to analyze your model's geometry and recommend which face should be placed down on the build plate for printing. This recommendation considers two things: minimizing the need for supports (overhangs), and maximizing the quality of visible surfaces (which sit better when they're on the top or sides, not facing down toward the bed)."], Para [Str "Use ", Code ("", [], []) "3dm orient", Str " as a starting suggestion, but verify it with your own judgment. For complex parts, you may have competing priorities — perhaps the AI recommends an orientation that minimizes supports but puts a cosmetically important surface face-down against the bed, where it will look rough. Your own analysis matters."], HorizontalRule, Header 4 ("concept-2-text-on-3d-parts", ["unnumbered", "unlisted"], []) [Str "Concept 2: Text on 3D Parts"], Header 5 ("why-3d-text-is-useful", ["unnumbered", "unlisted"], []) [Str "Why 3D Text Is Useful"], Para [Str "Before diving into syntax, it's worth thinking about why you'd want text on a 3D print:"], Para [Strong [Str "Identification"], Str " — part numbers, serial numbers, batch codes. Manufacturing parts need to be traceable. A part with its number embossed on it can never be confused with another part."], Para [Strong [Str "Directional labels"], Str " — \"FRONT,\" \"TOP,\" \"THIS SIDE UP.\" Assembly instructions encoded directly in the part."], Para [Strong [Str "Storage and organization"], Str " — labels for bins, drawers, shelves. Parametric text means you can batch-generate 30 labeled bins automatically."], Para [Strong [Str "Personalization"], Str " — names, logos, messages on gifts, art, and personal projects."], Para [Strong [Str "Accessibility"], Str " — braille labels for visually impaired users. OpenSCAD can generate braille if you encode the dot patterns."], HorizontalRule, Header 4 ("step-1--the-text-function", ["unnumbered", "unlisted"], []) [Str "Step 1 — The ", Code ("", [], []) "text()", Str " Function"], Header 5 ("how-text-works-in-openscad", ["unnumbered", "unlisted"], []) [Str "How Text Works in OpenSCAD"], Para [Code ("", [], []) "text()", Str " creates a ", Strong [Str "2D"], Str " shape from a text string. By itself, it's flat — it has no height. You add height by wrapping it in ", Code ("", [], []) "linear_extrude()", Str ", which pushes the 2D letterforms straight up along the Z axis."], Para [Strong [Str "Embossed text"], Str " is raised above the surface — the letters stand up above the base. This is more visible and readable, especially at small sizes, because there's contrast between the raised letters and the surrounding surface."], Para [Strong [Str "Debossed text"], Str " (also called engraved or incised) is carved into the surface — the letters are sunken below the surrounding surface. This reads well when the sunken areas catch shadow, or when filled with paint. It also doesn't add any height to the overall part dimensions."], CodeBlock ("", ["openscad"], []) "// Full text() parameter reference
linear_extrude(height=1.5)
  text(
    text      = \"3dMake\",           // the string to display
    size      = 10,                  // cap height in mm (capital letter height)
    font      = \"Liberation Sans\",   // font family name (more on this in Step 2)
    halign    = \"center\",            // horizontal alignment: \"left\", \"center\", \"right\"
    valign    = \"baseline\",          // vertical alignment: \"top\", \"center\", \"baseline\", \"bottom\"
    spacing   = 1.0,                 // letter spacing multiplier (1.0 = normal)
    direction = \"ltr\",               // text direction: \"ltr\" (left-to-right) or \"rtl\"
    language  = \"en\",
    script    = \"latin\"
  );

// EMBOSSED: raised letters sitting on top of the base
cube([80, 15, 5]);
translate([40, 7.5, 5])             // sit text on top face (Z=5)
  linear_extrude(height=1.5)        // letters are 1.5mm tall
    text(\"FRONT\", size=6, font=\"Liberation Sans:style=Bold\",
         halign=\"center\", valign=\"center\");

// DEBOSSED (ENGRAVED): letters carved into the surface
difference() {
  translate([0, 20, 0]) cube([80, 15, 5]);
  translate([40, 27.5, 5 - 0.8])   // start 0.8mm below the top face
    linear_extrude(height=1)        // 1mm cut: 0.8 into + 0.2 through (clean cut)
      text(\"BACK\", size=6, font=\"Liberation Sans:style=Bold\",
           halign=\"center\", valign=\"center\");
}
", Para [Strong [Str "Understanding the debossed depth calculation:"], Str " If the plate is 5 mm tall and you want 0.8 mm deep engraving, start the extrusion at ", Code ("", [], []) "z = 5 - 0.8 = 4.2", Str ". Extrude 1.0 mm (so it reaches z=5.2 — 0.2 mm past the top). This uses the 0.001 rule logic from Lesson 2: the cutter goes slightly beyond the face for a clean cut. The visible result is letters engraved 0.8 mm deep."], HorizontalRule, Header 4 ("step-2--finding-and-using-fonts", ["unnumbered", "unlisted"], []) [Str "Step 2 — Finding and Using Fonts"], Header 5 ("why-font-availability-is-a-portability-problem", ["unnumbered", "unlisted"], []) [Str "Why Font Availability Is a Portability Problem"], Para [Str "OpenSCAD uses fonts installed on your operating system. Different computers have different fonts. If you write code that uses \"Arial\" and another student or instructor tries to render it on a Linux machine that doesn't have Arial, OpenSCAD will fall back to a substitute font — and the text proportions may change, potentially causing the text to overflow its container or look wrong."], Para [Str "The solution has two parts: check which fonts are available on your machine before writing your code, and define your font choice as a single parameter at the top of the file so it's easy to change."], Header 5 ("finding-available-fonts", ["unnumbered", "unlisted"], []) [Str "Finding Available Fonts"], Para [Strong [Str "Linux (bash):"]], CodeBlock ("", ["bash"], []) "# List all available fonts
fc-list | sort | less

# Find fonts with \"liberation\" in the name
fc-list | grep -i \"liberation\"

# Get the exact format needed for OpenSCAD's font= parameter
fc-list --format=\"%{family}:style=%{style}\\n\" | grep -i liberation | sort | head -20
# Output examples:
# Liberation Sans:style=Bold
# Liberation Sans:style=Regular
# Liberation Mono:style=Bold
", Para [Strong [Str "Windows (PowerShell):"]], CodeBlock ("", ["powershell"], []) "# List all installed fonts
[System.Reflection.Assembly]::LoadWithPartialName(\"System.Drawing\") | Out-Null
$fonts = (New-Object System.Drawing.Text.InstalledFontCollection).Families
$fonts | Select-Object Name | Sort-Object Name

# Search for a specific font
$fonts | Where-Object { $_.Name -like \"*Arial*\" } | Select-Object Name
", Para [Str "On Windows, the most convenient method is the ", Strong [Str "Help → Font List"], Str " menu inside the OpenSCAD application — it shows every available font with its exact name string."], Para [Strong [Str "macOS (bash):"]], CodeBlock ("", ["bash"], []) "fc-list | sort
# or
system_profiler SPFontsDataType | grep \"Full Name\" | sort
", Header 5 ("classroom-safe-fonts-available-on-most-linux-systems", ["unnumbered", "unlisted"], []) [Str "Classroom-Safe Fonts (Available on Most Linux Systems)"], Para [Str "These fonts are widely pre-installed and safe to use in code you'll share with classmates:"], BulletList [[Plain [Code ("", [], []) "Liberation Sans", Str " — clean, modern sans-serif, compatible proportionally with Arial"]], [Plain [Code ("", [], []) "Liberation Mono", Str " — monospaced, excellent for part numbers and code"]], [Plain [Code ("", [], []) "DejaVu Serif", Str " — serif font with good contrast for labels"]]], Para [Str "If OpenSCAD can't find the font you specified, it prints ", Code ("", [], []) "WARNING: No match for requested font family", Str " in the console. If your text looks wrong or uses a different font than intended, look for this warning."], HorizontalRule, Header 4 ("step-3--font-agnostic-code-pattern", ["unnumbered", "unlisted"], []) [Str "Step 3 — Font-Agnostic Code Pattern"], Header 5 ("define-your-font-once", ["unnumbered", "unlisted"], []) [Str "Define Your Font Once"], Para [Str "Instead of hardcoding a font name at every text call, define it once as a constant at the top of your file. This way, switching fonts is a one-line change, and the font choice is clearly documented."], CodeBlock ("", ["openscad"], []) "// Define font choice once at the top — comment/uncomment for your OS
LABEL_FONT = \"Liberation Sans:style=Bold\";   // Linux
// LABEL_FONT = \"DejaVu Sans:style=Bold\";    // Linux alternative
// LABEL_FONT = \"Arial:style=Bold\";          // Windows / macOS
// LABEL_FONT = \"Helvetica:style=Bold\";      // macOS

module label(txt, size=8) {
  text(txt, font=LABEL_FONT, size=size, halign=\"center\", valign=\"center\");
}

module embossed_plate(message, plate_w=80, plate_d=15, plate_h=5,
                      text_size=8, relief=1.5) {
  cube([plate_w, plate_d, plate_h]);
  translate([plate_w/2, plate_d/2, plate_h])
    linear_extrude(height=relief)
      label(message, size=text_size);
}

embossed_plate(\"FRONT\");
translate([0, 20, 0]) embossed_plate(\"BACK\");
translate([0, 40, 0]) embossed_plate(\"LEFT\");
", HorizontalRule, Header 4 ("step-4--text-sizing-the-cap-height-model", ["unnumbered", "unlisted"], []) [Str "Step 4 — Text Sizing: The Cap-Height Model"], Header 5 ("how-the-size-parameter-works", ["unnumbered", "unlisted"], []) [Str "How the ", Code ("", [], []) "size", Str " Parameter Works"], Para [Str "The ", Code ("", [], []) "size", Str " parameter in ", Code ("", [], []) "text()", Str " sets the ", Strong [Str "cap height"], Str " — the height of a capital letter in millimeters. This is not the total height of the text block; lowercase letters with descenders (g, p, q, y) extend further below the baseline."], Para [Str "Useful rules of thumb:"], BulletList [[Plain [Str "Total text block height ≈ ", Code ("", [], []) "size × 1.25", Str " (to include descenders)"]], [Plain [Str "Width of a capital letter ≈ ", Code ("", [], []) "size × 0.65", Str " to ", Code ("", [], []) "size × 0.75"]], [Plain [Str "Total width of an all-caps string ≈ ", Code ("", [], []) "size × 0.65 × character_count"]]], Para [Str "These are approximations — the exact values depend on the specific font."], Header 5 ("auto-fitting-text-to-a-container", ["unnumbered", "unlisted"], []) [Str "Auto-Fitting Text to a Container"], Para [Str "When you need text to fill a specific width and height automatically, this module computes the right size:"], CodeBlock ("", ["openscad"], []) "module fitted_text(txt, container_w, container_h,
                   font=\"Liberation Sans:style=Bold\") {
  char_count  = len(txt);
  size_by_w   = container_w / (char_count * 0.68);  // size that fills width
  size_by_h   = container_h * 0.75;                  // size that fills height
  fitted_size = min(size_by_w, size_by_h);            // use whichever is smaller

  echo(str(\"Fitted text size for '\", txt, \"': \", fitted_size, \"mm\"));

  text(txt, size=fitted_size, font=font,
       halign=\"center\", valign=\"center\");
}

// These labels auto-size to fit their containers
difference() {
  cube([60, 12, 5]);
  translate([30, 6, 5 - 0.8])
    linear_extrude(height=1)
      fitted_text(\"HELLO\", 60, 12);
}

translate([0, 20, 0]) {
  cube([60, 12, 5]);
  translate([30, 6, 5])
    linear_extrude(height=1.5)
      fitted_text(\"WORLD\", 60, 12);
}
", HorizontalRule, Header 4 ("step-5--string-functions", ["unnumbered", "unlisted"], []) [Str "Step 5 — String Functions"], Header 5 ("building-labels-dynamically", ["unnumbered", "unlisted"], []) [Str "Building Labels Dynamically"], Para [Str "The ", Code ("", [], []) "str()", Str " function converts any value to its string representation and concatenates multiple values into a single string. This is how you create part numbers, serial numbers, and version stamps programmatically."], CodeBlock ("", ["openscad"], []) "// str() — convert values to strings and concatenate
part_id = str(\"PART-\", 2026, \"-\", 42);
echo(part_id);   // PART-2026-42

// len() — length of a string or list
name = \"OpenSCAD\";
echo(len(name));   // 8

// search() — find the position of a character in a string
// Returns a list; [[4]] means found at index 4
echo(search(\"S\", \"OpenSCAD\"));   // [[4]]

// substr() — extract a substring
// substr(string, start_index, length)
full = \"BATCH-001\";
batch  = substr(full, 0, 5);   // \"BATCH\"
number = substr(full, 6, 3);   // \"001\"
echo(batch, number);
", Header 5 ("auto-generating-serial-numbers", ["unnumbered", "unlisted"], []) [Str "Auto-Generating Serial Numbers"], CodeBlock ("", ["openscad"], []) "// Generate 5 parts with serial numbers SN-01 through SN-05
for (i = [1:5]) {
  serial = str(\"SN-\", i < 10 ? \"0\" : \"\", i);   // zero-pad single digits
  translate([i * 35, 0, 0]) {
    cube([30, 12, 4]);
    translate([15, 6, 4])
      linear_extrude(1.5)
        text(serial, size=5, font=\"Liberation Sans:style=Bold\",
             halign=\"center\", valign=\"center\");
  }
}
", HorizontalRule, Header 4 ("step-6--let-for-scoped-variables", ["unnumbered", "unlisted"], []) [Str "Step 6 — ", Code ("", [], []) "let()", Str " for Scoped Variables"], Header 5 ("what-let-does", ["unnumbered", "unlisted"], []) [Str "What ", Code ("", [], []) "let()", Str " Does"], Para [Str "In Lesson 3 you learned that OpenSCAD global variables are resolved at parse time, and that last-assignment wins. ", Code ("", [], []) "let()", Str " provides a way to declare variables that are scoped to a specific block — they only exist inside the ", Code ("", [], []) "let()", Str " block and don't affect global scope."], Para [Code ("", [], []) "let()", Str " is useful when you need intermediate calculated values in one place and don't want them polluting the global namespace, or when you want to make a series of dependent calculations explicit within one block."], CodeBlock ("", ["openscad"], []) "// let() scopes variables to the block they're declared in
let (
  base_w          = 80,
  base_d          = 50,
  plate_height    = 5,
  text_center_x   = base_w / 2,
  text_center_y   = base_d / 2
) {
  cube([base_w, base_d, plate_height]);
  translate([text_center_x, text_center_y, plate_height])
    linear_extrude(2)
      text(\"v1.0\", size=6, halign=\"center\", valign=\"center\");
}
// text_center_x and text_center_y are not accessible outside the let() block
", HorizontalRule, Header 4 ("step-7--a-complete-parametric-label-plate", ["unnumbered", "unlisted"], []) [Str "Step 7 — A Complete Parametric Label Plate"], Para [Str "Here is a production-quality label module that uses every concept from this lesson:"], CodeBlock ("", ["openscad"], []) "// Parametric Label Plate
// Adjust these parameters and run: 3dm build
label_text   = \"STORAGE BOX\";
label_w      = 80;        // mm — plate width
label_h      = 18;        // mm — plate height
plate_depth  = 3;         // mm — plate thickness
text_depth   = 1.2;       // mm — engraving depth
font_size    = 7;         // mm — cap height of text
corner_r     = 2;         // mm — corner rounding radius

module label_plate(txt, w, h, t, td, fs, cr) {
  difference() {
    // Rounded rectangle base (minkowski creates rounded corners)
    minkowski() {
      cube([w - 2*cr, h - 2*cr, t], center=true);
      cylinder(r=cr, h=0.01, $fn=16);
    }
    // Engraved text, centered
    translate([0, 0, t/2 - td + 0.001])
      linear_extrude(td + 0.001)
        text(txt, size=fs, font=\"Liberation Sans:style=Bold\",
             halign=\"center\", valign=\"center\", $fn=4);
    // Mounting hole for wall attachment
    translate([w/2 - 6, 0, -0.001])
      cylinder(r=1.5, h=t + 0.002, $fn=16);
  }
}

label_plate(label_text, label_w, label_h, plate_depth, text_depth, font_size, corner_r);
", HorizontalRule, Header 4 ("step-8--automating-multi-label-generation", ["unnumbered", "unlisted"], []) [Str "Step 8 — Automating Multi-Label Generation"], Para [Str "Once your label design is parametric, you can generate a whole set of labels automatically — one build command per label variant."], Para [Strong [Str "Linux / macOS (bash):"]], CodeBlock ("", ["bash"], []) "#!/bin/bash
LABELS=(\"FRONT\" \"BACK\" \"LEFT\" \"RIGHT\" \"TOP\" \"BOTTOM\")
mkdir -p build/labels

for label in \"${LABELS[@]}\"; do
  filename=$(echo \"$label\" | tr '[:upper:]' '[:lower:]')
  output=\"build/labels/${filename}.stl\"
  echo \"Generating: $label → $output\"
  openscad -D \"label_text=\\\"${label}\\\"\" -o \"$output\" src/main.scad
  [ $? -eq 0 ] && echo \"  OK\" || echo \"  FAILED\"
done
echo \"Done. Output: build/labels/\"
", Para [Strong [Str "Windows (PowerShell):"]], CodeBlock ("", ["powershell"], []) "$labels = @(\"FRONT\", \"BACK\", \"LEFT\", \"RIGHT\", \"TOP\", \"BOTTOM\")
New-Item -ItemType Directory -Force -Path \"build\\labels\" | Out-Null

foreach ($label in $labels) {
  $filename = $label.ToLower()
  $output   = \"build\\labels\\$filename.stl\"
  Write-Host \"Generating: $label → $output\"
  openscad -D \"label_text=`\"$label`\"\" -o $output \"src\\main.scad\"
  if ($LASTEXITCODE -eq 0) { Write-Host \"  OK\" } else { Write-Host \"  FAILED\" }
}
Write-Host \"Done.\"
", Para [Strong [Str "Windows (CMD):"]], CodeBlock ("", ["cmd"], []) "@echo off
mkdir build\\labels 2>nul
FOR %%L IN (FRONT BACK LEFT RIGHT TOP BOTTOM) DO (
  echo Generating: %%L
  openscad -D \"label_text=\\\"%%L\\\"\" -o \"build\\labels\\%%L.stl\" src\\main.scad
  IF %ERRORLEVEL% EQU 0 (echo   OK) ELSE (echo   FAILED)
)
echo Done.
", HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 6.1:"], Str " Find the fonts available on your computer using the appropriate command for your OS. List three font names in the exact format required by OpenSCAD's ", Code ("", [], []) "font=", Str " parameter (e.g., ", Code ("", [], []) "Liberation Sans:style=Bold", Str ")."], Para [Strong [Str "Exercise 6.2:"], Str " Create a parametric name plate module where the text is auto-sized to fill 75% of the plate width. Test it with strings of 3, 6, 9, and 12 characters — verify that the text scales correctly and doesn't overflow."], Para [Strong [Str "Exercise 6.3 (Advanced):"], Str " Write a shell script that generates 10 identical parts with serial numbers SN-001 through SN-010 embossed on each. Display success or failure for each part and the total file count at the end."], HorizontalRule, Header 4 ("quiz--lesson-6-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 6 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What does ", Code ("", [], []) "3dm orient", Str " output and when would you use it?"]], [Plain [Str "What is the difference between embossed text and debossed (engraved) text in 3D printing? How does the OpenSCAD code differ?"]], [Plain [Str "What does the ", Code ("", [], []) "size", Str " parameter in ", Code ("", [], []) "text()", Str " represent specifically? Is it the total height of the text block?"]], [Plain [Str "What parameter in ", Code ("", [], []) "text()", Str " controls horizontal alignment, and what are the three main options?"]], [Plain [Str "What does ", Code ("", [], []) "str(\"PART-\", 2024, \"-\", 1)", Str " return?"]], [Plain [Str "What does ", Code ("", [], []) "len(\"OpenSCAD\")", Str " return?"]], [Plain [Str "What is the purpose of ", Code ("", [], []) "let()", Str " in OpenSCAD, and how does it differ from declaring a global variable?"]], [Plain [Str "What does setting ", Code ("", [], []) "$fn=4", Str " do to letters rendered with ", Code ("", [], []) "text()", Str "?"]], [Plain [Str "What does ", Code ("", [], []) "3dm preview", Str " produce and where does the output file go?"]], [Plain [Str "What is the format for specifying a font style (e.g., bold) in OpenSCAD's ", Code ("", [], []) "font=", Str " parameter?"]], [Plain [Str "Explain the depth calculation for debossed text: if a plate is 6 mm tall and you want 1 mm engraving depth, where do you position the ", Code ("", [], []) "linear_extrude()", Str " call and what height do you give it?"]], [Plain [Str "What does ", Code ("", [], []) "substr(\"BATCH-001\", 6, 3)", Str " return?"]], [Plain [Str "What happens if you use ", Code ("", [], []) "text()", Str " without wrapping it in ", Code ("", [], []) "linear_extrude()", Str "?"]], [Plain [Str "Why is defining the font as a constant at the top of your file (e.g., ", Code ("", [], []) "LABEL_FONT = \"Liberation Sans:style=Bold\"", Str ") better than hardcoding it in every ", Code ("", [], []) "text()", Str " call?"]], [Plain [Str "Write the OpenSCAD code to create a 50×20×4mm plate with the text \"LOT-42\" engraved 1.5mm deep, centered on the top face."]]], HorizontalRule, Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Build a parametric serial number generator: accept a prefix string and a starting number, and generate a set of embossed labels with incrementing serial numbers."]], [Plain [Str "Create a dynamic version stamp: use ", Code ("", [], []) "str()", Str " to combine a product name, major version, and minor version, all as separate parameters."]], [Plain [Str "Design a 4-up label sheet: four identical labels in a 2×2 grid, using ", Code ("", [], []) "translate()", Str " and a ", Code ("", [], []) "for", Str " loop with two variables."]], [Plain [Str "Build a two-line label: stack two ", Code ("", [], []) "text()", Str " calls at different heights. Line 1 is the label text; line 2 is a smaller subtitle."]], [Plain [Str "Create a label with a decorative border: use ", Code ("", [], []) "difference()", Str " to cut a framing slot into the top face of the label plate."]], [Plain [Str "Use ", Code ("", [], []) "3dm orient", Str " on three different models (a flat slab, a tall cylinder, an L-bracket) and document whether you agree with the AI suggestion in each case."]], [Plain [Str "Build a \"batch tag\" system: a module that generates 12 small tags in a row, each with a different serial number from a list."]], [Plain [Str "Design a keychain tag: a rounded rectangle with a ring hole, parametric text, and a border around the text."]], [Plain [Str "Use ", Code ("", [], []) "search()", Str " to find the position of a separator character (dash or underscore) in a part-number string. Explain a practical use case for this."]], [Plain [Str "Build a \"negative space\" text plate: a plate with all letters cut completely through, creating a stencil or silhouette effect."]], [Plain [Str "Design a parametric drawer label holder: a clip that attaches to the front edge of a drawer and holds a flat label insert."]], [Plain [Str "Create a font comparison plate: render the same text string using Liberation Sans, Liberation Mono, and DejaVu Serif side by side on one base plate."]], [Plain [Str "Write a screen-reader accessibility guide for the five ", Code ("", [], []) "3dm", Str " commands. For each command: what it does, expected output, and how to interpret that output without visual reference."]], [Plain [Str "Write a module that auto-reduces font size to fit text within a fixed-width container. The module should reduce size in 0.5 mm steps until the estimated width fits."]], [Plain [Str "Design a production part-marking system: a jig that holds 10 small labels in a row, each with an incremented part number, ready to print all at once as one STL file."]]], HorizontalRule, Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/epub/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — String functions and text embossing examples"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — All string function syntax"]], [Plain [Link ("", [], []) [Str "3DMake Terminal Quickstart Guide"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_6/../../assets/3dMake_Foundation/3dmake-setup-guide.md", "")]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked text embossing examples"]]]]