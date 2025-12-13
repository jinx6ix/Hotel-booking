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

export function generateHotelSchema(hotel: any) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: hotel.name,
    description: hotel.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.address,
      addressLocality: hotel.location,
      addressCountry: "KE",
    },
    image: hotel.image,
    telephone: hotel.phone,
    email: hotel.email,
    ratingValue: hotel.rating,
    ratingCount: Math.floor(hotel.rating * 50),
    priceRange: `$$${hotel.price > 300 ? "$" : ""}`,
    url: `https://www.jaetravel.com/hotels/${hotel.id}`,
    amenityFeature: hotel.amenities.map((amenity: string) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hotel.rating,
      ratingCount: Math.floor(hotel.rating * 50),
      bestRating: 5,
      worstRating: 1,
    },
  }
}

export function generateLocationSchema(location: any) {
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

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://www.jaetravel.com${item.href || ""}`,
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