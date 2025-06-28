'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    trackRecipeView: (recipeName: string, category: string, difficulty: string) => void
    trackRecipeInteraction: (action: string, recipeName: string) => void
    trackSearch: (searchTerm: string, resultsCount: number) => void
    trackNewsletterSignup: () => void
  }
}

export function AnalyticsWrapper() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track page views
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: pathname + (searchParams.toString() ? `?${searchParams.toString()}` : ''),
        page_title: document.title,
        page_location: window.location.href,
      })

      // Track custom events based on page type
      if (pathname.startsWith('/kategorien/')) {
        const category = pathname.split('/').pop()
        window.gtag('event', 'category_view', {
          'category_name': category,
          'page_path': pathname
        })
      }

      if (pathname === '/rezepte/alle') {
        const searchTerm = searchParams.get('q')
        const tag = searchParams.get('tag')
        
        if (searchTerm) {
          window.gtag('event', 'search', {
            'search_term': searchTerm,
            'page_path': pathname
          })
        }
        
        if (tag) {
          window.gtag('event', 'filter_recipes', {
            'filter_type': 'tag',
            'filter_value': tag,
            'page_path': pathname
          })
        }
      }

      // Track scroll depth
      let maxScroll = 0
      const trackScrollDepth = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        )
        
        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent
          window.gtag('event', 'scroll_depth', {
            'scroll_percent': scrollPercent,
            'page_path': pathname
          })
        }
      }

      window.addEventListener('scroll', trackScrollDepth, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', trackScrollDepth)
      }
    }
  }, [pathname, searchParams])

  return null
}