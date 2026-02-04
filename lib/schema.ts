// @/lib/schema.ts

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jaetravel Expeditions",
    url: "https://www.jaetravel.com",
    logo: "https://www.jaetravel.com/logo.png",
    description: "Kenya safari tours and hotel bookings across 9 destinations",
    sameAs: [
      "https://www.facebook.com/jaetravel",
      "https://www.instagram.com/jaetravel",
      "https://www.twitter.com/jaetravel",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-20-2000000",
      contactType: "Customer Service",
      email: "info@jaetravel.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tourist Board, Nairobi",
      addressLocality: "Nairobi",
      addressRegion: "Kenya",
      postalCode: "00100",
      addressCountry: "KE",
    },
  }
}

interface Hotel {
  name: string;
  description: string;
  address: string;
  location: string;
  phone: string;
  email: string;
  price: number;
  rating: number;
  amenities: string[];
  rooms: {
    type: string;
    description: string;
    maxOccupancy: number;
    amenities: string[];
    price: number;
    available: number;
  }[];
}

export function generateHotelSchema(hotel: Hotel) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": hotel.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": hotel.address,
      "addressLocality": hotel.location,
      "addressCountry": "KE"
    },
    "telephone": hotel.phone,
    "email": hotel.email,
    "priceRange": `$${hotel.price} - $${hotel.price * 3}`,
    "starRating": {
      "@type": "Rating",
      "ratingValue": hotel.rating,
      "bestRating": "5"
    },
    "amenities": hotel.amenities,
    "checkinTime": "14:00",
    "checkoutTime": "11:00",
    "petsAllowed": hotel.amenities.includes("Pet Friendly"),
    "currenciesAccepted": "KES, USD, EUR, GBP",
    "paymentAccepted": "Credit Card, Cash",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Room Packages",
      "itemListElement": hotel.rooms.map((room: Hotel['rooms'][number]) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "HotelRoom",
          "name": room.type,
          "description": room.description,
          "occupancy": {
            "@type": "QuantitativeValue",
            "value": room.maxOccupancy
          },
          "amenityFeature": room.amenities.map((amenity: string) => ({
            "@type": "LocationFeatureSpecification",
            "name": amenity
          }))
        },
        "price": room.price,
        "priceCurrency": "USD",
        "availability": room.available > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
      }))
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": hotel.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Guest"
      }
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{label: string, href?: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://www.jaetravelexpeditions.com${item.href}` : undefined
    }))
  };
}

export function generateFAQSchema(faqItems: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

interface Location {
  name: string;
  longDescription: string;
  image: string;
  slug: string;
  attractions: string[];
}

export function generateLocationSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: location.name,
    description: location.longDescription,
    image: location.image,
    url: `https://www.jaetravel.com/destinations/${location.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressCountry: "KE",
    },
    touristAttraction: location.attractions.map((attraction: string) => ({
      "@type": "TouristAttraction",
      name: attraction,
    })),
  }
}


/**
 * Generate Schema.org Vehicle (as Product) for car hire
 * @see https://schema.org/Vehicle
 * @see https://schema.org/RentalCar
 */
export function generateVehicleSchema({
  name,
  description,
  price,
  image,
  url,
  passengers,
  fuelType = "Diesel",
  vehicleConfiguration = "4x4 Pop-up Roof",
  brand = "Toyota",
  model = "Land Cruiser",
}: {
  name: string
  description: string
  price: string
  image: string
  url: string
  passengers?: number
  fuelType?: string
  vehicleConfiguration?: string
  brand?: string
  model?: string
}) {
  const priceMatch = price.match(/\$(\d+)/)
  const priceValue = priceMatch ? parseInt(priceMatch[1], 10) : 0

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://www.jaetravel.com${image}`,
    url,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: priceValue,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      availability: "https://schema.org/InStock",
      url,
      seller: {
        "@type": "Organization",
        name: "Jaetravel Expeditions",
      },
      offeredBy: {
        "@type": "Organization",
        name: "Jaetravel Expeditions",
      },
    },
    // Vehicle-specific properties
    ...(passengers && {
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Passenger Capacity",
          value: passengers,
        },
      ],
    }),
    vehicleConfiguration,
    fuelType,
    model,
    // Optional: Enhance with RentalCar if applicable
    "@id": `${url}#vehicle`,
    subjectOf: {
      "@type": "Car",
      name,
      brand: {
        "@type": "Brand",
        name: brand,
      },
      model,
      fuelType,
      vehicleConfiguration,
      numberOfDoors: 5,
      vehicleSeatingCapacity: passengers || 6,
    },
  }
}