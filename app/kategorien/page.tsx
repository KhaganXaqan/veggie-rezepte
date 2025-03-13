'use client'

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"

export default function Categories() {
  const categories = [
    {
      name: "Hauptgerichte",
      slug: "hauptgerichte",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Entdecke köstliche vegetarische Hauptgerichte für jeden Tag - von herzhaften Pasta-Gerichten bis zu raffinierten Gemüse-Kreationen."
    },
    {
      name: "Aufläufe",
      slug: "auflaeufe",
      image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Vegetarische Aufläufe sind perfekt zum Vorbereiten und bieten wunderbare Aromen-Kombinationen für die ganze Familie."
    },
    {
      name: "Suppen",
      slug: "suppen",
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Von cremigen Gemüsesuppen bis zu klaren Brühen - unsere vegetarischen Suppenrezepte wärmen Körper und Seele."
    },
    {
      name: "Salate",
      slug: "salate",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Frische, knackige Salate mit saisonalen Zutaten - die perfekte leichte Mahlzeit oder Beilage zu deinem Hauptgericht."
    },
    {
      name: "Frühstück",
      slug: "fruehstueck",
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Starte deinen Tag mit einem energiereichen vegetarischen Frühstück - von süßen Optionen bis zu herzhaften Alternativen."
    },
    {
      name: "Desserts",
      slug: "desserts",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=300&auto=format&fit=crop&fm=webp",
      description: "Kröne deine Mahlzeit mit einem verführerischen vegetarischen Dessert - von fruchtig-frisch bis schokoladig-süß."
    }
  ]
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="container py-8">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-8 !text-black text-center">Kategorien</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map(category => (
                <div key={category.slug} className="flex flex-col">
                  <Link 
                    href={`/kategorien/${category.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={category.image}
                        alt={`${category.name} Rezepte`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <h2 className="text-2xl font-['Montserrat'] font-bold uppercase text-white">
                          {category.name}
                        </h2>
                      </div>
                    </div>
                  </Link>
                  <p className="mt-3 text-sm text-black/80 font-['Montserrat']">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}