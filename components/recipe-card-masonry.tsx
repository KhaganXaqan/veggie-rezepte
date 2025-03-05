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
            className="object-cover"
          />
        </Link>
      </div>
      <div className="fav-recipe-card-title">
        <Link href={`/${recipe.slug}`} style={{
          ...baseStyles,
          fontSize: "22px !important",
          fontWeight: "800 !important",
          lineHeight: "1em !important",
          color: "#0b3558 !important",
          display: "block",
          transition: ".3s",
          textDecoration: "none !important",
          textAlign: "left"
        }}>
          {recipe.title}
        </Link>
      </div>
      <div className="details-link">
        <Link href={`/${recipe.slug}`} style={{
          ...baseStyles,
          fontSize: "15px",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#db747a",
          display: "inline-block",
          transition: ".3s",
          position: "relative",
          paddingBottom: "5px"
        }}>
          Rezeptdetails <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="recipe-card__content mt-4">
        <h2 className="recipe-card__title text-base sm:text-lg font-bold font-['Montserrat'] uppercase text-black">
          {recipe.title}
        </h2>
        {recipe.prepTime && (
          <span className="text-xs sm:text-sm text-black/70 font-['Montserrat'] uppercase">
            {recipe.prepTime}
          </span>
        )}
      </div>
    </div>
  )
} 