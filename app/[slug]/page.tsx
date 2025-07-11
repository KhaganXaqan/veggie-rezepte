import { notFound } from 'next/navigation'
import { getRecipeBySlug as getRecipeBySlugData, recipes as recipesData, Recipe as Recipe } from '@/lib/data'
import { RecipeHeader } from '@/components/recipe-header'
import { RecipeIngredients } from '@/components/recipe-ingredients'
import { RecipeInstructions } from '@/components/recipe-instructions'
import { RecipeNutrition } from '@/components/recipe-nutrition'
import { RecipeSimilar } from '@/components/recipe-similar'
import { RecipeComments } from '@/components/recipe-comments'
import { RecipeInteractionButtons } from '@/components/recipe-interaction-buttons'
import { Separator } from '@/components/ui/separator'
import { SiteHeader } from "@/components/site-header"
import { brandColors } from "@/lib/theme"
import Image from 'next/image'
import { Metadata } from 'next'
import Script from 'next/script'

type RecipePageProps = {
  params: {
    slug: string
  }
}

// Generate metadata for the page
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  // First await the params object before accessing its properties
  const { slug } = await params;
  
  const recipe = recipesData.find((r) => r.slug === slug);

  if (!recipe) {
    return {
      title: 'Recipe Not Found - Veggie Rezepte',
      description: 'The requested recipe could not be found.',
    };
  }  
  

  // Base URL for canonical links - always use www
  const baseUrl = 'https://www.veggie-rezepte.de';

  // Ensure canonical URL is properly set
  const canonicalUrl = `${baseUrl}/${slug}`;

  // Prepare keywords from recipe's SEO keywords
  const keywordsString = recipe.seo_keywords ? recipe.seo_keywords.join(', ') : 'vegetarisch, rezept';

  return {
    title: `${recipe.seo_title || recipe.title}`,
    description: recipe.description || '',
    keywords: keywordsString,
    openGraph: {
      title: `${recipe.seo_title || recipe.title}`,
      description: recipe.description || '',
      images: [
        recipe.image,
        recipe.images.image1,
        recipe.images.image2,
        recipe.images.image3,
        recipe.images.image4,
        recipe.images.image5,
        recipe.images.image6,
        recipe.images.image7,
        recipe.images.imageIngredient
      ],
      type: 'article',
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${recipe.seo_title || recipe.title}`,
      description: recipe.description || '',
      images: [recipe.image],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Generate structured data for recipe
export async function generateStructuredData({ params }: RecipePageProps) {
  // First await the params object before accessing its properties
  const { slug } = await params;

  let recipe = recipesData.find((r) => r.slug === slug);
  

  if (!recipe) return null;

  // Always use www for consistency
  const baseUrl = 'https://www.veggie-rezepte.de';

  // Ensure canonical URL is properly set
  const canonicalUrl = `${baseUrl}/${slug}`;

  // Prepare recipe ingredients in proper format
  const recipeIngredients = recipe.ingredients.map(ing => {
    let ingredientString = '';
    if (ing.amount !== undefined && ing.amount !== null) {
      ingredientString += `${ing.amount}`;
      if (ing.unit) {
        ingredientString += ` ${ing.unit}`;
      }
      ingredientString += ` ${ing.name}`;
    } else {
      ingredientString = ing.name;
    }
    return ingredientString.trim();
  });

  // Prepare recipe instructions in proper format
  const recipeInstructions = recipe.instructions.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    text: step,
    name: `Schritt ${index + 1}`,
    url: `${canonicalUrl}#step-${index + 1}`
  }));

  // Prepare keywords
  const keywords = recipe.seo_keywords ? recipe.seo_keywords.join(', ') : 'vegetarisch, rezept, kochen, gesund';

  // Calculate total time
  const totalTime = (recipe.prepTime || 0) + (recipe.cookingTime || 0);

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title, // This should be a string, not an object
    image: [recipe.image], // Array of images
    description: recipe.description || `Leckeres vegetarisches Rezept für ${recipe.title}`,
    keywords: keywords,
    author: {
      '@type': 'Organization',
      name: 'Veggie Rezepte',
      url: baseUrl
    },
    datePublished: recipe.createdDate ? recipe.createdDate.toISOString() : new Date().toISOString(),
    dateModified: recipe.updatedDate ? recipe.updatedDate.toISOString() : recipe.createdDate?.toISOString() || new Date().toISOString(),
    recipeCategory: recipe.category,
    recipeCuisine: 'Vegetarisch',
    prepTime: `PT${recipe.prepTime || 30}M`,
    cookTime: `PT${recipe.cookingTime || 0}M`,
    totalTime: `PT${totalTime}M`,
    recipeYield: `${recipe.servings || 4}`,
    recipeIngredient: recipeIngredients,
    recipeInstructions: recipeInstructions,
    nutrition: recipe.nutrition ? {
      '@type': 'NutritionInformation',
      calories: `${recipe.nutrition.calories}`,
      proteinContent: `${recipe.nutrition.protein}`,
      carbohydrateContent: `${recipe.nutrition.carbs}`,
      fatContent: `${recipe.nutrition.fat}`,
      servingSize: '1 Portion'
    } : {
      '@type': 'NutritionInformation',
      calories: '300',
      proteinContent: '15g',
      carbohydrateContent: '30g',
      fatContent: '10g',
      servingSize: '1 Portion'
    },
    aggregateRating: recipe.rating ? {
      '@type': 'AggregateRating',
      ratingValue: recipe.rating.toString(),
      reviewCount: (recipe.reviews || 50).toString(),
      bestRating: '5',
      worstRating: '1'
    } : undefined,
    // Remove video section since videoUrl doesn't exist in Recipe type
    // If you want to add video support, you'll need to add videoUrl to the Recipe type first
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Veggie Rezepte',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo/logo.png`
      }
    }
  };
}

export function generateStaticParams() {
  const dataSlugs = recipesData.map((recipe) => ({
    slug: recipe.slug,
  }));

  return [...dataSlugs];
}

export default async function RecipePage({ params }: RecipePageProps) {
  // First await the params object before accessing its properties
  const { slug } = await params;

  let recipe: Recipe | null = null;
  const foundRecipe = recipesData.find((r) => r.slug === slug);
  if (foundRecipe) recipe = foundRecipe;

  if (!recipe) {
    notFound();
  }

  // After notFound(), recipe is guaranteed to be non-null
  const validRecipe = recipe;

  // Generate structured data for this recipe
  const structuredData = await generateStructuredData({ params });

  // Get a random recipe for Empfohlener Beitrag
  const otherRecipes = recipesData.filter(r => r.slug !== slug)
  const randomRecipe = otherRecipes[Math.floor(Math.random() * otherRecipes.length)]

  // Get random recipes from the same category for Empfohlene Beiträge
  const recipesFromSameCategory = recipesData.filter(r =>
    r.slug !== slug &&
    r.category === validRecipe.category
  )

  const categoryMap: Record<string, string> = {
    frühstück: 'fruehstueck',
    aufläufe: 'auflaeufe',
  };
  
  const normalizedCategory = categoryMap[validRecipe.category.toLowerCase()] || validRecipe.category.toLowerCase();

  // Get 3 random recipes from the filtered list
  const getRandomRecipes = (arr: typeof recipesData, count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const recommendedRecipes = getRandomRecipes(recipesFromSameCategory, 3)
  const recommendedRecipes2 = getRandomRecipes(otherRecipes, 6)

  // Render a single horizontally-filled star
  function HorizontalStar({ fill, index }: { fill: number; index: number }) {
    // Clamp fill between 0 and 1
    const fillPct = Math.max(0, Math.min(1, fill));
    return (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{ display: 'block' }}
      >
        {/* Background: white star with gray border */}
        <path
          d="M12 2.5l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.62l-5-4.87 6.91-.99L12 2.5z"
          fill="#fff"
          stroke="#D1D5DB"
          strokeWidth={1}
        />
        {/* Foreground: yellow fill, clipped to fillPct width */}
        <defs>
          <clipPath id={`star-clip-${index}`}> {/* Unique per star */}
            <rect x="0" y="0" width={24 * fillPct} height="24" />
          </clipPath>
        </defs>
        <path
          d="M12 2.5l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.62l-5-4.87 6.91-.99L12 2.5z"
          fill="#FFD700"
          clipPath={`url(#star-clip-${index})`}
        />
      </svg>
    );
  }

  return (
    <>
      {/* Add structured data script */}
      {structuredData && (
        <Script
          id="recipe-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8">
          <article>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content - Left Column (8/12) */}
              <div className="lg:col-span-8 border-r border-black lg:pr-10">
                {/* Breadcrumb Navigation - Moved to top */}
                <div className="w-full text-gray-500 text-sm mb-0">
                  <div className="flex items-center gap-1">
                    <a href="/rezepte/alle" className="hover:text-[#0b3558] transition-colors">Rezepte</a>
                    <span className="text-xs">»</span>
                    <a href="/kategorien" className="hover:text-[#0b3558] transition-colors">Kategorien</a>
                    <span className="text-xs">»</span>
                    <a href={`/kategorien/${normalizedCategory}`} className="hover:text-[#0b3558] transition-colors">{validRecipe.category}</a>
                  </div>
                </div>

                {/* Images before Similar Recipes */}
                <div className="flex flex-col items-center gap-8 mt-2 mb-8">

                  {/* Title - Large and Bold */}
                  <h1 className="font-black text-5xl uppercase text-black w-full tracking-tight leading-tight">
                    {validRecipe.title}
                  </h1>


                  {/* Author Information and Ratings Section - Two Column Layout */}
                  <div className="w-full grid grid-cols-2 gap-4">
                    {/* Left Column - Author Info and Action Buttons */}
                    <div className="flex flex-col">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 overflow-hidden">
                          <img
                            src="/images/logo/logo.png"
                            alt="Autor"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700">Von</span>
                            <span className="font-bold text-gray-900">Veggie Rezepte</span>
                          </div>
                          <div className="text-gray-500 text-xs">
                            <span>Veröffentlicht am {validRecipe.createdDate?.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                          <div className="text-gray-500 text-xs">
                            <span>Aktualisiert am {validRecipe.updatedDate?.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons - Now using Client Component */}
                      <RecipeInteractionButtons 
                        recipe={{
                          title: validRecipe.title,
                          slug: validRecipe.slug,
                          image: validRecipe.image,
                          description: validRecipe.description || ''
                        }}
                      />
                    </div>

                    {/* Right Column - Rating Stars and Recipe Metadata */}
                    <div className="flex flex-col items-end">
                      {/* Rating Stars */}
                      <div className="flex items-center gap-2 mb-2" title={`Rating: ${validRecipe.rating || 0} out of 5`} aria-label={`Bewertung: ${validRecipe.rating || 0} von 5 Sternen`}>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => {
                            const rating = validRecipe.rating || 0;
                            // Calculate fill for this star: 1 = full, 0 = empty, fraction = partial
                            const fill = Math.max(0, Math.min(1, rating - i));
                            return <HorizontalStar key={i} fill={fill} index={i} />;
                          })}
                        </div>
                        <span className="ml-2 text-sm font-normal text-black">{validRecipe.rating || 0}</span>
                        <span className="ml-1 text-gray-500 text-xs">aus {validRecipe.reviews} Bewertungen</span>
                      </div>

                      {/* Recipe Metadata */}
                      <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center">
                          <span className="text-black text-[10px] uppercase tracking-wide font-bold">Zubereitung</span>
                          <span className="text-xs">{validRecipe.prepTime} Min</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-black text-[10px] uppercase tracking-wide font-bold">Kochzeit</span>
                          <span className="text-xs">{validRecipe.cookingTime} Min</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-black text-[10px] uppercase tracking-wide font-bold">Portionen</span>
                          <span className="text-xs">{validRecipe.servings}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Introduction Paragraph */}
                  <div className="w-full ">
                    <div className="text-lg text-black leading-relaxed font-normal">
                      {validRecipe.introductionParagraph}
                    </div>
                  </div>

                  {/* Recipe Header Image */}
                  <div className="w-full ">
                    <div className="w-full h-[960px] rounded-2xl overflow-hidden">
                      <img
                        width="1200"
                        height="800"
                        loading="lazy"
                        decoding="async"
                        itemProp="contentUrl"
                        src={validRecipe.image}
                        alt={validRecipe.image.split("/").pop()?.split(".")[0]}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        style={{ maxHeight: '100%' }}
                      />
                    </div>
                  </div>

                  {/* Additional Paragraph */}
                  <div className="w-full mb-1">
                    <div className="text-lg text-black leading-relaxed font-normal">
                      {validRecipe.additionalParagraph}
                    </div>
                  </div>

                  {/* Recipe Images 1*/}
                  <div className="flex justify-center gap-4 w-full mb-1">
                    <div className="w-[49%] h-[543px] rounded-2xl overflow-hidden">
                      <img 
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        itemProp="contentUrl"
                        src={validRecipe.images.image1} 
                        alt={validRecipe.images.image1.split("/").pop()?.split(".")[0]} 
                        className="w-full h-full object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 49vw" 
                      />
                    </div>
                    <div className="w-[49%] h-[543px] rounded-2xl overflow-hidden">
                      <img
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        itemProp="contentUrl"
                        src={validRecipe.images.image2} 
                        alt={validRecipe.images.image2.split("/").pop()?.split(".")[0]} 
                        className="w-full h-full object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 49vw"
                      />
                    </div>
                  </div>

                  {/* Ingredients Needed */}
                  {validRecipe.ingredientsNeeded && (
                    <div className="w-full mb-1">
                      <h2 className="font-black text-3xl uppercase text-black w-full tracking-tight leading-tight mb-4">
                        Benötigte Zutaten
                      </h2>
                      <p className="text-lg text-black leading-relaxed font-normal mb-1">
                        Hier ist alles, was du für dieses einfache Rezept brauchst {validRecipe.title}:
                      </p>
                      <div className="space-y-4">
                        <ul className="list-disc pl-5">
                          {validRecipe.ingredientsNeeded.map((ingredient, index) => (
                            <li key={index} className="text-black text-lg text-black leading-relaxed mb-2"> {/* Added mb-4 for spacing */}
                              <strong className="font-semibold ">{ingredient.title}:</strong> {ingredient.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  {/* Ingredients Image */}
                  <div className="flex justify-center gap-4 w-full mb-4">
                    <div className="w-[98%] h-[543px] rounded-2xl overflow-hidden">
                      <img 
                        width="1200"
                        height="800"
                        loading="lazy"
                        decoding="async"
                        itemProp="contentUrl"
                        src={validRecipe.images.imageIngredient} 
                        alt={validRecipe.images.imageIngredient.split("/").pop()?.split(".")[0]} 
                        className="w-full h-full object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 49vw, 1200px"
                      />
                    </div>
                  </div>

                  {/* Ingredients Section */}
                  <div className="w-full ">
                    {recipe.ingredientGroups?.map((group, index) => (
                      <div key={index} className="mb-6">
                        <h2 className="font-black text-xl uppercase text-black w-full tracking-tight leading-tight mb-4">
                          {group.title}
                        </h2>
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
                  </div>

                  {/* Empfohlener Beitrag */}
                  <div className="w-full mx-auto mb-4 border border-black rounded-lg shadow-[4px_4px_0px_rgba(249,210,79,0.6)] overflow-hidden">
                    <a href={`/${randomRecipe.slug}`} className="block p-6 bg-[#f9d24f]/30">
                      <div className="flex items-start gap-6">
                        <div className="w-1/3 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                          <img
                          width="1200"
                          height="800"
                          loading="lazy"
                          decoding="async"
                          itemProp="contentUrl"
                            src={randomRecipe.image}
                            alt={randomRecipe.image.split("/").pop()?.split(".")[0]}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 block">
                            Empfohlener Beitrag
                          </span>
                          <h4 className="font-bold text-xl text-[#0b3558] mb-3">
                            <span className='hover:text-[#f9d24f] transition-colors"'>{randomRecipe.title}</span>
                          </h4>
                          <p className="text-lg text-black leading-relaxed font-normal mb-10 line-clamp-2">
                            {randomRecipe.description}
                          </p>
                          <button className="bg-[#0b3558] text-white px-6 py-2 rounded-full font-medium hover:bg-[#f9d24f] hover:text-black transition-colors">
                            Zum Beitrag
                          </button>
                        </div>
                      </div>
                    </a>
                  </div>


                  <div className="w-full ">
                    {/* Tipps und Variationen */}
                    {validRecipe.tips && (
                      <div className="mt-4">
                        <h2 className="font-black text-3xl uppercase text-black w-full tracking-tight leading-tight mb-1">
                          Tipps und Variationen
                        </h2>
                        <ul className="list-disc pl-6 space-y-2">
                          {validRecipe.tips.map((tip, index) => (
                            <li key={index} className="text-lg text-black leading-relaxed font-normal">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Recipe Images 2*/}
                  <div className="flex justify-center gap-4 w-full mb-1">
                    <div className="w-[49%] h-[543px] rounded-2xl overflow-hidden">
                      <img 
                      width="1200"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      itemProp="contentUrl"
                      src={validRecipe.images.image3} alt={validRecipe.images.image3.split("/").pop()?.split(".")[0]} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="w-[49%] h-[543px] rounded-2xl overflow-hidden">
                      <img 
                      width="1200"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      itemProp="contentUrl"
                      src={validRecipe.images.image4} alt={validRecipe.images.image4.split("/").pop()?.split(".")[0]} className="w-full h-full object-cover object-center" />
                    </div>
                  </div>


                  {/* Fun Fact */}
                  <div className="w-full mx-auto mb-1 border border-black rounded-lg overflow-hidden">
                    <div className="p-6 bg-[#f9d24f]/30">
                      <h2 className="font-black text-3xl uppercase text-black w-full tracking-tight leading-tight mb-4">
                        {validRecipe.funFact.title}
                      </h2>
                      <p className="text-lg text-black leading-relaxed font-normal mb-1">
                        {validRecipe.funFact.description}
                      </p>
                    </div>
                  </div>

                  {/* Serving Suggestions */}
                  {validRecipe.servingSuggestions && (
                    <div className="w-full mb-1">
                      <h2 className="font-black text-4xl uppercase text-black w-full tracking-tight leading-tight mb-2">
                        {validRecipe.servingSuggestions.title}
                      </h2>
                      <p className="text-lg text-black leading-relaxed font-normal mb-1">
                        {validRecipe.servingSuggestions.description}
                      </p>
                      <div className="space-y-2">
                        {validRecipe.servingSuggestions.items.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="text-3xl">{item.emoji}</span>
                            <div>
                              <strong className="font-semibold ">{item.title}</strong> {item.description}
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-lg text-black leading-relaxed font-normal mt-1">
                        {validRecipe.servingSuggestions.note}
                      </p>
                    </div>
                  )}

                  {/* Schritt für Schritt - Recipe */}
                  <div className="w-full mx-auto mb-1">
                    <img
                    width="1200"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    itemProp="contentUrl"
                      src={validRecipe.images.image5}
                      alt={validRecipe.images.image5.split("/").pop()?.split(".")[0]}
                      className="w-full h-[960px] rounded-lg"
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
                        <a href={`/${recommendedRecipe.slug}`} className="block border border-black rounded-lg shadow-[4px_4px_0px_rgba(249,210,79,0.6)] overflow-hidden" key={index}>
                          <div className="relative group bg-[#f9d24f]/30 p-4">
                            <div className="w-full aspect-square rounded-lg overflow-hidden">
                              <img
                              width="1200"
                              height="800"
                              loading="lazy"
                              decoding="async"
                              itemProp="contentUrl"
                                src={recommendedRecipe.image}
                                alt={recommendedRecipe.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />

                            </div>
                            <div className="mt-4">
                              <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#f9d24f] transition-colors">
                                {recommendedRecipe.title}
                              </h4>
                              <p className="text-lg text-black leading-relaxed font-normal line-clamp-2">
                                {recommendedRecipe.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Why Recipe is a Favorite */}
                  {validRecipe.whyFavorite && (
                    <div className="w-full mx-auto mb-1">
                      <h2 className="font-black text-3xl uppercase text-black w-full tracking-tight leading-tight mb-1">
                        {validRecipe.whyFavorite.title}
                      </h2>
                      <ul className="space-y-4">
                        {validRecipe.whyFavorite.reasons.map((reason, index) => (
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
                  )}

                  {/* Handwritten-style message */}
                  {validRecipe.handwrittenMessage && (
                    <div className="mb-8 w-full">
                      <div className="flex justify-center">
                        <div className="relative max-w-md transform rotate-[-1deg]">
                          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            <div
                              className="relative z-10 font-['Segoe_Script','Brush_Script_MT',cursive] text-center"
                              style={{
                                textShadow: '0px 0px 1px rgba(0,0,0,0.1)',
                                color: '#000000',
                                lineHeight: '1.6'
                              }}
                            >
                              <p className="text-2xl mb-3">{validRecipe.handwrittenMessage.mainText}</p>
                              <p className="text-xl mt-4">{validRecipe.handwrittenMessage.subText}</p>

                              {/* Handwritten signature */}
                              <div className="mt-8 flex justify-end">
                                <div
                                  className="font-['Segoe_Script','Brush_Script_MT',cursive] text-right text-[#f9d24f]"
                                  style={{ transform: 'rotate(-3deg)' }}
                                >
                                  <span className="text-3xl font-semibold">{validRecipe.handwrittenMessage.signature}</span>
                                </div>
                              </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f9d24f]/40 rounded-full"></div>
                            <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#f9d24f]/30 rounded-full"></div>
                          </div>

                          {/* Paper tape effect */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-[#db747a]/20 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Recipe Images 3*/}
                  <div className="flex justify-center gap-4 w-full mb-1">
                    <div className="w-[49%] h-[543px] rounded-2xl overflow-hidden">
                      <img 
                      width="1200"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      itemProp="contentUrl"
                      src={validRecipe.images.image6} alt={validRecipe.images.image6.split("/").pop()?.split(".")[0]} className="w-full h-full object-cover object-center" />
                    </div>
                    <div className="w-[49%] h-[543px] rounded-2xl overflow-hidden">
                      <img
                      width="1200"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      itemProp="contentUrl" 
                      src={validRecipe.images.image7} alt={ validRecipe.images.image7.split("/").pop()?.split(".")[0]} className="w-full h-full object-cover object-center" />
                    </div>
                  </div>

                  {/* Recipes details card*/}
                  <section id="recipe-card" className="mb-8 w-full">
                    <div className="bg-white border-2 border-gray-800 rounded-lg overflow-visible relative" style={{ boxShadow: `5px 5px 0 ${brandColors.primary.yellowRGBA}` }}>
                      {/* Image positioned to extend outside the box */}
                      <div className="absolute -top-5 right-6 z-0">
                        <div style={{ width: '268px', height: '268px', minWidth: '268px', minHeight: '268px' }} className="rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0 shadow-md">
                          <img
                          width="1200"
                          height="800"
                          loading="lazy"
                          decoding="async"
                          itemProp="contentUrl"
                            src={validRecipe.image}
                            alt={validRecipe.image.split("/").pop()?.split(".")[0]}
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
                              {validRecipe.title}
                            </h2>
                          </div>

                          <div className="px-5 pb-6">
                            <div className="flex items-center mb-4">
                              <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < Math.floor(validRecipe.rating || 0) ? "currentColor" : "rgba(209, 213, 219, 0.5)"}>
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="ml-2 text-sm font-normal text-black">{validRecipe.rating || 0}</span>
                              <span className="ml-1 text-gray-500 text-xs">aus 93 Bewertungen</span>
                            </div>

                            <p className="text-xl text-black mb-6 pr-8 md:pr-5 leading-relaxed font-normal">{validRecipe.description}</p>
                          </div>
                        </div>

                        {/* Spacer div to maintain layout height */}
                        <div className="hidden md:block md:w-1/3 h-[300px]"></div>
                      </div>

                      <div className="p-5">
                        <RecipeIngredients
                          initialServings={validRecipe.servings}
                          ingredients={validRecipe.ingredients}
                          prepTime={validRecipe.prepTime ? parseInt(String(validRecipe.prepTime)) : undefined}
                          cookTime={validRecipe.cookingTime ? parseInt(String(validRecipe.cookingTime)) : undefined}
                        />

                        {/* Instructions */}
                        <RecipeInstructions
                          instructions={validRecipe.instructions}
                          tips={validRecipe.tips}
                        />

                        <RecipeNutrition
                          servings={validRecipe.servings}
                          nutrition={{
                            calories: validRecipe.nutrition.calories,
                            protein: validRecipe.nutrition.protein,
                            carbs: validRecipe.nutrition.carbs,
                            fat: validRecipe.nutrition.fat
                          }}
                        />
                      </div>
                    </div>
                  </section>

                  <div className="w-full ">
                    <div className="mt-4">
                      <h2 className="font-black text-3xl uppercase text-black w-full tracking-tight leading-tight mb-3">
                        Empfohlene Beiträge
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {recommendedRecipes2.map((recommendedRecipe, index) => (
                        <a href={`/${recommendedRecipe.slug}`} className="block border border-black rounded-lg shadow-[4px_4px_0px_rgba(249,210,79,0.6)] overflow-hidden h-full" key={index}>
                          <div className="relative group bg-[#f9d24f]/30 p-4 h-full flex flex-col">
                            <div className="w-full aspect-square rounded-lg overflow-hidden">
                              <img
                              width="1200"
                              height="800"
                              loading="lazy"
                              decoding="async"
                              itemProp="contentUrl"
                                src={recommendedRecipe.image}
                                alt={recommendedRecipe.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="mt-4 flex-grow">
                              <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#f9d24f] transition-colors">
                                {recommendedRecipe.title}
                              </h4>
                              <p className="text-lg text-black leading-relaxed font-normal line-clamp-2">
                                {recommendedRecipe.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column (4/12) */}
              <div className="lg:col-span-4">
                {/* Right Column Content */}
                <div className="pr-4 pb-8">
                  <div className="mb-8">
                    <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Beliebte Rezepte</h3>
                    <div className="space-y-4">
                      {otherRecipes.slice(0, 5).map((popularRecipe, index) => (
                        <a key={index} href={`/${popularRecipe.slug}`} className="flex items-start gap-3 group">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              width="1200"
                              height="800"
                              loading="lazy"
                              decoding="async"
                              itemProp="contentUrl"
                              src={popularRecipe.image}
                              alt={popularRecipe.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0b3558] group-hover:text-[#f9d24f] transition-colors">
                              {popularRecipe.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {popularRecipe.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-3">Newsletter</h3>
                      <p className="text-gray-600 mb-4">Erhalte die neuesten Rezepte direkt in dein Postfach!</p>
                      <div className="space-y-3">
                        <input
                          type="email"
                          placeholder="Deine Email-Adresse"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f9d24f]"
                        />
                        <button className="w-full bg-[#0b3558] text-white py-2 rounded-md hover:bg-[#f9d24f] hover:text-black transition-colors">
                          Abonnieren
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}