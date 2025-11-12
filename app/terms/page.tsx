import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Terms & Conditions | Jaetravel Expeditions",
  description: "Read Jaetravel Expeditions terms and conditions for safari bookings and accommodations.",
}

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Terms", href: "/terms" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Terms & Conditions</h1>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms & Conditions</h2>

            <div className="space-y-6 text-gray-600">
              <section>
                <h3 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h3>
                <p>
                  By booking with Jaetravel Expeditions, you agree to these terms and conditions. If you do not agree,
                  please do not use our services.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">2. Booking & Payment</h3>
                <p>
                  All bookings are subject to availability. A deposit is required to confirm your reservation. Full
                  payment must be received 30 days before your travel date.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">3. Cancellation Policy</h3>
                <p>
                  Cancellations made 60+ days before travel receive a full refund. Cancellations 30-59 days before
                  travel receive 50% refund. Cancellations within 30 days are non-refundable.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">4. Liability</h3>
                <p>
                  Jaetravel Expeditions is not liable for circumstances beyond our control including weather, political
                  events, or health emergencies.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">5. Travel Documents</h3>
                <p>
                  Guests are responsible for obtaining necessary passports and visas. We recommend travel insurance.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">6. Health & Safety</h3>
                <p>
                  Guests must follow all safari rules and guide instructions. Wildlife encounters involve inherent
                  risks.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
