/* ==========================================================================
   Shehzad Motors — Car Dealership Website
   script.js
   --------------------------------------------------------------------------
   This file contains:
     1. CONFIGURATION — WhatsApp number, showroom info (EDIT THESE)
     2. CAR INVENTORY — The array of all cars (ADD/EDIT YOUR CARS HERE)
     3. RENDERING — Functions that display cars on the page
     4. FILTERS & SEARCH — Logic for the inventory section
     5. CAR DETAILS MODAL — Opens when "View Details" is clicked
     6. BOOKING / INQUIRY FORM — Form validation + WhatsApp integration
     7. NAVIGATION & UI — Mobile menu, sticky nav, back-to-top, etc.

   You only need to edit sections 1 and 2 to customize your dealership.
   Everything else works automatically.
   ========================================================================== */

/* ==========================================================================
   1. CONFIGURATION — EDIT THESE VALUES
   ========================================================================== */

const CONFIG = {
  // --- WhatsApp number (include country code, no + or spaces) ---
  // Replace with your actual business number.
  whatsappNumber: "923001234567", // placeholder: +92 300 1234567

  // --- Showroom info (used for directions & "Book a Visit" button) ---
  showroomAddress: "123 Main Road, Your City, Your Country",
  // Replace with your actual Google Maps URL (search your address on
  // Google Maps, click "Share", copy the link).
  mapsUrl: "https://www.google.com/maps",
  // The phone number shown to customers in the Visit Showroom section.
  showroomPhone: "+92 300 1234567",
};

/* ==========================================================================
   2. CAR INVENTORY — ADD / EDIT / REMOVE YOUR CARS HERE
   --------------------------------------------------------------------------
   HOW TO ADD A NEW CAR:
     1. Copy the image file into the "images" folder (e.g. images/honda-civic-2023.jpg)
     2. Copy one of the objects below and paste it at the end of the array
     3. Change the values for the new car
     4. For the "image" field, use the path to your local image:
          image: "images/honda-civic-2023.jpg"
        Or use a web URL (the samples below use Pexels URLs as temporary images).
     5. For the "gallery" field, list multiple image paths for the details page.

   HOW TO EDIT A CAR:
     - Find the car in the array and change any value (price, mileage, etc.)

   HOW TO REMOVE A CAR:
     - Delete the entire object { ... } including the comma after it.

   FIELD GUIDE:
     id            — unique number for each car (must be different)
     make          — e.g. "Toyota", "Honda", "BMW"
     model         — e.g. "Corolla", "Civic", "X5"
     year          — model year as a number (e.g. 2022)
     price         — price as a number (e.g. 3500000 means 35,00,000)
     mileage       — mileage as a number (e.g. 25000)
     transmission  — "Automatic" or "Manual"
     fuel          — "Petrol", "Diesel", "Hybrid", or "Electric"
     condition     — "New" or "Used"
     status        — "Available", "Reserved", or "Sold"
     image         — main image path or URL
     gallery       — array of image paths/URLs for the details page
     description   — short description of the vehicle
   ========================================================================== */

const cars = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 3500000,
    mileage: 25000,
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/37620310/pexels-photo-37620310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/37620310/pexels-photo-37620310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Well-maintained Corolla with full service history and excellent fuel economy.",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    price: 4200000,
    mileage: 12000,
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/14120866/pexels-photo-14120866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/14120866/pexels-photo-14120866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Sporty Civic with modern features and low mileage.",
  },
  {
    id: 3,
    make: "Suzuki",
    model: "Swift",
    year: 2021,
    price: 2200000,
    mileage: 35000,
    transmission: "Manual",
    fuel: "Petrol",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/8766145/pexels-photo-8766145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/8766145/pexels-photo-8766145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Compact and economical, perfect for city driving.",
  },
  {
    id: 4,
    make: "Hyundai",
    model: "Elantra",
    year: 2022,
    price: 3800000,
    mileage: 18000,
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    status: "Reserved",
    image: "https://images.pexels.com/photos/15961505/pexels-photo-15961505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/15961505/pexels-photo-15961505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Spacious sedan with premium interior and smooth ride.",
  },
  {
    id: 5,
    make: "Kia",
    model: "Sportage",
    year: 2023,
    price: 5500000,
    mileage: 8000,
    transmission: "Automatic",
    fuel: "Hybrid",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/8442905/pexels-photo-8442905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/8442905/pexels-photo-8442905.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Stylish SUV with advanced safety features and hybrid efficiency.",
  },
  {
    id: 6,
    make: "BMW",
    model: "3 Series",
    year: 2021,
    price: 6800000,
    mileage: 30000,
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/13058788/pexels-photo-13058788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/13058788/pexels-photo-13058788.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Luxury sedan with powerful engine and premium finishes.",
  },
  {
    id: 7,
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2022,
    price: 7500000,
    mileage: 15000,
    transmission: "Automatic",
    fuel: "Petrol",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/8673506/pexels-photo-8673506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/8673506/pexels-photo-8673506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Elegant C-Class with refined cabin and advanced technology.",
  },
  {
    id: 8,
    make: "Toyota",
    model: "RAV4",
    year: 2023,
    price: 5800000,
    mileage: 10000,
    transmission: "Automatic",
    fuel: "Hybrid",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/9615358/pexels-photo-9615358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/9615358/pexels-photo-9615358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Reliable SUV with hybrid powertrain and generous cargo space.",
  },
  {
    id: 9,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 8500000,
    mileage: 5000,
    transmission: "Automatic",
    fuel: "Electric",
    condition: "Used",
    status: "Available",
    image: "https://images.pexels.com/photos/10029873/pexels-photo-10029873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/10029873/pexels-photo-10029873.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Electric sedan with long range and cutting-edge technology.",
  },
  {
    id: 10,
    make: "Honda",
    model: "Civic",
    year: 2021,
    price: 3100000,
    mileage: 40000,
    transmission: "Manual",
    fuel: "Petrol",
    condition: "Used",
    status: "Sold",
    image: "https://images.pexels.com/photos/6794821/pexels-photo-6794821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/6794821/pexels-photo-6794821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Sample description — replace with the actual vehicle description. Reliable Civic with sporty handling and great value.",
  },
];

/* ==========================================================================
   3. RENDERING — Functions that display cars on the page
   ========================================================================== */

// --- Fallback image used if a car image fails to load ---
const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' fill='none'%3E%3Crect width='400' height='250' fill='%23f4f4f5'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='16' fill='%23a1a1aa' text-anchor='middle' dy='.3em'%3EImage not found%3C/text%3E%3C/svg%3E";

// --- Format price with commas (e.g. 3500000 → "3,500,000") ---
function formatPrice(price) {
  return price.toLocaleString("en-US");
}

// --- Get CSS class for status badge ---
function statusClass(status) {
  if (status === "Sold") return "sold";
  if (status === "Reserved") return "reserved";
  return "available";
}

// --- Build a WhatsApp link for a specific car ---
function carWhatsappLink(car, customMessage) {
  const carName = `${car.make} ${car.model} ${car.year}`;
  const msg =
    customMessage ||
    `Hello Shehzad Motors, I am interested in the ${carName}. Is it still available?`;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

// --- Create a car card element ---
function createCarCard(car) {
  const card = document.createElement("div");
  card.className = "car-card";
  card.innerHTML = `
    <div class="car-card-image">
      <span class="car-card-badge ${statusClass(car.status)}">${car.status}</span>
      <img src="${car.image}" alt="${car.make} ${car.model} ${car.year}"
           loading="lazy" onerror="this.src='${FALLBACK_IMAGE}'" />
    </div>
    <div class="car-card-body">
      <h3 class="car-card-title">${car.make} ${car.model}</h3>
      <p class="car-card-price">PKR ${formatPrice(car.price)}</p>
      <div class="car-card-specs">
        <span>${car.year} Year</span>
        <span>${formatPrice(car.mileage)} km</span>
        <span>${car.transmission}</span>
        <span>${car.fuel}</span>
      </div>
      <div class="car-card-actions">
        <button class="btn btn-outline view-details-btn" data-car-id="${car.id}">View Details</button>
        <a class="btn-whatsapp-small" href="${carWhatsappLink(car)}" target="_blank" rel="noopener" aria-label="WhatsApp about ${car.make} ${car.model}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
      <button class="btn btn-primary book-car-btn" data-car-id="${car.id}" style="margin-top:8px;width:100%;padding:10px 14px;font-size:.85rem;">Book This Car</button>
    </div>
  `;
  return card;
}

// --- Render the first 6-8 cars in the Featured section ---
function renderFeatured() {
  const grid = document.getElementById("featuredGrid");
  if (!grid) return;
  grid.innerHTML = "";
  cars.slice(0, 8).forEach((car) => grid.appendChild(createCarCard(car)));
}

// --- Render all cars in the Complete Inventory section ---
function renderInventory(list) {
  const grid = document.getElementById("inventoryGrid");
  const empty = document.getElementById("emptyState");
  const count = document.getElementById("inventoryCount");
  if (!grid) return;

  grid.innerHTML = "";

  if (count) {
    count.textContent = `${list.length} vehicle${list.length !== 1 ? "s" : ""} found`;
  }

  if (list.length === 0) {
    if (empty) empty.classList.remove("hidden");
    return;
  }
  if (empty) empty.classList.add("hidden");

  list.forEach((car) => grid.appendChild(createCarCard(car)));
}

// --- Populate filter dropdowns from the car data ---
function populateFilters() {
  const brandSelect = document.getElementById("filterBrand");
  const yearSelect = document.getElementById("filterYear");
  if (!brandSelect || !yearSelect) return;

  const brands = [...new Set(cars.map((c) => c.make))].sort();
  const years = [...new Set(cars.map((c) => c.year))].sort((a, b) => b - a);

  brands.forEach((brand) => {
    const opt = document.createElement("option");
    opt.value = brand;
    opt.textContent = brand;
    brandSelect.appendChild(opt);
  });

  years.forEach((year) => {
    const opt = document.createElement("option");
    opt.value = year;
    opt.textContent = year;
    yearSelect.appendChild(opt);
  });
}

/* ==========================================================================
   4. FILTERS & SEARCH
   ========================================================================== */

function getFilteredCars() {
  const search = document.getElementById("searchInput").value.trim().toLowerCase();
  const brand = document.getElementById("filterBrand").value;
  const year = document.getElementById("filterYear").value;
  const transmission = document.getElementById("filterTransmission").value;
  const priceRange = document.getElementById("filterPrice").value;
  const sortBy = document.getElementById("sortBy").value;

  let filtered = cars.filter((car) => {
    // Search by make or model
    if (search) {
      const haystack = `${car.make} ${car.model}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    // Brand filter
    if (brand && car.make !== brand) return false;
    // Year filter
    if (year && car.year !== parseInt(year)) return false;
    // Transmission filter
    if (transmission && car.transmission !== transmission) return false;
    // Price range filter
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      if (car.price < min || car.price > max) return false;
    }
    return true;
  });

  // Sorting
  if (sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === "year-new") {
    filtered.sort((a, b) => b.year - a.year);
  }

  return filtered;
}

function applyFilters() {
  renderInventory(getFilteredCars());
}

function resetFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("filterBrand").value = "";
  document.getElementById("filterYear").value = "";
  document.getElementById("filterTransmission").value = "";
  document.getElementById("filterPrice").value = "";
  document.getElementById("sortBy").value = "default";
  renderInventory(cars);
}

/* ==========================================================================
   5. CAR DETAILS MODAL
   ========================================================================== */

function findCarById(id) {
  return cars.find((c) => c.id === parseInt(id));
}

function openCarDetails(carId) {
  const car = findCarById(carId);
  if (!car) return;

  const modal = document.getElementById("carModal");
  const mainImage = document.getElementById("modalMainImage");
  const thumbs = document.getElementById("modalThumbs");
  const statusEl = document.getElementById("modalStatus");
  const titleEl = document.getElementById("modalTitle");
  const priceEl = document.getElementById("modalPrice");
  const descEl = document.getElementById("modalDescription");
  const specsEl = document.getElementById("modalSpecs");

  // Set main image
  mainImage.src = car.image;
  mainImage.alt = `${car.make} ${car.model} ${car.year}`;
  mainImage.onerror = function () {
    this.src = FALLBACK_IMAGE;
  };

  // Build thumbnails
  thumbs.innerHTML = "";
  const gallery = car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];
  gallery.forEach((src, idx) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.alt = `${car.make} ${car.model} — image ${idx + 1}`;
    if (idx === 0) thumb.classList.add("active");
    thumb.onerror = function () {
      this.src = FALLBACK_IMAGE;
    };
    thumb.addEventListener("click", () => {
      mainImage.src = src;
      thumbs.querySelectorAll("img").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
    thumbs.appendChild(thumb);
  });

  // Status
  statusEl.textContent = car.status;
  statusEl.className = `modal-status ${statusClass(car.status)}`;

  // Title and price
  titleEl.textContent = `${car.make} ${car.model} ${car.year}`;
  priceEl.textContent = `PKR ${formatPrice(car.price)}`;

  // Description
  descEl.textContent = car.description;

  // Specs
  const specs = [
    { label: "Year", value: car.year },
    { label: "Mileage", value: `${formatPrice(car.mileage)} km` },
    { label: "Transmission", value: car.transmission },
    { label: "Fuel Type", value: car.fuel },
    { label: "Condition", value: car.condition },
    { label: "Status", value: car.status },
  ];
  specsEl.innerHTML = specs
    .map(
      (s) =>
        `<div class="modal-spec-item"><span class="modal-spec-label">${s.label}</span><span class="modal-spec-value">${s.value}</span></div>`
    )
    .join("");

  // Store the car ID on the modal action buttons
  document.getElementById("modalBookBtn").dataset.carId = car.id;
  document.getElementById("modalInquiryBtn").dataset.carId = car.id;
  document.getElementById("modalWhatsappBtn").dataset.carId = car.id;

  // Show modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCarDetails() {
  document.getElementById("carModal").classList.add("hidden");
  document.body.style.overflow = "";
}

/* ==========================================================================
   6. BOOKING / INQUIRY FORM
   ========================================================================== */

let selectedCarForForm = null;

function openInquiryForm(carId) {
  // If a carId is passed, pre-select that car
  if (carId) {
    const car = findCarById(carId);
    if (car) {
      selectedCarForForm = car;
      document.getElementById("fCar").value = `${car.make} ${car.model} ${car.year}`;
    }
  } else {
    selectedCarForForm = null;
    document.getElementById("fCar").value = "General Inquiry";
  }

  // Reset form
  document.getElementById("inquiryForm").reset();
  if (carId && selectedCarForForm) {
    document.getElementById("fCar").value = `${selectedCarForForm.make} ${selectedCarForForm.model} ${selectedCarForForm.year}`;
  }
  document.getElementById("formFeedback").classList.remove("show", "success", "error");
  clearFormErrors();

  document.getElementById("formModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeInquiryForm() {
  document.getElementById("formModal").classList.add("hidden");
  document.body.style.overflow = "";
}

function clearFormErrors() {
  document.getElementById("errName").textContent = "";
  document.getElementById("errPhone").textContent = "";
  document.getElementById("errEmail").textContent = "";
}

function validateForm() {
  clearFormErrors();
  let valid = true;

  const name = document.getElementById("fName").value.trim();
  const phone = document.getElementById("fPhone").value.trim();
  const email = document.getElementById("fEmail").value.trim();

  if (!name) {
    document.getElementById("errName").textContent = "Please enter your full name.";
    valid = false;
  }
  if (!phone) {
    document.getElementById("errPhone").textContent = "Please enter your phone number.";
    valid = false;
  } else if (!/^[0-9+\-\s()]{7,}$/.test(phone)) {
    document.getElementById("errPhone").textContent = "Please enter a valid phone number.";
    valid = false;
  }
  // Email is optional — only validate if provided
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("errEmail").textContent = "Please enter a valid email address.";
    valid = false;
  }

  return valid;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const feedback = document.getElementById("formFeedback");

  if (!validateForm()) {
    feedback.textContent = "Please correct the highlighted fields above.";
    feedback.className = "form-feedback show error";
    return;
  }

  // Gather form data
  const name = document.getElementById("fName").value.trim();
  const phone = document.getElementById("fPhone").value.trim();
  const email = document.getElementById("fEmail").value.trim();
  const carName = document.getElementById("fCar").value;
  const inquiryType = document.getElementById("fType").value;
  const date = document.getElementById("fDate").value;
  const message = document.getElementById("fMessage").value.trim();

  // Build WhatsApp message
  let whatsappMsg = `Hello Shehzad Motors,\n\n`;
  whatsappMsg += `Name: ${name}\n`;
  whatsappMsg += `Phone: ${phone}\n`;
  if (email) whatsappMsg += `Email: ${email}\n`;
  whatsappMsg += `Vehicle: ${carName}\n`;
  whatsappMsg += `Inquiry Type: ${inquiryType}\n`;
  if (inquiryType === "Book a Test Drive" && date) {
    whatsappMsg += `Preferred Date: ${date}\n`;
  }
  if (message) whatsappMsg += `Message: ${message}\n`;
  whatsappMsg += `\nPlease confirm availability. Thank you!`;

  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  // Show success feedback — explain booking is not yet confirmed
  feedback.innerHTML =
    "Thank you! Your details are ready in WhatsApp. <strong>The showroom must confirm your booking before it is finalised.</strong>";
  feedback.className = "form-feedback show success";

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, "_blank");

  // Close the form after a short delay so the user can read the message
  setTimeout(() => {
    closeInquiryForm();
  }, 3000);
}

/* ==========================================================================
   7. NAVIGATION & UI
   ========================================================================== */

// --- Mobile menu toggle ---
function setupMobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
    toggle.classList.toggle("active");
    toggle.setAttribute("aria-expanded", links.classList.contains("open"));
  });

  // Close mobile menu when a link is clicked
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// --- Sticky nav shadow on scroll ---
function setupStickyNav() {
  const nav = document.getElementById("navBar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// --- Back to top button ---
function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Floating WhatsApp button ---
function setupFloatingWhatsapp() {
  const float = document.getElementById("whatsappFloat");
  const msg = `Hello Shehzad Motors, I would like to know more about your available vehicles.`;
  float.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  // Footer WhatsApp link
  const footerWa = document.getElementById("footerWhatsapp");
  if (footerWa) {
    footerWa.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
}

// --- Visit Showroom buttons ---
function setupVisitButtons() {
  const directionsBtn = document.getElementById("directionsBtn");
  if (directionsBtn) {
    directionsBtn.href = CONFIG.mapsUrl;
  }

  const bookVisitBtn = document.getElementById("bookVisitBtn");
  if (bookVisitBtn) {
    bookVisitBtn.addEventListener("click", () => {
      const msg = `Hello Shehzad Motors, I would like to book a visit to your showroom. My address is: ${CONFIG.showroomAddress}. Could you confirm a suitable time?`;
      window.open(
        `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    });
  }
}

// --- Show/hide test drive date field based on inquiry type ---
function setupInquiryTypeToggle() {
  const typeSelect = document.getElementById("fType");
  const dateField = document.getElementById("dateField");
  typeSelect.addEventListener("change", () => {
    if (typeSelect.value === "Book a Test Drive") {
      dateField.classList.remove("hidden");
    } else {
      dateField.classList.add("hidden");
    }
  });
}

// --- Close modals on overlay click or Escape key ---
function setupModalCloseHandlers() {
  const overlays = document.querySelectorAll(".modal-overlay");
  overlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlays.forEach((o) => o.classList.add("hidden"));
      document.body.style.overflow = "";
    }
  });
}

// --- Setup all click handlers (delegated from document) ---
function setupClickHandlers() {
  // Use event delegation for dynamically rendered cards
  document.addEventListener("click", (e) => {
    // View Details button
    const viewBtn = e.target.closest(".view-details-btn");
    if (viewBtn) {
      e.preventDefault();
      openCarDetails(viewBtn.dataset.carId);
      return;
    }

    // Book This Car button (on cards)
    const bookBtn = e.target.closest(".book-car-btn");
    if (bookBtn) {
      e.preventDefault();
      openInquiryForm(bookBtn.dataset.carId);
      return;
    }

    // Modal Book button
    const modalBook = e.target.closest("#modalBookBtn");
    if (modalBook) {
      openInquiryForm(modalBook.dataset.carId);
      closeCarDetails();
      return;
    }

    // Modal Inquiry button
    const modalInquiry = e.target.closest("#modalInquiryBtn");
    if (modalInquiry) {
      openInquiryForm(modalInquiry.dataset.carId);
      closeCarDetails();
      return;
    }

    // Modal WhatsApp button
    const modalWa = e.target.closest("#modalWhatsappBtn");
    if (modalWa) {
      const car = findCarById(modalWa.dataset.carId);
      if (car) {
        window.open(carWhatsappLink(car), "_blank");
      }
      return;
    }

    // Modal close buttons
    if (e.target.closest("#modalClose")) {
      closeCarDetails();
      return;
    }
    if (e.target.closest("#formClose")) {
      closeInquiryForm();
      return;
    }
  });
}

// --- Setup filter controls ---
function setupFilterControls() {
  const ids = ["searchInput", "filterBrand", "filterYear", "filterTransmission", "filterPrice", "sortBy"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", applyFilters);
      el.addEventListener("change", applyFilters);
    }
  });

  document.getElementById("resetFilters").addEventListener("click", resetFilters);
  document.getElementById("emptyReset").addEventListener("click", resetFilters);
}

// --- Set current year in footer ---
function setYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ==========================================================================
   INITIALIZATION — runs when the page loads
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  populateFilters();
  renderFeatured();
  renderInventory(cars);
  setupMobileNav();
  setupStickyNav();
  setupBackToTop();
  setupFloatingWhatsapp();
  setupVisitButtons();
  setupInquiryTypeToggle();
  setupModalCloseHandlers();
  setupClickHandlers();
  setupFilterControls();
  setYear();

  // Form submit handler
  document.getElementById("inquiryForm").addEventListener("submit", handleFormSubmit);
});
