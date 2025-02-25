import Image from "next/image"
import { Clock, Users, Star, Printer, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { RecipeComments } from "@/components/recipe-comments"
import { SiteHeader } from "@/components/site-header"
import { RecipeIngredients } from "@/components/recipe-ingredients"
import { RecipeInstructions } from "@/components/recipe-instructions"
import { RecipeNutrition } from '@/components/recipe-nutrition'
import { recipes } from '@/lib/data'

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}

const getRecipeBySlug = (slug: string) => {
  return recipes.find((recipe) => recipe.slug === slug)
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug)
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container py-8">
          <h1 className="text-4xl font-bold">Rezept nicht gefunden</h1>
          <p className="text-muted-foreground">Dieses Rezept existiert leider nicht.</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <article className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {recipe.prepTime}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {recipe.servings} Portionen
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {recipe.rating}
              </span>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-lg mb-8">{recipe.description}</p>

            <div className="flex gap-2 mb-8">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="lg">
                <Printer className="mr-2 h-4 w-4" />
                Drucken
              </Button>
              <Button variant="outline" size="lg">
                <BookmarkPlus className="mr-2 h-4 w-4" />
                Speichern
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Ingredients */}
            <section className="mb-8">
              <RecipeIngredients 
                initialServings={recipe.servings}
                ingredients={recipe.ingredients}
              />
            </section>

            <Separator className="my-8" />

            {/* Instructions */}
            <section className="mb-8">
              <RecipeInstructions 
                instructions={recipe.instructions}
              />
            </section>

            <Separator className="my-8" />

            {/* Nutrition */}
            <section className="mb-8">
              <RecipeNutrition 
                servings={recipe.servings}
                nutrition={recipe.nutrition}
              />
            </section>

            <Separator className="my-8" />

            {/* Comments */}
            <RecipeComments recipeId={params.slug} />
          </div>
        </div>
      </article>
    </div>
  )
}