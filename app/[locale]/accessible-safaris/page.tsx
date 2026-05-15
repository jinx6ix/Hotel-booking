import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { accessibleHotels } from "@/lib/accessible";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { Accessibility, MapPin, CheckCircle } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Safaris Accesibles en Kenia - Silla de Ruedas" : "Safaris Accessibles au Kenya - Fauteuil Roulant",
    description: locale === 'es' ? "Safaris accesibles para sillas de ruedas en Kenia. Hoteles con habitaciones accesibles, transferencias adaptadas." : "Safaris accessibles en fauteuil roulant au Kenya. Hôtels avec chambres accessibles, transferts adaptés.",
  };
}

export default async function AccessibleSafarisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const accessibleFeatures = {
    fr: ["Chambres accessibles", "Douches roll-in", "Transferts adaptés", "Vehicules accessibles", "Personnel formés"],
    es: ["Habitaciones accesibles", "Duchas adaptadas", "Transferencias adaptadas", "Vehículos accesibles", "Personal capacitado"]
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{locale === 'es' ? "Safaris Accesibles" : "Safaris Accessibles"}</h1>
            <p className="text-xl max-w-2xl mx-auto">{locale === 'es' ? "Safari para todos, sin barreras" : "Safari pour tous, sans barrieres"}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {(accessibleFeatures[locale as 'fr' | 'es']).map((f, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-8">{locale === 'es' ? "Hoteles Accesibles" : "Hôtels Accessibles"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accessibleHotels.map((hotel) => (
                <Link key={hotel.id} href={`/${locale}/accessible/${hotel.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-56">
                    <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <Accessibility className="w-4 h-4" />
                      {hotel.rooms?.filter(r => r.accessible).length || 1} accessible
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      {hotel.location}
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