import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://veggie-rezepte.de'

  // Static routes with priorities and change frequencies
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 1.0
    },
    {
      url: `${baseUrl}/rezepte/alle`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily' as const,
      priority: 0.9
    },
    {
      url: `${baseUrl}/kategorien`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.5
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.4
    }
  ]

  // Category routes
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
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }))

  // Recipe routes
  const recipeRoutes = recipes.map((recipe) => ({
    url: `${baseUrl}/${recipe.slug}`,
    lastModified: recipe.updatedDate ? recipe.updatedDate.toISOString() : recipe.createdDate?.toISOString() || new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  return [...routes, ...categoryRoutes, ...recipeRoutes]
}