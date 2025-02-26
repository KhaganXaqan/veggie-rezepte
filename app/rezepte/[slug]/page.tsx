import Image from "next/image"
import { Clock, Users, Star, Printer, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { notFound } from 'next/navigation'
import { getRecipeBySlug, recipes } from '@/lib/data'
import { RecipeHeader } from '@/components/recipe-header'
import { RecipeIngredients } from '@/components/recipe-ingredients'
import { RecipeInstructions } from '@/components/recipe-instructions'
import { RecipeNutrition } from '@/components/recipe-nutrition'
import { RecipeSimilar } from '@/components/recipe-similar'
import { RecipeComments } from '@/components/recipe-comments'
import { Separator } from '@/components/ui/separator'
import { SiteHeader } from "@/components/site-header"

type RecipePageProps = {
  params: {
    slug: string
  }
}

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

      <div className="container py-8">
        <article>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Recipe Header */}
              <RecipeHeader 
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                category={recipe.category}
                tags={recipe.tags}
                prepTime={recipe.prepTime}
                servings={recipe.servings}
                rating={recipe.rating}
              />
              <p className="text-lg mb-8">{recipe.description}</p>
              <Separator className="my-8" />

              <div className="flex gap-2 mb-8">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>


              {/* Similar Recipes */}
              <section className="mb-8">
                <RecipeSimilar 
                  recipes={recipes}
                  currentRecipe={recipe}
                />
              </section>

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

            {/* Ingredients */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Zutaten</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

              <Separator className="my-8" />

              {/* Instructions */}
              <section className="mb-8">
                <RecipeInstructions 
                  instructions={recipe.instructions}
                />
              </section>

                          {/* Instructions */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Zubereitung</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-none w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>

              <Separator className="my-8" />

              {/* Nutrition */}
              <section className="mb-8">
                <RecipeNutrition 
                  servings={recipe.servings}
                  nutrition={recipe.nutrition}
                />
              </section>

                {/* Comments */}
            <RecipeComments recipeId={params.slug} />
          

              <Separator className="my-8" />

              {/* Comments */}
              <RecipeComments recipeId={params.slug} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}