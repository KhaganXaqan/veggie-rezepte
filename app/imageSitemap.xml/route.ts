import { recipes } from '@/lib/data'

export async function GET() {
  const baseUrl = 'https://veggie-rezepte.de'

  // Create XML content
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${recipes.map(recipe => `
        <url>
          <loc>${baseUrl}/${recipe.slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <image:image>
            <image:loc>${baseUrl}${recipe.image}</image:loc>
            <image:title>${recipe.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')}</image:title>
            <image:caption>${recipe.description?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;') || ''}</image:caption>
          </image:image>
        </url>
      `).join('')}
    </urlset>`.trim()

  // Return the XML with proper headers
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
} 