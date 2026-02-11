import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/breadcrumb";
import { SchemaRenderer } from "@/components/schema-renderer";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { faqs } from "@/lib/data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title:
    "FAQ – Kenya Safari Tours, Lodges & Travel 2025–2026 | Jaetravel Expeditions",
  description:
    "Answers to common questions about Kenya safaris: best time to visit, Great Migration, luxury lodges, visas, packing, family travel, accessibility, costs and more. Plan your 2025–2026 safari with confidence.",
  keywords:
    "kenya safari faq, best time to visit kenya safari, great migration faq, maasai mara safari questions, amboseli travel tips, luxury safari lodges faq, kenya safari visa, family safari kenya, accessible safari kenya, kenya safari cost 2025, safari packing list",
  openGraph: {
    title: "Kenya Safari FAQ & Travel Questions 2025–2026",
    description:
      "Expert answers about Kenya safaris – timing, lodges, wildlife, visas, costs, accessibility and planning tips.",
    url: "https://www.jaetravel.com/faq",
    images: [
      {
        url: "/og-kenya-safari-faq.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Safari FAQ – Planning Your 2025–2026 Adventure",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jaetravel.com/faq",
  },
  robots: "index, follow",
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "FAQ" },
  ]);

  return (
    <>
      <SchemaRenderer schema={faqSchema} />
      <SchemaRenderer schema={breadcrumbSchema} />

      <Header />

      <main>
        {/* Hero */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Frequently Asked Questions" },
              ]}
            />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed opacity-95">
              Quick answers to the most common questions about planning your Kenya safari in 2025–2026.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Kenya Safari Questions Answered
              </h2>
              <p className="text-lg text-gray-600">
                From timing and costs to lodges, visas, accessibility and wildlife — find the answers you need.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`faq-${faq.id}`}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-gray-900 hover:text-orange-600 py-5 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 pb-6 pt-2 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions CTA */}
            <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Our safari experts are ready to help you plan the perfect Kenya adventure — from itinerary creation to lodge recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-md"
                >
                  Contact Us Now
                </Link>
                <Link
                  href="/destinations"
                  className="border-2 border-orange-600 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-xl font-bold text-lg transition"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links / related */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Related Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link
                href="/destinations/maasai-mara"
                className="bg-white border border-gray-300 hover:border-orange-400 px-6 py-3 rounded-lg font-medium transition"
              >
                Maasai Mara Guide
              </Link>
              <Link
                href="/hotels"
                className="bg-white border border-gray-300 hover:border-orange-400 px-6 py-3 rounded-lg font-medium transition"
              >
                Luxury Lodges
              </Link>
              <Link
                href="/blog"
                className="bg-white border border-gray-300 hover:border-orange-400 px-6 py-3 rounded-lg font-medium transition"
              >
                Safari Blog
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-300 hover:border-orange-400 px-6 py-3 rounded-lg font-medium transition"
              >
                Get Personalized Help
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}