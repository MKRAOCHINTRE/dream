// cultural.js
document.addEventListener('DOMContentLoaded', function () {

  // === PACKAGE DATA (EDIT THIS) ===
  const packages = {
    vietnam: {
      title: "VIETNAM – HANOI & DA NANG (6D/5N)",
      heroImg: "https://images.unsplash.com/photo-1518546305927-5a555bb70202?auto=format&fit=crop&w=1600&q=80",
      duration: "6 Days • 5 Nights",
      cost: "Starting from ₹29,500 (8 Pax, 3★)",
      itinerary: [
        "DAY 1 (01 Mar 2025): HANOI ARRIVAL – HANOI CITY HALF DAY",
        "Arrival at Noi Bai Airport → Transfer to hotel (35km, ~1hr) → Check-in (14:00) → Ho Chi Minh Complex, Mausoleum, Parliament House, President Palace → Tran Quoc Pagoda → Hoan Kiem Lake → Old Quarter walk → Overnight in Hanoi",
        "DAY 2 (02 Mar 2025): HANOI – HOA LU – TRANG AN FULL DAY",
        "Visit Trang An (UNESCO) – Boat ride through caves → Hoa Lu Ancient Capital → Temples of Dinh & Le Dynasty → Return to Hanoi",
        "DAY 3 (03 Mar 2025): HANOI → DA NANG – DA NANG CITY HALF DAY",
        "Flight to Da Nang → Transfer to hotel → Marble Mountains (climb or elevator) → Huyen Khong Cave → Han Market → Overnight in Da Nang",
        "DAY 4 (04 Mar 2025): DA NANG – BANA HILLS FULL DAY",
        "Cable car to Ba Na Hills → Golden Bridge → Jardin D’Amour → Linh Ung Pagoda → Fantasy Park (150+ rides) → King Peak (1,487m) → Return to Da Nang",
        "DAY 5 (05 Mar 2025): DA NANG – CAM THANH COCONUT VILLAGE – HOI AN ANCIENT TOWN – LANTERN BOAT RIDE",
        "Cam Thanh Coconut Jungle → Basket boat & fishing → Hoi An walking tour (Covered Bridge, Tan Ky House) → Lantern boat ride on Hoai River → Free shopping → Overnight in Da Nang",
        "DAY 6 (06 Mar 2025): DA NANG DEPARTURE",
        "Free time → Airport transfer → Departure"
      ],
      hotels: {
        "3★": {
          hanoi: "HAN3 MOON VIEW HOTEL ROH (Sup + Deluxe)",
          danang: "DAD3 SENORITA BOUTIQUE HOTEL – EXECUTIVE DOUBLE SEAVIEW"
        },
        "4★": {
          hanoi: "HAN4 – CHALCEDONY HOTEL HANOI – Superior",
          danang: "DAD4 – GRAND GOLD DA NANG – JUNIOR SUITE SEA VIEW"
        },
        "5★": {
          hanoi: "HAN5 GRAND VISTA HOTEL – Deluxe",
          danang: "DAD5 – DLG HOTEL DA NANG – Deluxe Twin Ocean View"
        }
      },
      pricing: [
        { hotel: "3★", pax: ["2 Adults", "4 Adults", "6 Adults", "8 Adults"], cost: ["₹47,500", "₹36,550", "₹31,800", "₹29,500"] },
        { hotel: "4★", pax: ["2 Adults", "4 Adults", "6 Adults", "8 Adults"], cost: ["₹50,700", "₹39,700", "₹35,000", "₹32,650"] },
        { hotel: "5★", pax: ["2 Adults", "4 Adults", "6 Adults", "8 Adults"], cost: ["₹50,700", "₹39,700", "₹35,000", "₹32,650"] }
      ],
      childPolicy: [
        "Child age 3–5 yrs – 30% of adult cost",
        "Child age 6–11 yrs – 50% of adult cost",
        "Child above 12 yrs & above will be counted as adult"
      ],
      taxNote: "GST 5% + TCS 5% WILL BE APPLICABLE ON FINAL BILLING. IF THE COST GOES ABOVE 7 LACS, THEN TCS 20% WILL BE APPLICABLE ON FINAL INVOICE",
      inclusions: [
        "English-speaking guide during the tour",
        "Accommodation based on twin/sharing room with breakfast",
        "All transfers by private air-conditioned vehicle",
        "Entry and sightseeing fees",
        "Meals as per itinerary (B = Breakfast)",
        "Mineral Water (2 bottles/pax/day)",
        "Ba Na Hills cable car & Fantasy Park entry"
      ],
      exclusions: [
        "International/Domestic flights & airport tax",
        "Vietnam Visa",
        "Early check-in / Late check-out / Single supplement",
        "Meals not mentioned",
        "Personal expenses (laundry, drinks, mini-bar)",
        "Tipping: USD 4/pax/day (1–9 pax), USD 3/pax/day (10+ pax)",
        "Bank transfer fees",
        "Peak season surcharges (Christmas, New Year, Lunar New Year, etc.)"
      ],
      bookingTerms: `
        <h5 class="mt-4">BOOKING & PAYMENT</h5>
        <ul>
          <li>20% non-refundable deposit to confirm</li>
          <li>Full payment 30 days before departure</li>
          <li>Check-in: 14:00 | Check-out: 12:00</li>
        </ul>
        <h5 class="mt-3">CANCELLATION POLICY</h5>
        <ul>
          <li>30+ days: Full refund</li>
          <li>15–30 days: 50% charge</li>
          <li>&lt;15 days: No refund</li>
        </ul>
        <h5 class="mt-3">CONTACT</h5>
        <p>Email: <a href="mailto:admin@traviziaworld.com">admin@traviziaworld.com</a><br>
        Phone: <a href="tel:+918898619371">+91-8898-619371</a></p>
      `
    },

    jordan: {
      title: "EXPLORE JORDAN – 5N/6D",
      heroImg: "https://images.unsplash.com/photo-1578662996442-48f60103fcbf?auto=format&fit=crop&w=1600&q=80",
      duration: "6 Days • Petra & Wadi Rum",
      cost: "₹57,000 – ₹66,000 PP + 5% GST + 5% TCS",
      itinerary: [
        "DAY 1: QUEEN ALIA AIRPORT – AMMAN",
        "Arrival at Queen Alia Airport → Visa assistance → Meet & greet → Transfer to Amman → Overnight",
        "DAY 2: AMMAN CITY TOUR – JERASH – AMMAN",
        "Visit Citadel, Archaeological Museum, Roman Theatre → Rainbow Street → Downtown Souq → Jerash (Roman ruins) → Overnight in Amman",
        "DAY 3: AMMAN – PETRA – AMMAN’S RAINBOW STREET",
        "Drive to Petra → Walk through the Siq → Treasury, Street of Facades, Roman Theatre, Colonnaded Street → Free time (Monastery, High Place) → Overnight in Petra",
        "DAY 4: PETRA – LITTLE PETRA – WADI RUM",
        "Morning in Petra → Visit Little Petra → 2-hour Jeep tour in Wadi Rum → Bedouin camp dinner → Overnight under the stars",
        "DAY 5: WADI RUM – DEAD SEA – MADABA – MT. NEBO – AMMAN",
        "Drive to Madaba (City of Mosaics) → St. George Church → Mt. Nebo → Dead Sea float & mud therapy → Return to Amman",
        "DAY 6: QUEEN ALIA AIRPORT",
        "Breakfast → Airport transfer → Departure"
      ],
      pricing: [
        { pax: "2 – 3 PAX", cost: "INR 66,000" },
        { pax: "4 – 6 PAX", cost: "INR 57,000" }
      ],
      taxNote: "RATES FOR PER PERSON + 5% GST + 5% TCS",
      inclusions: [
        "Meet & assist upon arrival/departure",
        "Transportation by modern A/C private vehicle",
        "English-speaking driver (1–6 pax)",
        "Private English/German/Spanish guide (4 days for 7+ pax)",
        "05 nights’ accommodation with daily breakfast",
        "01 Dinner in Wadi Rum",
        "Entrance fees to all sites",
        "Entrance + Lunch at Dead Sea",
        "Horse riding in Petra (600m to Siq)",
        "One small bottle of mineral water per person per day",
        "Entry visa to Jordan (non-restricted nationality)",
        "All taxes",
        "01 tour leader free in DBL room for every 15 paying pax"
      ],
      exclusions: [
        "Flight tickets",
        "Lunches & dinners (except mentioned)",
        "Tips for driver, guide, hotel staff",
        "Private/local guides (1–6 pax)",
        "Water during meals",
        "Jeep tour in Wadi Rum (2 hours) – included but noted separately",
        "Visa fee (₹6,500 PP)",
        "New Year supplement",
        "Extras or unmentioned items",
        "Price subject to change if fuel/tax/entrance fees increase"
      ],
      cancellation: `
        <h5 class="mt-4 text-danger">CANCELLATION POLICY</h5>
        <ul>
          <li>Any cancellation made <strong>4 weeks before arrival</strong>: <strong>50% of total cost</strong></li>
        </ul>
      `
    },

    // === NEPAL PACKAGE – FULLY UPDATED ===
    nepal: {
      title: "NEPAL SPIRITUAL JOURNEY – 4N/5D",
      heroImg: "https://images.unsplash.com/photo-1518542331925-4a92b1c73d3c?auto=format&fit=crop&w=1600&q=80",
      duration: "5 Days • Kathmandu & Pokhara",
      cost: "₹20,000 PP + 5% GST",
      itinerary: [
        "DAY 01: KATHMANDU AIRPORT",
        "Arrival at Tribhuvan Int’l Airport → Welcome with soft drinks → Transfer to hotel → Refreshment → Half-day sightseeing: Pashupatinath Aarti & Boudhanath Stupa → Overnight in Kathmandu",
        "DAY 02: KATHMANDU → POKHARA (200 km, 5–6 hrs + Manakamana Darshan 2 hrs)",
        "Breakfast → Checkout → Scenic drive to Pokhara → Enroute: Cable car to Manakamana Temple & Darshan → Continue to Pokhara → Evening check-in → Overnight in Pokhara",
        "DAY 03: POKHARA SIGHTSEEING",
        "Early sunrise view of peaks → Breakfast → Half-day tour: Davi’s Fall, Gupteshwor Cave, Bindhyabasini Temple, Seti River Gorge, Pokhara Museum → Boating on Phewa Lake (self) → Free evening → Overnight in Pokhara",
        "DAY 04: POKHARA → KATHMANDU (6–7 hrs)",
        "Breakfast → Checkout → Scenic drive back to Kathmandu → Afternoon arrival → Check-in → Overnight in Kathmandu",
        "DAY 05: KATHMANDU → AIRPORT",
        "Breakfast → Sightseeing: Swayambhunath & Kathmandu Durbar Square → Checkout → Transfer to Tribhuvan International Airport → Departure"
      ],
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>CITY</th><th>HOTEL NAME</th><th>NO. OF NIGHTS</th><th>MEAL PLAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Kathmandu</td><td>Hotel Simal / Marshyandi</td><td>02</td><td>Breakfast & Dinner</td></tr>
            <tr><td>Pokhara</td><td>Hotel White Pearl / Kaushi / Teeka Resort</td><td>02</td><td>Breakfast & Dinner</td></tr>
          </tbody>
        </table>
      `,
      inclusions: [
        "Welcome with soft drink on arrival",
        "Airport transfers by A/C private car",
        "All sightseeing as per itinerary by A/C private car",
        "Kathmandu ↔ Pokhara ↔ Kathmandu by A/C private car",
        "All applicable hotel & transportation taxes (24.3%)"
      ],
      exclusions: [
        "Entrance fees at temples/monuments",
        "Optional tours/activities",
        "Personal expenses (phone, laundry, porter)",
        "Additional costs due to flight cancellation, roadblocks, natural calamities",
        "High season/Christmas/Diwali/New Year supplements",
        "Anything not mentioned in inclusions"
      ],
      terms: `
        <h5 class="mt-4 fw-bold">IMPORTANT TOUR CONDITIONS</h5>
        <ul>
          <li>Valid passport or voter ID mandatory</li>
          <li>Carrying ₹500/₹1000 notes punishable in Nepal</li>
          <li>Vehicle A/C only during drives (not at disposal)</li>
          <li>Rates valid for Indian passport holders only</li>
          <li>Rates & bookings subject to availability & change</li>
          <li>Full payment required for confirmation</li>
          <li>Single pax surcharge applicable</li>
          <li>Similar hotel provided if mentioned unavailable</li>
          <li>Museum visits subject to opening rules</li>
          <li>All costs in INR; extras paid directly</li>
          <li>Validity: Till end of this month from quotation date</li>
        </ul>
        <p class="mt-3 text-danger"><strong>NOTE:</strong> Due to road construction, Kathmandu–Pokhara route in poor condition. For comfort, we advise flying (extra cost).</p>
      `
    },

    // === RISHIKESH PACKAGE – FULLY UPDATED & REPLACED ===
    rishikesh: {
      title: "BEST OF RISHIKESH",
      heroImg: "https://images.unsplash.com/photo-1599663253165-2e3c16e0e1b1?auto=format&fit=crop&w=1600&q=80",
      duration: "5 Days • Yoga & Ganga Aarti",
      cost: "₹17,000 – ₹25,500 PP + 5% GST",
      itinerary: [
        "DAY 01: DEHRADUN TO HARIDWAR",
        "Pick up from Dehradun Airport/Railway Station → Drive to Haridwar → Check-in → Evening Ganga Aarti at Har Ki Pauri → Dinner & Overnight at Haridwar",
        "DAY 02: HARIDWAR TO RISHIKESH (30 km / 1 hr)",
        "Breakfast → Checkout → Mansa Devi & Chandi Devi (Cable Car) → Pawan Dham & Daksh Temple (if time) → Transfer to Rishikesh → Check-in → Evening Aarti at Triveni Ghat → Dinner & Overnight",
        "DAY 03: RISHIKESH TO MUSSOORIE (100 km / 4 hrs)",
        "Breakfast → Checkout → Local sightseeing (walk): Lakshman Jhula, Ram Jhula, Jan Ki Setu, Gita Bhawan, Parmarth Niketan → Transfer to Mussoorie → Check-in → Dinner & Overnight",
        "DAY 04: MUSSOORIE",
        "Breakfast → Full day tour: Kempty Fall, Buddha Temple, Bhatta Fall, Mall Road, Gun Hill (Cable Car) → Sunset view → Dinner & Overnight",
        "DAY 05: MUSSOORIE TO DEHRADUN",
        "Breakfast → Checkout → Dehradun sightseeing: Prakasheswar Temple, FRI, Robber’s Cave, Tapkeshwar, Sahastradhara → Drop at Dehradun"
      ],
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>DESTINATION</th><th>OPTION A<br>(Basic Rooms)</th><th>OPTION B<br>(Basic Rooms)</th><th>OPTION C<br>HOTELS</th><th>OPTION D<br>HOTELS</th><th>MEAL PLAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Mussoorie</td><td>Park Royale Inn</td><td>Rockland / MV Acosta</td><td>Chandseena</td><td>Baris Resort</td><td rowspan="3">Breakfast & Dinner</td></tr>
            <tr><td>Rishikesh</td><td>FTP Tapovan Residency<br>(Deluxe Room Upgraded)</td><td>Harmony On The Ganges</td><td>Shivansh Green</td><td>Divine Lakshmi Ganga</td></tr>
            <tr><td>Haridwar</td><td>Riverdale</td><td>Lattitude Hotel</td><td>Renest Hotel</td><td>Godwin Hotel</td></tr>
          </tbody>
        </table>
      `,
      pricingTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-warning">
            <tr><th>TOTAL GUESTS</th><th>ROOMS</th><th>VEHICLE</th><th>OPTION A</th><th>OPTION B</th><th>OPTION C</th><th>OPTION D</th></tr>
          </thead>
          <tbody>
            <tr><td>2</td><td>1</td><td>Dzire</td><td>17000</td><td>19500</td><td>21200</td><td>25500</td></tr>
            <tr><td>2</td><td>1</td><td>Ertiga</td><td>20000</td><td>22500</td><td>24000</td><td>28600</td></tr>
            <tr><td>4</td><td>2</td><td>Ertiga</td><td>13000</td><td>15500</td><td>17500</td><td>21600</td></tr>
            <tr><td>6</td><td>3</td><td>Ertiga</td><td>11000</td><td>13000</td><td>15000</td><td>19500</td></tr>
            <tr><td colspan="3">Extra Adult</td><td>4500</td><td>6000</td><td>7900</td><td>9000</td></tr>
            <tr><td colspan="3">Extra Child with Bed</td><td>3600</td><td>5000</td><td>6800</td><td>7500</td></tr>
            <tr><td colspan="3">Extra Child No Bed</td><td>3000</td><td>4500</td><td>5500</td><td>6200</td></tr>
          </tbody>
          <tfoot>
            <tr><td colspan="7" class="text-center bg-info text-white">CHILD 5 YRS AND BELOW COMPLIMENTARY WITHOUT BED</td></tr>
          </tfoot>
        </table>
      `,
      inclusions: [
        "04 nights accommodation",
        "04 Breakfast + 04 Dinner",
        "Ex Dehradun/Haridwar: 05 days transfers & sightseeing (Non AC in hills)",
        "All toll, parking, fuel, driver allowances"
      ],
      exclusions: [
        "GST 5% Extra",
        "Extra Sightseeing / Early Morning / Late Night Pick Up Drop",
        "Extra Meals, Drinks & things not mentioned",
        "Guide / Entry Fees / Cable Car / Ropeway",
        "Adventure activities: Rafting / Bungy / Paragliding / Rope Activities / Boat Ride / Jungle Safari",
        "Air / Train / Helicopter Tickets unless mentioned",
        "Horse / Porter for Trekking",
        "Travel & Medical Insurance"
      ],
      note: "Anything not in inclusions is excluded."
    },

   // === TARKARLI PACKAGE – FULLY REPLACED ===
    tarkarli: {
      title: "TARKARLI BEACH & CULTURE",
      heroImg: "https://images.unsplash.com/photo-1588702547381-27b2924e2d3e?auto=format&fit=crop&w=1600&q=80",
      duration: "3 Days • Malvan Fort & Scuba",
      cost: "Custom Quote (Mumbai/Pune)",
      itinerary: [
        "DAY 1: ARRIVAL AT TARKARLI",
        "Morning: Travel from Mumbai (~160 km, 4–5 hrs) or Pune (~130 km, 3–4 hrs) by private car/bus/train → Afternoon: Arrival, check-in, relax → Evening: Tarkarli Beach sunset stroll → Dinner (Konkan cuisine) → Overnight",
        "DAY 2: EXPLORE TARKARLI & NEARBY",
        "Morning: Tarkarli Beach (swim/relax) → Optional: Malvan Beach (15–20 km) → Late Morning: Village walk, Konkan homes → Afternoon: Sindhudurg Fort (10 km, Shivaji-era) → Devbagh Beach → Evening: Sunset + optional boat ride → Dinner → Overnight",
        "DAY 3: DEPARTURE",
        "Morning: Leisure, village walk, photography → Late Morning: Checkout → Afternoon: Return to Mumbai/Pune"
      ],
      inclusions: [
        "2 nights accommodation (hotel/homestay)",
        "Transportation: Private/shared to/from Mumbai or Pune",
        "Meals: Breakfast, Lunch, Dinner (local Konkani cuisine)",
        "Sightseeing: Tarkarli Beach, Malvan Beach, Sindhudurg Fort, village walk",
        "Optional: Boat ride (based on availability)"
      ],
      exclusions: [
        "Personal expenses (shopping, snacks)",
        "Guide charges at Sindhudurg Fort",
        "Travel insurance",
        "Additional activities (adventure sports, extra excursions)"
      ]
    },

    // === AYODHYA PACKAGE – FULLY REPLACED & ENHANCED ===
    ayodhya: {
      title: "AYODHYA RAM MANDIR YATRA",
      heroImg: "https://images.unsplash.com/photo-1708709846056-3e3f47b8f37c?auto=format&fit=crop&w=1600&q=80", // User-uploaded Ayodhya image
      duration: "6 Days • Lucknow to Varanasi",
      cost: "₹37,500 PP + 5% GST (for 2 Pax)",
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>CITY</th><th>HOTEL NAME</th><th>NO. OF NIGHTS</th><th>MEAL PLAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Lucknow</td><td>Hotel Lineage or similar</td><td>01</td><td>Breakfast</td></tr>
            <tr><td>Ayodhya</td><td>Hotel Royal Heritage or similar</td><td>01</td><td>Breakfast</td></tr>
            <tr><td>Prayagraj</td><td>Hotel Placid or similar</td><td>01</td><td>Breakfast</td></tr>
            <tr><td>Varanasi</td><td>Hotel Pristine or similar</td><td>02</td><td>Breakfast</td></tr>
          </tbody>
        </table>
      `,
      itinerary: [
        "DAY 1: ARRIVAL – LUCKNOW",
        "Arrival at Lucknow Airport → Transfer to hotel → Sightseeing: Bara Imambara (Closed Mon), Chhota Imambara, Nawab Wajid Ali Shah Zoo, Aminabad Market (Closed Thu) → Overnight in Lucknow",
        "DAY 2: LUCKNOW → AYODHYA (135 km, 2–3 hrs)",
        "Breakfast → Drive to Ayodhya → Check-in → Full day: Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan → Overnight in Ayodhya",
        "DAY 3: AYODHYA → PRAYAGRAJ (200 km, 4–5 hrs)",
        "Breakfast → Drive to Prayagraj → Check-in → Visit: Triveni Sangam, Mahavir Temple, Anand Bhawan → Overnight in Prayagraj",
        "DAY 4: PRAYAGRAJ → VARANASI (130 km, 2–3 hrs)",
        "Breakfast → Enroute: Vindhyachal Mata Temple → Arrive Varanasi → Check-in → Evening: Ganga Aarti at Dashashwamedh Ghat → Overnight",
        "DAY 5: VARANASI",
        "Sunrise boat ride → Temples: Kashi Vishwanath, Annapurna, Vishalakshi → Breakfast → Sarnath, Bharat Mata Mandir, Durga, Tulsi Manas, Sankat Mochan, New Vishwanath (BHU) → Overnight",
        "DAY 6: VARANASI → DEPARTURE",
        "Breakfast → Airport drop"
      ],
      inclusions: [
        "5 nights accommodation in mentioned/similar hotels",
        "Daily breakfast",
        "All sightseeing & transfers by private AC vehicle",
        "All toll, parking, driver allowance"
      ],
      exclusions: [
        "Air fare / train fare",
        "Guide charges",
        "Entry fees, boat ride, cable car",
        "Early/late check-in/out",
        "Personal expenses (laundry, tips, etc.)",
        "Anything not mentioned in inclusions"
      ],
      note: "This cost does not include guide, boat, entrance fees, etc."
    },

   // === VAISHNO DEVI – FULLY REPLACED & ENHANCED ===
    vaishnodevi: {
      title: "MATA VAISHNO DEVI YATRA",
      heroImg: "https://images.unsplash.com/photo-1627894483669-7d5b2d5c6c7d?auto=format&fit=crop&w=1600&q=80",
      duration: "4 Days • Katra & Shivkhori",
      cost: "₹15,000 PP + 5% GST (Min 2 Pax)",
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>CITY</th><th>HOTEL NAME</th><th>NO. OF NIGHTS</th><th>MEAL PLAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Katra</td><td>Hotel Parin Shree Ram / Green Valley / Similar</td><td>03</td><td>Breakfast & Dinner</td></tr>
          </tbody>
        </table>
      `,
      itinerary: [
        "DAY 01: ARRIVAL KATRA",
        "Arrival at Jammu Airport → Meet driver → Transfer to Katra → Check-in → Rest & leisure → Dinner → Overnight in Katra",
        "DAY 02: MATA VAISHNO DEVI DARSHAN",
        "Breakfast → Trek (12 km) or Helicopter/Pony (self-paid) to Vaishno Devi Shrine → Darshan → Return to Katra → Dinner → Overnight",
        "DAY 03: SHIVKHORI DAY TRIP",
        "Breakfast → Drive to Shivkhori (75 km) → Visit natural Svayambhu Lingam in 1-km cave → Return to Katra → Dinner → Overnight",
        "DAY 04: DEPARTURE",
        "Breakfast → Checkout → Transfer to Jammu Airport → Fly back"
      ],
      inclusions: [
        "Assistance on arrival",
        "Welcome drink",
        "03 nights in Katra (Hotel Royal Krishna / Fern Residency / Similar)",
        "03 double rooms",
        "Breakfast & Dinner",
        "Transportation: Innova Non-AC (point-to-point)",
        "Airport pickup (Jammu) & drop",
        "Local sightseeing in Jammu",
        "All tolls, parking, fuel"
      ],
      exclusions: [
        "Lunch",
        "Personal expenses (laundry, tips, phone calls)",
        "Helicopter, pony, palki for trek",
        "Entry fees, guide charges",
        "Anything not mentioned in inclusions"
      ]
    },

   // === SIKKIM – FULLY REPLACED & ENHANCED (6D/5N) ===
    sikkim: {
      title: "DARJEELING & GANGTOK DELIGHT",
      heroImg: "https://images.unsplash.com/photo-1589307007200-2f2d6b5b7b7a?auto=format&fit=crop&w=1600&q=80", // User-uploaded 2nd pic
      duration: "6 Days • Tiger Hill & Tsomgo Lake",
      cost: "₹30,000 PP + 5% GST (Minimum)",
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>CITY</th><th>HOTEL NAME</th><th>NO. OF NIGHTS</th><th>MEAL PLAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Gangtok</td><td>Woodberry Hotel (Veg) / Similar</td><td>03</td><td>Breakfast & Dinner</td></tr>
            <tr><td>Darjeeling</td><td>Udaan Dekeling (Veg) / Similar</td><td>02</td><td>Breakfast & Dinner</td></tr>
          </tbody>
        </table>
      `,
      itinerary: [
        "1ST DAY (TUE 10 DEC): BAGDOGRA → DARJEELING (70 km, 3 hrs)",
        "Arrival at Bagdogra Airport → Transfer to Darjeeling (6,950 ft) → Check-in → Leisure → Overnight",
        "2ND DAY (WED 11 DEC): DARJEELING FULL DAY + TIGER HILL",
        "4:00 AM: Tiger Hill sunrise (token-based) → Return → Breakfast → 8:30 AM: HMI, Zoo (Thu closed), Tenzing Rock, Ropeway (self-pay, long queue), Tibetan Centre (Sun closed), Tea Garden (outer), Japanese Temple → Evening free → Overnight",
        "3RD DAY (THU 12 DEC): DARJEELING → GANGTOK (110 km, 4 hrs)",
        "Breakfast → Checkout → Transfer to Gangtok (5,500 ft) → Check-in → Leisure → Overnight",
        "4TH DAY (FRI 13 DEC): TSOMGO LAKE & BABA MANDIR (120 km, 8 hrs)",
        "Breakfast → Excursion: Tsomgo Lake (12,400 ft) → Baba Mandir (13,200 ft) → Return → Overnight (Snow point in winter)",
        "5TH DAY (SAT 14 DEC): GANGTOK CITY TOUR (6 hrs)",
        "Breakfast → Tashi View, Ganesh Tok, Hanuman Tok, Cottage Industry (closed Sun & 2nd/4th Sat), Tibetology (Sun closed), Dro-dul Chorten, Gonjang Monastery, Bakthang Falls → Overnight",
        "6TH DAY (SUN 15 DEC): GANGTOK → BAGDOGRA (125 km, 5 hrs)",
        "Breakfast → Checkout → Airport drop"
      ],
      inclusions: [
        "Accommodation in base category rooms",
        "Meal Plan: Breakfast & Dinner",
        "Exclusive Non-AC vehicle (point-to-point only)",
        "All permits & hotel taxes",
        "Valid for Indian nationals only"
      ],
      exclusions: [
        "Airfare / Train fare",
        "Personal expenses (laundry, tips, drinks)",
        "Ropeway, Toy Train, adventure activities",
        "Extra vehicle usage beyond itinerary",
        "Entrance fees & guide charges",
        "Natural calamity costs (landslide, strike)",
        "Room heater, insurance",
        "Anything not in inclusions"
      ],
      note: "Ropeway has limited cabins & long queues. Tsomgo Lake may be replaced in bad weather."
    },

   // === MAHABALESHWAR – FULLY REPLACED & ENHANCED ===
    mahabaleshwar: {
      title: "MAHABALESHWAR & PANCHGANI",
      heroImg: "https://images.unsplash.com/photo-1567602099026-2d8c4d9b99d9?auto=format&fit=crop&w=1600&q=80",
      duration: "3 Days • Venna Lake & Pratapgad",
      cost: "₹10,000 PP + 5% GST (Min 2 Pax)",
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>CITY</th><th>HOTEL NAME</th><th>NO. OF NIGHTS</th><th>MEAL PLAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Mahabaleshwar</td><td>Regal Wood / Similar</td><td>02</td><td>Breakfast & Dinner</td></tr>
          </tbody>
        </table>
      `,
      itinerary: [
        "DAY 1: ARRIVAL IN MAHABALESHWAR & LOCAL SIGHTSEEING",
        "Morning: Arrival at Mahabaleshwar (via Satara by train/bus/private vehicle) → Pickup from station/bus stand → Transfer to hotel → Check-in & freshen up → Afternoon: Venna Lake (boating), Mapro Garden, Wilson Point, Arthur’s Seat → Evening: Explore local market (strawberries, handicrafts) → Dinner → Overnight",
        "DAY 2: FULL-DAY EXCURSION TO PANCHGANI & NEARBY",
        "Morning: Breakfast → Drive to Panchgani (19 km, 30 mins) → Visit: Table Land, Parsi Point, Devil’s Kitchen, Sydney Point, Lingmala Waterfall → Lunch at local cafe → Return to Mahabaleshwar → Evening at leisure → Dinner → Overnight",
        "DAY 3: MAHABALESHWAR SIGHTSEEING & DEPARTURE",
        "Morning: Breakfast → Visit: Elephant’s Head Point, Bhilar Waterfalls, Pratapgad Fort (20 km) → Afternoon: Lunch & shopping (strawberry products, chocolates) → Checkout → Drop at Satara Station / Mahabaleshwar Bus Stand"
      ],
      inclusions: [
        "02 nights accommodation in 3-star/budget hotel",
        "All local transfers & sightseeing by private vehicle",
        "Daily breakfast & dinner",
        "Sightseeing: Mahabaleshwar + Panchgani attractions"
      ],
      exclusions: [
        "Lunch",
        "Entry fees (Pratapgad, Mapro, etc.)",
        "Boating, horse ride, adventure activities",
        "Personal expenses (shopping, tips)",
        "Train/bus fare to Satara"
      ]
    },

 // === GANPATIPHULE – FULLY REPLACED & ENHANCED (WITH 2ND PIC) ===
    ganpatiphule: {
      title: "GANPATIPHULE TEMPLE & BEACH",
      heroImg: "https://images.unsplash.com/photo-1601581874834-2fd7945c5a1b?auto=format&fit=crop&w=1600&q=80", // 2nd user image
      duration: "3 Days • Ratnagiri & Jaigad Fort",
      cost: "₹9,000 PP + 5% GST (With A/C Train, Min 2 Pax)",
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>CITY</th><th>HOTEL NAME</th><th>NO. OF NIGHTS</th><th>MEAL PLAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Ganpatipule</td><td>Westbay Resort / Similar</td><td>02</td><td>Breakfast</td></tr>
          </tbody>
        </table>
      `,
      itinerary: [
        "DAY 1: ARRIVAL AT GANPATIPHULE",
        "Morning: Board train to Ratnagiri (6–7 hrs from Mumbai) → Afternoon: Arrival → Transfer to Ganpatipule (22 km, 45 mins) → Check-in → Evening: Relax at Ganpatipule Beach, sunset walk → Overnight",
        "DAY 2: RATNAGIRI SIGHTSEEING & TEMPLE VISIT",
        "Morning: Breakfast → Visit Ganpatipule Temple (Swayambhu Ganesh) → Late Morning: Jaigad Fort, Bhatye Beach, Aare Ware Viewpoint, Fish Aquarium, Thiba Palace, Bhagwati Temple, Ratnadurga Fort → Afternoon: Lunch (seafood/veg) → Evening: Optional Malgund Beach or boat ride → Dinner → Overnight",
        "DAY 3: DEPARTURE",
        "Morning: Breakfast → Leisure, beach walk, souvenir shopping → Late Morning: Checkout → Transfer to Ratnagiri Station → Train back to origin city"
      ],
      inclusions: [
        "02 nights in Ganpatipule hotel",
        "A/C train tickets (to/from Ratnagiri)",
        "Local transfers (Ratnagiri ↔ Ganpatipule)",
        "Daily breakfast",
        "Sightseeing: Temple, Jaigad Fort, beaches"
      ],
      exclusions: [
        "Lunch & dinner",
        "Guide fees",
        "Boat ride, entry fees",
        "Personal expenses",
        "Travel insurance"
      ]
    },

   // === BANGALORE → MYSORE-COORG-OOTY (6D/5N) – FULLY REPLACED (WITH 3RD PIC) ===
    bangalore: {
      title: "iternary of bangolre",
      heroImg: "https://images.unsplash.com/photo-1582510003544-4d00b7f7420e?auto=format&fit=crop&w=1600&q=80", // 3rd user image
      duration: "6 Days • Coffee, Tea & Palace",
      cost: "₹45,000 PP + 5% GST (Travel for Min 2 Pax)",
      hotelTable: `
        <table class="table table-bordered mt-3">
          <thead class="table-light">
            <tr><th>DESTINATION</th><th>HOTEL</th><th>MEAL PLAN</th><th>NO. OF NIGHTS</th></tr>
          </thead>
          <tbody>
            <tr><td>Mysore</td><td>Regenta Central Herald / Similar</td><td>Breakfast & Dinner</td><td>01</td></tr>
            <tr><td>Coorg</td><td>Gokulam Grand / Similar</td><td>Breakfast & Dinner</td><td>02</td></tr>
            <tr><td>Ooty</td><td>La Montana By TGI / Similar</td><td>Breakfast & Dinner</td><td>02</td></tr>
          </tbody>
        </table>
      `,
      itinerary: [
        "DAY 1: ARRIVAL IN BANGALORE → COORG (250 km, 6 hrs)",
        "Pickup from Bangalore Airport/Railway → Drive to Coorg → Check-in → Leisure → Overnight in Coorg",
        "DAY 2: COORG SIGHTSEEING",
        "Breakfast → Dubare Elephant Camp, Abbey Falls, Raja’s Seat, Coffee Plantation Tour → Evening: Madikeri Fort, Omkareshwara Temple → Overnight",
        "DAY 3: COORG → OOTY (250 km, 6 hrs)",
        "Breakfast → Checkout → Drive to Ooty → Check-in → Leisure → Overnight",
        "DAY 4: OOTY SIGHTSEEING",
        "Breakfast → Ooty Lake (boating), Botanical Gardens, Doddabetta Peak, Rose Garden, Tea Museum → Overnight",
        "DAY 5: OOTY → MYSORE (125 km, 3 hrs)",
        "Breakfast → Checkout → Drive to Mysore → Visit: Mysore Palace, Chamundi Hill, Brindavan Gardens (evening show optional) → Overnight",
        "DAY 6: MYSORE → BANGALORE DROP (150 km, 3 hrs)",
        "Breakfast → Checkout → Drop at Bangalore Airport/Railway"
      ],
      inclusions: [
        "05 nights accommodation (2N Coorg, 2N Ooty, 1N Mysore)",
        "Daily breakfast",
        "Private AC vehicle for all transfers & sightseeing",
        "Pickup & drop: Bangalore",
        "Toll, parking, fuel, driver allowance",
        "1–2 water bottles daily"
      ],
      exclusions: [
        "Airfare / Train fare",
        "Lunch, dinner, snacks",
        "Entry fees, boating, cable car",
        "Personal expenses, tips",
        "Travel insurance",
        "Anything not in inclusions"
      ]
    },

   dubai: {
  title: "DUBAI CULTURAL ODYSSEY",
  heroImg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
  duration: "5 Days",
  cost: "₹37,500 per adult (Double sharing) + 5% GST + 5% TCS",
  itinerary: [
    "DAY 01: MUMBAI – DUBAI",
    "• Arrive Dubai airport → Transfer to the hotel & check in (Standard check in time is 1500 hrs) → Time at leisure & Overnight at the hotel",
    "DAY 02: CITY TOUR + BURJ KHALIFA",
    "• Breakfast at the hotel → Proceed to Dubai city tour with to Burj Khalifa 124th floor → Later enjoy at Dubai Mall with Fountain Show → Evening pick up from the Dubai Mall & transfer to the hotel → Overnight at the hotel",
    "DAY 03: MIRACLE GARDEN + GLOBAL VILLAGE",
    "• Breakfast at the hotel → Proceed to visit Miracle Garden → Later visit to Global Village → Evening transfer back to the hotel & Overnight at the hotel",
    "DAY 04: DESERT SAFARI [STANDARD]",
    "• Breakfast at the hotel → Day at leisure → Evening transfer to Desert Safari → Transfer back to the hotel & Overnight at the hotel",
    "DAY 05: DEPART DUBAI",
    "• Breakfast at the hotel → Check out from the hotel → Transfer to the airport"
  ],
  inclusions: [
    "Return airport transfers",
    "Accommodation for 04 nights with breakfast at the hotel City Max Bur Dubai",
    "Sightseeing as per above itinerary",
    "All airport transfers on PVT & Sightseeing transfers on SIC basis",
    "***ABOVE COST WILL BE APPLICABLE IF YOU BOOK TICKETS & VISA FROM US***"
  ],
  exclusions: [
    "Airfare / Visa / Travel Ins",
    "Lunch & Dinner",
    "Visa Fees ₹7,500 Per Person",
    "Travel Ins = ₹1,000 – ₹1,200 Per Person",
    "Dubai tourism Dirham Fees + Indian GST 5% + TCS 5%"
  ],
  notes: [
    "PACKAGE COST BASED ON 4 ADULTS + 01 CHILD",
    "INR 37,500/- per adult on Double sharing basis",
    "INR 26,300/- Child with extra Bed",
    "GST 5% + TCS 5% WILL BE APPLICABLE ON FINAL BILLING. IF BILLING GOES ABOVE 7 LCS THEN TCS 20% WILL BE APPLICABLE"
  ]
},

   chardham: {
  title: "CHARDHAM YATRA",
  heroImg: "https://images.unsplash.com/photo-1593693411515-9e1232c2bb9a?auto=format&fit=crop&w=1600&q=80",
  duration: "12 Days",
  cost: "From ₹38,000 per person + 5% GST",
  itinerary: [
    "DAY 01: DELHI / DEHRADUN / HARIDWAR / RISHIKESH – HARIDWAR",
    "Morning meets our representative at your Hotel / Airport / Railway Station → Start your journey to Haridwar → Check in to hotel → Evening visit Har Ki Pauri and Ganga Aarti → Overnight stay at Haridwar",
    
    "DAY 02: HARIDWAR – BARKOT (210KMS/7-8HR)",
    "Morning after breakfast, check out from hotel → Transfer to Barkot → On the way visit Mussoorie Mall Road and Kempty Falls → Later drive to Barkot → Check into the hotel arrival in Barkot → Overnight stay at Barkot",
    
    "DAY 03: BARKOT – JANKICHATTI – YAMUNOTRI – JANKICHATTI – BARKOT {35KMS DRIVE & 6KMS TREK (ONE SIDE)}",
    "Early morning after breakfast, drive to Jankichatti / Phoolchatti → Start your trek from here to Yamunotri (6kms) (Either by walk or by horse or by Doli at own cost) → After arrival at Yamunotri take bath in warm waters of Surya Kund (Hot Spring) → Enjoy Darshan of “Yamunaji’ → Return trek to Jankichatti → Later drive towards Barkot → Overnight stay at Barkot",
    
    "DAY 04: BARKOT – UTTARKASHI (100KMS/4HR)",
    "Morning after breakfast, relax for a while → Later drive to Uttarkashi → Visit Shivgufa on the way to Uttarkashi → In Uttarkashi visit Kashi Vishwanath Temple → After that, check in hotel → Day free for rest → Overnight stay at Uttarkashi",
    
    "DAY 05: UTTARKASHI – GANGOTRI – UTTARKASHI (100KMS/3-4 EACH SIDE)",
    "Early morning after breakfast, drive to Gangotri → On the way visit Gangnani Hot Spring → Take a holy dip in Kund → Later drive to Gangotri via beautiful Harsil valley → On arrival at Gangotri, take a holy dip in the sacred river Ganges → Perform Pooja and Darshan → Later return drive to Uttarkashi → Overnight stay at Uttarkashi",
    
    "DAY 06: UTTARKASHI – GUPTKASHI (220KMS/8-9HR)",
    "Morning after breakfast, drive to Guptkashi via Moolgarh & Lambgoan → Enroute see the beautiful river Mandakini at Tilwara → Visit Ardh Narishwar Temple in Guptakashi → Check into the hotel arrival in Guptkashi → Overnight stay at Guptkashi",
    
    "DAY 07: GUPTKASHI // KEDARNATH (30KMS BY ROAD & 14 KMS TREK ONE WAY)",
    "HEIGHT: 3384 MTS → Morning after breakfast, proceed to Kedarnath via Helicopter (Phata/Sirsi) OR Trek (via Gaurikund) → Helicopter: Transfer to helipad as per ticket timing → Trek: Drive to Sonprayag → Local jeep to Gaurikund (own cost) → 14 km trek → Visit Kedarnath Temple & Shankaracharya Samadhi → Overnight at Kedarnath (Meals: Breakfast and Dinner)",
    
    "DAY 08: KEDARNATH // GUPTKASHI",
    "Morning explore nearby areas → Return to Guptkashi via Helicopter OR Trek → Helicopter: Driver picks up from helipad → Trek: Local jeep from Gaurikund to Sonprayag (own cost) → Driver meets at Sonprayag → Check in hotel at Guptkashi → Overnight stay (Meals: Breakfast and Dinner)",
    
    "DAY 09: GUPTKASHI – BADRINATH (220KMS/9-10HRS)",
    "Morning after breakfast, drive to Badrinath → Check in hotel → Bath in Taptkund → Darshan of Badrivishal & Evening Aarti → Visit Mana Village, Vyas Gufa, Bhimkund, Saraswati Mukh → Overnight stay at Badrinath",
    
    "DAY 10: BADRINATH – JOSHIMATH – RUDRAPRAYAG (160KMS/7HR)",
    "Morning after breakfast, drive to Rudraprayag via Joshimath → Enroute: VishuPrayag, Narsingh Temple (Joshimath), KarnPrayag, NandPrayag → Check in hotel at Rudraprayag → Overnight stay",
    
    "DAY 11: RUDRAPRAYAG – HARIDWAR (150KMS/05 HRS)",
    "Morning after breakfast, transfer to Haridwar → Enroute short visit to Dev Prayag & Rishikesh → Check in hotel → Evening relax → Overnight stay at Haridwar",
    
    "DAY 12: HARIDWAR – DELHI (210KMS/6 HRS)",
    "Morning after breakfast, check out → Visit Mansa Devi Temple → Drive to Delhi → Tour concludes with blessings"
  ],
  hotelTable: [
    { destination: "Haridwar", hotel: "Rio Grand", nights: "02", meal: "Breakfast & Dinner" },
    { destination: "Barkot", hotel: "Adhvanta Camp", nights: "02", meal: "Breakfast & Dinner" },
    { destination: "Uttarkashi", hotel: "Suryansh Resort", nights: "02", meal: "Breakfast & Dinner" },
    { destination: "Guptkashi", hotel: "Jyotirlinga Resort", nights: "02", meal: "Breakfast & Dinner" },
    { destination: "Kedarnath", hotel: "Gurudham Frontier / Patliputra", nights: "01", meal: "Breakfast & Dinner" },
    { destination: "Badrinath", hotel: "Bamani Resort", nights: "01", meal: "Breakfast & Dinner" },
    { destination: "Rudraprayag / Srinagar", hotel: "Ivy Top", nights: "01", meal: "Breakfast & Dinner" }
  ],
  pricing: [
    { pax: "2 PAX", cost: "₹56,000 PER PERSON" },
    { pax: "4 PAX", cost: "₹47,000 PER PERSON" },
    { pax: "6 PAX", cost: "₹38,000 PER PERSON" }
  ],
  inclusions: [
    "11 Nights Stay as per the above-mentioned hotels",
    "Meals: 11 Breakfast and 11 Dinner",
    "Transfer and sightseeing as per itinerary (AC in non-hill areas only)",
    "All toll tax, parking, fuel and driver allowances"
  ],
  exclusions: [
    "Extra Meals, Drinks & things not mentioned in inclusions",
    "Guide / Entry Fees / Cable Car / Ropeway",
    "Adventure activities: Rafting / Bungy / Paragliding / Rope Activities / Boat Ride / Jungle Safari",
    "Air / Train / Helicopter Tickets unless mentioned",
    "Horse / Porter / Palakhi for Trekking",
    "Travel & Medical Insurance"
  ],
  notes: [
    "5% GST applicable on total billing",
    "Helicopter tickets for Kedarnath must be pre-booked (not included)",
    "Trek to Yamunotri & Kedarnath: Pony/Doli available at own cost",
    "Vehicle: AC will be switched off in hilly areas"
  ]
},

   kashmir: {
  title: "KASHMIR VALLEY CULTURE",
  heroImg: "https://images.unsplash.com/photo-1599663253165-2e3c16e0e1b1?auto=format&fit=crop&w=1600&q=80",
  duration: "6 Days",
  cost: "₹25,000 – ₹30,000 + 5% GST",
  itinerary: [
    "Day 01: ARRIVAL SRINAGAR IN KASHMIR + LOCAL SIGHTSEEING",
    "Warm welcome at Srinagar Airport → Transfer to hotel → Afternoon visit famous Mughal Gardens: Nishat Bagh, Shalimar Bagh, Cheshma Shahi & Pari Mahal → Dinner & Overnight at Srinagar",

    "Day 02: GULMARG – DAYTRIP",
    "After breakfast, full-day excursion to Gulmarg (Meadow of Flowers, 2730 m) → Enjoy Gondola Cable Car (own cost) → Optional snow activities: skiing, sledging, ATV → Return to Srinagar → Dinner & Overnight",

    "Day 03: SONMARG – DAYTRIP",
    "After breakfast, day trip to Sonamarg (Golden Meadow) → Horse ride to Thajiwas Glacier (own cost) → Enjoy snow, streams & mountain views → Return to Srinagar → Dinner & Overnight",

    "Day 04: SRINAGAR – PAHALGAM",
    "After breakfast, drive to Pahalgam (2,130 m) → Enroute: Saffron fields, Awantipur Ruins → Visit Betaab Valley, Aru Valley, Chandanwadi (own cost via local cab) → Walk along Lidder River → Dinner & Overnight at Pahalgam",

    "Day 05: PAHALGAM – SRINAGAR",
    "After breakfast, check-out & return to Srinagar → Evening: 1-Hour Shikara Ride on Dal Lake → Visit floating gardens (Raadh) → Dinner & Overnight in Deluxe Houseboat",

    "Day 06: DEPARTURE",
    "After breakfast, check-out → Transfer to Srinagar Airport → Tour ends with heavenly memories"
  ],
  hotelTable: [
    {
      city: "Srinagar",
      hotel: "Hotel Sahara Grand / Hills / Karam Gold / Gurcoo Residency / Midtown Greens",
      nights: "03",
      meal: "Breakfast & Dinner"
    },
    {
      city: "Pahalgam",
      hotel: "Hotel Green Heights / A S Resorts / Pahalgam Retreat",
      nights: "01",
      meal: "Breakfast & Dinner"
    },
    {
      city: "Srinagar",
      hotel: "Deluxe Houseboat",
      nights: "01",
      meal: "Breakfast & Dinner"
    }
  ],
  pricing: [
    { pax: "Min 2 PAX", cost: "₹30,000 PER PERSON + 5% GST" },
    { pax: "Min 4 PAX", cost: "₹25,000 PER PERSON + 5% GST" }
  ],
  inclusions: [
    "Assistance on Arrival",
    "Welcome drink on arrival",
    "Breakfast & Dinner (as per hotel meal plan)",
    "Transportation using SEDAN/SUV with Heating (as per itinerary)",
    "All Transfers: Srinagar Airport Pickup & Drop",
    "Local Sightseeing in Srinagar",
    "1-Hour Shikara Ride on Dal Lake",
    "All Tolls, Parking, Fuel Expenses"
  ],
  exclusions: [
    "Lunch",
    "Garden Entry Fees",
    "Gondola / Cable Car Ride in Gulmarg",
    "Local Cab for Betaab Valley / Aru Valley & Chandanwari in Pahalgam",
    "Union Cab in Sonamarg for Zero Point",
    "Horse Ride in Sonamarg (Thajiwas Glacier) & Pahalgam (Baisaran Valley)",
    "Chained Vehicle from Tangmarg – Gulmarg (in case of heavy snowfall)",
    "Personal expenses: passport, visas, room service, phone calls, laundry, beverages, optional activities",
    "Tipping and luggage handling",
    "GST / TAXES (5% extra on total billing)"
  ],
  notes: [
    "Gondola Ride (Phase 1 & 2) subject to weather & queue — pre-booking recommended",
    "Local union cabs mandatory in Gulmarg, Pahalgam & Sonamarg — payable directly",
    "Houseboat stay includes heater, bedding & attached bathroom",
    "AC not required in Kashmir — vehicles come with heating facility",
    "Snowfall season: Dec–Mar — carry woolens, gloves, sunglasses"
  ]
},

   goldentriangle: {
  title: "GOLDEN TRIANGLE HERITAGE",
  heroImg: "https://images.unsplash.com/photo-1582510003544-4b2c1e79e4e7?auto=format&fit=crop&w=1600&q=80",
  duration: "6 Days",
  cost: "From ₹17,900 + 5% GST",
  itinerary: [
    "Day 01: Arrival Delhi – Hotel",
    "Arrival at Delhi Airport/Railway Station → Meet & assist by representative → Transfer to hotel → Evening visit local market → Overnight in Delhi",

    "Day 02: Delhi Sightseeing",
    "Post breakfast → Full day city tour: Jama Masjid*, Red Fort*, Raj Ghat, Humayun’s Tomb, Lotus Temple, Qutub Minar, India Gate, Rashtrapati Bhawan*, Parliament House* → *Drive Pass → Overnight in Delhi",

    "Day 03: Delhi – Agra Sightseeing (216 Km / 4 hrs)",
    "After breakfast → Drive to Agra → Visit Agra Fort & Taj Mahal (Sunset view) → Check-in hotel → Overnight in Agra",

    "Day 04: Agra – Jaipur via Fatehpur Sikri (245 Km / 4 hrs)",
    "After breakfast → Drive to Jaipur → Enroute visit Fatehpur Sikri (Buland Darwaza) → Optional: Keoladeo Ghana Bird Sanctuary (Bharatpur) → Arrive Jaipur → Check-in → Overnight in Jaipur",

    "Day 05: Jaipur Local Sightseeing",
    "After breakfast → Full day tour: Amber Fort & Palace, Jal Mahal (photo stop), City Palace & Museum, Jantar Mantar, Hawa Mahal (photo stop) → Evening free → Overnight in Jaipur",

    "Day 06: Hotel – Jaipur Departure",
    "After breakfast → Check-out → Drop to Jaipur Airport/Railway Station → Tour ends with sweet memories"
  ],
  pricingTable: [
    {
      pax: "02 PAX",
      budget: "17900",
      deluxe: "20500",
      luxury: "29900",
      premium: "On Request"
    },
    {
      pax: "04 PAX",
      budget: "14900",
      deluxe: "17500",
      luxury: "26900",
      premium: "On Request"
    },
    {
      pax: "EXTRA PAX (EPSR)",
      budget: "3500",
      deluxe: "4900",
      luxury: "7900",
      premium: "On Request"
    }
  ],
  hotelTable: [
    {
      destination: "Delhi",
      budget: "Hotel Lords Grand / Hotel Almati Inn / Similar",
      deluxe: "Hotel Almondz / Hotel Cosy Grand / Similar",
      luxury: "Hotel Royal Plaza / Jaypee Siddharth / Similar",
      premium: "The Grand New Delhi / The Lalit / Similar"
    },
    {
      destination: "Agra",
      budget: "Hotel Taj Inn / Hotel Taj Heritage / Similar",
      deluxe: "Hotel The Taj Villa / Hotel Taj Vista / Similar",
      luxury: "Hotel Crystal Sarovar Premier / Hotel The Fern / Similar",
      premium: "Hotel Trident / Hotel ITC Mughal / Similar"
    },
    {
      destination: "Jaipur",
      budget: "Hotel Aashish / Hotel Laxmi Niwas / Similar",
      deluxe: "Hotel Lords Plaza / Hotel Megenta / Similar",
      luxury: "Hotel Park Prime / Hotel The Fern Residency / Similar",
      premium: "Hotel Trident / ITC Rajputana / Similar"
    }
  ],
  inclusions: [
    "Assistance on Arrival",
    "24-hour helpline",
    "Welcome Drink on Arrival at Hotel",
    "Daily Breakfast (CP Meal Plan)",
    "Hotel Accommodation on twin/double sharing basis",
    "Travel in air-conditioned car throughout the journey",
    "All transfers & sightseeing as per itinerary",
    "Toll Tax, Parking, Night Halt, State Tax, Fuel"
  ],
  exclusions: [
    "Air fare / Train fare",
    "Guide & Monument Entrance Fees",
    "Camera Charges / Jeep Safari / Camel Safari / Elephant Ride",
    "Personal expenses: tips, laundry, liquor, phone calls, insurance",
    "Any item not specified in Inclusions",
    "Government taxes increase",
    "Single occupancy supplement",
    "5% Government Service Tax (GST)"
  ],
  notes: [
    "CP = Continental Plan (Room + Breakfast)",
    "Rates valid for Indian Nationals only",
    "Taj Mahal closed on Fridays",
    "Amber Fort Elephant Ride subject to availability",
    "Vehicle AC switched off in hilly areas",
    "Standard check-in: 14:00 hrs | Check-out: 12:00 hrs"
  ]
},

  calicutwayanad: {
  title: "CALICUT – WAYANAD CULTURAL TRAIL",
  heroImg: "https://images.unsplash.com/photo-1578662996442-48f60103fcbf?auto=format&fit=crop&w=1600&q=80",
  duration: "5 Days / 4 Nights",
  cost: "From ₹15,800 + 5% GST per person",
  itinerary: [
    "Day 01: Arrival Calicut → Beach Hotel",
    "Arrival at Calicut Airport → Enroute visit Calicut Town & Calicut Beach → Check-in beach resort → Evening at leisure → Overnight at Kozhikode",

    "Day 02: Calicut → Wayanad (110 kms / 3–4 hrs)",
    "After breakfast → Check-out & transfer to Wayanad → Enroute: Ghat Road View Point, Pookot Lake → Check-in resort → Enjoy resort activities → Overnight at Wayanad",

    "Day 03: Wayanad Full Day Sightseeing",
    "After breakfast → Full day tour: Muthanga Wildlife Sanctuary, Kuruva Island, Edakkal Caves → Return to resort → Overnight at Wayanad",

    "Day 04: Wayanad Sightseeing",
    "After breakfast → Visit Soochipara Waterfalls, Banasura Sagar Dam → Evening free for nature walks or resort activities → Overnight at Wayanad",

    "Day 05: Wayanad → Calicut Departure (130 kms / 4½ hrs)",
    "After breakfast → Check-out → Drop to Calicut Airport/Railway Station → Tour ends with beautiful memories"
  ],
  hotelTable: [
    { place: "Calicut - Kozhikode", nights: "01 Night", standard: "Keys Select - Malabar Gate / Similar" },
    { place: "Wayanad", nights: "03 Nights", standard: "Upavaan Resorts / Mount Avenue / Similar" }
  ],
  pricing: [
    { pax: "02 PAX (Standard)", cost: "₹19,000 per person + 5% GST" },
    { pax: "04 PAX (Standard)", cost: "₹15,800 per person + 5% GST" }
  ],
  inclusions: [
    "Accommodation on twin sharing basis in Standard 3-Star category",
    "Daily Buffet Breakfast",
    "All transfers & sightseeing by AC Vehicle (as per group size)",
    "Vehicle at disposal as per itinerary",
    "Well experienced driver + Driver allowance, toll, parking, night halt",
    "Meet & Greet with refreshment kit on arrival",
    "01 Mineral Water Bottle + Snacks Box on arrival day",
    "Cab with Customized Agent logo",
    "Child below 5 years complimentary (without extra bed)",
    "All applicable taxes"
  ],
  exclusions: [
    "Lunch & Dinner",
    "Any entrance fees / activity charges (Edakkal Caves, Kuruva Island, Jeep Safari, Boating etc.)",
    "Airfare / Train fare",
    "Personal expenses: tips, laundry, beverages, phone calls",
    "Anything not mentioned in Inclusions"
  ],
  notes: [
    "AC will be switched off in hilly areas",
    "Standard check-in: 14:00 hrs | Check-out: 11:00 hrs",
    "Rates valid for Indian Nationals only"
  ]
},

   chennaimahabalipuram: {
  title: "CHENNAI – MAHABALIPURAM HERITAGE TRAIL",
  heroImg: "https://images.unsplash.com/photo-1589300746682-7e5c36d3d308?auto=format&fit=crop&w=1600&q=80",
  duration: "4 Days / 3 Nights",
  cost: "From ₹10,500 + 5% GST per person",
  itinerary: [
    "Day 01: Arrival Chennai",
    "Meet & Greet at Chennai Airport/Railway Station → Transfer to hotel → Day at leisure → Evening visit Marina Beach → Overnight at Chennai",

    "Day 02: Chennai → Mahabalipuram (60 kms / 1.5 hrs)",
    "After breakfast → Drive to Mahabalipuram → Check-in beachside resort/hotel → Rest of day free to enjoy the beach → Overnight at Mahabalipuram",

    "Day 03: Mahabalipuram Full Day Sightseeing",
    "After breakfast → Full day heritage tour: Shore Temple (UNESCO Site), Five Rathas, Arjuna’s Penance, Krishna’s Butter Ball, massive rock-cut caves → Sunset photography at Shore Temple → Overnight at Mahabalipuram",

    "Day 04: Mahabalipuram → Chennai Departure",
    "After breakfast → Check-out & drive back to Chennai → Enroute/On arrival visit: Kapaleeshwarar Temple, San Thome Basilica, Fort St. George, drive past Marina Beach → Drop to Chennai Airport/Railway Station → Tour ends"
  ],
  hotelTable: [
    { place: "Chennai", nights: "01 Night", standard: "Regenta Central Deccan / Similar (3-Star)" },
    { place: "Mahabalipuram", nights: "02 Nights", standard: "Ideal Beach Resort / Grande Bay Resort / Similar (3-Star)" }
  ],
  pricing: [
    { pax: "02 PAX (Standard)", cost: "₹17,500 per person + 5% GST" },
    { pax: "04 PAX (Standard)", cost: "₹10,500 per person + 5% GST" }
  ],
  inclusions: [
    "Accommodation on twin sharing basis in 3-Star category",
    "Daily Buffet Breakfast",
    "All transfers & sightseeing by AC Sedan/Innova as per group size",
    "Vehicle at disposal as per itinerary",
    "Experienced driver + Driver allowance, toll, parking, night halt",
    "Meet & Greet with refreshment kit on arrival",
    "01 Mineral Water Bottle + Snacks Box on arrival day",
    "Cab with Customized Agent logo",
    "Child below 5 years complimentary (no extra bed)",
    "All applicable taxes"
  ],
  exclusions: [
    "Lunch & Dinner",
    "Entrance fees at monuments (Shore Temple, Five Rathas, etc.)",
    "Airfare / Train fare",
    "Guide charges",
    "Personal expenses: tips, laundry, beverages, phone calls",
    "Any item not mentioned in Inclusions"
  ],
  notes: [
    "Shore Temple & monuments are UNESCO World Heritage Sites",
    "AC will be switched off in hilly/coastal stretches if required",
    "Standard check-in: 14:00 hrs | Check-out: 11:00 hrs",
    "Best time to visit: October to March"
  ]
},

   madurairameswaram: {
  title: "MADURAI – RAMESWARAM PILGRIMAGE",
  heroImg: "https://images.unsplash.com/photo-1564507596778-90a2b71d8b1c?auto=format&fit=crop&w=1600&q=80",
  duration: "3 Days / 2 Nights",
  cost: "From ₹7,800 + 5% GST per person",
  itinerary: [
    "Day 01: Arrival Madurai → Temple Darshan",
    "Pickup from Madurai Airport/Railway Station → Transfer to hotel → After refreshment visit: Meenakshi Amman Temple, Thirumalai Nayakkar Mahal, Gandhi Memorial Museum → Overnight at Madurai",

    "Day 02: Madurai → Rameswaram (170 kms / 3½ hrs)",
    "After breakfast → Check-out & drive to Rameswaram → Enroute: Pamban Bridge, APJ Abdul Kalam Memorial → Check-in hotel → Evening free → Overnight at Rameswaram",

    "Day 03: Rameswaram Darshan → Dhanushkodi → Departure",
    "Early morning holy bath & darshan at Ramanathaswamy Temple (22 Holy Wells) → After breakfast visit: Dhanushkodi (India-Sri Lanka border), Ram Zarukka, Ram Theertham, Lakshman Theertham, Panchamukhi Hanuman Temple, Floating Stone, Seetha Kund → Later drive back to Madurai → Drop at Airport/Railway Station → Tour ends with blessings"
  ],
  hotelTable: [
    { place: "Madurai", nights: "01 Night", standard: "Hotel Supreme / Astoria / Similar (3-Star)" },
    { place: "Rameswaram", nights: "01 Night", standard: "Daiwik Hotel / Vinayaga / Similar (3-Star)" }
  ],
  pricing: [
    { pax: "02 PAX (Standard)", cost: "₹10,500 per person + 5% GST" },
    { pax: "04 PAX (Standard)", cost: "₹7,800 per person + 5% GST" }
  ],
  inclusions: [
    "Accommodation on twin sharing basis in 3-Star category",
    "Daily Buffet Breakfast",
    "All transfers & sightseeing by AC Sedan/Innova as per group size",
    "Vehicle at disposal as per itinerary",
    "Experienced driver + Driver allowance, toll, parking, night halt",
    "Meet & Greet with refreshment kit on arrival",
    "01 Mineral Water Bottle + Snacks Box on arrival day",
    "Cab with Customized Agent logo",
    "Child below 5 years complimentary (no extra bed)",
    "All applicable taxes"
  ],
  exclusions: [
    "Lunch & Dinner",
    "Entrance fees & camera charges",
    "22 Holy Well Spatika Linga Darshan & special pooja charges",
    "Airfare / Train fare",
    "Personal expenses: tips, laundry, beverages, phone calls",
    "Any item not mentioned in Inclusions"
  ],
  notes: [
    "Ramanathaswamy Temple: One of the 12 Jyotirlingas & Char Dham",
    "Early morning bath in 22 Holy Wells (Theerthams) highly recommended",
    "Dhanushkodi is last land border between India & Sri Lanka",
    "Best period: October to March",
    "Standard check-in: 14:00 hrs | Check-out: 11:00 hrs"
  ]
},

   chennaipondicherry: {
  title: "CHENNAI – PONDICHERRY HERITAGE & FRENCH TRAIL",
  heroImg: "https://images.unsplash.com/photo-1599663253165-2e3c16e0e1b1?auto=format&fit=crop&w=1600&q=80", // Beautiful French Quarter / Auroville vibe
  duration: "4 Days / 3 Nights",
  cost: "From ₹7,800 + 5% GST per person",
  itinerary: [
    "Day 01: Arrival Chennai → Pondicherry (160 kms / 3½ hrs)",
    "Warm welcome at Chennai Airport → Drive to Pondicherry → Check-in hotel → Evening free to explore French Quarter & Promenade Beach → Overnight at Pondicherry",

    "Day 02: Pondicherry Local Sightseeing",
    "After breakfast → Visit: Sri Aurobindo Ashram, Botanical Garden, Pondicherry Museum, Bharathi Park, Manakula Vinayagar Temple → Evening stroll at Rock Beach & Nehru Street shopping → Overnight at Pondicherry",

    "Day 03: Pondicherry → Chennai (160 kms / 3½ hrs)",
    "After breakfast → Check-out → Drive to Chennai → Check-in hotel → Afternoon visit: Kapaleeshwarar Temple, Government Museum, Marina Beach, optional shopping at T.Nagar → Overnight at Chennai",

    "Day 04: Chennai Departure",
    "After breakfast → Check-out → Transfer to Chennai Airport → Tour ends with sweet memories of French-Indian fusion"
  ],
  hotelTable: [
    { place: "Pondicherry", nights: "02 Nights", standard: "Anandha Inn / Shenbaga Hotel / Similar (3-Star)" },
    { place: "Chennai", nights: "01 Night", standard: "The Lotus Serviced Apartment / Zone by The Park / Similar (3-Star)" }
  ],
  pricing: [
    { pax: "02 PAX (Standard)", cost: "₹17,800 per person + 5% GST" },
    { pax: "04 PAX (Standard)", cost: "₹7,800 per person + 5% GST" }
  ],
  inclusions: [
    "Accommodation on twin sharing basis in 3-Star category",
    "Daily Buffet Breakfast",
    "All transfers & sightseeing by AC Sedan/Innova as per group size",
    "Vehicle at disposal as per itinerary",
    "Experienced driver + Driver allowance, toll, parking, night halt",
    "Meet & Greet with refreshment kit on arrival",
    "01 Mineral Water Bottle + Snacks Box on arrival day",
    "Cab with Customized Agent logo",
    "Child below 5 years complimentary (no extra bed)",
    "All applicable taxes"
  ],
  exclusions: [
    "Lunch & Dinner",
    "Entrance fees (Aurobindo Ashram donation, Museum, etc.)",
    "Auroville visit & Matrimandir viewing (needs prior pass)",
    "Airfare / Train fare",
    "Personal expenses: tips, laundry, beverages, shopping",
    "Any item not mentioned in Inclusions"
  ],
  notes: [
    "Pondicherry is known as 'The French Riviera of the East'",
    "Auroville Matrimandir inner chamber viewing requires prior online booking",
    "White Town & Promenade best enjoyed in the evening",
    "Best time to visit: October to March",
    "Standard check-in: 14:00 hrs | Check-out: 11:00 hrs"
  ]
},

   mysoreooty: {
  title: "MYSORE – OOTY HILL & HERITAGE TRAIL",
  heroImg: "https://images.unsplash.com/photo-1587474260584-0eec31f1e1b6?auto=format&fit=crop&w=1600&q=80",
  duration: "5 Days / 4 Nights",
  cost: "From ₹17,800 + 5% GST per person",
  itinerary: [
    "Day 01: Bangalore → Mysore (145 kms / 3 hrs)",
    "Arrival at Bangalore Airport/Railway Station → Warm welcome & drive to Mysore → Check-in hotel + Welcome drink → Afternoon sightseeing: Mysore Palace (illuminated in evening), Chamundi Hills, St. Philomena’s Church, Brindavan Gardens (musical fountain) → Overnight at Mysore",

    "Day 02: Mysore → Ooty via Mysore Zoo (140 kms / 4–5 hrs)",
    "After breakfast → Visit Mysore Zoo → Drive to Ooty through scenic Bandipur forest route → Check-in hotel + Welcome drink → Afternoon: Botanical Gardens, Ooty Lake, Rose Garden → Overnight at Ooty",

    "Day 03: Ooty Full Day Sightseeing",
    "After breakfast → Visit Doddabetta Peak (highest in Nilgiris), Pine Forest, Shooting Point, Tea Factory & Museum, Pykara Lake & Boat House → Evening free for shopping at Ooty market → Overnight at Ooty",

    "Day 04: Ooty → Coonoor Excursion",
    "After breakfast → Full day trip to Coonoor → Visit Sim’s Park, Lamb’s Rock, Dolphin’s Nose, Tea Gardens → Optional Toy Train ride (subject to availability) → Return to Ooty → Overnight at Ooty",

    "Day 05: Ooty → Bangalore Departure (280 kms / 7–8 hrs)",
    "After breakfast → Check-out → Drive back to Bangalore → Drop at Airport/Railway Station → Tour ends with evergreen memories"
  ],
  hotelTable: [
    { place: "Mysore", nights: "01 Night", standard: "Hotel Sandesh The Prince / Roopa Elite / Similar (3–4 Star)" },
    { place: "Ooty", nights: "03 Nights", standard: "Hotel Lakeview / Sinclairs Ooty / Darshan / Similar (3–4 Star)" }
  ],
  pricing: [
    { pax: "02 PAX (Standard)", cost: "₹22,500 per person + 5% GST" },
    { pax: "04 PAX (Standard)", cost: "₹17,800 per person + 5% GST" }
  ],
  inclusions: [
    "Accommodation on twin sharing in 3–4 Star category hotels",
    "Daily Buffet Breakfast",
    "All transfers & sightseeing by AC Sedan/Innova as per group size",
    "Vehicle at disposal as per itinerary",
    "Experienced driver + Driver allowance, toll, parking, night halt",
    "Meet & Greet with refreshment kit on arrival",
    "01 Mineral Water Bottle + Snacks Box on arrival day",
    "Cab with Customized Agent logo",
    "Child below 5 years complimentary (no extra bed)",
    "All applicable taxes"
  ],
  exclusions: [
    "Lunch & Dinner",
    "Entrance fees (Mysore Palace ₹70, Botanical Garden, Pykara Boat, Toy Train, etc.)",
    "Toy Train tickets (Ooty–Coonoor)",
    "Airfare / Train fare",
    "Personal expenses: tips, laundry, shopping, beverages",
    "Any item not mentioned in Inclusions"
  ],
  notes: [
    "Mysore Palace illumination: Sunday & public holidays only",
    "Ooty Lake boating & Toy Train subject to weather & availability",
    "Best season: Throughout the year (Oct–June peak)",
    "Carry light woolens even in summer evenings",
    "Standard check-in: 14:00 hrs | Check-out: 11:00 hrs"
  ]
},

  mysorecoorg: {
  title: "MYSORE – COORG HERITAGE & COFFEE TRAIL",
  heroImg: "https://images.unsplash.com/photo-1518542331925-4a92b1c73d3c?auto=format&fit=crop&w=1600&q=80",
  duration: "5 Days / 4 Nights",
  cost: "From ₹12,800 + 5% GST per person",
  itinerary: [
    "Day 01: Bangalore → Mysore (145 kms / 3–4 hrs)",
    "Arrival at Bangalore Airport/Railway Station → Drive to Mysore → Check-in hotel → Afternoon visit: Mysore Maharaja’s Palace (illuminated in evening), Sri Chamarajendra Zoological Gardens (Mysore Zoo), St. Philomena’s Church → Overnight at Mysore",

    "Day 02: Mysore → Coorg (120 kms / 3 hrs)",
    "After breakfast → Check-out & scenic drive to Coorg → Enroute visit Brindavan Gardens (optional) → Check-in hotel → Evening free to relax amidst coffee plantations → Overnight at Coorg",

    "Day 03: Coorg Local Sightseeing",
    "After breakfast → Visit: Raja’s Seat (sunset point), Abbey Falls, Dubare Elephant Camp (bathing & feeding), Cauvery Nisargadhama, Golden Temple (Bylakuppe Tibetan Settlement) → Overnight at Coorg",

    "Day 04: Coorg Full Day Sightseeing",
    "After breakfast → Visit: Talacauvery (origin of river Cauvery), Bhagamandala (Triveni Sangam), Omkareshwara Temple, Madikeri Fort, Harangi Dam → Evening free for coffee estate walk → Overnight at Coorg",

    "Day 05: Coorg → Bangalore Departure (260 kms / 6–7 hrs)",
    "After breakfast → Check-out → Drive back to Bangalore → Drop at Airport/Railway Station → Tour ends with aromatic memories of Coorg"
  ],
  hotelTable: [
    { place: "Mysore", nights: "01 Night", standard: "Rio Meridian / Preeti International / Similar" },
    { place: "Coorg", nights: "03 Nights", standard: "Woodstock Resort / Palmera / Hill Crest Residency / Similar" }
  ],
  pricing: [
    { pax: "02 PAX (Standard)", cost: "₹21,000 per person + 5% GST" },
    { pax: "04 PAX (Standard)", cost: "₹12,800 per person + 5% GST" }
  ],
  inclusions: [
    "Accommodation on twin sharing basis in 3-Star category",
    "Daily Buffet Breakfast",
    "All transfers & sightseeing by AC Sedan/Innova as per group size",
    "Vehicle at disposal as per itinerary",
    "Experienced driver + Driver allowance, toll, parking, night halt",
    "Meet & Greet with refreshment kit on arrival",
    "01 Mineral Water Bottle + Snacks Box on arrival day",
    "Cab with Customized Agent logo",
    "Child below 5 years complimentary (no extra bed)",
    "All applicable taxes"
  ],
  exclusions: [
    "Lunch & Dinner",
    "Entrance fees & activity charges (Elephant Camp, boating, etc.)",
    "Jeep safari to Dubare/Talakaveri (if required)",
    "Airfare / Train fare",
    "Personal expenses: tips, laundry, beverages, shopping",
    "Any item not mentioned in Inclusions"
  ],
  notes: [
    "Coorg is known as the 'Scotland of India' & 'Kashmir of Karnataka'",
    "Best time: October to May",
    "Carry light woolens in winter (Dec–Feb)",
    "Mysore Palace illumination only on Sundays & public holidays",
    "Standard check-in: 14:00 hrs | Check-out: 11:00 hrs"
  ]
},
  };

  // === CLICK HANDLER: Open Full Page in New Tab ===
    document.querySelectorAll('.pkg-card .btn-primary').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const card = this.closest('.pkg-card');
      const cardTitleEl = card.querySelector('.card-title');
      const titleText = cardTitleEl ? cardTitleEl.textContent.trim() : '';

      // normalize helper - keeps only alphanumerics and lowercases
      const normalize = s => (s || '').toString().toLowerCase().replace(/[^a-z0-9]/g, '');

      const normTitle = normalize(titleText);

      // find package key robustly: match key name, full package title, or partial matches
      const key = Object.keys(packages).find(k => {
        const normKey = normalize(k);
        const normPkgTitle = normalize(packages[k].title || '');
        return normKey === normTitle
            || normPkgTitle === normTitle
            || normPkgTitle.includes(normTitle)
            || normTitle.includes(normKey);
      });

      if (!key || !packages[key]) {
        console.warn('Package not found for clicked card title:', titleText, 'normalized:', normTitle);
        alert("Details coming soon!");
        return;
      }

      openPackagePage(packages[key]);
    });
  });

  // === GENERATE & OPEN FULL HTML PAGE ===
  function openPackagePage(pkg) {
    // Special rendering for Vietnam
    if (pkg.title.includes("VIETNAM")) {
      const pricingTable = pkg.pricing.map(row => `
        <div class="border p-3 mb-3 rounded bg-light">
          <h6 class="fw-bold text-primary">${row.hotel}</h6>
          <table class="table table-sm table-bordered mt-2">
            <thead class="table-warning">
              <tr><th>No of Pax</th>${row.pax.map(p => `<th>${p}</th>`).join('')}</tr>
            </thead>
            <tbody>
              <tr><td>Package Cost (PP)</td>${row.cost.map(c => `<td>${c}/-</td>`).join('')}</tr>
            </tbody>
          </table>
        </div>
      `).join('');

      const hotelList = Object.keys(pkg.hotels).map(star => `
        <div class="col-md-4">
          <strong>${star}</strong><br>
          <small>Hanoi: ${pkg.hotels[star].hanoi}</small><br>
          <small>Da Nang: ${pkg.hotels[star].danang}</small>
        </div>
      `).join('');

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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #8e44ad; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: calc(50vh); }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0]}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="mt-5">
      <h4 class="text-success">Hotels Used</h4>
      <div class="row">
        ${hotelList}
      </div>
    </div>

    <div class="mt-5">
      <h4 class="text-primary">Package Pricing (Per Person)</h4>
      ${pricingTable}
      <div class="tax-note mt-3">
        <strong>Tax Note:</strong> ${pkg.taxNote}
      </div>
      <div class="mt-3">
        <h6>Child Policy:</h6>
        <ul>${pkg.childPolicy.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="mt-5 p-4 bg-light rounded">
      ${pkg.bookingTerms}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }

    // Special rendering for Jordan
    if (pkg.title.includes("JORDAN")) {
      const pricingTable = `
        <div class="border p-3 mb-3 rounded bg-light">
          <h6 class="fw-bold text-primary">RATES PER PERSON + 5% GST + 5% TCS</h6>
          <table class="table table-sm table-bordered mt-2">
            <thead class="table-warning">
              <tr><th>2 – 3 PAX</th><th>4 – 6 PAX</th></tr>
            </thead>
            <tbody>
              <tr><td>${pkg.pricing[0].cost}</td><td>${pkg.pricing[1].cost}</td></tr>
            </tbody>
          </table>
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #d4a373; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: calc(50vh); }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0]}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="mt-5">
      <h4 class="text-primary">Package Pricing (Per Person)</h4>
      ${pricingTable}
      <div class="tax-note mt-3">
        <strong>Tax Note:</strong> ${pkg.taxNote}
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="mt-5 p-4 bg-light rounded">
      ${pkg.cancellation}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }

    // Special rendering for Nepal
    if (pkg.title.includes("NEPAL")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #28a745; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: calc(50vh); }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0]}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="mt-5">
      <h4 class="text-success">Hotel Details</h4>
      ${pkg.hotelTable}
    </div>

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Package Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Package Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="mt-5 p-4 bg-light rounded">
      ${pkg.terms}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
    // Special rendering for Rishikesh
    if (pkg.title.includes("RISHIKESH")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #fd7e14; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: calc(50vh); }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0]}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="mt-5">
      <h4 class="text-success">Hotel Options</h4>
      ${pkg.hotelTable}
    </div>

    <div class="mt-5">
      <h4 class="text-primary">Package Pricing (Per Person)</h4>
      ${pkg.pricingTable}
      <div class="tax-note mt-3">
        <strong>Note:</strong> ${pkg.note}
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
    // === TARKARLI RENDERING ===
    if (pkg.title.includes("TARKARLI")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #0077be; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: calc(50vh); }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0]}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Get Quote</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }

    // === AYODHYA RENDERING ===
    if (pkg.title.includes("AYODHYA")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #ff6b35; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: calc(50vh); }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4 text-primary">Hotel Details</h2>
    ${pkg.hotelTable}

    <h2 class="mt-5 mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0]}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="tax-note mt-4">
      <strong>Note:</strong> ${pkg.note}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
    // === VAISHNO DEVI RENDERING ===
    if (pkg.title.includes("VAISHNO")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #e74c3c; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; padding: 1rem; border-left: 5px solid #ffc107; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: calc(50vh); } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h4 class="text-success mb-3">Hotel Details</h4>
    ${pkg.hotelTable}

    <h2 class="mt-5 mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0] || `Day ${i+1}`}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
    

    // === SIKKIM RENDERING ===
    if (pkg.title.includes("SIKKIM") || pkg.title.includes("DARJEELING")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #27ae60; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #d4edda; padding: 1rem; border-left: 5px solid #28a745; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: calc(50vh); } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h4 class="text-success mb-3">Hotel Details</h4>
    ${pkg.hotelTable}

    <h2 class="mt-5 mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0] || `Day ${i+1}`}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="tax-note mt-4">
      <strong>Note:</strong> ${pkg.note}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
        // === MAHABALESHWAR RENDERING ===
    if (pkg.title.includes("MAHABALESHWAR")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #fd7e14; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: calc(50vh); } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>
  <!-- CONTENT -->
  <div class="container py-5">
    <h4 class="text-success mb-3">Hotel Details</h4>
    ${pkg.hotelTable}
    <h2 class="mt-5 mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0] || 'Day ' + (i+1)}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
        // === GANPATIPHULE RENDERING ===
    if (pkg.title.includes("GANPATIPHULE")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #0077be; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: calc(50vh); } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>
  <!-- CONTENT -->
  <div class="container py-5">
    <h4 class="text-success mb-3">Hotel Details</h4>
    ${pkg.hotelTable}
    <h2 class="mt-5 mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0] || 'Day ' + (i+1)}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
        // === BANGALORE → MYSORE-COORG-OOTY RENDERING ===
    if (pkg.title.includes("iternary of bangolre")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #17a2b8; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: calc(50vh); } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>
  <!-- CONTENT -->
  <div class="container py-5">
    <h4 class="text-success mb-3">Hotel Details</h4>
    ${pkg.hotelTable}
    <h2 class="mt-5 mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0] || 'Day ' + (i+1)}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
     if (pkg.title.includes("DUBAI CULTURAL ODYSSEY")) {
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #17a2b8; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: calc(50vh); } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">${pkg.cost}</p>
    </div>
  </header>
  <!-- CONTENT -->
  <div class="container py-5">
    <h4 class="text-success mb-3">Hotel Details</h4>
    ${pkg.hotelTable}
    <h2 class="mt-5 mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5 class="text-danger">${day.split(':')[0] || 'Day ' + (i+1)}</h5>
        <p class="mb-0">${day.split(':')[1] || day}</p>
      </div>
    `).join('')}
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2">${i}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
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
      const newWindow = window.open('');
      newWindow.document.write(html);
      newWindow.document.close();
      return;
    }
    // Special rendering for CHARDHAM YATRA
if (pkg.title.includes("CHARDHAM")) {
  const hotelTable = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered table-striped align-middle">
        <thead class="table-warning text-dark">
          <tr>
            <th>DESTINATION</th>
            <th>HOTELS</th>
            <th>NO. OF NIGHT</th>
            <th>MEAL PLAN</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold">${row.destination}</td>
              <td>${row.hotel}</td>
              <td class="text-center">${row.nights}</td>
              <td>${row.meal}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingTable = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered">
        <thead class="table-success">
          <tr>
            <th>2 PAX</th>
            <th>4 PAX</th>
            <th>6 PAX</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-primary fw-bold">
            <td>₹56,000 PER PERSON</td>
            <td>₹47,000 PER PERSON</td>
            <td>₹38,000 PER PERSON</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-light">
            <td colspan="3" class="text-center fst-italic">5 % GST</td>
          </tr>
        </tfoot>
      </table>
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
    .hero { 
      height: 60vh; min-height:320px; 
      background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), 
                  url('${pkg.heroImg}') center/cover no-repeat fixed; 
      color: white; display: flex; align-items: center; 
    }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.7); }
    .itinerary-day { 
      background: white; padding: 1.5rem; 
      border-left: 5px solid #d35400; border-radius: 8px; 
      margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); 
    }
    .itinerary-day h5 { color: #c0392b; }
    .tax-note { background: #fff3cd; border-left: 5px solid #ffc107; padding: 1rem; font-weight: 500; }
    .note-box { background: #e8f4f8; border-left: 5px solid #3498db; padding: 1rem; font-size: 0.95rem; }
    .highlight { background: #fff8e1; padding: 0.5rem 1rem; border-radius: 6px; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: 50vh; }
      .table-responsive { font-size: 0.9rem; }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">From ₹38,000 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    
    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation Details</h4>
      ${hotelTable}
    </div>

    <!-- PRICING -->
    <div class="mt-5">
      <h4 class="text-primary">Package Cost (Per Person)</h4>
      ${pricingTable}
      <div class="tax-note mt-3">
        <strong>Important:</strong> 5% GST applicable on total billing. <br>
        Helicopter for Kedarnath, Pony/Doli for Yamunotri & Kedarnath trek available at own cost.
      </div>
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5">
      <div class="note-box">
        <strong>Travel Notes:</strong><br>
        ${pkg.notes.map(n => `• ${n}<br>`).join('')}
      </div>
    </div>

    <!-- BOOKING TERMS -->
    <div class="mt-5 p-4 bg-light rounded border">
      <h5 class="text-primary mb-3">Booking & Travel Guidelines</h5>
      <ul class="mb-0">
        <li>Advance booking recommended for <strong>Helicopter to Kedarnath</strong> (Phata/Sirsi/Guptkashi).</li>
        <li><strong>Trek to Yamunotri (6 km)</strong> and <strong>Kedarnath (14 km)</strong> – Horse/Palakhi available at own cost.</li>
        <li>Vehicle AC operational only in plains; switched off in hilly terrain.</li>
        <li>Standard check-in: 14:00 hrs | Check-out: 10:00 hrs.</li>
        <li>Carry valid ID proof, warm clothing, and medicines.</li>
      </ul>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-warning text-white shadow">Book Your Yatra Now</a>
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

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for KASHMIR VALLEY CULTURE
if (pkg.title.includes("KASHMIR")) {
  const hotelTable = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered table-striped align-middle">
        <thead class="table-info text-dark">
          <tr>
            <th>CITY</th>
            <th>HOTEL NAME</th>
            <th>NO. OF NIGHT</th>
            <th>MEAL PLAN</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-primary">${row.city}</td>
              <td><small>${row.hotel.replace(/ \/ /g, '<br>')}</small></td>
              <td class="text-center">${row.nights}</td>
              <td>${row.meal}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingBanner = `
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <div class="p-3 bg-gradient text-white rounded shadow" style="background: linear-gradient(135deg, #ff7e5f, #feb47b);">
          <h5 class="mb-1">MIN 2 PAX</h5>
          <h4 class="fw-bold">₹30,000 PER PERSON + 5% GST</h4>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-3 bg-gradient text-white rounded shadow" style="background: linear-gradient(135deg, #6a11cb, #2575fc);">
          <h5 class="mb-1">MIN 4 PAX</h5>
          <h4 class="fw-bold">₹25,000 PER PERSON + 5% GST</h4>
        </div>
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
    .hero { 
      height: 60vh; min-height:320px; 
      background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), 
                  url('${pkg.heroImg}') center/cover no-repeat fixed; 
      color: white; display: flex; align-items: center; 
    }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.8); }
    .itinerary-day { 
      background: white; padding: 1.5rem; 
      border-left: 5px solid #e67e22; border-radius: 8px; 
      margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); 
    }
    .itinerary-day h5 { color: #d35400; }
    .highlight { background: #fff3e0; padding: 1rem; border-radius: 8px; border-left: 4px solid #f39c12; }
    .houseboat-icon { color: #e67e22; font-size: 1.3rem; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: 50vh; }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">Heaven on Earth</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- PRICING BANNERS -->
  <!-- PRICING BANNERS -->
<div class="mt-5">
  <h4 class="text-success">Package Cost (Per Person)</h4>
  <div class="row g-3">
    ${pkg.pricing.map((price, index) => `
      <div class="col-md-6">
        <div class="p-3 rounded shadow text-white fw-bold text-center" 
             style="background: linear-gradient(135deg, ${index === 0 ? '#ff7e5f, #feb47b' : '#6a11cb, #2575fc'});">
          <h5 class="mb-1">${price.pax}</h5>
          <h4 class="mb-0">${price.cost}</h4>
        </div>
      </div>
    `).join('')}
  </div>
</div>

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-primary">Accommodation & Meal Plan</h4>
      ${hotelTable}
    </div>

    <!-- HOUSEBOAT HIGHLIGHT -->
    <div class="highlight mt-4">
      <p class="mb-0">
        <i class="fas fa-home houseboat-icon"></i> 
        <strong>Deluxe Houseboat Stay Included</strong> on Day 05 with heater, attached bath & all meals.
      </p>
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 p-4 bg-light rounded border">
      <h5 class="text-primary mb-3">Important Notes</h5>
      <ul class="mb-0">
        ${pkg.notes.map(n => `<li>${n}</li>`).join('')}
      </ul>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-danger text-white shadow">Book Kashmir Now</a>
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

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for GOLDEN TRIANGLE
if (pkg.title.includes("GOLDEN TRIANGLE")) {
  const pricingTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered table-striped align-middle text-center">
        <thead class="table-warning">
          <tr>
            <th>NO OF PAX<br>(COST PER PERSON)</th>
            <th>Budget (2*)<br>(CP)</th>
            <th>Deluxe (3*)<br>(CP)</th>
            <th>Luxury (4*)<br>(CP)</th>
            <th>Premium (5*)<br>(CP)</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.pricingTable.map(row => `
            <tr>
              <td class="fw-bold">${row.pax}</td>
              <td>₹${row.budget}</td>
              <td>₹${row.deluxe}</td>
              <td>₹${row.luxury}</td>
              <td>${row.premium}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const hotelTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered align-middle">
        <thead class="table-primary">
          <tr>
            <th rowspan="2" class="align-middle">DESTINATIONS</th>
            <th colspan="4" class="text-center">ACCOMMODATION</th>
          </tr>
          <tr>
            <th>Budget (2*)</th>
            <th>Deluxe (3*)</th>
            <th>Luxury (4*)</th>
            <th>Premium (5*)</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-primary align-middle">${row.destination}</td>
              <td><small>${row.budget.replace(/ \/ /g, '<br>')}</small></td>
              <td><small>${row.deluxe.replace(/ \/ /g, '<br>')}</small></td>
              <td><small>${row.luxury.replace(/ \/ /g, '<br>')}</small></td>
              <td><small>${row.premium.replace(/ \/ /g, '<br>')}</small></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
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
    .hero { 
      height: 60vh; min-height:320px; 
      background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), 
                  url('${pkg.heroImg}') center/cover no-repeat fixed; 
      color: white; display: flex; align-items: center; 
    }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.8); }
    .itinerary-day { 
      background: white; padding: 1.5rem; 
      border-left: 5px solid #c19a6b; border-radius: 8px; 
      margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); 
    }
    .itinerary-day h5 { color: #b8860b; }
    .highlight { background: #fdfd96; padding: 1rem; border-radius: 8px; border-left: 4px solid #ffd700; }
    .taj-icon { color: #d4a373; font-size: 1.5rem; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: 50vh; }
      table { font-size: 0.85rem; }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration} • Delhi | Agra | Jaipur</p>
      <p class="h4 text-warning">From ₹17,900 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- PRICING TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Package Pricing (Per Person)</h4>
      ${pricingTableHTML}
    </div>

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-primary">Accommodation Options</h4>
      ${hotelTableHTML}
    </div>

    <!-- TAJ HIGHLIGHT -->
    <div class="highlight mt-4 text-center">
      <p class="mb-0">
        <i class="fas fa-monument taj-icon"></i> 
        <strong>Taj Mahal Visit Included</strong> • Closed on Fridays
      </p>
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 p-4 bg-light rounded border">
      <h5 class="text-primary mb-3">Important Notes</h5>
      <ul class="mb-0">
        ${pkg.notes.map(n => `<li>${n}</li>`).join('')}
      </ul>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-warning text-dark shadow">Book Golden Triangle Now</a>
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

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for CALICUT – WAYANAD
if (pkg.title.includes("CALICUT") || pkg.title.includes("WAYANAD")) {

  const hotelTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-info">
          <tr>
            <th>PLACES</th>
            <th>NIGHTS</th>
            <th>STANDARD { 3 Star }</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-success">${row.place}</td>
              <td>${row.nights}</td>
              <td>${row.standard}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingCards = `
    <div class="row g-3">
      ${pkg.pricing.map((p, i) => `
        <div class="col-md-6">
          <div class="p-4 rounded shadow text-white text-center fw-bold" 
               style="background: linear-gradient(135deg, ${i===0 ? '#11998e, #38ef7d' : '#8E2DE2, #4A00E0'});">
            <h5>${p.pax}</h5>
            <h4 class="mb-0">${p.cost}</h4>
          </div>
        </div>
      `).join('')}
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.8); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #27ae60; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .itinerary-day h5 { color: #1e8449; }
    .highlight { background: #e8f5e8; padding: 1rem; border-radius: 8px; border-left: 4px solid #27ae60; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: 50vh; } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h4 text-warning">From ₹15,800 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation (Standard 3-Star)</h4>
      ${hotelTableHTML}
    </div>

    <!-- PRICING -->
    <div class="mt-5">
      <h4 class="text-primary">Package Cost (Per Person)</h4>
      ${pricingCards}
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 highlight">
      <strong>Important Notes:</strong><br>
      ${pkg.notes.map(n => `• ${n}<br>`).join('')}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-success text-white shadow">Book Kerala Trail Now</a>
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

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for CHENNAI – MAHABALIPURAM
if (pkg.title.includes("CHENNAI") || pkg.title.includes("MAHABALIPURAM")) {

  const hotelTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-info">
          <tr>
            <th>PLACES</th>
            <th>NIGHTS</th>
            <th>STANDARD (3-Star)</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-primary">${row.place}</td>
              <td>${row.nights}</td>
              <td>${row.standard}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingCards = `
    <div class="row g-3">
      ${pkg.pricing.map((p, i) => `
        <div class="col-md-6">
          <div class="p-4 rounded shadow text-white text-center fw-bold" 
               style="background: linear-gradient(135deg, ${i===0 ? '#FF512F, #DD2476' : '#1A2A6C, #B21F1F'});">
            <h5>${p.pax}</h5>
            <h4 class="mb-0">${p.cost}</h4>
          </div>
        </div>
      `).join('')}
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.8); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #e74c3c; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .itinerary-day h5 { color: #c0392b; }
    .highlight { background: #fdf2e9; padding: 1rem; border-radius: 8px; border-left: 4px solid #e67e22; }
    .shore-temple { color: #d35400; font-size: 1.5rem; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: 50vh; } }
  </style>
</head>
<body>

  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
    <div class="container">
      <a class="navbar-brand fw-bold" href="cultural.html">DREAM</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Tours</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="luxuary.html">Luxury</a></li>
              <li><a class="dropdown-item" href="honeymoon.html">Honeymoon</a></li>
              <li><a class="dropdown-item" href="cultural.html">Cultural</a></li>
              <li><a class="dropdown-item" href="relax.html">Relax</a></li>
              <li><a class="dropdown-item" href="adventure.html">Adventure</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="clients.html">Clients</a></li>
          <li class="nav-item"><a href="loginform.html" class="nav-link btn btn-danger text-white px-4">Start Journey</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- HERO -->
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration} • UNESCO Shore Temple</p>
      <p class="h4 text-warning">From ₹10,500 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation (Standard 3-Star)</h4>
      ${hotelTableHTML}
    </div>

    <!-- PRICING -->
    <div class="mt-5">
      <h4 class="text-primary">Package Cost (Per Person)</h4>
      ${pricingCards}
    </div>

    <!-- SHORE TEMPLE HIGHLIGHT -->
    <div class="highlight text-center mt-4">
      <p class="mb-0">
        <i class="fas fa-monument shore-temple"></i> 
        <strong>UNESCO World Heritage Shore Temple Included</strong>
      </p>
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 highlight">
      <strong>Important Notes:</strong><br>
      ${pkg.notes.map(n => `• ${n}<br>`).join('')}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-danger text-white shadow">Book Tamil Nadu Trail Now</a>
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

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for MADURAI – RAMESWARAM
if (pkg.title.includes("MADURAI") || pkg.title.includes("RAMESWARAM") || pkg.title.includes("RAMESWAR")) {

  const hotelTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-warning">
          <tr>
            <th>PLACE</th>
            <th>NIGHTS</th>
            <th>STANDARD (3-Star)</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-danger">${row.place}</td>
              <td>${row.nights}</td>
              <td>${row.standard}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingCards = `
    <div class="row g-3">
      ${pkg.pricing.map((p, i) => `
        <div class="col-md-6">
          <div class="p-4 rounded shadow text-white text-center fw-bold" 
               style="background: linear-gradient(135deg, ${i===0 ? '#FF6B6B, #FF8E53' : '#4ECDC4, #1A535C'});">
            <h5>${p.pax}</h5>
            <h4 class="mb-0">${p.cost}</h4>
          </div>
        </div>
      `).join('')}
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.9); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #d4af37; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .itinerary-day h5 { color: #b8860b; }
    .highlight { background: #fff8e1; padding: 1rem; border-radius: 8px; border-left: 4px solid #ffc107; text-align: center; }
    .temple-icon { color: #f39c12; font-size: 1.8rem; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: 50vh; } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration} • Char Dham • 12 Jyotirlinga</p>
      <p class="h4 text-warning">From ₹7,800 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation (Standard 3-Star)</h4>
      ${hotelTableHTML}
    </div>

    <!-- PRICING -->
    <div class="mt-5">
      <h4 class="text-primary">Package Cost (Per Person)</h4>
      ${pricingCards}
    </div>

    <!-- TEMPLE HIGHLIGHT -->
    <div class="highlight mt-4">
      <p class="mb-0">
        <i class="fas fa-praying-hands temple-icon"></i> 
        <strong>Ramanathaswamy Temple: One of the 12 Jyotirlingas & Char Dham</strong><br>
        Holy bath in 22 Theerthams (wells) • Floating Stone • Dhanushkodi (India-Sri Lanka border)
      </p>
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 highlight">
      <strong>Important Notes:</strong><br>
      ${pkg.notes.map(n => `• ${n}<br>`).join('')}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-warning text-dark shadow">Book Divine Yatra Now</a>
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

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for CHENNAI – PONDICHERRY
if (pkg.title.includes("PONDICHERRY") || pkg.title.includes("CHENNAI – PONDICHERRY")) {

  const hotelTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-info">
          <tr>
            <th>PLACE</th>
            <th>NIGHTS</th>
            <th>STANDARD (3-Star)</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-primary">${row.place}</td>
              <td>${row.nights}</td>
              <td>${row.standard}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingCards = `
    <div class="row g-3">
      ${pkg.pricing.map((p, i) => `
        <div class="col-md-6">
          <div class="p-4 rounded shadow text-white text-center fw-bold" 
               style="background: linear-gradient(135deg, ${i===0 ? '#667eea, #764ba2' : '#f093fb, #f5576c'});">
            <h5>${p.pax}</h5>
            <h4 class="mb-0">${p.cost}</h4>
          </div>
        </div>
      `).join('')}
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.9); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #9b59b6; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .itinerary-day h5 { color: #8e44ad; }
    .highlight { background: #f3e5f5; padding: 1rem; border-radius: 8px; border-left: 4px solid #9c27b0; text-align: center; }
    .french-icon { color: #8e44ad; font-size: 1.8rem; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: 50vh; } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration} • French Quarter • Aurobindo Ashram</p>
      <p class="h4 text-warning">From ₹7,800 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation (Standard 3-Star)</h4>
      ${hotelTableHTML}
    </div>

    <!-- PRICING -->
    <div class="mt-5">
      <h4 class="text-primary">Package Cost (Per Person)</h4>
      ${pricingCards}
    </div>

    <!-- FRENCH QUARTER HIGHLIGHT -->
    <div class="highlight mt-4">
      <p class="mb-0">
        <i class="fas fa-palette french-icon"></i> 
        <strong>Little France in India</strong><br>
        Colonial architecture • Yellow buildings • Café culture • Promenade Beach
      </p>
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 highlight">
      <strong>Travel Tips:</strong><br>
      ${pkg.notes.map(n => `• ${n}<br>`).join('')}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-gradient text-white shadow" 
         style="background: linear-gradient(135deg, #667eea, #764ba2);">Book Pondicherry Trail Now</a>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="site-footer bg-dark text-white py-5">
    <div class="container text-center">
      <p class="mb-0 small">© 2025 MAYYRA INFOTECH. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for MYSORE – OOTY
if (pkg.title.includes("MYSORE") || pkg.title.includes("OOTY")) {

  const hotelTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-success">
          <tr>
            <th>PLACE</th>
            <th>NIGHTS</th>
            <th>STANDARD (3–4 Star)</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-success">${row.place}</td>
              <td>${row.nights}</td>
              <td>${row.standard}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingCards = `
    <div class="row g-3">
      ${pkg.pricing.map((p, i) => `
        <div class="col-md-6">
          <div class="p-4 rounded shadow text-white text-center fw-bold" 
               style="background: linear-gradient(135deg, ${i===0 ? '#56ab2f, #a8e6cf' : '#00c9ff, #92fe9d'});">
            <h5>${p.pax}</h5>
            <h4 class="mb-0">${p.cost}</h4>
          </div>
        </div>
      `).join('')}
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.9); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #27ae60; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    .itinerary-day h5 { color: #1e8449; }
    .highlight { background: #e8f5e8; padding: 1rem; border-radius: 8px; border-left: 4px solid #27ae60; text-align: center; }
    .tea-icon { color: #27ae60; font-size: 1.8rem; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: 50vh; } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration} • Queen of Hills • Royal Heritage</p>
      <p class="h4 text-warning">From ₹17,800 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation (3–4 Star)</h4>
      ${hotelTableHTML}
    </div>

    <!-- PRICING -->
    <div class="mt-5">
      <h4 class="text-primary">Package Cost (Per Person)</h4>
      ${pricingCards}
    </div>

    <!-- TEA ESTATE HIGHLIGHT -->
    <div class="highlight mt-4">
      <p class="mb-0">
        <i class="fas fa-leaf tea-icon"></i> 
        <strong>Nilgiri Hills & Tea Gardens</strong><br>
        Doddabetta Peak • Toy Train • Mysore Palace Illumination • Pykara Lake
      </p>
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 highlight">
      <strong>Important Notes:</strong><br>
      ${pkg.notes.map(n => `• ${n}<br>`).join('')}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-success text-white shadow">Book Mysore–Ooty Now</a>
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

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}
// Special rendering for MYSORE – COORG
if (pkg.title.includes("MYSORE") && pkg.title.includes("COORG")) {

  const hotelTableHTML = `
    <div class="table-responsive mb-4">
      <table class="table table-bordered align-middle text-center">
        <thead class="table-success">
          <tr>
            <th>PLACES</th>
            <th>NIGHTS</th>
            <th>STANDARD { 3 Star }</th>
          </tr>
        </thead>
        <tbody>
          ${pkg.hotelTable.map(row => `
            <tr>
              <td class="fw-bold text-success">${row.place}</td>
              <td>${row.nights}</td>
              <td>${row.standard}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;

  const pricingCards = `
    <div class="row g-3">
      ${pkg.pricing.map((p, i) => `
        <div class="col-md-6">
          <div class="p-4 rounded shadow text-white text-center fw-bold" 
               style="background: linear-gradient(135deg, ${i===0 ? '#654ea3, #eaafc8' : '#11998e, #38ef7d'});">
            <h5>${p.pax}</h5>
            <h4 class="mb-0">${p.cost}</h4>
          </div>
        </div>
      `).join('')}
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.9); }
    /* Remove hover effect on itinerary items for Mysore-Coorg only */
    .itinerary-day { 
      background: white; padding: 1.5rem; border-left: 5px solid #27ae60; border-radius: 8px; margin-bottom: 1rem; 
      box-shadow: 0 6px 18px rgba(0,0,0,0.06);
      transition: none !important; /* disable transform/box-shadow on hover */
    }
    .itinerary-day:hover { transform: none !important; box-shadow: 0 6px 18px rgba(0,0,0,0.06) !important; }
    .itinerary-day h5 { color: #1e8449; }
    .highlight { background: #e8f5e8; padding: 1rem; border-radius: 8px; border-left: 4px solid #27ae60; text-align: center; }
    .tea-icon { color: #27ae60; font-size: 1.8rem; }
    footer { background: #2c3e50; color: #ddd; }
    @media (max-width:768px){ .hero { background-attachment: scroll; height: 50vh; } }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration} • Scotland of India • Coffee Plantations</p>
      <p class="h4 text-warning">From ₹12,800 per person + 5% GST</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">

    <!-- ITINERARY -->
    <h2 class="mb-4 text-primary">Detailed Itinerary</h2>
    ${pkg.itinerary.map(day => `
      <div class="itinerary-day">
        <h5>${day.split(':')[0].trim()}</h5>
        <p class="mb-0">${day.split(':').slice(1).join(':').trim()}</p>
      </div>
    `).join('')}

    <!-- HOTEL TABLE -->
    <div class="mt-5">
      <h4 class="text-success">Accommodation (Standard 3-Star)</h4>
      ${hotelTableHTML}
    </div>

    <!-- PRICING -->
    <div class="mt-5">
      <h4 class="text-primary">Package Cost (Per Person)</h4>
      ${pricingCards}
    </div>

    <!-- COFFEE HIGHLIGHT -->
    <div class="highlight mt-4">
      <i class="fas fa-mug-hot coffee-icon"></i><br><br>
      <strong>Coorg – The Land of Coffee & Warriors</strong><br>
      Abbey Falls • Raja’s Seat • Golden Temple • Talacauvery • Elephant Camp
    </div>

    <!-- INCLUSIONS & EXCLUSIONS -->
    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- NOTES -->
    <div class="mt-5 highlight">
      <strong>Important Notes:</strong><br>
      ${pkg.notes.map(n => `• ${n}<br>`).join('')}
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-success text-white shadow">Book Coorg Coffee Trail Now</a>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="site-footer bg-dark text-white py-5">
    <div class="container text-center">
      <p class="mb-0 small">© 2025 MAYYRA INFOTECH. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  const newWindow = window.open('');
  newWindow.document.write(html);
  newWindow.document.close();
  return;
}

    // === DEFAULT RENDERING FOR OTHER PACKAGES ===
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
    .hero { height: 60vh; min-height:320px; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${pkg.heroImg}') center/cover no-repeat fixed; color: white; display: flex; align-items: center; }
    .hero h1 { font-family: 'Playfair Display', serif; text-shadow: 0 6px 20px rgba(0,0,0,0.6); }
    .itinerary-day { background: white; padding: 1.5rem; border-left: 5px solid #8e44ad; border-radius: 8px; margin-bottom: 1rem; box-shadow: 0 6px 18px rgba(0,0,0,0.06); }
    footer { background: #343a40; color: #ddd; }
    @media (max-width:768px){
      .hero { background-attachment: scroll; height: calc(50vh); }
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
  <header class="hero text-center">
    <div class="container">
      <h1 class="display-4 fw-bold">${pkg.title}</h1>
      <p class="lead">${pkg.duration}</p>
      <p class="h3 text-warning">${pkg.cost}</p>
    </div>
  </header>

  <!-- CONTENT -->
  <div class="container py-5">
    <h2 class="mb-4">Itinerary</h2>
    ${pkg.itinerary.map((day, i) => `
      <div class="itinerary-day">
        <h5>${day}</h5>
      </div>
    `).join('')}

    <div class="row mt-5">
      <div class="col-md-6">
        <h4 class="text-success">Inclusions</h4>
        <ul class="list-unstyled">
          ${pkg.inclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
      <div class="col-md-6">
        <h4 class="text-danger">Exclusions</h4>
        <ul class="list-unstyled">
          ${pkg.exclusions.map(i => `<li class="mb-2"> ${i}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="loginform.html" class="btn btn-lg btn-primary">Book Now</a>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="site-footer bg-dark text-white py-5">
        <div class="container">
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
      var nav = document.querySelector('.navbar');
      var navH = nav ? nav.offsetHeight : 70;
      var  = document.querySelector('.hero');
      if (!hero) return;
      var target = Math.max(window.innerHeight - navH, 320);
      hero.style.height = target + 'px';
    }
    window.addEventListener('resize', setHeroHeight);
    document.addEventListener('DOMContentLoaded', setHeroHeight);
    setTimeout(setHeroHeight, 200);
  </script>
</body>
</html>`;

    const newWindow = window.open('');
    newWindow.document.write(html);
    newWindow.document.close();
  }
});
