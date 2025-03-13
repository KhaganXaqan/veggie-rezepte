"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { recipes } from "@/lib/data"
import { useSearchParams } from "next/navigation"
import type { Recipe } from "@/lib/data"

export default function AllRecipes() {
  const searchParams = useSearchParams()
  const initialTag = searchParams.get('tag') || ""
  const initialQuery = searchParams.get('q') || ""
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTag ? [initialTag] : [])
  
  // Get all unique tags from recipes
  const allTags = Array.from(new Set(recipes.flatMap(recipe => recipe.tags || [])))
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    )
  }
  
  // Filter recipes based on search query and selected tags
  const filteredRecipes = recipes.filter((recipe: Recipe) => {
    const matchesSearch = searchQuery === "" || 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (recipe.description && recipe.description.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => recipe.tags && recipe.tags.includes(tag))
    
    return matchesSearch && matchesTags
  })

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedTags.length > 0) params.set('tag', selectedTags.join(','))
    
    const url = `/rezepte/alle${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', url)
  }, [searchQuery, selectedTags])
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className="flex-1 bg-white">
        <div className="container py-8">
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-8 !text-black">Alle Rezepte</h1>
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
                  className={`cursor-pointer hover:bg-gray-100 font-['Montserrat'] uppercase ${
                    selectedTags.includes(tag) ? 'bg-[#0b3558] text-white' : 'text-black border-gray-300'
                  }`}
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
            <div className="text-center text-black/70 py-12">
              Keine Rezepte gefunden. Versuche es mit anderen Suchbegriffen.
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 