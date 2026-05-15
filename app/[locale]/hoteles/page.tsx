// Spanish route: /es/hoteles (instead of /es/hotels)
import type { Metadata } from "next";
import { hotels } from "@/lib/data";
import { hotelsES } from "@/lib/data-es";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HotelCard } from "@/components/hotel-card";
import { SearchBar } from "@/components/search-bar";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hoteles en Kenia - Lodge de Safari & Hoteles de Lujo",
    description: "Reserva tu alojamiento safari en Kenia. Lodges de lujo, campos de tiendas, hoteles 5 estrellas en todos los destinos.",
    alternates: {
      canonical: "https://www.jaetravel.com/es/hoteles",
      languages: {
        'en': 'https://www.jaetravel.com/hotels',
        'fr': 'https://www.jaetravel.com/fr/hotels',
        'es': 'https://www.jaetravel.com/es/hoteles',
      },
    },
  };
}

export default async function HotelesPage() {
  const displayHotels = hotelsES.length > 0 ? hotelsES.map(h => ({
    ...h,
    slug: h.id,
    updatedAt: new Date(),
    rooms: [],
    gallery: [],
    amenities: [],
    address: "",
    phone: "",
    email: "",
  })) : hotels;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Hoteles en Kenia</h1>
            <p className="text-xl max-w-2xl mx-auto">Reserva tu alojamiento safari perfecto</p>
          </div>
        </section>

        <section className="py-8 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <SearchBar />
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Todos los Hoteles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayHotels.map((hotel) => (
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