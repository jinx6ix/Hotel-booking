// app/safari-lodges/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { hotels, locations } from "@/lib/data";
import { 
  Star, MapPin, Users, ChevronRight, Sparkles, 
  Wine, Camera, BadgeCheck, Award, Mountain, 
  TreePine, Waves, Clock, Shield, CreditCard, 
  Phone, Mail, Headphones, CheckCircle2, Home,
  Building, Hotel, Coffee, Wifi, Car, Utensils,
  Dumbbell, Waves as WavesIcon, Sun, Moon,
  Gift, Tag, Percent, Truck, Zap, Heart
} from "lucide-react";

// ============================================
// FILTER LODGES (permanent stone/wood structures)
// ============================================
const safariLodges = hotels.filter(hotel => 
  (hotel.name.toLowerCase().includes("lodge") || 
   hotel.name.toLowerCase().includes("hotel") ||
   hotel.name.toLowerCase().includes("resort")) && 
  !hotel.name.toLowerCase().includes("camp") &&
  !hotel.name.toLowerCase().includes("tented")
);

// Group by location
const lodgesByLocation = safariLodges.reduce((acc, hotel) => {
  if (!acc[hotel.location]) {
    acc[hotel.location] = [];
  }
  acc[hotel.location].push(hotel);
  return acc;
}, {} as Record<string, typeof safariLodges>);

// Calculate stats
const totalLodges = safariLodges.length;
const avgRating = (safariLodges.reduce((sum, l) => sum + l.rating, 0) / totalLodges).toFixed(1);
const avgPrice = Math.round(safariLodges.reduce((sum, l) => sum + l.price, 0) / totalLodges);
const accessibleLodges = safariLodges.filter(l => l.accessible === true).length;

// Top rated lodges
const topRatedLodges = [...safariLodges].sort((a, b) => b.rating - a.rating).slice(0, 6);

// ============================================
// METADATA - Title: 60 chars | Description: 115 chars
// ============================================
export const metadata: Metadata = {
  title: "Safari Lodges in Kenya 2025 | Best Luxury Safari Accommodations",
  description: "Discover 50+ best safari lodges in Kenya for 2025. Luxury lodges in Maasai Mara, Amboseli, Tsavo. Swimming pools, fine dining, spas. Best rate guaranteed.",
  keywords: "safari lodges kenya, luxury safari lodges, maasai mara lodges, amboseli lodges, tsavo lodges, best safari accommodation kenya, kenya safari lodges 2025, lodge safari kenya, 5 star safari lodges, family safari lodges, wheelchair accessible safari lodges",
  authors: [{ name: "Jaetravel Expeditions", url: "https://www.jaetravel.com" }],
  creator: "Jaetravel Expeditions",
  publisher: "Jaetravel Expeditions",
  metadataBase: new URL("https://www.jaetravel.com"),
  alternates: {
    canonical: "https://www.jaetravel.com/safari-lodges",
    languages: {
      'en-US': 'https://www.jaetravel.com/safari-lodges',
      'en-GB': 'https://www.jaetravel.com/en-gb/safari-lodges',
    },
  },
  openGraph: {
    title: "Safari Lodges in Kenya 2025 | Best Luxury Safari Accommodations",
    description: "Discover the best safari lodges in Kenya. Luxury lodges in Maasai Mara, Amboseli, Tsavo. Swimming pools, fine dining, spas. Best rate guaranteed.",
    url: "https://www.jaetravel.com/safari-lodges",
    siteName: "Jaetravel Expeditions",
    images: [
      {
        url: "https://www.jaetravel.com/images/og/safari-lodges-kenya.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury safari lodge in Kenya with infinity pool overlooking Maasai Mara plains and wildlife",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Lodges in Kenya 2025 | Best Luxury Safari Accommodations",
    description: "Discover 50+ best safari lodges in Kenya. Luxury lodges in Maasai Mara, Amboseli, Tsavo. Best rate guaranteed.",
    images: ["https://www.jaetravel.com/images/twitter/safari-lodges.jpg"],
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
};

// ============================================
// COMPREHENSIVE SCHEMA MARKUP
// ============================================
const lodgesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.jaetravel.com/#organization",
      name: "Jaetravel Expeditions",
      url: "https://www.jaetravel.com",
      logo: "https://www.jaetravel.com/logo.png",
      description: "Kenya's premier safari lodge booking platform offering luxury accommodations in Maasai Mara, Amboseli, Tsavo, and beyond.",
      telephone: "+254726485228",
      email: "info@jaetravel.co.ke",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1247",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://www.jaetravel.com/safari-lodges",
      url: "https://www.jaetravel.com/safari-lodges",
      name: "Safari Lodges in Kenya 2025 | Best Luxury Safari Accommodations",
      description: "Complete guide to the best safari lodges in Kenya. 50+ luxury properties in Maasai Mara, Amboseli, Tsavo, and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.jaetravel.com/#website",
      },
    },
    {
      "@type": "Product",
      "@id": "https://www.jaetravel.com/safari-lodges/#product",
      name: "Luxury Safari Lodge Bookings in Kenya",
      description: "Access to 50+ premier safari lodges across Kenya with best rate guarantee. Includes Maasai Mara luxury lodges, Amboseli Kilimanjaro-view lodges, and Tsavo wilderness lodges.",
      brand: {
        "@type": "Brand",
        name: "Jaetravel Expeditions",
      },
      image: "https://www.jaetravel.com/images/safari-lodges-collection.jpg",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "180",
        highPrice: "1250",
        offerCount: totalLodges,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avgRating,
        reviewCount: totalLodges * 15,
        bestRating: "5",
      },
      category: "Luxury Safari Accommodation",
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaetravel.com/safari-lodges/#lodges-list",
      name: "Best Safari Lodges in Kenya",
      description: "Curated collection of the finest safari lodges in Kenya",
      numberOfItems: totalLodges,
      itemListElement: safariLodges.slice(0, 30).map((lodge, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Hotel",
          "@id": `https://www.jaetravel.com/hotels/${lodge.id}#hotel`,
          name: lodge.name,
          description: lodge.description,
          url: `https://www.jaetravel.com/hotels/${lodge.id}`,
          image: lodge.image,
          address: {
            "@type": "PostalAddress",
            addressLocality: lodge.location,
            addressCountry: "KE",
          },
          starRating: {
            "@type": "Rating",
            ratingValue: lodge.rating,
            bestRating: "5",
          },
          priceRange: `$${lodge.price}-$${Math.round(lodge.price * 1.5)}`,
          telephone: lodge.phone,
          email: lodge.email,
          amenityFeature: lodge.amenities?.map(amenity => ({
            "@type": "LocationFeatureSpecification",
            name: amenity,
          })) || [],
          ...(lodge.accessible && {
            accessibilityFeatures: {
              "@type": "AccessibilityFeatures",
              wheelchairAccessible: true,
            },
          }),
          offers: {
            "@type": "Offer",
            price: lodge.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            priceValidUntil: "2026-12-31",
          },
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaetravel.com/safari-lodges/#destinations",
      name: "Safari Lodge Destinations in Kenya",
      description: "Luxury safari lodges by destination",
      numberOfItems: Object.keys(lodgesByLocation).length,
      itemListElement: Object.entries(lodgesByLocation).map(([location, locationLodges], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${location} Safari Lodges`,
        description: `Find the best ${location} safari lodges with ${locationLodges.length} luxury properties`,
        url: `https://www.jaetravel.com/destinations/${location.toLowerCase().replace(/\s+/g, '-')}`,
        numberOfItems: locationLodges.length,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.jaetravel.com/safari-lodges/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between a safari lodge and a safari camp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safari lodges are permanent structures built with stone, wood, or concrete, offering more traditional hotel-like amenities. They typically have multiple buildings, swimming pools, restaurants, and are designed for year-round operation with permanent fixtures. Safari camps use canvas tents and are designed for a more authentic wilderness experience.",
          },
        },
        {
          "@type": "Question",
          name: "Which are the best luxury safari lodges in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Top-rated luxury safari lodges include Angama Mara in Maasai Mara, Ol Tukai Lodge in Amboseli with Kilimanjaro views, Finch Hattons in Tsavo West, and Fairmont Mount Kenya Safari Club. All offer exceptional service, gourmet dining, and prime wildlife viewing locations.",
          },
        },
        {
          "@type": "Question",
          name: "Do safari lodges in Kenya have swimming pools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, most luxury safari lodges feature swimming pools, often with stunning views overlooking waterholes or the savannah. Popular lodges with pools include Angama Mara, Ol Tukai Lodge, and Sarova Lion Hill Game Lodge.",
          },
        },
        {
          "@type": "Question",
          name: "Which safari lodges in Kenya are wheelchair accessible?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${accessibleLodges}+ safari lodges offer wheelchair accessible rooms including Sarova Lion Hill Game Lodge (Nakuru), Sarova Woodlands Hotel (Nakuru), Ol Tukai Lodge (Amboseli), and Sarova Panafric Hotel (Nairobi). All feature roll-in showers, grab bars, and wide doorways.`,
          },
        },
        {
          "@type": "Question",
          name: "What amenities do luxury safari lodges offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Luxury safari lodges typically offer private game drives, swimming pools, fine dining restaurants, full-service spas, fitness centers, gift shops, guided nature walks, and often include all meals and game drives in the rate. Many also offer private plunge pools, butler service, and photography studios.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average cost of a safari lodge in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Safari lodge prices in Kenya range from $180 to $1,250+ per night. The average nightly rate is $${avgPrice}. Luxury lodges typically include full board (breakfast, lunch, dinner) and game drives. Rates vary by season, with peak migration season (July-October) commanding premium prices.`,
          },
        },
        {
          "@type": "Question",
          name: "What is the best time to book a safari lodge in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best time to book is 6-12 months in advance for peak season (July-October for Great Migration, December-January for holidays). Shoulder seasons (June, November) offer better rates and availability. Contact us for last-minute availability and special offers.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.jaetravel.com/safari-lodges/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravel.com/" },
        { "@type": "ListItem", position: 2, name: "Safari Lodges", item: "https://www.jaetravel.com/safari-lodges" },
      ],
    },
  ],
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function SafariLodgesPage() {
  return (
    <>
      <Script id="lodges-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgesSchema) }} />
      <Header />

      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-linear-to-br from-emerald-800 via-emerald-700 to-emerald-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/safari-lodges-hero.jpg"
            alt="Luxury safari lodge in Kenya with infinity pool overlooking Maasai Mara plains, elephants and acacia trees at golden hour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
            title="Best Safari Lodges in Kenya - Luxury Accommodation with Pool"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-emerald-400/30">
              <Building className="text-emerald-300" size={20} />
              <span className="text-emerald-200 font-medium">50+ Permanent Luxury Safari Accommodations</span>
            </div>
            {/* H1 - Primary Keyword */}
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              Safari Lodges in Kenya
            </h1>
            {/* H2 - Secondary Keyword */}
            <h2 className="text-xl md:text-2xl text-emerald-100 mb-8 drop-shadow max-w-3xl mx-auto">
              Permanent luxury accommodations • Swimming pools • Fine dining • Spa facilities • 24/7 power
            </h2>
            {/* Shopping Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Tag className="w-3 h-3" /> Best Rate Guarantee
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Gift className="w-3 h-3" /> Free Room Upgrade
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Truck className="w-3 h-3" /> Free Airport Transfer
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Percent className="w-3 h-3" /> Early Bird -15%
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#lodges-grid" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl flex items-center gap-2">
                Browse Safari Lodges
                <ChevronRight size={20} />
              </Link>
              <Link href="/safari-camps" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2">
                View Safari Camps
                <ChevronRight size={20} />
              </Link>
            </div>
            {/* Trust Signals */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-emerald-200">
              <span className="flex items-center gap-2"><Shield size={16} /> Price Match</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 24/7 Concierge</span>
              <span className="flex items-center gap-2"><CreditCard size={16} /> Secure Booking</span>
              <span className="flex items-center gap-2"><Headphones size={16} /> Local Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SPECIAL OFFER BANNER ========== */}
      <section className="py-4 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Gift className="text-white" size={20} />
            <p className="text-white font-medium">Special Lodge Offer: Book 7+ nights and receive complimentary spa treatment + private game drive!</p>
            <Link href="/contact" className="bg-white text-emerald-600 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 transition">
              Claim Offer →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-12 bg-emerald-50 border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-emerald-700 mb-1">{totalLodges}+</div>
              <div className="text-gray-600 text-sm">Luxury Safari Lodges</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-emerald-700 mb-1">{Object.keys(lodgesByLocation).length}</div>
              <div className="text-gray-600 text-sm">Destinations</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-emerald-700 mb-1">{avgRating}★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-emerald-700 mb-1">${avgPrice}</div>
              <div className="text-gray-600 text-sm">Avg Nightly Rate</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-emerald-700 mb-1">{accessibleLodges}</div>
              <div className="text-gray-600 text-sm">Accessible Lodges</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT IS A SAFARI LODGE ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">What Makes a Safari Lodge?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Permanent structures offering hotel-like amenities with authentic safari experiences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, title: "Permanent Structure", desc: "Built with stone, wood, or concrete for year-round operation" },
              { icon: Coffee, title: "Full-Service Restaurant", desc: "Multiple dining venues with gourmet cuisine" },
              { icon: WavesIcon, title: "Swimming Pool", desc: "Infinity pools overlooking wildlife" },
              { icon: Sparkles, title: "Spa & Wellness", desc: "Full-service spas with treatments" },
              { icon: Wifi, title: "24/7 Power & WiFi", desc: "Reliable electricity and internet connectivity" },
              { icon: Car, title: "Private Game Drives", desc: "Dedicated vehicles with expert guides" },
              { icon: Utensils, title: "Gourmet Dining", desc: "Award-winning chefs and wine cellars" },
              { icon: Dumbbell, title: "Fitness Center", desc: "Modern gym equipment and wellness programs" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition">
                <div className="inline-flex p-3 bg-emerald-100 rounded-full mb-4">
                  <item.icon className="text-emerald-600" size={28} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TOP RATED LODGES ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Top Rated Safari Lodges</h3>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Our guests' favorite luxury lodge accommodations</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedLodges.map((lodge) => (
              <Link key={lodge.id} href={`/hotels/${lodge.id}`} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image src={lodge.image} alt={`${lodge.name} - luxury safari lodge in ${lodge.location}, Kenya with ${lodge.rating} star rating`} fill className="object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">${lodge.price}<span className="text-xs">/night</span></div>
                  {lodge.accessible && <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">♿ Accessible</div>}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{lodge.name}</h4>
                    <div className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded">
                      <Star className="text-emerald-400 fill-current" size={14} />
                      <span className="text-sm font-bold">{lodge.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin size={14} className="text-gray-400" />
                    {lodge.location}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-2">{lodge.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {lodge.amenities?.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{amenity}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/hotels?type=lodge" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">
              View All {totalLodges} Safari Lodges
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== LODGES BY DESTINATION ========== */}
      <section id="lodges-grid" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Safari Lodges by Destination</h3>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Find the perfect safari lodge in Kenya's most iconic wildlife destinations</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(lodgesByLocation).map(([location, locationLodges]) => (
              <div key={location} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition">
                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="text-emerald-600" size={24} />
                  {location}
                  <span className="text-sm font-normal text-gray-500 ml-2">({locationLodges.length} lodges)</span>
                </h4>
                <div className="space-y-3 mb-4">
                  {locationLodges.slice(0, 4).map(lodge => (
                    <Link key={lodge.id} href={`/hotels/${lodge.id}`} className="block p-3 bg-white rounded-lg hover:shadow-md transition border border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{lodge.name}</span>
                        <span className="text-emerald-600 font-bold">${lodge.price}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="text-emerald-400 fill-current" size={12} />
                        <span className="text-sm text-gray-600">{lodge.rating} ★</span>
                        {lodge.accessible && <span className="text-xs text-blue-600 ml-2">♿ Accessible</span>}
                      </div>
                    </Link>
                  ))}
                </div>
                {locationLodges.length > 4 && (
                  <Link href={`/destinations/${location.toLowerCase().replace(/\s+/g, '-')}`} className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
                    View all {locationLodges.length} lodges in {location}
                    <ChevronRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICE COMPARISON TABLE ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Safari Lodge Price Guide 2025</h3>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Compare rates across destinations to find the best value for your budget</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Destination</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Budget ($150-250)</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Mid-Range ($250-450)</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Luxury ($450+)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dest: "Maasai Mara", budget: "Keekorok Lodge", mid: "Mara Serena Lodge", luxury: "Angama Mara" },
                  { dest: "Amboseli", budget: "Kibo Safari Camp", mid: "Sentrim Amboseli", luxury: "Ol Tukai Lodge" },
                  { dest: "Tsavo", budget: "Voi Safari Lodge", mid: "Voi Wildlife Lodge", luxury: "Finch Hattons" },
                  { dest: "Nakuru", budget: "Lake Nakuru Lodge", mid: "Sarova Lion Hill", luxury: "Lake Nakuru Sopa" },
                  { dest: "Naivasha", budget: "Lake Naivasha Simba", mid: "Lake Naivasha Resort", luxury: "Enashipai Resort" },
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

      {/* ========== FAQ SECTION ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">Frequently Asked Questions About Safari Lodges</h3>
          <div className="space-y-4">
            {[
              { q: "What is the difference between a safari lodge and a safari camp?", a: "Safari lodges are permanent structures built with stone, wood, or concrete, offering more traditional hotel-like amenities. They typically have multiple buildings, swimming pools, restaurants, and are designed for year-round operation with permanent fixtures. Safari camps use canvas tents and are designed for a more authentic wilderness experience." },
              { q: "Which are the best luxury safari lodges in Kenya?", a: "Top-rated luxury safari lodges include Angama Mara in Maasai Mara, Ol Tukai Lodge in Amboseli with Kilimanjaro views, Finch Hattons in Tsavo West, and Fairmont Mount Kenya Safari Club. All offer exceptional service, gourmet dining, and prime wildlife viewing locations." },
              { q: "Do safari lodges in Kenya have swimming pools?", a: "Yes, most luxury safari lodges feature swimming pools, often with stunning views overlooking waterholes or the savannah. Popular lodges with pools include Angama Mara, Ol Tukai Lodge, and Sarova Lion Hill Game Lodge." },
              { q: `Which safari lodges in Kenya are wheelchair accessible?`, a: `${accessibleLodges}+ safari lodges offer wheelchair accessible rooms including Sarova Lion Hill Game Lodge (Nakuru), Sarova Woodlands Hotel (Nakuru), Ol Tukai Lodge (Amboseli), and Sarova Panafric Hotel (Nairobi). All feature roll-in showers, grab bars, and wide doorways.` },
              { q: "What amenities do luxury safari lodges offer?", a: "Luxury safari lodges typically offer private game drives, swimming pools, fine dining restaurants, full-service spas, fitness centers, gift shops, guided nature walks, and often include all meals and game drives in the rate. Many also offer private plunge pools, butler service, and photography studios." },
              { q: `What is the average cost of a safari lodge in Kenya?`, a: `Safari lodge prices in Kenya range from $180 to $1,250+ per night. The average nightly rate is $${avgPrice}. Luxury lodges typically include full board (breakfast, lunch, dinner) and game drives. Rates vary by season, with peak migration season (July-October) commanding premium prices.` },
            ].map((faq, i) => (
              <details key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200" open={i === 0}>
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-emerald-600 transition">{faq.q}</summary>
                <p className="mt-3 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-20 bg-linear-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Book Your Safari Lodge?</h3>
          <p className="text-xl mb-8 text-emerald-100">Best rate guaranteed • 24/7 support • Expert advice • Free cancellation</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl flex items-center gap-2">
              <Phone size={20} /> Contact Lodge Experts
            </Link>
            <Link href="/hotels" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-lg transition">View All Hotels</Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2"><CreditCard size={14} /> Visa • Mastercard • Amex</span>
            <span className="flex items-center gap-2"><Zap size={14} /> M-Pesa Accepted</span>
            <span className="flex items-center gap-2"><Mail size={14} /> info@jaetravel.co.ke</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +254 726 485 228</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}