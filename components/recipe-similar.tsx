'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Utensils } from 'lucide-react'
import { Recipe } from '@/lib/data'
import { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'

type RecipeSimilarProps = {
  recipes: Recipe[]
  currentRecipe: Recipe
}

export function RecipeSimilar({ recipes, currentRecipe }: RecipeSimilarProps) {
  // Filter recipes from the same category, excluding the current recipe
  const similarRecipes = recipes.filter(
    (recipe) =>
      recipe.category === currentRecipe.category &&
      recipe.slug !== currentRecipe.slug
  )

  const [currentIndex, setCurrentIndex] = useState(0)
  const recipesPerPage = 3

  // Calculate if we can navigate
  const canNavigatePrevious = currentIndex > 0
  const canNavigateNext = currentIndex < similarRecipes.length - recipesPerPage

  // Get current visible recipes
  const visibleRecipes = useMemo(() => {
    return similarRecipes.slice(currentIndex, currentIndex + recipesPerPage)
  }, [similarRecipes, currentIndex])

  // Handle navigation
  const handlePrevious = () => {
    if (!canNavigatePrevious) return
    setCurrentIndex((prev) => prev - 1)
  }

  const handleNext = () => {
    if (!canNavigateNext) return
    setCurrentIndex((prev) => prev + 1)
  }

  if (similarRecipes.length <= 1) return null

  return (
    <div className="max-w-[86.666%] mx-auto">
      {/* Title with decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
        <h2 className="font-serif text-2xl font-bold text-[#0b3558] flex items-center gap-2">
          <span className="inline-block w-10 h-10 bg-[#db747a]/10 rounded-full flex items-center justify-center text-[#db747a]">
            <Utensils className="h-5 w-5" />
          </span>
          Ähnliche Rezepte
        </h2>
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
      </div>

      <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 mb-8">
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={!canNavigatePrevious}
            className={cn(
              'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full p-2 shadow-md z-10 transition-all',
              canNavigatePrevious
                ? 'bg-white hover:bg-[#db747a] hover:text-white hover:scale-110 cursor-pointer'
                : 'opacity-0' // Hide when no previous items
            )}
            aria-label="Previous recipes"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!canNavigateNext}
            className={cn(
              'absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full p-2 shadow-md z-10 transition-all',
              canNavigateNext
                ? 'bg-white hover:bg-[#db747a] hover:text-white hover:scale-110 cursor-pointer'
                : 'opacity-0' // Hide when no next items
            )}
            aria-label="Next recipes"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Recipe Cards */}
          <div className="flex gap-6 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out w-full"
              style={{
                transform: `translateX(-${currentIndex * (100 / recipesPerPage)}%)`,
              }}
            >
              {similarRecipes.map((recipe, index) => (
                <Link
                  key={recipe.slug}
                  href={`/${recipe.slug}`}
                  className={cn(
                    'flex-none w-[calc(33.333%-1rem)] transition-opacity duration-500',
                    index >= currentIndex && index < currentIndex + recipesPerPage
                      ? 'opacity-100'
                      : 'opacity-0'
                  )}
                >
                  <div className="group">
                    <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium text-center px-4">
                          Zum Rezept
                        </span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-[#0b3558] mb-2 hover:text-[#db747a] transition-colors">{recipe.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {recipe.description || ""}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}