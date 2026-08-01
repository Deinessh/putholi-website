from PIL import Image
import sys

def remove_background(img_name):
    print(f"Processing {img_name}")
    try:
        img = Image.open(img_name).convert('RGBA')
        data = img.getdata()
        
        new_data = []
        for item in data:
            r, g, b, a = item
            # If the pixel is roughly grayish and bright enough (checkerboard)
            if r > 140 and g > 140 and b > 140 and abs(r-g) < 25 and abs(r-b) < 25 and abs(g-b) < 25:
                # Make it completely transparent
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(img_name, "PNG")
        print(f"Saved {img_name}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    images = [
        "public/images/phule.png",
        "public/images/ambedkar.png",
        "public/images/buddha.png",
        "public/images/periyar.png"
    ]
    for img in images:
        remove_background(img)
