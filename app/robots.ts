import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://veggie-rezepte.de'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/rezepte/*',
          '/kategorien/*',
          '/about',
          '/contact',
          '/faq'
        ],
        disallow: [
          '/api/*',
          '/admin/*',
          '/_next/*',
          '/static/*'
        ],
      }
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/imageSitemap.xml`
    ],
  }
}