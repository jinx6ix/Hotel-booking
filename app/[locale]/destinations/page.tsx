import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { locations } from "@/lib/data";
import { locationsFR } from "@/lib/data-fr";
import { locationsES } from "@/lib/data-es";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { MapPin, Hotel } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Destinos Safari en Kenia - Maasai Mara, Amboseli, Tsavo" : "Destinations Safari au Kenya - Maasai Mara, Amboseli, Tsavo",
    description: locale === 'es' ? "Descubre los mejores destinos safari de Kenia: Maasai Mara, Amboseli, Tsavo, Samburu y más." : "Découvrez les meilleures destinations safari du Kenya: Maasai Mara, Amboseli, Tsavo, Samburu et plus encore.",
  };
}

export default async function DestinationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Destinations');

  const allLocations = locale === 'fr' ? locationsFR : locale === 'es' ? locationsES : locations;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allLocations.map((loc) => (
                <Link key={loc.slug} href={`/${locale}/destinations/${loc.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <Image src={loc.image} alt={loc.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{loc.name}</h3>
                      <p className="text-sm opacity-90">{locale === 'es' ? 'Safari' : 'Safari'}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 line-clamp-2">{loc.description}</p>
                    <div className="flex gap-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {locale === 'es' ? 'Safaris' : 'Safaris'}</span>
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