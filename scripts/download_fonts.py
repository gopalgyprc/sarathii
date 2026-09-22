import os
import re
import urllib.request

FONTS_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "fonts")
os.makedirs(FONTS_DIR, exist_ok=True)

# URL for Plus Jakarta Sans & Cinzel
CSS_URL = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Cinzel:wght@600;700;800&display=swap"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

req = urllib.request.Request(CSS_URL, headers=headers)
with urllib.request.urlopen(req) as response:
    css_content = response.read().decode('utf-8')

# Parse @font-face blocks
font_blocks = re.findall(r'@font-face\s*\{([^}]+)\}', css_content)
print(f"Found {len(font_blocks)} font blocks in CSS.")

downloaded = 0
for block in font_blocks:
    family_match = re.search(r"font-family:\s*['\"]?([^'\";]+)['\"]?", block)
    style_match = re.search(r"font-style:\s*([^;]+);", block)
    weight_match = re.search(r"font-weight:\s*([^;]+);", block)
    url_match = re.search(r"src:\s*url\(([^)]+)\)", block)
    
    if family_match and weight_match and url_match:
        family = family_match.group(1).strip().replace(" ", "_")
        weight = weight_match.group(1).strip()
        style = style_match.group(1).strip() if style_match else "normal"
        url = url_match.group(1).strip().strip("'\"")
        
        filename = f"{family}-{weight}-{style}.woff2"
        filepath = os.path.join(FONTS_DIR, filename)
        
        # Download font file
        font_req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(font_req) as font_resp:
            font_data = font_resp.read()
            with open(filepath, "wb") as f:
                f.write(font_data)
        print(f"Downloaded: {filename} ({len(font_data)} bytes)")
        downloaded += 1

print(f"Successfully downloaded {downloaded} font files to {FONTS_DIR}")
