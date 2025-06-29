'use client'

import { useState, useEffect } from 'react'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  Linkedin, 
  Pin, 
  PinOff,
  Share2,
  Copy,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface RecipeInteractionButtonsProps {
  recipe: {
    title: string
    slug: string
    image: string
    description: string
  }
}

export function RecipeInteractionButtons({ recipe }: RecipeInteractionButtonsProps) {
  const [isPinned, setIsPinned] = useState(false)
  const [showCopied, setShowCopied] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')

  // Set current URL on client side
  useEffect(() => {
    setCurrentUrl(window.location.href)
    
    // Check if recipe is pinned in localStorage
    const pinnedRecipes = JSON.parse(localStorage.getItem('pinnedRecipes') || '[]')
    setIsPinned(pinnedRecipes.includes(recipe.slug))
  }, [recipe.slug])

  const handlePinterestShare = () => {
    const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(`https://veggie-rezepte.de${recipe.image}`)}&description=${encodeURIComponent(`✨ ${recipe.title.toUpperCase()} ✨\n\n${recipe.description}\n\n#veggierezepte #vegetarisch #rezept #kochen`)}`
    window.open(url, '_blank', 'noopener,noreferrer,width=800,height=600')
  }

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  const handleInstagramShare = () => {
    window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer')
  }

  const handleTwitterShare = () => {
    const text = `Schau dir dieses vegetarische Rezept an: ${recipe.title} 🌱`
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  const handleWhatsAppShare = () => {
    const text = `Schau dir dieses leckere vegetarische Rezept an: ${recipe.title} 🌱\n${currentUrl}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setShowCopied(true)
      setTimeout(() => setShowCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link:', err)
    }
  }

  const handleTogglePin = () => {
    const pinnedRecipes = JSON.parse(localStorage.getItem('pinnedRecipes') || '[]')
    
    if (isPinned) {
      // Remove from pinned
      const updatedPinned = pinnedRecipes.filter((slug: string) => slug !== recipe.slug)
      localStorage.setItem('pinnedRecipes', JSON.stringify(updatedPinned))
      setIsPinned(false)
    } else {
      // Add to pinned
      const updatedPinned = [...pinnedRecipes, recipe.slug]
      localStorage.setItem('pinnedRecipes', JSON.stringify(updatedPinned))
      setIsPinned(true)
    }
  }

  const handleScrollToRecipe = () => {
    const recipeCard = document.getElementById('recipe-card')
    if (recipeCard) {
      recipeCard.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <TooltipProvider>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
        {/* Social Share Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600 mr-2">Teilen:</span>
          
          {/* Facebook */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={handleFacebookShare}
                className="p-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                aria-label="Auf Facebook teilen"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Auf Facebook teilen</p>
            </TooltipContent>
          </Tooltip>

          {/* Instagram */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={handleInstagramShare}
                className="p-2 hover:bg-pink-50 hover:border-pink-300 transition-all duration-200"
                aria-label="Auf Instagram teilen"
              >
                <Instagram className="h-4 w-4 text-pink-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Du kannst dieses Rezept auf Instagram posten</p>
            </TooltipContent>
          </Tooltip>

          {/* Twitter/X */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={handleTwitterShare}
                className="p-2 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                aria-label="Auf Twitter/X teilen"
              >
                <Twitter className="h-4 w-4 text-gray-800" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Auf Twitter/X teilen</p>
            </TooltipContent>
          </Tooltip>

          {/* WhatsApp */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppShare}
                className="p-2 hover:bg-green-50 hover:border-green-300 transition-all duration-200"
                aria-label="Via WhatsApp teilen"
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Via WhatsApp teilen</p>
            </TooltipContent>
          </Tooltip>

          {/* LinkedIn */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLinkedInShare}
                className="p-2 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
                aria-label="Auf LinkedIn teilen"
              >
                <Linkedin className="h-4 w-4 text-blue-700" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Auf LinkedIn teilen</p>
            </TooltipContent>
          </Tooltip>

          {/* More Share Options */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="p-2 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
                aria-label="Weitere Optionen"
              >
                <Share2 className="h-4 w-4 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={handlePinterestShare} className="flex items-center gap-2">
                <Pin className="h-4 w-4 text-red-600" />
                Pinterest
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleCopyLink} className="flex items-center gap-2">
                {showCopied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4 text-gray-600" />
                )}
                {showCopied ? 'Kopiert!' : 'Link kopieren'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Pin Toggle Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={handleTogglePin}
                className={`flex items-center gap-2 transition-all duration-200 ${
                  isPinned 
                    ? 'bg-[#f9d24f] border-[#f9d24f] text-[#0b3558] hover:bg-[#f0c840]' 
                    : 'hover:bg-[#f9d24f]/10 hover:border-[#f9d24f]'
                }`}
                aria-label={isPinned ? 'Rezept entfernen' : 'Rezept pinnen'}
              >
                {isPinned ? (
                  <Pin className="h-4 w-4 fill-current" />
                ) : (
                  <PinOff className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">
                  {isPinned ? 'Gepinnt' : 'Pinnen'}
                </span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isPinned ? 'Rezept entfernt' : 'Rezept pinnen'}</p>
            </TooltipContent>
          </Tooltip>

          {/* Scroll to Recipe Button */}
          <Button
            onClick={handleScrollToRecipe}
            className="bg-[#0b3558] text-white hover:bg-[#f9d24f] hover:text-black transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            size="sm"
          >
            <span>Zum Rezept</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}