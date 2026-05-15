// Spanish route: /es/nosotros (instead of /es/about)
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Award, Users, Heart } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sobre Jaetravel Expeditions - Expertos Safari Kenia",
    description: "Jaetravel Expeditions, operador safari líder en Kenia desde 2012. Más de 10.000 viajeros satisfechos.",
    alternates: {
      canonical: "https://www.jaetravel.com/es/nosotros",
      languages: {
        'en': 'https://www.jaetravel.com/about',
        'fr': 'https://www.jaetravel.com/fr/about',
        'es': 'https://www.jaetravel.com/es/nosotros',
      },
    },
  };
}

export default async function NosotrosPage() {
  const stats = [
    { icon: Users, label: "Viajeros", value: "10,000+" },
    { icon: Award, label: "Años de Experiencia", value: "14+" },
    { icon: Heart, label: "Valoración", value: "4.9/5" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Sobre Jaetravel Expeditions</h1>
            <p className="text-xl max-w-2xl mx-auto">Expertos safari de Kenia desde 2012</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8">
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

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-600 leading-relaxed mb-4">
                Jaetravel Expeditions nació en 2012 con una misión simple: compartir la magia de Kenia con el mundo. Desde entonces, hemos ayudado a más de 10,000 viajeros a vivir experiencias safari unforgettable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo de guías expertos, todos nacidos y criados en Kenia, comparten su conocimiento profundo de la fauna, la cultura y los secretos mejor guardados de este increíble país.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}