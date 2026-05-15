import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Lodges de Safari en Kenia" : "Lodges de Safari au Kenya",
    description: locale === 'es' ? "Los mejores lodges de safari en Kenia. Alojamiento de lujo en las mejores ubicaciones." : "Les meilleurs lodges de safari au Kenya. Hébergement de luxe aux meilleurs emplacements.",
  };
}

export default async function SafariLodgesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{locale === 'es' ? "Lodges de Safari" : "Lodges de Safari"}</h1>
            <p className="text-xl max-w-2xl mx-auto">{locale === 'es' ? "Alojamiento de lujo en el corazón de la naturaleza" : "Hébergement de luxe au cœur de la nature"}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">{locale === 'es' ? "Explora nuestra colección de lodges de lujo en Kenia." : "Explorez notre collection de lodges de luxe au Kenya."}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}