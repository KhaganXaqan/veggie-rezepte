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

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipeBySlug(params.slug)

  if (!recipe) {
    notFound()
  }

  // Get a random recipe for Empfohlener Beitrag
  const otherRecipes = recipes.filter(r => r.slug !== params.slug)
  const randomRecipe = otherRecipes[Math.floor(Math.random() * otherRecipes.length)]

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container py-8">
        <article>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Recipe Header */}
              <RecipeHeader 
                title={recipe.title}
                description={recipe.descriptionOnImage}
                image={recipe.image}
                category={recipe.category}
                tags={recipe.tags}
                prepTime={recipe.prepTime}
                servings={recipe.servings}
                rating={recipe.rating}
              />

              <Separator className="my-8" />

              {/* Recipe Description */}
              <section className="mb-8 prose prose-lg max-w-none">
                <h2 className="font-serif text-3xl font-bold mb-6 text-[#3A7D54]">{recipe.title}</h2>
                <div className="font-sans text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
                  {recipe.description}
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4 text-[#3A7D54]">Das kommt rein:</h3>
                {recipe.ingredientGroups ? (
                  <div className="space-y-8">
                    {recipe.ingredientGroups.map((group, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="font-serif text-xl font-semibold text-[#3A7D54] mb-4">{group.title}</h4>
                        <p className="font-sans text-gray-700 mb-4">{group.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {group.ingredients.map((ingredient, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="h-3 w-3 bg-[#3A7D54] rounded-full mr-4 flex-shrink-0" />
                              <p className="font-sans text-gray-700">
                                {ingredient.amount && `${ingredient.amount}${ingredient.unit ? ` ${ingredient.unit}` : ''} `}
                                {ingredient.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {recipe.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-3 w-3 bg-[#3A7D54] rounded-full mr-4 flex-shrink-0" />
                        <p className="font-sans text-gray-700">
                          {ingredient.amount && `${ingredient.amount}${ingredient.unit ? ` ${ingredient.unit}` : ''} `}
                          {ingredient.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <Separator className="my-8" />

              {/* Images before Similar Recipes */}
              <div className="flex flex-col items-center gap-8 my-8">
                <div className="flex justify-center gap-4">
                  <img src="/images/MainCourses/flammkuchneIngredinet.jpeg" alt="Flammkuchen Ingredients" className="w-1/3 h-auto rounded-2xl" />
                  <img src="/images/MainCourses/flammkuchen2.jpeg" alt="Flammkuchen" className="w-1/3 h-auto rounded-2xl" />
                </div>
                
                {/* Empfohlener Beitrag */}
                <div className="w-full max-w-2xl mx-auto">
                  <a href={`/${randomRecipe.slug}`} className="block">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <div className="flex items-start gap-6">
                        <div className="w-1/3 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={randomRecipe.image} 
                            alt={randomRecipe.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                            Empfohlener Beitrag
                          </span>
                          <h4 className="font-bold text-xl text-[#0b3558] mb-3">
                            {randomRecipe.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {randomRecipe.descriptionOnImage}
                          </p>
                          <button className="bg-[#0b3558] text-white px-6 py-2 rounded-full font-medium hover:bg-[#db747a] transition-colors">
                            Zum Beitrag
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Similar Recipes */}
              <section className="mb-8">
                <RecipeSimilar 
                  recipes={recipes}
                  currentRecipe={recipe}
                />
              </section>

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
    </div>
  )
}
