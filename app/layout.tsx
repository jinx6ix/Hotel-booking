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
  
  // GTM and GA IDs
  const GTM_ID = "GTM-5MCS8TS6"
  const GA_ID = "G-Q6Y2Y3PSXH"

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U" />
        
        {/* Alternate language */}
        <link rel="alternate" hrefLang="en" href="https://www.jaetravel.com" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        
        {/* Mobile web app */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://cdn.vercel-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Schema Organization */}
        <SchemaRenderer schema={organizationSchema} />
        
        {/* ============================================ */}
        {/* GOOGLE TAG MANAGER - GTM-5MCS8TS6 */}
        {/* ============================================ */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        
        {/* ============================================ */}
        {/* GOOGLE ANALYTICS 4 - G-Q6Y2Y3PSXH */}
        {/* ============================================ */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { 
              page_path: window.location.pathname,
              transport_type: 'beacon',
              send_page_view: true
            });
          `}
        </Script>
        
        {/* ============================================ */}
        {/* AHREFS ANALYTICS */}
        {/* ============================================ */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="kwFIGPeAktZ683/wY5zKWA"
          strategy="afterInteractive"
          async
        />
      </head>
      <body className={`${geist.className} antialiased bg-white text-gray-900`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) - Required fallback for users without JavaScript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}