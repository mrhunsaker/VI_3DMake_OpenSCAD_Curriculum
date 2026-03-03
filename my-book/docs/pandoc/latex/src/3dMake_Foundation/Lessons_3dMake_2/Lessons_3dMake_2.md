[Header 3 ("lesson-2--geometric-primitives-and-constructive-solid-geometry", [], []) [Str "Lesson 2 — Geometric Primitives and Constructive Solid Geometry"], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Use all core OpenSCAD primitives: ", Code ("", [], []) "cube", Str ", ", Code ("", [], []) "sphere", Str ", ", Code ("", [], []) "cylinder", Str ", ", Code ("", [], []) "polygon"]], [Plain [Str "Combine primitives with ", Code ("", [], []) "union()", Str ", ", Code ("", [], []) "difference()", Str ", and ", Code ("", [], []) "intersection()"]], [Plain [Str "Use ", Code ("", [], []) "color()", Str " to visualize multi-part assemblies"]], [Plain [Str "Apply the 0.001 mm rule correctly — and understand ", Emph [Str "why"], Str " it exists"]], [Plain [Str "Create 2D profiles with ", Code ("", [], []) "polygon()", Str " and extrude them into 3D geometry"]]], HorizontalRule, Header 4 ("step-1--the-core-3d-primitives", ["unnumbered", "unlisted"], []) [Str "Step 1 — The Core 3D Primitives"], CodeBlock ("", ["openscad"], []) "// cube: [width, depth, height], center optional
cube([30, 20, 10]);
cube([30, 20, 10], center=true);  // centered on origin

// sphere: r=radius; $fn controls smoothness (faces)
translate([40, 0, 0])
  sphere(r=10, $fn=32);   // 32-sided — smooth enough for most prints

// cylinder: h=height, r=radius OR r1/r2 for tapered cones
translate([70, 0, 0])
  cylinder(h=20, r=8, $fn=32);

// Cone (tapered cylinder)
translate([100, 0, 0])
  cylinder(h=20, r1=10, r2=3, $fn=32);  // r1=base radius, r2=top radius

// Flat-top cylinder (r2=0 gives a spike)
translate([130, 0, 0])
  cylinder(h=20, r1=8, r2=0, $fn=32);
", HorizontalRule, Header 4 ("step-2--constructive-solid-geometry-csg", ["unnumbered", "unlisted"], []) [Str "Step 2 — Constructive Solid Geometry (CSG)"], Para [Str "CSG builds complex shapes by combining simpler ones."], CodeBlock ("", ["openscad"], []) "// union() — combine shapes (they merge into one solid)
union() {
  cube([20, 20, 5]);
  translate([10, 10, 5])
    sphere(r=10, $fn=32);
}

// difference() — subtract one shape from another
// The FIRST child is the base; subsequent children are removed FROM it
translate([40, 0, 0])
difference() {
  cube([20, 20, 20]);
  // Move the cylinder DOWN 0.001 to avoid co-planar face problems (see Step 4)
  translate([10, 10, -0.001])
    cylinder(h=20.002, r=5, $fn=32);
}

// intersection() — keep only the volume that is inside BOTH shapes
translate([80, 0, 0])
intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=12, $fn=32);
}
", HorizontalRule, Header 4 ("step-3--polygon-for-custom-2d-profiles", ["unnumbered", "unlisted"], []) [Str "Step 3 — ", Code ("", [], []) "polygon()", Str " for Custom 2D Profiles"], Para [Code ("", [], []) "polygon()", Str " is the most powerful 2D primitive. It creates an arbitrary closed shape from a list of (x, y) points. You then extrude it into 3D with ", Code ("", [], []) "linear_extrude()", Str "."], Para [Str "Points are listed in ", Strong [Str "counterclockwise"], Str " order around the perimeter."], CodeBlock ("", ["openscad"], []) "// L-shaped bracket profile
bracket_profile = [
  [0,  0],   // bottom-left
  [40, 0],   // bottom-right
  [40, 8],   // step
  [8,  8],   // step inward
  [8,  30],  // up the left arm
  [0,  30]   // back to top-left
];

// Extrude 5mm deep to make a 3D bracket
linear_extrude(height=5)
  polygon(bracket_profile);
", Para [Str "// Simple canister: cylinder body with a sphere on top", SoftBreak, Str "difference() {", SoftBreak, Str "union() {", SoftBreak, Str "cylinder(h=40, r=15, $fn=64);", SoftBreak, Str "translate(", Str "[", Str "0, 0, 40", Str "]", Str ") sphere(r=15, $fn=64);", SoftBreak, Str "}", SoftBreak, Str "// Hollow out the inside (0.001 offset prevents co-planar faces)", SoftBreak, Str "translate(", Str "[", Str "0, 0, 3", Str "]", Str ")", SoftBreak, Str "cylinder(h=38 + 0.001, r=13, $fn=64);", SoftBreak, Str "}"], CodeBlock ("", [""], []) "
Save as `src/main.scad` and run `3dm build`. Preview with F5 for fast render; use F6 for final export-quality render.

### 2. Understand the 0.001 Offset Rule

When two surfaces are exactly co-planar, OpenSCAD may produce rendering artifacts or non-manifold faces. Adding a tiny `0.001 mm` overlap ensures the Boolean operation cuts completely through:

```openscad
// WRONG - co-planar bottom faces may cause artifacts
difference() {
  cube([20, 20, 10]);
  cube([18, 18, 10]);  // same height - ambiguous
}

// CORRECT - 0.001 ensures clean cut
difference() {
  cube([20, 20, 10]);
  translate([1, 1, -0.001])
    cube([18, 18, 10 + 0.002]);  // 0.001 below and above
}
", Para [Str "This is a widely documented community convention in OpenSCAD for avoiding non-manifold geometry.", Note [Para [Str "OpenSCAD User Manual — Primitive Solids and Boolean Operations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids", ""), Str ". The 0.001 offset rule is a community convention documented in the OpenSCAD forums to prevent co-planar face artifacts in Boolean operations."]]], Header 5 ("3-apply-modifier-characters-for-debugging", ["unnumbered", "unlisted"], []) [Str "3. Apply Modifier Characters for Debugging"], CodeBlock ("", ["openscad"], []) "// # = highlight in pink (still rendered)
# cube([10, 10, 10]);

// % = ghost/transparent (shown but not part of model)
% cube([20, 20, 20]);

// ! = render only this object (ignore everything else)
! sphere(r=10);

// * = disable this object entirely
* cube([5, 5, 5]);
", Para [Str "Use ", Code ("", [], []) "#", Str " and ", Code ("", [], []) "%", Str " while debugging to visualize which geometry is being subtracted or added. Remove all modifier characters before final export. See ", Note [Para [Str "OpenSCAD User Manual — Modifier Characters - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Modifier_Characters", "")]], Str " for more on modifier characters."], Header 5 ("4-use-rotate_extrude-and-linear_extrude-", ["unnumbered", "unlisted"], []) [Str "4. Use rotate_extrude and linear_extrude ", Note [Para [Str "OpenSCAD User Manual — Transformations and Extrusions - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Using_the_2D_Subsystem", "")]]], CodeBlock ("", ["openscad"], []) "// linear_extrude: 2D profile extruded along Z axis
linear_extrude(height=20, twist=0, scale=1) {
  circle(r=10, $fn=32);
}

// rotate_extrude: 2D profile rotated around Z axis (creates vase/ring shapes)
rotate_extrude(angle=360, $fn=64) {
  translate([15, 0, 0]) circle(r=5, $fn=32);
}
", Header 5 ("5-use-intersection-and-hull-", ["unnumbered", "unlisted"], []) [Str "5. Use intersection and hull ", Note [Para [Str "OpenSCAD User Manual — CSG Modelling - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/CSG_Modelling", "")]]], CodeBlock ("", ["openscad"], []) "// intersection: keeps only the volume common to both shapes
intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=13, $fn=64);
}

// hull: convex envelope of all child geometry
hull() {
  translate([0, 0, 0]) sphere(r=5);
  translate([30, 0, 0]) sphere(r=5);
  translate([15, 20, 0]) sphere(r=5);
}
", Header 5 ("checkpoint", ["unnumbered", "unlisted"], []) [Str "Checkpoint"], BulletList [[Plain [Str "F5 renders quickly in preview mode (not manifold-safe); F6 performs full CGAL render. Always use F6 / ", Code ("", [], []) "3dm build", Str " before slicing."]], [Plain [Str "If the slicer reports non-manifold faces, check for missing ", Code ("", [], []) "0.001", Str " offsets on co-planar surfaces."]]], Header 4 ("advanced-csg-patterns", ["unnumbered", "unlisted"], []) [Str "Advanced CSG Patterns"], Header 5 ("combining-operations-for-complex-parts", ["unnumbered", "unlisted"], []) [Str "Combining Operations for Complex Parts"], Para [Str "Real parts require nested CSG trees. Here is a parametric mounting bracket that combines all four operations:"], CodeBlock ("", ["openscad"], []) "// Parametric Mounting Bracket
width = 40;
height = 30;
depth = 8;
hole_r = 4;
slot_w = 6;
slot_h = 15;
wall = 3;

module bracket() {
  difference() {
    // Main body
    cube([width, depth, height]);

    // Two mounting holes
    translate([10, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);
    translate([30, -0.001, 10])
      rotate([-90, 0, 0]) cylinder(r=hole_r, h=depth + 0.002, $fn=32);

    // Lightening slot
    translate([width/2 - slot_w/2, -0.001, height - slot_h - wall])
      cube([slot_w, depth + 0.002, slot_h]);
  }
}

bracket();
", Header 5 ("polyhedron-for-irregular-shapes", ["unnumbered", "unlisted"], []) [Str "Polyhedron for Irregular Shapes"], CodeBlock ("", ["openscad"], []) "// Wedge using polyhedron
polyhedron(
  points = [
    [0, 0, 0], [20, 0, 0], [20, 15, 0], [0, 15, 0],  // bottom
    [0, 0, 10], [20, 0, 10]                             // top edge
  ],
  faces = [
    [0, 1, 2, 3],  // bottom
    [0, 4, 5, 1],  // front
    [1, 5, 2],     // right
    [0, 3, 4],     // left
    [3, 2, 5, 4],  // back/top
  ]
);
", Header 4 ("quiz--lesson-3dmake2-15-questions", ["unnumbered", "unlisted"], []) [Str "Quiz — Lesson 3dMake.2 (15 questions)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "What are the six OpenSCAD primitive shapes?"]], [Plain [Str "What does ", Code ("", [], []) "difference()", Str " do in CSG?"]], [Plain [Str "Why do you add ", Code ("", [], []) "0.001", Str " mm to the cutting geometry in a ", Code ("", [], []) "difference()", Str " operation?"]], [Plain [Str "What does the ", Code ("", [], []) "#", Str " modifier character do, and when would you use it?"]], [Plain [Str "What is the difference between ", Code ("", [], []) "F5", Str " and ", Code ("", [], []) "F6", Str " in OpenSCAD?"]], [Plain [Str "What does ", Code ("", [], []) "hull()", Str " produce, and how is it different from ", Code ("", [], []) "union()", Str "?"]], [Plain [Str "What does the ", Code ("", [], []) "%", Str " modifier do to a shape in OpenSCAD?"]], [Plain [Str "Describe what ", Code ("", [], []) "rotate_extrude()", Str " does and give one example of a shape it could produce."]], [Plain [Str "What does ", Code ("", [], []) "intersection()", Str " return when applied to two overlapping cubes?"]], [Plain [Str "True or False: the ", Code ("", [], []) "*", Str " modifier renders a shape as a ghost for debugging."]], [Plain [Str "Describe what ", Code ("", [], []) "linear_extrude()", Str " does and explain the ", Code ("", [], []) "twist", Str " parameter."]], [Plain [Str "What is a non-manifold face, and what common OpenSCAD mistake produces it?"]], [Plain [Str "If you want to subtract a cylinder from a cube and the cylinder is exactly as tall as the cube, what do you need to add to ensure a clean cut?"]], [Plain [Str "Explain when you would use ", Code ("", [], []) "polyhedron()", Str " instead of simpler primitives."]], [Plain [Str "What is the difference between ", Code ("", [], []) "union()", Str " combining two overlapping shapes and simply rendering two separate shapes without a CSG operation?"]]], Header 4 ("extension-problems-15", ["unnumbered", "unlisted"], []) [Str "Extension Problems (15)"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Build a hollow sphere (a shell with ", Code ("", [], []) "1.5 mm", Str " walls) using ", Code ("", [], []) "difference()", Str " and the ", Code ("", [], []) "0.001", Str " rule.", Note [Para [Str "OpenSCAD User Manual — Primitive Solids and Boolean Operations - ", Link ("", [], []) [Str "https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids"] ("https://en.wikibooks.org/wiki/OpenSCAD_User_Manual/Primitive_Solids", ""), Str ". The 0.001 offset rule is a community convention documented in the OpenSCAD forums to prevent co-planar face artifacts in Boolean operations."]]]], [Plain [Str "Create a vase shape using ", Code ("", [], []) "rotate_extrude()", Str " and a custom 2D profile."]], [Plain [Str "Design a bracket or clip using nested ", Code ("", [], []) "difference()", Str " and ", Code ("", [], []) "union()", Str " operations. Document each CSG step with inline comments."]], [Plain [Str "Use ", Code ("", [], []) "hull()", Str " to create a smooth transition between two differently-sized shapes."]], [Plain [Str "Experiment with the ", Code ("", [], []) "%", Str " modifier: build a model where a ghost reference shape helps you position a cut accurately. Screenshot the debugging view and explain it."]], [Plain [Str "Create a parametric name badge: a flat base with your name text embossed using ", Code ("", [], []) "linear_extrude()", Str " and ", Code ("", [], []) "difference()", Str "."]], [Plain [Str "Build a compound hinge using two cylinders, a ", Code ("", [], []) "hull()", Str ", and alignment holes."]], [Plain [Str "Design a 10-sided (decagonal) prism using ", Code ("", [], []) "cylinder()", Str " with ", Code ("", [], []) "$fn=10", Str " and a ", Code ("", [], []) "difference()", Str " to cut a through-hole."]], [Plain [Str "Create a test print that exercises all four CSG operations in a single part (document what each operation does in a header comment)."]], [Plain [Str "Using only ", Code ("", [], []) "cube()", Str ", ", Code ("", [], []) "sphere()", Str ", ", Code ("", [], []) "difference()", Str ", and ", Code ("", [], []) "hull()", Str ", build a simple car silhouette (top-down view)."]], [Plain [Str "Create a lattice structure using a ", Code ("", [], []) "for", Str " loop combined with ", Code ("", [], []) "difference()", Str " to cut a grid of holes in a cube. Document the relationship between hole spacing and wall thickness."]], [Plain [Str "Build a parametric ring using ", Code ("", [], []) "rotate_extrude()", Str " and make the cross-section shape (circle, square, or triangle) a parameter."]], [Plain [Str "Research and document the ", Code ("", [], []) "surface()", Str " primitive: what input does it accept, what shape does it produce, and when would you use it instead of ", Code ("", [], []) "polyhedron()", Str "? Include a working example."]], [Plain [Str "Design a tolerance test set: 5 pairs of pegs and holes with clearances from 0.0 mm to 0.4 mm in 0.1 mm increments. Print one set and document which clearance allows free movement."]], [Plain [Str "Write a short guide explaining the four modifier characters (", Code ("", [], []) "#", Str ", ", Code ("", [], []) "!", Str ", ", Code ("", [], []) "%", Str ", ", Code ("", [], []) "*", Str ") with one example use case for each and a note on when to remove them before final export."]]], Header 4 ("references-and-helpful-resources", ["unnumbered", "unlisted"], []) [Str "References and Helpful Resources"], Header 5 ("supplemental-resources", ["unnumbered", "unlisted"], []) [Str "Supplemental Resources"], BulletList [[Plain [Link ("", [], []) [Str "Programming with OpenSCAD EPUB Textbook"] ("docs%5Cpandoc%5Clatex%5Csrc%5Cassets%5CProgramming_with_OpenSCAD.epub", ""), Str " — Chapters on CSG and primitives"]], [Plain [Link ("", [], []) [Str "CodeSolutions Repository"] ("https://github.com/ProgrammingWithOpenSCAD/CodeSolutions", ""), Str " — Worked examples for CSG, hull, and extrusions"]], [Plain [Link ("", [], []) [Str "OpenSCAD Quick Reference"] ("https://programmingwithopenscad.github.io/quick-reference.html", ""), Str " — All primitive and CSG syntax at a glance"]], [Plain [Link ("", [], []) [Str "3DMake GitHub Repository"] ("https://github.com/tdeck/3dmake", ""), Str " — Build workflow reference"]]]]