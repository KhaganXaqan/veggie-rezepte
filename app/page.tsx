import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { recipes } from "@/lib/data"
import { Button } from "@/components/ui/button"
import type { Recipe } from "@/lib/data"
import Script from 'next/script'

export async function generateMetadata(): Promise<Metadata> {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';
  
  const canonicalUrl = `${baseUrl}/`;
  const homeKeywords = [
    'vegetarische rezepte',
    'vegane rezepte', 
    'veggie rezepte',
    'gesunde rezepte',
    'schnelle rezepte',
    'einfache rezepte',
    'deutsche küche',
    'kochen',
    'vegetarisch',
    'hauptgerichte vegetarisch',
    'suppen vegetarisch',
    'salate rezepte',
    'desserts vegetarisch',
    'frühstück vegetarisch',
    'aufläufe vegetarisch',
    'mediterrane küche',
    'asiatische rezepte vegetarisch',
    'meal prep vegetarisch',
    'familienrezepte vegetarisch'
  ];

  return {
    title: "Vegetarische & Vegane Rezepte | Lecker & Gesund | Veggie Rezepte",
    description: "Entdecke über 1000 köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen 15-Minuten-Gerichten bis zu festlichen Menüs - einfach zubereitet, gesund und lecker. Jetzt kostenlos durchstöbern!",
    keywords: homeKeywords,
    openGraph: {
      title: "Vegetarische & Vegane Rezepte | Lecker & Gesund | Veggie Rezepte",
      description: "Entdecke über 1000 köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen 15-Minuten-Gerichten bis zu festlichen Menüs - einfach zubereitet, gesund und lecker.",
      url: canonicalUrl,
      siteName: "Veggie Rezepte",
      type: "website",
      images: [
        {
          url: '/images/logo/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Veggie Rezepte - Vegetarische Küche für jeden Tag'
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Vegetarische & Vegane Rezepte | Lecker & Gesund | Veggie Rezepte",
      description: "Entdecke über 1000 köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen 15-Minuten-Gerichten bis zu festlichen Menüs - einfach zubereitet, gesund und lecker.",
      images: ['/images/logo/og-image.jpg'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    other: {
      'article:author': 'Veggie Rezepte Team',
      'article:publisher': 'https://veggie-rezepte.de',
    },
  }
}

export async function generateStructuredData() {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';
  
  // Get featured recipes for structured data
  const featuredRecipes = recipes.slice(0, 12);
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        'url': baseUrl,
        'name': 'Vegetarische & Vegane Rezepte | Veggie Rezepte',
        'isPartOf': {
          '@id': `${baseUrl}/#website`
        },
        'about': {
          '@id': `${baseUrl}/#organization`
        },
        'description': 'Entdecke über 1000 köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen Gerichten bis zu festlichen Menüs - einfach zubereitet und gesund.',
        'breadcrumb': {
          '@id': `${baseUrl}/#breadcrumb`
        },
        'inLanguage': 'de-DE',
        'potentialAction': [
          {
            '@type': 'ReadAction',
            'target': [baseUrl]
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': baseUrl
          }
        ]
      },
      {
        '@type': 'ItemList',
        'name': 'Beliebte Vegetarische Rezepte',
        'description': 'Eine Sammlung der beliebtesten vegetarischen Rezepte',
        'numberOfItems': featuredRecipes.length,
        'itemListElement': featuredRecipes.map((recipe, index) => ({
          '@type': 'Recipe',
          'position': index + 1,
          'name': recipe.title,
          'url': `${baseUrl}/${recipe.slug}`,
          'image': recipe.image,
          'description': recipe.description,
          'author': {
            '@type': 'Organization',
            'name': 'Veggie Rezepte'
          },
          'recipeCategory': recipe.category,
          'recipeCuisine': 'Vegetarisch',
          'prepTime': `PT${recipe.prepTime || 30}M`,
          'recipeYield': `${recipe.servings || 4} Portionen`,
          'aggregateRating': recipe.rating ? {
            '@type': 'AggregateRating',
            'ratingValue': recipe.rating,
            'reviewCount': recipe.reviews || 50,
            'bestRating': 5,
            'worstRating': 1
          } : undefined,
          'nutrition': recipe.nutrition ? {
            '@type': 'NutritionInformation',
            'calories': `${recipe.nutrition.calories} kcal`,
            'proteinContent': recipe.nutrition.protein,
            'carbohydrateContent': recipe.nutrition.carbs,
            'fatContent': recipe.nutrition.fat
          } : undefined
        }))
      }
    ]
  };
}

export default async function Home() {
  const mainCourses = recipes.filter((recipe: Recipe) => recipe.category === "Hauptgerichte")
  const casseroles = recipes.filter((recipe: Recipe) => recipe.category === "Aufläufe")
  const soups = recipes.filter((recipe: Recipe) => recipe.category === "Suppen")
  const salads = recipes.filter((recipe: Recipe) => recipe.category === "Salate")
  const breakfast = recipes.filter((recipe: Recipe) => recipe.category === "Frühstück")
  const desserts = recipes.filter((recipe: Recipe) => recipe.category === "Desserts")

  const structuredData = await generateStructuredData();

  return (
    <>
      {structuredData && (
        <Script
          id="homepage-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 bg-white">
          {/* Hero Section with enhanced semantic markup */}
          <section className="relative h-[600px] flex items-center justify-center" role="banner" aria-label="Hauptbereich">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1920&auto=format&fit=crop&fm=webp"
                alt="Frische vegetarische Zutaten - Gemüse, Kräuter und gesunde Lebensmittel für vegetarische Rezepte"
                fill
                className="object-cover"
                priority
                sizes="100vw"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: 'transparent'
                }}
              />
            </div>
            <div className="relative z-20 text-center text-white px-4">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-['Montserrat'] uppercase">
                  Vegetarische Rezepte
                </h1>
              </div>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-['Montserrat'] uppercase">
                Die besten traditionellen und modernen vegetarischen Gerichte aus der deutschen Küche
              </p>
              <Link href="/rezepte/alle" aria-label="Entdecke alle vegetarischen Rezepte">
                <Button size="lg" className="bg-white text-[rgb(58,125,84)] hover:bg-white/90">
                  Rezepte entdecken
                </Button>
              </Link>
            </div>
          </section>

          {/* Categories Section with enhanced accessibility */}
          <section className="cp-list layout-beta max-w-[1168px] mx-auto mt-[50px] mb-[50px] lg:mb-[50px] relative" aria-label="Rezeptkategorien">
            <h2 className="sr-only">Beliebte Rezeptkategorien</h2>
            <div className="cp-list__inner flex sm:grid sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4 overflow-x-auto pb-4 sm:pb-0 scrollbar-none px-4">
              <Link href="/rezepte/alle?tag=Mediterran" className="cat flex-shrink-0 sm:flex-auto flex flex-col items-center w-[120px] sm:w-auto" aria-label="Mediterrane Rezepte entdecken">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Mediterrane vegetarische Rezepte mit Olivenöl, Tomaten und frischen Kräutern"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Mediterran</span>
              </Link>

              <Link href="/rezepte/alle?tag=Schnell" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Schnelle vegetarische Rezepte in unter 30 Minuten">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Schnelle vegetarische Rezepte - fertig in unter 30 Minuten"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Schnell</span>
              </Link>

              <Link href="/rezepte/alle?tag=Gemüse" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Gesunde Gemüserezepte vegetarisch">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Frische Gemüserezepte - gesund und vegetarisch"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Gemüse</span>
              </Link>

              <Link href="/rezepte/alle?tag=Bowl" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Gesunde Bowl Rezepte vegetarisch">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Bunte Bowl Rezepte - gesund und nahrhaft"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Bowl</span>
              </Link>

              <Link href="/rezepte/alle?tag=Beilage" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Vegetarische Beilagen Rezepte">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Vegetarische Beilagen - perfekte Ergänzung zu jedem Gericht"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Beilage</span>
              </Link>

              <Link href="/rezepte/alle?tag=Käse" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Vegetarische Käse Rezepte">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Käse Rezepte vegetarisch - von Aufläufen bis Salaten"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Käse</span>
              </Link>

              <Link href="/rezepte/alle?tag=Pasta" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Vegetarische Pasta Rezepte">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Pasta Rezepte vegetarisch - italienische Küche ohne Fleisch"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Pasta</span>
              </Link>

              <Link href="/rezepte/alle?tag=Indisch" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Indische vegetarische Rezepte">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Indische vegetarische Rezepte - würzig und aromatisch"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Indisch</span>
              </Link>

              <Link href="/rezepte/alle" className="cat cat--all-recipes flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center" aria-label="Alle vegetarischen Rezepte durchstöbern">
                <span className="cat__icon w-[120px] h-[120px] flex items-center justify-center rounded-full bg-brand">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Alle Rezepte</span>
              </Link>
            </div>
          </section>

          {/* Popular Recipes Section with enhanced semantic markup */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative" aria-label="Beliebte Rezepte">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[100vw] after:bg-brand">
                Beliebte Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-1 lg:grid-cols-12 gap-6">
              {casseroles[0] && (
                <article className="post-summary post-summary--quinary lg:col-span-4" itemScope itemType="https://schema.org/Recipe">
                  <Link href={`/${casseroles[0].slug}`} className="block h-full" aria-label={`Rezept für ${casseroles[0].title} - ${casseroles[0].description}`}>
                    <div className="post-summary__image relative w-full lg:w-[368px] h-full overflow-hidden rounded-lg">
                      <Image
                        alt={`${casseroles[0].title} - Vegetarisches Auflauf Rezept mit ${casseroles[0].prepTime} Minuten Zubereitungszeit`}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={casseroles[0].image}
                        sizes="(max-width: 768px) 100vw, 368px"
                        itemProp="image"
                      />
                      <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                        <div className="bg-white px-3 py-[7px] w-fit whitespace-normal mr-[20px]">
                          <h3 className="post-summary__title text-3xl font-bold font-['Montserrat'] uppercase text-black" itemProp="name">
                            <span className="inline-block">{casseroles[0].title}</span>
                          </h3>
                        </div>
                        {casseroles[0].prepTime && (
                          <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                            <span className="text-xs text-black/80 font-['Montserrat'] uppercase" itemProp="prepTime" content={`PT${casseroles[0].prepTime}M`}>
                              {casseroles[0].prepTime} Min
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <meta itemProp="description" content={casseroles[0].description} />
                    <meta itemProp="recipeCategory" content={casseroles[0].category} />
                  </Link>
                </article>
              )}

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[soups[0], salads[0], breakfast[0], desserts[0]].filter(Boolean).map((recipe: Recipe) => (
                  <article key={recipe.slug} className="post-summary post-summary--quinary" itemScope itemType="https://schema.org/Recipe">
                    <Link href={`/${recipe.slug}`} className="block" aria-label={`Rezept für ${recipe.title} - ${recipe.description}`}>
                      <div className="post-summary__image relative w-full lg:w-[368px] aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          alt={`${recipe.title} - Vegetarisches ${recipe.category} Rezept mit ${recipe.prepTime} Minuten Zubereitungszeit`}
                          loading="lazy"
                          decoding="async"
                          fill
                          className="object-cover"
                          src={recipe.image}
                          sizes="(max-width: 768px) 50vw, 368px"
                          itemProp="image"
                        />
                        <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                          <div className="bg-white px-3 py-[7px] inline-block mr-[20px]">
                            <h3 className="post-summary__title text-lg font-bold font-['Montserrat'] uppercase text-black" itemProp="name">
                              <span>{recipe.title}</span>
                            </h3>
                          </div>
                          {recipe.prepTime && (
                            <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                              <span className="text-[10px] text-black/70 font-['Montserrat'] uppercase" itemProp="prepTime" content={`PT${recipe.prepTime}M`}>
                                {recipe.prepTime} Min
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <meta itemProp="description" content={recipe.description} />
                      <meta itemProp="recipeCategory" content={recipe.category} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Recipe Sections with enhanced semantic structure */}
          {[
            { recipes: mainCourses, title: "Hauptgerichte Rezepte", slug: "hauptgerichte", description: "Herzhafte vegetarische Hauptgerichte" },
            { recipes: soups, title: "Suppen Rezepte", slug: "suppen", description: "Wärmende vegetarische Suppen" },
            { recipes: salads, title: "Salate Rezepte", slug: "salate", description: "Frische vegetarische Salate" },
            { recipes: breakfast, title: "Frühstück Rezepte", slug: "fruehstueck", description: "Gesunde vegetarische Frühstücksideen" },
            { recipes: desserts, title: "Desserts Rezepte", slug: "desserts", description: "Süße vegetarische Nachspeisen" },
            { recipes: casseroles, title: "Aufläufe Rezepte", slug: "auflaeufe", description: "Herzhafte vegetarische Aufläufe" }
          ].filter(Boolean).map((section, sectionIndex) => (
            <section key={section.slug} className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative" aria-label={section.description}>
              <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
                <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-screen after:bg-brand">
                  {section.title}
                </h2>
              </header>
              
              {sectionIndex === 2 || sectionIndex === 3 ? (
                // Special layout for breakfast and salads
                <div className="block-post-listing__inner grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
                  {section.recipes[0] && (
                    <article className="post-summary post-summary--quinary lg:col-span-4" itemScope itemType="https://schema.org/Recipe">
                      <Link href={`/${section.recipes[0].slug}`} className="block h-full" aria-label={`Rezept für ${section.recipes[0].title}`}>
                        <div className="post-summary__image relative w-full lg:w-[368px] h-full overflow-hidden rounded-lg">
                          <Image
                            alt={`${section.recipes[0].title} - Vegetarisches ${section.recipes[0].category} Rezept`}
                            loading="lazy"
                            decoding="async"
                            fill
                            className="object-cover"
                            src={section.recipes[0].image}
                            sizes="(max-width: 768px) 100vw, 368px"
                            itemProp="image"
                          />
                          <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                            <div className="bg-white px-3 py-[7px] w-fit whitespace-normal mr-[20px]">
                              <h3 className="post-summary__title text-2xl sm:text-3xl font-bold font-['Montserrat'] uppercase text-black" itemProp="name">
                                <span className="inline-block">{section.recipes[0].title}</span>
                              </h3>
                            </div>
                            {section.recipes[0].prepTime && (
                              <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                                <span className="text-xs text-black/80 font-['Montserrat'] uppercase" itemProp="prepTime" content={`PT${section.recipes[0].prepTime}M`}>
                                  {section.recipes[0].prepTime} Min
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <meta itemProp="description" content={section.recipes[0].description} />
                      </Link>
                    </article>
                  )}

                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.recipes.slice(1, 5).filter(Boolean).map((recipe: Recipe) => (
                      <article key={recipe.slug} className="post-summary post-summary--quinary" itemScope itemType="https://schema.org/Recipe">
                        <Link href={`/${recipe.slug}`} className="block" aria-label={`Rezept für ${recipe.title}`}>
                          <div className="post-summary__image relative w-full lg:w-[368px] aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                              alt={`${recipe.title} - Vegetarisches ${recipe.category} Rezept`}
                              loading="lazy"
                              decoding="async"
                              fill
                              className="object-cover"
                              src={recipe.image}
                              sizes="(max-width: 768px) 100vw, 368px"
                              itemProp="image"
                            />
                            <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                              <div className="bg-white px-3 py-[7px] inline-block mr-[20px]">
                                <h3 className="post-summary__title text-lg font-bold font-['Montserrat'] uppercase text-black" itemProp="name">
                                  <span>{recipe.title}</span>
                                </h3>
                              </div>
                              {recipe.prepTime && (
                                <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                                  <span className="text-[10px] text-black/70 font-['Montserrat'] uppercase" itemProp="prepTime" content={`PT${recipe.prepTime}M`}>
                                    {recipe.prepTime} Min
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <meta itemProp="description" content={recipe.description} />
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                // Standard grid layout
                <div className="block-post-listing__inner grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {section.recipes.slice(0, sectionIndex === 0 ? 8 : 4).filter(Boolean).map((recipe: Recipe) => (
                    <article key={recipe.slug} className="post-summary post-summary--quinary" itemScope itemType="https://schema.org/Recipe">
                      <Link href={`/${recipe.slug}`} className="block" aria-label={`Rezept für ${recipe.title}`}>
                        <div className="post-summary__image relative aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            alt={`${recipe.title} - Vegetarisches ${recipe.category} Rezept`}
                            loading="lazy"
                            decoding="async"
                            fill
                            className="object-cover"
                            src={recipe.image}
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            itemProp="image"
                          />
                        </div>
                        <div className="post-summary__content mt-4">
                          <h3 className="post-summary__title text-base sm:text-lg font-bold font-['Montserrat'] uppercase text-black" itemProp="name">
                            <span>{recipe.title}</span>
                          </h3>
                          {recipe.prepTime && (
                            <span className="text-xs sm:text-sm text-black/70 font-['Montserrat'] uppercase" itemProp="prepTime" content={`PT${recipe.prepTime}M`}>
                              {recipe.prepTime} Min
                            </span>
                          )}
                        </div>
                        <meta itemProp="description" content={recipe.description} />
                        <meta itemProp="recipeCategory" content={recipe.category} />
                      </Link>
                    </article>
                  ))}
                </div>
              )}
              
              <footer className="mt-8 text-left">
                <Link 
                  href={`/kategorien/${section.slug}`} 
                  className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[14px] sm:text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-4 sm:px-6 py-3 sm:py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md"
                  aria-label={`Alle ${section.title} anzeigen`}
                >
                  Mehr {section.title}
                </Link>
              </footer>
            </section>
          ))}
        </main>

        {/* Enhanced Footer with semantic markup */}
        <footer className="border-t-2 border-black py-8 bg-muted" role="contentinfo">
          <div className="container text-center text-sm text-muted-foreground">
            <p className="font-['Montserrat'] font-bold">© 2025 Veggie-Rezepte.de - Alle Rechte vorbehalten</p>
            <nav className="mt-4" aria-label="Footer Navigation">
              <ul className="flex justify-center space-x-6 text-sm">
                <li><Link href="/about" className="hover:text-[#0b3558] transition-colors">Über uns</Link></li>
                <li><Link href="/contact" className="hover:text-[#0b3558] transition-colors">Kontakt</Link></li>
                <li><Link href="/faq" className="hover:text-[#0b3558] transition-colors">FAQ</Link></li>
                <li><Link href="/datenschutz" className="hover:text-[#0b3558] transition-colors">Datenschutz</Link></li>
                <li><Link href="/impressum" className="hover:text-[#0b3558] transition-colors">Impressum</Link></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}