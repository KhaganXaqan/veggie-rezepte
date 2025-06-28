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

  // Generate proper alt text for SEO
  const altText = `${recipe.title} - Vegetarisches Rezept mit ${recipe.prepTime || 30} Minuten Zubereitungszeit`

  return (
    <article className={`fav-recipe-card ${isTall ? 'tall' : 'short'}`} itemScope itemType="https://schema.org/Recipe">
      <div className="fav-recipe-card-thumb">
        <Link href={`/${recipe.slug}`} aria-label={`Zum Rezept: ${recipe.title}`}>
          <Image
            src={recipe.image}
            alt={altText}
            width={292}
            height={isTall ? 405 : 250}
            className="object-cover w-full h-auto"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 292px"
            loading="lazy"
            itemProp="image"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </Link>
      </div>
      <div className="fav-recipe-card-title">
        <Link 
          href={`/${recipe.slug}`} 
          className="!text-black font-['Montserrat'] text-sm sm:text-base md:text-lg font-bold uppercase hover:text-[#db747a] transition-colors duration-200"
          itemProp="name"
        >
          {recipe.title}
        </Link>
      </div>
      
      {/* Hidden structured data for SEO */}
      <div style={{ display: 'none' }}>
        <span itemProp="description">{recipe.description}</span>
        <span itemProp="recipeCategory">{recipe.category}</span>
        <span itemProp="recipeCuisine">Vegetarisch</span>
        <time itemProp="prepTime" dateTime={`PT${recipe.prepTime || 30}M`}>{recipe.prepTime || 30} Minuten</time>
        <span itemProp="recipeYield">{recipe.servings || 4} Portionen</span>
        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Veggie Rezepte</span>
        </div>
        {recipe.rating && (
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <span itemProp="ratingValue">{recipe.rating}</span>
            <span itemProp="reviewCount">{recipe.reviews || 50}</span>
          </div>
        )}
      </div>
      
      <div className="details-link">
        <Link 
          href={`/${recipe.slug}`} 
          className="text-[#db747a] font-bold text-xs sm:text-sm hover:text-[#db747a]/80 transition-colors duration-200"
          aria-label={`Vollständiges Rezept für ${recipe.title} anzeigen`}
        >
          Rezeptdetails <i className="fas fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </article>
  )
}