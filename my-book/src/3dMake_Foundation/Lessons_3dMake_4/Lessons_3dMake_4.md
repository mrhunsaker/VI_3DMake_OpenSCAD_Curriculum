# Lesson 4: AI-Enhanced Verification and Multimodal Feedback 



Estimated time: 45–60 minutes

**Learning Objectives**
- Run `3dm info` to collect deterministic renders and AI diagnostics (if configured)[^1][^10]
- Compare AI suggestions with renderer and slicer outputs and prioritize deterministic fixes[^8]
- Record and sanitize AI prompts and outputs for reproducibility and data governance[^8]

**Materials**
- 3dMake configured with an LLM API key (optional)
- Example project with renderable geometry

Step-by-step Tasks
1. Verify API configuration (if used) or run `3dm info --dry-run` to confirm render pipeline works locally[^1].
2. Run `3dm info` and save the produced images and textual report to `build/`[^1].
3. Inspect deterministic outputs (render warnings, slicer preview) and compare them to AI recommendations; prioritize deterministic issues[^8][^10].
4. Iterate prompt engineering (in `3dmake.toml` or via `--prompt`) with precise technical primitives and re-run `3dm info` to examine changes[^8].
5. Document all prompts, AI outputs, and deterministic validation steps in `AI-notes.md` within the project[^8].

Checkpoints
- After step 2 you have stored render images and the AI report in `build/`[^1].

Quick Quiz (5)
1. What command generates AI diagnostics and model renders[^1]?
2. Why must AI outputs be validated against renderer/slicer results[^8][^10]?
3. Name one privacy or governance concern when sending models/images to an API[^8].
4. What is an example of a technical primitive to include in a prompt[^8]?
5. Where should you record prompts and AI outputs in the project[^8]?

Extension Problems (5)
1. Create an `AI-notes.md` documenting three prompts and the AI's responses; indicate which suggestions you acted on[^8].
2. Simulate a false-positive AI warning: describe how you validated and rejected it using deterministic checks[^10].
3. Generate a short prompt that requests the top three structural risks and record the results[^8].
4. Create a short checklist for sanitizing uploads before sending to an API[^8].
5. Re-run `3dm info` after a code fix and compare the differences in the AI report[^1].

## **Works cited**

[^1]: tdeck/3dmake: Non-visual 3D design and 3D printing tool - GitHub, accessed February 18, 2026, https://github.com/tdeck/3dmake

[^8]: OpenSCAD Prompt Creation - DocsBot AI, accessed February 18, 2026, https://docsbot.ai/prompts/technical/openscad-prompt-creation

[^10]: Build Great AI: LLM-Powered 3D Model Generation for 3D Printing - ZenML LLMOps Database, accessed February 18, 2026, https://www.zenml.io/llmops-database/llm-powered-3d-model-generation-for-3d-printing  
