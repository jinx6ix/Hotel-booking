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
  CheckCircle2} from "lucide-react";
import { hotels, locations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Accessible Kenya Safaris 2025 | Wheelchair Friendly Tours & Lodges",
  description: "Specialized accessible safari tours for wheelchair users and travelers with disabilities. Adapted vehicles, accessible lodges, trained guides. Maasai Mara, Amboseli, Tsavo. Free consultation.",
  keywords: "wheelchair accessible kenya safari, disabled safari tours, accessible travel kenya, safari for wheelchair users, accessible lodges maasai mara, adapted safari vehicles, disability travel africa",
  openGraph: {
    title: "Accessible Kenya Safaris | Wheelchair Friendly Wildlife Adventures",
    description: "Kenya safari tours designed for travelers with disabilities. Adapted vehicles, accessible accommodations, trained support staff.",
    url: "https://www.jaetravel.com/accessible-safaris",
    siteName: "Jaetravel Expeditions",
    images: [{
      url: "https://www.jaetravel.com/images/accessible-safari-hero.jpg",
      width: 1200,
      height: 630,
      alt: "Wheelchair accessible safari vehicle with traveler viewing wildlife"
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jaetravel.com/accessible-safaris",
  },
};

// Schema for accessible tourism
const accessibleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Wheelchair Accessible Kenya Safari",
      description: "Fully adapted safari experience with accessible vehicles, lodges, and trained guides",
      brand: {
        "@type": "Brand",
        name: "Jaetravel Expeditions"
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "2800",
        highPrice: "6500",
        offerCount: "8"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "187"
      }
    },
    {
      "@type": "TouristTrip",
      name: "Accessible Maasai Mara Safari",
      description: "Wheelchair-friendly game viewing in Maasai Mara with adapted vehicles and lodges",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock"
      }
    }
  ]
};

// Filter accessible hotels (those with accessible rooms)
const accessibleHotels = hotels.filter(hotel => 
  hotel.rooms.some(room => room.accessible === true)
);

// Accessible destinations
const accessibleDestinations = locations.filter(loc => 
  accessibleHotels.some(h => h.location.toLowerCase().includes(loc.name.toLowerCase()))
);

// Accessibility features
const accessibilityFeatures = [
  "Adapted 4x4 vehicles with hydraulic lifts",
  "Wheelchair accessible rooms with roll-in showers",
  "Trained guides for disability assistance",
  "Step-free pathways in lodges",
  "Visual and hearing aids available",
  "Medication refrigeration",
  "Oxygen concentrators on request",
  "Private transfers with accessible vehicles"
];

export default function AccessibleSafarisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accessibleSchema) }}
      />

      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800 text-white overflow-hidden">
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
              <span className="text-blue-200 font-medium">Specialized Accessible Safari Tours</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Wheelchair Accessible Kenya Safaris
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 drop-shadow max-w-3xl mx-auto">
              Experience the magic of Kenya&apos;s wildlife without barriers. Adapted vehicles, accessible lodges, and trained guides for travelers with disabilities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#accessible-hotels"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                View Accessible Lodges
                <ChevronRight size={20} />
              </Link>
              <Link
                href="https://www.jaetravel.co.ke/disability-tours"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2"
              >
                Disability Tours
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BACKLINK NOTICE */}
      <section className="bg-blue-50 border-y border-blue-200 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-800 text-sm">
            <span className="font-bold">Specialized accessible vehicle booking:</span>{' '}
            Visit{' '}
            <Link 
              href="https://www.jaetravel.co.ke/vehicles/safari-accessible" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline hover:text-blue-600 transition"
            >
              Jaetravel.co.ke/vehicles/safari-accessible
            </Link>{' '}
            for adapted safari vehicles with lifts and ramps.
          </p>
        </div>
      </section>

      {/* ACCESSIBILITY PROMISE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Our Accessibility Promise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={24} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE VEHICLES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Car className="text-blue-600" size={32} />
                <h2 className="text-3xl font-bold text-gray-900">Adapted Safari Vehicles</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Our specialized 4x4 vehicles are modified for wheelchair accessibility:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Hydraulic lift or ramp for easy boarding</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Removable seats for wheelchair securement</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Raised roof and pop-up top for unobstructed viewing</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Swivel seats for easy transfer</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600">•</span>
                  <span>Two wheelchair capacity in larger vehicles</span>
                </li>
              </ul>
              <Link
                href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-md"
              >
                Book Accessible Vehicles
                <ExternalLink size={18} />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/accessible-vehicle.jpg"
                alt="Adapted safari vehicle with wheelchair lift for disabled travelers Kenya"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE HOTELS */}
      <section id="accessible-hotels" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Hotel className="text-blue-600" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Accessible Luxury Lodges</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {accessibleHotels.slice(0, 6).map((hotel) => {
              const accessibleRooms = hotel.rooms.filter(r => r.accessible);
              return (
                <div key={hotel.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                  <div className="relative h-48">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {accessibleRooms.length} Accessible Rooms
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                    <p className="text-blue-600 mb-4 flex items-center gap-1">
                      <MapPin size={16} />
                      {hotel.location}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
                    <div className="space-y-2 mb-4">
                      {accessibleRooms.slice(0, 2).map(room => (
                        <div key={room.id} className="text-sm bg-blue-50 p-2 rounded">
                          <span className="font-medium text-blue-800">{room.type}</span>
                          <p className="text-xs text-gray-600 mt-1">
                            {room.accessibilityFeatures?.slice(0, 2).join(' • ')}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/hotels/${hotel.id}`}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-bold transition"
                    >
                      View Hotel
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hotels?accessible=true"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg"
            >
              View All Accessible Lodges
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE DESTINATIONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Accessible Safari Destinations</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Wheelchair-friendly parks and reserves with accessible facilities
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {accessibleDestinations.map((dest) => {
              const destHotels = accessibleHotels.filter(h => 
                h.location.toLowerCase().includes(dest.name.toLowerCase())
              );
              return (
                <Link
                  key={dest.id}
                  href={`/destinations/${dest.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="relative h-48">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-2xl font-bold">{dest.name}</h3>
                      <p className="text-sm opacity-90">{destHotels.length} accessible lodges</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm line-clamp-2">{dest.description}</p>
                    <div className="mt-3 flex items-center text-blue-600 font-medium">
                      Explore accessible options
                      <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CROSS-SELL TO VEHICLE HIRE */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Car className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Need a Safari Vehicle?</h3>
                <p className="text-amber-100">Browse our standard 4x4 fleet for self-drive adventures</p>
              </div>
            </div>
            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2 shadow-lg"
            >
              Vehicle Hire
              <ExternalLink size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Accessible Safari FAQs</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Can power wheelchair users go on safari?",
                a: "Yes. Our adapted vehicles can accommodate power wheelchairs up to 300kg. We'll need dimensions in advance to ensure proper fit and securement. Visit "
              },
              {
                q: "Are the game drives bumpy? Will it be uncomfortable?",
                a: "We choose routes carefully to minimize discomfort. Our accessible vehicles have enhanced suspension. For severe back issues, we recommend shorter drives with breaks."
              },
              {
                q: "Can you accommodate dialysis or medical equipment?",
                a: "Yes. We work with lodges that can refrigerate medication. For dialysis, we can arrange access to facilities in Nairobi before/after safari."
              },
              {
                q: "What accessible vehicle options are available?",
                a: "We offer a range of adapted vehicles including those with hydraulic lifts, ramps, and wheelchair tie-downs. For detailed specifications and booking, visit "
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">
                  {faq.q.includes("power wheelchair") ? (
                    <>
                      Yes. Our adapted vehicles can accommodate power wheelchairs up to 300kg. We&apos;ll need dimensions in advance to ensure proper fit and securement.{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium underline"
                      >
                        View accessible vehicle specifications
                      </Link>
                    </>
                  ) : faq.q.includes("vehicle options") ? (
                    <>
                      We offer a range of adapted vehicles including those with hydraulic lifts, ramps, and wheelchair tie-downs. For detailed specifications and booking, visit{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicles/safari-accessible"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium underline"
                      >
                        Jaetravel.co.ke/vehicles/safari-accessible
                      </Link>
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

      {/* FINAL CTA */}
      <section className="relative py-24 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <Image
            src="/cta-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Plan Your Accessible Safari
          </h2>
          <p className="text-xl mb-10 text-blue-100 drop-shadow max-w-2xl mx-auto">
            Let our accessibility specialists create the perfect itinerary for your needs
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/contact"
              className="bg-white text-blue-800 hover:bg-blue-50 px-6 py-4 rounded-xl font-bold transition shadow-xl"
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

          {/* Backlink Footer */}
          <div className="mt-12 pt-8 border-t border-blue-700/30 text-sm text-blue-300">
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