# Appendix — AI Guidance: Advantages, Disadvantages, and Flawed OpenSCAD Examples

This appendix expands on the lesson's AI discussion and provides concrete, debuggable examples of typical AI mistakes.

## A. Advantages of AI in Development

- **Rapid ideation & scaffolding:** Convert natural-language intent into a first-draft parametric sketch.
- **Accessibility:** Natural-language descriptions (e.g., via `3dm info`) support non-visual verification.
- **Promptable code review:** Use structured prompts to check for boolean pitfalls and parameter hazards.
- **Iteration speed:** AI can propose parameterizations and printability tips; you verify deterministically.

## B. Disadvantages and Risks

- **Non-determinism:** Same prompt, different answer. Not a source of truth.
- **No geometric guarantees:** Descriptions are inferential, not computed solid modeling.
- **Standards/tolerances gaps:** AI may contradict ISO practice or printer/process realities.
- **Hallucinations:** Invented functions like `rounded_cube()` or `fillet3d()` mislead beginners.
- **Privacy/IP exposure:** Cloud tools may retain or train on uploads depending on policy.

## C. Flawed AI-Generated OpenSCAD — Code Gallery

> Use these as student debugging labs. After fixes, always: `3dm build` → `3dm info` → slicer layer view.

### C1. Hallucinated Convenience Function (`rounded_cube`)

**Flawed**

```openscad
// AI claims OpenSCAD has rounded_cube(size=[x,y,z], r=...)
module enclosure() {
  rounded_cube(size=[60, 40, 20], r=3);  // ❌ Not a built-in
  translate([10, 10, 0]) cylinder(h=20, r=2, center=false);
}
enclosure();
```

**Fix** (native minkowski approach)

```openscad
module rounded_box(x=60, y=40, z=20, r=3) {
  minkowski() {
    cube([x - 2*r, y - 2*r, z - 2*r]);
    sphere(r=r, $fn=32);
  }
}
rounded_box();
```

### C2. Coplanar Boolean (Missing 0.001 Offset)

**Flawed**

```openscad
difference() {
  cube([30,30,10]);
  translate([5,5,0]) cube([20,20,10]); // ❌ coplanar
}
```

**Fix**

```openscad
difference() {
  cube([30,30,10]);
  translate([5,5,-0.001]) cube([20,20,10+0.002]);
}
```

### C3. Wrong Transform Order (Misplaced Holes)

**Flawed**

```openscad
module bracket(width=40, height=20, th=3, hole_r=3) {
  difference() {
    cube([width, th, height]);
    translate([width/2, th/2, height/2])
      rotate([90,0,0])
        cylinder(h=th, r=hole_r, center=true); // ❌ pivot surprise
  }
}
bracket();
```

**Fix**

```openscad
module bracket(width=40, height=20, th=3, hole_r=3) {
  difference() {
    cube([width, th, height]);
    translate([width/2, th/2, height/2])
      rotate([90,0,0])
        cylinder(h=th+0.002, r=hole_r, center=true);
  }
}
bracket();
```

### C4. Procedural Reassignment (Not How OpenSCAD Works)

**Flawed**

```openscad
width = 60;
width = width + 10; // ❌ assumes imperative mutation
cube([width, 20, 10]);
```

**Fix**

```openscad
base_w = 60;
final_w = base_w + 10; // ✅ derive
cube([final_w, 20, 10]);
```

### C5. Unsafe Parameter Limits (Geometry Inversion)

**Flawed**

```openscad
module box(w=30, d=30, h=20, wall=3) {
  difference() {
    cube([w, d, h]);
    translate([wall, wall, -0.001])
      cube([w-2*wall, d-2*wall, h+0.002]);
  }
}
box(w=20, d=20, h=15, wall=12); // ❌ breaks
```

**Fix**

```openscad
module box(w=30, d=30, h=20, wall=3) {
  assert(w > 0 && d > 0 && h > 0, "Dims must be positive");
  assert(wall > 0 && wall < min(w,d)/2, "wall too large; must be < min(w,d)/2");
  difference() {
    cube([w, d, h]);
    translate([wall, wall, -0.001])
      cube([w-2*wall, d-2*wall, h+0.002]);
  }
}
box(w=20, d=20, h=15, wall=12); // will assert
```

### C6. Hallucinated Text Filleting + Misplaced Emboss

**Flawed**

```openscad
difference() {
  cube([80, 40, 6]);
  translate([0,0,0])
    fillet_text("RYAN", size=10, radius=1); // ❌ bogus
  translate([70, 20, 3])
    linear_extrude(2) text("RYAN", size=10); // ❌ misplaced
}
```

**Fix**

```openscad
module top_deboss(txt="RYAN", size=10, depth=1) {
  translate([40, 20, 6 + 0.001])
    linear_extrude(height=depth)
      text(txt, size=size, halign="center", valign="center");
}

difference() {
  cube([80, 40, 6]);
  top_deboss();
}
```

### C7. Assembly Fit Overlooked (No Clearance for Lid)

**Flawed**

```openscad
module box_outer(sz=[60,40,20], wall=2) { cube(sz); }
module box_inner(sz=[60,40,20], wall=2) { cube([sz[0]-2*wall, sz[1]-2*wall, sz[2]]); }

difference() {
  box_outer();
  translate([2,2,-0.001]) box_inner(); // ❌ zero clearance
}
```

**Fix**

```openscad
module box_with_clearance(w=60, d=40, h=20, wall=2, clr=0.25) {
  assert(clr > 0 && clr < 1, "Unreasonable clearance");
  difference() {
    cube([w, d, h]);
    translate([wall+clr, wall+clr, -0.001])
      cube([w-2*(wall+clr), d-2*(wall+clr), h+0.002]);
  }
}
box_with_clearance();
```

