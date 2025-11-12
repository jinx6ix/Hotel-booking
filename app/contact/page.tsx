import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Jaetravel Expeditions",
  description:
    "Get in touch with Jaetravel Expeditions. Contact us for safari bookings, inquiries, and travel assistance.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Get in touch with our team for safari bookings and travel inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-orange-50 rounded-lg border border-orange-200">
              <Phone className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-700">+254 20 2000 000</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-lg border border-orange-200">
              <Mail className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-700">info@jaetravel.com</p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-lg border border-orange-200">
              <MapPin className="text-orange-500 mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className="text-gray-700">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
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
