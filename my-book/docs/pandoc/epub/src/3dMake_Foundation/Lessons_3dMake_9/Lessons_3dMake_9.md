[Header 3 ("lesson-9--automation-and-3dm-workflows", [], []) [Str "Lesson 9 — Automation and 3dm Workflows"], HorizontalRule, Header 4 ("learning-objectives", ["unnumbered", "unlisted"], []) [Str "Learning Objectives"], Para [Str "By the end of this lesson you will be able to:"], BulletList [[Plain [Str "Write robust automation scripts in bash (Linux/macOS), PowerShell (Windows), and CMD (Windows legacy)"]], [Plain [Str "Use proper error handling, logging, and trap/exit patterns for unattended builds"]], [Plain [Str "Pass string and numeric parameters correctly to ", Code ("", [], []) "openscad -D", Str " from all three shells"]], [Plain [Str "Automate batch builds, archiving, and variant generation"]], [Plain [Str "Integrate 3dMake automation into CI/CD pipelines"]]], HorizontalRule, Header 4 ("step-1--the-openscad--d-flag-and-parameter-passing", ["unnumbered", "unlisted"], []) [Str "Step 1 — The OpenSCAD ", Code ("", [], []) "-D", Str " Flag and Parameter Passing"], Para [Str "The ", Code ("", [], []) "-D", Str " flag overrides any variable in your ", Code ("", [], []) ".scad", Str " file at build time. No file editing required."], Header 5 ("numeric-parameters--all-shells", ["unnumbered", "unlisted"], []) [Str "Numeric parameters — all shells"], CodeBlock ("", ["bash"], []) "# Linux/macOS/Windows — identical syntax for numbers
openscad -D \"width=50\" -D \"height=15\" -o output.stl src/main.scad
openscad -D \"width=50\" -D \"height=15\" -D \"wall=2.5\" -o output.stl src/main.scad
", Header 5 ("string-parameters--quoting-rules-differ-by-shell", ["unnumbered", "unlisted"], []) [Str "String parameters — quoting rules differ by shell"], Para [Strong [Str "This is the #1 source of silent failures."], Str " Strings need quotes inside the ", Code ("", [], []) "-D", Str " value, but those quotes must survive shell expansion."], Header 6 ("linux--macos-bash", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "# CORRECT: single quotes around the whole -D value preserve the inner double quotes
openscad -D 'label=\"FRONT\"' -o out.stl src.main.scad

# CORRECT: escaped double quotes inside double-quoted string
openscad -D \"label=\\\"FRONT\\\"\" -o out.stl src.main.scad

# CORRECT: use a variable and escape it
LABEL=\"FRONT PANEL\"
openscad -D \"label=\\\"${LABEL}\\\"\" -o out.stl src.main.scad

# VERIFY: always echo the command before running for debugging
echo \"openscad -D 'label=\\\"${LABEL}\\\"' -o out.stl src.main.scad\"

# WRONG — the string parameter will be malformed
openscad -D \"label=FRONT\" -o out.stl src.main.scad    # missing quotes around value
openscad -D 'label=FRONT' -o out.stl src.main.scad    # same problem
", Header 6 ("windows-powershell", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# CORRECT: use escaped backtick-quotes for inner quotes in PowerShell
openscad -D 'label=\"FRONT\"' -o out.stl src\\main.scad

# CORRECT: explicit escape with backtick
$label = \"FRONT PANEL\"
openscad -D \"label=`\"$label`\"\" -o out.stl src\\main.scad

# CORRECT: build the argument string first, then pass it
$dArg = 'label=\"' + $label + '\"'
openscad -D $dArg -o out.stl src\\main.scad

# VERIFY: display the argument before using it
Write-Host \"D argument: $dArg\"
", Header 6 ("windows-cmd", ["unnumbered", "unlisted"], []) [Str "Windows (CMD)"], CodeBlock ("", ["cmd"], []) "REM CMD double-quote rule: use two double-quotes inside a quoted string to produce one
openscad -D \"label=\"\"FRONT\"\"\" -o out.stl src\\main.scad

REM With a variable
SET LABEL=FRONT
openscad -D \"label=\"\"%LABEL%\"\"\" -o out.stl src\\main.scad

REM VERIFY: echo first
echo label=\"\"%LABEL%\"\"
", HorizontalRule, Header 4 ("step-2--robust-error-handling", ["unnumbered", "unlisted"], []) [Str "Step 2 — Robust Error Handling"], Header 5 ("linux--macos-bash-1", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# build.sh — robust build script with logging and error handling

set -e    # exit immediately on any error
set -u    # treat unset variables as errors
set -o pipefail  # catch errors inside pipes

LOG_DIR=\"build/logs\"
LOG_FILE=\"$LOG_DIR/build_$(date +%Y%m%d_%H%M%S).log\"
mkdir -p \"$LOG_DIR\" build

# Logging function
log() {
  local level=\"$1\"
  shift
  echo \"[$(date +%H:%M:%S)] [$level] $*\" | tee -a \"$LOG_FILE\"
}

# Trap: runs on any ERR signal — prints which line failed
on_error() {
  log \"ERROR\" \"Build failed at line $1. Check: $LOG_FILE\"
  exit 1
}
trap 'on_error $LINENO' ERR

log \"INFO\" \"=== Build started ===\"
log \"INFO\" \"Source: src/main.scad\"

# Build — capture stderr to log, also show on screen
if ! openscad -o build/main.stl src/main.scad 2>&1 | tee -a \"$LOG_FILE\"; then
  log \"ERROR\" \"OpenSCAD exited with error\"
  exit 1
fi

# Verify output exists and is non-trivial
STL_PATH=\"build/main.stl\"
if [ ! -f \"$STL_PATH\" ]; then
  log \"ERROR\" \"STL file not created: $STL_PATH\"
  exit 1
fi

STL_SIZE=$(stat -c%s \"$STL_PATH\")
if [ \"$STL_SIZE\" -lt 1000 ]; then
  log \"WARN\" \"STL file is suspiciously small: ${STL_SIZE} bytes — check for empty geometry\"
fi

log \"INFO\" \"Build complete: $STL_PATH (${STL_SIZE} bytes)\"

# Run 3dm info and log the result
3dm info 2>&1 | tee -a \"$LOG_FILE\"

log \"INFO\" \"=== Build finished ===\"
", Header 5 ("windows-powershell-1", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# build.ps1 — robust build script for Windows

param(
    [string]$Source    = \"src\\main.scad\",
    [string]$Output    = \"build\\main.stl\",
    [string]$LogDir    = \"build\\logs\"
)

# Setup
$timestamp = Get-Date -Format \"yyyyMMdd_HHmmss\"
New-Item -ItemType Directory -Force -Path $LogDir, \"build\" | Out-Null
$logFile = Join-Path $LogDir \"build_$timestamp.log\"

function Write-Log {
    param([string]$Level, [string]$Message)
    $entry = \"[$(Get-Date -Format 'HH:mm:ss')] [$Level] $Message\"
    Write-Host $entry
    Add-Content -Path $logFile -Value $entry
}

Write-Log \"INFO\" \"=== Build started ===\"
Write-Log \"INFO\" \"Source: $Source\"

# Run OpenSCAD — capture output
try {
    $buildOutput = & openscad -o $Output $Source 2>&1
    $buildOutput | Tee-Object -FilePath $logFile -Append | Write-Host
    if ($LASTEXITCODE -ne 0) { throw \"OpenSCAD returned exit code $LASTEXITCODE\" }
} catch {
    Write-Log \"ERROR\" \"Build failed: $_\"
    exit 1
}

# Validate output
if (-not (Test-Path $Output)) {
    Write-Log \"ERROR\" \"STL file not created: $Output\"
    exit 1
}

$stlSize = (Get-Item $Output).Length
if ($stlSize -lt 1000) {
    Write-Log \"WARN\" \"STL suspiciously small: $stlSize bytes\"
}

Write-Log \"INFO\" \"Build complete: $Output ($stlSize bytes)\"
& 3dm info 2>&1 | Tee-Object -FilePath $logFile -Append | Write-Host
Write-Log \"INFO\" \"=== Build finished ===\"
", Header 5 ("windows-cmd-1", ["unnumbered", "unlisted"], []) [Str "Windows (CMD)"], CodeBlock ("", ["cmd"], []) "@echo off
REM build.cmd — minimal build script for CMD
REM For production use, prefer PowerShell (build.ps1)

setlocal

SET SOURCE=src\\main.scad
SET OUTPUT=build\\main.stl
SET LOGFILE=build\\build.log

echo [%TIME%] Build started >> %LOGFILE%
echo [%TIME%] Source: %SOURCE% >> %LOGFILE%

openscad -o %OUTPUT% %SOURCE% >> %LOGFILE% 2>&1

IF %ERRORLEVEL% NEQ 0 (
    echo [%TIME%] ERROR: OpenSCAD failed >> %LOGFILE%
    echo Build FAILED. Check %LOGFILE%
    exit /b 1
)

IF NOT EXIST %OUTPUT% (
    echo [%TIME%] ERROR: STL not created >> %LOGFILE%
    echo Build FAILED: STL file missing
    exit /b 1
)

echo [%TIME%] Build complete: %OUTPUT% >> %LOGFILE%
echo Build OK.
3dm info >> %LOGFILE% 2>&1
type %LOGFILE%
", HorizontalRule, Header 4 ("step-3--batch-build-generate-parameter-variants", ["unnumbered", "unlisted"], []) [Str "Step 3 — Batch Build: Generate Parameter Variants"], Header 5 ("linux--macos-bash-2", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# batch_variants.sh — generate multiple STL variants from one source

set -e

mkdir -p build/variants

# Numeric variant: different sizes
widths=(20 30 40 50 80)
for w in \"${widths[@]}\"; do
  output=\"build/variants/box_w${w}.stl\"
  echo \"Building: width=$w -> $output\"
  openscad -D \"width=$w\" -o \"$output\" src/main.scad
  size=$(stat -c%s \"$output\")
  echo \"  OK: ${size} bytes\"
done

# String variant: different labels
declare -A labels=(
  [\"front\"]=\"FRONT\"
  [\"back\"]=\"BACK\"
  [\"top\"]=\"TOP\"
)
for key in \"${!labels[@]}\"; do
  label=\"${labels[$key]}\"
  output=\"build/variants/label_${key}.stl\"
  echo \"Building: label=\\\"$label\\\" -> $output\"
  openscad -D \"label=\\\"${label}\\\"\" -o \"$output\" src/main.scad
  echo \"  OK\"
done

echo \"Done: $(ls build/variants/*.stl | wc -l) files in build/variants/\"
", Header 5 ("windows-powershell-2", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# batch_variants.ps1 — generate parameter variants on Windows

New-Item -ItemType Directory -Force -Path \"build\\variants\" | Out-Null

# Numeric variants
$widths = @(20, 30, 40, 50, 80)
foreach ($w in $widths) {
    $output = \"build\\variants\\box_w$w.stl\"
    Write-Host \"Building: width=$w -> $output\"
    openscad -D \"width=$w\" -o $output src\\main.scad
    if ($LASTEXITCODE -eq 0) {
        $size = (Get-Item $output).Length
        Write-Host \"  OK: $size bytes\"
    } else {
        Write-Host \"  FAILED\"
    }
}

# String variants
$labels = @{
    \"front\" = \"FRONT\"
    \"back\"  = \"BACK\"
    \"top\"   = \"TOP\"
}
foreach ($key in $labels.Keys) {
    $label  = $labels[$key]
    $output = \"build\\variants\\label_$key.stl\"
    Write-Host \"Building: label=`\"$label`\" -> $output\"
    openscad -D \"label=`\"$label`\"\" -o $output src\\main.scad
    if ($LASTEXITCODE -eq 0) { Write-Host \"  OK\" } else { Write-Host \"  FAILED\" }
}

$count = (Get-ChildItem \"build\\variants\\*.stl\").Count
Write-Host \"Done: $count files in build\\variants\\\"
", Header 5 ("windows-cmd-2", ["unnumbered", "unlisted"], []) [Str "Windows (CMD)"], CodeBlock ("", ["cmd"], []) "@echo off
REM batch_variants.cmd — numeric and string variants in CMD

mkdir build\\variants 2>nul

REM Numeric variants
FOR %%W IN (20 30 40 50 80) DO (
    echo Building: width=%%W
    openscad -D \"width=%%W\" -o \"build\\variants\\box_w%%W.stl\" src\\main.scad
    IF %ERRORLEVEL% EQU 0 (echo   OK) ELSE (echo   FAILED)
)

REM String variants — CMD requires doubled quotes
FOR %%L IN (FRONT BACK TOP) DO (
    echo Building: label=%%L
    openscad -D \"label=\"\"%%L\"\"\" -o \"build\\variants\\label_%%L.stl\" src\\main.scad
    IF %ERRORLEVEL% EQU 0 (echo   OK) ELSE (echo   FAILED)
)
echo Done.
", HorizontalRule, Header 4 ("step-4--timestamped-archiving", ["unnumbered", "unlisted"], []) [Str "Step 4 — Timestamped Archiving"], Para [Str "Archive a successful build with a timestamp so you can roll back to any previous version."], Header 5 ("linux--macos-bash-3", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# archive.sh — archive a successful build

set -e

TIMESTAMP=$(date +\"%Y%m%d_%H%M%S\")
ARCHIVE_DIR=\"archives/$TIMESTAMP\"

mkdir -p \"$ARCHIVE_DIR\"

# Copy build artifacts and source
cp build/main.stl  \"$ARCHIVE_DIR/\"
cp src/main.scad   \"$ARCHIVE_DIR/\"

# Write metadata
cat > \"$ARCHIVE_DIR/BUILD_INFO.txt\" <<EOF
Build timestamp: $TIMESTAMP
Source:          src/main.scad
Git commit:      $(git rev-parse --short HEAD 2>/dev/null || echo \"no git\")
3dm info output:
$(3dm info)
EOF

echo \"Archived to: $ARCHIVE_DIR\"
echo \"Contents:\"
ls -lh \"$ARCHIVE_DIR/\"
", Header 5 ("windows-powershell-3", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# archive.ps1 — timestamped build archive

$timestamp  = Get-Date -Format \"yyyyMMdd_HHmmss\"
$archiveDir = \"archives\\$timestamp\"

New-Item -ItemType Directory -Force -Path $archiveDir | Out-Null

Copy-Item \"build\\main.stl\" $archiveDir
Copy-Item \"src\\main.scad\"  $archiveDir

# Write metadata
$gitHash = try { git rev-parse --short HEAD 2>$null } catch { \"no git\" }
$info    = & 3dm info 2>&1 | Out-String

@\"
Build timestamp: $timestamp
Source:          src/main.scad
Git commit:      $gitHash
3dm info output:
$info
\"@ | Out-File \"$archiveDir\\BUILD_INFO.txt\" -Encoding UTF8

Write-Host \"Archived to: $archiveDir\"
Get-ChildItem $archiveDir | Format-Table Name, Length
", Header 5 ("windows-cmd-3", ["unnumbered", "unlisted"], []) [Str "Windows (CMD)"], CodeBlock ("", ["cmd"], []) "@echo off
REM archive.cmd — basic timestamped archive in CMD

REM Build timestamp from date/time (format varies by locale)
FOR /f \"tokens=2 delims==\" %%D IN ('wmic os get localdatetime /value') DO SET DT=%%D
SET TIMESTAMP=%DT:~0,8%_%DT:~8,6%
SET ARCHIVE=archives\\%TIMESTAMP%

mkdir %ARCHIVE% 2>nul
copy build\\main.stl %ARCHIVE%\\
copy src\\main.scad  %ARCHIVE%\\

echo Build timestamp: %TIMESTAMP% > %ARCHIVE%\\BUILD_INFO.txt
3dm info >> %ARCHIVE%\\BUILD_INFO.txt 2>&1

echo Archived to: %ARCHIVE%
dir %ARCHIVE%
", HorizontalRule, Header 4 ("step-5--watch-mode-and-continuous-build", ["unnumbered", "unlisted"], []) [Str "Step 5 — Watch Mode and Continuous Build"], Para [Str "For an iterative design workflow, watch for changes and rebuild automatically."], Header 5 ("linux--macos-bash-4", ["unnumbered", "unlisted"], []) [Str "Linux / macOS (bash)"], CodeBlock ("", ["bash"], []) "#!/bin/bash
# watch.sh — rebuild whenever src/ changes (requires inotifywait or entr)

# Method 1: Using 3dm watch (built-in)
3dm watch

# Method 2: Using entr (install with: apt install entr / brew install entr)
# ls src/*.scad | entr -c bash -c '3dm build && 3dm info'

# Method 3: Poll-based fallback (works anywhere)
PREV=\"\"
while true; do
  CURR=$(find src/ -name \"*.scad\" -newer /tmp/last_build 2>/dev/null | head -1)
  if [ -n \"$CURR\" ]; then
    echo \"[$(date +%H:%M:%S)] Change detected: $CURR\"
    3dm build && 3dm info
    touch /tmp/last_build
  fi
  sleep 2
done
", Header 5 ("windows-powershell-4", ["unnumbered", "unlisted"], []) [Str "Windows (PowerShell)"], CodeBlock ("", ["powershell"], []) "# watch.ps1 — poll for changes and rebuild

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path   = \"src\"
$watcher.Filter = \"*.scad\"
$watcher.EnableRaisingEvents = $true

Write-Host \"Watching src/*.scad for changes. Press Ctrl+C to stop.\"

while ($true) {
    $changed = Wait-Event -SourceIdentifier FileSystemWatcher -Timeout 2
    if ($changed) {
        Remove-Event -SourceIdentifier FileSystemWatcher
        Write-Host \"[$(Get-Date -Format 'HH:mm:ss')] Change detected — rebuilding...\"
        & 3dm build
        & 3dm info
    }
}
", HorizontalRule, Header 4 ("step-6--cicd-integration", ["unnumbered", "unlisted"], []) [Str "Step 6 — CI/CD Integration"], Para [Str "Integrate 3dMake builds into a CI pipeline (GitHub Actions example shown, adaptable to others)."], CodeBlock ("", ["yaml"], []) "# .github/workflows/build.yml
name: 3dMake Build

on:
  push:
    paths:
      - 'src/**'
  pull_request:
    paths:
      - 'src/**'

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

      - name: Verify STL exists and has size
        run: |
          test -f build/main.stl
          SIZE=$(stat -c%s build/main.stl)
          echo \"STL size: $SIZE bytes\"
          test \"$SIZE\" -gt 1000

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: stl-output-${{ github.sha }}
          path: build/main.stl
", HorizontalRule, Header 4 ("exercises", ["unnumbered", "unlisted"], []) [Str "Exercises"], Para [Strong [Str "Exercise 9.1:"], Str " Adapt the ", Code ("", [], []) "batch_variants.sh", Str "/", Code ("", [], []) ".ps1", Str "/", Code ("", [], []) ".cmd", Str " script to your platform. Generate your phone stand at 5 different ", Code ("", [], []) "stand_angle", Str " values (30°, 45°, 60°, 70°, 80°). Log the bounding box for each to a file."], Para [Strong [Str "Exercise 9.2:"], Str " Write a build script in your preferred shell that:"], OrderedList (1, DefaultStyle, DefaultDelim) [[Plain [Str "Builds the model"]], [Plain [Str "Verifies the STL size is > 10,000 bytes"]], [Plain [Str "Archives the result with a timestamp if the build succeeds"]], [Plain [Str "Sends a failure message to the console (and optionally an email) if it fails"]]], Para [Strong [Str "Exercise 9.3 (Advanced):"], Str " Create a parametric ", Code ("", [], []) "Makefile", Str " (Linux/macOS) and/or a PowerShell ", Code ("", [], []) "Invoke-Build", Str " task file (Windows) that has separate targets: ", Code ("", [], []) "build", Str ", ", Code ("", [], []) "clean", Str ", ", Code ("", [], []) "variants", Str ", ", Code ("", [], []) "archive", Str ", and ", Code ("", [], []) "test", Str " (runs batch_verify). Running ", Code ("", [], []) "make all", Str " or ", Code ("", [], []) "Invoke-Build all", Str " should run all targets in the correct order."]]