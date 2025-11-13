// app/sitemap.ts
import type { MetadataRoute } from "next"
import { locations, hotels } from "@/lib/data"
import { vehicles } from "@/lib/vehicle-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jaetravel.com"

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
  ]

  // === 2. Destination Pages ===
  const destinationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/destinations/${location.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  // === 3. Hotel Pages ===
  const hotelRoutes: MetadataRoute.Sitemap = hotels.map((hotel) => ({
    url: `${baseUrl}/hotels/${hotel.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // === 4. Car Hire Pages ===
  const carHireRoutes: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${baseUrl}/car-hire/${vehicle.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }))

  // === 5. Combine & Return ===
  return [
    ...staticRoutes,
    ...destinationRoutes,
    ...hotelRoutes,
    ...carHireRoutes,
  ]
}