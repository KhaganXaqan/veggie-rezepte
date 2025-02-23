import './globals.css';
import type { Metadata } from 'next';
import { Inter as InterFont } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';

const inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Veggie-Rezepte.de - Entdecke köstliche vegetarische Gerichte',
  description: 'Deine Plattform für vegetarische Rezepte, Kochanleitungen und eine gesunde Ernährung. Finde über 1000 getestete vegetarische Rezepte.',
  keywords: 'vegetarische rezepte, veggie rezepte, deutsche küche, kochen, vegetarisch',
  openGraph: {
    title: 'Veggie-Rezepte.de - Köstliche vegetarische Gerichte',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Veggie-Rezepte.de',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veggie-Rezepte.de - Köstliche vegetarische Gerichte',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://veggie-rezepte.de',
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}