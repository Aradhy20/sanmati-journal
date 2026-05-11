import os

filepath = '/Users/aradhyjain/Library/Mobile Documents/com~apple~CloudDocs/website/sanmati-journal/resources/js/Components/Navbar.jsx'
with open(filepath, 'r') as f:
    content = f.read()

# Step 1: Change the return statement to include React fragment
content = content.replace('    return (\n        <header className="sticky top-0 z-50', '    return (\n        <>\n        <header className="sticky top-0 z-50')

# Step 2: Extract the AnimatePresence block
import re
pattern = r'(\s*\{\/\* Fullscreen Mobile Overlay.*?\n\s*<AnimatePresence>.*?\n\s*<\/AnimatePresence>)'
match = re.search(pattern, content, re.DOTALL)

if match:
    overlay_block = match.group(1)
    # Remove the block from current location
    content = content.replace(overlay_block, "")
    # Insert it after </header> tag
    content = content.replace('        </header>\n    );', '        </header>\n' + overlay_block + '\n        </>\n    );')
    
    with open(filepath, 'w') as f:
        f.write(content)
    print("Successfully refactored Navbar.jsx using string manipulation!")
else:
    print("ERROR: Could not find AnimatePresence block regex.")
