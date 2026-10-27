// StayMate AI - State-wise Browsing & Government/Private Hostels Directory
// Covers all Indian States & Union Territories with top cities and specialized hostel directories

const indianStatesData = [
  {
    name: "Gujarat",
    code: "GJ",
    capital: "Gandhinagar",
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
    listingCount: 420,
    cities: [
      { name: "Vadodara", listings: 145, popularAreas: ["Sayajigunj", "Fatehgunj", "Alkapuri", "Waghodia Road", "Gotri", "Karelibaug"] },
      { name: "Ahmedabad", listings: 180, popularAreas: ["Navrangpura", "SG Highway", "Bodakdev", "Prahlad Nagar", "Vastrapur"] },
      { name: "Surat", listings: 50, popularAreas: ["Vesu", "Piplod", "Adajan", "Varachha"] },
      { name: "Rajkot", listings: 25, popularAreas: ["Kalawad Road", "University Road", "Yagnik Road"] },
      { name: "Gandhinagar", listings: 20, popularAreas: ["Sector 7", "Sector 21", "PDPU Campus Area", "Infocity"] }
    ]
  },
  {
    name: "Maharashtra",
    code: "MH",
    capital: "Mumbai",
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    listingCount: 680,
    cities: [
      { name: "Pune", listings: 320, popularAreas: ["Viman Nagar", "Hinjewadi", "Kothrud", "Baner", "Wakad", "Shivajinagar"] },
      { name: "Mumbai", listings: 240, popularAreas: ["Powai", "Andheri West", "Bandra", "Juhu", "Dadar", "Goregaon"] },
      { name: "Nagpur", listings: 65, popularAreas: ["Dharampeth", "Ramdaspeth", "Sadar"] },
      { name: "Nashik", listings: 55, popularAreas: ["College Road", "Gangapur Road"] }
    ]
  },
  {
    name: "Karnataka",
    code: "KA",
    capital: "Bengaluru",
    heroImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    listingCount: 750,
    cities: [
      { name: "Bengaluru", listings: 580, popularAreas: ["Koramangala", "HSR Layout", "Indiranagar", "Electronic City", "Whitefield", "Marathahalli"] },
      { name: "Mysuru", listings: 85, popularAreas: ["Jayalakshmipuram", "Kuvempunagar", "Vijayanagar"] },
      { name: "Mangaluru", listings: 50, popularAreas: ["Kadri", "Bejai", "Kankanady"] },
      { name: "Hubballi-Dharwad", listings: 35, popularAreas: ["Vidyanagar", "Keshwapur"] }
    ]
  },
  {
    name: "Delhi NCR",
    code: "DL",
    capital: "New Delhi",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    listingCount: 820,
    cities: [
      { name: "Delhi", listings: 390, popularAreas: ["North Campus (Kamla Nagar)", "South Campus (Satya Niketan)", "Laxmi Nagar", "Saket", "Karol Bagh"] },
      { name: "Gurugram", listings: 260, popularAreas: ["DLF Cyber City", "Sector 29", "Golf Course Road", "Sohna Road"] },
      { name: "Noida", listings: 170, popularAreas: ["Sector 62", "Sector 18", "Sector 128 (Jaypee)"] }
    ]
  },
  {
    name: "Rajasthan",
    code: "RJ",
    capital: "Jaipur",
    heroImage: "https://images.unsplash.com/photo-1603262110263-fb010d6e75dc?auto=format&fit=crop&w=800&q=80",
    listingCount: 390,
    cities: [
      { name: "Jaipur", listings: 190, popularAreas: ["Malviya Nagar", "Tonk Road", "Raja Park", "Mansarovar", "Vaishali Nagar"] },
      { name: "Kota", listings: 140, popularAreas: ["Landmark City", "Talwandi", "Vigyan Nagar", "Indraprastha"] },
      { name: "Jodhpur", listings: 35, popularAreas: ["Ratanada", "Shastri Nagar"] },
      { name: "Udaipur", listings: 25, popularAreas: ["Fatehpura", "Shobhagpura"] }
    ]
  },
  {
    name: "Tamil Nadu",
    code: "TN",
    capital: "Chennai",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    listingCount: 410,
    cities: [
      { name: "Chennai", listings: 280, popularAreas: ["OMR (IT Corridor)", "Velachery", "Adyar", "T Nagar", "Anna Nagar"] },
      { name: "Coimbatore", listings: 85, popularAreas: ["RS Puram", "Peelamedu", "Gandhipuram"] },
      { name: "Madurai", listings: 45, popularAreas: ["KK Nagar", "Anna Nagar"] }
    ]
  },
  {
    name: "Telangana",
    code: "TS",
    capital: "Hyderabad",
    heroImage: "https://images.unsplash.com/photo-1605335198089-21b96f131551?auto=format&fit=crop&w=800&q=80",
    listingCount: 510,
    cities: [
      { name: "Hyderabad", listings: 470, popularAreas: ["Gachibowli", "Hitec City", "Madhapur", "Kondapur", "Kukatpally", "Ameerpet"] },
      { name: "Warangal", listings: 40, popularAreas: ["Hanamkonda", "Kazipet"] }
    ]
  },
  {
    name: "Uttar Pradesh",
    code: "UP",
    capital: "Lucknow",
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
    listingCount: 340,
    cities: [
      { name: "Lucknow", listings: 130, popularAreas: ["Gomti Nagar", "Aliganj", "Hazratganj", "Indira Nagar"] },
      { name: "Kanpur", listings: 80, popularAreas: ["Kakadeo", "Swaroop Nagar"] },
      { name: "Varanasi", listings: 70, popularAreas: ["BHU Area (Lanka)", "Sigra", "Assi"] },
      { name: "Prayagraj", listings: 60, popularAreas: ["Civil Lines", "Allahpur"] }
    ]
  },
  {
    name: "West Bengal",
    code: "WB",
    capital: "Kolkata",
    heroImage: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
    listingCount: 320,
    cities: [
      { name: "Kolkata", listings: 280, popularAreas: ["Salt Lake (Sector V)", "New Town", "Jadavpur", "Gariahat", "Park Street"] },
      { name: "Siliguri", listings: 40, popularAreas: ["Sevoke Road", "Matigara"] }
    ]
  },
  {
    name: "Madhya Pradesh",
    code: "MP",
    capital: "Bhopal",
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
    listingCount: 260,
    cities: [
      { name: "Indore", listings: 150, popularAreas: ["Vijay Nagar", "Bhawarkua", "Palasia", "Geeta Bhawan"] },
      { name: "Bhopal", listings: 80, popularAreas: ["MP Nagar", "Arera Colony", "Shahpura"] },
      { name: "Gwalior", listings: 30, popularAreas: ["City Center", "Lashkar"] }
    ]
  },
  {
    name: "Kerala",
    code: "KL",
    capital: "Thiruvananthapuram",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    listingCount: 210,
    cities: [
      { name: "Kochi", listings: 110, popularAreas: ["Kakkanad (Infopark)", "Edappally", "Kaloor"] },
      { name: "Thiruvananthapuram", listings: 70, popularAreas: ["Kazhakkoottam (Technopark)", "Pattom"] },
      { name: "Kozhikode", listings: 30, popularAreas: ["Mavoor Road", "Palayam"] }
    ]
  },
  {
    name: "Punjab",
    code: "PB",
    capital: "Chandigarh",
    heroImage: "https://images.unsplash.com/photo-1588096344356-91e847c20c6a?auto=format&fit=crop&w=800&q=80",
    listingCount: 280,
    cities: [
      { name: "Chandigarh (Tricity)", listings: 170, popularAreas: ["Sector 15", "Sector 35", "Mohali Phase 7", "Panchkula"] },
      { name: "Ludhiana", listings: 60, popularAreas: ["Model Town", "Civil Lines"] },
      { name: "Amritsar", listings: 50, popularAreas: ["Ranjit Avenue", "Mall Road"] }
    ]
  }
];

// State-wise Hostels Directory (Government & Subsidized Private Hostels)
const stateHostelsDirectory = [
  {
    id: "hostel-gj-01",
    name: "Government Working Women's Hostel (Vadodara)",
    type: "Government (Women and Child Development Department)",
    category: "Working Women",
    state: "Gujarat",
    city: "Vadodara",
    area: "Sayajigunj",
    address: "Opp. Circuit House, Near Dairy Den Circle, Sayajigunj, Vadodara, Gujarat 390005",
    fees: "₹1,800 - ₹2,500 / month (Subsidized)",
    eligibility: "Employed women with gross income under ₹40,000/mo or bona-fide research interns",
    admissionProcess: "Submit application form at District Social Defense Office with employment letter & salary slip",
    contactPerson: "Smt. Leelaben Solanki (Superintendent)",
    phone: "+91 265 242 1890",
    email: "wwhostel.baroda@gujarat.gov.in",
    photos: [
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=800&q=80"
    ],
    facilities: ["Subsidized Mess", "24/7 Police Security", "Daycare Center for Children", "RO Water", "Library", "Solar Heaters"],
    curfew: "9:00 PM (Emergency relaxations allowed)"
  },
  {
    id: "hostel-gj-02",
    name: "Dr. B.R. Ambedkar Government Student Hostel (Vadodara)",
    type: "Government (Social Justice & Empowerment)",
    category: "Student (Boys)",
    state: "Gujarat",
    city: "Vadodara",
    area: "Fatehgunj",
    address: "Near Rosary Ground, University Road, Fatehgunj, Vadodara, Gujarat 390002",
    fees: "₹0 - ₹500 / academic term (100% Scholarship for eligible candidates)",
    eligibility: "SC/ST/SEBC college students enrolled in MSU Vadodara or affiliated government institutions",
    admissionProcess: "Online application via Digital Gujarat portal under Social Welfare Hostel Admission scheme",
    contactPerson: "Shri Harish Parmar (Warden)",
    phone: "+91 265 279 4432",
    email: "brambedkarhostel.vdr@gujarat.gov.in",
    photos: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
    ],
    facilities: ["Free Meals & Tea", "Reading Room & Computer Lab", "Bed, Study Desk & Almirah", "CCTV Surveillance", "Sports Ground"],
    curfew: "10:00 PM"
  },
  {
    id: "hostel-gj-03",
    name: "Gujarat Samachar Girls Vidyarthi Bhavan",
    type: "Trust / Non-Profit Subsidized",
    category: "Student (Girls)",
    state: "Gujarat",
    city: "Ahmedabad",
    area: "Navrangpura",
    address: "Opp. Gujarat University Library, Navrangpura, Ahmedabad 380009",
    fees: "₹4,500 / month (Includes 3 pure vegetarian meals)",
    eligibility: "Female students enrolled in undergraduate or postgraduate courses with merit > 65%",
    admissionProcess: "Direct interview with student and parents in June and November",
    contactPerson: "Trustee Office",
    phone: "+91 79 2630 1198",
    email: "trustee@vidyarthibhavan.org",
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=800&q=80"
    ],
    facilities: ["Pure Jain/Swaminarayan Food", "Library with 5,000+ Books", "Biometric In/Out", "Doctor on Call"],
    curfew: "8:30 PM"
  },
  {
    id: "hostel-mh-01",
    name: "Savitribai Phule Government Working Women Hostel (Pune)",
    type: "Government (Govt. of Maharashtra)",
    category: "Working Women",
    state: "Maharashtra",
    city: "Pune",
    area: "Shivajinagar",
    address: "Near Pune Central Mall, University Road, Shivajinagar, Pune, Maharashtra 411005",
    fees: "₹2,200 / month",
    eligibility: "Employed women, trainees, or female candidates appearing for competitive exams",
    admissionProcess: "Submit dossier to Department of Social Welfare, Pune",
    contactPerson: "Mrs. Anjali Kulkarni",
    phone: "+91 20 2553 4410",
    email: "sphostel.pune@maharashtra.gov.in",
    photos: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    ],
    facilities: ["Hygienic Canteen", "24x7 Lady Security", "Washing Machines", "WiFi Zone"],
    curfew: "9:30 PM"
  },
  {
    id: "hostel-ka-01",
    name: "Karnataka State Women's Development Corporation Hostel",
    type: "Government (Govt. of Karnataka)",
    category: "Working Women",
    state: "Karnataka",
    city: "Bengaluru",
    area: "Indiranagar",
    address: "100ft Road, Near CMH Hospital, Indiranagar, Bengaluru, Karnataka 560038",
    fees: "₹3,000 / month",
    eligibility: "Women working in Bengaluru with monthly salary below ₹50,000",
    admissionProcess: "Apply online at kswdc.karnataka.gov.in with employer verification",
    contactPerson: "Smt. Ratnamma (Superintendent)",
    phone: "+91 80 2528 9912",
    email: "kswdc.hostel@karnataka.gov.in",
    photos: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
    ],
    facilities: ["Nutritious South Indian Food", "CCTV", "Solar Water Heaters", "Common TV & Study Hall"],
    curfew: "9:30 PM"
  },
  {
    id: "hostel-dl-01",
    name: "YWCA of Delhi Working Women & Student Hostel",
    type: "Non-Profit Institution",
    category: "Working Women & Students",
    state: "Delhi NCR",
    city: "Delhi",
    area: "Connaught Place",
    address: "Ashoka Road, Near Patel Chowk Metro Station, New Delhi 110001",
    fees: "₹6,500 - ₹9,000 / month (Includes breakfast and dinner)",
    eligibility: "Working women or university students with valid ID & local guardian",
    admissionProcess: "Direct registration at YWCA Headquarters, Ashoka Road",
    contactPerson: "Hostel Warden Office",
    phone: "+91 11 4355 3100",
    email: "hostel@ywcaofdelhi.org",
    photos: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4b49?auto=format&fit=crop&w=800&q=80"
    ],
    facilities: ["Central Delhi Location", "Metro Connected (Patel Chowk)", "Nutritious Meals", "Strict Security"],
    curfew: "10:00 PM"
  }
];

if (typeof window !== 'undefined') {
  window.indianStatesData = indianStatesData;
  window.stateHostelsDirectory = stateHostelsDirectory;
}
