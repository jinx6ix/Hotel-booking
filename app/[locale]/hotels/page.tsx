import type { Metadata } from "next";
import { hotels } from "@/lib/data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HotelCard } from "@/components/hotel-card";
import { SearchBar } from "@/components/search-bar";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Hoteles en Kenia - Lodge de Safari & Hoteles de Lujo" : "Hébergements au Kenya - Lodges de Safari & Hôtels de Luxe",
    description: locale === 'es' ? "Reserva tu alojamiento safari en Kenia. Lodges de lujo, campos de tiendas, hoteles 5 estrellas en todos los destinos." : "Réservez votre hébergement safari au Kenya. Lodges de luxe, camps de tentes, hôtels 5 étoiles dans toutes les destinations.",
  };
}

export default async function HotelsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Hotels');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <SearchBar />
          </div>
        </section>

        {/* Hotels Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">{t('allHotels')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}