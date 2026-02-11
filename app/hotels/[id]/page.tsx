// app/hotels/[id]/page.tsx
import type { Metadata } from "next";
import { hotels, locations } from "@/lib/data";
import {
  generateHotelSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocationSchema,
  generateOrganizationSchema,
} from "@/lib/schema";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SchemaRenderer } from "@/components/schema-renderer";
import HotelClient from "./HotelClient";
import Link from "next/link";

interface HotelPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: HotelPageProps): Promise<Metadata> {
  const { id } = await params;
  const hotel = hotels.find((h) => h.id === id);

  if (!hotel) {
    return {
      title: "Hotel Not Found | Jaetravel Expeditions – Luxury Kenya Stays",
      description: "The luxury safari lodge or hotel you're looking for is not available.",
      robots: { index: false },
    };
  }

  // Removed unused 'location' variable assignment

  const title = `${hotel.name} – Luxury Safari Lodge & 5-Star Hotel in ${hotel.location}, Kenya – Book Direct`;
  const description = `Stay at ${hotel.name} in ${hotel.location}, Kenya – one of the finest luxury safari lodges and 5-star hotels. Enjoy private plunge pools, game drives, gourmet dining, world-class service and best rates when booking direct.`;

  return {
    title,
    description,
    keywords: [
      `${hotel.name}`,
      `${hotel.location} luxury hotel`,
      `${hotel.location} safari lodge`,
      `luxury hotels ${hotel.location} Kenya`,
      `${hotel.location} 5 star accommodation`,
      "Kenya safari lodges",
      "luxury safari Kenya",
      "book direct safari hotel",
    ].join(", "),

    alternates: {
      canonical: `https://www.jaetravelexpeditions.com/hotels/${hotel.id}`,
    },

    openGraph: {
      title,
      description,
      url: `https://www.jaetravelexpeditions.com/hotels/${hotel.id}`,
      images: [
        {
          url: hotel.image,
          width: 1200,
          height: 630,
          alt: `${hotel.name} – Luxury ${hotel.location} Safari Lodge & Hotel`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [hotel.image],
    },

    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return hotels.map((hotel) => ({ id: hotel.id }));
}

export default async function HotelPage({ params }: HotelPageProps) {
  const { id } = await params;
  const hotel = hotels.find((h) => h.id === id);

  if (!hotel) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-white py-20">
          <div className="text-center max-w-2xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Luxury Hotel Not Found
            </h1>
            <p className="text-xl text-gray-700 mb-10">
              Sorry, we couldn’t find that safari lodge or hotel in our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/hotels"
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition"
              >
                View All Luxury Hotels
              </Link>
              <Link
                href="/destinations"
                className="border-2 border-orange-600 text-orange-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition"
              >
                Explore Kenya Destinations
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const location = locations.find((l) => l.name === hotel.location) || {
    id: `loc-${hotel.location.toLowerCase()}`,
    name: hotel.location,
    slug: hotel.location.toLowerCase().replace(/\s+/g, "-"),
    description: `${hotel.location} – premier safari and luxury destination`,
    longDescription: `${hotel.location} is one of Kenya's most sought-after locations, offering world-class wildlife viewing, stunning landscapes and warm hospitality.`,
    image: hotel.image || "/fallback.jpg",
    attractions: [],
    bestTime: "Year-round – peak wildlife June–October",
  };

  // Structured Data
  const hotelSchema = generateHotelSchema(hotel);
  const organizationSchema = generateOrganizationSchema();
  const locationSchema = generateLocationSchema(location);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Hotels & Safari Lodges", href: "/hotels" },
    { label: hotel.location, href: `/destinations/${location.slug}` },
    { label: hotel.name },
  ]);

  const faqItems = [
    {
      question: `What makes ${hotel.name} special in ${hotel.location}?`,
      answer: `${hotel.name} offers five-star luxury combined with authentic safari experiences – private plunge pools, exceptional game viewing, gourmet dining and warm Kenyan hospitality in the heart of ${hotel.location}.`,
    },
    {
      question: `What is the best time to stay at ${hotel.name}?`,
      answer: `The best wildlife viewing is usually ${location.bestTime}. Dry season (June–October) offers excellent game sightings, while other months provide fewer crowds and different seasonal highlights.`,
    },
    {
      question: `Does ${hotel.name} offer safari activities?`,
      answer: `Yes – ${hotel.name} provides guided game drives, walking safaris (where available), bird watching and cultural experiences in and around ${hotel.location}.`,
    },
    {
      question: `Why book ${hotel.name} directly?`,
      answer: `Booking direct gives you the best available rates, complimentary upgrades when possible, flexible cancellation, and exclusive lodge benefits not available through third-party platforms.`,
    },
  ];

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      <SchemaRenderer schema={hotelSchema} />
      <SchemaRenderer schema={organizationSchema} />
      <SchemaRenderer schema={locationSchema} />
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={faqSchema} />

      <Header />

      {/* Hero */}
      <div className="relative bg-gradient-to-b from-orange-50 via-white to-gray-50 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Hotels & Safari Lodges", href: "/hotels" },
              { label: hotel.location, href: `/destinations/${location.slug}` },
              { label: hotel.name },
            ]}
          />

          <h1 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {hotel.name} – Luxury Safari Lodge & 5-Star Hotel in {hotel.location}
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl">
            Experience the very best of <strong>luxury safari accommodation in Kenya</strong> at <strong>{hotel.name}</strong> — an exclusive 5-star lodge in the heart of {hotel.location}.
            Private plunge pools, breathtaking wilderness views, world-class game drives, gourmet dining and legendary Kenyan hospitality await you.
          </p>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            Book direct today and enjoy <strong>best rates guaranteed</strong>, complimentary upgrades (subject to availability), flexible cancellation, personalized safari planning and exclusive benefits not offered on third-party sites.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#booking"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Check Availability & Book Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Ask About Special Offers
            </Link>
          </div>
        </div>
      </div>

      <HotelClient hotel={hotel} location={location} />

      {/* Why Choose */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why Travelers Choose {hotel.name}
          </h2>

          <div className="grid md:grid-cols-3 gap-7 lg:gap-9">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold mb-4">Unmatched Luxury & Comfort</h3>
              <p className="text-gray-700">
                Spacious suites, private plunge pools, elegant interiors, high-thread-count linens and five-star amenities designed for total relaxation after thrilling safari days.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold mb-4">Prime {hotel.location} Location</h3>
              <p className="text-gray-700">
                Perfectly positioned for exceptional game viewing and easy access to {hotel.location}’s most iconic wildlife areas, landscapes and attractions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-100">
              <h3 className="text-xl font-bold mb-4">Authentic Safari Experiences</h3>
              <p className="text-gray-700">
                Expert-guided game drives, walking safaris, bush meals, cultural visits and personalized wildlife experiences led by passionate local guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info + Internal Links */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                About {hotel.location}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {location.longDescription}
              </p>
              <p className="mt-4">
                <Link
                  href={`/destinations/${location.slug}`}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Discover more about {hotel.location} safaris →
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Top Nearby Attractions
              </h2>
              <ul className="space-y-3 text-gray-700">
                {location.attractions.slice(0, 6).map((attr, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1 text-xl">•</span>
                    {attr}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan Your Stay
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Best time to visit:</strong> {location.bestTime}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Recommended stay:</strong> 3–7 nights
              </p>
              <p className="text-gray-700 mb-6">
                Combine your stay at {hotel.name} with other iconic Kenya destinations.
              </p>
              <Link
                href="/destinations"
                className="text-orange-600 hover:text-orange-700 font-medium block"
              >
                View all Kenya safari destinations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready for Your Luxury Safari at {hotel.name}?
          </h2>

          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Book direct and enjoy the <strong>best available rates</strong>, exclusive perks, complimentary upgrades, flexible cancellation and personalized safari planning.
            Limited rooms during peak season — reserve your dream stay at {hotel.name} today.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#booking"
              className="bg-orange-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-orange-700 transition shadow-md"
            >
              Check Availability & Book Now
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-orange-600 text-orange-700 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-orange-50 transition"
            >
              Contact Us for Tailored Advice
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}