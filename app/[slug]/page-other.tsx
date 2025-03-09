"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { RecipeHeader } from '@/components/recipe-header'
import { RecipeIngredients } from '@/components/recipe-ingredients'
import { RecipeInstructions } from '@/components/recipe-instructions'
import { RecipeNutrition } from '@/components/recipe-nutrition'
import { RecipeSimilar } from '@/components/recipe-similar'
import { getRecipeBySlug, recipes, Recipe } from '@/lib/data'

type OtherRecipePageProps = {
  slug: string
}

export default function OtherRecipePage({ slug }: OtherRecipePageProps) {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [recommendedRecipes, setRecommendedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (slug) {
      const currentRecipe = getRecipeBySlug(slug);
      if (currentRecipe) {
        setRecipe(currentRecipe);

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

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container py-8">
        <article className="max-w-4xl mx-auto">
          {/* Recipe Header */}
          <RecipeHeader
            title={recipe.title}
            description={recipe.descriptionOnImage}
            image={recipe.image}
            category={recipe.category}
            tags={recipe.tags}
            prepTime={recipe.prepTime}
            servings={recipe.servings}
            rating={recipe.rating}
          />

          {/* Ingredients */}
          <section className="mb-12">
            <RecipeIngredients
              initialServings={recipe.servings}
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
            <RecipeNutrition
              servings={recipe.servings}
              nutrition={{
                calories: recipe.nutrition.calories,
                protein: recipe.nutrition.protein,
                carbs: recipe.nutrition.carbs,
                fat: recipe.nutrition.fat
              }}
            />
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
                        <h4 className="font-bold text-lg text-[#0b3558] mb-2 group-hover:text-[#db747a] transition-colors">
                          {recommendedRecipe.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {recommendedRecipe.descriptionOnImage}
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
  );
} 