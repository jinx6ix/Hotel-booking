import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { HotelCard } from "@/components/hotel-card"
import { locations, hotels } from "@/lib/data"
import { MapPin, Calendar } from "lucide-react"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateLocationSchema, generateBreadcrumbSchema } from "@/lib/schema"

interface DestinationPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)

  if (!location) {
    return {
      title: "Destination Not Found",
      description: "The destination you are looking for does not exist.",
    }
  }

  return {
    title: `${location.name} Safari Tours & Hotels | Jaetravel Expeditions`,
    description: `${location.longDescription.substring(0, 160)}... Book luxury hotel accommodations in ${location.name}.`,
    keywords: `${location.name} safari, ${location.name} hotels, Kenya ${location.name}, safari tours`,
    openGraph: {
      title: `${location.name} - Kenya Safari Tours`,
      description: location.description,
      url: `https://www.jaetravel.com/destinations/${location.slug}`,
      type: "website",
    },
  }
}

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  const destinationHotels = hotels.filter((h) => h.location === location?.name)

  if (!location) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
            <Link href="/destinations" className="text-orange-500 hover:text-orange-600">
              Back to Destinations
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const locationSchema = generateLocationSchema(location)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: location.name, href: `/destinations/${location.slug}` },
  ])

  return (
    <>
      <SchemaRenderer schema={locationSchema} />
      <SchemaRenderer schema={breadcrumbSchema} />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: location.name },
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900">
        <img
          src={location.image || "/placeholder.svg"}
          alt={location.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
            <h1 className="text-5xl font-bold text-white mb-4">{location.name}</h1>
            <p className="text-xl text-orange-200">{location.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About {location.name}</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{location.longDescription}</p>
              </div>

              {/* Attractions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Top Attractions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {location.attractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Time to Visit */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Best Time to Visit</h4>
                    <p className="text-gray-700">{location.bestTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-600 font-medium">Location</p>
                    <p className="text-gray-900">{location.name}, Kenya</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Hotels Available</p>
                    <p className="text-gray-900">{destinationHotels.length}+ Properties</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium">Best Season</p>
                    <p className="text-gray-900">{location.bestTime}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition text-center mt-6"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotels & Lodges in {location.name}</h2>
            <p className="text-xl text-gray-600">
              Choose from {destinationHotels.length}+ luxury accommodations in {location.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}