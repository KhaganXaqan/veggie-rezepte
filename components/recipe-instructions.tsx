import { UtensilsCrossed } from 'lucide-react'

type RecipeInstructionsProps = {
  instructions: string[],
  tips: string[]
}

export function RecipeInstructions({ instructions, tips }: RecipeInstructionsProps) {
  return (
    <div className="w-full mx-auto mb-4">
      {/* Title with decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[2px] w-16 bg-[#f9d24f]/70" />
        <h3 className="font-black text-2xl uppercase text-[#0b3558] flex items-center gap-2">
          <span className="inline-block w-10 h-10 bg-[#f9d24f] rounded-full flex items-center justify-center text-black">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span>ZUBEREITUNG</span>
        </h3>
        <div className="h-[2px] w-16 bg-[#f9d24f]/70" />
      </div>

      {/* Instructions list */}
      <div className="mb-8 max-w-3xl mx-auto">
        <div className="space-y-8">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-md bg-[#f9d24f] text-black border-2 border-black flex items-center justify-center text-sm font-bold shadow-[3px_3px_0_rgba(0,0,0,0.9)]">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-black leading-relaxed font-normal">{instruction}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tips section */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-[#f9d24f] flex items-center justify-center text-black">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-black text-xl text-[#0b3558] mb-2">Profi-Tipp</h3>
              <p className="text-lg text-black leading-relaxed font-normal">
                {tips}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
