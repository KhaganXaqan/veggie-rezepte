import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"
import { recipes } from "@/lib/data"
import type { Recipe } from "@/lib/data"
import Script from 'next/script'

const categoryName = "Salate"
const categorySlug = "salate"

export async function generateMetadata(): Promise<Metadata> {
  const categoryRecipes = recipes.filter((recipe: Recipe) => recipe.category === categoryName)
  const recipeCount = categoryRecipes.length
  
  // Base URL for canonical links
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';

  const canonicalUrl = `${baseUrl}/kategorien/${categorySlug}`;
  
  const pageTitle = `${categoryName} Rezepte | Frische vegetarische Salate | Veggie Rezepte`;
  const pageDescription = `Entdecke ${recipeCount} frische vegetarische ${categoryName} Rezepte. Von knackigen Blattsalaten bis zu herzhaften Nudelsalaten - leichte Genüsse voller Vitamine.`;
  
  return {
    title: pageTitle,
    description: pageDescription,
    keywords: `${categoryName}, vegetarische salate, frische salate, blattsalate, nudelsalate, gesunde salate, leichte gerichte, vitaminreich, saisonale salate`,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'website',
      url: canonicalUrl,
      images: categoryRecipes.slice(0, 4).map(recipe => ({
        url: recipe.image,
        width: 1200,
        height: 630,
        alt: recipe.title
      }))
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [categoryRecipes[0]?.image || '/images/logo/og-image.jpg'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Generate structured data for category page
export async function generateStructuredData() {
  const categoryRecipes = recipes.filter((recipe: Recipe) => recipe.category === categoryName)
  
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} Rezepte`,
    description: `Vegetarische ${categoryName} Rezepte - frische und gesunde Gerichte`,
    url: `${baseUrl}/kategorien/${categorySlug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryRecipes.length,
      itemListElement: categoryRecipes.slice(0, 10).map((recipe, index) => ({
        '@type': 'Recipe',
        position: index + 1,
        name: recipe.title,
        url: `${baseUrl}/${recipe.slug}`,
        image: recipe.image,
        description: recipe.description,
        author: {
          '@type': 'Organization',
          name: 'Veggie Rezepte'
        },
        recipeCategory: recipe.category,
        recipeCuisine: 'Vegetarisch',
        prepTime: `PT${recipe.prepTime || 15}M`,
        recipeYield: `${recipe.servings || 4} Portionen`
      }))
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
          name: 'Kategorien',
          item: `${baseUrl}/kategorien`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: categoryName,
          item: `${baseUrl}/kategorien/${categorySlug}`
        }
      ]
    }
  };
}

export default async function SalateRecipes() {
  const categoryRecipes = recipes.filter((recipe: Recipe) => recipe.category === categoryName)
  
  // Generate structured data for this page
  const structuredData = await generateStructuredData();
  
  return (
    <>
      {/* Add structured data script */}
      {structuredData && (
        <Script
          id="salate-category-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 bg-white">
          <div className="container py-8">
            <div className="max-w-2xl mx-auto mb-8">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-[#0b3558]">Home</a></li>
                  <li><span className="mx-2">›</span></li>
                  <li><a href="/kategorien" className="hover:text-[#0b3558]">Kategorien</a></li>
                  <li><span className="mx-2">›</span></li>
                  <li className="text-[#0b3558] font-medium">{categoryName}</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-4 !text-black">{categoryName} Rezepte</h1>
              <p className="text-lg text-gray-600 mb-6">
                Entdecke {categoryRecipes.length} frische vegetarische {categoryName} Rezepte. 
                Von knackigen Blattsalaten bis zu herzhaften Nudelsalaten – hier findest du leichte Genüsse voller Vitamine und Geschmack.
              </p>
            </div>
          </div>

          <div className="category-recipes">
            {categoryRecipes.map((recipe, index) => (
              <RecipeCardMasonry 
                key={recipe.slug} 
                recipe={recipe}
                index={index}
              />
            ))}
          </div>

          {categoryRecipes.length === 0 && (
            <div className="container">
              <div className="text-center text-black/70 py-12 font-['Montserrat']">
                Keine Rezepte in dieser Kategorie gefunden.
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}