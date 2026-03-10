// components/hotel-card.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, Heart, ChevronRight } from "lucide-react";

interface HotelCardProps {
  hotel: {
    id: string;
    name: string;
    location: string;
    rating: number;
    reviews: number;
    price: number;
    image: string;
    badge?: string;
    badgeColor?: string;
    amenities: string[];
    description: string;
  };
}

export function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={hotel.image}
          alt={`${hotel.name} - ${hotel.location} Kenya safari hotel`}
          fill
          className="object-cover group-hover:scale-110 transition duration-700"
        />
        {hotel.badge && (
          <div className={`absolute top-3 left-3 ${hotel.badgeColor} text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
            {hotel.badge}
          </div>
        )}
        <button title="Save" className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-white transition shadow-md">
          <Heart size={18} className="text-gray-700" />
        </button>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
            <Star className="text-amber-500 fill-current" size={16} />
            <span className="font-bold text-gray-900">{hotel.rating}</span>
            <span className="text-gray-600 text-sm">({hotel.reviews})</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-3 flex items-center gap-1">
          <MapPin size={14} className="text-gray-500" />
          <span className="font-medium">{hotel.location}</span>
        </p>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{hotel.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {hotel.amenities.slice(0, 3).map((item, i) => (
            <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1.5 rounded-full font-medium">
              {item}
            </span>
          ))}
          {hotel.amenities.length > 3 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1.5 rounded-full font-medium">
              +{hotel.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <div>
            <span className="text-2xl font-bold text-gray-900">${hotel.price}</span>
            <span className="text-gray-600 text-sm font-medium">/night</span>
          </div>
          <Link
            href={`/hotels/${hotel.id}`}
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition flex items-center gap-1.5 shadow-md hover:shadow-lg"
          >
            View Deal
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}