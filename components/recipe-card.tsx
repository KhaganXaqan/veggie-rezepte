import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star } from "lucide-react"

const defaultImage = "https://placehold.co/600x400/png"

interface RecipeCardProps {
  title?: string
  image?: string
  prepTime?: string
  rating?: number
  category?: string
  slug?: string
}

export function RecipeCard({ title, image, prepTime, rating, category, slug }: RecipeCardProps) {
  return (
    <Link href={`/${slug}`} className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
      <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
        <div className="aspect-[4/3] relative w-full">
          <Image
            src={image || defaultImage}
            alt={title || 'Recipe image'}
            fill
            className="object-cover"
            loading="lazy"
            priority={false}
          />
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <Badge variant="secondary" className="mb-2 w-fit">
            {category}
          </Badge>
          <h3 className="text-lg font-semibold line-clamp-2 mb-2 flex-grow">
            {title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground gap-4 mt-auto">
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" aria-hidden="true" />
              <span>{prepTime}</span>
            </span>
            <span className="flex items-center ml-auto">
              <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span>{rating?.toFixed(1)}</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}