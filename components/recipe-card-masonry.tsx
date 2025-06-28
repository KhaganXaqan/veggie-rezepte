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

  // Generate comprehensive alt text for SEO
  const altText = `${recipe.title} - Vegetarisches ${recipe.category} Rezept mit ${recipe.prepTime || 30} Minuten Zubereitungszeit${recipe.rating ? `, bewertet mit ${recipe.rating} von 5 Sternen` : ''}`

  return (
    <article 
      className={`fav-recipe-card ${isTall ? 'tall' : 'short'}`} 
      itemScope 
      itemType="https://schema.org/Recipe"
      role="article"
      aria-label={`Rezept: ${recipe.title}`}
    >
      <div className="fav-recipe-card-thumb">
        <Link 
          href={`/${recipe.slug}`} 
          aria-label={`Zum vollständigen Rezept: ${recipe.title} - ${recipe.description}`}
          title={`${recipe.title} - Klicken für das vollständige Rezept`}
        >
          <Image
            src={recipe.image}
            alt={altText}
            width={292}
            height={isTall ? 405 : 250}
            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 292px"
            loading="lazy"
            itemProp="image"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </Link>
      </div>
      
      <header className="fav-recipe-card-title">
        <h2>
          <Link 
            href={`/${recipe.slug}`} 
            className="!text-black font-['Montserrat'] text-sm sm:text-base md:text-lg font-bold uppercase hover:text-[#db747a] transition-colors duration-200"
            itemProp="name"
            title={`Rezept für ${recipe.title}`}
          >
            {recipe.title}
          </Link>
        </h2>
      </header>
      
      {/* Visible recipe metadata for users */}
      <div className="recipe-meta text-xs text-gray-600 mt-1 mb-2">
        <span className="inline-flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <time itemProp="prepTime" dateTime={`PT${recipe.prepTime || 30}M`}>
            {recipe.prepTime || 30} Min
          </time>
        </span>
        {recipe.rating && (
          <span className="ml-3 inline-flex items-center gap-1">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{recipe.rating}</span>
          </span>
        )}
      </div>
      
      {/* Hidden structured data for SEO */}
      <div className="sr-only" aria-hidden="true">
        <span itemProp="description">{recipe.description}</span>
        <span itemProp="recipeCategory">{recipe.category}</span>
        <span itemProp="recipeCuisine">Vegetarisch</span>
        <span itemProp="recipeYield">{recipe.servings || 4} Portionen</span>
        <div itemProp="author" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Veggie Rezepte</span>
        </div>
        {recipe.rating && (
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <span itemProp="ratingValue">{recipe.rating}</span>
            <span itemProp="reviewCount">{recipe.reviews || 50}</span>
            <span itemProp="bestRating">5</span>
            <span itemProp="worstRating">1</span>
          </div>
        )}
        {recipe.nutrition && (
          <div itemProp="nutrition" itemScope itemType="https://schema.org/NutritionInformation">
            <span itemProp="calories">{recipe.nutrition.calories} kcal</span>
            <span itemProp="proteinContent">{recipe.nutrition.protein}</span>
            <span itemProp="carbohydrateContent">{recipe.nutrition.carbs}</span>
            <span itemProp="fatContent">{recipe.nutrition.fat}</span>
          </div>
        )}
        <time itemProp="datePublished" dateTime={recipe.createdDate?.toISOString()}>
          {recipe.createdDate?.toLocaleDateString('de-DE')}
        </time>
        {recipe.updatedDate && (
          <time itemProp="dateModified" dateTime={recipe.updatedDate.toISOString()}>
            {recipe.updatedDate.toLocaleDateString('de-DE')}
          </time>
        )}
      </div>
      
      <footer className="details-link">
        <Link 
          href={`/${recipe.slug}`} 
          className="text-[#db747a] font-bold text-xs sm:text-sm hover:text-[#db747a]/80 transition-colors duration-200 inline-flex items-center gap-1"
          aria-label={`Vollständiges Rezept für ${recipe.title} mit Zutaten und Anleitung anzeigen`}
        >
          <span>Rezeptdetails</span>
          <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
        </Link>
      </footer>
    </article>
  )
}