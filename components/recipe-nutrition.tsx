import { Activity } from 'lucide-react'

type RecipeNutritionProps = {
  servings: number
  nutrition: {
    calories: number
    fat: string
    carbs: string
    protein: string
    fiber?: number
    sugar?: number
  }
}

export function RecipeNutrition({ servings, nutrition }: RecipeNutritionProps) {
  return (
    <div className="max-w-[86.666%] mx-auto">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {/* Calories */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-[#db747a] mb-1 text-sm font-medium uppercase tracking-wider">Kalorien</div>
            <div className="text-2xl font-bold text-[#0b3558]">{nutrition.calories}</div>
            <div className="text-xs text-gray-500 mt-1">kcal</div>
          </div>

          {/* Protein */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-[#db747a] mb-1 text-sm font-medium uppercase tracking-wider">Protein</div>
            <div className="text-2xl font-bold text-[#0b3558]">{nutrition.protein}</div>
            <div className="text-xs text-gray-500 mt-1">g</div>
          </div>

          {/* Carbs */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-[#db747a] mb-1 text-sm font-medium uppercase tracking-wider">Kohlenhydrate</div>
            <div className="text-2xl font-bold text-[#0b3558]">{nutrition.carbs}</div>
            <div className="text-xs text-gray-500 mt-1">g</div>
          </div>

          {/* Fat */}
          <div className="bg-white rounded-lg p-4 shadow-sm text-center">
            <div className="text-[#db747a] mb-1 text-sm font-medium uppercase tracking-wider">Fett</div>
            <div className="text-2xl font-bold text-[#0b3558]">{nutrition.fat}</div>
            <div className="text-xs text-gray-500 mt-1">g</div>
          </div>
        </div>

        {/* Additional nutrition info */}
        {(nutrition.fiber !== undefined || nutrition.sugar !== undefined) && (
          <div className="mt-8 pt-6 border-t border-gray-100 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              {nutrition.fiber !== undefined && (
                <div className="flex items-center justify-between">
                  <span className="font-sans text-gray-700">Ballaststoffe</span>
                  <span className="font-medium text-[#0b3558]">{nutrition.fiber} g</span>
                </div>
              )}
              {nutrition.sugar !== undefined && (
                <div className="flex items-center justify-between">
                  <span className="font-sans text-gray-700">Zucker</span>
                  <span className="font-medium text-[#0b3558]">{nutrition.sugar} g</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-8 text-center text-xs text-gray-500 max-w-lg mx-auto">
          <p>Die angegebenen Nährwerte sind Schätzwerte und können je nach genauen Zutaten und Portionsgrößen variieren.</p>
        </div>
      </div>
    </div>
  )
}
