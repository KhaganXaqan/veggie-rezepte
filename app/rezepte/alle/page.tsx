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
    document.title = selectedTags.length > 0 
      ? `${selectedTags.join(', ')} Rezepte` 
      : searchQuery 
        ? `${searchQuery} Rezepte ` 
        : 'Alle Rezepte | Vegetarische & Vegane Gerichte';
    
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
    
    const description = selectedTags.length > 0
      ? `Entdecke unsere ${selectedTags.join(', ')} Rezepte - vegetarisch, lecker und einfach zuzubereiten.`
      : searchQuery
        ? `Rezepte mit ${searchQuery} - vegetarisch, lecker und einfach zuzubereiten.`
        : 'Entdecke alle vegetarischen Rezepte - von Hauptgerichten über Suppen bis zu Desserts. Einfach, lecker und gesund!';
    
    metaDescription.setAttribute('content', description);
    
    // Update OpenGraph tags
    updateOpenGraphTags(description);
    
  }, [searchQuery, selectedTags, baseUrl]);
  
  // Helper function to update OpenGraph tags
  const updateOpenGraphTags = (description: string) => {
    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', document.title);
    
    // OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', description);
    
    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', `${baseUrl}/rezepte/alle`);
    
    // OG Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');
  };
  
  // Canonical URL without query parameters
  const canonicalUrl = `${baseUrl}/rezepte/alle`;
  
  // Dynamic description based on filters
  const pageDescription = selectedTags.length > 0
    ? `Entdecke unsere ${selectedTags.join(', ')} Rezepte - vegetarisch, lecker und einfach zuzubereiten.`
    : searchQuery
      ? `Rezepte mit ${searchQuery} - vegetarisch, lecker und einfach zuzubereiten.`
      : 'Entdecke alle vegetarischen Rezepte - von Hauptgerichten über Suppen bis zu Desserts. Einfach, lecker und gesund!';
  
  // Dynamic title based on filters
  const pageTitle = selectedTags.length > 0 
    ? `${selectedTags.join(', ')} Rezepte | Veggie-Rezepte` 
    : searchQuery 
      ? `${searchQuery} Rezepte | Veggie-Rezepte` 
      : 'Alle Rezepte | Vegetarische & Vegane Gerichte | Veggie-Rezepte';
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
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