"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { SearchComponent } from "./search-component"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const locations = [
    { name: "Nairobi", slug: "nairobi" },
    { name: "Naivasha", slug: "naivasha" },
    { name: "Nakuru", slug: "nakuru" },
    { name: "Samburu", slug: "samburu" },
    { name: "Nanyuki", slug: "nanyuki" },
    { name: "Maasai Mara", slug: "maasai-mara" },
    { name: "Amboseli", slug: "amboseli" },
    { name: "Tsavo East", slug: "tsavo-east" },
    { name: "Tsavo West", slug: "tsavo-west" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">JT</span>
            </div>
            <span className="font-bold text-xl text-orange-500 hidden sm:inline">Jaetravel</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-black hover:text-orange-300 font-medium transition">
              Home
            </Link>
            <div className="relative group">
              <button className="text-black hover:text-orange-300 font-medium transition" title="Destinations">Destinations</button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {locations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/destinations/${loc.slug}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500 first:rounded-t-lg last:rounded-b-lg transition"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/car-hire" className="text-black hover:text-orange-300 font-medium transition">
              Car Hire
            </Link>
            <Link href="/about" className="text-black hover:text-orange-300 font-medium transition">
              About
            </Link>
            <Link href="/blog" className="text-black hover:text-orange-300 font-medium transition">
              Blog
            </Link>
            <Link href="/faq" className="text-black hover:text-orange-300 font-medium transition">
              FAQ
            </Link>
            <button onClick={() => setShowSearch(!showSearch)} className="text-black hover:text-orange-300 transition" title="Search">
              <Search size={20} />
            </button>
            <Link
              href="/contact"
              className="bg-orange-500 text-black px-6 py-2 rounded-lg hover:bg-orange-600 transition font-medium"
            >
              Book
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-orange-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="pb-4">
            <SearchComponent />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <Link
              href="/"
              className="block px-4 py-2 text-white hover:text-orange-300 hover:bg-white/5 rounded transition"
            >
              Home
            </Link>
            <Link
              href="/car-hire"
              className="block px-4 py-2 text-white hover:text-orange-300 hover:bg-white/5 rounded transition"
            >
              Car Hire
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-white hover:text-orange-300 hover:bg-white/5 rounded transition"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 text-white hover:text-orange-300 hover:bg-white/5 rounded transition"
            >
              Blog
            </Link>
            <div className="px-4 py-2">
              <p className="font-medium text-white mb-2">Destinations</p>
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/destinations/${loc.slug}`}
                  className="block px-4 py-1 text-gray-300 hover:text-orange-300 text-sm"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
            <Link
              href="/faq"
              className="block px-4 py-2 text-white hover:text-orange-300 hover:bg-white/5 rounded transition"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block mx-4 mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-medium text-center"
            >
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
