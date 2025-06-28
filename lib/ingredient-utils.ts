import { recipes } from './data'

// Extract and normalize all ingredients from recipes
export function extractAllIngredients() {
  const ingredientSet = new Set<string>()
  
  recipes.forEach(recipe => {
    // Extract from main ingredients
    recipe.ingredients.forEach(ingredient => {
      const normalized = normalizeIngredientName(ingredient.name)
      if (normalized) {
        ingredientSet.add(normalized)
      }
    })
    
    // Extract from ingredient groups if they exist
    if (recipe.ingredientGroups) {
      recipe.ingredientGroups.forEach(group => {
        group.ingredients.forEach(ingredient => {
          const normalized = normalizeIngredientName(ingredient.name)
          if (normalized) {
            ingredientSet.add(normalized)
          }
        })
      })
    }
  })
  
  return Array.from(ingredientSet).sort()
}

// Normalize ingredient names to handle variations
export function normalizeIngredientName(name: string): string {
  if (!name) return ''
  
  let normalized = name.toLowerCase().trim()
  
  // Remove common prefixes and suffixes
  normalized = normalized
    .replace(/^(frische[rs]?|getrocknete[rs]?|gehackte[rs]?|geschnittene[rs]?|geriebene[rs]?)\s+/g, '')
    .replace(/\s+(frisch|getrocknet|gehackt|geschnitten|gerieben)$/g, '')
    .replace(/\s+(nach geschmack|optional|zum garnieren|zum servieren)$/g, '')
  
  // Handle plurals and common variations
  const singularMap: { [key: string]: string } = {
    'tomaten': 'tomate',
    'zwiebeln': 'zwiebel',
    'kartoffeln': 'kartoffel',
    'möhren': 'möhre',
    'karotten': 'möhre',
    'paprikas': 'paprika',
    'paprikaschoten': 'paprika',
    'champignons': 'champignon',
    'pilze': 'pilz',
    'kräuter': 'kräuter',
    'gewürze': 'gewürz',
    'eier': 'ei',
    'nudeln': 'nudel',
    'spaghetti': 'nudel',
    'penne': 'nudel',
    'fusilli': 'nudel',
    'linsen': 'linse',
    'kichererbsen': 'kichererbse',
    'bohnen': 'bohne',
    'erbsen': 'erbse',
    'nüsse': 'nuss',
    'walnüsse': 'walnuss',
    'haselnüsse': 'haselnuss',
    'mandeln': 'mandel',
    'pistazien': 'pistazie',
    'rosinen': 'rosine',
    'datteln': 'dattel',
    'beeren': 'beere',
    'erdbeeren': 'erdbeere',
    'himbeeren': 'himbeere',
    'blaubeeren': 'blaubeere',
    'brombeeren': 'brombeere',
    'äpfel': 'apfel',
    'birnen': 'birne',
    'zitronen': 'zitrone',
    'limetten': 'limette',
    'orangen': 'orange',
    'bananen': 'banane',
    'avocados': 'avocado',
    'gurken': 'gurke',
    'zucchini': 'zucchini',
    'auberginen': 'aubergine',
    'brokkoli': 'brokkoli',
    'blumenkohl': 'blumenkohl',
    'spinat': 'spinat',
    'rucola': 'rucola',
    'salat': 'salat',
    'feldsalat': 'feldsalat',
    'radieschen': 'radieschen',
    'rettich': 'rettich',
    'sellerie': 'sellerie',
    'lauch': 'lauch',
    'porree': 'lauch',
    'frühlingszwiebeln': 'frühlingszwiebel',
    'schalotten': 'schalotte',
    'knoblauch': 'knoblauch',
    'ingwer': 'ingwer',
    'chili': 'chili',
    'chilischoten': 'chili',
    'peperoni': 'peperoni',
    'oliven': 'olive',
    'kapern': 'kaper',
    'cornichons': 'cornichon',
    'gurken': 'gurke',
    'tomatenmark': 'tomatenmark',
    'passierte tomaten': 'passierte tomate',
    'dosentomaten': 'dosentomate',
    'sahne': 'sahne',
    'milch': 'milch',
    'joghurt': 'joghurt',
    'quark': 'quark',
    'frischkäse': 'frischkäse',
    'mozzarella': 'mozzarella',
    'parmesan': 'parmesan',
    'feta': 'feta',
    'ziegenkäse': 'ziegenkäse',
    'gouda': 'gouda',
    'emmentaler': 'emmentaler',
    'cheddar': 'cheddar',
    'ricotta': 'ricotta',
    'mascarpone': 'mascarpone',
    'butter': 'butter',
    'margarine': 'margarine',
    'olivenöl': 'olivenöl',
    'sonnenblumenöl': 'sonnenblumenöl',
    'rapsöl': 'rapsöl',
    'sesamöl': 'sesamöl',
    'kokosöl': 'kokosöl',
    'essig': 'essig',
    'balsamico': 'balsamico',
    'weißweinessig': 'weißweinessig',
    'apfelessig': 'apfelessig',
    'salz': 'salz',
    'pfeffer': 'pfeffer',
    'paprikapulver': 'paprikapulver',
    'kurkuma': 'kurkuma',
    'kreuzkümmel': 'kreuzkümmel',
    'koriander': 'koriander',
    'petersilie': 'petersilie',
    'schnittlauch': 'schnittlauch',
    'dill': 'dill',
    'basilikum': 'basilikum',
    'oregano': 'oregano',
    'thymian': 'thymian',
    'rosmarin': 'rosmarin',
    'salbei': 'salbei',
    'majoran': 'majoran',
    'lorbeerblätter': 'lorbeerblatt',
    'zimt': 'zimt',
    'muskatnuss': 'muskatnuss',
    'nelken': 'nelke',
    'kardamom': 'kardamom',
    'sternanis': 'sternanis',
    'vanille': 'vanille',
    'zucker': 'zucker',
    'honig': 'honig',
    'ahornsirup': 'ahornsirup',
    'agavendicksaft': 'agavendicksaft',
    'mehl': 'mehl',
    'vollkornmehl': 'vollkornmehl',
    'dinkelmehl': 'dinkelmehl',
    'haferflocken': 'haferflocken',
    'quinoa': 'quinoa',
    'bulgur': 'bulgur',
    'couscous': 'couscous',
    'reis': 'reis',
    'basmati': 'basmati',
    'jasminreis': 'jasminreis',
    'wildreis': 'wildreis',
    'risottoreis': 'risottoreis',
    'hefe': 'hefe',
    'backpulver': 'backpulver',
    'natron': 'natron',
    'stärke': 'stärke',
    'speisestärke': 'stärke',
    'maisstärke': 'maisstärke',
    'gelatine': 'gelatine',
    'agar': 'agar',
    'kokosmilch': 'kokosmilch',
    'mandelmilch': 'mandelmilch',
    'hafermilch': 'hafermilch',
    'sojamilch': 'sojamilch',
    'gemüsebrühe': 'gemüsebrühe',
    'hühnerbrühe': 'hühnerbrühe',
    'fond': 'fond',
    'wein': 'wein',
    'weißwein': 'weißwein',
    'rotwein': 'rotwein',
    'bier': 'bier',
    'cognac': 'cognac',
    'rum': 'rum',
    'likör': 'likör'
  }
  
  // Apply singular mapping
  if (singularMap[normalized]) {
    normalized = singularMap[normalized]
  }
  
  // Remove common German articles and prepositions
  normalized = normalized
    .replace(/^(der|die|das|ein|eine|einen|einem|einer)\s+/g, '')
    .replace(/^(von|aus|mit|ohne|für)\s+/g, '')
  
  return normalized
}

// Find recipes that contain specific ingredients
export function findRecipesByIngredients(selectedIngredients: string[]) {
  if (selectedIngredients.length === 0) {
    return {
      exactMatches: [],
      partialMatches: []
    }
  }
  
  const normalizedSelected = selectedIngredients.map(ing => normalizeIngredientName(ing))
  const exactMatches: any[] = []
  const partialMatches: any[] = []
  
  recipes.forEach(recipe => {
    // Get all ingredients from the recipe
    const recipeIngredients = new Set<string>()
    
    recipe.ingredients.forEach(ingredient => {
      const normalized = normalizeIngredientName(ingredient.name)
      if (normalized) {
        recipeIngredients.add(normalized)
      }
    })
    
    if (recipe.ingredientGroups) {
      recipe.ingredientGroups.forEach(group => {
        group.ingredients.forEach(ingredient => {
          const normalized = normalizeIngredientName(ingredient.name)
          if (normalized) {
            recipeIngredients.add(normalized)
          }
        })
      })
    }
    
    // Check how many selected ingredients are in this recipe
    const foundIngredients = normalizedSelected.filter(ing => recipeIngredients.has(ing))
    const missingIngredients = normalizedSelected.filter(ing => !recipeIngredients.has(ing))
    
    if (foundIngredients.length === normalizedSelected.length) {
      // Exact match - recipe contains all selected ingredients
      exactMatches.push({
        recipe,
        matchPercentage: 100,
        foundIngredients: selectedIngredients,
        missingIngredients: []
      })
    } else if (foundIngredients.length > 0) {
      // Partial match - recipe contains some selected ingredients
      const matchPercentage = Math.round((foundIngredients.length / normalizedSelected.length) * 100)
      
      // Map back to original ingredient names for display
      const foundOriginal = selectedIngredients.filter(original => 
        foundIngredients.includes(normalizeIngredientName(original))
      )
      const missingOriginal = selectedIngredients.filter(original => 
        missingIngredients.includes(normalizeIngredientName(original))
      )
      
      partialMatches.push({
        recipe,
        matchPercentage,
        foundIngredients: foundOriginal,
        missingIngredients: missingOriginal
      })
    }
  })
  
  // Sort partial matches by match percentage (highest first)
  partialMatches.sort((a, b) => b.matchPercentage - a.matchPercentage)
  
  return {
    exactMatches,
    partialMatches
  }
}

// Get ingredient suggestions based on partial input
export function getIngredientSuggestions(input: string, allIngredients: string[], limit: number = 10): string[] {
  if (!input.trim()) return []
  
  const normalizedInput = input.toLowerCase().trim()
  
  return allIngredients
    .filter(ingredient => 
      ingredient.toLowerCase().includes(normalizedInput)
    )
    .slice(0, limit)
}

// Get all unique ingredients from recipes
export const ALL_INGREDIENTS = extractAllIngredients()