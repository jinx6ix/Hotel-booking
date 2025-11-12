import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4">Jaetravel Expeditions</h4>
            <p className="text-sm">Premium safari tours and hotel bookings across Kenya's finest destinations.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/destinations" className="hover:text-orange-400 transition">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-orange-400 transition">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-400 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-400 transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-400 transition">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2025 Jaetravel Expeditions. All rights reserved. | Kenya Safari Tours & Hotel Bookings</p>
        </div>
      </div>
    </footer>
  )
}
