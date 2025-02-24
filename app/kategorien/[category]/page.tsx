import { RecipeCard } from "@/components/recipe-card"
import { getAllRecipes, getAllCategories } from "@/lib/recipes"
import { notFound } from "next/navigation"
import Image from "next/image"

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categories = getAllCategories()
  const category = categories.find(c => c.slug === params.category)
  
  if (!category) {
    notFound()
  }

  const recipes = getAllRecipes()
  const categoryRecipes = recipes.filter(recipe => recipe.categoryId === category.id)

  return (
    <main className="container py-6 md:py-12">
      <div className="relative aspect-[5/2] overflow-hidden rounded-lg mb-8">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src={category.imagePath}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg md:text-xl max-w-2xl">{category.description}</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryRecipes.map((recipe) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe}
            categoryName={category.name}
          />
        ))}
      </div>

      {categoryRecipes.length === 0 && (
        <div className="text-center text-muted-foreground py-12">
          Keine Rezepte in dieser Kategorie gefunden.
        </div>
      )}
    </main>
  )
}