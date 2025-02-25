import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'
import { categoryNames } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veggie-rezepte.de'

  // Generate recipe URLs
  const recipeUrls = recipes.map((recipe) => ({
    url: `${baseUrl}/rezepte/${recipe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Generate category URLs
  const categoryUrls = Object.keys(categoryNames).map((category) => ({
    url: `${baseUrl}/kategorien/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Core pages
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/suche`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kategorien`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Combine all URLs
  return [...corePages, ...categoryUrls, ...recipeUrls]
}