"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { recipes } from "@/lib/data"
import { useSearchParams } from "next/navigation"

export default function AllRecipesPage() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get unique tags from all recipes, sorted alphabetically
  const allTags = Array.from(new Set(recipes.flatMap(recipe => recipe.tags)))
    .sort((a, b) => a.localeCompare(b))

  // Handle URL parameters
  useEffect(() => {
    const tag = searchParams.get('tag')
    if (tag) {
      setSelectedTags([tag])
    }
  }, [searchParams])

  // Filter recipes based on search query and selected tags
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => recipe.tags.includes(tag))
    
    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-4xl font-bold mb-8">Alle Rezepte</h1>
            <Input
              type="search"
              placeholder="Nach Rezepten suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="category-recipes">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCardMasonry 
              key={recipe.slug} 
              recipe={recipe}
              index={index}
            />
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="container">
            <div className="text-center text-muted-foreground py-12">
              Keine Rezepte gefunden. Versuche es mit anderen Suchbegriffen.
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 