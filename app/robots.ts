import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'],
    },
    sitemap: [
      'https://veggie-rezepte.de/sitemap.xml',
      'https://www.veggie-rezepte.de/sitemap.xml',
      'https://veggie-rezepte.de/imageSitemap.xml',
      'https://www.veggie-rezepte.de/imageSitemap.xml'
    ],
  }
}