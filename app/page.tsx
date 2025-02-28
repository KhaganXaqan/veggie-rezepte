import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { RecipeCard } from "@/components/recipe-card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Vegetarische Rezepte | Veggie Rezepte",
  description: "Die besten traditionellen und modernen vegetarischen Gerichte aus der deutschen Küche",
}

const featuredRecipes = [
  {
    title: "Kartoffelklöße",
    image: "images/Miscellaneous/kartoffelkloesse.webp",
    prepTime: "60 Min.",
    rating: 4.8,
    category: "Traditionell",
    slug: "kartoffelkloesse"
  },
  {
    title: "Spinat-Käse Lasagne",
    image: "images/MainCourses/spinat-kaese-lasagne.jpg",
    prepTime: "50 Min.",
    rating: 4.7,
    category: "Aufläufe",
    slug: "spinat-kaese-lasagne"
  },
  {
    title: "Käsespätzle",
    image: "images/MainCourses/kaesespaetzle.jpg",
    prepTime: "45 Min.",
    rating: 4.9,
    category: "Traditionell",
    slug: "kaesespaetzle"
  }
]

export default function Home() {
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
            />
          </div>
          <div className="relative z-20 text-center text-white px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Vegetarische Rezepte
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Die besten traditionellen und modernen vegetarischen Gerichte aus der deutschen Küche
            </p>
            <Link href="/rezepte/alle">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Rezepte entdecken
              </Button>
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-8">Beliebte Kategorien</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Hauptgerichte", slug: "hauptgerichte" },
              { name: "Aufläufe", slug: "auflaeufe" },
              { name: "Suppen", slug: "suppen" },
              { name: "Salate", slug: "salate" }
            ].map((category) => (
              <Link key={category.slug} href={`/kategorien/${category.slug}`}>
                <Button
                  variant="outline"
                  className="h-24 text-lg w-full"
                >
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Recipes */}
        <section className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.slug}
                title={recipe.title}
                image={recipe.image}
                prepTime={recipe.prepTime}
                rating={recipe.rating}
                category={recipe.category}
                slug={recipe.slug}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted">
        <div className="container text-center text-sm text-muted-foreground">
          <p> 2025 Veggie-Rezepte.de - Alle Rechte vorbehalten</p>
        </div>
      </footer>
    </div>
  )
}