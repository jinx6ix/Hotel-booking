"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { TrendingUp, Clock, Flame, ArrowUp, Search, Star, MapPin, Sparkles, Heart, Users } from "lucide-react";
import { hotels } from "@/lib/data";

interface TrendingTerm {
  term: string;
  icon: React.ReactNode;
  category: string;
  count: number;
  trendValue: number;
}

const safariLocations = ["Maasai Mara", "Amboseli", "Nairobi", "Mombasa", "Naivasha", "Nakuru", "Tsavo", "Samburu"];

export function PopularSearchesEnhanced() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");
  const [trendingTerms, setTrendingTerms] = useState<TrendingTerm[]>([]);

  useEffect(() => {
    const terms: TrendingTerm[] = [];

    safariLocations.forEach((locName) => {
      const locationHotels = hotels.filter((h) => h.location.toLowerCase().includes(locName.toLowerCase()));
      if (locationHotels.length > 0) {
        terms.push({ term: `${locName} hotels`, icon: <MapPin size={16} />, category: "destinations", count: locationHotels.length, trendValue: 30 });
      }
    });

    const luxuryHotels = hotels.filter((h) => h.price > 400);
    if (luxuryHotels.length > 0) {
      terms.push({ term: "luxury safari lodges", icon: <Star size={16} />, category: "experiences", count: luxuryHotels.length, trendValue: 45 });
    }

    const poolHotels = hotels.filter((h) => h.amenities?.includes("Pool"));
    if (poolHotels.length > 0) {
      terms.push({ term: "hotels with pool", icon: <Sparkles size={16} />, category: "amenities", count: poolHotels.length, trendValue: 35 });
    }

    const familyHotels = hotels.filter((h) => h.rooms?.some((r) => r.maxOccupancy >= 4));
    if (familyHotels.length > 0) {
      terms.push({ term: "family safari hotels", icon: <Users size={16} />, category: "experiences", count: familyHotels.length, trendValue: 52 });
    }

    terms.push({ term: "honeymoon safari", icon: <Heart size={16} />, category: "experiences", count: 28, trendValue: 73 });

    terms.sort((a, b) => b.trendValue - a.trendValue);
    setTrendingTerms(terms);
  }, []);

  const categories = [
    { id: "all", name: "All Trends", icon: <TrendingUp size={16} /> },
    { id: "destinations", name: "Destinations", icon: <MapPin size={16} /> },
    { id: "experiences", name: "Experiences", icon: <Star size={16} /> },
    { id: "amenities", name: "Amenities", icon: <Sparkles size={16} /> },
  ];

  const filteredTerms = activeCategory === "all" ? trendingTerms : trendingTerms.filter((t) => t.category === activeCategory);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
            <Flame className="text-amber-600" size={18} />
            <span className="text-amber-800 font-semibold text-sm">Trending Now</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Searches</h2>
          <p className="text-lg text-gray-600">Discover what travelers are searching for</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.id ? "bg-amber-600 text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-amber-50"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTerms.map((term, i) => (
            <motion.button
              key={term.term}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => router.push(`/hotels/search?q=${encodeURIComponent(term.term)}`)}
              className="w-full bg-white p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-amber-100 rounded-lg text-amber-700">{term.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-amber-700">{term.term}</h3>
                    <p className="text-xs text-gray-500">{term.count} properties</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                  <ArrowUp size={12} /> {term.trendValue}%
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}