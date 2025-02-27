import { Cookie } from 'lucide-react'

type RecipeNutritionProps = {
  servings: number
  nutrition: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
}

export function RecipeNutrition({ servings, nutrition }: RecipeNutritionProps) {
  return (
    <div className="max-w-xl mx-auto px-4">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="h-[1px] bg-black/60 flex-1" />
        <div className="flex items-center gap-2">
          <Cookie className="h-5 w-5" />
          <span className="text-xl font-medium tracking-wide">Nährwerte</span>
        </div>
        <div className="h-[1px] bg-black/60 flex-1" />
      </div>

      {/* Per person subtitle */}
      <div className="text-center mb-6">
        <span className="text-sm text-black/70">Pro Person</span>
      </div>

      {/* Nutrition values */}
      <div className="flex justify-center gap-8 text-center">
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium">{nutrition.calories}</div>
          <div className="text-sm text-black/70">kcal</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium">{parseInt(nutrition.protein)}</div>
          <div className="text-sm text-black/70">gm Eiweiß</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium">{parseInt(nutrition.fat)}</div>
          <div className="text-sm text-black/70">gm Fett</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg font-medium">{parseInt(nutrition.carbs)}</div>
          <div className="text-sm text-black/70">gm Kohlenhydrate</div>
        </div>
      </div>
    </div>
  )
}
