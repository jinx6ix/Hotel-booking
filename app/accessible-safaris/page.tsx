// app/accessible-safaris/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ClientHotelsSection from "./ClientHotelsSection";

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
  UsersRound,
} from "lucide-react";

// Use your detailed accessible hotels data
import { accessibleHotels as hotels, accessibleLocations as locations } from "@/lib/accessible";

// ──────────────────────────────────────────────────────────────────────────────
// METADATA
// ──────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaetravel.com"),
  title: "Accessible Hotels Kenya | Wheelchair Friendly Safari Lodges & Accommodations 2025",
  description:
    "Discover wheelchair accessible hotels in Kenya. ✓ Crown Plaza Nairobi Airport, Sarova Hotels, Kibo Collection, Tamarind Tree, Ol Tukai Lodge. ✓ Roll-in showers, wide doorways, grab bars, adapted safari vehicles. Free consultation.",
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
  openGraph: {
    title: "Accessible Kenya Safaris | Wheelchair Friendly Wildlife Adventures & Hotels",
    description:
      "Your complete guide to wheelchair accessible safaris in Kenya. From Nairobi to Maasai Mara, Amboseli to Mombasa. Book adapted vehicles & accessible hotels with roll-in showers.",
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
    description:
      "Find & book wheelchair accessible safaris in Kenya. Adapted vehicles, accessible hotels, trained guides. Trusted by travelers with disabilities.",
    images: ["https://www.jaetravel.com/images/twitter/accessible-safaris.jpg"],
  },
};

// ──────────────────────────────────────────────────────────────────────────────
// SCHEMA (kept minimal but complete – expand if needed)
// ──────────────────────────────────────────────────────────────────────────────
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.jaetravel.com/accessible-safaris",
      url: "https://www.jaetravel.com/accessible-safaris",
      name: "Accessible Kenya Safaris - Wheelchair Friendly Wildlife Adventures & Hotels",
      description:
        "Directory of wheelchair accessible safari tours and hotels in Kenya featuring adapted vehicles, roll-in showers, grab bars, and trained guides.",
      inLanguage: "en-US",
      datePublished: "2024-01-15",
      dateModified: "2026-03-20",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.jaetravel.com/#website",
        name: "Jaetravel Expeditions",
        url: "https://www.jaetravel.com",
      },
    },
    ...hotels.map((hotel) => ({
      "@type": "Hotel",
      name: hotel.name,
      url: `https://www.jaetravel.com/hotels/${hotel.id}`,
      image: hotel.image,
      description: hotel.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: hotel.location,
        addressCountry: "KE",
      },
      telephone: hotel.phone || "+254 726 485 228",
      priceRange: "$$",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: hotel.rating,
        reviewCount: 100,
      },
    })),
  ],
};

export default function AccessibleSafarisPage() {
  const totalAccessibleRooms = hotels.reduce(
    (sum, h) => sum + (h.rooms?.filter((r: any) => r.accessible)?.length || 0),
    0
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Header />

      {/* Breadcrumb */}
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

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
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
              Experience the magic of Kenya's wildlife without barriers. <strong>Adapted 4x4 vehicles</strong>,{" "}
              <strong>wheelchair accessible hotels</strong> with roll-in showers, and trained guides for travelers with disabilities.
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
              <div className="text-4xl font-bold text-blue-700 mb-2">{hotels.length}+</div>
              <div className="text-gray-700 font-medium">Accessible Hotels</div>
              <p className="text-xs text-gray-500 mt-1">Across Kenya</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="text-4xl font-bold text-green-700 mb-2">{totalAccessibleRooms}+</div>
              <div className="text-gray-700 font-medium">Accessible Rooms</div>
              <p className="text-xs text-gray-500 mt-1">With roll-in showers</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
              <div className="text-4xl font-bold text-amber-700 mb-2">{locations.length}</div>
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

      {/* INTRODUCTORY SEO TEXT */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wheelchair Accessible Hotels & Safaris in Kenya</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kenya offers incredible wildlife experiences for travelers with disabilities. Our <strong>wheelchair accessible hotels</strong> feature{" "}
            <strong>roll-in showers, grab bars, and wide doorways</strong> to ensure comfort and independence. Combined with our{" "}
            <strong>adapted 4x4 safari vehicles</strong> equipped with hydraulic lifts, you can explore <strong>Maasai Mara, Amboseli, Tsavo, and beyond</strong>{" "}
            without barriers.
          </p>
        </div>
      </section>

      {/* ACCESSIBILITY FEATURES GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Makes a Hotel Accessible?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Car, title: "Adapted 4x4 Vehicles", desc: "Hydraulic lifts, ramps, removable seats" },
              { icon: ShowerHead, title: "Roll-in Showers", desc: "Zero-threshold with grab bars & seats" },
              { icon: DoorOpen, title: "Wide Doorways", desc: "32-36 inch doorways" },
              { icon: Bath, title: "Grab Bars", desc: "Strategically placed in bathrooms" },
              { icon: Users, title: "Trained Guides", desc: "Staff trained in disability assistance" },
              { icon: Wind, title: "Step-Free Pathways", desc: "Ramps and level paths" },
              { icon: BedDouble, title: "Lowered Fixtures", desc: "Lowered beds, sinks, switches" },
              { icon: Phone, title: "Emergency Call", desc: "Bedside and bathroom systems" },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100">
                <f.icon className="text-blue-600 mb-4" size={24} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The only changed section – hotels grid + modal – is now in ClientHotelsSection */}
      <ClientHotelsSection hotels={hotels} />

      {/* FOOTER */}
      <Footer />
    </>
  );
}