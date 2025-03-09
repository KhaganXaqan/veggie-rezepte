import { notFound } from 'next/navigation'
import { getRecipeBySlug, recipes } from '@/lib/data1'
import { RecipeHeader } from '@/components/recipe-header'
import { RecipeIngredients } from '@/components/recipe-ingredients'
import { RecipeInstructions } from '@/components/recipe-instructions'
import { RecipeNutrition } from '@/components/recipe-nutrition'
import { RecipeSimilar } from '@/components/recipe-similar'
import { RecipeComments } from '@/components/recipe-comments'
import { Separator } from '@/components/ui/separator'
import { SiteHeader } from "@/components/site-header"
import OtherRecipePage from './page-other'

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
  // Check if we should use the current page or redirect to page-other.tsx
  if (params.slug !== 'flammkuchen') {
    // For any recipe other than flammkuchen, use page-other.tsx
    return <OtherRecipePage slug={params.slug} />;
  }

  // Continue with the flammkuchen-specific page using data.ts
  const recipe = getRecipeBySlug(params.slug)

  if (!recipe) {
    notFound()
  }

  // Get a random recipe for Empfohlener Beitrag
  const otherRecipes = recipes.filter(r => r.slug !== params.slug)
  const randomRecipe = otherRecipes[Math.floor(Math.random() * otherRecipes.length)]

  // Get random recipes from the same category for Empfohlene Beiträge
  const recipesFromSameCategory = recipes.filter(r =>
    r.slug !== params.slug &&
    r.category === recipe.category
  )

  // Get 3 random recipes from the filtered list
  const getRandomRecipes = (arr: typeof recipes, count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const recommendedRecipes = getRandomRecipes(recipesFromSameCategory, 3)
  const recommendedRecipes2 = getRandomRecipes(recipesFromSameCategory, 9)

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

              {/* Images before Similar Recipes */}
              <div className="flex flex-col items-center gap-8 my-8">
                {/* Title */}
                <h2 className="font-serif text-3xl font-bold mb-2 text-[#0b3558]">{recipe.title}</h2>

                {/* Introduction Paragraph */}
                <div className="w-full max-w-[86.666%]">
                  <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-2">
                    <div className="font-sans text-gray-700 leading-relaxed">
                      {recipe.introductionParagraph}
                    </div>
                  </div>
                </div>
                {/* Ingredients Section */}
                <div className="max-w-[86.666%] mb-2">
                  {recipe.ingredientGroups?.map((group, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl shadow-sm mb-6 p-6">
                      <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">{group.title}</h3>
                      <p className="font-sans text-gray-700 mb-4">
                        {group.description}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        {group.ingredients.map((ingredient, i) => (
                          <li key={i} className="font-sans text-gray-700">
                            {ingredient.amount && <span className="font-semibold">{ingredient.amount} {ingredient.unit}</span>} {ingredient.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Tipps und Variationen */}
                  {recipe.tips && (
                    <div className="bg-gray-50 rounded-xl shadow-sm mb-6 p-6">
                      <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Tipps und Variationen</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {recipe.tips.map((tip, index) => (
                          <li key={index} className="font-sans text-gray-700">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex justify-center gap-4 w-full max-w-[86.666%] mb-8">
                  <img src="/images/MainCourses/flammkuchneIngredinet.jpeg" alt="Flammkuchen Ingredients" className="w-[49%] h-auto rounded-2xl" />
                  <img src="/images/MainCourses/flammkuchen2.jpeg" alt="Flammkuchen" className="w-[49%] h-auto rounded-2xl" />
                </div>


                {/* Empfohlener Beitrag */}
                <div className="w-full max-w-[86.666%] mx-auto mb-4">
                  <a href={`/${randomRecipe.slug}`} className="block">
                    <div className="bg-gray-50 rounded-xl shadow-sm" style={{ width: '100%' }}>
                      <div className="flex items-start gap-6 p-6">
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
                            <span className='hover:text-[#db747a] transition-colors"'>{randomRecipe.title}</span>
                          </h4>
                          <p className="text-gray-600 text-sm mb-10 line-clamp-2">
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

                {/* Schritt für Schritt - Flammkuchen */}

                <div className="w-full max-w-[86.666%] mx-auto mb-4">
                  <div className="bg-gray-50 rounded-xl shadow-sm" style={{ width: '100%' }}>
                    <div className="p-6">
                      <h4 className="font-bold text-xl text-[#0b3558] mb-3">
                        <span className='hover:text-[#db747a] transition-colors'>{recipe.title}: Ein kulinarisches Meisterwerk</span>
                      </h4>
                      <div className="text-gray-600 text-sm mb-6">
                        {recipe.steps.map((step, index) => (
                          <div key={index}>
                            <p className="font-bold mb-2">Schritt {index + 1}: {step.title}</p>
                            <p className={`mb-4 ${index === 1 ? 'italic' : ''}`}>{step.description}</p>
                          </div>
                        ))}
                      </div>
                      <img
                        src="/images/MainCourses/flammkuchen3.jpeg"
                        alt="Flammkuchen Schritt für Schritt"
                        className="w-full h-auto rounded-lg mb-6"
                      />
                    </div>
                  </div>
                </div>

                {/* Empfohlene Beiträge */}
                <div className="w-full max-w-[86.666%] mx-auto mb-4">
                  <div className="bg-gray-50 rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="font-serif font-bold text-sm font-lg text-gray-500 tracking-wider">
                        Empfohlene {recipe.category}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {recommendedRecipes.map((recommendedRecipe, index) => (
                        <a href={`/${recommendedRecipe.slug}`} className="block" key={index}>
                          <div className="relative group">
                            <div className="w-full aspect-square rounded-lg overflow-hidden">
                              <img
                                src={recommendedRecipe.image}
                                alt={recommendedRecipe.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300">
                                <span className="text-white text-sm font-medium text-center px-4">
                                  Empfohlene Hauptgerichte
                                </span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#db747a] transition-colors">
                                {recommendedRecipe.title}
                              </h4>
                              <p className="text-gray-600 text-sm line-clamp-2">
                                {recommendedRecipe.descriptionOnImage}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Why Flammkuchen is a Favorite */}
                {recipe.whyFavorite && (
                  <div className="w-full max-w-[86.666%] mx-auto mb-4">
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                      <div className="flex items-start gap-8">
                        <div className="flex-grow">
                          <h2 className="font-sans text-2xl font-bold text-gray-800 mb-6 text-center">
                            {recipe.whyFavorite.title}
                          </h2>
                          <ul className="space-y-4">
                            {recipe.whyFavorite.reasons.map((reason, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-[#0b3558] font-bold text-xl leading-none mt-1">•</span>
                                <div>
                                  <span className="font-semibold text-gray-800">{reason.title}</span>
                                  <p className="text-gray-600 mt-1 leading-relaxed">{reason.description}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Handwritten-style message */}
                {recipe.handwrittenMessage && (
                  <div className="mb-4">
                    <div className="flex justify-center">
                      <div className="relative max-w-md transform rotate-[-1deg]">
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                          <div
                            className="relative z-10 font-['Segoe_Script','Brush_Script_MT',cursive] text-center"
                            style={{
                              textShadow: '0px 0px 1px rgba(0,0,0,0.1)',
                              color: '#0b3558',
                              lineHeight: '1.5'
                            }}
                          >
                            <p className="text-xl mb-2">{recipe.handwrittenMessage.mainText}</p>
                            <p className="text-lg mt-3">{recipe.handwrittenMessage.subText}</p>

                            {/* Handwritten signature */}
                            <div className="mt-4 flex justify-end">
                              <div
                                className="font-['Segoe_Script','Brush_Script_MT',cursive] text-right text-[#db747a]"
                                style={{ transform: 'rotate(-3deg)' }}
                              >
                                <span className="text-lg">{recipe.handwrittenMessage.signature}</span>
                              </div>
                            </div>
                          </div>

                          {/* Decorative elements */}
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#db747a]/10 rounded-full"></div>
                          <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#0b3558]/5 rounded-full"></div>
                        </div>

                        {/* Paper tape effect */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#db747a]/20 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex flex-col items-center gap-8 my-8">
                  <div className="flex justify-center gap-4 w-full max-w-[86.666%] mb-8">
                    <img src="/images/MainCourses/flammkuchneIngredinet.jpeg" alt="Flammkuchen Ingredients" className="w-[49%] h-auto rounded-2xl" />
                    <img src="/images/MainCourses/flammkuchen2.jpeg" alt="Flammkuchen" className="w-[49%] h-auto rounded-2xl" />
                  </div>
                </div>


                {/* Similar Recipes
              <section className="mb-8">
                  <RecipeSimilar
                    recipes={recipes}
                    currentRecipe={recipe}
                  />
                </section> TODO check why style hier ist bad */}

                {/* Ingredients */}
                <section className="mb-8">
                  <RecipeIngredients
                    initialServings={recipe.servings}
                    ingredients={recipe.ingredients}
                  />
                </section>

                {/* Instructions */}
                <section className="mb-8">
                  <RecipeInstructions
                    instructions={recipe.instructions}
                  />
                </section>

                {/* Nutrition */}
                <section className="mb-8">
                  <RecipeNutrition
                    servings={recipe.servings}
                    nutrition={{
                      calories: recipe.nutrition.calories,
                      protein: recipe.nutrition.protein,
                      carbs: recipe.nutrition.carbs,
                      fat: recipe.nutrition.fat
                    }}
                  />
                </section>

                <div className="flex flex-col items-center gap-8 my-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-serif font-bold text-sm font-lg text-gray-500 tracking-wider">
                      Empfohlene Beiträge
                    </span>
                  </div>


                  <div className="w-full max-w-[86.666%] mx-auto mb-4">
                    <div className="bg-gray-50 rounded-xl shadow-sm p-6">

                      <div className="grid grid-cols-3 gap-4">
                        {recommendedRecipes2.map((recommendedRecipe, index) => (
                          <a href={`/${recommendedRecipe.slug}`} className="block" key={index}>
                            <div className="relative group">
                              <div className="w-full aspect-square rounded-lg overflow-hidden">
                                <img
                                  src={recommendedRecipe.image}
                                  alt={recommendedRecipe.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300">
                                  <span className="text-white text-sm font-medium text-center px-4">
                                    Empfohlene Hauptgerichte
                                  </span>
                                </div>
                              </div>
                              <div className="mt-4">
                                <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#db747a] transition-colors">
                                  {recommendedRecipe.title}
                                </h4>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                  {recommendedRecipe.descriptionOnImage}
                                </p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}