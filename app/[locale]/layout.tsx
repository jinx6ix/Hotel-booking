import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "../globals.css"
import { SchemaRenderer } from "@/components/schema-renderer"
import { generateOrganizationSchema } from "@/lib/schema"
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ff8c00",
  colorScheme: "light",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = `https://www.jaetravel.com/${locale}`

  const titles: Record<string, Record<string, string>> = {
    fr: {
      home: "Jaetravel Expeditions - Safaris au Kenya & Réservation d'Hôtels",
      hotels: "Hébergements au Kenya - Lodges de Safari & Hôtels de Luxe",
      destinations: "Destinations Safari au Kenya - Maasai Mara, Amboseli",
      carHire: "Location de Voiture Safari au Kenya - Landcruiser 4x4",
      contact: "Contactez Jaetravel - Réservation de Safari au Kenya",
      about: "À Propos de Jaetravel Expeditions - Experts Safari Kenya",
      faq: "FAQ Safaris Kenya - Questions Fréquemment Posées",
      blog: "Blog Safari Kenya - Conseils & Actualités Voyage",
    },
    es: {
      home: "Jaetravel Expeditions - Safaris en Kenia & Reserva de Hoteles",
      hotels: "Hoteles en Kenia - Lodge de Safari & Hoteles de Lujo",
      destinations: "Destinos Safari en Kenia - Maasai Mara, Amboseli",
      carHire: "Alquiler de Coches Safari en Kenia - Landcruiser 4x4",
      contact: "Contáctenos - Reserva tu Safari en Kenia",
      about: "Sobre Jaetravel Expeditions - Expertos Safari Kenia",
      faq: "Preguntas Frecuentes Safaris Kenia",
      blog: "Blog Safari Kenia - Consejos & Noticias de Viaje",
    }
  }

  const descriptions: Record<string, Record<string, string>> = {
    fr: {
      home: "Vivez des safaris authentiques au Kenya dans 9 destinations. Explorez Maasai Mara, Amboseli, Nairobi avec des hébergements de luxe.",
      hotels: "Réservez votre hébergement safari au Kenya. Lodges de luxe, camps de tentes, hôtels 5 étoiles dans toutes les destinations.",
      destinations: "Découvrez les meilleures destinations safari du Kenya: Maasai Mara, Amboseli, Tsavo, Samburu et plus encore.",
      carHire: "Louez un véhicule 4x4 pour votre safari au Kenya. Landcruiser avec chauffeur, transfert aéroport, accès universel.",
      contact: "Contactez nos experts safari pour votre voyage au Kenya. Devis gratuit, conseil personnalisé, réservation rapide.",
      about: "Jaetravel Expeditions, operador de safaris líder en Kenia desde 2012. Más de 10.000 viajeros satisfechos.",
      faq: "Réponses aux questions fréquentes sur les safaris au Kenya: meilleure saison, migration, visas, hébergements, budget.",
      blog: "Conseils de voyage, histoires safari, guides de destinations et actualité du voyage au Kenya.",
    },
    es: {
      home: "Vive safaris auténticos en Kenia en 9 destinos. Explora Maasai Mara, Amboseli, Nairobi con alojamiento de lujo.",
      hotels: "Reserva tu alojamiento safari en Kenia. Lodges de lujo, campos de tiendas, hoteles 5 estrellas en todos los destinos.",
      destinations: "Descubre los mejores destinos safari de Kenia: Maasai Mara, Amboseli, Tsavo, Samburu y más.",
      carHire: "Alquila un vehículo 4x4 para tu safari en Kenia. Landcruiser con conductor, transferencia al aeropuerto.",
      contact: "Contacta nuestros expertos safari para tu viaje a Kenia. Cotización gratuita, asesoramiento personalizado.",
      about: "Jaetravel Expeditions, operador safari líder en Kenia desde 2012. Más de 10.000 viajeros satisfechos.",
      faq: "Respuestas a preguntas frecuentes sobre safaris en Kenia: mejor temporada, migración, visas, alojamientos, presupuesto.",
      blog: "Consejos de viaje, historias safari, guías de destinos y noticias de viaje en Kenia.",
    }
  }

  return {
    title: titles[locale]?.home || titles.fr.home,
    description: descriptions[locale]?.home || descriptions.fr.home,
    metadataBase: new URL("https://www.jaetravel.com"),
    alternates: {
      languages: {
        'en': 'https://www.jaetravel.com',
        'fr': 'https://www.jaetravel.com/fr',
        'es': 'https://www.jaetravel.com/es',
      },
      canonical: baseUrl,
    },
    openGraph: {
      type: "website",
      locale: locale === 'fr' ? 'fr_FR' : 'es_ES',
      url: baseUrl,
      siteName: "Jaetravel Expeditions",
      title: titles[locale]?.home || titles.fr.home,
      description: descriptions[locale]?.home || descriptions.fr.home,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Jaetravel Expeditions" }],
    },
    twitter: { card: "summary_large_image" },
    verification: { google: "IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U" },
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()
  const organizationSchema = generateOrganizationSchema()
  const GTM_ID = "GTM-5MCS8TS6"
  const GA_ID = "G-Q6Y2Y3PSXH"

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="IGxEnPG73ZqCfKPuOdpjfM_HNDfuM03gWG9AUYOu74U" />
        <link rel="alternate" hrefLang="en" href="https://www.jaetravel.com" />
        <link rel="alternate" hrefLang="fr" href="https://www.jaetravel.com/fr" />
        <link rel="alternate" hrefLang="es" href="https://www.jaetravel.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://www.jaetravel.com" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <SchemaRenderer schema={organizationSchema} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }} />
        <script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} async />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});` }} />
      </head>
      <body className={`${geist.className} antialiased bg-white text-gray-900`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}} /></noscript>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}