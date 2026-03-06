# Lesson 8 — Advanced Parametric Design and Interlocking Features
*[CORRECTED — March 2026 Curriculum Revision]*

---

## Learning Objectives

By the end of this lesson you will be able to:

- Design press-fit and slip-fit joints using printer-specific tolerance values
- Print and use a tolerance test coupon to measure your printer's actual tolerances
- Adjust snap-fit cantilever arm geometry for different materials
- Design dovetail slides and friction-fit features
- Apply tolerance testing systematically as part of your design workflow

---

## Step 1 — Why Tolerance Matters

A 10mm hole in OpenSCAD does **not** produce a 10mm hole in the print. Fused Deposition Modeling (FDM) printers extrude plastic that:

- Slightly overflows (expands laterally) on inner walls -> holes come out **smaller** than designed
- Shrinks slightly as it cools -> outer dimensions come out slightly **smaller** than designed

The gap you must add to a design to make parts fit together is the **clearance**. It varies by:
- Printer and extrusion calibration
- Nozzle diameter and layer height
- Material (each filament shrinks differently)
- Part orientation on the build plate

**You cannot know your clearance without printing a test coupon.** This lesson provides one.

---

## Step 2 — Tolerance Test Coupon (Print This Before Any Mating Design)

Print the following coupon before designing any part that must fit with another. It tests 5 clearance values in one print.

```openscad
// Tolerance Test Coupon
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
  color("SteelBlue")
    cylinder(d=peg_d, h=test_h, $fn=32);
}

module test_socket() {
  // Socket always uses nominal diameter — peg clearance determines fit
  color("Coral")
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
      text(str(clearance, "mm"),
           size=2.5, font="Liberation Sans", halign="center", $fn=4);
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
    text("Try each TOP peg in the BOTTOM socket. Find the tightest that fits.",
         size=2.5, font="Liberation Sans", $fn=4);
```

**How to Use the Test Coupon:**

| Fit type              | Method                                                         | Result                |
|-----------------------|----------------------------------------------------------------|-----------------------|
| Press-fit (permanent) | Tightest peg that enters socket with firm thumb pressure       | Record this clearance |
| Slip-fit (removable)  | Loosest peg that doesn't rattle in the socket                  | Record this clearance |
| Snap-fit              | Use press-fit clearance; the snap mechanism adds holding force | Use press-fit value   |
| Bearing/hinge         | Loosest peg that still turns smoothly                          | Use slip-fit +0.05mm  |

**Record your values** (example log):
```
Printer:   Prusa MK4
Material:  PLA (Prusament)
Date:      2026-03-01
Nozzle:    0.4mm
Layer h:   0.2mm

Press-fit clearance: 0.2mm  (0.2mm peg fit snugly in socket)
Slip-fit clearance:  0.3mm  (0.3mm peg rotated freely)

Apply: when designing a 10mm peg to press-fit into a 10mm socket,
       make the socket 10.2mm diameter (or keep socket nominal, make peg 9.8mm)
```

---

## Step 3 — Snap-Fit Cantilever Arms

A snap-fit arm is a cantilevered beam that deflects to allow a protrusion to pass, then springs back to lock. The key rule: the beam must be flexible enough to deflect without cracking.

```openscad
// Snap-fit cantilever arm
// beam_l = arm length (longer = more flexible)
// beam_t = arm thickness (thinner = more flexible)
// beam_w = arm width (does not affect flexibility significantly)
// hook_h = height of the locking protrusion
// hook_angle = angle of the entry ramp (gentle = easier to snap in)

module snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.2, hook_angle=30,
                material="PLA") {

  // Material-specific flexibility recommendations
  max_ratio = (material == "TPU")  ? 0.25 :
              (material == "PETG") ? 0.18 :
              (material == "Nylon")? 0.20 :
              (material == "ABS")  ? 0.12 :
              0.15;  // default PLA

  ratio = beam_t / beam_l;

  assert(ratio <= max_ratio,
    str("snap_arm: beam_t/beam_l ratio (", ratio,
        ") exceeds max for ", material, " (", max_ratio,
        "). Try beam_t ≤ ", floor(beam_l * max_ratio * 10) / 10, "mm."));

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
snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.5, material="PLA");

// Test with PETG — can use a slightly thicker beam
translate([15, 0, 0])
snap_arm(beam_l=20, beam_t=2.2, beam_w=8, hook_h=1.5, material="PETG");
```

---

## Step 4 — Dovetail Slide Joint

A dovetail is a sliding joint where a trapezoidal protrusion fits into a trapezoidal slot, preventing separation except in one direction.

```openscad
// Dovetail slide — male and female components

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
```

---

## Step 5 — Integrating Tolerance into Your Design Workflow

Never hardcode tolerance values. Make them parameters so you can adjust per material or printer without changing geometry.

```openscad
// Tolerance as a top-level parameter
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

color("SteelBlue") box_body();
color("Coral")
  translate([wall + SLIP_FIT_C, wall + SLIP_FIT_C, box_h - lid_h])
    lid();
```

---

## Exercises

**Exercise 8.1:** Print the tolerance test coupon. Record your press-fit and slip-fit clearance values. Update the `PRESS_FIT_C` and `SLIP_FIT_C` variables in the box assembly above with your measured values.

**Exercise 8.2:** Design a snap-fit battery cover for a 60 × 40 × 20mm space, using your measured press-fit clearance and the `snap_arm()` module. The cover should snap on and off by hand.

**Exercise 8.3 (Advanced):** Create a parametric box set where a `size` parameter generates small, medium, and large boxes that all use the same lid design (the lid from the small box fits the small box, medium lid fits medium, etc.). Use your measured tolerance values to set the clearances. Generate all three sizes with a bash/PowerShell loop and verify each with `3dm info`.
# Lesson 8: Advanced Parametric Design and Interlocking Features

Estimated time: 90–120 minutes

## Learning Objectives
- Apply tolerance and clearance concepts for press-fit and slip-fit assemblies
- Design snap-fit clips using cantilever beam principles
- Create interlocking stackable assemblies
- Use threaded insert pockets for secure metal-to-plastic fastening
- Apply chamfers and true chamfer geometry

## Materials
- 3dMake project
- Terminal and calipers
- Reference: standard tolerance table (0.1–0.4 mm clearance guide)

## Step-by-step Tasks

### 1. Understand Tolerance and Clearance [^3]

In FDM printing, dimensions come out slightly different from the digital model due to thermal expansion, layer bonding, and material shrinkage:

```openscad
// Tolerance guide for FDM with 0.4mm nozzle, PLA
// Press-fit (tight):  clearance = 0.0 – 0.1 mm
// Slip-fit (smooth):  clearance = 0.2 – 0.3 mm
// Loose/clearance:    clearance = 0.4 – 0.5 mm

nominal_peg = 10;          // design intent: 10mm peg

press_peg  = nominal_peg - 0.1;   // 9.9mm — tight, requires force to insert
slip_peg   = nominal_peg - 0.2;   // 9.8mm — smooth sliding fit
clear_peg  = nominal_peg - 0.4;   // 9.6mm — loose, rattles slightly
```

Always print a tolerance test before committing to a design with many mating parts.

### 2. Design a Stackable Bin System [^2]

```openscad
// Parametric stackable bin
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
```

### 3. Design a Snap-Fit Clip [^1]

Snap-fits work by deflecting a flexible cantilever beam. The beam deforms during assembly and springs back to lock in place.[^1]

```openscad
// Snap-fit clip — cantilever beam design
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
```

Key design rule: for PLA, keep `beam_t / beam_l < 0.15` for adequate flexibility.

### 4. Create Threaded Insert Pockets

Heat-set threaded inserts provide strong, reusable metal threads in plastic parts.

```openscad
// Threaded insert pocket for M3 brass heat-set insert
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
```

### 5. Apply True Chamfers

A chamfer is a 45° angled cut at an edge. The correct way to create one in OpenSCAD is with a rotated and translated cutting cylinder or prism — not just cropping the top of a part.

```openscad
// True chamfer using a difference cut
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
```

### Checkpoint
- After step 1: You can explain the difference between press-fit and slip-fit clearance values.
- After step 3: Your snap-fit clip deflects when you check the beam_t / beam_l ratio.
- After step 5: Your chamfered box shows angled edges in the slicer preview (not just a flat crop).

### Design Notes
- Tolerance values (0.1–0.4 mm) are starting points. Always print and test before finalizing a mating design.
- Snap-fit geometry is highly material-dependent: PLA is brittle; PETG and nylon are more resilient.
- Threaded insert dimensions vary by manufacturer — verify against your actual inserts before printing.

## Dowel Pins for Alignment

For assemblies that must align precisely without a press-fit, dowel pins provide passive alignment:

```openscad
// Alignment pin and pocket system
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
```

## Quiz — Lesson 3dMake.8 (15 questions)

1. What clearance range (in mm) produces a slip-fit between two FDM-printed mating parts?
2. What is a press-fit, and when would you use one?
3. What is a snap-fit clip, and what material property makes it work?
4. What is the purpose of a retention barb on a snap-fit beam?
5. What is a heat-set threaded insert, and why is it preferred over a tapped plastic hole?
6. What is the `beam_t / beam_l` rule for PLA snap-fit beams?
7. What is a chamfer, and how does it differ from a fillet?
8. What does a dowel pin achieve in an assembly design?
9. True or False: a thicker snap-fit beam is easier to deflect than a thinner one.
10. What happens if you design a stacking lip without clearance (clearance = 0)?
11. Explain tolerance stack-up: if three parts each have ±0.2 mm dimensional tolerance, what is the worst-case total variation when they are assembled in a chain?
12. What is the typical outer diameter of an M3 brass heat-set insert, and what printed hole diameter would you use for a press-in fit?
13. Explain the difference between a cropped top edge and a true 45-degree chamfer. Why does the distinction matter for printed aesthetics?
14. Describe how you would design and test a tolerance set for a new printer. What measurements would you take and how would you choose the final clearance value?
15. For a snap-fit clip made of PLA with `beam_l = 15 mm`, what is the maximum `beam_t` that satisfies the flexibility rule? Show your calculation.

## Extension Problems (15)

1. Design a complete stackable bin set (small, medium, large) where each size nests inside the next. Print and test all three.
2. Build a snap-fit box lid that attaches with four clips. Make the number of clips a parameter.
3. Design a press-fit peg and socket system; print 5 pairs with clearances from 0.0–0.4 mm and document which clearance gives the best press-fit for your printer.
4. Create a wall-mount organizer using snap-fit clips that attach to a standard pegboard (pegboard hole pitch = 25.4 mm, hole diameter = 6.35 mm).
5. Build a two-part enclosure with threaded insert pockets for M3 screws; test with real hardware.
6. Design a multi-part snap-together dice tray: the tray snaps into a carrying case lid.
7. Create an alignment jig using dowel pins and pockets; use it to verify your printer's dimensional accuracy.
8. Build a cable management clip with a snap-fit that opens and closes for easy cable insertion/removal.
9. Design a telescoping tube using a slip-fit: an inner cylinder slides freely inside an outer cylinder.
10. Create a "bayonet mount" that locks with a 45-degree twist.
11. Design a spring-loaded mechanism using only FDM-printed parts; document the material choice and how the spring geometry provides the spring force.
12. Build a parametric drawer divider system: interlocking slotted dividers that can be arranged in any grid pattern.
13. Design a self-locking dovetail joint that slides together in one direction and cannot be pulled apart.
14. Create a complete assembly drawing for a two-part design: an exploded OpenSCAD render showing each component with a `translate()` offset, plus a tolerance table.
15. Conduct a failure mode analysis for a snap-fit clip: list five ways the clip could fail during assembly or use, assign a likelihood and severity to each, and propose a design change to mitigate the top two risks.

## References and Helpful Resources

[^1]: Snap-Fit Design Principles — Bayer MaterialScience Snap-Fit Design Manual (widely cited industry reference). Key principle: cantilever beam deflection formula governs clip strength and flexibility.

[^2]: OpenSCAD User Manual — Difference and Boolean Operations. [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling)

[^3]: Tolerance and Fit in FDM Printing — All3DP Guide. [https://all3dp.com/2/fdm-3d-printing-tolerances/](https://all3dp.com/2/fdm-3d-printing-tolerances/)

### Supplemental Resources

- [Programming with OpenSCAD EPUB Textbook](../../assets/Programming_with_OpenSCAD.epub) — Assemblies and interlocking features
- [Measurement Worksheet](../../assets/3dMake_Foundation/measurement_worksheet.md) — Tolerance testing worksheet
- [3DMake GitHub Repository](https://github.com/tdeck/3dmake) — Build workflow reference
