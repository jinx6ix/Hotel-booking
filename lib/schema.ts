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
  currency = "USD",
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
  currency?: string
}) {
  const priceMatch = price.match(/\$(\d+)/)
  const priceValue = priceMatch ? parseInt(priceMatch[1], 10) : 0

  return {
    "@context": "https://schema.org",
    "@type": ["Product", "Vehicle"],
    name,
    description,
    image: `https://www.jaetravel.com${image}`,
    url,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: [
      {
        "@type": "Offer",
        priceCurrency: currency,
        price: priceValue,
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
        availability: "https://schema.org/InStock",
        url,
        seller: {
          "@type": "Organization",
          name: "Jaetravel Expeditions",
        },
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "KE",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 7,
          returnMethod: "https://schema.org/ReturnByMail",
          returnFees: "https://schema.org/FreeReturn"
        }
      }
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Passenger Capacity",
        value: passengers?.toString() || "6",
      },
      {
        "@type": "PropertyValue",
        name: "Fuel Type",
        value: fuelType,
      },
      {
        "@type": "PropertyValue",
        name: "Vehicle Configuration",
        value: vehicleConfiguration,
      },
    ],
    vehicleConfiguration,
    fuelType,
    model,
    manufacturer: brand,
    numberOfDoors: 5,
    vehicleSeatingCapacity: passengers || 6,
    "@id": `${url}#vehicle`,
    // Additional rental-specific properties
    additionalType: ["https://schema.org/RentalVehicle"],
    rentalVehicleUsage: "Safari tours and game drives",
    rentalVehicleSpecialUsage: "Wildlife photography and conservation tours",
    isAccessoryOrSparePartFor: [],
    inProductGroupWithID: "safari-vehicles",
    category: "Vehicle Rental",
    slogan: "Premium Safari Vehicles for Unforgettable Kenyan Adventures",
    releaseDate: "2015-01-01",
    productID: name.toLowerCase().replace(/\s+/g, '-'),
    sku: `VEH-${model.toUpperCase().replace(/\s+/g, '')}`,
    gtin: "",
    productionDate: "2020-01-01",
    purchaseDate: "2021-06-15",
    award: "Kenya Tourism Board Certified Safari Operator",
    audience: {
      "@type": "Audience",
      audienceType: "Tourists, Photographers, Adventure Travelers"
    },
    countryOfAssembly: "JP",
    countryOfLastProcessing: "KE",
    countryOfOrigin: "JP",
    hasVariant: [],
    isSimilarTo: [],
    isRelatedTo: [],
    logo: "https://www.jaetravel.com/logo.png",
    material: "Steel, Aluminum, Fiberglass",
    modelDate: "2020",
    mpn: `LC200-${new Date().getFullYear()}`,
    pattern: "Safari Edition",
    size: "Large",
    style: "4x4 Off-road Safari Vehicle",
    vehicleModelDate: "2020",
    vehicleSpecialUsage: "Commercial, Tourism",
    weight: {
      "@type": "QuantitativeValue",
      value: "2800",
      unitCode: "KGM"
    },
    width: {
      "@type": "QuantitativeValue",
      value: "1.97",
      unitCode: "MTR"
    },
    height: {
      "@type": "QuantitativeValue",
      value: "1.95",
      unitCode: "MTR"
    },
    depth: {
      "@type": "QuantitativeValue",
      value: "4.95",
      unitCode: "MTR"
    }
  }
}

// Alternative: Generate as RentalCar specifically
export function generateRentalCarSchema({
  name,
  description,
  price,
  image,
  url,
  passengers = 6,
  fuelType = "Diesel",
  vehicleConfiguration = "4x4 Pop-up Roof",
  brand = "Toyota",
  model = "Land Cruiser",
  currency = "USD",
  pickupLocation,
  dropoffLocation,
  rentalPeriod = "P1D"
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
  currency?: string
  pickupLocation?: string
  dropoffLocation?: string
  rentalPeriod?: string
}) {
  const priceMatch = price.match(/\$(\d+)/)
  const priceValue = priceMatch ? parseInt(priceMatch[1], 10) : 0
  
  return {
    "@context": "https://schema.org",
    "@type": "RentalCar",
    name,
    description,
    image: `https://www.jaetravel.com${image}`,
    url,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    model,
    fuelType,
    vehicleConfiguration,
    numberOfDoors: 5,
    vehicleSeatingCapacity: passengers,
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: priceValue,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      availability: "https://schema.org/InStock",
      url,
      businessFunction: "https://schema.org/Rent",
      eligibleRegion: {
        "@type": "Country",
        name: "Kenya"
      },
      eligibleCustomerType: "Tourist",
      validFrom: new Date().toISOString(),
      validThrough: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
      seller: {
        "@type": "Organization",
        name: "Jaetravel Expeditions",
        url: "https://www.jaetravel.com"
      }
    },
    // Rental-specific properties
    ...(pickupLocation && {
      pickupLocation: {
        "@type": "Place",
        name: pickupLocation,
        address: {
          "@type": "PostalAddress",
          addressLocality: pickupLocation,
          addressCountry: "KE"
        }
      }
    }),
    ...(dropoffLocation && {
      dropoffLocation: {
        "@type": "Place",
        name: dropoffLocation,
        address: {
          "@type": "PostalAddress",
          addressLocality: dropoffLocation,
          addressCountry: "KE"
        }
      }
    }),
    rentalPeriod,
    additionalType: "https://schema.org/Vehicle",
    audience: {
      "@type": "Audience",
      audienceType: "Tourists, Safari Enthusiasts, Photographers"
    },
    category: "Car Rental",
    isAccessoryOrSparePartFor: [],
    slogan: "Premium Safari Vehicle Rentals in Kenya"
  }
}