from PIL import Image
import sys

img_name = sys.argv[1]
try:
    img = Image.open(img_name)
    img = img.convert('RGB')
    
    # Check pixels in top left corner which are usually background
    pixels = []
    for y in range(0, 40, 5):
        for x in range(0, 40, 5):
            pixels.append(img.getpixel((x, y)))
            
    print(f"Top-left pixels in {img_name}:")
    for p in sorted(list(set(pixels))):
        print(p)
except Exception as e:
    print(f"Error: {e}")
