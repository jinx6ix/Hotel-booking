import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

// ────────────────────────────────────────────────
// Data (can be moved to separate files)
// ────────────────────────────────────────────────
const faqItems = [
  {
    question: "When is the best time to go on safari in Kenya?",
    answer: "The dry season (June–October) is ideal for the Great Migration and best wildlife viewing...",
  },
  {
    question: "What should I pack for a Kenya safari?",
    answer: "Essentials include neutral-colored clothing, binoculars, camera gear, sunscreen, and a hat...",
  },
  {
    question: "Are Kenya safaris safe for families with children?",
    answer: "Yes, Kenya offers many family-friendly safaris with accommodations and activities suitable for all ages...",
  },
  {
    question: "Do I need vaccinations for Kenya?",
    answer: "Yellow fever vaccination is required. Malaria prophylaxis is highly recommended...",
  },
  {
    question: "What's the best way to see the Big Five?",
    answer: "Maasai Mara, Amboseli, and Tsavo offer excellent opportunities with experienced guides...",
  },
];

const authors = {
  "John Safari": {
    name: "John Safari",
    role: "Wildlife Guide & Safari Expert",
    bio: "15+ years leading safaris in Kenya. Specialist in big cats and migration patterns.",
    avatar: "/avatars/john-safari.jpg",
  },
  "Sarah Lens": {
    name: "Sarah Lens",
    role: "Professional Wildlife Photographer",
    bio: "Award-winning photographer specializing in African wildlife and safari photography.",
    avatar: "/avatars/sarah-lens.jpg",
  },
  "Mike Explorer": {
    name: "Mike Explorer",
    role: "Travel Writer & Itinerary Planner",
    bio: "Helped plan 500+ Kenya safaris. Expert on seasons, routes and hidden gems.",
    avatar: "/avatars/mike-explorer.jpg",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "The Great Migration: When & Where to Experience Africa's Greatest Spectacle",
    excerpt: "Discover the best time to witness millions of wildebeest crossing the Serengeti and Maasai Mara rivers.",
    date: "2024-11-15",
    author: "John Safari",
    category: "Wildlife",
    readTime: "8 min",
    featured: true,
  },
  {
    id: 2,
    title: "Photography Tips for Capturing Kenya's Most Iconic Wildlife",
    excerpt: "Master the art of safari photography with expert tips on camera settings, lighting, and composition.",
    date: "2024-11-10",
    author: "Sarah Lens",
    category: "Photography",
    readTime: "12 min",
    featured: true,
  },
  {
    id: 3,
    title: "Best Time to Visit Kenya: Season Guide for Safari Tours",
    excerpt: "Plan your Kenya safari tour with our comprehensive guide to seasons, weather, and wildlife abundance.",
    date: "2024-11-05",
    author: "Mike Explorer",
    category: "Travel Guide",
    readTime: "10 min",
  },
  {
    id: 4,
    title: "Top 10 Luxury Safari Lodges in Kenya for 2025",
    excerpt: "Experience ultimate comfort in the wild with our curated list of Kenya's finest safari accommodations.",
    date: "2024-10-28",
    author: "Mike Explorer",
    category: "Accommodation",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "Maasai Culture: Understanding Kenya's Iconic Tribal Heritage",
    excerpt: "Learn about Maasai traditions, ceremonies, and how to respectfully engage with local communities.",
    date: "2024-10-20",
    author: "John Safari",
    category: "Culture",
    readTime: "9 min",
  },
  {
    id: 6,
    title: "Safari Packing List: Essential Items for Your Kenya Adventure",
    excerpt: "Don't forget anything with our comprehensive packing checklist for different seasons and activities.",
    date: "2024-10-15",
    author: "Mike Explorer",
    category: "Travel Tips",
    readTime: "6 min",
  },
  {
    id: 7,
    title: "Birdwatching in Kenya: Top Destinations for Avian Enthusiasts",
    excerpt: "With over 1,100 bird species, Kenya is a paradise for birders. Discover the best spots and seasons.",
    date: "2024-10-10",
    author: "Sarah Lens",
    category: "Wildlife",
    readTime: "11 min",
  },
  {
    id: 8,
    title: "Family Safari Guide: Making Kenya Magical for All Ages",
    excerpt: "Tips and itineraries for creating unforgettable safari experiences for families with children.",
    date: "2024-10-05",
    author: "Mike Explorer",
    category: "Travel Guide",
    readTime: "8 min",
  },
  {
    id: 9,
    title: "Conservation Safari: How Tourism Helps Protect Kenya's Wildlife",
    excerpt: "Learn how responsible tourism contributes to conservation efforts across Kenya's national parks.",
    date: "2024-09-28",
    author: "John Safari",
    category: "Wildlife",
    readTime: "10 min",
  },
];

// ────────────────────────────────────────────────
// Metadata
// ────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Kenya Safari Blog & Travel Guides 2025–2026 | Tips, Wildlife, Photography & Planning",
  description: "Expert Kenya safari blog with travel tips, wildlife guides, photography advice, best time to visit, packing lists, lodge reviews and insider knowledge for your 2025–2026 adventure.",
  keywords: [
    "Kenya safari blog",
    "safari travel guides",
    "wildlife photography tips",
    "Maasai Mara migration",
    "Kenya travel advice",
    "safari packing list",
    "best time to visit Kenya",
    "African safari blog",
    "travel planning Kenya",
    "safari accommodation reviews",
  ],
  openGraph: {
    title: "Kenya Safari Blog & Travel Guides 2025–2026",
    description: "Expert advice, insider tips, photography guides, seasonal calendars, packing lists and real safari stories.",
    type: "website",
    locale: "en_US",
    url: "https://www.jaetravel.com/blog",
    siteName: "Jaetravel Expeditions",
    images: [
      {
        url: "/blog/safari-blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Safari Blog - Expert Travel Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Safari Blog & Travel Guides 2025–2026",
    description: "Expert Kenya safari blog with travel tips and photography guides",
    images: ["/blog/safari-blog-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.jaetravel.com/blog",
  },
};

// ────────────────────────────────────────────────
// Main Server Component
// ────────────────────────────────────────────────
export default function BlogPage() {
  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Safari Blog & Travel Guides" },
  ]);

  const faqSchema = generateFAQSchema(faqItems);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Client Component with all interactive elements */}
      <BlogPageClient
        blogPosts={blogPosts}
        authors={authors}
        faqItems={faqItems}
      />
    </>
  );
}