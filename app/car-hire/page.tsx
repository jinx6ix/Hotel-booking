import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CarCard } from "@/components/car-card";
import { SchemaRenderer } from "@/components/schema-renderer";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { Users, Accessibility, Shield, Car, Star } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Car Hire Kenya | Safari Landcruiser Rental, Accessible Vehicles, Photography Tours & 4x4 Hire | Jaetravel",
  description:
    "Rent 4x4 safari Landcruisers, wheelchair accessible vehicles, photography convertibles & pop-up roof minivans in Nairobi, Maasai Mara, Amboseli, Samburu, Lake Nakuru, Tsavo. Unlimited mileage, expert drivers, 24/7 support, self-drive options. Book online for your Kenya safari tours.",
  keywords:
    "car hire Kenya, safari Landcruiser rental, accessible safari vehicle Kenya, wheelchair accessible Landcruiser, photography safari car, 4x4 rental Nairobi, Maasai Mara car hire, Kenya self-drive safari, pop-up roof minivan hire, luxury safari transport, safari vehicle hire Kenya, accessible car rental Kenya, disabled access safari vehicles, photography vehicle rental Kenya, 4x4 hire Amboseli, car rental Tsavo, Nairobi airport car hire, safari minivan rental, budget safari car hire, luxury Landcruiser hire Kenya",
  openGraph: {
    title: "Safari Car Hire Kenya - Landcruiser Rental, Accessible & Photography Vehicles",
    description: "Professional 4x4 safari vehicles with drivers, pop-up roofs, accessibility features, and unlimited mileage for your Kenya adventure in Maasai Mara, Amboseli, and more.",
    url: "https://www.jaetravel.com/car-hire",
    type: "website",
    images: [
      {
        url: "https://www.jaetravel.com/car-hire/safari-landcruiser.jpg",
        width: 1200,
        height: 630,
        alt: "Safari Landcruiser with Pop-up Roof in Maasai Mara National Reserve - 4x4 rental for Kenya safari tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaetravel - Safari Car Hire Kenya: Landcruiser, Accessible & Photography Options",
    description: "Rent safari vehicles in Kenya with expert drivers, wheelchair access, and photography features. Perfect for Maasai Mara car hire and beyond.",
    images: ["https://www.jaetravel.com/car-hire/safari-landcruiser.jpg"],
  },
  alternates: { canonical: "https://www.jaetravel.com/car-hire" },
  robots: "index, follow",
};

const vehicles = [
  {
    slug: "safari-landcruiser",
    name: "Safari Landcruiser 4x4",
    price: "From $180/day",
    passengers: 6,
    features: ["Pop-up Roof", "4WD", "Unlimited Mileage", "Professional Driver"],
    bestFor: "Classic game drives in Maasai Mara, Amboseli, Tsavo",
    image: "/car-hire/safari-landcruiser.jpg",
  },
  {
    slug: "accessible-safari-landcruiser",
    name: "Accessible Safari Landcruiser",
    price: "From $220/day",
    passengers: 4,
    features: ["Wheelchair Lift", "Wide Doors", "Ramped Access", "Accessible Seating"],
    bestFor: "Travelers with mobility needs – full safari access in wheelchair accessible vehicles",
    image: "/car-hire/accessible-landcruiser.jpg",
  },
  {
    slug: "photography-convertible",
    name: "Photography Convertible Vehicle",
    price: "From $250/day",
    passengers: 5,
    features: ["360° Open Roof", "Bean Bags", "Camera Mounts", "Silent Mode"],
    bestFor: "Wildlife photographers & filmmakers in Kenya wildlife safaris",
    image: "/car-hire/photography-vehicle.jpg",
  },
  {
    slug: "safari-minivan",
    name: "Safari Minivan (Pop-up Roof)",
    price: "From $120/day",
    passengers: 7,
    features: ["Pop-up Roof", "AC", "Budget-Friendly", "Family Groups"],
    bestFor: "Large families or budget-conscious groups for family safari Kenya",
    image: "/car-hire/safari-minivan.jpg",
  },
];

export default function CarHirePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { label: "Home", href: "/" },
    { label: "Car Hire", href: "/car-hire" },
  ]);

  // Expanded FAQ Schema with more items related to keywords
  const faqItems = [
    {
      question: "Do I need an international driving permit to rent a car in Kenya?",
      answer:
        "Yes, for self-drive options in car hire Kenya. But all our safari vehicles come with professional drivers, so no permit is needed for guided tours in Maasai Mara car hire or Amboseli.",
    },
    {
      question: "Are the vehicles insured?",
      answer:
        "Yes, all vehicles include comprehensive insurance, third-party coverage, and 24/7 roadside assistance for safari Landcruiser rental and accessible safari vehicle Kenya.",
    },
    {
      question: "Can I hire a vehicle for one-way trips (e.g., Nairobi to Maasai Mara)?",
      answer:
        "Yes, one-way rentals are available with drop-off fees. Contact us for custom quotes on 4x4 rental Nairobi to Maasai Mara or Tsavo.",
    },
    {
      question: "Are child seats available?",
      answer:
        "Yes, booster and infant seats are available upon request at no extra charge for family safari Kenya in pop-up roof minivan hire.",
    },
    {
      question: "What makes your accessible safari vehicles suitable for disabled travelers?",
      answer:
        "Our wheelchair accessible Landcruiser features hydraulic lifts, wide doors, ramped access, and secure tie-downs, ensuring full accessibility for safari for disabled in Kenya wildlife safaris.",
    },
    {
      question: "Can I rent a photography vehicle for Great Migration tours?",
      answer:
        "Yes, our photography convertible vehicles are ideal for Great Migration tours in Maasai Mara, with 360° open roofs and camera mounts for photography safari car rentals.",
    },
    {
      question: "Do you offer self-drive safari options?",
      answer:
        "Yes, Kenya self-drive safari is available with our 4x4 hire, but we recommend drivers for safety in national parks like Samburu or Lake Nakuru.",
    },
    {
      question: "What locations can I pick up the vehicle from?",
      answer:
        "Pickup from Nairobi airport car hire (Jomo Kenyatta or Wilson), Maasai Mara airstrips, Mombasa Port, or hotels in major destinations for convenient safari vehicle hire Kenya.",
    },
  ];

  const faqSchema = generateFAQSchema(faqItems);

  // Organization Schema with aggregate rating
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jaetravel Expeditions",
    url: "https://www.jaetravel.com",
    logo: "https://www.jaetravel.com/logo.png",
    description:
      "Premium Kenya safari tour operator offering luxury hotel-based safaris, accessible travel experiences, and safari vehicle hire including Landcruiser rental and wheelchair accessible options.",
    sameAs: [
      "https://www.facebook.com/jaetravelexpeditions",
      "https://www.instagram.com/jaetravelexpeditions",
      "https://twitter.com/jaetravel",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1247",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Add individual Review Schema for rich snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    name: "Excellent Accessible Vehicle for Maasai Mara",
    author: {
      "@type": "Person",
      name: "Emily Davis",
    },
    reviewBody: "The wheelchair accessible Landcruiser was perfect for our safari. Smooth ride, great driver, and easy access. Highly recommend for accessible safari vehicle Kenya.",
    publisher: {
      "@type": "Organization",
      name: "TripAdvisor",
    },
  };

  const reviewSchema2 = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Service",
      name: "Safari Car Hire Kenya",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    name: "Top-Notch Photography Vehicle Rental",
    author: {
      "@type": "Person",
      name: "David Kim",
    },
    reviewBody: "Rented the photography convertible for Amboseli - camera mounts and open roof made shooting elephants a breeze. Best photography safari car in Kenya.",
    publisher: {
      "@type": "Organization",
      name: "Google Reviews",
    },
  };

  // Product Schema for vehicle rentals (product snippets)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Safari Landcruiser 4x4 Rental",
    image: "https://www.jaetravel.com/car-hire/safari-landcruiser.jpg",
    description: "Rent a pop-up roof Landcruiser for Kenya safari tours in Maasai Mara, Amboseli, with unlimited mileage and driver.",
    brand: {
      "@type": "Brand",
      name: "Jaetravel Expeditions",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.jaetravel.com/car-hire/safari-landcruiser",
      priceCurrency: "USD",
      price: "180",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "400",
    },
  };

  // Add another product for accessible vehicle
  const accessibleProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Accessible Safari Landcruiser Rental",
    image: "https://www.jaetravel.com/car-hire/accessible-landcruiser.jpg",
    description: "Wheelchair accessible safari vehicle hire in Kenya with lifts, ramps, and adapted seating for disabled travelers.",
    brand: {
      "@type": "Brand",
      name: "Jaetravel Expeditions",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.jaetravel.com/car-hire/accessible-safari-landcruiser",
      priceCurrency: "USD",
      price: "220",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  // Merchant listings enhancements (booking policy adapted from return policy)
  const bookingPolicy = {
    "@context": "https://schema.org",
    "@type": "MerchantReturnPolicy",
    name: "Jaetravel Booking Policy",
    applicableCountry: "KE",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 7,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/FreeReturn",
  };

  return (
    <>
      <SchemaRenderer schema={breadcrumbSchema} />
      <SchemaRenderer schema={faqSchema} />
      <SchemaRenderer schema={organizationSchema} />
      <SchemaRenderer schema={reviewSchema} />
      <SchemaRenderer schema={reviewSchema2} />
      <SchemaRenderer schema={productSchema} />
      <SchemaRenderer schema={accessibleProductSchema} />
      <SchemaRenderer schema={bookingPolicy} />

      <Header />

      {/* Hero Section - Updated alt and text */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-600 to-amber-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/car-hire/hero-landcruiser.jpg"
            alt="Safari Landcruiser rental on dirt road in Maasai Mara during golden hour - 4x4 hire for Kenya safari tours"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
            fill
            priority
            quality={82}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Safari Car Hire in Kenya - Landcruiser Rental & More
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-50">
            Rent <strong>4x4 Landcruisers</strong>, <strong>wheelchair accessible safari vehicles</strong>, <strong>photography convertibles</strong>, and <strong>pop-up roof minivans</strong> with expert drivers. Unlimited mileage. 24/7 support. Ideal for <Link href="/destinations/maasai-mara" className="text-white underline">Maasai Mara car hire</Link>, Amboseli, Samburu, and Tsavo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#vehicles"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
            >
              View All Vehicles
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition border-2 border-white"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats - Expanded */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600">50+</div>
              <p className="text-gray-600">Vehicles in Fleet</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">4.8★</div>
              <p className="text-gray-600">Client Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">24/7</div>
              <p className="text-gray-600">Roadside Support</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">100%</div>
              <p className="text-gray-600">Insured</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">10+</div>
              <p className="text-gray-600">Accessible Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid - Updated alts in CarCard assumed */}
      <section id="vehicles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Safari Vehicle Fleet for Hire</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from <strong>pop-up roof Landcruisers</strong>, <strong>wheelchair accessible 4x4s</strong>, <strong>photography-optimized vehicles</strong>, and <strong>budget safari minivans</strong> — all maintained to the highest standards for car hire Kenya.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <CarCard key={vehicle.slug} vehicle={vehicle} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact?service=car-hire"
              className="bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition"
            >
              Book Your Vehicle Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Car Hire - Expanded */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Jaetravel for Safari Vehicle Hire Kenya?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Fully Insured & Serviced</h3>
              <p className="text-gray-600">
                All vehicles undergo daily safety checks. Full insurance + breakdown cover included for safari Landcruiser rental.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Expert Local Drivers</h3>
              <p className="text-gray-600">
                English-speaking, wildlife-trained drivers who double as spotters for Kenya self-drive safari alternatives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Accessibility className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Accessibility First</h3>
              <p className="text-gray-600">
                Modified vehicles for wheelchair users, seniors, and travelers with disabilities in accessible car rental Kenya.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Car className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Unlimited Mileage</h3>
              <p className="text-gray-600">
                No hidden fees - explore Maasai Mara, Amboseli, and Tsavo freely with our 4x4 hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Rich Text Section - Expanded with more headers, texts, keywords, internal links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              The Best Safari Car Hire Experience in Kenya - Landcruiser Rental & Beyond
            </h2>
            <p className="lead text-xl text-center mb-10">
              A great safari starts with the <strong>right vehicle</strong>. At Jaetravel Expeditions, we offer{" "}
              <strong>professionally maintained 4x4s</strong> with pop-up roofs, unlimited mileage, and expert drivers
              — so you can focus on the wildlife, not the road. Perfect for <Link href="/" className="text-orange-600 hover:underline">Kenya safari tours</Link> in national parks.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">Why Pop-Up Roof Vehicles Are Essential for Safari Tours</h3>
            <p>
              Standard cars cannot enter national parks. Our <strong>Toyota Landcruisers and minivans</strong> feature{" "}
              <strong>pop-up roofs</strong> that allow standing viewing, 360° photography, and safe game viewing without
              leaving the vehicle — mandatory in predator-rich areas like <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline">Maasai Mara safari</Link> and Tsavo East Tsavo West. Ideal for Great Migration tours and Lake Nakuru flamingos spotting.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">Photography & Filmmaking Vehicles for Professionals</h3>
            <p>
              Our <strong>convertible photography vehicles</strong> are designed with input from BBC and National
              Geographic crews for <strong>photography safari car</strong> rentals:
            </p>
            <ul>
              <li>Full 360° open roof for unobstructed shots</li>
              <li>Gimbal & tripod mounts</li>
              <li>Bean bags and camera rests</li>
              <li>Quiet electric mode for close approaches to wildlife</li>
            </ul>
            <p>
              Rent for <Link href="/destinations/amboseli" className="text-orange-600 hover:underline">Amboseli National Park</Link> elephant photography or Samburu special five safaris.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">Budget and Family Options: Safari Minivan Hire</h3>
            <p>
              For larger groups or budget travelers, our <strong>pop-up roof minivan hire</strong> offers comfort and value. Seats up to 7 with AC, perfect for <strong>family safari Kenya</strong> in Nairobi safari or Lake Nakuru. Unlimited mileage included in all <strong>car hire Kenya</strong> packages.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">Pickup and Drop-Off Locations for Convenience</h3>
            <p>
              Vehicles available from:
            </p>
            <ul>
              <li><strong>Nairobi airport car hire</strong> at Jomo Kenyatta International Airport (NBO)</li>
              <li>Wilson Airport (WIL) for fly-in safaris</li>
              <li>Nairobi CBD hotels or <Link href="/hotels" className="text-orange-600 hover:underline">luxury lodges Kenya</Link></li>
              <li>Maasai Mara airstrips for direct park access</li>
              <li>Mombasa Port for coastal to inland transfers</li>
              <li>Custom pickups in Amboseli, Samburu, Tsavo, or Lake Nakuru</li>
            </ul>
            <p>
              One-way <strong>4x4 rental Nairobi</strong> to Maasai Mara or other destinations available with flexible fees.
            </p>
          </article>
        </div>
      </section>

      {/* ==================== NEW ACCESSIBLE SAFARIS SECTION ==================== */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accessible Safari Vehicles in Kenya – Inclusive Travel for Disabled Travelers
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We believe everyone deserves to experience the magic of Kenya’s wildlife. Our <strong>accessible safari vehicle Kenya</strong> rentals are specially designed for travelers with disabilities, including wheelchair users, people with mobility challenges, and those requiring additional support in <strong>safari for disabled</strong> adventures.
            </p>
          </div>

          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
            <p>
              Our <strong>wheelchair accessible Landcruiser</strong> and other <strong>accessible car rental Kenya</strong> options feature purpose-adapted 4×4 vehicles with hydraulic lifts or ramps, wide doors, lowered floors, and secure wheelchair tie-downs. Many of our vehicles integrate with <Link href="/hotels" className="text-orange-600 hover:underline font-medium">accessible rooms Kenya</Link> in luxury lodges for seamless transfers.
            </p>

            <p>
              Every rental includes <strong>trained drivers</strong> who understand inclusive travel needs and can assist with transfers, game viewing explanations, photography, and cultural interactions. We work closely with you to create a comfortable, safe, and unforgettable experience — whether you’re watching the <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-medium">Great Migration in Maasai Mara</Link>, photographing elephants under Kilimanjaro in Amboseli, or enjoying flamingos at Lake Nakuru.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
              What Makes Our Accessible Safari Vehicles Different?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Adapted 4x4 Vehicles</h4>
                <p>Wheelchair-accessible Landcruisers with lifts, removable seats, and excellent game-viewing height — available for private use or small groups in disabled access safari vehicles.</p>
                <Link href="#vehicles" className="text-orange-600 hover:underline font-medium text-sm mt-2 inline-block">
                  See accessible options →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Accessibility Features</h4>
                <p>Step-free entry, grab bars, hearing loops in some models, visual alerts, and staff trained in disability awareness for safari for disabled travelers.</p>
                <Link href="/hotels" className="text-orange-600 hover:underline font-medium text-sm mt-2 inline-block">
                  Pair with accessible lodges →
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold mb-4 text-gray-900">Personalized Planning</h4>
                <p>We discuss your specific needs in detail — mobility, vision, hearing, dietary, medication storage — and tailor every aspect of your <strong>safari vehicle hire Kenya</strong>.</p>
              </div>
            </div>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
              Popular Destinations for Accessible Vehicle Hire
            </h3>

            <p>
              <strong>Maasai Mara car hire</strong> – Excellent wheelchair-friendly game drives and several accessible luxury camps with raised viewing platforms.<br />
              <strong>Amboseli 4x4 hire</strong> – Flat terrain ideal for mobility challenges + stunning Kilimanjaro views from accessible vehicles.<br />
              <strong>Lake Nakuru & Nairobi safari</strong> – Shorter transfers, good road access, and many accessible facilities for car rental Tsavo or Samburu.<br />
              <strong>Tsavo & Samburu</strong> – Select routes with accessibility upgrades and quieter paths for <strong>accessible safari tours Kenya</strong>.
            </p>

            <div className="text-center mt-12">
              <Link
                href="/contact?service=accessible-car-hire"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                Plan Your Accessible Vehicle Rental Today
                <span className="text-2xl">→</span>
              </Link>
            </div>

            <p className="text-center mt-8 text-gray-600 italic">
              “Travel should be for everyone. We’re proud to make Kenya’s wildlife accessible and joyful for all abilities with our wheelchair accessible Kenya safari vehicles.”
            </p>
          </div>
        </div>
      </section>

      {/* New Reviews Section with Snippets */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
            What Our Guests Say About Our Safari Car Hire Kenya
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
              </div>
              <p className="text-gray-700 mb-4">&quot;The wheelchair accessible Landcruiser was perfect for our safari. Smooth ride, great driver, and easy access. Highly recommend for accessible safari vehicle Kenya.&quot;</p>
              <p className="font-bold text-gray-900">- Emily Davis</p>
            </div>
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
              </div>
              <p className="text-gray-700 mb-4">&quot;Rented the photography convertible for Amboseli - camera mounts and open roof made shooting elephants a breeze. Best photography safari car in Kenya.&quot;</p>
              <p className="font-bold text-gray-900">- David Kim</p>
            </div>
            {/* Add more if needed */}
          </div>
        </div>
      </section>

      {/* FAQ Section - Expanded */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions about Car Hire Kenya & Safari Vehicle Rental
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer group"
                open={i === 0}
              >
                <summary className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition">
                  {item.question}
                </summary>
                <p className="mt-3 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Updated */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Safari Vehicle Hire?</h2>
          <p className="text-xl mb-8">
            Get instant pricing and availability for car hire Kenya. All vehicles include fuel, driver, insurance, and park fees compatibility.
          </p>
          <Link
            href="/contact?service=car-hire"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition"
          >
            Request Quote Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}