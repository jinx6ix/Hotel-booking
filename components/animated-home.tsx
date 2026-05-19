"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ChevronRight } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { HotelCard } from "@/components/hotel-card";
import { AmenitiesFilter } from "@/components/amenities-filter";
import { PopularSearchesEnhanced } from "@/components/popular-searches";
import { PageLoader } from "@/components/page-loader";
import { hotels } from "@/lib/data";

const destinations = [
  { id: "maasai-mara", name: "Maasai Mara", description: "Great Migration, Big Cats", count: 45, image: "/maasai-mara.jpeg", slug: "maasai-mara", color: "from-amber-600 to-amber-800", priceFrom: 380 },
  { id: "amboseli", name: "Amboseli", description: "Kilimanjaro Views", count: 28, image: "/amboseli.avif", slug: "amboseli", color: "from-blue-600 to-blue-800", priceFrom: 350 },
  { id: "tsavo", name: "Tsavo East & West", description: "Red Elephants", count: 34, image: "/tsavo-east.jpeg", slug: "tsavo-east", color: "from-orange-600 to-orange-800", priceFrom: 190 },
  { id: "samburu", name: "Samburu", description: "Special Five", count: 22, image: "/samburu.webp", slug: "samburu", color: "from-emerald-600 to-emerald-800", priceFrom: 320 },
  { id: "nakuru", name: "Lake Nakuru", description: "Flamingos, Rhinos", count: 16, image: "/lake-nakuru-lodge.jpg", slug: "nakuru", color: "from-rose-600 to-rose-800", priceFrom: 220 },
  { id: "nairobi", name: "Nairobi", description: "City Safaris", count: 38, image: "/nairobi.avif", slug: "nairobi", color: "from-purple-600 to-purple-800", priceFrom: 180 },
];

const featuredHotels = [
  { id: "maasai-mara-009", name: "Angama Mara", location: "Maasai Mara", rating: 4.9, reviews: 342, price: 1250, image: "/angama-mara.webp", badge: "Luxury", badgeColor: "bg-amber-600", amenities: ["Pool", "Spa"], description: "Perched on the Oloololo Escarpment.", rooms: [], gallery: [], address: "", phone: "", email: "" },
  { id: "amboseli-007", name: "Ol Donyo Lodge", location: "Amboseli", rating: 4.9, reviews: 287, price: 980, image: "/ol-donyo.webp", badge: "Top Pick", badgeColor: "bg-blue-600", amenities: ["Pool"], description: "Kilimanjaro views.", rooms: [], gallery: [], address: "", phone: "", email: "" },
  { id: "tsavo-west-007", name: "Finch Hattons", location: "Tsavo West", rating: 4.8, reviews: 412, price: 850, image: "/finch-hattons.webp", badge: "Best Value", badgeColor: "bg-green-600", amenities: ["Pool", "Spa"], description: "Luxury oasis.", rooms: [], gallery: [], address: "", phone: "", email: "" },
  { id: "nairobi-012", name: "Giraffe Manor", location: "Nairobi", rating: 4.9, reviews: 523, price: 750, image: "/giraffe-manor.webp", badge: "Iconic", badgeColor: "bg-purple-600", amenities: ["Restaurant"], description: "Breakfast with giraffes.", rooms: [], gallery: [], address: "", phone: "", email: "" },
];

export default function AnimatedHome() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative min-h-screen flex-shrink-0">
        <div className="absolute inset-0">
          <Image
            src="/hero-safari.jpg"
            alt="Kenya Safari"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center">
            Book Kenya&apos;s Best Safari Hotels
          </h1>

          <h2 className="text-lg md:text-xl text-amber-200 mb-8 text-center">
            200+ hand-picked properties • Best rate guarantee
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Best Price Guarantee", "No Booking Fees", "Free Cancellation"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <BadgeCheck className="text-amber-300" size={18} />
                <span className="font-medium text-white text-sm">{badge}</span>
              </div>
            ))}
          </div>

          <div className="w-full max-w-4xl">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Explore Safari Destinations</h2>
          <p className="text-lg text-center text-gray-600 mb-10">Find the perfect lodge in Kenya&apos;s most iconic wildlife destinations</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link key={dest.id} href={`/destinations/${dest.slug}`} className="group block relative h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image src={dest.image} alt={dest.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} via-black/30 to-transparent opacity-80`} />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-white/90 text-sm mb-2">{dest.description}</p>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">{dest.count} properties</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Safari Hotels</h2>
              <p className="text-lg text-gray-600">Hand-picked luxury lodges and camps</p>
            </div>
            <Link href="/hotels" className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition">
              View all <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHotels.map((hotel, i) => (
              <HotelCard key={hotel.id} hotel={hotel as any} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Why Book With Jaetravel</h2>
          <p className="text-lg text-center text-gray-600 mb-12">We make booking your dream safari accommodation simple and secure</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Best Price Guarantee", desc: "Find a lower rate? We'll match it." },
              { title: "Curated Selection", desc: "Only quality properties make it." },
              { title: "Instant Confirmation", desc: "Book in under 5 minutes." },
              { title: "Local Experts", desc: "24/7 support from Nairobi." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex-shrink-0">
        <AmenitiesFilter hotels={hotels} />
      </div>
      <div className="flex-shrink-0">
        <PopularSearchesEnhanced />
      </div>

      <section className="py-16 bg-gradient-to-br from-amber-800 to-amber-900 text-white flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Safari Stay?</h2>
          <p className="text-lg text-amber-200 mb-8">Join thousands of travelers who booked with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/search" className="bg-white text-amber-800 hover:bg-amber-50 px-8 py-4 rounded-xl font-bold transition shadow-lg">Search All Hotels</Link>
            <Link href="/contact" className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition">Talk to an Expert</Link>
          </div>
        </div>
      </section>
    </div>
  );
}