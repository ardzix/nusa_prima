from PIL import Image

def process_image():
    # Load the original logo
    img = Image.open('c:/Users/Pongo/Documents/work/freelance/arnatech/compro_nusaprima/src/assets/ecomo-logo.png').convert("RGBA")
    
    # Crop the bottom part where "Patented..." text is
    # Assuming the text ecomo finishes before the bottom 25% of the image.
    width, height = img.size
    img = img.crop((0, 0, width, int(height * 0.75)))
    
    datas = img.getdata()
    
    newData = []
    for item in datas:
        gray = sum(item[:3]) // 3
        # Enhance threshold and alpha calculation to remove noise
        if gray < 50:
            newData.append((255, 255, 255, 0))
        else:
            alpha = min(255, int((gray - 50) * 1.5))
            newData.append((255, 255, 255, alpha))

    img.putdata(newData)
    img.save('c:/Users/Pongo/Documents/work/freelance/arnatech/compro_nusaprima/src/assets/ecomo-logo-transparent.png', "PNG")

if __name__ == "__main__":
    process_image()
