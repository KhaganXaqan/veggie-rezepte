import { recipes } from './data'
import type { Recipe } from './data'

// Extended Recipe type with popularity score
export interface RecipeWithPopularity extends Recipe {
  popularityScore?: number
}

// Add popularity scores to recipes (simulated data)
const recipesWithPopularity: RecipeWithPopularity[] = recipes.map(recipe => ({
  ...recipe,
  // Generate realistic popularity scores based on recipe characteristics
  popularityScore: generatePopularityScore(recipe)
}))

function generatePopularityScore(recipe: Recipe): number {
  let score = 50 // Base score
  
  // Boost score based on rating
  if (recipe.rating) {
    score += (recipe.rating - 3) * 15 // Higher ratings get more points
  }
  
  // Boost score for quick recipes
  const totalTime = (recipe.prepTime || 30) + (recipe.cookingTime || 0)
  if (totalTime <= 20) score += 20
  else if (totalTime <= 30) score += 10
  
  // Boost score for popular categories
  if (recipe.category === 'Hauptgerichte') score += 15
  if (recipe.category === 'Desserts') score += 10
  if (recipe.category === 'Frühstück') score += 8
  
  // Boost score for recipes with popular tags
  if (recipe.tags?.includes('Schnell')) score += 15
  if (recipe.tags?.includes('Einfach')) score += 10
  if (recipe.tags?.includes('Vegan')) score += 12
  if (recipe.tags?.includes('Mediterran')) score += 8
  
  // Add some randomness to make it more realistic
  score += Math.random() * 20 - 10
  
  // Ensure score is between 0 and 100
  return Math.max(0, Math.min(100, Math.round(score)))
}

export type FilterType = 'newest' | 'popular' | 'quick' | null

export interface FilterResult {
  recipes: RecipeWithPopularity[]
  count: number
  message?: string
}

export function filterRecipes(filterType: FilterType): FilterResult {
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  
  let filteredRecipes: RecipeWithPopularity[] = []
  let message: string | undefined
  
  switch (filterType) {
    case 'newest':
      // Filter recipes updated within the last 30 days
      filteredRecipes = recipesWithPopularity.filter(recipe => {
        if (!recipe.updatedDate) return false
        return recipe.updatedDate >= thirtyDaysAgo
      })
      
      // Sort by most recent updatedDate first
      filteredRecipes.sort((a, b) => {
        const dateA = a.updatedDate?.getTime() || 0
        const dateB = b.updatedDate?.getTime() || 0
        return dateB - dateA
      })
      
      if (filteredRecipes.length === 0) {
        message = "Keine neuen Rezepte in den letzten 30 Tagen gefunden. Versuch einen anderen Filter!"
      }
      break
      
    case 'popular':
      // Sort by popularity score (highest first)
      filteredRecipes = [...recipesWithPopularity].sort((a, b) => {
        const scoreA = a.popularityScore || 0
        const scoreB = b.popularityScore || 0
        return scoreB - scoreA
      })
      
      // Take top 20 most popular recipes
      filteredRecipes = filteredRecipes.slice(0, 20)
      break
      
    case 'quick':
      // Filter recipes where prepTime + cookingTime <= 20 minutes
      filteredRecipes = recipesWithPopularity.filter(recipe => {
        const prepTime = recipe.prepTime || 0
        const cookingTime = recipe.cookingTime || 0
        const totalTime = prepTime + cookingTime
        return totalTime <= 20
      })
      
      // Sort by total time (quickest first)
      filteredRecipes.sort((a, b) => {
        const timeA = (a.prepTime || 0) + (a.cookingTime || 0)
        const timeB = (b.prepTime || 0) + (b.cookingTime || 0)
        return timeA - timeB
      })
      
      if (filteredRecipes.length === 0) {
        message = "Keine schnellen Rezepte (≤20 Min) gefunden. Versuch einen anderen Filter!"
      }
      break
      
    default:
      // Return all recipes sorted by newest first (default)
      filteredRecipes = [...recipesWithPopularity].sort((a, b) => {
        const dateA = a.updatedDate?.getTime() || a.createdDate?.getTime() || 0
        const dateB = b.updatedDate?.getTime() || b.createdDate?.getTime() || 0
        return dateB - dateA
      })
      break
  }
  
  return {
    recipes: filteredRecipes,
    count: filteredRecipes.length,
    message
  }
}

export function getFilterDisplayName(filterType: FilterType): string {
  switch (filterType) {
    case 'newest': return 'Neueste'
    case 'popular': return 'Beliebteste'
    case 'quick': return 'Schnell'
    default: return 'Alle'
  }
}

export function getFilterDescription(filterType: FilterType): string {
  switch (filterType) {
    case 'newest': return 'Rezepte, die in den letzten 30 Tagen aktualisiert wurden'
    case 'popular': return 'Die beliebtesten Rezepte basierend auf Bewertungen und Nutzerinteraktionen'
    case 'quick': return 'Rezepte mit maximal 20 Minuten Gesamtzeit (Vorbereitung + Kochen)'
    default: return 'Alle verfügbaren Rezepte'
  }
}

// Export the enhanced recipes with popularity scores
export { recipesWithPopularity as enhancedRecipes }