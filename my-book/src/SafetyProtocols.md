# Safety Protocols and the Physical Fabrication Interface

---

## Before You Start

3D printers are machines that get very hot, draw substantial electrical current, and produce airborne particles and vapors. This lesson exists because these machines are genuinely safe when {{i:you}} know what {{i:you}}'re doing, and genuinely dangerous when {{i:you}} don't.

The good news is that {{hi:3D {{i:printing}}}}3D {{i:printing}} safety is not complicated. The hazards are well-understood, the mitigations are straightforward, and the incidents that do happen are almost always caused by ignoring simple rules. The goal of this lesson is to make sure {{i:you}} know the rules and understand _why_ they exist — not just as things to memorize for a quiz, but as habits {{i:you}} {{i:can}} apply in any shop or makerspace {{i:you}} ever {{i:work}} in.

---

## Learning Objectives

By the end of this lesson {{i:you}} will be able to:

- Identify and apply the Hierarchy of Controls for 3D {{i:printing}} hazards
- Apply fire, electrical, and fume safety protocols for FDM {{i:printing}}
- Understand {{i:filament}}-{{i:specific}} hazards and safe {{i:material}} handling
- Follow a safe {{i:printer}} startup, monitoring, and shutdown sequence
- Select appropriate {{i:filament}} materials for given projects
- Use pre-flight {{i:build}} {{i:scripts}} to estimate cost {{i:before}} committing to a {{i:print}}
- {{i:Design}} parts that minimize safety risks during {{i:printing}}

---

## Concept 1: The Hierarchy of Controls

### Why We Don't Just "Be Careful"

When it comes to workplace and lab safety, the {{i:common}} advice "just be careful" is the least effective approach available. It relies entirely on individual attention, and attention is inconsistent — everyone gets tired, distracted, or hurried sometimes. Professional safety systems are designed to {{i:work}} even when individual attention lapses.

The **Hierarchy of Controls** is a framework developed by OSHA (the U.S. Occupational Safety and Health Administration) and adopted worldwide. It ranks safety strategies from most effective to least effective, and it says: apply the most effective strategy {{i:you}} {{i:can}} afford, and {{i:layer}} additional strategies below it.

The five levels, from most to least effective:

**1. Elimination** — Remove the hazard entirely. If a {{i:filament}} requires a sealed enclosure with active filtration and {{i:you}}'re in an open classroom, the safest choice is simply not to use that {{i:filament}}. If a {{i:print}} requires supports made from difficult {{i:material}}, redesign the {{i:print}} to not need supports. Elimination always wins.

**2. Substitution** — Replace the hazard with a less dangerous {{i:one}}. Use {{hi:PLA}}PLA instead of {{hi:ABS}}ABS. Use a PEI spring steel {{i:bed}} instead of a glass {{i:bed}} that {{i:can}} shatter. Substitution keeps the functionality while reducing the risk.

**3. Engineering Controls** — Build protection {{i:into}} the {{i:environment}}. A fume enclosure with a HEPA + activated carbon filter. Thermal runaway protection in the {{i:printer}} firmware. A smoke detector mounted above the {{i:printer}}. These controls {{i:work}} automatically without relying on human behavior.

**4. Administrative Controls** — Rules, procedures, and training. The startup checklist, the monitoring schedule, the training program {{i:you}}'re in right now. Administrative controls are less reliable than engineering ones because they depend on people following rules consistently.

**5. Personal Protective Equipment (PPE)** — Gloves, goggles, respirators. PPE is the last resort — it protects {{i:one}} person, it {{i:can}} fail or be used incorrectly, and it doesn't actually remove the hazard. Always apply higher-level controls {{i:first}} and use PPE as a supplement.

**The key insight:** many beginners think that putting on gloves and goggles makes them safe. In the hierarchy, PPE is the weakest protection. Real safety comes from eliminating or substituting hazards, and then engineering the remaining risks away. PPE is what {{i:you}} use when those options aren't available.

---

## Step 1 — Fire and Electrical Safety

### The Golden Rule

**Never leave an FDM {{i:printer}} completely unattended during the {{i:first}} {{i:layer}}.** Print failures most often happen at the start — the {{i:first}} {{i:layer}} either bonds to the {{i:bed}} or it doesn't. If it doesn't bond and nobody is watching, the {{i:printer}} may continue for hours, dragging {{i:filament}} across the {{i:bed}} in a mess called "spaghetti" that {{i:can}} tangle around the {{i:print}} head, cause jams, or — in rare worst cases — {{i:create}} a fire hazard.

Be present and watching for at least the {{i:first}} 15 minutes of every {{i:print}}. For long prints, check in every 30 minutes or set up remote monitoring via OctoPrint or a camera.

### Fire Hazards

Fire risk in FDM {{i:printing}} comes from two main sources. First, **electrical failure**: wiring that cracks from repeated movement, loose connections at terminal blocks, or a faulty temperature sensor that allows the heater to {{i:run}} without limit. Second, **{{i:filament}} accumulation**: plastic that melts and collects on the hot nozzle {{i:can}} sometimes ignite if the {{i:build}}-up becomes large enough.

Fire safety protocols:

- Keep a **Class ABC fire extinguisher** within arm's reach of every {{i:printer}}
- Never {{i:run}} the {{i:printer}} while away from the building
- Keep the {{i:print}} area clear of flammable materials: paper, fabric, solvent containers
- Mount a **smoke detector** directly above the {{i:printer}} so rising smoke reaches it quickly
- Know where the power switch is _before_ {{i:you}} start — cutting power is the {{i:first}} response to any emergency
- If smoke appears: cut power immediately, do not try to continue the {{i:print}}, and report the incident

### Electrical Safety

- Use a **surge protector** to protect the {{i:printer}}'s control board from voltage spikes
- Inspect all wiring periodically, especially the flexible cable bundle that runs to the heated {{i:bed}} — this bundle flexes with every {{i:print}} and {{i:can}} crack the insulation over {{i:time}}
- **Thermal runaway protection must be enabled.** This firmware feature monitors the temperature sensor and shuts the heater off if the temperature climbs unexpectedly or the sensor fails. A {{i:printer}} without thermal runaway protection {{i:can}} overheat catastrophically. Never disable this protection. If your {{i:printer}} doesn't have it, do not use it.
- Never open the power supply enclosure or {{i:work}} on any electrical component while the {{i:printer}} is plugged in. The power supply contains mains voltage (120V or 240V) that {{i:can}} kill.

---

## Step 2 — Fume Safety

### Why Fumes Matter

All FDM {{i:printing}} produces some airborne emissions. These fall {{i:into}} two categories: **particulates** (tiny plastic particles, especially ultrafine particles below 0.1 microns) and **VOCs** (volatile organic compounds — chemical vapors that off-gas from the hot plastic). Both {{i:can}} affect respiratory health with repeated exposure, and the risk varies significantly by {{i:material}}.

| Material         | Fume Risk  | Required Mitigation                                                                                 |
| ---------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| PLA              | Low        | Good room ventilation (open window or HVAC on)                                                      |
| {{hi:PETG}}PETG             | Low–Medium | Active ventilation; avoid enclosed spaces without air exchange                                      |
| ABS              | High       | Dedicated fume enclosure with HEPA + activated carbon filter required; NOT safe for open classrooms |
| ASA              | High       | Same as ABS                                                                                         |
| {{hi:TPU}}TPU              | Medium     | Active ventilation; keep nozzle temperature at the minimum needed                                   |
| Resin (SLA/MSLA) | Very High  | Full enclosure; nitrile gloves; UV-blocking goggles; no open-workspace use                          |

### The Safe Choice: PLA

**PLA (Polylactic Acid) is the safest classroom {{i:filament}} available.** It is made from bio-derived sources (corn starch or sugarcane), prints at relatively low temperatures (190–220°C), produces the lowest emissions of any {{i:common}} FDM {{i:material}}, and is forgiving of settings variations. For any classroom project where the mechanical requirements don't specifically demand a different {{i:material}}, default to PLA.

### What "Good Ventilation" Actually Means

"Good ventilation" means that the air in the room is actively exchanging with outside air. This is not the same as "a window that's crackable." Active ventilation means:

- A window open with a fan pulling air through the room, or
- An HVAC system that is running and moving air, not just recirculating internal air

If {{i:you}}'re {{i:printing}} ABS or ASA, room ventilation is not sufficient. You need an enclosure with a filtered exhaust system — a box around the {{i:printer}} with an internal fan that pulls fumes through a HEPA filter (for particles) and an activated carbon filter (for VOCs) {{i:before}} exhausting outside or {{i:into}} a large ventilated space.

---

## Step 3 — Material Selection

### Choosing the Right Filament

The right {{i:material}} for a project depends on what the {{i:part}} needs to do and where it will be used. This table gives {{i:you}} a practical guide:

| Filament | Strength    | Flexibility       | Heat Resistance          | Print Difficulty | Best Uses                                                                   |
| -------- | ----------- | ----------------- | ------------------------ | ---------------- | --------------------------------------------------------------------------- |
| PLA      | Medium      | Rigid             | Low (softens at 50–60°C) | Easy             | Prototypes, display models, artwork, educational parts                      |
| PETG     | Medium-High | Slightly flexible | Medium (75–80°C)         | Easy–Medium      | Functional parts, food-adjacent applications, water contact                 |
| ABS      | High        | Semi-rigid        | High (85–100°C)          | Hard             | Hot environments, automotive interiors, post-processing (acetone smoothing) |
| TPU      | Medium      | Very flexible     | Medium                   | Medium           | Gaskets, grips, phone cases, flexible joints                                |
| Nylon    | Very High   | Flexible          | High                     | Hard             | Mechanical parts, gears, load-bearing functional parts                      |
| ASA      | High        | Semi-rigid        | Very High (90°C+)        | Hard             | Outdoor use, UV-exposed parts                                               |

### What "Hard" to Print Actually Means

When a {{i:material}} is listed as "hard," that means it requires {{i:one}} or more of the following: a higher nozzle temperature, a heated enclosure to prevent warping, special {{i:bed}} adhesion (glue stick, hairspray, specialized plates), slower {{i:print}} speeds, or more careful tuning of retraction settings. Starting with a difficult {{i:material}} {{i:before}} {{i:you}} have PLA dialed in is a recipe for frustration and wasted {{i:filament}}.

**The practical rule:** use PLA until {{i:you}} have a {{i:specific}} reason not to. When {{i:you}} need better heat resistance, try PETG next. ABS and specialty materials come later, with appropriate safety infrastructure.

### PLA and Sustainability — A Realistic Picture

PLA is often marketed as "biodegradable" and "eco-friendly." These claims deserve some scrutiny. PLA _is_ bio-derived — made from fermented plant starch rather than petroleum — which reduces its carbon footprint somewhat compared to petroleum plastics. But PLA only biodegrades under very {{i:specific}} industrial composting conditions (temperatures above 58°C sustained for weeks). It does not break down in a home compost bin or a landfill.

The most sustainable approach to FDM {{i:printing}} is not any particular {{i:material}} — it's designing durable parts that don't need to be reprinted, {{i:using}} the minimum infill that meets your mechanical requirements, and avoiding {{i:test}} prints {{i:you}} don't need (which is exactly why this course emphasizes verification {{i:before}} {{i:printing}}).

---

## Step 4 — Estimating Print Cost Before You Print

### Always Estimate First

Sending a model to {{i:print}} without checking the cost is like placing a restaurant order without looking at the price. For short prints of small parts, the {{i:filament}} cost is trivial (often under $0.50). But for large, high-infill parts, it {{i:can}} be several dollars — and more importantly, it represents several hours of {{i:printer}} {{i:time}} that {{i:you}} {{i:can}}'t get back if the {{i:part}} turns out to need revision.

The estimate formula from Lesson 1 applies here:

```
mass (grams)  = (volume_mm³ ÷ 1000) × filament_density_g_per_cm³
cost ($)      = mass × (spool_price_$ ÷ spool_weight_g)
```

The preflight {{i:scripts}} below automate this calculation and require {{i:you}} to confirm {{i:before}} proceeding.

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

**{{i:Windows}} ({{hi:{{i:PowerShell}}}}{{i:PowerShell}}):**

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

Use this checklist {{i:before}} starting any {{i:print}}. It takes about 5 minutes and prevents the most {{i:common}} causes of {{i:print}} failure.

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

**{{i:Bed}} leveling** is the single most critical setting for successful prints. The {{i:first}} {{i:layer}} needs to be squished gently against the {{i:bed}} — close enough to bond, but not so close that {{i:filament}} {{i:can}}'t flow. A {{i:bed}} that's 0.1 mm too high or too low {{i:can}} cause every {{i:print}} to fail. Most modern printers have automatic {{i:bed}} leveling (ABL), but {{i:you}} should still understand how it works and check that it's running correctly.

**Clean {{i:build}} plate** prevents adhesion failures. Skin oils from touching the plate are invisible but dramatically reduce how well plastic sticks. An isopropyl alcohol (IPA) wipe {{i:before}} every {{i:print}} takes 30 seconds and prevents a {{i:common}} failure mode.

**Cold pull (nozzle clearing)** removes degraded {{i:filament}} from inside the nozzle. Heat the nozzle to {{i:print}} temperature, push some {{i:filament}} through, then let it cool to about 90°C and pull the {{i:filament}} out firmly. The end of the pulled {{i:filament}} should bring out any debris or degraded {{i:material}} from inside the hot end.

**Filament loaded correctly** means the extruder is feeding without clicking or skipping, the {{i:filament}} is straight in the Bowden tube (if present), and the purge line at the start of the {{i:print}} flows smoothly with no bubbles or gaps.

---

## Step 6 — Monitoring During Prints

### What to Watch For

Checking in periodically during a {{i:print}} takes only a few seconds {{i:each}} {{i:time}} and lets {{i:you}} catch problems early. A problem caught at {{i:layer}} 10 is a minor inconvenience. The same problem discovered at {{i:layer}} 100 means {{i:you}}'ve wasted 90 layers of {{i:material}} and {{i:print}} {{i:time}}.

**Spaghetti** — when the {{i:part}} lifts off the {{i:bed}} and the nozzle starts dragging {{i:filament}} through the air instead of depositing it in layers. The result looks like a pile of plastic spaghetti. This is the most {{i:common}} failure mode and the most important to catch early. If {{i:you}} see it, pause or cancel the {{i:print}} immediately.

**Layer shifts** — a horizontal displacement somewhere in the {{i:print}}, where {{i:part}} of the model is offset from the rest. This usually indicates a mechanical problem (belt tension, loose pulley, or a motor missing steps). Cancel the {{i:print}} and diagnose the cause {{i:before}} trying again.

**{{i:Nozzle}} clog** — the extruder starts making a clicking or ticking sound as the gear slips because {{i:material}} isn't flowing. Filament may start grinding. Pause the {{i:print}} and clear the clog {{i:before}} restarting.

**Stringing** — thin wisps of {{i:filament}} connecting different parts of the {{i:print}}. Usually a retraction or temperature setting issue rather than an emergency, but it may require post-processing cleanup.

**Smoke — immediate emergency.** Cut power. Do not attempt to continue or diagnose while the {{i:printer}} is running. Notify your instructor. Do not restart the {{i:printer}} until the cause has been fully identified and corrected.

---

## Step 7 — Safe Shutdown and Part Removal

### The Right Way to End a Print

A {{i:print}} ending doesn't mean the {{i:work}} is done. Follow these steps after every {{i:print}}:

1. **Wait for the nozzle to cool below 50°C** {{i:before}} reaching anywhere near the hot end. The nozzle {{i:can}} reach 200°C+ during {{i:printing}} and retains heat for several minutes after shutdown.

2. **Wait for the {{i:bed}} to cool below 30°C** {{i:before}} removing the {{i:part}}. Parts printed on a hot {{i:bed}} {{i:can}} warp slightly if removed while the {{i:bed}} is still warm. Many PEI-coated beds release parts naturally as they cool — {{i:you}} may not even need tools.

3. **Use a spatula or palette knife** to gently separate the {{i:part}} from the {{i:build}} plate. Never force parts off with your fingers — the edge of a {{i:part}} against a spring steel {{i:bed}} {{i:can}} cut skin. Apply the spatula at a low angle and use a gentle rocking motion.

4. **Store {{i:filament}} in a sealed bag with desiccant.** Filament absorbs moisture from the air (this is called hygroscopy), and moisture in {{i:filament}} causes bubbling, popping, and reduced mechanical properties during extrusion. This is especially important for Nylon and PETG. A small silica gel desiccant packet inside a ziplock bag is sufficient for short-term storage.

---

## Concept 2: {{i:Design}} for Printability and Safety

### Your {{i:Design}} Choices Affect Safety

The decisions {{i:you}} make in {{i:OpenSCAD}} directly affect how safe and reliable the {{i:printing}} process will be. Good {{i:design}} doesn't just mean a {{i:part}} that looks right — it means a {{i:part}} that prints reliably without requiring dangerous materials, excessive supports, or heroic {{i:printer}} tuning.

**Minimize overhangs.** {{i:Any}} {{i:geometry}} that extends more than about 45° from vertical needs supports — temporary scaffolding that the {{i:printer}} adds automatically. Supports increase {{i:print}} {{i:time}}, use more {{i:material}}, often leave rough marks where they're removed, and increase the risk of {{i:print}} failure due to tangled {{i:support}} {{i:material}}. Good {{i:design}} reorients parts or modifies {{i:geometry}} to eliminate or reduce overhangs.

**Maintain minimum wall thickness.** For a 0.4 mm nozzle, walls below 0.8 mm (two nozzle widths) may not {{i:print}} reliably. Walls below 1.2 mm (three nozzle widths) are marginal for any kind of structural use. Walls below about 0.8 mm may not appear in the sliced {{i:output}} at all — the slicer simply omits them as too small.

**Use the safest {{i:material}} that meets requirements.** If PLA is strong enough, use PLA. Don't introduce PETG, ABS, or specialty materials unless {{i:you}} have a {{i:specific}} reason and the appropriate safety infrastructure.

**Encode printability constraints in your {{i:code}}:**

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

**Exercise 5.1:** Run `3dm info` on your model from Lesson 3. Calculate the {{i:material}} cost in PLA and in PETG (density 1.27 g/cm³). If PLA spools cost $20/kg and PETG spools cost $25/kg, what is the cost {{i:difference}} for your {{i:part}}?

**Exercise 5.2:** Write a pre-flight {{i:script}} (bash or {{i:PowerShell}}) that builds your model, reports the estimated cost, and requires a `y` confirmation {{i:before}} proceeding.

**Exercise 5.3 (Advanced):** Modify the pre-flight {{i:script}} to accept a `--material` argument (options: `pla`, `petg`, `abs`, `tpu`) and calculate cost {{i:using}} the correct density for the selected {{i:material}}.

---

## Quiz — Lesson 5 (15 questions)

1. What are the five levels of the Hierarchy of Controls, from most to least effective?
2. Why is Elimination considered the most effective safety control?
3. Which {{i:filament}} requires a dedicated fume enclosure with HEPA + activated carbon filtration and is NOT recommended for open classrooms?
4. At what temperature should {{i:you}} wait {{i:before}} removing a {{i:print}} from the {{i:bed}}?
5. What should {{i:you}} do immediately if {{i:you}} see smoke coming from your 3D {{i:printer}}?
6. Give three reasons why PLA is considered the safest classroom {{i:filament}}.
7. What is the minimum reliable wall thickness for a 0.4 mm nozzle, and why does this minimum exist?
8. What is the purpose of storing {{i:filament}} with desiccant?
9. True or False: It is safe to leave a 3D {{i:printer}} completely unattended for hours once the {{i:first}} {{i:layer}} has printed successfully.
10. What is "spaghetti" in the context of a 3D {{i:printing}} failure, and what causes it?
11. What is thermal runaway protection, and why is it critical that it remain enabled?
12. What are the two types of airborne emissions from FDM {{i:printing}}, and which filaments produce the most hazardous levels of {{i:each}}?
13. Describe {{i:one}} engineering control and {{i:one}} administrative control {{i:you}} could implement in a classroom 3D {{i:printing}} lab.
14. Explain why minimizing overhangs in your {{i:design}} is both a safety consideration and a {{i:quality}} consideration.
15. A student wants to {{i:print}} a car dashboard mount in ABS because it will be in a hot car. The classroom has no fume enclosure. Using the Hierarchy of Controls, what recommendations would {{i:you}} make?

---

## Extension Problems (15)

1. Create a {{i:material}} selection flowchart that guides a user from mechanical requirements to the safest {{i:filament}} that meets them.
2. Conduct a ventilation assessment of your classroom or makerspace. Document air exchange methods, window locations, and any existing filtration.
3. Write a Standard Operating Procedure (SOP) for ABS {{i:printing}} that includes all required safety equipment and ventilation infrastructure.
4. {{i:Design}} and describe a "{{i:first}} {{i:layer}} {{i:test}} tile" — a 100 × 100 × 0.4 mm flat tile — and explain how {{i:you}}'d use it to verify {{i:bed}} leveling.
5. Build a {{i:parametric}} {{i:filament}} storage clip in {{i:OpenSCAD}}: a clip that holds the free end of a {{i:filament}} spool. {{hi:Parameters}}Parameters: {{i:filament}} diameter, clip width.
6. Research OSHA's published guidance on VOC exposure in 3D {{i:printing}} environments. Summarize the key recommendations.
7. Compare the Safety Data Sheets (SDS) for PLA and ABS {{i:filament}} from two manufacturers. Document differences in recommended exposure limits and PPE.
8. {{i:Design}} a simple {{i:printer}} enclosure in {{i:OpenSCAD}}: four walls, a front door opening, and a top panel with a circular vent hole. Document the {{i:parametric}} {{hi:Variables}}{{i:variables}}.
9. Create a safety poster covering the five most important 3D {{i:printing}} safety rules, organized {{i:using}} the Hierarchy of Controls framework.
10. Write a {{i:one}}-page risk assessment for a {{i:new}} FDM {{i:printer}} being added to a classroom.
11. {{i:Design}} and describe a {{i:parametric}} {{i:filament}} moisture indicator holder: a small box that holds a humidity indicator card inside a resealable {{i:filament}} storage bag.
12. Build a "{{i:print}} monitoring log" template: a paper form with columns for {{i:time}}, nozzle temperature, {{i:bed}} temperature, {{i:layer}} number, visual observations, and action taken.
13. Research the {{i:difference}} {{i:between}} particle emissions and VOC emissions from FDM {{i:printing}}. Which is considered more hazardous at typical classroom distances from the {{i:printer}}?
14. {{i:Design}} a {{i:parametric}} {{i:build}} plate corner protector: a small clip that attaches to the edge of a glass or spring steel {{i:build}} plate to protect it from spatula damage.
15. Write a hypothetical "near-miss incident report" for a fictional 3D {{i:printing}} incident {{i:using}} a standard workplace incident report format (date, location, description, contributing factors, corrective actions).

---

## References and Helpful Resources

- OSHA Hierarchy of Controls — [https://www.osha.gov/hierarchy-of-controls](https://www.osha.gov/hierarchy-of-controls) / NIOSH — [https://www.cdc.gov/niosh/topics/hierarchy/default.html](https://www.cdc.gov/niosh/topics/hierarchy/default.html)
- UL Research Institutes — 3D Printing Emissions Study — [https://www.ul.com/news/ul-research-institutes-releases-3d-{{i:printing}}-emissions-study](https://www.ul.com/news/ul-research-institutes-releases-3d-{{i:printing}}-emissions-study)
- NIOSH Science Blog — Health and Safety Considerations for 3D Printing — [https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-{{i:printing}}/](https://blogs.cdc.gov/niosh-science-blog/2020/05/14/3d-{{i:printing}}/)
- {{hi:PrusaSlicer}}PrusaSlicer Documentation — [https://docs.prusa3d.com/en/](https://docs.prusa3d.com/en/)
- All3DP Filament Types — [https://all3dp.com/1/3d-{{i:printer}}-{{i:filament}}-types-3d-{{i:printing}}-3d-{{i:filament}}/](https://all3dp.com/1/3d-{{i:printer}}-{{i:filament}}-types-3d-{{i:printing}}-3d-{{i:filament}}/)
- MatterHackers Filament Compare — [https://www.matterhackers.com/3d-{{i:printer}}-{{i:filament}}-compare](https://www.matterhackers.com/3d-{{i:printer}}-{{i:filament}}-compare)
- Prusa Research Materials Guide — [https://help.prusa3d.com/materials](https://help.prusa3d.com/materials)

### Supplemental Resources

- {{i:3DMake}} {{i:GitHub}} Repository — [https://github.com/tdeck/3dmake](https://github.com/tdeck/3dmake)
- {{i:OpenSCAD}} User Manual — [https://en.wikibooks.org/wiki/OpenSCAD_User_Manual](https://en.wikibooks.org/wiki/OpenSCAD_User_Manual)
- All other {{i:reference}} documents are embedded as appendices below — no separate {{i:files}} needed.

---

# Part 2: Reference Appendices

_All supporting documents for Lesson 5 are included below. You do not need to open any additional {{i:files}}._

---

## Appendix A: Safety Checklist for 3D Printing

_Complete this checklist {{i:before}} and after {{i:each}} {{i:printing}} session. Print it out and keep a {{i:copy}} at your {{i:printer}} station._

---

### Pre-Print Setup

**Work Area**

- [ ] Desk or table cleared of unnecessary items
- [ ] Tripping hazards removed from around the {{i:printer}}
- [ ] Adequate ventilation confirmed (window open, fan running, or fume enclosure active)
- [ ] Class ABC fire extinguisher within arm's reach
- [ ] Smoke detector mounted above {{i:printer}} is functional

**Printer Inspection**

- [ ] {{i:Nozzle}} is clean — no old {{i:filament}} residue baked on
- [ ] Build plate is level (re-level if the {{i:printer}} has been moved or bumped)
- [ ] Heated {{i:bed}} temperature sensor is attached and secure
- [ ] All cables are secure and none are frayed or cracked — especially the flexible {{i:bed}} cable bundle
- [ ] Thermal runaway protection is enabled (check firmware settings if unsure)

**Filament Preparation**

- [ ] Filament spool rotates freely on the holder — no binding or tangling
- [ ] Filament path is clear of obstructions from spool to extruder
- [ ] Extruder drive gear is clean — not clogged with ground plastic
- [ ] Filament is correctly loaded and primed (a few mm of {{i:filament}} extruded {{i:before}} starting)

**Environmental Conditions**

- [ ] Room temperature is adequate (18–25°C ideal — extreme cold slows {{i:bed}} heating; extreme heat {{i:can}} soften PLA)
- [ ] No direct drafts from windows or air conditioning blowing on the {{i:printer}} (drafts cause warping and {{i:layer}} splitting)
- [ ] Adequate lighting to clearly see the {{i:first}} {{i:layer}} as it prints

---

### During Print

**First Layer Monitoring (Do Not Leave)**

- [ ] Watch the {{i:first}} 2–3 layers without interruption
- [ ] {{i:Bed}} adhesion is correct — {{i:filament}} sticks flat, not lifting at corners or curling
- [ ] {{i:Nozzle}} temperature is stable at target value
- [ ] No unusual sounds (grinding, clicking, popping)

**Regular Checks (Every 15–30 Minutes)**

- [ ] Print is building correctly — no {{i:layer}} shifting, no spaghetti
- [ ] Filament is feeding smoothly from the spool
- [ ] No grinding or skipping sounds from the extruder
- [ ] No warping visible at {{i:part}} edges

**Temperature Stability**

- [ ] Heated {{i:bed}} maintains consistent temperature throughout
- [ ] {{i:Nozzle}} temperature does not fluctuate more than ±5°C
- [ ] No thermal runaway warnings on the {{i:printer}} display

---

### Stop the Print Immediately If

- [ ] The nozzle jams or extrudes unevenly
- [ ] Filament stops feeding entirely
- [ ] {{i:Any}} burning smell is detected
- [ ] Visible {{i:layer}} shifting occurs
- [ ] Grinding or skipping sounds from the extruder
- [ ] {{i:Any}} unusual chemical or burning odor
- [ ] Smoke appears — **cut power immediately**

---

### Post-Print

**Cool Down**

- [ ] Allow the heated {{i:bed}} to cool naturally for 10–15 minutes {{i:before}} attempting {{i:print}} removal
- [ ] Keep hands clear of the nozzle until it reads below 50°C
- [ ] Confirm the {{i:printer}} is idle and all temperatures are dropping {{i:before}} touching

**Print Removal**

- [ ] Use a proper spatula or scraper — not fingers or improvised tools
- [ ] Remove the {{i:print}} only when the {{i:bed}} has fully cooled (PLA releases easily from PEI beds when cool)
- [ ] Inspect the {{i:print}} for sharp edges, {{i:support}} stubs, or {{i:layer}} delamination
- [ ] Sand or {{i:file}} sharp edges if the {{i:part}} will be handled

**Equipment Cleaning**

- [ ] Wipe the nozzle with a brass wire brush when cooled to 50°C (never cold — residue must be slightly soft)
- [ ] Remove any plastic debris and failed {{i:print}} {{i:material}} from the {{i:build}} plate
- [ ] Check the extruder for embedded {{i:filament}} residue
- [ ] Clear any visible dust from the electronics area

**Workspace Cleanup**

- [ ] Return all tools to their proper storage location
- [ ] Dispose of {{i:support}} {{i:material}} and failed prints in a bin (not on the floor)
- [ ] Store {{i:filament}} in a sealed bag with desiccant
- [ ] Confirm the workspace is clear and safe for the next user

---

### Hazard Reference Summary

| Hazard                    | Temperature / Condition | Response                                 |
| ------------------------- | ----------------------- | ---------------------------------------- |
| Hot nozzle                | 190–260°C               | Do not touch; wait for < 50°C            |
| Hot {{i:bed}}                   | 50–110°C                | Do not touch; allow full cool-down       |
| Fumes (ABS/PETG)          | At operating temp       | Ventilate; use enclosure with filtration |
| Electrical (power supply) | 120V / 240V mains       | Never open while plugged in              |
| Tangled {{i:filament}}          | {{i:Any}}                     | Clear {{i:before}} {{i:printing}}; never force-pull  |

### Emergency Actions

- **Fire:** Unplug immediately. Use a dry chemical (Class ABC) extinguisher — NOT water on electrical fires. Evacuate and call emergency services.
- **Burns:** Rinse with cool (not cold) running water for 15+ minutes. Seek medical attention for any burn larger than a coin.
- **Fume inhalation:** Move to fresh air immediately. Seek medical attention if symptoms (headache, dizziness, nausea) persist.

_Last Reviewed:_ \_\_\_\_\_\_\_\_\_\_ _Reviewed By:_ \_\_\_\_\_\_\_\_\_\_

---

## Appendix B: Filament Comparison Table

_Quick {{i:reference}} for choosing the right {{i:filament}}. All temperature values are typical ranges — always check the label on your {{i:specific}} spool. The spool always wins over this table._

---

### Side-by-Side Comparison

| Property                       | PLA           | PETG                  | TPU (Flex)        | ABS                       |
| ------------------------------ | ------------- | --------------------- | ----------------- | ------------------------- |
| **Difficulty**                 | Easiest       | Moderate              | Hard              | Very Hard                 |
| **{{i:Nozzle}} temp**                | 190–220°C     | 230–250°C             | 220–240°C         | 230–250°C                 |
| **{{i:Bed}} temp**                   | 50–60°C       | 70–85°C               | 30–60°C           | 90–110°C                  |
| **Enclosure needed?**          | No            | No                    | No                | Yes                       |
| **Rigidity**                   | High          | Medium                | None — flexible   | High                      |
| **Impact resistance**          | Low (brittle) | Medium                | Very high         | Medium                    |
| **Heat resistance**            | Low (~60°C)   | Medium (~80°C)        | Medium            | High (~100°C)             |
| **Flexibility**                | None          | Slight                | Rubber-like       | None                      |
| **Moisture sensitivity**       | Low           | Medium                | High              | Medium                    |
| **Fume concern**               | Lowest        | Low                   | Moderate          | High                      |
| **{{i:Bed}} adhesion**               | Easy          | Use glue stick on PEI | Easy              | Requires enclosure + glue |
| **Print speed**                | Normal        | Normal                | Slow (20–30 mm/s) | Normal                    |
| **Stringing tendency**         | Low           | Medium–High           | High              | Low                       |
| **Approximate cost**           | $15–25/kg     | $15–30/kg             | $20–40/kg         | $15–25/kg                 |
| **Recommended for beginners?** | ✅ Yes        | After PLA             | After experience  | ❌ No                     |

---

### When to Use Each Material

**PLA — Use for:**

- Prototypes and {{i:test}} prints
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
- Food-contact applications (check your {{i:specific}} brand for food-safe certification)

**PETG — Avoid for:**

- Very fine surface detail (it strings more than PLA)
- Projects where {{i:you}} need the easiest possible {{i:first}}-{{i:time}} {{i:print}}

**TPU / Flexible — Use for:**

- Wearable objects (wristbands, phone cases, watch straps)
- Bumpers and shock absorbers
- Grips and handles
- Objects that must deform under pressure and return to shape

**TPU — Avoid for:**

- Fine surface detail
- Printers with Bowden extruders (the flexible {{i:filament}} buckles in the tube — direct drive only)
- Your {{i:first}} few prints while still learning

**ABS — Use for:**

- High-heat environments (car interiors, near motors)
- Parts requiring post-processing (ABS sands, bonds with acetone vapor, and paints easily)
- Professional or industrial contexts with proper dedicated ventilation

**ABS — Avoid for:**

- {{i:Any}} classroom without a dedicated sealed fume enclosure and active filtration
- Beginners
- {{i:Any}} {{i:print}} where warping at the edges would be a problem and {{i:you}} have no enclosure

---

### {{i:Slicer}} Profile Quick Reference

| Filament | PrusaSlicer Profile | Key Changes from PLA Default                        |
| -------- | ------------------- | --------------------------------------------------- |
| PLA      | Generic PLA         | Baseline — no changes needed                        |
| PETG     | Generic PETG        | Higher temps; slower cooling; glue stick on PEI {{i:bed}} |
| TPU      | Generic Flex        | Reduce speed to 20–30 mm/s; reduce retraction       |
| ABS      | Generic ABS         | Higher temps; disable cooling fan; use enclosure    |

---

### Filament Storage

All {{i:filament}} absorbs moisture from the air over {{i:time}}. Wet {{i:filament}} causes: popping or crackling sounds during {{i:printing}}, bubbles in extruded plastic, excessive stringing, and weak or brittle finished parts.

| Filament | Moisture Sensitivity | Storage Recommendation                                                      |
| -------- | -------------------- | --------------------------------------------------------------------------- |
| PLA      | Low                  | Sealed bag with desiccant when not in use                                   |
| PETG     | Medium               | Sealed bag with desiccant; dry {{i:before}} use if stored open for weeks          |
| TPU      | High                 | Always store sealed; dry in oven at 65°C for 4–6 hours if moisture-absorbed |
| ABS      | Medium               | Sealed bag with desiccant                                                   |

_Sources: All3DP Filament Types Guide; MatterHackers Filament Compare; Prusa Research Materials Guide_

---

## Appendix C: Material Properties Quick Reference

_Essential {{i:material}} data for FDM/FFF {{i:printing}}. Use alongside the Filament Comparison Table for {{i:material}} selection decisions._

---

### Properties at a Glance

| Property            | PLA        | PETG       | ABS           | TPU            |
| ------------------- | ---------- | ---------- | ------------- | -------------- |
| {{i:Nozzle}} temp (°C)    | 200–220    | 235–250    | 240–260       | 220–240        |
| {{i:Bed}} temp (°C)       | 20–60      | 70–90      | 100–110       | 20–60          |
| Strength            | Moderate   | High       | Very High     | Low (flexible) |
| Flexibility         | None       | Slight     | Slight        | High           |
| Ease of {{i:printing}}    | Very Easy  | Easy       | Hard          | Moderate       |
| Cost ($/kg)         | $15–25     | $20–30     | $18–28        | $30–50         |
| Print speed         | 40–60 mm/s | 30–50 mm/s | 20–40 mm/s    | 10–30 mm/s     |
| {{i:Bed}} adhesion        | Easy       | Moderate   | Requires prep | Easy           |
| UV resistance       | Low        | Moderate   | High          | Low            |
| Chemical resistance | No         | Moderate   | Yes           | No             |

---

### Heat Resistance After Printing

This is {{i:one}} of the most {{i:common}} reasons to choose a {{i:material}} other than PLA.

| Material | Safe to use up to | Softens at | Notes                                                     |
| -------- | :---------------: | :--------: | --------------------------------------------------------- |
| PLA      |     ~50–60°C      |  ~60–70°C  | Not suitable for car interiors or items near heat sources |
| PETG     |     ~80–100°C     | ~100–110°C | Handles warm environments well                            |
| ABS      |     ~90–110°C     | ~110–120°C | Good heat resistance; most demanding to {{i:print}}             |
| TPU      |     ~60–80°C      | ~80–100°C  | Limited heat resistance despite flex durability           |

---

### Chemical Resistance

| Material |  Water   | Alcohol  |  Acetone  |   Oils   |  Acids   |
| -------- | :------: | :------: | :-------: | :------: | :------: |
| PLA      |   Low    |   Low    | Dissolves |   Low    |   Low    |
| PETG     |   High   | Moderate | Moderate  |   High   | Moderate |
| ABS      |   High   | Moderate | Dissolves |   High   | Moderate |
| TPU      | Moderate |   Low    |    Low    | Moderate |   Low    |

**Acetone note:** Can be used to smooth ABS surfaces (vapor or liquid application). Also dissolves PLA — keep acetone away from PLA prints and {{i:filament}} spools.

---

### Strength After Printing — Curing Time

Freshly printed parts are not at full strength.

| Time After Printing | Approximate Strength     |
| ------------------- | ------------------------ |
| 0–24 hours          | 70–80% of final strength |
| 24–48 hours         | 90–95% of final strength |
| 48–72 hours         | ~99% of final strength   |
| 7+ days             | Maximum strength         |

Do not stress-{{i:test}} functional parts immediately after {{i:printing}}. Allow at least 24 hours {{i:before}} load testing.

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
| First {{i:time}} {{i:printing}}?    | PLA                                      |
| Need durability?        | PETG or ABS                              |
| Need flexibility?       | TPU                                      |
| Need high strength?     | ABS or PETG                              |
| Quick {{i:test}} / prototype? | PLA                                      |
| Outdoor use?            | PETG or ABS                              |
| Food contact?           | Food-grade certified PETG (verify brand) |
| Heat resistant?         | ABS                                      |
| Easiest possible {{i:print}}? | PLA                                      |

---

## Appendix D: Printer Maintenance Log

_Copy this log and keep a printed or digital {{i:copy}} with your {{i:printer}}. Fill in the Printer Information section {{i:first}}, then log every maintenance event and issue as it occurs. A complete log is your best diagnostic tool when problems arise._

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
| Manufacturer {{i:support}} contact |       |

---

### Maintenance Schedule

**Before {{i:each}} use (Daily)**

- [ ] Visual inspection — no visible damage, cables intact
- [ ] Clean nozzle tip if residue is present
- [ ] Verify {{i:build}} plate is level (re-level if {{i:printer}} was moved)
- [ ] Confirm {{i:filament}} spool rotates freely with no tangles

**Weekly**

- [ ] Clean extruder drive gear (compressed air or brush out ground plastic)
- [ ] Inspect and wipe Z-axis rails and lead screw
- [ ] Check all cable connections at the control board
- [ ] Test emergency stop / power cut

**Monthly**

- [ ] Full {{i:build}} plate leveling procedure (manual or automatic)
- [ ] Clean interior of {{i:print}} chamber
- [ ] Inspect heating elements and thermistor connections
- [ ] Run a temperature calibration {{i:test}} {{i:print}}

**Quarterly (every 3 months)**

- [ ] Replace nozzle if inner bore shows wear or repeat clogging
- [ ] Full mechanical inspection — belt tension, eccentric nuts, frame screws
- [ ] Check firmware for updates
- [ ] Run a full calibration {{i:test}} {{i:print}} and document results

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

Record your tested settings for {{i:each}} {{i:material}} on this {{i:specific}} {{i:printer}}. Published temperature ranges are starting points — your {{i:printer}} may {{i:run}} hotter or cooler than its display indicates.

| Filament | Brand | {{i:Nozzle}} Temp | {{i:Bed}} Temp | Speed | Success Rate | Notes |
| -------- | ----- | :---------: | :------: | :---: | :----------: | ----- |
| PLA      |       |             |          |       |              |       |
| PETG     |       |             |          |       |              |       |
| ABS      |       |             |          |       |              |       |
| TPU      |       |             |          |       |              |       |
| Other    |       |             |          |       |              |       |

---

### Troubleshooting Quick Reference

**{{i:Nozzle}} Clog**

- First response: Cold pull (heat to {{i:printing}} temp, push {{i:filament}} through manually, cool to 90°C, pull sharply)
- Second response: Acupuncture needle or nozzle cleaning {{i:filament}}
- Last resort: Replace nozzle

**{{i:Bed}} Adhesion Problems**

- Check: {{i:Bed}} level, nozzle {{i:height}} from {{i:bed}}, {{i:bed}} surface condition (clean? worn?)
- Fix by {{i:material}}: PLA → clean PEI with IPA; PETG → apply glue stick; ABS → glue stick + enclosure

**Layer Shifting**

- {{i:Common}} causes: Belt too loose, motor current too low, {{i:print}} speed too high, X/Y axis obstruction
- Check belt tension {{i:first}} — it's the most {{i:common}} cause

**Extrusion Issues (Under-extrusion)**

- {{i:Common}} causes: Partial clog, worn drive gear, incorrect extruder steps/mm, wet {{i:filament}}
- Run a flow rate {{i:test}}: extrude 100 mm and measure actual {{i:output}}

---

### Monthly Performance Summary

| Month | Print Success Rate | {{i:Common}} Issues | Overall Assessment |
| ----- | :----------------: | ------------- | ------------------ |
|       |                    |               |                    |
|       |                    |               |                    |
|       |                    |               |                    |
|       |                    |               |                    |

_Last log entry:_ \_\_\_\_\_\_\_\_\_\_ _Logged by:_ \_\_\_\_\_\_\_\_\_\_
