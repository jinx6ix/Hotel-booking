// app/accessible-safaris/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ClientHotelsSection from "./ClientHotelsSection";

import {
  ChevronRight,
  ExternalLink,
  Accessibility,
  Car,
  Star,
  Users,
  BedDouble,
  ShowerHead,
  DoorOpen,
  Bath,
  Wind,
  Phone,
  Mail,
  Shield,
  Clock,
  Home,
  Gift,
  Headphones,
  CreditCard,
} from "lucide-react";

// Use your detailed accessible hotels data
import { accessibleHotels as hotels, accessibleLocations as locations } from "@/lib/accessible";

// ──────────────────────────────────────────────────────────────────────────────
// METADATA - Title: 60 chars | Description: 115 chars
// ──────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaetravel.com"),
  title: "Accessible Hotels Kenya | Wheelchair Friendly Safari Lodges 2025",
  description: "Discover wheelchair accessible hotels in Kenya. Crown Plaza Nairobi Airport, Sarova Hotels, Kibo Collection. Roll-in showers, wide doorways, grab bars. Free consultation.",
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
  authors: [{ name: "Jaetravel Expeditions" }],
  publisher: "Jaetravel Expeditions",
  openGraph: {
    title: "Accessible Kenya Safaris | Wheelchair Friendly Wildlife Adventures",
    description: "Complete guide to wheelchair accessible safaris in Kenya. Adapted vehicles, accessible hotels with roll-in showers, trained guides. Free consultation.",
    url: "https://www.jaetravel.com/accessible-safaris",
    siteName: "Jaetravel Expeditions",
    images: [
      {
        url: "https://www.jaetravel.com/accessible-safaris-kenya.jpg",
        width: 1200,
        height: 630,
        alt: "Wheelchair accessible safari vehicle with travelers viewing elephants in Amboseli National Park, Kenya",
        type: "image/jpeg",
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
    site: "@jaetravel",
    creator: "@jaetravel",
  },
  alternates: {
    canonical: "https://www.jaetravel.com/accessible-safaris",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ──────────────────────────────────────────────────────────────────────────────
// COMPLETE SCHEMA MARKUP - All Shopping & Accessibility Options
// ──────────────────────────────────────────────────────────────────────────────

// 1. PRODUCT SCHEMA - Accessible Safari Product
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Wheelchair Accessible Kenya Safari Packages 2025",
  description: "Fully accessible safari experiences in Kenya with adapted 4x4 vehicles, wheelchair accessible hotels featuring roll-in showers and grab bars, and trained disability-friendly guides.",
  image: "https://www.jaetravel.com/images/accessible-safari-kenya.jpg",
  brand: {
    "@type": "Brand",
    name: "Jaetravel Expeditions",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "280",
    highPrice: "1200",
    offerCount: hotels.length,
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "327",
    bestRating: "5",
  },
  sku: "ACCESSIBLE-KE-2025",
  category: "Accessible Safari Tours",
};

// 2. LOCAL BUSINESS SCHEMA - Travel Agency with Accessibility Features
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Jaetravel Expeditions",
  image: "https://www.jaetravel.com/logo.png",
  description: "Premier accessible safari operator in Kenya offering wheelchair adapted vehicles, accessible hotels, and trained disability-friendly guides.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Westlands",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  url: "https://www.jaetravel.com",
  telephone: "+254726485228",
  email: "info@jaetravel.co.ke",
  priceRange: "$$$",
  currenciesAccepted: "USD, KES, EUR, GBP",
  paymentAccepted: "Credit Card, Debit Card, Bank Transfer, M-Pesa",
  openingHours: "Mo-Su 08:00-20:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "327",
  },
  accessibilityFeatures: {
    "@type": "AccessibilityFeatures",
    wheelchairAccessible: true,
    accessibleParking: true,
    accessibleRestrooms: true,
  },
};

// 3. FAQ SCHEMA - Accessible Travel FAQs
const faqItems = [
  {
    question: "Which hotels in Kenya have wheelchair accessible rooms?",
    answer: "We offer verified accessible hotels including Crowne Plaza Nairobi Airport, Sarova Panafric Hotel, Sarova Lion Hill Nakuru, Sarova Woodlands Nakuru, Sarova Imperial Kisumu, Sarova Whitesands Mombasa, Kibo Collection Nairobi, Tamarind Tree Hotel, and Ol Tukai Lodge Amboseli. All feature roll-in showers, grab bars, and wide doorways.",
  },
  {
    question: "Do you have adapted safari vehicles for wheelchair users?",
    answer: "Yes! Our 4x4 safari vehicles are equipped with hydraulic lifts, removable seats, and extra space for wheelchairs. We also have vehicles with wheelchair tie-downs and trained drivers to assist with transfers.",
  },
  {
    question: "What accessibility features should I look for in a hotel?",
    answer: "Key features include roll-in showers with grab bars, wide doorways (32-36 inches), step-free pathways, lowered fixtures, emergency call systems in bathrooms, and accessible parking. All our listed hotels have been personally verified.",
  },
  {
    question: "Can I visit Maasai Mara with a wheelchair?",
    answer: "Absolutely! We offer accessible safaris in Maasai Mara with adapted vehicles that can navigate the terrain. Many lodges have accessible rooms with ground-level access and roll-in showers.",
  },
  {
    question: "Are your guides trained to assist travelers with disabilities?",
    answer: "Yes, all our guides receive specialized training in disability assistance, including safe transfer techniques, understanding mobility needs, and providing support while maintaining independence.",
  },
  {
    question: "What accessible destinations can I visit in Kenya?",
    answer: "We offer accessible safaris in Maasai Mara, Amboseli (with Kilimanjaro views), Tsavo East & West, Nairobi National Park, Lake Nakuru, Lake Naivasha, and Mombasa beach resorts.",
  },
  {
    question: "Do you offer accessible airport transfers?",
    answer: "Yes, we provide accessible airport transfers with vehicles equipped for wheelchairs. Our drivers will assist with luggage and ensure a smooth transfer from Jomo Kenyatta International Airport to your hotel.",
  },
  {
    question: "What is the best time for accessible safaris in Kenya?",
    answer: "The best time is June to October for dry season and excellent wildlife viewing. December to March is also great with warmer weather. We operate accessible safaris year-round.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// 4. BREADCRUMB SCHEMA
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravel.com/" },
    { "@type": "ListItem", position: 2, name: "Safaris", item: "https://www.jaetravel.com/safaris" },
    { "@type": "ListItem", position: 3, name: "Accessible Safaris", item: "https://www.jaetravel.com/accessible-safaris" },
  ],
};

// 5. VIDEO OBJECT SCHEMA
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Wheelchair Accessible Kenya Safari Experience",
  description: "See how travelers with mobility challenges enjoy Kenya's wildlife with adapted vehicles and accessible hotels. Full tour of accessible safari features.",
  thumbnailUrl: "https://www.jaetravel.com/videos/accessible-safari-thumb.jpg",
  uploadDate: "2025-01-01T00:00:00Z",
  duration: "PT4M30S",
  contentUrl: "https://www.jaetravel.com/videos/accessible-safari-kenya.mp4",
  embedUrl: "https://www.youtube.com/embed/accessible-safari-id",
  publisher: {
    "@type": "Organization",
    name: "Jaetravel Expeditions",
    logo: "https://www.jaetravel.com/logo.png",
  },
};

// 6. REVIEW SCHEMA
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  name: "Accessible Safari Kenya - Guest Ratings",
  ratingValue: "4.9",
  reviewCount: "327",
  bestRating: "5",
  worstRating: "1",
};

// 7. SPECIAL OFFER SCHEMA
const specialOfferSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Accessible Safari Package Discount",
  description: "Book 7+ nights and receive complimentary wheelchair accessible airport transfer and one free game drive.",
  price: "0",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  validFrom: "2025-01-01",
  validThrough: "2026-12-31",
};

// Generate hotel schemas
const generateHotelSchemas = () => {
  return hotels.slice(0, 20).map((hotel) => ({
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `https://www.jaetravel.com/hotels/${hotel.id}#hotel`,
    name: hotel.name,
    description: hotel.description,
    url: `https://www.jaetravel.com/hotels/${hotel.id}`,
    image: hotel.image,
    address: {
      "@type": "PostalAddress",
      addressLocality: hotel.location,
      addressCountry: "KE",
    },
    starRating: {
      "@type": "Rating",
      ratingValue: hotel.rating,
      bestRating: "5",
    },
    telephone: hotel.phone,
    email: hotel.email,
    accessibilityFeatures: {
      "@type": "AccessibilityFeatures",
      wheelchairAccessible: true,
      accessibleParking: true,
      accessibleRestrooms: true,
    },
    offers: {
      "@type": "Offer",
      price: hotel.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  }));
};

export default function AccessibleSafarisPage() {
  const totalAccessibleRooms = hotels.reduce(
    (sum, h) => sum + (h.rooms?.filter((r: any) => r.accessible)?.length || 0),
    0
  );
  const hotelSchemas = generateHotelSchemas();

  return (
    <>
      {/* ALL SCHEMA MARKUP */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(specialOfferSchema) }} />
      {hotelSchemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <Header />

      {/* Breadcrumb with Schema */}
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

      {/* HERO SECTION - H1 */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/accessible-safari-hero.jpg"
            alt="Wheelchair accessible safari vehicle with hydraulic lift overlooking elephants in Amboseli National Park with Mount Kilimanjaro in background"
            fill
            className="object-cover"
            quality={90}
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30">
              <Accessibility className="text-blue-300" size={20} />
              <span className="text-blue-200 font-medium">Wheelchair Accessible Travel Since 2015</span>
            </div>
            {/* H1 - Primary Keyword */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Wheelchair Accessible <span className="text-amber-300">Kenya Safaris</span>
            </h1>
            {/* H2 - Secondary Keyword */}
            <h2 className="text-xl md:text-2xl text-blue-100 mb-8 drop-shadow max-w-3xl mx-auto">
              Experience the magic of Kenya&apos;s wildlife without barriers. <strong>Adapted 4x4 vehicles</strong>,{" "}
              <strong>wheelchair accessible hotels</strong> with roll-in showers, and trained guides for travelers with disabilities.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#accessible-hotels"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                Browse Accessible Hotels
                <ChevronRight size={20} />
              </Link>
              <Link
                href="/car-hire/accessible-vehicles"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2"
              >
                View Accessible Vehicles
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES - Shopping Signals */}
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

      {/* STATS BANNER - Shopping Enhancement */}
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

      {/* SPECIAL OFFER BANNER - Shopping Enhancement */}
      <section className="py-6 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Gift className="text-white" size={24} />
            <p className="text-white font-medium">Special Offer: Book 7+ nights and receive complimentary wheelchair accessible airport transfer + one free game drive!</p>
            <Link href="/contact" className="bg-white text-amber-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition">
              Claim Offer →
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTORY SEO TEXT - H3 */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Wheelchair Accessible Hotels & Safaris in Kenya</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kenya offers incredible wildlife experiences for travelers with disabilities. Our <strong>wheelchair accessible hotels</strong> feature{" "}
            <strong>roll-in showers, grab bars, and wide doorways</strong> to ensure comfort and independence. Combined with our{" "}
            <strong>adapted 4x4 safari vehicles</strong> equipped with hydraulic lifts, you can explore <strong>Maasai Mara, Amboseli, Tsavo, and beyond</strong>{" "}
            without barriers.
          </p>
        </div>
      </section>

      {/* ACCESSIBILITY FEATURES GRID - H4 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl font-bold text-center text-gray-900 mb-12">What Makes a Hotel Accessible?</h4>
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
                <h5 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h5>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBLE DESTINATIONS SECTION - H4 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl font-bold text-center text-gray-900 mb-12">Accessible Safari Destinations in Kenya</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(0, 9).map((loc) => (
              <div key={loc.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <h5 className="text-xl font-bold text-gray-900 mb-2">{loc.name}</h5>
                <p className="text-gray-600 text-sm mb-4">{loc.description.substring(0, 120)}...</p>
                <Link href={`/destinations/${loc.slug}`} className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                  View accessible hotels in {loc.name} <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTELS GRID SECTION - Main Hotels Component */}
      <div id="accessible-hotels">
        <ClientHotelsSection hotels={hotels} />
      </div>

      {/* TESTIMONIALS SECTION - H4 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Guests Say About Accessible Safaris</h4>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", location: "USA", text: "The accessible room at Sarova Panafric was perfect. Roll-in shower, grab bars, and wide doorways. The adapted safari vehicle in Maasai Mara made my dream trip possible!", rating: 5 },
              { name: "Michael T.", location: "Canada", text: "Crowne Plaza Nairobi Airport exceeded my expectations. The accessible room was spacious and well-designed. The staff were incredibly helpful with transfers.", rating: 5 },
              { name: "Emma & James", location: "UK", text: "Ol Tukai Lodge in Amboseli was magical. The accessible room had amazing Kilimanjaro views and the staff went above and beyond to assist us.", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - H4 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions About Accessible Safaris</h4>
          <div className="space-y-4">
            {faqItems.slice(0, 6).map((faq, i) => (
              <details key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200" open={i === 0}>
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-blue-600 transition">
                  {faq.question}
                </summary>
                <p className="mt-3 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h4 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Accessible Kenya Safari?</h4>
          <p className="text-xl mb-8 opacity-90">Free consultation • Customized itineraries • Best rate guarantee</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2">
              <Phone size={20} />
              Contact Our Accessible Travel Experts
            </Link>
            <Link href="/car-hire/accessible-vehicles" className="bg-white/10 border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2">
              <Car size={20} />
              View Accessible Vehicles
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2"><CreditCard size={16} /> Secure Booking</span>
            <span className="flex items-center gap-2"><Shield size={16} /> Best Price Guarantee</span>
            <span className="flex items-center gap-2"><Headphones size={16} /> 24/7 Support</span>
            <span className="flex items-center gap-2"><Mail size={16} /> info@jaetravel.co.ke</span>
            <span className="flex items-center gap-2"><Phone size={16} /> +254 726 485 228</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}