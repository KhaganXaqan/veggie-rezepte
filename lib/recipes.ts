import fs from 'fs';
import path from 'path';

export interface Recipe {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: string;
  imagePath: string;
  ingredients: string[];
  instructions: string[];
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export function getAllRecipes(): Recipe[] {
  const recipesFile = path.join(process.cwd(), 'public/uploads/data/recipes.json');
  const fileContents = fs.readFileSync(recipesFile, 'utf8');
  const data = JSON.parse(fileContents);
  return data.recipes;
}

export function getRecipesByCategory(categoryId: string): Recipe[] {
  const recipes = getAllRecipes();
  return recipes.filter(recipe => recipe.categoryId === categoryId);
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  const recipes = getAllRecipes();
  return recipes.find(recipe => recipe.slug === slug);
}

export function getAllCategories(): Category[] {
  const categoriesFile = path.join(process.cwd(), 'public/uploads/data/categories.json');
  const fileContents = fs.readFileSync(categoriesFile, 'utf8');
  const data = JSON.parse(fileContents);
  return data.categories;
}

export function getCategoryById(id: string): Category | undefined {
  const categories = getAllCategories();
  return categories.find(category => category.id === id);
}
