'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, X, ChefHat, Clock, Star, Sparkles, CheckCircle, AlertCircle, Filter, Utensils, Heart, BookOpen, Zap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ALL_INGREDIENTS, 
  findRecipesByIngredients, 
  getIngredientSuggestions, 
  getPopularIngredients,
  normalizeIngredientName
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
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  // Memoize popular ingredients so it's not recalculated on every render
  const popularIngredients = useMemo(() => getPopularIngredients(24), [])

  // Update search suggestions as the user types
  useEffect(() => {
    if (searchInput.trim()) {
      const availableIngredients = ALL_INGREDIENTS.filter(ing => 
        !selectedIngredients.some(selected => normalizeIngredientName(selected) === normalizeIngredientName(ing))
      )
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
    if (!selectedIngredients.some(selected => normalizeIngredientName(selected) === normalizeIngredientName(ingredient))) {
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
      setIsSearchFocused(false)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Enhanced Search Section */}
      <Card className="relative overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9d24f]/5 via-white to-[#0b3558]/5" />
        <CardContent className="relative p-6 md:p-8">
          {/* Search Input with Enhanced Design */}
          <div className="relative">
            <div className="relative">
              <Search className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${
                isSearchFocused ? 'text-[#0b3558]' : 'text-gray-400'
              }`} />
              <Input
                type="text"
                placeholder="Gib deine Zutaten ein... (z.B. große rote Zwiebel, Cherrytomaten, Paprikaschoten)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => {
                  setIsSearchFocused(true)
                  if (searchInput) setShowSuggestions(true)
                }}
                onBlur={() => {
                  setIsSearchFocused(false)
                  setTimeout(() => setShowSuggestions(false), 200)
                }}
                className={`pl-12 pr-4 py-4 text-lg rounded-xl border-2 transition-all duration-300 ${
                  isSearchFocused 
                    ? 'border-[#f9d24f] ring-4 ring-[#f9d24f]/20 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput('')
                    setShowSuggestions(false)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>

            {/* Enhanced Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-50 mt-2">
                <Card className="border-2 border-[#f9d24f]/30 shadow-xl">
                  <CardContent className="p-2">
                    <div className="max-h-60 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={suggestion}
                          onClick={() => addIngredient(suggestion)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                            index === 0 
                              ? 'bg-[#f9d24f]/20 text-[#0b3558] font-medium' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Utensils className="h-4 w-4 text-[#0b3558]" />
                          <span className="capitalize">{suggestion}</span>
                          {index === 0 && (
                            <Badge variant="secondary" className="ml-auto text-xs">
                              Enter drücken
                            </Badge>
                          )}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Selected Ingredients & Popular Ingredients */}
          <div className="mt-6 space-y-6">
            {/* Selected Ingredients */}
            {selectedIngredients.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-gray-800">Ausgewählte Zutaten ({selectedIngredients.length})</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearAll} 
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Alle löschen
                  </Button>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedIngredients.map(ingredient => (
                    <Badge 
                      key={ingredient} 
                      variant="secondary" 
                      className="text-base bg-green-100 text-green-800 hover:bg-green-200 py-2 px-4 rounded-full border border-green-200 transition-all duration-200"
                    >
                      <span className="capitalize">{ingredient}</span>
                      <button 
                        onClick={() => removeIngredient(ingredient)} 
                        className="ml-2 rounded-full hover:bg-green-300 p-1 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Ingredients */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-[#f9d24f]" />
                <span className="font-semibold text-gray-800">Beliebte Zutaten</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {popularIngredients
                  .filter(ing => !selectedIngredients.some(selected => normalizeIngredientName(selected) === normalizeIngredientName(ing)))
                  .slice(0, 18)
                  .map(ingredient => (
                    <Button 
                      key={ingredient} 
                      variant="outline" 
                      size="sm" 
                      onClick={() => addIngredient(ingredient)} 
                      className="justify-start text-gray-700 hover:bg-[#f9d24f]/10 hover:border-[#f9d24f] hover:text-[#0b3558] transition-all duration-200 rounded-full"
                    >
                      <span className="capitalize text-sm">{ingredient}</span>
                    </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      <div className="pt-2">
        {selectedIngredients.length > 0 ? (
          <ResultsDisplay results={results} selectedCount={selectedIngredients.length} />
        ) : (
          <InitialStatePrompt />
        )}
      </div>
    </div>
  )
}

// Enhanced component to display when no ingredients are selected
function InitialStatePrompt() {
  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Intelligente Suche",
      description: "Gib Zutaten in beliebiger Form ein - unser System erkennt Varianten automatisch"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Sofortige Ergebnisse",
      description: "Erhalte passende Rezepte in Echtzeit während du Zutaten hinzufügst"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Detaillierte Anleitungen",
      description: "Jedes Rezept enthält Schritt-für-Schritt Anleitungen und Nährwerte"
    }
  ]

  return (
    <div className="text-center py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <ChefHat className="mx-auto h-20 w-20 text-[#f9d24f] mb-4" />
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Was ist in deinem Kühlschrank?</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gib deine verfügbaren Zutaten ein und entdecke köstliche vegetarische Rezepte, 
            die du sofort zubereiten kannst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="text-center space-y-3">
                <div className="text-[#0b3558] flex justify-center">{feature.icon}</div>
                <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#0b3558] to-[#f9d24f] rounded-2xl p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">Probiere es aus!</h4>
          <p className="text-lg opacity-90 mb-6">
            Beginne mit beliebten Zutaten wie "Tomaten", "Zwiebel" oder "Käse" und lass dich überraschen.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Tomaten', 'Zwiebel', 'Käse', 'Paprika', 'Nudeln'].map(ingredient => (
              <Badge key={ingredient} variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors">
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced component to display search results
function ResultsDisplay({ results, selectedCount }: { results: { exactMatches: any[], partialMatches: any[] }, selectedCount: number }) {
  const { exactMatches, partialMatches } = results
  const totalResults = exactMatches.length + partialMatches.length

  if (totalResults === 0) {
    return (
      <Card className="border-2 border-orange-200 bg-orange-50">
        <CardContent className="text-center py-16 px-6">
          <AlertCircle className="mx-auto h-16 w-16 text-orange-400 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Keine passenden Rezepte gefunden</h3>
          <p className="text-lg text-gray-600 mb-6">
            Versuche es mit anderen Zutaten oder reduziere die Anzahl der ausgewählten Zutaten.
          </p>
          <div className="bg-white rounded-lg p-4 max-w-md mx-auto">
            <h4 className="font-semibold text-gray-800 mb-2">💡 Tipps:</h4>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>• Verwende Grundzutaten wie "Tomaten" statt "Cherrytomaten"</li>
              <li>• Probiere weniger spezifische Zutaten</li>
              <li>• Kombiniere nur 2-4 Hauptzutaten</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {/* Results Summary */}
      <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-full">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {totalResults} Rezept{totalResults !== 1 ? 'e' : ''} gefunden
                </h3>
                <p className="text-gray-600">
                  Mit {selectedCount} ausgewählten Zutat{selectedCount !== 1 ? 'en' : ''}
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              {exactMatches.length > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{exactMatches.length}</div>
                  <div className="text-gray-600">Perfekte Treffer</div>
                </div>
              )}
              {partialMatches.length > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{partialMatches.length}</div>
                  <div className="text-gray-600">Vorschläge</div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Perfect Matches */}
      {exactMatches.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-7 w-7 text-yellow-400 fill-yellow-400" />
            <h2 className="text-3xl font-bold text-green-700">
              Perfekte Treffer ({exactMatches.length})
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            🎉 Diese Rezepte kannst du mit deinen Zutaten direkt kochen!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exactMatches.map(match => (
              <ExactMatchCard key={match.recipe.slug} {...match} />
            ))}
          </div>
        </div>
      )}

      {/* Partial Matches */}
      {partialMatches.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="h-7 w-7 text-orange-500" />
            <h2 className="text-3xl font-bold text-orange-600">
              Vorschläge ({partialMatches.length})
            </h2>
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            💡 Hier fehlt nur eine Kleinigkeit zum perfekten Gericht!
          </p>
          <div className="space-y-4">
            {partialMatches.slice(0, 8).map(match => (
              <PartialMatchCard key={match.recipe.slug} {...match} />
            ))}
          </div>
          {partialMatches.length > 8 && (
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Und {partialMatches.length - 8} weitere Vorschläge...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Enhanced Recipe Card for exact matches
function ExactMatchCard({ recipe, matchType, extraIngredients }: { recipe: Recipe; matchType: string; extraIngredients: string[] }) {
  return (
    <Link href={`/${recipe.slug}`} className="block group">
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 rounded-xl border-2 border-green-200 hover:border-green-300 hover:-translate-y-1">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3">
            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
              <CheckCircle className="h-4 w-4 mr-1" />
              {matchType === 'exact' ? 'Perfekt' : 'Komplett'}
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
              <h3 className="font-bold text-lg text-[#0b3558] group-hover:text-[#f9d24f] transition-colors line-clamp-2">
                {recipe.title}
              </h3>
            </div>
          </div>
        </div>
        
        <CardContent className="p-4 flex flex-col flex-grow">
          {matchType === 'exact' ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-green-700 font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Du kannst <strong>{recipe.title}</strong> perfekt kochen!
              </p>
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
              <p className="text-sm text-blue-700 font-medium flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Du hast sogar extra Zutaten: <strong>{extraIngredients.join(', ')}</strong>
              </p>
            </div>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
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
            <Badge variant="secondary" className="text-xs">
              {recipe.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

// Enhanced Card for partial matches
function PartialMatchCard({ recipe, matchPercentage, foundIngredients, missingIngredients }: { recipe: Recipe; matchPercentage: number; foundIngredients: string[]; missingIngredients: string[] }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-l-orange-400 hover:border-l-orange-500">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-48 sm:h-auto h-48 relative flex-shrink-0">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 192px"
          />
        </div>
        <CardContent className="p-4 flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <Link href={`/${recipe.slug}`} className="font-bold text-xl text-[#0b3558] hover:text-[#f9d24f] transition-colors line-clamp-2 flex-1">
              {recipe.title}
            </Link>
            <div className="flex items-center gap-2 ml-3 flex-shrink-0">
              <Badge variant="secondary" className={`${
                matchPercentage >= 75 ? 'bg-green-100 text-green-800 border-green-200' :
                matchPercentage >= 50 ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                'bg-orange-100 text-orange-800 border-orange-200'
              } font-semibold`}>
                {matchPercentage}% Match
              </Badge>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-orange-700 font-medium">
              <AlertCircle className="h-4 w-4 inline mr-1" />
              Du brauchst noch: <strong className="text-orange-800">{missingIngredients.join(', ')}</strong>
            </p>
          </div>

          <div className="space-y-2 text-sm mb-4">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-green-600 font-medium">Vorhanden: </span>
                <span className="text-gray-700">
                  {foundIngredients.map(ing => ing.charAt(0).toUpperCase() + ing.slice(1)).join(', ')}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-4">
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
            <Badge variant="outline" className="text-xs">
              {recipe.category}
            </Badge>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}