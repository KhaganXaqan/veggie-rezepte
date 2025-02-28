'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
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
    <div className="max-w-xl mx-auto px-4 mb-8">
      <h2 className="text-2xl font-medium mb-6">Ähnliche Rezepte:</h2>

      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={handlePrevious}
          disabled={!canNavigatePrevious}
          className={cn(
            'absolute left-0 top-[calc(50%-1.5rem)] -translate-y-1/2 -translate-x-4 rounded-full p-2 shadow-md z-10 transition-all',
            canNavigatePrevious
              ? 'bg-white hover:bg-gray-50 hover:scale-110 cursor-pointer'
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
            'absolute right-0 top-[calc(50%-1.5rem)] -translate-y-1/2 translate-x-4 rounded-full p-2 shadow-md z-10 transition-all',
            canNavigateNext
              ? 'bg-white hover:bg-gray-50 hover:scale-110 cursor-pointer'
              : 'opacity-0' // Hide when no next items
          )}
          aria-label="Next recipes"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Recipe Cards */}
        <div className="flex gap-4 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out w-full"
            style={{
              transform: `translateX(-${currentIndex * (100 / recipesPerPage)}%)`,
            }}
          >
            {similarRecipes.map((recipe, index) => (
              <Link
                key={recipe.slug}
                href={`/${recipe.slug}`}
                className={cn(
                  'flex-none w-[calc(33.333%-0.67rem)] transition-opacity duration-500',
                  index >= currentIndex && index < currentIndex + recipesPerPage
                    ? 'opacity-100'
                    : 'opacity-0'
                )}
              >
                <div className="relative aspect-square mb-2">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-center font-medium">{recipe.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}