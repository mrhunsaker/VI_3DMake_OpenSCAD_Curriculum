[Header 3 ("lesson-8--advanced-parametric-design-and-interlocking-features", [], []) [Str "Lesson 8 — Advanced Parametric Design and Interlocking Features"], Para [Emph [Str "[", Str "CORRECTED — March 2026 Curriculum Revision", Str "]"]], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Design press-fit and slip-fit joints using printer-specific tolerance values"]], [Plain [Str "Print and use a tolerance test coupon to measure your printer's actual tolerances"]], [Plain [Str "Adjust snap-fit cantilever arm geometry for different materials"]], [Plain [Str "Design dovetail slides and friction-fit features"]], [Plain [Str "Apply tolerance testing systematically as part of your design workflow"]]], HorizontalRule, Header 4 ("step-1--why-tolerance-matters", ["unnumbered", "unlisted"], []) [Str "Step 1 — Why Tolerance Matters"], Para [Str "A 10mm hole in OpenSCAD does ", Strong [Str "not"], Str " produce a 10mm hole in the print. Fused Deposition Modeling (FDM) printers extrude plastic that:"], BulletList [[Plain [Str "Slightly overflows (expands laterally) on inner walls → holes come out ", Strong [Str "smaller"], Str " than designed"]], [Plain [Str "Shrinks slightly as it cools → outer dimensions come out slightly ", Strong [Str "smaller"], Str " than designed"]]], Para [Str "The gap you must add to a design to make parts fit together is the ", Strong [Str "clearance"], Str ". It varies by:"], BulletList [[Plain [Str "Printer and extrusion calibration"]], [Plain [Str "Nozzle diameter and layer height"]], [Plain [Str "Material (each filament shrinks differently)"]], [Plain [Str "Part orientation on the build plate"]]], Para [Strong [Str "You cannot know your clearance without printing a test coupon."], Str " This lesson provides one."], HorizontalRule, Header 4 ("step-2--tolerance-test-coupon-print-this-before-any-mating-design", ["unnumbered", "unlisted"], []) [Str "Step 2 — Tolerance Test Coupon (Print This Before Any Mating Design)"], Para [Str "Print the following coupon before designing any part that must fit with another. It tests 5 clearance values in one print."], CodeBlock ("", ["openscad"], []) "// Tolerance Test Coupon
// Tests 5 different clearance values simultaneously
// Print both rows on the same plate — then try each peg in the socket

// Parameters — match these to your design's nominal dimensions
nominal    = 10;   // nominal peg/hole diameter in mm
test_h     = 8;    // peg and socket height in mm
plate_t    = 3;    // socket plate thickness in mm
socket_d_outer = nominal + 8;  // outer diameter of socket ring

clearances = [0.0, 0.1, 0.2, 0.3, 0.4];   // mm — clearances to test

// ─── Modules ───────────────────────────────────────────────────────────────

module test_peg(clearance) {
  peg_d = nominal - clearance;  // peg is SMALLER than nominal by the clearance
  color(\"SteelBlue\")
    cylinder(d=peg_d, h=test_h, $fn=32);
}

module test_socket() {
  // Socket always uses nominal diameter — peg clearance determines fit
  color(\"Coral\")
  difference() {
    cylinder(d=socket_d_outer, h=plate_t, $fn=32);
    // Apply 0.001 rule to inner cutout
    translate([0, 0, -0.001])
      cylinder(d=nominal, h=plate_t + 0.002, $fn=32);
  }
}

module clearance_label(clearance) {
  // Label showing the clearance value below each peg
  translate([0, -(nominal/2 + 5), 0])
    linear_extrude(1)
      text(str(clearance, \"mm\"),
           size=2.5, font=\"Liberation Sans\", halign=\"center\", $fn=4);
}

// ─── Layout ─────────────────────────────────────────────────────────────────

// Row 1: Pegs (top row)
for (i = [0 : len(clearances) - 1]) {
  translate([i * (socket_d_outer + 4), 0, 0]) {
    test_peg(clearances[i]);
    clearance_label(clearances[i]);
  }
}

// Row 2: Sockets (bottom row — all identical since socket is nominal)
translate([0, -(socket_d_outer + 8), 0])
  for (i = [0 : len(clearances) - 1]) {
    translate([i * (socket_d_outer + 4), 0, 0])
      test_socket();
  }

// Instructions plate
translate([0, -(socket_d_outer * 2 + 20), 0])
  linear_extrude(1)
    text(\"Try each TOP peg in the BOTTOM socket. Find the tightest that fits.\",
         size=2.5, font=\"Liberation Sans\", $fn=4);
", Para [Strong [Str "How to Use the Test Coupon:"]], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.20909090909090908)), (AlignDefault, (ColWidth 0.5818181818181818)), (AlignDefault, (ColWidth 0.20909090909090908))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Fit type"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Method"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Result"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Press-fit (permanent)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Tightest peg that enters socket with firm thumb pressure"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Record this clearance"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Slip-fit (removable)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Loosest peg that doesn't rattle in the socket"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Record this clearance"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Snap-fit"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use press-fit clearance; the snap mechanism adds holding force"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use press-fit value"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Bearing/hinge"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Loosest peg that still turns smoothly"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Use slip-fit +0.05mm"]]]])] (TableFoot ("", [], []) []), Para [Strong [Str "Record your values"], Str " (example log):"], CodeBlock ("", [""], []) "Printer:   Prusa MK4
Material:  PLA (Prusament)
Date:      2026-03-01
Nozzle:    0.4mm
Layer h:   0.2mm

Press-fit clearance: 0.2mm  (0.2mm peg fit snugly in socket)
Slip-fit clearance:  0.3mm  (0.3mm peg rotated freely)

Apply: when designing a 10mm peg to press-fit into a 10mm socket,
       make the socket 10.2mm diameter (or keep socket nominal, make peg 9.8mm)
", HorizontalRule, Header 4 ("step-3--snap-fit-cantilever-arms", ["unnumbered", "unlisted"], []) [Str "Step 3 — Snap-Fit Cantilever Arms"], Para [Str "A snap-fit arm is a cantilevered beam that deflects to allow a protrusion to pass, then springs back to lock. The key rule: the beam must be flexible enough to deflect without cracking."], CodeBlock ("", ["openscad"], []) "// Snap-fit cantilever arm
// beam_l = arm length (longer = more flexible)
// beam_t = arm thickness (thinner = more flexible)
// beam_w = arm width (does not affect flexibility significantly)
// hook_h = height of the locking protrusion
// hook_angle = angle of the entry ramp (gentle = easier to snap in)

module snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.2, hook_angle=30,
                material=\"PLA\") {

  // Material-specific flexibility recommendations
  max_ratio = (material == \"TPU\")  ? 0.25 :
              (material == \"PETG\") ? 0.18 :
              (material == \"Nylon\")? 0.20 :
              (material == \"ABS\")  ? 0.12 :
              0.15;  // default PLA

  ratio = beam_t / beam_l;

  assert(ratio <= max_ratio,
    str(\"snap_arm: beam_t/beam_l ratio (\", ratio,
        \") exceeds max for \", material, \" (\", max_ratio,
        \"). Try beam_t ≤ \", floor(beam_l * max_ratio * 10) / 10, \"mm.\"));

  union() {
    // The cantilever beam
    cube([beam_w, beam_l, beam_t]);

    // The locking hook at the tip
    translate([0, beam_l, 0])
    union() {
      // Ramp (angled entry surface)
      rotate([0, -hook_angle, 0])  // tilt the hook forward
        translate([0, 0, 0])
          cube([beam_w, 2, hook_h]);
      // Vertical face (locking wall)
      translate([0, 0, beam_t])
        cube([beam_w, 2, hook_h]);
    }
  }
}

// Material-Specific Snap-Fit Adjustment Table:
// PLA:   ratio < 0.15  | Standard — good stiffness, limited flex cycles
// PETG:  ratio < 0.18  | More resilient — handles repeated snapping well
// TPU:   ratio < 0.25  | Very flexible — thick arms still work; great for soft-touch clips
// ABS:   ratio < 0.12  | More brittle at layer boundaries — use shorter, thicker arms
// Nylon: ratio < 0.20  | Best fatigue resistance — ideal for high-cycle snap fits

// Test with default PLA settings
snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.5, material=\"PLA\");

// Test with PETG — can use a slightly thicker beam
translate([15, 0, 0])
snap_arm(beam_l=20, beam_t=2.2, beam_w=8, hook_h=1.5, material=\"PETG\");
", HorizontalRule, Header 4 ("step-4--dovetail-slide-joint", ["unnumbered", "unlisted"], []) [Str "Step 4 — Dovetail Slide Joint"], Para [Str "A dovetail is a sliding joint where a trapezoidal protrusion fits into a trapezoidal slot, preventing separation except in one direction."], CodeBlock ("", ["openscad"], []) "// Dovetail slide — male and female components

// Parameters
dt_l     = 50;   // length of the dovetail
dt_w_top = 8;    // top width of the dovetail (narrow side)
dt_w_bot = 12;   // bottom width (wide side — wider = stronger lock)
dt_h     = 5;    // height of the dovetail
clearance = 0.2; // fit clearance (use your test coupon value)

module dovetail_male(l=dt_l, w_top=dt_w_top, w_bot=dt_w_bot, h=dt_h) {
  profile = [
    [-w_bot/2, 0],
    [ w_bot/2, 0],
    [ w_top/2, h],
    [-w_top/2, h]
  ];
  rotate([90, 0, 0])  // extrude along Y axis
    linear_extrude(l)
      polygon(profile);
}

module dovetail_female(l=dt_l, w_top=dt_w_top, w_bot=dt_w_bot, h=dt_h, c=clearance) {
  // Female is slightly larger on all internal faces to allow sliding
  profile = [
    [-(w_bot/2 + c), -0.001],
    [  w_bot/2 + c,  -0.001],
    [  w_top/2 + c,  h + c ],
    [-(w_top/2 + c), h + c ]
  ];
  rotate([90, 0, 0])
    linear_extrude(l + 0.002)
      polygon(profile);
}

// Assembled demo: male protrusion on a block
difference() {
  cube([30, dt_l, 15]);
  // Cut the female slot into the base
  translate([15, -0.001, 5])
    dovetail_female();
}

// The sliding piece with the male dovetail
translate([40, 0, 0])
difference() {
  cube([30, dt_l, 10]);
}
translate([55, 0, 5])
  dovetail_male();
", HorizontalRule, Header 4 ("step-5--integrating-tolerance-into-your-design-workflow", ["unnumbered", "unlisted"], []) [Str "Step 5 — Integrating Tolerance into Your Design Workflow"], Para [Str "Never hardcode tolerance values. Make them parameters so you can adjust per material or printer without changing geometry."], CodeBlock ("", ["openscad"], []) "// Tolerance as a top-level parameter
// Change this one value to recalibrate all fits for a new material or printer

PRESS_FIT_C = 0.2;  // press-fit clearance from your test coupon
SLIP_FIT_C  = 0.3;  // slip-fit clearance
SNAP_C      = PRESS_FIT_C;  // snap fits use press-fit clearance

// Example: a box with a snap-fit lid
box_w = 60;
box_d = 40;
box_h = 30;
wall  = 2.5;
lid_h = 8;

module box_body() {
  difference() {
    cube([box_w, box_d, box_h]);
    translate([wall, wall, wall])
      cube([box_w - 2*wall, box_d - 2*wall, box_h]);
    // Lid guide channel — larger than lid by SLIP_FIT_C
    translate([-0.001, -0.001, box_h - lid_h - wall])
      cube([box_w + 0.002, box_d + 0.002, lid_h + wall + 0.001]);
  }
}

module lid() {
  // Lid outer dimensions are box inner dimensions minus SLIP_FIT_C on each side
  lid_w = box_w - 2*wall - SLIP_FIT_C * 2;
  lid_d = box_d - 2*wall - SLIP_FIT_C * 2;
  difference() {
    cube([lid_w, lid_d, lid_h]);
    translate([wall, wall, -0.001])
      cube([lid_w - 2*wall, lid_d - 2*wall, lid_h - wall + 0.001]);
  }
}

color(\"SteelBlue\") box_body();
color(\"Coral\")
  translate([wall + SLIP_FIT_C, wall + SLIP_FIT_C, box_h - lid_h])
    lid();
", HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 8.1:"], Str " Print the tolerance test coupon. Record your press-fit and slip-fit clearance values. Update the ", Code ("", [], []) "PRESS_FIT_C", Str " and ", Code ("", [], []) "SLIP_FIT_C", Str " variables in the box assembly above with your measured values."], Para [Strong [Str "Exercise 8.2:"], Str " Design a snap-fit battery cover for a 60 × 40 × 20mm space, using your measured press-fit clearance and the ", Code ("", [], []) "snap_arm()", Str " module. The cover should snap on and off by hand."], Para [Strong [Str "Exercise 8.3 (Advanced):"], Str " Create a parametric box set where a ", Code ("", [], []) "size", Str " parameter generates small, medium, and large boxes that all use the same lid design (the lid from the small box fits the small box, medium lid fits medium, etc.). Use your measured tolerance values to set the clearances. Generate all three sizes with a bash/PowerShell loop and verify each with ", Code ("", [], []) "3dm info", Str "."], Header 3 ("lesson-8-advanced-parametric-design-and-interlocking-features", ["unnumbered", "unlisted"], []) [Str "Lesson 8: Advanced Parametric Design and Interlocking Features"], Para [Str "Estimated time: 90–120 minutes"], Header 4 ("learning-objectives-1", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], BulletList [[Plain [Str "Apply tolerance and clearance concepts for press-fit and slip-fit assemblies"]], [Plain [Str "Design snap-fit clips using cantilever beam principles"]], [Plain [Str "Create interlocking stackable assemblies"]], [Plain [Str "Use threaded insert pockets for secure metal-to-plastic fastening"]], [Plain [Str "Apply chamfers and true chamfer geometry"]]], Header 4 ("materials", ["unnumbered", "unlisted"], []) [Str "Materials"], BulletList [[Plain [Str "3dMake project"]], [Plain [Str "Terminal and calipers"]], [Plain [Str "Reference: standard tolerance table (0.1–0.4 mm clearance guide)"]]], Header 4 ("step-by-step-tasks", ["unnumbered", "unlisted"], []) [Str "Step-by-step Tasks"], Header 5 ("1-understand-tolerance-and-clearance-", ["unnumbered", "unlisted"], []) [Str "1. Understand Tolerance and Clearance ", Note [Para [Str "Tolerance and Fit in FDM Printing — All3DP Guide. ", Link ("", [], []) [Str "https://all3dp.com/2/fdm-3d-printing-tolerances/"] ("https://all3dp.com/2/fdm-3d-printing-tolerances/", "")]]], Para [Str "In FDM printing, dimensions come out slightly different from the digital model due to thermal expansion, layer bonding, and material shrinkage:"], CodeBlock ("", ["openscad"], []) "// Tolerance guide for FDM with 0.4mm nozzle, PLA
// Press-fit (tight):  clearance = 0.0 – 0.1 mm
// Slip-fit (smooth):  clearance = 0.2 – 0.3 mm
// Loose/clearance:    clearance = 0.4 – 0.5 mm

nominal_peg = 10;          // design intent: 10mm peg

press_peg  = nominal_peg - 0.1;   // 9.9mm — tight, requires force to insert
slip_peg   = nominal_peg - 0.2;   // 9.8mm — smooth sliding fit
clear_peg  = nominal_peg - 0.4;   // 9.6mm — loose, rattles slightly
", Para [Str "Always print a tolerance test before committing to a design with many mating parts."], Header 5 ("2-design-a-stackable-bin-system-", ["unnumbered", "unlisted"], []) [Str "2. Design a Stackable Bin System ", Note [Para [Str "OpenSCAD User Manual — Difference and Boolean Operations. ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling", "")]]], CodeBlock ("", ["openscad"], []) "// Parametric stackable bin
bin_w     = 80;    // mm
bin_d     = 60;    // mm
bin_h     = 40;    // mm
wall      = 2.5;   // mm
lip_h     = 5;     // mm — height of stacking lip
lip_clear = 0.25;  // mm — slip-fit clearance for stacking

module bin_body() {
  difference() {
    cube([bin_w, bin_d, bin_h]);
    translate([wall, wall, wall])
      cube([bin_w - 2*wall, bin_d - 2*wall, bin_h]);  // open top
  }
}

// Outer lip that fits into the base of the bin above
module stacking_lip() {
  translate([lip_clear, lip_clear, bin_h])
    difference() {
      cube([bin_w - 2*lip_clear, bin_d - 2*lip_clear, lip_h]);
      translate([wall - lip_clear, wall - lip_clear, wall])
        cube([bin_w - 2*wall, bin_d - 2*wall, lip_h]);
    }
}

bin_body();
stacking_lip();
", Header 5 ("3-design-a-snap-fit-clip-", ["unnumbered", "unlisted"], []) [Str "3. Design a Snap-Fit Clip ", Note [Para [Str "Snap-Fit Design Principles — Bayer MaterialScience Snap-Fit Design Manual (widely cited industry reference). Key principle: cantilever beam deflection formula governs clip strength and flexibility."]]], Para [Str "Snap-fits work by deflecting a flexible cantilever beam. The beam deforms during assembly and springs back to lock in place.", Note [Para [Str "Snap-Fit Design Principles — Bayer MaterialScience Snap-Fit Design Manual (widely cited industry reference). Key principle: cantilever beam deflection formula governs clip strength and flexibility."]]], CodeBlock ("", ["openscad"], []) "// Snap-fit clip — cantilever beam design
clip_w     = 20;    // mm — clip width
beam_l     = 12;    // mm — beam length (longer = more flexible)
beam_t     = 1.2;   // mm — beam thickness (thinner = easier snap)
barb_h     = 1.5;   // mm — retention barb height

module snap_clip() {
  union() {
    // Base anchor
    cube([clip_w, 5, 5]);
    // Flexible beam
    translate([0, 5, 0])
      cube([clip_w, beam_l, beam_t]);
    // Retention barb (tapered for easier entry)
    translate([0, 5 + beam_l - 0.001, 0])
      cube([clip_w, barb_h, barb_h]);
  }
}

snap_clip();
", Para [Str "Key design rule: for PLA, keep ", Code ("", [], []) "beam_t / beam_l < 0.15", Str " for adequate flexibility."], Header 5 ("4-create-threaded-insert-pockets", ["unnumbered", "unlisted"], []) [Str "4. Create Threaded Insert Pockets"], Para [Str "Heat-set threaded inserts provide strong, reusable metal threads in plastic parts."], CodeBlock ("", ["openscad"], []) "// Threaded insert pocket for M3 brass heat-set insert
// Typical M3 brass insert: OD ~4.5mm, length ~5.7mm
// Printed hole: OD + 0.1mm for press-in tolerance

module m3_insert_pocket(depth=6) {
  // Straight hole sized for brass insert
  cylinder(r=2.35, h=depth + 0.001, $fn=16);  // (4.5mm OD + 0.1) / 2
}

module m4_insert_pocket(depth=8) {
  // M4 brass insert: typical OD ~5.6mm
  cylinder(r=2.9, h=depth + 0.001, $fn=16);  // (5.6mm + 0.2) / 2
}

// Apply to a part
difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) m3_insert_pocket(depth=10.002);
  translate([30, 15, -0.001]) m3_insert_pocket(depth=10.002);
}
", Header 5 ("5-apply-true-chamfers", ["unnumbered", "unlisted"], []) [Str "5. Apply True Chamfers"], Para [Str "A chamfer is a 45° angled cut at an edge. The correct way to create one in OpenSCAD is with a rotated and translated cutting cylinder or prism — not just cropping the top of a part."], CodeBlock ("", ["openscad"], []) "// True chamfer using a difference cut
// Chamfer size c = horizontal distance of chamfer at 45 degrees
module chamfered_box(w, d, h, c=2) {
  difference() {
    cube([w, d, h]);
    // Top edge chamfer (45-degree cut around all four top edges)
    // Cut using a rotate_extrude approach or a hull of edges
    translate([0, 0, h - c])
      difference() {
        cube([w, d, c + 0.001]);
        translate([c, c, 0]) cube([w - 2*c, d - 2*c, c + 0.001]);
      }
  }
}

// Note: the above chamfers the top rim by removing the outer corners.
// For a true 45-degree surface, use:
module edge_chamfer_45(w, d, h, c=2) {
  difference() {
    cube([w, d, h]);
    for (x=[0, w], y=[0, d]) {
      translate([x, y, h - c])
        rotate([0, 0, 45])
          cube([c*2, c*2, c + 0.001], center=true);
    }
  }
}

chamfered_box(50, 40, 20, c=3);
", Header 5 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "After step 1: You can explain the difference between press-fit and slip-fit clearance values."]], [Plain [Str "After step 3: Your snap-fit clip deflects when you check the beam_t / beam_l ratio."]], [Plain [Str "After step 5: Your chamfered box shows angled edges in the slicer preview (not just a flat crop)."]]], Header 5 ("design-notes", ["unnumbered", "unlisted"], []) [Str "Design Notes"], BulletList [[Plain [Str "Tolerance values (0.1–0.4 mm) are starting points. Always print and test before finalizing a mating design."]], [Plain [Str "Snap-fit geometry is highly material-dependent: PLA is brittle; PETG and nylon are more resilient."]], [Plain [Str "Threaded insert dimensions vary by manufacturer — verify against your actual inserts before printing."]]], Header 4 ("dowel-pins-for-alignment", ["unnumbered", "unlisted"], []) [Str "Dowel Pins for Alignment"], Para [Str "For assemblies that must align precisely without a press-fit, dowel pins provide passive alignment:"], CodeBlock ("", ["openscad"], []) "// Alignment pin and pocket system
pin_r    = 3;
pin_h    = 6;
pin_clear = 0.15;  // slip-fit for alignment pin

module alignment_pin() {
  cylinder(r=pin_r, h=pin_h, $fn=32);
}

module alignment_pocket() {
  cylinder(r=pin_r + pin_clear, h=pin_h + 0.5, $fn=32);
}

// Part A: has pins
difference() {
  cube([50, 40, 5]);
  // holes for other features
}
translate([10, 10, 5]) alignment_pin();
translate([40, 30, 5]) alignment_pin();

// Part B: has pockets (shown offset for clarity)
translate([60, 0, 0])
  difference() {
    cube([50, 40, 5]);
    translate([10, 10, -0.001]) alignment_pocket();
    translate([40, 30, -0.001]) alignment_pocket();
  }
", Header 4 ("quiz--lesson-3dmake8-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.8 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What clearance range (in mm) produces a slip-fit between two FDM-printed mating parts?"]], [Plain [Str "What is a press-fit, and when would you use one?"]], [Plain [Str "What is a snap-fit clip, and what material property makes it work?"]], [Plain [Str "What is the purpose of a retention barb on a snap-fit beam?"]], [Plain [Str "What is a heat-set threaded insert, and why is it preferred over a tapped plastic hole?"]], [Plain [Str "What is the ", Code ("", [], []) "beam_t / beam_l", Str " rule for PLA snap-fit beams?"]], [Plain [Str "What is a chamfer, and how does it differ from a fillet?"]], [Plain [Str "What does a dowel pin achieve in an assembly design?"]], [Plain [Str "True or False: a thicker snap-fit beam is easier to deflect than a thinner one."]], [Plain [Str "What happens if you design a stacking lip without clearance (clearance = 0)?"]], [Plain [Str "Explain tolerance stack-up: if three parts each have ±0.2 mm dimensional tolerance, what is the worst-case total variation when they are assembled in a chain?"]], [Plain [Str "What is the typical outer diameter of an M3 brass heat-set insert, and what printed hole diameter would you use for a press-in fit?"]], [Plain [Str "Explain the difference between a cropped top edge and a true 45-degree chamfer. Why does the distinction matter for printed aesthetics?"]], [Plain [Str "Describe how you would design and test a tolerance set for a new printer. What measurements would you take and how would you choose the final clearance value?"]], [Plain [Str "For a snap-fit clip made of PLA with ", Code ("", [], []) "beam_l = 15 mm", Str ", what is the maximum ", Code ("", [], []) "beam_t", Str " that satisfies the flexibility rule? Show your calculation."]]], Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Design a complete stackable bin set (small, medium, large) where each size nests inside the next. Print and test all three."]], [Plain [Str "Build a snap-fit box lid that attaches with four clips. Make the number of clips a parameter."]], [Plain [Str "Design a press-fit peg and socket system; print 5 pairs with clearances from 0.0–0.4 mm and document which clearance gives the best press-fit for your printer."]], [Plain [Str "Create a wall-mount organizer using snap-fit clips that attach to a standard pegboard (pegboard hole pitch = 25.4 mm, hole diameter = 6.35 mm)."]], [Plain [Str "Build a two-part enclosure with threaded insert pockets for M3 screws; test with real hardware."]], [Plain [Str "Design a multi-part snap-together dice tray: the tray snaps into a carrying case lid."]], [Plain [Str "Create an alignment jig using dowel pins and pockets; use it to verify your printer's dimensional accuracy."]], [Plain [Str "Build a cable management clip with a snap-fit that opens and closes for easy cable insertion/removal."]], [Plain [Str "Design a telescoping tube using a slip-fit: an inner cylinder slides freely inside an outer cylinder."]], [Plain [Str "Create a \"bayonet mount\" that locks with a 45-degree twist."]], [Plain [Str "Design a spring-loaded mechanism using only FDM-printed parts; document the material choice and how the spring geometry provides the spring force."]], [Plain [Str "Build a parametric drawer divider system: interlocking slotted dividers that can be arranged in any grid pattern."]], [Plain [Str "Design a self-locking dovetail joint that slides together in one direction and cannot be pulled apart."]], [Plain [Str "Create a complete assembly drawing for a two-part design: an exploded OpenSCAD render showing each component with a ", Code ("", [], []) "translate()", Str " offset, plus a tolerance table."]], [Plain [Str "Conduct a failure mode analysis for a snap-fit clip: list five ways the clip could fail during assembly or use, assign a likelihood and severity to each, and propose a design change to mitigate the top two risks."]]], Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs%5Cpandoc%5Cepub%5Csrc%5Cassets%5CProgramming_with_OpenSCAD.epub", ""), Str " — Assemblies and interlocking features"]], [Plain [Link ("", [], []) [Str "Measurement Worksheet"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Lessons_3dMake_8%5C../../assets/3dMake_Foundation/measurement_worksheet.md", ""), Str " — Tolerance testing worksheet"]], [Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", ""), Str " — Build workflow reference"]]]]