import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SchemaRenderer } from "@/components/schema-renderer";
import { locations } from "@/lib/data";
import { Star, Accessibility, MapPin, Calendar, Users, Shield, Camera, Heart } from "lucide-react";

// ────────────────────────────────────────────────
// Metadata – optimized for 2025–2026 freshness & intent
// ────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Best Kenya Safari Destinations 2025–2026 | Maasai Mara Great Migration, Amboseli Kilimanjaro, Tsavo, Samburu, Nakuru",
  description:
    "Plan your 2025–2026 Kenya safari: Great Migration in Maasai Mara, Kilimanjaro & elephants in Amboseli, flamingos & rhinos in Lake Nakuru, Special Five in Samburu, red landscapes in Tsavo, Nairobi city safari, Lake Naivasha. Luxury lodges, family safaris, photography tours, accessible options & best time to visit.",
  keywords:
    "kenya safari destinations 2025, best safari in kenya 2025 2026, maasai mara safari great migration, amboseli national park kilimanjaro, tsavo east tsavo west safari, samburu special five, lake nakuru flamingos, nairobi national park safari, lake naivasha boat safari, luxury safari lodges kenya, best time to visit kenya safari 2025, kenya wildlife safari tours 2026, family safari kenya, photography safari kenya, accessible safari kenya, wheelchair accessible kenya safari, maasai mara luxury lodges, amboseli best time to visit, tsavo red elephants, samburu unique wildlife, book kenya safari online",
  openGraph: {
    title:
      "Top Kenya Safari Destinations 2025–2026 • Maasai Mara • Amboseli • Tsavo • Samburu • Nakuru",
    description:
      "Discover the best Kenya safari experiences for 2025–2026 – Great Migration, Big Five, Kilimanjaro views, flamingos, Special Five, luxury lodges & accessible safaris.",
    url: "https://www.jaetravel.com/destinations",
    images: [
      {
        url: "/og-kenya-safari-destinations-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Best Kenya Safari Destinations 2025–2026 – Maasai Mara Great Migration, Amboseli Kilimanjaro, Lake Nakuru Flamingos",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jaetravel.com/destinations",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Destinations",
      item: "https://www.jaetravel.com/destinations",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Kenya Safari Destinations 2025–2026",
  itemListElement: locations.map((loc, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristDestination",
      name: loc.name,
      description: loc.description,
      url: `https://www.jaetravel.com/destinations/${loc.slug}`,
      image: loc.image,
    },
  })),
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jaetravel Expeditions",
  url: "https://www.jaetravel.com",
  logo: "https://www.jaetravel.com/logo.png",
  description:
    "Leading Kenya safari tour operator since 2012 – specializing in luxury lodges, family safaris, photography tours, and accessible travel experiences.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
  },
  sameAs: [
    "https://www.tripadvisor.com/Attraction_Review-g294207-d12345678-Reviews-Jaetravel_Expeditions-Nairobi.html",
    "https://www.facebook.com/jaetravelexpeditions",
    "https://www.instagram.com/jaetravelexpeditions",
  ],
};

export default function DestinationsPage() {
  const faqItems = [
    {
      question: "What is the best time to visit Kenya for safari in 2025–2026?",
      answer:
        "June–October (dry season) is ideal for the Great Migration in Maasai Mara and best overall game viewing. January–March offers fewer crowds, excellent Kilimanjaro visibility in Amboseli, and baby animals. April–May (green season) has lower rates, lush landscapes and special offers.",
    },
    {
      question: "Which destination is best for seeing the Great Migration?",
      answer:
        "The Maasai Mara National Reserve is the top location for witnessing the dramatic river crossings of the Great Migration, typically peaking July–October.",
    },
    {
      question: "Which Kenya parks offer the best accessible safari experiences?",
      answer:
        "Maasai Mara, Amboseli, Nairobi National Park and Lake Nakuru have the best infrastructure — including wheelchair-accessible vehicles with lifts, accessible lodge rooms, ramps, and trained guides.",
    },
    {
      question: "Where can I see the Big Five in Kenya?",
      answer:
        "Maasai Mara and Tsavo (East & West) offer the best chance of seeing all Big Five. Amboseli is exceptional for elephants, while rhinos are reliable in Lake Nakuru.",
    },
    {
      question: "What is the best destination for families with children?",
      answer:
        "Nairobi National Park (short drives, close to city), Lake Nakuru, Lake Naivasha and Maasai Mara (with many family-friendly lodges) are excellent family safari choices.",
    },
    {
      question: "Which parks are best for wildlife photography in Kenya?",
      answer:
        "Amboseli (Kilimanjaro + elephants), Maasai Mara (dramatic action), Samburu (unique species & light), Lake Nakuru (flamingos & birds) and Tsavo (red landscapes) are top photography destinations.",
    },
    {
      question: "How much does a Kenya safari cost in 2025–2026?",
      answer:
        "Mid-range safaris typically range from $350–$650 per person per day. Luxury lodges and private camps often cost $700–$1,500+ per person per day. Prices vary by season, group size, and inclusions.",
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

  const reviewSnippets = [
    {
      rating: 5,
      text: "The Great Migration in Maasai Mara exceeded all expectations — incredible wildlife and fantastic luxury lodge. Our family’s best holiday ever!",
      author: "Sophie & Family – United Kingdom",
    },
    {
      rating: 4.9,
      text: "Amboseli was breathtaking — elephants everywhere with Kilimanjaro in the background. Perfect for photography and very comfortable accessible room.",
      author: "Mark Thompson – United States",
    },
    {
      rating: 4.8,
      text: "Samburu felt like true wilderness — saw all the Special Five! Quiet, authentic and beautiful. Guides were exceptional.",
      author: "Anna Richter – Germany",
    },
  ];

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={itemListSchema} />
      <SchemaRenderer schema={organizationSchema} />
      <SchemaRenderer schema={faqSchema} />

      <Header />

      {/* Hero – richer & more keyword-focused */}
      <div className="relative bg-gradient-to-b from-orange-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-10 pb-24 md:pt-16 md:pb-40">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />

          <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
            Best Kenya Safari Destinations 2025–2026
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed">
            Discover the most iconic <strong>Kenya safari destinations</strong> for 2025 and 2026 — from the world-famous{" "}
            <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-semibold">
              Maasai Mara Great Migration
            </Link>{" "}
            and breathtaking <strong>Amboseli elephants with Mount Kilimanjaro</strong>, to the pink flamingo spectacles at{" "}
            <Link href="/destinations/nakuru" className="text-orange-600 hover:underline font-semibold">
              Lake Nakuru
            </Link>
            , unique <strong>Samburu Special Five</strong>, vast red-dust wilderness in{" "}
            <Link href="/destinations/tsavo-east" className="text-orange-600 hover:underline font-semibold">
              Tsavo East & West
            </Link>
            , relaxing boat rides on <strong>Lake Naivasha</strong>, and thrilling <strong>Nairobi National Park</strong> city safaris.
          </p>

          <p className="mt-6 text-lg text-gray-700 max-w-4xl">
            Whether you're planning a <strong>luxury safari in Kenya</strong>, <strong>family safari Kenya</strong>,{" "}
            <strong>photography safari tour</strong>,{" "}
            <Link href="/car-hire" className="text-orange-600 hover:underline font-semibold">
              self-drive safari
            </Link>
            , or searching for <strong>wheelchair accessible Kenya safari</strong> options — these destinations deliver once-in-a-lifetime wildlife experiences, cultural encounters and stunning landscapes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-md"
            >
              Browse Luxury Safari Lodges →
            </Link>
            <Link
              href="/car-hire"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Safari Vehicle Hire Options
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-gray-700 text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition"
            >
              Get Your Custom 2025–2026 Itinerary
            </Link>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
            Explore Kenya's Top Safari Destinations 2025–2026
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
            From dramatic wildlife spectacles to serene lakes, volcanic landscapes and remote northern wilderness — choose your perfect Kenya safari adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {locations.map((location, index) => (
              <Link
                key={location.id}
                href={`/destinations/${location.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`${location.name} Kenya safari 2025 – ${location.description} – luxury lodges & best time to visit`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    priority={index < 4}
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {location.name}
                  </h3>

                  <p className="text-gray-700 mb-5 line-clamp-4 flex-grow">
                    {location.description}
                  </p>

                  <div className="mt-auto space-y-4 pt-5 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong>Best time to visit:</strong> {location.bestTime}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Highlights:</strong> {location.highlights || "Big Five, scenic beauty, cultural experiences"}
                    </p>
                    <span className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700 text-base">
                      Explore {location.name} safaris & lodges →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/hotels"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-lg"
            >
              View All Luxury Safari Lodges in Kenya →
            </Link>
          </div>
        </div>
      </section>

      {/* Accessible Safaris */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Accessible Safaris in Kenya – Travel Without Barriers
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            <p>
              We are committed to making Kenya’s wildlife accessible to everyone. Many of our most popular{" "}
              <strong>Kenya safari destinations</strong> now offer <strong>wheelchair accessible safaris</strong>, adapted vehicles with hydraulic lifts, accessible luxury lodge rooms, ramps, lowered viewing platforms and trained guides who specialize in inclusive travel.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
              <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Maasai Mara</h3>
                <p>Multiple lodges with step-free access, accessible rooms, adapted 4×4 vehicles with lifts, and raised viewing decks.</p>
                <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline text-sm mt-2 block">
                  View accessible Maasai Mara options →
                </Link>
              </div>

              <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Amboseli</h3>
                <p>Flat terrain, several accessible lodges with roll-in showers, and modified vehicles for comfortable game drives with Kilimanjaro views.</p>
                <Link href="/destinations/amboseli" className="text-orange-600 hover:underline text-sm mt-2 block">
                  View accessible Amboseli options →
                </Link>
              </div>

              <div className="bg-white p-7 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Nairobi & Lake Nakuru</h3>
                <p>Short transfers, good road access, accessible facilities and vehicles make these ideal for shorter inclusive safaris.</p>
                <Link href="/destinations/nairobi" className="text-orange-600 hover:underline text-sm mt-2 block">
                  View accessible Nairobi & Nakuru options →
                </Link>
              </div>
            </div>

            <p className="text-center mt-12">
              <Link
                href="/contact?interest=accessible-safari"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition shadow-lg"
              >
                Plan Your Accessible Kenya Safari Today
                <span className="text-2xl">→</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 overflow-x-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Kenya Safari Destinations Comparison 2025–2026
          </h2>

          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-5 text-left font-bold text-gray-900 border-b border-r">Destination</th>
                <th className="p-5 text-left font-bold text-gray-900 border-b border-r">Best Time</th>
                <th className="p-5 text-left font-bold text-gray-900 border-b border-r">Main Highlights</th>
                <th className="p-5 text-left font-bold text-gray-900 border-b border-r">Big Five?</th>
                <th className="p-5 text-left font-bold text-gray-900 border-b border-r">Accessibility</th>
                <th className="p-5 text-left font-bold text-gray-900 border-b">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Maasai Mara", slug: "maasai-mara", time: "Jun–Oct (Migration)", highlights: "Great Migration, Big Five, river crossings", bigfive: "Yes – Excellent", accessibility: "Good – several options", bestfor: "Drama & action" },
                { name: "Amboseli", slug: "amboseli", time: "Jan–Mar & Jun–Oct", highlights: "Elephants + Kilimanjaro, photography", bigfive: "Yes – strong elephants", accessibility: "Very good – flat terrain", bestfor: "Scenic views" },
                { name: "Samburu", slug: "samburu", time: "Year-round (dry best)", highlights: "Special Five, dramatic landscapes", bigfive: "Partial", accessibility: "Moderate – select lodges", bestfor: "Unique species" },
                { name: "Tsavo East/West", slug: "tsavo-east", time: "Year-round (dry best)", highlights: "Red elephants, vast wilderness", bigfive: "Yes – very good", accessibility: "Moderate", bestfor: "Solitude" },
                { name: "Lake Nakuru", slug: "nakuru", time: "Year-round", highlights: "Flamingos, rhinos, tree lions", bigfive: "Yes – rhinos & lions", accessibility: "Good", bestfor: "Birdwatching" },
                { name: "Nairobi NP", slug: "nairobi", time: "Year-round", highlights: "City skyline + wildlife", bigfive: "Partial", accessibility: "Very good", bestfor: "Short stays" },
              ].map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-5 font-medium border-r">
                    <Link href={`/destinations/${row.slug}`} className="text-orange-600 hover:underline">
                      {row.name}
                    </Link>
                  </td>
                  <td className="p-5 border-r">{row.time}</td>
                  <td className="p-5 border-r">{row.highlights}</td>
                  <td className="p-5 border-r">{row.bigfive}</td>
                  <td className="p-5 border-r">{row.accessibility}</td>
                  <td className="p-5">{row.bestfor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Review Snippets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Our Guests Say About Kenya Safaris
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
            Frequently Asked Questions – Planning Your Kenya Safari 2025–2026
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
              Still have questions? Contact our safari experts
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Book Your Dream Kenya Safari for 2025–2026?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Luxury lodges • Family-friendly camps • Photography safaris • Accessible options • Expert guides • Unforgettable wildlife
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-700 px-12 py-6 rounded-xl font-bold text-xl hover:bg-orange-50 transition shadow-lg"
            >
              Get Your Personalized Quote
            </Link>
            <Link
              href="/hotels"
              className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition backdrop-blur-sm"
            >
              Browse Luxury Lodges
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}