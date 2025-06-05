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
  }))

  // Recipe routes - using the recipes array directly
  const recipeRoutes = recipes.map((recipe) => ({
    url: `${baseUrl}/${recipe.slug}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...categoryRoutes, ...recipeRoutes]
}