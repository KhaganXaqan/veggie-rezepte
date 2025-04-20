import React from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Metadata } from "next"
import Script from 'next/script'

export async function generateMetadata(): Promise<Metadata> {
  // Determine if we're in development or production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Set the base URL based on environment
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://www.veggie-rezepte.de';
  
  // Ensure canonical URL is properly set
  const canonicalUrl = `${baseUrl}/kategorien`;

  return {
    title: "Rezept Kategorien | Vegetarische & Vegane Gerichte",
    description: "Entdecke vegetarische Rezeptkategorien - von Hauptgerichten über Salate bis zu Desserts. Einfach zuzubereiten und garantiert lecker!",
    openGraph: {
      title: "Rezept Kategorien | Vegetarische & Vegane Gerichte",
      description: "Entdecke vegetarische Rezeptkategorien - von Hauptgerichten über Salate bis zu Desserts. Einfach zuzubereiten und garantiert lecker!",
      url: canonicalUrl,
      siteName: "Veggie Rezepte",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Rezept Kategorien | Vegetarische & Vegane Gerichte",
      description: "Entdecke vegetarische Rezeptkategorien - von Hauptgerichten über Salate bis zu Desserts. Einfach zuzubereiten und garantiert lecker!",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Generate structured data for categories page
export async function generateStructuredData() {
  // Determine if we're in development or production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Set the base URL based on environment
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Rezept Kategorien',
    description: 'Entdecke unsere vielfältigen Rezeptkategorien - von herzhaften Hauptgerichten über leichte Salate bis zu süßen Desserts.',
    url: `${baseUrl}/kategorien`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: `${baseUrl}/kategorien/hauptgerichte`,
          name: 'Hauptgerichte'
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: `${baseUrl}/kategorien/auflaeufe`,
          name: 'Aufläufe'
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: `${baseUrl}/kategorien/suppen`,
          name: 'Suppen'
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: `${baseUrl}/kategorien/salate`,
          name: 'Salate'
        },
        {
          '@type': 'ListItem',
          position: 5,
          url: `${baseUrl}/kategorien/fruehstueck`,
          name: 'Frühstück'
        },
        {
          '@type': 'ListItem',
          position: 6,
          url: `${baseUrl}/kategorien/desserts`,
          name: 'Desserts'
        }
      ]
    }
  };
}

export default async function Categories() {
  const categories = [
    {
      name: "Hauptgerichte",
      slug: "hauptgerichte",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Entdecke köstliche vegetarische Hauptgerichte für jeden Tag - von herzhaften Pasta-Gerichten bis zu raffinierten Gemüse-Kreationen."
    },
    {
      name: "Aufläufe",
      slug: "auflaeufe",
      image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Vegetarische Aufläufe sind perfekt zum Vorbereiten und bieten wunderbare Aromen-Kombinationen für die ganze Familie."
    },
    {
      name: "Suppen",
      slug: "suppen",
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Von cremigen Gemüsesuppen bis zu klaren Brühen - unsere vegetarischen Suppenrezepte wärmen Körper und Seele."
    },
    {
      name: "Salate",
      slug: "salate",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Frische, knackige Salate mit saisonalen Zutaten - die perfekte leichte Mahlzeit oder Beilage zu deinem Hauptgericht."
    },
    {
      name: "Frühstück",
      slug: "fruehstueck",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Starte deinen Tag mit einem energiereichen vegetarischen Frühstück - von süßen Optionen bis zu herzhaften Alternativen."
    },
    {
      name: "Desserts",
      slug: "desserts",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Kröne deine Mahlzeit mit einem verführerischen vegetarischen Dessert - von fruchtig-frisch bis schokoladig-süß."
    }
  ]
  
  // Generate structured data for this page
  const structuredData = await generateStructuredData();
  
  return (
    <>
      {/* Add structured data script */}
      {structuredData && (
        <Script
          id="categories-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 bg-white">
          <div className="container py-8">
            <div className="max-w-4xl mx-auto mb-8">
              <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-8 !text-black text-center">Kategorien</h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map(category => (
                  <div key={category.slug} className="flex flex-col">
                    <Link 
                      href={`/kategorien/${category.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                          src={category.image}
                          alt={`${category.name} Rezepte`}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <h2 className="text-2xl font-['Montserrat'] font-bold uppercase text-white">
                            {category.name}
                          </h2>
                        </div>
                      </div>
                    </Link>
                    <p className="mt-3 text-sm text-black/80 font-['Montserrat']">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
