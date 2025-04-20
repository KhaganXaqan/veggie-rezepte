import { NextRequest, NextResponse } from 'next/server'
import { recipes } from '@/lib/data'

export async function GET(request: NextRequest) {
  const baseUrl = 'https://www.veggie-rezepte.de'

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const recipe of recipes) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/${recipe.slug}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += `    <image:image>\n`;
    xml += `      <image:loc>${baseUrl}${recipe.image}</image:loc>\n`;
    xml += `      <image:title>${recipe.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')}</image:title>\n`;
    xml += `      <image:caption>${recipe.description?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;') || ''}</image:caption>\n`;
    xml += `    </image:image>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>`;
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}