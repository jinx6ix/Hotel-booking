export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jaetravel Expeditions",
    url: "https://jaetravel.com",
    logo: "https://jaetravel.com/logo.png",
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
    url: `https://jaetravel.com/hotels/${hotel.id}`,
    amenityFeature: hotel.amenities.map((amenity) => ({
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
    url: `https://jaetravel.com/destinations/${location.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressCountry: "KE",
    },
    touristAttraction: location.attractions.map((attraction) => ({
      "@type": "TouristAttraction",
      name: attraction,
    })),
  }
}

export function generateFAQSchema(faqs: any[]) {
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

export function generateBreadcrumbSchema(items: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://jaetravel.com${item.href || ""}`,
    })),
  }
}
