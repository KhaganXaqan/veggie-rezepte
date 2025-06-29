import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { IngredientFilter } from "@/components/ingredient-filter"
import { ChefHat, Utensils, Sparkles, Target, Clock, Heart } from "lucide-react"
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
      
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <SiteHeader />
        <main className="flex-1">
          <div className="container max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12">
            {/* Enhanced Header Section */}
            <div className="text-center mb-12">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-[#0b3558] transition-colors">Home</a></li>
                  <li><span className="mx-2">›</span></li>
                  <li className="text-[#0b3558] font-medium">Zutaten-Filter</li>
                </ol>
              </nav>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#f9d24f] to-[#f0c840] rounded-2xl flex items-center justify-center shadow-lg">
                  <ChefHat className="h-8 w-8 text-[#0b3558]" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0b3558] to-[#f9d24f] bg-clip-text text-transparent">
                  Zutaten-Filter
                </h1>
                <div className="w-16 h-16 bg-gradient-to-br from-[#0b3558] to-[#2563eb] rounded-2xl flex items-center justify-center shadow-lg">
                  <Utensils className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Gib deine verfügbaren Zutaten ein und entdecke, welche leckeren vegetarischen Rezepte du damit zubereiten kannst. 
                Unser intelligenter Filter zeigt dir perfekte Treffer und hilfreiche Vorschläge.
              </p>
              
              {/* Enhanced Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f9d24f]/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0b3558] to-[#2563eb] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="text-white font-bold text-lg h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-[#0b3558] mb-3 text-lg">Intelligente Erkennung</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Gib Zutaten in beliebiger Form ein - "große rote Zwiebel" oder "Cherrytomaten". 
                    Unser System erkennt automatisch die Grundzutaten.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f9d24f]/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#f9d24f] to-[#f0c840] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-[#0b3558] font-bold text-lg h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-[#0b3558] mb-3 text-lg">Perfekte Treffer</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sieh sofort, welche Rezepte du mit deinen Zutaten komplett zubereiten kannst, 
                    plus hilfreiche Vorschläge mit fehlenden Zutaten.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f9d24f]/30">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-white font-bold text-lg h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-[#0b3558] mb-3 text-lg">Sofort loslegen</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wähle ein Rezept und koche sofort los! Alle Rezepte enthalten detaillierte 
                    Anleitungen und Nährwertangaben.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Filter Component */}
            <IngredientFilter />
            
            {/* Enhanced Bottom CTA */}
            <div className="mt-20 bg-gradient-to-r from-[#0b3558] via-[#2563eb] to-[#f9d24f] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Heart className="h-8 w-8 text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Nie wieder "Was soll ich kochen?"
                  </h2>
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                  Mit unserem Zutaten-Filter findest du immer das perfekte Rezept für deine verfügbaren Zutaten. 
                  Reduziere Lebensmittelverschwendung und entdecke neue Lieblingsgerichte!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                    <div className="text-white/80 text-sm md:text-base">Vegetarische Rezepte</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
                    <div className="text-white/80 text-sm md:text-base">Verschiedene Zutaten</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-white/80 text-sm md:text-base">Vegetarisch</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">0€</div>
                    <div className="text-white/80 text-sm md:text-base">Kostenlos nutzen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}