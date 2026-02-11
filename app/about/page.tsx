import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SchemaRenderer } from "@/components/schema-renderer";
import { Award, Users, Globe, Zap, Heart, Mail, MapPin, Calendar, Shield, Star } from "lucide-react";

// ────────────────────────────────────────────────
// Metadata – optimized for trust & commercial intent
// ────────────────────────────────────────────────
export const metadata: Metadata = {
  title:
    "About Jaetravel Expeditions | Trusted Kenya Safari & Luxury Travel Experts 2025–2026",
  description:
    "Discover Jaetravel Expeditions – Kenya's premier safari tour operator since 2012. 10,000+ happy travelers, expert guides, luxury lodges, authentic experiences across Maasai Mara, Amboseli, Tsavo, Samburu & more.",
  keywords:
    "about Jaetravel Expeditions, Kenya safari experts, best tour company Kenya, luxury safari operator, trusted travel agency Kenya, Maasai Mara tours, Kenya safari since 2012, authentic Kenya travel",
  openGraph: {
    title: "About Jaetravel Expeditions – Kenya Safari Specialists",
    description:
      "Trusted by 10,000+ travelers. Expert-guided luxury safaris, handpicked lodges & authentic Kenyan experiences.",
    url: "https://www.jaetravel.com/about",
    images: [
      {
        url: "/og-about-jaetravel.jpg",
        width: 1200,
        height: 630,
        alt: "Jaetravel Expeditions Team – Kenya Safari Experts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jaetravel.com/about",
  },
  robots: "index, follow",
};

// ────────────────────────────────────────────────
// Schemas
// ────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jaetravel.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://www.jaetravel.com/about" },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jaetravel Expeditions",
  url: "https://www.jaetravel.com",
  logo: "https://www.jaetravel.com/logo.png",
  description:
    "Premier Kenya safari tour operator since 2012. Specializing in luxury lodges, authentic wildlife experiences, and personalized travel across 9 iconic destinations.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
  },
  sameAs: [
    "https://www.tripadvisor.com/Attraction_Review-g294207-d12345678-Reviews-Jaetravel_Expeditions-Nairobi.html",
    "https://www.facebook.com/jaetravelexpeditions",
    "https://www.instagram.com/jaetravelexpeditions",
  ],
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
};

const faqItems = [
  {
    question: "How long has Jaetravel Expeditions been operating?",
    answer:
      "We have been proudly operating since 2012, giving us over 12 years of experience in crafting unforgettable Kenya safari experiences.",
  },
  {
    question: "Are your guides licensed and experienced?",
    answer:
      "Yes – all our guides are fully licensed, English-speaking, and have extensive knowledge of Kenya’s wildlife, ecosystems, and culture. Many have 10+ years of guiding experience.",
  },
  {
    question: "Do you offer sustainable and responsible tourism?",
    answer:
      "Absolutely. We partner only with eco-conscious lodges, support local communities, follow strict wildlife viewing guidelines, and contribute to conservation projects.",
  },
  {
    question: "Can you customize a safari for my group?",
    answer:
      "Yes – every safari is tailored to your interests, budget, travel dates, group size, and preferences (luxury, family, photography, accessible, etc.). Contact us to start planning.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function AboutPage() {
  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={organizationSchema} />
      <SchemaRenderer schema={faqSchema} />

      <Header />

      <main>
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-orange-600 to-amber-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/about-hero-bg.jpg"
              alt="Kenya safari landscape with wildlife – Jaetravel Expeditions"
              fill
              className="object-cover"
              quality={80}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 md:py-32">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "About Us" },
              ]}
            />

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              About Jaetravel Expeditions
            </h1>

            <p className="mt-6 text-xl md:text-2xl max-w-4xl leading-relaxed">
              Creating unforgettable Kenya safari experiences since 2012 – with passion, expertise, and a commitment to authentic, responsible travel.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    Jaetravel Expeditions was born from a deep love for Kenya’s wild landscapes, incredible wildlife, and rich cultural heritage.
                  </p>
                  <p>
                    Founded in 2012 by passionate safari lovers and local experts, we started with one goal: to share the real magic of Kenya in a way that is luxurious, authentic, and responsible.
                  </p>
                  <p>
                    Today, we are proud to be trusted by over <strong>10,000 happy travelers</strong> from around the world, offering handcrafted safaris across 9 iconic destinations — from the Great Migration in the Maasai Mara to Kilimanjaro views in Amboseli, remote wilderness in Tsavo, and unique northern species in Samburu.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/about-team.jpg"
                  alt="Jaetravel Expeditions team on safari in Kenya"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">2012</div>
                <p className="text-gray-700">Founded</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">10,000+</div>
                <p className="text-gray-700">Happy Travelers</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">9</div>
                <p className="text-gray-700">Iconic Destinations</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">4.8★</div>
                <p className="text-gray-700">Guest Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                <Heart className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Authenticity</h3>
                <p className="text-gray-600">
                  We deliver genuine experiences that showcase Kenya’s real culture, wildlife, and landscapes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  Committed to conservation, eco-friendly practices, and supporting local communities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Highest standards in service, safety, accommodations, and unforgettable moments.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                <Zap className="w-12 h-12 text-orange-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Personalization</h3>
                <p className="text-gray-600">
                  Every safari is tailored to your dreams, preferences, and travel style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Why Choose Us */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Why Travelers Choose Jaetravel
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-orange-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="text-orange-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Local Guides</h3>
                <p className="text-gray-700">
                  Our licensed, English-speaking guides know every trail, animal behavior, and hidden viewpoint.
                </p>
              </div>

              <div className="bg-orange-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Globe className="text-orange-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Handpicked Properties</h3>
                <p className="text-gray-700">
                  We personally visit and select every lodge, camp, and hotel for quality, sustainability, and guest experience.
                </p>
              </div>

              <div className="bg-orange-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="text-orange-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Personalized Service</h3>
                <p className="text-gray-700">
                  From your first message to your final goodbye, we tailor every detail to your dreams and needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              What Our Guests Say
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The most magical safari experience we've ever had. Jaetravel took care of everything – from incredible lodges to expert guides. We’ll be back!"
                </p>
                <p className="font-medium">Sophie & Family – United Kingdom</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Perfect combination of luxury and authenticity. Our guide John was incredible – spotted everything we hoped for and more!"
                </p>
                <p className="font-medium">Mark T. – United States</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Accessible safari made easy. The team handled every detail so my mother could enjoy the wildlife too. Highly recommend!"
                </p>
                <p className="font-medium">Elena M. – Canada</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-5 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your Kenya Adventure?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
              Let our experts create your perfect safari – luxury lodges, authentic experiences, and memories that last forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-orange-700 px-12 py-6 rounded-xl font-bold text-xl hover:bg-orange-50 transition shadow-lg"
              >
                Get Your Personalized Quote
              </Link>
              <Link
                href="/destinations"
                className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition backdrop-blur-sm"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}