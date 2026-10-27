# StayMate AI 🌿
> *"Find Your Perfect Stay, Anywhere"* — India's Premier AI-Powered PG, Hostel & Room Finder.

---

## 🌟 Overview
**StayMate AI** is a complete, responsive web application designed for students and young working professionals across India. Built with a clean, mobile-first aesthetic matching modern prototype screens, it enables users to seamlessly discover, filter, compare, and book verified PGs, hostels, and shared flats with zero brokerage.

The platform comes pre-configured with **Vadodara, Gujarat** as its default city (focusing on popular student hubs around MSU, Sayajigunj, Fatehgunj, Alkapuri, Gotri, and Parul University) alongside rich listings across Ahmedabad, Pune, Mumbai, Bengaluru, Delhi NCR, and Jaipur.

---

## 🎨 Design System & Prototype Match
- **Soft Cream Background:** `#FFF6EA` (Dark mode: `#12111A`)
- **Indigo / Purple Primary Accent:** `#5B5BD6` (Hover: `#4848BD`)
- **Success & Contact Actions:** Green `#22C55E` / `#16A34A`
- **WhatsApp Action:** `#25D366`
- **Ratings & Highlights:** Yellow `#FBBF24`
- **Typography:** Rounded modern fonts (`Poppins` for headings, `Nunito` for UI body, and `Caveat` for friendly handwritten notes).
- **Cards & Elevation:** Rounded 24px cards (`rounded-3xl`), gentle shadows, and smooth hover elevation.
- **Mobile Bottom Navigation:** Fixed bottom bar with active indicator badges for Home, Search, Saved, Roommates, and Profile.

---

## 📱 Screens & Features Included

1. **Splash Screen:**
   - StayMate AI House + Leaf logo.
   - Tagline: *"Find Your Perfect Stay, Anywhere"*.
   - Animated SVG building with student backpack.
   - Auto-redirects to dashboard after 2 seconds (with an immediate "Skip Intro" option).

2. **Login / Sign Up Modal:**
   - Tabs for Login and Sign Up.
   - Role selector: **Tenant / Student** vs **PG / Flat Owner**.
   - Email or mobile number login.
   - Password input with toggle show/hide eye icon.
   - "Continue with Google" & "Continue with Facebook" instant quick login.
   - Form validation with reactive toasts.

3. **Home Dashboard:**
   - Personalized greeting: *"Hi, <Name>! Ready to find your next home?"*.
   - Notification bell with unread indicator and sliding notification drawer.
   - **AI Natural Language Search Bar** (e.g. typing *"girls PG near MSU under 8000 with food"* automatically configures and applies filters).
   - Banner Carousel (*"Better Stays, Brighter Futures"*, student discounts, zero brokerage guarantee).
   - Category Chips: PGs, Hostels, Private Rooms, Shared Flats.
   - Quick Services: Nearby PGs Map, Verified Listings, Find a Roommate, Government Hostels.
   - AI Recommended Section with calculated match percentages.

4. **Search & Filter:**
   - Location Hierarchy dropdown: State > City > Area (Default: Gujarat > Vadodara > Sayajigunj).
   - Budget Slider: ₹3,000 to ₹25,000+/month with real-time value updates.
   - Room Type Chips: Single, Double, Triple, 4+ sharing.
   - Gender Selector: Boys, Girls, Co-ed.
   - Food / Mess: Pure Veg vs Non-Veg.
   - Facilities: WiFi, AC, Mess/Food, Laundry, Study Room, Parking, Gym, CCTV.
   - Sort By: AI Recommended, Price (Low to High / High to Low), Highest Rated.

5. **PG Results View:**
   - Grid & List view of cards with high-res photo carousels.
   - Verified badge, gender badge, distance from nearest landmark/college (e.g. *"0.8 km from MSU"*).
   - Monthly starting rent and review score badge.
   - Heart wishlist toggle with heartbeat animation.
   - "Compare" and "View Details" buttons.

6. **PG Details View:**
   - **Photo Gallery Slider & Lightbox:** Room, Washroom, Kitchen/Mess, Dining Area, and Exterior.
   - **360° / Video Tour Modal.**
   - **Financial Breakdown:** Rent per bed, security deposit (100% refundable), maintenance, electricity sub-meter, notice period, lock-in period.
   - **Sharing Options Matrix:** Single, Double, Triple with live bed availability counts.
   - **Current Tenants Mix (Anonymized):** Student vs professional ratio, gender mix, and community atmosphere.
   - **House Rules:** Gate closing timings, visitor policies, smoking/alcohol rules, pet friendliness.
   - **Weekly Food Menu:** Interactive Monday–Sunday tabs with Breakfast, Lunch, Evening Snacks, and Dinner.
   - **Nearby Places & Distances:** Colleges (MSU, Parul, Navrachana), railway station, bus terminal, hospitals, markets.
   - **Category Ratings:** Cleanliness, Food, Safety, Value for Money.
   - **Reviews:** Verified resident reviews + "Write a Review" submission modal.
   - **Sticky Host Card:** Call Host button (`tel:`), direct WhatsApp link with prefilled message, and "Book Online" button.

7. **Compare PGs:**
   - Side-by-side comparison of up to 3 stays.
   - Compares rent, security deposits, ratings, WiFi, Mess, AC, Laundry, Study Room, Parking, and gate timings with checkmarks (✓) and dashes (—).

8. **Booking / Contact & Visit Scheduling:**
   - Check-in & check-out date pickers with validation (check-out must be after check-in).
   - Transparent financial summary (Token Advance, Monthly Rent, Security Deposit, Balance Due on Check-in).
   - Free In-Person Visit Scheduler with time slot selector.
   - Direct Host Call and WhatsApp buttons.

9. **Map View (Nearby PGs):**
   - Interactive Leaflet map with OpenStreetMap cartography.
   - Custom price pin badges (e.g. `₹8k`, `₹7.5k`).
   - Tapping any pin smoothly centers and opens a bottom preview card.
   - One-click city quick-centering (Vadodara, Ahmedabad, Pune, Bengaluru, Delhi, Jaipur).

10. **Booking Confirmed Screen:**
    - Animated celebratory success checkmark.
    - Unique Booking Reference ID (e.g. `SM-2026-9812`).
    - Dates, room type, token paid, and balance due summary.
    - Downloadable Booking Pass slip (`.txt` receipt).
    - Star feedback rating prompt.

11. **Find a Roommate & Sharing Board:**
    - Community feed for tenants seeking roommates or listing available beds in flats.
    - Filter by City, Gender, Budget, and Habits.
    - "Post Requirement" modal with instant feed updating.

12. **State-Wise Browsing:**
    - Visual cards for Indian states and UTs with popular cities and listing counts.

13. **State-Wise Hostels Directory:**
    - Specialized directory for Government & Subsidized Hostels (Working Women Hostels, Social Welfare Student Hostels) with eligibility, fees, admission process, and warden contacts.

14. **Post Your PG (Owner Multi-Step Portal):**
    - 3-step wizard (Basic Info, Rent & Beds, Rules & Photos).
    - Owner Dashboard to track listings, enquiries, and occupancy rates.

15. **User Profile, Wishlist & Admin Panel:**
    - Saved stays wishlist.
    - "My Stays" active booking pass tracker.
    - Admin portal with moderation controls and system metrics.

---

## 🤖 AI Features
1. **AI Natural Language Search Parser (`js/ai-assistant.js`):**
   - Parses conversational text like *"girls PG near MSU under 8000 with food"* into structured filters:
     - Gender: `Girls`
     - Area: `Sayajigunj (Near MSU)`
     - Max Budget: `₹8,000`
     - Facilities: `Mess/Food`
   - Displays a live chip: `🤖 Applied: Girls • Near MSU • Max ₹8,000 • Mess/Food`.

2. **AI Compatibility Scorer:**
   - Dynamically calculates a match score (e.g. `✨ 98% AI Match`) based on user role, budget, and location preferences.

3. **StayMate AI Chat Assistant:**
   - Floating chat widget answering accommodation queries, curfew timings, deposit refund rules, and nearby university stays with an offline knowledge base.

---

## 📁 Project Structure

```
stay_mate/
├── index.html              # Main application entry point & view router
├── README.md               # Comprehensive documentation & setup instructions
├── assets/
│   └── logo.svg            # StayMate AI House + Leaf SVG logo
├── css/
│   ├── variables.css       # Brand tokens, colors, radii & dark mode variables
│   └── style.css           # Layouts, buttons, cards, skeletons & animations
├── js/
│   ├── data.js             # 28+ rich Indian PG listings (Vadodara default)
│   ├── stateData.js        # 28 States & Government Hostels directory
│   ├── roommatesData.js    # Community roommate posts
│   ├── store.js            # State management & LocalStorage persistence
│   ├── ai-assistant.js     # NLP search engine, match scorer & chatbot assistant
│   ├── map.js              # Leaflet interactive map with custom price pins
│   └── app.js              # Routing, screen controller & event bindings
└── backend/
    ├── package.json        # Node.js Express backend dependencies
    └── server.js           # REST API endpoints for listings, auth & bookings
```

---

## 🚀 How to Run Locally

### Option 1: Instant Standalone (Zero Installations Required)
The frontend is built with pure standard web technologies and Tailwind CSS + Leaflet CDN:
1. Navigate to the project directory:
   ```bash
   cd c:\Users\Pratham\OneDrive\Desktop\stay_mate
   ```
2. Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Brave, or Firefox.
3. Or open with **VS Code Live Server**.

### Option 2: Running with Optional Node.js Backend (When Node.js is installed)
1. Open a terminal in the `backend/` directory:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. Open `http://localhost:5000` in your browser.

---

## 🧪 Quick Test Queries to Try in AI Search
- `girls PG near MSU under 8000 with food`
- `boys hostel in fatehgunj with AC`
- `private room in alkapuri under 12000`
- `pg near parul university waghodia`
- `luxury coliving in koramangala bangalore`

---

## 📜 License
Developed with ❤️ for students and young professionals across India. Free to use and customize.
