import { UtensilsCrossed } from 'lucide-react'

type RecipeInstructionsProps = {
  instructions: string[]
}

export function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <div className="max-w-xl mx-auto px-4">
      {/* Title with decorative lines */}
      <div className="flex items-center justify-center gap-6 mb-8">
        <div className="h-[1px] bg-black/60 flex-1" />
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-5 w-5" />
          <span className="text-xl font-medium tracking-wide">Zubereitung</span>
        </div>
        <div className="h-[1px] bg-black/60 flex-1" />
      </div>

      {/* Instructions list */}
      <div className="space-y-6">
        {instructions.map((instruction, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-7 h-7 rounded-full bg-[#3A7D54] text-white flex items-center justify-center text-sm">
                {index + 1}
              </div>
            </div>
            <p className="text-lg leading-relaxed">{instruction}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
