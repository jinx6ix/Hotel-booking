import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { HotelCard } from "@/components/hotel-card";
import { SchemaRenderer } from "@/components/schema-renderer";
import { hotels } from "@/lib/data";
import { Star, Shield, MapPin, Users, Accessibility, Calendar, Heart, ChevronRight } from "lucide-react";

// ────────────────────────────────────────────────
// Metadata – very strong commercial + long-tail targeting
// ────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Best Luxury Hotels & Safari Lodges in Kenya 2025–2026 | Maasai Mara, Amboseli, Tsavo – Book Direct",
  description:
    "Discover 120+ luxury hotels, safari lodges & tented camps in Kenya for 2025–2026. Maasai Mara luxury lodges, Amboseli Kilimanjaro-view hotels, Tsavo camps, Samburu tents, Nairobi 5-star hotels, Lake Nakuru & Naivasha resorts. Best rates guaranteed, exclusive perks, direct booking benefits & expert safari planning.",
  keywords:
    "luxury hotels Kenya 2025, safari lodges Kenya, best hotels in Kenya 2025 2026, Maasai Mara luxury lodges, Amboseli safari hotels Kilimanjaro, Tsavo East Tsavo West accommodation, Samburu tented camps, Nairobi 5 star hotels, Lake Nakuru hotels, Lake Naivasha resorts, book safari lodge direct Kenya, luxury tented camps Kenya, family friendly safari hotels Kenya, accessible hotels Kenya safari, Kenya hotel deals 2026, luxury safari accommodation Kenya, best luxury lodges Maasai Mara",
  openGraph: {
    title: "Luxury Safari Hotels & Lodges Kenya 2025–2026 • Best Rates – Book Direct",
    description:
      "Handpicked collection of the finest luxury lodges, tented camps & hotels in Maasai Mara, Amboseli, Tsavo, Samburu, Nairobi, Nakuru, Naivasha & more. Direct booking advantages & personalized planning.",
    url: "https://www.jaetravel.com/hotels",
    images: [
      {
        url: "/og-kenya-luxury-hotels.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Safari Lodges & Hotels in Kenya 2025–2026 – Maasai Mara, Amboseli, Tsavo, Samburu",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://www.jaetravel.com/hotels",
  },
  robots: "index, follow",
};

// ────────────────────────────────────────────────
// Schemas
// ────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravel.com/" },
    { "@type": "ListItem", position: 2, name: "Hotels & Lodges", item: "https://www.jaetravel.com/hotels" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Luxury Hotels & Safari Lodges in Kenya 2025–2026",
  itemListElement: hotels.slice(0, 12).map((hotel, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "LodgingBusiness",
      name: hotel.name,
      description: hotel.description || `${hotel.name} – luxury accommodation in ${hotel.location}`,
      url: `https://www.jaetravel.com/hotels/${hotel.id || hotel.id}`,
      image: hotel.image,
      address: {
        "@type": "PostalAddress",
        addressLocality: hotel.location,
        addressCountry: "KE",
      },
      priceRange: "$$$",
      telephone: hotel.phone || "+254 700 000 000",
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jaetravel Expeditions",
  url: "https://www.jaetravel.com",
  logo: "https://www.jaetravel.com/logo.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
  },
  description:
    "Premier Kenya safari tour operator offering direct bookings for the finest luxury hotels, safari lodges and tented camps across Maasai Mara, Amboseli, Tsavo, Samburu, Nairobi and more.",
};

export default function HotelsPage() {
  const faqItems = [
    {
      question: "What are the best luxury safari lodges in Kenya for 2025–2026?",
      answer:
        "Top-rated options include iconic properties in Maasai Mara (Great Migration views), Amboseli (Kilimanjaro backdrop), Tsavo (wilderness experience), Samburu (unique species), and Nairobi (urban luxury). We recommend booking early for peak season (June–October).",
    },
    {
      question: "Is it cheaper or better to book safari lodges directly?",
      answer:
        "Yes – direct booking through us often includes best rate guarantee, complimentary upgrades, free activities, flexible cancellation, and personalized safari planning you won’t find on third-party platforms.",
    },
    {
      question: "Which hotels in Kenya are good for families?",
      answer:
        "Many lodges in Maasai Mara, Lake Nakuru, Lake Naivasha and Nairobi offer family suites, interconnecting rooms, kids’ menus, child-friendly activities and safe game viewing experiences.",
    },
    {
      question: "Are there wheelchair accessible luxury hotels and lodges in Kenya?",
      answer:
        "Yes – several properties in Maasai Mara, Amboseli, Nairobi and Lake Nakuru offer accessible rooms with roll-in showers, ramps, ground-level access and adapted safari vehicles. We specialize in inclusive luxury travel.",
    },
    {
      question: "What is the average price for luxury lodges in Kenya?",
      answer:
        "Luxury lodges typically range from $450–$1,200+ per person per night (full board + game drives). Prices vary by season, location and inclusions. Contact us for current offers and packages.",
    },
    {
      question: "How do I choose the right lodge for my Kenya safari?",
      answer:
        "It depends on your priorities: Great Migration viewing (Maasai Mara), Kilimanjaro scenery (Amboseli), unique wildlife (Samburu), wilderness (Tsavo), or city convenience (Nairobi). Tell us your travel dates, budget and interests — we’ll recommend the perfect match.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // Review snippets for rich results
  const reviewSnippets = [
    {
      rating: 5,
      text: "Incredible luxury tented camp in Maasai Mara – wildlife right outside the tent, exceptional service and food. Best holiday we’ve ever had!",
      author: "Emma & James – United Kingdom",
    },
    {
      rating: 4.9,
      text: "The Amboseli lodge with Kilimanjaro views was breathtaking. Our accessible room was perfect and the staff went above and beyond.",
      author: "Sarah L. – United States",
    },
    {
      rating: 4.8,
      text: "Quiet, authentic and beautiful property in Samburu. The guides were outstanding and the food exceptional. Highly recommend.",
      author: "Lars M. – Norway",
    },
  ];

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={itemListSchema} />
      <SchemaRenderer schema={organizationSchema} />
      <SchemaRenderer schema={faqSchema} />

      <Header />

      {/* Hero – stronger visual & conversion focus */}
      <div className="relative bg-gradient-to-br from-orange-600 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/background-luxury-lodge.jpg"
            alt="Luxury safari lodge tent with wildlife view in Kenya – Maasai Mara, Amboseli 2025"
            fill
            className="object-cover"
            quality={80}
            priority
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-32">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Hotels & Safari Lodges" },
            ]}
          />

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Luxury Hotels & Safari Lodges in Kenya 2025–2026
          </h1>

          <p className="mt-6 text-xl md:text-2xl max-w-4xl leading-relaxed">
            Discover the finest <strong>luxury hotels in Kenya</strong> and <strong>safari lodges</strong> across the country’s most iconic destinations — from tented camps overlooking the{" "}
            <Link href="/destinations/maasai-mara" className="underline hover:text-orange-200 transition-colors">
              Maasai Mara
            </Link>{" "}
            plains, lodges with <strong>Mount Kilimanjaro</strong> views in{" "}
            <Link href="/destinations/amboseli" className="underline hover:text-orange-200 transition-colors">
              Amboseli
            </Link>
            , to elegant 5-star hotels in Nairobi and peaceful lakeside retreats at{" "}
            <Link href="/destinations/naivasha" className="underline hover:text-orange-200 transition-colors">
              Lake Naivasha
            </Link>.
          </p>

          <p className="mt-5 text-lg md:text-xl opacity-95 max-w-3xl">
            Book direct with Jaetravel Expeditions for <strong>best rates guaranteed</strong>, complimentary upgrades, exclusive safari experiences, flexible cancellation, and expert planning you won’t find on third-party booking sites.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-orange-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Find Your Perfect Lodge Today
            </Link>
            <Link
              href="/destinations"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition backdrop-blur-sm"
            >
              Explore Destinations First
            </Link>
          </div>
        </div>
      </div>

      {/* Trust signals + intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Book Luxury Safari Hotels & Lodges with Jaetravel?
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  With over 12 years of on-the-ground experience, we have personally visited and vetted more than 120 of the finest <strong>luxury safari lodges in Kenya</strong> and <strong>hotels</strong> — from iconic 5-star properties to intimate tented camps and boutique retreats.
                </p>
                <p>
                  Our expert team specializes in curating the perfect accommodation for luxury travelers, honeymooners, families, photographers, and guests seeking accessible or inclusive experiences.
                </p>
                <p className="font-semibold mt-6">Direct booking benefits include:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Best price guarantee – we match or beat any published rate</li>
                  <li>Complimentary room upgrades (subject to availability)</li>
                  <li>Exclusive safari activities & private experiences</li>
                  <li>Free airport transfers (select properties)</li>
                  <li>Personalized itinerary planning by Kenya safari specialists</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">120+</div>
                <p className="text-gray-700">Handpicked Properties</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">4.8★</div>
                <p className="text-gray-700">Guest Rating</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">12+</div>
                <p className="text-gray-700">Years of Expertise</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                <p className="text-gray-700">Direct Booking Perks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular destinations / locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Luxury Lodges & Hotels by Iconic Destination
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Maasai Mara", slug: "maasai-mara", desc: "Great Migration & Big Five views" },
              { name: "Amboseli", slug: "amboseli", desc: "Kilimanjaro & elephant herds" },
              { name: "Tsavo East & West", slug: "tsavo-east", desc: "Red elephants & vast wilderness" },
              { name: "Samburu", slug: "samburu", desc: "Special Five & remote beauty" },
              { name: "Lake Nakuru", slug: "nakuru", desc: "Flamingos & rhinos" },
              { name: "Nairobi", slug: "nairobi", desc: "City luxury & national park" },
              { name: "Lake Naivasha", slug: "naivasha", desc: "Lakeside relaxation" },
            ].map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-gray-600 mb-3">{dest.desc}</p>
                <span className="text-orange-600 font-medium group-hover:underline">
                  View luxury lodges →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Grid – featured selection */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Featured Luxury Hotels & Safari Lodges
          </h2>

          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            Our carefully curated collection of the finest <strong>luxury accommodations in Kenya</strong> — from iconic tented camps to elegant 5-star resorts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 lg:gap-9">
            {hotels.slice(0, 12).map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-lg"
            >
              Need Help Choosing Your Perfect Hotel?
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Review Snippets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Guests Say About Their Luxury Stays
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviewSnippets.map((review, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-6 h-6 ${idx < Math.floor(review.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-gray-900">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
            Frequently Asked Questions – Luxury Hotels & Lodges in Kenya
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="bg-gray-50 p-7 rounded-xl shadow-sm border border-gray-200 cursor-pointer group"
                open={i < 2}
              >
                <summary className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition flex items-center justify-between">
                  {faq.question}
                </summary>
                <div className="mt-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-lg"
            >
              Still have questions? Contact our team
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Book Your Luxury Kenya Stay for 2025–2026?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Best rates • Exclusive perks • Personalized planning • Luxury lodges • Safari camps • Family & accessible options
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-700 px-12 py-6 rounded-xl font-bold text-xl hover:bg-orange-50 transition shadow-lg"
            >
              Get Personalized Hotel Recommendations
            </Link>
            <Link
              href="/destinations"
              className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition backdrop-blur-sm"
            >
              Explore Destinations First
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}