import { notFound } from 'next/navigation'
import { getRecipeBySlug as getRecipeBySlugData, recipes as recipesData, Recipe as Recipe } from '@/lib/data'
import { RecipeHeader } from '@/components/recipe-header'
import { RecipeIngredients } from '@/components/recipe-ingredients'
import { RecipeInstructions } from '@/components/recipe-instructions'
import { RecipeNutrition } from '@/components/recipe-nutrition'
import { RecipeSimilar } from '@/components/recipe-similar'
import { RecipeComments } from '@/components/recipe-comments'
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

// Enhanced metadata generation with comprehensive SEO
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipesData.find((r) => r.slug === slug);

  if (!recipe) {
    return {
      title: 'Rezept nicht gefunden - Veggie Rezepte',
      description: 'Das angeforderte vegetarische Rezept konnte nicht gefunden werden.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }  

  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';

  const canonicalUrl = `${baseUrl}/${slug}`;
  
  // Enhanced keywords with long-tail variations
  const enhancedKeywords = [
    ...(recipe.seo_keywords || []),
    `${recipe.title} rezept`,
    `${recipe.title} vegetarisch`,
    `${recipe.title} zubereitung`,
    `${recipe.title} kochen`,
    `vegetarisches ${recipe.category.toLowerCase()}`,
    `${recipe.category.toLowerCase()} vegetarisch`,
    `${recipe.category.toLowerCase()} rezept`,
    'vegetarische küche',
    'veggie rezepte',
    'fleischlos kochen',
    'gesunde ernährung',
    ...(recipe.tags || []).map(tag => `${tag.toLowerCase()} rezept`),
    ...(recipe.prepTime ? [`${recipe.prepTime} minuten rezept`, 'schnelles rezept'] : []),
    ...(recipe.servings ? [`${recipe.servings} portionen`, `rezept für ${recipe.servings} personen`] : [])
  ];

  const keywordsString = [...new Set(enhancedKeywords)].join(', ');

  // Enhanced description with more details
  const enhancedDescription = `${recipe.description} ⏱️ Zubereitungszeit: ${recipe.prepTime || 30} Min | 🍽️ Portionen: ${recipe.servings || 4} | 📊 Bewertung: ${recipe.rating || 4.5}/5 ⭐ | Kategorie: ${recipe.category} | Jetzt kostenlos nachkochen!`;

  return {
    title: `${recipe.seo_title || recipe.title} | Vegetarisches Rezept | Veggie Rezepte`,
    description: enhancedDescription,
    keywords: keywordsString,
    authors: [{ name: 'Veggie Rezepte Team' }],
    creator: 'Veggie Rezepte',
    publisher: 'Veggie Rezepte',
    openGraph: {
      title: `${recipe.seo_title || recipe.title} | Vegetarisches Rezept`,
      description: enhancedDescription,
      images: [
        {
          url: recipe.image,
          width: 1200,
          height: 630,
          alt: `${recipe.title} - Vegetarisches ${recipe.category} Rezept`,
        },
        ...(recipe.images ? Object.values(recipe.images).map(img => ({
          url: img,
          width: 800,
          height: 600,
          alt: `${recipe.title} Zubereitungsschritt`,
        })) : [])
      ],
      type: 'article',
      url: canonicalUrl,
      siteName: 'Veggie Rezepte',
      locale: 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${recipe.seo_title || recipe.title} | Vegetarisches Rezept`,
      description: enhancedDescription,
      images: [recipe.image],
      creator: '@veggierezepte',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:author': 'Veggie Rezepte Team',
      'article:publisher': 'https://veggie-rezepte.de',
      'article:section': recipe.category,
      'article:tag': recipe.tags?.join(', ') || '',
      'recipe:category': recipe.category,
      'recipe:cuisine': 'Vegetarisch',
      'recipe:prep_time': `${recipe.prepTime || 30}`,
      'recipe:cook_time': `${recipe.cookingTime || 30}`,
      'recipe:total_time': `${(recipe.prepTime || 30) + (recipe.cookingTime || 30)}`,
      'recipe:yield': `${recipe.servings || 4}`,
      'recipe:rating': `${recipe.rating || 4.5}`,
    },
  }
}

// Enhanced structured data with comprehensive Recipe schema
export async function generateStructuredData({ params }: RecipePageProps) {
  const { slug } = await params;
  let recipe = recipesData.find((r) => r.slug === slug);

  if (!recipe) return null;

  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';

  const canonicalUrl = `${baseUrl}/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    '@id': canonicalUrl,
    'name': recipe.title,
    'image': [
      recipe.image,
      ...(recipe.images ? Object.values(recipe.images) : [])
    ],
    'description': recipe.description || '',
    'author': {
      '@type': 'Organization',
      '@id': 'https://veggie-rezepte.de/#organization',
      'name': 'Veggie Rezepte',
      'url': 'https://veggie-rezepte.de',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://veggie-rezepte.de/images/logo/logo.png'
      }
    },
    'publisher': {
      '@id': 'https://veggie-rezepte.de/#organization'
    },
    'datePublished': recipe.createdDate?.toISOString() || new Date().toISOString(),
    'dateModified': recipe.updatedDate?.toISOString() || recipe.createdDate?.toISOString() || new Date().toISOString(),
    'recipeCategory': recipe.category,
    'recipeCuisine': 'Vegetarisch',
    'recipeYield': [`${recipe.servings || 4} Portionen`, `${recipe.servings || 4}`],
    'prepTime': `PT${recipe.prepTime || 30}M`,
    'cookTime': `PT${recipe.cookingTime || 30}M`,
    'totalTime': `PT${(recipe.prepTime || 30) + (recipe.cookingTime || 30)}M`,
    'keywords': [
      ...(recipe.seo_keywords || []),
      recipe.category,
      'vegetarisch',
      'veggie rezepte',
      ...(recipe.tags || [])
    ].join(', '),
    'nutrition': recipe.nutrition ? {
      '@type': 'NutritionInformation',
      'calories': `${recipe.nutrition.calories} kcal`,
      'proteinContent': recipe.nutrition.protein,
      'carbohydrateContent': recipe.nutrition.carbs,
      'fatContent': recipe.nutrition.fat,
      'servingSize': '1 Portion'
    } : undefined,
    'recipeIngredient': recipe.ingredients.map(ing =>
      `${ing.amount || ''} ${ing.unit || ''} ${ing.name}`.trim()
    ),
    'recipeInstructions': recipe.instructions.map((step, index) => ({
      '@type': 'HowToStep',
      'position': index + 1,
      'text': step,
      'name': `Schritt ${index + 1}`,
      'url': `${canonicalUrl}#step-${index + 1}`
    })),
    'aggregateRating': recipe.rating ? {
      '@type': 'AggregateRating',
      'ratingValue': recipe.rating,
      'reviewCount': recipe.reviews || 50,
      'bestRating': 5,
      'worstRating': 1
    } : undefined,
    'video': recipe.videoUrl ? {
      '@type': 'VideoObject',
      'name': `${recipe.title} - Zubereitungsvideo`,
      'description': `Schritt-für-Schritt Video-Anleitung für ${recipe.title}`,
      'contentUrl': recipe.videoUrl,
      'embedUrl': recipe.videoUrl,
      'uploadDate': recipe.createdDate?.toISOString() || new Date().toISOString(),
      'duration': 'PT5M',
      'thumbnail': {
        '@type': 'ImageObject',
        'url': recipe.image
      }
    } : undefined,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    'url': canonicalUrl,
    'sameAs': [
      `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(canonicalUrl)}`,
    ],
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://veggie-rezepte.de/#website'
    },
    'potentialAction': {
      '@type': 'CookAction',
      'target': canonicalUrl
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
  const { slug } = await params;

  let recipe: Recipe | null = null;
  const foundRecipe = recipesData.find((r) => r.slug === slug);
  if (foundRecipe) recipe = foundRecipe;

  if (!recipe) {
    notFound();
  }

  const validRecipe = recipe;
  const structuredData = await generateStructuredData({ params });

  // Get related recipes
  const otherRecipes = recipesData.filter(r => r.slug !== slug)
  const randomRecipe = otherRecipes[Math.floor(Math.random() * otherRecipes.length)]

  const recipesFromSameCategory = recipesData.filter(r =>
    r.slug !== slug &&
    r.category === validRecipe.category
  )

  const categoryMap: Record<string, string> = {
    frühstück: 'fruehstueck',
    aufläufe: 'auflaeufe',
  };
  
  const normalizedCategory = categoryMap[validRecipe.category.toLowerCase()] || validRecipe.category.toLowerCase();

  const getRandomRecipes = (arr: typeof recipesData, count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const recommendedRecipes = getRandomRecipes(recipesFromSameCategory, 3)
  const recommendedRecipes2 = getRandomRecipes(otherRecipes, 6)

  // Enhanced star rating component
  function HorizontalStar({ fill, index }: { fill: number; index: number }) {
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
        <path
          d="M12 2.5l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.62l-5-4.87 6.91-.99L12 2.5z"
          fill="#fff"
          stroke="#D1D5DB"
          strokeWidth={1}
        />
        <defs>
          <clipPath id={`star-clip-${index}`}>
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
      {structuredData && (
        <Script
          id="recipe-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-8">
          <article itemScope itemType="https://schema.org/Recipe">
            {/* Enhanced breadcrumb with structured data */}
            <nav aria-label="Breadcrumb" className="mb-4" itemScope itemType="https://schema.org/BreadcrumbList">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <a href="/" className="hover:text-[#0b3558] transition-colors" itemProp="item">
                    <span itemProp="name">Home</span>
                  </a>
                  <meta itemProp="position" content="1" />
                </li>
                <li><span className="mx-2">›</span></li>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <a href="/rezepte/alle" className="hover:text-[#0b3558] transition-colors" itemProp="item">
                    <span itemProp="name">Rezepte</span>
                  </a>
                  <meta itemProp="position" content="2" />
                </li>
                <li><span className="mx-2">›</span></li>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <a href="/kategorien" className="hover:text-[#0b3558] transition-colors" itemProp="item">
                    <span itemProp="name">Kategorien</span>
                  </a>
                  <meta itemProp="position" content="3" />
                </li>
                <li><span className="mx-2">›</span></li>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <a href={`/kategorien/${normalizedCategory}`} className="hover:text-[#0b3558] transition-colors" itemProp="item">
                    <span itemProp="name">{validRecipe.category}</span>
                  </a>
                  <meta itemProp="position" content="4" />
                </li>
                <li><span className="mx-2">›</span></li>
                <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                  <span className="text-[#0b3558] font-medium" itemProp="name">{validRecipe.title}</span>
                  <meta itemProp="position" content="5" />
                </li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content - Left Column (8/12) */}
              <div className="lg:col-span-8 border-r border-black lg:pr-10">
                <div className="flex flex-col items-center gap-8 mt-2 mb-8">
                  {/* Enhanced title with proper heading hierarchy */}
                  <header>
                    <h1 className="font-black text-5xl uppercase text-black w-full tracking-tight leading-tight" itemProp="name">
                      {validRecipe.title}
                    </h1>
                  </header>

                  {/* Enhanced author and rating section */}
                  <div className="w-full grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 overflow-hidden">
                          <img
                            src="/images/logo/logo.png"
                            alt="Veggie Rezepte Logo"
                            className="w-full h-full object-contain"
                            width="64"
                            height="64"
                          />
                        </div>
                        <div itemScope itemType="https://schema.org/Organization" itemProp="author">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-700">Von</span>
                            <span className="font-bold text-gray-900" itemProp="name">Veggie Rezepte</span>
                          </div>
                          <div className="text-gray-500 text-xs">
                            <span>Veröffentlicht am </span>
                            <time itemProp="datePublished" dateTime={validRecipe.createdDate?.toISOString()}>
                              {validRecipe.createdDate?.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </time>
                          </div>
                          <div className="text-gray-500 text-xs">
                            <span>Aktualisiert am </span>
                            <time itemProp="dateModified" dateTime={validRecipe.updatedDate?.toISOString()}>
                              {validRecipe.updatedDate?.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </time>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced action buttons */}
                      <div className="flex items-center gap-4 mt-4">
                        <a
                          href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://veggie-rezepte.de/${validRecipe.slug}`)}&media=${encodeURIComponent(`https://veggie-rezepte.de${validRecipe.image}`)}&description=${encodeURIComponent(`✨ ${validRecipe.title.toUpperCase()} ✨\n\n${validRecipe.description} #veggierezepte #vegetarisch #rezept`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-black py-2.5 px-6 font-bold text-black hover:bg-gray-100 transition-colors duration-200 text-center rounded-md text-sm"
                          aria-label={`${validRecipe.title} auf Pinterest teilen`}
                        >
                          REZEPT PINNEN
                        </a>
                        <a
                          href="#recipe-card"
                          className="border border-black bg-[#f9d24f] py-2.5 px-6 font-bold text-black hover:bg-[#f0c840] transition-colors duration-200 flex items-center justify-center rounded-md text-sm shadow-[2px_2px_0px_rgba(0,0,0,0.8)]"
                          aria-label="Zum Rezept springen"
                        >
                          ZUM REZEPT ↓
                        </a>
                      </div>
                    </div>

                    {/* Enhanced rating and metadata */}
                    <div className="flex flex-col items-end">
                      {validRecipe.rating && (
                        <div 
                          className="flex items-center gap-2 mb-2" 
                          title={`Bewertung: ${validRecipe.rating} von 5 Sternen`} 
                          aria-label={`Bewertung: ${validRecipe.rating} von 5 Sternen`}
                          itemScope 
                          itemType="https://schema.org/AggregateRating"
                          itemProp="aggregateRating"
                        >
                          <div className="flex" role="img" aria-label={`${validRecipe.rating} von 5 Sternen`}>
                            {[...Array(5)].map((_, i) => {
                              const rating = validRecipe.rating || 0;
                              const fill = Math.max(0, Math.min(1, rating - i));
                              return <HorizontalStar key={i} fill={fill} index={i} />;
                            })}
                          </div>
                          <span className="ml-2 text-sm font-normal text-black" itemProp="ratingValue">{validRecipe.rating}</span>
                          <span className="ml-1 text-gray-500 text-xs">
                            aus <span itemProp="reviewCount">{validRecipe.reviews}</span> Bewertungen
                          </span>
                          <meta itemProp="bestRating" content="5" />
                          <meta itemProp="worstRating" content="1" />
                        </div>
                      )}

                      {/* Enhanced recipe metadata */}
                      <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center">
                          <span className="text-black text-[10px] uppercase tracking-wide font-bold">Zubereitung</span>
                          <span className="text-xs" itemProp="prepTime" content={`PT${validRecipe.prepTime}M`}>
                            {validRecipe.prepTime} Min
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-black text-[10px] uppercase tracking-wide font-bold">Kochzeit</span>
                          <span className="text-xs" itemProp="cookTime" content={`PT${validRecipe.cookingTime}M`}>
                            {validRecipe.cookingTime} Min
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-black text-[10px] uppercase tracking-wide font-bold">Portionen</span>
                          <span className="text-xs" itemProp="recipeYield">
                            {validRecipe.servings}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced introduction with proper markup */}
                  <div className="w-full">
                    <div className="text-lg text-black leading-relaxed font-normal" itemProp="description">
                      {validRecipe.introductionParagraph}
                    </div>
                  </div>

                  {/* Enhanced recipe header image */}
                  <div className="w-full">
                    <div className="w-full h-[960px] rounded-2xl overflow-hidden">
                      <img
                        width="1200"
                        height="800"
                        loading="lazy"
                        decoding="async"
                        itemProp="image"
                        src={validRecipe.image}
                        alt={`${validRecipe.title} - Vegetarisches ${validRecipe.category} Rezept fertig zubereitet`}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        style={{ maxHeight: '100%' }}
                      />
                    </div>
                  </div>

                  {/* Additional paragraph */}
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
                        itemProp="image"
                        src={validRecipe.images.image1} 
                        alt={`${validRecipe.title} Zubereitungsschritt - Zutaten vorbereiten`}
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
                        itemProp="image"
                        src={validRecipe.images.image2} 
                        alt={`${validRecipe.title} Zubereitungsschritt - Kochen und zubereiten`}
                        className="w-full h-full object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 49vw"
                      />
                    </div>
                  </div>

                  {/* Enhanced ingredients needed section */}
                  {validRecipe.ingredientsNeeded && (
                    <section className="w-full mb-1">
                      <h2 className="font-black text-3xl uppercase text-black w-full tracking-tight leading-tight mb-4">
                        Benötigte Zutaten
                      </h2>
                      <p className="text-lg text-black leading-relaxed font-normal mb-1">
                        Hier ist alles, was du für dieses einfache Rezept {validRecipe.title} brauchst:
                      </p>
                      <div className="space-y-4">
                        <ul className="list-disc pl-5">
                          {validRecipe.ingredientsNeeded.map((ingredient, index) => (
                            <li key={index} className="text-black text-lg text-black leading-relaxed mb-2">
                              <strong className="font-semibold">{ingredient.title}:</strong> {ingredient.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )}

                  {/* Ingredients Image */}
                  <div className="flex justify-center gap-4 w-full mb-4">
                    <div className="w-[98%] h-[543px] rounded-2xl overflow-hidden">
                      <img 
                        width="1200"
                        height="800"
                        loading="lazy"
                        decoding="async"
                        itemProp="image"
                        src={validRecipe.images.imageIngredient} 
                        alt={`${validRecipe.title} - Alle Zutaten für das vegetarische Rezept`}
                        className="w-full h-full object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 49vw, 1200px"
                      />
                    </div>
                  </div>

                  {/* Enhanced ingredients section */}
                  <section className="w-full" itemProp="recipeIngredient">
                    {recipe.ingredientGroups?.map((group, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="font-black text-xl uppercase text-black w-full tracking-tight leading-tight mb-4">
                          {group.title}
                        </h3>
                        <p className="text-lg text-black leading-relaxed font-normal mb-4">
                          {group.description}
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          {group.ingredients.map((ingredient, i) => (
                            <li key={i} className="text-lg text-black leading-relaxed font-normal" itemProp="recipeIngredient">
                              {ingredient.amount && <span className="font-medium">{ingredient.amount} {ingredient.unit}</span>} {ingredient.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </section>

                  {/* Enhanced recipe card section */}
                  <section id="recipe-card" className="mb-8 w-full" itemScope itemType="https://schema.org/Recipe">
                    <div className="bg-white border-2 border-gray-800 rounded-lg overflow-visible relative" style={{ boxShadow: `5px 5px 0 ${brandColors.primary.yellowRGBA}` }}>
                      {/* Recipe card content with enhanced structured data */}
                      <div className="absolute -top-5 right-6 z-0">
                        <div style={{ width: '268px', height: '268px', minWidth: '268px', minHeight: '268px' }} className="rounded-lg overflow-hidden border-2 border-gray-200 flex-shrink-0 shadow-md">
                          <img
                            width="1200"
                            height="800"
                            loading="lazy"
                            decoding="async"
                            itemProp="image"
                            src={validRecipe.image}
                            alt={`${validRecipe.title} - Fertiges vegetarisches Gericht`}
                            className="w-full h-full object-cover"
                          />
                        
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row border-b border-gray-200 relative">
                        <div className="w-full md:w-2/3 z-10">
                          <div className="w-full mt-4 pt-4 pb-4 px-5 mb-4 -ml-5 rounded-lg" style={{ backgroundColor: brandColors.primary.yellow }}>
                            <h2 className="text-3xl md:text-4xl font-black uppercase text-white" itemProp="name"
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
                            {validRecipe.rating && (
                              <div className="flex items-center mb-4" itemScope itemType="https://schema.org/AggregateRating" itemProp="aggregateRating">
                                <div className="flex text-yellow-400" role="img" aria-label={`${validRecipe.rating} von 5 Sternen`}>
                                  {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={i < Math.floor(validRecipe.rating || 0) ? "currentColor" : "rgba(209, 213, 219, 0.5)"}>
                                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                  ))}
                                </div>
                                <span className="ml-2 text-sm font-normal text-black" itemProp="ratingValue">{validRecipe.rating}</span>
                                <span className="ml-1 text-gray-500 text-xs">aus <span itemProp="reviewCount">{validRecipe.reviews || 93}</span> Bewertungen</span>
                                <meta itemProp="bestRating" content="5" />
                                <meta itemProp="worstRating" content="1" />
                              </div>
                            )}

                            <p className="text-xl text-black mb-6 pr-8 md:pr-5 leading-relaxed font-normal" itemProp="description">
                              {validRecipe.description}
                            </p>
                          </div>
                        </div>

                        <div className="hidden md:block md:w-1/3 h-[300px]"></div>
                      </div>

                      <div className="p-5">
                        <RecipeIngredients
                          initialServings={validRecipe.servings}
                          ingredients={validRecipe.ingredients}
                          prepTime={validRecipe.prepTime ? parseInt(String(validRecipe.prepTime)) : undefined}
                          cookTime={validRecipe.cookingTime ? parseInt(String(validRecipe.cookingTime)) : undefined}
                        />

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

                  {/* Hidden structured data for additional recipe properties */}
                  <div className="sr-only" aria-hidden="true">
                    <span itemProp="recipeCategory">{validRecipe.category}</span>
                    <span itemProp="recipeCuisine">Vegetarisch</span>
                    <span itemProp="keywords">{validRecipe.seo_keywords?.join(', ')}</span>
                    <time itemProp="totalTime" dateTime={`PT${(validRecipe.prepTime || 30) + (validRecipe.cookingTime || 30)}M`}>
                      {(validRecipe.prepTime || 30) + (validRecipe.cookingTime || 30)} Minuten
                    </time>
                    {validRecipe.nutrition && (
                      <div itemProp="nutrition" itemScope itemType="https://schema.org/NutritionInformation">
                        <span itemProp="calories">{validRecipe.nutrition.calories} kcal</span>
                        <span itemProp="proteinContent">{validRecipe.nutrition.protein}</span>
                        <span itemProp="carbohydrateContent">{validRecipe.nutrition.carbs}</span>
                        <span itemProp="fatContent">{validRecipe.nutrition.fat}</span>
                        <span itemProp="servingSize">1 Portion</span>
                      </div>
                    )}
                  </div>

                  {/* Recommended recipes section */}
                  <div className="w-full">
                    <div className="mt-4">
                      <h2 className="font-black text-3xl uppercase text-black w-full tracking-tight leading-tight mb-3">
                        Empfohlene Beiträge
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {recommendedRecipes2.map((recommendedRecipe, index) => (
                        <article key={index} className="block border border-black rounded-lg shadow-[4px_4px_0px_rgba(249,210,79,0.6)] overflow-hidden h-full" itemScope itemType="https://schema.org/Recipe">
                          <a href={`/${recommendedRecipe.slug}`} className="relative group bg-[#f9d24f]/30 p-4 h-full flex flex-col" aria-label={`Rezept für ${recommendedRecipe.title}`}>
                            <div className="w-full aspect-square rounded-lg overflow-hidden">
                              <img
                                width="1200"
                                height="800"
                                loading="lazy"
                                decoding="async"
                                itemProp="image"
                                src={recommendedRecipe.image}
                                alt={`${recommendedRecipe.title} - Vegetarisches ${recommendedRecipe.category} Rezept`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="mt-4 flex-grow">
                              <h3 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#f9d24f] transition-colors" itemProp="name">
                                {recommendedRecipe.title}
                              </h3>
                              <p className="text-lg text-black leading-relaxed font-normal line-clamp-2" itemProp="description">
                                {recommendedRecipe.description}
                              </p>
                            </div>
                            <meta itemProp="recipeCategory" content={recommendedRecipe.category} />
                          </a>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Right Column (4/12) */}
              <aside className="lg:col-span-4" role="complementary" aria-label="Zusätzliche Informationen">
                <div className="pr-4 pb-8">
                  <section className="mb-8">
                    <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Beliebte Rezepte</h3>
                    <div className="space-y-4">
                      {otherRecipes.slice(0, 5).map((popularRecipe, index) => (
                        <article key={index} className="flex items-start gap-3 group" itemScope itemType="https://schema.org/Recipe">
                          <a href={`/${popularRecipe.slug}`} className="flex items-start gap-3 group w-full" aria-label={`Rezept für ${popularRecipe.title}`}>
                            <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                width="1200"
                                height="800"
                                loading="lazy"
                                decoding="async"
                                itemProp="image"
                                src={popularRecipe.image}
                                alt={`${popularRecipe.title} - Vegetarisches ${popularRecipe.category} Rezept`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold text-[#0b3558] group-hover:text-[#f9d24f] transition-colors" itemProp="name">
                                {popularRecipe.title}
                              </h4>
                              <p className="text-sm text-gray-600 line-clamp-2" itemProp="description">
                                {popularRecipe.description}
                              </p>
                            </div>
                            <meta itemProp="recipeCategory" content={popularRecipe.category} />
                          </a>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                      <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-3">Newsletter</h3>
                      <p className="text-gray-600 mb-4">Erhalte die neuesten Rezepte direkt in dein Postfach!</p>
                      <form className="space-y-3" aria-label="Newsletter Anmeldung">
                        <label htmlFor="newsletter-email" className="sr-only">E-Mail-Adresse</label>
                        <input
                          id="newsletter-email"
                          type="email"
                          placeholder="Deine Email-Adresse"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f9d24f]"
                          required
                          aria-describedby="newsletter-description"
                        />
                        <p id="newsletter-description" className="sr-only">
                          Melde dich für unseren Newsletter an, um die neuesten vegetarischen Rezepte zu erhalten
                        </p>
                        <button 
                          type="submit"
                          className="w-full bg-[#0b3558] text-white py-2 rounded-md hover:bg-[#f9d24f] hover:text-black transition-colors"
                          aria-label="Für Newsletter anmelden"
                        >
                          Abonnieren
                        </button>
                      </form>
                    </div>
                  </section>

                  <section>
                    <h3 className="font-serif text-xl font-semibold text-[#0b3558] mb-4">Folge uns</h3>
                    <nav aria-label="Social Media Links">
                      <div className="flex gap-4">
                        <a 
                          href="https://www.facebook.com/veggierezepte" 
                          className="text-[#0b3558] hover:text-[#f9d24f] transition-colors"
                          aria-label="Folge uns auf Facebook"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a 
                          href="https://www.pinterest.com/veggierezepte" 
                          className="text-[#0b3558] hover:text-[#f9d24f] transition-colors"
                          aria-label="Folge uns auf Pinterest"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.889-2.889-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a 
                          href="https://www.instagram.com/veggierezepte" 
                          className="text-[#0b3558] hover:text-[#f9d24f] transition-colors"
                          aria-label="Folge uns auf Instagram"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </nav>
                  </section>
                </div>
              </aside>
            </div>
          </article>
        </main>
      </div>
    </>
  )
}