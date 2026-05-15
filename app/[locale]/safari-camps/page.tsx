import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Campamentos de Safari en Kenia" : "Camps de Safari au Kenya",
    description: locale === 'es' ? "Campamentos de safari auténticos en Kenia. Experiencia inmersiva en la naturaleza." : "Camps de safari authentiques au Kenya. Expérience immersive dans la nature.",
  };
}

export default async function SafariCampsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-amber-700 to-orange-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{locale === 'es' ? "Campamentos de Safari" : "Camps de Safari"}</h1>
            <p className="text-xl max-w-2xl mx-auto">{locale === 'es' ? "Experiencia auténtica bajo las estrellas" : "Expérience authentique sous les étoiles"}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-600">{locale === 'es' ? "Descubre nuestros acampamentos únicos en las mejores ubicaciones." : "Découvrez nos camps uniques dans les meilleurs emplacements."}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}