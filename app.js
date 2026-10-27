// StayMate AI - Main Application Controller & View Router
const App = {
  currentScreen: 'splash',
  currentListingId: null,
  activeLightboxIndex: 0,
  activeLightboxPhotos: [],
  filters: {
    state: "Gujarat",
    city: "Vadodara",
    area: "",
    maxBudget: 20000,
    roomType: "all", // all, Single, Sharing, Private
    gender: "all",   // all, Boys, Girls, Co-ed
    sharing: [],     // Single, Double, Triple, 4+
    foodType: "all", // all, Veg, Non-Veg, Both
    facilities: [],  // WiFi, AC, Mess/Food, etc.
    verifiedOnly: false,
    minRating: 0,
    sortBy: "recommended" // recommended, price_asc, price_desc, rating_desc
  },

  // 1. Initialization
  init() {
    // Set theme
    const theme = Store.getTheme();
    document.documentElement.setAttribute('data-theme', theme);

    // Bind event listeners
    this.bindEvents();

    // Setup initial user greeting
    this.updateUserGreeting();

    // Auto-redirect splash after 2.2 seconds
    setTimeout(() => {
      if (this.currentScreen === 'splash') {
        this.navigateTo('home');
      }
    }, 2200);

    // Initial render of home widgets
    this.renderHomeCategories();
    this.renderHomeFeatured();
    this.renderQuickServices();

    // Render Saved badge count
    this.updateSavedBadge();
    this.updateCompareBar();
  },

  // 2. Navigation & Screen Controller
  navigateTo(screenId, params = {}) {
    // Hide all view screens
    document.querySelectorAll('.view-screen').forEach(screen => {
      screen.classList.add('hidden');
    });

    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.remove('hidden');
      window.scrollTo(0, 0);
    }

    this.currentScreen = screenId;

    // Update bottom nav active indicator
    document.querySelectorAll('.mobile-bottom-nav .nav-item').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-screen') === screenId) {
        btn.classList.add('active');
      }
    });

    // Screen specific logic
    if (screenId === 'home') {
      this.renderHomeFeatured();
      this.updateUserGreeting();
    } else if (screenId === 'search') {
      this.renderSearchScreen();
    } else if (screenId === 'map') {
      setTimeout(() => {
        StayMap.init('leaflet-map-container');
      }, 100);
    } else if (screenId === 'saved') {
      this.renderSavedScreen();
    } else if (screenId === 'compare') {
      this.renderCompareScreen();
    } else if (screenId === 'roommates') {
      this.renderRoommatesScreen();
    } else if (screenId === 'states') {
      this.renderStateWiseScreen();
    } else if (screenId === 'hostels') {
      this.renderHostelsScreen();
    } else if (screenId === 'post-pg') {
      this.initPostPgWizard();
    } else if (screenId === 'owner-dashboard') {
      this.renderOwnerDashboard();
    } else if (screenId === 'profile') {
      this.renderProfileScreen();
    } else if (screenId === 'admin') {
      this.renderAdminScreen();
    }
  },

  navigateToDetails(listingId) {
    this.currentListingId = listingId;
    const listing = Store.getAllListings().find(l => l.id === listingId);
    if (!listing) {
      this.showToast("Stay not found", "error");
      return;
    }
    this.renderDetailsScreen(listing);
    this.navigateTo('details');
  },

  // 3. User Greeting & Notifications
  updateUserGreeting() {
    const user = Store.getUser();
    const greetingEl = document.getElementById('home-user-greeting');
    if (greetingEl) {
      const name = user ? user.name : "Friend";
      greetingEl.innerText = `Hi, ${name}! Ready to find your next home?`;
    }
    const avatarEl = document.getElementById('nav-user-avatar');
    if (avatarEl && user && user.avatar) {
      avatarEl.src = user.avatar;
    }
  },

  // 4. Home Screen Renderers
  renderHomeCategories() {
    const container = document.getElementById('home-categories-container');
    if (!container) return;

    const categories = [
      { id: "pg", label: "PGs", icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>` },
      { id: "hostel", label: "Hostels", icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>` },
      { id: "room", label: "Private Rooms", icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>` },
      { id: "shared", label: "Shared Flats", icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>` }
    ];

    container.innerHTML = categories.map(cat => `
      <div onclick="App.filterByCategory('${cat.id}')" class="category-chip group">
        <div class="chip-icon-box w-12 h-12 rounded-2xl bg-[#EEF0FF] dark:bg-[#28273D] text-[#5B5BD6] dark:text-[#7575FF] flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
          ${cat.icon}
        </div>
        <span class="text-xs font-bold text-[#1F1B2E] dark:text-gray-200">${cat.label}</span>
      </div>
    `).join('');
  },

  filterByCategory(type) {
    this.filters.roomType = type;
    this.navigateTo('search');
  },

  renderQuickServices() {
    const container = document.getElementById('home-quick-services');
    if (!container) return;

    const services = [
      { title: "Compare PGs", desc: "Side-by-side rent, food & rules comparison", icon: "⚖️", action: "App.navigateTo('compare')" },
      { title: "Verified Listings", desc: "100% physically inspected stays", icon: "✅", action: "App.filterVerifiedOnly()" },
      { title: "Find a Roommate", desc: "Share flat & split expenses", icon: "🤝", action: "App.navigateTo('roommates')" },
      { title: "State Hostels", desc: "Government & subsidized hostels", icon: "🏛️", action: "App.navigateTo('hostels')" }
    ];

    container.innerHTML = services.map(s => `
      <div onclick="${s.action}" class="quick-service-card">
        <div class="text-2xl">${s.icon}</div>
        <div>
          <h4 class="font-bold text-sm text-[#1F1B2E] dark:text-white">${s.title}</h4>
          <p class="text-xs text-gray-500 dark:text-gray-400">${s.desc}</p>
        </div>
      </div>
    `).join('');
  },

  filterVerifiedOnly() {
    this.filters.verifiedOnly = true;
    this.navigateTo('search');
  },

  renderHomeFeatured() {
    const container = document.getElementById('home-featured-listings');
    if (!container) return;

    const listings = Store.getAllListings();
    // Prioritize Vadodara and featured stays
    const featured = listings.filter(l => l.featured || l.city === "Vadodara").slice(0, 6);

    container.innerHTML = featured.map(listing => this.createStayCardHTML(listing, true)).join('');
  },

  // 5. Stay Card HTML Generator (Used in Home, Search, Saved)
  createStayCardHTML(listing, showAiScore = false) {
    const isSaved = Store.isPgSaved(listing.id);
    const user = Store.getUser();
    const aiScore = AIAssistant.computeMatchScore(listing, { city: user ? user.city : 'Vadodara', role: user ? user.role : 'Student' });

    // Format gender badge
    const genderClass = listing.gender === 'Girls' ? 'badge-gender-girls' :
                        listing.gender === 'Boys' ? 'badge-gender-boys' : 'badge-gender-coed';

    // Nearest landmark distance
    const nearestPlace = listing.nearbyPlaces && listing.nearbyPlaces.length > 0 ? listing.nearbyPlaces[0] : { name: "City Center", distance: "1.0 km" };

    return `
      <div class="stay-card flex flex-col group" id="card-${listing.id}">
        <!-- Photo Container -->
        <div class="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img src="${listing.photos[0]}" alt="${listing.name}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

          <!-- Badges top left -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            ${listing.verified ? `<span class="badge-verified"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Verified</span>` : ''}
            <span class="badge-gender ${genderClass}">${listing.gender}</span>
          </div>

          <!-- Top right: Save Heart Button -->
          <div class="absolute top-3 right-3 z-10">
            <button onclick="App.toggleSave('${listing.id}', event)" class="btn-save-heart ${isSaved ? 'is-saved' : ''}" title="Save Stay">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>
          </div>

          <!-- Bottom bar on photo: Distance & Rating -->
          <div class="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs z-10">
            <span class="flex items-center gap-1 drop-shadow-md">
              <svg class="w-3.5 h-3.5 text-[#FDE68A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              ${nearestPlace.distance} from ${nearestPlace.name.split(' ')[0]}
            </span>
            <div class="badge-rating">
              <svg class="w-3 h-3" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ${listing.rating} <span class="text-[10px] text-gray-500 font-normal">(${listing.reviewCount})</span>
            </div>
          </div>
        </div>

        <!-- Content Body -->
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            ${showAiScore ? `
              <div class="flex items-center gap-1.5 mb-2">
                <span class="ai-badge">✨ ${aiScore}% AI Match</span>
                <span class="text-[11px] text-gray-500 dark:text-gray-400">Fits your criteria</span>
              </div>
            ` : ''}

            <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white line-clamp-1 mb-1" title="${listing.name}">${listing.name}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-3">
              <span>📍 ${listing.area}, ${listing.city}</span>
            </p>

            <!-- Amenities Chips -->
            <div class="flex flex-wrap gap-1.5 mb-4">
              ${listing.facilities.slice(0, 3).map(f => `
                <span class="text-[11px] px-2 py-0.5 rounded-md bg-[#FAF5EE] dark:bg-[#252438] text-gray-600 dark:text-gray-300 border border-[#F0E6D8] dark:border-[#2D2B3F]">${f}</span>
              `).join('')}
              ${listing.facilities.length > 3 ? `<span class="text-[11px] px-1.5 py-0.5 text-gray-400">+${listing.facilities.length - 3}</span>` : ''}
            </div>
          </div>

          <!-- Bottom Footer Bar -->
          <div class="pt-3 border-t border-[#F0E6D8] dark:border-[#2D2B3F] flex items-center justify-between">
            <div>
              <span class="text-xs text-gray-400">Starts at</span>
              <div class="flex items-baseline gap-1">
                <span class="text-lg font-extrabold text-[#5B5BD6] dark:text-[#7575FF]">₹${listing.price.toLocaleString('en-IN')}</span>
                <span class="text-[11px] text-gray-400">/mo</span>
              </div>
            </div>

            <div class="flex items-center gap-1.5">
              <button onclick="App.toggleCompareCard('${listing.id}', event)" class="p-2 rounded-xl text-gray-400 hover:text-[#5B5BD6] dark:hover:text-[#7575FF] hover:bg-[#EEF0FF] dark:hover:bg-[#2A2942] transition-colors" title="Compare Stay">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </button>
              <button onclick="App.navigateToDetails('${listing.id}')" class="btn-primary text-xs py-2 px-3.5">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // 6. Search & Filter Screen Logic
  renderSearchScreen() {
    this.populateFilterDropdowns();
    this.applyFiltersAndRender();
  },

  populateFilterDropdowns() {
    const stateSelect = document.getElementById('filter-state-select');
    const citySelect = document.getElementById('filter-city-select');
    const areaSelect = document.getElementById('filter-area-select');

    if (!stateSelect || !citySelect || !areaSelect) return;

    // States
    const states = window.indianStatesData || [];
    stateSelect.innerHTML = states.map(s => `<option value="${s.name}" ${s.name === this.filters.state ? 'selected' : ''}>${s.name}</option>`).join('');

    // Update cities based on current selected state
    this.updateCityOptions();
  },

  updateCityOptions() {
    const stateSelect = document.getElementById('filter-state-select');
    const citySelect = document.getElementById('filter-city-select');
    if (!stateSelect || !citySelect) return;

    const selectedStateName = stateSelect.value;
    const stateObj = (window.indianStatesData || []).find(s => s.name === selectedStateName);
    
    if (stateObj && stateObj.cities) {
      citySelect.innerHTML = stateObj.cities.map(c => `<option value="${c.name}" ${c.name === this.filters.city ? 'selected' : ''}>${c.name} (${c.listings}+ stays)</option>`).join('');
    } else {
      citySelect.innerHTML = `<option value="Vadodara">Vadodara</option>`;
    }

    this.updateAreaOptions();
  },

  updateAreaOptions() {
    const stateSelect = document.getElementById('filter-state-select');
    const citySelect = document.getElementById('filter-city-select');
    const areaSelect = document.getElementById('filter-area-select');
    if (!stateSelect || !citySelect || !areaSelect) return;

    const stateObj = (window.indianStatesData || []).find(s => s.name === stateSelect.value);
    const cityObj = stateObj && stateObj.cities ? stateObj.cities.find(c => c.name === citySelect.value) : null;

    let optionsHTML = `<option value="">All Areas in ${citySelect.value}</option>`;
    if (cityObj && cityObj.popularAreas) {
      optionsHTML += cityObj.popularAreas.map(a => `<option value="${a}" ${a === this.filters.area ? 'selected' : ''}>${a}</option>`).join('');
    }
    areaSelect.innerHTML = optionsHTML;
  },

  handleNaturalSearch(inputQuery) {
    const parsed = AIAssistant.parseNaturalQuery(inputQuery);
    if (!parsed) return;

    // Show AI chip in UI
    const aiBanner = document.getElementById('ai-search-feedback-banner');
    const aiText = document.getElementById('ai-search-feedback-text');
    if (aiBanner && aiText) {
      aiText.innerText = `🤖 Applied: ${parsed.summaryText}`;
      aiBanner.classList.remove('hidden');
    }

    // Merge into this.filters
    if (parsed.appliedFilters.city) this.filters.city = parsed.appliedFilters.city;
    if (parsed.appliedFilters.area) this.filters.area = parsed.appliedFilters.area;
    if (parsed.appliedFilters.gender) this.filters.gender = parsed.appliedFilters.gender;
    if (parsed.appliedFilters.maxBudget) this.filters.maxBudget = parsed.appliedFilters.maxBudget;
    if (parsed.appliedFilters.facilities) this.filters.facilities = parsed.appliedFilters.facilities;
    if (parsed.appliedFilters.type) this.filters.roomType = parsed.appliedFilters.type;

    // Reflect to UI controls
    const budgetSlider = document.getElementById('filter-budget-slider');
    const budgetVal = document.getElementById('filter-budget-val');
    if (budgetSlider && this.filters.maxBudget) {
      budgetSlider.value = this.filters.maxBudget;
      if (budgetVal) budgetVal.innerText = `₹${this.filters.maxBudget.toLocaleString('en-IN')}`;
    }

    this.applyFiltersAndRender();
  },

  applyFiltersAndRender() {
    const allListings = Store.getAllListings();
    const container = document.getElementById('search-results-grid');
    const counter = document.getElementById('search-results-count');
    if (!container) return;

    // Filter Logic
    let results = allListings.filter(item => {
      // City
      if (this.filters.city && item.city.toLowerCase() !== this.filters.city.toLowerCase()) {
        return false;
      }
      // Area
      if (this.filters.area && !item.area.toLowerCase().includes(this.filters.area.toLowerCase())) {
        return false;
      }
      // Budget
      if (this.filters.maxBudget && item.price > this.filters.maxBudget) {
        return false;
      }
      // Room Type
      if (this.filters.roomType && this.filters.roomType !== 'all' && item.type !== this.filters.roomType) {
        return false;
      }
      // Gender
      if (this.filters.gender && this.filters.gender !== 'all' && item.gender !== this.filters.gender) {
        return false;
      }
      // Verified only
      if (this.filters.verifiedOnly && !item.verified) {
        return false;
      }
      // Min Rating
      if (this.filters.minRating > 0 && item.rating < this.filters.minRating) {
        return false;
      }
      // Food Type
      if (this.filters.foodType && this.filters.foodType !== 'all') {
        if (this.filters.foodType === 'Veg' && item.foodType !== 'Veg') return false;
        if (this.filters.foodType === 'Non-Veg' && item.foodType !== 'Both') return false;
      }
      // Facilities
      if (this.filters.facilities && this.filters.facilities.length > 0) {
        const hasAll = this.filters.facilities.every(f => item.facilities.includes(f));
        if (!hasAll) return false;
      }
      return true;
    });

    // Sorting
    if (this.filters.sortBy === 'price_asc') {
      results.sort((a, b) => a.price - b.price);
    } else if (this.filters.sortBy === 'price_desc') {
      results.sort((a, b) => b.price - a.price);
    } else if (this.filters.sortBy === 'rating_desc') {
      results.sort((a, b) => b.rating - a.rating);
    }

    // Update Counter
    if (counter) {
      counter.innerText = `${results.length} stays available in ${this.filters.city}`;
    }

    if (results.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-20 h-20 bg-[#FAF5EE] dark:bg-[#201F30] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            🔍
          </div>
          <h3 class="font-bold text-lg text-[#1F1B2E] dark:text-white mb-2">No stays match your current filters</h3>
          <p class="text-sm text-gray-500 max-w-md mx-auto mb-6">Try expanding your budget slider or clearing specific amenities to see more listings in ${this.filters.city}.</p>
          <button onclick="App.resetFilters()" class="btn-primary">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = results.map(listing => this.createStayCardHTML(listing, true)).join('');
  },

  resetFilters() {
    this.filters = {
      state: "Gujarat",
      city: "Vadodara",
      area: "",
      maxBudget: 20000,
      roomType: "all",
      gender: "all",
      sharing: [],
      foodType: "all",
      facilities: [],
      verifiedOnly: false,
      minRating: 0,
      sortBy: "recommended"
    };

    const budgetSlider = document.getElementById('filter-budget-slider');
    const budgetVal = document.getElementById('filter-budget-val');
    if (budgetSlider) budgetSlider.value = 20000;
    if (budgetVal) budgetVal.innerText = '₹20,000';

    const aiBanner = document.getElementById('ai-search-feedback-banner');
    if (aiBanner) aiBanner.classList.add('hidden');

    this.populateFilterDropdowns();
    this.applyFiltersAndRender();
  },

  // 7. PG Details Screen Renderer
  renderDetailsScreen(listing) {
    const container = document.getElementById('screen-details');
    if (!container) return;

    this.activeLightboxPhotos = listing.photos;
    const isSaved = Store.isPgSaved(listing.id);

    // Score calculations
    const cat = listing.categoryScores || { cleanliness: 4.5, food: 4.3, safety: 4.7, valueForMoney: 4.5 };

    container.innerHTML = `
      <div class="app-container py-6 max-w-5xl">
        <!-- Back Navigation & Actions Header -->
        <div class="flex items-center justify-between mb-4">
          <button onclick="window.history.back ? App.navigateTo('search') : App.navigateTo('home')" class="btn-secondary py-2 px-3 text-xs">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Back to Results
          </button>

          <div class="flex items-center gap-2">
            <button onclick="App.shareListing('${listing.id}')" class="btn-secondary py-2 px-3 text-xs" title="Share Stay">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              Share
            </button>
            <button onclick="App.toggleSave('${listing.id}', event)" class="btn-save-heart ${isSaved ? 'is-saved' : ''}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </button>
          </div>
        </div>

        <!-- 1. Photo Gallery Grid with Lightbox Triggers -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6 rounded-3xl overflow-hidden shadow-sm">
          <div class="md:col-span-2 h-72 md:h-96 relative cursor-pointer group" onclick="App.openLightbox(0)">
            <img src="${listing.photos[0]}" alt="${listing.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
            <span class="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">Bedroom View</span>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-1 gap-3 md:col-span-1">
            <div class="h-36 md:h-[186px] relative cursor-pointer group" onclick="App.openLightbox(1)">
              <img src="${listing.photos[1]}" alt="Washroom" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
              <span class="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">Washroom</span>
            </div>
            <div class="h-36 md:h-[186px] relative cursor-pointer group" onclick="App.openLightbox(2)">
              <img src="${listing.photos[2]}" alt="Dining & Kitchen" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
              <span class="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">Mess / Kitchen</span>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-1 gap-3 md:col-span-1">
            <div class="h-36 md:h-[186px] relative cursor-pointer group" onclick="App.openLightbox(3)">
              <img src="${listing.photos[3]}" alt="Common Hall" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
              <span class="absolute bottom-2 left-2 bg-black/60 text-white text-[11px] font-bold px-2 py-0.5 rounded-full">Study / Hall</span>
            </div>
            <div class="h-36 md:h-[186px] relative cursor-pointer group bg-gray-900" onclick="App.openLightbox(0)">
              <img src="${listing.photos[listing.photos.length - 1]}" alt="Exterior" class="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
              <div class="absolute inset-0 flex flex-col items-center justify-center text-white font-bold text-sm">
                <svg class="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                View all photos (${listing.photos.length})
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Header Information & Badges -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div class="lg:col-span-2">
            <div class="flex flex-wrap items-center gap-2 mb-2">
              ${listing.verified ? `<span class="badge-verified"><svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Physically Verified</span>` : ''}
              <span class="badge-gender ${listing.gender === 'Girls' ? 'badge-gender-girls' : listing.gender === 'Boys' ? 'badge-gender-boys' : 'badge-gender-coed'}">${listing.gender} PG</span>
              <span class="badge-rating text-xs">
                <svg class="w-3.5 h-3.5" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ${listing.rating} (${listing.reviewCount} Reviews)
              </span>
            </div>

            <h1 class="text-2xl md:text-3xl font-extrabold text-[#1F1B2E] dark:text-white mb-2">${listing.name}</h1>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">${listing.tagline}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-6">
              <span>📍 ${listing.address}</span>
            </p>

            <!-- Video Tour Button if available -->
            <button onclick="App.openVideoTourModal('${listing.videoTourUrl || ''}')" class="btn-secondary text-xs mb-8">
              <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              Watch Video / 360° Walkthrough
            </button>

            <!-- 3. Rent & Deposits Breakdown Matrix -->
            <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl p-5 border border-[#F0E6D8] dark:border-[#2D2B3F] mb-8 shadow-xs">
              <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white mb-4 flex items-center gap-2">
                <span class="text-lg">💰</span> Rent & Financial Policy Breakdown
              </h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-gray-400 block mb-1">Security Deposit</span>
                  <span class="font-extrabold text-[#1F1B2E] dark:text-white text-sm">₹${listing.deposit.toLocaleString('en-IN')} (100% Refundable)</span>
                </div>
                <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-gray-400 block mb-1">Maintenance</span>
                  <span class="font-extrabold text-[#1F1B2E] dark:text-white text-sm">₹${listing.maintenance}/month</span>
                </div>
                <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-gray-400 block mb-1">Electricity Charges</span>
                  <span class="font-extrabold text-[#1F1B2E] dark:text-white text-sm">${listing.electricity}</span>
                </div>
                <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-gray-400 block mb-1">Water & RO Charges</span>
                  <span class="font-extrabold text-[#1F1B2E] dark:text-white text-sm">${listing.waterCharges}</span>
                </div>
                <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-gray-400 block mb-1">Notice Period</span>
                  <span class="font-extrabold text-[#1F1B2E] dark:text-white text-sm">${listing.noticePeriod}</span>
                </div>
                <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-gray-400 block mb-1">Lock-in Period</span>
                  <span class="font-extrabold text-[#1F1B2E] dark:text-white text-sm">${listing.lockInPeriod}</span>
                </div>
              </div>
            </div>

            <!-- 4. Rooms and Sharing Availability -->
            <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl p-5 border border-[#F0E6D8] dark:border-[#2D2B3F] mb-8 shadow-xs">
              <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white mb-4 flex items-center gap-2">
                <span class="text-lg">🛏️</span> Available Sharing Options & Bed Status
              </h3>
              <div class="space-y-4">
                ${listing.sharingOptions.map(opt => `
                  <div class="p-4 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-extrabold text-sm text-[#1F1B2E] dark:text-white">${opt.type} Room</span>
                        <span class="text-[11px] font-bold text-green-700 bg-green-100 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 rounded-full">${opt.availableBeds} beds available</span>
                      </div>
                      <p class="text-xs text-gray-500 mt-1">Total capacity: ${opt.totalBeds} beds</p>
                    </div>

                    <div class="flex items-center justify-between sm:justify-end gap-4">
                      <div>
                        <span class="text-base font-extrabold text-[#5B5BD6] dark:text-[#7575FF]">₹${opt.rent.toLocaleString('en-IN')}</span>
                        <span class="text-xs text-gray-400">/bed/mo</span>
                      </div>
                      <button onclick="App.openBookingModal('${listing.id}', '${opt.type}', ${opt.rent})" class="btn-primary py-1.5 px-3 text-xs">
                        Select
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 5. Current Tenants Mix (Anonymized) -->
            ${listing.tenantsInfo ? `
              <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl p-5 border border-[#F0E6D8] dark:border-[#2D2B3F] mb-8 shadow-xs">
                <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white mb-3 flex items-center gap-2">
                  <span class="text-lg">👥</span> Current Tenants Community (Anonymized)
                </h3>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                    <span class="text-gray-400 block mb-1">Student Ratio</span>
                    <span class="font-bold text-[#1F1B2E] dark:text-white">${listing.tenantsInfo.studentRatio}</span>
                  </div>
                  <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                    <span class="text-gray-400 block mb-1">Working Ratio</span>
                    <span class="font-bold text-[#1F1B2E] dark:text-white">${listing.tenantsInfo.workingRatio}</span>
                  </div>
                  <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                    <span class="text-gray-400 block mb-1">Community Vibe</span>
                    <span class="font-bold text-[#1F1B2E] dark:text-white">${listing.tenantsInfo.atmosphere}</span>
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- 6. Weekly Food Menu Matrix -->
            ${listing.weeklyMenu ? `
              <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl p-5 border border-[#F0E6D8] dark:border-[#2D2B3F] mb-8 shadow-xs">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white flex items-center gap-2">
                    <span class="text-lg">🍽️</span> Weekly Food Menu (${listing.foodType} Kitchen)
                  </h3>
                  <span class="text-xs font-bold text-green-700 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">4 Meals Included</span>
                </div>

                <!-- Day Selector Tabs -->
                <div class="flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-none" id="menu-day-tabs">
                  ${Object.keys(listing.weeklyMenu).map((day, idx) => `
                    <button onclick="App.switchMenuDay('${day}')" class="menu-tab-btn ${idx === 0 ? 'active' : ''}" data-day="${day}">
                      ${day}
                    </button>
                  `).join('')}
                </div>

                <!-- Active Day Meal Content -->
                <div id="active-day-menu-container" class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  ${this.renderDayMenuHTML(listing.weeklyMenu['Monday'])}
                </div>
              </div>
            ` : ''}

            <!-- 7. House Rules & Timings -->
            <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl p-5 border border-[#F0E6D8] dark:border-[#2D2B3F] mb-8 shadow-xs">
              <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white mb-4 flex items-center gap-2">
                <span class="text-lg">📜</span> House Rules & Safety Policies
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div class="flex items-start gap-2.5 p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-base">⏰</span>
                  <div>
                    <strong class="block text-[#1F1B2E] dark:text-white">Gate Closing Timing</strong>
                    <span class="text-gray-500">${listing.houseRules.gateTiming}</span>
                  </div>
                </div>
                <div class="flex items-start gap-2.5 p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-base">🚪</span>
                  <div>
                    <strong class="block text-[#1F1B2E] dark:text-white">Visitors Policy</strong>
                    <span class="text-gray-500">${listing.houseRules.visitors}</span>
                  </div>
                </div>
                <div class="flex items-start gap-2.5 p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-base">🚭</span>
                  <div>
                    <strong class="block text-[#1F1B2E] dark:text-white">Smoking & Drinking</strong>
                    <span class="text-gray-500">${listing.houseRules.smokingDrinking}</span>
                  </div>
                </div>
                <div class="flex items-start gap-2.5 p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
                  <span class="text-base">🐾</span>
                  <div>
                    <strong class="block text-[#1F1B2E] dark:text-white">Pets Allowed</strong>
                    <span class="text-gray-500">${listing.houseRules.pets}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 8. Nearby Colleges, Metro & Landmarks -->
            <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl p-5 border border-[#F0E6D8] dark:border-[#2D2B3F] mb-8 shadow-xs">
              <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white mb-4 flex items-center gap-2">
                <span class="text-lg">📍</span> Nearby Colleges, Transit & Hubs
              </h3>
              <div class="space-y-2.5">
                ${listing.nearbyPlaces.map(p => `
                  <div class="flex items-center justify-between p-3 rounded-xl bg-[#FAF5EE] dark:bg-[#252438] text-xs">
                    <span class="font-bold text-[#1F1B2E] dark:text-white flex items-center gap-2">
                      ${p.type === 'college' ? '🎓' : p.type === 'transit' ? '🚆' : p.type === 'hospital' ? '🏥' : '🛍️'}
                      ${p.name}
                    </span>
                    <span class="font-extrabold text-[#5B5BD6] dark:text-[#7575FF]">${p.distance} away</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 9. Category Rating Scores & Reviews List -->
            <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl p-5 border border-[#F0E6D8] dark:border-[#2D2B3F] mb-8 shadow-xs">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white">Resident Reviews & Scores</h3>
                  <p class="text-xs text-gray-500">Based on ${listing.reviewCount} verified resident feedbacks</p>
                </div>
                <button onclick="App.openReviewModal('${listing.id}')" class="btn-secondary py-1.5 px-3 text-xs">
                  Write Review
                </button>
              </div>

              <!-- Score Bars -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span>Cleanliness & Hygiene</span>
                    <span>${cat.cleanliness} / 5.0</span>
                  </div>
                  <div class="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-green-500 rounded-full" style="width: ${(cat.cleanliness / 5) * 100}%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span>Food Quality & Taste</span>
                    <span>${cat.food} / 5.0</span>
                  </div>
                  <div class="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-yellow-500 rounded-full" style="width: ${(cat.food / 5) * 100}%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span>Safety & Warden Care</span>
                    <span>${cat.safety} / 5.0</span>
                  </div>
                  <div class="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-indigo-500 rounded-full" style="width: ${(cat.safety / 5) * 100}%"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between text-xs font-bold mb-1">
                    <span>Value for Money</span>
                    <span>${cat.valueForMoney} / 5.0</span>
                  </div>
                  <div class="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div class="h-full bg-purple-500 rounded-full" style="width: ${(cat.valueForMoney / 5) * 100}%"></div>
                  </div>
                </div>
              </div>

              <!-- Reviews List -->
              <div class="space-y-4">
                ${listing.reviews.map(rev => `
                  <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl text-xs">
                    <div class="flex items-center justify-between mb-1">
                      <strong class="font-bold text-[#1F1B2E] dark:text-white">${rev.user}</strong>
                      <span class="badge-rating">${rev.rating}★</span>
                    </div>
                    <span class="text-[11px] text-gray-400 block mb-1.5">${rev.role} • ${rev.date}</span>
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed">"${rev.comment}"</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Right Sticky Owner & Booking Card -->
          <div class="lg:col-span-1">
            <div class="sticky top-6 space-y-4">
              <!-- Booking Summary Box -->
              <div class="bg-white dark:bg-[#1E1D2B] rounded-3xl p-6 border border-[#F0E6D8] dark:border-[#2D2B3F] shadow-md">
                <div class="flex items-baseline justify-between mb-4">
                  <div>
                    <span class="text-xs text-gray-400">Monthly Rent</span>
                    <div class="text-2xl font-extrabold text-[#5B5BD6] dark:text-[#7575FF]">₹${listing.price.toLocaleString('en-IN')}</div>
                  </div>
                  <span class="text-xs font-bold text-green-700 bg-green-100 dark:bg-green-900/30 px-2.5 py-1 rounded-full">0 Brokerage</span>
                </div>

                <div class="space-y-3 mb-6">
                  <button onclick="App.openBookingModal('${listing.id}', 'Double', ${listing.price})" class="btn-primary w-full py-3">
                    Book Bed Online
                  </button>
                  <button onclick="App.openScheduleVisitModal('${listing.id}')" class="btn-secondary w-full py-2.5 text-xs">
                    📅 Schedule Free Visit
                  </button>
                </div>

                <!-- Verified Owner Profile Card -->
                <div class="pt-4 border-t border-[#F0E6D8] dark:border-[#2D2B3F]">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-12 h-12 rounded-full bg-[#5B5BD6]/10 text-[#5B5BD6] flex items-center justify-center font-bold text-lg">
                      ${listing.owner ? listing.owner.name.charAt(0) : 'O'}
                    </div>
                    <div>
                      <div class="flex items-center gap-1.5">
                        <h4 class="font-bold text-sm text-[#1F1B2E] dark:text-white">${listing.owner ? listing.owner.name : "Property Host"}</h4>
                        <span class="text-green-500" title="Verified Host">✓</span>
                      </div>
                      <p class="text-xs text-gray-500">${listing.owner ? listing.owner.role : "Owner"}</p>
                    </div>
                  </div>

                  <p class="text-[11px] text-gray-400 mb-3">⚡ ${listing.owner ? listing.owner.responseTime : "Usually responds in minutes"}</p>

                  <div class="grid grid-cols-2 gap-2">
                    <a href="tel:${listing.owner ? listing.owner.phone : ''}" class="btn-success text-xs py-2">
                      📞 Call Owner
                    </a>
                    <a href="https://wa.me/${listing.owner ? listing.owner.whatsapp.replace(/[^0-9]/g, '') : ''}?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(listing.name)}%20via%20StayMate%20AI" target="_blank" class="btn-whatsapp text-xs py-2">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderDayMenuHTML(dayObj) {
    if (!dayObj) return `<p class="col-span-full text-gray-400">Menu not updated</p>`;
    return `
      <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
        <span class="text-gray-400 block mb-0.5">🍳 Breakfast</span>
        <strong class="text-[#1F1B2E] dark:text-white">${dayObj.breakfast}</strong>
      </div>
      <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
        <span class="text-gray-400 block mb-0.5">🍲 Lunch</span>
        <strong class="text-[#1F1B2E] dark:text-white">${dayObj.lunch}</strong>
      </div>
      <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
        <span class="text-gray-400 block mb-0.5">☕ High Tea & Evening Snacks</span>
        <strong class="text-[#1F1B2E] dark:text-white">${dayObj.snacks}</strong>
      </div>
      <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
        <span class="text-gray-400 block mb-0.5">🍛 Dinner</span>
        <strong class="text-[#1F1B2E] dark:text-white">${dayObj.dinner}</strong>
      </div>
    `;
  },

  switchMenuDay(day) {
    const listing = Store.getAllListings().find(l => l.id === this.currentListingId);
    if (!listing || !listing.weeklyMenu) return;

    document.querySelectorAll('#menu-day-tabs .menu-tab-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-day') === day) btn.classList.add('active');
    });

    const container = document.getElementById('active-day-menu-container');
    if (container && listing.weeklyMenu[day]) {
      container.innerHTML = this.renderDayMenuHTML(listing.weeklyMenu[day]);
    }
  },

  // 8. Photo Lightbox Modal
  openLightbox(photoIndex = 0) {
    this.activeLightboxIndex = photoIndex;
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-active-img');
    const counter = document.getElementById('lightbox-counter');
    if (!modal || !img) return;

    img.src = this.activeLightboxPhotos[photoIndex];
    if (counter) counter.innerText = `${photoIndex + 1} of ${this.activeLightboxPhotos.length}`;
    modal.classList.remove('hidden');
  },

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.add('hidden');
  },

  nextLightboxPhoto() {
    if (this.activeLightboxPhotos.length === 0) return;
    this.activeLightboxIndex = (this.activeLightboxIndex + 1) % this.activeLightboxPhotos.length;
    this.openLightbox(this.activeLightboxIndex);
  },

  prevLightboxPhoto() {
    if (this.activeLightboxPhotos.length === 0) return;
    this.activeLightboxIndex = (this.activeLightboxIndex - 1 + this.activeLightboxPhotos.length) % this.activeLightboxPhotos.length;
    this.openLightbox(this.activeLightboxIndex);
  },

  openVideoTourModal(url) {
    if (!url) {
      this.showToast("Video walkthrough being recorded for this property!", "info");
      return;
    }
    const modal = document.getElementById('video-tour-modal');
    const iframe = document.getElementById('video-tour-iframe');
    if (modal && iframe) {
      iframe.src = url;
      modal.classList.remove('hidden');
    }
  },

  closeVideoTourModal() {
    const modal = document.getElementById('video-tour-modal');
    const iframe = document.getElementById('video-tour-iframe');
    if (modal && iframe) {
      iframe.src = '';
      modal.classList.add('hidden');
    }
  },

  // 9. Compare Feature
  toggleCompareCard(listingId, event) {
    if (event) event.stopPropagation();
    const result = Store.addToCompare(listingId);
    if (!result.success) {
      this.showToast(result.message, "info");
    } else {
      this.showToast(`Added to Compare (${result.count}/3)`, "success");
    }
    this.updateCompareBar();
  },

  updateCompareBar() {
    const bar = document.getElementById('compare-floating-bar');
    const countEl = document.getElementById('compare-count-badge');
    const list = Store.getCompareList();

    if (!bar) return;
    if (list.length > 0) {
      bar.classList.remove('hidden');
      if (countEl) countEl.innerText = `${list.length}/3`;
    } else {
      bar.classList.add('hidden');
    }
  },

  renderCompareScreen() {
    const container = document.getElementById('compare-table-container');
    const emptyState = document.getElementById('compare-empty-state');
    const list = Store.getCompareList();
    const allListings = Store.getAllListings();
    const items = list.map(id => allListings.find(l => l.id === id)).filter(Boolean);

    if (!container || !emptyState) return;

    if (items.length === 0) {
      container.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    }

    container.classList.remove('hidden');
    emptyState.classList.add('hidden');

    const facilitiesToCompare = [
      "WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking", "Gym", "CCTV", "Power Backup", "Geyser"
    ];

    // Non-selected listings for quick adding
    const availableToAdd = allListings.filter(l => !list.includes(l.id));

    container.innerHTML = `
      <div class="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-[#1E1D2B] p-4 rounded-2xl border border-[#F0E6D8] dark:border-[#2D2B3F] shadow-xs">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-gray-500">Comparing <strong class="text-[#5B5BD6] font-extrabold">${items.length} of 3</strong> stays side-by-side</span>
        </div>

        <div class="flex items-center gap-2 w-full sm:w-auto">
          ${items.length < 3 ? `
            <select onchange="if(this.value){ App.toggleCompareCard(this.value); App.renderCompareScreen(); this.value=''; }" class="form-input text-xs py-1.5 px-3">
              <option value="">+ Add another PG to compare...</option>
              ${availableToAdd.map(a => `<option value="${a.id}">${a.name} (${a.area}, ₹${a.price}/mo)</option>`).join('')}
            </select>
          ` : `<span class="text-xs text-gray-400 font-bold">Max 3 stays compared</span>`}
        </div>
      </div>

      <div class="overflow-x-auto rounded-3xl shadow-sm border border-[#F0E6D8] dark:border-[#2D2B3F] bg-white dark:bg-[#1E1D2B]">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="border-b border-[#F0E6D8] dark:border-[#2D2B3F] bg-[#FAF5EE] dark:bg-[#252438]">
              <th class="p-4 font-bold text-sm text-[#1F1B2E] dark:text-white w-48 min-w-[160px]">Property</th>
              ${items.map(item => `
                <th class="p-4 font-bold text-sm text-[#1F1B2E] dark:text-white min-w-[220px]">
                  <div class="relative bg-white dark:bg-[#1E1D2B] p-3 rounded-2xl border border-[#F0E6D8] dark:border-[#2D2B3F]">
                    <button onclick="Store.removeFromCompare('${item.id}'); App.renderCompareScreen();" class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-300 flex items-center justify-center font-bold text-xs hover:scale-110 shadow-xs" title="Remove from comparison">✕</button>
                    <img src="${item.photos[0]}" class="w-full h-32 object-cover rounded-xl mb-2" />
                    <div class="flex items-center gap-1.5 mb-1">
                      ${item.verified ? `<span class="badge-verified text-[10px] py-0.5 px-2">Verified</span>` : ''}
                      <span class="badge-gender text-[10px] py-0.5 px-2 ${item.gender === 'Girls' ? 'badge-gender-girls' : item.gender === 'Boys' ? 'badge-gender-boys' : 'badge-gender-coed'}">${item.gender}</span>
                    </div>
                    <h4 class="font-extrabold text-sm truncate" title="${item.name}">${item.name}</h4>
                    <p class="text-[11px] text-gray-500 truncate">📍 ${item.area}, ${item.city}</p>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody class="divide-y divide-[#F0E6D8] dark:divide-[#2D2B3F]">
            <tr>
              <td class="p-4 font-bold text-gray-500">Monthly Rent</td>
              ${items.map(item => `
                <td class="p-4">
                  <span class="text-base font-extrabold text-[#5B5BD6] dark:text-[#7575FF]">₹${item.price.toLocaleString('en-IN')}</span>
                  <span class="text-[11px] text-gray-400">/mo</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-500">Security Deposit</td>
              ${items.map(item => `
                <td class="p-4 font-bold text-gray-700 dark:text-gray-300">
                  ₹${item.deposit.toLocaleString('en-IN')} <span class="text-[10px] text-green-600 block">(100% Refundable)</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-500">Rating & Reviews</td>
              ${items.map(item => `
                <td class="p-4">
                  <span class="badge-rating text-xs">${item.rating}★</span>
                  <span class="text-[11px] text-gray-400 ml-1">(${item.reviewCount} reviews)</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-500">Food / Mess Included</td>
              ${items.map(item => `
                <td class="p-4">
                  <span class="font-bold text-[#1F1B2E] dark:text-white block">${item.facilities.includes('Mess/Food') ? '✅ Yes (4 Meals Daily)' : '❌ Not Included'}</span>
                  <span class="text-[11px] text-gray-400">${item.foodType} Kitchen</span>
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-500">Nearest College / Transit</td>
              ${items.map(item => `
                <td class="p-4 text-gray-700 dark:text-gray-300">
                  ${item.nearbyPlaces && item.nearbyPlaces.length > 0 ? `<strong>${item.nearbyPlaces[0].distance}</strong> from ${item.nearbyPlaces[0].name}` : 'Central location'}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-500">Gate Timings</td>
              ${items.map(item => `
                <td class="p-4 text-gray-700 dark:text-gray-300 font-semibold">${item.houseRules.gateTiming}</td>
              `).join('')}
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-500">Sharing Options</td>
              ${items.map(item => `
                <td class="p-4 space-y-1">
                  ${item.sharingOptions.map(s => `
                    <div class="text-[11px]">
                      <span class="font-bold text-gray-700 dark:text-gray-300">${s.type}:</span> ₹${s.rent.toLocaleString('en-IN')}
                    </div>
                  `).join('')}
                </td>
              `).join('')}
            </tr>
            <tr>
              <td class="p-4 font-bold text-gray-500">Notice & Lock-in</td>
              ${items.map(item => `
                <td class="p-4 text-gray-700 dark:text-gray-300">
                  <div>Notice: <strong>${item.noticePeriod}</strong></div>
                  <div class="text-gray-400 text-[11px]">Lock-in: ${item.lockInPeriod}</div>
                </td>
              `).join('')}
            </tr>
            ${facilitiesToCompare.map(f => `
              <tr>
                <td class="p-4 font-bold text-gray-500">${f}</td>
                ${items.map(item => `
                  <td class="p-4">
                    ${item.facilities.includes(f) 
                      ? `<span class="inline-flex items-center gap-1 text-green-600 font-extrabold text-sm"><span class="w-5 h-5 rounded-full bg-green-100 dark:bg-green-950/50 flex items-center justify-center text-xs">✓</span> Available</span>` 
                      : `<span class="inline-flex items-center gap-1 text-gray-400 font-bold"><span class="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">—</span> No</span>`}
                  </td>
                `).join('')}
              </tr>
            `).join('')}
            <tr class="bg-[#FAF5EE] dark:bg-[#252438]">
              <td class="p-4 font-bold text-gray-500">Quick Actions</td>
              ${items.map(item => `
                <td class="p-4 space-y-2">
                  <button onclick="App.navigateToDetails('${item.id}')" class="btn-primary w-full py-2 text-xs">
                    View Details →
                  </button>
                  <button onclick="App.openBookingModal('${item.id}', 'Double', ${item.price})" class="btn-secondary w-full py-1.5 text-xs">
                    Book Online
                  </button>
                </td>
              `).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  },

  // 10. Booking & Contact Workflow
  openBookingModal(listingId, roomType = "Double", rent = 8000) {
    const listing = Store.getAllListings().find(l => l.id === listingId);
    if (!listing) return;

    const modal = document.getElementById('booking-modal');
    if (!modal) return;

    // Set form fields
    document.getElementById('booking-pg-id').value = listing.id;
    document.getElementById('booking-pg-name').innerText = listing.name;
    document.getElementById('booking-pg-area').innerText = `${listing.area}, ${listing.city}`;
    document.getElementById('booking-room-type').value = roomType;
    document.getElementById('booking-rent-amount').innerText = `₹${rent.toLocaleString('en-IN')}`;

    // Set default checkin date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    document.getElementById('booking-checkin-date').value = tomorrowStr;
    document.getElementById('booking-checkin-date').min = tomorrowStr;

    // Set default checkout date (1 month later)
    const nextMonth = new Date(tomorrow);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    document.getElementById('booking-checkout-date').value = nextMonth.toISOString().split('T')[0];

    // Summary calculation
    const deposit = listing.deposit || rent;
    const token = 2000;
    document.getElementById('booking-deposit-summary').innerText = `₹${deposit.toLocaleString('en-IN')}`;
    document.getElementById('booking-token-due').innerText = `₹${token.toLocaleString('en-IN')}`;

    // Owner card
    if (listing.owner) {
      document.getElementById('booking-owner-name').innerText = listing.owner.name;
      document.getElementById('booking-owner-phone').innerText = listing.owner.phone;
      document.getElementById('booking-call-btn').href = `tel:${listing.owner.phone}`;
      document.getElementById('booking-whatsapp-btn').href = `https://wa.me/${listing.owner.whatsapp.replace(/[^0-9]/g, '')}?text=Hi,%20I%20am%20booking%20at%20${encodeURIComponent(listing.name)}`;
    }

    modal.classList.remove('hidden');
  },

  confirmBookingSubmit() {
    const pgId = document.getElementById('booking-pg-id').value;
    const roomType = document.getElementById('booking-room-type').value;
    const checkIn = document.getElementById('booking-checkin-date').value;
    const checkOut = document.getElementById('booking-checkout-date').value;
    const fullName = document.getElementById('booking-user-fullname').value;
    const phone = document.getElementById('booking-user-phone').value;

    if (!fullName || !phone) {
      this.showToast("Please enter your full name and phone number", "error");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      this.showToast("Check-out date must be after check-in date", "error");
      return;
    }

    const listing = Store.getAllListings().find(l => l.id === pgId);
    const rent = listing ? listing.price : 8000;
    const deposit = listing ? listing.deposit : rent;

    const booking = Store.addBooking({
      pgId,
      pgName: listing ? listing.name : "StayMate Stay",
      pgArea: listing ? `${listing.area}, ${listing.city}` : "Vadodara",
      roomType,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      monthlyRent: rent,
      depositAmount: deposit,
      tokenPaid: 2000,
      totalDue: rent + deposit - 2000,
      ownerName: listing && listing.owner ? listing.owner.name : "Host",
      ownerPhone: listing && listing.owner ? listing.owner.phone : ""
    });

    // Close booking modal
    document.getElementById('booking-modal').classList.add('hidden');

    // Show Confirmed Screen
    this.renderBookingConfirmedScreen(booking);
  },

  openScheduleVisitModal(listingId) {
    const listing = Store.getAllListings().find(l => l.id === listingId);
    if (!listing) return;

    const modal = document.getElementById('schedule-visit-modal');
    if (!modal) return;

    document.getElementById('visit-pg-id').value = listing.id;
    document.getElementById('visit-pg-title').innerText = listing.name;
    document.getElementById('visit-owner-info').innerText = `Host: ${listing.owner ? listing.owner.name : 'Manager'}`;

    // Date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById('visit-date').value = tomorrow.toISOString().split('T')[0];

    modal.classList.remove('hidden');
  },

  confirmVisitSubmit() {
    const pgId = document.getElementById('visit-pg-id').value;
    const visitDate = document.getElementById('visit-date').value;
    const visitTime = document.getElementById('visit-time').value;
    const listing = Store.getAllListings().find(l => l.id === pgId);

    Store.addNotification({
      title: "Visit Scheduled! 📅",
      message: `Your visit to ${listing ? listing.name : 'Stay'} is scheduled for ${visitDate} at ${visitTime}.`,
      time: "Just now",
      read: false
    });

    document.getElementById('schedule-visit-modal').classList.add('hidden');
    this.showToast("Visit scheduled successfully! Warden notified.", "success");
  },

  // 11. Booking Confirmed Screen
  renderBookingConfirmedScreen(booking) {
    const container = document.getElementById('screen-booking-confirmed');
    if (!container) return;

    container.innerHTML = `
      <div class="app-container py-12 max-w-xl text-center">
        <!-- Animated Confetti / Success SVG -->
        <div class="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <div class="w-20 h-20 bg-green-100 dark:bg-green-950/40 rounded-full flex items-center justify-center text-green-600 text-4xl animate-bounce">
            ✓
          </div>
        </div>

        <h2 class="text-3xl font-extrabold text-[#1F1B2E] dark:text-white mb-2">Booking Confirmed! 🎉</h2>
        <p class="text-sm text-gray-500 mb-6">Your token payment of ₹${booking.tokenPaid.toLocaleString('en-IN')} is recorded. Your bed is officially reserved!</p>

        <!-- Summary Card -->
        <div class="bg-white dark:bg-[#1E1D2B] rounded-3xl p-6 border border-[#F0E6D8] dark:border-[#2D2B3F] text-left shadow-md mb-8">
          <div class="flex justify-between items-center pb-4 mb-4 border-b border-[#F0E6D8] dark:border-[#2D2B3F]">
            <div>
              <span class="text-xs text-gray-400">Booking Reference</span>
              <div class="font-extrabold text-sm text-[#5B5BD6]">${booking.id}</div>
            </div>
            <span class="badge-verified">Confirmed</span>
          </div>

          <div class="space-y-3 text-xs">
            <div class="flex justify-between">
              <span class="text-gray-400">Stay Name:</span>
              <strong class="text-[#1F1B2E] dark:text-white">${booking.pgName}</strong>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Room Type:</span>
              <strong class="text-[#1F1B2E] dark:text-white">${booking.roomType}</strong>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Check-in Date:</span>
              <strong class="text-[#1F1B2E] dark:text-white">${booking.checkInDate}</strong>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Check-out Date:</span>
              <strong class="text-[#1F1B2E] dark:text-white">${booking.checkOutDate}</strong>
            </div>
            <div class="flex justify-between pt-2 border-t border-[#F0E6D8] dark:border-[#2D2B3F]">
              <span class="text-gray-400 font-bold">Remaining Due at Check-in:</span>
              <strong class="text-green-600 text-sm font-extrabold">₹${booking.totalDue.toLocaleString('en-IN')}</strong>
            </div>
          </div>
        </div>

        <!-- Rating Feedback Prompt -->
        <div class="bg-[#FAF5EE] dark:bg-[#201F30] rounded-2xl p-5 mb-8 text-center">
          <h4 class="font-bold text-sm text-[#1F1B2E] dark:text-white mb-2">How was your booking experience?</h4>
          <div class="flex justify-center gap-2 text-2xl text-yellow-400 cursor-pointer mb-2">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <p class="text-[11px] text-gray-400">Tap to rate StayMate AI</p>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row gap-3">
          <button onclick="App.navigateTo('profile')" class="btn-primary flex-1 py-3">
            View in My Stays
          </button>
          <button onclick="App.downloadReceipt('${booking.id}')" class="btn-secondary flex-1 py-3">
            📄 Download Pass Slip
          </button>
          <button onclick="App.navigateTo('home')" class="btn-secondary flex-1 py-3">
            Back to Home
          </button>
        </div>
      </div>
    `;
    this.navigateTo('booking-confirmed');
  },

  downloadReceipt(bookingId) {
    const booking = Store.getBookings().find(b => b.id === bookingId);
    if (!booking) return;

    const receiptContent = `
========================================
       STAYMATE AI - BOOKING PASS
  "Find Your Perfect Stay, Anywhere"
========================================
Booking Reference: ${booking.id}
Date: ${booking.bookedAt}
Status: CONFIRMED

TENANT DETAILS:
Name: ${Store.getUser().name}
Phone: ${Store.getUser().phone}

PROPERTY DETAILS:
Property: ${booking.pgName}
Location: ${booking.pgArea}
Room Type: ${booking.roomType}
Check-in: ${booking.checkInDate}
Check-out: ${booking.checkOutDate}

PAYMENT SUMMARY:
Token Paid Online: INR ${booking.tokenPaid}
Monthly Rent: INR ${booking.monthlyRent}
Security Deposit: INR ${booking.depositAmount}
Remaining Due on Move-In: INR ${booking.totalDue}

HOST CONTACT:
Host Name: ${booking.ownerName}
Contact: ${booking.ownerPhone}

24x7 Support: support@staymate.ai | +91 800 247 8888
========================================
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `StayMate-Booking-${booking.id}.txt`;
    a.click();
    this.showToast("Booking pass downloaded!", "success");
  },

  // 12. Saved PGs Screen
  renderSavedScreen() {
    const container = document.getElementById('saved-listings-grid');
    const emptyState = document.getElementById('saved-empty-state');
    if (!container || !emptyState) return;

    const savedIds = Store.getSavedPgIds();
    const allListings = Store.getAllListings();
    const savedListings = allListings.filter(l => savedIds.includes(l.id));

    if (savedListings.length === 0) {
      container.classList.add('hidden');
      emptyState.classList.remove('hidden');
      return;
    }

    container.classList.remove('hidden');
    emptyState.classList.add('hidden');
    container.innerHTML = savedListings.map(l => this.createStayCardHTML(l, false)).join('');
  },

  toggleSave(listingId, event) {
    if (event) event.stopPropagation();
    const isSaved = Store.toggleSavePg(listingId);
    this.updateSavedBadge();

    // Toggle heart UI if visible
    document.querySelectorAll(`.btn-save-heart[onclick*="${listingId}"]`).forEach(btn => {
      if (isSaved) btn.classList.add('is-saved');
      else btn.classList.remove('is-saved');
    });

    if (this.currentScreen === 'saved') {
      this.renderSavedScreen();
    }

    this.showToast(isSaved ? "Saved to your Wishlist ❤️" : "Removed from Wishlist", "info");
  },

  updateSavedBadge() {
    const count = Store.getSavedPgIds().length;
    const badges = document.querySelectorAll('.saved-count-badge');
    badges.forEach(b => {
      b.innerText = count;
      if (count > 0) b.classList.remove('hidden');
      else b.classList.add('hidden');
    });
  },

  // 13. Roommates Screen
  renderRoommatesScreen() {
    const container = document.getElementById('roommates-feed-container');
    if (!container) return;

    const posts = Store.getAllRoommatePosts();
    container.innerHTML = posts.map(post => `
      <div class="stay-card p-5">
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex items-center gap-3">
            <img src="${post.avatar}" alt="${post.author}" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 class="font-bold text-sm text-[#1F1B2E] dark:text-white">${post.author}</h4>
              <p class="text-xs text-gray-500">${post.profession} • ${post.postedDate}</p>
            </div>
          </div>
          <span class="text-xs font-extrabold px-3 py-1 rounded-full ${post.type === 'Bed Available' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'}">
            ${post.type}
          </span>
        </div>

        <h3 class="font-bold text-base text-[#1F1B2E] dark:text-white mb-2">${post.headline}</h3>
        <p class="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">${post.description}</p>

        <!-- Details Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 text-xs">
          <div class="p-2.5 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
            <span class="text-gray-400 block text-[10px]">Location</span>
            <strong class="text-[#1F1B2E] dark:text-white">${post.area}, ${post.city}</strong>
          </div>
          <div class="p-2.5 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
            <span class="text-gray-400 block text-[10px]">Budget</span>
            <strong class="text-[#5B5BD6] dark:text-[#7575FF]">₹${post.budget.toLocaleString('en-IN')}/mo</strong>
          </div>
          <div class="p-2.5 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
            <span class="text-gray-400 block text-[10px]">Preference</span>
            <strong class="text-[#1F1B2E] dark:text-white">${post.gender}</strong>
          </div>
          <div class="p-2.5 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
            <span class="text-gray-400 block text-[10px]">Move-in</span>
            <strong class="text-[#1F1B2E] dark:text-white">${post.moveInDate}</strong>
          </div>
        </div>

        <!-- Lifestyle Habits Tags -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${post.habits.map(h => `<span class="text-[11px] px-2 py-0.5 rounded-full bg-white dark:bg-[#201F30] border border-[#F0E6D8] dark:border-[#2D2B3F] text-gray-600 dark:text-gray-300">✨ ${h}</span>`).join('')}
        </div>

        <!-- Contact Actions -->
        <div class="flex items-center gap-2 pt-3 border-t border-[#F0E6D8] dark:border-[#2D2B3F]">
          <a href="tel:${post.phone}" class="btn-secondary flex-1 text-xs py-2">
            📞 Call
          </a>
          <a href="https://wa.me/${post.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(post.author)},%20I%20saw%20your%20roommate%20post%20on%20StayMate%20AI" target="_blank" class="btn-whatsapp flex-1 text-xs py-2">
            💬 WhatsApp
          </a>
        </div>
      </div>
    `).join('');
  },

  openPostRoommateModal() {
    const modal = document.getElementById('post-roommate-modal');
    if (modal) modal.classList.remove('hidden');
  },

  submitRoommatePost() {
    const author = document.getElementById('rm-author-name').value;
    const headline = document.getElementById('rm-headline').value;
    const type = document.getElementById('rm-type-select').value;
    const gender = document.getElementById('rm-gender-select').value;
    const city = document.getElementById('rm-city').value;
    const area = document.getElementById('rm-area').value;
    const budget = parseInt(document.getElementById('rm-budget').value, 10);
    const moveInDate = document.getElementById('rm-move-date').value;
    const habitsStr = document.getElementById('rm-habits').value;
    const desc = document.getElementById('rm-desc').value;
    const phone = document.getElementById('rm-phone').value;

    if (!author || !headline || !city || !budget || !phone) {
      this.showToast("Please fill all required fields", "error");
      return;
    }

    const habits = habitsStr ? habitsStr.split(',').map(s => s.trim()) : ["Non-smoker", "Friendly"];

    Store.addRoommatePost({
      author,
      headline,
      type,
      gender,
      city,
      area,
      budget,
      moveInDate: moveInDate || "Immediate",
      profession: "StayMate Community Member",
      habits,
      description: desc,
      phone,
      whatsapp: phone
    });

    document.getElementById('post-roommate-modal').classList.add('hidden');
    this.renderRoommatesScreen();
    this.showToast("Roommate post published! 🎉", "success");
  },

  // 14. State-Wise Browsing
  renderStateWiseScreen() {
    const container = document.getElementById('states-grid-container');
    if (!container) return;

    const states = window.indianStatesData || [];
    container.innerHTML = states.map(state => `
      <div onclick="App.selectStateForSearch('${state.name}')" class="stay-card group cursor-pointer overflow-hidden">
        <div class="h-40 relative">
          <img src="${state.heroImage}" alt="${state.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div class="absolute bottom-3 left-3 text-white">
            <h3 class="font-extrabold text-lg">${state.name}</h3>
            <span class="text-xs text-gray-200">${state.listingCount}+ stays listed</span>
          </div>
        </div>

        <div class="p-4 bg-white dark:bg-[#1E1D2B]">
          <span class="text-[11px] font-bold text-gray-400 block mb-2">Popular Cities:</span>
          <div class="flex flex-wrap gap-1.5">
            ${state.cities.map(c => `
              <span class="text-xs px-2.5 py-1 rounded-lg bg-[#FAF5EE] dark:bg-[#252438] text-gray-700 dark:text-gray-300 font-bold hover:bg-[#5B5BD6] hover:text-white transition-colors">${c.name}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  },

  selectStateForSearch(stateName) {
    this.filters.state = stateName;
    const stateObj = (window.indianStatesData || []).find(s => s.name === stateName);
    if (stateObj && stateObj.cities.length > 0) {
      this.filters.city = stateObj.cities[0].name;
    }
    this.navigateTo('search');
  },

  // 15. State-Wise Hostels Directory
  renderHostelsScreen() {
    const container = document.getElementById('hostels-directory-container');
    if (!container) return;

    const hostels = window.stateHostelsDirectory || [];
    container.innerHTML = hostels.map(h => `
      <div class="stay-card p-6">
        <div class="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1.5">
              <span class="text-xs font-extrabold px-3 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">${h.type}</span>
              <span class="badge-gender badge-gender-girls">${h.category}</span>
            </div>
            <h3 class="text-lg font-extrabold text-[#1F1B2E] dark:text-white">${h.name}</h3>
            <p class="text-xs text-gray-500">📍 ${h.address}</p>
          </div>
          <div class="sm:text-right">
            <span class="text-xs text-gray-400">Monthly Subsidized Fee</span>
            <div class="text-base font-extrabold text-green-600">${h.fees}</div>
          </div>
        </div>

        <!-- Eligibility & Admission Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs">
          <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
            <strong class="text-gray-700 dark:text-gray-300 block mb-1">🎯 Eligibility:</strong>
            <p class="text-gray-500 leading-relaxed">${h.eligibility}</p>
          </div>
          <div class="p-3 bg-[#FAF5EE] dark:bg-[#252438] rounded-xl">
            <strong class="text-gray-700 dark:text-gray-300 block mb-1">📋 Admission Procedure:</strong>
            <p class="text-gray-500 leading-relaxed">${h.admissionProcess}</p>
          </div>
        </div>

        <!-- Facilities -->
        <div class="flex flex-wrap gap-1.5 mb-4">
          ${h.facilities.map(f => `<span class="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-[#201F30] border border-[#F0E6D8] dark:border-[#2D2B3F] text-gray-600 dark:text-gray-300">✓ ${f}</span>`).join('')}
        </div>

        <!-- Contact Warden -->
        <div class="flex items-center justify-between pt-3 border-t border-[#F0E6D8] dark:border-[#2D2B3F] text-xs">
          <div>
            <span class="text-gray-400">Contact:</span>
            <strong class="text-[#1F1B2E] dark:text-white"> ${h.contactPerson}</strong>
          </div>
          <a href="tel:${h.phone}" class="btn-success py-1.5 px-3 text-xs">
            📞 Call Hostel Desk
          </a>
        </div>
      </div>
    `).join('');
  },

  // 16. Post Your PG Multi-Step Wizard
  initPostPgWizard() {
    this.currentPostStep = 1;
    this.showPostStep(1);
  },

  showPostStep(step) {
    this.currentPostStep = step;
    document.querySelectorAll('.wizard-step-panel').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById(`wizard-step-${step}`);
    if (target) target.classList.remove('hidden');

    // Update Step Indicators
    document.querySelectorAll('.wizard-step-indicator').forEach((ind, idx) => {
      if (idx + 1 < step) {
        ind.className = 'wizard-step-indicator w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-xs';
        ind.innerText = '✓';
      } else if (idx + 1 === step) {
        ind.className = 'wizard-step-indicator w-8 h-8 rounded-full bg-[#5B5BD6] text-white flex items-center justify-center font-bold text-xs';
        ind.innerText = step;
      } else {
        ind.className = 'wizard-step-indicator w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-500 flex items-center justify-center font-bold text-xs';
        ind.innerText = idx + 1;
      }
    });
  },

  submitOwnerPgListing() {
    const name = document.getElementById('owner-pg-name').value;
    const type = document.getElementById('owner-pg-type').value;
    const gender = document.getElementById('owner-pg-gender').value;
    const city = document.getElementById('owner-pg-city').value;
    const area = document.getElementById('owner-pg-area').value;
    const address = document.getElementById('owner-pg-address').value;
    const rent = parseInt(document.getElementById('owner-pg-rent').value, 10);
    const deposit = parseInt(document.getElementById('owner-pg-deposit').value, 10);
    const gateTiming = document.getElementById('owner-pg-gate').value;

    if (!name || !city || !area || !rent) {
      this.showToast("Please fill all property details", "error");
      return;
    }

    const defaultPhotos = [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ];

    const newListing = Store.addOwnerListing({
      name,
      tagline: `Newly listed verified stay in ${area}, ${city}`,
      type,
      gender,
      city,
      state: "Gujarat",
      area,
      address,
      price: rent,
      deposit: deposit || rent,
      maintenance: 300,
      electricity: "Sub-meter",
      waterCharges: "Included",
      noticePeriod: "30 Days",
      lockInPeriod: "1 Month",
      photos: defaultPhotos,
      sharingOptions: [
        { type: "Single", rent: rent + 3000, totalBeds: 4, availableBeds: 2 },
        { type: "Double", rent: rent, totalBeds: 12, availableBeds: 4 }
      ],
      facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking"],
      houseRules: {
        gateTiming: gateTiming || "10:30 PM",
        visitors: "Common lounge only",
        smokingDrinking: "Prohibited",
        pets: "Not allowed"
      },
      nearbyPlaces: [
        { name: "City Center", distance: "1.0 km", type: "market" }
      ],
      owner: {
        name: Store.getUser().name,
        phone: Store.getUser().phone,
        whatsapp: Store.getUser().phone,
        role: "Property Owner",
        verified: true,
        responseTime: "Quick responder"
      }
    });

    this.showToast("PG Listed Successfully! 🎉", "success");
    this.navigateToDetails(newListing.id);
  },

  // 17. Owner Dashboard
  renderOwnerDashboard() {
    const container = document.getElementById('owner-listings-container');
    if (!container) return;

    const listings = Store.getCustomOwnerListings();
    if (listings.length === 0) {
      container.innerHTML = `
        <div class="p-8 text-center bg-white dark:bg-[#1E1D2B] rounded-2xl border border-[#F0E6D8] dark:border-[#2D2B3F]">
          <p class="text-sm text-gray-500 mb-4">You have not posted any properties yet.</p>
          <button onclick="App.navigateTo('post-pg')" class="btn-primary">Post Your First PG</button>
        </div>
      `;
      return;
    }

    container.innerHTML = listings.map(l => `
      <div class="stay-card p-5 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div class="flex items-center gap-4">
          <img src="${l.photos[0]}" class="w-20 h-20 rounded-xl object-cover" />
          <div>
            <span class="badge-verified mb-1">Live Listing</span>
            <h4 class="font-bold text-base text-[#1F1B2E] dark:text-white">${l.name}</h4>
            <p class="text-xs text-gray-500">${l.area}, ${l.city} • ₹${l.price.toLocaleString('en-IN')}/mo</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="App.navigateToDetails('${l.id}')" class="btn-secondary text-xs py-2">View Live</button>
          <button onclick="App.showToast('Listing marked active', 'info')" class="btn-primary text-xs py-2">Manage Beds</button>
        </div>
      </div>
    `).join('');
  },

  // 18. User Profile & Stays
  renderProfileScreen() {
    const user = Store.getUser();
    if (user) {
      document.getElementById('profile-name').innerText = user.name;
      document.getElementById('profile-email').innerText = user.email;
      document.getElementById('profile-phone').innerText = user.phone;
      document.getElementById('profile-role').innerText = user.role;
    }

    // Render My Stays Bookings
    const container = document.getElementById('my-stays-list');
    if (!container) return;

    const bookings = Store.getBookings();
    if (bookings.length === 0) {
      container.innerHTML = `<p class="text-xs text-gray-400">No active bookings yet.</p>`;
      return;
    }

    container.innerHTML = bookings.map(b => `
      <div class="p-4 rounded-2xl bg-white dark:bg-[#1E1D2B] border border-[#F0E6D8] dark:border-[#2D2B3F] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="badge-verified">Active Stay</span>
            <span class="text-xs text-[#5B5BD6] font-extrabold">${b.id}</span>
          </div>
          <h4 class="font-bold text-sm text-[#1F1B2E] dark:text-white">${b.pgName}</h4>
          <p class="text-xs text-gray-500">${b.roomType} • Check-in: ${b.checkInDate}</p>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="App.downloadReceipt('${b.id}')" class="btn-secondary text-xs py-1.5 px-3">
            Pass Receipt
          </button>
        </div>
      </div>
    `).join('');
  },

  // 19. Admin Dashboard
  renderAdminScreen() {
    const container = document.getElementById('admin-listings-table');
    if (!container) return;

    const allListings = Store.getAllListings();
    container.innerHTML = allListings.slice(0, 10).map(l => `
      <tr class="border-b border-[#F0E6D8] dark:border-[#2D2B3F] text-xs">
        <td class="p-3 font-bold">${l.name}</td>
        <td class="p-3">${l.city}</td>
        <td class="p-3">${l.gender}</td>
        <td class="p-3 font-bold text-[#5B5BD6]">₹${l.price}</td>
        <td class="p-3"><span class="badge-verified">Approved</span></td>
        <td class="p-3">
          <button onclick="App.showToast('Listing status updated', 'success')" class="text-red-500 hover:underline">Revoke</button>
        </td>
      </tr>
    `).join('');
  },

  // 20. AI Floating Chat Assistant
  toggleAiChat() {
    const panel = document.getElementById('ai-chat-panel');
    if (panel) panel.classList.toggle('hidden');
  },

  async sendChatMessage(customText = null) {
    const input = document.getElementById('ai-chat-input');
    const msg = customText || (input ? input.value.trim() : '');
    if (!msg) return;

    if (input) input.value = '';

    const container = document.getElementById('ai-chat-messages');
    if (!container) return;

    // Render User message
    container.innerHTML += `
      <div class="flex justify-end mb-3">
        <div class="bg-[#5B5BD6] text-white text-xs rounded-2xl rounded-tr-none px-3.5 py-2.5 max-w-[85%] shadow-sm">
          ${msg}
        </div>
      </div>
    `;
    container.scrollTop = container.scrollHeight;

    // Thinking indicator
    const thinkingId = 'thinking-' + Date.now();
    container.innerHTML += `
      <div id="${thinkingId}" class="flex justify-start mb-3">
        <div class="bg-[#FAF5EE] dark:bg-[#252438] text-[#1F1B2E] dark:text-gray-300 text-xs rounded-2xl rounded-tl-none px-3.5 py-2.5 flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 bg-[#5B5BD6] rounded-full animate-bounce"></span>
          <span class="w-1.5 h-1.5 bg-[#5B5BD6] rounded-full animate-bounce delay-100"></span>
          <span class="w-1.5 h-1.5 bg-[#5B5BD6] rounded-full animate-bounce delay-200"></span>
        </div>
      </div>
    `;
    container.scrollTop = container.scrollHeight;

    // Call Knowledge Engine
    const reply = await AIAssistant.answerUserChat(msg);

    // Remove thinking
    const thinkingEl = document.getElementById(thinkingId);
    if (thinkingEl) thinkingEl.remove();

    // Render AI Reply
    const formattedReply = reply.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    container.innerHTML += `
      <div class="flex justify-start mb-3">
        <div class="bg-[#FAF5EE] dark:bg-[#252438] text-[#1F1B2E] dark:text-gray-300 text-xs rounded-2xl rounded-tl-none px-3.5 py-2.5 max-w-[88%] shadow-sm leading-relaxed">
          ${formattedReply}
        </div>
      </div>
    `;
    container.scrollTop = container.scrollHeight;
  },

  // 21. Notification Drawer
  toggleNotifications() {
    const drawer = document.getElementById('notifications-drawer');
    if (!drawer) return;
    drawer.classList.toggle('hidden');

    if (!drawer.classList.contains('hidden')) {
      this.renderNotificationsList();
      Store.markNotificationsRead();
      const dot = document.getElementById('notif-unread-dot');
      if (dot) dot.classList.add('hidden');
    }
  },

  renderNotificationsList() {
    const container = document.getElementById('notifications-list-container');
    if (!container) return;

    const notifs = Store.getNotifications();
    container.innerHTML = notifs.map(n => `
      <div class="p-3 rounded-xl ${n.read ? 'bg-[#FAF5EE] dark:bg-[#252438]' : 'bg-[#EEF0FF] dark:bg-[#25244A] border-l-4 border-[#5B5BD6]'} text-xs">
        <div class="flex justify-between items-center mb-1">
          <strong class="text-[#1F1B2E] dark:text-white font-bold">${n.title}</strong>
          <span class="text-[10px] text-gray-400">${n.time}</span>
        </div>
        <p class="text-gray-600 dark:text-gray-300 leading-normal">${n.message}</p>
      </div>
    `).join('');
  },

  // 22. Toast Notification
  showToast(message, type = "info") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    const icon = type === 'success' ? '✅' : type === 'error' ? '⚠️' : 'ℹ️';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  },

  // 23. Event Listeners Binding
  bindEvents() {
    // Budget range slider
    const budgetSlider = document.getElementById('filter-budget-slider');
    const budgetVal = document.getElementById('filter-budget-val');
    if (budgetSlider && budgetVal) {
      budgetSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        this.filters.maxBudget = val;
        budgetVal.innerText = `₹${val.toLocaleString('en-IN')}`;
      });
      budgetSlider.addEventListener('change', () => {
        this.applyFiltersAndRender();
      });
    }

    // State, City, Area dropdowns change
    const stateSelect = document.getElementById('filter-state-select');
    if (stateSelect) {
      stateSelect.addEventListener('change', () => {
        this.filters.state = stateSelect.value;
        this.updateCityOptions();
        this.filters.city = document.getElementById('filter-city-select').value;
        this.applyFiltersAndRender();
      });
    }

    const citySelect = document.getElementById('filter-city-select');
    if (citySelect) {
      citySelect.addEventListener('change', () => {
        this.filters.city = citySelect.value;
        this.updateAreaOptions();
        this.applyFiltersAndRender();
      });
    }

    const areaSelect = document.getElementById('filter-area-select');
    if (areaSelect) {
      areaSelect.addEventListener('change', () => {
        this.filters.area = areaSelect.value;
        this.applyFiltersAndRender();
      });
    }

    // AI Natural Language Search inputs (Home & Search screens)
    const homeAiInput = document.getElementById('home-ai-search-input');
    if (homeAiInput) {
      homeAiInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.navigateTo('search');
          this.handleNaturalSearch(homeAiInput.value);
        }
      });
    }

    const searchAiInput = document.getElementById('search-ai-input');
    if (searchAiInput) {
      searchAiInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.handleNaturalSearch(searchAiInput.value);
        }
      });
    }
  },

  toggleFacility(facility, isChecked) {
    if (isChecked) {
      if (!this.filters.facilities.includes(facility)) {
        this.filters.facilities.push(facility);
      }
    } else {
      this.filters.facilities = this.filters.facilities.filter(f => f !== facility);
    }
    this.applyFiltersAndRender();
  },

  openReviewModal(listingId) {
    const listing = Store.getAllListings().find(l => l.id === listingId);
    if (!listing) return;
    const modal = document.getElementById('review-modal');
    if (!modal) return;
    document.getElementById('review-pg-id').value = listingId;
    document.getElementById('review-pg-name').innerText = listing.name;
    modal.classList.remove('hidden');
  },

  submitReview() {
    const pgId = document.getElementById('review-pg-id').value;
    const name = document.getElementById('review-user-name').value;
    const role = document.getElementById('review-user-role').value;
    const rating = parseInt(document.getElementById('review-star-rating').value, 10);
    const comment = document.getElementById('review-comment').value;

    if (!name || !comment) {
      this.showToast("Please enter your name and comment", "error");
      return;
    }

    const listing = Store.getAllListings().find(l => l.id === pgId);
    if (listing) {
      if (!listing.reviews) listing.reviews = [];
      listing.reviews.unshift({
        user: name,
        role: role || "Resident",
        date: "Just now",
        rating: rating || 5,
        comment
      });
      listing.reviewCount = (listing.reviewCount || 0) + 1;
      this.renderDetailsScreen(listing);
    }

    document.getElementById('review-modal').classList.add('hidden');
    this.showToast("Thank you for your review! ⭐", "success");
  },

  openAuthModal(tab = 'login') {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    this.switchAuthTab(tab);
    modal.classList.remove('hidden');
  },

  switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('auth-tab-login').className = isLogin
      ? 'flex-1 py-2 font-bold text-xs border-b-2 border-[#5B5BD6] text-[#5B5BD6]'
      : 'flex-1 py-2 font-bold text-xs border-b-2 border-transparent text-gray-400 hover:text-gray-600';
    document.getElementById('auth-tab-signup').className = !isLogin
      ? 'flex-1 py-2 font-bold text-xs border-b-2 border-[#5B5BD6] text-[#5B5BD6]'
      : 'flex-1 py-2 font-bold text-xs border-b-2 border-transparent text-gray-400 hover:text-gray-600';

    const roleContainer = document.getElementById('auth-role-container');
    const submitBtn = document.getElementById('auth-submit-btn');
    if (roleContainer) {
      if (isLogin) roleContainer.classList.add('hidden');
      else roleContainer.classList.remove('hidden');
    }
    if (submitBtn) {
      submitBtn.innerText = isLogin ? 'Login to StayMate AI' : 'Create Free Account';
    }
  },

  togglePasswordVisibility() {
    const input = document.getElementById('auth-password');
    if (input) {
      input.type = input.type === 'password' ? 'text' : 'password';
    }
  },

  submitAuthForm() {
    const email = document.getElementById('auth-email').value;
    const pass = document.getElementById('auth-password').value;
    const roleEl = document.querySelector('input[name="auth-role"]:checked');
    const role = roleEl ? roleEl.value : 'Tenant';

    if (!email || !pass) {
      this.showToast("Please fill in email/phone and password", "error");
      return;
    }

    const userName = email.split('@')[0] || "Pratham";
    const user = {
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email: email.includes('@') ? email : `${email}@staymate.ai`,
      phone: email.includes('@') ? "+91 98765 43210" : email,
      role,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      city: "Vadodara"
    };

    Store.setUser(user);
    this.updateUserGreeting();
    document.getElementById('auth-modal').classList.add('hidden');
    this.showToast(`Welcome, ${user.name}! (${user.role})`, "success");
  },

  mockSocialLogin(provider) {
    const user = {
      name: provider === 'Google' ? "Pratham Sharma" : "Pratham Facebook",
      email: `pratham.${provider.toLowerCase()}@staymate.ai`,
      phone: "+91 98765 43210",
      role: "Tenant",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      city: "Vadodara"
    };
    Store.setUser(user);
    this.updateUserGreeting();
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.add('hidden');
    this.showToast(`Logged in successfully via ${provider}! 🎉`, "success");
  },

  shareListing(listingId) {
    const listing = Store.getAllListings().find(l => l.id === listingId);
    if (!listing) return;

    if (navigator.share) {
      navigator.share({
        title: listing.name,
        text: `Check out ${listing.name} in ${listing.area}, ${listing.city} on StayMate AI!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      this.showToast("Link copied to clipboard! 📋", "success");
    }
  }
};

// Auto start when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

if (typeof window !== 'undefined') {
  window.App = App;
}
