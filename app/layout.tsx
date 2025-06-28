import './globals.css';
import './mobile-styles.css';
import type { Metadata } from 'next';
import { Inter as InterFont } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { AnalyticsWrapper } from '@/components/analytics-wrapper';
import { siteConfig } from '@/lib/constants';
import Script from 'next/script';
import { cn } from '@/lib/utils';

const inter = InterFont({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veggie-rezepte.de'),
  title: {
    default: 'Veggie Rezepte - Entdecke köstliche vegetarische Gerichte',
    template: '%s | Veggie Rezepte'
  },
  description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche. Von einfachen Alltagsgerichten bis zu festlichen Menüs - alles vegetarisch, lecker und mit detaillierten Kochanleitungen.',
  keywords: [
    'vegetarische rezepte',
    'veggie rezepte', 
    'deutsche küche',
    'kochen',
    'vegetarisch',
    'gesunde ernährung',
    'vegetarische gerichte',
    'rezepte ohne fleisch',
    'schnelle rezepte',
    'einfache rezepte',
    'hauptgerichte vegetarisch',
    'suppen vegetarisch',
    'salate rezepte',
    'desserts vegetarisch',
    'frühstück vegetarisch',
    'aufläufe vegetarisch'
  ],
  authors: [{ name: 'Veggie Rezepte Team' }],
  creator: 'Veggie Rezepte',
  publisher: 'Veggie Rezepte',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/images/logo/favicon.ico', sizes: 'any' },
      { url: '/images/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/images/logo/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/logo/safari-pinned-tab.svg',
        color: '#00884f',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://veggie-rezepte.de',
    siteName: 'Veggie Rezepte',
    title: 'Veggie Rezepte - Köstliche vegetarische Gerichte',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche. Von einfachen Alltagsgerichten bis zu festlichen Menüs - alles vegetarisch, lecker und mit detaillierten Kochanleitungen.',
    images: [{
      url: '/images/logo/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Veggie Rezepte - Vegetarische Küche',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veggie Rezepte - Vegetarische Küche',
    description: 'Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche',
    images: ['/images/logo/og-image.jpg'],
    creator: '@veggierezepte',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://veggie-rezepte.de',
    languages: {
      'de-DE': 'https://veggie-rezepte.de',
    },
  },
  category: 'food',
  classification: 'Vegetarian Recipes',
  verification: {
    google: 'your-google-search-console-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
      'pinterest-site-verification': 'your-pinterest-verification-code',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#f9d24f" />
        <meta name="color-scheme" content="light" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Enhanced preconnect for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Font loading optimization */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          media="print"
          onLoad="this.media='all'"
        />
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_title: document.title,
              page_location: window.location.href,
              content_group1: 'Recipes',
              content_group2: 'Vegetarian',
              custom_map: {
                'custom_parameter_1': 'recipe_category',
                'custom_parameter_2': 'recipe_difficulty'
              },
              send_page_view: true,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
            
            // Enhanced ecommerce tracking for recipe interactions
            gtag('config', 'G-XXXXXXXXXX', {
              custom_map: {'custom_parameter_1': 'recipe_view'}
            });
            
            // Track recipe views
            function trackRecipeView(recipeName, category, difficulty) {
              gtag('event', 'recipe_view', {
                'recipe_name': recipeName,
                'recipe_category': category,
                'recipe_difficulty': difficulty,
                'content_type': 'recipe'
              });
            }
            
            // Track recipe interactions
            function trackRecipeInteraction(action, recipeName) {
              gtag('event', action, {
                'recipe_name': recipeName,
                'content_type': 'recipe'
              });
            }
            
            // Track search queries
            function trackSearch(searchTerm, resultsCount) {
              gtag('event', 'search', {
                'search_term': searchTerm,
                'results_count': resultsCount
              });
            }
            
            // Track newsletter signups
            function trackNewsletterSignup() {
              gtag('event', 'newsletter_signup', {
                'method': 'website_form'
              });
            }
            
            // Make functions globally available
            window.trackRecipeView = trackRecipeView;
            window.trackRecipeInteraction = trackRecipeInteraction;
            window.trackSearch = trackSearch;
            window.trackNewsletterSignup = trackNewsletterSignup;
          `}
        </Script>
        
        {/* Google Ads */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9378654958981077"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Enhanced Schema.org structured data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://veggie-rezepte.de/#website",
                  "url": "https://veggie-rezepte.de",
                  "name": "Veggie Rezepte",
                  "description": "Entdecke über 1000 getestete vegetarische Rezepte aus der deutschen Küche",
                  "publisher": {
                    "@id": "https://veggie-rezepte.de/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://veggie-rezepte.de/rezepte/alle?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "de-DE"
                },
                {
                  "@type": "Organization",
                  "@id": "https://veggie-rezepte.de/#organization",
                  "name": "Veggie Rezepte",
                  "url": "https://veggie-rezepte.de",
                  "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "de-DE",
                    "@id": "https://veggie-rezepte.de/#/schema/logo/image/",
                    "url": "https://veggie-rezepte.de/images/logo/logo.png",
                    "contentUrl": "https://veggie-rezepte.de/images/logo/logo.png",
                    "width": 200,
                    "height": 200,
                    "caption": "Veggie Rezepte"
                  },
                  "image": {
                    "@id": "https://veggie-rezepte.de/#/schema/logo/image/"
                  },
                  "sameAs": [
                    "https://www.facebook.com/veggierezepte",
                    "https://www.instagram.com/veggierezepte",
                    "https://www.pinterest.com/veggierezepte",
                    "https://www.youtube.com/@veggierezepte",
                    "https://twitter.com/veggierezepte"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "areaServed": "DE",
                    "availableLanguage": "German",
                    "email": "info@veggie-rezepte.de"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "DE",
                    "addressLocality": "Deutschland"
                  }
                }
              ]
            })
          }}
        />
        
        {/* Hotjar Tracking Code */}
        <Script id="hotjar" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:0,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body className={cn("min-h-screen bg-white font-sans antialiased", inter.className)}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-white">
            <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50">
              Zum Hauptinhalt springen
            </a>
            <main id="main-content">
              {children}
            </main>
          </div>
          <Toaster />
          <Analytics />
          <AnalyticsWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}