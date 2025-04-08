'use client'

import Link from "next/link"
import Image from "next/image"
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

  const baseStyles = {
    margin: 0,
    padding: 0,
    fontFamily: '"Source Sans 3", sans-serif',
    outline: 0,
    color: "#0b3558",
    fontSize: "18px",
    lineHeight: 1.625,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }

  return (
    <div className={`fav-recipe-card ${isTall ? 'tall' : 'short'}`}>
      <div className="fav-recipe-card-thumb">
        <Link href={`/${recipe.slug}`}>
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={292}
            height={isTall ? 405 : 250}
            className="object-cover w-full h-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 292px"
          />
        </Link>
      </div>
      <div className="fav-recipe-card-title">
        <Link href={`/${recipe.slug}`} className="!text-black font-['Montserrat'] text-sm sm:text-base md:text-lg font-bold uppercase hover:text-[#db747a]">
          {recipe.title}
        </Link>
      </div>
      <div className="details-link">
        <Link href={`/${recipe.slug}`} className="text-[#db747a] font-bold text-xs sm:text-sm hover:text-[#db747a]/80">
          Rezeptdetails <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
} 