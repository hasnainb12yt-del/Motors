# Shehzad Motors — Car Dealership Website

A modern, minimalistic, and professional car dealership website built with **HTML5, CSS3, and vanilla JavaScript only**. No frameworks, no backend, no database required.

---

## How To Open The Project In VS Code

1. Download and install [VS Code](https://code.visualstudio.com/).
2. Open VS Code → **File → Open Folder** → select this project folder.
3. To preview the website:
   - **Option A:** Install the "Live Server" extension in VS Code. Right-click `index.html` → **Open with Live Server**.
   - **Option B:** Simply double-click `index.html` to open it in your browser.

---

## Project Files

```
shehzad-motors/
├── index.html      ← Page structure (HTML)
├── style.css       ← All styling (colors, layout, responsive design)
├── script.js       ← All functionality + CAR INVENTORY DATA
├── images/         ← Folder for your car photos
└── README.md       ← This file
```

---

## How To Add A New Car

1. **Add the photo:** Copy your car image into the `images/` folder.
   - Use a descriptive filename, e.g. `toyota-corolla-2022.jpg`
2. **Open `script.js`** and scroll to the section labeled:
   `2. CAR INVENTORY — ADD / EDIT / REMOVE YOUR CARS HERE`
3. **Copy one of the existing car objects** and paste it at the end of the array.
4. **Change the values:**

```javascript
{
  id: 11,                        // unique number — must be different from all others
  make: "Toyota",                // brand name
  model: "Corolla",              // model name
  year: 2022,                    // model year (number)
  price: 3500000,                // price in your currency (number, no commas)
  mileage: 25000,                // mileage in km (number)
  transmission: "Automatic",     // "Automatic" or "Manual"
  fuel: "Petrol",                // "Petrol", "Diesel", "Hybrid", or "Electric"
  condition: "Used",             // "New" or "Used"
  status: "Available",           // "Available", "Reserved", or "Sold"
  image: "images/toyota-corolla-2022.jpg",  // path to your local image
  gallery: [                     // list of images for the details page
    "images/toyota-corolla-2022.jpg"
  ],
  description: "Well-maintained Corolla with full service history.",  // short description
}
```

5. **Save the file** and refresh the page. The car appears automatically in the featured section and inventory grid.

> The website supports 20–25+ cars without any layout changes. Just keep adding objects to the array.

---

## How To Replace Car Images

1. Copy your photo into the `images/` folder.
2. Open `script.js` and find the car you want to update.
3. Change the `image` and `gallery` values to point to your file:

```javascript
image: "images/your-new-photo.jpg",
gallery: [
  "images/your-new-photo.jpg",
  "images/your-new-photo-interior.jpg"
],
```

4. Save and refresh.

**Tips for good images:**
- Use landscape (wide) photos, ideally 16:10 ratio.
- Keep file sizes reasonable (under 500 KB per image for fast loading).
- Use `.jpg` format for photos.
- The website automatically handles images that don't load — a placeholder appears instead.

---

## How To Change The WhatsApp Number

Open `script.js` and find the **CONFIGURATION** section at the top (around line 15):

```javascript
const CONFIG = {
  whatsappNumber: "923001234567",  // ← change this
  ...
};
```

- Enter your number **with the country code**, but **without** the `+` sign or spaces.
- Example: for +92 300 1234567, enter `923001234567`.

This single number is used for:
- The floating WhatsApp button
- WhatsApp buttons on each car card
- WhatsApp buttons in the car details modal
- The booking/inquiry form
- The "Book a Visit" button
- The footer WhatsApp link

---

## How To Edit Prices

Open `script.js`, find the car in the array, and change the `price` value:

```javascript
price: 3500000,   // ← change this number (no commas)
```

The price displays as "PKR 3,500,000" automatically on the website. To change the currency label (e.g. from "PKR" to "AED"), search for `PKR` in `script.js` and `index.html` and replace it.

---

## How To Update Showroom Details

Open `script.js` and find the **CONFIGURATION** section at the top:

```javascript
const CONFIG = {
  whatsappNumber: "923001234567",
  showroomAddress: "123 Main Road, Your City, Your Country",  // ← your address
  mapsUrl: "https://www.google.com/maps",                     // ← your Google Maps link
  showroomPhone: "+92 300 1234567",                           // ← your phone number
};
```

To update the **opening hours** shown on the website, open `index.html` and find the **Visit Showroom** section. Edit the text values there.

To update the **Google Maps embed**, open `index.html`, find the `<iframe>` in the Visit Showroom section, and replace the `src` URL with your location's embed code from Google Maps.

---

## How To Change Colors And Design

Open `style.css` and find the `:root` section at the top. All colors are defined there:

```css
:root {
  --color-gold: #c0a062;       /* gold accent — change to your brand color */
  --color-charcoal: #1a1a1a;   /* main dark color */
  --color-white: #ffffff;      /* background */
  /* ... and more */
}
```

---

## Features

- **Homepage** with hero section, featured cars, and complete inventory
- **Search, filter, and sort** cars by brand, price, year, and transmission
- **Car details** modal with image gallery and full specifications
- **Booking & inquiry form** that opens WhatsApp with pre-filled details
- **Floating WhatsApp button** visible on every page
- **Visit Showroom section** with map, address, hours, and directions
- **Fully responsive** — works on desktop, tablet, and mobile
- **Accessible** — keyboard navigation, ARIA labels, semantic HTML
- **Back-to-top button** and smooth scrolling
- **No backend required** — everything runs in the browser

---

## How To Publish The Website

### Option 1: Free hosting (Netlify)
1. Go to [netlify.com](https://www.netlify.com/) and create a free account.
2. Click **Add new site → Deploy manually**.
3. Drag and drop this entire project folder into the upload area.
4. Your website is live with a free URL. You can connect a custom domain later.

### Option 2: Free hosting (GitHub Pages)
1. Create a free [GitHub](https://github.com/) account.
2. Create a new repository and upload all project files.
3. Go to **Settings → Pages** → set source to your main branch.
4. Your site will be live at `https://yourusername.github.io/your-repo-name/`.

### Option 3: Any web hosting
Upload all files (including the `images` folder) to your hosting provider using FTP or their file manager.

---

## Important Notes

- All car information in the sample data is **placeholder content**. Replace it with your actual inventory before publishing.
- The WhatsApp number, address, phone, and hours are all placeholders. Update them before going live.
- The booking form does **not** confirm a booking — it opens WhatsApp so the showroom can confirm. This is by design.
- No customer data is stored anywhere. The form simply generates a WhatsApp message.

---

## Need Help?

If you are stuck, the two files you need to edit are:
1. **`script.js`** — for car inventory, WhatsApp number, and showroom details
2. **`index.html`** — for showroom hours, footer links, and map embed

Everything is commented in plain English to guide you.
