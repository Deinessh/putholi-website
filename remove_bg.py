from rembg import remove
from PIL import Image
import os

images = ["phule.png", "ambedkar.png", "buddha.png", "periyar.png"]
img_dir = "public/images"

for img_name in images:
    input_path = os.path.join(img_dir, img_name)
    output_path = os.path.join(img_dir, "cutout_" + img_name)
    
    if os.path.exists(input_path):
        print(f"Processing {img_name}...")
        try:
            input_img = Image.open(input_path)
            output_img = remove(input_img)
            output_img.save(output_path)
            print(f"Saved {output_path}")
        except Exception as e:
            print(f"Error processing {img_name}: {e}")
    else:
        print(f"File not found: {input_path}")
