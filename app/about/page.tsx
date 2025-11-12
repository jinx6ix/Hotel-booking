import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Award, Users, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Jaetravel Expeditions | Kenya Safari Tour Experts",
  description:
    "Learn about Jaetravel Expeditions, your trusted partner for authentic Kenya safari tours and hotel bookings. Established experts with 10K+ happy travelers.",
  keywords: "about Jaetravel, safari experts Kenya, tour company, travel agency Kenya",
}

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">About Jaetravel Expeditions</h1>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Jaetravel Expeditions was founded with a passion for showcasing Kenya's incredible natural beauty and
                cultural heritage. We believe that safari experiences should be authentic, luxurious, and accessible to
                travelers from around the world.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                With over a decade of experience in Kenya tourism, our team has curated the finest collection of hotels,
                lodges, and tour experiences across 9 iconic destinations. We pride ourselves on providing exceptional
                service and creating memories that last a lifetime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-orange-500" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Award-Winning</h3>
                <p className="text-gray-600">Recognized for excellence in safari tourism</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-orange-500" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">10K+ Happy Travelers</h3>
                <p className="text-gray-600">Trusted by thousands worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-orange-500" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">9 Destinations</h3>
                <p className="text-gray-600">Across Kenya's finest locations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-orange-500" size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600">Always here for you</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-orange-600 mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  We provide genuine safari experiences that showcase Kenya's real culture and wildlife.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-orange-600 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  Committed to protecting Kenya's ecosystems and supporting local communities.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-orange-600 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest standards in service, accommodations, and experiences.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-orange-600 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Continuously improving our offerings with the latest technology and services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
