import Image from "next/image"
import { Clock, Users, Star, Printer, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type RecipeHeaderProps = {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  prepTime?: number
  cookingTime?: number
  servings?: number
  rating?: number
}

export function RecipeHeader({
  title,
  description,
  image,
  category,
  tags,
  prepTime,
  cookingTime,
  servings,
  rating
}: RecipeHeaderProps) {
  return (
    <div className="relative">
      {/* Hero Image with Parallax */}
      <div className="relative h-[60vh] overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transform hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        
        {/* Content overlaid on image */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-white/20 backdrop-blur-sm">
              {category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
            <p className="text-lg text-white/90 mb-6 max-w-2xl drop-shadow-md">
              {description}
            </p>
            
            {/* Recipe Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-white/90 mb-6">
              {prepTime && (
                <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                  <Clock className="h-5 w-5" />
                  {prepTime}
                </span>
              )}
              {servings && (
                <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                  <Users className="h-5 w-5" />
                  {servings} Portionen
                </span>
              )}
              {rating && (
                <span className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  {rating}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" size="sm">
          <Printer className="h-4 w-4 mr-2" />
          Drucken
        </Button>
        <Button variant="outline" size="sm">
          <BookmarkPlus className="h-4 w-4 mr-2" />
          Speichern
        </Button>
      </div>
    </div>
  )
}
