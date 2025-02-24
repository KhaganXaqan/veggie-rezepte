import { Button } from "@/components/ui/button"
import { getAllRecipes, getAllCategories } from "@/lib/recipes"
import { RecipeCard } from "@/components/recipe-card"
import Link from "next/link"
import { ArrowRight, Leaf, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const recipes = getAllRecipes()
  const categories = getAllCategories()
  const featuredRecipes = recipes.slice(0, 6)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80 z-10" />
        <Image
          src="/uploads/images/Gemüse-Lasagne.jpeg"
          alt="Vegetarische Rezepte"
          width={1920}
          height={1080}
          className="object-cover w-full h-[600px]"
          priority
        />
        <div className="absolute inset-0 z-20 container flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-2xl">
            Entdecke die Vielfalt vegetarischer Küche
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl">
            Hunderte von köstlichen vegetarischen Rezepten für jeden Geschmack und jede Gelegenheit
          </p>
          <div className="flex gap-4">
            <Link href="/kategorien">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Kategorien entdecken
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/rezepte">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Alle Rezepte
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Leaf className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Vegetarisch</h3>
              <p className="text-muted-foreground">Entdecke die Vielfalt pflanzlicher Ernährung mit unseren kreativen Rezepten</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schnell & Einfach</h3>
              <p className="text-muted-foreground">Von schnellen Gerichten bis zu aufwändigen Rezepten - für jeden Anspruch</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <Star className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Beliebte Rezepte</h3>
              <p className="text-muted-foreground">Von der Community getestet und geliebt - unsere Top-Rezepte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Kategorien</h2>
          <Link href="/kategorien">
            <Button variant="ghost" className="text-green-600 hover:text-green-700">
              Alle Kategorien
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category) => (
            <Link 
              key={category.id}
              href={`/kategorien/${category.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={category.imagePath}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white/90 line-clamp-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Neueste Rezepte</h2>
            <Link href="/rezepte">
              <Button variant="ghost" className="text-green-600 hover:text-green-700">
                Alle Rezepte
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                categoryName={categories.find(c => c.id === recipe.categoryId)?.name || ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 container">
        <div className="bg-green-600 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bleib auf dem Laufenden
            </h2>
            <p className="text-white/90 mb-8">
              Abonniere unseren Newsletter und erhalte wöchentlich neue Rezepte, Tipps und Inspiration direkt in dein Postfach.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-green-600 hover:bg-white/90">
                Abonnieren
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}