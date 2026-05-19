import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateOrganizationSchema } from "@/lib/schema"

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
  metadataBase: new URL("https://www.jaetravel.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.jaetravel.com",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = generateOrganizationSchema()
  const GTM_ID = "GTM-5MCS8TS6"
  const GA_ID = "G-Q6Y2Y3PSXH"

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U" />

        {/* Alternate language - hreflang for SEO */}
        <link rel="alternate" hrefLang="en" href="https://www.jaetravel.com" />
        <link rel="alternate" hrefLang="fr" href="https://www.jaetravel.com/fr" />
        <link rel="alternate" hrefLang="es" href="https://www.jaetravel.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.jaetravel.com" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://cdn.vercel-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <SchemaRenderer schema={organizationSchema} />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} async />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}', { page_path: window.location.pathname, transport_type: 'beacon', send_page_view: true });`,
          }}
        />
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="kwFIGPeAktZ683/wY5zKWA" async />
      </head>
      <body className={`${geist.className} antialiased bg-white text-gray-900 min-h-screen flex flex-col`} suppressHydrationWarning>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}