import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">JT</span>
              </div>
              <h3 className="font-bold text-lg">Jaetravel Expeditions</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your gateway to authentic Kenya safari experiences and luxury hotel accommodations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-orange-400 transition">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-gray-400 hover:text-orange-400 transition">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Top Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations/maasai-mara" className="text-gray-400 hover:text-orange-400 transition">
                  Maasai Mara
                </Link>
              </li>
              <li>
                <Link href="/destinations/nairobi" className="text-gray-400 hover:text-orange-400 transition">
                  Nairobi
                </Link>
              </li>
              <li>
                <Link href="/destinations/amboseli" className="text-gray-400 hover:text-orange-400 transition">
                  Amboseli
                </Link>
              </li>
              <li>
                <Link href="/destinations/naivasha" className="text-gray-400 hover:text-orange-400 transition">
                  Naivasha
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+254 20 2000 000</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@jaetravel.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Jaetravel Expeditions. All rights reserved. | Kenya Safari Tours & Hotel Bookings
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
