# Lesson 5: Safety Protocols and the Physical Fabrication Interface 

Estimated time: 60–90 minutes

**Learning Objectives**
- Describe the Hierarchy of Controls and apply it to a classroom maker-space[^5][^6]
- Perform pre-print environmental and equipment checks[^5]
- Validate the digital-to-physical pipeline and document post-print inspection results[^1][^3]

**Materials**
- Classroom 3D printer, enclosure, and filtration (or documented lab SOP)
- Example parametric OpenSCAD project and slicer profile

Step-by-step Tasks
1. Conduct a safety briefing: review the Hierarchy of Controls and locate safety equipment[^5].
2. Verify environmental controls and printer readiness: confirm filtration, bed adhesion, and spool metadata[^5][^6].
3. Run `3dm build` and inspect the STL in a slicer; check layer-preview and non-manifold warnings[^1][^3].
4. If using remote submission (OctoPrint), confirm camera monitoring and logging before any unattended prints[^5].
5. Obtain instructor sign-off and monitor the first layers in-person or via camera.
6. After printing, wait for the part to cool (< $30^\\circ\\text{C}$), measure critical dimensions, and record observations[^5][^6].

Checkpoints
- Completed environmental checklist and saved inspection notes in the project README[^1][^5].

Quick Quiz (5)
1. What are the four levels of the Hierarchy of Controls[^5]?
2. Name two engineering controls useful for reducing emissions[^5][^6].
3. Why must you monitor the first layers of a new print profile[^5]?
4. Where should you record spool metadata and print observations[^1][^5]?
5. What is the safe cooldown temperature suggested before part removal[^6]?

Extension Problems (5)
1. Draft a one-page SOP for start-to-finish supervised prints in your lab[^5][^6].
2. Create a checklist script that verifies spool metadata and build settings before `3dm build` runs[^1].
3. Run a test print and log measured deviations; propose a parameter change to correct the error[^3].
4. Design an accessible post-print inspection checklist that non-visual users can follow[^5][^6].
5. Research filtration options and recommend one for your classroom, including maintenance intervals[^5][^6].

## **Works cited**

[^1]: tdeck/3dmake: Non-visual 3D design and 3D printing tool - GitHub, accessed February 18, 2026, https://github.com/tdeck/3dmake

[^3]: Programming with OpenSCAD, accessed February 18, 2026, https://programmingwithopenscad.github.io/

[^5]: Activity · tdeck/3dmake - GitHub, accessed February 18, 2026, https://github.com/tdeck/3dmake/activity

[^6]: 10+ OpenSCAD Online Courses for 2026 | Explore Free Courses & Certifications, accessed February 18, 2026, https://www.classcentral.com/subject/openscad  
