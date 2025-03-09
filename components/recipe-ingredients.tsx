'use client'

import { useState } from 'react'
import { Minus, Plus, UtensilsCrossed } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Ingredient = {
  amount?: number | string | undefined;
  unit?: string;
  name: string;
}

export function RecipeIngredients({
  initialServings = 4,
  ingredients
}: {
  initialServings?: number;
  ingredients: Ingredient[];
}) {
  const [servings, setServings] = useState(initialServings)
  
  const increaseServings = () => {
    setServings(prev => prev + 1)
  }
  
  const decreaseServings = () => {
    if (servings > 1) {
      setServings(prev => prev - 1)
    }
  }
  
  // Calculate the multiplier for ingredient amounts
  const multiplier = initialServings ? servings / initialServings : 1
  
  return (
    <div className="max-w-[86.666%] mx-auto">
      {/* Title with decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
        <h2 className="font-serif text-2xl font-bold text-[#0b3558] flex items-center gap-2">
          <span className="inline-block w-10 h-10 bg-[#db747a]/10 rounded-full flex items-center justify-center text-[#db747a]">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="text-[#0b3558]">Zutaten</span>
        </h2>
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
      </div>

      {/* Servings control */}
      <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 mb-8">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={decreaseServings}
            disabled={servings <= 1}
            className="bg-white text-[#0b3558] border border-gray-200 w-8 h-8 flex items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#db747a] hover:text-white transition-colors"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <input 
              type="number" 
              value={servings}
              onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-12 text-center border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#db747a]/30 text-lg font-medium text-[#0b3558] px-2 py-1 bg-white"
            />
            <span className="font-sans text-lg text-[#0b3558]">Personen</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={increaseServings}
            className="bg-white text-[#0b3558] border border-gray-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#db747a] hover:text-white transition-colors"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Ingredients list */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="space-y-4">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-baseline">
                <span className="text-[#0b3558] mr-3 font-bold">•</span>
                <div className="flex-1">
                  <span className="font-medium text-[#0b3558]">
                    {ingredient.amount !== undefined && (
                      <>
                        {typeof ingredient.amount === 'number' 
                          ? Math.round((ingredient.amount * multiplier) * 10) / 10
                          : ingredient.amount}
                        {ingredient.unit && ` ${ingredient.unit}`}
                      </>
                    )}
                  </span>
                  <span className="ml-2 font-sans text-[#0b3558]">{ingredient.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping link */}
        <div className="text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-[#0b3558] mb-2">Fehlt noch etwas für dein Rezept?</p>
          <a 
            href="https://www.amazon.de" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0b3558] text-white px-6 py-2 rounded-full font-medium hover:bg-[#db747a] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Lebensmittel kaufen
          </a>
        </div>
      </div>
    </div>
  )
}
