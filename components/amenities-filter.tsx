"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Hotel } from "@/lib/data";
import { Wifi, UtensilsCrossed, Sparkles, ChevronDown, Check } from "lucide-react";

interface AmenitiesFilterProps {
  hotels: Hotel[];
}

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="w-4 h-4" />,
  Restaurant: <UtensilsCrossed className="w-4 h-4" />,
  Pool: <Sparkles className="w-4 h-4" />,
  Spa: <Sparkles className="w-4 h-4" />,
};

const getIcon = (amenity: string) => amenityIcons[amenity] || <Sparkles className="w-4 h-4" />;

export function AmenitiesFilter({ hotels }: AmenitiesFilterProps) {
  const [showAll, setShowAll] = useState(false);

  const amenityCounts = new Map<string, number>();
  hotels.forEach((hotel) => {
    hotel.amenities.forEach((amenity) => {
      amenityCounts.set(amenity, (amenityCounts.get(amenity) || 0) + 1);
    });
  });

  const sortedAmenities = Array.from(amenityCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([amenity]) => amenity);

  const popularAmenities = sortedAmenities.slice(0, 10);
  const displayedAmenities = showAll ? sortedAmenities : popularAmenities;

  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Filter by Amenities</h2>
        <p className="text-lg text-center text-gray-600 mb-8">Find exactly what you&apos;re looking for</p>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {displayedAmenities.map((amenity, i) => {
            const count = amenityCounts.get(amenity) || 0;
            return (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={`/hotels?amenity=${encodeURIComponent(amenity.toLowerCase().replace(/\s+/g, "-"))}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700 transition-colors"
                >
                  {getIcon(amenity)}
                  {amenity}
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{count}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:border-amber-500 hover:text-amber-600 transition-colors"
          >
            <span>{showAll ? "Show Less" : `Show All ${sortedAmenities.length} Amenities`}</span>
            <motion.div animate={{ rotate: showAll ? 180 : 0 }}>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </section>
  );
}