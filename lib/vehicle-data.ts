// lib/vehicle-data.ts
export type Vehicle = {
  slug: string
  name: string
  price: string
  description: string
  longDescription: string
  specs: string[]
  includes: string[]
  idealFor: string[]
  image: string
  heroImage: string
  gallery: string[]
  pickupLocations: string[]
  technical: {
    engine: string
    transmission: string
    fuel: string
    tank: string
    range: string
    groundClearance: string
    tires: string
    suspension: string
    powerOutput: string
    torque: string
    seatingCapacity: string
    dimensions: string
  }
  comfortFeatures: {
    climateControl: string
    seating: string
    audioSystem: string
    chargingPorts: string
    storage: string[]
    other: string[]
  }
  accessibility?: {
    liftCapacity: string
    doorWidth: string
    ramp: boolean
    tieDowns: boolean
    interiorHeight: string
    floorType: string
    additionalFeatures: string[]
  }
  photography?: {
    roofType: string
    cameraMounts: string[]
    powerSupply: string
    silentMode: boolean
    shootingPositions: string[]
    additionalEquipment: string[]
  }
  faqs: { question: string; answer: string }[]
  relatedVehicles: string[]
  bookingNote?: string
  recommendedFor: string[]
  notRecommendedFor: string[]
}

export const vehicles: Vehicle[] = [
  {
    slug: "safari-landcruiser",
    name: "Safari Landcruiser 4x4",
    price: "$180 – $220 per day",
    description:
      "The legendary Toyota Landcruiser J200 series, specifically modified for African safaris. Featuring a custom pop-up roof for panoramic game viewing, heavy-duty 4WD system, and integrated cooling system for optimal comfort in Kenya's diverse ecosystems.",
    longDescription: `
      <p>The <strong>Toyota Land Cruiser 4x4 Safari Edition</strong> represents the pinnacle of African safari vehicle engineering. Based on the iconic J200 series, this vehicle has been meticulously modified over three decades of safari operation to perfectly balance comfort, capability, and wildlife viewing potential.</p>
      
      <p>Our fleet features <strong>specially reinforced chassis</strong> with additional cross-members to handle Kenya's most challenging terrain, from the black cotton soil of Maasai Mara to the rocky escarpments of Samburu. The vehicle's <strong>hydraulic pop-up roof</strong> provides a full 1.8-meter standing height, allowing all passengers to simultaneously view wildlife from a safe, elevated position. The roof mechanism features silent operation and can be raised or lowered in under 30 seconds.</p>
      
      <p>Power comes from Toyota's legendary <strong>4.5L V8 Twin Turbo Diesel engine</strong>, producing 650Nm of torque at just 1600 RPM – perfect for slow-speed game viewing and steep inclines. The vehicle maintains full 4WD capability with locking center and rear differentials, allowing it to navigate river crossings, muddy tracks, and sandy riverbanks with confidence.</p>
      
      <p>Inside, passengers enjoy <strong>high-back orthopedic seats</strong> with memory foam padding, essential for long game drives. The integrated <strong>300-liter National Geographic-certified cooler box</strong> maintains temperatures between 0-4°C for up to 48 hours without ice replenishment. Multiple charging stations include USB-C fast charging, 12V accessory ports, and 220V inverters for camera equipment.</p>
      
      <p>Each vehicle is accompanied by a <strong>Kenya Professional Safari Guides Association (KPSGA) Silver-rated guide</strong> with extensive knowledge of animal behavior, photography positioning, and conservation areas. Our guides receive monthly training updates on wildlife movements and photographic opportunities.</p>
    `,
    specs: [
      "Maximum 6 passengers (5 + driver) for optimal viewing",
      "Hydraulic pop-up roof with 1.8m standing clearance",
      "Permanent 4WD with low-range transfer case",
      "300L National Geographic-certified cooler/fridge system",
      "Leica Ultravid 10x42 binoculars (x2)",
      "Dual-zone climate control with rear vents",
      "Kenyan wildlife field guides and birding books",
      "Advanced first aid kit with satellite communication",
      "Integrated fire suppression system",
      "Custom storage for camera gear and personal items",
    ],
    includes: [
      "Professional KPSGA Silver or Gold-rated driver-guide",
      "Unlimited mileage within safari circuit",
      "Comprehensive fuel coverage (diesel)",
      "Daily professional vehicle cleaning and sanitization",
      "All park entry coordination and paperwork",
      "24/7 dedicated roadside assistance with 2-hour response",
      "Full comprehensive insurance with zero excess",
      "Satellite phone for emergency communications",
      "Cooler box stocked with complimentary water",
      "Safari briefing and wildlife checklist",
    ],
    idealFor: [
      "Classic photographic safaris",
      "Multi-generational family groups",
      "Serious birdwatching expeditions",
      "First-time safari visitors seeking authentic experience",
      "Conservation researchers and documentary teams",
    ],
    image: "/car-hire/safari-landcruiser.jpg",
    heroImage: "/car-hire/hero-landcruiser-mara.jpg",
    gallery: [
      "/car-hire/safari-landcruiser-interior.jpg",
      "/car-hire/safari-landcruiser-roof.jpg",
      "/car-hire/safari-landcruiser-mud.jpg",
      "/car-hire/safari-landcruiser-sunset.jpg",
      "/car-hire/safari-landcruiser-river.jpg",
    ],
    pickupLocations: [
      "Jomo Kenyatta International Airport (NBO)",
      "Wilson Airport (WIL) for domestic connections",
      "Maasai Mara airstrips (Keekorok, Serena, Musiara)",
      "Amboseli National Park airstrip",
      "Tsavo National Park gates",
      "Mombasa cruise terminal and airport",
      "Nairobi CBD hotels (with advance notice)",
    ],
    technical: {
      engine: "4.5L V8 Twin Turbo Diesel (1VD-FTV)",
      transmission: "5-speed automatic with manual shift mode",
      fuel: "Low-sulfur diesel (recommended)",
      tank: "180L primary + 40L auxiliary reserve",
      range: "1,200+ km (depending on terrain)",
      groundClearance: "285 mm (adjustable to 320 mm)",
      tires: "BF Goodrich All-Terrain T/A KO2 285/70R17",
      suspension: "Old Man Emu heavy-duty with air helper springs",
      powerOutput: "195 kW (261 hp) @ 3400 rpm",
      torque: "650 Nm @ 1600-2800 rpm",
      seatingCapacity: "6 persons maximum (including driver)",
      dimensions: "Length: 4950mm, Width: 1970mm, Height: 1945mm",
    },
    comfortFeatures: {
      climateControl: "Dual-zone automatic with rear vents and pollen filter",
      seating: "Orthopedic high-back seats with memory foam, individual armrests",
      audioSystem: "Bluetooth touchscreen with wildlife sound library",
      chargingPorts: "6x USB-C PD, 4x 12V sockets, 1x 220V 500W inverter",
      storage: [
        "Overhead camera gear compartments",
        "Under-seat secure storage",
        "Rear luggage area with tie-downs",
        "Cooler box access from interior",
      ],
      other: [
        "Acoustic insulation package",
        "Anti-glare windows",
        "Mosquito netting on all openings",
        "Individual reading lights",
        "Wi-Fi hotspot (where available)",
      ],
    },
    faqs: [
      {
        question: "Can I drive the Landcruiser myself during the safari?",
        answer:
          "No. All our safari vehicles operate with professional driver-guides for several reasons: Kenya National Park regulations require licensed guides for wildlife areas, insurance coverage is only valid with our certified drivers, and our guides' knowledge significantly enhances wildlife sightings and photographic opportunities. They are trained in defensive driving specific to wildlife encounters.",
      },
      {
        question: "Is the pop-up roof safe during predator encounters?",
        answer:
          "Absolutely. The roof structure is reinforced with steel framing and tested to withstand significant force. When raised, it creates a secure viewing platform that keeps all passengers inside the vehicle's protected envelope. Our guides are trained in predator behavior and maintain safe distances according to KWS guidelines.",
      },
      {
        question: "What happens if we encounter mechanical issues in remote areas?",
        answer:
          "All vehicles carry comprehensive spare parts kits, and our guides are trained in field repairs. We maintain a network of support vehicles across major parks with 2-hour maximum response time. Satellite communication ensures constant contact with our operations center.",
      },
      {
        question: "Can the vehicle accommodate children and infant seats?",
        answer:
          "Yes, we provide ISOFIX-compatible child seats upon request. The middle row features three-point seatbelts suitable for booster seats. Please notify us during booking about child requirements.",
      },
    ],
    relatedVehicles: ["accessible-safari-landcruiser", "safari-minivan", "photography-convertible"],
    bookingNote: "Minimum 3-day booking during peak season (July-October, December-January). Early booking recommended.",
    recommendedFor: [
      "Maasai Mara during migration season",
      "Amboseli elephant photography",
      "Tsavo wilderness exploration",
      "Samburu specialized species viewing",
    ],
    notRecommendedFor: [
      "Pure city-to-city transfers (we offer separate transfer vehicles)",
      "Large groups exceeding 6 persons",
      "Extreme off-road competitions",
    ],
  },
  {
    slug: "accessible-safari-landcruiser",
    name: "Accessible Safari Landcruiser",
    price: "$220 – $280 per day",
    description:
      "Kenya's premier wheelchair-accessible safari vehicle. Fully modified Toyota Landcruiser with hydraulic side lift, widened doorways, and accessible pop-up roof controls. Experience the African wilderness without compromise.",
    longDescription: `
      <p>Developed in partnership with <strong>Accessible Africa Initiative</strong> and <strong>Kenya Association for the Physically Disabled</strong>, our <strong>Accessible Safari Landcruiser</strong> represents a breakthrough in inclusive safari tourism. This is not merely an adapted vehicle but a purpose-built accessibility solution that maintains all the safari capabilities of our standard Landcruiser while ensuring dignity, comfort, and independence for travelers with mobility challenges.</p>
      
      <p>The vehicle features a <strong>German-engineered hydraulic side lift system</strong> with 300kg capacity, capable of handling powered wheelchairs and mobility scooters. The lift operates silently and includes emergency manual override. Doorways have been widened to 90cm with sliding mechanisms to facilitate smooth transfers.</p>
      
      <p>Inside, the floor has been <strong>lowered by 15cm</strong> without compromising ground clearance, thanks to custom suspension engineering. The front passenger seat is fully removable, allowing wheelchair users to occupy the prime photographic position. Four-point wheelchair restraint systems with quick-release mechanisms provide security during movement.</p>
      
      <p>The pop-up roof features <strong>electronic height adjustment</strong> controllable from wheelchair level, with viewing windows positioned for seated visibility. All controls are tactile and color-contrasted for visually impaired users. The vehicle includes an <strong>accessible washroom tent system</strong> that can be deployed at picnic sites.</p>
      
      <p>Our driver-guides complete <strong>intensive accessibility training</strong> through the Kenya Institute of Special Education, covering transfer assistance, equipment handling, and disability etiquette. They understand the unique requirements of safari travel for persons with disabilities.</p>
    `,
    specs: [
      "Configuration: 4 passengers + 1 wheelchair user",
      "Hydraulic side lift with 300kg capacity",
      "Widened sliding door (90cm clearance)",
      "Removable front passenger seat for prime viewing",
      "Lowered floor design (15cm reduction)",
      "Four-point wheelchair restraint system",
      "Accessible pop-up roof controls",
      "Tactile and color-contrasted interior labeling",
      "Accessible storage compartments",
      "Emergency manual lift override",
    ],
    includes: [
      "Accessibility-trained driver-guide (KISE certified)",
      "Wheelchair tie-downs and restraint systems",
      "Portable ramp for ground-level access",
      "Accessible washroom tent system",
      "Emergency medical kit with specialized supplies",
      "24/7 accessibility support hotline",
      "Complimentary mobility aid cleaning service",
      "Accessible accommodation coordination",
      "Medical equipment charging facilities",
      "Personal care attendant coordination (if required)",
    ],
    idealFor: [
      "Wheelchair users seeking full safari experience",
      "Seniors with mobility considerations",
      "Travelers using walking frames or mobility aids",
      "Families traveling with members with disabilities",
      "Accessibility-focused tour groups",
    ],
    image: "/car-hire/accessible-landcruiser.jpg",
    heroImage: "/car-hire/hero-accessible-lift.jpg",
    gallery: [
      "/car-hire/accessible-lift-operation.jpg",
      "/car-hire/accessible-interior-layout.jpg",
      "/car-hire/accessible-ramp-deployment.jpg",
      "/car-hire/accessible-roof-viewing.jpg",
      "/car-hire/accessible-group-safari.jpg",
    ],
    pickupLocations: [
      "Jomo Kenyatta International Airport (special assistance arrival)",
      "Wilson Airport (accessible terminal)",
      "Nairobi CBD hotels with accessible facilities",
      "Aiports with jet bridge facilities only",
      "Pre-arranged hospital or medical facility pickup",
    ],
    technical: {
      engine: "4.5L V8 Turbo Diesel with accessibility modifications",
      transmission: "5-speed automatic with smooth shift programming",
      fuel: "Diesel",
      tank: "180L (slightly reduced due to modifications)",
      range: "1,100+ km",
      groundClearance: "220 mm (maintained despite lowered floor)",
      tires: "Michelin LTX All-Season 275/65R18",
      suspension: "Custom air suspension with kneeling capability",
      powerOutput: "195 kW (261 hp)",
      torque: "650 Nm",
      seatingCapacity: "4 ambulatory passengers + 1 wheelchair",
      dimensions: "Same exterior dimensions with modified interior volume",
    },
    comfortFeatures: {
      climateControl: "Triple-zone climate control with enhanced rear ventilation",
      seating: "Ergonomic seats with extra lumbar support, removable front passenger seat",
      audioSystem: "Enhanced audio with hearing loop compatibility",
      chargingPorts: "Medical-grade charging ports, CPAP-compatible power",
      storage: [
        "Accessible overhead compartments",
        "Wheelchair accessory storage",
        "Medical equipment secure storage",
        "Cooler box with side access",
      ],
      other: [
        "Interior grab handles at multiple heights",
        "Non-slip flooring throughout",
        "Adjustable lighting for visual comfort",
        "Emergency communication system",
        "Privacy curtains for personal care",
      ],
    },
    accessibility: {
      liftCapacity: "300 kg (including powered chairs)",
      doorWidth: "90 cm sliding door",
      ramp: true,
      tieDowns: true,
      interiorHeight: "1.5m minimum throughout (increased at wheelchair position)",
      floorType: "Non-slip rubberized flooring with drainage",
      additionalFeatures: [
        "Automatic kneeling suspension",
        "Voice announcement system for operations",
        "Braille labeling on essential controls",
        "Emergency evacuation plan specific to vehicle",
        "Companion seat with swivel capability",
      ],
    },
    faqs: [
      {
        question: "Can the lift handle heavy powered wheelchairs with all-terrain tires?",
        answer:
          "Yes, the hydraulic system is rated for 300kg and tested with various wheelchair configurations including off-road models with larger tires. We recommend providing wheelchair specifications during booking for confirmation.",
      },
      {
        question: "Is medical oxygen equipment allowed and accommodated?",
        answer:
          "Absolutely. We have secure mounting points for oxygen tanks, and our electrical system can support concentrators. Please notify us of specific requirements so we can ensure proper installation and safety measures.",
      },
      {
        question: "Can a personal care attendant accompany the wheelchair user?",
        answer:
          "Yes, we can accommodate one personal care attendant in addition to the wheelchair user and other passengers. The attendant will have priority seating near the wheelchair position for assistance during transit.",
      },
      {
        question: "Are there accessible restroom facilities during game drives?",
        answer:
          "We provide an accessible portable toilet tent that can be deployed at approved picnic sites. Additionally, we coordinate with lodges that have accessible facilities along your route.",
      },
    ],
    relatedVehicles: ["safari-landcruiser", "safari-minivan"],
    bookingNote: "Requires 30-day advance booking for accessibility coordination. Medical equipment details must be provided 14 days prior.",
    recommendedFor: [
      "Accessible lodge circuits",
      "National parks with improved accessibility",
      "Birding from vehicle (excellent for seated viewing)",
      "Photography from stable platform",
    ],
    notRecommendedFor: [
      "Extreme off-road terrain beyond standard safari routes",
      "Areas without any accessible facilities",
      "Self-drive arrangements",
    ],
  },
  {
    slug: "photography-convertible",
    name: "Photography Convertible Vehicle",
    price: "$250 – $350 per day",
    description:
      "The ultimate wildlife photography platform. Full-convertible 4x4 with silent electric mode, professional camera mounting systems, and 360° unobstructed views. Designed in collaboration with world-renowned wildlife photographers.",
    longDescription: `
      <p>The <strong>Photography Convertible Vehicle</strong> represents the culmination of 15 years of collaboration with <strong>National Geographic Society</strong>, <strong>BBC Natural History Unit</strong>, and leading wildlife photographers including <strong>Frans Lanting</strong> and <strong>Art Wolfe</strong>. This vehicle was conceived from the ground up as a mobile photography studio for serious wildlife imagery.</p>
      
      <p>The revolutionary <strong>full-convertible roof system</strong> retracts completely in under 60 seconds, providing 360° sky-to-ground visibility with zero structural obstructions. Unlike traditional pop-up roofs, this system allows photographers to shoot from any angle, including straight overhead for bird photography or low angles for predator interactions.</p>
      
      <p>Power comes from a <strong>hybrid diesel-electric powertrain</strong> that enables <strong>silent approach mode</strong>. When activated, the vehicle operates on battery power alone, allowing photographers to approach skittish species like leopard or cheetah without engine noise disturbance. The system provides up to 2 hours of silent operation at game drive speeds.</p>
      
      <p>Integrated <strong>professional mounting systems</strong> include Arca-Swiss compatible plates, Manfrotto gimbal head stations, and Sachtler fluid head bases. Each photographer position features individually adjustable bean bag rests, monopods, and quick-release plates for rapid lens changes. The vehicle includes a <strong>climate-controlled camera vault</strong> with dehumidification to protect equipment during dust storms or rain.</p>
      
      <p>Our <strong>photographer-guides</strong> are not only wildlife experts but also accomplished photographers themselves, with credits in major publications. They understand composition, lighting, animal behavior prediction, and ethical photography practices.</p>
    `,
    specs: [
      "Maximum 5 photographers (4 + driver-guide)",
      "Full 360° convertible roof (60-second operation)",
      "Hybrid diesel-electric with silent approach mode",
      "Professional camera mounting systems at all positions",
      "Climate-controlled camera vault with dehumidifier",
      "2200W pure sine wave inverter system",
      "Dust-sealed equipment storage with RFID tracking",
      "Integrated Wacom tablet workstation",
      "Real-time weather and light monitoring system",
      "Backup generator and solar charging system",
    ],
    includes: [
      "Professional photographer-guide (published credits required)",
      "Full camera cleaning and maintenance station",
      "Portable 1000W power bank for location shoots",
      "Memory card backup station with RAID system",
      "Complete tripod, monopod, and bean bag selection",
      "Professional dust and rain protection covers",
      "Lightroom workstation with calibrated monitor",
      "Satellite internet for image transmission",
      "Drone launch and recovery platform (where permitted)",
      "Photography permit coordination and assistance",
    ],
    idealFor: [
      "Professional wildlife photographers and filmmakers",
      "Photo tour leaders and workshop instructors",
      "Documentary film production teams",
      "Stock photography agencies on assignment",
      "Advanced amateur photographers seeking professional results",
    ],
    image: "/car-hire/photography-vehicle.jpg",
    heroImage: "/car-hire/hero-photography-lion.jpg",
    gallery: [
      "/car-hire/photography-roof-operation.jpg",
      "/car-hire/photography-mounts-detail.jpg",
      "/car-hire/photography-silent-approach.jpg",
      "/car-hire/photography-camera-vault.jpg",
      "/car-hire/photography-sunset-shoot.jpg",
    ],
    pickupLocations: [
      "Wilson Airport (for equipment customs clearance)",
      "Nairobi professional photography warehouses",
      "Maasai Mara airstrips (with advance notice for equipment)",
      "Amboseli National Park",
      "Samburu and Laikipia conservancies",
      "Special arrangements for Lake Nakuru flamingo season",
    ],
    technical: {
      engine: "Hybrid 4.5L V8 Diesel + 48V electric motor system",
      transmission: "CVT with manual paddle shifters",
      fuel: "Diesel + Lithium-ion battery pack (48V, 15kWh)",
      tank: "150L diesel + electric range extension",
      range: "900 km (combined) + unlimited silent electric mode with solar recharge",
      groundClearance: "250 mm (adjustable hydraulic suspension)",
      tires: "Goodyear Wrangler Territory MT 285/70R17",
      suspension: "Fully adjustable hydraulic with stabilization mode",
      powerOutput: "Combined 220kW (295 hp)",
      torque: "750 Nm combined (electric instant torque)",
      seatingCapacity: "5 persons maximum for equipment space",
      dimensions: "Extended wheelbase for stability, custom width for tripod placement",
    },
    comfortFeatures: {
      climateControl: "Four-zone with photographic equipment temperature management",
      seating: "Swiveling photographer seats with lumbar support and armrests",
      audioSystem: "Professional monitoring system for filmmakers",
      chargingPorts: "12x USB-C PD 100W, 6x 220V outlets, dedicated battery chargers",
      storage: [
        "Climate-controlled camera vault with individual lockers",
        "Lens tube storage systems",
        "Tripod and gimbal dedicated compartments",
        "Field workstation with laptop mounting",
      ],
      other: [
        "Anti-vibration platform for time-lapse photography",
        "Polarized glass for specific shooting conditions",
        "Integrated color temperature lighting",
        "Real-time GPS tracking of sun position",
        "Weather station with hyper-local forecasting",
      ],
    },
    photography: {
      roofType: "Full convertible with powered retraction",
      cameraMounts: [
        "Manfrotto 504X Pro gimbal stations",
        "Sachtler flowtech75 tripod bases",
        "Arca-Swiss quick-release plates at all positions",
        "Custom bean bag systems with multiple fill options",
        "Overhead rigging for remote cameras",
      ],
      powerSupply: "2200W pure sine wave inverter + 48V DC system + solar panels",
      silentMode: true,
      shootingPositions: [
        "Standard seated position",
        "Standing platform with chest support",
        "Low-angle prone position",
        "Overhead rigging position",
        "Remote camera deployment points",
      ],
      additionalEquipment: [
        "Professional sensor cleaning station",
        "Color calibration tools",
        "Neutral density filter sets",
        "Teleprompter system for presenters",
        "Sound recording booth attachment",
      ],
    },
    faqs: [
      {
        question: "Can I mount my own custom camera rigs and gimbals?",
        answer:
          "Yes, we provide universal mounting plates compatible with all major systems including DJI Ronin, Zhiyun Crane, Moza, and Freefly. Our guides are trained in secure mounting of custom rigs. We recommend sending specifications in advance for compatibility verification.",
      },
      {
        question: "How effective is the silent electric mode for approaching wildlife?",
        answer:
          "Extremely effective. The electric motors produce less than 45dB at 5 meters, allowing approach to within 20 meters of most species without disturbance. We've successfully photographed leopard, cheetah, and rare antelope species using this system that would typically flee from conventional vehicles.",
      },
      {
        question: "Is there protection from dust during the dry season?",
        answer:
          "Yes. The climate-controlled camera vault maintains positive pressure and HEPA filtration. During shooting, we provide professional rain/dust covers for all equipment. Our guides are trained in rapid equipment changes to minimize exposure.",
      },
      {
        question: "Can the vehicle accommodate large telephoto lenses (600mm f/4 and larger)?",
        answer:
          "Absolutely. We have specific mounting systems for super-telephoto lenses with integrated vibration reduction. The vehicle stabilization system includes active cancellation for sharp images at slow shutter speeds.",
      },
    ],
    relatedVehicles: ["safari-landcruiser"],
    bookingNote: "Professional photography credentials may be required. Equipment lists must be provided 30 days in advance for proper mounting preparation.",
    recommendedFor: [
      "Predator photography in Maasai Mara",
      "Bird photography in specialized reserves",
      "Documentary film production",
      "Night photography with specialized equipment",
    ],
    notRecommendedFor: [
      "General sightseeing without photographic intent",
      "Large groups (limited to 4 photographers maximum)",
      "Areas with extreme dust storms without prior preparation",
    ],
  },
  {
    slug: "safari-minivan",
    name: "Safari Minivan (Pop-up Roof)",
    price: "$120 – $160 per day",
    description:
      "Economical and versatile 7-seater safari vehicle perfect for budget-conscious travelers, large families, and educational groups. Toyota Hiace-based with pop-up roof, reliable performance, and excellent value for maintained park circuits.",
    longDescription: `
      <p>The <strong>Safari Minivan</strong> is Kenya's most popular safari vehicle for good reason: it delivers exceptional value without compromising the essential safari experience. Based on the globally renowned <strong>Toyota Hiace</strong> platform—known for its bulletproof reliability and low operating costs—this vehicle provides comfortable, accessible safari adventures for larger groups.</p>
      
      <p>Our minivans feature the same <strong>professional-grade pop-up roof</strong> as our Landcruisers, offering identical standing-height game viewing. While not equipped for extreme off-road conditions, they excel on Kenya's extensive network of <strong>maintained park roads</strong> where 95% of wildlife sightings occur. The high-clearance design handles typical safari terrain including dirt tracks, gravel roads, and light mud.</p>
      
      <p>Passenger comfort is enhanced by <strong>individual high-back reclining seats</strong> with ample legroom, superior sound insulation, and large viewing windows. The integrated cooler box keeps drinks cold throughout the day, while multiple USB charging ports ensure devices remain powered. The vehicle's <strong>excellent fuel efficiency</strong> (approximately 12km/L) keeps operating costs low, savings we pass directly to our clients.</p>
      
      <p>Ideal for <strong>school groups, budget-conscious families, and first-time safari visitors</strong>, the minivan offers a genuine safari experience at approximately 40% lower cost than equivalent Landcruiser safaris. Our minivan driver-guides are equally knowledgeable and passionate about wildlife, with particular expertise in educational interpretation for student groups.</p>
      
      <p>We maintain our minivan fleet to the same rigorous standards as our premium vehicles, with daily mechanical checks, professional cleaning, and comprehensive safety equipment.</p>
    `,
    specs: [
      "Maximum 7 passengers (6 + driver)",
      "Full pop-up roof with 1.7m standing height",
      "Air conditioning with rear controls",
      "Individual high-back reclining seats",
      "Integrated 150L cooler box with ice packs",
      "Multiple USB charging ports (2 per row)",
      "PA system for guide commentary",
      "Overhead storage for day packs",
      "First aid kit and fire extinguisher",
      "Child seat anchor points (ISOFIX)",
    ],
    includes: [
      "Professional driver-guide (KPSGA Bronze minimum)",
      "Fuel for entire safari itinerary",
      "Third-party insurance coverage",
      "Basic roadside assistance",
      "Daily interior cleaning and sanitization",
      "Park fee calculation assistance",
      "Cooler box with initial water supply",
      "Safari information packet and checklist",
      "Emergency contact numbers",
      "Lodge transfer coordination",
    ],
    idealFor: [
      "Large families and multi-family groups",
      "School and university educational trips",
      "Budget safari travelers",
      "Corporate incentive groups",
      "Airport transfers combined with short safaris",
      "Birdwatching groups on maintained roads",
    ],
    image: "/car-hire/safari-minivan.jpg",
    heroImage: "/car-hire/hero-minivan-nakuru.jpg",
    gallery: [
      "/car-hire/minivan-group-photo.jpg",
      "/car-hire/minivan-roof-operation.jpg",
      "/car-hire/minivan-interior-layout.jpg",
      "/car-hire/minivan-lake-viewing.jpg",
      "/car-hire/minivan-family-safari.jpg",
    ],
    pickupLocations: [
      "Jomo Kenyatta International Airport (NBO)",
      "Moi International Airport, Mombasa",
      "Kisumu International Airport",
      "Eldoret Airport",
      "Malindi Airport",
      "All major hotel areas in Nairobi and Coast",
      "Train stations (Nairobi SGR, Mombasa Terminus)",
    ],
    technical: {
      engine: "3.0L Turbo Diesel (1KD-FTV) with intercooler",
      transmission: "4-speed automatic with overdrive",
      fuel: "Diesel",
      tank: "70L (standard) with optional 30L auxiliary",
      range: "650-800 km depending on load and terrain",
      groundClearance: "185 mm (unladen)",
      tires: "Bridgestone Dueler H/T 235/70R16",
      suspension: "Independent front, leaf spring rear (heavy duty)",
      powerOutput: "120 kW (161 hp) @ 3400 rpm",
      torque: "343 Nm @ 1400-3200 rpm",
      seatingCapacity: "7 persons maximum (including driver)",
      dimensions: "Length: 4695mm, Width: 1695mm, Height: 1980mm (with roof)",
    },
    comfortFeatures: {
      climateControl: "Manual air conditioning with rear vents",
      seating: "Fabric high-back seats with individual recline",
      audioSystem: "FM/AM radio with Bluetooth and AUX input",
      chargingPorts: "6x USB-A ports, 2x 12V accessory sockets",
      storage: [
        "Overhead parcel shelves",
        "Under-seat storage compartments",
        "Rear luggage area (limits apply)",
        "Cooler box accessible from rear seats",
      ],
      other: [
        "Tinted side and rear windows",
        "Sun blinds on all windows",
        "Cup holders for all passengers",
        "Reading lights for rear passengers",
        "Mosquito screens on pop-up openings",
      ],
    },
    faqs: [
      {
        question: "Are minivans allowed in all Kenya national parks?",
        answer:
          "Yes, minivans are permitted in all national parks and most conservancies. However, they are restricted to maintained roads and cannot navigate deep mud, sand, or river crossings. During heavy rains, some park areas may become temporarily inaccessible to minivans.",
      },
      {
        question: "Can we fit 8 people in the minivan?",
        answer:
          "No, we strictly limit occupancy to 7 persons (6 passengers + driver) for safety, comfort, and optimal game viewing. Overloading compromises safety systems and violates our insurance terms. For groups of 8+, we recommend two minivans or a combination with a Landcruiser.",
      },
      {
        question: "How does the minivan compare to Landcruiser for wildlife viewing?",
        answer:
          "The viewing experience is very similar—same pop-up roof design, similar height. The main differences are: Landcruiser has 4WD for more challenging terrain, slightly higher roof clearance, and generally more luxurious interior. For 90% of wildlife sightings on park roads, the minivan provides an identical viewing experience at significantly lower cost.",
      },
      {
        question: "Is the minivan suitable for children?",
        answer:
          "Excellent for children! The minivan's sliding doors make entry/exit easier, the higher seating position gives children better views, and the ability to accommodate larger families in one vehicle keeps groups together. We provide child seats upon request.",
      },
    ],
    relatedVehicles: ["safari-landcruiser"],
    bookingNote: "Best value for groups of 4-6 persons. Single travelers may be grouped with others for cost efficiency.",
    recommendedFor: [
      "Lake Nakuru flamingo viewing",
      "Nairobi National Park day trips",
      "Hell's Gate cycling transfers",
      "Educational school excursions",
      "Coastal beach and safari combos",
    ],
    notRecommendedFor: [
      "Maasai Mara during heavy rains (July-August)",
      "Tsavo wilderness routes",
      "Samburu rough terrain areas",
      "Serious off-road requirements",
    ],
  },
]