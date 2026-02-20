# Lesson 0.6 — Introduction to Slicing with OctoPrint 

Estimated time: 45–60 minutes

Learning objectives:
- Understand how OctoPrint works as a print server and interface
- Upload and manage G-code files through the OctoPrint web interface
- Monitor printer status and receive print updates remotely
- Configure basic printer settings for reliable print submission

Materials:
- OctoPrint instance (local or network); a pre-sliced G-code file or access to a connected slicer

Step-by-step student tasks:
1. Access OctoPrint via web browser (e.g., `http://octopi.local` or your network IP).
2. Navigate to the Files section and upload a G-code file (drag-and-drop or browse).
3. Check the printer status in the Printer State panel; confirm the nozzle and bed are ready.
4. Load filament and home the printer using OctoPrint's controls if needed.
5. Select your G-code from the file list and click `Print`; monitor the first layer on the live camera feed if available.

Checkpoint (submit or self-check):
- Document the G-code file name, estimated print time, and initial observations from the print start.

## Quiz — Lesson 0.6

1. Short answer: What is OctoPrint and why is it useful in a classroom?
2. Multiple choice: How do you access OctoPrint? (A) Desktop app (B) Web browser (C) USB only — Answer: B
3. Practical: Show where to upload a G-code file in OctoPrint.
4. Practical: Check the printer state and report nozzle/bed temperature.
5. Short answer: Name one advantage of using OctoPrint over a traditional SD card.

## Extension Problems

1. Configure a custom event (e.g., alert on print completion) and document how it works.
2. Use OctoPrint's API (if available) to query printer status programmatically; write a short script or document the endpoint.
3. Monitor a multi-hour print and create a time-lapse or log of temperature changes.
4. Set up remote access (if security allows) and print from a different location; document the setup and results.
5. Create a troubleshooting guide for common OctoPrint connection issues you encounter or research.
