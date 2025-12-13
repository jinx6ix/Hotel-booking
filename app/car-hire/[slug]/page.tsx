// app/car-hire/[slug]/page.tsx
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema, generateVehicleSchema, generateFAQSchema } from "@/lib/schema"
import { vehicles } from "@/lib/vehicle-data"
import { Shield, Star, Camera, Accessibility, } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const vehicle = vehicles.find((v) => v.slug === slug)
  if (!vehicle) return { title: "Vehicle Not Found" }

  return {
    title: `${vehicle.name} Hire Kenya | Jaetravel Expeditions`,
    description: `Rent ${vehicle.name} from ${vehicle.price.split(" ")[0]}/day in Nairobi, Maasai Mara, Amboseli. ${vehicle.accessibility ? "Wheelchair accessible. " : ""}${vehicle.photography ? "360° photography roof. " : ""}Professional driver included.`,
    openGraph: {
      title: `${vehicle.name} - Safari Car Hire Kenya`,
      description: vehicle.description,
      images: [{ url: `https://www.jaetravel.com${vehicle.heroImage}`, width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://www.jaetravel.com/car-hire/${slug}` },
  }
}

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }))
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params
  const vehicle = vehicles.find((v) => v.slug === slug)
  if (!vehicle) notFound()

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Car Hire", href: "/car-hire" },
    { label: vehicle.name, href: `/car-hire/${slug}` },
  ])

  const vehicleSchema = generateVehicleSchema({
    name: vehicle.name,
    description: vehicle.description,
    price: vehicle.price.split(" ")[0],
    image: vehicle.image,
    url: `https://www.jaetravel.com/car-hire/${slug}`,
    passengers: parseInt(vehicle.specs[0].match(/\d+/)?.[0] || "6"),
    fuelType: vehicle.technical.fuel,
    vehicleConfiguration: vehicle.photography?.roofType || "Pop-up Roof",
    brand: "Toyota",
    model: vehicle.name.includes("Minivan") ? "Hiace" : "Land Cruiser",
  })

  const faqSchema = generateFAQSchema(vehicle.faqs)

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={vehicleSchema} />
      <SchemaRenderer schema={faqSchema} />
      <Header />

      {/* Hero */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <Image
          src={vehicle.heroImage}
          alt={`${vehicle.name} in ${vehicle.pickupLocations[0]} during safari`}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{vehicle.name}</h1>
            <p className="text-2xl md:text-3xl mb-6 text-orange-200">{vehicle.price}</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl" dangerouslySetInnerHTML={{ __html: vehicle.description }} />
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/contact?vehicle=${slug}`}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition inline-flex items-center gap-2"
              >
                <Star className="w-5 h-5" />
                Book Now
              </Link>
              {vehicle.accessibility && (
                <span className="bg-blue-600 text-white px-6 py-4 rounded-lg font-bold text-lg flex items-center gap-2">
                  <Accessibility className="w-5 h-5" />
                  Wheelchair Accessible
                </span>
              )}
              {vehicle.photography && (
                <span className="bg-purple-600 text-white px-6 py-4 rounded-lg font-bold text-lg flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Photography Optimized
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {vehicle.gallery.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {vehicle.gallery.map((img, i) => (
                <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={img}
                    alt={`${vehicle.name} - Gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Long Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-5xl mx-auto text-gray-700"
            dangerouslySetInnerHTML={{ __html: vehicle.longDescription }}
          />
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(vehicle.technical).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                <span className="text-orange-600 font-bold">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {vehicle.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Included in Rental</h2>
              <ul className="space-y-3">
                {vehicle.includes.map((inc, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <Shield className="w-5 h-5 text-green-600" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility / Photography Details */}
      {(vehicle.accessibility || vehicle.photography) && (
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {vehicle.accessibility && (
              <div className="bg-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Accessibility className="w-8 h-8 text-blue-600" />
                  Accessibility Features
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {Object.entries(vehicle.accessibility).map(([k, v]) => (
                    <li key={k} className="flex justify-between">
                      <span className="font-medium">{k}:</span>
                      <span className="text-blue-700 font-bold">{v === true ? "Yes" : v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {vehicle.photography && (
              <div className="bg-purple-100 p-8 rounded-xl mt-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Camera className="w-8 h-8 text-purple-600" />
                  Photography Setup
                </h3>
                <ul className="space-y-2">
                  {vehicle.photography.cameraMounts.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-600 rounded-full" />
                      {m}
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-purple-600 rounded-full" />
                    {vehicle.photography.powerSupply}
                  </li>
                  {vehicle.photography.silentMode && (
                    <li className="flex items-center gap-2 text-green-600 font-medium">
                      Silent electric approach mode
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {vehicle.faqs.map((faq, i) => (
              <details key={i} className="bg-white p-6 rounded-lg shadow-md cursor-pointer group" open={i === 0}>
                <summary className="font-semibold text-lg group-hover:text-orange-600 transition">
                  {faq.question}
                </summary>
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Vehicles */}
      {vehicle.relatedVehicles.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">You May Also Like</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {vehicle.relatedVehicles.map((slug) => {
                const related = vehicles.find((v) => v.slug === slug)
                if (!related) return null
                return (
                  <Link
                    key={slug}
                    href={`/car-hire/${slug}`}
                    className="block bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
                  >
                    <Image
                      src={related.image}
                      alt={related.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{related.name}</h3>
                      <p className="text-orange-600 font-bold">{related.price}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
          <p className="text-xl mb-8">Get instant pricing and availability.</p>
          <Link
            href={`/contact?vehicle=${slug}`}
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
          >
            Request Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}