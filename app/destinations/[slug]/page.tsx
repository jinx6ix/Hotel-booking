// app/destinations/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { locations, hotels } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HotelCard } from "@/components/hotel-card";
import { SchemaRenderer } from "@/components/schema-renderer";
import { generateLocationSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

import { Calendar, MapPin, Sun, Clock, Info, ChevronRight } from "lucide-react";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: "Destination Not Found | Jaetravel Expeditions",
      description: "The Kenya safari destination you're looking for is not available.",
      robots: { index: false },
    };
  }

  const title = `${location.name} Safari Kenya 2025–2026 | Best Time, Lodges & Top Attractions`;
  const description = `Experience the best of ${location.name} – ${location.description}. Discover the ideal time to visit, must-see attractions, luxury lodges & camps, and how to plan your perfect ${location.name} safari adventure.`;

  return {
    title,
    description,

    keywords: [
      `${location.name} safari`,
      `${location.name} Kenya`,
      `best time to visit ${location.name}`,
      `${location.name} national park`,
      `${location.name} luxury lodges`,
      `${location.name} attractions`,
      "Kenya safari destinations",
      "best safari in Kenya",
      "luxury safari Kenya",
      "Kenya wildlife",
    ].join(", "),

    alternates: {
      canonical: `https://www.jaetravelexpeditions.com/destinations/${location.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `https://www.jaetravelexpeditions.com/destinations/${location.slug}`,
      images: [
        {
          url: location.image,
          width: 1200,
          height: 630,
          alt: `${location.name} – ${location.description} – Kenya Safari Destination`,
        },
      ],
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [location.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  const destinationHotels = hotels.filter((h) => h.location === location.name);

  // ────────────────────────────────────────────────
  // Structured Data
  // ────────────────────────────────────────────────
  const locationSchema = generateLocationSchema(location);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: location.name },
  ]);

  // FAQ helps with People Also Ask boxes
  const faqItems = [
    {
      question: `What is the best time to visit ${location.name}?`,
      answer: `The best time to visit ${location.name} is ${location.bestTime}. This period offers the most favourable wildlife viewing conditions and pleasant weather.`,
    },
    {
      question: `What are the top attractions in ${location.name}?`,
      answer: `Some of the most popular attractions include ${location.attractions.slice(0, 5).join(", ")}, and many more exciting experiences.`,
    },
    {
      question: `Where should I stay in ${location.name}?`,
      answer: `You can choose from a wide range of luxury lodges, tented camps, and boutique hotels in ${location.name}. We recommend booking early during peak season.`,
    },
    {
      question: `Can I see the Big Five in ${location.name}?`,
      answer: location.attractions.some(a => a.toLowerCase().includes("lion") || a.toLowerCase().includes("elephant") || a.toLowerCase().includes("rhino"))
        ? "Yes, many visitors successfully spot the Big Five in and around " + location.name + "."
        : "While " + location.name + " is famous for specific wildlife, Big Five sightings are more consistent in nearby regions like Maasai Mara or Amboseli.",
    },
  ];

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <SchemaRenderer schema={locationSchema} />
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={faqSchema} />

      <Header />

      {/* Hero Section – with priority image */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={`${location.name} – ${location.description} – Kenya safari destination`}
          fill
          priority
          quality={82}
          className="object-cover brightness-[0.88]"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-5 sm:px-8">
          <div className="max-w-6xl w-full">
            <div className="inline-flex items-center gap-2.5 bg-orange-600/80 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium mb-5">
              <MapPin size={16} />
              Kenya Safari Destination
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              {location.name}
            </h1>

            <p className="mt-5 text-xl md:text-2xl text-white/90 max-w-3xl">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 py-6 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 md:gap-10 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <Calendar className="text-orange-600" size={22} />
              <div>
                <p className="text-sm text-gray-600">Best Time</p>
                <p className="font-medium">{location.bestTime}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sun className="text-orange-600" size={22} />
              <div>
                <p className="text-sm text-gray-600">Peak Wildlife</p>
                <p className="font-medium">Dry season viewing</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-orange-600" size={22} />
              <div>
                <p className="text-sm text-gray-600">Recommended Stay</p>
                <p className="font-medium">3–7 nights</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 xl:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Discover {location.name}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {location.longDescription}
                </p>
              </div>

              {/* Attractions */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Top Attractions in {location.name}
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {location.attractions.map((attraction) => (
                    <div
                      key={attraction}
                      className="flex items-start gap-4 p-5 bg-orange-50/60 rounded-xl border border-orange-100 hover:border-orange-300 transition-colors"
                    >
                      <MapPin className="text-orange-600 mt-1 flex-shrink-0" size={20} />
                      <span className="font-medium text-gray-800">{attraction}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Internal linking block */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Plan Your {location.name} Safari
                </h3>
                <p className="text-gray-700 mb-6">
                  Looking for the perfect accommodation or want to combine {location.name} with other iconic destinations?
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/hotels"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Luxury Lodges & Camps in Kenya
                    </span>
                  </Link>

                  <Link
                    href="/destinations/maasai-mara"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Great Migration – Maasai Mara
                    </span>
                  </Link>

                  <Link
                    href="/destinations/amboseli"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Amboseli – Elephants & Kilimanjaro
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Get Expert Safari Advice
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-orange-50 p-7 rounded-2xl border border-orange-200 sticky top-24">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Quick Facts
                </h3>

                <div className="space-y-6 text-gray-800">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-orange-600 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-gray-600 text-sm">Location</p>
                      <p className="font-semibold">{location.name}, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Info className="text-orange-600 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-gray-600 text-sm">Properties</p>
                      <p className="font-semibold">{destinationHotels.length} Hotels & Lodges</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="text-orange-600 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-gray-600 text-sm">Best Time to Visit</p>
                      <p className="font-semibold">{location.bestTime}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 block w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold text-center transition-colors shadow-md"
                >
                  Plan Your {location.name} Safari
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Hotels Section */}
      {destinationHotels.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Best Hotels & Lodges in {location.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from {destinationHotels.length}+ luxury accommodations, tented camps and safari lodges in {location.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
              {destinationHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/hotels"
                className="inline-flex items-center gap-2 text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                View All Hotels in Kenya <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}