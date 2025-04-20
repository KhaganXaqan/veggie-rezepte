'use client'

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { RecipeCardMasonry } from "@/components/recipe-card-masonry"
import { recipes } from "@/lib/data"
import type { Recipe } from "@/lib/data"
import Head from 'next/head'

export default function FruehstueckRecipes() {
  const categoryName = "Frühstück"
  const categorySlug = "fruehstueck"
  const categoryRecipes = recipes.filter((recipe: Recipe) => recipe.category === categoryName)
  
  // Get the base URL for canonical link
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://veggie-rezepte.de';
  const canonicalUrl = `${baseUrl}/kategorien/${categorySlug}`;
  
  // SEO metadata
  const pageTitle = `${categoryName} Rezepte | Vegetarischer Tagesstart`;
  const pageDescription = `Starte deinen Tag mit einem energiereichen vegetarischen Frühstück - von süßen Optionen bis zu herzhaften Alternativen.`;
  
  // Set metadata on component mount
  useEffect(() => {
    // Set page title
    document.title = pageTitle;
    
    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);
    
    // Set meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', `${categoryName}, vegetarisch, rezepte, veggie rezepte, tagesstart, gesund, einfach`);
    
    // Update OpenGraph tags
    updateOpenGraphTags();
  }, []);
  
  // Helper function to update OpenGraph tags
  const updateOpenGraphTags = () => {
    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);
    
    // OG Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', pageDescription);
    
    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', canonicalUrl);
    
    // OG Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');
  };
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${categoryName}, vegetarisch, rezepte, veggie rezepte, tagesstart, gesund, einfach`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-white">
        <SiteHeader />
        <main className="flex-1 bg-white">
          <div className="container py-8">
            <div className="max-w-2xl mx-auto mb-8">
              <h1 className="text-4xl font-['Montserrat'] font-bold uppercase mb-8 !text-black">{categoryName} Rezepte</h1>
            </div>
          </div>

          <div className="category-recipes">
            {categoryRecipes.map((recipe, index) => (
              <RecipeCardMasonry 
                key={recipe.slug} 
                recipe={recipe}
                index={index}
              />
            ))}
          </div>

          {categoryRecipes.length === 0 && (
            <div className="container">
              <div className="text-center text-black/70 py-12 font-['Montserrat']">
                Keine Rezepte in dieser Kategorie gefunden.
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
} 