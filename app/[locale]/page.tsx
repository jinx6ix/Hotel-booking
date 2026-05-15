import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SearchBar } from "@/components/search-bar";
import { Star, Users, Shield, Sparkles, ChevronRight, Clock, BadgeCheck, CheckCircle2, Hotel, MapPin, Award, Calendar, Gift } from "lucide-react";
import { hotels } from "@/lib/data";
import { HotelCard } from "@/components/hotel-card";
import { PopularSearchesEnhanced } from "@/components/popular-searches";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations('Home');

  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
  };
}

const destinations = [
  { id: "maasai-mara", name: "Maasai Mara", description: "Great Migration, Big Cats", count: 45, image: "/maasai-mara.jpeg", slug: "maasai-mara", color: "from-amber-600 to-amber-800", lightColor: "bg-amber-50" },
  { id: "amboseli", name: "Amboseli", description: "Elephant Kings, Kilimanjaro Views", count: 28, image: "/naivasha.jpeg", slug: "amboseli", color: "from-slate-600 to-slate-800", lightColor: "bg-slate-50" },
  { id: "tsavo", name: "Tsavo", description: "Red Elephants, Vast Wilderness", count: 32, image: "/tsavo-east.jpeg", slug: "tsavo", color: "from-red-600 to-red-800", lightColor: "bg-red-50" },
  { id: "nairobi", name: "Nairobi", description: "Urban Safari, Giraffe Manor", count: 56, image: "/Hero2.jpg", slug: "nairobi", color: "from-emerald-600 to-emerald-800", lightColor: "bg-emerald-50" },
  { id: "samburu", name: "Samburu", description: "Special Five, Desert Landscapes", count: 18, image: "/samburu.webp", slug: "samburu", color: "from-orange-600 to-orange-800", lightColor: "bg-orange-50" },
  { id: "nakuru", name: "Lake Nakuru", description: "Flamingos, Rhino Sanctuary", count: 24, image: "/nakuru.jpg", slug: "nakuru", color: "from-pink-600 to-pink-800", lightColor: "bg-pink-50" },
  { id: "naivasha", name: "Lake Naivasha", description: "Hippos, Crescent Island", count: 15, image: "/naivasha.jpeg", slug: "naivasha", color: "from-teal-600 to-teal-800", lightColor: "bg-teal-50" },
  { id: "tsavo-east", name: "Tsavo East", description: "Aardvark, Giant Elephants", count: 22, image: "/tsavo-east.jpeg", slug: "tsavo-east", color: "from-yellow-700 to-yellow-900", lightColor: "bg-yellow-50" },
  { id: "meru", name: "Meru", description: "Untamed Wilderness, Rare Cats", count: 8, image: "/kenya-safari-landscape.webp", slug: "meru", color: "from-green-600 to-green-800", lightColor: "bg-green-50" },
];

const safariTypes = [
  { id: "luxury", name: "Luxury Safaris", icon: "⭐", description: "5-star lodges & tented camps", count: 89 },
  { id: "budget", name: "Budget Safaris", icon: "🎒", description: "Affordable adventures", count: 45 },
  { id: "family", name: "Family Safaris", icon: "👨‍👩‍👧", description: "Kid-friendly activities", count: 32 },
  { id: "honeymoon", name: "Honeymoon", icon: "💑", description: "Romantic getaways", count: 28 },
  { id: "photography", name: "Photography", icon: "📷", description: "Pro wildlife tours", count: 18 },
  { id: "accessible", name: "Accessible", icon: "♿", description: "Wheelchair-friendly", count: 12 },
];

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Home');
  const common = await getTranslations('Common');
  const nav = await getTranslations('Navigation');
  const footer = await getTranslations('Footer');

  const featuredHotels = hotels.slice(0, 6);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/kenya-safari-landscape.webp" alt="Kenya Safari" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">{t('hero.subtitle')}</p>
            <SearchBar />
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-8 bg-gradient-to-r from-amber-50 to-orange-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-8 h-8 text-amber-600" />
                <div><p className="font-bold text-gray-900">10,000+ Travelers</p><p className="text-sm text-gray-600">Since 2012</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-amber-600" />
                <div><p className="font-bold text-gray-900">4.9/5 Rating</p><p className="text-sm text-gray-600">Based on reviews</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-amber-600" />
                <div><p className="font-bold text-gray-900">100% Secure</p><p className="text-sm text-gray-600">Book with confidence</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-amber-600" />
                <div><p className="font-bold text-gray-900">Expert Guides</p><p className="text-sm text-gray-600">Local experts</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">{t('featured.title')}</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Discover Kenya&apos;s most iconic safari destinations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.slice(0, 6).map((dest) => (
                <Link key={dest.id} href={`/${locale}/destinations/${dest.slug}`} className="group relative h-80 rounded-2xl overflow-hidden">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${dest.color} opacity-80`} />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-sm opacity-90">{dest.description}</p>
                    <p className="text-sm mt-2 font-medium">{dest.count}+ hotels</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href={`/${locale}/destinations`} className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors">
                View All Destinations <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Safari Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Safari Experiences</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {safariTypes.map((type) => (
                <Link key={type.id} href={`/${locale}/${type.id}`} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <span className="text-4xl mb-3 block">{type.icon}</span>
                  <h3 className="font-semibold text-gray-900">{type.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{type.count} options</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Hotels */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Featured Hotels & Lodges</h2>
            <p className="text-gray-600 text-center mb-12">Handpicked accommodations for your safari adventure</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href={`/${locale}/hotels`} className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors">
                View All Hotels <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready for Your Safari Adventure?</h2>
            <p className="text-xl mb-8 opacity-90">Book your dream Kenya safari today</p>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 px-10 py-5 bg-white text-amber-600 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Contact Us <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}