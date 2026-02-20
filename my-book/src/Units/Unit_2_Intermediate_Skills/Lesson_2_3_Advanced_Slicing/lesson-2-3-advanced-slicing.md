# Lesson 2.3 — Advanced Slicing 

**Accessibility:** When including slicer previews, add short alt-text descriptions and provide a text-only walkthrough of the layer-preview steps for screen-reader users.

Estimated time: 60–90 minutes (includes slicing and comparison)

Learning objectives:
- Determine when to use supports and which support style is best
- Choose print orientation for strength and surface quality
- Use PrusaSlicer preview to find potential printing problems

Materials:
- PrusaSlicer, a short test STL (T-bracket) or your own exported STL

Step-by-step student tasks:
1. Obtain or export a T-shaped bracket STL from OpenSCAD.
2. Import it into PrusaSlicer and slice it in three orientations: flat, upright, and on its side.
3. For each orientation, record estimated print time and support volume (use the slice preview).
4. Inspect the layer preview for floating geometry, thin walls, or problematic bridges; note any issues.
5. Decide the best orientation for strength and minimal support; write a 1–2 sentence justification.

Checkpoint:
- Submit the three slice screenshots or exported G-code filenames and your orientation choice justification.

Quiz — Lesson 2.3 (5 items):
1. Short answer: What is the 45-degree rule? Why does it matter?
2. Multiple choice: Which support style tends to use less material and be easier to remove? (A) Standard supports (B) Tree supports (C) Dense supports) — Answer: B
3. Practical: Describe one situation where reorienting a model reduces required supports.
4. Short answer: Why are FDM parts anisotropic (different strength directions)?
5. Practical: In one sentence, justify the best orientation for a hook that must support weight.

Extension problems (5):
1. Experiment with tree supports and standard supports for the same model and document removal difficulty and surface quality.
2. Slice a model with and without support enforcers (paint-on supports) and report differences.
3. Create a small bracket that benefits from being split into two printed parts to reduce supports; document the assembly method.
4. Try variable layer height (if your slicer supports it) and report on print time vs. surface finish.
5. Write a short guide for a blind or low-vision peer describing how to inspect the slicer preview (what to narrate, where to look).

### Common Features That Require Supports

| Feature | Usually Needs Supports? | Notes |
|---------|------------------------|-------|
| Overhang >45° from vertical | Yes | Standard rule |
| Bridge (horizontal gap) | Sometimes | Short bridges (<20 mm) often print fine |
| Curved ceiling | Sometimes | Depends on span |
| Vertical hole sidewall | No | Prints fine as long as the circle is in a vertical orientation |
| Horizontal hole ceiling | Yes | The top arc of the hole sags |

---

## Print Orientation Matters — A Lot

The same object printed in different orientations will:
- Require different amounts of support material
- Have different strength in different directions
- Have different surface finish quality

**FDM parts are anisotropic** — they are stronger parallel to the print bed than perpendicular to it. Layer adhesion (the bond between layers stacked on top of each other) is the weakest link.

### Example: Printing a Hook

A hook that will hold weight should have its load-bearing axis **aligned with the print bed layers**, not perpendicular to them.

```
WRONG orientation:       RIGHT orientation:
Layers are horizontal.   Layers run along the length.
Hook breaks at layer     Load is distributed across
boundary under load.     many layers.

[====]                   [|||||||||||||]
Load pulls at layers ↓   Load is parallel to layers
```

### Activity: Compare Three Orientations

For this activity, your instructor will provide a simple hook or bracket `.stl` file (or you can design one).

Slice it in **three different orientations** and record:

| Orientation | Print Time | Support Volume | Where Would It Be Weakest? |
|-------------|-----------|----------------|--------------------------|
| Flat (lying down) | | | |
| Standing upright | | | |
| On its side | | | |

Discuss with your class: which orientation produces the best print for the intended use?

---

## Support Settings in PrusaSlicer

### Turning Supports On

In the right panel:
- **None** — no supports generated
- **Support on build plate only** — supports grow from the floor; good for most cases
- **Everywhere** — supports grow from any surface; needed for complex floating geometries

### Support Interface Layers

Found in **Print Settings > Support material**:

- **Interface layers** add a finer-resolution top layer on supports, making the support surface smoother and easier to remove

### Tree Supports (PrusaSlicer Advanced Mode)

Tree supports "grow" from the build plate like tree branches, touching only the minimum necessary surfaces. They use less material and are often easier to remove than standard supports.

To enable: Switch to **Expert mode** (top right) → Print Settings → Support material → Support style: **Tree (organic)**

---

## Diagnosing Problems in Layer Preview

After clicking **Slice now**, always use the layer preview before printing:

1. Drag the **vertical slider** on the right to scroll through layers
2. Look for:
   - **Floating layers** (disconnected from the rest of the model) — a slicing error
   - **Very thin walls** — may not print correctly
   - **Supports too dense** — wastes material; consider reorienting
   - **First layer coverage** — the first layer should be wide and flat

### Color Key in Preview

| Color | What It Represents |
|-------|-------------------|
| Yellow/orange | Perimeters (outer walls) |
| Red | Infill |
| Green | Bridges |
| Light blue | Support material |

---

## Practice Activity

1. In OpenSCAD, design a simple **T-shaped bracket** (a horizontal bar with a vertical post in the center). Export it as STL.
2. Import it into PrusaSlicer.
3. Slice it three ways:
   - Lying flat (T-bar on the bed)
   - Standing upright (post pointing up)
   - Standing on the crossbar end
4. For each orientation, record print time, support material, and note any potential weak points.
5. Choose the best orientation and explain your reasoning in 2–3 sentences.

---

## Video Resources

1. **PrusaSlicer Support Enforcers** (YouTube, 11 min)  
   *Search YouTube for "PrusaSlicer Support Enforcers" — this video shows how to manually add supports to specific areas.*  
   *Also referenced at: [https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer](https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer)*

2. **PrusaSlicer 2.3 — Paint on Supports** (YouTube, 11 min)  
   *Search YouTube for "PrusaSlicer 2.3 paint on supports" — shows how to draw supports only where you need them.*

3. **PrusaSlicer: In-Depth Tutorial (36 min)** — see Lesson 0.6 references  
   *Watch the sections on supports, orientation, and layer preview.*

4. **Prusa Knowledge Base: Support Material**  
   [https://help.prusa3d.com/category/prusaslicer_204](https://help.prusa3d.com/category/prusaslicer_204)  
   *Official Prusa documentation on support types, interface layers, and tree supports.*

5. **3D Printing Design Tips — Markforged** (orientation for strength)  
   [https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips](https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips)  
   *Covers print orientation for strength, the anisotropy of FDM parts, and when to split a model.*

6. **Introduction to FDM 3D Printing — Hubs** (section on supports and warping)  
   [https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/](https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/)  
   *Explains why supports are needed and the design strategies that reduce their use.*

---

## References

Hubs (Protolabs Network). (2023). *What is FDM (fused deposition modeling) 3D printing?* https://www.hubs.com/knowledge-base/what-is-fdm-3d-printing/

Markforged. (2021). *3D printing design tips*. https://markforged.com/resources/learn/design-for-additive-manufacturing-plastics-composites/3d-printing-strategies-for-composites/composites-3d-printing-design-tips

Prusa Research. (2023). *PrusaSlicer knowledge base*. https://help.prusa3d.com/category/prusaslicer_204

UAS@UCLA. (2024). *Prusa slicer*. https://uas.seas.ucla.edu/wiki/books/3d-printing/page/prusa-slicer


