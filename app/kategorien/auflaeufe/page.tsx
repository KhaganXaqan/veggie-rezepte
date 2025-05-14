import { Metadata } from 'next'
import { SiteHeader } from "@/components/site-header"
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"
import { recipes } from "@/lib/data"
import type { Recipe } from "@/lib/data"

const categoryName = "Aufläufe"
const categorySlug = "auflaeufe"

export const metadata: Metadata = {
  title: `${categoryName} Rezepte | Vegetarische Gerichte | Veggie Rezepte`,
  description: `Vegetarische ${categoryName} sind perfekt zum Vorbereiten und bieten wunderbare Aromen-Kombinationen für die ganze Familie.`,
  keywords: `${categoryName}, vegetarisch, rezepte, veggie rezepte, kochen, gesund, einfach`,
  openGraph: {
    title: `${categoryName} Rezepte | Vegetarische Gerichte | Veggie Rezepte`,
    description: `Vegetarische ${categoryName} sind perfekt zum Vorbereiten und bieten wunderbare Aromen-Kombinationen für die ganze Familie.`,
    type: 'website',
    url: `https://veggie-rezepte.de/kategorien/${categorySlug}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${categoryName} Rezepte | Vegetarische Gerichte | Veggie Rezepte`,
    description: `Vegetarische ${categoryName} sind perfekt zum Vorbereiten und bieten wunderbare Aromen-Kombinationen für die ganze Familie.`,
  },
  alternates: {
    canonical: `https://veggie-rezepte.de/kategorien/${categorySlug}`,
  },
}

export default function AuflaeufeRecipes() {
  const categoryRecipes = recipes.filter((recipe: Recipe) => recipe.category === categoryName)
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="container py-8">
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-8 !text-black">{categoryName} Rezepte</h1>
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
  )
} 