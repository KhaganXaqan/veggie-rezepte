"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { recipes } from "@/lib/data"
import { useSearchParams } from "next/navigation"
import type { Recipe } from "@/lib/data"
import Head from 'next/head'

// This is a client component, so we don't need generateStaticParams
// It will be statically generated as a single page

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

  // Get the base URL for canonical link
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://veggie-rezepte.de';
  
  // Update URL and canonical link when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedTags.length > 0) params.set('tag', selectedTags.join(','))
    
    const path = `/rezepte/alle${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', path)
    
    // Set page title
    document.title = 'Alle Rezepte - Veggie-Rezepte';
    
    // Set canonical URL - always point to the base page without query parameters
    const canonicalUrl = `${baseUrl}/rezepte/alle`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Entdecke alle vegetarischen und veganen Rezepte in unserer Sammlung. Filtere nach Kategorien und finde dein nächstes Lieblingsrezept!');
  }, [searchQuery, selectedTags, baseUrl]);
  
  // Canonical URL without query parameters
  const canonicalUrl = `${baseUrl}/rezepte/alle`;
  
  return (
    <>
      <Head>
        <title>Alle Rezepte - Veggie-Rezepte</title>
        <meta name="description" content="Entdecke alle vegetarischen und veganen Rezepte in unserer Sammlung. Filtere nach Kategorien und finde dein nächstes Lieblingsrezept!" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Alle Rezepte - Veggie-Rezepte" />
        <meta property="og:description" content="Entdecke alle vegetarischen und veganen Rezepte in unserer Sammlung. Filtere nach Kategorien und finde dein nächstes Lieblingsrezept!" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alle Rezepte - Veggie-Rezepte" />
        <meta name="twitter:description" content="Entdecke alle vegetarischen und veganen Rezepte in unserer Sammlung. Filtere nach Kategorien und finde dein nächstes Lieblingsrezept!" />
      </Head>
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
    </>
  )
} 