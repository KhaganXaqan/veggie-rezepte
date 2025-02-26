'use client'

import Link from "next/link"
import type { Recipe } from "@/lib/data"

export function RecipeCardMasonry({ 
  recipe, 
  index 
}: { 
  recipe: Recipe
  index: number 
}) {
  // Get the row number (0-based) and position in row (0-3)
  const rowNumber = Math.floor(index / 4)
  const positionInRow = index % 4

  // First row pattern: tall, short, tall, short
  // Second row pattern: short, tall, tall, short
  const isEvenRow = rowNumber % 2 === 0
  
  const isTall = isEvenRow
    ? (positionInRow === 0 || positionInRow === 2) // First row pattern
    : (positionInRow === 1 || positionInRow === 2) // Second row pattern

  return (
    <div className={`fav-recipe-card ${isTall ? 'tall' : 'short'}`}>
      <div className="fav-recipe-card-thumb">
        <Link 
          href={`/rezepte/${recipe.slug}`}
          title={recipe.title}
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            width={292.75}
            height={isTall ? 405 : 250}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="fav-recipe-card-title">
        <Link 
          href={`/rezepte/${recipe.slug}`}
          title={recipe.title}
        >
          {recipe.title}
        </Link>
        <div className="details-link">
          <Link 
            href={`/rezepte/${recipe.slug}`}
            title={recipe.title}
          >
            Rezeptdetails <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
} 