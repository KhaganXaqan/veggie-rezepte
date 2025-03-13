import { Metadata } from 'next'
import { getRecipeBySlug } from '@/lib/data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const recipe = getRecipeBySlug(params.slug)
  if (!recipe) {
    return {
      title: 'Recipe Not Found - Veggie-Rezepte',
    }
  }

  return {
    title: `${recipe.title} - Veggie-Rezepte`,
    description: recipe.description || '',
    openGraph: {
      title: `${recipe.title} - Veggie-Rezepte`,
      description: recipe.description || '',
      images: [recipe.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${recipe.title} - Veggie-Rezepte`,
      description: recipe.description || '',
      images: [recipe.image],
    },
  }
} 