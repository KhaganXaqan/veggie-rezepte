import { getAllRecipes, getRecipeBySlug, getCategoryById } from "@/lib/recipes"
import { notFound } from "next/navigation"
import { RecipeDetail } from "@/components/recipe-detail"

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return getAllRecipes().map((recipe) => ({
    slug: recipe.slug,
  }))
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug)
  
  if (!recipe) {
    return notFound()
  }

  const category = getCategoryById(recipe.categoryId)

  if (!category) {
    return notFound()
  }

  return <RecipeDetail recipe={recipe} categoryName={category.name} />
}