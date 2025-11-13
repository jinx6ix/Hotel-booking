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
      groundClearance: string
      tires: string
    }
    accessibility?: {
      liftCapacity: string
      doorWidth: string
      ramp: boolean
      tieDowns: boolean
    }
    photography?: {
      roofType: string
      cameraMounts: string[]
      powerSupply: string
      silentMode: boolean
    }
    faqs: { question: string; answer: string }[]
    relatedVehicles: string[]
  }
  
  export const vehicles: Vehicle[] = [
    {
      slug: "safari-landcruiser",
      name: "Safari Landcruiser 4x4",
      price: "$180 – $220 per day",
      description:
        "The gold standard for Kenya safaris. Toyota Landcruiser with pop-up roof, 4WD, and fridge. Perfect for game drives in Maasai Mara, Amboseli, and Tsavo.",
      longDescription: `
        <p>The <strong>Toyota Land Cruiser 4x4</strong> is the undisputed king of African safaris. Built for rugged terrain, this vehicle combines legendary reliability with safari-specific modifications including a <strong>pop-up roof</strong> for 360° game viewing, reinforced suspension, and a powerful diesel engine.</p>
        <p>Used by professional guides for over 30 years, it offers unmatched stability on dirt roads, riverbanks, and savannah tracks. The extended roof allows all passengers to stand and photograph without leaving the vehicle — essential in predator-rich areas.</p>
        <p>Each unit is fitted with a <strong>300L cooler box</strong>, USB charging ports, and high-back seats for long game drives. Our fleet is serviced daily and includes <strong>unlimited mileage</strong> and a dedicated driver-guide.</p>
      `,
      specs: [
        "6 passengers (5 + driver)",
        "Pop-up roof (1.8m standing height)",
        "4WD with low-range",
        "300L fridge + ice packs",
        "Binoculars & field guides",
        "USB & 12V charging",
        "First aid & fire extinguisher",
      ],
      includes: [
        "Professional English-speaking driver-guide",
        "Fuel & unlimited mileage",
        "Daily vehicle cleaning",
        "Park entry coordination",
        "24/7 roadside assistance",
        "Comprehensive insurance",
      ],
      idealFor: ["Classic safari groups", "Families", "Birdwatchers", "First-time visitors"],
      image: "/car-hire/safari-landcruiser.jpg",
      heroImage: "/car-hire/hero-landcruiser-mara.jpg",
      gallery: [
        "/car-hire/safari-landcruiser-interior.jpg",
        "/car-hire/safari-landcruiser-roof.jpg",
        "/car-hire/safari-landcruiser-mud.jpg",
      ],
      pickupLocations: ["Nairobi (NBO/WIL)", "Maasai Mara airstrips", "Amboseli", "Mombasa"],
      technical: {
        engine: "4.5L V8 Turbo Diesel",
        transmission: "5-speed manual",
        fuel: "Diesel",
        tank: "180L (1,200+ km range)",
        groundClearance: "235 mm",
        tires: "BF Goodrich All-Terrain",
      },
      faqs: [
        {
          question: "Can I drive the Landcruiser myself?",
          answer:
            "No. All safari vehicles include a professional driver-guide for safety and park compliance.",
        },
        {
          question: "Is the pop-up roof safe during game drives?",
          answer:
            "Yes. The roof is reinforced and allows safe standing while the vehicle is stationary or moving slowly.",
        },
      ],
      relatedVehicles: ["accessible-safari-landcruiser", "safari-minivan"],
    },
    {
      slug: "accessible-safari-landcruiser",
      name: "Accessible Safari Landcruiser",
      price: "$220 – $280 per day",
      description:
        "Fully modified Toyota Landcruiser with hydraulic wheelchair lift, wide doors, and ramp access. Same safari experience — now inclusive.",
      longDescription: `
        <p>We believe the magic of Kenya’s wildlife should be <strong>accessible to everyone</strong>. Our <strong>Accessible Safari Landcruiser</strong> is Kenya’s only commercially available wheelchair-modified 4x4 safari vehicle.</p>
        <p>Built on the proven Toyota Land Cruiser platform, it features a <strong>300kg hydraulic side lift</strong>, removable front passenger seat, and wide sliding doors. The floor is lowered by 15cm for easy transfer, and secure tie-down points keep wheelchairs stable during game drives.</p>
        <p>Our accessibility-trained drivers are fluent in disability etiquette and can assist with transfers, positioning, and photography. The pop-up roof is fully operable from a seated position.</p>
      `,
      specs: [
        "4 passengers + 1 wheelchair",
        "Hydraulic lift (300kg capacity)",
        "Wide sliding door (90cm)",
        "Removable front seat",
        "Secure wheelchair tie-downs",
        "Lowered floor (15cm)",
        "Accessible pop-up roof controls",
      ],
      includes: [
        "Accessibility-trained driver",
        "Wheelchair tie-downs & straps",
        "Emergency medical kit",
        "24/7 accessibility support",
        "Ramp storage",
        "Modified seatbelts",
      ],
      idealFor: ["Wheelchair users", "Seniors", "Travelers with mobility aids"],
      image: "/car-hire/accessible-landcruiser.jpg",
      heroImage: "/car-hire/hero-accessible-lift.jpg",
      gallery: [
        "/car-hire/accessible-lift.jpg",
        "/car-hire/accessible-interior.jpg",
        "/car-hire/accessible-ramp.jpg",
      ],
      pickupLocations: ["Nairobi (NBO)", "Wilson Airport", "Nairobi CBD hotels"],
      technical: {
        engine: "4.5L V8 Turbo Diesel",
        transmission: "5-speed manual",
        fuel: "Diesel",
        tank: "180L",
        groundClearance: "220 mm",
        tires: "Michelin LTX",
      },
      accessibility: {
        liftCapacity: "300 kg",
        doorWidth: "90 cm",
        ramp: true,
        tieDowns: true,
      },
      faqs: [
        {
          question: "Can the lift handle powered wheelchairs?",
          answer: "Yes, up to 300kg including battery-powered chairs.",
        },
        {
          question: "Is the vehicle air-conditioned?",
          answer: "Yes, dual-zone AC with rear vents.",
        },
      ],
      relatedVehicles: ["safari-landcruiser", "safari-minivan"],
    },
    {
      slug: "photography-convertible",
      name: "Photography Convertible Vehicle",
      price: "$250 – $350 per day",
      description:
        "Open-roof 4x4 designed for wildlife photographers. 360° access, camera mounts, silent approach mode.",
      longDescription: `
        <p>Designed in collaboration with <strong>National Geographic</strong> and <strong>BBC Earth</strong> crews, our <strong>Photography Convertible</strong> is a full-open 4x4 with no roof obstruction.</p>
        <p>The entire roof folds back in under 60 seconds, offering <strong>360° unobstructed shooting</strong>. Custom gimbal mounts, bean bags, and power inverters ensure you never miss a shot. The vehicle operates in <strong>silent electric mode</strong> for close approaches to skittish animals.</p>
        <p>Includes a dedicated <strong>photographer-guide</strong> who knows prime locations, light angles, and animal behavior patterns.</p>
      `,
      specs: [
        "5 passengers",
        "Full 360° open roof",
        "Gimbal & tripod mounts",
        "Bean bags (x4)",
        "Silent electric mode",
        "12V + 220V inverters",
        "Dust-sealed camera storage",
      ],
      includes: [
        "Photographer-guide",
        "Camera cleaning kit",
        "Portable power bank",
        "Memory card backup",
        "Tripod & monopod",
        "Dust protection covers",
      ],
      idealFor: ["Professional photographers", "Filmmakers", "Content creators"],
      image: "/car-hire/photography-vehicle.jpg",
      heroImage: "/car-hire/hero-photography-lion.jpg",
      gallery: [
        "/car-hire/photography-roof.jpg",
        "/car-hire/photography-mounts.jpg",
        "/car-hire/photography-sunset.jpg",
      ],
      pickupLocations: ["Nairobi", "Maasai Mara airstrip", "Amboseli", "Samburu"],
      technical: {
        engine: "Hybrid 4.5L + Electric",
        transmission: "CVT",
        fuel: "Hybrid (Diesel + Electric)",
        tank: "150L + 48V battery",
        groundClearance: "230 mm",
        tires: "Goodyear Wrangler",
      },
      photography: {
        roofType: "Full convertible",
        cameraMounts: ["Manfrotto gimbal", "Sachtler tripod base", "Bean bag rests"],
        powerSupply: "220V inverter + 12V DC",
        silentMode: true,
      },
      faqs: [
        {
          question: "Can I bring my own gimbal?",
          answer: "Yes. We provide universal mounts compatible with DJI Ronin, Zhiyun, etc.",
        },
        {
          question: "Is the vehicle dust-proof?",
          answer: "Camera compartments are sealed. We provide dust blowers and covers.",
        },
      ],
      relatedVehicles: ["safari-landcruiser"],
    },
    {
      slug: "safari-minivan",
      name: "Safari Minivan (Pop-up Roof)",
      price: "$120 – $160 per day",
      description:
        "Budget-friendly 7-seater with pop-up roof. Ideal for larger groups or cost-conscious travelers.",
      longDescription: `
        <p>Our <strong>Safari Minivans</strong> are the most popular choice for budget-conscious travelers and large families. Built on the reliable Toyota Hiace platform, they feature a <strong>pop-up roof</strong> for game viewing, air conditioning, and comfortable high-back seats.</p>
        <p>While not as rugged as Landcruisers, they are perfect for <strong>maintained park roads</strong> in Lake Nakuru, Nairobi National Park, and Naivasha. Ideal for school groups, incentive tours, and airport transfers.</p>
        <p>All units include a cooler box, USB charging, and a knowledgeable driver-guide.</p>
      `,
      specs: [
        "7 passengers (6 + driver)",
        "Pop-up roof",
        "Air conditioning",
        "USB charging ports",
        "Cooler box",
        "PA system",
        "High-back reclining seats",
      ],
      includes: [
        "Driver-guide",
        "Fuel",
        "Basic insurance",
        "Roadside assistance",
        "Daily cleaning",
      ],
      idealFor: ["Large families", "School groups", "Budget safaris", "Airport transfers"],
      image: "/car-hire/safari-minivan.jpg",
      heroImage: "/car-hire/hero-minivan-nakuru.jpg",
      gallery: [
        "/car-hire/minivan-group.jpg",
        "/car-hire/minivan-roof.jpg",
        "/car-hire/minivan-interior.jpg",
      ],
      pickupLocations: ["Nairobi", "Mombasa", "Kisumu", "Eldoret", "Malindi"],
      technical: {
        engine: "3.0L Turbo Diesel",
        transmission: "4-speed automatic",
        fuel: "Diesel",
        tank: "70L",
        groundClearance: "185 mm",
        tires: "Bridgestone Dueler",
      },
      faqs: [
        {
          question: "Are minivans allowed in Maasai Mara?",
          answer:
            "Yes, on main tracks. Not recommended for river crossings or black cotton soil.",
        },
        {
          question: "Can we fit 8 people?",
          answer: "Maximum 7 passengers for comfort and safety.",
        },
      ],
      relatedVehicles: ["safari-landcruiser"],
    },
  ]