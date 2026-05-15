// Spanish route: /es/destinos (instead of /es/destinations)
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { locationsES } from "@/lib/data-es";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Destinos Safari en Kenia - Maasai Mara, Amboseli, Tsavo",
    description: "Descubre los mejores destinos safari de Kenia: Maasai Mara, Amboseli, Tsavo, Samburu y más.",
    alternates: {
      canonical: "https://www.jaetravel.com/es/destinos",
      languages: {
        'en': 'https://www.jaetravel.com/destinations',
        'fr': 'https://www.jaetravel.com/fr/destinations',
        'es': 'https://www.jaetravel.com/es/destinos',
      },
    },
  };
}

export default async function DestinosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Destinos Safari en Kenia</h1>
            <p className="text-xl max-w-2xl mx-auto">Explora los mejores destinos safari de Kenia</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationsES.map((loc) => (
                <Link key={loc.slug} href={`/es/destinos/${loc.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <Image src={loc.image} alt={loc.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{loc.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 line-clamp-2">{loc.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" /> Safari
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