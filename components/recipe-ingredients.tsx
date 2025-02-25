'use client'

import { useState } from 'react'
import { FileText, Minus, Plus } from 'lucide-react'

type Ingredient = {
  amount: number | string
  unit?: string
  name: string
}

type RecipeIngredientsProps = {
  initialServings: number
  ingredients: Ingredient[]
}

export function RecipeIngredients({ initialServings, ingredients }: RecipeIngredientsProps) {
  const [servings, setServings] = useState(initialServings)

  const decreaseServings = () => {
    if (servings > 1) {
      setServings(servings - 1)
    }
  }

  const increaseServings = () => {
    setServings(servings + 1)
  }

  // Calculate adjusted amounts based on servings
  const getAdjustedAmount = (amount: number | string) => {
    if (typeof amount === 'number') {
      const adjusted = (amount * servings) / initialServings
      return adjusted.toLocaleString('de-DE', {
        minimumFractionDigits: adjusted % 1 === 0 ? 0 : 1,
        maximumFractionDigits: 1
      })
    }
    return amount
  }

  return (
    <div className="max-w-xl mx-auto px-4">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="h-[1px] bg-black/60 flex-1" />
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <span className="text-xl font-medium tracking-wide">Zutaten</span>
        </div>
        <div className="h-[1px] bg-black/60 flex-1" />
      </div>

      {/* Servings control */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <button 
          onClick={decreaseServings}
          disabled={servings <= 1}
          className="bg-[#3A7D54] text-white w-6 h-6 flex items-center justify-center rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus className="h-3 w-3" />
        </button>
        <input 
          type="number" 
          value={servings}
          onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-10 text-center border-none focus:outline-none text-lg px-0"
        />
        <span className="text-lg">Personen</span>
        <button 
          onClick={increaseServings}
          className="bg-[#3A7D54] text-white w-6 h-6 flex items-center justify-center rounded-sm"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>

      {/* Ingredients list */}
      <div className="max-w-sm mx-auto mb-10 text-center">
        <div className="inline-block space-y-3">
          {ingredients?.map((ingredient, index) => (
            <div
              key={index}
              className="grid grid-cols-[80px_1fr] gap-6 text-lg items-baseline"
            >
              <div className="text-right font-medium">
                {getAdjustedAmount(ingredient.amount)}
                {ingredient.unit && (
                  <span className="ml-1">{ingredient.unit}</span>
                )}
              </div>
              <div>{ingredient.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shopping link */}
      <div className="text-center space-y-1">
        <p className="text-sm text-black/70">Fehlt noch etwas?</p>
        <p className="text-sm text-black/70">Amazon</p>
        <a 
          href="https://www.amazon.de" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#3A7D54] text-white px-5 py-2 text-sm mt-1"
        >
          Lebensmittel hier kaufen
        </a>
      </div>
    </div>
  )
}
