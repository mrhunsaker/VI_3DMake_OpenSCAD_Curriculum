#!/usr/bin/env python3
"""Wrap listed index candidate terms in my-book/src markdown files with TERM.

Creates .bak backups for modified files. Skips code blocks, inline code, and
already-wrapped `...` spans.
"""
import argparse
import re
from pathlib import Path

TERMS = [
"you","file","Design","design","print","OpenSCAD","command","PowerShell",
"Screen","create","Bash","output","files","code","reader","Windows","test",
"ScreenReader","PATH","module","Module","parametric","text","Model","commands",
"3DMake","accessibility","build","one","script","printing","Git","git","each",
"using","NVDA","cube","material","quality","run","time","first","write","can",
"translate","JAWS","printer","part","height","reference","before","STL","filament", 
"List","work","support","parameters","navigation","name","variables","specific",
"Slicer","into","bed","Bed","layer","error","parameter","Preview","between", "GitHub","shell","Shell","common","Common","workflow","copy","difference","Nozzle", "scripts","Any","new","environment","geometry","braille",
]


def placeholders_for_spans(text, pattern, tag):
    """Replace spans matching pattern with placeholders and return list of originals."""
    originals = []

    def repl(m):
        originals.append(m.group(0))
        return f"__{tag}_{len(originals)-1}__"

    new = re.sub(pattern, repl, text, flags=re.MULTILINE | re.DOTALL)
    return new, originals


def restore_placeholders(text, originals, tag):
    for i, orig in enumerate(originals):
        text = text.replace(f"__{tag}_{i}__", orig)
    return text


def placeholders_for_existing_index_entries(text):
    """Placeholder existing index entries to keep reruns idempotent.

    Supports both token-only entries (`{{i:key}}`) and token+visible-text
    entries (`{{i:key}}key`).
    """
    originals = []
    parts = []
    last = 0
    token_pattern = re.compile(r"\{\{i:\s*([^}]+?)\s*\}\}", re.IGNORECASE)

    for m in token_pattern.finditer(text):
        start, end = m.span()
        key = m.group(1).strip()
        tail_end = end

        # If entry is in token+visible form, protect both pieces.
        if key:
            following = text[end:]
            key_match = re.match(rf"{re.escape(key)}(?!\w)", following, re.IGNORECASE)
            if key_match:
                tail_end = end + key_match.end()

        parts.append(text[last:start])
        originals.append(text[start:tail_end])
        parts.append(f"__WRAPPED_{len(originals)-1}__")
        last = tail_end

    parts.append(text[last:])
    return "".join(parts), originals


def process_file(path, terms, dry_run=False):
    text = path.read_text(encoding="utf-8")
    original = text
    replacements = 0

    # Remove code blocks (``` ... ```) and store them
    text, codeblocks = placeholders_for_spans(text, r"^```.*?^```", "CODEBLOCK")

    # Remove existing index entries to avoid double-wrapping.
    text, wrapped = placeholders_for_existing_index_entries(text)

    # Remove inline code spans `...`
    text, inline = placeholders_for_spans(text, r"`[^`]*?`", "INLINE")

    # Sort terms by length desc to avoid partial replacements (e.g., 'Bed' before 'bed')
    terms_sorted = sorted(terms, key=lambda s: -len(s))

    for term in terms_sorted:
        # Escape and replace only whole-word occurrences or exact phrase matches.
        # Use word boundaries where possible; for phrases with spaces we'll drop \b for internal boundaries.
        if " " in term:
            pattern = r"(?<!\{\{i:)(?<!\w)" + re.escape(term) + r"(?!\w)"
        else:
            pattern = r"(?<!\{\{i:})\b" + re.escape(term) + r"\b"

        text, count = re.subn(pattern, lambda m, term=term: f"{{{{i:{term}}}}}", text)
        replacements += count

    # Restore placeholders
    text = restore_placeholders(text, inline, "INLINE")
    text = restore_placeholders(text, wrapped, "WRAPPED")
    text = restore_placeholders(text, codeblocks, "CODEBLOCK")

    if text != original:
        if not dry_run:
            bak = path.with_suffix(path.suffix + ".bak")
            bak.write_text(original, encoding="utf-8")
            path.write_text(text, encoding="utf-8")
        return {
            "changed": True,
            "replacements": replacements,
        }
    return {
        "changed": False,
        "replacements": 0,
    }


def main():
    parser = argparse.ArgumentParser(description="Wrap configured terms with index tags.")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Report changes without writing files or backups.",
    )
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[1] / "src"
    md_files = list(root.rglob("*.md"))
    changed = []
    total_replacements = 0

    for f in md_files:
        try:
            result = process_file(f, TERMS, dry_run=args.dry_run)
            total_replacements += result["replacements"]
            if result["changed"]:
                changed.append(str(f.relative_to(Path.cwd())))
        except (OSError, UnicodeError, re.error, ValueError) as e:
            print(f"Error processing {f}: {e}")

    mode = "would modify" if args.dry_run else "modified"
    print(f"Processed {len(md_files)} files, {mode} {len(changed)} files.")
    print(f"Inserted {total_replacements} new index entries.")
    if changed:
        for c in changed:
            prefix = "Would modify:" if args.dry_run else "Modified:"
            print(prefix, c)


if __name__ == "__main__":
    main()
