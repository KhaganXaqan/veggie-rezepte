import Image from "next/image"
import { Clock, Users, Star, Printer, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { RecipeComments } from "@/components/recipe-comments"
import { SiteHeader } from "@/components/site-header"
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

            {/* Comments */}
            <RecipeComments recipeId={params.slug} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Nährwerte pro Portion</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>Kalorien</dt>
                  <dd className="font-medium">{recipe.nutrition.calories} kcal</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Protein</dt>
                  <dd className="font-medium">{recipe.nutrition.protein}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Kohlenhydrate</dt>
                  <dd className="font-medium">{recipe.nutrition.carbs}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Fett</dt>
                  <dd className="font-medium">{recipe.nutrition.fat}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </article>
    </div>
  )
}