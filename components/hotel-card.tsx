"use client"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import Image from "next/image"
import type { Hotel } from "@/lib/data"

interface HotelCardProps {
  hotel: Hotel
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-200">
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={hotel.image || "/placeholder.svg"}
          alt={hotel.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
          loading="lazy"
          quality={75}
        />
        <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${hotel.price}/night
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{hotel.name}</h3>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(hotel.rating) ? "fill-orange-400 text-orange-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({hotel.rating})</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{hotel.description}</p>

        <div className="flex items-center gap-1 text-gray-600 text-sm mb-4">
          <MapPin size={16} />
          <span>{hotel.location}</span>
        </div>

        <Link
          href={`/hotels/${hotel.id}`}
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-medium text-center block"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}
