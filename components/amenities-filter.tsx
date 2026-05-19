"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Hotel } from "@/lib/data";
import {
  Wifi,
  UtensilsCrossed,
  Wine,
  Car,
  Sparkles,
  Eye,
  Users,
  Accessibility,
  TreePine,
  Waves,
  Dumbbell,
  Camera,
  ChevronDown,
  Check,
} from "lucide-react";

interface AmenitiesFilterProps {
  hotels: Hotel[];
}

const amenityIcons: Record<string, React.ReactNode> = {
  WiFi: <Wifi className="w-4 h-4" />,
  Restaurant: <UtensilsCrossed className="w-4 h-4" />,
  Bar: <Wine className="w-4 h-4" />,
  Parking: <Car className="w-4 h-4" />,
  Pool: <Waves className="w-4 h-4" />,
  Spa: <Sparkles className="w-4 h-4" />,
  Gym: <Dumbbell className="w-4 h-4" />,
  "Game Drives": <Eye className="w-4 h-4" />,
  "Safari Drives": <Eye className="w-4 h-4" />,
  "Family Rooms": <Users className="w-4 h-4" />,
  "Wheelchair Access": <Accessibility className="w-4 h-4" />,
  Photography: <Camera className="w-4 h-4" />,
  Campfire: <Sparkles className="w-4 h-4" />,
  "Fine Dining": <UtensilsCrossed className="w-4 h-4" />,
};

const getIcon = (amenity: string) =>
  amenityIcons[amenity] || <Sparkles className="w-4 h-4" />;

const popularAmenities = [
  "WiFi",
  "Restaurant",
  "Pool",
  "Spa",
  "Bar",
  "Parking",
  "Game Drives",
  "Safari Drives",
  "Family Rooms",
  "Wheelchair Access",
];

const categoryColors: Record<string, { bg: string; border: string; text: string; hover: string; badge: string }> = {
  WiFi: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", hover: "hover:bg-blue-600", badge: "bg-blue-100 text-blue-700" },
  Restaurant: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", hover: "hover:bg-green-600", badge: "bg-green-100 text-green-700" },
  Pool: { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700", hover: "hover:bg-cyan-600", badge: "bg-cyan-100 text-cyan-700" },
  Spa: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", hover: "hover:bg-purple-600", badge: "bg-purple-100 text-purple-700" },
  Bar: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", hover: "hover:bg-amber-600", badge: "bg-amber-100 text-amber-700" },
  Parking: { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-700", hover: "hover:bg-gray-600", badge: "bg-gray-100 text-gray-700" },
  "Game Drives": { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", hover: "hover:bg-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
  "Safari Drives": { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", hover: "hover:bg-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
  "Family Rooms": { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", hover: "hover:bg-pink-600", badge: "bg-pink-100 text-pink-700" },
  "Wheelchair Access": { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700", hover: "hover:bg-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
};

const getColor = (amenity: string) =>
  categoryColors[amenity] || {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    hover: "hover:bg-amber-600",
    badge: "bg-amber-100 text-amber-700",
  };

export function AmenitiesFilter({ hotels }: AmenitiesFilterProps) {
  const [showAll, setShowAll] = useState(false);
  const [hoveredAmenity, setHoveredAmenity] = useState<string | null>(null);

  const amenityCounts = new Map<string, number>();
  hotels.forEach((hotel) => {
    hotel.amenities.forEach((amenity) => {
      amenityCounts.set(amenity, (amenityCounts.get(amenity) || 0) + 1);
    });
    hotel.rooms.forEach((room) => {
      room.amenities.forEach((amenity) => {
        amenityCounts.set(amenity, (amenityCounts.get(amenity) || 0) + 0.5);
      });
    });
  });

  const sortedAmenities = Array.from(amenityCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([amenity]) => amenity);

  const displayedAmenities = showAll ? sortedAmenities : popularAmenities.filter((a) => sortedAmenities.includes(a));

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Filter by Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect stay with our curated amenity filters
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {displayedAmenities.map((amenity, index) => {
            const count = Math.round(amenityCounts.get(amenity) || 0);
            const colors = getColor(amenity);
            const isHovered = hoveredAmenity === amenity;

            return (
              <motion.div
                key={amenity}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredAmenity(amenity)}
                onMouseLeave={() => setHoveredAmenity(null)}
              >
                <Link
                  href={`/hotels?amenity=${encodeURIComponent(amenity.toLowerCase().replace(/\s+/g, "-"))}`}
                  className={`
                    group relative flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-semibold 
                    transition-all duration-300 border-2 overflow-hidden
                    ${colors.bg} ${colors.border} ${colors.text}
                    ${isHovered ? `${colors.hover} ${colors.text.replace("-700", "-100")} shadow-lg scale-105` : "shadow-sm hover:shadow-md"}
                  `}
                  style={{
                    transform: isHovered ? "translateY(-4px) scale(1.05)" : "translateY(0) scale(1)",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: isHovered ? 360 : 0,
                      scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {getIcon(amenity)}
                  </motion.div>

                  <span className="relative z-10">{amenity}</span>

                  <motion.span
                    animate={{
                      scale: isHovered ? 0 : 1,
                      opacity: isHovered ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`
                      text-xs px-2.5 py-1 rounded-full font-medium
                      ${colors.badge}
                    `}
                  >
                    {count}
                  </motion.span>

                  <motion.div
                    className={`
                      absolute inset-0 opacity-0 transition-opacity duration-300
                      ${colors.hover}
                    `}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  />

                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: isHovered ? ["-100%", "100%"] : ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />

                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-white" />
                    </motion.div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-medium hover:border-amber-500 hover:text-amber-600 transition-all duration-300 shadow-sm hover:shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{showAll ? "Show Less" : `Show All ${sortedAmenities.length} Amenities`}</span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <AnimatePresence mode="wait">
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap justify-center gap-3 pt-4 max-w-4xl">
                  {sortedAmenities
                    .filter((a) => !popularAmenities.includes(a))
                    .map((amenity, index) => {
                      const count = Math.round(amenityCounts.get(amenity) || 0);
                      return (
                        <motion.div
                          key={amenity}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.02 }}
                        >
                          <Link
                            href={`/hotels?amenity=${encodeURIComponent(amenity.toLowerCase().replace(/\s+/g, "-"))}`}
                            className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-sm"
                          >
                            {getIcon(amenity)}
                            <span>{amenity}</span>
                            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full group-hover:bg-gray-300">
                              {count}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center text-gray-500 text-sm mt-4">
            Curated from {hotels.length} properties across Kenya
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}