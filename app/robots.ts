import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://veggie-rezepte.de'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/admin/*'],
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/imageSitemap.xml`
    ],
  }
}