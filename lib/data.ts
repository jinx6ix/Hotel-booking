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
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  longDescription: string;
  attractions: string[];
  bestTime: string;
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  longDescription: string;
  attractions: string[];
  bestTime: string;
}

export const locations: Location[] = [
  {
    id: "nairobi",
    name: "Nairobi",
    slug: "nairobi",
    description:
      "Kenya's vibrant capital city – best luxury hotels, Nairobi National Park safaris, Giraffe Centre and cultural experiences",
    image: "/Nairobi.avif",
    longDescription:
      "Nairobi, Kenya’s lively capital and major gateway to East African safaris, combines urban energy with incredible wildlife experiences. Known worldwide as the only capital city with a national park inside its borders, Nairobi offers Nairobi National Park safaris just 20 minutes from the city center. Visit the famous Giraffe Centre, Karen Blixen Museum, David Sheldrick Elephant Orphanage, and Nairobi National Museum. The city is home to luxury hotels in Nairobi, boutique lodges, rooftop restaurants, vibrant nightlife, and excellent shopping at Two Rivers Mall and The Hub Karen. Perfect base for Kenya safari tours, business travel, or city + safari combinations.",
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
  },
  {
    id: "naivasha",
    name: "Naivasha",
    slug: "naivasha",
    description:
      "Lake Naivasha – boat rides, hippo watching, Hell's Gate cycling & luxury lodges near Nairobi",
    image: "/naivasha.jpeg",
    longDescription:
      "Lake Naivasha is one of Kenya’s most beautiful freshwater lakes, located just 90 minutes from Nairobi along the Great Rift Valley. Famous for boat safaris where you can get close to hippos, fish eagles and hundreds of bird species. Enjoy cycling and game drives inside Hell’s Gate National Park – the only park in Kenya where you can walk or cycle among zebras, giraffes and buffaloes. Visit Crescent Island for walking safaris, Crater Lake for flamingos, and geothermal hot springs. Lake Naivasha is a perfect weekend getaway from Nairobi, romantic destination, family-friendly location and excellent stopover on the way to Maasai Mara or Nakuru.",
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
  },
  {
    id: "nakuru",
    name: "Nakuru",
    slug: "nakuru",
    description:
      "Lake Nakuru National Park – flamingos, rhinos, lions – best safari destination in Rift Valley",
    image: "/nakuru.jpg",
    longDescription:
      "Lake Nakuru National Park is world-famous for its spectacular pink flamingo flocks that sometimes number over a million birds. This alkaline lake is one of Kenya’s best places to see white and black rhinos, Rothschild giraffes, lions, leopards, buffaloes and tree-climbing lions. The park also offers excellent birdwatching with over 450 recorded species. Nakuru town provides good accommodation options, restaurants and serves as an important stop between Nairobi and the Maasai Mara or western Kenya. Menengai Crater, Lake Elementaita flamingos and Soysambu Conservancy are all within easy reach.",
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
  },
  {
    id: "samburu",
    name: "Samburu",
    slug: "samburu",
    description:
      "Samburu National Reserve – special five animals, Grevy’s zebra, reticulated giraffe, luxury camps",
    image: "/samburu.webp",
    longDescription:
      "Samburu National Reserve offers one of Kenya’s most unique and remote safari experiences. Famous for the Samburu Special Five: Grevy’s zebra, reticulated giraffe, Somali ostrich, beisa oryx and gerenuk. The Ewaso Nyiro River attracts large herds of elephants, lions, leopards and crocodiles – especially dramatic during dry seasons. The red dirt landscapes, domed termite mounds and dramatic rocky outcrops create a very different atmosphere from southern parks. Samburu also offers rich cultural experiences with Samburu and Turkana communities. Perfect for travelers seeking uncrowded wilderness, excellent big cat sightings and authentic safari camps.",
    attractions: [
      "Samburu Special Five Animals",
      "Grevy’s Zebra & Reticulated Giraffe",
      "Ewaso Nyiro River – Elephant Herds",
      "Samburu & Turkana Cultural Visits",
      "Leopard Sightings – High Success Rate",
      "Game Drives along the River",
      "Photography – Dramatic Red Landscapes",
    ],
    bestTime: "June to October and January to February",
  },
  {
    id: "nanyuki",
    name: "Nanyuki",
    slug: "nanyuki",
    description:
      "Nanyuki – Mount Kenya climbing, Ol Pejeta Conservancy, equator line, luxury lodges",
    image: "/nanyuki.jpg",
    longDescription:
      "Nanyuki is the main gateway town for Mount Kenya climbing expeditions and northern Kenya safaris. Located right on the equator, visitors can stand with one foot in each hemisphere. The town provides excellent access to Ol Pejeta Conservancy (home to the last two northern white rhinos), Solio Ranch, Sweetwaters Chimpanzee Sanctuary and several private game reserves. Nanyuki is also famous for its cool climate, beautiful highland scenery, coffee and flower farms. Ideal base for Mount Kenya treks (Sirimon, Chogoria, Naro Moru routes), luxury stays, family holidays and stopovers before heading to Samburu or Loisaba conservancies.",
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
  },
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    slug: "maasai-mara",
    description:
      "Maasai Mara – Great Migration, Big Five safaris, luxury tented camps, hot air balloon rides",
    image: "/maasai mara.jpeg",
    longDescription:
      "The Maasai Mara National Reserve is Kenya’s most famous and arguably the best wildlife destination in Africa. World-renowned for the Great Wildebeest Migration (July–October), when over 1.5 million animals cross the Mara River watched by crocodiles and big cats. Year-round excellent Big Five viewing (lion, leopard, elephant, buffalo, rhino), cheetahs, hyenas, topi, eland and huge birdlife. Stay in luxury tented camps, eco-lodges or exclusive private conservancies with off-road driving and night drives. Experience authentic Maasai village visits, bush walks and hot air balloon safaris over the plains at sunrise. The ultimate Kenya safari destination.",
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
  },
  {
    id: "amboseli",
    name: "Amboseli",
    slug: "amboseli",
    description:
      "Amboseli National Park – Mount Kilimanjaro views, huge elephant herds, luxury lodges",
    image: "/amboseli.avif",
    longDescription:
      "Amboseli National Park is world-famous for its breathtaking views of Mount Kilimanjaro, Africa’s highest mountain, rising dramatically behind massive elephant herds. Known as the best place in Kenya to photograph elephants with Kilimanjaro backdrop. The park features large swamps attracting thousands of animals – especially elephants, buffaloes, hippos and waterbirds. Excellent big cat sightings (lion, cheetah) and over 400 bird species recorded. Amboseli offers authentic Maasai cultural experiences and stays in luxury tented camps and lodges with Kilimanjaro views. One of the most photogenic and iconic safari destinations in East Africa.",
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
  },
  {
    id: "tsavo-east",
    name: "Tsavo East",
    slug: "tsavo-east",
    description:
      "Tsavo East National Park – red dust, huge elephant herds, Yatta Plateau, classic Kenya safari",
    image: "/tsavo east.jpeg",
    longDescription:
      "Tsavo East is one of Kenya’s largest and wildest national parks, famous for its distinctive red volcanic soil and massive elephant populations – often covered in red dust. The park offers classic African wilderness safaris with excellent chances to see lions, leopards, cheetahs, giraffes, zebras, oryx, gerenuk and huge herds of elephants. The Galana River is a lifeline attracting wildlife, especially in the dry season. Highlights include Mudanda Rock lookout, Yatta Plateau (world’s longest lava flow), Aruba Dam and Lugard Falls. Ideal for travelers seeking uncrowded, authentic safari experiences away from mass tourism.",
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
  },
  {
    id: "tsavo-west",
    name: "Tsavo West",
    slug: "tsavo-west",
    description:
      "Tsavo West – Mzima Springs, Chyulu Hills, volcanic landscapes, black rhino sanctuary",
    image: "/tsavo west.jpeg",
    longDescription:
      "Tsavo West National Park offers dramatic volcanic scenery, lush vegetation and unique attractions like Mzima Springs – crystal-clear underground springs where you can watch hippos and fish through underwater viewing chambers. The park is home to black rhinos, large elephant herds, lions, leopards, cheetahs and diverse birdlife. Highlights include the Chyulu Hills, Ngulia Rhino Sanctuary, volcanic cones, caves (Sheltam Caves), and beautiful viewpoints. Tsavo West provides a more intimate and rugged safari experience compared to Tsavo East, with excellent opportunities for walking safaris and photography. Perfect complement to a Tsavo East visit.",
    attractions: [
      "Mzima Springs Underwater Hippo Viewing",
      "Ngulia Black Rhino Sanctuary",
      "Chyulu Hills Scenic Views",
      "Volcanic Landscapes & Lava Flows",
      "Sheltam Caves Exploration",
      "Poacher’s Lookout Viewpoint",
      "Diverse Birdlife & Mammals",
    ],
    bestTime: "June to October (dry season)",
  },
];

// Helper function to create rooms for hotels with specific room images
const createRooms = (hotelId: string, basePrice: number, roomImages: Record<string, string[]>): Room[] => [
  {
    id: `${hotelId}-room-1`,
    type: "Standard Room",
    description: "Comfortable room with basic amenities, perfect for solo travelers or couples.",
    price: Math.round(basePrice * 0.8),
    maxOccupancy: 2,
    available: 5,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom"],
    images: roomImages.standard || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-room-2`,
    type: "Deluxe Room",
    description: "Spacious room with enhanced amenities and beautiful views.",
    price: basePrice,
    maxOccupancy: 3,
    available: 3,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk"],
    images: roomImages.deluxe || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-room-3`,
    type: "Suite",
    description: "Luxurious suite with separate living area and premium amenities.",
    price: Math.round(basePrice * 1.5),
    maxOccupancy: 4,
    available: 2,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony"],
    images: roomImages.suite || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-room-4`,
    type: "Family Room",
    description: "Perfect for families with children, featuring extra space and family-friendly amenities.",
    price: Math.round(basePrice * 1.2),
    maxOccupancy: 5,
    available: 4,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Family-friendly", "Extra Beds"],
    images: roomImages.family || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-room-5`,
    type: "Executive Suite",
    description: "Premium suite with exclusive amenities and personalized service.",
    price: basePrice * 2,
    maxOccupancy: 2,
    available: 1,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Premium Toiletries"],
    images: roomImages.executive || ["/placeholder.svg?height=300&width=400"]
  },
  {
    id: `${hotelId}-room-6`,
    type: "Presidential Suite",
    description: "Ultimate luxury with panoramic views and exclusive services.",
    price: basePrice * 3,
    maxOccupancy: 4,
    available: 1,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Premium Toiletries", "Jacuzzi", "Butler Service"],
    images: roomImages.presidential || ["/placeholder.svg?height=300&width=400"]
  },
  // Accessible Rooms
  {
    id: `${hotelId}-accessible-1`,
    type: "Accessible Standard Room",
    description: "Comfortable accessible room designed for guests with mobility needs.",
    price: Math.round(basePrice * 0.85),
    maxOccupancy: 2,
    available: 3,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features"],
    images: roomImages.accessibleStandard || ["/placeholder.svg?height=300&width=400"],
    accessible: true,
    accessibilityFeatures: [
      "Wider doorways",
      "Roll-in shower",
      "Grab bars in bathroom",
      "Lowered fixtures",
      "Wheelchair accessible"
    ]
  },
  {
    id: `${hotelId}-accessible-2`,
    type: "Accessible Deluxe Room",
    description: "Spacious accessible room with enhanced amenities and beautiful views.",
    price: Math.round(basePrice * 1.05),
    maxOccupancy: 3,
    available: 2,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Accessible Features"],
    images: roomImages.accessibleDeluxe || ["/placeholder.svg?height=300&width=400"],
    accessible: true,
    accessibilityFeatures: [
      "Wider doorways",
      "Roll-in shower",
      "Grab bars in bathroom",
      "Lowered fixtures",
      "Wheelchair accessible",
      "Accessible balcony"
    ]
  },
  {
    id: `${hotelId}-accessible-3`,
    type: "Accessible Suite",
    description: "Luxurious accessible suite with separate living area and premium amenities.",
    price: Math.round(basePrice * 1.6),
    maxOccupancy: 4,
    available: 1,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Accessible Features"],
    images: roomImages.accessibleSuite || ["/placeholder.svg?height=300&width=400"],
    accessible: true,
    accessibilityFeatures: [
      "Wider doorways",
      "Roll-in shower",
      "Grab bars in bathroom",
      "Lowered fixtures",
      "Wheelchair accessible",
      "Accessible living area",
      "Emergency call system"
    ]
  },
  {
    id: `${hotelId}-accessible-4`,
    type: "Accessible Family Room",
    description: "Perfect accessible room for families with children and mobility needs.",
    price: Math.round(basePrice * 1.3),
    maxOccupancy: 5,
    available: 2,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Family-friendly", "Extra Beds", "Accessible Features"],
    images: roomImages.accessibleFamily || ["/placeholder.svg?height=300&width=400"],
    accessible: true,
    accessibilityFeatures: [
      "Wider doorways",
      "Roll-in shower",
      "Grab bars in bathroom",
      "Lowered fixtures",
      "Wheelchair accessible",
      "Family-friendly layout",
      "Accessible play area"
    ]
  },
  {
    id: `${hotelId}-accessible-5`,
    type: "Premium Accessible Suite",
    description: "Ultimate luxury accessible suite with panoramic views and exclusive services.",
    price: basePrice * 3.2,
    maxOccupancy: 4,
    available: 1,
    amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Premium Toiletries", "Jacuzzi", "Butler Service", "Accessible Features"],
    images: roomImages.accessiblePremium || ["/placeholder.svg?height=300&width=400"],
    accessible: true,
    accessibilityFeatures: [
      "Wider doorways",
      "Roll-in shower",
      "Grab bars in bathroom",
      "Lowered fixtures",
      "Wheelchair accessible",
      "Accessible jacuzzi",
      "Emergency call system",
      "Voice-activated controls",
      "Braille signage"
    ]
  }
];

// Update the hotel data with hotel-specific room images
export const hotels: Hotel[] = [
  // Nairobi Hotels
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
    phone: "+254 20 600 800",
    email: "info@safaripark.co.ke",
    rooms: createRooms("nairobi-001", 350, {
      standard: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      deluxe: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      suite: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      family: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      executive: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      presidential: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      accessibleStandard: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      accessibleDeluxe: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      accessibleSuite: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      accessibleFamily: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ],
      accessiblePremium: [
        "/safariparkroom1.jpeg", 
        "/safariparkroom2.jpeg", 
        "/safariparkroom3.jpeg"
      ]
    })
  },
  {
    id: "nairobi-002",
    name: "Crowne Plaza Nairobi",
    location: "Nairobi",
    rating: 4.6,
    price: 280,
    image: "/Crowne Plaza Nairobi.jpg?height=300&width=400",
    gallery: [
      "/chero1.jpeg?height=400&width=600",
      "/chero2.webp?height=400&width=600",
      "/chero3.gif?height=400&width=600",
      "/chero4.jpg?height=400&width=600",
    ],
    description: "Premium 5-star hotel in Upper Hill with contemporary African decor and exceptional service.",
    amenities: ["WiFi", "Pool", "Fitness Center", "Multiple Restaurants", "Bar", "Spa", "Concierge", "Parking"],
    address: "Upper Hill, Nairobi",
    phone: "+254 20 249 2000",
    email: "info@crowneplaza-nairobi.com",
    rooms: createRooms("nairobi-002", 280, {
      standard: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      deluxe: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      suite: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      family: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      executive: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      presidential: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      accessibleStandard: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      accessibleDeluxe: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      accessibleSuite: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      accessibleFamily: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ],
      accessiblePremium: [
        "/crowneroom1.jpg", 
        "/crowneroom2.jpg", 
        "/crowneroom3.jpg"
      ]
    })
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
    phone: "+254 20 272 2000",
    email: "reservations@serena-nairobi.com",
    rooms: createRooms("nairobi-003", 320, {
      standard: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      deluxe: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      suite: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      family: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      executive: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      presidential: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      accessibleStandard: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      accessibleDeluxe: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      accessibleSuite: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      accessibleFamily: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ],
      accessiblePremium: [
        "/sroom1.jpg", 
        "/sroom2.jpg", 
        "/sroom3.jpg"
      ]
    })
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
    phone: "+254 20 328 2000",
    email: "reservations@kempinski.com",
    rooms: createRooms("nairobi-004", 400, {
      standard: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      deluxe: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      suite: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      family: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      executive: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      presidential: [
        "/kproom1.avif", 
        "/kproom2.avif", 
        "/kproom3.avif"
      ],
      accessibleStandard: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      accessibleDeluxe: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      accessibleSuite: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      accessibleFamily: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ],
      accessiblePremium: [
        "/kroom1.avif", 
        "/kroom2.avif", 
        "/kroom3.jpg"
      ]
    })
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
    phone: "+254 20 886 5800",
    email: "info@bomasofkenya.com",
    rooms: createRooms("nairobi-005", 250, {
      standard: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      deluxe: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      suite: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      family: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      executive: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      presidential: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      accessibleStandard: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      accessibleDeluxe: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      accessibleSuite: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      accessibleFamily: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ],
      accessiblePremium: [
        "/broom1.jpg", 
        "/broom2.jpg", 
        "/broom3.jpg"
      ]
    })
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
    phone: "+254 20 222 0000",
    email: "info@hilton-nairobi.com",
    rooms: createRooms("nairobi-006", 230, {
      standard: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      deluxe: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      suite: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      family: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      executive: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      presidential: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      accessibleStandard: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      accessibleDeluxe: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      accessibleSuite: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      accessibleFamily: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ],
      accessiblePremium: [
        "/hiroom1.webp", 
        "/hiroom2.webp", 
        "/hiroom3.jpg"
      ]
    })
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
    phone: "+254 20 222 5000",
    email: "info@ibis-nairobi.com",
    rooms: createRooms("nairobi-007", 180, {
      standard: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      deluxe: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      suite: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      family: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      executive: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      presidential: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      accessibleStandard: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      accessibleDeluxe: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      accessibleSuite: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      accessibleFamily: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ],
      accessiblePremium: [
        "/ibis-standard-1.jpg", 
        "/ibis-standard-2.jpg", 
        "/ibis-standard-bathroom.jpg"
      ]
    })
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
    phone: "+254 20 329 3000",
    email: "info@radissonblu-nairobi.com",
    rooms: createRooms("nairobi-008", 290, {
      standard: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      deluxe: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      suite: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      family: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      executive: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      presidential: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      accessibleStandard: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      accessibleDeluxe: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      accessibleSuite: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      accessibleFamily: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ],
      accessiblePremium: [
        "/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"
      ]
    })
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
    phone: "+254 20 322 3000",
    email: "info@fourpoints-nairobi.com",
    rooms: createRooms("nairobi-009", 260, {
      standard: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      deluxe: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      suite: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      family: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      executive: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      presidential: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      accessibleStandard: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      accessibleDeluxe: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      accessibleSuite: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      accessibleFamily: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ],
      accessiblePremium: [
        "/foroom1.jpeg", 
        "/foroom2.jpg", 
        "/foroom3.jpg"
      ]
    })
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
    phone: "+254 20 244 5000",
    email: "info@mercure-nairobi.com",
    rooms: createRooms("nairobi-010", 200, {
      standard: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      deluxe: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      suite: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      family: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      executive: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      presidential: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      accessibleStandard: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      accessibleDeluxe: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      accessibleSuite: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      accessibleFamily: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ],
      accessiblePremium: [
        "/meroom1.jpg", 
        "/meroom2.jpg", 
        "/meroom3.jpg"
      ]
    })
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
    phone: "+254 20 333 0000",
    email: "info@countryclub-nairobi.com",
    rooms: createRooms("nairobi-011", 190, {
      standard: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      deluxe: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      suite: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      family: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      executive: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      presidential: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      accessibleStandard: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      accessibleDeluxe: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      accessibleSuite: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      accessibleFamily: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ],
      accessiblePremium: [
        "/coroom1.jpeg", 
        "/coroom2.jpg", 
        "/coroom3.avif"
      ]
    })
  },

  // Naivasha Hotels
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
    phone: "+254 50 2021888",
    email: "info@crescentcamp.com",
    rooms: createRooms("naivasha-001", 320, {
      standard: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      deluxe: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      suite: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      family: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      executive: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      presidential: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      accessibleStandard: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      accessibleDeluxe: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      accessibleSuite: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      accessibleFamily: [
        "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ],
      accessiblePremium: [
              "/creroom1.jpg", 
        "/creroom2.jpg", 
        "/creroom3.avif"
      ]
    })
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
    phone: "+254 50 2020600",
    email: "reservations@naivasha-serena.com",
    rooms: createRooms("naivasha-002", 300, {
      standard: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      deluxe: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      suite: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      family: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      executive: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      presidential: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      accessibleStandard: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      accessibleDeluxe: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      accessibleSuite: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      accessibleFamily: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ],
      accessiblePremium: [
        "/seroom1.jpg", 
        "/seroom2.jpg", 
        "/seroom3.jpg"
      ]
    })
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
    phone: "+254 50 2020800",
    email: "info@hellsgate-lodge.com",
    rooms: createRooms("naivasha-003", 280, {
      standard: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      deluxe: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      suite: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      family: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      executive: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      presidential: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      accessibleStandard: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      accessibleDeluxe: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      accessibleSuite: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      accessibleFamily: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ],
      accessiblePremium: [
        "/garoom1.jpeg", 
        "/garoom2.jpg", 
        "/garoom3.webp"
      ]
    })
  },

  // Nakuru Hotels
  {
    id: "nakuru-001",
    name: "Sarova Stanley Hotel Nakuru",
    location: "Nakuru",
    rating: 4.6,
    price: 290,
    image: "/sarova-stanley-exterior.jpg?height=300&width=400",
    gallery: [
      "/sahero1.jpg?height=400&width=600",
      "/sahero2.jpg?height=400&width=600",
      "/sahero3.jpg?height=400&width=600",
      "/sahero4.jpg?height=400&width=600",
    ],
    description: "Premium 4-star hotel with excellent service and beautiful gardens in central Nakuru.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Meeting Rooms", "Parking", "Room Service", "Fitness Center"],
    address: "Kenyatta Avenue, Nakuru",
    phone: "+254 51 2211111",
    email: "reservations@sarova-stanley.com",
    rooms: createRooms("nakuru-001", 290, {
      standard: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      deluxe: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      suite: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      family: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      executive: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      presidential: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      accessibleStandard: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      accessibleDeluxe: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      accessibleSuite: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      accessibleFamily: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ],
      accessiblePremium: [
        "/saroom1.jpg", 
        "/saroom2.jpeg", 
        "/saroom3.jpg"
      ]
    })
  },
  {
    id: "nakuru-002",
    name: "Eldoret Kenya Hotel",
    location: "Nakuru",
    rating: 4.4,
    price: 230,
    image: "/eldoret-kenya-hotel.jpg?height=300&width=400",
    gallery: [
      "/eldoret-hotel-room.jpg?height=400&width=600",
      "/eldoret-hotel-restaurant.jpg?height=400&width=600",
      "/eldoret-hotel-lobby.jpg?height=400&width=600",
      "/eldoret-hotel-pool.jpg?height=400&width=600",
    ],
    description: "Comfortable 3-star hotel with good amenities and friendly staff.",
    amenities: ["WiFi", "Restaurant", "Pool", "Bar", "Garden", "Parking", "Room Service", "TV"],
    address: "Bishop Road, Nakuru",
    phone: "+254 51 2212121",
    email: "info@eldoret-hotel.com",
    rooms: createRooms("nakuru-002", 230, {
      standard: ["/eldoret-standard-1.jpg", "/eldoret-standard-2.jpg", "/eldoret-standard-bathroom.jpg"],
      deluxe: ["/eldoret-deluxe-1.jpg", "/eldoret-deluxe-2.jpg", "/eldoret-deluxe-bathroom.jpg"],
      suite: ["/eldoret-suite-living.jpg", "/eldoret-suite-bedroom.jpg", "/eldoret-suite-bathroom.jpg"],
      family: ["/eldoret-family-1.jpg", "/eldoret-family-2.jpg", "/eldoret-family-bathroom.jpg"],
      executive: ["/eldoret-executive-1.jpg", "/eldoret-executive-2.jpg", "/eldoret-executive-bathroom.jpg"],
      presidential: ["/eldoret-presidential-1.jpg", "/eldoret-presidential-2.jpg", "/eldoret-presidential-bathroom.jpg"],
      accessibleStandard: ["/eldoret-accessible-standard-1.jpg", "/eldoret-accessible-standard-2.jpg", "/eldoret-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/eldoret-accessible-deluxe-1.jpg", "/eldoret-accessible-deluxe-2.jpg", "/eldoret-accessible-bathroom.jpg"],
      accessibleSuite: ["/eldoret-accessible-suite-1.jpg", "/eldoret-accessible-suite-2.jpg", "/eldoret-accessible-bathroom.jpg"],
      accessibleFamily: ["/eldoret-accessible-family-1.jpg", "/eldoret-accessible-family-2.jpg", "/eldoret-accessible-bathroom.jpg"],
      accessiblePremium: ["/eldoret-accessible-premium-1.jpg", "/eldoret-accessible-premium-2.jpg", "/eldoret-accessible-bathroom.jpg"]
    })
  },
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
    phone: "+254 51 2213131",
    email: "info@nakuru-gamehouse.com",
    rooms: createRooms("nakuru-003", 260, {
      standard: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      deluxe: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      suite: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      family: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      executive: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      presidential: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      accessibleStandard: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      accessibleDeluxe: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      accessibleSuite: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      accessibleFamily: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"],
      accessiblePremium: ["/lake-elementaita-mountain (1).jpg", "/bb73af1f.avif", "/lake-elementaita-mountain (2).jpg"]
    })
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
    phone: "+254 51 2214141",
    email: "info@menengai-hotel.com",
    rooms: createRooms("nakuru-004", 200, {
      standard: ["/master-bedroom-family.jpg", "/guest-room-standard.jpg", "/guest-bathroom.jpg"],
      deluxe: ["/master-bedroom-family.jpg", "/guest-room-deluxe.jpg", "/guest-bathroom-deluxe.jpg"],
      suite: ["/guest-house-suite.jpg", "/guest-house-suite-living.jpg", "/guest-bathroom-suite.jpg"],
      family: ["/master-bedroom-family.jpg", "/family-room-extra.jpg", "/family-bathroom.jpg"],
      executive: ["/guest-house-executive.jpg", "/executive-living.jpg", "/executive-bathroom.jpg"],
      presidential: ["/guest-house-presidential.jpg", "/presidential-living.jpg", "/presidential-bathroom.jpg"],
      accessibleStandard: ["/accessible-standard-room.jpg", "/accessible-standard-2.jpg", "/accessible-bathroom.jpg"],
      accessibleDeluxe: ["/accessible-deluxe-room.jpg", "/accessible-deluxe-2.jpg", "/accessible-bathroom-deluxe.jpg"],
      accessibleSuite: ["/accessible-suite-room.jpg", "/accessible-suite-living.jpg", "/accessible-bathroom-suite.jpg"],
      accessibleFamily: ["/accessible-family-room.jpg", "/accessible-family-2.jpg", "/accessible-family-bathroom.jpg"],
      accessiblePremium: ["/accessible-premium-room.jpg", "/accessible-premium-living.jpg", "/accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 51 2215151",
    email: "info@panorama-nakuru.com",
    rooms: createRooms("nakuru-005", 210, {
      standard: ["/photo0jpg.jpg", "/photo1jpg.jpg", "/hotel-panorama-resort (3).jpg"],
      deluxe: ["/panorama-deluxe-1.jpg", "/panorama-deluxe-2.jpg", "/panorama-deluxe-bathroom.jpg"],
      suite: ["/panorama-suite-1.jpg", "/panorama-suite-2.jpg", "/panorama-suite-bathroom.jpg"],
      family: ["/panorama-family-1.jpg", "/panorama-family-2.jpg", "/panorama-family-bathroom.jpg"],
      executive: ["/panorama-executive-1.jpg", "/panorama-executive-2.jpg", "/panorama-executive-bathroom.jpg"],
      presidential: ["/panorama-presidential-1.jpg", "/panorama-presidential-2.jpg", "/panorama-presidential-bathroom.jpg"],
      accessibleStandard: ["/panorama-accessible-standard-1.jpg", "/panorama-accessible-standard-2.jpg", "/panorama-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/panorama-accessible-deluxe-1.jpg", "/panorama-accessible-deluxe-2.jpg", "/panorama-accessible-bathroom.jpg"],
      accessibleSuite: ["/panorama-accessible-suite-1.jpg", "/panorama-accessible-suite-2.jpg", "/panorama-accessible-bathroom.jpg"],
      accessibleFamily: ["/panorama-accessible-family-1.jpg", "/panorama-accessible-family-2.jpg", "/panorama-accessible-bathroom.jpg"],
      accessiblePremium: ["/panorama-accessible-premium-1.jpg", "/panorama-accessible-premium-2.jpg", "/panorama-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 51 2216161",
    email: "info@flamingo-lodge.com",
    rooms: createRooms("nakuru-006", 240, {
      standard: ["/photo6jpg.jpg", "/photo2jpg.jpg", "/photo3jpg.jpg"],
      deluxe: ["/flamingo-deluxe-1.jpg", "/flamingo-deluxe-2.jpg", "/flamingo-deluxe-bathroom.jpg"],
      suite: ["/flamingo-suite-1.jpg", "/flamingo-suite-2.jpg", "/flamingo-suite-bathroom.jpg"],
      family: ["/flamingo-family-1.jpg", "/flamingo-family-2.jpg", "/flamingo-family-bathroom.jpg"],
      executive: ["/flamingo-executive-1.jpg", "/flamingo-executive-2.jpg", "/flamingo-executive-bathroom.jpg"],
      presidential: ["/flamingo-presidential-1.jpg", "/flamingo-presidential-2.jpg", "/flamingo-presidential-bathroom.jpg"],
      accessibleStandard: ["/flamingo-accessible-standard-1.jpg", "/flamingo-accessible-standard-2.jpg", "/flamingo-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/flamingo-accessible-deluxe-1.jpg", "/flamingo-accessible-deluxe-2.jpg", "/flamingo-accessible-bathroom.jpg"],
      accessibleSuite: ["/flamingo-accessible-suite-1.jpg", "/flamingo-accessible-suite-2.jpg", "/flamingo-accessible-bathroom.jpg"],
      accessibleFamily: ["/flamingo-accessible-family-1.jpg", "/flamingo-accessible-family-2.jpg", "/flamingo-accessible-bathroom.jpg"],
      accessiblePremium: ["/flamingo-accessible-premium-1.jpg", "/flamingo-accessible-premium-2.jpg", "/flamingo-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 51 2217171",
    email: "info@nakuru-park-lodge.com",
    rooms: createRooms("nakuru-007", 220, {
      standard: ["/lake-nakuru-lodge (2).jpg", "/photo1jpg.jpg", "/20180210-125019-largejpg.jpg"],
      deluxe: ["/a-customized-zebra-room.jpg", "/photo5jpg.jpg", "/lake-nakuru-lodge (9).jpg"],
      suite: ["/lake-nakuru-lodge (8).jpg", "/photo5jpg.jpg", "/lake-nakuru-lodge (9).jpg"],
      family: ["/lake-nakuru-family-1.jpg", "/lake-nakuru-family-2.jpg", "/lake-nakuru-family-bathroom.jpg"],
      executive: ["/lake-nakuru-lodge (7).jpg", "/photo5jpg.jpg", "/lake-nakuru-lodge (9).jpg"],
      presidential: ["/lake-nakuru-presidential-1.jpg", "/lake-nakuru-presidential-2.jpg", "/lake-nakuru-presidential-bathroom.jpg"],
      accessibleStandard: ["/lake-nakuru-accessible-standard-1.jpg", "/lake-nakuru-accessible-standard-2.jpg", "/lake-nakuru-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/if-a-zebra-is-your-favorite.jpg", "/photo5jpg.jpg", "/lake-nakuru-lodge (9).jpg"],
      accessibleSuite: ["/lake-nakuru-accessible-suite-1.jpg", "/lake-nakuru-accessible-suite-2.jpg", "/lake-nakuru-accessible-bathroom.jpg"],
      accessibleFamily: ["/lake-nakuru-accessible-family-1.jpg", "/lake-nakuru-accessible-family-2.jpg", "/lake-nakuru-accessible-bathroom.jpg"],
      accessiblePremium: ["/lake-nakuru-accessible-premium-1.jpg", "/lake-nakuru-accessible-premium-2.jpg", "/lake-nakuru-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 51 2218181",
    email: "info@sweet-dreams-hotel.com",
    rooms: createRooms("nakuru-008", 170, {
      standard: ["/caption (4).jpg", "/caption (6).jpg", "/caption (5).jpg"],
      deluxe: ["/inspired-destinations.jpg", "/rock-hyrax-deluxe-2.jpg", "/rock-hyrax-deluxe-bathroom.jpg"],
      suite: ["/rock-hyrax-suite-1.jpg", "/rock-hyrax-suite-2.jpg", "/rock-hyrax-suite-bathroom.jpg"],
      family: ["/rock-hyrax-family-1.jpg", "/rock-hyrax-family-2.jpg", "/rock-hyrax-family-bathroom.jpg"],
      executive: ["/rock-hyrax-executive-1.jpg", "/rock-hyrax-executive-2.jpg", "/rock-hyrax-executive-bathroom.jpg"],
      presidential: ["/rock-hyrax-presidential-1.jpg", "/rock-hyrax-presidential-2.jpg", "/rock-hyrax-presidential-bathroom.jpg"],
      accessibleStandard: ["/rock-hyrax-accessible-standard-1.jpg", "/rock-hyrax-accessible-standard-2.jpg", "/rock-hyrax-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/rock-hyrax-accessible-deluxe-1.jpg", "/rock-hyrax-accessible-deluxe-2.jpg", "/rock-hyrax-accessible-bathroom.jpg"],
      accessibleSuite: ["/rock-hyrax-accessible-suite-1.jpg", "/rock-hyrax-accessible-suite-2.jpg", "/rock-hyrax-accessible-bathroom.jpg"],
      accessibleFamily: ["/rock-hyrax-accessible-family-1.jpg", "/rock-hyrax-accessible-family-2.jpg", "/rock-hyrax-accessible-bathroom.jpg"],
      accessiblePremium: ["/rock-hyrax-accessible-premium-1.jpg", "/rock-hyrax-accessible-premium-2.jpg", "/rock-hyrax-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 51 2219191",
    email: "info@njoro-hotel.com",
    rooms: createRooms("nakuru-009", 150, {
      standard: ["/caption (7).jpg", "/caption (9).jpg", "/ziwa-bush-lodge.jpg"],
      deluxe: ["/ziwa-bush-deluxe-1.jpg", "/ziwa-bush-deluxe-2.jpg", "/ziwa-bush-deluxe-bathroom.jpg"],
      suite: ["/ziwa-bush-suite-1.jpg", "/ziwa-bush-suite-2.jpg", "/ziwa-bush-suite-bathroom.jpg"],
      family: ["/ziwa-bush-family-1.jpg", "/ziwa-bush-family-2.jpg", "/ziwa-bush-family-bathroom.jpg"],
      executive: ["/ziwa-bush-executive-1.jpg", "/ziwa-bush-executive-2.jpg", "/ziwa-bush-executive-bathroom.jpg"],
      presidential: ["/ziwa-bush-presidential-1.jpg", "/ziwa-bush-presidential-2.jpg", "/ziwa-bush-presidential-bathroom.jpg"],
      accessibleStandard: ["/ziwa-bush-accessible-standard-1.jpg", "/ziwa-bush-accessible-standard-2.jpg", "/ziwa-bush-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/ziwa-bush-accessible-deluxe-1.jpg", "/ziwa-bush-accessible-deluxe-2.jpg", "/ziwa-bush-accessible-bathroom.jpg"],
      accessibleSuite: ["/ziwa-bush-accessible-suite-1.jpg", "/ziwa-bush-accessible-suite-2.jpg", "/ziwa-bush-accessible-bathroom.jpg"],
      accessibleFamily: ["/ziwa-bush-accessible-family-1.jpg", "/ziwa-bush-accessible-family-2.jpg", "/ziwa-bush-accessible-bathroom.jpg"],
      accessiblePremium: ["/ziwa-bush-accessible-premium-1.jpg", "/ziwa-bush-accessible-premium-2.jpg", "/ziwa-bush-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 51 2220202",
    email: "info@afraha-hotel.com",
    rooms: createRooms("nakuru-010", 190, {
      standard: ["/lake-nakuru-sopa-lodge (3).jpg", "/lake-nakuru-sopa-lodge (4).jpg", "/20171211-135815-hdr-largejpg.jpg"],
      deluxe: ["/sopa-lodge-deluxe-1.jpg", "/sopa-lodge-deluxe-2.jpg", "/sopa-lodge-deluxe-bathroom.jpg"],
      suite: ["/sopa-lodge-suite-1.jpg", "/sopa-lodge-suite-2.jpg", "/sopa-lodge-suite-bathroom.jpg"],
      family: ["/sopa-lodge-family-1.jpg", "/sopa-lodge-family-2.jpg", "/sopa-lodge-family-bathroom.jpg"],
      executive: ["/sopa-lodge-executive-1.jpg", "/sopa-lodge-executive-2.jpg", "/sopa-lodge-executive-bathroom.jpg"],
      presidential: ["/sopa-lodge-presidential-1.jpg", "/sopa-lodge-presidential-2.jpg", "/sopa-lodge-presidential-bathroom.jpg"],
      accessibleStandard: ["/sopa-lodge-accessible-standard-1.jpg", "/sopa-lodge-accessible-standard-2.jpg", "/sopa-lodge-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/sopa-lodge-accessible-deluxe-1.jpg", "/sopa-lodge-accessible-deluxe-2.jpg", "/sopa-lodge-accessible-bathroom.jpg"],
      accessibleSuite: ["/sopa-lodge-accessible-suite-1.jpg", "/sopa-lodge-accessible-suite-2.jpg", "/sopa-lodge-accessible-bathroom.jpg"],
      accessibleFamily: ["/sopa-lodge-accessible-family-1.jpg", "/sopa-lodge-accessible-family-2.jpg", "/sopa-lodge-accessible-bathroom.jpg"],
      accessiblePremium: ["/sopa-lodge-accessible-premium-1.jpg", "/sopa-lodge-accessible-premium-2.jpg", "/sopa-lodge-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 51 2221212",
    email: "info@safari-park-nakuru.com",
    rooms: createRooms("nakuru-011", 215, {
      standard: ["/buffalo-cottage (1).jpg", "/punda-milias-house-living.jpg", "/bathroom-at-banda.jpg"],
      deluxe: ["/punda-milias-deluxe-1.jpg", "/punda-milias-deluxe-2.jpg", "/punda-milias-deluxe-bathroom.jpg"],
      suite: ["/punda-milias-suite-1.jpg", "/punda-milias-suite-2.jpg", "/punda-milias-suite-bathroom.jpg"],
      family: ["/punda-milias-family-1.jpg", "/punda-milias-family-2.jpg", "/punda-milias-family-bathroom.jpg"],
      executive: ["/punda-milias-executive-1.jpg", "/punda-milias-executive-2.jpg", "/punda-milias-executive-bathroom.jpg"],
      presidential: ["/punda-milias-presidential-1.jpg", "/punda-milias-presidential-2.jpg", "/punda-milias-presidential-bathroom.jpg"],
      accessibleStandard: ["/punda-milias-accessible-standard-1.jpg", "/punda-milias-accessible-standard-2.jpg", "/punda-milias-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/punda-milias-accessible-deluxe-1.jpg", "/punda-milias-accessible-deluxe-2.jpg", "/punda-milias-accessible-bathroom.jpg"],
      accessibleSuite: ["/punda-milias-accessible-suite-1.jpg", "/punda-milias-accessible-suite-2.jpg", "/punda-milias-accessible-bathroom.jpg"],
      accessibleFamily: ["/punda-milias-accessible-family-1.jpg", "/punda-milias-accessible-family-2.jpg", "/punda-milias-accessible-bathroom.jpg"],
      accessiblePremium: ["/punda-milias-accessible-premium-1.jpg", "/punda-milias-accessible-premium-2.jpg", "/punda-milias-accessible-premium-bathroom.jpg"]
    })
  },

  // Samburu Hotels
  {
    id: "samburu-001",
    name: "Samburu Intrepids Tented Camp",
    location: "Samburu",
    rating: 4.8,
    price: 400,
    image: "/samburu-intrepids.jpg?height=300&width=400",
    gallery: [
      "/samburu-intrepids-1.jpg?height=400&width=600",
      "/samburu-intrepids-2.jpg?height=400&width=600",
      "/samburu-intrepids-3.jpg?height=400&width=600",
      "/samburu-intrepids-4.jpg?height=400&width=600",
    ],
    description:
      "Ultra-luxury lodge on the Ewaso Nyiro River with exceptional safari experiences and personalized service.",
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
    phone: "+254 64 2200000",
    email: "reservations@samburu-serena.com",
    rooms: createRooms("samburu-001", 400, {
      standard: ["/samburu-standard-tent.jpg", "/samburu-standard-interior.jpg", "/samburu-standard-bathroom.jpg"],
      deluxe: ["/samburu-deluxe-tent.jpg", "/samburu-deluxe-interior.jpg", "/samburu-deluxe-bathroom.jpg"],
      suite: ["/samburu-suite-tent.jpg", "/samburu-suite-interior.jpg", "/samburu-suite-bathroom.jpg"],
      family: ["/samburu-family-tent.jpg", "/samburu-family-interior.jpg", "/samburu-family-bathroom.jpg"],
      executive: ["/samburu-executive-tent.jpg", "/samburu-executive-interior.jpg", "/samburu-executive-bathroom.jpg"],
      presidential: ["/samburu-presidential-tent.jpg", "/samburu-presidential-interior.jpg", "/samburu-presidential-bathroom.jpg"],
      accessibleStandard: ["/samburu-accessible-standard.jpg", "/samburu-accessible-interior.jpg", "/samburu-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/samburu-accessible-deluxe.jpg", "/samburu-accessible-deluxe-interior.jpg", "/samburu-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/samburu-accessible-suite.jpg", "/samburu-accessible-suite-interior.jpg", "/samburu-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/samburu-accessible-family.jpg", "/samburu-accessible-family-interior.jpg", "/samburu-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/samburu-accessible-premium.jpg", "/samburu-accessible-premium-interior.jpg", "/samburu-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-002",
    name: "Saruni Samburu",
    location: "Samburu",
    rating: 4.6,
    price: 350,
    image: "/saruni-samburu.jpg?height=300&width=400",
    gallery: [
      "/saruni-samburu-1.jpg?height=400&width=600",
      "/saruni-samburu-2.jpg?height=400&width=600",
      "/saruni-samburu-3.jpg?height=400&width=600",
      "/saruni-samburu-4.jpg?height=400&width=600",
    ],
    description: "Prime lodge within Samburu Reserve featuring exclusive wildlife viewing and cultural experiences.",
    amenities: ["Safari Included", "Restaurant", "Bar", "Cultural Shows", "Parking", "Room Service", "WiFi", "Guides"],
    address: "Samburu National Reserve",
    phone: "+254 64 2210000",
    email: "info@samburu-lodge.com",
    rooms: createRooms("samburu-002", 350, {
      standard: ["/saruni-standard.jpg", "/saruni-standard-2.jpg", "/saruni-standard-bathroom.jpg"],
      deluxe: ["/saruni-deluxe.jpg", "/saruni-deluxe-2.jpg", "/saruni-deluxe-bathroom.jpg"],
      suite: ["/saruni-suite.jpg", "/saruni-suite-2.jpg", "/saruni-suite-bathroom.jpg"],
      family: ["/saruni-family.jpg", "/saruni-family-2.jpg", "/saruni-family-bathroom.jpg"],
      executive: ["/saruni-executive.jpg", "/saruni-executive-2.jpg", "/saruni-executive-bathroom.jpg"],
      presidential: ["/saruni-presidential.jpg", "/saruni-presidential-2.jpg", "/saruni-presidential-bathroom.jpg"],
      accessibleStandard: ["/saruni-accessible-standard.jpg", "/saruni-accessible-standard-2.jpg", "/saruni-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/saruni-accessible-deluxe.jpg", "/saruni-accessible-deluxe-2.jpg", "/saruni-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/saruni-accessible-suite.jpg", "/saruni-accessible-suite-2.jpg", "/saruni-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/saruni-accessible-family.jpg", "/saruni-accessible-family-2.jpg", "/saruni-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/saruni-accessible-premium.jpg", "/saruni-accessible-premium-2.jpg", "/saruni-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-003",
    name: "Soroi Larsens Camp",
    location: "Samburu",
    rating: 4.5,
    price: 320,
    image: "/soroi-larsens.jpg?height=300&width=400",
    gallery: [
      "/soroi-larsens-1.jpg?height=400&width=600",
      "/soroi-larsens-2.jpg?height=400&width=600",
      "/soroi-larsens-3.jpg?height=400&width=600",
      "/soroi-larsens-4.jpg?height=400&width=600",
    ],
    description:
      "Intimate bush camp offering authentic wilderness experience with excellent game viewing opportunities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Campfire", "Photography", "WiFi", "Room Service", "Guides"],
    address: "Samburu Reserve",
    phone: "+254 64 2220000",
    email: "info@samburu-bushcamp.com",
    rooms: createRooms("samburu-003", 320, {
      standard: ["/soroi-standard-tent.jpg", "/soroi-standard-interior.jpg", "/soroi-standard-bathroom.jpg"],
      deluxe: ["/soroi-deluxe-tent.jpg", "/soroi-deluxe-interior.jpg", "/soroi-deluxe-bathroom.jpg"],
      suite: ["/soroi-suite-tent.jpg", "/soroi-suite-interior.jpg", "/soroi-suite-bathroom.jpg"],
      family: ["/soroi-family-tent.jpg", "/soroi-family-interior.jpg", "/soroi-family-bathroom.jpg"],
      executive: ["/soroi-executive-tent.jpg", "/soroi-executive-interior.jpg", "/soroi-executive-bathroom.jpg"],
      presidential: ["/soroi-presidential-tent.jpg", "/soroi-presidential-interior.jpg", "/soroi-presidential-bathroom.jpg"],
      accessibleStandard: ["/soroi-accessible-standard.jpg", "/soroi-accessible-interior.jpg", "/soroi-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/soroi-accessible-deluxe.jpg", "/soroi-accessible-deluxe-interior.jpg", "/soroi-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/soroi-accessible-suite.jpg", "/soroi-accessible-suite-interior.jpg", "/soroi-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/soroi-accessible-family.jpg", "/soroi-accessible-family-interior.jpg", "/soroi-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/soroi-accessible-premium.jpg", "/soroi-accessible-premium-interior.jpg", "/soroi-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-004",
    name: "Elephant Bedroom Camp",
    location: "Samburu",
    rating: 4.4,
    price: 300,
    image: "/elephant-bedroom-camp.jpg?height=300&width=400",
    gallery: [
      "/elephant-bedroom-1.jpg?height=400&width=600",
      "/elephant-bedroom-2.jpg?height=400&width=600",
      "/elephant-bedroom-3.jpg?height=400&width=600",
      "/elephant-bedroom-4.jpg?height=400&width=600",
    ],
    description: "Safari lodge in Shaba National Park with stunning river setting and wildlife abundance.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "River View", "Parking", "Room Service", "WiFi", "Guides"],
    address: "Shaba National Park, Samburu",
    phone: "+254 64 2230000",
    email: "info@sarova-shaba.com",
    rooms: createRooms("samburu-004", 300, {
      standard: ["/elephant-standard-tent.jpg", "/elephant-standard-interior.jpg", "/elephant-standard-bathroom.jpg"],
      deluxe: ["/elephant-deluxe-tent.jpg", "/elephant-deluxe-interior.jpg", "/elephant-deluxe-bathroom.jpg"],
      suite: ["/elephant-suite-tent.jpg", "/elephant-suite-interior.jpg", "/elephant-suite-bathroom.jpg"],
      family: ["/elephant-family-tent.jpg", "/elephant-family-interior.jpg", "/elephant-family-bathroom.jpg"],
      executive: ["/elephant-executive-tent.jpg", "/elephant-executive-interior.jpg", "/elephant-executive-bathroom.jpg"],
      presidential: ["/elephant-presidential-tent.jpg", "/elephant-presidential-interior.jpg", "/elephant-presidential-bathroom.jpg"],
      accessibleStandard: ["/elephant-accessible-standard.jpg", "/elephant-accessible-interior.jpg", "/elephant-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/elephant-accessible-deluxe.jpg", "/elephant-accessible-deluxe-interior.jpg", "/elephant-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/elephant-accessible-suite.jpg", "/elephant-accessible-suite-interior.jpg", "/elephant-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/elephant-accessible-family.jpg", "/elephant-accessible-family-interior.jpg", "/elephant-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/elephant-accessible-premium.jpg", "/elephant-accessible-premium-interior.jpg", "/elephant-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-005",
    name: "Ashnil Samburu Camp",
    location: "Samburu",
    rating: 4.3,
    price: 280,
    image: "/ashnil-samburu.jpg?height=300&width=400",
    gallery: [
      "/ashnil-samburu-1.jpg?height=400&width=600",
      "/ashnil-samburu-2.jpg?height=400&width=600",
      "/ashnil-samburu-3.jpg?height=400&width=600",
      "/ashnil-samburu-4.jpg?height=400&width=600",
    ],
    description: "Well-positioned lodge with excellent game viewing near Buffalo Springs.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Parking", "Room Service", "WiFi", "Photography", "Guides"],
    address: "Buffalo Springs, Samburu",
    phone: "+254 64 2240000",
    email: "info@buffalo-springs-lodge.com",
    rooms: createRooms("samburu-005", 280, {
      standard: ["/ashnil-standard-tent.jpg", "/ashnil-standard-interior.jpg", "/ashnil-standard-bathroom.jpg"],
      deluxe: ["/ashnil-deluxe-tent.jpg", "/ashnil-deluxe-interior.jpg", "/ashnil-deluxe-bathroom.jpg"],
      suite: ["/ashnil-suite-tent.jpg", "/ashnil-suite-interior.jpg", "/ashnil-suite-bathroom.jpg"],
      family: ["/ashnil-family-tent.jpg", "/ashnil-family-interior.jpg", "/ashnil-family-bathroom.jpg"],
      executive: ["/ashnil-executive-tent.jpg", "/ashnil-executive-interior.jpg", "/ashnil-executive-bathroom.jpg"],
      presidential: ["/ashnil-presidential-tent.jpg", "/ashnil-presidential-interior.jpg", "/ashnil-presidential-bathroom.jpg"],
      accessibleStandard: ["/ashnil-accessible-standard.jpg", "/ashnil-accessible-interior.jpg", "/ashnil-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/ashnil-accessible-deluxe.jpg", "/ashnil-accessible-deluxe-interior.jpg", "/ashnil-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/ashnil-accessible-suite.jpg", "/ashnil-accessible-suite-interior.jpg", "/ashnil-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/ashnil-accessible-family.jpg", "/ashnil-accessible-family-interior.jpg", "/ashnil-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/ashnil-accessible-premium.jpg", "/ashnil-accessible-premium-interior.jpg", "/ashnil-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-006",
    name: "Samburu Simba Lodge",
    location: "Samburu",
    rating: 4.6,
    price: 360,
    image: "/samburu-simba.jpg?height=300&width=400",
    gallery: [
      "/samburu-simba-1.jpg?height=400&width=600",
      "/samburu-simba-2.jpg?height=400&width=600",
      "/samburu-simba-3.jpg?height=400&width=600",
      "/samburu-simba-4.jpg?height=400&width=600",
    ],
    description: "Exclusive luxury club with bespoke safari experiences and premium accommodations.",
    amenities: ["Luxury Tents", "Safari Drives", "Restaurant", "Pool", "Bar", "Spa", "WiFi", "Guides"],
    address: "Samburu",
    phone: "+254 64 2250000",
    email: "info@samburu-intrepids.com",
    rooms: createRooms("samburu-006", 360, {
      standard: ["/simba-standard-tent.jpg", "/simba-standard-interior.jpg", "/simba-standard-bathroom.jpg"],
      deluxe: ["/simba-deluxe-tent.jpg", "/simba-deluxe-interior.jpg", "/simba-deluxe-bathroom.jpg"],
      suite: ["/simba-suite-tent.jpg", "/simba-suite-interior.jpg", "/simba-suite-bathroom.jpg"],
      family: ["/simba-family-tent.jpg", "/simba-family-interior.jpg", "/simba-family-bathroom.jpg"],
      executive: ["/simba-executive-tent.jpg", "/simba-executive-interior.jpg", "/simba-executive-bathroom.jpg"],
      presidential: ["/simba-presidential-tent.jpg", "/simba-presidential-interior.jpg", "/simba-presidential-bathroom.jpg"],
      accessibleStandard: ["/simba-accessible-standard.jpg", "/simba-accessible-interior.jpg", "/simba-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/simba-accessible-deluxe.jpg", "/simba-accessible-deluxe-interior.jpg", "/simba-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/simba-accessible-suite.jpg", "/simba-accessible-suite-interior.jpg", "/simba-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/simba-accessible-family.jpg", "/simba-accessible-family-interior.jpg", "/simba-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/simba-accessible-premium.jpg", "/simba-accessible-premium-interior.jpg", "/simba-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-007",
    name: "Elephant Watch Camp & Safaris(2026)",
    location: "Samburu",
    rating: 4.4,
    price: 310,
    image: "/elephant-watch-camp.jpg?height=300&width=400",
    gallery: [
      "/elephant-watch-1.jpg?height=400&width=600",
      "/elephant-watch-2.jpg?height=400&width=600",
      "/elephant-watch-3.jpg?height=400&width=600",
      "/elephant-watch-4.jpg?height=400&width=600",
    ],
    description: "Charming tented camp with personalized service and excellent wildlife viewing.",
    amenities: ["Tented Rooms", "Safari Drives", "Restaurant", "Bar", "Campfire", "WiFi", "Room Service", "Guides"],
    address: "Samburu Reserve",
    phone: "+254 64 2260000",
    email: "info@larsens-camp.com",
    rooms: createRooms("samburu-007", 310, {
      standard: ["/elephant-watch-standard.jpg", "/elephant-watch-standard-2.jpg", "/elephant-watch-standard-bathroom.jpg"],
      deluxe: ["/elephant-watch-deluxe.jpg", "/elephant-watch-deluxe-2.jpg", "/elephant-watch-deluxe-bathroom.jpg"],
      suite: ["/elephant-watch-suite.jpg", "/elephant-watch-suite-2.jpg", "/elephant-watch-suite-bathroom.jpg"],
      family: ["/elephant-watch-family.jpg", "/elephant-watch-family-2.jpg", "/elephant-watch-family-bathroom.jpg"],
      executive: ["/elephant-watch-executive.jpg", "/elephant-watch-executive-2.jpg", "/elephant-watch-executive-bathroom.jpg"],
      presidential: ["/elephant-watch-presidential.jpg", "/elephant-watch-presidential-2.jpg", "/elephant-watch-presidential-bathroom.jpg"],
      accessibleStandard: ["/elephant-watch-accessible-standard.jpg", "/elephant-watch-accessible-2.jpg", "/elephant-watch-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/elephant-watch-accessible-deluxe.jpg", "/elephant-watch-accessible-deluxe-2.jpg", "/elephant-watch-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/elephant-watch-accessible-suite.jpg", "/elephant-watch-accessible-suite-2.jpg", "/elephant-watch-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/elephant-watch-accessible-family.jpg", "/elephant-watch-accessible-family-2.jpg", "/elephant-watch-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/elephant-watch-accessible-premium.jpg", "/elephant-watch-accessible-premium-2.jpg", "/elephant-watch-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-008",
    name: "Samburu Riverside Camp",
    location: "Samburu",
    rating: 4.2,
    price: 260,
    image: "/samburu-riverside.jpg?height=300&width=400",
    gallery: [
      "/samburu-riverside-1.jpg?height=400&width=600",
      "/samburu-riverside-2.jpg?height=400&width=600",
      "/samburu-riverside-3.jpg?height=400&width=600",
      "/samburu-riverside-4.jpg?height=400&width=600",
    ],
    description: "Budget-friendly camp with authentic safari experiences and friendly atmosphere.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Campfire", "Parking", "Room Service", "WiFi", "Guides"],
    address: "Samburu",
    phone: "+254 64 2270000",
    email: "info@samburu-explorer.com",
    rooms: createRooms("samburu-008", 260, {
      standard: ["/riverside-standard.jpg", "/riverside-standard-2.jpg", "/riverside-standard-bathroom.jpg"],
      deluxe: ["/riverside-deluxe.jpg", "/riverside-deluxe-2.jpg", "/riverside-deluxe-bathroom.jpg"],
      suite: ["/riverside-suite.jpg", "/riverside-suite-2.jpg", "/riverside-suite-bathroom.jpg"],
      family: ["/riverside-family.jpg", "/riverside-family-2.jpg", "/riverside-family-bathroom.jpg"],
      executive: ["/riverside-executive.jpg", "/riverside-executive-2.jpg", "/riverside-executive-bathroom.jpg"],
      presidential: ["/riverside-presidential.jpg", "/riverside-presidential-2.jpg", "/riverside-presidential-bathroom.jpg"],
      accessibleStandard: ["/riverside-accessible-standard.jpg", "/riverside-accessible-2.jpg", "/riverside-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/riverside-accessible-deluxe.jpg", "/riverside-accessible-deluxe-2.jpg", "/riverside-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/riverside-accessible-suite.jpg", "/riverside-accessible-suite-2.jpg", "/riverside-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/riverside-accessible-family.jpg", "/riverside-accessible-family-2.jpg", "/riverside-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/riverside-accessible-premium.jpg", "/riverside-accessible-premium-2.jpg", "/riverside-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-009",
    name: "Shaba National Reserve",
    location: "Samburu",
    rating: 4.3,
    price: 290,
    image: "/shaba-reserve.jpg?height=300&width=400",
    gallery: [
      "/shaba-reserve-1.jpg?height=400&width=600",
      "/shaba-reserve-2.jpg?height=400&width=600",
      "/shaba-reserve-3.jpg?height=400&width=600",
      "/shaba-reserve-4.jpg?height=400&width=600",
    ],
    description: "Serene wilderness lodge offering tranquil ambiance with thrilling game drives.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Parking", "Room Service", "WiFi", "Photography", "Guides"],
    address: "Samburu Reserve",
    phone: "+254 64 2280000",
    email: "info@samburu-wilderness.com",
    rooms: createRooms("samburu-009", 290, {
      standard: ["/shaba-standard.jpg", "/shaba-standard-2.jpg", "/shaba-standard-bathroom.jpg"],
      deluxe: ["/shaba-deluxe.jpg", "/shaba-deluxe-2.jpg", "/shaba-deluxe-bathroom.jpg"],
      suite: ["/shaba-suite.jpg", "/shaba-suite-2.jpg", "/shaba-suite-bathroom.jpg"],
      family: ["/shaba-family.jpg", "/shaba-family-2.jpg", "/shaba-family-bathroom.jpg"],
      executive: ["/shaba-executive.jpg", "/shaba-executive-2.jpg", "/shaba-executive-bathroom.jpg"],
      presidential: ["/shaba-presidential.jpg", "/shaba-presidential-2.jpg", "/shaba-presidential-bathroom.jpg"],
      accessibleStandard: ["/shaba-accessible-standard.jpg", "/shaba-accessible-2.jpg", "/shaba-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/shaba-accessible-deluxe.jpg", "/shaba-accessible-deluxe-2.jpg", "/shaba-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/shaba-accessible-suite.jpg", "/shaba-accessible-suite-2.jpg", "/shaba-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/shaba-accessible-family.jpg", "/shaba-accessible-family-2.jpg", "/shaba-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/shaba-accessible-premium.jpg", "/shaba-accessible-premium-2.jpg", "/shaba-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-010",
    name: "Umoja Camp Site",
    location: "Samburu",
    rating: 4.4,
    price: 300,
    image: "/umoja-camp.jpg?height=300&width=400",
    gallery: [
      "/umoja-camp-1.jpg?height=400&width=600",
      "/umoja-camp-2.jpg?height=400&width=600",
      "/umoja-camp-3.jpg?height=400&width=600",
      "/umoja-camp-4.jpg?height=400&width=600",
    ],
    description: "Camp specialized in elephant viewing with educational conservation programs.",
    amenities: [
      "Safari Drives",
      "Education Programs",
      "Restaurant",
      "Bar",
      "WiFi",
      "Room Service",
      "Photography",
      "Guides",
    ],
    address: "Samburu",
    phone: "+254 64 2290000",
    email: "info@samburu-elephant-camp.com",
    rooms: createRooms("samburu-010", 300, {
      standard: ["/umoja-standard.jpg", "/umoja-standard-2.jpg", "/umoja-standard-bathroom.jpg"],
      deluxe: ["/umoja-deluxe.jpg", "/umoja-deluxe-2.jpg", "/umoja-deluxe-bathroom.jpg"],
      suite: ["/umoja-suite.jpg", "/umoja-suite-2.jpg", "/umoja-suite-bathroom.jpg"],
      family: ["/umoja-family.jpg", "/umoja-family-2.jpg", "/umoja-family-bathroom.jpg"],
      executive: ["/umoja-executive.jpg", "/umoja-executive-2.jpg", "/umoja-executive-bathroom.jpg"],
      presidential: ["/umoja-presidential.jpg", "/umoja-presidential-2.jpg", "/umoja-presidential-bathroom.jpg"],
      accessibleStandard: ["/umoja-accessible-standard.jpg", "/umoja-accessible-2.jpg", "/umoja-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/umoja-accessible-deluxe.jpg", "/umoja-accessible-deluxe-2.jpg", "/umoja-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/umoja-accessible-suite.jpg", "/umoja-accessible-suite-2.jpg", "/umoja-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/umoja-accessible-family.jpg", "/umoja-accessible-family-2.jpg", "/umoja-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/umoja-accessible-premium.jpg", "/umoja-accessible-premium-2.jpg", "/umoja-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "samburu-011",
    name: "Samburu Riverside Resort",
    location: "Samburu",
    rating: 4.2,
    price: 270,
    image: "/samburu-riverside-resort.jpg?height=300&width=400",
    gallery: [
      "/riverside-resort-1.jpg?height=400&width=600",
      "/riverside-resort-2.jpg?height=400&width=600",
      "/riverside-resort-3.jpg?height=400&width=600",
      "/riverside-resort-4.jpg?height=400&width=600",
    ],
    description: "Resort positioned on the river bank with excellent wildlife access.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "River View", "Parking", "WiFi", "Room Service", "Guides"],
    address: "Ewaso Nyiro River, Samburu",
    phone: "+254 64 2300000",
    email: "info@samburu-riverside.com",
    rooms: createRooms("samburu-011", 270, {
      standard: ["/riverside-resort-standard.jpg", "/riverside-resort-standard-2.jpg", "/riverside-resort-standard-bathroom.jpg"],
      deluxe: ["/riverside-resort-deluxe.jpg", "/riverside-resort-deluxe-2.jpg", "/riverside-resort-deluxe-bathroom.jpg"],
      suite: ["/riverside-resort-suite.jpg", "/riverside-resort-suite-2.jpg", "/riverside-resort-suite-bathroom.jpg"],
      family: ["/riverside-resort-family.jpg", "/riverside-resort-family-2.jpg", "/riverside-resort-family-bathroom.jpg"],
      executive: ["/riverside-resort-executive.jpg", "/riverside-resort-executive-2.jpg", "/riverside-resort-executive-bathroom.jpg"],
      presidential: ["/riverside-resort-presidential.jpg", "/riverside-resort-presidential-2.jpg", "/riverside-resort-presidential-bathroom.jpg"],
      accessibleStandard: ["/riverside-resort-accessible-standard.jpg", "/riverside-resort-accessible-2.jpg", "/riverside-resort-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/riverside-resort-accessible-deluxe.jpg", "/riverside-resort-accessible-deluxe-2.jpg", "/riverside-resort-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/riverside-resort-accessible-suite.jpg", "/riverside-resort-accessible-suite-2.jpg", "/riverside-resort-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/riverside-resort-accessible-family.jpg", "/riverside-resort-accessible-family-2.jpg", "/riverside-resort-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/riverside-resort-accessible-premium.jpg", "/riverside-resort-accessible-premium-2.jpg", "/riverside-resort-accessible-premium-bathroom.jpg"]
    })
  },

  // Nanyuki Hotels
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
    description:
      "Exclusive luxury club on the slopes of Mount Kenya with world-class facilities and personalized service.",
    amenities: ["Luxury Villas", "Fine Dining", "Pool", "Spa", "Horse Riding", "Bar", "WiFi", "Concierge"],
    address: "Mount Kenya",
    phone: "+254 62 2032014",
    email: "reservations@mountkenyaclub.com",
    rooms: createRooms("nanyuki-001", 380, {
      standard: ["/master-king-suite.jpg", "/master-king-suite (1).jpg", "/maiyan (3).jpg"],
      deluxe: ["/maiyan-deluxe-1.jpg", "/maiyan-deluxe-2.jpg", "/maiyan-deluxe-bathroom.jpg"],
      suite: ["/maiyan-suite-1.jpg", "/maiyan-suite-2.jpg", "/maiyan-suite-bathroom.jpg"],
      family: ["/maiyan-family-1.jpg", "/maiyan-family-2.jpg", "/maiyan-family-bathroom.jpg"],
      executive: ["/maiyan-executive-1.jpg", "/maiyan-executive-2.jpg", "/maiyan-executive-bathroom.jpg"],
      presidential: ["/maiyan-presidential-1.jpg", "/maiyan-presidential-2.jpg", "/maiyan-presidential-bathroom.jpg"],
      accessibleStandard: ["/maiyan-accessible-standard-1.jpg", "/maiyan-accessible-standard-2.jpg", "/maiyan-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/maiyan-accessible-deluxe-1.jpg", "/maiyan-accessible-deluxe-2.jpg", "/maiyan-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/maiyan-accessible-suite-1.jpg", "/maiyan-accessible-suite-2.jpg", "/maiyan-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/maiyan-accessible-family-1.jpg", "/maiyan-accessible-family-2.jpg", "/maiyan-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/maiyan-accessible-premium-1.jpg", "/maiyan-accessible-premium-2.jpg", "/maiyan-accessible-premium-bathroom.jpg"]
    })
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
    description:
      "Comfortable hotel in town center with good facilities and convenient location for mountain activities.",
    amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Meeting Rooms", "Parking", "Room Service", "TV"],
    address: "Nanyuki Town",
    phone: "+254 62 2032620",
    email: "reservations@nanyuki-serena.com",
    rooms: createRooms("nanyuki-002", 310, {
      standard: ["/guest-room (1).jpg", "/guest-room.jpg", "/guest-room (2).jpg"],
      deluxe: ["/fairmont-deluxe-1.jpg", "/fairmont-deluxe-2.jpg", "/fairmont-deluxe-bathroom.jpg"],
      suite: ["/fairmont-suite-1.jpg", "/fairmont-suite-2.jpg", "/fairmont-suite-bathroom.jpg"],
      family: ["/fairmont-family-1.jpg", "/fairmont-family-2.jpg", "/fairmont-family-bathroom.jpg"],
      executive: ["/fairmont-executive-1.jpg", "/fairmont-executive-2.jpg", "/fairmont-executive-bathroom.jpg"],
      presidential: ["/fairmont-presidential-1.jpg", "/fairmont-presidential-2.jpg", "/fairmont-presidential-bathroom.jpg"],
      accessibleStandard: ["/fairmont-accessible-standard-1.jpg", "/fairmont-accessible-standard-2.jpg", "/fairmont-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/fairmont-accessible-deluxe-1.jpg", "/fairmont-accessible-deluxe-2.jpg", "/fairmont-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/fairmont-accessible-suite-1.jpg", "/fairmont-accessible-suite-2.jpg", "/fairmont-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/fairmont-accessible-family-1.jpg", "/fairmont-accessible-family-2.jpg", "/fairmont-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/fairmont-accessible-premium-1.jpg", "/fairmont-accessible-premium-2.jpg", "/fairmont-accessible-premium-bathroom.jpg"]
    })
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
    description:
      "Premier lodge within Ol Pejeta Conservancy offering exceptional wildlife viewing and rhino conservation experiences.",
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
    phone: "+254 62 2033000",
    email: "info@ol-pejeta-lodge.com",
    rooms: createRooms("nanyuki-003", 340, {
      standard: ["/ol-pejeta-bush-camp (3).jpg", "/ol-pejeta-bush-camp (4).jpg", "/ol-pejeta-bush-camp (5).jpg"],
      deluxe: ["/ol-pejeta-deluxe-1.jpg", "/ol-pejeta-deluxe-2.jpg", "/ol-pejeta-deluxe-bathroom.jpg"],
      suite: ["/ol-pejeta-suite-1.jpg", "/ol-pejeta-suite-2.jpg", "/ol-pejeta-suite-bathroom.jpg"],
      family: ["/ol-pejeta-family-1.jpg", "/ol-pejeta-family-2.jpg", "/ol-pejeta-family-bathroom.jpg"],
      executive: ["/ol-pejeta-executive-1.jpg", "/ol-pejeta-executive-2.jpg", "/ol-pejeta-executive-bathroom.jpg"],
      presidential: ["/ol-pejeta-presidential-1.jpg", "/ol-pejeta-presidential-2.jpg", "/ol-pejeta-presidential-bathroom.jpg"],
      accessibleStandard: ["/ol-pejeta-accessible-standard-1.jpg", "/ol-pejeta-accessible-standard-2.jpg", "/ol-pejeta-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/ol-pejeta-accessible-deluxe-1.jpg", "/ol-pejeta-accessible-deluxe-2.jpg", "/ol-pejeta-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/ol-pejeta-accessible-suite-1.jpg", "/ol-pejeta-accessible-suite-2.jpg", "/ol-pejeta-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/ol-pejeta-accessible-family-1.jpg", "/ol-pejeta-accessible-family-2.jpg", "/ol-pejeta-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/ol-pejeta-accessible-premium-1.jpg", "/ol-pejeta-accessible-premium-2.jpg", "/ol-pejeta-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033100",
    email: "info@solio-lodge.com",
    rooms: createRooms("nanyuki-004", 300, {
      standard: ["/twin-bed-room-of-the.jpg", "/beautiful-and-spacious.jpg", "/relaxing-baths-and-refreshing.jpg"],
      deluxe: ["/solio-deluxe-1.jpg", "/solio-deluxe-2.jpg", "/solio-deluxe-bathroom.jpg"],
      suite: ["/solio-suite-1.jpg", "/solio-suite-2.jpg", "/solio-suite-bathroom.jpg"],
      family: ["/solio-family-1.jpg", "/solio-family-2.jpg", "/solio-family-bathroom.jpg"],
      executive: ["/solio-executive-1.jpg", "/solio-executive-2.jpg", "/solio-executive-bathroom.jpg"],
      presidential: ["/solio-presidential-1.jpg", "/solio-presidential-2.jpg", "/solio-presidential-bathroom.jpg"],
      accessibleStandard: ["/solio-accessible-standard-1.jpg", "/solio-accessible-standard-2.jpg", "/solio-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/solio-accessible-deluxe-1.jpg", "/solio-accessible-deluxe-2.jpg", "/solio-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/solio-accessible-suite-1.jpg", "/solio-accessible-suite-2.jpg", "/solio-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/solio-accessible-family-1.jpg", "/solio-accessible-family-2.jpg", "/solio-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/solio-accessible-premium-1.jpg", "/solio-accessible-premium-2.jpg", "/solio-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033200",
    email: "info@nanyuki-riverhouse.com",
    rooms: createRooms("nanyuki-005", 270, {
      standard: ["/tripple-room.jpg", "/caption (22).jpg", "/caption (21).jpg"],
      deluxe: ["/sweetwaters-deluxe-1.jpg", "/sweetwaters-deluxe-2.jpg", "/sweetwaters-deluxe-bathroom.jpg"],
      suite: ["/sweetwaters-suite-1.jpg", "/sweetwaters-suite-2.jpg", "/sweetwaters-suite-bathroom.jpg"],
      family: ["/sweetwaters-family-1.jpg", "/sweetwaters-family-2.jpg", "/sweetwaters-family-bathroom.jpg"],
      executive: ["/sweetwaters-executive-1.jpg", "/sweetwaters-executive-2.jpg", "/sweetwaters-executive-bathroom.jpg"],
      presidential: ["/sweetwaters-presidential-1.jpg", "/sweetwaters-presidential-2.jpg", "/sweetwaters-presidential-bathroom.jpg"],
      accessibleStandard: ["/sweetwaters-accessible-standard-1.jpg", "/sweetwaters-accessible-standard-2.jpg", "/sweetwaters-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/sweetwaters-accessible-deluxe-1.jpg", "/sweetwaters-accessible-deluxe-2.jpg", "/sweetwaters-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/sweetwaters-accessible-suite-1.jpg", "/sweetwaters-accessible-suite-2.jpg", "/sweetwaters-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/sweetwaters-accessible-family-1.jpg", "/sweetwaters-accessible-family-2.jpg", "/sweetwaters-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/sweetwaters-accessible-premium-1.jpg", "/sweetwaters-accessible-premium-2.jpg", "/sweetwaters-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033300",
    email: "info@nanyuki-town-hotel.com",
    rooms: createRooms("nanyuki-006", 220, {
      standard: ["/20170510-143336-largejpg.jpg", "/img-20160104-175113-largejpg.jpg", "/falcon-heights-hotel.jpg"],
      deluxe: ["/falcon-deluxe-1.jpg", "/falcon-deluxe-2.jpg", "/falcon-deluxe-bathroom.jpg"],
      suite: ["/falcon-suite-1.jpg", "/falcon-suite-2.jpg", "/falcon-suite-bathroom.jpg"],
      family: ["/falcon-family-1.jpg", "/falcon-family-2.jpg", "/falcon-family-bathroom.jpg"],
      executive: ["/falcon-executive-1.jpg", "/falcon-executive-2.jpg", "/falcon-executive-bathroom.jpg"],
      presidential: ["/falcon-presidential-1.jpg", "/falcon-presidential-2.jpg", "/falcon-presidential-bathroom.jpg"],
      accessibleStandard: ["/falcon-accessible-standard-1.jpg", "/falcon-accessible-standard-2.jpg", "/falcon-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/falcon-accessible-deluxe-1.jpg", "/falcon-accessible-deluxe-2.jpg", "/falcon-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/falcon-accessible-suite-1.jpg", "/falcon-accessible-suite-2.jpg", "/falcon-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/falcon-accessible-family-1.jpg", "/falcon-accessible-family-2.jpg", "/falcon-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/falcon-accessible-premium-1.jpg", "/falcon-accessible-premium-2.jpg", "/falcon-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033400",
    email: "info@equator-lodge.com",
    rooms: createRooms("nanyuki-007", 200, {
      standard: ["/photo5jpg (1).jpg", "/porini-rhino-camp (1).jpg", "/photo0jpg (3).jpg"],
      deluxe: ["/porini-deluxe-1.jpg", "/porini-deluxe-2.jpg", "/porini-deluxe-bathroom.jpg"],
      suite: ["/porini-suite-1.jpg", "/porini-suite-2.jpg", "/porini-suite-bathroom.jpg"],
      family: ["/porini-family-1.jpg", "/porini-family-2.jpg", "/porini-family-bathroom.jpg"],
      executive: ["/porini-executive-1.jpg", "/porini-executive-2.jpg", "/porini-executive-bathroom.jpg"],
      presidential: ["/porini-presidential-1.jpg", "/porini-presidential-2.jpg", "/porini-presidential-bathroom.jpg"],
      accessibleStandard: ["/porini-accessible-standard-1.jpg", "/porini-accessible-standard-2.jpg", "/porini-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/porini-accessible-deluxe-1.jpg", "/porini-accessible-deluxe-2.jpg", "/porini-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/porini-accessible-suite-1.jpg", "/porini-accessible-suite-2.jpg", "/porini-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/porini-accessible-family-1.jpg", "/porini-accessible-family-2.jpg", "/porini-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/porini-accessible-premium-1.jpg", "/porini-accessible-premium-2.jpg", "/porini-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033500",
    email: "info@mountain-view-hotel.com",
    rooms: createRooms("nanyuki-008", 240, {
      standard: ["/photo2jpg (3).jpg", "/photo3jpg (2).jpg", "/double-sinks.jpg"],
      deluxe: ["/sweetwaters-serena-deluxe-1.jpg", "/sweetwaters-serena-deluxe-2.jpg", "/sweetwaters-serena-deluxe-bathroom.jpg"],
      suite: ["/sweetwaters-serena-suite-1.jpg", "/sweetwaters-serena-suite-2.jpg", "/sweetwaters-serena-suite-bathroom.jpg"],
      family: ["/sweetwaters-serena-family-1.jpg", "/sweetwaters-serena-family-2.jpg", "/sweetwaters-serena-family-bathroom.jpg"],
      executive: ["/sweetwaters-serena-executive-1.jpg", "/sweetwaters-serena-executive-2.jpg", "/sweetwaters-serena-executive-bathroom.jpg"],
      presidential: ["/sweetwaters-serena-presidential-1.jpg", "/sweetwaters-serena-presidential-2.jpg", "/sweetwaters-serena-presidential-bathroom.jpg"],
      accessibleStandard: ["/sweetwaters-serena-accessible-standard-1.jpg", "/sweetwaters-serena-accessible-standard-2.jpg", "/sweetwaters-serena-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/sweetwaters-serena-accessible-deluxe-1.jpg", "/sweetwaters-serena-accessible-deluxe-2.jpg", "/sweetwaters-serena-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/sweetwaters-serena-accessible-suite-1.jpg", "/sweetwaters-serena-accessible-suite-2.jpg", "/sweetwaters-serena-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/sweetwaters-serena-accessible-family-1.jpg", "/sweetwaters-serena-accessible-family-2.jpg", "/sweetwaters-serena-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/sweetwaters-serena-accessible-premium-1.jpg", "/sweetwaters-serena-accessible-premium-2.jpg", "/sweetwaters-serena-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033600",
    email: "info@green-hills-hotel.com",
    rooms: createRooms("nanyuki-009", 180, {
      standard: ["/caption (2).jpg", "/704378222.jpg", "/704377941.jpg"],
      deluxe: ["/nickolee-deluxe-1.jpg", "/nickolee-deluxe-2.jpg", "/nickolee-deluxe-bathroom.jpg"],
      suite: ["/nickolee-suite-1.jpg", "/nickolee-suite-2.jpg", "/nickolee-suite-bathroom.jpg"],
      family: ["/nickolee-family-1.jpg", "/nickolee-family-2.jpg", "/nickolee-family-bathroom.jpg"],
      executive: ["/nickolee-executive-1.jpg", "/nickolee-executive-2.jpg", "/nickolee-executive-bathroom.jpg"],
      presidential: ["/nickolee-presidential-1.jpg", "/nickolee-presidential-2.jpg", "/nickolee-presidential-bathroom.jpg"],
      accessibleStandard: ["/nickolee-accessible-standard-1.jpg", "/nickolee-accessible-standard-2.jpg", "/nickolee-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/nickolee-accessible-deluxe-1.jpg", "/nickolee-accessible-deluxe-2.jpg", "/nickolee-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/nickolee-accessible-suite-1.jpg", "/nickolee-accessible-suite-2.jpg", "/nickolee-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/nickolee-accessible-family-1.jpg", "/nickolee-accessible-family-2.jpg", "/nickolee-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/nickolee-accessible-premium-1.jpg", "/nickolee-accessible-premium-2.jpg", "/nickolee-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033700",
    email: "info@kenya-comfort-hotel.com",
    rooms: createRooms("nanyuki-010", 210, {
      standard: ["/ole-samara-guest-suites (3).jpg", "/outdoor-kitchen-fireplace.jpg", "/ole-samara-guest-suites (2).jpg"],
      deluxe: ["/olesamara-deluxe-1.jpg", "/olesamara-deluxe-2.jpg", "/olesamara-deluxe-bathroom.jpg"],
      suite: ["/olesamara-suite-1.jpg", "/olesamara-suite-2.jpg", "/olesamara-suite-bathroom.jpg"],
      family: ["/olesamara-family-1.jpg", "/olesamara-family-2.jpg", "/olesamara-family-bathroom.jpg"],
      executive: ["/olesamara-executive-1.jpg", "/olesamara-executive-2.jpg", "/olesamara-executive-bathroom.jpg"],
      presidential: ["/olesamara-presidential-1.jpg", "/olesamara-presidential-2.jpg", "/olesamara-presidential-bathroom.jpg"],
      accessibleStandard: ["/olesamara-accessible-standard-1.jpg", "/olesamara-accessible-standard-2.jpg", "/olesamara-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/olesamara-accessible-deluxe-1.jpg", "/olesamara-accessible-deluxe-2.jpg", "/olesamara-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/olesamara-accessible-suite-1.jpg", "/olesamara-accessible-suite-2.jpg", "/olesamara-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/olesamara-accessible-family-1.jpg", "/olesamara-accessible-family-2.jpg", "/olesamara-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/olesamara-accessible-premium-1.jpg", "/olesamara-accessible-premium-2.jpg", "/olesamara-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 62 2033800",
    email: "info@alpine-hotel.com",
    rooms: createRooms("nanyuki-011", 250, {
      standard: ["/comfort-gardens-sweetwaters (1).jpg", "/comfort-gardens-sweetwaters (3).jpg", "/269095816.jpg"],
      deluxe: ["/comfort-gardens-deluxe-1.jpg", "/comfort-gardens-deluxe-2.jpg", "/comfort-gardens-deluxe-bathroom.jpg"],
      suite: ["/comfort-gardens-suite-1.jpg", "/comfort-gardens-suite-2.jpg", "/comfort-gardens-suite-bathroom.jpg"],
      family: ["/comfort-gardens-family-1.jpg", "/comfort-gardens-family-2.jpg", "/comfort-gardens-family-bathroom.jpg"],
      executive: ["/comfort-gardens-executive-1.jpg", "/comfort-gardens-executive-2.jpg", "/comfort-gardens-executive-bathroom.jpg"],
      presidential: ["/comfort-gardens-presidential-1.jpg", "/comfort-gardens-presidential-2.jpg", "/comfort-gardens-presidential-bathroom.jpg"],
      accessibleStandard: ["/comfort-gardens-accessible-standard-1.jpg", "/comfort-gardens-accessible-standard-2.jpg", "/comfort-gardens-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/comfort-gardens-accessible-deluxe-1.jpg", "/comfort-gardens-accessible-deluxe-2.jpg", "/comfort-gardens-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/comfort-gardens-accessible-suite-1.jpg", "/comfort-gardens-accessible-suite-2.jpg", "/comfort-gardens-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/comfort-gardens-accessible-family-1.jpg", "/comfort-gardens-accessible-family-2.jpg", "/comfort-gardens-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/comfort-gardens-accessible-premium-1.jpg", "/comfort-gardens-accessible-premium-2.jpg", "/comfort-gardens-accessible-premium-bathroom.jpg"]
    })
  },

  // Maasai Mara Hotels
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
    description:
      "Premier luxury camp in Maasai Mara offering unparalleled safari experiences during the Great Migration.",
    amenities: ["All-Inclusive", "Safari Drives", "Hot Air Balloons", "Fine Dining", "Spa", "Bar", "WiFi", "Guides"],
    address: "Maasai Mara National Reserve",
    phone: "+254 41 2319000",
    email: "reservations@serena-mara.com",
    rooms: createRooms("maasai-mara-001", 450, {
      standard: ["/the-interior-of-a-guest.jpg", "/all-guest-tents-at-rekero.jpg", "/double-vanity-space-in.jpg"],
      deluxe: ["/rekero-deluxe-1.jpg", "/rekero-deluxe-2.jpg", "/rekero-deluxe-bathroom.jpg"],
      suite: ["/rekero-suite-1.jpg", "/rekero-suite-2.jpg", "/rekero-suite-bathroom.jpg"],
      family: ["/rekero-family-1.jpg", "/rekero-family-2.jpg", "/rekero-family-bathroom.jpg"],
      executive: ["/rekero-executive-1.jpg", "/rekero-executive-2.jpg", "/rekero-executive-bathroom.jpg"],
      presidential: ["/rekero-presidential-1.jpg", "/rekero-presidential-2.jpg", "/rekero-presidential-bathroom.jpg"],
      accessibleStandard: ["/rekero-accessible-standard-1.jpg", "/rekero-accessible-standard-2.jpg", "/rekero-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/rekero-accessible-deluxe-1.jpg", "/rekero-accessible-deluxe-2.jpg", "/rekero-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/rekero-accessible-suite-1.jpg", "/rekero-accessible-suite-2.jpg", "/rekero-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/rekero-accessible-family-1.jpg", "/rekero-accessible-family-2.jpg", "/rekero-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/rekero-accessible-premium-1.jpg", "/rekero-accessible-premium-2.jpg", "/rekero-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 41 2319100",
    email: "reservations@mara-serena.com",
    rooms: createRooms("maasai-mara-002", 400, {
      standard: ["/nina-tent (1).jpg", "/nina-tent-bathroom (1).jpg", "/outdoor-shower.jpg"],
      deluxe: ["/hemingways-deluxe-1.jpg", "/hemingways-deluxe-2.jpg", "/hemingways-deluxe-bathroom.jpg"],
      suite: ["/hemingways-suite-1.jpg", "/hemingways-suite-2.jpg", "/hemingways-suite-bathroom.jpg"],
      family: ["/hemingways-family-1.jpg", "/hemingways-family-2.jpg", "/hemingways-family-bathroom.jpg"],
      executive: ["/hemingways-executive-1.jpg", "/hemingways-executive-2.jpg", "/hemingways-executive-bathroom.jpg"],
      presidential: ["/hemingways-presidential-1.jpg", "/hemingways-presidential-2.jpg", "/hemingways-presidential-bathroom.jpg"],
      accessibleStandard: ["/hemingways-accessible-standard-1.jpg", "/hemingways-accessible-standard-2.jpg", "/hemingways-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/hemingways-accessible-deluxe-1.jpg", "/hemingways-accessible-deluxe-2.jpg", "/hemingways-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/hemingways-accessible-suite-1.jpg", "/hemingways-accessible-suite-2.jpg", "/hemingways-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/hemingways-accessible-family-1.jpg", "/hemingways-accessible-family-2.jpg", "/hemingways-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/hemingways-accessible-premium-1.jpg", "/hemingways-accessible-premium-2.jpg", "/hemingways-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 41 2319200",
    email: "info@mara-explorer.com",
    rooms: createRooms("maasai-mara-003", 380, {
      standard: ["/river-front-tent-double.jpg", "/fairmont-mara-safari (1).jpg", "/outdoor-shower (1).jpg"],
      deluxe: ["/fairmont-mara-deluxe-1.jpg", "/fairmont-mara-deluxe-2.jpg", "/fairmont-mara-deluxe-bathroom.jpg"],
      suite: ["/fairmont-mara-suite-1.jpg", "/fairmont-mara-suite-2.jpg", "/fairmont-mara-suite-bathroom.jpg"],
      family: ["/fairmont-mara-family-1.jpg", "/fairmont-mara-family-2.jpg", "/fairmont-mara-family-bathroom.jpg"],
      executive: ["/fairmont-mara-executive-1.jpg", "/fairmont-mara-executive-2.jpg", "/fairmont-mara-executive-bathroom.jpg"],
      presidential: ["/fairmont-mara-presidential-1.jpg", "/fairmont-mara-presidential-2.jpg", "/fairmont-mara-presidential-bathroom.jpg"],
      accessibleStandard: ["/fairmont-mara-accessible-standard-1.jpg", "/fairmont-mara-accessible-standard-2.jpg", "/fairmont-mara-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/fairmont-mara-accessible-deluxe-1.jpg", "/fairmont-mara-accessible-deluxe-2.jpg", "/fairmont-mara-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/fairmont-mara-accessible-suite-1.jpg", "/fairmont-mara-accessible-suite-2.jpg", "/fairmont-mara-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/fairmont-mara-accessible-family-1.jpg", "/fairmont-mara-accessible-family-2.jpg", "/fairmont-mara-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/fairmont-mara-accessible-premium-1.jpg", "/fairmont-mara-accessible-premium-2.jpg", "/fairmont-mara-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 41 2319300",
    email: "info@mara-bush-camp.com",
    rooms: createRooms("maasai-mara-004", 350, {
      standard: ["/photo7jpg (1).jpg", "/photo8jpg.jpg", "/mara-serena-safari-lodge (1).jpg"],
      deluxe: ["/mara-serena-deluxe-1.jpg", "/mara-serena-deluxe-2.jpg", "/mara-serena-deluxe-bathroom.jpg"],
      suite: ["/mara-serena-suite-1.jpg", "/mara-serena-suite-2.jpg", "/mara-serena-suite-bathroom.jpg"],
      family: ["/mara-serena-family-1.jpg", "/mara-serena-family-2.jpg", "/mara-serena-family-bathroom.jpg"],
      executive: ["/mara-serena-executive-1.jpg", "/mara-serena-executive-2.jpg", "/mara-serena-executive-bathroom.jpg"],
      presidential: ["/mara-serena-presidential-1.jpg", "/mara-serena-presidential-2.jpg", "/mara-serena-presidential-bathroom.jpg"],
      accessibleStandard: ["/mara-serena-accessible-standard-1.jpg", "/mara-serena-accessible-standard-2.jpg", "/mara-serena-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/mara-serena-accessible-deluxe-1.jpg", "/mara-serena-accessible-deluxe-2.jpg", "/mara-serena-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/mara-serena-accessible-suite-1.jpg", "/mara-serena-accessible-suite-2.jpg", "/mara-serena-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/mara-serena-accessible-family-1.jpg", "/mara-serena-accessible-family-2.jpg", "/mara-serena-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/mara-serena-accessible-premium-1.jpg", "/mara-serena-accessible-premium-2.jpg", "/mara-serena-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 41 2319400",
    email: "info@mara-intrepids.com",
    rooms: createRooms("maasai-mara-005", 390, {
      standard: ["/our-bed-inside-our-tent.jpg", "/mara-intrepids-luxury (4).jpg", "/mara-intrepids-luxury (1).jpg"],
      deluxe: ["/mara-intrepids-deluxe-1.jpg", "/mara-intrepids-deluxe-2.jpg", "/mara-intrepids-deluxe-bathroom.jpg"],
      suite: ["/mara-intrepids-suite-1.jpg", "/mara-intrepids-suite-2.jpg", "/mara-intrepids-suite-bathroom.jpg"],
      family: ["/mara-intrepids-family-1.jpg", "/mara-intrepids-family-2.jpg", "/mara-intrepids-family-bathroom.jpg"],
      executive: ["/mara-intrepids-executive-1.jpg", "/mara-intrepids-executive-2.jpg", "/mara-intrepids-executive-bathroom.jpg"],
      presidential: ["/mara-intrepids-presidential-1.jpg", "/mara-intrepids-presidential-2.jpg", "/mara-intrepids-presidential-bathroom.jpg"],
      accessibleStandard: ["/mara-intrepids-accessible-standard-1.jpg", "/mara-intrepids-accessible-standard-2.jpg", "/mara-intrepids-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/mara-intrepids-accessible-deluxe-1.jpg", "/mara-intrepids-accessible-deluxe-2.jpg", "/mara-intrepids-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/mara-intrepids-accessible-suite-1.jpg", "/mara-intrepids-accessible-suite-2.jpg", "/mara-intrepids-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/mara-intrepids-accessible-family-1.jpg", "/mara-intrepids-accessible-family-2.jpg", "/mara-intrepids-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/mara-intrepids-accessible-premium-1.jpg", "/mara-intrepids-accessible-premium-2.jpg", "/mara-intrepids-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 41 2319500",
    email: "info@mara-safari-camp.com",
    rooms: createRooms("maasai-mara-006", 320, {
      standard: ["/deluxe-tent.jpg", "/caption (28).jpg", "/caption (27).jpg"],
      deluxe: ["/mara-siria-deluxe-1.jpg", "/mara-siria-deluxe-2.jpg", "/mara-siria-deluxe-bathroom.jpg"],
      suite: ["/mara-siria-suite-1.jpg", "/mara-siria-suite-2.jpg", "/mara-siria-suite-bathroom.jpg"],
      family: ["/mara-siria-family-1.jpg", "/mara-siria-family-2.jpg", "/mara-siria-family-bathroom.jpg"],
      executive: ["/mara-siria-executive-1.jpg", "/mara-siria-executive-2.jpg", "/mara-siria-executive-bathroom.jpg"],
      presidential: ["/mara-siria-presidential-1.jpg", "/mara-siria-presidential-2.jpg", "/mara-siria-presidential-bathroom.jpg"],
      accessibleStandard: ["/mara-siria-accessible-standard-1.jpg", "/mara-siria-accessible-standard-2.jpg", "/mara-siria-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/mara-siria-accessible-deluxe-1.jpg", "/mara-siria-accessible-deluxe-2.jpg", "/mara-siria-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/mara-siria-accessible-suite-1.jpg", "/mara-siria-accessible-suite-2.jpg", "/mara-siria-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/mara-siria-accessible-family-1.jpg", "/mara-siria-accessible-family-2.jpg", "/mara-siria-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/mara-siria-accessible-premium-1.jpg", "/mara-siria-accessible-premium-2.jpg", "/mara-siria-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 41 2319600",
    email: "info@kichwa-tembo.com",
    rooms: createRooms("maasai-mara-007", 410, {
      standard: ["/caption (32).jpg", "/caption (34).jpg", "/caption (31).jpg"],
      deluxe: ["/serenity-deluxe-1.jpg", "/serenity-deluxe-2.jpg", "/serenity-deluxe-bathroom.jpg"],
      suite: ["/serenity-suite-1.jpg", "/serenity-suite-2.jpg", "/serenity-suite-bathroom.jpg"],
      family: ["/serenity-family-1.jpg", "/serenity-family-2.jpg", "/serenity-family-bathroom.jpg"],
      executive: ["/serenity-executive-1.jpg", "/serenity-executive-2.jpg", "/serenity-executive-bathroom.jpg"],
      presidential: ["/serenity-presidential-1.jpg", "/serenity-presidential-2.jpg", "/serenity-presidential-bathroom.jpg"],
      accessibleStandard: ["/serenity-accessible-standard-1.jpg", "/serenity-accessible-standard-2.jpg", "/serenity-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/serenity-accessible-deluxe-1.jpg", "/serenity-accessible-deluxe-2.jpg", "/serenity-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/serenity-accessible-suite-1.jpg", "/serenity-accessible-suite-2.jpg", "/serenity-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/serenity-accessible-family-1.jpg", "/serenity-accessible-family-2.jpg", "/serenity-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/serenity-accessible-premium-1.jpg", "/serenity-accessible-premium-2.jpg", "/serenity-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 41 2319700",
    email: "info@tamarind-mara.com",
    rooms: createRooms("maasai-mara-008", 360, {
      standard: ["/offbeat-mara-camp (1).jpg", "/offbeat-mara-camp (6).jpg", "/private-bathroom.jpg"],
      deluxe: ["/offbeat-deluxe-1.jpg", "/offbeat-deluxe-2.jpg", "/offbeat-deluxe-bathroom.jpg"],
      suite: ["/offbeat-suite-1.jpg", "/offbeat-suite-2.jpg", "/offbeat-suite-bathroom.jpg"],
      family: ["/offbeat-family-1.jpg", "/offbeat-family-2.jpg", "/offbeat-family-bathroom.jpg"],
      executive: ["/offbeat-executive-1.jpg", "/offbeat-executive-2.jpg", "/offbeat-executive-bathroom.jpg"],
      presidential: ["/offbeat-presidential-1.jpg", "/offbeat-presidential-2.jpg", "/offbeat-presidential-bathroom.jpg"],
      accessibleStandard: ["/offbeat-accessible-standard-1.jpg", "/offbeat-accessible-standard-2.jpg", "/offbeat-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/offbeat-accessible-deluxe-1.jpg", "/offbeat-accessible-deluxe-2.jpg", "/offbeat-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/offbeat-accessible-suite-1.jpg", "/offbeat-accessible-suite-2.jpg", "/offbeat-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/offbeat-accessible-family-1.jpg", "/offbeat-accessible-family-2.jpg", "/offbeat-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/offbeat-accessible-premium-1.jpg", "/offbeat-accessible-premium-2.jpg", "/offbeat-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "maasai-mara-009",
    name: "Fig Tree Camp",
    location: "Maasai Mara",
    rating: 4.3,
    price: 300,
    image: "/fig-tree-camp.jpg?height=300&width=400",
    gallery: [
      "/fig-tree-camp-1.jpg?height=400&width=600",
      "/fig-tree-camp-2.jpg?height=400&width=600",
      "/fig-tree-camp-3.jpg?height=400&width=600",
      "/fig-tree-camp-4.jpg?height=400&width=600",
    ],
    description: "Budget-friendly camp with good facilities and authentic safari experience.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Parking", "Photography", "Guides", "Room Service"],
    address: "Maasai Mara",
    phone: "+254 41 2319800",
    email: "info@fig-tree-camp.com",
    rooms: createRooms("maasai-mara-009", 300, {
      standard: ["/fig-tree-standard-1.jpg", "/fig-tree-standard-2.jpg", "/fig-tree-standard-bathroom.jpg"],
      deluxe: ["/fig-tree-deluxe-1.jpg", "/fig-tree-deluxe-2.jpg", "/fig-tree-deluxe-bathroom.jpg"],
      suite: ["/fig-tree-suite-1.jpg", "/fig-tree-suite-2.jpg", "/fig-tree-suite-bathroom.jpg"],
      family: ["/fig-tree-family-1.jpg", "/fig-tree-family-2.jpg", "/fig-tree-family-bathroom.jpg"],
      executive: ["/fig-tree-executive-1.jpg", "/fig-tree-executive-2.jpg", "/fig-tree-executive-bathroom.jpg"],
      presidential: ["/fig-tree-presidential-1.jpg", "/fig-tree-presidential-2.jpg", "/fig-tree-presidential-bathroom.jpg"],
      accessibleStandard: ["/fig-tree-accessible-standard-1.jpg", "/fig-tree-accessible-standard-2.jpg", "/fig-tree-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/fig-tree-accessible-deluxe-1.jpg", "/fig-tree-accessible-deluxe-2.jpg", "/fig-tree-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/fig-tree-accessible-suite-1.jpg", "/fig-tree-accessible-suite-2.jpg", "/fig-tree-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/fig-tree-accessible-family-1.jpg", "/fig-tree-accessible-family-2.jpg", "/fig-tree-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/fig-tree-accessible-premium-1.jpg", "/fig-tree-accessible-premium-2.jpg", "/fig-tree-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "maasai-mara-010",
    name: "Mara Leisure Camp",
    location: "Maasai Mara",
    rating: 4.4,
    price: 340,
    image: "/mara-leisure-camp.jpg?height=300&width=400",
    gallery: [
      "/mara-leisure-1.jpg?height=400&width=600",
      "/mara-leisure-2.jpg?height=400&width=600",
      "/mara-leisure-3.jpg?height=400&width=600",
      "/mara-leisure-4.jpg?height=400&width=600",
    ],
    description: "Comfortable camp with good amenities for quality safari experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Room Service", "Guides", "Parking"],
    address: "Maasai Mara",
    phone: "+254 41 2319900",
    email: "info@mara-leisure.com",
    rooms: createRooms("maasai-mara-010", 340, {
      standard: ["/leisure-standard-1.jpg", "/leisure-standard-2.jpg", "/leisure-standard-bathroom.jpg"],
      deluxe: ["/leisure-deluxe-1.jpg", "/leisure-deluxe-2.jpg", "/leisure-deluxe-bathroom.jpg"],
      suite: ["/leisure-suite-1.jpg", "/leisure-suite-2.jpg", "/leisure-suite-bathroom.jpg"],
      family: ["/leisure-family-1.jpg", "/leisure-family-2.jpg", "/leisure-family-bathroom.jpg"],
      executive: ["/leisure-executive-1.jpg", "/leisure-executive-2.jpg", "/leisure-executive-bathroom.jpg"],
      presidential: ["/leisure-presidential-1.jpg", "/leisure-presidential-2.jpg", "/leisure-presidential-bathroom.jpg"],
      accessibleStandard: ["/leisure-accessible-standard-1.jpg", "/leisure-accessible-standard-2.jpg", "/leisure-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/leisure-accessible-deluxe-1.jpg", "/leisure-accessible-deluxe-2.jpg", "/leisure-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/leisure-accessible-suite-1.jpg", "/leisure-accessible-suite-2.jpg", "/leisure-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/leisure-accessible-family-1.jpg", "/leisure-accessible-family-2.jpg", "/leisure-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/leisure-accessible-premium-1.jpg", "/leisure-accessible-premium-2.jpg", "/leisure-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "maasai-mara-011",
    name: "Mara Wilderness Lodge",
    location: "Maasai Mara",
    rating: 4.2,
    price: 280,
    image: "/mara-wilderness.jpg?height=300&width=400",
    gallery: [
      "/mara-wilderness-1.jpg?height=400&width=600",
      "/mara-wilderness-2.jpg?height=400&width=600",
      "/mara-wilderness-3.jpg?height=400&width=600",
      "/mara-wilderness-4.jpg?height=400&width=600",
    ],
    description: "Lodge offering authentic safari experience with wilderness ambiance.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Room Service", "Guides", "TV"],
    address: "Maasai Mara",
    phone: "+254 41 2320000",
    email: "info@mara-wilderness.com",
    rooms: createRooms("maasai-mara-011", 280, {
      standard: ["/wilderness-standard-1.jpg", "/wilderness-standard-2.jpg", "/wilderness-standard-bathroom.jpg"],
      deluxe: ["/wilderness-deluxe-1.jpg", "/wilderness-deluxe-2.jpg", "/wilderness-deluxe-bathroom.jpg"],
      suite: ["/wilderness-suite-1.jpg", "/wilderness-suite-2.jpg", "/wilderness-suite-bathroom.jpg"],
      family: ["/wilderness-family-1.jpg", "/wilderness-family-2.jpg", "/wilderness-family-bathroom.jpg"],
      executive: ["/wilderness-executive-1.jpg", "/wilderness-executive-2.jpg", "/wilderness-executive-bathroom.jpg"],
      presidential: ["/wilderness-presidential-1.jpg", "/wilderness-presidential-2.jpg", "/wilderness-presidential-bathroom.jpg"],
      accessibleStandard: ["/wilderness-accessible-standard-1.jpg", "/wilderness-accessible-standard-2.jpg", "/wilderness-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/wilderness-accessible-deluxe-1.jpg", "/wilderness-accessible-deluxe-2.jpg", "/wilderness-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/wilderness-accessible-suite-1.jpg", "/wilderness-accessible-suite-2.jpg", "/wilderness-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/wilderness-accessible-family-1.jpg", "/wilderness-accessible-family-2.jpg", "/wilderness-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/wilderness-accessible-premium-1.jpg", "/wilderness-accessible-premium-2.jpg", "/wilderness-accessible-premium-bathroom.jpg"]
    })
  },

  // Amboseli Hotels
  {
    id: "amboseli-001",
    name: "Ol Tukai Lodge Amboseli",
    location: "Amboseli",
    rating: 4.8,
    price: 420,
    image: "/ol-tukai-lodge.jpg?height=300&width=400",
    gallery: [
      "/ol-tukai-1.jpg?height=400&width=600",
      "/ol-tukai-2.jpg?height=400&width=600",
      "/ol-tukai-3.jpg?height=400&width=600",
      "/ol-tukai-4.jpg?height=400&width=600",
    ],
    description: "Luxury lodge with stunning Mount Kilimanjaro views and exceptional wildlife experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Spa", "Guides"],
    address: "Amboseli National Park",
    phone: "+254 27 2409000",
    email: "reservations@amboseli-serena.com",
    rooms: createRooms("amboseli-001", 420, {
      standard: ["/ol-tukai-standard-1.jpg", "/ol-tukai-standard-2.jpg", "/ol-tukai-standard-bathroom.jpg"],
      deluxe: ["/ol-tukai-deluxe-1.jpg", "/ol-tukai-deluxe-2.jpg", "/ol-tukai-deluxe-bathroom.jpg"],
      suite: ["/ol-tukai-suite-1.jpg", "/ol-tukai-suite-2.jpg", "/ol-tukai-suite-bathroom.jpg"],
      family: ["/ol-tukai-family-1.jpg", "/ol-tukai-family-2.jpg", "/ol-tukai-family-bathroom.jpg"],
      executive: ["/ol-tukai-executive-1.jpg", "/ol-tukai-executive-2.jpg", "/ol-tukai-executive-bathroom.jpg"],
      presidential: ["/ol-tukai-presidential-1.jpg", "/ol-tukai-presidential-2.jpg", "/ol-tukai-presidential-bathroom.jpg"],
      accessibleStandard: ["/ol-tukai-accessible-standard-1.jpg", "/ol-tukai-accessible-standard-2.jpg", "/ol-tukai-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/ol-tukai-accessible-deluxe-1.jpg", "/ol-tukai-accessible-deluxe-2.jpg", "/ol-tukai-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/ol-tukai-accessible-suite-1.jpg", "/ol-tukai-accessible-suite-2.jpg", "/ol-tukai-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/ol-tukai-accessible-family-1.jpg", "/ol-tukai-accessible-family-2.jpg", "/ol-tukai-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/ol-tukai-accessible-premium-1.jpg", "/ol-tukai-accessible-premium-2.jpg", "/ol-tukai-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-002",
    name: "Sentrim Amboseli Lodge",
    location: "Amboseli",
    rating: 4.6,
    price: 380,
    image: "/sentrim-amboseli.jpg?height=300&width=400",
    gallery: [
      "/sentrim-amboseli-1.jpg?height=400&width=600",
      "/sentrim-amboseli-2.jpg?height=400&width=600",
      "/sentrim-amboseli-3.jpg?height=400&width=600",
      "/sentrim-amboseli-4.jpg?height=400&width=600",
    ],
    description: "All-inclusive lodge with Kilimanjaro views and excellent safari amenities.",
    amenities: ["All-Inclusive", "Safari Drives", "Restaurant", "Pool", "Bar", "Photography", "WiFi", "Guides"],
    address: "Amboseli",
    phone: "+254 27 2409100",
    email: "reservations@amboseli-sopa.com",
    rooms: createRooms("amboseli-002", 380, {
      standard: ["/sentrim-standard-1.jpg", "/sentrim-standard-2.jpg", "/sentrim-standard-bathroom.jpg"],
      deluxe: ["/sentrim-deluxe-1.jpg", "/sentrim-deluxe-2.jpg", "/sentrim-deluxe-bathroom.jpg"],
      suite: ["/sentrim-suite-1.jpg", "/sentrim-suite-2.jpg", "/sentrim-suite-bathroom.jpg"],
      family: ["/sentrim-family-1.jpg", "/sentrim-family-2.jpg", "/sentrim-family-bathroom.jpg"],
      executive: ["/sentrim-executive-1.jpg", "/sentrim-executive-2.jpg", "/sentrim-executive-bathroom.jpg"],
      presidential: ["/sentrim-presidential-1.jpg", "/sentrim-presidential-2.jpg", "/sentrim-presidential-bathroom.jpg"],
      accessibleStandard: ["/sentrim-accessible-standard-1.jpg", "/sentrim-accessible-standard-2.jpg", "/sentrim-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/sentrim-accessible-deluxe-1.jpg", "/sentrim-accessible-deluxe-2.jpg", "/sentrim-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/sentrim-accessible-suite-1.jpg", "/sentrim-accessible-suite-2.jpg", "/sentrim-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/sentrim-accessible-family-1.jpg", "/sentrim-accessible-family-2.jpg", "/sentrim-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/sentrim-accessible-premium-1.jpg", "/sentrim-accessible-premium-2.jpg", "/sentrim-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-003",
    name: "Amboseli Serena Safari Lodge",
    location: "Amboseli",
    rating: 4.5,
    price: 350,
    image: "/amboseli-serena-lodge.jpg?height=300&width=400",
    gallery: [
      "/amboseli-serena-1.jpg?height=400&width=600",
      "/amboseli-serena-2.jpg?height=400&width=600",
      "/amboseli-serena-3.jpg?height=400&width=600",
      "/amboseli-serena-4.jpg?height=400&width=600",
    ],
    description: "Historic lodge in Amboseli with excellent wildlife viewing and cultural experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Room Service", "Guides", "Parking"],
    address: "Amboseli National Park",
    phone: "+254 27 2409200",
    email: "info@ol-tukai-lodge.com",
    rooms: createRooms("amboseli-003", 350, {
      standard: ["/amboseli-serena-standard-1.jpg", "/amboseli-serena-standard-2.jpg", "/amboseli-serena-standard-bathroom.jpg"],
      deluxe: ["/amboseli-serena-deluxe-1.jpg", "/amboseli-serena-deluxe-2.jpg", "/amboseli-serena-deluxe-bathroom.jpg"],
      suite: ["/amboseli-serena-suite-1.jpg", "/amboseli-serena-suite-2.jpg", "/amboseli-serena-suite-bathroom.jpg"],
      family: ["/amboseli-serena-family-1.jpg", "/amboseli-serena-family-2.jpg", "/amboseli-serena-family-bathroom.jpg"],
      executive: ["/amboseli-serena-executive-1.jpg", "/amboseli-serena-executive-2.jpg", "/amboseli-serena-executive-bathroom.jpg"],
      presidential: ["/amboseli-serena-presidential-1.jpg", "/amboseli-serena-presidential-2.jpg", "/amboseli-serena-presidential-bathroom.jpg"],
      accessibleStandard: ["/amboseli-serena-accessible-standard-1.jpg", "/amboseli-serena-accessible-standard-2.jpg", "/amboseli-serena-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/amboseli-serena-accessible-deluxe-1.jpg", "/amboseli-serena-accessible-deluxe-2.jpg", "/amboseli-serena-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/amboseli-serena-accessible-suite-1.jpg", "/amboseli-serena-accessible-suite-2.jpg", "/amboseli-serena-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/amboseli-serena-accessible-family-1.jpg", "/amboseli-serena-accessible-family-2.jpg", "/amboseli-serena-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/amboseli-serena-accessible-premium-1.jpg", "/amboseli-serena-accessible-premium-2.jpg", "/amboseli-serena-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-004",
    name: "Tulia Amboseli Safari Camp",
    location: "Amboseli",
    rating: 4.4,
    price: 320,
    image: "/tulia-amboseli.jpg?height=300&width=400",
    gallery: [
      "/tulia-amboseli-1.jpg?height=400&width=600",
      "/tulia-amboseli-2.jpg?height=400&width=600",
      "/tulia-amboseli-3.jpg?height=400&width=600",
      "/tulia-amboseli-4.jpg?height=400&width=600",
    ],
    description: "Eco-friendly camp with sustainable practices and authentic safari experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Parking"],
    address: "Amboseli",
    phone: "+254 27 2409300",
    email: "info@amboseli-eco-camp.com",
    rooms: createRooms("amboseli-004", 320, {
      standard: ["/tulia-standard-1.jpg", "/tulia-standard-2.jpg", "/tulia-standard-bathroom.jpg"],
      deluxe: ["/tulia-deluxe-1.jpg", "/tulia-deluxe-2.jpg", "/tulia-deluxe-bathroom.jpg"],
      suite: ["/tulia-suite-1.jpg", "/tulia-suite-2.jpg", "/tulia-suite-bathroom.jpg"],
      family: ["/tulia-family-1.jpg", "/tulia-family-2.jpg", "/tulia-family-bathroom.jpg"],
      executive: ["/tulia-executive-1.jpg", "/tulia-executive-2.jpg", "/tulia-executive-bathroom.jpg"],
      presidential: ["/tulia-presidential-1.jpg", "/tulia-presidential-2.jpg", "/tulia-presidential-bathroom.jpg"],
      accessibleStandard: ["/tulia-accessible-standard-1.jpg", "/tulia-accessible-standard-2.jpg", "/tulia-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/tulia-accessible-deluxe-1.jpg", "/tulia-accessible-deluxe-2.jpg", "/tulia-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/tulia-accessible-suite-1.jpg", "/tulia-accessible-suite-2.jpg", "/tulia-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/tulia-accessible-family-1.jpg", "/tulia-accessible-family-2.jpg", "/tulia-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/tulia-accessible-premium-1.jpg", "/tulia-accessible-premium-2.jpg", "/tulia-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-005",
    name: "Kibo Safari Camp",
    location: "Amboseli",
    rating: 4.3,
    price: 290,
    image: "/kibo-safari-camp.jpg?height=300&width=400",
    gallery: [
      "/kibo-safari-1.jpg?height=400&width=600",
      "/kibo-safari-2.jpg?height=400&width=600",
      "/kibo-safari-3.jpg?height=400&width=600",
      "/kibo-safari-4.jpg?height=400&width=600",
    ],
    description: "Budget-friendly bush camp with good facilities and elephant viewing opportunities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Campfire"],
    address: "Amboseli",
    phone: "+254 27 2409400",
    email: "info@amboseli-bush-camp.com",
    rooms: createRooms("amboseli-005", 290, {
      standard: ["/kibo-standard-1.jpg", "/kibo-standard-2.jpg", "/kibo-standard-bathroom.jpg"],
      deluxe: ["/kibo-deluxe-1.jpg", "/kibo-deluxe-2.jpg", "/kibo-deluxe-bathroom.jpg"],
      suite: ["/kibo-suite-1.jpg", "/kibo-suite-2.jpg", "/kibo-suite-bathroom.jpg"],
      family: ["/kibo-family-1.jpg", "/kibo-family-2.jpg", "/kibo-family-bathroom.jpg"],
      executive: ["/kibo-executive-1.jpg", "/kibo-executive-2.jpg", "/kibo-executive-bathroom.jpg"],
      presidential: ["/kibo-presidential-1.jpg", "/kibo-presidential-2.jpg", "/kibo-presidential-bathroom.jpg"],
      accessibleStandard: ["/kibo-accessible-standard-1.jpg", "/kibo-accessible-standard-2.jpg", "/kibo-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/kibo-accessible-deluxe-1.jpg", "/kibo-accessible-deluxe-2.jpg", "/kibo-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/kibo-accessible-suite-1.jpg", "/kibo-accessible-suite-2.jpg", "/kibo-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/kibo-accessible-family-1.jpg", "/kibo-accessible-family-2.jpg", "/kibo-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/kibo-accessible-premium-1.jpg", "/kibo-accessible-premium-2.jpg", "/kibo-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-006",
    name: "Maasai Simba Camp",
    location: "Amboseli",
    rating: 4.2,
    price: 270,
    image: "/maasai-simba-camp.jpg?height=300&width=400",
    gallery: [
      "/maasai-simba-1.jpg?height=400&width=600",
      "/maasai-simba-2.jpg?height=400&width=600",
      "/maasai-simba-3.jpg?height=400&width=600",
      "/maasai-simba-4.jpg?height=400&width=600",
    ],
    description: "Park-operated lodge offering authentic safari experience and cultural programs.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Parking", "TV"],
    address: "Amboseli National Park",
    phone: "+254 27 2409500",
    email: "info@amboseli-park-lodge.com",
    rooms: createRooms("amboseli-006", 270, {
      standard: ["/maasai-simba-standard-1.jpg", "/maasai-simba-standard-2.jpg", "/maasai-simba-standard-bathroom.jpg"],
      deluxe: ["/maasai-simba-deluxe-1.jpg", "/maasai-simba-deluxe-2.jpg", "/maasai-simba-deluxe-bathroom.jpg"],
      suite: ["/maasai-simba-suite-1.jpg", "/maasai-simba-suite-2.jpg", "/maasai-simba-suite-bathroom.jpg"],
      family: ["/maasai-simba-family-1.jpg", "/maasai-simba-family-2.jpg", "/maasai-simba-family-bathroom.jpg"],
      executive: ["/maasai-simba-executive-1.jpg", "/maasai-simba-executive-2.jpg", "/maasai-simba-executive-bathroom.jpg"],
      presidential: ["/maasai-simba-presidential-1.jpg", "/maasai-simba-presidential-2.jpg", "/maasai-simba-presidential-bathroom.jpg"],
      accessibleStandard: ["/maasai-simba-accessible-standard-1.jpg", "/maasai-simba-accessible-standard-2.jpg", "/maasai-simba-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/maasai-simba-accessible-deluxe-1.jpg", "/maasai-simba-accessible-deluxe-2.jpg", "/maasai-simba-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/maasai-simba-accessible-suite-1.jpg", "/maasai-simba-accessible-suite-2.jpg", "/maasai-simba-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/maasai-simba-accessible-family-1.jpg", "/maasai-simba-accessible-family-2.jpg", "/maasai-simba-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/maasai-simba-accessible-premium-1.jpg", "/maasai-simba-accessible-premium-2.jpg", "/maasai-simba-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-007",
    name: "Observation Hill Camp",
    location: "Amboseli",
    rating: 4.4,
    price: 310,
    image: "/observation-hill-camp.jpg?height=300&width=400",
    gallery: [
      "/observation-hill-1.jpg?height=400&width=600",
      "/observation-hill-2.jpg?height=400&width=600",
      "/observation-hill-3.jpg?height=400&width=600",
      "/observation-hill-4.jpg?height=400&width=600",
    ],
    description: "Lodge specializing in Kilimanjaro views with excellent photography opportunities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Views", "Photography", "WiFi", "Guides", "Room Service"],
    address: "Amboseli",
    phone: "+254 27 2409600",
    email: "info@kilimanjaro-view.com",
    rooms: createRooms("amboseli-007", 310, {
      standard: ["/observation-hill-standard-1.jpg", "/observation-hill-standard-2.jpg", "/observation-hill-standard-bathroom.jpg"],
      deluxe: ["/observation-hill-deluxe-1.jpg", "/observation-hill-deluxe-2.jpg", "/observation-hill-deluxe-bathroom.jpg"],
      suite: ["/observation-hill-suite-1.jpg", "/observation-hill-suite-2.jpg", "/observation-hill-suite-bathroom.jpg"],
      family: ["/observation-hill-family-1.jpg", "/observation-hill-family-2.jpg", "/observation-hill-family-bathroom.jpg"],
      executive: ["/observation-hill-executive-1.jpg", "/observation-hill-executive-2.jpg", "/observation-hill-executive-bathroom.jpg"],
      presidential: ["/observation-hill-presidential-1.jpg", "/observation-hill-presidential-2.jpg", "/observation-hill-presidential-bathroom.jpg"],
      accessibleStandard: ["/observation-hill-accessible-standard-1.jpg", "/observation-hill-accessible-standard-2.jpg", "/observation-hill-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/observation-hill-accessible-deluxe-1.jpg", "/observation-hill-accessible-deluxe-2.jpg", "/observation-hill-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/observation-hill-accessible-suite-1.jpg", "/observation-hill-accessible-suite-2.jpg", "/observation-hill-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/observation-hill-accessible-family-1.jpg", "/observation-hill-accessible-family-2.jpg", "/observation-hill-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/observation-hill-accessible-premium-1.jpg", "/observation-hill-accessible-premium-2.jpg", "/observation-hill-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-008",
    name: "Zebra Plain Safari Camp",
    location: "Amboseli",
    rating: 4.1,
    price: 250,
    image: "/zebra-plain-camp.jpg?height=300&width=400",
    gallery: [
      "/zebra-plain-1.jpg?height=400&width=600",
      "/zebra-plain-2.jpg?height=400&width=600",
      "/zebra-plain-3.jpg?height=400&width=600",
      "/zebra-plain-4.jpg?height=400&width=600",
    ],
    description: "Comfortable safari camp with authentic wilderness experience.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Guides", "Parking", "Photography", "Room Service"],
    address: "Amboseli",
    phone: "+254 27 2409700",
    email: "info@amboseli-safari-camp.com",
    rooms: createRooms("amboseli-008", 250, {
      standard: ["/zebra-plain-standard-1.jpg", "/zebra-plain-standard-2.jpg", "/zebra-plain-standard-bathroom.jpg"],
      deluxe: ["/zebra-plain-deluxe-1.jpg", "/zebra-plain-deluxe-2.jpg", "/zebra-plain-deluxe-bathroom.jpg"],
      suite: ["/zebra-plain-suite-1.jpg", "/zebra-plain-suite-2.jpg", "/zebra-plain-suite-bathroom.jpg"],
      family: ["/zebra-plain-family-1.jpg", "/zebra-plain-family-2.jpg", "/zebra-plain-family-bathroom.jpg"],
      executive: ["/zebra-plain-executive-1.jpg", "/zebra-plain-executive-2.jpg", "/zebra-plain-executive-bathroom.jpg"],
      presidential: ["/zebra-plain-presidential-1.jpg", "/zebra-plain-presidential-2.jpg", "/zebra-plain-presidential-bathroom.jpg"],
      accessibleStandard: ["/zebra-plain-accessible-standard-1.jpg", "/zebra-plain-accessible-standard-2.jpg", "/zebra-plain-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/zebra-plain-accessible-deluxe-1.jpg", "/zebra-plain-accessible-deluxe-2.jpg", "/zebra-plain-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/zebra-plain-accessible-suite-1.jpg", "/zebra-plain-accessible-suite-2.jpg", "/zebra-plain-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/zebra-plain-accessible-family-1.jpg", "/zebra-plain-accessible-family-2.jpg", "/zebra-plain-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/zebra-plain-accessible-premium-1.jpg", "/zebra-plain-accessible-premium-2.jpg", "/zebra-plain-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-009",
    name: "WE4Kenya Guest House",
    location: "Amboseli",
    rating: 4.3,
    price: 300,
    image: "/we4kenya-guest-house.jpg?height=300&width=400",
    gallery: [
      "/we4kenya-1.jpg?height=400&width=600",
      "/we4kenya-2.jpg?height=400&width=600",
      "/we4kenya-3.jpg?height=400&width=600",
      "/we4kenya-4.jpg?height=400&width=600",
    ],
    description: "Wilderness camp offering authentic experiences and excellent guides.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Campfire"],
    address: "Amboseli",
    phone: "+254 27 2409800",
    email: "info@amboseli-wilderness.com",
    rooms: createRooms("amboseli-009", 300, {
      standard: ["/we4kenya-standard-1.jpg", "/we4kenya-standard-2.jpg", "/we4kenya-standard-bathroom.jpg"],
      deluxe: ["/we4kenya-deluxe-1.jpg", "/we4kenya-deluxe-2.jpg", "/we4kenya-deluxe-bathroom.jpg"],
      suite: ["/we4kenya-suite-1.jpg", "/we4kenya-suite-2.jpg", "/we4kenya-suite-bathroom.jpg"],
      family: ["/we4kenya-family-1.jpg", "/we4kenya-family-2.jpg", "/we4kenya-family-bathroom.jpg"],
      executive: ["/we4kenya-executive-1.jpg", "/we4kenya-executive-2.jpg", "/we4kenya-executive-bathroom.jpg"],
      presidential: ["/we4kenya-presidential-1.jpg", "/we4kenya-presidential-2.jpg", "/we4kenya-presidential-bathroom.jpg"],
      accessibleStandard: ["/we4kenya-accessible-standard-1.jpg", "/we4kenya-accessible-standard-2.jpg", "/we4kenya-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/we4kenya-accessible-deluxe-1.jpg", "/we4kenya-accessible-deluxe-2.jpg", "/we4kenya-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/we4kenya-accessible-suite-1.jpg", "/we4kenya-accessible-suite-2.jpg", "/we4kenya-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/we4kenya-accessible-family-1.jpg", "/we4kenya-accessible-family-2.jpg", "/we4kenya-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/we4kenya-accessible-premium-1.jpg", "/we4kenya-accessible-premium-2.jpg", "/we4kenya-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-010",
    name: "Elephant Wallow Camp",
    location: "Amboseli",
    rating: 4.2,
    price: 280,
    image: "/elephant-wallow-camp.jpg?height=300&width=400",
    gallery: [
      "/elephant-wallow-1.jpg?height=400&width=600",
      "/elephant-wallow-2.jpg?height=400&width=600",
      "/elephant-wallow-3.jpg?height=400&width=600",
      "/elephant-wallow-4.jpg?height=400&width=600",
    ],
    description: "Camp specializing in elephant viewing with educational programs.",
    amenities: [
      "Safari Drives",
      "Restaurant",
      "Bar",
      "Education Programs",
      "Photography",
      "WiFi",
      "Guides",
      "Room Service",
    ],
    address: "Amboseli",
    phone: "+254 27 2409900",
    email: "info@elephant-wallow-camp.com",
    rooms: createRooms("amboseli-010", 280, {
      standard: ["/elephant-wallow-standard-1.jpg", "/elephant-wallow-standard-2.jpg", "/elephant-wallow-standard-bathroom.jpg"],
      deluxe: ["/elephant-wallow-deluxe-1.jpg", "/elephant-wallow-deluxe-2.jpg", "/elephant-wallow-deluxe-bathroom.jpg"],
      suite: ["/elephant-wallow-suite-1.jpg", "/elephant-wallow-suite-2.jpg", "/elephant-wallow-suite-bathroom.jpg"],
      family: ["/elephant-wallow-family-1.jpg", "/elephant-wallow-family-2.jpg", "/elephant-wallow-family-bathroom.jpg"],
      executive: ["/elephant-wallow-executive-1.jpg", "/elephant-wallow-executive-2.jpg", "/elephant-wallow-executive-bathroom.jpg"],
      presidential: ["/elephant-wallow-presidential-1.jpg", "/elephant-wallow-presidential-2.jpg", "/elephant-wallow-presidential-bathroom.jpg"],
      accessibleStandard: ["/elephant-wallow-accessible-standard-1.jpg", "/elephant-wallow-accessible-standard-2.jpg", "/elephant-wallow-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/elephant-wallow-accessible-deluxe-1.jpg", "/elephant-wallow-accessible-deluxe-2.jpg", "/elephant-wallow-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/elephant-wallow-accessible-suite-1.jpg", "/elephant-wallow-accessible-suite-2.jpg", "/elephant-wallow-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/elephant-wallow-accessible-family-1.jpg", "/elephant-wallow-accessible-family-2.jpg", "/elephant-wallow-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/elephant-wallow-accessible-premium-1.jpg", "/elephant-wallow-accessible-premium-2.jpg", "/elephant-wallow-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "amboseli-011",
    name: "Amboseli Comfort Lodge",
    location: "Amboseli",
    rating: 4.0,
    price: 240,
    image: "/amboseli-comfort-lodge.jpg?height=300&width=400",
    gallery: [
      "/amboseli-comfort-1.jpg?height=400&width=600",
      "/amboseli-comfort-2.jpg?height=400&width=600",
      "/amboseli-comfort-3.jpg?height=400&width=600",
      "/amboseli-comfort-4.jpg?height=400&width=600",
    ],
    description: "Comfortable lodge offering good value and quality service.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Room Service", "Guides", "Parking", "TV"],
    address: "Amboseli",
    phone: "+254 27 2410000",
    email: "info@amboseli-comfort.com",
    rooms: createRooms("amboseli-011", 240, {
      standard: ["/amboseli-comfort-standard-1.jpg", "/amboseli-comfort-standard-2.jpg", "/amboseli-comfort-standard-bathroom.jpg"],
      deluxe: ["/amboseli-comfort-deluxe-1.jpg", "/amboseli-comfort-deluxe-2.jpg", "/amboseli-comfort-deluxe-bathroom.jpg"],
      suite: ["/amboseli-comfort-suite-1.jpg", "/amboseli-comfort-suite-2.jpg", "/amboseli-comfort-suite-bathroom.jpg"],
      family: ["/amboseli-comfort-family-1.jpg", "/amboseli-comfort-family-2.jpg", "/amboseli-comfort-family-bathroom.jpg"],
      executive: ["/amboseli-comfort-executive-1.jpg", "/amboseli-comfort-executive-2.jpg", "/amboseli-comfort-executive-bathroom.jpg"],
      presidential: ["/amboseli-comfort-presidential-1.jpg", "/amboseli-comfort-presidential-2.jpg", "/amboseli-comfort-presidential-bathroom.jpg"],
      accessibleStandard: ["/amboseli-comfort-accessible-standard-1.jpg", "/amboseli-comfort-accessible-standard-2.jpg", "/amboseli-comfort-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/amboseli-comfort-accessible-deluxe-1.jpg", "/amboseli-comfort-accessible-deluxe-2.jpg", "/amboseli-comfort-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/amboseli-comfort-accessible-suite-1.jpg", "/amboseli-comfort-accessible-suite-2.jpg", "/amboseli-comfort-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/amboseli-comfort-accessible-family-1.jpg", "/amboseli-comfort-accessible-family-2.jpg", "/amboseli-comfort-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/amboseli-comfort-accessible-premium-1.jpg", "/amboseli-comfort-accessible-premium-2.jpg", "/amboseli-comfort-accessible-premium-bathroom.jpg"]
    })
  },

  // Tsavo East Hotels
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
    phone: "+254 40 2410000",
    email: "reservations@tsavo-east-lodge.com",
    rooms: createRooms("tsavo-east-001", 380, {
      standard: ["/standard-tent.jpg", "/photo1jpg (5).jpg", "/satao-luxury-tented-camp.jpg"],
      deluxe: ["/satao-deluxe-1.jpg", "/satao-deluxe-2.jpg", "/satao-deluxe-bathroom.jpg"],
      suite: ["/satao-suite-1.jpg", "/satao-suite-2.jpg", "/satao-suite-bathroom.jpg"],
      family: ["/satao-family-1.jpg", "/satao-family-2.jpg", "/satao-family-bathroom.jpg"],
      executive: ["/satao-executive-1.jpg", "/satao-executive-2.jpg", "/satao-executive-bathroom.jpg"],
      presidential: ["/satao-presidential-1.jpg", "/satao-presidential-2.jpg", "/satao-presidential-bathroom.jpg"],
      accessibleStandard: ["/satao-accessible-standard-1.jpg", "/satao-accessible-standard-2.jpg", "/satao-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/satao-accessible-deluxe-1.jpg", "/satao-accessible-deluxe-2.jpg", "/satao-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/satao-accessible-suite-1.jpg", "/satao-accessible-suite-2.jpg", "/satao-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/satao-accessible-family-1.jpg", "/satao-accessible-family-2.jpg", "/satao-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/satao-accessible-premium-1.jpg", "/satao-accessible-premium-2.jpg", "/satao-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 40 2410100",
    email: "info@voi-safari-lodge.com",
    rooms: createRooms("tsavo-east-002", 340, {
      standard: ["/voi-wildlife-lodge.jpg", "/acacia-suites.jpg", "/bano-muy-simple-pero.jpg"],
      deluxe: ["/voi-wildlife-deluxe-1.jpg", "/voi-wildlife-deluxe-2.jpg", "/voi-wildlife-deluxe-bathroom.jpg"],
      suite: ["/voi-wildlife-suite-1.jpg", "/voi-wildlife-suite-2.jpg", "/voi-wildlife-suite-bathroom.jpg"],
      family: ["/voi-wildlife-family-1.jpg", "/voi-wildlife-family-2.jpg", "/voi-wildlife-family-bathroom.jpg"],
      executive: ["/voi-wildlife-executive-1.jpg", "/voi-wildlife-executive-2.jpg", "/voi-wildlife-executive-bathroom.jpg"],
      presidential: ["/voi-wildlife-presidential-1.jpg", "/voi-wildlife-presidential-2.jpg", "/voi-wildlife-presidential-bathroom.jpg"],
      accessibleStandard: ["/voi-wildlife-accessible-standard-1.jpg", "/voi-wildlife-accessible-standard-2.jpg", "/voi-wildlife-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/voi-wildlife-accessible-deluxe-1.jpg", "/voi-wildlife-accessible-deluxe-2.jpg", "/voi-wildlife-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/voi-wildlife-accessible-suite-1.jpg", "/voi-wildlife-accessible-suite-2.jpg", "/voi-wildlife-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/voi-wildlife-accessible-family-1.jpg", "/voi-wildlife-accessible-family-2.jpg", "/voi-wildlife-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/voi-wildlife-accessible-premium-1.jpg", "/voi-wildlife-accessible-premium-2.jpg", "/voi-wildlife-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 40 2410200",
    email: "info@tsavo-east-comfort.com",
    rooms: createRooms("tsavo-east-003", 300, {
      standard: ["/bush-house.jpg", "/bush-house-balcony.jpg", "/red-elephant-safari-lodge-tsavo-east-national-park-have-en-suite-facilities-of-the-bathroom-with-hot-showers.gif"],
      deluxe: ["/red-elephant-deluxe-1.jpg", "/red-elephant-deluxe-2.jpg", "/red-elephant-deluxe-bathroom.jpg"],
      suite: ["/red-elephant-suite-1.jpg", "/red-elephant-suite-2.jpg", "/red-elephant-suite-bathroom.jpg"],
      family: ["/red-elephant-family-1.jpg", "/red-elephant-family-2.jpg", "/red-elephant-family-bathroom.jpg"],
      executive: ["/red-elephant-executive-1.jpg", "/red-elephant-executive-2.jpg", "/red-elephant-executive-bathroom.jpg"],
      presidential: ["/red-elephant-presidential-1.jpg", "/red-elephant-presidential-2.jpg", "/red-elephant-presidential-bathroom.jpg"],
      accessibleStandard: ["/red-elephant-accessible-standard-1.jpg", "/red-elephant-accessible-standard-2.jpg", "/red-elephant-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/red-elephant-accessible-deluxe-1.jpg", "/red-elephant-accessible-deluxe-2.jpg", "/red-elephant-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/red-elephant-accessible-suite-1.jpg", "/red-elephant-accessible-suite-2.jpg", "/red-elephant-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/red-elephant-accessible-family-1.jpg", "/red-elephant-accessible-family-2.jpg", "/red-elephant-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/red-elephant-accessible-premium-1.jpg", "/red-elephant-accessible-premium-2.jpg", "/red-elephant-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 40 2410300",
    email: "info@galana-river-lodge.com",
    rooms: createRooms("tsavo-east-004", 280, {
      standard: ["/sentrim-tsavo-east (2).jpg", "/dsc-0517-largejpg.jpg", "/sentrim-tsavo-east.jpg"],
      deluxe: ["/sentrim-deluxe-1.jpg", "/sentrim-deluxe-2.jpg", "/sentrim-deluxe-bathroom.jpg"],
      suite: ["/sentrim-suite-1.jpg", "/sentrim-suite-2.jpg", "/sentrim-suite-bathroom.jpg"],
      family: ["/sentrim-family-1.jpg", "/sentrim-family-2.jpg", "/sentrim-family-bathroom.jpg"],
      executive: ["/sentrim-executive-1.jpg", "/sentrim-executive-2.jpg", "/sentrim-executive-bathroom.jpg"],
      presidential: ["/sentrim-presidential-1.jpg", "/sentrim-presidential-2.jpg", "/sentrim-presidential-bathroom.jpg"],
      accessibleStandard: ["/sentrim-accessible-standard-1.jpg", "/sentrim-accessible-standard-2.jpg", "/sentrim-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/sentrim-accessible-deluxe-1.jpg", "/sentrim-accessible-deluxe-2.jpg", "/sentrim-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/sentrim-accessible-suite-1.jpg", "/sentrim-accessible-suite-2.jpg", "/sentrim-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/sentrim-accessible-family-1.jpg", "/sentrim-accessible-family-2.jpg", "/sentrim-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/sentrim-accessible-premium-1.jpg", "/sentrim-accessible-premium-2.jpg", "/sentrim-accessible-premium-bathroom.jpg"]
    })
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
      "/ithumba-camp (2).jpg?height=400&width=600",
    ],
    description: "Camp near Mudanda Rock with spectacular geological formations.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "Parking"],
    address: "Tsavo East",
    phone: "+254 40 2410400",
    email: "info@mudanda-rock-camp.com",
    rooms: createRooms("tsavo-east-005", 260, {
      standard: ["/ithumba-camp.jpg", "/ithumba-camp (4).jpg", "/ithumba-camp (1).jpg"],
      deluxe: ["/ithumba-deluxe-1.jpg", "/ithumba-deluxe-2.jpg", "/ithumba-deluxe-bathroom.jpg"],
      suite: ["/ithumba-suite-1.jpg", "/ithumba-suite-2.jpg", "/ithumba-suite-bathroom.jpg"],
      family: ["/ithumba-family-1.jpg", "/ithumba-family-2.jpg", "/ithumba-family-bathroom.jpg"],
      executive: ["/ithumba-executive-1.jpg", "/ithumba-executive-2.jpg", "/ithumba-executive-bathroom.jpg"],
      presidential: ["/ithumba-presidential-1.jpg", "/ithumba-presidential-2.jpg", "/ithumba-presidential-bathroom.jpg"],
      accessibleStandard: ["/ithumba-accessible-standard-1.jpg", "/ithumba-accessible-standard-2.jpg", "/ithumba-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/ithumba-accessible-deluxe-1.jpg", "/ithumba-accessible-deluxe-2.jpg", "/ithumba-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/ithumba-accessible-suite-1.jpg", "/ithumba-accessible-suite-2.jpg", "/ithumba-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/ithumba-accessible-family-1.jpg", "/ithumba-accessible-family-2.jpg", "/ithumba-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/ithumba-accessible-premium-1.jpg", "/ithumba-accessible-premium-2.jpg", "/ithumba-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 40 2410500",
    email: "info@yatta-plateau-lodge.com",
    rooms: createRooms("tsavo-east-006", 290, {
      standard: ["/voi-safari-lodge (3).jpg", "/voi-safari-lodge (5).jpg", "/voi-safari-lodge (6).jpg"],
      deluxe: ["/voi-safari-deluxe-1.jpg", "/voi-safari-deluxe-2.jpg", "/voi-safari-deluxe-bathroom.jpg"],
      suite: ["/voi-safari-suite-1.jpg", "/voi-safari-suite-2.jpg", "/voi-safari-suite-bathroom.jpg"],
      family: ["/voi-safari-family-1.jpg", "/voi-safari-family-2.jpg", "/voi-safari-family-bathroom.jpg"],
      executive: ["/voi-safari-executive-1.jpg", "/voi-safari-executive-2.jpg", "/voi-safari-executive-bathroom.jpg"],
      presidential: ["/voi-safari-presidential-1.jpg", "/voi-safari-presidential-2.jpg", "/voi-safari-presidential-bathroom.jpg"],
      accessibleStandard: ["/voi-safari-accessible-standard-1.jpg", "/voi-safari-accessible-standard-2.jpg", "/voi-safari-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/voi-safari-accessible-deluxe-1.jpg", "/voi-safari-accessible-deluxe-2.jpg", "/voi-safari-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/voi-safari-accessible-suite-1.jpg", "/voi-safari-accessible-suite-2.jpg", "/voi-safari-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/voi-safari-accessible-family-1.jpg", "/voi-safari-accessible-family-2.jpg", "/voi-safari-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/voi-safari-accessible-premium-1.jpg", "/voi-safari-accessible-premium-2.jpg", "/voi-safari-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 40 2410600",
    email: "info@tsavo-east-safari-camp.com",
    rooms: createRooms("tsavo-east-007", 240, {
      standard: ["/dscn0340-largejpg.jpg", "/elegant-dressing-storage.jpg", "/modern-ensuite-bathroom.jpg"],
      deluxe: ["/doa-doa-deluxe-1.jpg", "/doa-doa-deluxe-2.jpg", "/doa-doa-deluxe-bathroom.jpg"],
      suite: ["/doa-doa-suite-1.jpg", "/doa-doa-suite-2.jpg", "/doa-doa-suite-bathroom.jpg"],
      family: ["/doa-doa-family-1.jpg", "/doa-doa-family-2.jpg", "/doa-doa-family-bathroom.jpg"],
      executive: ["/doa-doa-executive-1.jpg", "/doa-doa-executive-2.jpg", "/doa-doa-executive-bathroom.jpg"],
      presidential: ["/doa-doa-presidential-1.jpg", "/doa-doa-presidential-2.jpg", "/doa-doa-presidential-bathroom.jpg"],
      accessibleStandard: ["/doa-doa-accessible-standard-1.jpg", "/doa-doa-accessible-standard-2.jpg", "/doa-doa-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/doa-doa-accessible-deluxe-1.jpg", "/doa-doa-accessible-deluxe-2.jpg", "/doa-doa-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/doa-doa-accessible-suite-1.jpg", "/doa-doa-accessible-suite-2.jpg", "/doa-doa-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/doa-doa-accessible-family-1.jpg", "/doa-doa-accessible-family-2.jpg", "/doa-doa-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/doa-doa-accessible-premium-1.jpg", "/doa-doa-accessible-premium-2.jpg", "/doa-doa-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 40 2410700",
    email: "info@tsavo-east-wilderness.com",
    rooms: createRooms("tsavo-east-008", 270, {
      standard: ["/epiya-chapeyu (5).jpg", "/epiya-chapeyu (6).jpg", "/epiya-chapeyu (4).jpg"],
      deluxe: ["/epiya-deluxe-1.jpg", "/epiya-deluxe-2.jpg", "/epiya-deluxe-bathroom.jpg"],
      suite: ["/epiya-suite-1.jpg", "/epiya-suite-2.jpg", "/epiya-suite-bathroom.jpg"],
      family: ["/epiya-family-1.jpg", "/epiya-family-2.jpg", "/epiya-family-bathroom.jpg"],
      executive: ["/epiya-executive-1.jpg", "/epiya-executive-2.jpg", "/epiya-executive-bathroom.jpg"],
      presidential: ["/epiya-presidential-1.jpg", "/epiya-presidential-2.jpg", "/epiya-presidential-bathroom.jpg"],
      accessibleStandard: ["/epiya-accessible-standard-1.jpg", "/epiya-accessible-standard-2.jpg", "/epiya-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/epiya-accessible-deluxe-1.jpg", "/epiya-accessible-deluxe-2.jpg", "/epiya-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/epiya-accessible-suite-1.jpg", "/epiya-accessible-suite-2.jpg", "/epiya-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/epiya-accessible-family-1.jpg", "/epiya-accessible-family-2.jpg", "/epiya-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/epiya-accessible-premium-1.jpg", "/epiya-accessible-premium-2.jpg", "/epiya-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-east-009",
    name: "Elephant Camp Tsavo East",
    location: "Tsavo East",
    rating: 4.3,
    price: 285,
    image: "/elephant-camp-east.jpg?height=300&width=400",
    gallery: [
      "/elephant-camp-east-1.jpg?height=400&width=600",
      "/elephant-camp-east-2.jpg?height=400&width=600",
      "/elephant-camp-east-3.jpg?height=400&width=600",
      "/elephant-camp-east-4.jpg?height=400&width=600",
    ],
    description: "Camp specializing in elephant viewing with educational programs.",
    amenities: [
      "Safari Drives",
      "Restaurant",
      "Bar",
      "Education Programs",
      "Photography",
      "WiFi",
      "Guides",
      "Room Service",
    ],
    address: "Tsavo East",
    phone: "+254 40 2410800",
    email: "info@elephant-camp-east.com",
    rooms: createRooms("tsavo-east-009", 285, {
      standard: ["/elephant-camp-standard-1.jpg", "/elephant-camp-standard-2.jpg", "/elephant-camp-standard-bathroom.jpg"],
      deluxe: ["/elephant-camp-deluxe-1.jpg", "/elephant-camp-deluxe-2.jpg", "/elephant-camp-deluxe-bathroom.jpg"],
      suite: ["/elephant-camp-suite-1.jpg", "/elephant-camp-suite-2.jpg", "/elephant-camp-suite-bathroom.jpg"],
      family: ["/elephant-camp-family-1.jpg", "/elephant-camp-family-2.jpg", "/elephant-camp-family-bathroom.jpg"],
      executive: ["/elephant-camp-executive-1.jpg", "/elephant-camp-executive-2.jpg", "/elephant-camp-executive-bathroom.jpg"],
      presidential: ["/elephant-camp-presidential-1.jpg", "/elephant-camp-presidential-2.jpg", "/elephant-camp-presidential-bathroom.jpg"],
      accessibleStandard: ["/elephant-camp-accessible-standard-1.jpg", "/elephant-camp-accessible-standard-2.jpg", "/elephant-camp-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/elephant-camp-accessible-deluxe-1.jpg", "/elephant-camp-accessible-deluxe-2.jpg", "/elephant-camp-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/elephant-camp-accessible-suite-1.jpg", "/elephant-camp-accessible-suite-2.jpg", "/elephant-camp-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/elephant-camp-accessible-family-1.jpg", "/elephant-camp-accessible-family-2.jpg", "/elephant-camp-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/elephant-camp-accessible-premium-1.jpg", "/elephant-camp-accessible-premium-2.jpg", "/elephant-camp-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-east-010",
    name: "Tsavo Red Earth Lodge",
    location: "Tsavo East",
    rating: 4.0,
    price: 250,
    image: "/tsavo-red-earth.jpg?height=300&width=400",
    gallery: [
      "/tsavo-red-earth-1.jpg?height=400&width=600",
      "/tsavo-red-earth-2.jpg?height=400&width=600",
      "/tsavo-red-earth-3.jpg?height=400&width=600",
      "/tsavo-red-earth-4.jpg?height=400&width=600",
    ],
    description: "Budget lodge with authentic red soil landscape experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Photography", "Guides", "Parking", "TV"],
    address: "Tsavo East",
    phone: "+254 40 2410900",
    email: "info@tsavo-red-earth.com",
    rooms: createRooms("tsavo-east-010", 250, {
      standard: ["/red-earth-standard-1.jpg", "/red-earth-standard-2.jpg", "/red-earth-standard-bathroom.jpg"],
      deluxe: ["/red-earth-deluxe-1.jpg", "/red-earth-deluxe-2.jpg", "/red-earth-deluxe-bathroom.jpg"],
      suite: ["/red-earth-suite-1.jpg", "/red-earth-suite-2.jpg", "/red-earth-suite-bathroom.jpg"],
      family: ["/red-earth-family-1.jpg", "/red-earth-family-2.jpg", "/red-earth-family-bathroom.jpg"],
      executive: ["/red-earth-executive-1.jpg", "/red-earth-executive-2.jpg", "/red-earth-executive-bathroom.jpg"],
      presidential: ["/red-earth-presidential-1.jpg", "/red-earth-presidential-2.jpg", "/red-earth-presidential-bathroom.jpg"],
      accessibleStandard: ["/red-earth-accessible-standard-1.jpg", "/red-earth-accessible-standard-2.jpg", "/red-earth-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/red-earth-accessible-deluxe-1.jpg", "/red-earth-accessible-deluxe-2.jpg", "/red-earth-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/red-earth-accessible-suite-1.jpg", "/red-earth-accessible-suite-2.jpg", "/red-earth-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/red-earth-accessible-family-1.jpg", "/red-earth-accessible-family-2.jpg", "/red-earth-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/red-earth-accessible-premium-1.jpg", "/red-earth-accessible-premium-2.jpg", "/red-earth-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-east-011",
    name: "Tsavo East Gate Lodge",
    location: "Tsavo East",
    rating: 4.2,
    price: 265,
    image: "/tsavo-east-gate.jpg?height=300&width=400",
    gallery: [
      "/tsavo-east-gate-1.jpg?height=400&width=600",
      "/tsavo-east-gate-2.jpg?height=400&width=600",
      "/tsavo-east-gate-3.jpg?height=400&width=600",
      "/tsavo-east-gate-4.jpg?height=400&width=600",
    ],
    description: "Convenient lodge near park gate with good facilities.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Photography", "Guides", "Room Service", "Parking"],
    address: "Tsavo East",
    phone: "+254 40 2411000",
    email: "info@tsavo-east-gate-lodge.com",
    rooms: createRooms("tsavo-east-011", 265, {
      standard: ["/east-gate-standard-1.jpg", "/east-gate-standard-2.jpg", "/east-gate-standard-bathroom.jpg"],
      deluxe: ["/east-gate-deluxe-1.jpg", "/east-gate-deluxe-2.jpg", "/east-gate-deluxe-bathroom.jpg"],
      suite: ["/east-gate-suite-1.jpg", "/east-gate-suite-2.jpg", "/east-gate-suite-bathroom.jpg"],
      family: ["/east-gate-family-1.jpg", "/east-gate-family-2.jpg", "/east-gate-family-bathroom.jpg"],
      executive: ["/east-gate-executive-1.jpg", "/east-gate-executive-2.jpg", "/east-gate-executive-bathroom.jpg"],
      presidential: ["/east-gate-presidential-1.jpg", "/east-gate-presidential-2.jpg", "/east-gate-presidential-bathroom.jpg"],
      accessibleStandard: ["/east-gate-accessible-standard-1.jpg", "/east-gate-accessible-standard-2.jpg", "/east-gate-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/east-gate-accessible-deluxe-1.jpg", "/east-gate-accessible-deluxe-2.jpg", "/east-gate-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/east-gate-accessible-suite-1.jpg", "/east-gate-accessible-suite-2.jpg", "/east-gate-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/east-gate-accessible-family-1.jpg", "/east-gate-accessible-family-2.jpg", "/east-gate-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/east-gate-accessible-premium-1.jpg", "/east-gate-accessible-premium-2.jpg", "/east-gate-accessible-premium-bathroom.jpg"]
    })
  },

  // Tsavo West Hotels
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
    phone: "+254 43 2410000",
    email: "reservations@tsavo-west-lodge.com",
    rooms: createRooms("tsavo-west-001", 400, {
      standard: ["/spacious-clean-and-comfortable.jpg", "/spacious-clean-and-comfortable (1).jpg", "/ngulia-safari-lodge (1).jpg"],
      deluxe: ["/ngulia-deluxe-1.jpg", "/ngulia-deluxe-2.jpg", "/ngulia-deluxe-bathroom.jpg"],
      suite: ["/ngulia-suite-1.jpg", "/ngulia-suite-2.jpg", "/ngulia-suite-bathroom.jpg"],
      family: ["/ngulia-family-1.jpg", "/ngulia-family-2.jpg", "/ngulia-family-bathroom.jpg"],
      executive: ["/ngulia-executive-1.jpg", "/ngulia-executive-2.jpg", "/ngulia-executive-bathroom.jpg"],
      presidential: ["/ngulia-presidential-1.jpg", "/ngulia-presidential-2.jpg", "/ngulia-presidential-bathroom.jpg"],
      accessibleStandard: ["/ngulia-accessible-standard-1.jpg", "/ngulia-accessible-standard-2.jpg", "/ngulia-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/ngulia-accessible-deluxe-1.jpg", "/ngulia-accessible-deluxe-2.jpg", "/ngulia-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/ngulia-accessible-suite-1.jpg", "/ngulia-accessible-suite-2.jpg", "/ngulia-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/ngulia-accessible-family-1.jpg", "/ngulia-accessible-family-2.jpg", "/ngulia-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/ngulia-accessible-premium-1.jpg", "/ngulia-accessible-premium-2.jpg", "/ngulia-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 43 2410100",
    email: "reservations@kilaguni-serena.com",
    rooms: createRooms("tsavo-west-002", 390, {
      standard: ["/caption (12).jpg", "/caption (14).jpg", "/caption (11).jpg"],
      deluxe: ["/lions-bluff-deluxe-1.jpg", "/lions-bluff-deluxe-2.jpg", "/lions-bluff-deluxe-bathroom.jpg"],
      suite: ["/lions-bluff-suite-1.jpg", "/lions-bluff-suite-2.jpg", "/lions-bluff-suite-bathroom.jpg"],
      family: ["/lions-bluff-family-1.jpg", "/lions-bluff-family-2.jpg", "/lions-bluff-family-bathroom.jpg"],
      executive: ["/lions-bluff-executive-1.jpg", "/lions-bluff-executive-2.jpg", "/lions-bluff-executive-bathroom.jpg"],
      presidential: ["/lions-bluff-presidential-1.jpg", "/lions-bluff-presidential-2.jpg", "/lions-bluff-presidential-bathroom.jpg"],
      accessibleStandard: ["/lions-bluff-accessible-standard-1.jpg", "/lions-bluff-accessible-standard-2.jpg", "/lions-bluff-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/lions-bluff-accessible-deluxe-1.jpg", "/lions-bluff-accessible-deluxe-2.jpg", "/lions-bluff-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/lions-bluff-accessible-suite-1.jpg", "/lions-bluff-accessible-suite-2.jpg", "/lions-bluff-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/lions-bluff-accessible-family-1.jpg", "/lions-bluff-accessible-family-2.jpg", "/lions-bluff-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/lions-bluff-accessible-premium-1.jpg", "/lions-bluff-accessible-premium-2.jpg", "/lions-bluff-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 43 2410200",
    email: "info@mzima-springs-camp.com",
    rooms: createRooms("tsavo-west-003", 360, {
      standard: ["/20180810-212748-largejpg.jpg", "/photo2jpg (1).jpg", "/voyager-ziwani-tsavo.jpg"],
      deluxe: ["/voyager-deluxe-1.jpg", "/voyager-deluxe-2.jpg", "/voyager-deluxe-bathroom.jpg"],
      suite: ["/voyager-suite-1.jpg", "/voyager-suite-2.jpg", "/voyager-suite-bathroom.jpg"],
      family: ["/voyager-family-1.jpg", "/voyager-family-2.jpg", "/voyager-family-bathroom.jpg"],
      executive: ["/voyager-executive-1.jpg", "/voyager-executive-2.jpg", "/voyager-executive-bathroom.jpg"],
      presidential: ["/voyager-presidential-1.jpg", "/voyager-presidential-2.jpg", "/voyager-presidential-bathroom.jpg"],
      accessibleStandard: ["/voyager-accessible-standard-1.jpg", "/voyager-accessible-standard-2.jpg", "/voyager-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/voyager-accessible-deluxe-1.jpg", "/voyager-accessible-deluxe-2.jpg", "/voyager-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/voyager-accessible-suite-1.jpg", "/voyager-accessible-suite-2.jpg", "/voyager-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/voyager-accessible-family-1.jpg", "/voyager-accessible-family-2.jpg", "/voyager-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/voyager-accessible-premium-1.jpg", "/voyager-accessible-premium-2.jpg", "/voyager-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 43 2410300",
    email: "info@chyulu-hills-lodge.com",
    rooms: createRooms("tsavo-west-004", 340, {
      standard: ["/water-hole-view-room.jpg", "/park-view-room (1).jpg", "/park-view-room.jpg"],
      deluxe: ["/salt-lick-deluxe-1.jpg", "/salt-lick-deluxe-2.jpg", "/salt-lick-deluxe-bathroom.jpg"],
      suite: ["/salt-lick-suite-1.jpg", "/salt-lick-suite-2.jpg", "/salt-lick-suite-bathroom.jpg"],
      family: ["/salt-lick-family-1.jpg", "/salt-lick-family-2.jpg", "/salt-lick-family-bathroom.jpg"],
      executive: ["/salt-lick-executive-1.jpg", "/salt-lick-executive-2.jpg", "/salt-lick-executive-bathroom.jpg"],
      presidential: ["/salt-lick-presidential-1.jpg", "/salt-lick-presidential-2.jpg", "/salt-lick-presidential-bathroom.jpg"],
      accessibleStandard: ["/salt-lick-accessible-standard-1.jpg", "/salt-lick-accessible-standard-2.jpg", "/salt-lick-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/salt-lick-accessible-deluxe-1.jpg", "/salt-lick-accessible-deluxe-2.jpg", "/salt-lick-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/salt-lick-accessible-suite-1.jpg", "/salt-lick-accessible-suite-2.jpg", "/salt-lick-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/salt-lick-accessible-family-1.jpg", "/salt-lick-accessible-family-2.jpg", "/salt-lick-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/salt-lick-accessible-premium-1.jpg", "/salt-lick-accessible-premium-2.jpg", "/salt-lick-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 43 2410400",
    email: "info@volcanic-landscape-camp.com",
    rooms: createRooms("tsavo-west-005", 310, {
      standard: ["/kitani-bandas.jpg", "/severin-safari-camp.jpg", "/badezimmer-der-mawenzi (1).jpg"],
      deluxe: ["/severin-deluxe-1.jpg", "/severin-deluxe-2.jpg", "/severin-deluxe-bathroom.jpg"],
      suite: ["/severin-suite-1.jpg", "/severin-suite-2.jpg", "/severin-suite-bathroom.jpg"],
      family: ["/severin-family-1.jpg", "/severin-family-2.jpg", "/severin-family-bathroom.jpg"],
      executive: ["/severin-executive-1.jpg", "/severin-executive-2.jpg", "/severin-executive-bathroom.jpg"],
      presidential: ["/severin-presidential-1.jpg", "/severin-presidential-2.jpg", "/severin-presidential-bathroom.jpg"],
      accessibleStandard: ["/severin-accessible-standard-1.jpg", "/severin-accessible-standard-2.jpg", "/severin-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/severin-accessible-deluxe-1.jpg", "/severin-accessible-deluxe-2.jpg", "/severin-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/severin-accessible-suite-1.jpg", "/severin-accessible-suite-2.jpg", "/severin-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/severin-accessible-family-1.jpg", "/severin-accessible-family-2.jpg", "/severin-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/severin-accessible-premium-1.jpg", "/severin-accessible-premium-2.jpg", "/severin-accessible-premium-bathroom.jpg"]
    })
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
    phone: "+254 43 2410500",
    email: "info@tsavo-west-safari-lodge.com",
    rooms: createRooms("tsavo-west-006", 290, {
      standard: ["/photo2jpg (2).jpg", "/kilaguni-serena-safari (3).jpg", "/kilaguni-serena-safari (4).jpg"],
      deluxe: ["/kilaguni-deluxe-1.jpg", "/kilaguni-deluxe-2.jpg", "/kilaguni-deluxe-bathroom.jpg"],
      suite: ["/kilaguni-suite-1.jpg", "/kilaguni-suite-2.jpg", "/kilaguni-suite-bathroom.jpg"],
      family: ["/kilaguni-family-1.jpg", "/kilaguni-family-2.jpg", "/kilaguni-family-bathroom.jpg"],
      executive: ["/kilaguni-executive-1.jpg", "/kilaguni-executive-2.jpg", "/kilaguni-executive-bathroom.jpg"],
      presidential: ["/kilaguni-presidential-1.jpg", "/kilaguni-presidential-2.jpg", "/kilaguni-presidential-bathroom.jpg"],
      accessibleStandard: ["/kilaguni-accessible-standard-1.jpg", "/kilaguni-accessible-standard-2.jpg", "/kilaguni-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/kilaguni-accessible-deluxe-1.jpg", "/kilaguni-accessible-deluxe-2.jpg", "/kilaguni-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/kilaguni-accessible-suite-1.jpg", "/kilaguni-accessible-suite-2.jpg", "/kilaguni-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/kilaguni-accessible-family-1.jpg", "/kilaguni-accessible-family-2.jpg", "/kilaguni-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/kilaguni-accessible-premium-1.jpg", "/kilaguni-accessible-premium-2.jpg", "/kilaguni-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-west-007",
    name: "Tsavo West Comfort Camp",
    location: "Tsavo West",
    rating: 4.2,
    price: 270,
    image: "/tsavo-west-comfort.jpg?height=300&width=400",
    gallery: [
      "/tsavo-west-comfort-1.jpg?height=400&width=600",
      "/tsavo-west-comfort-2.jpg?height=400&width=600",
      "/tsavo-west-comfort-3.jpg?height=400&width=600",
      "/tsavo-west-comfort-4.jpg?height=400&width=600",
    ],
    description: "Comfortable camp offering good value and friendly service.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Photography", "Guides", "Room Service", "Parking"],
    address: "Tsavo West",
    phone: "+254 43 2410600",
    email: "info@tsavo-west-comfort-camp.com",
    rooms: createRooms("tsavo-west-007", 270, {
      standard: ["/tsavo-west-comfort-standard-1.jpg", "/tsavo-west-comfort-standard-2.jpg", "/tsavo-west-comfort-standard-bathroom.jpg"],
      deluxe: ["/tsavo-west-comfort-deluxe-1.jpg", "/tsavo-west-comfort-deluxe-2.jpg", "/tsavo-west-comfort-deluxe-bathroom.jpg"],
      suite: ["/tsavo-west-comfort-suite-1.jpg", "/tsavo-west-comfort-suite-2.jpg", "/tsavo-west-comfort-suite-bathroom.jpg"],
      family: ["/tsavo-west-comfort-family-1.jpg", "/tsavo-west-comfort-family-2.jpg", "/tsavo-west-comfort-family-bathroom.jpg"],
      executive: ["/tsavo-west-comfort-executive-1.jpg", "/tsavo-west-comfort-executive-2.jpg", "/tsavo-west-comfort-executive-bathroom.jpg"],
      presidential: ["/tsavo-west-comfort-presidential-1.jpg", "/tsavo-west-comfort-presidential-2.jpg", "/tsavo-west-comfort-presidential-bathroom.jpg"],
      accessibleStandard: ["/tsavo-west-comfort-accessible-standard-1.jpg", "/tsavo-west-comfort-accessible-standard-2.jpg", "/tsavo-west-comfort-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/tsavo-west-comfort-accessible-deluxe-1.jpg", "/tsavo-west-comfort-accessible-deluxe-2.jpg", "/tsavo-west-comfort-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/tsavo-west-comfort-accessible-suite-1.jpg", "/tsavo-west-comfort-accessible-suite-2.jpg", "/tsavo-west-comfort-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/tsavo-west-comfort-accessible-family-1.jpg", "/tsavo-west-comfort-accessible-family-2.jpg", "/tsavo-west-comfort-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/tsavo-west-comfort-accessible-premium-1.jpg", "/tsavo-west-comfort-accessible-premium-2.jpg", "/tsavo-west-comfort-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-west-008",
    name: "Hippo Pool Camp",
    location: "Tsavo West",
    rating: 4.4,
    price: 300,
    image: "/hippo-pool-camp.jpg?height=300&width=400",
    gallery: [
      "/hippo-pool-1.jpg?height=400&width=600",
      "/hippo-pool-2.jpg?height=400&width=600",
      "/hippo-pool-3.jpg?height=400&width=600",
      "/hippo-pool-4.jpg?height=400&width=600",
    ],
    description: "Camp specializing in hippo viewing with excellent waterhole access.",
    amenities: [
      "Safari Drives",
      "Restaurant",
      "Bar",
      "Photography",
      "WiFi",
      "Guides",
      "Room Service",
      "Wildlife Viewing",
    ],
    address: "Tsavo West",
    phone: "+254 43 2410700",
    email: "info@hippo-pool-camp.com",
    rooms: createRooms("tsavo-west-008", 300, {
      standard: ["/hippo-pool-standard-1.jpg", "/hippo-pool-standard-2.jpg", "/hippo-pool-standard-bathroom.jpg"],
      deluxe: ["/hippo-pool-deluxe-1.jpg", "/hippo-pool-deluxe-2.jpg", "/hippo-pool-deluxe-bathroom.jpg"],
      suite: ["/hippo-pool-suite-1.jpg", "/hippo-pool-suite-2.jpg", "/hippo-pool-suite-bathroom.jpg"],
      family: ["/hippo-pool-family-1.jpg", "/hippo-pool-family-2.jpg", "/hippo-pool-family-bathroom.jpg"],
      executive: ["/hippo-pool-executive-1.jpg", "/hippo-pool-executive-2.jpg", "/hippo-pool-executive-bathroom.jpg"],
      presidential: ["/hippo-pool-presidential-1.jpg", "/hippo-pool-presidential-2.jpg", "/hippo-pool-presidential-bathroom.jpg"],
      accessibleStandard: ["/hippo-pool-accessible-standard-1.jpg", "/hippo-pool-accessible-standard-2.jpg", "/hippo-pool-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/hippo-pool-accessible-deluxe-1.jpg", "/hippo-pool-accessible-deluxe-2.jpg", "/hippo-pool-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/hippo-pool-accessible-suite-1.jpg", "/hippo-pool-accessible-suite-2.jpg", "/hippo-pool-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/hippo-pool-accessible-family-1.jpg", "/hippo-pool-accessible-family-2.jpg", "/hippo-pool-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/hippo-pool-accessible-premium-1.jpg", "/hippo-pool-accessible-premium-2.jpg", "/hippo-pool-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-west-009",
    name: "Tsavo West Wilderness Lodge",
    location: "Tsavo West",
    rating: 4.1,
    price: 250,
    image: "/tsavo-west-wilderness.jpg?height=300&width=400",
    gallery: [
      "/tsavo-west-wilderness-1.jpg?height=400&width=600",
      "/tsavo-west-wilderness-2.jpg?height=400&width=600",
      "/tsavo-west-wilderness-3.jpg?height=400&width=600",
      "/tsavo-west-wilderness-4.jpg?height=400&width=600",
    ],
    description: "Wilderness lodge offering authentic safari experiences.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "Photography", "WiFi", "Guides", "Room Service", "TV"],
    address: "Tsavo West",
    phone: "+254 43 2410800",
    email: "info@tsavo-west-wilderness.com",
    rooms: createRooms("tsavo-west-009", 250, {
      standard: ["/west-wilderness-standard-1.jpg", "/west-wilderness-standard-2.jpg", "/west-wilderness-standard-bathroom.jpg"],
      deluxe: ["/west-wilderness-deluxe-1.jpg", "/west-wilderness-deluxe-2.jpg", "/west-wilderness-deluxe-bathroom.jpg"],
      suite: ["/west-wilderness-suite-1.jpg", "/west-wilderness-suite-2.jpg", "/west-wilderness-suite-bathroom.jpg"],
      family: ["/west-wilderness-family-1.jpg", "/west-wilderness-family-2.jpg", "/west-wilderness-family-bathroom.jpg"],
      executive: ["/west-wilderness-executive-1.jpg", "/west-wilderness-executive-2.jpg", "/west-wilderness-executive-bathroom.jpg"],
      presidential: ["/west-wilderness-presidential-1.jpg", "/west-wilderness-presidential-2.jpg", "/west-wilderness-presidential-bathroom.jpg"],
      accessibleStandard: ["/west-wilderness-accessible-standard-1.jpg", "/west-wilderness-accessible-standard-2.jpg", "/west-wilderness-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/west-wilderness-accessible-deluxe-1.jpg", "/west-wilderness-accessible-deluxe-2.jpg", "/west-wilderness-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/west-wilderness-accessible-suite-1.jpg", "/west-wilderness-accessible-suite-2.jpg", "/west-wilderness-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/west-wilderness-accessible-family-1.jpg", "/west-wilderness-accessible-family-2.jpg", "/west-wilderness-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/west-wilderness-accessible-premium-1.jpg", "/west-wilderness-accessible-premium-2.jpg", "/west-wilderness-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-west-010",
    name: "Elephant Wallow Tsavo West",
    location: "Tsavo West",
    rating: 4.3,
    price: 285,
    image: "/elephant-wallow-west.jpg?height=300&width=400",
    gallery: [
      "/elephant-wallow-west-1.jpg?height=400&width=600",
      "/elephant-wallow-west-2.jpg?height=400&width=600",
      "/elephant-wallow-west-3.jpg?height=400&width=600",
      "/elephant-wallow-west-4.jpg?height=400&width=600",
    ],
    description: "Camp specializing in elephant viewing with conservation focus.",
    amenities: [
      "Safari Drives",
      "Restaurant",
      "Bar",
      "Photography",
      "WiFi",
      "Guides",
      "Room Service",
      "Education Programs",
    ],
    address: "Tsavo West",
    phone: "+254 43 2410900",
    email: "info@elephant-wallow-west.com",
    rooms: createRooms("tsavo-west-010", 285, {
      standard: ["/elephant-wallow-west-standard-1.jpg", "/elephant-wallow-west-standard-2.jpg", "/elephant-wallow-west-standard-bathroom.jpg"],
      deluxe: ["/elephant-wallow-west-deluxe-1.jpg", "/elephant-wallow-west-deluxe-2.jpg", "/elephant-wallow-west-deluxe-bathroom.jpg"],
      suite: ["/elephant-wallow-west-suite-1.jpg", "/elephant-wallow-west-suite-2.jpg", "/elephant-wallow-west-suite-bathroom.jpg"],
      family: ["/elephant-wallow-west-family-1.jpg", "/elephant-wallow-west-family-2.jpg", "/elephant-wallow-west-family-bathroom.jpg"],
      executive: ["/elephant-wallow-west-executive-1.jpg", "/elephant-wallow-west-executive-2.jpg", "/elephant-wallow-west-executive-bathroom.jpg"],
      presidential: ["/elephant-wallow-west-presidential-1.jpg", "/elephant-wallow-west-presidential-2.jpg", "/elephant-wallow-west-presidential-bathroom.jpg"],
      accessibleStandard: ["/elephant-wallow-west-accessible-standard-1.jpg", "/elephant-wallow-west-accessible-standard-2.jpg", "/elephant-wallow-west-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/elephant-wallow-west-accessible-deluxe-1.jpg", "/elephant-wallow-west-accessible-deluxe-2.jpg", "/elephant-wallow-west-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/elephant-wallow-west-accessible-suite-1.jpg", "/elephant-wallow-west-accessible-suite-2.jpg", "/elephant-wallow-west-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/elephant-wallow-west-accessible-family-1.jpg", "/elephant-wallow-west-accessible-family-2.jpg", "/elephant-wallow-west-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/elephant-wallow-west-accessible-premium-1.jpg", "/elephant-wallow-west-accessible-premium-2.jpg", "/elephant-wallow-west-accessible-premium-bathroom.jpg"]
    })
  },
  {
    id: "tsavo-west-011",
    name: "Tsavo West Budget Lodge",
    location: "Tsavo West",
    rating: 4.0,
    price: 230,
    image: "/tsavo-west-budget.jpg?height=300&width=400",
    gallery: [
      "/tsavo-west-budget-1.jpg?height=400&width=600",
      "/tsavo-west-budget-2.jpg?height=400&width=600",
      "/tsavo-west-budget-3.jpg?height=400&width=600",
      "/tsavo-west-budget-4.jpg?height=400&width=600",
    ],
    description: "Budget lodge offering basic but quality accommodations.",
    amenities: ["Safari Drives", "Restaurant", "Bar", "WiFi", "Photography", "Guides", "Parking", "TV"],
    address: "Tsavo West",
    phone: "+254 43 2411000",
    email: "info@tsavo-west-budget.com",
    rooms: createRooms("tsavo-west-011", 230, {
      standard: ["/tsavo-west-budget-standard-1.jpg", "/tsavo-west-budget-standard-2.jpg", "/tsavo-west-budget-standard-bathroom.jpg"],
      deluxe: ["/tsavo-west-budget-deluxe-1.jpg", "/tsavo-west-budget-deluxe-2.jpg", "/tsavo-west-budget-deluxe-bathroom.jpg"],
      suite: ["/tsavo-west-budget-suite-1.jpg", "/tsavo-west-budget-suite-2.jpg", "/tsavo-west-budget-suite-bathroom.jpg"],
      family: ["/tsavo-west-budget-family-1.jpg", "/tsavo-west-budget-family-2.jpg", "/tsavo-west-budget-family-bathroom.jpg"],
      executive: ["/tsavo-west-budget-executive-1.jpg", "/tsavo-west-budget-executive-2.jpg", "/tsavo-west-budget-executive-bathroom.jpg"],
      presidential: ["/tsavo-west-budget-presidential-1.jpg", "/tsavo-west-budget-presidential-2.jpg", "/tsavo-west-budget-presidential-bathroom.jpg"],
      accessibleStandard: ["/tsavo-west-budget-accessible-standard-1.jpg", "/tsavo-west-budget-accessible-standard-2.jpg", "/tsavo-west-budget-accessible-bathroom.jpg"],
      accessibleDeluxe: ["/tsavo-west-budget-accessible-deluxe-1.jpg", "/tsavo-west-budget-accessible-deluxe-2.jpg", "/tsavo-west-budget-accessible-deluxe-bathroom.jpg"],
      accessibleSuite: ["/tsavo-west-budget-accessible-suite-1.jpg", "/tsavo-west-budget-accessible-suite-2.jpg", "/tsavo-west-budget-accessible-suite-bathroom.jpg"],
      accessibleFamily: ["/tsavo-west-budget-accessible-family-1.jpg", "/tsavo-west-budget-accessible-family-2.jpg", "/tsavo-west-budget-accessible-family-bathroom.jpg"],
      accessiblePremium: ["/tsavo-west-budget-accessible-premium-1.jpg", "/tsavo-west-budget-accessible-premium-2.jpg", "/tsavo-west-budget-accessible-premium-bathroom.jpg"]
    })
  },
]

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
]