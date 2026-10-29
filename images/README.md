# Images Folder

Place all your car photos in this folder.

## Naming Convention
Use descriptive filenames that include the make, model, and year:

- `toyota-corolla-2022.jpg`
- `honda-civic-2023.jpg`
- `bmw-3series-2021.jpg`

## Image Tips
- Use **landscape** (wide) orientation — ideally a 16:10 ratio.
- Recommended resolution: at least 800px wide.
- Use `.jpg` format for photos (smaller file size).
- Keep each image under 500 KB for fast page loading.
- If an image is missing, the website automatically shows a placeholder.

## How To Use Your Images
After copying a photo into this folder, open `script.js` and update the car's image path:

```javascript
image: "images/toyota-corolla-2022.jpg",
gallery: [
  "images/toyota-corolla-2022.jpg",
  "images/toyota-corolla-2022-interior.jpg"
],
```

Save the file and refresh the page in your browser.
