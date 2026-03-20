// app/sitemap.ts
import type { MetadataRoute } from "next"
import { locations, hotels } from "@/lib/data"
import { vehicles } from "@/lib/vehicle-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jaetravel.com"

  // Helper: current date for lastModified
  const now = new Date()

  // === 1. Static Routes ===
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/hotels`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/car-hire`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]

  // === 2. Destination Pages ===
  const destinationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/destinations/${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  // === 3. Hotel Pages (Individual Hotel Listings) ===
  const hotelRoutes: MetadataRoute.Sitemap = hotels.map((hotel) => ({
    url: `${baseUrl}/hotels/${hotel.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // === 4. Car Hire Pages (Individual Vehicle Listings) ===
  const carHireRoutes: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${baseUrl}/car-hire/${vehicle.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  // === 5. Hotel Location Pages (Optional - Hotels by Destination) ===
  const hotelLocationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/hotels?location=${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }))

  // === 6. Hotel Category Pages ===
  const hotelCategoryRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/hotels/accessible`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/hotels/luxury`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/hotels/family-friendly`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/hotels/budget`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/hotels/beach-resorts`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/hotels/safari-lodges`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ]

  // === 7. Combine & Return ===
  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...hotelRoutes,
    ...carHireRoutes,
    ...hotelLocationRoutes,
    ...hotelCategoryRoutes,
  ]
}