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
        <div className="h-[1px] w-16 bg-[#f9d24f]/70" />
        <h3 className="font-black text-2xl uppercase text-[#0b3558] flex items-center gap-2">          
          <span className="inline-block w-10 h-10 bg-[#f9d24f] rounded-full flex items-center justify-center text-black">
            <Activity className="h-5 w-5" />
          </span>
          <span>NÄHRWERTE</span>
        </h3>
        <div className="h-[1px] w-16 bg-[#f9d24f]/70" />
      </div>

      {/* Nutrition content */}
      <div className="mb-8 max-w-3xl mx-auto">
        <p className="text-lg text-black text-center mb-6 font-normal">
          Nährwerte pro Portion (basierend auf {servings} {servings === 1 ? 'Person' : 'Personen'})
        </p>

        {/* Nutrition grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="border-2 border-black p-4 rounded-md text-center shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
            <div className="text-2xl font-bold text-[#f9d24f]">{nutrition.calories}</div>
            <div className="text-base text-black font-medium">Kalorien</div>
            <div className="text-sm text-black">pro Portion</div>
          </div>
          
          <div className="border-2 border-black p-4 rounded-md text-center shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
            <div className="text-2xl font-bold text-[#f9d24f]">{nutrition.protein}</div>
            <div className="text-base text-black font-medium">Protein</div>
            <div className="text-sm text-black">pro Portion</div>
          </div>
          
          <div className="border-2 border-black p-4 rounded-md text-center shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
            <div className="text-2xl font-bold text-[#f9d24f]">{nutrition.carbs}</div>
            <div className="text-base text-black font-medium">Kohlenhydrate</div>
            <div className="text-sm text-black">pro Portion</div>
          </div>
          
          <div className="border-2 border-black p-4 rounded-md text-center shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
            <div className="text-2xl font-bold text-[#f9d24f]">{nutrition.fat}</div>
            <div className="text-base text-black font-medium">Fett</div>
            <div className="text-sm text-black">pro Portion</div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-sm text-black max-w-lg mx-auto">
          <p>Die angegebenen Nährwerte sind Schätzwerte und können je nach genauen Zutaten und Portionsgrößen variieren.</p>
        </div>
      </div>
    </div>
  )
}
