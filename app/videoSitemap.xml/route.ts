import { Recipe, recipes } from '@/lib/data'

export async function GET() {
  const baseUrl = 'https://www.veggie-rezepte.de'

  // Filter recipes that have video content
  const recipesWithVideos = recipes.filter(recipe => recipe.videoUrl)

  // Create XML content for video sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${recipesWithVideos.map(recipe => `
        <url>
          <loc>${baseUrl}/${recipe.slug}</loc>
          <video:video>
            <video:thumbnail_loc>${baseUrl}${recipe.image}</video:thumbnail_loc>
            <video:title>${recipe.title.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>').replace(/"/g, '"').replace(/'/g, '&apos;')} - Vegetarisches Rezept Video</video:title>
            <video:description>${(recipe.description || '').replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>').replace(/"/g, '"').replace(/'/g, '&apos;')} - Schritt-für-Schritt Video-Anleitung für dieses köstliche vegetarische Rezept.</video:description>
            <video:content_loc>${recipe.videoUrl}</video:content_loc>
            <video:duration>300</video:duration>
            <video:publication_date>${recipe.createdDate?.toISOString() || new Date().toISOString()}</video:publication_date>
            <video:category>Food & Cooking</video:category>
            <video:tag>vegetarisch</video:tag>
            <video:tag>rezept</video:tag>
            <video:tag>${recipe.category.toLowerCase()}</video:tag>
            ${recipe.tags?.map(tag => `<video:tag>${tag.toLowerCase()}</video:tag>`).join('') || ''}
            <video:family_friendly>yes</video:family_friendly>
            <video:uploader info="${baseUrl}/about">Veggie Rezepte</video:uploader>
            <video:live>no</video:live>
          </video:video>
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