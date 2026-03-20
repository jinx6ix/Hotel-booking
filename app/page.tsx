// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/search-bar";
import { 
  Star, 
  Users, 
  Shield, 
  Sparkles,
  ChevronRight,
  Clock,
  BadgeCheck,
  CheckCircle2,
  Home as HomeIcon,
  Hotel,
  MapPin,
  Award,
  Calendar,
  Heart,
  CreditCard,
  Headphones,
  Mail,
  Phone,
  Globe,
  Gift
} from "lucide-react";
import { hotels } from "@/lib/data";
import { HotelCard } from "@/components/hotel-card";
import { AmenitiesFilter } from "@/components/amenities-filter";
import { PopularSearchesEnhanced } from "@/components/popular-searches";

// ============================================
// DESTINATIONS DATA WITH ENHANCED METADATA
// ============================================
const destinations = [
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    description: "Great Migration, Big Cats, Hot Air Balloons",
    count: 45,
    image: "/maasai-mara.jpeg",
    slug: "maasai-mara",
    color: "from-amber-600 to-amber-800",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    badgeColor: "bg-amber-100 text-amber-800",
    priceFrom: 380,
    properties: [
      { name: "Angama Mara", rating: 4.9, price: 1200, type: "Luxury Lodge" },
      { name: "Keekorok Lodge", rating: 4.5, price: 380, type: "Mid-Range" },
      { name: "Mara Serena", rating: 4.6, price: 450, type: "Lodge" }
    ]
  },
  {
    id: "amboseli",
    name: "Amboseli",
    description: "Kilimanjaro Views, Elephant Herds",
    count: 28,
    image: "/amboseli.avif",
    slug: "amboseli",
    color: "from-blue-600 to-blue-800",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    priceFrom: 350,
    properties: [
      { name: "Ol Tukai Lodge", rating: 4.7, price: 420, type: "Lodge" },
      { name: "Amboseli Serena", rating: 4.5, price: 350, type: "Lodge" },
      { name: "Tortilis Camp", rating: 4.8, price: 650, type: "Luxury Camp" }
    ]
  },
  {
    id: "tsavo",
    name: "Tsavo East & West",
    description: "Red Elephants, Lava Fields, Man-Eaters",
    count: 34,
    image: "/tsavo-east.jpeg",
    slug: "tsavo-east",
    color: "from-orange-600 to-orange-800",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    badgeColor: "bg-orange-100 text-orange-800",
    priceFrom: 190,
    properties: [
      { name: "Finch Hattons", rating: 4.9, price: 850, type: "Luxury Lodge" },
      { name: "Ashnil Aruba", rating: 4.4, price: 280, type: "Lodge" },
      { name: "Voi Safari Lodge", rating: 4.2, price: 190, type: "Lodge" }
    ]
  },
  {
    id: "samburu",
    name: "Samburu",
    description: "Special Five, Grevy's Zebra, Culture",
    count: 22,
    image: "/samburu.webp",
    slug: "samburu",
    color: "from-emerald-600 to-emerald-800",
    lightColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    badgeColor: "bg-emerald-100 text-emerald-800",
    priceFrom: 320,
    properties: [
      { name: "Saruni Samburu", rating: 4.9, price: 950, type: "Luxury Lodge" },
      { name: "Ashnil Samburu", rating: 4.5, price: 320, type: "Lodge" },
      { name: "Elephant Bedroom", rating: 4.7, price: 580, type: "Luxury Camp" }
    ]
  },
  {
    id: "nakuru",
    name: "Lake Nakuru",
    description: "Flamingos, Rhinos, Waterfalls",
    count: 16,
    image: "/lake-nakuru-lodge.jpg",
    slug: "nakuru",
    color: "from-rose-600 to-rose-800",
    lightColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
    badgeColor: "bg-rose-100 text-rose-800",
    priceFrom: 220,
    properties: [
      { name: "Sarova Lion Hill", rating: 4.4, price: 280, type: "Lodge" },
      { name: "Lake Nakuru Lodge", rating: 4.3, price: 220, type: "Lodge" },
      { name: "Mbweha Camp", rating: 4.6, price: 310, type: "Camp" }
    ]
  },
  {
    id: "nairobi",
    name: "Nairobi",
    description: "City Safaris, Giraffe Centre, Karen Blixen",
    count: 38,
    image: "/nairobi.avif",
    slug: "nairobi",
    color: "from-purple-600 to-purple-800",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    badgeColor: "bg-purple-100 text-purple-800",
    priceFrom: 180,
    properties: [
      { name: "Giraffe Manor", rating: 4.9, price: 750, type: "Boutique Hotel" },
      { name: "Emakoko", rating: 4.8, price: 650, type: "Lodge" },
      { name: "Ole Sereni", rating: 4.5, price: 280, type: "Hotel" }
    ]
  }
];

// ============================================
// FEATURED HOTELS DATA
// ============================================
const featuredHotels = [
  {
    id: "maasai-mara-009",
    name: "Angama Mara",
    location: "Maasai Mara",
    rating: 4.9,
    reviews: 342,
    price: 1250,
    image: "/angama-mara.webp",
    badge: "Luxury Collection",
    badgeColor: "bg-amber-600",
    amenities: ["Pool", "Spa", "Free WiFi", "Restaurant", "Bar"],
    description: "Perched on the Oloololo Escarpment, overlooking the Mara Triangle. Every suite has a view.",
    rooms: Array(30).fill({ type: "Standard Room", price: 1250 }),
    gallery: ["/angama-room1.webp", "/angama-room2.webp", "/angama-room3.webp"],
    address: "Oloololo Escarpment, Maasai Mara",
    phone: "+254-700-123456",
    email: "info@angamamara.com"
  },
  {
    id: "amboseli-007",
    name: "Ol Donyo Lodge",
    location: "Amboseli",
    rating: 4.9,
    reviews: 287,
    price: 980,
    image: "/ol-donyo.webp",
    badge: "Top Pick",
    badgeColor: "bg-blue-600",
    amenities: ["Private Plunge Pools", "Horseback Safaris", "Star Beds", "Gym"],
    description: "Spectacular Kilimanjaro views from your private plunge pool. Exclusive conservancy.",
    rooms: Array(20).fill({ type: "Deluxe Room", price: 980 }),
    gallery: ["/ol-donyo-room1.webp", "/ol-donyo-room2.webp", "/ol-donyo-room3.webp"],
    address: "Amboseli National Park, Kenya",
    phone: "+254-700-654321",
    email: "info@oldonyolodge.com"
  },
  {
    id: "tsavo-west-007",
    name: "Finch Hattons",
    location: "Tsavo West",
    rating: 4.8,
    reviews: 412,
    price: 850,
    image: "/finch-hattons.webp",
    badge: "Best Value",
    badgeColor: "bg-green-600",
    amenities: ["Pool", "Spa", "Tennis Court", "Wine Cellar", "Butler Service"],
    description: "Luxury oasis in the heart of Tsavo. Spring-fed pools and exceptional service.",
    rooms: Array(25).fill({ type: "Luxury Suite", price: 850 }),
    gallery: ["/finch-room1.webp", "/finch-room2.webp", "/finch-room3.webp"],
    address: "Tsavo West National Park, Kenya",
    phone: "+254-700-987654",
    email: "info@finchhattons.com"
  },
  {
    id: "nairobi-012",
    name: "Giraffe Manor",
    location: "Nairobi",
    rating: 4.9,
    reviews: 523,
    price: 750,
    image: "/giraffe-manor.webp",
    badge: "Iconic",
    badgeColor: "bg-purple-600",
    amenities: ["Giraffe Feeding", "Gardens", "Fine Dining", "Heritage Property"],
    description: "Breakfast with giraffes. One of Africa's most iconic hotels.",
    rooms: Array(12).fill({ type: "Boutique Room", price: 750 }),
    gallery: ["/giraffe-room1.webp", "/giraffe-room2.webp", "/giraffe-room3.webp"],
    address: "Karen, Nairobi, Kenya",
    phone: "+254-700-112233",
    email: "info@giraffemanor.com"
  }
];

// ============================================
// ENHANCED METADATA - Title: 60 chars | Description: 115 chars
// ============================================
export const metadata: Metadata = {
  title: "Jaetravel Expeditions | #1 Kenya Safari Hotel Booking Platform 2025",
  description: "Book the best Kenya safari hotels & lodges online. Best price guarantee, instant confirmation, 24/7 support. Maasai Mara, Amboseli & more.",
  keywords: "kenya safari hotels, book safari lodges online, maasai mara accommodation, amboseli hotels with kilimanjaro view, tsavo lodges, samburu safari camps, lake nakuru flamingo hotels, nairobi airport hotels, best kenya luxury lodges, wheelchair accessible safari accommodation, family safari hotels kenya, great migration accommodation, budget safari camps kenya",
  authors: [{ name: "Jaetravel Expeditions", url: "https://www.jaetravel.com" }],
  creator: "Jaetravel Expeditions",
  publisher: "Jaetravel Expeditions",
  metadataBase: new URL('https://www.jaetravel.com'),
  alternates: {
    canonical: "https://www.jaetravel.com",
    languages: {
      "en": "https://www.jaetravel.com",
      "x-default": "https://www.jaetravel.com",
    }
    },
  },
  openGraph: {
    title: "Jaetravel Expeditions | Kenya's #1 Safari Hotel Booking Platform",
    description: "Book the best safari accommodations in Kenya. 200+ lodges and camps. Best rates, instant confirmation, 24/7 support.",
    url: "https://www.jaetravel.com",
    siteName: "Jaetravel Expeditions",
    images: [{
      url: "https://www.jaetravel.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Jaetravel - Kenya Safari Hotel Booking Platform - Elephants in Amboseli with Kilimanjaro",
      type: "image/jpeg",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaetravel Expeditions | Kenya Safari Hotel Booking",
    description: "Book safari hotels & lodges in Kenya. Best rates, instant confirmation.",
    images: ["https://www.jaetravel.com/images/twitter-card.jpg"],
    site: "@jaetravel",
    creator: "@jaetravel",
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
  verification: {
    google: "IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U",
  },
};

// ============================================
// COMPREHENSIVE SCHEMA MARKUP
// ============================================
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.jaetravel.com/#organization",
      name: "Jaetravel Expeditions",
      url: "https://www.jaetravel.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.jaetravel.com/logo.png",
        width: 600,
        height: 60,
      },
      description: "Kenya's premier safari hotel booking platform. Book luxury lodges, camps, and hotels across all major safari destinations.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Karen Roundabout, Nairobi",
        addressLocality: "Nairobi",
        addressRegion: "Nairobi",
        postalCode: "00100",
        addressCountry: "KE"
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+254-726-485228",
          contactType: "customer service",
          availableLanguage: ["English", "Swahili"],
          areaServed: "KE",
        }
      ],
      sameAs: [
        "https://www.facebook.com/jaetravelexpeditions",
        "https://www.instagram.com/jaetravelexpeditions",
        "https://twitter.com/jaetravel",
      ],
      foundingDate: "2015",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1247",
        bestRating: "5",
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.jaetravel.com/#website",
      url: "https://www.jaetravel.com",
      name: "Jaetravel Expeditions - Kenya Safari Hotel Booking",
      description: "Book Kenya Safari Hotels & Lodges Online - Best Rates Guaranteed",
      publisher: {
        "@id": "https://www.jaetravel.com/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.jaetravel.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      inLanguage: ["en", "sw"],
    },
    {
      "@type": "Product",
      "@id": "https://www.jaetravel.com/#product",
      name: "Kenya Safari Hotel Booking Platform",
      description: "Access to 200+ safari lodges and camps across Kenya with best rate guarantee.",
      brand: {
        "@type": "Brand",
        name: "Jaetravel Expeditions",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1247",
        bestRating: "5",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "150",
        highPrice: "2500",
        offerCount: "200+",
        availability: "https://schema.org/InStock",
      },
    },
    ...featuredHotels.map((hotel, idx) => ({
      "@type": "Product",
      "@id": `https://www.jaetravel.com/hotels/${hotel.id}#product`,
      name: hotel.name,
      description: hotel.description,
      image: hotel.image,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: hotel.price,
        availability: "https://schema.org/InStock",
        url: `https://www.jaetravel.com/hotels/${hotel.id}`,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: hotel.rating,
        reviewCount: hotel.reviews,
        bestRating: "5",
      }
    })),
    {
      "@type": "ItemList",
      "@id": "https://www.jaetravel.com/#destinations",
      name: "Kenya Safari Destinations",
      description: "Top safari destinations in Kenya",
      numberOfItems: destinations.length,
      itemListElement: destinations.map((dest, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: dest.name,
        description: dest.description,
        url: `https://www.jaetravel.com/destinations/${dest.slug}`,
      }))
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.jaetravel.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best time to book a Kenya safari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best time for Kenya safari is during the dry seasons from June to October (Great Migration in Maasai Mara) and January to March. Book at least 3-6 months in advance for peak season."
          }
        },
        {
          "@type": "Question",
          name: "Do you offer wheelchair accessible safari accommodations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we have 50+ wheelchair accessible safari lodges across Kenya, including properties in Maasai Mara, Amboseli, Tsavo, and Nairobi. All accessible rooms feature roll-in showers, grab bars, and wider doorways."
          }
        },
        {
          "@type": "Question",
          name: "What is your best price guarantee policy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you find a lower rate for the same hotel and dates within 24 hours of booking, we'll match it AND give you 10% off your next booking."
          }
        }
      ]
    }
  ]
};

// ============================================
// MAIN PAGE - SERVER COMPONENT
// ============================================
export default function Home() {
  return (
    <>
      {/* Schema Markup */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />

      <Header />

      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-linear-to-br from-amber-800 via-amber-700 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-pattern-safari bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center mb-12">
            {/* H1 - Primary Keyword */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Book Kenya&apos;s Best Safari Hotels & Lodges
            </h1>
            {/* H2 - Secondary Keyword */}
            <h2 className="text-xl md:text-2xl text-amber-100 mb-8 drop-shadow">
              200+ hand-picked properties • Best rate guarantee • Instant confirmation • 24/7 support
            </h2>
            
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BadgeCheck className="text-amber-300" size={24} />
                <span className="font-medium text-white">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BadgeCheck className="text-amber-300" size={24} />
                <span className="font-medium text-white">No Booking Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BadgeCheck className="text-amber-300" size={24} />
                <span className="font-medium text-white">Free Cancellation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <BadgeCheck className="text-amber-300" size={24} />
                <span className="font-medium text-white">Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar />
        </div>
      </section>

      {/* ========== DESTINATION GRID ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* H3 - Destination Section Heading */}
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Explore Safari Destinations</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect lodge or camp in Kenya&apos;s most iconic wildlife destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={dest.image}
                  alt={`${dest.name} safari hotels and lodges in Kenya with wildlife viewing opportunities`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                  priority={dest.id === "maasai-mara"}
                  quality={85}
                />
                <div className={`absolute inset-0 bg-linear-to-t ${dest.color} via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition`} />
                
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  {/* H4 - Destination Name */}
                  <h4 className="text-3xl font-bold mb-2 drop-shadow-lg">{dest.name}</h4>
                  <p className="text-white/90 mb-3 drop-shadow font-medium">{dest.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/30">
                      {dest.count} properties
                    </span>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/30">
                      From ${dest.priceFrom}/night
                    </span>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    {dest.properties.slice(0, 3).map((p, i) => (
                      <div key={i} className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs font-medium border border-white/30">
                        {p.name.split(' ')[0]}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED HOTELS ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              {/* H3 - Featured Hotels Heading */}
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Safari Hotels</h3>
              <p className="text-xl text-gray-600">Hand-picked luxury lodges and camps</p>
            </div>
            <Link href="/hotels" className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 bg-amber-50 px-4 py-2 rounded-lg transition hover:bg-amber-100">
              View all hotels
              <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY BOOK WITH US ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H3 - Benefits Section Heading */}
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">Why Book Your Safari Hotel With Jaetravel</h3>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">We make booking your dream safari accommodation simple, secure, and affordable</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="text-amber-600" size={32} />,
                title: "Best Price Guarantee",
                description: "Find a lower rate elsewhere? We'll match it and give you 10% off your next booking.",
                color: "bg-amber-100",
              },
              {
                icon: <Sparkles className="text-blue-600" size={32} />,
                title: "Curated Selection",
                description: "Only properties that meet our quality standards make it onto our platform.",
                color: "bg-blue-100",
              },
              {
                icon: <Clock className="text-green-600" size={32} />,
                title: "Instant Confirmation",
                description: "Book and receive confirmation in under 5 minutes. No waiting for approvals.",
                color: "bg-green-100",
              },
              {
                icon: <Users className="text-purple-600" size={32} />,
                title: "Local Experts",
                description: "24/7 support from our Nairobi-based team who know every property personally.",
                color: "bg-purple-100",
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-2xl mb-6`}>
                  {item.icon}
                </div>
                {/* H4 - Benefit Titles */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== POPULAR AMENITIES ========== */}
      <AmenitiesFilter hotels={hotels} />

      {/* ========== REVIEWS SECTION ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* H3 - Reviews Heading */}
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Loved by Travelers</h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="text-amber-400 fill-current" size={24} />
                ))}
              </div>
              <p className="text-xl font-bold text-gray-900">4.8</p>
            </div>
            <p className="text-lg text-gray-600">Average rating from 1,247+ verified reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Thompson",
                location: "London, UK",
                hotel: "Angama Mara",
                rating: 5,
                comment: "The booking process was seamless. Got instant confirmation and a rate 15% lower than anywhere else.",
                date: "2024-10-15"
              },
              {
                name: "Michael Chen",
                location: "Singapore",
                hotel: "Ol Donyo Lodge",
                rating: 5,
                comment: "Their local knowledge is unmatched. The agent recommended the perfect room with Kilimanjaro views.",
                date: "2024-09-22"
              },
              {
                name: "Emma Watson",
                location: "Sydney, AUS",
                hotel: "Giraffe Manor",
                rating: 5,
                comment: "Found a hotel that was sold out everywhere else through Jaetravel. Their inventory is amazing.",
                date: "2024-11-03"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="text-amber-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">&quot;{review.comment}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.location} • Stayed at {review.hotel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SPECIAL OFFER BANNER ========== */}
      <section className="py-6 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Gift className="text-white" size={24} />
            <p className="text-white font-medium">Special Offer: Book 7+ nights and receive complimentary airport transfer + one free game drive!</p>
            <Link href="/contact" className="bg-white text-amber-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition">
              Claim Offer →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== POPULAR SEARCHES ========== */}
      <PopularSearchesEnhanced />

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="relative py-24 bg-linear-to-br from-amber-800 to-amber-900">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/cta-bg.jpg"
            alt="Safari sunset in Kenya - elephants at golden hour with acacia trees"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority={false}
            quality={75}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          {/* H3 - CTA Heading */}
          <h3 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Ready to Book Your Safari Stay?</h3>
          <p className="text-xl mb-10 text-amber-100 drop-shadow max-w-2xl mx-auto">
            Join thousands of travelers who booked their perfect safari hotel with us
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/search"
              className="bg-white text-amber-800 hover:bg-amber-50 px-10 py-5 rounded-xl font-bold text-lg transition shadow-xl hover:shadow-2xl"
            >
              Search All Hotels
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition backdrop-blur-sm"
            >
              Talk to a Safari Expert
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-amber-200">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-300" />
              Best price guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-300" />
              No booking fees
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-300" />
              Free cancellation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-300" />
              Secure payment
            </span>
          </div>

          {/* H6 - Contact Info */}
          <h6 className="mt-8 text-sm opacity-80 flex justify-center gap-6 flex-wrap">
            <span className="flex items-center gap-1"><Phone size={14} /> +254 726 485 228</span>
            <span className="flex items-center gap-1"><Mail size={14} /> info@jaetravel.co.ke</span>
            <span className="flex items-center gap-1"><CreditCard size={14} /> Visa • Mastercard • M-Pesa</span>
          </h6>
        </div>
      </section>

      <Footer />
    </>
  );
}