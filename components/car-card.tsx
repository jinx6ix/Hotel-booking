// components/car-card.tsx
import Link from "next/link"
import Image from "next/image"
import { Users, Camera, Accessibility } from "lucide-react"

interface Vehicle {
  slug: string
  name: string
  price: string
  passengers: number
  features: string[]
  bestFor: string
  image: string
}

export function CarCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Link
      href={`/car-hire/${vehicle.slug}`}
      className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-64">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} - Safari Vehicle Hire Kenya`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {vehicle.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
          {vehicle.name}
        </h3>
        <p className="text-gray-600 mb-4">{vehicle.bestFor}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" /> {vehicle.passengers} seats
          </span>
          {vehicle.slug.includes("accessible") && (
            <span className="flex items-center gap-1 text-blue-600">
              <Accessibility className="w-4 h-4" /> Accessible
            </span>
          )}
          {vehicle.slug.includes("photography") && (
            <span className="flex items-center gap-1 text-purple-600">
              <Camera className="w-4 h-4" /> Photography
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {vehicle.features.map((f) => (
            <span
              key={f}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}