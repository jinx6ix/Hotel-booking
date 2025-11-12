import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { hotels } from "@/lib/data"
import { HotelCard } from "@/components/hotel-card"
import { Breadcrumb } from "@/components/breadcrumb"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Kenya Hotels & Lodges | Safari Accommodations | Jaetravel Expeditions",
  description:
    "Browse 120+ luxury hotels and lodges across Kenya. Safari accommodations in Maasai Mara, Amboseli, Nairobi, Naivasha & more. Book your perfect hotel with ratings, galleries & amenities.",
  keywords: "Kenya hotels, safari lodges, luxury accommodation, hotel bookings, safari stays, best hotels Kenya",
}

export default function HotelsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Hotels", href: "/hotels" },
  ])

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <Header />

      <main>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Hotels", href: "/hotels" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Kenya Hotels & Lodges</h1>
            <p className="text-xl text-orange-50 max-w-2xl">
              Discover our collection of 120+ luxury hotels and safari lodges across Kenya. Book your perfect
              accommodation today.
            </p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-gray-600 text-lg mb-4">
                Jaetravel Expeditions partners with the finest hotels and lodges across Kenya to provide exceptional
                safari accommodations. From luxury tented camps in Maasai Mara to 5-star resorts in Nairobi, we offer
                accommodations for every budget and preference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
