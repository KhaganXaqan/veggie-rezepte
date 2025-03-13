import { Metadata } from 'next'
import { generateSeoMetadata } from '@/lib/seo'
import { SiteHeader } from "@/components/site-header"
import { recipes } from "@/lib/data"
import Link from 'next/link'
import Image from 'next/image'
import type { Recipe } from "@/lib/data"

// Add this function to generate all possible category paths at build time
export function generateStaticParams() {
  // List all possible category slugs
  return [
    { category: 'hauptgerichte' },
    { category: 'auflaeufe' },
    { category: 'suppen' },
    { category: 'salate' },
    { category: 'fruehstueck' },
    { category: 'desserts' }
  ]
}

// Helper function to get proper display name for categories
function getCategoryDisplayName(slug: string): string {
  const categoryMap: Record<string, string> = {
    'hauptgerichte': 'Hauptgerichte',
    'auflaeufe': 'Aufläufe',
    'suppen': 'Suppen',
    'salate': 'Salate',
    'fruehstueck': 'Frühstück',
    'desserts': 'Desserts'
  };
  
  return categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = params;
  const categoryName = getCategoryDisplayName(category);
  
  return generateSeoMetadata({
    title: `${categoryName} Rezepte - Veggie-Rezepte`,
    description: `Entdecke unsere köstlichen ${categoryName} Rezepte. Vegetarisch, vegan und einfach zuzubereiten!`,
    path: `/kategorien/${category}`,
    type: 'website'
  });
}

// Add the actual page component
export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const categoryName = getCategoryDisplayName(category);
  
  // Filter recipes by category
  const categoryRecipes = recipes.filter(
    (recipe: Recipe) => recipe.category.toLowerCase() === category
  );
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-8 !text-black text-center">
              {categoryName} Rezepte
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categoryRecipes.map((recipe: Recipe) => (
                <div key={recipe.slug} className="flex flex-col">
                  <Link 
                    href={`/${recipe.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium text-center px-4">
                          Zum Rezept
                        </span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h2 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#f9d24f] transition-colors">
                        {recipe.title}
                      </h2>
                      <p className="text-sm text-black/80 font-['Montserrat']">
                        {recipe.description || recipe.description || ""}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            {categoryRecipes.length === 0 && (
              <div className="text-center text-black/70 py-12">
                Keine Rezepte in dieser Kategorie gefunden.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 