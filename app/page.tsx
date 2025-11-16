import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { locations } from "@/lib/data"
import { MapPin, Star, Users, Award, Accessibility } from "lucide-react"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema } from "@/lib/schema"
import { QuickBooking } from "@/components/quick-booking"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Jaetravel Expeditions - Kenya Safari Tours, Luxury & Accessible Hotel Bookings | Maasai Mara, Amboseli, Nairobi",
  description:
    "Book authentic Kenya safari tours with luxury and accessible hotel accommodations in 9 iconic destinations: Maasai Mara, Amboseli, Nairobi, Samburu, Tsavo, and more. Expert local guides, 4.6-star rating, 10,000+ happy travelers. Inclusive travel with wheelchair-accessible rooms and modified safari vehicles. Book your dream safari today!",
  keywords:
    "Kenya safari tours, luxury safari Kenya, accessible safari Kenya, Maasai Mara hotels, Amboseli safari packages, Nairobi luxury hotels, wheelchair accessible Kenya safari, inclusive travel Kenya, safari for disabled, Great Migration tours, Kenya wildlife safaris, book safari online, luxury lodges Kenya, accessible rooms Kenya, family safari Kenya",
  openGraph: {
    title: "Jaetravel Expeditions - Luxury & Accessible Kenya Safari Tours",
    description: "Hotel-based safari tours across Kenya with luxury stays and accessible accommodations for all travelers",
    url: "https://jaetravel.com",
    type: "website",
    images: [
      {
        url: "https://jaetravel.com/kenya-safari-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Safari - Great Migration in Maasai Mara National Reserve",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaetravel Expeditions - Kenya Safari & Accessible Luxury Travel",
    description: "Inclusive safari tours with luxury and wheelchair-accessible accommodations across Kenya",
    images: ["https://jaetravel.com/kenya-safari-landscape.jpg"],
  },
  alternates: {
    canonical: "https://jaetravel.com",
  },
  robots: "index, follow",
}

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ label: "Home", href: "/" }])

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <Header />

      {/* Hero Section - Original Preserved + Accessible Booking Added */}
      <section className="relative min-h-screen bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/kenya-safari-landscape.webp"
            alt="Kenya Safari Landscape - Great Migration in Maasai Mara with wildebeest crossing river"
            className="w-full h-full object-cover opacity-40"
            loading="eager"
            width={1920}
            height={1080}
          />
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

          {/* Dual Quick Booking Forms - Standard + Accessible */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            {/* Standard Booking */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="text-orange-500" size={28} />
                Standard Safari Booking
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Plan your classic luxury safari with 5-star hotels, private game drives, and expert guides.
              </p>
              <QuickBooking />
            </div>

            {/* Accessible Booking */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl p-6 shadow-xl text-white border border-blue-400">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Accessibility className="text-yellow-300" size={28} />
                Accessible Rooms Booking
              </h3>
              <p className="text-sm text-blue-50 mb-4 leading-relaxed">
                Book wheelchair-accessible rooms, ramp-equipped vehicles, and inclusive safari experiences designed for travelers with disabilities.
              </p>
              <QuickBooking accessible={true} />
            </div>
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

      {/* SEO-Rich Text Section: Why Kenya Safari is Unforgettable */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-5xl mx-auto text-gray-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Why a Kenya Safari is the Ultimate Wildlife Adventure
            </h2>
            <p className="lead text-xl mb-8 text-center text-gray-600">
              Kenya is home to the <strong>Great Migration</strong>, one of the Seven Natural Wonders of the World, and offers unparalleled opportunities to witness the <strong>Big Five</strong> in their natural habitat.
            </p>

            <p>
              Every year, over <strong>1.5 million wildebeest, zebras, and gazelles</strong> migrate across the Maasai Mara in search of fresh grazing — a dramatic spectacle of survival that attracts photographers, filmmakers, and nature lovers from around the globe. At Jaetravel Expeditions, we position you at the heart of this action with <strong>luxury hotel-based safari packages</strong> that combine comfort, adventure, and accessibility.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">What Makes Kenya Safari Tours Unique?</h3>
            <p>
              Unlike traditional camping safaris, our tours are <strong>hotel-based</strong>, meaning you return each evening to a 4 or 5-star lodge with en-suite bathrooms, gourmet dining, swimming pools, and stunning views. No tents. No compromise on comfort.
            </p>

            <ul className="space-y-4 my-8">
              <li>
                <strong>Maasai Mara National Reserve:</strong> Witness the Great Migration, river crossings, and predator-prey interactions. Best time: July–October.
              </li>
              <li>
                <strong>Amboseli National Park:</strong> Iconic views of Mount Kilimanjaro with large elephant herds. Year-round wildlife.
              </li>
              <li>
                <strong>Samburu National Reserve:</strong> Home to the “Samburu Special Five” — Grevy’s zebra, reticulated giraffe, Somali ostrich, gerenuk, and beisa oryx.
              </li>
              <li>
                <strong>Lake Nakuru & Naivasha:</strong> Flamingo-filled soda lakes, rhino sanctuaries, and boat safaris.
              </li>
              <li>
                <strong>Tsavo East & West:</strong> Vast red-earthed landscapes, the “man-eaters of Tsavo” legacy, and diverse birdlife.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-10 mb-4">Inclusive & Accessible Safari Travel in Kenya</h3>
            <p>
              We believe the wonder of Africa should be <strong>accessible to everyone</strong>. That’s why we offer:
            </p>
            <ul className="space-y-3">
              <li>Wheelchair-accessible hotel rooms with roll-in showers and grab bars</li>
              <li>Modified 4x4 safari vehicles with hydraulic lifts and wide doors</li>
              <li>Trained accessibility guides fluent in sign language and braille materials</li>
              <li>Ramped pathways, elevators, and adapted walking safaris</li>
              <li>Emergency medical support and 24/7 accessibility coordination</li>
            </ul>

            <p className="mt-8">
              Whether you’re traveling with mobility challenges, visual or hearing impairments, or require special assistance, Jaetravel ensures your <strong>Kenya safari is safe, comfortable, and unforgettable</strong>.
            </p>

            <h3 className="text-2xl font-bold mt-10 mb-4">Sustainable & Responsible Tourism</h3>
            <p>
              We partner with eco-certified lodges, support local Maasai communities, and offset 100% of carbon emissions from your safari. Your trip helps fund anti-poaching patrols, school programs, and wildlife conservation.
            </p>
          </article>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our 9 Kenya Safari Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the world-famous <strong>Maasai Mara</strong> to the remote wilderness of <strong>Samburu</strong>, each destination offers unique wildlife, landscapes, and cultural experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/destinations/${location.slug}`}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`${location.name} Kenya Safari - ${location.description} | Luxury & Accessible Tours`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={300}
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Jaetravel Expeditions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 10,000 travelers trust us for authentic, inclusive, and luxury safari experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Guides</h3>
              <p className="text-gray-600">
                Local Maasai and certified naturalists with deep wildlife knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">Luxury & Accessible Stays</h3>
              <p className="text-gray-600">5-star comfort with wheelchair-accessible facilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">9 Diverse Destinations</h3>
              <p className="text-gray-600">From savannah to lakes and mountains.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-500" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Dedicated team including accessibility specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Inclusive Safari Adventure?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Book your luxury or accessible Kenya safari tour today and create memories that last a lifetime.
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