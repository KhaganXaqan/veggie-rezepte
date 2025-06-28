import './globals.css';
import './mobile-styles.css';
import type { Metadata } from 'next';
import { Inter as InterFont } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { siteConfig } from '@/lib/constants';
import Script from 'next/script';
import { cn } from '@/lib/utils';

const inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veggie-rezepte.de'),
  title: {
    default: 'Veggie Rezepte - Entdecke köstliche vegetarische Gerichte',
    template: '%s | Veggie Rezepte'
  },
  description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche. Von einfachen Alltagsgerichten bis zu festlichen Menüs - alles vegetarisch, lecker und mit detaillierten Kochanleitungen.',
  keywords: 'vegetarische rezepte, veggie rezepte, deutsche küche, kochen, vegetarisch, gesunde ernährung, vegetarische gerichte, rezepte ohne fleisch, vegane rezepte, schnelle rezepte',
  authors: [{ name: 'Veggie Rezepte Team' }],
  creator: 'Veggie Rezepte',
  publisher: 'Veggie Rezepte',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/logo/favicon.ico', sizes: 'any' },
      { url: '/images/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/images/logo/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo/safari-pinned-tab.svg',
        color: '#00884f',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://veggie-rezepte.de',
    siteName: 'Veggie Rezepte',
    title: 'Veggie Rezepte - Köstliche vegetarische Gerichte',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche. Von einfachen Alltagsgerichten bis zu festlichen Menüs - alles vegetarisch, lecker und mit detaillierten Kochanleitungen.',
    images: [{
      url: '/images/logo/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Veggie Rezepte Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veggie Rezepte',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche',
    images: ['/images/logo/og-image.jpg'],
    creator: '@veggierezepte',
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
  alternates: {
    canonical: 'https://veggie-rezepte.de',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#00884f" />
        <meta name="msapplication-TileColor" content="#00884f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Veggie Rezepte" />
        <meta name="application-name" content="Veggie Rezepte" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          crossOrigin="anonymous"
        />
        
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9378654958981077"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Structured Data for Website */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Veggie Rezepte",
              "alternateName": "Veggie-Rezepte.de",
              "url": "https://veggie-rezepte.de",
              "description": "Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche",
              "inLanguage": "de-DE",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://veggie-rezepte.de/rezepte/alle?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "@id": "https://veggie-rezepte.de/#organization"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://veggie-rezepte.de/#organization",
              "name": "Veggie Rezepte",
              "url": "https://veggie-rezepte.de",
              "logo": {
                "@type": "ImageObject",
                "url": "https://veggie-rezepte.de/images/logo/logo.png",
                "width": 512,
                "height": 512
              },
              "description": "Deutschlands führende Plattform für vegetarische Rezepte",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@veggie-rezepte.de"
              },
              "sameAs": [
                "https://www.facebook.com/veggierezepte",
                "https://www.instagram.com/veggierezepte",
                "https://www.pinterest.com/veggierezepte"
              ]
            })
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-white font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-white">
            {children}
          </div>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}