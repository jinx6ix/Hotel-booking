// components/amenities-filter.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Hotel } from '@/lib/data';

interface AmenitiesFilterProps {
  hotels: Hotel[];
}

export function AmenitiesFilter({ hotels }: AmenitiesFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  // Calculate amenity frequency across hotels
  const amenityCounts = new Map<string, number>();
  
  hotels.forEach(hotel => {
    // Count hotel amenities
    hotel.amenities.forEach(amenity => {
      amenityCounts.set(amenity, (amenityCounts.get(amenity) || 0) + 1);
    });
    
    // Count room amenities (weighted)
    hotel.rooms.forEach(room => {
      room.amenities.forEach(amenity => {
        amenityCounts.set(amenity, (amenityCounts.get(amenity) || 0) + 0.5);
      });
    });
  });
  
  // Sort amenities by frequency
  const sortedAmenities = Array.from(amenityCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([amenity]) => amenity);

  // Category definitions
  const categories = {
    All: sortedAmenities,
    Essential: ["WiFi", "Restaurant", "Bar", "Parking", "Room Service", "TV", "Air Conditioning"].filter(a => sortedAmenities.includes(a)),
    Luxury: ["Pool", "Spa", "Gym", "Fine Dining", "Butler Service", "Private Plunge Pools", "Wine Cellar"].filter(a => sortedAmenities.includes(a)),
    Safari: ["Safari Drives", "Game Drives", "Photography", "Guides", "Campfire", "Night Drives", "Walking Safaris"].filter(a => sortedAmenities.includes(a)),
    Accessible: ["Wheelchair Access", "Accessible Features", "Roll-in shower", "Grab bars"].filter(a => sortedAmenities.includes(a)),
    Family: ["Family Rooms", "Kids Activities", "Children's Programs", "Family-friendly"].filter(a => sortedAmenities.includes(a))
  };

  const displayedAmenities = categories[activeCategory as keyof typeof categories] || sortedAmenities;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Filter by Amenities</h2>
        <p className="text-lg text-center text-gray-600 mb-12">Find exactly what you&apos;re looking for</p>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition
                ${activeCategory === category 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-gray-100 hover:bg-amber-100 text-gray-700'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Amenities grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {displayedAmenities.map((amenity, i) => {
            const count = Math.round(amenityCounts.get(amenity) || 0);
            const isPopular = count > 5;
            
            return (
              <Link
                key={i}
                href={`/hotels?amenity=${encodeURIComponent(amenity.toLowerCase().replace(/\s+/g, '-'))}`}
                className={`
                  group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all border shadow-sm
                  ${isPopular 
                    ? 'bg-amber-50 hover:bg-amber-600 border-amber-200 text-amber-700 hover:text-white hover:border-amber-600' 
                    : 'bg-gray-50 hover:bg-amber-600 border-gray-200 text-gray-700 hover:text-white hover:border-amber-600'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {amenity}
                  {count > 0 && (
                    <span className={`
                      text-xs px-1.5 py-0.5 rounded-full
                      ${isPopular 
                        ? 'bg-amber-200 text-amber-800 group-hover:bg-amber-500 group-hover:text-white' 
                        : 'bg-gray-200 text-gray-600 group-hover:bg-amber-500 group-hover:text-white'
                      }
                    `}>
                      {count}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
        
        {/* Popular tags hint */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Popular amenities based on {hotels.length} properties • Click to filter hotels
        </p>
      </div>
    </section>
  );
}