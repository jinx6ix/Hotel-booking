import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  { id: 1, title: "Best Time to Visit Maasai Mara", excerpt: "The Great Migration happens from July to October. Learn when to plan your safari for the best wildlife viewing.", image: "/maasai-mara.jpeg", category: "Tips", author: "Safari Expert", date: "2026-05-10" },
  { id: 2, title: "Packing List for Kenya Safari", excerpt: "Essential items for your safari adventure. From binoculars to sunscreen, here's what you need.", image: "/amboseli.jpeg", category: "Planning", author: "Travel Guide", date: "2026-05-05" },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Blog Safari Kenia - Consejos & Noticias" : "Blog Safari Kenya - Conseils & Actualités",
    description: locale === 'es' ? "Consejos de viaje, historias safari, guías de destinos y noticias de viaje en Kenia." : "Conseils de voyage, histoires safari, guides de destinations et actualité du voyage au Kenya.",
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Blog');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/${locale}/blog/${post.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-56">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">{post.category}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}