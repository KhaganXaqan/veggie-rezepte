import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { recipes } from "@/lib/data"
import { Button } from "@/components/ui/button"
import type { Recipe } from "@/lib/data"
import Script from 'next/script'

export async function generateMetadata(): Promise<Metadata> {
  // Determine if we're in development or production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Set the base URL based on environment
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://www.veggie-rezepte.de';
  
  // Ensure canonical URL is properly set
  const canonicalUrl = `${baseUrl}/`;

  // Define specific keywords for the homepage
  const homeKeywords = 'vegetarische rezepte, vegane rezepte, veggie rezepte, gesunde rezepte, schnelle rezepte, einfache rezepte, deutsche küche, kochen, vegetarisch';

  return {
    title: "Vegetarische & Vegane Rezepte | Lecker & Gesund | Veggie Rezepte",
    description: "Entdecke köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen Gerichten bis zu festlichen Menüs - einfach zubereitet und gesund.",
    keywords: homeKeywords,
    openGraph: {
      title: "Vegetarische & Vegane Rezepte | Lecker & Gesund | Veggie Rezepte",
      description: "Entdecke köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen Gerichten bis zu festlichen Menüs - einfach zubereitet und gesund.",
      url: canonicalUrl,
      siteName: "Veggie-Rezepte",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Vegetarische & Vegane Rezepte | Lecker & Gesund | Veggie Rezepte",
      description: "Entdecke köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen Gerichten bis zu festlichen Menüs - einfach zubereitet und gesund.",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  }
}

// Generate structured data for homepage
export async function generateStructuredData() {
  // Determine if we're in development or production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Set the base URL based on environment
  const baseUrl = isDevelopment 
    ? 'http://localhost:3000'
    : 'https://veggie-rezepte.de';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Veggie-Rezepte',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/rezepte/alle?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    description: 'Entdecke köstliche vegetarische und vegane Rezepte für jeden Tag. Von schnellen Gerichten bis zu festlichen Menüs - einfach zubereitet und gesund.'
  };
}

export default async function Home() {
  const mainCourses = recipes.filter((recipe: Recipe) => recipe.category === "Hauptgerichte")
  const casseroles = recipes.filter((recipe: Recipe) => recipe.category === "Aufläufe")
  const soups = recipes.filter((recipe: Recipe) => recipe.category === "Suppen")
  const salads = recipes.filter((recipe: Recipe) => recipe.category === "Salate")
  const breakfast = recipes.filter((recipe: Recipe) => recipe.category === "Frühstück")
  const desserts = recipes.filter((recipe: Recipe) => recipe.category === "Desserts")

  // Generate structured data for this page
  const structuredData = await generateStructuredData();

  return (
    <>
      {/* Add structured data script */}
      {structuredData && (
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
        <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
                src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1920&auto=format&fit=crop&fm=webp"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
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
              <Link href="/rezepte/alle">
                <Button size="lg" className="bg-white text-[rgb(58,125,84)] hover:bg-white/90">
                Rezepte entdecken
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories Section */}
          <section className="cp-list layout-beta max-w-[1168px] mx-auto mt-[50px] mb-[50px] lg:mb-[50px] relative">
            <div className="cp-list__inner flex sm:grid sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-4 overflow-x-auto pb-4 sm:pb-0 scrollbar-none px-4">
              <Link href="/rezepte/alle?tag=Mediterran" className="cat flex-shrink-0 sm:flex-auto flex flex-col items-center w-[120px] sm:w-auto">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Mediterrane Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Mediterran</span>
              </Link>

              <Link href="/rezepte/alle?tag=Schnell" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Schnelle Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Schnell</span>
              </Link>

              <Link href="/rezepte/alle?tag=Gemüse" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Gemüse Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Gemüse</span>
              </Link>

              <Link href="/rezepte/alle?tag=Bowl" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Bowl Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Bowl</span>
              </Link>

              <Link href="/rezepte/alle?tag=Beilage" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Beilage Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Beilage</span>
              </Link>

              <Link href="/rezepte/alle?tag=Käse" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Käse Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Käse</span>
              </Link>

              <Link href="/rezepte/alle?tag=Pasta" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Pasta Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Pasta</span>
              </Link>

              <Link href="/rezepte/alle?tag=Indisch" className="cat flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__image w-[120px] h-[120px] overflow-hidden rounded-full">
                  <Image
                    alt="Indische Rezepte"
                    loading="lazy"
                    decoding="async"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=120&auto=format&fit=crop&fm=webp"
                    sizes="(max-width: 120px) 100vw, 120px"
                  />
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Indisch</span>
              </Link>

              <Link href="/rezepte/alle" className="cat cat--all-recipes flex-[0_0_calc(50%-8px)] sm:flex-auto flex flex-col items-center">
                <span className="cat__icon w-[120px] h-[120px] flex items-center justify-center rounded-full bg-brand">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
                <span className="cat__name mt-2 font-['Montserrat'] text-base font-bold uppercase text-center w-full !text-black">Alle Rezepte</span>
              </Link>
            </div>
          </section>

          {/* Popular Recipes Section */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[100vw] after:bg-brand">
                Beliebte Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Large vertical image */}
              {casseroles[0] && (
                <article className="post-summary post-summary--quinary lg:col-span-4">
                  <Link href={`/${casseroles[0].slug}`} className="block h-full">
                    <div className="post-summary__image relative w-full lg:w-[368px] h-full overflow-hidden rounded-lg">
                      <Image
                        alt={casseroles[0].title}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={casseroles[0].image}
                        sizes="(max-width: 768px) 100vw, 368px"
                      />
                      <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                        <div className="bg-white px-3 py-[7px] w-fit whitespace-normal mr-[20px]">
                          <h2 className="post-summary__title text-3xl font-bold font-['Montserrat'] uppercase text-black">
                            <span className="inline-block">{casseroles[0].title}</span>
                          </h2>
                        </div>
                        {casseroles[0].prepTime && (
                          <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                            <span className="text-xs text-black/80 font-['Montserrat'] uppercase">{casseroles[0].prepTime} Min</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              )}

              {/* Grid of 4 smaller images */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  soups[0],
                  salads[0],
                  breakfast[0],
                  desserts[0]
                ].map((recipe: Recipe) => (
                  <article key={recipe.slug} className="post-summary post-summary--quinary">
                    <Link href={`/${recipe.slug}`} className="block">
                      <div className="post-summary__image relative w-full lg:w-[368px] aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          alt={recipe.title}
                          loading="lazy"
                          decoding="async"
                          fill
                          className="object-cover"
                          src={recipe.image}
                          sizes="(max-width: 768px) 50vw, 368px"
                        />
                        <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                          <div className="bg-white px-3 py-[7px] inline-block mr-[20px]">
                            <h2 className="post-summary__title text-lg font-bold font-['Montserrat'] uppercase text-black">
                              <span>{recipe.title}</span>
                            </h2>
                          </div>
                          {recipe.prepTime && (
                            <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                              <span className="text-[10px] text-black/70 font-['Montserrat'] uppercase">{recipe.prepTime} Min</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Recipe Sections - Hauptgerichte */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[100vw] after:bg-brand">
                Hauptgerichte Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {mainCourses.slice(0, 8).map((recipe: Recipe) => (
                <article key={recipe.slug} className="post-summary post-summary--quinary">
                  <Link href={`/${recipe.slug}`} className="block">
                    <div className="post-summary__image relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        alt={recipe.title}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={recipe.image}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="post-summary__content mt-4">
                      <h2 className="post-summary__title text-base sm:text-lg font-bold font-['Montserrat'] uppercase text-black">
                        <span>{recipe.title}</span>
                      </h2>
                      {recipe.prepTime && (
                        <span className="text-xs sm:text-sm text-black/70 font-['Montserrat'] uppercase">{recipe.prepTime} Min</span>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <footer className="mt-8 text-left">
              <Link href="/kategorien/hauptgerichte" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[14px] sm:text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-4 sm:px-6 py-3 sm:py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
                Mehr Hauptgerichte Rezepte
              </Link>
            </footer>
          </section>

          {/* Soups Section */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-screen after:bg-brand">
                Suppen Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {soups.slice(0, 4).map((recipe: Recipe) => (
                <article key={recipe.slug} className="post-summary post-summary--quinary">
                  <Link href={`/${recipe.slug}`} className="block">
                    <div className="post-summary__image relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        alt={recipe.title}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={recipe.image}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="post-summary__content mt-4">
                      <h2 className="post-summary__title text-base sm:text-lg font-bold font-['Montserrat'] uppercase text-black">
                        <span>{recipe.title}</span>
                      </h2>
                      {recipe.prepTime && (
                        <span className="text-xs sm:text-sm text-black/70 font-['Montserrat'] uppercase">{recipe.prepTime} Min</span>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <footer className="mt-8 text-left">
              <Link href="/kategorien/suppen" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[14px] sm:text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-4 sm:px-6 py-3 sm:py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
                Mehr Suppen Rezepte
              </Link>
            </footer>
          </section>

          {/* Salads Section */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-screen after:bg-brand">
                Salate Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {salads.slice(0, 8).map((recipe: Recipe) => (
                <article key={recipe.slug} className="post-summary post-summary--quinary">
                  <Link href={`/${recipe.slug}`} className="block">
                    <div className="post-summary__image relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        alt={recipe.title}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={recipe.image}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="post-summary__content mt-4">
                      <h2 className="post-summary__title text-base sm:text-lg font-bold font-['Montserrat'] uppercase text-black">
                        <span>{recipe.title}</span>
                      </h2>
                      {recipe.prepTime && (
                        <span className="text-xs sm:text-sm text-black/70 font-['Montserrat'] uppercase">{recipe.prepTime} Min</span>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <footer className="mt-8 text-left">
              <Link href="/kategorien/salate" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[14px] sm:text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-4 sm:px-6 py-3 sm:py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
                Mehr Salate Rezepte
              </Link>
            </footer>
          </section>

          {/* Breakfast Section */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-screen after:bg-brand">
                Frühstück Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              {/* Large vertical image */}
              {breakfast[0] && (
                <article className="post-summary post-summary--quinary lg:col-span-4">
                  <Link href={`/${breakfast[0].slug}`} className="block h-full">
                    <div className="post-summary__image relative w-full lg:w-[368px] h-full overflow-hidden rounded-lg">
                      <Image
                        alt={breakfast[0].title}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={breakfast[0].image}
                        sizes="(max-width: 768px) 100vw, 368px"
                      />
                      <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                        <div className="bg-white px-3 py-[7px] w-fit whitespace-normal mr-[20px]">
                          <h2 className="post-summary__title text-2xl sm:text-3xl font-bold font-['Montserrat'] uppercase text-black">
                            <span className="inline-block">{breakfast[0].title}</span>
                          </h2>
                        </div>
                        {breakfast[0].prepTime && (
                          <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                            <span className="text-xs text-black/80 font-['Montserrat'] uppercase">{breakfast[0].prepTime} Min</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              )}

              {/* Grid of 4 smaller images */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  breakfast[1],
                  breakfast[2],
                  breakfast[3],
                  breakfast[4]
                ].filter(Boolean).map((recipe: Recipe) => (
                  <article key={recipe.slug} className="post-summary post-summary--quinary">
                    <Link href={`/${recipe.slug}`} className="block">
                      <div className="post-summary__image relative w-full lg:w-[368px] aspect-[4/3] overflow-hidden rounded-lg">
                        <Image
                          alt={recipe.title}
                          loading="lazy"
                          decoding="async"
                          fill
                          className="object-cover"
                          src={recipe.image}
                          sizes="(max-width: 768px) 100vw, 368px"
                        />
                        <div className="absolute bottom-5 left-5 flex flex-col gap-0.5">
                          <div className="bg-white px-3 py-[7px] inline-block mr-[20px]">
                            <h2 className="post-summary__title text-lg font-bold font-['Montserrat'] uppercase text-black">
                              <span>{recipe.title}</span>
                            </h2>
                          </div>
                          {recipe.prepTime && (
                            <div className="bg-white px-2 py-0 w-fit mr-[20px]">
                              <span className="text-[10px] text-black/70 font-['Montserrat'] uppercase">{recipe.prepTime} Min</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
            <footer className="mt-8 text-left">
              <Link href="/kategorien/fruehstueck" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[14px] sm:text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-4 sm:px-6 py-3 sm:py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
                Mehr Frühstück Rezepte
              </Link>
            </footer>
          </section>

          {/* Desserts Section */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-screen after:bg-brand">
                Desserts Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {desserts.slice(0, 4).map((recipe: Recipe) => (
                <article key={recipe.slug} className="post-summary post-summary--quinary">
                  <Link href={`/${recipe.slug}`} className="block">
                    <div className="post-summary__image relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        alt={recipe.title}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={recipe.image}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="post-summary__content mt-4">
                      <h2 className="post-summary__title text-base sm:text-lg font-bold font-['Montserrat'] uppercase text-black">
                        <span>{recipe.title}</span>
                      </h2>
                      {recipe.prepTime && (
                        <span className="text-xs sm:text-sm text-black/70 font-['Montserrat'] uppercase">{recipe.prepTime} Min</span>
                      )}
                    </div>
                  </Link>
                </article>
            ))}
          </div>
            <footer className="mt-8 text-left">
              <Link href="/kategorien/desserts" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[14px] sm:text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-4 sm:px-6 py-3 sm:py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
                Mehr Desserts Rezepte
              </Link>
            </footer>
        </section>

          {/* Casseroles Section */}
          <section className="block-post-listing layout-echo mx-4 sm:mx-auto max-w-[1168px] mt-[50px] mb-[50px] lg:mb-[65px] relative">
            <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
              <h2 className="font-['Montserrat'] font-extrabold leading-[28px] sm:leading-[33.59px] text-[28px] sm:text-[33.59px] uppercase m-0 relative inline-block text-black after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-screen after:bg-brand">
                Aufläufe Rezepte
              </h2>
            </header>
            <div className="block-post-listing__inner grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {casseroles.slice(0, 4).map((recipe: Recipe) => (
                <article key={recipe.slug} className="post-summary post-summary--quinary">
                  <Link href={`/${recipe.slug}`} className="block">
                    <div className="post-summary__image relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        alt={recipe.title}
                        loading="lazy"
                        decoding="async"
                        fill
                        className="object-cover"
                        src={recipe.image}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <div className="post-summary__content mt-4">
                      <h2 className="post-summary__title text-base sm:text-lg font-bold font-['Montserrat'] uppercase text-black">
                        <span>{recipe.title}</span>
                      </h2>
                      {recipe.prepTime && (
                        <span className="text-xs sm:text-sm text-black/70 font-['Montserrat'] uppercase">{recipe.prepTime} Min</span>
                      )}
                    </div>
                  </Link>
                </article>
            ))}
          </div>
            <footer className="mt-8 text-left">
              <Link href="/kategorien/auflaeufe" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[14px] sm:text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-4 sm:px-6 py-3 sm:py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
                Mehr Aufläufe Rezepte
              </Link>
            </footer>
        </section>

      </main>

      {/* Footer */}
        <footer className="border-t-2 border-black py-8 bg-muted">
        <div className="container text-center text-sm text-muted-foreground">
            <p className="font-['Montserrat'] font-bold">© 2025 Veggie-Rezepte.de - Alle Rechte vorbehalten</p>
        </div>
      </footer>
    </div>
    </>
  )
}
