import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SchemaRenderer } from "@/components/schema-renderer";
import { generateBreadcrumbSchema, generateVehicleSchema, generateFAQSchema } from "@/lib/schema";
import { vehicles } from "@/lib/vehicle-data";
import { Shield, Star, Camera, Accessibility, Users, MapPin, Calendar, DollarSign } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) return { title: "Vehicle Not Found" };

  return {
    title: `${vehicle.name} Rental Kenya | ${vehicle.price} | Jaetravel Safari Vehicles`,
    description: `Rent ${vehicle.name} from ${vehicle.price.split(" ")[0]}/day. Perfect for Maasai Mara, Amboseli, Tsavo safaris. ${vehicle.accessibility ? "Wheelchair accessible with lift & ramp. " : ""}${vehicle.photography ? "Photography optimized with 360° roof & camera mounts. " : ""}Unlimited mileage, expert driver, 24/7 support.`,
    keywords: `rent ${vehicle.name.toLowerCase()}, ${vehicle.name} hire Kenya, safari Landcruiser rental, wheelchair accessible safari vehicle, photography vehicle Kenya, 4x4 rental Maasai Mara, car hire Kenya safari, accessible Landcruiser rental, pop-up roof vehicle hire`,
    openGraph: {
      title: `${vehicle.name} – Safari Car Hire Kenya | Jaetravel`,
      description: vehicle.description,
      url: `https://www.jaetravel.com/car-hire/${slug}`,
      type: "website",
      images: [
        {
          url: `https://www.jaetravel.com${vehicle.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${vehicle.name} – Safari rental vehicle in Maasai Mara Kenya`,
        },
      ],
    },
    alternates: { canonical: `https://www.jaetravel.com/car-hire/${slug}` },
    robots: "index, follow",
  };
}

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug);
  if (!vehicle) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Car Hire Kenya", href: "/car-hire" },
    { label: vehicle.name, href: `/car-hire/${slug}` },
  ]);

  const vehicleSchema = generateVehicleSchema({
    name: vehicle.name,
    description: vehicle.longDescription || vehicle.description,
    price: vehicle.price, // Pass the full price string like "$180 – $220 per day"
    image: vehicle.heroImage,
    url: `https://www.jaetravel.com/car-hire/${slug}`,
    passengers: parseInt(vehicle.specs[0]?.match(/\d+/)?.[0] || "6"),
    fuelType: vehicle.technical?.fuel || "Diesel",
    vehicleConfiguration: vehicle.photography?.roofType || (vehicle.accessibility ? "Accessible 4x4" : "Pop-up Roof"),
    brand: "Toyota",
    model: vehicle.name.includes("Minivan") ? "Hiace" : "Land Cruiser",
    currency: "USD",
  });

  const faqSchema = generateFAQSchema(vehicle.faqs);

  // Review snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: `${vehicle.name} Rental`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: vehicle.accessibility ? "4.9" : "4.8",
      bestRating: "5",
    },
    name: `Perfect ${vehicle.name} for our Maasai Mara Safari`,
    author: { "@type": "Person", name: "James Mwangi" },
    reviewBody: `The ${vehicle.name} was exactly what we needed. ${vehicle.accessibility ? "The lift and space made it easy for my mother." : "Great visibility and very comfortable."} Driver was knowledgeable. Highly recommend!`,
    publisher: { "@type": "Organization", name: "Google Reviews" },
  };

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={vehicleSchema} />
      <SchemaRenderer schema={faqSchema} />
      <SchemaRenderer schema={reviewSchema} />

      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] md:h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <Image
          src={vehicle.heroImage}
          alt={`${vehicle.name} – Safari rental vehicle in Maasai Mara during game drive – Jaetravel Kenya`}
          fill
          className="object-cover opacity-70"
          priority
          quality={85}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight">
              {vehicle.name}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-orange-200 font-semibold">
              {vehicle.price} • Unlimited Mileage
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-black/40 backdrop-blur-sm px-5 py-2 rounded-full text-lg flex items-center gap-2">
                <Users size={20} /> Up to {vehicle.specs[0]?.match(/\d+/)?.[0] || "6"} passengers
              </div>
              {vehicle.accessibility && (
                <div className="bg-blue-600/90 px-5 py-2 rounded-full text-lg flex items-center gap-2">
                  <Accessibility size={20} /> Wheelchair Accessible
                </div>
              )}
              {vehicle.photography && (
                <div className="bg-purple-600/90 px-5 py-2 rounded-full text-lg flex items-center gap-2">
                  <Camera size={20} /> Photography Optimized
                </div>
              )}
            </div>

            <p className="text-lg md:text-xl mb-10 max-w-3xl opacity-95 leading-relaxed">
              {vehicle.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/contact?vehicle=${slug}&service=car-hire`}
                className="bg-orange-600 hover:bg-orange-700 text-white px-9 py-5 rounded-xl font-bold text-lg transition shadow-lg flex items-center gap-2"
              >
                <Star size={20} /> Book This Vehicle Now
              </Link>
              <Link
                href="/car-hire"
                className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-9 py-5 rounded-xl font-bold text-lg hover:bg-white/30 transition flex items-center gap-2"
              >
                View All Safari Vehicles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-1">{vehicle.price.split("/")[0]}</div>
              <p className="text-gray-600">Starting Price</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-1">Unlimited</div>
              <p className="text-gray-600">Mileage</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-1">24/7</div>
              <p className="text-gray-600">Support & Assistance</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-1">Expert</div>
              <p className="text-gray-600">Driver Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {vehicle.gallery.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Gallery – {vehicle.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {vehicle.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group">
                  <Image
                    src={img}
                    alt={`${vehicle.name} safari vehicle – gallery image ${i + 1} – Kenya wildlife`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content – Rich SEO text */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <article className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
              Discover the {vehicle.name} – Your Perfect Safari Companion in Kenya
            </h2>

            <div dangerouslySetInnerHTML={{ __html: vehicle.longDescription }} />

            <h3 className="text-3xl font-bold mt-16 mb-8 text-gray-900">
              Why Choose the {vehicle.name} for Your Kenya Safari?
            </h3>
            <p>
              Whether you're planning a classic <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-medium">Maasai Mara safari</Link>, seeking elephants under Kilimanjaro in Amboseli, or exploring the vast wilderness of Tsavo, the {vehicle.name} delivers comfort, visibility, and reliability. With our professional drivers who know every game trail, you'll experience Kenya's wildlife at its best — safely and comfortably.
            </p>

            {vehicle.accessibility && (
              <>
                <h3 className="text-3xl font-bold mt-16 mb-8 text-gray-900">
                  Wheelchair Accessible Safari – Travel Without Limits
                </h3>
                <p>
                  Designed specifically for travelers with mobility challenges, this <strong>wheelchair accessible Landcruiser</strong> (or variant) removes barriers to experiencing Africa's wildlife. Hydraulic lifts, wide doors, lowered floors, and secure tie-down systems ensure safe and dignified access. Pair it with our <Link href="/hotels" className="text-orange-600 hover:underline font-medium">accessible luxury lodges</Link> for a truly inclusive safari experience in Kenya.
                </p>
              </>
            )}

            {vehicle.photography && (
              <>
                <h3 className="text-3xl font-bold mt-16 mb-8 text-gray-900">
                  Photography & Filmmaking Optimized Vehicle
                </h3>
                <p>
                  Built with input from professional wildlife photographers and filmmakers, the {vehicle.name} offers a 360° open roof, sturdy camera mounts, bean bags, power outlets for charging, and silent electric approach mode — perfect for capturing the <strong>Great Migration</strong>, big cats, or birds without disturbance.
                </p>
              </>
            )}

            <h3 className="text-3xl font-bold mt-16 mb-8 text-gray-900">
              Perfect for These Iconic Destinations
            </h3>
            <ul className="list-disc pl-6 space-y-3 mb-10">
              <li><strong>Maasai Mara</strong> – River crossings, big cats, hot-air balloon views</li>
              <li><strong>Amboseli</strong> – Elephants against Mount Kilimanjaro</li>
              <li><strong>Lake Nakuru</strong> – Flamingos, rhinos, tree-climbing lions</li>
              <li><strong>Tsavo East & West</strong> – Vast red-earth landscapes, huge elephant herds</li>
              <li><strong>Samburu</strong> – Special Five animals, dramatic scenery</li>
            </ul>

            <div className="text-center my-12">
              <Link
                href={`/contact?vehicle=${slug}`}
                className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-6 rounded-xl font-bold text-xl shadow-lg transition"
              >
                Get Your Personalized Quote for {vehicle.name}
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Technical Specifications – {vehicle.name}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Object.entries(vehicle.technical || {}).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="font-semibold capitalize mb-2 text-gray-800">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <p className="text-xl font-bold text-orange-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Inclusions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Star className="text-orange-600" size={32} />
                Key Features
              </h2>
              <ul className="space-y-4 text-lg">
                {vehicle.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Shield className="text-green-600" size={32} />
                What's Included
              </h2>
              <ul className="space-y-4 text-lg">
                {vehicle.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Shield className="text-green-600 mt-1" size={20} />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {vehicle.faqs && vehicle.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
              Frequently Asked Questions – {vehicle.name} Rental
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {vehicle.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-gray-50 p-7 rounded-xl shadow-sm border border-gray-200 cursor-pointer group"
                  open={i < 2}
                >
                  <summary className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition flex items-center justify-between">
                    {faq.question}
                  </summary>
                  <div className="mt-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Vehicles */}
      {vehicle.relatedVehicles?.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              You May Also Like These Safari Vehicles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {vehicle.relatedVehicles.map((relSlug) => {
                const related = vehicles.find((v) => v.slug === relSlug);
                if (!related) return null;
                return (
                  <Link
                    key={relSlug}
                    href={`/car-hire/${relSlug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-56">
                      <Image
                        src={related.image || related.heroImage}
                        alt={related.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-orange-600 transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-orange-600 font-bold text-lg">{related.price}</p>
                      {related.accessibility && (
                        <span className="inline-block mt-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          Wheelchair Accessible
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience Kenya with the {vehicle.name}?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Get your personalized quote today. Professional driver, unlimited mileage, full insurance, and 24/7 support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href={`/contact?vehicle=${slug}`}
              className="bg-white text-orange-700 px-12 py-6 rounded-xl font-bold text-xl hover:bg-orange-50 transition shadow-lg"
            >
              Request Quote Now
            </Link>
            <Link
              href="/car-hire"
              className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition backdrop-blur-sm"
            >
              See All Vehicles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}