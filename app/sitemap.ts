import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'
import { categoryNames } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veggie-rezepte.de'

  const recipeUrls = recipes.map((recipe) => ({
    url: `${baseUrl}/rezepte/${recipe.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const categoryUrls = Object.keys(categoryNames).map((category) => ({
    url: `${baseUrl}/kategorien/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/suche`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kategorien`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...categoryUrls,
    ...recipeUrls,
  ]
}