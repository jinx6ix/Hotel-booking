// app/hotels/ClientHotels.tsx
'use client';

import { AccessibilityFeature, AccessibilityImages } from "@/lib/accessibility-data";
import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  X,
  Filter,
  ShoppingBag,
  Tag,
  Percent,
  Star,
  CreditCard,
  Shield,
  Clock,
  Gift,
  Accessibility,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Bath,
  Bed,
  DoorOpen,
  Utensils,
  Ruler,
  Car,
  Phone,
  Home,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  XCircle,
} from "lucide-react";

interface Room {
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

interface Hotel {
  id: string;
  slug?: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  description: string;
  price?: number;
  accessible?: boolean;
  accessibleRoomCount?: number;
  rooms?: Room[];
  accessibilityFeatures?: AccessibilityFeature[];
  accessibilityImages?: AccessibilityImages;
}

interface ClientHotelsProps {
  hotels: Hotel[];
}

// ============================================================================
// SWEETWATERS TENTED CAMP - ACCESSIBILITY FEATURES
// ============================================================================
const sweetwatersAccessibilityFeatures: AccessibilityFeature[] = [
  // ENTRANCE FEATURES
  {
    id: 'sweetwaters-entrance-1',
    category: 'entrance',
    title: 'Main Entrance & Reception',
    description: 'Step-free access via wooden ramp. Reception desk with lowered section at 32" height for wheelchair users.',
    measurements: 'Ramp gradient: 1:12 | Desk height: 32"',
    status: 'available',
    details: {
      items: [
        { label: 'Ramp access', value: 'Wooden ramp at main entrance', status: 'available' },
        { label: 'Reception desk', value: 'Lowered section at 32" height', status: 'available' },
        { label: 'Check-in area', value: 'Wide enough for wheelchair turning', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-entrance-2',
    category: 'entrance',
    title: 'Tent Entrance',
    description: 'Each accessible tent has a dedicated wooden ramp leading to the entrance. Door width: 36" with lever handle.',
    measurements: 'Door width: 36" | Ramp gradient: 1:12',
    status: 'available',
    details: {
      items: [
        { label: 'Ramp access', value: 'Wooden ramp to tent entrance', status: 'available' },
        { label: 'Door width', value: '36" (91cm) - ADA compliant', status: 'available' },
        { label: 'Door handle', value: 'Lever handle at 36" height', status: 'available' },
        { label: 'Threshold', value: 'No threshold - flush entry', status: 'available' }
      ]
    }
  },

  // ROOM FEATURES
  {
    id: 'sweetwaters-room-1',
    category: 'room',
    title: 'Tent Interior Space',
    description: 'Spacious tent interior with 60" turning radius. Smooth wooden flooring throughout. Clear pathways to all areas.',
    measurements: 'Turning radius: 60"+ | Pathway width: 36"+',
    status: 'available',
    details: {
      items: [
        { label: 'Turning space', value: '60" (152cm) or more', status: 'available' },
        { label: 'Floor surface', value: 'Smooth wooden flooring', status: 'available' },
        { label: 'Pathway clearance', value: '36"+ throughout', status: 'available' },
        { label: 'Step-free area', value: 'No steps or thresholds', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-room-2',
    category: 'room',
    title: 'Doorway',
    description: 'Tent door width: 36". Zero threshold. Lever handle at 36" height.',
    measurements: 'Door width: 36"',
    status: 'available',
    details: {
      items: [
        { label: 'Door width', value: '36" (91cm)', status: 'available' },
        { label: 'Door handle', value: 'Lever handle', status: 'available' },
        { label: 'Threshold', value: 'Zero threshold - flush entry', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-room-3',
    category: 'room',
    title: 'Bed',
    description: 'Bed height: 24". Space under bed: 7" for lift access. Clearance on both sides: 36".',
    measurements: 'Bed height: 24" | Side clearance: 36" each side | Under-bed clearance: 7"',
    status: 'available',
    details: {
      items: [
        { label: 'Bed height', value: '24" (61cm) - Transfer-friendly', status: 'available' },
        { label: 'Space under bed', value: '7" (18cm) for lift access', status: 'available' },
        { label: 'Left side clearance', value: '36" (91cm)', status: 'available' },
        { label: 'Right side clearance', value: '36" (91cm)', status: 'available' },
        { label: 'Mattress firmness', value: 'Medium - supportive', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-room-4',
    category: 'room',
    title: 'Lighting & Controls',
    description: 'Light switches and outlet height: 36". Bedside controls within easy reach. Visual alarm system for hearing impaired.',
    measurements: 'Switch height: 36" | Outlet height: 36"',
    status: 'available',
    details: {
      items: [
        { label: 'Light switches', value: '36" height - accessible', status: 'available' },
        { label: 'Electrical outlets', value: '36" height', status: 'available' },
        { label: 'Bedside controls', value: 'Within 24" reach from bed', status: 'available' },
        { label: 'Visual alarms', value: 'Available for hearing impaired', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-room-5',
    category: 'room',
    title: 'Furniture & Storage',
    description: 'Desk height: 30" with knee clearance 28"H x 30"W. Wardrobe with lowered hanging rod at 48". Drawers at accessible height.',
    measurements: 'Desk height: 30" | Knee clearance: 28"H x 30"W | Wardrobe rod: 48"',
    status: 'available',
    details: {
      items: [
        { label: 'Desk height', value: '30" (76cm)', status: 'available' },
        { label: 'Knee clearance under desk', value: '28" H x 30" W', status: 'available' },
        { label: 'Wardrobe hanging rod', value: '48" (122cm) - accessible', status: 'available' },
        { label: 'Drawers height', value: '24"-36" range', status: 'available' },
        { label: 'Chair', value: 'With backrest and armrests', status: 'available' }
      ]
    }
  },

  // BATHROOM FEATURES
  {
    id: 'sweetwaters-bathroom-1',
    category: 'bathroom',
    title: 'Bathroom Entrance',
    description: 'Door width: 36" with lever handle. Opens outward for easy access. Threshold: 0.5" beveled edge.',
    measurements: 'Door width: 36" | Threshold: 0.5" beveled',
    status: 'available',
    details: {
      items: [
        { label: 'Door width', value: '36" (91cm)', status: 'available' },
        { label: 'Door operation', value: 'Opens outward - lever handle', status: 'available' },
        { label: 'Threshold', value: '0.5" beveled edge', status: 'available' },
        { label: 'Clearance', value: 'Clear turning space inside', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-bathroom-2',
    category: 'bathroom',
    title: 'Roll-in Shower',
    description: 'Wet room style roll-in shower with zero threshold. Shower area: 48" x 60" with non-slip flooring. Handheld shower head on vertical bar (adjustable 36"-72").',
    measurements: 'Shower area: 48" x 60" | Handheld bar: 36"-72" adjustable',
    status: 'available',
    details: {
      items: [
        { label: 'Shower type', value: 'Wet room roll-in with zero threshold', status: 'available' },
        { label: 'Shower dimensions', value: '48" x 60" (122cm x 152cm)', status: 'available' },
        { label: 'Flooring', value: 'Non-slip textured surface', status: 'available' },
        { label: 'Handheld showerhead', value: 'Adjustable 36"-72" height', status: 'available' },
        { label: 'Shower controls', value: 'Lever type at 36" height', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-bathroom-3',
    category: 'bathroom',
    title: 'Shower Grab Bars',
    description: 'Grab bars in shower: 36" horizontal bar on back wall, 24" vertical bar on side wall, 36" angled bar for seated transfers.',
    measurements: 'Horizontal bar: 36" | Vertical bar: 24" | Angled bar: 36"',
    status: 'available',
    details: {
      items: [
        { label: 'Horizontal grab bar', value: '36" on back wall at 34" height', status: 'available' },
        { label: 'Vertical grab bar', value: '24" on side wall', status: 'available' },
        { label: 'Angled grab bar', value: '36" for seated transfers', status: 'available' },
        { label: 'Bar material', value: 'Stainless steel - slip-resistant', status: 'available' },
        { label: 'Weight capacity', value: '300 lbs', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-bathroom-4',
    category: 'bathroom',
    title: 'Shower Seat',
    description: 'Fixed fold-down shower seat at 18" height. Weight capacity: 300 lbs. Located at optimal position for showering.',
    measurements: 'Seat height: 18" | Seat dimensions: 18" x 16"',
    status: 'available',
    details: {
      items: [
        { label: 'Seat type', value: 'Fold-down wall-mounted', status: 'available' },
        { label: 'Seat height', value: '18" (46cm)', status: 'available' },
        { label: 'Seat dimensions', value: '18" x 16" (46cm x 41cm)', status: 'available' },
        { label: 'Weight capacity', value: '300 lbs', status: 'available' },
        { label: 'Material', value: 'Waterproof, easy-clean surface', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-bathroom-5',
    category: 'bathroom',
    title: 'Sink & Vanity',
    description: 'Sink height: 34". Space under sink: 10" deep x 30" wide x 27" high. Lever handles. Mirror at 40" height (tilted for seated viewing).',
    measurements: 'Sink height: 34" | Under-sink clearance: 27"H x 30"W x 10"D | Mirror: 40"',
    status: 'available',
    details: {
      items: [
        { label: 'Sink height', value: '34" (86cm)', status: 'available' },
        { label: 'Knee clearance', value: '27" H x 30" W x 10" D', status: 'available' },
        { label: 'Sink handle type', value: 'Lever handles', status: 'available' },
        { label: 'Mirror height', value: '40" - tilted for seated viewing', status: 'available' },
        { label: 'Vanity style', value: 'Wall-mounted for wheelchair access', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-bathroom-6',
    category: 'bathroom',
    title: 'Toilet',
    description: 'Toilet height: 18" with grab bars on both sides (36" horizontal on left, fold-down on right). Emergency pull cord within reach.',
    measurements: 'Toilet height: 18" | Grab bars: 36" horizontal left, fold-down right',
    status: 'available',
    details: {
      items: [
        { label: 'Toilet height', value: '18" (46cm) - Standard accessible height', status: 'available' },
        { label: 'Left grab bar', value: '36" horizontal bar', status: 'available' },
        { label: 'Right grab bar', value: 'Fold-down grab bar', status: 'available' },
        { label: 'Clearance in front', value: '48" for wheelchair approach', status: 'available' },
        { label: 'Emergency pull cord', value: 'Reachable from toilet', status: 'available' },
        { label: 'Toilet paper holder', value: 'Within easy reach', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-bathroom-7',
    category: 'bathroom',
    title: 'Bathroom Space & Turning',
    description: 'Bathroom is step-free with 60" turning radius. All fixtures positioned for wheelchair access.',
    measurements: 'Turning radius: 60"+ | Clear floor space: 60" x 60"',
    status: 'available',
    details: {
      items: [
        { label: 'Turning radius', value: '60" (152cm) or more', status: 'available' },
        { label: 'Clear floor space', value: '60" x 60" (152cm x 152cm)', status: 'available' },
        { label: 'Step-free access', value: 'No steps or thresholds', status: 'available' },
        { label: 'All fixtures accessible', value: 'Positioned for wheelchair users', status: 'available' }
      ]
    }
  },

  // COMMON AREAS FEATURES
  {
    id: 'sweetwaters-common-1',
    category: 'common-areas',
    title: 'Dining Area',
    description: 'Step-free access to restaurant. Tables with knee clearance (27"H x 30"W). Buffet area lowered to 34" height. Accessible pathways between tables (36"+).',
    measurements: 'Table clearance: 27"H x 30"W | Pathways: 36"+',
    status: 'available',
    details: {
      items: [
        { label: 'Restaurant access', value: 'Step-free with ramp', status: 'available' },
        { label: 'Accessible tables', value: 'Available with knee clearance', status: 'available' },
        { label: 'Buffet height', value: 'Lowered section at 34"', status: 'available' },
        { label: 'Pathway width', value: '36"+ between tables', status: 'available' },
        { label: 'Staff assistance', value: 'Available for buffet service', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-common-2',
    category: 'common-areas',
    title: 'Lounge & Bar Area',
    description: 'Step-free access to lounge. Accessible seating area with clear pathways. Bar counter has lowered section at 34".',
    measurements: 'Bar lowered section: 34" | Pathways: 36"+',
    status: 'available',
    details: {
      items: [
        { label: 'Lounge access', value: 'Step-free with ramp', status: 'available' },
        { label: 'Accessible seating', value: 'Designated areas with clearance', status: 'available' },
        { label: 'Bar counter', value: 'Lowered section at 34"', status: 'available' },
        { label: 'Fire pit area', value: 'Accessible with wide pathways', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-common-3',
    category: 'common-areas',
    title: 'Game Viewing Platform',
    description: 'Accessible game viewing platform with ramp access. Waterhole viewing area with accessible pathway. Safari vehicles adapted for wheelchair users (upon request).',
    status: 'available',
    details: {
      items: [
        { label: 'Game viewing platform', value: 'Ramp access with railings', status: 'available' },
        { label: 'Safari vehicles', value: 'Wheelchair-adapted available', status: 'available' },
        { label: 'Waterhole viewing', value: 'Accessible pathway and seating', status: 'available' },
        { label: 'Guided assistance', value: 'Trained staff available', status: 'available' }
      ]
    }
  },
  {
    id: 'sweetwaters-common-4',
    category: 'common-areas',
    title: 'Swimming Pool',
    description: 'Pool access via ramp with handrails. Pool lift available upon request. Accessible changing area with roll-in shower.',
    measurements: 'Ramp gradient: 1:12 | Pool lift capacity: 300 lbs',
    status: 'available',
    details: {
      items: [
        { label: 'Pool access', value: 'Ramp with handrails', status: 'available' },
        { label: 'Pool lift', value: 'Available upon request', status: 'available' },
        { label: 'Changing area', value: 'Accessible with roll-in shower', status: 'available' },
        { label: 'Pool deck', value: 'Smooth, non-slip surface', status: 'available' },
        { label: 'Pool depth markings', value: 'Clear signage', status: 'available' }
      ]
    }
  },

  // PARKING FEATURES
  {
    id: 'sweetwaters-parking-1',
    category: 'parking',
    title: 'Parking',
    description: 'Designated accessible parking spaces near reception. Space width: 12" with 5" access aisle. Level surface.',
    measurements: 'Space width: 12" | Access aisle: 5"',
    status: 'available',
    details: {
      items: [
        { label: 'Accessible spaces', value: '2 designated spaces', status: 'available' },
        { label: 'Space dimensions', value: '12" width x 18" length', status: 'available' },
        { label: 'Access aisle', value: '5" (152cm) adjacent', status: 'available' },
        { label: 'Surface', value: 'Level, smooth surface', status: 'available' },
        { label: 'Proximity', value: 'Near reception entrance', status: 'available' }
      ]
    }
  },

  // RESTAURANT FEATURES
  {
    id: 'sweetwaters-restaurant-1',
    category: 'restaurant',
    title: 'Dining Experience',
    description: 'Dining area fully accessible. Staff trained to assist with seating and buffet service. Special dietary requests accommodated.',
    status: 'available',
    details: {
      items: [
        { label: 'Seating availability', value: 'Accessible tables reserved', status: 'available' },
        { label: 'Staff training', value: 'Accessibility awareness trained', status: 'available' },
        { label: 'Menu formats', value: 'Large print available', status: 'available' },
        { label: 'Dietary accommodations', value: 'Allergies and preferences accommodated', status: 'available' },
        { label: 'Assistance', value: 'Available upon request', status: 'available' }
      ]
    }
  }
];

// Accessibility images for Sweetwaters Tented Camp
const sweetwatersAccessibilityImages: AccessibilityImages = {
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
  'common-areas': [
    '/accessibility/sweetwaters-dining.jpg',
    '/accessibility/sweetwaters-lounge.jpg',
    '/accessibility/sweetwaters-pool.jpg',
    '/accessibility/sweetwaters-viewing-platform.jpg'
  ],
  parking: [
    '/accessibility/sweetwaters-parking.jpg'
  ]
};

// Complete accessibility features for Sarova Panafric Hotel
const sarovaPanafricFeatures: AccessibilityFeature[] = [
  // BATHROOM FEATURES
  {
    id: "sarova-bathroom-1",
    category: "bathroom",
    title: "Shower",
    description: "Roll-in shower with grab bars and shower seat",
    measurements: "Shower area: 58\" x 37\" (147cm x 94cm) • Entrance: 58\" wide",
    status: "available",
    details: {
      items: [
        { label: "Roll-in shower", value: "Entrance is 58 in wide. Cubicle is 37 in long, 58 in wide", status: "available" },
        { label: "Grab bars within shower", value: "Available on both walls", status: "available" },
        { label: "Fixed shower seat", value: "Located next to the showerhead", status: "available" },
        { label: "Portable shower seat", value: "Available upon request", status: "available" },
        { label: "Handheld showerhead", value: "Available at 75 in from the floor", status: "available" }
      ]
    }
  },
  {
    id: "sarova-bathroom-2",
    category: "bathroom",
    title: "Sink / Vanity",
    description: "Accessible sink height with knee clearance",
    measurements: "Sink height: 33.5\" (85cm) • Knee clearance: 10\" deep x 34.5\" wide x 27\" high",
    status: "available",
    details: {
      items: [
        { label: "Sink height", value: "33.5 in (85cm) from floor", status: "available" },
        { label: "Space under sink", value: "10 in deep, 34.5 in wide, 27 in high", status: "available" },
        { label: "Sink handle type", value: "Lever handle for easy operation", status: "available" }
      ]
    }
  },
  {
    id: "sarova-bathroom-3",
    category: "bathroom",
    title: "Bathroom Entrance",
    description: "Manual door opening outward for easy access",
    measurements: "Door width: 33\" (84cm)",
    status: "available",
    details: {
      items: [
        { label: "Door operation", value: "Manual door opening outward", status: "available" },
        { label: "Door width", value: "33 in (84cm)", status: "available" },
        { label: "Door handle", value: "Lever handle", status: "available" }
      ]
    }
  },
  {
    id: "sarova-bathroom-4",
    category: "bathroom",
    title: "Bathroom Interior",
    description: "Step-free access with ample turning space",
    measurements: "Turning radius: 60\"+ (152cm+)",
    status: "available",
    details: {
      items: [
        { label: "Free turning space", value: "More than 60 in (152cm) turning radius", status: "available" },
        { label: "Step-free area", value: "No steps or thresholds throughout", status: "available" },
        { label: "Floor surface", value: "Non-slip tile flooring", status: "available" }
      ]
    }
  },

  // ROOM FEATURES
  {
    id: "sarova-room-1",
    category: "room",
    title: "Room Entrance",
    description: "One step at entrance with accessible door width",
    measurements: "Step height: 2\" (5cm) • Door width: 33\" (84cm)",
    status: "partial",
    details: {
      items: [
        { label: "Step to enter", value: "1 step (2 in / 5cm tall)", status: "partial" },
        { label: "Step handrails", value: "No handrails available", status: "unavailable" },
        { label: "Door width", value: "33 in (84cm)", status: "available" },
        { label: "Door handle", value: "Lever handle for easy operation", status: "available" },
        { label: "Door access", value: "Key card entry system", status: "available" }
      ]
    }
  },
  {
    id: "sarova-room-2",
    category: "room",
    title: "Room Amenities",
    description: "Step-free closet access with reachable storage",
    status: "available",
    details: {
      items: [
        { label: "Closet access", value: "Step-free access with sliding doors", status: "available" },
        { label: "Drawers height", value: "Accessible reach height (32 in / 81cm)", status: "available" },
        { label: "Clothing rod height", value: "Accessible reach height (48 in / 122cm)", status: "available" }
      ]
    }
  },
  {
    id: "sarova-room-3",
    category: "room",
    title: "Bed",
    description: "Bed height and clearance information",
    measurements: "Bed height: 27\" (69cm) • Side clearance: 72\" (183cm)",
    status: "partial",
    details: {
      items: [
        { label: "Bed height", value: "27 in (69cm) - Higher than standard", status: "partial" },
        { label: "Space under bed", value: "4.5 in x 67 in x 7 in clearance for lift", status: "available" },
        { label: "Space next to bed", value: "72 in (183cm) on accessible side", status: "available" },
        { label: "Mattress firmness", value: "Slightly firm", status: "available" },
        { label: "Light switches reachable", value: "Yes, from bed position", status: "available" },
        { label: "Phone reachable", value: "Yes, nightstand accessible", status: "available" }
      ]
    }
  },
  {
    id: "sarova-room-4",
    category: "room",
    title: "Room Features",
    description: "Accessible desk and mirror placement",
    measurements: "Mirror height: 24.25\" (62cm) • Desk height: 30\" (76cm)",
    status: "available",
    details: {
      items: [
        { label: "Mirror height", value: "24.25 in (62cm) from floor - accessible", status: "available" },
        { label: "Desk height", value: "30 in (76cm) - standard accessible height", status: "available" },
        { label: "Space under desk", value: "18.25 in deep x 43 in wide x 28 in high", status: "available" },
        { label: "Chair", value: "Desk chair with backrest", status: "available" }
      ]
    }
  },
  {
    id: "sarova-room-5",
    category: "room",
    title: "Room Interior",
    description: "Step-free area with smooth flooring and adequate space",
    status: "available",
    details: {
      items: [
        { label: "Step-free area", value: "No steps or thresholds", status: "available" },
        { label: "Free turning space", value: "More than 60 in (152cm) turning radius", status: "available" },
        { label: "Floor surface", value: "Smooth tile/hardwood flooring", status: "available" },
        { label: "Wheelchair clearance", value: "Wide corridors with 36 in (91cm) clearance", status: "available" },
        { label: "Light switches height", value: "36 in (91cm) from floor - accessible", status: "available" },
        { label: "Outlets height", value: "18 in (46cm) from floor - accessible", status: "available" }
      ]
    }
  },

  // ENTRANCE FEATURES
  {
    id: "sarova-entrance-1",
    category: "entrance",
    title: "Main Entrance",
    description: "Ramp access with automatic doors",
    measurements: "Ramp slope: 1:12 ratio • Door width: 36\" (91cm)",
    status: "available",
    details: {
      items: [
        { label: "Ramp access", value: "Permanent ramp with non-slip surface", status: "available" },
        { label: "Ramp slope", value: "1:12 ratio (gentle slope)", status: "available" },
        { label: "Automatic doors", value: "Power-assisted sliding doors", status: "available" },
        { label: "Door width", value: "36 in (91cm) clearance", status: "available" },
        { label: "Level entry", value: "No steps at entrance", status: "available" }
      ]
    }
  },
  {
    id: "sarova-entrance-2",
    category: "entrance",
    title: "Reception Area",
    description: "Accessible check-in counter",
    measurements: "Counter height: 34\" (86cm) • Knee clearance: 27\" (69cm)",
    status: "available",
    details: {
      items: [
        { label: "Reception desk height", value: "34 in (86cm) with lowered section", status: "available" },
        { label: "Knee clearance", value: "27 in (69cm) clearance under counter", status: "available" },
        { label: "Waiting area", value: "Ample space for wheelchair maneuverability", status: "available" }
      ]
    }
  },

  // RESTAURANT FEATURES
  {
    id: "sarova-restaurant-1",
    category: "restaurant",
    title: "Dining Area",
    description: "Accessible tables and seating arrangements",
    measurements: "Table height: 30\" (76cm) • Aisle width: 36\"+ (91cm+)",
    status: "available",
    details: {
      items: [
        { label: "Accessible tables", value: "Tables with knee clearance (27 in / 69cm)", status: "available" },
        { label: "Table height", value: "30 in (76cm) - standard accessible height", status: "available" },
        { label: "Aisle width", value: "36 in (91cm) minimum between tables", status: "available" },
        { label: "Buffet access", value: "Staff assistance available for buffet", status: "available" },
        { label: "Menu options", value: "Large print menus available", status: "available" }
      ]
    }
  },

  // PARKING FEATURES
  {
    id: "sarova-parking-1",
    category: "parking",
    title: "Accessible Parking",
    description: "Designated accessible parking spaces",
    measurements: "Space width: 12ft (366cm) including access aisle",
    status: "available",
    details: {
      items: [
        { label: "Accessible spaces", value: "3 designated spaces near entrance", status: "available" },
        { label: "Van accessible spaces", value: "2 spaces with 98 in (249cm) height clearance", status: "available" },
        { label: "Access aisle", value: "60 in (152cm) wide access aisle", status: "available" },
        { label: "Surface", value: "Level, firm, slip-resistant surface", status: "available" },
        { label: "Signage", value: "Clearly marked with international symbol", status: "available" }
      ]
    }
  },

  // COMMON AREAS FEATURES
  {
    id: "sarova-common-1",
    category: "common-areas",
    title: "Elevator Access",
    description: "Accessible elevators to all floors",
    measurements: "Door width: 36\" (91cm) • Cabin size: 60\" x 60\" (152cm x 152cm)",
    status: "available",
    details: {
      items: [
        { label: "Door width", value: "36 in (91cm) clearance", status: "available" },
        { label: "Cabin size", value: "60 in x 60 in (152cm x 152cm)", status: "available" },
        { label: "Controls height", value: "36-48 in (91-122cm) from floor", status: "available" },
        { label: "Audio/visual indicators", value: "Floor announcements and visual displays", status: "available" },
        { label: "Braille buttons", value: "Available on all control panels", status: "available" }
      ]
    }
  },
  {
    id: "sarova-common-2",
    category: "common-areas",
    title: "Pool Access",
    description: "Accessible pool entry",
    status: "available",
    details: {
      items: [
        { label: "Pool lift", value: "Hydraulic pool lift available", status: "available" },
        { label: "Pool deck", value: "Level, slip-resistant surface", status: "available" },
        { label: "Accessible pathway", value: "Wide path to pool area", status: "available" },
        { label: "Pool depth signage", value: "Clear depth markers visible", status: "available" }
      ]
    }
  },
  {
    id: "sarova-common-3",
    category: "common-areas",
    title: "Common Areas",
    description: "Accessible pathways throughout property",
    measurements: "Pathway width: 48\" (122cm) minimum",
    status: "available",
    details: {
      items: [
        { label: "Pathway width", value: "48 in (122cm) minimum throughout", status: "available" },
        { label: "Surface type", value: "Smooth, level, slip-resistant surfaces", status: "available" },
        { label: "Seating areas", value: "Accessible seating with armrests", status: "available" },
        { label: "Signage", value: "High-contrast, easy-to-read signage", status: "available" }
      ]
    }
  }
];

// Accessibility images for Sarova Panafric
const sarovaPanafricImages: AccessibilityImages = {
  bathroom: [
    "/Sarova Panafric - Accessible Bathroom 1.jpg",
    "/Sarova Panafric - Accessible Bathroom 2.jpg",
    "/Sarova Panafric - Accessible Bathroom 3.jpg",
    "/Sarova Panafric - Accessible Bathroom 4.jpg"
  ],
  room: [
    "/Sarova Panafric - Accessible Room 1.jpg",
    "/Sarova Panafric - Accessible Room 2.jpg",
    "/Sarova Panafric - Accessible Room 3.jpg"
  ],
  entrance: [
    "/Sarova Panafric - Accessible Entrance 1.jpg",
    "/Sarova Panafric - Accessible Entrance 2.jpg"
  ],
  restaurant: [
    "/Sarova Panafric - Accessible Restaurant 1.jpg",
    "/Sarova Panafric - Accessible Restaurant 2.jpg"
  ],
  parking: [
    "/Sarova Panafric - Accessible Parking 1.jpg"
  ],
  'common-areas': [
    "/Sarova Panafric - Common Area 1.jpg",
    "/Sarova Panafric - Common Area 2.jpg"
  ]
};

// ──────────────────────────────────────────────────────────────────────────────
// FULL-SCREEN IMAGE VIEWER
// ──────────────────────────────────────────────────────────────────────────────
function ImageViewer({
  images,
  initialIndex,
  hotelName,
  onClose,
}: {
  images: string[];
  initialIndex: number;
  hotelName: string;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[10000] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition z-10"
          aria-label="Close image viewer"
        >
          <X size={32} />
        </button>

        <Image
          src={images[currentIndex]}
          alt={`Accessibility feature photo ${currentIndex + 1} of ${images.length} – ${hotelName}`}
          title={`Accessibility image ${currentIndex + 1} – ${hotelName}`}
          width={1600}
          height={1200}
          className="max-w-full max-h-[85vh] object-contain"
          priority
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-5 py-2 rounded-full text-base font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition"
              aria-label="Previous image"
            >
              <ChevronLeftIcon size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition"
              aria-label="Next image"
            >
              <ChevronRightIcon size={32} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// STATUS ICON COMPONENT
// ──────────────────────────────────────────────────────────────────────────────
function StatusIcon({ status }: { status: 'available' | 'partial' | 'unavailable' }) {
  switch (status) {
    case 'available':
      return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    case 'partial':
      return <AlertCircle className="w-5 h-5 text-amber-600" />;
    case 'unavailable':
      return <XCircle className="w-5 h-5 text-red-600" />;
    default:
      return null;
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// ACCESSIBILITY MODAL – COMPLETE WITH ALL DETAILS
// ──────────────────────────────────────────────────────────────────────────────
function AccessibilityModal({ hotel, onClose }: { hotel: Hotel; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'bathroom' | 'room' | 'entrance' | 'restaurant' | 'parking' | 'common-areas'>('bathroom');
  const [showImageViewer, setShowImageViewer] = useState(false);
  const [viewerInitialIndex, setViewerInitialIndex] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const tabs = [
    { key: 'bathroom' as const, label: 'Bathroom', icon: Bath },
    { key: 'room' as const, label: 'Room', icon: Bed },
    { key: 'entrance' as const, label: 'Entrance', icon: DoorOpen },
    { key: 'restaurant' as const, label: 'Restaurant', icon: Utensils },
    { key: 'parking' as const, label: 'Parking', icon: Car },
    { key: 'common-areas' as const, label: 'Common Areas', icon: Home },
  ];

  const getCategory = (tab: typeof tabs[number]['key']) => tab;

  const currentFeatures = hotel.accessibilityFeatures?.filter(
    (f) => f.category === getCategory(activeTab)
  ) || [];

  const currentImages = hotel.accessibilityImages?.[getCategory(activeTab)] || [];

  const openViewer = (index: number) => {
    setViewerInitialIndex(index);
    setShowImageViewer(true);
  };

  // Get status display for feature
  const getStatusDisplay = (status?: 'available' | 'partial' | 'unavailable') => {
    switch (status) {
      case 'available':
        return { bg: 'bg-green-100', text: 'text-green-700', icon: '✓', label: 'Available' };
      case 'partial':
        return { bg: 'bg-amber-100', text: 'text-amber-700', icon: '!', label: 'Partial' };
      case 'unavailable':
        return { bg: 'bg-red-100', text: 'text-red-700', icon: '✕', label: 'Not Available' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', icon: '•', label: 'Info' };
    }
  };

  // Count accessible rooms
  const accessibleRooms = hotel.rooms?.filter(r => r.accessible) || [];

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white w-full max-w-6xl max-h-[92vh] md:max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 md:px-6 md:py-5 border-b flex items-center justify-between bg-gradient-to-r from-blue-50 to-gray-50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Accessibility className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">{hotel.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xs md:text-sm text-gray-600">Physical Disability Accessibility Details</p>
                {hotel.accessibleRoomCount && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    {hotel.accessibleRoomCount} Accessible Room{hotel.accessibleRoomCount !== 1 ? 's' : ''}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-200 transition"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sticky Tabs */}
        <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <div className="flex min-w-max px-4 md:px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const hasFeatures = hotel.accessibilityFeatures?.some(f => f.category === tab.key) || false;
                const hasImages = (hotel.accessibilityImages?.[tab.key]?.length || 0) > 0;
                const hasContent = hasFeatures || hasImages;
                
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-shrink-0 flex items-center gap-2 px-5 py-3.5 md:px-6 md:py-4 text-sm md:text-base font-medium border-b-4 transition-all whitespace-nowrap ${
                      activeTab === tab.key
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                    {hasContent && activeTab !== tab.key && (
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 bg-gray-50">
          {/* Summary Section - Accessible Rooms Info */}
          {activeTab === 'room' && accessibleRooms.length > 0 && (
            <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                <Bed size={18} />
                Accessible Room Types Available
              </h3>
              <p className="text-blue-700 text-sm mb-2">
                This hotel offers {accessibleRooms.length} accessible room type{accessibleRooms.length !== 1 ? 's' : ''}:
              </p>
              <div className="flex flex-wrap gap-2">
                {accessibleRooms.map((room, idx) => (
                  <span key={idx} className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200">
                    {room.type}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Photos Section - Only display two images with + overlay */}
          {currentImages.length > 0 && (
            <div className="mb-8 md:mb-10">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <CameraIcon className="w-5 h-5" />
                Accessibility Photos
              </h3>
              <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                {/* First Image */}
                <div
                  className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow cursor-pointer relative group"
                  onClick={() => openViewer(0)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo 1 of ${currentImages.length}`}
                >
                  <Image
                    src={currentImages[0]}
                    alt={`${activeTab} accessibility photo 1 of ${currentImages.length} – ${hotel.name}`}
                    title={`Accessibility feature – ${activeTab} – ${hotel.name} – photo 1`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm">Click to enlarge</span>
                  </div>
                </div>

                {/* Second Image with +N overlay if more than 2 images */}
                {currentImages.length >= 2 && (
                  <div
                    className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow cursor-pointer relative group"
                    onClick={() => openViewer(1)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View photo 2 of ${currentImages.length} or more`}
                  >
                    <Image
                      src={currentImages[1]}
                      alt={`${activeTab} accessibility photo 2 of ${currentImages.length} – ${hotel.name}`}
                      title={`Accessibility feature – ${activeTab} – ${hotel.name} – photo 2`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />

                    {currentImages.length > 2 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/70 transition">
                        <div className="bg-white/90 text-gray-900 px-4 py-2 md:px-5 md:py-3 rounded-full text-lg md:text-xl font-bold shadow-lg">
                          +{currentImages.length - 2} more photos
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features Section - This displays all the detailed accessibility features */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Detailed Accessibility Features
            </h3>
            
            {currentFeatures.length > 0 ? (
              currentFeatures.map((feature: AccessibilityFeature, index: number) => {
                const statusDisplay = getStatusDisplay(feature.status);
                const hasDetails = feature.details?.items && feature.details.items.length > 0;
                
                return (
                  <div
                    key={feature.id || index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Feature Header */}
                    <div className="p-5 md:p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                      <div className="flex items-start gap-4">
                        <div className={`shrink-0 mt-1 w-10 h-10 rounded-full ${statusDisplay.bg} flex items-center justify-center text-xl font-bold ${statusDisplay.text}`}>
                          {statusDisplay.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <h4 className="font-bold text-base md:text-lg text-gray-900">{feature.title}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusDisplay.bg} ${statusDisplay.text}`}>
                              {statusDisplay.label}
                            </span>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm md:text-base">{feature.description}</p>
                          {feature.measurements && (
                            <div className="mt-3 flex items-center gap-2 text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg inline-flex">
                              <Ruler size={14} />
                              {feature.measurements}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Feature Details (sub-items) */}
                    {hasDetails && (
                      <div className="p-5 md:p-6 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {feature.details!.items.map((item, itemIdx) => {
                            return (
                              <div key={itemIdx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                <div className="shrink-0 mt-0.5">
                                  {item.status === 'available' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                                  {item.status === 'partial' && <AlertCircle className="w-4 h-4 text-amber-600" />}
                                  {item.status === 'unavailable' && <XCircle className="w-4 h-4 text-red-600" />}
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-800 text-sm">{item.label}</p>
                                  <p className="text-gray-600 text-xs mt-0.5">{item.value}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <Accessibility className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500 text-sm md:text-base">
                  Detailed accessibility information is being verified.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  Please contact us for the most up-to-date details.
                </p>
              </div>
            )}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-8 p-5 bg-white rounded-xl border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Phone size={18} className="text-blue-600" />
              Need More Information?
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Our team can provide additional details about accessibility features at this property.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/contact?hotel=${encodeURIComponent(hotel.name)}&subject=Accessibility%20Inquiry`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Contact Accessibility Team
                <ArrowRight size={14} />
              </Link>
              <Link
                href={`/hotels/${hotel.id}`}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                View Hotel Details
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="px-5 py-3 md:px-6 md:py-4 border-t bg-gray-50 text-center text-xs md:text-sm text-gray-500 shrink-0 flex items-center justify-between">
          <span>All measurements verified on-site</span>
          <span>Last updated: March 2026</span>
        </div>
      </div>

      {/* Image viewer overlay */}
      {showImageViewer && currentImages.length > 0 && (
        <ImageViewer
          images={currentImages}
          initialIndex={viewerInitialIndex}
          hotelName={hotel.name}
          onClose={() => setShowImageViewer(false)}
        />
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// CUSTOM HOTEL CARD WITH ACCESSIBILITY BUTTON
// ──────────────────────────────────────────────────────────────────────────────
function HotelCardWithAccessibility({ hotel }: { hotel: Hotel }) {
  const [showModal, setShowModal] = useState(false);
  
  const accessibleRooms = hotel.rooms?.filter((r) => r.accessible) || [];
  const accessibleRoomCount = hotel.accessibleRoomCount || accessibleRooms.length;

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <div className="relative h-64 overflow-hidden bg-gray-200">
          <Image
            src={hotel.image}
            alt={`${hotel.name} – ${hotel.accessible ? 'wheelchair accessible' : ''} hotel in ${hotel.location}`}
            fill
            className="object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {hotel.accessible && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg z-10">
              <Accessibility size={16} />
              Wheelchair Accessible
            </div>
          )}

          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-800 flex items-center gap-1 shadow-lg z-10">
            <Star className="text-yellow-500 fill-yellow-500" size={16} />
            {hotel.rating}
          </div>

          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1 z-10">
            <MapPinIcon className="w-3.5 h-3.5" />
            {hotel.location}, Kenya
          </div>

          {hotel.accessible && accessibleRoomCount > 0 && (
            <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 z-10">
              <BedDoubleIcon className="w-3.5 h-3.5" />
              {accessibleRoomCount} Accessible Room{accessibleRoomCount !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{hotel.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{hotel.description}</p>

          {hotel.price && (
            <p className="text-orange-600 font-bold text-lg mb-3">
              ${hotel.price} <span className="text-sm text-gray-500 font-normal">/night</span>
            </p>
          )}

          {/* SEE ALL ACCESSIBLE FEATURES BUTTON - Shows for ALL accessible hotels */}
          {hotel.accessible && (
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition mb-3 shadow-sm hover:shadow-md text-sm"
            >
              <Accessibility size={18} />
              See All Accessible Features
            </button>
          )}

          <div className="flex gap-2">
            <Link
              href={`/hotels/${hotel.id}`}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-lg font-semibold transition flex items-center justify-center gap-1 text-sm"
            >
              View Details
              <ChevronRight size={16} />
            </Link>
            {hotel.accessible && (
              <Link
                href={`/hotels/${hotel.id}?filter=accessible`}
                className="px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg font-semibold transition flex items-center justify-center"
                title="View accessible rooms only"
              >
                <Accessibility size={18} />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Accessibility Modal */}
      {showModal && (
        <AccessibilityModal
          hotel={hotel}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// ICON COMPONENTS
// ──────────────────────────────────────────────────────────────────────────────
function CameraIcon(props: any) {
  return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}

function MapPinIcon(props: any) {
  return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}

function BedDoubleIcon(props: any) {
  return <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13h14a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2zM5 13V5a2 2 0 012-2h10a2 2 0 012 2v8" /></svg>;
}

// ──────────────────────────────────────────────────────────────────────────────
// MAIN CLIENT HOTELS COMPONENT
// ──────────────────────────────────────────────────────────────────────────────
export default function ClientHotels({ hotels }: ClientHotelsProps) {
  // Enhance the hotels with accessibility features for demonstration
  const enhancedHotels = hotels.map(hotel => {
    // Sarova Panafric Hotel (nairobi-015)
    if (hotel.id === "nairobi-015" || hotel.name === "Sarova Panafric Hotel") {
      return {
        ...hotel,
        accessibilityFeatures: sarovaPanafricFeatures,
        accessibilityImages: sarovaPanafricImages,
        accessibleRoomCount: 3,
      };
    }
    // Sweetwaters Tented Camp (nanyuki-012)
    if (hotel.id === "nanyuki-012" || hotel.name === "Sweetwaters Tented Camp") {
      return {
        ...hotel,
        accessibilityFeatures: sweetwatersAccessibilityFeatures,
        accessibilityImages: sweetwatersAccessibilityImages,
        accessibleRoomCount: 2,
      };
    }
    return hotel;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [accessibilityFilter, setAccessibilityFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"default" | "price-low" | "price-high">("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const HOTELS_PER_PAGE = 12;
  const locations = Array.from(new Set(enhancedHotels.map(h => h.location))).sort();

  // Calculate price range for display
  const prices = enhancedHotels.filter(h => h.price).map(h => h.price as number);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

  const filteredHotels = useMemo(() => {
    let result = [...enhancedHotels];

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(h =>
        h.name.toLowerCase().includes(term) ||
        h.location.toLowerCase().includes(term) ||
        h.description.toLowerCase().includes(term)
      );
    }

    if (locationFilter !== "all") {
      result = result.filter(h => h.location === locationFilter);
    }

    if (accessibilityFilter === "accessible") {
      result = result.filter(h => h.accessible === true);
    } else if (accessibilityFilter === "non-accessible") {
      result = result.filter(h => h.accessible !== true);
    }

    if (sortOrder === "price-low") {
      result = result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortOrder === "price-high") {
      result = result.sort((a, b) => (b.price || 0) - (a.price || 0));
    }

    return result;
  }, [enhancedHotels, searchTerm, locationFilter, accessibilityFilter, sortOrder]);

  const totalPages = Math.ceil(filteredHotels.length / HOTELS_PER_PAGE);
  const paginatedHotels = filteredHotels.slice(
    (currentPage - 1) * HOTELS_PER_PAGE,
    currentPage * HOTELS_PER_PAGE
  );

  const goToPage = (page: number, event?: React.MouseEvent) => {
    if (event) event.preventDefault();
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setLocationFilter("all");
    setAccessibilityFilter("all");
    setSortOrder("default");
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== "" || locationFilter !== "all" || accessibilityFilter !== "all" || sortOrder !== "default";

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* H2 - Hotels Grid Title with Shopping Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              All Hotels in Kenya
            </h2>
            <p className="text-gray-500 mt-1">{enhancedHotels.length} properties available</p>
          </div>
          <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
            <Tag className="w-4 h-4 text-orange-600" />
            <span className="text-sm text-gray-700">Price range: ${minPrice} - ${maxPrice}</span>
            <span className="text-xs text-gray-500">| Avg: ${avgPrice}</span>
          </div>
        </div>

        <h3 className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Browse our complete collection of {enhancedHotels.length}+ handpicked hotels, safari lodges, and resorts across Kenya
        </h3>

        {/* Shopping Promo Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-4 mb-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Gift className="w-6 h-6" />
              <div>
                <p className="font-bold">Special Offer: Book 7+ nights and get 1 night FREE!</p>
                <p className="text-sm opacity-90">Plus complimentary room upgrade & safari activity</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Percent className="w-4 h-4" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-end mb-4 gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition ${viewMode === "grid" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}
            aria-label="Grid view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition ${viewMode === "list" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-500"}`}
            aria-label="List view"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-medium"
          >
            <Filter size={20} />
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filters Section */}
        <div className={`mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search hotels in Kenya by name, location..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
              />
            </div>

            <select
              title='Select Location'
              value={locationFilter}
              onChange={(e) => { setLocationFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
            >
              <option value="all">All Locations in Kenya ({enhancedHotels.length})</option>
              {locations.map((loc) => {
                const count = enhancedHotels.filter(h => h.location === loc).length;
                return <option key={loc} value={loc}>Hotels in {loc} ({count})</option>;
              })}
            </select>

            <select
              title='Select Accessibility'
              value={accessibilityFilter}
              onChange={(e) => { setAccessibilityFilter(e.target.value); setCurrentPage(1); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
            >
              <option value="all">All Hotels</option>
              <option value="accessible">♿ Accessible Hotels Only</option>
              <option value="non-accessible">Non-Accessible Hotels</option>
            </select>

            <select
              title='Select Sort Order'
              value={sortOrder}
              onChange={(e) => { setSortOrder(e.target.value as any); setCurrentPage(1); }}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
            >
              <option value="default">Sort: Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Search: {searchTerm}
                  <button title='Clear Search' onClick={() => setSearchTerm("")}><X size={14} /></button>
                </span>
              )}
              {locationFilter !== "all" && (
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  Location: {locationFilter}
                  <button title='Clear Location' onClick={() => setLocationFilter("all")}><X size={14} /></button>
                </span>
              )}
              {accessibilityFilter !== "all" && (
                <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  {accessibilityFilter === "accessible" ? "♿ Accessible Only" : "Non-Accessible"}
                  <button title='Clear Accessibility' onClick={() => setAccessibilityFilter("all")}><X size={14} /></button>
                </span>
              )}
              <button onClick={clearAllFilters} className="text-sm text-orange-600 hover:text-orange-700 font-medium">Clear all</button>
            </div>
          )}
        </div>

        {/* Results count with shopping info */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold">{filteredHotels.length}</span> hotel{filteredHotels.length !== 1 ? "s" : ""} in Kenya
            {hasActiveFilters && " matching your criteria"}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CreditCard className="w-4 h-4" />
            <span>Secure booking • Best rate guarantee</span>
          </div>
        </div>

        {/* Hotel Grid/List */}
        {paginatedHotels.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-9">
              {paginatedHotels.map((hotel) => (
                <HotelCardWithAccessibility key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {paginatedHotels.map((hotel) => (
                <div key={hotel.id} className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={hotel.image} alt={hotel.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg">{hotel.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1"><MapPinIcon className="w-3 h-3" /> {hotel.location}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{hotel.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex gap-2">
                        {hotel.accessible && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">♿ Accessible</span>}
                        {hotel.accessible && hotel.accessibleRoomCount && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">🏨 {hotel.accessibleRoomCount} Accessible Rooms</span>
                        )}
                      </div>
                      <div className="text-right">
                        {hotel.price && <p className="font-bold text-orange-600">${hotel.price}<span className="text-xs text-gray-500">/night</span></p>}
                        <p className="text-xs text-gray-400">Best rate guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl text-gray-300 mb-6">🏨</div>
            <h4 className="text-2xl font-bold text-gray-700 mb-4">No hotels found</h4>
            <p className="text-gray-600 mb-8">We couldn&apos;t find any hotels in Kenya matching your current filters.</p>
            <button onClick={clearAllFilters} className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition">
              View All Hotels in Kenya
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-4 mt-16">
            <button onClick={(e) => goToPage(currentPage - 1, e)} disabled={currentPage === 1} className="px-6 py-3 bg-white border border-gray-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center gap-2">
              <ChevronLeft size={18} /> Previous
            </button>
            <span className="font-medium text-gray-700 px-4">Page <span className="font-bold">{currentPage}</span> of <span className="font-bold">{totalPages}</span></span>
            <button onClick={(e) => goToPage(currentPage + 1, e)} disabled={currentPage === totalPages} className="px-6 py-3 bg-white border border-gray-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition flex items-center gap-2">
              Next <ChevronRight size={18} />
            </button>
          </nav>
        )}

        {/* Help CTA with Shopping Bag */}
        <div className="text-center mt-16">
          <Link href="/contact" className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-lg">
            <ShoppingBag className="w-6 h-6" />
            Need Help Finding the Perfect Hotel in Kenya?
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Secure Booking</span>
          <span className="flex items-center gap-2"><CreditCard className="w-4 h-4" /> No Hidden Fees</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Customer Support</span>
          <span className="flex items-center gap-2"><Tag className="w-4 h-4" /> Best Price Guarantee</span>
        </div>
      </div>
    </section>
  );
}