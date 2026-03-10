[Header 2 ("3dmake-foundation--final-exam", [], []) [Str "3dMake Foundation — Final Exam"], Para [Str "Name: ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " ", Str " Date:"], Para [Strong [Str "Total Points: 100 (4 points per problem)"]], Para [Strong [Str "Instructions:"]], BulletList [[Plain [Str "Answer all 25 questions"]], [Plain [Str "For code errors, identify the specific problem and explain why it's wrong"]], [Plain [Str "For behavioral questions, show your reasoning"]], [Plain [Str "For design problems, explain your approach and why it solves the stated challenge"]], [Plain [Str "You may reference the OpenSCAD documentation and appendices"]], [Plain [Str "All work must be your own"]]], HorizontalRule, Header 3 ("section-1-error-detection--code-analysis-problems-110", ["unnumbered", "unlisted"], []) [Str "Section 1: Error Detection & Code Analysis (Problems 1–10)"], Para [Str "For each code block, identify any errors. If there is an error, explain what's wrong and how to fix it. If the code is correct, state \"No error\" and explain what the code does."], HorizontalRule, Header 4 ("problem-1-primitive-definition-error", ["unnumbered", "unlisted"], []) [Str "Problem 1: Primitive Definition Error"], CodeBlock ("", ["openscad"], []) "cube([10, 10, 10], center=true);
sphere(r=5, $fn=16);
cylinder(h=20, r=8);
", Para [Str "Is there an error in this code? If yes, identify it. If no, explain what this code renders."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-2-transform-syntax-error", ["unnumbered", "unlisted"], []) [Str "Problem 2: Transform Syntax Error"], CodeBlock ("", ["openscad"], []) "translate([5, 5, 0])
  rotate([0, 45, 0])
    cube([10, 10, 10], center=true);
", Para [Str "Does this code have a syntax error? Explain what this code does."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-3-csg-operation-error", ["unnumbered", "unlisted"], []) [Str "Problem 3: CSG Operation Error"], CodeBlock ("", ["openscad"], []) "cube([20, 20, 20], center=true);
difference() {
  sphere(r=12);
  cylinder(h=30, r=5, center=true);
}
", Para [Str "What is wrong with this CSG operation? Explain the fix."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-4-module-definition-error", ["unnumbered", "unlisted"], []) [Str "Problem 4: Module Definition Error"], CodeBlock ("", ["openscad"], []) "module bracket(width, height, depth) {
  cube([width, height, depth], center=true);
  translate([width/2 + 2, 0, 0])
    cube([4, height, depth/2], center=true);
}
bracket(20, 15, 10);
", Para [Str "Is there an error in this module definition or call? Why or why not?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-5-parameter--variable-scoping-error", ["unnumbered", "unlisted"], []) [Str "Problem 5: Parameter & Variable Scoping Error"], CodeBlock ("", ["openscad"], []) "wallthickness = 2;
module hollowcube(size) {
  difference() {
    cube([size, size, size], center=true);
    cube([size - wallthickness, size - wallthickness, size - wallthickness], center=true);
  }
}
hollowcube(20);
", Para [Str "Will this code work correctly? If not, what is the problem and how would you fix it?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-6-loop--iteration-error", ["unnumbered", "unlisted"], []) [Str "Problem 6: Loop & Iteration Error"], CodeBlock ("", ["openscad"], []) "for (i = [0:5:20]) {
  translate([i, 0, 0])
    cube([4, 4, 4]);
}
", Para [Str "Will this code produce 5 cubes? Show the positions and explain why or why not."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-7-center-parameter-misunderstanding", ["unnumbered", "unlisted"], []) [Str "Problem 7: Center Parameter Misunderstanding"], CodeBlock ("", ["openscad"], []) "cube([10, 10, 20], center=false);
sphere(r=5);
", Para [Str "What is the relationship between these two shapes? Where would the sphere appear relative to the cube?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-8-intersection-error", ["unnumbered", "unlisted"], []) [Str "Problem 8: Intersection Error"], CodeBlock ("", ["openscad"], []) "intersection() {
  cube([20, 20, 20], center=true);
  sphere(r=8, $fn=32);
}
", Para [Str "Is there an error? What will this code render?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-9-nested-transform-error", ["unnumbered", "unlisted"], []) [Str "Problem 9: Nested Transform Error"], CodeBlock ("", ["openscad"], []) "translate([10, 0, 0])
  rotate([0, 0, 45])
    translate([5, 0, 0])
      cube([5, 5, 5], center=true);
", Para [Str "Are the transforms applied in the correct order? Trace the final position of the cube."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-10-resolution-parameter-error", ["unnumbered", "unlisted"], []) [Str "Problem 10: Resolution Parameter Error"], CodeBlock ("", ["openscad"], []) "sphere(r=10, $fn=4);
cylinder(h=20, r=8, $fn=3);
cube([10, 10, 10]);
", Para [Str "Identify the problem(s) with resolution in this code. What will happen when rendered?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 3 ("section-2-code-behavior--theory-problems-1117", ["unnumbered", "unlisted"], []) [Str "Section 2: Code Behavior & Theory (Problems 11–17)"], Para [Str "For each question, show your reasoning. You may draw diagrams if helpful."], HorizontalRule, Header 4 ("problem-11-vertex-coordinates", ["unnumbered", "unlisted"], []) [Str "Problem 11: Vertex Coordinates"], Para [Str "A cube is defined as ", Code ("", [], []) "cube([10, 10, 20], center=false)", Str "."], Para [Strong [Str "a)"], Str " List the XYZ coordinates of all 8 vertices."], Para [Strong [Str "Answer:"]], BulletList [[Plain [Str "Vertex 1:"]], [Plain [Str "Vertex 2:"]], [Plain [Str "Vertex 3:"]], [Plain [Str "Vertex 4:"]], [Plain [Str "Vertex 5:"]], [Plain [Str "Vertex 6:"]], [Plain [Str "Vertex 7:"]], [Plain [Str "Vertex 8:"]]], Para [Strong [Str "b)"], Str " Now define the SAME cube with ", Code ("", [], []) "center=true", Str ". List the NEW coordinates of all 8 vertices."], Para [Strong [Str "Answer:"]], BulletList [[Plain [Str "Vertex 1:"]], [Plain [Str "Vertex 2:"]], [Plain [Str "Vertex 3:"]], [Plain [Str "Vertex 4:"]], [Plain [Str "Vertex 5:"]], [Plain [Str "Vertex 6:"]], [Plain [Str "Vertex 7:"]], [Plain [Str "Vertex 8:"]]], HorizontalRule, Header 4 ("problem-12-sphere-geometry", ["unnumbered", "unlisted"], []) [Str "Problem 12: Sphere Geometry"], Para [Str "Explain the difference between ", Code ("", [], []) "sphere(r=10, $fn=8)", Str " and ", Code ("", [], []) "sphere(r=10, $fn=128)", Str "."], Para [Str "Which would you use for a prototype and which for final printing? Why?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-13-transform-order", ["unnumbered", "unlisted"], []) [Str "Problem 13: Transform Order"], Para [Str "Given this code:"], CodeBlock ("", ["openscad"], []) "translate([10, 0, 0])
  rotate([0, 0, 45])
    cube([5, 5, 5], center=true);
", Para [Str "Does the order matter? What if you swap translate and rotate? Show both final positions."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-14-boolean-operation-behavior", ["unnumbered", "unlisted"], []) [Str "Problem 14: Boolean Operation Behavior"], Para [Str "You have a solid cube and you want to create a hole through it. Which CSG operation would you use: ", Code ("", [], []) "union()", Str ", ", Code ("", [], []) "difference()", Str ", or ", Code ("", [], []) "intersection()", Str "?"], Para [Str "Explain your choice and write pseudocode showing how you'd accomplish this."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-15-parametric-design-advantage", ["unnumbered", "unlisted"], []) [Str "Problem 15: Parametric Design Advantage"], Para [Str "Compare these two approaches:"], Para [Strong [Str "Approach A:"], Str " Hard-coded cube with fixed dimensions"], CodeBlock ("", ["openscad"], []) "cube([10, 10, 20]);
", Para [Strong [Str "Approach B:"], Str " Parametric cube"], CodeBlock ("", ["openscad"], []) "module parametricbox(width, height, depth) {
  cube([width, height, depth], center=true);
}
parametricbox(10, 10, 20);
", Para [Str "Why is Approach B better for design iteration? Give an example of how you'd use it."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-16-scale-transform-behavior", ["unnumbered", "unlisted"], []) [Str "Problem 16: Scale Transform Behavior"], Para [Str "If you apply ", Code ("", [], []) "scale([2, 1, 0.5])", Str " to a ", Code ("", [], []) "cube([10, 10, 10], center=true)", Str ", what are the NEW dimensions of the cube?"], Para [Strong [Str "Answer — New dimensions:"]], Para [Str "Show your calculation:"], HorizontalRule, Header 4 ("problem-17-library-organization", ["unnumbered", "unlisted"], []) [Str "Problem 17: Library Organization"], Para [Str "You've created three useful modules:"], BulletList [[Plain [Code ("", [], []) "bracket(width, height, depth)"]], [Plain [Code ("", [], []) "hollowcube(size, wallthickness)"]], [Plain [Code ("", [], []) "connectorpin(diameter, height)"]]], Para [Str "How would you organize these into a reusable library? What file structure would you create and why?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 3 ("section-3-design--problem-solving-problems-1825", ["unnumbered", "unlisted"], []) [Str "Section 3: Design & Problem-Solving (Problems 18–25)"], Para [Str "These problems test your ability to design solutions, debug real-world issues, and think creatively."], HorizontalRule, Header 4 ("problem-18-tolerance-design-challenge", ["unnumbered", "unlisted"], []) [Str "Problem 18: Tolerance Design Challenge"], Para [Str "You're designing a snap-fit connector. The male part has a thickness of 2mm. The female slot needs to accommodate this part with enough flexibility to snap but not fall out."], Para [Str "Should the slot be:"], BulletList [[Plain [Str "a) Exactly 2mm wide"]], [Plain [Str "b) 2.1mm wide"]], [Plain [Str "c) 1.9mm wide"]], [Plain [Str "d) 2.5mm wide"]]], Para [Str "Explain your choice and the design thinking behind it."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-19-design-iteration-problem", ["unnumbered", "unlisted"], []) [Str "Problem 19: Design Iteration Problem"], Para [Str "You print a keycap with ", Code ("", [], []) "keysize=12", Str " and the text embossing is too shallow to feel. Your code uses:"], CodeBlock ("", ["openscad"], []) "linear_extrude(height=1)
  text(\"A\", size=8);
", Para [Str "What parameter(s) would you adjust to make the embossing deeper? Show your new code."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-20-error-diagnosis", ["unnumbered", "unlisted"], []) [Str "Problem 20: Error Diagnosis"], Para [Str "Your 3dMake build fails with this error: \"Geometry is non-manifold.\" You have this code:"], CodeBlock ("", ["openscad"], []) "difference() {
  cube([20, 20, 20], center=true);
  cylinder(h=30, r=4, center=true);
}
", Para [Str "Why might this fail? What's the common fix for non-manifold geometry?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-21-multi-part-assembly", ["unnumbered", "unlisted"], []) [Str "Problem 21: Multi-Part Assembly"], Para [Str "You're designing a two-part box (lid + base). The base has dimensions ", Str "[", Str "50, 30, 20", Str "]", Str ". The lid should sit on top of the base."], Para [Str "Write parametric modules for both parts and show how you'd position them together. Include appropriate positioning logic."], Para [Strong [Str "Answer:"]], CodeBlock ("", ["openscad"], []) "module base(length, width, height) {
  // Your code here
}

module lid(length, width, height) {
  // Your code here
}

// Positioning code here:
", HorizontalRule, Header 4 ("problem-22-optimization-challenge", ["unnumbered", "unlisted"], []) [Str "Problem 22: Optimization Challenge"], Para [Str "You have a design that takes 5 minutes to render. You notice you have:"], CodeBlock ("", ["openscad"], []) "sphere(r=10, $fn=256);
cylinder(h=20, r=8, $fn=256);
cube([20, 20, 20]);
", Para [Str "Which parameter(s) would you reduce to speed up rendering while maintaining acceptable quality for a prototype? Explain your choices."], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-23-real-world-constraint-problem", ["unnumbered", "unlisted"], []) [Str "Problem 23: Real-World Constraint Problem"], Para [Str "A stakeholder requests a custom handle for a tool. They specify:"], BulletList [[Plain [Str "Must fit a hand (approximately 80mm long)"]], [Plain [Str "Must accommodate fingers 60mm long inside"]], [Plain [Str "Wall thickness must be at least 3mm for durability"]], [Plain [Str "Should be ergonomic (slightly curved)"]]], Para [Str "Sketch or describe a parametric design for this handle. What parameters would you expose to allow customization?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 4 ("problem-24-code-reusability-challenge", ["unnumbered", "unlisted"], []) [Str "Problem 24: Code Reusability Challenge"], Para [Str "You've created a single keycap module. Now you need to create a keyboard with 5 keys arranged in a row, spaced 15mm apart."], Para [Str "Write code using a loop that creates 5 keycaps with letters A–E, properly spaced."], BlockQuote [Para [Strong [Str "Hint:"], Str " In OpenSCAD, strings are indexed like lists. ", Code ("", [], []) "\"ABCDE\"[0]", Str " returns ", Code ("", [], []) "\"A\"", Str ", ", Code ("", [], []) "\"ABCDE\"[1]", Str " returns ", Code ("", [], []) "\"B\"", Str ", and so on. The ", Code ("", [], []) "len()", Str " function returns the number of characters in a string."]], Para [Strong [Str "Answer:"]], CodeBlock ("", ["openscad"], []) "module keycap(letter, keysize=10) {
  // Keycap code here (you can assume this exists)
}

// Your loop code here:
", HorizontalRule, Header 4 ("problem-25-design-thinking--iteration", ["unnumbered", "unlisted"], []) [Str "Problem 25: Design Thinking & Iteration"], Para [Str "You've printed Iteration 1 of a product and measured the results. The wall thickness is 3mm but feels too fragile. In Iteration 2, you increased it to 5mm, and now it feels too rigid and won't flex as intended."], Para [Str "For Iteration 3, what thickness would you try and why? How would you make this decision more scientific/data-driven?"], Para [Strong [Str "Answer:"]], HorizontalRule, Header 3 ("bonus-challenge-optional-5-points", ["unnumbered", "unlisted"], []) [Str "Bonus Challenge (Optional, +5 points)"], Para [Str "Design a parametric model for a custom assistive technology device (e.g., a tactile measuring tool, a custom gripper, an adapted eating utensil, etc.)."], BulletList [[Plain [Str "Identify the user's specific need"]], [Plain [Str "Specify the key dimensions and parameters"]], [Plain [Str "Write at least one module with realistic dimensions"]], [Plain [Str "Explain how the design would be tested and iterated"]]], Para [Strong [Str "Answer:"]], CodeBlock ("", ["openscad"], []) "// Your design here:
", Para [Strong [Str "User Need:"]], Para [Strong [Str "Parameters:"]], Para [Strong [Str "Testing Plan:"]], HorizontalRule, Header 3 ("scoring-rubric", ["unnumbered", "unlisted"], []) [Str "Scoring Rubric"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.06976744186046512)), (AlignDefault, (ColWidth 0.9302325581395349))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Points"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Criteria"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "4"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Correct answer with clear, complete explanation; demonstrates deep understanding"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "3"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Mostly correct answer; minor gaps in explanation or reasoning"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "2"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Partially correct; shows some understanding but has significant gaps"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "1"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Minimal effort; shows limited understanding"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "0"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "No answer or completely incorrect"]]]])] (TableFoot ("", [], []) []), Para [Strong [Str "Total Possible: 100 + 5 bonus = 105 points"]], HorizontalRule, Header 3 ("references-you-may-use", ["unnumbered", "unlisted"], []) [Str "References You May Use"], BulletList [[Plain [Link ("", [], []) [Str "3dMake Quick Reference"] ("docs/pandoc/epub/src/3dMake_Foundation/3dMake_Quick_Reference.md#3dmake_foundation-3dmake_quick_reference", "")]], [Plain [Link ("", [], []) [Str "OpenSCAD Cheat Sheet"] ("docs/pandoc/epub/src/3dMake_Foundation/Lessons_3dMake_2/openscad-cheat-sheet.md#3dmake_foundation_lessons_3dmake_2-openscad-cheat-sheet", "")]], [Plain [Link ("", [], []) [Str "Appendix A: Comprehensive Slicing Guide"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Appendix_A_Comprehensive_Slicing_Guide.md", "")]], [Plain [Link ("", [], []) [Str "Appendix C: Tolerance Testing & QA Matrix"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Appendix_C_Tolerance_QA.md", "")]], [Plain [Link ("", [], []) [Str "Appendix D: PowerShell Integration"] ("https://github.com/mrhunsaker/VI_3DMake_OpenSCAD_Curriculum/3dMake_Foundation/Appendix_D_PowerShell_Integration.md", "")]]], HorizontalRule, Para [Emph [Str "End of Final Exam"]], Para [Strong [Str "Submission Instructions:"]], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Answer all 25 questions completely"]], [Plain [Str "Show your work for calculations and reasoning"]], [Plain [Str "Include code samples where requested"]], [Plain [Str "Submit as a PDF with your name and date"]], [Plain [Str "Scoring will be based on correctness, clarity, and depth of understanding"]]], Para [Emph [Str "Good luck!"]], HorizontalRule, HorizontalRule, HorizontalRule, Header 2 ("instructor-appendix", ["unnumbered", "unlisted"], []) [Str "INSTRUCTOR APPENDIX"], Header 4 ("not-for-student-distribution", ["unnumbered", "unlisted"], []) [Str "Not for student distribution"], HorizontalRule, Header 3 ("exam-administration-notes", ["unnumbered", "unlisted"], []) [Str "Exam Administration Notes"], Header 4 ("sequencing--problem-20", ["unnumbered", "unlisted"], []) [Str "Sequencing — Problem 20"], Para [Str "Problem 20 tests non-manifold geometry diagnosis, which is formally introduced in ", Strong [Str "Lesson 10"], Str "."], BulletList [[Plain [Strong [Str "If administered before Lesson 10 is complete:"], Str " Problem 20 is not counted in the passing threshold for Lessons 1–9. Consider adding a notice directing students to skip and return to it after Lesson 10."]], [Plain [Strong [Str "If administered after all 10 lessons:"], Str " No changes needed — the problem is fair game."]]], HorizontalRule, Header 3 ("answer-keys--rubrics", ["unnumbered", "unlisted"], []) [Str "Answer Keys & Rubrics"], Header 4 ("problem-20--non-manifold-geometry-extended-model-answer", ["unnumbered", "unlisted"], []) [Str "Problem 20 — Non-Manifold Geometry (Extended Model Answer)"], Para [Str "The exam version tests the core concept with a simple case. The extended variant below can be used as an enrichment rubric or for a more advanced cohort. It contains ", Strong [Str "three non-manifold issues:"]], CodeBlock ("", ["openscad"], []) "// PROBLEM CODE — find and fix all issues
difference() {
  cube([40, 40, 25]);
  translate([10, 10, 0])        // NON-MANIFOLD: co-planar bottom face
    cylinder(r=8, h=25, $fn=24);
  translate([20, 20, 25])       // NON-MANIFOLD: co-planar top face
    cylinder(r=5, h=10, $fn=24);
}

// NON-MANIFOLD: these two cubes share a face (just touching, not overlapping)
translate([40, 0, 0])  cube([15, 40, 25]);
translate([55, 0, 0])  cube([15, 40, 25]);
", OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Strong [Str "Co-planar bottom face"], Str " — the first cylinder's base is flush with the cube's base (", Code ("", [], []) "z=0", Str ")."]], [Plain [Strong [Str "Co-planar top face"], Str " — the second cylinder starts exactly at the cube's top (", Code ("", [], []) "z=25", Str ")."]], [Plain [Strong [Str "Touching faces"], Str " — the two side cubes share an exact face (just touching, not overlapping)."]]], Para [Strong [Str "Corrected version:"]], CodeBlock ("", ["openscad"], []) "difference() {
  cube([40, 40, 25]);

  // FIX 1: extend cylinder 0.001 below base AND above top
  translate([10, 10, -0.001])
    cylinder(r=8, h=25.002, $fn=24);

  // FIX 2: extend the top-entry cylinder 0.001 into the solid
  translate([20, 20, 25 - 9.999])
    cylinder(r=5, h=10.001, $fn=24);
}

// FIX 3: overlap the two touching cubes by 0.001 and use explicit union()
union() {
  translate([40, 0, 0])  cube([15.001, 40, 25]);
  translate([55, 0, 0])  cube([15, 40, 25]);
}
", Para [Strong [Str "Extended rubric (10 points):"]], BulletList [[Plain [Str "Identifies all 3 issues: 3 pts"]], [Plain [Str "Fixes issue 1 (co-planar bottom) correctly: 2 pts"]], [Plain [Str "Fixes issue 2 (co-planar top) correctly: 2 pts"]], [Plain [Str "Fixes issue 3 (touching faces) correctly: 2 pts"]], [Plain [Str "Model builds cleanly with no CGAL warnings: 1 pt"]]], HorizontalRule, Header 4 ("problem-24--keycap-loop-model-answer", ["unnumbered", "unlisted"], []) [Str "Problem 24 — Keycap Loop (Model Answer)"], CodeBlock ("", ["openscad"], []) "letters  = \"ABCDE\";
keysize  = 10;
key_gap  = 15;

for (i = [0 : len(letters) - 1]) {
  translate([i * (keysize + key_gap), 0, 0])
    keycap(letters[i], keysize);
}
", Para [Strong [Str "Expected output:"], Str " 5 keycaps labeled A, B, C, D, E, evenly spaced in a row."], Para [Strong [Str "Rubric (4 points):"]], BulletList [[Plain [Str "Correct ", Code ("", [], []) "for", Str " with range syntax: 1 pt"]], [Plain [Str "Correct string indexing ", Code ("", [], []) "letters[i]", Str ": 1 pt"]], [Plain [Str "Correct ", Code ("", [], []) "translate()", Str " to space keys apart: 1 pt"]], [Plain [Str "All 5 keycaps render without errors: 1 pt"]]], HorizontalRule, Header 3 ("extension-projects-optional--post-exam", ["unnumbered", "unlisted"], []) [Str "Extension Projects (Optional / Post-Exam)"], Para [Str "These projects are not part of the graded exam. Assign as enrichment after students complete all 10 lessons."], HorizontalRule, Header 4 ("extension-a--recursive-fractal-geometry", ["unnumbered", "unlisted"], []) [Str "Extension A — Recursive Fractal Geometry"], Para [Str "Recommended after Lesson 3. Demonstrates recursive OpenSCAD for visual and mathematical interest."], BlockQuote [Para [Strong [Str "Warning:"], Str " Level 4+ will take minutes to render — stay at Level ≤ 3."]], CodeBlock ("", ["openscad"], []) "module menger(size=27, level=2) {
  if (level == 0) {
    cube(size, center=true);
  } else {
    s3 = size / 3;
    difference() {
      cube(size, center=true);
      for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
        if ((x==0 ? 1 : 0) + (y==0 ? 1 : 0) + (z==0 ? 1 : 0) >= 2) {
          translate([x*s3, y*s3, z*s3])
            cube(s3 + 0.002, center=true);
        }
      }
    }
    for (x=[-1,0,1]) for (y=[-1,0,1]) for (z=[-1,0,1]) {
      if (!((x==0?1:0)+(y==0?1:0)+(z==0?1:0) >= 2)) {
        translate([x*s3, y*s3, z*s3])
          menger(s3, level-1);
      }
    }
  }
}

menger(size=27, level=2);  // change level to 0, 1, or 2
", HorizontalRule, Header 4 ("extension-b--generative-pattern-arrays", ["unnumbered", "unlisted"], []) [Str "Extension B — Generative Pattern Arrays"], Para [Str "Demonstrates list comprehensions and math functions for artistic/functional array generation."], CodeBlock ("", ["openscad"], []) "plate_w = 120;
plate_d = 80;
plate_h = 3;

hole_d    = 4;
grid_s    = 8;
wave_amp  = 3;
wave_freq = 0.1;

module perforated_panel() {
  difference() {
    cube([plate_w, plate_d, plate_h]);
    cols = floor(plate_w / grid_s);
    rows = floor(plate_d / grid_s);
    for (cx = [1 : cols - 1]) {
      for (ry = [1 : rows - 1]) {
        x = cx * grid_s;
        y = ry * grid_s;
        wave_val = sin(x * wave_freq * 360) * sin(y * wave_freq * 360);
        d = hole_d + wave_amp * wave_val;
        if (d > 0.5) {
          translate([x, y, -0.001])
            cylinder(d=d, h=plate_h + 0.002, $fn=16);
        }
      }
    }
  }
}

perforated_panel();
", HorizontalRule, Header 4 ("extension-c--multi-platform-build-pipeline", ["unnumbered", "unlisted"], []) [Str "Extension C — Multi-Platform Build Pipeline"], Para [Str "Full build pipeline scripts for all three shell environments."], Header 5 ("makefile-linuxmacos", ["unnumbered", "unlisted"], []) [Str "Makefile (Linux/macOS)"], CodeBlock ("", ["makefile"], []) ".PHONY: all build clean variants archive test

SRC     := src/main.scad
OUTPUT  := build/main.stl
WIDTHS  := 20 30 40 50 80

all: build test archive

build: $(OUTPUT)

$(OUTPUT): $(SRC) | build/
	openscad -o $@ $<
	3dm info

build/:
	mkdir -p build build/variants build/logs

clean:
	rm -rf build/

variants: build/
	@for w in $(WIDTHS); do \\
	  echo \"Building width=$$w...\"; \\
	  openscad -D \"width=$$w\" -o \"build/variants/main_w$$w.stl\" $(SRC); \\
	done

archive: build/
	$(eval TS := $(shell date +%Y%m%d_%H%M%S))
	mkdir -p \"archives/$(TS)\"
	cp $(OUTPUT) \"archives/$(TS)/\"
	cp $(SRC)    \"archives/$(TS)/\"
	3dm info > \"archives/$(TS)/BUILD_INFO.txt\"

test: build/
	@for w in 10 30 80; do \\
	  openscad -D \"width=$$w\" -o \"/tmp/test_w$$w.stl\" $(SRC) && \\
	  echo \"  width=$$w: OK\" || echo \"  width=$$w: FAILED\"; \\
	done
", Header 5 ("powershell-windows", ["unnumbered", "unlisted"], []) [Str "PowerShell (Windows)"], CodeBlock ("", ["powershell"], []) "param($Width = 30)

$src    = \"src\\main.scad\"
$output = \"build\\main.stl\"
$widths = @(20, 30, 40, 50, 80)

task init {
    New-Item -Force -ItemType Directory -Path \"build\",\"build\\variants\",\"build\\logs\" | Out-Null
}

task build init, {
    exec { openscad -D \"width=$Width\" -o $output $src }
    exec { 3dm info }
}

task clean {
    Remove-Item -Recurse -Force \"build\" -ErrorAction SilentlyContinue
}

task variants init, {
    foreach ($w in $widths) {
        exec { openscad -D \"width=$w\" -o \"build\\variants\\main_w$w.stl\" $src }
    }
}

task archive build, {
    $ts  = Get-Date -Format \"yyyyMMdd_HHmmss\"
    $dir = \"archives\\$ts\"
    New-Item -Force -ItemType Directory -Path $dir | Out-Null
    Copy-Item $output $dir
    Copy-Item $src    $dir
    & 3dm info | Out-File \"$dir\\BUILD_INFO.txt\" -Encoding UTF8
}

task test init, {
    foreach ($w in @(10, 30, 80)) {
        try {
            exec { openscad -D \"width=$w\" -o \"build\\test_w$w.stl\" $src }
            Write-Host \"  width=$w: OK\"
        } catch { Write-Warning \"  width=$w: FAILED\" }
    }
}

task all build, test, archive
", Header 5 ("cmd-batch-windows-legacy", ["unnumbered", "unlisted"], []) [Str "CMD Batch (Windows Legacy)"], CodeBlock ("", ["cmd"], []) "@echo off
SET ACTION=%1
IF \"%ACTION%\"==\"\" SET ACTION=all

IF \"%ACTION%\"==\"build\"    GOTO :BUILD
IF \"%ACTION%\"==\"clean\"    GOTO :CLEAN
IF \"%ACTION%\"==\"variants\" GOTO :VARIANTS
IF \"%ACTION%\"==\"archive\"  GOTO :ARCHIVE
IF \"%ACTION%\"==\"all\"      GOTO :ALL

:ALL
CALL :BUILD_STEP
IF %ERRORLEVEL% NEQ 0 EXIT /b 1
CALL :VARIANTS_STEP
CALL :ARCHIVE_STEP
GOTO :EOF

:BUILD_STEP
mkdir build 2>nul
openscad -o build\\main.stl src\\main.scad
IF %ERRORLEVEL% NEQ 0 (echo [BUILD] FAILED & EXIT /b 1)
3dm info
EXIT /b 0

:CLEAN
rmdir /s /q build 2>nul
GOTO :EOF

:VARIANTS_STEP
mkdir build\\variants 2>nul
FOR %%W IN (20 30 40 50 80) DO (
    openscad -D \"width=%%W\" -o \"build\\variants\\main_w%%W.stl\" src\\main.scad
)
EXIT /b 0

:ARCHIVE_STEP
FOR /f \"tokens=2 delims==\" %%D IN ('wmic os get localdatetime /value') DO SET DT=%%D
SET TS=%DT:~0,8%_%DT:~8,6%
mkdir \"archives\\%TS%\" 2>nul
copy build\\main.stl \"archives\\%TS%\\\" >nul
copy src\\main.scad  \"archives\\%TS%\\\" >nul
3dm info >> \"archives\\%TS%\\BUILD_INFO.txt\" 2>&1
EXIT /b 0
", HorizontalRule, Header 3 ("quick-reference--shell-equivalents", ["unnumbered", "unlisted"], []) [Str "Quick Reference — Shell Equivalents"], Table ("", [], []) (Caption Nothing []) [(AlignDefault, (ColWidth 0.13740458015267176)), (AlignDefault, (ColWidth 0.25190839694656486)), (AlignDefault, (ColWidth 0.31297709923664124)), (AlignDefault, (ColWidth 0.29770992366412213))] (TableHead ("", [], []) [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Task"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "bash (Linux/macOS)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "PowerShell (Windows)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "CMD (Windows)"]]]]) [(TableBody ("", [], []) (RowHeadColumns 0) [] [Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Build"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm build"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm build"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm build"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Info"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm info"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm info"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "3dm info"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Parameter (number)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "-D \"width=50\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "-D \"width=50\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "-D \"width=50\""]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Parameter (string)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "-D 'label=\"A\"'"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "-D 'label=\"A\"'"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "-D \"label=\"\"A\"\"\""]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Loop over list"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "for x in a b c; do ... done"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "foreach ($x in @(...)) {...}"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "FOR %%X IN (a b c) DO ..."]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Make directory"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "mkdir -p dir"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "New-Item -Force -ItemType Directory dir"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "mkdir dir 2>nul"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Copy file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "cp src dst"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "Copy-Item src dst"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "copy src dst"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Check exit code"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "if [ $? -ne 0 ]"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "if ($LASTEXITCODE -ne 0)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "IF %ERRORLEVEL% NEQ 0"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Write to file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "echo text > file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "\"text\" | Out-File file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "echo text > file"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Append to file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "echo text >> file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "\"text\" | Add-Content file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "echo text >> file"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Date/time"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "date +%Y%m%d_%H%M%S"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "Get-Date -Format \"yyyyMMdd_HHmmss\""]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "wmic os get localdatetime"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "File size (bytes)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "stat -c%s file"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "(Get-Item file).Length"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "FOR /F \"tokens=4\" %%S IN ('dir file')"]]], Row ("", [], []) [Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "Watch for changes"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Code ("", [], []) "ls src/*.scad | entr 3dm build"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "(see Lesson 9 watcher)"]], Cell ("", [], []) AlignDefault (RowSpan 0) (ColSpan 0) [Plain [Str "(use PowerShell)"]]]])] (TableFoot ("", [], []) [])]