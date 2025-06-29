import { recipes } from './data'

// Comprehensive ingredient normalization mapping
const INGREDIENT_NORMALIZATION_MAP: { [key: string]: string } = {
  // Zwiebel variations
  'große rote zwiebel': 'zwiebel',
  'fein geschnittene zwiebel': 'zwiebel',
  'rote zwiebel': 'zwiebel',
  'weiße zwiebel': 'zwiebel',
  'gelbe zwiebel': 'zwiebel',
  'zwiebeln': 'zwiebel',
  'gemüsezwiebel': 'zwiebel',
  'küchenzwiebel': 'zwiebel',
  'speisezwiebel': 'zwiebel',
  'schalotte': 'schalotte',
  'schalotten': 'schalotte',
  'frühlingszwiebel': 'frühlingszwiebel',
  'frühlingszwiebeln': 'frühlingszwiebel',
  'lauchzwiebel': 'frühlingszwiebel',
  'lauchzwiebeln': 'frühlingszwiebel',

  // Tomaten variations
  'cherrytomaten': 'tomaten',
  'kirschtomaten': 'tomaten',
  'große reife tomaten': 'tomaten',
  'cocktailtomaten': 'tomaten',
  'rispentomaten': 'tomaten',
  'fleischtomaten': 'tomaten',
  'roma tomaten': 'tomaten',
  'san marzano tomaten': 'tomaten',
  'tomaten aus der dose': 'tomaten',
  'dosentomaten': 'tomaten',
  'passierte tomaten': 'passierte tomaten',
  'tomatenmark': 'tomatenmark',
  'tomatenpüree': 'tomatenmark',
  'tomate': 'tomaten',
  'frische tomaten': 'tomaten',
  'getrocknete tomaten': 'getrocknete tomaten',
  'sonnengetrocknete tomaten': 'getrocknete tomaten',

  // Paprika variations
  'paprikaschoten': 'paprika',
  'paprikas': 'paprika',
  'rote paprika': 'paprika',
  'gelbe paprika': 'paprika',
  'grüne paprika': 'paprika',
  'spitzpaprika': 'paprika',
  'gemüsepaprika': 'paprika',
  'paprikaschote': 'paprika',

  // Kartoffel variations
  'kartoffeln': 'kartoffel',
  'festkochende kartoffeln': 'kartoffel',
  'mehligkochende kartoffeln': 'kartoffel',
  'vorwiegend festkochende kartoffeln': 'kartoffel',
  'neue kartoffeln': 'kartoffel',
  'pellkartoffeln': 'kartoffel',
  'salzkartoffeln': 'kartoffel',
  'süßkartoffel': 'süßkartoffel',
  'süßkartoffeln': 'süßkartoffel',
  'batate': 'süßkartoffel',

  // Möhren/Karotten variations
  'möhren': 'möhre',
  'karotten': 'möhre',
  'möhre': 'möhre',
  'karotte': 'möhre',
  'gelbe rüben': 'möhre',
  'wurzeln': 'möhre',
  'baby karotten': 'möhre',
  'bundmöhren': 'möhre',

  // Pilze variations
  'champignons': 'champignon',
  'champignon': 'champignon',
  'weiße champignons': 'champignon',
  'braune champignons': 'champignon',
  'portobello': 'portobello',
  'shiitake': 'shiitake',
  'austernpilze': 'austernpilz',
  'austernpilz': 'austernpilz',
  'steinpilze': 'steinpilz',
  'steinpilz': 'steinpilz',
  'pfifferlinge': 'pfifferling',
  'pfifferling': 'pfifferling',
  'pilze': 'pilz',
  'pilz': 'pilz',
  'mischpilze': 'pilz',

  // Kräuter variations
  'petersilie': 'petersilie',
  'glatte petersilie': 'petersilie',
  'krause petersilie': 'petersilie',
  'basilikum': 'basilikum',
  'frisches basilikum': 'basilikum',
  'getrocknetes basilikum': 'basilikum',
  'schnittlauch': 'schnittlauch',
  'dill': 'dill',
  'frischer dill': 'dill',
  'oregano': 'oregano',
  'thymian': 'thymian',
  'rosmarin': 'rosmarin',
  'salbei': 'salbei',
  'koriander': 'koriander',
  'koriandergrün': 'koriander',
  'koriandersamen': 'koriandersamen',

  // Gewürze variations
  'salz': 'salz',
  'meersalz': 'salz',
  'grobes salz': 'salz',
  'pfeffer': 'pfeffer',
  'schwarzer pfeffer': 'pfeffer',
  'weißer pfeffer': 'pfeffer',
  'paprikapulver': 'paprikapulver',
  'edelsüß paprika': 'paprikapulver',
  'rosenpaprika': 'paprikapulver',
  'kurkuma': 'kurkuma',
  'gelbwurz': 'kurkuma',
  'kreuzkümmel': 'kreuzkümmel',
  'cumin': 'kreuzkümmel',
  'zimt': 'zimt',
  'zimtstange': 'zimt',
  'gemahlener zimt': 'zimt',
  'muskatnuss': 'muskatnuss',
  'muskat': 'muskatnuss',

  // Öle und Fette
  'olivenöl': 'olivenöl',
  'extra natives olivenöl': 'olivenöl',
  'kaltgepresstes olivenöl': 'olivenöl',
  'sonnenblumenöl': 'sonnenblumenöl',
  'rapsöl': 'rapsöl',
  'sesamöl': 'sesamöl',
  'kokosöl': 'kokosöl',
  'butter': 'butter',
  'ungesalzene butter': 'butter',
  'gesalzene butter': 'butter',
  'margarine': 'margarine',

  // Essig variations
  'essig': 'essig',
  'weißweinessig': 'weißweinessig',
  'rotweinessig': 'rotweinessig',
  'balsamico': 'balsamico',
  'balsamessig': 'balsamico',
  'apfelessig': 'apfelessig',
  'sherryessig': 'sherryessig',

  // Milchprodukte
  'milch': 'milch',
  'vollmilch': 'milch',
  'fettarme milch': 'milch',
  'sahne': 'sahne',
  'schlagsahne': 'sahne',
  'süße sahne': 'sahne',
  'saure sahne': 'saure sahne',
  'schmand': 'schmand',
  'crème fraîche': 'crème fraîche',
  'joghurt': 'joghurt',
  'naturjoghurt': 'joghurt',
  'griechischer joghurt': 'griechischer joghurt',
  'quark': 'quark',
  'magerquark': 'quark',
  'speisequark': 'quark',

  // Käse variations
  'mozzarella': 'mozzarella',
  'büffelmozzarella': 'mozzarella',
  'parmesan': 'parmesan',
  'parmigiano reggiano': 'parmesan',
  'feta': 'feta',
  'schafskäse': 'feta',
  'ziegenkäse': 'ziegenkäse',
  'gouda': 'gouda',
  'emmentaler': 'emmentaler',
  'cheddar': 'cheddar',
  'ricotta': 'ricotta',
  'mascarpone': 'mascarpone',
  'frischkäse': 'frischkäse',

  // Hülsenfrüchte
  'linsen': 'linse',
  'linse': 'linse',
  'rote linsen': 'linse',
  'grüne linsen': 'linse',
  'belugalinsen': 'linse',
  'kichererbsen': 'kichererbse',
  'kichererbse': 'kichererbse',
  'weiße bohnen': 'bohne',
  'kidneybohnen': 'bohne',
  'schwarze bohnen': 'bohne',
  'bohnen': 'bohne',
  'bohne': 'bohne',
  'erbsen': 'erbse',
  'erbse': 'erbse',
  'tiefkühlerbsen': 'erbse',

  // Nüsse und Samen
  'walnüsse': 'walnuss',
  'walnuss': 'walnuss',
  'haselnüsse': 'haselnuss',
  'haselnuss': 'haselnuss',
  'mandeln': 'mandel',
  'mandel': 'mandel',
  'geschälte mandeln': 'mandel',
  'mandelblättchen': 'mandel',
  'pistazien': 'pistazie',
  'pistazie': 'pistazie',
  'pinienkerne': 'pinienkern',
  'pinienkern': 'pinienkern',
  'sesam': 'sesam',
  'sesamsamen': 'sesam',
  'sonnenblumenkerne': 'sonnenblumenkern',
  'kürbiskerne': 'kürbiskern',

  // Getreide und Nudeln
  'reis': 'reis',
  'basmati reis': 'reis',
  'jasmin reis': 'reis',
  'risotto reis': 'reis',
  'wildreis': 'reis',
  'nudeln': 'nudel',
  'nudel': 'nudel',
  'spaghetti': 'nudel',
  'penne': 'nudel',
  'fusilli': 'nudel',
  'farfalle': 'nudel',
  'tagliatelle': 'nudel',
  'linguine': 'nudel',
  'rigatoni': 'nudel',
  'pasta': 'nudel',
  'quinoa': 'quinoa',
  'bulgur': 'bulgur',
  'couscous': 'couscous',
  'haferflocken': 'haferflocken',

  // Mehl variations
  'mehl': 'mehl',
  'weizenmehl': 'mehl',
  'dinkelmehl': 'dinkelmehl',
  'vollkornmehl': 'vollkornmehl',
  'roggenmehl': 'roggenmehl',

  // Gemüse allgemein
  'zucchini': 'zucchini',
  'aubergine': 'aubergine',
  'auberginen': 'aubergine',
  'melanzani': 'aubergine',
  'gurke': 'gurke',
  'gurken': 'gurke',
  'salatgurke': 'gurke',
  'schlangengurke': 'gurke',
  'brokkoli': 'brokkoli',
  'blumenkohl': 'blumenkohl',
  'weißkohl': 'weißkohl',
  'rotkohl': 'rotkohl',
  'wirsing': 'wirsing',
  'rosenkohl': 'rosenkohl',
  'spinat': 'spinat',
  'blattspinat': 'spinat',
  'tiefkühlspinat': 'spinat',
  'rucola': 'rucola',
  'rukola': 'rucola',
  'feldsalat': 'feldsalat',
  'kopfsalat': 'kopfsalat',
  'eisbergsalat': 'eisbergsalat',
  'römersalat': 'römersalat',

  // Obst
  'äpfel': 'apfel',
  'apfel': 'apfel',
  'birnen': 'birne',
  'birne': 'birne',
  'zitronen': 'zitrone',
  'zitrone': 'zitrone',
  'limetten': 'limette',
  'limette': 'limette',
  'orangen': 'orange',
  'orange': 'orange',
  'bananen': 'banane',
  'banane': 'banane',
  'avocados': 'avocado',
  'avocado': 'avocado',

  // Beeren
  'erdbeeren': 'erdbeere',
  'erdbeere': 'erdbeere',
  'himbeeren': 'himbeere',
  'himbeere': 'himbeere',
  'blaubeeren': 'blaubeere',
  'blaubeere': 'blaubeere',
  'heidelbeeren': 'blaubeere',
  'brombeeren': 'brombeere',
  'brombeere': 'brombeere',

  // Sonstiges
  'knoblauch': 'knoblauch',
  'knoblauchzehe': 'knoblauch',
  'knoblauchzehen': 'knoblauch',
  'ingwer': 'ingwer',
  'frischer ingwer': 'ingwer',
  'chili': 'chili',
  'chilischote': 'chili',
  'chilischoten': 'chili',
  'jalapeño': 'jalapeño',
  'jalapeños': 'jalapeño',
  'peperoni': 'peperoni',
  'peperonis': 'peperoni',
  'oliven': 'olive',
  'olive': 'olive',
  'schwarze oliven': 'olive',
  'grüne oliven': 'olive',
  'kapern': 'kaper',
  'kaper': 'kaper',
  'honig': 'honig',
  'zucker': 'zucker',
  'rohrzucker': 'zucker',
  'brauner zucker': 'zucker',
  'ahornsirup': 'ahornsirup',
  'agavendicksaft': 'agavendicksaft',
  'vanille': 'vanille',
  'vanilleschote': 'vanille',
  'vanilleextrakt': 'vanille',
  'hefe': 'hefe',
  'trockenhefe': 'hefe',
  'frischhefe': 'hefe',
  'backpulver': 'backpulver',
  'natron': 'natron',
  'speisestärke': 'speisestärke',
  'maisstärke': 'speisestärke',
  'stärke': 'speisestärke',
  'gemüsebrühe': 'gemüsebrühe',
  'gemüsefond': 'gemüsebrühe',
  'instantbrühe': 'gemüsebrühe',
  'brühwürfel': 'gemüsebrühe',
  'kokosmilch': 'kokosmilch',
  'mandelmilch': 'mandelmilch',
  'hafermilch': 'hafermilch',
  'sojamilch': 'sojamilch',
  'eier': 'ei',
  'ei': 'ei',
  'hühnerei': 'ei',
  'hühnereier': 'ei'
}

// Enhanced normalization function
export function normalizeIngredientName(name: string): string {
  if (!name) return ''
  
  let normalized = name.toLowerCase().trim()
  
  // Remove common German articles and prepositions at the beginning
  normalized = normalized
    .replace(/^(der|die|das|ein|eine|einen|einem|einer)\s+/g, '')
    .replace(/^(von|aus|mit|ohne|für|nach)\s+/g, '')
  
  // Remove common descriptors and preparation methods
  normalized = normalized
    .replace(/^(frische[rs]?|getrocknete[rs]?|gehackte[rs]?|geschnittene[rs]?|geriebene[rs]?|fein|grob|klein|groß|große|kleiner?|mittlere[rs]?)\s+/g, '')
    .replace(/\s+(frisch|getrocknet|gehackt|geschnitten|gerieben|fein|grob|klein|groß|mittel)$/g, '')
    .replace(/\s+(nach geschmack|optional|zum garnieren|zum servieren|nach belieben)$/g, '')
  
  // Remove quantity indicators
  normalized = normalized
    .replace(/^(etwas|wenig|viel|reichlich|eine prise|1 prise|prise)\s+/g, '')
    .replace(/\s+(etwas|wenig|viel|reichlich)$/g, '')
  
  // Check if the normalized input matches any key in our mapping
  if (INGREDIENT_NORMALIZATION_MAP[normalized]) {
    return INGREDIENT_NORMALIZATION_MAP[normalized]
  }
  
  // If no direct match, try partial matching for compound words
  for (const [variant, base] of Object.entries(INGREDIENT_NORMALIZATION_MAP)) {
    if (normalized.includes(variant) || variant.includes(normalized)) {
      return base
    }
  }
  
  return normalized
}

// Extract and normalize all ingredients from recipes (for suggestions)
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

    // Extract from ingredientsNeeded if they exist
    if (recipe.ingredientsNeeded) {
      recipe.ingredientsNeeded.forEach(ingredient => {
        const normalized = normalizeIngredientName(ingredient.title)
        if (normalized) {
          ingredientSet.add(normalized)
        }
      })
    }
  })
  
  return Array.from(ingredientSet).sort()
}

// Find recipes that contain specific ingredients based on ingredientsNeeded
export function findRecipesByIngredients(selectedIngredients: string[]) {
  if (selectedIngredients.length === 0) {
    return {
      exactMatches: [],
      partialMatches: []
    }
  }
  
  // Normalize all user-selected ingredients
  const normalizedSelected = selectedIngredients.map(ing => normalizeIngredientName(ing))
  const exactMatches: any[] = []
  const partialMatches: any[] = []
  
  recipes.forEach(recipe => {
    // Skip recipes without ingredientsNeeded
    if (!recipe.ingredientsNeeded || recipe.ingredientsNeeded.length === 0) {
      return
    }

    // Get all ingredient titles from the recipe's ingredientsNeeded (keep original titles)
    const recipeIngredientTitles = recipe.ingredientsNeeded.map(ingredient => ingredient.title)
    
    // Normalize recipe ingredient titles for comparison
    const normalizedRecipeIngredients = recipeIngredientTitles.map(title => normalizeIngredientName(title))

    if (normalizedRecipeIngredients.length === 0) {
      return
    }
    
    // Check how many normalized selected ingredients match the normalized recipe ingredients
    const foundNormalizedIngredients = normalizedSelected.filter(selectedIng => 
      normalizedRecipeIngredients.includes(selectedIng)
    )

    // Check how many recipe ingredients are missing from user selection
    const missingNormalizedIngredients = normalizedRecipeIngredients.filter(recipeIng => 
      !normalizedSelected.includes(recipeIng)
    )

    // Check for extra ingredients (user has more than recipe needs)
    const extraNormalizedIngredients = normalizedSelected.filter(selectedIng => 
      !normalizedRecipeIngredients.includes(selectedIng)
    )
    
    if (foundNormalizedIngredients.length === 0) {
      return // No overlap, skip this recipe
    }

    // Map back to original ingredient names for display
    const foundOriginal = selectedIngredients.filter(original => 
      foundNormalizedIngredients.includes(normalizeIngredientName(original))
    )

    // Map missing normalized ingredients back to original recipe titles
    const missingOriginal = recipe.ingredientsNeeded
      .filter(ingredient => missingNormalizedIngredients.includes(normalizeIngredientName(ingredient.title)))
      .map(ingredient => ingredient.title)

    const extraOriginal = selectedIngredients.filter(original => 
      extraNormalizedIngredients.includes(normalizeIngredientName(original))
    )

    if (missingNormalizedIngredients.length === 0) {
      // Exact match or superset - user has all needed ingredients
      exactMatches.push({
        recipe,
        matchPercentage: 100,
        foundIngredients: foundOriginal,
        missingIngredients: [],
        extraIngredients: extraOriginal,
        matchType: extraOriginal.length > 0 ? 'superset' : 'exact'
      })
    } else {
      // Partial match - some ingredients missing
      const matchPercentage = Math.round((foundNormalizedIngredients.length / normalizedRecipeIngredients.length) * 100)
      
      partialMatches.push({
        recipe,
        matchPercentage,
        foundIngredients: foundOriginal,
        missingIngredients: missingOriginal,
        extraIngredients: extraOriginal,
        matchType: 'partial'
      })
    }
  })
  
  // Sort exact matches: exact matches first, then supersets
  exactMatches.sort((a, b) => {
    if (a.matchType === 'exact' && b.matchType === 'superset') return -1
    if (a.matchType === 'superset' && b.matchType === 'exact') return 1
    return a.extraIngredients.length - b.extraIngredients.length
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
  
  const normalizedInput = normalizeIngredientName(input)
  
  return allIngredients
    .filter(ingredient => {
      const normalizedIngredient = normalizeIngredientName(ingredient)
      return normalizedIngredient.includes(normalizedInput) || 
             ingredient.toLowerCase().includes(input.toLowerCase())
    })
    .slice(0, limit)
}

// Get the most common ingredients from all recipes
export function getPopularIngredients(limit: number = 18) {
  const ingredientCounts: { [key: string]: number } = {}

  recipes.forEach(recipe => {
    const uniqueIngredients = new Set<string>()
    
    // Count from main ingredients
    recipe.ingredients.forEach(ingredient => {
      const normalized = normalizeIngredientName(ingredient.name)
      if (normalized) uniqueIngredients.add(normalized)
    })

    // Count from ingredient groups
    if (recipe.ingredientGroups) {
      recipe.ingredientGroups.forEach(group => {
        group.ingredients.forEach(ingredient => {
          const normalized = normalizeIngredientName(ingredient.name)
          if (normalized) uniqueIngredients.add(normalized)
        })
      })
    }

    // Count from ingredientsNeeded
    if (recipe.ingredientsNeeded) {
      recipe.ingredientsNeeded.forEach(ingredient => {
        const normalized = normalizeIngredientName(ingredient.title)
        if (normalized) uniqueIngredients.add(normalized)
      })
    }

    // Count each unique ingredient once per recipe
    uniqueIngredients.forEach(ingredient => {
      ingredientCounts[ingredient] = (ingredientCounts[ingredient] || 0) + 1
    })
  })

  return Object.entries(ingredientCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, limit)
    .map(([ingredient]) => ingredient)
}

// Get all unique ingredients from recipes
export const ALL_INGREDIENTS = extractAllIngredients()