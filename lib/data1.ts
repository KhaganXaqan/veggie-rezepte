// First, let's define the type for a recipe
export type Recipe = {
  title: string
  image: string
  prepTime?: string
  rating?: number
  category: string
  slug: string
  tags: string[]
  servings: number
  description: string
  descriptionOnImage: string,
  introductionParagraph: string,
  ingredients: { 
    amount?: number | string
    unit?: string
    name: string 
  }[]
  instructions: string[]
  nutrition: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
  ingredientGroups?: {
    title: string
    description: string
    ingredients: {
      amount?: number | string
      unit?: string
      name: string
    }[]
  }[]
}

// Then update the recipes array with all required properties
export const recipes: Recipe[] = [
  {
    "title": "Flammkuchen",
    "image": "/images/MainCourses/flammkuchen.webp",
    "prepTime": "30 Min.",
    "rating": 4.8,
    "category": "Hauptgerichte",
    "slug": "flammkuchen",
    "tags": ["Traditionell", "Hauptgerichte", "Flammkuchen"],
    "servings": 1,
    "description": "Mein liebstes Rezept für einen knusprigen Flammkuchen! Während der traditionelle elsässische Flammkuchen oft mit Speck zubereitet wird, ist meine vegetarische Variante in nur 30 Minuten fertig und mindestens genauso lecker. Der hauchdünne Teig wird schön knusprig gebacken und die Kombination aus cremiger Basis und würzigen Zwiebeln macht dieses Gericht zu einem echten Geschmackserlebnis.",
    "descriptionOnImage": "Ein dünner, knuspriger Flammkuchen mit cremiger Basis, Zwiebeln und Käse – ein Klassiker aus der deutschen Küche.",
    "ingredientGroups": [
      {
        "title": "Der Grundteig",
        "description": "Ein hauchdünner, knuspriger Teig ist das Fundament für einen perfekten Flammkuchen. Die Kombination aus Mehl, Wasser und einem Schuss Olivenöl macht den Teig geschmeidig und beim Backen wunderbar knusprig.",
        "introductionParagraph": "Mein liebstes Rezept für einen knusprigen Flammkuchen! Während der traditionelle elsässische Flammkuchen oft mit Speck zubereitet wird, ist meine vegetarische Variante in nur 30 Minuten fertig und mindestens genauso lecker. Der hauchdünne Teig wird schön knusprig gebacken, und die Kombination aus cremiger Basis und würzigen Zwiebeln macht dieses Gericht zu einem echten Geschmackserlebnis. Perfekt für eine schnelle Mahlzeit oder als Party-Snack!"
        "ingredients": [
          { "amount": 62, "unit": "g", "name": "Mehl" },
          { "amount": 31, "unit": "ml", "name": "Wasser" },
          { "amount": 0.5, "unit": "EL", "name": "Olivenöl" },
          { "amount": 1, "unit": "Prise", "name": "Salz" }
        ]
      },
      {
        "title": "Die cremige Basis",
        "description": "Die Crème fraîche bildet die perfekte Grundlage für den Belag. Sie wird beim Backen leicht bräunlich und entwickelt einen herrlich würzigen Geschmack.",
        "ingredients": [
          { "amount": 50, "unit": "g", "name": "Crème fraîche" }
        ]
      },
      {
        "title": "Der würzige Belag",
        "description": "Die Zwiebeln werden beim Backen leicht karamellisiert und entwickeln eine natürliche Süße. Der Gruyère oder Emmentaler sorgt für den perfekten würzigen Abschluss.",
        "ingredients": [
          { "amount": 0.5, "unit": "", "name": "Zwiebel (dünn geschnitten)" },
          { "amount": 25, "unit": "g", "name": "Gruyère oder Emmentaler (gerieben)" },
          { "amount": undefined, "unit": "", "name": "Salz" },
          { "amount": undefined, "unit": "", "name": "Pfeffer" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 62, "unit": "g", "name": "Mehl" },
      { "amount": 31, "unit": "ml", "name": "Wasser" },
      { "amount": 0.5, "unit": "EL", "name": "Olivenöl" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 50, "unit": "g", "name": "Crème fraîche" },
      { "amount": 0.5, "unit": "", "name": "Zwiebel (dünn geschnitten)" },
      { "amount": 25, "unit": "g", "name": "Gruyère oder Emmentaler (gerieben)" },
      { "amount": undefined, "unit": "", "name": "Salz" },
      { "amount": undefined, "unit": "", "name": "Pfeffer" }
    ],
    "instructions": [
      "Den Backofen auf 250°C vorheizen. Ein Backblech mit Backpapier auslegen.",
      "Für den Teig Mehl, Wasser, Olivenöl und Salz in einer Schüssel zu einem glatten Teig verkneten. Den Teig dünn ausrollen und auf das Backblech legen.",
      "Die Crème fraîche gleichmäßig auf dem Teig verteilen. Mit Salz und Pfeffer würzen.",
      "Die dünn geschnittenen Zwiebeln gleichmäßig auf der Crème fraîche verteilen. Den geriebenen Käse darüberstreuen.",
      "Den Flammkuchen im vorgeheizten Ofen für 10–12 Minuten backen, bis der Rand knusprig und der Käse goldbraun ist.",
      "Heiß servieren und genießen!"
    ],
    "nutrition": {
      "calories": 87,
      "protein": "2.5g",
      "carbs": "10g",
      "fat": "3.8g"
    }
  }
  
  
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}