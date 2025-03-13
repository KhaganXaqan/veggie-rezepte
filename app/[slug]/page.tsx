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
import { brandColors } from "@/lib/theme"
import OtherRecipePage from './page-other'
import Image from 'next/image'

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

export default async function RecipePage({ params }: RecipePageProps) {
  const slug =  params?.slug;  // Access slug after ensuring it's available

  // Check if we should use the current page or redirect to page-other.tsx
  if (slug !== 'kartoffelpuffer') {
    // For any recipe other than flammkuchen, use page-other.tsx
    return <OtherRecipePage slug={slug} />;
  }

  const recipe = await getRecipeBySlug(slug);  // This is synchronous, ensure async if needed.
  if (!recipe) {
    notFound()
  }

  // Get a random recipe for Empfohlener Beitrag
  const otherRecipes = recipes.filter(r => r.slug !== slug)
  const randomRecipe = otherRecipes[Math.floor(Math.random() * otherRecipes.length)]

  // Get random recipes from the same category for Empfohlene Beiträge
  const recipesFromSameCategory = recipes.filter(r =>
    r.slug !== slug &&
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
      <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8">
        <article>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content - Left Column (8/12) */}
            <div className="lg:col-span-8  border-r border-black lg:pr-10">

              {/* Images before Similar Recipes */}
              <div className="flex flex-col items-center gap-8 my-8">
                {/* Breadcrumb Navigation */}
                <div className="w-full text-gray-500 text-lg mb-2">
                  <div className="flex items-center gap-2">
                    <span>Rezepte</span>
                    <span className="text-sm">»</span>
                    <span>{recipe.category} Rezepte</span>
                  </div>
                </div>
                
                {/* Title - Large and Bold */}
                <h1 className="font-black text-5xl uppercase text-black w-full tracking-tight leading-tight mb-2">
                  {recipe.title}
                </h1>
                
                
                {/* Author Information */}
                <div className="w-full flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src="/images/author.jpg" 
                      alt="Autor" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-700">Von</span>
                      <span className="font-bold text-gray-900">Veggie Rezepte</span>
                    </div>
                    <div className="text-gray-500 text-xs">
                      <span>Veröffentlicht am {new Date().toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="text-gray-500 text-xs">
                      <span>Aktualisiert am {new Date().toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="ml-auto flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={i < Math.floor(recipe.rating || 0) ? "currentColor" : "rgba(209, 213, 219, 0.5)"}>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-normal text-black">{recipe.rating || 0}</span>
                      <span className="ml-1 text-gray-500 text-xs">aus 93 Bewertungen</span>
                    </div>
                    
                    {/* Recipe Metadata */}
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] uppercase tracking-wide">Zubereitung</span>
                        <span className="text-xs">{recipe.prepTime} </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] uppercase tracking-wide">Kochen</span>
                        <span className="text-xs">30 Min</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-gray-500 text-[10px] uppercase tracking-wide">Portionen</span>
                        <span className="text-xs">{recipe.servings}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Introduction Paragraph */}
                <div className="w-full ">
                  <div className="text-lg text-black leading-relaxed font-normal">
                    {recipe.introductionParagraph}
                  </div>
                </div>

                {/* Recipe Header Image */}
                <div className="w-full mb-8">
                  <div className="w-full h-[960px] rounded-2xl overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Ingredients Section */}
                <div className="w-full mb-8">
                  {recipe.ingredientGroups?.map((group, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">{group.title}</h3>
                      <p className="text-lg text-black leading-relaxed font-normal mb-4">
                        {group.description}
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        {group.ingredients.map((ingredient, i) => (
                          <li key={i} className="text-lg text-black leading-relaxed font-normal">
                            {ingredient.amount && <span className="font-medium">{ingredient.amount} {ingredient.unit}</span>} {ingredient.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Tipps und Variationen */}
                  {recipe.tips && (
                    <div className="mt-8">
                      <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Tipps und Variationen</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {recipe.tips.map((tip, index) => (
                          <li key={index} className="text-lg text-black leading-relaxed font-normal">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Recipe Images */}
                <div className="flex justify-center gap-4 w-full mb-8">
                  <img src={recipe.images.imageIngredient} alt={recipe.title} className="w-[49%] h-auto rounded-2xl" />
                  <img src={recipe.images.image1} alt={recipe.title} className="w-[49%] h-auto rounded-2xl" />
                </div>

                {/* Empfohlener Beitrag */}
                <div className="w-full mx-auto mb-8">
                  <a href={`/${randomRecipe.slug}`} className="block">
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
                          <span className='hover:text-[#db747a] transition-colors"'>{randomRecipe.title}</span>
                        </h4>
                        <p className="text-lg text-black leading-relaxed font-normal mb-10 line-clamp-2">
                          {randomRecipe.descriptionOnImage}
                        </p>
                        <button className="bg-[#0b3558] text-white px-6 py-2 rounded-full font-medium hover:bg-[#f9d24f] hover:text-black transition-colors">
                          Zum Beitrag
                        </button>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Schritt für Schritt - Recipe */}
                <div className="w-full mx-auto mb-8">
                  <h4 className="font-bold text-xl text-[#0b3558] mb-3">
                    <span className='hover:text-[#db747a] transition-colors'>{recipe.title}: Ein kulinarisches Meisterwerk</span>
                  </h4>
                  <div className="text-lg text-black leading-relaxed font-normal mb-6">
                    {recipe.steps.map((step, index) => (
                      <div key={index}>
                        <p className="font-bold mb-2">Schritt {index + 1}: {step.title}</p>
                        <p className={`text-lg text-black leading-relaxed font-normal mb-4 ${index === 1 ? 'italic' : ''}`}>{step.description}</p>
                      </div>
                    ))}
                  </div>
                  <img
                    src={recipe.images.image2}
                    alt={recipe.title}
                    className="w-full h-auto rounded-lg mb-6"
                  />
                </div>
                  {/* Empfohlene Beiträge - Grid with 3 images */}
                  <div className="w-full mx-auto mb-8">
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
                                Empfohlene {recipe.category}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#db747a] transition-colors">
                              {recommendedRecipe.title}
                            </h4>
                            <p className="text-lg text-black leading-relaxed font-normal line-clamp-2">
                              {recommendedRecipe.descriptionOnImage}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Why Recipe is a Favorite */}
                {recipe.whyFavorite && (
                  <div className="w-full mx-auto mb-4">
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
                                  <p className="text-lg text-black leading-relaxed font-normal mt-1">{reason.description}</p>
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
                  <div className="mb-8 w-full">
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

                {/* Recipe Images */}
                <div className="flex justify-center gap-4 w-full mb-8">
                  <img src={recipe.images.image4} alt="Kartoffelpuffer" className="w-[49%] h-auto rounded-2xl" />
                  <img src={recipe.images.image5} alt="Kartoffelpuffer" className="w-[49%] h-auto rounded-2xl" />
                </div>

                {/* Recipes details card*/}
                <section className="mb-8 w-full">
                  <div className="bg-white border-2 border-gray-800 rounded-lg overflow-visible relative" style={{ boxShadow: `5px 5px 0 ${brandColors.primary.yellowRGBA}` }}>
                    {/* Image positioned to extend outside the box */}
                    <div className="absolute -top-5 right-6 z-0">
                      <div style={{ width: '268px', height: '268px', minWidth: '268px', minHeight: '268px' }} className="rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0 shadow-md">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Recipe Card Header with Image */}
                    <div className="flex flex-col md:flex-row border-b border-gray-200 relative">
                      {/* Content with title on top */}
                      <div className="w-full md:w-2/3 z-10">
                        {/* Full-width yellow title banner with border */}
                        <div className="w-full mt-4 pt-4 pb-4 px-5 mb-4 -ml-5 rounded-lg" style={{ backgroundColor: brandColors.primary.yellow }}>
                          <h2 className="text-3xl md:text-4xl font-black uppercase text-white" 
                              style={{
                                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -3px 3px 0 #000, 2px 2px 0 #000',
                                fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                                lineHeight: '1.1',
                                letterSpacing: '0.12em'
                              }}>
                            {recipe.title}
                          </h2>
                        </div>
                        
                        <div className="px-5 pb-6">
                          <div className="flex items-center mb-4">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < Math.floor(recipe.rating || 0) ? "currentColor" : "rgba(209, 213, 219, 0.5)"}>
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-sm font-normal text-black">{recipe.rating || 0}</span>
                            <span className="ml-1 text-gray-500 text-xs">aus 93 Bewertungen</span>
                          </div>       
                          
                          <p className="text-xl text-black mb-6 pr-8 md:pr-5 leading-relaxed font-normal">{recipe.descriptionOnImage}</p>
                        </div>
                      </div>
                      
                      {/* Spacer div to maintain layout height */}
                      <div className="hidden md:block md:w-1/3 h-[300px]"></div>
                    </div>

                    <div className="p-5">
                      <RecipeIngredients
                        initialServings={recipe.servings}
                        ingredients={recipe.ingredients}
                        prepTime={recipe.prepTime ? parseInt(String(recipe.prepTime)) : undefined}
                        cookTime={30}
                      />
                    
                      {/* Instructions */}
                      <RecipeInstructions
                        instructions={recipe.instructions}
                      />

                      <RecipeNutrition
                        servings={recipe.servings}
                        nutrition={{
                          calories: recipe.nutrition.calories,
                          protein: recipe.nutrition.protein,
                          carbs: recipe.nutrition.carbs,
                          fat: recipe.nutrition.fat
                        }}
                      />
                    </div>
                  </div>
                </section>

                {/* Empfohlene Beiträge - Grid with 9 images */}
                <div className="w-full mx-auto mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-serif font-bold text-sm font-lg text-gray-500 tracking-wider">
                      Empfohlene {recipe.category}
                    </span>
                  </div>
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
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-white text-sm font-medium text-center px-4">
                                Empfohlene {recipe.category}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#db747a] transition-colors">
                              {recommendedRecipe.title}
                            </h4>
                            <p className="text-lg text-black leading-relaxed font-normal line-clamp-2">
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

            {/* Sidebar - Right Column (4/12) */}
            <div className="lg:col-span-4">
              {/* Beliebste Rezepte - will be populated later */}
              <div className="sticky top-24">
                <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-6">Beliebste Rezepte</h3>
                <div className="space-y-6">
                  {recommendedRecipes2.slice(0, 5).map((recipe, index) => (
                    <a href={`/${recipe.slug}`} className="flex items-center gap-4 group" key={index}>
                      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#0b3558] group-hover:text-[#db747a] transition-colors line-clamp-2">
                          {recipe.title}
                        </h4>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}