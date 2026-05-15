import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { Award, Users, Globe, Zap, Heart } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Sobre Jaetravel Expeditions - Expertos Safari Kenia" : "À Propos de Jaetravel Expeditions - Experts Safari Kenya",
    description: locale === 'es' ? "Jaetravel Expeditions, operador safari líder en Kenia desde 2012. Más de 10.000 viajeros satisfechos." : "Jaetravel Expeditions, opérateur safari leader au Kenya depuis 2012. Plus de 10 000 voyageurs satisfaits.",
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('About');

  const stats = [
    { icon: Users, label: locale === 'es' ? "Viajeros" : "Voyageurs", value: "10,000+" },
    { icon: Award, label: locale === 'es' ? "Años de Experiencia" : "Années d'Expérience", value: "14+" },
    { icon: Globe, label: locale === 'es' ? "Destinos" : "Destinations", value: "9" },
    { icon: Heart, label: locale === 'es' ? "Valoración" : "Note", value: "4.9/5" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">{locale === 'es' ? "Nuestra Historia" : "Notre Histoire"}</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-600 leading-relaxed mb-4">
                {locale === 'es'
                  ? "Jaetravel Expeditions nació en 2012 con una misión simple: compartir la magia de Kenia con el mundo. Desde entonces, hemos ayudado a más de 10,000 viajeros a vivir experiencias safari unforgettable."
                  : "Jaetravel Expeditions est née en 2012 avec une mission simple: partager la magie du Kenya avec le monde. Depuis, nous avons aidé plus de 10 000 voyageurs à vivre des expériences safari inoubliables."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'es'
                  ? "Nuestro equipo de guías expertos, todos nascidos y criados en Kenia, comparten su conocimiento profundo de la fauna, la cultura y los secretos mejor guardados de este increíble país."
                  : "Notre équipe de guides experts, tous nés et élevés au Kenya, partagent leur connaissance approfondie de la faune, de la culture et des secrets mieux gardés de ce pays incroyable."}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">{locale === 'es' ? "¿Por Qué Elegirnos?" : "Pourquoi Nous Choisir?"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{locale === 'es' ? "Expertos Locales" : "Experts Locaux"}</h3>
                <p className="text-gray-600">{locale === 'es' ? "Guías nativos con años de experiencia" : "Guides natifs avec des années d'expérience"}</p>
              </div>
              <div className="text-center p-8">
                <Heart className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{locale === 'es' ? "Personalizado" : "Personnalisé"}</h3>
                <p className="text-gray-600">{locale === 'es' ? "Viajes adaptados a tus necesidades" : "Voyages adaptés à vos besoins"}</p>
              </div>
              <div className="text-center p-8">
                <Zap className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{locale === 'es' ? "Soporte 24/7" : "Support 24/7"}</h3>
                <p className="text-gray-600">{locale === 'es' ? "Siempre aquí para ti" : "Toujours là pour vous"}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}