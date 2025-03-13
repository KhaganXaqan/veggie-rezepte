import { Metadata } from 'next'

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}

/**
 * Generate consistent metadata for any page on the site
 * 
 * @param props SeoProps object containing title, description, path, and optional image and type
 * @returns Metadata object for Next.js
 */
export function generateSeoMetadata(props: SeoProps): Metadata {
  const { title, description, path, image, type = 'website' } = props;
  
  // Ensure path starts with a slash but doesn't end with one
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const trimmedPath = normalizedPath.endsWith('/') ? normalizedPath.slice(0, -1) : normalizedPath;
  
  // Build the canonical URL
  const url = `https://veggie-rezepte.de${trimmedPath}`;
  
  // Default image if none provided
  const ogImage = image || 'https://veggie-rezepte.de/images/logo/logo.png';
  
  return {
    title: title.includes('Veggie-Rezepte') ? title : `${title} - Veggie-Rezepte`,
    description,
    openGraph: {
      title: title.includes('Veggie-Rezepte') ? title : `${title} - Veggie-Rezepte`,
      description,
      images: [ogImage],
      type,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: title.includes('Veggie-Rezepte') ? title : `${title} - Veggie-Rezepte`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
} 