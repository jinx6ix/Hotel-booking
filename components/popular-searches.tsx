"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Star,
  MapPin,
  Users,
  DollarSign,
  Flame,
  ArrowUp,
  ArrowDown,
  Minus,
  Search,
  Sparkles,
  Heart,
  Compass,
} from "lucide-react";
import { hotels } from "@/lib/data";

interface TrendingTerm {
  term: string;
  icon: React.ReactNode;
  category: string;
  count: number;
  trend: "up" | "down" | "stable";
  trendValue: number;
  lastHour: number;
}

const categoryColors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  destinations: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", icon: "bg-emerald-100" },
  experiences: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", icon: "bg-purple-100" },
  amenities: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", icon: "bg-blue-100" },
  price: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", icon: "bg-amber-100" },
  accessibility: { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700", icon: "bg-indigo-100" },
};

const getCategoryColor = (category: string) =>
  categoryColors[category] || categoryColors.experiences;

const safariLocations = [
  "Maasai Mara", "Amboseli", "Nairobi", "Mombasa", "Naivasha",
  "Nakuru", "Tsavo East", "Tsavo West", "Samburu", "Kisumu",
  "Nanyuki", "Diani", "Lamu", "Mount Kenya"
];

export function PopularSearchesEnhanced() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");
  const [trendingTerms, setTrendingTerms] = useState<TrendingTerm[]>([]);
  const [timeframe, setTimeframe] = useState("day");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const terms: TrendingTerm[] = [];

    safariLocations.forEach((locName) => {
      const locationHotels = hotels.filter((h) =>
        h.location.toLowerCase() === locName.toLowerCase() ||
        h.location.toLowerCase().includes(locName.toLowerCase())
      );

      if (locationHotels.length > 0) {
        const avgRating = locationHotels.reduce((sum, h) => sum + h.rating, 0) / locationHotels.length;

        let trend: "up" | "down" | "stable" = "stable";
        let trendValue = 0;

        if (avgRating > 4.7) {
          trend = "up";
          trendValue = Math.floor(Math.random() * 30) + 20;
        } else if (avgRating < 4.3) {
          trend = "down";
          trendValue = Math.floor(Math.random() * 20) + 10;
        } else {
          trendValue = Math.floor(Math.random() * 10) + 5;
        }

        terms.push({
          term: `${locName} hotels`,
          icon: <MapPin size={16} />,
          category: "destinations",
          count: locationHotels.length,
          trend,
          trendValue,
          lastHour: Math.floor(Math.random() * 50) + 10,
        });
      }
    });

    const luxuryHotels = hotels.filter((h) => h.price > 400);
    if (luxuryHotels.length > 0) {
      terms.push({
        term: "luxury safari lodges",
        icon: <Star size={16} />,
        category: "experiences",
        count: luxuryHotels.length,
        trend: "up",
        trendValue: 45,
        lastHour: Math.floor(Math.random() * 30) + 20,
      });
    }

    const budgetHotels = hotels.filter((h) => h.price < 200);
    if (budgetHotels.length > 0) {
      terms.push({
        term: "budget safari accommodation",
        icon: <DollarSign size={16} />,
        category: "price",
        count: budgetHotels.length,
        trend: "up",
        trendValue: 28,
        lastHour: Math.floor(Math.random() * 20) + 10,
      });
    }

    const accessibleHotels = hotels.filter((h) =>
      h.rooms?.some((r) => r.accessible)
    );
    if (accessibleHotels.length > 0) {
      terms.push({
        term: "wheelchair accessible safari",
        icon: <Users size={16} />,
        category: "accessibility",
        count: accessibleHotels.length,
        trend: "up",
        trendValue: 67,
        lastHour: Math.floor(Math.random() * 15) + 5,
      });
    }

    const familyHotels = hotels.filter((h) =>
      h.rooms?.some((r) => r.maxOccupancy >= 4)
    );
    if (familyHotels.length > 0) {
      terms.push({
        term: "family safari hotels",
        icon: <Users size={16} />,
        category: "experiences",
        count: familyHotels.length,
        trend: "up",
        trendValue: 52,
        lastHour: Math.floor(Math.random() * 40) + 15,
      });
    }

    terms.push({
      term: "honeymoon safari packages",
      icon: <Heart size={16} />,
      category: "experiences",
      count: 28,
      trend: "up",
      trendValue: 73,
      lastHour: Math.floor(Math.random() * 25) + 10,
    });

    const poolHotels = hotels.filter((h) => h.amenities?.includes("Pool"));
    if (poolHotels.length > 0) {
      terms.push({
        term: "hotels with swimming pool",
        icon: <Sparkles size={16} />,
        category: "amenities",
        count: poolHotels.length,
        trend: "stable",
        trendValue: 12,
        lastHour: Math.floor(Math.random() * 30) + 10,
      });
    }

    const spaHotels = hotels.filter((h) => h.amenities?.includes("Spa"));
    if (spaHotels.length > 0) {
      terms.push({
        term: "safari lodges with spa",
        icon: <Sparkles size={16} />,
        category: "amenities",
        count: spaHotels.length,
        trend: "up",
        trendValue: 34,
        lastHour: Math.floor(Math.random() * 20) + 5,
      });
    }

    const wifiHotels = hotels.filter((h) => h.amenities?.includes("WiFi"));
    if (wifiHotels.length > 0) {
      terms.push({
        term: "safari lodges with WiFi",
        icon: <TrendingUp size={16} />,
        category: "amenities",
        count: wifiHotels.length,
        trend: "up",
        trendValue: 23,
        lastHour: Math.floor(Math.random() * 40) + 15,
      });
    }

    const gameDrivesHotels = hotels.filter((h) =>
      h.amenities?.some((a) => a.toLowerCase().includes("game") || a.toLowerCase().includes("safari"))
    );
    if (gameDrivesHotels.length > 0) {
      terms.push({
        term: "game drives included",
        icon: <Compass size={16} />,
        category: "experiences",
        count: gameDrivesHotels.length,
        trend: "up",
        trendValue: 58,
        lastHour: Math.floor(Math.random() * 35) + 20,
      });
    }

    terms.sort((a, b) => b.trendValue - a.trendValue);
    setTrendingTerms(terms);
  }, []);

  const categories = [
    { id: "all", name: "All Trends", icon: <TrendingUp size={16} />, count: trendingTerms.length },
    { id: "destinations", name: "Destinations", icon: <MapPin size={16} />, count: trendingTerms.filter(t => t.category === "destinations").length },
    { id: "experiences", name: "Experiences", icon: <Star size={16} />, count: trendingTerms.filter(t => t.category === "experiences").length },
    { id: "amenities", name: "Amenities", icon: <Sparkles size={16} />, count: trendingTerms.filter(t => t.category === "amenities").length },
    { id: "price", name: "Price Range", icon: <DollarSign size={16} />, count: trendingTerms.filter(t => t.category === "price").length },
    { id: "accessibility", name: "Accessible", icon: <Users size={16} />, count: trendingTerms.filter(t => t.category === "accessibility").length },
  ];

  const filteredTerms =
    activeCategory === "all"
      ? trendingTerms
      : trendingTerms.filter((term) => term.category === activeCategory);

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <ArrowUp size={14} className="text-green-500" />;
    if (trend === "down") return <ArrowDown size={14} className="text-red-500" />;
    return <Minus size={14} className="text-gray-400" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Flame className="text-amber-600" size={20} />
            </motion.div>
            <span className="text-amber-800 font-semibold text-sm">
              Trending Now
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trending Searches
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what safari travelers are searching for right now
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-lg border border-gray-100">
            {[
              { id: "hour", label: "Past Hour" },
              { id: "day", label: "Past 24 Hours" },
              { id: "week", label: "This Week" },
            ].map((tf) => (
              <motion.button
                key={tf.id}
                onClick={() => setTimeframe(tf.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  px-5 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all relative
                  ${
                    timeframe === tf.id
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                {tf.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all border-2
                ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg border-transparent"
                    : "bg-white text-gray-700 hover:bg-amber-50 border-gray-200 hover:border-amber-300"
                }
              `}
            >
              <motion.span
                animate={{
                  rotate: activeCategory === cat.id ? 360 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {cat.icon}
              </motion.span>
              {cat.name}
              {cat.count > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === cat.id ? "bg-white/20" : "bg-gray-100"}`}>
                  {cat.count}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredTerms.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <p className="text-gray-600 font-medium">No trending searches in this category</p>
              </motion.div>
            ) : (
              filteredTerms.map((term, i) => {
                const colors = getCategoryColor(term.category);
                const isHovered = hoveredIndex === i;

                return (
                  <motion.div
                    key={term.term + i}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.button
                      onClick={() =>
                        router.push(
                          `/hotels/search?q=${encodeURIComponent(term.term)}`
                        )
                      }
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        group w-full bg-white p-5 rounded-2xl border-2 text-left transition-all duration-300 overflow-hidden relative
                        ${isHovered ? `${colors.border} shadow-xl` : "border-gray-100 shadow-sm hover:shadow-md"}
                      `}
                    >
                      <motion.div
                        className={`absolute inset-0 opacity-0 ${colors.bg}`}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <motion.div
                            className="flex items-center gap-3"
                            animate={{
                              x: isHovered ? 5 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              className={`p-2.5 rounded-xl ${colors.icon} ${colors.text} transition-all`}
                              animate={{
                                scale: isHovered ? 1.1 : 1,
                                rotate: isHovered ? 5 : 0,
                              }}
                            >
                              {term.icon}
                            </motion.div>
                            <div>
                              <h3
                                className={`font-bold text-base ${isHovered ? colors.text : "text-gray-900"} transition-colors`}
                              >
                                {term.term}
                              </h3>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {term.count} properties
                              </p>
                            </div>
                          </motion.div>

                          <motion.div
                            className={`
                              flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold
                              ${
                                term.trend === "up"
                                  ? "bg-green-100 text-green-700"
                                  : term.trend === "down"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-gray-100 text-gray-600"
                              }
                            `}
                            animate={{
                              scale: isHovered ? 1.1 : 1,
                            }}
                          >
                            {getTrendIcon(term.trend)}
                            <span>{term.trendValue}%</span>
                          </motion.div>
                        </div>

                        <motion.div
                          className="flex items-center justify-between pt-3 border-t border-gray-100"
                          animate={{
                            borderColor: isHovered ? "#fbbf24" : "#f3f4f6",
                          }}
                        >
                          <motion.span
                            className="flex items-center gap-1.5 text-xs text-gray-500"
                            animate={{
                              x: isHovered ? 5 : 0,
                            }}
                          >
                            <Clock size={12} />
                            {term.lastHour} searches
                          </motion.span>

                          <motion.span
                            className="flex items-center gap-1 text-sm font-bold text-amber-600 group-hover:text-amber-700"
                            animate={{
                              x: isHovered ? [0, 5, 0] : 0,
                            }}
                            transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                          >
                            <Search size={14} />
                            Search
                            <ChevronAnimated />
                          </motion.span>
                        </motion.div>
                      </div>

                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{
                          x: isHovered ? ["-100%", "100%"] : ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatDelay: 1.5,
                        }}
                      />
                    </motion.button>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 p-6 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-3xl border border-amber-100 shadow-inner"
        >
          {[
            { value: "1,247+", label: "Verified Reviews" },
            { value: `${hotels.length}+`, label: "Properties" },
            { value: "4.8★", label: "Average Rating" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ChevronAnimated() {
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 0.6, repeat: Infinity }}
    >
      <motion.path d="M9 18l6-6-6-6" />
    </motion.svg>
  );
}