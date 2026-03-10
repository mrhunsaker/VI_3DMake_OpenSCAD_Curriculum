# Lesson 9 — Automation and 3dm Workflows

**Estimated time:** 90–120 minutes

---

## Before You Start

In Lessons 1–8, you built real, functional 3D models — phone stands, keycaps, stackable bins — and learned how parametric design lets a single `.scad` file produce many different variants just by changing numbers. You've been running builds manually: open a terminal, type `3dm build`, check the output, repeat. That's fine when you're developing one part. But what happens when you need to build 20 variants of a part for a batch test? Or when you need to _prove_ that every commit to your project builds correctly before you send files to a printer?

This lesson is about the next step: **automation**. You'll learn to write scripts that build, verify, archive, and iterate without you sitting at the keyboard. These are real software engineering skills — the same techniques used in companies that ship physical products with embedded software. By the end of this lesson, you'll understand how professional fabrication workflows work and be able to apply those patterns to your own projects.

---

## Learning Objectives

By the end of this lesson you will be able to:

- Write robust automation scripts in bash (Linux/macOS), PowerShell (Windows), and CMD (Windows legacy)
- Use proper error handling, logging, and trap/exit patterns for unattended builds
- Pass string and numeric parameters correctly to `openscad -D` from all three shells
- Automate batch builds, archiving, and variant generation
- Implement a watch mode that rebuilds automatically when source files change
- Integrate 3dMake automation into CI/CD pipelines with GitHub Actions

---

## Concept: Why Automation Matters

Before writing any code, let's understand the problem automation solves.

### The Manual Build Problem

Suppose you're building a parametric shelf bracket that needs to be tested at three different wall thicknesses (1.2 mm, 1.6 mm, 2.0 mm) across four different bracket widths (60 mm, 80 mm, 100 mm, 120 mm). That's 12 combinations. Running each build manually means:

1. Open terminal
2. Type the command with the right parameter values
3. Wait for OpenSCAD to render
4. Check that the output exists
5. Rename the file so it doesn't overwrite the last one
6. Repeat 11 more times

This takes time, introduces human error (typos in parameter values, forgetting to rename files), and produces results that are hard to reproduce later — "which settings did I use for the 80mm bracket again?"

### Automation Solves Four Problems

**Repeatability:** A script runs exactly the same way every time. Parameter values, file names, output locations — all defined once in code, not typed by hand each time.

**Error detection:** A good script notices when something goes wrong and stops immediately, rather than silently producing broken output and continuing.

**Documentation:** A build script _is_ documentation. Reading a well-written script tells you exactly how the project is supposed to be built — what parameters matter, what the expected output looks like, how things are organized.

**Scalability:** Whether you need 12 builds or 1,200, the automation works the same way.

### Automation Is a Safety Net

Think of build automation like the safety rails on a mountain trail. The trail was perfectly safe without them — but the rails mean you can focus on the view instead of watching every step. Automation removes the tedious, error-prone parts of your workflow so you can focus on design.

---

## Step 1 — The OpenSCAD `-D` Flag and Parameter Passing

### What the `-D` Flag Does

OpenSCAD's `-D` flag overrides any variable in your `.scad` file at the command line. This is the bridge between your automation scripts and your parametric models. Instead of editing the `.scad` file to change a value, you pass the new value directly when you run the build.

Think of it like a recipe where the recipe card has the default quantities written in pencil. The `-D` flag lets you write different numbers in the margin for this particular batch — without erasing the original recipe.

```bash
# The .scad file has: width = 40;
# The -D flag overrides it to 60 for this build
openscad -D "width=60" -o output.stl src/main.scad
```

### Numeric Parameters: Straightforward

For numeric values, the syntax is identical on all platforms:

```bash
# Works the same on Linux/macOS/Windows
openscad -D "width=50" -D "height=15" -o output.stl src/main.scad
openscad -D "width=50" -D "height=15" -D "wall=2.5" -o output.stl src/main.scad
```

You can pass as many `-D` flags as you need. Each one overrides one variable.

### String Parameters: The Hard Part

String values are much trickier, and this is where most beginners get tripped up. In OpenSCAD, a string value must be surrounded by double quotes: `label="FRONT"`. But you're passing this string _inside another string_ on the command line, which creates a quoting conflict.

**This is the #1 source of silent failures in automation scripts.** If you get the quoting wrong, OpenSCAD may accept the command without error but produce a model where the label is empty or incorrect. No error message. No warning. Just wrong output.

#### Why Quoting Is Different on Each Platform

Each shell — bash (Linux/macOS), PowerShell (Windows), and CMD (Windows legacy) — has its own rules for how quotes work inside quotes. There's no single universal syntax. You need to learn the rule for each environment you use.

The underlying goal is always the same: you need OpenSCAD to receive the string `label="FRONT"` with the double quotes intact. Each shell provides a different way to achieve that.

#### Linux / macOS (bash)

**The rule:** Use single quotes around the entire `-D` value to protect inner double quotes. Single-quoted strings in bash are completely literal — nothing inside them is interpreted.

```bash
# CORRECT: single quotes around the entire -D value protect inner double quotes
openscad -D 'label="FRONT"' -o out.stl src/main.scad

# CORRECT: backslash-escaped double quotes inside a double-quoted string
openscad -D "label=\"FRONT\"" -o out.stl src/main.scad

# CORRECT: variable with proper escaping
LABEL="FRONT PANEL"
openscad -D "label=\"${LABEL}\"" -o out.stl src/main.scad

# DEBUGGING TIP: echo the command before running to verify quoting
echo "openscad -D 'label=\"${LABEL}\"' -o out.stl src/main.scad"

# WRONG — string value will be malformed; OpenSCAD may use an empty string
openscad -D "label=FRONT" -o out.stl src/main.scad    # missing inner quotes
```

**Debugging trick:** Before running a command, `echo` it first to see exactly what your shell will send to OpenSCAD. If the echoed command looks wrong, it _is_ wrong — fix the quoting before running it for real.

#### Windows (PowerShell)

**The rule:** Single quotes work the same way as in bash — they protect inner double quotes. PowerShell also supports backtick (`` ` ``) as an escape character inside double-quoted strings.

```powershell
# CORRECT: single quotes protect inner double quotes
openscad -D 'label="FRONT"' -o out.stl src\main.scad

# CORRECT: backtick escapes for double quotes inside a double-quoted string
$label = "FRONT PANEL"
openscad -D "label=`"$label`"" -o out.stl src\main.scad

# CORRECT: build the argument string explicitly
$dArg = 'label="' + $label + '"'
openscad -D $dArg -o out.stl src\main.scad

# DEBUGGING TIP: display the argument before using it
Write-Host "D argument: $dArg"
```

#### Windows (CMD)

**The rule:** CMD uses doubled double-quotes (`""`) to produce a single literal double quote inside a string. This is the most visually confusing notation — `""FRONT""` means: open double-quote, then the word FRONT, then close double-quote.

```cmd
REM CMD uses doubled double-quotes to produce a literal double-quote inside a string
openscad -D "label=""FRONT""" -o out.stl src\main.scad

REM With a variable
SET LABEL=FRONT
openscad -D "label=""%LABEL%""" -o out.stl src\main.scad

REM DEBUGGING: echo first to verify
echo label=""%LABEL%""
```

### Common Mistake: Assuming Silent Success

OpenSCAD will often not report an error when string quoting is wrong. The variable just gets an empty string or `undef` as its value. If your label text disappears from the rendered model, check your quoting before anything else.

---

## Step 2 — Robust Error Handling

### What "Robust" Means

A script is _robust_ if it handles failure gracefully: it detects when something went wrong, reports the failure clearly, and stops before making things worse. A _fragile_ script ignores errors and continues — which often means you end up with a folder full of broken or empty output files.

### The Three Failure Modes to Guard Against

**Silent failure:** The command runs, returns an error code, but the script doesn't check and keeps going. You discover the problem later when the output files don't work.

**Partial output:** The build starts, produces a partially-written file, then crashes. The file exists but is corrupted. Your script needs to check that the output is complete and has a reasonable size.

**Cascade failure:** One failure causes subsequent steps to fail too, making the error messages confusing. Stop at the first failure — don't keep running.

### Error Handling in bash

Bash has three critical safety settings that should be at the top of every automation script:

- `set -e` — exit immediately if any command returns a non-zero exit code (non-zero = failure)
- `set -u` — error if you reference a variable that was never defined (catches typos in variable names)
- `set -o pipefail` — catch errors inside pipelines, not just the last command in the pipe

Think of these as your script's "safety mode." Without them, bash will happily continue running after errors. With them, the first problem causes an immediate stop.

```bash
#!/bin/bash
# build.sh — robust build script with logging and error handling

set -e           # exit immediately if any command returns a non-zero exit code
set -u           # error on use of any unset variable
set -o pipefail  # catch errors inside pipelines (not just the last command)

LOG_DIR="build/logs"
LOG_FILE="$LOG_DIR/build_$(date +%Y%m%d_%H%M%S).log"
mkdir -p "$LOG_DIR" build

# Logging function: prints with timestamp and appends to log file
log() {
  local level="$1"
  shift
  echo "[$(date +%H:%M:%S)] [$level] $*" | tee -a "$LOG_FILE"
}

# Trap: runs when any error occurs, reports which line failed
on_error() {
  log "ERROR" "Build failed at line $1. Check: $LOG_FILE"
  exit 1
}
trap 'on_error $LINENO' ERR

log "INFO" "=== Build started ==="
log "INFO" "Source: src/main.scad"

# Build — capture stderr, show on screen, and append to log
if ! openscad -o build/main.stl src/main.scad 2>&1 | tee -a "$LOG_FILE"; then
  log "ERROR" "OpenSCAD exited with error"
  exit 1
fi

# Verify the output file was actually created and has reasonable size
STL_PATH="build/main.stl"
if [ ! -f "$STL_PATH" ]; then
  log "ERROR" "STL file not created: $STL_PATH"
  exit 1
fi

STL_SIZE=$(stat -c%s "$STL_PATH")
if [ "$STL_SIZE" -lt 1000 ]; then
  log "WARN" "STL file suspiciously small: ${STL_SIZE} bytes — may be empty geometry"
fi

log "INFO" "Build complete: $STL_PATH (${STL_SIZE} bytes)"
3dm info 2>&1 | tee -a "$LOG_FILE"
log "INFO" "=== Build finished ==="
```

### Error Handling in PowerShell

PowerShell uses try/catch blocks and checks the `$LASTEXITCODE` variable (which holds the exit code of the last external command) to detect failures. The key difference from bash: PowerShell doesn't automatically stop on error — you must check `$LASTEXITCODE` yourself after every external command.

```powershell
# build.ps1 — robust build script for Windows

param(
    [string]$Source    = "src\main.scad",
    [string]$Output    = "build\main.stl",
    [string]$LogDir    = "build\logs"
)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
New-Item -ItemType Directory -Force -Path $LogDir, "build" | Out-Null
$logFile = Join-Path $LogDir "build_$timestamp.log"

function Write-Log {
    param([string]$Level, [string]$Message)
    $entry = "[$(Get-Date -Format 'HH:mm:ss')] [$Level] $Message"
    Write-Host $entry
    Add-Content -Path $logFile -Value $entry
}

Write-Log "INFO" "=== Build started ==="
Write-Log "INFO" "Source: $Source"

try {
    $buildOutput = & openscad -o $Output $Source 2>&1
    $buildOutput | Tee-Object -FilePath $logFile -Append | Write-Host
    if ($LASTEXITCODE -ne 0) { throw "OpenSCAD returned exit code $LASTEXITCODE" }
} catch {
    Write-Log "ERROR" "Build failed: $_"
    exit 1
}

if (-not (Test-Path $Output)) {
    Write-Log "ERROR" "STL file not created: $Output"
    exit 1
}

$stlSize = (Get-Item $Output).Length
if ($stlSize -lt 1000) {
    Write-Log "WARN" "STL suspiciously small: $stlSize bytes"
}

Write-Log "INFO" "Build complete: $Output ($stlSize bytes)"
3dm info 2>&1 | Tee-Object -FilePath $logFile -Append
Write-Log "INFO" "=== Build finished ==="
```

---

## Step 3 — Batch Builds and Variant Generation

### The Concept: Parametric Variants at Scale

Now that you can build reliably with error handling, you can automate the generation of multiple variants. The pattern is simple: loop over a list of parameter combinations, run a build for each, name the output file to reflect the parameters used.

Good output naming is critical. A file called `main.stl` tells you nothing. A file called `bracket_w80_h60_wall2.stl` tells you exactly what parameters produced it — you can reconstruct the build command just from the filename.

### Batch Build in bash

```bash
#!/bin/bash
# batch_variants.sh

set -e
set -u
set -o pipefail

OUTPUT_DIR="build/variants"
mkdir -p "$OUTPUT_DIR"

SUCCESS=0
FAIL=0
FAILED_BUILDS=()

for WIDTH in 60 80 100 120; do
  for WALL in 1.2 1.6 2.0; do
    NAME="bracket_w${WIDTH}_wall${WALL/./_}"
    OUT="$OUTPUT_DIR/${NAME}.stl"

    echo "Building: $NAME ..."
    if openscad -D "width=${WIDTH}" -D "wall=${WALL}" \
                -o "$OUT" src/main.scad 2>/dev/null; then
      echo "  OK: $OUT"
      SUCCESS=$((SUCCESS + 1))
    else
      echo "  FAILED: $NAME"
      FAIL=$((FAIL + 1))
      FAILED_BUILDS+=("$NAME")
    fi
  done
done

echo ""
echo "=== Batch complete: $SUCCESS succeeded, $FAIL failed ==="
if [ ${#FAILED_BUILDS[@]} -gt 0 ]; then
  echo "Failed builds:"
  for b in "${FAILED_BUILDS[@]}"; do
    echo "  - $b"
  done
  exit 1
fi
```

### Batch Build in PowerShell

```powershell
# batch_variants.ps1

$outputDir = "build\variants"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$success = 0
$fail    = 0
$failed  = @()

foreach ($width in @(60, 80, 100, 120)) {
  foreach ($wall in @(1.2, 1.6, 2.0)) {
    $wallStr = "$wall" -replace '\.', '_'
    $name    = "bracket_w${width}_wall${wallStr}"
    $out     = "$outputDir\${name}.stl"

    Write-Host "Building: $name ..."
    & openscad -D "width=$width" -D "wall=$wall" -o $out src\main.scad 2>$null
    if ($LASTEXITCODE -eq 0 -and (Test-Path $out)) {
      Write-Host "  OK: $out"
      $success++
    } else {
      Write-Host "  FAILED: $name"
      $fail++
      $failed += $name
    }
  }
}

Write-Host ""
Write-Host "=== Batch complete: $success succeeded, $fail failed ==="
if ($failed.Count -gt 0) {
  Write-Host "Failed builds:"
  $failed | ForEach-Object { Write-Host "  - $_" }
  exit 1
}
```

---

## Step 4 — Timestamped Archiving

### Why Archive Builds?

Imagine you printed a part two weeks ago that fit perfectly. Now you've made some changes to the model, and the new version doesn't fit. You need to go back to the version that worked — but you only have one `build/main.stl` file, which has been overwritten.

Timestamped archiving solves this. Every successful build is saved with a timestamp in its filename. You can always go back to any previous version. Over time, you build a history of exactly when each change was made.

### Archive Script

```bash
#!/bin/bash
# archive_build.sh

set -e
set -u

ARCHIVE_DIR="build/archive"
mkdir -p "$ARCHIVE_DIR"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ARCHIVE_NAME="main_${TIMESTAMP}.stl"

# Build
3dm build

# Archive the successful result
cp build/main.stl "$ARCHIVE_DIR/$ARCHIVE_NAME"
echo "Archived: $ARCHIVE_DIR/$ARCHIVE_NAME"

# Optional: remove archives older than 30 days
find "$ARCHIVE_DIR" -name "*.stl" -mtime +30 -delete
echo "Old archives cleaned."
```

---

## Step 5 — Watch Mode

### The Concept: Automatic Rebuild on Save

Watch mode is a script that monitors your source files and automatically runs a build whenever a file changes. Instead of switching to your terminal and running `3dm build` every time you save a change in your editor, the script does it for you.

This creates a tight feedback loop: save your `.scad` file, glance at the terminal, and the new build result is already there. It's like having an assistant who runs the build the instant you save.

### How Watch Mode Works

There are two approaches:

**Poll-based:** Check the file's modification timestamp every few seconds. If it changed since the last check, trigger a rebuild. Simple to implement; works everywhere. Slightly wasteful — you're checking constantly even when nothing changes.

**Event-based:** The operating system notifies you the instant a file changes (using `inotify` on Linux, `FSEvents` on macOS, `FileSystemWatcher` on Windows). More efficient; responds immediately. More complex to set up.

For development workflows, the poll-based approach is usually good enough.

```bash
#!/bin/bash
# watch_and_build.sh — poll-based watch mode

set -u

WATCH_FILE="src/main.scad"
POLL_INTERVAL=2   # seconds between checks

echo "Watching: $WATCH_FILE (Ctrl+C to stop)"

LAST_MOD=""

while true; do
  CURRENT_MOD=$(stat -c%Y "$WATCH_FILE" 2>/dev/null || echo "0")

  if [ "$CURRENT_MOD" != "$LAST_MOD" ]; then
    LAST_MOD="$CURRENT_MOD"
    if [ -n "$LAST_MOD" ] && [ "$LAST_MOD" != "0" ]; then
      echo ""
      echo "[$(date +%H:%M:%S)] Change detected — rebuilding..."
      3dm build && echo "  Build OK" || echo "  Build FAILED"
    fi
  fi

  sleep "$POLL_INTERVAL"
done
```

```powershell
# watch_and_build.ps1 — poll-based watch mode for Windows

$watchFile    = "src\main.scad"
$pollInterval = 2  # seconds

Write-Host "Watching: $watchFile (Ctrl+C to stop)"

$lastMod = $null

while ($true) {
    if (Test-Path $watchFile) {
        $currentMod = (Get-Item $watchFile).LastWriteTime

        if ($currentMod -ne $lastMod) {
            $lastMod = $currentMod
            if ($null -ne $lastMod) {
                Write-Host ""
                Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Change detected — rebuilding..."
                & 3dm build
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "  Build OK"
                } else {
                    Write-Host "  Build FAILED"
                }
            }
        }
    }
    Start-Sleep -Seconds $pollInterval
}
```

---

## Step 6 — CI/CD Integration

### What CI/CD Means

CI/CD stands for **Continuous Integration / Continuous Deployment**. In software development, CI/CD means that every time you push code to a shared repository, an automated system builds and tests your project in a clean environment — not on your computer, but on a server in the cloud.

For a 3D printing project, CI/CD means:

- Every time you commit a change to your `.scad` files, GitHub automatically builds your STL
- If the build fails (syntax error, empty geometry, etc.), you get an email notification immediately
- The built STL is saved as a downloadable artifact — you can prove to anyone that this exact commit produced this exact file
- You can track exactly when changes were made and whether they broke anything

This sounds like overkill for a hobby project — but even for personal projects, CI/CD is a useful safety net. It catches problems you might miss locally, and it creates a reliable record of your design history.

### How GitHub Actions Works

GitHub Actions is a CI/CD system built into GitHub. You define a "workflow" in a YAML file inside your repository. The workflow runs automatically on events you specify — such as every push to the `main` branch.

The workflow runs on a fresh Ubuntu virtual machine in GitHub's cloud. It has no memory of previous builds. Every run starts from scratch: clone the repository, install dependencies, run the build, save the output.

```yaml
# .github/workflows/build.yml
# This file tells GitHub Actions what to do on every push.

name: Build STL

on:
  push:
    paths:
      - "src/**" # only trigger when .scad files change

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Install OpenSCAD
        run: |
          sudo apt-get update
          sudo apt-get install -y openscad

      - name: Install 3dMake
        run: curl -fsSL https://get.3dmake.dev | bash

      - name: Build
        run: |
          3dm build
          3dm info

      - name: Verify STL exists and has reasonable size
        run: |
          test -f build/main.stl
          SIZE=$(stat -c%s build/main.stl)
          echo "STL size: $SIZE bytes"
          test "$SIZE" -gt 1000

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: stl-output-${{ github.sha }}
          path: build/main.stl
```

When this is set up, every push to the repository triggers a fresh build in GitHub's cloud. If the build fails, you get an email notification. The built STL is saved as an artifact you can download directly from the GitHub interface.

### What Each Section Does

**`on: push: paths:`** — Only run the workflow when files in the `src/` directory change. This prevents the workflow from running when you update the README, for example.

**`runs-on: ubuntu-latest`** — Use GitHub's latest Ubuntu virtual machine. This is a standard Linux environment with nothing pre-installed.

**`actions/checkout@v4`** — Clone your repository into the virtual machine. Without this, the machine has no idea what your project looks like.

**`Install OpenSCAD` / `Install 3dMake`** — Install your build tools. Every run starts fresh, so tools must be installed every time.

**`Build`** — Run your build. If this fails (non-zero exit code), the whole workflow fails.

**`Verify STL exists and has reasonable size`** — An explicit sanity check. `test -f` verifies the file exists. `test "$SIZE" -gt 1000` verifies it's not empty.

**`Upload artifact`** — Save the built STL so you can download it from GitHub. The `${{ github.sha }}` part includes the commit hash in the artifact name, so you always know which commit produced which STL.

---

## Exercises

**Exercise 9.1:** Adapt the batch_variants script to your platform. Generate your phone stand at 5 different `stand_angle` values (30°, 45°, 60°, 70°, 80°). Log the bounding box for each to a file.

**Exercise 9.2:** Write a build script in your preferred shell that: (1) builds the model, (2) verifies the STL size is > 10,000 bytes, (3) archives the result with a timestamp if the build succeeds, (4) prints a failure message to the console if it fails.

**Exercise 9.3 (Advanced):** Create a parametric `Makefile` (Linux/macOS) or a PowerShell `Invoke-Build` task file (Windows) with separate targets: `build`, `clean`, `variants`, `archive`, and `test`. Running `make all` should run all targets in the correct order.

---

## Quiz — Lesson 3dMake.9 (15 questions)

1. What does `set -e` do in a bash script?
2. Why is passing string parameters with `-D` more complex than passing numeric parameters?
3. What does `trap 'on_error $LINENO' ERR` do in a bash script?
4. What is the correct way to pass `label="FRONT"` as an OpenSCAD `-D` argument in bash?
5. What does `set -u` protect against?
6. How would you verify that an output STL was actually created in a build script?
7. What is a "silent failure" in the context of automation, and how do you prevent one?
8. In PowerShell, what character is used to escape a double quote inside a double-quoted string?
9. What does `$LASTEXITCODE` contain in a PowerShell script after running an external command?
10. Describe the purpose of a timestamped build archive and when you would use it.
11. What is CI/CD, and how does it apply to a 3D printing project workflow?
12. True or False: In CMD, doubled double-quotes inside a quoted string produce a single literal double-quote.
13. Explain the difference between a poll-based file watcher and an event-based file watcher. What are the trade-offs?
14. In a GitHub Actions workflow, what does `on: push: paths: - 'src/**'` specify?
15. If a batch build script runs 10 builds and each may succeed or fail independently, describe the logic for reporting: total built, total failed, and which specific builds failed.

---

## Extension Problems (15)

1. Write a batch build script that tests 10 parameter combinations and generates a summary report with pass/fail status for each.
2. Create a "golden master" verification script: build your reference model, save the bounding box, then verify that future builds match those dimensions within 0.1 mm.
3. Implement the timestamped archive system and add a rotation policy: automatically delete archives older than 30 days.
4. Build a Git pre-commit hook that runs `3dm build` and fails the commit if the build doesn't succeed.
5. Create a build dashboard: a script that runs all your projects' builds, collects their `3dm info` outputs, and formats them into a summary report.
6. Implement parallel builds: run multiple OpenSCAD builds simultaneously using background processes or PowerShell jobs. Measure the speedup.
7. Create a "changelog" generator: compare the bounding boxes of all archived builds and generate a list of which builds had dimension changes.
8. Write a CI/CD pipeline configuration for GitLab CI or Bitbucket Pipelines (instead of GitHub Actions).
9. Build a build notification system: send a Slack message or email when a build fails.
10. Create a "test suite" of deliberately bad `.scad` files (empty geometry, non-manifold shapes, syntax errors) and verify your build script catches all of them.
11. Implement semantic versioning in your build system: automatically increment a patch version number on each successful build.
12. Write a multi-platform build script that detects the current OS and uses the appropriate commands (bash on Linux/macOS, PowerShell on Windows).
13. Create a build matrix: for each of 5 designs × 4 materials, build the design with material-specific parameters and verify each output.
14. Implement a "regression test": store the bounding box of each successful build, and flag any build where the bounding box changes unexpectedly.
15. Research and implement "build caching": skip rebuilds when the source file hasn't changed since the last successful build.

---

## References and Helpful Resources

[^1]: Bash Reference Manual — https://www.gnu.org/software/bash/manual/bash.html

[^2]: PowerShell Documentation — https://docs.microsoft.com/en-us/powershell/

[^3]: GitHub Actions Documentation — https://docs.github.com/en/actions

[^4]: 3DMake GitHub Repository — https://github.com/tdeck/3dmake

### Supplemental Resources

- Programming with OpenSCAD EPUB Textbook — assets/Programming_with_OpenSCAD.epub
- 3DMake GitHub Repository — https://github.com/tdeck/3dmake
- OpenSCAD User Manual — https://en.wikibooks.org/wiki/OpenSCAD_User_Manual
