// lib/data.ts
export interface Room {
  id: string;
  type: string;
  description: string;
  price: number;
  maxOccupancy: number;
  available: number;
  amenities: string[];
  images: string[];
  accessible?: boolean;
  accessibilityFeatures?: string[];
}

export interface Hotel {
  slug: string;
  updatedAt: Date;
  rooms: Room[];
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  address: string;
  phone: string;
  email: string;
  accessible?: boolean;
  accessibleRoomCount?: number;
}

export interface Location {
  updatedAt: Date;
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  longDescription: string;
  attractions: string[];
  bestTime: string;
  highlights?: string[];
  familyFriendly?: boolean;
  similar?: string[];
  reviews?: {
    rating: number;
    comment: string;
    user: string;
  }[];
}

export const locations: Location[] = [
  {
    id: "nairobi",
    name: "Nairobi",
    slug: "nairobi",
    description: "Kenya's vibrant capital city – best luxury hotels, Nairobi National Park safaris, Giraffe Centre and cultural experiences",
    image: "/Nairobi.avif",
    longDescription: "Nairobi, Kenya's lively capital and major gateway to East African safaris, combines urban energy with incredible wildlife experiences. Known worldwide as the only capital city with a national park inside its borders, Nairobi offers Nairobi National Park safaris just 20 minutes from the city center. Visit the famous Giraffe Centre, Karen Blixen Museum, David Sheldrick Elephant Orphanage, and Nairobi National Museum. The city is home to luxury hotels in Nairobi, boutique lodges, rooftop restaurants, vibrant nightlife, and excellent shopping at Two Rivers Mall and The Hub Karen. Perfect base for Kenya safari tours, business travel, or city + safari combinations.",
    attractions: [
      "Nairobi National Park Safari",
      "Giraffe Centre – Feed Rothschild Giraffes",
      "David Sheldrick Elephant & Rhino Orphanage",
      "Karen Blixen Museum (Out of Africa)",
      "Nairobi National Museum",
      "Bomas of Kenya – Cultural Show",
      "Kibera Slum Tours & Cultural Experiences",
      "Nairobi Safari Walk",
      "Karura Forest – Hiking & Nature Trails",
    ],
    bestTime: "June to October (dry season) and January to February",
    updatedAt: new Date(),
  },
  {
    id: "naivasha",
    name: "Naivasha",
    slug: "naivasha",
    description: "Lake Naivasha – boat rides, hippo watching, Hell's Gate cycling & luxury lodges near Nairobi",
    image: "/naivasha.jpeg",
    longDescription: "Lake Naivasha is one of Kenya's most beautiful freshwater lakes, located just 90 minutes from Nairobi along the Great Rift Valley. Famous for boat safaris where you can get close to hippos, fish eagles and hundreds of bird species. Enjoy cycling and game drives inside Hell's Gate National Park – the only park in Kenya where you can walk or cycle among zebras, giraffes and buffaloes. Visit Crescent Island for walking safaris, Crater Lake for flamingos, and geothermal hot springs. Lake Naivasha is a perfect weekend getaway from Nairobi, romantic destination, family-friendly location and excellent stopover on the way to Maasai Mara or Nakuru.",
    attractions: [
      "Lake Naivasha Boat Safari & Hippo Watching",
      "Hell's Gate National Park – Cycling & Hiking",
      "Crescent Island Walking Safari",
      "Crater Lake Game Sanctuary",
      "Geothermal Hot Springs & Geysers",
      "Mount Longonot Hiking",
      "Bird Watching – 400+ Species",
      "Elsamere – Joy Adamson Museum",
    ],
    bestTime: "Year-round – best wildlife viewing June to October",
    updatedAt: new Date()
  },
  {
    id: "nakuru",
    name: "Nakuru",
    slug: "nakuru",
    description: "Lake Nakuru National Park – flamingos, rhinos, lions – best safari destination in Rift Valley",
    image: "/nakuru.jpg",
    longDescription: "Lake Nakuru National Park is world-famous for its spectacular pink flamingo flocks that sometimes number over a million birds. This alkaline lake is one of Kenya's best places to see white and black rhinos, Rothschild giraffes, lions, leopards, buffaloes and tree-climbing lions. The park also offers excellent birdwatching with over 450 recorded species. Nakuru town provides good accommodation options, restaurants and serves as an important stop between Nairobi and the Maasai Mara or western Kenya. Menengai Crater, Lake Elementaita flamingos and Soysambu Conservancy are all within easy reach.",
    attractions: [
      "Lake Nakuru Flamingo Spectacle",
      "White & Black Rhino Viewing",
      "Tree Climbing Lions",
      "Rothschild Giraffe",
      "Leopard & Lion Sightings",
      "Menengai Crater Viewpoint",
      "Lake Nakuru Bird Watching",
      "Baboons Cliff & Outlooks",
    ],
    bestTime: "September to March (best flamingo numbers)",
    updatedAt: new Date()
  },
  {
    id: "kisumu",
    name: "Kisumu",
    slug: "kisumu",
    description: "Kisumu – Lake Victoria, Impala Sanctuary, Dunga Hill Camp, Kit Mikayi – Gateway to Western Kenya",
    image: "/kisumu.jpg",
    longDescription: "Kisumu is Kenya's third-largest city and the main port on Lake Victoria, Africa's largest lake. This vibrant lakeside city offers a unique blend of urban energy and natural beauty. Visit the Kisumu Impala Sanctuary for wildlife viewing, explore the Dunga Hill Camp for bird watching and sunset views, and discover the mystical Kit Mikayi rock formation. The city is also a gateway to the diverse cultures of Western Kenya and the tea plantations of Kericho.",
    attractions: [
      "Lake Victoria Boat Rides",
      "Kisumu Impala Sanctuary",
      "Dunga Hill Camp & Bird Watching",
      "Kit Mikayi Rock Formation",
      "Kisumu Museum",
      "Hippo Point",
      "Rusinga Island",
      "Ndere Island National Park",
    ],
    bestTime: "June to October and January to March",
    updatedAt: new Date()
  },
  {
    id: "mombasa",
    name: "Mombasa",
    slug: "mombasa",
    description: "Mombasa – Kenya's coastal gem, beautiful beaches, Fort Jesus, marine parks and Swahili culture",
    image: "/mombasa.jpg",
    longDescription: "Mombasa is Kenya's second-largest city and the heart of the Kenyan coast. This historic port city offers a perfect blend of Swahili culture, stunning beaches, and world-class resorts. Explore the ancient Fort Jesus, wander through the narrow streets of Old Town, relax on the white sands of Diani and Nyali beaches, and discover vibrant marine life in the surrounding coral reefs. Mombasa is the perfect destination for beach holidays, water sports, and cultural experiences.",
    attractions: [
      "Fort Jesus Museum",
      "Old Town Mombasa",
      "Diani Beach",
      "Nyali Beach",
      "Bamburi Beach",
      "Haller Park",
      "Mombasa Marine National Park",
      "Wasini Island",
      "Shimba Hills National Reserve",
    ],
    bestTime: "December to March and July to October",
    updatedAt: new Date()
  },
  {
    id: "samburu",
    name: "Samburu",
    slug: "samburu",
    description: "Samburu National Reserve – special five animals, Grevy's zebra, reticulated giraffe, luxury camps",
    image: "/samburu.webp",
    longDescription: "Samburu National Reserve offers one of Kenya's most unique and remote safari experiences. Famous for the Samburu Special Five: Grevy's zebra, reticulated giraffe, Somali ostrich, beisa oryx and gerenuk. The Ewaso Nyiro River attracts large herds of elephants, lions, leopards and crocodiles – especially dramatic during dry seasons. The red dirt landscapes, domed termite mounds and dramatic rocky outcrops create a very different atmosphere from southern parks. Samburu also offers rich cultural experiences with Samburu and Turkana communities. Perfect for travelers seeking uncrowded wilderness, excellent big cat sightings and authentic safari camps.",
    attractions: [
      "Samburu Special Five Animals",
      "Grevy's Zebra & Reticulated Giraffe",
      "Ewaso Nyiro River – Elephant Herds",
      "Samburu & Turkana Cultural Visits",
      "Leopard Sightings – High Success Rate",
      "Game Drives along the River",
      "Photography – Dramatic Red Landscapes",
    ],
    bestTime: "June to October and January to February",
    updatedAt: new Date()
  },
  {
    id: "nanyuki",
    name: "Nanyuki",
    slug: "nanyuki",
    description: "Nanyuki – Mount Kenya climbing, Ol Pejeta Conservancy, equator line, luxury lodges",
    image: "/nanyuki.jpg",
    longDescription: "Nanyuki is the main gateway town for Mount Kenya climbing expeditions and northern Kenya safaris. Located right on the equator, visitors can stand with one foot in each hemisphere. The town provides excellent access to Ol Pejeta Conservancy (home to the last two northern white rhinos), Solio Ranch, Sweetwaters Chimpanzee Sanctuary and several private game reserves. Nanyuki is also famous for its cool climate, beautiful highland scenery, coffee and flower farms. Ideal base for Mount Kenya treks (Sirimon, Chogoria, Naro Moru routes), luxury stays, family holidays and stopovers before heading to Samburu or Loisaba conservancies.",
    attractions: [
      "Mount Kenya Climbing & Trekking",
      "Equator Crossing Experience",
      "Ol Pejeta Conservancy – Northern White Rhinos",
      "Sweetwaters Chimpanzee Sanctuary",
      "Solio Game Reserve – Private Safari",
      "Highland Tea & Coffee Plantations",
      "Nanyuki Market & Town Life",
    ],
    bestTime: "January to February and August to September",
    updatedAt: new Date()
  },
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    slug: "maasai-mara",
    description: "Maasai Mara – Great Migration, Big Five safaris, luxury tented camps, hot air balloon rides",
    image: "/maasai mara.jpeg",
    longDescription: "The Maasai Mara National Reserve is Kenya's most famous and arguably the best wildlife destination in Africa. World-renowned for the Great Wildebeest Migration (July–October), when over 1.5 million animals cross the Mara River watched by crocodiles and big cats. Year-round excellent Big Five viewing (lion, leopard, elephant, buffalo, rhino), cheetahs, hyenas, topi, eland and huge birdlife. Stay in luxury tented camps, eco-lodges or exclusive private conservancies with off-road driving and night drives. Experience authentic Maasai village visits, bush walks and hot air balloon safaris over the plains at sunrise. The ultimate Kenya safari destination.",
    attractions: [
      "Great Wildebeest Migration River Crossings",
      "Big Five Safari – Lion, Leopard, Elephant",
      "Maasai Village Cultural Experience",
      "Hot Air Balloon Safari Sunrise",
      "Mara Conservancy Private Game Drives",
      "Mara River Crocodile & Hippo Pools",
      "Cheetah & Hyena Sightings",
      "Bush Breakfast & Sundowners",
    ],
    bestTime: "July to October (Migration) • December to March (calving season)",
    updatedAt: new Date()
  },
  {
    id: "amboseli",
    name: "Amboseli",
    slug: "amboseli",
    description: "Amboseli National Park – Mount Kilimanjaro views, huge elephant herds, luxury lodges",
    image: "/amboseli.avif",
    longDescription: "Amboseli National Park is world-famous for its breathtaking views of Mount Kilimanjaro, Africa's highest mountain, rising dramatically behind massive elephant herds. Known as the best place in Kenya to photograph elephants with Kilimanjaro backdrop. The park features large swamps attracting thousands of animals – especially elephants, buffaloes, hippos and waterbirds. Excellent big cat sightings (lion, cheetah) and over 400 bird species recorded. Amboseli offers authentic Maasai cultural experiences and stays in luxury tented camps and lodges with Kilimanjaro views. One of the most photogenic and iconic safari destinations in East Africa.",
    attractions: [
      "Mount Kilimanjaro Views with Elephants",
      "Huge Elephant Herds – Family Groups",
      "Observation Hill Panorama",
      "Amboseli Swamps & Waterholes",
      "Maasai Cultural Encounters",
      "Big Cat Sightings – Lion & Cheetah",
      "Bird Watching – Pelicans, Flamingos",
      "Sunrise & Sunset Photography",
    ],
    bestTime: "June to October and January to March",
    updatedAt: new Date()
  },
  {
    id: "tsavo-east",
    name: "Tsavo East",
    slug: "tsavo-east",
    description: "Tsavo East National Park – red dust, huge elephant herds, Yatta Plateau, classic Kenya safari",
    image: "/tsavo east.jpeg",
    longDescription: "Tsavo East is one of Kenya's largest and wildest national parks, famous for its distinctive red volcanic soil and massive elephant populations – often covered in red dust. The park offers classic African wilderness safaris with excellent chances to see lions, leopards, cheetahs, giraffes, zebras, oryx, gerenuk and huge herds of elephants. The Galana River is a lifeline attracting wildlife, especially in the dry season. Highlights include Mudanda Rock lookout, Yatta Plateau (world's longest lava flow), Aruba Dam and Lugard Falls. Ideal for travelers seeking uncrowded, authentic safari experiences away from mass tourism.",
    attractions: [
      "Red Dust Elephants of Tsavo",
      "Galana River Wildlife Concentration",
      "Mudanda Rock Scenic Lookout",
      "Yatta Plateau – Longest Lava Flow",
      "Lugard Falls & Rapids",
      "Aruba Dam Waterhole",
      "Classic Big Game Safari",
    ],
    bestTime: "June to October (dry season – best wildlife viewing)",
    updatedAt: new Date()
  },
  {
    id: "tsavo-west",
    name: "Tsavo West",
    slug: "tsavo-west",
    description: "Tsavo West – Mzima Springs, Chyulu Hills, volcanic landscapes, black rhino sanctuary",
    image: "/tsavo west.jpeg",
    longDescription: "Tsavo West National Park offers dramatic volcanic scenery, lush vegetation and unique attractions like Mzima Springs – crystal-clear underground springs where you can watch hippos and fish through underwater viewing chambers. The park is home to black rhinos, large elephant herds, lions, leopards, cheetahs and diverse birdlife. Highlights include the Chyulu Hills, Ngulia Rhino Sanctuary, volcanic cones, caves (Sheltam Caves), and beautiful viewpoints. Tsavo West provides a more intimate and rugged safari experience compared to Tsavo East, with excellent opportunities for walking safaris and photography. Perfect complement to a Tsavo East visit.",
    attractions: [
      "Mzima Springs Underwater Hippo Viewing",
      "Ngulia Black Rhino Sanctuary",
      "Chyulu Hills Scenic Views",
      "Volcanic Landscapes & Lava Flows",
      "Sheltam Caves Exploration",
      "Poacher's Lookout Viewpoint",
      "Diverse Birdlife & Mammals",
    ],
    bestTime: "June to October (dry season)",
    updatedAt: new Date()
  },
];

// Helper function to create rooms for hotels with specific room images
const createRooms = (hotelId: string, basePrice: number, roomImages: Record<string, string[]>): Room[] => [
  // Standard Rooms
  {
    id: `${hotelId}-standard-1`,
    type: "Standard Room",
    description: "Comfortable room with basic amenities, perfect for solo travelers or couples.",
    price: Math.round(basePrice * 0.8),
    maxOccupancy: 2,
    available: 5,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom"],
    images: roomImages.standard || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-deluxe-1`,
    type: "Deluxe Room",
    description: "Spacious room with enhanced amenities and beautiful views.",
    price: basePrice,
    maxOccupancy: 3,
    available: 3,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk"],
    images: roomImages.deluxe || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-suite-1`,
    type: "Suite",
    description: "Luxurious suite with separate living area and premium amenities.",
    price: Math.round(basePrice * 1.5),
    maxOccupancy: 4,
    available: 2,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony"],
    images: roomImages.suite || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-family-1`,
    type: "Family Room",
    description: "Perfect for families with children, featuring extra space and family-friendly amenities.",
    price: Math.round(basePrice * 1.2),
    maxOccupancy: 5,
    available: 4,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Family-friendly", "Extra Beds"],
    images: roomImages.family || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-executive-1`,
    type: "Executive Suite",
    description: "Premium suite with exclusive amenities and personalized service.",
    price: basePrice * 2,
    maxOccupancy: 2,
    available: 1,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Premium Toiletries"],
    images: roomImages.executive || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-presidential-1`,
    type: "Presidential Suite",
    description: "Ultimate luxury with panoramic views and exclusive services.",
    price: basePrice * 3,
    maxOccupancy: 4,
    available: 1,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Premium Toiletries", "Jacuzzi", "Butler Service"],
    images: roomImages.presidential || ["/placeholder.svg?height=300&width=400"]
  },
  // Accessible Rooms - for hotels that have them
  ...(hotelId.includes("crown") || hotelId.includes("kibo") || hotelId.includes("tamarind") || hotelId.includes("sarova") || hotelId.includes("oltukai") ? [
    {
      id: `${hotelId}-accessible-1`,
      type: "Accessible Standard Room",
      description: "Comfortable accessible room designed for guests with mobility needs. Features wider doorways and roll-in shower.",
      price: Math.round(basePrice * 0.85),
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features"],
      images: roomImages.accessibleStandard || ["/placeholder.svg?height=300&width=400"],
      accessible: true,
      accessibilityFeatures: [
        "Wider doorways (32+ inches)",
        "Roll-in shower with grab bars",
        "Lowered light switches and fixtures",
        "Emergency call system",
        "Wheelchair accessible"
      ]
    },
    {
      id: `${hotelId}-accessible-2`,
      type: "Accessible Deluxe Room",
      description: "Spacious accessible room with enhanced amenities and beautiful views. Perfect for guests requiring extra space.",
      price: Math.round(basePrice * 1.05),
      maxOccupancy: 3,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Accessible Features"],
      images: roomImages.accessibleDeluxe || ["/placeholder.svg?height=300&width=400"],
      accessible: true,
      accessibilityFeatures: [
        "Wider doorways (34+ inches)",
        "Roll-in shower with shower seat",
        "Grab bars in bathroom",
        "Lowered vanity",
        "Accessible balcony with ramp",
        "Visual alarm system"
      ]
    },
    {
      id: `${hotelId}-accessible-3`,
      type: "Accessible Suite",
      description: "Luxurious accessible suite with separate living area and premium amenities. Maximum comfort and accessibility.",
      price: Math.round(basePrice * 1.6),
      maxOccupancy: 4,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Accessible Features"],
      images: roomImages.accessibleSuite || ["/placeholder.svg?height=300&width=400"],
      accessible: true,
      accessibilityFeatures: [
        "Extra-wide doorways (36+ inches)",
        "Wheelchair-accessible bathroom",
        "Roll-in shower with bench",
        "Adjustable shower head",
        "Grab bars throughout",
        "Accessible living area",
        "Emergency pull cords"
      ]
    }
  ] : [])
];

// ALL HOTELS - with contact info replaced with Jaetravel's details
export const hotels: Hotel[] = [
  // ========== NAIROBI HOTELS ==========
  // Original Nairobi Hotels
  {
    id: "nairobi-001",
    name: "Safari Park Hotel",
    location: "Nairobi",
    rating: 4.8,
    price: 350,
    image: "/safari park hotel.jpg?height=300&width=400",
    gallery: [
      "/Safari Park Hotel1.jpg",
      "/Safari Park Hotel2.jpg",
      "/Safari Park Hotel3.jpg",
      "/Safari Park Hotel4.jpg",
    ],
    description: "Luxury safari-themed hotel with direct view of Nairobi National Park. World-class amenities and gourmet dining experiences.",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar", "Conference Rooms", "Parking", "Room Service"],
    address: "P.O. Box 24950, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-001", 350, {
      standard: ["/safariparkroom1.jpeg", "/safariparkroom2.jpeg", "/safariparkroom3.jpeg"],
      deluxe: ["/safariparkroom1.jpeg", "/safariparkroom2.jpeg", "/safariparkroom3.jpeg"],
      suite: ["/safariparkroom1.jpeg", "/safariparkroom2.jpeg", "/safariparkroom3.jpeg"],
      family: ["/safariparkroom1.jpeg", "/safariparkroom2.jpeg", "/safariparkroom3.jpeg"],
      executive: ["/safariparkroom1.jpeg", "/safariparkroom2.jpeg", "/safariparkroom3.jpeg"],
      presidential: ["/safariparkroom1.jpeg", "/safariparkroom2.jpeg", "/safariparkroom3.jpeg"]
    }),
    slug: "safari-park-hotel",
    updatedAt: new Date()
  },
  
  // CROWNE PLAZA NAIROBI AIRPORT (ACCESSIBLE)
  {
    id: "nairobi-002",
    name: "Crowne Plaza Nairobi Airport by IHG",
    location: "Nairobi Airport",
    rating: 4.6,
    price: 280,
    image: "/Crowne Plaza Nairobi.jpg?height=300&width=400",
    gallery: [
      "/chero1.jpeg?height=400&width=600",
      "/chero2.webp?height=400&width=600",
      "/chero3.gif?height=400&width=600",
      "/chero4.jpg?height=400&width=600",
    ],
    description: "Premium 5-star hotel conveniently located at Jomo Kenyatta International Airport, offering contemporary African decor and exceptional service. Features wheelchair accessible rooms with roll-in showers and grab bars. Perfect for transit passengers or those with early flights, featuring soundproofed rooms, 24-hour dining, and complimentary airport shuttle.",
    amenities: ["WiFi", "Pool", "Fitness Center", "Multiple Restaurants", "Bar", "Spa", "Concierge", "Parking", "Airport Shuttle", "24-hour Reception", "Business Center", "Accessible Facilities"],
    address: "Jomo Kenyatta International Airport, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 3,
    rooms: createRooms("crown-plaza", 280, {
      standard: ["/crowneroom1.jpg", "/crowneroom2.jpg", "/crowneroom3.jpg"],
      deluxe: ["/crowneroom1.jpg", "/crowneroom2.jpg", "/crowneroom3.jpg"],
      suite: ["/crowneroom1.jpg", "/crowneroom2.jpg", "/crowneroom3.jpg"],
      family: ["/crowneroom1.jpg", "/crowneroom2.jpg", "/crowneroom3.jpg"],
      executive: ["/crowneroom1.jpg", "/crowneroom2.jpg", "/crowneroom3.jpg"],
      presidential: ["/crowneroom1.jpg", "/crowneroom2.jpg", "/crowneroom3.jpg"],
      accessibleStandard: ["/WhatsApp Image 2026-03-11 at 3.11.03 PM (1).jpeg", "/WhatsApp Image 2026-03-11 at 3.11.03 PM (2).jpeg"],
      accessibleDeluxe: ["/WhatsApp Image 2026-03-11 at 3.11.03 PM (1).jpeg"],
      accessibleSuite: ["/WhatsApp Image 2026-03-11 at 3.11.03 PM (1).jpeg"]
    }),
    slug: "crowne-plaza-nairobi-airport",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-003",
    name: "Serena Hotel Nairobi",
    location: "Nairobi",
    rating: 4.7,
    price: 320,
    image: "/Serena Hotel Nairobi.jpg?height=300&width=400",
    gallery: [
      "/shero1.jpg?height=400&width=600",
      "/shero2.jpg?height=400&width=600",
      "/shero3.jpg?height=400&width=600",
      "/shero4.jpg?height=400&width=600",
    ],
    description: "Elegant hotel combining contemporary architecture with African artistic elements. Award-winning service and dining.",
    amenities: ["WiFi", "Pool", "Spa", "Fine Dining", "Business Center", "Fitness Center", "Parking", "Concierge"],
    address: "Kenyatta Avenue, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-003", 320, {
      standard: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"],
      deluxe: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"],
      suite: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"],
      family: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"],
      executive: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"],
      presidential: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"]
    }),
    slug: "serena-hotel-nairobi",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-004",
    name: "Villa Rosa Kempinski",
    location: "Nairobi",
    rating: 4.9,
    price: 400,
    image: "/Villa Rosa Kempinski.avif?height=300&width=400",
    gallery: [
      "/khero1.jpg?height=400&width=600",
      "/khero2.avif?height=400&width=600",
      "/khero3.jpg?height=400&width=600",
      "/khero4.jpg?height=400&width=600",
    ],
    description: "Ultra-luxury 5-star hotel with impeccable service. Fine dining restaurants and world-class spa facilities.",
    amenities: ["WiFi", "Luxury Pool", "Spa", "5 Restaurants", "Bar", "Gym", "Valet Parking", "24/7 Concierge"],
    address: "Museum Hill, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-004", 400, {
      standard: ["/kroom1.avif", "/kroom2.avif", "/kroom3.jpg"],
      deluxe: ["/kroom1.avif", "/kroom2.avif", "/kroom3.jpg"],
      suite: ["/kroom1.avif", "/kroom2.avif", "/kroom3.jpg"],
      family: ["/kroom1.avif", "/kroom2.avif", "/kroom3.jpg"],
      executive: ["/kroom1.avif", "/kroom2.avif", "/kroom3.jpg"],
      presidential: ["/kproom1.avif", "/kproom2.avif", "/kproom3.avif"]
    }),
    slug: "villa-rosa-kempinski",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-005",
    name: "The Bomas of Kenya Resort",
    location: "Nairobi",
    rating: 4.5,
    price: 250,
    image: "/bhero.webp?height=300&width=400",
    gallery: [
      "/bhero1.jpg?height=400&width=600",
      "/bhero2.jpg?height=400&width=600",
      "/bhero3.jpg?height=400&width=600",
      "/bhero4.webp?height=400&width=600",
    ],
    description: "Unique resort featuring authentic Kenyan cultural experiences with traditional and modern accommodations.",
    amenities: ["WiFi", "Restaurant", "Cultural Shows", "Garden", "Meeting Rooms", "Parking", "Bar", "Tours"],
    address: "P.O. Box 51510, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-005", 250, {
      standard: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"],
      deluxe: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"],
      suite: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"],
      family: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"],
      executive: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"],
      presidential: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"]
    }),
    slug: "bomas-of-kenya-resort",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-006",
    name: "Hilton Nairobi",
    location: "Nairobi",
    rating: 4.4,
    price: 230,
    image: "/Hilton Nairobi.jpg?height=300&width=400",
    gallery: [
      "/hihero1.jpg?height=400&width=600",
      "/hihero2.jpg?height=400&width=600",
      "/hihero3.jpg?height=400&width=600",
      "/hihero4.webp?height=400&width=600",
    ],
    description: "Modern 4-star hotel with convenient downtown location. Perfect for business and leisure travelers.",
    amenities: ["WiFi", "Fitness Center", "Restaurant", "Bar", "Business Center", "Parking", "Lounge", "Room Service"],
    address: "Mama Ngina Street, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-006", 230, {
      standard: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"],
      deluxe: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"],
      suite: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"],
      family: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"],
      executive: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"],
      presidential: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"]
    }),
    slug: "hilton-nairobi",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-007",
    name: "Ibis Styles Nairobi",
    location: "Nairobi",
    rating: 4.3,
    price: 180,
    image: "/Ibis Styles Nairobi.jpg?height=300&width=400",
    gallery: [
      "/ibhero1.jpg?height=400&width=600",
      "/ibhero2.jpg?height=400&width=600",
      "/ibhero3.jpg?height=400&width=600",
      "/ibhero4.jpg?height=400&width=600",
    ],
    description: "Contemporary 3-star hotel offering excellent value with comfortable rooms and quality service.",
    amenities: ["WiFi", "Restaurant", "Bar", "Meeting Rooms", "Parking", "TV", "Air Conditioning", "Elevator"],
    address: "Kenyatta Avenue, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-007", 180, {
      standard: ["/ibis-standard-1.jpg", "/ibis-standard-2.jpg", "/ibis-standard-bathroom.jpg"],
      deluxe: ["/ibis-standard-1.jpg", "/ibis-standard-2.jpg", "/ibis-standard-bathroom.jpg"],
      suite: ["/ibis-standard-1.jpg", "/ibis-standard-2.jpg", "/ibis-standard-bathroom.jpg"],
      family: ["/ibis-standard-1.jpg", "/ibis-standard-2.jpg", "/ibis-standard-bathroom.jpg"],
      executive: ["/ibis-standard-1.jpg", "/ibis-standard-2.jpg", "/ibis-standard-bathroom.jpg"],
      presidential: ["/ibis-standard-1.jpg", "/ibis-standard-2.jpg", "/ibis-standard-bathroom.jpg"]
    }),
    slug: "ibis-styles-nairobi",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-008",
    name: "Radisson Blu Nairobi",
    location: "Nairobi",
    rating: 4.6,
    price: 290,
    image: "/Radisson Blu Nairobi.jpg?height=300&width=400",
    gallery: [
      "/rahero1.jpg?height=400&width=600",
      "/rahero2.webp?height=400&width=600",
      "/rahero3.jpg?height=400&width=600",
      "/rahero4.avif?height=400&width=600",
    ],
    description: "Premium 5-star hotel with modern amenities and attentive service. Located in prime business district.",
    amenities: ["WiFi", "Pool", "Spa", "Multiple Restaurants", "Gym", "Business Center", "Parking", "Concierge"],
    address: "Westlands, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-008", 290, {
      standard: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"],
      deluxe: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"],
      suite: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"],
      family: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"],
      executive: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"],
      presidential: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"]
    }),
    slug: "radisson-blu-nairobi",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-009",
    name: "Four Points by Sheraton",
    location: "Nairobi",
    rating: 4.5,
    price: 260,
    image: "/Four Points by Sheraton.jpg?height=300&width=400",
    gallery: [
      "/fohero1.avif?height=400&width=600",
      "/fohero2.jpg?height=400&width=600",
      "/fohero3.jpg?height=400&width=600",
      "/fohero4.webp?height=400&width=600",
    ],
    description: "Contemporary 4-star hotel offering excellent dining options and business facilities.",
    amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Fitness Center", "Business Center", "Parking", "Room Service"],
    address: "Westlands, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-009", 260, {
      standard: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"],
      deluxe: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"],
      suite: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"],
      family: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"],
      executive: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"],
      presidential: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"]
    }),
    slug: "four-points-by-sheraton",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-010",
    name: "Mercure Hotel Nairobi",
    location: "Nairobi",
    rating: 4.4,
    price: 200,
    image: "/Mercure Hotel Nairobi.jpg?height=300&width=400",
    gallery: [
      "/mehero1.jpeg?height=400&width=600",
      "/mehero2.jpg?height=400&width=600",
      "/mehero3.jpeg?height=400&width=600",
      "/mehero4.jpeg?height=400&width=600",
    ],
    description: "4-star hotel with excellent location and comfortable rooms. Great value for money.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Meeting Rooms", "Parking", "TV", "Room Service"],
    address: "Njiro Road, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-010", 200, {
      standard: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"],
      deluxe: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"],
      suite: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"],
      family: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"],
      executive: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"],
      presidential: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"]
    }),
    slug: "mercure-hotel-nairobi",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-011",
    name: "Country Club Hotel",
    location: "Nairobi",
    rating: 4.2,
    price: 190,
    image: "/Country Club Hotel.jpeg?height=300&width=400",
    gallery: [
      "/cohero1.jpg?height=400&width=600",
      "/cohero2.webp?height=400&width=600",
      "/cohero3.webp?height=400&width=600",
      "/cohero4.jpg?height=400&width=600",
    ],
    description: "Budget-friendly 3-star hotel with warm hospitality and convenient location.",
    amenities: ["WiFi", "Restaurant", "Bar", "Parking", "Garden", "Room Service", "TV", "Air Conditioning"],
    address: "Kenyatta Avenue, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nairobi-011", 190, {
      standard: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"],
      deluxe: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"],
      suite: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"],
      family: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"],
      executive: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"],
      presidential: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"]
    }),
    slug: "country-club-hotel",
    updatedAt: new Date()
  },
  
  {
    id: "nairobi-012",
    name: "Giraffe Manor",
    location: "Nairobi",
    rating: 4.9,
    price: 750,
    image: "/giraffe-manor.webp?height=400&width=600",
    gallery: [
      "/hotels/giraffe-manor/giraffe-manor-gallery-1.jpg?height=400&width=600",
      "/hotels/giraffe-manor/giraffe-manor-gallery-2.jpg?height=400&width=600",
      "/hotels/giraffe-manor/giraffe-manor-gallery-3.jpg?height=400&width=600",
      "/hotels/giraffe-manor/giraffe-manor-gallery-4.jpg?height=400&width=600",
    ],
    description: "Breakfast with giraffes. One of Africa's most iconic hotels. Giraffe Manor is a boutique hotel in Nairobi where endangered Rothschild giraffes visit daily.",
    amenities: ["Giraffe Feeding", "Gardens", "Fine Dining", "Heritage Property", "Library", "Free WiFi", "Restaurant", "Bar"],
    address: "Langata Road, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("giraffe-manor", 750, {
      standard: ["/giraffe-standard-1.jpg", "/giraffe-standard-2.jpg"],
      deluxe: ["/giraffe-deluxe-1.jpg", "/giraffe-deluxe-2.jpg"],
      suite: ["/giraffe-suite-1.jpg", "/giraffe-suite-2.jpg"],
      family: ["/giraffe-family-1.jpg", "/giraffe-family-2.jpg"],
      executive: ["/giraffe-executive-1.jpg", "/giraffe-executive-2.jpg"],
      presidential: ["/giraffe-presidential-1.jpg", "/giraffe-presidential-2.jpg"]
    }),
    slug: "giraffe-manor",
    updatedAt: new Date()
  },
  
  // SAROVA PANAFRIC NAIROBI (ACCESSIBLE)
  {
    id: "nairobi-015",
    name: "Sarova Panafric Hotel",
    location: "Nairobi",
    rating: 4.5,
    price: 220,
    image: "/2026-01-28.jpg",
    gallery: [
      "/2026-01-28 (1).jpg",
      "/unnamed (3).jpg",
      "/unnamed (4).jpg",
      "/unnamed (5).jpg",
    ],
    description: "Iconic Nairobi hotel with lush tropical gardens and a rich history dating back to 1965. Features wheelchair accessible rooms with roll-in showers and grab bars, just minutes from the city center.",
    amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Garden", "Conference Facilities", "Parking", "Room Service", "Accessible Facilities"],
    address: "Kenyatta Avenue, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 3,
    rooms: createRooms("sarova-panafric", 220, {
      standard: ["/unnamed (6).jpg", "/unnamed (2).jpg"],
      deluxe: ["/unnamed (6).jpg", "/unnamed (2).jpg"],
      suite: ["/unnamed (6).jpg", "/unnamed (2).jpg"],
      family: ["/unnamed (6).jpg", "/unnamed (2).jpg"],
      executive: ["/unnamed (6).jpg", "/unnamed (2).jpg"],
      presidential: ["/unnamed (6).jpg", "/unnamed (2).jpg",],
      accessibleStandard: ["/OtXVWYZw.jpeg", "/btqCJF5g.jpeg"],
      accessibleDeluxe: ["/OtXVWYZw.jpeg"],
      accessibleSuite: ["/btqCJF5g.jpeg"]
    }),
    slug: "sarova-panafric-hotel",
    updatedAt: new Date()
  },
  
  // KIBO COLLECTION (ACCESSIBLE)
  {
    id: "amboseli-010",
    name: "Kibo Safari Camp",
    location: "Amboseli",
    rating: 4.5,
    price: 260,
    image: "/unnamed (7).jpg",
    gallery: [
      "/unnamed (8).jpg",
      "/unnamed (9).jpg",
      "/2025-12-10.jpg",
      "/2025-12-11.jpg",
    ],
    description: "Part of the prestigious Kibo Collection, this boutique hotel offers personalized service, elegant accommodations, and a tranquil garden setting. Fully wheelchair accessible with roll-in showers and wide doorways.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Airport Transfers", "Room Service", "Conference Facilities", "Parking", "Spa", "Accessible Facilities"],
    address: "Muthaiga, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 3,
    rooms: createRooms("kibo-collection", 260, {
      standard: ["/unnamed.webp", "/2025-12-10 (1).jpg", "/unnamed (11).jpg"],
      deluxe: ["/unnamed.webp", "/2025-12-10 (1).jpg", "/unnamed (11).jpg"],
      suite: ["/unnamed.webp", "/2025-12-10 (1).jpg", "/unnamed (11).jpg"],
      family: ["/unnamed.webp", "/unnamed (11).jpg"],
      executive: ["/unnamed.webp", "/unnamed (10).jpg"],
      presidential: ["/unnamed.webp", "/unnamed (10).jpg"],
      accessibleStandard: ["/WhatsApp Image 2026-03-07 at 09.32.25.jpeg", "/unnamed (10).jpg"],
      accessibleDeluxe: ["/WhatsApp Image 2026-03-07 at 09.32.25.jpeg"],
      accessibleSuite: ["/WhatsApp Image 2026-03-07 at 09.32.25.jpeg"]
    }),
    slug: "kibo-safari-camp",
    updatedAt: new Date()
  },

  // TAMARIND TREE NAIROBI (ACCESSIBLE)
  {
    id: "nairobi-014",
    name: "Tamarind Tree Hotel",
    location: "Nairobi",
    rating: 4.4,
    price: 220,
    image: "/2025-10-15.jpg",
    gallery: [
      "/unnamed.jpg",
      "/TAMARIND TREE 3-5.jpg",
      "/TAMARIND TREE 3-10.jpg",
      "/2025-10-15 (1).jpg",
      "/unnamed (1).jpg",
    ],
    description: "Modern hotel offering comfortable accommodations with a blend of contemporary style and African charm. Features a rooftop restaurant with city views and fully accessible rooms with roll-in showers and grab bars.",
    amenities: ["WiFi", "Rooftop Restaurant", "Bar", "Swimming Pool", "Fitness Center", "Spa", "Business Center", "Parking", "Room Service", "Accessible Facilities"],
    address: "Lang'ata Road, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 3,
    rooms: createRooms("tamarind-tree", 220, {
      standard: ["/paraplegic rooms (1).jpg", "/paraplegic rooms (4).jpg", "/paraplegic rooms (4).jpg"],
      deluxe: ["/paraplegic rooms (1).jpg", "/tamarind-deluxe-2.jpg", "/paraplegic rooms (4).jpg"],
      suite: ["/paraplegic rooms (1).jpg", "/paraplegic rooms (4).jpg", "/paraplegic rooms (4).jpg"],
      family: ["/paraplegic rooms (1).jpg", "/paraplegic rooms (4).jpg"],
      executive: ["/paraplegic rooms (1).jpg", "/paraplegic rooms (4).jpg"],
      presidential: ["/paraplegic rooms (1).jpg", "/paraplegic rooms (4).jpg"],
      accessibleStandard: ["/paraplegic rooms (1).jpg", "/paraplegic rooms (4).jpg"],
      accessibleDeluxe: ["/paraplegic rooms (1).jpg"],
      accessibleSuite: ["/paraplegic rooms (1).jpg"]
    }),
    slug: "tamarind-tree-hotel",
    updatedAt: new Date()
  },

  // ========== NAIVASHA HOTELS ==========
  {
    id: "naivasha-001",
    name: "Lake Naivasha Crescent Camp",
    location: "Naivasha",
    rating: 4.7,
    price: 320,
    image: "/cresent lake.avif?height=300&width=400",
    gallery: [
      "/crehero1.jpeg?height=400&width=600",
      "/crehero2.jpeg?height=400&width=600",
      "/crehero3.jpeg?height=400&width=600",
      "/crehero4.jpg?height=400&width=600",
    ],
    description: "Luxury tented camp on Lake Naivasha shores with stunning lake views and excellent wildlife viewing.",
    amenities: ["WiFi", "Restaurant", "Bar", "Lake Activities", "Safari Drives", "Spa", "Lounge", "Room Service"],
    address: "Lake Naivasha, P.O. Box 1000",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("naivasha-001", 320, {
      standard: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"],
      deluxe: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"],
      suite: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"],
      family: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"],
      executive: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"],
      presidential: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"]
    }),
    slug: "lake-naivasha-crescent-camp",
    updatedAt: new Date()
  },
  
  {
    id: "naivasha-002",
    name: "Naivasha Serena Camp",
    location: "Naivasha",
    rating: 4.6,
    price: 300,
    image: "/serena camp.jpg?height=300&width=400",
    gallery: [
      "/sehero1.jpg?height=400&width=600",
      "/sehero2.avif?height=400&width=600",
      "/sehero3.jpg?height=400&width=600",
      "/sehero4.jpg?height=400&width=600",
    ],
    description: "All-inclusive tented camp with authentic safari experience and exceptional hospitality.",
    amenities: ["Meals Included", "Safari Drives", "Lake Activities", "Fireplace", "Bar", "Spa", "Photography", "WiFi"],
    address: "Lake Naivasha",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("naivasha-002", 300, {
      standard: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"],
      deluxe: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"],
      suite: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"],
      family: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"],
      executive: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"],
      presidential: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"]
    }),
    slug: "naivasha-serena-camp",
    updatedAt: new Date()
  },
  
  {
    id: "naivasha-003",
    name: "Hells Gate Game Lodge",
    location: "Naivasha",
    rating: 4.5,
    price: 280,
    image: "/hells gate.jpeg?height=300&width=400",
    gallery: [
      "/gahero1.avif?height=400&width=600",
      "/gahero2.jpg?height=400&width=600",
      "/gahero3.jpg?height=400&width=600",
      "/gahero4.jpeg?height=400&width=600",
    ],
    description: "Game lodge near Hell's Gate National Park with excellent safari opportunities and friendly atmosphere.",
    amenities: ["Restaurant", "Bar", "Safari Drives", "Hiking", "Rock Climbing", "Parking", "WiFi", "Room Service"],
    address: "Hell's Gate National Park, Naivasha",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("naivasha-003", 280, {
      standard: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"],
      deluxe: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"],
      suite: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"],
      family: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"],
      executive: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"],
      presidential: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"]
    }),
    slug: "hells-gate-game-lodge",
    updatedAt: new Date()
  },

  // ========== NAKURU HOTELS ==========
  // Original Nakuru Hotels (non-accessible)
  {
    id: "nakuru-003",
    name: "Lake Elementaita Mountain Lounge",
    location: "Nakuru",
    rating: 4.5,
    price: 260,
    image: "/lake-elementaita-mountain.jpg?height=300&width=400",
    gallery: [
      "/LAKE-ELEMENTAITA-MOUNTAIN-LODGE.jpg?height=400&width=600",
      "/538c670e.avif?height=400&width=600",
      "/1741355162_37_Lake_Elementaita_Mountain_Lodg.jpg?height=400&width=600",
      "/606850619.jpg?height=400&width=600",
    ],
    description: "Charming lodge with wildlife-themed decor and convenient location near Lake Nakuru National Park.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Parking", "Room Service", "Meeting Rooms", "TV"],
    address: "Lake Road, Nakuru",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-003", 260, {
      standard: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      deluxe: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      suite: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      family: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      executive: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      presidential: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"]
    }),
    slug: "lake-elementaita-mountain-lounge",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-004",
    name: "Menengai Crater Guest House",
    location: "Nakuru",
    rating: 4.2,
    price: 200,
    image: "/guest-house-and-surrounding.jpg?height=300&width=400",
    gallery: [
      "/beautiful-spacious-green.jpg?height=400&width=600",
      "/relax-in-the-hammock.jpg?height=400&width=600",
      "/guest-house-room.jpg?height=400&width=600",
      "/guest-house-dining.jpg?height=400&width=600",
    ],
    description: "Budget-friendly hotel with basic amenities and good service.",
    amenities: ["WiFi", "Restaurant", "Bar", "Parking", "Room Service", "TV", "Air Conditioning", "Garden"],
    address: "Gishagi Road, Nakuru",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-004", 200, {
      standard: ["/master-bedroom-family.jpg", "/guest-room-standard.jpg", "/guest-bathroom.jpg"],
      deluxe: ["/master-bedroom-family.jpg", "/guest-room-deluxe.jpg", "/guest-bathroom-deluxe.jpg"],
      suite: ["/guest-house-suite.jpg", "/guest-house-suite-living.jpg", "/guest-bathroom-suite.jpg"],
      family: ["/master-bedroom-family.jpg", "/family-room-extra.jpg", "/family-bathroom.jpg"],
      executive: ["/guest-house-executive.jpg", "/executive-living.jpg", "/executive-bathroom.jpg"],
      presidential: ["/guest-house-presidential.jpg", "/presidential-living.jpg", "/presidential-bathroom.jpg"]
    }),
    slug: "menengai-crater-guest-house",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-005",
    name: "Hotel Panorama Resort",
    location: "Nakuru",
    rating: 4.3,
    price: 210,
    image: "/hotel-panorama-resort.jpg?height=300&width=400",
    gallery: [
      "/hotel-panorama-resort (1).jpg?height=400&width=600",
      "/hotel-panorama-resort (2).jpg?height=400&width=600",
      "/20180724-104818-hdr-largejpg.jpg?height=400&width=600",
      "/img-20180815-213434-largejpg.jpg?height=400&width=600",
    ],
    description: "Hotel with scenic views and comfortable rooms overlooking Nakuru town.",
    amenities: ["WiFi", "Restaurant", "Bar", "Views", "Parking", "Room Service", "Garden", "TV"],
    address: "Nakuru Town",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-005", 210, {
      standard: ["/photo0jpg.jpg", "/photo1jpg.jpg", "/hotel-panorama-resort (3).jpg"],
      deluxe: ["/panorama-deluxe-1.jpg", "/panorama-deluxe-2.jpg", "/panorama-deluxe-bathroom.jpg"],
      suite: ["/panorama-suite-1.jpg", "/panorama-suite-2.jpg", "/panorama-suite-bathroom.jpg"],
      family: ["/panorama-family-1.jpg", "/panorama-family-2.jpg", "/panorama-family-bathroom.jpg"],
      executive: ["/panorama-executive-1.jpg", "/panorama-executive-2.jpg", "/panorama-executive-bathroom.jpg"],
      presidential: ["/panorama-presidential-1.jpg", "/panorama-presidential-2.jpg", "/panorama-presidential-bathroom.jpg"]
    }),
    slug: "hotel-panorama-resort",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-006",
    name: "The Lake Nakuru Flamingo Lodge",
    location: "Nakuru",
    rating: 4.4,
    price: 240,
    image: "/welcome-to-lake-nakuru.jpg?height=300&width=400",
    gallery: [
      "/we-also-have-camping.jpg?height=400&width=600",
      "/shading-cavesyou-will.jpg?height=400&width=600",
      "/beer-garden.jpg?height=400&width=600",
      "/a-group-of-flamingoes.jpg?height=400&width=600",
    ],
    description: "Nature-themed lodge celebrating Nakuru's famous flamingos with comfortable accommodations.",
    amenities: ["WiFi", "Restaurant", "Pool", "Bar", "Garden", "Parking", "Room Service", "TV"],
    address: "Lake Nakuru Road",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-006", 240, {
      standard: ["/photo6jpg.jpg", "/photo2jpg.jpg", "/photo3jpg.jpg"],
      deluxe: ["/flamingo-deluxe-1.jpg", "/flamingo-deluxe-2.jpg", "/flamingo-deluxe-bathroom.jpg"],
      suite: ["/flamingo-suite-1.jpg", "/flamingo-suite-2.jpg", "/flamingo-suite-bathroom.jpg"],
      family: ["/flamingo-family-1.jpg", "/flamingo-family-2.jpg", "/flamingo-family-bathroom.jpg"],
      executive: ["/flamingo-executive-1.jpg", "/flamingo-executive-2.jpg", "/flamingo-executive-bathroom.jpg"],
      presidential: ["/flamingo-presidential-1.jpg", "/flamingo-presidential-2.jpg", "/flamingo-presidential-bathroom.jpg"]
    }),
    slug: "lake-nakuru-flamingo-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-007",
    name: "Lake Nakuru Lodge",
    location: "Nakuru",
    rating: 4.3,
    price: 220,
    image: "/lake-nakuru-lodge (1).jpg?height=300&width=400",
    gallery: [
      "/lake-nakuru-lodge (4).jpg?height=400&width=600",
      "/lake-nakuru-lodge (5).jpg?height=400&width=600",
      "/lake-nakuru-lodge (3).jpg?height=400&width=600",
      "/lake-nakuru-lodge (6).jpg?height=400&width=600",
    ],
    description: "Lodge within Lake Nakuru National Park boundaries with direct wildlife access.",
    amenities: ["WiFi", "Restaurant", "Bar", "Safari Drives", "Parking", "Room Service", "Garden", "Guides"],
    address: "Lake Nakuru National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-007", 220, {
      standard: ["/lake-nakuru-lodge (2).jpg", "/photo1jpg.jpg", "/20180210-125019-largejpg.jpg"],
      deluxe: ["/a-customized-zebra-room.jpg", "/photo5jpg.jpg", "/lake-nakuru-lodge (9).jpg"],
      suite: ["/lake-nakuru-lodge (8).jpg", "/photo5jpg.jpg", "/lake-nakuru-lodge (9).jpg"],
      family: ["/lake-nakuru-family-1.jpg", "/lake-nakuru-family-2.jpg", "/lake-nakuru-family-bathroom.jpg"],
      executive: ["/lake-nakuru-lodge (7).jpg", "/photo5jpg.jpg", "/lake-nakuru-lodge (9).jpg"],
      presidential: ["/lake-nakuru-presidential-1.jpg", "/lake-nakuru-presidential-2.jpg", "/lake-nakuru-presidential-bathroom.jpg"]
    }),
    slug: "lake-nakuru-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-008",
    name: "Rock Hyrax Hotel",
    location: "Nakuru",
    rating: 4.1,
    price: 170,
    image: "/caption.jpg?height=300&width=400",
    gallery: [
      "/hotel-sweet-dreams (1).jpg?height=400&width=600",
      "/caption (1).jpg?height=400&width=600",
      "/caption (2).jpg?height=400&width=600",
      "/caption (3).jpg?height=400&width=600",
    ],
    description: "Cozy hotel with warm atmosphere and affordable rates.",
    amenities: ["WiFi", "Restaurant", "Bar", "Parking", "Room Service", "TV", "Air Conditioning", "Garden"],
    address: "Kenyatta Avenue",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-008", 170, {
      standard: ["/caption (4).jpg", "/caption (6).jpg", "/caption (5).jpg"],
      deluxe: ["/inspired-destinations.jpg", "/rock-hyrax-deluxe-2.jpg", "/rock-hyrax-deluxe-bathroom.jpg"],
      suite: ["/rock-hyrax-suite-1.jpg", "/rock-hyrax-suite-2.jpg", "/rock-hyrax-suite-bathroom.jpg"],
      family: ["/rock-hyrax-family-1.jpg", "/rock-hyrax-family-2.jpg", "/rock-hyrax-family-bathroom.jpg"],
      executive: ["/rock-hyrax-executive-1.jpg", "/rock-hyrax-executive-2.jpg", "/rock-hyrax-executive-bathroom.jpg"],
      presidential: ["/rock-hyrax-presidential-1.jpg", "/rock-hyrax-presidential-2.jpg", "/rock-hyrax-presidential-bathroom.jpg"]
    }),
    slug: "rock-hyrax-hotel",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-009",
    name: "Ziwa Bush Lodge",
    location: "Nakuru",
    rating: 4.0,
    price: 150,
    image: "/private-lovely-large.jpg?height=300&width=400",
    gallery: [
      "/20181110-153006-largejpg.jpg?height=400&width=600",
      "/our-poolside-dinner-for.jpg?height=400&width=600",
      "/ziwa-bush-lodge (1).jpg?height=400&width=600",
      "/caption (8).jpg?height=400&width=600",
    ],
    description: "Budget hotel offering clean rooms and basic but quality services.",
    amenities: ["WiFi", "Restaurant", "Bar", "Parking", "Room Service", "TV", "Air Conditioning"],
    address: "Nakuru Center",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-009", 150, {
      standard: ["/caption (7).jpg", "/caption (9).jpg", "/ziwa-bush-lodge.jpg"],
      deluxe: ["/ziwa-bush-deluxe-1.jpg", "/ziwa-bush-deluxe-2.jpg", "/ziwa-bush-deluxe-bathroom.jpg"],
      suite: ["/ziwa-bush-suite-1.jpg", "/ziwa-bush-suite-2.jpg", "/ziwa-bush-suite-bathroom.jpg"],
      family: ["/ziwa-bush-family-1.jpg", "/ziwa-bush-family-2.jpg", "/ziwa-bush-family-bathroom.jpg"],
      executive: ["/ziwa-bush-executive-1.jpg", "/ziwa-bush-executive-2.jpg", "/ziwa-bush-executive-bathroom.jpg"],
      presidential: ["/ziwa-bush-presidential-1.jpg", "/ziwa-bush-presidential-2.jpg", "/ziwa-bush-presidential-bathroom.jpg"]
    }),
    slug: "ziwa-bush-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-010",
    name: "Lake Nakuru Sopa Lodge",
    location: "Nakuru",
    rating: 4.2,
    price: 190,
    image: "/lake-nakuru-sopa-lodge (1).jpg?height=300&width=400",
    gallery: [
      "/lake-nakuru-sopa-lodge (1).jpg?height=400&width=600",
      "/lobby-giftshop.jpg?height=400&width=600",
      "/photo0jpg (1).jpg?height=400&width=600",
      "/pool-view.jpg?height=400&width=600",
    ],
    description: "3-star hotel with excellent facilities and convenient location.",
    amenities: ["WiFi", "Restaurant", "Pool", "Bar", "Garden", "Parking", "Room Service", "TV"],
    address: "Kenyatta Road",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-010", 190, {
      standard: ["/lake-nakuru-sopa-lodge (3).jpg", "/lake-nakuru-sopa-lodge (4).jpg", "/20171211-135815-hdr-largejpg.jpg"],
      deluxe: ["/sopa-lodge-deluxe-1.jpg", "/sopa-lodge-deluxe-2.jpg", "/sopa-lodge-deluxe-bathroom.jpg"],
      suite: ["/sopa-lodge-suite-1.jpg", "/sopa-lodge-suite-2.jpg", "/sopa-lodge-suite-bathroom.jpg"],
      family: ["/sopa-lodge-family-1.jpg", "/sopa-lodge-family-2.jpg", "/sopa-lodge-family-bathroom.jpg"],
      executive: ["/sopa-lodge-executive-1.jpg", "/sopa-lodge-executive-2.jpg", "/sopa-lodge-executive-bathroom.jpg"],
      presidential: ["/sopa-lodge-presidential-1.jpg", "/sopa-lodge-presidential-2.jpg", "/sopa-lodge-presidential-bathroom.jpg"]
    }),
    slug: "lake-nakuru-sopa-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "nakuru-011",
    name: "Punda Milias Nakuru Camp",
    location: "Nakuru",
    rating: 4.3,
    price: 215,
    image: "/aerial-view-of-pundamilias.jpg?height=300&width=400",
    gallery: [
      "/buffalo-cottage.jpg?height=400&width=600",
      "/camping-site.jpg?height=400&width=600",
      "/food-bar-outside-dining.jpg?height=400&width=600",
      "/bandas.jpg?height=400&width=600",
    ],
    description: "Modern 3-star hotel with safari-themed design and quality facilities.",
    amenities: ["WiFi", "Restaurant", "Pool", "Bar", "Garden", "Parking", "Room Service", "Gym"],
    address: "Nakuru",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nakuru-011", 215, {
      standard: ["/buffalo-cottage (1).jpg", "/punda-milias-house-living.jpg", "/bathroom-at-banda.jpg"],
      deluxe: ["/punda-milias-deluxe-1.jpg", "/punda-milias-deluxe-2.jpg", "/punda-milias-deluxe-bathroom.jpg"],
      suite: ["/punda-milias-suite-1.jpg", "/punda-milias-suite-2.jpg", "/punda-milias-suite-bathroom.jpg"],
      family: ["/punda-milias-family-1.jpg", "/punda-milias-family-2.jpg", "/punda-milias-family-bathroom.jpg"],
      executive: ["/punda-milias-executive-1.jpg", "/punda-milias-executive-2.jpg", "/punda-milias-executive-bathroom.jpg"],
      presidential: ["/punda-milias-presidential-1.jpg", "/punda-milias-presidential-2.jpg", "/punda-milias-presidential-bathroom.jpg"]
    }),
    slug: "punda-milias-nakuru-camp",
    updatedAt: new Date()
  },

  // SAROVA LION HILL NAKURU (ACCESSIBLE)
  {
    id: "nakuru-012",
    name: "Sarova Lion Hill Game Lodge",
    location: "Nakuru",
    rating: 4.7,
    price: 320,
    image: "/unnamed (1).webp",
    gallery: [
      "/unnamed (2).webp",
      "/unnamed (3).webp",
      "/unnamed (4).webp",
      "/unnamed (5).webp",
    ],
    description: "Set within Lake Nakuru National Park, this stunning lodge offers breathtaking views of the lake and flamingos. Features wheelchair accessible rooms with roll-in showers and grab bars, plus accessible pathways throughout the property.",
    amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Safari Drives", "Spa", "Gift Shop", "Parking", "Accessible Facilities"],
    address: "Lake Nakuru National Park, Nakuru, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 3,
    rooms: createRooms("sarova-lion-hill", 320, {
      standard: ["/Honeymoon Suite.webp", "/Bathroom.webp"],
      deluxe: ["/Sarova Lion Hill - Differently abled room 1.jpg", "/Bathroom.webp"],
      suite: ["/Sarova Lion Hill - Differently abled room 1.jpg", "/Bathroom.webp"],
      family: ["/Sarova Lion Hill - Differently abled room 1.jpg", "/Bathroom.webp"],
      executive: ["/Sarova Lion Hill - Differently abled room 5.jpg", "/Bathroom.webp"],
      presidential: ["/Sarova Lion Hill - Differently abled room 1.jpg", "/Bathroom.webp"],
      accessibleStandard: ["/Sarova Lion Hill - Differently abled room 1.jpg", "/Bathroom.webp"],
      accessibleDeluxe: ["/Sarova Lion Hill - Differently abled room 1.jpg"],
      accessibleSuite: ["/Sarova Lion Hill - Differently abled room 5.jpg"]
    }),
    slug: "sarova-lion-hill-game-lodge",
    updatedAt: new Date()
  },

  // SAROVA WOODLANDS NAKURU (ACCESSIBLE)
  {
    id: "nakuru-013",
    name: "Sarova Woodlands Hotel & Spa",
    location: "Nakuru",
    rating: 4.6,
    price: 280,
    image: "/Sarova-Woodlands-Nakuru.webp",
    gallery: [
      "/unnamed (6).webp",
      "/unnamed (7).webp",
      "/unnamed (8).webp",
      "/unnamed (9).webp",
      "/unnamed (10).webp",
    ],
    description: "A tranquil retreat in the heart of Nakuru, offering luxurious accommodations and a full-service spa. Fully wheelchair accessible with roll-in showers, wide doorways, and accessible public areas.",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar", "Conference Facilities", "Parking", "Room Service", "Accessible Facilities"],
    address: "Nakuru - Eldoret Road, Nakuru, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 3,
    rooms: createRooms("sarova-woodlands", 280, {
      standard: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg", "/Sarova Woodlands - Woodlands differently abled room 6.jpg"],
      deluxe: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg", "/Sarova Woodlands - Woodlands differently abled room 6.jpg"],
      suite: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg", "/Sarova Woodlands - Woodlands differently abled room 6.jpg"],
      family: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg", "/Sarova Woodlands - Woodlands differently abled room 6.jpg"],
      executive: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg", "/Sarova Woodlands - Woodlands differently abled room 6.jpg"],
      presidential: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg", "/Sarova Woodlands - Woodlands differently abled room 6.jpg"],
      accessibleStandard: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg", "/Sarova Woodlands - Woodlands differently abled room 6.jpg"],
      accessibleDeluxe: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg"],
      accessibleSuite: ["/Sarova Woodlands - Woodlands differently abled room 1.jpg"]
    }),
    slug: "sarova-woodlands-hotel-spa",
    updatedAt: new Date()
  },

  // ========== KISUMU HOTELS ==========
  // SAROVA IMPERIAL KISUMU (ACCESSIBLE)
  {
    id: "kisumu-001",
    name: "Sarova Imperial Hotel",
    location: "Kisumu",
    rating: 4.5,
    price: 210,
    image: "/2023-01-24.webp",
    gallery: [
      "/unnamed (11).webp",
      "/2023-01-17.webp",
      "/unnamed (12).webp",
      "/unnamed (13).webp",
      "/unnamed (14).webp",
    ],
    description: "Overlooking Lake Victoria, this elegant hotel offers stunning lakeside views and modern amenities. Features wheelchair accessible rooms with roll-in showers and grab bars, with easy access to Kisumu's attractions.",
    amenities: ["WiFi", "Restaurant", "Bar", "Lake Views", "Conference Facilities", "Parking", "Room Service", "Accessible Facilities"],
    address: "Jomo Kenyatta Highway, Kisumu, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 3,
    rooms: createRooms("sarova-imperial", 210, {
      standard: ["/Sarova Imperial - Differently_abled Room 1.jpg", "/Sarova imperial - Differently_abled Room 14.jpg"],
      deluxe: ["/Sarova Imperial - Differently_abled Room 1.jpg", "/Sarova imperial - Differently_abled Room 14.jpg"],
      suite: ["/Sarova Imperial - Differently_abled Room 1.jpg", "/Sarova imperial - Differently_abled Room 14.jpg"],
      family: ["/Sarova Imperial - Differently_abled Room 1.jpg", "/Sarova imperial - Differently_abled Room 14.jpg"],
      executive: ["/Sarova Imperial - Differently_abled Room 1.jpg", "/Sarova imperial - Differently_abled Room 14.jpg"],
      presidential: ["/Sarova Imperial - Differently_abled Room 1.jpg", "/Sarova imperial - Differently_abled Room 14.jpg"],
      accessibleStandard: ["/Sarova Imperial - Differently_abled Room 1.jpg", "/Sarova imperial - Differently_abled Room 14.jpg"],
      accessibleDeluxe: ["/Sarova Imperial - Differently_abled Room 1.jpg"],
      accessibleSuite: ["/Sarova Imperial - Differently_abled Room 1.jpg"]
    }),
    slug: "sarova-imperial-hotel",
    updatedAt: new Date()
  },

  // ========== MOMBASA HOTELS ==========
  // SAROVA WHITESAND MOMBASA (ACCESSIBLE)
  {
    id: "mombasa-001",
    name: "Sarova Whitesands Beach Resort & Spa",
    location: "Mombasa",
    rating: 4.8,
    price: 350,
    image: "/2026-03-09.webp",
    gallery: [
      "/unnamed (16).webp",
      "/Sarova Whitesands - Lidos 6.webp",
      "/Sarova Whitesands - Exteriors (Pool) 8.webp",
      "/unnamed (17).webp",
      "/Sarova Whitesands - Lobby 6.webp",
    ],
    description: "Mombasa's premier beach resort, set on miles of pristine white sand along the Indian Ocean. Fully wheelchair accessible with roll-in showers, grab bars, accessible pathways, and beach wheelchairs available for guests with mobility needs.",
    amenities: ["WiFi", "Multiple Pools", "Spa", "Several Restaurants", "Bars", "Water Sports", "Kids Club", "Parking", "Accessible Facilities", "Beach Wheelchairs"],
    address: "Bamburi Beach, Mombasa, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 5,
    rooms: createRooms("sarova-whitesands", 350, {
      standard: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      deluxe: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      suite: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      family: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      executive: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      presidential: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      accessibleStandard: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      accessibleDeluxe: ["/Sarova Whitesands - Palm room 1.jpg", "/Sarova Whitesands - Paraplegic room 1.jpg"],
      accessibleSuite: ["/Sarova Whitesands - Palm room 1.jpg"]
    }),
    slug: "sarova-whitesands-beach-resort-spa",
    updatedAt: new Date()
  },

  // ========== SAMBURU HOTELS ==========
  {
    id: "samburu-001",
    name: "Samburu Intrepids Tented Camp",
    location: "Samburu",
    rating: 4.8,
    price: 400,
    image: "/samburu-intrepids-luxury (5).jpg?height=300&width=400",
    gallery: [
      "/photo0jpg (9).jpg?height=400&width=600",
      "/samburu-intrepids-luxury (6).jpg?height=400&width=600",
      "/samburu-intrepids-luxury (3).jpg?height=400&width=600",
      "/samburu-intrepids-luxury (4).jpg?height=400&width=600",
      "/photo3jpg (3).jpg?height=400&width=600",
    ],
    description: "Ultra-luxury lodge on the Ewaso Nyiro River with exceptional safari experiences and personalized service.",
    amenities: [
      "All-Inclusive",
      "Safari Drives",
      "River Activities",
      "Spa",
      "Bar",
      "Fine Dining",
      "Photography",
      "Guides",
    ],
    address: "Samburu National Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("samburu-001", 400, {
      standard: ["/samburu-intrepids-luxury (2).jpg", "/samburu-intrepids-luxury.jpg", "/samburu-intrepids-luxury (1).jpg"],
      deluxe: ["/samburu-intrepids-luxury (2).jpg", "/samburu-intrepids-luxury.jpg", "/samburu-intrepids-luxury (1).jpg"],
      suite: ["/samburu-intrepids-luxury (2).jpg", "/samburu-intrepids-luxury.jpg", "/samburu-intrepids-luxury (1).jpg"],
      family: ["/samburu-intrepids-luxury (2).jpg", "/samburu-intrepids-luxury.jpg", "/samburu-intrepids-luxury (1).jpg"],
      executive: ["/samburu-intrepids-luxury (2).jpg", "/samburu-intrepids-luxury.jpg", "/samburu-intrepids-luxury (1).jpg"],
      presidential: ["/samburu-intrepids-luxury (2).jpg", "/samburu-intrepids-luxury.jpg", "/samburu-intrepids-luxury (1).jpg"]
    }),
    slug: "samburu-intrepids-tented-camp",
    updatedAt: new Date()
  },
  
  {
    id: "samburu-002",
    name: "Saruni Samburu",
    location: "Samburu",
    rating: 4.6,
    price: 350,
    image: "/saruni-samburu.jpg?height=300&width=400",
    gallery: [
      "/caption (42).jpg?height=400&width=600",
      "/saruni-samburu (1).jpg?height=400&width=600",
      "/saruni-samburu (2).jpg?height=400&width=600",
      "/hot-summer-days-on-holiday.jpg?height=400&width=600",
      "/caption (43).jpg?height=400&width=600",
      "/saruni-samburu (3).jpg?height=400&width=600",
      "/saruni-scenic-air-flights.jpg?height=400&width=600",
    ],
    description: "Prime lodge within Samburu Reserve featuring exclusive wildlife viewing and cultural experiences.",
    amenities: ["Safari Included", "Restaurant", "Bar", "Cultural Shows", "Parking", "Room Service", "WiFi", "Guides"],
    address: "Samburu National Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("samburu-002", 350, {
      standard: ["/saruni-samburu (5).jpg", "/saruni-samburu (4).jpg", "/saruni-samburu (6).jpg"],
      deluxe: ["/saruni-samburu (5).jpg", "/saruni-samburu (4).jpg", "/saruni-samburu (6).jpg"],
      suite: ["/saruni-samburu (5).jpg", "/saruni-samburu (4).jpg", "/saruni-samburu (6).jpg"],
      family: ["/saruni-samburu (5).jpg", "/saruni-samburu (4).jpg", "/saruni-samburu (6).jpg"],
      executive: ["/saruni-samburu (5).jpg", "/saruni-samburu (4).jpg", "/saruni-samburu (6).jpg"],
      presidential: ["/saruni-samburu (5).jpg", "/saruni-samburu (4).jpg", "/saruni-samburu (6).jpg"]
    }),
    slug: "saruni-samburu",
    updatedAt: new Date()
  },
  
  {
    id: "samburu-003",
    name: "Soroi Larsens Camp",
    location: "Samburu",
    rating: 4.5,
    price: 320,
    image: "/caption (44).jpg?height=300&width=400",
    gallery: [
      "/caption (46).jpg?height=400&width=600",
      "/soroi-larsens-camp (1).jpg?height=400&width=600",
      "/caption (48).jpg?height=400&width=600",
      "/soroi-larsens-camp (2).jpg?height=400&width=600",
    ],
    description: "Intimate bush camp offering authentic wilderness experience with excellent game viewing opportunities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Campfire", "Photography", "WiFi", "Room Service", "Guides"],
    address: "Samburu Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("samburu-003", 320, {
      standard: ["/caption (45).jpg", "/caption (47).jpg", "/caption (49).jpg"],
      deluxe: ["/caption (45).jpg", "/caption (47).jpg", "/caption (49).jpg"],
      suite: ["/caption (45).jpg", "/caption (47).jpg", "/caption (49).jpg"],
      family: ["/caption (45).jpg", "/caption (47).jpg", "/caption (49).jpg"],
      executive: ["/caption (45).jpg", "/caption (47).jpg", "/caption (49).jpg"],
      presidential: ["/caption (45).jpg", "/caption (47).jpg", "/caption (49).jpg"]
    }),
    slug: "soroi-larsens-camp",
    updatedAt: new Date()
  },
  
  {
    id: "samburu-004",
    name: "Elephant Bedroom Camp",
    location: "Samburu",
    rating: 4.4,
    price: 300,
    image: "/elephant-bedroom-camp.jpg?height=300&width=400",
    gallery: [
      "/elephant-bedroom-camp (2).jpg?height=400&width=600",
      "/elephant-bedroom-camp (6).jpg?height=400&width=600",
      "/elephant-bedroom-camp (5).jpg?height=400&width=600",
      "/aerial-view-of-the-facility.jpg?height=400&width=600",
      "/elephant-bedroom-camp (3).jpg?height=400&width=600",
      "/elephant-bedroom-camp (7).jpg?height=400&width=600",
      "/elephant-bedroom-camp (8).jpg?height=400&width=600",
    ],
    description: "Safari lodge in Shaba National Park with stunning river setting and wildlife abundance.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "River View", "Parking", "Room Service", "WiFi", "Guides"],
    address: "Shaba National Park, Samburu",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("samburu-004", 300, {
      standard: ["/elephant-bedroom-camp (1).jpg", "/elephant-bedroom-camp (4).jpg", "/nice-bathroom.jpg"],
      deluxe: ["/elephant-bedroom-camp (1).jpg", "/elephant-bedroom-camp (4).jpg", "/nice-bathroom.jpg"],
      suite: ["/elephant-bedroom-camp (1).jpg", "/elephant-bedroom-camp (4).jpg", "/nice-bathroom.jpg"],
      family: ["/elephant-bedroom-camp (1).jpg", "/elephant-bedroom-camp (4).jpg", "/nice-bathroom.jpg"],
      executive: ["/elephant-bedroom-camp (1).jpg", "/elephant-bedroom-camp (4).jpg", "/nice-bathroom.jpg"],
      presidential: ["/elephant-bedroom-camp (1).jpg", "/elephant-bedroom-camp (4).jpg", "/nice-bathroom.jpg"]
    }),
    slug: "elephant-bedroom-camp",
    updatedAt: new Date()
  },
  
  {
    id: "samburu-005",
    name: "Ashnil Samburu Camp",
    location: "Samburu",
    rating: 4.3,
    price: 280,
    image: "/ashnil-samburu-camp.jpg?height=300&width=400",
    gallery: [
      "/ashnil-samburu-camp (1).jpg?height=400&width=600",
      "/ashnil-samburu-camp (5).jpg?height=400&width=600",
      "/ashnil-samburu-camp (6).jpg?height=400&width=600",
      "/ashnil-samburu-camp (8).jpg?height=400&width=600",
      "/ashnil-samburu-camp (7).jpg?height=400&width=600",
      "/ashnil-samburu-camp (9).jpg?height=400&width=600",
      "/ashnil-samburu-camp (10).jpg?height=400&width=600",
    ],
    description: "Well-positioned lodge with excellent game viewing near Buffalo Springs.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Parking", "Room Service", "WiFi", "Photography", "Guides"],
    address: "Buffalo Springs, Samburu",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 0,
    rooms: createRooms("samburu-005", 280, {
      standard: ["/ashnil-samburu-camp (2).jpg", "/ashnil-samburu-camp (3).jpg", "/ashnil-samburu-camp (4).jpg"],
      deluxe: ["/ashnil-samburu-camp (2).jpg", "/ashnil-samburu-camp (3).jpg", "/ashnil-samburu-camp (4).jpg"],
      suite: ["/ashnil-samburu-camp (2).jpg", "/ashnil-samburu-camp (3).jpg", "/ashnil-samburu-camp (4).jpg"],
      family: ["/ashnil-samburu-camp (2).jpg", "/ashnil-samburu-camp (3).jpg", "/ashnil-samburu-camp (4).jpg"],
      executive: ["/ashnil-samburu-camp (2).jpg", "/ashnil-samburu-camp (3).jpg", "/ashnil-samburu-camp (4).jpg"],
      presidential: ["/ashnil-samburu-camp (2).jpg", "/ashnil-samburu-camp (3).jpg", "/ashnil-samburu-camp (4).jpg"]
    }),
    slug: "ashnil-samburu-camp",
    updatedAt: new Date()
  },
  
  {
    id: "samburu-006",
    name: "Samburu Simba Lodge",
    location: "Samburu",
    rating: 4.6,
    price: 360,
    image: "/photo8jpg (1).jpg?height=300&width=400",
    gallery: [
      "/samburu-simba-lodge (5).jpg?height=400&width=600",
      "/entrance-to-room.jpg?height=400&width=600",
      "/samburu-simba-lodge (2).jpg?height=400&width=600",
      "/the-pool.jpg?height=400&width=600",
      "/samburu-simba-lodge (3).jpg?height=400&width=600",
      "/samburu-simba-lodge (6).jpg?height=400&width=600",
      "/view-from-the-2nd-floor.jpg?height=400&width=600",
      "/samburu-simba-lodge.jpg?height=400&width=600",
      "/photo6jpg (2).jpg?height=400&width=600",
    ],
    description: "Exclusive luxury club with bespoke safari experiences and premium accommodations.",
    amenities: ["Luxury Tents", "Safari Drives", "Restaurant", "Pool", "Bar", "Spa", "WiFi", "Guides"],
    address: "Samburu",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("samburu-006", 360, {
      standard: ["/samburu-simba-lodge (1).jpg", "/samburu-simba-lodge (4).jpg", "/samburu-simba-bathroom.jpg"],
      deluxe: ["/samburu-simba-lodge (1).jpg", "/samburu-simba-lodge (4).jpg", "/samburu-simba-bathroom.jpg"],
      suite: ["/samburu-simba-lodge (1).jpg", "/samburu-simba-lodge (4).jpg", "/samburu-simba-bathroom.jpg"],
      family: ["/samburu-simba-lodge (1).jpg", "/samburu-simba-lodge (4).jpg", "/samburu-simba-bathroom.jpg"],
      executive: ["/samburu-simba-lodge (1).jpg", "/samburu-simba-lodge (4).jpg", "/samburu-simba-bathroom.jpg"],
      presidential: ["/samburu-simba-lodge (1).jpg", "/samburu-simba-lodge (4).jpg", "/samburu-simba-bathroom.jpg"]
    }),
    slug: "samburu-simba-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "samburu-007",
    name: "Elephant Watch Camp & Safaris(2026)",
    location: "Samburu",
    rating: 4.4,
    price: 310,
    image: "/elephant-watch-camp-safaris.jpg?height=300&width=400",
    gallery: [
      "/elephant-watch-camp-safaris (1).jpg?height=400&width=600",
      "/the-elephant-herd-photo.jpg?height=400&width=600",
      "/elephant-watch-camp-safaris (2).jpg?height=400&width=600",
      "/evenings-at-elephant.jpg?height=400&width=600",
      "/aerial-view-of-samburu.jpg?height=400&width=600",
    ],
    description: "Charming tented camp with personalized service and excellent wildlife viewing.",
    amenities: ["Tented Rooms", "Safari Drives", "Restaurant", "Bar", "Campfire", "WiFi", "Room Service", "Guides"],
    address: "Samburu Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("samburu-007", 310, {
      standard: ["/elephant-watch-camp-safaris (4).jpg", "/elephant-watch-camp-safaris (3).jpg", "/eau-chaude-dans-les-seaux.jpg"],
      deluxe: ["/elephant-watch-camp-safaris (4).jpg", "/elephant-watch-camp-safaris (3).jpg", "/eau-chaude-dans-les-seaux.jpg"],
      suite: ["/elephant-watch-camp-safaris (4).jpg", "/elephant-watch-camp-safaris (3).jpg", "/eau-chaude-dans-les-seaux.jpg"],
      family: ["/elephant-watch-camp-safaris (4).jpg", "/elephant-watch-camp-safaris (3).jpg", "/eau-chaude-dans-les-seaux.jpg"],
      executive: ["/elephant-watch-camp-safaris (4).jpg", "/elephant-watch-camp-safaris (3).jpg", "/eau-chaude-dans-les-seaux.jpg"],
      presidential: ["/elephant-watch-camp-safaris (4).jpg", "/elephant-watch-camp-safaris (3).jpg", "/eau-chaude-dans-les-seaux.jpg"]
    }),
    slug: "elephant-watch-camp-safaris",
    updatedAt: new Date()
  },

  // ========== NANYUKI HOTELS ==========
  {
    id: "nanyuki-001",
    name: "Maiyan Nanyuki",
    location: "Nanyuki",
    rating: 4.7,
    price: 380,
    image: "/maiyan.jpg?height=300&width=400",
    gallery: [
      "/maiyan (1).jpg?height=400&width=600",
      "/roof.jpg?height=400&width=600",
      "/maiyan (2).jpg?height=400&width=600",
      "/maiyan (4).jpg?height=400&width=600",
    ],
    description: "Exclusive luxury club on the slopes of Mount Kenya with world-class facilities and personalized service.",
    amenities: ["Luxury Villas", "Fine Dining", "Pool", "Spa", "Horse Riding", "Bar", "WiFi", "Concierge"],
    address: "Mount Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-001", 380, {
      standard: ["/master-king-suite.jpg", "/master-king-suite (1).jpg", "/maiyan (3).jpg"],
      deluxe: ["/maiyan-deluxe-1.jpg", "/maiyan-deluxe-2.jpg", "/maiyan-deluxe-bathroom.jpg"],
      suite: ["/maiyan-suite-1.jpg", "/maiyan-suite-2.jpg", "/maiyan-suite-bathroom.jpg"],
      family: ["/maiyan-family-1.jpg", "/maiyan-family-2.jpg", "/maiyan-family-bathroom.jpg"],
      executive: ["/maiyan-executive-1.jpg", "/maiyan-executive-2.jpg", "/maiyan-executive-bathroom.jpg"],
      presidential: ["/maiyan-presidential-1.jpg", "/maiyan-presidential-2.jpg", "/maiyan-presidential-bathroom.jpg"]
    }),
    slug: "maiyan-nanyuki",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-002",
    name: "Fairmont Mount Kenya Safari Club",
    location: "Nanyuki",
    rating: 4.5,
    price: 310,
    image: "/exterior.jpg?height=300&width=400",
    gallery: [
      "/exterior (1).jpg?height=400&width=600",
      "/pool.jpg?height=400&width=600",
      "/golf.jpg?height=400&width=600",
      "/recreational-facilities.jpg?height=400&width=600",
    ],
    description: "Comfortable hotel in town center with good facilities and convenient location for mountain activities.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Meeting Rooms", "Parking", "Room Service", "TV"],
    address: "Nanyuki Town",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-002", 310, {
      standard: ["/guest-room (1).jpg", "/guest-room.jpg", "/guest-room (2).jpg"],
      deluxe: ["/fairmont-deluxe-1.jpg", "/fairmont-deluxe-2.jpg", "/fairmont-deluxe-bathroom.jpg"],
      suite: ["/fairmont-suite-1.jpg", "/fairmont-suite-2.jpg", "/fairmont-suite-bathroom.jpg"],
      family: ["/fairmont-family-1.jpg", "/fairmont-family-2.jpg", "/fairmont-family-bathroom.jpg"],
      executive: ["/fairmont-executive-1.jpg", "/fairmont-executive-2.jpg", "/fairmont-executive-bathroom.jpg"],
      presidential: ["/fairmont-presidential-1.jpg", "/fairmont-presidential-2.jpg", "/fairmont-presidential-bathroom.jpg"]
    }),
    slug: "fairmont-mount-kenya-safari-club",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-003",
    name: "Ol Pejeta Bush Camp, Asilia Africa",
    location: "Nanyuki",
    rating: 4.6,
    price: 340,
    image: "/ol-pejeta-conservancy.jpg?height=300&width=400",
    gallery: [
      "/ol-pejeta-luxury-tent.jpg?height=400&width=600",
      "/ol-pejeta-bush-camp.jpg?height=400&width=600",
      "/ol-pejeta-bush-camp (1).jpg?height=400&width=600",
      "/ol-pejeta-bush-camp (2).jpg?height=400&width=600",
    ],
    description: "Premier lodge within Ol Pejeta Conservancy offering exceptional wildlife viewing and rhino conservation experiences.",
    amenities: [
      "Safari Drives",
      "Restaurant",
      "Bar",
      "Conservation Programs",
      "WiFi",
      "Room Service",
      "Photography",
      "Guides",
    ],
    address: "Ol Pejeta Conservancy",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-003", 340, {
      standard: ["/ol-pejeta-bush-camp (3).jpg", "/ol-pejeta-bush-camp (4).jpg", "/ol-pejeta-bush-camp (5).jpg"],
      deluxe: ["/ol-pejeta-deluxe-1.jpg", "/ol-pejeta-deluxe-2.jpg", "/ol-pejeta-deluxe-bathroom.jpg"],
      suite: ["/ol-pejeta-suite-1.jpg", "/ol-pejeta-suite-2.jpg", "/ol-pejeta-suite-bathroom.jpg"],
      family: ["/ol-pejeta-family-1.jpg", "/ol-pejeta-family-2.jpg", "/ol-pejeta-family-bathroom.jpg"],
      executive: ["/ol-pejeta-executive-1.jpg", "/ol-pejeta-executive-2.jpg", "/ol-pejeta-executive-bathroom.jpg"],
      presidential: ["/ol-pejeta-presidential-1.jpg", "/ol-pejeta-presidential-2.jpg", "/ol-pejeta-presidential-bathroom.jpg"]
    }),
    slug: "ol-pejeta-bush-camp",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-004",
    name: "Solio Lodge",
    location: "Nanyuki",
    rating: 4.4,
    price: 300,
    image: "/cosy-nights-at-the-main.jpg?height=300&width=400",
    gallery: [
      "/dining-in-open-spaces.jpg?height=400&width=600",
      "/beautiful-views.jpg?height=400&width=600",
      "/bird-s-eye-view-of-solio.jpg?height=400&width=600",
      "/main-lounge-at-solio.jpg?height=400&width=600",
    ],
    description: "Game lodge in Solio Game Reserve known for rhino sightings and diverse wildlife.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Parking", "WiFi", "Room Service", "Photography", "Guides"],
    address: "Solio Game Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-004", 300, {
      standard: ["/twin-bed-room-of-the.jpg", "/beautiful-and-spacious.jpg", "/relaxing-baths-and-refreshing.jpg"],
      deluxe: ["/solio-deluxe-1.jpg", "/solio-deluxe-2.jpg", "/solio-deluxe-bathroom.jpg"],
      suite: ["/solio-suite-1.jpg", "/solio-suite-2.jpg", "/solio-suite-bathroom.jpg"],
      family: ["/solio-family-1.jpg", "/solio-family-2.jpg", "/solio-family-bathroom.jpg"],
      executive: ["/solio-executive-1.jpg", "/solio-executive-2.jpg", "/solio-executive-bathroom.jpg"],
      presidential: ["/solio-presidential-1.jpg", "/solio-presidential-2.jpg", "/solio-presidential-bathroom.jpg"]
    }),
    slug: "solio-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-005",
    name: "Maisha Sweetwaters Camp",
    location: "Nanyuki",
    rating: 4.3,
    price: 270,
    image: "/caption (18).jpg?height=300&width=400",
    gallery: [
      "/reception.jpg?height=400&width=600",
      "/curio-shop.jpg?height=400&width=600",
      "/caption (19).jpg?height=400&width=600",
      "/caption (20).jpg?height=400&width=600",
    ],
    description: "Charming riverside accommodation with peaceful atmosphere perfect for relaxation.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Parking", "Room Service", "River View", "TV"],
    address: "Nanyuki",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-005", 270, {
      standard: ["/tripple-room.jpg", "/caption (22).jpg", "/caption (21).jpg"],
      deluxe: ["/sweetwaters-deluxe-1.jpg", "/sweetwaters-deluxe-2.jpg", "/sweetwaters-deluxe-bathroom.jpg"],
      suite: ["/sweetwaters-suite-1.jpg", "/sweetwaters-suite-2.jpg", "/sweetwaters-suite-bathroom.jpg"],
      family: ["/sweetwaters-family-1.jpg", "/sweetwaters-family-2.jpg", "/sweetwaters-family-bathroom.jpg"],
      executive: ["/sweetwaters-executive-1.jpg", "/sweetwaters-executive-2.jpg", "/sweetwaters-executive-bathroom.jpg"],
      presidential: ["/sweetwaters-presidential-1.jpg", "/sweetwaters-presidential-2.jpg", "/sweetwaters-presidential-bathroom.jpg"]
    }),
    slug: "maisha-sweetwaters-camp",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-006",
    name: "Falcon Heights Hotel",
    location: "Nanyuki",
    rating: 4.2,
    price: 220,
    image: "/entree-de-l-hotel.jpg?height=300&width=400",
    gallery: [
      "/img-20160107-102608-largejpg.jpg?height=400&width=600",
      "/img-20160104-174643-largejpg.jpg?height=400&width=600",
      "/jardin-et-cottages-chambres.jpg?height=400&width=600",
      "/caption (23).jpg?height=400&width=600",
    ],
    description: "3-star hotel in town center with convenient location and good facilities.",
    amenities: ["WiFi", "Restaurant", "Bar", "Meeting Rooms", "Parking", "Room Service", "TV", "Garden"],
    address: "Nanyuki Town Center",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-006", 220, {
      standard: ["/20170510-143336-largejpg.jpg", "/img-20160104-175113-largejpg.jpg", "/falcon-heights-hotel.jpg"],
      deluxe: ["/falcon-deluxe-1.jpg", "/falcon-deluxe-2.jpg", "/falcon-deluxe-bathroom.jpg"],
      suite: ["/falcon-suite-1.jpg", "/falcon-suite-2.jpg", "/falcon-suite-bathroom.jpg"],
      family: ["/falcon-family-1.jpg", "/falcon-family-2.jpg", "/falcon-family-bathroom.jpg"],
      executive: ["/falcon-executive-1.jpg", "/falcon-executive-2.jpg", "/falcon-executive-bathroom.jpg"],
      presidential: ["/falcon-presidential-1.jpg", "/falcon-presidential-2.jpg", "/falcon-presidential-bathroom.jpg"]
    }),
    slug: "falcon-heights-hotel",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-007",
    name: "Porini Rhino Camp",
    location: "Nanyuki",
    rating: 4.1,
    price: 200,
    image: "/porini-rhino-camp.jpg?height=300&width=400",
    gallery: [
      "/porini-rhino-camp (2).jpg?height=400&width=600",
      "/camp.jpg?height=400&width=600",
      "/photo3jpg (1).jpg?height=400&width=600",
      "/black-rhino.jpg?height=400&width=600",
    ],
    description: "Budget lodge on the equator offering budget accommodations and friendly atmosphere.",
    amenities: ["WiFi", "Restaurant", "Bar", "Parking", "Room Service", "TV", "Air Conditioning", "Garden"],
    address: "Nanyuki",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-007", 200, {
      standard: ["/photo5jpg (1).jpg", "/porini-rhino-camp (1).jpg", "/photo0jpg (3).jpg"],
      deluxe: ["/porini-deluxe-1.jpg", "/porini-deluxe-2.jpg", "/porini-deluxe-bathroom.jpg"],
      suite: ["/porini-suite-1.jpg", "/porini-suite-2.jpg", "/porini-suite-bathroom.jpg"],
      family: ["/porini-family-1.jpg", "/porini-family-2.jpg", "/porini-family-bathroom.jpg"],
      executive: ["/porini-executive-1.jpg", "/porini-executive-2.jpg", "/porini-executive-bathroom.jpg"],
      presidential: ["/porini-presidential-1.jpg", "/porini-presidential-2.jpg", "/porini-presidential-bathroom.jpg"]
    }),
    slug: "porini-rhino-camp",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-008",
    name: "Sweetwaters Serena Camp",
    location: "Nanyuki",
    rating: 4.3,
    price: 240,
    image: "/20190712-124350-largejpg.jpg?height=300&width=400",
    gallery: [
      "/photo6jpg (1).jpg?height=400&width=600",
      "/photo7jpg.jpg?height=400&width=600",
      "/photo0jpg (4).jpg?height=400&width=600",
      "/photo1jpg (4).jpg?height=400&width=600",
    ],
    description: "Hotel with stunning Mount Kenya views and comfortable accommodations.",
    amenities: ["WiFi", "Restaurant", "Bar", "Views", "Parking", "Room Service", "Garden", "TV"],
    address: "Nanyuki",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-008", 240, {
      standard: ["/photo2jpg (3).jpg", "/photo3jpg (2).jpg", "/double-sinks.jpg"],
      deluxe: ["/sweetwaters-serena-deluxe-1.jpg", "/sweetwaters-serena-deluxe-2.jpg", "/sweetwaters-serena-deluxe-bathroom.jpg"],
      suite: ["/sweetwaters-serena-suite-1.jpg", "/sweetwaters-serena-suite-2.jpg", "/sweetwaters-serena-suite-bathroom.jpg"],
      family: ["/sweetwaters-serena-family-1.jpg", "/sweetwaters-serena-family-2.jpg", "/sweetwaters-serena-family-bathroom.jpg"],
      executive: ["/sweetwaters-serena-executive-1.jpg", "/sweetwaters-serena-executive-2.jpg", "/sweetwaters-serena-executive-bathroom.jpg"],
      presidential: ["/sweetwaters-serena-presidential-1.jpg", "/sweetwaters-serena-presidential-2.jpg", "/sweetwaters-serena-presidential-bathroom.jpg"]
    }),
    slug: "sweetwaters-serena-camp",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-009",
    name: "Tha Nickolee Hotel",
    location: "Nanyuki",
    rating: 4.0,
    price: 180,
    image: "/caption (24).jpg?height=300&width=400",
    gallery: [
      "/caption (1).jpg?height=400&width=600",
      "/images.jpg?height=400&width=600",
      "/4b410aed.webp?height=400&width=600",
      "/images (1).jpg?height=400&width=600",
    ],
    description: "Budget hotel with basic amenities in peaceful setting.",
    amenities: ["WiFi", "Restaurant", "Bar", "Parking", "Room Service", "TV", "Air Conditioning"],
    address: "Nanyuki",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-009", 180, {
      standard: ["/caption (2).jpg", "/704378222.jpg", "/704377941.jpg"],
      deluxe: ["/nickolee-deluxe-1.jpg", "/nickolee-deluxe-2.jpg", "/nickolee-deluxe-bathroom.jpg"],
      suite: ["/nickolee-suite-1.jpg", "/nickolee-suite-2.jpg", "/nickolee-suite-bathroom.jpg"],
      family: ["/nickolee-family-1.jpg", "/nickolee-family-2.jpg", "/nickolee-family-bathroom.jpg"],
      executive: ["/nickolee-executive-1.jpg", "/nickolee-executive-2.jpg", "/nickolee-executive-bathroom.jpg"],
      presidential: ["/nickolee-presidential-1.jpg", "/nickolee-presidential-2.jpg", "/nickolee-presidential-bathroom.jpg"]
    }),
    slug: "tha-nickolee-hotel",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-010",
    name: "Olesamara Collection",
    location: "Nanyuki",
    rating: 4.2,
    price: 210,
    image: "/ole-samara-guest-suites.jpg?height=300&width=400",
    gallery: [
      "/enjoy-our-sensory-gardens.jpg?height=400&width=600",
      "/ole-samara-guest-suites (1).jpg?height=400&width=600",
      "/ole-samara-guest-suites (4).jpg?height=400&width=600",
      "/one-of-the-nature-trails.jpg?height=400&width=600",
    ],
    description: "3-star hotel with comfortable rooms and friendly service.",
    amenities: ["WiFi", "Restaurant", "Pool", "Bar", "Parking", "Room Service", "TV", "Garden"],
    address: "Nanyuki",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-010", 210, {
      standard: ["/ole-samara-guest-suites (3).jpg", "/outdoor-kitchen-fireplace.jpg", "/ole-samara-guest-suites (2).jpg"],
      deluxe: ["/olesamara-deluxe-1.jpg", "/olesamara-deluxe-2.jpg", "/olesamara-deluxe-bathroom.jpg"],
      suite: ["/olesamara-suite-1.jpg", "/olesamara-suite-2.jpg", "/olesamara-suite-bathroom.jpg"],
      family: ["/olesamara-family-1.jpg", "/olesamara-family-2.jpg", "/olesamara-family-bathroom.jpg"],
      executive: ["/olesamara-executive-1.jpg", "/olesamara-executive-2.jpg", "/olesamara-executive-bathroom.jpg"],
      presidential: ["/olesamara-presidential-1.jpg", "/olesamara-presidential-2.jpg", "/olesamara-presidential-bathroom.jpg"]
    }),
    slug: "olesamara-collection",
    updatedAt: new Date()
  },
  
  {
    id: "nanyuki-011",
    name: "Comfort Gardens",
    location: "Nanyuki",
    rating: 4.3,
    price: 250,
    image: "/photo0jpg (5).jpg?height=300&width=400",
    gallery: [
      "/comfort-gardens-sweetwaters (2).jpg?height=400&width=600",
      "/at-comfort-gardens-sweetwaters.jpg?height=400&width=600",
      "/caption (26).jpg?height=400&width=600",
      "/caption (25).jpg?height=400&width=600",
    ],
    description: "Mountain-themed hotel with quality facilities and mountain charm.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Parking", "Room Service", "TV", "Meeting Rooms"],
    address: "Nanyuki",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("nanyuki-011", 250, {
      standard: ["/comfort-gardens-sweetwaters (1).jpg", "/comfort-gardens-sweetwaters (3).jpg", "/269095816.jpg"],
      deluxe: ["/comfort-gardens-deluxe-1.jpg", "/comfort-gardens-deluxe-2.jpg", "/comfort-gardens-deluxe-bathroom.jpg"],
      suite: ["/comfort-gardens-suite-1.jpg", "/comfort-gardens-suite-2.jpg", "/comfort-gardens-suite-bathroom.jpg"],
      family: ["/comfort-gardens-family-1.jpg", "/comfort-gardens-family-2.jpg", "/comfort-gardens-family-bathroom.jpg"],
      executive: ["/comfort-gardens-executive-1.jpg", "/comfort-gardens-executive-2.jpg", "/comfort-gardens-executive-bathroom.jpg"],
      presidential: ["/comfort-gardens-presidential-1.jpg", "/comfort-gardens-presidential-2.jpg", "/comfort-gardens-presidential-bathroom.jpg"]
    }),
    slug: "comfort-gardens",
    updatedAt: new Date()
  },

  // ========== MAASAI MARA HOTELS ==========
  {
    id: "maasai-mara-001",
    name: "Rekero Camp",
    location: "Maasai Mara",
    rating: 4.9,
    price: 450,
    image: "/overlooking-a-crossing.jpg?height=300&width=400",
    gallery: [
      "/the-deck-at-rekero-camp.jpg?height=400&width=600",
      "/a-private-dining-table.jpg?height=400&width=600",
      "/the-lounge-welcome-area.jpg?height=400&width=600",
      "/a-hot-air-balloon-safari.jpg?height=400&width=600",
    ],
    description: "Premier luxury camp in Maasai Mara offering unparalleled safari experiences during the Great Migration.",
    amenities: ["All-Inclusive", "Safari Drives", "Hot Air Balloons", "Fine Dining", "Spa", "Bar", "WiFi", "Guides"],
    address: "Maasai Mara National Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-001", 450, {
      standard: ["/the-interior-of-a-guest.jpg", "/all-guest-tents-at-rekero.jpg", "/double-vanity-space-in.jpg"],
      deluxe: ["/rekero-deluxe-1.jpg", "/rekero-deluxe-2.jpg", "/rekero-deluxe-bathroom.jpg"],
      suite: ["/rekero-suite-1.jpg", "/rekero-suite-2.jpg", "/rekero-suite-bathroom.jpg"],
      family: ["/rekero-family-1.jpg", "/rekero-family-2.jpg", "/rekero-family-bathroom.jpg"],
      executive: ["/rekero-executive-1.jpg", "/rekero-executive-2.jpg", "/rekero-executive-bathroom.jpg"],
      presidential: ["/rekero-presidential-1.jpg", "/rekero-presidential-2.jpg", "/rekero-presidential-bathroom.jpg"]
    }),
    slug: "rekero-camp",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-002",
    name: "Hemingways Ol Seki Mara",
    location: "Maasai Mara",
    rating: 4.7,
    price: 400,
    image: "/nina-tent.jpg?height=300&width=400",
    gallery: [
      "/ol-seki-hemingways-mara.jpg?height=400&width=600",
      "/a-cave-dinner-at-hemingways.jpg?height=400&width=600",
      "/aerial-view-of-the-camp.jpg?height=400&width=600",
      "/simba-private-villa.jpg?height=400&width=600",
    ],
    description: "All-inclusive safari lodge with panoramic views and exceptional wildlife viewing opportunities.",
    amenities: ["All-Inclusive", "Safari Drives", "Restaurant", "Pool", "Bar", "Photography", "WiFi", "Guides"],
    address: "Maasai Mara",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-002", 400, {
      standard: ["/nina-tent (1).jpg", "/nina-tent-bathroom (1).jpg", "/outdoor-shower.jpg"],
      deluxe: ["/hemingways-deluxe-1.jpg", "/hemingways-deluxe-2.jpg", "/hemingways-deluxe-bathroom.jpg"],
      suite: ["/hemingways-suite-1.jpg", "/hemingways-suite-2.jpg", "/hemingways-suite-bathroom.jpg"],
      family: ["/hemingways-family-1.jpg", "/hemingways-family-2.jpg", "/hemingways-family-bathroom.jpg"],
      executive: ["/hemingways-executive-1.jpg", "/hemingways-executive-2.jpg", "/hemingways-executive-bathroom.jpg"],
      presidential: ["/hemingways-presidential-1.jpg", "/hemingways-presidential-2.jpg", "/hemingways-presidential-bathroom.jpg"]
    }),
    slug: "hemingways-ol-seki-mara",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-003",
    name: "Fairmont Mara Safari Club",
    location: "Maasai Mara",
    rating: 4.6,
    price: 380,
    image: "/fairmont-mara-safari.jpg?height=300&width=400",
    gallery: [
      "/fairmont-mara-safari (4).jpg?height=400&width=600",
      "/fairmont-mara-safari (3).jpg?height=400&width=600",
      "/fairmont-mara-safari (2).jpg?height=400&width=600",
      "/outdoor-dining.jpg?height=400&width=600",
    ],
    description: "Exclusive tented camp offering luxury accommodations and personalized safari experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Room Service", "Guides", "Campfire"],
    address: "Maasai Mara Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-003", 380, {
      standard: ["/river-front-tent-double.jpg", "/fairmont-mara-safari (1).jpg", "/outdoor-shower (1).jpg"],
      deluxe: ["/fairmont-mara-deluxe-1.jpg", "/fairmont-mara-deluxe-2.jpg", "/fairmont-mara-deluxe-bathroom.jpg"],
      suite: ["/fairmont-mara-suite-1.jpg", "/fairmont-mara-suite-2.jpg", "/fairmont-mara-suite-bathroom.jpg"],
      family: ["/fairmont-mara-family-1.jpg", "/fairmont-mara-family-2.jpg", "/fairmont-mara-family-bathroom.jpg"],
      executive: ["/fairmont-mara-executive-1.jpg", "/fairmont-mara-executive-2.jpg", "/fairmont-mara-executive-bathroom.jpg"],
      presidential: ["/fairmont-mara-presidential-1.jpg", "/fairmont-mara-presidential-2.jpg", "/fairmont-mara-presidential-bathroom.jpg"]
    }),
    slug: "fairmont-mara-safari-club",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-004",
    name: "Mara Serena Safari Lodge",
    location: "Maasai Mara",
    rating: 4.5,
    price: 350,
    image: "/exterior (2).jpg?height=300&width=400",
    gallery: [
      "/entrance.jpg?height=400&width=600",
      "/bar.jpg?height=400&width=600",
      "/photo0jpg (8).jpg?height=400&width=600",
      "/mara-serena-safari-lodge.jpg?height=400&width=600",
    ],
    description: "Intimate bush camp in remote Mara location with authentic wilderness safari experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Campfire", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Maasai Mara",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-004", 350, {
      standard: ["/photo7jpg (1).jpg", "/photo8jpg.jpg", "/mara-serena-safari-lodge (1).jpg"],
      deluxe: ["/mara-serena-deluxe-1.jpg", "/mara-serena-deluxe-2.jpg", "/mara-serena-deluxe-bathroom.jpg"],
      suite: ["/mara-serena-suite-1.jpg", "/mara-serena-suite-2.jpg", "/mara-serena-suite-bathroom.jpg"],
      family: ["/mara-serena-family-1.jpg", "/mara-serena-family-2.jpg", "/mara-serena-family-bathroom.jpg"],
      executive: ["/mara-serena-executive-1.jpg", "/mara-serena-executive-2.jpg", "/mara-serena-executive-bathroom.jpg"],
      presidential: ["/mara-serena-presidential-1.jpg", "/mara-serena-presidential-2.jpg", "/mara-serena-presidential-bathroom.jpg"]
    }),
    slug: "mara-serena-safari-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-005",
    name: "Mara Intrepids",
    location: "Maasai Mara",
    rating: 4.6,
    price: 390,
    image: "/photo0jpg (6).jpg?height=300&width=400",
    gallery: [
      "/photo0jpg (7).jpg?height=400&width=600",
      "/mara-intrepids-luxury.jpg?height=400&width=600",
      "/mara-intrepids-luxury (2).jpg?height=400&width=600",
      "/mara-intrepids-luxury (3).jpg?height=400&width=600",
    ],
    description: "Exclusive luxury club offering bespoke safari experiences and exceptional amenities.",
    amenities: ["Luxury Tents", "Safari Drives", "Fine Dining", "Pool", "Spa", "Bar", "WiFi", "Guides"],
    address: "Maasai Mara",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-005", 390, {
      standard: ["/our-bed-inside-our-tent.jpg", "/mara-intrepids-luxury (4).jpg", "/mara-intrepids-luxury (1).jpg"],
      deluxe: ["/mara-intrepids-deluxe-1.jpg", "/mara-intrepids-deluxe-2.jpg", "/mara-intrepids-deluxe-bathroom.jpg"],
      suite: ["/mara-intrepids-suite-1.jpg", "/mara-intrepids-suite-2.jpg", "/mara-intrepids-suite-bathroom.jpg"],
      family: ["/mara-intrepids-family-1.jpg", "/mara-intrepids-family-2.jpg", "/mara-intrepids-family-bathroom.jpg"],
      executive: ["/mara-intrepids-executive-1.jpg", "/mara-intrepids-executive-2.jpg", "/mara-intrepids-executive-bathroom.jpg"],
      presidential: ["/mara-intrepids-presidential-1.jpg", "/mara-intrepids-presidential-2.jpg", "/mara-intrepids-presidential-bathroom.jpg"]
    }),
    slug: "mara-intrepids",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-006",
    name: "Mara Siria Tented Camp",
    location: "Maasai Mara",
    rating: 4.4,
    price: 320,
    image: "/outside-lunch-area.jpg?height=300&width=400",
    gallery: [
      "/incredible-action-in.jpg?height=400&width=600",
      "/pool-with-a-view.jpg?height=400&width=600",
      "/mara-siria-camp.jpg?height=400&width=600",
      "/viewing-platforms-in.jpg?height=400&width=600",
    ],
    description: "Well-established safari camp with excellent game viewing and authentic safari atmosphere.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Parking", "Guides", "Room Service"],
    address: "Maasai Mara",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-006", 320, {
      standard: ["/deluxe-tent.jpg", "/caption (28).jpg", "/caption (27).jpg"],
      deluxe: ["/mara-siria-deluxe-1.jpg", "/mara-siria-deluxe-2.jpg", "/mara-siria-deluxe-bathroom.jpg"],
      suite: ["/mara-siria-suite-1.jpg", "/mara-siria-suite-2.jpg", "/mara-siria-suite-bathroom.jpg"],
      family: ["/mara-siria-family-1.jpg", "/mara-siria-family-2.jpg", "/mara-siria-family-bathroom.jpg"],
      executive: ["/mara-siria-executive-1.jpg", "/mara-siria-executive-2.jpg", "/mara-siria-executive-bathroom.jpg"],
      presidential: ["/mara-siria-presidential-1.jpg", "/mara-siria-presidential-2.jpg", "/mara-siria-presidential-bathroom.jpg"]
    }),
    slug: "mara-siria-tented-camp",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-007",
    name: "Serenity Mara Legends Camp",
    location: "Maasai Mara",
    rating: 4.7,
    price: 410,
    image: "/caption (29).jpg?height=300&width=400",
    gallery: [
      "/caption (35).jpg?height=400&width=600",
      "/caption (30).jpg?height=400&width=600",
      "/caption (33).jpg?height=400&width=600",
      "/caption (36).jpg?height=400&width=600",
    ],
    description: "Premium tented camp with elegant accommodations and exceptional safari services.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Spa", "Guides"],
    address: "Maasai Mara",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-007", 410, {
      standard: ["/caption (32).jpg", "/caption (34).jpg", "/caption (31).jpg"],
      deluxe: ["/serenity-deluxe-1.jpg", "/serenity-deluxe-2.jpg", "/serenity-deluxe-bathroom.jpg"],
      suite: ["/serenity-suite-1.jpg", "/serenity-suite-2.jpg", "/serenity-suite-bathroom.jpg"],
      family: ["/serenity-family-1.jpg", "/serenity-family-2.jpg", "/serenity-family-bathroom.jpg"],
      executive: ["/serenity-executive-1.jpg", "/serenity-executive-2.jpg", "/serenity-executive-bathroom.jpg"],
      presidential: ["/serenity-presidential-1.jpg", "/serenity-presidential-2.jpg", "/serenity-presidential-bathroom.jpg"]
    }),
    slug: "serenity-mara-legends-camp",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-008",
    name: "Offbeat Mara Camp",
    location: "Maasai Mara",
    rating: 4.5,
    price: 360,
    image: "/offbeat-mara-camp.jpg?height=300&width=400",
    gallery: [
      "/offbeat-mara-camp (2).jpg?height=400&width=600",
      "/offbeat-mara-camp (3).jpg?height=400&width=600",
      "/offbeat-mara-camp (4).jpg?height=400&width=600",
      "/offbeat-mara-camp (5).jpg?height=400&width=600",
    ],
    description: "Luxury camp with intimate setting and personalized safari experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Room Service", "Guides", "Campfire"],
    address: "Maasai Mara",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("maasai-mara-008", 360, {
      standard: ["/offbeat-mara-camp (1).jpg", "/offbeat-mara-camp (6).jpg", "/private-bathroom.jpg"],
      deluxe: ["/offbeat-deluxe-1.jpg", "/offbeat-deluxe-2.jpg", "/offbeat-deluxe-bathroom.jpg"],
      suite: ["/offbeat-suite-1.jpg", "/offbeat-suite-2.jpg", "/offbeat-suite-bathroom.jpg"],
      family: ["/offbeat-family-1.jpg", "/offbeat-family-2.jpg", "/offbeat-family-bathroom.jpg"],
      executive: ["/offbeat-executive-1.jpg", "/offbeat-executive-2.jpg", "/offbeat-executive-bathroom.jpg"],
      presidential: ["/offbeat-presidential-1.jpg", "/offbeat-presidential-2.jpg", "/offbeat-presidential-bathroom.jpg"]
    }),
    slug: "offbeat-mara-camp",
    updatedAt: new Date()
  },
  
  {
    id: "maasai-mara-009",
    name: "Angama Mara",
    location: "Maasai Mara",
    rating: 4.9,
    price: 1250,
    image: "/angama-mara.webp?height=400&width=600",
    gallery: [
      "/hotels/angama-mara/angama-mara-gallery-1.jpg?height=400&width=600",
      "/hotels/angama-mara/angama-mara-gallery-2.jpg?height=400&width=600",
      "/hotels/angama-mara/angama-mara-gallery-3.jpg?height=400&width=600",
      "/hotels/angama-mara/angama-mara-gallery-4.jpg?height=400&width=600",
    ],
    description: "Perched on the Oloololo Escarpment, overlooking the Mara Triangle. Every suite has a view.",
    amenities: ["Infinity Pool", "Spa", "Free WiFi", "Restaurant", "Bar", "Photography Studio", "Gym", "Boutique"],
    address: "Oloololo Escarpment, Maasai Mara National Reserve, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("angama-mara", 1250, {
      standard: ["/angama-standard-1.jpg", "/angama-standard-2.jpg"],
      deluxe: ["/angama-deluxe-1.jpg", "/angama-deluxe-2.jpg"],
      suite: ["/angama-suite-1.jpg", "/angama-suite-2.jpg"],
      family: ["/angama-family-1.jpg", "/angama-family-2.jpg"],
      executive: ["/angama-executive-1.jpg", "/angama-executive-2.jpg"],
      presidential: ["/angama-presidential-1.jpg", "/angama-presidential-2.jpg"]
    }),
    slug: "angama-mara",
    updatedAt: new Date()
  },

  // ========== AMBOSELI HOTELS ==========
  {
    id: "amboseli-001",
    name: "Ol Tukai Lodge Amboseli",
    location: "Amboseli",
    rating: 4.8,
    price: 420,
    image: "/pool-area.jpg?height=300&width=400",
    gallery: [
      "/ariel-view-of-the-lodge.jpg?height=400&width=600",
      "/kilimanjaro-view-side.jpg?height=400&width=600",
      "/swimming-pool.jpg?height=400&width=600",
      "/ol-tukai-lodge.jpg?height=400&width=600",
      "/ol-tukai-lodge (1).jpg?height=400&width=600",
      "/ol-tukai-lodge (2).jpg?height=400&width=600",
      "/20181122-062715-largejpg.jpg?height=400&width=600",
    ],
    description: "Luxury lodge with stunning Mount Kilimanjaro views and exceptional wildlife experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Spa", "Guides"],
    address: "Amboseli National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-001", 420, {
      standard: ["/ol-tukai-new-rooms.jpg", "/reception (1).jpg", "/ol-tukai-lodge (3).jpg"],
      deluxe: ["/ol-tukai-new-rooms.jpg", "/reception (1).jpg", "/ol-tukai-lodge (3).jpg"],
      suite: ["/ol-tukai-new-rooms.jpg", "/reception (1).jpg", "/ol-tukai-lodge (3).jpg"],
      family: ["/ol-tukai-new-rooms.jpg", "/reception (1).jpg", "/ol-tukai-lodge (3).jpg"],
      executive: ["/ol-tukai-new-rooms.jpg", "/reception (1).jpg", "/ol-tukai-lodge (3).jpg"],
      presidential: ["/ol-tukai-new-rooms.jpg", "/reception (1).jpg", "/ol-tukai-lodge (3).jpg"]
    }),
    slug: "ol-tukai-lodge-amboseli",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-002",
    name: "Sentrim Amboseli Lodge",
    location: "Amboseli",
    rating: 4.6,
    price: 380,
    image: "/swimming-pool (1).jpg?height=300&width=400",
    gallery: [
      "/caption (57).jpg?height=400&width=600",
      "/caption (50).jpg?height=400&width=600",
      "/sentrim-amboseli-2.jpg?height=400&width=600",
      "/caption (56).jpg?height=400&width=600",
      "/caption (55).jpg?height=400&width=600",
      "/caption (53).jpg?height=400&width=600",
      "/caption (52).jpg?height=400&width=600",
      "/caption (51).jpg?height=400&width=600",
    ],
    description: "All-inclusive lodge with Kilimanjaro views and excellent safari amenities.",
    amenities: ["All-Inclusive", "Safari Drives", "Restaurant", "Pool", "Bar", "Photography", "WiFi", "Guides"],
    address: "Amboseli",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-002", 380, {
      standard: ["/caption (54).jpg", "/caption (58).jpg", "/excellent-bathroom.jpg"],
      deluxe: ["/caption (54).jpg", "/caption (58).jpg", "/excellent-bathroom.jpg"],
      suite: ["/caption (54).jpg", "/caption (58).jpg", "/excellent-bathroom.jpg"],
      family: ["/caption (54).jpg", "/caption (58).jpg", "/excellent-bathroom.jpg"],
      executive: ["/caption (54).jpg", "/caption (58).jpg", "/excellent-bathroom.jpg"],
      presidential: ["/caption (54).jpg", "/caption (58).jpg", "/excellent-bathroom.jpg"]
    }),
    slug: "sentrim-amboseli-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-003",
    name: "Amboseli Serena Safari Lodge",
    location: "Amboseli",
    rating: 4.5,
    price: 350,
    image: "/aerial-view.jpg?height=300&width=400",
    gallery: [
      "/view-from-the-outdoor.jpg?height=400&width=600",
      "/exteriors-of-the-rooms.jpg?height=400&width=600",
      "/the-pool (1).jpg?height=400&width=600",
      "/restaurant (1).jpg?height=400&width=600",
      "/views-of-amboseli-national.jpg?height=400&width=600",
      "/amboseli-national-park.jpg?height=400&width=600",
      "/zebras-in-the-park.jpg?height=400&width=600",
      "/elephant-with-kilimanjaro.jpg?height=400&width=600",
    ],
    description: "Historic lodge in Amboseli with excellent wildlife viewing and cultural experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Room Service", "Guides", "Parking"],
    address: "Amboseli National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-003", 350, {
      standard: ["/standard-double-room.jpg", "/telephone-in-the-room.jpg", "/his-and-hers-sinks.jpg"],
      deluxe: ["/standard-double-room.jpg", "/telephone-in-the-room.jpg", "/his-and-hers-sinks.jpg"],
      suite: ["/standard-double-room.jpg", "/telephone-in-the-room.jpg", "/his-and-hers-sinks.jpg"],
      family: ["/standard-double-room.jpg", "/telephone-in-the-room.jpg", "/his-and-hers-sinks.jpg"],
      executive: ["/standard-double-room.jpg", "/telephone-in-the-room.jpg", "/his-and-hers-sinks.jpg"],
      presidential: ["/standard-double-room.jpg", "/telephone-in-the-room.jpg", "/his-and-hers-sinks.jpg"]
    }),
    slug: "amboseli-serena-safari-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-004",
    name: "Tulia Amboseli Safari Camp",
    location: "Amboseli",
    rating: 4.4,
    price: 320,
    image: "/tulia-amboseli-safari.jpg?height=300&width=400",
    gallery: [
      "/firepit-with-view-of.jpg?height=400&width=600",
      "/superb-safari-tent.jpg?height=400&width=600",
      "/deluxe-tents-overlooking.jpg?height=400&width=600",
      "/active-watering-hole.jpg?height=400&width=600",
      "/caption (59).jpg?height=400&width=600",
      "/caption (60).jpg?height=400&width=600",
      "/caption (61).jpg?height=400&width=600",
    ],
    description: "Eco-friendly camp with sustainable practices and authentic safari experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Parking"],
    address: "Amboseli",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-004", 320, {
      standard: ["/superb-safari-tent-with.jpg", "/superb-safari-tent-sitting.jpg", "/caption (62).jpg"],
      deluxe: ["/superb-safari-tent-with.jpg", "/superb-safari-tent-sitting.jpg", "/caption (62).jpg"],
      suite: ["/superb-safari-tent-with.jpg", "/superb-safari-tent-sitting.jpg", "/caption (62).jpg"],
      family: ["/superb-safari-tent-with.jpg", "/superb-safari-tent-sitting.jpg", "/caption (62).jpg"],
      executive: ["/superb-safari-tent-with.jpg", "/superb-safari-tent-sitting.jpg", "/caption (62).jpg"],
      presidential: ["/superb-safari-tent-with.jpg", "/superb-safari-tent-sitting.jpg", "/caption (62).jpg"]
    }),
    slug: "tulia-amboseli-safari-camp",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-005",
    name: "Kibo Safari Camp",
    location: "Amboseli",
    rating: 4.3,
    price: 290,
    image: "/pool (1).jpg?height=300&width=400",
    gallery: [
      "/getlstd-property-photo.jpg?height=400&width=600",
      "/caption (63).jpg?height=400&width=600",
      "/kibo-safari-camp (1).jpg?height=400&width=600",
      "/kibo-safari-camp.jpg?height=400&width=600",
      "/a-fun-bonfire-after-dinner.jpg?height=400&width=600",
      "/kibo-safari-camp (2).jpg?height=400&width=600",
      "/kibo-safari-camp (3).jpg?height=400&width=600",
    ],
    description: "Budget-friendly bush camp with good facilities and elephant viewing opportunities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Campfire"],
    address: "Amboseli",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-005", 290, {
      standard: ["/photo2jpg (4).jpg", "/luxurious-rooms-for-some.jpg", "/kibo-safari-camp (4).jpg"],
      deluxe: ["/photo2jpg (4).jpg", "/luxurious-rooms-for-some.jpg", "/kibo-safari-camp (4).jpg"],
      suite: ["/photo2jpg (4).jpg", "/luxurious-rooms-for-some.jpg", "/kibo-safari-camp (4).jpg"],
      family: ["/photo2jpg (4).jpg", "/luxurious-rooms-for-some.jpg", "/kibo-safari-camp (4).jpg"],
      executive: ["/photo2jpg (4).jpg", "/luxurious-rooms-for-some.jpg", "/kibo-safari-camp (4).jpg"],
      presidential: ["/photo2jpg (4).jpg", "/luxurious-rooms-for-some.jpg", "/kibo-safari-camp (4).jpg"]
    }),
    slug: "kibo-safari-camp-amboseli",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-006",
    name: "Maasai Simba Camp",
    location: "Amboseli",
    rating: 4.2,
    price: 270,
    image: "/2023-05-01.webp?height=300&width=400",
    gallery: [
      "/simba.camp.gate.webp?height=400&width=600",
      "/maasai-simba-camp (4).jpg?height=400&width=600",
      "/maasai-simba-camp (3).jpg?height=400&width=600",
      "/Elephants.Amboseli.webp?height=400&width=600",
      "/2023-05-01 (1).webp?height=400&width=600",
      "/maasai-simba-camp.jpg?height=400&width=600",
      "/maasai-simba-camp (1).jpg?height=400&width=600",
      "/maasai-simba-camp (2).jpg?height=400&width=600",
    ],
    description: "Park-operated lodge offering authentic safari experience and cultural programs.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Parking", "TV"],
    address: "Amboseli National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-006", 270, {
      standard: ["/maasai-simba-standard-1.jpg", "/IMG_1452.webp", "/en-suite-bathroom.jpg"],
      deluxe: ["/maasai-simba-deluxe-1.jpg", "/IMG_1452.webp", "/en-suite-bathroom.jpg"],
      suite: ["/maasai-simba-suite-1.jpg", "/IMG_1452.webp", "/en-suite-bathroom.jpg"],
      family: ["/maasai-simba-family-1.jpg", "/IMG_1452.webp", "/en-suite-bathroom.jpg"],
      executive: ["/maasai-simba-executive-1.jpg", "/IMG_1452.webp", "/en-suite-bathroom.jpg"],
      presidential: ["/maasai-simba-presidential-1.jpg", "/IMG_1452.webp", "/en-suite-bathroom.jpg"]
    }),
    slug: "maasai-simba-camp",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-007",
    name: "Ol Donyo Lodge",
    location: "Amboseli",
    rating: 4.9,
    price: 980,
    image: "/ol-donyo.webp?height=400&width=600",
    gallery: [
      "/hotels/ol-donyo/ol-donyo-gallery-1.jpg?height=400&width=600",
      "/hotels/ol-donyo/ol-donyo-gallery-2.jpg?height=400&width=600",
      "/hotels/ol-donyo/ol-donyo-gallery-3.jpg?height=400&width=600",
      "/hotels/ol-donyo/ol-donyo-gallery-4.jpg?height=400&width=600",
    ],
    description: "Spectacular Kilimanjaro views from your private plunge pool. Exclusive conservancy.",
    amenities: ["Private Plunge Pools", "Horseback Safaris", "Star Beds", "Gym", "Spa", "Free WiFi", "Restaurant", "Bar"],
    address: "Chyulu Hills, Amboseli Region, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("ol-donyo", 980, {
      standard: ["/ol-donyo-standard-1.jpg", "/ol-donyo-standard-2.jpg"],
      deluxe: ["/ol-donyo-deluxe-1.jpg", "/ol-donyo-deluxe-2.jpg"],
      suite: ["/ol-donyo-suite-1.jpg", "/ol-donyo-suite-2.jpg"],
      family: ["/ol-donyo-family-1.jpg", "/ol-donyo-family-2.jpg"],
      executive: ["/ol-donyo-executive-1.jpg", "/ol-donyo-executive-2.jpg"],
      presidential: ["/ol-donyo-presidential-1.jpg", "/ol-donyo-presidential-2.jpg"]
    }),
    slug: "ol-donyo-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-008",
    name: "Zebra Plain Safari Camp",
    location: "Amboseli",
    rating: 4.1,
    price: 250,
    image: "/getlstd-property-photo (1).jpg?height=300&width=400",
    gallery: [
      "/zebra-plains-amboseli (2).jpg?height=400&width=600",
      "/caption (64).jpg?height=400&width=600",
      "/zebra-plains-amboseli (3).jpg?height=400&width=600",
      "/zebra-plains-amboseli (7).jpg?height=400&width=600",
      "/zebra-plains-amboseli (4).jpg?height=400&width=600",
      "/zebra-plains-amboseli (1).jpg?height=400&width=600",
      "/zebra-plains-amboseli (5).jpg?height=400&width=600",
      "/caption (65).jpg?height=400&width=600",
      "/zebra-plains-amboseli.jpg?height=400&width=600",
    ],
    description: "Comfortable safari camp with authentic wilderness experience.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Guides", "Parking", "Photography", "Room Service"],
    address: "Amboseli",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-008", 250, {
      standard: ["/zebra-plains-amboseli (6).jpg", "/zebra-plains-amboseli (8).jpg", "/zebra-plains-amboseli (9).jpg"],
      deluxe: ["/zebra-plains-amboseli (6).jpg", "/zebra-plains-amboseli (8).jpg", "/zebra-plains-amboseli (9).jpg"],
      suite: ["/zebra-plains-amboseli (6).jpg", "/zebra-plains-amboseli (8).jpg", "/zebra-plains-amboseli (9).jpg"],
      family: ["/zebra-plains-amboseli (6).jpg", "/zebra-plains-amboseli (8).jpg", "/zebra-plains-amboseli (9).jpg"],
      executive: ["/zebra-plains-amboseli (6).jpg", "/zebra-plains-amboseli (8).jpg", "/zebra-plains-amboseli (9).jpg"],
      presidential: ["/zebra-plains-amboseli (6).jpg", "/zebra-plains-amboseli (8).jpg", "/zebra-plains-amboseli (9).jpg"]
    }),
    slug: "zebra-plain-safari-camp",
    updatedAt: new Date()
  },
  
  {
    id: "amboseli-009",
    name: "WE4Kenya Guest House",
    location: "Amboseli",
    rating: 4.3,
    price: 300,
    image: "/lazienki-i-toalety.jpg?height=300&width=400",
    gallery: [
      "/we-also-have-ready-tents.jpg?height=400&width=600",
      "/we4kenya-guesthouses (1).jpg?height=400&width=600",
      "/breakfast-is-ready.jpg?height=400&width=600",
      "/photo2jpg (5).jpg?height=400&width=600",
      "/jadalnia.jpg?height=400&width=600",
      "/washrooms-with-hot-showers.jpg?height=400&width=600",
      "/we4kenya-guesthouses (2).jpg?height=400&width=600",
    ],
    description: "Wilderness camp offering authentic experiences and excellent guides.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Campfire"],
    address: "Amboseli",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("amboseli-009", 300, {
      standard: ["/we4kenya-guesthouses.jpg", "/we4kenya-guesthouses (3).jpg", "/we4kenya-standard-bathroom.jpg"],
      deluxe: ["/we4kenya-guesthouses.jpg", "/we4kenya-guesthouses (3).jpg", "/we4kenya-deluxe-bathroom.jpg"],
      suite: ["/we4kenya-guesthouses.jpg", "/we4kenya-guesthouses (3).jpg", "/we4kenya-suite-bathroom.jpg"],
      family: ["/we4kenya-guesthouses.jpg", "/we4kenya-guesthouses (3).jpg", "/we4kenya-family-bathroom.jpg"],
      executive: ["/we4kenya-guesthouses.jpg", "/we4kenya-guesthouses (3).jpg", "/we4kenya-executive-bathroom.jpg"],
      presidential: ["/we4kenya-guesthouses.jpg", "/we4kenya-guesthouses (3).jpg", "/we4kenya-presidential-bathroom.jpg"]
    }),
    slug: "we4kenya-guest-house",
    updatedAt: new Date()
  },

  // ========== TSAVO EAST HOTELS ==========
  {
    id: "tsavo-east-001",
    name: "Satao Tented Camp",
    location: "Tsavo East",
    rating: 4.7,
    price: 380,
    image: "/suite-tents.jpg?height=300&width=400",
    gallery: [
      "/the-satao-camp-restaurant.jpg?height=400&width=600",
      "/the-busy-satao-camp-waterhole.jpg?height=400&width=600",
      "/caption (37).jpg?height=400&width=600",
      "/view-from-our-tent-simply.jpg?height=400&width=600",
    ],
    description: "Premier lodge in Tsavo East with excellent wildlife viewing and red soil landscapes.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Tsavo East National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-001", 380, {
      standard: ["/standard-tent.jpg", "/photo1jpg (5).jpg", "/satao-luxury-tented-camp.jpg"],
      deluxe: ["/satao-deluxe-1.jpg", "/satao-deluxe-2.jpg", "/satao-deluxe-bathroom.jpg"],
      suite: ["/satao-suite-1.jpg", "/satao-suite-2.jpg", "/satao-suite-bathroom.jpg"],
      family: ["/satao-family-1.jpg", "/satao-family-2.jpg", "/satao-family-bathroom.jpg"],
      executive: ["/satao-executive-1.jpg", "/satao-executive-2.jpg", "/satao-executive-bathroom.jpg"],
      presidential: ["/satao-presidential-1.jpg", "/satao-presidential-2.jpg", "/satao-presidential-bathroom.jpg"]
    }),
    slug: "satao-tented-camp",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-east-002",
    name: "Voi Wildlife Lodge",
    location: "Tsavo East",
    rating: 4.5,
    price: 340,
    image: "/acacia-pool.jpg?height=300&width=400",
    gallery: [
      "/view-of-the-acacia-wing.jpg?height=400&width=600",
      "/view-from-the-water-hole.jpg?height=400&width=600",
      "/sunset-at-the-spa-bar.jpg?height=400&width=600",
      "/acacia-pizza-restaurant.jpg?height=400&width=600",
    ],
    description: "Established safari lodge with panoramic views and quality amenities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Tsavo East",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-002", 340, {
      standard: ["/voi-wildlife-lodge.jpg", "/acacia-suites.jpg", "/bano-muy-simple-pero.jpg"],
      deluxe: ["/voi-wildlife-deluxe-1.jpg", "/voi-wildlife-deluxe-2.jpg", "/voi-wildlife-deluxe-bathroom.jpg"],
      suite: ["/voi-wildlife-suite-1.jpg", "/voi-wildlife-suite-2.jpg", "/voi-wildlife-suite-bathroom.jpg"],
      family: ["/voi-wildlife-family-1.jpg", "/voi-wildlife-family-2.jpg", "/voi-wildlife-family-bathroom.jpg"],
      executive: ["/voi-wildlife-executive-1.jpg", "/voi-wildlife-executive-2.jpg", "/voi-wildlife-executive-bathroom.jpg"],
      presidential: ["/voi-wildlife-presidential-1.jpg", "/voi-wildlife-presidential-2.jpg", "/voi-wildlife-presidential-bathroom.jpg"]
    }),
    slug: "voi-wildlife-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-east-003",
    name: "Red Elephant Lodge",
    location: "Tsavo East",
    rating: 4.4,
    price: 300,
    image: "/caption (38).jpg?height=300&width=400",
    gallery: [
      "/20200102-130504-largejpg.jpg?height=400&width=600",
      "/20200102-131534-largejpg.jpg?height=400&width=600",
      "/red-elephant-lodge-waterhole.jpg?height=400&width=600",
      "/caption (39).jpg?height=400&width=600",
    ],
    description: "Comfortable camp offering quality safari experiences at good value.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Photography", "Guides", "Room Service", "Parking"],
    address: "Tsavo East",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-003", 300, {
      standard: ["/bush-house.jpg", "/bush-house-balcony.jpg", "/red-elephant-safari-lodge-tsavo-east-national-park-have-en-suite-facilities-of-the-bathroom-with-hot-showers.gif"],
      deluxe: ["/red-elephant-deluxe-1.jpg", "/red-elephant-deluxe-2.jpg", "/red-elephant-deluxe-bathroom.jpg"],
      suite: ["/red-elephant-suite-1.jpg", "/red-elephant-suite-2.jpg", "/red-elephant-suite-bathroom.jpg"],
      family: ["/red-elephant-family-1.jpg", "/red-elephant-family-2.jpg", "/red-elephant-family-bathroom.jpg"],
      executive: ["/red-elephant-executive-1.jpg", "/red-elephant-executive-2.jpg", "/red-elephant-executive-bathroom.jpg"],
      presidential: ["/red-elephant-presidential-1.jpg", "/red-elephant-presidential-2.jpg", "/red-elephant-presidential-bathroom.jpg"]
    }),
    slug: "red-elephant-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-east-004",
    name: "Sentrim Tsavo Lodge",
    location: "Tsavo East",
    rating: 4.3,
    price: 280,
    image: "/sentrim-tsavo-east-camp.jpg?height=300&width=400",
    gallery: [
      "/20190701-125623-largejpg.jpg?height=400&width=600",
      "/sentrim-tsavo-east (1).jpg?height=400&width=600",
      "/restaurant.jpg?height=400&width=600",
      "/caption (40).jpg?height=400&width=600",
      "/20180531-144103-largejpg.jpg?height=400&width=600",
    ],
    description: "Lodge positioned on the Galana River with excellent wildlife access.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "River View", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Tsavo East",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-004", 280, {
      standard: ["/sentrim-tsavo-east (2).jpg", "/dsc-0517-largejpg.jpg", "/sentrim-tsavo-east.jpg"],
      deluxe: ["/sentrim-deluxe-1.jpg", "/sentrim-deluxe-2.jpg", "/sentrim-deluxe-bathroom.jpg"],
      suite: ["/sentrim-suite-1.jpg", "/sentrim-suite-2.jpg", "/sentrim-suite-bathroom.jpg"],
      family: ["/sentrim-family-1.jpg", "/sentrim-family-2.jpg", "/sentrim-family-bathroom.jpg"],
      executive: ["/sentrim-executive-1.jpg", "/sentrim-executive-2.jpg", "/sentrim-executive-bathroom.jpg"],
      presidential: ["/sentrim-presidential-1.jpg", "/sentrim-presidential-2.jpg", "/sentrim-presidential-bathroom.jpg"]
    }),
    slug: "sentrim-tsavo-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-east-005",
    name: "Ithumba Camp",
    location: "Tsavo East",
    rating: 4.2,
    price: 260,
    image: "/the-very-spacious-outside.jpg?height=300&width=400",
    gallery: [
      "/ithumba-camp (3).jpg?height=400&width=600",
      "/ithumba-camp.jpg?height=400&width=600",
      "/ithumba-camp (2).jpg?height=400&width=600",
      "/ithumba-camp (1).jpg?height=400&width=600",
    ],
    description: "Camp near Mudanda Rock with spectacular geological formations.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Parking"],
    address: "Tsavo East",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-005", 260, {
      standard: ["/ithumba-camp.jpg", "/ithumba-camp (4).jpg", "/ithumba-camp (1).jpg"],
      deluxe: ["/ithumba-deluxe-1.jpg", "/ithumba-deluxe-2.jpg", "/ithumba-deluxe-bathroom.jpg"],
      suite: ["/ithumba-suite-1.jpg", "/ithumba-suite-2.jpg", "/ithumba-suite-bathroom.jpg"],
      family: ["/ithumba-family-1.jpg", "/ithumba-family-2.jpg", "/ithumba-family-bathroom.jpg"],
      executive: ["/ithumba-executive-1.jpg", "/ithumba-executive-2.jpg", "/ithumba-executive-bathroom.jpg"],
      presidential: ["/ithumba-presidential-1.jpg", "/ithumba-presidential-2.jpg", "/ithumba-presidential-bathroom.jpg"]
    }),
    slug: "ithumba-camp",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-east-006",
    name: "Voi Safari Lodge",
    location: "Tsavo East",
    rating: 4.3,
    price: 290,
    image: "/voi-safari-lodge.jpg?height=300&width=400",
    gallery: [
      "/voi-safari-lodge (1).jpg?height=400&width=600",
      "/voi-safari-lodge (2).jpg?height=400&width=600",
      "/outdoor-swimming-pool.jpg?height=400&width=600",
      "/voi-safari-lodge (4).jpg?height=400&width=600",
      "/visit-our-website-wwwmorabsafa.jpg?height=400&width=600",
      "/bonfire-in-the-calm-evening.jpg?height=400&width=600",
      "/20190315-143458-largejpg.jpg?height=400&width=600",
    ],
    description: "Lodge with views of the Yatta Plateau geological formation.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Views", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Tsavo East",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-006", 290, {
      standard: ["/voi-safari-lodge (3).jpg", "/voi-safari-lodge (5).jpg", "/voi-safari-lodge (6).jpg"],
      deluxe: ["/voi-safari-deluxe-1.jpg", "/voi-safari-deluxe-2.jpg", "/voi-safari-deluxe-bathroom.jpg"],
      suite: ["/voi-safari-suite-1.jpg", "/voi-safari-suite-2.jpg", "/voi-safari-suite-bathroom.jpg"],
      family: ["/voi-safari-family-1.jpg", "/voi-safari-family-2.jpg", "/voi-safari-family-bathroom.jpg"],
      executive: ["/voi-safari-executive-1.jpg", "/voi-safari-executive-2.jpg", "/voi-safari-executive-bathroom.jpg"],
      presidential: ["/voi-safari-presidential-1.jpg", "/voi-safari-presidential-2.jpg", "/voi-safari-presidential-bathroom.jpg"]
    }),
    slug: "voi-safari-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-east-007",
    name: "Doa Doa Safari Camp",
    location: "Tsavo East",
    rating: 4.1,
    price: 240,
    image: "/doadoa.jpg?height=300&width=400",
    gallery: [
      "/caption (41).jpg?height=400&width=600",
      "/aerial-view-of-riverfront.jpg?height=400&width=600",
      "/fb-img-1549791973509.jpg?height=400&width=600",
      "/fb-img-1549792010138.jpg?height=400&width=600",
    ],
    description: "Budget-friendly safari camp with quality amenities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Photography", "Guides", "Parking", "Room Service"],
    address: "Tsavo East",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-007", 240, {
      standard: ["/dscn0340-largejpg.jpg", "/elegant-dressing-storage.jpg", "/modern-ensuite-bathroom.jpg"],
      deluxe: ["/doa-doa-deluxe-1.jpg", "/doa-doa-deluxe-2.jpg", "/doa-doa-deluxe-bathroom.jpg"],
      suite: ["/doa-doa-suite-1.jpg", "/doa-doa-suite-2.jpg", "/doa-doa-suite-bathroom.jpg"],
      family: ["/doa-doa-family-1.jpg", "/doa-doa-family-2.jpg", "/doa-doa-family-bathroom.jpg"],
      executive: ["/doa-doa-executive-1.jpg", "/doa-doa-executive-2.jpg", "/doa-doa-executive-bathroom.jpg"],
      presidential: ["/doa-doa-presidential-1.jpg", "/doa-doa-presidential-2.jpg", "/doa-doa-presidential-bathroom.jpg"]
    }),
    slug: "doa-doa-safari-camp",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-east-008",
    name: "Epiya Chapeyu",
    location: "Tsavo East",
    rating: 4.2,
    price: 270,
    image: "/zona-pranzo.jpg?height=300&width=400",
    gallery: [
      "/epiya-chapeyu.jpg?height=400&width=600",
      "/epiya-chapeyu (1).jpg?height=400&width=600",
      "/epiya-chapeyu (2).jpg?height=400&width=600",
      "/tsavo.jpg?height=400&width=600",
      "/bigi-camp-2017.jpg?height=400&width=600",
      "/epiya-chapeyu (3).jpg?height=400&width=600",
    ],
    description: "Wilderness lodge offering authentic safari atmosphere.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Campfire"],
    address: "Tsavo East",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-east-008", 270, {
      standard: ["/epiya-chapeyu (5).jpg", "/epiya-chapeyu (6).jpg", "/epiya-chapeyu (4).jpg"],
      deluxe: ["/epiya-deluxe-1.jpg", "/epiya-deluxe-2.jpg", "/epiya-deluxe-bathroom.jpg"],
      suite: ["/epiya-suite-1.jpg", "/epiya-suite-2.jpg", "/epiya-suite-bathroom.jpg"],
      family: ["/epiya-family-1.jpg", "/epiya-family-2.jpg", "/epiya-family-bathroom.jpg"],
      executive: ["/epiya-executive-1.jpg", "/epiya-executive-2.jpg", "/epiya-executive-bathroom.jpg"],
      presidential: ["/epiya-presidential-1.jpg", "/epiya-presidential-2.jpg", "/epiya-presidential-bathroom.jpg"]
    }),
    slug: "epiya-chapeyu",
    updatedAt: new Date()
  },

  // ========== TSAVO WEST HOTELS ==========
  {
    id: "tsavo-west-001",
    name: "Ngulia Safari Lodge",
    location: "Tsavo West",
    rating: 4.8,
    price: 400,
    image: "/ngulia-safari-lodge (2).jpg?height=300&width=400",
    gallery: [
      "/ngulia-safari-lodge.jpg?height=400&width=600",
      "/ngulia-safari-lodge (3).jpg?height=400&width=600",
      "/ngulia-safari-lodge (4).jpg?height=400&width=600",
      "/ngulia-safari-lodge (5).jpg?height=400&width=600",
    ],
    description: "Premier lodge in Tsavo West with excellent facilities and Mzima Springs access.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Guides", "Spa"],
    address: "Tsavo West National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-west-001", 400, {
      standard: ["/spacious-clean-and-comfortable.jpg", "/spacious-clean-and-comfortable (1).jpg", "/ngulia-safari-lodge (1).jpg"],
      deluxe: ["/ngulia-deluxe-1.jpg", "/ngulia-deluxe-2.jpg", "/ngulia-deluxe-bathroom.jpg"],
      suite: ["/ngulia-suite-1.jpg", "/ngulia-suite-2.jpg", "/ngulia-suite-bathroom.jpg"],
      family: ["/ngulia-family-1.jpg", "/ngulia-family-2.jpg", "/ngulia-family-bathroom.jpg"],
      executive: ["/ngulia-executive-1.jpg", "/ngulia-executive-2.jpg", "/ngulia-executive-bathroom.jpg"],
      presidential: ["/ngulia-presidential-1.jpg", "/ngulia-presidential-2.jpg", "/ngulia-presidential-bathroom.jpg"]
    }),
    slug: "ngulia-safari-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-west-002",
    name: "Soroi Lions Bluff Lodge",
    location: "Tsavo West",
    rating: 4.7,
    price: 390,
    image: "/lions-bluff-overview.jpg?height=300&width=400",
    gallery: [
      "/caption (10).jpg?height=400&width=600",
      "/caption (13).jpg?height=400&width=600",
      "/lounge.jpg?height=400&width=600",
      "/dining.jpg?height=400&width=600",
    ],
    description: "Iconic lodge with traditional design and excellent wildlife viewing.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Tsavo West",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-west-002", 390, {
      standard: ["/caption (12).jpg", "/caption (14).jpg", "/caption (11).jpg"],
      deluxe: ["/lions-bluff-deluxe-1.jpg", "/lions-bluff-deluxe-2.jpg", "/lions-bluff-deluxe-bathroom.jpg"],
      suite: ["/lions-bluff-suite-1.jpg", "/lions-bluff-suite-2.jpg", "/lions-bluff-suite-bathroom.jpg"],
      family: ["/lions-bluff-family-1.jpg", "/lions-bluff-family-2.jpg", "/lions-bluff-family-bathroom.jpg"],
      executive: ["/lions-bluff-executive-1.jpg", "/lions-bluff-executive-2.jpg", "/lions-bluff-executive-bathroom.jpg"],
      presidential: ["/lions-bluff-presidential-1.jpg", "/lions-bluff-presidential-2.jpg", "/lions-bluff-presidential-bathroom.jpg"]
    }),
    slug: "soroi-lions-bluff-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-west-003",
    name: "Voyager Ziwani Camp",
    location: "Tsavo West",
    rating: 4.6,
    price: 360,
    image: "/voyager-ziwani-camp.jpg?height=300&width=400",
    gallery: [
      "/20190316-125429-largejpg.jpg?height=400&width=600",
      "/photo1jpg (2).jpg?height=400&width=600",
      "/20190316-143603-largejpg.jpg?height=400&width=600",
      "/het-restaurant-vanaf.jpg?height=400&width=600",
    ],
    description: "Camp near famous Voyager Ziwani Camp with excellent hippo viewing.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Camping"],
    address: "Tsavo West",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-west-003", 360, {
      standard: ["/20180810-212748-largejpg.jpg", "/photo2jpg (1).jpg", "/voyager-ziwani-tsavo.jpg"],
      deluxe: ["/voyager-deluxe-1.jpg", "/voyager-deluxe-2.jpg", "/voyager-deluxe-bathroom.jpg"],
      suite: ["/voyager-suite-1.jpg", "/voyager-suite-2.jpg", "/voyager-suite-bathroom.jpg"],
      family: ["/voyager-family-1.jpg", "/voyager-family-2.jpg", "/voyager-family-bathroom.jpg"],
      executive: ["/voyager-executive-1.jpg", "/voyager-executive-2.jpg", "/voyager-executive-bathroom.jpg"],
      presidential: ["/voyager-presidential-1.jpg", "/voyager-presidential-2.jpg", "/voyager-presidential-bathroom.jpg"]
    }),
    slug: "voyager-ziwani-camp",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-west-004",
    name: "Salt Lick Safari Lodge",
    location: "Tsavo West",
    rating: 4.5,
    price: 340,
    image: "/salt-lick-safari-lodge.jpg?height=300&width=400",
    gallery: [
      "/sarova-salt-lick-game.jpg?height=400&width=600",
      "/salt-lick-outdoors.jpg?height=400&width=600",
      "/tunnel-views.jpg?height=400&width=600",
      "/kudu-point.jpg?height=400&width=600",
    ],
    description: "Lodge in Salt Lick Safari Lodge offering stunning volcanic landscape views.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Views", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Chyulu Hills, Tsavo West",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-west-004", 340, {
      standard: ["/water-hole-view-room.jpg", "/park-view-room (1).jpg", "/park-view-room.jpg"],
      deluxe: ["/salt-lick-deluxe-1.jpg", "/salt-lick-deluxe-2.jpg", "/salt-lick-deluxe-bathroom.jpg"],
      suite: ["/salt-lick-suite-1.jpg", "/salt-lick-suite-2.jpg", "/salt-lick-suite-bathroom.jpg"],
      family: ["/salt-lick-family-1.jpg", "/salt-lick-family-2.jpg", "/salt-lick-family-bathroom.jpg"],
      executive: ["/salt-lick-executive-1.jpg", "/salt-lick-executive-2.jpg", "/salt-lick-executive-bathroom.jpg"],
      presidential: ["/salt-lick-presidential-1.jpg", "/salt-lick-presidential-2.jpg", "/salt-lick-presidential-bathroom.jpg"]
    }),
    slug: "salt-lick-safari-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-west-005",
    name: "Severin Safari Camp",
    location: "Tsavo West",
    rating: 4.4,
    price: 310,
    image: "/traumhafte-unterkunft.jpg?height=300&width=400",
    gallery: [
      "/severin-safari-camp.jpg?height=400&width=600",
      "/photo0jpg (2).jpg?height=400&width=600",
      "/severin-safari-camp (1).jpg?height=400&width=600",
      "/hotel-severin-safari.jpg?height=400&width=600",
    ],
    description: "Camp featuring dramatic volcanic formations and unique geology.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Parking"],
    address: "Tsavo West",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-west-005", 310, {
      standard: ["/kitani-bandas.jpg", "/severin-safari-camp.jpg", "/badezimmer-der-mawenzi (1).jpg"],
      deluxe: ["/severin-deluxe-1.jpg", "/severin-deluxe-2.jpg", "/severin-deluxe-bathroom.jpg"],
      suite: ["/severin-suite-1.jpg", "/severin-suite-2.jpg", "/severin-suite-bathroom.jpg"],
      family: ["/severin-family-1.jpg", "/severin-family-2.jpg", "/severin-family-bathroom.jpg"],
      executive: ["/severin-executive-1.jpg", "/severin-executive-2.jpg", "/severin-executive-bathroom.jpg"],
      presidential: ["/severin-presidential-1.jpg", "/severin-presidential-2.jpg", "/severin-presidential-bathroom.jpg"]
    }),
    slug: "severin-safari-camp",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-west-006",
    name: "Kilaguni Serena Safari Lodge",
    location: "Tsavo West",
    rating: 4.3,
    price: 290,
    image: "/kilaguni-serena-safari.jpg?height=300&width=400",
    gallery: [
      "/the-front-yard-of-kilaguni.jpg?height=400&width=600",
      "/kilaguni-serena-safari (1).jpg?height=400&width=600",
      "/photo1jpg (3).jpg?height=400&width=600",
      "/kilaguni-serena-safari (2).jpg?height=400&width=600",
    ],
    description: "Comfortable safari lodge with quality amenities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Tsavo West",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("tsavo-west-006", 290, {
      standard: ["/photo2jpg (2).jpg", "/kilaguni-serena-safari (3).jpg", "/kilaguni-serena-safari (4).jpg"],
      deluxe: ["/kilaguni-deluxe-1.jpg", "/kilaguni-deluxe-2.jpg", "/kilaguni-deluxe-bathroom.jpg"],
      suite: ["/kilaguni-suite-1.jpg", "/kilaguni-suite-2.jpg", "/kilaguni-suite-bathroom.jpg"],
      family: ["/kilaguni-family-1.jpg", "/kilaguni-family-2.jpg", "/kilaguni-family-bathroom.jpg"],
      executive: ["/kilaguni-executive-1.jpg", "/kilaguni-executive-2.jpg", "/kilaguni-executive-bathroom.jpg"],
      presidential: ["/kilaguni-presidential-1.jpg", "/kilaguni-presidential-2.jpg", "/kilaguni-presidential-bathroom.jpg"]
    }),
    slug: "kilaguni-serena-safari-lodge",
    updatedAt: new Date()
  },
  
  {
    id: "tsavo-west-007",
    name: "Finch Hattons",
    location: "Tsavo West",
    rating: 4.8,
    price: 850,
    image: "/finch-hattons.webp?height=400&width=600",
    gallery: [
      "/hotels/finch-hattons/finch-hattons-gallery-1.jpg?height=400&width=600",
      "/hotels/finch-hattons/finch-hattons-gallery-2.jpg?height=400&width=600",
      "/hotels/finch-hattons/finch-hattons-gallery-3.jpg?height=400&width=600",
      "/hotels/finch-hattons/finch-hattons-gallery-4.jpg?height=400&width=600",
    ],
    description: "Luxury oasis in the heart of Tsavo. Spring-fed pools and exceptional service.",
    amenities: ["Private Spring-Fed Pools", "Spa", "Tennis Court", "Wine Cellar", "Butler Service", "Gym", "Free WiFi", "Restaurant"],
    address: "Tsavo West National Park, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms("finch-hattons", 850, {
      standard: ["/finch-standard-1.jpg", "/finch-standard-2.jpg"],
      deluxe: ["/finch-deluxe-1.jpg", "/finch-deluxe-2.jpg"],
      suite: ["/finch-suite-1.jpg", "/finch-suite-2.jpg"],
      family: ["/finch-family-1.jpg", "/finch-family-2.jpg"],
      executive: ["/finch-executive-1.jpg", "/finch-executive-2.jpg"],
      presidential: ["/finch-presidential-1.jpg", "/finch-presidential-2.jpg"]
    }),
    slug: "finch-hattons",
    updatedAt: new Date()
  },
  // Add these to your hotels array in lib/data.ts

// ========== MAASAI MARA ADDITIONS ==========
{
  id: "maasai-mara-010",
  name: "Ashnil Mara Camp",
  location: "Maasai Mara",
  rating: 4.6,
  price: 420,
  image: "/unnamed (18).webp",
  gallery: [
    "/unnamed (19).webp",
    "/unnamed (20).webp",
    "/DSC_0095.webp",
    "/unnamed (21).webp",
    "/unnamed (22).webp",
  ],
  description: "Luxury tented camp located along the Talek River in the Maasai Mara Conservancy. Excellent for game viewing, river access and frequent wildlife sightings directly from camp.",
  amenities: ["WiFi", "Game Drives", "All Meals", "River Views", "Bar", "Bush Walks", "Photography", "Guides"],
  address: "Talek River, Maasai Mara Conservancy, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("ashnil-mara", 420, {
    standard: ["/unnamed (23).webp"],
    deluxe: ["/unnamed (24).webp"],
    suite: ["/unnamed (23).webp"],
    accessibleStandard: ["/unnamed (26).webp", "/unnamed (25).webp"],
    accessibleDeluxe: ["/unnamed (24).webp"],
    accessibleSuite: ["/unnamed (26).webp"]
  }),
  slug: "ashnil-mara-camp",
  updatedAt: new Date()
},

{
  id: "maasai-mara-011",
  name: "Soroi Mara Bush Camp",
  location: "Maasai Mara",
  rating: 4.7,
  price: 480,
  image: "/mbc_main-30 (1).webp",
  gallery: [
    "/Mara Bush Camp Exterior.webp",
    "/2024-08-07.webp",
    "/2024-08-07 (1).webp",
    "/2024-08-07 (2).webp"
  ],
  description: "Intimate eco-conscious bush camp in a private concession area of the Maasai Mara offering authentic experiences, excellent guiding and a low-impact design.",
  amenities: ["All-Inclusive", "Game Drives", "Walking Safaris", "Bush Meals", "Bar", "Eco-friendly", "Guides"],
  address: "Maasai Mara Conservancy, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("soroi-mara-bush", 480, {
    standard: ["/soroi-mara-standard.jpg"],
    deluxe: ["/soroi-mara-deluxe.jpg"],
    suite: ["/soroi-mara-suite.jpg"],
    accessibleStandard: ["/unnamed (27).webp"],
    accessibleDeluxe: ["/2024-08-07 (3).webp"],
    accessibleSuite: ["/unnamed (28).webp"]
  }),
  slug: "soroi-mara-bush-camp",
  updatedAt: new Date()
},

{
  id: "maasai-mara-012",
  name: "Soroi Larsens Camp",
  location: "Maasai Mara",
  rating: 4.8,
  price: 520,
  image: "/2024-07-12.webp",
  gallery: [
    "/2024-07-12 (1).webp",
    "/unnamed (29).webp",
    "/2024-07-12 (2).webp",
    "/unnamed (30).webp"
  ],
  description: "Classic luxury tented camp with timeless elegance, superb service and a prime location ideal for witnessing the Great Migration river crossings.",
  amenities: ["All-Inclusive", "Game Drives", "Hot Air Balloon", "Fine Dining", "Spa", "Bar", "Guides"],
  address: "Maasai Mara National Reserve, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("soroi-larsens", 520, {
    standard: ["/2024-07-12 (3).webp"],
    deluxe: ["/unnamed (31).webp"],
    suite: ["/unnamed (32).webp"],
    accessibleStandard: ["/unnamed (34).webp"],
    accessibleDeluxe: ["/unnamed (34).webp"],
    accessibleSuite: ["/unnamed (33).webp"]
  }),
  slug: "soroi-larsens-camp-mara",
  updatedAt: new Date()
},

{
  id: "maasai-mara-013",
  name: "Soroi Private Wing",
  location: "Maasai Mara",
  rating: 4.9,
  price: 680,
  image: "/unnamed (35).webp",
  gallery: [
    "/2024-07-15.webp",
    "/unnamed (36).webp",
    "/unnamed (37).webp",
    "/unnamed (38).webp"
  ],
  description: "Exclusive private wing within Mara Serena Safari Lodge offering ultimate privacy, personalized service and panoramic views of the Mara plains.",
  amenities: ["Private Butler", "All-Inclusive", "Game Drives", "Private Dining", "Spa Treatments", "Infinity Pool", "WiFi"],
  address: "Mara Serena Safari Lodge, Maasai Mara National Reserve",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 2,
  rooms: createRooms("mara-serena-private", 680, {
    standard: ["/mbcp_tents-52 (1).webp", "/2025-01-13 (2).webp"],
    deluxe: ["/mbcp_tents-52 (1).webp", "/2025-01-13 (2).webp"],
    suite: ["/mbcp_tents-52 (1).webp", "/2025-01-13 (2).webp"],
    family: ["/2024-07-15 (2).webp", "/2025-01-13 (2).webp"],
    executive: ["/2025-01-13 (3).webp", "/2025-01-13 (2).webp"],
    presidential: ["/2025-01-13 (3).webp", "/2025-01-13 (2).webp"],
    accessibleStandard: ["/2025-01-13 (3).webp", "/2025-01-13 (2).webp"],
    accessibleDeluxe: ["/2025-01-13 (3).webp"],
    accessibleSuite: ["/2025-01-13 (3).webp"]
  }),
  slug: "soroi-private-wing",
  updatedAt: new Date()
},

{
  id: "maasai-mara-014",
  name: "Mara Maisha",
  location: "Maasai Mara",
  rating: 4.6,
  price: 450,
  image: "/2025-12-10.webp",
  gallery: [
    "/unnamed (39).webp",
    "/2025-12-10 (1).webp",
    "/2025-12-10 (2).webp",
    "/2025-12-10 (3).webp"
  ],
  description: "Contemporary eco-lodge featuring stylish tents, an infinity pool with Mara views, and excellent game viewing in a private conservancy setting.",
  amenities: ["WiFi", "Infinity Pool", "Game Drives", "Walking Safaris", "Restaurant", "Bar", "Spa"],
  address: "Maasai Mara Conservancy, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("mara-maisha", 450, {
    standard: ["/unnamed (44).webp", "/unnamed (40).webp", "/unnamed (41).webp"],
    deluxe: ["/unnamed (44).webp", "/unnamed (40).webp", "/unnamed (41).webp"],
    suite: ["/unnamed (44).webp", "/unnamed (40).webp", "/unnamed (41).webp"],
    family: ["/unnamed (43).webp", "/unnamed (41).webp"],
    executive: ["/2025-12-10 (4).webp", "/unnamed (41).webp"],
    presidential: ["/2025-12-10 (4).webp", "/unnamed (42).webp"],
    accessibleStandard: ["/2025-12-10 (4).webp", "/unnamed (42).webp"],
    accessibleDeluxe: ["/2025-12-10 (4).webp"],
    accessibleSuite: ["/2025-12-10 (4).webp"]
  }),
  slug: "mara-maisha",
  updatedAt: new Date()
},

{
  id: "maasai-mara-015",
  name: "Keekorok Lodge",
  location: "Maasai Mara",
  rating: 4.4,
  price: 340,
  image: "/BOB04192_HDR.webp",
  gallery: [
    "/BOB03070_HDR.webp",
    "/BOB05118_HDR.webp",
    "/2023-11-03.webp",
    "/Standard-Room-Exterior.webp"
  ],
  description: "Classic full-service lodge located inside the Maasai Mara National Reserve with direct waterhole views, swimming pool and reliable game drives.",
  amenities: ["WiFi", "Pool", "Game Drives", "Restaurant", "Bar", "Bush Breakfast", "Guides"],
  address: "Keekorok, Maasai Mara National Reserve, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("keekorok", 340, {
    standard: ["/KKL-PS-Double-Room.webp", "/unnamed (45).webp", "/KKL-Standard-Bath.webp"],
    deluxe: ["/KKL-PS-Double-Room.webp", "/unnamed (45).webp", "/KKL-Standard-Bath.webp"],
    suite: ["/KKL-PS-Double-Room.webp", "/unnamed (45).webp", "/KKL-Standard-Bath.webp"],
    family: ["/KKL-Premium-4.webp", "/KKL-Premium-5.webp"],
    executive: ["/KKL-Premium-4.webp", "/KKL-Premium-5.webp"],
    presidential: ["/KKL-Premium-4.webp", "/KKL-Premium-5.webp"],
    accessibleStandard: ["/KKL-Chalet-Interior.webp", "/KKL-Premium-5.webp"],
    accessibleDeluxe: ["/KKL-Chalet-Interior.webp"],
    accessibleSuite: ["/KKL-Chalet-Interior.webp"]
  }),
  slug: "keekorok-lodge",
  updatedAt: new Date()
},

// ========== LAKE NAIVASHA ADDITIONS ==========
{
  id: "naivasha-004",
  name: "Lake Naivasha Sopa Resort",
  location: "Naivasha",
  rating: 4.5,
  price: 280,
  image: "/2025-12-22.webp",
  gallery: [
    "/2025-12-22 (1).webp",
    "/unnamed (46).webp",
    "/2025-12-22 (2).webp",
    "/unnamed (47).webp",
    "/unnamed (48).webp",
    "/unnamed (49).webp"
  ],
  description: "Family-friendly resort on the shores of Lake Naivasha with beautiful gardens, swimming pool and easy access to boat rides, bird watching and Hell's Gate National Park.",
  amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Boat Rides", "Conference Facilities", "Gardens"],
  address: "Lake Naivasha, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("naivasha-sopa", 280, {
    standard: ["/unnamed (51).webp", "/unnamed (57).webp", "/unnamed (50).webp"],
    deluxe: ["/unnamed (51).webp", "/unnamed (57).webp", "/unnamed (50).webp"],
    suite: ["/unnamed (51).webp", "/unnamed (57).webp", "/unnamed (50).webp"],
    family: ["/unnamed (52).webp", "/unnamed (56).webp"],
    executive: ["/unnamed (52).webp", "/unnamed (56).webp"],
    presidential: ["/unnamed (53).webp", "/unnamed (56).webp"],
    accessibleStandard: ["/unnamed (54).webp", "/unnamed (56).webp"],
    accessibleDeluxe: ["/unnamed (55).webp"],
    accessibleSuite: ["/unnamed (55).webp"]
  }),
  slug: "lake-naivasha-sopa-resort",
  updatedAt: new Date()
},

// ========== LAKE NAKURU ADDITIONS ==========
{
  id: "nakuru-014",
  name: "Lake Nakuru Sopa Lodge",
  location: "Nakuru",
  rating: 4.4,
  price: 290,
  image: "/lake-nakuru-sopa-lodge (5).jpg",
  gallery: [
    "/lake-nakuru-sopa-lodge (6).jpg",
    "/lobby-giftshop (1).jpg",
    "/walking-to-room-5-upper.jpg",
    "/room-5-view.jpg"
  ],
  description: "Well-positioned lodge near Lake Nakuru National Park offering flamingo views, comfortable rooms and good facilities for bird watching and game drives.",
  amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Game Drives", "Bird Watching"],
  address: "Lake Nakuru vicinity, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("nakuru-sopa", 290, {
    standard: ["/lake-nakuru-sopa-lodge (7).jpg", "/lake-nakuru-sopa-lodge (8).jpg", "/lake-nakuru-sopa-lodge (11).jpg"],
    deluxe: ["/lake-nakuru-sopa-lodge (7).jpg", "/lake-nakuru-sopa-lodge (8).jpg", "/lake-nakuru-sopa-lodge (11).jpg"],
    suite: ["/lake-nakuru-sopa-lodge (9).jpg", "/lake-nakuru-sopa-lodge (8).jpg", "/lake-nakuru-sopa-lodge (11).jpg"],
    family: ["/lake-nakuru-sopa-lodge (10).jpg", "/lake-nakuru-sopa-lodge (11).jpg"],
    executive: ["/lake-nakuru-sopa-lodge (9).jpg", "/lake-nakuru-sopa-lodge (11).jpg"],
    presidential: ["/lake-nakuru-sopa-lodge (10).jpg", "/lake-nakuru-sopa-lodge (11).jpg"],
    accessibleStandard: ["/lake-nakuru-sopa-lodge (9).jpg", "/lake-nakuru-sopa-lodge (11).jpg"],
    accessibleDeluxe: ["/caption (66).jpg"],
    accessibleSuite: ["/caption (66).jpg"]
  }),
  slug: "lake-nakuru-sopa-lodge",
  updatedAt: new Date()
},

{
  id: "nakuru-015",
  name: "Lake Nakuru Lodge",
  location: "Nakuru",
  rating: 4.3,
  price: 240,
  image: "/Lake Nakuru Lodge (35).webp",
  gallery: [
    "/2024-08-06.webp",
    "/Lake Nakuru Lodge (30).webp",
    "/unnamed (59).webp",
    "/unnamed (60).webp"
  ],
  description: "Classic lodge with direct access to Lake Nakuru National Park, featuring waterhole views and good opportunities for game viewing and photography.",
  amenities: ["WiFi", "Restaurant", "Bar", "Game Drives", "Parking", "Room Service"],
  address: "Lake Nakuru National Park, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 2,
  rooms: createRooms("nakuru-lodge", 240, {
    standard: ["/Lake Nakuru Lodge (25).webp", "/Lake Nakuru Lodge (88).webp", "/paraplegic rooms (4).jpg"],
    deluxe: ["/Lake Nakuru Lodge (25).webp", "/Lake Nakuru Lodge (88).webp", "/paraplegic rooms (4).jpg"],
    suite: ["/Lake Nakuru Lodge (25).webp", "/Lake Nakuru Lodge (88).webp", "/paraplegic rooms (4).jpg"],
    family: ["/Lake Nakuru Lodge (27).webp", "/unnamed (58).webp"],
    executive: ["/Lake Nakuru Lodge (27).webp", "/unnamed (58).webp"],
    presidential: ["/Lake Nakuru Lodge (27).webp", "/unnamed (58).webp"],
    accessibleStandard: ["/Lake Nakuru Lodge (27).webp", "/unnamed (58).webp"],
    accessibleDeluxe: ["/Lake Nakuru Lodge (27).webp"],
    accessibleSuite: ["/Lake Nakuru Lodge (27).webp"]
  }),
  slug: "lake-nakuru-lodge-nakuru",
  updatedAt: new Date()
},

// ========== LAKE NAIVASHA MORE ==========
{
  id: "naivasha-005",
  name: "Lake Naivasha Simba Lodge",
  location: "Naivasha",
  rating: 4.3,
  price: 220,
  image: "/unnamed (61).webp",
  gallery: [
    "/unnamed (63).webp",
    "/unnamed (64).webp",
    "/2021-01-08.webp",
    "/unnamed (62).webp"
  ],
  description: "Comfortable mid-range lodge with lake proximity, good facilities and convenient base for Hell's Gate, Crescent Island and boat safaris.",
  amenities: ["WiFi", "Restaurant", "Bar", "Pool", "Lake Activities", "Parking"],
  address: "Lake Naivasha, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 2,
  rooms: createRooms("naivasha-simba", 220, {
    standard: ["/unnamed (65).webp", "/unnamed (69).webp", "/unnamed (70).webp"],
    deluxe: ["/unnamed (65).webp", "/unnamed (69).webp", "/unnamed (70).webp"],
    suite: ["/unnamed (65).webp", "/unnamed (69).webp", "/unnamed (70).webp"],
    family: ["/unnamed (66).webp", "/unnamed (70).webp"],
    executive: ["/unnamed (66).webp", "/unnamed (70).webp"],
    presidential: ["/unnamed (68).webp", "/unnamed (70).webp"],
    accessibleStandard: ["/unnamed (68).webp", "/unnamed (70).webp"],
    accessibleDeluxe: ["/unnamed (68).webp"],
    accessibleSuite: ["/unnamed (68).webp"]
  }),
  slug: "lake-naivasha-simba-lodge",
  updatedAt: new Date()
},

{
  id: "naivasha-006",
  name: "Lake Naivasha Resort",
  location: "Naivasha",
  rating: 4.4,
  price: 260,
  image: "/unnamed (71).webp",
  gallery: [
    "/unnamed (74).webp",
    "/2025-10-29.webp",
    "/2025-10-29 (1).webp",
    "/unnamed (75).webp"
  ],
  description: "Modern resort-style property on Lake Naivasha with multiple dining options, swimming pool and easy access to boat rides and bird watching.",
  amenities: ["WiFi", "Pool", "Multiple Restaurants", "Bar", "Boat Safaris", "Conference Rooms"],
  address: "Lake Naivasha, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("naivasha-resort", 260, {
    standard: ["/2025-10-29 (3).webp", "/IMG_1385.webp", "/unnamed (72).webp"],
    deluxe: ["/2025-10-29 (3).webp", "/IMG_1385.webp", "/unnamed (72).webp"],
    suite: ["/2025-10-29 (3).webp", "/IMG_1385.webp", "/unnamed (72).webp"],
    family: ["/2025-10-29 (2).webp", "/unnamed (73).webp"],
    executive: ["/2025-10-29 (2).webp", "/unnamed (73).webp"],
    presidential: ["/2025-10-29 (2).webp", "/unnamed (73).webp"],
    accessibleStandard: ["/2025-10-29 (2).webp", "/unnamed (73).webp"],
    accessibleDeluxe: ["/2025-10-29 (2).webp"],
    accessibleSuite: ["/2025-10-29 (2).webp"]
  }),
  slug: "lake-naivasha-resort",
  updatedAt: new Date()
},
{
  id: "naivasha-007",
  name: "Enashipai Resort & Spa",
  location: "Naivasha",
  rating: 4.6,
  price: 320,
  image: "/2025-05-21.webp",
  gallery: [
    "/unnamed (76).webp",
    "/2024-06-10.webp",
    "/2025-10-08.webp",
    "/2025-08-07.webp",
    "/2025-05-21.webp",
    "/2025-05-15.webp"
  ],
  description: "Luxury resort on the shores of Lake Naivasha offering elegant rooms, a full-service spa, multiple dining options, and excellent facilities for relaxation, conferences, and lake activities. Features wheelchair accessible rooms with roll-in showers and grab bars.",
  amenities: [
    "WiFi",
    "Multiple Pools",
    "Full-Service Spa",
    "Several Restaurants",
    "Bar & Lounge",
    "Lake Activities & Boat Rides",
    "Conference & Event Facilities",
    "Fitness Center",
    "Gardens",
    "Accessible Facilities"
  ],
  address: "Lake Naivasha, Naivasha, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  rooms: createRooms("enashipai", 320, {
    standard: ["/2024-06-04.webp"],
    deluxe: ["/2024-06-04 (1).webp"],
    suite: ["/2025-05-15 (1).webp"],
    family: ["/2025-05-15 (2).webp", "/unnamed (78).webp"],
    accessibleStandard: ["/2025-08-07 (1).webp", "/unnamed (78).webp"],
    accessibleDeluxe: ["/unnamed (77).webp"],
    accessibleSuite: ["/unnamed (77).webp"]
  }),
  slug: "enashipai-resort-spa",
  updatedAt: new Date()
},
];

export const faqs = [
  {
    id: 1,
    question: "What is the best time to visit Kenya?",
    answer:
      "The best time to visit Kenya depends on what you want to see. June to October is ideal for the Great Migration in Maasai Mara and generally excellent for wildlife viewing. December to March is also great with less rain. However, each destination has its best seasons.",
  },
  {
    id: 2,
    question: "Do I need a visa to visit Kenya?",
    answer:
      "Most visitors need a visa to enter Kenya. You can obtain an e-visa through the Kenya immigration portal online, or get a visa on arrival. Requirements vary by nationality, so check with your local embassy.",
  },
  {
    id: 3,
    question: "Is malaria a concern in Kenya?",
    answer:
      "Malaria risk varies by location and season. Most safari destinations at higher altitudes have lower risk. Consult with a travel health clinic before your trip for appropriate prophylaxis recommendations.",
  },
  {
    id: 4,
    question: "What wildlife can I see in Kenya?",
    answer:
      "Kenya is home to the Big Five (lion, elephant, buffalo, leopard, rhinoceros) and hundreds of other species including zebras, giraffes, antelopes, and over 500 bird species. Different parks offer different wildlife viewing opportunities.",
  },
  {
    id: 5,
    question: "How long should I spend on safari?",
    answer:
      "A typical safari is 3-5 days, allowing for early morning and afternoon game drives. However, the duration can be customized based on your interests and schedule. Longer safaris often provide better wildlife viewing opportunities.",
  },
  {
    id: 6,
    question: "What should I pack for a safari?",
    answer:
      "Pack neutral-colored clothing (khaki, green, brown), closed-toe walking shoes, hat, sunscreen, binoculars, camera, and medications. Avoid bright colors and scents. Bring layers as temperatures vary throughout the day.",
  },
  {
    id: 7,
    question: "Are there accommodation options for different budgets?",
    answer:
      "Yes! Kenya offers accommodations ranging from budget camps to ultra-luxury lodges. We have options for every budget level. Our website features hotels in various price ranges across all destinations.",
  },
  {
    id: 8,
    question: "Can I book activities directly with hotels?",
    answer:
      "Yes, most hotels can arrange safari drives, cultural visits, and other activities. When you book through our platform, the hotel details will guide you on available activities.",
  },
  {
    id: 9,
    question: "What is the average cost of a safari?",
    answer:
      "Costs vary widely based on accommodation choice, activities, and season. Budget options start around $150/night while luxury lodges can exceed $400/night. Most include meals and game drives.",
  },
  {
    id: 10,
    question: "How do I get around Kenya?",
    answer:
      "Options include domestic flights, rental cars with drivers, and organized tours. Most safari experiences use lodges' vehicles and expert guides for game drives.",
  },
  {
    id: 11,
    question: "Which hotels offer wheelchair accessible rooms?",
    answer:
      "Crowne Plaza Nairobi, Kibo Collection Nairobi, Tamarind Tree Nairobi, Sarova Panafric Hotel Nairobi, Sarova Lion Hill Game Lodge Nakuru, Sarova Woodlands Hotel Nakuru, Sarova Imperial Hotel Kisumu, Sarova Whitesands Beach Resort Mombasa, and Ol Tukai Lodge Amboseli all offer dedicated accessible rooms with roll-in showers, wide doorways, and grab bars.",
  }
];