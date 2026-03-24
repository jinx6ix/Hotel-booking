// lib/accessible.ts

export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
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
  accessibilityFeatures?: string[];
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
  category: 'bathroom' | 'room' | 'entrance' | 'restaurant' | 'parking' | 'elevator' | 'pool';
  title: string;
  description: string;
  measurements?: string;
  icon?: string;
  image?: string;
}

// ============================================================================
// HEMINGWAY'S NAIROBI - DETAILED ACCESSIBILITY FEATURES WITH IMAGES
// ============================================================================
const hemingwayNairobiAccessibility: AccessibilityFeature[] = [
  // Entrance
  {
    id: 'hemingway-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Step-free access via ramp. Automatic doors with 42" width. Covered drop-off area.',
    measurements: 'Door width: 42"',
    image: '/accessibility/entrance-ramp.jpg'
  },
  {
    id: 'hemingway-entrance-2',
    category: 'entrance',
    title: 'Reception',
    description: 'Lowered reception counter at 34" height. Portable hearing loop available.',
    measurements: 'Counter height: 34"',
    image: '/accessibility/reception-counter.jpg'
  },
  
  // Room
  {
    id: 'hemingway-room-1',
    category: 'room',
    title: 'Doorway',
    description: 'Main door width: 36". Bedroom door width: 34". Lever handles.',
    measurements: 'Door width: 34"-36"',
    image: '/accessibility/room-door.jpg'
  },
  {
    id: 'hemingway-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 22". Clearance under bed: 8" for lift access.',
    measurements: 'Bed height: 22" | Clearance: 8"',
    image: '/accessibility/bed-clearance.jpg'
  },
  {
    id: 'hemingway-room-3',
    category: 'room',
    title: 'Turning Space',
    description: '60" turning radius throughout room. Space beside bed: 40" on each side.',
    measurements: 'Turning radius: 60"',
    image: '/accessibility/turning-space.jpg'
  },
  {
    id: 'hemingway-room-4',
    category: 'room',
    title: 'Controls',
    description: 'Light switches at 42" height. Thermostat at 44". Visual doorbell alert.',
    measurements: 'Switch height: 42"',
    image: '/accessibility/light-switches.jpg'
  },
  {
    id: 'hemingway-room-5',
    category: 'room',
    title: 'Closet',
    description: 'Lowered hanging rail at 48". Adjustable shelving. Clear floor space: 36" x 48".',
    measurements: 'Rail height: 48"',
    image: '/accessibility/closet.jpg'
  },
  
  // Room entrance details
  {
    id: 'hemingway-room-entrance-1',
    category: 'room',
    title: 'Room entrance',
    description: 'There is 1 step to enter the room (2 in tall)',
    measurements: 'Step height: 2"',
    image: '/accessibility/room-step.jpg'
  },
  {
    id: 'hemingway-room-entrance-2',
    category: 'room',
    title: 'Room entrance',
    description: 'Steps have no handrails',
    measurements: 'No handrails',
    image: '/accessibility/no-handrails.jpg'
  },
  {
    id: 'hemingway-room-entrance-3',
    category: 'room',
    title: 'Room entrance',
    description: 'Door is 33 in wide',
    measurements: 'Door width: 33"',
    image: '/accessibility/door-width.jpg'
  },
  {
    id: 'hemingway-room-entrance-4',
    category: 'room',
    title: 'Room entrance',
    description: 'Door opens with lever',
    measurements: 'Lever handle',
    image: '/accessibility/lever-handle.jpg'
  },
  {
    id: 'hemingway-room-entrance-5',
    category: 'room',
    title: 'Room entrance',
    description: 'Door opens with key card',
    measurements: 'Key card access',
    image: '/accessibility/key-card.jpg'
  },

  // Bed details
  {
    id: 'hemingway-bed-1',
    category: 'room',
    title: 'Bed',
    description: 'Bed is too high (27 in)',
    measurements: 'Bed height: 27"',
    image: '/accessibility/bed-height.jpg'
  },
  {
    id: 'hemingway-bed-2',
    category: 'room',
    title: 'Bed',
    description: 'There is free space under the bed: 4.5 in long, 67 in wide, 7 in high',
    measurements: 'Under-bed space: 4.5"L x 67"W x 7"H',
    image: '/accessibility/under-bed.jpg'
  },
  {
    id: 'hemingway-bed-3',
    category: 'room',
    title: 'Bed',
    description: 'There is enough space next to the bed (72 in)',
    measurements: 'Space beside bed: 72"',
    image: '/accessibility/bed-space.jpg'
  },

  // Room amenities
  {
    id: 'hemingway-closet-1',
    category: 'room',
    title: 'Room amenities',
    description: 'Step-free access to the closet',
    measurements: 'Level access',
    image: '/accessibility/closet-access.jpg'
  },
  {
    id: 'hemingway-closet-2',
    category: 'room',
    title: 'Room amenities',
    description: 'Drawers and clothing rod are at an accessible reach height',
    measurements: 'Rod height: 48"',
    image: '/accessibility/closet-rod.jpg'
  },

  // Room features
  {
    id: 'hemingway-mirror-1',
    category: 'room',
    title: 'Room features',
    description: 'The mirror is 24.25 in from the floor',
    measurements: 'Mirror height: 24.25"',
    image: '/accessibility/mirror.jpg'
  },
  {
    id: 'hemingway-desk-1',
    category: 'room',
    title: 'Room features',
    description: 'The desk height is 30 in. The space under the desk is 18.25 in long, 43 in wide, 28 in high',
    measurements: 'Desk: 30"H | Knee clearance: 18.25"L x 43"W x 28"H',
    image: '/accessibility/desk.jpg'
  },
  
  // Bathroom
  {
    id: 'hemingway-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 34". Opens outward. Lever handle. Threshold: 0.5" beveled.',
    measurements: 'Door width: 34" | Threshold: 0.5"',
    image: '/accessibility/bathroom-door.jpg'
  },
  {
    id: 'hemingway-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide',
    measurements: 'Shower entrance: 58" | Cubicle: 37"L x 58"W',
    image: '/accessibility/roll-in-shower.jpg'
  },
  {
    id: 'hemingway-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Fixed fold-down seat: 18" x 18" at 18" height. Portable shower stool also available.',
    measurements: 'Seat height: 18" | Seat size: 18" x 18"',
    image: '/accessibility/shower-seat.jpg'
  },
  {
    id: 'hemingway-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. L-shaped grab bar on back wall: 36" horizontal x 36" vertical.',
    measurements: 'Multiple bars: 24"-42"',
    image: '/accessibility/grab-bars.jpg'
  },
  {
    id: 'hemingway-bathroom-5',
    category: 'bathroom',
    title: 'Sink',
    description: 'The sink height is 33.5 in. The space under the sink is 10 in long, 34.5 in wide, 27 in high. The sink handle is lever.',
    measurements: 'Sink height: 33.5" | Under-sink: 10"L x 34.5"W x 27"H',
    image: '/accessibility/sink.jpg'
  },
  {
    id: 'hemingway-bathroom-6',
    category: 'bathroom',
    title: 'Toilet',
    description: 'Toilet height: 18" with grab bars on both sides: 36" long, rear grab bar: 36". Emergency pull cord beside toilet.',
    measurements: 'Toilet height: 18" | Grab bars: 36"',
    image: '/accessibility/toilet.jpg'
  },
  {
    id: 'hemingway-bathroom-7',
    category: 'bathroom',
    title: 'Bathroom Interior',
    description: 'Turning space: 60" diameter clear floor space. Non-slip flooring throughout.',
    measurements: 'Turning space: 60"',
    image: '/accessibility/bathroom-interior.jpg'
  },
  
  // Restaurant
  {
    id: 'hemingway-restaurant-1',
    category: 'restaurant',
    title: 'Restaurant Entrance',
    description: 'Wide entrance: 42". Step-free access from lobby.',
    measurements: 'Door width: 42"',
    image: '/accessibility/restaurant-entrance.jpg'
  },
  {
    id: 'hemingway-restaurant-2',
    category: 'restaurant',
    title: 'Seating',
    description: 'Accessible tables with knee clearance: 30" wide x 24" high. Moveable chairs. Staff assistance available.',
    measurements: 'Table height: 30" | Knee clearance: 24"',
    image: '/accessibility/restaurant-seating.jpg'
  },
  {
    id: 'hemingway-restaurant-3',
    category: 'restaurant',
    title: 'Buffet Area',
    description: 'Lowered buffet section: 34" height. Staff available to assist with serving.',
    measurements: 'Buffet height: 34"',
    image: '/accessibility/buffet.jpg'
  },
  {
    id: 'hemingway-restaurant-4',
    category: 'restaurant',
    title: 'Restroom',
    description: 'Accessible restaurant restroom with grab bars and 60" turning space.',
    measurements: 'Turning space: 60"',
    image: '/accessibility/restaurant-restroom.jpg'
  },
  
  // Additional Features
  {
    id: 'hemingway-parking-1',
    category: 'parking',
    title: 'Parking',
    description: '2 designated accessible parking spaces: 12" wide with 8" access aisle. Level path to entrance.',
    measurements: 'Space width: 12" | Aisle: 8"',
    image: '/accessibility/parking.jpg'
  },
  {
    id: 'hemingway-elevator-1',
    category: 'elevator',
    title: 'Elevator',
    description: 'Elevator doors: 36". Cab size: 68" x 54". Controls at 40" height. Braille markings. Audio announcements.',
    measurements: 'Door: 36" | Cab: 68" x 54"',
    image: '/accessibility/elevator.jpg'
  },
  {
    id: 'hemingway-pool-1',
    category: 'pool',
    title: 'Pool Area',
    description: 'Pool lift available. Step-free access to pool deck. Accessible changing room nearby.',
    measurements: 'Pool lift available',
    image: '/accessibility/pool-lift.jpg'
  }
];

// ============================================================================
// HEMINGWAY'S NAIROBI HOTEL
// ============================================================================
export const hemingwayNairobi: Hotel = {
  id: "hemingway-nairobi-001",
  name: "Hemingways Nairobi",
  location: "Nairobi",
  description: "Luxury colonial-style hotel in the heart of Nairobi's Karen suburb. Features spacious accessible rooms, award-winning restaurants, and beautiful garden views. Perfect base for exploring Nairobi National Park and Giraffe Centre.",
  image: "/hotels/hemingways-nairobi.jpg",
  rating: 4.9,
  price: 450,
  amenities: [
    "Free WiFi",
    "Restaurant",
    "Room Service",
    "Fitness Center",
    "Spa",
    "Pool",
    "Free Parking",
    "Airport Shuttle",
    "Bar/Lounge",
    "Business Center",
    "Laundry Service",
    "Concierge"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: hemingwayNairobiAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/bathroom-1.jpg',
      '/accessibility/bathroom-2.jpg',
      '/accessibility/bathroom-3.jpg',
      '/accessibility/bathroom-4.jpg',
      '/accessibility/bathroom-5.jpg',
      '/accessibility/bathroom-6.jpg',
      '/accessibility/bathroom-7.jpg',
      '/accessibility/bathroom-8.jpg'
    ],
    room: [
      '/accessibility/room-1.jpg',
      '/accessibility/room-2.jpg',
      '/accessibility/room-3.jpg',
      '/accessibility/room-4.jpg',
      '/accessibility/room-5.jpg',
      '/accessibility/room-6.jpg',
      '/accessibility/room-7.jpg',
      '/accessibility/room-8.jpg'
    ],
    entrance: [
      '/accessibility/entrance-1.jpg',
      '/accessibility/entrance-2.jpg',
      '/accessibility/entrance-3.jpg'
    ],
    restaurant: [
      '/accessibility/restaurant-1.jpg',
      '/accessibility/restaurant-2.jpg',
      '/accessibility/restaurant-3.jpg',
      '/accessibility/restaurant-4.jpg'
    ],
    shower: [
      '/accessibility/shower-1.jpg',
      '/accessibility/shower-2.jpg',
      '/accessibility/shower-3.jpg',
      '/accessibility/shower-4.jpg'
    ],
    sink: [
      '/accessibility/sink-1.jpg',
      '/accessibility/sink-2.jpg',
      '/accessibility/sink-3.jpg'
    ]
  },
  rooms: [
    {
      id: "hemingway-accessible-1",
      type: "Standard Room, 1 King Bed, Accessible, Roll-In Shower",
      description: "Elegant accessible room with colonial décor, roll-in shower, and garden views. Features widened doorways and grab bars throughout.",
      price: 450,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Bathrobe", "Slippers"],
      images: [
        '/rooms/accessible-room-1.jpg',
        '/rooms/accessible-room-2.jpg',
        '/rooms/accessible-room-3.jpg',
        '/rooms/accessible-room-4.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Wider doorways (36 inches)",
        "Lowered light switches",
        "Lowered closet rods",
        "Emergency call system",
        "Visual alarm system"
      ]
    },
    {
      id: "hemingway-accessible-2",
      type: "Accessible Executive Suite",
      description: "Spacious accessible suite with separate living area, roll-in shower, and private balcony overlooking the gardens.",
      price: 650,
      maxOccupancy: 3,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Bathrobe", "Slippers", "Living Area", "Balcony"],
      images: [
        '/rooms/accessible-suite-1.jpg',
        '/rooms/accessible-suite-2.jpg',
        '/rooms/accessible-suite-3.jpg',
        '/rooms/accessible-suite-4.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Extra-wide doorways (38 inches)",
        "Lowered light switches",
        "Lowered closet rods",
        "Emergency call system",
        "Visual alarm system",
        "Accessible balcony with ramp",
        "Grab bars throughout"
      ]
    }
  ]
};

// ============================================================================
// CROWNE PLAZA NAIROBI AIRPORT
// ============================================================================
const crownePlazaAccessibility: AccessibilityFeature[] = [
  {
    id: 'crowne-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Automatic sliding doors with 42" width. Level access from covered drop-off area.',
    measurements: 'Door width: 42"',
    image: '/accessibility/entrance-auto.jpg'
  },
  {
    id: 'crowne-room-1',
    category: 'room',
    title: 'Doorway',
    description: 'Main door width: 36". Bedroom door width: 34". Lever handles.',
    measurements: 'Door width: 34"-36"',
    image: '/accessibility/room-door-wide.jpg'
  },
  {
    id: 'crowne-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 23". Clearance under bed: 9" for lift access.',
    measurements: 'Bed height: 23" | Clearance: 9"',
    image: '/accessibility/bed-clearance-2.jpg'
  },
  {
    id: 'crowne-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 34". Opens outward. Threshold: 0.5" beveled.',
    measurements: 'Door width: 34"',
    image: '/accessibility/bathroom-door-2.jpg'
  },
  {
    id: 'crowne-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Zero-threshold entry. Shower area: 60" x 36". Grab bars: 42" horizontal, 36" vertical.',
    measurements: 'Shower area: 60" x 36"',
    image: '/accessibility/shower-rollin.jpg'
  },
  {
    id: 'crowne-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Fixed fold-down seat at 18" height. Portable shower stool available.',
    measurements: 'Seat height: 18"',
    image: '/accessibility/shower-seat-2.jpg'
  },
  {
    id: 'crowne-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. L-shaped grab bar: 36" horizontal x 36" vertical.',
    measurements: 'Bars: 36"-42"',
    image: '/accessibility/grab-bars-2.jpg'
  },
  {
    id: 'crowne-bathroom-5',
    category: 'bathroom',
    title: 'Sink',
    description: 'Sink height: 32". Knee clearance: 30" wide x 24" high. Lever faucet.',
    measurements: 'Sink height: 32"',
    image: '/accessibility/sink-2.jpg'
  },
  {
    id: 'crowne-bathroom-6',
    category: 'bathroom',
    title: 'Toilet',
    description: 'Toilet height: 18" with grab bars on both sides. Emergency pull cord.',
    measurements: 'Toilet height: 18"',
    image: '/accessibility/toilet-2.jpg'
  },
  {
    id: 'crowne-restaurant-1',
    category: 'restaurant',
    title: 'Restaurant',
    description: 'Accessible seating with knee clearance. Staff assistance available.',
    measurements: 'Table height: 30"',
    image: '/accessibility/restaurant-2.jpg'
  }
];

export const crownePlazaNairobi: Hotel = {
  id: "nairobi-002",
  name: "Crowne Plaza Nairobi Airport by IHG",
  location: "Nairobi",
  description: "Premium 5-star hotel conveniently located at Jomo Kenyatta International Airport. Features wheelchair accessible rooms with roll-in showers and grab bars. Perfect for transit passengers.",
  image: "/CrownePlazaNairobi.jpg",
  rating: 4.6,
  price: 280,
  amenities: [
    "WiFi",
    "Pool",
    "Fitness Center",
    "Multiple Restaurants",
    "Bar",
    "Spa",
    "Airport Shuttle",
    "24-hour Reception",
    "Business Center",
    "Accessible Facilities"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: crownePlazaAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/crowne-bathroom-1.jpg',
      '/accessibility/crowne-bathroom-2.jpg',
      '/accessibility/crowne-bathroom-3.jpg',
      '/accessibility/crowne-bathroom-4.jpg',
      '/accessibility/crowne-bathroom-5.jpg',
      '/accessibility/crowne-bathroom-6.jpg',
      '/accessibility/crowne-bathroom-7.jpg',
      '/accessibility/crowne-bathroom-8.jpg'
    ],
    room: [
      '/accessibility/crowne-room-1.jpg',
      '/accessibility/crowne-room-2.jpg',
      '/accessibility/crowne-room-3.jpg',
      '/accessibility/crowne-room-4.jpg'
    ],
    entrance: [
      '/accessibility/crowne-entrance-1.jpg',
      '/accessibility/crowne-entrance-2.jpg'
    ],
    restaurant: [
      '/accessibility/crowne-restaurant-1.jpg',
      '/accessibility/crowne-restaurant-2.jpg'
    ],
    shower: [
      '/accessibility/crowne-shower-1.jpg',
      '/accessibility/crowne-shower-2.jpg',
      '/accessibility/crowne-shower-3.jpg'
    ],
    sink: [
      '/accessibility/crowne-sink-1.jpg',
      '/accessibility/crowne-sink-2.jpg'
    ]
  },
  rooms: [
    {
      id: "crowne-accessible-1",
      type: "Accessible Standard Room",
      description: "Comfortable accessible room with roll-in shower and grab bars. Soundproofed for airport convenience.",
      price: 280,
      maxOccupancy: 2,
      available: 3,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Work Desk"],
      images: [
        '/rooms/crowne-accessible-1.jpg',
        '/rooms/crowne-accessible-2.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Wider doorways (34 inches)",
        "Lowered light switches",
        "Emergency call system",
        "Visual alarm system",
        "Soundproofed accessible room",
        "Airport shuttle accessible"
      ]
    },
    {
      id: "crowne-accessible-2",
      type: "Accessible Executive Room",
      description: "Spacious accessible room with enhanced amenities and lounge access.",
      price: 320,
      maxOccupancy: 2,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Work Desk", "Lounge Access"],
      images: [
        '/rooms/crowne-executive-1.jpg',
        '/rooms/crowne-executive-2.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Extra-wide doorways (36 inches)",
        "Grab bars throughout",
        "Emergency call system",
        "Visual alarm system"
      ]
    }
  ]
};

// ============================================================================
// SAROVA PANAFRIC HOTEL
// ============================================================================
const sarovaPanafricAccessibility: AccessibilityFeature[] = [
  {
    id: 'sarova-panafric-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Step-free access with ramp. Automatic doors: 42" width.',
    measurements: 'Door width: 42"',
    image: '/accessibility/sarova-entrance.jpg'
  },
  {
    id: 'sarova-panafric-room-1',
    category: 'room',
    title: 'Doorway',
    description: 'Main door width: 34". Bedroom door width: 34". Lever handles.',
    measurements: 'Door width: 34"',
    image: '/accessibility/sarova-door.jpg'
  },
  {
    id: 'sarova-panafric-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 22". Clearance under bed: 8" for lift access.',
    measurements: 'Bed height: 22" | Clearance: 8"',
    image: '/accessibility/sarova-bed.jpg'
  },
  {
    id: 'sarova-panafric-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 34". Opens outward. Threshold: 0.5".',
    measurements: 'Door width: 34"',
    image: '/accessibility/sarova-bathroom-door.jpg'
  },
  {
    id: 'sarova-panafric-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide',
    measurements: 'Shower entrance: 58" | Cubicle: 37"L x 58"W',
    image: '/accessibility/sarova-shower.jpg'
  },
  {
    id: 'sarova-panafric-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Fixed shower seat at 18" height.',
    measurements: 'Seat height: 18"',
    image: '/accessibility/sarova-shower-seat.jpg'
  },
  {
    id: 'sarova-panafric-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. Horizontal grab bars in shower: 36".',
    measurements: 'Bars: 36"',
    image: '/accessibility/sarova-grab-bars.jpg'
  },
  {
    id: 'sarova-panafric-bathroom-5',
    category: 'bathroom',
    title: 'Sink',
    description: 'The sink height is 33 in. The space under the sink is 10 in long, 34 in wide, 27 in high. The sink handle is lever.',
    measurements: 'Sink height: 33" | Under-sink: 10"L x 34"W x 27"H',
    image: '/accessibility/sarova-sink.jpg'
  },
  {
    id: 'sarova-panafric-bathroom-6',
    category: 'bathroom',
    title: 'Toilet',
    description: 'Toilet height: 17" with grab bars on both sides. Emergency pull cord.',
    measurements: 'Toilet height: 17"',
    image: '/accessibility/sarova-toilet.jpg'
  }
];

export const sarovaPanafric: Hotel = {
  id: "nairobi-015",
  name: "Sarova Panafric Hotel",
  location: "Nairobi",
  description: "Iconic Nairobi hotel with lush tropical gardens and a rich history. Features wheelchair accessible rooms with roll-in showers and grab bars, just minutes from the city center.",
  image: "/2026-01-28.jpg",
  rating: 4.5,
  price: 220,
  amenities: [
    "WiFi",
    "Pool",
    "Restaurant",
    "Bar",
    "Garden",
    "Conference Facilities",
    "Parking",
    "Room Service",
    "Accessible Facilities"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: sarovaPanafricAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/sarova-bathroom-1.jpg',
      '/accessibility/sarova-bathroom-2.jpg',
      '/accessibility/sarova-bathroom-3.jpg',
      '/accessibility/sarova-bathroom-4.jpg',
      '/accessibility/sarova-bathroom-5.jpg',
      '/accessibility/sarova-bathroom-6.jpg',
      '/accessibility/sarova-bathroom-7.jpg',
      '/accessibility/sarova-bathroom-8.jpg'
    ],
    room: [
      '/accessibility/sarova-room-1.jpg',
      '/accessibility/sarova-room-2.jpg',
      '/accessibility/sarova-room-3.jpg',
      '/accessibility/sarova-room-4.jpg'
    ],
    entrance: [
      '/accessibility/sarova-entrance-1.jpg',
      '/accessibility/sarova-entrance-2.jpg'
    ],
    restaurant: [
      '/accessibility/sarova-restaurant-1.jpg',
      '/accessibility/sarova-restaurant-2.jpg'
    ],
    shower: [
      '/accessibility/sarova-shower-1.jpg',
      '/accessibility/sarova-shower-2.jpg',
      '/accessibility/sarova-shower-3.jpg'
    ],
    sink: [
      '/accessibility/sarova-sink-1.jpg',
      '/accessibility/sarova-sink-2.jpg'
    ]
  },
  rooms: [
    {
      id: "sarova-panafric-accessible-1",
      type: "Accessible Standard Room",
      description: "Comfortable accessible room with roll-in shower and grab bars.",
      price: 220,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker"],
      images: [
        '/rooms/sarova-standard-1.jpg',
        '/rooms/sarova-standard-2.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Wider doorways (34 inches)",
        "Emergency call system"
      ]
    },
    {
      id: "sarova-panafric-accessible-2",
      type: "Accessible Deluxe Room",
      description: "Spacious accessible room with enhanced amenities and city views.",
      price: 280,
      maxOccupancy: 2,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Work Desk"],
      images: [
        '/rooms/sarova-deluxe-1.jpg',
        '/rooms/sarova-deluxe-2.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Extra-wide doorways (36 inches)",
        "Grab bars throughout",
        "Lowered vanity",
        "Emergency call system",
        "Visual alarm system"
      ]
    }
  ]
};

// ============================================================================
// KIBO SAFARI CAMP
// ============================================================================
const kiboAccessibility: AccessibilityFeature[] = [
  {
    id: 'kibo-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Ramped access to main lodge. Wooden ramp with non-slip surface.',
    measurements: 'Ramp width: 42"',
    image: '/accessibility/kibo-entrance.jpg'
  },
  {
    id: 'kibo-room-1',
    category: 'room',
    title: 'Tent Entrance',
    description: 'Tent entrance: 36" wide. Zippered opening for easy access.',
    measurements: 'Door width: 36"',
    image: '/accessibility/kibo-tent.jpg'
  },
  {
    id: 'kibo-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 24". Clearance under bed: 10" for lift access.',
    measurements: 'Bed height: 24" | Clearance: 10"',
    image: '/accessibility/kibo-bed.jpg'
  },
  {
    id: 'kibo-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Canvas door: 34" wide. Threshold: 0.5" beveled.',
    measurements: 'Door width: 34"',
    image: '/accessibility/kibo-bathroom-door.jpg'
  },
  {
    id: 'kibo-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide',
    measurements: 'Shower entrance: 58" | Cubicle: 37"L x 58"W',
    image: '/accessibility/kibo-shower.jpg'
  },
  {
    id: 'kibo-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Portable shower stool available on request.',
    measurements: 'Portable seat',
    image: '/accessibility/kibo-shower-seat.jpg'
  },
  {
    id: 'kibo-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. Grab bars installed in shower: 36" horizontal.',
    measurements: 'Bars: 36"',
    image: '/accessibility/kibo-grab-bars.jpg'
  },
  {
    id: 'kibo-restaurant-1',
    category: 'restaurant',
    title: 'Dining Area',
    description: 'Accessible pathway to dining tent. Staff assistance available.',
    measurements: 'Pathway width: 48"',
    image: '/accessibility/kibo-dining.jpg'
  }
];

export const kiboSafariCamp: Hotel = {
  id: "amboseli-010",
  name: "Kibo Safari Camp",
  location: "Amboseli",
  description: "Part of the prestigious Kibo Collection, this boutique hotel offers personalized service, elegant accommodations, and a tranquil setting. Fully wheelchair accessible with roll-in showers and wide doorways.",
  image: "/unnamed(7).jpg",
  rating: 4.5,
  price: 260,
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
    "Accessible Facilities"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: kiboAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/kibo-bathroom-1.jpg',
      '/accessibility/kibo-bathroom-2.jpg',
      '/accessibility/kibo-bathroom-3.jpg',
      '/accessibility/kibo-bathroom-4.jpg',
      '/accessibility/kibo-bathroom-5.jpg',
      '/accessibility/kibo-bathroom-6.jpg'
    ],
    room: [
      '/accessibility/kibo-room-1.jpg',
      '/accessibility/kibo-room-2.jpg',
      '/accessibility/kibo-room-3.jpg'
    ],
    entrance: [
      '/accessibility/kibo-entrance-1.jpg',
      '/accessibility/kibo-entrance-2.jpg'
    ],
    restaurant: [
      '/accessibility/kibo-restaurant-1.jpg',
      '/accessibility/kibo-restaurant-2.jpg'
    ],
    shower: [
      '/accessibility/kibo-shower-1.jpg',
      '/accessibility/kibo-shower-2.jpg'
    ],
    sink: [
      '/accessibility/kibo-sink-1.jpg'
    ]
  },
  rooms: [
    {
      id: "kibo-accessible-1",
      type: "Accessible Safari Tent",
      description: "Spacious accessible tent with roll-in shower and stunning Kilimanjaro views.",
      price: 260,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Ensuite Bathroom", "Safe", "Coffee Maker", "Private Veranda"],
      images: [
        '/rooms/kibo-tent-1.jpg',
        '/rooms/kibo-tent-2.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Wider doorways (36 inches)",
        "Accessible game drive vehicle available"
      ]
    }
  ]
};

// ============================================================================
// TAMARIND TREE HOTEL
// ============================================================================
const tamarindAccessibility: AccessibilityFeature[] = [
  {
    id: 'tamarind-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Step-free access via ramp. Automatic sliding doors: 42" width.',
    measurements: 'Door width: 42"',
    image: '/accessibility/tamarind-entrance.jpg'
  },
  {
    id: 'tamarind-room-1',
    category: 'room',
    title: 'Doorway',
    description: 'Main door width: 34". Bedroom door width: 34". Lever handles.',
    measurements: 'Door width: 34"',
    image: '/accessibility/tamarind-door.jpg'
  },
  {
    id: 'tamarind-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 22". Clearance under bed: 8" for lift access.',
    measurements: 'Bed height: 22" | Clearance: 8"',
    image: '/accessibility/tamarind-bed.jpg'
  },
  {
    id: 'tamarind-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 34". Opens outward. Threshold: 0.5" beveled.',
    measurements: 'Door width: 34"',
    image: '/accessibility/tamarind-bathroom-door.jpg'
  },
  {
    id: 'tamarind-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide',
    measurements: 'Shower entrance: 58" | Cubicle: 37"L x 58"W',
    image: '/accessibility/tamarind-shower.jpg'
  },
  {
    id: 'tamarind-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Fixed shower seat at 18" height.',
    measurements: 'Seat height: 18"',
    image: '/accessibility/tamarind-shower-seat.jpg'
  },
  {
    id: 'tamarind-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. Grab bars in shower: 36" horizontal, 24" vertical.',
    measurements: 'Bars: 24"-36"',
    image: '/accessibility/tamarind-grab-bars.jpg'
  },
  {
    id: 'tamarind-bathroom-5',
    category: 'bathroom',
    title: 'Sink',
    description: 'The sink height is 33 in. The space under the sink is 10 in long, 34 in wide, 27 in high. The sink handle is lever.',
    measurements: 'Sink height: 33" | Under-sink: 10"L x 34"W x 27"H',
    image: '/accessibility/tamarind-sink.jpg'
  },
  {
    id: 'tamarind-bathroom-6',
    category: 'bathroom',
    title: 'Toilet',
    description: 'Toilet height: 17" with grab bars. Emergency pull cord.',
    measurements: 'Toilet height: 17"',
    image: '/accessibility/tamarind-toilet.jpg'
  }
];

export const tamarindTree: Hotel = {
  id: "nairobi-014",
  name: "Tamarind Tree Hotel",
  location: "Nairobi",
  description: "Modern hotel offering comfortable accommodations with a blend of contemporary style and African charm. Features a rooftop restaurant with city views and fully accessible rooms with roll-in showers.",
  image: "/2025-10-15.jpg",
  rating: 4.4,
  price: 220,
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
    "Accessible Facilities"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: tamarindAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/tamarind-bathroom-1.jpg',
      '/accessibility/tamarind-bathroom-2.jpg',
      '/accessibility/tamarind-bathroom-3.jpg',
      '/accessibility/tamarind-bathroom-4.jpg',
      '/accessibility/tamarind-bathroom-5.jpg',
      '/accessibility/tamarind-bathroom-6.jpg',
      '/accessibility/tamarind-bathroom-7.jpg',
      '/accessibility/tamarind-bathroom-8.jpg'
    ],
    room: [
      '/accessibility/tamarind-room-1.jpg',
      '/accessibility/tamarind-room-2.jpg',
      '/accessibility/tamarind-room-3.jpg'
    ],
    entrance: [
      '/accessibility/tamarind-entrance-1.jpg',
      '/accessibility/tamarind-entrance-2.jpg'
    ],
    restaurant: [
      '/accessibility/tamarind-restaurant-1.jpg',
      '/accessibility/tamarind-restaurant-2.jpg'
    ],
    shower: [
      '/accessibility/tamarind-shower-1.jpg',
      '/accessibility/tamarind-shower-2.jpg'
    ],
    sink: [
      '/accessibility/tamarind-sink-1.jpg',
      '/accessibility/tamarind-sink-2.jpg'
    ]
  },
  rooms: [
    {
      id: "tamarind-accessible-1",
      type: "Accessible Deluxe Room",
      description: "Spacious accessible room with roll-in shower and modern amenities.",
      price: 220,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Work Desk"],
      images: [
        '/rooms/tamarind-1.jpg',
        '/rooms/tamarind-2.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Wider doorways (34 inches)",
        "Lowered vanity",
        "Emergency call system"
      ]
    }
  ]
};

// ============================================================================
// SWEETWATERS TENTED CAMP - OL PEJETA CONSERVANCY
// ============================================================================
const sweetwatersAccessibility: AccessibilityFeature[] = [
  {
    id: 'sweetwaters-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Step-free access via wooden ramp. Reception desk with lowered section at 32" height.',
    measurements: 'Ramp gradient: 1:12 | Desk height: 32"',
    image: '/accessibility/sweetwaters-entrance.jpg'
  },
  {
    id: 'sweetwaters-entrance-2',
    category: 'entrance',
    title: 'Tent Entrance',
    description: 'Dedicated wooden ramp to tent entrance. Door width: 36". Lever handle.',
    measurements: 'Door width: 36" | Ramp gradient: 1:12',
    image: '/accessibility/sweetwaters-tent-entrance.jpg'
  },
  {
    id: 'sweetwaters-room-1',
    category: 'room',
    title: 'Doorway',
    description: 'Tent door width: 36". Zero threshold. Lever handle at 36" height.',
    measurements: 'Door width: 36"',
    image: '/accessibility/sweetwaters-door.jpg'
  },
  {
    id: 'sweetwaters-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 24". Clearance under bed: 7" for lift access. Clearance on both sides: 36".',
    measurements: 'Bed height: 24" | Clearance: 7" | Side clearance: 36"',
    image: '/accessibility/sweetwaters-bed.jpg'
  },
  {
    id: 'sweetwaters-room-3',
    category: 'room',
    title: 'Turning Space',
    description: 'Free turning space of 60" in tent interior. Smooth wooden flooring throughout.',
    measurements: 'Turning radius: 60"+',
    image: '/accessibility/sweetwaters-interior.jpg'
  },
  {
    id: 'sweetwaters-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 36". Opens outward. Threshold: 0.5" beveled edge.',
    measurements: 'Door width: 36"',
    image: '/accessibility/sweetwaters-bathroom-door.jpg'
  },
  {
    id: 'sweetwaters-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Wet room style roll-in shower with zero threshold. Shower area: 48" x 60". Handheld shower head adjustable 36"-72".',
    measurements: 'Shower area: 48" x 60" | Handheld bar: 36"-72"',
    image: '/accessibility/sweetwaters-shower.jpg'
  },
  {
    id: 'sweetwaters-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Fixed fold-down shower seat at 18" height. Weight capacity: 300 lbs.',
    measurements: 'Seat height: 18" | Seat dimensions: 18" x 16"',
    image: '/accessibility/sweetwaters-shower-seat.jpg'
  },
  {
    id: 'sweetwaters-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. Horizontal bar: 36" on back wall. Vertical bar: 24" on side wall. Angled bar: 36".',
    measurements: 'Horizontal: 36" | Vertical: 24" | Angled: 36"',
    image: '/accessibility/sweetwaters-grab-bars.jpg'
  },
  {
    id: 'sweetwaters-bathroom-5',
    category: 'bathroom',
    title: 'Sink',
    description: 'The sink height is 34 in. The space under the sink is 10 in long, 30 in wide, 27 in high. The sink handle is lever. Mirror at 40" (tilted).',
    measurements: 'Sink height: 34" | Under-sink: 10"L x 30"W x 27"H | Mirror: 40"',
    image: '/accessibility/sweetwaters-sink.jpg'
  },
  {
    id: 'sweetwaters-bathroom-6',
    category: 'bathroom',
    title: 'Toilet',
    description: 'Toilet height: 18" with grab bars on both sides. Emergency pull cord within reach.',
    measurements: 'Toilet height: 18"',
    image: '/accessibility/sweetwaters-toilet.jpg'
  },
  {
    id: 'sweetwaters-bathroom-7',
    category: 'bathroom',
    title: 'Bathroom Space',
    description: 'Step-free bathroom with 60" turning radius. All fixtures positioned for wheelchair access.',
    measurements: 'Turning radius: 60"+ | Clear floor space: 60" x 60"',
    image: '/accessibility/sweetwaters-bathroom-space.jpg'
  },
  {
    id: 'sweetwaters-common-1',
    category: 'restaurant',
    title: 'Dining Area',
    description: 'Step-free access to restaurant. Tables with knee clearance: 27" H x 30" W. Buffet lowered to 34". Pathways: 36"+.',
    measurements: 'Table clearance: 27"H x 30"W | Pathways: 36"+',
    image: '/accessibility/sweetwaters-dining.jpg'
  },
  {
    id: 'sweetwaters-common-2',
    category: 'room',
    title: 'Lounge Area',
    description: 'Step-free access to lounge. Accessible seating with clear pathways. Bar counter lowered section at 34".',
    measurements: 'Bar height: 34" | Pathways: 36"+',
    image: '/accessibility/sweetwaters-lounge.jpg'
  },
  {
    id: 'sweetwaters-common-3',
    category: 'room',
    title: 'Game Viewing Platform',
    description: 'Accessible game viewing platform with ramp access. Waterhole viewing area with accessible pathway.',
    measurements: 'Ramp gradient: 1:12 | Pathway width: 36"+',
    image: '/accessibility/sweetwaters-viewing-platform.jpg'
  },
  {
    id: 'sweetwaters-parking-1',
    category: 'parking',
    title: 'Parking',
    description: 'Designated accessible parking spaces near reception. Space width: 12" with 5" access aisle. Level surface.',
    measurements: 'Space width: 12" | Access aisle: 5"',
    image: '/accessibility/sweetwaters-parking.jpg'
  },
  {
    id: 'sweetwaters-restaurant-1',
    category: 'restaurant',
    title: 'Buffet Access',
    description: 'Lowered buffet section at 34" height. Staff assistance available. Wide pathways between stations.',
    measurements: 'Buffet height: 34" | Pathways: 36"+',
    image: '/accessibility/sweetwaters-buffet.jpg'
  }
];

export const sweetwatersTentedCamp: Hotel = {
  id: "nanyuki-012",
  name: "Sweetwaters Tented Camp",
  location: "Nanyuki",
  description: "Luxury tented camp located within the Ol Pejeta Conservancy, offering exceptional wildlife viewing with a private waterhole and stunning views of Mount Kenya. Experience the magic of staying in the heart of the wilderness with all the comforts of a premium safari lodge.",
  image: "/sweetwaters-tented-camp-main.jpg",
  rating: 4.7,
  price: 380,
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
    "Accessible Facilities"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: sweetwatersAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/sweetwaters-bathroom-1.jpg',
      '/accessibility/sweetwaters-bathroom-2.jpg',
      '/accessibility/sweetwaters-bathroom-3.jpg',
      '/accessibility/sweetwaters-bathroom-4.jpg',
      '/accessibility/sweetwaters-bathroom-5.jpg',
      '/accessibility/sweetwaters-bathroom-6.jpg',
      '/accessibility/sweetwaters-bathroom-7.jpg',
      '/accessibility/sweetwaters-bathroom-8.jpg'
    ],
    room: [
      '/accessibility/sweetwaters-room-1.jpg',
      '/accessibility/sweetwaters-room-2.jpg',
      '/accessibility/sweetwaters-room-3.jpg',
      '/accessibility/sweetwaters-room-4.jpg'
    ],
    entrance: [
      '/accessibility/sweetwaters-entrance-1.jpg',
      '/accessibility/sweetwaters-entrance-2.jpg',
      '/accessibility/sweetwaters-tent-entrance.jpg'
    ],
    restaurant: [
      '/accessibility/sweetwaters-restaurant-1.jpg',
      '/accessibility/sweetwaters-restaurant-2.jpg',
      '/accessibility/sweetwaters-buffet.jpg'
    ],
  },
  rooms: [
    {
      id: "sweetwaters-standard-1",
      type: "Standard Room",
      description: "Comfortable tent with basic amenities, perfect for solo travelers or couples. Features private veranda with wildlife viewing.",
      price: 304,
      maxOccupancy: 2,
      available: 5,
      amenities: ["WiFi", "Private Veranda", "Ensuite Bathroom", "Mosquito Net", "Seating Area", "Safe", "Tea/Coffee Station"],
      images: [
        '/rooms/sweetwaters-standard-1.jpg',
        '/rooms/sweetwaters-standard-2.jpg',
        '/rooms/sweetwaters-standard-3.jpg'
      ],
      accessible: false
    },
    {
      id: "sweetwaters-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible tent designed for guests with mobility needs. Features wider doorways, roll-in shower, and grab bars. Private veranda overlooking the waterhole.",
      price: 323,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "Private Veranda", "Ensuite Bathroom", "Mosquito Net", "Seating Area", "Safe", "Tea/Coffee Station", "Accessible Features"],
      images: [
        '/rooms/sweetwaters-accessible-1.jpg',
        '/rooms/sweetwaters-accessible-2.jpg',
        '/rooms/sweetwaters-accessible-3.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll-in shower with grab bars",
        "Wider doorways (36 inches)",
        "Space under bed for lift access",
        "Shower seat (fold-down)",
        "Shower grab bars (horizontal and vertical)",
        "Lowered sink with knee clearance",
        "Toilet grab bars on both sides",
        "Emergency pull cord",
        "Step-free access throughout",
        "60\" turning radius in bathroom",
        "Visual alarm system",
        "Accessible safari vehicle available"
      ]
    }
  ]
};

// ============================================================================
// MUTHU LAKE NAIVASHA COUNTRY CLUB - LAKE NAIVASHA
// ============================================================================
const muthuNaivashaAccessibility: AccessibilityFeature[] = [
  {
    id: 'muthu-naivasha-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Step-free access via paved pathway. Reception desk with lowered section at 32" height. Automatic sliding doors.',
    measurements: 'Pathway width: 48" | Desk height: 32" | Door width: 36"',
    image: '/accessibility/muthu-entrance.jpg'
  },
  {
    id: 'muthu-naivasha-entrance-2',
    category: 'entrance',
    title: 'Room Entrance',
    description: 'Wide doorway to accessible rooms. Door width: 34". Lever handle. Zero threshold entry.',
    measurements: 'Door width: 34" | Threshold: 0"',
    image: '/accessibility/muthu-room-entrance.jpg'
  },
  {
    id: 'muthu-naivasha-room-1',
    category: 'room',
    title: 'Doorway',
    description: 'Room door width: 34". Zero threshold. Lever handle at 36" height.',
    measurements: 'Door width: 34"',
    image: '/accessibility/muthu-door.jpg'
  },
  {
    id: 'muthu-naivasha-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 24". Clearance under bed: 8" for lift access. Clearance on both sides: 36".',
    measurements: 'Bed height: 24" | Clearance: 8" | Side clearance: 36"',
    image: '/accessibility/muthu-bed.jpg'
  },
  {
    id: 'muthu-naivasha-room-3',
    category: 'room',
    title: 'Turning Space',
    description: 'Free turning space of 60" in room interior. Smooth tile flooring throughout.',
    measurements: 'Turning radius: 60"+',
    image: '/accessibility/muthu-interior.jpg'
  },
  {
    id: 'muthu-naivasha-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 34". Opens outward. Threshold: 0" level entry.',
    measurements: 'Door width: 34"',
    image: '/accessibility/muthu-bathroom-door.jpg'
  },
  {
    id: 'muthu-naivasha-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Spacious roll-in shower with zero threshold. Shower area: 60" x 42". Handheld shower head adjustable 36"-72".',
    measurements: 'Shower area: 60" x 42" | Handheld bar: 36"-72"',
    image: '/accessibility/muthu-shower.jpg'
  },
  {
    id: 'muthu-naivasha-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Built-in shower bench at 18" height with back support. Weight capacity: 400 lbs.',
    measurements: 'Bench height: 18" | Bench dimensions: 24" x 16"',
    image: '/accessibility/muthu-shower-seat.jpg'
  },
  {
    id: 'muthu-naivasha-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. Horizontal bar: 36" on back wall. Vertical bar: 24" on side wall.',
    measurements: 'Horizontal: 36" | Vertical: 24"',
    image: '/accessibility/muthu-grab-bars.jpg'
  },
  {
    id: 'muthu-naivasha-bathroom-5',
    category: 'bathroom',
    title: 'Sink',
    description: 'The sink height is 32 in. The space under the sink is 12 in long, 30 in wide, 27 in high. The sink handle is lever. Mirror at 38" (tilted).',
    measurements: 'Sink height: 32" | Under-sink: 12"L x 30"W x 27"H | Mirror: 38"',
    image: '/accessibility/muthu-sink.jpg'
  },
  {
    id: 'muthu-naivasha-bathroom-6',
    category: 'bathroom',
    title: 'Toilet',
    description: 'Toilet height: 18" with grab bars on both sides. Emergency pull cord within reach.',
    measurements: 'Toilet height: 18"',
    image: '/accessibility/muthu-toilet.jpg'
  },
  {
    id: 'muthu-naivasha-bathroom-7',
    category: 'bathroom',
    title: 'Bathroom Space',
    description: 'Step-free bathroom with 60" turning radius. All fixtures positioned for wheelchair access.',
    measurements: 'Turning radius: 60"+ | Clear floor space: 60" x 60"',
    image: '/accessibility/muthu-bathroom-space.jpg'
  },
  {
    id: 'muthu-naivasha-restaurant-1',
    category: 'restaurant',
    title: 'Dining Area',
    description: 'Step-free access to restaurant. Tables with knee clearance: 27" H x 30" W. Pathways: 36"+.',
    measurements: 'Table clearance: 27"H x 30"W | Pathways: 36"+',
    image: '/accessibility/muthu-dining.jpg'
  },
  {
    id: 'muthu-naivasha-restaurant-2',
    category: 'restaurant',
    title: 'Buffet Area',
    description: 'Lowered buffet section at 34" height. Staff assistance available. Wide pathways between stations.',
    measurements: 'Buffet height: 34" | Pathways: 36"+',
    image: '/accessibility/muthu-buffet.jpg'
  },
  {
    id: 'muthu-naivasha-common-1',
    category: 'room',
    title: 'Swimming Pool',
    description: 'Accessible pool entry with ramp. Pool lift available upon request. Pool deck with non-slip surface.',
    measurements: 'Pool ramp gradient: 1:12 | Pool lift capacity: 400 lbs',
    image: '/accessibility/muthu-pool.jpg'
  },
  {
    id: 'muthu-naivasha-common-2',
    category: 'room',
    title: 'Garden & Lake Access',
    description: 'Accessible pathways through gardens to lake viewing area. Smooth, firm surface with gentle slopes.',
    measurements: 'Pathway width: 48" | Max slope: 1:12',
    image: '/accessibility/muthu-garden-path.jpg'
  },
  {
    id: 'muthu-naivasha-common-3',
    category: 'restaurant',
    title: 'Lake Viewing Platform',
    description: 'Accessible viewing platform overlooking Lake Naivasha. Ramp access with handrails.',
    measurements: 'Platform width: 96" | Rail height: 36"',
    image: '/accessibility/muthu-lake-view.jpg'
  },
  {
    id: 'muthu-naivasha-parking-1',
    category: 'parking',
    title: 'Parking',
    description: 'Designated accessible parking spaces near reception. Space width: 12" with 5" access aisle. Level surface.',
    measurements: 'Space width: 12" | Access aisle: 5"',
    image: '/accessibility/muthu-parking.jpg'
  }
];

export const muthuLakeNaivashaCountryClub: Hotel = {
  id: "naivasha-008",
  name: "Muthu Lake Naivasha Country Club",
  location: "Naivasha",
  description: "Set on the shores of Lake Naivasha, this elegant country club offers a perfect blend of colonial charm and modern comfort. Surrounded by lush gardens and offering stunning lake views, the property features spacious rooms, a swimming pool, tennis courts, and easy access to boat rides on Lake Naivasha. Fully accessible with roll-in showers, grab bars, and accessible pathways throughout the gardens and common areas.",
  image: "/muthu-lake-naivasha.jpg",
  rating: 4.5,
  price: 280,
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
    "Pool Ramp"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: muthuNaivashaAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/muthu-bathroom-1.jpg',
      '/accessibility/muthu-bathroom-2.jpg',
      '/accessibility/muthu-bathroom-3.jpg',
      '/accessibility/muthu-bathroom-4.jpg',
      '/accessibility/muthu-bathroom-5.jpg',
      '/accessibility/muthu-bathroom-6.jpg',
      '/accessibility/muthu-bathroom-7.jpg',
      '/accessibility/muthu-bathroom-8.jpg'
    ],
    room: [
      '/accessibility/muthu-room-1.jpg',
      '/accessibility/muthu-room-2.jpg',
      '/accessibility/muthu-room-3.jpg',
      '/accessibility/muthu-room-4.jpg'
    ],
    entrance: [
      '/accessibility/muthu-entrance-1.jpg',
      '/accessibility/muthu-entrance-2.jpg',
      '/accessibility/muthu-room-entrance.jpg'
    ],
    restaurant: [
      '/accessibility/muthu-restaurant-1.jpg',
      '/accessibility/muthu-restaurant-2.jpg',
      '/accessibility/muthu-buffet.jpg'
    ],
  },
  rooms: [
    {
      id: "muthu-naivasha-standard-1",
      type: "Standard Room",
      description: "Comfortable room with basic amenities, perfect for solo travelers or couples. Features garden or lake views.",
      price: 224,
      maxOccupancy: 2,
      available: 8,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Garden View", "Tea/Coffee Station"],
      images: [
        '/rooms/muthu-standard-1.jpg',
        '/rooms/muthu-standard-2.jpg',
        '/rooms/muthu-standard-3.jpg'
      ],
      accessible: false
    },
    {
      id: "muthu-naivasha-deluxe-1",
      type: "Deluxe Room",
      description: "Spacious room with enhanced amenities and beautiful lake views.",
      price: 280,
      maxOccupancy: 3,
      available: 5,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Lake View", "Balcony"],
      images: [
        '/rooms/muthu-deluxe-1.jpg',
        '/rooms/muthu-deluxe-2.jpg',
        '/rooms/muthu-deluxe-3.jpg'
      ],
      accessible: false
    },
    {
      id: "muthu-naivasha-accessible-1",
      type: "Accessible Room",
      description: "Spacious accessible room designed for guests with mobility needs. Features wider doorways, roll-in shower, and grab bars. Garden view with accessible patio.",
      price: 238,
      maxOccupancy: 2,
      available: 3,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features", "Garden View", "Patio", "Tea/Coffee Station"],
      images: [
        '/rooms/muthu-accessible-1.jpg',
        '/rooms/muthu-accessible-2.jpg',
        '/rooms/muthu-accessible-3.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll-in shower with grab bars",
        "Wider doorways (34 inches)",
        "Space under bed for lift access (8 inches)",
        "Shower bench (built-in with back support)",
        "Shower grab bars (horizontal and vertical)",
        "Lowered sink with knee clearance",
        "Toilet grab bars on both sides",
        "Emergency pull cord",
        "Step-free access throughout",
        "60\" turning radius in bathroom",
        "Visual alarm system",
        "Accessible garden pathways",
        "Pool ramp available"
      ]
    }
  ]
};

// ============================================================================
// SAROVA LION HILL GAME LODGE
// ============================================================================
const sarovaLionHillAccessibility: AccessibilityFeature[] = [
  {
    id: 'lionhill-entrance-1',
    category: 'entrance',
    title: 'Main Entrance',
    description: 'Ramped access to main lodge. Wooden ramp with handrails.',
    measurements: 'Ramp width: 42"',
    image: '/accessibility/lionhill-entrance.jpg'
  },
  {
    id: 'lionhill-room-1',
    category: 'room',
    title: 'Doorway',
    description: 'Main door width: 34". Bedroom door width: 34". Lever handles.',
    measurements: 'Door width: 34"',
    image: '/accessibility/lionhill-door.jpg'
  },
  {
    id: 'lionhill-room-2',
    category: 'room',
    title: 'Space Under Bed',
    description: 'Bed height: 22". Clearance under bed: 8" for lift access.',
    measurements: 'Bed height: 22" | Clearance: 8"',
    image: '/accessibility/lionhill-bed.jpg'
  },
  {
    id: 'lionhill-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 34". Opens outward. Threshold: 0.5" beveled.',
    measurements: 'Door width: 34"',
    image: '/accessibility/lionhill-bathroom-door.jpg'
  },
  {
    id: 'lionhill-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide',
    measurements: 'Shower entrance: 58" | Cubicle: 37"L x 58"W',
    image: '/accessibility/lionhill-shower.jpg'
  },
  {
    id: 'lionhill-bathroom-3',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Fixed fold-down seat at 18" height.',
    measurements: 'Seat height: 18"',
    image: '/accessibility/lionhill-shower-seat.jpg'
  },
  {
    id: 'lionhill-bathroom-4',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars within shower available. L-shaped grab bar: 36" horizontal x 36" vertical.',
    measurements: 'Bars: 36"',
    image: '/accessibility/lionhill-grab-bars.jpg'
  },
  {
    id: 'lionhill-restaurant-1',
    category: 'restaurant',
    title: 'Dining Area',
    description: 'Accessible tables with knee clearance. Staff assistance available.',
    measurements: 'Table height: 30"',
    image: '/accessibility/lionhill-dining.jpg'
  }
];

export const sarovaLionHill: Hotel = {
  id: "nakuru-012",
  name: "Sarova Lion Hill Game Lodge",
  location: "Nakuru",
  description: "Set within Lake Nakuru National Park, this stunning lodge offers breathtaking views of the lake and flamingos. Features wheelchair accessible rooms with roll-in showers and grab bars.",
  image: "/unnamed (1).webp",
  rating: 4.7,
  price: 320,
  amenities: [
    "WiFi",
    "Pool",
    "Restaurant",
    "Bar",
    "Safari Drives",
    "Spa",
    "Gift Shop",
    "Parking",
    "Accessible Facilities"
  ],
  accessible: true,
  phone: "+254 726 485 228",
  email: "info@jaetravel.co.ke",
  accessibilityFeatures: sarovaLionHillAccessibility,
  accessibilityImages: {
    bathroom: [
      '/accessibility/lionhill-bathroom-1.jpg',
      '/accessibility/lionhill-bathroom-2.jpg',
      '/accessibility/lionhill-bathroom-3.jpg',
      '/accessibility/lionhill-bathroom-4.jpg',
      '/accessibility/lionhill-bathroom-5.jpg',
      '/accessibility/lionhill-bathroom-6.jpg'
    ],
    room: [
      '/accessibility/lionhill-room-1.jpg',
      '/accessibility/lionhill-room-2.jpg',
      '/accessibility/lionhill-room-3.jpg'
    ],
    entrance: [
      '/accessibility/lionhill-entrance-1.jpg',
      '/accessibility/lionhill-entrance-2.jpg'
    ],
    restaurant: [
      '/accessibility/lionhill-restaurant-1.jpg',
      '/accessibility/lionhill-restaurant-2.jpg'
    ],
    shower: [
      '/accessibility/lionhill-shower-1.jpg',
      '/accessibility/lionhill-shower-2.jpg'
    ],
    sink: [
      '/accessibility/lionhill-sink-1.jpg'
    ]
  },
  rooms: [
    {
      id: "lionhill-accessible-1",
      type: "Accessible Room",
      description: "Comfortable accessible room with roll-in shower and lake views.",
      price: 320,
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Safe", "Coffee Maker", "Balcony"],
      images: [
        '/rooms/lionhill-1.jpg',
        '/rooms/lionhill-2.jpg'
      ],
      accessible: true,
      accessibilityFeatures: [
        "Roll in shower",
        "Space under bed",
        "Shower seat",
        "Shower grab bars",
        "Wider doorways (34 inches)",
        "Emergency call system"
      ]
    }
  ]
};

// ============================================================================
// ALL ACCESSIBLE HOTELS ARRAY - ADD SWEETWATERS HERE!
// ============================================================================
export const accessibleHotels: Hotel[] = [
  hemingwayNairobi,
  crownePlazaNairobi,
  sarovaPanafric,
  kiboSafariCamp,
  tamarindTree,
  sarovaLionHill,
  sweetwatersTentedCamp,  // <-- ADDED SWEETWATERS HERE!
];

// ============================================================================
// ACCESSIBLE DESTINATIONS
// ============================================================================
export const accessibleLocations: Location[] = [
  {
    id: "nairobi-acc",
    name: "Nairobi",
    slug: "nairobi-accessible",
    description: "Kenya's capital city with accessible hotels, restaurants, and attractions including Nairobi National Park, Giraffe Centre, and David Sheldrick Wildlife Trust.",
    image: "/locations/nairobi.jpg"
  },
  {
    id: "naivasha-acc",
    name: "Naivasha",
    slug: "naivasha-accessible",
    description: "Lake Naivasha offers accessible boat rides, hippo watching, and Hell's Gate cycling with wheelchair-friendly lodges.",
    image: "/naivasha.jpeg"
  },
  {
    id: "nakuru-acc",
    name: "Nakuru",
    slug: "nakuru-accessible",
    description: "Lake Nakuru National Park with flamingos and rhinos, featuring accessible lodges with roll-in showers.",
    image: "/nakuru.jpg"
  },
  {
    id: "kisumu-acc",
    name: "Kisumu",
    slug: "kisumu-accessible",
    description: "Lake Victoria's main port with accessible hotels and stunning lakeside views.",
    image: "/kisumu.jpg"
  },
  {
    id: "mombasa-acc",
    name: "Mombasa",
    slug: "mombasa-accessible",
    description: "Kenya's coastal gem with accessible beach resorts, beach wheelchairs, and roll-in showers.",
    image: "/mombasa.jpg"
  },
  {
    id: "amboseli-acc",
    name: "Amboseli",
    slug: "amboseli-accessible",
    description: "Amboseli National Park with Mount Kilimanjaro views and accessible lodges featuring roll-in showers.",
    image: "/amboseli.avif"
  },
  {
    id: "maasai-mara-acc",
    name: "Maasai Mara",
    slug: "maasai-mara-accessible",
    description: "World-famous Maasai Mara with accessible tented camps and adapted safari vehicles.",
    image: "/maasai mara.jpeg"
  },
  {
    id: "nanyuki-acc",
    name: "Nanyuki",
    slug: "nanyuki-accessible",
    description: "Mount Kenya region with Sweetwaters Tented Camp and Ol Pejeta Conservancy offering adapted safari vehicles and accessible tents with roll-in showers.",
    image: "/nanyuki.jpg"
  }
];

// ============================================================================
// DEFAULT EXPORTS (for backward compatibility)
// ============================================================================
export const hotels: Hotel[] = accessibleHotels;
export const locations: Location[] = accessibleLocations;