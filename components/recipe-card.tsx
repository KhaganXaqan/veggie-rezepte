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
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <CardContent className="p-3 sm:p-4 flex flex-col flex-grow">
          <Badge variant="secondary" className="mb-1 sm:mb-2 w-fit text-xs sm:text-sm">
            {category}
          </Badge>
          <h3 className="text-base sm:text-lg font-semibold line-clamp-2 mb-1 sm:mb-2 flex-grow">
            {title}
          </h3>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground gap-3 sm:gap-4 mt-auto">
            <span className="flex items-center">
              <Clock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
              <span>{prepTime}</span>
            </span>
            <span className="flex items-center ml-auto">
              <Star className="mr-1 h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span>{rating?.toFixed(1)}</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}