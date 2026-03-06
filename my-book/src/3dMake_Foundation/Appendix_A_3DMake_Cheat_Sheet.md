# 3DMake CLI Cheat Sheet

> A comprehensive reference for the `3dm` command-line tool used alongside OpenSCAD for 3D printing.

---

## Basic Syntax

```
3dm ACTIONS... [OPTIONS]... [INPUT_FILE]
```

You can combine multiple actions in a single command, and most single-letter options can be used with a single dash (e.g. `-s 1.5` instead of `--scale 1.5`).

---

## Quick Examples

```bash
3dm build                                    # Build the default model
3dm build orient slice                       # Build, auto-orient, then slice
3dm build orient slice -m cover -o supports  # With a specific model and overlay
3dm info alpaca.stl                          # Get info about an STL file
3dm preview alpaca.stl                       # Preview an STL file
3dm slice print alpaca.stl                   # Slice and send an STL to printer
3dm image --angle top --angle front          # Export rendered images
```

---

## All Actions

### Project Setup & Management

| Action  | Description                                                                                                                     |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `setup` | Set up 3DMake for the first time, or overwrite/upgrade existing settings (printer profile, Gemini AI key, OctoPrint connection) |
| `new`   | Interactively create a new 3DMake project directory structure (`src/`, `build/`, `3dmake.toml`, starter `.scad` file)           |

```bash
3dm setup       # First-time setup or re-configure
3dm new         # Create a new project (prompts for directory name)
```

---

### Build Pipeline

These actions can be chained together in sequence:

| Action   | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| `build`  | Compile the OpenSCAD `.scad` source file into a `.stl` model                   |
| `orient` | Auto-orient the model to minimize the need for supports (uses Tweaker3)        |
| `slice`  | Slice the model into printer-ready G-code using PrusaSlicer                    |
| `print`  | Send the sliced G-code to the printer (OctoPrint, Bambu LAN, or Bambu Connect) |

```bash
3dm build                        # Just compile OpenSCAD -> STL
3dm build orient                 # Compile then auto-orient
3dm build orient slice           # Compile, orient, then slice
3dm build orient slice print     # Full pipeline: compile -> orient -> slice -> print
3dm slice print                  # Slice an already-built model and print it
3dm print                        # Send an already-sliced file to the printer
```

> **Note:** Actions automatically trigger their dependencies. For example, `slice` will imply `build` if needed.

---

### Inspection & Visualization

| Action    | Description                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `info`    | Display mesh dimensions and center point; optionally get an AI description of the model (requires Gemini or OpenRouter API key configured) |
| `preview` | Produce a 2D silhouette projection of the model (outputs a flat STL for quick reference)                                                   |
| `image`   | Export one or more rendered PNG images of the model from specified viewpoints                                                              |

```bash
3dm info                         # Show mesh size/center info
3dm info --interactive           # Info + start AI chat session about the model
3dm info model.stl               # Info on a specific STL file
3dm preview                      # Generate 3-silhouette projection (default view)
3dm preview --view topsil        # Generate top-only silhouette
3dm image --angle top            # Render image from top viewpoint
3dm image --angle top --angle front --angle left  # Multiple viewpoints
3dm image --colorscheme slicer_dark --image-size 1920x1080
```

**Available `--view` options for `preview`:**

| View Name  | Description                                        |
| ---------- | -------------------------------------------------- |
| `3sil`     | Three-view silhouette (top, left, front) — default |
| `topsil`   | Top-down silhouette only                           |
| `leftsil`  | Left-side silhouette only                          |
| `rightsil` | Right-side silhouette only                         |
| `frontsil` | Front silhouette only                              |
| `backsil`  | Back silhouette only                               |

**Available `--colorscheme` options for `image`:**

| Scheme Name     | Description                           |
| --------------- | ------------------------------------- |
| `slicer_light`  | Orange model on light gray background |
| `slicer_dark`   | Orange model on dark background       |
| `light_on_dark` | Floral white model on dark background |

**Available `--angle` options for `image`:**  
`above_front_left`, `above_front_right`, `above_back_left`, `above_back_right`, `top`, `bottom`

---

### Configuration Editors

These are all isolated actions (cannot be combined with other actions):

| Action               | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `edit-model`         | Open the current model's `.scad` source file in your configured editor        |
| `edit-profile`       | Open the current printer profile `.ini` file in your editor                   |
| `edit-overlay`       | Open (or create) a slicer settings overlay file in your editor                |
| `edit-profile-gcode` | Interactively select and edit a G-code script embedded in the printer profile |
| `edit-prompt`        | Edit the AI prompt used by the `info` command                                 |
| `edit-global-config` | Edit the global `defaults.toml` settings file (printer, API keys, etc.)       |

```bash
3dm edit-model                    # Edit the default model's .scad file
3dm edit-model -m lid             # Edit a specific model (lid.scad)
3dm edit-profile                  # Edit the current printer profile
3dm edit-profile -p prusa_mk4     # Edit a specific profile
3dm edit-overlay                  # Prompted to choose/create an overlay
3dm edit-overlay -o supports      # Edit the "supports" overlay directly
3dm edit-profile-gcode            # Choose and edit a G-code script in the profile
3dm edit-prompt                   # Edit the AI description prompt
3dm edit-global-config            # Edit global settings (defaults.toml)
```

---

### Library Management

| Action              | Description                                                                                          |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| `list-libraries`    | List all available OpenSCAD libraries in the catalog, showing which are installed and their versions |
| `install-libraries` | Download and install any libraries required by the current project (as specified in `3dmake.toml`)   |

```bash
3dm list-libraries        # See available and installed libraries
3dm install-libraries     # Install missing project libraries
```

---

### Listing Configuration

| Action          | Description                                |
| --------------- | ------------------------------------------ |
| `list-profiles` | List all available printer profiles        |
| `list-overlays` | List all available slicer setting overlays |

```bash
3dm list-profiles         # See all printer profiles
3dm list-overlays         # See all overlays (with profile restrictions if any)
```

---

### Diagnostics & Info

| Action         | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `test-connect` | Test the connection to the configured print server (OctoPrint or Bambu LAN) |
| `help`         | Display the help message with all actions and options                       |
| `version`      | Print the 3DMake version, program location, and config directory            |

```bash
3dm test-connect          # Test printer connection
3dm help                  # Show help
3dm version               # Show version info
```

---

## All Options

| Option           | Short | Type              | Description                                                                       |
| ---------------- | ----- | ----------------- | --------------------------------------------------------------------------------- |
| `--scale`        | `-s`  | `float` or `auto` | Scale the model by a decimal factor (e.g. `1.5` for 150%, `0.5` for 50%)          |
| `--model`        | `-m`  | `string`          | Select a specific model by name in a multi-model project (omit `.scad` extension) |
| `--profile`      | `-p`  | `string`          | Select a printer profile by name                                                  |
| `--overlay`      | `-o`  | `string`          | Apply a slicer settings overlay; can be used multiple times                       |
| `--view`         | `-v`  | `string`          | Select the preview view type (see view options above)                             |
| `--angle`        | `-a`  | `string`          | Set a viewpoint for image export; can be used multiple times                      |
| `--copies`       | `-c`  | `int`             | Number of copies to slice/print (default: `1`)                                    |
| `--interactive`  | `-i`  | flag              | Start an interactive AI chat after the `info` command                             |
| `--colorscheme`  | —     | `string`          | Color scheme name for image export                                                |
| `--image-size`   | —     | `WxH`             | Image dimensions in pixels (e.g. `1920x1080`, default: `1080x720`)                |
| `--debug`        | —     | flag              | Enable debug output (shows full subprocess logs, raises exceptions)               |
| `--help` / `--h` | `-h`  | flag              | Display help and exit                                                             |

---

## Input Files

You can pass an `.stl` or `.scad` file directly instead of running inside a project directory:

```bash
3dm info model.stl                  # Inspect a standalone STL
3dm preview model.stl               # Preview a standalone STL
3dm slice print model.stl           # Slice and print a standalone STL
3dm build model.scad                # Build a standalone SCAD file -> STL
3dm image model.stl --angle top     # Render image from standalone STL
```

> When passing a `.scad` file, `build` is automatically added to the action list.

---

## Project File (`3dmake.toml`) & Global Config (`defaults.toml`)

Both files use identical TOML keys. `defaults.toml` lives in the config directory and sets machine-wide defaults. `3dmake.toml` lives in your project root and **overrides** the global defaults for that project only.

> Run `3dm edit-global-config` to open `defaults.toml` in your editor.  
> Settings set via CLI flags (e.g. `--scale`, `--profile`) override both files at runtime.

---

### General / Project Settings

| Key                  | Type   | Default         | Description                                                                                     |
| -------------------- | ------ | --------------- | ----------------------------------------------------------------------------------------------- |
| `model_name`         | string | `"main"`        | The default model name. Maps to `src/<name>.scad` and `build/<name>.stl`                        |
| `project_name`       | string | _(folder name)_ | Project name used as a prefix on output filenames. Auto-detected from directory name if not set |
| `scale`              | float  | `1.0`           | Scale factor applied during slicing. `1.0` = 100%, `1.5` = 150%, `0.5` = 50%                    |
| `copies`             | int    | `1`             | Number of copies to slice/print in one run                                                      |
| `strict_warnings`    | bool   | `false`         | Pass `--hardwarnings` to OpenSCAD — treat all warnings as errors during `build`                 |
| `min_3dmake_version` | string | _(none)_        | Minimum required 3DMake version to run this project. Prevents running with outdated installs    |
| `interactive`        | bool   | `false`         | Default to interactive AI chat mode after `info`                                                |
| `debug`              | bool   | `false`         | Enable debug/verbose output globally                                                            |

```toml
# General project settings
model_name = "main"
project_name = "my-widget"
scale = 1.0
copies = 1
strict_warnings = true
min_3dmake_version = "1.2.0"
interactive = false
debug = false
```

---

### OpenSCAD / Build Settings

| Key               | Type            | Default | Description                                                                                                                                             |
| ----------------- | --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `libraries`       | list of strings | `[]`    | OpenSCAD libraries required by this project. Names must be **lowercase** and match entries in the library catalog. Install with `3dm install-libraries` |
| `local_libraries` | list of strings | `[]`    | Paths to local library directories (absolute or relative to project root) to add to `OPENSCADPATH` during build                                         |

```toml
# OpenSCAD library dependencies
libraries = ["openscad-threads", "bosl2"]

# Local/custom libraries not in the catalog
local_libraries = ["./lib/my-custom-parts", "/home/user/shared-scad-libs"]
```

---

### Printer & Slicer Settings

| Key               | Type            | Default          | Description                                                                                                                       |
| ----------------- | --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `printer_profile` | string          | _(required)_     | Name of the printer profile `.ini` file to use (without the `.ini` extension). Set during `3dm setup`                             |
| `overlays`        | list of strings | `[]`             | Default slicer setting overlays to apply on every slice. Profile-specific versions are preferred over default ones when available |
| `view`            | string          | `"3sil"`         | Default preview view type used by the `preview` action                                                                            |
| `image_angles`    | list of strings | `[]`             | Default viewpoint angles for the `image` action                                                                                   |
| `colorscheme`     | string          | `"slicer_light"` | Default color scheme for the `image` action                                                                                       |
| `image_size`      | string          | `"1080x720"`     | Default image export dimensions in `WIDTHxHEIGHT` pixels                                                                          |

```toml
# Slicer configuration
printer_profile = "prusa_mk4"
overlays = ["fast-draft"]

# Preview and image defaults
view = "3sil"
image_angles = ["above_front_left", "top"]
colorscheme = "slicer_light"
image_size = "1920x1080"
```

---

### Print Sending Settings

| Key                 | Type   | Default               | Description                                                                                |
| ------------------- | ------ | --------------------- | ------------------------------------------------------------------------------------------ |
| `print_mode`        | string | _(required to print)_ | How to send prints to the printer. One of: `"octoprint"`, `"bambu_lan"`, `"bambu_connect"` |
| `auto_start_prints` | bool   | `true`                | When using OctoPrint, automatically start the print after uploading the file               |

```toml
# Print sending mode
print_mode = "octoprint"       # Options: "octoprint", "bambu_lan", "bambu_connect"
auto_start_prints = true
```

---

### OctoPrint Connection

Used when `print_mode = "octoprint"`. Test with `3dm test-connect`.

| Key              | Type   | Default  | Description                                                                                                     |
| ---------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------- |
| `octoprint_host` | string | _(none)_ | Full URL to your OctoPrint server, including protocol (e.g. `"http://octopi.local"` or `"http://192.168.1.50"`) |
| `octoprint_key`  | string | _(none)_ | OctoPrint Application API key. Generate in OctoPrint > Settings > Application Keys                              |

```toml
# OctoPrint connection (set in defaults.toml, not project toml)
octoprint_host = "http://octopi.local"
octoprint_key = "ABC123DEF456..."
```

---

### Bambu Labs Connection

Used when `print_mode = "bambu_lan"`. Test with `3dm test-connect`.

| Key                   | Type   | Default  | Description                                                                    |
| --------------------- | ------ | -------- | ------------------------------------------------------------------------------ |
| `bambu_host`          | string | _(none)_ | Local IP address of your Bambu printer on your network (e.g. `"192.168.1.42"`) |
| `bambu_serial_number` | string | _(none)_ | Printer serial number (found in the printer's settings screen or Bambu Studio) |
| `bambu_access_code`   | string | _(none)_ | Local network access code shown on the printer screen (Settings > WLAN)        |

```toml
# Bambu Labs LAN connection (set in defaults.toml, not project toml)
bambu_host = "192.168.1.42"
bambu_serial_number = "01S00C123456789"
bambu_access_code = "12345678"
```

---

### AI Description Settings

Used by the `info` action. Set up during `3dm setup` or via `3dm edit-global-config`.

| Key              | Type   | Default              | Description                                                                                                                                                             |
| ---------------- | ------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gemini_key`     | string | _(none)_             | Google Gemini API key for AI model descriptions. Free tier allows ~50 requests/day. Get one at [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) |
| `openrouter_key` | string | _(none)_             | OpenRouter API key (alternative to Gemini for AI descriptions, supports many LLM providers)                                                                             |
| `llm_name`       | string | _(provider default)_ | Specific LLM model name to use with Gemini or OpenRouter (e.g. `"gemini-1.5-flash"`, `"google/gemini-pro-vision"`)                                                      |

```toml
# AI description keys (set in defaults.toml only — keep out of project toml!)
gemini_key = "AIzaSy..."
openrouter_key = "sk-or-..."
llm_name = "gemini-1.5-flash"
```

---

### Editor Settings

| Key                  | Type   | Default            | Description                                                                                                          |
| -------------------- | ------ | ------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `editor`             | string | _(system default)_ | Command used to open files for editing (e.g. `"code"`, `"vim"`, `"notepad"`, `"subl"`). Used by all `edit-*` actions |
| `edit_in_background` | bool   | `false`            | Launch the editor as a background process (non-blocking). Set to `true` on Windows where GUI editors are common      |

```toml
# Editor configuration (typically set in defaults.toml)
editor = "code"                 # VS Code
edit_in_background = true       # Don't block the terminal while editing

# Other common editor values:
# editor = "vim"
# editor = "nano"
# editor = "subl"               # Sublime Text
# editor = "notepad"            # Windows Notepad
```

---

### Complete Annotated Example

A fully commented `3dmake.toml` for a real project:

```toml
# ── Project identity ──────────────────────────────────────────────
model_name = "enclosure"           # src/enclosure.scad -> build/enclosure.stl
project_name = "pi-case"           # Output files named pi-case-enclosure.gcode etc.
min_3dmake_version = "1.2.0"       # Fail loudly if tool is out of date

# ── Build ─────────────────────────────────────────────────────────
strict_warnings = true             # Treat OpenSCAD warnings as errors
libraries = ["openscad-threads"]   # Needs thread library (run: 3dm install-libraries)
local_libraries = ["./lib"]        # Also include project-local ./lib/ directory

# ── Slicing ───────────────────────────────────────────────────────
printer_profile = "prusa_mk4"      # Use profiles/prusa_mk4.ini
scale = 1.0                        # No scaling
copies = 1
overlays = ["fast-draft"]          # Always slice with fast-draft settings

# ── Images & Preview ──────────────────────────────────────────────
view = "3sil"
image_angles = ["above_front_left", "top"]
colorscheme = "slicer_light"
image_size = "1920x1080"

# ── Printing ──────────────────────────────────────────────────────
# (Print connection settings like octoprint_host belong in defaults.toml,
#  not here, since they are machine-specific not project-specific)
print_mode = "octoprint"
auto_start_prints = true
```

A fully commented `defaults.toml` for a machine-wide config:

```toml
# ── Machine-wide defaults (in ~/.config/3dmake/defaults.toml) ────

# General defaults
model_name = "main"
view = "3sil"
auto_start_prints = true

# Editor
editor = "code"
edit_in_background = true          # For GUI editors that return immediately

# Printer
printer_profile = "prusa_mk4"

# OctoPrint connection
print_mode = "octoprint"
octoprint_host = "http://octopi.local"
octoprint_key = "ABC123DEF456GHI789..."

# AI descriptions (keep sensitive keys here, not in project toml)
gemini_key = "AIzaSyABC123..."
llm_name = "gemini-1.5-flash"
```

---

## Typical Workflows

### New Project from Scratch

```bash
3dm new                    # Create project structure
cd my-project
3dm edit-model             # Write your OpenSCAD model
3dm build                  # Verify it compiles
3dm info                   # Check dimensions
3dm build orient slice print  # Full pipeline
```

### Iterate on an Existing Model

```bash
3dm edit-model             # Edit the .scad source
3dm build                  # Recompile
3dm preview                # Quick visual check
3dm slice -o supports      # Slice with supports overlay
3dm print                  # Send to printer
```

### Working with a Standalone STL

```bash
3dm info my-model.stl
3dm preview my-model.stl
3dm image my-model.stl --angle above_front_left --angle top
3dm slice print my-model.stl
```

### Export Images for Documentation

```bash
3dm image \
  --angle above_front_left \
  --angle above_front_right \
  --angle top \
  --colorscheme slicer_light \
  --image-size 1920x1080
```

---

## Environment Variables

| Variable            | Description                                       |
| ------------------- | ------------------------------------------------- |
| `3DMAKE_CONFIG_DIR` | Override the default configuration directory path |

---

## Configuration Directory Structure

```
~/.config/3dmake/         (or $3DMAKE_CONFIG_DIR)
├── defaults.toml          Global settings (printer, API keys, etc.)
├── profiles/
│   └── my_printer.ini     Printer profiles (slicer settings)
├── overlays/
│   ├── default/
│   │   └── supports.ini   Default overlays (apply to all printers)
│   └── my_printer/
│       └── supports.ini   Printer-specific overlay overrides
├── libraries/             Installed OpenSCAD libraries
└── templates/             Starter templates for new projects/overlays
```

---

## Overlays

Overlays are **partial PrusaSlicer `.ini` files** that override specific slicer settings without replacing the entire printer profile. They are the primary way to switch between print quality modes, enable supports, adjust strength, or any other per-print tuning — without touching your base printer profile.

### How Overlays Work

1. When slicing, 3DMake loads your base printer profile first, then applies each overlay **in order**, with later overlays winning over earlier ones.
2. Overlay files only need to contain the keys you want to change — all other profile settings are preserved.
3. 3DMake looks for overlays in two places, preferring the printer-specific version if it exists:
   - `overlays/<printer_profile>/<name>.ini` ← preferred
   - `overlays/default/<name>.ini` ← fallback

### Creating and Editing Overlays

```bash
3dm edit-overlay                  # Prompted to pick or create an overlay
3dm edit-overlay -o strong        # Open (or create) the "strong" overlay directly
3dm list-overlays                 # See all available overlays
```

When creating a new overlay via `3dm edit-overlay`, you can optionally lock it to a specific printer profile. A locked overlay lives under `overlays/<profile>/` and only applies when that profile is active.

### Using Overlays

```bash
# Apply a single overlay
3dm slice -o strong

# Apply multiple overlays (stacked in order, last wins on conflicts)
3dm slice -o fine -o supports

# Set a default overlay for a project in 3dmake.toml
overlays = ["strong"]

# CLI overlay replaces (not adds to) the toml default
3dm slice -o draft              # Uses only "draft", ignores toml default
```

### Overlay File Format

Overlay `.ini` files use the same key=value format as PrusaSlicer profiles. You only need to include the keys you want to override.

```ini
# overlays/default/strong.ini
# Keys and values are identical to PrusaSlicer's config export format.
# Lines starting with # are comments and are ignored.

perimeters = 4
top_solid_layers = 6
bottom_solid_layers = 6
fill_density = 40%
fill_pattern = grid
```

---

### Key PrusaSlicer INI Settings Reference

The most useful keys for overlay tuning, with types and sample values:

#### Shell / Wall Strength

| Key                          | Description                                                        | Sample Values                             |
| ---------------------------- | ------------------------------------------------------------------ | ----------------------------------------- |
| `perimeters`                 | Number of outer wall loops                                         | `2` (draft) · `3` (normal) · `5` (strong) |
| `top_solid_layers`           | Solid layers on the top surface                                    | `3` (draft) · `5` (normal) · `8` (strong) |
| `bottom_solid_layers`        | Solid layers on the bottom surface                                 | `3` (draft) · `4` (normal) · `6` (strong) |
| `top_solid_min_thickness`    | Minimum top skin thickness in mm (overrides layer count if larger) | `0.5` · `0.8` · `1.0`                     |
| `bottom_solid_min_thickness` | Minimum bottom skin thickness in mm                                | `0.5` · `0.8` · `1.0`                     |
| `external_perimeters_first`  | Print outer walls before inner walls (better surface quality)      | `0` · `1`                                 |
| `thin_walls`                 | Detect and print thin walls that would otherwise be missed         | `0` · `1`                                 |

#### Infill

| Key                         | Description                                                    | Sample Values                                                                         |
| --------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `fill_density`              | Infill percentage                                              | `5%` · `15%` · `20%` · `40%` · `60%`                                                  |
| `fill_pattern`              | Infill pattern                                                 | `grid` · `gyroid` · `honeycomb` · `cubic` · `rectilinear` · `lightning` · `triangles` |
| `top_fill_pattern`          | Pattern for top solid layers                                   | `rectilinear` · `monotonic` · `concentric` · `smooth`                                 |
| `bottom_fill_pattern`       | Pattern for bottom solid layers                                | `rectilinear` · `monotonic` · `concentric`                                            |
| `infill_every_layers`       | Only infill every N layers (speeds up print, reduces strength) | `1` · `2` · `3`                                                                       |
| `solid_infill_every_layers` | Force solid infill every N layers                              | `0` (off) · `5`                                                                       |
| `infill_overlap`            | How much infill overlaps with perimeters (%)                   | `15%` · `25%`                                                                         |

#### Layer Height & Speed

| Key                        | Description                                             | Sample Values                  |
| -------------------------- | ------------------------------------------------------- | ------------------------------ |
| `layer_height`             | Standard layer height in mm                             | `0.1` · `0.15` · `0.2` · `0.3` |
| `first_layer_height`       | Height of the first layer (absolute mm or %)            | `0.2` · `0.25` · `75%`         |
| `perimeter_speed`          | Speed for perimeter walls (mm/s)                        | `40` · `60` · `80`             |
| `external_perimeter_speed` | Speed for outermost wall only (slower = better quality) | `25` · `35` · `50%`            |
| `infill_speed`             | Speed for infill (mm/s)                                 | `60` · `80` · `120`            |
| `solid_infill_speed`       | Speed for solid infill layers (mm/s)                    | `50` · `70`                    |
| `top_solid_infill_speed`   | Speed for top surface layers (slower = smoother)        | `30` · `40` · `50`             |
| `travel_speed`             | Non-extrusion travel speed (mm/s)                       | `130` · `180` · `250`          |
| `first_layer_speed`        | First layer speed (mm/s or %)                           | `20` · `30` · `50%`            |

#### Supports

| Key                                 | Description                                             | Sample Values                             |
| ----------------------------------- | ------------------------------------------------------- | ----------------------------------------- |
| `support_material`                  | Enable support structures                               | `0` · `1`                                 |
| `support_material_auto`             | Auto-detect where supports are needed                   | `0` · `1`                                 |
| `support_material_threshold`        | Overhang angle above which supports are added (degrees) | `40` · `45` · `55`                        |
| `support_material_pattern`          | Support infill pattern                                  | `rectilinear` · `honeycomb` · `lightning` |
| `support_material_spacing`          | Distance between support lines (mm)                     | `2` · `2.5` · `3`                         |
| `support_material_contact_distance` | Z gap between support and part (mm)                     | `0.1` · `0.2` · `0.25`                    |
| `support_material_interface_layers` | Dense interface layers between support and part         | `0` · `2` · `3`                           |

#### Cooling & Bridging

| Key                 | Description                        | Sample Values         |
| ------------------- | ---------------------------------- | --------------------- |
| `cooling`           | Enable fan cooling                 | `0` · `1`             |
| `min_fan_speed`     | Minimum fan speed %                | `20` · `35` · `50`    |
| `max_fan_speed`     | Maximum fan speed %                | `50` · `80` · `100`   |
| `bridge_fan_speed`  | Fan speed during bridges %         | `80` · `100`          |
| `bridge_speed`      | Extrusion speed for bridges (mm/s) | `20` · `30` · `40`    |
| `bridge_flow_ratio` | Flow rate multiplier for bridges   | `0.8` · `0.9` · `1.0` |

#### Skirt, Brim & Raft

| Key              | Description                            | Sample Values         |
| ---------------- | -------------------------------------- | --------------------- |
| `skirts`         | Number of skirt loops                  | `0` · `1` · `3`       |
| `skirt_distance` | Distance from part to skirt (mm)       | `3` · `5` · `6`       |
| `brim_width`     | Brim width in mm (`0` = disabled)      | `0` · `3` · `5` · `8` |
| `raft_layers`    | Number of raft layers (`0` = disabled) | `0` · `2` · `3`       |

#### Temperature

| Key                           | Description                             | Sample Values            |
| ----------------------------- | --------------------------------------- | ------------------------ |
| `temperature`                 | Hotend temperature for all layers (°C)  | `200` · `215` · `230`    |
| `first_layer_temperature`     | Hotend temperature for first layer only | `215` · `225` · `235`    |
| `bed_temperature`             | Bed temperature for all layers (°C)     | `0` · `55` · `60` · `80` |
| `first_layer_bed_temperature` | Bed temperature for first layer only    | `60` · `65` · `85`       |

---

### Sample Overlay: `strong.ini`

For functional parts, mechanical components, or anything that needs to survive stress. Heavier walls, more solid layers, higher infill, slower outer perimeters.

```ini
# overlays/default/strong.ini
# Heavy-duty print — maximizes strength at the cost of time and filament.

# Shell: thick walls and solid layers
perimeters = 5
top_solid_layers = 7
bottom_solid_layers = 6
top_solid_min_thickness = 1.2
bottom_solid_min_thickness = 1.0
external_perimeters_first = 1

# Infill: dense cubic for near-isotropic strength
fill_density = 50%
fill_pattern = cubic
infill_overlap = 25%

# Speed: slower outer wall for better layer adhesion
external_perimeter_speed = 25
perimeter_speed = 45
top_solid_infill_speed = 30

# First layer: slower for bed adhesion
first_layer_speed = 20

# Cooling: slightly reduced to improve layer bonding on perimeters
max_fan_speed = 70
```

---

### Sample Overlay: `draft.ini`

For quick test fits, rough prototypes, or checking dimensions before committing to a full print. Faster speeds, minimal walls, low infill, thicker layers.

```ini
# overlays/default/draft.ini
# Fast draft print — sacrifices surface quality and strength for speed.

# Shell: minimum viable walls
perimeters = 2
top_solid_layers = 3
bottom_solid_layers = 3

# Infill: low density, fast pattern
fill_density = 10%
fill_pattern = grid

# Layer height: thick layers = fewer passes = faster print
# NOTE: layer_height must be <= 75% of nozzle diameter.
# For a 0.4mm nozzle, max is 0.3mm.
layer_height = 0.3

# Speed: push everything faster
perimeter_speed = 80
external_perimeter_speed = 60
infill_speed = 120
solid_infill_speed = 90
top_solid_infill_speed = 60
travel_speed = 200
first_layer_speed = 30

# Cooling: full fan to keep up with fast extrusion
min_fan_speed = 50
max_fan_speed = 100
```

---

### Sample Overlay: `fine.ini`

For display models, miniatures, parts with fine surface detail, or anything where appearance matters more than speed. Thin layers, many perimeters, slow outer walls, smooth top surfaces.

```ini
# overlays/default/fine.ini
# Fine detail print — maximizes surface quality and dimensional accuracy.

# Shell: many perimeters for crisp edges and thick solid skins
perimeters = 4
top_solid_layers = 8
bottom_solid_layers = 5
top_solid_min_thickness = 1.0
external_perimeters_first = 1
thin_walls = 1

# Infill: moderate density with monotonic top for smooth finish
fill_density = 20%
fill_pattern = gyroid
top_fill_pattern = monotonic
bottom_fill_pattern = monotonic

# Layer height: thin layers for fine Z resolution
# NOTE: must be >= 25% of nozzle diameter to ensure reliable extrusion.
# For a 0.4mm nozzle, minimum is ~0.08mm; 0.1mm is safe.
layer_height = 0.1
first_layer_height = 0.2

# Speed: slow everything down for precision
perimeter_speed = 40
external_perimeter_speed = 20
infill_speed = 60
solid_infill_speed = 40
top_solid_infill_speed = 25
bridge_speed = 20
first_layer_speed = 15

# Cooling: strong cooling for clean overhangs and bridges
min_fan_speed = 50
max_fan_speed = 100
bridge_fan_speed = 100
bridge_flow_ratio = 0.85

# Brim: small brim helps adhesion for tall fine parts
brim_width = 3
```

---

### Sample Overlay: `supports.ini`

Enable automatic support structures for models with steep overhangs. Stack with other quality overlays.

```ini
# overlays/default/supports.ini
# Enable automatic supports for overhangs > 45 degrees.

support_material = 1
support_material_auto = 1
support_material_threshold = 45
support_material_pattern = lightning
support_material_spacing = 2.5
support_material_contact_distance = 0.2
support_material_interface_layers = 2
```

### Sample Overlay: `no-supports.ini`

Explicitly disable supports — useful when your base profile has them on by default.

```ini
# overlays/default/no-supports.ini
support_material = 0
support_material_auto = 0
```

---

### Stacking Overlays

Overlays are applied **left to right**, so later overlays win on any conflicting keys. This lets you compose print settings modularly:

```bash
# Fine quality WITH supports
3dm slice -o fine -o supports

# Strong walls but fast draft speed (fine conflicts: perimeter_speed in draft wins)
3dm slice -o strong -o draft

# Strong structural settings + supports, no brim (add a tiny no-brim override)
3dm slice -o strong -o supports -o no-brim
```

You can also set permanent default overlays for a project in `3dmake.toml`, while adding extra ones at the CLI:

```toml
# 3dmake.toml — always use strong as the base for this project
overlays = ["strong"]
```

```bash
# At CLI: strong (from toml) is REPLACED by the CLI overlay list
3dm slice -o strong -o supports   # Both applied
3dm slice -o fine                 # Only fine — replaces toml default entirely
```

> **Tip:** Name your overlays by intent (`strong`, `draft`, `fine`, `supports`, `vase-mode`, `no-brim`) rather than by settings (`40pct-infill`). This keeps the CLI readable and lets you tune the overlay file without renaming references everywhere.

---

## Action Dependency & Chain Rules

### Implied Action Dependencies

Some actions automatically trigger prerequisite actions. You never need to spell these out manually — 3DMake inserts them for you.

```
print
  └── slice (implied)
        └── build (implied, if scad source exists)

image
  └── load-mesh (internal, implied)

info
  └── measure-mesh (internal, implied)
        └── load-mesh (internal, implied)

preview
  └── measure-mesh (internal, implied)
        └── load-mesh (internal, implied)

orient
  (no implied actions — operates on an already-built STL)
```

So running `3dm print` on a project with OpenSCAD source will automatically run `build` -> `slice` -> `print` in order. You only need to be explicit when you want to **stop partway through** (e.g. `3dm build` to just check compilation without slicing).

### `last_in_chain` — Actions That Must Come Last

Three actions are marked `last_in_chain`, meaning **no other pipeline actions can follow them** in the same command. Attempting to do so is an error.

| Action    | Why it's last                                                 |
| --------- | ------------------------------------------------------------- |
| `image`   | Produces image files; nothing meaningful can follow a render  |
| `info`    | Terminal inspection command; no build artifact is produced    |
| `preview` | Produces a projection STL; slicing a silhouette is not useful |

```bash
# ✅ Valid — last_in_chain actions used alone or at the end
3dm build image
3dm build orient image
3dm info
3dm build preview

# ❌ Invalid — actions after a last_in_chain action
3dm image slice        # ERROR: 'image' cannot be followed by 'slice'
3dm info build         # ERROR: 'info' cannot be followed by 'build'
3dm preview print      # ERROR: 'preview' cannot be followed by 'print'
```

### Isolated Actions

A separate category called **isolated** means the action cannot be combined with _any_ other action at all — it must be the only verb on the command line. All `edit-*` actions, `setup`, `new`, `version`, `help`, `test-connect`, `list-profiles`, `list-overlays`, `list-libraries`, and `install-libraries` are isolated.

```bash
# ✅ Valid
3dm edit-model
3dm setup
3dm list-profiles

# ❌ Invalid
3dm edit-model build    # ERROR: edit-model is isolated
3dm setup new           # ERROR: setup is isolated
```

### Full Action Execution Order

When you request multiple actions, they always execute in this fixed internal order regardless of how you type them on the command line:

```
setup -> new -> build -> load-mesh* -> measure-mesh* -> info -> orient ->
image -> preview -> slice -> print -> list-profiles -> list-overlays ->
edit-model -> edit-overlay -> edit-profile -> edit-profile-gcode ->
edit-prompt -> edit-global-config -> list-libraries -> install-libraries ->
test-connect -> help -> version
```

_(Actions marked `_` are internal and cannot be requested directly.)\*

This means `3dm slice build` and `3dm build slice` are identical — order of verbs on the command line does not matter.

---

## Multi-Model Projects

A single 3DMake project can contain multiple OpenSCAD models. Each model is a separate `.scad` file in the `src/` directory.

### Directory Layout

```
my-project/
├── 3dmake.toml
├── src/
│   ├── main.scad        ← default model (model_name = "main")
│   ├── lid.scad
│   ├── bracket.scad
│   └── insert.scad
└── build/               ← generated STLs and GCode land here
    ├── main.stl
    ├── lid.stl
    └── my-project-main.gcode
```

### Selecting a Model

```bash
# Uses model_name from 3dmake.toml (default: "main")
3dm build slice

# Override at the CLI with --model / -m
3dm build slice -m lid
3dm build slice -m bracket
3dm info -m insert

# edit-model also respects -m
3dm edit-model -m lid
```

### Setting a Per-Model Default in `3dmake.toml`

```toml
# 3dmake.toml
model_name = "bracket"    # Everyone on this project defaults to the bracket model
```

### Output File Naming

Output G-code files are named using the pattern:

```
<project_name>-<model_name>.gcode          # 1 copy
<project_name>-<model_name>-x3.gcode       # 3 copies (--copies 3)
```

For example, a project named `pi-case` building the `lid` model with 2 copies produces:

```
build/pi-case-lid-x2.gcode
```

If `project_name` is not set in `3dmake.toml`, it is auto-detected from the directory name.

### Tip: Shared Parameters Across Models

A common OpenSCAD pattern is a shared `params.scad` file included by all models:

```
src/
├── params.scad      ← shared dimensions, tolerances, material choices
├── main.scad        ← include <params.scad>
├── lid.scad         ← include <params.scad>
└── bracket.scad     ← include <params.scad>
```

This way changing one dimension in `params.scad` propagates to every model, and you can rebuild all variants with a shell loop:

```bash
for model in main lid bracket; do
    3dm build slice -m $model
done
```

---

## Special INI Keys

### `3dm_bed_center`

This is a **3DMake-specific** key (not a standard PrusaSlicer key) that you can add to a printer profile or overlay. It works around a PrusaSlicer CLI bug where models are not correctly centered on non-rectangular or offset build volumes.

```ini
# In a printer profile .ini or overlay .ini
# Value is "X,Y" coordinates of the bed center in mm
3dm_bed_center = 117.5,117.5    # Prusa MK3/MK4 (235x235mm bed)
3dm_bed_center = 110,110        # 220x220mm bed
3dm_bed_center = 150,150        # 300x300mm bed
3dm_bed_center = 175,162.5      # Prusa XL (350x325mm bed)
```

When this key is present, 3DMake passes `--center X,Y` to the PrusaSlicer CLI automatically. You should set this in your **printer profile** rather than an overlay, since it is specific to the physical printer's bed geometry.

---

## AI Prompt Customization

The `info` action sends rendered images of your model to an AI (Gemini or OpenRouter) along with a text prompt. The default prompt asks for a general physical description of the object. You can customize this prompt to get more targeted or useful output.

### Editing the Prompt

```bash
3dm edit-prompt    # Opens the prompt file in your configured editor
```

The prompt file lives at:

```
~/.config/3dmake/prompt.txt    (or $3DMAKE_CONFIG_DIR/prompt.txt)
```

If the file does not exist when you run `3dm edit-prompt`, 3DMake creates it from a built-in default automatically.

### What the Prompt Receives

The AI receives your prompt text **plus six rendered PNG images** of the model taken from these fixed viewpoints: `above_front_left`, `above_front_right`, `above_back_left`, `above_back_right`, `top`, and `bottom`. Each image is 768×768 pixels.

### Sample Prompts

**Default-style — general physical description:**

```
You are analyzing a 3D model for 3D printing. Describe the object's physical
shape, identifying any notable geometric features, symmetry, overhangs, thin
walls, or small details that might affect printability. Be concise and factual.
```

**Printability review — focused on print problems:**

```
You are a 3D printing expert reviewing a model before printing. Examine these
views and identify:
1. Any overhangs greater than 45 degrees that will need supports
2. Thin walls or small features that may not print reliably at 0.4mm nozzle diameter
3. The best orientation for printing (which face should be on the bed)
4. Any other potential print quality issues

Be specific about locations (e.g. "the underside of the lip on the left side").
```

**Dimensional estimation — for sanity-checking scale:**

```
Based on the shape and proportions of this 3D model, estimate what real-world
object it most resembles and what its approximate dimensions might be in
millimeters. Note any features that suggest a specific scale (screw holes,
finger clearances, standard hardware interfaces, etc.).
```

**Design feedback — for iterating on a model:**

```
You are reviewing a 3D model for functional and aesthetic design quality.
Comment on: whether the design looks structurally sound, any places where
the geometry looks unintentional or messy, whether any features look like
they might be too fragile, and one specific improvement suggestion.
```

**Interactive mode** (`3dm info --interactive`) lets you follow up with specific questions after the initial AI response, such as asking it to focus on a particular feature or compare proportions.

---

## Troubleshooting

### Setup & Configuration

**`3DMake settings and print options have not been set up on this machine.`**
Run `3dm setup` before any other command. This creates the config directory, copies default profiles, and walks you through initial configuration.

**`Printer profile 'X' does not exist.`**
Run `3dm list-profiles` to see valid profile names. Profile names are case-sensitive and must match the `.ini` filename exactly (without the extension). Set the correct one with `3dm setup` or by editing `defaults.toml` with `3dm edit-global-config`.

**`This project requires 3DMake version X or newer.`**
The `min_3dmake_version` key in `3dmake.toml` is higher than your installed version. Run `3dm version` to check your version, then update 3DMake. If you are the project author, lower `min_3dmake_version` if the feature requirement does not actually apply.

---

### Build Errors

**`Source file src/main.scad does not exist.`**
Either you are not in a 3DMake project directory, or `model_name` in your `3dmake.toml` does not match an actual `.scad` file in `src/`. Run `3dm edit-model` to create the file, or correct `model_name`.

**`Some needed libraries are not installed: <name>`**
Run `3dm install-libraries` to download and install the missing libraries listed in your `3dmake.toml` `libraries` key. Run `3dm list-libraries` to verify the library name is spelled correctly (names are lowercase).

**OpenSCAD prints warnings but does not fail.**
Add `strict_warnings = true` to your `3dmake.toml` to treat warnings as errors. This is recommended for all projects to catch issues like undefined variables and deprecated syntax early.

**Build succeeds but STL looks wrong / has missing geometry.**
Run with `--debug` to see the full OpenSCAD output including all warnings:

```bash
3dm build --debug
```

---

### Slicing Errors

**`Could not find overlay 'X' for profile 'Y'.`**
The overlay file does not exist at `overlays/Y/X.ini` or `overlays/default/X.ini`. Run `3dm list-overlays` to see what is available, or `3dm edit-overlay -o X` to create it.

**`Could not fit the object outline on the build surface.`**
The model is larger than the printer's bed, or is being placed off-center. Check your model dimensions with `3dm info`, verify your `printer_profile` is correct for your actual printer, and confirm `3dm_bed_center` is set correctly in your profile if you have a non-standard bed.

**Slicer produces unexpected print warnings.**
Run with `--debug` to see the full PrusaSlicer stdout output:

```bash
3dm slice --debug
```

---

### Print / Connection Errors

**`Unknown print mode 'X'.`**
`print_mode` in your config must be exactly one of: `octoprint`, `bambu_lan`, or `bambu_connect`. Check spelling in `defaults.toml`.

**OctoPrint: `ERROR: Authentication failed (401)`**
Your `octoprint_key` is wrong or expired. In OctoPrint, go to Settings > Application Keys and generate a new key, then update `defaults.toml` via `3dm edit-global-config`.

**OctoPrint: `ERROR: Could not connect to server`**
Check that `octoprint_host` is correct and includes the protocol (`http://` or `https://`). Verify OctoPrint is running and the machine running 3DMake is on the same network. Run `3dm test-connect` for a detailed diagnosis.

**Bambu: FTP or MQTT connection fails.**
Verify `bambu_host` is the printer's current local IP (it may change if your router assigns IPs dynamically — consider setting a static IP for the printer). Check `bambu_access_code` on the printer screen under Settings > WLAN. Run `3dm test-connect` for step-by-step diagnosis.

**Bambu Connect mode:** `3dm print` with `print_mode = "bambu_connect"` does **not** connect directly to the printer. It packages your G-code into a `.3mf` file and opens the Bambu Connect desktop application via a URI handoff. Bambu Connect must be installed and running on your machine. `3dm test-connect` will report that it cannot test this mode — this is expected.

---

### General

**`Unknown action 'X'`**
Action names are lowercase and use hyphens, not underscores (e.g. `edit-model`, not `edit_model`). Run `3dm help` for the full list.

**`The action 'X' can only be used on its own`**
You combined an isolated action with other actions. Isolated actions (`edit-*`, `setup`, `new`, `version`, `help`, `test-connect`, `list-*`, `install-libraries`) must be run alone.

**`Action 'X' cannot be followed by other actions`**
You placed a `last_in_chain` action (`image`, `info`, `preview`) before other pipeline actions. These must be the final (or only) action in your command.

**`Cannot select a model name when using an input file`**
`--model` / `-m` and a direct input file path are mutually exclusive. Use one or the other.

**`Multiple inputs not supported yet`**
Only one input file can be passed per invocation. To process multiple files, use a shell loop.

---

## OpenSCAD Tips & Conventions for 3DMake

### Project Conventions

3DMake expects OpenSCAD source files in `src/<model_name>.scad` and writes STL output to `build/<model_name>.stl`. As long as you follow this layout (created automatically by `3dm new`), everything works without extra configuration.

### Parameterized Models

The most powerful pattern for 3DMake projects is a fully parameterized model where all key dimensions are defined as variables at the top of the file. This makes it trivial to create variants without duplicating code.

```openscad
// src/box.scad
// All tunable parameters at the top

length    = 80;     // mm
width     = 50;     // mm
height    = 30;     // mm
wall      = 2.5;    // mm — wall thickness
tolerance = 0.2;    // mm — fit clearance for mating parts
fillet_r  = 1.5;    // mm — corner radius

// Model below uses only the variables above
module box_shell() {
    difference() {
        rounded_rect([length, width, height], r=fillet_r);
        translate([wall, wall, wall])
            cube([length-wall*2, width-wall*2, height]);
    }
}

box_shell();
```

### Multi-Model Shared Parameters

For projects with multiple related models (e.g. a box and its lid), put shared dimensions in a separate include file:

```openscad
// src/params.scad  — shared across all models
outer_length  = 80;
outer_width   = 50;
wall          = 2.5;
tolerance     = 0.2;
lid_height    = 8;
body_height   = 35;
```

```openscad
// src/body.scad
include <params.scad>

difference() {
    cube([outer_length, outer_width, body_height]);
    translate([wall, wall, wall])
        cube([outer_length-wall*2, outer_width-wall*2, body_height]);
}
```

```openscad
// src/lid.scad
include <params.scad>

cube([outer_length - tolerance*2, outer_width - tolerance*2, lid_height]);
```

### Useful OpenSCAD Modules for 3D Printing

```openscad
// Rounded rectangle (better bed adhesion, less stress concentration)
module rounded_rect(size, r=1) {
    hull() {
        for (x=[r, size[0]-r], y=[r, size[1]-r])
            translate([x, y, 0]) cylinder(r=r, h=size[2], $fn=32);
    }
}

// Countersunk screw hole (M3 example)
module m3_hole(depth=10, countersink=true) {
    cylinder(d=3.4, h=depth, $fn=24);
    if (countersink)
        translate([0, 0, depth-3.2])
            cylinder(d1=3.4, d2=6.5, h=3.2, $fn=24);
}

// Snap-fit clip tab
module snap_tab(length=10, width=4, height=3, overhang=0.8) {
    union() {
        cube([length, width, height]);
        translate([0, 0, height])
            linear_extrude(overhang, scale=[1, 1, 0])
                square([length, width]);
    }
}
```

### `$fn`, `$fa`, `$fs` — Circle Resolution

OpenSCAD renders circles and cylinders as polygons. Control resolution with these special variables:

| Variable | Meaning                              | Recommended                             |
| -------- | ------------------------------------ | --------------------------------------- |
| `$fn`    | Fixed number of fragments            | `32` for small circles, `64`+ for large |
| `$fa`    | Minimum angle per fragment (degrees) | `1` for smooth curves                   |
| `$fs`    | Minimum fragment size (mm)           | `0.5` for print resolution              |

```openscad
// Set globally at top of file for consistent quality
$fa = 1;
$fs = 0.4;    // Match your nozzle diameter

// Or set per-object for performance (preview fast, export high quality)
cylinder(r=10, h=5, $fn=64);
```

> **Tip:** Use `$fn=16` or `$fn=24` during development for fast preview renders, then raise it to `$fn=64` or higher before your final `3dm build` for export.

### Designing for Printability

**Avoid overhangs steeper than 45°** without supports. Use chamfers instead of horizontal overhangs where possible:

```openscad
// ❌ Horizontal lip — needs supports
translate([0, 0, 10]) cube([20, 5, 2]);

// ✅ 45° chamfer — self-supporting
hull() {
    cube([20, 2, 10]);
    translate([0, 5, 8]) cube([20, 0.01, 2]);
}
```

**Minimum feature sizes** at 0.4mm nozzle:

| Feature                       | Minimum                                        |
| ----------------------------- | ---------------------------------------------- |
| Wall thickness                | 0.8mm (2× nozzle) — ideally 1.2mm+             |
| Hole diameter                 | 2mm (smaller holes tend to close up)           |
| Gap / clearance between parts | 0.2–0.3mm for sliding fit, 0.1mm for press fit |
| Text / embossed detail        | 0.5mm depth, 4pt font minimum                  |
| Pin diameter                  | 2mm minimum for structural pins                |

**Orientation matters.** Layer lines are weakest in tension perpendicular to the print direction. Design critical stress paths to run parallel to layer lines, or use the `orient` action to auto-optimize placement.

**Tolerance for fits.** PLA typically needs 0.2–0.3mm clearance for a sliding fit between printed parts. PETG and ABS may need slightly more. Build a quick tolerance test into your workflow:

```openscad
// Tolerance test — print this and measure which gap fits your printer
for (i=[0:4])
    translate([i*15, 0, 0])
        difference() {
            cube([12, 12, 5]);
            translate([6, 6, 0])
                cylinder(d=5 + i*0.1, h=5, $fn=32);
        }
```

### Using OpenSCAD Libraries with 3DMake

Declare library dependencies in `3dmake.toml`, then install them:

```toml
# 3dmake.toml
libraries = ["openscad-threads", "bosl2"]
```

```bash
3dm install-libraries    # Downloads and installs to config dir
3dm list-libraries       # Verify installation
```

Then use them in your `.scad` files normally:

```openscad
// BOSL2 example
include <BOSL2/std.scad>

cuboid([20, 20, 10], rounding=2, edges="Z");
```

```openscad
// openscad-threads example
use <threads.scad>

metric_thread(diameter=8, pitch=1.25, length=20);
```
