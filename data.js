// StayMate AI - Comprehensive Sample Database
// Over 28 realistic listings across 6 Indian states, centered around Vadodara (default)

const sampleListings = [
  // --- GUJARAT - VADODARA (Default City) ---
  {
    id: "pg-vdr-01",
    name: "Sunrise PG & Co-living",
    tagline: "Premier student living near MSU with home-style Gujarati & North Indian food",
    type: "pg", // pg, hostel, room, shared
    gender: "Girls", // Boys, Girls, Co-ed
    city: "Vadodara",
    state: "Gujarat",
    area: "Sayajigunj",
    address: "B-42, Opp. Kadak Bazar, Near Railway Station & MSU, Sayajigunj, Vadodara, Gujarat 390005",
    coordinates: { lat: 22.3115, lng: 73.1868 },
    verified: true,
    rating: 4.5,
    reviewCount: 128,
    featured: true,
    price: 8000,
    deposit: 8000,
    maintenance: 300,
    electricity: "₹9/unit on sub-meter",
    waterCharges: "Included in rent",
    noticePeriod: "30 Days",
    lockInPeriod: "2 Months",
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", // Room
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80", // Washroom
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80", // Kitchen / Mess
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", // Dining Area
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"  // Exterior
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 12000, totalBeds: 6, availableBeds: 1 },
      { type: "Double", rent: 8000, totalBeds: 24, availableBeds: 4 },
      { type: "Triple", rent: 6200, totalBeds: 18, availableBeds: 3 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking", "CCTV", "Geyser", "RO Water"],
    tenantsInfo: {
      studentRatio: "75% College Students (MSU)",
      workingRatio: "25% Young Professionals",
      totalOccupants: 48,
      genderMix: "100% Female Residents",
      atmosphere: "Calm, focused, friendly study community"
    },
    houseRules: {
      gateTiming: "10:30 PM (Extensions available on warden approval)",
      visitors: "Female visitors allowed in lobby till 7:00 PM",
      smokingDrinking: "Strictly prohibited",
      pets: "Not allowed",
      quietHours: "11:00 PM - 6:00 AM"
    },
    categoryScores: {
      cleanliness: 4.6,
      food: 4.4,
      safety: 4.8,
      valueForMoney: 4.5
    },
    nearbyPlaces: [
      { name: "MSU (Maharaja Sayajirao University)", distance: "0.8 km", type: "college" },
      { name: "Vadodara Central Railway Station", distance: "0.5 km", type: "transit" },
      { name: "Sayaji Baug Zoo & Gardens", distance: "1.1 km", type: "recreation" },
      { name: "SSG Hospital", distance: "1.5 km", type: "hospital" },
      { name: "Alkapuri Commercial Hub", distance: "1.8 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha, Tea/Coffee", lunch: "Gujarati Thali (Roti, Dal, Rice, Ringan Bhartha)", snacks: "Khakhra, Masala Chai", dinner: "Sev Tameta, Rotla, Chhaas" },
      Tuesday: { breakfast: "Aloo Paratha, Curd", lunch: "Chole, Jeera Rice, Phulka, Salad", snacks: "Biscuits, Coffee", dinner: "Mix Veg Khichdi, Kadhi, Papad" },
      Wednesday: { breakfast: "Idli Sambar, Chutney", lunch: "Paneer Butter Masala, Roti, Pulav", snacks: "Bhel Puri", dinner: "Dal Fry, Jeera Rice, Chapati" },
      Thursday: { breakfast: "Methi Thepla, Pickle", lunch: "Rajma Masala, Steamed Rice, Roti", snacks: "Dry Samosa, Tea", dinner: "Bhindi Masala, Phulka, Dal" },
      Friday: { breakfast: "Upma, Coconut Chutney", lunch: "Dal Makhani, Rice, Roti, Gulab Jamun", snacks: "Onion Pakoda, Chai", dinner: "Kaju Curry, Paratha, Salad" },
      Saturday: { breakfast: "Uttapam, Sambar", lunch: "Pav Bhaji, Pulav, Butter Roti", snacks: "Toast with Butter", dinner: "Veg Biryani, Boondi Raita" },
      Sunday: { breakfast: "Khaman Dhokla, Jalebi", lunch: "Special Feast Thali (Paneer, Poori, Shrikhand)", snacks: "Evening Refreshment", dinner: "Light Khichdi & Buttermilk" }
    },
    foodType: "Veg", // Veg, Non-Veg, Both
    owner: {
      name: "Mrs. Meena Patel",
      phone: "+91 98795 24120",
      whatsapp: "+919879524120",
      role: "Hostel Warden & Owner",
      verified: true,
      responseTime: "Usually responds within 15 minutes"
    },
    reviews: [
      { user: "Pooja Trivedi", role: "MSU Fine Arts Student", date: "October 2026", rating: 5, comment: "Safest PG in Sayajigunj! The warden Meena aunty treats everyone like family. The food is homelike and gate timing is practical." },
      { user: "Aanchal Shah", role: "Software Intern", date: "September 2026", rating: 4, comment: "WiFi is fast (around 100 Mbps) which helps with work from home. Study room is air-conditioned and very quiet." }
    ]
  },
  {
    id: "pg-vdr-02",
    name: "Green View Boys PG",
    tagline: "Modern spacious hostel near Fatehgunj with gym, sports & fast WiFi",
    type: "pg",
    gender: "Boys",
    city: "Vadodara",
    state: "Gujarat",
    area: "Fatehgunj",
    address: "Plot 12, Behind Rosary School, Near Fatehgunj Post Office, Vadodara, Gujarat 390002",
    coordinates: { lat: 22.3256, lng: 73.1904 },
    verified: true,
    rating: 4.2,
    reviewCount: 94,
    featured: true,
    price: 7500,
    deposit: 7500,
    maintenance: 250,
    electricity: "Separate meter, split among roommates",
    waterCharges: "24/7 RO water included",
    noticePeriod: "30 Days",
    lockInPeriod: "1 Month",
    photos: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 11000, totalBeds: 5, availableBeds: 2 },
      { type: "Double", rent: 7500, totalBeds: 20, availableBeds: 5 },
      { type: "Triple", rent: 5800, totalBeds: 15, availableBeds: 3 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking", "Gym", "Power Backup"],
    tenantsInfo: {
      studentRatio: "60% Engineering & Polytechnic",
      workingRatio: "40% Chemical & IT Professionals",
      totalOccupants: 40,
      genderMix: "100% Male Residents",
      atmosphere: "Vibrant, tech-savvy, sporty"
    },
    houseRules: {
      gateTiming: "11:00 PM (Late slip system available)",
      visitors: "Day guests allowed in recreation zone",
      smokingDrinking: "Prohibited within premises",
      pets: "Not allowed",
      quietHours: "11:30 PM - 6:30 AM"
    },
    categoryScores: {
      cleanliness: 4.1,
      food: 4.3,
      safety: 4.4,
      valueForMoney: 4.6
    },
    nearbyPlaces: [
      { name: "MSU Faculty of Technology & Engineering", distance: "1.2 km", type: "college" },
      { name: "Fatehgunj Main Food Street & Cafes", distance: "0.3 km", type: "market" },
      { name: "Vadodara Airport", distance: "4.5 km", type: "transit" },
      { name: "Inox Multiplex", distance: "1.0 km", type: "recreation" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Bhurji/Paneer Bhurji & Bun", lunch: "Rajma, Chawal, Roti, Salad", snacks: "Tea & Rusks", dinner: "Aloo Gobhi, Phulka, Dal Fry" },
      Tuesday: { breakfast: "Poori Bhaji", lunch: "Mix Veg, Dal Tadka, Rice, Roti", snacks: "Poha Chivda, Chai", dinner: "Kadhi Khichdi, Batata Nu Shaak" },
      Wednesday: { breakfast: "Sprouts & Egg/Paneer", lunch: "Chole Bhature, Sweet Lassi", snacks: "Sandwich, Tea", dinner: "Sev Usal Vadodara Style, Bread" },
      Thursday: { breakfast: "Bread Butter Jam / Omelette", lunch: "Dum Aloo, Rice, Roti, Curd", snacks: "Biscuits & Green Tea", dinner: "Dal Palak, Jeera Rice, Chapati" },
      Friday: { breakfast: "Masala Oats / Poha", lunch: "Paneer Tikka Masala, Naan/Roti, Pulav", snacks: "Vada Pav", dinner: "Egg Curry / Malai Kofta, Rice, Roti" },
      Saturday: { breakfast: "Aloo Paratha, Butter", lunch: "Kadi Pakora, Steamed Rice, Roti", snacks: "Maggi, Chai", dinner: "Special Chinese Fried Rice, Manchurian" },
      Sunday: { breakfast: "Fafda Jalebi Special", lunch: "Special Thali with Sweet", snacks: "Cold Coffee", dinner: "Biryani & Raita" }
    },
    foodType: "Both",
    owner: {
      name: "Rameshwar Solanki",
      phone: "+91 97241 88390",
      whatsapp: "+919724188390",
      role: "Property Manager",
      verified: true,
      responseTime: "Responds in under 30 mins"
    },
    reviews: [
      { user: "Hardik Joshi", role: "Mechanical Student", date: "August 2026", rating: 4, comment: "Value for money is unmatched. The mess food on weekends is delicious and parking for 2-wheelers is safe." }
    ]
  },
  {
    id: "pg-vdr-03",
    name: "Comfort Stay Co-Living",
    tagline: "Boutique premium serviced apartments for working professionals & couples",
    type: "room",
    gender: "Co-ed",
    city: "Vadodara",
    state: "Gujarat",
    area: "Alkapuri",
    address: "6th Floor, Ivory Heights, RC Dutt Road, Alkapuri, Vadodara, Gujarat 390007",
    coordinates: { lat: 22.3168, lng: 73.1702 },
    verified: true,
    rating: 4.7,
    reviewCount: 162,
    featured: true,
    price: 9000,
    deposit: 12000,
    maintenance: 500,
    electricity: "Actual consumption as per digital meter",
    waterCharges: "Included",
    noticePeriod: "15 Days",
    lockInPeriod: "None (Flexible)",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 14500, totalBeds: 10, availableBeds: 3 },
      { type: "Double", rent: 9000, totalBeds: 16, availableBeds: 4 },
      { type: "Private", rent: 22000, totalBeds: 4, availableBeds: 1 }
    ],
    facilities: ["WiFi", "AC", "Laundry", "Parking", "CCTV", "Study Room", "Gym", "Geyser", "Housekeeping", "Balcony"],
    tenantsInfo: {
      studentRatio: "15% Postgrads",
      workingRatio: "85% Corporate & Healthcare Professionals",
      totalOccupants: 30,
      genderMix: "Mixed Professionals (Co-living)",
      atmosphere: "Premium, independent, peaceful"
    },
    houseRules: {
      gateTiming: "24x7 Access via Digital Smart Card",
      visitors: "Visitors allowed with prior app registration",
      smokingDrinking: "Designated rooftop smoking terrace only",
      pets: "Pet friendly upon prior notice",
      quietHours: "10:30 PM - 7:00 AM"
    },
    categoryScores: {
      cleanliness: 4.8,
      food: 4.2,
      safety: 4.9,
      valueForMoney: 4.6
    },
    nearbyPlaces: [
      { name: "Alkapuri Club & High Street Malls", distance: "0.2 km", type: "market" },
      { name: "Sterling Hospital", distance: "1.4 km", type: "hospital" },
      { name: "Vadodara Central Bus Depot", distance: "2.0 km", type: "transit" },
      { name: "L&T Knowledge City", distance: "7.0 km", type: "office" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Pancakes / Eggs to order", lunch: "Organic Bowls / Continental Thali", snacks: "Cookies & Artisan Tea", dinner: "Grilled Veggies, Herb Rice, Soup" },
      Tuesday: { breakfast: "Masala Dosa, Filter Coffee", lunch: "North Indian Gourmet Thali", snacks: "Green Tea & Granola", dinner: "Paneer Tikka, Paratha, Dal" },
      Wednesday: { breakfast: "Avocado Toast / Poha", lunch: "Dal Tadka, Steamed Basmati, Rotis", snacks: "Dry Fruit Mix", dinner: "Italian Pasta Bar (Red & White)" },
      Thursday: { breakfast: "Stuffed Kulcha, Curd", lunch: "Rajma Chawal Executive Platter", snacks: "Fresh Fruit Juice", dinner: "Seasonal Green Veg, Phulka, Kadhi" },
      Friday: { breakfast: "Belgian Waffles / Scrambled Eggs", lunch: "Biryani & Mint Raita", snacks: "Iced Tea", dinner: "Thai Curry with Jasmine Rice" },
      Saturday: { breakfast: "English Breakfast spread", lunch: "Chef's Special Buffet", snacks: "Cake Slice, Cappuccino", dinner: "Mexican Burrito Bowls" },
      Sunday: { breakfast: "Chana Puri & Halwa", lunch: "Grand Sunday Brunch", snacks: "Evening High Tea", dinner: "Comfort Khichdi & Toppings" }
    },
    foodType: "Both",
    owner: {
      name: "Kabir Sengupta",
      phone: "+91 98980 11922",
      whatsapp: "+919898011922",
      role: "General Manager - Comfort Stays",
      verified: true,
      responseTime: "Immediate response"
    },
    reviews: [
      { user: "Tanvi Saxena", role: "Senior Consultant at Deloitte", date: "October 2026", rating: 5, comment: "Truly the best co-living space in Vadodara. The 24x7 smart access and daily professional housekeeping make life effortless." }
    ]
  },
  {
    id: "pg-vdr-04",
    name: "Parul Scholars Hub PG",
    tagline: "Dedicated university hostel near Parul University Waghodia Road",
    type: "pg",
    gender: "Boys",
    city: "Vadodara",
    state: "Gujarat",
    area: "Waghodia Road",
    address: "Opp. Parul University Gate 2, Waghodia Road, Vadodara, Gujarat 391760",
    coordinates: { lat: 22.2882, lng: 73.3644 },
    verified: true,
    rating: 4.4,
    reviewCount: 210,
    featured: false,
    price: 6500,
    deposit: 6500,
    maintenance: 200,
    electricity: "Fixed ₹400/month",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "6 Months (Academic Term)",
    photos: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Double", rent: 7500, totalBeds: 30, availableBeds: 6 },
      { type: "Triple", rent: 6500, totalBeds: 45, availableBeds: 12 },
      { type: "4+", rent: 5000, totalBeds: 24, availableBeds: 4 }
    ],
    facilities: ["WiFi", "Mess/Food", "Study Room", "Parking", "CCTV", "Laundry", "Power Backup"],
    tenantsInfo: {
      studentRatio: "100% Parul University Students",
      workingRatio: "0%",
      totalOccupants: 90,
      genderMix: "Boys Only",
      atmosphere: "Energetic student campus life"
    },
    houseRules: {
      gateTiming: "10:00 PM (College biometric tracking)",
      visitors: "Allowed in visitor lounge only",
      smokingDrinking: "Zero tolerance expulsion policy",
      pets: "Not allowed",
      quietHours: "10:00 PM - 6:00 AM"
    },
    categoryScores: { cleanliness: 4.2, food: 4.1, safety: 4.6, valueForMoney: 4.7 },
    nearbyPlaces: [
      { name: "Parul University Campus", distance: "0.2 km", type: "college" },
      { name: "Parul Sevashram Hospital", distance: "0.4 km", type: "hospital" },
      { name: "Waghodia Cross Road", distance: "1.0 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha, Tea", lunch: "Sev Tomato, Roti, Dal, Rice", snacks: "Tea & Biscuits", dinner: "Aloo Mutter, Phulka, Rice" },
      Tuesday: { breakfast: "Upma & Chutney", lunch: "Chole, Jeera Rice, Puri", snacks: "Coffee", dinner: "Khichdi & Kadhi" },
      Wednesday: { breakfast: "Methi Thepla", lunch: "Dal Makhani, Rice, Roti", snacks: "Puffed Rice Chivda", dinner: "Baingan Bharta, Rotla" },
      Thursday: { breakfast: "Idli Sambar", lunch: "Rajma Chawal, Chapati", snacks: "Tea", dinner: "Veg Pulao, Curd" },
      Friday: { breakfast: "Aloo Paratha", lunch: "Paneer Handi, Paratha, Rice", snacks: "Samosa", dinner: "Moong Dal, Rice, Roti" },
      Saturday: { breakfast: "Bread Pakoda", lunch: "Kadhi Pakora, Rice, Roti", snacks: "Tea", dinner: "Pav Bhaji" },
      Sunday: { breakfast: "Dhokla & Chutney", lunch: "Sunday Special Biryani & Gulab Jamun", snacks: "Biscuits", dinner: "Light Khichdi" }
    },
    foodType: "Veg",
    owner: {
      name: "Vikrambhai Barot",
      phone: "+91 94260 77150",
      whatsapp: "+919426077150",
      role: "Warden",
      verified: true,
      responseTime: "Responds in 1 hour"
    },
    reviews: [
      { user: "Dev Patel", role: "B.Tech CSE Student", date: "September 2026", rating: 4.5, comment: "Literally opposite Gate 2. Saves so much commute time and food is very reliable." }
    ]
  },
  {
    id: "pg-vdr-05",
    name: "Shakti Kripa Girls Residency",
    tagline: "Ultra-safe hostel with biometric security, CCTV & library near Gotri",
    type: "pg",
    gender: "Girls",
    city: "Vadodara",
    state: "Gujarat",
    area: "Gotri",
    address: "Near GMERS Medical College, Gotri Road, Vadodara, Gujarat 390021",
    coordinates: { lat: 22.3214, lng: 73.1420 },
    verified: true,
    rating: 4.8,
    reviewCount: 145,
    featured: true,
    price: 8500,
    deposit: 8500,
    maintenance: 300,
    electricity: "Sub-meter per room",
    waterCharges: "Free",
    noticePeriod: "30 Days",
    lockInPeriod: "3 Months",
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 13000, totalBeds: 8, availableBeds: 2 },
      { type: "Double", rent: 8500, totalBeds: 26, availableBeds: 5 },
      { type: "Triple", rent: 6800, totalBeds: 18, availableBeds: 4 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Study Room", "Laundry", "CCTV", "Geyser", "Parking"],
    tenantsInfo: {
      studentRatio: "80% Medical & Dental Students (GMERS)",
      workingRatio: "20% Healthcare Professionals",
      totalOccupants: 50,
      genderMix: "Girls Only",
      atmosphere: "Studious, quiet, clean"
    },
    houseRules: {
      gateTiming: "10:15 PM (Strict)",
      visitors: "Parents/Guardians allowed in reception",
      smokingDrinking: "Strictly prohibited",
      pets: "Not allowed",
      quietHours: "10:30 PM - 6:00 AM"
    },
    categoryScores: { cleanliness: 4.9, food: 4.6, safety: 5.0, valueForMoney: 4.6 },
    nearbyPlaces: [
      { name: "GMERS Medical College & Hospital", distance: "0.5 km", type: "college" },
      { name: "Gotri Lake & Jogging Park", distance: "0.8 km", type: "recreation" },
      { name: "D-Mart Gotri", distance: "1.2 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha & Sprouts", lunch: "Paneer, Dal, Rice, Rotli", snacks: "Tea, Bakharkhwani", dinner: "Khichdi Kadhi, Bhinda Nu Shaak" },
      Tuesday: { breakfast: "Idli Sambhar", lunch: "Chole Chawal, Roti, Salad", snacks: "Bhel", dinner: "Sev Tomato, Paratha" },
      Wednesday: { breakfast: "Thepla, Pickle, Milk", lunch: "Rajma, Jeera Rice, Chapati", snacks: "Toast Tea", dinner: "Kaju Gathiya, Phulka" },
      Thursday: { breakfast: "Moong Dal Cheela", lunch: "Dal Makhani, Rice, Roti", snacks: "Biscuits & Tea", dinner: "Mix Kathol, Bhakri" },
      Friday: { breakfast: "Aloo Paratha", lunch: "Paneer Kadhai, Naan, Pulao", snacks: "Puff", dinner: "Moong Khichdi, Buttermilk" },
      Saturday: { breakfast: "Upma & Coconut Chutney", lunch: "Pav Bhaji, Pulao", snacks: "Tea, Khakhra", dinner: "Veg Handvo & Chutney" },
      Sunday: { breakfast: "Special Dhokla", lunch: "Royal Gujarati Thali with Sweet", snacks: "Milkshake", dinner: "Light Dinner" }
    },
    foodType: "Veg",
    owner: {
      name: "Dr. Kirit & Sonal Shah",
      phone: "+91 98250 33810",
      whatsapp: "+919825033810",
      role: "Owners",
      verified: true,
      responseTime: "Responds in 15 mins"
    },
    reviews: [
      { user: "Riddhi Vyas", role: "GMERS Intern Doctor", date: "October 2026", rating: 5, comment: "The study library has 24/7 AC and silence. Perfect for medical students preparing for NEET PG." }
    ]
  },
  {
    id: "pg-vdr-06",
    name: "Nizampura Executive Shared Rooms",
    tagline: "Budget-friendly shared 3BHK flat near Vadodara Express Highway",
    type: "shared",
    gender: "Boys",
    city: "Vadodara",
    state: "Gujarat",
    area: "Nizampura",
    address: "Block C-3, Nilamber Palms, Near Nizampura ST Bus Depot, Vadodara, Gujarat 390002",
    coordinates: { lat: 22.3380, lng: 73.1812 },
    verified: false,
    rating: 3.9,
    reviewCount: 42,
    featured: false,
    price: 4800,
    deposit: 5000,
    maintenance: 150,
    electricity: "Shared equally",
    waterCharges: "Included",
    noticePeriod: "15 Days",
    lockInPeriod: "None",
    photos: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Double", rent: 6000, totalBeds: 6, availableBeds: 2 },
      { type: "Triple", rent: 4800, totalBeds: 6, availableBeds: 3 }
    ],
    facilities: ["WiFi", "Parking", "RO Water", "Geyser", "Cooking Allowed"],
    tenantsInfo: {
      studentRatio: "30% Students",
      workingRatio: "70% Working Professionals",
      totalOccupants: 12,
      genderMix: "Boys Only",
      atmosphere: "Independent flat life"
    },
    houseRules: {
      gateTiming: "No restriction (Society main gate 11:30 PM)",
      visitors: "Friends allowed with mutual consent",
      smokingDrinking: "Balcony only",
      pets: "Not allowed",
      quietHours: "Midnight onwards"
    },
    categoryScores: { cleanliness: 3.8, food: 3.5, safety: 4.1, valueForMoney: 4.5 },
    nearbyPlaces: [
      { name: "Nizampura ST Bus Depot", distance: "0.4 km", type: "transit" },
      { name: "Baroda High School", distance: "0.6 km", type: "college" },
      { name: "National Highway 48", distance: "2.0 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Self-cooking / Tiffin", lunch: "Tiffin Service", snacks: "Tea", dinner: "Tiffin Service" },
      Tuesday: { breakfast: "Self-cooking / Tiffin", lunch: "Tiffin Service", snacks: "Tea", dinner: "Tiffin Service" },
      Wednesday: { breakfast: "Self-cooking / Tiffin", lunch: "Tiffin Service", snacks: "Tea", dinner: "Tiffin Service" },
      Thursday: { breakfast: "Self-cooking / Tiffin", lunch: "Tiffin Service", snacks: "Tea", dinner: "Tiffin Service" },
      Friday: { breakfast: "Self-cooking / Tiffin", lunch: "Tiffin Service", snacks: "Tea", dinner: "Tiffin Service" },
      Saturday: { breakfast: "Self-cooking / Tiffin", lunch: "Tiffin Service", snacks: "Tea", dinner: "Tiffin Service" },
      Sunday: { breakfast: "Self-cooking / Tiffin", lunch: "Tiffin Service", snacks: "Tea", dinner: "Tiffin Service" }
    },
    foodType: "Both",
    owner: {
      name: "Sanjay Parmar",
      phone: "+91 98244 51090",
      whatsapp: "+919824451090",
      role: "Flat Owner",
      verified: false,
      responseTime: "Responds in 2 hours"
    },
    reviews: [
      { user: "Akash Singh", role: "Junior Accountant", date: "July 2026", rating: 4, comment: "Very affordable rent and modular kitchen is available to cook your own meals." }
    ]
  },
  {
    id: "pg-vdr-07",
    name: "Vasna Palace Co-Living Room",
    tagline: "Private furnished studio rooms with private kitchenette & attached washroom",
    type: "room",
    gender: "Co-ed",
    city: "Vadodara",
    state: "Gujarat",
    area: "Vasna Road",
    address: "Bungalow 18, Royal Greens, Vasna-Bhayli Main Road, Vadodara, Gujarat 391410",
    coordinates: { lat: 22.2980, lng: 73.1510 },
    verified: true,
    rating: 4.6,
    reviewCount: 78,
    featured: false,
    price: 11000,
    deposit: 15000,
    maintenance: 400,
    electricity: "₹8.5 per unit",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "3 Months",
    photos: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Private", rent: 11000, totalBeds: 12, availableBeds: 2 },
      { type: "Single", rent: 11000, totalBeds: 12, availableBeds: 2 }
    ],
    facilities: ["WiFi", "AC", "Laundry", "Study Room", "Parking", "CCTV", "Geyser", "Gym"],
    tenantsInfo: {
      studentRatio: "20% Navrachana Univ Students",
      workingRatio: "80% Remote Tech Workers",
      totalOccupants: 12,
      genderMix: "Co-ed",
      atmosphere: "Upscale, quiet residential neighborhood"
    },
    houseRules: {
      gateTiming: "24x7 Keyless Smart Lock Entry",
      visitors: "Allowed",
      smokingDrinking: "Allowed in designated balcony",
      pets: "Cats & small dogs allowed",
      quietHours: "11:00 PM - 7:00 AM"
    },
    categoryScores: { cleanliness: 4.8, food: 4.0, safety: 4.7, valueForMoney: 4.4 },
    nearbyPlaces: [
      { name: "Navrachana University", distance: "3.2 km", type: "college" },
      { name: "Bhayli Multi-Specialty Hospital", distance: "1.0 km", type: "hospital" },
      { name: "Reliance Smart Superstore", distance: "0.8 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Fruit Bowl & Granola", lunch: "Healthy Salad Bar", snacks: "Green Tea", dinner: "Grilled Paneer & Rice" },
      Tuesday: { breakfast: "Oats & Honey", lunch: "Dal Tadka, Steamed Rice", snacks: "Espresso", dinner: "Whole Wheat Pasta" },
      Wednesday: { breakfast: "Eggs/Tofu Scramble", lunch: "Quinoa Bowl", snacks: "Nuts", dinner: "Stir Fry Veggies & Rice" },
      Thursday: { breakfast: "French Toast", lunch: "Rajma Chawal", snacks: "Chai", dinner: "Paneer Bhurji, Chapati" },
      Friday: { breakfast: "Upma", lunch: "Biryani Special", snacks: "Fresh Juice", dinner: "Woodfired Pizza Evening" },
      Saturday: { breakfast: "Smoothie Bowl", lunch: "Chef's Curated Lunch", snacks: "Cappuccino", dinner: "Sushi / Asian Bowl" },
      Sunday: { breakfast: "Pancakes & Maple", lunch: "Sunday Roast / Thali", snacks: "Tea & Pastry", dinner: "Comfort Soup & Toast" }
    },
    foodType: "Both",
    owner: {
      name: "Mrs. Ananya Desai",
      phone: "+91 99099 44321",
      whatsapp: "+919909944321",
      role: "Property Host",
      verified: true,
      responseTime: "Responds in 20 mins"
    },
    reviews: [
      { user: "Karan Singhal", role: "UI/UX Designer", date: "September 2026", rating: 5, comment: "The aesthetic interior and super-fast optical fiber internet make it an ideal workspace home." }
    ]
  },

  // --- GUJARAT - AHMEDABAD ---
  {
    id: "pg-ahmd-01",
    name: "Sabarmati Elite Living",
    tagline: "Luxury student & professional PG in Navrangpura near Gujarat University",
    type: "pg",
    gender: "Co-ed",
    city: "Ahmedabad",
    state: "Gujarat",
    area: "Navrangpura",
    address: "Near Commerce Six Roads, Navrangpura, Ahmedabad, Gujarat 380009",
    coordinates: { lat: 23.0373, lng: 72.5512 },
    verified: true,
    rating: 4.6,
    reviewCount: 180,
    featured: true,
    price: 9500,
    deposit: 10000,
    maintenance: 400,
    electricity: "₹9/unit",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "2 Months",
    photos: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 15000, totalBeds: 10, availableBeds: 2 },
      { type: "Double", rent: 9500, totalBeds: 30, availableBeds: 6 },
      { type: "Triple", rent: 7500, totalBeds: 24, availableBeds: 4 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking", "CCTV", "Gym"],
    tenantsInfo: {
      studentRatio: "50% Gujarat Univ & CEPT Students",
      workingRatio: "50% SG Highway Professionals",
      totalOccupants: 64,
      genderMix: "Separate wings for Boys & Girls",
      atmosphere: "Academic, lively, modern"
    },
    houseRules: {
      gateTiming: "11:00 PM",
      visitors: "Lobby lounge only",
      smokingDrinking: "Prohibited",
      pets: "Not allowed",
      quietHours: "11:00 PM - 6:30 AM"
    },
    categoryScores: { cleanliness: 4.7, food: 4.5, safety: 4.8, valueForMoney: 4.5 },
    nearbyPlaces: [
      { name: "Gujarat University Campus", distance: "0.9 km", type: "college" },
      { name: "CEPT University", distance: "1.2 km", type: "college" },
      { name: "Law Garden Night Market", distance: "2.1 km", type: "market" },
      { name: "Ahmedabad Metro Station", distance: "1.0 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Gathiya & Papaya Sambharo", lunch: "Gujarati Thali with Dal Bhat", snacks: "Tea & Sev Khamani", dinner: "Ringan No Olo, Bajri No Rotlo" },
      Tuesday: { breakfast: "Sandwiches & Coffee", lunch: "Chole Kulche, Jeera Rice", snacks: "Bhel", dinner: "Dal Fry, Rice, Phulka" },
      Wednesday: { breakfast: "Poha & Lemonade", lunch: "Paneer Lababdar, Roti, Pulav", snacks: "Biscuits", dinner: "Sev Tameta, Rotli" },
      Thursday: { breakfast: "Idli Podi", lunch: "Kadhi Pakoda, Rice, Bhindi", snacks: "Tea & Khakhra", dinner: "Khichdi & Buttermilk" },
      Friday: { breakfast: "Methi Thepla, Chhundo", lunch: "Rajma Chawal Feast", snacks: "Samosa", dinner: "Tawa Pulao & Raita" },
      Saturday: { breakfast: "Aloo Puri", lunch: "Veg Hakka Noodles, Manchurian", snacks: "Tea", dinner: "Pav Bhaji with Extra Butter" },
      Sunday: { breakfast: "Chana Puri & Halwa", lunch: "Celebration Gujarati Thali (Basundi & Puri)", snacks: "Cold Cocoa", dinner: "Light Dinner" }
    },
    foodType: "Veg",
    owner: {
      name: "Chirag Gandhi",
      phone: "+91 97129 44880",
      whatsapp: "+919712944880",
      role: "Founder & Director",
      verified: true,
      responseTime: "Responds in 10 mins"
    },
    reviews: [
      { user: "Aakash Mehta", role: "CEPT Architecture Student", date: "October 2026", rating: 5, comment: "Architect-designed building with amazing natural light and top-notch hygiene." }
    ]
  },
  {
    id: "pg-ahmd-02",
    name: "SG Highway Techies PG",
    tagline: "High-speed optical internet & buffet meals for IT pros near Makarba",
    type: "pg",
    gender: "Boys",
    city: "Ahmedabad",
    state: "Gujarat",
    area: "SG Highway",
    address: "Near Pinnacle Business Park, Prahlad Nagar Extension, SG Highway, Ahmedabad, Gujarat 380015",
    coordinates: { lat: 23.0035, lng: 72.5028 },
    verified: true,
    rating: 4.3,
    reviewCount: 96,
    featured: false,
    price: 8500,
    deposit: 8500,
    maintenance: 300,
    electricity: "Separate digital meter",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "1 Month",
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Single", rent: 13500, totalBeds: 8, availableBeds: 1 },
      { type: "Double", rent: 8500, totalBeds: 24, availableBeds: 4 },
      { type: "Triple", rent: 6800, totalBeds: 18, availableBeds: 5 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking", "CCTV", "Power Backup"],
    tenantsInfo: {
      studentRatio: "10% Students",
      workingRatio: "90% Tech/Startup Employees",
      totalOccupants: 50,
      genderMix: "Boys Only",
      atmosphere: "Work-focused, night owls"
    },
    houseRules: {
      gateTiming: "24x7 Entry with biometric",
      visitors: "Allowed till 9:00 PM",
      smokingDrinking: "Prohibited inside rooms",
      pets: "Not allowed",
      quietHours: "Midnight - 7:00 AM"
    },
    categoryScores: { cleanliness: 4.4, food: 4.1, safety: 4.6, valueForMoney: 4.4 },
    nearbyPlaces: [
      { name: "Prahlad Nagar Corporate Park", distance: "0.8 km", type: "office" },
      { name: "Titanium City Center", distance: "1.5 km", type: "office" },
      { name: "Zydus Hospital", distance: "4.2 km", type: "hospital" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha, Boiled Eggs / Paneer", lunch: "Dal Tadka, Rice, 3 Sabzi, Phulka", snacks: "Tea, Rusks", dinner: "Veg Kolhapuri, Rice, Roti" },
      Tuesday: { breakfast: "Aloo Paratha & Curd", lunch: "Rajma Masala, Steamed Rice", snacks: "Coffee", dinner: "Kadhi Khichdi, Papad" },
      Wednesday: { breakfast: "Uttapam & Chutney", lunch: "Chole Puri, Jeera Rice", snacks: "Bhel", dinner: "Egg Curry / Shahi Paneer, Roti" },
      Thursday: { breakfast: "Thepla with Pickle", lunch: "Mix Veg, Dal, Rice, Phulka", snacks: "Tea & Biscuits", dinner: "Aloo Gobhi, Rice, Dal" },
      Friday: { breakfast: "Bread Butter Omelette / Poha", lunch: "Paneer Butter Masala, Pulav", snacks: "Samosa", dinner: "Chicken Curry / Malai Kofta, Naan" },
      Saturday: { breakfast: "Upma, Chutney", lunch: "Veg Fried Rice, Manchurian", snacks: "Tea", dinner: "Pav Bhaji" },
      Sunday: { breakfast: "Puri Bhaji & Sweet", lunch: "Sunday Feast Biryani", snacks: "Cold Drink", dinner: "Light Khichdi" }
    },
    foodType: "Both",
    owner: {
      name: "Pratik Vora",
      phone: "+91 98982 77011",
      whatsapp: "+919898277011",
      role: "Hostel Admin",
      verified: true,
      responseTime: "Responds in 20 mins"
    },
    reviews: [
      { user: "Nikhil Verma", role: "Frontend Dev", date: "August 2026", rating: 4.5, comment: "The 300 Mbps leased line internet has zero downtime, which was essential for my remote job." }
    ]
  },

  // --- MAHARASHTRA - PUNE ---
  {
    id: "pg-pune-01",
    name: "Symbiosis Pride Youth PG",
    tagline: "Trendy student housing 5 mins from Symbiosis Viman Nagar campus",
    type: "pg",
    gender: "Co-ed",
    city: "Pune",
    state: "Maharashtra",
    area: "Viman Nagar",
    address: "Lane 4, Near Symbiosis International School, Viman Nagar, Pune, Maharashtra 411014",
    coordinates: { lat: 18.5679, lng: 73.9143 },
    verified: true,
    rating: 4.8,
    reviewCount: 240,
    featured: true,
    price: 11000,
    deposit: 15000,
    maintenance: 500,
    electricity: "₹10/unit",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "3 Months",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 18000, totalBeds: 12, availableBeds: 2 },
      { type: "Double", rent: 11000, totalBeds: 36, availableBeds: 8 },
      { type: "Triple", rent: 8500, totalBeds: 24, availableBeds: 4 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Gym", "Parking", "CCTV", "Gaming Zone"],
    tenantsInfo: {
      studentRatio: "85% Symbiosis & MIT Pune Students",
      workingRatio: "15% Aviation / Tech",
      totalOccupants: 72,
      genderMix: "Separate Floors for Boys & Girls",
      atmosphere: "Trendy, creative, multi-cultural"
    },
    houseRules: {
      gateTiming: "11:30 PM (Digital pass on weekend)",
      visitors: "Common lounge open till 8:30 PM",
      smokingDrinking: "Designated terrace only",
      pets: "Not allowed",
      quietHours: "Midnight - 7:00 AM"
    },
    categoryScores: { cleanliness: 4.8, food: 4.7, safety: 4.9, valueForMoney: 4.5 },
    nearbyPlaces: [
      { name: "Symbiosis Campus Viman Nagar", distance: "0.4 km", type: "college" },
      { name: "Phoenix Marketcity Mall", distance: "0.9 km", type: "market" },
      { name: "Pune Airport (PNQ)", distance: "1.8 km", type: "transit" },
      { name: "EON Free Zone IT Park Kharadi", distance: "4.5 km", type: "office" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Misal Pav / Cornflakes", lunch: "Dal Tadka, Steamed Rice, Bhindi Masala, Chapati", snacks: "Tea, Bun Maska", dinner: "Aloo Jeera, Paneer Makhani, Phulka" },
      Tuesday: { breakfast: "Poha with Sev", lunch: "Rajma Masala, Rice, Salad, Roti", snacks: "Cold Coffee", dinner: "Veg Pulao, Boondi Raita" },
      Wednesday: { breakfast: "South Indian Idli Medu Vada", lunch: "Chole Bhature, Sweet Lassi", snacks: "Maggi & Tea", dinner: "Paneer Lababdar, Butter Roti" },
      Thursday: { breakfast: "Egg Bhurji / Paneer Bhurji with Toast", lunch: "Mix Veg, Dal, Steamed Rice, Roti", snacks: "Cookies & Green Tea", dinner: "Kadhi Khichdi, Batata Vada" },
      Friday: { breakfast: "Aloo Paratha, Curd", lunch: "Veg & Non-Veg Biryani Special", snacks: "Samosa Chaat", dinner: "Chicken Kolhapuri / Paneer Handi" },
      Saturday: { breakfast: "American Pancakes / French Toast", lunch: "Chef's Continental Spread", snacks: "Iced Tea", dinner: "Pasta Bar & Garlic Bread" },
      Sunday: { breakfast: "Poori Bhaji & Shrikhand", lunch: "Grand Maharashtrian Feast", snacks: "High Tea", dinner: "Light Soup & Sandwiches" }
    },
    foodType: "Both",
    owner: {
      name: "Rohit Deshmukh",
      phone: "+91 98220 89100",
      whatsapp: "+919822089100",
      role: "Managing Director",
      verified: true,
      responseTime: "Responds in 15 mins"
    },
    reviews: [
      { user: "Shreya Kulkarni", role: "Symbiosis Law Student", date: "October 2026", rating: 5, comment: "The gaming zone with PS5 and the study cafe on the 5th floor are absolute highlights. Super close to college." }
    ]
  },
  {
    id: "pg-pune-02",
    name: "Hinjewadi Tech Residency",
    tagline: "Dedicated IT corridor PG with doorstep shuttle to Infosys, Wipro & TCS",
    type: "pg",
    gender: "Boys",
    city: "Pune",
    state: "Maharashtra",
    area: "Hinjewadi",
    address: "Phase 1, Near Blue Ridge Township, Hinjewadi, Pune, Maharashtra 411057",
    coordinates: { lat: 18.5913, lng: 73.7389 },
    verified: true,
    rating: 4.4,
    reviewCount: 175,
    featured: false,
    price: 8000,
    deposit: 8000,
    maintenance: 300,
    electricity: "₹9/unit split per head",
    waterCharges: "24/7 solar hot water included",
    noticePeriod: "30 Days",
    lockInPeriod: "1 Month",
    photos: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Single", rent: 14000, totalBeds: 15, availableBeds: 3 },
      { type: "Double", rent: 8000, totalBeds: 40, availableBeds: 7 },
      { type: "Triple", rent: 6200, totalBeds: 30, availableBeds: 6 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Parking", "CCTV", "Gym", "Power Backup"],
    tenantsInfo: {
      studentRatio: "5% Interns",
      workingRatio: "95% Tech Professionals",
      totalOccupants: 85,
      genderMix: "Boys Only",
      atmosphere: "Productive, calm, shift-friendly"
    },
    houseRules: {
      gateTiming: "24x7 Open (Catered to night shifts)",
      visitors: "Allowed in lounge",
      smokingDrinking: "Terrace only",
      pets: "Not allowed",
      quietHours: "Shift quiet zones"
    },
    categoryScores: { cleanliness: 4.5, food: 4.2, safety: 4.6, valueForMoney: 4.7 },
    nearbyPlaces: [
      { name: "Infosys Hinjewadi Phase 1", distance: "0.6 km", type: "office" },
      { name: "Wipro Technologies", distance: "1.1 km", type: "office" },
      { name: "Xion Mall Hinjewadi", distance: "1.8 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha / Omelette", lunch: "Rajma, Rice, Roti, Salad", snacks: "Tea & Samosa", dinner: "Aloo Gobhi, Dal, Phulka" },
      Tuesday: { breakfast: "Idli Sambar", lunch: "Paneer, Dal Fry, Jeera Rice, Chapati", snacks: "Coffee", dinner: "Kadhi Khichdi, Batata Vada" },
      Wednesday: { breakfast: "Upma, Chutney", lunch: "Chicken Curry / Chole, Rice, Roti", snacks: "Poha Chivda", dinner: "Sev Bhaji, Chapati, Dal" },
      Thursday: { breakfast: "Paratha with Curd", lunch: "Dal Makhani, Rice, Roti", snacks: "Tea", dinner: "Veg Pulao, Raita" },
      Friday: { breakfast: "Misal Pav", lunch: "Egg Curry / Shahi Paneer, Rice, Roti", snacks: "Biscuits", dinner: "Special Biryani" },
      Saturday: { breakfast: "Bread Omelette / Poha", lunch: "Chinese Combo", snacks: "Chai", dinner: "Pav Bhaji" },
      Sunday: { breakfast: "Puri Sabzi", lunch: "Grand Non-Veg & Veg Buffet", snacks: "Coffee", dinner: "Khichdi & Chhaas" }
    },
    foodType: "Both",
    owner: {
      name: "Sachin Gaikwad",
      phone: "+91 97654 32190",
      whatsapp: "+919765432190",
      role: "Property Host",
      verified: true,
      responseTime: "Responds in 1 hour"
    },
    reviews: [
      { user: "Aditya Roy", role: "Software Engineer at Wipro", date: "September 2026", rating: 4.5, comment: "Being able to walk to work in 10 minutes saves me 2 hours of Pune traffic every day." }
    ]
  },

  // --- KARNATAKA - BENGALURU ---
  {
    id: "pg-blr-01",
    name: "Koramangala Silicon Stays",
    tagline: "Vibrant co-living hub with high-speed WiFi, rooftop workspace & community events",
    type: "pg",
    gender: "Co-ed",
    city: "Bengaluru",
    state: "Karnataka",
    area: "Koramangala",
    address: "4th Block, 80 Feet Road, Near Sony World Signal, Koramangala, Bengaluru, Karnataka 560034",
    coordinates: { lat: 12.9352, lng: 77.6245 },
    verified: true,
    rating: 4.7,
    reviewCount: 310,
    featured: true,
    price: 13500,
    deposit: 15000,
    maintenance: 600,
    electricity: "Prepaid smart card",
    waterCharges: "24/7 Treated water included",
    noticePeriod: "30 Days",
    lockInPeriod: "2 Months",
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 22000, totalBeds: 16, availableBeds: 3 },
      { type: "Double", rent: 13500, totalBeds: 40, availableBeds: 5 },
      { type: "Triple", rent: 9800, totalBeds: 24, availableBeds: 2 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Gym", "Parking", "CCTV", "Power Backup", "Housekeeping"],
    tenantsInfo: {
      studentRatio: "10% Interns (Christ University)",
      workingRatio: "90% Startup Founders & Engineers",
      totalOccupants: 80,
      genderMix: "Co-ed with biometric floor separation",
      atmosphere: "Hyper-collaborative, startup culture"
    },
    houseRules: {
      gateTiming: "24x7 Keycard Access",
      visitors: "Allowed in rooftop cafe till 10:00 PM",
      smokingDrinking: "Rooftop deck only",
      pets: "Pet-friendly common areas",
      quietHours: "Midnight - 7:00 AM"
    },
    categoryScores: { cleanliness: 4.8, food: 4.6, safety: 4.9, valueForMoney: 4.6 },
    nearbyPlaces: [
      { name: "Sony World Signal & 100ft Road", distance: "0.2 km", type: "market" },
      { name: "Christ University Hosur Road", distance: "2.8 km", type: "college" },
      { name: "Nexus Koramangala Mall", distance: "1.2 km", type: "market" },
      { name: "Silk Board Metro Station", distance: "3.5 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Crispy Dosa, Sambar, 2 Chutneys", lunch: "South & North Indian Combo Thali", snacks: "Filter Coffee & Banana Chips", dinner: "Paneer Butter Masala, Phulka, Rice" },
      Tuesday: { breakfast: "Poori Saagu", lunch: "Dal Makhani, Jeera Rice, Chapati", snacks: "Chai & Biscuits", dinner: "Veg Pulao, Curd, Roasted Papad" },
      Wednesday: { breakfast: "Idli Vada Combo", lunch: "Hyderabadi Chicken / Paneer Biryani", snacks: "Onion Pakoda", dinner: "Aloo Palak, Rice, Rasam" },
      Thursday: { breakfast: "Stuffed Aloo Paratha", lunch: "Rajma Chawal, Roti, Curd", snacks: "Green Tea & Rusks", dinner: "Mixed Veg Curry, Phulka, Dal" },
      Friday: { breakfast: "Poha with Roasted Peanuts", lunch: "Bisi Bele Bath with Boondi", snacks: "Samosa", dinner: "Butter Chicken / Shahi Paneer, Naan" },
      Saturday: { breakfast: "Uttapam & Podi", lunch: "Veg Fried Rice & Gobi Manchurian", snacks: "Filter Coffee", dinner: "Italian Pasta Night" },
      Sunday: { breakfast: "Akki Roti with Chutney", lunch: "Grand Sunday Feast Buffet", snacks: "Artisan Tea", dinner: "Comfort Curd Rice & Tadka Dal" }
    },
    foodType: "Both",
    owner: {
      name: "Naveen Reddy & Archana",
      phone: "+91 98450 12890",
      whatsapp: "+919845012890",
      role: "Community Managers",
      verified: true,
      responseTime: "Responds in 10 mins"
    },
    reviews: [
      { user: "Varun Nair", role: "Product Manager", date: "October 2026", rating: 5, comment: "I found my startup co-founder here! The networking and rooftop vibe are second to none in Bengaluru." }
    ]
  },
  {
    id: "pg-blr-02",
    name: "HSR Layout Serene Stays (Girls)",
    tagline: "Boutique girls PG with biometric security, lift, chef-cooked meals in Sector 3",
    type: "pg",
    gender: "Girls",
    city: "Bengaluru",
    state: "Karnataka",
    area: "HSR Layout",
    address: "14th Main, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
    coordinates: { lat: 12.9116, lng: 77.6389 },
    verified: true,
    rating: 4.9,
    reviewCount: 220,
    featured: true,
    price: 12000,
    deposit: 15000,
    maintenance: 400,
    electricity: "Separate submeter",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "3 Months",
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 19500, totalBeds: 10, availableBeds: 1 },
      { type: "Double", rent: 12000, totalBeds: 28, availableBeds: 4 },
      { type: "Triple", rent: 8900, totalBeds: 18, availableBeds: 3 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Study Room", "Laundry", "CCTV", "Geyser", "Lift", "Power Backup"],
    tenantsInfo: {
      studentRatio: "15% College Students",
      workingRatio: "85% Tech & Design Professionals",
      totalOccupants: 56,
      genderMix: "100% Female Residents",
      atmosphere: "Safe, aesthetic, welcoming"
    },
    houseRules: {
      gateTiming: "10:30 PM (Self-checkin with guardian OTP)",
      visitors: "Female friends & parents in lounge",
      smokingDrinking: "Strictly prohibited",
      pets: "Not allowed",
      quietHours: "10:30 PM - 6:30 AM"
    },
    categoryScores: { cleanliness: 5.0, food: 4.8, safety: 5.0, valueForMoney: 4.7 },
    nearbyPlaces: [
      { name: "HSR BDA Complex", distance: "0.6 km", type: "market" },
      { name: "Agara Lake Park", distance: "1.2 km", type: "recreation" },
      { name: "Electronic City Flyover Entry", distance: "2.5 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Idli Sambar, Chutney", lunch: "Paneer, Dal, Rice, Phulka", snacks: "Tea & Sundal", dinner: "Kadhi Khichdi, Papad, Sabzi" },
      Tuesday: { breakfast: "Aloo Paratha, Curd", lunch: "Rajma Chawal, Roti, Salad", snacks: "Coffee & Biscuits", dinner: "Sev Tomato, Phulka, Rice" },
      Wednesday: { breakfast: "Set Dosa, Vada", lunch: "Chole Bhature, Sweet Lassi", snacks: "Bhel", dinner: "Dal Fry, Jeera Rice, Chapati" },
      Thursday: { breakfast: "Poha, Boiled Egg/Sprouts", lunch: "Dal Makhani, Rice, Roti", snacks: "Tea & Khakhra", dinner: "Aloo Gobhi, Phulka, Rasam" },
      Friday: { breakfast: "Upma, Coconut Chutney", lunch: "Special Dum Biryani & Raita", snacks: "Puff", dinner: "Egg Curry / Malai Kofta, Paratha" },
      Saturday: { breakfast: "Poori Masala", lunch: "Pav Bhaji & Pulao", snacks: "Cold Coffee", dinner: "Chinese Noodles & Manchurian" },
      Sunday: { breakfast: "Appam with Stew", lunch: "Grand Sunday Feast with Sweet", snacks: "Tea & Cake", dinner: "Light Dinner" }
    },
    foodType: "Both",
    owner: {
      name: "Mrs. Lalitha Raman",
      phone: "+91 97412 88701",
      whatsapp: "+919741288701",
      role: "Resident Warden & Owner",
      verified: true,
      responseTime: "Responds in 5 mins"
    },
    reviews: [
      { user: "Sneha Murthy", role: "Frontend Engineer at Swiggy", date: "October 2026", rating: 5, comment: "I have lived here for 2 years. The safety is 10/10, Lalitha aunty is so caring, and the food tastes just like home." }
    ]
  },
  {
    id: "pg-blr-03",
    name: "Electronic City Smart Campus PG",
    tagline: "Modern hostel near Wipro Gate 5 & Infosys with AC, gym & power backup",
    type: "pg",
    gender: "Boys",
    city: "Bengaluru",
    state: "Karnataka",
    area: "Electronic City",
    address: "Phase 1, Neeladri Road, Near Wipro Gate 5, Electronic City, Bengaluru, Karnataka 560100",
    coordinates: { lat: 12.8399, lng: 77.6770 },
    verified: true,
    rating: 4.3,
    reviewCount: 140,
    featured: false,
    price: 7800,
    deposit: 8000,
    maintenance: 250,
    electricity: "Sub-meter per room",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "1 Month",
    photos: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Single", rent: 13000, totalBeds: 10, availableBeds: 2 },
      { type: "Double", rent: 7800, totalBeds: 30, availableBeds: 6 },
      { type: "Triple", rent: 5800, totalBeds: 24, availableBeds: 5 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Gym", "Parking", "CCTV", "Power Backup"],
    tenantsInfo: {
      studentRatio: "10% Interns",
      workingRatio: "90% Tech Support & Developers",
      totalOccupants: 64,
      genderMix: "Boys Only",
      atmosphere: "Calm, shift-friendly"
    },
    houseRules: {
      gateTiming: "24x7 Biometric",
      visitors: "Allowed in lounge",
      smokingDrinking: "Prohibited",
      pets: "Not allowed",
      quietHours: "Midnight - 6:00 AM"
    },
    categoryScores: { cleanliness: 4.3, food: 4.1, safety: 4.5, valueForMoney: 4.6 },
    nearbyPlaces: [
      { name: "Wipro Technologies Gate 5", distance: "0.4 km", type: "office" },
      { name: "Infosys Campus Main Gate", distance: "1.0 km", type: "office" },
      { name: "Neeladri High Street Market", distance: "0.3 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Dosa, Chutney", lunch: "Rice, Sambar, Sabzi, Roti", snacks: "Tea", dinner: "Dal Fry, Jeera Rice, Chapati" },
      Tuesday: { breakfast: "Poori Saagu", lunch: "Rajma Chawal, Phulka", snacks: "Coffee", dinner: "Veg Pulao & Raita" },
      Wednesday: { breakfast: "Idli Sambar", lunch: "Chicken Curry / Paneer, Rice, Roti", snacks: "Tea", dinner: "Aloo Gobhi, Phulka, Rice" },
      Thursday: { breakfast: "Poha, Chutney", lunch: "Dal Makhani, Rice, Chapati", snacks: "Biscuits", dinner: "Egg Bhurji / Paneer, Roti" },
      Friday: { breakfast: "Upma, Chutney", lunch: "Biryani Special", snacks: "Tea", dinner: "Kadhi Khichdi, Papad" },
      Saturday: { breakfast: "Aloo Paratha", lunch: "Fried Rice & Manchurian", snacks: "Chai", dinner: "Pav Bhaji" },
      Sunday: { breakfast: "Bhature Chole", lunch: "Special Feast Meal", snacks: "Coffee", dinner: "Light Dinner" }
    },
    foodType: "Both",
    owner: {
      name: "Manjunath Gowda",
      phone: "+91 99012 34567",
      whatsapp: "+919901234567",
      role: "Hostel Warden",
      verified: true,
      responseTime: "Responds in 30 mins"
    },
    reviews: [
      { user: "Ankit Sharma", role: "Software Tester", date: "August 2026", rating: 4, comment: "Affordable rent in Electronic City. Neeladri road has plenty of cafes and gyms." }
    ]
  },

  // --- DELHI NCR ---
  {
    id: "pg-del-01",
    name: "North Campus Scholars Nest",
    tagline: "Premier student PG right next to Delhi University North Campus & Metro",
    type: "pg",
    gender: "Girls",
    city: "Delhi",
    state: "Delhi NCR",
    area: "North Campus",
    address: "Block UA, Jawahar Nagar, Near Hansraj College, North Campus DU, Delhi 110007",
    coordinates: { lat: 28.6832, lng: 77.2104 },
    verified: true,
    rating: 4.8,
    reviewCount: 290,
    featured: true,
    price: 12500,
    deposit: 15000,
    maintenance: 500,
    electricity: "Separate digital meter",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "Full Academic Session",
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 20000, totalBeds: 10, availableBeds: 1 },
      { type: "Double", rent: 12500, totalBeds: 34, availableBeds: 5 },
      { type: "Triple", rent: 9500, totalBeds: 20, availableBeds: 3 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Study Room", "Laundry", "CCTV", "Geyser", "Power Backup", "Security Guard"],
    tenantsInfo: {
      studentRatio: "95% DU North Campus (Miranda, Hansraj, SRCC, Hindu)",
      workingRatio: "5% UPSC Aspirants",
      totalOccupants: 64,
      genderMix: "100% Girls",
      atmosphere: "Highly academic, intellectual, safe"
    },
    houseRules: {
      gateTiming: "9:30 PM (College biometric logging)",
      visitors: "Parents only in reception",
      smokingDrinking: "Strictly prohibited",
      pets: "Not allowed",
      quietHours: "10:30 PM - 6:00 AM"
    },
    categoryScores: { cleanliness: 4.8, food: 4.7, safety: 5.0, valueForMoney: 4.6 },
    nearbyPlaces: [
      { name: "Hansraj College & Hindu College", distance: "0.5 km", type: "college" },
      { name: "Vishwa Vidyalaya Metro Station", distance: "0.8 km", type: "transit" },
      { name: "Kamla Nagar Market", distance: "0.3 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Aloo Pyaz Paratha & Curd", lunch: "Rajma Masala, Basmati Chawal, Phulka", snacks: "Tea & Samosa", dinner: "Paneer Lababdar, Phulka, Dal" },
      Tuesday: { breakfast: "Poha with Roasted Peanuts", lunch: "Kadhi Pakora, Steamed Rice, Roti", snacks: "Biscuits & Coffee", dinner: "Mix Veg, Dal Tadka, Chapati" },
      Wednesday: { breakfast: "Idli Sambar & Coconut Chutney", lunch: "Chole Bhature with Pickled Chillies", snacks: "Bhel Puri", dinner: "Dal Makhani, Jeera Rice, Tandoori Roti" },
      Thursday: { breakfast: "Methi / Gobhi Paratha", lunch: "Dum Aloo, Jeera Rice, Phulka", snacks: "Tea & Cookies", dinner: "Bhindi Masala, Dal, Rice, Roti" },
      Friday: { breakfast: "Bread Butter Omelette / Paneer Sandwich", lunch: "Paneer Makhani, Naan, Pulao", snacks: "Maggi & Chai", dinner: "Egg Curry / Shahi Paneer, Rice, Roti" },
      Saturday: { breakfast: "Poori Chana & Halwa", lunch: "Veg Biryani, Boondi Raita, Papad", snacks: "Cold Coffee", dinner: "Pav Bhaji with Extra Butter" },
      Sunday: { breakfast: "Bedmi Poori & Aloo Sabzi", lunch: "Grand Sunday Feast Thali with Gulab Jamun", snacks: "High Tea", dinner: "Light Khichdi & Buttermilk" }
    },
    foodType: "Both",
    owner: {
      name: "Mrs. Shashi Kapoor",
      phone: "+91 98110 54321",
      whatsapp: "+919811054321",
      role: "Hostel Warden",
      verified: true,
      responseTime: "Responds in 10 mins"
    },
    reviews: [
      { user: "Meenakshi Sundaram", role: "SRCC Student", date: "October 2026", rating: 5, comment: "Right in the heart of Kamla Nagar. Walking distance to all colleges and the food reminds me of mum's cooking." }
    ]
  },
  {
    id: "pg-del-02",
    name: "Gurugram Cyber Hub Co-Living",
    tagline: "Corporate co-living suites 2 minutes from DLF Cyber City & Rapid Metro",
    type: "room",
    gender: "Co-ed",
    city: "Gurugram",
    state: "Delhi NCR",
    area: "Cyber City",
    address: "DLF Phase 2, Near Sikanderpur Metro, Gurugram, Haryana 122002",
    coordinates: { lat: 28.4905, lng: 77.0890 },
    verified: true,
    rating: 4.7,
    reviewCount: 195,
    featured: true,
    price: 14000,
    deposit: 18000,
    maintenance: 600,
    electricity: "₹10/unit",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "1 Month",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 24000, totalBeds: 12, availableBeds: 2 },
      { type: "Double", rent: 14000, totalBeds: 32, availableBeds: 6 },
      { type: "Private", rent: 32000, totalBeds: 6, availableBeds: 1 }
    ],
    facilities: ["WiFi", "AC", "Laundry", "Study Room", "Parking", "CCTV", "Gym", "Geyser", "Housekeeping", "Power Backup"],
    tenantsInfo: {
      studentRatio: "5% Consultants / Trainees",
      workingRatio: "95% Tech, Consulting (McKinsey, Google, Microsoft)",
      totalOccupants: 50,
      genderMix: "Co-ed",
      atmosphere: "Sophisticated corporate living"
    },
    houseRules: {
      gateTiming: "24x7 Digital Card Access",
      visitors: "Allowed with app sign-in",
      smokingDrinking: "Designated terrace lounge",
      pets: "Small pets allowed",
      quietHours: "11:30 PM - 7:00 AM"
    },
    categoryScores: { cleanliness: 4.9, food: 4.5, safety: 4.9, valueForMoney: 4.5 },
    nearbyPlaces: [
      { name: "DLF Cyber City Building 10", distance: "0.5 km", type: "office" },
      { name: "Cyber Hub Food Plaza", distance: "0.6 km", type: "market" },
      { name: "Sikanderpur Metro Station", distance: "0.8 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Oats / Scrambled Eggs on Sourdough", lunch: "Healthy Bowl, Grilled Protein, Brown Rice", snacks: "Espresso & Almond Cookies", dinner: "Paneer Steak / Chicken Breast, Herb Rice" },
      Tuesday: { breakfast: "Masala Dosa, Filter Coffee", lunch: "North Indian Executive Platter", snacks: "Green Tea & Trail Mix", dinner: "Dal Makhani, Tandoori Roti, Salad" },
      Wednesday: { breakfast: "Avocado Toast / Poha", lunch: "Steamed Rice, Rajma, Curd", snacks: "Cold Brew", dinner: "Thai Green Curry with Jasmine Rice" },
      Thursday: { breakfast: "Stuffed Paratha & Raita", lunch: "Mix Veg, Dal Tadka, Phulka", snacks: "Fresh Juice", dinner: "Italian Pasta Bar" },
      Friday: { breakfast: "Belgian Waffles & Maple", lunch: "Gourmet Biryani Feast", snacks: "Iced Tea", dinner: "Mexican Taco & Bowl Night" },
      Saturday: { breakfast: "Full English Spread", lunch: "Chef's Brunch", snacks: "Pastry & Cappuccino", dinner: "Woodfired Pizza on Rooftop" },
      Sunday: { breakfast: "Poori Chana", lunch: "Sunday Roast / Thali", snacks: "High Tea", dinner: "Comfort Khichdi & Buttermilk" }
    },
    foodType: "Both",
    owner: {
      name: "Vikram Malhotra",
      phone: "+91 99100 88234",
      whatsapp: "+919910088234",
      role: "Property Host",
      verified: true,
      responseTime: "Responds in 15 mins"
    },
    reviews: [
      { user: "Siddharth Rao", role: "Strategy Consultant", date: "October 2026", rating: 5, comment: "Can literally walk to my office at Cyber Hub in 8 minutes. The high-speed internet and gym are top tier." }
    ]
  },

  // --- RAJASTHAN - JAIPUR ---
  {
    id: "pg-jpr-01",
    name: "Pink City Royale Student PG",
    tagline: "Heritage-styled modern hostel near MNIT Jaipur & Malviya Nagar",
    type: "pg",
    gender: "Boys",
    city: "Jaipur",
    state: "Rajasthan",
    area: "Malviya Nagar",
    address: "B-21, Near World Trade Park (WTP), Malviya Nagar, Jaipur, Rajasthan 302017",
    coordinates: { lat: 26.8524, lng: 75.8052 },
    verified: true,
    rating: 4.5,
    reviewCount: 115,
    featured: true,
    price: 7500,
    deposit: 7500,
    maintenance: 300,
    electricity: "Sub-meter ₹8.5/unit",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "2 Months",
    photos: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Single", rent: 12000, totalBeds: 6, availableBeds: 1 },
      { type: "Double", rent: 7500, totalBeds: 24, availableBeds: 5 },
      { type: "Triple", rent: 5800, totalBeds: 18, availableBeds: 4 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking", "CCTV", "Power Backup"],
    tenantsInfo: {
      studentRatio: "70% MNIT & Coaching Students",
      workingRatio: "30% Tech Professionals",
      totalOccupants: 48,
      genderMix: "Boys Only",
      atmosphere: "Focused study environment"
    },
    houseRules: {
      gateTiming: "10:30 PM",
      visitors: "Day visitors in study zone",
      smokingDrinking: "Strictly prohibited",
      pets: "Not allowed",
      quietHours: "11:00 PM - 6:00 AM"
    },
    categoryScores: { cleanliness: 4.5, food: 4.6, safety: 4.7, valueForMoney: 4.8 },
    nearbyPlaces: [
      { name: "MNIT Jaipur Campus", distance: "0.8 km", type: "college" },
      { name: "World Trade Park (WTP) Mall", distance: "0.5 km", type: "market" },
      { name: "Jaipur International Airport", distance: "3.2 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha & Tea", lunch: "Dal Baati Churma, Gatte Ki Sabzi", snacks: "Tea & Rusks", dinner: "Aloo Gobhi, Phulka, Rice" },
      Tuesday: { breakfast: "Aloo Pyaz Paratha", lunch: "Rajma Chawal, Roti, Curd", snacks: "Coffee", dinner: "Kadhi Pakora, Rice, Roti" },
      Wednesday: { breakfast: "Idli Sambar", lunch: "Chole Bhature, Lassi", snacks: "Samosa", dinner: "Sev Tamatar, Paratha, Dal" },
      Thursday: { breakfast: "Methi Paratha", lunch: "Dal Makhani, Rice, Chapati", snacks: "Tea", dinner: "Paneer Bhurji, Phulka" },
      Friday: { breakfast: "Poha & Milk", lunch: "Paneer Butter Masala, Pulav", snacks: "Biscuits", dinner: "Moong Dal, Rice, Roti" },
      Saturday: { breakfast: "Bread Pakoda", lunch: "Pav Bhaji, Pulao", snacks: "Chai", dinner: "Khichdi & Buttermilk" },
      Sunday: { breakfast: "Kachori & Jalebi Special", lunch: "Grand Royal Rajasthani Thali", snacks: "Cold Drink", dinner: "Light Dinner" }
    },
    foodType: "Veg",
    owner: {
      name: "Bhanwar Singh Rathore",
      phone: "+91 94140 66720",
      whatsapp: "+919414066720",
      role: "Hostel Warden",
      verified: true,
      responseTime: "Responds in 20 mins"
    },
    reviews: [
      { user: "Manish Choudhary", role: "MNIT Civil Student", date: "September 2026", rating: 5, comment: "Authentic Dal Baati on Mondays is legendary. Super clean rooms and study-friendly atmosphere." }
    ]
  },
  {
    id: "pg-jpr-02",
    name: "Jaipur Padmavati Girls Haven",
    tagline: "Secure, home-like girls accommodation near Tonk Road with garden & organic food",
    type: "pg",
    gender: "Girls",
    city: "Jaipur",
    state: "Rajasthan",
    area: "Tonk Road",
    address: "Plot 45, Mahaveer Nagar, Near Gopalpura Flyover, Tonk Road, Jaipur, Rajasthan 302018",
    coordinates: { lat: 26.8650, lng: 75.7950 },
    verified: true,
    rating: 4.7,
    reviewCount: 92,
    featured: false,
    price: 8000,
    deposit: 8000,
    maintenance: 250,
    electricity: "Submetered",
    waterCharges: "Free",
    noticePeriod: "30 Days",
    lockInPeriod: "3 Months",
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Single", rent: 12500, totalBeds: 8, availableBeds: 2 },
      { type: "Double", rent: 8000, totalBeds: 20, availableBeds: 4 },
      { type: "Triple", rent: 6200, totalBeds: 15, availableBeds: 3 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Study Room", "Laundry", "CCTV", "Geyser", "RO Water"],
    tenantsInfo: {
      studentRatio: "85% Coaching & University Students",
      workingRatio: "15% Bank & Govt Officers",
      totalOccupants: 43,
      genderMix: "Girls Only",
      atmosphere: "Calm, protective, serene"
    },
    houseRules: {
      gateTiming: "9:45 PM (Strict)",
      visitors: "Female guardians only in reception",
      smokingDrinking: "Strictly prohibited",
      pets: "Not allowed",
      quietHours: "10:30 PM - 6:00 AM"
    },
    categoryScores: { cleanliness: 4.8, food: 4.7, safety: 4.9, valueForMoney: 4.6 },
    nearbyPlaces: [
      { name: "Gopalpura Bypass Coaching Hub", distance: "0.4 km", type: "college" },
      { name: "Jaipur Metro Station (Mansarovar)", distance: "2.5 km", type: "transit" },
      { name: "Gaurav Tower (GT Mall)", distance: "1.2 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha & Milk", lunch: "Dal, Rice, Roti, Gatta Masala", snacks: "Tea & Biscuits", dinner: "Mix Veg, Phulka, Dal" },
      Tuesday: { breakfast: "Aloo Paratha", lunch: "Rajma Chawal, Salad", snacks: "Tea", dinner: "Kadhi Khichdi" },
      Wednesday: { breakfast: "Idli Sambar", lunch: "Chole Puri, Jeera Rice", snacks: "Bhel", dinner: "Aloo Mutter, Chapati" },
      Thursday: { breakfast: "Thepla with Pickle", lunch: "Dal Makhani, Rice, Roti", snacks: "Coffee", dinner: "Bhindi Masala, Phulka" },
      Friday: { breakfast: "Upma", lunch: "Paneer Butter Masala, Pulao", snacks: "Samosa", dinner: "Dal Fry, Rice, Roti" },
      Saturday: { breakfast: "Bread Pakoda", lunch: "Pav Bhaji, Pulao", snacks: "Tea", dinner: "Khichdi & Buttermilk" },
      Sunday: { breakfast: "Pyaz Kachori & Jalebi", lunch: "Special Rajasthani Thali", snacks: "Milkshake", dinner: "Light Dinner" }
    },
    foodType: "Veg",
    owner: {
      name: "Mrs. Shobha Sharma",
      phone: "+91 94142 88310",
      whatsapp: "+919414288310",
      role: "Hostel Head",
      verified: true,
      responseTime: "Responds in 15 mins"
    },
    reviews: [
      { user: "Divya Shekhawat", role: "UPSC Aspirant", date: "August 2026", rating: 5, comment: "Peaceful environment to study 10+ hours a day. The food is hygienic and the warden aunty takes care of everything." }
    ]
  },

  // --- MAHARASHTRA - MUMBAI ---
  {
    id: "pg-mum-01",
    name: "Powai Lake View Co-Living",
    tagline: "High-rise serviced apartments overlooking Powai Lake near IIT Bombay & Hiranandani",
    type: "room",
    gender: "Co-ed",
    city: "Mumbai",
    state: "Maharashtra",
    area: "Powai",
    address: "Tower 4, Lake Pleasant, Hiranandani Gardens, Powai, Mumbai, Maharashtra 400076",
    coordinates: { lat: 19.1176, lng: 72.9060 },
    verified: true,
    rating: 4.8,
    reviewCount: 220,
    featured: true,
    price: 16500,
    deposit: 25000,
    maintenance: 800,
    electricity: "Actual unit billing",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "2 Months",
    photos: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 28000, totalBeds: 10, availableBeds: 2 },
      { type: "Double", rent: 16500, totalBeds: 24, availableBeds: 4 },
      { type: "Private", rent: 42000, totalBeds: 4, availableBeds: 1 }
    ],
    facilities: ["WiFi", "AC", "Laundry", "Study Room", "Gym", "Parking", "CCTV", "Swimming Pool", "Housekeeping", "Balcony"],
    tenantsInfo: {
      studentRatio: "20% IIT Bombay Research Scholars",
      workingRatio: "80% FinTech & Investment Bankers",
      totalOccupants: 38,
      genderMix: "Co-ed",
      atmosphere: "Luxurious, peaceful, scenic"
    },
    houseRules: {
      gateTiming: "24x7 Digital Access",
      visitors: "Allowed with gate pass",
      smokingDrinking: "Balcony only",
      pets: "Pets permitted",
      quietHours: "Midnight - 7:00 AM"
    },
    categoryScores: { cleanliness: 4.9, food: 4.5, safety: 5.0, valueForMoney: 4.5 },
    nearbyPlaces: [
      { name: "IIT Bombay Main Gate", distance: "1.1 km", type: "college" },
      { name: "Hiranandani High Street Galleria", distance: "0.4 km", type: "market" },
      { name: "Powai Lake Promenade", distance: "0.2 km", type: "recreation" },
      { name: "Chhatrapati Shivaji Maharaj Airport", distance: "6.5 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "French Toast / Scrambled Eggs", lunch: "Gourmet Salad Bar & Herb Rice", snacks: "Cappuccino & Cookies", dinner: "Grilled Cottage Cheese, Vegetables" },
      Tuesday: { breakfast: "Poha with Cashews", lunch: "North Indian Gourmet Thali", snacks: "Green Tea & Almonds", dinner: "Paneer Lababdar, Roti, Dal" },
      Wednesday: { breakfast: "Masala Dosa, Filter Coffee", lunch: "Steamed Rice, Dal Tadka, Bhindi", snacks: "Smoothie", dinner: "Penne Arrabiata with Garlic Bread" },
      Thursday: { breakfast: "Avocado Toast", lunch: "Rajma Chawal Executive Meal", snacks: "Chai & Biscuits", dinner: "Mix Veg, Phulka, Kadhi" },
      Friday: { breakfast: "Waffles with Berries", lunch: "Biryani & Raita Extravaganza", snacks: "Iced Latte", dinner: "Thai Curry & Jasmine Rice" },
      Saturday: { breakfast: "Pancakes & Eggs to order", lunch: "Weekend Chef's Special", snacks: "High Tea", dinner: "Artisan Pizza Night" },
      Sunday: { breakfast: "South Indian Deluxe Spread", lunch: "Sunday Grand Brunch", snacks: "Milkshake", dinner: "Comfort Khichdi & Curd" }
    },
    foodType: "Both",
    owner: {
      name: "Alok Merchant",
      phone: "+91 98200 45678",
      whatsapp: "+919820045678",
      role: "Luxury Property Host",
      verified: true,
      responseTime: "Responds in 10 mins"
    },
    reviews: [
      { user: "Rohan Khanna", role: "Venture Capitalist", date: "October 2026", rating: 5, comment: "Waking up to the view of Powai Lake every morning while walking to Hiranandani cafes is truly the best Mumbai experience." }
    ]
  },
  {
    id: "pg-mum-02",
    name: "Andheri West Metro Transit PG",
    tagline: "Conveniently located 3 mins from Andheri Railway & Metro Station",
    type: "pg",
    gender: "Boys",
    city: "Mumbai",
    state: "Maharashtra",
    area: "Andheri West",
    address: "Swami Vivekananda Road, Near Shoppers Stop, Andheri West, Mumbai, Maharashtra 400058",
    coordinates: { lat: 19.1197, lng: 72.8468 },
    verified: true,
    rating: 4.2,
    reviewCount: 160,
    featured: false,
    price: 9500,
    deposit: 12000,
    maintenance: 300,
    electricity: "Shared equally",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "1 Month",
    photos: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Single", rent: 16000, totalBeds: 8, availableBeds: 1 },
      { type: "Double", rent: 9500, totalBeds: 24, availableBeds: 4 },
      { type: "Triple", rent: 7500, totalBeds: 18, availableBeds: 3 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Parking", "CCTV", "RO Water"],
    tenantsInfo: {
      studentRatio: "30% Media & Film School Students",
      workingRatio: "70% Corporate Commuters",
      totalOccupants: 50,
      genderMix: "Boys Only",
      atmosphere: "Busy, energetic city life"
    },
    houseRules: {
      gateTiming: "11:30 PM (Local train extension allowed)",
      visitors: "Lobby only",
      smokingDrinking: "Prohibited",
      pets: "Not allowed",
      quietHours: "Midnight - 6:30 AM"
    },
    categoryScores: { cleanliness: 4.2, food: 4.1, safety: 4.4, valueForMoney: 4.5 },
    nearbyPlaces: [
      { name: "Andheri Railway & Metro Station", distance: "0.3 km", type: "transit" },
      { name: "Bhavans College", distance: "1.4 km", type: "college" },
      { name: "Infinity Mall Andheri", distance: "2.2 km", type: "market" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha, Tea", lunch: "Dal Tadka, Rice, 2 Sabzi, Chapati", snacks: "Chai & Biscuits", dinner: "Aloo Gobhi, Phulka, Dal" },
      Tuesday: { breakfast: "Upma, Chutney", lunch: "Rajma Chawal, Roti, Salad", snacks: "Coffee", dinner: "Kadhi Khichdi, Papad" },
      Wednesday: { breakfast: "Idli Sambar", lunch: "Chole Bhature", snacks: "Tea", dinner: "Paneer Handi, Chapati, Rice" },
      Thursday: { breakfast: "Aloo Paratha", lunch: "Dal Makhani, Rice, Roti", snacks: "Tea", dinner: "Mix Veg, Phulka, Dal" },
      Friday: { breakfast: "Bread Omelette / Poha", lunch: "Egg Curry / Shahi Paneer, Rice, Roti", snacks: "Samosa", dinner: "Biryani Special" },
      Saturday: { breakfast: "Misal Pav", lunch: "Fried Rice & Manchurian", snacks: "Tea", dinner: "Pav Bhaji" },
      Sunday: { breakfast: "Puri Bhaji", lunch: "Sunday Feast Thali", snacks: "Cold Coffee", dinner: "Light Dinner" }
    },
    foodType: "Both",
    owner: {
      name: "Suresh Shetty",
      phone: "+91 98211 99012",
      whatsapp: "+919821199012",
      role: "Hostel Manager",
      verified: true,
      responseTime: "Responds in 20 mins"
    },
    reviews: [
      { user: "Vishal Pandey", role: "Media Assistant", date: "August 2026", rating: 4, comment: "Metro is literally across the street. Commute anywhere in Mumbai from Versova to Ghatkopar in minutes." }
    ]
  },

  // Additional Vadodara Listings for Deep Local Variety
  {
    id: "pg-vdr-08",
    name: "Fatehgunj Royal Haven PG",
    tagline: "Comfortable air-conditioned PG for boys near Rosary & MSU Polytechnic",
    type: "pg",
    gender: "Boys",
    city: "Vadodara",
    state: "Gujarat",
    area: "Fatehgunj",
    address: "Opp. Kamat Hotel, Near Fatehgunj Circle, Vadodara, Gujarat 390002",
    coordinates: { lat: 22.3288, lng: 73.1895 },
    verified: true,
    rating: 4.4,
    reviewCount: 88,
    featured: false,
    price: 7200,
    deposit: 7200,
    maintenance: 250,
    electricity: "Sub-meter per room",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "1 Month",
    photos: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Single", rent: 11500, totalBeds: 4, availableBeds: 1 },
      { type: "Double", rent: 7200, totalBeds: 20, availableBeds: 4 },
      { type: "Triple", rent: 5600, totalBeds: 15, availableBeds: 3 }
    ],
    facilities: ["WiFi", "AC", "Mess/Food", "Laundry", "Study Room", "Parking", "CCTV", "RO Water"],
    tenantsInfo: {
      studentRatio: "70% MSU Polytechnic & Engineering",
      workingRatio: "30% Local Bank Clerks / Sales",
      totalOccupants: 39,
      genderMix: "Boys Only",
      atmosphere: "Friendly student camaraderie"
    },
    houseRules: {
      gateTiming: "10:45 PM",
      visitors: "Common hall only",
      smokingDrinking: "Prohibited",
      pets: "Not allowed",
      quietHours: "11:00 PM - 6:30 AM"
    },
    categoryScores: { cleanliness: 4.3, food: 4.4, safety: 4.5, valueForMoney: 4.6 },
    nearbyPlaces: [
      { name: "MSU Polytechnic Campus", distance: "0.5 km", type: "college" },
      { name: "Fatehgunj Shopping Hub", distance: "0.2 km", type: "market" },
      { name: "Vadodara Central Bus Station", distance: "1.2 km", type: "transit" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Poha, Tea", lunch: "Sev Tameta, Dal, Rice, Rotli", snacks: "Tea & Khakhra", dinner: "Aloo Palak, Rice, Phulka" },
      Tuesday: { breakfast: "Methi Thepla, Pickle", lunch: "Rajma Chawal, Roti, Salad", snacks: "Biscuits", dinner: "Kadhi Khichdi, Batata Nu Shaak" },
      Wednesday: { breakfast: "Idli Sambar", lunch: "Chole Bhature, Buttermilk", snacks: "Bhel", dinner: "Dal Fry, Jeera Rice, Chapati" },
      Thursday: { breakfast: "Aloo Paratha, Curd", lunch: "Mix Veg, Dal, Rice, Phulka", snacks: "Tea", dinner: "Sev Usal Bread" },
      Friday: { breakfast: "Upma, Chutney", lunch: "Paneer Butter Masala, Pulao, Roti", snacks: "Samosa", dinner: "Moong Khichdi, Kadhi" },
      Saturday: { breakfast: "Bread Butter Jam", lunch: "Veg Biryani, Boondi Raita", snacks: "Tea", dinner: "Pav Bhaji Special" },
      Sunday: { breakfast: "Fafda & Jalebi Special", lunch: "Special Thali with Sweet", snacks: "Coffee", dinner: "Light Dinner" }
    },
    foodType: "Veg",
    owner: {
      name: "Bhavin Patel",
      phone: "+91 98251 77209",
      whatsapp: "+919825177209",
      role: "Hostel Owner",
      verified: true,
      responseTime: "Responds in 20 mins"
    },
    reviews: [
      { user: "Kunal Pandya", role: "Polytechnic Student", date: "September 2026", rating: 4.5, comment: "Fafda Jalebi breakfast on Sundays is the highlight! Wardens are helpful and rooms are kept neat." }
    ]
  },
  {
    id: "pg-vdr-09",
    name: "Karelibaug Saraswati Girls Hostel",
    tagline: "Dedicated peaceful hostel for female scholars near Jubilee Baug & Karelibaug",
    type: "hostel",
    gender: "Girls",
    city: "Vadodara",
    state: "Gujarat",
    area: "Karelibaug",
    address: "Near Bright Day School, VIP Road, Karelibaug, Vadodara, Gujarat 390018",
    coordinates: { lat: 22.3250, lng: 73.2050 },
    verified: true,
    rating: 4.6,
    reviewCount: 110,
    featured: false,
    price: 6800,
    deposit: 6800,
    maintenance: 200,
    electricity: "Fixed ₹350/month",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "3 Months",
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "",
    sharingOptions: [
      { type: "Double", rent: 8200, totalBeds: 20, availableBeds: 3 },
      { type: "Triple", rent: 6800, totalBeds: 30, availableBeds: 6 },
      { type: "4+", rent: 5200, totalBeds: 16, availableBeds: 2 }
    ],
    facilities: ["WiFi", "Mess/Food", "Study Room", "Laundry", "CCTV", "Geyser", "Parking", "RO Water"],
    tenantsInfo: {
      studentRatio: "90% College Students (B.Com, B.Sc, Nursing)",
      workingRatio: "10% Teachers & Office Staff",
      totalOccupants: 66,
      genderMix: "Girls Only",
      atmosphere: "Strict, safe, scholarly"
    },
    houseRules: {
      gateTiming: "9:30 PM (Biometric tracking)",
      visitors: "Only registered parents with ID card",
      smokingDrinking: "Zero tolerance expulsion",
      pets: "Not allowed",
      quietHours: "10:00 PM - 6:00 AM"
    },
    categoryScores: { cleanliness: 4.7, food: 4.5, safety: 5.0, valueForMoney: 4.8 },
    nearbyPlaces: [
      { name: "Bright Day School Campus", distance: "0.3 km", type: "college" },
      { name: "Karelibaug Market", distance: "0.5 km", type: "market" },
      { name: "Sayaji Hospital", distance: "2.0 km", type: "hospital" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Thepla & Chhundo", lunch: "Gujarati Thali, Dal, Bhat", snacks: "Tea & Khakhra", dinner: "Kadhi Khichdi, Batata Nu Shaak" },
      Tuesday: { breakfast: "Poha & Milk", lunch: "Rajma, Rice, Roti, Salad", snacks: "Biscuits", dinner: "Sev Tomato, Phulka" },
      Wednesday: { breakfast: "Idli Sambar", lunch: "Chole Bhature, Chhaas", snacks: "Bhel", dinner: "Dal Fry, Jeera Rice, Chapati" },
      Thursday: { breakfast: "Upma, Chutney", lunch: "Dal Makhani, Rice, Roti", snacks: "Tea", dinner: "Bhindi Masala, Phulka, Dal" },
      Friday: { breakfast: "Methi Gota / Thepla", lunch: "Paneer, Rice, Roti, Gulab Jamun", snacks: "Tea", dinner: "Moong Khichdi, Kadhi" },
      Saturday: { breakfast: "Aloo Paratha", lunch: "Veg Pulav, Raita, Papad", snacks: "Toast Butter", dinner: "Pav Bhaji Special" },
      Sunday: { breakfast: "Dhokla & Chutney", lunch: "Special Sunday Gujarati Feast", snacks: "Chai", dinner: "Light Dinner" }
    },
    foodType: "Veg",
    owner: {
      name: "Smt. Kokilaben Joshi",
      phone: "+91 94270 41180",
      whatsapp: "+919427041180",
      role: "Hostel Rector",
      verified: true,
      responseTime: "Responds in 15 mins"
    },
    reviews: [
      { user: "Disha Shah", role: "Nursing Student", date: "October 2026", rating: 5, comment: "My parents were so relieved with the strict security. The food is hygienic and freshly prepared." }
    ]
  },
  {
    id: "pg-vdr-10",
    name: "Bhayli Tech & Design Co-Living",
    tagline: "Eco-friendly modern duplex villa with private gardens and coworking spaces",
    type: "room",
    gender: "Co-ed",
    city: "Vadodara",
    state: "Gujarat",
    area: "Bhayli",
    address: "Villa 8, Greenwoods Enclave, Near Navrachana University, Bhayli, Vadodara, Gujarat 391410",
    coordinates: { lat: 22.2850, lng: 73.1350 },
    verified: true,
    rating: 4.8,
    reviewCount: 65,
    featured: true,
    price: 10500,
    deposit: 15000,
    maintenance: 400,
    electricity: "₹9/unit",
    waterCharges: "Included",
    noticePeriod: "30 Days",
    lockInPeriod: "2 Months",
    photos: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    videoTourUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    sharingOptions: [
      { type: "Single", rent: 15500, totalBeds: 6, availableBeds: 1 },
      { type: "Double", rent: 10500, totalBeds: 12, availableBeds: 3 },
      { type: "Private", rent: 24000, totalBeds: 2, availableBeds: 1 }
    ],
    facilities: ["WiFi", "AC", "Laundry", "Study Room", "Parking", "CCTV", "Gym", "Balcony", "Garden", "Kitchen"],
    tenantsInfo: {
      studentRatio: "40% Navrachana Design/Architecture Students",
      workingRatio: "60% Remote Developers & Creators",
      totalOccupants: 20,
      genderMix: "Co-ed",
      atmosphere: "Creative, quiet, serene greenery"
    },
    houseRules: {
      gateTiming: "24x7 Smart Lock",
      visitors: "Allowed with prior notice",
      smokingDrinking: "Garden gazebo only",
      pets: "Pets welcome",
      quietHours: "11:00 PM - 7:00 AM"
    },
    categoryScores: { cleanliness: 4.9, food: 4.4, safety: 4.8, valueForMoney: 4.7 },
    nearbyPlaces: [
      { name: "Navrachana University", distance: "0.9 km", type: "college" },
      { name: "Bhayli Main Market", distance: "1.0 km", type: "market" },
      { name: "Sterling SEZ IT Hub", distance: "5.0 km", type: "office" }
    ],
    weeklyMenu: {
      Monday: { breakfast: "Muesli with Fresh Fruit & Almond Milk", lunch: "Healthy Millet Bowl, Dal, Veggies", snacks: "Herbal Tea & Nuts", dinner: "Paneer Tikka, Mint Roti, Salad" },
      Tuesday: { breakfast: "Thepla, Curd, Homemade Pickle", lunch: "Steamed Rice, Gujarati Dal, Sabzi", snacks: "Filter Coffee", dinner: "Khichdi & Buttermilk" },
      Wednesday: { breakfast: "Avocado Toast / Eggs to order", lunch: "Chole, Brown Rice, Phulka", snacks: "Fruit Smoothie", dinner: "Italian Pasta & Minestrone Soup" },
      Thursday: { breakfast: "Poha with Sprouts", lunch: "Dal Makhani, Rice, Roti", snacks: "Green Tea", dinner: "Mix Veg, Chapati, Salad" },
      Friday: { breakfast: "Belgian Waffles & Honey", lunch: "Dum Biryani Special", snacks: "Iced Tea", dinner: "Stir Fry Noodles & Tofu" },
      Saturday: { breakfast: "Stuffed Paratha with Butter", lunch: "Chef's Special Weekend Thali", snacks: "Cappuccino", dinner: "Woodfired Sourdough Pizza" },
      Sunday: { breakfast: "Pancakes & Fresh Juice", lunch: "Community Sunday Feast", snacks: "Artisan Tea & Scones", dinner: "Comfort Soup & Garlic Toast" }
    },
    foodType: "Both",
    owner: {
      name: "Yashraj Jadeja",
      phone: "+91 99090 12345",
      whatsapp: "+919909012345",
      role: "Co-Living Host",
      verified: true,
      responseTime: "Responds in 10 mins"
    },
    reviews: [
      { user: "Natasha Cooper", role: "Architecture Student", date: "October 2026", rating: 5, comment: "The design studio space and high-speed mesh WiFi make doing college projects here a dream." }
    ]
  }
];

// Helper to look up listing by ID
function getListingById(id) {
  return sampleListings.find(item => item.id === id);
}

// Export for module systems or attach to window
if (typeof window !== 'undefined') {
  window.sampleListings = sampleListings;
  window.getListingById = getListingById;
}
