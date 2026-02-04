// app/destinations/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SchemaRenderer } from "@/components/schema-renderer";
import { locations } from "@/lib/data";

// ────────────────────────────────────────────────
// Metadata – strong commercial + seasonal + long-tail keywords
// ────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "Best Kenya Safari Destinations 2025–2026 | Maasai Mara, Amboseli, Tsavo, Samburu, Nakuru",
  description:
    "Discover the top Kenya safari destinations for 2025–2026: Great Migration in Maasai Mara, Kilimanjaro views in Amboseli, flamingos in Lake Nakuru, unique northern species in Samburu, red landscapes in Tsavo East & West, city safari in Nairobi, and more. Plan your luxury Kenya safari adventure today.",
  keywords:
    "Kenya safari destinations, best safari in Kenya, Maasai Mara safari, Great Migration Kenya, Amboseli elephants Kilimanjaro, Tsavo National Park, Samburu special five, Lake Nakuru flamingos, Nairobi National Park safari, luxury safari lodges Kenya, best time to visit Kenya safari, Kenya wildlife safari tours",

  alternates: {
    canonical: "https://www.jaetravelexpeditions.com/destinations",
  },

  openGraph: {
    title:
      "Best Kenya Safari Destinations 2025–2026 • Maasai Mara • Amboseli • Tsavo • Samburu",
    description:
      "Plan your dream safari in Kenya – Great Migration, Big Five, Kilimanjaro views, flamingos, unique wildlife and luxury lodges.",
    url: "https://www.jaetravelexpeditions.com/destinations",
    images: [
      {
        url: "/og-kenya-safari-destinations-2025.jpg",
        width: 1200,
        height: 630,
        alt: "Top Kenya Safari Destinations – Maasai Mara, Amboseli, Tsavo, Samburu, Nakuru",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Kenya Safari Destinations 2025–2026",
    images: ["/twitter-kenya-safari-destinations.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ────────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravelexpeditions.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Destinations",
      item: "https://www.jaetravelexpeditions.com/destinations",
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
      url: `https://www.jaetravelexpeditions.com/destinations/${loc.slug}`,
      image: loc.image,
    },
  })),
};

export default function DestinationsPage() {
  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={itemListSchema} />

      <Header />

      {/* Hero / Introduction – richer text */}
      <div className="relative bg-gradient-to-b from-orange-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Destinations" },
            ]}
          />

          <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
            Best Kenya Safari lodges Destinations 2025–2026
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl leading-relaxed">
            Discover the most iconic <strong>Kenya safari destinations</strong> — from the world-famous{" "}
            <strong>Great Migration</strong> in <strong>Maasai Mara</strong>, breathtaking elephant
            herds with <strong>Mount Kilimanjaro</strong> views in <strong>Amboseli</strong>, pink
            flamingo spectacles at <strong>Lake Nakuru</strong>, unique northern species in{" "}
            <strong>Samburu</strong>, vast red-dust landscapes in <strong>Tsavo East</strong> and{" "}
            <strong>Tsavo West</strong>, relaxing lake experiences in <strong>Naivasha</strong>, to
            thrilling city safaris in <strong>Nairobi National Park</strong>.
          </p>

          <p className="mt-6 text-lg text-gray-700 max-w-4xl">
            Whether you&apos;re searching for <strong>luxury safari lodges in Kenya</strong>, family-friendly
            safari camps, the best <strong>photographic safaris</strong>, or your first{" "}
            <strong>Kenya wildlife safari tour</strong>, each destination offers its own magic. From
            Big Five sightings and predator action to cultural encounters with Maasai and Samburu
            communities — Kenya delivers unforgettable safari experiences year after year.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
            >
              View Luxury Safari Lodges →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-700 hover:bg-orange-50 px-7 py-3.5 rounded-lg font-medium transition-colors"
            >
              Get Personalized Safari Advice
            </Link>
          </div>
        </div>
      </div>

      {/* Destinations Grid – with richer cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Explore Kenya&apos;s Top Safari Destinations
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From the dramatic <strong>Great Migration</strong> to serene lakes, volcanic landscapes
            and northern wilderness — choose your perfect Kenya safari experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
            {locations.map((location, index) => (
              <Link
                key={location.id}
                href={`/destinations/${location.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`${location.name} Kenya – ${location.description} – best time to visit`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={78}
                    priority={index < 3}
                  />
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {location.name}
                  </h2>

                  <p className="text-gray-700 mb-4 line-clamp-3 flex-grow">
                    {location.description}
                  </p>

                  <div className="mt-auto space-y-3 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      <strong>Best time to visit:</strong> {location.bestTime}
                    </p>
                    <span className="inline-flex items-center text-orange-600 font-medium group-hover:text-orange-700">
                      Discover {location.name} safaris →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 text-xl font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              Browse All Luxury Safari Lodges in Kenya →
            </Link>
          </div>
        </div>
      </section>

      {/* Rich content section with internal links */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Planning Your Kenya Safari – Popular Routes & Experiences
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              Kenya offers incredible variety for every type of traveler. The classic{" "}
              <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline">
                Maasai Mara safari
              </Link>{" "}
              delivers drama with the <strong>Great Migration</strong> and excellent{" "}
              <strong>Big Five</strong> sightings. For breathtaking scenery, nothing beats{" "}
              <Link href="/destinations/amboseli" className="text-orange-600 hover:underline">
                Amboseli
              </Link>{" "}
              with its huge elephant herds framed by{" "}
              <strong>Mount Kilimanjaro</strong>.
            </p>

            <p>
              Wildlife photographers and those seeking solitude love the vast red landscapes of{" "}
              <Link href="/destinations/tsavo-east" className="text-orange-600 hover:underline">
                Tsavo East
              </Link>{" "}
              and{" "}
              <Link href="/destinations/tsavo-west" className="text-orange-600 hover:underline">
                Tsavo West
              </Link>
              , while <Link href="/destinations/samburu" className="text-orange-600 hover:underline">
                Samburu
              </Link>{" "}
              offers a chance to see the unique{" "}
              <strong>Special Five</strong> – Grevy’s zebra, reticulated giraffe, beisa oryx,
              Somali ostrich and gerenuk.
            </p>

            <p>
              Families and short-stay visitors often combine{" "}
              <Link href="/destinations/nairobi" className="text-orange-600 hover:underline">
                Nairobi National Park
              </Link>{" "}
              (the only capital city with a national park inside its borders) with nearby{" "}
              <Link href="/destinations/naivasha" className="text-orange-600 hover:underline">
                Lake Naivasha
              </Link>{" "}
              boat rides or a flamingo-filled day at{" "}
              <Link href="/destinations/nakuru" className="text-orange-600 hover:underline">
                Lake Nakuru
              </Link>
              .
            </p>

            <p className="font-medium text-lg mt-8">
              Ready to start planning? Choose your dream destination and let us help you create the
              perfect <strong>Kenya safari tour</strong>.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Maasai Mara", slug: "maasai-mara" },
              { name: "Amboseli", slug: "amboseli" },
              { name: "Samburu", slug: "samburu" },
              { name: "Tsavo East", slug: "tsavo-east" },
              { name: "Lake Nakuru", slug: "nakuru" },
              { name: "Nairobi", slug: "nairobi" },
            ].map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}`}
                className="flex items-center justify-center bg-white border border-gray-200 hover:border-orange-400 rounded-xl px-6 py-4 text-center font-medium text-gray-800 hover:text-orange-700 transition-colors"
              >
                {dest.name} Safari
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}