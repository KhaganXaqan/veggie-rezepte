import { SiteHeader } from "@/components/site-header"
import { recipes } from "@/lib/data"
import { categoryNames } from '@/lib/constants'
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({
    category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = categoryNames[params.category]
  
  // Filter recipes by category
  const categoryRecipes = recipes.filter(recipe => 
    recipe.category.toLowerCase() === categoryName?.toLowerCase()
  )

  if (!categoryName) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container py-8">
          <h1 className="text-4xl font-bold mb-8">Kategorie nicht gefunden</h1>
          <p className="text-muted-foreground">Diese Kategorie existiert leider nicht.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>
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
            <div className="text-center text-muted-foreground py-12">
              Keine Rezepte in dieser Kategorie gefunden.
            </div>
          </div>
        )}
      </main>
    </div>
  )
}