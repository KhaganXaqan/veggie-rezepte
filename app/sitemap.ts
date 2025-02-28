import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'
import { categoryNames } from '@/lib/constants'

export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://veggie-rezepte.de'

  // Base routes
  const routes = [
    "",
    "/rezepte/alle",
    "/kategorien",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  // Category routes
  const categoryRoutes = Object.keys(categoryNames).map((category) => ({
    url: `${baseUrl}/kategorien/${category}`,
    lastModified: new Date().toISOString(),
  }))

  // Recipe routes - now at root level
  const recipeRoutes = recipes.map((recipe) => ({
    url: `${baseUrl}/${recipe.slug}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...categoryRoutes, ...recipeRoutes]
}