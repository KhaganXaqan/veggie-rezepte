import "../src/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Veggie-Rezepte - Köstliche vegetarische Rezepte",
  description: "Entdecke eine Vielfalt an vegetarischen Rezepten für jeden Geschmack. Von traditionellen deutschen Gerichten bis zu internationalen Spezialitäten.",
  keywords: "vegetarische rezepte, veggie, kochen, deutsche küche, gesund kochen",
  openGraph: {
    title: 'Veggie-Rezepte.de - Köstliche vegetarische Gerichte',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://veggie-rezepte.de',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">
              {children}
            </div>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  )
}