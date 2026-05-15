import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { vehicles } from "@/lib/vehicle-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { Car, Users, Shield, Camera, Accessibility } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Alquiler de Coches Safari en Kenia - Landcruiser 4x4" : "Location de Voiture Safari au Kenya - Landcruiser 4x4",
    description: locale === 'es' ? "Alquila un vehículo 4x4 para tu safari en Kenia. Landcruiser con conductor, transferencia al aeropuerto, accesibilidad." : "Louez un véhicule 4x4 pour votre safari au Kenya. Landcruiser avec chauffeur, transfert aéroport, accès universel.",
  };
}

export default async function CarHirePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('CarHire');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((vehicle) => (
                <Link key={vehicle.slug} href={`/${locale}/car-hire/${vehicle.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <Image src={vehicle.heroImage} alt={vehicle.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold">{vehicle.price}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      {vehicle.capacity && <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {vehicle.capacity} passengers</span>}
                      {vehicle.accessibility && <span className="flex items-center gap-1"><Accessibility className="w-4 h-4" /> Accessible</span>}
                      {vehicle.photography && <span className="flex items-center gap-1"><Camera className="w-4 h-4" /> Photography</span>}
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