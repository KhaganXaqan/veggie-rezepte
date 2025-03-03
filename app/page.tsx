import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { recipes } from "@/lib/data"
import { Button } from "@/components/ui/button"
import type { Recipe } from "@/lib/data"

export const metadata: Metadata = {
  title: "Vegetarische Rezepte | Veggie Rezepte",
  description: "Die besten traditionellen und modernen vegetarischen Gerichte aus der deutschen Küche",
}

export default function Home() {
  const mainCourses = recipes.filter((recipe: Recipe) => recipe.category === "Hauptgerichte")
  const casseroles = recipes.filter((recipe: Recipe) => recipe.category === "Aufläufe")
  const soups = recipes.filter((recipe: Recipe) => recipe.category === "Suppen")
  const salads = recipes.filter((recipe: Recipe) => recipe.category === "Salate")
  const breakfast = recipes.filter((recipe: Recipe) => recipe.category === "Frühstück")
  const desserts = recipes.filter((recipe: Recipe) => recipe.category === "Desserts")

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
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

        {/* Recipe Sections */}
        <section className="block-post-listing layout-echo max-w-[1168px] mx-auto my-[50px] relative">
          <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
            <h2 className="font-['Montserrat'] font-extrabold leading-[33.59px] uppercase text-[33.59px] m-0 relative inline-block after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[calc(100vw-100%-22px)] after:bg-brand">
              Hauptgerichte Rezepte
            </h2>
          </header>
          <div className="block-post-listing__inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainCourses.slice(0, 4).map((recipe: Recipe) => (
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
                    />
                  </div>
                  <div className="post-summary__content mt-4">
                    <h2 className="post-summary__title text-lg font-bold font-['Montserrat'] uppercase">
                      <span>{recipe.title}</span>
                    </h2>
                    {recipe.prepTime && (
                      <span className="text-sm text-muted-foreground font-['Montserrat'] uppercase">{recipe.prepTime}</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <footer className="mt-8 text-left">
            <Link href="/kategorien/hauptgerichte" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-6 py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
              Mehr Hauptgerichte Rezepte
            </Link>
          </footer>
        </section>

        {/* Casseroles Section */}
        <section className="block-post-listing layout-echo max-w-[1168px] mx-auto my-[50px] relative">
          <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
            <h2 className="font-['Montserrat'] font-extrabold leading-[33.59px] uppercase text-[33.59px] m-0 relative inline-block after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[calc(100vw-100%-22px)] after:bg-brand">
              Aufläufe Rezepte
            </h2>
          </header>
          <div className="block-post-listing__inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    />
                  </div>
                  <div className="post-summary__content mt-4">
                    <h2 className="post-summary__title text-lg font-bold">
                      <span>{recipe.title}</span>
                    </h2>
                    {recipe.prepTime && (
                      <span className="text-sm text-muted-foreground">{recipe.prepTime}</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <footer className="mt-8 text-left">
            <Link href="/kategorien/auflaeufe" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-6 py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
              Mehr Aufläufe Rezepte
            </Link>
          </footer>
        </section>

        {/* Soups Section */}
        <section className="block-post-listing layout-echo max-w-[1168px] mx-auto my-[50px] relative">
          <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
            <h2 className="font-['Montserrat'] font-extrabold leading-[33.59px] uppercase text-[33.59px] m-0 relative inline-block after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[calc(100vw-100%-22px)] after:bg-brand">
              Suppen Rezepte
            </h2>
          </header>
          <div className="block-post-listing__inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    />
                  </div>
                  <div className="post-summary__content mt-4">
                    <h2 className="post-summary__title text-lg font-bold">
                      <span>{recipe.title}</span>
                    </h2>
                    {recipe.prepTime && (
                      <span className="text-sm text-muted-foreground">{recipe.prepTime}</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <footer className="mt-8 text-left">
            <Link href="/kategorien/suppen" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-6 py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
              Mehr Suppen Rezepte
            </Link>
          </footer>
        </section>

        {/* Salads Section */}
        <section className="block-post-listing layout-echo max-w-[1168px] mx-auto my-[50px] relative">
          <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
            <h2 className="font-['Montserrat'] font-extrabold leading-[33.59px] uppercase text-[33.59px] m-0 relative inline-block after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[calc(100vw-100%-22px)] after:bg-brand">
              Salate Rezepte
            </h2>
          </header>
          <div className="block-post-listing__inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {salads.slice(0, 4).map((recipe: Recipe) => (
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
                    />
                  </div>
                  <div className="post-summary__content mt-4">
                    <h2 className="post-summary__title text-lg font-bold">
                      <span>{recipe.title}</span>
                    </h2>
                    {recipe.prepTime && (
                      <span className="text-sm text-muted-foreground">{recipe.prepTime}</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <footer className="mt-8 text-left">
            <Link href="/kategorien/salate" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-6 py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
              Mehr Salate Rezepte
            </Link>
          </footer>
        </section>

        {/* Breakfast Section */}
        <section className="block-post-listing layout-echo max-w-[1168px] mx-auto my-[50px] relative">
          <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
            <h2 className="font-['Montserrat'] font-extrabold leading-[33.59px] uppercase text-[33.59px] m-0 relative inline-block after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[calc(100vw-100%-22px)] after:bg-brand">
              Frühstück Rezepte
            </h2>
          </header>
          <div className="block-post-listing__inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {breakfast.slice(0, 4).map((recipe: Recipe) => (
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
                    />
                  </div>
                  <div className="post-summary__content mt-4">
                    <h2 className="post-summary__title text-lg font-bold">
                      <span>{recipe.title}</span>
                    </h2>
                    {recipe.prepTime && (
                      <span className="text-sm text-muted-foreground">{recipe.prepTime}</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <footer className="mt-8 text-left">
            <Link href="/kategorien/fruehstueck" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-6 py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
              Mehr Frühstück Rezepte
            </Link>
          </footer>
        </section>

        {/* Desserts Section */}
        <section className="block-post-listing layout-echo max-w-[1168px] mx-auto my-[50px] relative">
          <header className="flex relative overflow-hidden mb-[1.5rem] w-full">
            <h2 className="font-['Montserrat'] font-extrabold leading-[33.59px] uppercase text-[33.59px] m-0 relative inline-block after:content-[''] after:absolute after:left-[calc(100%+22px)] after:top-[calc(50%-1.5px)] after:h-[3px] after:w-[calc(100vw-100%-22px)] after:bg-brand">
              Desserts Rezepte
            </h2>
          </header>
          <div className="block-post-listing__inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                    />
                  </div>
                  <div className="post-summary__content mt-4">
                    <h2 className="post-summary__title text-lg font-bold">
                      <span>{recipe.title}</span>
                    </h2>
                    {recipe.prepTime && (
                      <span className="text-sm text-muted-foreground">{recipe.prepTime}</span>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <footer className="mt-8 text-left">
            <Link href="/kategorien/desserts" className="block-post-listing__more inline-block font-['Montserrat'] font-black tracking-[2.5px] uppercase text-[16px] border-2 border-[#292929] text-[#292929] bg-white px-6 py-4 no-underline hover:bg-[#f5f5f5] hover:text-[#292929] transition-colors rounded-md">
              Mehr Desserts Rezepte
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
  )
}