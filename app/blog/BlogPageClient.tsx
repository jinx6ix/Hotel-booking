"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { Clock, ChevronRight } from "lucide-react";

interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

interface FAQ {
  question: string;
  answer: string;
}

interface BlogPageClientProps {
  blogPosts: BlogPost[];
  authors: Record<string, Author>;
  faqItems: FAQ[];
}

export default function BlogPageClient({ 
  blogPosts, 
  authors, 
  faqItems 
}: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Wildlife", "Photography", "Travel Guide", "Accommodation", "Culture", "Travel Tips"];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Safari Blog & Travel Guides" },
              ]}
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-6">
              Kenya Safari Blog & Travel Guides 2025–2026
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-95">
              Expert advice, insider tips, photography guides, seasonal calendars, packing lists and real safari stories.
            </p>
          </div>
        </div>

        {/* Category Filter - This is interactive */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm transition-colors ${
                    activeCategory === cat
                      ? "bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Featured Safari Guides
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <BlogCard 
                    key={post.id} 
                    post={post} 
                    author={authors[post.author as keyof typeof authors]} 
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              All Safari Articles & Guides
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
              {regularPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  author={authors[post.author as keyof typeof authors]} 
                />
              ))}
            </div>

            {/* Simple pagination placeholder */}
            <div className="flex justify-center items-center gap-6 mt-16">
              <button className="px-6 py-3 bg-gray-200 rounded-lg font-medium disabled:opacity-50" disabled>
                Previous
              </button>
              <span className="font-medium text-lg">Page 1 of 3</span>
              <button className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition">
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup - This is interactive */}
        <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Updated with Kenya Safari Tips
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Get exclusive travel guides, seasonal updates, special offers and photography tips delivered to your inbox.
            </p>

            <form 
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission
                const formData = new FormData(e.currentTarget);
                const email = formData.get("email");
                console.log("Newsletter signup:", email);
                // Add your newsletter API call here
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* FAQ - This has interactive details/summary elements */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="bg-gray-50 p-7 rounded-xl shadow-sm border border-gray-200 cursor-pointer group"
                  open={i < 2}
                >
                  <summary className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition">
                    {faq.question}
                  </summary>
                  <div className="mt-5 text-gray-700 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ────────────────────────────────────────────────
// Reusable Blog Card Component
// ────────────────────────────────────────────────
function BlogCard({ post, author }: { post: BlogPost; author: Author }) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={`https://placehold.co/600x400?text=${encodeURIComponent(post.title)}`}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-semibold uppercase bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-gray-500 flex items-center gap-1.5">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={author.avatar || "/avatars/default.jpg"}
                alt={author.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{author.name}</p>
              <p className="text-xs text-gray-500">{author.role}</p>
            </div>
          </div>

          <Link
            href={`/blog/${post.id}`}
            className="text-orange-600 font-medium hover:text-orange-700 flex items-center gap-1"
          >
            Read More <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}