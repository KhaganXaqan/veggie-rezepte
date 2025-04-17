import './globals.css';
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
  metadataBase: new URL('https://www.veggie-rezepte.de'),
  title: {
    default: 'Veggie Rezepte - Entdecke köstliche vegetarische Gerichte',
    template: '%s | Veggie Rezepte'
  },
  description: 'Deine Plattform für vegetarische Rezepte, Kochanleitungen und eine gesunde Ernährung.',
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
    url: 'https://www.veggie-rezepte.de',
    siteName: 'Veggie Rezepte',
    title: 'Veggie Rezepte - Köstliche vegetarische Gerichte',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche.',
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
    description: 'Entdecke köstliche vegetarische Gerichte',
    images: ['/images/logo/og-image.jpg'],
  },
  keywords: 'vegetarische rezepte, veggie rezepte, deutsche küche, kochen, vegetarisch',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
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