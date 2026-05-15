import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { Sparkles, Star, Heart } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Safaris de Lujo en Kenia - Lodges 5 Estrellas" : "Safaris de Luxe au Kenya - Lodges 5 Étoiles",
    description: locale === 'es' ? "Vive la experiencia safari más exclusiva en Kenia. Lodges de lujo, servicios 5 estrellas, experiencias inolvidables." : "Vivez l'expérience safari la plus exclusive au Kenya. Lodges de luxe, services 5 étoiles, expériences inoubliables.",
  };
}

const features = {
  fr: ["Lodges 5 étoiles", "Butler personnel", "Spa & Wellness", "Gastronomie gourmet", "Excursions privées"],
  es: ["Lodges 5 estrellas", "Mayordomo personal", "Spa & Bienestar", "Gastronomía gourmet", "Excursiones privadas"]
};

export default async function LuxurySafarisPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-amber-600 to-yellow-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{locale === 'es' ? "Safaris de Lujo" : "Safaris de Luxe"}</h1>
            <p className="text-xl max-w-2xl mx-auto">{locale === 'es' ? "La experiencia safari definitiva" : "L'expérience safari ultime"}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{locale === 'es' ? "Todo Incluido en Lujo" : "Tout Compris en Luxe"}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {locale === 'es'
                    ? "Desde lodges exclusivos hasta experiencias privadas, cada detalle está diseñado para crear recuerdos inolvidables."
                    : "Des lodges exclusifs aux expériences privées, chaque détail est conçu pour créer des souvenirs inoubliables."}
                </p>
                <div className="space-y-4">
                  {features[locale as 'fr' | 'es'].map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-amber-600" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center">
                <Star className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900 mb-2">{locale === 'es' ? "Desde" : "À partir de"}</p>
                <p className="text-5xl font-bold text-amber-600 mb-4">$800<span className="text-lg text-gray-500">/{locale === 'es' ? 'noche' : 'nuit'}</span></p>
                <button className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold hover:bg-amber-700 transition-colors">
                  {locale === 'es' ? "Reservar Ahora" : "Réserver Maintenant"}
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