'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, X, ChefHat, Clock, Star, Sparkles } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ALL_INGREDIENTS, 
  findRecipesByIngredients, 
  getIngredientSuggestions, 
  getPopularIngredients 
} from '@/lib/ingredient-utils'
import type { Recipe } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

// Main component for the ingredient filter functionality
export function IngredientFilter() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [results, setResults] = useState<{ exactMatches: any[], partialMatches: any[] }>({ exactMatches: [], partialMatches: [] })

  // Memoize popular ingredients so it's not recalculated on every render
  const popularIngredients = useMemo(() => getPopularIngredients(18), [])

  // Update search suggestions as the user types
  useEffect(() => {
    if (searchInput.trim()) {
      const availableIngredients = ALL_INGREDIENTS.filter(ing => !selectedIngredients.includes(ing))
      const newSuggestions = getIngredientSuggestions(searchInput, availableIngredients, 8)
      setSuggestions(newSuggestions)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchInput, selectedIngredients])

  // Run the search whenever the selected ingredients change
  useEffect(() => {
    const newResults = findRecipesByIngredients(selectedIngredients)
    setResults(newResults)
  }, [selectedIngredients])

  const addIngredient = (ingredient: string) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(prev => [...prev, ingredient])
      setSearchInput('')
      setShowSuggestions(false)
    }
  }

  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => prev.filter(ing => ing !== ingredient))
  }

  const clearAll = () => {
    setSelectedIngredients([])
    setSearchInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault()
      addIngredient(suggestions[0])
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      <Card className="p-6 shadow-lg border-gray-200">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Zutat eingeben (z.B. Tomaten, Zwiebeln, Käse...)"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => searchInput && setShowSuggestions(true)}
            className="pl-12 pr-4 py-3 text-lg rounded-md"
          />
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="relative">
            <div className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => addIngredient(suggestion)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  {suggestion.charAt(0).toUpperCase() + suggestion.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected Ingredients & Popular Ingredients */}
        <div className="mt-4 space-y-4">
          {selectedIngredients.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {selectedIngredients.map(ingredient => (
                <Badge key={ingredient} variant="secondary" className="text-base bg-blue-100 text-blue-800 hover:bg-blue-200 py-1 px-3">
                  {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                  <button onClick={() => removeIngredient(ingredient)} className="ml-2 rounded-full hover:bg-blue-300 p-0.5">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={clearAll} className="text-red-500 hover:text-red-700">
                Alle löschen
              </Button>
            </div>
          )}

          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-sm text-gray-600 mr-2">Beliebt:</span>
            {popularIngredients
              .filter(ing => !selectedIngredients.includes(ing))
              .slice(0, 12)
              .map(ingredient => (
                <Button key={ingredient} variant="outline" size="sm" onClick={() => addIngredient(ingredient)} className="text-gray-700">
                  {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                </Button>
            ))}
          </div>
        </div>
      </Card>

      {/* Results Section */}
      <div className="pt-6">
        {selectedIngredients.length > 0 ? (
          <ResultsDisplay results={results} />
        ) : (
          <InitialStatePrompt />
        )}
      </div>
    </div>
  )
}

// Component to display when no ingredients are selected
function InitialStatePrompt() {
  return (
    <div className="text-center py-16 px-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
      <ChefHat className="mx-auto h-16 w-16 text-gray-400" />
      <h3 className="mt-4 text-2xl font-semibold text-gray-800">Was ist in deinem Kühlschrank?</h3>
      <p className="mt-2 text-lg text-gray-600">Wähle oben deine Zutaten aus, um passende Rezepte zu finden.</p>
    </div>
  )
}

// Component to display search results
function ResultsDisplay({ results }: { results: { exactMatches: any[], partialMatches: any[] } }) {
  const { exactMatches, partialMatches } = results
  const totalResults = exactMatches.length + partialMatches.length

  if (totalResults === 0) {
    return (
      <div className="text-center py-16 px-6">
        <ChefHat className="mx-auto h-16 w-16 text-gray-400" />
        <h3 className="mt-4 text-2xl font-semibold text-gray-800">Keine Rezepte gefunden</h3>
        <p className="mt-2 text-lg text-gray-600">Versuche, andere oder weniger Zutaten auszuwählen.</p>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {exactMatches.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-2 flex items-center">
            <Sparkles className="h-7 w-7 mr-3 text-yellow-400 fill-yellow-400" />
            Perfekte Treffer ({exactMatches.length})
          </h2>
          <p className="text-gray-600 mb-6">Diese Rezepte kannst du mit deinen Zutaten direkt kochen.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exactMatches.map(match => (
              <RecipeCard key={match.recipe.slug} recipe={match.recipe} />
            ))}
          </div>
        </div>
      )}

      {partialMatches.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-orange-600 mb-2">Vorschläge ({partialMatches.length})</h2>
          <p className="text-gray-600 mb-6">Hier fehlt nur eine Kleinigkeit zum perfekten Gericht!</p>
          <div className="space-y-4">
            {partialMatches.map(match => (
              <PartialMatchCard key={match.recipe.slug} {...match} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Recipe Card for exact matches
function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/${recipe.slug}`} className="block group">
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300 rounded-lg">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg text-[#0b3558] group-hover:text-[#f9d24f] transition-colors line-clamp-2 mb-2 flex-grow">
            {recipe.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {recipe.prepTime} Min
            </span>
            {recipe.rating && (
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {recipe.rating}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

// Card for partial matches, highlighting missing ingredients
function PartialMatchCard({ recipe, matchPercentage, foundIngredients, missingIngredients }: { recipe: Recipe; matchPercentage: number; foundIngredients: string[]; missingIngredients: string[] }) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-40 sm:h-auto h-48 relative flex-shrink-0">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 160px"
          />
        </div>
        <CardContent className="p-4 flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <Link href={`/${recipe.slug}`} className="font-semibold text-lg text-[#0b3558] hover:text-[#f9d24f] transition-colors line-clamp-2">
              {recipe.title}
            </Link>
            <Badge variant="secondary" className={`ml-2 flex-shrink-0 ${
              matchPercentage >= 75 ? 'bg-green-100 text-green-800' :
              matchPercentage >= 50 ? 'bg-yellow-100 text-yellow-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {matchPercentage}% Match
            </Badge>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            Du kannst <strong>{recipe.title}</strong> kochen, wenn du noch hast: 
            <strong className="text-orange-600">{missingIngredients.map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(', ')}</strong>.
          </p>

          <div className="space-y-1 text-sm">
            <div>
              <span className="text-green-600 font-medium">✓ Vorhanden: </span>
              <span className="text-gray-700">
                {foundIngredients.map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(', ')}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {recipe.prepTime} Min</span>
            {recipe.rating && <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {recipe.rating}</span>}
            <span className="text-gray-400">•</span>
            <span>{recipe.category}</span>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}