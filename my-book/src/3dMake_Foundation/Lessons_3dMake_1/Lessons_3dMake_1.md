# Lesson 1: Environmental Configuration and the Developer Workflow 

Estimated time: 60–90 minutes

## **Learning Objectives**
- Install and verify `3dm`[^1], `openscad`[^2], and a slicer are discoverable in the terminal
- Initialize a 3dMake project and understand the project scaffold (`src/`, `build/`, `3dmake.toml`)
- Edit `src/main.scad` using OpenSCAD's parametric design capabilities[^3], run `3dm build`, and inspect the generated `build/main.stl`

## **Materials**
- Terminal with 3dMake installed
- Editor (VS Code or Notepad)
- Example scaffold or classroom repository

---

## Step-by-step Tasks
1. Run `./3dm setup` or follow instructor's installation notes; confirm tools with `which 3dm` and `which openscad`. Verify your 3dMake installation is properly configured[^1].
2. Create a project scaffold with `3dm new` and open `src/main.scad` using `3dm edit-model`. For a comprehensive introduction to the workflow, consult the OpenSCAD documentation[^2].
3. Add three top-level parameters (e.g., `width`, `height`, `thickness`) and a minimal model (`cube([width, height, thickness]);`). This demonstrates the parametric design philosophy central to OpenSCAD[^3].
4. Run `3dm build` and verify `build/main.stl` exists. Compare this build process to standard OpenSCAD workflows[^4].
5. Open the STL in your slicer to check for thin walls or non-manifold geometry[^8]; if issues appear, iterate on `main.scad` and rebuild.

### Checkpoints
- After step 2 you can locate `3dmake.toml` and the `build/` directory. Ensure your project scaffold matches the expected structure described in the 3dMake repository[^1].
- After step 4 the `build/` folder contains a valid `main.stl`. Verify the geometry using your slicer's validation tools[^5].

---

## Quick Quiz (5)
1. What command initializes a 3dMake project[^1]?
2. What folder holds generated STLs?
3. How do you open the main model editor from the CLI?
4. Why is it useful to run `3dm build` frequently during development[^7]?
5. Give one reason to prefer an external editor over editing inline.

## Extension Problems (5)
1. Add a README entry explaining your top-level parameters and expected units. Reference best practices from the OpenSCAD documentation[^2].
2. Create a parameter variant by changing `width` by 20% and build both variants; compare dimensions with calipers. This demonstrates the power of parametric design discussed in programming resources[^3].
3. Script a `3dm` command sequence that automates new → edit → build for the scaffold. Review the 3dMake test suite for inspiration[^7].
4. Intentionally create a thin-wall error and document the steps you took to find and fix it. Consult slicing guides[^8] for identifying common geometry issues.
5. Prepare a short instructor sign-off checklist describing safety checks before printing.

## **Works cited**

[^1]: tdeck/3dmake: Non-visual 3D design and 3D printing tool - GitHub, accessed February 18, 2026, https://github.com/tdeck/3dmake

[^2]: Books - OpenSCAD, accessed February 18, 2026, https://openscad.org/documentation-books.html

[^3]: Programming with OpenSCAD, accessed February 18, 2026, https://programmingwithopenscad.github.io/

[^4]: OpenSCAD Review - Worth learning? - CadHub, accessed February 18, 2026, https://learn.cadhub.xyz/blog/openscad-review/

[^7]: 3dmake/e2e_test.py at main - GitHub, accessed February 18, 2026, https://github.com/tdeck/3dmake/blob/main/e2e_test.py

[^8]: OpenSCAD Prompt Creation - DocsBot AI, accessed February 18, 2026, https://docsbot.ai/prompts/technical/openscad-prompt-creation  

