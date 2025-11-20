import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateOrganizationSchema } from "@/lib/schema"
import Script from "next/script"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ff8c00",
  colorScheme: "light",
}

export const metadata: Metadata = {
  title: "Jaetravel Expeditions - Kenya Hotel Safaris & Tours | Book Your Adventure",
  description:
    "Experience authentic Kenya hotel-based tours across 9 incredible destinations. Explore Maasai Mara, Amboseli, Nairobi & more with luxury accommodations. Book now!",
  keywords: "Kenya safari tours, hotel bookings, Maasai Mara, Nairobi hotels, safari accommodation, Kenya travel",
  metadataBase: new URL("https://jaetravel.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jaetravel.com",
    siteName: "Jaetravel Expeditions",
    title: "Kenya Safari Tours & Hotel Bookings | Jaetravel Expeditions",
    description:
      "Book hotel-based safari tours across Kenya. Explore Maasai Mara, Amboseli, Nairobi & 6 more amazing destinations with luxury accommodations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jaetravel Expeditions - Kenya Safari Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaetravel Expeditions - Kenya Safari Tours",
    description: "Book hotel-based tours across Kenya with luxury accommodations",
  },
  verification: {
    google: "IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U",
    yandex: "b585127e41b6a92f",
    yahoo: "750BAD767F0FB4E4100952EBD7883CEE",
    // bing removed — not supported in Next.js Metadata
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jaetravel.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://jaetravel.com" />
        <meta name="google-site-verification" content="IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U" />
        <link rel="alternate" hrefLang="en" href="https://jaetravel.com" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://cdn.vercel-analytics.com" />
        <SchemaRenderer schema={organizationSchema} />
        {/* Google Analytics - Fixed with next/script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q6Y2Y3PSXH"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q6Y2Y3PSXH', { 
              page_path: window.location.pathname,
              transport_type: 'beacon'
            });
          `}
        </Script>
      </head>
      <body className={`${geist.className} antialiased bg-white text-gray-900`} suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
