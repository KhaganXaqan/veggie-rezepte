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
  {/* Title */}
  <h2 className="font-serif text-3xl font-bold mb-6 text-[#3A7D54]">Flammkuchen</h2>

  {/* Introduction Paragraph */}
  <div className="font-sans text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
    Mein liebstes Rezept für einen knusprigen Flammkuchen! Während der traditionelle elsässische Flammkuchen oft mit Speck zubereitet wird, ist meine vegetarische Variante in nur 30 Minuten fertig und mindestens genauso lecker. Der hauchdünne Teig wird schön knusprig gebacken, und die Kombination aus cremiger Basis und würzigen Zwiebeln macht dieses Gericht zu einem echten Geschmackserlebnis. Perfekt für eine schnelle Mahlzeit oder als Party-Snack!
  </div>

  {/* Ingredients Section */}
  <div className="space-y-6">
    {/* Der Grundteig */}
    <div>
      <h3 className="font-serif text-xl font-semibold text-[#3A7D54] mb-2">Der Grundteig</h3>
      <p className="font-sans text-gray-700">
        Ein hauchdünner, knuspriger Teig ist das Fundament für einen perfekten Flammkuchen. Die Kombination aus Mehl, Wasser und einem Schuss Olivenöl macht den Teig geschmeidig und beim Backen wunderbar knusprig. Der Teig lässt sich einfach vorbereiten und kann auch im Voraus zubereitet werden.
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li className="font-sans text-gray-700"><span className="font-semibold">62 g</span> Mehl</li>
        <li className="font-sans text-gray-700"><span className="font-semibold">31 ml</span> Wasser</li>
        <li className="font-sans text-gray-700"><span className="font-semibold">0.5 EL</span> Olivenöl</li>
        <li className="font-sans text-gray-700"><span className="font-semibold">1 Prise</span> Salz</li>
      </ul>
    </div>

    {/* Die cremige Basis */}
    <div>
      <h3 className="font-serif text-xl font-semibold text-[#3A7D54] mb-2">Die cremige Basis</h3>
      <p className="font-sans text-gray-700">
        Die Crème fraîche bildet die perfekte Grundlage für den Belag. Sie wird beim Backen leicht bräunlich und entwickelt einen herrlich würzigen Geschmack. Für eine leichtere Variante kannst du auch Sauerrahm oder Joghurt verwenden.
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li className="font-sans text-gray-700"><span className="font-semibold">50 g</span> Crème fraîche</li>
      </ul>
    </div>

    {/* Der würzige Belag */}
    <div>
      <h3 className="font-serif text-xl font-semibold text-[#3A7D54] mb-2">Der würzige Belag</h3>
      <p className="font-sans text-gray-700">
        Die Zwiebeln werden beim Backen leicht karamellisiert und entwickeln eine natürliche Süße. Der Gruyère oder Emmentaler sorgt für den perfekten würzigen Abschluss. Du kannst auch andere Käsesorten wie Gouda oder Mozzarella verwenden, je nach Geschmack.
      </p>
      <ul className="list-disc pl-6 mt-4">
        <li className="font-sans text-gray-700"><span className="font-semibold">0.5</span> Zwiebel (dünn geschnitten)</li>
        <li className="font-sans text-gray-700"><span className="font-semibold">25 g</span> Gruyère oder Emmentaler (gerieben)</li>
        <li className="font-sans text-gray-700">Salz (nach Geschmack)</li>
        <li className="font-sans text-gray-700">Pfeffer (nach Geschmack)</li>
      </ul>
    </div>

    {/* Tipps und Variationen */}
    <div>
      <h3 className="font-serif text-xl font-semibold text-[#3A7D54] mb-2">Tipps und Variationen</h3>
      <p className="font-sans text-gray-700">
        - Für eine vegane Variante kannst du die Crème fraîche durch pflanzliche Sahne ersetzen und den Käse weglassen oder durch veganen Käse austauschen.<br />
        - Füge Pilze, Spinat oder Paprika hinzu, um den Belag abwechslungsreicher zu gestalten.<br />
        - Serviere den Flammkuchen mit einem frischen Salat oder einem Glas Weißwein für ein komplettes Mahlzeiterlebnis.<br />
        - Der Teig lässt sich auch einfrieren – einfach zwischen Backpapier legen und in einem Gefrierbeutel aufbewahren.
      </p>
    </div>

    {/* Zubereitung */}
    <div>
      <h3 className="font-serif text-xl font-semibold text-[#3A7D54] mb-2">Zubereitung</h3>
      <p className="font-sans text-gray-700">
        1. Heize den Backofen auf 220°C vor.<br />
        2. Vermische Mehl, Wasser, Olivenöl und Salz in einer Schüssel zu einem glatten Teig. Rolle den Teig auf einem bemehlten Brett hauchdünn aus.<br />
        3. Bestreiche den Teig gleichmäßig mit der Crème fraîche.<br />
        4. Verteile die dünn geschnittenen Zwiebeln und den geriebenen Käse auf dem Teig.<br />
        5. Würze mit Salz und Pfeffer nach Geschmack.<br />
        6. Backe den Flammkuchen für 10–12 Minuten im vorgeheizten Ofen, bis der Teig knusprig und der Käse goldbraun ist.<br />
        7. Serviere warm und genieße!
      </p>
    </div>
  </div>
</section>

              <Separator className="my-8" />

              {/* Images before Similar Recipes */}
              <div className="flex flex-col items-center gap-8 my-8">
                <div className="flex justify-center gap-4 w-full max-w-[66.666%] mb-8">
                  <img src="/images/MainCourses/flammkuchneIngredinet.jpeg" alt="Flammkuchen Ingredients" className="w-[49%] h-auto rounded-2xl" />
                  <img src="/images/MainCourses/flammkuchen2.jpeg" alt="Flammkuchen" className="w-[49%] h-auto rounded-2xl" />
                </div>


                {/* Empfohlener Beitrag */}
                <div className="w-full max-w-[66.666%] mx-auto mb-8">
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
                <div className="w-full max-w-[66.666%] mx-auto mb-16">
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
