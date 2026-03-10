// app/luxury-safaris/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  Star, 
  MapPin, 
  Users, 
  ChevronRight,
  Sparkles,
  Wine,
  Camera,
  Plane,
  Car,
  BadgeCheck,
  ExternalLink,
  Award,
  Mountain,
  TreePine,
  Waves
} from "lucide-react";
import { hotels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Luxury Kenya Safari Tours 2025 | 5-Star Lodges & Private Game Drives | Jaetravel.com",
  description: "Experience the ultimate luxury Kenya safari. Private game drives, 5-star lodges in Maasai Mara, Amboseli & beyond. Champagne sunsets, hot air balloons, expert guides. Book your dream safari.",
  keywords: "luxury kenya safari, 5 star safari tours, maasai mara luxury lodges, private safari kenya, exclusive safari packages, luxury tented camps, premium safari experiences",
  openGraph: {
    title: "Luxury Kenya Safari Tours | 5-Star Lodges & Private Experiences",
    description: "Experience the ultimate luxury safari in Kenya. Private vehicles, award-winning lodges, expert guides. Maasai Mara, Amboseli, Samburu.",
    url: "https://www.jaetravel.com/luxury-safaris",
    siteName: "Jaetravel Expeditions",
    images: [{
      url: "https://www.jaetravel.com/images/luxury-safari-hero.jpg",
      width: 1200,
      height: 630,
      alt: "Luxury safari in Kenya - Private game drive with elephants"
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jaetravel.com/luxury-safaris",
  },
};

// Schema for luxury tours
const luxurySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Luxury Kenya Safari Tours",
      description: "Premium safari experiences with 5-star lodges, private guides, and exclusive access",
      brand: {
        "@type": "Brand",
        name: "Jaetravel Expeditions"
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "2500",
        highPrice: "8500",
        offerCount: "12"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "342"
      }
    },
    {
      "@type": "TouristTrip",
      name: "Ultimate Kenya Luxury Safari",
      description: "Maasai Mara, Amboseli & private conservancies",
      touristType: "Luxury travelers, honeymooners, photographers"
    }
  ]
};

// Filter luxury hotels (price > $350/night)
const luxuryHotels = hotels.filter(hotel => hotel.price > 350);

// Group by location
const hotelsByLocation = luxuryHotels.reduce((acc, hotel) => {
  if (!acc[hotel.location]) {
    acc[hotel.location] = [];
  }
  acc[hotel.location].push(hotel);
  return acc;
}, {} as Record<string, typeof luxuryHotels>);

// Luxury tour packages with direct links to jaetravel.co.ke
const luxuryPackages = [
  {
    id: "mara-luxury",
    name: "Maasai Mara Great Migration",
    duration: "5 days / 4 nights",
    price: 4200,
    highlights: ["Witness the Great Migration", "Private 4x4 vehicle", "Hot air balloon safari", "Champagne bush dinner", "Big Five game drives"],
    lodge: "Angama Mara or equivalent",
    image: "/packages/mara-luxury.jpg",
    co2keLink: "https://www.jaetravel.co.ke/maasai-mara-great-migration",
    icon: <TreePine className="w-5 h-5" />
  },
  {
    id: "amboseli-kilimanjaro",
    name: "Kilimanjaro Climbing Expedition",
    duration: "6 days / 5 nights",
    price: 3800,
    highlights: ["Mount Kilimanjaro trek", "Professional guides", "Camping equipment", "Park fees included", "Summit certificate"],
    lodge: "Mountain huts & camps",
    image: "/packages/kilimanjaro.jpg",
    co2keLink: "https://www.jaetravel.co.ke/tours/kilimanjaro-climbing-expedition",
    icon: <Mountain className="w-5 h-5" />
  },
  {
    id: "samburu-exclusive",
    name: "Samburu Game Reserve Safari",
    duration: "4 days / 3 nights",
    price: 4100,
    highlights: ["Samburu Special Five", "Riverfront luxury suite", "Cultural visits", "Night game drives", "Bird watching"],
    lodge: "Saruni Samburu or equivalent",
    image: "/packages/samburu-luxury.jpg",
    co2keLink: "https://www.jaetravel.co.ke/tours/samburu-game-reserve",
    icon: <Camera className="w-5 h-5" />
  },
  {
    id: "tsavo-luxury",
    name: "Tsavo East & West Adventure",
    duration: "5 days / 4 nights",
    price: 3950,
    highlights: ["Red elephants of Tsavo", "Mzima Springs", "Private spring-fed pool", "Night drives", "Walking safaris"],
    lodge: "Finch Hattons or equivalent",
    image: "/packages/tsavo-luxury.jpg",
    co2keLink: "https://www.jaetravel.co.ke/tours/tsavo-east-west-adventure",
    icon: <Waves className="w-5 h-5" />
  }
];

export default function LuxurySafarisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luxurySchema) }}
      />

      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5Z' fill='white' fill-opacity='0.1' stroke='white' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-amber-400/30">
              <Award className="text-amber-300" size={20} />
              <span className="text-amber-200 font-medium">Award-Winning Luxury Safari Experiences</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Luxury Kenya Safari Tours
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 drop-shadow max-w-3xl mx-auto">
              Private game drives • 5-star lodges • Champagne sunsets • Your personal guide
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#packages"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                View Luxury Packages
                <ChevronRight size={20} />
              </Link>
              <Link
                href="https://www.jaetravel.co.ke/budget-tours"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2"
              >
                Explore Budget Options
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK TOUR LINKS */}
      <section className="bg-amber-50 border-y border-amber-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="font-medium text-amber-800">Featured Tours:</span>
            {luxuryPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={pkg.co2keLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-full border border-amber-200 hover:bg-amber-100 transition text-amber-700"
              >
                {pkg.icon}
                <span>{pkg.name}</span>
                <ExternalLink size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BACKLINK NOTICE - KE to COM */}
      <section className="bg-amber-50 border-y border-amber-200 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-800 text-sm">
            Looking for more affordable options? Visit our sister site{' '}
            <Link 
              href="https://www.jaetravel.co.ke/budget-tours" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-amber-600 transition"
            >
              Jaetravel.co.ke/budget-tours
            </Link>{' '}
            for budget-friendly safari packages.
          </p>
        </div>
      </section>

      {/* LUXURY PACKAGES SECTION */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Curated Luxury Safari Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each journey is crafted for discerning travelers who expect the exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {luxuryPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${pkg.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    {pkg.icon}
                    <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  </div>
                  <p className="text-sm text-amber-600 mb-3">{pkg.duration}</p>
                  <p className="text-sm text-gray-600 mb-3 italic">{pkg.lodge}</p>
                  <ul className="space-y-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <li className="text-xs text-gray-500">+{pkg.highlights.length - 3} more highlights</li>
                    )}
                  </ul>
                  <Link
                    href={pkg.co2keLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
                  >
                    View on Jaetravel.co.ke
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* TOUR CATEGORY GRID */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {luxuryPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={pkg.co2keLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200 hover:shadow-md transition flex items-center gap-3"
              >
                <div className="p-2 bg-amber-600 rounded-lg text-white">
                  {pkg.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{pkg.name}</h4>
                  <p className="text-xs text-gray-600">{pkg.duration} • ${pkg.price}</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-amber-600" />
              </Link>
            ))}
          </div>

          {/* CROSS-SELL TO VEHICLE HIRE */}
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-amber-600 rounded-full">
                  <Car className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Enhance Your Luxury Safari</h3>
                  <p className="text-gray-700">Add a private safari vehicle for exclusive game drives</p>
                </div>
              </div>
              <Link
                href="https://www.jaetravel.co.ke/vehicle-hire"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2 shadow-lg whitespace-nowrap"
              >
                Hire Safari Vehicles
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY HOTELS GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Kenya&apos;s Finest Luxury Lodges</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hand-selected properties that redefine safari luxury
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryHotels.slice(0, 6).map((hotel) => (
              <Link
                key={hotel.id}
                href={`/hotels/${hotel.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${hotel.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded">
                      <Star className="text-amber-400 fill-current" size={14} />
                      <span className="text-sm font-bold">{hotel.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
                    <MapPin size={14} className="text-gray-400" />
                    {hotel.location}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-2">{hotel.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hotels?price=350-2000"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
            >
              View All Luxury Lodges
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* LUXURY BY DESTINATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-4">Luxury Safaris by Destination</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our premium offerings in Kenya&apos;s most iconic wildlife destinations
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(hotelsByLocation).map(([location, locationHotels]) => (
              <div key={location} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="text-amber-600" size={24} />
                  {location}
                </h3>
                <div className="space-y-3 mb-4">
                  {locationHotels.slice(0, 3).map(hotel => (
                    <Link
                      key={hotel.id}
                      href={`/hotels/${hotel.id}`}
                      className="block p-3 bg-white rounded-lg hover:shadow-md transition border border-gray-100"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{hotel.name}</span>
                        <span className="text-amber-600 font-bold">${hotel.price}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="text-amber-400 fill-current" size={12} />
                          <span className="text-sm text-gray-600">{hotel.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">{hotel.rooms.length} rooms</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href={`/destinations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
                >
                  Explore {location} luxury lodges
                  <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE LUXURY */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">The Luxury Difference</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              What sets our premium safaris apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Car className="text-amber-600" size={32} />,
                title: "Private Vehicles",
                description: "No sharing - your own 4x4 with pop-up roof for unobstructed views"
              },
              {
                icon: <Users className="text-amber-600" size={32} />,
                title: "Personal Guide",
                description: "Expert naturalist dedicated to your group, trained in photography"
              },
              {
                icon: <Wine className="text-amber-600" size={32} />,
                title: "Gourmet Dining",
                description: "Champagne bush breakfasts, candlelit dinners under the stars"
              },
              {
                icon: <Plane className="text-amber-600" size={32} />,
                title: "Private Conservancies",
                description: "Exclusive access with night drives and walking safaris"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex p-4 bg-amber-100 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCESSIBLE LUXURY CROSS-SELL */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Accessible Luxury Safaris</h3>
                <p className="text-blue-100">Luxury experiences designed for travelers with disabilities</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://www.jaetravel.co.ke/disability-tours"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold transition flex items-center gap-2"
              >
                Disability Tours
                <ExternalLink size={18} />
              </Link>
              <Link
                href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition flex items-center gap-2 border border-white/30"
              >
                Accessible Vehicles
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">Luxury Safari FAQs</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "What makes a safari 'luxury'?",
                a: "Private vehicles (never shared), premium lodge suites with plunge pools, gourmet dining with wine pairings, expert guides with photography training, and access to private conservancies with exclusive wildlife experiences."
              },
              {
                q: "Which luxury tour is best for the Great Migration?",
                a: "Our Maasai Mara Great Migration package offers the best views of the river crossings. Book it "
              },
              {
                q: "Can I combine a luxury safari with Kilimanjaro?",
                a: "Absolutely! Our Kilimanjaro Climbing Expedition can be combined with a luxury safari in Amboseli for the complete experience. Check details "
              },
              {
                q: "What about luxury vehicle options?",
                a: "For the ultimate experience, consider hiring a private safari vehicle from our partner site. Visit "
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">
                  {faq.q.includes("Great Migration") ? (
                    <>
                      Our{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/maasai-mara-great-migration"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 font-medium underline"
                      >
                        Maasai Mara Great Migration package
                      </Link>
                      {' '}offers the best views of the river crossings, with private vehicles and expert guides.
                    </>
                  ) : faq.q.includes("Kilimanjaro") ? (
                    <>
                      Absolutely! Our{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/tours/kilimanjaro-climbing-expedition"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 font-medium underline"
                      >
                        Kilimanjaro Climbing Expedition
                      </Link>
                      {' '}can be combined with a luxury safari in Amboseli for the complete experience.
                    </>
                  ) : faq.q.includes("vehicle") ? (
                    <>
                      For the ultimate experience, consider hiring a private safari vehicle from our partner site.{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicle-hire"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-700 font-medium underline"
                      >
                        Jaetravel.co.ke/vehicle-hire
                      </Link>{' '}
                      offers premium 4x4 vehicles with pop-up roofs, professional drivers, and flexible rental options.
                    </>
                  ) : (
                    faq.a
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA WITH TOUR LINKS */}
      <section className="relative py-24 bg-gradient-to-br from-amber-900 to-amber-800">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Image
            src="/cta-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 drop-shadow-lg">
            Begin Your Luxury Safari Journey
          </h2>
          <p className="text-xl mb-10 text-amber-100 drop-shadow max-w-2xl mx-auto">
            Speak directly with our luxury travel specialists. Same-day response, personalized service.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {luxuryPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={pkg.co2keLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 px-4 py-3 rounded-xl font-medium transition flex items-center justify-center gap-2 text-sm"
              >
                {pkg.icon}
                <span className="truncate">{pkg.name}</span>
                <ExternalLink size={14} />
              </Link>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/contact"
              className="bg-white text-amber-800 hover:bg-amber-50 px-6 py-4 rounded-xl font-bold transition shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="https://www.jaetravel.co.ke/budget-tours"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-xl font-bold transition border border-white/30 flex items-center justify-center gap-2"
            >
              Budget Tours
              <ExternalLink size={18} />
            </Link>
            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-xl font-bold transition border border-white/30 flex items-center justify-center gap-2"
            >
              Vehicle Hire
              <ExternalLink size={18} />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-amber-200">
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} />
              Best Price Guarantee
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} />
              Private Safaris
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck size={16} />
              24/7 Concierge
            </span>
          </div>

          {/* Backlink Footer */}
          <div className="mt-12 pt-8 border-t border-amber-700/30 text-sm text-amber-300">
            <p>
              Also visit:{' '}
              <Link href="https://www.jaetravel.co.ke" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Jaetravel.co.ke</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/maasai-mara-great-migration" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Maasai Mara</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/tours/kilimanjaro-climbing-expedition" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Kilimanjaro</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/tours/samburu-game-reserve" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Samburu</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/tours/tsavo-east-west-adventure" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Tsavo</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/budget-tours" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Budget Tours</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/vehicle-hire" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Vehicle Hire</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/disability-tours" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Disability Tours</Link>
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