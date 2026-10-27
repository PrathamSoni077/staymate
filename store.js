// StayMate AI - State Management & LocalStorage Persistence
const Store = {
  // Keys for LocalStorage
  KEYS: {
    USER: 'staymate_user',
    SAVED_PGS: 'staymate_saved_pgs',
    COMPARE_LIST: 'staymate_compare_list',
    BOOKINGS: 'staymate_bookings',
    OWNER_LISTINGS: 'staymate_owner_listings',
    ROOMMATE_POSTS: 'staymate_roommate_posts',
    NOTIFICATIONS: 'staymate_notifications',
    THEME: 'staymate_theme',
    FILTER_STATE: 'staymate_filter_state'
  },

  // 1. User Management
  getUser() {
    const data = localStorage.getItem(this.KEYS.USER);
    if (data) {
      try { return JSON.parse(data); } catch (e) { console.error(e); }
    }
    // Default demo user
    const defaultUser = {
      name: "Pratham",
      email: "pratham@staymate.ai",
      phone: "+91 98765 43210",
      role: "Tenant", // Tenant or Owner
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      city: "Vadodara",
      collegeOrCompany: "MSU Baroda (Technology)"
    };
    this.setUser(defaultUser);
    return defaultUser;
  },

  setUser(user) {
    localStorage.setItem(this.KEYS.USER, JSON.stringify(user));
    window.dispatchEvent(new CustomEvent('staymate:user-change', { detail: user }));
  },

  logoutUser() {
    localStorage.removeItem(this.KEYS.USER);
    window.dispatchEvent(new CustomEvent('staymate:user-change', { detail: null }));
  },

  // 2. Saved / Wishlist PGs
  getSavedPgIds() {
    const data = localStorage.getItem(this.KEYS.SAVED_PGS);
    return data ? JSON.parse(data) : ["pg-vdr-01", "pg-vdr-03"]; // Default two saved for quick delight
  },

  isPgSaved(id) {
    const saved = this.getSavedPgIds();
    return saved.includes(id);
  },

  toggleSavePg(id) {
    let saved = this.getSavedPgIds();
    const index = saved.indexOf(id);
    let isNowSaved = false;
    if (index > -1) {
      saved.splice(index, 1);
      isNowSaved = false;
    } else {
      saved.push(id);
      isNowSaved = true;
    }
    localStorage.setItem(this.KEYS.SAVED_PGS, JSON.stringify(saved));
    window.dispatchEvent(new CustomEvent('staymate:saved-change', { detail: { id, isSaved: isNowSaved, total: saved.length } }));
    return isNowSaved;
  },

  // 3. Compare List (up to 3 PGs)
  getCompareList() {
    const data = localStorage.getItem(this.KEYS.COMPARE_LIST);
    return data ? JSON.parse(data) : ["pg-vdr-01", "pg-vdr-02", "pg-vdr-03"];
  },

  addToCompare(id) {
    const list = this.getCompareList();
    if (list.includes(id)) return { success: false, message: "Already in compare list" };
    if (list.length >= 3) return { success: false, message: "You can compare up to 3 PGs at a time" };
    list.push(id);
    localStorage.setItem(this.KEYS.COMPARE_LIST, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('staymate:compare-change', { detail: list }));
    return { success: true, count: list.length };
  },

  removeFromCompare(id) {
    let list = this.getCompareList();
    list = list.filter(item => item !== id);
    localStorage.setItem(this.KEYS.COMPARE_LIST, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('staymate:compare-change', { detail: list }));
    return list;
  },

  clearCompare() {
    localStorage.removeItem(this.KEYS.COMPARE_LIST);
    window.dispatchEvent(new CustomEvent('staymate:compare-change', { detail: [] }));
  },

  // 4. Bookings & Scheduled Visits
  getBookings() {
    const data = localStorage.getItem(this.KEYS.BOOKINGS);
    if (data) return JSON.parse(data);
    
    // Sample initial demo booking
    const initialBookings = [
      {
        id: "SM-2026-9812",
        pgId: "pg-vdr-01",
        pgName: "Sunrise PG & Co-living",
        pgArea: "Sayajigunj, Vadodara",
        roomType: "Double Sharing",
        checkInDate: "2026-11-01",
        checkOutDate: "2027-04-30",
        monthlyRent: 8000,
        depositAmount: 8000,
        tokenPaid: 2000,
        totalDue: 14000,
        status: "Confirmed",
        bookedAt: "2026-10-25",
        ownerName: "Mrs. Meena Patel",
        ownerPhone: "+91 98795 24120"
      }
    ];
    localStorage.setItem(this.KEYS.BOOKINGS, JSON.stringify(initialBookings));
    return initialBookings;
  },

  addBooking(bookingData) {
    const bookings = this.getBookings();
    const newBooking = {
      id: "SM-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000),
      status: "Confirmed",
      bookedAt: new Date().toISOString().split('T')[0],
      ...bookingData
    };
    bookings.unshift(newBooking);
    localStorage.setItem(this.KEYS.BOOKINGS, JSON.stringify(bookings));
    
    // Add notification
    this.addNotification({
      title: "Booking Confirmed! 🎉",
      message: `Your stay at ${newBooking.pgName} is confirmed! Ref ID: ${newBooking.id}`,
      time: "Just now",
      read: false
    });

    window.dispatchEvent(new CustomEvent('staymate:booking-change', { detail: newBooking }));
    return newBooking;
  },

  // 5. Owner-Posted Listings
  getCustomOwnerListings() {
    const data = localStorage.getItem(this.KEYS.OWNER_LISTINGS);
    return data ? JSON.parse(data) : [];
  },

  addOwnerListing(listing) {
    const listings = this.getCustomOwnerListings();
    const newListing = {
      id: "custom-" + Date.now(),
      verified: true, // auto-verified for demo
      rating: 4.8,
      reviewCount: 1,
      reviews: [{ user: "System", role: "StayMate Quality Team", date: "Just now", rating: 5, comment: "New verified listing submitted by owner." }],
      categoryScores: { cleanliness: 4.8, food: 4.5, safety: 4.9, valueForMoney: 4.7 },
      ...listing
    };
    listings.unshift(newListing);
    localStorage.setItem(this.KEYS.OWNER_LISTINGS, JSON.stringify(listings));
    
    // Notify owner
    this.addNotification({
      title: "Property Listed! 🏡",
      message: `Your property "${newListing.name}" is now live on StayMate AI!`,
      time: "Just now",
      read: false
    });

    return newListing;
  },

  // Get all listings combining hardcoded sample listings + owner submitted ones
  getAllListings() {
    const customListings = this.getCustomOwnerListings();
    return [...customListings, ...window.sampleListings];
  },

  // 6. Roommate Community Posts
  getAllRoommatePosts() {
    const custom = localStorage.getItem(this.KEYS.ROOMMATE_POSTS);
    const customPosts = custom ? JSON.parse(custom) : [];
    return [...customPosts, ...window.sampleRoommatePosts];
  },

  addRoommatePost(post) {
    const custom = localStorage.getItem(this.KEYS.ROOMMATE_POSTS);
    const customPosts = custom ? JSON.parse(custom) : [];
    const newPost = {
      id: "rm-custom-" + Date.now(),
      postedDate: "Just now",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      ...post
    };
    customPosts.unshift(newPost);
    localStorage.setItem(this.KEYS.ROOMMATE_POSTS, JSON.stringify(customPosts));
    
    this.addNotification({
      title: "Roommate Post Published 👥",
      message: "Your roommate requirement has been posted to the community feed.",
      time: "Just now",
      read: false
    });
    
    return newPost;
  },

  // 7. Notifications
  getNotifications() {
    const data = localStorage.getItem(this.KEYS.NOTIFICATIONS);
    if (data) return JSON.parse(data);
    const defaults = [
      { id: 1, title: "Welcome to StayMate AI! 🌿", message: "Find the best student PGs & rooms in Vadodara with verified reviews.", time: "10 mins ago", read: false },
      { id: 2, title: "Special Student Discount ✨", message: "Use coupon 'MSU2026' for ₹500 off on your first month deposit.", time: "2 hours ago", read: false },
      { id: 3, title: "Visit Scheduled", message: "Sunrise PG warden accepted your visit request for tomorrow at 4:00 PM.", time: "1 day ago", read: true }
    ];
    localStorage.setItem(this.KEYS.NOTIFICATIONS, JSON.stringify(defaults));
    return defaults;
  },

  addNotification(notif) {
    const list = this.getNotifications();
    const newNotif = { id: Date.now(), ...notif };
    list.unshift(newNotif);
    localStorage.setItem(this.KEYS.NOTIFICATIONS, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('staymate:notification-change', { detail: list }));
  },

  markNotificationsRead() {
    const list = this.getNotifications().map(item => ({ ...item, read: true }));
    localStorage.setItem(this.KEYS.NOTIFICATIONS, JSON.stringify(list));
    window.dispatchEvent(new CustomEvent('staymate:notification-change', { detail: list }));
  },

  // 8. Theme
  getTheme() {
    return localStorage.getItem(this.KEYS.THEME) || 'light';
  },

  setTheme(theme) {
    localStorage.setItem(this.KEYS.THEME, theme);
    document.documentElement.setAttribute('data-theme', theme);
    window.dispatchEvent(new CustomEvent('staymate:theme-change', { detail: theme }));
  },

  toggleTheme() {
    const current = this.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
    return next;
  }
};

if (typeof window !== 'undefined') {
  window.Store = Store;
}
