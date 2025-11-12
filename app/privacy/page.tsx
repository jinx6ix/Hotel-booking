import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy | Jaetravel Expeditions",
  description: "Read Jaetravel Expeditions privacy policy. Learn how we protect your personal data.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Privacy", href: "/privacy" },
              ]}
            />
            <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">Privacy Policy</h1>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h2>

            <div className="space-y-6 text-gray-600">
              <section>
                <h3 className="text-xl font-bold text-gray-900">1. Information Collection</h3>
                <p>
                  We collect information you provide directly, such as name, email, phone number, and travel preferences
                  when booking with us.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">2. Data Usage</h3>
                <p>
                  Your information is used to process bookings, communicate about your safari, and improve our services.
                  We never share your data with third parties without consent.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">3. Security</h3>
                <p>
                  We implement industry-standard security measures to protect your personal information from
                  unauthorized access.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">4. Cookies</h3>
                <p>
                  Our website uses cookies to enhance user experience and analyze site performance. You can disable
                  cookies in your browser.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">5. Your Rights</h3>
                <p>
                  You have the right to access, correct, or delete your personal information. Contact us to exercise
                  these rights.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900">6. Changes to Policy</h3>
                <p>We may update this privacy policy periodically. Changes are effective immediately upon posting.</p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
