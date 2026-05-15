import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslations } from "next-intl/server";
import { faqs } from "@/lib/data";
import { faqsFR } from "@/lib/data-fr";
import { faqsES } from "@/lib/data-es";
import { ChevronDown } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? "Preguntas Frecuentes Safaris Kenia" : "FAQ Safaris Kenya - Questions Fréquemment Posées",
    description: locale === 'es' ? "Respuestas a preguntas frecuentes sobre safaris en Kenia: mejor temporada, migración, visas, presupuestos." : "Réponses aux questions fréquentes sur les safaris au Kenya: meilleure saison, migration, visas, hébergements, budget.",
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('FAQ');

  const allFaqs = locale === 'fr' ? faqsFR : locale === 'es' ? faqsES : faqs;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="relative py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-4">
              {allFaqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-xl shadow-sm group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}