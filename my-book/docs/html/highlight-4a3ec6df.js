<!DOCTYPE HTML>
<html lang="en" class="rust sidebar-visible" dir="ltr">
    <head>
        <!-- Book generated using mdBook -->
        <meta charset="UTF-8">
        <title>Appendix E: Advanced OpenSCAD Concepts - 3D Printing Course for Blind and Visually Impaired Learners</title>


        <!-- Custom HTML head -->
        <script>
          (function(){
            // Load Atkinson Hyperlegible fonts from the book assets (injected at runtime so paths are correct on GitHub Pages)
            try {
              const link = Array.from(document.getElementsByTagName('link')).find(l => l.href && l.href.match(/\/css\/variables-.*\.css$/));
              const base = (function(){
                if (!link) return (window.location.origin||'') + '/';
                const u = new URL(link.href, window.location.href);
                const basePath = u.pathname.replace(/\/css\/.*$/,'');
                return u.origin + basePath + (basePath.endsWith('/') ? '' : '/');
              })();
        
              const css = `\
        @font-face {\
          font-family: 'Atkinson Hyperlegible Next';\
          src: url('${base}assets/fonts/AtkinsonHyperlegibleNext-Regular.ttf') format('truetype');\
          font-weight: 400; font-style: normal; font-display: swap;\
        }\
        @font-face {\
          font-family: 'Atkinson Hyperlegible Mono';\
          src: url('${base}assets/fonts/AtkinsonHyperlegibleMono-SemiBold.ttf') format('truetype');\
          font-weight: 600; font-style: normal; font-display: swap;\
        }\
        @font-face {\
          font-family: 'Atkinson Hyperlegible Mono';\
          src: url('${base}assets/fonts/AtkinsonHyperlegibleMono-Regular.otf') format('opentype');\
          font-weight: 400; font-style: normal; font-display: swap;\
        }\
        pre, code, .hljs, .leftbar { font-family: 'Atkinson Hyperlegible Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", "Courier New", monospace !important; }\
        body { font-family: 'Atkinson Hyperlegible Next', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }\
        `;
        
              const style = document.createElement('style');
              style.appendChild(document.createTextNode(css));
              document.head.appendChild(style);
            } catch (e) { console.warn('Font injection failed', e); }
          })();
        </script>
        
        <script src="https://unpkg.com/mermaid@10/dist/mermaid.min.js"></script>
        <script>
          document.addEventListener("DOMContentLoaded", () => {
            mermaid.initialize({ startOnLoad: true });
          });
        </script>

        <meta name="description" content="An introduction to 3D printing for blind and visually impaired learners, using OpenSCAD and 3DMake to create accessible 3D models.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#ffffff">

        <link rel="icon" href="../favicon-de23e50b.svg">
        <link rel="shortcut icon" href="../favicon-8114d1fc.png">
        <link rel="stylesheet" href="../css/variables-8adf115d.css">
        <link rel="stylesheet" href="../css/general-2459343d.css">
        <link rel="stylesheet" href="../css/chrome-ae938929.css">
        <link rel="stylesheet" href="../css/print-9e4910d8.css" media="print">

        <!-- Fonts -->
        <link rel="stylesheet" href="../fonts/fonts-9644e21d.css">

        <!-- Highlight.js Stylesheets -->
        <link rel="stylesheet" id="mdbook-highlight-css" href="../highlight-493f70e1.css">
        <link rel="stylesheet" id="mdbook-tomorrow-night-css" href="../tomorrow-night-4c0ae647.css">
        <link rel="stylesheet" id="mdbook-ayu-highlight-css" href="../ayu-highlight-3fdfc3ac.css">

        <!-- Custom theme stylesheets -->
        <link rel="stylesheet" href="../src/assets/custom-19d70d6b.css">


        <!-- Provide site root and default themes to javascript -->
        <script>
            const path_to_root = "../";
            const default_light_theme = "rust";
            const default_dark_theme = "navy";
            window.path_to_searchindex_js = "../searchindex-c3fdb52a.js";
        </script>
        <!-- Start loading toc.js asap -->
        <script src="../toc-816984a7.js"></script>
    </head>
    <body>
    <div id="mdbook-help-container">
        <div id="mdbook-help-popup">
            <h2 class="mdbook-help-title">Keyboard shortcuts</h2>
            <div>
                <p>Press <kbd>‚Üê</kbd> or <kbd>‚Üí</kbd> to navigate between chapters</p>
                <p>Press <kbd>S</kbd> or <kbd>/</kbd> to search in the book</p>
                <p>Press <kbd>?</kbd> to show this help</p>
                <p>Press <kbd>Esc</kbd> to hide this help</p>
            </div>
        </div>
    </div>
    <div id="mdbook-body-container">
        <!-- Work around some values being stored in localStorage wrapped in quotes -->
        <script>
            try {
                let theme = localStorage.getItem('mdbook-theme');
                let sidebar = localStorage.getItem('mdbook-sidebar');

                if (theme.startsWith('"') && theme.endsWith('"')) {
                    localStorage.setItem('mdbook-theme', theme.slice(1, theme.length - 1));
                }

                if (sidebar.startsWith('"') && sidebar.endsWith('"')) {
                    localStorage.setItem('mdbook-sidebar', sidebar.slice(1, sidebar.length - 1));
                }
            } catch (e) { }
        </script>

        <!-- Set the theme before any content is loaded, prevents flash -->
        <script>
            const default_theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? default_dark_theme : default_light_theme;
            let theme;
            try { theme = localStorage.getItem('mdbook-theme'); } catch(e) { }
            if (theme === null || theme === undefined) { theme = default_theme; }
            const html = document.documentElement;
            html.classList.remove('rust')
            html.classList.add(theme);
            html.classList.add("js");
        </script>

        <input type="checkbox" id="mdbook-sidebar-toggle-anchor" class="hidden">

        <!-- Hide / unhide sidebar before it is displayed -->
        <script>
            let sidebar = null;
            const sidebar_toggle = document.getElementById("mdbook-sidebar-toggle-anchor");
            if (document.body.clientWidth >= 1080) {
                try { sidebar = localStorage.getItem('mdbook-sidebar'); } catch(e) { }
                sidebar = sidebar || 'visible';
            } else {
                sidebar = 'hidden';
                sidebar_toggle.checked = false;
            }
            if (sidebar === 'visible') {
                sidebar_toggle.checked = true;
            } else {
                html.classList.remove('sidebar-visible');
            }
        </script>

        <nav id="mdbook-sidebar" class="sidebar" aria-label="Table of contents">
            <!-- populated by js -->
            <mdbook-sidebar-scrollbox class="sidebar-scrollbox"></mdbook-sidebar-scrollbox>
            <noscript>
                <iframe class="sidebar-iframe-outer" src="../toc.html"></iframe>
            </noscript>
            <div id="mdbook-sidebar-resize-handle" class="sidebar-resize-handle">
                <div class="sidebar-resize-indicator"></div>
            </div>
        </nav>

        <div id="mdbook-page-wrapper" class="page-wrapper">

            <div class="page">
                <div id="mdbook-menu-bar-hover-placeholder"></div>
                <div id="mdbook-menu-bar" class="menu-bar sticky">
                    <div class="left-buttons">
                        <label id="mdbook-sidebar-toggle" class="icon-button" for="mdbook-sidebar-toggle-anchor" title="Toggle Table of Contents" aria-label="Toggle Table of Contents" aria-controls="mdbook-sidebar">
                            <span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></span>
                        </label>
                        <button id="mdbook-theme-toggle" class="icon-button" type="button" title="Change theme" aria-label="Change theme" aria-haspopup="true" aria-expanded="false" aria-controls="mdbook-theme-list">
                            <span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M371.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L600.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S549.7-4.4 531.1 9.6L294.4 187.2c-24 18-38.2 46.1-38.4 76.1L371.3 367.1zm-19.6 25.4l-116-104.4C175.9 290.3 128 339.6 128 400c0 3.9 .2 7.8 .6 11.6c1.8 17.5-10.2 36.4-27.8 36.4H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H240c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"/></svg></span>
                        </button>
                        <ul id="mdbook-theme-list" class="theme-popup" aria-label="Themes" role="menu">
                            <li role="none"><button role="menuitem" class="theme" id="mdbook-theme-default_theme">Auto</button></li>
                            <li role="none"><button role="menuitem" class="theme" id="mdbook-theme-light">Light</button></li>
                            <li role="none"><button role="menuitem" class="theme" id="mdbook-theme-rust">Rust</button></li>
                            <li role="none"><button role="menuitem" class="theme" id="mdbook-theme-coal">Coal</button></li>
                            <li role="none"><button role="menuitem" class="theme" id="mdbook-theme-navy">Navy</button></li>
                            <li role="none"><button role="menuitem" class="theme" id="mdbook-theme-ayu">Ayu</button></li>
                        </ul>
                        <button id="mdbook-search-toggle" class="icon-button" type="button" title="Search (`/`)" aria-label="Toggle Searchbar" aria-expanded="false" aria-keyshortcuts="/ s" aria-controls="mdbook-searchbar">
                            <span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></span>
                        </button>
                    </div>

                    <h1 class="menu-title">3D Printing Course for Blind and Visually Impaired Learners</h1>

                    <div class="right-buttons">
                        <a href="../print.html" title="Print this book" aria-label="Print this book">
                            <span class=fa-svg id="print-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg></span>
                        </a>

                    </div>
                </div>

                <div id="mdbook-search-wrapper" class="hidden">
                    <form id="mdbook-searchbar-outer" class="searchbar-outer">
                        <div class="search-wrapper">
                            <input type="search" id="mdbook-searchbar" name="searchbar" placeholder="Search this book ..." aria-controls="mdbook-searchresults-outer" aria-describedby="searchresults-header">
                            <div class="spinner-wrapper">
                                <span class=fa-svg id="fa-spin"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"/></svg></span>
                            </div>
                        </div>
                    </form>
                    <div id="mdbook-searchresults-outer" class="searchresults-outer hidden">
                        <div id="mdbook-searchresults-header" class="searchresults-header"></div>
                        <ul id="mdbook-searchresults">
                        </ul>
                    </div>
                </div>

                <!-- Apply ARIA attributes after the sidebar and the sidebar toggle button are added to the DOM -->
                <script>
                    document.getElementById('mdbook-sidebar-toggle').setAttribute('aria-expanded', sidebar === 'visible');
                    document.getElementById('mdbook-sidebar').setAttribute('aria-hidden', sidebar !== 'visible');
                    Array.from(document.querySelectorAll('#mdbook-sidebar a')).forEach(function(link) {
                        link.setAttribute('tabIndex', sidebar === 'visible' ? 0 : -1);
                    });
                </script>

                <div id="mdbook-content" class="content">
                    <main>
                        <h1 id="appendix-d-advanced-openscad-concepts"><a class="header" href="#appendix-d-advanced-openscad-concepts">Appendix D: Advanced OpenSCAD Concepts</a></h1>
<p>This appendix covers specialized topics for experienced users seeking to tackle complex parametric designs. These are optional topics not required for foundational mastery but valuable for professional application development.</p>
<h2 id="topic-1-gears-and-mechanical-components"><a class="header" href="#topic-1-gears-and-mechanical-components">Topic 1: Gears and Mechanical Components</a></h2>
<p>Gears are one of the most challenging parametric designs, requiring careful calculation of tooth geometry. Understanding gear mathematics enables creation of mechanical systems-power transmission, speed reduction, or precise positioning.</p>
<h3 id="gear-terminology"><a class="header" href="#gear-terminology">Gear Terminology</a></h3>
<ul>
<li>Pitch Diameter (PD): The reference diameter for meshing calculations</li>
<li>Module: PD divided by tooth count; determines tooth size</li>
<li>Pressure Angle: Typically 20deg or 14.5deg; affects tooth shape and strength</li>
<li>Clearance: Space between teeth to allow smooth meshing</li>
<li>Backlash: Intentional gap to prevent binding at tolerance extremes</li>
</ul>
<h3 id="simple-involute-gear-algorithm"><a class="header" href="#simple-involute-gear-algorithm">Simple Involute Gear Algorithm</a></h3>
<pre><code class="language-openscad">// Simplified gear with circular teeth (adequate for most 3D prints)
function gear_module(pitch_diameter, teeth_count) = pitch_diameter / teeth_count;
module simple_gear(pitch_diameter, teeth_count, bore_diameter, thickness) {
  module_m = gear_module(pitch_diameter, teeth_count);
  outer_diameter = pitch_diameter + 2 * module_m;
  tooth_angle = 360 / teeth_count;
  difference() {
    // Main gear body
    cylinder(r=outer_diameter/2, h=thickness, $fn=teeth_count*4);
    // Center bore
    cylinder(r=bore_diameter/2, h=thickness + 2);
  }
  // Add teeth as small protrusions
  for (i = [0:teeth_count-1]) {
    angle = i * tooth_angle;
    translate([
      (pitch_diameter/2 + module_m/2) * cos(angle),
      (pitch_diameter/2 + module_m/2) * sin(angle),
      0
    ])
      rotate([0, 0, angle])
        cube([module_m * 0.8, module_m, thickness], center=true);
  }
}
// Create meshing gear pair
module gear_pair_demo() {
  // Gear 1: 20 teeth, 40mm pitch diameter
  simple_gear(40, 20, 8, 10);
  // Gear 2: 30 teeth, positioned to mesh
  center_distance = (40 + 60) / 4;  // Sum of radii
  translate([center_distance, 0, 0])
    simple_gear(60, 30, 8, 10);
}
gear_pair_demo();
</code></pre>
<h3 id="practical-application-servo-gearbox"><a class="header" href="#practical-application-servo-gearbox">Practical Application: Servo Gearbox</a></h3>
<pre><code class="language-openscad">// Parametric servo gearbox with 3:1 reduction
module servo_gearbox(motor_torque, reduction_ratio, bore_size) {
  // Input gear (motor)
  input_teeth = 12;
  input_pd = 30;
  // Output gear (load)
  output_teeth = input_teeth * reduction_ratio;
  output_pd = input_pd * reduction_ratio;
  // Gearbox housing
  housing_size = output_pd + 40;
  difference() {
    // Main box
    cube([housing_size, housing_size, 30]);
    // Interior chamber
    translate([20, 20, 5])
      cube([housing_size - 40, housing_size - 40, 25]);
  }
  // Mount input gear
  translate([housing_size/4, housing_size/2, 15]) {
    simple_gear(input_pd, input_teeth, bore_size, 15);
    // Motor coupling
    cylinder(r=bore_size/2, h=5);
  }
  // Mount output gear
  translate([3*housing_size/4, housing_size/2, 15])
    simple_gear(output_pd, output_teeth, bore_size, 15);
}
servo_gearbox(10, 3, 5);
</code></pre>
<h3 id="belt-and-pulley-systems"><a class="header" href="#belt-and-pulley-systems">Belt and Pulley Systems</a></h3>
<pre><code class="language-openscad">// Timing pulley with tooth grooves
module timing_pulley(bore_diameter, pitch_diameter, teeth_count, width) {
  module_m = pitch_diameter / teeth_count;
  tooth_height = module_m * 0.3;
  difference() {
    // Main pulley body
    cylinder(r=pitch_diameter/2 + tooth_height/2, h=width);
    // Center bore
    cylinder(r=bore_diameter/2, h=width + 2);
    // Tooth grooves
    for (i = [0:teeth_count-1]) {
      angle = i * (360 / teeth_count);
      rotate([0, 0, angle])
        translate([pitch_diameter/2, -module_m*0.3, 0])
          cube([module_m * 0.6, module_m * 0.6, width], center=true);
    }
  }
}
// Belt drive demonstration
module belt_drive_system() {
  // Motor pulley (input)
  timing_pulley(5, 20, 16, 10);
  // Load pulley (output) - positioned for belt routing
  translate([80, 0, 0])
    timing_pulley(5, 40, 32, 10);
}
belt_drive_system();
</code></pre>
<h2 id="topic-2-batch-processing-and-statistical-analysis"><a class="header" href="#topic-2-batch-processing-and-statistical-analysis">Topic 2: Batch Processing and Statistical Analysis</a></h2>
<p>Professional applications often generate many variants and need to analyze results. Batch processing enables systematic exploration of parameter spaces.</p>
<h3 id="parameter-sweep-generation"><a class="header" href="#parameter-sweep-generation">Parameter Sweep Generation</a></h3>
<pre><code class="language-openscad">// Generate models with all combinations of parameters
// Define parameter ranges
wall_thicknesses = [1, 1.5, 2, 2.5, 3];
part_sizes = [20, 30, 40, 50];
materials = ["pla", "petg", "nylon"];
// Theory: Generate 5 x 4 x 3 = 60 variants automatically
// In practice, export each to separate STL for analysis
</code></pre>
<h3 id="statistical-summary-generation-script"><a class="header" href="#statistical-summary-generation-script">Statistical Summary Generation Script</a></h3>
<pre><code class="language-cmd">@echo off
rem analyze_batch.bat - Analyze batch results (CMD / Batch)
setlocal enableextensions enabledelayedexpansion
set "OUTPUT_DIR=batch_results"
set "REPORT_FILE=batch_analysis.csv"
echo Part,Wall,Size,File_Size_KB,Est_Print_Time_min,Est_Weight_g &gt; "%REPORT_FILE%"

for %%w in (1 2 3) do (
  for %%s in (20 30 40 50) do (
    set "SCAD_FILE=part_%%s_wall%%w.scad"
    set "STL_FILE=%OUTPUT_DIR%\%%~nSCAD_FILE.stl"
    "C:\Program Files\OpenSCAD\openscad.exe" -D "part_size=%%s" -D "wall=%%w" -o "%OUTPUT_DIR%\part_%%s_wall%%w.stl" src\main.scad
    if exist "%OUTPUT_DIR%\part_%%s_wall%%w.stl" (
      for /f "usebackq" %%F in (`powershell -NoProfile -Command "(Get-Item -Path '%OUTPUT_DIR%\part_%%s_wall%%w.stl').Length"`) do set FILE_BYTES=%%F
      set /a FILE_KB=FILE_BYTES / 1024
      set /a EST_TIME=(FILE_KB / 1024) * 60
      set /a EST_WEIGHT=FILE_KB / 1024
    ) else (
      set FILE_KB=0
      set EST_TIME=0
      set EST_WEIGHT=0
    )
    echo part_%%s_wall%%w,%%w,%%s,!FILE_KB!,!EST_TIME!,!EST_WEIGHT!&gt;&gt;"%REPORT_FILE%"
  )
)
endlocal
echo Analysis complete. Results in %REPORT_FILE%
</code></pre>
<pre><code class="language-powershell"># analyze_batch.ps1 - Analyze batch results (PowerShell)
$OutputDir = "batch_results"
$ReportFile = "batch_analysis.csv"
"Part,Wall,Size,File_Size_KB,Est_Print_Time_min,Est_Weight_g" | Out-File -FilePath $ReportFile -Encoding utf8

foreach ($wall in @(1.0,1.5,2.0,2.5,3.0)) {
  foreach ($size in @(20,30,40,50)) {
    $scad = "part_${size}_wall${wall}.scad"
    $stl = Join-Path $OutputDir ("{0}.stl" -f ([System.IO.Path]::GetFileNameWithoutExtension($scad)))
    &amp; "C:\Program Files\OpenSCAD\openscad.exe" -D ("part_size={0}" -f $size) -D ("wall={0}" -f $wall) -o $stl src\main.scad
    if (Test-Path $stl) {
      $bytes = (Get-Item $stl).Length
      $kb = [math]::Round($bytes / 1KB, 2)
      $est_time = [math]::Round(($kb / 1024) * 60, 2)
      $est_weight = [math]::Round($kb / 1024, 2)
    } else {
      $kb = 0; $est_time = 0; $est_weight = 0
    }
    "{0},{1},{2},{3},{4},{5}" -f ("part_{0}_wall{1}" -f $size,$wall), $wall, $size, $kb, $est_time, $est_weight | Out-File -FilePath $ReportFile -Append -Encoding utf8
  }
}
Write-Host "Analysis complete. Results in $ReportFile"
</code></pre>
<pre><code class="language-bash">#!/bin/bash
# analyze_batch.sh - Analyze batch results statistically

OUTPUT_DIR="batch_results"
REPORT_FILE="batch_analysis.csv"

echo "Part,Wall,Size,File_Size_KB,Est_Print_Time_min,Est_Weight_g" &gt; "$REPORT_FILE"

for wall in 1.0 1.5 2.0 2.5 3.0; do
  for size in 20 30 40 50; do
    # Generate model
    SCAD_FILE="part_${size}_wall${wall}.scad"
    STL_FILE="$OUTPUT_DIR/${SCAD_FILE%.scad}.stl"
    
    # Export to STL
    openscad -D "part_size=$size" -D "wall=$wall" \
      -o "$STL_FILE" src/main.scad
    
    # Get file size
    FILE_SIZE=$(stat -c%s "$STL_FILE" 2&gt;/dev/null | awk '{print $1/1024}')
    
    # Estimate print time (rough: 1 hour per MB)
    EST_TIME=$((FILE_SIZE / 1024 * 60))
    
    # Estimate weight (rough: 1g per MB for PLA)
    EST_WEIGHT=$((FILE_SIZE / 1024))
    
    # Log results
    echo "part_${size}_wall${wall},$wall,$size,$FILE_SIZE,$EST_TIME,$EST_WEIGHT" &gt;&gt; "$REPORT_FILE"
  done
done

echo "Analysis complete. Results in $REPORT_FILE"
</code></pre>
<h3 id="data-driven-design-selection"><a class="header" href="#data-driven-design-selection">Data-Driven Design Selection</a></h3>
<pre><code class="language-openscad">// Load results and select optimal configuration
// wall=2.0mm gives best balance of strength/weight for most sizes
function optimal_configuration(target_size, priority) =
  priority == "strength" ? 3.0 :
  priority == "speed" ? 1.0 :
  priority == "balanced" ? 2.0 :
  2.0;  // Default
module batch_optimized_part(size, priority) {
  wall = optimal_configuration(size, priority);
  echo(str("Generating optimized part: size=", size, " wall=", wall, " priority=", priority));
  // Create part with optimal parameters
  difference() {
    cube([size, size, size]);
    translate([wall, wall, wall])
      cube([size - 2*wall, size - 2*wall, size]);
  }
}
// Generate three variants with different priorities
batch_optimized_part(40, "strength");    // thickest walls
translate([60, 0, 0]) batch_optimized_part(40, "speed");    // thinnest walls
translate([120, 0, 0]) batch_optimized_part(40, "balanced"); // medium walls
</code></pre>
<h2 id="topic-3-performance-optimization"><a class="header" href="#topic-3-performance-optimization">Topic 3: Performance Optimization</a></h2>
<p>Complex models can take hours to render. Strategic optimization keeps iteration cycles fast.</p>
<h3 id="measuring-render-performance"><a class="header" href="#measuring-render-performance">Measuring Render Performance</a></h3>
<pre><code class="language-bash"># Time how long rendering takes
time openscad -o output.stl -D "quality=32" src/main.scad
# Output: real 5m 32s, user 5m 28s, sys 0m 2s
</code></pre>
<h3 id="resolution-parameter-strategy"><a class="header" href="#resolution-parameter-strategy">Resolution Parameter Strategy</a></h3>
<pre><code class="language-openscad">// Use lower resolution during development, high during export
quality = $preview ? 16 : 64;  // 16 segments in preview, 64 in export
module efficient_sphere(radius) {
  sphere(r=radius, $fn=quality);
}
// In array operations, efficiency matters most
module circular_array(radius, count) {
  for (i = [0:count-1]) {
    angle = (360 / count) * i;
    x = radius * cos(angle);
    y = radius * sin(angle);
    translate([x, y, 0])
      efficient_sphere(5);  // Uses quality parameter
  }
}
circular_array(30, 100);  // 100 spheres: slow with quality=64!
</code></pre>
<h3 id="cache-complex-calculations"><a class="header" href="#cache-complex-calculations">Cache Complex Calculations</a></h3>
<pre><code class="language-openscad">// Pre-compute expensive calculations outside loops
// SLOW: Recalculates sin/cos for every iteration
module slow_spiral() {
  for (i = [0:200]) {
    angle = i * 2;
    x = 40 * cos(angle);
    y = 40 * sin(angle);
    z = i * 0.5;
    translate([x, y, z])
      sphere(r=1);
  }
}
// FAST: Pre-compute positions, then use them
spiral_positions = [for (i = [0:200]) [
  40 * cos(i * 2),
  40 * sin(i * 2),
  i * 0.5
]];
module fast_spiral() {
  for (pos = spiral_positions)
    translate(pos)
      sphere(r=1);
}
// Use the fast version
fast_spiral();
</code></pre>
<h3 id="simplification-during-preview"><a class="header" href="#simplification-during-preview">Simplification During Preview</a></h3>
<pre><code class="language-openscad">// Complex model that simplifies in preview mode
module detailed_model() {
  if ($preview) {
    // Simplified version for fast preview
    cube([100, 100, 50]);
  } else {
    // Detailed version for export
    difference() {
      cube([100, 100, 50]);
      // Complex inner geometry
      for (x = [10:10:90])
        for (y = [10:10:90])
          translate([x, y, 20])
            cylinder(h=15, d=3, $fn=32);
    }
  }
}
detailed_model();
</code></pre>
<h3 id="profile-driven-optimization"><a class="header" href="#profile-driven-optimization">Profile-Driven Optimization</a></h3>
<pre><code class="language-bash">#!/bin/bash
# profile_render.sh - Identify slow rendering hotspots

echo "Profiling render performance..."

for fn_value in 8 16 32 64 128; do
  echo ""
  echo "Testing with \$fn=$fn_value..."
  
  /usr/bin/time -v openscad -D "fn=$fn_value" \
    -o test_$fn_value.stl src/main.scad 2&gt;&amp;1 | \
    grep "Maximum resident set size"
done
</code></pre>
<h2 id="topic-4-print-orientation-and-support-structure-algorithms"><a class="header" href="#topic-4-print-orientation-and-support-structure-algorithms">Topic 4: Print Orientation and Support Structure Algorithms</a></h2>
<p>Strategic orientation dramatically affects support material, print time, and surface quality.</p>
<h3 id="strength-orientation-analysis"><a class="header" href="#strength-orientation-analysis">Strength Orientation Analysis</a></h3>
<pre><code class="language-openscad">// Different orientations affect strength differently
// SCENARIO: Bracket with cantilever load
module bracket() {
  difference() {
    cube([50, 100, 10]);
    translate([25, 50, 5]) cylinder(r=5, h=10);
  }
}
// Orientation A: Lay flat (XY plane) - WEAK for cantilever
echo("Orientation A: Flat - Low strength for cantilever");
bracket();
// Orientation B: Stand tall (Z axis) - STRONG for cantilever
translate([70, 0, 0]) {
  echo("Orientation B: Tall - High strength for cantilever");
  rotate([90, 0, 0]) bracket();
}
// Orientation C: Diagonal - MODERATE strength
translate([0, 150, 0]) {
  echo("Orientation C: Diagonal - Moderate strength");
  rotate([45, 0, 0]) bracket();
}
</code></pre>
<h3 id="support-material-minimization"><a class="header" href="#support-material-minimization">Support Material Minimization</a></h3>
<pre><code class="language-openscad">// Design features to reduce supports needed
// POOR: Overhanging feature needs extensive supports
module poor_design() {
  cube([50, 50, 50]);
  translate([25, 25, 50])
    cube([30, 30, 10]);  // 30mm overhang!
}
// GOOD: Bridge angle keeps overhang under 45deg
module good_design() {
  cube([50, 50, 50]);
  // Add ramp instead of overhang
  translate([20, 20, 50])
    rotate([20, 0, 0])
      cube([30, 30, 10]);
}
// Compare
poor_design();
translate([80, 0, 0])
  good_design();
</code></pre>
<h3 id="bridge-span-calculation"><a class="header" href="#bridge-span-calculation">Bridge Span Calculation</a></h3>
<pre><code class="language-openscad">// Calculate maximum unsupported span for given material/settings
function max_bridge_span(material) =
  material == "pla" ? 10 :
  material == "petg" ? 12 :
  material == "nylon" ? 15 :
  material == "abs" ? 8 :
  10;  // Default
module bridged_connector(material, gap_width) {
  max_span = max_bridge_span(material);
  if (gap_width &lt;= max_span) {
    echo(str("Bridge OK: gap ", gap_width, "mm fits within ", max_span, "mm limit"));
    // Create part with bridge
    union() {
      cube([50, 10, 10]);  // Side A
      translate([gap_width, 0, 0])
        cube([50, 10, 10]);  // Side B
      // Bridge connecting them
      translate([0, 5, 10])
        cube([gap_width + 100, 2, 1]);
    }
  } else {
    echo(str("ERROR: gap ", gap_width, "mm exceeds ", max_span, "mm max bridge span"));
  }
}
bridged_connector("pla", 8);      // OK: 8 &lt; 10
// bridged_connector("pla", 15);  // ERROR: 15 &gt; 10
</code></pre>
<h3 id="slicing-parameter-calculation"><a class="header" href="#slicing-parameter-calculation">Slicing Parameter Calculation</a></h3>
<pre><code class="language-openscad">// Calculate optimal slicing parameters based on geometry
function recommended_layer_height(nozzle_diameter, quality_priority) =
  quality_priority == "fast" ? nozzle_diameter * 0.75 :
  quality_priority == "balanced" ? nozzle_diameter * 0.5 :
  quality_priority == "detailed" ? nozzle_diameter * 0.25 :
  nozzle_diameter * 0.5;
function recommended_infill(structural_load, safety_factor) =
  structural_load &lt; 1 ? 10 :    // Decorative: minimal fill
  structural_load &lt; 5 ? 20 :    // Light duty: low fill
  structural_load &lt; 20 ? 50 :   // Medium duty: standard fill
  100;                           // High duty: solid
module optimized_part(
  nozzle_0p4,
  quality_priority,
  structural_load,
  safety_factor
) {
  layer_h = recommended_layer_height(nozzle_0p4, quality_priority);
  infill_pct = recommended_infill(structural_load, safety_factor);
  echo(str("Recommended layer height: ", layer_h, "mm"));
  echo(str("Recommended infill: ", infill_pct, "%"));
  // Create part
  cube([50, 50, 30]);
}
optimized_part(0.4, "detailed", 15, 2);
</code></pre>
<h2 id="topic-5-recursive-function-patterns"><a class="header" href="#topic-5-recursive-function-patterns">Topic 5: Recursive Function Patterns</a></h2>
<p>Recursion enables elegant solutions to problems with self-similar structure: trees, fractals, nested components.</p>
<h3 id="basic-recursive-pattern"><a class="header" href="#basic-recursive-pattern">Basic Recursive Pattern</a></h3>
<pre><code class="language-openscad">// Tree structure: branches recursively smaller
function tree_depth(level) = level &gt; 0 ? level + tree_depth(level - 1) : 0;
// Calculate: tree_depth(5) = 5 + 4 + 3 + 2 + 1 = 15
result = tree_depth(5);
echo(result);  // Prints: 15
// Recursive tree drawing
module tree_branch(length, angle, recursion_depth) {
  if (recursion_depth &gt; 0) {
    // Draw this branch
    rotate([angle, 0, 0])
      cube([2, 2, length]);
    // Recursively draw sub-branches
    translate([0, 0, length])
      rotate([-angle/2, 0, 0])
        tree_branch(length * 0.7, angle, recursion_depth - 1);
    translate([0, 0, length])
      rotate([angle/2, 0, 0])
        tree_branch(length * 0.7, angle, recursion_depth - 1);
  }
}
tree_branch(30, 25, 4);  // Tree with 4 levels of recursion
</code></pre>
<h3 id="fractal-generation"><a class="header" href="#fractal-generation">Fractal Generation</a></h3>
<pre><code class="language-openscad">// Sierpinski Triangle fractal
function sierpinski_triangle(size, depth) =
  depth == 0 ?
    [[0, 0], [size, 0], [size/2, size * sqrt(3)/2]] :
    // Recursive case: three smaller triangles at corners
    concat(
      sierpinski_triangle(size/2, depth - 1),
      sierpinski_triangle(size/2, depth - 1),
      sierpinski_triangle(size/2, depth - 1)
    );
// Create 3D fractal structure
module fractal_spiral(base_size, depth, height_per_level) {
  if (depth &gt; 0) {
    // Create current level
    cube([base_size, base_size, 5], center=true);
    // Recursively create smaller level on top
    translate([0, 0, height_per_level])
      scale([0.6, 0.6, 1])
        fractal_spiral(base_size, depth - 1, height_per_level);
  }
}
fractal_spiral(40, 5, 10);  // 5-level spiral
</code></pre>
<h3 id="nested-component-assembly"><a class="header" href="#nested-component-assembly">Nested Component Assembly</a></h3>
<pre><code class="language-openscad">// Russian doll boxes: each box contains a smaller copy
module russian_doll(size, wall, nesting_depth) {
  if (nesting_depth &gt; 0) {
    // Current level: hollow box
    difference() {
      cube([size, size, size]);
      translate([wall, wall, wall])
        cube([size - 2*wall, size - 2*wall, size - wall]);
    }
    // Recursively place next smaller doll inside
    interior_size = size - 4*wall;
    translate([2*wall, 2*wall, wall])
      russian_doll(interior_size, wall, nesting_depth - 1);
  } else {
    // Smallest doll (solid)
    cube([size, size, size]);
  }
}
russian_doll(60, 2, 4);  // 4 nested boxes
</code></pre>
<h3 id="performance-considerations"><a class="header" href="#performance-considerations">Performance Considerations</a></h3>
<pre><code class="language-openscad">// Recursion can be expensive - monitor depth
// EFFICIENT: Tail recursion (result computed immediately)
function sum_to(n, accumulator) =
  n == 0 ? accumulator :
  sum_to(n - 1, accumulator + n);
result = sum_to(100, 0);  // Computes: 5050
// INEFFICIENT: Deep recursion without optimization
function fibonacci(n) =
  n &lt;= 1 ? n :
  fibonacci(n-1) + fibonacci(n-2);
// fibonacci(20) recalculates sub-problems thousands of times
// Don't use for depth &gt; 20 without memoization
// BETTER: Use iteration where possible
function fibonacci_iter(n) =
  let(
    fib = [for (i = [0:n])
      i &lt;= 1 ? i :
      let(prev = [for (j = [0:i-1]) i==j ? 1 : i==j+1 ? 0 : 0])
        1  // Placeholder
    ]
  ) fib[n];
</code></pre>
<h3 id="practical-example-cable-management"><a class="header" href="#practical-example-cable-management">Practical Example: Cable Management</a></h3>
<pre><code class="language-openscad">// Recursive cable tray with branching paths
module cable_tray(width, depth, height, levels, branch_angle) {
  if (levels &gt; 0) {
    // Main tray section
    difference() {
      cube([width, depth, height]);
      translate([2, 2, 2])
        cube([width - 4, depth - 4, height - 2]);
    }
    // Left branch (recursively smaller)
    translate([-width/2, 0, height])
      rotate([0, 0, -branch_angle])
        cable_tray(width * 0.6, depth, height, levels - 1, branch_angle);
    // Right branch
    translate([width/2, 0, height])
      rotate([0, 0, branch_angle])
        cable_tray(width * 0.6, depth, height, levels - 1, branch_angle);
  }
}
cable_tray(40, 10, 5, 3, 30);  // 3-level branching cable tray
</code></pre>
<h2 id="summary-when-to-use-each-advanced-technique"><a class="header" href="#summary-when-to-use-each-advanced-technique">Summary: When to Use Each Advanced Technique</a></h2>
<div class="table-wrapper">
<table>
<thead>
<tr><th>Technique</th><th>Use Case</th><th>Complexity</th><th>Performance</th></tr>
</thead>
<tbody>
<tr><td>Gears</td><td>Mechanical power transmission</td><td>High</td><td>Medium</td></tr>
<tr><td>Batch Processing</td><td>Design space exploration</td><td>Medium</td><td>Depends on scope</td></tr>
<tr><td>Performance Optimization</td><td>Reducing render time</td><td>Medium</td><td>High payoff</td></tr>
<tr><td>Orientation Analysis</td><td>Strength optimization</td><td>Medium</td><td>Simulation cost</td></tr>
<tr><td>Recursion</td><td>Fractal/nested structures</td><td>High</td><td>Can be expensive</td></tr>
</tbody>
</table>
</div>
<h2 id="references-and-further-learning"><a class="header" href="#references-and-further-learning">References and Further Learning</a></h2>
<ul>
<li>OpenSCAD Documentation - Advanced Features: <a href="https://en.wikibooks.org/wiki/OpenSCAD_User_Manual">https://en.wikibooks.org/wiki/OpenSCAD_User_Manual</a></li>
<li>Gear Design Theory: <a href="https://www.mekanizmalar.com/">https://www.mekanizmalar.com/</a></li>
<li>3D Print Orientation Optimization: <a href="https://stratasys.com/">https://stratasys.com/</a></li>
<li>Fractal Geometry: <a href="https://en.wikipedia.org/wiki/Fractal">https://en.wikipedia.org/wiki/Fractal</a></li>
<li>Recursive Algorithms: <a href="https://www.khanacademy.org/computing/computer-science/algorithms">https://www.khanacademy.org/computing/computer-science/algorithms</a></li>
</ul>
<p>For Educators and Students</p>
<p>These advanced topics are intended for:</p>
<ul>
<li>Experienced users tackling professional applications</li>
<li>Specialized problem domains (robotics, mechanical design, etc.)</li>
<li>Research and optimization work</li>
<li>Custom library and framework development</li>
</ul>
<p>For accessibility:</p>
<ul>
<li>All recursive examples include base cases clearly marked</li>
<li>Each section provides simplified versions before advanced variants</li>
<li>Code comments explain both ‚Äúwhat‚Äù and ‚Äúwhy‚Äù</li>
<li>Practical examples show real-world applications</li>
<li>Performance considerations documented to prevent frustration</li>
</ul>

                    </main>

                    <nav class="nav-wrapper" aria-label="Page navigation">
                        <!-- Mobile navigation buttons -->
                            <a rel="prev" href="../3dMake_Foundation/Appendix_D_Tolerance_QA.html" class="mobile-nav-chapters previous" title="Previous chapter" aria-label="Previous chapter" aria-keyshortcuts="Left">
                                <span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></span>
                            </a>

                            <a rel="next prefetch" href="../Backmatter/troubleshooting.html" class="mobile-nav-chapters next" title="Next chapter" aria-label="Next chapter" aria-keyshortcuts="Right">
                                <span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></span>
                            </a>

                        <div style="clear: both"></div>
                    </nav>
                </div>
            </div>

            <nav class="nav-wide-wrapper" aria-label="Page navigation">
                    <a rel="prev" href="../3dMake_Foundation/Appendix_D_Tolerance_QA.html" class="nav-chapters previous" title="Previous chapter" aria-label="Previous chapter" aria-keyshortcuts="Left">
                        <span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></span>
                    </a>

                    <a rel="next prefetch" href="../Backmatter/troubleshooting.html" class="nav-chapters next" title="Next chapter" aria-label="Next chapter" aria-keyshortcuts="Right">
                        <span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></span>
                    </a>
            </nav>

        </div>

        <template id=fa-eye><span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"/></svg></span></template>
        <template id=fa-eye-slash><span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c5.2-11.8 8-24.8 8-38.5c0-53-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zm223.1 298L373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5z"/></svg></span></template>
        <template id=fa-copy><span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"/></svg></span></template>
        <template id=fa-play><span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></span></template>
        <template id=fa-clock-rotate-left><span class=fa-svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"/></svg></span></template>



        <script>
            window.playground_copyable = true;
        </script>


        <script src="../elasticlunr-ef4e11c1.min.js"></script>
        <script src="../mark-09e88c2c.min.js"></script>
        <script src="../searcher-c2a407aa.js"></script>

        <script src="../clipboard-1626706a.min.js"></script>
        <script src="../highlight-4a3ec6df.js"></script>
        <script src="../book-a0b12cfe.js"></script>

        <!-- Custom JS scripts -->



    </div>
    </body>
</html>
                                                                                                                                                                                                                                                                                                                                                 ÑÅX^^©¸\FDDøü;ArOªÍä¯≈wº%w‡À<„⁄‚·áè‰éë‘µ◊^Ô~œmπc¿∂∂æVãıœŒN/wÑ‰Œ?ˇêıOÖúﬁ’π#$w…ìüî;¬@ºÊ«~ wv…OΩ˛MÒªø˚πc$wﬂØ|(:ù…‹1Ä∫Âñü ¯2∑ﬂ˛Œ∏„é˜Âéë\ØW˝=Éùn∑˚?õ’/ FÙk1óó_Ò‰‹*´˙’N        `Ë):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xÌ‹    Ä4∂˛œG£wÚdÓ¸?˝ï’Ëù8±æçV+˙Õf¥ˆÌâëØ}Zå>˚Y££π#  @—ù    †¢v|(v|(w˛	›ODl~√?{k¥.~RLø˙?EÛº√πc  @ëº∫     ∑~?v¯tú˙ÓWƒôü¯ØΩ^ÓD   PE'    ÄbÙc˚è?ßø„{#66rá  Ä¢(:    fÁ»£qÍ¶ÔÛd'   ¯{ù     
‘;z,ñÙıπc   @1ù     
’ΩÛÆÿ˙ÿ«s«   Ä"(:    l˝ñ€rG   Ä"(:  êMø€Õ ´~Øü;C`ÁsGÔËÒ‹1 ≤rÔ  @Ñ¢   ˇî‘ﬂøØo$˛ Ä≤ıOüŒÅ!±Òw‰é ê◊ Z“·˚;äT  √@—	  Ä«’;q"È¯˝≠Ì§„îÆf%wÜƒˆ˝üÃ ´˛F⁄IÙè¶Ω˜ `w(:  ∏˙'”>iƒØ¶Å∫ÎolÊé¿êËÛ<Po˝Ì¥˜˝ÂÂ§„ ∞;ù   x|€[IáoÙRø†p;;π0$<®Ω~⁄{áﬁ∂Û, ¿0Pt  ‡Òçé§øÈ∂®∑∆ÿhÓãV#wÄºöiœÉçQ◊d Äa`G  Ä«’òõK˚ÌV⁄Ò
◊\‹õ;C¢1:ñ;@^Ìv“·3”I« `w(:  ∏öÛI«oå$~b@·FÆº<wÜDcr"wÄ¨„iüÕΩI« `w(:  ¯â_11ût|Ä“ç>ÔÜàJ2æ≤ÊÏLÓ Y5¶:i«o•}b  ªC—	  Ä|ø~†tÕôôhùwnÓÉñ◊Ωı÷pÔ  @(:   @VùWΩ¬Cù    û E'    »®˝îKbÙ_ü;   @Òù     ≥©ü¸—hûµî;   @—ù     ∑f3Êﬁı∂hûΩ?w   Äb):   @	FGcÓW˛[å=Îôπì    I—	    
“y›´bÓ±¶˘ô    IDAT∑FÎí#ö∂Ô    æ®ù;     5œ;≥∑ø9bc#6ˇ‡èb˚/Óéﬁ√èF{+¢›é∆‰d4Ê¢9=—»ùñààùá>›O=ò;   Tö¢    îj|<∆nº.∆nº.wæÇı_}Ø¢   $ÊŸ◊        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        Pºˆ†?∞’j∆ïW^6Ëè∏{>˛â¯áÔÃ#πf´Ωùù‹1í:ÎÏ•¯¬√è‰éë‹ÏÃLÂèÕ={rGàÈôÈ œeDƒk_˚”±µµù;FRK˚„ë#Gs«Hnﬂ“ﬁxÙëcπc$5Ÿôàµ’ı‹1í;˚¿˛x¯ÛGr«HÓºÛœç}˚ˆÊéëTß3ﬂ˜≤WÊéë‹˛˝˚‚»ëGs«Hj||,ﬁÚsˇ%wå‰:ù…Z¨ﬁ˛ÛÔä’’µ‹1í⁄≥g!é?ë;Fr7Ω¯qÌµ◊‰éë\éÀıµıZ\3ˆ,ƒâäõú?˛⁄ #πππŸZõØ˛·◊G∑€Õ#©˝gÌã#_®ˆZ6"bqqO=z<wå§¶¶:±≤≤ö;Frˇ˙∆oâÎÆ{vÓ…Ω˙’Øè”ßñs«HÍÚ+û/˘Kr«HÓˆ€ﬂ˜‹}ÓIççè∆Ê∆VÓ…MMM’b˝”l6rGHÆ›n’b.«∆«rGÄF-Êr~~6wÑ x—igß˜‹SÌÖADƒ»»H|Ù£wÁéë\ª›Æ¸¶¡’W?5Ó∫Î„πc$w…%∆|:wå§:ò;¬@úY>SãÛÏg?˚7±º\ÌMÉ+Øº¨sy˘ÂOâ˚Ó˚dÓIÌŸ≥'éØˆ∆lDƒ5◊|M‹yÁ_‰éë‹““æx‰ëj°pÈ•óƒ'>Ò@Ó…=Ìió«›wﬂó;FRììπ#ƒÍÍZ-Æô'Oûäø˛ÎœÂéë‘Öùü~≥πc$˜¨g=#wÑÅ®√qŸi«]Ω'wå‰.º¸¯Ùß´}l^t—˘π#ƒ©Sßkql˛Â_>ÎÎπc$u’Uó««>VÌµlD=ÓMññ„ëG™ˇC∑K/ª$wÑÅ¯„˛Y=ZÌÙmmU˚;°/∫ÁÓ˚„¯„‹1íöùùé”ßœ‰éë‹5◊\UãıOØ◊œ!πnwßsππ±ô;¬ Ùk1óuYˇ‰‡’u        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        Pºˆ†?∞ŸlƒÏÏÙ†?v‡&&∆bnn6wå‰FF⁄±Ω›Õ#©âââZÃÂ¯¯xÂèÕÈÈ…‹bd¥]˘πåàòôôéf≥ë;FRìùÒZú:ùÍüggf:±≥SÌÎeDƒƒd=˛œNOO≈ÊÊfÓI’·∏åà≠¸5sbb"wÑÅh∑Í±˛ÈLu*lv&;µòÀV´ï;¬@‘a.«FÎ±ˇ31Q˝=É…N'wÑÅ©¸\FDLNN∆ÿÿXÓIML÷cÕ^á{ìôô©ÿÿÿ»#πëëÅï≈ÃL'∂∂™Ωg011ö;¬@t¶&+˛ôûûäF£˙œƒ´≈˙ßöÕf-Ê≤YÉ=ÉF£ùë—ëz\3s¯ ≤◊Î«È”g˝±˜Ïg?3ﬁ˘Æ[s«Ä'ÏE/ziÂèÕππµ‹b{´[˘πåà¯‡Ôàπ˘π‹1 bØ∏˘G*Õ¨˙èæ®ªSèıœØ˝˙Î„‚ã/»#©{Óæ/û˜ºÔŒ#πùùù‹¢«ÂÅsˆ«ªﬂs[Ó…}Î∑˛ª œÁ⁄ÍjÓ±µµ]˘πåà¯ü˛~t:ı¯¡√ÔÛü?ﬂår«HÆ.˜&ÀÀ´ï?œÆØoÂé0oz”ÎsG`ó‹~˚;„O>Ùë‹1ÿΩ^ØÚÁÿàà^ˆ˙˝ztF∂∂ÎqÕÃ°˙5]        `Ë):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xÌ‹  ‡ü£wz9∂ˇÏœcÁo>±∂—jFcv6öÛsçFÓx¸sÙ˚—;~"zßó£—hDt:—∫‡På}˝”#∆«sß     
£Ë @˘∂∂bıÁﬂ€¯¡Ë-Ø‰NCb´çàÊ¬Bå=˜˙ò∏ÈEπ„      ÖÍ:  ä∂˘ﬁﬂâ7º06ÛwïúÍ¢—;~"÷ˇ˚ª„‰ı/åÌ?Ω3w"     † äN  ÎÃ´~<Vo}{ƒV7w2ÈØÆ≈ô◊º!Vﬂr{Ó(     @f^] @ëño˛·Ëﬁˇ…‹1(B?6Î˜¢øµS?¸sá     2ÒD'  ä≥ˆÊ€îú¯ˇlΩÔ±˘€ÔÀ     »D—	 Ä¢Ù>ÛW±Ò;ÔœÉB≠›˙ˆË≠¨‰é     d†Ë @QVﬁxKD?w
J’ﬂÓ∆˙-∑Âé     d†Ë @1z'OG˜≥üÕÉ¬m˝…GrG`7ÌÏ‰N  √°Ô◊ @Õızπ  P E'  ä±ÒÎˇ””ú¯ä˙€›ÿ˛–üÂé¡.ÈolÊé  ªcªõt¯˛ô3I«(]ou5Ì(î E'  ä±}˜Ωπ#0$∂ù¶:Ìó™˝≠≠§„¿†ÙéO:~%Ò¸ •[ﬂH:|Ôƒ…§„ ∞;ù  (FÔ—£π#0$∫˚˘‹j£w"Ìó∂±Ωùv| ê‰Â‡MOAÍ≠øïˆ…yΩìßìé ¿ÓPt †[
<Akkπ‘«f⁄„“€! ®ä˛V‚"Rw'Ì¯ •Î%>*î E'  `ËÙç‹Í£ïˆ∂—TPçƒ◊Ãh∫h5ó¯Ê°ﬂj% Ä›°Ë @9⁄Ì‹	ç±—‹j£1=ïˆöæL †"&'”éﬂI;>@ÈÔ4ßü« ÿäN  £1>ñ;C¢9=ù;Bm4˜$ø1ÍK[ ™°π7Ò5sr"È¯ •kå•›3h.ÓM:>  ªC—	 Äb4¶?9Ü hÃœÂéP≠ƒOZSp†"R?±1;ìt|Ä“5:iü∏î∫H ¿ÓPt †^G∆’ˆ∫≥™hå:Ó‡âpÕÍŒ+Ã àPt        ÜÄ¢        P<E'        †xäN        @Òù        Ä‚):        ≈kÁ   É“ZZå∆‹lÓµ–{ÙXÙNû      ®E'  jc¸€ücœΩ>wåZXªıb„Ωøù;     P!^]        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈k¸€≠∏Êö´˝±◊ÈLÊé0øÔéùùù‹1íöööäïïï‹1í[⁄∑X˘cs~a.wÑÅòõõ©¸\FD¸ÍØ˛V4*^◊Ìt¶buµ˙ÁüÎÆ˚Ê8˜‹πc$µ∂∂øÙKøû;FrWÕïqı◊^ô;FrøÚÀøÀgŒ‰éë‘¡ÉÁƒı◊?;wå‰ˆüµøÚ◊Ã——ë‹b™”©¸\FD¥Z_¸DD´›Æ≈\NLéÁé0uòÀ≈Ω{sGà.8„c£πc$µ∏Øsπ∞gæ«Ê{ﬁÛ—ÔÁNëV]ˆ,o∏·_∆9Áúï;FRçF£«ÂÏÃTÓq≈Oéïï’‹1íöüüâ€ogÓ…’ao∂›nG∑€Õ#πcGO‘‚<[É-Éhè‘cœ`l¨{ıXˇÏ›ªê;BeºË‘ÌÓƒùw~l–;p◊_ˇÕπ#ƒœ˛Ãmï_]}ıS„Æª>û;Fró\ra<¿ßs«HÍ–°Éπ#ƒ©SÀµ8œ~ÍS≈ÚÚrÓI]yÂeqœ=˜Áéë‹≈?©ÚEß’’’¯ôüæ5wå‰næ˘{kQtzÎ[ﬂ?|$wå§ÆΩˆöZùé|·HÂØôììπ#ƒ ÍjÂÁ2"bgßó;Br;›n-ÊÚπœΩ.wÑÅ®√\:\è˚Ãœ|ÊØ‚„ø7πË¢ÛsGà«O÷‚ÿº˜ﬁO∆˙˙FÓI]u’ÂÒ±è›ó;Fró]vIÂãN˝~ø«Âø∏ˆÈπ#ƒΩ˜~*é=ñ;FRW\qi‹q«˚r«HÆ{≥≥≥”q˙tµÃÒÿ0Ípû≠¡ñAt∑Î±g¬ﬁò;¬ ‘c˝Û§ÎqüôC∫ù        ¿∞St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚µ˝ÅÕf3Œ>p÷†?v‡FFGrGà?¸_ˇ#˙˝‹)“j4¢ÚcDD≥—´¯ﬂ92Rè„Úe/ª)^ÙmœÕÉ]–l6¢Wı3"ññsGÄz¨∆∆GsGà}Kãè-*lnn&wÑÅxÌÎ^?Ù óÁéëT≥YÌˇ´_Ù¸Áˇ´¯¶o˙Ü‹1í;p`Ó…5õçZ\3GFæìEÊr™3ô;¬@,ÃœU~>ˆÏ…a næ˘%q”ã_ò;Fruÿœ˚Û?ˇã8Ú»±‹1ík6´Õl4Í±˛´«û¡““bÂø:˜–ÅxÀœΩ!wå‰Í≤7[Ô˚˝ƒﬂ~Óπc$◊®¯~eDƒSØº4˛ËÉw‰éë‹ﬁΩπ#$WóıOgr"wÑ ¯]BØ◊ãá?_˝ã…ˆ÷vÓqË–¡‹Ä/37?sÛsπc ˇ@=÷?õ[π#ƒ£èçá>í;FRÁ>7wÑÅX\‹ãuËZ÷¿ÃÃtÃÃLÁé¡.Ëı˙µ∏fnowsGà:ÃÂ ÍZÓq‚‰© œÁTß–Ûs1ø`œ†
ÓøˇÅ óΩ^ıØô˝~=÷?õıÿ3x‰ë£qÙhµKà]xA>Ïª!ÜG≥’™≈y∂_ıñwDåçç9ˇTD]÷?´kÎπ#TñW◊        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xÌ‹   ˛Ÿ÷◊£˜Ö#πS‘Bˇ‘©‹ Äàà≠MÎüı76£øº12ÌÛGåèÁé  PiäN  ¿–Ÿ˙–GbÎC… ``∂Ô˝dú˙ˆÔÕÉØd¥Ìs≈ÿ∑=/∆û˝Ã‹i   *«´Î     `7lu£˚–gbı?'o¸Œÿ˛”;s'  ®E'     ÿe˝”ß„Ãk~*VﬂxKÓ(   ï°Ë     âl~‡è‚Ã+,w  ÄJPt    ÄÑ∂Ô∫'÷ﬁ|[Ó   CO—	     €¯Ì˜G˜ìÊé  0‘ù     ` Vﬁ3π#   5E'   —ÔÁN Zœq ‘GÔ·#—}°‹1`(Ÿ2   B—	 Äí¨≠ßﬂÆË¿Ù∑∑sG`HÙ77rG Ä›°ºÀ¥˛Àøë;ßµµ‹	  (Ä¢  ≈Ë≠Æ¶ˇÙr“Ò˘í˛Òπ#0$˙[π# ¿ÆËù8ô;CbÁ˛rGÄ°‘_O˚#â˛ô3I« `w(: Pé≠Õ§√˚ÚipzÀJe<A›nÓ ∞+˙'OÂé¿êË[+√W•øôxœ‡®Ï  E'   —Ì%>ıØ?˘{6Ω∫é'¶ﬂK{‹¿†x+OTøªì;ßù¥«N√y `(: På~‚Òçƒ¿ó¥€π0$L ™¬˙ ≠ƒ˜}˜&  CA—	 Äb4R941ëv|˛Nsv:wÜ≈ËhÓ ∞+öÛπ#0,î)‡´”j%æ91ñt|  vá¢  ÂK[xhÌ›ìt|æ§uŸSrG`H¥ˆ/Âé  ªbÙÍßÊé¿∞PtÇØJ#Òè$öã{ìé ¿ÓPt †ÕN'È¯çÈ©§„Û%c◊?'¬˜7<£◊>=w ÿ#_wMD√v+_Y#ÒSi†™ìiü“‹Hº' ¿ÓpÁ @9ºZÆ2ö≥3—⁄∑ò;•k6cÙ7ÊN ª£›åˆìÁN¡0hŸñáØF√û  °Ë @I<®R∆_Ú‚‹(‹»ïóEs ì÷ ®é…Ôˇπ#0‹¯¿W≈° @(:  âå=ÁY—:x wJ’jEÁ«_ù; Ï™ˆ•óD˚ÚKs«   Ä Rt  íôæÂç£Ì‹1(–‘æ<öÛ≥πc ¿Æõ˙È◊E£3ô;   Tí¢  êLsqOÃºÈç-e'æd¸;_£◊?'w H¢99≥oª%££π£   @Â(:  Iµ/JÃΩ˝ñhLurG!≥F≥ùõ_ì/˝∑π£ @RÕsœâôwø-öÛπ£   @•(:  …5/8?ÊÎócÏYœåh∫©£ˆ˘ácˆóﬁcœø1w à÷“RÃΩ˜]1v„ı≠VÓ8   P	æa   £›éŒÎ^sø˜k1ˆonåÊ˛˝æÙ´≤F3s≥1zÌ◊≈‹ªﬁ3øxk4œ9ê; V≥ù¯˜±ø„7}[¥Œ9;mØÙ  ÄØñªj  `†öìì—y≈K#^Ò“ø˚∑ﬁôïåâÿMÕŒ§ßv¿ók∑cÚ%ﬂÒíÔ˙ªÍ≠¨DÙ3f‚qÌ|‚SqÊG~2w   ˛äN  @vÕÈ©‹  ™9e˝S™ﬁƒDÓ   <?≥        äßË        O—	        (û¢        P<E'        †xäN        @Òù        Ä‚):        ≈St        äßË        O—	        (û¢        P<E'        †xäN        @Ò⁄É˛¿V´ó<˘¬AÏˇmÔﬁc-ªÍ˚Äˇˆyﬁ«Ã‹◊ÿ„Òõ¡3~åÌ±=√´íí@1∏äh¢äÜHU”àê†§<‹HIEä‘J$ëZÑ˙nÅ§à˛ï∂¥©"˘Q€0Ä]ú;~‡yøÓ=˜ûsvˇ∏Ü∏.‡ÒxˆYÎÓ˝˘H#Y÷Ã^ﬂ£}ˆﬁkØÛ=gO‹‘‘TÍqÔ=ƒx<N£RùN'Ü√aÍïÎt⁄1éR«®Tj*ÆΩˆ ‘1*˜¯„O∆SO>ù:FÂˆﬁpmt:Ì‘1*uÙ»—x¯·GS«®\ª”éQÕœ?À+ß1ˇôùùIa"^ÒäKcÀ‹Ê‘1*µ∏8wﬂu_Íïk¬¸ß(ä(À2uå u∫ùÆ’Œﬁj∑c<™˜{ˆ…ßæﬂàkf™ó:¬D4a_Œœœ•é0^xAÉ‘1*u˛˘Á7c˛”êkÊç7]≠VΩø„€Îuqûm∑'˛∆ƒµZÕ∏fŒŒLßé0;v\K[R«®‘‹‹Êf\3∞f–Ìv‚˙Ω{R«®‹ÙÙt#Œ≥≠Vë:BÂNú8~˚·‘1*◊Ñ9˚x\6‚∏úüØ˜Á)M¸.a4≈C>2Èa'nee%uÑâxﬂ˚>T˚–ç7^˜ﬁ˚ı‘1*∑{˜ŒxË°zõó]vI¸∑Ø˝QÍï˚◊ˇÍãÒŸœ~>uå ›wﬂWc~a>uåJ›u˜ÒÀ˙µ‘1*wÕ5W∆ÅﬂN£RKKKqË–°‘1*˜ñ7ﬂú:¬D¸˘ü/û¨y°¥›j«{ﬁÛ∑S«®‹ı◊_˜ﬂ uåJMOO≈Úr˝ÔMˆÌ€wﬂ]ˇÖˆÀ.ª8{Ïâ‘1*µs◊éx§EÔ¡ jÍ—Ñıü={Íˇeöàà'ü|∫ˆ˚s˘Ùr#Ê?˚ˆÔmƒá”æ˘?jˇEå’’µ⁄ó£QΩ◊û#"∆„f\3Où^Na"}Ù{ÒÏ≥S«®TØ€kƒ5Û∫ÎÆé¯fÍïöüüã˚Óˇ/©cTnyyπÁŸÒ∏˛_t{€7‚¸”Ñœ¶õÚC#7‹pmÍµUÔØµ         µ†Ë        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        ò∞?é  IDAT»û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸÎLz¿vª7ﬁxÌ§áù∏ôôÈ‘&bÔﬁkb<ßéQ©+ÆÿÔ}Ôm©cTÆ€Î∆⁄ÍZÍïö›4õ:¬DÃÕoiƒy∂h©#TnœûW«ß?}gÍïÎOıc∞2H£Rk√a|·?|9uå mŸ≤9uÑâ¯˚˚p,ü>ù:F•z˝^¨VS«®\Øﬂè’AΩœ?Q¥" zœ◊#"˙˝~‹q«≠©cTÆ”Ìƒpmò:F•∫›n¨≠’˚æ$"bÔ{RGòà&Ãe/ø¸í‘&‚W~ÂÉq‰—‘1*’Ñuëàı˚Ø;ﬁ]ˇkføﬂO°r˝~ØÎ?›n7uÑ -,Ã5‚öyÂUØJa">yÁGbey%uåJıßz1X©ˇöA÷,ªΩ^ÍÒS?ı∆ÿv˛y©cTnÎ÷≈‘*˜ +.oƒ5≥ﬂÔ◊˛≥ÈqÒÔ˛ÌóR«®‹÷•Ö‘jk‚Eß—h˜ﬁ˚ıI;qÔx«[SGòà˚Ó;√aΩ⁄/πÙ¢x◊moKŒÿ±£«qû-«eÍï€æ}õÛOM<˚Ï¡¯Ëo¸vÍï{ÕknJa"ﬁ˙÷[RG Ä¡\∂>ﬁÙ¶◊ßé º¿`∞⁄àıü&†gf¶]3k‰gˆÕ©# /∞k◊éÿµkGÍúKKãÆô5±∂∂˘µO§éQπWÌﬁô:Bmyt        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆ:©        PΩÒëÉ1|‚ª1>ÙtîßOEDD—ÌEk~k¥∂_ù/èh˘ÕÚ•Ë       PSÂ©c1¯≥ˇÉ˚ˇ4∆ü˛â∑5=ù´nä©◊º%⁄óÓúPB8säN        5SÆÆƒ‡œ˛$V˛ÎGπr˙å˛Õx˘T¨ﬁ˚µXΩ˜k—π‚öòy«¢}¡•'Ö3ßË       P#√'çSüˇΩ;|ˆ€¯ŒÅ8˛è?”oLΩ·ÁŒa:8{äN  4∆È˙œc˘ü˝ã‘1ààç¢é"F„(«„àGDE´—nEt:Q¥€©Sr&∆eƒp- ÏÀÚ˚≤àhµ#:Ìàv;ä¢HùîSñQá√qƒxeYFD¨ÔªVk}_v:ˆÂÜPF◊œ≥?<.À2ä¢—*"⁄œÌÀV+uPŒƒhÂpÂhº~ŒçÒ˙qX¥û€óm◊Ãçb<˛ÀÛl9é≤|ﬁ¸ÁπÛl—ÓD8Õ¶7•N $p˙3Àü˝\ÍD¨œ{Ü√(G£à≤|ﬁ}¶5Éç¶è◊ÔMF√ıπÏèX3(⁄Ì˜ô˘˚·ö¡h}^kÕ [" Àss1≈Úó?£«ø3∑(än˜lŒû¢  çQQ©ccïÎãò£QƒÍZî©„2îQé à—8bmÌπˇ√FUñeƒx˝ÉÜàÅ}πÅïÂxΩW:EVÌÀl˝CÖ\3ùc7∂ÁÕ÷Ã R*WQÆX3»ó5É˙¯◊ÏÀçÕöAûä•NƒE˝sæ›’˚ˇgƒp-fﬂˇ´
ä$Â´{        ›L;‚Ús_r˙Å’w≈ÚWøPŸˆ·L(:       ld≠"ä]˝àäüÓπÚ’/∆⁄√_Øv¯	ù        6∞b{7¢7ÅG ïe,Â_Æ?∂Pt       ÿ®:Eƒ›â7z˙{±zﬂüNl<x>E'       Ä™ÿ÷≠¸ëu/¥Úﬂø<Ÿ·9äN     0)eô:  5S.M∏Â£gûà—ìèM|\Pt  Â JÍ   ï*G„‘`C*W©# @ûz≠(¶“T?÷˘Fíqi6E'  ≤Qû<ï:  @µ∆£‘	`C*OüN Ú¥)]ÌcÙƒwìçMs): êèÅog  57ˆË:8~—	 ~¥¢_${|Èdc”\äN  d£SG   ®V©Ëg≈c‡G*;	ãNÀû“¿‰): êçt∑c   R(:¡Ÿp‰ ¿èV§\Xy,3ìßË @6ä~?u  Äjµ⁄©¿ÜTÙ∫©# @ñ Q∫:p15ùllöK—	 Äl¥∑ùü:  @•ä-õSGÄ©µÌº‘  K≈ ]—©µ‡˙Ã‰): êçÓæΩ©#   T™ΩÎä‘`CÍÓΩ>u »RπúÆË‘æ‡“dc”\äN  d£w«ª¢àî  ®÷‘ÔJ6§©˜ﬁñ: ‰È‘("—„Î:Øº2…∏4õ¢  ŸhÕÃD˚ÍWßé  Pâ÷‚BÙˆ^õ:lH≠π-—ﬁΩ3u »”·—ƒálÕläŒ+Øö¯∏†Ë @V6}Ï#Q¥LS Ä˙ô˝ﬂI6¥M˚ıà¬/A¿ïœÆM|Ãﬁçoä¢”ù¯∏‡$  ≤“⁄v^L‡=©c   úSΩ◊ÓãÓÎ˜ßéZ˚¢Ì1ıæ€S« Ä¸úOÙWùZ”≥1uÀ;'6<ü¢  Ÿô˙Ö˜E˜Ê◊•é  pN¥/ª$6˝Ó«S«ÄZò˘‡ﬂåﬁk˜•é Ÿ)üDîì´À≠QÃnûÃ`äN  diÛùøΩü˚ô‘1   ^ñŒ’W∆‹Á~?u®ïMø˚ÒËˇÙ-©c @^V (_≠|òˆ÷ã£ˇWﬁV˘8„(: ê≠Mø˛wcÛ?¯Õ(6Õ¶é  “Ù:1˝Kø[>Û©àñ•x8◊fÎ√1{ÁG£òµf  ?ÙÙZƒ≥√Í∂øZ∆‘Îoã¢›©nxﬁ}  d≠˚∆◊≈¬_É/¸«X˛‚óc¸Ã≥„qÍX   ˇø"¢µ∞Ωø˙Êò˘[ÔèËXÇá*ıo~CÙo~C˛˝ób˘è˛Såü˛~D9°gˆ @¶ «Q¥#bÒœEeîØD—ü9∑€Öó»]  Bˇˆ[£˚≠„q~4F>„ïA33—ZZàbz*uDŒByÚTîáèƒxe≠~/ä≈Ö(6oJã≥1Xç—°#Qû<Eß≈¬|¥ÊÊ¸éTGQ>ÂÒQD±eKãÛQt⁄©£ÒRïeîGé≈¯Ë—(á£hmﬁ¥~ûÌ˜R'„,î«O∆¯·(W◊¢òûäbq1Z≥”©cq Âï<ÂÚr›nK—⁄≤9u,ŒBπ∂∂>ó=v"Z›N¥wÓàŒUØVnÇ˙Ôæ-˙Ôæm}Õ‡°ÔƒË?ºæf0;≠•≈(¶˙©#r Sß¢<x8∆É’ı5É•Eø˙ΩQ≠bt‰Hî'N˝Âö¡¸\Dë:/U9FyHî'û[3ò€≠≈˘à∂5Éúú¸¯ÔD˘ù”QlG\‹;7«⁄âQîﬂD¨)ìû;.  6ñV+:ªØàŒÓ+R'^†õ:   –l≠VtÆ‹ù+w•NºÄ5ò†Áä˜ÂSkQúGyI/äô≥¸6‚®åxr- ßá~5ël(:       ‘Lylq|9 •N€{”g¯ÛN√2‚‡0 '◊÷ˇ2¢Ë       PGe¨óñ#fZ[⁄≥≠(¶ZÎçë""FEƒ`ÂÚ8‚¯h˝è~ôRt       ®ª”„ı?°«ƒ∆uñb        òE'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆ:ì∞(äËt&>Ïƒïekkk©cTÆ◊Î¶éPπ¢h5b_FQ¶Q©¢(¢,Î˝#ösûéF86Î\Æ´ˇÎçÜç8.£àóMπû‘ˇ∏\Wˇ◊Ÿå˜kDˆÂ∫&ºŒ&º∆àÊºŒ&h æl¬Îl¬kåh Îl ®	˜ô„qY˚˚Ã¶º_ùÍ§˚≤	Ø≥Ô◊à&ÏÀà¶ÏœfÏÀvª≠VΩØ¶)üe∂kæSö¯ªß,Àáìv‚æÚï?âO|‚¶éQπNßS˚˝˘Ω«èWÌzmÍï€Ω{g<Ù–#©cTÍ¢ã∂«_¸≈S©cTnˇ˛Ωµ?.#"ﬁÚÊüè„«èßéQ©ÎÆª:x‡õ©cTÓökÆåæù:F•ñññq\ﬁs˜˝ç∏fn€v~<ÛÃ˜S«®‘UWÌéo}Î°‘1*w˝ı◊ƒ˝˜H£R””S±ººí:FÂˆÌ€wﬂ}_ÍïªÏ≤ã„±«ûH£R;wÌàG~4uå ›t”uqœ=§é¡9p„M◊≈Ωÿó;wÓàG©˜±ŸÑslDƒæ˝{„ÓªÍÕl¬hÔﬁkqü˘{ü˙˝⁄ﬂõl€v^<ÛÃ≥©cTnˇ˛‚Æª˛WÍï[ZZåCáßéQ©={Æäo|„[©cTÆ	k≥ssõ„ÿ±©cTnˇ˛ΩqWÊ?^¥=û¨˘g`ª_Ω3z∞ﬁüeFD|˙”w∆ªn{[ÍïjJgd4ßéP[*d        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt       ‡≈EÍ4ú¢       @˝~µ€üö™t˚bù        j†µ¥PÌˆ´›>ºE'       Äh_±£≤m∑6mä÷ÁW∂}8äN        5–›cu€ﬁ∑7¢(*€>ú	E'       ÄËﬁt}ÛÛïlª˜3∑T≤]x)ù        j†Ë˜cÍéwûÛÌvvæ≤“_ãÇ3•Ë       PS∑ﬂÌÀ.9wlµbˆWŸcÎ»Ç¢       @M›nl˙Ìﬂäb”Ï9ŸﬁÃ/˝B¥Ø‹}N∂/ó¢       @ç¥/Ω86ˇŒ«_vŸi˙oº;¶Ó∏Ì•ÇóO—	       †f:{Æä-ü˘G—~≈e/˘ﬂ”S1˚/¶?¯Å
í¡ŸÎ§        ¿π◊æ¸íÿÚáˇ$¸ïX˛7_äÚ·ü¯˜ãn7∫oπ9f~Ò˝—:ÎÑR¬ôSt       ®©¢€â©ügL›ˆ◊bÌﬁ˚bÌûb¯›ˇÂ¡ÉQGQ,ÃG˚‚Ì—›suÙﬁö(ÊÁRGÜK—	       †Ó⁄ÌËÓø)∫˚oJùŒZ+u         Ä£Ë        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ+É’rí>ı‘3ÒπIôƒ÷•≈8xËpÍïk∑Z1èS«®‘÷•Ö8xËHÍïõü€GèùH£R≥33qÍÙÈ‘1*∑uÎB<Xˇ˜lØ◊ã’’’‘1*µ∏0áèK£rÛsq‰hΩ_ÁTø+ÉAÍï€∫u1¨ˇ¸gzj*ñWVR«®‘¸¸ñ8zÙxÍï[\òè√Gé¶éQ©nßk√aÍïk ˘gÛ¶ô8q≤ﬁÛŸ-[6≈Ò„'S«®‹“‚B:\ˇ9{,--ƒ°¨lŸ≤9éØ˜ö¡¶M3q≤ÊÁÿààÛ∂.∆≥∏fv:ù÷|‘ÑπlDƒ¸¸\≠˘ö¡ÃÙtú^^N£rMô≥Oı{±2®˜öe÷Ú""Ê‚HÕ◊f{›^¨Æ’˚˝—úÛœÏÃtú:]ÔÎ…¸¸Ê8z¥ﬁ˜%∑ˇı∑«µ◊]ù:F•F£q|ÚìüJ£r˚˜ﬂo˚OßéQK/:        ºT]        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆù        ÄÏ):        ŸSt        ≤ßË        dO—	        »û¢        ê=E'         {äN        @ˆ˛/ÎCö^£h–    IENDÆB`Ç                                                                                                                                                                                                                                                                                                          nd up matching nothing at all
        // Ref: https://github.com/highlightjs/highlight.js/issues/2140
        if (
          lastMatch.type === "begin" &&
          match.type === "end" &&
          lastMatch.index === match.index &&
          lexeme === ""
        ) {
          // spit the "skipped" character that our regex choked on back into the output sequence
          modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
          if (!SAFE_MODE) {
            /** @type {AnnotatedError} */
            const err = new Error(`0 width match regex (${languageName})`);
            err.languageName = languageName;
            err.badRule = lastMatch.rule;
            throw err;
          }
          return 1;
        }
        lastMatch = match;

        if (match.type === "begin") {
          return doBeginMatch(match);
        } else if (match.type === "illegal" && !ignoreIllegals) {
          // illegal match, we do not continue processing
          /** @type {AnnotatedError} */
          const err = new Error(
            'Illegal lexeme "' +
              lexeme +
              '" for mode "' +
              (top.scope || "<unnamed>") +
              '"',
          );
          err.mode = top;
          throw err;
        } else if (match.type === "end") {
          const processed = doEndMatch(match);
          if (processed !== NO_MATCH) {
            return processed;
          }
        }

        // edge case for when illegal matches $ (end of line) which is technically
        // a 0 width match but not a begin/end match so it's not caught by the
        // first handler (when ignoreIllegals is true)
        if (match.type === "illegal" && lexeme === "") {
          // advance so we aren't stuck in an infinite loop
          modeBuffer += "\n";
          return 1;
        }

        // infinite loops are BAD, this is a last ditch catch all. if we have a
        // decent number of iterations yet our index (cursor position in our
        // parsing) still 3x behind our index then something is very wrong
        // so we bail
        if (iterations > 100000 && iterations > match.index * 3) {
          const err = new Error(
            "potential infinite loop, way more iterations than matches",
          );
          throw err;
        }

        /*
        Why might be find ourselves here?  An potential end match that was
        triggered but could not be completed.  IE, `doEndMatch` returned NO_MATCH.
        (this could be because a callback requests the match be ignored, etc)

        This causes no real harm other than stopping a few times too many.
        */

        modeBuffer += lexeme;
        return lexeme.length;
      }

      const language = getLanguage(languageName);
      if (!language) {
        error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
        throw new Error('Unknown language: "' + languageName + '"');
      }

      const md = compileLanguage(language);
      let result = "";
      /** @type {CompiledMode} */
      let top = continuation || md;
      /** @type Record<string,CompiledMode> */
      const continuations = {}; // keep continuations for sub-languages
      const emitter = new options.emitter(options);
      processContinuations();
      let modeBuffer = "";
      let relevance = 0;
      let index = 0;
      let iterations = 0;
      let resumeScanAtSamePosition = false;

      try {
        if (!language.emitTokens) {
          top.matcher.considerAll();

          for (;;) {
            iterations++;
            if (resumeScanAtSamePosition) {
              // only regexes not matched previously will now be
              // considered for a potential match
              resumeScanAtSamePosition = false;
            } else {
              top.matcher.considerAll();
            }
            top.matcher.lastIndex = index;

            const match = top.matcher.exec(codeToHighlight);
            // console.log("match", match[0], match.rule && match.rule.begin)

            if (!match) break;

            const beforeMatch = codeToHighlight.substring(index, match.index);
            const processedCount = processLexeme(beforeMatch, match);
            index = match.index + processedCount;
          }
          processLexeme(codeToHighlight.substring(index));
        } else {
          language.emitTokens(codeToHighlight, emitter);
        }

        emitter.finalize();
        result = emitter.toHTML();

        return {
          language: languageName,
          value: result,
          relevance,
          illegal: false,
          _emitter: emitter,
          _top: top,
        };
      } catch (err) {
        if (err.message && err.message.includes("Illegal")) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: true,
            relevance: 0,
            _illegalBy: {
              message: err.message,
              index,
              context: codeToHighlight.slice(index - 100, index + 100),
              mode: err.mode,
              resultSoFar: result,
            },
            _emitter: emitter,
          };
        } else if (SAFE_MODE) {
          return {
            language: languageName,
            value: escape(codeToHighlight),
            illegal: false,
            relevance: 0,
            errorRaised: err,
            _emitter: emitter,
            _top: top,
          };
        } else {
          throw err;
        }
      }
    }

    /**
     * returns a valid highlight result, without actually doing any actual work,
     * auto highlight starts with this and it's possible for small snippets that
     * auto-detection may not find a better match
     * @param {string} code
     * @returns {HighlightResult}
     */
    function justTextHighlightResult(code) {
      const result = {
        value: escape(code),
        illegal: false,
        relevance: 0,
        _top: PLAINTEXT_LANGUAGE,
        _emitter: new options.emitter(options),
      };
      result._emitter.addText(code);
      return result;
    }

    /**
    Highlighting with language detection. Accepts a string with the code to
    highlight. Returns an object with the following properties:

    - language (detected language)
    - relevance (int)
    - value (an HTML string with highlighting markup)
    - secondBest (object with the same structure for second-best heuristically
      detected language, may be absent)

      @param {string} code
      @param {Array<string>} [languageSubset]
      @returns {AutoHighlightResult}
    */
    function highlightAuto(code, languageSubset) {
      languageSubset =
        languageSubset || options.languages || Object.keys(languages);
      const plaintext = justTextHighlightResult(code);

      const results = languageSubset
        .filter(getLanguage)
        .filter(autoDetection)
        .map((name) => _highlight(name, code, false));
      results.unshift(plaintext); // plaintext is always an option

      const sorted = results.sort((a, b) => {
        // sort base on relevance
        if (a.relevance !== b.relevance) return b.relevance - a.relevance;

        // always award the tie to the base language
        // ie if C++ and Arduino are tied, it's more likely to be C++
        if (a.language && b.language) {
          if (getLanguage(a.language).supersetOf === b.language) {
            return 1;
          } else if (getLanguage(b.language).supersetOf === a.language) {
            return -1;
          }
        }

        // otherwise say they are equal, which has the effect of sorting on
        // relevance while preserving the original ordering - which is how ties
        // have historically been settled, ie the language that comes first always
        // wins in the case of a tie
        return 0;
      });

      const [best, secondBest] = sorted;

      /** @type {AutoHighlightResult} */
      const result = best;
      result.secondBest = secondBest;

      return result;
    }

    /**
     * Builds new class name for block given the language name
     *
     * @param {HTMLElement} element
     * @param {string} [currentLang]
     * @param {string} [resultLang]
     */
    function updateClassName(element, currentLang, resultLang) {
      const language = (currentLang && aliases[currentLang]) || resultLang;

      element.classList.add("hljs");
      element.classList.add(`language-${language}`);
    }

    /**
     * Applies highlighting to a DOM node containing code.
     *
     * @param {HighlightedHTMLElement} element - the HTML element to highlight
     */
    function highlightElement(element) {
      /** @type HTMLElement */
      let node = null;
      const language = blockLanguage(element);

      if (shouldNotHighlight(language)) return;

      fire("before:highlightElement", { el: element, language });

      if (element.dataset.highlighted) {
        console.log(
          "Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",
          element,
        );
        return;
      }

      // we should be all text, no child nodes (unescaped HTML) - this is possibly
      // an HTML injection attack - it's likely too late if this is already in
      // production (the code has likely already done its damage by the time
      // we're seeing it)... but we yell loudly about this so that hopefully it's
      // more likely to be caught in development before making it to production
      if (element.children.length > 0) {
        if (!options.ignoreUnescapedHTML) {
          console.warn(
            "One of your code blocks includes unescaped HTML. This is a potentially serious security risk.",
          );
          console.warn(
            "https://github.com/highlightjs/highlight.js/wiki/security",
          );
          console.warn("The element with unescaped HTML:");
          console.warn(element);
        }
        if (options.throwUnescapedHTML) {
          const err = new HTMLInjectionError(
            "One of your code blocks includes unescaped HTML.",
            element.innerHTML,
          );
          throw err;
        }
      }

      node = element;
      const text = node.textContent;
      const result = language
        ? highlight(text, { language, ignoreIllegals: true })
        : highlightAuto(text);

      element.innerHTML = result.value;
      element.dataset.highlighted = "yes";
      updateClassName(element, language, result.language);
      element.result = {
        language: result.language,
        // TODO: remove with version 11.0
        re: result.relevance,
        relevance: result.relevance,
      };
      if (result.secondBest) {
        element.secondBest = {
          language: result.secondBest.language,
          relevance: result.secondBest.relevance,
        };
      }

      fire("after:highlightElement", { el: element, result, text });
    }

    /**
     * Updates highlight.js global options with the passed options
     *
     * @param {Partial<HLJSOptions>} userOptions
     */
    function configure(userOptions) {
      options = inherit(options, userOptions);
    }

    // TODO: remove v12, deprecated
    const initHighlighting = () => {
      highlightAll();
      deprecated(
        "10.6.0",
        "initHighlighting() deprecated.  Use highlightAll() now.",
      );
    };

    // TODO: remove v12, deprecated
    function initHighlightingOnLoad() {
      highlightAll();
      deprecated(
        "10.6.0",
        "initHighlightingOnLoad() deprecated.  Use highlightAll() now.",
      );
    }

    let wantsHighlight = false;

    /**
     * auto-highlights all pre>code elements on the page
     */
    function highlightAll() {
      function boot() {
        // if a highlight was requested before DOM was loaded, do now
        highlightAll();
      }

      // if we are called too early in the loading process
      if (document.readyState === "loading") {
        // make sure the event listener is only added once
        if (!wantsHighlight) {
          window.addEventListener("DOMContentLoaded", boot, false);
        }
        wantsHighlight = true;
        return;
      }

      const blocks = document.querySelectorAll(options.cssSelector);
      blocks.forEach(highlightElement);
    }

    /**
     * Register a language grammar module
     *
     * @param {string} languageName
     * @param {LanguageFn} languageDefinition
     */
    function registerLanguage(languageName, languageDefinition) {
      let lang = null;
      try {
        lang = languageDefinition(hljs);
      } catch (error$1) {
        error(
          "Language definition for '{}' could not be registered.".replace(
            "{}",
            languageName,
          ),
        );
        // hard or soft error
        if (!SAFE_MODE) {
          throw error$1;
        } else {
          error(error$1);
        }
        // languages that have serious errors are replaced with essentially a
        // "plaintext" stand-in so that the code blocks will still get normal
        // css classes applied to them - and one bad language won't break the
        // entire highlighter
        lang = PLAINTEXT_LANGUAGE;
      }
      // give it a temporary name if it doesn't have one in the meta-data
      if (!lang.name) lang.name = languageName;
      languages[languageName] = lang;
      lang.rawDefinition = languageDefinition.bind(null, hljs);

      if (lang.aliases) {
        registerAliases(lang.aliases, { languageName });
      }
    }

    /**
     * Remove a language grammar module
     *
     * @param {string} languageName
     */
    function unregisterLanguage(languageName) {
      delete languages[languageName];
      for (const alias of Object.keys(aliases)) {
        if (aliases[alias] === languageName) {
          delete aliases[alias];
        }
      }
    }

    /**
     * @returns {string[]} List of language internal names
     */
    function listLanguages() {
      return Object.keys(languages);
    }

    /**
     * @param {string} name - name of the language to retrieve
     * @returns {Language | undefined}
     */
    function getLanguage(name) {
      name = (name || "").toLowerCase();
      return languages[name] || languages[aliases[name]];
    }

    /**
     *
     * @param {string|string[]} aliasList - single alias or list of aliases
     * @param {{languageName: string}} opts
     */
    function registerAliases(aliasList, { languageName }) {
      if (typeof aliasList === "string") {
        aliasList = [aliasList];
      }
      aliasList.forEach((alias) => {
        aliases[alias.toLowerCase()] = languageName;
      });
    }

    /**
     * Determines if a given language has auto-detection enabled
     * @param {string} name - name of the language
     */
    function autoDetection(name) {
      const lang = getLanguage(name);
      return lang && !lang.disableAutodetect;
    }

    /**
     * Upgrades the old highlightBlock plugins to the new
     * highlightElement API
     * @param {HLJSPlugin} plugin
     */
    function upgradePluginAPI(plugin) {
      // TODO: remove with v12
      if (
        plugin["before:highlightBlock"] &&
        !plugin["before:highlightElement"]
      ) {
        plugin["before:highlightElement"] = (data) => {
          plugin["before:highlightBlock"](
            Object.assign({ block: data.el }, data),
          );
        };
      }
      if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
        plugin["after:highlightElement"] = (data) => {
          plugin["after:highlightBlock"](
            Object.assign({ block: data.el }, data),
          );
        };
      }
    }

    /**
     * @param {HLJSPlugin} plugin
     */
    function addPlugin(plugin) {
      upgradePluginAPI(plugin);
      plugins.push(plugin);
    }

    /**
     * @param {HLJSPlugin} plugin
     */
    function removePlugin(plugin) {
      const index = plugins.indexOf(plugin);
      if (index !== -1) {
        plugins.splice(index, 1);
      }
    }

    /**
     *
     * @param {PluginEvent} event
     * @param {any} args
     */
    function fire(event, args) {
      const cb = event;
      plugins.forEach(function (plugin) {
        if (plugin[cb]) {
          plugin[cb](args);
        }
      });
    }

    /**
     * DEPRECATED
     * @param {HighlightedHTMLElement} el
     */
    function deprecateHighlightBlock(el) {
      deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
      deprecated("10.7.0", "Please use highlightElement now.");

      return highlightElement(el);
    }

    /* Interface definition */
    Object.assign(hljs, {
      highlight,
      highlightAuto,
      highlightAll,
      highlightElement,
      // TODO: Remove with v12 API
      highlightBlock: deprecateHighlightBlock,
      configure,
      initHighlighting,
      initHighlightingOnLoad,
      registerLanguage,
      unregisterLanguage,
      listLanguages,
      getLanguage,
      registerAliases,
      autoDetection,
      inherit,
      addPlugin,
      removePlugin,
    });

    hljs.debugMode = function () {
      SAFE_MODE = false;
    };
    hljs.safeMode = function () {
      SAFE_MODE = true;
    };
    hljs.versionString = version;

    hljs.regex = {
      concat: concat,
      lookahead: lookahead,
      either: either,
      optional: optional,
      anyNumberOfTimes: anyNumberOfTimes,
    };

    for (const key in MODES) {
      // @ts-ignore
      if (typeof MODES[key] === "object") {
        // @ts-ignore
        deepFreeze(MODES[key]);
      }
    }

    // merge all the modes/regexes into our main object
    Object.assign(hljs, MODES);

    return hljs;
  };

  // Other names for the variable may break build script
  const highlight = HLJS({});

  // returns a new instance of the highlighter to be used for extensions
  // check https://github.com/wooorm/lowlight/issues/47
  highlight.newInstance = () => HLJS({});

  return highlight;
})();
if (typeof exports === "object" && typeof module !== "undefined") {
  module.exports = hljs;
}
/*! `bash` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: Bash
  Author: vah <vahtenberg@gmail.com>
  Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
  Website: https://www.gnu.org/software/bash/
  Category: common, scripting
  */

    /** @type LanguageFn */
    function bash(hljs) {
      const regex = hljs.regex;
      const VAR = {};
      const BRACED_VAR = {
        begin: /\$\{/,
        end: /\}/,
        contains: [
          "self",
          {
            begin: /:-/,
            contains: [VAR],
          }, // default values
        ],
      };
      Object.assign(VAR, {
        className: "variable",
        variants: [
          {
            begin: regex.concat(
              /\$[\w\d#@][\w\d_]*/,
              // negative look-ahead tries to avoid matching patterns that are not
              // Perl at all like $ident$, @ident@, etc.
              `(?![\\w\\d])(?![$])`,
            ),
          },
          BRACED_VAR,
        ],
      });

      const SUBST = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE],
      };
      const COMMENT = hljs.inherit(hljs.COMMENT(), {
        match: [/(^|\s)/, /#.*$/],
        scope: {
          2: "comment",
        },
      });
      const HERE_DOC = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [
            hljs.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: "string",
            }),
          ],
        },
      };
      const QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [hljs.BACKSLASH_ESCAPE, VAR, SUBST],
      };
      SUBST.contains.push(QUOTE_STRING);
      const ESCAPED_QUOTE = {
        match: /\\"/,
      };
      const APOS_STRING = {
        className: "string",
        begin: /'/,
        end: /'/,
      };
      const ESCAPED_APOS = {
        match: /\\'/,
      };
      const ARITHMETIC = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [
          {
            begin: /\d+#[0-9a-f]+/,
            className: "number",
          },
          hljs.NUMBER_MODE,
          VAR,
        ],
      };
      const SH_LIKE_SHELLS = [
        "fish",
        "bash",
        "zsh",
        "sh",
        "csh",
        "ksh",
        "tcsh",
        "dash",
        "scsh",
      ];
      const KNOWN_SHEBANG = hljs.SHEBANG({
        binary: `(${SH_LIKE_SHELLS.join("|")})`,
        relevance: 10,
      });
      const FUNCTION = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: true,
        contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0,
      };

      const KEYWORDS = [
        "if",
        "then",
        "else",
        "elif",
        "fi",
        "time",
        "for",
        "while",
        "until",
        "in",
        "do",
        "done",
        "case",
        "esac",
        "coproc",
        "function",
        "select",
      ];

      const LITERALS = ["true", "false"];

      // to consume paths to prevent keyword matches inside them
      const PATH_MODE = { match: /(\/[a-z._-]+)+/ };

      // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
      const SHELL_BUILT_INS = [
        "break",
        "cd",
        "continue",
        "eval",
        "exec",
        "exit",
        "export",
        "getopts",
        "hash",
        "pwd",
        "readonly",
        "return",
        "shift",
        "test",
        "times",
        "trap",
        "umask",
        "unset",
      ];

      const BASH_BUILT_INS = [
        "alias",
        "bind",
        "builtin",
        "caller",
        "command",
        "declare",
        "echo",
        "enable",
        "help",
        "let",
        "local",
        "logout",
        "mapfile",
        "printf",
        "read",
        "readarray",
        "source",
        "sudo",
        "type",
        "typeset",
        "ulimit",
        "unalias",
      ];

      const ZSH_BUILT_INS = [
        "autoload",
        "bg",
        "bindkey",
        "bye",
        "cap",
        "chdir",
        "clone",
        "comparguments",
        "compcall",
        "compctl",
        "compdescribe",
        "compfiles",
        "compgroups",
        "compquote",
        "comptags",
        "comptry",
        "compvalues",
        "dirs",
        "disable",
        "disown",
        "echotc",
        "echoti",
        "emulate",
        "fc",
        "fg",
        "float",
        "functions",
        "getcap",
        "getln",
        "history",
        "integer",
        "jobs",
        "kill",
        "limit",
        "log",
        "noglob",
        "popd",
        "print",
        "pushd",
        "pushln",
        "rehash",
        "sched",
        "setcap",
        "setopt",
        "stat",
        "suspend",
        "ttyctl",
        "unfunction",
        "unhash",
        "unlimit",
        "unsetopt",
        "vared",
        "wait",
        "whence",
        "where",
        "which",
        "zcompile",
        "zformat",
        "zftp",
        "zle",
        "zmodload",
        "zparseopts",
        "zprof",
        "zpty",
        "zregexparse",
        "zsocket",
        "zstyle",
        "ztcp",
      ];

      const GNU_CORE_UTILS = [
        "chcon",
        "chgrp",
        "chown",
        "chmod",
        "cp",
        "dd",
        "df",
        "dir",
        "dircolors",
        "ln",
        "ls",
        "mkdir",
        "mkfifo",
        "mknod",
        "mktemp",
        "mv",
        "realpath",
        "rm",
        "rmdir",
        "shred",
        "sync",
        "touch",
        "truncate",
        "vdir",
        "b2sum",
        "base32",
        "base64",
        "cat",
        "cksum",
        "comm",
        "csplit",
        "cut",
        "expand",
        "fmt",
        "fold",
        "head",
        "join",
        "md5sum",
        "nl",
        "numfmt",
        "od",
        "paste",
        "ptx",
        "pr",
        "sha1sum",
        "sha224sum",
        "sha256sum",
        "sha384sum",
        "sha512sum",
        "shuf",
        "sort",
        "split",
        "sum",
        "tac",
        "tail",
        "tr",
        "tsort",
        "unexpand",
        "uniq",
        "wc",
        "arch",
        "basename",
        "chroot",
        "date",
        "dirname",
        "du",
        "echo",
        "env",
        "expr",
        "factor",
        // "false", // keyword literal already
        "groups",
        "hostid",
        "id",
        "link",
        "logname",
        "nice",
        "nohup",
        "nproc",
        "pathchk",
        "pinky",
        "printenv",
        "printf",
        "pwd",
        "readlink",
        "runcon",
        "seq",
        "sleep",
        "stat",
        "stdbuf",
        "stty",
        "tee",
        "test",
        "timeout",
        // "true", // keyword literal already
        "tty",
        "uname",
        "unlink",
        "uptime",
        "users",
        "who",
        "whoami",
        "yes",
      ];

      return {
        name: "Bash",
        aliases: ["sh", "zsh"],
        keywords: {
          $pattern: /\b[a-z][a-z0-9._-]+\b/,
          keyword: KEYWORDS,
          literal: LITERALS,
          built_in: [
            ...SHELL_BUILT_INS,
            ...BASH_BUILT_INS,
            // Shell modifiers
            "set",
            "shopt",
            ...ZSH_BUILT_INS,
            ...GNU_CORE_UTILS,
          ],
        },
        contains: [
          KNOWN_SHEBANG, // to catch known shells and boost relevancy
          hljs.SHEBANG(), // to catch unknown shells but still highlight the shebang
          FUNCTION,
          ARITHMETIC,
          COMMENT,
          HERE_DOC,
          PATH_MODE,
          QUOTE_STRING,
          ESCAPED_QUOTE,
          APOS_STRING,
          ESCAPED_APOS,
          VAR,
        ],
      };
    }

    return bash;
  })();

  hljs.registerLanguage("bash", hljsGrammar);
})(); /*! `css` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    const MODES = (hljs) => {
      return {
        IMPORTANT: {
          scope: "meta",
          begin: "!important",
        },
        BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,
        HEXCOLOR: {
          scope: "number",
          begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
        },
        FUNCTION_DISPATCH: {
          className: "built_in",
          begin: /[\w-]+(?=\()/,
        },
        ATTRIBUTE_SELECTOR_MODE: {
          scope: "selector-attr",
          begin: /\[/,
          end: /\]/,
          illegal: "$",
          contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE],
        },
        CSS_NUMBER_MODE: {
          scope: "number",
          begin:
            hljs.NUMBER_RE +
            "(" +
            "%|em|ex|ch|rem" +
            "|vw|vh|vmin|vmax" +
            "|cm|mm|in|pt|pc|px" +
            "|deg|grad|rad|turn" +
            "|s|ms" +
            "|Hz|kHz" +
            "|dpi|dpcm|dppx" +
            ")?",
          relevance: 0,
        },
        CSS_VARIABLE: {
          className: "attr",
          begin: /--[A-Za-z_][A-Za-z0-9_-]*/,
        },
      };
    };

    const HTML_TAGS = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "optgroup",
      "option",
      "p",
      "picture",
      "q",
      "quote",
      "samp",
      "section",
      "select",
      "source",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ];

    const SVG_TAGS = [
      "defs",
      "g",
      "marker",
      "mask",
      "pattern",
      "svg",
      "switch",
      "symbol",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feFlood",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMorphology",
      "feOffset",
      "feSpecularLighting",
      "feTile",
      "feTurbulence",
      "linearGradient",
      "radialGradient",
      "stop",
      "circle",
      "ellipse",
      "image",
      "line",
      "path",
      "polygon",
      "polyline",
      "rect",
      "text",
      "use",
      "textPath",
      "tspan",
      "foreignObject",
      "clipPath",
    ];

    const TAGS = [...HTML_TAGS, ...SVG_TAGS];

    // Sorting, then reversing makes sure longer attributes/elements like
    // `font-weight` are matched fully instead of getting false positives on say `font`

    const MEDIA_FEATURES = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      // TODO: find a better solution?
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ]
      .sort()
      .reverse();

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
    const PSEUDO_CLASSES = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir", // dir()
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has", // has()
      "host", // host or host()
      "host-context", // host-context()
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is", // is()
      "lang", // lang()
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not", // not()
      "nth-child", // nth-child()
      "nth-col", // nth-col()
      "nth-last-child", // nth-last-child()
      "nth-last-col", // nth-last-col()
      "nth-last-of-type", //nth-last-of-type()
      "nth-of-type", //nth-of-type()
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where", // where()
    ]
      .sort()
      .reverse();

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
    const PSEUDO_ELEMENTS = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ]
      .sort()
      .reverse();

    const ATTRIBUTES = [
      "accent-color",
      "align-content",
      "align-items",
      "align-self",
      "alignment-baseline",
      "all",
      "anchor-name",
      "animation",
      "animation-composition",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-range",
      "animation-range-end",
      "animation-range-start",
      "animation-timeline",
      "animation-timing-function",
      "appearance",
      "aspect-ratio",
      "backdrop-filter",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-repeat",
      "background-size",
      "baseline-shift",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-end-end-radius",
      "border-end-start-radius",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-start-end-radius",
      "border-start-start-radius",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-align",
      "box-decoration-break",
      "box-direction",
      "box-flex",
      "box-flex-group",
      "box-lines",
      "box-ordinal-group",
      "box-orient",
      "box-pack",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "color-scheme",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "contain-intrinsic-block-size",
      "contain-intrinsic-height",
      "contain-intrinsic-inline-size",
      "contain-intrinsic-size",
      "contain-intrinsic-width",
      "container",
      "container-name",
      "container-type",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "counter-set",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "cx",
      "cy",
      "direction",
      "display",
      "dominant-baseline",
      "empty-cells",
      "enable-background",
      "field-sizing",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flood-color",
      "flood-opacity",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-optical-sizing",
      "font-palette",
      "font-size",
      "font-size-adjust",
      "font-smooth",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-synthesis-position",
      "font-synthesis-small-caps",
      "font-synthesis-style",
      "font-synthesis-weight",
      "font-variant",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-emoji",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "forced-color-adjust",
      "gap",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphenate-character",
      "hyphenate-limit-chars",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "initial-letter",
      "initial-letter-align",
      "inline-size",
      "inset",
      "inset-area",
      "inset-block",
      "inset-block-end",
      "inset-block-start",
      "inset-inline",
      "inset-inline-end",
      "inset-inline-start",
      "isolation",
      "justify-content",
      "justify-items",
      "justify-self",
      "kerning",
      "left",
      "letter-spacing",
      "lighting-color",
      "line-break",
      "line-height",
      "line-height-step",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-trim",
      "marker",
      "marker-end",
      "marker-mid",
      "marker-start",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "masonry-auto-flow",
      "math-depth",
      "math-shift",
      "math-style",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "offset",
      "offset-anchor",
      "offset-distance",
      "offset-path",
      "offset-position",
      "offset-rotate",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-anchor",
      "overflow-block",
      "overflow-clip-margin",
      "overflow-inline",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "overlay",
      "overscroll-behavior",
      "overscroll-behavior-block",
      "overscroll-behavior-inline",
      "overscroll-behavior-x",
      "overscroll-behavior-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "paint-order",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "place-content",
      "place-items",
      "place-self",
      "pointer-events",
      "position",
      "position-anchor",
      "position-visibility",
      "print-color-adjust",
      "quotes",
      "r",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "rotate",
      "row-gap",
      "ruby-align",
      "ruby-position",
      "scale",
      "scroll-behavior",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scroll-timeline",
      "scroll-timeline-axis",
      "scroll-timeline-name",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "shape-rendering",
      "speak",
      "speak-as",
      "src", // @font-face
      "stop-color",
      "stop-opacity",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-anchor",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-skip",
      "text-decoration-skip-ink",
      "text-decoration-style",
      "text-decoration-thickness",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-size-adjust",
      "text-transform",
      "text-underline-offset",
      "text-underline-position",
      "text-wrap",
      "text-wrap-mode",
      "text-wrap-style",
      "timeline-scope",
      "top",
      "touch-action",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-behavior",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
      "unicode-bidi",
      "user-modify",
      "user-select",
      "vector-effect",
      "vertical-align",
      "view-timeline",
      "view-timeline-axis",
      "view-timeline-inset",
      "view-timeline-name",
      "view-transition-name",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "white-space-collapse",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "x",
      "y",
      "z-index",
      "zoom",
    ]
      .sort()
      .reverse();

    /*
  Language: CSS
  Category: common, css, web
  Website: https://developer.mozilla.org/en-US/docs/Web/CSS
  */

    /** @type LanguageFn */
    function css(hljs) {
      const regex = hljs.regex;
      const modes = MODES(hljs);
      const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };
      const AT_MODIFIERS = "and or not only";
      const AT_PROPERTY_RE = /@-?\w[\w]*(-\w+)*/; // @-webkit-keyframes
      const IDENT_RE = "[a-zA-Z-][a-zA-Z0-9_-]*";
      const STRINGS = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE];

      return {
        name: "CSS",
        case_insensitive: true,
        illegal: /[=|'\$]/,
        keywords: { keyframePosition: "from to" },
        classNameAliases: {
          // for visual continuity with `tag {}` and because we
          // don't have a great class for this?
          keyframePosition: "selector-tag",
        },
        contains: [
          modes.BLOCK_COMMENT,
          VENDOR_PREFIX,
          // to recognize keyframe 40% etc which are outside the scope of our
          // attribute value mode
          modes.CSS_NUMBER_MODE,
          {
            className: "selector-id",
            begin: /#[A-Za-z0-9_-]+/,
            relevance: 0,
          },
          {
            className: "selector-class",
            begin: "\\." + IDENT_RE,
            relevance: 0,
          },
          modes.ATTRIBUTE_SELECTOR_MODE,
          {
            className: "selector-pseudo",
            variants: [
              { begin: ":(" + PSEUDO_CLASSES.join("|") + ")" },
              { begin: ":(:)?(" + PSEUDO_ELEMENTS.join("|") + ")" },
            ],
          },
          // we may actually need this (12/2020)
          // { // pseudo-selector params
          //   begin: /\(/,
          //   end: /\)/,
          //   contains: [ hljs.CSS_NUMBER_MODE ]
          // },
          modes.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + ATTRIBUTES.join("|") + ")\\b",
          },
          // attribute values
          {
            begin: /:/,
            end: /[;}{]/,
            contains: [
              modes.BLOCK_COMMENT,
              modes.HEXCOLOR,
              modes.IMPORTANT,
              modes.CSS_NUMBER_MODE,
              ...STRINGS,
              // needed to highlight these as strings and to avoid issues with
              // illegal characters that might be inside urls that would tigger the
              // languages illegal stack
              {
                begin: /(url|data-uri)\(/,
                end: /\)/,
                relevance: 0, // from keywords
                keywords: { built_in: "url data-uri" },
                contains: [
                  ...STRINGS,
                  {
                    className: "string",
                    // any character other than `)` as in `url()` will be the start
                    // of a string, which ends with `)` (from the parent mode)
                    begin: /[^)]/,
                    endsWithParent: true,
                    excludeEnd: true,
                  },
                ],
              },
              modes.FUNCTION_DISPATCH,
            ],
          },
          {
            begin: regex.lookahead(/@/),
            end: "[{;]",
            relevance: 0,
            illegal: /:/, // break on Less variables @var: ...
            contains: [
              {
                className: "keyword",
                begin: AT_PROPERTY_RE,
              },
              {
                begin: /\s/,
                endsWithParent: true,
                excludeEnd: true,
                relevance: 0,
                keywords: {
                  $pattern: /[a-z-]+/,
                  keyword: AT_MODIFIERS,
                  attribute: MEDIA_FEATURES.join(" "),
                },
                contains: [
                  {
                    begin: /[a-z-]+(?=:)/,
                    className: "attribute",
                  },
                  ...STRINGS,
                  modes.CSS_NUMBER_MODE,
                ],
              },
            ],
          },
          {
            className: "selector-tag",
            begin: "\\b(" + TAGS.join("|") + ")\\b",
          },
        ],
      };
    }

    return css;
  })();

  hljs.registerLanguage("css", hljsGrammar);
})(); /*! `dos` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: Batch file (DOS)
  Author: Alexander Makarov <sam@rmcreative.ru>
  Contributors: Anton Kochkov <anton.kochkov@gmail.com>
  Website: https://en.wikipedia.org/wiki/Batch_file
  Category: scripting
  */

    /** @type LanguageFn */
    function dos(hljs) {
      const COMMENT = hljs.COMMENT(/^\s*@?rem\b/, /$/, { relevance: 10 });
      const LABEL = {
        className: "symbol",
        begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
        relevance: 0,
      };
      const KEYWORDS = [
        "if",
        "else",
        "goto",
        "for",
        "in",
        "do",
        "call",
        "exit",
        "not",
        "exist",
        "errorlevel",
        "defined",
        "equ",
        "neq",
        "lss",
        "leq",
        "gtr",
        "geq",
      ];
      const BUILT_INS = [
        "prn",
        "nul",
        "lpt3",
        "lpt2",
        "lpt1",
        "con",
        "com4",
        "com3",
        "com2",
        "com1",
        "aux",
        "shift",
        "cd",
        "dir",
        "echo",
        "setlocal",
        "endlocal",
        "set",
        "pause",
        "copy",
        "append",
        "assoc",
        "at",
        "attrib",
        "break",
        "cacls",
        "cd",
        "chcp",
        "chdir",
        "chkdsk",
        "chkntfs",
        "cls",
        "cmd",
        "color",
        "comp",
        "compact",
        "convert",
        "date",
        "dir",
        "diskcomp",
        "diskcopy",
        "doskey",
        "erase",
        "fs",
        "find",
        "findstr",
        "format",
        "ftype",
        "graftabl",
        "help",
        "keyb",
        "label",
        "md",
        "mkdir",
        "mode",
        "more",
        "move",
        "path",
        "pause",
        "print",
        "popd",
        "pushd",
        "promt",
        "rd",
        "recover",
        "rem",
        "rename",
        "replace",
        "restore",
        "rmdir",
        "shift",
        "sort",
        "start",
        "subst",
        "time",
        "title",
        "tree",
        "type",
        "ver",
        "verify",
        "vol",
        // winutils
        "ping",
        "net",
        "ipconfig",
        "taskkill",
        "xcopy",
        "ren",
        "del",
      ];
      return {
        name: "Batch file (DOS)",
        aliases: ["bat", "cmd"],
        case_insensitive: true,
        illegal: /\/\*/,
        keywords: {
          keyword: KEYWORDS,
          built_in: BUILT_INS,
        },
        contains: [
          {
            className: "variable",
            begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/,
          },
          {
            className: "function",
            begin: LABEL.begin,
            end: "goto:eof",
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
              }),
              COMMENT,
            ],
          },
          {
            className: "number",
            begin: "\\b\\d+",
            relevance: 0,
          },
          COMMENT,
        ],
      };
    }

    return dos;
  })();

  hljs.registerLanguage("dos", hljsGrammar);
})(); /*! `gcode` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
   Language: G-code (ISO 6983)
   Contributors: Adam Joseph Cook <adam.joseph.cook@gmail.com>
   Description: G-code syntax highlighter for Fanuc and other common CNC machine tool controls.
   Website: https://www.sis.se/api/document/preview/911952/
   Category: hardware
   */

    function gcode(hljs) {
      const regex = hljs.regex;
      const GCODE_KEYWORDS = {
        $pattern: /[A-Z]+|%/,
        keyword: [
          // conditions
          "THEN",
          "ELSE",
          "ENDIF",
          "IF",

          // controls
          "GOTO",
          "DO",
          "WHILE",
          "WH",
          "END",
          "CALL",

          // scoping
          "SUB",
          "ENDSUB",

          // comparisons
          "EQ",
          "NE",
          "LT",
          "GT",
          "LE",
          "GE",
          "AND",
          "OR",
          "XOR",

          // start/end of program
          "%",
        ],
        built_in: [
          "ATAN",
          "ABS",
          "ACOS",
          "ASIN",
          "COS",
          "EXP",
          "FIX",
          "FUP",
          "ROUND",
          "LN",
          "SIN",
          "SQRT",
          "TAN",
          "EXISTS",
        ],
      };

      // TODO: post v12 lets use look-behind, until then \b and a callback filter will be used
      // const LETTER_BOUNDARY_RE = /(?<![A-Z])/;
      const LETTER_BOUNDARY_RE = /\b/;

      function LETTER_BOUNDARY_CALLBACK(matchdata, response) {
        if (matchdata.index === 0) {
          return;
        }

        const charBeforeMatch = matchdata.input[matchdata.index - 1];
        if (charBeforeMatch >= "0" && charBeforeMatch <= "9") {
          return;
        }

        if (charBeforeMatch === "_") {
          return;
        }

        response.ignoreMatch();
      }

      const NUMBER_RE = /[+-]?((\.\d+)|(\d+)(\.\d*)?)/;

      const GENERAL_MISC_FUNCTION_RE = /[GM]\s*\d+(\.\d+)?/;
      const TOOLS_RE = /T\s*\d+/;
      const SUBROUTINE_RE = /O\s*\d+/;
      const SUBROUTINE_NAMED_RE = /O<.+>/;
      const AXES_RE = /[ABCUVWXYZ]\s*/;
      const PARAMETERS_RE = /[FHIJKPQRS]\s*/;

      const GCODE_CODE = [
        // comments
        hljs.COMMENT(/\(/, /\)/),
        hljs.COMMENT(/;/, /$/),
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.C_NUMBER_MODE,

        // gcodes
        {
          scope: "title.function",
          variants: [
            // G General functions: G0, G5.1, G5.2, ‚Ä¶
            // M Misc functions: M0, M55.6, M199, ‚Ä¶
            {
              match: regex.concat(LETTER_BOUNDARY_RE, GENERAL_MISC_FUNCTION_RE),
            },
            {
              begin: GENERAL_MISC_FUNCTION_RE,
              "on:begin": LETTER_BOUNDARY_CALLBACK,
            },
            // T Tools
            { match: regex.concat(LETTER_BOUNDARY_RE, TOOLS_RE) },
            {
              begin: TOOLS_RE,
              "on:begin": LETTER_BOUNDARY_CALLBACK,
            },
          ],
        },

        {
          scope: "symbol",
          variants: [
            // O Subroutine ID: O100, O110, ‚Ä¶
            { match: regex.concat(LETTER_BOUNDARY_RE, SUBROUTINE_RE) },
            {
              begin: SUBROUTINE_RE,
              "on:begin": LETTER_BOUNDARY_CALLBACK,
            },
            // O Subroutine name: O<some>, ‚Ä¶
            { match: regex.concat(LETTER_BOUNDARY_RE, SUBROUTINE_NAMED_RE) },
            {
              begin: SUBROUTINE_NAMED_RE,
              "on:begin": LETTER_BOUNDARY_CALLBACK,
            },
            // Checksum at end of line: *71, *199, ‚Ä¶
            { match: /\*\s*\d+\s*$/ },
          ],
        },

        {
          scope: "operator", // N Line number: N1, N2, N1020, ‚Ä¶
          match: /^N\s*\d+/,
        },

        {
          scope: "variable",
          match: /-?#\s*\d+/,
        },

        {
          scope: "property", // Physical axes,
          variants: [
            { match: regex.concat(LETTER_BOUNDARY_RE, AXES_RE, NUMBER_RE) },
            {
              begin: regex.concat(AXES_RE, NUMBER_RE),
              "on:begin": LETTER_BOUNDARY_CALLBACK,
            },
          ],
        },

        {
          scope: "params", // Different types of parameters
          variants: [
            {
              match: regex.concat(LETTER_BOUNDARY_RE, PARAMETERS_RE, NUMBER_RE),
            },
            {
              begin: regex.concat(PARAMETERS_RE, NUMBER_RE),
              "on:begin": LETTER_BOUNDARY_CALLBACK,
            },
          ],
        },
      ];

      return {
        name: "G-code (ISO 6983)",
        aliases: ["nc"],
        // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
        // However, most prefer all uppercase and uppercase is customary.
        case_insensitive: true,
        // TODO: post v12 with the use of look-behind this can be enabled
        disableAutodetect: true,
        keywords: GCODE_KEYWORDS,
        contains: GCODE_CODE,
      };
    }

    return gcode;
  })();

  hljs.registerLanguage("gcode", hljsGrammar);
})(); /*! `http` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: HTTP
  Description: HTTP request and response headers with automatic body highlighting
  Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
  Category: protocols, web
  Website: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
  */

    function http(hljs) {
      const regex = hljs.regex;
      const VERSION = "HTTP/([32]|1\\.[01])";
      const HEADER_NAME = /[A-Za-z][A-Za-z0-9-]*/;
      const HEADER = {
        className: "attribute",
        begin: regex.concat("^", HEADER_NAME, "(?=\\:\\s)"),
        starts: {
          contains: [
            {
              className: "punctuation",
              begin: /: /,
              relevance: 0,
              starts: {
                end: "$",
                relevance: 0,
              },
            },
          ],
        },
      };
      const HEADERS_AND_BODY = [
        HEADER,
        {
          begin: "\\n\\n",
          starts: {
            subLanguage: [],
            endsWithParent: true,
          },
        },
      ];

      return {
        name: "HTTP",
        aliases: ["https"],
        illegal: /\S/,
        contains: [
          // response
          {
            begin: "^(?=" + VERSION + " \\d{3})",
            end: /$/,
            contains: [
              {
                className: "meta",
                begin: VERSION,
              },
              {
                className: "number",
                begin: "\\b\\d{3}\\b",
              },
            ],
            starts: {
              end: /\b\B/,
              illegal: /\S/,
              contains: HEADERS_AND_BODY,
            },
          },
          // request
          {
            begin: "(?=^[A-Z]+ (.*?) " + VERSION + "$)",
            end: /$/,
            contains: [
              {
                className: "string",
                begin: " ",
                end: " ",
                excludeBegin: true,
                excludeEnd: true,
              },
              {
                className: "meta",
                begin: VERSION,
              },
              {
                className: "keyword",
                begin: "[A-Z]+",
              },
            ],
            starts: {
              end: /\b\B/,
              illegal: /\S/,
              contains: HEADERS_AND_BODY,
            },
          },
          // to allow headers to work even without a preamble
          hljs.inherit(HEADER, { relevance: 0 }),
        ],
      };
    }

    return http;
  })();

  hljs.registerLanguage("http", hljsGrammar);
})(); /*! `json` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: JSON
  Description: JSON (JavaScript Object Notation) is a lightweight data-interchange format.
  Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
  Website: http://www.json.org
  Category: common, protocols, web
  */

    function json(hljs) {
      const ATTRIBUTE = {
        className: "attr",
        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
        relevance: 1.01,
      };
      const PUNCTUATION = {
        match: /[{}[\],:]/,
        className: "punctuation",
        relevance: 0,
      };
      const LITERALS = ["true", "false", "null"];
      // NOTE: normally we would rely on `keywords` for this but using a mode here allows us
      // - to use the very tight `illegal: \S` rule later to flag any other character
      // - as illegal indicating that despite looking like JSON we do not truly have
      // - JSON and thus improve false-positively greatly since JSON will try and claim
      // - all sorts of JSON looking stuff
      const LITERALS_MODE = {
        scope: "literal",
        beginKeywords: LITERALS.join(" "),
      };

      return {
        name: "JSON",
        aliases: ["jsonc"],
        keywords: {
          literal: LITERALS,
        },
        contains: [
          ATTRIBUTE,
          PUNCTUATION,
          hljs.QUOTE_STRING_MODE,
          LITERALS_MODE,
          hljs.C_NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
        ],
        illegal: "\\S",
      };
    }

    return json;
  })();

  hljs.registerLanguage("json", hljsGrammar);
})(); /*! `markdown` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: Markdown
  Requires: xml.js
  Author: John Crepezzi <john.crepezzi@gmail.com>
  Website: https://daringfireball.net/projects/markdown/
  Category: common, markup
  */

    function markdown(hljs) {
      const regex = hljs.regex;
      const INLINE_HTML = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0,
      };
      const HORIZONTAL_RULE = {
        begin: "^[-\\*]{3,}",
        end: "$",
      };
      const CODE = {
        className: "code",
        variants: [
          // TODO: fix to allow these to work with sublanguage also
          { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
          { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
          // needed to allow markdown as a sublanguage to work
          {
            begin: "```",
            end: "```+[ ]*$",
          },
          {
            begin: "~~~",
            end: "~~~+[ ]*$",
          },
          { begin: "`.+?`" },
          {
            begin: "(?=^( {4}|\\t))",
            // use contains to gobble up multiple lines to allow the block to be whatever size
            // but only have a single open/close tag vs one per line
            contains: [
              {
                begin: "^( {4}|\\t)",
                end: "(\\n)$",
              },
            ],
            relevance: 0,
          },
        ],
      };
      const LIST = {
        className: "bullet",
        begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: true,
      };
      const LINK_REFERENCE = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: true,
        contains: [
          {
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: true,
            excludeEnd: true,
          },
          {
            className: "link",
            begin: /:\s*/,
            end: /$/,
            excludeBegin: true,
          },
        ],
      };
      const URL_SCHEME = /[A-Za-z][A-Za-z0-9+.-]*/;
      const LINK = {
        variants: [
          // too much like nested array access in so many languages
          // to have any real relevance
          {
            begin: /\[.+?\]\[.*?\]/,
            relevance: 0,
          },
          // popular internet URLs
          {
            begin:
              /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
            relevance: 2,
          },
          {
            begin: regex.concat(/\[.+?\]\(/, URL_SCHEME, /:\/\/.*?\)/),
            relevance: 2,
          },
          // relative urls
          {
            begin: /\[.+?\]\([./?&#].*?\)/,
            relevance: 1,
          },
          // whatever else, lower relevance (might not be a link at all)
          {
            begin: /\[.*?\]\(.*?\)/,
            relevance: 0,
          },
        ],
        returnBegin: true,
        contains: [
          {
            // empty strings for alt or link text
            match: /\[(?=\])/,
          },
          {
            className: "string",
            relevance: 0,
            begin: "\\[",
            end: "\\]",
            excludeBegin: true,
            returnEnd: true,
          },
          {
            className: "link",
            relevance: 0,
            begin: "\\]\\(",
            end: "\\)",
            excludeBegin: true,
            excludeEnd: true,
          },
          {
            className: "symbol",
            relevance: 0,
            begin: "\\]\\[",
            end: "\\]",
            excludeBegin: true,
            excludeEnd: true,
          },
        ],
      };
      const BOLD = {
        className: "strong",
        contains: [], // defined later
        variants: [
          {
            begin: /_{2}(?!\s)/,
            end: /_{2}/,
          },
          {
            begin: /\*{2}(?!\s)/,
            end: /\*{2}/,
          },
        ],
      };
      const ITALIC = {
        className: "emphasis",
        contains: [], // defined later
        variants: [
          {
            begin: /\*(?![*\s])/,
            end: /\*/,
          },
          {
            begin: /_(?![_\s])/,
            end: /_/,
            relevance: 0,
          },
        ],
      };

      // 3 level deep nesting is not allowed because it would create confusion
      // in cases like `***testing***` because where we don't know if the last
      // `***` is starting a new bold/italic or finishing the last one
      const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, { contains: [] });
      const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, { contains: [] });
      BOLD.contains.push(ITALIC_WITHOUT_BOLD);
      ITALIC.contains.push(BOLD_WITHOUT_ITALIC);

      let CONTAINABLE = [INLINE_HTML, LINK];

      [BOLD, ITALIC, BOLD_WITHOUT_ITALIC, ITALIC_WITHOUT_BOLD].forEach((m) => {
        m.contains = m.contains.concat(CONTAINABLE);
      });

      CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);

      const HEADER = {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: CONTAINABLE,
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: CONTAINABLE,
              },
            ],
          },
        ],
      };

      const BLOCKQUOTE = {
        className: "quote",
        begin: "^>\\s+",
        contains: CONTAINABLE,
        end: "$",
      };

      const ENTITY = {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/,
      };

      return {
        name: "Markdown",
        aliases: ["md", "mkdown", "mkd"],
        contains: [
          HEADER,
          INLINE_HTML,
          LIST,
          BOLD,
          ITALIC,
          BLOCKQUOTE,
          CODE,
          HORIZONTAL_RULE,
          LINK,
          LINK_REFERENCE,
          ENTITY,
        ],
      };
    }

    return markdown;
  })();

  hljs.registerLanguage("markdown", hljsGrammar);
})(); /*! `openscad` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: OpenSCAD
  Author: Dan Panzarella <alsoelp@gmail.com>
  Description: OpenSCAD is a language for the 3D CAD modeling software of the same name.
  Website: https://www.openscad.org
  Category: scientific
  */

    function openscad(hljs) {
      const SPECIAL_VARS = {
        className: "keyword",
        begin: "\\$(f[asn]|t|vp[rtd]|children)",
      };
      const LITERALS = {
        className: "literal",
        begin: "false|true|PI|undef",
      };
      const NUMBERS = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?", // adds 1e5, 1e-10
        relevance: 0,
      };
      const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, { illegal: null });
      const PREPRO = {
        className: "meta",
        keywords: { keyword: "include use" },
        begin: "include|use <",
        end: ">",
      };
      const PARAMS = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: ["self", NUMBERS, STRING, SPECIAL_VARS, LITERALS],
      };
      const MODIFIERS = {
        begin: "[*!#%]",
        relevance: 0,
      };
      const FUNCTIONS = {
        className: "function",
        beginKeywords: "module function",
        end: /=|\{/,
        contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE],
      };

      return {
        name: "OpenSCAD",
        aliases: ["scad"],
        keywords: {
          keyword:
            "function module include use for intersection_for if else \\%",
          literal: "false true PI undef",
          built_in:
            "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign",
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBERS,
          PREPRO,
          STRING,
          SPECIAL_VARS,
          MODIFIERS,
          FUNCTIONS,
        ],
      };
    }

    return openscad;
  })();

  hljs.registerLanguage("openscad", hljsGrammar);
})(); /*! `python` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: Python
  Description: Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.
  Website: https://www.python.org
  Category: common
  */

    function python(hljs) {
      const regex = hljs.regex;
      const IDENT_RE = /[\p{XID_Start}_]\p{XID_Continue}*/u;
      const RESERVED_WORDS = [
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "case",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "match",
        "nonlocal|10",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield",
      ];

      const BUILT_INS = [
        "import",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip",
      ];

      const LITERALS = [
        "debug",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True",
      ];

      // https://docs.python.org/3/library/typing.html
      // TODO: Could these be supplemented by a CamelCase matcher in certain
      // contexts, leaving these remaining only for relevance hinting?
      const TYPES = [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union",
      ];

      const KEYWORDS = {
        $pattern: /[A-Za-z]\w+|\w+/,
        keyword: RESERVED_WORDS,
        built_in: BUILT_INS,
        literal: LITERALS,
        type: TYPES,
      };

      const PROMPT = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /,
      };

      const SUBST = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS,
        illegal: /#/,
      };

      const LITERAL_BRACKET = {
        begin: /\{\{/,
        relevance: 0,
      };

      const STRING = {
        className: "string",
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
            end: /'''/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
            relevance: 10,
          },
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
            end: /"""/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
            relevance: 10,
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
            end: /'''/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
            end: /"""/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST],
          },
          {
            begin: /([uU]|[rR])'/,
            end: /'/,
            relevance: 10,
          },
          {
            begin: /([uU]|[rR])"/,
            end: /"/,
            relevance: 10,
          },
          {
            begin: /([bB]|[bB][rR]|[rR][bB])'/,
            end: /'/,
          },
          {
            begin: /([bB]|[bB][rR]|[rR][bB])"/,
            end: /"/,
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'/,
            end: /'/,
            contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"/,
            end: /"/,
            contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST],
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
        ],
      };

      // https://docs.python.org/3.9/reference/lexical_analysis.html#numeric-literals
      const digitpart = "[0-9](_?[0-9])*";
      const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
      // Whitespace after a number (or any lexical token) is needed only if its absence
      // would change the tokenization
      // https://docs.python.org/3.9/reference/lexical_analysis.html#whitespace-between-tokens
      // We deviate slightly, requiring a word boundary or a keyword
      // to avoid accidentally recognizing *prefixes* (e.g., `0` in `0x41` or `08` or `01`)
      const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
      const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
          // exponentfloat, pointfloat
          // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
          // optionally imaginary
          // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
          // Note: no leading \b because floats can start with a decimal point
          // and we don't want to mishandle e.g. `fn(.5)`,
          // no trailing \b for pointfloat because it can end with a decimal point
          // and we don't want to mishandle e.g. `0..hex()`; this should be safe
          // because both MUST contain a decimal point and so cannot be confused with
          // the interior part of an identifier
          {
            begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`,
          },
          {
            begin: `(${pointfloat})[jJ]?`,
          },

          // decinteger, bininteger, octinteger, hexinteger
          // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
          // optionally "long" in Python 2
          // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
          // decinteger is optionally imaginary
          // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
          {
            begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`,
          },
          {
            begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`,
          },
          {
            begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`,
          },
          {
            begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`,
          },

          // imagnumber (digitpart-based)
          // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
          {
            begin: `\\b(${digitpart})[jJ](?=${lookahead})`,
          },
        ],
      };
      const COMMENT_TYPE = {
        className: "comment",
        begin: regex.lookahead(/# type:/),
        end: /$/,
        keywords: KEYWORDS,
        contains: [
          {
            // prevent keywords from coloring `type`
            begin: /# type:/,
          },
          // comment within a datatype comment includes no keywords
          {
            begin: /#/,
            end: /\b\B/,
            endsWithParent: true,
          },
        ],
      };
      const PARAMS = {
        className: "params",
        variants: [
          // Exclude params in functions without params
          {
            className: "",
            begin: /\(\s*\)/,
            skip: true,
          },
          {
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: ["self", PROMPT, NUMBER, STRING, hljs.HASH_COMMENT_MODE],
          },
        ],
      };
      SUBST.contains = [STRING, NUMBER, PROMPT];

      return {
        name: "Python",
        aliases: ["py", "gyp", "ipython"],
        unicodeRegex: true,
        keywords: KEYWORDS,
        illegal: /(<\/|\?)|=>/,
        contains: [
          PROMPT,
          NUMBER,
          {
            // very common convention
            scope: "variable.language",
            match: /\bself\b/,
          },
          {
            // eat "if" prior to string so that it won't accidentally be
            // labeled as an f-string
            beginKeywords: "if",
            relevance: 0,
          },
          { match: /\bor\b/, scope: "keyword" },
          STRING,
          COMMENT_TYPE,
          hljs.HASH_COMMENT_MODE,
          {
            match: [/\bdef/, /\s+/, IDENT_RE],
            scope: {
              1: "keyword",
              3: "title.function",
            },
            contains: [PARAMS],
          },
          {
            variants: [
              {
                match: [
                  /\bclass/,
                  /\s+/,
                  IDENT_RE,
                  /\s*/,
                  /\(\s*/,
                  IDENT_RE,
                  /\s*\)/,
                ],
              },
              {
                match: [/\bclass/, /\s+/, IDENT_RE],
              },
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              6: "title.class.inherited",
            },
          },
          {
            className: "meta",
            begin: /^[\t ]*@/,
            end: /(?=#)|$/,
            contains: [NUMBER, PARAMS, STRING],
          },
        ],
      };
    }

    return python;
  })();

  hljs.registerLanguage("python", hljsGrammar);
})(); /*! `shell` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: Shell Session
  Requires: bash.js
  Author: TSUYUSATO Kitsune <make.just.on@gmail.com>
  Category: common
  Audit: 2020
  */

    /** @type LanguageFn */
    function shell(hljs) {
      return {
        name: "Shell Session",
        aliases: ["console", "shellsession"],
        contains: [
          {
            className: "meta.prompt",
            // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
            // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
            // echo /path/to/home > t.exe
            begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
            starts: {
              end: /[^\\](?=\s*$)/,
              subLanguage: "bash",
            },
          },
        ],
      };
    }

    return shell;
  })();

  hljs.registerLanguage("shell", hljsGrammar);
})(); /*! `yaml` grammar compiled for Highlight.js 11.11.1 */
(function () {
  var hljsGrammar = (function () {
    "use strict";

    /*
  Language: YAML
  Description: Yet Another Markdown Language
  Author: Stefan Wienert <stwienert@gmail.com>
  Contributors: Carl Baxter <carl@cbax.tech>
  Requires: ruby.js
  Website: https://yaml.org
  Category: common, config
  */
    function yaml(hljs) {
      const LITERALS = "true false yes no null";

      // YAML spec allows non-reserved URI characters in tags.
      const URI_CHARACTERS = "[\\w#;/?:@&=+$,.~*'()[\\]]+";

      // Define keys as starting with a word character
      // ...containing word chars, spaces, colons, forward-slashes, hyphens and periods
      // ...and ending with a colon followed immediately by a space, tab or newline.
      // The YAML spec allows for much more than this, but this covers most use-cases.
      const KEY = {
        className: "attr",
        variants: [
          // added brackets support and special char support
          { begin: /[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/ },
          {
            // double quoted keys - with brackets and special char support
            begin: /"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/,
          },
          {
            // single quoted keys - with brackets and special char support
            begin: /'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/,
          },
        ],
      };

      const TEMPLATE_VARIABLES = {
        className: "template-variable",
        variants: [
          {
            // jinja templates Ansible
            begin: /\{\{/,
            end: /\}\}/,
          },
          {
            // Ruby i18n
            begin: /%\{/,
            end: /\}/,
          },
        ],
      };

      const SINGLE_QUOTE_STRING = {
        className: "string",
        relevance: 0,
        begin: /'/,
        end: /'/,
        contains: [
          {
            match: /''/,
            scope: "char.escape",
            relevance: 0,
          },
        ],
      };

      const STRING = {
        className: "string",
        relevance: 0,
        variants: [
          {
            begin: /"/,
            end: /"/,
          },
          { begin: /\S+/ },
        ],
        contains: [hljs.BACKSLASH_ESCAPE, TEMPLATE_VARIABLES],
      };

      // Strings inside of value containers (objects) can't contain braces,
      // brackets, or commas
      const CONTAINER_STRING = hljs.inherit(STRING, {
        variants: [
          {
            begin: /'/,
            end: /'/,
            contains: [
              {
                begin: /''/,
                relevance: 0,
              },
            ],
          },
          {
            begin: /"/,
            end: /"/,
          },
          { begin: /[^\s,{}[\]]+/ },
        ],
      });

      const DATE_RE = "[0-9]{4}(-[0-9][0-9]){0,2}";
      const TIME_RE = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?";
      const FRACTION_RE = "(\\.[0-9]*)?";
      const ZONE_RE = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?";
      const TIMESTAMP = {
        className: "number",
        begin: "\\b" + DATE_RE + TIME_RE + FRACTION_RE + ZONE_RE + "\\b",
      };

      const VALUE_CONTAINER = {
        end: ",",
        endsWithParent: true,
        excludeEnd: true,
        keywords: LITERALS,
        relevance: 0,
      };
      const OBJECT = {
        begin: /\{/,
        end: /\}/,
        contains: [VALUE_CONTAINER],
        illegal: "\\n",
        relevance: 0,
      };
      const ARRAY = {
        begin: "\\[",
        end: "\\]",
        contains: [VALUE_CONTAINER],
        illegal: "\\n",
        relevance: 0,
      };

      const MODES = [
        KEY,
        {
          className: "meta",
          begin: "^---\\s*$",
          relevance: 10,
        },
        {
          // multi line string
          // Blocks start with a | or > followed by a newline
          //
          // Indentation of subsequent lines must be the same to
          // be considered part of the block
          className: "string",
          begin:
            "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
        },
        {
          // Ruby/Rails erb
          begin: "<%[%=-]?",
          end: "[%-]?%>",
          subLanguage: "ruby",
          excludeBegin: true,
          excludeEnd: true,
          relevance: 0,
        },
        {
          // named tags
          className: "type",
          begin: "!\\w+!" + URI_CHARACTERS,
        },
        // https://yaml.org/spec/1.2/spec.html#id2784064
        {
          // verbatim tags
          className: "type",
          begin: "!<" + URI_CHARACTERS + ">",
        },
        {
          // primary tags
          className: "type",
          begin: "!" + URI_CHARACTERS,
        },
        {
          // secondary tags
          className: "type",
          begin: "!!" + URI_CHARACTERS,
        },
        {
          // fragment id &ref
          className: "meta",
          begin: "&" + hljs.UNDERSCORE_IDENT_RE + "$",
        },
        {
          // fragment reference *ref
          className: "meta",
          begin: "\\*" + hljs.UNDERSCORE_IDENT_RE + "$",
        },
        {
          // array listing
          className: "bullet",
          // TODO: remove |$ hack when we have proper look-ahead support
          begin: "-(?=[ ]|$)",
          relevance: 0,
        },
        hljs.HASH_COMMENT_MODE,
        {
          beginKeywords: LITERALS,
          keywords: { literal: LITERALS },
        },
        TIMESTAMP,
        // numbers are any valid C-style number that
        // sit isolated from other words
        {
          className: "number",
          begin: hljs.C_NUMBER_RE + "\\b",
          relevance: 0,
        },
        OBJECT,
        ARRAY,
        SINGLE_QUOTE_STRING,
        STRING,
      ];

      const VALUE_MODES = [...MODES];
      VALUE_MODES.pop();
      VALUE_MODES.push(CONTAINER_STRING);
      VALUE_CONTAINER.contains = VALUE_MODES;

      return {
        name: "YAML",
        case_insensitive: true,
        aliases: ["yml"],
        contains: MODES,
      };
    }

    return yaml;
  })();

  hljs.registerLanguage("yaml", hljsGrammar);
})();
