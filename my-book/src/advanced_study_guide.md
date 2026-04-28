# Advanced Study Guide
## CLI Foundations & 3dMake Certification

**Format:** Each lesson contains 10 questions.
- **Questions 1–5 (Fix the Code):** Each block contains {{i:one}} or more deliberate errors. Identify every {{i:error}} and {{i:write}} a corrected version.
- **Questions 6–10 (Comment the Code):** Each block is correct but uncommented. Add a meaningful inline or block comment to every significant line or section.

---

# PART 1 — {{i:PowerShell}}

---

## {{i:PowerShell}} — Lesson Pre: Your First Terminal

### Fix the Code (Questions 1–5)

**Q1.** This {{i:script}} is supposed to show the current directory and list {{i:files}}, but it uses the wrong {{i:commands}}.
```powershell
location
list -names
```

**Q2.** The user wants to {{i:create}} a {{i:file}} with content, then read it back. Two {{i:commands}} are wrong.
```powershell
print "Hello PowerShell" > notes.txt
read notes.txt
```

**Q3.** The user wants to open a {{i:file}} in Notepad. The path separator and {{i:command}} {{i:name}} are wrong.
```powershell
notepad notes/txt
```

**Q4.** This snippet is supposed to stop a running {{i:command}}, clear the screen, and go home. One keyboard shortcut description is wrong, and {{i:one}} {{i:command}} is wrong.
```powershell
# Press Ctrl+X to stop a running command
# Press Ctrl+L to clear the screen
# Type the following and press Enter to go home:
home
```

**Q5.** This {{i:script}} should save the {{i:file}} listing to a {{i:file}}, then open it. The redirection operator and the open {{i:command}} are both wrong.
```powershell
ls -n >> directory_list.txt
open directory_list.txt
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add a comment to every line explaining what it does.
```powershell
pwd
ls -n
cd Documents
pwd
ls -n
```

**Q7.** Add {{hi:Comments}}comments explaining what {{i:each}} {{i:part}} of this {{i:file}}-creation {{i:workflow}} does.
```powershell
echo "Test content" > test.txt
cat test.txt
echo "Line 2" >> test.txt
cat test.txt
```

**Q8.** Add comments explaining {{i:each}} step of this tab-completion demonstration {{i:script}}.
```powershell
cd ~
ls -n
cd Doc
```
*(Note: the third line is intentionally incomplete — the user would press Tab here.)*

**Q9.** Add comments to this {{i:output}}-redirection {{i:workflow}} explaining why {{i:each}} step is needed.
```powershell
ls -n > big_list.txt
notepad.exe big_list.txt
ls -n | findstr "scad"
```

**Q10.** Add comments explaining {{i:each}} keyboard shortcut and what it accomplishes for screen {{i:reader}} users.
```powershell
# Up Arrow
# Down Arrow
# Tab
# Ctrl+C
# Ctrl+L
```

---

## {{i:PowerShell}} — Lesson 0: Getting Started — Paths and the {{i:Shell}}

### Fix the Code (Questions 1–5)

**Q1.** This {{i:script}} navigates to a nested folder but uses wrong path notation for {{i:Windows}} {{hi:{{i:PowerShell}}}}{{i:PowerShell}}.
```powershell
cd ~/Documents/Projects
cd ../
pwd
```
*(Hint: the second line uses a Linux-style relative path — valid, but the {{i:first}} line also has an issue on some systems. Focus on the separator convention and the go-home shortcut used.)*

**Q2.** The user wants to navigate to a folder whose {{i:name}} contains a space. The {{i:command}} is missing required syntax.
```powershell
cd My Projects
```

**Q3.** This {{i:script}} checks the current path, then navigates {{i:using}} an absolute path that is wrongly constructed.
```powershell
pwd
cd C:/Users/Student/Documents
```

**Q4.** The {{i:script}} is supposed to list only {{i:file}} names (not full details). The flag is wrong.
```powershell
ls -l
```

**Q5.** The {{i:3DMake}} project setup sequence has a {{i:command}} {{i:error}} — the wrong operator is used to initialize the project.
```powershell
mkdir ~/Documents/3d_projects/my_cube
cd ~/Documents/3d_projects/my_cube
3dm create
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining what {{i:each}} path shortcut means and when {{i:you}} would use it.
```powershell
cd ~
cd ./subfolder
cd ../
cd $HOME
```

**Q7.** Add comments explaining the purpose of {{i:each}} line in this path-oriented {{i:script}}.
```powershell
pwd
ls -n
cd Documents
pwd
cd ~
pwd
```

**Q8.** Add comments explaining what tab completion is doing at {{i:each}} step.
```powershell
cd ~/D
cd ~/Documents/3d_p
ls -n
```
*(Note: {{i:first}} two lines show partial paths where Tab would be pressed.)*

**Q9.** Add comments to this {{i:3DMake}} quick-start sequence explaining {{i:each}} {{i:command}}'s role.
```powershell
cd ~/Downloads/3dmake
./3dm setup
mkdir ~/Documents/3d_projects
mkdir ~/Documents/3d_projects/my_cube
cd ~/Documents/3d_projects/my_cube
3dm new
ls -n
```

**Q10.** Add comments explaining {{i:each}} line of this prompt-anatomy {{i:reference}}.
```powershell
# PS C:\Users\Student\Documents>
pwd
ls -n
cd ..
pwd
```

---

## {{i:PowerShell}} — Lesson 1: Navigation

### Fix the Code (Questions 1–5)

**Q1.** This {{i:script}} tries to list only `.scad` {{i:files}} but uses the wrong filter syntax for {{i:PowerShell}}.
```powershell
ls -n *.scad
ls -n | findstr scad
```
*(The {{i:first}} line is correct — identify the {{i:error}} in the second line.)*

**Q2.** The {{i:script}} should navigate deep {{i:into}} a project structure and then return home in {{i:one}} {{i:command}}. The return {{i:command}} is wrong.
```powershell
cd ~/Documents/3d_projects/my_cube/src
cd /home
```

**Q3.** This loop is supposed to list all {{i:files}} but it uses a nonexistent {{i:PowerShell}} {{i:command}}.
```powershell
foreach ($f in ls -n *.txt) {
    print $f
}
```

**Q4.** The user wants to find all `.stl` {{i:files}} and save the results. The wildcard and redirection are both wrong.
```powershell
ls -n build/%.stl > results.txt
```

**Q5.** This {{i:script}} navigates to a project and verifies the {{i:build}} {{i:output}}, but the path separator and verify {{i:command}} are wrong.
```powershell
cd ~/Documents\3d_projects\my_cube
ls -n build/
Test-Exist build/main.stl
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} `ls` flag and what it produces.
```powershell
ls -n
ls -n *.scad
ls -n | findstr ".stl"
ls -n -af
```

**Q7.** Add comments to this multi-level {{i:navigation}} {{i:script}}.
```powershell
cd ~/Documents/3d_projects
pwd
cd my_cube
pwd
cd src
pwd
cd ../../..
pwd
```

**Q8.** Add comments explaining why {{i:each}} {{i:command}} exists in this verification {{i:workflow}}.
```powershell
cd ~/Documents/3d_projects/my_cube
pwd
ls -n
ls -n src/
ls -n build/
```

**Q9.** Add comments explaining the wildcard patterns used in {{i:each}} line.
```powershell
ls -n *.scad
ls -n part?.stl
ls -n *_final*
ls -n project_[1-3].scad
```

**Q10.** Add comments to this screen-{{i:reader}}-friendly {{i:output}}-saving {{i:workflow}}.
```powershell
ls -n > file_list.txt
notepad.exe file_list.txt
ls -n | findstr "scad"
ls -n | findstr "scad" > scad_list.txt
notepad.exe scad_list.txt
```

---

## {{i:PowerShell}} — Lesson 2: File and Folder Manipulation

### Fix the Code (Questions 1–5)

**Q1.** This {{i:script}} tries to {{i:copy}} a {{i:file}} but uses the wrong {{i:PowerShell}} cmdlet {{i:name}}.
```powershell
cp source.txt destination.txt
```

**Q2.** The user wants to delete a {{i:file}} but mistakenly uses the Linux {{i:command}}.
```powershell
rm old_draft.scad
```

**Q3.** This {{i:script}} creates a backup of an entire project folder, but the flag for recursive {{i:copy}} is missing.
```powershell
Copy-Item my_cube backup_cube
```

**Q4.** The folder-creation {{i:command}} is right but the subsequent verification uses the wrong flag for listing directories only.
```powershell
mkdir Models
mkdir Prints
mkdir Docs
ls -n -files
```

**Q5.** This safe-deletion sequence is out of order — verification happens after deletion instead of {{i:before}}.
```powershell
Remove-Item old_test.scad
ls -n *.scad
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining what {{i:each}} {{i:file}} operation does and what to verify afterwards.
```powershell
New-Item -ItemType File -Name "design.scad"
Copy-Item design.scad design_backup.scad
Move-Item design.scad archive/design_v1.scad
ls -n
```

**Q7.** Add comments to this folder-structure creation {{i:script}}.
```powershell
mkdir 3DProjects
cd 3DProjects
mkdir Models
mkdir Prints
mkdir Docs
mkdir Backups
ls -n
```

**Q8.** Add comments explaining the safe backup-{{i:before}}-edit pattern.
```powershell
Copy-Item project.scad project_backup.scad
ls -n *.scad
notepad.exe project.scad
Copy-Item project.scad project_v2.scad
```

**Q9.** Add comments to this wildcard {{i:file}}-management sequence.
```powershell
ls -n *.tmp
Remove-Item *.tmp
ls -n *.scad
Copy-Item *.scad backup/
ls -n backup/
```

**Q10.** Add comments explaining what {{i:each}} step of this project-archiving {{i:script}} does.
```powershell
$date = Get-Date -Format "yyyyMMdd"
$archiveName = "project_backup_$date"
Copy-Item -Recurse my_cube $archiveName
ls -n
```

---

## {{i:PowerShell}} — Lesson 3: Input, Output, and Piping

### Fix the Code (Questions 1–5)

**Q1.** The user wants to append a second line to a {{i:file}} without destroying the {{i:first}}. The operator is wrong.
```powershell
echo "Line 1" > notes.txt
echo "Line 2" > notes.txt
```

**Q2.** This pipe should filter to only lines containing "{{i:error}}" but uses the wrong {{i:PowerShell}} {{i:command}}.
```powershell
cat build_log.txt | grep "error"
```

**Q3.** The {{i:script}} is supposed to {{i:copy}} {{i:file}} contents to the {{i:Windows}} clipboard but uses the wrong pipe target.
```powershell
cat notes.txt | clipboard
```

**Q4.** This pipe chain should count the number of `.scad` {{i:files}}, but the counting {{i:command}} is wrong.
```powershell
ls -n *.scad | Measure-Lines
```

**Q5.** The {{i:output}} redirection is supposed to save `3dm info` {{i:output}} for review, but the {{i:file}} path uses a wrong separator and the {{i:command}} {{i:name}} is incorrect.
```powershell
3dm information > build\info_report.txt
notepad.exe build\info_report.txt
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining the {{i:difference}} {{i:between}} `>` and `>>` in {{i:each}} line.
```powershell
echo "Project: my_cube" > log.txt
echo "Build started" >> log.txt
echo "Build complete" >> log.txt
cat log.txt
```

**Q7.** Add comments to this pipe chain explaining {{i:each}} stage of the pipeline.
```powershell
ls -n | findstr ".scad" | Out-File scad_files.txt
cat scad_files.txt
```

**Q8.** Add comments explaining why {{i:each}} step of this screen-{{i:reader}} {{i:output}} {{i:workflow}} is used.
```powershell
3dm build
3dm info > model_report.txt
notepad.exe model_report.txt
```

**Q9.** Add comments to this pipe-and-filter sequence used to search {{i:build}} logs.
```powershell
cat build_log.txt | findstr "ERROR"
cat build_log.txt | findstr "ERROR" > errors_only.txt
cat build_log.txt | findstr "ERROR" | clip
```

**Q10.** Add comments to this combined input/{{i:output}} {{i:script}}.
```powershell
echo "width=50" > params.txt
echo "height=30" >> params.txt
echo "wall=2.5" >> params.txt
cat params.txt
cat params.txt | clip
```

---

## {{i:PowerShell}} — Lesson 4: Environment Variables, {{i:PATH}}, and Aliases

### Fix the Code (Questions 1–5)

**Q1.** The user tries to {{i:create}} a permanent alias but uses the wrong scope.
```powershell
Set-Alias -Name preview -Value openscad -Scope Global
```
*(Hint: for persistence across sessions, the alias must be stored somewhere {{i:specific}}.)*

**Q2.** This {{i:script}} sets an {{i:environment}} variable but uses the wrong syntax.
```powershell
$env:PROJECT_DIR = ~/Documents/3d_projects
```

**Q3.** The {{i:script}} checks whether `openscad` is on the {{i:PATH}}, but uses the wrong {{i:command}}.
```powershell
locate openscad
```

**Q4.** The user tries to add a directory to {{i:PATH}} but the concatenation operator is wrong.
```powershell
$env:PATH = $env:PATH : "C:\Tools\openscad"
```

**Q5.** This alias definition has the wrong cmdlet {{i:name}} for creating aliases.
```powershell
New-Variable -Name "build" -Value "3dm build"
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining what {{i:each}} {{i:environment}} variable does and when {{i:you}} would set it.
```powershell
$env:PROJECT_DIR = "$HOME\Documents\3d_projects"
$env:OPENSCAD_PATH = "C:\Program Files\OpenSCAD"
$env:PATH += ";$env:OPENSCAD_PATH"
```

**Q7.** Add comments to this alias-creation and verification sequence.
```powershell
Set-Alias -Name build -Value "3dm"
Set-Alias -Name preview -Value openscad
Get-Alias build
Get-Alias preview
```

**Q8.** Add comments explaining {{i:each}} line of this {{i:PATH}} diagnostic {{i:script}}.
```powershell
$env:PATH -split ";"
Get-Command openscad
Get-Command 3dm
(Get-Command openscad).Source
```

**Q9.** Add comments to this profile-editing sequence.
```powershell
$PROFILE
Test-Path $PROFILE
New-Item -Path $PROFILE -Force
notepad.exe $PROFILE
```

**Q10.** Add comments explaining what {{i:each}} line of this {{i:environment}}-setup block (meant to go in a profile) does.
```powershell
Set-Alias build "3dm build"
$env:PROJECT_DIR = "$HOME\Documents\3d_projects"
function go-projects { Set-Location $env:PROJECT_DIR }
Write-Host "3D printing environment loaded."
```

---

## {{i:PowerShell}} — Lesson 5: Profiles and History

### Fix the Code (Questions 1–5)

**Q1.** The {{i:command}} to recall the 5th entry from history is wrong.
```powershell
Get-History | Select -Index 5
```

**Q2.** The user wants to re-execute the last {{i:command}} from history. The {{i:command}} is wrong.
```powershell
Invoke-Command -History -1
```

**Q3.** This {{i:script}} is supposed to search history for all {{i:commands}} containing "{{i:build}}" but the search syntax is wrong.
```powershell
Get-History | Where-Object { $_.Command = "build" }
```

**Q4.** The profile path check uses the wrong variable {{i:name}}.
```powershell
Test-Path $MYPROFILE
notepad.exe $MYPROFILE
```

**Q5.** This history-export {{i:script}} saves to a {{i:file}} but uses the wrong cmdlet for writing {{i:text}}.
```powershell
Get-History | ForEach-Object { $_.CommandLine } | Write-File history_log.txt
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this history-recall {{i:workflow}}.
```powershell
Get-History
Get-History | Select-Object -Last 10
Invoke-History 15
Get-History | Where-Object { $_.CommandLine -like "*build*" }
```

**Q7.** Add comments to this profile-loading sequence.
```powershell
$PROFILE
Test-Path $PROFILE
. $PROFILE
Get-Alias build
```

**Q8.** Add comments explaining this screen-{{i:reader}} troubleshooting sequence.
```powershell
3dm build > build_output.txt 2>&1
notepad.exe build_output.txt
3dm info > info_output.txt
notepad.exe info_output.txt
```

**Q9.** Add comments to this combined history-and-profile management {{i:script}}.
```powershell
Get-History | Export-Csv -Path history_backup.csv -NoTypeInformation
notepad.exe $PROFILE
. $PROFILE
Get-History | Select-Object -Last 5
```

**Q10.** Add comments explaining {{i:each}} function in this profile snippet.
```powershell
function build-project {
    Set-Location $env:PROJECT_DIR
    3dm build
    3dm info > build_report.txt
    notepad.exe build_report.txt
}

function new-project($name) {
    mkdir "$env:PROJECT_DIR\$name"
    Set-Location "$env:PROJECT_DIR\$name"
    3dm new
}
```

---

## {{i:PowerShell}} — Lesson 6: Scripts, Functions, and Professional Workflows

### Fix the Code (Questions 1–5)

**Q1.** This {{i:script}} should loop over all `.scad` {{i:files}} and {{i:print}} their names, but the loop variable and iteration syntax are wrong.
```powershell
$files = ls -n *.scad
for $file in $files {
    Write-Output $file
}
```

**Q2.** The function definition is missing the `param` block syntax, making {{hi:Parameters}}{{i:parameters}} inaccessible.
```powershell
function Process-Project {
    $projectPath = $args[0]
    Set-Location $projectPath
    3dm build
}
```
*(Hint: `$args` works but is fragile — the function should declare a named {{i:parameter}}.)*

**Q3.** This try/catch block will never catch anything because the {{i:error}} action preference is wrong.
```powershell
$ErrorActionPreference = "Continue"
try {
    3dm build
    if ($LASTEXITCODE -ne 0) { throw "Build failed" }
} catch {
    Write-Output "Error: $_"
}
```

**Q4.** The batch processing {{i:script}} creates {{i:output}} filenames but uses the wrong string interpolation.
```powershell
$widths = @(60, 80, 100)
foreach ($w in $widths) {
    $outFile = "build/bracket_w" + w + ".stl"
    openscad -D "width=$w" -o $outFile src/main.scad
}
```

**Q5.** The execution policy override is set at the wrong scope — it changes the machine-wide policy instead of just the current process.
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope LocalMachine
.\build-all.ps1
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this complete batch-{{i:build}} {{i:script}} explaining every significant block.
```powershell
param(
    [string]$ProjectsDir = "$HOME\Documents\3d_projects"
)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$logFile = "build_$timestamp.log"

Get-ChildItem -Path $ProjectsDir -Directory | ForEach-Object {
    $project = $_.FullName
    $name = $_.Name
    Write-Host "Processing: $name"
    Set-Location $project
    $output = & 3dm build slice 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  OK"
        & 3dm print
    } else {
        Write-Host "  FAILED"
        $output | Out-File "build_error.txt"
    }
}
Write-Host "Batch complete."
```

**Q7.** Add comments to this parameterized function.
```powershell
function Build-Variant {
    param(
        [string]$ScadFile,
        [int]$Width,
        [double]$Wall,
        [string]$OutputDir = "build/variants"
    )
    $name = "model_w${Width}_wall${Wall}"
    $out  = "$OutputDir\${name}.stl"
    openscad -D "width=$Width" -D "wall=$Wall" -o $out $ScadFile
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Built: $out"
    } else {
        Write-Host "FAILED: $name"
    }
}
```

**Q8.** Add comments to this {{i:error}}-handling and logging block.
```powershell
$ErrorActionPreference = "Stop"
try {
    3dm build
    if ($LASTEXITCODE -ne 0) { throw "OpenSCAD returned $LASTEXITCODE" }
    $stlSize = (Get-Item "build\main.stl").Length
    if ($stlSize -lt 1000) { Write-Warning "STL suspiciously small: $stlSize bytes" }
    Write-Host "Build OK: $stlSize bytes"
} catch {
    Write-Host "Build failed: $_"
    exit 1
}
```

**Q9.** Add comments to this nested loop variant generator.
```powershell
$widths = @(60, 80, 100, 120)
$walls  = @(1.2, 1.6, 2.0)
$ok = 0; $fail = 0

foreach ($w in $widths) {
    foreach ($wt in $walls) {
        $name = "bracket_w${w}_wall${wt}"
        $out  = "build\variants\${name}.stl"
        openscad -D "width=$w" -D "wall=$wt" -o $out src\main.scad 2>$null
        if ($LASTEXITCODE -eq 0) { $ok++ } else { $fail++ }
    }
}
Write-Host "Done: $ok succeeded, $fail failed"
```

**Q10.** Add comments to this complete project-setup function.
```powershell
function New-PrintProject {
    param([string]$Name)
    $base = "$env:PROJECT_DIR\$Name"
    if (Test-Path $base) {
        Write-Warning "Project already exists: $base"
        return
    }
    New-Item -ItemType Directory -Path $base | Out-Null
    Set-Location $base
    3dm new
    Write-Host "Project created: $base"
    ls -n
}
```

---

# PART 2 — {{i:Windows}} Command Prompt (CMD)

---

## CMD — Lesson Pre: Your First Terminal

### Fix the Code (Questions 1–5)

**Q1.** These two {{i:commands}} should show the current location and list {{i:files}}, but both {{i:commands}} are wrong for {{hi:CMD}}CMD.
```cmd
pwd
ls
```

**Q2.** The user wants to {{i:create}} a {{i:file}} with content and then read it back. Both {{i:commands}} are wrong for CMD.
```cmd
echo "Hello CMD" >> hello.txt
cat hello.txt
```

**Q3.** The user tries to open a {{i:file}} in Notepad but uses the wrong separator.
```cmd
notepad hello/txt
```

**Q4.** The user wants to go up {{i:one}} level and confirm the {{i:new}} location. The go-up sequence is correct but the confirmation {{i:command}} is wrong.
```cmd
cd ..
pwd
```

**Q5.** The long-{{i:output}} management {{i:command}} is wrong — `less` is not available in CMD.
```cmd
dir /B | less
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to every line explaining what it does in CMD.
```cmd
cd
dir /B
cd Documents
cd
dir /B
```

**Q7.** Add comments to this {{i:file}}-creation and reading {{i:workflow}}.
```cmd
echo Hello, Command Prompt! > hello.txt
type hello.txt
notepad.exe hello.txt
```

**Q8.** Add comments explaining {{i:each}} step of this {{i:output}}-redirection {{i:workflow}}.
```cmd
dir /B > list.txt
notepad.exe list.txt
dir /B | findstr "scad"
```

**Q9.** Add comments explaining what {{i:each}} keyboard shortcut does for screen {{i:reader}} users.
```cmd
REM Up Arrow
REM Down Arrow
REM Tab
REM Ctrl+C
REM cls (type and press Enter)
```

**Q10.** Add comments to this tab-completion demonstration.
```cmd
cd Doc
dir /B
cd ..
cd Down
```
*(Note: lines 1 and 4 show partial paths where Tab would be pressed.)*

---

## CMD — Lesson 0: Getting Started

### Fix the Code (Questions 1–5)

**Q1.** The path to navigate to Documents uses the wrong separator for CMD.
```cmd
cd C:/Users/Student/Documents
```

**Q2.** The user tries to list {{i:files}} and filter for `.scad` {{i:files}} {{i:using}} a Linux {{i:command}}.
```cmd
dir /B | grep "scad"
```

**Q3.** The {{i:script}} tries to return to the home directory {{i:using}} the wrong variable.
```cmd
cd $HOME
```

**Q4.** The {{i:3DMake}} project initialization uses the wrong {{i:command}} {{i:name}}.
```cmd
mkdir %USERPROFILE%\Documents\3d_projects\my_cube
cd %USERPROFILE%\Documents\3d_projects\my_cube
3dm init
```

**Q5.** The user tries to list only directory names {{i:using}} a flag that doesn't exist in CMD.
```cmd
dir /B /dirs
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining the CMD path conventions shown in {{i:each}} line.
```cmd
cd %USERPROFILE%
cd Documents
cd ..\Downloads
cd C:\Users\Student\Documents
cd
```

**Q7.** Add comments to this {{i:3DMake}} quick-start sequence for CMD.
```cmd
cd %USERPROFILE%\Downloads\3dmake
3dm setup
mkdir %USERPROFILE%\Documents\3d_projects
mkdir %USERPROFILE%\Documents\3d_projects\my_cube
cd %USERPROFILE%\Documents\3d_projects\my_cube
3dm new
dir /B
```

**Q8.** Add comments explaining {{i:each}} filter pattern used in these `dir` {{i:commands}}.
```cmd
dir /B *.scad
dir /B *.stl
dir /B project?.scad
dir /B *_final*
```

**Q9.** Add comments to this prompt-orientation {{i:reference}}.
```cmd
REM C:\Users\Student>
cd
dir /B
cd ..
cd
```

**Q10.** Add comments explaining every line of this screen-{{i:reader}}-{{i:first}} {{i:file}} listing {{i:workflow}}.
```cmd
dir /B > list.txt
notepad.exe list.txt
dir /B | findstr /R "\.scad$"
dir /B | findstr /R "\.scad$" > scad_list.txt
notepad.exe scad_list.txt
```

---

## CMD — Lesson 1: Navigation

### Fix the Code (Questions 1–5)

**Q1.** The {{i:script}} should navigate {{i:into}} a nested folder and verify the result, but the verification {{i:command}} is wrong.
```cmd
cd Documents\3d_projects\my_cube
pwd
```

**Q2.** The user tries to navigate to a folder with a space in its {{i:name}} but the {{i:command}} will fail.
```cmd
cd My Projects
```

**Q3.** The wildcard syntax for listing `.stl` {{i:files}} is wrong for CMD.
```cmd
dir /B /.stl
```

**Q4.** The {{i:script}} tries to search all subdirectories for `.scad` {{i:files}} but uses the wrong flag.
```cmd
dir /B /R *.scad
```

**Q5.** The `cd` {{i:command}} at the end should return to the home directory, but the syntax is wrong for CMD.
```cmd
cd Documents
dir /B
cd ~
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} {{i:navigation}} step and what to expect.
```cmd
cd %USERPROFILE%
cd Documents
cd 3d_projects
dir /B /A:D
cd my_cube
dir /B
```

**Q7.** Add comments to this deep-{{i:navigation}} and backtrack sequence.
```cmd
cd Documents\3d_projects\my_cube\src
cd
dir /B
cd ..\..
cd
```

**Q8.** Add comments explaining what {{i:each}} line does in this project-exploration {{i:script}}.
```cmd
cd %USERPROFILE%\Documents\3d_projects\my_cube
dir /B
dir /B src
dir /B build
dir /B build\*.stl
```

**Q9.** Add comments explaining the wildcard patterns used in {{i:each}} listing.
```cmd
dir /B *.scad
dir /B model?.scad
dir /B *_v[0-9].*
dir /B *backup*
```

**Q10.** Add comments to this screen-{{i:reader}} {{i:navigation}} audit trail {{i:script}}.
```cmd
cd
dir /B > location_check.txt
cd Documents
cd >> location_check.txt
dir /B >> location_check.txt
notepad.exe location_check.txt
```

---

## CMD — Lesson 2: File and Folder Manipulation

### Fix the Code (Questions 1–5)

**Q1.** The user wants to {{i:copy}} an entire folder tree, but the `/E` and `/I` flags are missing.
```cmd
xcopy source_folder destination_folder
```

**Q2.** The {{i:file}} deletion {{i:command}} will not ask for confirmation, which is dangerous here. The `/Q` flag should not be present.
```cmd
del /Q *.scad
```

**Q3.** The user tries to rename a {{i:file}} {{i:using}} a {{i:command}} that doesn't exist in CMD.
```cmd
rename old_name.scad new_name.scad
```
*(Hint: check the exact CMD {{i:command}} {{i:name}}.)*

**Q4.** This safe-deletion sequence is in the wrong order.
```cmd
del *.tmp
dir /B *.tmp
```

**Q5.** The {{i:command}} to remove a folder and all its contents is missing the required flags.
```cmd
rmdir old_project
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} {{i:file}}-operation {{i:command}}.
```cmd
echo content > file1.txt
copy file1.txt file1_backup.txt
move file1.txt archive\file1.txt
dir /B
```

**Q7.** Add comments to this project-backup {{i:workflow}}.
```cmd
mkdir backup
copy *.scad backup\
dir /B backup\
dir /B *.scad
```

**Q8.** Add comments explaining the safe-deletion pattern.
```cmd
dir /B *.tmp
dir /B *.tmp | find /c ""
del *.tmp
dir /B *.tmp
```

**Q9.** Add comments to this folder-structure creation {{i:script}}.
```cmd
mkdir 3DProjects
cd 3DProjects
mkdir Models
mkdir Prints
mkdir Docs
mkdir Backups
dir /B /A:D
```

**Q10.** Add comments to this project-archiving {{i:script}}.
```cmd
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set TODAY=%%c%%a%%b
mkdir archive_%TODAY%
xcopy /E /I my_cube archive_%TODAY%\my_cube
dir /B
```

---

## CMD — Lesson 3: Input, Output, and Piping

### Fix the Code (Questions 1–5)

**Q1.** The user wants to append to a log {{i:file}}, but the {{i:first}} line overwrites the {{i:file}}.
```cmd
echo Build started > build_log.txt
echo Build complete > build_log.txt
type build_log.txt
```

**Q2.** The pipe destination for copying to the {{i:Windows}} clipboard is wrong.
```cmd
type notes.txt | copy
```

**Q3.** The `findstr` {{i:command}} is supposed to be case-insensitive but is missing the correct flag.
```cmd
type build_log.txt | findstr "error"
```

**Q4.** This chain should count the number of `.scad` {{i:files}} but uses the wrong counting syntax.
```cmd
dir /B *.scad | find /v ""
```
*(Hint: check the `find` flags for counting lines.)*

**Q5.** The {{i:script}} should search a {{i:file}} for a keyword and save the results, but the {{i:command}} for reading a {{i:file}} in CMD is wrong.
```cmd
cat build_log.txt | findstr "FAILED" > errors.txt
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining the {{i:difference}} {{i:between}} `>` and `>>` in {{i:each}} line.
```cmd
echo Project: my_cube > log.txt
echo Build started >> log.txt
echo Build complete >> log.txt
type log.txt
```

**Q7.** Add comments to this pipe chain.
```cmd
dir /B *.scad | findstr "main"
dir /B *.scad | find /c "" 
dir /B | findstr /R "\.scad$" > scad_list.txt
```

**Q8.** Add comments explaining {{i:each}} step of this {{i:build}}-and-verify {{i:workflow}}.
```cmd
3dm build > build_output.txt 2>&1
type build_output.txt
3dm info > info_report.txt
notepad.exe info_report.txt
```

**Q9.** Add comments explaining this clipboard {{i:workflow}} for screen readers.
```cmd
dir /B | clip
type notes.txt | clip
dir /B *.scad | clip
```

**Q10.** Add comments to this multi-step log-building {{i:script}}.
```cmd
echo === Build Log === > full_log.txt
echo Date: %date% >> full_log.txt
echo Time: %time% >> full_log.txt
3dm build >> full_log.txt 2>&1
3dm info >> full_log.txt
notepad.exe full_log.txt
```

---

## CMD — Lesson 4: Environment Variables, {{i:PATH}}, and Aliases (DOSKEY)

### Fix the Code (Questions 1–5)

**Q1.** The user tries to set a persistent {{i:environment}} variable {{i:using}} the wrong {{i:command}}.
```cmd
set PROJECT_DIR=C:\Users\Student\Documents\3d_projects
```
*(Hint: `set` only persists for the current session.)*

**Q2.** The DOSKEY alias definition has a wrong syntax for passing arguments.
```cmd
doskey build=3dm build $1
```

**Q3.** The {{i:script}} tries to {{i:print}} an {{i:environment}} variable but uses the wrong syntax.
```cmd
echo $PROJECT_DIR
```

**Q4.** The user wants to check where `openscad` is installed, but uses a Linux {{i:command}}.
```cmd
which openscad
```

**Q5.** The {{i:PATH}} modification syntax is wrong — the semicolon and concatenation are missing.
```cmd
set PATH=%PATH% C:\Tools\OpenSCAD
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} variable-setting {{i:command}} and its scope.
```cmd
set MY_VAR=hello
setx MY_VAR hello
set MY_VAR
echo %MY_VAR%
```

**Q7.** Add comments to this DOSKEY alias setup.
```cmd
doskey ls=dir /B $*
doskey cat=type $1
doskey build=3dm build $*
doskey info=3dm info $*
```

**Q8.** Add comments explaining this {{i:PATH}} diagnostic sequence.
```cmd
echo %PATH%
where openscad
where 3dm
openscad --version
```

**Q9.** Add comments to this {{i:environment}}-variable usage {{i:script}}.
```cmd
set PROJECT_DIR=%USERPROFILE%\Documents\3d_projects
cd %PROJECT_DIR%
dir /B
echo %PROJECT_DIR%
```

**Q10.** Add comments explaining the purpose of {{i:each}} block in this persistent-{{i:environment}}-setup {{i:script}}.
```cmd
setx PROJECT_DIR "%USERPROFILE%\Documents\3d_projects"
setx OPENSCAD_PATH "C:\Program Files\OpenSCAD"
set PATH=%PATH%;%OPENSCAD_PATH%
where openscad
echo Setup complete.
```

---

## CMD — Lesson 5: Startup Scripts, History, and Useful Tricks

### Fix the Code (Questions 1–5)

**Q1.** The history popup shortcut is wrong — the user pressed the wrong function key.
```cmd
REM Press F6 to open the command history popup
```

**Q2.** The DOSKEY macro {{i:file}} is loaded with the wrong flag.
```cmd
doskey /load macros.txt
```

**Q3.** The {{i:script}} tries to re-{{i:run}} the previous {{i:command}} automatically, but the syntax is wrong.
```cmd
doskey /history | tail -1 | cmd
```

**Q4.** The AUTORUN registry key path is misspelled, so the startup {{i:script}} will not load.
```cmd
reg add "HKCU\Software\Microsoft\Command Processer" /v AutoRun /t REG_SZ /d "%USERPROFILE%\cmd_startup.bat"
```

**Q5.** This startup {{i:script}} tries to set an alias at launch but uses the wrong {{i:command}} {{i:name}}.
```cmd
@echo off
alias build=3dm build
echo CMD environment loaded.
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this history-recall {{i:reference}}.
```cmd
REM F7 key
REM F8 key
REM doskey /history
doskey /history > history_log.txt
notepad.exe history_log.txt
```

**Q7.** Add comments explaining {{i:each}} line of this startup {{i:script}} (`cmd_startup.bat`).
```cmd
@echo off
doskey ls=dir /B $*
doskey cat=type $1
doskey build=3dm build $*
set PROJECT_DIR=%USERPROFILE%\Documents\3d_projects
echo CMD environment ready. Project dir: %PROJECT_DIR%
```

**Q8.** Add comments to this screen-{{i:reader}} {{i:output}}-management sequence.
```cmd
3dm build > build_out.txt 2>&1
if %errorlevel% neq 0 (
    echo BUILD FAILED >> build_out.txt
)
notepad.exe build_out.txt
```

**Q9.** Add comments explaining {{i:each}} step of this macro-persistence {{i:workflow}}.
```cmd
doskey build=3dm build $*
doskey /macros > macros.txt
notepad.exe macros.txt
doskey /macrofile=macros.txt
```

**Q10.** Add comments to this end-of-session cleanup and log {{i:script}}.
```cmd
3dm info > session_report.txt
echo Session ended: %date% %time% >> session_report.txt
doskey /history >> session_report.txt
notepad.exe session_report.txt
```

---

## CMD — Lesson 6: Batch Scripts, Subroutines, and Professional Workflows

### Fix the Code (Questions 1–5)

**Q1.** This batch {{i:script}} should loop over widths and {{i:build}} variants, but the loop variable syntax is wrong.
```cmd
@echo off
for $WIDTH in (60 80 100 120) do (
    echo Building width: %WIDTH%
    openscad -D "width=%WIDTH%" -o build\bracket_%WIDTH%.stl src\main.scad
)
```

**Q2.** The {{i:error}}-check after running openscad uses the wrong variable.
```cmd
openscad -o build\main.stl src\main.scad
if %exitcode% neq 0 echo BUILD FAILED
```

**Q3.** The subroutine call is missing the `call` keyword, so the {{i:script}} will exit after the subroutine.
```cmd
@echo off
:main
echo Starting build...
:build_project
    3dm build
    goto :eof
```
*(Hint: `:build_project` needs to be invoked correctly.)*

**Q4.** The `setlocal` / `endlocal` block is in the wrong order, so local {{hi:Variables}}{{i:variables}} leak out.
```cmd
@echo off
set TEMP_VAR=hello
setlocal
echo %TEMP_VAR%
endlocal
```

**Q5.** This {{i:script}} saves the ERRORLEVEL but uses the wrong syntax to capture it.
```cmd
3dm build
set BUILD_RESULT = %errorlevel%
if %BUILD_RESULT% neq 0 echo Build failed with code %BUILD_RESULT%
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to every significant line of this batch {{i:build}} {{i:script}}.
```cmd
@echo off
setlocal enabledelayedexpansion
set OUTPUT_DIR=build\variants
if not exist %OUTPUT_DIR% mkdir %OUTPUT_DIR%
set SUCCESS=0
set FAIL=0
for %%W in (60 80 100 120) do (
    for %%T in (1.2 1.6 2.0) do (
        set NAME=bracket_w%%W_wall%%T
        openscad -D "width=%%W" -D "wall=%%T" -o "%OUTPUT_DIR%\!NAME!.stl" src\main.scad
        if !errorlevel! equ 0 (
            set /a SUCCESS+=1
        ) else (
            set /a FAIL+=1
        )
    )
)
echo Done: %SUCCESS% succeeded, %FAIL% failed
endlocal
```

**Q7.** Add comments to this subroutine-based {{i:build}} {{i:script}}.
```cmd
@echo off
call :log "Build started"
call :build_step
call :verify_step
call :log "Build finished"
goto :eof

:log
echo [%time%] %~1 >> build_log.txt
goto :eof

:build_step
3dm build >> build_log.txt 2>&1
if %errorlevel% neq 0 ( echo FAILED >> build_log.txt & exit /b 1 )
goto :eof

:verify_step
3dm info >> build_log.txt
goto :eof
```

**Q8.** Add comments explaining {{i:each}} block of this {{i:error}}-handling {{i:script}}.
```cmd
@echo off
3dm build > build_out.txt 2>&1
set BUILD_CODE=%errorlevel%
if %BUILD_CODE% neq 0 (
    echo Build failed with code %BUILD_CODE%
    type build_out.txt
    exit /b %BUILD_CODE%
)
for %%F in (build\main.stl) do set STL_SIZE=%%~zF
if %STL_SIZE% lss 1000 echo WARNING: STL file very small: %STL_SIZE% bytes
echo Build OK: %STL_SIZE% bytes
```

**Q9.** Add comments to this parameterized batch-project setup {{i:script}}.
```cmd
@echo off
set NAME=%1
if "%NAME%"=="" ( echo Usage: new_project.bat project_name & exit /b 1 )
set BASE=%USERPROFILE%\Documents\3d_projects\%NAME%
if exist "%BASE%" ( echo Already exists: %BASE% & exit /b 1 )
mkdir "%BASE%"
cd /d "%BASE%"
3dm new
echo Project created: %BASE%
dir /B
```

**Q10.** Add comments explaining every section of this variant-archive {{i:script}}.
```cmd
@echo off
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do (
    set TODAY=%%c%%a%%b
)
set ARCHIVE=build\archive_%TODAY%
mkdir %ARCHIVE%
for %%F in (build\variants\*.stl) do (
    copy "%%F" "%ARCHIVE%\%%~nxF" > nul
)
echo Archived to: %ARCHIVE%
dir /B %ARCHIVE%
```

---

# PART 3 — {{i:Git}} {{i:Bash}}

---

## {{i:Git}} {{i:Bash}} — Lesson Pre: Your First Terminal

### Fix the Code (Questions 1–5)

**Q1.** The user tries to {{i:print}} the current directory and list {{i:files}}, but {{i:one}} {{i:command}} is wrong for {{hi:{{i:Git}} {{i:Bash}}}}{{i:Git}} {{i:Bash}}.
```bash
pwd
dir
```

**Q2.** The screen-{{i:reader}}–friendly listing {{i:command}} uses the wrong flag (letter L instead of number 1).
```bash
ls -l
```
*(Note: this produces detail {{i:output}}, not the {{i:one}}-per-line names-only format.)*

**Q3.** The user wants to {{i:create}} a {{i:file}} and read it back, but uses the CMD-style read {{i:command}}.
```bash
echo "Hello Git Bash" > hello.txt
type hello.txt
```

**Q4.** The user wants to navigate home and verify, but uses the wrong home-{{i:navigation}} {{i:command}}.
```bash
cd /home
pwd
```

**Q5.** The long-{{i:output}} pagination {{i:command}} is wrong for {{i:Git}} {{i:Bash}}.
```bash
ls -1 | more
```
*(Hint: {{i:Git}} {{i:Bash}} uses a different pager than CMD.)*

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining every {{i:command}} in this {{i:first}}-session orientation.
```bash
pwd
ls -1
cd Documents
pwd
ls -1
cd ~
pwd
```

**Q7.** Add comments to this {{i:file}}-creation and reading {{i:workflow}}.
```bash
echo "Hello, Git Bash!" > hello.txt
cat hello.txt
echo "Line 2" >> hello.txt
cat hello.txt
```

**Q8.** Add comments explaining the {{i:output}}-redirection strategy for screen {{i:reader}} users.
```bash
ls -1 > file_list.txt
notepad.exe file_list.txt
ls -1 | grep "scad"
```

**Q9.** Add comments to this keyboard-shortcut {{i:reference}} for {{i:Git}} {{i:Bash}}.
```bash
# Up Arrow
# Down Arrow
# Tab
# Ctrl+C
# Ctrl+R
```

**Q10.** Add comments to this tab-completion demonstration.
```bash
cd ~/Doc
ls -1
cd ~
cd ~/Down
```
*(Note: lines 1 and 4 show partial paths where Tab would be pressed.)*

---

## {{i:Git}} {{i:Bash}} — Lesson 0: Getting Started

### Fix the Code (Questions 1–5)

**Q1.** {{i:Git}} {{i:Bash}} uses Unix-style paths, but this {{i:navigation}} uses a {{i:Windows}}-style path.
```bash
cd C:\Users\Student\Documents
```

**Q2.** The listing {{i:command}} uses the wrong flag — letter L instead of number 1.
```bash
ls -l
```

**Q3.** The {{i:script}} should go up {{i:one}} level and then back home, but both {{i:navigation}} {{i:commands}} are wrong.
```bash
cd ../
cd /home/student
```

**Q4.** The {{i:3DMake}} project creation sequence uses the wrong path expansion variable.
```bash
mkdir %USERPROFILE%/Documents/3d_projects/my_cube
cd %USERPROFILE%/Documents/3d_projects/my_cube
3dm new
```

**Q5.** The user wants to list hidden {{i:files}} along with regular {{i:files}}, but uses the wrong flag.
```bash
ls -1 -h
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} path shortcut.
```bash
cd ~
cd ./subfolder
cd ../
cd -
cd /c/Users/Student/Documents
```

**Q7.** Add comments to this {{i:3DMake}} quick-start sequence.
```bash
cd ~/Downloads/3dmake
./3dm setup
mkdir -p ~/Documents/3d_projects/my_cube
cd ~/Documents/3d_projects/my_cube
3dm new
ls -1
```

**Q8.** Add comments explaining what {{i:each}} line of the prompt anatomy {{i:reference}} means.
```bash
# student@LAPTOP MINGW64 ~/Documents/3d_projects $
pwd
ls -1
cd ..
pwd
```

**Q9.** Add comments to this path-comparison demonstration.
```bash
pwd
cd /c/Users/Student/Documents/3d_projects
pwd
cd ~
pwd
cd Documents/3d_projects
pwd
```

**Q10.** Add comments explaining every line of this screen-{{i:reader}}-{{i:first}} listing {{i:workflow}}.
```bash
ls -1 > list.txt
notepad.exe list.txt
ls -1 | grep "scad"
ls -1 | grep "scad" > scad_list.txt
notepad.exe scad_list.txt
```

---

## {{i:Git}} {{i:Bash}} — Lesson 1: Navigation

### Fix the Code (Questions 1–5)

**Q1.** The wildcard pattern for listing `.scad` {{i:files}} is wrong for {{i:Git}} {{i:Bash}}.
```bash
ls -1 *.scad
ls -1 | grep /.scad/
```
*(The {{i:first}} line is correct — identify the {{i:error}} in the second line.)*

**Q2.** The {{i:script}} should list only directories. The flag used is wrong for {{i:Git}} {{i:Bash}}.
```bash
ls -1 /A:D
```

**Q3.** The `find` {{i:command}} should search recursively for `.scad` {{i:files}} but uses wrong syntax.
```bash
find . -name "*.scad" -type d
```

**Q4.** The {{i:script}} saves a listing and opens it, but uses the wrong open {{i:command}}.
```bash
ls -1 > list.txt
open list.txt
```

**Q5.** The recursive search for all {{i:STL}} {{i:files}} uses the wrong wildcard.
```bash
ls -1 build/%.stl
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this {{i:navigation}} and listing sequence.
```bash
pwd
cd ~/Documents/3d_projects
ls -1
cd my_cube
ls -1
cd src
ls -1 *.scad
cd ~
```

**Q7.** Add comments explaining {{i:each}} wildcard pattern.
```bash
ls -1 *.scad
ls -1 model?.scad
ls -1 *_v[0-9].*
ls -1 *_final*
```

**Q8.** Add comments to this project-exploration {{i:script}}.
```bash
cd ~/Documents/3d_projects/my_cube
pwd
ls -1
ls -1 src/
ls -1 build/
ls -1 build/*.stl
```

**Q9.** Add comments explaining this screen-{{i:reader}} listing {{i:workflow}}.
```bash
ls -1 > all_files.txt
ls -1 *.scad > scad_files.txt
ls -1 -d */ > dirs_only.txt
notepad.exe all_files.txt
```

**Q10.** Add comments explaining what `find` does in {{i:each}} variation.
```bash
find . -name "*.scad"
find . -name "*.scad" -type f
find ~/Documents/3d_projects -name "*.stl"
find . -name "*.scad" > scad_paths.txt
```

---

## {{i:Git}} {{i:Bash}} — Lesson 2: File and Folder Manipulation

### Fix the Code (Questions 1–5)

**Q1.** The {{i:command}} to recursively {{i:copy}} a folder is missing the required flag.
```bash
cp my_cube my_cube_backup
```

**Q2.** The user deletes a folder but uses the wrong {{i:command}} for {{i:Git}} {{i:Bash}}.
```bash
rmdir /S /Q old_project
```

**Q3.** The {{i:script}} creates a {{i:file}}, but uses the CMD {{i:command}} instead of the {{i:Git}} {{i:Bash}} equivalent.
```bash
echo. > empty_file.txt
```

**Q4.** The safe-deletion sequence is out of order — {{i:files}} are deleted {{i:before}} verification.
```bash
rm *.tmp
ls -1 *.tmp
```

**Q5.** The move {{i:command}} renames a {{i:file}} but uses the wrong {{i:command}} for {{i:Git}} {{i:Bash}}.
```bash
ren old_name.scad new_name.scad
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this {{i:file}}-creation and manipulation sequence.
```bash
touch design.scad
cp design.scad design_backup.scad
mv design.scad archive/design_v1.scad
ls -1
```

**Q7.** Add comments to this project-backup {{i:workflow}}.
```bash
cd ~/Documents/3d_projects
cp -r my_cube my_cube_backup
ls -1
cd my_cube_backup
ls -1
```

**Q8.** Add comments explaining the safe-deletion pattern.
```bash
ls -1 *.tmp
rm *.tmp
ls -1 *.tmp
```

**Q9.** Add comments to this folder-structure creation {{i:script}}.
```bash
mkdir -p 3DProjects/{Models,Prints,Docs,Backups}
ls -1 3DProjects/
ls -1 -d 3DProjects/*/
```

**Q10.** Add comments explaining every operation in this {{i:3DMake}} project-management {{i:script}}.
```bash
mkdir -p ~/Documents/3d_projects/bottle_cap
cd ~/Documents/3d_projects/bottle_cap
3dm new
cd ~/Documents/3d_projects
cp -r bottle_cap bottle_cap_backup
cd bottle_cap/src
mv main.scad bottle_cap.scad
ls -1 *.scad
```

---

## {{i:Git}} {{i:Bash}} — Lesson 3: Input, Output, and Piping

### Fix the Code (Questions 1–5)

**Q1.** The second line overwrites the log instead of appending to it.
```bash
echo "Build started" > build_log.txt
echo "Build complete" > build_log.txt
cat build_log.txt
```

**Q2.** The pipe destination for the {{i:Windows}} clipboard is wrong for {{i:Git}} {{i:Bash}} on {{i:Windows}}.
```bash
cat notes.txt | clipboard
```

**Q3.** This `grep` {{i:command}} should be case-insensitive but is missing the flag.
```bash
cat build_log.txt | grep "error"
```

**Q4.** The {{i:command}} counts lines but uses the wrong utility for {{i:Git}} {{i:Bash}}.
```bash
ls -1 *.scad | find /c ""
```

**Q5.** This {{i:script}} reads a {{i:file}} and searches it, but uses the CMD-style read {{i:command}}.
```bash
type build_log.txt | grep "FAILED"
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining the {{i:difference}} {{i:between}} `>` and `>>`.
```bash
echo "Project: my_cube" > log.txt
echo "Build started" >> log.txt
echo "Build complete" >> log.txt
cat log.txt
```

**Q7.** Add comments to this pipe chain.
```bash
ls -1 *.scad | grep "main"
ls -1 *.scad | wc -l
ls -1 | grep ".stl" > stl_list.txt
```

**Q8.** Add comments to this {{i:build}}-and-verify {{i:workflow}}.
```bash
3dm build
3dm info > model_report.txt
notepad.exe model_report.txt
cat model_report.txt | grep "Bounding"
```

**Q9.** Add comments explaining this clipboard {{i:workflow}}.
```bash
ls -1 | clip
cat notes.txt | clip
ls -1 *.scad | clip
```

**Q10.** Add comments to this multi-step log-building {{i:script}}.
```bash
echo "=== Build Log ===" > full_log.txt
echo "Date: $(date)" >> full_log.txt
3dm build >> full_log.txt 2>&1
3dm info >> full_log.txt
notepad.exe full_log.txt
```

---

## {{i:Git}} {{i:Bash}} — Lesson 4: Environment Variables, {{i:PATH}}, and Aliases

### Fix the Code (Questions 1–5)

**Q1.** The alias is created, but changes will be lost when the terminal is closed. Where should this line go to persist?
```bash
alias build="3dm build"
```
*(Hint: identify where this line must be saved for persistence — this is a conceptual fix; {{i:write}} the corrected {{i:workflow}}, not just the line.)*

**Q2.** The variable is set but the export is missing, so child processes won't see it.
```bash
PROJECT_DIR="$HOME/Documents/3d_projects"
```

**Q3.** The {{i:PATH}} modification uses the wrong separator.
```bash
export PATH="$PATH;/c/Program Files/OpenSCAD"
```

**Q4.** The `which` {{i:command}} is used correctly but `source` is used wrong to reload `.bashrc`.
```bash
which openscad
reload ~/.bashrc
```

**Q5.** The variable {{i:reference}} uses wrong {{i:shell}} syntax.
```bash
export LABEL_FONT="Liberation Sans"
echo %LABEL_FONT%
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} line of this {{i:environment}}-setup block.
```bash
export PROJECT_DIR="$HOME/Documents/3d_projects"
export OPENSCAD_PATH="/c/Program Files/OpenSCAD"
export PATH="$PATH:$OPENSCAD_PATH"
```

**Q7.** Add comments to this alias-creation and verification sequence.
```bash
alias build="3dm build"
alias info="3dm info"
alias preview="3dm preview"
alias ls1="ls -1"
```

**Q8.** Add comments explaining this {{i:PATH}} diagnostic {{i:script}}.
```bash
echo $PATH | tr ':' '\n'
which openscad
which 3dm
openscad --version
```

**Q9.** Add comments to this `.bashrc`-editing sequence.
```bash
cat ~/.bashrc
echo 'alias build="3dm build"' >> ~/.bashrc
echo 'export PROJECT_DIR="$HOME/Documents/3d_projects"' >> ~/.bashrc
source ~/.bashrc
alias build
```

**Q10.** Add comments explaining {{i:each}} function and variable in this {{i:environment}} block (intended for `.bashrc`).
```bash
export PROJECT_DIR="$HOME/Documents/3d_projects"
alias build="3dm build"
alias info="3dm info"
function go-projects() { cd "$PROJECT_DIR"; }
function new-project() { mkdir -p "$PROJECT_DIR/$1" && cd "$PROJECT_DIR/$1" && 3dm new; }
echo "3D printing environment loaded."
```

---

## {{i:Git}} {{i:Bash}} — Lesson 5: {{i:Shell}} Profiles, History, and Useful Tricks

### Fix the Code (Questions 1–5)

**Q1.** The history search shortcut description is wrong.
```bash
# Press Ctrl+F to search command history interactively
```

**Q2.** The alias is added to the wrong profile {{i:file}} for {{i:Git}} {{i:Bash}} on {{i:Windows}}.
```bash
echo 'alias build="3dm build"' >> ~/.bash_profile
```
*(Hint: on most {{i:Git}} {{i:Bash}} setups, interactive-{{i:shell}} configuration goes in the other {{i:file}}.)*

**Q3.** The {{i:script}} re-runs the last {{i:command}} from history {{i:using}} the wrong syntax.
```bash
history | tail -1 | bash
```

**Q4.** The `source` {{i:command}} is used but the wrong {{i:file}} is sourced.
```bash
source ~/.bash_history
```

**Q5.** The history-export pipeline uses the wrong {{i:file}}-{{i:write}} {{i:command}} for bash.
```bash
history | Write-File history_log.txt
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this history-recall {{i:workflow}}.
```bash
history
history | tail -20
history | grep "build"
!build
```

**Q7.** Add comments explaining {{i:each}} step of this `.bashrc`-management {{i:workflow}}.
```bash
cat ~/.bashrc
notepad.exe ~/.bashrc
source ~/.bashrc
alias build
echo $PROJECT_DIR
```

**Q8.** Add comments to this screen-{{i:reader}} {{i:output}}-management sequence.
```bash
3dm build > build_out.txt 2>&1
cat build_out.txt | grep -i "error"
3dm info > info_out.txt
notepad.exe info_out.txt
```

**Q9.** Add comments explaining {{i:each}} control sequence.
```bash
# Ctrl+R — type to search
# Ctrl+C
# Ctrl+A
# Ctrl+E
# Ctrl+L
```

**Q10.** Add comments to this full {{i:environment}}-check {{i:script}}.
```bash
echo "Shell: $SHELL"
echo "Home: $HOME"
echo "Project dir: $PROJECT_DIR"
which openscad
which 3dm
alias | grep build
history | wc -l
```

---

## {{i:Git}} {{i:Bash}} — Lesson 6: {{i:Shell}} Scripts, Functions, Loops

### Fix the Code (Questions 1–5)

**Q1.** This {{i:shell}} {{i:script}} loops over widths and builds variants, but the loop syntax is wrong.
```bash
#!/bin/bash
for WIDTH in (60 80 100 120); do
    openscad -D "width=$WIDTH" -o "build/bracket_$WIDTH.stl" src/main.scad
    echo "Built width: $WIDTH"
done
```

**Q2.** The {{i:script}} uses `set -e` but the {{i:OpenSCAD}} {{i:error}} will be silently suppressed by the pipe.
```bash
#!/bin/bash
set -e
openscad -o build/main.stl src/main.scad | tee build_log.txt
echo "Build done"
```
*(Hint: add the missing safety flag.)*

**Q3.** The function is defined but the {{i:parameter}} is read {{i:using}} the wrong syntax.
```bash
#!/bin/bash
build_variant() {
    local width = $1
    openscad -D "width=$width" -o "build/variant_$width.stl" src/main.scad
}
build_variant 80
```

**Q4.** The {{i:script}} makes a {{i:file}} executable but uses the wrong {{i:command}} {{i:name}}.
```bash
#!/bin/bash
chown +x batch_build.sh
./batch_build.sh
```

**Q5.** The {{i:error}}-handling trap is syntactically wrong.
```bash
#!/bin/bash
set -e
trap "echo Build failed at line $LINENO" ERROR
3dm build
3dm info
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this complete batch-{{i:build}} {{i:script}}.
```bash
#!/bin/bash
set -e
set -u
set -o pipefail

OUTPUT_DIR="build/variants"
mkdir -p "$OUTPUT_DIR"

SUCCESS=0
FAIL=0

for WIDTH in 60 80 100 120; do
    for WALL in 1.2 1.6 2.0; do
        NAME="bracket_w${WIDTH}_wall${WALL/./_}"
        OUT="$OUTPUT_DIR/${NAME}.stl"
        if openscad -D "width=${WIDTH}" -D "wall=${WALL}" \
                    -o "$OUT" src/main.scad 2>/dev/null; then
            SUCCESS=$((SUCCESS + 1))
        else
            FAIL=$((FAIL + 1))
        fi
    done
done

echo "Done: $SUCCESS succeeded, $FAIL failed"
```

**Q7.** Add comments to this function-based {{i:build}} {{i:script}}.
```bash
#!/bin/bash
log() {
    local level="$1"; shift
    echo "[$(date +%H:%M:%S)] [$level] $*" | tee -a build_log.txt
}

build_project() {
    local project_dir="$1"
    cd "$project_dir"
    log "INFO" "Building: $(basename $project_dir)"
    if 3dm build > /dev/null 2>&1; then
        log "INFO" "OK"
        return 0
    else
        log "ERROR" "FAILED"
        return 1
    fi
}

for project in ~/Documents/3d_projects/*/; do
    build_project "$project"
done
```

**Q8.** Add comments to this {{i:error}}-handling {{i:script}}.
```bash
#!/bin/bash
set -e
set -u
set -o pipefail

on_error() {
    echo "ERROR at line $1"
    exit 1
}
trap 'on_error $LINENO' ERR

3dm build

STL="build/main.stl"
[ -f "$STL" ] || { echo "STL not created"; exit 1; }

SIZE=$(stat -c%s "$STL")
[ "$SIZE" -gt 1000 ] || echo "WARNING: small STL ($SIZE bytes)"

echo "Build OK: $SIZE bytes"
3dm info
```

**Q9.** Add comments to this string-{{i:parameter}} quoting demonstration.
```bash
#!/bin/bash
LABEL="FRONT PANEL"

openscad -D 'label="FRONT"' -o out1.stl src/main.scad
openscad -D "label=\"${LABEL}\"" -o out2.stl src/main.scad
echo "openscad -D 'label=\"${LABEL}\"' -o out3.stl src/main.scad"
```

**Q10.** Add comments to this complete project-setup {{i:script}}.
```bash
#!/bin/bash
set -e
NAME="$1"
BASE="$HOME/Documents/3d_projects/$NAME"

[ -n "$NAME" ] || { echo "Usage: $0 project_name"; exit 1; }
[ ! -d "$BASE" ] || { echo "Exists: $BASE"; exit 1; }

mkdir -p "$BASE"
cd "$BASE"
3dm new
echo "Created: $BASE"
ls -1
```

---

# PART 4 — 3dMake / {{i:OpenSCAD}} Curriculum

---

## 3dMake — Lesson 1: Environmental Configuration and the Developer Workflow

### Fix the Code (Questions 1–5)

**Q1.** This `.scad` {{i:file}} uses a raw number instead of a named {{i:parameter}}. Rewrite it so it is fully {{i:parametric}}.
```openscad
cube([30, 20, 10]);
```

**Q2.** The verification {{i:command}} is wrong — the user types the wrong 3dm subcommand to get model dimensions.
```bash
3dm check
```

**Q3.** This {{i:OpenSCAD}} snippet violates the coordinate system: the {{i:cube}} is underground (extends below Z=0 without intent).
```openscad
width = 30;
depth = 20;
height = 10;
cube([width, depth, height], center=true);
```

**Q4.** The cost-estimation formula has wrong unit conversions.
```python
volume_mm3 = 6000
density = 1.24        # g/cm³
spool_price = 20      # dollars
spool_weight = 1000   # grams

mass = volume_mm3 * density         # ERROR: wrong unit conversion
cost = mass * (spool_price / spool_weight)
print(f"Mass: {mass:.2f} g, Cost: ${cost:.2f}")
```

**Q5.** The project initialization sequence uses the wrong directory for source {{i:files}}.
```bash
mkdir my_project
cd my_project
3dm new
# User's SCAD file should go here:
notepad.exe main.scad
3dm build
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining every line of this {{i:parametric}} {{i:cube}} {{i:file}}.
```openscad
width  = 30;
depth  = 20;
height = 10;

cube([width, depth, height]);
```

**Q7.** Add comments to this complete {{i:build}}-and-verify {{i:workflow}} {{i:script}}.
```bash
cd ~/Documents/3d_projects/my_cube
3dm build
3dm info
3dm info > model_report.txt
notepad.exe model_report.txt
```

**Q8.** Add comments explaining what {{i:each}} section of this installation {{i:script}} does (Linux/macOS).
```bash
curl -fsSL https://get.3dmake.dev | bash
3dm --version
openscad --version
mkdir -p ~/Documents/3d_projects/my_cube
cd ~/Documents/3d_projects/my_cube
3dm new
ls -1
```

**Q9.** Add comments explaining the FDM pipeline stages referenced in this {{i:parameter}} {{i:file}}.
```openscad
// Stage 1 — parametric source
width  = 40;
depth  = 30;
height = 15;
infill = 20;        // percent
layer_h = 0.20;     // mm

// Stage 2 — geometry (STL)
cube([width, depth, height]);
```

**Q10.** Add comments to this cost-estimation calculation.
```bash
VOLUME=6000
DENSITY=1.24
SPOOL_PRICE=20
SPOOL_WEIGHT=1000

MASS=$(echo "scale=4; ($VOLUME / 1000) * $DENSITY" | bc)
COST=$(echo "scale=4; $MASS * ($SPOOL_PRICE / $SPOOL_WEIGHT)" | bc)
echo "Mass: ${MASS} g"
echo "Cost: \$${COST}"
```

---

## 3dMake — Lesson 2: Geometric Primitives and CSG

### Fix the Code (Questions 1–5)

**Q1.** The `difference()` operation is missing the 0.001 mm offset rule. Add the correct offsets.
```openscad
difference() {
  cube([20, 20, 10]);
  translate([10, 10, 0])
    cylinder(h=10, r=5, $fn=32);
}
```

**Q2.** The children are in the wrong order for `difference()` — the cutting tool is listed {{i:first}}.
```openscad
difference() {
  cylinder(h=20, r=5, $fn=32);   // intended cutter
  cube([20, 20, 20]);             // intended base
}
```

**Q3.** The sphere is given an extremely low `$fn` value that will produce a faceted, unusable mesh for {{i:printing}}.
```openscad
sphere(r=15, $fn=3);
```

**Q4.** The `polygon()` points are listed in clockwise order (will produce an inverted or empty shape). Correct the winding order.
```openscad
linear_extrude(height=5)
  polygon([[0,30],[0,0],[40,0],[40,8],[8,8],[8,30]]);
```

**Q5.** The `#` debug modifier is left in the {{i:code}} {{i:before}} export. Identify and remove it.
```openscad
difference() {
  cube([30, 30, 20]);
  # translate([15, 15, -0.001])
    cylinder(h=20.002, r=8, $fn=32);
}
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} primitive and its key {{i:parameters}}.
```openscad
cube([30, 20, 10]);

translate([50, 0, 10])
  sphere(r=10, $fn=32);

translate([80, 0, 0])
  cylinder(h=20, r=8, $fn=32);

translate([110, 0, 0])
  cylinder(h=20, r1=10, r2=3, $fn=32);
```

**Q7.** Add comments to this `difference()` operation explaining {{i:each}} line's purpose.
```openscad
difference() {
  cube([20, 20, 20]);
  translate([10, 10, -0.001])
    cylinder(h=20.002, r=5, $fn=32);
}
```

**Q8.** Add comments explaining why the 0.001 offset is used and what {{i:each}} value means.
```openscad
difference() {
  cube([20, 20, 10]);
  translate([1, 1, -0.001])
    cube([18, 18, 10.002]);
}
```

**Q9.** Add comments to this `polygon()` L-bracket extrusion.
```openscad
bracket_profile = [
  [0,  0],
  [40, 0],
  [40, 8],
  [8,  8],
  [8,  30],
  [0,  30]
];

linear_extrude(height=5)
  polygon(bracket_profile);
```

**Q10.** Add comments explaining {{i:each}} debug modifier and when to use it.
```openscad
difference() {
  cube([30, 30, 20]);

  # translate([15, 15, -0.001])
    cylinder(h=20.002, r=8, $fn=32);
}

% translate([0, 0, 20])
  cube([30, 30, 5]);

! sphere(r=10, $fn=32);

* cube([5, 5, 5]);
```

---

## 3dMake — Lesson 3: Parametric Architecture and Modular Libraries

### Fix the Code (Questions 1–5)

**Q1.** This {{i:OpenSCAD}} {{i:code}} attempts to use Python-style variable reassignment, which doesn't {{i:work}} in {{i:OpenSCAD}}. Rewrite it correctly.
```openscad
x = 5;
x = x + 3;
cube([x, x, 5]);
```

**Q2.** The `assert()` call uses the wrong comparison — it accepts negative values.
```openscad
module safe_box(w, d, h) {
  assert(w >= 0, "width must be non-negative");
  cube([w, d, h]);
}
safe_box(-10, 20, 5);
```

**Q3.** The {{i:module}} uses `include` to load a library when it should use `use` (the library {{i:file}} contains top-level {{i:test}} {{i:geometry}} that will pollute the scene).
```openscad
include <../lib/hardware.scad>
mounting_hole(r=2, depth=5);
```

**Q4.** The DRY violation: the mounting hole is {{i:copy}}-pasted instead of {{i:using}} a {{i:module}}. Refactor it.
```openscad
difference() {
  cube([60, 40, 5]);
  translate([5,  5,  -0.001]) cylinder(r=2, h=5.002, $fn=16);
  translate([55, 5,  -0.001]) cylinder(r=2, h=5.002, $fn=16);
  translate([5,  35, -0.001]) cylinder(r=2, h=5.002, $fn=16);
  translate([55, 35, -0.001]) cylinder(r=2, h=5.002, $fn=16);
}
```

**Q5.** The `for` loop uses wrong syntax for generating {{i:geometry}} in {{i:OpenSCAD}}.
```openscad
for i in [0:3] {
  translate([i * 15, 0, 0])
    cylinder(r=3, h=10, $fn=16);
}
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:OpenSCAD}}'s variable scoping rules as shown in this {{i:code}}.
```openscad
x = 5;
echo("x =", x);
x = 10;

base_size   = 20;
padded_size = base_size + 10;
doubled     = base_size * 2;
echo(base_size, padded_size, doubled);
```

**Q7.** Add comments explaining every {{i:part}} of this validated {{i:module}}.
```openscad
module safe_cylinder(r, h, fn=32) {
  assert(is_num(r) && r > 0,
    str("radius must be positive, got: ", r));
  assert(is_num(h) && h > 0,
    str("height must be positive, got: ", h));
  assert(fn >= 3,
    str("fn must be >= 3, got: ", fn));
  cylinder(r=r, h=h, $fn=fn);
}
```

**Q8.** Add comments to this DRY-compliant mounting hole {{i:module}} and its usage.
```openscad
module mounting_hole(r=2, depth=5) {
  translate([0, 0, -0.001])
    cylinder(r=r, h=depth + 0.002, $fn=16);
}

difference() {
  cube([60, 40, 5]);
  translate([5,  5,  0]) mounting_hole();
  translate([55, 5,  0]) mounting_hole();
  translate([5,  35, 0]) mounting_hole();
  translate([55, 35, 0]) mounting_hole();
}
```

**Q9.** Add comments to this `use` vs `include` example showing correct library {{hi:Import}}import.
```openscad
use <../lib/hardware.scad>

mounting_hole(r=2, depth=5);
translate([20, 0, 0]) mounting_hole(r=3, depth=8);
```

**Q10.** Add comments explaining {{i:each}} line of this `for`-loop {{i:geometry}} generator.
```openscad
for (i = [0:5]) {
  angle = i * 60;
  translate([cos(angle) * 25, sin(angle) * 25, 0])
    cylinder(r=3, h=5, $fn=16);
}
```

---

## 3dMake — Lesson 4: AI-Enhanced Verification and Multimodal Feedback

### Fix the Code (Questions 1–5)

**Q1.** The verification sequence uses an AI description as the primary check instead of the deterministic bounding box. Rewrite it in the correct order.
```bash
3dm build
3dm info --view front
# Accept design if description says "looks like a bracket"
# Skip bounding box check
```

**Q2.** The `3dm info` {{i:command}} is saved to a {{i:file}} {{i:using}} the wrong redirection for {{i:PowerShell}}.
```powershell
3dm info > description.txt -Encoding UTF8
```

**Q3.** The AI {{i:code}} verification checklist is missing the 0.001 offset check. Add the missing item in the right position.
```
[ ] 1. SYNTAX — 3dm build compiles without error
[ ] 2. DIMENSIONS — bounding box matches design intent
[ ] 3. PARAMETER BEHAVIOR — test extreme values
[ ] 4. MANIFOLD CHECK — open in slicer, no errors
[ ] 5. PRINT FEASIBILITY — wall thickness >= 1.2mm
```

**Q4.** The verification log records an AI description as proof of precise dimensions. Correct the methodology.
```
Feature: USB-C slot
  Designed: 9.5mm wide × 3.5mm tall
  Verification: AI description says "rectangular cutout approximately 10mm wide" ✓
  Status: VERIFIED
```

**Q5.** The isolation technique for a complex model uses the wrong modifier to render only {{i:one}} {{i:module}}.
```openscad
full_assembly();
% snap_clip();
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} `3dm info` variant and when to use it.
```bash
3dm build
3dm info
3dm info --view front
3dm info --view top
3dm info --view isometric
3dm info --output description.txt
```

**Q7.** Add comments to this verification escalation chain.
```bash
3dm info
# Level 1 check passed — proceed to Level 2

# Open slicer manually on build/main.stl
# Step through layers looking for issues

# Level 2 check passed — proceed to Level 3

# Level 3: isolate module
```

**Q8.** Add comments explaining {{i:each}} step of this isolation-and-verify {{i:workflow}}.
```openscad
// full_assembly();
// base_plate();
snap_clip();
```
```bash
3dm build
3dm info --view isometric
3dm info --view front
```

**Q9.** Add comments explaining the two types of {{i:output}} visible in this `3dm info` result.
```
File:         build/main.stl
Bounding Box: 30.0 x 20.0 x 10.0 mm
Volume:       6000.0 mm³
Triangles:    12
Description:  A small rectangular box measuring 30mm wide by 20mm deep by 10mm tall.
```

**Q10.** Add comments to this AI {{i:code}} verification checklist explaining why {{i:each}} check exists.
```
[ ] 1. SYNTAX
[ ] 2. DIMENSIONS
[ ] 3. BOOLEAN OPERATIONS — check every difference() for 0.001 offset
[ ] 4. PARAMETER BEHAVIOR — test extreme values
[ ] 5. MANIFOLD CHECK
[ ] 6. PRINT FEASIBILITY
```

---

## 3dMake — Lesson 5: Safety, Filaments, and Print Environment

### Fix the Code (Questions 1–5)

**Q1.** The cost-estimation formula uses the wrong density for {{hi:PLA}}PLA.
```openscad
// Cost estimate for PLA
volume_mm3 = 8500;
density    = 1.05;   // g/cm³ — WRONG material
spool_cost = 20;
spool_g    = 1000;

mass = (volume_mm3 / 1000) * density;
cost = mass * (spool_cost / spool_g);
echo("Est. cost: $", cost);
```

**Q2.** The safety checklist incorrectly marks {{hi:ABS}}ABS as safe to {{i:print}} in an open classroom without a fume enclosure.
```
Pre-print safety check:
[x] Filament loaded: ABS
[x] Ventilation: window open
[x] Ready to print in open classroom
```

**Q3.** The thermal runaway note is wrong — this protection must be enabled, not optional.
```
Printer setup checklist:
[ ] Bed level confirmed
[ ] Nozzle clean
[ ] Thermal runaway: optional, enable if desired
```

**Q4.** The post-{{i:print}} removal instruction is dangerous — it says to remove the {{i:part}} immediately at full temperature.
```
Post-print steps:
1. Print finishes.
2. Immediately remove part from heated bed with bare hands.
3. Store filament in a bag.
```

**Q5.** The {{i:filament}} density table has PLA and ABS swapped. Correct the table.
```
Material  | Density (g/cm³)
----------|----------------
PLA       | 1.05
ABS       | 1.24
PETG      | 1.27
TPU       | 1.20
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} line of this pre-{{i:print}} safety checklist {{i:script}}.
```bash
echo "=== Pre-Print Safety Check ===" > safety_log.txt
echo "Date: $(date)" >> safety_log.txt
echo "Filament: PLA" >> safety_log.txt
echo "Ventilation confirmed: YES" >> safety_log.txt
echo "Fire extinguisher present: YES" >> safety_log.txt
echo "Thermal runaway enabled: YES" >> safety_log.txt
echo "First layer watch timer: 15 min" >> safety_log.txt
```

**Q7.** Add comments to this cost-estimation snippet explaining {{i:each}} formula step.
```openscad
volume_mm3    = 8500;
density_pla   = 1.24;
spool_price   = 20;
spool_weight  = 1000;

mass = (volume_mm3 / 1000) * density_pla;
cost = mass * (spool_price / spool_weight);

echo("Volume (mm³):", volume_mm3);
echo("Mass (g):", mass);
echo("Est. cost ($):", cost);
```

**Q8.** Add comments explaining {{i:each}} row of this {{i:filament}} selection table embedded in {{i:OpenSCAD}} comments.
```openscad
// FILAMENT REFERENCE
// PLA   — density 1.24 g/cm³ — easiest, classroom default
// PETG  — density 1.27 g/cm³ — tougher, mild heat, moderate stringing
// ABS   — density 1.05 g/cm³ — high heat, fumes — enclosure required
// TPU   — density 1.20 g/cm³ — flexible, direct-drive extruder only
material = "PLA";
```

**Q9.** Add comments to this {{i:filament}}-selection {{i:module}}.
```openscad
function filament_density(material) =
  (material == "PLA")  ? 1.24 :
  (material == "PETG") ? 1.27 :
  (material == "ABS")  ? 1.05 :
  (material == "TPU")  ? 1.20 :
  undef;

volume   = 6000;
mat      = "PLA";
density  = filament_density(mat);
mass     = (volume / 1000) * density;
echo("Material:", mat, "| Mass:", mass, "g");
```

**Q10.** Add comments explaining {{i:each}} step of this {{i:first}}-{{i:layer}} monitoring checklist embedded in an automation log.
```bash
echo "=== First Layer Monitor ===" >> print_log.txt
echo "Layer 1: bed adhesion — check in 2 min" >> print_log.txt
echo "Layer 2: no lifting at corners" >> print_log.txt
echo "Layer 3: temperature stable" >> print_log.txt
echo "Layer 3: no grinding sounds" >> print_log.txt
echo "First layer check complete — continue monitoring every 15 min" >> print_log.txt
```

---

## 3dMake — Lesson 6: Practical 3dm Commands and Text Embossing

### Fix the Code (Questions 1–5)

**Q1.** The embossed {{i:text}} is positioned below the top face of the base plate instead of on top of it.
```openscad
base_h = 5;
cube([80, 15, base_h]);
translate([40, 7.5, 0])
  linear_extrude(height=1.5)
    text("FRONT", size=6, font="Liberation Sans:style=Bold",
         halign="center", valign="center");
```

**Q2.** The debossed {{i:text}} cut is not deep enough — the extrude {{i:height}} doesn't reach past the top face.
```openscad
difference() {
  cube([80, 15, 5]);
  translate([40, 7.5, 4.5])
    linear_extrude(height=0.4)
      text("BACK", size=6, font="Liberation Sans:style=Bold",
           halign="center", valign="center");
}
```

**Q3.** The font is hardcoded in three separate places instead of {{i:using}} the single-constant pattern. Refactor it.
```openscad
cube([80, 15, 5]);
translate([40, 7.5, 5])
  linear_extrude(height=1.5)
    text("FRONT", size=6, font="Liberation Sans:style=Bold",
         halign="center", valign="center");

translate([0, 20, 0]) cube([80, 15, 5]);
translate([40, 27.5, 10])
  linear_extrude(height=1.5)
    text("BACK", size=6, font="Liberation Sans:style=Bold",
         halign="center", valign="center");
```

**Q4.** The `3dm slice` {{i:command}} is {{i:run}} {{i:before}} `3dm build`, meaning it will slice the previous (stale) {{i:STL}} {{i:file}}.
```bash
3dm slice
3dm build
3dm info
```

**Q5.** The `let()` block uses wrong assignment syntax inside the expression.
```openscad
module label_plate(msg, w=80, d=15, h=5) {
  let(text_size == h * 0.6) {
    cube([w, d, h]);
    translate([w/2, d/2, h])
      linear_extrude(height=1.5)
        text(msg, size=text_size, halign="center", valign="center");
  }
}
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining every {{i:parameter}} of the `text()` function call.
```openscad
linear_extrude(height=1.5)
  text(
    text      = "3dMake",
    size      = 10,
    font      = "Liberation Sans",
    halign    = "center",
    valign    = "baseline",
    spacing   = 1.0,
    direction = "ltr",
    language  = "en",
    script    = "latin"
  );
```

**Q7.** Add comments explaining {{i:each}} step of this embossed-plate {{i:module}}.
```openscad
LABEL_FONT = "Liberation Sans:style=Bold";

module embossed_plate(message, w=80, d=15, h=5, text_size=8, relief=1.5) {
  cube([w, d, h]);
  translate([w/2, d/2, h])
    linear_extrude(height=relief)
      text(message, font=LABEL_FONT, size=text_size,
           halign="center", valign="center");
}

embossed_plate("FRONT");
translate([0, 20, 0]) embossed_plate("BACK");
```

**Q8.** Add comments explaining {{i:each}} {{i:command}} in the full `3dm` suite.
```bash
3dm build
3dm build --clean
3dm build --watch
3dm info
3dm info --view front
3dm info --view top,front,isometric
3dm preview
3dm orient
3dm slice
```

**Q9.** Add comments to this debossed {{i:text}} implementation.
```openscad
difference() {
  cube([80, 15, 5]);
  translate([40, 7.5, 5 - 0.8])
    linear_extrude(height=1.0)
      text("BACK", size=6, font="Liberation Sans:style=Bold",
           halign="center", valign="center");
}
```

**Q10.** Add comments to this variant-generation automation {{i:script}}.
```bash
#!/bin/bash
LABELS=("FRONT" "BACK" "LEFT" "RIGHT" "TOP" "BOTTOM")
mkdir -p build/labels

for LABEL in "${LABELS[@]}"; do
    OUT="build/labels/plate_${LABEL}.stl"
    openscad -D "label=\"${LABEL}\"" -o "$OUT" src/label_plate.scad
    echo "Built: $OUT"
done
echo "All label variants built."
```

---

## 3dMake — Lesson 7: Parametric Transforms and the Phone Stand

### Fix the Code (Questions 1–5)

**Q1.** The transform order is wrong — the {{i:cube}} will orbit the origin instead of rotating in place.
```openscad
rotate([0, 0, 45]) translate([20, 0, 0]) cube(5);
```
*(Hint: to rotate in place then move, which should come {{i:first}} in reading order?)*

**Q2.** The `atan` function is used instead of `atan2`, which will give wrong results in some quadrants.
```openscad
dx = -5;
dy = 5;
angle = atan(dy / dx);
echo("Angle:", angle);
```

**Q3.** The `minkowski()` call uses `$fn=64` on the secondary sphere during development, making renders extremely slow.
```openscad
module rounded_box(w, d, h, r=3) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h - r]);
    sphere(r=r, $fn=64);
  }
}
rounded_box(40, 30, 20);
```

**Q4.** The `mirror()` call uses the wrong axis vector — it reflects across the XZ plane instead of the YZ plane.
```openscad
module ear_peg() {
  translate([20, 0, 0]) cylinder(r=4, h=8, $fn=32);
}
ear_peg();
mirror([0, 1, 0]) ear_peg();
```

**Q5.** The `$preview` variable is used backwards — the slow high-{{i:quality}} render runs during preview and the fast version runs during final {{i:build}}.
```openscad
$fn = $preview ? 64 : 16;
sphere(r=20);
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining the transform order rule demonstrated in these two examples.
```openscad
translate([10, 0, 0]) rotate([0, 0, 45]) cube(5);

rotate([0, 0, 45]) translate([10, 0, 0]) cube(5);
```

**Q7.** Add comments explaining {{i:each}} trig function used in this circular placement loop.
```openscad
for (i = [0:5]) {
  angle = i * 60;
  translate([cos(angle) * 25, sin(angle) * 25, 0])
    cylinder(r=3, h=5, $fn=16);
}
```

**Q8.** Add comments explaining {{i:each}} {{i:module}} and {{i:parameter}} in the phone stand assembly.
```openscad
phone_w = 75;
phone_d = 9;
angle   = 65;

lip_h      = 15;
base_h     = 5;
cradle_wall= 3;
r_fillet   = 3;
base_d     = (phone_d + 10) / cos(90 - angle);

module base_plate() {
  flat_rounded_cube(phone_w + 20, base_d + 10, base_h, r_fillet);
}

module back_support() {
  rotate([angle - 90, 0, 0])
    flat_rounded_cube(phone_w + 6, cradle_wall, 60, r_fillet);
}

module lip() {
  rotate([angle - 90, 0, 0])
    translate([0, -lip_h, 0])
      flat_rounded_cube(phone_w + 6, lip_h + cradle_wall, cradle_wall, r_fillet);
}

base_plate();
translate([0, 0, base_h]) { back_support(); lip(); }
```

**Q9.** Add comments explaining how `$preview` enables fast development.
```openscad
$fn = $preview ? 16 : 64;

module flat_rounded_cube(w, d, h, r=3) {
  if ($preview) {
    color("orange", 0.6) cube([w, d, h]);
  } else {
    minkowski() {
      cube([w - 2*r, d - 2*r, h]);
      cylinder(r=r, h=0.01, $fn=24);
    }
  }
}

flat_rounded_cube(40, 30, 20, r=4);
```

**Q10.** Add comments to this `mirror()` symmetry example.
```openscad
module mounting_clip() {
  difference() {
    cube([15, 8, 10]);
    translate([7.5, -0.001, 2])
      cylinder(r=3, h=8.002, $fn=32);
  }
}

translate([0, 20, 0]) {
  mounting_clip();
  translate([15, 0, 0]) mirror([1, 0, 0]) mounting_clip();
}
```

---

## 3dMake — Lesson 8: Advanced Parametric {{i:Design}} and Interlocking Features

### Fix the Code (Questions 1–5)

**Q1.** The tolerance constants are hardcoded inline instead of defined as named constants at the top. Refactor to use constants.
```openscad
module peg(nominal=10, h=8) {
  cylinder(d=nominal - 0.3, h=h, $fn=32);
}
module socket(nominal=10, plate_t=3) {
  difference() {
    cylinder(d=nominal + 8, h=plate_t, $fn=32);
    translate([0, 0, -0.001])
      cylinder(d=nominal, h=plate_t + 0.002, $fn=32);
  }
}
```

**Q2.** The snap-fit beam {{i:parameters}} are specified for PLA but the comment says {{hi:PETG}}PETG. Fix the comment to match the {{i:geometry}} (do not change the numbers — assume PLA values are correct).
```openscad
// PETG snap arm — thicker beam for stiffer material
module snap_arm_pla(beam_l=18, beam_t=1.8, beam_w=8) {
  cube([beam_w, beam_l, beam_t]);
  translate([0, beam_l, 0])
    cube([beam_w, 3, 2.5]);
}
```

**Q3.** The stacking-bin lip is positioned at the wrong Z {{i:height}} — it should start at `bin_h`, not `bin_h - lip_h`.
```openscad
bin_h  = 40;
lip_h  = 5;
bin_w  = 80;
bin_d  = 60;
lip_clear = 0.25;

module stacking_lip() {
  translate([lip_clear, lip_clear, bin_h - lip_h])
    cube([bin_w - 2*lip_clear, bin_d - 2*lip_clear, lip_h]);
}
```

**Q4.** The M3 insert pocket extends above the host {{i:material}} (depth is too large for a 10mm plate).
```openscad
difference() {
  cube([40, 30, 10]);
  translate([10, 15, -0.001]) cylinder(r=2.35, h=20, $fn=16);
  translate([30, 15, -0.001]) cylinder(r=2.35, h=20, $fn=16);
}
```

**Q5.** The dovetail female profile is given a negative clearance, which would make the slot smaller than the male {{i:part}}.
```openscad
clearance = -0.2;

module dovetail_female(w_top=8, w_bot=12, h=5, c=clearance) {
  profile = [
    [-(w_bot/2 + c), -0.001], [ w_bot/2 + c, -0.001],
    [ w_top/2 + c,   h + c ], [-(w_top/2 + c), h + c]
  ];
  rotate([90, 0, 0])
    linear_extrude(50)
      polygon(profile);
}
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining {{i:each}} tolerance constant and how it was determined.
```openscad
PRESS_FIT_C = 0.2;
SLIP_FIT_C  = 0.3;
LOOSE_FIT_C = 0.45;
SNAP_C      = PRESS_FIT_C;
```

**Q7.** Add comments explaining {{i:each}} step of the tolerance {{i:test}} coupon.
```openscad
nominal     = 10;
test_h      = 8;
plate_t     = 3;
socket_d_out= nominal + 8;
clearances  = [0.0, 0.1, 0.2, 0.3, 0.4];

module test_peg(clearance) {
  color("SteelBlue")
    cylinder(d=nominal - clearance, h=test_h, $fn=32);
}

module test_socket() {
  color("Coral")
  difference() {
    cylinder(d=socket_d_out, h=plate_t, $fn=32);
    translate([0, 0, -0.001])
      cylinder(d=nominal, h=plate_t + 0.002, $fn=32);
  }
}
```

**Q8.** Add comments explaining the physics behind {{i:each}} snap-arm {{i:parameter}}.
```openscad
module snap_arm(beam_l=18, beam_t=1.8, beam_w=8, hook_h=1.5) {
  cube([beam_w, beam_l, beam_t]);
  translate([0, beam_l, 0])
    cube([beam_w, 3, hook_h + beam_t]);
}
```

**Q9.** Add comments to this dovetail joint {{i:module}} explaining the {{i:geometry}}.
```openscad
module dovetail_male(l=50, w_top=8, w_bot=12, h=5) {
  profile = [
    [-w_bot/2, 0], [ w_bot/2, 0],
    [ w_top/2, h], [-w_top/2, h]
  ];
  rotate([90, 0, 0])
    linear_extrude(l)
      polygon(profile);
}
```

**Q10.** Add comments to this chamfered-box {{i:module}} explaining the {{i:geometry}} operation.
```openscad
module chamfered_box(w, d, h, c=2) {
  difference() {
    cube([w, d, h]);
    translate([0, 0, h - c])
      difference() {
        cube([w, d, c + 0.001]);
        translate([c, c, 0])
          cube([w - 2*c, d - 2*c, c + 0.001]);
      }
  }
}
chamfered_box(50, 40, 20, c=3);
```

---

## 3dMake — Lesson 9: Automation and 3dm Workflows

### Fix the Code (Questions 1–5)

**Q1.** The bash {{i:script}} is missing all three safety flags. Add them in the correct location.
```bash
#!/bin/bash
LOG="build/build.log"
mkdir -p build
openscad -o build/main.stl src/main.scad 2>&1 | tee -a "$LOG"
echo "Done"
```

**Q2.** The string {{i:parameter}} quoting is wrong — {{i:OpenSCAD}} will receive the label without inner double quotes.
```bash
LABEL="FRONT PANEL"
openscad -D "label=$LABEL" -o out.stl src/main.scad
```

**Q3.** The {{i:PowerShell}} {{i:script}} checks `$LASTEXITCODE` but doesn't actually stop on failure.
```powershell
$output = & openscad -o build\main.stl src\main.scad 2>&1
$output | Write-Host
if ($LASTEXITCODE -ne 0) { Write-Host "Build failed" }
Write-Host "Continuing..."
```

**Q4.** The batch {{i:script}} counter increment uses wrong CMD syntax.
```cmd
@echo off
set SUCCESS=0
set FAIL=0
for %%W in (60 80 100) do (
    openscad -D "width=%%W" -o build\out_%%W.stl src\main.scad
    if %errorlevel% equ 0 (
        set SUCCESS = %SUCCESS% + 1
    ) else (
        set FAIL = %FAIL% + 1
    )
)
echo %SUCCESS% succeeded, %FAIL% failed
```

**Q5.** The {{i:file}}-size check uses the wrong comparison operator — it warns when the {{i:file}} is large instead of when it's suspiciously small.
```bash
STL_SIZE=$(stat -c%s "build/main.stl")
if [ "$STL_SIZE" -gt 1000 ]; then
  echo "WARNING: STL suspiciously small"
fi
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to every significant line of this robust bash {{i:build}} {{i:script}}.
```bash
#!/bin/bash
set -e
set -u
set -o pipefail

LOG_DIR="build/logs"
LOG_FILE="$LOG_DIR/build_$(date +%Y%m%d_%H%M%S).log"
mkdir -p "$LOG_DIR" build

log() {
  local level="$1"; shift
  echo "[$(date +%H:%M:%S)] [$level] $*" | tee -a "$LOG_FILE"
}

on_error() { log "ERROR" "Failed at line $1"; exit 1; }
trap 'on_error $LINENO' ERR

log "INFO" "=== Build started ==="
openscad -o build/main.stl src/main.scad 2>&1 | tee -a "$LOG_FILE"
STL_SIZE=$(stat -c%s "build/main.stl")
[ "$STL_SIZE" -gt 1000 ] || log "WARN" "STL small: ${STL_SIZE} bytes"
log "INFO" "Build OK: ${STL_SIZE} bytes"
3dm info 2>&1 | tee -a "$LOG_FILE"
```

**Q7.** Add comments explaining {{i:each}} string-quoting technique.
```bash
LABEL="FRONT PANEL"

openscad -D 'label="FRONT"' -o out1.stl src/main.scad
openscad -D "label=\"${LABEL}\"" -o out2.stl src/main.scad
echo "openscad -D 'label=\"${LABEL}\"' -o out3.stl src/main.scad"
```

**Q8.** Add comments to this {{i:PowerShell}} batch-{{i:build}} {{i:script}}.
```powershell
$outputDir = "build\variants"
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$widths = @(60, 80, 100, 120)
$walls  = @(1.2, 1.6, 2.0)
$ok = 0; $fail = 0

foreach ($w in $widths) {
    foreach ($wt in $walls) {
        $name = "bracket_w${w}_wall${wt}"
        $out  = "$outputDir\${name}.stl"
        & openscad -D "width=$w" -D "wall=$wt" -o $out src\main.scad 2>$null
        if ($LASTEXITCODE -eq 0) { $ok++ } else { $fail++ }
    }
}
Write-Host "Done: $ok succeeded, $fail failed"
```

**Q9.** Add comments to this CI/CD {{i:GitHub}} Actions {{i:workflow}}.
```yaml
name: Build STL Artifacts
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install OpenSCAD
        run: sudo apt-get install -y openscad
      - name: Install 3dm
        run: curl -fsSL https://get.3dmake.dev | bash
      - name: Build
        run: 3dm build
      - name: Verify
        run: 3dm info
      - name: Upload STL
        uses: actions/upload-artifact@v3
        with:
          name: stl-output
          path: build/*.stl
```

**Q10.** Add comments to this watch-mode automation {{i:script}}.
```bash
#!/bin/bash
set -e
SRC="src/main.scad"
LAST_MOD=""

echo "Watching: $SRC"
while true; do
    CURRENT_MOD=$(stat -c %Y "$SRC" 2>/dev/null || echo "0")
    if [ "$CURRENT_MOD" != "$LAST_MOD" ]; then
        LAST_MOD="$CURRENT_MOD"
        echo "[$(date +%H:%M:%S)] Change detected — rebuilding..."
        3dm build && 3dm info || echo "Build failed"
    fi
    sleep 2
done
```

---

## 3dMake — Lesson 10: Advanced Techniques — `hull()`, `projection()`, Non-Manifold Geometry

### Fix the Code (Questions 1–5)

**Q1.** The `hull()` rounded box uses corner spheres, but they are placed at the wrong positions — at (0,0) instead of offset by the radius.
```openscad
r = 5;
w = 40; d = 30; h = 20;

hull() {
  for (x = [0, w]) {
    for (y = [0, d]) {
      translate([x, y, 0]) sphere(r=r, $fn=24);
      translate([x, y, h]) sphere(r=r, $fn=24);
    }
  }
}
```

**Q2.** The `minkowski()` call uses `$fn=64` on the secondary sphere during development instead of {{i:using}} `$preview`.
```openscad
module rounded_box(w, d, h, r=4) {
  minkowski() {
    cube([w - 2*r, d - 2*r, h - r]);
    sphere(r=r, $fn=64);
  }
}
rounded_box(50, 40, 20, r=5);
```

**Q3.** The `projection()` cross-section is taken at the wrong {{i:height}} — the model is not shifted to put the cut plane at the intended Z level.
```openscad
module phone_stand_example() {
  cube([90, 70, 5]);
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);
}

linear_extrude(1)
  projection(cut=true)
    phone_stand_example();
```
*(The cut should be at z=10 of the model, not z=0.)*

**Q4.** The non-manifold {{i:geometry}} fix is wrong — the zero-thickness wall is left in place.
```openscad
// WRONG: zero-thickness internal wall (non-manifold)
difference() {
  cube([20, 20, 20]);
  translate([10, 0, 0]) cube([0, 20, 20]);  // zero-width slice — non-manifold
}

// ATTEMPTED FIX (still wrong):
difference() {
  cube([20, 20, 20]);
  translate([10, 0, 0]) cube([0, 20, 20]);  // still zero width
}
```
*(Provide a correct fix {{i:using}} a non-zero wall thickness.)*

**Q5.** The `surface()` call uses an incorrect {{i:file}} path that will silently produce no {{i:geometry}}.
```openscad
scale([1, 1, 0.1])
  surface(file="heightmap/terrain.png", center=true, invert=false);
```
*(The {{i:file}} path issue: if the {{i:file}} doesn't exist, {{i:OpenSCAD}} produces empty {{i:geometry}} with no {{i:error}}. Write the correct verification approach {{i:using}} `3dm info` {{i:output}}.)*

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments explaining what `hull()` produces in {{i:each}} example.
```openscad
hull() {
  cylinder(r=20, h=1, $fn=6);
  translate([0, 0, 30])
    sphere(r=8, $fn=32);
}

translate([60, 0, 0])
hull() {
  cylinder(r=6, h=2, $fn=32);
  translate([40, 0, 0])
    cylinder(r=1, h=2, $fn=16);
}
```

**Q7.** Add comments to this `$preview`-guarded `minkowski()` {{i:module}}.
```openscad
module rounded_box(w, d, h, r=4) {
  if ($preview) {
    color("orange", 0.6) cube([w, d, h]);
  } else {
    minkowski() {
      cube([w - 2*r, d - 2*r, h - r]);
      sphere(r=r, $fn=12);
    }
  }
}

rounded_box(50, 40, 20, r=5);
```

**Q8.** Add comments explaining {{i:each}} `projection()` mode.
```openscad
module phone_stand_example() {
  cube([90, 70, 5]);
  translate([15, 20, 5]) cylinder(r=5, h=35, $fn=24);
}

phone_stand_example();

color("LightGreen")
translate([110, 0, 0])
  linear_extrude(1)
    projection(cut=false)
      phone_stand_example();

color("LightCoral")
translate([220, 0, 0])
  linear_extrude(1)
    projection(cut=true)
      translate([0, 0, -3])
        phone_stand_example();
```

**Q9.** Add comments to this non-manifold {{i:geometry}} fix.
```openscad
// PROBLEM: co-planar faces
difference() {
  cube([20, 20, 10]);
  translate([5, 5, 0])
    cube([10, 10, 10]);
}

// FIX: 0.001 offset rule applied
difference() {
  cube([20, 20, 10]);
  translate([5, 5, -0.001])
    cube([10, 10, 10.002]);
}
```

**Q10.** Add comments to this data-driven {{i:design}} {{i:using}} `search()` and `lookup()`.
```openscad
SIZES = [
  ["small",  20, 15, 8],
  ["medium", 35, 25, 12],
  ["large",  50, 40, 18]
];

function get_size(name, col) =
  SIZES[search([name], SIZES, 1, 0)[0]][col];

variant = "medium";
w = get_size(variant, 1);
d = get_size(variant, 2);
h = get_size(variant, 3);
cube([w, d, h]);
echo("Building:", variant, w, "x", d, "x", h);
```

---

## 3dMake — Lesson 11: Stakeholder-Centric {{i:Design}} and the Final Project

### Fix the Code (Questions 1–5)

**Q1.** The requirement mapping uses a non-descriptive variable {{i:name}} — rename the variable so it traces directly to the functional requirement.
```openscad
// FR1: Must fit standard bracelet diameters (50–70 mm)
x = 70;
inner_r = x / 2;
cylinder(r=inner_r + 2, h=10, $fn=64);
```

**Q2.** The acceptance criterion {{i:test}} is based on AI description instead of a measurable, deterministic check. Rewrite it.
```
Feature: bead hole diameter
Acceptance Test: run 3dm info and confirm description mentions "small hole"
Result: PASS
```

**Q3.** The bead {{i:module}} is missing an `assert()` for the cord-hole diameter — small holes will fail to {{i:print}} cleanly. Add the appropriate assertion.
```openscad
module bead_A(size=15, detail=32) {
  difference() {
    sphere(r=size/2, $fn=detail);
    cylinder(r=1.0, h=size + 1, center=true, $fn=16);
  }
}
```

**Q4.** The Technical {{i:Design}} Specification variable is named `x` instead of a {{i:name}} that reflects its requirement origin.
```openscad
// FR2: Base must be stable — width >= 1.2 × total height
total_height = 80;
x = 1.2 * total_height;
cube([x, x, 5]);
```

**Q5.** The iteration step changes a dimension by guessing without measuring {{i:first}}. Rewrite the comment to enforce the engineering approach.
```openscad
// Iteration: user said "it's too tight"
// Changed slip_clearance from 0.25 to 0.35 — seems about right
slip_clearance = 0.35;
```

---

### Comment the Code (Questions 6–10)

**Q6.** Add comments to this requirement-mapped {{i:parameter}} block.
```openscad
// FR1
bracelet_max_d = 70;

// FR2
total_height = 80;
base_w = 1.2 * total_height;

// FR3
module tactile_marker() {
  sphere(r=2, $fn=16);
}

// FR4
SLIP_C = 0.3;
```

**Q7.** Add comments explaining {{i:each}} function in this final project's modular structure.
```openscad
module bead_A(size=15, detail=32, hole_r=1.0) {
  assert(size > 0, "size must be positive");
  assert(hole_r > 0 && hole_r < size/2, "hole_r out of range");
  difference() {
    sphere(r=size/2, $fn=detail);
    cylinder(r=hole_r, h=size + 1, center=true, $fn=16);
  }
}

module bead_B(size=12, detail=6, hole_r=1.0) {
  assert(size > 0, "size must be positive");
  difference() {
    cylinder(r=size/2, h=size, center=true, $fn=detail);
    cylinder(r=hole_r, h=size + 1, center=true, $fn=16);
  }
}
```

**Q8.** Add comments to this structured feedback log.
```bash
echo "=== Stakeholder Feedback — Iteration 1 ===" > feedback.txt
echo "Date: $(date)" >> feedback.txt
echo "Observation: user hesitated to locate clasp" >> feedback.txt
echo "Quote: 'the clasp blends in with the rest'" >> feedback.txt
echo "Measurement: clasp width = 8.2mm (designed 9.0mm)" >> feedback.txt
echo "Action: increase clasp_w by 0.8mm; reprint test coupon first" >> feedback.txt
```

**Q9.** Add comments to this user story and acceptance-criteria block embedded in the SCAD {{i:file}}.
```openscad
// USER STORY
// As a jewelry collector,
// I want the holder to have 2mm clearance
// so that my bracelets slide on easily but don't fall off.

SLIP_C = 0.3;  // measured from test coupon

bracelet_max_d = 70;
holder_inner_r = (bracelet_max_d / 2) + SLIP_C;
holder_outer_r = holder_inner_r + 3;
holder_h = 10;

difference() {
  cylinder(r=holder_outer_r, h=holder_h, $fn=64);
  translate([0, 0, -0.001])
    cylinder(r=holder_inner_r, h=holder_h + 0.002, $fn=64);
}
```

**Q10.** Add comments to this complete {{i:design}}-thinking {{i:workflow}} {{i:script}}.
```bash
#!/bin/bash
PROJECT="$1"
BASE="$HOME/Documents/3d_projects/$PROJECT"

mkdir -p "$BASE"
cd "$BASE"
3dm new

cat > design_notes.md << EOF
# $PROJECT Design Notes
## Stakeholder Interview
## Functional Requirements
## Acceptance Criteria
## Technical Design Specification
## Iteration Log
EOF

echo "Project scaffolded: $BASE"
ls -1
```

