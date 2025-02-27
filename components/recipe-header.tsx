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
  prepTime?: string
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
  servings,
  rating
}: RecipeHeaderProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      
      <div className="flex items-center gap-4 text-muted-foreground mb-6">
        {prepTime && (
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {prepTime}
          </span>
        )}
        {servings && (
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {servings} Portionen
          </span>
        )}
        {rating && (
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {rating}
          </span>
        )}
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <p className="text-lg mb-8">{description}</p>

      <div className="flex gap-2 mb-8">
        <Badge variant="secondary">{category}</Badge>
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </div>

      <div className="flex gap-4 mb-8">
        <Button variant="outline" size="lg">
          <Printer className="mr-2 h-4 w-4" />
          Drucken
        </Button>
        <Button variant="outline" size="lg">
          <BookmarkPlus className="mr-2 h-4 w-4" />
          Speichern
        </Button>
      </div>
    </div>
  )
}
