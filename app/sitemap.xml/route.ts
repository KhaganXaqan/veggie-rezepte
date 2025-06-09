import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'

export async function GET() {
  const sitemap = await generateSitemap()
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

export async function generateStaticParams() {
  return []
}

async function generateSitemap(): Promise<string> {
  const baseUrl = 'https://veggie-rezepte.de'

  // Base routes
  const routes = [
    '',
    '/rezepte/alle',
    '/kategorien',
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
  
  const categoryRoutes = categories.map((category) => `/kategorien/${category}`)

  // Recipe routes - using the recipes array directly
  const recipeRoutes = recipes.map((recipe) => `/${recipe.slug}`)

  const allRoutes = [...routes, ...categoryRoutes, ...recipeRoutes]
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
`).join('')}
</urlset>`

  return sitemapXml
}
