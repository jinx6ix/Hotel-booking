import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { locations, hotels } from "@/lib/data"
import { HotelCard } from "@/components/hotel-card"
import { MapPin, Star, Users, Award } from "lucide-react"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { QuickBooking } from "@/components/quick-booking"

export const metadata: Metadata = {
  title: "Jaetravel Expeditions - Kenya Safari Tours & Luxury Hotel Bookings | Book Now",
  description:
    "Book authentic Kenya safari tours with luxury hotel accommodations across 9 destinations. Maasai Mara, Amboseli, Nairobi & more. Expert guides, 4.6★ rating, 10K+ happy travelers. Reserve your safari adventure today!",
  keywords:
    "Kenya safari tours, hotel bookings Kenya, luxury accommodation safari, Maasai Mara hotels, safari package deals, Kenya travel, best safari lodges, wildlife tours Kenya, book safari online, Kenya vacation packages",
  openGraph: {
    title: "Jaetravel Expeditions - Kenya Safari Tours",
    description: "Book hotel-based safari tours across Kenya with luxury accommodations",
    url: "https://jaetravel.com",
    type: "website",
  },
}

export default function Home() {
  const featuredHotels = hotels.slice(0, 6)
  const breadcrumbSchema = generateBreadcrumbSchema([{ label: "Home", href: "/" }])

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="/kenya-safari-landscape.jpg" alt="Kenya Safari" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Experience Kenya&apos;s Finest Safari Adventures
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-orange-50">
              Book luxury hotel-based safari tours across 9 incredible Kenya destinations. Great Migration, wildlife,
              cultural tours, and 5-star lodges.
            </p>
          </div>

          <div className="w-full mb-12">
            <QuickBooking />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/destinations"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
            >
              Explore Destinations
            </Link>
            <Link
              href="/contact"
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-800 transition border-2 border-white"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">9</div>
              <p className="text-gray-600 font-medium">Destinations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">120+</div>
              <p className="text-gray-600 font-medium">Hotels & Lodges</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">4.6★</div>
              <p className="text-gray-600 font-medium">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
              <p className="text-gray-600 font-medium">Happy Travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From the iconic Maasai Mara to the stunning Amboseli plains, discover Kenya&apos;s most breathtaking safari
              destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/destinations/${location.slug}`}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={location.image || "/placeholder.svg"}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-orange-200 text-sm">{location.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Hotels & Lodges</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked luxury accommodations offering exceptional comfort and authentic safari experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hotels"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              Browse All Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Jaetravel Expeditions?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                Experienced safari guides with deep knowledge of wildlife and destinations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Luxury Stays</h3>
              <p className="text-gray-600">Premium hotel accommodations with world-class amenities and service.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Diverse Destinations</h3>
              <p className="text-gray-600">9 unique locations offering varied wildlife and cultural experiences.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated customer support available round the clock for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Safari Adventure?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Book your hotel-based safari tour today and create unforgettable memories in Kenya.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
