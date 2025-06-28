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
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veggie-rezepte.de'),
  title: {
    default: 'Veggie Rezepte - Entdecke köstliche vegetarische Gerichte',
    template: '%s | Veggie Rezepte'
  },
  description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche. Von einfachen Alltagsgerichten bis zu festlichen Menüs - alles vegetarisch, lecker und mit detaillierten Kochanleitungen.',
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
  },
  keywords: 'vegetarische rezepte, veggie rezepte, deutsche küche, kochen, vegetarisch, gesunde ernährung, vegetarische gerichte, rezepte ohne fleisch',
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
  },
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
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9378654958981077"
          crossOrigin="anonymous"
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Veggie Rezepte",
              "url": "https://veggie-rezepte.de",
              "description": "Entdecke köstliche vegetarische Rezepte für jeden Tag",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://veggie-rezepte.de/rezepte/alle?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Veggie Rezepte",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://veggie-rezepte.de/images/logo/logo.png"
                }
              }
            })
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-white font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
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