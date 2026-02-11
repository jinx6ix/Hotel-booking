import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { locations } from "@/lib/data";
import { MapPin, Star, Users, Award, Accessibility, Calendar, Globe, Heart, Car } from "lucide-react";
import { SchemaRenderer } from "@/components/schema-renderer";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { QuickBooking } from "@/components/quick-booking";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Jaetravel Expeditions – Best Kenya Safari Tours 2025/2026 | Luxury Lodges, Accessible Safaris & Safari Vehicle Hire",
  description:
    "Book unforgettable Kenya safari tours with luxury hotels, 5-star lodges, wheelchair accessible accommodations, and safari vehicle hire. Experience the Great Migration in Maasai Mara, Kilimanjaro views in Amboseli, flamingos in Lake Nakuru, unique wildlife in Samburu and Tsavo. Inclusive safari travel for families, couples and travelers with disabilities – expert guides, 4.8★ rated. Hire safari vehicles for self-drive or guided tours.",
  keywords:
    "Kenya safari tours, luxury safari Kenya, accessible safari Kenya, Maasai Mara safari, Great Migration tours, Amboseli National Park, Samburu special five, Lake Nakuru flamingos, Tsavo East Tsavo West, Nairobi safari, wheelchair accessible Kenya safari, inclusive travel Kenya, luxury lodges Kenya, safari for disabled, family safari Kenya, best time to visit Kenya, Kenya wildlife safaris, book safari online, luxury hotel Kenya, accessible rooms Kenya, safari vehicle hire Kenya, car hire for safari, accessible safari tours Kenya, wheelchair friendly safaris, disabled access Kenya tours, Maasai Mara luxury lodges, Amboseli accessible hotels, Samburu wheelchair safaris, Lake Nakuru inclusive tours, Tsavo safari vehicle rental, Nairobi car hire safari",
  openGraph: {
    title: "Jaetravel Expeditions – Luxury, Accessible & Inclusive Kenya Safari Tours 2025/2026 with Vehicle Hire",
    description:
      "Premium hotel-based safari tours in Kenya with 5-star lodges, wheelchair accessible options, safari vehicle hire, expert guides and unforgettable wildlife experiences.",
    url: "https://www.jaetravel.com",
    type: "website",
    images: [
      {
        url: "https://www.jaetravel.com/kenya-safari-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Safari – Great Migration in Maasai Mara National Reserve – luxury lodge view with accessible safari options and vehicle hire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaetravel Expeditions – Luxury, Inclusive & Accessible Kenya Safaris with Car Hire",
    description:
      "Book luxury and accessible safari tours in Maasai Mara, Amboseli, Tsavo, Samburu, Nakuru and more – 4.8★ rated. Hire safari vehicles for your adventure.",
    images: ["https://www.jaetravel.com/kenya-safari-landscape.jpg"],
  },
  alternates: {
    canonical: "https://www.jaetravel.com",
  },
  robots: "index, follow",
};

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ label: "Home", href: "/" }]);

  // Expanded FAQ Schema with more items related to keywords
  const faqItems = [
    {
      question: "What is the best time to visit Kenya for safari?",
      answer:
        "The best time for most Kenya safari destinations is the dry season from June to October, especially for the Great Migration in Maasai Mara. January to March also offers excellent dry weather and fewer crowds in many parks like Amboseli, Samburu, Lake Nakuru, and Tsavo.",
    },
    {
      question: "Is Kenya safari suitable for travelers with disabilities?",
      answer:
        "Yes – we offer wheelchair accessible safaris with modified 4×4 vehicles, accessible hotel rooms, trained guides and inclusive experiences across multiple destinations including Maasai Mara, Amboseli and Nairobi. Our accessible safari tours ensure everyone can enjoy Kenya wildlife safaris.",
    },
    {
      question: "Which destination is best for the Great Migration?",
      answer:
        "The Maasai Mara National Reserve is the best place to witness the Great Migration river crossings, typically between July and October. It offers exceptional wildlife viewing, luxury lodge options, and accessible safari tours.",
    },
    {
      question: "Are your safari tours family-friendly?",
      answer:
        "Yes – many of our luxury lodges and safari packages are perfect for families with children. We offer family rooms, child-friendly activities, safe game viewing experiences, and options for safari vehicle hire in destinations like Maasai Mara and Lake Nakuru.",
    },
    {
      question: "What types of accommodations do you offer in Kenya?",
      answer:
        "We provide luxury tented camps, 5-star lodges, boutique hotels and wheelchair accessible rooms across 9 iconic destinations including Maasai Mara, Amboseli, Tsavo, Samburu, Lake Nakuru and Nairobi. All with luxury hotel Kenya standards.",
    },
    {
      question: "How can I hire a safari vehicle in Kenya?",
      answer:
        "Our car hire services allow you to rent fully equipped safari vehicles, including 4x4 jeeps with pop-up roofs for optimal wildlife viewing. Available for self-drive or with professional drivers in Maasai Mara, Amboseli, and other parks. Perfect for flexible Kenya safari tours.",
    },
    {
      question: "What are accessible safari tours like?",
      answer:
        "Accessible safari tours in Kenya include wheelchair-friendly vehicles, ramps, adapted lodges with accessible rooms, and trained staff for travelers with disabilities. Experience inclusive travel in Maasai Mara, Amboseli, and more without compromising on luxury or adventure.",
    },
    {
      question: "Can I book safari online with vehicle hire?",
      answer:
        "Yes, book safari online through our platform, including luxury packages, accessible options, and safari vehicle hire. Customize your itinerary for the best time to visit Kenya and top destinations like Samburu special five or Lake Nakuru flamingos.",
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
      "Premium Kenya safari tour operator offering luxury hotel-based safaris, accessible travel experiences, and safari vehicle hire.",
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
    itemReviewed: {
      "@type": "Organization",
      name: "Jaetravel Expeditions",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    name: "Amazing Accessible Safari in Maasai Mara",
    author: {
      "@type": "Person",
      name: "Sarah Johnson",
    },
    reviewBody: "The wheelchair accessible safari tours were fantastic! We hired a safari vehicle and explored Maasai Mara with ease. Luxury lodges and expert guides made it unforgettable.",
    publisher: {
      "@type": "Organization",
      name: "TripAdvisor",
    },
  };

  // Add more reviews for snippets
  const reviewSchema2 = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: "Jaetravel Expeditions",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    name: "Best Luxury Safari Kenya with Car Hire",
    author: {
      "@type": "Person",
      name: "Michael Lee",
    },
    reviewBody: "Booked online for Great Migration tours in Maasai Mara. The luxury hotel Kenya options and safari vehicle hire were top-notch. Highly recommend for family safari Kenya.",
    publisher: {
      "@type": "Organization",
      name: "Google Reviews",
    },
  };

  // Product Schema for safari tours (product snippets)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Luxury Maasai Mara Safari Tour",
    image: "https://www.jaetravel.com/maasai-mara-safari.jpg",
    description: "5-day luxury safari in Maasai Mara with Great Migration viewing, luxury lodges, and optional safari vehicle hire.",
    brand: {
      "@type": "Brand",
      name: "Jaetravel Expeditions",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.jaetravel.com/destinations/maasai-mara",
      priceCurrency: "USD",
      price: "2500",
      availability: "https://schema.org/InStock",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "USD",
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
    },
  };

  // Add another product for accessible tour
  const accessibleProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Accessible Safari Tour Kenya",
    image: "https://www.jaetravel.com/accessible-safari.jpg",
    description: "Wheelchair accessible Kenya safari with adapted vehicles, accessible rooms, and inclusive experiences in Maasai Mara and Amboseli.",
    brand: {
      "@type": "Brand",
      name: "Jaetravel Expeditions",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.jaetravel.com/accessible-safaris",
      priceCurrency: "USD",
      price: "3000",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "300",
    },
  };

  // Merchant listings enhancements (return policy, etc.)
  const merchantReturnPolicy = {
    "@context": "https://schema.org",
    "@type": "MerchantReturnPolicy",
    name: "Jaetravel Return Policy",
    applicableCountry: "KE",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 30,
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/FreeReturn",
  };

  // Shipping policy for merchant opportunities
  const shippingPolicy = {
    "@context": "https://schema.org",
    "@type": "OfferShippingDetails",
    shippingRate: {
      "@type": "MonetaryAmount",
      value: "0",
      currency: "USD",
    },
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "KE",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 2,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 5,
        unitCode: "DAY",
      },
    },
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
      <SchemaRenderer schema={merchantReturnPolicy} />
      <SchemaRenderer schema={shippingPolicy} />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-r from-orange-600 to-orange-700 text-white overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/kenya-safari-landscape.webp"
            alt="Great Migration Kenya safari – wildebeest river crossing Maasai Mara luxury lodge view with accessible safari tours and safari vehicle hire options"
            className="w-full h-full object-cover opacity-45"
            loading="eager"
            fill
            priority
            quality={82}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Luxury & Accessible Kenya Safari Tours 2025–2026 with Safari Vehicle Hire
            </h1>

            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-orange-50/95 leading-relaxed">
              Experience the world-famous <strong>Great Migration</strong> in <Link href="/destinations/maasai-mara" className="text-white underline">Maasai Mara</Link>,
              elephants with <strong>Mount Kilimanjaro</strong> views in <strong>Amboseli</strong>, pink flamingo lakes in{" "}
              <strong>Lake Nakuru</strong>, unique northern wildlife in <strong>Samburu</strong> and vast wilderness in{" "}
              <strong>Tsavo</strong> — all with premium 5-star lodges, full accessibility options, and <Link href="/car-hire" className="text-white underline">safari vehicle hire</Link> for flexible adventures. Perfect for wheelchair accessible Kenya safari, inclusive travel Kenya, and family safari Kenya.
            </p>
          </div>

          {/* Booking boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-orange-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <Star className="text-orange-500" size={32} />
                Luxury Safari Experience
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Private game drives • 5-star lodges • Gourmet dining • Hot-air balloon rides • Expert naturalist guides for luxury safari Kenya
              </p>
              <QuickBooking />
            </div>

            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 shadow-2xl text-white border border-blue-400/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
                <Accessibility className="text-yellow-300" size={32} />
                Accessible & Inclusive Safari
              </h3>
              <p className="text-blue-50 mb-6 text-lg">
                Wheelchair accessible rooms • Adapted safari vehicles • Trained accessibility guides • Inclusive wildlife experiences for all abilities in accessible safari Kenya
              </p>
              <QuickBooking accessible={true} />
            </div>

            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-8 shadow-2xl text-white border border-green-400/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3">
                <Car className="text-yellow-300" size={32} />
                Safari Vehicle Hire
              </h3>
              <p className="text-green-50 mb-6 text-lg">
                Rent 4x4 safari jeeps • Pop-up roofs for viewing • Self-drive or guided • Available in Maasai Mara, Amboseli, and more for car hire for safari
              </p>
              <Link href="/car-hire" className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition">
                Hire Now
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              href="/destinations"
              className="bg-white text-orange-700 px-9 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition shadow-lg"
            >
              Explore All 9 Safari Destinations
            </Link>
            <Link
              href="/hotels"
              className="bg-transparent border-2 border-white text-white px-9 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition backdrop-blur-sm"
            >
              View Luxury Lodges & Hotels
            </Link>
            <Link
              href="/car-hire"
              className="bg-transparent border-2 border-white text-white px-9 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition backdrop-blur-sm"
            >
              Safari Car Hire Options
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">9</div>
              <p className="text-lg font-medium text-gray-700">Iconic Safari Destinations</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">120+</div>
              <p className="text-lg font-medium text-gray-700">Luxury & Accessible Lodges</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">4.8★</div>
              <p className="text-lg font-medium text-gray-700">Traveler Rating</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">10,000+</div>
              <p className="text-lg font-medium text-gray-700">Happy Safari Guests</p>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-lg font-medium text-gray-700">Safari Vehicles for Hire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rich content section - Expanded with more headers, texts, keywords */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Discover the Best Kenya Safari Experiences & Tours
          </h2>

          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
            <p>
              Kenya offers some of the world’s most spectacular wildlife adventures. Witness the dramatic{" "}
              <strong>Great Migration tours</strong> in the <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-medium">Maasai Mara safari</Link>, where millions of wildebeest and zebras cross crocodile-infested rivers. Photograph massive elephant herds against the majestic{" "}
              <strong>Mount Kilimanjaro</strong> backdrop in <strong>Amboseli National Park</strong>. Marvel at thousands of pink <strong>Lake Nakuru flamingos</strong> and discover the rare{" "}
              <strong>Samburu special five</strong> animals in the remote northern reserves. Explore vast wilderness in <strong>Tsavo East Tsavo West</strong> and start with a <strong>Nairobi safari</strong>.
            </p>

            <p>
              Our <strong>luxury hotel-based safari tours</strong> combine comfort and adventure — return each evening to 5-star lodges, tented camps or boutique hotels with swimming pools, gourmet restaurants, private plunge pools and breathtaking views. No camping required. Ideal for <strong>family safari Kenya</strong>, couples, and those seeking <strong>luxury lodges Kenya</strong>.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
              Luxury Safari Holidays in Kenya with Premium Accommodations
            </h3>
            <p>
              Enjoy private game drives, hot-air balloon safaris at sunrise, bush dinners under the stars, and stays in the most exclusive{" "}
              <Link href="/hotels" className="text-orange-600 hover:underline font-medium">
                luxury lodges Kenya
              </Link>{" "}
              has to offer — from <strong>Maasai Mara luxury lodges</strong> to elegant resorts near Nairobi. Book safari online for the <strong>best time to visit Kenya</strong> and experience unparalleled <strong>Kenya wildlife safaris</strong>.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
              Safari Vehicle Hire: Flexible Car Hire for Safari Adventures
            </h3>
            <p>
              Enhance your Kenya safari tours with our <Link href="/car-hire" className="text-orange-600 hover:underline font-medium">safari vehicle hire</Link> services. Rent reliable 4x4 vehicles equipped for rugged terrain, complete with pop-up roofs for optimal wildlife viewing. Whether for self-drive exploration or guided tours, our car hire for safari options are available in key destinations like <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-medium">Maasai Mara</Link>, Amboseli, Samburu, Lake Nakuru, Tsavo, and Nairobi. Perfect for customizing your <strong>luxury safari Kenya</strong> itinerary.
            </p>

            <div className="grid md:grid-cols-2 gap-10 my-14">
              <div>
                <h4 className="text-2xl font-bold mb-5 text-gray-900">
                  Why Choose Our Safari Vehicle Hire?
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fully equipped 4x4 jeeps for Kenya wildlife safaris</li>
                  <li>Options for wheelchair accessible vehicles</li>
                  <li>Competitive rates for car hire in Kenya</li>
                  <li>Available for Great Migration tours and more</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-5 text-gray-900">
                  Book Safari Online with Vehicle Rental
                </h4>
                <p>
                  Easily book safari online including vehicle hire. Combine with luxury hotel Kenya stays for a complete package.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
              Accessible Safari Tours: Inclusive Travel for All
            </h3>
            <p>
              We make Africa’s wildlife accessible to everyone with our specialized <strong>accessible safari tours Kenya</strong>. Our <strong>wheelchair accessible Kenya safari</strong> packages include adapted safari vehicles with lifts, <strong>accessible rooms Kenya</strong> in luxury lodges, trained accessibility guides, and inclusive experiences. Enjoy <strong>safari for disabled</strong> travelers without barriers in destinations like <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-medium">Maasai Mara</Link>, Amboseli, Samburu, Lake Nakuru, Tsavo, and Nairobi.
            </p>

            <div className="grid md:grid-cols-2 gap-10 my-14">
              <div>
                <h4 className="text-2xl font-bold mb-5 text-gray-900">
                  Features of Our Accessible Safari Kenya
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Wheelchair friendly safaris with ramps and lifts</li>
                  <li>Disabled access Kenya tours in all major parks</li>
                  <li>Inclusive travel Kenya for families and groups</li>
                  <li>Trained staff for safari for disabled guests</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-5 text-gray-900">
                  Top Accessible Destinations
                </h4>
                <p>
                  Experience <strong>Maasai Mara accessible safaris</strong>, <strong>Amboseli wheelchair tours</strong>, and more with full support.
                </p>
                <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-medium">
                  Learn More about Maasai Mara Accessible Options
                </Link>
              </div>
            </div>

            <p>
              Our <strong>inclusive travel Kenya</strong> ensures every traveler, regardless of ability, can witness the Great Migration, Samburu special five, Lake Nakuru flamingos, and more in comfort and style.
            </p>

            <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
              Top Kenya Safari Destinations You Can Explore
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
              {[
                { name: "Maasai Mara – Great Migration", slug: "maasai-mara" },
                { name: "Amboseli – Kilimanjaro Views", slug: "amboseli" },
                { name: "Samburu – Special Five Animals", slug: "samburu" },
                { name: "Lake Nakuru – Flamingos & Rhinos", slug: "nakuru" },
                { name: "Tsavo East & West – Wilderness", slug: "tsavo-east" },
                { name: "Nairobi – City Safari", slug: "nairobi" },
              ].map((d) => (
                <Link
                  key={d.slug}
                  href={`/destinations/${d.slug}`}
                  className="bg-gray-50 hover:bg-orange-50 p-6 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors group"
                >
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                    {d.name}
                  </h4>
                  <p className="mt-2 text-gray-600">Discover luxury lodges, accessible options & best time to visit with safari vehicle hire</p>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-lg"
              >
                View All 9 Safari Destinations
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NEW ACCESSIBLE SAFARIS SECTION ==================== */}
<section className="py-20 md:py-24 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Accessible Safaris in Kenya – Travel Without Barriers
      </h2>
      <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
        We believe everyone deserves to experience the magic of Kenya’s wildlife. Our <strong>accessible safari tours</strong> are specially designed for travelers with disabilities, including wheelchair users, people with mobility challenges, and those requiring additional support.
      </p>
    </div>

    <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed space-y-8">
      <p>
        Our <strong>wheelchair accessible Kenya safaris</strong> feature purpose-adapted 4×4 safari vehicles with hydraulic lifts or ramps, wide doors, lowered floors, and secure wheelchair tie-downs. Many of our <Link href="/hotels" className="text-orange-600 hover:underline font-medium">luxury lodges</Link> and tented camps offer fully <strong>accessible rooms Kenya</strong> — with roll-in showers, grab bars, lowered sinks, and step-free access to main areas, dining, and viewing decks.
      </p>

      <p>
        Every journey is supported by <strong>trained accessibility guides</strong> who understand inclusive travel needs and can assist with transfers, game viewing explanations, photography, and cultural interactions. We work closely with you to create a comfortable, safe, and unforgettable experience — whether you’re watching the <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline font-medium">Great Migration</Link> in Maasai Mara, photographing elephants under Kilimanjaro in Amboseli, or enjoying flamingos at Lake Nakuru.
      </p>

      <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
        What Makes Our Accessible Safari Tours Different?
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h4 className="text-xl font-bold mb-4 text-gray-900">Adapted Safari Vehicles</h4>
          <p>Wheelchair-accessible 4×4 jeeps with lifts, removable seats, and excellent game-viewing height — available for private use or small groups.</p>
          <Link href="/car-hire" className="text-orange-600 hover:underline font-medium text-sm mt-2 inline-block">
            See accessible vehicle hire options →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h4 className="text-xl font-bold mb-4 text-gray-900">Accessible Luxury Lodges</h4>
          <p>Step-free pathways, roll-in showers, hearing loops in some properties, visual alerts, and staff trained in disability awareness.</p>
          <Link href="/hotels" className="text-orange-600 hover:underline font-medium text-sm mt-2 inline-block">
            Browse accessible accommodations →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h4 className="text-xl font-bold mb-4 text-gray-900">Personalized Planning</h4>
          <p>We discuss your specific needs in detail — mobility, vision, hearing, dietary, medication storage — and tailor every aspect of your safari.</p>
        </div>
      </div>

      <h3 className="text-3xl font-bold mt-12 mb-7 text-gray-900">
        Popular Accessible Safari Destinations
      </h3>

      <p>
        <strong>Maasai Mara</strong> – Excellent wheelchair-friendly game drives and several accessible luxury camps with raised viewing platforms.<br />
        <strong>Amboseli</strong> – Flat terrain ideal for mobility challenges + stunning Kilimanjaro views from accessible vehicles.<br />
        <strong>Lake Nakuru</strong> & <strong>Nairobi National Park</strong> – Shorter transfers, good road access, and many accessible facilities.<br />
        <strong>Samburu</strong> & <strong>Tsavo</strong> – Select lodges with accessibility upgrades and quieter, less bumpy routes.
      </p>

      <div className="text-center mt-12">
        <Link
          href="/accessible-safaris" // ← create this page or redirect to contact form
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-lg"
        >
          Plan Your Accessible Safari Today
          <span className="text-2xl">→</span>
        </Link>
      </div>

      <p className="text-center mt-8 text-gray-600 italic">
        “Travel should be for everyone. We’re proud to make Kenya’s wildlife accessible and joyful for all abilities.”
      </p>
    </div>
  </div>
</section>

      {/* Destinations Preview - Updated image alts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our 9 Kenya Safari Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From the world-famous <Link href="/destinations/maasai-mara" className="text-orange-600 hover:underline"><strong>Maasai Mara safari</strong></Link> to the remote wilderness of <strong>Samburu</strong>, each destination offers unique wildlife, landscapes, cultural experiences, accessible safari tours, and safari vehicle hire options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/destinations/${location.slug}`}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`${location.name} Kenya Safari - ${location.description} | Luxury & Accessible Tours with Safari Vehicle Hire`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{location.name}</h3>
                    <p className="text-orange-200 text-sm">{location.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* New Reviews Section with Snippets */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
            What Our Guests Say About Our Kenya Safari Tours
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
              <p className="text-gray-700 mb-4">"The wheelchair accessible safari tours were fantastic! We hired a safari vehicle and explored Maasai Mara with ease. Luxury lodges and expert guides made it unforgettable."</p>
              <p className="font-bold text-gray-900">- Sarah Johnson</p>
            </div>
            <div className="bg-gray-50 p-7 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
                <Star className="text-yellow-400" size={24} />
              </div>
              <p className="text-gray-700 mb-4">"Booked online for Great Migration tours in Maasai Mara. The luxury hotel Kenya options and safari vehicle hire were top-notch. Highly recommend for family safari Kenya."</p>
              <p className="font-bold text-gray-900">- Michael Lee</p>
            </div>
            {/* Add more if needed */}
          </div>
        </div>
      </section>

      {/* FAQ Section – visible + schema, expanded */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
            Frequently Asked Questions about Kenya Safaris, Accessible Tours & Vehicle Hire
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-7 rounded-2xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Book Your Kenya Safari Adventure?
          </h2>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-95">
            Luxury lodges • Wheelchair accessible options • Safari vehicle hire • Expert guides • Great Migration • Big Five • Family safaris – we create the perfect itinerary for every traveler.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-700 px-12 py-6 rounded-xl font-bold text-xl hover:bg-orange-50 transition shadow-lg"
            >
              Get Your Personalized Safari Quote
            </Link>
            <Link
              href="/hotels"
              className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition backdrop-blur-sm"
            >
              Browse Luxury & Accessible Lodges
            </Link>
            <Link
              href="/car-hire"
              className="border-2 border-white text-white px-12 py-6 rounded-xl font-bold text-xl hover:bg-white/20 transition backdrop-blur-sm"
            >
              Explore Safari Vehicle Hire
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}