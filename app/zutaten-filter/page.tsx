import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { IngredientFilter } from "@/components/ingredient-filter"
import { ChefHat, Utensils } from "lucide-react"
import Script from 'next/script'

export async function generateMetadata(): Promise<Metadata> {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';
  
  const canonicalUrl = `${baseUrl}/zutaten-filter`;
  
  return {
    title: "Zutaten-Filter | Finde Rezepte mit deinen Zutaten | Veggie Rezepte",
    description: "Gib deine verfügbaren Zutaten ein und finde passende vegetarische Rezepte. Unser intelligenter Filter zeigt dir, was du kochen kannst und welche Zutaten noch fehlen.",
    keywords: [
      'zutaten filter',
      'rezepte finden',
      'was kann ich kochen',
      'vegetarische rezepte',
      'zutaten eingeben',
      'rezept suche',
      'kochen mit vorhandenen zutaten',
      'meal planning',
      'kühlschrank rezepte'
    ],
    openGraph: {
      title: "Zutaten-Filter | Finde Rezepte mit deinen Zutaten | Veggie Rezepte",
      description: "Gib deine verfügbaren Zutaten ein und finde passende vegetarische Rezepte. Unser intelligenter Filter zeigt dir, was du kochen kannst und welche Zutaten noch fehlen.",
      url: canonicalUrl,
      siteName: "Veggie Rezepte",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zutaten-Filter | Finde Rezepte mit deinen Zutaten | Veggie Rezepte",
      description: "Gib deine verfügbaren Zutaten ein und finde passende vegetarische Rezepte. Unser intelligenter Filter zeigt dir, was du kochen kannst und welche Zutaten noch fehlen.",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Generate structured data for the ingredient filter page
export async function generateStructuredData() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Zutaten-Filter für vegetarische Rezepte',
    description: 'Intelligenter Filter um vegetarische Rezepte basierend auf verfügbaren Zutaten zu finden',
    url: `${baseUrl}/zutaten-filter`,
    mainEntity: {
      '@type': 'WebApplication',
      name: 'Veggie Rezepte Zutaten-Filter',
      description: 'Finde vegetarische Rezepte basierend auf deinen verfügbaren Zutaten',
      applicationCategory: 'Food & Cooking',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Zutaten-Filter',
          item: `${baseUrl}/zutaten-filter`
        }
      ]
    }
  };
}

export default async function ZutatenFilterPage() {
  const structuredData = await generateStructuredData();
  
  return (
    <>
      {/* Add structured data script */}
      {structuredData && (
        <Script
          id="ingredient-filter-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 bg-white">
          <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-[#0b3558]">Home</a></li>
                  <li><span className="mx-2">›</span></li>
                  <li className="text-[#0b3558] font-medium">Zutaten-Filter</li>
                </ol>
              </nav>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#f9d24f] rounded-full flex items-center justify-center">
                  <ChefHat className="h-8 w-8 text-[#0b3558]" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#0b3558]">
                  Zutaten-Filter
                </h1>
                <div className="w-16 h-16 bg-[#f9d24f] rounded-full flex items-center justify-center">
                  <Utensils className="h-8 w-8 text-[#0b3558]" />
                </div>
              </div>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Gib deine verfügbaren Zutaten ein und entdecke, welche leckeren vegetarischen Rezepte du damit zubereiten kannst. 
                Unser intelligenter Filter zeigt dir perfekte Treffer und hilfreiche Vorschläge.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-[#0b3558] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-semibold text-[#0b3558] mb-2">Zutaten eingeben</h3>
                  <p className="text-gray-600 text-sm">
                    Tippe deine verfügbaren Zutaten ein oder wähle aus beliebten Optionen
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-[#0b3558] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-semibold text-[#0b3558] mb-2">Rezepte entdecken</h3>
                  <p className="text-gray-600 text-sm">
                    Sieh perfekte Treffer und Vorschläge mit fehlenden Zutaten
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="w-12 h-12 bg-[#0b3558] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-semibold text-[#0b3558] mb-2">Lecker kochen</h3>
                  <p className="text-gray-600 text-sm">
                    Wähle ein Rezept und koche etwas Fantastisches!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Filter Component */}
            <IngredientFilter />
            
            {/* Additional Info */}
            <div className="mt-16 bg-gradient-to-r from-[#0b3558] to-[#f9d24f] rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Nie wieder "Was soll ich kochen?"
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">
                Mit unserem Zutaten-Filter findest du immer das perfekte Rezept für deine verfügbaren Zutaten. 
                Reduziere Lebensmittelverschwendung und entdecke neue Lieblingsgerichte!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-white/80 text-sm">Vegetarische Rezepte</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-white/80 text-sm">Verschiedene Zutaten</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/80 text-sm">Vegetarisch</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">0€</div>
                  <div className="text-white/80 text-sm">Kostenlos nutzen</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}