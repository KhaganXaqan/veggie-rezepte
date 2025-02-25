// First, let's define the type for a recipe
export type Recipe = {
  title: string
  image: string
  prepTime: string
  rating: number
  category: string
  slug: string
  tags: string[]
  servings: number
  description: string
  ingredients: { 
    amount: number
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
}

// Then update the recipes array with all required properties
export const recipes: Recipe[] = [
  {
    title: "Kartoffelklöße",
    image: "/images/Miscellaneous/kartoffelkloesse.webp",
    prepTime: "60 Min.",
    rating: 4.8,
    category: "Hauptgerichte",
    slug: "kartoffelkloesse",
    tags: ["Traditionell", "Beilage", "Kartoffeln"],
    servings: 4,
    description: "Traditionelle deutsche Kartoffelklöße - perfekt als Beilage oder eigenständiges Gericht.",
    ingredients: [
      { amount: 1, unit: "kg", name: "mehligkochende Kartoffeln" },
      { amount: 200, unit: "g", name: "Kartoffelstärke" },
      { amount: 2, name: "Eier" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Kartoffeln kochen und stampfen",
      "Mit Kartoffelstärke und Eiern vermengen",
      "Mit Salz und Muskat würzen",
      "Klöße formen",
      "In siedendem Salzwasser ziehen lassen"
    ],
    nutrition: {
      calories: 220,
      protein: "4g",
      carbs: "48g",
      fat: "2g"
    }
  },
  {
    title: "Spinat-Käse Lasagne",
    image: "/images/MainCourses/spinat-kaese-lasagne.jpg",
    prepTime: "50 Min.",
    rating: 4.7,
    category: "Aufläufe",
    slug: "spinat-kaese-lasagne",
    tags: ["Auflauf", "Pasta", "Käse"],
    servings: 6,
    description: "Eine klassische Lasagne mit Spinat und Käse.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Spinat" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 500, unit: "g", name: "Pasta" },
      { amount: 4, name: "Tomaten" },
      { amount: 2, name: "Zwiebeln" },
      { amount: 2, name: "Knoblauchzehen" }
    ],
    instructions: [
      "Spinat kochen und stampfen",
      "Käse schmelzen",
      "Pasta kochen",
      "Tomaten und Zwiebeln anbraten",
      "Spinat und Käse vermischen",
      "Pasta und Spinat verrühren",
      "Auflauf formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 350,
      protein: "15g",
      carbs: "30g",
      fat: "18g"
    }
  },
  {
    title: "Käsespätzle",
    image: "/images/MainCourses/kaesespaetzle.jpg",
    prepTime: "45 Min.",
    rating: 4.9,
    category: "Hauptgerichte",
    slug: "kaesespaetzle",
    tags: ["Traditionell", "Pasta", "Käse"],
    servings: 4,
    description: "Eine traditionelle deutsche Pasta-Art aus der Region Schwaben.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 2, name: "Eier" },
      { amount: 100, unit: "ml", name: "Milch" },
      { amount: 100, unit: "g", name: "Käse" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Mehl und Eier vermengen",
      "Milch hinzufügen",
      "Käse hinzufügen",
      "Mit Salz und Muskat würzen",
      "Spätzle formen",
      "In siedendem Salzwasser ziehen lassen"
    ],
    nutrition: {
      calories: 250,
      protein: "10g",
      carbs: "30g",
      fat: "12g"
    }
  },
  {
    title: "Kartoffelpuffer",
    image: "/images/Miscellaneous/kartoffelpuffer.jpg",
    prepTime: "30 Min.",
    rating: 4.8,
    category: "Hauptgerichte",
    slug: "kartoffelpuffer",
    tags: ["Traditionell", "Kartoffeln", "Snack"],
    servings: 2,
    description: "Ein leckerer Kartoffelpuffer als Snack oder Beilage.",
    ingredients: [
      { amount: 200, unit: "g", name: "Kartoffeln" },
      { amount: 2, name: "Eier" },
      { amount: 100, unit: "g", name: "Mehl" },
      { amount: 100, unit: "ml", name: "Milch" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Kartoffeln kochen und stampfen",
      "Mit Mehl und Eiern vermengen",
      "Milch hinzufügen",
      "Mit Salz und Muskat würzen",
      "Puffer formen",
      "In heißem Öl frittieren"
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
    }
  },
  {
    title: "Semmelknödel",
    image: "/images/Miscellaneous/semmelknoedel.jpg",
    prepTime: "40 Min.",
    rating: 4.6,
    category: "Hauptgerichte",
    slug: "semmelknoedel",
    tags: ["Traditionell", "Beilage", "Brot"],
    servings: 4,
    description: "Ein traditionelles deutsches Brotgebäck aus Kartoffeln und Mehl.",
    ingredients: [
      { amount: 200, unit: "g", name: "Kartoffeln" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 2, name: "Eier" },
      { amount: 100, unit: "ml", name: "Milch" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Kartoffeln kochen und stampfen",
      "Mit Mehl und Eiern vermengen",
      "Milch hinzufügen",
      "Mit Salz und Muskat würzen",
      "Knödel formen",
      "In siedendem Wasser ziehen lassen"
    ],
    nutrition: {
      calories: 250,
      protein: "5g",
      carbs: "40g",
      fat: "2g"
    }
  },
  {
    title: "Pilzgulasch",
    image: "/images/Miscellaneous/pilzgulasch.webp",
    prepTime: "45 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "pilzgulasch",
    tags: ["Traditionell", "Pilze", "Hauptgericht"],
    servings: 4,
    description: "Ein leckerer Pilzsuppe aus verschiedenen Pilzen.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Pilze" },
      { amount: 1, name: "Zwiebel" },
      { amount: 2, name: "Knoblauchzehen" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Pilze waschen und trocken tupfen",
      "Zwiebel und Knoblauch anbraten",
      "Pilze hinzufügen",
      "Gemüsebrühe hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Etwa 45 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "5g"
    }
  },
  {
    title: "Gemüsestrudel",
    image: "/images/Miscellaneous/gemuesestrudel.jpg",
    prepTime: "75 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "gemuese-strudel",
    tags: ["Traditionell", "Gebäck", "Gemüse"],
    servings: 6,
    description: "Ein traditionelles deutsches Gebäck aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, name: "Ei" },
      { amount: 100, unit: "g", name: "Gemüse" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Mehl, Butter, Zucker und Ei vermengen",
      "Gemüse hinzufügen",
      "Mit Salz und Muskat würzen",
      "Strudel formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 300,
      protein: "5g",
      carbs: "40g",
      fat: "15g"
    }
  },
  {
    title: "Grießnockerl",
    image: "/images/Miscellaneous/griessnockerl.jpg",
    prepTime: "35 Min.",
    rating: 4.6,
    category: "Suppen",
    slug: "griessnockerl",
    tags: ["Traditionell", "Suppe", "Beilage"],
    servings: 4,
    description: "Eine traditionelle deutsche Suppe aus Grießnocken.",
    ingredients: [
      { amount: 200, unit: "g", name: "Grießnocken" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 1, name: "Zwiebel" },
      { amount: 1, name: "Knoblauchzehe" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Grießnocken in Wasser einweichen",
      "Zwiebel und Knoblauch anbraten",
      "Gemüsebrühe hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Etwa 35 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "30g",
      fat: "2g"
    }
  },
  {
    title: "Spinatknödel",
    image: "/images/Miscellaneous/spinatknoedel.jpg",
    prepTime: "55 Min.",
    rating: 4.8,
    category: "Hauptgerichte",
    slug: "spinatknoedel",
    tags: ["Traditionell", "Spinat", "Knödel"],
    servings: 4,
    description: "Eine traditionelle deutsche Knödel aus Spinat.",
    ingredients: [
      { amount: 200, unit: "g", name: "Spinat" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 2, name: "Eier" },
      { amount: 100, unit: "ml", name: "Milch" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Spinat kochen und stampfen",
      "Mit Mehl und Eiern vermengen",
      "Milch hinzufügen",
      "Mit Salz und Muskat würzen",
      "Knödel formen",
      "In siedendem Wasser ziehen lassen"
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "30g",
      fat: "5g"
    }
  },
  {
    title: "Gemüsesuppe",
    image: "/images/Soups/gemuesesuppe.jpg",
    prepTime: "40 Min.",
    rating: 4.5,
    category: "Suppen",
    slug: "gemuesesuppe",
    tags: ["Traditionell", "Suppe", "Gemüse"],
    servings: 4,
    description: "Eine einfache und leckere Gemüsesuppe.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Gemüse waschen und schneiden",
      "Gemüse und Gemüsebrühe in einem Topf köcheln",
      "Salz und Pfeffer hinzufügen",
      "Etwa 40 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 100,
      protein: "2g",
      carbs: "10g",
      fat: "1g"
    }
  },
  {
    title: "Kartoffelgratin",
    image: "/images/MainCourses/kartoffelgratin.jpg",
    prepTime: "60 Min.",
    rating: 4.9,
    category: "Aufläufe",
    slug: "kartoffelgratin",
    tags: ["Traditionell", "Auflauf", "Kartoffeln"],
    servings: 6,
    description: "Ein klassisches Kartoffelaufläuf aus der Region Schwaben.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Kartoffeln" },
      { amount: 200, unit: "g", name: "Butter" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 100, unit: "g", name: "Käse" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Kartoffeln schälen und in Scheiben schneiden",
      "Kartoffeln in einer Pfanne anbraten",
      "Butter hinzufügen",
      "Mehl hinzufügen",
      "Milch hinzufügen",
      "Käse hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Auflauf formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 400,
      protein: "15g",
      carbs: "30g",
      fat: "20g"
    }
  },
  {
    title: "Quinoa-Buddha-Bowl",
    image: "/images/MainCourses/quinoa-buddha-bowl.jpg",
    prepTime: "25 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "quinoa-buddha-bowl",
    tags: ["Modern", "Gesund", "Bowl"],
    servings: 2,
    description: "Ein leckerer Buddha-Bowl aus Quinoa und verschiedenen Gemüsen.",
    ingredients: [
      { amount: 100, unit: "g", name: "Quinoa" },
      { amount: 100, unit: "g", name: "Gemüse" },
      { amount: 100, unit: "g", name: "Fisch" },
      { amount: 100, unit: "g", name: "Nüsse" },
      { amount: 100, unit: "g", name: "Käse" },
      { amount: 100, unit: "ml", name: "Sojasauce" },
      { amount: 100, unit: "ml", name: "Olivenöl" }
    ],
    instructions: [
      "Quinoa kochen",
      "Gemüse schneiden",
      "Fisch anbraten",
      "Nüsse toasten",
      "Käse schmelzen",
      "Sojasauce und Olivenöl hinzufügen",
      "Gemüse und Fisch hinzufügen",
      "Quinoa hinzufügen",
      "Bowl zubereiten"
    ],
    nutrition: {
      calories: 400,
      protein: "15g",
      carbs: "40g",
      fat: "20g"
    }
  },
  {
    title: "Ratatouille",
    image: "/images/Miscellaneous/ratatouille.jpeg",
    prepTime: "45 Min.",
    rating: 4.6,
    category: "Hauptgerichte",
    slug: "ratatouille",
    tags: ["Französisch", "Gemüse", "Hauptgericht"],
    servings: 4,
    description: "Eine französische Gemüseaufläuf aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 1, name: "Zwiebel" },
      { amount: 1, name: "Knoblauchzehe" },
      { amount: 1, name: "Tomate" },
      { amount: 1, name: "Aubergine" },
      { amount: 1, name: "Paprika" },
      { amount: 1, name: "Zucchini" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Gemüse waschen und schneiden",
      "Zwiebel und Knoblauch anbraten",
      "Tomate und Aubergine hinzufügen",
      "Paprika und Zucchini hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Etwa 45 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "5g"
    }
  },
  {
    title: "Gefüllte Paprika",
    image: "/images/MainCourses/gefuellte-paprika.jpg",
    prepTime: "40 Min.",
    rating: 4.5,
    category: "Hauptgerichte",
    slug: "gefuellte-paprika",
    tags: ["Traditionell", "Gemüse", "Hauptgericht"],
    servings: 4,
    description: "Eine traditionelle deutsche Gemüseart aus gefüllten Paprika.",
    ingredients: [
      { amount: 4, name: "Paprika" },
      { amount: 1, name: "Zwiebel" },
      { amount: 1, name: "Knoblauchzehe" },
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Paprika waschen und halbieren",
      "Zwiebel und Knoblauch anbraten",
      "Gemüse hinzufügen",
      "Mit Salz und Pfeffer würzen",
      "Gemüse füllen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "5g"
    }
  },
  {
    title: "Kürbissuppe",
    image: "/images/Soups/kuerbissuppe.jpg",
    prepTime: "35 Min.",
    rating: 4.8,
    category: "Suppen",
    slug: "kuerbissuppe",
    tags: ["Herbst", "Suppe", "Kürbis"],
    servings: 4,
    description: "Eine leckere Kürbissuppe aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Kürbis" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 1, name: "Zwiebel" },
      { amount: 1, name: "Knoblauchzehe" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Kürbis schälen und in Stücke schneiden",
      "Zwiebel und Knoblauch anbraten",
      "Kürbis hinzufügen",
      "Gemüsebrühe hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Etwa 35 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 100,
      protein: "2g",
      carbs: "15g",
      fat: "1g"
    }
  },
  {
    title: "Mediterraner Nudelsalat",
    image: "/images/Salads/mediterraner-nudelsalat.jpg",
    prepTime: "20 Min.",
    rating: 4.4,
    category: "Salate",
    slug: "mediterraner-nudelsalat",
    tags: ["Salat", "Pasta", "Mediterran"],
    servings: 4,
    description: "Ein leckerer Nudelsalat aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 200, unit: "g", name: "Nudeln" },
      { amount: 100, unit: "g", name: "Gemüse" },
      { amount: 100, unit: "g", name: "Fisch" },
      { amount: 100, unit: "ml", name: "Olivenöl" },
      { amount: 100, unit: "g", name: "Tomaten" },
      { amount: 100, unit: "g", name: "Käse" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Nudeln kochen",
      "Gemüse schneiden",
      "Fisch anbraten",
      "Gemüse und Fisch vermischen",
      "Tomaten hinzufügen",
      "Olivenöl hinzufügen",
      "Käse hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Salat zubereiten"
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "30g",
      fat: "15g"
    }
  },
  {
    title: "Gemüse-Curry",
    image: "/images/MainCourses/gemuese-curry.webp",
    prepTime: "30 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "gemuese-curry",
    tags: ["Indisch", "Curry", "Scharf"],
    servings: 4,
    description: "Ein leckerer Gemüsecurry aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 100, unit: "g", name: "Currypaste" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 100, unit: "g", name: "Kokosnussöl" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Gemüse waschen und schneiden",
      "Currypaste anbraten",
      "Gemüse hinzufügen",
      "Gemüsebrühe hinzufügen",
      "Kokosnussöl hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Etwa 30 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "10g",
      fat: "15g"
    }
  },
  {
    title: "Brokkoli-Quiche",
    image: "/images/MainCourses/brokkoli-quiche.jpg",
    prepTime: "55 Min.",
    rating: 4.6,
    category: "Hauptgerichte",
    slug: "brokkoli-quiche",
    tags: ["Französisch", "Gebäck", "Gemüse"],
    servings: 6,
    description: "Eine französische Quiche aus Brokkoli und Käse.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Brokkoli" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Brokkoli waschen und schneiden",
      "Käse schmelzen",
      "Mehl und Milch vermengen",
      "Brokkoli hinzufügen",
      "Auflauf formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
    }
  },
  {
    title: "Griechischer Bauernsalat",
    image: "/images/Salads/griechischer-bauernsalat.jpg",
    prepTime: "15 Min.",
    rating: 4.5,
    category: "Salate",
    slug: "griechischer-bauernsalat",
    tags: ["Griechisch", "Salat", "Mediterran"],
    servings: 4,
    description: "Ein leckerer Griechischer Bauernsalat aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 100, unit: "ml", name: "Olivenöl" },
      { amount: 100, unit: "g", name: "Feta" },
      { amount: 100, unit: "g", name: "Tomaten" },
      { amount: 100, unit: "g", name: "Oliven" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Gemüse waschen und schneiden",
      "Olivenöl hinzufügen",
      "Gemüse vermischen",
      "Tomaten hinzufügen",
      "Feta hinzufügen",
      "Oliven hinzufügen",
      "Salz und Pfeffer hinzufügen"
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "10g"
    }
  },
  {
    title: "Linsen-Bolognese",
    image: "/images/MainCourses/linsen-bolognese.jpg",
    prepTime: "40 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "linsen-bolognese",
    tags: ["Pasta", "Italienisch", "Proteinreich"],
    servings: 4,
    description: "Eine leckere Bolognese aus Linsen und verschiedenen Gemüsen.",
    ingredients: [
      { amount: 200, unit: "g", name: "Linsen" },
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 1, name: "Tomate" },
      { amount: 1, name: "Zwiebel" },
      { amount: 1, name: "Knoblauchzehe" },
      { amount: 100, unit: "ml", name: "Olivenöl" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Linsen waschen und einweichen",
      "Gemüse schneiden",
      "Tomate und Zwiebel anbraten",
      "Knoblauch hinzufügen",
      "Olivenöl hinzufügen",
      "Linsen hinzufügen",
      "Gemüse hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Etwa 40 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "10g"
    }
  },
  {
    title: "Süßkartoffel-Kokos-Suppe",
    image: "/images/Soups/suesskartoffel-kokos-suppe.jpg",
    prepTime: "35 Min.",
    rating: 4.8,
    category: "Suppen",
    slug: "suesskartoffel-kokos-suppe",
    tags: ["Suppe", "Exotisch", "Cremig"],
    servings: 4,
    description: "Eine leckere Süßkartoffel-Kokos-Suppe aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Süßkartoffeln" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 100, unit: "g", name: "Kokosnussöl" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Süßkartoffeln schälen und in Stücke schneiden",
      "Gemüsebrühe hinzufügen",
      "Kokosnussöl hinzufügen",
      "Zucker hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Etwa 35 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
    }
  },
  {
    title: "Bunter Quinoa-Salat",
    image: "/images/Salads/bunter-quinoa-salat.jpg",
    prepTime: "25 Min.",
    rating: 4.6,
    category: "Salate",
    slug: "bunter-quinoa-salat",
    tags: ["Salat", "Gesund", "Quinoa"],
    servings: 4,
    description: "Ein leckerer Quinoa-Salat aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 100, unit: "g", name: "Quinoa" },
      { amount: 100, unit: "g", name: "Gemüse" },
      { amount: 100, unit: "g", name: "Fisch" },
      { amount: 100, unit: "g", name: "Nüsse" },
      { amount: 100, unit: "g", name: "Käse" },
      { amount: 100, unit: "ml", name: "Sojasauce" },
      { amount: 100, unit: "ml", name: "Olivenöl" }
    ],
    instructions: [
      "Quinoa kochen",
      "Gemüse schneiden",
      "Fisch anbraten",
      "Nüsse toasten",
      "Käse schmelzen",
      "Sojasauce und Olivenöl hinzufügen",
      "Gemüse und Fisch hinzufügen",
      "Quinoa hinzufügen",
      "Bowl zubereiten"
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "30g",
      fat: "15g"
    }
  },
  {
    title: "Gemüse-Couscous-Salat",
    image: "/images/Salads/gemuese-couscous-salat.jpg",
    prepTime: "20 Min.",
    rating: 4.5,
    category: "Salate",
    slug: "gemuese-couscous-salat",
    tags: ["Salat", "Orientalisch", "Couscous"],
    servings: 4,
    description: "Ein leckerer Couscous-Salat aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 200, unit: "g", name: "Couscous" },
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 1, name: "Tomate" },
      { amount: 1, name: "Zwiebel" },
      { amount: 1, name: "Knoblauchzehe" },
      { amount: 100, unit: "g", name: "Olivenöl" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Couscous einweichen",
      "Gemüse schneiden",
      "Tomate und Zwiebel anbraten",
      "Knoblauch hinzufügen",
      "Olivenöl hinzufügen",
      "Gemüse hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Salat zubereiten"
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "30g",
      fat: "10g"
    }
  },
  {
    title: "Blumenkohl-Käse-Auflauf",
    image: "/images/MainCourses/blumenkohl-kaese-auflauf.webp",
    prepTime: "45 Min.",
    rating: 4.7,
    category: "Aufläufe",
    slug: "blumenkohl-kaese-auflauf",
    tags: ["Auflauf", "Gemüse", "Käse"],
    servings: 6,
    description: "Ein leckerer Auflauf aus Blumenkohl und Käse.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Blumenkohl" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Blumenkohl waschen und schneiden",
      "Käse schmelzen",
      "Mehl und Milch vermengen",
      "Blumenkohl hinzufügen",
      "Auflauf formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
    }
  },
  {
    title: "Gemüse-Polenta-Auflauf",
    image: "/images/MainCourses/gemuese-polenta-auflauf.webp",
    prepTime: "55 Min.",
    rating: 4.6,
    category: "Aufläufe",
    slug: "gemuese-polenta-auflauf",
    tags: ["Auflauf", "Italienisch", "Polenta"],
    servings: 6,
    description: "Ein leckerer Auflauf aus Gemüse und Polenta.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 200, unit: "g", name: "Polenta" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Gemüse schneiden",
      "Polenta einweichen",
      "Gemüse und Polenta vermengen",
      "Milch hinzufügen",
      "Käse hinzufügen",
      "Auflauf formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
    }
  },
  {
    title: "Zucchini-Reis-Auflauf",
    image: "/images/MainCourses/zucchini-reis-auflauf.webp",
    prepTime: "50 Min.",
    rating: 4.5,
    category: "Aufläufe",
    slug: "zucchini-reis-auflauf",
    tags: ["Auflauf", "Gemüse", "Reis"],
    servings: 6,
    description: "Ein leckerer Auflauf aus Zucchini und Reis.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Zucchini" },
      { amount: 200, unit: "g", name: "Reis" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Zucchini schälen und in Scheiben schneiden",
      "Reis einweichen",
      "Zucchini und Reis vermengen",
      "Milch hinzufügen",
      "Käse hinzufügen",
      "Auflauf formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
    }
  },
  // New Breakfast Recipes
  {
    title: "Overnight Oats mit Beeren",
    image: "/images/Desserts/OvernightOatsmitBeeren.webp",
    prepTime: "10 Min. + 8 Std.",
    rating: 4.7,
    category: "Frühstück",
    slug: "overnight-oats-beeren",
    tags: ["Frühstück", "Gesund", "Haferflocken"],
    servings: 2,
    description: "Ein leckerer Frühstücks-Salat aus Haferflocken und Beeren.",
    ingredients: [
      { amount: 100, unit: "g", name: "Haferflocken" },
      { amount: 200, unit: "g", name: "Milch" },
      { amount: 100, unit: "g", name: "Beeren" },
      { amount: 1, name: "Ei" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Haferflocken und Milch vermengen",
      "Ei hinzufügen",
      "Salz und Muskat hinzufügen",
      "Salat ziehen lassen",
      "Frühstück zubereiten"
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "5g"
    }
  },
  {
    title: "Veganes Banana Bread",
    image: "/images/Frühstück/veganes-banana-bread.webp",
    prepTime: "55 Min.",
    rating: 4.8,
    category: "Frühstück",
    slug: "veganes-banana-bread",
    tags: ["Frühstück", "Vegan", "Gebäck"],
    servings: 8,
    description: "Ein leckeres Vegan-Banana-Bread aus Bananen und verschiedenen Zutaten.",
    ingredients: [
      { amount: 3, name: "Bananen" },
      { amount: 100, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Olivenöl" },
      { amount: 1, name: "Ei" },
      { amount: 1, unit: "Teelöffel", name: "Backpulver" },
      { amount: 1, unit: "Teelöffel", name: "Backgewürz" }
    ],
    instructions: [
      "Bananen schälen und zerstampfen",
      "Mehl, Zucker, Olivenöl und Ei vermengen",
      "Backpulver und Backgewürz hinzufügen",
      "Bananenmasse in eine Form geben",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 200,
      protein: "3g",
      carbs: "30g",
      fat: "10g"
    }
  },
  {
    title: "Smoothie Bowl",
    image: "/images/Frühstück/smoothie-bowl.jpg",
    prepTime: "15 Min.",
    rating: 4.6,
    category: "Frühstück",
    slug: "smoothie-bowl",
    tags: ["Frühstück", "Gesund", "Obst"],
    servings: 1,
    description: "Ein leckerer Smoothie-Bowl aus verschiedenen Früchten und Nüssen.",
    ingredients: [
      { amount: 100, unit: "g", name: "Früchte" },
      { amount: 100, unit: "g", name: "Nüsse" },
      { amount: 100, unit: "g", name: "Joghurt" },
      { amount: 100, unit: "g", name: "Bananen" },
      { amount: 100, unit: "g", name: "Kokosnussöl" }
    ],
    instructions: [
      "Früchte schneiden",
      "Nüsse toasten",
      "Joghurt hinzufügen",
      "Bananen hinzufügen",
      "Kokosnussöl hinzufügen",
      "Smoothie zubereiten"
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "15g"
    }
  },
  {
    title: "Französische Crêpes",
    image: "/images/Frühstück/franzoesische-crepes.jpg",
    prepTime: "30 Min.",
    rating: 4.9,
    category: "Frühstück",
    slug: "franzoesische-crepes",
    tags: ["Frühstück", "Französisch", "Süß"],
    servings: 4,
    description: "Eine leckere französische Crêpe aus Mehl und Eiern.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 4, name: "Eier" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Pfeffer" }
    ],
    instructions: [
      "Mehl und Eier vermengen",
      "Milch hinzufügen",
      "Butter und Zucker hinzufügen",
      "Salz und Pfeffer hinzufügen",
      "Crêpes formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "10g"
    }
  },
  {
    title: "Granola mit Nüssen",
    image: "/images/Desserts/granola-nuesse.jpg",
    prepTime: "40 Min.",
    rating: 4.7,
    category: "Frühstück",
    slug: "granola-nuesse",
    tags: ["Frühstück", "Gesund", "Müsli"],
    servings: 4,
    description: "Eine leckere Granola aus verschiedenen Nüssen.",
    ingredients: [
      { amount: 200, unit: "g", name: "Nüsse" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Olivenöl" },
      { amount: 100, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Backpulver" }
    ],
    instructions: [
      "Nüsse toasten",
      "Zucker hinzufügen",
      "Olivenöl hinzufügen",
      "Mehl hinzufügen",
      "Backpulver hinzufügen",
      "Granola ziehen lassen"
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "10g"
    }
  },
  // New Dessert Recipes
  {
    title: "Apfelstrudel",
    image: "/images/Desserts/apfelstrudel.jpg",
    prepTime: "60 Min.",
    rating: 4.8,
    category: "Desserts",
    slug: "apfelstrudel",
    tags: ["Dessert", "Traditionell", "Gebäck"],
    servings: 8,
    description: "Ein traditionelles deutsches Apfelstrudel.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, name: "Ei" },
      { amount: 1, unit: "kg", name: "Äpfel" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 1, unit: "Prise", name: "Muskatnuss" }
    ],
    instructions: [
      "Mehl, Butter und Zucker vermengen",
      "Ei hinzufügen",
      "Äpfel schälen und in Scheiben schneiden",
      "Strudel formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 300,
      protein: "5g",
      carbs: "40g",
      fat: "15g"
    }
  },
  {
    title: "Schokoladen-Mousse",
    image: "/images/Desserts/schokoladen-mousse.webp",
    prepTime: "20 Min. + 2 Std.",
    rating: 4.9,
    category: "Desserts",
    slug: "schokoladen-mousse",
    tags: ["Dessert", "Schokolade", "Cremig"],
    servings: 4,
    description: "Eine leckere Schokoladen-Mousse aus Schokolade und Eiern.",
    ingredients: [
      { amount: 200, unit: "g", name: "Schokolade" },
      { amount: 4, name: "Eier" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Sahne" }
    ],
    instructions: [
      "Schokolade schmelzen",
      "Eiern und Zucker verrühren",
      "Butter hinzufügen",
      "Sahne hinzufügen",
      "Mousse formen"
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "15g"
    }
  },
  {
    title: "Beeren-Crumble",
    image: "/images/Desserts/beeren-crumble.webp",
    prepTime: "45 Min.",
    rating: 4.7,
    category: "Desserts",
    slug: "beeren-crumble",
    tags: ["Dessert", "Obst", "Gebacken"],
    servings: 6,
    description: "Ein leckeres Beeren-Crumble aus verschiedenen Beeren.",
    ingredients: [
      { amount: 200, unit: "g", name: "Beeren" },
      { amount: 100, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Nüsse" }
    ],
    instructions: [
      "Beeren waschen und trocken tupfen",
      "Mehl und Zucker vermengen",
      "Butter hinzufügen",
      "Nüsse hinzufügen",
      "Crumble formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
    }
  },
  {
    title: "Rhabarber-Kompott",
    image: "/images/Desserts/rhabarber-kompott.webp",
    prepTime: "25 Min.",
    rating: 4.6,
    category: "Desserts",
    slug: "rhabarber-kompott",
    tags: ["Dessert", "Frucht", "Traditionell"],
    servings: 4,
    description: "Ein leckeres Rhabarber-Kompott aus verschiedenen Früchten.",
    ingredients: [
      { amount: 200, unit: "g", name: "Rhabarber" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Wasser" }
    ],
    instructions: [
      "Rhabarber waschen und schneiden",
      "Rhabarber und Zucker in einem Topf köcheln",
      "Wasser hinzufügen",
      "Etwa 25 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 100,
      protein: "1g",
      carbs: "20g",
      fat: "0g"
    }
  },
  {
    title: "Zimtschnecken",
    image: "/images/Desserts/zimtschnecken.jpg",
    prepTime: "90 Min.",
    rating: 4.8,
    category: "Desserts",
    slug: "zimtschnecken",
    tags: ["Dessert", "Gebäck", "Zimt"],
    servings: 12,
    description: "Eine leckere Zimtschnecken aus Mehl und Zimt.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, name: "Ei" },
      { amount: 10, unit: "g", name: "Zimt" }
    ],
    instructions: [
      "Mehl, Butter und Zucker vermengen",
      "Ei hinzufügen",
      "Zimt hinzufügen",
      "Schnecken formen",
      "In Ofen ziehen"
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
    }
  }
]