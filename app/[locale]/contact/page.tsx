import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Contáctenos - Reserva tu Safari en Kenia" : "Contactez Jaetravel - Réservation de Safari au Kenya",
    description: locale === 'es' ? "Contacta nuestros expertos safari para tu viaje a Kenia. Cotización gratuita, asesoramiento personalizado." : "Contactez nos experts safari pour votre voyage au Kenya. Devis gratuit, conseil personnalisé.",
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Contact');

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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">{locale === 'es' ? "Información de Contacto" : "Informations de Contact"}</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{locale === 'es' ? "Teléfono" : "Téléphone"}</p>
                      <p className="text-gray-600">+254 726 485 228</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{locale === 'es' ? "Correo" : "Email"}</p>
                      <p className="text-gray-600">info@jaetravel.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{locale === 'es' ? "Dirección" : "Adresse"}</p>
                      <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold">{locale === 'es' ? "Horario" : "Horaire"}</p>
                      <p className="text-gray-600">24/7 {locale === 'es' ? "Soporte" : "Support"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">{locale === 'es' ? "Envíanos un Mensaje" : "Envoyez-nous un Message"}</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{locale === 'es' ? "Nombre" : "Nom"}</label>
                    <input type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder={locale === 'es' ? "Tu nombre" : "Votre nom"} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{locale === 'es' ? "Correo" : "Email"}</label>
                    <input type="email" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder={locale === 'es' ? "tu@email.com" : "vous@email.com"} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{locale === 'es' ? "Teléfono" : "Téléphone"}</label>
                    <input type="tel" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder="+254..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{locale === 'es' ? "Mensaje" : "Message"}</label>
                    <textarea rows={5} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500" placeholder={locale === 'es' ? "¿En qué podemos ayudarte?" : "Comment pouvons-nous vous aider?"}></textarea>
                  </div>
                  <button type="submit" className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                    {locale === 'es' ? "Enviar Mensaje" : "Envoyer"}
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