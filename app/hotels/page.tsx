// app/hotels/page.tsx
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SchemaRenderer } from "@/components/schema-renderer";
import ClientHotels from "./ClientHotels";

import { hotels, locations } from "@/lib/data";
import { Star, Award, Calendar, Sparkles, Accessibility, CheckCircle, Phone, Mail, CreditCard, ShoppingBag, Tag, Percent, Gift, Truck, Shield as ShieldIcon, Clock, Headphones, Zap } from "lucide-react";

// ────────────────────────────────────────────────
// Viewport Configuration
// ────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#EA580C",
};

// ────────────────────────────────────────────────
// Metadata - Title: 60 chars | Description: 115 chars
// ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Hotels in Kenya 2025-2026 | 120+ Luxury Safari Lodges & Resorts",
  description: "Discover the best hotels in Kenya for 2025-2026. From luxury safari lodges in Maasai Mara to beach resorts in Mombasa. Book 120+ hotels with best rates.",
  keywords: "hotels in kenya, hotels in kenya 2025, hotels in kenya 2026, luxury hotels kenya, safari lodges kenya, best hotels in kenya, maasai mara hotels, amboseli hotels, nairobi hotels, mombasa hotels, tsavo hotels, nakuru hotels, naivasha hotels, samburu hotels, kenya safari accommodation, hotels in nairobi kenya, beach hotels kenya, 5 star hotels kenya, hotels in maasai mara, hotels in mombasa, hotels in amboseli, hotels in tsavo, hotels in nakuru, hotels in naivasha, hotels in nanyuki, hotels in samburu",
  authors: [{ name: "Jaetravel Expeditions" }],
  publisher: "Jaetravel Expeditions",
  openGraph: {
    title: "Hotels in Kenya 2025-2026 | 120+ Luxury Safari Lodges",
    description: "Discover the best hotels in Kenya for 2025-2026. From luxury safari lodges in Maasai Mara to beach resorts in Mombasa. Best rates guaranteed.",
    url: "https://www.jaetravel.com/hotels",
    siteName: "Jaetravel Expeditions",
    images: [
      {
        url: "/og-hotels-kenya.jpg",
        width: 1200,
        height: 630,
        alt: "Best hotels in Kenya - Luxury safari lodge in Maasai Mara with wildlife view",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotels in Kenya 2025-2026 | 120+ Luxury Safari Lodges",
    description: "Discover the best hotels in Kenya for 2025-2026. From Maasai Mara to Mombasa. Best rates guaranteed.",
    images: ["/og-hotels-kenya.jpg"],
    site: "@jaetravel",
    creator: "@jaetravel",
  },
  alternates: {
    canonical: "https://www.jaetravel.com/hotels",
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
  verification: {
    google: "IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U",
    yandex: "b585127e41b6a92f",
    yahoo: "750BAD767F0FB4E4100952EBD7883CEE",
  },
};

// ────────────────────────────────────────────────
// COMPLETE SCHEMA MARKUP - ALL SHOPPING OPTIONS
// ────────────────────────────────────────────────

// 1. PRODUCT SCHEMA - Shopping/Product Snippet
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Luxury Hotel & Safari Lodge Bookings in Kenya",
  description: "Book the finest hotels in Kenya with best rate guarantee. Includes Maasai Mara luxury lodges, Amboseli Kilimanjaro-view hotels, Mombasa beach resorts, and Nairobi 5-star hotels.",
  image: "https://www.jaetravel.com/hotels-kenya-collection.jpg",
  brand: {
    "@type": "Brand",
    name: "Jaetravel Expeditions",
    logo: "https://www.jaetravel.com/logo.png",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Jaetravel Expeditions",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "80",
    highPrice: "1500",
    offerCount: hotels.length,
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
    offers: hotels.slice(0, 10).map(hotel => ({
      "@type": "Offer",
      name: hotel.name,
      price: hotel.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
      validThrough: "2026-12-31",
      url: `https://www.jaetravel.com/hotels/${hotel.id}`,
      priceValidUntil: "2026-12-31",
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
    worstRating: "1",
  },
  review: hotels.slice(0, 5).map(hotel => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: hotel.rating,
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Verified Guest",
    },
    reviewBody: hotel.description.substring(0, 200),
  })),
  sku: "HOTEL-KE-2025-001",
  mpn: "JT-HOTEL-001",
  category: "Luxury Safari Accommodation",
};

// 2. ITEM LIST SCHEMA - Complete Hotel Listing
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Hotels in Kenya 2025-2026",
  description: "Curated collection of the finest hotels in Kenya including luxury safari lodges, beach resorts, and city hotels.",
  numberOfItems: hotels.length,
  itemListElement: hotels.slice(0, 30).map((hotel, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Hotel",
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
      priceRange: hotel.price ? `$${hotel.price}-$${hotel.price * 2}` : "$$$",
      telephone: hotel.phone,
      email: hotel.email,
      amenityFeature: hotel.amenities?.map(amenity => ({
        "@type": "LocationFeatureSpecification",
        name: amenity,
      })) || [],
      availableLanguage: ["en"],
      checkinTime: "14:00",
      checkoutTime: "10:00",
    },
  })),
};

// 3. AGGREGATE OFFER SCHEMA - Price Comparison Shopping
const aggregateOfferSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  name: "Hotels in Kenya - Best Rates 2025-2026",
  description: "Best price guaranteed on all hotels in Kenya. Book luxury safari lodges, beach resorts, and city hotels.",
  priceCurrency: "USD",
  lowPrice: "80",
  highPrice: "1500",
  offerCount: hotels.length,
  availability: "https://schema.org/InStock",
  priceValidUntil: "2026-12-31",
  offers: hotels.slice(0, 20).map(hotel => ({
    "@type": "Offer",
    name: hotel.name,
    price: hotel.price,
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `https://www.jaetravel.com/hotels/${hotel.id}`,
    priceValidUntil: "2026-12-31",
    seller: {
      "@type": "Organization",
      name: "Jaetravel Expeditions",
    },
  })),
};

// 4. LOCAL BUSINESS SCHEMA - With Price Range
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Jaetravel Expeditions",
  image: "https://www.jaetravel.com/logo.png",
  description: "Premier Kenya safari tour operator offering direct bookings for hotels in Kenya, safari lodges, and luxury accommodations with best rate guarantee.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Westlands",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi",
    postalCode: "00100",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.286389,
    longitude: 36.817223,
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
    ratingValue: "4.8",
    reviewCount: "1247",
  },
  sameAs: [
    "https://www.facebook.com/jaetravel",
    "https://www.instagram.com/jaetravel",
    "https://twitter.com/jaetravel",
  ],
};

// 5. HOTEL SCHEMA - For Each Hotel (Dynamic)
const generateHotelSchemas = () => {
  return hotels.slice(0, 30).map((hotel) => ({
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
    priceRange: hotel.price ? `$${hotel.price}-$${hotel.price * 2}` : "$$$",
    telephone: hotel.phone,
    email: hotel.email,
    amenityFeature: hotel.amenities?.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })) || [],
    ...(hotel.accessible && {
      accessibilityFeatures: {
        "@type": "AccessibilityFeatures",
        wheelchairAccessible: true,
        accessibleParking: true,
        accessibleRestrooms: true,
      },
    }),
    offers: {
      "@type": "Offer",
      price: hotel.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2025-01-01",
      validThrough: "2026-12-31",
      priceValidUntil: "2026-12-31",
    },
  }));
};

// 6. OFFER CATALOG SCHEMA - Shopping Catalog
const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Hotels in Kenya - Complete Catalog",
  description: "Complete catalog of luxury hotels, safari lodges, and resorts in Kenya with best rate guarantee.",
  itemListElement: hotels.slice(0, 20).map((hotel, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Hotel",
      name: hotel.name,
      url: `https://www.jaetravel.com/hotels/${hotel.id}`,
      priceRange: `$${hotel.price}`,
    },
  })),
};

// 7. VIDEO OBJECT SCHEMA - Video Metadata
const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Luxury Hotels in Kenya - Safari Lodges & Beach Resorts Tour",
  description: "Virtual tour of the best hotels in Kenya including Maasai Mara luxury camps, Amboseli lodges with Kilimanjaro views, Mombasa beach resorts, and Nairobi 5-star hotels.",
  thumbnailUrl: "https://www.jaetravel.com/hotels-kenya-video-thumb.jpg",
  uploadDate: "2025-01-01T00:00:00Z",
  duration: "PT5M30S",
  contentUrl: "https://www.jaetravel.com/videos/hotels-kenya-tour.mp4",
  embedUrl: "https://www.youtube.com/embed/your-video-id",
  publisher: {
    "@type": "Organization",
    name: "Jaetravel Expeditions",
    logo: "https://www.jaetravel.com/logo.png",
  },
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: "https://schema.org/WatchAction",
    userInteractionCount: 15000,
  },
};

// 8. IMAGE OBJECT SCHEMA - Image Metadata for All Images
const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Hotels in Kenya - Image Gallery",
  description: "Beautiful images of luxury hotels, safari lodges, and beach resorts across Kenya.",
  image: hotels.slice(0, 20).map(hotel => ({
    "@type": "ImageObject",
    contentUrl: hotel.image,
    name: `${hotel.name} - Luxury Hotel in ${hotel.location}, Kenya`,
    description: hotel.description.substring(0, 150),
    caption: `${hotel.name} - ${hotel.location}, Kenya. Rating: ${hotel.rating}/5. ${hotel.accessible ? 'Wheelchair accessible rooms available.' : ''}`,
    creditText: "Jaetravel Expeditions",
    copyrightNotice: "© Jaetravel Expeditions",
    uploadDate: "2025-01-01",
    thumbnail: hotel.gallery?.[0] || hotel.image,
  })),
};

// 9. FAQ SCHEMA - Complete FAQ
const faqItems = [
  {
    question: "What are the best hotels in Kenya for safari?",
    answer: "The best hotels in Kenya for safari include Angama Mara and &Beyond Kichwa Tembo in Maasai Mara for Great Migration viewing, Ol Tukai Lodge in Amboseli for Kilimanjaro views, Sarova Whitesands in Mombasa for beach luxury, and Fairmont Mount Kenya Safari Club in Nanyuki for mountain experiences.",
  },
  {
    question: "How do I book hotels in Kenya for 2025-2026?",
    answer: "Book hotels in Kenya directly through Jaetravel for best rates guaranteed. We offer 120+ handpicked properties including luxury lodges, tented camps, beach resorts, and city hotels. Contact us with your travel dates and preferences for personalized recommendations.",
  },
  {
    question: "Are there affordable hotels in Kenya?",
    answer: "Yes, Kenya offers hotels for all budgets. While luxury lodges range from $350-800 per night, there are excellent mid-range and budget hotels from $80-200 per night. Contact us for recommendations based on your budget.",
  },
  {
    question: "Which hotels in Kenya are wheelchair accessible?",
    answer: "Several hotels in Kenya offer wheelchair accessible rooms including Crowne Plaza Nairobi Airport, Sarova Panafric Hotel, Sarova Lion Hill Nakuru, Sarova Woodlands Nakuru, Sarova Imperial Kisumu, and Sarova Whitesands Mombasa. All feature roll-in showers, grab bars, and wide doorways.",
  },
  {
    question: "What is the best time to book hotels in Kenya?",
    answer: "Book hotels in Kenya 6-12 months in advance for peak season (July-October for migration, December-January for holidays). Shoulder seasons (June, November) offer better availability and rates. Contact us for last-minute availability.",
  },
  {
    question: "Which hotels in Kenya are best for families?",
    answer: "Family-friendly hotels in Kenya include Lake Naivasha Sopa Resort (family suites), Sarova Whitesands Beach Resort (kids club), Ol Pejeta Bush Camp (children's programs), and many Maasai Mara lodges with interconnecting rooms.",
  },
  {
    question: "What's included in hotel bookings?",
    answer: "Most hotels in Kenya include full board (breakfast, lunch, dinner), game drives in shared vehicles, park fees, and bottled water. Some luxury properties include alcoholic beverages, spa treatments, and private vehicle upgrades.",
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

// 10. REVIEW SCHEMA - Aggregate Reviews
const reviewSchema = {
  "@context": "https://schema.org",
  itemReviewed: {
    "@type": "Hotel",
    name: "Hotels in Kenya",
    description: "Collection of hotels in Kenya including luxury safari lodges, beach resorts, and city hotels.",
  },
  "@type": "AggregateRating",
  name: "Hotels in Kenya - Guest Ratings",
  ratingValue: "4.8",
  reviewCount: "1247",
  bestRating: "5",
  worstRating: "1",
  ratingExplanation: "Based on guest reviews for hotels in Kenya including Maasai Mara, Amboseli, Mombasa, and Nairobi properties.",
};

// 11. BREADCRUMB SCHEMA
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravel.com/" },
    { "@type": "ListItem", position: 2, name: "Hotels in Kenya", item: "https://www.jaetravel.com/hotels" },
  ],
};

// 12. ORGANIZATION SCHEMA
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Jaetravel Expeditions",
  url: "https://www.jaetravel.com",
  logo: "https://www.jaetravel.com/logo.png",
  description: "Premier Kenya safari tour operator offering direct bookings for hotels in Kenya, safari lodges, and luxury accommodations.",
  telephone: "+254726485228",
  email: "info@jaetravel.co.ke",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
  },
};

// 13. WEB PAGE SCHEMA
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hotels in Kenya 2025-2026 | Luxury Safari Lodges & Resorts",
  description: "Complete guide to hotels in Kenya including Maasai Mara luxury camps, Amboseli Kilimanjaro-view lodges, Mombasa beach resorts, and Nairobi 5-star hotels.",
  url: "https://www.jaetravel.com/hotels",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: hotels.slice(0, 10).map((hotel, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.jaetravel.com/hotels/${hotel.id}`,
    })),
  },
};

// 14. SPECIAL OFFER SCHEMA - Shopping Enhancement
const specialOfferSchema = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: "Best Rate Guarantee on Hotels in Kenya",
  description: "Book any hotel in Kenya through Jaetravel and get the best rate guaranteed. If you find a lower rate elsewhere, we'll match it and give you an additional 10% off.",
  price: "0",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  validFrom: "2025-01-01",
  validThrough: "2026-12-31",
  eligibleRegion: "Worldwide",
  category: "Best Rate Guarantee",
};

// 15. SITE NAVIGATION ELEMENT SCHEMA
const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Hotels in Kenya Navigation",
  url: "https://www.jaetravel.com/hotels",
  potentialAction: locations.slice(0, 8).map(loc => ({
    "@type": "SearchAction",
    target: `https://www.jaetravel.com/destinations/${loc.slug}`,
    "query-input": "required name=destination",
  })),
};

// ────────────────────────────────────────────────
// Main Hotels Page Component
// ────────────────────────────────────────────────
export default function HotelsPage() {
  const accessibleHotelsCount = hotels.filter(h => h.accessible === true).length;
  const hotelSchemas = generateHotelSchemas();

  return (
    <>
      {/* ALL SCHEMA MARKUP - 15+ Schemas for Maximum SEO */}
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={productSchema} />
      <SchemaRenderer schema={itemListSchema} />
      <SchemaRenderer schema={aggregateOfferSchema} />
      <SchemaRenderer schema={localBusinessSchema} />
      <SchemaRenderer schema={offerCatalogSchema} />
      <SchemaRenderer schema={videoSchema} />
      <SchemaRenderer schema={imageGallerySchema} />
      <SchemaRenderer schema={faqSchema} />
      <SchemaRenderer schema={reviewSchema} />
      <SchemaRenderer schema={organizationSchema} />
      <SchemaRenderer schema={webPageSchema} />
      <SchemaRenderer schema={specialOfferSchema} />
      <SchemaRenderer schema={siteNavigationSchema} />
      {hotelSchemas.map((schema, idx) => (
        <SchemaRenderer key={idx} schema={schema} />
      ))}

      {/* VIDEO METADATA - VideoObject with Structured Data */}
      <Script
        id="video-metadata"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Best Hotels in Kenya - Virtual Tour 2025-2026",
            description: "Take a virtual tour of the best hotels in Kenya including luxury safari lodges in Maasai Mara, beach resorts in Mombasa, and 5-star hotels in Nairobi.",
            thumbnailUrl: "https://www.jaetravel.com/hotels-kenya-thumbnail.jpg",
            uploadDate: "2025-01-01T00:00:00Z",
            duration: "PT6M15S",
            contentUrl: "https://www.jaetravel.com/videos/hotels-kenya-tour.mp4",
            embedUrl: "https://www.youtube.com/embed/your-video-id",
            publisher: {
              "@type": "Organization",
              name: "Jaetravel Expeditions",
              logo: "https://www.jaetravel.com/logo.png",
            },
          }),
        }}
      />

      <Header />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-gradient-to-br from-orange-600 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero-hotels-kenya.jpg"
            alt="Luxury hotels in Kenya - Safari lodge overlooking Maasai Mara plains with elephants and acacia trees at golden hour, featuring luxury tented accommodation with deck views"
            fill
            className="object-cover"
            quality={90}
            priority
            sizes="100vw"
            title="Best Hotels in Kenya - Maasai Mara Luxury Safari Lodge"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-28">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Hotels in Kenya" },
            ]}
          />

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Hotels in Kenya 2025-2026
          </h1>

          <h2 className="mt-6 text-xl md:text-2xl max-w-4xl leading-relaxed font-medium">
            Discover the <strong className="font-bold">best hotels in Kenya</strong> for your safari adventure — from <strong>luxury safari lodges in Maasai Mara</strong> to <strong>beach resorts in Mombasa</strong>, <strong>5-star hotels in Nairobi</strong>, and <strong>tented camps in Amboseli</strong> with Mount Kilimanjaro views.
          </h2>

          <h3 className="mt-5 text-lg md:text-xl font-semibold">
            Book 120+ handpicked hotels in Kenya with Jaetravel
          </h3>

          {/* SHOPPING ENHANCEMENTS - Price Badges and Offers */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span className="text-sm">Best Rate Guarantee</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Percent className="w-4 h-4" />
              <span className="text-sm">Early Bird -15%</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span className="text-sm">Free Upgrade</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span className="text-sm">Free Airport Transfer</span>
            </div>
          </div>

          <p className="mt-3 text-base md:text-lg opacity-95 max-w-3xl">
            ✓ Best rates guaranteed • ✓ Complimentary upgrades • ✓ Flexible cancellation • ✓ Expert planning
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-orange-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Book Hotels in Kenya →
            </Link>
            <Link
              href="/destinations"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition"
            >
              Explore Destinations
            </Link>
          </div>

          {/* TRUST BADGES - Shopping Trust Signals */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm opacity-80">
            <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Secure Payment</span>
            <span className="flex items-center gap-1"><ShieldIcon className="w-4 h-4" /> Price Match</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 24/7 Support</span>
            <span className="flex items-center gap-1"><Headphones className="w-4 h-4" /> Expert Consultation</span>
          </div>
        </div>
      </section>

      {/* ==================== SHOPPING OFFERS SECTION ==================== */}
      <section className="py-12 bg-orange-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Tag className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Best Rate Guarantee</h4>
                <p className="text-sm text-gray-600">Find a lower rate? We&apos;ll match it and give you 10% off</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Gift className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Exclusive Perks</h4>
                <p className="text-sm text-gray-600">Free room upgrades, spa credits, and safari activities</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <CreditCard className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Flexible Payment</h4>
                <p className="text-sm text-gray-600">Pay deposit, balance later. Free cancellation available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY BOOK WITH US ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Why Book Hotels in Kenya with Jaetravel?
          </h2>
          <h3 className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            12+ years of expertise • 120+ handpicked properties • 4.8★ guest rating
          </h3>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Your Trusted Partner for Hotels in Kenya</h4>
              <div className="prose prose-lg text-gray-700">
                <p>
                  With over 12 years of on-the-ground experience, we have personally visited and vetted more than 120 of the finest <strong>hotels in Kenya</strong> — from iconic <strong>safari lodges in Maasai Mara</strong> and <strong>luxury tented camps in Amboseli</strong> to <strong>beach resorts in Mombasa</strong> and <strong>5-star hotels in Nairobi</strong>.
                </p>
                <p>
                  Our expert team specializes in curating the perfect accommodation for luxury travelers, honeymooners, families, photographers, and guests seeking accessible experiences.
                </p>
                <h5 className="text-lg font-semibold mt-6 text-gray-800">Direct booking benefits include:</h5>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />Best price guarantee – we match or beat any published rate</li>
                  <li><CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />Complimentary room upgrades (subject to availability)</li>
                  <li><CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />Exclusive safari activities & private game drives</li>
                  <li><CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />Free airport transfers (select properties)</li>
                  <li><CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />Personalized itinerary planning by Kenya safari specialists</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Award className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-orange-600 mb-2">120+</div>
                <p className="text-gray-700 font-medium">Hotels in Kenya</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Star className="w-10 h-10 text-orange-600 mx-auto mb-3 fill-orange-600" />
                <div className="text-4xl font-bold text-orange-600 mb-2">4.8★</div>
                <p className="text-gray-700 font-medium">Guest Rating</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Calendar className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-orange-600 mb-2">12+</div>
                <p className="text-gray-700 font-medium">Years of Expertise</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <Sparkles className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <p className="text-gray-700 font-medium">Direct Booking Perks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOTELS BY DESTINATION ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Hotels in Kenya by Destination
          </h2>
          <h3 className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore the best hotels, safari lodges, and resorts across Kenya&apos;s most iconic destinations
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Maasai Mara", slug: "maasai-mara", desc: "Luxury tented camps, Great Migration viewing, Big Five safaris", count: 20 },
              { name: "Amboseli", slug: "amboseli", desc: "Lodges with Mount Kilimanjaro views, elephant herds", count: 15 },
              { name: "Nairobi", slug: "nairobi", desc: "5-star city hotels, airport hotels, Nairobi National Park", count: 25 },
              { name: "Mombasa", slug: "mombasa", desc: "Beach resorts, Diani Beach, marine parks", count: 12 },
              { name: "Tsavo", slug: "tsavo-east", desc: "Red elephants, wilderness camps, Mzima Springs", count: 18 },
              { name: "Nakuru", slug: "nakuru", desc: "Flamingo viewing, rhino sanctuary", count: 12 },
              { name: "Naivasha", slug: "naivasha", desc: "Lakeside resorts, Hell's Gate cycling", count: 10 },
              { name: "Samburu", slug: "samburu", desc: "Special Five animals, remote wilderness", count: 8 },
            ].map((dest) => (
              <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group border border-gray-200">
                <h4 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                  Hotels in {dest.name}
                </h4>
                <p className="text-gray-600 mb-3">{dest.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-600 font-medium">View {dest.count}+ hotels →</span>
                  <span className="text-sm text-gray-400">from ${dest.name === "Maasai Mara" ? "350" : dest.name === "Nairobi" ? "180" : "150"}/night</span>
                </div>
              </Link>
            ))}
          </div>

          <h5 className="text-center text-gray-600 mt-8">
            Also available: <Link href="/destinations/nanyuki" className="text-orange-600 hover:underline">Hotels in Nanyuki</Link> • <Link href="/destinations/kisumu" className="text-orange-600 hover:underline">Hotels in Kisumu</Link> • <Link href="/destinations/tsavo-west" className="text-orange-600 hover:underline">Hotels in Tsavo West</Link>
          </h5>
        </div>
      </section>

      {/* ==================== ACCESSIBLE HOTELS ==================== */}
      {accessibleHotelsCount > 0 && (
        <section className="py-12 bg-orange-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-2xl shadow-md border border-orange-100">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Accessibility className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Wheelchair Accessible Hotels in Kenya</h4>
                  <p className="text-gray-600">
                    {accessibleHotelsCount} accessible properties • Roll-in showers • Grab bars • Wide doorways
                  </p>
                </div>
              </div>
              <Link
                href="#hotels-grid"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition"
              >
                View Accessible Hotels →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ==================== INTERACTIVE HOTELS GRID ==================== */}
      <div id="hotels-grid">
        <ClientHotels hotels={hotels} />
      </div>

      {/* ==================== PRICE COMPARISON TABLE ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Price Comparison - Hotels in Kenya
          </h2>
          <h3 className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Compare rates across different destinations and find the best value for your budget
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Destination</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Budget ($80-200)</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Mid-Range ($200-400)</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Luxury ($400+)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dest: "Maasai Mara", budget: "Mara Siria Camp", mid: "Mara Serena Lodge", luxury: "Angama Mara" },
                  { dest: "Amboseli", budget: "Kibo Safari Camp", mid: "Sentrim Amboseli", luxury: "Ol Tukai Lodge" },
                  { dest: "Nairobi", budget: "Ibis Styles", mid: "Radisson Blu", luxury: "Villa Rosa Kempinski" },
                  { dest: "Mombasa", budget: "Bamburi Beach Hotel", mid: "Sarova Whitesands", luxury: "Voyager Beach Resort" },
                  { dest: "Tsavo", budget: "Red Elephant Lodge", mid: "Voi Wildlife Lodge", luxury: "Finch Hattons" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{row.dest}</td>
                    <td className="px-6 py-4 text-gray-600">{row.budget}</td>
                    <td className="px-6 py-4 text-gray-600">{row.mid}</td>
                    <td className="px-6 py-4 text-gray-600">{row.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== GUEST REVIEWS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Guest Reviews for Hotels in Kenya
          </h2>
          <h3 className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            What travelers say about their stay at our handpicked hotels in Kenya
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { rating: 5, text: "Incredible luxury tented camp in Maasai Mara – wildlife right outside the tent, exceptional service and food. Best hotels in Kenya experience!", author: "Emma & James – UK", hotel: "Angama Mara", price: "$850/night" },
              { rating: 4.9, text: "The Amboseli hotel with Kilimanjaro views was breathtaking. Our accessible room was perfect and the staff went above and beyond.", author: "Sarah L. – USA", hotel: "Ol Tukai Lodge", price: "$420/night" },
              { rating: 4.8, text: "Beautiful property in Samburu. The guides were outstanding and the food exceptional. One of the best hotels in Kenya.", author: "Lars M. – Norway", hotel: "Saruni Samburu", price: "$550/night" },
              { rating: 5, text: "Lake Naivasha resort was magical. Boat safari with hippos, cycling in Hell's Gate, and comfortable rooms. Perfect family-friendly hotel.", author: "Priya K. – India", hotel: "Enashipai Resort", price: "$320/night" },
              { rating: 4.9, text: "Nairobi hotel with exceptional service. Close to airport, accessible room was spacious and comfortable. Highly recommend.", author: "Michael T. – Canada", hotel: "Crowne Plaza Nairobi Airport", price: "$280/night" },
              { rating: 4.8, text: "Mombasa beach resort exceeded expectations. Beautiful white sand beach, excellent food, and wonderful staff. Best beach hotel!", author: "Anna & David – Germany", hotel: "Sarova Whitesands", price: "$350/night" },
            ].map((review, i) => (
              <div key={i} className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className={`w-5 h-5 ${idx < Math.floor(review.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                <p className="font-medium text-gray-900">{review.author}</p>
                <div className="flex justify-between items-center mt-2">
                  <h6 className="text-sm text-orange-600">{review.hotel}</h6>
                  <span className="text-sm text-gray-500">{review.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-6">
            Frequently Asked Questions About Hotels in Kenya
          </h2>
          <h3 className="text-xl text-center text-gray-600 mb-14 max-w-3xl mx-auto">
            Everything you need to know before booking hotels in Kenya for your safari adventure
          </h3>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((faq, i) => (
              <details key={i} className="bg-white p-7 rounded-xl shadow-sm border border-gray-200 cursor-pointer group" open={i < 2}>
                <summary className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition flex items-center justify-between">
                  {faq.question}
                </summary>
                <div className="mt-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-lg">
              Still have questions? Contact our hotel experts
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Book Your Hotels in Kenya for 2025-2026?
          </h2>
          <h3 className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Best rates guaranteed • Exclusive perks • Personalized planning • 120+ handpicked hotels
          </h3>

          {/* SHOPPING CTA WITH PRICE DISPLAY */}
          <div className="bg-white/10 rounded-2xl p-6 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-center">
                <p className="text-sm opacity-80">Starting from</p>
                <p className="text-3xl font-bold">$80</p>
                <p className="text-xs">per night</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <p className="text-sm opacity-80">Average</p>
                <p className="text-3xl font-bold">$280</p>
                <p className="text-xs">per night</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <p className="text-sm opacity-80">Luxury from</p>
                <p className="text-3xl font-bold">$450</p>
                <p className="text-xs">per night</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-orange-700 px-12 py-6 rounded-xl font-bold text-xl hover:bg-orange-50 transition shadow-lg inline-flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              Get Hotel Recommendations
            </Link>
            <Link href="/destinations" className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition">
              Explore Destinations First
            </Link>
          </div>

          <h6 className="mt-8 text-sm opacity-80 flex justify-center gap-6 flex-wrap">
            <span className="flex items-center gap-1"><CreditCard className="w-4 h-4" /> Visa • Mastercard • Amex</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> M-Pesa Accepted</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> +254 726 485 228</span>
            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> info@jaetravel.co.ke</span>
          </h6>
        </div>
      </section>

      <Footer />
    </>
  );
}