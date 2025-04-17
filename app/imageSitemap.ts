import { MetadataRoute } from 'next'
import { recipes } from '@/lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://veggie-rezepte.de'

  // Create image sitemap entries for all recipe images
  const imageEntries = recipes.map((recipe) => ({
    url: `${baseUrl}${recipe.image}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,  // Type assertion to fix the type
    priority: 0.8,
    // Additional image metadata
    images: [
      {
        loc: `${baseUrl}${recipe.image}`,
        caption: recipe.title,
        title: recipe.title,
      }
    ],
  }))

  return imageEntries
} 