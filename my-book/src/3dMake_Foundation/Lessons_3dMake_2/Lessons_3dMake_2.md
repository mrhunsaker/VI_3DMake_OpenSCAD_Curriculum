# Lesson 2: Geometric Primitives and Constructive Solid Geometry 

Estimated time: 60 minutes

**Learning Objectives**
- Use OpenSCAD primitives (`cube()`, `sphere()`, `cylinder()`) and transforms (`translate()`, `rotate()`, `scale()`)[^2]
- Apply CSG operators (`union`, `difference`, `intersection`) safely and diagnose common numerical issues[^3]
- Use quick diagnostic renders and validate geometry in a slicer[^1]

**Materials**
- 3dMake project scaffold with `src/main.scad`
- Example primitive snippets (provided in assets)

Step-by-step Tasks
1. Open `src/main.scad`; identify and run simple examples using `cube()`, `sphere()`, and `cylinder()`[^2].
2. Create three short examples demonstrating `union()`, `difference()`, and `intersection()` and render with reduced `$fn`. Review CSG best practices[^3].
3. Reproduce a failing `difference()` case and apply the 0.001 offset strategy to the subtractor; re-render and confirm fix. This technique addresses common manifold issues[^4].
4. Build an STL with `3dm build` and open it in your slicer to check for thin walls or islands[^1].
5. Document any fixes in the project README and commit the working `main.scad` and STL.

Checkpoints
- After task 3 the problematic boolean should render without non-manifold warnings[^4].

Quick Quiz (5)
1. Name three primitive functions in OpenSCAD[^2].
2. What does `difference()` accomplish[^3]?
3. Why might two coincident faces cause a render failure[^4]?
4. What is the 0.001 rule and why is it useful[^4]?
5. How does lowering `$fn` help during debugging[^3]?

Extension Problems (5)
1. Create a small assembly using `union()` of three primitives and export the STL. Reference best practices from OpenSCAD documentation[^2].
2. Intentionally create a failing boolean and fix it using offsets; explain your approach. Document the manifold issues encountered[^4].
3. Write a short test script that generates three variants with varying `$fn` values and compare render times. Consider using 3dMake workflows[^1].
4. Use `3dm info` (if available) to generate a report on your model and document any recommendations[^1].
5. Explore using a library module (e.g., a fillet helper) to fix a sharp corner and note the difference in final STL[^3].


## **Works cited**

[^1]: Deck, T. (2025). *3DMake: A command-line tool for 3D printing workflows*. GitHub. https://github.com/tdeck/3dmake

[^2]: Gohde, J., & Kintel, M. (2021). *Programming with OpenSCAD: A beginner's guide to coding 3D-printable objects*. No Starch Press.

[^3]: Gonzalez Avila, J. F., Pietrzak, T., & Casiez, G. (2024). *Understanding the challenges of OpenSCAD users for 3D printing*. Proceedings of the ACM Symposium on User Interface Software and Technology.

[^4]: Google. (2025). *Vertex AI Gemini 3 Pro Preview: Getting started with generative AI*. https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/get-started-with-gemini-3  
