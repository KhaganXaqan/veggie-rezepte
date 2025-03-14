"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { RecipeHeader } from '@/components/recipe-header'
import { RecipeIngredients } from '@/components/recipe-ingredients'
import { RecipeInstructions } from '@/components/recipe-instructions'
import { RecipeNutrition } from '@/components/recipe-nutrition'
import { RecipeSimilar } from '@/components/recipe-similar'
import { getRecipeBySlug, recipes, Recipe } from '@/lib/data'
import Head from 'next/head'
import Script from 'next/script'

type OtherRecipePageProps = {
  slug: string
}

export default function OtherRecipePage({ slug }: OtherRecipePageProps) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [recommendedRecipes, setRecommendedRecipes] = useState<Recipe[]>([]);
  const [structuredData, setStructuredData] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      const currentRecipe = getRecipeBySlug(slug);
      if (currentRecipe) {
        setRecipe(currentRecipe);

        // Update document title and meta description client-side
        document.title = `${currentRecipe.title} - Veggie Rezepte`;
        
        // Set meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', currentRecipe.description || '');
        
        // Set canonical URL
        const baseUrl = window.location.origin;
        const canonicalUrl = `${baseUrl}/${slug}`;
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
          canonicalLink = document.createElement('link');
          canonicalLink.setAttribute('rel', 'canonical');
          document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonicalUrl);

        // Get random recipes from the same category
        const recipesFromSameCategory = recipes.filter(r =>
          r.slug !== slug &&
          r.category === currentRecipe.category
        );

        // Get 3 random recipes
        const getRandomRecipes = (arr: Recipe[], count: number) => {
          const shuffled = [...arr].sort(() => 0.5 - Math.random());
          return shuffled.slice(0, count);
        };

        setRecommendedRecipes(getRandomRecipes(recipesFromSameCategory, 3));
        
        // Create structured data for recipe
        const recipeStructuredData = {
          '@context': 'https://schema.org',
          '@type': 'Recipe',
          name: currentRecipe.title,
          image: currentRecipe.image,
          description: currentRecipe.description || '',
          author: {
            '@type': 'Organization',
            name: 'Veggie-Rezepte'
          },
          datePublished: new Date().toISOString().split('T')[0],
          recipeCategory: currentRecipe.category,
          recipeCuisine: 'Vegetarisch',
          prepTime: `PT${currentRecipe.prepTime || 30}M`,
          cookTime: 'PT30M',
          recipeYield: `${currentRecipe.servings || 4} Portionen`,
          nutrition: currentRecipe.nutrition ? {
            '@type': 'NutritionInformation',
            calories: `${currentRecipe.nutrition.calories} kcal`,
            proteinContent: `${currentRecipe.nutrition.protein}g`,
            carbohydrateContent: `${currentRecipe.nutrition.carbs}g`,
            fatContent: `${currentRecipe.nutrition.fat}g`
          } : undefined,
          recipeIngredient: currentRecipe.ingredients.map(ing => 
            `${ing.amount || ''} ${ing.unit || ''} ${ing.name}`
          ),
          recipeInstructions: currentRecipe.instructions.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            text: step
          })),
          keywords: currentRecipe.tags ? currentRecipe.tags.join(', ') : 'vegetarisch, rezept'
        };
        
        setStructuredData(recipeStructuredData);
      }
    }
  }, [slug]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="container py-8">
          <p>Rezept wird geladen...</p>
        </div>
      </div>
    );
  }

  // Get the base URL for canonical link
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://veggie-rezepte.de';
  const canonicalUrl = `${baseUrl}/${slug}`;

  return (
    <>
      <Head>
        <title>{`${recipe.title} - Veggie-Rezepte`}</title>
        <meta name="description" content={recipe.description || ''} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${recipe.title} - Veggie-Rezepte`} />
        <meta property="og:description" content={recipe.description || ''} />
        <meta property="og:image" content={recipe.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${recipe.title} - Veggie-Rezepte`} />
        <meta name="twitter:description" content={recipe.description || ''} />
        <meta name="twitter:image" content={recipe.image} />
      </Head>
      
      {/* Add structured data script */}
      {structuredData && (
        <Script
          id="recipe-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="container py-8">
          <article className="max-w-4xl mx-auto">
            {/* Recipe Header */}
            <RecipeHeader
              title={recipe.title}
              description={recipe.description || ""}
              image={recipe.image}
              category={recipe.category}
              tags={recipe.tags || []}
              prepTime={recipe.prepTime}
              servings={recipe.servings}
              rating={recipe.rating}
            />

            {/* Ingredients */}
            <section className="mb-12">
              <RecipeIngredients
                initialServings={recipe.servings || 4}
                ingredients={recipe.ingredients}
              />
            </section>

            {/* Instructions */}
            <section className="mb-12">
              <RecipeInstructions
                instructions={recipe.instructions}
              />
            </section>

            {/* Nutrition */}
            <section className="mb-12">
              {recipe.nutrition && (
                <RecipeNutrition
                  servings={recipe.servings || 4}
                  nutrition={{
                    calories: typeof recipe.nutrition.calories === 'string' 
                      ? parseInt(recipe.nutrition.calories) 
                      : recipe.nutrition.calories,
                    protein: recipe.nutrition.protein,
                    carbs: recipe.nutrition.carbs,
                    fat: recipe.nutrition.fat
                  }}
                />
              )}
            </section>

            {/* Empfohlene Beiträge */}
            <div className="w-full mb-12">
              <div className="bg-gray-50 rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-serif font-bold text-sm font-lg text-gray-500 tracking-wider">
                    Empfohlene {recipe.category}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendedRecipes.map((recommendedRecipe, index) => (
                    <a href={`/${recommendedRecipe.slug}`} className="block" key={index}>
                      <div className="relative group">
                        <div className="w-full aspect-square rounded-lg overflow-hidden">
                          <img
                            src={recommendedRecipe.image}
                            alt={recommendedRecipe.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300">
                            <span className="text-white text-sm font-medium text-center px-4">
                              Empfohlene {recipe.category}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#f9d24f] transition-colors break-words hyphens-auto overflow-wrap-anywhere line-clamp-2">
                            {recommendedRecipe.title}
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-2 break-words">
                            {recommendedRecipe.description || ""}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Similar Recipes */}
            <section className="mb-12">
              <RecipeSimilar
                recipes={recipes}
                currentRecipe={recipe}
              />
            </section>
          </article>
        </div>
      </div>
    </>
  );
} 