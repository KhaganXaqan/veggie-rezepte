import { SiteHeader } from "@/components/site-header"
import { RecipeCard } from "@/components/recipe-card"
import { recipes } from "@/lib/data"

// Create a mapping of category slugs to display names
const categoryNames: { [key: string]: string } = {
  "hauptgerichte": "Hauptgerichte",
  "suppen": "Suppen",
  "salate": "Salate",
  "auflaeufe": "Aufläufe",
  "desserts": "Desserts",
  "fruehstueck": "Frühstück"
}

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({
    category: category,
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
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} {...recipe} />
          ))}
        </div>

        {categoryRecipes.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            Keine Rezepte in dieser Kategorie gefunden.
          </div>
        )}
      </main>
    </div>
  )
}