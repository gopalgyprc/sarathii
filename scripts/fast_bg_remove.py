import urllib.request
import os
import numpy as np
from PIL import Image, ImageFilter

url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/man-K9nlBQOeap4yE4fxld0piI45F0q7tl.webp"
temp_input = "public/images/founder-raw.webp"
output_png = "public/images/founder-transparent.png"

os.makedirs("public/images", exist_ok=True)

# 1. Download image
print("Downloading founder image...")
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response, open(temp_input, 'wb') as out_file:
    out_file.write(response.read())

# 2. Open image
img = Image.open(temp_input).convert("RGBA")
arr = np.array(img, dtype=np.float32)

# Sample background color from corners (top-left, top-right, top-center)
h, w, _ = arr.shape
bg_samples = [
    arr[0:20, 0:20, :3],
    arr[0:20, w-20:w, :3],
    arr[0:15, w//2-10:w//2+10, :3]
]
bg_color = np.mean(np.concatenate([s.reshape(-1, 3) for s in bg_samples], axis=0), axis=0)

# Calculate Euclidean color distance from background
rgb = arr[:, :, :3]
dist = np.sqrt(np.sum((rgb - bg_color) ** 2, axis=2))

# Create smooth alpha transition
# Background threshold: lower distance means background (alpha = 0)
# Higher distance means subject (alpha = 255)
threshold_low = 14.0
threshold_high = 38.0

alpha = np.clip((dist - threshold_low) / (threshold_high - threshold_low), 0.0, 1.0) * 255.0

# Flood fill from boundaries to only remove background, not clothes with similar light tones
# Using simple connected component mask from edges
from scipy.ndimage import binary_fill_holes

# Hard background mask
is_bg = dist < 22.0
# Only connected to edges
from scipy.ndimage import label
labeled, num_features = label(is_bg)
edge_labels = set(labeled[0, :]).union(set(labeled[-1, :])).union(set(labeled[:, 0])).union(set(labeled[:, -1]))
edge_labels.discard(0)

true_bg_mask = np.isin(labeled, list(edge_labels))

# Set alpha to 0 for true background with smooth boundary feathering
final_alpha = np.ones((h, w), dtype=np.float32) * 255.0
final_alpha[true_bg_mask] = 0.0

# Smooth alpha edges
alpha_img = Image.fromarray(final_alpha.astype(np.uint8))
alpha_img = alpha_img.filter(ImageFilter.GaussianBlur(radius=1.2))

# Composite RGBA
r, g, b, _ = img.split()
result = Image.merge("RGBA", (r, g, b, alpha_img))

result.save(output_png, "PNG")
print(f"Successfully generated transparent PNG at: {output_png} (Dimensions: {result.size})")

if os.path.exists(temp_input):
    os.remove(temp_input)
