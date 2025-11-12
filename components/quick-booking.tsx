"use client"

import type React from "react"

import { useState } from "react"
import { hotels, locations } from "@/lib/data"

export function QuickBooking() {
  const [destination, setDestination] = useState("")
  const [hotel, setHotel] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [adults, setAdults] = useState("1")
  const [children, setChildren] = useState("0")
  const [rooms, setRooms] = useState("1")

  const filteredHotels = destination ? hotels.filter((h) => h.location.toLowerCase() === destination.toLowerCase()) : []

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({
      destination,
      hotel,
      checkIn,
      checkOut,
      adults,
      children,
      rooms,
    })
  }

  return (
    <form onSubmit={handleBooking} className="bg-white/95 backdrop-blur rounded-lg shadow-2xl p-4 max-w-7xl">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Booking</h3>

      <div className="flex flex-wrap gap-2 items-end">
        <div className="flex-1 min-w-[140px]">
          <label className="block text-xs font-bold text-gray-800 mb-1 uppercase">Destination</label>
          <select
            title="Destination"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value)
              setHotel("")
            }}
            className="w-full px-3 py-2 text-orange-400 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
            required
          >
            <option value="">Select...</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[140px]">
          <label className="block text-xs font-bold text-gray-800 mb-1 uppercase">Hotel</label>
          <select
            title="Hotel"
            value={hotel}
            onChange={(e) => setHotel(e.target.value)}
            className="w-full text-orange-400 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
            disabled={!destination}
            required
          >
            <option value="">Select...</option>
            {filteredHotels.map((h) => (
              <option key={h.id} value={h.name}>
                {h.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[120px]">
          <label className="block text-xs font-bold text-gray-800 mb-1 uppercase">Check-in</label>
          <input
            title="Check-in"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full text-orange-400 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
            required
          />
        </div>

        <div className="flex-1 min-w-[120px]">
          <label className="block text-xs font-bold text-gray-800 mb-1 uppercase">Check-out</label>
          <input
            title="Check-out"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full text-orange-400 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
            required
          />
        </div>

        <div className="flex-1 min-w-[100px]">
          <label className="block text-xs font-bold text-gray-800 mb-1 uppercase">Adults</label>
          <select
            title="Adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full text-orange-400 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n.toString()}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[100px]">
          <label className="block text-xs font-bold text-gray-800 mb-1 uppercase">Children</label>
          <select
            title="Children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="w-full text-orange-400 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
          >
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n.toString()}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 min-w-[100px]">
          <label className="block text-xs font-bold text-gray-800 mb-1 uppercase">Rooms</label>
          <select
            title="Rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="w-full text-orange-400 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n.toString()}>
                {n}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition transform hover:scale-105 whitespace-nowrap text-sm"
        >
          Book Now
        </button>
      </div>
    </form>
  )
}
