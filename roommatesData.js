// StayMate AI - Find a Roommate / Bed Sharing Community Board Data
const sampleRoommatePosts = [
  {
    id: "rm-01",
    author: "Pratiksha Shah",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    headline: "Need 1 female flatmate for master bedroom in 2BHK near MSU Sayajigunj",
    type: "Bed Available", // "Need a Roommate" or "Bed Available"
    gender: "Girls Only",
    city: "Vadodara",
    area: "Sayajigunj",
    budget: 6500,
    moveInDate: "Immediate / Nov 1",
    profession: "MSU Final Year Commerce Student",
    habits: ["Non-smoker", "Vegetarian", "Early riser", "Study-focused"],
    description: "Looking for a clean, chill female flatmate in a fully furnished 2BHK. Has high-speed WiFi, washing machine, fridge, and cook comes daily for lunch & dinner. Total rent is ₹13,000 split equally.",
    phone: "+91 98790 11234",
    whatsapp: "+919879011234",
    postedDate: "2 days ago"
  },
  {
    id: "rm-02",
    author: "Kavya Patel",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    headline: "Looking for female roommate to rent a flat in Alkapuri / Gotri",
    type: "Need a Roommate",
    gender: "Girls Only",
    city: "Vadodara",
    area: "Alkapuri",
    budget: 8000,
    moveInDate: "15th November",
    profession: "Graphic Designer at Digital Agency",
    habits: ["Non-smoker", "Pet lover", "Night owl", "Clean freak"],
    description: "Hey! Moving to Vadodara from Surat for work. Looking to team up with another girl to rent a cozy 2BHK flat in Alkapuri. I have a friendly indie cat, so someone who likes cats would be ideal!",
    phone: "+91 97240 55678",
    whatsapp: "+919724055678",
    postedDate: "Yesterday"
  },
  {
    id: "rm-03",
    author: "Rahul Varma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    headline: "1 bed available in 3BHK high-rise flat near Fatehgunj post office",
    type: "Bed Available",
    gender: "Boys Only",
    city: "Vadodara",
    area: "Fatehgunj",
    budget: 5000,
    moveInDate: "1st December",
    profession: "Mechanical Engineer at L&T",
    habits: ["Non-smoker", "Early riser", "Fitness enthusiast"],
    description: "Spacious room with attached balcony and AC. The society has gym, 24x7 security, and car/bike parking. Food is taken care of by a local tiffin service. Rent is ₹5,000 + electricity shared.",
    phone: "+91 98980 99876",
    whatsapp: "+919898099876",
    postedDate: "3 days ago"
  },
  {
    id: "rm-04",
    author: "Siddharth Kulkarni",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    headline: "Looking for chill male roommate in Viman Nagar / Kharadi Pune",
    type: "Need a Roommate",
    gender: "Boys Only",
    city: "Pune",
    area: "Viman Nagar",
    budget: 9000,
    moveInDate: "Immediate",
    profession: "Frontend Developer at Fintech Startup",
    habits: ["Non-smoker", "Night owl", "Gamer", "Coffee lover"],
    description: "Looking for an engineer or student to take a 2BHK in Viman Nagar. I have a PS5, monitor setup, and espresso machine. Looking for someone clean and respectful of work hours.",
    phone: "+91 98230 44512",
    whatsapp: "+919823044512",
    postedDate: "Today"
  },
  {
    id: "rm-05",
    author: "Ananya Mukherjee",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    headline: "Single room available in Koramangala 4th Block Bengaluru 3BHK",
    type: "Bed Available",
    gender: "Co-ed / Any",
    city: "Bengaluru",
    area: "Koramangala",
    budget: 14000,
    moveInDate: "Immediate",
    profession: "Product Marketing Manager",
    habits: ["Non-smoker", "Social", "Vegetarian-friendly"],
    description: "One private room with attached washroom in a stunning 3BHK penthouse with terrace garden. Right opposite to popular cafes. High-speed 300 Mbps WiFi and daily maid included.",
    phone: "+91 98450 77123",
    whatsapp: "+919845077123",
    postedDate: "4 days ago"
  }
];

if (typeof window !== 'undefined') {
  window.sampleRoommatePosts = sampleRoommatePosts;
}
