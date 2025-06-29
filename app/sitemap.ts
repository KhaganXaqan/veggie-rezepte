import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.veggie-rezepte.de'
  const currentDate = new Date().toISOString()

  // Base routes with priorities and change frequencies
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/rezepte/alle`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/kategorien`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
  ]

  // Static pages
  const staticPages = [
    'about',
    'contact', 
    'faq',
    'datenschutz',
    'impressum'
  ].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5
  }))

  // Category routes with higher priority
  const categories = [
    'hauptgerichte',
    'auflaeufe', 
    'suppen',
    'salate',
    'fruehstueck',
    'desserts'
  ]
  
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/kategorien/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // Recipe routes with dynamic priorities based on rating and category
  const recipeRoutes = recipes.map((recipe) => {
    // Calculate priority based on rating and category
    let priority = 0.6
    if (recipe.rating && recipe.rating >= 4.5) priority = 0.7
    if (recipe.category === 'Hauptgerichte') priority += 0.1
    
    // Ensure priority doesn't exceed 1.0
    priority = Math.min(priority, 0.8)
    
    return {
      url: `${baseUrl}/${recipe.slug}`,
      lastModified: recipe.updatedDate ? recipe.updatedDate.toISOString() : recipe.createdDate?.toISOString() || currentDate,
      changeFrequency: 'monthly' as const,
      priority: priority
    }
  })

  // Tag-based routes for popular tags
  const popularTags = [
    'Schnell', 'Mediterran', 'Vegan', 'Glutenfrei', 'Proteinreich', 
    'Gemüse', 'Pasta', 'Bowl', 'Käse', 'Indisch'
  ]
  
  const tagRoutes = popularTags.map((tag) => ({
    url: `${baseUrl}/rezepte/alle?tag=${encodeURIComponent(tag)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6
  }))

  return [...routes, ...staticPages, ...categoryRoutes, ...recipeRoutes, ...tagRoutes]
}