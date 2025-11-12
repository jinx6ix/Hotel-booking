"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { hotels, locations } from "@/lib/data"
import { Search, X } from "lucide-react"

export function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return { hotels: [], locations: [] }

    const query = searchQuery.toLowerCase()

    const filteredHotels = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(query) ||
        hotel.location.toLowerCase().includes(query) ||
        hotel.description.toLowerCase().includes(query),
    )

    const filteredLocations = locations.filter(
      (loc) => loc.name.toLowerCase().includes(query) || loc.description.toLowerCase().includes(query),
    )

    return { hotels: filteredHotels.slice(0, 5), locations: filteredLocations.slice(0, 5) }
  }, [searchQuery])

  return (
    <div className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search hotels, destinations..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("")
              setIsOpen(false)
            }}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && searchQuery.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
          {filteredResults.locations.length > 0 && (
            <div className="border-b">
              <div className="px-4 py-2 bg-gray-50 font-semibold text-gray-700 text-sm">Destinations</div>
              {filteredResults.locations.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/destinations/${loc.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-orange-50 text-gray-700 hover:text-orange-600 transition"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          )}

          {filteredResults.hotels.length > 0 && (
            <div>
              <div className="px-4 py-2 bg-gray-50 font-semibold text-gray-700 text-sm">Hotels</div>
              {filteredResults.hotels.map((hotel) => (
                <Link
                  key={hotel.id}
                  href={`/hotels/${hotel.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 hover:bg-orange-50 border-b last:border-b-0 transition"
                >
                  <div className="font-medium text-gray-900">{hotel.name}</div>
                  <div className="text-sm text-gray-600">{hotel.location}</div>
                </Link>
              ))}
            </div>
          )}

          {filteredResults.hotels.length === 0 && filteredResults.locations.length === 0 && (
            <div className="px-4 py-4 text-center text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  )
}
