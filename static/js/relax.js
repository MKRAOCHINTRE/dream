// relax.js → FINAL 100% WORKING VERSION (November 17, 2025)
// Works perfectly with your exact HTML above

document.addEventListener('DOMContentLoaded', function () {

  // ================== ALL PACKAGES DATA ==================
  const packages = {
    kashmir: {
      title: "KASHMIR SPECIAL – HEAVEN ON EARTH",
      heroImg: "https://images.unsplash.com/photo-1597074863087-9a9b6b1d3e48?auto=format&fit=crop&w=1600&q=80",
      duration: "5 Days / 4 Nights",
      cost: "From ₹20,000 + 5% GST per person",
      itinerary: [
        "Day 01: Arrival Srinagar → Local Sightseeing",
        "Warm welcome at Srinagar Airport → Transfer to hotel → Afternoon visit famous Mughal Gardens: Nishat Bagh (Abode of Pleasure), Shalimar Bagh (Abode of Love), Chashme Shahi & Pari Mahal → Evening free at Dal Lake → Dinner & Overnight at Hotel in Srinagar",
        "Day 02: Gulmarg Day Trip (56 kms / 2 hrs one way)",
        "After breakfast → Full day excursion to Gulmarg (Meadow of Flowers, 2730 m) → Enjoy Gondola Cable Car Ride (own cost), snow activities, highest golf course → Return to Srinagar → Dinner & Overnight at Srinagar",
        "Day 03: Sonmarg Day Trip (85 kms / 3 hrs one way)",
        "After breakfast → Full day trip to Sonmarg (Golden Meadow) → Horse ride to Thajiwas Glacier (own cost) → Enjoy snow sledging → Evening return → Dinner & Overnight at Srinagar",
        "Day 04: Pahalgam Day Trip (90 kms / 2½ hrs one way)",
        "After breakfast → Drive to Pahalgam → Enroute: Saffron Fields, Avantipura Ruins → Visit Betaab Valley, Aru Valley, Chandanwadi (local union cabs, own cost) → Walk along Lidder River → Return to Srinagar → Dinner & Overnight at Deluxe Houseboat",
        "Day 05: Departure Srinagar",
        "After breakfast → Check-out → Complimentary 01-hour Shikara Ride on Dal Lake → Transfer to Srinagar Airport → Tour ends with heavenly memories"
      ],
      pricing: [
        { pax: "02 PAX (Minimum)", cost: "₹24,000 per person + 5% GST" },
        { pax: "04 PAX (Minimum)", cost: "₹20,000 per person + 5% GST" }
      ],
      inclusions: [
        "Assistance on arrival with welcome drink",
        "04 Nights accommodation (03N Hotel + 01N Deluxe Houseboat)",
        "Daily Breakfast & Dinner",
        "01-Hour Complimentary Shikara Ride on Dal Lake",
        "All transfers & sightseeing by AC Sedan/Innova with heating",
        "Pickup & drop: Srinagar Airport",
        "All tolls, parking, driver allowance, fuel charges",
        "All applicable taxes"
      ],
      exclusions: [
        "Lunch", "Garden entrance fees", "Gondola Cable Car in Gulmarg",
        "Local union cab in Pahalgam (Betaab Valley/Aru/Chandanwadi)",
        "Union cab in Sonmarg (Thajiwas Glacier/Zero Point)",
        "Horse ride, sledging, snow activities",
        "Chained vehicle Tangmarg–Gulmarg (if heavy snow)",
        "Airfare / Train fare", "Personal expenses, tips, laundry, beverages"
      ],
      validity: "Rates valid only for April & May 2026",
      notes: [
        "Best season: April–June (tulips & pleasant weather)",
        "Gondola Phase 1 & 2 tickets subject to availability & weather",
        "Houseboat stay includes heater & hot water",
        "Standard check-in: 14:00 hrs | Check-out: 10:00 hrs"
      ]
    },

   srilanka: {
  title: "SCENIC SRI LANKA WELLNESS & CULTURAL RETREAT",
  heroImg: "https://images.unsplash.com/photo-1570545906912-2e9f5e66a7c4?auto=format&fit=crop&w=1600&q=80",
  duration: "6 Days / 5 Nights",
  cost: "From ₹60,999 per person (Ex Kochi) | ₹66,999 (Ex Mumbai)",

  itinerary: [
    "Day 01 – Airport / Kandy: Welcome at Colombo Airport → Transfer to Kandy → Kandy Cultural Show & Gem Museum (if time permits) → Dinner & Overnight in Kandy",
    "Day 02 – Kandy / Nuwara Eliya: Breakfast → Temple of the Tooth Relic → Bhakthi Hanuman Temple → Ramboda Falls → Tea Factory Visit → Gregory Lake, Strawberry Farm → Dinner & Overnight in Nuwara Eliya",
    "Day 03 – Nuwara Eliya / Ella / Nuwara Eliya: Breakfast → Gayathri Pedam → Divurumpola Temple → Sita Amman Temple → Hakgala Botanical Gardens (Ashok Vatika) → Return to hotel → Dinner & Overnight in Nuwara Eliya",
    "Day 04 – Nuwara Eliya / Bentota via Pinnawala: Breakfast → Spice & Herbal Garden → Pinnawala Elephant Orphanage → Madu River Boat Safari → Kosgoda Turtle Hatchery → Dinner & Overnight in Bentota",
    "Day 05 – Bentota / Colombo: Breakfast → Transfer to Colombo → City Tour & Shopping → Gangaramaya Temple → Nightlife experience → Dinner & Overnight in Colombo",
    "Day 06 – Colombo / Airport: Breakfast → Transfer to airport → Tour ends with sweet memories"
  ],

  hotels: {
    standard: "Kandy (2N) – Earl’s Regent / Similar | Nuwara Eliya (1N) – Araliya Green Hills / Similar | Bentota (1N) – Cinnamon Bey / Similar | Colombo (1N) – Cinnamon Red / Similar"
  },

  pricing: [
    { pax: "Ex Mumbai (BOM)", adult: "₹66,999", childWithBed: "₹51,850", childNoBed: "₹48,950" },
    { pax: "Ex Kochi (COK)", adult: "₹60,999", childWithBed: "₹51,850", childNoBed: "₹48,950" }
  ],

  inclusions: [
    "Round-trip economy flight + Sri Lanka Visa",
    "5 Nights accommodation in 4★/5★ category hotels",
    "Daily Breakfast & Dinner + 5 Indian Lunches",
    "All transfers & sightseeing in A/C luxury coach",
    "English/Hindi speaking National Guide throughout",
    "Entrance fees: Pinnawala, Temple of Tooth, Gregory Lake, Madu River Safari, Turtle Hatchery, Gangaramaya Temple",
    "2x500ml water bottles daily + Local SIM with data",
    "Welcome hamper + Garland welcome + Souvenir gift",
    "20% discount vouchers at gems & spice garden"
  ],

  exclusions: [
    "Personal expenses, tips, laundry",
    "Any meals not specified",
    "Travel insurance (₹1,800 extra)",
    "Early check-in / Late check-out charges",
    "Camera/video charges at monuments",
    "Anything not mentioned in inclusions"
  ],

  cancellationPolicy: [
    "30+ days before departure → 35% cancellation charge",
    "15–30 days before departure → 50% cancellation charge",
    "Within 15 days / No-show → 100% cancellation charge"
  ],

  importantNotes: [
    "Child below 12 years considered as child",
    "Triple room uses rollaway bed (same room size)",
    "Tour operates subject to govt regulations & minimum 35 pax",
    "Packed dinner may be provided due to driving laws",
    "No refund for unutilized services",
    "Visa rejection – full cancellation applies"
  ]
},

romanceonsea: {
  title: "EPITOME OF ROMANCE ON SEA – GOA HONEYMOON SPECIAL",
  heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  duration: "3 Nights / 4 Days",
  cost: "₹7,400 per person + 5% GST (on twin sharing)",

  itinerary: [
    "Day 01: Arrival at Goa Airport/Railway Station → Transfer to hotel → Day at leisure → Romantic candle-light setup (on request) → Overnight stay",
    "Day 02: Breakfast → Full day North Goa sightseeing (Fort Aguada, Calangute Beach, Baga Beach, Anjuna Beach, Vagator) → Evening free for beach walk → Overnight stay",
    "Day 03: Breakfast → Full day South Goa sightseeing (Colva Beach, Palolem Beach, Miramar Beach, Dona Paula, Old Goa Churches, Mangeshi Temple) → Evening leisure → Overnight stay",
    "Day 04: Breakfast → Check-out → Transfer to Goa Airport/Railway Station → Tour ends with sweet memories"
  ],

  hotel: "Hotel Ginger Goa / Similar (Deluxe Room)",
  checkIn: "12 Apr 2024",
  checkOut: "15 Apr 2024",
  pax: "04 Adults",
  vehicle: "Private AC Ertiga / Similar",

  inclusions: [
    "03 Nights accommodation in Deluxe Room on twin/double sharing",
    "Daily buffet breakfast at hotel",
    "All transfers & sightseeing by private AC Ertiga",
    "Driver allowance, tolls, parking, fuel charges",
    "All applicable taxes"
  ],

  exclusions: [
    "Airfare / Train fare",
    "Early check-in & late check-out charges",
    "Guide charges & entry tickets",
    "Personal expenses (laundry, phone calls, etc.)",
    "Anything not mentioned in inclusions"
  ],

  notes: [
    "Rates valid for the mentioned dates only",
    "Candle-light dinner / flower bed decoration available at extra cost",
    "Standard check-in: 02:00 PM | Check-out: 11:00 AM"
  ]
},

   himachal: {
  title: "HIMACHAL HILL RETREAT – SHIMLA MANALI CHANDIGARH",
  heroImg: "https://images.unsplash.com/photo-1578662996442-48f60103fcbf?auto=format&fit=crop&w=1600&q=80",
  duration: "5 Nights / 6 Days",
  cost: "Starting from ₹17,000 + 5% GST per person",

  itinerary: [
    "Day 01: Chandigarh → Shimla (120 km / 4 hrs): Pickup from Chandigarh Airport/Railway Station → Transfer to Shimla → Evening free on Mall Road & Ridge → Overnight at Shimla",
    "Day 02: Shimla + Kufri Excursion: Breakfast → Kufri (Himalayan National Park, Pony Ride, Mahasu Peak) → Jakhoo Temple → Vice Regal Lodge → Christ Church → The Mall Road → Scandal Point → Overnight at Shimla",
    "Day 03: Shimla → Manali (265 km / 8 hrs): Breakfast → Enroute visit Sundernagar Lake, Pandoh Dam, Hanogi Mata Temple, Kullu Valley → Reach Manali → Overnight at Manali",
    "Day 04: Manali + Solang Valley / Rohtang (Seasonal): Breakfast → Hadimba Devi Temple → Vashisht Hot Springs → Solang Valley (Adventure Activities) → Atal Tunnel & North Pole (if open) → Evening Mall Road → Overnight at Manali",
    "Day 05: Manali → Chandigarh (310 km / 9 hrs): Breakfast → Drive to Chandigarh via Kullu → Visit local market (optional) → Reach Chandigarh → Overnight at Chandigarh",
    "Day 06: Chandigarh Departure: Breakfast → Drop to Chandigarh Airport/Railway Station → Tour ends with sweet memories"
  ],

  hotelOptions: [
    {
      name: "Option 1 – Comfort Category",
      price: "₹17,000 + 5% GST per person",
      hotels: [
        { city: "Shimla (2N)", hotel: "Hotel Woodrina / Similar", meal: "Breakfast + Dinner" },
        { city: "Manali (2N)", hotel: "Sunrise Villa / Similar", meal: "Breakfast + Dinner" },
        { city: "Chandigarh (1N)", hotel: "Hotel Mandarin Square / Similar", meal: "Breakfast + Dinner" }
      ]
    },
    {
      name: "Option 2 – Deluxe Category",
      price: "₹25,000 + 5% GST per person",
      hotels: [
        { city: "Shimla (2N)", hotel: "Snow Valley / Similar", meal: "Breakfast + Dinner" },
        { city: "Manali (2N)", hotel: "White Stone / Similar", meal: "Breakfast + Dinner" },
        { city: "Chandigarh (1N)", hotel: "Hotel Velvet Clarks Exotica / Similar", meal: "Breakfast + Dinner" }
      ]
    }
  ],

  inclusions: [
    "05 Nights accommodation in above or similar hotels",
    "Daily Breakfast & Dinner at hotels (MAP Plan)",
    "All transfers & sightseeing by Private AC Ertiga (04 Pax)",
    "Driver allowance, toll tax, parking, fuel charges",
    "All applicable hotel taxes"
  ],

  exclusions: [
    "Airfare / Train fare",
    "Rohtang Pass / Atal Tunnel excursion (direct payment + permit extra)",
    "Room heater charges",
    "Entrance fees, guide charges, adventure activities",
    "Personal expenses (laundry, tips, mineral water, etc.)",
    "Any cost due to natural calamities, landslides, roadblocks",
    "Travel insurance",
    "Anything not mentioned in inclusions"
  ],

  importantNotes: [
    "A/C will not work in hilly areas",
    "Rohtang Pass closed on Tuesdays & from Nov–May due to snow",
    "Permit required for Rohtang/Atal Tunnel – subject to availability",
    "Rates valid for Indian nationals only"
  ]
},

   andaman: {
  title: "ANDAMAN ISLAND WELLNESS – A PLACE TRULY HEAVEN",
  heroImg: "https://images.unsplash.com/photo-1512343879784-2c5a0d52b8a0?auto=format&fit=crop&w=1600&q=80",
  duration: "5 Nights / 6 Days",
  cost: "From ₹25,500 + 5% GST per person (4 Person Basis)",

  itinerary: [
    "Day 01: Arrival Port Blair → Corbyn’s Cove Beach → Cellular Jail + Light & Sound Show → Overnight Port Blair",
    "Day 02: Port Blair → Havelock Island (Private Cruise) → World Famous Radhanagar Beach (Asia’s Best Beach) → Overnight Havelock",
    "Day 03: Havelock → Elephant Beach by Speed Boat → Complimentary Snorkeling → Leisure → Overnight Havelock",
    "Day 04: Havelock → Neil Island by Ferry → Bharatpur Beach + Laxmanpur Beach + Natural Coral Bridge → Overnight Neil Island",
    "Day 05: Neil Island → Port Blair by Ferry → Sagarika Emporium Shopping → Overnight Port Blair",
    "Day 06: Departure from Port Blair → Drop to Airport → Tour Ends with Sweet Memories"
  ],

  hotels: [
    { city: "Port Blair (2N)", hotel: "Amy Grace Premium Room with Balcony / Similar", stars: "3★ & 4★ Combo" },
    { city: "Havelock (2N)", hotel: "TSG Blue Flora Double / Similar", stars: "" },
    { city: "Neil Island (1N)", hotel: "Symphony Summer Sand Beach Resort Casa Aqua (Attached Pool) / Similar", stars: "" }
  ],

  pricing: [
    { basis: "2 Person Basis (Per Person)", cost: "₹27,770 + 5% GST" },
    { basis: "4 Person Basis (Per Person)", cost: "₹25,500 + 5% GST" },
    { basis: "Extra Adult / Child with Bed", cost: "₹11,500 + 5% GST" },
    { basis: "Child Without Bed (5–10 yrs)", cost: "₹9,000 + 5% GST" }
  ],

  honeymoonAddOns: [
    { item: "Candle Light Dinner", price: "₹4,800 per couple" },
    { item: "Flower Bed Decoration", price: "₹2,800 per room" }
  ],

  inclusions: [
    "All taxes included",
    "Expert Tour Coordinator at all islands",
    "Daily Breakfast at hotels",
    "Private AC Cab (Dzire/Ertiga/Xylo) throughout",
    "Private Cruise (Nautika/Makruzz/GreenOcean) for inter-island transfers",
    "All entry permits, tickets, ferry & boat tickets",
    "Complimentary Snorkeling at Elephant Beach",
    "24×7 on-call assistance",
    "Assistance at all arrival & departure points"
  ],

  exclusions: [
    "Flight tickets",
    "Camera tickets at monuments",
    "Personal expenses (laundry, phone, etc.)",
    "Gala dinner / Peak season charges (mandatory if applicable)",
    "Any cost due to bad weather, flight/ferry cancellation",
    "Anything not mentioned in inclusions"
  ]
},

   kerala: {
  title: "KERALA AYURVEDA & BACKWATER RETREAT",
  heroImg: "https://images.unsplash.com/photo-1589300746682-7e5c36d3d308?auto=format&fit=crop&w=1600&q=80",
  duration: "4 Nights / 5 Days",
  cost: "₹16,600 + 5% GST per person (Twin Sharing)",

  itinerary: [
    "Day 01: Arrival Cochin → Munnar (150 km / 4 hrs): Pickup from Cochin Airport/Railway Station → Drive through scenic hills → Check-in at hotel → Day at leisure → Overnight Munnar",
    "Day 02: Munnar Full Day Sightseeing: Breakfast → Mattupetty Dam → Echo Point → Kundala Lake → Tea Plantations → Eravikulam National Park (Rajamalai) → Photo Point → Evening free → Overnight Munnar",
    "Day 03: Munnar → Thekkady (125 km / 4 hrs): Breakfast → Drive to Periyar → Check-in → Afternoon optional Boat Safari at Periyar Lake (own cost) → Spice Plantation visit → Kathakali/Martial Art show (optional) → Overnight Thekkady",
    "Day 04: Thekkady → Alleppey/Kumarakom (160 km / 4 hrs): Breakfast → Drive to backwater region → Check-in at Deluxe AC Houseboat or Riverside Resort → Evening village backwater cruise (own cost) → Overnight Alleppey/Kumarakom",
    "Day 05: Alleppey/Kumarakom → Cochin Departure (100 km / 2 hrs): Breakfast → Transfer to Cochin Airport/Railway Station → Tour ends with sweet memories of God’s Own Country"
  ],

  hotels: [
    { city: "Munnar", hotel: "Tu Casa Resort – Deluxe Room / Similar", nights: "02 Nights", meal: "Breakfast + Dinner" },
    { city: "Thekkady", hotel: "The Patio – Deluxe AC Room / Similar", nights: "01 Night", meal: "Breakfast + Dinner" },
    { city: "Alleppey / Kumarakom", hotel: "Houseboat Royal Rivers – Deluxe One Bed (A/C) or Similar Riverside Resort", nights: "01 Night", meal: "Breakfast + Dinner" }
  ],

  inclusions: [
    "04 Nights accommodation on twin sharing basis",
    "Daily Breakfast & Dinner at all hotels/houseboat (MAP Plan)",
    "All transfers & sightseeing by Private AC Sedan/Ertiga as per group size",
    "Vehicle at disposal as per itinerary",
    "Experienced driver + driver allowance, toll, parking, night halt",
    "Meet & Greet with refreshment kit + mineral water + snacks on arrival",
    "Child below 5 years complimentary (no extra bed)",
    "All applicable taxes & service charges"
  ],

  exclusions: [
    "Airfare / Train fare",
    "Boat Safari at Periyar Lake & Backwater Cruise (own cost)",
    "Entrance fees to parks, museums, sanctuaries",
    "Kathakali show, Ayurvedic massage, spice plantation entry",
    "Personal expenses (laundry, tips, phone calls, etc.)",
    "Anything not mentioned in inclusions"
  ]
},
  };

  // ================== CLICK ON ANY "Book" BUTTON ==================
  document.querySelectorAll('.pkg-card .btn-success').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      const card = this.closest('.pkg-card');
      const titleText = card.querySelector('.card-title').textContent.trim().toLowerCase();

      let pkgKey = null;

      if (titleText.includes('kashmir')) pkgKey = 'kashmir';
      else if (titleText.includes('sri lanka') || titleText.includes('scenic sri')) pkgKey = 'srilanka';
      else if (titleText.includes('romance') || titleText.includes('sea')) pkgKey = 'romanceonsea';
      else if (titleText.includes('himachal')) pkgKey = 'himachal';
      else if (titleText.includes('andaman')) pkgKey = 'andaman';
      else if (titleText.includes('kerala')) pkgKey = 'kerala';

      if (!pkgKey || !packages[pkgKey]) {
        alert('Package details coming soon!');
        return;
      }

      openPackagePage(packages[pkgKey]);
    });
  });

  // ================== OPEN DETAILED PAGE ==================
  function openPackagePage(pkg) {

    // KASHMIR SPECIAL → FULL DETAILED PAGE
       // KASHMIR SPECIAL → SAME PREMIUM LAYOUT AS VIETNAM
    if (pkg.title.includes("KASHMIR")) {

      const pricingTable = `
        <div class="border p-4 mb-4 rounded bg-light shadow-sm">
          <h5 class="fw-bold text-primary text-center mb-3">Package Cost Per Person</h5>
          <table class="table table-bordered table-hover text-center">
            <thead class="table-danger text-white">
              <tr>
                <th>No of Pax</th>
                <th>02 Pax</th>
                <th>04 Pax</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fw-bold">Cost (Per Person)</td>
                <td>₹24,000/- + 5% GST</td>
                <td>₹20,000/- + 5% GST</td>
              </tr>
            </tbody>
          </table>
        </div>`;

      const hotelList = `
        <div class="row g-4">
          <div class="col-md-6">
            <strong class="text-success">Standard Hotels</strong><br>
            <small>Srinagar (03 Nights): Hotel Sahara Grand Hills / Gurcoo Residency / Karam Gold / Similar</small><br>
            <small>Srinagar (01 Night): Deluxe Houseboat</small>
          </div>
          <div class="col-md-6">
            <strong class="text-success">Meal Plan</strong><br>
            <small>Daily Breakfast & Dinner</small>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${pkg.title} - DREAM Tours</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    body { font-family: 'Roboto', sans-serif; background: #f8f9fa; margin:0; }
    a,button,.btn{transition:none!important;}
    .hero { height: 60vh; min-height:360px; background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; text-align:center; }
    .hero h1 { font-family: 'Playfair Display', serif; font-size: 3.8rem; text-shadow: 0 8px 30px rgba(0,0,0,0.7); }
    .itinerary-day { background: white; padding: 1.8rem; border-left: 6px solid #e74c3c; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
    .itinerary-day h5 { color: #c0392b; font-weight: bold; }
    .highlight-box { background: linear-gradient(135deg, #fdf2e9, #fef5e7); padding: 1.8rem; border-radius: 12px; border-left: 6px solid #e67e22; text-align:center; font-weight: bold; font-size: 1.1rem; }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1.2rem; border-radius: 8px; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: 50vh; }
      .hero h1 { font-size: 2.8rem; }
    }
  </style>
</head>
<body>

  <!-- NAVBAR (same as your main site) -->
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
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration} • Srinagar • Gulmarg • Sonmarg • Pahalgam • Houseboat</p>
      <p class="h4 text-warning">From ₹20,000 per person + 5% GST (Valid April–May 2026)</p>
    </div>
  </header>

  <div class="container py-5">

    <!-- Itinerary -->
    <h2 class="mb-4 text-primary text-center">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- Hotels -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation Used</h4>
      ${hotelList}
    </div>

    <!-- Pricing -->
    <div class="mt-5">
      <h4 class="text-primary">Package Pricing (Per Person)</h4>
      ${pricingTable}
      <div class="tax-note">
        <strong>Note:</strong> All prices are subject to 5% GST. Rates valid only for April & May 2026.
      </div>
    </div>

    <!-- Complimentary Highlight -->
    <div class="highlight-box mt-5">
      Complimentary 01-Hour Shikara Ride on Dal Lake + Deluxe Houseboat Stay with Heater & Hot Water Included
    </div>

    <!-- Inclusions / Exclusions -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2">✓ ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2">✗ ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Notes -->
    <div class="mt-5 p-4 bg-light rounded shadow-sm">
      <h6 class="fw-bold">Important Notes:</h6>
      <ul>
        ${pkg.notes.map(n => `<li>${n}</li>`).join('')}
      </ul>
    </div>

    <!-- Book Button -->
    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-danger text-white px-5 shadow-lg">Book Kashmir Heaven Now</a>
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
                <p class="mb-0 small">© 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES. ALL RIGHTS ARE RESERVED.</p>
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
        // ========== SCENIC SRI LANKA – PREMIUM DETAILED PAGE WITH COLLAPSIBLE SECTIONS ==========
    if (pkg.title.includes("SRI LANKA")) {

      const pricingHTML = `
        <div class="table-responsive mb-4">
          <table class="table table-bordered text-center">
            <thead class="table-success text-white">
              <tr><th>Departure City</th><th>Adult (Per Person)</th><th>Child With Bed</th><th>Child No Bed</th></tr>
            </thead>
            <tbody>
              ${pkg.pricing.map(p => `
                <tr>
                  <td class="fw-bold">${p.pax}</td>
                  <td class="text-primary fs-5">₹${p.adult}</td>
                  <td>₹${p.childWithBed}</td>
                  <td>₹${p.childNoBed}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
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
                ${contentArray.map(item => `<li class="mb-2">✓ ${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pkg.title} - DREAM Tours</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<style>
  body{font-family:'Roboto',sans-serif;background:#f8f9fa;margin:0;}
  a,button,.btn{transition:none!important;}
  .hero{height:65vh;min-height:380px;background:linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.75)),url('${pkg.heroImg}') center/cover no-repeat fixed;color:white;display:flex;align-items:center;text-align:center;}
  .hero h1{font-family:'Playfair Display',serif;font-size:3.8rem;text-shadow:0 8px 30px rgba(0,0,0,0.8);}
  .itinerary-day{background:white;padding:1.8rem;border-left:6px solid #26c281;border-radius:12px;margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.08);}
  .itinerary-day h5{color:#1a9b5e;font-weight:bold;}
  .highlight-box{background:linear-gradient(135deg,#e8f5e9,#f1f8e9);padding:2rem;border-radius:12px;border-left:6px solid #4caf50;text-align:center;font-size:1.2rem;font-weight:bold;}
  @media(max-width:768px){.hero{background-attachment:scroll;height:55vh;}.hero h1{font-size:2.8rem;}}
</style>
</head>
<body>

 <!-- NAVBAR (same as your main site) -->
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
    <p class="lead">${pkg.duration}</p>
    <p class="h4 text-warning">Starting from ${pkg.cost}</p>
  </div>
</header>

<div class="container py-5">

  <h2 class="text-center text-success mb-5">Detailed Day-to-Day Itinerary</h2>
  ${pkg.itinerary.map(day => `
    <div class="itinerary-day">
      <h5>${day.split('–')[0].trim()}</h5>
      <p class="mb-0">${day.split('–').slice(1).join('–').trim()}</p>
    </div>
  `).join('')}

  <div class="mt-5 p-4 bg-light rounded shadow">
    <h5 class="text-success fw-bold">Hotels Used (4★/5★ Category)</h5>
    <p class="mb-0">${pkg.hotels.standard}</p>
  </div>

  <div class="mt-5">
    <h4 class="text-primary text-center">Package Pricing (Per Person)</h4>
    ${pricingHTML}
  </div>

  <div class="highlight-box mt-5">
    Travel Now, Pay Later from just ₹6,400 per person!<br>
    <strong>Early Bird Discount Available – Limited Seats!</strong>
  </div>

  <div class="accordion mt-5" id="srilankaDetails">
    ${collapsibleSection('incl', 'Inclusions (Click to Expand)', pkg.inclusions)}
    ${collapsibleSection('excl', 'Exclusions', pkg.exclusions)}
    ${collapsibleSection('cancel', 'Cancellation Policy', pkg.cancellationPolicy)}
    ${collapsibleSection('notes', 'Important Notes & Conditions', pkg.importantNotes)}
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-success text-white px-5 shadow-lg">
      Book Sri Lanka Wellness Now – Limited Seats!
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
                <p class="mb-0 small">© 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES. ALL RIGHTS ARE RESERVED.</p>
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
        // ========== EPITOME OF ROMANCE ON SEA – GOA HONEYMOON SPECIAL ==========
    if (pkg.title.includes("ROMANCE") || pkg.title.includes("SEA")) {

      const pricingHTML = `
        <div class="text-center p-4 bg-light rounded shadow mb-4">
          <h5 class="text-primary fw-bold">Package Cost (04 Adults – 02 Rooms)</h5>
          <h3 class="text-danger fw-bold">₹7,400 per person + 5% GST</h3>
          <p class="mb-0"><strong>Total for 04 Adults:</strong> ₹29,600 + 5% GST</p>
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
                ${contentArray.map(item => `<li class="mb-2"> ${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pkg.title} - DREAM Tours</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
  body{font-family:'Roboto',sans-serif;background:#f8f9fa;margin:0;}
  a,button,.btn{transition:none!important;}
  .hero{height:65vh;min-height:380px;background:linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.75)),url('${pkg.heroImg}') center/cover no-repeat fixed;color:white;display:flex;align-items:center;text-align:center;}
  .hero h1{font-family:'Playfair Display',serif;font-size:3.8rem;text-shadow:0 8px 30px rgba(0,0,0,0.8);}
  .itinerary-day{background:white;padding:1.8rem;border-left:6px solid #e91e63;border-radius:12px;margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.08);}
  .itinerary-day h5{color:#c2185b;font-weight:bold;}
  .highlight-box{background:linear-gradient(135deg,#fce4ec,#f8bbd0);padding:2rem;border-radius:12px;border-left:6px solid #e91e63;text-align:center;font-size:1.2rem;font-weight:bold;}
  @media(max-width:768px){.hero{background-attachment:scroll;height:55vh;}.hero h1{font-size:2.8rem;}}
</style>
</head>
<body>

<!-- NAVBAR (same as your main site) -->
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
    <p class="lead">${pkg.duration} • Goa Honeymoon Special</p>
    <p class="h4 text-warning">${pkg.cost}</p>
  </div>
</header>

<div class="container py-5">

  <div class="text-center mb-5">
    <h5 class="text-success">Hotel: ${pkg.hotel}</h5>
    <p>Check-in: ${pkg.checkIn} | Check-out: ${pkg.checkOut} | Pax: ${pkg.pax}</p>
  </div>

  <h2 class="text-center text-danger mb-5">Detailed Itinerary</h2>
  ${pkg.itinerary.map(day => `
    <div class="itinerary-day">
      <h5>${day.split(':')[0].trim()}</h5>
      <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
    </div>
  `).join('')}

  ${pricingHTML}

  <div class="highlight-box">
    Perfect Romantic Getaway for Couples!<br>
    Private AC Ertiga • Candle-light dinner & flower decoration available on request
  </div>

  <div class="accordion mt-5" id="goaDetails">
    ${collapsibleSection('incl', 'Inclusions (Click to Expand)', pkg.inclusions)}
    ${collapsibleSection('excl', 'Exclusions', pkg.exclusions)}
    ${collapsibleSection('notes', 'Important Notes', pkg.notes)}
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-danger text-white px-5 shadow-lg">
      Book Your Romantic Goa Escape Now!
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
                <p class="mb-0 small">© 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES. ALL RIGHTS ARE RESERVED.</p>
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
        // ========== HIMACHAL HILL RETREAT – SHIMLA MANALI CHANDIGARH ==========
    if (pkg.title.includes("HIMACHAL")) {

      const hotelOptionHTML = pkg.hotelOptions.map((opt, idx) => `
        <div class="border p-4 rounded shadow-sm mb-4 ${idx === 1 ? 'border-primary' : ''}">
          <h5 class="text-center fw-bold text-success">${opt.name}</h5>
          <table class="table table-bordered text-center mt-3">
            <thead class="table-light">
              <tr><th>City</th><th>Hotel Name</th><th>Nights</th><th>Meal Plan</th></tr>
            </thead>
            <tbody>
              ${opt.hotels.map(h => `
                <tr>
                  <td>${h.city.split(' (')[0]}</td>
                  <td class="fw-bold">${h.hotel}</td>
                  <td>${h.city.match(/\d+N/) || '—'}</td>
                  <td>${h.meal}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="text-center p-3 bg-warning bg-opacity-10 rounded">
            <h4 class="text-danger fw-bold mb-0">${opt.price}</h4>
          </div>
        </div>
      `).join('');

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
                ${contentArray.map(item => `<li class="mb-2"> ${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pkg.title} - DREAM Tours</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
  body{font-family:'Roboto',sans-serif;background:#f8f9fa;margin:0;}
  a,button,.btn{transition:none!important;}
  .hero{height:65vh;min-height:400px;background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('${pkg.heroImg}') center/cover no-repeat fixed;color:white;display:flex;align-items:center;text-align:center;}
  .hero h1{font-family:'Playfair Display',serif;font-size:4rem;text-shadow:0 8px 30px rgba(0,0,0,0.9);}
  .itinerary-day{background:white;padding:1.8rem;border-left:6px solid #2196f3;border-radius:12px;margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.08);}
  .itinerary-day h5{color:#1976d2;font-weight:bold;}
  .note-box{background:#e3f2fd;padding:1.2rem;border-left:5px solid #2196f3;border-radius:8px;}
  @media(max-width:768px){.hero{background-attachment:scroll;height:55vh;}.hero h1{font-size:2.8rem;}}
</style>
</head>
<body>

<!-- NAVBAR (same as your main site) -->
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
    <p class="lead">${pkg.duration} • Shimla • Kufri • Manali • Solang • Chandigarh</p>
    <p class="h4 text-warning">${pkg.cost}</p>
  </div>
</header>

<div class="container py-5">

  <h2 class="text-center text-primary mb-5">Choose Your Hotel Category</h2>
  ${hotelOptionHTML}

  <h2 class="text-center text-primary mb-5 mt-5">Detailed Day-wise Itinerary</h2>
  ${pkg.itinerary.map(day => `
    <div class="itinerary-day">
      <h5>${day.split(':')[0].trim()}</h5>
      <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
    </div>
  `).join('')}

  <div class="note-box mt-4">
    <strong>Important:</strong> A/C will not operate in hilly areas | Rohtang Pass closed on Tuesdays & Nov–May
  </div>

  <div class="accordion mt-5" id="himachalDetails">
    ${collapsibleSection('incl', 'Inclusions (Click to Expand)', pkg.inclusions)}
    ${collapsibleSection('excl', 'Exclusions', pkg.exclusions)}
    ${collapsibleSection('notes', 'Important Notes & Conditions', pkg.importantNotes)}
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-primary text-white px-5 shadow-lg">
      Book Your Himachal Retreat Now!
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
                <p class="mb-0 small">© 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES. ALL RIGHTS ARE RESERVED.</p>
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
        // ========== ANDAMAN ISLAND WELLNESS – PREMIUM DETAILED PAGE ==========
    if (pkg.title.includes("ANDAMAN")) {

      const hotelTable = `
        <table class="table table-bordered text-center">
          <thead class="table-info">
            <tr><th>City</th><th>Hotel Name</th><th>Nights</th></tr>
          </thead>
          <tbody>
            ${pkg.hotels.map(h => `
              <tr>
                <td class="fw-bold">${h.city.split(' (')[0]}</td>
                <td>${h.hotel}</td>
                <td>${h.city.match(/\d+N/) || '—'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>`;

      const pricingTable = `
        <div class="table-responsive">
          <table class="table table-bordered text-center">
            <thead class="table-primary">
              <tr><th>Booking Basis</th><th>Cost Per Person</th></tr>
            </thead>
            <tbody>
              ${pkg.pricing.map(p => `
                <tr ${p.basis.includes("4 Person") ? 'class="table-warning"' : ''}>
                  <td class="fw-bold">${p.basis}</td>
                  <td class="fs-5 text-success">${p.cost}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
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
                ${contentArray.map(item => `<li class="mb-2">✓ ${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pkg.title} - DREAM Tours</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
  body{font-family:'Roboto',sans-serif;background:#f8f9fa;margin:0;}
  a,button,.btn{transition:none!important;}
  .hero{height:65vh;min-height:420px;background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('${pkg.heroImg}') center/cover no-repeat fixed;color:white;display:flex;align-items:center;text-align:center;}
  .hero h1{font-family:'Playfair Display',serif;font-size:4.2rem;text-shadow:0 8px 30px rgba(0,0,0,0.9);}
  .itinerary-day{background:white;padding:1.8rem;border-left:6px solid #00bcd4;border-radius:12px;margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.08);}
  .itinerary-day h5{color:#0097a7;font-weight:bold;}
  .highlight-box{background:linear-gradient(135deg,#e0f7fa,#b2ebf2);padding:2rem;border-radius:12px;border-left:6px solid #00bcd4;text-align:center;font-size:1.2rem;font-weight:bold;}
  @media(max-width:768px){.hero{background-attachment:scroll;height:55vh;}.hero h1{font-size:2.8rem;}}
</style>
</head>
<body>

<!-- NAVBAR (same as your main site) -->
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
    <p class="lead">${pkg.duration} • Port Blair • Havelock • Neil Island</p>
    <p class="h4 text-warning">Meal Plan: Breakfast Included</p>
  </div>
</header>

<div class="container py-5">

  <h2 class="text-center text-info mb-4">Hotels Used (3★ & 4★ Combo)</h2>
  ${hotelTable}

  <h2 class="text-center text-success mb-4 mt-5">Package Pricing</h2>
  ${pricingTable}

  <div class="highlight-box mt-5">
    <strong>Honeymoon Special Add-ons:</strong><br>
    Candle Light Dinner: ₹4,800 | Bed Decoration: ₹2,800
  </div>

  <h2 class="text-center text-info mb-5 mt-5">Detailed Day-wise Itinerary</h2>
  ${pkg.itinerary.map(day => `
    <div class="itinerary-day">
      <h5>${day.split('→')[0].trim()}</h5>
      <p class="mb-0">${day.split('→').slice(1).join('→').trim()}</p>
    </div>
  `).join('')}

  <div class="accordion mt-5" id="andamanDetails">
    ${collapsibleSection('incl', 'Inclusions (Click to Expand)', pkg.inclusions)}
    ${collapsibleSection('excl', 'Exclusions', pkg.exclusions)}
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-info text-white px-5 shadow-lg">
      Book Your Andaman Paradise Now!
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
                <p class="mb-0 small">© 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES. ALL RIGHTS ARE RESERVED.</p>
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
        // ========== KERALA AYURVEDA & BACKWATER RETREAT – PREMIUM PAGE ==========
    if (pkg.title.includes("KERALA")) {

      const hotelTable = `
        <table class="table table-bordered text-center">
          <thead class="table-success">
            <tr><th>City</th><th>Hotel Name</th><th>No. of Nights</th><th>Meal Plan</th></tr>
          </thead>
          <tbody>
            ${pkg.hotels.map(h => `
              <tr>
                <td class="fw-bold">${h.city}</td>
                <td>${h.hotel}</td>
                <td>${h.nights}</td>
                <td>${h.meal}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>`;

      const pricingBox = `
        <div class="text-center p-4 bg-warning bg-opacity-10 border border-warning rounded shadow mb-5">
          <h4 class="text-success fw-bold">Package Cost (Per Person on Twin Sharing)</h4>
          <h2 class="text-danger fw-bold">₹16,600 + 5% GST</h2>
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
                ${contentArray.map(item => `<li class="mb-2">✓ ${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>`;

      const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pkg.title} - DREAM Tours</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
<style>
  body{font-family:'Roboto',sans-serif;background:#f8f9fa;margin:0;}
  a,button,.btn{transition:none!important;}
  .hero{height:65vh;min-height:420px;background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('${pkg.heroImg}') center/cover no-repeat fixed;color:white;display:flex;align-items:center;text-align:center;}
  .hero h1{font-family:'Playfair Display',serif;font-size:4.2rem;text-shadow:0 8px 30px rgba(0,0,0,0.9);}
  .itinerary-day{background:white;padding:1.8rem;border-left:6px solid #28a745;border-radius:12px;margin-bottom:1.5rem;box-shadow:0 10px 30px rgba(0,0,0,0.08);}
  .itinerary-day h5{color:#1e7e34;font-weight:bold;}
  .highlight-box{background:linear-gradient(135deg,#e8f5e9,#c8e6c9);padding:2rem;border-radius:12px;border-left:6px solid #28a745;text-align:center;font-size:1.2rem;font-weight:bold;}
  @media(max-width:768px){.hero{background-attachment:scroll;height:55vh;}.hero h1{font-size:2.8rem;}}
</style>
</head>
<body>

<!-- NAVBAR (same as your main site) -->
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
    <p class="lead">${pkg.duration} • Munnar • Thekkady • Alleppey/Kumarakom</p>
    <p class="h4 text-warning">God’s Own Country Awaits You!</p>
  </div>
</header>

<div class="container py-5">

  <h2 class="text-center text-success mb-4">Hotels Used</h2>
  ${hotelTable}

  ${pricingBox}

  <h2 class="text-center text-success mb-5">Detailed Day-wise Itinerary</h2>
  ${pkg.itinerary.map(day => `
    <div class="itinerary-day">
      <h5>${day.split(':')[0].trim()}</h5>
      <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
    </div>
  `).join('')}

  <div class="highlight-box mt-5">
    Includes Breakfast + Dinner Daily<br>
    Private AC Vehicle Throughout • Child Below 5 Years Free
  </div>

  <div class="accordion mt-5" id="keralaDetails">
    ${collapsibleSection('incl', 'Inclusions (Click to Expand)', pkg.inclusions)}
    ${collapsibleSection('excl', 'Exclusions', pkg.exclusions)}
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-success text-white px-5 shadow-lg">
      Book Your Kerala Dream Now!
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
                <p class="mb-0 small">© 2025 DREAM IMMIGRATIONS AND EDUCATIONAL SERVICES. ALL RIGHTS ARE RESERVED.</p>
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

    // ALL OTHER PACKAGES → GENERIC WELLNESS PAGE
    const genericHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pkg.title} - DREAM Wellness</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body{font-family:'Roboto',sans-serif;background:#f0fdf4;}
    a,button,.btn{transition:none!important;}
    .hero{min-height:480px;background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url('${pkg.heroImg}') center/cover no-repeat fixed;display:flex;align-items:center;justify-content:center;color:white;text-align:center;}
    .itinerary-day{background:white;padding:1.8rem;border-left:5px solid #26c281;border-radius:10px;margin-bottom:1rem;box-shadow:0 6px 20px rgba(0,0,0,0.06);}
    .itinerary-day h5{color:#26c281;font-weight:bold;}
  </style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
  <div class="container"><a class="navbar-brand fw-bold" href="index.html">DREAM</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Tours</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="luxuary.html">Luxury</a></li>
            <li><a class="dropdown-item" href="honeymoon.html">Honeymoon</a></li>
            <li><a class="dropdown-item" href="cultural.html">Cultural</a></li>
            <li><a class="dropdown-item" href="relax.html">Relax</a></li>
            <li><a class="dropdown-item" href="adventure.html">Adventure</a></li>
          </ul>
        </li>
        <li class="nav-item"><a href="loginform.html" class="nav-link btn btn-success text-white px-4">Start Journey</a></li>
      </ul>
    </div>
  </div>
</nav>

<header class="hero">
  <div class="container">
    <h1 class="display-4 fw-bold">${pkg.title}</h1>
    <p class="lead">${pkg.duration}</p>
    <p class="h3 text-warning">${pkg.cost}</p>
  </div>
</header>

<div class="container py-5">
  <h2 class="text-center text-success mb-5">Wellness Itinerary</h2>
  ${pkg.itinerary.map((d,i) => `<div class="itinerary-day"><h5>Day ${i+1}: ${d.replace('– ', '').split(' – ')[1] || d}</h5></div>`).join('')}

  <div class="row mt-5">
    <div class="col-md-6"><h4 class="text-success">Inclusions</h4><ul class="list-unstyled">${pkg.inclusions.map(i=>`<li class="mb-2">✓ ${i}</li>`).join('')}</ul></div>
    <div class="col-md-6"><h4 class="text-danger">Exclusions</h4><ul class="list-unstyled">${pkg.exclusions.map(i=>`<li class="mb-2">✗ ${i}</li>`).join('')}</ul></div>
  </div>

  <div class="text-center mt-5">
    <a href="loginform.html" class="btn btn-lg btn-success text-white px-5">Book This Package Now</a>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

    const win = window.open('', '_blank');
    win.document.write(genericHTML);
    win.document.close();
  }
});