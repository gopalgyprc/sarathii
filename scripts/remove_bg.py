import urllib.request
import os
from PIL import Image
from rembg import remove

url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man-K9nlBQOeap4yE4fxld0piI45F0q7tl.webp"
temp_input = "public/images/founder-temp.webp"
output_png = "public/images/founder-portrait.png"

os.makedirs("public/images", exist_ok=True)

print("Downloading original founder image...")
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response, open(temp_input, 'wb') as out_file:
    out_file.write(response.read())

print("Removing background with AI precision...")
input_image = Image.open(temp_input)
output_image = remove(input_image)

# Save as transparent PNG
output_image.save(output_png, "PNG")

if os.path.exists(temp_input):
    os.remove(temp_input)

print(f"Successfully generated transparent PNG at: {output_png}")
print(f"Dimensions: {output_image.size}, Mode: {output_image.mode}")
