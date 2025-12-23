# Image Upload Guide for Gorkha Jaibik Products

This guide explains how to add product images to your Gorkha Jaibik store.

## Required Images

You need to add **23 product images** to this folder. The images must be named EXACTLY as listed below:

### Honey Products (9 images)
1. `lychee-honey.jpg`
2. `rudilio-honey.jpg`
3. `churi-honey.jpg`
4. `mustard-honey.jpg`
5. `faffar-honey.jpg`
6. `mad-honey.jpg`
7. `sisso-honey.jpg`
8. `cliff-honey.jpg`
9. `white-honey.jpg`

### Ghee Products (3 images)
10. `nauni-bilona-ghee.jpg`
11. `organic-cow-ghee-illam.jpg`
12. `yak-ghee-a2.jpg`

### Shilajit Products (3 images)
13. `himalayan-sun-activated-shilajit.jpg`
14. `cold-crafted-shilajit.jpg`
15. `traditional-fire-purified-shilajit.jpg`

### Grains & Legumes (7 images)
16. `marsi-rice.jpg`
17. `chinu-rice.jpg`
18. `kaguno-rice.jpg`
19. `buckwheat-flour.jpg`
20. `buckwheat-rice.jpg`
21. `dolpa-beans.jpg`
22. `jumla-beans.jpg`

### Herbs (1 image)
23. `moringa-powder.jpg`

## How to Upload Images

### Method 1: GitHub Web Interface
1. Go to: https://github.com/dbaithak-source/gorkha-store/tree/main/public/images
2. Click "Add file" dropdown → "Upload files"
3. Drag and drop your images or select them from your computer
4. Make sure filenames match EXACTLY as listed above
5. Click "Commit changes"

### Method 2: Using Git Command Line
```bash
cd public/images
# Copy your images here with correct names
git add *.jpg
git commit -m "Add product images"
git push
```

## Image Requirements

- **Format**: JPG/JPEG (or PNG)
- **Size**: 400x400 pixels recommended
- **File Size**: Keep under 500KB per image
- **Quality**: Use clear, well-lit product photos

## Verification

Once uploaded:
1. Visit: https://gorkha-store.vercel.app/
2. All product cards should now display images
3. If images don't appear, check:
   - Filename spelling and case sensitivity
   - Image format is JPG/JPEG
   - File is uploaded in `/public/images/` folder

## Need Help?

If images don't appear after upload:
- Wait 1-2 minutes for deployment to complete
- Check browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Verify filename matches products.json exactly
