'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, X, ChefHat, Clock, Star } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ALL_INGREDIENTS, findRecipesByIngredients, getIngredientSuggestions } from '@/lib/ingredient-utils'
import type { Recipe } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'

interface IngredientFilterProps {
  onResultsChange?: (results: { exactMatches: any[], partialMatches: any[] }) => void
}

export function IngredientFilter({ onResultsChange }: IngredientFilterProps) {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [results, setResults] = useState<{ exactMatches: any[], partialMatches: any[] }>({
    exactMatches: [],
    partialMatches: []
  })

  // Update suggestions based on search input
  useEffect(() => {
    if (searchInput.trim()) {
      const newSuggestions = getIngredientSuggestions(
        searchInput, 
        ALL_INGREDIENTS.filter(ing => !selectedIngredients.includes(ing)),
        8
      )
      setSuggestions(newSuggestions)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchInput, selectedIngredients])

  // Update results when selected ingredients change
  useEffect(() => {
    const newResults = findRecipesByIngredients(selectedIngredients)
    setResults(newResults)
    onResultsChange?.(newResults)
  }, [selectedIngredients, onResultsChange])

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
    setShowSuggestions(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      addIngredient(suggestions[0])
    } else if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  // Popular ingredients for quick selection
  const popularIngredients = [
    'tomate', 'zwiebel', 'knoblauch', 'paprika', 'möhre', 'kartoffel',
    'spinat', 'champignon', 'zucchini', 'aubergine', 'brokkoli', 'avocado',
    'mozzarella', 'parmesan', 'feta', 'olivenöl', 'basilikum', 'petersilie'
  ].filter(ing => !selectedIngredients.includes(ing))

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Zutat eingeben (z.B. Tomaten, Zwiebeln, Käse...)"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => searchInput && setShowSuggestions(true)}
            className="pl-10 pr-4 py-3 text-base"
          />
        </div>
        
        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <button
                key={suggestion}
                onClick={() => addIngredient(suggestion)}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none capitalize"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Selected Ingredients */}
      {selectedIngredients.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">
              Ausgewählte Zutaten ({selectedIngredients.length})
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAll}
              className="text-gray-500 hover:text-gray-700"
            >
              Alle entfernen
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedIngredients.map((ingredient) => (
              <Badge
                key={ingredient}
                variant="secondary"
                className="px-3 py-1 bg-[#0b3558] text-white hover:bg-[#0b3558]/90 capitalize"
              >
                {ingredient}
                <button
                  onClick={() => removeIngredient(ingredient)}
                  className="ml-2 hover:text-red-300"
                  aria-label={`${ingredient} entfernen`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Popular Ingredients */}
      {selectedIngredients.length === 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700">Beliebte Zutaten</h3>
          <div className="flex flex-wrap gap-2">
            {popularIngredients.slice(0, 12).map((ingredient) => (
              <Badge
                key={ingredient}
                variant="outline"
                className="cursor-pointer hover:bg-[#f9d24f] hover:border-[#f9d24f] capitalize"
                onClick={() => addIngredient(ingredient)}
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {selectedIngredients.length > 0 && (
        <div className="space-y-6">
          {/* Exact Matches */}
          {results.exactMatches.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-[#0b3558] mb-4 flex items-center gap-2">
                <ChefHat className="h-5 w-5" />
                Perfekte Treffer ({results.exactMatches.length})
              </h2>
              <p className="text-gray-600 mb-4">
                Diese Rezepte enthalten alle deine ausgewählten Zutaten:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.exactMatches.map(({ recipe }) => (
                  <RecipeCard key={recipe.slug} recipe={recipe} />
                ))}
              </div>
            </div>
          )}

          {/* Partial Matches */}
          {results.partialMatches.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-[#0b3558] mb-4">
                {results.exactMatches.length > 0 ? 'Weitere Vorschläge' : 'Rezeptvorschläge'} ({results.partialMatches.length})
              </h2>
              <p className="text-gray-600 mb-4">
                Diese Rezepte enthalten einige deiner Zutaten:
              </p>
              <div className="space-y-4">
                {results.partialMatches.slice(0, 8).map(({ recipe, matchPercentage, foundIngredients, missingIngredients }) => (
                  <PartialMatchCard
                    key={recipe.slug}
                    recipe={recipe}
                    matchPercentage={matchPercentage}
                    foundIngredients={foundIngredients}
                    missingIngredients={missingIngredients}
                  />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {results.exactMatches.length === 0 && results.partialMatches.length === 0 && (
            <div className="text-center py-12">
              <ChefHat className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Keine Rezepte gefunden
              </h3>
              <p className="text-gray-600 mb-4">
                Leider haben wir keine Rezepte gefunden, die deine ausgewählten Zutaten enthalten.
              </p>
              <p className="text-sm text-gray-500">
                Versuche es mit weniger oder anderen Zutaten.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Recipe Card Component for exact matches
function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/${recipe.slug}`} className="block group">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-[4/3] relative">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-[#0b3558] group-hover:text-[#f9d24f] transition-colors line-clamp-2 mb-2">
            {recipe.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {recipe.prepTime} Min
            </span>
            {recipe.rating && (
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                {recipe.rating}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

// Partial Match Card Component
function PartialMatchCard({ 
  recipe, 
  matchPercentage, 
  foundIngredients, 
  missingIngredients 
}: {
  recipe: Recipe
  matchPercentage: number
  foundIngredients: string[]
  missingIngredients: string[]
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-24 h-24 relative flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <Link 
                href={`/${recipe.slug}`}
                className="font-semibold text-[#0b3558] hover:text-[#f9d24f] transition-colors line-clamp-2"
              >
                {recipe.title}
              </Link>
              <Badge 
                variant="secondary" 
                className={`ml-2 ${
                  matchPercentage >= 75 ? 'bg-green-100 text-green-800' :
                  matchPercentage >= 50 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-orange-100 text-orange-800'
                }`}
              >
                {matchPercentage}% Match
              </Badge>
            </div>
            
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-green-600 font-medium">✓ Vorhanden: </span>
                <span className="text-gray-700">
                  {foundIngredients.map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(', ')}
                </span>
              </div>
              
              {missingIngredients.length > 0 && (
                <div>
                  <span className="text-orange-600 font-medium">+ Benötigt: </span>
                  <span className="text-gray-700">
                    {missingIngredients.map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(', ')}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {recipe.prepTime} Min
              </span>
              {recipe.rating && (
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  {recipe.rating}
                </span>
              )}
              <span className="text-gray-400">•</span>
              <span>{recipe.category}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}