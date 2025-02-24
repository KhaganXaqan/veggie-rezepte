import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllCategories } from "@/lib/recipes"
import Image from "next/image"

export default function CategoriesPage() {
  const categories = getAllCategories()

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold mb-8">Kategorien</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/kategorien/${category.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <Image
                  src={category.imagePath}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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