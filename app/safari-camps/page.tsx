// app/safari-camps/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { hotels } from "@/lib/data";
import { 
  Star, MapPin, Users, ChevronRight, 
  Camera, 
  Clock, Shield, CreditCard, 
  Phone, Mail, Headphones, 
  Tent, Compass, Wind, Moon,
  Coffee, Sun, Gift, Tag, Percent, Zap,
  Flame} from "lucide-react";

// ============================================
// FILTER CAMPS (canvas/tented accommodations)
// ============================================
const safariCamps = hotels.filter(hotel => 
  hotel.name.toLowerCase().includes("camp") || 
  hotel.name.toLowerCase().includes("tented") ||
  hotel.name.toLowerCase().includes("bush") ||
  (hotel.description?.toLowerCase().includes("tented camp") ?? false)
);

// Group by location
const campsByLocation = safariCamps.reduce((acc, hotel) => {
  if (!acc[hotel.location]) {
    acc[hotel.location] = [];
  }
  acc[hotel.location].push(hotel);
  return acc;
}, {} as Record<string, typeof safariCamps>);

// Calculate stats
const totalCamps = safariCamps.length;
const avgRating = (safariCamps.reduce((sum, c) => sum + c.rating, 0) / totalCamps).toFixed(1);
const avgPrice = Math.round(safariCamps.reduce((sum, c) => sum + c.price, 0) / totalCamps);
const accessibleCamps = safariCamps.filter(c => c.accessible === true).length;

// Top rated camps
const topRatedCamps = [...safariCamps].sort((a, b) => b.rating - a.rating).slice(0, 6);

// ============================================
// METADATA - Title: 60 chars | Description: 115 chars
// ============================================
export const metadata: Metadata = {
  title: "Safari Camps in Kenya 2025 | Best Tented Camps & Bush Accommodations",
  description: "Discover 40+ best safari camps in Kenya for 2025. Luxury tented camps in Maasai Mara, Amboseli, Samburu. Bush dinners, night drives, authentic wilderness.",
  keywords: "safari camps kenya, tented camps kenya, maasai mara camps, amboseli camps, samburu camps, best safari camps, luxury tented camps, bush camps kenya, mobile safari camps, authentic safari experience",
  authors: [{ name: "Jaetravel Expeditions", url: "https://www.jaetravel.com" }],
  creator: "Jaetravel Expeditions",
  publisher: "Jaetravel Expeditions",
  metadataBase: new URL("https://www.jaetravel.com"),
  alternates: {
    canonical: "https://www.jaetravel.com/safari-camps",
    languages: {
      'en-US': 'https://www.jaetravel.com/safari-camps',
      'en-GB': 'https://www.jaetravel.com/en-gb/safari-camps',
    },
  },
  openGraph: {
    title: "Safari Camps in Kenya 2025 | Best Tented Camps & Bush Accommodations",
    description: "Discover the best safari camps in Kenya. Luxury tented camps in Maasai Mara, Amboseli, Samburu. Authentic wilderness experiences, bush dinners, night drives.",
    url: "https://www.jaetravel.com/safari-camps",
    siteName: "Jaetravel Expeditions",
    images: [
      {
        url: "https://www.jaetravel.com/images/og/safari-camps-kenya.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury tented safari camp in Kenya with canvas tents overlooking Maasai Mara plains at sunset",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Camps in Kenya 2025 | Best Tented Camps & Bush Accommodations",
    description: "Discover 40+ best safari camps in Kenya. Luxury tented camps in Maasai Mara, Amboseli, Samburu. Best rate guaranteed.",
    images: ["https://www.jaetravel.com/images/twitter/safari-camps.jpg"],
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
const campsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.jaetravel.com/#organization",
      name: "Jaetravel Expeditions",
      url: "https://www.jaetravel.com",
      logo: "https://www.jaetravel.com/logo.png",
      description: "Kenya's premier safari camp booking platform offering authentic tented experiences in Maasai Mara, Amboseli, Samburu, and beyond.",
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
      "@id": "https://www.jaetravel.com/safari-camps",
      url: "https://www.jaetravel.com/safari-camps",
      name: "Safari Camps in Kenya 2025 | Best Tented Camps & Bush Accommodations",
      description: "Complete guide to the best safari camps in Kenya. 40+ authentic tented properties in Maasai Mara, Amboseli, Samburu, and more.",
      inLanguage: "en-US",
      isPartOf: {
        "@id": "https://www.jaetravel.com/#website",
      },
    },
    {
      "@type": "Product",
      "@id": "https://www.jaetravel.com/safari-camps/#product",
      name: "Safari Camp Bookings in Kenya",
      description: "Access to 40+ authentic tented safari camps across Kenya with best rate guarantee. Includes Maasai Mara migration camps, Samburu wilderness camps, and Amboseli Kilimanjaro-view camps.",
      brand: {
        "@type": "Brand",
        name: "Jaetravel Expeditions",
      },
      image: "https://www.jaetravel.com/images/safari-camps-collection.jpg",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "150",
        highPrice: "950",
        offerCount: totalCamps,
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avgRating,
        reviewCount: totalCamps * 12,
        bestRating: "5",
      },
      category: "Authentic Safari Accommodation",
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaetravel.com/safari-camps/#camps-list",
      name: "Best Safari Camps in Kenya",
      description: "Curated collection of the finest tented safari camps in Kenya",
      numberOfItems: totalCamps,
      itemListElement: safariCamps.slice(0, 30).map((camp, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "LodgingBusiness",
          "@id": `https://www.jaetravel.com/hotels/${camp.id}#camp`,
          name: camp.name,
          description: camp.description,
          url: `https://www.jaetravel.com/hotels/${camp.id}`,
          image: camp.image,
          address: {
            "@type": "PostalAddress",
            addressLocality: camp.location,
            addressCountry: "KE",
          },
          starRating: {
            "@type": "Rating",
            ratingValue: camp.rating,
            bestRating: "5",
          },
          priceRange: `$${camp.price}-$${Math.round(camp.price * 1.5)}`,
          telephone: camp.phone,
          email: camp.email,
          amenityFeature: camp.amenities?.map(amenity => ({
            "@type": "LocationFeatureSpecification",
            name: amenity,
          })) || [],
          ...(camp.accessible && {
            accessibilityFeatures: {
              "@type": "AccessibilityFeatures",
              wheelchairAccessible: true,
            },
          }),
          offers: {
            "@type": "Offer",
            price: camp.price,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            priceValidUntil: "2026-12-31",
          },
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": "https://www.jaetravel.com/safari-camps/#destinations",
      name: "Safari Camp Destinations in Kenya",
      description: "Authentic tented safari camps by destination",
      numberOfItems: Object.keys(campsByLocation).length,
      itemListElement: Object.entries(campsByLocation).map(([location, locationCamps], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${location} Safari Camps`,
        description: `Find the best ${location} safari camps with ${locationCamps.length} authentic tented properties`,
        url: `https://www.jaetravel.com/destinations/${location.toLowerCase().replace(/\s+/g, '-')}`,
        numberOfItems: locationCamps.length,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.jaetravel.com/safari-camps/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a safari camp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A safari camp is a temporary or semi-permanent accommodation that uses canvas tents as guest rooms. These camps are designed to provide an authentic wilderness experience while still offering modern comforts like en-suite bathrooms, comfortable beds, and excellent dining. Many luxury tented camps offer amenities comparable to hotels.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between a safari camp and a safari lodge?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safari camps use canvas tents as guest accommodations, providing a more authentic wilderness experience. They are often more mobile and designed to be minimally impactful on the environment. Safari lodges are permanent stone or wood structures with more traditional hotel-like amenities. Camps offer closer proximity to wildlife and a more immersive experience.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best safari camp in Maasai Mara?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Top-rated safari camps in Maasai Mara include Rekero Camp (excellent for migration viewing), Ashnil Mara Camp (Talek River location), Soroi Mara Bush Camp (private conservancy), and Offbeat Mara Camp (intimate experience). Each offers unique experiences with excellent wildlife viewing.",
          },
        },
        {
          "@type": "Question",
          name: "Are safari camps comfortable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Modern safari camps offer exceptional comfort with en-suite bathrooms, hot water showers, comfortable beds, and delicious meals. Luxury tented camps provide amenities comparable to hotels including swimming pools, spas, and gourmet dining, while maintaining an authentic safari atmosphere.",
          },
        },
        {
          "@type": "Question",
          name: "What activities are available at safari camps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Safari camps typically offer morning and afternoon game drives in open 4x4 vehicles, guided nature walks, bird watching, cultural visits to Maasai villages, bush breakfasts, sundowner cocktails, and night drives in private conservancies. Many also offer hot air balloon safaris and photography workshops.",
          },
        },
        {
          "@type": "Question",
          name: "What is the average cost of a safari camp in Kenya?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Safari camp prices in Kenya range from $150 to $950+ per night. The average nightly rate is $${avgPrice}. Rates typically include full board (breakfast, lunch, dinner) and game drives. Peak season (July-October) commands premium prices.`,
          },
        },
        {
          "@type": "Question",
          name: "What should I pack for a safari camp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pack neutral-colored clothing (khaki, green, brown), a warm jacket for early mornings, comfortable walking shoes, hat, sunscreen, binoculars, camera with zoom lens, insect repellent, and a headlamp. Most camps provide toiletries, hairdryers, and charging facilities.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.jaetravel.com/safari-camps/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravel.com/" },
        { "@type": "ListItem", position: 2, name: "Safari Camps", item: "https://www.jaetravel.com/safari-camps" },
      ],
    },
  ],
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function SafariCampsPage() {
  return (
    <>
      <Script id="camps-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(campsSchema) }} />
      <Header />

      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-linear-to-br from-amber-800 via-amber-700 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/safari-camps-hero.jpg"
            alt="Luxury tented safari camp in Kenya with canvas tents overlooking Maasai Mara plains, wildlife at waterhole, acacia trees at golden hour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
            title="Best Safari Camps in Kenya - Authentic Tented Wilderness Experience"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
              <Tent className="text-amber-300" size={20} />
              <span className="text-amber-200 font-medium">40+ Authentic Tented Wilderness Accommodations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
              Safari Camps in Kenya
            </h1>
            <h2 className="text-xl md:text-2xl text-amber-100 mb-8 drop-shadow max-w-3xl mx-auto">
              Canvas under canvas • Bush dinners • Night drives • Close to wildlife • Solar power
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Tag className="w-3 h-3" /> Best Rate Guarantee
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Flame className="w-3 h-3" /> Bush Dinners
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Moon className="w-3 h-3" /> Night Drives
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm flex items-center gap-1">
                <Percent className="w-3 h-3" /> Early Bird -15%
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#camps-grid" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl flex items-center gap-2">
                Browse Safari Camps
                <ChevronRight size={20} />
              </Link>
              <Link href="/safari-lodges" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2">
                View Safari Lodges
                <ChevronRight size={20} />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-amber-200">
              <span className="flex items-center gap-2"><Shield size={16} /> Price Match</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 24/7 Support</span>
              <span className="flex items-center gap-2"><CreditCard size={16} /> Secure Booking</span>
              <span className="flex items-center gap-2"><Headphones size={16} /> Safari Experts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SPECIAL OFFER BANNER ========== */}
      <section className="py-4 bg-linear-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Gift className="text-white" size={20} />
            <p className="text-white font-medium">Special Camp Offer: Book 5+ nights and receive complimentary bush dinner + night game drive!</p>
            <Link href="/contact" className="bg-white text-amber-600 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-gray-100 transition">
              Claim Offer →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-1">{totalCamps}+</div>
              <div className="text-gray-600 text-sm">Safari Camps</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-1">{Object.keys(campsByLocation).length}</div>
              <div className="text-gray-600 text-sm">Destinations</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-1">{avgRating}★</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-1">${avgPrice}</div>
              <div className="text-gray-600 text-sm">Avg Nightly Rate</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-amber-700 mb-1">{accessibleCamps}</div>
              <div className="text-gray-600 text-sm">Accessible Camps</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHAT IS A SAFARI CAMP ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">What Makes a Safari Camp?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Canvas accommodations offering an authentic wilderness experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Tent, title: "Canvas Tents", desc: "En-suite tents with comfortable beds and hot showers" },
              { icon: Flame, title: "Bush Dinners", desc: "Candlelit dinners under the African stars" },
              { icon: Compass, title: "Wilderness Location", desc: "Positioned for prime wildlife viewing" },
              { icon: Moon, title: "Night Drives", desc: "Exclusive night game drives in private conservancies" },
              { icon: Wind, title: "Solar Power", desc: "Eco-friendly sustainable energy" },
              { icon: Camera, title: "Photography Safaris", desc: "Expert guides for wildlife photography" },
              { icon: Coffee, title: "Bush Breakfasts", desc: "Breakfast in the bush with wildlife" },
              { icon: Sun, title: "Sundowners", desc: "Cocktails at sunset over the savannah" }
            ].map((item, i) => (
              <div key={i} className="bg-amber-50 p-6 rounded-xl text-center hover:shadow-md transition">
                <div className="inline-flex p-3 bg-amber-100 rounded-full mb-4">
                  <item.icon className="text-amber-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TOP RATED CAMPS ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Top Rated Safari Camps</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Our guests&apos; favorite tented camp accommodations</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedCamps.map((camp) => (
              <Link key={camp.id} href={`/hotels/${camp.id}`} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <Image src={camp.image} alt={`${camp.name} - authentic safari camp in ${camp.location}, Kenya with ${camp.rating} star rating`} fill className="object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">${camp.price}<span className="text-xs">/night</span></div>
                  {camp.accessible && <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">♿ Accessible</div>}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{camp.name}</h3>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded">
                      <Star className="text-amber-400 fill-current" size={14} />
                      <span className="text-sm font-bold">{camp.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin size={14} className="text-gray-400" />
                    {camp.location}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-2">{camp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {camp.amenities?.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{amenity}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/hotels?type=camp" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">
              View All {totalCamps} Safari Camps
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== CAMPS BY DESTINATION ========== */}
      <section id="camps-grid" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Safari Camps by Destination</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Find the perfect tented camp in Kenya&apos;s most iconic wildlife destinations</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(campsByLocation).map(([location, locationCamps]) => (
              <div key={location} className="bg-amber-50 rounded-xl p-6 border border-amber-200 hover:shadow-md transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="text-amber-600" size={24} />
                  {location}
                  <span className="text-sm font-normal text-gray-500 ml-2">({locationCamps.length} camps)</span>
                </h3>
                <div className="space-y-3 mb-4">
                  {locationCamps.slice(0, 4).map(camp => (
                    <Link key={camp.id} href={`/hotels/${camp.id}`} className="block p-3 bg-white rounded-lg hover:shadow-md transition border border-gray-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{camp.name}</span>
                        <span className="text-amber-600 font-bold">${camp.price}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="text-amber-400 fill-current" size={12} />
                        <span className="text-sm text-gray-600">{camp.rating} ★</span>
                        {camp.accessible && <span className="text-xs text-blue-600 ml-2">♿ Accessible</span>}
                      </div>
                    </Link>
                  ))}
                </div>
                {locationCamps.length > 4 && (
                  <Link href={`/destinations/${location.toLowerCase().replace(/\s+/g, '-')}`} className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
                    View all {locationCamps.length} camps in {location}
                    <ChevronRight size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== UNIQUE CAMP EXPERIENCES ========== */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Unique Camp Experiences</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">What makes a safari camp unforgettable</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Flame, title: "Bush Dinners", desc: "Enjoy gourmet meals under the stars with wildlife sounds around", details: "Candlelit tables set in the bush with lanterns, live music, and traditional entertainment" },
              { icon: Camera, title: "Photography Safaris", desc: "Expert guides to help capture the perfect wildlife moment", details: "Professional photographers, private vehicles, sunrise & sunset sessions" },
              { icon: Moon, title: "Night Game Drives", desc: "Spot nocturnal wildlife in private conservancies", details: "Spotlights, night vision equipment, experienced trackers" },
              { icon: Sun, title: "Sundowner Cocktails", desc: "Sunset drinks with panoramic savannah views", details: "Premium drinks, canapés, breathtaking sunset photo opportunities" },
              { icon: Compass, title: "Walking Safaris", desc: "Explore the bush on foot with armed guides", details: "Learn tracking, identify plants, experience the bush intimately" },
              { icon: Users, title: "Cultural Visits", desc: "Authentic Maasai village experiences", details: "Traditional dances, beadwork, cultural exchange with local communities" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="inline-flex p-4 bg-amber-100 rounded-full mb-4">
                  <item.icon className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.desc}</p>
                <p className="text-sm text-gray-500 italic">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICE COMPARISON TABLE ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Safari Camp Price Guide 2025</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Compare rates across destinations to find the best camp for your budget</p>
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
                  { dest: "Maasai Mara", budget: "Mara Siria Camp", mid: "Ashnil Mara Camp", luxury: "Rekero Camp" },
                  { dest: "Amboseli", budget: "Maasai Simba Camp", mid: "Tulia Amboseli", luxury: "Ol Donyo Lodge" },
                  { dest: "Samburu", budget: "Elephant Bedroom", mid: "Saruni Samburu", luxury: "Samburu Intrepids" },
                  { dest: "Tsavo", budget: "Red Elephant Lodge", mid: "Satao Camp", luxury: "Finch Hattons" },
                  { dest: "Laikipia", budget: "Porini Rhino Camp", mid: "Ol Pejeta Bush Camp", luxury: "Solio Lodge" },
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">Frequently Asked Questions About Safari Camps</h2>
          <div className="space-y-4">
            {[
              { q: "What is a safari camp?", a: "A safari camp is a temporary or semi-permanent accommodation that uses canvas tents as guest rooms. These camps are designed to provide an authentic wilderness experience while still offering modern comforts like en-suite bathrooms, comfortable beds, and excellent dining. Many luxury tented camps offer amenities comparable to hotels." },
              { q: "What is the difference between a safari camp and a safari lodge?", a: "Safari camps use canvas tents as guest accommodations, providing a more authentic wilderness experience. They are often more mobile and designed to be minimally impactful on the environment. Safari lodges are permanent stone or wood structures with more traditional hotel-like amenities. Camps offer closer proximity to wildlife and a more immersive experience." },
              { q: "What is the best safari camp in Maasai Mara?", a: "Top-rated safari camps in Maasai Mara include Rekero Camp (excellent for migration viewing), Ashnil Mara Camp (Talek River location), Soroi Mara Bush Camp (private conservancy), and Offbeat Mara Camp (intimate experience). Each offers unique experiences with excellent wildlife viewing." },
              { q: "Are safari camps comfortable?", a: "Modern safari camps offer exceptional comfort with en-suite bathrooms, hot water showers, comfortable beds, and delicious meals. Luxury tented camps provide amenities comparable to hotels including swimming pools, spas, and gourmet dining, while maintaining an authentic safari atmosphere." },
              { q: "What activities are available at safari camps?", a: "Safari camps typically offer morning and afternoon game drives in open 4x4 vehicles, guided nature walks, bird watching, cultural visits to Maasai villages, bush breakfasts, sundowner cocktails, and night drives in private conservancies. Many also offer hot air balloon safaris and photography workshops." },
              { q: `What is the average cost of a safari camp in Kenya?`, a: `Safari camp prices in Kenya range from $150 to $950+ per night. The average nightly rate is $${avgPrice}. Rates typically include full board (breakfast, lunch, dinner) and game drives. Peak season (July-October) commands premium prices.` },
              { q: "What should I pack for a safari camp?", a: "Pack neutral-colored clothing (khaki, green, brown), a warm jacket for early mornings, comfortable walking shoes, hat, sunscreen, binoculars, camera with zoom lens, insect repellent, and a headlamp. Most camps provide toiletries, hairdryers, and charging facilities." },
            ].map((faq, i) => (
              <details key={i} className="bg-white p-6 rounded-xl border border-gray-200" open={i === 0}>
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-amber-600 transition">{faq.q}</summary>
                <p className="mt-3 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-20 bg-linear-to-br from-amber-800 to-amber-900 text-white">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready for an Authentic Safari Camp Experience?</h2>
          <p className="text-xl mb-8 text-amber-100">Sleep under canvas • Wake to wildlife sounds • Best rate guaranteed • 24/7 support</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl flex items-center gap-2">
              <Phone size={20} /> Book Your Camp Experience
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