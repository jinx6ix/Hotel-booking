import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { Calendar, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Safari Travel Blog | Kenya Tours Tips & Guides | Jaetravel",
  description:
    "Expert guides, travel tips, and insider knowledge about Kenya safari tours, wildlife, destinations, and adventure travel. Read our latest blog posts.",
  keywords: "safari blog, Kenya travel guide, wildlife tips, safari photography, travel advice",
}

const blogPosts = [
  {
    id: 1,
    title: "The Great Migration: When & Where to Experience Africa's Greatest Spectacle",
    excerpt: "Discover the best time to witness millions of wildebeest crossing the Serengeti and Maasai Mara rivers.",
    date: "2024-11-15",
    author: "John Safari",
    category: "Wildlife",
  },
  {
    id: 2,
    title: "Photography Tips for Capturing Kenya's Most Iconic Wildlife",
    excerpt: "Master the art of safari photography with expert tips on camera settings, lighting, and composition.",
    date: "2024-11-10",
    author: "Sarah Lens",
    category: "Photography",
  },
  {
    id: 3,
    title: "Best Time to Visit Kenya: Season Guide for Safari Tours",
    excerpt: "Plan your Kenya safari tour with our comprehensive guide to seasons, weather, and wildlife abundance.",
    date: "2024-11-05",
    author: "Mike Explorer",
    category: "Travel Guide",
  },
  {
    id: 4,
    title: "Luxury Safari Lodges: Experience Comfort in the African Bush",
    excerpt: "Explore the finest safari accommodations offering world-class amenities amid pristine wilderness.",
    date: "2024-10-30",
    author: "Emma Luxury",
    category: "Accommodation",
  },
  {
    id: 5,
    title: "Maasai Culture & Traditions: Immerse Yourself in Kenya's Heritage",
    excerpt: "Learn about the rich culture, traditions, and customs of the Maasai people during your safari adventure.",
    date: "2024-10-25",
    author: "Peter Culture",
    category: "Culture",
  },
  {
    id: 6,
    title: "Solo Safari Travel: Safety Tips & Best Destinations for Solo Travelers",
    excerpt: "Everything you need to know about planning and enjoying a solo safari adventure in Kenya.",
    date: "2024-10-20",
    author: "Rachel Solo",
    category: "Travel Tips",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />

      <main>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Safari Travel Blog</h1>
            <p className="text-xl text-orange-50 max-w-2xl">
              Expert guides, travel tips, and insider knowledge about Kenya safari tours and wildlife adventures.
            </p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white"
                >
                  <img
                    src={`/.jpg?height=200&width=400&query=${post.title}`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-orange-600 uppercase bg-orange-50 px-3 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        <Calendar size={14} className="inline mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-orange-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>
                      <Link href={`/blog/${post.id}`} className="text-orange-600 font-semibold hover:text-orange-700">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
