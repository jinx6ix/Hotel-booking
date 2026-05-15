// Spanish route: /es/contacto (instead of /es/contact)
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contáctenos - Reserva tu Safari en Kenia",
    description: "Contacta nuestros expertos safari para tu viaje a Kenia. Cotización gratuita, asesoramiento personalizado.",
    alternates: {
      canonical: "https://www.jaetravel.com/es/contacto",
      languages: {
        'en': 'https://www.jaetravel.com/contact',
        'fr': 'https://www.jaetravel.com/fr/contact',
        'es': 'https://www.jaetravel.com/es/contacto',
      },
    },
  };
}

export default async function ContactoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Contáctenos</h1>
            <p className="text-xl max-w-2xl mx-auto">Póngase en contacto para su reserva de safari</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-gray-600">+254 726 485 228</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Correo</p>
                      <p className="text-gray-600">info@jaetravel.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Dirección</p>
                      <p className="text-gray-600">Nairobi, Kenia</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Horario</p>
                      <p className="text-gray-600">24/7 Soporte</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Correo</label>
                    <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <input type="tel" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder="+254..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea rows={5} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder="¿En qué podemos ayudarte?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}