import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { faqs } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "FAQ - Kenya Safari Tours | Jaetravel Expeditions",
  description: "Frequently asked questions about Kenya safari tours, accommodations, visas, wildlife, and travel tips.",
  keywords: "Kenya safari FAQ, safari questions, travel tips, Kenya tourism",
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "FAQ", href: "/faq" },
  ])

  return (
    <>
      <SchemaRenderer schema={faqSchema} />
      <SchemaRenderer schema={breadcrumbSchema} />
      <Header />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about Kenya safari tours and accommodations.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-orange-500 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-8 bg-orange-50 rounded-lg border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">Can't find the answer you're looking for? Our team is here to help.</p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
