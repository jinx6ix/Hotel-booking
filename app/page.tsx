import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { locations } from "@/lib/data";
import { MapPin, Star, Users, Award, Accessibility, Calendar, Globe, Heart } from "lucide-react";
import { SchemaRenderer } from "@/components/schema-renderer";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { QuickBooking } from "@/components/quick-booking";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Jaetravel Expeditions – Best Kenya Safari Tours 2025/2026 | Luxury Lodges & Accessible Safaris",
  description:
    "Book unforgettable Kenya safari tours with luxury hotels, 5-star lodges and wheelchair accessible accommodations. Experience the Great Migration in Maasai Mara, Kilimanjaro views in Amboseli, flamingos in Lake Nakuru, unique wildlife in Samburu and Tsavo. Inclusive safari travel for families, couples and travelers with disabilities – expert guides, 4.8★ rated.",
  keywords:
    "Kenya safari tours, luxury safari Kenya, accessible safari Kenya, Maasai Mara safari, Great Migration tours, Amboseli National Park, Samburu special five, Lake Nakuru flamingos, Tsavo East Tsavo West, Nairobi safari, wheelchair accessible Kenya safari, inclusive travel Kenya, luxury lodges Kenya, safari for disabled, family safari Kenya, best time to visit Kenya, Kenya wildlife safaris, book safari online, luxury hotel Kenya, accessible rooms Kenya",
  openGraph: {
    title: "Jaetravel Expeditions – Luxury & Accessible Kenya Safari Tours 2025/2026",
    description:
      "Premium hotel-based safari tours in Kenya with 5-star lodges, wheelchair accessible options, expert guides and unforgettable wildlife experiences.",
    url: "https://www.jaetravel.com",
    type: "website",
    images: [
      {
        url: "https://www.jaetravel.com/kenya-safari-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Safari – Great Migration in Maasai Mara National Reserve – luxury lodge view",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaetravel Expeditions – Luxury & Inclusive Kenya Safaris",
    description:
      "Book luxury and accessible safari tours in Maasai Mara, Amboseli, Tsavo, Samburu, Nakuru and more – 4.8★ rated.",
    images: ["https://www.jaetravel.com/kenya-safari-landscape.jpg"],
  },
  alternates: {
    canonical: "https://www.jaetravel.com",
  },
  robots: "index, follow",
};

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ label: "Home", href: "/" }]);

  // FAQ Schema
  const faqItems = [
    {
      question: "What is the best time to visit Kenya for safari?",
      answer:
        "The best time for most Kenya safari destinations is the dry season from June to October, especially for the Great Migration in Maasai Mara. January to March also offers excellent dry weather and fewer crowds in many parks.",
    },
    {
      question: "Is Kenya safari suitable for travelers with disabilities?",
      answer:
        "Yes – we offer wheelchair accessible safaris with modified 4×4 vehicles, accessible hotel rooms, trained guides and inclusive experiences across multiple destinations including Maasai Mara, Amboseli and Nairobi.",
    },
    {
      question: "Which destination is best for the Great Migration?",
      answer:
        "The Maasai Mara National Reserve is the best place to witness the Great Migration river crossings, typically between July and October. It offers exceptional wildlife viewing and luxury lodge options.",
    },
    {
      question: "Are your safari tours family-friendly?",
      answer:
        "Yes – many of our luxury lodges and safari packages are perfect for families with children. We offer family rooms, child-friendly activities, and safe game viewing experiences.",
    },
    {
      question: "What types of accommodations do you offer in Kenya?",
      answer:
        "We provide luxury tented camps, 5-star lodges, boutique hotels and wheelchair accessible rooms across 9 iconic destinations including Maasai Mara, Amboseli, Tsavo, Samburu, Lake Nakuru and Nairobi.",
    },
  ];

  const faqSchema = generateFAQSchema(faqItems);

  // Organization + Review + Merchant signals
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jaetravel Expeditions",
    url: "https://www.jaetravel.com",
    logo: "https://www.jaetravel.com/logo.png",
    description:
      "Premium Kenya safari tour operator offering luxury hotel-based safaris and accessible travel experiences.",
    sameAs: [
      "https://www.facebook.com/jaetravelexpeditions",
      "https://www.instagram.com/jaetravelexpeditions",
      "https://twitter.com/jaetravel",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1247",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={faqSchema} />
      <SchemaRenderer schema={organizationSchema} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-orange-600 to-orange-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/kenya-safari-landscape.webp"
            alt="Great Migration Kenya safari – wildebeest river crossing Maasai Mara luxury lodge view"
            className="w-full h-full object-cover opacity-45"
            loading="eager"
            fill
            priority
            quality={82}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Luxury & Accessible Kenya Safari Tours 2025–2026
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-orange-50/95 leading-relaxed">
              Experience the world-famous <strong>Great Migration</strong> in <strong>Maasai Mara</strong>,
              elephants with <strong>Mount Kilimanjaro</strong> views in <strong>Amboseli</strong>, pink flamingo lakes in{" "}
              <strong>Lake Nakuru</strong>, unique northern wildlife in <strong>Samburu</strong> and vast wilderness in{" "}
              <strong>Tsavo</strong> — all with premium 5-star lodges and full accessibility options.
            </p>
          </div>

          {/* Booking boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-orange-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <Star className="text-orange-500" size={32} />
                Luxury Safari Experience
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Private game drives • 5-star lodges • Gourmet dining • Hot-air balloon rides • Expert naturalist guides
              </p>
              <QuickBooking />
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 shadow-2xl text-white border border-blue-400/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
                <Accessibility className="text-yellow-300" size={32} />
                Accessible & Inclusive Safari
              </h3>
              <p className="text-blue-50 mb-6 text-lg">
                Wheelchair accessible rooms • Adapted safari vehicles • Trained accessibility guides • Inclusive wildlife experiences for all abilities
              </p>
              <QuickBooking accessible={true} />
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              href="/destinations"
              className="bg-white text-orange-700 px-9 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Explore All 9 Safari Destinations
            </Link>
            <Link
              href="/hotels"
              className="bg-transparent border-2 border-white text-white px-9 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition backdrop-blur-sm"
            >
              View Luxury Lodges & Hotels
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">9</div>
              <p className="text-lg font-medium text-gray-700">Iconic Safari Destinations</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">120+</div>
              <p className="text-lg font-medium text-gray-700">Luxury & Accessible Lodges</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">4.8★</div>
              <p className="text-lg font-medium text-gray-700">Traveler Rating</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">10,000+</div>
              <p className="text-lg font-medium text-gray-700">Happy Safari Guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rich content section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Discover the Best Kenya Safari Experiences
          </h2>

          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
            <p>
              Kenya offers some of the world’s most spectacular wildlife adventures. Witness the dramatic{" "}
              <strong>Great Migration</strong> in the <strong>Maasai Mara</strong>, where millions of wildebeest and zebras cross crocodile-infested rivers. Photograph massive elephant herds against the majestic{" "}
              <strong>Mount Kilimanjaro</strong> backdrop in <strong>Amboseli National Park</strong>. Marvel at thousands of pink flamingos at{" "}
              <strong>Lake Nakuru</strong> and discover the rare{" "}
              <strong>Samburu Special Five</strong> animals in the remote northern reserves.
            </p>

            <p>
              Our <strong>luxury hotel-based safari tours</strong> combine comfort and adventure — return each evening to 5-star lodges, tented camps or boutique hotels with swimming pools, gourmet restaurants, private plunge pools and breathtaking views. No camping required.
            </p>

            <div className="grid md:grid-cols-2 gap-10 my-14">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
                  Luxury Safari Holidays in Kenya
                </h3>
                <p>
                  Enjoy private game drives, hot-air balloon safaris at sunrise, bush dinners under the stars, and stays in the most exclusive{" "}
                  <Link href="/hotels" className="text-orange-600 hover:underline font-medium">
                    luxury lodges Kenya
                  </Link>{" "}
                  has to offer — from <strong>Maasai Mara luxury lodges</strong> to elegant resorts near Nairobi.
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-gray-900">
                  Inclusive & Wheelchair Accessible Safaris
                </h3>
                <p>
                  We make Africa’s wildlife accessible to everyone. Wheelchair-accessible rooms, adapted safari vehicles with lifts, trained accessibility guides and inclusive experiences ensure every traveler can enjoy the magic of{" "}
                  <strong>Kenya wildlife safaris</strong>.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
              Top Kenya Safari Destinations You Can Explore
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              {[
                { name: "Maasai Mara – Great Migration", slug: "maasai-mara" },
                { name: "Amboseli – Kilimanjaro Views", slug: "amboseli" },
                { name: "Samburu – Special Five Animals", slug: "samburu" },
                { name: "Lake Nakuru – Flamingos & Rhinos", slug: "nakuru" },
                { name: "Tsavo East & West – Wilderness", slug: "tsavo-east" },
                { name: "Nairobi – City Safari", slug: "nairobi" },
              ].map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="bg-gray-50 hover:bg-orange-50 p-6 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors group"
                >
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {d.name}
                  </h4>
                  <p className="mt-2 text-gray-600">Discover luxury lodges & best time to visit</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                View All 9 Safari Destinations
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Destinations Preview */}
            <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our 9 Kenya Safari Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the world-famous <strong>Maasai Mara</strong> to the remote wilderness of <strong>Samburu</strong>, each destination offers unique wildlife, landscapes, and cultural experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/destinations/${location.slug}`}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`${location.name} Kenya Safari - ${location.description} | Luxury & Accessible Tours`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-orange-200 text-sm">{location.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section – visible + schema */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
            Frequently Asked Questions about Kenya Safaris
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Book Your Kenya Safari Adventure?
          </h2>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Luxury lodges • Wheelchair accessible options • Expert guides • Great Migration • Big Five • Family safaris – we create the perfect itinerary for every traveler.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-700 px-12 py-6 rounded-xl font-bold text-xl hover:bg-orange-50 transition shadow-lg"
            >
              Get Your Personalized Safari Quote
            </Link>
            <Link
              href="/hotels"
              className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition backdrop-blur-sm"
            >
              Browse Luxury & Accessible Lodges
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}