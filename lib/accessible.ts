// lib/accessible.ts

export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  gallery?: string[];  // NEW: Additional gallery images for the photo gallery
  rating: number;
  price: number;
  amenities: string[];
  rooms: Room[];
  accessible: boolean;
  phone?: string;
  email?: string;
  accessibilityFeatures?: AccessibilityFeature[];
  accessibilityImages?: {
    bathroom?: string[];
    room?: string[];
    entrance?: string[];
    restaurant?: string[];
    shower?: string[];
    sink?: string[];
    pool?: string[];
    garden?: string[];
  };
  videoUrl?: string;
  videoEmbedUrl?: string;
}

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
  accessibilityFeatures?: string[]; // simple list for quick display

  // Detailed form-style accessibility data
  detailedAccessibility?: {
    bedHeight?: string;
    freeSpaceUnderBed?: boolean;
    mattressFirm?: boolean;
    mirrorHeightFromFloor?: string;
    deskHeight?: string;
    freeSpaceUnderDesk?: boolean;
    chairHasArmrestBackrestCushion?: boolean;
    otherNotes?: string;
  };
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface AccessibilityFeature {
  id: string;
  category: 'bathroom' | 'room' | 'entrance' | 'restaurant' | 'parking' | 'elevator' | 'pool' | 'furniture';
  title: string;
  description: string;
  measurements?: string;
  icon?: string;
  image?: string;
  yesNo?: 'Yes' | 'No';
  value?: string;
  note?: string;
}

// ============================================================================
// 1. CROWNE PLAZA NAIROBI AIRPORT
// ============================================================================
const crownePlazaAccessibility: AccessibilityFeature[] = [
  { id: 'crowne-entrance-1', category: 'entrance', title: 'Main Entrance', description: 'Automatic sliding doors with 42" width. Level access from covered drop-off area.', measurements: 'Door width: 42"', image: '/chero1.jpeg' },
  { id: 'crowne-room-1', category: 'room', title: 'Doorway', description: 'Main door width: 36". Bedroom door width: 34". Lever handles.', measurements: 'Door width: 34"-36"', image: '/crowneroom1.jpg' },
  { id: 'crowne-room-2', category: 'room', title: 'Space Under Bed', description: 'Bed height: 23". Clearance under bed: 9" for lift access.', measurements: 'Bed height: 23" | Clearance: 9"', image: '/crowneroom2.jpg' },
  { id: 'crowne-bathroom-1', category: 'bathroom', title: 'Roll-in Shower', description: 'Zero-threshold entry. Roll-in shower with grab bars and handheld showerhead.', measurements: 'Shower area: 60" x 36"', image: '/WhatsApp Image 2026-03-11 at 3.11.03 PM (2).jpeg' },
  { id: 'crowne-bathroom-2', category: 'bathroom', title: 'Shower Seat', description: 'Fixed fold-down seat at 18" height. Portable shower stool available.', measurements: 'Seat height: 18"', image: '/WhatsApp Image 2026-03-11 at 3.11.03 PM (1).jpeg' }
];

export const crownePlazaNairobi: Hotel = {
  id: "nairobi-002",
  name: "Crowne Plaza Nairobi Airport by IHG",
  location: "Nairobi",
  description: "Premium 5-star hotel conveniently located at Jomo Kenyatta International Airport. Features wheelchair accessible rooms with roll-in showers and grab bars. Perfect for transit passengers or those with early flights, featuring soundproofed rooms, 24-hour dining, and complimentary airport shuttle.",
  image: "/CrownePlazaNairobi.jpg",
  gallery: [
    "/CrownePlazaNairobi.jpg",
    "/crowneroom1.jpg",
    "/crowneroom2.jpg",
    "/crowneroom3.jpg",
    "/chero1.jpeg",
    "/chero2.webp",
    "/chero4.jpg",
    "/WhatsApp Image 2026-03-11 at 3.11.03 PM (1).jpeg",
    "/WhatsApp Image 2026-03-11 at 3.11.03 PM (2).jpeg"
  ],
  rating: 4.6,
  price: 280,
  amenities: ["WiFi", "Pool", "Fitness Center", "Multiple Restaurants", "Bar", "Spa", "Airport Shuttle", "24-hour Reception", "Business Center", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: crownePlazaAccessibility,
  accessibilityImages: {
    bathroom: ['/WhatsApp Image 2026-03-11 at 3.11.03 PM (1).jpeg', '/WhatsApp Image 2026-03-11 at 3.11.03 PM (2).jpeg'],
    room: ['/crowneroom1.jpg', '/crowneroom2.jpg', '/crowneroom3.jpg'],
    entrance: ['/chero1.jpeg', '/chero2.webp'],
    restaurant: ['/chero4.jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_CROWNE_PLAZA_VIDEO_ID",
  rooms: [
    {
      id: "crowne-accessible-1",
      type: "Accessible Standard Room",
      description: "Comfortable accessible room with roll-in shower and grab bars. Soundproofed for airport convenience.",
      price: 238,
      maxOccupancy: 2,
      available: 3,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Work Desk", "Accessible Features"],
      images: ['/crowneroom1.jpg', '/crowneroom2.jpg', '/crowneroom3.jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Space under bed for lift access", "Shower seat (fold-down)", "Emergency call system"],
      detailedAccessibility: {
        bedHeight: "23 in",
        freeSpaceUnderBed: true,
        otherNotes: "Clearance under bed: 9\""
      }
    }
  ]
};

// ============================================================================
// 2. TAMARIND TREE HOTEL (nairobi-014)
// ============================================================================
const tamarindAccessibility: AccessibilityFeature[] = [
  { id: 'tamarind-entrance-1', category: 'entrance', title: 'Main Entrance', description: 'Step-free access via ramp. Automatic sliding doors.', measurements: 'Door width: 42"', image: '/unnamed.jpg', yesNo: 'Yes' },
  { id: 'tamarind-room-1', category: 'room', title: 'Doorway', description: 'Main door width: 34". Bedroom door width: 34". Lever handles.', measurements: 'Door width: 34"', image: '/paraplegic rooms (1).jpg', yesNo: 'Yes' },
  { id: 'tamarind-bathroom-1', category: 'bathroom', title: 'Roll-in Shower', description: 'Roll-in shower available with grab bars and handheld showerhead.', measurements: 'Shower area: 58" x 34"', image: '/paraplegic rooms (4).jpg', yesNo: 'Yes' }
];

export const tamarindTree: Hotel = {
  id: "nairobi-014",
  name: "Tamarind Tree Hotel",
  location: "Nairobi",
  description: "Modern hotel offering comfortable accommodations with a blend of contemporary style and African charm. Features a rooftop restaurant with city views and fully accessible rooms with roll-in showers and grab bars.",
  image: "/2025-10-15.jpg",
  gallery: [
    "/2025-10-15.jpg",
    "/paraplegic rooms (1).jpg",
    "/paraplegic rooms (4).jpg",
    "/unnamed.jpg",
    "/TAMARIND TREE 3-5.jpg",
    "/TAMARIND TREE 3-10.jpg"
  ],
  rating: 4.4,
  price: 220,
  amenities: ["WiFi", "Rooftop Restaurant", "Bar", "Swimming Pool", "Fitness Center", "Spa", "Business Center", "Parking", "Room Service", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: tamarindAccessibility,
  accessibilityImages: {
    bathroom: ['/paraplegic rooms (4).jpg'],
    room: ['/paraplegic rooms (1).jpg'],
    entrance: ['/unnamed.jpg', '/TAMARIND TREE 3-5.jpg'],
    restaurant: ['/TAMARIND TREE 3-10.jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_TAMARIND_TREE_VIDEO_ID",
  rooms: [
    {
      id: "tamarind-accessible-1",
      type: "Accessible Deluxe Room",
      description: "Spacious accessible room with roll-in shower and modern amenities.",
      price: 187,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Work Desk", "Accessible Features"],
      images: ['/paraplegic rooms (1).jpg', '/paraplegic rooms (4).jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Space under bed for lift access", "Emergency call system"],
      detailedAccessibility: {
        otherNotes: "Roll-in shower entrance: 58\" wide"
      }
    }
  ]
};

// ============================================================================
// 3. SAROVA PANAFRIC HOTEL (nairobi-015)
// ============================================================================
const sarovaPanafricAccessibility: AccessibilityFeature[] = [
  { id: 'sarova-panafric-entrance-1', category: 'entrance', title: 'Main Entrance', description: 'Step-free access with ramp. Automatic doors.', measurements: 'Door width: 42"', image: '/2026-01-28.jpg', yesNo: 'Yes' },
  { id: 'sarova-panafric-room-1', category: 'room', title: 'Doorway', description: 'Main door width: 34". Bedroom door width: 34". Lever handles.', measurements: 'Door width: 34"', image: '/unnamed (6).jpg', yesNo: 'Yes' },
  { id: 'sarova-panafric-bathroom-1', category: 'bathroom', title: 'Roll-in Shower', description: 'Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide', measurements: 'Shower entrance: 58" | Cubicle: 37"L x 58"W', image: '/btqCJF5g.jpeg', yesNo: 'Yes' }
];

export const sarovaPanafric: Hotel = {
  id: "nairobi-015",
  name: "Sarova Panafric Hotel",
  location: "Nairobi",
  description: "Iconic Nairobi hotel with lush tropical gardens and a rich history dating back to 1965. Features wheelchair accessible rooms with roll-in showers and grab bars, just minutes from the city center.",
  image: "/2026-01-28.jpg",
  gallery: [
    "/2026-01-28.jpg",
    "/2026-01-28 (1).jpg",
    "/unnamed (6).jpg",
    "/unnamed (2).jpg",
    "/OtXVWYZw.jpeg",
    "/btqCJF5g.jpeg",
    "/unnamed (3).jpg",
    "/unnamed (4).jpg",
    "/unnamed (5).jpg"
  ],
  rating: 4.5,
  price: 220,
  amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Garden", "Conference Facilities", "Parking", "Room Service", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: sarovaPanafricAccessibility,
  accessibilityImages: {
    bathroom: ['/OtXVWYZw.jpeg', '/btqCJF5g.jpeg'],
    room: ['/unnamed (6).jpg', '/unnamed (2).jpg'],
    entrance: ['/2026-01-28.jpg', '/2026-01-28 (1).jpg'],
    restaurant: ['/unnamed (3).jpg', '/unnamed (4).jpg', '/unnamed (5).jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SAROVA_PANAFRIC_VIDEO_ID",
  rooms: [
    {
      id: "sarova-panafric-accessible-1",
      type: "Accessible Standard Room",
      description: "Comfortable accessible room with roll-in shower and grab bars.",
      price: 187,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Accessible Features"],
      images: ['/unnamed (6).jpg', '/unnamed (2).jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Space under bed for lift access", "Emergency call system"],
      detailedAccessibility: {
        otherNotes: "Shower cubicle: 37\"L x 58\"W, entrance 58\""
      }
    }
  ]
};

// ============================================================================
// 4. KIBO SAFARI CAMP (amboseli-010)
// ============================================================================
const kiboAccessibility: AccessibilityFeature[] = [
  { id: 'kibo-entrance-1', category: 'entrance', title: 'Main Entrance', description: 'Ramped access to main lodge. Wooden ramp with non-slip surface.', measurements: 'Ramp width: 42"', image: '/unnamed(7).jpg', yesNo: 'Yes' },
  { id: 'kibo-room-1', category: 'room', title: 'Tent Entrance', description: 'Tent entrance: 36" wide. Easy-open zipper system.', measurements: 'Door width: 36"', image: '/unnamed.webp', yesNo: 'Yes' },
  { id: 'kibo-bathroom-1', category: 'bathroom', title: 'Roll-in Shower', description: 'Roll-in shower available with grab bars.', measurements: 'Shower area: 60" x 36"', image: '/WhatsApp Image 2026-03-07 at 09.32.25.jpeg', yesNo: 'Yes' }
];

export const kiboSafariCamp: Hotel = {
  id: "amboseli-010",
  name: "Kibo Safari Camp",
  location: "Amboseli",
  description: "Part of the prestigious Kibo Collection, this boutique hotel offers personalized service, elegant accommodations, and a tranquil garden setting. Fully wheelchair accessible with roll-in showers and wide doorways.",
  image: "/unnamed(7).jpg",
  gallery: [
    "/unnamed(7).jpg",
    "/unnamed (8).jpg",
    "/unnamed (9).jpg",
    "/unnamed.webp",
    "/2025-12-10 (1).jpg",
    "/unnamed (11).jpg",
    "/WhatsApp Image 2026-03-07 at 09.32.25.jpeg",
    "/2025-12-10.jpg"
  ],
  rating: 4.5,
  price: 260,
  amenities: ["WiFi", "Restaurant", "Bar", "Garden", "Airport Transfers", "Room Service", "Conference Facilities", "Parking", "Spa", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: kiboAccessibility,
  accessibilityImages: {
    bathroom: ['/WhatsApp Image 2026-03-07 at 09.32.25.jpeg'],
    room: ['/unnamed.webp', '/2025-12-10 (1).jpg', '/unnamed (11).jpg'],
    entrance: ['/unnamed(7).jpg', '/unnamed (8).jpg', '/unnamed (9).jpg'],
    restaurant: ['/unnamed (8).jpg', '/2025-12-10.jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_KIBO_COLLECTION_VIDEO_ID",
  rooms: [
    {
      id: "kibo-accessible-1",
      type: "Accessible Safari Tent",
      description: "Spacious accessible tent with roll-in shower and stunning views.",
      price: 221,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Ensuite Bathroom", "Safe", "Coffee Maker", "Private Veranda", "Accessible Features"],
      images: ['/unnamed.webp', '/2025-12-10 (1).jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Space under bed for lift access", "Accessible game drive vehicle"],
      detailedAccessibility: {
        bedHeight: "Approx 24 in",
        freeSpaceUnderBed: true
      }
    }
  ]
};

// ============================================================================
// 5. SWEETWATERS TENTED CAMP (nanyuki-012)
// ============================================================================
const sweetwatersAccessibility: AccessibilityFeature[] = [
  { id: 'sweetwaters-entrance-1', category: 'entrance', title: 'Main Entrance', description: 'Step-free access via wooden ramp. Reception desk with lowered section.', measurements: 'Ramp gradient: 1:12', image: '/sweetwaters-tented-camp-main.jpg', yesNo: 'Yes' },
  { id: 'sweetwaters-room-1', category: 'room', title: 'Tent Entrance', description: 'Wide doorway with level entry. Door width: 36". Lever handle.', measurements: 'Door width: 36"', image: '/sweetwaters-tented-camp-1.jpg', yesNo: 'Yes' },
  { id: 'sweetwaters-bathroom-1', category: 'bathroom', title: 'Roll-in Shower', description: 'Wet room style roll-in shower with zero threshold.', measurements: 'Shower area: 48" x 60"', image: '/sweetwaters-tented-camp-2.jpg', yesNo: 'Yes' }
];

export const sweetwatersTentedCamp: Hotel = {
  id: "nanyuki-012",
  name: "Sweetwaters Tented Camp",
  location: "Nanyuki",
  description: "Luxury tented camp located within the Ol Pejeta Conservancy, offering exceptional wildlife viewing with a private waterhole and stunning views of Mount Kenya.",
  image: "/sweetwaters-tented-camp-main.jpg",
  gallery: [
    "/sweetwaters-tented-camp-main.jpg",
    "/sweetwaters-tented-camp-1.jpg",
    "/sweetwaters-tented-camp-2.jpg",
    "/sweetwaters-tented-camp-tent-interior.jpg",
    "/sweetwaters-tented-camp-dining.jpg"
  ],
  rating: 4.7,
  price: 380,
  amenities: ["WiFi", "Restaurant", "Bar", "Swimming Pool", "Parking", "Room Service", "Waterhole Viewing Deck", "Spa", "Game Drives", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: sweetwatersAccessibility,
  accessibilityImages: {
    bathroom: ['/sweetwaters-tented-camp-2.jpg'],
    room: ['/sweetwaters-tented-camp-1.jpg', '/sweetwaters-tented-camp-tent-interior.jpg'],
    entrance: ['/sweetwaters-tented-camp-main.jpg'],
    restaurant: ['/sweetwaters-tented-camp-dining.jpg']
  },
  videoUrl: "https://www.youtube.com/embed/e7nG3BHKKtc",
  rooms: [
    {
      id: "sweetwaters-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible tent with wider doorways, roll-in shower, and grab bars.",
      price: 323,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Private Veranda", "Ensuite Bathroom", "Mosquito Net", "Seating Area", "Safe", "Accessible Features"],
      images: ['/sweetwaters-tent-standard-1.jpg', '/sweetwaters-tent-standard-2.jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Space under bed for lift access", "Accessible safari vehicle available"],
      detailedAccessibility: {
        otherNotes: "Wet room style roll-in shower"
      }
    }
  ]
};

// ============================================================================
// 6. MUTHU LAKE NAIVASHA COUNTRY CLUB (naivasha-008) — FULLY UPDATED FROM YOUR FORMS
// ============================================================================
const muthuNaivashaAccessibility: AccessibilityFeature[] = [
  {
    id: 'muthu-naivasha-entrance-1',
    category: 'entrance',
    title: 'Main Entrance & Room Door',
    description: 'Step-free entrance. Zero threshold. Lever handle.',
    measurements: 'Door width: 34" | Door height clearance: 25"',
    yesNo: 'Yes',
    image: '/muthu-entrance-1.jpg'
  },
  {
    id: 'muthu-naivasha-room-bed-1',
    category: 'room',
    title: 'Heights of Bed',
    description: 'Bed height from floor to top of mattress.',
    measurements: '25 inches',
    yesNo: 'Yes',
    note: 'Free space under bed for hoist/lift access',
    image: '/muthu-room-1.jpg'
  },
  {
    id: 'muthu-naivasha-room-mattress-1',
    category: 'room',
    title: 'Mattress Firmness',
    description: 'Is the mattress firm?',
    yesNo: 'Yes',
    note: 'Suitable for transfers and support'
  },
  {
    id: 'muthu-naivasha-room-mirror-1',
    category: 'room',
    title: 'Mirror Height',
    description: 'How many inches is the mirror from the floor',
    value: 'from floor',
    note: 'Lowered mirror for wheelchair/seated accessibility'
  },
  {
    id: 'muthu-naivasha-room-desk-1',
    category: 'furniture',
    title: 'Height of the Desk',
    description: 'Desk height with clear knee space underneath.',
    measurements: '24 inches',
    yesNo: 'Yes',
    image: '/muthu-room-1.jpg'
  },
  {
    id: 'muthu-naivasha-room-chair-1',
    category: 'furniture',
    title: 'Chair Features',
    description: 'Does the chair have an armrest, backrest and cushioned seating?',
    yesNo: 'Yes'
  },
  {
    id: 'muthu-naivasha-bathroom-1',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Spacious roll-in shower with zero threshold.',
    measurements: 'Shower area: 60" x 42"',
    image: '/muthu-bathroom-1.jpg'
  }
];

export const muthuLakeNaivashaCountryClub: Hotel = {
  id: "naivasha-008",
  name: "Muthu Lake Naivasha Country Club",
  location: "Naivasha",
  description: "Set on the shores of Lake Naivasha, this elegant country club offers colonial charm and modern comfort. The accessible room has been surveyed with precise measurements: bed height 25\" with free space underneath, firm mattress, desk at 24\" with knee clearance, lowered mirror, and supportive chair with armrest, backrest & cushion.",
  image: "/muthu-lake-naivasha.jpg",
  gallery: [
    "/muthu-country-club-1.jpg",
    "/muthu-country-club-2.jpg",
    "/muthu-country-club-3.jpg",
    "/muthu-country-club-4.jpg",
    "/muthu-country-club-5.jpg",
    "/muthu-country-club-6.jpg",
  ],
  rating: 4.5,
  price: 280,
  amenities: ["WiFi", "Swimming Pool", "Restaurant", "Bar & Lounge", "Tennis Courts", "Boat Rides", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: muthuNaivashaAccessibility,
  accessibilityImages: {
    bathroom: ['/muthu-bathroom-1.jpg'],
    room: ['/muthu-room-1.jpg', '/muthu-room-2.jpg'],
    entrance: ['/muthu-entrance-1.jpg'],
    restaurant: ['/muthu-restaurant-1.jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=nQGygChTgZk",
  rooms: [
    {
      id: "muthu-naivasha-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with detailed mobility features: 25\" bed height with free space underneath, firm mattress, 24\" desk with under-desk clearance, accessible mirror from floor level, and chair with armrest, backrest & cushioned seating.",
      price: 238,
      maxOccupancy: 2,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features", "Garden View"],
      images: ['/muthu-accessible-1.jpg', '/muthu-accessible-2.jpg'],
      accessible: true,
      accessibilityFeatures: [
        "Step-free entrance with zero threshold",
        "Door width: 34\"",
        "Bed height: 25\" with free space under bed",
        "Firm mattress",
        "Desk height: 24\" with knee clearance",
        "Lowered mirror (from floor level)",
        "Chair with armrest, backrest and cushioned seating",
        "Roll-in shower"
      ],
      detailedAccessibility: {
        bedHeight: "25 in",
        freeSpaceUnderBed: true,
        mattressFirm: true,
        mirrorHeightFromFloor: "from floor",
        deskHeight: "24 inches",
        freeSpaceUnderDesk: true,
        chairHasArmrestBackrestCushion: true,
        otherNotes: "All measurements confirmed via on-site Jotform accessibility survey."
      }
    }
  ]
};

// ============================================================================
// 7. SAROVA LION HILL GAME LODGE (nakuru-012)
// ============================================================================
const sarovaLionHillAccessibility: AccessibilityFeature[] = [
  { id: 'lionhill-entrance-1', category: 'entrance', title: 'Main Entrance', description: 'Ramped access to main lodge. Wooden ramp with handrails.', measurements: 'Ramp width: 42"', image: '/unnamed (1).webp', yesNo: 'Yes' },
  { id: 'lionhill-room-1', category: 'room', title: 'Doorway', description: 'Wider doorways for accessibility.', measurements: 'Door width: 34"', image: '/Honeymoon Suite.webp', yesNo: 'Yes' },
  { id: 'lionhill-bathroom-1', category: 'bathroom', title: 'Roll-in Shower', description: 'Roll-in shower with grab bars and shower seat.', measurements: 'Shower area: 60" x 36"', image: '/Bathroom.webp', yesNo: 'Yes' }
];

export const sarovaLionHill: Hotel = {
  id: "nakuru-012",
  name: "Sarova Lion Hill Game Lodge",
  location: "Nakuru",
  description: "Set within Lake Nakuru National Park, this stunning lodge offers breathtaking views of the lake and flamingos. Features wheelchair accessible rooms with roll-in showers and grab bars.",
  image: "/unnamed (1).webp",
  gallery: [
    "/lionhill.jpg",
    "/lionhil2.jpg",
    "/lionhil3.jpg",
  ],
  rating: 4.7,
  price: 320,
  amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Safari Drives", "Spa", "Gift Shop", "Parking", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: sarovaLionHillAccessibility,
  accessibilityImages: {
    bathroom: ['/Bathroom.webp'],
    room: ['/Honeymoon Suite.webp', '/Sarova Lion Hill - Differently abled room 1.jpg'],
    entrance: ['/unnamed (1).webp', '/unnamed (2).webp'],
    restaurant: ['/unnamed (4).webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SAROVA_LION_HILL_VIDEO_ID",
  rooms: [
    {
      id: "lionhill-accessible-1",
      type: "Accessible Room",
      description: "Comfortable accessible room with roll-in shower and lake views.",
      price: 272,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Balcony", "Accessible Features"],
      images: ['/Sarova Lion Hill - Differently abled room 1.jpg', '/Bathroom.webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Space under bed for lift access", "Emergency call system"],
      detailedAccessibility: {
        otherNotes: "Shower seat available"
      }
    }
  ]
};

const praroAmboseliAccessibility: AccessibilityFeature[] = [
  { id: 'poraro-entrance-1', category: 'entrance', title: 'Main Entrance', description: 'Ramped access to main camp area and reception. Compacted gravel pathway.', measurements: 'Path width: 48"', image: '/poraro-amboseli-entrance-1.jpg', yesNo: 'Yes' },
  { id: 'poraro-bathroom-1', category: 'bathroom', title: 'Roll-in Shower', description: 'Roll-in shower with grab bars and portable shower seat.', measurements: 'Shower area: 54" x 36"', image: '/poraro-amboseli-bathroom-1.jpg', yesNo: 'Yes' },
  { id: 'poraro-pathways-1', category: 'room', title: 'Camp Pathways', description: 'Compacted gravel pathways connecting tents to main areas.', measurements: 'Width: 48" • Compacted surface', image: '/poraro-amboseli-pathways-1.jpg', yesNo: 'Yes' },
  { id: 'poraro-game-drive-1', category: 'room', title: 'Accessible Safari Vehicle', description: 'Modified safari vehicle with ramp for wheelchair boarding.', measurements: 'Ramp width: 32"', image: '/poraro-amboseli-game-drive-1.jpg', yesNo: 'Yes' }
];

export const praroAmboseliCamp: Hotel = {
  id: "amboseli-014",
  name: "Poraro Amboseli Camp",
  location: "Amboseli",
  description: "Set against the majestic backdrop of Mount Kilimanjaro, Poraro Amboseli Camp offers an authentic safari experience with accessible tented accommodations. Features wide tent openings, roll-in showers with grab bars, modified safari vehicles, and compacted gravel pathways throughout the camp.",
  image: "/poraro-amboseli-tent-1.jpg",
  gallery: [
    "/poraro-amboseli-tent-1.jpg",
    "/poraro-amboseli-dining-1.jpg",
    "/poraro-amboseli-pathways-1.jpg",
    "/poraro-amboseli-game-drive-1.jpg"
  ],
  rating: 4.5,
  price: 250,
  amenities: ["WiFi (Common Areas)", "Restaurant", "Bar", "Safari Drives", "Campfire", "Gift Shop", "Parking", "Accessible Facilities", "Solar Power"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: praroAmboseliAccessibility,
  accessibilityImages: {
    bathroom: ['/poraro-amboseli-bathroom-1.jpg'],
    room: ['/poraro-amboseli-tent-1.jpg'],
    entrance: ['/poraro-amboseli-entrance-1.jpg'],
    restaurant: ['/poraro-amboseli-dining-1.jpg'],
  },
  videoUrl: "https://www.youtube.com/watch?v=7DGOo-s4cSw",
  rooms: [
    {
      id: "poraro-accessible-1",
      type: "Accessible Safari Tent",
      description: "Spacious tented room with wide openings, hardwood floors, and roll-in shower. Located close to main camp facilities for convenience.",
      price: 250,
      maxOccupancy: 2,
      available: 2,
      amenities: ["Mosquito Netting", "Door opens with levers", "En-suite Bathroom", "Roll-in Shower", "Grab Bars", "Portable Shower Chair", "Veranda", "Bottled Water", "Solar Lighting"],
      images: ['/poraro-amboseli-tent-1.jpg', '/poraro-amboseli-bathroom-1.jpg'],
      accessible: true,
      accessibilityFeatures: ["Wide tent opening (42 inches / 107cm)","Heigh of table from ground (28 inches)","Height of mirror from bed (9 inches)", "Roll-in shower with grab bars", "Portable shower seat available", "Hardwood floor with low-pile rug", "Bed height at 23 inches (standard chair height)", "Clear turning radius of 60 inches", "Emergency call system"],
      detailedAccessibility: {
        otherNotes: "Accessible safari vehicles available upon request. Staff trained to assist with accessibility needs."
      }
    }
  ]
};

// ============================================================================
// 8. SAROVA WOODLANDS HOTEL & SPA (nakuru-013)
// ============================================================================
const woodlandsAccessibility: AccessibilityFeature[] = [
  { id: "woodlands-1", category: "room", title: "Wide Doorways", description: "Door width: 34\"", measurements: "34\"", image: "/Sarova Woodlands - Woodlands differently abled room 1.jpg", yesNo: 'Yes' },
  { id: "woodlands-2", category: "bathroom", title: "Roll-in Shower", description: "Roll-in shower with grab bars", measurements: "60\" x 36\"", image: "/Sarova Woodlands - Woodlands differently abled room 6.jpg", yesNo: 'Yes' }
];

export const sarovaWoodlands: Hotel = {
  id: "nakuru-013",
  name: "Sarova Woodlands Hotel & Spa",
  location: "Nakuru",
  description: "A tranquil retreat in the heart of Nakuru, offering luxurious accommodations and a full-service spa. Fully wheelchair accessible with roll-in showers, wide doorways, and accessible public areas.",
  image: "/Sarova-Woodlands-Nakuru.webp",
  gallery: [
    "/Sarova-Woodlands-Nakuru.webp",
    "/Sarova Woodlands - Woodlands differently abled room 1.jpg",
    "/Sarova Woodlands - Woodlands differently abled room 6.jpg",
    "/unnamed (6).webp",
    "/unnamed (8).webp"
  ],
  rating: 4.6,
  price: 280,
  amenities: ["WiFi", "Pool", "Spa", "Restaurant", "Bar", "Conference Facilities", "Parking", "Room Service", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: woodlandsAccessibility,
  accessibilityImages: {
    bathroom: ['/Sarova Woodlands - Woodlands differently abled room 6.jpg'],
    room: ['/Sarova Woodlands - Woodlands differently abled room 1.jpg'],
    entrance: ['/unnamed (6).webp'],
    restaurant: ['/unnamed (8).webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SAROVA_WOODLANDS_VIDEO_ID",
  rooms: [
    {
      id: "woodlands-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and grab bars.",
      price: 238,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Accessible Features"],
      images: ['/Sarova Woodlands - Woodlands differently abled room 1.jpg', '/Sarova Woodlands - Woodlands differently abled room 6.jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Space under bed for lift access"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 9. SAROVA IMPERIAL HOTEL (kisumu-001)
// ============================================================================
const imperialAccessibility: AccessibilityFeature[] = [
  { id: "imperial-1", category: "room", title: "Wide Doorways", description: "Door width: 34\"", measurements: "34\"", image: "/Sarova Imperial - Differently_abled Room 1.jpg", yesNo: 'Yes' },
  { id: "imperial-2", category: "bathroom", title: "Roll-in Shower", description: "Roll-in shower with grab bars", measurements: "58\" x 34\"", image: "/Sarova imperial - Differently_abled Room 14.jpg", yesNo: 'Yes' }
];

export const sarovaImperial: Hotel = {
  id: "kisumu-001",
  name: "Sarova Imperial Hotel",
  location: "Kisumu",
  description: "Overlooking Lake Victoria, this elegant hotel offers stunning lakeside views and modern amenities. Features wheelchair accessible rooms with roll-in showers and grab bars.",
  image: "/2023-01-24.webp",
  gallery: [
    "/2023-01-24.webp",
    "/Sarova Imperial - Differently_abled Room 1.jpg",
    "/Sarova imperial - Differently_abled Room 14.jpg",
    "/unnamed (11).webp",
    "/2023-01-17.webp"
  ],
  rating: 4.5,
  price: 210,
  amenities: ["WiFi", "Restaurant", "Bar", "Lake Views", "Conference Facilities", "Parking", "Room Service", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: imperialAccessibility,
  accessibilityImages: {
    bathroom: ['/Sarova imperial - Differently_abled Room 14.jpg'],
    room: ['/Sarova Imperial - Differently_abled Room 1.jpg'],
    entrance: ['/unnamed (11).webp'],
    restaurant: ['/2023-01-17.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SAROVA_IMPERIAL_VIDEO_ID",
  rooms: [
    {
      id: "imperial-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and lake views.",
      price: 178.5,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Accessible Features"],
      images: ['/Sarova Imperial - Differently_abled Room 1.jpg', '/Sarova imperial - Differently_abled Room 14.jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Space under bed for lift access"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 10. SAROVA WHITESANDS BEACH RESORT & SPA (mombasa-001)
// ============================================================================
const whitesandsAccessibility: AccessibilityFeature[] = [
  { id: "whitesands-1", category: "room", title: "Wide Doorways", description: "Door width: 36\"", measurements: "36\"", image: "/Sarova Whitesands - Palm room 1.jpg", yesNo: 'Yes' },
  { id: "whitesands-2", category: "bathroom", title: "Roll-in Shower", description: "Roll-in shower with grab bars", measurements: "60\" x 36\"", image: "/Sarova Whitesands - Paraplegic room 1.jpg", yesNo: 'Yes' },
  { id: "whitesands-3", category: "pool", title: "Pool Lift", description: "Pool lift available for accessible entry", measurements: "Pool lift capacity: 400 lbs", image: "/Sarova Whitesands - Lidos 6.webp", yesNo: 'Yes' },
  { id: "whitesands-4", category: "entrance", title: "Beach Access", description: "Beach wheelchairs available for guests", measurements: "Beach wheelchair available", image: "/Sarova Whitesands - Exteriors (Pool) 8.webp", yesNo: 'Yes' }
];

export const sarovaWhitesands: Hotel = {
  id: "mombasa-001",
  name: "Sarova Whitesands Beach Resort & Spa",
  location: "Mombasa",
  description: "Mombasa's premier beach resort, set on miles of pristine white sand along the Indian Ocean. Fully wheelchair accessible with roll-in showers, grab bars, and beach wheelchairs available.",
  image: "/2026-03-09.webp",
  gallery: [
    "/2026-03-09.webp",
    "/Sarova Whitesands - Palm room 1.jpg",
    "/Sarova Whitesands - Paraplegic room 1.jpg",
    "/unnamed (16).webp",
    "/Sarova Whitesands - Lobby 6.webp",
    "/Sarova Whitesands - Lidos 6.webp",
    "/Sarova Whitesands - Exteriors (Pool) 8.webp"
  ],
  rating: 4.8,
  price: 350,
  amenities: ["WiFi", "Multiple Pools", "Spa", "Several Restaurants", "Bars", "Water Sports", "Kids Club", "Parking", "Accessible Facilities", "Beach Wheelchairs"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: whitesandsAccessibility,
  accessibilityImages: {
    bathroom: ['/Sarova Whitesands - Paraplegic room 1.jpg'],
    room: ['/Sarova Whitesands - Palm room 1.jpg'],
    entrance: ['/unnamed (16).webp'],
    restaurant: ['/Sarova Whitesands - Lobby 6.webp'],
    pool: ['/Sarova Whitesands - Lidos 6.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SAROVA_WHITESANDS_VIDEO_ID",
  rooms: [
    {
      id: "whitesands-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and ocean views.",
      price: 297.5,
      maxOccupancy: 2,
      available: 3,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Balcony", "Accessible Features"],
      images: ['/Sarova Whitesands - Palm room 1.jpg', '/Sarova Whitesands - Paraplegic room 1.jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Beach wheelchair available", "Pool lift available"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 11. ASHNIL SAMBURU CAMP (samburu-005)
// ============================================================================
const ashnilSamburuAccessibility: AccessibilityFeature[] = [
  { id: "ashnil-samburu-1", category: "room", title: "Tent Entrance", description: "Tent entrance: 36\" wide", measurements: "36\"", image: "/ashnil-samburu-camp (2).jpg", yesNo: 'Yes' },
  { id: "ashnil-samburu-2", category: "bathroom", title: "Roll-in Shower", description: "Roll-in shower with grab bars", measurements: "58\" x 34\"", image: "/ashnil-samburu-camp (3).jpg", yesNo: 'Yes' }
];

export const ashnilSamburu: Hotel = {
  id: "samburu-005",
  name: "Ashnil Samburu Camp",
  location: "Samburu",
  description: "Well-positioned lodge with excellent game viewing near Buffalo Springs. Features wheelchair accessible tents with roll-in showers and grab bars.",
  image: "/ashnil-samburu-camp.jpg",
  gallery: [
    "/ashnil-samburu-camp.jpg",
    "/ashnil-samburu-camp (1).jpg",
    "/ashnil-samburu-camp (2).jpg",
    "/ashnil-samburu-camp (3).jpg",
    "/ashnil-samburu-camp (5).jpg"
  ],
  rating: 4.3,
  price: 280,
  amenities: ["Safari Drives", "Restaurant", "Bar", "Parking", "Room Service", "WiFi", "Photography", "Guides", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: ashnilSamburuAccessibility,
  accessibilityImages: {
    bathroom: ['/ashnil-samburu-camp (3).jpg'],
    room: ['/ashnil-samburu-camp (2).jpg'],
    entrance: ['/ashnil-samburu-camp (1).jpg'],
    restaurant: ['/ashnil-samburu-camp (5).jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_ASHNIL_SAMBURU_VIDEO_ID",
  rooms: [
    {
      id: "ashnil-samburu-accessible-1",
      type: "Accessible Tent",
      description: "Spacious accessible tent with roll-in shower and grab bars.",
      price: 238,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Ensuite Bathroom", "Safe", "Private Veranda", "Accessible Features"],
      images: ['/ashnil-samburu-camp (2).jpg', '/ashnil-samburu-camp (3).jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 12. ASHNIL MARA CAMP (maasai-mara-010)
// ============================================================================
const ashnilMaraAccessibility: AccessibilityFeature[] = [
  { id: "ashnil-mara-1", category: "room", title: "Tent Entrance", description: "Tent entrance: 36\" wide", measurements: "36\"", image: "/unnamed (23).webp", yesNo: 'Yes' },
  { id: "ashnil-mara-2", category: "bathroom", title: "Roll-in Shower", description: "Roll-in shower with grab bars", measurements: "60\" x 36\"", image: "/unnamed (26).webp", yesNo: 'Yes' }
];

export const ashnilMara: Hotel = {
  id: "maasai-mara-010",
  name: "Ashnil Mara Camp",
  location: "Maasai Mara",
  description: "Luxury tented camp located along the Talek River. Excellent for game viewing with accessible tents featuring roll-in showers.",
  image: "/unnamed (18).webp",
  gallery: [
    "/unnamed (18).webp",
    "/unnamed (19).webp",
    "/unnamed (23).webp",
    "/unnamed (26).webp"
  ],
  rating: 4.6,
  price: 420,
  amenities: ["WiFi", "Game Drives", "All Meals", "River Views", "Bar", "Bush Walks", "Photography", "Guides", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: ashnilMaraAccessibility,
  accessibilityImages: {
    bathroom: ['/unnamed (26).webp'],
    room: ['/unnamed (23).webp'],
    entrance: ['/unnamed (18).webp', '/unnamed (19).webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_ASHNIL_MARA_VIDEO_ID",
  rooms: [
    {
      id: "ashnil-mara-accessible-1",
      type: "Accessible Tent",
      description: "Spacious accessible tent with roll-in shower and river views.",
      price: 357,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Ensuite Bathroom", "Safe", "Private Veranda", "Accessible Features"],
      images: ['/unnamed (23).webp', '/unnamed (26).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 13. SOROI MARA BUSH CAMP (maasai-mara-011)
// ============================================================================
const soroiMaraBushAccessibility: AccessibilityFeature[] = [
  { id: "soroi-bush-1", category: "room", title: "Tent Entrance", description: "Tent entrance: 36\" wide", measurements: "36\"", image: "/unnamed (27).webp", yesNo: 'Yes' }
];

export const soroiMaraBush: Hotel = {
  id: "maasai-mara-011",
  name: "Soroi Mara Bush Camp",
  location: "Maasai Mara",
  description: "Intimate eco-conscious bush camp in a private concession area. Features accessible tents with roll-in showers.",
  image: "/mbc_main-30 (1).webp",
  gallery: [
    "/mbc_main-30 (1).webp",
    "/2024-08-07.webp",
    "/Mara Bush Camp Exterior.webp",
    "/unnamed (27).webp"
  ],
  rating: 4.7,
  price: 480,
  amenities: ["All-Inclusive", "Game Drives", "Walking Safaris", "Bush Meals", "Bar", "Eco-friendly", "Guides", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: soroiMaraBushAccessibility,
  accessibilityImages: {
    bathroom: ['/unnamed (27).webp'],
    room: ['/2024-08-07.webp'],
    entrance: ['/Mara Bush Camp Exterior.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SOROI_MARA_BUSH_VIDEO_ID",
  rooms: [
    {
      id: "soroi-bush-accessible-1",
      type: "Accessible Tent",
      description: "Spacious accessible tent with roll-in shower.",
      price: 408,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Ensuite Bathroom", "Safe", "Private Veranda", "Accessible Features"],
      images: ['/2024-08-07.webp', '/unnamed (27).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 14. SOROI LARSENS CAMP (maasai-mara-012)
// ============================================================================
const soroiLarsensMaraAccessibility: AccessibilityFeature[] = [
  { id: "soroi-larsens-1", category: "room", title: "Tent Entrance", description: "Tent entrance: 36\" wide", measurements: "36\"", image: "/unnamed (34).webp", yesNo: 'Yes' }
];

export const soroiLarsensMara: Hotel = {
  id: "maasai-mara-012",
  name: "Soroi Larsens Camp",
  location: "Maasai Mara",
  description: "Classic luxury tented camp with timeless elegance. Features accessible tents with roll-in showers.",
  image: "/2024-07-12.webp",
  gallery: [
    "/2024-07-12.webp",
    "/2024-07-12 (3).webp",
    "/unnamed (34).webp"
  ],
  rating: 4.8,
  price: 520,
  amenities: ["All-Inclusive", "Game Drives", "Hot Air Balloon", "Fine Dining", "Spa", "Bar", "Guides", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: soroiLarsensMaraAccessibility,
  accessibilityImages: {
    bathroom: ['/unnamed (34).webp'],
    room: ['/2024-07-12 (3).webp'],
    entrance: ['/2024-07-12.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SOROI_LARSENS_VIDEO_ID",
  rooms: [
    {
      id: "soroi-larsens-accessible-1",
      type: "Accessible Tent",
      description: "Spacious accessible tent with roll-in shower.",
      price: 442,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Ensuite Bathroom", "Safe", "Private Veranda", "Accessible Features"],
      images: ['/2024-07-12 (3).webp', '/unnamed (34).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 15. SOROI PRIVATE WING (maasai-mara-013)
// ============================================================================
const soroiPrivateWingAccessibility: AccessibilityFeature[] = [
  { id: "private-wing-1", category: "room", title: "Suite Entrance", description: "Door width: 42\"", measurements: "42\"", image: "/2025-01-13 (3).webp", yesNo: 'Yes' }
];

export const soroiPrivateWing: Hotel = {
  id: "maasai-mara-013",
  name: "Soroi Private Wing",
  location: "Maasai Mara",
  description: "Exclusive private wing offering ultimate privacy and personalized service. Features luxury accessible suites.",
  image: "/unnamed (35).webp",
  gallery: [
    "/unnamed (35).webp",
    "/2025-01-13 (2).webp",
    "/2025-01-13 (3).webp"
  ],
  rating: 4.9,
  price: 680,
  amenities: ["Private Butler", "All-Inclusive", "Game Drives", "Private Dining", "Spa Treatments", "Infinity Pool", "WiFi", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: soroiPrivateWingAccessibility,
  accessibilityImages: {
    bathroom: ['/2025-01-13 (3).webp'],
    room: ['/2025-01-13 (2).webp'],
    entrance: ['/unnamed (35).webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_SOROI_PRIVATE_WING_VIDEO_ID",
  rooms: [
    {
      id: "private-wing-accessible-1",
      type: "Accessible Suite",
      description: "Luxury accessible suite with roll-in shower and private butler service.",
      price: 578,
      maxOccupancy: 2,
      available: 1,
      amenities: ["WiFi", "Ensuite Bathroom", "Mini Bar", "Safe", "Private Butler", "Accessible Features"],
      images: ['/2025-01-13 (2).webp', '/2025-01-13 (3).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Extra-wide doorways (42 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 16. MARA MAISHA (maasai-mara-014)
// ============================================================================
const maraMaishaAccessibility: AccessibilityFeature[] = [
  { id: "mara-maisha-1", category: "room", title: "Tent Entrance", description: "Tent entrance: 36\" wide", measurements: "36\"", image: "/2025-12-10 (4).webp", yesNo: 'Yes' }
];

export const maraMaisha: Hotel = {
  id: "maasai-mara-014",
  name: "Mara Maisha",
  location: "Maasai Mara",
  description: "Contemporary eco-lodge featuring stylish tents and an infinity pool. Features wheelchair accessible tents.",
  image: "/2025-12-10.webp",
  gallery: [
    "/2025-12-10.webp",
    "/unnamed (44).webp",
    "/2025-12-10 (4).webp"
  ],
  rating: 4.6,
  price: 450,
  amenities: ["WiFi", "Infinity Pool", "Game Drives", "Walking Safaris", "Restaurant", "Bar", "Spa", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: maraMaishaAccessibility,
  accessibilityImages: {
    bathroom: ['/2025-12-10 (4).webp'],
    room: ['/unnamed (44).webp'],
    entrance: ['/2025-12-10.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_MARA_MAISHA_VIDEO_ID",
  rooms: [
    {
      id: "mara-maisha-accessible-1",
      type: "Accessible Tent",
      description: "Spacious accessible tent with roll-in shower and infinity pool view.",
      price: 382.5,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Ensuite Bathroom", "Safe", "Private Veranda", "Accessible Features"],
      images: ['/unnamed (44).webp', '/2025-12-10 (4).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 17. KEEKOROK LODGE (maasai-mara-015)
// ============================================================================
const keekorokAccessibility: AccessibilityFeature[] = [
  { id: "keekorok-1", category: "room", title: "Room Entrance", description: "Door width: 34\"", measurements: "34\"", image: "/KKL-Chalet-Interior.webp", yesNo: 'Yes' }
];

export const keekorok: Hotel = {
  id: "maasai-mara-015",
  name: "Keekorok Lodge",
  location: "Maasai Mara",
  description: "Classic full-service lodge inside the Maasai Mara with waterhole views. Features accessible rooms with roll-in showers.",
  image: "/BOB04192_HDR.webp",
  gallery: [
    "/BOB04192_HDR.webp",
    "/KKL-PS-Double-Room.webp",
    "/KKL-Chalet-Interior.webp"
  ],
  rating: 4.4,
  price: 340,
  amenities: ["WiFi", "Pool", "Game Drives", "Restaurant", "Bar", "Bush Breakfast", "Guides", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: keekorokAccessibility,
  accessibilityImages: {
    bathroom: ['/KKL-Chalet-Interior.webp'],
    room: ['/KKL-PS-Double-Room.webp'],
    entrance: ['/BOB04192_HDR.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_KEEKOROK_VIDEO_ID",
  rooms: [
    {
      id: "keekorok-accessible-1",
      type: "Accessible Room",
      description: "Comfortable accessible room with roll-in shower and waterhole views.",
      price: 289,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Accessible Features"],
      images: ['/KKL-PS-Double-Room.webp', '/KKL-Chalet-Interior.webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 18. LAKE NAIVASHA SOPA RESORT (naivasha-004)
// ============================================================================
const naivashaSopaAccessibility: AccessibilityFeature[] = [
  { id: "naivasha-sopa-1", category: "room", title: "Room Entrance", description: "Door width: 34\"", measurements: "34\"", image: "/unnamed (54).webp", yesNo: 'Yes' }
];

export const naivashaSopa: Hotel = {
  id: "naivasha-004",
  name: "Lake Naivasha Sopa Resort",
  location: "Naivasha",
  description: "Family-friendly resort on the shores of Lake Naivasha. Features accessible rooms with roll-in showers.",
  image: "/2025-12-22.webp",
  gallery: [
    "/2025-12-22.webp",
    "/unnamed (51).webp",
    "/unnamed (54).webp"
  ],
  rating: 4.5,
  price: 280,
  amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Boat Rides", "Conference Facilities", "Gardens", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: naivashaSopaAccessibility,
  accessibilityImages: {
    bathroom: ['/unnamed (54).webp'],
    room: ['/unnamed (51).webp'],
    entrance: ['/2025-12-22.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_NAIVASHA_SOPA_VIDEO_ID",
  rooms: [
    {
      id: "naivasha-sopa-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and garden views.",
      price: 238,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features", "Garden View"],
      images: ['/unnamed (51).webp', '/unnamed (54).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Accessible boat rides"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 19. LAKE NAIVASHA SIMBA LODGE (naivasha-005)
// ============================================================================
const naivashaSimbaAccessibility: AccessibilityFeature[] = [
  { id: "naivasha-simba-1", category: "room", title: "Room Entrance", description: "Door width: 34\"", measurements: "34\"", image: "/unnamed (68).webp", yesNo: 'Yes' }
];

export const naivashaSimba: Hotel = {
  id: "naivasha-005",
  name: "Lake Naivasha Simba Lodge",
  location: "Naivasha",
  description: "Comfortable mid-range lodge with lake proximity. Features accessible rooms with roll-in showers.",
  image: "/unnamed (61).webp",
  gallery: [
    "/unnamed (61).webp",
    "/unnamed (65).webp",
    "/unnamed (68).webp"
  ],
  rating: 4.3,
  price: 220,
  amenities: ["WiFi", "Restaurant", "Bar", "Pool", "Lake Activities", "Parking", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: naivashaSimbaAccessibility,
  accessibilityImages: {
    bathroom: ['/unnamed (68).webp'],
    room: ['/unnamed (65).webp'],
    entrance: ['/unnamed (61).webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_NAIVASHA_SIMBA_VIDEO_ID",
  rooms: [
    {
      id: "naivasha-simba-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and garden views.",
      price: 187,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features", "Garden View"],
      images: ['/unnamed (65).webp', '/unnamed (68).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Accessible boat rides"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 20. LAKE NAIVASHA RESORT (naivasha-006)
// ============================================================================
const naivashaResortAccessibility: AccessibilityFeature[] = [
  { id: "naivasha-resort-1", category: "room", title: "Room Entrance", description: "Door width: 36\"", measurements: "36\"", image: "/2025-10-29 (2).webp", yesNo: 'Yes' }
];

export const naivashaResort: Hotel = {
  id: "naivasha-006",
  name: "Lake Naivasha Resort",
  location: "Naivasha",
  description: "Modern resort-style property with multiple dining options. Features accessible rooms with roll-in showers.",
  image: "/unnamed (71).webp",
  gallery: [
    "/unnamed (71).webp",
    "/2025-10-29 (3).webp",
    "/2025-10-29 (2).webp"
  ],
  rating: 4.4,
  price: 260,
  amenities: ["WiFi", "Pool", "Multiple Restaurants", "Bar", "Boat Safaris", "Conference Rooms", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: naivashaResortAccessibility,
  accessibilityImages: {
    bathroom: ['/2025-10-29 (2).webp'],
    room: ['/2025-10-29 (3).webp'],
    entrance: ['/unnamed (71).webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_NAIVASHA_RESORT_VIDEO_ID",
  rooms: [
    {
      id: "naivasha-resort-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and resort views.",
      price: 221,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features", "Pool View"],
      images: ['/2025-10-29 (3).webp', '/2025-10-29 (2).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible boat rides"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 21. ENASHIPAI RESORT & SPA (naivasha-007)
// ============================================================================
const enashipaiAccessibility: AccessibilityFeature[] = [
  { id: "enashipai-1", category: "room", title: "Room Entrance", description: "Door width: 36\"", measurements: "36\"", image: "/2025-08-07 (1).webp", yesNo: 'Yes' }
];

export const enashipai: Hotel = {
  id: "naivasha-007",
  name: "Enashipai Resort & Spa",
  location: "Naivasha",
  description: "Luxury resort on the shores of Lake Naivasha. Features wheelchair accessible rooms with roll-in showers.",
  image: "/2025-05-21.webp",
  gallery: [
    "/2025-05-21.webp",
    "/2024-06-04.webp",
    "/2025-08-07 (1).webp"
  ],
  rating: 4.6,
  price: 320,
  amenities: ["WiFi", "Multiple Pools", "Full-Service Spa", "Several Restaurants", "Bar & Lounge", "Conference Facilities", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: enashipaiAccessibility,
  accessibilityImages: {
    bathroom: ['/2025-08-07 (1).webp'],
    room: ['/2024-06-04.webp'],
    entrance: ['/2025-05-21.webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_ENASHIPAI_VIDEO_ID",
  rooms: [
    {
      id: "enashipai-accessible-1",
      type: "Accessible Room",
      description: "Luxury accessible room with roll-in shower and lake views.",
      price: 272,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Accessible Features"],
      images: ['/2024-06-04.webp', '/2025-08-07 (1).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible pool lift"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 22. LAKE NAKURU SOPA LODGE (nakuru-014)
// ============================================================================
const nakuruSopaLodgeAccessibility: AccessibilityFeature[] = [
  { id: "nakuru-sopa-1", category: "room", title: "Room Entrance", description: "Door width: 34\"", measurements: "34\"", image: "/lake-nakuru-sopa-lodge (9).jpg", yesNo: 'Yes' }
];

export const nakuruSopaLodge: Hotel = {
  id: "nakuru-014",
  name: "Lake Nakuru Sopa Lodge",
  location: "Nakuru",
  description: "Well-positioned lodge near Lake Nakuru offering flamingo views. Features accessible rooms with roll-in showers.",
  image: "/lake-nakuru-sopa-lodge (5).jpg",
  gallery: [
    "/lake-nakuru-sopa-lodge (5).jpg",
    "/lake-nakuru-sopa-lodge (7).jpg",
    "/lake-nakuru-sopa-lodge (9).jpg"
  ],
  rating: 4.4,
  price: 290,
  amenities: ["WiFi", "Pool", "Restaurant", "Bar", "Game Drives", "Bird Watching", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: nakuruSopaLodgeAccessibility,
  accessibilityImages: {
    bathroom: ['/lake-nakuru-sopa-lodge (9).jpg'],
    room: ['/lake-nakuru-sopa-lodge (7).jpg'],
    entrance: ['/lake-nakuru-sopa-lodge (5).jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_NAKURU_SOPA_VIDEO_ID",
  rooms: [
    {
      id: "nakuru-sopa-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and flamingo views.",
      price: 246.5,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features", "Lake View"],
      images: ['/lake-nakuru-sopa-lodge (7).jpg', '/lake-nakuru-sopa-lodge (9).jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 23. LAKE NAKURU LODGE (nakuru-015)
// ============================================================================
const nakuruLodgeAccessibility: AccessibilityFeature[] = [
  { id: "nakuru-lodge-1", category: "room", title: "Room Entrance", description: "Door width: 34\"", measurements: "34\"", image: "/Lake Nakuru Lodge (27).webp", yesNo: 'Yes' }
];

export const nakuruLodge: Hotel = {
  id: "nakuru-015",
  name: "Lake Nakuru Lodge",
  location: "Nakuru",
  description: "Classic lodge with direct access to Lake Nakuru National Park. Features accessible rooms with roll-in showers.",
  image: "/Lake Nakuru Lodge (35).webp",
  gallery: [
    "/Lake Nakuru Lodge (35).webp",
    "/Lake Nakuru Lodge (25).webp",
    "/Lake Nakuru Lodge (27).webp"
  ],
  rating: 4.3,
  price: 240,
  amenities: ["WiFi", "Restaurant", "Bar", "Game Drives", "Parking", "Room Service", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: nakuruLodgeAccessibility,
  accessibilityImages: {
    bathroom: ['/Lake Nakuru Lodge (27).webp'],
    room: ['/Lake Nakuru Lodge (25).webp'],
    entrance: ['/Lake Nakuru Lodge (35).webp']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_NAKURU_LODGE_VIDEO_ID",
  rooms: [
    {
      id: "nakuru-lodge-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and park views.",
      price: 204,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features", "Park View"],
      images: ['/Lake Nakuru Lodge (25).webp', '/Lake Nakuru Lodge (27).webp'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (34 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// 24. OL TUKAI LODGE AMBOSELI (amboseli-001)
// ============================================================================
const olTukaiAccessibility: AccessibilityFeature[] = [
  { id: "oltukai-1", category: "room", title: "Room Entrance", description: "Door width: 36\"", measurements: "36\"", image: "/ol-tukai-new-rooms.jpg", yesNo: 'Yes' }
];

export const olTukai: Hotel = {
  id: "amboseli-001",
  name: "Ol Tukai Lodge Amboseli",
  location: "Amboseli",
  description: "Luxury lodge with stunning Mount Kilimanjaro views. Features wheelchair accessible rooms with roll-in showers.",
  image: "/pool-area.jpg",
  gallery: [
    "/pool-area.jpg",
    "/reception (1).jpg",
    "/ol-tukai-new-rooms.jpg"
  ],
  rating: 4.8,
  price: 420,
  amenities: ["Safari Drives", "Restaurant", "Bar", "Pool", "Photography", "WiFi", "Spa", "Guides", "Accessible Facilities"],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: olTukaiAccessibility,
  accessibilityImages: {
    bathroom: ['/ol-tukai-new-rooms.jpg'],
    room: ['/reception (1).jpg'],
    entrance: ['/pool-area.jpg']
  },
  videoUrl: "https://www.youtube.com/watch?v=YOUR_OL_TUKAI_VIDEO_ID",
  rooms: [
    {
      id: "oltukai-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room with roll-in shower and Kilimanjaro views.",
      price: 357,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Accessible Features"],
      images: ['/ol-tukai-new-rooms.jpg', '/reception (1).jpg'],
      accessible: true,
      accessibilityFeatures: ["Roll-in shower with grab bars", "Wider doorways (36 inches)", "Accessible game drive vehicle"],
      detailedAccessibility: {}
    }
  ]
};

// ============================================================================
// ACCESSIBLE DESTINATIONS
// ============================================================================
export const accessibleLocations: Location[] = [
  { id: "nairobi-acc", name: "Nairobi", slug: "nairobi-accessible", description: "Kenya's capital with accessible hotels and attractions.", image: "/Nairobi.avif" },
  { id: "naivasha-acc", name: "Naivasha", slug: "naivasha-accessible", description: "Lake Naivasha with accessible boat rides and lodges.", image: "/naivasha.jpeg" },
  { id: "nakuru-acc", name: "Nakuru", slug: "nakuru-accessible", description: "Lake Nakuru with flamingos and accessible lodges.", image: "/nakuru.jpg" },
  { id: "kisumu-acc", name: "Kisumu", slug: "kisumu-accessible", description: "Lake Victoria with accessible hotels.", image: "/kisumu.jpg" },
  { id: "mombasa-acc", name: "Mombasa", slug: "mombasa-accessible", description: "Beach resorts with accessible facilities.", image: "/mombasa.jpg" },
  { id: "amboseli-acc", name: "Amboseli", slug: "amboseli-accessible", description: "Kilimanjaro views with accessible lodges.", image: "/amboseli.avif" },
  { id: "maasai-mara-acc", name: "Maasai Mara", slug: "maasai-mara-accessible", description: "Wildlife safaris with accessible camps.", image: "/maasai mara.jpeg" },
  { id: "nanyuki-acc", name: "Nanyuki", slug: "nanyuki-accessible", description: "Mount Kenya with accessible tented camps.", image: "/nanyuki.jpg" },
  { id: "samburu-acc", name: "Samburu", slug: "samburu-accessible", description: "Unique wildlife with accessible camps.", image: "/samburu.webp" }
];

// ============================================================================
// ALL ACCESSIBLE HOTELS ARRAY
// ============================================================================
export const accessibleHotels: Hotel[] = [
  crownePlazaNairobi,
  tamarindTree,
  sarovaPanafric,
  kiboSafariCamp,
  sweetwatersTentedCamp,
  muthuLakeNaivashaCountryClub,
  sarovaLionHill,
  sarovaWoodlands,
  sarovaImperial,
  sarovaWhitesands,
  ashnilSamburu,
  ashnilMara,
  soroiMaraBush,
  soroiLarsensMara,
  soroiPrivateWing,
  maraMaisha,
  keekorok,
  naivashaSopa,
  naivashaSimba,
  naivashaResort,
  enashipai,
  nakuruSopaLodge,
  nakuruLodge,
  olTukai,
  praroAmboseliCamp,
  
];

export const hotels: Hotel[] = accessibleHotels;
export const locations: Location[] = accessibleLocations;