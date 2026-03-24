// lib/data.ts
import {
  getAccessibilityData,
  type AccessibilityFeature,
  type AccessibilityImages,
} from "./accessibility-data";

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
  accessibilityFeatures?: AccessibilityFeature[];
  accessibilityImages?: AccessibilityImages;
  videoUrl?: string;
  videoEmbedUrl?: string;
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
    description:
      "Kenya's vibrant capital city – best luxury hotels, Nairobi National Park safaris, Giraffe Centre and cultural experiences",
    image: "/Nairobi.avif",
    longDescription:
      "Nairobi, Kenya's lively capital and major gateway to East African safaris, combines urban energy with incredible wildlife experiences. Known worldwide as the only capital city with a national park inside its borders, Nairobi offers Nairobi National Park safaris just 20 minutes from the city center. Visit the famous Giraffe Centre, Karen Blixen Museum, David Sheldrick Elephant Orphanage, and Nairobi National Museum. The city is home to luxury hotels in Nairobi, boutique lodges, rooftop restaurants, vibrant nightlife, and excellent shopping at Two Rivers Mall and The Hub Karen. Perfect base for Kenya safari tours, business travel, or city + safari combinations.",
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
    description:
      "Lake Naivasha – boat rides, hippo watching, Hell's Gate cycling & luxury lodges near Nairobi",
    image: "/naivasha.jpeg",
    longDescription:
      "Lake Naivasha is one of Kenya's most beautiful freshwater lakes, located just 90 minutes from Nairobi along the Great Rift Valley. Famous for boat safaris where you can get close to hippos, fish eagles and hundreds of bird species. Enjoy cycling and game drives inside Hell's Gate National Park – the only park in Kenya where you can walk or cycle among zebras, giraffes and buffaloes. Visit Crescent Island for walking safaris, Crater Lake for flamingos, and geothermal hot springs. Lake Naivasha is a perfect weekend getaway from Nairobi, romantic destination, family-friendly location and excellent stopover on the way to Maasai Mara or Nakuru.",
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
    updatedAt: new Date(),
  },
  {
    id: "nakuru",
    name: "Nakuru",
    slug: "nakuru",
    description:
      "Lake Nakuru National Park – flamingos, rhinos, lions – best safari destination in Rift Valley",
    image: "/nakuru.jpg",
    longDescription:
      "Lake Nakuru National Park is world-famous for its spectacular pink flamingo flocks that sometimes number over a million birds. This alkaline lake is one of Kenya's best places to see white and black rhinos, Rothschild giraffes, lions, leopards, buffaloes and tree-climbing lions. The park also offers excellent birdwatching with over 450 recorded species. Nakuru town provides good accommodation options, restaurants and serves as an important stop between Nairobi and the Maasai Mara or western Kenya. Menengai Crater, Lake Elementaita flamingos and Soysambu Conservancy are all within easy reach.",
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
    updatedAt: new Date(),
  },
  {
    id: "kisumu",
    name: "Kisumu",
    slug: "kisumu",
    description:
      "Kisumu – Lake Victoria, Impala Sanctuary, Dunga Hill Camp, Kit Mikayi – Gateway to Western Kenya",
    image: "/kisumu.jpg",
    longDescription:
      "Kisumu is Kenya's third-largest city and the main port on Lake Victoria, Africa's largest lake. This vibrant lakeside city offers a unique blend of urban energy and natural beauty. Visit the Kisumu Impala Sanctuary for wildlife viewing, explore the Dunga Hill Camp for bird watching and sunset views, and discover the mystical Kit Mikayi rock formation. The city is also a gateway to the diverse cultures of Western Kenya and the tea plantations of Kericho.",
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
    updatedAt: new Date(),
  },
  {
    id: "mombasa",
    name: "Mombasa",
    slug: "mombasa",
    description:
      "Mombasa – Kenya's coastal gem, beautiful beaches, Fort Jesus, marine parks and Swahili culture",
    image: "/mombasa.jpg",
    longDescription:
      "Mombasa is Kenya's second-largest city and the heart of the Kenyan coast. This historic port city offers a perfect blend of Swahili culture, stunning beaches, and world-class resorts. Explore the ancient Fort Jesus, wander through the narrow streets of Old Town, relax on the white sands of Diani and Nyali beaches, and discover vibrant marine life in the surrounding coral reefs. Mombasa is the perfect destination for beach holidays, water sports, and cultural experiences.",
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
    updatedAt: new Date(),
  },
  {
    id: "samburu",
    name: "Samburu",
    slug: "samburu",
    description:
      "Samburu National Reserve – special five animals, Grevy's zebra, reticulated giraffe, luxury camps",
    image: "/samburu.webp",
    longDescription:
      "Samburu National Reserve offers one of Kenya's most unique and remote safari experiences. Famous for the Samburu Special Five: Grevy's zebra, reticulated giraffe, Somali ostrich, beisa oryx and gerenuk. The Ewaso Nyiro River attracts large herds of elephants, lions, leopards and crocodiles – especially dramatic during dry seasons. The red dirt landscapes, domed termite mounds and dramatic rocky outcrops create a very different atmosphere from southern parks. Samburu also offers rich cultural experiences with Samburu and Turkana communities. Perfect for travelers seeking uncrowded wilderness, excellent big cat sightings and authentic safari camps.",
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
    updatedAt: new Date(),
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
    updatedAt: new Date(),
  },
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    slug: "maasai-mara",
    description:
      "Maasai Mara – Great Migration, Big Five safaris, luxury tented camps, hot air balloon rides",
    image: "/maasai mara.jpeg",
    longDescription:
      "The Maasai Mara National Reserve is Kenya's most famous and arguably the best wildlife destination in Africa. World-renowned for the Great Wildebeest Migration (July–October), when over 1.5 million animals cross the Mara River watched by crocodiles and big cats. Year-round excellent Big Five viewing (lion, leopard, elephant, buffalo, rhino), cheetahs, hyenas, topi, eland and huge birdlife. Stay in luxury tented camps, eco-lodges or exclusive private conservancies with off-road driving and night drives. Experience authentic Maasai village visits, bush walks and hot air balloon safaris over the plains at sunrise. The ultimate Kenya safari destination.",
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
    bestTime:
      "July to October (Migration) • December to March (calving season)",
    updatedAt: new Date(),
  },
  {
    id: "amboseli",
    name: "Amboseli",
    slug: "amboseli",
    description:
      "Amboseli National Park – Mount Kilimanjaro views, huge elephant herds, luxury lodges",
    image: "/amboseli.avif",
    longDescription:
      "Amboseli National Park is world-famous for its breathtaking views of Mount Kilimanjaro, Africa's highest mountain, rising dramatically behind massive elephant herds. Known as the best place in Kenya to photograph elephants with Kilimanjaro backdrop. The park features large swamps attracting thousands of animals – especially elephants, buffaloes, hippos and waterbirds. Excellent big cat sightings (lion, cheetah) and over 400 bird species recorded. Amboseli offers authentic Maasai cultural experiences and stays in luxury tented camps and lodges with Kilimanjaro views. One of the most photogenic and iconic safari destinations in East Africa.",
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
    updatedAt: new Date(),
  },
  {
    id: "tsavo-east",
    name: "Tsavo East",
    slug: "tsavo-east",
    description:
      "Tsavo East National Park – red dust, huge elephant herds, Yatta Plateau, classic Kenya safari",
    image: "/tsavo east.jpeg",
    longDescription:
      "Tsavo East is one of Kenya's largest and wildest national parks, famous for its distinctive red volcanic soil and massive elephant populations – often covered in red dust. The park offers classic African wilderness safaris with excellent chances to see lions, leopards, cheetahs, giraffes, zebras, oryx, gerenuk and huge herds of elephants. The Galana River is a lifeline attracting wildlife, especially in the dry season. Highlights include Mudanda Rock lookout, Yatta Plateau (world's longest lava flow), Aruba Dam and Lugard Falls. Ideal for travelers seeking uncrowded, authentic safari experiences away from mass tourism.",
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
    updatedAt: new Date(),
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
      "Poacher's Lookout Viewpoint",
      "Diverse Birdlife & Mammals",
    ],
    bestTime: "June to October (dry season)",
    updatedAt: new Date(),
  },
];

// Helper function to create rooms based on hotel accessibility
const createRooms = (
  hotelId: string,
  basePrice: number,
  roomImages: Record<string, string[]>,
  isAccessibleHotel: boolean = false
): Room[] => {
  const rooms: Room[] = [];

  if (isAccessibleHotel) {
    // Accessible hotels: Only Standard and Accessible rooms
    rooms.push(
      {
        id: `${hotelId}-standard-1`,
        type: "Standard Room",
        description:
          "Comfortable room with basic amenities, perfect for solo travelers or couples.",
        price: Math.round(basePrice * 0.8),
        maxOccupancy: 2,
        available: 3,
        amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom"],
        images: roomImages.standard || ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: `${hotelId}-accessible-1`,
        type: "Accessible Room",
        description:
          "Thoughtfully designed accessible room with wider doorways, roll-in shower, and grab bars for guests with mobility needs.",
        price: Math.round(basePrice * 0.85),
        maxOccupancy: 2,
        available: 2,
        amenities: [
          "WiFi",
          "TV",
          "Air Conditioning",
          "Ensuite Bathroom",
          "Accessible Features",
        ],
        images:
          roomImages.accessibleStandard || ["/placeholder.svg?height=300&width=400"],
        accessible: true,
        accessibilityFeatures: [
          "Wider doorways (32+ inches)",
          "Roll-in shower with grab bars",
          "Lowered light switches and fixtures",
          "Emergency call system",
          "Wheelchair accessible",
        ],
      }
    );
  } else {
    // Non-accessible hotels: Only Standard and Deluxe rooms
    rooms.push(
      {
        id: `${hotelId}-standard-1`,
        type: "Standard Room",
        description:
          "Comfortable room with basic amenities, perfect for solo travelers or couples.",
        price: Math.round(basePrice * 0.8),
        maxOccupancy: 2,
        available: 4,
        amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom"],
        images: roomImages.standard || ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: `${hotelId}-deluxe-1`,
        type: "Deluxe Room",
        description:
          "Spacious room with enhanced amenities and beautiful views for a more comfortable stay.",
        price: basePrice,
        maxOccupancy: 3,
        available: 2,
        amenities: [
          "WiFi",
          "TV",
          "Air Conditioning",
          "Ensuite Bathroom",
          "Mini Bar",
          "Work Desk",
        ],
        images: roomImages.deluxe || ["/placeholder.svg?height=300&width=400"],
      }
    );
  }
  return rooms;
};

// Accessibility features for Sarova Panafric
const sarovaPanafricAccessibilityFeatures: AccessibilityFeature[] = [
  {
    id: "sarova-panafric-bathroom-1",
    category: "bathroom",
    title: "Shower",
    description:
      "Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide",
    measurements:
      "Entrance: 58\" (147cm) wide • Cubicle: 37\" (94cm) x 58\" (147cm)",
    status: "available",
    details: {
      items: [
        {
          label: "Roll-in shower available",
          value: "Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide",
          status: "available",
        },
        { label: "Grab bars within shower", value: "Available", status: "available" },
        {
          label: "Fixed shower seat",
          value: "Located next to the showerhead",
          status: "available",
        },
        {
          label: "Portable shower seat",
          value: "Available upon request",
          status: "available",
        },
        {
          label: "Handheld showerhead",
          value: "Available at 75 in from the floor",
          status: "available",
        },
      ],
    },
  },
  {
    id: "sarova-panafric-bathroom-2",
    category: "bathroom",
    title: "Sink",
    description:
      "The sink height is 33.5 in. The space under the sink is 10 in long, 34.5 in wide, 27 in high",
    measurements:
      "Sink height: 33.5\" (85cm) • Knee clearance: 10\" (25cm) deep x 34.5\" (88cm) wide x 27\" (69cm) high",
    status: "available",
    details: {
      items: [
        { label: "Sink height", value: "33.5 in (85cm)", status: "available" },
        {
          label: "Space under sink",
          value: "10 in long, 34.5 in wide, 27 in high",
          status: "available",
        },
        { label: "Sink handle type", value: "Lever handle", status: "available" },
      ],
    },
  },
  {
    id: "sarova-panafric-bathroom-3",
    category: "bathroom",
    title: "Bathroom Entrance",
    description:
      "The door operation is manual door and opens out from bathroom",
    measurements: "Door opens outward • Manual operation",
    status: "available",
    details: {
      items: [
        {
          label: "Door operation",
          value: "Manual door opening outward",
          status: "available",
        },
      ],
    },
  },
  {
    id: "sarova-panafric-bathroom-4",
    category: "bathroom",
    title: "Bathroom Interior",
    description:
      "Free turning space of more than 60 in. This is a step-free area",
    measurements: "Turning radius: 60\"+ (152cm+)",
    status: "available",
    details: {
      items: [
        {
          label: "Free turning space",
          value: "More than 60 in (152cm)",
          status: "available",
        },
        { label: "Step-free area", value: "No steps or thresholds", status: "available" },
      ],
    },
  },
  {
    id: "sarova-panafric-room-1",
    category: "room",
    title: "Room Entrance",
    description:
      "There is 1 step to enter the room (2 in tall). Steps have no handrails. Door is 33 in wide. Door opens with lever. Door opens with key card",
    measurements: "Step height: 2\" (5cm) • Door width: 33\" (84cm)",
    status: "partial",
    details: {
      items: [
        { label: "Step to enter", value: "1 step (2 in / 5cm tall)", status: "partial" },
        { label: "Step handrails", value: "No handrails", status: "unavailable" },
        { label: "Door width", value: "33 in (84cm)", status: "available" },
        { label: "Door handle", value: "Lever handle", status: "available" },
        { label: "Door access", value: "Key card", status: "available" },
      ],
    },
  },
  {
    id: "sarova-panafric-room-2",
    category: "room",
    title: "Room Amenities",
    description:
      "Step-free access to the closet. Drawers and clothing rod are at an accessible reach height",
    status: "available",
    details: {
      items: [
        { label: "Closet access", value: "Step-free access", status: "available" },
        {
          label: "Drawers height",
          value: "Accessible reach height",
          status: "available",
        },
        {
          label: "Clothing rod height",
          value: "Accessible reach height",
          status: "available",
        },
      ],
    },
  },
  {
    id: "sarova-panafric-room-3",
    category: "room",
    title: "Bed",
    description:
      "Bed is too high (27 in). There is free space under the bed: 4.5 in long, 67 in wide, 7 in high. There is enough space next to the bed (72 in). The mattress is slightly firm. Light switches and phone are reachable from the bed",
    measurements:
      "Bed height: 27\" (69cm) • Side clearance: 72\" (183cm)",
    status: "partial",
    details: {
      items: [
        { label: "Bed height", value: "27 in (69cm) - Too high", status: "unavailable" },
        {
          label: "Space under bed",
          value: "4.5 in x 67 in x 7 in (11cm x 170cm x 18cm)",
          status: "partial",
        },
        {
          label: "Space next to bed",
          value: "72 in (183cm)",
          status: "available",
        },
        {
          label: "Mattress firmness",
          value: "Slightly firm",
          status: "available",
        },
        { label: "Light switches reachable", value: "Yes", status: "available" },
        { label: "Phone reachable", value: "Yes", status: "available" },
      ],
    },
  },
  {
    id: "sarova-panafric-room-4",
    category: "room",
    title: "Room Features",
    description:
      "The mirror is 24.25 in from the floor. The desk height is 30 in. The space under the desk is 18.25 in long, 43 in wide, 28 in high. The chair has a backrest",
    measurements:
      "Mirror height: 24.25\" (62cm) • Desk height: 30\" (76cm)",
    status: "available",
    details: {
      items: [
        { label: "Mirror height", value: "24.25 in (62cm) from floor", status: "available" },
        { label: "Desk height", value: "30 in (76cm)", status: "available" },
        {
          label: "Space under desk",
          value: "18.25 in long, 43 in wide, 28 in high",
          status: "available",
        },
        { label: "Chair backrest", value: "Available", status: "available" },
      ],
    },
  },
  {
    id: "sarova-panafric-room-5",
    category: "room",
    title: "Room Interior",
    description:
      "This is a step-free area. Free turning space of more than 60 in. The floor is smooth (tile, hardwood, etc.). The area is wide enough for a wheelchair user (32 in or more). Light switches and outlets are at an accessible height",
    status: "available",
    details: {
      items: [
        { label: "Step-free area", value: "Yes", status: "available" },
        {
          label: "Free turning space",
          value: "More than 60 in (152cm)",
          status: "available",
        },
        {
          label: "Floor surface",
          value: "Smooth (tile/hardwood)",
          status: "available",
        },
        {
          label: "Wheelchair clearance",
          value: "32 in (81cm) or more",
          status: "available",
        },
        {
          label: "Light switches height",
          value: "Accessible height",
          status: "available",
        },
        { label: "Outlets height", value: "Accessible height", status: "available" },
      ],
    },
  },
];

const sarovaPanafricAccessibilityImages: AccessibilityImages = {
  bathroom: [
    "/Sarova Panafric - Accessible Bathroom 1.jpg",
    "/Sarova Panafric - Accessible Bathroom 2.jpg",
    "/Sarova Panafric - Accessible Bathroom 3.jpg",
    "/Sarova Panafric - Accessible Bathroom 4.jpg",
  ],
  room: [
    "/Sarova Panafric - Accessible Room 1.jpg",
    "/Sarova Panafric - Accessible Room 2.jpg",
    "/Sarova Panafric - Accessible Room 3.jpg",
  ],
  entrance: [
    "/Sarova Panafric - Accessible Entrance 1.jpg",
    "/Sarova Panafric - Accessible Entrance 2.jpg",
  ],
  restaurant: [
    "/Sarova Panafric - Accessible Restaurant 1.jpg",
    "/Sarova Panafric - Accessible Restaurant 2.jpg",
  ],
  parking: ["/Sarova Panafric - Accessible Parking 1.jpg"],
  "common-areas": [
    "/Sarova Panafric - Common Area 1.jpg",
    "/Sarova Panafric - Common Area 2.jpg",
  ],
};

// Helper function to add accessibility data to hotels
const addAccessibilityData = (hotel: Hotel): Hotel => {
  const accessibilityData = getAccessibilityData(hotel.id);
  if (accessibilityData) {
    return {
      ...hotel,
      accessibilityFeatures: accessibilityData.features,
      accessibilityImages: accessibilityData.images,
    };
  }
  return hotel;
};

// ALL HOTELS - with video URLs restored for all
export const hotels: Hotel[] = [
  // ========== NAIROBI HOTELS ==========
  {
    id: "nairobi-001",
    name: "Safari Park Hotel",
    location: "Nairobi",
    rating: 4.8,
    price: 350,
    image: "/safariparkhotel.jpg?height=300&width=400",
    gallery: [
      "/Safari Park Hotel1.jpg",
      "/Safari Park Hotel2.jpg",
      "/Safari Park Hotel3.jpg",
      "/Safari Park Hotel4.jpg",
    ],
    description:
      "Luxury safari-themed hotel with direct view of Nairobi National Park. World-class amenities and gourmet dining experiences.",
    amenities: [
      "WiFi",
      "Pool",
      "Spa",
      "Restaurant",
      "Bar",
      "Conference Rooms",
      "Parking",
      "Room Service",
    ],
    address: "P.O. Box 24950, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-001",
      350,
      {
        standard: [
          "/safariparkroom1.jpeg",
          "/safariparkroom2.jpeg",
          "/safariparkroom3.jpeg",
        ],
        deluxe: [
          "/safariparkroom1.jpeg",
          "/safariparkroom2.jpeg",
          "/safariparkroom3.jpeg",
        ],
      },
      false
    ),
    slug: "safari-park-hotel",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-002",
    name: "Crowne Plaza Nairobi Airport by IHG",
    location: "Nairobi Airport",
    rating: 4.6,
    price: 280,
    image: "/CrownePlazaNairobi.jpg?height=300&width=400",
    gallery: [
      "/chero1.jpeg?height=400&width=600",
      "/chero2.webp?height=400&width=600",
      "/chero3.gif?height=400&width=600",
      "/chero4.jpg?height=400&width=600",
    ],
    description:
      "Premium 5-star hotel conveniently located at Jomo Kenyatta International Airport, offering contemporary African decor and exceptional service. Features wheelchair accessible rooms with roll-in showers and grab bars. Perfect for transit passengers or those with early flights, featuring soundproofed rooms, 24-hour dining, and complimentary airport shuttle.",
    amenities: [
      "WiFi",
      "Pool",
      "Fitness Center",
      "Multiple Restaurants",
      "Bar",
      "Spa",
      "Concierge",
      "Parking",
      "Airport Shuttle",
      "24-hour Reception",
      "Business Center",
      "Accessible Facilities",
    ],
    address: "Jomo Kenyatta International Airport, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "nairobi-002",
      280,
      {
        standard: [
          "/crowneroom1.jpg",
          "/crowneroom2.jpg",
          "/crowneroom3.jpg",
        ],
        accessibleStandard: [
          "/WhatsApp Image 2026-03-11 at 3.11.03 PM (1).jpeg",
          "/WhatsApp Image 2026-03-11 at 3.11.03 PM (2).jpeg",
        ],
      },
      true
    ),
    slug: "crowne-plaza-nairobi-airport",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-003",
    name: "Serena Hotel Nairobi",
    location: "Nairobi",
    rating: 4.7,
    price: 320,
    image: "/SerenaHotelNairobi.jpg?height=300&width=400",
    gallery: [
      "/shero1.jpg?height=400&width=600",
      "/shero2.jpg?height=400&width=600",
      "/shero3.jpg?height=400&width=600",
      "/shero4.jpg?height=400&width=600",
    ],
    description:
      "Elegant hotel combining contemporary architecture with African artistic elements. Award-winning service and dining.",
    amenities: [
      "WiFi",
      "Pool",
      "Spa",
      "Fine Dining",
      "Business Center",
      "Fitness Center",
      "Parking",
      "Concierge",
    ],
    address: "Kenyatta Avenue, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-003",
      320,
      {
        standard: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"],
        deluxe: ["/sroom1.jpg", "/sroom2.jpg", "/sroom3.jpg"],
      },
      false
    ),
    slug: "serena-hotel-nairobi",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-004",
    name: "Villa Rosa Kempinski",
    location: "Nairobi",
    rating: 4.9,
    price: 400,
    image: "/VillaRosaKempinski.avif?height=300&width=400",
    gallery: [
      "/khero1.jpg?height=400&width=600",
      "/khero2.avif?height=400&width=600",
      "/khero3.jpg?height=400&width=600",
      "/khero4.jpg?height=400&width=600",
    ],
    description:
      "Ultra-luxury 5-star hotel with impeccable service. Fine dining restaurants and world-class spa facilities.",
    amenities: [
      "WiFi",
      "Luxury Pool",
      "Spa",
      "5 Restaurants",
      "Bar",
      "Gym",
      "Valet Parking",
      "24/7 Concierge",
    ],
    address: "Museum Hill, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-004",
      400,
      {
        standard: ["/kroom1.avif", "/kroom2.avif", "/kroom3.jpg"],
        deluxe: ["/kroom1.avif", "/kroom2.avif", "/kroom3.jpg"],
      },
      false
    ),
    slug: "villa-rosa-kempinski",
    updatedAt: new Date(),
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
    description:
      "Unique resort featuring authentic Kenyan cultural experiences with traditional and modern accommodations.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Cultural Shows",
      "Garden",
      "Meeting Rooms",
      "Parking",
      "Bar",
      "Tours",
    ],
    address: "P.O. Box 51510, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-005",
      250,
      {
        standard: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"],
        deluxe: ["/broom1.jpg", "/broom2.jpg", "/broom3.jpg"],
      },
      false
    ),
    slug: "bomas-of-kenya-resort",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-006",
    name: "Hilton Nairobi",
    location: "Nairobi",
    rating: 4.4,
    price: 230,
    image: "/HiltonNairobi.jpg?height=300&width=400",
    gallery: [
      "/hihero1.jpg?height=400&width=600",
      "/hihero2.jpg?height=400&width=600",
      "/hihero3.jpg?height=400&width=600",
      "/hihero4.webp?height=400&width=600",
    ],
    description:
      "Modern 4-star hotel with convenient downtown location. Perfect for business and leisure travelers.",
    amenities: [
      "WiFi",
      "Fitness Center",
      "Restaurant",
      "Bar",
      "Business Center",
      "Parking",
      "Lounge",
      "Room Service",
    ],
    address: "Mama Ngina Street, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-006",
      230,
      {
        standard: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"],
        deluxe: ["/hiroom1.webp", "/hiroom2.webp", "/hiroom3.jpg"],
      },
      false
    ),
    slug: "hilton-nairobi",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-007",
    name: "Ibis Styles Nairobi",
    location: "Nairobi",
    rating: 4.3,
    price: 180,
    image: "/IbisStylesNairobi.jpg?height=300&width=400",
    gallery: [
      "/ibhero1.jpg?height=400&width=600",
      "/ibhero2.jpg?height=400&width=600",
      "/ibhero3.jpg?height=400&width=600",
      "/ibhero4.jpg?height=400&width=600",
    ],
    description:
      "Contemporary 3-star hotel offering excellent value with comfortable rooms and quality service.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Meeting Rooms",
      "Parking",
      "TV",
      "Air Conditioning",
      "Elevator",
    ],
    address: "Kenyatta Avenue, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-007",
      180,
      {
        standard: [
          "/ibis-standard-1.jpg",
          "/ibis-standard-2.jpg",
          "/ibis-standard-bathroom.jpg",
        ],
        deluxe: [
          "/ibis-standard-1.jpg",
          "/ibis-standard-2.jpg",
          "/ibis-standard-bathroom.jpg",
        ],
      },
      false
    ),
    slug: "ibis-styles-nairobi",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-008",
    name: "Radisson Blu Nairobi",
    location: "Nairobi",
    rating: 4.6,
    price: 290,
    image: "/RadissonBluNairobi.jpg?height=300&width=400",
    gallery: [
      "/rahero1.jpg?height=400&width=600",
      "/rahero2.webp?height=400&width=600",
      "/rahero3.jpg?height=400&width=600",
      "/rahero4.avif?height=400&width=600",
    ],
    description:
      "Premium 5-star hotel with modern amenities and attentive service. Located in prime business district.",
    amenities: [
      "WiFi",
      "Pool",
      "Spa",
      "Multiple Restaurants",
      "Gym",
      "Business Center",
      "Parking",
      "Concierge",
    ],
    address: "Westlands, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-008",
      290,
      {
        standard: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"],
        deluxe: ["/raroom1.webp", "/raroom2.avif", "/raroom3.jpg"],
      },
      false
    ),
    slug: "radisson-blu-nairobi",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-009",
    name: "Four Points by Sheraton",
    location: "Nairobi",
    rating: 4.5,
    price: 260,
    image: "/FourPointsbySheraton.jpg?height=300&width=400",
    gallery: [
      "/fohero1.avif?height=400&width=600",
      "/fohero2.jpg?height=400&width=600",
      "/fohero3.jpg?height=400&width=600",
      "/fohero4.webp?height=400&width=600",
    ],
    description:
      "Contemporary 4-star hotel offering excellent dining options and business facilities.",
    amenities: [
      "WiFi",
      "Pool",
      "Restaurant",
      "Bar",
      "Fitness Center",
      "Business Center",
      "Parking",
      "Room Service",
    ],
    address: "Westlands, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-009",
      260,
      {
        standard: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"],
        deluxe: ["/foroom1.jpeg", "/foroom2.jpg", "/foroom3.jpg"],
      },
      false
    ),
    slug: "four-points-by-sheraton",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-010",
    name: "Mercure Hotel Nairobi",
    location: "Nairobi",
    rating: 4.4,
    price: 200,
    image: "/MercureHotelNairobi.jpg?height=300&width=400",
    gallery: [
      "/mehero1.jpeg?height=400&width=600",
      "/mehero2.jpg?height=400&width=600",
      "/mehero3.jpeg?height=400&width=600",
      "/mehero4.jpeg?height=400&width=600",
    ],
    description:
      "4-star hotel with excellent location and comfortable rooms. Great value for money.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Garden",
      "Meeting Rooms",
      "Parking",
      "TV",
      "Room Service",
    ],
    address: "Njiro Road, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-010",
      200,
      {
        standard: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"],
        deluxe: ["/meroom1.jpg", "/meroom2.jpg", "/meroom3.jpg"],
      },
      false
    ),
    slug: "mercure-hotel-nairobi",
    updatedAt: new Date(),
  },
  {
    id: "nairobi-011",
    name: "Country Club Hotel",
    location: "Nairobi",
    rating: 4.2,
    price: 190,
    image: "/CountryClubHotel.jpeg?height=300&width=400",
    gallery: [
      "/cohero1.jpg?height=400&width=600",
      "/cohero2.webp?height=400&width=600",
      "/cohero3.webp?height=400&width=600",
      "/cohero4.jpg?height=400&width=600",
    ],
    description:
      "Budget-friendly 3-star hotel with warm hospitality and convenient location.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Parking",
      "Garden",
      "Room Service",
      "TV",
      "Air Conditioning",
    ],
    address: "Kenyatta Avenue, Nairobi",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nairobi-011",
      190,
      {
        standard: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"],
        deluxe: ["/coroom1.jpeg", "/coroom2.jpg", "/coroom3.avif"],
      },
      false
    ),
    slug: "country-club-hotel",
    updatedAt: new Date(),
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
    description:
      "Breakfast with giraffes. One of Africa's most iconic hotels. Giraffe Manor is a boutique hotel in Nairobi where endangered Rothschild giraffes visit daily.",
    amenities: [
      "Giraffe Feeding",
      "Gardens",
      "Fine Dining",
      "Heritage Property",
      "Library",
      "Free WiFi",
      "Restaurant",
      "Bar",
    ],
    address: "Langata Road, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "giraffe-manor",
      750,
      {
        standard: ["/giraffe-standard-1.jpg", "/giraffe-standard-2.jpg"],
        deluxe: ["/giraffe-deluxe-1.jpg", "/giraffe-deluxe-2.jpg"],
      },
      false
    ),
    slug: "giraffe-manor",
    updatedAt: new Date(),
  },
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
    description:
      "Modern hotel offering comfortable accommodations with a blend of contemporary style and African charm. Features a rooftop restaurant with city views and fully accessible rooms with roll-in showers and grab bars.",
    amenities: [
      "WiFi",
      "Rooftop Restaurant",
      "Bar",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Business Center",
      "Parking",
      "Room Service",
      "Accessible Facilities",
    ],
    address: "Lang'ata Road, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "tamarind-tree",
      220,
      {
        standard: [
          "/paraplegic rooms (1).jpg",
          "/paraplegic rooms (4).jpg",
        ],
        accessibleStandard: [
          "/paraplegic rooms (1).jpg",
          "/paraplegic rooms (4).jpg",
        ],
      },
      true
    ),
    slug: "tamarind-tree-hotel",
    updatedAt: new Date(),
  },
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
    description:
      "Iconic Nairobi hotel with lush tropical gardens and a rich history dating back to 1965. Features wheelchair accessible rooms with roll-in showers and grab bars, just minutes from the city center.",
    amenities: [
      "WiFi",
      "Pool",
      "Restaurant",
      "Bar",
      "Garden",
      "Conference Facilities",
      "Parking",
      "Room Service",
      "Accessible Facilities",
    ],
    address: "Kenyatta Avenue, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "sarova-panafric",
      220,
      {
        standard: ["/unnamed (6).jpg", "/unnamed (2).jpg"],
        accessibleStandard: ["/OtXVWYZw.jpeg", "/btqCJF5g.jpeg"],
      },
      true
    ),
    slug: "sarova-panafric-hotel",
    updatedAt: new Date(),
    accessibilityFeatures: sarovaPanafricAccessibilityFeatures,
    accessibilityImages: sarovaPanafricAccessibilityImages,
  },
  {
    id: "amboseli-010",
    name: "Kibo Safari Camp",
    location: "Amboseli",
    rating: 4.5,
    price: 260,
    image: "/unnamed(7).jpg",
    gallery: [
      "/unnamed (8).jpg",
      "/unnamed (9).jpg",
      "/2025-12-10.jpg",
      "/2025-12-11.jpg",
    ],
    description:
      "Part of the prestigious Kibo Collection, this boutique hotel offers personalized service, elegant accommodations, and a tranquil garden setting. Fully wheelchair accessible with roll-in showers and wide doorways.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Garden",
      "Airport Transfers",
      "Room Service",
      "Conference Facilities",
      "Parking",
      "Spa",
      "Accessible Facilities",
    ],
    address: "Muthaiga, Nairobi, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "kibo-collection",
      260,
      {
        standard: ["/unnamed.webp", "/2025-12-10 (1).jpg", "/unnamed (11).jpg"],
        accessibleStandard: [
          "/WhatsApp Image 2026-03-07 at 09.32.25.jpeg",
          "/unnamed (10).jpg",
        ],
      },
      true
    ),
    slug: "kibo-safari-camp",
    updatedAt: new Date(),
  },

  // ========== NAIVASHA HOTELS ==========
  {
    id: "naivasha-001",
    name: "Lake Naivasha Crescent Camp",
    location: "Naivasha",
    rating: 4.7,
    price: 320,
    image: "/cresentlake.avif?height=300&width=400",
    gallery: [
      "/crehero1.jpeg?height=400&width=600",
      "/crehero2.jpeg?height=400&width=600",
      "/crehero3.jpeg?height=400&width=600",
      "/crehero4.jpg?height=400&width=600",
    ],
    description:
      "Luxury tented camp on Lake Naivasha shores with stunning lake views and excellent wildlife viewing.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Lake Activities",
      "Safari Drives",
      "Spa",
      "Lounge",
      "Room Service",
    ],
    address: "Lake Naivasha, P.O. Box 1000",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "naivasha-001",
      320,
      {
        standard: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"],
        deluxe: ["/creroom1.jpg", "/creroom2.jpg", "/creroom3.avif"],
      },
      false
    ),
    slug: "lake-naivasha-crescent-camp",
    updatedAt: new Date(),
  },
  {
    id: "naivasha-002",
    name: "Naivasha Serena Camp",
    location: "Naivasha",
    rating: 4.6,
    price: 300,
    image: "/serenacamp.jpg?height=300&width=400",
    gallery: [
      "/sehero1.jpg?height=400&width=600",
      "/sehero2.avif?height=400&width=600",
      "/sehero3.jpg?height=400&width=600",
      "/sehero4.jpg?height=400&width=600",
    ],
    description:
      "All-inclusive tented camp with authentic safari experience and exceptional hospitality.",
    amenities: [
      "Meals Included",
      "Safari Drives",
      "Lake Activities",
      "Fireplace",
      "Bar",
      "Spa",
      "Photography",
      "WiFi",
    ],
    address: "Lake Naivasha",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "naivasha-002",
      300,
      {
        standard: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"],
        deluxe: ["/seroom1.jpg", "/seroom2.jpg", "/seroom3.jpg"],
      },
      false
    ),
    slug: "naivasha-serena-camp",
    updatedAt: new Date(),
  },
  {
    id: "naivasha-003",
    name: "Hells Gate Game Lodge",
    location: "Naivasha",
    rating: 4.5,
    price: 280,
    image: "/hellsgate.jpeg?height=300&width=400",
    gallery: [
      "/gahero1.avif?height=400&width=600",
      "/gahero2.jpg?height=400&width=600",
      "/gahero3.jpg?height=400&width=600",
      "/gahero4.jpeg?height=400&width=600",
    ],
    description:
      "Game lodge near Hell's Gate National Park with excellent safari opportunities and friendly atmosphere.",
    amenities: [
      "Restaurant",
      "Bar",
      "Safari Drives",
      "Hiking",
      "Rock Climbing",
      "Parking",
      "WiFi",
      "Room Service",
    ],
    address: "Hell's Gate National Park, Naivasha",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "naivasha-003",
      280,
      {
        standard: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"],
        deluxe: ["/garoom1.jpeg", "/garoom2.jpg", "/garoom3.webp"],
      },
      false
    ),
    slug: "hells-gate-game-lodge",
    updatedAt: new Date(),
  },
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
      "/unnamed (49).webp",
    ],
    description:
      "Family-friendly resort on the shores of Lake Naivasha with beautiful gardens, swimming pool and easy access to boat rides, bird watching and Hell's Gate National Park.",
    amenities: [
      "WiFi",
      "Pool",
      "Restaurant",
      "Bar",
      "Boat Rides",
      "Conference Facilities",
      "Gardens",
    ],
    address: "Lake Naivasha, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "naivasha-sopa",
      280,
      {
        standard: [
          "/unnamed (51).webp",
          "/unnamed (57).webp",
          "/unnamed (50).webp",
        ],
        accessibleStandard: [
          "/unnamed (54).webp",
          "/unnamed (56).webp",
        ],
      },
      true
    ),
    slug: "lake-naivasha-sopa-resort",
    updatedAt: new Date(),
  },
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
      "/unnamed (62).webp",
    ],
    description:
      "Comfortable mid-range lodge with lake proximity, good facilities and convenient base for Hell's Gate, Crescent Island and boat safaris.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Pool",
      "Lake Activities",
      "Parking",
    ],
    address: "Lake Naivasha, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "naivasha-simba",
      220,
      {
        standard: [
          "/unnamed (65).webp",
          "/unnamed (69).webp",
          "/unnamed (70).webp",
        ],
        accessibleStandard: [
          "/unnamed (68).webp",
          "/unnamed (70).webp",
        ],
      },
      true
    ),
    slug: "lake-naivasha-simba-lodge",
    updatedAt: new Date(),
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
      "/unnamed (75).webp",
    ],
    description:
      "Modern resort-style property on Lake Naivasha with multiple dining options, swimming pool and easy access to boat rides and bird watching.",
    amenities: [
      "WiFi",
      "Pool",
      "Multiple Restaurants",
      "Bar",
      "Boat Safaris",
      "Conference Rooms",
    ],
    address: "Lake Naivasha, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "naivasha-resort",
      260,
      {
        standard: [
          "/2025-10-29 (3).webp",
          "/IMG_1385.webp",
          "/unnamed (72).webp",
        ],
        accessibleStandard: [
          "/2025-10-29 (2).webp",
          "/unnamed (73).webp",
        ],
      },
      true
    ),
    slug: "lake-naivasha-resort",
    updatedAt: new Date(),
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
      "/2025-05-15.webp",
    ],
    description:
      "Luxury resort on the shores of Lake Naivasha offering elegant rooms, a full-service spa, multiple dining options, and excellent facilities for relaxation, conferences, and lake activities. Features wheelchair accessible rooms with roll-in showers and grab bars.",
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
      "Accessible Facilities",
    ],
    address: "Lake Naivasha, Naivasha, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "enashipai",
      320,
      {
        standard: ["/2024-06-04.webp"],
        accessibleStandard: ["/2025-08-07 (1).webp", "/unnamed (78).webp"],
      },
      true
    ),
    slug: "enashipai-resort-spa",
    updatedAt: new Date(),
  },

  // ========== NAKURU HOTELS ==========
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
    description:
      "Charming lodge with wildlife-themed decor and convenient location near Lake Nakuru National Park.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Garden",
      "Parking",
      "Room Service",
      "Meeting Rooms",
      "TV",
    ],
    address: "Lake Road, Nakuru",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-003",
      260,
      {
        standard: [
          "/lake-elementaita-mountain (1).jpg",
          "/bb73af1f.avif",
          "/lake-elementaita-mountain (2).jpg",
        ],
        deluxe: [
          "/lake-elementaita-mountain (1).jpg",
          "/bb73af1f.avif",
          "/lake-elementaita-mountain (2).jpg",
        ],
      },
      false
    ),
    slug: "lake-elementaita-mountain-lounge",
    updatedAt: new Date(),
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
    description:
      "Budget-friendly hotel with basic amenities and good service.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Parking",
      "Room Service",
      "TV",
      "Air Conditioning",
      "Garden",
    ],
    address: "Gishagi Road, Nakuru",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-004",
      200,
      {
        standard: [
          "/master-bedroom-family.jpg",
          "/guest-room-standard.jpg",
          "/guest-bathroom.jpg",
        ],
        deluxe: [
          "/master-bedroom-family.jpg",
          "/guest-room-deluxe.jpg",
          "/guest-bathroom-deluxe.jpg",
        ],
      },
      false
    ),
    slug: "menengai-crater-guest-house",
    updatedAt: new Date(),
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
    description:
      "Hotel with scenic views and comfortable rooms overlooking Nakuru town.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Views",
      "Parking",
      "Room Service",
      "Garden",
      "TV",
    ],
    address: "Nakuru Town",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-005",
      210,
      {
        standard: [
          "/photo0jpg.jpg",
          "/photo1jpg.jpg",
          "/hotel-panorama-resort (3).jpg",
        ],
        deluxe: [
          "/panorama-deluxe-1.jpg",
          "/panorama-deluxe-2.jpg",
          "/panorama-deluxe-bathroom.jpg",
        ],
      },
      false
    ),
    slug: "hotel-panorama-resort",
    updatedAt: new Date(),
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
    description:
      "Nature-themed lodge celebrating Nakuru's famous flamingos with comfortable accommodations.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Pool",
      "Bar",
      "Garden",
      "Parking",
      "Room Service",
      "TV",
    ],
    address: "Lake Nakuru Road",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-006",
      240,
      {
        standard: ["/photo6jpg.jpg", "/photo2jpg.jpg", "/photo3jpg.jpg"],
        deluxe: [
          "/flamingo-deluxe-1.jpg",
          "/flamingo-deluxe-2.jpg",
          "/flamingo-deluxe-bathroom.jpg",
        ],
      },
      false
    ),
    slug: "lake-nakuru-flamingo-lodge",
    updatedAt: new Date(),
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
    description:
      "Lodge within Lake Nakuru National Park boundaries with direct wildlife access.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Safari Drives",
      "Parking",
      "Room Service",
      "Garden",
      "Guides",
    ],
    address: "Lake Nakuru National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-007",
      220,
      {
        standard: [
          "/lake-nakuru-lodge (2).jpg",
          "/photo1jpg.jpg",
          "/20180210-125019-largejpg.jpg",
        ],
        deluxe: [
          "/a-customized-zebra-room.jpg",
          "/photo5jpg.jpg",
          "/lake-nakuru-lodge (9).jpg",
        ],
      },
      false
    ),
    slug: "lake-nakuru-lodge",
    updatedAt: new Date(),
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
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Parking",
      "Room Service",
      "TV",
      "Air Conditioning",
      "Garden",
    ],
    address: "Kenyatta Avenue",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-008",
      170,
      {
        standard: ["/caption (4).jpg", "/caption (6).jpg", "/caption (5).jpg"],
        deluxe: [
          "/inspired-destinations.jpg",
          "/rock-hyrax-deluxe-2.jpg",
          "/rock-hyrax-deluxe-bathroom.jpg",
        ],
      },
      false
    ),
    slug: "rock-hyrax-hotel",
    updatedAt: new Date(),
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
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Parking",
      "Room Service",
      "TV",
      "Air Conditioning",
    ],
    address: "Nakuru Center",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-009",
      150,
      {
        standard: ["/caption (7).jpg", "/caption (9).jpg", "/ziwa-bush-lodge.jpg"],
        deluxe: [
          "/ziwa-bush-deluxe-1.jpg",
          "/ziwa-bush-deluxe-2.jpg",
          "/ziwa-bush-deluxe-bathroom.jpg",
        ],
      },
      false
    ),
    slug: "ziwa-bush-lodge",
    updatedAt: new Date(),
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
    description:
      "3-star hotel with excellent facilities and convenient location.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Pool",
      "Bar",
      "Garden",
      "Parking",
      "Room Service",
      "TV",
    ],
    address: "Kenyatta Road",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-010",
      190,
      {
        standard: [
          "/lake-nakuru-sopa-lodge (3).jpg",
          "/lake-nakuru-sopa-lodge (4).jpg",
          "/20171211-135815-hdr-largejpg.jpg",
        ],
        deluxe: [
          "/sopa-lodge-deluxe-1.jpg",
          "/sopa-lodge-deluxe-2.jpg",
          "/sopa-lodge-deluxe-bathroom.jpg",
        ],
      },
      false
    ),
    slug: "lake-nakuru-sopa-lodge",
    updatedAt: new Date(),
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
    description:
      "Modern 3-star hotel with safari-themed design and quality facilities.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Pool",
      "Bar",
      "Garden",
      "Parking",
      "Room Service",
      "Gym",
    ],
    address: "Nakuru",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "nakuru-011",
      215,
      {
        standard: [
          "/buffalo-cottage (1).jpg",
          "/punda-milias-house-living.jpg",
          "/bathroom-at-banda.jpg",
        ],
        deluxe: [
          "/punda-milias-deluxe-1.jpg",
          "/punda-milias-deluxe-2.jpg",
          "/punda-milias-deluxe-bathroom.jpg",
        ],
      },
      false
    ),
    slug: "punda-milias-nakuru-camp",
    updatedAt: new Date(),
  },
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
    description:
      "Set within Lake Nakuru National Park, this stunning lodge offers breathtaking views of the lake and flamingos. Features wheelchair accessible rooms with roll-in showers and grab bars, plus accessible pathways throughout the property.",
    amenities: [
      "WiFi",
      "Pool",
      "Restaurant",
      "Bar",
      "Safari Drives",
      "Spa",
      "Gift Shop",
      "Parking",
      "Accessible Facilities",
    ],
    address: "Lake Nakuru National Park, Nakuru, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "sarova-lion-hill",
      320,
      {
        standard: [
          "/Honeymoon Suite.webp",
          "/Bathroom.webp",
        ],
        accessibleStandard: [
          "/Sarova Lion Hill - Differently abled room 1.jpg",
          "/Bathroom.webp",
        ],
      },
      true
    ),
    slug: "sarova-lion-hill-game-lodge",
    updatedAt: new Date(),
  },
  {
    id: "nakuru-013",
    name: "Sarova Woodlands Hotel & Spa",
    location: "Nakuru",
    rating: 4.6,
    price: 280,
    image: "/Sarova-Woodlands-Nakuru.webp",
    gallery: [
      "/unnamed (6).webp",
      "/unnamed(7).webp",
      "/unnamed (8).webp",
      "/unnamed (9).webp",
      "/unnamed (10).webp",
    ],
    description:
      "A tranquil retreat in the heart of Nakuru, offering luxurious accommodations and a full-service spa. Fully wheelchair accessible with roll-in showers, wide doorways, and accessible public areas.",
    amenities: [
      "WiFi",
      "Pool",
      "Spa",
      "Restaurant",
      "Bar",
      "Conference Facilities",
      "Parking",
      "Room Service",
      "Accessible Facilities",
    ],
    address: "Nakuru - Eldoret Road, Nakuru, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "sarova-woodlands",
      280,
      {
        standard: [
          "/Sarova Woodlands - Woodlands differently abled room 1.jpg",
          "/Sarova Woodlands - Woodlands differently abled room 6.jpg",
        ],
        accessibleStandard: [
          "/Sarova Woodlands - Woodlands differently abled room 1.jpg",
          "/Sarova Woodlands - Woodlands differently abled room 6.jpg",
        ],
      },
      true
    ),
    slug: "sarova-woodlands-hotel-spa",
    updatedAt: new Date(),
  },
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
      "/room-5-view.jpg",
    ],
    description:
      "Well-positioned lodge near Lake Nakuru National Park offering flamingo views, comfortable rooms and good facilities for bird watching and game drives.",
    amenities: [
      "WiFi",
      "Pool",
      "Restaurant",
      "Bar",
      "Game Drives",
      "Bird Watching",
    ],
    address: "Lake Nakuru vicinity, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "nakuru-sopa",
      290,
      {
        standard: [
          "/lake-nakuru-sopa-lodge (7).jpg",
          "/lake-nakuru-sopa-lodge (8).jpg",
          "/lake-nakuru-sopa-lodge (11).jpg",
        ],
        accessibleStandard: [
          "/lake-nakuru-sopa-lodge (9).jpg",
          "/lake-nakuru-sopa-lodge (11).jpg",
        ],
      },
      true
    ),
    slug: "lake-nakuru-sopa-lodge",
    updatedAt: new Date(),
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
      "/unnamed (60).webp",
    ],
    description:
      "Classic lodge with direct access to Lake Nakuru National Park, featuring waterhole views and good opportunities for game viewing and photography.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Game Drives",
      "Parking",
      "Room Service",
    ],
    address: "Lake Nakuru National Park, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "nakuru-lodge",
      240,
      {
        standard: [
          "/Lake Nakuru Lodge (25).webp",
          "/Lake Nakuru Lodge (88).webp",
          "/paraplegic rooms (4).jpg",
        ],
        accessibleStandard: [
          "/Lake Nakuru Lodge (27).webp",
          "/unnamed (58).webp",
        ],
      },
      true
    ),
    slug: "lake-nakuru-lodge-nakuru",
    updatedAt: new Date(),
  },

  // ========== KISUMU HOTELS ==========
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
    description:
      "Overlooking Lake Victoria, this elegant hotel offers stunning lakeside views and modern amenities. Features wheelchair accessible rooms with roll-in showers and grab bars, with easy access to Kisumu's attractions.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Lake Views",
      "Conference Facilities",
      "Parking",
      "Room Service",
      "Accessible Facilities",
    ],
    address: "Jomo Kenyatta Highway, Kisumu, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "sarova-imperial",
      210,
      {
        standard: [
          "/Sarova Imperial - Differently_abled Room 1.jpg",
          "/Sarova imperial - Differently_abled Room 14.jpg",
        ],
        accessibleStandard: [
          "/Sarova Imperial - Differently_abled Room 1.jpg",
          "/Sarova imperial - Differently_abled Room 14.jpg",
        ],
      },
      true
    ),
    slug: "sarova-imperial-hotel",
    updatedAt: new Date(),
  },

  // ========== MOMBASA HOTELS ==========
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
    description:
      "Mombasa's premier beach resort, set on miles of pristine white sand along the Indian Ocean. Fully wheelchair accessible with roll-in showers, grab bars, accessible pathways, and beach wheelchairs available for guests with mobility needs.",
    amenities: [
      "WiFi",
      "Multiple Pools",
      "Spa",
      "Several Restaurants",
      "Bars",
      "Water Sports",
      "Kids Club",
      "Parking",
      "Accessible Facilities",
      "Beach Wheelchairs",
    ],
    address: "Bamburi Beach, Mombasa, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "sarova-whitesands",
      350,
      {
        standard: [
          "/Sarova Whitesands - Palm room 1.jpg",
          "/Sarova Whitesands - Paraplegic room 1.jpg",
        ],
        accessibleStandard: [
          "/Sarova Whitesands - Palm room 1.jpg",
          "/Sarova Whitesands - Paraplegic room 1.jpg",
        ],
      },
      true
    ),
    slug: "sarova-whitesands-beach-resort-spa",
    updatedAt: new Date(),
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
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: false,
    accessibleRoomCount: 0,
    rooms: createRooms(
      "samburu-001",
      400,
      {
        standard: [
          "/samburu-intrepids-luxury (2).jpg",
          "/samburu-intrepids-luxury.jpg",
          "/samburu-intrepids-luxury (1).jpg",
        ],
        deluxe: [
          "/samburu-intrepids-luxury (2).jpg",
          "/samburu-intrepids-luxury.jpg",
          "/samburu-intrepids-luxury (1).jpg",
        ],
      },
      false
    ),
    slug: "samburu-intrepids-tented-camp",
    updatedAt: new Date(),
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
    description:
      "Well-positioned lodge with excellent game viewing near Buffalo Springs.",
    amenities: [
      "Safari Drives",
      "Restaurant",
      "Bar",
      "Parking",
      "Room Service",
      "WiFi",
      "Photography",
      "Guides",
    ],
    address: "Buffalo Springs, Samburu",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "samburu-005",
      280,
      {
        standard: [
          "/ashnil-samburu-camp (2).jpg",
          "/ashnil-samburu-camp (3).jpg",
          "/ashnil-samburu-camp (4).jpg",
        ],
        accessibleStandard: [
          "/ashnil-samburu-camp (2).jpg",
          "/ashnil-samburu-camp (3).jpg",
        ],
      },
      true
    ),
    slug: "ashnil-samburu-camp",
    updatedAt: new Date(),
  },

  // ========== NANYUKI HOTELS ==========
  {
    id: "nanyuki-012",
    name: "Sweetwaters Tented Camp",
    location: "Nanyuki",
    rating: 4.7,
    price: 380,
    image: "/sweetwaters-tented-camp-main.jpg?height=300&width=400",
    gallery: [
      "/sweetwaters-tented-camp-1.jpg?height=400&width=600",
      "/sweetwaters-tented-camp-2.jpg?height=400&width=600",
      "/sweetwaters-tented-camp-pool.jpg?height=400&width=600",
      "/sweetwaters-tented-camp-dining.jpg?height=400&width=600",
      "/sweetwaters-tented-camp-tent-interior.jpg?height=400&width=600",
    ],
    description:
      "Luxury tented camp located within the Ol Pejeta Conservancy, offering exceptional wildlife viewing with a private waterhole and stunning views of Mount Kenya. Experience the magic of staying in the heart of the wilderness with all the comforts of a premium safari lodge.",
    amenities: [
      "WiFi",
      "Restaurant",
      "Bar",
      "Swimming Pool",
      "Parking",
      "Room Service",
      "24hr Security",
      "Waterhole Viewing Deck",
      "Gift Shop",
      "Laundry Service",
      "Spa",
      "Game Drives",
      "Night Game Drives",
      "Chimpanzee Sanctuary Visits",
    ],
    address: "Ol Pejeta Conservancy, Nanyuki",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/embed/e7nG3BHKKtc",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "nanyuki-012",
      380,
      {
        standard: [
          "/sweetwaters-tent-standard-1.jpg",
          "/sweetwaters-tent-standard-2.jpg",
          "/sweetwaters-tent-standard-interior.jpg",
        ],
        accessibleStandard: [
          "/sweetwaters-tent-standard-1.jpg",
          "/sweetwaters-tent-standard-2.jpg",
        ],
      },
      true
    ),
    slug: "sweetwaters-tented-camp",
    updatedAt: new Date(),
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
    description:
      "Luxury lodge with stunning Mount Kilimanjaro views and exceptional wildlife experiences.",
    amenities: [
      "Safari Drives",
      "Restaurant",
      "Bar",
      "Pool",
      "Photography",
      "WiFi",
      "Spa",
      "Guides",
    ],
    address: "Amboseli National Park",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "amboseli-001",
      420,
      {
        standard: [
          "/ol-tukai-new-rooms.jpg",
          "/reception (1).jpg",
          "/ol-tukai-lodge (3).jpg",
        ],
        accessibleStandard: [
          "/ol-tukai-new-rooms.jpg",
          "/reception (1).jpg",
        ],
      },
      true
    ),
    slug: "ol-tukai-lodge-amboseli",
    updatedAt: new Date(),
  },

  // ========== MAASAI MARA HOTELS ==========
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
    description:
      "Luxury tented camp located along the Talek River in the Maasai Mara Conservancy. Excellent for game viewing, river access and frequent wildlife sightings directly from camp.",
    amenities: [
      "WiFi",
      "Game Drives",
      "All Meals",
      "River Views",
      "Bar",
      "Bush Walks",
      "Photography",
      "Guides",
    ],
    address: "Talek River, Maasai Mara Conservancy, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "ashnil-mara",
      420,
      {
        standard: ["/unnamed (23).webp"],
        accessibleStandard: ["/unnamed (26).webp", "/unnamed (25).webp"],
      },
      true
    ),
    slug: "ashnil-mara-camp",
    updatedAt: new Date(),
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
      "/2024-08-07 (2).webp",
    ],
    description:
      "Intimate eco-conscious bush camp in a private concession area of the Maasai Mara offering authentic experiences, excellent guiding and a low-impact design.",
    amenities: [
      "All-Inclusive",
      "Game Drives",
      "Walking Safaris",
      "Bush Meals",
      "Bar",
      "Eco-friendly",
      "Guides",
    ],
    address: "Maasai Mara Conservancy, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "soroi-mara-bush",
      480,
      {
        standard: ["/soroi-mara-standard.jpg"],
        accessibleStandard: ["/unnamed (27).webp"],
      },
      true
    ),
    slug: "soroi-mara-bush-camp",
    updatedAt: new Date(),
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
      "/unnamed (30).webp",
    ],
    description:
      "Classic luxury tented camp with timeless elegance, superb service and a prime location ideal for witnessing the Great Migration river crossings.",
    amenities: [
      "All-Inclusive",
      "Game Drives",
      "Hot Air Balloon",
      "Fine Dining",
      "Spa",
      "Bar",
      "Guides",
    ],
    address: "Maasai Mara National Reserve, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "soroi-larsens",
      520,
      {
        standard: ["/2024-07-12 (3).webp"],
        accessibleStandard: ["/unnamed (34).webp"],
      },
      true
    ),
    slug: "soroi-larsens-camp-mara",
    updatedAt: new Date(),
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
      "/unnamed (38).webp",
    ],
    description:
      "Exclusive private wing within Mara Serena Safari Lodge offering ultimate privacy, personalized service and panoramic views of the Mara plains.",
    amenities: [
      "Private Butler",
      "All-Inclusive",
      "Game Drives",
      "Private Dining",
      "Spa Treatments",
      "Infinity Pool",
      "WiFi",
    ],
    address: "Mara Serena Safari Lodge, Maasai Mara National Reserve",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "mara-serena-private",
      680,
      {
        standard: [
          "/mbcp_tents-52 (1).webp",
          "/2025-01-13 (2).webp",
        ],
        accessibleStandard: [
          "/2025-01-13 (3).webp",
          "/2025-01-13 (2).webp",
        ],
      },
      true
    ),
    slug: "soroi-private-wing",
    updatedAt: new Date(),
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
      "/2025-12-10 (3).webp",
    ],
    description:
      "Contemporary eco-lodge featuring stylish tents, an infinity pool with Mara views, and excellent game viewing in a private conservancy setting.",
    amenities: [
      "WiFi",
      "Infinity Pool",
      "Game Drives",
      "Walking Safaris",
      "Restaurant",
      "Bar",
      "Spa",
    ],
    address: "Maasai Mara Conservancy, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "mara-maisha",
      450,
      {
        standard: [
          "/unnamed (44).webp",
          "/unnamed (40).webp",
          "/unnamed (41).webp",
        ],
        accessibleStandard: [
          "/2025-12-10 (4).webp",
          "/unnamed (42).webp",
        ],
      },
      true
    ),
    slug: "mara-maisha",
    updatedAt: new Date(),
  },
  // ========== MAASAI MARA HOTELS ==========
// ANGAMA MARA (LUXURY - NON-ACCESSIBLE)
{
  id: "maasai-mara-009",
  name: "Angama Mara",
  location: "Maasai Mara",
  rating: 4.9,
  price: 1250,
  image: "/angama-mara.jpg?height=300&width=400",
  gallery: [
    "/angama-mara-1.jpg",
    "/angama-mara-2.jpg",
    "/angama-mara-3.jpg",
    "/angama-mara-4.jpg",
  ],
  description: "Perched on the Oloololo Escarpment overlooking the Mara Triangle, Angama Mara offers unparalleled views of the Great Rift Valley and the Maasai Mara below. This award-winning lodge features 30 tented suites, each with floor-to-ceiling glass walls, private decks, and exceptional service. Experience hot air balloon safaris, bush dinners, and authentic Maasai cultural encounters.",
  amenities: [
    "Infinity Pool",
    "Spa",
    "Fitness Center",
    "Photography Studio",
    "Boutique",
    "Restaurant",
    "Bar",
    "Hot Air Balloon Safaris",
    "Maasai Cultural Experiences",
    "Private Vehicle Options",
    "WiFi",
    "Butler Service",
  ],
  address: "Oloololo Escarpment, Maasai Mara National Reserve, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: false,
  accessibleRoomCount: 0,
  rooms: createRooms(
    "angama-mara",
    1250,
    {
      standard: ["/angama-standard-1.jpg", "/angama-standard-2.jpg"],
      deluxe: ["/angama-deluxe-1.jpg", "/angama-deluxe-2.jpg"],
    },
    false
  ),
  slug: "angama-mara",
  updatedAt: new Date(),
},

// ========== AMBOSELI/CHYULU HILLS HOTELS ==========
// OL DONYO LODGE (LUXURY - ACCESSIBLE)
{
  id: "amboseli-007",
  name: "Ol Donyo Lodge",
  location: "Amboseli",
  rating: 4.9,
  price: 980,
  image: "/ol-donyo-lodge.jpg?height=300&width=400",
  gallery: [
    "/ol-donyo-1.jpg",
    "/ol-donyo-2.jpg",
    "/ol-donyo-3.jpg",
    "/ol-donyo-4.jpg",
  ],
  description: "Spectacular lodge in the Chyulu Hills with breathtaking views of Mount Kilimanjaro. Ol Donyo offers an exclusive safari experience with private plunge pools, horseback safaris, and star beds for sleeping under the African sky. Features wheelchair accessible suites with roll-in showers, wide doorways, and accessible pathways throughout the property.",
  amenities: [
    "Private Plunge Pools",
    "Horseback Safaris",
    "Star Beds",
    "Gym",
    "Spa",
    "Free WiFi",
    "Restaurant",
    "Bar",
    "Mount Kilimanjaro Views",
    "Game Drives",
    "Walking Safaris",
    "Accessible Facilities",
  ],
  address: "Chyulu Hills, Amboseli Region, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 2,
  videoUrl: "https://www.youtube.com/watch?v=YOUR_OL_DONYO_VIDEO_ID",
  rooms: createRooms(
    "ol-donyo",
    980,
    {
      standard: ["/ol-donyo-standard-1.jpg", "/ol-donyo-standard-2.jpg"],
      accessibleStandard: ["/ol-donyo-accessible-1.jpg", "/ol-donyo-accessible-2.jpg"],
    },
    true
  ),
  slug: "ol-donyo-lodge",
  updatedAt: new Date(),
},

// ========== TSAVO WEST HOTELS ==========
// FINCH HATTONS (LUXURY - ACCESSIBLE)
{
  id: "tsavo-west-007",
  name: "Finch Hattons",
  location: "Tsavo West",
  rating: 4.8,
  price: 850,
  image: "/finch-hattons.jpg?height=300&width=400",
  gallery: [
    "/finch-hattons-1.jpg",
    "/finch-hattons-2.jpg",
    "/finch-hattons-3.jpg",
    "/finch-hattons-4.jpg",
  ],
  description: "Luxury oasis in the heart of Tsavo West National Park, set around a natural spring that attracts abundant wildlife. Finch Hattons offers exquisite tented suites, a world-class spa, and exceptional dining experiences. Fully wheelchair accessible with roll-in showers, grab bars, and accessible pathways to the spring and restaurant areas. Named after the legendary explorer Denys Finch Hattons.",
  amenities: [
    "Private Spring-Fed Pools",
    "Spa",
    "Tennis Court",
    "Wine Cellar",
    "Butler Service",
    "Gym",
    "Free WiFi",
    "Restaurant",
    "Bar",
    "Game Drives",
    "Bird Watching",
    "Nature Walks",
    "Accessible Facilities",
  ],
  address: "Tsavo West National Park, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 2,
  videoUrl: "https://www.youtube.com/watch?v=YOUR_FINCH_HATTONS_VIDEO_ID",
  rooms: createRooms(
    "finch-hattons",
    850,
    {
      standard: ["/finch-standard-1.jpg", "/finch-standard-2.jpg"],
      accessibleStandard: ["/finch-accessible-1.jpg", "/finch-accessible-2.jpg"],
    },
    true
  ),
  slug: "finch-hattons",
  updatedAt: new Date(),
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
      "/Standard-Room-Exterior.webp",
    ],
    description:
      "Classic full-service lodge located inside the Maasai Mara National Reserve with direct waterhole views, swimming pool and reliable game drives.",
    amenities: [
      "WiFi",
      "Pool",
      "Game Drives",
      "Restaurant",
      "Bar",
      "Bush Breakfast",
      "Guides",
    ],
    address: "Keekorok, Maasai Mara National Reserve, Kenya",
    phone: "+254 726 485 228",
    email: "info@jaetravel.co.ke",
    accessible: true,
    accessibleRoomCount: 2,
    videoUrl: "https://www.youtube.com/watch?v=YOUR_SWEETWATERS_VIDEO_ID",
    // OR USE EMBED URL:
    // videoEmbedUrl: "https://www.youtube.com/embed/YOUR_SWEETWATERS_VIDEO_ID",
    rooms: createRooms(
      "keekorok",
      340,
      {
        standard: [
          "/KKL-PS-Double-Room.webp",
          "/unnamed (45).webp",
          "/KKL-Standard-Bath.webp",
        ],
        accessibleStandard: [
          "/KKL-Chalet-Interior.webp",
          "/KKL-Premium-5.webp",
        ],
      },
      true
    ),
    slug: "keekorok-lodge",
    updatedAt: new Date(),
  },

  // ========== NAIVASHA HOTELS ==========
// MUTHU LAKE NAIVASHA COUNTRY CLUB (LUXURY - ACCESSIBLE)
{
  id: "naivasha-008",
  name: "Muthu Lake Naivasha Country Club",
  location: "Naivasha",
  rating: 4.5,
  price: 280,
  image: "/muthu-lake-naivasha.jpg?height=300&width=400",
  gallery: [
    "/muthu-country-club-1.jpg",
    "/muthu-country-club-2.jpg",
    "/muthu-country-club-3.jpg",
    "/muthu-country-club-4.jpg",
    "/muthu-country-club-5.jpg",
    "/muthu-country-club-6.jpg",
  ],
  description: "Set on the shores of Lake Naivasha, this elegant country club offers a perfect blend of colonial charm and modern comfort. Surrounded by lush gardens and offering stunning lake views, Muthu Lake Naivasha Country Club features spacious rooms, a swimming pool, tennis courts, and easy access to boat rides on Lake Naivasha. The property is fully wheelchair accessible with roll-in showers, grab bars, and accessible pathways throughout the gardens and common areas.",
  amenities: [
    "WiFi",
    "Swimming Pool",
    "Restaurant",
    "Bar & Lounge",
    "Tennis Courts",
    "Boat Rides on Lake Naivasha",
    "Bird Watching",
    "Garden Views",
    "Conference Facilities",
    "Parking",
    "Room Service",
    "24-hour Security",
    "Accessible Facilities",
    "Roll-in Showers",
    "Grab Bars",
  ],
  address: "Moi South Lake Road, Lake Naivasha, Kenya",
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessible: true,
  accessibleRoomCount: 3,
  videoUrl: "https://www.youtube.com/watch?v=nQGygChTgZk",
  rooms: createRooms(
    "muthu-naivasha",
    280,
    {
      standard: [
        "/muthu-standard-1.jpg",
        "/muthu-standard-2.jpg",
        "/muthu-standard-3.jpg",
      ],
      accessibleStandard: [
        "/muthu-standard-1.jpg",
        "/muthu-accessible-2.jpg",
        "/muthu-accessible-bathroom.jpg",
      ],
    },
    true
  ),
  slug: "muthu-lake-naivasha-country-club",
  updatedAt: new Date(),
},
].map(addAccessibilityData);

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
  },
];