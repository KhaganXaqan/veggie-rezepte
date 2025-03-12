"use client"

import { Activity } from 'lucide-react'

export function RecipeNutrition({
  servings = 4,
  nutrition
}: {
  servings?: number;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}) {
  return (
    <div className="w-full mx-auto mb-4">
      {/* Title with decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
        <h2 className="font-serif text-2xl font-bold text-[#0b3558] flex items-center gap-2">
          <span className="inline-block w-10 h-10 bg-[#db747a]/10 rounded-full flex items-center justify-center text-[#db747a]">
            <Activity className="h-5 w-5" />
          </span>
          Nährwerte
        </h2>
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
      </div>

      {/* Nutrition card */}
      <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 mb-8">
        <p className="text-center text-gray-600 mb-6 font-sans">
          Nährwerte pro Portion (basierend auf {servings} {servings === 1 ? 'Person' : 'Personen'})
        </p>

        {/* Nutrition grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#db747a]">{nutrition.calories}</div>
            <div className="text-sm text-gray-600">Kalorien</div>
            <div className="text-xs text-gray-500">pro Portion</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#0b3558]">{nutrition.protein}</div>
            <div className="text-sm text-gray-600">Protein</div>
            <div className="text-xs text-gray-500">pro Portion</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#0b3558]">{nutrition.carbs}</div>
            <div className="text-sm text-gray-600">Kohlenhydrate</div>
            <div className="text-xs text-gray-500">pro Portion</div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-[#0b3558]">{nutrition.fat}</div>
            <div className="text-sm text-gray-600">Fett</div>
            <div className="text-xs text-gray-500">pro Portion</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-gray-500 max-w-lg mx-auto">
          <p>Die angegebenen Nährwerte sind Schätzwerte und können je nach genauen Zutaten und Portionsgrößen variieren.</p>
        </div>
      </div>
    </div>
  )
}
