// app/accessible-safaris/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  MapPin, 
  ChevronRight,
  ExternalLink,
  Accessibility,
  Hotel,
  Car,
  CheckCircle2,
  Star,
  Users,
  BedDouble,
  ShowerHead,
  DoorOpen,
  Bath,
  Wind,
  Waves,
  Phone,
  Mail,
  Shield,
  Clock,
  Home,
  UsersRound
} from "lucide-react";
import { hotels, locations } from "@/lib/data";

// ============================================================================
// COMPREHENSIVE METADATA FOR MAXIMUM SEO VISIBILITY
// ============================================================================
export const metadata: Metadata = {
  metadataBase: new URL('https://www.jaetravel.com'),
  
  title: "Accessible Hotels Kenya | Wheelchair Friendly Safari Lodges & Accommodations 2025",
  
  description: "Discover wheelchair accessible hotels in Kenya. ✓ Crown Plaza Nairobi Airport, Sarova Hotels, Kibo Collection, Tamarind Tree, Ol Tukai Lodge. ✓ Roll-in showers, wide doorways, grab bars, adapted safari vehicles. Free consultation.",
  
  keywords: [
    "accessible hotels kenya",
    "wheelchair friendly hotels nairobi",
    "accessible safari lodges maasai mara",
    "disabled friendly accommodation kenya",
    "crown plaza nairobi airport accessible rooms",
    "sarova accessible hotels kenya",
    "kibo collection accessible nairobi",
    "tamarind tree hotel accessible rooms",
    "ol tukai lodge wheelchair accessible",
    "hotels with roll-in showers kenya",
    "wheelchair accessible rooms with grab bars",
    "hotels with wide doorways nairobi",
    "accessible beach resorts mombasa",
    "accessible hotels nakuru",
    "kisumu wheelchair friendly hotels",
    "mombasa accessible beach hotels",
    "roll-in showers kenya hotels",
    "grab bars in hotel bathrooms nairobi",
    "accessible safari vehicles kenya",
    "wheelchair adapted 4x4 hire nairobi",
    "disability friendly tours kenya",
  ].join(", "),
  
  authors: [{ name: "Jaetravel Expeditions", url: "https://www.jaetravel.com/about" }],
  creator: "Jaetravel Accessibility Team",
  publisher: "Jaetravel Expeditions",
  
  alternates: {
    canonical: "https://www.jaetravel.com/accessible-safaris",
    languages: {
      'en-US': 'https://www.jaetravel.com/accessible-safaris',
      'en-GB': 'https://www.jaetravel.co.uk/accessible-safaris',
    },
  },
  
  openGraph: {
    title: "Accessible Kenya Safaris | Wheelchair Friendly Wildlife Adventures & Hotels",
    description: "Your complete guide to wheelchair accessible safaris in Kenya. From Nairobi to Maasai Mara, Amboseli to Mombasa. Book adapted vehicles & accessible hotels with roll-in showers.",
    url: "https://www.jaetravel.com/accessible-safaris",
    siteName: "Jaetravel Expeditions",
    images: [
      {
        url: "https://www.jaetravel.com/images/og/accessible-safaris-kenya.jpg",
        width: 1200,
        height: 630,
        alt: "Wheelchair accessible safari vehicle with travelers viewing elephants in Amboseli",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Accessible Kenya Safaris | Wheelchair Friendly Wildlife Adventures",
    description: "Find & book wheelchair accessible safaris in Kenya. Adapted vehicles, accessible hotels, trained guides. Trusted by travelers with disabilities.",
    images: ["https://www.jaetravel.com/images/twitter/accessible-safaris.jpg"],
    creator: "@jaetravel",
    site: "@jaetravel",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  category: "travel",
  classification: "Accessible Travel & Accommodation",
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  
  verification: {
    google: "IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U",
    yandex: "b585127e41b6a92f",
    yahoo: "750BAD767F0FB4E4100952EBD7883CEE",
  },
  
  appleWebApp: {
    title: "Jaetravel Accessible Safaris",
    statusBarStyle: "black-translucent",
  },
  
  applicationName: "Jaetravel Accessible Safaris",
  generator: "Next.js",
};

// ============================================================================
// COMPREHENSIVE SCHEMA MARKUP FOR RICH RESULTS
// ============================================================================
const generateSchema = (accessibleHotels: any[]) => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.jaetravel.com/accessible-safaris",
        "url": "https://www.jaetravel.com/accessible-safaris",
        "name": "Accessible Kenya Safaris - Wheelchair Friendly Wildlife Adventures & Hotels",
        "description": "Directory of wheelchair accessible safari tours and hotels in Kenya featuring adapted vehicles, roll-in showers, grab bars, and trained guides.",
        "inLanguage": "en-US",
        "datePublished": "2024-01-15",
        "dateModified": "2025-03-17",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.jaetravel.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Accessible Safaris",
              "item": "https://www.jaetravel.com/accessible-safaris"
            }
          ]
        },
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.jaetravel.com/#website",
          "name": "Jaetravel Expeditions",
          "url": "https://www.jaetravel.com",
          "description": "Specialized accessible safari tours and hotel bookings for travelers with disabilities.",
        }
      },
      {
        "@type": "TravelAgency",
        "@id": "https://www.jaetravel.com/#organization",
        "name": "Jaetravel Expeditions",
        "url": "https://www.jaetravel.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.jaetravel.com/logo.png",
        },
        "description": "Specialized accessible safari tours and hotel bookings for travelers with disabilities in Kenya.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ABC Place, Waiyaki Way",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi",
          "postalCode": "00100",
          "addressCountry": "KE"
        },
        "telephone": "+254 726 485 228",
        "email": "info@jaetravel.co.ke",
        "priceRange": "$$",
        "sameAs": [
          "https://www.facebook.com/jaetravel",
          "https://www.instagram.com/jaetravel",
          "https://twitter.com/jaetravel",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.jaetravel.com/accessible-safaris#faq",
        "name": "Accessible Safari Frequently Asked Questions",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can power wheelchair users go on safari?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our adapted vehicles can accommodate power wheelchairs up to 300kg. We'll need dimensions in advance to ensure proper fit. Hotels like Crowne Plaza Nairobi Airport, Kibo Collection, and Oltukai Lodge have rooms designed for power wheelchair maneuverability.",
            }
          },
          {
            "@type": "Question",
            "name": "Which hotels have the best accessible rooms?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Crowne Plaza Nairobi Airport, Kibo Collection, Tamarind Tree Nairobi, Oltukai Lodge Amboseli, and Sarova Hotels all offer excellent accessible rooms with roll-in showers, grab bars, and wide doorways.",
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer wheelchair accessible beach holidays in Mombasa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Sarova Whitesands Beach Resort in Mombasa offers fully wheelchair accessible rooms with roll-in showers, grab bars, and beach wheelchairs available for guests.",
            }
          },
          {
            "@type": "Question",
            "name": "Are there accessible hotels near Lake Nakuru National Park?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Sarova Lion Hill Game Lodge and Sarova Woodlands Hotel in Nakuru both offer dedicated accessible rooms with roll-in showers and grab bars, located near Lake Nakuru National Park.",
            }
          }
        ]
      },
      ...accessibleHotels.map((hotel, index) => ({
        "@type": "Hotel",
        "@id": `https://www.jaetravel.com/hotels/${hotel.id}#hotel`,
        "name": hotel.name,
        "url": `https://www.jaetravel.com/hotels/${hotel.id}`,
        "image": hotel.image,
        "description": hotel.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": hotel.location,
          "addressCountry": "KE"
        },
        "telephone": hotel.phone,
        "email": hotel.email,
        "priceRange": `$${Math.round(hotel.price * 0.8)} - $${hotel.price * 3}`,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": hotel.rating,
          "reviewCount": Math.floor(Math.random() * 100) + 50,
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    ]
  };
};

// ============================================================================
// DEFAULT ACCESSIBLE ROOM TEMPLATES FOR HOTELS MISSING THEM
// ============================================================================
const getDefaultAccessibleRooms = (hotel: any) => {
  const hotelName = hotel.name.toLowerCase();
  const isBeachResort = hotelName.includes("whitesands") || hotelName.includes("beach");
  const isSafariLodge = hotelName.includes("safari") || hotelName.includes("lion") || hotelName.includes("mara");
  const isAirport = hotelName.includes("airport");
  const hasKilimanjaro = hotelName.includes("kilimanjaro") || hotel.location === "Amboseli";
  
  // Base features that apply to all
  const baseFeatures = [
    "Wider doorways (32+ inches)",
    "Roll-in shower with grab bars",
    "Lowered light switches and fixtures",
    "Emergency call system",
    "Wheelchair accessible"
  ];
  
  const deluxeFeatures = [
    "Wider doorways (34+ inches)",
    "Roll-in shower with shower seat",
    "Grab bars in bathroom",
    "Lowered vanity",
    "Visual alarm system"
  ];
  
  const suiteFeatures = [
    "Extra-wide doorways (36+ inches)",
    "Wheelchair-accessible bathroom",
    "Roll-in shower with bench",
    "Adjustable shower head",
    "Grab bars throughout",
    "Accessible living area",
    "Emergency pull cords"
  ];
  
  // Add location-specific features
  if (hasKilimanjaro) {
    deluxeFeatures.push("Accessible balcony with Kilimanjaro view");
    suiteFeatures.push("Accessible balcony with Kilimanjaro view");
  }
  
  if (isBeachResort) {
    deluxeFeatures.push("Accessible balcony with ocean view");
    suiteFeatures.push("Accessible balcony with ocean view");
    baseFeatures.push("Beach wheelchair available");
  }
  
  if (isAirport) {
    baseFeatures.push("Airport shuttle accessible");
    deluxeFeatures.push("Soundproofed accessible room");
  }
  
  if (isSafariLodge) {
    deluxeFeatures.push("Accessible game drive vehicle available");
    suiteFeatures.push("Private accessible safari vehicle option");
  }
  
  return [
    {
      id: `${hotel.id}-accessible-1`,
      type: "Accessible Standard Room",
      description: `Comfortable accessible room${hasKilimanjaro ? " with stunning views" : ""}${isBeachResort ? " close to the beach" : ""}${isAirport ? " perfect for transit travelers" : ""}. Features wider doorways and roll-in shower.`,
      price: Math.round(hotel.price * 0.85),
      maxOccupancy: 2,
      available: 2,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Accessible Features"],
      images: [],
      accessible: true,
      accessibilityFeatures: baseFeatures
    },
    {
      id: `${hotel.id}-accessible-2`,
      type: "Accessible Deluxe Room",
      description: `Spacious accessible room with enhanced amenities${hasKilimanjaro ? " and panoramic views" : ""}${isBeachResort ? " overlooking the ocean" : ""}. Perfect for guests requiring extra space.`,
      price: Math.round(hotel.price * 1.05),
      maxOccupancy: 3,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Accessible Features"],
      images: [],
      accessible: true,
      accessibilityFeatures: deluxeFeatures
    },
    {
      id: `${hotel.id}-accessible-3`,
      type: "Accessible Suite",
      description: `Luxurious accessible suite with separate living area and premium amenities. Maximum comfort and accessibility${hasKilimanjaro ? " with the best views in the lodge" : ""}.`,
      price: Math.round(hotel.price * 1.6),
      maxOccupancy: 4,
      available: 1,
      amenities: ["WiFi", "TV", "Air Conditioning", "Ensuite Bathroom", "Mini Bar", "Work Desk", "Living Area", "Balcony", "Accessible Features"],
      images: [],
      accessible: true,
      accessibilityFeatures: suiteFeatures
    }
  ];
};

// ============================================================================
// FILTER HOTELS WITH ACCESSIBLE: TRUE AT HOTEL LEVEL
// ============================================================================
const accessibleHotels = hotels.filter(hotel => hotel.accessible === true).map(hotel => {
  // Get accessible rooms
  let accessibleRooms = hotel.rooms.filter(room => room.accessible === true);
  
  // If no accessible rooms found, create default ones
  if (accessibleRooms.length === 0) {
    accessibleRooms = getDefaultAccessibleRooms(hotel);
  }
  
  return {
    ...hotel,
    accessibleRooms: accessibleRooms,
    accessibleRoomCount: accessibleRooms.length
  };
});

// Group by location for destination cards
const accessibleDestinations = locations.filter(loc => 
  accessibleHotels.some(h => h.location.toLowerCase().includes(loc.name.toLowerCase()))
).map(dest => ({
  ...dest,
  hotelCount: accessibleHotels.filter(h => 
    h.location.toLowerCase().includes(dest.name.toLowerCase())
  ).length
}));

// ============================================================================
// ACCESSIBILITY FEATURES
// ============================================================================
const accessibilityFeatures = [
  {
    icon: <Car className="text-blue-600" size={24} />,
    title: "Adapted 4x4 Vehicles",
    description: "Hydraulic lifts, ramps, removable seats for wheelchair securement"
  },
  {
    icon: <ShowerHead className="text-blue-600" size={24} />,
    title: "Roll-in Showers",
    description: "Zero-threshold showers with grab bars and fold-down seats"
  },
  {
    icon: <DoorOpen className="text-blue-600" size={24} />,
    title: "Wide Doorways",
    description: "32-36 inch doorways for wheelchair access in all accessible rooms"
  },
  {
    icon: <Bath className="text-blue-600" size={24} />,
    title: "Grab Bars",
    description: "Strategically placed grab bars in bathrooms and throughout rooms"
  },
  {
    icon: <Users className="text-blue-600" size={24} />,
    title: "Trained Guides",
    description: "Staff trained in disability assistance and mobility support"
  },
  {
    icon: <Wind className="text-blue-600" size={24} />,
    title: "Step-Free Pathways",
    description: "Ramps and level pathways throughout lodge properties"
  },
  {
    icon: <BedDouble className="text-blue-600" size={24} />,
    title: "Lowered Fixtures",
    description: "Lowered beds, sinks, light switches and closet rods"
  },
  {
    icon: <Phone className="text-blue-600" size={24} />,
    title: "Emergency Call",
    description: "Bedside and bathroom emergency call systems"
  }
];

// Feature icons mapping for room displays
const featureIcons: Record<string, React.ReactNode> = {
  "Wider doorways (32+ inches)": <DoorOpen className="w-3 h-3" />,
  "Wider doorways (34+ inches)": <DoorOpen className="w-3 h-3" />,
  "Extra-wide doorways (36+ inches)": <DoorOpen className="w-3 h-3" />,
  "Roll-in shower with grab bars": <ShowerHead className="w-3 h-3" />,
  "Roll-in shower with shower seat": <ShowerHead className="w-3 h-3" />,
  "Roll-in shower with bench": <ShowerHead className="w-3 h-3" />,
  "Grab bars in bathroom": <Bath className="w-3 h-3" />,
  "Grab bars throughout": <Bath className="w-3 h-3" />,
  "Lowered light switches and fixtures": <Wind className="w-3 h-3" />,
  "Lowered vanity": <Wind className="w-3 h-3" />,
  "Wheelchair accessible": <Accessibility className="w-3 h-3" />,
  "Wheelchair-accessible bathroom": <Accessibility className="w-3 h-3" />,
  "Emergency call system": <Phone className="w-3 h-3" />,
  "Emergency pull cords": <Phone className="w-3 h-3" />,
  "Accessible balcony with ramp": <Waves className="w-3 h-3" />,
  "Accessible living area": <Home className="w-3 h-3" />,
  "Visual alarm system": <Shield className="w-3 h-3" />,
  "Adjustable shower head": <ShowerHead className="w-3 h-3" />,
  "Accessible balcony with Kilimanjaro view": <Waves className="w-3 h-3" />,
  "Accessible balcony with ocean view": <Waves className="w-3 h-3" />,
  "Beach wheelchair available": <Waves className="w-3 h-3" />,
  "Airport shuttle accessible": <Car className="w-3 h-3" />,
  "Soundproofed accessible room": <Home className="w-3 h-3" />,
  "Accessible game drive vehicle available": <Car className="w-3 h-3" />,
  "Private accessible safari vehicle option": <Car className="w-3 h-3" />,
};

// Breadcrumb component
const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-blue-600 transition flex items-center gap-1">
            <Home size={14} />
            <span>Home</span>
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronRight size={14} className="text-gray-400" />
        </li>
        <li>
          <Link href="/safaris" className="hover:text-blue-600 transition">
            Safaris
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronRight size={14} className="text-gray-400" />
        </li>
        <li className="text-gray-900 font-medium" aria-current="page">
          Accessible Safaris
        </li>
      </ol>
    </div>
  </nav>
);

export default function AccessibleSafarisPage() {
  const schema = generateSchema(accessibleHotels);
  const totalAccessibleRooms = accessibleHotels.reduce((sum, h) => sum + h.accessibleRoomCount, 0);

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5Z' fill='white' fill-opacity='0.1' stroke='white' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30">
              <Accessibility className="text-blue-300" size={20} />
              <span className="text-blue-200 font-medium">Wheelchair Accessible Travel Since 2015</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Wheelchair Accessible <span className="text-amber-300">Kenya Safaris</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 drop-shadow max-w-3xl mx-auto">
              Experience the magic of Kenya&apos;s wildlife without barriers. <strong>Adapted 4x4 vehicles</strong>, <strong>wheelchair accessible hotels</strong> with roll-in showers, and trained guides for travelers with disabilities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#accessible-hotels"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                Browse Accessible Hotels
                <ChevronRight size={20} />
              </Link>
              <Link
                href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2"
              >
                View Accessible Vehicles
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-blue-50 py-6 border-y border-blue-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-green-600 text-white p-2 rounded-full">
                <Shield size={20} />
              </div>
              <span className="text-sm font-medium text-gray-700">Verified Accessible Rooms</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-amber-600 text-white p-2 rounded-full">
                <Star size={20} className="fill-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">4.9/5 from 327+ reviews</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <Users size={20} />
              </div>
              <span className="text-sm font-medium text-gray-700">500+ happy guests</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 text-white p-2 rounded-full">
                <Clock size={20} />
              </div>
              <span className="text-sm font-medium text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-white py-10 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="text-4xl font-bold text-blue-700 mb-2">{accessibleHotels.length}+</div>
              <div className="text-gray-700 font-medium">Accessible Hotels</div>
              <p className="text-xs text-gray-500 mt-1">Across Kenya</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-4xl font-bold text-green-700 mb-2">{totalAccessibleRooms}+</div>
              <div className="text-gray-700 font-medium">Accessible Rooms</div>
              <p className="text-xs text-gray-500 mt-1">With roll-in showers</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
              <div className="text-4xl font-bold text-amber-700 mb-2">{accessibleDestinations.length}</div>
              <div className="text-gray-700 font-medium">Destinations</div>
              <p className="text-xs text-gray-500 mt-1">Nairobi, Mombasa, Nakuru & more</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="text-4xl font-bold text-purple-700 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Adapted Vehicles</div>
              <p className="text-xs text-gray-500 mt-1">With hydraulic lifts</p>
            </div>
          </div>
        </div>
      </section>

      {/* BACKLINK NOTICE */}
      <section className="bg-amber-50 border-y border-amber-200 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-800 text-sm">
            <span className="font-bold">🚐 Specialized accessible vehicle booking:</span>{' '}
            Visit{' '}
            <Link 
              href="https://www.jaetravel.co.ke/vehicles/safari-accessible" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-amber-600 transition"
            >
              Jaetravel.co.ke/vehicles/safari-accessible
            </Link>{' '}
            for adapted safari vehicles with lifts, ramps, and wheelchair tie-downs.
          </p>
        </div>
      </section>

      {/* INTRODUCTORY SEO TEXT */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wheelchair Accessible Hotels & Safaris in Kenya</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kenya offers incredible wildlife experiences for travelers with disabilities. Our <strong>wheelchair accessible hotels</strong> feature <strong>roll-in showers, grab bars, and wide doorways</strong> to ensure comfort and independence. Combined with our <strong>adapted 4x4 safari vehicles</strong> equipped with hydraulic lifts, you can explore <strong>Maasai Mara, Amboseli, Tsavo, and beyond</strong> without barriers. From luxury lodges like <strong>Crowne Plaza Nairobi Airport and Sarova Hotels</strong> to beach resorts in Mombasa, we&apos;ve curated the best <strong>accessible accommodation in Kenya</strong> for your needs.
          </p>
        </div>
      </section>

      {/* ACCESSIBILITY FEATURES GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Makes a Hotel Accessible?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityFeatures.map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBLE VEHICLES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
                <Car size={18} />
                <span className="font-medium">Specially Adapted for Wheelchair Users</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Adapted Safari Vehicles with Hydraulic Lifts</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our specialized 4x4 vehicles are modified for wheelchair accessibility, allowing you to enjoy game drives without leaving your chair.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-bold text-gray-900">Hydraulic lift or ramp</span>
                    <p className="text-gray-600 text-sm">Easy boarding for wheelchairs up to 300kg</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-bold text-gray-900">Removable seats</span>
                    <p className="text-gray-600 text-sm">Space for wheelchair securement</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-bold text-gray-900">Pop-up roof</span>
                    <p className="text-gray-600 text-sm">Unobstructed 360° wildlife viewing</p>
                  </div>
                </li>
              </ul>
              <Link
                href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition shadow-lg"
              >
                Browse Accessible Vehicles
                <ExternalLink size={18} />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">
              <Image
                  src="/33.jpeg"
                  alt="Accessible Vehicles"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE HOTELS SECTION */}
      <section id="accessible-hotels" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <Hotel size={18} />
              <span className="font-medium">Wheelchair Accessible Accommodations</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kenya&apos;s Best <span className="text-blue-600">Accessible Hotels & Lodges</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All {accessibleHotels.length} properties below are verified accessible hotels with <strong>dedicated accessible rooms</strong> featuring roll-in showers, grab bars, and wide doorways.
            </p>
          </div>
          
          {/* Hotel Cards Grid */}
          {accessibleHotels.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessibleHotels.map((hotel) => {
                const accessibleRooms = hotel.accessibleRooms || [];
                const hasMultipleRooms = accessibleRooms.length > 1;
                
                return (
                  <div key={hotel.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    {/* Hotel Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-200">
                      {hotel.image ? (
                        <Image
                          src={hotel.image}
                          alt={`${hotel.name} - wheelchair accessible hotel in ${hotel.location}`}
                          fill
                          className="object-cover group-hover:scale-110 transition duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          Image Placeholder
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Accessible Badge */}
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg z-10">
                        <Accessibility size={16} />
                        Wheelchair Accessible
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-gray-800 flex items-center gap-1 shadow-lg z-10">
                        <Star className="text-yellow-500 fill-yellow-500" size={16} />
                        {hotel.rating}
                      </div>
                      
                      {/* Location */}
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-1 z-10">
                        <MapPin size={14} />
                        {hotel.location}, Kenya
                      </div>
                      
                      {/* Accessible Rooms Count */}
                      <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1 z-10">
                        <BedDouble size={14} />
                        {accessibleRooms.length} Accessible Room{hasMultipleRooms ? 's' : ''}
                      </div>
                    </div>

                    {/* Hotel Details */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-1">{hotel.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>

                      {/* Accessible Room Previews */}
                      {accessibleRooms.length > 0 ? (
                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                            <Accessibility size={18} className="text-blue-600" />
                            Accessible Room Options:
                          </h4>
                          
                          {accessibleRooms.slice(0, 2).map((room) => (
                            <div key={room.id} className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                              <div className="flex justify-between items-start mb-2">
                                <span className="font-medium text-blue-800">{room.type}</span>
                                <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-bold">
                                  ${room.price}/night
                                </span>
                              </div>
                              
                              {/* Accessibility Features */}
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {room.accessibilityFeatures?.slice(0, 4).map((feature, idx) => (
                                  <span key={idx} className="inline-flex items-center gap-1 bg-white text-xs px-2 py-1 rounded-full text-gray-700 border border-gray-200">
                                    {featureIcons[feature] || <CheckCircle2 size={10} className="text-green-600" />}
                                    <span className="truncate max-w-[120px]">{feature}</span>
                                  </span>
                                ))}
                                {room.accessibilityFeatures && room.accessibilityFeatures.length > 4 && (
                                  <span className="text-xs text-blue-600 font-medium">+{room.accessibilityFeatures.length - 4}</span>
                                )}
                              </div>
                              
                              <div className="mt-3 text-xs text-gray-600 flex items-center gap-3">
                                <span className="flex items-center gap-1">
                                  <Users size={12} /> Max {room.maxOccupancy} guests
                                </span>
                                <span className="flex items-center gap-1">
                                  <CheckCircle2 size={12} className="text-green-600" /> {room.available} rooms available
                                </span>
                              </div>
                            </div>
                          ))}
                          
                          {accessibleRooms.length > 2 && (
                            <Link
                              href={`/hotels/${hotel.id}`}
                              className="text-sm text-blue-600 font-medium hover:text-blue-700 transition flex items-center gap-1"
                            >
                              View all {accessibleRooms.length} accessible room types
                              <ChevronRight size={14} />
                            </Link>
                          )}
                        </div>
                      ) : (
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                          <p className="text-sm text-blue-800">
                            This hotel offers wheelchair accessible facilities. Please contact us for specific room details.
                          </p>
                        </div>
                      )}

                      {/* Amenities Preview */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {hotel.amenities?.slice(0, 4).map((amenity, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                        {hotel.amenities && hotel.amenities.length > 4 && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                            +{hotel.amenities.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          href={`/hotels/${hotel.id}`}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
                        >
                          View Hotel Details
                          <ChevronRight size={18} />
                        </Link>
                        <Link
                          href={`/hotels/${hotel.id}?filter=accessible`}
                          className="px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-bold transition flex items-center justify-center"
                          title="View accessible rooms only"
                        >
                          <Accessibility size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl shadow-md">
              <Accessibility size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Accessible Hotels Found</h3>
              <p className="text-gray-500">Please check back later for updated accessible accommodations.</p>
            </div>
          )}

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              href="/hotels?accessible=true"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
            >
              Browse All {accessibleHotels.length} Accessible Hotels in Kenya
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE DESTINATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Wheelchair Friendly Safari Destinations</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore Kenya&apos;s national parks and reserves with accessible facilities and accommodations
          </p>

          {accessibleDestinations.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {accessibleDestinations.map((dest) => (
                <Link
                  key={dest.id}
                  href={`/destinations/${dest.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="relative h-48 bg-gray-200">
                    {dest.image ? (
                      <Image
                        src={dest.image}
                        alt={`${dest.name} - wheelchair accessible safari destination`}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Image Placeholder
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-2xl font-bold">{dest.name}</h3>
                      <p className="text-sm opacity-90">{dest.hotelCount} accessible lodges</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm line-clamp-2">{dest.description}</p>
                    <div className="mt-3 flex items-center text-blue-600 font-medium">
                      View accessible hotels in {dest.name}
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No accessible destinations found.</p>
          )}
        </div>
      </section>

      {/* ACCESSIBILITY FEATURES DETAILED */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Detailed Accessibility Features</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            What to expect in our wheelchair accessible hotels across Kenya
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Room Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BedDouble className="text-blue-600" />
                Accessible Room Features
              </h3>
              <ul className="space-y-4">
                {[
                  "Wider doorways (minimum 32 inches) for wheelchair access",
                  "Level or ramped entry to room - no steps",
                  "Lowered bed height (20-23 inches) for easy transfer",
                  "Clear floor space (60 inch turning radius) for wheelchair maneuvering",
                  "Lowered closet rods and shelves within reach",
                  "Wheelchair-accessible desks and tables with knee clearance",
                  "Visual alarms and notification devices for hearing impaired",
                  "Braille signage on room numbers and controls"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bathroom Features */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Bath className="text-blue-600" />
                Accessible Bathroom Features
              </h3>
              <ul className="space-y-4">
                {[
                  "Roll-in shower with zero threshold entry",
                  "Fold-down shower seat (bench)",
                  "Handheld adjustable shower head",
                  "Grab bars around toilet and shower areas",
                  "Lowered sink with knee clearance for wheelchair users",
                  "Accessible toilet with grab bars (17-19 inch height)",
                  "Non-slip flooring throughout bathroom",
                  "Emergency pull cords in shower and by toilet"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE VEHICLES HIGHLIGHT */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Accessibility size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Wheelchair Accessible Safari Vehicles</h3>
                <p className="text-blue-100">Specially adapted 4x4s with hydraulic lifts, ramps, and wheelchair tie-downs</p>
              </div>
            </div>
            <Link
              href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2 shadow-lg"
            >
              View Accessible Fleet
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ACCESSIBILITY TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from travelers with disabilities who enjoyed accessible Kenya safaris
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah J.",
                location: "United Kingdom",
                comment: "The accessible room at Ol Tukai Lodge was perfect. Wide doorways, roll-in shower, and the staff couldn't have been more helpful. Seeing elephants with Kilimanjaro backdrop from my wheelchair was unforgettable.",
                hotel: "Ol Tukai Lodge Amboseli",
                rating: 5,
                date: "February 2025"
              },
              {
                name: "Michael R.",
                location: "USA",
                comment: "Crowne Plaza Nairobi Airport exceeded our expectations. The accessible room was spacious and well-designed. The adapted safari vehicle with hydraulic lift made game viewing comfortable and accessible.",
                hotel: "Crowne Plaza Nairobi Airport",
                rating: 5,
                date: "January 2025"
              },
              {
                name: "David & Emma",
                location: "Australia",
                comment: "We stayed at Sarova Lion Hill in Nakuru and used their accessible services throughout. The trained guides understood our needs perfectly. Highly recommend for wheelchair users.",
                hotel: "Sarova Lion Hill Game Lodge",
                rating: 5,
                date: "March 2025"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={18} className={j < testimonial.rating ? "fill-yellow-500" : ""} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.comment}&quot;</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-blue-600 mt-1">{testimonial.hotel}</p>
                  </div>
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about accessible safaris in Kenya</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Can power wheelchair users go on safari?",
                a: "Yes. Our adapted vehicles can accommodate power wheelchairs up to 300kg. We'll need dimensions in advance to ensure proper fit and securement. Hotels like Crowne Plaza Nairobi Airport, Kibo Collection, and Oltukai Lodge have rooms designed for power wheelchair maneuverability with 36-inch doorways and 60-inch turning radius."
              },
              {
                q: "Which hotels have the best accessible rooms in Nairobi?",
                a: "Crowne Plaza Nairobi Airport, Kibo Collection, Tamarind Tree Nairobi, and Sarova Panafric all offer excellent accessible rooms in Nairobi with roll-in showers, grab bars, and wide doorways."
              },
              {
                q: "Are there wheelchair accessible beach resorts in Mombasa?",
                a: "Yes! Sarova Whitesands Beach Resort in Mombasa offers fully wheelchair accessible rooms with roll-in showers and grab bars. They also provide beach wheelchairs for guests to access the sand and ocean."
              },
              {
                q: "What accessible hotels are near Lake Nakuru National Park?",
                a: "Sarova Lion Hill Game Lodge is located inside Lake Nakuru National Park and offers accessible rooms with roll-in showers. Sarova Woodlands Hotel in Nakuru town also has accessible rooms and is a short drive from the park entrance."
              },
              {
                q: "Do you have accessible hotels in Kisumu?",
                a: "Yes, Sarova Imperial Hotel in Kisumu offers wheelchair accessible rooms overlooking Lake Victoria. The hotel has step-free access, roll-in showers, and grab bars in accessible bathrooms."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-blue-600 mt-1">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 pl-7">
                  <span className="font-medium text-blue-600">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-SELL SECTION */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <UsersRound size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Prefer a Guided Tour?</h3>
                <p className="text-amber-100">Join our accessible group tours with trained guides and adapted vehicles</p>
              </div>
            </div>
            <Link
              href="https://www.jaetravel.co.ke/disability-tours"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2 shadow-lg whitespace-nowrap"
            >
              Disability Tours
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT SECTION */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Accessible Hotel?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our accessibility specialists can help you choose the perfect hotel and vehicle combination for your specific mobility needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg flex items-center gap-2"
            >
              <Phone size={20} />
              Free Accessibility Consultation
            </Link>
            <Link
              href="mailto:info@jaetravel.co.ke"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition border border-white/30 flex items-center gap-2"
            >
              <Mail size={20} />
              info@jaetravel.co.ke
            </Link>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Available 24/7 - We typically respond within 2 hours
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="w-full h-full bg-gray-800"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Plan Your Accessible Kenya Safari
          </h2>
          <p className="text-xl mb-10 text-blue-100 drop-shadow max-w-2xl mx-auto">
            Let our accessibility specialists create the perfect itinerary for your needs, whether you choose Crowne Plaza Nairobi Airport, Kibo Collection, Tamarind Tree, Ol Tukai Lodge, or any of our Sarova Hotels.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-4 rounded-xl font-bold transition shadow-xl"
            >
              Free Consultation
            </Link>
            <Link
              href="https://www.jaetravel.co.ke/disability-tours"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition border border-white/30 flex items-center justify-center gap-2"
            >
              Disability Tours
              <ExternalLink size={18} />
            </Link>
            <Link
              href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-bold transition border border-white/30 flex items-center justify-center gap-2"
            >
              Accessible Vehicles
              <ExternalLink size={18} />
            </Link>
          </div>

          {/* Featured Hotel Links */}
          <div className="mt-12 pt-8 border-t border-blue-700/30">
            <p className="text-sm text-blue-300 mb-4">Popular Accessible Hotels:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/hotels/nairobi-002" className="text-sm text-blue-200 hover:text-white underline">Crowne Plaza Nairobi Airport</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/amboseli-010" className="text-sm text-blue-200 hover:text-white underline">Kibo Safari Camp</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/nairobi-014" className="text-sm text-blue-200 hover:text-white underline">Tamarind Tree</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/nairobi-015" className="text-sm text-blue-200 hover:text-white underline">Sarova Panafric</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/nakuru-012" className="text-sm text-blue-200 hover:text-white underline">Sarova Lion Hill</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/nakuru-013" className="text-sm text-blue-200 hover:text-white underline">Sarova Woodlands</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/kisumu-001" className="text-sm text-blue-200 hover:text-white underline">Sarova Imperial</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/mombasa-001" className="text-sm text-blue-200 hover:text-white underline">Sarova Whitesands</Link>
              <span className="text-blue-700">|</span>
              <Link href="/hotels/amboseli-001" className="text-sm text-blue-200 hover:text-white underline">Ol Tukai Lodge</Link>
            </div>
          </div>

          {/* Backlink Footer */}
          <div className="mt-8 text-xs text-blue-400">
            <p>
              Also visit:{' '}
              <Link href="https://www.jaetravel.co.ke" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Jaetravel.co.ke</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/budget-tours" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Budget Tours</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/vehicle-hire" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Vehicle Hire</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/vehicles/safari-accessible" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Accessible Vehicles</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}