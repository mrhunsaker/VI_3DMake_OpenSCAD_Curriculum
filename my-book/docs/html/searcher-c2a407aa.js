# Git Bash Tutorial {#gitbash_foundation_gitbash_tutorial-gitbash_tutorial}

Estimated time: 30-45 minutes

Learning Objectives
- Launch Git Bash and identify the prompt
- Understand and use basic path notation (`~`, `./`, `../`)
- Use `pwd`, `ls -1`, and `cd` to navigate the filesystem
- Open files in an external editor and run simple commands

Materials
- A computer with Git Bash installed (install via [https://git-scm.com/](https://git-scm.com/))
- Access to a text editor (Notepad, VS Code)

## Pre-Requisite Knowledge
- Typing and basic text-editing skills
- Familiarity with file/folder concepts and basic OS navigation
- Basic screen-reading familiarity (if applicable)

## What is Git Bash?

Git Bash is a free terminal application for Windows that provides a Bash (Unix shell) environment. It is installed as part of Git for Windows. When you open Git Bash, you can use Unix commands like `ls`, `cat`, `grep`, and `echo` - the same commands used on Linux and macOS - right on your Windows computer.

Git Bash is useful for:
- Running CLI programs (like OpenSCAD, slicers, or 3DMake)
- Navigating the filesystem with keyboard-only commands
- Automating repetitive tasks with scripts
- Accessibility: works cleanly with NVDA, JAWS, and other screen readers

## What We'll Do and Why

You'll use Git Bash to run CLI programs, navigate the filesystem, and manipulate files - tasks that are especially efficient when using a keyboard or a screen reader.

## Quick Tutorial & Core Concepts

### Paths and Navigation

* `~` - home directory (e.g., `/c/Users/YourName`)
* `.` - current directory
* `..` - parent directory
* `./` - current directory shortcut (used to run scripts: `./script.sh`)
* `../` - parent directory shortcut
* Use Tab to autocomplete files and folders

Git Bash uses forward slashes (`/`) for paths, just like Linux. Your Windows `C:\Users\YourName` folder is accessible as `/c/Users/YourName` or simply `~`.

### Useful Commands (Examples)

```bash
pwd                # show current directory
ls -1              # list files, one per line (screen-reader friendly)
cd path/to/dir     # change directory
whoami             # current user
```

### Wildcards

* `*` matches zero or more characters
* `?` matches a single character

Use `ls *.scad` to filter by extension, for example.

## Common Operations

### File and Folder Manipulation

```bash
mkdir my-folder          # create folder
mkdir -p a/b/c           # create nested folders at once
cp -r src dest           # copy (use -r for directories)
mv oldname newname       # rename or move
rm file                  # remove file
rm -r folder             # remove folder and contents
touch filename.txt       # create new empty file
```

### Input, Output, and Piping

```bash
echo 'hello' | clip      # copy to clipboard
command > output.txt     # redirect output to file
command >> output.txt    # append output to file
command > /dev/null      # discard/suppress output
```

Use `|` to pipe output and `>` to redirect into files.

### Editing and Running Programs

```bash
notepad file.txt         # open in Notepad (Windows)
code file.txt            # open in VS Code (if in PATH)
./script.sh              # run a script in the current directory
chmod +x script.sh       # make a script executable
```

## Screen-Reader Friendly Tips

- Prefer `ls -1` for name-only, one-per-line output.
- Filter lists with `grep`: `ls -1 ~/Documents | grep "\.scad$"` (files only ending in .scad).
- Redirect very long outputs to a file and open it in an editor.

## Error Handling and Control

- Abort a running command: `Ctrl+C`
- View history: Up/Down arrows or `history`
- Clear screen: `clear` (or `Ctrl+L`)
- If an error is long, read the first few lines for the gist and copy short snippets into a file to examine.

## Environment Variables & PATH

Environment variables configure your session. `PATH` tells the shell where to find executables.

```bash
echo $PATH
echo $HOME
echo $USER
```

To add a directory to PATH for the current session:
```bash
export PATH="$PATH:/path/to/my/tools"
```

To make it permanent, add that line to `~/.bashrc`.

## Running CLI Applications and Archives

To extract ZIP archives in Git Bash:

```bash
# Unzip a file
unzip file.zip -d destinationfolder

# Or use Windows' built-in tool (from Git Bash):
powershell.exe Expand-Archive -Path file.zip -DestinationPath folder
```

## Aliases and Cross-Platform Notes

Git Bash provides Unix commands that work identically on Linux and macOS. This means your Git Bash skills transfer directly if you ever work on a Mac or Linux system.

Useful aliases to add to `~/.bashrc`:
```bash
alias ll='ls -la'
alias la='ls -1a'
alias ..='cd ..'
alias ...='cd ../..'
```

## Step-by-step Tasks (Hands-On)
1. Open Git Bash; listen for the prompt and current path.
2. Run `pwd` to confirm your location.
3. Run `ls -1` in your home directory and note the output.
4. Practice `cd Documents`, `cd ../`, and `cd ~` to move between folders.
5. Create and open a file: `touch example.txt && notepad example.txt` (or `code example.txt`).

## Checkpoints
- After step 3 you should be able to state your current directory.
- After step 5 you should be able to create and open a text file from Git Bash.

## Quick Quiz (10 questions)
1. What command prints your current directory?
2. What does `~` represent?
3. How do you list only names, one per line?
4. How do you go up one directory level?
5. How would you open `notes.txt` in Notepad from Git Bash?
6. True or False: The pipe operator `|` sends output to a file.
7. Explain why running a script requires `chmod +x` first.
8. What is the difference between running a script with `./script.sh` versus `bash script.sh`?
9. Describe how you would handle a very long command output when using a screen reader.
10. What does the `PATH` environment variable do, and why is it important when running programs like OpenSCAD?

## Extension Problems
1. Create a folder `OpenSCADProjects` in Documents and verify its contents.
2. Create three files named `a.scad`, `b.scad`, `c.scad` and list them with a wildcard.
3. Save `ls -1 ~/Documents` output to `doclist.txt` and open it.
4. Try tab-completion in a deeply nested folder and note behavior.
5. Capture `pwd` output into a file and open it: `pwd > cwd.txt && notepad cwd.txt`.
6. Build an automated setup script that creates a complete project directory structure, initializes placeholder files, and generates a README.
7. Create a Git Bash cheat sheet for your most-used commands; organize by category (navigation, files, scripting, troubleshooting).
8. Write a non-visual tutorial for Git Bash basics; use audio descriptions and keyboard-only navigation as the primary learning method.
9. Develop a workflow automation script: combines multiple Git Bash concepts (folders, aliases, piping) to solve a real 3D printing task.
10. Create a Git Bash proficiency self-assessment: list all concepts covered, provide test commands for each, and reflect on what you learned.

## References
- Git for Windows. (2024). *Git Bash*. [https://gitforwindows.org/](https://gitforwindows.org/)
- GNU. (2024). *Bash reference manual*. [https://www.gnu.org/software/bash/manual/bash.html](https://www.gnu.org/software/bash/manual/bash.html)
- The Linux Documentation Project. (2024). *Bash Beginners Guide*. [https://tldp.org/LDP/Bash-Beginners-Guide/html/](https://tldp.org/LDP/Bash-Beginners-Guide/html/)

## Helpful Resources
- [Git for Windows](https://gitforwindows.org/)
- [Bash Reference Manual (GNU)](https://www.gnu.org/software/bash/manual/bash.html)
- [Bash Beginners Guide](https://tldp.org/LDP/Bash-Beginners-Guide/html/)
- [GNU Coreutils](https://www.gnu.org/software/coreutils/manual/)


Other Screen Readers

Dolphin SuperNova (commercial) and Windows Narrator (built-in) are also supported; the workflows and recommendations in this document apply to them. See [https://example.com](https://example.com) and [https://example.com](https://example.com) for vendor documentation.
<!--pagebreak-->
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          m/> around searchterms
        const teaser_split = [];
        index = weighted[max_sum_window_index][2];
        for (let i = max_sum_window_index; i < max_sum_window_index + window_size; i++) {
            const word = weighted[i];
            if (index < word[2]) {
                // missing text from index to start of `word`
                teaser_split.push(body.substring(index, word[2]));
                index = word[2];
            }
            if (word[1] === searchterm_weight) {
                teaser_split.push('<em>');
            }
            index = word[2] + word[0].length;
            teaser_split.push(body.substring(word[2], index));
            if (word[1] === searchterm_weight) {
                teaser_split.push('</em>');
            }
        }

        return teaser_split.join('');
    }

    function init(config) {
        results_options = config.results_options;
        search_options = config.search_options;
        doc_urls = config.doc_urls;
        searchindex = elasticlunr.Index.load(config.index);

        searchbar_outer.classList.remove('searching');

        searchbar.focus();

        const searchterm = searchbar.value.trim();
        if (searchterm !== '') {
            searchbar.classList.add('active');
            doSearch(searchterm);
        }
    }

    function initSearchInteractions(config) {
        // Set up events
        searchicon.addEventListener('click', () => {
            searchIconClickHandler();
        }, false);
        searchbar.addEventListener('keyup', () => {
            searchbarKeyUpHandler();
        }, false);
        document.addEventListener('keydown', e => {
            globalKeyHandler(e);
        }, false);
        // If the user uses the browser buttons, do the same as if a reload happened
        window.onpopstate = () => {
            doSearchOrMarkFromUrl();
        };
        // Suppress "submit" events so the page doesn't reload when the user presses Enter
        document.addEventListener('submit', e => {
            e.preventDefault();
        }, false);

        // If reloaded, do the search or mark again, depending on the current url parameters
        doSearchOrMarkFromUrl();

        // Exported functions
        config.hasFocus = hasFocus;
    }

    initSearchInteractions(window.search);

    function unfocusSearchbar() {
        // hacky, but just focusing a div only works once
        const tmp = document.createElement('input');
        tmp.setAttribute('style', 'position: absolute; opacity: 0;');
        searchicon.appendChild(tmp);
        tmp.focus();
        tmp.remove();
    }

    // On reload or browser history backwards/forwards events, parse the url and do search or mark
    function doSearchOrMarkFromUrl() {
        // Check current URL for search request
        const url = parseURL(window.location.href);
        if (Object.prototype.hasOwnProperty.call(url.params, URL_SEARCH_PARAM)
            && url.params[URL_SEARCH_PARAM] !== '') {
            showSearch(true);
            searchbar.value = decodeURIComponent(
                (url.params[URL_SEARCH_PARAM] + '').replace(/\+/g, '%20'));
            searchbarKeyUpHandler(); // -> doSearch()
        } else {
            showSearch(false);
        }

        if (Object.prototype.hasOwnProperty.call(url.params, URL_MARK_PARAM)) {
            const words = decodeURIComponent(url.params[URL_MARK_PARAM]).split(' ');
            marker.mark(words, {
                exclude: mark_exclude,
            });

            const markers = document.querySelectorAll('mark');
            const hide = () => {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].classList.add('fade-out');
                    window.setTimeout(() => {
                        marker.unmark();
                    }, 300);
                }
            };

            for (let i = 0; i < markers.length; i++) {
                markers[i].addEventListener('click', hide);
            }
        }
    }

    // Eventhandler for keyevents on `document`
    function globalKeyHandler(e) {
        if (e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            e.shiftKey ||
            e.target.type === 'textarea' ||
            e.target.type === 'text' ||
            !hasFocus() && /^(?:input|select|textarea)$/i.test(e.target.nodeName)
        ) {
            return;
        }

        if (e.key === 'Escape') {
            e.preventDefault();
            searchbar.classList.remove('active');
            setSearchUrlParameters('',
                searchbar.value.trim() !== '' ? 'push' : 'replace');
            if (hasFocus()) {
                unfocusSearchbar();
            }
            showSearch(false);
            marker.unmark();
        } else if (!hasFocus() && (e.key === 's' || e.key === '/')) {
            e.preventDefault();
            showSearch(true);
            window.scrollTo(0, 0);
            searchbar.select();
        } else if (hasFocus() && (e.key === 'ArrowDown'
                               || e.key === 'Enter')) {
            e.preventDefault();
            const first = searchresults.firstElementChild;
            if (first !== null) {
                unfocusSearchbar();
                first.classList.add('focus');
                if (e.key === 'Enter') {
                    window.location.assign(first.querySelector('a'));
                }
            }
        } else if (!hasFocus() && (e.key === 'ArrowDown'
                                || e.key === 'ArrowUp'
                                || e.key === 'Enter')) {
            // not `:focus` because browser does annoying scrolling
            const focused = searchresults.querySelector('li.focus');
            if (!focused) {
                return;
            }
            e.preventDefault();
            if (e.key === 'ArrowDown') {
                const next = focused.nextElementSibling;
                if (next) {
                    focused.classList.remove('focus');
                    next.classList.add('focus');
                }
            } else if (e.key === 'ArrowUp') {
                focused.classList.remove('focus');
                const prev = focused.previousElementSibling;
                if (prev) {
                    prev.classList.add('focus');
                } else {
                    searchbar.select();
                }
            } else { // Enter
                window.location.assign(focused.querySelector('a'));
            }
        }
    }

    function loadSearchScript(url, id) {
        if (document.getElementById(id)) {
            return;
        }
        searchbar_outer.classList.add('searching');

        const script = document.createElement('script');
        script.src = url;
        script.id = id;
        script.onload = () => init(window.search);
        script.onerror = error => {
            console.error(`Failed to load \`${url}\`: ${error}`);
        };
        document.head.append(script);
    }

    function showSearch(yes) {
        if (yes) {
            loadSearchScript(
                window.path_to_searchindex_js ||
                path_to_root + 'searchindex-bc1ab470.js',
                'mdbook-search-index');
            search_wrap.classList.remove('hidden');
            searchicon.setAttribute('aria-expanded', 'true');
        } else {
            search_wrap.classList.add('hidden');
            searchicon.setAttribute('aria-expanded', 'false');
            const results = searchresults.children;
            for (let i = 0; i < results.length; i++) {
                results[i].classList.remove('focus');
            }
        }
    }

    function showResults(yes) {
        if (yes) {
            searchresults_outer.classList.remove('hidden');
        } else {
            searchresults_outer.classList.add('hidden');
        }
    }

    // Eventhandler for search icon
    function searchIconClickHandler() {
        if (search_wrap.classList.contains('hidden')) {
            showSearch(true);
            window.scrollTo(0, 0);
            searchbar.select();
        } else {
            showSearch(false);
        }
    }

    // Eventhandler for keyevents while the searchbar is focused
    function searchbarKeyUpHandler() {
        const searchterm = searchbar.value.trim();
        if (searchterm !== '') {
            searchbar.classList.add('active');
            doSearch(searchterm);
        } else {
            searchbar.classList.remove('active');
            showResults(false);
            removeChildren(searchresults);
        }

        setSearchUrlParameters(searchterm, 'push_if_new_search_else_replace');

        // Remove marks
        marker.unmark();
    }

    // Update current url with ?URL_SEARCH_PARAM= parameter, remove ?URL_MARK_PARAM and
    // `#heading-anchor`. `action` can be one of "push", "replace",
    // "push_if_new_search_else_replace" and replaces or pushes a new browser history item.
    // "push_if_new_search_else_replace" pushes if there is no `?URL_SEARCH_PARAM=abc` yet.
    function setSearchUrlParameters(searchterm, action) {
        const url = parseURL(window.location.href);
        const first_search = !Object.prototype.hasOwnProperty.call(url.params, URL_SEARCH_PARAM);

        if (searchterm !== '' || action === 'push_if_new_search_else_replace') {
            url.params[URL_SEARCH_PARAM] = searchterm;
            delete url.params[URL_MARK_PARAM];
            url.hash = '';
        } else {
            delete url.params[URL_MARK_PARAM];
            delete url.params[URL_SEARCH_PARAM];
        }
        // A new search will also add a new history item, so the user can go back
        // to the page prior to searching. A updated search term will only replace
        // the url.
        if (action === 'push' || action === 'push_if_new_search_else_replace' && first_search ) {
            history.pushState({}, document.title, renderURL(url));
        } else if (action === 'replace' ||
            action === 'push_if_new_search_else_replace' &&
            !first_search
        ) {
            history.replaceState({}, document.title, renderURL(url));
        }
    }

    function doSearch(searchterm) {
        // Don't search the same twice
        if (current_searchterm === searchterm) {
            return;
        }
        searchbar_outer.classList.add('searching');
        if (searchindex === null) {
            return;
        }

        current_searchterm = searchterm;

        // Do the actual search
        const results = searchindex.search(searchterm, search_options);
        const resultcount = Math.min(results.length, results_options.limit_results);

        // Display search metrics
        searchresults_header.innerText = formatSearchMetric(resultcount, searchterm);

        // Clear and insert results
        const searchterms = searchterm.split(' ');
        removeChildren(searchresults);
        for (let i = 0; i < resultcount ; i++) {
            const resultElem = document.createElement('li');
            resultElem.innerHTML = formatSearchResult(results[i], searchterms);
            searchresults.appendChild(resultElem);
        }

        // Display results
        showResults(true);
        searchbar_outer.classList.remove('searching');
    }

    // Exported functions
    search.hasFocus = hasFocus;
})(window.search);
