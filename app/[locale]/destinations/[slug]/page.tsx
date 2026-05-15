import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { locations } from "@/lib/data";
import { locationsFR } from "@/lib/data-fr";
import { locationsES } from "@/lib/data-es";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HotelCard } from "@/components/hotel-card";
import { Calendar, MapPin, Sun, ChevronRight, Star, Users } from "lucide-react";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const allLocations = locale === 'fr' ? locationsFR : locale === 'es' ? locationsES : locations;
  const location = allLocations.find((l) => l.slug === slug);

  if (!location) {
    return {
      title: locale === 'es' ? "Destino No Encontrado" : "Destination Non Trouvée",
      robots: { index: false },
    };
  }

  const titles = {
    en: `${location.name} Safari Kenya`,
    fr: `${location.name} Safari Kenya`,
    es: `${location.name} Safari Kenia`,
  };

  return {
    title: titles[locale as 'en' | 'fr' | 'es'] || titles.en,
    description: location.description,
  };
}

export function generateStaticParams() {
  return locations.map((loc) => ({
    locale: 'en',
    slug: loc.slug,
  }));
}

export default async function DestinationDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const allLocations = locale === 'fr' ? locationsFR : locale === 'es' ? locationsES : locations;
  const location = allLocations.find((l) => l.slug === slug);

  if (!location) notFound();

  const labels = {
    fr: { title: "Destination Safari", attractions: "Attractions", bestTime: "Meilleure période", bookNow: "Réserver", viewHotels: "Voir les Hôtels" },
    es: { title: "Destino Safari", attractions: "Atracciones", bestTime: "Mejor época", bookNow: "Reservar", viewHotels: "Ver Hoteles" },
    en: { title: "Safari Destination", attractions: "Attractions", bestTime: "Best Time", bookNow: "Book Now", viewHotels: "View Hotels" },
  };
  const l = labels[locale as 'fr' | 'es'] || labels.en;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center">
          <Image src={location.image} alt={location.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 text-white">
            <h1 className="text-5xl font-bold mb-4">{location.name}</h1>
            <p className="text-xl max-w-2xl">{location.description}</p>
          </div>
        </section>

        {/* Info */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">{l.title}</h2>
                <p className="text-gray-600 mb-8">{location.longDescription}</p>
                <h3 className="text-xl font-bold mb-4">{l.attractions}</h3>
                <ul className="space-y-2">
                  {location.attractions.map((attr, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      {attr}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">{l.bestTime}</span>
                </div>
                <p className="text-gray-600 mb-6">{location.bestTime}</p>
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700">
                  {l.bookNow}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}