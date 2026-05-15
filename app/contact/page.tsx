import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/schema"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jaetravel.com"),
  title: "Contact Jaetravel Expeditions | Safari Bookings & Inquiries Kenya",
  description: "Contact Jaetravel Expeditions for Kenya safari bookings, hotel reservations, and travel inquiries. Call +254 726 485 228, email info@jaetravel.co.ke. 24/7 support from Nairobi-based safari experts.",
  keywords: "contact jaetravel, kenya safari booking, book kenya safari, contact kenya travel agency, safari reservations kenya, book safari lodge kenya, kenya safari help, contact nairobi travel agency",
  authors: [{ name: "Jaetravel Expeditions" }],
  publisher: "Jaetravel Expeditions",
  openGraph: {
    title: "Contact Jaetravel Expeditions | Kenya Safari Bookings",
    description: "Get in touch with Kenya's premier safari booking experts. 24/7 support, best rates, personalized planning.",
    url: "https://www.jaetravel.com/contact",
    siteName: "Jaetravel Expeditions",
    images: [{
      url: "https://www.jaetravel.com/og-contact.jpg",
      width: 1200,
      height: 630,
      alt: "Contact Jaetravel Expeditions - Kenya Safari Booking Experts",
      type: "image/jpeg",
    }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jaetravel.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
}

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ])
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={organizationSchema} />

      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Jaetravel Expeditions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with Kenya's premier safari booking experts. We're here to help plan your perfect African adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-orange-50 rounded-lg border border-orange-200">
              <Phone className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-700 font-medium">+254 726 485 228</p>
              <p className="text-sm text-gray-500 mt-1">24/7 Safari Support</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-lg border border-orange-200">
              <Mail className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-700 font-medium">info@jaetravel.co.ke</p>
              <p className="text-sm text-gray-500 mt-1">Response within 24h</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-lg border border-orange-200">
              <MapPin className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Office</h3>
              <p className="text-gray-700 font-medium">Westlands, Nairobi</p>
              <p className="text-sm text-gray-500 mt-1">Kenya, East Africa</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
