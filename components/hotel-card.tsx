"use client";

import Link from "next/link";
import { Star, MapPin, Heart, Share2, ChevronRight, Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Hotel } from "@/lib/data";
import { useState } from "react";
import { toast } from "sonner";

interface HotelCardProps {
  hotel: Hotel;
  index?: number;
}

export function HotelCard({ hotel, index = 0 }: HotelCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(`/hotels/${hotel.id}`);
      setIsCopied(true);
      toast.success("Link copied!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={hotel.image || "/placeholder.svg"}
          alt={hotel.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          quality={70}
        />

        <div className="absolute top-3 right-3 flex gap-2">
          <button
            onClick={(e) => { e.preventDefault(); setIsLiked(!isLiked); }}
            className={`p-2 rounded-full shadow-lg transition-colors ${isLiked ? "bg-red-500 text-white" : "bg-white/95 text-gray-700 hover:bg-red-500 hover:text-white"}`}
            aria-label="Like"
          >
            <Heart size={16} className={isLiked ? "fill-current" : ""} />
          </button>
          <button
            onClick={handleShare}
            className="p-2 bg-white/95 rounded-full shadow-lg text-gray-700 hover:bg-amber-500 hover:text-white transition-colors"
            aria-label="Share"
          >
            {isCopied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
          </button>
        </div>

        <div className="absolute top-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm text-amber-700 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            ${hotel.price}/night
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-amber-600 transition-colors">
          {hotel.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className={i < Math.floor(hotel.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"} />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium">({hotel.rating})</span>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">{hotel.description}</p>

        <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-4">
          <MapPin size={14} className="text-amber-600 flex-shrink-0" />
          <span className="font-medium">{hotel.location}</span>
        </div>

        <Link href={`/hotels/${hotel.id}`} className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base text-center block hover:from-amber-500 hover:to-orange-500 transition-colors">
          View Details
        </Link>
      </div>
    </motion.div>
  );
}