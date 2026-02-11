import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SchemaRenderer } from "@/components/schema-renderer";
import { generateBreadcrumbSchema } from "@/lib/schema";
import BlogPostClient from "./BlogPostClient";
import { Calendar, Clock, ChevronRight } from "lucide-react";

// ────────────────────────────────────────────────
// Data (move to separate files/database in production)
// ────────────────────────────────────────────────
const blogPosts = [
  {
    id: 1,
    slug: "great-migration-when-where",
    title: "The Great Migration: When & Where to Experience Africa's Greatest Spectacle",
    excerpt:
      "Discover the best time to witness millions of wildebeest crossing the Mara River in Kenya – complete guide to timing, locations, camps and photography tips.",
    date: "2024-11-15",
    author: "John Safari",
    category: "Wildlife",
    readTime: "8 min",
    image: "/blog/great-migration-hero.jpg",
    tags: ["great migration", "maasai mara", "wildlife", "safari timing", "river crossings"],
    content: `
# Understanding the Great Migration Cycle

The Great Migration is one of nature's most dramatic events – over 1.5 million wildebeest, 200,000 zebra and thousands of gazelles move in a clockwise circle between the Serengeti (Tanzania) and Maasai Mara (Kenya).

This endless journey is driven by the search for fresh grazing and water, creating one of the world's greatest wildlife spectacles.

## When is the best time to see the river crossings?

The most famous – and dramatic – part of the migration is the Mara River crossings, which usually happen between **mid-July and mid-September**.

- **July–August**: Northern Serengeti – first crossings, fewer crowds
- **August–September**: Maasai Mara – peak crossing season, highest drama
- **Late September–October**: Southern crossings, fewer animals remain

> "There is nothing quite like the sound of thousands of hooves hitting the water, the dust rising, and crocodiles waiting below. It's raw nature at its most intense."  
> — John Safari

## Best locations to witness the migration in Kenya

While the Serengeti offers earlier crossings, the **Maasai Mara** provides the most reliable and accessible viewing:

- Mara Triangle – private conservancy, fewer vehicles
- Musiara – central area, excellent predator action
- Talek Gate area – classic crossing points
- Mara North Conservancy – exclusive access

## Recommended camps & lodges for the best experience

Stay close to the action for early morning and late afternoon game drives:

- **Luxury**: &Beyond Bateleur Camp, Mahali Mzuri
- **Mid-range**: Mara Plains Camp, Offbeat Mara Camp
- **Budget-friendly**: Mara Serena Safari Lodge, Ashnil Mara Camp

## Photography tips for capturing the migration

Use a telephoto lens (100–400mm or longer), fast shutter speed (1/2000s+), and be ready for dust and backlight. Early morning and late afternoon offer the best light.

Want to experience the Great Migration yourself? [Contact us](/contact) to plan your perfect 2025–2026 safari.
    `,
  },
  {
    id: 2,
    slug: "photography-tips-kenya-wildlife",
    title: "Photography Tips for Capturing Kenya's Most Iconic Wildlife",
    excerpt: "Master the art of safari photography with expert tips on camera settings, lighting, and composition.",
    date: "2024-11-10",
    author: "Sarah Lens",
    category: "Photography",
    readTime: "12 min",
    image: "/blog/photography-tips-hero.jpg",
    tags: ["photography", "camera gear", "wildlife photography", "safari tips", "composition"],
    content: `
# Safari Photography Masterclass

Photographing wildlife in Kenya is a dream for any photographer. Here's how to make the most of your safari with professional tips...

(Full article content would go here)
    `,
  },
  // Add more posts as needed
];

const authors: Record<string, {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}> = {
  "John Safari": {
    name: "John Safari",
    role: "Wildlife Guide & Safari Expert",
    bio: "15+ years leading safaris in Kenya. Specialist in big cats and migration patterns. Certified KPSGA Gold guide with extensive knowledge of East African ecosystems.",
    avatar: "/avatars/john-safari.jpg",
  },
  "Sarah Lens": {
    name: "Sarah Lens",
    role: "Professional Wildlife Photographer",
    bio: "Award-winning photographer specializing in African wildlife and safari photography. Published in National Geographic, BBC Wildlife, and Africa Geographic.",
    avatar: "/avatars/sarah-lens.jpg",
  },
  "Mike Explorer": {
    name: "Mike Explorer",
    role: "Travel Writer & Itinerary Planner",
    bio: "Helped plan 500+ Kenya safaris. Expert on seasons, routes and hidden gems. Author of 'The Complete Guide to Kenya Safaris'.",
    avatar: "/avatars/mike-explorer.jpg",
  },
};

// ────────────────────────────────────────────────
// Generate metadata
// ────────────────────────────────────────────────
interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return {
      title: "Article Not Found | Jaetravel Safari Blog",
      robots: { index: false },
    };
  }

  return {
    title: `${post.title} | Kenya Safari Blog & Travel Guides`,
    description: post.excerpt,
    keywords: [...post.tags, "kenya safari", "safari guide", "travel tips", "maasai mara", "great migration 2025"].join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.jaetravel.com/blog/${id}`,
      images: [
        {
          url: post.image || `/og-blog-${id}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || `/og-blog-${id}.jpg`],
    },
    alternates: {
      canonical: `https://www.jaetravel.com/blog/${id}`,
    },
  };
}

// ────────────────────────────────────────────────
// Generate static params for SSG
// ────────────────────────────────────────────────
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

// ────────────────────────────────────────────────
// Main Server Component
// ────────────────────────────────────────────────
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) notFound();

  const author = authors[post.author];

  // ────────────────────────────────────────────────
  // Generate structured data
  // ────────────────────────────────────────────────
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      image: author.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "Jaetravel Expeditions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.jaetravel.com/logo.png",
      },
    },
    image: post.image,
    articleBody: post.content.replace(/<[^>]+>/g, ""), // plain text version
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ]);

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

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
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Hero Section */}
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          <Image
            src={post.image || `/blog-placeholder-${post.id}.jpg`}
            alt={post.title}
            fill
            priority
            quality={85}
            className="object-cover brightness-[0.75]"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-5 sm:px-8 lg:px-12">
            <div className="max-w-5xl w-full">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-orange-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  {post.category}
                </span>
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <Calendar size={16} /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span className="text-white/90 text-sm flex items-center gap-1.5">
                  <Clock size={16} /> {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Client Component with all interactive elements */}
        <BlogPostClient
          post={post}
          author={author}
          relatedPosts={relatedPosts}
        />
      </main>

      <Footer />
    </>
  );
}