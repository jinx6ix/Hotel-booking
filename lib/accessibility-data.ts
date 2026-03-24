// lib/accessibility-data.ts

export interface FeatureDetail {
    label: string;
    value: string;
    status: 'available' | 'partial' | 'unavailable';
  }
  
  export interface AccessibilityFeature {
    id: string;
    category: 'bathroom' | 'room' | 'entrance' | 'restaurant' | 'parking' | 'common-areas';
    title: string;
    description: string;
    measurements?: string;
    status: 'available' | 'partial' | 'unavailable';
    details?: {
      items: FeatureDetail[];
    };
  }
  
  export interface AccessibilityImages {
    bathroom?: string[];
    room?: string[];
    entrance?: string[];
    restaurant?: string[];
    parking?: string[];
    'common-areas'?: string[];
  }
  
  // ============================================
  // 1. CROWNE PLAZA NAIROBI AIRPORT (nairobi-002)
  // ============================================
  export const crownePlazaFeatures: AccessibilityFeature[] = [
    {
      id: "crown-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with no threshold",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm) • Entrance: 60\" wide",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry, 60 in wide entrance", status: "available" },
          { label: "Grab bars within shower", value: "Horizontal and vertical grab bars installed", status: "available" },
          { label: "Fixed shower seat", value: "Fold-down shower seat attached to wall", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable handheld showerhead on slide bar", status: "available" },
          { label: "Shower controls", value: "Lever-style controls at accessible height (36 in)", status: "available" }
        ]
      }
    },
    {
      id: "crown-bathroom-2",
      category: "bathroom",
      title: "Toilet Area",
      description: "Accessible toilet with grab bars and adequate clearance",
      measurements: "Toilet height: 18\" (46cm) • Grab bars: 36\" (91cm) length",
      status: "available",
      details: {
        items: [
          { label: "Toilet height", value: "18 in (46cm) - comfort height", status: "available" },
          { label: "Grab bars", value: "Side and rear grab bars installed", status: "available" },
          { label: "Clearance beside toilet", value: "36 in (91cm) clearance on transfer side", status: "available" },
          { label: "Flush control", value: "Push button on accessible side", status: "available" }
        ]
      }
    },
    {
      id: "crown-bathroom-3",
      category: "bathroom",
      title: "Sink / Vanity",
      description: "Accessible sink with knee clearance and lever handles",
      measurements: "Sink height: 34\" (86cm) • Knee clearance: 27\" (69cm) high",
      status: "available",
      details: {
        items: [
          { label: "Sink height", value: "34 in (86cm) from floor", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) high, 30 in (76cm) wide", status: "available" },
          { label: "Faucet type", value: "Lever handles for easy operation", status: "available" },
          { label: "Mirror placement", value: "Tilted mirror for seated users", status: "available" }
        ]
      }
    },
    {
      id: "crown-bathroom-4",
      category: "bathroom",
      title: "Bathroom Interior",
      description: "Step-free area with ample turning space",
      measurements: "Turning radius: 60\" (152cm) minimum",
      status: "available",
      details: {
        items: [
          { label: "Free turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Step-free area", value: "No steps or thresholds throughout", status: "available" },
          { label: "Emergency call system", value: "Pull cord within reach of shower and toilet", status: "available" },
          { label: "Floor surface", value: "Non-slip tile flooring", status: "available" }
        ]
      }
    },
    {
      id: "crown-room-1",
      category: "room",
      title: "Room Entrance",
      description: "Wide doorway with lever handle and key card access",
      measurements: "Door width: 36\" (91cm) minimum",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm) clearance", status: "available" },
          { label: "Door handle", value: "Lever handle for easy operation", status: "available" },
          { label: "Threshold", value: "Ramped or no threshold", status: "available" },
          { label: "Door access", value: "Key card entry at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "crown-room-2",
      category: "room",
      title: "Bed",
      description: "Accessible bed height with clearance underneath",
      measurements: "Bed height: 24\" (61cm) • Under-bed clearance: 8\" (20cm)",
      status: "available",
      details: {
        items: [
          { label: "Bed height", value: "24 in (61cm) - standard accessible height", status: "available" },
          { label: "Space under bed", value: "8 in (20cm) clearance for lift", status: "available" },
          { label: "Space next to bed", value: "36 in (91cm) clearance on accessible side", status: "available" },
          { label: "Mattress type", value: "Medium firm with pillow-top", status: "available" },
          { label: "Light switches", value: "Reachable from bed at 36 in height", status: "available" },
          { label: "Phone placement", value: "Nightstand at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "crown-room-3",
      category: "room",
      title: "Room Amenities",
      description: "Accessible storage and controls throughout",
      status: "available",
      details: {
        items: [
          { label: "Closet access", value: "Lowered clothing rod at 48 in (122cm)", status: "available" },
          { label: "Drawers", value: "Accessible reach height (32 in / 81cm)", status: "available" },
          { label: "Thermostat", value: "Located at 42 in (107cm) height", status: "available" },
          { label: "Light switches", value: "Located at 36 in (91cm) height", status: "available" },
          { label: "Outlets", value: "Located at 18 in (46cm) height", status: "available" },
          { label: "Curtain controls", value: "Easy-pull cord at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "crown-room-4",
      category: "room",
      title: "Workspace",
      description: "Accessible desk with knee clearance",
      measurements: "Desk height: 30\" (76cm) • Knee clearance: 27\" (69cm)",
      status: "available",
      details: {
        items: [
          { label: "Desk height", value: "30 in (76cm) - standard accessible height", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) high, 30 in (76cm) wide", status: "available" },
          { label: "Chair", value: "Armless desk chair with back support", status: "available" },
          { label: "Desk lamp", value: "Adjustable with easy controls", status: "available" }
        ]
      }
    },
    {
      id: "crown-room-5",
      category: "room",
      title: "Room Interior",
      description: "Step-free area with smooth flooring and ample space",
      measurements: "Turning radius: 60\" (152cm)",
      status: "available",
      details: {
        items: [
          { label: "Step-free area", value: "No steps or thresholds throughout room", status: "available" },
          { label: "Free turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Floor surface", value: "Smooth carpet with low pile", status: "available" },
          { label: "Wheelchair clearance", value: "36 in (91cm) wide pathways", status: "available" },
          { label: "Window controls", value: "Easy-open windows at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "crown-entrance-1",
      category: "entrance",
      title: "Hotel Entrance",
      description: "Level entry with automatic doors",
      measurements: "Door width: 48\" (122cm) • Ramp slope: 1:12",
      status: "available",
      details: {
        items: [
          { label: "Level entry", value: "No steps at main entrance", status: "available" },
          { label: "Automatic doors", value: "Power-assisted sliding doors", status: "available" },
          { label: "Door width", value: "48 in (122cm) clearance", status: "available" },
          { label: "Covered drop-off", value: "Covered area with level access", status: "available" },
          { label: "Doorbell/assistance", value: "Call button at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "crown-entrance-2",
      category: "entrance",
      title: "Reception Desk",
      description: "Accessible check-in counter with lowered section",
      measurements: "Lowered section height: 34\" (86cm) • Standard section: 42\" (107cm)",
      status: "available",
      details: {
        items: [
          { label: "Lowered counter", value: "34 in (86cm) height for wheelchair users", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) clearance", status: "available" },
          { label: "Waiting area", value: "Ample space for wheelchair maneuvering", status: "available" },
          { label: "Staff assistance", value: "Staff trained for accessibility needs", status: "available" }
        ]
      }
    },
    {
      id: "crown-restaurant-1",
      category: "restaurant",
      title: "Dining Area",
      description: "Accessible tables and seating arrangements",
      measurements: "Table height: 30\" (76cm) • Aisle width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Accessible tables", value: "Multiple tables with knee clearance", status: "available" },
          { label: "Table height", value: "30 in (76cm) - standard accessible height", status: "available" },
          { label: "Aisle width", value: "36-48 in (91-122cm) between tables", status: "available" },
          { label: "Seating", value: "Armless chairs available", status: "available" },
          { label: "Menu accessibility", value: "Large print and digital menus available", status: "available" }
        ]
      }
    },
    {
      id: "crown-restaurant-2",
      category: "restaurant",
      title: "Buffet Area",
      description: "Accessible buffet counters with staff assistance",
      measurements: "Counter height: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Buffet height", value: "34 in (86cm) - accessible reach", status: "available" },
          { label: "Staff assistance", value: "Available to help with buffet", status: "available" },
          { label: "Aisle width", value: "48 in (122cm) clearance around buffet", status: "available" },
          { label: "Food labels", value: "Large print labels available", status: "available" }
        ]
      }
    },
    {
      id: "crown-parking-1",
      category: "parking",
      title: "Accessible Parking",
      description: "Designated accessible parking spaces near entrance",
      measurements: "Space width: 12ft (366cm) including access aisle",
      status: "available",
      details: {
        items: [
          { label: "Accessible spaces", value: "4 designated spaces near entrance", status: "available" },
          { label: "Van accessible spaces", value: "2 spaces with 98 in (249cm) height clearance", status: "available" },
          { label: "Access aisle", value: "60 in (152cm) wide access aisle", status: "available" },
          { label: "Surface", value: "Level, firm, slip-resistant surface", status: "available" },
          { label: "Signage", value: "Clearly marked with international symbol", status: "available" },
          { label: "Pathway", value: "Accessible path to entrance", status: "available" }
        ]
      }
    },
    {
      id: "crown-common-1",
      category: "common-areas",
      title: "Elevator Access",
      description: "Accessible elevators to all floors",
      measurements: "Door width: 42\" (107cm) • Cabin size: 72\" x 60\" (183cm x 152cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "42 in (107cm) clearance", status: "available" },
          { label: "Cabin size", value: "72 in x 60 in (183cm x 152cm)", status: "available" },
          { label: "Controls height", value: "36-48 in (91-122cm) from floor", status: "available" },
          { label: "Braille buttons", value: "Available on all control panels", status: "available" },
          { label: "Audio announcements", value: "Floor announcements for visually impaired", status: "available" },
          { label: "Visual indicators", value: "LED floor displays", status: "available" }
        ]
      }
    },
    {
      id: "crown-common-2",
      category: "common-areas",
      title: "Business Center",
      description: "Accessible workstations and equipment",
      measurements: "Desk height: 30\" (76cm) • Aisle width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Workstation height", value: "30 in (76cm) accessible desks", status: "available" },
          { label: "Computer access", value: "Accessible computer stations", status: "available" },
          { label: "Printer access", value: "Controls at accessible height", status: "available" },
          { label: "Aisle clearance", value: "36 in (91cm) minimum", status: "available" }
        ]
      }
    },
    {
      id: "crown-common-3",
      category: "common-areas",
      title: "Lobby & Lounge",
      description: "Accessible seating and pathways throughout",
      measurements: "Pathway width: 48\" (122cm)",
      status: "available",
      details: {
        items: [
          { label: "Pathway width", value: "48 in (122cm) throughout lobby", status: "available" },
          { label: "Seating areas", value: "Accessible seating with armrests", status: "available" },
          { label: "Rest areas", value: "Seating available at intervals", status: "available" },
          { label: "Signage", value: "High-contrast, large print signage", status: "available" }
        ]
      }
    }
  ];

  // ============================================
// SWEETWATERS TENTED CAMP (nanyuki-012)
// ============================================
  export const sweetwatersFeatures: AccessibilityFeature[] = [
    {
      id: "sweetwaters-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with no threshold in accessible tent units",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm) • Entrance: 36\" wide",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry, 36 in wide entrance", status: "available" },
          { label: "Grab bars within shower", value: "Horizontal and vertical grab bars installed", status: "available" },
          { label: "Fixed shower seat", value: "Fold-down shower seat attached to wall", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable handheld showerhead on slide bar", status: "available" },
          { label: "Shower controls", value: "Lever-style controls at accessible height (36 in)", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-bathroom-2",
      category: "bathroom",
      title: "Toilet Area",
      description: "Accessible toilet with grab bars and adequate clearance in accessible tents",
      measurements: "Toilet height: 18\" (46cm) • Grab bars: 36\" (91cm) length",
      status: "available",
      details: {
        items: [
          { label: "Toilet height", value: "18 in (46cm) - comfort height", status: "available" },
          { label: "Grab bars", value: "Side and rear grab bars installed", status: "available" },
          { label: "Clearance beside toilet", value: "36 in (91cm) clearance on transfer side", status: "available" },
          { label: "Flush control", value: "Push button on accessible side", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-bathroom-3",
      category: "bathroom",
      title: "Sink / Vanity",
      description: "Accessible sink with knee clearance and lever handles",
      measurements: "Sink height: 34\" (86cm) • Knee clearance: 27\" (69cm) high",
      status: "available",
      details: {
        items: [
          { label: "Sink height", value: "34 in (86cm) from floor", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) high, 30 in (76cm) wide", status: "available" },
          { label: "Faucet type", value: "Lever handles for easy operation", status: "available" },
          { label: "Mirror placement", value: "Tilted mirror for seated users", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-bathroom-4",
      category: "bathroom",
      title: "Bathroom Interior",
      description: "Step-free area with ample turning space within accessible tent units",
      measurements: "Turning radius: 60\" (152cm) minimum",
      status: "available",
      details: {
        items: [
          { label: "Free turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Step-free area", value: "No steps or thresholds throughout", status: "available" },
          { label: "Emergency call system", value: "Pull cord within reach of shower and toilet", status: "available" },
          { label: "Floor surface", value: "Non-slip flooring with tented base", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-room-1",
      category: "room",
      title: "Tent Entrance",
      description: "Wide doorway with zipper/velcro closure and level entry",
      measurements: "Door width: 36\" (91cm) minimum",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm) clearance", status: "available" },
          { label: "Door closure", value: "Easy-open zipper and velcro system", status: "available" },
          { label: "Threshold", value: "Ramped or no threshold", status: "available" },
          { label: "Lighting", value: "Path lighting at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-room-2",
      category: "room",
      title: "Bed",
      description: "Accessible bed height with clearance underneath",
      measurements: "Bed height: 24\" (61cm) • Under-bed clearance: 8\" (20cm)",
      status: "available",
      details: {
        items: [
          { label: "Bed height", value: "24 in (61cm) - standard accessible height", status: "available" },
          { label: "Space under bed", value: "8 in (20cm) clearance for lift", status: "available" },
          { label: "Space next to bed", value: "36 in (91cm) clearance on accessible side", status: "available" },
          { label: "Mattress type", value: "Medium firm with pillow-top", status: "available" },
          { label: "Light switches", value: "Reachable from bed at 36 in height", status: "available" },
          { label: "Phone placement", value: "Nightstand at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-room-3",
      category: "room",
      title: "Tent Amenities",
      description: "Accessible storage and controls throughout the tent",
      status: "available",
      details: {
        items: [
          { label: "Closet access", value: "Lowered clothing rod at 48 in (122cm)", status: "available" },
          { label: "Drawers", value: "Accessible reach height (32 in / 81cm)", status: "available" },
          { label: "Thermostat", value: "Located at 42 in (107cm) height", status: "available" },
          { label: "Light switches", value: "Located at 36 in (91cm) height", status: "available" },
          { label: "Outlets", value: "Located at 18 in (46cm) height", status: "available" },
          { label: "Curtain/blind controls", value: "Easy-pull cord at accessible height", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-room-4",
      category: "room",
      title: "Workspace / Writing Desk",
      description: "Accessible desk with knee clearance",
      measurements: "Desk height: 30\" (76cm) • Knee clearance: 27\" (69cm)",
      status: "available",
      details: {
        items: [
          { label: "Desk height", value: "30 in (76cm) - standard accessible height", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) high, 30 in (76cm) wide", status: "available" },
          { label: "Chair", value: "Armless desk chair with back support", status: "available" },
          { label: "Desk lamp", value: "Adjustable with easy controls", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-room-5",
      category: "room",
      title: "Tent Interior",
      description: "Step-free area with smooth flooring and ample space",
      measurements: "Turning radius: 60\" (152cm)",
      status: "available",
      details: {
        items: [
          { label: "Step-free area", value: "No steps or thresholds throughout tent", status: "available" },
          { label: "Free turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Floor surface", value: "Smooth canvas flooring with low-pile rug", status: "available" },
          { label: "Wheelchair clearance", value: "36 in (91cm) wide pathways", status: "available" },
          { label: "Mosquito netting", value: "Easy-access netting with wide openings", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-entrance-1",
      category: "entrance",
      title: "Camp Entrance",
      description: "Level entry with ramp access to main lodge and reception",
      measurements: "Ramp width: 48\" (122cm) • Ramp slope: 1:12",
      status: "available",
      details: {
        items: [
          { label: "Level entry", value: "Ramp access at main entrance", status: "available" },
          { label: "Ramp width", value: "48 in (122cm) clearance", status: "available" },
          { label: "Ramp slope", value: "1:12 slope - ADA compliant", status: "available" },
          { label: "Handrails", value: "Handrails on both sides of ramps", status: "available" },
          { label: "Covered drop-off", value: "Covered area with level access", status: "available" },
          { label: "Path lighting", value: "Well-lit pathways for evening navigation", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-entrance-2",
      category: "entrance",
      title: "Reception Desk",
      description: "Accessible check-in counter with lowered section",
      measurements: "Lowered section height: 34\" (86cm) • Standard section: 42\" (107cm)",
      status: "available",
      details: {
        items: [
          { label: "Lowered counter", value: "34 in (86cm) height for wheelchair users", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) clearance", status: "available" },
          { label: "Waiting area", value: "Ample space for wheelchair maneuvering", status: "available" },
          { label: "Staff assistance", value: "Staff trained for accessibility needs and safari adaptations", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-restaurant-1",
      category: "restaurant",
      title: "Dining Area",
      description: "Accessible tables and seating arrangements in main dining tent",
      measurements: "Table height: 30\" (76cm) • Aisle width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Accessible tables", value: "Multiple tables with knee clearance", status: "available" },
          { label: "Table height", value: "30 in (76cm) - standard accessible height", status: "available" },
          { label: "Aisle width", value: "36-48 in (91-122cm) between tables", status: "available" },
          { label: "Seating", value: "Armless chairs available", status: "available" },
          { label: "Menu accessibility", value: "Large print menus available upon request", status: "available" },
          { label: "Floor surface", value: "Smooth flooring throughout dining area", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-restaurant-2",
      category: "restaurant",
      title: "Buffet Area",
      description: "Accessible buffet counters with staff assistance",
      measurements: "Counter height: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Buffet height", value: "34 in (86cm) - accessible reach", status: "available" },
          { label: "Staff assistance", value: "Available to help with buffet service", status: "available" },
          { label: "Aisle width", value: "48 in (122cm) clearance around buffet", status: "available" },
          { label: "Food labels", value: "Large print labels available", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-parking-1",
      category: "parking",
      title: "Accessible Parking",
      description: "Designated accessible parking spaces near reception",
      measurements: "Space width: 12ft (366cm) including access aisle",
      status: "available",
      details: {
        items: [
          { label: "Accessible spaces", value: "2 designated spaces near reception", status: "available" },
          { label: "Van accessible spaces", value: "1 space with 98 in (249cm) height clearance", status: "available" },
          { label: "Access aisle", value: "60 in (152cm) wide access aisle", status: "available" },
          { label: "Surface", value: "Level, firm, slip-resistant surface", status: "available" },
          { label: "Signage", value: "Clearly marked with international symbol", status: "available" },
          { label: "Pathway", value: "Accessible path to reception", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-common-1",
      category: "common-areas",
      title: "Waterhole Viewing Deck",
      description: "Wheelchair-accessible viewing platform with excellent wildlife viewing",
      measurements: "Deck width: 96\" (244cm) • Rail height: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Ramp access", value: "Gentle slope ramp to viewing deck", status: "available" },
          { label: "Deck surface", value: "Smooth, non-slip wooden decking", status: "available" },
          { label: "Rail height", value: "36 in (91cm) - accessible viewing height", status: "available" },
          { label: "Seating", value: "Benches with back support available", status: "available" },
          { label: "Turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Shade structure", value: "Covered areas with accessible seating", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-common-2",
      category: "common-areas",
      title: "Swimming Pool",
      description: "Accessible pool entry with pool lift available",
      measurements: "Pool lift capacity: 400 lbs (181kg)",
      status: "available",
      details: {
        items: [
          { label: "Pool lift", value: "Pool lift available for accessible entry", status: "available" },
          { label: "Pool lift capacity", value: "400 lbs (181kg) maximum", status: "available" },
          { label: "Deck access", value: "Level pool deck with non-slip surface", status: "available" },
          { label: "Pool deck seating", value: "Accessible lounge chairs available", status: "available" },
          { label: "Staff assistance", value: "Staff trained to assist with pool lift operation", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-common-3",
      category: "common-areas",
      title: "Game Drive Vehicles",
      description: "Modified safari vehicles with wheelchair lift for wildlife viewing",
      measurements: "Vehicle entrance: 32\" (81cm) • Wheelchair lift capacity: 350 lbs (159kg)",
      status: "available",
      details: {
        items: [
          { label: "Wheelchair lift", value: "Hydraulic lift available upon request", status: "available" },
          { label: "Vehicle entrance", value: "32 in (81cm) wide door opening", status: "available" },
          { label: "Seating configuration", value: "Wheelchair securement positions available", status: "available" },
          { label: "Advance notice", value: "24-48 hours notice required for vehicle modification", status: "available" },
          { label: "Viewing experience", value: "Open-sided vehicles with elevated viewing", status: "available" },
          { label: "Staff support", value: "Trained driver-guide for accessibility support", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-common-4",
      category: "common-areas",
      title: "Lobby & Lounge Area",
      description: "Accessible seating and pathways throughout main lodge",
      measurements: "Pathway width: 48\" (122cm)",
      status: "available",
      details: {
        items: [
          { label: "Pathway width", value: "48 in (122cm) throughout lobby", status: "available" },
          { label: "Seating areas", value: "Accessible seating with armrests", status: "available" },
          { label: "Rest areas", value: "Seating available at intervals", status: "available" },
          { label: "Signage", value: "High-contrast, large print signage", status: "available" },
          { label: "Floor surface", value: "Smooth flooring with low-pile rugs", status: "available" }
        ]
      }
    },
    {
      id: "sweetwaters-common-5",
      category: "common-areas",
      title: "Gift Shop",
      description: "Accessible shopping with wide aisles and lowered counters",
      measurements: "Aisle width: 36\" (91cm) • Counter height: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Aisle width", value: "36 in (91cm) minimum", status: "available" },
          { label: "Counter height", value: "34 in (86cm) for checkout", status: "available" },
          { label: "Turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Staff assistance", value: "Staff available to assist with shopping", status: "available" }
        ]
      }
    }
  ];

  // ============================================
// ============================================
// MUTHU LAKE NAIVASHA COUNTRY CLUB (naivasha-008)
// ============================================
export const muthuLakeNaivashaFeatures: AccessibilityFeature[] = [
  {
    id: "muthu-naivasha-bathroom-1",
    category: "bathroom",
    title: "Roll-in Shower",
    description: "Spacious roll-in shower with zero threshold and grab bars",
    measurements: "Shower area: 60\" x 42\" (152cm x 107cm)",
    status: "available",
    details: {
      items: [
        { label: "Roll-in shower", value: "Zero threshold entry", status: "available" },
        { label: "Grab bars", value: "Horizontal and vertical stainless steel grab bars", status: "available" },
        { label: "Shower seat", value: "Built-in bench with back support", status: "available" },
        { label: "Handheld showerhead", value: "Adjustable height on slide bar", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-bathroom-2",
    category: "bathroom",
    title: "Toilet",
    description: "Accessible toilet with grab bars on both sides",
    measurements: "Toilet height: 18\" (46cm)",
    status: "available",
    details: {
      items: [
        { label: "Toilet height", value: "18 in (46cm) - comfort height", status: "available" },
        { label: "Grab bars", value: "Side and rear grab bars", status: "available" },
        { label: "Transfer space", value: "36 in (91cm) clearance", status: "available" },
        { label: "Emergency pull cord", value: "Within reach", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-bathroom-3",
    category: "bathroom",
    title: "Sink",
    description: "Accessible sink with knee clearance and lever handles",
    measurements: "Sink height: 32\" (81cm)",
    status: "available",
    details: {
      items: [
        { label: "Sink height", value: "32 in (81cm)", status: "available" },
        { label: "Knee clearance", value: "27 in (69cm) high", status: "available" },
        { label: "Faucet", value: "Lever handles", status: "available" },
        { label: "Mirror", value: "Tilted mirror for seated users", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-bathroom-4",
    category: "bathroom",
    title: "Bathroom Interior",
    description: "Step-free area with ample turning space",
    measurements: "Turning radius: 60\" (152cm)",
    status: "available",
    details: {
      items: [
        { label: "Step-free area", value: "No steps or thresholds", status: "available" },
        { label: "Turning space", value: "60 in (152cm) turning radius", status: "available" },
        { label: "Floor surface", value: "Non-slip tile flooring", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-room-1",
    category: "room",
    title: "Room Entrance",
    description: "Wide doorway with lever handle and zero threshold",
    measurements: "Door width: 34\" (86cm)",
    status: "available",
    details: {
      items: [
        { label: "Door width", value: "34 in (86cm)", status: "available" },
        { label: "Door handle", value: "Lever handle", status: "available" },
        { label: "Threshold", value: "Zero threshold", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-room-2",
    category: "room",
    title: "Bed",
    description: "Accessible bed height with clearance underneath",
    measurements: "Bed height: 24\" (61cm)",
    status: "available",
    details: {
      items: [
        { label: "Bed height", value: "24 in (61cm)", status: "available" },
        { label: "Space under bed", value: "8 in (20cm) clearance", status: "available" },
        { label: "Side clearance", value: "36 in (91cm)", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-room-3",
    category: "room",
    title: "Room Amenities",
    description: "Accessible storage and controls at reachable heights",
    status: "available",
    details: {
      items: [
        { label: "Closet rod", value: "48 in (122cm) height", status: "available" },
        { label: "Light switches", value: "36 in (91cm) height", status: "available" },
        { label: "Outlets", value: "18 in (46cm) height", status: "available" },
        { label: "Safe location", value: "Lowered shelf at accessible height", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-room-4",
    category: "room",
    title: "Room Interior",
    description: "Step-free area with smooth flooring and ample space",
    measurements: "Turning radius: 60\" (152cm)",
    status: "available",
    details: {
      items: [
        { label: "Step-free area", value: "No steps or thresholds", status: "available" },
        { label: "Turning space", value: "60 in (152cm) turning radius", status: "available" },
        { label: "Floor surface", value: "Smooth tile flooring", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-entrance-1",
    category: "entrance",
    title: "Main Entrance",
    description: "Level entry with automatic doors and paved pathway",
    measurements: "Door width: 36\" (91cm)",
    status: "available",
    details: {
      items: [
        { label: "Level entry", value: "Step-free access", status: "available" },
        { label: "Door type", value: "Automatic sliding doors", status: "available" },
        { label: "Reception desk", value: "Lowered section at 32 in", status: "available" },
        { label: "Pathway", value: "48 in (122cm) paved pathway", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-restaurant-1",
    category: "restaurant",
    title: "Dining Area",
    description: "Accessible tables with knee clearance and wide aisles",
    measurements: "Table height: 30\" (76cm)",
    status: "available",
    details: {
      items: [
        { label: "Table height", value: "30 in (76cm)", status: "available" },
        { label: "Knee clearance", value: "27 in (69cm) high", status: "available" },
        { label: "Aisle width", value: "36-48 in (91-122cm)", status: "available" },
        { label: "Floor surface", value: "Smooth flooring", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-restaurant-2",
    category: "restaurant",
    title: "Buffet Area",
    description: "Lowered buffet counters with staff assistance",
    measurements: "Counter height: 34\" (86cm)",
    status: "available",
    details: {
      items: [
        { label: "Buffet height", value: "34 in (86cm)", status: "available" },
        { label: "Aisle width", value: "48 in (122cm) clearance", status: "available" },
        { label: "Staff assistance", value: "Available upon request", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-parking-1",
    category: "parking",
    title: "Accessible Parking",
    description: "Designated accessible parking spaces near reception",
    measurements: "Space width: 12ft (366cm) including aisle",
    status: "available",
    details: {
      items: [
        { label: "Accessible spaces", value: "3 designated spaces", status: "available" },
        { label: "Access aisle", value: "60 in (152cm) wide", status: "available" },
        { label: "Surface", value: "Level, firm, slip-resistant", status: "available" },
        { label: "Signage", value: "International symbol displayed", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-common-1",
    category: "common-areas",
    title: "Swimming Pool",
    description: "Accessible pool entry with ramp and pool lift available",
    status: "available",
    details: {
      items: [
        { label: "Pool ramp", value: "Gradual ramp entry", status: "available" },
        { label: "Pool lift", value: "Available upon request", status: "available" },
        { label: "Deck access", value: "Level pool deck", status: "available" },
        { label: "Surface", value: "Non-slip deck surface", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-common-2",
    category: "common-areas",
    title: "Garden & Lake Access",
    description: "Accessible pathways through gardens to lake viewing areas",
    measurements: "Pathway width: 48\" (122cm)",
    status: "available",
    details: {
      items: [
        { label: "Pathway width", value: "48 in (122cm)", status: "available" },
        { label: "Surface", value: "Smooth, firm, slip-resistant", status: "available" },
        { label: "Slope", value: "1:12 gradient maximum", status: "available" },
        { label: "Rest areas", value: "Benches with back support", status: "available" }
      ]
    }
  },
  {
    id: "muthu-naivasha-common-3",
    category: "common-areas",
    title: "Lake Viewing Platform",
    description: "Wheelchair-accessible viewing platform with ramp access",
    measurements: "Platform width: 96\" (244cm)",
    status: "available",
    details: {
      items: [
        { label: "Ramp access", value: "Gentle slope ramp", status: "available" },
        { label: "Rail height", value: "36 in (91cm)", status: "available" },
        { label: "Seating", value: "Benches with back support", status: "available" },
        { label: "Turning space", value: "60 in (152cm) turning radius", status: "available" }
      ]
    }
  }
];

export const muthuLakeNaivashaImages: AccessibilityImages = {
  bathroom: ["/muthu-bathroom-1.jpg", "/muthu-bathroom-2.jpg", "/muthu-bathroom-3.jpg", "/muthu-bathroom-4.jpg"],
  room: ["/muthu-room-1.jpg", "/muthu-room-2.jpg", "/muthu-room-3.jpg"],
  entrance: ["/muthu-entrance-1.jpg", "/muthu-entrance-2.jpg"],
  restaurant: ["/muthu-restaurant-1.jpg", "/muthu-restaurant-2.jpg"],
  parking: ["/muthu-parking-1.jpg"],
  'common-areas': ["/muthu-pool-1.jpg", "/muthu-garden-1.jpg", "/muthu-lake-view-1.jpg"]
};
  
  export const crownePlazaImages: AccessibilityImages = {
    bathroom: ["/crowne-plaza-bathroom-1.jpg", "/crowne-plaza-bathroom-2.jpg", "/crowne-plaza-bathroom-3.jpg"],
    room: ["/crowne-plaza-room-1.jpg", "/crowne-plaza-room-2.jpg"],
    entrance: ["/crowne-plaza-entrance-1.jpg", "/crowne-plaza-entrance-2.jpg"],
    restaurant: ["/crowne-plaza-restaurant-1.jpg"],
    parking: ["/crowne-plaza-parking-1.jpg"],
    'common-areas': ["/crowne-plaza-common-1.jpg", "/crowne-plaza-common-2.jpg"]
  };
  
  // ============================================
  // 2. KIBO SAFARI CAMP (amboseli-010)
  // ============================================
  export const kiboCampFeatures: AccessibilityFeature[] = [
    {
      id: "kibo-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars installed", status: "available" },
          { label: "Shower seat", value: "Fold-down shower seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height with hose", status: "available" }
        ]
      }
    },
    {
      id: "kibo-bathroom-2",
      category: "bathroom",
      title: "Toilet Area",
      description: "Accessible toilet with grab bars",
      measurements: "Toilet height: 18\" (46cm)",
      status: "available",
      details: {
        items: [
          { label: "Toilet height", value: "18 in (46cm) - comfort height", status: "available" },
          { label: "Grab bars", value: "Side and rear grab bars", status: "available" },
          { label: "Clearance", value: "36 in (91cm) transfer space", status: "available" }
        ]
      }
    },
    {
      id: "kibo-bathroom-3",
      category: "bathroom",
      title: "Sink",
      description: "Accessible sink with knee clearance",
      measurements: "Sink height: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Sink height", value: "34 in (86cm) from floor", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) high", status: "available" },
          { label: "Faucet", value: "Lever handles", status: "available" }
        ]
      }
    },
    {
      id: "kibo-room-1",
      category: "room",
      title: "Room Entrance",
      description: "Wide doorway with easy access",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm) clearance", status: "available" },
          { label: "Threshold", value: "Ramped or no threshold", status: "available" },
          { label: "Door handle", value: "Lever handle", status: "available" }
        ]
      }
    },
    {
      id: "kibo-room-2",
      category: "room",
      title: "Bed",
      description: "Accessible bed height with clearance",
      measurements: "Bed height: 24\" (61cm)",
      status: "available",
      details: {
        items: [
          { label: "Bed height", value: "24 in (61cm) - accessible height", status: "available" },
          { label: "Space under bed", value: "8 in (20cm) clearance", status: "available" },
          { label: "Space next to bed", value: "36 in (91cm) clearance", status: "available" }
        ]
      }
    },
    {
      id: "kibo-room-3",
      category: "room",
      title: "Room Interior",
      description: "Step-free area with ample space",
      measurements: "Turning radius: 60\" (152cm)",
      status: "available",
      details: {
        items: [
          { label: "Step-free area", value: "No steps or thresholds", status: "available" },
          { label: "Turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Clearance", value: "36 in (91cm) pathways", status: "available" }
        ]
      }
    }
  ];
  
  export const kiboCampImages: AccessibilityImages = {
    bathroom: ["/kibo-camp-bathroom-1.jpg", "/kibo-camp-bathroom-2.jpg"],
    room: ["/kibo-camp-room-1.jpg", "/kibo-camp-room-2.jpg"],
    entrance: ["/kibo-camp-entrance-1.jpg"],
    restaurant: ["/kibo-camp-restaurant-1.jpg"],
    parking: ["/kibo-camp-parking-1.jpg"],
    'common-areas': ["/kibo-camp-common-1.jpg"]
  };
  
  // ============================================
  // 3. TAMARIND TREE HOTEL (nairobi-014)
  // ============================================
  export const tamarindTreeFeatures: AccessibilityFeature[] = [
    {
      id: "tamarind-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with grab bars",
      measurements: "Shower area: 58\" x 34\" (147cm x 86cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Built-in shower bench", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "tamarind-bathroom-2",
      category: "bathroom",
      title: "Toilet",
      description: "Accessible toilet with grab bars",
      measurements: "Toilet height: 17.5\" (44cm)",
      status: "available",
      details: {
        items: [
          { label: "Toilet height", value: "17.5 in (44cm)", status: "available" },
          { label: "Grab bars", value: "Side and rear grab bars", status: "available" },
          { label: "Transfer space", value: "36 in (91cm) clearance", status: "available" }
        ]
      }
    },
    {
      id: "tamarind-bathroom-3",
      category: "bathroom",
      title: "Sink",
      description: "Accessible sink with knee clearance",
      measurements: "Sink height: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Sink height", value: "34 in (86cm)", status: "available" },
          { label: "Knee clearance", value: "27 in (69cm) high", status: "available" },
          { label: "Faucet", value: "Lever handles", status: "available" }
        ]
      }
    },
    {
      id: "tamarind-room-1",
      category: "room",
      title: "Room Entrance",
      description: "Wide doorway with easy access",
      measurements: "Door width: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "34 in (86cm)", status: "available" },
          { label: "Door handle", value: "Lever handle", status: "available" },
          { label: "Threshold", value: "Ramped", status: "available" }
        ]
      }
    },
    {
      id: "tamarind-room-2",
      category: "room",
      title: "Bed",
      description: "Accessible bed height",
      measurements: "Bed height: 26\" (66cm)",
      status: "available",
      details: {
        items: [
          { label: "Bed height", value: "26 in (66cm)", status: "available" },
          { label: "Space under bed", value: "6 in (15cm) clearance", status: "available" },
          { label: "Side clearance", value: "36 in (91cm)", status: "available" }
        ]
      }
    },
    {
      id: "tamarind-room-3",
      category: "room",
      title: "Room Interior",
      description: "Step-free area with ample turning space",
      measurements: "Turning radius: 60\" (152cm)",
      status: "available",
      details: {
        items: [
          { label: "Step-free area", value: "No steps or thresholds", status: "available" },
          { label: "Turning space", value: "60 in (152cm) turning radius", status: "available" },
          { label: "Floor surface", value: "Smooth tile flooring", status: "available" }
        ]
      }
    }
  ];
  
  export const tamarindTreeImages: AccessibilityImages = {
    bathroom: ["/tamarind-tree-bathroom-1.jpg", "/tamarind-tree-bathroom-2.jpg"],
    room: ["/tamarind-tree-room-1.jpg"],
    entrance: ["/tamarind-tree-entrance-1.jpg"],
    restaurant: ["/tamarind-tree-restaurant-1.jpg"],
    parking: ["/tamarind-tree-parking-1.jpg"],
    'common-areas': ["/tamarind-tree-common-1.jpg"]
  };
  
  // ============================================
  // 4. SAROVA PANAFRIC HOTEL (nairobi-015)
  // ============================================
  export const sarovaPanafricFeatures: AccessibilityFeature[] = [
    {
      id: "sarova-bathroom-1",
      category: "bathroom",
      title: "Shower",
      description: "Roll-in shower available. Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide",
      measurements: "Entrance: 58\" (147cm) wide • Cubicle: 37\" (94cm) x 58\" (147cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower available", value: "Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide", status: "available" },
          { label: "Grab bars within shower", value: "Available", status: "available" },
          { label: "Fixed shower seat", value: "Located next to the showerhead", status: "available" },
          { label: "Portable shower seat", value: "Available upon request", status: "available" },
          { label: "Handheld showerhead", value: "Available at 75 in from the floor", status: "available" }
        ]
      }
    },
    {
      id: "sarova-bathroom-2",
      category: "bathroom",
      title: "Sink",
      description: "The sink height is 33.5 in. The space under the sink is 10 in long, 34.5 in wide, 27 in high",
      measurements: "Sink height: 33.5\" (85cm) • Knee clearance: 10\" (25cm) deep x 34.5\" (88cm) wide x 27\" (69cm) high",
      status: "available",
      details: {
        items: [
          { label: "Sink height", value: "33.5 in (85cm)", status: "available" },
          { label: "Space under sink", value: "10 in long, 34.5 in wide, 27 in high", status: "available" },
          { label: "Sink handle type", value: "Lever handle", status: "available" }
        ]
      }
    },
    {
      id: "sarova-bathroom-3",
      category: "bathroom",
      title: "Bathroom Entrance",
      description: "The door operation is manual door and opens out from bathroom",
      measurements: "Door opens outward • Manual operation",
      status: "available",
      details: {
        items: [
          { label: "Door operation", value: "Manual door opening outward", status: "available" }
        ]
      }
    },
    {
      id: "sarova-bathroom-4",
      category: "bathroom",
      title: "Bathroom Interior",
      description: "Free turning space of more than 60 in. This is a step-free area",
      measurements: "Turning radius: 60\"+ (152cm+)",
      status: "available",
      details: {
        items: [
          { label: "Free turning space", value: "More than 60 in (152cm)", status: "available" },
          { label: "Step-free area", value: "No steps or thresholds", status: "available" }
        ]
      }
    },
    {
      id: "sarova-room-1",
      category: "room",
      title: "Room Entrance",
      description: "There is 1 step to enter the room (2 in tall). Steps have no handrails. Door is 33 in wide. Door opens with lever. Door opens with key card",
      measurements: "Step height: 2\" (5cm) • Door width: 33\" (84cm)",
      status: "partial",
      details: {
        items: [
          { label: "Step to enter", value: "1 step (2 in / 5cm tall)", status: "partial" },
          { label: "Step handrails", value: "No handrails", status: "unavailable" },
          { label: "Door width", value: "33 in (84cm)", status: "available" },
          { label: "Door handle", value: "Lever handle", status: "available" },
          { label: "Door access", value: "Key card", status: "available" }
        ]
      }
    },
    {
      id: "sarova-room-2",
      category: "room",
      title: "Room Amenities",
      description: "Step-free access to the closet. Drawers and clothing rod are at an accessible reach height",
      status: "available",
      details: {
        items: [
          { label: "Closet access", value: "Step-free access", status: "available" },
          { label: "Drawers height", value: "Accessible reach height", status: "available" },
          { label: "Clothing rod height", value: "Accessible reach height", status: "available" }
        ]
      }
    },
    {
      id: "sarova-room-3",
      category: "room",
      title: "Bed",
      description: "Bed is too high (27 in). There is free space under the bed: 4.5 in long, 67 in wide, 7 in high. There is enough space next to the bed (72 in). The mattress is slightly firm. Light switches and phone are reachable from the bed",
      measurements: "Bed height: 27\" (69cm) • Side clearance: 72\" (183cm)",
      status: "partial",
      details: {
        items: [
          { label: "Bed height", value: "27 in (69cm) - Too high", status: "unavailable" },
          { label: "Space under bed", value: "4.5 in x 67 in x 7 in (11cm x 170cm x 18cm)", status: "partial" },
          { label: "Space next to bed", value: "72 in (183cm)", status: "available" },
          { label: "Mattress firmness", value: "Slightly firm", status: "available" },
          { label: "Light switches reachable", value: "Yes", status: "available" },
          { label: "Phone reachable", value: "Yes", status: "available" }
        ]
      }
    },
    {
      id: "sarova-room-4",
      category: "room",
      title: "Room Features",
      description: "The mirror is 24.25 in from the floor. The desk height is 30 in. The space under the desk is 18.25 in long, 43 in wide, 28 in high. The chair has a backrest",
      measurements: "Mirror height: 24.25\" (62cm) • Desk height: 30\" (76cm)",
      status: "available",
      details: {
        items: [
          { label: "Mirror height", value: "24.25 in (62cm) from floor", status: "available" },
          { label: "Desk height", value: "30 in (76cm)", status: "available" },
          { label: "Space under desk", value: "18.25 in long, 43 in wide, 28 in high", status: "available" },
          { label: "Chair backrest", value: "Available", status: "available" }
        ]
      }
    },
    {
      id: "sarova-room-5",
      category: "room",
      title: "Room Interior",
      description: "This is a step-free area. Free turning space of more than 60 in. The floor is smooth (tile, hardwood, etc.). The area is wide enough for a wheelchair user (32 in or more). Light switches and outlets are at an accessible height",
      status: "available",
      details: {
        items: [
          { label: "Step-free area", value: "Yes", status: "available" },
          { label: "Free turning space", value: "More than 60 in (152cm)", status: "available" },
          { label: "Floor surface", value: "Smooth (tile/hardwood)", status: "available" },
          { label: "Wheelchair clearance", value: "32 in (81cm) or more", status: "available" },
          { label: "Light switches height", value: "Accessible height", status: "available" },
          { label: "Outlets height", value: "Accessible height", status: "available" }
        ]
      }
    },
    {
      id: "sarova-entrance-1",
      category: "entrance",
      title: "Hotel Entrance",
      description: "Ramp access at main entrance",
      measurements: "Ramp slope: 1:12",
      status: "available",
      details: {
        items: [
          { label: "Ramp access", value: "Permanent ramp with non-slip surface", status: "available" },
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Automatic doors", value: "Power-assisted", status: "available" }
        ]
      }
    },
    {
      id: "sarova-restaurant-1",
      category: "restaurant",
      title: "Dining Area",
      description: "Accessible tables available",
      measurements: "Table height: 30\" (76cm)",
      status: "available",
      details: {
        items: [
          { label: "Accessible tables", value: "Available with knee clearance", status: "available" },
          { label: "Aisle width", value: "36 in (91cm)", status: "available" },
          { label: "Staff assistance", value: "Available", status: "available" }
        ]
      }
    },
    {
      id: "sarova-parking-1",
      category: "parking",
      title: "Accessible Parking",
      description: "Designated accessible parking spaces",
      measurements: "Space width: 12ft (366cm)",
      status: "available",
      details: {
        items: [
          { label: "Accessible spaces", value: "3 designated spaces", status: "available" },
          { label: "Access aisle", value: "60 in (152cm)", status: "available" },
          { label: "Proximity", value: "Near main entrance", status: "available" }
        ]
      }
    },
    {
      id: "sarova-common-1",
      category: "common-areas",
      title: "Elevator Access",
      description: "Accessible elevators to all floors",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Controls height", value: "36-48 in (91-122cm)", status: "available" },
          { label: "Braille buttons", value: "Available", status: "available" }
        ]
      }
    }
  ];
  
  export const sarovaPanafricImages: AccessibilityImages = {
    bathroom: ["/sarova-panafric-bathroom-1.jpg", "/sarova-panafric-bathroom-2.jpg", "/sarova-panafric-bathroom-3.jpg", "/sarova-panafric-bathroom-4.jpg"],
    room: ["/sarova-panafric-room-1.jpg", "/sarova-panafric-room-2.jpg", "/sarova-panafric-room-3.jpg"],
    entrance: ["/sarova-panafric-entrance-1.jpg", "/sarova-panafric-entrance-2.jpg"],
    restaurant: ["/sarova-panafric-restaurant-1.jpg", "/sarova-panafric-restaurant-2.jpg"],
    parking: ["/sarova-panafric-parking-1.jpg"],
    'common-areas': ["/sarova-panafric-common-1.jpg", "/sarova-panafric-common-2.jpg"]
  };
  
  // ============================================
  // 5. SAROVA LION HILL GAME LODGE (nakuru-012)
  // ============================================
  export const sarovaLionHillFeatures: AccessibilityFeature[] = [
    {
      id: "lionhill-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Fold-down seat with back support", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "lionhill-bathroom-2",
      category: "bathroom",
      title: "Toilet Area",
      description: "Accessible toilet with grab bars",
      measurements: "Toilet height: 18\" (46cm)",
      status: "available",
      details: {
        items: [
          { label: "Toilet height", value: "18 in (46cm) - comfort height", status: "available" },
          { label: "Grab bars", value: "Side and rear grab bars", status: "available" },
          { label: "Transfer space", value: "36 in (91cm) clearance", status: "available" }
        ]
      }
    },
    {
      id: "lionhill-room-1",
      category: "room",
      title: "Room Features",
      description: "Lake view accessible room with wide doorways",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Turning radius", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "Lake view", value: "Accessible from wheelchair", status: "available" }
        ]
      }
    },
    {
      id: "lionhill-entrance-1",
      category: "entrance",
      title: "Lodge Entrance",
      description: "Level entry with ramp access",
      measurements: "Ramp slope: 1:12",
      status: "available",
      details: {
        items: [
          { label: "Level entry", value: "Ramp access at main entrance", status: "available" },
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Pathway", value: "Smooth, level surface", status: "available" }
        ]
      }
    },
    {
      id: "lionhill-common-1",
      category: "common-areas",
      title: "Game Viewing",
      description: "Accessible game drive vehicles",
      status: "available",
      details: {
        items: [
          { label: "Accessible vehicles", value: "Available for game drives", status: "available" },
          { label: "Vehicle lift", value: "Hydraulic lift for wheelchair access", status: "available" },
          { label: "Staff assistance", value: "Trained guides available", status: "available" }
        ]
      }
    }
  ];
  
  export const sarovaLionHillImages: AccessibilityImages = {
    bathroom: ["/sarova-lion-hill-bathroom-1.jpg", "/sarova-lion-hill-bathroom-2.jpg"],
    room: ["/sarova-lion-hill-room-1.jpg"],
    entrance: ["/sarova-lion-hill-entrance-1.jpg"],
    restaurant: ["/sarova-lion-hill-restaurant-1.jpg"],
    parking: ["/sarova-lion-hill-parking-1.jpg"],
    'common-areas': ["/sarova-lion-hill-common-1.jpg"]
  };
  
  // ============================================
  // 6. SAROVA WOODLANDS HOTEL & SPA (nakuru-013)
  // ============================================
  export const sarovaWoodlandsFeatures: AccessibilityFeature[] = [
    {
      id: "woodlands-bathroom-1",
      category: "bathroom",
      title: "Wheelchair Accessible Bathroom",
      description: "Roll-in shower with grab bars and shower seat",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Installed throughout", status: "available" },
          { label: "Shower seat", value: "Built-in seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "woodlands-room-1",
      category: "room",
      title: "Accessible Room",
      description: "Spacious room with wide doorways and clear floor space",
      measurements: "Door width: 36\" (91cm) • Turning radius: 60\" (152cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Lowered controls", value: "Light switches and thermostats at 36 in", status: "available" },
          { label: "Desk height", value: "30 in (76cm)", status: "available" }
        ]
      }
    },
    {
      id: "woodlands-spa-1",
      category: "common-areas",
      title: "Spa Access",
      description: "Accessible spa facilities",
      status: "available",
      details: {
        items: [
          { label: "Spa entrance", value: "Wide doorway with ramp", status: "available" },
          { label: "Treatment rooms", value: "Accessible treatment tables", status: "available" },
          { label: "Staff training", value: "Trained for accessibility needs", status: "available" }
        ]
      }
    }
  ];
  
  export const sarovaWoodlandsImages: AccessibilityImages = {
    bathroom: ["/sarova-woodlands-bathroom-1.jpg"],
    room: ["/sarova-woodlands-room-1.jpg"],
    entrance: ["/sarova-woodlands-entrance-1.jpg"],
    restaurant: ["/sarova-woodlands-restaurant-1.jpg"],
    parking: ["/sarova-woodlands-parking-1.jpg"],
    'common-areas': ["/sarova-woodlands-common-1.jpg"]
  };
  
  // ============================================
  // 7. SAROVA IMPERIAL HOTEL (kisumu-001)
  // ============================================
  export const sarovaImperialFeatures: AccessibilityFeature[] = [
    {
      id: "imperial-bathroom-1",
      category: "bathroom",
      title: "Accessible Bathroom",
      description: "Roll-in shower with grab bars and handheld showerhead",
      measurements: "Shower area: 58\" x 34\" (147cm x 86cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold", status: "available" },
          { label: "Grab bars", value: "Available", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" },
          { label: "Shower seat", value: "Fold-down seat", status: "available" }
        ]
      }
    },
    {
      id: "imperial-room-1",
      category: "room",
      title: "Accessible Room",
      description: "Lake Victoria view accessible room",
      measurements: "Door width: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "34 in (86cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Lake view", value: "Accessible window seating", status: "available" }
        ]
      }
    }
  ];
  
  export const sarovaImperialImages: AccessibilityImages = {
    bathroom: ["/sarova-imperial-bathroom-1.jpg"],
    room: ["/sarova-imperial-room-1.jpg"],
    entrance: ["/sarova-imperial-entrance-1.jpg"],
    restaurant: ["/sarova-imperial-restaurant-1.jpg"],
    parking: ["/sarova-imperial-parking-1.jpg"],
    'common-areas': ["/sarova-imperial-common-1.jpg"]
  };
  
  // ============================================
  // 8. SAROVA WHITESANDS BEACH RESORT & SPA (mombasa-001)
  // ============================================
  export const sarovaWhitesandsFeatures: AccessibilityFeature[] = [
    {
      id: "whitesands-bathroom-1",
      category: "bathroom",
      title: "Accessible Bathroom",
      description: "Roll-in shower with grab bars, shower seat, and handheld showerhead",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Built-in seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "whitesands-room-1",
      category: "room",
      title: "Accessible Room",
      description: "Ocean view accessible room",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "Balcony access", value: "Ramped access", status: "available" }
        ]
      }
    },
    {
      id: "whitesands-beach-1",
      category: "common-areas",
      title: "Beach Access",
      description: "Beach wheelchairs available for guests",
      status: "available",
      details: {
        items: [
          { label: "Beach wheelchairs", value: "Available upon request", status: "available" },
          { label: "Accessible pathways", value: "To beach area", status: "available" },
          { label: "Pool lift", value: "Available at main pool", status: "available" },
          { label: "Beach matting", value: "Roll-out mats for wheelchair access to sand", status: "available" }
        ]
      }
    },
    {
      id: "whitesands-pool-1",
      category: "common-areas",
      title: "Pool Access",
      description: "Accessible swimming pool facilities",
      status: "available",
      details: {
        items: [
          { label: "Pool lift", value: "Hydraulic pool lift", status: "available" },
          { label: "Pool deck", value: "Level, slip-resistant surface", status: "available" },
          { label: "Accessible changing rooms", value: "Available", status: "available" }
        ]
      }
    }
  ];
  
  export const sarovaWhitesandsImages: AccessibilityImages = {
    bathroom: ["/sarova-whitesands-bathroom-1.jpg", "/sarova-whitesands-bathroom-2.jpg"],
    room: ["/sarova-whitesands-room-1.jpg"],
    entrance: ["/sarova-whitesands-entrance-1.jpg"],
    restaurant: ["/sarova-whitesands-restaurant-1.jpg"],
    parking: ["/sarova-whitesands-parking-1.jpg"],
    'common-areas': ["/sarova-whitesands-common-1.jpg", "/sarova-whitesands-beach-1.jpg"]
  };
  
  // ============================================
  // 9. ASHNIL SAMBURU CAMP (samburu-005)
  // ============================================
  export const ashnilSamburuFeatures: AccessibilityFeature[] = [
    {
      id: "ashnil-samburu-bathroom-1",
      category: "bathroom",
      title: "Accessible Bathroom",
      description: "Roll-in shower with grab bars",
      measurements: "Shower area: 58\" x 34\" (147cm x 86cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold", status: "available" },
          { label: "Grab bars", value: "Available", status: "available" },
          { label: "Shower seat", value: "Available", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "ashnil-samburu-room-1",
      category: "room",
      title: "Tented Room",
      description: "Accessible tented accommodation",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Tent entrance", value: "Wide opening with level entry", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "River view", value: "Accessible from room", status: "available" }
        ]
      }
    },
    {
      id: "ashnil-samburu-common-1",
      category: "common-areas",
      title: "Game Drives",
      description: "Accessible safari vehicles",
      status: "available",
      details: {
        items: [
          { label: "Accessible vehicles", value: "Available", status: "available" },
          { label: "Vehicle lift", value: "Hydraulic lift for wheelchair access", status: "available" },
          { label: "Expert guides", value: "Trained for accessibility needs", status: "available" }
        ]
      }
    }
  ];
  
  export const ashnilSamburuImages: AccessibilityImages = {
    bathroom: ["/ashnil-samburu-bathroom-1.jpg"],
    room: ["/ashnil-samburu-room-1.jpg"],
    entrance: ["/ashnil-samburu-entrance-1.jpg"],
    restaurant: ["/ashnil-samburu-restaurant-1.jpg"],
    parking: ["/ashnil-samburu-parking-1.jpg"],
    'common-areas': ["/ashnil-samburu-common-1.jpg"]
  };
  
  // ============================================
  // 10. ASHNIL MARA CAMP (maasai-mara-010)
  // ============================================
  export const ashnilMaraFeatures: AccessibilityFeature[] = [
    {
      id: "ashnil-mara-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Fold-down shower seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "ashnil-mara-room-1",
      category: "room",
      title: "Tented Room",
      description: "Accessible tented accommodation with river view",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Tent entrance", value: "Wide opening with level entry", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "River view", value: "Accessible from room", status: "available" }
        ]
      }
    },
    {
      id: "ashnil-mara-common-1",
      category: "common-areas",
      title: "Game Drives",
      description: "Accessible safari vehicles for game viewing",
      status: "available",
      details: {
        items: [
          { label: "Accessible vehicles", value: "Available", status: "available" },
          { label: "Vehicle lift", value: "Hydraulic lift for wheelchair access", status: "available" },
          { label: "Expert guides", value: "Trained for accessibility needs", status: "available" }
        ]
      }
    }
  ];
  
  export const ashnilMaraImages: AccessibilityImages = {
    bathroom: [],
    room: [],
    entrance: [],
    restaurant: [],
    parking: [],
    'common-areas': []
  };
  
  // ============================================
  // 11. SOROI MARA BUSH CAMP (maasai-mara-011)
  // ============================================
  export const soroiMaraBushFeatures: AccessibilityFeature[] = [
    {
      id: "soroi-bush-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Fold-down shower seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "soroi-bush-room-1",
      category: "room",
      title: "Bush Camp Tent",
      description: "Accessible eco-friendly tented accommodation",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Tent entrance", value: "Wide opening with level entry", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "Eco-friendly design", value: "Low-impact accessible features", status: "available" }
        ]
      }
    },
    {
      id: "soroi-bush-common-1",
      category: "common-areas",
      title: "Walking Safaris",
      description: "Accessible guided walking experiences",
      status: "available",
      details: {
        items: [
          { label: "Accessible trails", value: "Smooth, level paths available", status: "available" },
          { label: "Expert guides", value: "Trained for accessibility needs", status: "available" },
          { label: "Walking poles", value: "Available upon request", status: "available" }
        ]
      }
    }
  ];
  
  export const soroiMaraBushImages: AccessibilityImages = {
    bathroom: [],
    room: [],
    entrance: [],
    restaurant: [],
    parking: [],
    'common-areas': []
  };
  
  // ============================================
  // 12. SOROI LARSENS CAMP (maasai-mara-012)
  // ============================================
  export const soroiLarsensMaraFeatures: AccessibilityFeature[] = [
    {
      id: "soroi-larsens-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Fold-down shower seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "soroi-larsens-room-1",
      category: "room",
      title: "Luxury Tented Room",
      description: "Elegant accessible tented accommodation",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Tent entrance", value: "Wide opening with level entry", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "Private deck", value: "Ramped access to outdoor seating", status: "available" }
        ]
      }
    },
    {
      id: "soroi-larsens-common-1",
      category: "common-areas",
      title: "Hot Air Balloon Safaris",
      description: "Accessible hot air balloon experiences",
      status: "available",
      details: {
        items: [
          { label: "Accessible basket", value: "Modified basket for wheelchair access", status: "available" },
          { label: "Assisted boarding", value: "Staff assistance available", status: "available" },
          { label: "Advance notice", value: "Required for balloon safaris", status: "available" }
        ]
      }
    }
  ];
  
  export const soroiLarsensMaraImages: AccessibilityImages = {
    bathroom: [],
    room: [],
    entrance: [],
    restaurant: [],
    parking: [],
    'common-areas': []
  };
  
  // ============================================
  // 13. SOROI PRIVATE WING (maasai-mara-013)
  // ============================================
  export const soroiPrivateWingFeatures: AccessibilityFeature[] = [
    {
      id: "soroi-private-bathroom-1",
      category: "bathroom",
      title: "Luxury Accessible Bathroom",
      description: "Spacious roll-in shower with premium fixtures",
      measurements: "Shower area: 72\" x 48\" (183cm x 122cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry with marble flooring", status: "available" },
          { label: "Grab bars", value: "Premium stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Heated stone bench", status: "available" },
          { label: "Handheld showerhead", value: "Rain shower with handheld attachment", status: "available" },
          { label: "Dual controls", value: "Both seated and standing height", status: "available" }
        ]
      }
    },
    {
      id: "soroi-private-room-1",
      category: "room",
      title: "Private Wing Suite",
      description: "Exclusive accessible suite with private butler service",
      measurements: "Door width: 42\" (107cm) • Suite size: 800 sq ft",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "42 in (107cm) clearance", status: "available" },
          { label: "Turning space", value: "72 in (183cm) turning radius", status: "available" },
          { label: "Bed height", value: "24 in (61cm) with adjustable base", status: "available" },
          { label: "Private terrace", value: "Ramped access with panoramic views", status: "available" },
          { label: "Butler service", value: "24/7 accessible butler service", status: "available" }
        ]
      }
    }
  ];
  
  export const soroiPrivateWingImages: AccessibilityImages = {
    bathroom: [],
    room: [],
    entrance: [],
    restaurant: [],
    parking: [],
    'common-areas': []
  };
  
  // ============================================
  // 14. MARA MAISHA (maasai-mara-014)
  // ============================================
  export const maraMaishaFeatures: AccessibilityFeature[] = [
    {
      id: "mara-maisha-bathroom-1",
      category: "bathroom",
      title: "Eco-Friendly Accessible Bathroom",
      description: "Sustainable roll-in shower with eco-friendly fixtures",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Sustainable bamboo grab bars", status: "available" },
          { label: "Shower seat", value: "Teak wood bench", status: "available" },
          { label: "Handheld showerhead", value: "Low-flow adjustable showerhead", status: "available" }
        ]
      }
    },
    {
      id: "mara-maisha-room-1",
      category: "room",
      title: "Contemporary Eco-Lodge Room",
      description: "Stylish accessible room with infinity pool view",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "Smart controls", value: "Voice-activated room controls", status: "available" }
        ]
      }
    },
    {
      id: "mara-maisha-common-1",
      category: "common-areas",
      title: "Infinity Pool",
      description: "Accessible infinity pool with stunning Mara views",
      status: "available",
      details: {
        items: [
          { label: "Pool lift", value: "Hydraulic pool lift available", status: "available" },
          { label: "Zero-depth entry", value: "Gradual entry point available", status: "available" },
          { label: "Pool deck", value: "Level, slip-resistant surface", status: "available" }
        ]
      }
    }
  ];
  
  export const maraMaishaImages: AccessibilityImages = {
    bathroom: [],
    room: [],
    entrance: [],
    restaurant: [],
    parking: [],
    'common-areas': []
  };
  
  // ============================================
  // 15. KEEKOROK LODGE (maasai-mara-015)
  // ============================================
  export const keekorokFeatures: AccessibilityFeature[] = [
    {
      id: "keekorok-bathroom-1",
      category: "bathroom",
      title: "Accessible Bathroom",
      description: "Roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Built-in seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "keekorok-room-1",
      category: "room",
      title: "Classic Lodge Room",
      description: "Accessible room with waterhole views",
      measurements: "Door width: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "34 in (86cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "Waterhole view", value: "Accessible viewing area", status: "available" }
        ]
      }
    },
    {
      id: "keekorok-common-1",
      category: "common-areas",
      title: "Game Drives",
      description: "Accessible safari vehicles",
      status: "available",
      details: {
        items: [
          { label: "Accessible vehicles", value: "Available for game drives", status: "available" },
          { label: "Vehicle lift", value: "Hydraulic lift for wheelchair access", status: "available" },
          { label: "Expert guides", value: "Trained for accessibility needs", status: "available" }
        ]
      }
    }
  ];
  
  export const keekorokImages: AccessibilityImages = {
    bathroom: [],
    room: [],
    entrance: [],
    restaurant: [],
    parking: [],
    'common-areas': []
  };
  
  // ============================================
  // 16-19. LAKE NAIVASHA HOTELS
  // ============================================
  
  export const naivashaSopaFeatures: AccessibilityFeature[] = [
    {
      id: "naivasha-sopa-bathroom-1",
      category: "bathroom",
      title: "Roll-in Shower",
      description: "Wheelchair-accessible roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Fold-down shower seat", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "naivasha-sopa-room-1",
      category: "room",
      title: "Garden View Room",
      description: "Accessible room with garden views",
      measurements: "Door width: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "34 in (86cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" }
        ]
      }
    },
    {
      id: "naivasha-sopa-common-1",
      category: "common-areas",
      title: "Lake Activities",
      description: "Accessible boat rides and bird watching",
      status: "available",
      details: {
        items: [
          { label: "Boat access", value: "Accessible boat with ramp", status: "available" },
          { label: "Bird hides", value: "Accessible viewing platforms", status: "available" },
          { label: "Staff assistance", value: "Available for activities", status: "available" }
        ]
      }
    }
  ];
  
  export const naivashaSimbaFeatures: AccessibilityFeature[] = [
    {
      id: "naivasha-simba-bathroom-1",
      category: "bathroom",
      title: "Accessible Bathroom",
      description: "Roll-in shower with grab bars",
      measurements: "Shower area: 58\" x 34\" (147cm x 86cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Available", status: "available" },
          { label: "Shower seat", value: "Available", status: "available" }
        ]
      }
    },
    {
      id: "naivasha-simba-room-1",
      category: "room",
      title: "Mid-Range Lodge Room",
      description: "Comfortable accessible accommodation",
      measurements: "Door width: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "34 in (86cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Lake proximity", value: "Easy access to lake activities", status: "available" }
        ]
      }
    }
  ];
  
  export const naivashaResortFeatures: AccessibilityFeature[] = [
    {
      id: "naivasha-resort-bathroom-1",
      category: "bathroom",
      title: "Modern Accessible Bathroom",
      description: "Spacious roll-in shower with contemporary fixtures",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Modern stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Teak wood bench", status: "available" }
        ]
      }
    },
    {
      id: "naivasha-resort-room-1",
      category: "room",
      title: "Resort Room",
      description: "Modern accessible room with resort amenities",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Pool access", value: "Accessible pool pathway", status: "available" }
        ]
      }
    }
  ];
  
  export const enashipaiFeatures: AccessibilityFeature[] = [
    {
      id: "enashipai-bathroom-1",
      category: "bathroom",
      title: "Luxury Accessible Bathroom",
      description: "Spacious roll-in shower with premium fixtures",
      measurements: "Shower area: 72\" x 42\" (183cm x 107cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry with stone flooring", status: "available" },
          { label: "Grab bars", value: "Heated stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Heated stone bench", status: "available" },
          { label: "Handheld showerhead", value: "Rain shower with handheld attachment", status: "available" }
        ]
      }
    },
    {
      id: "enashipai-room-1",
      category: "room",
      title: "Luxury Resort Room",
      description: "Elegant accessible room with lake views",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Turning space", value: "72 in (183cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm) with premium mattress", status: "available" },
          { label: "Lake view", value: "Panoramic views from accessible terrace", status: "available" }
        ]
      }
    },
    {
      id: "enashipai-spa-1",
      category: "common-areas",
      title: "Spa Facilities",
      description: "Full-service accessible spa",
      status: "available",
      details: {
        items: [
          { label: "Accessible treatment rooms", value: "Wheelchair-accessible tables", status: "available" },
          { label: "Hydrotherapy pool", value: "Accessible with lift", status: "available" },
          { label: "Specialized treatments", value: "Adapted massage techniques available", status: "available" }
        ]
      }
    }
  ];
  
  export const naivashaSopaImages = { bathroom: [], room: [], entrance: [], restaurant: [], parking: [], 'common-areas': [] };
  export const naivashaSimbaImages = { bathroom: [], room: [], entrance: [], restaurant: [], parking: [], 'common-areas': [] };
  export const naivashaResortImages = { bathroom: [], room: [], entrance: [], restaurant: [], parking: [], 'common-areas': [] };
  export const enashipaiImages = { bathroom: [], room: [], entrance: [], restaurant: [], parking: [], 'common-areas': [] };
  
  // ============================================
  // 20-21. LAKE NAKURU HOTELS
  // ============================================
  
  export const nakuruSopaFeatures: AccessibilityFeature[] = [
    {
      id: "nakuru-sopa-bathroom-1",
      category: "bathroom",
      title: "Accessible Bathroom",
      description: "Roll-in shower with grab bars",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Available", status: "available" },
          { label: "Shower seat", value: "Fold-down seat", status: "available" }
        ]
      }
    },
    {
      id: "nakuru-sopa-room-1",
      category: "room",
      title: "Flamingo View Room",
      description: "Accessible room with lake and flamingo views",
      measurements: "Door width: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "34 in (86cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Flamingo viewing", value: "Accessible viewing area", status: "available" }
        ]
      }
    }
  ];
  
  export const nakuruLodgeFeatures: AccessibilityFeature[] = [
    {
      id: "nakuru-lodge-bathroom-1",
      category: "bathroom",
      title: "Classic Accessible Bathroom",
      description: "Roll-in shower with grab bars",
      measurements: "Shower area: 58\" x 34\" (147cm x 86cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry", status: "available" },
          { label: "Grab bars", value: "Available", status: "available" },
          { label: "Shower seat", value: "Built-in seat", status: "available" }
        ]
      }
    },
    {
      id: "nakuru-lodge-room-1",
      category: "room",
      title: "Park View Room",
      description: "Accessible room with national park views",
      measurements: "Door width: 34\" (86cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "34 in (86cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Waterhole view", value: "Accessible viewing area", status: "available" }
        ]
      }
    }
  ];
  
  export const nakuruSopaImages = { bathroom: [], room: [], entrance: [], restaurant: [], parking: [], 'common-areas': [] };
  export const nakuruLodgeImages = { bathroom: [], room: [], entrance: [], restaurant: [], parking: [], 'common-areas': [] };
  
  // ============================================
  // 22. OL TUKAI LODGE AMBOSELI (amboseli-001)
  // ============================================
  export const olTukaiFeatures: AccessibilityFeature[] = [
    {
      id: "oltukai-bathroom-1",
      category: "bathroom",
      title: "Kilimanjaro View Bathroom",
      description: "Spacious accessible bathroom with mountain views",
      measurements: "Shower area: 60\" x 36\" (152cm x 91cm)",
      status: "available",
      details: {
        items: [
          { label: "Roll-in shower", value: "No threshold entry with stone flooring", status: "available" },
          { label: "Grab bars", value: "Stainless steel grab bars", status: "available" },
          { label: "Shower seat", value: "Built-in stone bench", status: "available" },
          { label: "Handheld showerhead", value: "Adjustable height", status: "available" }
        ]
      }
    },
    {
      id: "oltukai-room-1",
      category: "room",
      title: "Kilimanjaro View Room",
      description: "Spectacular accessible room with direct Kilimanjaro views",
      measurements: "Door width: 36\" (91cm)",
      status: "available",
      details: {
        items: [
          { label: "Door width", value: "36 in (91cm)", status: "available" },
          { label: "Turning space", value: "60 in (152cm)", status: "available" },
          { label: "Bed height", value: "24 in (61cm)", status: "available" },
          { label: "Kilimanjaro view", value: "Panoramic views from accessible terrace", status: "available" }
        ]
      }
    },
    {
      id: "oltukai-common-1",
      category: "common-areas",
      title: "Elephant Viewing",
      description: "Accessible elephant viewing platforms",
      status: "available",
      details: {
        items: [
          { label: "Viewing platforms", value: "Ramped access to viewing areas", status: "available" },
          { label: "Swamp viewing", value: "Accessible paths to observation points", status: "available" },
          { label: "Photography", value: "Accessible photo opportunities", status: "available" }
        ]
      }
    }
  ];
  
  export const olTukaiImages: AccessibilityImages = {
    bathroom: [],
    room: [],
    entrance: [],
    restaurant: [],
    parking: [],
    'common-areas': []
  };
  
  // ============================================
  // MAIN EXPORT - ACCESSIBILITY DATA BY HOTEL ID
  // ============================================
  export const accessibilityDataByHotel: Record<string, { features: AccessibilityFeature[]; images: AccessibilityImages }> = {
    // Nairobi
    "nairobi-002": { features: crownePlazaFeatures, images: crownePlazaImages },
    "nairobi-014": { features: tamarindTreeFeatures, images: tamarindTreeImages },
    "nairobi-015": { features: sarovaPanafricFeatures, images: sarovaPanafricImages },
    
    // Amboseli
    "amboseli-010": { features: kiboCampFeatures, images: kiboCampImages },
    "amboseli-001": { features: olTukaiFeatures, images: olTukaiImages },
    
    // Nakuru
    "nakuru-012": { features: sarovaLionHillFeatures, images: sarovaLionHillImages },
    "nakuru-013": { features: sarovaWoodlandsFeatures, images: sarovaWoodlandsImages },
    "nakuru-014": { features: nakuruSopaFeatures, images: nakuruSopaImages },
    "nakuru-015": { features: nakuruLodgeFeatures, images: nakuruLodgeImages },
    
    // Kisumu
    "kisumu-001": { features: sarovaImperialFeatures, images: sarovaImperialImages },
    
    // Mombasa
    "mombasa-001": { features: sarovaWhitesandsFeatures, images: sarovaWhitesandsImages },
    
    // Samburu
    "samburu-005": { features: ashnilSamburuFeatures, images: ashnilSamburuImages },
    
    // Maasai Mara
    "maasai-mara-010": { features: ashnilMaraFeatures, images: ashnilMaraImages },
    "maasai-mara-011": { features: soroiMaraBushFeatures, images: soroiMaraBushImages },
    "maasai-mara-012": { features: soroiLarsensMaraFeatures, images: soroiLarsensMaraImages },
    "maasai-mara-013": { features: soroiPrivateWingFeatures, images: soroiPrivateWingImages },
    "maasai-mara-014": { features: maraMaishaFeatures, images: maraMaishaImages },
    "maasai-mara-015": { features: keekorokFeatures, images: keekorokImages },
    
    // Naivasha
    "naivasha-004": { features: naivashaSopaFeatures, images: naivashaSopaImages },
    "naivasha-005": { features: naivashaSimbaFeatures, images: naivashaSimbaImages },
    "naivasha-006": { features: naivashaResortFeatures, images: naivashaResortImages },
    "naivasha-007": { features: enashipaiFeatures, images: enashipaiImages },
  };
  
  // Helper function to get accessibility data for a hotel by ID
  export const getAccessibilityData = (hotelId: string) => {
    return accessibilityDataByHotel[hotelId] || null;
  };