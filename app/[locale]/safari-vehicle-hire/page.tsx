import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Alquiler de Vehículos Safari en Kenia" : "Location de Véhicules Safari au Kenya",
    description: locale === 'es' ? "Alquila vehículos safari 4x4 con conductor. Landcruiser, minivan con techo desplegable." : "Louez des véhicules safari 4x4 avec chauffeur. Landcruiser, minivan à toit ouvrant.",
  };
}

export default async function SafariVehiclesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-slate-700 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{locale === 'es' ? "Vehículos Safari" : "Véhicules Safari"}</h1>
            <p className="text-xl max-w-2xl mx-auto">{locale === 'es' ? "Transporte de lujo para tu aventura" : "Transport de luxe pour votre aventure"}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">{locale === 'es' ? "Encuentra el vehículo perfecto para tu safari." : "Trouvez le véhicule parfait pour votre safari."}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}