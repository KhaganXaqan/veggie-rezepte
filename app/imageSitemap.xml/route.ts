import { Recipe, recipes } from '@/lib/data'

// Locally extend Recipe for sitemap use
// This type is only for TypeScript in this file
// and does not affect your data.ts
//
type RecipeWithImages = Recipe & {
  images?: { [key: string]: string };
  imageIngredient?: string;
  image?: string;
};

export async function GET() {
  const baseUrl = 'https://veggie-rezepte.de'

  // Helper to extract all image URLs from a recipe
  function extractAllImageUrls(recipe: RecipeWithImages) {
    const urls = new Set<string>();
    // Main image
    if (recipe.image) urls.add(recipe.image);
    // images object (image1, image2, ...)
    if (recipe.images && typeof recipe.images === 'object') {
      Object.values(recipe.images).forEach(img => {
        if (typeof img === 'string') urls.add(img);
      });
    }
    // Any other image fields (e.g., imageIngredient)
    if (recipe.imageIngredient) urls.add(recipe.imageIngredient);
    // Add more fields if you have custom ones
    return Array.from(urls);
  }

  // Create XML content
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${recipes.map(recipe => {
        const imageUrls = extractAllImageUrls(recipe);
        return `
        <url>
          <loc>${baseUrl}/${recipe.slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          ${imageUrls.map(imgUrl => `
            <image:image>
              <image:loc>${baseUrl}${imgUrl}</image:loc>
              <image:title>${recipe.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')}</image:title>
              <image:caption>${recipe.description?.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;') || ''}</image:caption>
            </image:image>
          `).join('')}
        </url>
        `;
      }).join('')}
    </urlset>`.trim()

  // Return the XML with proper headers
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
} 