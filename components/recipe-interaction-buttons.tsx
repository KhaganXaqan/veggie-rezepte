'use client'

interface RecipeInteractionButtonsProps {
  recipe: {
    title: string
    slug: string
    image: string
    description: string
  }
}

export function RecipeInteractionButtons({ recipe }: RecipeInteractionButtonsProps) {
  const handlePinterestShare = () => {
    const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://veggie-rezepte.de/${recipe.slug}`)}&media=${encodeURIComponent(`https://veggie-rezepte.de${recipe.image}`)}&description=${encodeURIComponent(`✨ ${recipe.title.toUpperCase()} ✨\n\n${recipe.description} #veggierezepte #vegetarisch #rezept`)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleScrollToRecipe = () => {
    const recipeCard = document.getElementById('recipe-card')
    if (recipeCard) {
      recipeCard.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={handlePinterestShare}
        className="border border-black py-2.5 px-6 font-bold text-black hover:bg-gray-100 transition-colors duration-200 text-center rounded-md text-sm"
      >
        REZEPT PINNEN
      </button>
      <button
        onClick={handleScrollToRecipe}
        className="border border-black bg-[#f9d24f] py-2.5 px-6 font-bold text-black hover:bg-[#f0c840] transition-colors duration-200 flex items-center justify-center rounded-md text-sm shadow-[2px_2px_0px_rgba(0,0,0,0.8)]"
      >
        ZUM REZEPT ↓
      </button>
    </div>
  )
}