import type { Metadata } from "next";
import Script from "next/script";
import AnimatedHome from "@/components/animated-home";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Jaetravel Expeditions | #1 Kenya Safari Hotel Booking Platform 2025",
  description: "Book the best Kenya safari hotels & lodges online. Best price guarantee, instant confirmation, 24/7 support. Maasai Mara, Amboseli & more.",
  keywords: "kenya safari hotels, book safari lodges online, maasai mara accommodation, amboseli hotels with kilimanjaro view, tsavo lodges, samburu safari camps, lake nakuru flamingo hotels, nairobi airport hotels, best kenya luxury lodges, wheelchair accessible safari accommodation, family safari hotels kenya, great migration accommodation, budget safari camps kenya",
  authors: [{ name: "Jaetravel Expeditions", url: "https://www.jaetravel.com" }],
  creator: "Jaetravel Expeditions",
  publisher: "Jaetravel Expeditions",
  metadataBase: new URL('https://www.jaetravel.com'),
  alternates: {
    canonical: "https://www.jaetravel.com",
    languages: {
      "en": "https://www.jaetravel.com",
      "x-default": "https://www.jaetravel.com",
    },
  },
  openGraph: {
    title: "Jaetravel Expeditions | Kenya's #1 Safari Hotel Booking Platform",
    description: "Book the best safari accommodations in Kenya. 200+ lodges and camps. Best rates, instant confirmation, 24/7 support.",
    url: "https://www.jaetravel.com",
    siteName: "Jaetravel Expeditions",
    images: [{
      url: "https://www.jaetravel.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Jaetravel - Kenya Safari Hotel Booking Platform - Elephants in Amboseli with Kilimanjaro",
      type: "image/jpeg",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaetravel Expeditions | Kenya Safari Hotel Booking",
    description: "Book safari hotels & lodges in Kenya. Best rates, instant confirmation.",
    images: ["https://www.jaetravel.com/images/twitter-card.jpg"],
    site: "@jaetravel",
    creator: "@jaetravel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U",
  },
};

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.jaetravel.com/#organization",
        name: "Jaetravel Expeditions",
        url: "https://www.jaetravel.com",
        description: "Kenya's premier safari hotel booking platform.",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.jaetravel.com/#website",
        url: "https://www.jaetravel.com",
        name: "Jaetravel Expeditions - Kenya Safari Hotel Booking",
      },
      {
        "@type": "Product",
        "@id": "https://www.jaetravel.com/#product",
        name: "Kenya Safari Hotel Booking Platform",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "1247",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Header />
      <AnimatedHome />
      <Footer />
    </>
  );
}