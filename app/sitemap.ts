import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.veggie-rezepte.de'

  // Base routes
  const routes = [
    '',
    '/rezepte/alle',
    '/kategorien',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 1.0
  }))

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
    priority: 0.8
  }))

  // Recipe routes - using the recipes array directly
  const recipeRoutes = recipes.map((recipe) => ({
    url: `${baseUrl}/${recipe.slug}`,
    lastModified: recipe.updatedDate ? recipe.updatedDate.toISOString() : recipe.createdDate?.toISOString() || new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  return [...routes, ...categoryRoutes, ...recipeRoutes]
}