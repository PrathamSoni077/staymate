// StayMate AI - Interactive Leaflet Map View & Geolocation
// Powered by CARTO Voyager & Dark Matter Tiles (Fast, Beautiful & Free from 403 Tile Policy Blocks)

const StayMap = {
  mapInstance: null,
  markersGroup: null,
  tileLayer: null,
  activeListingId: null,

  // City Coordinates Preset
  cityCoordinates: {
    "Vadodara": [22.3115, 73.1868],
    "Ahmedabad": [23.0373, 72.5512],
    "Pune": [18.5679, 73.9143],
    "Bengaluru": [12.9352, 77.6245],
    "Delhi": [28.6832, 77.2104],
    "Jaipur": [26.8524, 75.8052],
    "Mumbai": [19.1176, 72.9060]
  },

  init(containerId = 'leaflet-map-container') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (this.mapInstance) {
      this.mapInstance.remove();
      this.mapInstance = null;
    }

    // Default center Vadodara
    const defaultCenter = this.cityCoordinates["Vadodara"];
    
    // Initialize Leaflet Map
    this.mapInstance = L.map(containerId, {
      center: defaultCenter,
      zoom: 13,
      zoomControl: true,
      scrollWheelZoom: true
    });

    // Determine current theme for matching map tiles
    this.updateTileLayer();

    // Listen to theme changes to dynamically switch tiles
    window.addEventListener('staymate:theme-change', () => {
      this.updateTileLayer();
    });

    this.markersGroup = L.featureGroup().addTo(this.mapInstance);

    // Initial render of pins
    this.renderPins(Store.getAllListings());

    // Invalidate size on tab/screen change
    setTimeout(() => {
      if (this.mapInstance) this.mapInstance.invalidateSize();
    }, 200);
  },

  updateTileLayer() {
    if (!this.mapInstance) return;

    if (this.tileLayer) {
      this.mapInstance.removeLayer(this.tileLayer);
    }

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    // CARTO Voyager for Light (Clean, soft warm tones, building footprints)
    // CARTO Dark Matter for Dark Mode (Sleek dark map with glowing highlights)
    const tileUrl = isDark
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    this.tileLayer = L.tileLayer(tileUrl, {
      subdomains: 'abcd',
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a> | StayMate AI'
    }).addTo(this.mapInstance);
  },

  renderPins(listings) {
    if (!this.mapInstance || !this.markersGroup) return;

    this.markersGroup.clearLayers();

    listings.forEach(listing => {
      if (!listing.coordinates || !listing.coordinates.lat || !listing.coordinates.lng) return;

      // Price chip HTML marker
      const priceK = (listing.price / 1000).toFixed(1).replace('.0', '') + 'k';
      const isSelected = this.activeListingId === listing.id;

      const customIcon = L.divIcon({
        className: 'staymate-map-marker-wrapper',
        html: `
          <div class="custom-map-pin ${isSelected ? 'active' : ''}" id="map-pin-${listing.id}" data-id="${listing.id}">
            <span>₹${priceK}</span>
          </div>
        `,
        iconSize: [48, 28],
        iconAnchor: [24, 14]
      });

      const marker = L.marker([listing.coordinates.lat, listing.coordinates.lng], { icon: customIcon });

      marker.on('click', () => {
        this.selectListing(listing);
      });

      this.markersGroup.addLayer(marker);
    });

    if (listings.length > 0) {
      const bounds = this.markersGroup.getBounds();
      if (bounds.isValid()) {
        this.mapInstance.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
      }
    }
  },

  centerOnCity(cityName) {
    if (!this.mapInstance) return;
    const coords = this.cityCoordinates[cityName] || this.cityCoordinates["Vadodara"];
    this.mapInstance.flyTo(coords, 13, { duration: 1.2 });
  },

  selectListing(listing) {
    this.activeListingId = listing.id;

    // Highlight map pin
    document.querySelectorAll('.custom-map-pin').forEach(el => el.classList.remove('active'));
    const activePin = document.getElementById(`map-pin-${listing.id}`);
    if (activePin) activePin.classList.add('active');

    // Pan smoothly to pin
    if (this.mapInstance && listing.coordinates) {
      this.mapInstance.panTo([listing.coordinates.lat, listing.coordinates.lng], { animate: true });
    }

    // Render Preview Card at bottom of map
    const previewContainer = document.getElementById('map-preview-card-container');
    if (previewContainer) {
      const isSaved = Store.isPgSaved(listing.id);
      previewContainer.innerHTML = `
        <div class="bg-white dark:bg-[#1E1D2B] rounded-2xl shadow-xl border border-[#F0E6D8] dark:border-[#2D2B3F] p-4 flex gap-4 items-center max-w-md w-full mx-auto relative animate-fadeIn">
          <button onclick="document.getElementById('map-preview-card-container').classList.add('hidden')" class="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-white p-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          
          <img src="${listing.photos[0]}" alt="${listing.name}" class="w-24 h-24 object-cover rounded-xl flex-shrink-0" />
          
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="badge-verified"><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Verified</span>
              <span class="badge-gender ${listing.gender === 'Girls' ? 'badge-gender-girls' : listing.gender === 'Boys' ? 'badge-gender-boys' : 'badge-gender-coed'}">${listing.gender}</span>
            </div>
            <h4 class="font-bold text-sm text-[#1F1B2E] dark:text-white truncate">${listing.name}</h4>
            <p class="text-xs text-gray-500 truncate">${listing.area}, ${listing.city}</p>
            <div class="flex items-center justify-between mt-2">
              <div>
                <span class="text-base font-extrabold text-[#5B5BD6] dark:text-[#7575FF]">₹${listing.price.toLocaleString('en-IN')}</span>
                <span class="text-[11px] text-gray-400">/mo</span>
              </div>
              <button onclick="App.navigateToDetails('${listing.id}')" class="btn-primary text-xs py-1.5 px-3">
                View Stay
              </button>
            </div>
          </div>
        </div>
      `;
      previewContainer.classList.remove('hidden');
    }
  }
};

if (typeof window !== 'undefined') {
  window.StayMap = StayMap;
}
