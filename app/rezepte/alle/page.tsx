"use client"

import { useState, useEffect, Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { recipes } from "@/lib/data"
import { filterRecipes, getFilterDisplayName, getFilterDescription, type FilterType } from "@/lib/recipe-filters"
import { useSearchParams } from "next/navigation"
import type { Recipe } from "@/lib/data"
import Head from 'next/head'
import Script from 'next/script'
import { Clock, TrendingUp, Sparkles, Filter, AlertCircle, CheckCircle } from 'lucide-react'

function AllRecipesContent() {
  const searchParams = useSearchParams()
  const initialTag = searchParams.get('tag') || ""
  const initialQuery = searchParams.get('q') || ""
  const initialSort = searchParams.get('sort') as FilterType || 'newest'
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedTags, setSelectedTags] = useState<string[]>(initialTag ? [initialTag] : [])
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialSort)
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [filterMessage, setFilterMessage] = useState<string | undefined>()

  useEffect(() => {
    const tagFromParams = searchParams.get('tag') || ""
    const queryFromParams = searchParams.get('q') || ""
    const sortFromParams = searchParams.get('sort') as FilterType || 'newest'
    
    setSelectedTags(tagFromParams ? tagFromParams.split(',') : [])
    setSearchQuery(queryFromParams)
    setActiveFilter(sortFromParams)
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

  const handleFilterChange = (filterType: FilterType) => {
    setActiveFilter(filterType)
    
    // Update URL
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedTags.length > 0) params.set('tag', selectedTags.join(','))
    if (filterType && filterType !== 'newest') params.set('sort', filterType)
    
    const path = `/rezepte/alle${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', path)
  }
  
  // Apply filters and search
  useEffect(() => {
    // First apply the filter (newest, popular, quick)
    const filterResult = filterRecipes(activeFilter)
    let recipesToShow = filterResult.recipes
    setFilterMessage(filterResult.message)
    
    // Then apply search query and tag filters
    recipesToShow = recipesToShow.filter((recipe: Recipe) => {
      const matchesSearch = searchQuery === "" || 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (recipe.description && recipe.description.toLowerCase().includes(searchQuery.toLowerCase()))
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => recipe.tags && recipe.tags.includes(tag))
      
      return matchesSearch && matchesTags
    })
    
    setFilteredRecipes(recipesToShow)
  }, [activeFilter, searchQuery, selectedTags])

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
    if (activeFilter && activeFilter !== 'newest') params.set('sort', activeFilter)
    
    const path = `/rezepte/alle${params.toString() ? `?${params.toString()}` : ''}`
    window.history.replaceState({}, '', path)
    
    // Set page title
    let title = 'Alle Rezepte | Vegetarische & Vegane Gerichte | Veggie Rezepte'
    if (activeFilter && activeFilter !== 'newest') {
      title = `${getFilterDisplayName(activeFilter)} Rezepte | Veggie Rezepte`
    }
    if (selectedTags.length > 0) {
      title = `${selectedTags.join(', ')} Rezepte | Veggie Rezepte`
    }
    if (searchQuery) {
      title = `${searchQuery} Rezepte | Veggie Rezepte`
    }
    document.title = title
    
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
    
    let description = `Entdecke alle ${filteredRecipes.length} vegetarischen Rezepte - von Hauptgerichten über Suppen bis zu Desserts. Einfach, lecker und gesund!`
    if (activeFilter && activeFilter !== 'newest') {
      description = `${getFilterDescription(activeFilter)} - ${filteredRecipes.length} Rezepte gefunden.`
    }
    if (selectedTags.length > 0) {
      description = `Entdecke ${filteredRecipes.length} ${selectedTags.join(', ')} Rezepte - vegetarisch, lecker und einfach zuzubereiten.`
    }
    if (searchQuery) {
      description = `${filteredRecipes.length} Rezepte mit ${searchQuery} - vegetarisch, lecker und einfach zuzubereiten.`
    }
    
    metaDescription.setAttribute('content', description);
    
  }, [searchQuery, selectedTags, activeFilter, baseUrl, filteredRecipes.length]);
  
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
      : activeFilter && activeFilter !== 'newest'
        ? `${getFilterDisplayName(activeFilter)} Rezepte | Veggie Rezepte`
        : 'Alle Rezepte | Vegetarische & Vegane Gerichte | Veggie Rezepte';

  const getFilterIcon = (filterType: FilterType) => {
    switch (filterType) {
      case 'newest': return <Sparkles className="h-4 w-4" />
      case 'popular': return <TrendingUp className="h-4 w-4" />
      case 'quick': return <Clock className="h-4 w-4" />
      default: return <Filter className="h-4 w-4" />
    }
  }
  
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
            <div className="max-w-4xl mx-auto mb-8">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li><a href="/" className="hover:text-[#0b3558]">Home</a></li>
                  <li><span className="mx-2">›</span></li>
                  <li className="text-[#0b3558] font-medium">Alle Rezepte</li>
                </ol>
              </nav>
              
              <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-4 !text-black">
                {activeFilter && activeFilter !== 'newest' 
                  ? `${getFilterDisplayName(activeFilter)} Rezepte`
                  : selectedTags.length > 0 
                    ? `${selectedTags.join(' & ')} Rezepte` 
                    : 'Alle Rezepte'
                }
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {activeFilter && activeFilter !== 'newest'
                  ? getFilterDescription(activeFilter)
                  : selectedTags.length > 0 
                    ? `${filteredRecipes.length} ${selectedTags.join(' & ')} Rezepte gefunden`
                    : searchQuery
                      ? `${filteredRecipes.length} Rezepte für "${searchQuery}" gefunden`
                      : `Entdecke alle ${filteredRecipes.length} vegetarischen Rezepte - von schnellen Alltagsgerichten bis zu besonderen Leckereien.`
                }
              </p>

              {/* Enhanced Filter Buttons */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <span className="font-semibold text-gray-800">Filter:</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {(['newest', 'popular', 'quick'] as FilterType[]).map((filterType) => (
                    <Button
                      key={filterType}
                      onClick={() => handleFilterChange(filterType)}
                      variant={activeFilter === filterType ? "default" : "outline"}
                      className={`flex items-center gap-2 transition-all duration-200 ${
                        activeFilter === filterType
                          ? 'bg-[#0b3558] text-white shadow-lg hover:bg-[#f9d24f] hover:text-black'
                          : 'text-black border-gray-300 hover:border-[#f9d24f] hover:bg-[#f9d24f]/10'
                      }`}
                    >
                      {getFilterIcon(filterType)}
                      {getFilterDisplayName(filterType)}
                      {activeFilter === filterType && (
                        <CheckCircle className="h-4 w-4" />
                      )}
                    </Button>
                  ))}
                </div>
                {activeFilter && (
                  <p className="text-sm text-gray-600 mt-2">
                    {getFilterDescription(activeFilter)}
                  </p>
                )}
              </div>
              
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
                    className={`cursor-pointer hover:bg-gray-100 font-['Montserrat'] uppercase transition-all duration-200 ${
                      selectedTags.includes(tag) ? 'bg-[#0b3558] text-white' : 'text-black border-gray-300'
                    }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Filter Message */}
              {filterMessage && (
                <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <p className="text-orange-800 font-medium">{filterMessage}</p>
                </div>
              )}
              
              {/* Results Summary */}
              {(selectedTags.length > 0 || searchQuery || activeFilter !== 'newest') && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {filteredRecipes.length} Rezepte gefunden
                      {activeFilter && activeFilter !== 'newest' && (
                        <span className="text-[#0b3558] font-medium">
                          • {getFilterDisplayName(activeFilter)}
                        </span>
                      )}
                    </span>
                    <button 
                      onClick={() => {
                        setSearchQuery('')
                        setSelectedTags([])
                        setActiveFilter('newest')
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

          {filteredRecipes.length === 0 && !filterMessage && (
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
                    setActiveFilter('newest')
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

export default function AllRecipes() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 bg-white">
          <div className="container py-8">
            <div className="max-w-4xl mx-auto mb-8">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-10 bg-gray-200 rounded w-20"></div>
                  <div className="h-10 bg-gray-200 rounded w-20"></div>
                  <div className="h-10 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-8 bg-gray-200 rounded w-16"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    }>
      <AllRecipesContent />
    </Suspense>
  )
}