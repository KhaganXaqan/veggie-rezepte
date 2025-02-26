'use client'

import { useState } from 'react'
import { Minus, Plus, UtensilsCrossed } from 'lucide-react'
import { Button } from '@/components/ui/button'

type RecipeIngredientsProps = {
  initialServings: number
  ingredients: {
    amount?: number | string
    unit?: string
    name: string
  }[]
}

export function RecipeIngredients({ initialServings, ingredients }: RecipeIngredientsProps) {
  const [servings, setServings] = useState(initialServings)

  const adjustAmount = (amount?: number | string) => {
    if (amount === undefined) return ''
    if (typeof amount === 'string') return amount
    return ((amount * servings) / initialServings).toFixed(1).replace(/\.0$/, '')
  }

  return (
    <div className="max-w-xl mx-auto px-4">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[1px] bg-black/60 flex-1" />
        <h2 className="text-2xl font-medium flex items-center gap-2">
          <UtensilsCrossed className="h-5 w-5" />
          Zutaten
        </h2>
        <div className="h-[1px] bg-black/60 flex-1" />
      </div>

      {/* Servings control */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setServings(s => Math.max(1, s - 1))}
          disabled={servings <= 1}
          className="bg-[#3A7D54] text-white w-6 h-6 flex items-center justify-center rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minus className="h-3 w-3" />
        </Button>
        <input 
          type="number" 
          value={servings}
          onChange={(e) => setServings(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-10 text-center border-none focus:outline-none text-lg px-0"
        />
        <span className="text-lg">Personen</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setServings(s => s + 1)}
          className="bg-[#3A7D54] text-white w-6 h-6 flex items-center justify-center rounded-sm"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      {/* Ingredients list */}
      <div className="max-w-sm mx-auto mb-10 text-center">
        <div className="inline-block space-y-3">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="grid grid-cols-[80px_1fr] gap-6 text-lg items-baseline">
              <div className="text-right font-medium">
                {ingredient.amount && (
                  <>
                    {adjustAmount(ingredient.amount)}
                    {ingredient.unit && ` ${ingredient.unit}`}
                  </>
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
