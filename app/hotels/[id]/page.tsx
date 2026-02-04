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
      title: "Best Hotels | Jaetravel Expeditions – Luxury Kenya Stays",
      description:
        "The luxury hotel or safari lodge you're looking for is not available. Discover the finest luxury accommodations across Kenya.",
      robots: { index: false },
    };
  }

  const location = locations.find((l) => l.name === hotel.location) || {
    name: hotel.location,
    slug: hotel.location.toLowerCase().replace(/\s+/g, "-"),
    longDescription: `${hotel.location} – one of Kenya's premier safari and luxury destinations`,
    image: hotel.image || "/fallback-destination.jpg",
    attractions: [],
  };

  const title = `${hotel.name} – Luxury Safari Lodge & 5-Star Hotel in ${hotel.location}, Kenya – Book Direct`;
  const description = `Experience ${hotel.name} in ${hotel.location}, Kenya – one of the finest luxury safari lodges and 5-star hotels. Private plunge pools, game drives, gourmet dining & legendary service. Best rates guaranteed when you book direct.`;

  return {
    title,
    description,
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
          alt: `${hotel.name} – Luxury Safari Lodge in ${hotel.location}, Kenya`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [hotel.image],
    },
    robots: {
      index: true,
      follow: true,
    },
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
              Luxury Stay Not Found
            </h1>
            <p className="text-xl text-gray-700 mb-10">
              We couldn’t find the hotel or safari lodge you’re looking for in our collection.
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

  // Make sure location has all required fields for HotelClient
  const location = locations.find((l) => l.name === hotel.location) || {
    id: `loc-${hotel.location.toLowerCase()}`,
    name: hotel.location,
    slug: hotel.location.toLowerCase().replace(/\s+/g, "-"),
    description: `${hotel.location} – premium safari and luxury destination`,
    image: hotel.image || "/fallback.jpg",
    longDescription: `${hotel.location} is one of Kenya's most iconic travel destinations, famous for its wildlife, landscapes and warm hospitality.`,
    attractions: [],
    bestTime: "Year-round with peak seasons June–October",
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
      question: `What makes ${hotel.name} one of the best luxury lodges in ${hotel.location}?`,
      answer: `${hotel.name} combines five-star comfort, private plunge pools, exceptional game viewing, gourmet cuisine and warm Kenyan hospitality in one of the most sought-after locations in ${hotel.location}.`,
    },
    {
      question: `When is the best time to visit ${hotel.name} in ${hotel.location}?`,
      answer: `The best months for wildlife viewing are typically June to October (dry season), while January to March offers excellent dry weather and fewer crowds. Year-round stays are possible with different highlights each season.`,
    },
    {
      question: `Does ${hotel.name} offer game drives and safari activities?`,
      answer: `Yes – ${hotel.name} provides expertly guided game drives, walking safaris (where available), and other immersive wildlife experiences in the surrounding areas.`,
    },
    {
      question: `What is included when booking direct at ${hotel.name}?`,
      answer: `Direct bookings often include the best available rates, complimentary upgrades (subject to availability), personalized safari planning and exclusive lodge benefits not offered through third-party sites.`,
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

      {/* Hero / Introduction Area */}
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
            {hotel.name} – Luxury Safari Lodge & 5-Star Hotel in {hotel.location}, Kenya
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl">
            Experience Kenya at its most luxurious at <strong>{hotel.name}</strong> – an exclusive safari lodge and five-star hotel in the heart of {hotel.location}.
            Private plunge pools, breathtaking wilderness views, world-class game viewing, gourmet dining and legendary Kenyan hospitality await you.
          </p>

          <p className="mt-6 text-lg text-gray-700 max-w-3xl">
            Book direct for the <strong>best rates guaranteed</strong>, complimentary upgrades (when available), personalized safari planning and exclusive lodge benefits not found on third-party booking sites.
          </p>
        </div>
      </div>

      <HotelClient hotel={hotel} location={location} />

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            Why Discerning Travelers Choose {hotel.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Unrivalled Luxury & Comfort
              </h3>
              <p className="text-gray-700">
                Spacious suites, private plunge pools, elegant interiors and five-star amenities designed for complete relaxation after thrilling safari days.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Prime Location in {hotel.location}
              </h3>
              <p className="text-gray-700">
                Perfectly positioned to offer exceptional game viewing and easy access to {hotel.location}’s most iconic landscapes and wildlife areas.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Authentic Safari Experiences
              </h3>
              <p className="text-gray-700">
                Expertly guided game drives, walking safaris and cultural encounters delivered by passionate local guides who know {hotel.location} intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info */}
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
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Top Attractions Nearby
              </h2>
              <ul className="space-y-3 text-gray-700">
                {location.attractions.slice(0, 5).map((attr, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-600 mr-3 mt-1 text-xl">•</span>
                    <span>{attr}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Plan Your Safari
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>Best time to visit:</strong> {location.bestTime}
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Recommended stay:</strong> 3–7 nights
              </p>
              <p className="text-gray-600 text-sm">
                Contact us for tailored packages, family safaris, romantic getaways or exclusive experiences.
              </p>
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
            Secure the best rates and exclusive perks when you <strong>book direct</strong> with {hotel.name}. 
            Limited availability during peak season — reserve your dream stay today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="#booking"
              className="bg-orange-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-orange-700 transition"
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