// app/car-hire/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CarCard } from "@/components/car-card"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema"
import { Users, Accessibility, Shield, } from "lucide-react"

export const metadata: Metadata = {
  title: "Car Hire Kenya | Safari Landcruiser, Accessible Vehicles & Photography Tours | Jaetravel",
  description:
    "Rent 4x4 safari Landcruisers, accessible vehicles, photography convertibles & minivans in Nairobi, Maasai Mara, Amboseli. Unlimited mileage, expert drivers, 24/7 support. Book online for your Kenya safari.",
  keywords:
    "car hire Kenya, safari Landcruiser rental, accessible safari vehicle Kenya, photography safari car, 4x4 rental Nairobi, Maasai Mara car hire, wheelchair accessible Landcruiser, Kenya self-drive safari, pop-up roof minivan hire, luxury safari transport",
  openGraph: {
    title: "Safari Car Hire Kenya - Landcruiser, Accessible & Photography Vehicles",
    description: "Professional 4x4 safari vehicles with drivers, pop-up roofs, and accessibility features for your Kenya adventure.",
    url: "https://www.jaetravel.com/car-hire",
    type: "website",
    images: [
      {
        url: "https://www.jaetravel.com/car-hire/safari-landcruiser.jpg",
        width: 1200,
        height: 630,
        alt: "Safari Landcruiser with Pop-up Roof in Maasai Mara",
      },
    ],
  },
  alternates: { canonical: "https://www.jaetravel.com/car-hire" },
  robots: "index, follow",
}

const vehicles = [
  {
    slug: "safari-landcruiser",
    name: "Safari Landcruiser 4x4",
    price: "From $180/day",
    passengers: 6,
    features: ["Pop-up Roof", "4WD", "Unlimited Mileage", "Professional Driver"],
    bestFor: "Classic game drives in Maasai Mara, Amboseli, Tsavo",
    image: "/car-hire/safari-landcruiser.jpg",
  },
  {
    slug: "accessible-safari-landcruiser",
    name: "Accessible Safari Landcruiser",
    price: "From $220/day",
    passengers: 4,
    features: ["Wheelchair Lift", "Wide Doors", "Ramped Access", "Accessible Seating"],
    bestFor: "Travelers with mobility needs – full safari access",
    image: "/car-hire/accessible-landcruiser.jpg",
  },
  {
    slug: "photography-convertible",
    name: "Photography Convertible Vehicle",
    price: "From $250/day",
    passengers: 5,
    features: ["360° Open Roof", "Bean Bags", "Camera Mounts", "Silent Mode"],
    bestFor: "Wildlife photographers & filmmakers",
    image: "/car-hire/photography-vehicle.jpg",
  },
  {
    slug: "safari-minivan",
    name: "Safari Minivan (Pop-up Roof)",
    price: "From $120/day",
    passengers: 7,
    features: ["Pop-up Roof", "AC", "Budget-Friendly", "Family Groups"],
    bestFor: "Large families or budget-conscious groups",
    image: "/car-hire/safari-minivan.jpg",
  },
]

const faqItems = [
  {
    question: "Do I need an international driving permit to rent a car in Kenya?",
    answer:
      "Yes, for self-drive. But all our safari vehicles come with professional drivers, so no permit is needed.",
  },
  {
    question: "Are the vehicles insured?",
    answer:
      "Yes, all vehicles include comprehensive insurance, third-party coverage, and 24/7 roadside assistance.",
  },
  {
    question: "Can I hire a vehicle for one-way trips (e.g., Nairobi to Maasai Mara)?",
    answer:
      "Yes, one-way rentals are available with drop-off fees. Contact us for custom quotes.",
  },
  {
    question: "Are child seats available?",
    answer:
      "Yes, booster and infant seats are available upon request at no extra charge.",
  },
]

const breadcrumbSchema = generateBreadcrumbSchema([
  { label: "Home", href: "/" },
  { label: "Car Hire", href: "/car-hire" },
])

const faqSchema = generateFAQSchema(faqItems)

export default function CarHirePage() {
  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={faqSchema} />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-600 to-amber-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/car-hire/hero-landcruiser.jpg"
            alt="Safari Landcruiser on dirt road in Maasai Mara during golden hour"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Safari Car Hire in Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-50">
            Rent <strong>4x4 Landcruisers</strong>, <strong>accessible safari vehicles</strong>, and{" "}
            <strong>photography convertibles</strong> with expert drivers. Unlimited mileage. 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#vehicles"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
            >
              View All Vehicles
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition border-2 border-white"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600">50+</div>
              <p className="text-gray-600">Vehicles in Fleet</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">4.8★</div>
              <p className="text-gray-600">Client Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">24/7</div>
              <p className="text-gray-600">Roadside Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">100%</div>
              <p className="text-gray-600">Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section id="vehicles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Safari Vehicle Fleet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from <strong>pop-up roof Landcruisers</strong>, <strong>accessible 4x4s</strong>, and{" "}
              <strong>photography-optimized vehicles</strong> — all maintained to the highest standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <CarCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Car Hire */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Rent Safari Vehicles with Jaetravel?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Fully Insured & Serviced</h3>
              <p className="text-gray-600">
                All vehicles undergo daily safety checks. Full insurance + breakdown cover included.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Expert Local Drivers</h3>
              <p className="text-gray-600">
                English-speaking, wildlife-trained drivers who double as spotters.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Accessibility className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Accessibility First</h3>
              <p className="text-gray-600">
                Modified vehicles for wheelchair users, seniors, and travelers with disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              The Best Safari Car Hire Experience in Kenya
            </h2>
            <p className="lead text-xl text-center mb-10">
              A great safari starts with the <strong>right vehicle</strong>. At Jaetravel Expeditions, we offer{" "}
              <strong>professionally maintained 4x4s</strong> with pop-up roofs, unlimited mileage, and expert drivers
              — so you can focus on the wildlife, not the road.
            </p>

            <h3>Why Pop-Up Roof Vehicles Are Essential for Safari</h3>
            <p>
              Standard cars cannot enter national parks. Our <strong>Toyota Landcruisers and minivans</strong> feature{" "}
              <strong>pop-up roofs</strong> that allow standing viewing, 360° photography, and safe game viewing without
              leaving the vehicle — mandatory in predator-rich areas like Maasai Mara and Tsavo.
            </p>

            <h3>Accessible Safari Vehicles: Travel Without Limits</h3>
            <p>
              We are proud to offer <strong>Kenya’s only fleet of wheelchair-accessible safari Landcruisers</strong>.
              Features include:
            </p>
            <ul>
              <li>Hydraulic side lift (up to 300kg)</li>
              <li>Wide sliding doors and removable seats</li>
              <li>Secure wheelchair tie-downs</li>
              <li>Lowered floor for easy transfer</li>
            </ul>
            <p>
              Perfect for travelers with mobility challenges, seniors, or families with strollers.
            </p>

            <h3>Photography & Filmmaking Vehicles</h3>
            <p>
              Our <strong>convertible photography vehicles</strong> are designed with input from BBC and National
              Geographic crews:
            </p>
            <ul>
              <li>Full 360° open roof</li>
              <li>Gimbal & tripod mounts</li>
              <li>Bean bags and camera rests</li>
              <li>Quiet electric mode for close approaches</li>
            </ul>

            <h3>Pickup Locations</h3>
            <p>
              Vehicles available from:
            </p>
            <ul>
              <li>Jomo Kenyatta International Airport (NBO)</li>
              <li>Wilson Airport (WIL)</li>
              <li>Nairobi CBD hotels</li>
              <li>Maasai Mara airstrips</li>
              <li>Mombasa Port</li>
            </ul>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer group"
                open={i === 0}
              >
                <summary className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition">
                  {item.question}
                </summary>
                <p className="mt-3 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Safari Vehicle?</h2>
          <p className="text-xl mb-8">
            Get instant pricing and availability. All vehicles include fuel, driver, and park fees.
          </p>
          <Link
            href="/contact?service=car-hire"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
          >
            Request Quote Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}