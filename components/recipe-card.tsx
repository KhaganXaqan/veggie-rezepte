import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react"
import { Recipe } from "@/lib/recipes"

interface RecipeCardProps {
  recipe: Recipe
  categoryName: string
}

export function RecipeCard({ recipe, categoryName }: RecipeCardProps) {
  const totalTime = (recipe.prepTime ? parseInt(recipe.prepTime) : 0) + 
                   (recipe.cookTime ? parseInt(recipe.cookTime) : 0)

  return (
    <Link 
      href={`/rezepte/${recipe.slug}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-green-600 rounded-lg"
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full hover:scale-[1.02]">
        <div className="aspect-[4/3] relative">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
          <Image
            src={recipe.imagePath}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            priority={false}
          />
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="secondary" className="bg-white/90 hover:bg-white">
              {categoryName}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold line-clamp-2 mb-2 group-hover:text-green-600 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {recipe.description}
          </p>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{totalTime} Min.</span>
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" aria-hidden="true" />
              <span>{recipe.servings} Port.</span>
            </span>
            <span className="flex items-center gap-1 ml-auto">
              <ChefHat className="h-4 w-4" aria-hidden="true" />
              <span>{recipe.difficulty}</span>
            </span>
          </div>
          <div className="mt-4 pt-4 border-t flex items-center justify-end text-sm font-medium text-green-600">
            Rezept ansehen
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}