"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Clock, Users, ChefHat, Printer, BookmarkPlus, BookmarkCheck, Share2 } from "lucide-react"
import { Recipe } from "@/lib/recipes"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface RecipeDetailProps {
  recipe: Recipe
  categoryName: string
}

export function RecipeDetail({ recipe, categoryName }: RecipeDetailProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const { toast } = useToast()
  const totalTime = (recipe.prepTime ? parseInt(recipe.prepTime) : 0) + 
                   (recipe.cookTime ? parseInt(recipe.cookTime) : 0)

  // Check if recipe is saved in localStorage on component mount
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]")
    setIsSaved(savedRecipes.some((saved: Recipe) => saved.slug === recipe.slug))
  }, [recipe.slug])

  // Handle print functionality
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    // Generate print-friendly HTML
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${recipe.title} - Veggie-Rezepte</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1 { color: #16a34a; }
            .meta { color: #666; margin-bottom: 20px; }
            .ingredients { margin-bottom: 30px; }
            .ingredients li { margin-bottom: 8px; }
            .instructions li { margin-bottom: 15px; }
          </style>
        </head>
        <body>
          <h1>${recipe.title}</h1>
          <div class="meta">
            <p>${categoryName} | ${totalTime} Minuten | ${recipe.servings} Portionen | ${recipe.difficulty}</p>
          </div>
          <div class="ingredients">
            <h2>Zutaten</h2>
            <ul>
              ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>
          </div>
          <div class="instructions">
            <h2>Zubereitung</h2>
            <ol>
              ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
            </ol>
          </div>
        </body>
      </html>
    `

    printWindow.document.write(printContent)
    printWindow.document.close()
    printWindow.print()
  }

  // Handle save functionality
  const handleSave = () => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]")
    
    if (isSaved) {
      // Remove recipe from saved recipes
      const updatedRecipes = savedRecipes.filter((saved: Recipe) => saved.slug !== recipe.slug)
      localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes))
      setIsSaved(false)
      toast({
        title: "Rezept entfernt",
        description: "Das Rezept wurde von deinen gespeicherten Rezepten entfernt.",
      })
    } else {
      // Add recipe to saved recipes
      savedRecipes.push(recipe)
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes))
      setIsSaved(true)
      toast({
        title: "Rezept gespeichert",
        description: "Das Rezept wurde zu deinen gespeicherten Rezepten hinzugefügt.",
      })
    }
  }

  // Handle share functionality
  const handleShare = async () => {
    const shareUrl = window.location.href
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: recipe.title,
          text: recipe.description,
          url: shareUrl,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback to copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl)
        toast({
          title: "Link kopiert!",
          description: "Der Link wurde in die Zwischenablage kopiert.",
        })
      } catch (error) {
        console.error("Error copying to clipboard:", error)
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-8">
        <Image
          src={recipe.imagePath}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <Badge className="mb-4 bg-green-600 hover:bg-green-700">
            {categoryName}
          </Badge>
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-lg opacity-90 max-w-2xl mb-6">
            {recipe.description}
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{totalTime} Minuten</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{recipe.servings} Portionen</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5" />
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <Button variant="outline" className="gap-2" onClick={handlePrint}>
          <Printer className="h-4 w-4" />
          Drucken
        </Button>
        <Button 
          variant={isSaved ? "default" : "outline"} 
          className="gap-2"
          onClick={handleSave}
        >
          {isSaved ? (
            <BookmarkCheck className="h-4 w-4" />
          ) : (
            <BookmarkPlus className="h-4 w-4" />
          )}
          {isSaved ? "Gespeichert" : "Speichern"}
        </Button>
        <Button variant="outline" className="gap-2" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
          Teilen
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <Card className="p-6 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4">Zutaten</h2>
          <Separator className="mb-4" />
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                {ingredient}
              </li>
            ))}
          </ul>
        </Card>

        {/* Instructions */}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Zubereitung</h2>
          <Separator className="mb-4" />
          <ol className="space-y-6">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-none">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-semibold">
                    {index + 1}
                  </span>
                </div>
                <p className="flex-1 leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </Card>
      </div>
    </div>
  )
}
