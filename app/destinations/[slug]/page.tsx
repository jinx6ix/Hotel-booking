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

import { Calendar, MapPin, Sun, Clock, Info, ChevronRight, Accessibility, Star, Shield, Camera, Users } from "lucide-react";

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

  return {
    title: `${location.name} Safari Kenya 2025–2026 | Best Time to Visit, Luxury Lodges & Top Attractions`,
    description: `Experience the best of ${location.name} in 2025–2026 – ${location.description}. Discover the ideal time to visit, must-see attractions, luxury lodges & camps, family & photography safaris, accessible options and how to plan your perfect ${location.name} adventure.`,
    keywords: [
      `${location.name} safari`,
      `${location.name} Kenya 2025`,
      `best time to visit ${location.name}`,
      `${location.name} national park`,
      `${location.name} luxury lodges`,
      `${location.name} attractions`,
      "kenya safari destinations 2025",
      "best safari in kenya",
      "luxury safari kenya",
      "wheelchair accessible kenya safari",
      "family safari kenya",
      "photography safari kenya",
      "book kenya safari online",
    ].join(", "),
    openGraph: {
      title: `${location.name} – Best Safari Experience Kenya 2025–2026`,
      description: location.description,
      url: `https://www.jaetravel.com/destinations/${location.slug}`,
      images: [
        {
          url: location.image,
          width: 1200,
          height: 630,
          alt: `${location.name} Kenya – ${location.description} – luxury safari destination 2025`,
        },
      ],
      type: "website",
    },
    alternates: {
      canonical: `https://www.jaetravel.com/destinations/${location.slug}`,
    },
    robots: "index, follow",
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

  if (!location) notFound();

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

  const faqItems = [
    {
      question: `What is the best time to visit ${location.name} in 2025–2026?`,
      answer: `The optimal time is ${location.bestTime}. This period offers the best wildlife viewing, pleasant weather and (in peak months) the most dramatic experiences like the Great Migration (if applicable).`,
    },
    {
      question: `What are the top attractions and highlights in ${location.name}?`,
      answer: `Key attractions include: ${location.attractions.slice(0, 6).join(", ")}, and many more unforgettable wildlife and scenic experiences.`,
    },
    {
      question: `Where are the best luxury lodges and camps in ${location.name}?`,
      answer: `We recommend staying in high-end lodges and tented camps offering excellent game viewing, gourmet dining and luxury amenities. Book early for peak season (June–October).`,
    },
    {
      question: `Is ${location.name} suitable for accessible / wheelchair safaris?`,
      answer: location.accessible
        ? "Yes – several properties offer wheelchair-accessible rooms, adapted vehicles with lifts, ramps and trained staff. We specialize in inclusive safari experiences."
        : "Accessibility varies. Some lodges offer adapted rooms and vehicles, but terrain can be challenging. Contact us for the best accessible options in this region.",
    },
    {
      question: `Can I see the Big Five in ${location.name}?`,
      answer: location.attractions.some(a => a.toLowerCase().includes("lion") || a.toLowerCase().includes("elephant") || a.toLowerCase().includes("rhino"))
        ? "Yes – many visitors successfully spot lion, leopard, elephant, buffalo and rhino in and around " + location.name + "."
        : "While " + location.name + " is famous for specific species, the full Big Five are more consistently seen in nearby regions like Maasai Mara or Tsavo.",
    },
    {
      question: `How many days should I spend in ${location.name}?`,
      answer: "Most travelers spend 3–5 nights for a relaxed experience, or 2 nights as part of a multi-destination safari. Photography and in-depth wildlife enthusiasts often stay longer.",
    },
  ];

  const faqSchema = generateFAQSchema(faqItems);

  // Review snippets
  const reviewSnippets = [
    {
      rating: 5,
      text: `The wildlife in ${location.name} was incredible. Our guide was knowledgeable and the lodge was pure luxury. Unforgettable trip!`,
      author: "James & Laura – Australia",
    },
    {
      rating: 4.9,
      text: `Stunning scenery and excellent game viewing. The accessible room and vehicle made it easy for my mother to enjoy every moment.`,
      author: "Elena M. – Canada",
    },
    {
      rating: 4.8,
      text: `Perfect for photography – the light and animals were spectacular. Highly recommend this destination!`,
      author: "Thomas K. – South Africa",
    },
  ];

  return (
    <>
      <SchemaRenderer schema={locationSchema} />
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={faqSchema} />

      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={location.image || "/placeholder.svg"}
          alt={`${location.name} Kenya safari 2025–2026 – ${location.description} – luxury lodges & wildlife`}
          fill
          priority
          quality={82}
          className="object-cover brightness-[0.88]"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-5 sm:px-8 lg:px-12">
          <div className="max-w-6xl w-full">
            <div className="inline-flex items-center gap-2.5 bg-orange-600/80 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-medium mb-5">
              <MapPin size={16} /> Kenya Safari Destination
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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
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

            <div className="flex items-center gap-3">
              <Accessibility className="text-orange-600" size={22} />
              <div>
                <p className="text-sm text-gray-600">Accessibility</p>
                <p className="font-medium">{location.accessible ? "Good options available" : "Limited – ask us"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-10 xl:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Discover {location.name} – Your Kenya Safari Adventure
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg">
                  {location.longDescription}
                </p>

                <p className="mt-6 text-gray-700 leading-relaxed">
                  Whether you're planning a <strong>luxury safari in {location.name}</strong>, a <strong>family safari Kenya</strong> experience, a <strong>photography safari</strong>, or looking for <strong>wheelchair accessible options</strong>, this destination offers unforgettable wildlife, stunning landscapes and authentic cultural moments.
                </p>
              </div>

              {/* Attractions */}
              <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Top Attractions & Wildlife in {location.name}
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

              {/* Accessible Safaris Section */}
              <div className="mb-16 bg-blue-50 p-8 md:p-10 rounded-2xl border border-blue-100">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Accessibility size={32} className="text-blue-600" />
                  Accessible Safari Options in {location.name}
                </h3>

                {location.accessible ? (
                  <p className="text-gray-700 leading-relaxed">
                    {location.name} offers good accessibility for travelers with mobility needs. Several luxury lodges provide wheelchair-accessible rooms, roll-in showers, ramps and ground-level viewing areas. We also offer adapted 4×4 safari vehicles with hydraulic lifts or ramps, wide doors and secure tie-downs. Our trained drivers and guides specialize in inclusive wildlife experiences. Contact us to customize your accessible {location.name} safari.
                  </p>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    Accessibility in {location.name} varies due to terrain and lodge design. Some properties offer adapted rooms and vehicles, but options are more limited than in Maasai Mara or Amboseli. We can help you find the most suitable accessible accommodations and transport. Let us know your needs when planning.
                  </p>
                )}

                <div className="mt-6">
                  <Link
                    href="/contact?interest=accessible-safari"
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium"
                  >
                    Plan your accessible {location.name} safari →
                  </Link>
                </div>
              </div>

              {/* Internal linking & planning block */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Plan Your {location.name} Safari Adventure
                </h3>
                <p className="text-gray-700 mb-6">
                  Looking for luxury accommodation, vehicle hire or want to combine {location.name} with other iconic Kenya destinations?
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/hotels"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Luxury Lodges & Camps
                    </span>
                  </Link>

                  <Link
                    href="/car-hire"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Safari Vehicle Hire
                    </span>
                  </Link>

                  <Link
                    href="/destinations/maasai-mara"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Maasai Mara – Great Migration
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 p-5 bg-white rounded-xl border hover:border-orange-400 hover:bg-orange-50/40 transition-colors group"
                  >
                    <div className="text-orange-600 text-xl">→</div>
                    <span className="font-medium group-hover:text-orange-700">
                      Get Expert Planning Help
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-orange-50 p-7 rounded-2xl border border-orange-200 sticky top-24">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Quick Facts – {location.name}
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
                      <p className="font-medium text-gray-600 text-sm">Accommodations</p>
                      <p className="font-semibold">{destinationHotels.length} Hotels & Lodges</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="text-orange-600 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-gray-600 text-sm">Best Time</p>
                      <p className="font-semibold">{location.bestTime}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="text-orange-600 mt-0.5" size={20} />
                    <div>
                      <p className="font-medium text-gray-600 text-sm">Ideal Stay</p>
                      <p className="font-semibold">3–7 nights</p>
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

          {/* Nearby / Comparison */}
          {location.similar && location.similar.length > 0 && (
            <section className="mt-16 py-12 bg-gray-50 rounded-2xl px-6 md:px-10">
              <h2 className="text-3xl font-bold text-center mb-10">
                Compare {location.name} with Similar Destinations
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-white">
                      <th className="p-5 text-left font-bold border-b border-r">Destination</th>
                      <th className="p-5 text-left font-bold border-b border-r">Best Time</th>
                      <th className="p-5 text-left font-bold border-b border-r">Main Highlight</th>
                      <th className="p-5 text-left font-bold border-b border-r">Big Five</th>
                      <th className="p-5 text-left font-bold border-b">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[location, ...location.similar.map(s => locations.find(l => l.name === s)!)].filter(Boolean).map((dest, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="p-5 font-medium border-r">
                          <Link href={`/destinations/${dest.slug}`} className="text-orange-600 hover:underline">
                            {dest.name}
                          </Link>
                        </td>
                        <td className="p-5 border-r">{dest.bestTime}</td>
                        <td className="p-5 border-r">{dest.highlights?.[0] || "Wildlife & scenery"}</td>
                        <td className="p-5 border-r">{dest.attractions.some(a => a.includes("lion") || a.includes("elephant")) ? "Yes" : "Partial"}</td>
                        <td className="p-5">{dest.name.includes("Mara") ? "Drama & migration" : dest.name.includes("Amboseli") ? "Scenic views" : "Unique species / wilderness"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Hotels */}
      {destinationHotels.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Best Luxury Lodges & Camps in {location.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from {destinationHotels.length}+ exceptional accommodations – tented camps, luxury lodges and boutique hotels with outstanding game viewing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
              {destinationHotels.slice(0, 6).map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/hotels"
                className="inline-flex items-center gap-2 text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                View All Hotels & Lodges in Kenya <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What Guests Say About {location.name} Safaris
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reviewSnippets.map((review, i) => (
              <div key={i} className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
            Frequently Asked Questions – {location.name} Safari
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="bg-white p-7 rounded-xl shadow-sm border border-gray-200 cursor-pointer group"
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
              Have more questions? Contact us
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience {location.name} in 2025–2026?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Luxury lodges • Expert guides • Family-friendly options • Photography safaris • Accessible experiences
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
              Browse Lodges in {location.name}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}