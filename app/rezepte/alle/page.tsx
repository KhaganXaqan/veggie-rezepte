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
import Script from 'next/script'

export default function AllRecipes() {
  const searchParams = useSearchParams()
  const initialTag = searchParams.get('tag') || ""
  const initialQuery = searchParams.get('q') || ""
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTag ? [initialTag] : [])

  useEffect(() => {
    const tagFromParams = searchParams.get('tag') || ""
    const queryFromParams = searchParams.get('q') || ""
    setSelectedTags(tagFromParams ? tagFromParams.split(',') : [])
    setSearchQuery(queryFromParams)
  }, [searchParams])

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
  
  // Generate structured data
  const generateStructuredData = () => {
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Alle Vegetarischen Rezepte',
      description: 'Entdecke alle vegetarischen Rezepte - von Hauptgerichten über Suppen bis zu Desserts. Einfach, lecker und gesund!',
      url: `${baseUrl}/rezepte/alle`,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: filteredRecipes.length,
        itemListElement: filteredRecipes.slice(0, 20).map((recipe, index) => ({
          '@type': 'Recipe',
          position: index + 1,
          name: recipe.title,
          url: `${baseUrl}/${recipe.slug}`,
          image: recipe.image,
          description: recipe.description,
          author: {
            '@type': 'Organization',
            name: 'Veggie Rezepte'
          },
          recipeCategory: recipe.category,
          recipeCuisine: 'Vegetarisch',
          prepTime: `PT${recipe.prepTime || 30}M`,
          recipeYield: `${recipe.servings || 4} Portionen`,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: recipe.rating || 4.5,
            reviewCount: recipe.reviews || 50
          }
        }))
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Alle Rezepte',
            item: `${baseUrl}/rezepte/alle`
          }
        ]
      }
    };
  };
  
  // Update URL and canonical link when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedTags.length > 0) params.set('tag', selectedTags.join(','))
    
    const path = `/rezepte/alle${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', path)
    
    // Set page title
    document.title = selectedTags.length > 0 
      ? `${selectedTags.join(', ')} Rezepte | Veggie Rezepte` 
      : searchQuery 
        ? `${searchQuery} Rezepte | Veggie Rezepte` 
        : 'Alle Rezepte | Vegetarische & Vegane Gerichte | Veggie Rezepte';
    
    // Set canonical URL - always point to the base page without query parameters
    const canonicalUrl = `${baseUrl}/rezepte/alle`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    const description = selectedTags.length > 0
      ? `Entdecke ${filteredRecipes.length} ${selectedTags.join(', ')} Rezepte - vegetarisch, lecker und einfach zuzubereiten.`
      : searchQuery
        ? `${filteredRecipes.length} Rezepte mit ${searchQuery} - vegetarisch, lecker und einfach zuzubereiten.`
        : `Entdecke alle ${filteredRecipes.length} vegetarischen Rezepte - von Hauptgerichten über Suppen bis zu Desserts. Einfach, lecker und gesund!`;
    
    metaDescription.setAttribute('content', description);
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    
    const keywords = selectedTags.length > 0
      ? `${selectedTags.join(', ')}, vegetarische rezepte, veggie rezepte, ${selectedTags.join(' rezepte, ')} rezepte`
      : searchQuery
        ? `${searchQuery} rezepte, vegetarische ${searchQuery} rezepte, veggie rezepte, rezeptsuche`
        : 'alle rezepte, vegetarische rezepte, veggie rezepte, rezeptsammlung, vegetarische gerichte, vegane rezepte';
    
    metaKeywords.setAttribute('content', keywords);
    
    // Update OpenGraph tags
    updateOpenGraphTags(description);
    
  }, [searchQuery, selectedTags, baseUrl, filteredRecipes.length]);
  
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
    ? `Entdecke ${filteredRecipes.length} ${selectedTags.join(', ')} Rezepte - vegetarisch, lecker und einfach zuzubereiten.`
    : searchQuery
      ? `${filteredRecipes.length} Rezepte mit ${searchQuery} - vegetarisch, lecker und einfach zuzubereiten.`
      : `Entdecke alle ${filteredRecipes.length} vegetarischen Rezepte - von Hauptgerichten über Suppen bis zu Desserts. Einfach, lecker und gesund!`;
  
  // Dynamic title based on filters
  const pageTitle = selectedTags.length > 0 
    ? `${selectedTags.join(', ')} Rezepte | Veggie Rezepte` 
    : searchQuery 
      ? `${searchQuery} Rezepte | Veggie Rezepte` 
      : 'Alle Rezepte | Vegetarische & Vegane Gerichte | Veggie Rezepte';
  
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
      
      {/* Add structured data script */}
      <Script
        id="all-recipes-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 bg-white">
          <div className="container py-8">
            <div className="max-w-2xl mx-auto mb-8">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-[#0b3558]">Home</a></li>
                  <li><span className="mx-2">›</span></li>
                  <li className="text-[#0b3558] font-medium">Alle Rezepte</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-4 !text-black">
                {selectedTags.length > 0 ? `${selectedTags.join(' & ')} Rezepte` : 'Alle Rezepte'}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {selectedTags.length > 0 
                  ? `${filteredRecipes.length} ${selectedTags.join(' & ')} Rezepte gefunden`
                  : searchQuery
                    ? `${filteredRecipes.length} Rezepte für "${searchQuery}" gefunden`
                    : `Entdecke alle ${filteredRecipes.length} vegetarischen Rezepte - von schnellen Alltagsgerichten bis zu besonderen Leckereien.`
                }
              </p>
              
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
              
              {/* Results Summary */}
              {(selectedTags.length > 0 || searchQuery) && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {filteredRecipes.length} Rezepte gefunden
                    </span>
                    <button 
                      onClick={() => {
                        setSearchQuery('')
                        setSelectedTags([])
                      }}
                      className="text-sm text-[#0b3558] hover:underline"
                    >
                      Filter zurücksetzen
                    </button>
                  </div>
                </div>
              )}
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
                <h2 className="text-xl font-semibold mb-2">Keine Rezepte gefunden</h2>
                <p className="text-gray-600 mb-4">
                  Versuche es mit anderen Suchbegriffen oder entferne einige Filter.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedTags([])
                  }}
                  className="bg-[#0b3558] text-white px-6 py-2 rounded-full hover:bg-[#f9d24f] hover:text-black transition-colors"
                >
                  Alle Rezepte anzeigen
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}