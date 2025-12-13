// app/hotels/[id]/page.tsx
import type { Metadata } from "next";
import { hotels, locations } from "@/lib/data";
import { generateHotelSchema, generateBreadcrumbSchema } from "@/lib/schema";
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
      title: "Hotel Not Found",
      description: "The hotel you are looking for does not exist.",
    };
  }

  return {
    title: `${hotel.name} - ${hotel.location} | Jaetravel Expeditions`,
    description: `${hotel.description} Book ${hotel.name} in ${hotel.location} from $${hotel.price}/night. ${hotel.amenities.join(", ")}.`,
    keywords: `${hotel.name}, ${hotel.location} hotel, Kenya accommodation, safari lodge`,
    openGraph: {
      title: `${hotel.name} - ${hotel.location}`,
      description: hotel.description,
      url: `https://www.jaetravel.com/hotels/${hotel.id}`,
      type: "website",
      images: [{ url: hotel.image, width: 1200, height: 630 }],
    },
  };
}

export function generateStaticParams() {
  return hotels.map((hotel) => ({ id: hotel.id }));
}

export default async function HotelPage({ params }: HotelPageProps) {
  const { id } = await params;
  const hotel = hotels.find((h) => h.id === id);
  const location = locations.find((l) => l.name === hotel?.location);

  if (!hotel) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hotel Not Found</h1>
            <Link href="/hotels" className="text-orange-500 hover:text-orange-600">
              Back to Hotels
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const hotelSchema = generateHotelSchema(hotel);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: hotel.location, href: `/destinations/${location?.slug}` },
    { label: hotel.name, href: `/hotels/${hotel.id}` },
  ]);

  return (
    <>
      <SchemaRenderer schema={hotelSchema} />
      <SchemaRenderer schema={breadcrumbSchema} />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: hotel.location, href: `/destinations/${location?.slug}` },
          { label: hotel.name },
        ]}
      />

      {/* All interactive UI lives in the client component */}
      <HotelClient hotel={hotel} location={location} />

      <Footer />
    </>
  );
}