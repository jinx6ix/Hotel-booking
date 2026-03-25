// app/sitemap.ts
import type { MetadataRoute } from "next"
import { locations, hotels } from "@/lib/data"
import { vehicles } from "@/lib/vehicle-data"
import { posts } from "@/lib/blog-data"
import { accessibleHotels, accessibleLocations } from "@/lib/accessible"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jaetravel.com"

  // === STATIC PAGES ===
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/hotels`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/car-hire`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/accessible-safaris`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/accessible`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/luxury-safaris`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/safari-lodges`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/safari-camps`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/hotels?type=lodge`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hotels?type=camp`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]

  // === ACCESSIBLE DESTINATIONS ===
  const accessibleDestinationRoutes: MetadataRoute.Sitemap = accessibleLocations.map((location) => ({
    url: `${baseUrl}/accessible/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  // === ACCESSIBLE HOTELS ===
  const accessibleHotelRoutes: MetadataRoute.Sitemap = accessibleHotels.map((hotel) => ({
    url: `${baseUrl}/accessible/${hotel.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  // === DESTINATIONS ===
  const destinationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/destinations/${location.slug}`,
    lastModified: location.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  // === HOTELS ===
  const hotelRoutes: MetadataRoute.Sitemap = hotels.map((hotel) => ({
    url: `${baseUrl}/hotels/${hotel.slug}`,
    lastModified: hotel.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  // === VEHICLES ===
  const carHireRoutes: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${baseUrl}/car-hire/${vehicle.slug}`,
    lastModified: vehicle.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  // === BLOG POSTS ===
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // === FINAL ===
  return [
    ...staticRoutes,
    ...accessibleDestinationRoutes,
    ...accessibleHotelRoutes,
    ...destinationRoutes,
    ...hotelRoutes,
    ...carHireRoutes,
    ...blogRoutes,
  ]
}