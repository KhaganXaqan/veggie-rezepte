import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star } from "lucide-react"

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
    <Link href={`/rezepte/${slug}`} className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg">
      <Card className="overflow-hidden transition-all hover:shadow-lg h-full">
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
            priority={false}
          />
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h3 className="text-lg font-semibold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground gap-4">
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