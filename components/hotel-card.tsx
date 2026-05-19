"use client";

import Link from "next/link";
import { Star, MapPin, Heart, Share2, ChevronRight, Link2, Check } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Hotel } from "@/lib/data";
import { useRef, useState, useEffect } from "react";
import { toast } from "sonner";

interface HotelCardProps {
  hotel: Hotel;
  index?: number;
}

export function HotelCard({ hotel, index = 0 }: HotelCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouchDevice) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / (rect.width / 2));
    y.set((e.clientY - centerY) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const shareUrl = `/hotels/${hotel.id}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <motion.div
        style={!isTouchDevice ? { rotateX, rotateY } : undefined}
        animate={{
          scale: isHovered ? 1.02 : 1,
          boxShadow: isHovered
            ? "-15px 15px 40px rgba(0,0,0,0.12)"
            : "0 4px 15px rgba(0,0,0,0.06)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer"
      >
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={hotel.image || "/placeholder.svg"}
              alt={hotel.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              quality={75}
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-start"
          >
            <motion.div
              className="bg-white/95 backdrop-blur-sm text-amber-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg"
            >
              ${hotel.price}/night
            </motion.div>

            <div className="flex gap-1.5 sm:gap-2">
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  setIsLiked(!isLiked);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-1.5 sm:p-2 rounded-full shadow-lg backdrop-blur-sm transition-all ${
                  isLiked ? "bg-red-500 text-white" : "bg-white/95 text-gray-700 hover:bg-red-500 hover:text-white"
                }`}
                aria-label={isLiked ? "Unlike" : "Like"}
              >
                <Heart size={16} className={isLiked ? "fill-current" : ""} />
              </motion.button>

              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1.5 sm:p-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg text-gray-700 hover:bg-amber-500 hover:text-white transition-all"
                aria-label="Share"
              >
                {isCopied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4"
          >
            <div className="flex flex-wrap gap-1">
              {hotel.amenities.slice(0, 3).map((amenity, i) => (
                <motion.span
                  key={amenity}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isHovered ? 1 : 0, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2 py-0.5 sm:py-1 rounded-full"
                >
                  {amenity}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="p-4 sm:p-5">
          <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-1 sm:mb-2 line-clamp-1 group-hover:text-amber-600 transition-colors">
            {hotel.name}
          </h3>

          <div className="flex items-center gap-1 mb-2 sm:mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className={
                    i < Math.floor(hotel.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-gray-600 font-medium">({hotel.rating})</span>
          </div>

          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
            {hotel.description}
          </p>

          <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5">
            <MapPin size={14} className="text-amber-600 flex-shrink-0" />
            <span className="font-medium">{hotel.location}</span>
          </div>

          <Link
            href={`/hotels/${hotel.id}`}
            className="group/btn w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2.5 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-center block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Details
              <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-amber-400/30"
        />
      </motion.div>
    </motion.div>
  );
}