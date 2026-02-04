// app/hotels/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { HotelCard } from "@/components/hotel-card";
import { SchemaRenderer } from "@/components/schema-renderer";
import { hotels } from "@/lib/data";

// ────────────────────────────────────────────────
// Metadata – strong commercial intent + long-tail keywords
// ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Best Luxury Hotels & Safari Lodges in Kenya 2025–2026 | Book Direct",
  description:
    "Discover 120+ luxury hotels, safari lodges and tented camps across Kenya – Maasai Mara, Amboseli, Tsavo, Samburu, Nairobi, Naivasha, Lake Nakuru & more. Best rates, exclusive perks & direct booking benefits.",
  keywords:
    "Kenya luxury hotels, safari lodges Kenya, best hotels in Kenya, Maasai Mara lodges, Amboseli hotels, Tsavo safari accommodation, luxury tented camps Kenya, Nairobi 5 star hotels, book safari lodge direct, Kenya hotel deals",

  alternates: {
    canonical: "https://www.jaetravelexpeditions.com/hotels",
  },

  openGraph: {
    title: "Luxury Hotels & Safari Lodges in Kenya • Best Rates – Book Direct",
    description:
      "From Maasai Mara luxury tented camps to Amboseli lodges with Kilimanjaro views – find your perfect safari accommodation in Kenya.",
    url: "https://www.jaetravelexpeditions.com/hotels",
    images: [
      {
        url: "/og-kenya-luxury-hotels.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Safari Lodges & Hotels in Kenya – Maasai Mara, Amboseli, Tsavo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Safari Hotels & Lodges in Kenya 2025–2026",
    images: ["/twitter-kenya-hotels.jpg"],
  },

  robots: { index: true, follow: true },
};

// ────────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravelexpeditions.com/" },
    { "@type": "ListItem", position: 2, name: "Hotels & Lodges", item: "https://www.jaetravelexpeditions.com/hotels" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Luxury Hotels & Safari Lodges in Kenya",
  itemListElement: hotels.slice(0, 12).map((hotel, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "LodgingBusiness",
      name: hotel.name,
      description: hotel.description || `${hotel.name} – luxury accommodation in ${hotel.location}`,
      url: `https://www.jaetravelexpeditions.com/hotels/${hotel.id}`,
      image: hotel.image,
      address: { "@type": "PostalAddress", addressLocality: hotel.location, addressCountry: "KE" },
    },
  })),
};

export default function HotelsPage() {
  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={itemListSchema} />

      <Header />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Hotels & Safari Lodges" },
            ]}
          />

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Luxury Hotels & Safari Lodges in Kenya
          </h1>

          <p className="mt-6 text-xl md:text-2xl max-w-4xl leading-relaxed">
            Discover the finest <strong>luxury hotels in Kenya</strong> and <strong>safari lodges</strong> across the country’s most iconic destinations — from tented camps in the heart of the{" "}
            <Link href="/destinations/maasai-mara" className="underline hover:text-orange-200 transition-colors">
              Maasai Mara
            </Link>
            , lodges with Kilimanjaro views in{" "}
            <Link href="/destinations/amboseli" className="underline hover:text-orange-200 transition-colors">
              Amboseli
            </Link>
            , to elegant resorts in Nairobi and relaxing stays at{" "}
            <Link href="/destinations/naivasha" className="underline hover:text-orange-200 transition-colors">
              Lake Naivasha
            </Link>
            .
          </p>

          <p className="mt-5 text-lg md:text-xl opacity-95 max-w-3xl">
            Book direct for the <strong>best rates guaranteed</strong>, exclusive perks, complimentary upgrades, and personalized safari planning you won’t find on third-party sites.
          </p>
        </div>
      </div>

      {/* Intro + Trust signals */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 mb-12">
            <p>
              Jaetravel Expeditions has carefully selected the very best <strong>safari accommodations in Kenya</strong> — 5-star luxury lodges, intimate tented camps, boutique hotels and family-friendly resorts. Whether you&apos;re planning a romantic getaway, a family safari adventure, a Big Five photography trip or a relaxing escape, you&apos;ll find the perfect stay for your Kenya holiday.
            </p>
            <p>
              Explore properties in the most sought-after locations: <strong>Maasai Mara luxury lodges</strong>,{" "}
              <strong>Amboseli safari camps</strong>, <strong>Tsavo East & West accommodations</strong>,{" "}
              <strong>Samburu tented camps</strong>, <strong>Nairobi 5-star hotels</strong>, and peaceful retreats in Naivasha, Nakuru, Nanyuki and beyond.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/destinations/maasai-mara"
              className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Maasai Mara Lodges
            </Link>
            <Link
              href="/destinations/amboseli"
              className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Amboseli Hotels
            </Link>
            <Link
              href="/destinations/tsavo-east"
              className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Tsavo Accommodations
            </Link>
            <Link
              href="/destinations/samburu"
              className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Samburu Camps
            </Link>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
            Featured Luxury Hotels & Safari Lodges
          </h2>

          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Browse our handpicked collection of the finest <strong>luxury accommodations in Kenya</strong> — perfect for your next safari adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-md"
            >
              Need Help Choosing the Perfect Hotel?
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}