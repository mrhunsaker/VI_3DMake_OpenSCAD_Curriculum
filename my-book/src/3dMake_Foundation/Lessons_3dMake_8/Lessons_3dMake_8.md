# Lesson 8 — Advanced Parametric Design and Interlocking Features

**Estimated Time:** 90–120 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## Before You Start

Every design you've built so far has been a single-piece print. This lesson moves to **multi-part assemblies**: designs where two or more printed pieces must physically fit together. This is where the gap between "looks right on screen" and "works in real life" becomes most critical.

The central concept of this lesson is **tolerance**: the intentional gap between mating parts that makes them fit together correctly. Too tight and the pieces won't go together at all. Too loose and they wobble, rattle, or fall apart. The exact right amount of clearance depends on your specific printer, your specific filament, and your slicer settings — and the only reliable way to know it is to measure it.

This lesson gives you a systematic, professional approach: print a tolerance test coupon, measure the actual results, encode those measurements as named constants in your code, and build designs that work the first time instead of after three reprints.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Explain why FDM-printed holes are always undersized and how to compensate
- Design press-fit and slip-fit joints using printer-specific tolerance values
- Print and use a tolerance test coupon to measure your printer's actual clearances
- Design snap-fit cantilever arms sized correctly for different materials
- Design dovetail slide joints and stackable assemblies
- Use threaded insert pockets for secure metal-to-plastic fastening
- Apply true chamfer geometry
- Apply tolerance values as named constants throughout a design

---

## Concept 1: The Physics of FDM Tolerances

### Why Printed Holes Are Always Too Small

This is one of the most important physical facts about FDM printing, and it surprises almost every beginner the first time they encounter it.

When an FDM printer extrudes a bead of filament, that bead spreads slightly as it deposits — it squishes outward from the center of the extrusion path. This happens at every wall, but the _direction_ of the squishing is important:

- On **outer walls** (the outside of a part), the extrusion squishes _outward_ from the wall's nominal surface. The part comes out slightly larger than designed.
- On **inner walls** (the inside of a hole), the extrusion squishes _inward_ — toward the center of the hole. The hole comes out smaller than designed.

The result: a hole designed to be 10 mm in diameter prints as approximately 9.6–9.8 mm. A peg designed to be 10 mm prints as approximately 9.8–10.0 mm. Two parts with a 10 mm nominal dimension will not fit together — the peg is too large for the hole.

This isn't a flaw in your printer. It's a fundamental consequence of how FDM extrusion works, and every designer working with FDM printing accounts for it.

### What "Clearance" Means

**Clearance** is the intentional difference in size between a peg (or shaft, or tab) and its mating socket (or hole, or slot). You make the peg slightly smaller than the socket — the amount of this size difference is the clearance.

Different clearances produce different fits:

| Fit Type              | Clearance (typical PLA, 0.4mm nozzle) | Behavior                                                   |
| --------------------- | ------------------------------------- | ---------------------------------------------------------- |
| Press-fit (permanent) | 0.0 – 0.1 mm                          | Requires force to assemble; doesn't come apart easily      |
| Slip-fit (removable)  | 0.2 – 0.3 mm                          | Slides smoothly; can be assembled and disassembled by hand |
| Loose/clearance fit   | 0.4 – 0.5 mm                          | Some play and wobble; appropriate for hinges and pivots    |

These are starting-point estimates. Your actual values will differ based on your printer and materials. That's what the test coupon is for.

---

## Step 1 — The Tolerance Test Coupon

### Print This Before Every New Printer or Material

The tolerance test coupon is a small, quick print that gives you empirical data about your specific printer's actual clearances. Print it once with your standard material and settings. Test each peg-socket pair. Record the results. These numbers become the constants in your design files.

You'll need to do this test if you:

- Use a new printer you haven't printed on before
- Switch to a significantly different filament (e.g., from PLA to PETG)
- Change your nozzle size
- Change your slicer settings significantly (especially layer height)

```openscad
// Tolerance Test Coupon
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
  color("SteelBlue")
    cylinder(d=nominal - clearance, h=test_h, $fn=32);
}

module test_socket() {
  // All sockets have the same nominal hole; pegs vary
  color("Coral")
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
      text(str(clearance, "mm"), size=2.5, font="Liberation Sans",
           halign="center", $fn=4);
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
```

### How to Read the Results

After printing, test each peg in each socket. Record:

| Fit Type      | Test Method                                               | What to Record       |
| ------------- | --------------------------------------------------------- | -------------------- |
| Press-fit     | Tightest peg that enters socket with firm thumb pressure  | Your press clearance |
| Slip-fit      | Loosest peg that doesn't rattle in the socket when shaken | Your slip clearance  |
| Bearing/pivot | Loosest peg that rotates smoothly without visible wobble  | Slip + 0.05–0.1 mm   |

These measured values replace the rough estimates in the table above. Record them in a note or file, and use them for every design from now on.

---

## Step 2 — Encoding Tolerance as Named Constants

### Never Hardcode Tolerance Values

Tolerance clearance values should appear in your design file exactly once — at the top, as named constants. When you measure different clearances (because you're on a different printer, or using PETG instead of PLA), you change the constant in one place and the entire design updates.

```openscad
// ============================================================
// TOLERANCE CONSTANTS — measured from your test coupon print
// Run the test coupon, measure, and update these values.
// ============================================================
PRESS_FIT_C = 0.2;    // mm — tightest peg that enters with thumb pressure
SLIP_FIT_C  = 0.3;    // mm — loosest peg that doesn't rattle
SNAP_C      = PRESS_FIT_C;   // snap-fits use press-fit clearance

// Use these constants throughout the file:
// hole_r = peg_r - SLIP_FIT_C    (for a slip-fit hole)
// hole_r = peg_r - PRESS_FIT_C   (for a press-fit hole)
```

This is exactly the same DRY principle from Lesson 3 applied to physical measurements. The constants are derived from reality (your test print); the geometry uses those constants; change one measurement and everything that depends on it updates automatically.

---

## Step 3 — Snap-Fit Cantilever Arms

### What a Snap-Fit Is

A snap-fit is a self-locking fastener made entirely from the printed plastic itself. A thin, flexible beam (the cantilever arm) deflects as the mating part pushes past it, then springs back to its original position, locking the parts together. Think of the plastic tab that holds a battery cover in place, or the clip that holds a phone case together.

Snap-fits are one of the most elegant features you can design. When they work well, they're intuitive, require no separate hardware, and can be assembled and disassembled dozens of times without wearing out. When they're designed wrong, they either crack (too stiff) or don't hold (too flexible).

### The Flexibility Rule

The key design parameter is the **beam flexibility ratio**: `beam_thickness / beam_length`. For PLA, this ratio must be **0.15 or less** — meaning the beam's thickness must be at most 15% of its length. A beam that's too thick relative to its length won't flex and will crack instead of deflecting.

Different materials allow different ratios because they have different stiffness (elastic modulus):

| Material | Maximum beam_t / beam_l | Why                                                |
| -------- | ----------------------- | -------------------------------------------------- |
| PLA      | 0.15                    | Relatively stiff; snaps or cracks if over-flexed   |
| PETG     | 0.18                    | Slightly more flexible than PLA                    |
| Nylon    | 0.20                    | Good flexibility and fatigue resistance            |
| TPU      | 0.25                    | Very flexible; excellent for repeated flex         |
| ABS      | 0.12                    | More brittle than PLA; needs shorter/thinner beams |

```openscad
module snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.2, hook_angle=30,
                material="PLA") {

  // Maximum flexibility ratio by material
  max_ratio = (material == "TPU")  ? 0.25 :
              (material == "PETG") ? 0.18 :
              (material == "Nylon")? 0.20 :
              (material == "ABS")  ? 0.12 :
              0.15;  // default: PLA

  ratio = beam_t / beam_l;

  // Validate before any geometry is created
  assert(ratio <= max_ratio,
    str("snap_arm: beam_t/beam_l ratio (", ratio,
        ") exceeds maximum for ", material, " (", max_ratio,
        "). Reduce beam_t to ≤ ", floor(beam_l * max_ratio * 10) / 10, "mm."));

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
snap_arm(beam_l=20, beam_t=1.8, beam_w=8, hook_h=1.5, material="PLA");
// For a 20mm PLA beam: max thickness = 20 × 0.15 = 3.0mm. This design uses 1.8mm — safe.

// PETG snap arm — can be slightly thicker, more resilient
translate([15, 0, 0])
  snap_arm(beam_l=20, beam_t=2.2, beam_w=8, hook_h=1.5, material="PETG");
```

### Orienting the Snap-Fit for Printing

Snap-fit beams need to flex in one specific direction. For maximum strength and flexibility, the beam should be printed so that the flex direction is perpendicular to the layer lines. This means orienting the print so the beam runs horizontally and flexes up-down (in the Z direction), not sideways (where layer interfaces would create a weakness).

---

## Step 4 — Dovetail Slide Joint

### What a Dovetail Is and Why It's Useful

A dovetail joint has a trapezoidal cross-section — wider at one end than the other, like the tail of a dove. This shape means the joint can only slide in one direction. You can slide two dovetail pieces apart, but you cannot pull them perpendicular to the slide direction — the trapezoidal shape prevents it.

This makes dovetails excellent for: drawer rails, camera slider tracks, adjustable phone mounts, and any assembly where you want parts that can be separated easily but don't fall apart during normal use.

```openscad
dt_l     = 50;    // mm — length of the slide
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
```

---

## Step 5 — Stackable Bin System

### Designing Bins That Stack

For parts that stack vertically, one piece needs a raised lip on top that fits inside the walls of the next piece. The outer dimensions of this lip must be slightly smaller than the inner dimensions of the wall — by your slip-fit clearance — so the stacked bin sits snugly but can still be separated by hand.

```openscad
bin_w     = 80;    // mm — bin width
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
```

After building this, change `lip_clear` and note how it affects the stacking fit. If you print two bins and they don't stack or are too loose, adjust `lip_clear` by 0.05–0.10 mm and reprint the test piece.

---

## Step 6 — Heat-Set Threaded Inserts

### The Problem with Plastic Threads

If you tap a thread directly into printed plastic and screw a bolt into it repeatedly, the plastic threads will wear down and eventually strip. This makes plastic-threaded holes unsuitable for any assembly that will be disassembled and reassembled multiple times.

**Heat-set threaded inserts** solve this problem. They are small brass cylinders with internal threads and external ridges. You heat them with a soldering iron and press them into a printed hole — the heat melts the plastic around the insert, the ridges embed into the material, and when it cools, you have a permanent metal thread that won't strip even after many assembly cycles.

Heat-set inserts are commonly available in M2, M3, and M4 sizes and are standard hardware in professional product design.

```openscad
// M3 brass heat-set insert dimensions:
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
```

**Note:** Heat-set insert hole dimensions vary between manufacturers. Check the datasheet for your specific inserts. The values above are typical for common brass inserts.

---

## Step 7 — True Chamfers

### What a Chamfer Is

A chamfer is a 45° beveled edge where two surfaces meet at a sharp corner. Chamfers serve two purposes in printed parts: they look more professional than a sharp edge, and they can act as lead-ins that help parts align during assembly.

A common mistake is creating a chamfer by simply cropping the top of a part at an angle — this produces a slanted surface, but it's not a true chamfer created from the model's geometry. A true chamfer is created using a `difference()` boolean cut.

```openscad
module chamfered_box(w, d, h, c=2) {
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
```

The chamfer logic: take the top `c` mm of the box as a separate region. Subtract an inset rectangle from it, leaving only the border frame. Remove that border frame from the original box. The result is a clean 45° bevel around the top perimeter.

---

## Step 8 — Dowel Pins for Alignment

### Why Alignment Pins Matter

When two parts are assembled by hand, they may not align perfectly — especially if the mating surfaces are flat. Dowel pins are small cylindrical protrusions on one part that fit into matching pockets on the other. They guarantee precise alignment regardless of how the parts were held during assembly.

One part has the pins (protruding pegs). The other has the pockets (matching blind holes). The pins enter the pockets with a press-fit or slip-fit clearance, locking the parts into perfect alignment.

```openscad
pin_r     = 3;      // mm — pin radius
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
```

---

## Exercises

**Exercise 8.1:** Print the tolerance test coupon. Test each peg-socket pair. Record your press-fit and slip-fit clearance values. Update `PRESS_FIT_C` and `SLIP_FIT_C` with your measured values.

**Exercise 8.2:** Design a snap-fit battery cover for a 60 × 40 × 20 mm space using your measured press-fit clearance and the `snap_arm()` module. Verify the beam flexibility ratio before printing.

**Exercise 8.3 (Advanced):** Create a parametric box set where a `size_scale` parameter (values 0.5, 1.0, 2.0) generates small, medium, and large boxes that all use the same lid design and tolerance values. Generate all three sizes with a bash/PowerShell loop and verify each with `3dm info`.

---

## Quiz — Lesson 8 (15 questions)

1. Why do FDM-printed holes consistently come out smaller than designed? Explain the physical mechanism.
2. What clearance range (in mm) produces a slip-fit for a typical FDM printer with a 0.4mm nozzle and PLA?
3. What is a press-fit, and what application would you use one for?
4. What is the beam_t / beam_l flexibility rule for PLA snap-fit cantilever beams?
5. Why must you print a tolerance test coupon rather than using published clearance values from a chart?
6. What is a heat-set threaded insert and why is it preferred over a plastic-tapped hole for assemblies that are disassembled repeatedly?
7. What is a dovetail joint and in which direction does it lock?
8. What does a stacking lip do in a stackable bin design, and how does clearance factor into its dimensions?
9. True or False: a thicker snap-fit beam is easier to deflect than a thinner one of the same length.
10. What happens if you design a stacking lip with clearance = 0mm?
11. Explain the concept of "tolerance stack-up." If three parts each have ±0.2mm dimensional variation, what is the worst-case total gap variation in an assembled chain of three?
12. Why should tolerance clearance values be defined as named constants at the top of a file rather than hardcoded at each use?
13. Describe how a chamfer is created using `difference()`. What shape is subtracted from the original?
14. For a snap-fit clip made of PLA with `beam_l = 18mm`, what is the maximum `beam_t` allowed by the flexibility rule? Show your calculation.
15. Describe how you would design and conduct a complete tolerance test for a new printer. What prints would you make, what would you measure, and how would you decide on your final clearance values?

---

## Extension Problems (15)

1. Design a complete stackable bin set (small, medium, large) where each size nests inside the next. Use your measured tolerance values throughout.
2. Build a snap-fit box lid that attaches with four clips. Make the number of clips a parameter and validate the beam dimensions with `assert()`.
3. Design a press-fit peg and socket set with five clearances from 0.0 to 0.4 mm. Print one set, test all pairs, and create a table showing which clearance produced which fit type on your printer.
4. Create a wall-mount organizer using snap-fit clips that attach to a standard pegboard (hole pitch = 25.4mm, hole diameter = 6.35mm).
5. Build a two-part enclosure with heat-set insert pockets for M3 screws and matching through-holes for the bolts. Test with real hardware.
6. Design a snap-together dice tray: the tray snaps into a carrying case lid using four snap clips.
7. Create an alignment jig using two dowel pins and matching pockets. Use it to verify your printer's positional accuracy by measuring pin spacing with calipers.
8. Build a cable management clip with a snap-fit that can be opened and closed repeatedly for easy cable insertion and removal.
9. Design a telescoping tube: an inner cylinder that slides freely inside an outer cylinder using your measured slip-fit clearance.
10. Create a bayonet mount: a part that locks with a 90° twist.
11. Design a "living hinge" — a thin flexible connection between two rigid sections that can be folded. Research the appropriate wall thickness and document which materials are suitable.
12. Build a parametric drawer divider system: interlocking slotted panels that can be arranged in any grid configuration.
13. Design a self-locking dovetail joint that slides together in one direction and resists being pulled apart in any perpendicular direction.
14. Create a complete assembly drawing in OpenSCAD: an exploded view with each component translated away from the assembly center, with clear labels and a tolerance reference table as a comment block.
15. Conduct a failure mode analysis for a snap-fit clip: list five ways it could fail in use, rate each by likelihood and severity, and propose a design modification to reduce the top two risks.

---

## References and Helpful Resources

[^1]: Snap-Fit Design Principles — Bayer MaterialScience Snap-Fit Design Manual

[^2]: OpenSCAD User Manual — Difference and Boolean Operations — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling

[^3]: Tolerance and Fit in FDM Printing — All3DP Guide — https://all3dp.com/2/fdm-3d-printing-tolerances/

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub — Assemblies and interlocking features
- 3DMake GitHub Repository — https://github.com/tdeck/3dmake
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Extension Project and Reference Appendices

_All supporting documents for Lesson 8 are included below. You do not need to open any additional files._

---

## Appendix A: Snap-Fit Clip — Extension Project

**Estimated time:** 3–6 hours

### Overview

This extension project takes the snap-fit concepts from Lesson 8 and turns them into a systematic engineering investigation. Rather than building a snap-fit and hoping it works, you will design a parametric test structure, print it at three different tolerance values, measure what happens, and let the data drive your final design.

This is how snap-fit components are actually designed in professional practice: tolerance ranges are established empirically for a specific material-printer combination, then codified as constants for future designs.

### Learning Objectives

By completing this project, you will:

- Design flexible components that must bend without failing
- Conduct tolerance and material testing systematically
- Understand the relationship between geometry, material properties, and functional performance
- Document design iterations and trade-offs in a format that would transfer to a colleague

### Objective

Design a parametric snap-fit clip with adjustable clip thickness and spacing. Use it to determine optimal tolerances for your specific printer and material combination.

### Tasks

1. **Design** a parametric snap-fit test piece with adjustable clip thickness and spacing. All key dimensions must be variables. The design must include at least one cantilever beam using the beam_t / beam_l flexibility rule from Lesson 8.

2. **Print test pieces** for three tolerance values. For each variant, change _only_ the tolerance variable — keep all other parameters fixed. Label each print (embossed text, or a note taped to the print).

3. **Test each clip** for snap-fit behavior. For each variant: assemble and disassemble at least 5 times. Record the effort required, any deformation observed, and whether the clip still functions after 5 cycles.

4. **Refine dimensions** based on results. Choose the tolerance value that produced the most reliable behavior and create a final clip design. Write a one-paragraph justification of your choice.

### Deliverables

- Source `.scad` file with parametric clip modules (all key dimensions as named variables)
- Test print results table (see student documentation template in Appendix B)
- Final clip design with recommended print settings documented
- Completed student documentation template

---

### Starter Code

The stackable bins example from Lesson 8 demonstrates the stacking rim and clearance pattern that snap-fit features build on. Use it as a reference for parametric structure, then design your own snap-fit geometry.

```openscad
// Stackable Storage Bins — Structural Reference
// This example shows the clearance and rim pattern.
// Your snap-fit clip will use similar parametric constants.

bin_w        = 80;    // mm — bin width
bin_d        = 120;   // mm — bin depth
bin_h        = 60;    // mm — bin height
wall         = 2;     // mm — wall thickness
rim          = 3;     // mm — interlock rim height
chamfer      = 2;     // mm — top edge chamfer
stack_clear  = 0.6;   // mm — clearance between stacked bins (measure yours)

module outer() {
  cube([bin_w, bin_d, bin_h]);
}

module inner() {
  translate([wall, wall, wall])
    cube([bin_w - 2*wall, bin_d - 2*wall, bin_h - 2*wall]);
}

module body() {
  difference() { outer(); inner(); }
}

module rim_outer() {
  translate([0, 0, bin_h])
    cube([bin_w, bin_d, rim]);
}

module rim_inner() {
  translate([wall + stack_clear, wall + stack_clear, bin_h])
    cube([bin_w - 2*(wall + stack_clear),
          bin_d - 2*(wall + stack_clear), rim]);
}

module chamfer_top() {
  difference() {
    children();
    translate([-1, -1, bin_h - chamfer])
      cube([bin_w + 2, bin_d + 2, chamfer + 2]);
  }
}

union() {
  chamfer_top() { body(); }
  rim_outer();
  difference() { rim_outer(); rim_inner(); }
}
```

**Snap-fit beam starting scaffold** — adapt this for your test piece:

```openscad
// Snap-Fit Cantilever Beam — Parametric Test Scaffold
// Replace the base_body and target geometry with your own design.

// ---- Key Parameters ----
beam_l      = 15;    // mm — beam length (longer = more flex)
beam_t      = 1.5;   // mm — beam thickness (thinner = more flex)
beam_w      = 6;     // mm — beam width
hook_h      = 1.2;   // mm — hook catch height (the lip that locks)
tolerance   = 0.2;   // mm — clearance for the socket opening
base_w      = 30;    // mm — base block width
base_d      = 20;    // mm — base block depth
base_h      = 4;     // mm — base block height

// Flexibility check: beam_t / beam_l should be < 0.1 for PLA
echo("Flexibility ratio:", beam_t / beam_l,
     "(target < 0.1 for reliable snap-fit)");
assert(beam_t / beam_l < 0.12,
  str("Beam too stiff: beam_t/beam_l = ", beam_t/beam_l,
      ". Reduce beam_t or increase beam_l."));

// ---- Snap-Fit Arm ----
module snap_arm() {
  union() {
    // Main cantilever beam
    cube([beam_w, beam_l, beam_t]);
    // Hook at tip
    translate([0, beam_l - hook_h, 0])
      cube([beam_w, hook_h, beam_t + hook_h]);
  }
}

// ---- Socket (receiver) ----
// The socket opening is wider than the arm by 2×tolerance
module snap_socket() {
  socket_opening = beam_w + 2 * tolerance;
  difference() {
    cube([base_w, base_d, base_h]);
    // Socket slot
    translate([(base_w - socket_opening) / 2, 0, -0.001])
      cube([socket_opening, beam_l + hook_h + tolerance, base_h + 0.002]);
  }
}

// ---- Test Assembly (render both for sizing check) ----
snap_socket();
translate([(base_w - beam_w) / 2, 0, base_h])
  snap_arm();
```

### Assessment Questions

1. What clip thickness and spacing values produced a reliable snap-fit for your specific printer and material?
2. How did you balance flexibility (easy to snap and unsnap) with durability (no premature failure)?
3. What would you change in the design if this clip needed to survive 1,000+ assembly cycles?

---

## Appendix B: Snap-Fit Clip — Student Documentation Template

**Author:** \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**Date:** \_\_\_\_\_\_\_\_\_\_
**Description:** Design a snap-fit connector that joins two 3D-printed parts without external fasteners.

---

### Design Concept

- What two parts will your snap-fit connect?
- Design approach (cantilever arm, torsion box, other):
- Material selected and expected flex limits:
- How did you verify the beam flexibility ratio (beam_t / beam_l)?

---

### Tolerance Specifications

| Parameter                | Nominal Value (mm) | Tolerance Applied (mm) | Rationale |
| ------------------------ | :----------------: | :--------------------: | --------- |
| Beam thickness (beam_t)  |                    |                        |           |
| Beam length (beam_l)     |                    |                        |           |
| Hook height              |                    |                        |           |
| Socket opening clearance |                    |                        |           |
| Contact area width       |                    |                        |           |

**Flexibility ratio check:**

```
beam_t / beam_l = ___ / ___ = ___
Target: < 0.1 for PLA, < 0.08 for PETG
Result: [ ] Pass   [ ] Fail — adjusted to: ___
```

---

### Test Print Results

Print three variants with different tolerance values. Change **only** the tolerance variable between variants.

| Variant | Tolerance (mm) | Assembly effort | Disassembly effort | Deformation after 5 cycles | Pass / Fail |
| :-----: | :------------: | :-------------: | :----------------: | :------------------------: | :---------: |
|   V1    |                |                 |                    |                            |             |
|   V2    |                |                 |                    |                            |             |
|   V3    |                |                 |                    |                            |             |

**Selected tolerance value:** \_\_\_\_\_ mm
**Justification** (one paragraph — reference your test data, not intuition):

---

### Assembly Testing Log

#### Cycle 1 — Initial Assembly

- Date:
- Effort required to snap together (easy / moderate / hard / wouldn't snap):
- Snap strength — resistance to pulling apart (weak / moderate / strong / won't release):
- Visual inspection — any deformation, whitening at bend, or cracking:

#### Cycle 2

- Date:
- Observations:

#### Cycle 3

- Date:
- Observations:

#### Cycle 4

- Date:
- Observations:

#### Cycle 5

- Date:
- Observations:

#### Durability Assessment

- After 5 cycles, is the snap-fit still functional? Yes / No / Partially
- Any permanent deformation observed? Describe:
- Estimated service life based on observed degradation rate:

---

### Mechanical Analysis

Answer in complete sentences:

1. Describe the snap mechanism — explain _why_ it works mechanically, not just that it does.

2. What material properties enable this design? What would happen if you printed the same geometry in a rigid material with no flex (like resin)?

3. Where are the stress concentration points in your design? How did you address them?

---

### Reflections

1. Did the snap-fit work as expected on the first print? If not, what surprised you?

2. What tolerance adjustment had the most significant effect, and by how much?

3. How would you modify this design for a clip that needs to work at outdoor temperatures (hot car in summer, cold winter)?

4. What materials would fail with this exact geometry? Why?

---

### Attachments Checklist

- [ ] `.scad` file with parametric snap-fit module (all key dimensions as named variables)
- [ ] Photos of test variants before assembly (labeled V1, V2, V3)
- [ ] Photos of assembled connections for each variant
- [ ] Photos showing any deformation after 5 cycles
- [ ] Completed tolerance specifications table
- [ ] Completed testing log with dates and observations

---

### Teacher Feedback

| Category                                                                    | Score (0–3) | Notes |
| --------------------------------------------------------------------------- | :---------: | ----- |
| Problem & Solution — snap-fit works reliably; meets functional requirements |             |       |
| Design & Code Quality — parametric, mechanically sound, beam rule applied   |             |       |
| Documentation — testing log complete; tolerance rationale explained         |             |       |
| **Total (0–9)**                                                             |             |       |

---

## Appendix C: Snap-Fit Clip — Instructor Reference

### Project Context

This extension project reinforces the core tolerance and snap-fit content of Lesson 8 through hands-on empirical testing. The key distinction from a standard assignment is the **systematic testing approach**: students must let printed test data drive their final design decisions, not intuition or first-attempt results.

### Key Learning Points to Reinforce

**Tolerance engineering is empirical.** Published clearance values are starting points. The only reliable way to know what works on a specific printer with a specific material is to print and measure. Students who skip the test coupon step and jump straight to a final design will encounter this lesson the hard way.

**The beam flexibility ratio is a design rule, not a guideline.** Beam_t / beam_l < 0.1 (PLA) is derived from material yield strain. A beam that violates this ratio will either not snap (too stiff) or crack on first use (overstressed). The `assert()` in the starter code enforces this at render time.

**Snap-fits degrade with cycles.** PLA creep under repeated stress means a PLA snap-fit that works perfectly at cycle 1 may be noticeably looser at cycle 20. This is not a design failure — it's an expected material behavior that students should document and account for.

### Constraints (Enforce These)

- Snap-fit must join two printed parts without any external fasteners
- All key dimensions must be variables (parametric code required)
- At least three variants must be printed and tested — no single-attempt submissions
- Assembly must be tested over at least 5 cycles with observations recorded for each

### Functional Requirements (Evaluation Criteria)

- Parts snap together securely without over-constraint or binding
- Connection resists separation under intended use without permanent deformation at cycle 1
- Snap mechanism is reusable for at least 5 assembly cycles
- Design reflects understanding of tolerance and material behavior (visible in code comments and documentation)

### Assessment Notes

**Strong submissions** show: tolerance test data driving the final design decision (not guessing), multiple assembly cycles documented with specific observations, and a reflection that discusses material limits with reference to measured results.

**Common weak areas:** Single-variant testing ("it worked so I stopped"), vague reflection ("I would make it thicker"), and tolerance values with no rationale. Push back on these in feedback.

**Extension opportunity:** Students who finish early can investigate material property comparisons — print the same geometry in PLA and PETG (if available) and compare flex behavior and cycle durability. This connects directly to the material selection content in Lesson 5.
