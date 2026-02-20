#!/usr/bin/env python3
"""
Remove all non-ASCII Unicode characters from markdown files.
Replaces common Unicode symbols with ASCII equivalents.
"""

import os
import re
from pathlib import Path

# Mapping of Unicode characters to ASCII replacements
UNICODE_REPLACEMENTS = {
    # Star ratings and symbols
    '★': '*',
    '✅': '[YES]',
    '❌': '[NO]',
    '🎉': '[celebration]',
    '🔑': '[key]',
    '🎲': '[dice]',
    '📿': '[beads]',
    
    # Arrows
    '→': '->',
    '←': '<-',
    '↓': 'v',
    '↑': '^',
    
    # Dashes and hyphens
    '–': '-',      # en-dash
    '—': '-',      # em-dash
    
    # Mathematical symbols
    '×': 'x',      # multiplication
    '±': '+/-',    # plus-minus
    '°': '',       # degree (remove, context determines it's Celsius)
    '÷': '/',      # division
    
    # Box drawing characters
    '├': '+--',
    '│': '|',
    '└': '+--',
    '─': '--',
    '┌': '+--',
    '┐': '--+',
    '┘': '+--',
    '┤': '-+',
    '├─': '+--',
    '└─': '+--',
    
    # Other common symbols
    '…': '...',    # ellipsis
    '·': '*',      # middle dot
    '–': '-',      # another en-dash encoding
    ''': "'",      # curly single quote
    ''': "'",      # curly single quote
    '"': '"',      # curly double quote
    '"': '"',      # curly double quote
    '•': '-',      # bullet
}

def remove_unicode_from_file(filepath):
    """Remove non-ASCII characters from a markdown file."""
    try:
        # Read file
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Apply replacements in order
        for unicode_char, ascii_char in UNICODE_REPLACEMENTS.items():
            content = content.replace(unicode_char, ascii_char)
        
        # Remove any remaining non-ASCII characters
        content = content.encode('ascii', 'ignore').decode('ascii')
        
        # Write back if changed
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    base_path = Path("/var/home/ryhunsaker/Documents/3dprint_instructional_resources/VI_friendly_OpenSCAD_lessons")
    
    # List of files to process
    files_with_unicode = [
        "my-book/src/SUMMARY.md",
        "my-book/src/assets/README.md",
        "my-book/src/assets/3dMake_Foundation/Lessons_3dMake_6/README.md",
        "my-book/src/3dMake_Foundation/Appendix_B_Material_Properties.md",
        "my-book/src/3dMake_Foundation/3dMake_Intro/3dMake_Intro.md",
        "my-book/src/3dMake_Foundation/3dMake_Tutorial/3dMake_Tutorial.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_1/Lessons_3dMake_1.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_2/Lessons_3dMake_2.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_3/Lessons_3dMake_3.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_4/Lessons_3dMake_4.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_5/Lessons_3dMake_5.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_6/Lessons_3dMake_6.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_7/Lessons_3dMake_7.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_8/Lessons_3dMake_8.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_9/Lessons_3dMake_9.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_10/Lessons_3dMake_10.md",
        "my-book/src/3dMake_Foundation/Lessons_3dMake_11/Lessons_3dMake_11.md",
        "my-book/src/3dMake_Foundation/3dMake_Final_Exam.md",
        "my-book/src/README.md",
        "my-book/src/Syllabus.md",
        "README.md",
    ]
    
    # Find all markdown files recursively
    all_md_files = list(base_path.rglob("*.md"))
    
    modified_count = 0
    processed_count = 0
    
    for filepath in all_md_files:
        if remove_unicode_from_file(filepath):
            modified_count += 1
        processed_count += 1
        if processed_count % 20 == 0:
            print(f"Processed {processed_count} files...")
    
    print(f"\nComplete!")
    print(f"Total files processed: {processed_count}")
    print(f"Files modified: {modified_count}")

if __name__ == "__main__":
    main()
