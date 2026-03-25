// app/accessible/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { accessibleHotels } from "@/lib/accessible";
import { AccessibleHotelClient } from "./AccessibleHotelClient";

// Generate static paths for all accessible hotels (ISR/SSG)
export async function generateStaticParams() {
  return accessibleHotels.map((hotel) => ({
    slug: hotel.id,
  }));
}

// Generate metadata for SEO (server-side)
// app/accessible/[slug]/page.tsx

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const hotel = accessibleHotels.find((h) => h.id === slug);
  
    if (!hotel) {
      return {
        title: "Accessible Hotel Not Found | Jaetravel Kenya",
        description: "The wheelchair accessible hotel you're looking for could not be found.",
        robots: { index: false },
      };
    }
  
    // === Make it as beautiful as the /hotels/ version ===
    const title = `${hotel.name} – Luxury Accessible Safari Lodge & Hotel in ${hotel.location}, Kenya`;
  
    const description = `Stay at ${hotel.name} in ${hotel.location}, Kenya – a fully wheelchair accessible luxury hotel. Features roll-in showers, wide doorways, ${hotel.rooms?.filter(r => r.accessible).length || 1} accessible rooms with detailed mobility features including bed height, desk clearance, and supportive seating. Book your comfortable accessible safari stay today.`;
  
    // Use the best image possible (especially nice for Muthu)
    const ogImage = hotel.id === "naivasha-008" 
      ? "/muthu-signboard.jpg"   // ← Upload your nice MGM sign photo here
      : hotel.image;
  
    return {
      title,
      description,
  
      keywords: [
        `${hotel.name}`,
        `accessible hotel ${hotel.location}`,
        `wheelchair accessible ${hotel.location}`,
        `roll-in shower hotel ${hotel.location}`,
        `disability friendly hotel Kenya`,
        `accessible safari lodge ${hotel.location}`,
        "accessible hotels Kenya",
      ].join(", "),
  
      alternates: {
        canonical: `https://www.jaetravel.com/accessible/${hotel.id}`,
      },
  
      openGraph: {
        title: `${hotel.name} – Luxury Accessible Hotel in ${hotel.location}`,
        description,
        url: `https://www.jaetravel.com/accessible/${hotel.id}`,
        siteName: "Jaetravel Kenya",
        type: "website",
        locale: "en_KE",
        images: [
          {
            url: ogImage.startsWith('/') ? `https://www.jaetravel.com${ogImage}` : ogImage,
            width: 1200,
            height: 630,
            alt: `${hotel.name} – Wheelchair Accessible Luxury Hotel in ${hotel.location}, Kenya`,
          },
        ],
      },
  
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage.startsWith('/') ? `https://www.jaetravel.com${ogImage}` : ogImage],
      },
  
      robots: { index: true, follow: true },
    };
  }

// Generate JSON-LD Structured Data for rich search results (server-side)
function generateJsonLd(hotel: NonNullable<ReturnType<typeof accessibleHotels.find>>) {
  const accessibleRoomCount = hotel.rooms?.filter(r => r.accessible).length || 0;
  const accessibleRooms = hotel.rooms?.filter(r => r.accessible) || [];
  
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": hotel.description,
    "url": `https://jaetravel.co.ke/accessible/${hotel.id}`,
    "image": hotel.image,
    "priceRange": `$${Math.min(...hotel.rooms.map(r => r.price))} - $${Math.max(...hotel.rooms.map(r => r.price))}`,
    "starRating": {
      "@type": "Rating",
      "ratingValue": hotel.rating,
      "bestRating": "5",
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": hotel.location,
      "addressRegion": hotel.location,
      "addressCountry": "KE",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": hotel.location === "Nairobi" ? -1.286389 : 
                hotel.location === "Naivasha" ? -0.7167 : 
                hotel.location === "Nakuru" ? -0.3031 : 
                hotel.location === "Mombasa" ? -4.0435 : 
                hotel.location === "Amboseli" ? -2.6396 : 
                hotel.location === "Maasai Mara" ? -1.4911 : -0.0236,
      "longitude": hotel.location === "Nairobi" ? 36.817223 : 
                 hotel.location === "Naivasha" ? 36.4319 : 
                 hotel.location === "Nakuru" ? 36.0800 : 
                 hotel.location === "Mombasa" ? 39.6682 : 
                 hotel.location === "Amboseli" ? 37.2413 : 
                 hotel.location === "Maasai Mara" ? 35.1434 : 37.9062,
    },
    "telephone": hotel.phone,
    "email": hotel.email,
    "amenities": hotel.amenities,
    "numberOfRooms": hotel.rooms.length,
    "numberOfAccessibleRooms": accessibleRoomCount,
    "accessibilityFeature": [
      {
        "@type": "AccessibilityFeature",
        "name": "Wheelchair Accessible",
        "value": true,
      },
      ...(accessibleRooms.some(r => r.accessibilityFeatures?.some(f => f.includes("Roll-in"))) ? [{
        "@type": "AccessibilityFeature",
        "name": "Roll-in Shower",
        "value": true,
      }] : []),
      ...(hotel.accessibilityFeatures?.some(f => f.category === "parking") ? [{
        "@type": "AccessibilityFeature",
        "name": "Accessible Parking",
        "value": true,
      }] : []),
      ...(hotel.accessibilityFeatures?.some(f => f.category === "entrance") ? [{
        "@type": "AccessibilityFeature",
        "name": "Accessible Entrance",
        "value": true,
      }] : []),
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://jaetravel.co.ke/booking?hotel=${hotel.id}`,
        "inLanguage": "en",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": `Book ${hotel.name} - Accessible Room`,
      }
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": hotel.rating,
        "bestRating": "5",
      },
      "author": {
        "@type": "Organization",
        "name": "Jaetravel Kenya",
      },
      "reviewBody": `Verified accessible hotel with ${accessibleRoomCount} accessible rooms featuring roll-in showers, grab bars, and wide doorways.`,
    },
  };
}

// Main Server Component
export default async function AccessibleHotelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hotel = accessibleHotels.find((h) => h.id === slug);

  if (!hotel) {
    notFound();
  }

  const jsonLd = generateJsonLd(hotel);
  const accessibleRoomCount = hotel.rooms?.filter(r => r.accessible).length || 0;

  return (
    <>
      {/* JSON-LD Structured Data for rich search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Client Component with all interactive functionality */}
      <AccessibleHotelClient 
        hotel={hotel} 
        accessibleRoomCount={accessibleRoomCount}
      />
    </>
  );
}