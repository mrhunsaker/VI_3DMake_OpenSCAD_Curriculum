# Teacher Glossary

*Pedagogical Concepts for 3D Design & Computational Thinking Instruction*

This glossary provides instructors with:
- Pedagogical frameworks
- Teaching strategies
- Assessment concepts
- Accessibility guidance
- Curriculum design principles

---

# SECTION I — Computational Thinking Framework

## Computational Thinking

Problem-solving approach using concepts fundamental to computer science.

Core pillars:
- **Decomposition** — Breaking problems into smaller parts
- **Pattern Recognition** — Identifying similarities
- **Abstraction** — Focusing on relevant details
- **Algorithms** — Creating step-by-step solutions

Application in OpenSCAD:
Students decompose complex models into primitive shapes, recognize geometric patterns, abstract parameters, and write algorithmic module definitions.

---

## Decomposition

Breaking a complex problem into manageable sub-problems.

### In 3D Design Context

Example:
A phone stand is decomposed into:
1. Base plate
2. Support angle
3. Lip to hold phone
4. Optional cable slot

Each component becomes a separate module.

---

## Abstraction

Removing unnecessary details to focus on essential features.

### In Parametric Design

```openscad
module bolt(diameter, length) {
    // Abstract "bolt" concept
    // Hide implementation details
}
```

Students learn to identify which details matter and which can be parameterized.

---

## Pattern Recognition

Identifying repeating structures or concepts.

### Examples in OpenSCAD

- Repeated geometric elements (array of holes)
- Similar transformation sequences
- Common parameter relationships

---

## Algorithms

Step-by-step procedures for solving problems.

### In Code

```openscad
// Algorithm for creating gear teeth
for (i = [0:teeth-1]) {
    rotate([0, 0, i * 360/teeth])
        translate([radius, 0, 0])
            tooth_profile();
}
```

---

# SECTION II — Instructional Design Strategies

## Walking Skeleton Approach

Agile development practice: build minimal working version first, then iterate.

### In 3D Design Curriculum

1. Create basic cube
2. Add one parameter
3. Add one transformation
4. Build and verify
5. Repeat

Prevents overwhelming students with complexity.

---

## Design Cycle

Iterative process:

```
Define → Ideate → Prototype → Test → Refine → Repeat
```

### In 3dMake Context

```
Edit .scad → 3dm build → 3dm info → Measure print → Adjust parameters
```

---

## Scaffolding

Temporary support structures that enable learning.

Examples:
- Starter code templates
- Pre-defined modules
- Graduated exercises
- Checklists

Remove scaffolding as competency increases.

---

## Physical Computing

Learning that connects digital design to physical artifacts.

3D printing provides immediate tangible feedback:
- Code → STL → Physical object
- Reinforces cause-and-effect
- Engages kinesthetic learners

---

## Stakeholder-Centric Design

Designing with end-user needs in focus.

### Teaching Application

Have students:
1. Interview stakeholders
2. Define requirements
3. Create design constraints
4. Iterate based on feedback

Example: Design assistive device for specific user needs.

---

# SECTION III — Assessment & Validation

## Code Review Criteria

Assess student code on:

1. **Functionality** — Does it work?
2. **Parametrization** — Are values abstracted?
3. **Documentation** — Are comments clear?
4. **Modularity** — Is code reusable?
5. **Efficiency** — Is approach optimal?

---

## Quality Assurance

Systematic verification process.

### For 3D Prints

- Measure with calipers
- Compare to specification
- Document deviations
- Adjust parameters
- Retest

Teaches scientific method and iterative refinement.

---

## Safety Protocols

### 3D Printing Safety

Required instruction:
- Ventilation requirements
- Hot surface warnings
- Electrical safety
- Material handling (MSDS)
- Emergency shutdown procedures

---

# SECTION IV — Accessibility & Universal Design

## Screen Reader Accessibility Guide

Ensure all students can access curriculum.

### Key Principles

1. **Semantic HTML/Markdown** — Proper heading structure
2. **Alt text for images** — Describe geometric concepts
3. **CLI-first workflows** — Reduce GUI dependence
4. **Descriptive output** — `3dm info` provides text descriptions

---

## Braille Display Setup

For students using refreshable braille displays:

1. Ensure code editors support screen readers
2. Use semantic indentation (not tabs)
3. Provide geometric descriptions in text
4. Test commands with NVDA/JAWS

---

## Indent Announcement Configuration

Configure screen readers to verbalize indentation level.

### NVDA

Settings → Document Formatting → Report line indentation

### JAWS

Settings Center → Reading → Report Indentation

Critical for understanding OpenSCAD block structure.

---

## Non-Visual Toolchain Introduction

Guide blind/low-vision students through:

1. CLI navigation (`pwd`, `ls`, `cd`)
2. Text editor setup (VS Code with extensions)
3. `3dm build` command
4. `3dm info` for validation
5. Caliper measurement techniques (tactile)

---

## Editor Setup for Accessibility

### VS Code

Recommended extensions:
- Screen Reader Optimized
- Bracket Pair Colorizer (announces nesting)
- OpenSCAD Language Support

### Notepad++

Lightweight alternative:
- Configure indentation announcement
- Enable line number reading
- Set up hotkeys for navigation

---

# SECTION V — Technical Teaching Concepts

## Parametric Architecture

Design philosophy where dimensions are variables, not fixed values.

### Why Teach This

- Promotes computational thinking
- Enables design reuse
- Teaches variable scope
- Reinforces algebra concepts

---

## Geometric Primitives

Basic 3D shapes that combine to form complex objects.

### Teaching Sequence

1. Cube
2. Sphere
3. Cylinder (including cones)
4. Boolean operations
5. Transformations
6. Compound models

---

## Tolerance Management

Critical mechanical engineering concept.

### Teaching Approach

1. Print test parts
2. Measure with calipers
3. Calculate error
4. Adjust tolerance parameters
5. Reprint and verify

Teaches:
- Precision vs accuracy
- Measurement techniques
- Iterative refinement

---

## Interlocking Features

Mechanical joints and assemblies.

Examples:
- Snap fits
- Press fits
- Sliding joints
- Threaded connections

Requires understanding of:
- Clearance tolerances
- Material properties
- Force analysis

---

# SECTION VI — Curriculum Design Elements

## Design Mode vs Print Mode

OpenSCAD workflows:
- **Design Mode** (F5) — Fast preview
- **Print Mode** (F6) — Full render for STL export

Teach distinction early to avoid confusion.

---

## Editor Window vs Preview Window

OpenSCAD interface:
- Left: Code editor
- Right: 3D preview

Non-visual students use editor + CLI tools instead of preview.

---

## File Format Progression

Teach file types in order:

1. `.scad` — Source code
2. `.stl` — 3D mesh
3. `.gcode` — Machine instructions

Each represents different abstraction level.

---

## Debugging Strategies

Systematic approaches to finding errors.

### For Students

1. Read error messages carefully
2. Use `echo()` to print values
3. Test modules independently
4. Use `#` modifier to highlight geometry
5. Simplify to minimal failing case

---

# SECTION VII — Cross-Curricular Connections

## Mathematics Integration

3D design reinforces:
- Coordinate geometry (X, Y, Z axes)
- Trigonometry (rotation angles)
- Algebra (parametric equations)
- Measurement & units

---

## Physics Applications

- Center of mass calculations
- Material properties (stress, strain)
- Thermal expansion
- Friction coefficients

---

## Engineering Design Process

Professional workflow:
1. Define problem
2. Research requirements
3. Brainstorm solutions
4. Build prototype
5. Test and evaluate
6. Refine design

3D printing makes this tangible.

---

# SECTION VIII — Slicing & Print Management

## Slicing Guides for Instruction

### PrusaSlicer

Recommended teaching slicer:
- Visual layer preview
- Built-in supports
- Print time estimates

### Cura

Alternative:
- Simpler interface
- Good for beginners

### Bambu Studio

For Bambu Lab printers:
- Automated features
- Multi-color support

---

## Material Selection Pedagogy

### PLA

Start here:
- Easiest to print
- Lowest temperature
- Minimal warping

### PETG

Intermediate:
- Stronger
- More forgiving than ABS

### TPU

Advanced:
- Flexible prints
- Requires special techniques

### ABS

Advanced:
- Professional applications
- Requires enclosure
- Warping challenges teach troubleshooting

---

# SECTION IX — Language & Syntax Teaching

## Code Statement

Single executable instruction.

```openscad
cube([10,10,10]);  // One statement
```

---

## Comments as Documentation

Teach commenting best practices:

1. Explain **why**, not **what**
2. Document parameters
3. Include units
4. Note constraints

---

## Arithmetic in Code

Reinforce math concepts:

```openscad
width = 10;
spacing = width * 1.5;  // Arithmetic
```

---

# SECTION X — Assessment Rubrics

## Parametric Design Rubric

| Criterion | Novice | Developing | Proficient | Advanced |
|-----------|--------|------------|------------|----------|
| Parameterization | Hard-coded values | Some parameters | Most values parameterized | Full parametric architecture |
| Documentation | No comments | Minimal comments | Clear parameter docs | Comprehensive documentation |
| Modularity | No modules | Basic modules | Reusable modules | Library-quality modules |
| Functionality | Doesn't build | Builds with errors | Meets requirements | Exceeds requirements |

---

## Manufacturing Readiness Rubric

| Criterion | Assessment |
|-----------|------------|
| Manifold geometry | Pass/Fail |
| Tolerance specified | Pass/Fail |
| Documentation complete | Pass/Fail |
| Quality measurements recorded | Pass/Fail |

---

# SECTION XI — Troubleshooting Pedagogy

## Teaching Debugging

Framework:
1. **Reproduce** — Can you make it fail consistently?
2. **Isolate** — What's the minimal failing case?
3. **Hypothesize** — What might cause this?
4. **Test** — How can you verify?
5. **Document** — What did you learn?

---

## Common Student Errors

### Syntax Errors

- Missing semicolons
- Unmatched brackets
- Typos in keywords

### Logical Errors

- Wrong parameter order
- Incorrect units
- Transform order confusion

### Practical Errors

- Model too large for print bed
- Overhangs without support
- Wall thickness too thin

---

# SECTION XII — Project-Based Learning

## Scaffolded Project Sequence

1. **Week 1-2:** Primitives and transformations
2. **Week 3-4:** Modules and parameters
3. **Week 5-6:** Boolean operations
4. **Week 7-8:** Multi-part assemblies
5. **Week 9-10:** Student-designed project

---

## Portfolio Assessment

Students maintain portfolio showing:
- Design evolution
- Failed prototypes (with analysis)
- Final products
- Measurements and QA data
- Reflection on process

---
