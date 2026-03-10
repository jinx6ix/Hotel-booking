// app/safari-vehicle-hire/page.tsx
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
  Shield,
  ExternalLink,
  Car,
  Fuel,
  CheckCircle2,
  Camera,
  Tent,
  Accessibility,
  UsersRound,
  Crown,
  Truck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Safari Vehicle Hire Kenya | 4x4 Rental for Self-Drive Tours | Jaetravel.com",
  description: "Rent safari vehicles in Kenya. 4x4 Land Cruisers with pop-up roofs for wildlife viewing. Self-drive or with driver. Pickup in Nairobi, Mombasa, airports. Best rates, 24/7 support.",
  keywords: "safari vehicle hire kenya, rent 4x4 nairobi, car hire for safari, self drive safari kenya, 4x4 rental maasai mara, land cruiser hire kenya, safari car rental",
  openGraph: {
    title: "Safari Vehicle Hire Kenya | 4x4 Rental for Self-Drive Adventures",
    description: "Rent reliable 4x4 safari vehicles in Kenya. Pop-up roofs, unlimited mileage, 24/7 breakdown support. Pickup in Nairobi, Mombasa, or at the airport.",
    url: "https://www.jaetravel.com/safari-vehicle-hire",
    siteName: "Jaetravel Expeditions",
    images: [{
      url: "https://www.jaetravel.com/images/vehicle-hire-hero.jpg",
      width: 1200,
      height: 630,
      alt: "Toyota Land Cruiser safari vehicle with pop-up roof in Maasai Mara"
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jaetravel.com/safari-vehicle-hire",
  },
};

// Schema for rental business
const rentalSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: "Jaetravel Safari Vehicle Hire",
  description: "4x4 safari vehicle rental in Kenya for self-drive and guided tours",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE"
  },
  telephone: "+254726485228",
  email: "rentals@jaetravel.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "234"
  }
};

// Vehicle fleet data with direct links to jaetravel.co.ke
const vehicleFleet = [
  {
    id: "toyota-landcruiser",
    name: "Toyota Land Cruiser (Pop-up Roof)",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 180,
    features: ["Pop-up roof for game viewing", "Fridge", "AC", "Roof tent option", "Winch", "Dual battery", "GPS"],
    image: "/vehicles/land-cruiser.jpg",
    ideal: "Best for serious safari enthusiasts",
    rating: 4.9,
    reviews: 156,
    co2keLink: "https://www.jaetravel.co.ke/vehicle-hire/toyota-landcruiser",
    icon: <Truck className="w-5 h-5" />
  },
  {
    id: "toyota-prado",
    name: "Toyota Land Cruiser Prado",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 220,
    features: ["Luxury interior", "AC", "Fridge", "Premium sound", "Leather seats", "GPS", "Roof tent"],
    image: "/vehicles/prado.jpg",
    ideal: "Luxury self-drive safaris",
    rating: 4.9,
    reviews: 112,
    co2keLink: "https://www.jaetravel.co.ke/vehicle-hire/toyota-prado",
    icon: <Crown className="w-5 h-5" />
  },
  {
    id: "luxury-roof-top-camping",
    name: "Luxury Roof Top Camping Vehicle",
    seats: 5,
    transmission: "Manual/Auto",
    fuel: "Diesel",
    price: 250,
    features: ["Integrated roof top tent", "Camping equipment included", "Kitchen setup", "Fridge", "AC", "Dual battery"],
    image: "/vehicles/roof-top-camping.jpg",
    ideal: "Ultimate self-drive camping safari",
    rating: 4.8,
    reviews: 89,
    co2keLink: "https://www.jaetravel.co.ke/vehicle-hire/luxury-roof-top-camping",
    icon: <Tent className="w-5 h-5" />
  },
  {
    id: "photography-converted",
    name: "Photography Converted Vehicle",
    seats: 5,
    transmission: "Manual",
    fuel: "Diesel",
    price: 280,
    features: ["Swivel seats", "Camera mounts", "Pop-up roof", "Bean bags", "Equipment storage", "Charging stations"],
    image: "/vehicles/photography.jpg",
    ideal: "Wildlife photographers & filmmakers",
    rating: 5.0,
    reviews: 67,
    co2keLink: "https://www.jaetravel.co.ke/vehicle-hire/photography-converted-vehicle",
    icon: <Camera className="w-5 h-5" />
  },
  {
    id: "wheelchair-accessible",
    name: "Wheelchair Accessible Vehicle",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 300,
    features: ["Hydraulic lift", "Ramp access", "Wheelchair tie-downs", "Pop-up roof", "Wide doors", "Removable seats"],
    image: "/vehicles/accessible.jpg",
    ideal: "Wheelchair accessible safaris",
    rating: 4.9,
    reviews: 78,
    co2keLink: "https://www.jaetravel.co.ke/vehicle-hire/wheelchair-accessible-vehicle",
    icon: <Accessibility className="w-5 h-5" />
  },
  {
    id: "family-safari-minivan",
    name: "Family Safari Minivan",
    seats: 9,
    transmission: "Manual",
    fuel: "Diesel",
    price: 150,
    features: ["Spacious interior", "AC", "Child seats available", "Luggage space", "Pop-up roof", "Entertainment system"],
    image: "/vehicles/minivan.jpg",
    ideal: "Families & group transfers",
    rating: 4.7,
    reviews: 94,
    co2keLink: "https://www.jaetravel.co.ke/vehicle-hire/family-safari-minivan",
    icon: <UsersRound className="w-5 h-5" />
  }
];

export default function SafariVehicleHirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalSchema) }}
      />

      <Header />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L55 30L30 55L5 30L30 5Z' fill='white' fill-opacity='0.1' stroke='white' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px"
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-green-400/30">
              <Car className="text-green-300" size={20} />
              <span className="text-green-200 font-medium">Self-Drive Safari Specialists Since 2015</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Safari Vehicle Hire Kenya
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 drop-shadow max-w-3xl mx-auto">
              Rent a 4x4 for your Kenya self-drive safari • Pop-up roofs • Unlimited mileage • 24/7 roadside assistance
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#fleet"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-xl hover:shadow-2xl flex items-center gap-2"
              >
                View Fleet & Prices
                <ChevronRight size={20} />
              </Link>
              <Link
                href="https://www.jaetravel.co.ke/vehicle-hire"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2"
              >
                Browse All Vehicles
                <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK VEHICLE LINKS */}
      <section className="bg-green-50 border-y border-green-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="font-medium text-green-800">Our Vehicles:</span>
            {vehicleFleet.map((vehicle) => (
              <Link
                key={vehicle.id}
                href={vehicle.co2keLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white rounded-full border border-green-200 hover:bg-green-100 transition text-green-700"
              >
                {vehicle.icon}
                <span>{vehicle.name.split('(')[0].trim()}</span>
                <ExternalLink size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KEY INFO BANNER */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Roadside Assist</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">Unlimited</div>
              <div className="text-sm text-gray-600">Mileage</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">6+</div>
              <div className="text-sm text-gray-600">Vehicle Types</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">Free</div>
              <div className="text-sm text-gray-600">Airport Pickup</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">No</div>
              <div className="text-sm text-gray-600">Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN FLEET SECTION */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Safari Vehicle Fleet</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Well-maintained 4x4s ready for Kenya&apos;s national parks. All vehicles include comprehensive insurance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleFleet.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100">
                <div className="relative h-56">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-bold">
                    ${vehicle.price}/day
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                      <Star className="text-amber-400 fill-current" size={14} />
                      <span className="text-sm font-bold">{vehicle.rating}</span>
                      <span className="text-xs text-gray-500">({vehicle.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users size={16} />
                      <span>{vehicle.seats} seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Car size={16} />
                      <span>{vehicle.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Fuel size={16} />
                      <span>{vehicle.fuel}</span>
                    </div>
                  </div>

                  <p className="text-sm text-amber-600 mb-3 italic">{vehicle.ideal}</p>

                  <ul className="mb-4">
                    {vehicle.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-green-600" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={vehicle.co2keLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
                  >
                    Book on Jaetravel.co.ke
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLE CATEGORIES GRID */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Perfect Safari Vehicle</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/toyota-landcruiser"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition"
            >
              <Truck className="text-green-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Toyota Land Cruiser</h3>
              <p className="text-gray-600 mb-3">The ultimate safari vehicle with pop-up roof, fridge, and 7 seats</p>
              <span className="text-green-600 font-medium inline-flex items-center gap-1">
                View Details <ExternalLink size={14} />
              </span>
            </Link>

            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/toyota-prado"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200 hover:shadow-lg transition"
            >
              <Crown className="text-amber-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Toyota Prado</h3>
              <p className="text-gray-600 mb-3">Luxury 4x4 with leather seats, premium sound, and supreme comfort</p>
              <span className="text-amber-600 font-medium inline-flex items-center gap-1">
                View Details <ExternalLink size={14} />
              </span>
            </Link>

            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/luxury-roof-top-camping"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition"
            >
              <Tent className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Roof Top Camping</h3>
              <p className="text-gray-600 mb-3">Integrated roof tent with full camping equipment included</p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                View Details <ExternalLink size={14} />
              </span>
            </Link>

            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/photography-converted-vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition"
            >
              <Camera className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Photography Vehicle</h3>
              <p className="text-gray-600 mb-3">Swivel seats, camera mounts, bean bags for wildlife photographers</p>
              <span className="text-purple-600 font-medium inline-flex items-center gap-1">
                View Details <ExternalLink size={14} />
              </span>
            </Link>

            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/wheelchair-accessible-vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition"
            >
              <Accessibility className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wheelchair Accessible</h3>
              <p className="text-gray-600 mb-3">Hydraulic lift, ramp access, wheelchair tie-downs for inclusive travel</p>
              <span className="text-blue-600 font-medium inline-flex items-center gap-1">
                View Details <ExternalLink size={14} />
              </span>
            </Link>

            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/family-safari-minivan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition"
            >
              <UsersRound className="text-orange-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Family Safari Minivan</h3>
              <p className="text-gray-600 mb-3">9-seater with child seats, entertainment system, and luggage space</p>
              <span className="text-orange-600 font-medium inline-flex items-center gap-1">
                View Details <ExternalLink size={14} />
              </span>
            </Link>
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
                <h3 className="text-2xl font-bold">Wheelchair Accessible Vehicles</h3>
                <p className="text-blue-100">Specially adapted vehicles for travelers with disabilities</p>
              </div>
            </div>
            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/wheelchair-accessible-vehicle"
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

      {/* RENTAL TERMS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Rental Terms (No Surprises)</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Comprehensive insurance (CDW, TP)
                </li>
                <li className="flex gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Unlimited kilometers
                </li>
                <li className="flex gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  24/7 roadside assistance
                </li>
                <li className="flex gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Airport pickup/drop-off
                </li>
                <li className="flex gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  Roof tent option available
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="text-blue-600" size={24} />
                Requirements
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span>
                  Valid driver&apos;s license (international permit recommended)
                </li>
                <li className="flex gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span>
                  Minimum age: 25 years
                </li>
                <li className="flex gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span>
                  Credit card deposit: $1000
                </li>
                <li className="flex gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">✓</span>
                  Passport copy required
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Popular Self-Drive Safari Routes</h2>
          <p className="text-lg text-center text-gray-600 mb-12">Estimated driving times from Nairobi</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { route: "Nairobi → Maasai Mara", time: "5-6 hours", distance: "270 km" },
              { route: "Nairobi → Amboseli", time: "4 hours", distance: "240 km" },
              { route: "Nairobi → Tsavo East", time: "5 hours", distance: "330 km" },
              { route: "Nairobi → Lake Nakuru", time: "3 hours", distance: "160 km" },
              { route: "Nairobi → Samburu", time: "6 hours", distance: "350 km" },
              { route: "Mombasa → Tsavo East", time: "2.5 hours", distance: "160 km" },
              { route: "Nairobi → Nanyuki", time: "3.5 hours", distance: "200 km" },
              { route: "Nairobi → Naivasha", time: "1.5 hours", distance: "90 km" }
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <MapPin className="text-green-600 mb-2" size={24} />
                <h3 className="font-bold text-gray-900">{r.route}</h3>
                <p className="text-gray-600 text-sm">{r.time} • {r.distance}</p>
              </div>
            ))}
          </div>

          {/* CROSS-SELL TO BUDGET TOURS */}
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-600 rounded-full">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Prefer a guided tour?</h3>
                  <p className="text-gray-700">Check out our budget-friendly guided safari packages</p>
                </div>
              </div>
              <Link
                href="https://www.jaetravel.co.ke/budget-tours"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold transition flex items-center gap-2 whitespace-nowrap"
              >
                Budget Tours
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Vehicle Hire FAQs</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Which vehicle is best for Maasai Mara?",
                a: "For Maasai Mara, we recommend the Toyota Land Cruiser with pop-up roof for optimal wildlife viewing. The roads can be rough, and the Land Cruiser offers the best comfort and reliability. Book it "
              },
              {
                q: "What vehicle do you recommend for photography?",
                a: "Our Photography Converted Vehicle features swivel seats, camera mounts, and bean bags for stability. It's specifically designed for wildlife photographers. Check it out "
              },
              {
                q: "Do you have vehicles for wheelchair users?",
                a: "Yes! Our Wheelchair Accessible Vehicle features a hydraulic lift, ramp access, and wheelchair tie-downs. Perfect for inclusive safaris. View details "
              },
              {
                q: "What's the best vehicle for family safaris?",
                a: "Our Family Safari Minivan seats up to 9 people, includes child seats, and has plenty of luggage space. Ideal for group travel. Book it "
              },
              {
                q: "Can I get a vehicle with roof top camping?",
                a: "Absolutely! Our Luxury Roof Top Camping vehicle comes with an integrated roof tent and full camping equipment. Perfect for adventurous self-drive safaris. Check availability "
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">
                  {faq.q.includes("Maasai Mara") ? (
                    <>
                      For Maasai Mara, we recommend the{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicle-hire/toyota-landcruiser"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium underline"
                      >
                        Toyota Land Cruiser with pop-up roof
                      </Link>
                      {' '}for optimal wildlife viewing. The roads can be rough, and the Land Cruiser offers the best comfort and reliability.
                    </>
                  ) : faq.q.includes("photography") ? (
                    <>
                      Our{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicle-hire/photography-converted-vehicle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium underline"
                      >
                        Photography Converted Vehicle
                      </Link>
                      {' '}features swivel seats, camera mounts, and bean bags for stability. It&apos;s specifically designed for wildlife photographers.
                    </>
                  ) : faq.q.includes("wheelchair") ? (
                    <>
                      Yes! Our{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicle-hire/wheelchair-accessible-vehicle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium underline"
                      >
                        Wheelchair Accessible Vehicle
                      </Link>
                      {' '}features a hydraulic lift, ramp access, and wheelchair tie-downs. Perfect for inclusive safaris.
                    </>
                  ) : faq.q.includes("family") ? (
                    <>
                      Our{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicle-hire/family-safari-minivan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium underline"
                      >
                        Family Safari Minivan
                      </Link>
                      {' '}seats up to 9 people, includes child seats, and has plenty of luggage space. Ideal for group travel.
                    </>
                  ) : faq.q.includes("roof top") ? (
                    <>
                      Absolutely! Our{' '}
                      <Link
                        href="https://www.jaetravel.co.ke/vehicle-hire/luxury-roof-top-camping"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium underline"
                      >
                        Luxury Roof Top Camping vehicle
                      </Link>
                      {' '}comes with an integrated roof tent and full camping equipment. Perfect for adventurous self-drive safaris.
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
      <section className="relative py-24 bg-gradient-to-br from-green-800 to-green-900">
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
            Ready for Your Self-Drive Adventure?
          </h2>
          <p className="text-xl mb-10 text-green-100 drop-shadow max-w-2xl mx-auto">
            Book your safari vehicle today and explore Kenya at your own pace
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="#fleet"
              className="bg-white text-green-800 hover:bg-green-50 px-6 py-4 rounded-xl font-bold transition shadow-xl"
            >
              View Fleet
            </Link>
            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold transition border border-white/30 flex items-center justify-center gap-2"
            >
              All Vehicles
              <ExternalLink size={18} />
            </Link>
            <Link
              href="https://www.jaetravel.co.ke/vehicle-hire/wheelchair-accessible-vehicle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold transition border border-white/30 flex items-center justify-center gap-2"
            >
              Accessible
              <ExternalLink size={18} />
            </Link>
          </div>

          {/* Vehicle Links Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {vehicleFleet.map((vehicle) => (
              <Link
                key={vehicle.id}
                href={vehicle.co2keLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-3 py-2 rounded-lg text-xs border border-white/20 transition flex items-center justify-center gap-1"
              >
                {vehicle.icon}
                <span className="truncate">{vehicle.name.split('(')[0].trim()}</span>
                <ExternalLink size={10} />
              </Link>
            ))}
          </div>

          {/* Backlink Footer */}
          <div className="mt-12 pt-8 border-t border-green-700/30 text-sm text-green-300">
            <p>
              Also visit:{' '}
              <Link href="https://www.jaetravel.co.ke" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Jaetravel.co.ke</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/budget-tours" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Budget Tours</Link>
              {' | '}
              <Link href="https://www.jaetravel.co.ke/disability-tours" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Disability Tours</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}