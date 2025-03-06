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
                <h2 className="font-serif text-3xl font-bold mb-2 text-[#0b3558]">Flammkuchen</h2>

                {/* Introduction Paragraph */}
                <div className="w-full max-w-[86.666%]">
                  <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-2">
                    <div className="font-sans text-gray-700 leading-relaxed">
                      Mein liebstes Rezept für einen knusprigen Flammkuchen! Während der traditionelle elsässische Flammkuchen oft mit Speck zubereitet wird, ist meine vegetarische Variante in nur 30 Minuten fertig und mindestens genauso lecker. Der hauchdünne Teig wird schön knusprig gebacken, und die Kombination aus cremiger Basis und würzigen Zwiebeln macht dieses Gericht zu einem echten Geschmackserlebnis. Perfekt für eine schnelle Mahlzeit oder als Party-Snack!
                    </div>
                  </div>
                </div>
                {/* Ingredients Section */}
                <div className="max-w-[86.666%] mb-2">
                  {/* Der Grundteig */}
                  <div className="bg-gray-50 rounded-xl shadow-sm mb-6 p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Der Grundteig</h3>
                    <p className="font-sans text-gray-700 mb-4">
                      Ein hauchdünner, knuspriger Teig ist das Fundament für einen perfekten Flammkuchen. Die Kombination aus Mehl, Wasser und einem Schuss Olivenöl macht den Teig geschmeidig und beim Backen wunderbar knusprig. Der Teig lässt sich einfach vorbereiten und kann auch im Voraus zubereitet werden.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="font-sans text-gray-700"><span className="font-semibold">62 g</span> Mehl</li>
                      <li className="font-sans text-gray-700"><span className="font-semibold">31 ml</span> Wasser</li>
                      <li className="font-sans text-gray-700"><span className="font-semibold">0.5 EL</span> Olivenöl</li>
                      <li className="font-sans text-gray-700"><span className="font-semibold">1 Prise</span> Salz</li>
                    </ul>
                  </div>

                  {/* Die cremige Basis */}
                  <div className="bg-gray-50 rounded-xl shadow-sm mb-6 p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Die cremige Basis</h3>
                    <p className="font-sans text-gray-700 mb-4">
                      Die Crème fraîche bildet die perfekte Grundlage für den Belag. Sie wird beim Backen leicht bräunlich und entwickelt einen herrlich würzigen Geschmack. Für eine leichtere Variante kannst du auch Sauerrahm oder Joghurt verwenden.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="font-sans text-gray-700"><span className="font-semibold">50 g</span> Crème fraîche</li>
                    </ul>
                  </div>

                  {/* Der würzige Belag */}
                  <div className="bg-gray-50 rounded-xl shadow-sm mb-6 p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Der würzige Belag</h3>
                    <p className="font-sans text-gray-700 mb-4">
                      Die Zwiebeln werden beim Backen leicht karamellisiert und entwickeln eine natürliche Süße. Der Gruyère oder Emmentaler sorgt für den perfekten würzigen Abschluss. Du kannst auch andere Käsesorten wie Gouda oder Mozzarella verwenden, je nach Geschmack.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="font-sans text-gray-700"><span className="font-semibold">0.5</span> Zwiebel (dünn geschnitten)</li>
                      <li className="font-sans text-gray-700"><span className="font-semibold">25 g</span> Gruyère oder Emmentaler (gerieben)</li>
                      <li className="font-sans text-gray-700">Salz (nach Geschmack)</li>
                      <li className="font-sans text-gray-700">Pfeffer (nach Geschmack)</li>
                    </ul>
                  </div>

                  {/* Tipps und Variationen */}
                  <div className="bg-gray-50 rounded-xl shadow-sm mb-6 p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Tipps und Variationen</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li className="font-sans text-gray-700">Für eine vegane Variante kannst du die Crème fraîche durch pflanzliche Sahne ersetzen und den Käse weglassen oder durch veganen Käse austauschen.</li>
                      <li className="font-sans text-gray-700">Füge Pilze, Spinat oder Paprika hinzu, um den Belag abwechslungsreicher zu gestalten.</li>
                      <li className="font-sans text-gray-700">Serviere den Flammkuchen mit einem frischen Salat oder einem Glas Weißwein für ein komplettes Mahlzeiterlebnis.</li>
                      <li className="font-sans text-gray-700">Der Teig lässt sich auch einfrieren – einfach zwischen Backpapier legen und in einem Gefrierbeutel aufbewahren.</li>
                    </ul>
                  </div>
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
                  <a href="/flammkuchen" className="block">
                    <div className="bg-gray-50 rounded-xl shadow-sm" style={{ width: '100%' }}>
                      <div className="p-6">
                        <h4 className="font-bold text-xl text-[#0b3558] mb-3">
                          <span className='hover:text-[#db747a] transition-colors"'>Elsässer Flammkuchen: Ein kulinarisches Meisterwerk</span>
                        </h4>
                        <div className="text-gray-600 text-sm mb-6">
                          <p className="font-bold mb-2">Schritt 1: Die Kunst des Teiges</p>
                          <p className="mb-4 italic">Der hauchdünne, knusprige Teig ist das Fundament eines authentischen Flammkuchens. Die perfekte Mischung aus Mehl, Wasser, Öl und einer Prise Salz ergibt einen Teig, der beim Backen wunderbar knusprig wird.</p>

                          <p className="font-bold mb-2">Schritt 2: Die Aromenbasis</p>
                          <p className="mb-4"><span className="font-semibold">Die Schmand-Crème-fraîche-Mischung</span> bildet die cremige Grundlage, die mit einer Prise Muskat und frisch gemahlenem Pfeffer verfeinert wird. Darauf werden hauchdünn geschnittene Zwiebeln verteilt, die beim Backen karamellisieren und ihr süßlich-würziges Aroma entfalten.</p>

                          <p className="font-bold mb-2">Schritt 3: Die Verfeinerung</p>
                          <p className="mb-4">Fein gewürfelter Speck verleiht dem Flammkuchen seine charakteristische, herzhafte Note. <span className="italic">Optional können auch Lauchzwiebeln oder frische Kräuter den Geschmack abrunden.</span></p>

                          <p className="font-bold mb-2">Schritt 4: Die Backtechnik</p>
                          <p className="mb-4">Der Schlüssel zum Erfolg liegt in der <span className="font-semibold">hohen Backtemperatur von 250°C</span>. In nur 12-15 Minuten verwandelt sich der Teig in eine knusprige Köstlichkeit mit perfekt gebräunten Rändern.</p>

                          <p className="font-bold mb-2">Serviervorschlag</p>
                          <p>Am besten schmeckt der Flammkuchen direkt aus dem Ofen, wenn der Teig noch knusprig und die Zwiebeln goldbraun sind. <span className="italic">Traditionell wird er mit einem Glas Weißwein oder Riesling serviert.</span></p>
                        </div>
                        <img
                          src="/images/MainCourses/flammkuchen3.jpeg"
                          alt="Flammkuchen Schritt für Schritt"
                          className="w-full h-auto rounded-lg mb-6"
                        />
                      </div>
                    </div>
                  </a>
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
                              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                <div className="w-full max-w-[86.666%] mx-auto mb-4">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                    <div className="flex items-start gap-8">
                      <div className="flex-grow">
                        <h2 className="font-sans text-2xl font-bold text-gray-800 mb-6 text-center">
                          Warum mein Flammkuchen ein echtes Lieblingsgericht ist
                        </h2>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <span className="text-[#0b3558] font-bold text-xl leading-none mt-1">•</span>
                            <div>
                              <span className="font-semibold text-gray-800">Knuspriger Teig und cremiger Belag</span>
                              <p className="text-gray-600 mt-1 leading-relaxed">Die perfekte Kombination aus hauchdünnem, knusprigem Teig und einer cremigen Basis.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#0b3558] font-bold text-xl leading-none mt-1">•</span>
                            <div>
                              <span className="font-semibold text-gray-800">Schnell und einfach zuzubereiten</span>
                              <p className="text-gray-600 mt-1 leading-relaxed">In nur 30 Minuten von der Zubereitung bis zum Servieren.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#0b3558] font-bold text-xl leading-none mt-1">•</span>
                            <div>
                              <span className="font-semibold text-gray-800">Perfekt für Partys oder als Hauptgericht</span>
                              <p className="text-gray-600 mt-1 leading-relaxed">Eignet sich hervorragend zum Teilen oder als vollwertige Mahlzeit.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#0b3558] font-bold text-xl leading-none mt-1">•</span>
                            <div>
                              <span className="font-semibold text-gray-800">Vegetarisch, aber auch mit Speck oder Schinken möglich</span>
                              <p className="text-gray-600 mt-1 leading-relaxed">Flexibel anpassbar an verschiedene Ernährungsweisen.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#0b3558] font-bold text-xl leading-none mt-1">•</span>
                            <div>
                              <span className="font-semibold text-gray-800">Kann mit verschiedenen Zutaten variiert werden</span>
                              <p className="text-gray-600 mt-1 leading-relaxed">Von klassischen Zwiebeln bis zu Pilzen oder Käse – der Kreativität sind keine Grenzen gesetzt.</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-[#0b3558] font-bold text-xl leading-none mt-1">•</span>
                            <div>
                              <span className="font-semibold text-gray-800">Ideal zum Vorbereiten – Meal Prep geeignet</span>
                              <p className="text-gray-600 mt-1 leading-relaxed">Der Teig kann vorgeknetet und eingefroren werden.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>                
              </div>


              {/* Handwritten-style message */}
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
                        <p className="text-xl mb-2">Und jetzt lass dir meinen Flammkuchen richtig gut schmecken!</p>
                        <p className="text-lg mt-3">Ich bin schon ganz gespannt auf dein Feedback!</p>

                        {/* Handwritten signature */}
                        <div className="mt-4 flex justify-end">
                          <div
                            className="font-['Segoe_Script','Brush_Script_MT',cursive] text-right text-[#db747a]"
                            style={{ transform: 'rotate(-3deg)' }}
                          >
                            <span className="text-lg">Dein Veggie-Rezepte Team</span>
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

              <div className="flex flex-col items-center gap-8 my-8">
                <div className="flex justify-center gap-4 w-full max-w-[86.666%] mb-8">
                  <img src="/images/MainCourses/flammkuchneIngredinet.jpeg" alt="Flammkuchen Ingredients" className="w-[49%] h-auto rounded-2xl" />
                  <img src="/images/MainCourses/flammkuchen2.jpeg" alt="Flammkuchen" className="w-[49%] h-auto rounded-2xl" />
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
