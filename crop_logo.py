from PIL import Image
import os

try:
    img = Image.open('../resources/Form.jpeg')
    # The logo is in the top left, roughly 300x300.
    logo = img.crop((0, 0, 300, 300))
    logo.save('public/logo.jpg')
    print("Logo cropped successfully.")
except Exception as e:
    print(f"Error: {e}")
