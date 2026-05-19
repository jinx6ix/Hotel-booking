"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, ChevronRight, Star } from "lucide-react";
import { SearchBar } from "@/components/search-bar";
import { HotelCard } from "@/components/hotel-card";
import { AmenitiesFilter } from "@/components/amenities-filter";
import { PopularSearchesEnhanced } from "@/components/popular-searches";
import { PageLoader } from "@/components/page-loader";
import { hotels } from "@/lib/data";
import {
  Shield,
  Sparkles,
  Clock,
  Users,
  Gift,
  CheckCircle2,
  CreditCard,
  Mail,
  Phone,
} from "lucide-react";

const destinations = [
  {
    id: "maasai-mara",
    name: "Maasai Mara",
    description: "Great Migration, Big Cats, Hot Air Balloons",
    count: 45,
    image: "/maasai-mara.jpeg",
    slug: "maasai-mara",
    color: "from-amber-600 to-amber-800",
    lightColor: "bg-amber-50",
    borderColor: "border-amber-200",
    textColor: "text-amber-700",
    badgeColor: "bg-amber-100 text-amber-800",
    priceFrom: 380,
    properties: [
      { name: "Angama Mara", rating: 4.9, price: 1200, type: "Luxury Lodge" },
      { name: "Keekorok Lodge", rating: 4.5, price: 380, type: "Mid-Range" },
      { name: "Mara Serena", rating: 4.6, price: 450, type: "Lodge" },
    ],
  },
  {
    id: "amboseli",
    name: "Amboseli",
    description: "Kilimanjaro Views, Elephant Herds",
    count: 28,
    image: "/amboseli.avif",
    slug: "amboseli",
    color: "from-blue-600 to-blue-800",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-700",
    badgeColor: "bg-blue-100 text-blue-800",
    priceFrom: 350,
    properties: [
      { name: "Ol Tukai Lodge", rating: 4.7, price: 420, type: "Lodge" },
      { name: "Amboseli Serena", rating: 4.5, price: 350, type: "Lodge" },
      { name: "Tortilis Camp", rating: 4.8, price: 650, type: "Luxury Camp" },
    ],
  },
  {
    id: "tsavo",
    name: "Tsavo East & West",
    description: "Red Elephants, Lava Fields, Man-Eaters",
    count: 34,
    image: "/tsavo-east.jpeg",
    slug: "tsavo-east",
    color: "from-orange-600 to-orange-800",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-700",
    badgeColor: "bg-orange-100 text-orange-800",
    priceFrom: 190,
    properties: [
      { name: "Finch Hattons", rating: 4.9, price: 850, type: "Luxury Lodge" },
      { name: "Ashnil Aruba", rating: 4.4, price: 280, type: "Lodge" },
      { name: "Voi Safari Lodge", rating: 4.2, price: 190, type: "Lodge" },
    ],
  },
  {
    id: "samburu",
    name: "Samburu",
    description: "Special Five, Grevy's Zebra, Culture",
    count: 22,
    image: "/samburu.webp",
    slug: "samburu",
    color: "from-emerald-600 to-emerald-800",
    lightColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-700",
    badgeColor: "bg-emerald-100 text-emerald-800",
    priceFrom: 320,
    properties: [
      { name: "Saruni Samburu", rating: 4.9, price: 950, type: "Luxury Lodge" },
      { name: "Ashnil Samburu", rating: 4.5, price: 320, type: "Lodge" },
      { name: "Elephant Bedroom", rating: 4.7, price: 580, type: "Luxury Camp" },
    ],
  },
  {
    id: "nakuru",
    name: "Lake Nakuru",
    description: "Flamingos, Rhinos, Waterfalls",
    count: 16,
    image: "/lake-nakuru-lodge.jpg",
    slug: "nakuru",
    color: "from-rose-600 to-rose-800",
    lightColor: "bg-rose-50",
    borderColor: "border-rose-200",
    textColor: "text-rose-700",
    badgeColor: "bg-rose-100 text-rose-800",
    priceFrom: 220,
    properties: [
      { name: "Sarova Lion Hill", rating: 4.4, price: 280, type: "Lodge" },
      { name: "Lake Nakuru Lodge", rating: 4.3, price: 220, type: "Lodge" },
      { name: "Mbweha Camp", rating: 4.6, price: 310, type: "Camp" },
    ],
  },
  {
    id: "nairobi",
    name: "Nairobi",
    description: "City Safaris, Giraffe Centre, Karen Blixen",
    count: 38,
    image: "/nairobi.avif",
    slug: "nairobi",
    color: "from-purple-600 to-purple-800",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-700",
    badgeColor: "bg-purple-100 text-purple-800",
    priceFrom: 180,
    properties: [
      { name: "Giraffe Manor", rating: 4.9, price: 750, type: "Boutique Hotel" },
      { name: "Emakoko", rating: 4.8, price: 650, type: "Lodge" },
      { name: "Ole Sereni", rating: 4.5, price: 280, type: "Hotel" },
    ],
  },
];

const featuredHotels = [
  {
    id: "maasai-mara-009",
    name: "Angama Mara",
    location: "Maasai Mara",
    rating: 4.9,
    reviews: 342,
    price: 1250,
    image: "/angama-mara.webp",
    badge: "Luxury Collection",
    badgeColor: "bg-amber-600",
    amenities: ["Pool", "Spa", "Free WiFi", "Restaurant", "Bar"],
    description: "Perched on the Oloololo Escarpment, overlooking the Mara Triangle.",
    rooms: Array(30).fill({ type: "Standard Room", price: 1250 }),
    gallery: ["/angama-room1.webp", "/angama-room2.webp", "/angama-room3.webp"],
    address: "Oloololo Escarpment, Maasai Mara",
    phone: "+254-700-123456",
    email: "info@angamamara.com",
  },
  {
    id: "amboseli-007",
    name: "Ol Donyo Lodge",
    location: "Amboseli",
    rating: 4.9,
    reviews: 287,
    price: 980,
    image: "/ol-donyo.webp",
    badge: "Top Pick",
    badgeColor: "bg-blue-600",
    amenities: ["Private Plunge Pools", "Horseback Safaris", "Star Beds", "Gym"],
    description: "Spectacular Kilimanjaro views from your private plunge pool.",
    rooms: Array(20).fill({ type: "Deluxe Room", price: 980 }),
    gallery: ["/ol-donyo-room1.webp", "/ol-donyo-room2.webp", "/ol-donyo-room3.webp"],
    address: "Amboseli National Park, Kenya",
    phone: "+254-700-654321",
    email: "info@oldonyolodge.com",
  },
  {
    id: "tsavo-west-007",
    name: "Finch Hattons",
    location: "Tsavo West",
    rating: 4.8,
    reviews: 412,
    price: 850,
    image: "/finch-hattons.webp",
    badge: "Best Value",
    badgeColor: "bg-green-600",
    amenities: ["Pool", "Spa", "Tennis Court", "Wine Cellar", "Butler Service"],
    description: "Luxury oasis in the heart of Tsavo. Spring-fed pools and exceptional service.",
    rooms: Array(25).fill({ type: "Luxury Suite", price: 850 }),
    gallery: ["/finch-room1.webp", "/finch-room2.webp", "/finch-room3.webp"],
    address: "Tsavo West National Park, Kenya",
    phone: "+254-700-987654",
    email: "info@finchhattons.com",
  },
  {
    id: "nairobi-012",
    name: "Giraffe Manor",
    location: "Nairobi",
    rating: 4.9,
    reviews: 523,
    price: 750,
    image: "/giraffe-manor.webp",
    badge: "Iconic",
    badgeColor: "bg-purple-600",
    amenities: ["Giraffe Feeding", "Gardens", "Fine Dining", "Heritage Property"],
    description: "Breakfast with giraffes. One of Africa's most iconic hotels.",
    rooms: Array(12).fill({ type: "Boutique Room", price: 750 }),
    gallery: ["/giraffe-room1.webp", "/giraffe-room2.webp", "/giraffe-room3.webp"],
    address: "Karen, Nairobi, Kenya",
    phone: "+254-700-112233",
    email: "info@giraffemanor.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.6,
    },
  },
};

const cardHoverVariants = {
  rest: { scale: 1, rotateY: 0, rotateX: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    scale: 1.03,
    rotateY: 5,
    rotateX: -5,
    boxShadow: "-10px 10px 30px rgba(0,0,0,0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

function DestinationCard({ dest, index }: { dest: (typeof destinations)[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, 15]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, rotateX: rotateX as any, transformPerspective: 1000 }}
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer preserve-3d"
    >
      <Image
        src={dest.image}
        alt={`${dest.name} safari hotels and lodges in Kenya`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover group-hover:scale-110 transition duration-700"
        quality={85}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${dest.color} via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition`}
      />

      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h4 className="text-3xl font-bold mb-2 drop-shadow-lg">{dest.name}</h4>
        <p className="text-white/90 mb-3 drop-shadow font-medium">{dest.description}</p>
        <div className="flex items-center gap-2">
          <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/30">
            {dest.count} properties
          </span>
          <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium border border-white/30">
            From ${dest.priceFrom}/night
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingElement({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedHome() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: isMounted ? heroRef : null,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen"
    >
      {/* 3D Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: smoothY, scale }} className="absolute inset-0">
          <Image
            src="/hero-safari.jpg"
            alt="Kenya Safari - African savanna with elephants at sunset"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Book Kenya&apos;s Best Safari Hotels
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-amber-200 mb-8 drop-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              200+ hand-picked properties • Best rate guarantee • Instant
              confirmation
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              {[
                "Best Price Guarantee",
                "No Booking Fees",
                "Free Cancellation",
                "Secure Payments",
              ].map((badge, i) => (
                <FloatingElement key={badge} delay={i * 0.2}>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <BadgeCheck className="text-amber-300" size={20} />
                    <span className="font-medium text-white text-sm">
                      {badge}
                    </span>
                  </div>
                </FloatingElement>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            <div className="w-full max-w-4xl">
              <SearchBar />
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* 3D Destination Grid */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Safari Destinations
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect lodge or camp in Kenya&apos;s most iconic wildlife
              destinations
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
              >
                <DestinationCard dest={dest} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Featured Hotels */}
      <section className="py-20 bg-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Safari Hotels
              </h3>
              <p className="text-xl text-gray-600">
                Hand-picked luxury lodges and camps
              </p>
            </div>
            <Link
              href="/hotels"
              className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-1 bg-amber-50 px-4 py-2 rounded-lg transition hover:bg-amber-100"
            >
              View all hotels
              <ChevronRight size={20} />
            </Link>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredHotels.map((hotel, index) => (
              <HotelCard key={hotel.id} hotel={hotel} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3D Why Book Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Book Your Safari Hotel With Jaetravel
          </h3>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We make booking your dream safari accommodation simple, secure, and
            affordable
          </p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {[
              {
                icon: <Shield className="text-amber-600" size={32} />,
                title: "Best Price Guarantee",
                description:
                  "Find a lower rate elsewhere? We'll match it and give you 10% off.",
                color: "bg-amber-100",
              },
              {
                icon: <Sparkles className="text-blue-600" size={32} />,
                title: "Curated Selection",
                description:
                  "Only properties that meet our quality standards make it onto our platform.",
                color: "bg-blue-100",
              },
              {
                icon: <Clock className="text-green-600" size={32} />,
                title: "Instant Confirmation",
                description:
                  "Book and receive confirmation in under 5 minutes.",
                color: "bg-green-100",
              },
              {
                icon: <Users className="text-purple-600" size={32} />,
                title: "Local Experts",
                description:
                  "24/7 support from our Nairobi-based team who know every property personally.",
                color: "bg-purple-100",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 3,
                  rotateX: -3,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                initial="rest"
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 cursor-pointer preserve-3d"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-2xl mb-6`}
                >
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Amenities */}
      <AmenitiesFilter hotels={hotels} />

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Travelers
            </h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-amber-400 fill-current"
                    size={24}
                  />
                ))}
              </div>
              <p className="text-xl font-bold text-gray-900">4.8</p>
            </div>
            <p className="text-lg text-gray-600">
              Average rating from 1,247+ verified reviews
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {[
              {
                name: "Sarah Thompson",
                location: "London, UK",
                hotel: "Angama Mara",
                rating: 5,
                comment:
                  "The booking process was seamless. Got instant confirmation and a rate 15% lower than anywhere else.",
              },
              {
                name: "Michael Chen",
                location: "Singapore",
                hotel: "Ol Donyo Lodge",
                rating: 5,
                comment:
                  "Their local knowledge is unmatched. The agent recommended the perfect room with Kilimanjaro views.",
              },
              {
                name: "Emma Watson",
                location: "Sydney, AUS",
                hotel: "Giraffe Manor",
                rating: 5,
                comment:
                  "Found a hotel that was sold out everywhere else through Jaetravel. Their inventory is amazing.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="text-amber-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">
                  &quot;{review.comment}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {review.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {review.location} • Stayed at {review.hotel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-6 bg-gradient-to-r from-amber-500 to-orange-500">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Gift className="text-white" size={24} />
            <p className="text-white font-medium">
              Special Offer: Book 7+ nights and receive complimentary airport
              transfer + one free game drive!
            </p>
            <Link
              href="/contact"
              className="bg-white text-amber-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition"
            >
              Claim Offer →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Popular Searches */}
      <PopularSearchesEnhanced />

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <Image
            src="/cta-bg.jpg"
            alt="Safari sunset in Kenya"
            fill
            className="object-cover"
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 opacity-95" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Book Your Safari Stay?
          </motion.h3>
          <p className="text-xl mb-10 text-amber-100 max-w-2xl mx-auto">
            Join thousands of travelers who booked their perfect safari hotel
            with us
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/search"
              className="bg-white text-amber-800 hover:bg-amber-50 px-10 py-5 rounded-xl font-bold text-lg transition shadow-xl hover:shadow-2xl"
            >
              Search All Hotels
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition backdrop-blur-sm"
            >
              Talk to a Safari Expert
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-amber-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-300" />
              Best price guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-300" />
              No booking fees
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-amber-300" />
              Free cancellation
            </span>
          </motion.div>

          <h6 className="mt-8 text-sm opacity-80 flex justify-center gap-6 flex-wrap">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +254 726 485 228
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> info@jaetravel.co.ke
            </span>
            <span className="flex items-center gap-1">
              <CreditCard size={14} /> Visa • Mastercard • M-Pesa
            </span>
          </h6>
        </div>
      </section>
    </motion.div>
  );
}