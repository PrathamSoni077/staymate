// StayMate AI - Intelligent AI Assistant, NLP Search Parser & Match Engine

const AIAssistant = {
  // 1. Natural Language Search Parser
  parseNaturalQuery(query) {
    if (!query || typeof query !== 'string') return null;
    const text = query.toLowerCase().trim();
    const result = {
      rawQuery: query,
      appliedFilters: {},
      summaryParts: []
    };

    // Detect Gender
    if (text.includes("girls") || text.includes("female") || text.includes("women") || text.includes("ladies")) {
      result.appliedFilters.gender = "Girls";
      result.summaryParts.push("Girls Only");
    } else if (text.includes("boys") || text.includes("male") || text.includes("men") || text.includes("gents")) {
      result.appliedFilters.gender = "Boys";
      result.summaryParts.push("Boys Only");
    } else if (text.includes("co-ed") || text.includes("coed") || text.includes("couples") || text.includes("unisex")) {
      result.appliedFilters.gender = "Co-ed";
      result.summaryParts.push("Co-ed");
    }

    // Detect Property Type
    if (text.includes("hostel")) {
      result.appliedFilters.type = "hostel";
      result.summaryParts.push("Hostel");
    } else if (text.includes("flat") || text.includes("room") || text.includes("studio")) {
      result.appliedFilters.type = "room";
      result.summaryParts.push("Private Room");
    } else if (text.includes("shared") || text.includes("sharing flat")) {
      result.appliedFilters.type = "shared";
      result.summaryParts.push("Shared Flat");
    } else if (text.includes("pg")) {
      result.appliedFilters.type = "pg";
      result.summaryParts.push("PG");
    }

    // Detect Budget (e.g., "under 8000", "below 10k", "< 7000", "8k")
    const budgetMatch = text.match(/(?:under|below|less than|max|within|<=|<)\s*(?:rs\.?|inr|₹)?\s*(\d+)(k)?/i) ||
                        text.match(/(?:rs\.?|inr|₹)\s*(\d+)(k)?\s*(?:budget|max)?/i) ||
                        text.match(/(\d+)\s*k\b/i);
    if (budgetMatch) {
      let amount = parseInt(budgetMatch[1], 10);
      if (budgetMatch[2] && budgetMatch[2].toLowerCase() === 'k') amount *= 1000;
      else if (amount < 100) amount *= 1000; // e.g. "8k" -> 8000
      result.appliedFilters.maxBudget = amount;
      result.summaryParts.push(`Max ₹${amount.toLocaleString('en-IN')}`);
    }

    // Detect City
    const cities = ["vadodara", "baroda", "ahmedabad", "pune", "mumbai", "bengaluru", "bangalore", "delhi", "gurugram", "gurgaon", "noida", "jaipur"];
    for (const city of cities) {
      if (text.includes(city)) {
        let normalizedCity = city;
        if (city === "baroda") normalizedCity = "vadodara";
        if (city === "bangalore") normalizedCity = "bengaluru";
        if (city === "gurgaon") normalizedCity = "gurugram";
        result.appliedFilters.city = normalizedCity.charAt(0).toUpperCase() + normalizedCity.slice(1);
        result.summaryParts.push(result.appliedFilters.city);
        break;
      }
    }

    // Detect Area / Colleges (Vadodara & Major hubs)
    const landmarks = [
      { key: "msu", label: "Near MSU", area: "Sayajigunj" },
      { key: "sayajigunj", label: "Sayajigunj", area: "Sayajigunj" },
      { key: "fatehgunj", label: "Fatehgunj", area: "Fatehgunj" },
      { key: "alkapuri", label: "Alkapuri", area: "Alkapuri" },
      { key: "gotri", label: "Gotri", area: "Gotri" },
      { key: "waghodia", label: "Waghodia Road", area: "Waghodia Road" },
      { key: "parul", label: "Near Parul Univ", area: "Waghodia Road" },
      { key: "viman nagar", label: "Viman Nagar", area: "Viman Nagar" },
      { key: "hinjewadi", label: "Hinjewadi", area: "Hinjewadi" },
      { key: "koramangala", label: "Koramangala", area: "Koramangala" },
      { key: "hsr", label: "HSR Layout", area: "HSR Layout" },
      { key: "cyber hub", label: "Cyber City", area: "Cyber City" }
    ];

    for (const lm of landmarks) {
      if (text.includes(lm.key)) {
        result.appliedFilters.area = lm.area;
        result.summaryParts.push(lm.label);
        break;
      }
    }

    // Detect Facilities & Amenities
    const amenities = [];
    if (text.includes("wifi") || text.includes("internet")) amenities.push("WiFi");
    if (text.includes("ac") || text.includes("air condition")) amenities.push("AC");
    if (text.includes("food") || text.includes("mess") || text.includes("meal")) amenities.push("Mess/Food");
    if (text.includes("laundry") || text.includes("washing")) amenities.push("Laundry");
    if (text.includes("study") || text.includes("library")) amenities.push("Study Room");
    if (text.includes("gym") || text.includes("fitness")) amenities.push("Gym");
    if (text.includes("parking") || text.includes("bike")) amenities.push("Parking");

    if (amenities.length > 0) {
      result.appliedFilters.facilities = amenities;
      result.summaryParts.push(amenities.join(", "));
    }

    // Detect Room Sharing
    if (text.includes("single") || text.includes("private") || text.includes("1 bed")) {
      result.appliedFilters.sharing = "Single";
      result.summaryParts.push("Single Room");
    } else if (text.includes("double") || text.includes("2 sharing")) {
      result.appliedFilters.sharing = "Double";
      result.summaryParts.push("Double Sharing");
    } else if (text.includes("triple") || text.includes("3 sharing")) {
      result.appliedFilters.sharing = "Triple";
      result.summaryParts.push("Triple Sharing");
    }

    // Detect Food Preference
    if (text.includes("pure veg") || text.includes("vegetarian") || text.includes("jain")) {
      result.appliedFilters.foodType = "Veg";
      result.summaryParts.push("Pure Veg");
    } else if (text.includes("non veg") || text.includes("chicken") || text.includes("egg")) {
      result.appliedFilters.foodType = "Both";
      result.summaryParts.push("Non-Veg Friendly");
    }

    result.summaryText = result.summaryParts.length > 0 ? result.summaryParts.join(" • ") : "All Stays";
    return result;
  },

  // 2. Compute AI Match Score for a PG based on User Context
  computeMatchScore(listing, userPrefs = {}) {
    let score = 75; // base compatibility

    // Location / City Match
    if (userPrefs.city && listing.city.toLowerCase() === userPrefs.city.toLowerCase()) {
      score += 10;
    }
    // Budget Match
    const budget = userPrefs.maxBudget || 10000;
    if (listing.price <= budget) {
      score += 8;
    } else if (listing.price <= budget * 1.15) {
      score += 2;
    } else {
      score -= 10;
    }

    // High Rating Boost
    if (listing.rating >= 4.5) score += 6;
    if (listing.verified) score += 5;

    // Student vs Professional affinity
    if (userPrefs.role === "Student" && listing.tenantsInfo && listing.tenantsInfo.studentRatio.includes("College")) {
      score += 5;
    }

    return Math.min(99, Math.max(65, Math.round(score)));
  },

  // 3. AI Intelligent Chat Knowledge Engine
  async answerUserChat(message) {
    const text = message.toLowerCase().trim();
    const allListings = Store.getAllListings();

    // Simulate AI thinking delay for realism
    await new Promise(r => setTimeout(r, 650));

    // Question: AC and Study Room
    if (text.includes("ac") && (text.includes("study") || text.includes("library"))) {
      const matches = allListings.filter(l => l.facilities.includes("AC") && l.facilities.includes("Study Room"));
      const names = matches.slice(0, 3).map(m => `**${m.name}** in ${m.area}, ${m.city} (₹${m.price}/mo)`).join("\n- ");
      return `Here are the top stays with **both Air Conditioning and a dedicated Study Room**:\n\n- ${names}\n\nWould you like me to filter the search results for you or schedule a free visit to one of these?`;
    }

    // Question: Girls PG near MSU
    if ((text.includes("girls") || text.includes("female")) && text.includes("msu")) {
      const matches = allListings.filter(l => l.gender === "Girls" && (l.city === "Vadodara") && (l.area === "Sayajigunj" || l.area === "Fatehgunj"));
      const names = matches.slice(0, 3).map(m => `**${m.name}** (${m.area}) - ₹${m.price}/mo, Rating: ${m.rating}★`).join("\n- ");
      return `For female students at MSU Vadodara, the safest and closest verified stays are:\n\n- ${names}\n\n**Sunrise PG & Co-living** is just 0.8 km from MSU with 3 home-style meals and biometric entry.`;
    }

    // Question: Deposit policy / rules
    if (text.includes("deposit") || text.includes("security")) {
      return `### StayMate AI Deposit Guidelines 💡\n- **Standard Deposit:** Usually equal to 1 month's rent (e.g. ₹8,000 for Sunrise PG).\n- **Refundability:** 100% refundable upon move-out after standard 30-day notice period.\n- **Zero Brokerage Guarantee:** StayMate AI charges zero brokerage fee to tenants!\n- You only pay a small ₹1,000 - ₹2,000 token advance to lock your bed, which is adjusted in your first month's invoice.`;
    }

    // Question: Gate timings / curfew
    if (text.includes("gate") || text.includes("curfew") || text.includes("timing") || text.includes("late")) {
      return `### Gate Timings & Policies ⏰\n- Most student PGs in Vadodara (e.g. **Sunrise PG**, **Shakti Kripa**) have gate closing between **10:00 PM and 10:30 PM**.\n- For late exams, project submissions, or train arrivals, gate extensions are readily granted via the warden's digital pass.\n- If you need **24x7 flexible entry**, explore co-living options like **Comfort Stay Alkapuri** or **Vasna Palace** which feature keyless smart lock access.`;
    }

    // Question: Visit scheduling
    if (text.includes("visit") || text.includes("tour") || text.includes("schedule")) {
      return `You can schedule a **100% Free In-Person Visit** to any PG! Simply click the **"Schedule Visit"** or **"Contact / Book"** button on any listing card, select your preferred date & time, and the owner will confirm within 15 minutes. No upfront payment required!`;
    }

    // Question: Food / Menu
    if (text.includes("food") || text.includes("menu") || text.includes("meal") || text.includes("veg")) {
      return `All our verified PGs in Vadodara provide 4 meals a day: **Breakfast, Gujarati/North Indian Lunch, Evening Snacks & Tea, and Dinner**.\nYou can inspect the detailed day-by-day weekly food menu directly inside any PG's details page under the **"Weekly Food Menu"** tab!`;
    }

    // Question: Vadodara / MSU stays under 8000
    if ((text.includes("vadodara") || text.includes("baroda")) && (text.includes("8000") || text.includes("8k") || text.includes("budget"))) {
      const matches = allListings.filter(l => l.city === "Vadodara" && l.price <= 8000);
      const names = matches.slice(0, 3).map(m => `**${m.name}** in ${m.area} (₹${m.price}/mo, Rating: ${m.rating}★)`).join("\n- ");
      return `Here are top rated stays in Vadodara under ₹8,000:\n\n- ${names}\n\nWould you like me to apply these filters on your dashboard?`;
    }

    // Generic friendly intelligent response
    return `Hello! I'm **StayMate AI**, your personal accommodation concierge in India 🌿.\n\nI can help you:\n1. Find verified PGs & hostels near your college (MSU, Parul, Gujarat Univ, Symbiosis, etc.)\n2. Filter by budget, AC, WiFi, or food preference\n3. Compare rent, deposits, and room amenities side-by-side\n4. Connect directly with owners via WhatsApp or phone\n\nTry asking: *"Show me girls PG near MSU under 8000"* or *"Which stay has private rooms in Alkapuri?"*`;
  }
};

if (typeof window !== 'undefined') {
  window.AIAssistant = AIAssistant;
}
