import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"

const categories = [
  {
    name: "Hauptgerichte",
    description: "Herzhafte Hauptspeisen für jeden Tag",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2670&auto=format&fit=crop",
    slug: "hauptgerichte"
  },
  {
    name: "Suppen",
    description: "Wärmende Suppen und Eintöpfe",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2671&auto=format&fit=crop",
    slug: "suppen"
  },
  {
    name: "Salate",
    description: "Frische und knackige Salate",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop",
    slug: "salate"
  },
  {
    name: "Aufläufe",
    description: "Überbackene Köstlichkeiten",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2670&auto=format&fit=crop",
    slug: "auflaeufe"
  },
  {
    name: "Desserts",
    description: "Süße Versuchungen",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=2670&auto=format&fit=crop",
    slug: "desserts"
  },
  {
    name: "Frühstück",
    description: "Der perfekte Start in den Tag",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2670&auto=format&fit=crop",
    slug: "fruehstueck"
  }
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Kategorien</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.slug} 
              href={`/kategorien/${category.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                </div>
              </div>
              <p className="text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}