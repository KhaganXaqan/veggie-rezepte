import { UtensilsCrossed } from 'lucide-react'

type RecipeInstructionsProps = {
  instructions: string[]
}

export function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <div className="max-w-[86.666%] mx-auto">
      {/* Title with decorative elements */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
        <h2 className="font-serif text-2xl font-bold text-[#0b3558] flex items-center gap-2">
          <span className="inline-block w-10 h-10 bg-[#db747a]/10 rounded-full flex items-center justify-center text-[#db747a]">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          Zubereitung
        </h2>
        <div className="h-[1px] w-16 bg-[#db747a]/30" />
      </div>

      {/* Instructions card */}
      <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 mb-8">
        {/* Instructions list */}
        <div className="space-y-8">
          {instructions.map((instruction, index) => (
            <div key={index} className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-[#0b3558] text-white flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="font-sans text-gray-700 leading-relaxed">{instruction}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tips section */}
        <div className="mt-10 pt-6 border-t border-gray-100">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-[#db747a]/10 flex items-center justify-center text-[#db747a]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#0b3558] mb-2">Profi-Tipp</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Achte darauf, den Teig möglichst dünn auszurollen, damit er schön knusprig wird. 
                Wenn du den Flammkuchen vorbereitest, kannst du den Teig auch schon vorab ausrollen 
                und zwischen Backpapier im Kühlschrank aufbewahren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
