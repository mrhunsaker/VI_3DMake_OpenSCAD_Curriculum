[Header 3 ("lesson-8--advanced-parametric-design-and-interlocking-features", [], []) [Str "Lesson 8 — Advanced Parametric Design and Interlocking Features"], Para [Strong [Str "Estimated Time:"], Str " 90–120 minutes", LineBreak, Strong [Str "Course:"], Str " 3dMake Certification — High School Distance Learning Track"], HorizontalRule, Header 4 ("before-you-start", ["unnumbered", "unlisted"], []) [Str "Before You Start"], Para [Str "Every design you've built so far has been a single-piece print. This lesson moves to ", Strong [Str "multi-part assemblies"], Str ": designs where two or more printed pieces must physically fit together. This is where the gap between \"looks right on screen\" and \"works in real life\" becomes most critical."], Para [Str "The central concept of this lesson is ", Strong [Str "tolerance"], Str ": the intentional gap between mating parts that makes them fit together correctly. Too tight and the pieces won't go together at all. Too loose and they wobble, rattle, or fall apart. The exact right amount of clearance depends on your specific printer, your specific filament, and your slicer settings — and the only reliable way to know it is to measure it."], Para [Str "This lesson gives you a systematic, professional approach: print a tolerance test coupon, measure the actual results, encode those measurements as named constants in your code, and build designs that work the first time instead of after three reprints."], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Explain why FDM-printed holes are always undersized and how to compensate"]], [Plain [Str "Design press-fit and slip-fit joints using printer-specific tolerance values"]], [Plain [Str "Print and use a tolerance test coupon to measure your printer's actual clearances"]], [Plain [Str "Design snap-fit cantilever arms sized correctly for different materials"]], [Plain [Str "Design dovetail slide joints and stackable assemblies"]], [Plain [Str "Use threaded insert pockets for secure metal-to-plastic fastening"]], [Plain [Str "Apply true chamfer geometry"]], [Plain [Str "Apply tolerance values as named constants throughout a design"]]], HorizontalRule, Header 4 ("concept-1-the-physics-of-fdm-tolerances", ["unnumbered", "unlisted"], []) [Str "Concept 1: The Physics of FDM Tolerances"], Header 5 ("why-printed-holes-are-always-too-small", ["unnumbered", "unlisted"], []) [Str "Why Printed Holes Are Always Too Small"], Para [Str "This is one of the most important physical facts about FDM printing, and it surprises almost every beginner the first time they encounter it."], Para [Str "When an FDM printer extrudes a bead of filament, that bead spreads slightly as it deposits — it squishes outward from the center of the extrusion path. This happens at every wall, but the ", Emph [Str "direction"], Str " of the squishing is important:"], BulletList [[Plain [Str "On ", Strong [Str "outer walls"], Str " (the outside of a part), the extrusion squishes ", Emph [Str "outward"], Str " from the wall's nominal surface. The part comes out slightly larger than designed."]], [Plain [Str "On ", Strong [Str "inner walls"], Str " (the inside of a hole), the extrusion squishes ", Emph [Str "inward"], Str " — toward the center of the hole. The hole comes out smaller than designed."]]], Para [Str "The result: a hole designed to be 10 mm in diameter prints as approximately 9.6–9.8 mm. A peg designed to be 10 mm prints as approximately 9.8–10.0 mm. Two parts with a 10 mm nominal dimension will not fit together — the peg is too large for the hole."], Para [Str "This isn't a flaw in your printer. It's a fundamental consequence of how FDM extrusion works, and every designer working with FDM printing accounts for it."], Header 5 ("what-clearance-means", ["unnumbered", "unlisted"], []) [Str "What \"Clearance\" Means"], Para [Strong [Str "Clearance"], Str " is the intentional difference in size between a peg (or shaft, or tab) and its mating socket (or hole, or slot). You make the peg slightly smaller than the socket — the amount of this size difference is the clearance."], Para [Str "Different clearances produce different fits:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.1810344827586207)), (AlignDefault, (ColWidth 0.31896551724137934)), (AlignDefault, (ColWidth 0.5))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Fit Type"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Clearance (typical PLA, 0.4mm nozzle)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Behavior"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Press-fit (permanent)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.0 – 0.1 mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Requires force to assemble; doesn't come apart easily"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slip-fit (removable)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.2 – 0.3 mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slides smoothly; can be assembled and disassembled by hand"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Loose/clearance fit"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.4 – 0.5 mm"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Some play and wobble; appropriate for hinges and pivots"]]]])] (TableFoot ("", [], []) []), Para [Str "These are starting-point estimates. Your actual values will differ based on your printer and materials. That's what the test coupon is for."], HorizontalRule, Header 4 ("step-1--the-tolerance-test-coupon", ["unnumbered", "unlisted"], []) [Str "Step 1 — The Tolerance Test Coupon"], Header 5 ("print-this-before-every-new-printer-or-material", ["unnumbered", "unlisted"], []) [Str "Print This Before Every New Printer or Material"], Para [Str "The tolerance test coupon is a small, quick print that gives you empirical data about your specific printer's actual clearances. Print it once with your standard material and settings. Test each peg-socket pair. Record the results. These numbers become the constants in your design files."], Para [Str "You'll need to do this test if you:"], BulletList [[Plain [Str "Use a new printer you haven't printed on before"]], [Plain [Str "Switch to a significantly different filament (e.g., from PLA to PETG)"]], [Plain [Str "Change your nozzle size"]], [Plain [Str "Change your slicer settings significantly (especially layer height)"]]], CodeBlock ("", ["openscad"], []) "// Tolerance Test Coupon
// Prints a row of pegs and a row of matching sockets at five clearance values.
// After printing: test each peg in each socket. Record which clearances give
// press-fit, slip-fit, and loose fit.

nominal        = 10;     // mm — nominal peg diameter
test_h         = 8;      // mm — peg height
plate_t        = 3;      // mm — socket plate thickness
socket_d_outer = nominal + 8;   // mm — outer diameter of socket annulus

clearances = [0.0, 0.1, 0.2, 0.3, 0.4];   // mm — the five clearances to test

module test_peg(clearance) {
  // Peg diameter = nominal - clearance
  color(\"SteelBlue\")
    cylinder(d=nominal - clearance, h=test_h, $fn=32);
}

module test_socket() {
  // All sockets have the same nominal hole; pegs vary
  color(\"Coral\")
  difference() {
    cylinder(d=socket_d_outer, h=plate_t, $fn=32);
    translate([0, 0, -0.001])
      cylinder(d=nominal, h=plate_t + 0.002, $fn=32);
  }
}

module clearance_label(clearance) {
  // Small label showing the clearance value
  translate([0, -(nominal/2 + 5), 0])
    linear_extrude(1)
      text(str(clearance, \"mm\"), size=2.5, font=\"Liberation Sans\",
           halign=\"center\", $fn=4);
}

// Row 1: Pegs — each has a different clearance reduction applied
for (i = [0 : len(clearances) - 1]) {
  translate([i * (socket_d_outer + 4), 0, 0]) {
    test_peg(clearances[i]);
    clearance_label(clearances[i]);
  }
}

// Row 2: Sockets — all have the same nominal hole
translate([0, -(socket_d_outer + 8), 0])
  for (i = [0 : len(clearances) - 1]) {
    translate([i * (socket_d_outer + 4), 0, 0])
      test_socket();
  }
", Header 5 ("how-to-read-the-results", ["unnumbered", "unlisted"], []) [Str "How to Read the Results"], Para [Str "After printing, test each peg in each socket. Record:"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.14444444444444443)), (AlignDefault, (ColWidth 0.6333333333333333)), (AlignDefault, (ColWidth 0.2222222222222222))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Fit Type"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Test Method"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "What to Record"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Press-fit"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Tightest peg that enters socket with firm thumb pressure"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Your press clearance"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slip-fit"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Loosest peg that doesn't rattle in the socket when shaken"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Your slip clearance"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Bearing/pivot"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Loosest peg that rotates smoothly without visible wobble"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slip + 0.05–0.1 mm"]]]])] (TableFoot ("", [], []) []), Para [Str "These measured values replace the rough estimates in the table above. Record them in a note or file, and use them for every design from now on."], HorizontalRule, Header 4 ("step-2--encoding-tolerance-as-named-constants", ["unnumbered", "unlisted"], []) [Str "Step 2 — Encoding Tolerance as Named Constants"], Header 5 ("never-hardcode-tolerance-values", ["unnumbered", "unlisted"], []) [Str "Never Hardcode Tolerance Values"], Para [Str "Tolerance clearance values should appear in your design file exactly once — at the top, as named constants. When you measure different clearances (because you're on a different printer, or using PETG instead of PLA), you change the constant in one place and the entire design updates."], CodeBlock ("", ["openscad"], []) "// ============================================================
// TOLERANCE CONSTANTS — measured from your test coupon print
// Run the test coupon, measure, and update these values.
// ============================================================
PRESS_FIT_C = 0.2;    // mm — tightest peg that enters with thumb pressure
SLIP_FIT_C  = 0.3;    // mm — loosest peg that doesn't rattle
SNAP_C      = PRESS_FIT_C;   // snap-fits use press-fit clearance

// Use these constants throughout the file:
// hole_r = peg_r - SLIP_FIT_C    (for a slip-fit hole)
// hole_r = peg_r - PRESS_FIT_C   (for a press-fit hole)
", Para [Str "This is exactly the same DRY principle from Lesson 3 applied to physical measurements. The constants are derived from reality (your test print); the geometry uses those constants; change one measurement and everything that depends on it updates automatically."], HorizontalRule, Header 4 ("step-3--snap-fit-cantilever-arms", ["unnumbered", "unlisted"], []) [Str "Step 3 — Snap-Fit Cantilever Arms"], Header 5 ("what-a-snap-fit-is", ["unnumbered", "unlisted"], []) [Str "What a Snap-Fit Is"], Para [Str "A snap-fit is a self-locking fastener made entirely from the printed plastic itself. A thin, flexible beam (the cantilever arm) deflects as the mating part pushes past it, then springs back to its original position, locking the parts together. Think of the plastic tab that holds a battery cover in place, or the clip that holds a phone case together."], Para [Str "Snap-fits are one of the most elegant features you can design. When they work well, they're intuitive, require no separate hardware, and can be assembled and disassembled dozens of times without wearing out. When they're designed wrong, they either crack (too stiff) or don't hold (too flexible)."], Header 5 ("the-flexibility-rule", ["unnumbered", "unlisted"], []) [Str "The Flexibility Rule"], Para [Str "The key design parameter is the ", Strong [Str "beam flexibility ratio"], Str ": ", Code ("", [], []) "beam_thickness / beam_length", Str ". For PLA, this ratio must be ", Strong [Str "0.15 or less"], Str " — meaning the beam's thickness must be at most 15% of its length. A beam that's too thick relative to its length won't flex and will crack instead of deflecting."], Para [Str "Different materials allow different ratios because they have different stiffness (elastic modulus):"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.09876543209876543)), (AlignDefault, (ColWidth 0.2839506172839506)), (AlignDefault, (ColWidth 0.6172839506172839))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Material"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Maximum beam_t / beam_l"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Why"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PLA"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.15"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Relatively stiff; snaps or cracks if over-flexed"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PETG"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.18"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slightly more flexible than PLA"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Nylon"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.20"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Good flexibility and fatigue resistance"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "TPU"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.25"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Very flexible; excellent for repeated flex"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "ABS"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0.12"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "More brittle than PLA; needs shorter/thinner beams"]]]])] (TableFoot ("", [], []) []), CodeBlock ("", ["openscad"], []) "module snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.2, hook_angle=30,
                material=\"PLA\") {

  // Maximum flexibility ratio by material
  max_ratio = (material == \"TPU\")  ? 0.25 :
              (material == \"PETG\") ? 0.18 :
              (material == \"Nylon\")? 0.20 :
              (material == \"ABS\")  ? 0.12 :
              0.15;  // default: PLA

  ratio = beam_t / beam_l;

  // Validate before any geometry is created
  assert(ratio <= max_ratio,
    str(\"snap_arm: beam_t/beam_l ratio (\", ratio,
        \") exceeds maximum for \", material, \" (\", max_ratio,
        \"). Reduce beam_t to ≤ \", floor(beam_l * max_ratio * 10) / 10, \"mm.\"));

  union() {
    // The flexible beam itself
    cube([beam_w, beam_l, beam_t]);
    // The hook at the end of the beam that catches the mating part
    translate([0, beam_l, 0]) union() {
      rotate([0, -hook_angle, 0])
        cube([beam_w, 2, hook_h]);
      translate([0, 0, beam_t])
        cube([beam_w, 2, hook_h]);
    }
  }
}

// PLA snap arm — standard sizing
snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.5, material=\"PLA\");
// For a 20mm PLA beam: max thickness = 20 × 0.15 = 3.0mm. This design uses 1.8mm — safe.

// PETG snap arm — can be slightly thicker, more resilient
translate([15, 0, 0])
  snap_arm(beam_l=20, beam_t=2.2, beam_w=8, hook_h=1.5, material=\"PETG\");
", Header 5 ("orienting-the-snap-fit-for-printing", ["unnumbered", "unlisted"], []) [Str "Orienting the Snap-Fit for Printing"], Para [Str "Snap-fit beams need to flex in one specific direction. For maximum strength and flexibility, the beam should be printed so that the flex direction is perpendicular to the layer lines. This means orienting the print so the beam runs horizontally and flexes up-down (in the Z direction), not sideways (where layer interfaces would create a weakness)."], HorizontalRule, Header 4 ("step-4--dovetail-slide-joint", ["unnumbered", "unlisted"], []) [Str "Step 4 — Dovetail Slide Joint"], Header 5 ("what-a-dovetail-is-and-why-its-useful", ["unnumbered", "unlisted"], []) [Str "What a Dovetail Is and Why It's Useful"], Para [Str "A dovetail joint has a trapezoidal cross-section — wider at one end than the other, like the tail of a dove. This shape means the joint can only slide in one direction. You can slide two dovetail pieces apart, but you cannot pull them perpendicular to the slide direction — the trapezoidal shape prevents it."], Para [Str "This makes dovetails excellent for: drawer rails, camera slider tracks, adjustable phone mounts, and any assembly where you want parts that can be separated easily but don't fall apart during normal use."], CodeBlock ("", ["openscad"], []) "dt_l     = 50;    // mm — length of the slide
dt_w_top = 8;     // mm — narrower dimension (top of trapezoid)
dt_w_bot = 12;    // mm — wider dimension (base of trapezoid)
dt_h     = 5;     // mm — depth of the dovetail profile
clearance = 0.2;  // mm — your measured slip-fit clearance

module dovetail_male(l=dt_l, w_top=dt_w_top, w_bot=dt_w_bot, h=dt_h) {
  // The trapezoidal profile, extruded along the Y axis
  profile = [
    [-w_bot/2, 0], [ w_bot/2, 0],   // wide base
    [ w_top/2, h], [-w_top/2, h]    // narrow top
  ];
  rotate([90, 0, 0])
    linear_extrude(l)
      polygon(profile);
}

module dovetail_female(l=dt_l, w_top=dt_w_top, w_bot=dt_w_bot, h=dt_h, c=clearance) {
  // Female slot: same shape but all dimensions enlarged by clearance
  profile = [
    [-(w_bot/2 + c), -0.001], [ w_bot/2 + c, -0.001],
    [ w_top/2 + c,   h + c ], [-(w_top/2 + c), h + c]
  ];
  rotate([90, 0, 0])
    linear_extrude(l + 0.002)
      polygon(profile);
}

// Part A: a plate with a female dovetail slot
difference() {
  cube([30, dt_l, 15]);
  translate([15, -0.001, 5])
    dovetail_female();
}

// Part B: the sliding piece with a male dovetail
translate([40, 0, 0]) {
  cube([30, dt_l, 10]);
  translate([55 - 40, 0, 5])
    dovetail_male();
}
", HorizontalRule, Header 4 ("step-5--stackable-bin-system", ["unnumbered", "unlisted"], []) [Str "Step 5 — Stackable Bin System"], Header 5 ("designing-bins-that-stack", ["unnumbered", "unlisted"], []) [Str "Designing Bins That Stack"], Para [Str "For parts that stack vertically, one piece needs a raised lip on top that fits inside the walls of the next piece. The outer dimensions of this lip must be slightly smaller than the inner dimensions of the wall — by your slip-fit clearance — so the stacked bin sits snugly but can still be separated by hand."], CodeBlock ("", ["openscad"], []) "bin_w     = 80;    // mm — bin width
bin_d     = 60;    // mm — bin depth
bin_h     = 40;    // mm — bin height
wall      = 2.5;   // mm — wall thickness
lip_h     = 5;     // mm — height of the stacking lip
lip_clear = 0.25;  // mm — your measured slip-fit clearance

module bin_body() {
  difference() {
    cube([bin_w, bin_d, bin_h]);
    translate([wall, wall, wall])
      cube([bin_w - 2*wall, bin_d - 2*wall, bin_h]);  // hollow interior, open top
  }
}

module stacking_lip() {
  // Lip outer dimensions = bin inner dimensions - clearance
  // This makes the lip fit inside the next bin's walls
  translate([lip_clear, lip_clear, bin_h])
    difference() {
      cube([bin_w - 2*lip_clear, bin_d - 2*lip_clear, lip_h]);
      translate([wall - lip_clear, wall - lip_clear, wall])
        cube([bin_w - 2*wall, bin_d - 2*wall, lip_h]);
    }
}

bin_body();
stacking_lip();
", Para [Str "After building this, change ", Code ("", [], []) "lip_clear", Str " and note how it affects the stacking fit. If you print two bins and they don't stack or are too loose, adjust ", Code ("", [], []) "lip_clear", Str " by 0.05–0.10 mm and reprint the test piece."], HorizontalRule, Header 4 ("step-6--heat-set-threaded-inserts", ["unnumbered", "unlisted"], []) [Str "Step 6 — Heat-Set Threaded Inserts"], Header 5 ("the-problem-with-plastic-threads", ["unnumbered", "unlisted"], []) [Str "The Problem with Plastic Threads"], Para [Str "If you tap a thread directly into printed plastic and screw a bolt into it repeatedly, the plastic threads will wear down and eventually strip. This makes plastic-threaded holes unsuitable for any assembly that will be disassembled and reassembled multiple times."], Para [Strong [Str "Heat-set threaded inserts"], Str " solve this problem. They are small brass cylinders with internal threads and external ridges. You heat them with a soldering iron and press them into a printed hole — the heat melts the plastic around the insert, the ridges embed into the material, and when it cools, you have a permanent metal thread that won't strip even after many assembly cycles."], Para [Str "Heat-set inserts are commonly available in M2, M3, and M4 sizes and are standard hardware in professional product design."], CodeBlock ("", ["openscad"], []) "// M3 brass heat-set insert dimensions:
// Outer diameter: ~4.5mm; Length: ~5.7mm
module m3_insert_pocket(depth=6) {
  // Slightly undersized hole — insert is heated and pressed in with force
  cylinder(r=2.35, h=depth + 0.001, $fn=16);  // (4.5 + 0.2) / 2
}

// M4 brass heat-set insert:
// Outer diameter: ~5.6mm
module m4_insert_pocket(depth=8) {
  cylinder(r=2.9, h=depth + 0.001, $fn=16);   // (5.6 + 0.2) / 2
}

// Example: a plate with two M3 insert pockets
difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_insert_pocket(depth=10.002);
  translate([30, 15, -0.001]) m3_insert_pocket(depth=10.002);
}
", Para [Strong [Str "Note:"], Str " Heat-set insert hole dimensions vary between manufacturers. Check the datasheet for your specific inserts. The values above are typical for common brass inserts."], HorizontalRule, Header 4 ("step-7--true-chamfers", ["unnumbered", "unlisted"], []) [Str "Step 7 — True Chamfers"], Header 5 ("what-a-chamfer-is", ["unnumbered", "unlisted"], []) [Str "What a Chamfer Is"], Para [Str "A chamfer is a 45° beveled edge where two surfaces meet at a sharp corner. Chamfers serve two purposes in printed parts: they look more professional than a sharp edge, and they can act as lead-ins that help parts align during assembly."], Para [Str "A common mistake is creating a chamfer by simply cropping the top of a part at an angle — this produces a slanted surface, but it's not a true chamfer created from the model's geometry. A true chamfer is created using a ", Code ("", [], []) "difference()", Str " boolean cut."], CodeBlock ("", ["openscad"], []) "module chamfered_box(w, d, h, c=2) {
  // c = chamfer size in mm (both horizontal and vertical dimension of the bevel)
  difference() {
    cube([w, d, h]);
    // Remove the top c millimeters of the edges
    // by cutting a hollow frame shape from the top
    translate([0, 0, h - c])
      difference() {
        cube([w, d, c + 0.001]);                      // top layer of the box
        translate([c, c, 0]) cube([w - 2*c, d - 2*c, c + 0.001]);  // inset rectangle
      }
  }
}

chamfered_box(50, 40, 20, c=3);
", Para [Str "The chamfer logic: take the top ", Code ("", [], []) "c", Str " mm of the box as a separate region. Subtract an inset rectangle from it, leaving only the border frame. Remove that border frame from the original box. The result is a clean 45° bevel around the top perimeter."], HorizontalRule, Header 4 ("step-8--dowel-pins-for-alignment", ["unnumbered", "unlisted"], []) [Str "Step 8 — Dowel Pins for Alignment"], Header 5 ("why-alignment-pins-matter", ["unnumbered", "unlisted"], []) [Str "Why Alignment Pins Matter"], Para [Str "When two parts are assembled by hand, they may not align perfectly — especially if the mating surfaces are flat. Dowel pins are small cylindrical protrusions on one part that fit into matching pockets on the other. They guarantee precise alignment regardless of how the parts were held during assembly."], Para [Str "One part has the pins (protruding pegs). The other has the pockets (matching blind holes). The pins enter the pockets with a press-fit or slip-fit clearance, locking the parts into perfect alignment."], CodeBlock ("", ["openscad"], []) "pin_r     = 3;      // mm — pin radius
pin_h     = 6;      // mm — pin height
pin_clear = 0.15;   // mm — slightly tighter than slip-fit for precise alignment

module alignment_pin() {
  cylinder(r=pin_r, h=pin_h, $fn=32);
}

module alignment_pocket() {
  // Slightly larger radius and slightly deeper — ensures pin seats fully
  cylinder(r=pin_r + pin_clear, h=pin_h + 0.5, $fn=32);
}

// Part A — has two alignment pins protruding from top face
cube([50, 40, 5]);
translate([10, 10, 5]) alignment_pin();
translate([40, 30, 5]) alignment_pin();

// Part B — has matching pockets in bottom face
translate([60, 0, 0])
  difference() {
    cube([50, 40, 5]);
    translate([10, 10, -0.001]) alignment_pocket();
    translate([40, 30, -0.001]) alignment_pocket();
  }
", HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 8.1:"], Str " Print the tolerance test coupon. Test each peg-socket pair. Record your press-fit and slip-fit clearance values. Update ", Code ("", [], []) "PRESS_FIT_C", Str " and ", Code ("", [], []) "SLIP_FIT_C", Str " with your measured values."], Para [Strong [Str "Exercise 8.2:"], Str " Design a snap-fit battery cover for a 60 × 40 × 20 mm space using your measured press-fit clearance and the ", Code ("", [], []) "snap_arm()", Str " module. Verify the beam flexibility ratio before printing."], Para [Strong [Str "Exercise 8.3 (Advanced):"], Str " Create a parametric box set where a ", Code ("", [], []) "size_scale", Str " parameter (values 0.5, 1.0, 2.0) generates small, medium, and large boxes that all use the same lid design and tolerance values. Generate all three sizes with a bash/PowerShell loop and verify each with ", Code ("", [], []) "3dm info", Str "."], HorizontalRule, Header 4 ("quiz--lesson-8-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 8 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Why do FDM-printed holes consistently come out smaller than designed? Explain the physical mechanism."]], [Plain [Str "What clearance range (in mm) produces a slip-fit for a typical FDM printer with a 0.4mm nozzle and PLA?"]], [Plain [Str "What is a press-fit, and what application would you use one for?"]], [Plain [Str "What is the beam_t / beam_l flexibility rule for PLA snap-fit cantilever beams?"]], [Plain [Str "Why must you print a tolerance test coupon rather than using published clearance values from a chart?"]], [Plain [Str "What is a heat-set threaded insert and why is it preferred over a plastic-tapped hole for assemblies that are disassembled repeatedly?"]], [Plain [Str "What is a dovetail joint and in which direction does it lock?"]], [Plain [Str "What does a stacking lip do in a stackable bin design, and how does clearance factor into its dimensions?"]], [Plain [Str "True or False: a thicker snap-fit beam is easier to deflect than a thinner one of the same length."]], [Plain [Str "What happens if you design a stacking lip with clearance = 0mm?"]], [Plain [Str "Explain the concept of \"tolerance stack-up.\" If three parts each have ±0.2mm dimensional variation, what is the worst-case total gap variation in an assembled chain of three?"]], [Plain [Str "Why should tolerance clearance values be defined as named constants at the top of a file rather than hardcoded at each use?"]], [Plain [Str "Describe how a chamfer is created using ", Code ("", [], []) "difference()", Str ". What shape is subtracted from the original?"]], [Plain [Str "For a snap-fit clip made of PLA with ", Code ("", [], []) "beam_l = 18mm", Str ", what is the maximum ", Code ("", [], []) "beam_t", Str " allowed by the flexibility rule? Show your calculation."]], [Plain [Str "Describe how you would design and conduct a complete tolerance test for a new printer. What prints would you make, what would you measure, and how would you decide on your final clearance values?"]]], HorizontalRule, Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Design a complete stackable bin set (small, medium, large) where each size nests inside the next. Use your measured tolerance values throughout."]], [Plain [Str "Build a snap-fit box lid that attaches with four clips. Make the number of clips a parameter and validate the beam dimensions with ", Code ("", [], []) "assert()", Str "."]], [Plain [Str "Design a press-fit peg and socket set with five clearances from 0.0 to 0.4 mm. Print one set, test all pairs, and create a table showing which clearance produced which fit type on your printer."]], [Plain [Str "Create a wall-mount organizer using snap-fit clips that attach to a standard pegboard (hole pitch = 25.4mm, hole diameter = 6.35mm)."]], [Plain [Str "Build a two-part enclosure with heat-set insert pockets for M3 screws and matching through-holes for the bolts. Test with real hardware."]], [Plain [Str "Design a snap-together dice tray: the tray snaps into a carrying case lid using four snap clips."]], [Plain [Str "Create an alignment jig using two dowel pins and matching pockets. Use it to verify your printer's positional accuracy by measuring pin spacing with calipers."]], [Plain [Str "Build a cable management clip with a snap-fit that can be opened and closed repeatedly for easy cable insertion and removal."]], [Plain [Str "Design a telescoping tube: an inner cylinder that slides freely inside an outer cylinder using your measured slip-fit clearance."]], [Plain [Str "Create a bayonet mount: a part that locks with a 90° twist."]], [Plain [Str "Design a \"living hinge\" — a thin flexible connection between two rigid sections that can be folded. Research the appropriate wall thickness and document which materials are suitable."]], [Plain [Str "Build a parametric drawer divider system: interlocking slotted panels that can be arranged in any grid configuration."]], [Plain [Str "Design a self-locking dovetail joint that slides together in one direction and resists being pulled apart in any perpendicular direction."]], [Plain [Str "Create a complete assembly drawing in OpenSCAD: an exploded view with each component translated away from the assembly center, with clear labels and a tolerance reference table as a comment block."]], [Plain [Str "Conduct a failure mode analysis for a snap-fit clip: list five ways it could fail in use, rate each by likelihood and severity, and propose a design modification to reduce the top two risks."]]], HorizontalRule, Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs/pandoc/latex/src/assets/Programming_with_OpenSCAD.epub", ""), Str " — Assemblies and interlocking features"]], [Plain [Link ("", [], []) [Str "Measurement Worksheet"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_8/../../assets/3dMake_Foundation/measurement_worksheet.md", ""), Str " — Tolerance testing worksheet"]], [Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", "")]]]]