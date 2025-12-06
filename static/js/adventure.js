// adventure.js
document.addEventListener('DOMContentLoaded', function () {

  // === PACKAGE DATA (EDIT THIS) ===
  const packages = {
   statueofunity: {
  title: "STATUE OF UNITY TENT CITY PREMIUM PACKAGE",
  heroImg: "https://images.unsplash.com/photo-1605648912921-1d0f8fd65e3e?auto=format&fit=crop&w=1600&q=80",
  difficulty: "Easy",
  duration: "1N/2D • 2N/3D • 3N/4D",
  cost: "From ₹6,000 per person onwards + GST",

  pricing: {
    sunMon: [
      { cottage: "Premium Cottage (Twin Sharing)", "1N": "₹6,000", "2N": "₹12,000", "3N": "₹18,000" },
      { cottage: "Royal Cottage (Twin Sharing)", "1N": "₹7,000", "2N": "₹14,000", "3N": "₹21,000" }
    ],
    tueSat: [
      { cottage: "Premium Cottage (Twin Sharing)", "1N": "₹7,000", "2N": "₹14,000", "3N": "₹21,000" },
      { cottage: "Royal Cottage (Twin Sharing)", "1N": "₹8,000", "2N": "₹16,000", "3N": "₹24,000" }
    ],
    extraMattress: [
      { type: "For Premium & Royal Cottage (Per Night)", sunMon: "₹5,500", tueSat: "₹5,500" },
      { type: "For Presidential & Royal Villa (Per Night)", sunMon: "₹12,000", tueSat: "₹12,000" }
    ]
  },

  itinerary: {
    "1N2D": [
      "Day 1: 12:00 PM – Welcome & Check-in at Tent City",
      "12:30 PM – 02:30 PM – Lunch at Dining Area",
      "02:30 PM – 04:00 PM – Visit Sardar Sarovar Dam, Selfie Point & Valley of Flowers (SIC)",
      "04:00 PM – 06:00 PM – Visit Statue of Unity (Viewing Gallery subject to availability)",
      "06:00 PM – 06:45 PM – Light Refreshment",
      "06:45 PM – 08:00 PM – Laser Light & Sound Show (subject to availability)",
      "08:00 PM – 08:30 PM – Illumination Tour around Statue of Unity",
      "08:30 PM – 10:30 PM – Dinner",
      "Day 2: 06:00 AM – Morning Tea | 07:30 AM – Breakfast | 09:30 AM – Check-out with sweet memories"
    ],
    "2N3D": [
      "Day 1: Same as 1N/2D Package",
      "Day 2: 06:00 AM – Morning Tea",
      "06:30 AM – 07:30 AM – Optional Khalwani Sunrise Walking Tour",
      "07:30 AM – 09:30 AM – Breakfast",
      "09:30 AM – 12:30 PM – Eco Tourism Tour (Vishwa Van, Aarogya Van, Cactus Garden, Butterfly Garden etc.)",
      "12:30 PM – 02:30 PM – Lunch",
      "02:30 PM – 04:30 PM – Leisure / In-house Activities",
      "04:30 PM – 05:30 PM – Hi-Tea",
      "06:00 PM – 08:00 PM – Visit Unity Glow Garden (Illuminated Theme Park)",
      "08:30 PM – 10:30 PM – Dinner",
      "Day 3: Breakfast → Check-out"
    ],
    "3N4D": [
      "Day 1 & Day 2: Same as 2N/3D Package",
      "Day 3: 09:30 AM – 12:30 PM – Jungle Safari (Asiatic Lion, Bengal Tiger, Leopard etc.)",
      "12:30 PM – 02:30 PM – Lunch",
      "04:30 PM – 06:30 PM – Visit Children Nutrition Park with Nutri Express Train Ride",
      "08:30 PM – 10:30 PM – Dinner",
      "Day 4: Breakfast → Check-out with lifetime memories"
    ]
  },

  inclusions: [
    "Accommodation in Air-Conditioned Luxury Tents",
    "All Meals (Lunch, Dinner, Breakfast, Morning Tea, Hi-Tea)",
    "Statue of Unity Visit + Viewing Gallery Ticket (subject to availability)",
    "Laser Light & Sound Show (subject to availability)",
    "All Guided Sightseeing on SIC (Seat-in-Coach) Basis",
    "Valley of Flowers, Sardar Sarovar Dam, Selfie Point",
    "Unity Glow Garden, Eco Tourism Sites, Jungle Safari (in 3N), Children Nutrition Park (in 3N)",
    "Illumination Tour & All In-house Activities"
  ],

  exclusions: [
    "Travel to/from Tent City",
    "Personal Expenses",
    "Any activity/ticket not mentioned in inclusions",
    "Monday Closure: Statue of Unity & attractions remain closed on Mondays",
    "Viewing Gallery & Laser Show subject to availability & weather",
    "Anything not mentioned above"
  ]
},

    dubai: {
  title: "DUBAI ADVENTURE & LUXURY ESCAPE",
  heroImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
  difficulty: "Moderate",
  duration: "5 Nights / 6 Days",
  baseCost: "From ₹38,000 + 5% GST + 5% TCS per person",

  pricing: [
    { pax: "02 Persons (Per Person)", cost: "₹48,000 + 5% GST + 5% TCS" },
    { pax: "04 Persons (Per Person)", cost: "₹38,000 + 5% GST + 5% TCS" }
  ],

  addOns: [
    { item: "Dubai Tourist Visa", cost: "₹7,500 per person" },
    { item: "Travel Insurance", cost: "₹1,500 per person (recommended)" }
  ],

  itinerary: [
    "Day 01: Arrival in Dubai → Airport Pickup by Private Vehicle → Transfer to Hotel → Evening Dhow Cruise Marina with Dinner & Live Entertainment → Overnight Dubai",
    "Day 02: Breakfast → Visit Burj Khalifa (124th & 125th Floor – Non-Prime Slot) → Dubai Mall → Dubai Aquarium & Underwater Zoo → Evening Free for Shopping → Overnight Dubai",
    "Day 03: Breakfast → Full Day Desert Safari with Dune Bashing, Sand Boarding, Camel Ride, Henna Painting, Tanoura & Belly Dance Show + BBQ Dinner → Overnight Dubai",
    "Day 04: Breakfast → Full Day Abu Dhabi City Tour → Sheikh Zayed Grand Mosque → Heritage Village → Drive past Corniche → Ferrari World (Bronze Ticket with Transfers) → Overnight Dubai",
    "Day 05: Breakfast → Visit Dubai Frame → Miracle Garden (Seasonal – Oct to Apr) or Global Village (if Miracle Garden closed) → Evening Free for Leisure / Shopping → Overnight Dubai",
    "Day 06: Breakfast → Private Transfer to Dubai International Airport → Departure with Sweet Memories"
  ],

  inclusions: [
    "05 Nights stay in 4★ Hotel (or similar) on Twin/Double sharing basis",
    "Daily Breakfast at hotel",
    "All sightseeing & transfers by Private AC Vehicle",
    "Dhow Cruise with Dinner (Marina/Creek)",
    "Desert Safari with BBQ Dinner & Shows",
    "Burj Khalifa (124 & 125 Floor)",
    "Dubai Aquarium & Underwater Zoo",
    "Abu Dhabi City Tour + Ferrari World Bronze Ticket",
    "Dubai Frame Entry",
    "Miracle Garden / Global Village Entry",
    "All taxes & service charges (except GST & TCS)"
  ],

  exclusions: [
    "International Airfare",
    "Dubai Tourist Visa (₹7,500 per person)",
    "Travel Insurance (₹1,500 per person – highly recommended)",
    "Personal expenses (laundry, tips, shopping, etc.)",
    "Early check-in / Late check-out charges",
    "Guide charges",
    "Anything not mentioned in inclusions"
  ]
},

  dubaiitinerary: {
  title: "DUBAI LUXURY & ADVENTURE ESCAPE",
  heroImg: "https://images.unsplash.com/photo-1518684029380-b61d194005e7?auto=format&fit=crop&w=1600&q=80",
  difficulty: "Moderate",
  duration: "4 Nights / 5 Days",
  cost: "₹50,000 + 5% GST + 5% TCS per person (Min. 2 Pax)",
  hotel: "Citymax Bur Dubai (4★) or Similar",
  mealPlan: "Daily Breakfast + 1 BBQ Dinner",

  // Optional: Show cost breakdown
  pricingNote: "Travel for minimum 2 persons • Single supplement available on request",

  itinerary: [
    "DAY 1: ARRIVAL IN DUBAI<br>Airport pickup → Hotel check-in → Evening at leisure → Overnight in Dubai",
    "DAY 2: HALF DAY DUBAI CITY TOUR & DESERT SAFARI WITH BBQ DINNER<br>Breakfast → Visit Burj Al Arab, Palm Jumeirah, Dubai Marina → Evening Desert Safari with dune bashing, camel ride, sandboarding, henna, Tanura & Belly Dance + BBQ Dinner → Overnight",
    "DAY 3: BURJ KHALIFA, DUBAI AQUARIUM & MUSEUM OF THE FUTURE<br>Breakfast → Burj Khalifa 124th–125th Floor (Non-Prime) → Dubai Aquarium & Underwater Zoo + Penguin Cove → Museum of the Future → Evening: Global Village + Miracle Garden (seasonal) → Overnight",
    "DAY 4: MARINA DHOW DINNER CRUISE & FREE DAY<br>Breakfast → Full day free for shopping/leisure → Evening Marina Dhow Cruise with dinner & live entertainment → Overnight",
    "DAY 5: ABU DHABI CITY TOUR + FERRARI WORLD & DEPARTURE<br>Breakfast → Sheikh Zayed Grand Mosque → Emirates Palace → Corniche → Ferrari World (Standard Ticket) → Transfer to Dubai Airport"
  ],

  inclusions: [
    "4 Nights accommodation in Citymax Bur Dubai (4★) or similar",
    "Daily Breakfast at hotel",
    "BBQ Dinner during Desert Safari",
    "Airport transfers (Arrival & Departure) by private vehicle",
    "Half Day Dubai City Tour",
    "Desert Safari with Dune Bashing, Camel Ride, Sandboarding, Henna & Shows",
    "Burj Khalifa 124th & 125th Floor (Non-Prime Hours)",
    "Dubai Aquarium & Underwater Zoo + Penguin Cove",
    "Museum of the Future entry (subject to availability)",
    "Global Village + Miracle Garden (seasonal) with transfers",
    "Marina Dhow Dinner Cruise",
    "Full Day Abu Dhabi City Tour",
    "Ferrari World Standard Ticket",
    "All sightseeing transfers & entry tickets as mentioned",
    "Professional English-speaking guide on select tours",
    "All taxes, driver allowances, tolls & parking"
  ],

  exclusions: [
    "International Airfare",
    "Dubai Tourist Visa (₹7,500 per person)",
    "Travel Insurance (₹1,000 – ₹1,200 per person – highly recommended)",
    "Lunch & dinners except BBQ Dinner on Desert Safari",
    "Personal expenses (shopping, tips, laundry, etc.)",
    "Optional activities & theme parks not mentioned",
    "Early check-in / Late check-out charges",
    "Anything not mentioned in inclusions"
  ],

  specialNotes: [
    "Minimum 2 persons traveling together",
    "Visa on arrival for Indian passport holders (subject to UAE rules)",
    "Museum of the Future ticket subject to availability at time of booking",
    "Miracle Garden open only from October to April"
  ]
},

 ladakh: {
  title: "MAGICAL LADAKH – 5N/6D",
  heroImg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  difficulty: "Moderate to Challenging (High Altitude)",
  duration: "5 Nights / 6 Days",
  validity: "02nd March 2024 – 31st October 2024",

  // Pricing Table
  pricing: {
    for2Pax: {
      deluxe: "₹34,000 + 5% GST per person",
      superDeluxe: "₹39,000 + 5% GST per person"
    },
    for4Pax: {
      deluxe: "₹24,500 + 5% GST per person",
      superDeluxe: "₹29,600 + 5% GST per person"
    },
    vehicle: "Ertiga / XUV / Xylo / Scorpio / Similar"
  },

  hotels: {
    leh: {
      deluxe: "LaMount / Oriental(Veg) / Similar",
      superDeluxe: "T Chong / Maitreya / Leh Plaza / Similar"
    },
    nubra: {
      deluxe: "Organic Boutique Rooms / Chamba / Lotus Eco / Similar Resort",
      superDeluxe: "Hunder Sarai / Similar"
    }
  },

  itinerary: [
    "DAY 1: ARRIVE LEH<br>• Airport pickup as per flight timing<br>• Full day rest for acclimatization<br>• Evening visit Shanti Stupa<br>• Overnight at hotel in Leh",
    
    "DAY 2: LEH LOCAL SIGHTSEEING<br>• Breakfast<br>• Visit Shey Palace, Thiksey Monastery, Rancho’s School (3 Idiots), Leh Palace & Shanti Stupa<br>• Overnight in Leh",
    
    "DAY 3: LEH → NUBRA VALLEY VIA KHARDUNGLA<br>• Early breakfast<br>• Drive to Nubra via world’s highest motorable road (Khardungla 17,582 ft)<br>• Visit Diskit Gompa & enjoy Double Hump Camel Ride at Hunder Sand Dunes<br>• Overnight at Camp/Resort in Nubra",
    
    "DAY 4: NUBRA → PANGONG LAKE → LEH<br>• Breakfast<br>• Drive to Pangong Lake via Shyok River route<br>• Spend time at the stunning Pangong Tso (14,270 ft)<br>• Return to Leh via Changla Pass<br>• Overnight in Leh",
    
    "DAY 5: LEH LOCAL SIGHTSEEING<br>• Breakfast<br>• Visit Sangam (Indus-Zanskar Confluence), Magnetic Hill, Gurudwara Pathar Sahib & Hall of Fame Museum<br>• Overnight in Leh",
    
    "DAY 6: DEPARTURE FROM LEH<br>• Breakfast<br>• Transfer to Leh Airport with beautiful memories"
  ],

  inclusions: [
    "5 Nights accommodation (Leh 3N + Nubra 1N + Direct Return from Pangong)",
    "Daily Breakfast & Dinner at hotel/camp",
    "All transfers & sightseeing by Ertiga/XUV/Xylo/Scorpio (Non-AC due to high altitude)",
    "Airport pickup and drop",
    "Inner Line Permit (ILP) for restricted areas (Nubra & Pangong)",
    "All applicable tolls, parking, and driver allowance",
    "Oxygen cylinder & basic medical kit in vehicle",
    "24×7 on-ground assistance in Leh"
  ],

  exclusions: [
    "Airfare to/from Leh",
    "Lunch & any meals/beverages not mentioned",
    "Entry fees to monasteries, museums, parks",
    "Camel ride at Hunder (₹500–700 per person – optional)",
    "Personal expenses (tips, laundry, shopping, medicines)",
    "Any cost arising due to natural calamities, flight cancellation, roadblocks",
    "Guide charges",
    "Anything not mentioned in Inclusions"
  ],

  importantNotes: [
    "High Altitude: Proper acclimatization mandatory on Day 1",
    "No AC vehicles in Ladakh due to low oxygen levels",
    "Luxury/5-Star hotels available on request (dynamic pricing)",
    "Itinerary subject to change due to weather/road conditions",
    "Packed meals provided during long transfers"
  ],

  paymentTerms: [
    "50% advance at the time of booking",
    "Balance 30 days before travel date",
    "Non-payment leads to automatic cancellation without refund"
  ],

  cancellationPolicy: [
    "60+ days before departure → 75% refund",
    "30–59 days before departure → 50% refund",
    "15–29 days before departure → 30% refund",
    "< 15 days → No refund"
  ]
},

    egypt: {
      title: "7 NIGHTS EGYPT PREMIUM ESCAPE",
      heroImg: "https://images.unsplash.com/photo-1564507596778-90a2b71d8b1c?auto=format&fit=crop&w=1600&q=80",
      difficulty: "Easy",
      duration: "7 Days",
      cost: "₹1,25,000 + 5% GST",
      itinerary: [
        "Day 1 – Cairo, Pyramids",
        "Day 2 – Nile Cruise Embark",
        "Day 3 – Luxor Temples",
        "Day 4 – Valley of the Kings",
        "Day 5 – Aswan & Abu Simbel",
        "Day 6 – Kom Ombo & Edfu",
        "Day 7 – Cairo & Departure"
      ],
      inclusions: ["5★ Cruise", "All Entry", "Guide", "Meals"],
      exclusions: ["Flights", "Visa"]
    },

kohphangan: {
  title: "FULL MOON PARTY KOH PHANGAN – 4N/5D",
  heroImg: "https://images.unsplash.com/photo-1519904981064-47b81a3a08db?auto=format&fit=crop&w=1600&q=80",
  difficulty: "Easy to Party",
  duration: "4 Nights / 5 Days",
  highlight: "Experience the World Famous Full Moon Party!",

  pricing: {
    "2 Pax (1 Room)": "₹29,900 per person",
    "3 Pax (1 Room)": "₹27,900 per person",
    "4 Pax (2 Rooms)": "₹26,900 per person",
    "6 Pax (2 Rooms)": "₹24,900 per person",
    "10 Pax (4 Rooms)": "₹23,900 per person"
  },
  taxes: "5% GST + 5% TCS (20% TCS if total bill > ₹7 Lakh)",

  hotels: {
    phuket: "Ashlee Hub Hotel Patong – Deluxe Room (2 Nights)",
    kohsamui: "OZO Chaweng Samui – Superior Room (2 Nights)"
  },

  itinerary: [
    "DAY 1: ARRIVAL PHUKET + CITY TOUR<br>• Arrival at Phuket International Airport<br>• Private transfer with Phuket City Tour & Big Buddha visit<br>• Check-in at Ashlee Hub Patong<br>• Overnight in Phuket",
    
    "DAY 2: PHUKET → KOH SAMUI<br>• Early breakfast & check-out<br>• Transfer to Phuket Old Town → Donsak Pier (SIC)<br>• 14:00 Ferry to Nathon Pier, Koh Samui<br>• Private transfer to OZO Chaweng Samui<br>• Overnight in Koh Samui",
    
    "DAY 3: FULL MOON PARTY NIGHT<br>• Breakfast + Full day free for beach & leisure<br>• 16:30 Pick-up for Full Moon Party at Haad Rin Beach, Koh Phangan<br>• Party till late night<br>• 01:00 AM Return by speedboat + shared transfer to hotel<br>• Overnight in Koh Samui",
    
    "DAY 4: KOH SAMUI → PHUKET<br>• Breakfast & check-out<br>• Transfer to Nathon Pier → Ferry to Donsak Pier<br>• Shared transfer to Phuket Town → Private drop to Patong hotel<br>• Overnight in Phuket",
    
    "DAY 5: DEPARTURE<br>• Breakfast & check-out<br>• Private transfer to Phuket Airport<br>• Fly back with epic memories!"
  ],

  inclusions: [
    "2 Nights Phuket – Ashlee Hub Patong (Deluxe Room)",
    "2 Nights Koh Samui – OZO Chaweng Samui (Superior Room)",
    "Daily Breakfast at both hotels",
    "Phuket Airport ↔ Hotel (Private)",
    "Phuket City Tour with Big Buddha (Private)",
    "All ferry tickets (Donsak ↔ Koh Samui)",
    "Shared transfers for pier connections",
    "Full Moon Party transfers (Koh Samui ↔ Koh Phangan by speedboat)",
    "All hotel taxes & service charges"
  ],

  exclusions: [
    "International Airfare",
    "Thailand Visa (Visa on Arrival for Indians)",
    "Travel Insurance",
    "Full Moon Party Entry Fee – 200 THB (~₹500) per person (pay on spot)",
    "Lunch & Dinner",
    "Drinks, shopping, personal expenses",
    "Early check-in / Late check-out charges",
    "Anything not mentioned in inclusions"
  ],

  importantNotes: [
    "Full Moon Party dates change every month – package valid only for actual Full Moon dates",
    "Party entry fee 200 THB to be paid directly at Haad Rin Beach",
    "Dress code: Neon / Fluorescent / White recommended",
    "Bucket drinks, body paint, glow accessories available at the party",
    "High party season – book 2–3 months in advance!"
  ]
},

uttarakhand: {
  title: "UTTARAKHAND HILL & WILDLIFE ESCAPE",
  subTitle: "Mussoorie • Jim Corbett • Nainital",
  heroImg: "https://images.unsplash.com/photo-1572793524131-5f7d55f7f722?auto=format&fit=crop&w=1600&q=80",
  duration: "6 Nights / 7 Days",
  difficulty: "Easy to Moderate",
  pickupDrop: "Delhi / Dehradun",

  // Pricing Table
  pricing: {
    "2 Pax (1 Room": {
      "3 Star": "₹26,000 + 5% GST per person",
      "4 Star": "₹29,900 + 5% GST per person"
    },
    "4 Pax (2 Rooms)": {
      "3 Star": "₹21,000 + 5% GST per person",
      "4 Star": "₹24,900 + 5% GST per person"
    },
    "Extra Adult": { "3 Star": "₹7,500", "4 Star": "₹10,000" },
    "Child with Bed (5–11 yrs)": { "3 Star": "₹5,500", "4 Star": "₹7,900" }
  },

  hotels: {
    mussoorie_2N: {
      "3 Star": "Hotel The Pride (Executive) / Wild Spring (Standard) or similar",
      "4 Star": "AHR Notting Hills (Elegant Room) / Green N Breeze or similar"
    },
    corbett_2N: {
      "3 Star": "Wanderlust Resort (Deluxe Room) or similar",
      "4 Star": "Roar Resort (Imperial Room) or similar"
    },
    nainital_2N: {
      "3 Star": "Cedar Woods Elegant Balcony / Langdale Manor (Deluxe) or similar",
      "4 Star": "Cygnett Mountain Breeze (Deluxe Room) or similar"
    }
  },

  itinerary: [
    "DAY 01: DELHI/DEHRADUN → MUSSOORIE (280/100 km)<br>• Pickup from Delhi/Dehradun<br>• Drive to Queen of Hills – Mussoorie<br>• Evening at leisure on Mall Road<br>• Dinner & overnight in Mussoorie",

    "DAY 02: MUSSOORIE SIGHTSEEING<br>• Breakfast<br>• Visit Kempty Falls, Bhatta Falls, Gun Hill (by cable car), Library Chowk, Mall Road<br>• Enjoy stunning sunset from Gun Hill<br>• Dinner & overnight in Mussoorie",

    "DAY 03: MUSSOORIE → JIM CORBETT NATIONAL PARK (250 km / 8 hrs)<br>• Breakfast & check-out<br>• Scenic drive to Corbett<br>• Evening free to relax<br>• Dinner & overnight in Corbett",

    "DAY 04: CORBETT NATIONAL PARK<br>• Early morning & afternoon Jeep Safari (at own cost – recommended)<br>• Visit Garjiya Devi Temple, Corbett Museum, Kosi River<br>• Dinner & overnight in Corbett",

    "DAY 05: CORBETT → NAINITAL via LAKE TOUR (120 km / 4 hrs)<br>• Breakfast & check-out<br>• Enroute visit Bhimtal, Sattal & Naukuchiatal<br>• Arrive Nainital – the Lake District of India<br>• Dinner & overnight in Nainital",

    "DAY 06: NAINITAL SIGHTSEEING<br>• Breakfast<br>• Visit Naini Lake, Naina Devi Temple, Mall Road, Himalaya Darshan, Tiffin Top, Lake View Point<br>• Boating in Naini Lake (own cost)<br>• Dinner & overnight in Nainital",

    "DAY 07: NAINITAL → DELHI/DEHRADUN DROP<br>• Breakfast & check-out<br>• Drop at Delhi/Dehradun Airport/Railway Station (up to 8 PM)<br>• Tour ends with beautiful memories"
  ],

  inclusions: [
    "6 Nights accommodation in above or similar hotels",
    "Daily Breakfast & Dinner (MAP Plan)",
    "All transfers & sightseeing by AC Vehicle (AC not operational in hills)",
    "Pickup & drop from Delhi/Dehradun",
    "Driver allowance, tolls, parking, fuel charges",
    "All applicable taxes & service charges"
  ],

  exclusions: [
    "5% GST (to be added on final billing)",
    "Airfare / Train fare",
    "Jungle Safari in Corbett (₹6,500–₹8,500 per jeep – book in advance)",
    "Entry fees, cable car, boating, horse ride",
    "Guide charges",
    "Personal expenses, tips, laundry",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  importantNotes: [
    "AC will NOT operate in hill areas (Mussoorie & Nainital)",
    "Vehicle is point-to-point as per itinerary – not on disposal",
    "Mall Road, Snow View, Tiffin Top accessible only by local taxi (extra cost)",
    "Jeep Safari booking opens 45 days in advance – book early for Bijrani/Dhikala zone",
    "Early check-in / late check-out subject to availability & extra charge",
    "No refund for unutilized services"
  ]
},
  }

 // === SUPER ROBUST TITLE MATCHING FUNCTION ===
  function findPackageByCardTitle(cardTitle) {
    const cleanCard = cardTitle.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Direct key match first
    for (const key in packages) {
      if (cleanCard.includes(key)) return packages[key];
    }

    // Then match against actual title (case-insensitive, punctuation-free)
    for (const key in packages) {
      const cleanTitle = packages[key].title.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (cleanCard.includes(cleanTitle) || cleanTitle.includes(cleanCard)) {
        return packages[key];
      }
    }

    // Special keyword fallbacks
    const keywords = {
      "statueofunity": ["statue", "unity", "tentcity"],
      "dubai": ["dubai", "dubaipackage"],
      "dubaiitinerary": ["itineraryfordubai", "itinerary for dubai"],
      "ladakh": ["ladakh", "iternaryforladakh"], // catches typo too
      "egypt": ["egypt", "nights"],
      "kohphangan": ["fullmoon", "kohphangan", "phangan"],
      "uttarakhand": ["uttarakhand", "tour"]
    };

    for (const key in keywords) {
      if (keywords[key].some(kw => cleanCard.includes(kw))) {
        return packages[key];
      }
    }

    return null; // Truly not found
  }

  // === CLICK HANDLER ===
  document.querySelectorAll('.pkg-card .btn-danger').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      
      const card = this.closest('.pkg-card');
      const cardTitle = card.querySelector('.card-title').textContent.trim();

      const pkg = findPackageByCardTitle(cardTitle);

      if (pkg) {
        openPackagePage(pkg);
      } else {
        // Only shows for genuinely missing packages
        alert("This package is coming soon! Contact us for early bird offers.");
      }
    });
  });

  // === GENERATE & OPEN FULL HTML PAGE ===
  function openPackagePage(pkg) {
    const difficultyClass = {
      'Hard': 'difficulty-hard',
      'Moderate': 'difficulty-moderate',
      'Easy': 'difficulty-easy'
    }[pkg.difficulty] || 'difficulty-moderate';
    // ========== STATUE OF UNITY TENT CITY – PREMIUM DETAILED PAGE ==========
    if (pkg.title.includes("STATUE OF UNITY")) {

      const pricingTable = (data, title, highlight = false) => `
        <div class="mb-4">
          <h5 class="text-center fw-bold text-danger mb-3">${title}</h5>
          <table class="table table-bordered text-center ${highlight ? 'table-warning' : ''}">
            <thead class="table-dark">
              <tr>
                <th>Cottage Type</th>
                <th>1 Night</th>
                <th>2 Nights</th>
                <th>3 Nights</th>
              </tr>
            </thead>
            <tbody>
              ${data.map(row => `
                <tr>
                  <td class="fw-bold">${row.cottage || row.type}</td>
                  <td class="fs-5 text-success">₹${row["1N"] || row.sunMon}</td>
                  <td class="fs-5 text-success">₹${row["2N"] || '-'}</td>
                  <td class="fs-5 text-success">₹${row["3N"] || row.tueSat}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`;

      const collapsibleItinerary = (id, title, days) => `
        <div class="accordion-item border mb-3 rounded shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#${id}">
              ${title}
            </button>
          </h2>
          <div id="${id}" class="accordion-collapse collapse">
            <div class="accordion-body">
              ${days.map(day => `<p class="mb-2"><strong>→</strong> ${day}</p>`).join('')}
            </div>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pkg.title} - DREAM Adventure</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
  body{font-family:'Roboto',sans-serif;background:#fff5f5;margin:0;}
  .hero{height:65vh;min-height:420px;background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('${pkg.heroImg}') center/cover no-repeat fixed;color:white;display:flex;align-items:center;text-align:center;}
  .hero h1{font-family:'Playfair Display',serif;font-size:4.2rem;text-shadow:0 8px 30px rgba(0,0,0,0.9);}
  .itinerary-day{background:white;padding:1.8rem;border-left:6px solid #e74c3c;border-radius:12px;margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.08);}
  .itinerary-day:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(231,76,60,0.2);}
  .price-highlight{background:#fff3cd;padding:2rem;border-radius:12px;text-align:center;border:2px dashed #e74c3c;}
  @media(max-width:768px){.hero{background-attachment:scroll;height:55vh;}.hero h1{font-size:2.8rem;}}
</style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">DREAM</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="{% url 'home' %}">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="{% url 'about' %}">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tours</a>
            <ul class="dropdown-menu" aria-labelledby="toursDropdown">
              <li><a class="dropdown-item" href="{% url 'luxuary' %}">Luxury</a></li>
              <li><a class="dropdown-item" href="{% url 'honeymoon' %}">Honeymoon</a></li>
              <li><a class="dropdown-item" href="{% url 'cultural' %}">Cultural</a></li>
              <li><a class="dropdown-item" href="{% url 'relax' %}">Relax</a></li>
              <li><a class="dropdown-item" href="{% url 'adventure' %}">Adventure</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="{% url 'services' %}">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="{% url 'clients' %}">Clients</a></li>
          <li class="nav-item">
            <a href="{% url 'loginform' %}" class="nav-link contact-btn">
              <span class="btn-text">Start Journey</span>
              <span class="btn-icon"><i class="fas fa-plane-departure"></i></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<header class="hero">
  <div class="container">
    <h1 class="display-4 fw-bold">STATUE OF UNITY<br>TENT CITY EXPERIENCE</h1>
    <p class="lead">World’s Tallest Statue • Luxury Tent Stay • All Inclusive</p>
    <p class="h4 text-warning">1N/2D • 2N/3D • 3N/4D Packages</p>
  </div>
</header>

<div class="container py-5">

  <div class="price-highlight mb-5">
    <h3 class="text-danger fw-bold">GST Extra As Applicable</h3>
    <p class="lead">Closed on Mondays • All Activities Subject to Availability</p>
  </div>

  <h2 class="text-center text-danger mb-4">Package Rates (Per Person – Twin Sharing)</h2>
  
  <div class="row">
    <div class="col-lg-6">${pricingTable(pkg.pricing.sunMon, "Sunday & Monday", true)}</div>
    <div class="col-lg-6">${pricingTable(pkg.pricing.tueSat, "Tuesday to Saturday")}</div>
  </div>

  <h5 class="text-center text-danger fw-bold mb-4">Extra Mattress / Person Charges (Per Night)</h5>
  <div class="row justify-content-center">
    <div class="col-lg-8">${pricingTable(pkg.pricing.extraMattress, "", false)}</div>
  </div>

  <h2 class="text-center text-danger mb-5 mt-5">Day-wise Detailed Itinerary</h2>
  <div class="accordion" id="souItineraries">
    ${collapsibleItinerary('itinerary1N', '1 Night / 2 Days Package', pkg.itinerary["1N2D"])}
    ${collapsibleItinerary('itinerary2N', '2 Nights / 3 Days Package', pkg.itinerary["2N3D"])}
    ${collapsibleItinerary('itinerary3N', '3 Nights / 4 Days Package (Includes Jungle Safari + Nutrition Park)', pkg.itinerary["3N4D"])}
  </div>

  <div class="row mt-5">
    <div class="col-md-6">
      <h4 class="text-success"><i class="fas fa-check-circle"></i> Inclusions</h4>
      <ul class="list-unstyled">
        ${pkg.inclusions.map(i => `<li class="mb-2">✓ ${i}</li>`).join('')}
      </ul>
    </div>
    <div class="col-md-6">
      <h4 class="text-danger"><i class="fas fa-times-circle"></i> Exclusions & Notes</h4>
      <ul class="list-unstyled">
        ${pkg.exclusions.map(i => `<li class="mb-2">✗ ${i}</li>`).join('')}
      </ul>
    </div>
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-danger text-white px-5 shadow-lg">
      Book Your Statue of Unity Experience Now!
    </a>
  </div>
</div>

<!-- FOOTER -->
  <footer class="site-footer bg-dark text-white py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h5 class="fw-bold mb-4 text-uppercase">Popular Packages</h5>
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <a href="{% url 'cultural' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Cultural</a>
                    <a href="{% url 'relax' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Relax</a>
                    <a href="{% url 'adventure' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Adventure</a>
                    <a href="{% url 'luxuary' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Luxury</a>
                    <a href="{% url 'honeymoon' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Honeymoon</a>
                </div>
            </div>
            <div class="text-center border-top border-secondary pt-4">
                <p class="mb-0 small">© 2025  MAYYRA INFOTECH. ALL RIGHTS ARE RESERVED.</p>
            </div>
        </div>
    </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 900, once: true });
    function setHeroHeight() {
      const nav = document.querySelector('.navbar');
      const navH = nav ? nav.offsetHeight : 70;
      const hero = document.querySelector('.hero');
      if (hero) hero.style.height = Math.max(window.innerHeight - navH, 320) + 'px';
    }
    window.addEventListener('resize', setHeroHeight);
    document.addEventListener('DOMContentLoaded', setHeroHeight);
    setTimeout(setHeroHeight, 200);
  </script>
</body></html>`;

      const win = window.open('', '_blank');
      win.document.write(html);
      win.document.close();
      return;
    }
        // ========== DUBAI ADVENTURE & LUXURY ESCAPE – PREMIUM PAGE ==========
    if (pkg.title.includes("DUBAI")) {

      const pricingTable = `
        <div class="table-responsive mb-4">
          <table class="table table-bordered text-center">
            <thead class="table-danger">
              <tr><th>No. of Persons</th><th>Cost Per Person</th></tr>
            </thead>
            <tbody>
              ${pkg.pricing.map(p => `
                <tr ${p.pax.includes("04") ? 'class="table-warning fw-bold"' : ''}>
                  <td>${p.pax}</td>
                  <td class="fs-4 text-success">${p.cost}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>`;

      const addOnBox = `
        <div class="alert alert-info text-center border border-primary">
          <h5 class="fw-bold text-primary mb-3">Mandatory / Recommended Add-ons</h5>
          ${pkg.addOns.map(a => `<p class="mb-1"><strong>${a.item}:</strong> ${a.cost}</p>`).join('')}
        </div>`;

      const collapsibleSection = (id, title, contentArray) => `
        <div class="accordion-item border mb-3 rounded shadow-sm">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed fw-bold fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#${id}">
              ${title}
            </button>
          </h2>
          <div id="${id}" class="accordion-collapse collapse">
            <div class="accordion-body">
              <ul class="list-unstyled">
                ${contentArray.map(item => `<li class="mb-2">Checkmark ${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pkg.title} - DREAM Adventure</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
  body{font-family:'Roboto',sans-serif;background:#fff5f5;margin:0;}
  .hero{height:65vh;min-height:420px;background:linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.85)),url('${pkg.heroImg}') center/cover no-repeat fixed;color:white;display:flex;align-items:center;text-align:center;}
  .hero h1{font-family:'Playfair Display',serif;font-size:4.5rem;text-shadow:0 8px 30px rgba(0,0,0,0.9);}
  .itinerary-day{background:white;padding:1.8rem;border-left:6px solid #e74c3c;border-radius:12px;margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.08);}
  .itinerary-day:hover{transform:translateY(-5px);box-shadow:0 15px 40px rgba(231,76,60,0.2);}
  .price-box{background:linear-gradient(135deg,#fff3cd,#ffeaa7);padding:2rem;border-radius:15px;text-align:center;border:3px dashed #e74c3c;}
  @media(max-width:768px){.hero{background-attachment:scroll;height:55vh;}.hero h1{font-size:2.8rem;}}
</style>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{% url 'home' %}">
                <img src="https://dream-visa-website.vercel.app/assets/logo.png" alt="DREAM Logo" height="50"/>
            
               
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="{% url 'home' %}">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'about' %}">About</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tours</a>
                        <ul class="dropdown-menu" aria-labelledby="toursDropdown">
                            <li><a class="dropdown-item" href="{% url 'luxuary' %}">Luxury</a></li>
                            <li><a class="dropdown-item" href="{% url 'honeymoon' %}">Honeymoon</a></li>
                            <li><a class="dropdown-item" href="{% url 'cultural' %}">Cultural</a></li>
                            <li><a class="dropdown-item" href="{% url 'relax' %}">Relax</a></li>
                            <li><a class="dropdown-item" href="{% url 'adventure' %}">Adventure</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'services' %}">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'clients' %}">Clients</a></li>
               <li class="nav-item w-100 d-lg-none text-center my-3">
                    <a class="nav-link position-relative d-inline-flex align-items-center justify-content-center fw-bold fs-4 text-danger" 
                       href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-3 rounded-pill shadow animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                
                <!-- Desktop version (hidden on mobile) -->
                <li class="nav-item d-none d-lg-block mx-3">
                    <a class="nav-link position-relative d-flex align-items-center fw-bold text-danger" href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-2 rounded-pill animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                    <li class="nav-item">
                        <a href="{% url 'loginform' %}" class="nav-link contact-btn">
                            <span class="btn-text">Start Journey</span>
                            <span class="btn-icon"><i class="fas fa-phone"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

<header class="hero">
  <div class="container">
    <h1 class="display-4 fw-bold">${pkg.title}</h1>
    <p class="lead">${pkg.duration} • Burj Khalifa • Desert Safari • Ferrari World</p>
    <p class="h3 text-warning">The Ultimate Dubai Experience</p>
  </div>
</header>

<div class="container py-5">

  <div class="price-box mb-5">
    <h3 class="text-danger fw-bold">Package Cost (Land Only)</h3>
    ${pricingTable}
    ${addOnBox}
  </div>

  <h2 class="text-center text-danger mb-5">Detailed Day-wise Itinerary</h2>
  ${pkg.itinerary.map((day, i) => `
    <div class="itinerary-day">
      <h5 class="text-danger"><strong>Day ${i+1}:</strong> ${day.split('→')[0].trim()}</h5>
      <p class="mb-0">${day.split('→').slice(1).join('→').trim()}</p>
    </div>
  `).join('')}

  <div class="accordion mt-5" id="dubaiDetails">
    ${collapsibleSection('incl', 'Inclusions (Click to Expand)', pkg.inclusions)}
    ${collapsibleSection('excl', 'Exclusions', pkg.exclusions)}
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-danger text-white px-5 shadow-lg">
      Book Your Dubai Dream Now!
    </a>
  </div>
</div>

 <footer class="site-footer bg-dark text-white py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h5 class="fw-bold mb-4 text-uppercase">Popular Packages</h5>
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <a href="{% url 'cultural' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Cultural</a>
                    <a href="{% url 'relax' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Relax</a>
                    <a href="{% url 'adventure' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Adventure</a>
                    <a href="{% url 'luxuary' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Luxury</a>
                    <a href="{% url 'honeymoon' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Honeymoon</a>
                </div>
            </div>
            <div class="text-center border-top border-secondary pt-4">
                <p class="mb-0 small">© 2025 MAYYRA INFOTECH. ALL RIGHTS ARE RESERVED.</p>
            </div>
        </div>
    </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 900, once: true });
    function setHeroHeight() {
      const nav = document.querySelector('.navbar');
      const navH = nav ? nav.offsetHeight : 70;
      const hero = document.querySelector('.hero');
      if (hero) hero.style.height = Math.max(window.innerHeight - navH, 320) + 'px';
    }
    window.addEventListener('resize', setHeroHeight);
    document.addEventListener('DOMContentLoaded', setHeroHeight);
    setTimeout(setHeroHeight, 200);
  </script>
</body></html>`;

      const win = window.open('', '_blank');
      win.document.write(html);
      win.document.close();
      return;
    }
//         // ========== DUBAI ₹50,000 LUXURY & ADVENTURE ESCAPE ==========
//     if (pkg.title.includes("DUBAI") && pkg.cost.includes("50,000")) {

//       const html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Dubai Luxury & Adventure Escape ₹50,000 - DREAM Tours</title>
//   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
//   <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"/>
//   <style>
//     body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #fff5f5; color: #333; line-height: 1.7; }
//     .hero {
//       height: 70vh; min-height: 520px;
//       background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)),
//                   url('${pkg.heroImg}') center/cover no-repeat fixed;
//       color: white; display: flex; align-items: center; text-align: center;
//     }
//     .hero h1 { font-size: 4.5rem; font-weight: 900; text-shadow: 0 10px 30px rgba(0,0,0,0.9); }
//     .price-box {
//       background: linear-gradient(135deg, #fff3cd, #ffeaa7);
//       border: 4px dashed #e74c3c; border-radius: 20px; padding: 2.5rem;
//       text-align: center; box-shadow: 0 15px 40px rgba(231,76,60,0.25);
//     }
//     .itinerary-day {
//       background: white; padding: 2rem; border-left: 7px solid #e74c3c;
//       border-radius: 15px; margin-bottom: 1.8rem;
//       box-shadow: 0 10px 30px rgba(0,0,0,0.08);
//       transition: all 0.4s ease;
//     }
//     .itinerary-day:hover { transform: translateY(-10px); box-shadow: 0 20px 50px rgba(231,76,60,0.2); }
//     .contact-btn {
//       background: linear-gradient(135deg, #667eea, #764ba2); color: white;
//       padding: 1rem 2.5rem; border-radius: 50px; font-weight: 700; font-size: 1.1rem;
//       box-shadow: 0 10px 30px rgba(102,126,234,0.5);
//     }
//     .contact-btn:hover { transform: scale(1.05); box-shadow: 0 15px 40px rgba(102,126,234,0.7); }
//     @media (max-width: 768px) {
//       .hero { height: 60vh; background-attachment: scroll; }
//       .hero h1 { font-size: 2.8rem; }
//     }
//   </style>
// </head>
// <body>

//   <!-- Navbar -->
//   <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
//     <div class="container">
//       <a class="navbar-brand fw-bold" href="index.html">DREAM</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarNav">
//         <ul class="navbar-nav ms-auto">
//           <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
//           <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tours</a>
//             <ul class="dropdown-menu" aria-labelledby="toursDropdown">
//               <li><a class="dropdown-item" href="luxuary.html">Luxury</a></li>
//               <li><a class="dropdown-item" href="honeymoon.html">Honeymoon</a></li>
//               <li><a class="dropdown-item" href="cultural.html">Cultural</a></li>
//               <li><a class="dropdown-item" href="relax.html">Relax</a></li>
//               <li><a class="dropdown-item" href="adventure.html">Adventure</a></li>
//             </ul>
//           </li>
//           <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
//           <li class="nav-item"><a class="nav-link" href="clients.html">Clients</a></li>
//           <li class="nav-item">
//             <a href="loginform.html" class="nav-link contact-btn">
//               <span class="btn-text">Start Journey</span>
//               <span class="btn-icon"><i class="fas fa-plane-departure"></i></span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>

//   <!-- Hero -->
//   <header class="hero">
//     <div class="container">
//       <h1 class="display-3 fw-bold">DUBAI LUXURY & ADVENTURE</h1>
//       <p class="lead fs-2">4 Nights / 5 Days • Citymax Bur Dubai (4★)</p>
//       <p class="h1 text-warning fw-bold">₹50,000 + Taxes</p>
//       <p class="fs-3">(Per Person • Minimum 2 Pax)</p>
//       <span class="badge bg-success fs-5 px-4 py-2">Moderate • All Major Attractions Included</span>
//     </div>
//   </header>

//   <div class="container py-5">

//     <!-- Price Highlight -->
//     <div class="price-box my-5">
//       <h2 class="text-danger fw-bold mb-3">PACKAGE COST</h2>
//       <h1 class="display-3 text-dark fw-bold">₹50,000</h1>
//       <p class="lead text-danger">+ 5% GST + 5% TCS Per Person</p>
//       <p class="fs-4">Traveling for Minimum 2 Persons</p>
//     </div>

//     <!-- Hotel Info -->
//     <div class="text-center mb-5">
//       <h3>Accommodation: <strong>Citymax Bur Dubai (4★)</strong> or Similar</h3>
//       <p class="text-muted">Meal Plan: Daily Breakfast + 1 BBQ Dinner</p>
//     </div>

//     <!-- Itinerary -->
//     <h2 class="text-center text-danger mb-5 fw-bold">Day-wise Itinerary</h2>
//     ${pkg.itinerary.map((day, i) => `
//       <div class="itinerary-day">
//         <h4 class="text-primary fw-bold"><i class="fas fa-calendar-day me-2"></i> DAY ${i+1}</h4>
//         <div>${day.replace(/<br>/g, '</div><div class="mt-2">• ')}</div>
//       </div>
//     `).join('')}

//     <!-- Inclusions & Exclusions -->
//     <div class="row mt-5">
//       <div class="col-lg-6">
//         <h3 class="text-success text-center"><i class="fas fa-check-circle"></i> Inclusions</h3>
//         <ul class="list-unstyled mt-4">
//           ${pkg.inclusions.map(i => `<li class="mb-3 fs-5"><strong>✓</strong> ${i}</li>`).join('')}
//         </ul>
//       </div>
//       <div class="col-lg-6">
//         <h3 class="text-danger text-center"><i class="fas fa-times-circle"></i> Exclusions</h3>
//         <ul class="list-unstyled mt-4">
//           ${pkg.exclusions.map(i => `<li class="mb-3 fs-5"><strong>✗</strong> ${i}</li>`).join('')}
//         </ul>
//       </div>
//     </div>

//     <!-- Notes -->
//     <div class="alert alert-info mt-5">
//       <h4><i class="fas fa-info-circle"></i> Important Notes</h4>
//       <ul>
//         ${pkg.notes.map(n => `<li>${n}</li>`).join('')}
//       </ul>
//     </div>

//     <!-- CTA -->
//     <div class="text-center py-5">
//       <h2>Ready for Your Dubai Dream Trip?</h2>
//       <a href="loginform.html" class="btn contact-btn btn-lg px-5 py-3 fs-4">
//         <i class="fas fa-paper-plane me-3"></i> Book Now @ Just ₹50,000
//       </a>
//     </div>
//   </div>

//   <!-- Footer -->
//   <footer class="bg-dark text-white py-5 text-center">
//     <div class="container">
//       <p class="mb-0">&copy; 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES | All Rights Reserved</p>
//       <p>Contact: +91 8247544593 | mallikarjunraochintre@gmail.com</p>
//     </div>
//   </footer>

//   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
//   <script>
//     // Auto-adjust hero height
//     function adjustHero() {
//       const navbar = document.querySelector('.navbar');
//       const hero = document.querySelector('.hero');
//       if (hero && navbar) {
//         hero.style.minHeight = (window.innerHeight - navbar.offsetHeight) + 'px';
//       }
//     }
//     window.addEventListener('load', adjustHero);
//     window.addEventListener('resize', adjustHero);
//   </script>
// </body>
// </html>`;

//       const win = window.open('', '_blank');
//       win.document.write(html);
//       win.document.close();
//       return;
//     }
        // ========== LADAKH 5N/6D – REAL ₹24,500+ PACKAGE ==========
    else if (pkg.title.includes("LADAKH") || pkg.title.includes("LEH")) {

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Ladakh 5N/6D Package ₹24,500+ | DREAM Tours</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"/>
  <style>
    body { font-family: 'Poppins', sans-serif; background: linear-gradient(to bottom, #f0f8ff, #e0f2ff); color: #222; line-height: 1.8; }
    .hero {
      height: 75vh; min2856-height: 580px;
      background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)),
                  url('${pkg.heroImg}') center/cover no-repeat fixed;
      color: white; display: flex; align-items: center; text-align: center;
    }
    .hero h1 { font-size: 4.8rem; font-weight: 900; text-shadow: 0 10px 40px rgba(0,0,0,0.9); }
    .price-table { background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 50px rgba(0,0,0,0.15); }
    .price-table th { background: #2c3e50; color: white; }
    .price-table td { font-weight: 600; font-size: 1.1rem; }
    .deluxe { background: #fff3cd; }
    .super-deluxe { background: #d1f2eb; }
    .itinerary-day {
      background: white; padding: 2rem; border-radius: 18px; margin-bottom: 1.8rem;
      border-left: 8px solid #e74c3c; box-shadow: 0 12px 35px rgba(0,0,0,0.1);
      transition: all 0.4s ease;
    }
    .itinerary-day:hover { transform: translateY(-12px); box-shadow: 0 25px 60px rgba(231,76,60,0.25); }
    .badge-altitude { background: #e74c3c; color: white; padding: 0.6rem 1.2rem; border-radius: 50px; font-size: 1rem; }
    .book-btn {
      background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white;
      padding: 1.2rem 3rem; border-radius: 50px; font-size: 1.3rem; font-weight: 700;
      box-shadow: 0 12px 40px rgba(255,107,107,0.5);
    }
    .book-btn:hover { transform: scale(1.08); }
  </style>
</head>
<body>

  <!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{% url 'home' %}">
                <img src="https://dream-visa-website.vercel.app/assets/logo.png" alt="DREAM Logo" height="50"/>
            
               
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="{% url 'home' %}">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'about' %}">About</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tours</a>
                        <ul class="dropdown-menu" aria-labelledby="toursDropdown">
                            <li><a class="dropdown-item" href="{% url 'luxuary' %}">Luxury</a></li>
                            <li><a class="dropdown-item" href="{% url 'honeymoon' %}">Honeymoon</a></li>
                            <li><a class="dropdown-item" href="{% url 'cultural' %}">Cultural</a></li>
                            <li><a class="dropdown-item" href="{% url 'relax' %}">Relax</a></li>
                            <li><a class="dropdown-item" href="{% url 'adventure' %}">Adventure</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'services' %}">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'clients' %}">Clients</a></li>
               <li class="nav-item w-100 d-lg-none text-center my-3">
                    <a class="nav-link position-relative d-inline-flex align-items-center justify-content-center fw-bold fs-4 text-danger" 
                       href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-3 rounded-pill shadow animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                
                <!-- Desktop version (hidden on mobile) -->
                <li class="nav-item d-none d-lg-block mx-3">
                    <a class="nav-link position-relative d-flex align-items-center fw-bold text-danger" href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-2 rounded-pill animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                    <li class="nav-item">
                        <a href="{% url 'loginform' %}" class="nav-link contact-btn">
                            <span class="btn-text">Start Journey</span>
                            <span class="btn-icon"><i class="fas fa-phone"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="container">
      <h1 class="display-2 fw-bold">MAGICAL LADAKH</h1>
      <p class="lead fs-1">5 Nights / 6 Days • Nubra • Pangong • Khardungla</p>
      <p class="h1 text-warning fw-bold mt-4">Starting from ₹24,500</p>
      <p class="fs-3">Per Person + 5% GST • Valid till Oct 2024</p>
      <span class="badge badge-altitude fs-5 px-4 py-3 mt-3">High Altitude Adventure • Moderate</span>
    </div>
  </header>

  <div class="container py-5">

    <!-- Pricing Table -->
    <div class="price-table my-5">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th>FOR 2 PAX</th>
            <th class="deluxe">DELUXE</th>
            <th class="super-deluxe">SUPER DELUXE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Per Person Cost</strong></td>
            <td class="deluxe">₹34,000 + 5% GST</td>
            <td class="super-deluxe">₹39,000 + 5% GST</td>
          </tr>
          <tr>
            <td><strong>FOR 4 PAX</strong></td>
            <td class="deluxe">₹24,500 + 5% GST</td>
            <td class="super-deluxe">₹29,600 + 5% GST</td>
          </tr>
        </tbody>
      </table>
      <p class="text-center mt-3 fw-bold text-danger">Vehicle: Ertiga / XUV / Xylo / Scorpio / Similar</p>
    </div>

    <!-- Hotel Info -->
    <div class="row text-center mb-5">
      <div class="col-md-6">
        <h4>DELUXE HOTELS</h4>
        <p><strong>Leh:</strong> LaMount / Oriental(Veg) / Similar<br>
           <strong>Nubra:</strong> Organic Boutique / Chamba / Lotus Eco / Similar</p>
      </div>
      <div class="col-md-6">
        <h4>SUPER DELUXE</h4>
        <p><strong>Leh:</strong> T Chong / Maitreya / Leh Plaza / Similar<br>
           <strong>Nubra:</strong> Hunder Sarai / Similar</p>
      </div>
    </div>

    <!-- Itinerary -->
    <h2 class="text-center text-danger fw-bold mb-5">Day-wise Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h4 class="text-primary fw-bold"><i class="fas fa-mountain me-3"></i>DAY ${i+1}</h4>
        <div>${day.replace(/<br>/g, '</div><div class="mt-3">• ')}</div>
      </div>
    `).join('')}

    <!-- Inclusions & Exclusions -->
    <div class="row mt-5">
      <div class="col-lg-6 mb-4">
        <h3 class="text-success text-center"><i class="fas fa-check-square fa-2x"></i><br>Inclusions</h3>
        <ul class="list-unstyled mt-3 fs-5">
          ${pkg.inclusions.map(i => `<li class="my-3"><strong>✓</strong> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-lg-6">
        <h3 class="text-danger text-center"><i class="fas fa-ban fa-2x"></i><br>Exclusions</h3>
        <ul class="list-unstyled mt-3 fs-5">
          ${pkg.exclusions.map(i => `<li class="my-3"><strong>✗</strong> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Important Notes -->
    <div class="alert alert-warning mt-5">
      <h4><i class="fas fa-exclamation-triangle"></i> Important Notes</h4>
      <ul class="mb-0">
        ${pkg.importantNotes.map(n => `<li>${n}</li>`).join('')}
      </ul>
    </div>

    <!-- Payment & Cancellation -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-primary"><i class="fas fa-rupee-sign"></i> Payment Terms</h4>
        <ul>${pkg.paymentTerms.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger"><i class="fas fa-times-circle"></i> Cancellation Policy</h4>
        <ul>${pkg.cancellationPolicy.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
    </div>

    <!-- Final CTA -->
    <div class="text-center py-5 bg-dark text-white rounded-4 my-5">
      <h1 class="fw-bold">Ready for the Journey of a Lifetime?</h1>
      <p class="fs-3">Book Your Ladakh Adventure Today!</p>
      <a href="loginform.html" class="btn book-btn btn-lg px-5 py-4 fs-3">
        <i class="fas fa-snowflake me-3"></i> BOOK NOW FROM ₹24,500
      </a>
    </div>
  </div>

   <footer class="site-footer bg-dark text-white py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h5 class="fw-bold mb-4 text-uppercase">Popular Packages</h5>
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <a href="{% url 'cultural' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Cultural</a>
                    <a href="{% url 'relax' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Relax</a>
                    <a href="{% url 'adventure' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Adventure</a>
                    <a href="{% url 'luxuary' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Luxury</a>
                    <a href="{% url 'honeymoon' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Honeymoon</a>
                </div>
            </div>
            <div class="text-center border-top border-secondary pt-4">
                <p class="mb-0 small">© 2025 MAYYRA INFOTECH. ALL RIGHTS ARE RESERVED.</p>
            </div>
        </div>
    </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 900, once: true });
    function setHeroHeight() {
      const nav = document.querySelector('.navbar');
      const navH = nav ? nav.offsetHeight : 70;
      const hero = document.querySelector('.hero');
      if (hero) hero.style.height = Math.max(window.innerHeight - navH, 320) + 'px';
    }
    window.addEventListener('resize', setHeroHeight);
    document.addEventListener('DOMContentLoaded', setHeroHeight);
    setTimeout(setHeroHeight, 200);
  </script>
</body>
</html>`;

      const win = window.open('', '_blank');
      win.document.write(html);
      win.document.close();
      return;
    }
    // FULL MOON PARTY KOH PHANGAN – PROFESSIONAL LUXURY VERSION
    else if (pkg.title.includes("FULL MOON") || pkg.title.includes("KOH PHANGAN") || pkg.title.includes("PHANGAN")) {

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Full Moon Party Koh Phangan 4N/5D – Starting ₹23,900 | DREAM TOURS</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --gold: #d4af37;
      --dark: #1a1a1a;
      --light: #f8f9fa;
      --accent: #003366;
    }
    body {
      font-family: 'Inter', sans-serif;
      background: #fff;
      color: #333;
      line-height: 1.8;
    }
    h1, h2, h3, h4, h5 { font-family: 'Playfair Display', serif; }
    .hero {
      height: 90vh;
      min-height: 650px;
      background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.7)),
                  url('${pkg.heroImg}') center/cover no-repeat;
      color: white;
      display: flex;
      align-items: center;
      text-align: center;
      position: relative;
    }
    .hero::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(45deg, transparent 30%, rgba(212,175,55,0.1));
    }
    .hero h1 {
      font-size: 4.8rem;
      font-weight: 700;
      letter-spacing: 2px;
    }
    .price-highlight {
      background: linear-gradient(135deg, var(--gold), #f1c40f);
      color: #000;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(212,175,55,0.3);
    }
    .itinerary-card {
      background: white;
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      border-left: 5px solid var(--gold);
      transition: all 0.3s ease;
    }
    .itinerary-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0,0,0,0.15);
    }
    .day-badge {
      background: var(--gold);
      color: #000;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
    }
    .btn-book {
      background: var(--accent);
      color: white;
      padding: 1rem 3rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.2rem;
      box-shadow: 0 10px 30px rgba(0,51,102,0.3);
      transition: all 0.3s ease;
    }
    .btn-book:hover {
      background: #002850;
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0,51,102,0.5);
    }
    .section-title {
      position: relative;
      display: inline-block;
      padding-bottom: 15px;
      margin-bottom: 3rem;
    }
    .section-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: var(--gold);
    }
    @media (max-width: 768px) {
      .hero h1 { font-size: 3rem; }
      .hero { height: 70vh; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{% url 'home' %}">
                <img src="https://dream-visa-website.vercel.app/assets/logo.png" alt="DREAM Logo" height="50"/>
            
               
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="{% url 'home' %}">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'about' %}">About</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tours</a>
                        <ul class="dropdown-menu" aria-labelledby="toursDropdown">
                            <li><a class="dropdown-item" href="{% url 'luxuary' %}">Luxury</a></li>
                            <li><a class="dropdown-item" href="{% url 'honeymoon' %}">Honeymoon</a></li>
                            <li><a class="dropdown-item" href="{% url 'cultural' %}">Cultural</a></li>
                            <li><a class="dropdown-item" href="{% url 'relax' %}">Relax</a></li>
                            <li><a class="dropdown-item" href="{% url 'adventure' %}">Adventure</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'services' %}">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'clients' %}">Clients</a></li>
               <li class="nav-item w-100 d-lg-none text-center my-3">
                    <a class="nav-link position-relative d-inline-flex align-items-center justify-content-center fw-bold fs-4 text-danger" 
                       href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-3 rounded-pill shadow animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                
                <!-- Desktop version (hidden on mobile) -->
                <li class="nav-item d-none d-lg-block mx-3">
                    <a class="nav-link position-relative d-flex align-items-center fw-bold text-danger" href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-2 rounded-pill animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                    <li class="nav-item">
                        <a href="{% url 'loginform' %}" class="nav-link contact-btn">
                            <span class="btn-text">Start Journey</span>
                            <span class="btn-icon"><i class="fas fa-phone"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  <!-- Hero Section -->
  <header class="hero">
    <div class="container position-relative">
      <h1 class="display-1 fw-bold">FULL MOON PARTY</h1>
      <p class="fs-2 mb-3">Koh Phangan • Thailand</p>
      <p class="fs-1 fw-light">4 Nights / 5 Days Exclusive Experience</p>
      <div class="price-highlight d-inline-block mt-4 px-5 py-3">
        <p class="mb-0 fs-3 fw-bold">Starting from ₹23,900 per person</p>
        <small class="fs-6">(Best rate for 10 pax group)</small>
      </div>
    </div>
  </header>

  <div class="container py-5">

    <!-- Hotels -->
    <div class="text-center my-5">
      <h2 class="section-title">Your Selected Hotels</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <h5 class="fw-bold text-gold">Phuket (2 Nights)</h5>
          <p class="fs-5">Ashlee Hub Hotel Patong – Deluxe Room with Breakfast</p>
        </div>
        <div class="col-md-6 mb-4">
          <h5 class="fw-bold text-gold">Koh Samui (2 Nights)</h5>
          <p class="fs-5">OZO Chaweng Samui – Superior Sea Facing Room with Breakfast</p>
        </div>
      </div>
    </div>

    <!-- Pricing Table -->
    <div class="text-center my-5">
      <h2 class="section-title">Package Cost (Per Person)</h2>
      <div class="row g-4 justify-content-center">
        ${Object.entries(pkg.pricing).map(([pax, cost]) => `
          <div class="col-lg-3 col-md-5">
            <div class="bg-light p-4 rounded-4 shadow-sm border">
              <h5 class="fw-bold text-secondary">${pax}</h5>
              <h3 class="text-dark fw-bold">${cost}</h3>
            </div>
          </div>
        `).join('')}
      </div>
      <p class="text-muted mt-3">+ 5% GST + 5% TCS applicable<br><small>(20% TCS if total invoice exceeds ₹7 Lakh)</small></p>
    </div>

    <!-- Itinerary -->
    <h2 class="text-center section-title">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-card">
        <div class="d-flex align-items-center mb-3">
          <div class="day-badge me-4">DAY ${i+1}</div>
          <h4 class="mb-0 fw-bold text-dark">${day.split('<br>')[0]}</h4>
        </div>
        <div class="ms-5 ps-4">
          ${day.split('<br>').slice(1).map(line => line.trim() ? `<p class="mb-2">• ${line.trim()}</p>` : '').join('')}
        </div>
      </div>
    `).join('')}

    <!-- Inclusions & Exclusions -->
    <div class="row mt-5">
      <div class="col-lg-6 mb-5">
        <h3 class="section-title text-success">Inclusions</h3>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-3 fs-5"><i class="fas fa-check text-success me-3"></i>${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-lg-6">
        <h3 class="section-title text-danger">Exclusions</h3>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-3 fs-5"><i class="fas fa-times text-danger me-3"></i>${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Important Notes -->
    <div class="alert alert-info border-start border-primary border-5 p-4">
      <h4 class="fw-bold"><i class="fas fa-info-circle"></i> Important Information</h4>
      <ul class="mb-0">
        ${pkg.importantNotes.map(n => `<li class="mb-2">${n}</li>`).join('')}
        <li>Full Moon Party Entry Fee: 200 THB per person (payable at venue)</li>
      </ul>
    </div>

    <!-- Final CTA -->
    <div class="text-center py-5 bg-light rounded-4 my-5">
      <h2 class="section-title">Secure Your Spot for the World's Biggest Beach Party</h2>
      <p class="fs-4 text-muted mb-4">Limited seats • High demand • Book early!</p>
      <a href="loginform.html" class="btn btn-book btn-lg px-5 py-3">
        <i class="fas fa-paper-plane me-3"></i> REQUEST QUOTE & BOOK NOW
      </a>
    </div>
  </div>

  <!-- Footer -->
  <footer class="site-footer bg-dark text-white py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h5 class="fw-bold mb-4 text-uppercase">Popular Packages</h5>
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <a href="{% url 'cultural' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Cultural</a>
                    <a href="{% url 'relax' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Relax</a>
                    <a href="{% url 'adventure' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Adventure</a>
                    <a href="{% url 'luxuary' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Luxury</a>
                    <a href="{% url 'honeymoon' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Honeymoon</a>
                </div>
            </div>
            <div class="text-center border-top border-secondary pt-4">
                <p class="mb-0 small">© 2025 MAYYRA INFOTECH. ALL RIGHTS ARE RESERVED.</p>
            </div>
        </div>
    </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 900, once: true });
    function setHeroHeight() {
      const nav = document.querySelector('.navbar');
      const navH = nav ? nav.offsetHeight : 70;
      const hero = document.querySelector('.hero');
      if (hero) hero.style.height = Math.max(window.innerHeight - navH, 320) + 'px';
    }
    window.addEventListener('resize', setHeroHeight);
    document.addEventListener('DOMContentLoaded', setHeroHeight);
    setTimeout(setHeroHeight, 200);
  </script>
</body>
</html>`;

      const win = window.open('', '_blank');
      win.document.write(html);
      win.document.close();
      return;
    }
        // ========== UTTARAKHAND 6N/7D – PROFESSIONAL LUXURY VERSION ==========
    else if (pkg.title.includes("UTTARAKHAND") || pkg.title.includes("MUSSOORIE") || pkg.title.includes("NAINITAL") || pkg.title.includes("CORBETT")) {

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Uttarakhand Hill & Wildlife Tour 6N/7D – ₹21,000 | DREAM TOURS</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --gold: #d4af37;
      --dark: #1a1a1a;
      --light: #f8f9fa;
      --accent: #003366;
    }
    body { font-family: 'Inter', sans-serif; background: #fff; color: #333; line-height: 1.8; }
    h1, h2, h3, h4, h5 { font-family: 'Playfair Display', serif; }
    .hero {
      height: 90vh; min-height: 680px;
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.75)),
                  url('${pkg.heroImg}') center/cover no-repeat;
      color: white; display: flex; align-items: center; text-align: center;
    }
    .hero h1 { font-size: 5rem; font-weight: 700; letter-spacing: 2px; }
    .price-box {
      background: linear-gradient(135deg, var(--gold), #f1c40f);
      color: #000; padding: 2.5rem; border-radius: 20px;
      box-shadow: 0 15px 40px rgba(212,175,55,0.3);
    }
    .itinerary-card {
      background: white; border-radius: 16px; padding: 2rem; margin-bottom: 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08); border-left: 5px solid var(--gold);
      transition: all 0.3s ease;
    }
    .itinerary-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
    .day-circle {
      background: var(--gold); color: #000; width: 55px; height: 55px;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-weight: bold; font-size: 1.3rem;
    }
    .btn-enquire {
      background: var(--accent); color: white; padding: 1rem 3rem; border-radius: 50px;
      font-weight: 600; font-size: 1.2rem; box-shadow: 0 10px 30px rgba(0,51,102,0.3);
    }
    .btn-enquire:hover { background: #002850; transform: translateY(-3px); }
    .section-title {
      position: relative; display: inline-block; padding-bottom: 15px; margin-bottom: 3rem;
    }
    .section-title::after {
      content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
      width: 100px; height: 4px; background: var(--gold); border-radius: 2px;
    }
    @media (max-width: 768px) {
      .hero h1 { font-size: 3.2rem; }
      .hero { height: 70vh; }
    }
  </style>
</head>
<body>

  <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{% url 'home' %}">
                <img src="https://dream-visa-website.vercel.app/assets/logo.png" alt="DREAM Logo" height="50"/>
            
               
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="{% url 'home' %}">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'about' %}">About</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tours</a>
                        <ul class="dropdown-menu" aria-labelledby="toursDropdown">
                            <li><a class="dropdown-item" href="{% url 'luxuary' %}">Luxury</a></li>
                            <li><a class="dropdown-item" href="{% url 'honeymoon' %}">Honeymoon</a></li>
                            <li><a class="dropdown-item" href="{% url 'cultural' %}">Cultural</a></li>
                            <li><a class="dropdown-item" href="{% url 'relax' %}">Relax</a></li>
                            <li><a class="dropdown-item" href="{% url 'adventure' %}">Adventure</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'services' %}">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'clients' %}">Clients</a></li>
               <li class="nav-item w-100 d-lg-none text-center my-3">
                    <a class="nav-link position-relative d-inline-flex align-items-center justify-content-center fw-bold fs-4 text-danger" 
                       href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-3 rounded-pill shadow animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                
                <!-- Desktop version (hidden on mobile) -->
                <li class="nav-item d-none d-lg-block mx-3">
                    <a class="nav-link position-relative d-flex align-items-center fw-bold text-danger" href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-2 rounded-pill animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                    <li class="nav-item">
                        <a href="{% url 'loginform' %}" class="nav-link contact-btn">
                            <span class="btn-text">Start Journey</span>
                            <span class="btn-icon"><i class="fas fa-phone"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  <!-- Hero -->
  <header class="hero">
    <div class="container">
      <h1 class="display-1 fw-bold">UTTARAKHAND ESCAPE</h1>
      <p class="fs-2 mb-3">Mussoorie • Jim Corbett • Nainital</p>
      <p class="fs-1 fw-light">6 Nights / 7 Days Premium Hill & Wildlife Tour</p>
      <div class="price-box d-inline-block mt-4 px-5 py-3">
        <p class="mb-0 fs-3 fw-bold">Starting from ₹21,000 per person</p>
        <small class="fs-6">(4 Pax | 3-Star Category)</small>
      </div>
    </div>
  </header>

  <div class="container py-5">

    <!-- Hotels Overview -->
    <div class="text-center my-5">
      <h2 class="section-title">Your Handpicked Hotels</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <h5 class="text-gold fw-bold">Mussoorie (2N)</h5>
          <p>3★: Hotel The Pride / Wild Spring<br>4★: AHR Notting Hills / Green N Breeze</p>
        </div>
        <div class="col-md-4">
          <h5 class="text-gold fw-bold">Corbett (2N)</h5>
          <p>3★: Wanderlust Resort<br>4★: Roar Resort (Imperial)</p>
        </div>
        <div class="col-md-4">
          <h5 class="text-gold fw-bold">Nainital (2N)</h5>
          <p>3★: Cedar Woods / Langdale Manor<br>4★: Cygnett Mountain Breeze</p>
        </div>
      </div>
    </div>

    <!-- Pricing Table -->
    <div class="text-center my-5">
      <h2 class="section-title">Package Cost Per Person</h2>
      <div class="row g-4 justify-content-center">
        <div class="col-lg-3 col-md-5">
          <div class="bg-light p-4 rounded-4 shadow-sm border">
            <h5>2 Pax (3★)</h5><h3 class="text-dark">₹26,000</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-5">
          <div class="bg-light p-4 rounded-4 shadow-sm border">
            <h5>2 Pax (4★)</h5><h3 class="text-dark">₹29,900</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-5">
          <div class="bg-light p-4 rounded-4 shadow-sm border">
            <h5>4 Pax (3★)</h5><h3 class="text-dark">₹21,000</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-5">
          <div class="bg-light p-4 rounded-4 shadow-sm border">
            <h5>4 Pax (4★)</h5><h3 class="text-dark">₹24,900</h3>
          </div>
        </div>
      </div>
      <p class="text-muted mt-3 fs-5">+ 5% GST Extra | Extra Adult/Child rates applicable</p>
    </div>

    <!-- Itinerary -->
    <h2 class="text-center section-title">Day-wise Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-card">
        <div class="d-flex align-items-center mb-3">
          <div class="day-circle me-4">DAY ${i+1}</div>
          <h4 class="mb-0 fw-bold text-dark">${day.split('<br>')[0]}</h4>
        </div>
        <div class="ms-5 ps-4">
          ${day.split('<br>').slice(1).map(line => line.trim() ? `<p class="mb-2">• ${line.trim()}</p>` : '').join('')}
        </div>
      </div>
    `).join('')}

    <!-- Inclusions & Exclusions -->
    <div class="row mt-5">
      <div class="col-lg-6 mb-5">
        <h3 class="section-title text-success">Inclusions</h3>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-3 fs-5"><i class="fas fa-check text-success me-3"></i>${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-lg-6">
        <h3 class="section-title text-danger">Exclusions</h3>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-3 fs-5"><i class="fas fa-times text-danger me-3"></i>${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Important Notes -->
    <div class="alert alert-info border-start border-primary border-5 p-4 mt-5">
      <h4 class="fw-bold"><i class="fas fa-info-circle"></i> Important Information</h4>
      <ul class="mb-0">
        ${pkg.importantNotes.map(n => `<li class="mb-2">${n}</li>`).join('')}
        <li>Jeep Safari in Corbett: ₹6,500–₹8,500 per jeep (book 45 days in advance)</li>
        <li>AC not operational in hill stations (Mussoorie & Nainital)</li>
      </ul>
    </div>

    <!-- Final CTA -->
    <div class="text-center py-5 bg-light rounded-4 my-5">
      <h2 class="section-title">Experience the Best of Uttarakhand</h2>
      <p class="fs-4 text-muted mb-4">Queen of Hills • Tiger Reserve • Lake District</p>
      <a href="loginform.html" class="btn btn-enquire btn-lg px-5 py-3">
        <i class="fas fa-paper-plane me-3"></i> GET BEST DEAL NOW
      </a>
    </div>
  </div>

  <!-- Footer -->
 <footer class="site-footer bg-dark text-white py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h5 class="fw-bold mb-4 text-uppercase">Popular Packages</h5>
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <a href="{% url 'cultural' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Cultural</a>
                    <a href="{% url 'relax' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Relax</a>
                    <a href="{% url 'adventure' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Adventure</a>
                    <a href="{% url 'luxuary' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Luxury</a>
                    <a href="{% url 'honeymoon' %}" class="btn btn-outline-light btn-sm rounded-pill px-4">Honeymoon</a>
                </div>
            </div>
            <div class="text-center border-top border-secondary pt-4">
                <p class="mb-0 small">© 2025 MAYYRA INFOTECH. ALL RIGHTS ARE RESERVED.</p>
            </div>
        </div>
    </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
  <script>
    AOS.init({ duration: 900, once: true });
    function setHeroHeight() {
      const nav = document.querySelector('.navbar');
      const navH = nav ? nav.offsetHeight : 70;
      const hero = document.querySelector('.hero');
      if (hero) hero.style.height = Math.max(window.innerHeight - navH, 320) + 'px';
    }
    window.addEventListener('resize', setHeroHeight);
    document.addEventListener('DOMContentLoaded', setHeroHeight);
    setTimeout(setHeroHeight, 200);
  </script>
</body>
</html>`;

      const win = window.open('', '_blank');
      win.document.write(html);
      win.document.close();
      return;
    }
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${pkg.title} - DREAM Adventure</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body { 
      font-family: 'Roboto', sans-serif; 
      background: #fff5f5; 
    }
    
    /* Navbar */
    .navbar { z-index: 1000; }
    .navbar-toggler { border: 2px solid #e74c3c; }
    .navbar-toggler:focus { 
      box-shadow: 0 0 0 0.25rem rgba(231, 76, 60, 0.25);
      outline: none;
    }
    
    /* Hero Section */
    .hero { 
      position: relative;
      min-height: 420px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url('${pkg.heroImg}') center/cover no-repeat fixed;
      background-attachment: fixed;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(231, 76, 60, 0.15), rgba(0, 0, 0, 0.3));
      z-index: 1;
      pointer-events: none;
    }
    
    .hero .container {
      position: relative;
      z-index: 2;
    }
    
    .hero h1 { 
      font-family: 'Playfair Display', serif; 
      text-shadow: 0 6px 20px rgba(0,0,0,0.6);
      font-size: 3.5rem;
      animation: slideInDown 0.8s ease-out;
    }
    
    .hero .lead { 
      text-shadow: 0 4px 12px rgba(0,0,0,0.5);
      animation: slideInUp 0.8s ease-out 0.2s both;
    }
    
    .hero .h3 { 
      text-shadow: 0 4px 12px rgba(0,0,0,0.5);
      animation: slideInUp 0.8s ease-out 0.4s both;
    }
    
    @keyframes slideInDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Itinerary */
    .itinerary-day { 
      background: white; 
      padding: 1.5rem; 
      border-left: 5px solid #e74c3c; 
      border-radius: 8px; 
      margin-bottom: 1rem; 
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .itinerary-day:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(231, 76, 60, 0.15);
    }
    
    .itinerary-day h5 { color: #e74c3c; }
    
    /* Difficulty Badge */
    .difficulty-badge { 
      display: inline-block; 
      padding: 0.35rem 0.65rem; 
      border-radius: 20px; 
      font-size: 0.8rem; 
      font-weight: bold; 
    }
    .difficulty-hard { background: #f8d7da; color: #721c24; }
    .difficulty-moderate { background: #fff3cd; color: #856404; }
    .difficulty-easy { background: #d4edda; color: #155724; }
    
    /* Buttons */
    .btn-danger { 
      background: #e74c3c; 
      border: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .btn-danger:hover { 
      background: #c0392b; 
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(231, 76, 60, 0.3);
    }
    
    /* Footer */
    footer { background: #343a40; color: #ddd; }
    
    .social-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      color: white;
      transition: all 0.3s ease;
      text-decoration: none;
    }
    .social-icon.instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
    .social-icon.twitter { background: #1da1f2; }
    .social-icon.whatsapp { background: #25d366; }
    .social-icon.facebook { background: #1877f2; }
    .social-icon.linkedin { background: #0a66c2; }
    .social-icon.youtube { background: #ff0000; }
    .social-icon:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 15px rgba(0,0,0,0.3);
    }
    
    .hover-link { transition: color 0.3s ease; }
    .hover-link:hover { color: #e74c3c !important; }
    
    /* Responsive */
    @media (max-width: 768px) {
      .hero { 
        min-height: 300px; 
        background-attachment: scroll;
      }
      .hero h1 { font-size: 2rem; }
      .hero .lead { font-size: 1.1rem; }
      .itinerary-day { padding: 1.2rem; }
    }
    
    @media (max-height: 600px) {
      .hero { min-height: 250px; }
    }
  </style>
</head>
<body>

  <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{% url 'home' %}">
                <img src="https://dream-visa-website.vercel.app/assets/logo.png" alt="DREAM Logo" height="50"/>
            
               
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="{% url 'home' %}">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'about' %}">About</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="toursDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tours</a>
                        <ul class="dropdown-menu" aria-labelledby="toursDropdown">
                            <li><a class="dropdown-item" href="{% url 'luxuary' %}">Luxury</a></li>
                            <li><a class="dropdown-item" href="{% url 'honeymoon' %}">Honeymoon</a></li>
                            <li><a class="dropdown-item" href="{% url 'cultural' %}">Cultural</a></li>
                            <li><a class="dropdown-item" href="{% url 'relax' %}">Relax</a></li>
                            <li><a class="dropdown-item" href="{% url 'adventure' %}">Adventure</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'services' %}">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="{% url 'clients' %}">Clients</a></li>
               <li class="nav-item w-100 d-lg-none text-center my-3">
                    <a class="nav-link position-relative d-inline-flex align-items-center justify-content-center fw-bold fs-4 text-danger" 
                       href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-3 rounded-pill shadow animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                
                <!-- Desktop version (hidden on mobile) -->
                <li class="nav-item d-none d-lg-block mx-3">
                    <a class="nav-link position-relative d-flex align-items-center fw-bold text-danger" href="{% url 'visa' %}">
                        VISA
                        <span class="badge bg-danger text-white ms-2 rounded-pill animate__animated animate__pulse animate__infinite">
                            195 Countries
                        </span>
                    </a>
                </li>
                    <li class="nav-item">
                        <a href="{% url 'loginform' %}" class="nav-link contact-btn">
                            <span class="btn-text">Start Journey</span>
                            <span class="btn-icon"><i class="fas fa-phone"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  <!-- HERO -->
  <header class="hero">
    <div class="container">
      <div>
        <h1 class="display-4 fw-bold">${pkg.title}</h1>
        <p class="lead my-3">
          <span class="difficulty-badge ${difficultyClass}">${pkg.difficulty}</span> • ${pkg.duration}
        </p>
        <p class="h3 text-warning">${pkg.cost}</p>
      </div>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4 text-danger"><i class="fas fa-compass me-2"></i>Adventure Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5><strong>Day ${i+1}:</strong> ${day.split('–')[1] || day}</h5>
      </div>
    `).join('')}

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success"><i class="fas fa-check-circle me-2"></i>Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"><i class="fas fa-arrow-right text-success me-2"></i> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger"><i class="fas fa-times-circle me-2"></i>Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"><i class="fas fa-arrow-right text-danger me-2"></i> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-danger">
        <i class="fas fa-mountain me-2"></i>Book This Adventure
      </a>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="site-footer bg-dark text-white py-5">
    <div class="container">
      <!-- Popular Packages -->
      <div class="text-center mb-5">
        <h5 class="fw-bold mb-4 text-uppercase">Popular Packages</h5>
        <div class="d-flex flex-wrap justify-content-center gap-2">
          <a href="cultural.html" class="btn btn-outline-light btn-sm rounded-pill px-4">Cultural</a>
          <a href="relax.html" class="btn btn-outline-light btn-sm rounded-pill px-4">Relax</a>
          <a href="adventure.html" class="btn btn-outline-light btn-sm rounded-pill px-4">Adventure</a>
          <a href="luxuary.html" class="btn btn-outline-light btn-sm rounded-pill px-4">Luxury</a>
          <a href="honeymoon.html" class="btn btn-outline-light btn-sm rounded-pill px-4">Honeymoon</a>
        </div>
      </div>

      <!-- Company Links -->
      <div class="text-center mb-5">
        <h5 class="fw-bold mb-4 text-uppercase">Company</h5>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <a href="about.html" class="text-white text-decoration-none hover-link">About</a>
          <a href="clients.html" class="text-white text-decoration-none hover-link">Clients</a>
          <a href="services.html" class="text-white text-decoration-none hover-link">Services</a>
          <a href="terms.html" class="text-white text-decoration-none hover-link">Terms & Rules</a>
          <a href="privacy.html" class="text-white text-decoration-none hover-link">Privacy Policy</a>
        </div>
      </div>

      <!-- Social Media -->
      <div class="text-center mb-5">
        <h5 class="fw-bold mb-4 text-uppercase">We Connect Us</h5>
        <div class="d-flex justify-content-center gap-3">
          <a href="#" class="social-icon instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          // <a href="#" class="social-icon twitter" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon whatsapp" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          // <a href="#" class="social-icon facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          // <a href="#" class="social-icon linkedin" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          // <a href="#" class="social-icon youtube" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="text-center mb-5">
        <h5 class="fw-bold mb-4 text-uppercase">We Accept</h5>
        <div class="d-flex justify-content-center align-items-center gap-3">
          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" width="50">
          <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" width="50">
          <img src="https://img.icons8.com/color/48/rupay.png" alt="RuPay" width="50">
          <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" width="50">
        </div>
      </div>

      <!-- Contact Info -->
      <div class="text-center mb-5">
        <h5 class="fw-bold mb-4 text-uppercase">Connect With Us</h5>
        <p class="mb-2">
          <i class="fas fa-map-marker-alt me-2"></i>
          148, Boulevard Mall Lodha Paradise, Majiwada Flyover, Near Eastern Express Highway, Thane, Maharashtra 400609
        </p>
        <p class="mb-2">
          <i class="fas fa-envelope me-2"></i>
          <a href="mailto:tajvisaslots@gmail.com" class="text-white text-decoration-none hover-link">tajvisaslots@gmail.com</a>
        </p>
        <p class="mb-0">
          <i class="fas fa-phone me-2"></i>
          <a href="tel:+919392524832" class="text-white text-decoration-none hover-link">+91 9392524832</a>
        </p>
      </div>

      <!-- Copyright -->
      <div class="text-center border-top border-secondary pt-4">
        <p class="mb-0 small">&copy; 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES. ALL RIGHTS ARE RESERVED.</p>
      </div>
    </div>
  </footer>

  <!-- SCRIPTS: Bootstrap Bundle + Hero Height Adjuster -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"><\/script>
  <script>
    // Fix hero height on load and resize
    function setHeroHeight() {
      const nav = document.querySelector('.navbar');
      const navHeight = nav ? nav.offsetHeight : 70;
      const hero = document.querySelector('.hero');
      if (!hero) return;
      const target = Math.max(window.innerHeight - navHeight, 300);
      hero.style.minHeight = target + 'px';
    }
    
    window.addEventListener('resize', setHeroHeight);
    window.addEventListener('DOMContentLoaded', setHeroHeight);
    setTimeout(setHeroHeight, 200);
  </script>
</body>
</html>`;

    const newWindow = window.open('');
    newWindow.document.write(html);
    newWindow.document.close();
  }
});
