import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { locations } from "@/lib/data"

export const metadata: Metadata = {
  title: "Kenya Safari Destinations | Jaetravel Expeditions",
  description:
    "Explore 9 incredible Kenya safari destinations: Maasai Mara, Nairobi, Amboseli, Naivasha, Nakuru, Samburu, Nanyuki, Tsavo East & West.",
  keywords: "Kenya destinations, safari locations, Maasai Mara, Amboseli, Nairobi, safari tours",
}

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kenya Safari Destinations</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover 9 unique destinations across Kenya, each offering distinct wildlife, landscapes, and cultural
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/destinations/${location.slug}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              >
                <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{location.name}</h2>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <p>
                      <strong>Best Time:</strong> {location.bestTime}
                    </p>
                  </div>
                  <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-medium group-hover:bg-orange-600 transition">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
