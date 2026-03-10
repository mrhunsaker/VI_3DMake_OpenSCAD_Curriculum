# Safety Protocols and the Physical Fabrication Interface

**Estimated Time:** 90–120 minutes  
**Course:** 3dMake Certification — High School Distance Learning Track

---

## Before You Start

Every lesson so far has been entirely digital: code on a screen, commands in a terminal, virtual geometry. Now we're moving into the physical world. 3D printers are machines that get very hot, draw substantial electrical current, and produce airborne particles and vapors. This lesson exists because these machines are genuinely safe when you know what you're doing, and genuinely dangerous when you don't.

The good news is that 3D printing safety is not complicated. The hazards are well-understood, the mitigations are straightforward, and the incidents that do happen are almost always caused by ignoring simple rules. The goal of this lesson is to make sure you know the rules and understand _why_ they exist — not just as things to memorize for a quiz, but as habits you can apply in any shop or makerspace you ever work in.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Identify and apply the Hierarchy of Controls for 3D printing hazards
- Apply fire, electrical, and fume safety protocols for FDM printing
- Understand filament-specific hazards and safe material handling
- Follow a safe printer startup, monitoring, and shutdown sequence
- Select appropriate filament materials for given projects
- Use pre-flight build scripts to estimate cost before committing to a print
- Design parts that minimize safety risks during printing

---

## Concept 1: The Hierarchy of Controls

### Why We Don't Just "Be Careful"

When it comes to workplace and lab safety, the common advice "just be careful" is the least effective approach available. It relies entirely on individual attention, and attention is inconsistent — everyone gets tired, distracted, or hurried sometimes. Professional safety systems are designed to work even when individual attention lapses.

The **Hierarchy of Controls** is a framework developed by OSHA (the U.S. Occupational Safety and Health Administration) and adopted worldwide. It ranks safety strategies from most effective to least effective, and it says: apply the most effective strategy you can afford, and layer additional strategies below it.

The five levels, from most to least effective:

**1. Elimination** — Remove the hazard entirely. If a filament requires a sealed enclosure with active filtration and you're in an open classroom, the safest choice is simply not to use that filament. If a print requires supports made from difficult material, redesign the print to not need supports. Elimination always wins.

**2. Substitution** — Replace the hazard with a less dangerous one. Use PLA instead of ABS. Use a PEI spring steel bed instead of a glass bed that can shatter. Substitution keeps the functionality while reducing the risk.

**3. Engineering Controls** — Build protection into the environment. A fume enclosure with a HEPA + activated carbon filter. Thermal runaway protection in the printer firmware. A smoke detector mounted above the printer. These controls work automatically without relying on human behavior.

**4. Administrative Controls** — Rules, procedures, and training. The startup checklist, the monitoring schedule, the training program you're in right now. Administrative controls are less reliable than engineering ones because they depend on people following rules consistently.

**5. Personal Protective Equipment (PPE)** — Gloves, goggles, respirators. PPE is the last resort — it protects one person, it can fail or be used incorrectly, and it doesn't actually remove the hazard. Always apply higher-level controls first and use PPE as a supplement.

**The key insight:** many beginners think that putting on gloves and goggles makes them safe. In the hierarchy, PPE is the weakest protection. Real safety comes from eliminating or substituting hazards, and then engineering the remaining risks away. PPE is what you use when those options aren't available.

---

## Step 1 — Fire and Electrical Safety

### The Golden Rule

**Never leave an FDM printer completely unattended during the first layer.** Print failures most often happen at the start — the first layer either bonds to the bed or it doesn't. If it doesn't bond and nobody is watching, the printer may continue for hours, dragging filament across the bed in a mess called "spaghetti" that can tangle around the print head, cause jams, or — in rare worst cases — create a fire hazard.

Be present and watching for at least the first 15 minutes of every print. For long prints, check in every 30 minutes or set up remote monitoring via OctoPrint or a camera.

### Fire Hazards

Fire risk in FDM printing comes from two main sources. First, **electrical failure**: wiring that cracks from repeated movement, loose connections at terminal blocks, or a faulty temperature sensor that allows the heater to run without limit. Second, **filament accumulation**: plastic that melts and collects on the hot nozzle can sometimes ignite if the build-up becomes large enough.

Fire safety protocols:

- Keep a **Class ABC fire extinguisher** within arm's reach of every printer
- Never run the printer while away from the building
- Keep the print area clear of flammable materials: paper, fabric, solvent containers
- Mount a **smoke detector** directly above the printer so rising smoke reaches it quickly
- Know where the power switch is _before_ you start — cutting power is the first response to any emergency
- If smoke appears: cut power immediately, do not try to continue the print, and report the incident

### Electrical Safety

- Use a **surge protector** to protect the printer's control board from voltage spikes
- Inspect all wiring periodically, especially the flexible cable bundle that runs to the heated bed — this bundle flexes with every print and can crack the insulation over time
- **Thermal runaway protection must be enabled.** This firmware feature monitors the temperature sensor and shuts the heater off if the temperature climbs unexpectedly or the sensor fails. A printer without thermal runaway protection can overheat catastrophically. Never disable this protection. If your printer doesn't have it, do not use it.
- Never open the power supply enclosure or work on any electrical component while the printer is plugged in. The power supply contains mains voltage (120V or 240V) that can kill.

---

## Step 2 — Fume Safety

### Why Fumes Matter

All FDM printing produces some airborne emissions. These fall into two categories: **particulates** (tiny plastic particles, especially ultrafine particles below 0.1 microns) and **VOCs** (volatile organic compounds — chemical vapors that off-gas from the hot plastic). Both can affect respiratory health with repeated exposure, and the risk varies significantly by material.

| Material         | Fume Risk  | Required Mitigation                                                                                 |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| PLA              | Low        | Good room ventilation (open window or HVAC on)                                                      |
| PETG             | Low–Medium | Active ventilation; avoid enclosed spaces without air exchange                                      |
| ABS              | High       | Dedicated fume enclosure with HEPA + activated carbon filter required; NOT safe for open classrooms |
| ASA              | High       | Same as ABS                                                                                         |
| TPU              | Medium     | Active ventilation; keep nozzle temperature at the minimum needed                                   |
| Resin (SLA/MSLA) | Very High  | Full enclosure; nitrile gloves; UV-blocking goggles; no open-workspace use                          |

### The Safe Choice: PLA

**PLA (Polylactic Acid) is the safest classroom filament available.** It is made from bio-derived sources (corn starch or sugarcane), prints at relatively low temperatures (190–220°C), produces the lowest emissions of any common FDM material, and is forgiving of settings variations. For any classroom project where the mechanical requirements don't specifically demand a different material, default to PLA.

### What "Good Ventilation" Actually Means

"Good ventilation" means that the air in the room is actively exchanging with outside air. This is not the same as "a window that's crackable." Active ventilation means:

- A window open with a fan pulling air through the room, or
- An HVAC system that is running and moving air, not just recirculating internal air

If you're printing ABS or ASA, room ventilation is not sufficient. You need an enclosure with a filtered exhaust system — a box around the printer with an internal fan that pulls fumes through a HEPA filter (for particles) and an activated carbon filter (for VOCs) before exhausting outside or into a large ventilated space.

---

## Step 3 — Material Selection

### Choosing the Right Filament

The right material for a project depends on what the part needs to do and where it will be used. This table gives you a practical guide:

| Filament | Strength    | Flexibility       | Heat Resistance          | Print Difficulty | Best Uses                                                                   |
| -------- | ----------- | ----------------- | ------------------------ | ---------------- | --------------------------------------------------------------------------- |
| PLA      | Medium      | Rigid             | Low (softens at 50–60°C) | Easy             | Prototypes, display models, artwork, educational parts                      |
| PETG     | Medium-High | Slightly flexible | Medium (75–80°C)         | Easy–Medium      | Functional parts, food-adjacent applications, water contact                 |
| ABS      | High        | Semi-rigid        | High (85–100°C)          | Hard             | Hot environments, automotive interiors, post-processing (acetone smoothing) |
| TPU      | Medium      | Very flexible     | Medium                   | Medium           | Gaskets, grips, phone cases, flexible joints                                |
| Nylon    | Very High   | Flexible          | High                     | Hard             | Mechanical parts, gears, load-bearing functional parts                      |
| ASA      | High        | Semi-rigid        | Very High (90°C+)        | Hard             | Outdoor use, UV-exposed parts                                               |

### What "Hard" to Print Actually Means

When a material is listed as "hard," that means it requires one or more of the following: a higher nozzle temperature, a heated enclosure to prevent warping, special bed adhesion (glue stick, hairspray, specialized plates), slower print speeds, or more careful tuning of retraction settings. Starting with a difficult material before you have PLA dialed in is a recipe for frustration and wasted filament.

**The practical rule:** use PLA until you have a specific reason not to. When you need better heat resistance, try PETG next. ABS and specialty materials come later, with appropriate safety infrastructure.

### PLA and Sustainability — A Realistic Picture

PLA is often marketed as "biodegradable" and "eco-friendly." These claims deserve some scrutiny. PLA _is_ bio-derived — made from fermented plant starch rather than petroleum — which reduces its carbon footprint somewhat compared to petroleum plastics. But PLA only biodegrades under very specific industrial composting conditions (temperatures above 58°C sustained for weeks). It does not break down in a home compost bin or a landfill.

The most sustainable approach to FDM printing is not any particular material — it's designing durable parts that don't need to be reprinted, using the minimum infill that meets your mechanical requirements, and avoiding test prints you don't need (which is exactly why this course emphasizes verification before printing).

---

## Step 4 — Estimating Print Cost Before You Print

### Always Estimate First

Sending a model to print without checking the cost is like placing a restaurant order without looking at the price. For short prints of small parts, the filament cost is trivial (often under $0.50). But for large, high-infill parts, it can be several dollars — and more importantly, it represents several hours of printer time that you can't get back if the part turns out to need revision.

The estimate formula from Lesson 1 applies here:

```
mass (grams)  = (volume_mm³ ÷ 1000) × filament_density_g_per_cm³
cost ($)      = mass × (spool_price_$ ÷ spool_weight_g)
```

The preflight scripts below automate this calculation and require you to confirm before proceeding.

### Pre-Flight Cost Check Scripts

**Linux / macOS (bash):**

```bash
#!/bin/bash
set -e

3dm build
INFO=$(3dm info)
echo "$INFO"

# Extract volume from 3dm info output
VOLUME=$(echo "$INFO" | grep -oP '(?<=Volume:\s)\d+\.?\d*')
if [ -z "$VOLUME" ]; then
  echo "ERROR: Could not parse volume from 3dm info output"
  exit 1
fi

DENSITY=1.24    # g/cm³ — PLA density (change for other materials)
COST_PER_G=0.02 # $/g  — adjust for your spool price

MASS=$(echo "$VOLUME $DENSITY" | awk '{printf "%.1f", ($1/1000)*$2}')
COST=$(echo "$MASS $COST_PER_G" | awk '{printf "%.2f", $1*$2}')

echo ""
echo "=== PRE-FLIGHT SUMMARY ==="
echo "Volume:   ${VOLUME} mm³"
echo "Mass:     ${MASS} g  (PLA @ ${DENSITY} g/cm³)"
echo "Filament: \$${COST}  (@ \$${COST_PER_G}/g)"
echo ""
echo "Proceed? [y/N]"
read CONFIRM
if [ "$CONFIRM" != "y" ]; then
  echo "Cancelled."
  exit 0
fi
echo "Approved. Send to slicer."
```

**Windows (PowerShell):**

```powershell
3dm build
$info = 3dm info
Write-Host $info

$volumeMatch = $info | Select-String -Pattern "Volume:\s+([\d.]+)"
if (-not $volumeMatch) { Write-Error "Could not parse volume"; exit 1 }
$volume = [double]$volumeMatch.Matches.Groups[1].Value

$density  = 1.24    # PLA
$costPerG = 0.02
$mass     = ($volume / 1000) * $density
$cost     = $mass * $costPerG

Write-Host ""
Write-Host "=== PRE-FLIGHT SUMMARY ==="
Write-Host ("Volume:   {0:F0} mm3" -f $volume)
Write-Host ("Mass:     {0:F1} g  (PLA)" -f $mass)
Write-Host ("`$Filament: {0:F2}" -f $cost)
Write-Host ""
$confirm = Read-Host "Proceed? [y/N]"
if ($confirm -ne "y") { Write-Host "Cancelled."; exit 0 }
Write-Host "Approved. Send to slicer."
```

---

## Step 5 — The Printer Startup Checklist

### Before Every Print Session

Use this checklist before starting any print. It takes about 5 minutes and prevents the most common causes of print failure.

```
PRINTER STARTUP CHECKLIST
□ Bed level verified (run auto-level, or manually check at all four corners)
□ Build plate clean (wipe with IPA — remove finger oils and dust)
□ Nozzle cleared (cold pull if returning from more than a day idle)
□ Filament loaded and extruding cleanly (run 50mm manual extrude purge)
□ First layer height set correctly (0.2mm gap typical for 0.4mm nozzle)
□ Print fan operational (watch it spin up at the start)
□ Workspace clear of flammable materials
□ You will remain present for the first 15 minutes of the print
□ Power switch is accessible and you know where it is
```

### Why Each Item Matters

**Bed leveling** is the single most critical setting for successful prints. The first layer needs to be squished gently against the bed — close enough to bond, but not so close that filament can't flow. A bed that's 0.1 mm too high or too low can cause every print to fail. Most modern printers have automatic bed leveling (ABL), but you should still understand how it works and check that it's running correctly.

**Clean build plate** prevents adhesion failures. Skin oils from touching the plate are invisible but dramatically reduce how well plastic sticks. An isopropyl alcohol (IPA) wipe before every print takes 30 seconds and prevents a common failure mode.

**Cold pull (nozzle clearing)** removes degraded filament from inside the nozzle. Heat the nozzle to print temperature, push some filament through, then let it cool to about 90°C and pull the filament out firmly. The end of the pulled filament should bring out any debris or degraded material from inside the hot end.

**Filament loaded correctly** means the extruder is feeding without clicking or skipping, the filament is straight in the Bowden tube (if present), and the purge line at the start of the print flows smoothly with no bubbles or gaps.

---

## Step 6 — Monitoring During Prints

### What to Watch For

Checking in periodically during a print takes only a few seconds each time and lets you catch problems early. A problem caught at layer 10 is a minor inconvenience. The same problem discovered at layer 100 means you've wasted 90 layers of material and print time.

**Spaghetti** — when the part lifts off the bed and the nozzle starts dragging filament through the air instead of depositing it in layers. The result looks like a pile of plastic spaghetti. This is the most common failure mode and the most important to catch early. If you see it, pause or cancel the print immediately.

**Layer shifts** — a horizontal displacement somewhere in the print, where part of the model is offset from the rest. This usually indicates a mechanical problem (belt tension, loose pulley, or a motor missing steps). Cancel the print and diagnose the cause before trying again.

**Nozzle clog** — the extruder starts making a clicking or ticking sound as the gear slips because material isn't flowing. Filament may start grinding. Pause the print and clear the clog before restarting.

**Stringing** — thin wisps of filament connecting different parts of the print. Usually a retraction or temperature setting issue rather than an emergency, but it may require post-processing cleanup.

**Smoke — immediate emergency.** Cut power. Do not attempt to continue or diagnose while the printer is running. Notify your instructor. Do not restart the printer until the cause has been fully identified and corrected.

---

## Step 7 — Safe Shutdown and Part Removal

### The Right Way to End a Print

A print ending doesn't mean the work is done. Follow these steps after every print:

1. **Wait for the nozzle to cool below 50°C** before reaching anywhere near the hot end. The nozzle can reach 200°C+ during printing and retains heat for several minutes after shutdown.

2. **Wait for the bed to cool below 30°C** before removing the part. Parts printed on a hot bed can warp slightly if removed while the bed is still warm. Many PEI-coated beds release parts naturally as they cool — you may not even need tools.

3. **Use a spatula or palette knife** to gently separate the part from the build plate. Never force parts off with your fingers — the edge of a part against a spring steel bed can cut skin. Apply the spatula at a low angle and use a gentle rocking motion.

4. **Store filament in a sealed bag with desiccant.** Filament absorbs moisture from the air (this is called hygroscopy), and moisture in filament causes bubbling, popping, and reduced mechanical properties during extrusion. This is especially important for Nylon and PETG. A small silica gel desiccant packet inside a ziplock bag is sufficient for short-term storage.

---

## Concept 2: Design for Printability and Safety

### Your Design Choices Affect Safety

The decisions you make in OpenSCAD directly affect how safe and reliable the printing process will be. Good design doesn't just mean a part that looks right — it means a part that prints reliably without requiring dangerous materials, excessive supports, or heroic printer tuning.

**Minimize overhangs.** Any geometry that extends more than about 45° from vertical needs supports — temporary scaffolding that the printer adds automatically. Supports increase print time, use more material, often leave rough marks where they're removed, and increase the risk of print failure due to tangled support material. Good design reorients parts or modifies geometry to eliminate or reduce overhangs.

**Maintain minimum wall thickness.** For a 0.4 mm nozzle, walls below 0.8 mm (two nozzle widths) may not print reliably. Walls below 1.2 mm (three nozzle widths) are marginal for any kind of structural use. Walls below about 0.8 mm may not appear in the sliced output at all — the slicer simply omits them as too small.

**Use the safest material that meets requirements.** If PLA is strong enough, use PLA. Don't introduce PETG, ABS, or specialty materials unless you have a specific reason and the appropriate safety infrastructure.

**Encode printability constraints in your code:**

```openscad
// Printability constants — these drive safe design decisions
wall_min     = 1.2;    // mm — minimum wall for 0.4mm nozzle (3× nozzle width)
hole_min_r   = 1.5;    // mm — minimum hole radius for reliable circular holes
clearance    = 0.2;    // mm — fitting clearance between mating faces
overhang_max = 45;     // degrees — maximum overhang without supports

module printable_box(w, d, h, wall=2) {
  // Validate against printability limits
  assert(wall >= wall_min, str("wall (", wall, "mm) must be >= ", wall_min, "mm"));
  assert(w > 2 * wall, "width must be greater than two wall thicknesses");
  assert(d > 2 * wall, "depth must be greater than two wall thicknesses");

  // Open-top box: no overhangs on the inside
  difference() {
    cube([w, d, h]);
    translate([wall, wall, wall])
      cube([w - 2*wall, d - 2*wall, h]);  // open at top — no overhang required
  }
}

printable_box(50, 40, 30);
```

---

## Exercises

**Exercise 5.1:** Run `3dm info` on your model from Lesson 3. Calculate the material cost in PLA and in PETG (density 1.27 g/cm³). If PLA spools cost $20/kg and PETG spools cost $25/kg, what is the cost difference for your part?

**Exercise 5.2:** Write a pre-flight script (bash or PowerShell) that builds your model, reports the estimated cost, and requires a `y` confirmation before proceeding.

**Exercise 5.3 (Advanced):** Modify the pre-flight script to accept a `--material` argument (options: `pla`, `petg`, `abs`, `tpu`) and calculate cost using the correct density for the selected material.

---

## Quiz — Lesson 5 (15 questions)

1. What are the five levels of the Hierarchy of Controls, from most to least effective?
2. Why is Elimination considered the most effective safety control?
3. Which filament requires a dedicated fume enclosure with HEPA + activated carbon filtration and is NOT recommended for open classrooms?
4. At what temperature should you wait before removing a print from the bed?
5. What should you do immediately if you see smoke coming from your 3D printer?
6. Give three reasons why PLA is considered the safest classroom filament.
7. What is the minimum reliable wall thickness for a 0.4 mm nozzle, and why does this minimum exist?
8. What is the purpose of storing filament with desiccant?
9. True or False: It is safe to leave a 3D printer completely unattended for hours once the first layer has printed successfully.
10. What is "spaghetti" in the context of a 3D printing failure, and what causes it?
11. What is thermal runaway protection, and why is it critical that it remain enabled?
12. What are the two types of airborne emissions from FDM printing, and which filaments produce the most hazardous levels of each?
13. Describe one engineering control and one administrative control you could implement in a classroom 3D printing lab.
14. Explain why minimizing overhangs in your design is both a safety consideration and a quality consideration.
15. A student wants to print a car dashboard mount in ABS because it will be in a hot car. The classroom has no fume enclosure. Using the Hierarchy of Controls, what recommendations would you make?

---

## Extension Problems (15)

1. Create a material selection flowchart that guides a user from mechanical requirements to the safest filament that meets them.
2. Conduct a ventilation assessment of your classroom or makerspace. Document air exchange methods, window locations, and any existing filtration.
3. Write a Standard Operating Procedure (SOP) for ABS printing that includes all required safety equipment and ventilation infrastructure.
4. Design and describe a "first layer test tile" — a 100 × 100 × 0.4 mm flat tile — and explain how you'd use it to verify bed leveling.
5. Build a parametric filament storage clip in OpenSCAD: a clip that holds the free end of a filament spool. Parameters: filament diameter, clip width.
6. Research OSHA's published guidance on VOC exposure in 3D printing environments. Summarize the key recommendations.
7. Compare the Safety Data Sheets (SDS) for PLA and ABS filament from two manufacturers. Document differences in recommended exposure limits and PPE.
8. Design a simple printer enclosure in OpenSCAD: four walls, a front door opening, and a top panel with a circular vent hole. Document the parametric variables.
9. Create a safety poster covering the five most important 3D printing safety rules, organized using the Hierarchy of Controls framework.
10. Write a one-page risk assessment for a new FDM printer being added to a classroom.
11. Design and describe a parametric filament moisture indicator holder: a small box that holds a humidity indicator card inside a resealable filament storage bag.
12. Build a "print monitoring log" template: a paper form with columns for time, nozzle temperature, bed temperature, layer number, visual observations, and action taken.
13. Research the difference between particle emissions and VOC emissions from FDM printing. Which is considered more hazardous at typical classroom distances from the printer?
14. Design a parametric build plate corner protector: a small clip that attaches to the edge of a glass or spring steel build plate to protect it from spatula damage.
15. Write a hypothetical "near-miss incident report" for a fictional 3D printing incident using a standard workplace incident report format (date, location, description, contributing factors, corrective actions).

---

## References and Helpful Resources

[^1]: OSHA Hierarchy of Controls — https://www.osha.gov/hierarchy-of-controls / NIOSH — https://www.cdc.gov/niosh/topics/hierarchy/default.html

[^2]: UL Research Institutes — 3D Printing Emissions Study — https://www.ul.com/news/ul-research-institutes-releases-3d-printing-emissions-study

[^3]: NIOSH Science Blog — Health and Safety Considerations for 3D Printing — https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-printing/

[^4]: PrusaSlicer Documentation — https://docs.prusa3d.com/en/

[^5]: All3DP Filament Types — https://all3dp.com/1/3d-printer-filament-types-3d-printing-3d-filament/

[^6]: MatterHackers Filament Compare — https://www.matterhackers.com/3d-printer-filament-compare

[^7]: Prusa Research Materials Guide — https://help.prusa3d.com/materials

### Supplemental Resources

- 3DMake GitHub Repository — https://github.com/tdeck/3dmake
- OpenSCAD User Manual — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual
- All other reference documents are embedded as appendices below — no separate files needed.

---

# Part 2: Reference Appendices

_All supporting documents for Lesson 5 are included below. You do not need to open any additional files._

---

## Appendix A: Safety Checklist for 3D Printing

_Complete this checklist before and after each printing session. Print it out and keep a copy at your printer station._

---

### Pre-Print Setup

**Work Area**

- [ ] Desk or table cleared of unnecessary items
- [ ] Tripping hazards removed from around the printer
- [ ] Adequate ventilation confirmed (window open, fan running, or fume enclosure active)
- [ ] Class ABC fire extinguisher within arm's reach
- [ ] Smoke detector mounted above printer is functional

**Printer Inspection**

- [ ] Nozzle is clean — no old filament residue baked on
- [ ] Build plate is level (re-level if the printer has been moved or bumped)
- [ ] Heated bed temperature sensor is attached and secure
- [ ] All cables are secure and none are frayed or cracked — especially the flexible bed cable bundle
- [ ] Thermal runaway protection is enabled (check firmware settings if unsure)

**Filament Preparation**

- [ ] Filament spool rotates freely on the holder — no binding or tangling
- [ ] Filament path is clear of obstructions from spool to extruder
- [ ] Extruder drive gear is clean — not clogged with ground plastic
- [ ] Filament is correctly loaded and primed (a few mm of filament extruded before starting)

**Environmental Conditions**

- [ ] Room temperature is adequate (18–25°C ideal — extreme cold slows bed heating; extreme heat can soften PLA)
- [ ] No direct drafts from windows or air conditioning blowing on the printer (drafts cause warping and layer splitting)
- [ ] Adequate lighting to clearly see the first layer as it prints

---

### During Print

**First Layer Monitoring (Do Not Leave)**

- [ ] Watch the first 2–3 layers without interruption
- [ ] Bed adhesion is correct — filament sticks flat, not lifting at corners or curling
- [ ] Nozzle temperature is stable at target value
- [ ] No unusual sounds (grinding, clicking, popping)

**Regular Checks (Every 15–30 Minutes)**

- [ ] Print is building correctly — no layer shifting, no spaghetti
- [ ] Filament is feeding smoothly from the spool
- [ ] No grinding or skipping sounds from the extruder
- [ ] No warping visible at part edges

**Temperature Stability**

- [ ] Heated bed maintains consistent temperature throughout
- [ ] Nozzle temperature does not fluctuate more than ±5°C
- [ ] No thermal runaway warnings on the printer display

---

### Stop the Print Immediately If

- [ ] The nozzle jams or extrudes unevenly
- [ ] Filament stops feeding entirely
- [ ] Any burning smell is detected
- [ ] Visible layer shifting occurs
- [ ] Grinding or skipping sounds from the extruder
- [ ] Any unusual chemical or burning odor
- [ ] Smoke appears — **cut power immediately**

---

### Post-Print

**Cool Down**

- [ ] Allow the heated bed to cool naturally for 10–15 minutes before attempting print removal
- [ ] Keep hands clear of the nozzle until it reads below 50°C
- [ ] Confirm the printer is idle and all temperatures are dropping before touching

**Print Removal**

- [ ] Use a proper spatula or scraper — not fingers or improvised tools
- [ ] Remove the print only when the bed has fully cooled (PLA releases easily from PEI beds when cool)
- [ ] Inspect the print for sharp edges, support stubs, or layer delamination
- [ ] Sand or file sharp edges if the part will be handled

**Equipment Cleaning**

- [ ] Wipe the nozzle with a brass wire brush when cooled to 50°C (never cold — residue must be slightly soft)
- [ ] Remove any plastic debris and failed print material from the build plate
- [ ] Check the extruder for embedded filament residue
- [ ] Clear any visible dust from the electronics area

**Workspace Cleanup**

- [ ] Return all tools to their proper storage location
- [ ] Dispose of support material and failed prints in a bin (not on the floor)
- [ ] Store filament in a sealed bag with desiccant
- [ ] Confirm the workspace is clear and safe for the next user

---

### Hazard Reference Summary

| Hazard                    | Temperature / Condition | Response                                 |
| ------------------------- | ----------------------- | ---------------------------------------- |
| Hot nozzle                | 190–260°C               | Do not touch; wait for < 50°C            |
| Hot bed                   | 50–110°C                | Do not touch; allow full cool-down       |
| Fumes (ABS/PETG)          | At operating temp       | Ventilate; use enclosure with filtration |
| Electrical (power supply) | 120V / 240V mains       | Never open while plugged in              |
| Tangled filament          | Any                     | Clear before printing; never force-pull  |

### Emergency Actions

- **Fire:** Unplug immediately. Use a dry chemical (Class ABC) extinguisher — NOT water on electrical fires. Evacuate and call emergency services.
- **Burns:** Rinse with cool (not cold) running water for 15+ minutes. Seek medical attention for any burn larger than a coin.
- **Fume inhalation:** Move to fresh air immediately. Seek medical attention if symptoms (headache, dizziness, nausea) persist.

_Last Reviewed:_ \_\_\_\_\_\_\_\_\_\_ _Reviewed By:_ \_\_\_\_\_\_\_\_\_\_

---

## Appendix B: Filament Comparison Table

_Quick reference for choosing the right filament. All temperature values are typical ranges — always check the label on your specific spool. The spool always wins over this table._

---

### Side-by-Side Comparison

| Property                       | PLA           | PETG                  | TPU (Flex)        | ABS                       |
| ------------------------------ | ------------- | --------------------- | ----------------- | ------------------------- |
| **Difficulty**                 | Easiest       | Moderate              | Hard              | Very Hard                 |
| **Nozzle temp**                | 190–220°C     | 230–250°C             | 220–240°C         | 230–250°C                 |
| **Bed temp**                   | 50–60°C       | 70–85°C               | 30–60°C           | 90–110°C                  |
| **Enclosure needed?**          | No            | No                    | No                | Yes                       |
| **Rigidity**                   | High          | Medium                | None — flexible   | High                      |
| **Impact resistance**          | Low (brittle) | Medium                | Very high         | Medium                    |
| **Heat resistance**            | Low (~60°C)   | Medium (~80°C)        | Medium            | High (~100°C)             |
| **Flexibility**                | None          | Slight                | Rubber-like       | None                      |
| **Moisture sensitivity**       | Low           | Medium                | High              | Medium                    |
| **Fume concern**               | Lowest        | Low                   | Moderate          | High                      |
| **Bed adhesion**               | Easy          | Use glue stick on PEI | Easy              | Requires enclosure + glue |
| **Print speed**                | Normal        | Normal                | Slow (20–30 mm/s) | Normal                    |
| **Stringing tendency**         | Low           | Medium–High           | High              | Low                       |
| **Approximate cost**           | $15–25/kg     | $15–30/kg             | $20–40/kg         | $15–25/kg                 |
| **Recommended for beginners?** | ✅ Yes        | After PLA             | After experience  | ❌ No                     |

---

### When to Use Each Material

**PLA — Use for:**

- Prototypes and test prints
- Classroom projects
- Decorative objects and tactile models
- Anything that won't be exposed to heat, moisture, or heavy mechanical stress

**PLA — Avoid for:**

- Objects left in a hot car or direct sun (softens above ~60°C)
- Parts that need to flex or bend without cracking
- High-impact applications

**PETG — Use for:**

- Functional parts that need to be tougher than PLA
- Parts exposed to mild heat or moisture
- Mechanical components: brackets, clips, mounts
- Food-contact applications (check your specific brand for food-safe certification)

**PETG — Avoid for:**

- Very fine surface detail (it strings more than PLA)
- Projects where you need the easiest possible first-time print

**TPU / Flexible — Use for:**

- Wearable objects (wristbands, phone cases, watch straps)
- Bumpers and shock absorbers
- Grips and handles
- Objects that must deform under pressure and return to shape

**TPU — Avoid for:**

- Fine surface detail
- Printers with Bowden extruders (the flexible filament buckles in the tube — direct drive only)
- Your first few prints while still learning

**ABS — Use for:**

- High-heat environments (car interiors, near motors)
- Parts requiring post-processing (ABS sands, bonds with acetone vapor, and paints easily)
- Professional or industrial contexts with proper dedicated ventilation

**ABS — Avoid for:**

- Any classroom without a dedicated sealed fume enclosure and active filtration
- Beginners
- Any print where warping at the edges would be a problem and you have no enclosure

---

### Slicer Profile Quick Reference

| Filament | PrusaSlicer Profile | Key Changes from PLA Default                        |
| -------- | ------------------- | --------------------------------------------------- |
| PLA      | Generic PLA         | Baseline — no changes needed                        |
| PETG     | Generic PETG        | Higher temps; slower cooling; glue stick on PEI bed |
| TPU      | Generic Flex        | Reduce speed to 20–30 mm/s; reduce retraction       |
| ABS      | Generic ABS         | Higher temps; disable cooling fan; use enclosure    |

---

### Filament Storage

All filament absorbs moisture from the air over time. Wet filament causes: popping or crackling sounds during printing, bubbles in extruded plastic, excessive stringing, and weak or brittle finished parts.

| Filament | Moisture Sensitivity | Storage Recommendation                                                      |
| -------- | -------------------- | --------------------------------------------------------------------------- |
| PLA      | Low                  | Sealed bag with desiccant when not in use                                   |
| PETG     | Medium               | Sealed bag with desiccant; dry before use if stored open for weeks          |
| TPU      | High                 | Always store sealed; dry in oven at 65°C for 4–6 hours if moisture-absorbed |
| ABS      | Medium               | Sealed bag with desiccant                                                   |

_Sources: All3DP Filament Types Guide; MatterHackers Filament Compare; Prusa Research Materials Guide_

---

## Appendix C: Material Properties Quick Reference

_Essential material data for FDM/FFF printing. Use alongside the Filament Comparison Table for material selection decisions._

---

### Properties at a Glance

| Property            | PLA        | PETG       | ABS           | TPU            |
| ------------------- | ---------- | ---------- | ------------- | -------------- |
| Nozzle temp (°C)    | 200–220    | 235–250    | 240–260       | 220–240        |
| Bed temp (°C)       | 20–60      | 70–90      | 100–110       | 20–60          |
| Strength            | Moderate   | High       | Very High     | Low (flexible) |
| Flexibility         | None       | Slight     | Slight        | High           |
| Ease of printing    | Very Easy  | Easy       | Hard          | Moderate       |
| Cost ($/kg)         | $15–25     | $20–30     | $18–28        | $30–50         |
| Print speed         | 40–60 mm/s | 30–50 mm/s | 20–40 mm/s    | 10–30 mm/s     |
| Bed adhesion        | Easy       | Moderate   | Requires prep | Easy           |
| UV resistance       | Low        | Moderate   | High          | Low            |
| Chemical resistance | No         | Moderate   | Yes           | No             |

---

### Heat Resistance After Printing

This is one of the most common reasons to choose a material other than PLA.

| Material | Safe to use up to | Softens at | Notes                                                     |
| -------- | :---------------: | :--------: | --------------------------------------------------------- |
| PLA      |     ~50–60°C      |  ~60–70°C  | Not suitable for car interiors or items near heat sources |
| PETG     |     ~80–100°C     | ~100–110°C | Handles warm environments well                            |
| ABS      |     ~90–110°C     | ~110–120°C | Good heat resistance; most demanding to print             |
| TPU      |     ~60–80°C      | ~80–100°C  | Limited heat resistance despite flex durability           |

---

### Chemical Resistance

| Material |  Water   | Alcohol  |  Acetone  |   Oils   |  Acids   |
| -------- | :------: | :------: | :-------: | :------: | :------: |
| PLA      |   Low    |   Low    | Dissolves |   Low    |   Low    |
| PETG     |   High   | Moderate | Moderate  |   High   | Moderate |
| ABS      |   High   | Moderate | Dissolves |   High   | Moderate |
| TPU      | Moderate |   Low    |    Low    | Moderate |   Low    |

**Acetone note:** Can be used to smooth ABS surfaces (vapor or liquid application). Also dissolves PLA — keep acetone away from PLA prints and filament spools.

---

### Strength After Printing — Curing Time

Freshly printed parts are not at full strength.

| Time After Printing | Approximate Strength     |
| ------------------- | ------------------------ |
| 0–24 hours          | 70–80% of final strength |
| 24–48 hours         | 90–95% of final strength |
| 48–72 hours         | ~99% of final strength   |
| 7+ days             | Maximum strength         |

Do not stress-test functional parts immediately after printing. Allow at least 24 hours before load testing.

---

### Storage Conditions

| Factor              | Recommended Range             |
| ------------------- | ----------------------------- |
| Storage temperature | 15–25°C                       |
| Relative humidity   | 30–50%                        |
| Light exposure      | Away from direct sunlight     |
| Container           | Sealed with desiccant packets |

---

### Quick Material Selection Guide

| Question                | Answer                                   |
| ----------------------- | ---------------------------------------- |
| First time printing?    | PLA                                      |
| Need durability?        | PETG or ABS                              |
| Need flexibility?       | TPU                                      |
| Need high strength?     | ABS or PETG                              |
| Quick test / prototype? | PLA                                      |
| Outdoor use?            | PETG or ABS                              |
| Food contact?           | Food-grade certified PETG (verify brand) |
| Heat resistant?         | ABS                                      |
| Easiest possible print? | PLA                                      |

---

## Appendix D: Printer Maintenance Log

_Copy this log and keep a printed or digital copy with your printer. Fill in the Printer Information section first, then log every maintenance event and issue as it occurs. A complete log is your best diagnostic tool when problems arise._

---

### Printer Information

| Field                        | Value |
| ---------------------------- | ----- |
| Printer model                |       |
| Serial number                |       |
| Purchase date                |       |
| Firmware version             |       |
| Last service date            |       |
| Warranty expiry              |       |
| Manufacturer support contact |       |

---

### Maintenance Schedule

**Before each use (Daily)**

- [ ] Visual inspection — no visible damage, cables intact
- [ ] Clean nozzle tip if residue is present
- [ ] Verify build plate is level (re-level if printer was moved)
- [ ] Confirm filament spool rotates freely with no tangles

**Weekly**

- [ ] Clean extruder drive gear (compressed air or brush out ground plastic)
- [ ] Inspect and wipe Z-axis rails and lead screw
- [ ] Check all cable connections at the control board
- [ ] Test emergency stop / power cut

**Monthly**

- [ ] Full build plate leveling procedure (manual or automatic)
- [ ] Clean interior of print chamber
- [ ] Inspect heating elements and thermistor connections
- [ ] Run a temperature calibration test print

**Quarterly (every 3 months)**

- [ ] Replace nozzle if inner bore shows wear or repeat clogging
- [ ] Full mechanical inspection — belt tension, eccentric nuts, frame screws
- [ ] Check firmware for updates
- [ ] Run a full calibration test print and document results

---

### Maintenance Log

| Date | Type | Description | Time Spent | Issues Found | Resolution | By  |
| ---- | ---- | ----------- | ---------- | ------------ | ---------- | --- |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |
|      |      |             |            |              |            |     |

_Types: Routine / Repair / Calibration / Cleaning / Part replacement_

---

### Issue Tracking Log

| Date | Symptom | Diagnosis | Action Taken | Status | Notes |
| ---- | ------- | --------- | ------------ | ------ | ----- |
|      |         |           |              |        |       |
|      |         |           |              |        |       |
|      |         |           |              |        |       |
|      |         |           |              |        |       |
|      |         |           |              |        |       |

_Statuses: Open / In progress / Resolved / Monitoring_

---

### Parts Replacement Record

| Date | Part Replaced | Reason | Supplier | Cost | Notes |
| ---- | ------------- | ------ | -------- | ---- | ----- |
|      |               |        |          |      |       |
|      |               |        |          |      |       |
|      |               |        |          |      |       |

---

### Filament Compatibility Notes

Record your tested settings for each material on this specific printer. Published temperature ranges are starting points — your printer may run hotter or cooler than its display indicates.

| Filament | Brand | Nozzle Temp | Bed Temp | Speed | Success Rate | Notes |
| -------- | ----- | :---------: | :------: | :---: | :----------: | ----- |
| PLA      |       |             |          |       |              |       |
| PETG     |       |             |          |       |              |       |
| ABS      |       |             |          |       |              |       |
| TPU      |       |             |          |       |              |       |
| Other    |       |             |          |       |              |       |

---

### Troubleshooting Quick Reference

**Nozzle Clog**

- First response: Cold pull (heat to printing temp, push filament through manually, cool to 90°C, pull sharply)
- Second response: Acupuncture needle or nozzle cleaning filament
- Last resort: Replace nozzle

**Bed Adhesion Problems**

- Check: Bed level, nozzle height from bed, bed surface condition (clean? worn?)
- Fix by material: PLA → clean PEI with IPA; PETG → apply glue stick; ABS → glue stick + enclosure

**Layer Shifting**

- Common causes: Belt too loose, motor current too low, print speed too high, X/Y axis obstruction
- Check belt tension first — it's the most common cause

**Extrusion Issues (Under-extrusion)**

- Common causes: Partial clog, worn drive gear, incorrect extruder steps/mm, wet filament
- Run a flow rate test: extrude 100 mm and measure actual output

---

### Monthly Performance Summary

| Month | Print Success Rate | Common Issues | Overall Assessment |
| ----- | :----------------: | ------------- | ------------------ |
|       |                    |               |                    |
|       |                    |               |                    |
|       |                    |               |                    |
|       |                    |               |                    |

_Last log entry:_ \_\_\_\_\_\_\_\_\_\_ _Logged by:_ \_\_\_\_\_\_\_\_\_\_
