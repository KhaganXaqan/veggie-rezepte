// First, let's define the type for a recipe
export type Recipe = {
  title: string
  seo_title?: string
  image: string
  prepTime?: number
  cookingTime? : number
  rating?: number
  reviews?:number
  category: string
  slug: string
  tags: string[]
  createdDate?: Date
  updatedDate?: Date
  servings: number
  description: string
  descriptionOnImage: string
  introductionParagraph: string
  additionalParagraph: string
  ingredientsNeeded: {
    title: string;
    description: string;
  }[];
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
  tips: string[]
  whyFavorite: {
    title: string
    reasons: {
      title: string
      description: string
    }[]
  }
  handwrittenMessage: {
    mainText: string
    subText: string
    signature: string
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
  steps: {
    title: string
    description: string
  }[]
  servingSuggestion: string
  servingSuggestions?: {
    title: string;
    description: string;
    note: string;
    items: {
      emoji: string;
      title: string;
      description: string;
    }[];
  };
  funFact: {
    title: string;
    description: string;
  }
  images: {
    imageIngredient: string
    image1: string
    image2: string
    image3: string
    image4: string
    image5: string
    image6: string
    image7: string
  }
}

// Then update the recipes array with all required properties
export const recipes: Recipe[] = [
  {
    title: "Kartoffelklöße",
    image: "/images/Miscellaneous/kartoffelkloesse.webp",
    prepTime: 60,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Kartoffeln schälen, in große Stücke schneiden und in Salzwasser etwa 20 Minuten kochen, bis sie weich sind. Anschließend abgießen und mit einem Kartoffelstampfer zerdrücken.",
      "Die Kartoffelstärke, Eier, Salz und Muskatnuss zu den gestampften Kartoffeln geben und alles zu einem glatten Teig verkneten.",
      "Den Teig zu gleichmäßigen Klößen formen. Dabei darauf achten, dass die Klöße fest genug sind, um nicht auseinanderzufallen.",
      "Einen großen Topf mit Salzwasser zum Kochen bringen. Die Klöße vorsichtig ins Wasser geben und bei mittlerer Hitze etwa 15–20 Minuten ziehen lassen, bis sie an die Oberfläche steigen.",
      "Die Klöße mit einer Schaumkelle herausheben, abtropfen lassen und warm servieren."
    ],
    nutrition: {
      calories: 220,
      protein: "4g",
      carbs: "48g",
      fat: "2g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Spinat-Käse Lasagne",
    image: "/images/MainCourses/spinat-kaese-lasagne.webp",
    prepTime: 50,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Spinat waschen, abtropfen lassen und in einem großen Topf mit etwas Wasser etwa 5 Minuten dünsten, bis er zusammengefallen ist. Anschließend abkühlen lassen und gut auspressen, um überschüssige Flüssigkeit zu entfernen.",
      "Die Zwiebeln und den Knoblauch schälen und fein hacken. In einer Pfanne mit etwas Olivenöl glasig dünsten. Die Tomaten waschen, würfeln und zu den Zwiebeln geben. Alles etwa 10 Minuten köcheln lassen, bis eine dickflüssige Sauce entsteht.",
      "Die Lasagneplatten nach Packungsanleitung in Salzwasser al dente kochen, abgießen und beiseite stellen.",
      "Den Käse reiben und mit den Eiern und dem Spinat vermengen. Mit Salz und Pfeffer abschmecken.",
      "Eine Auflaufform mit etwas Olivenöl ausstreichen. Schichtweise die Lasagneplatten, die Spinat-Käse-Mischung und die Tomatensauce in die Form geben. Mit einer Käseschicht abschließen.",
      "Die Lasagne im vorgeheizten Backofen bei 180°C etwa 30 Minuten backen, bis die Oberfläche goldbraun ist. Vor dem Servieren etwas abkühlen lassen."
    ],
    nutrition: {
      calories: 350,
      protein: "15g",
      carbs: "30g",
      fat: "18g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Flammkuchen",
    image: "/images/MainCourses/flammkuchen.webp",
    prepTime: 30,
cookingTime: 20,
rating: 4.8,
    category: "Hauptgerichte",
    slug: "flammkuchen",
    tags: ["Traditionell", "Hauptgerichte", "Flammkuchen"],
    servings: 4,
    description: "Ein dünner, knuspriger Flammkuchen mit cremiger Basis, Zwiebeln und Käse – ein Klassiker aus der deutschen Küche.",
    ingredients: [
      { amount: 250, unit: "g", name: "Mehl" },
      { amount: 125, unit: "ml", name: "Wasser" },
      { amount: 2, unit: "EL", name: "Olivenöl" },
      { amount: 1, unit: "Prise", name: "Salz" },
      { amount: 200, unit: "g", name: "Crème fraîche" },
      { amount: 2, unit: "", name: "Zwiebeln (dünn geschnitten)" },
      { amount: 100, unit: "g", name: "Gruyère oder Emmentaler (gerieben)" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Backofen auf 250°C vorheizen. Ein Backblech mit Backpapier auslegen.",
      "Für den Teig Mehl, Wasser, Olivenöl und Salz in einer Schüssel zu einem glatten Teig verkneten. Den Teig dünn ausrollen und auf das Backblech legen.",
      "Die Crème fraîche gleichmäßig auf dem Teig verteilen. Mit Salz und Pfeffer würzen.",
      "Die dünn geschnittenen Zwiebeln gleichmäßig auf der Crème fraîche verteilen. Den geriebenen Käse darüberstreuen.",
      "Den Flammkuchen im vorgeheizten Ofen für 10–12 Minuten backen, bis der Rand knusprig und der Käse goldbraun ist.",
      "Heiß servieren und genießen!"
    ],
    nutrition: {
      calories: 350,
      protein: "10g",
      carbs: "40g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Käsespätzle",
    image: "/images/MainCourses/kaesespaetzle.webp",
    prepTime: 45,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Mehl in eine große Schüssel geben. Die Eier und die Milch hinzufügen und alles zu einem glatten Teig verrühren. Mit Salz und Muskatnuss würzen.",
      "Einen großen Topf mit Salzwasser zum Kochen bringen. Den Spätzleteig portionsweise durch ein Spätzlesieb oder einen Spätzlehobel ins kochende Wasser drücken.",
      "Die Spätzle etwa 2–3 Minuten kochen, bis sie an die Oberfläche steigen. Anschließend mit einer Schaumkelle herausheben und abtropfen lassen.",
      "Den Käse reiben. In einer Pfanne etwas Butter erhitzen und die Spätzle darin anbraten. Den geriebenen Käse hinzufügen und schmelzen lassen, bis alles gut vermengt ist.",
      "Die Käsespätzle heiß servieren, eventuell mit gerösteten Zwiebeln bestreuen."
    ],
    nutrition: {
      calories: 250,
      protein: "10g",
      carbs: "30g",
      fat: "12g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Kartoffelpuffer",
    image: "/images/Miscellaneous/kartoffelpuffer.webp",
    prepTime: 30,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Kartoffeln schälen und grob reiben. Die geriebenen Kartoffeln in ein sauberes Küchentuch geben und gut auspressen, um überschüssige Flüssigkeit zu entfernen.",
      "Die Eier in einer Schüssel verquirlen. Das Mehl, die Milch, Salz und Muskatnuss hinzufügen und zu einem glatten Teig verrühren.",
      "Die geriebenen Kartoffeln unter den Teig heben und alles gut vermengen.",
      "In einer großen Pfanne reichlich Öl erhitzen. Portionsweise den Teig in die Pfanne geben und flach drücken. Die Puffer bei mittlerer Hitze von beiden Seiten goldbraun braten, etwa 3–4 Minuten pro Seite.",
      "Die Kartoffelpuffer auf Küchenpapier abtropfen lassen und warm servieren, z. B. mit Apfelmus oder Sauerrahm."
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Semmelknödel",
    image: "/images/Miscellaneous/semmelknoedel.webp",
    prepTime: 40,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Kartoffeln schälen, in Stücke schneiden und in Salzwasser etwa 20 Minuten kochen, bis sie weich sind. Anschließend abgießen und mit einem Kartoffelstampfer zerdrücken.",
      "Das Mehl, die Eier, die Milch, Salz und Muskatnuss zu den Kartoffeln geben und alles zu einem glatten Teig verkneten.",
      "Aus dem Teig gleichmäßige Knödel formen. Dabei darauf achten, dass die Knödel fest genug sind, um nicht auseinanderzufallen.",
      "Einen großen Topf mit Salzwasser zum Kochen bringen. Die Knödel vorsichtig ins Wasser geben und bei mittlerer Hitze etwa 15–20 Minuten ziehen lassen, bis sie an die Oberfläche steigen.",
      "Die Knödel mit einer Schaumkelle herausheben, abtropfen lassen und warm servieren, z. B. mit Bratensauce oder Pilzrahm."
    ],
    nutrition: {
      calories: 250,
      protein: "5g",
      carbs: "40g",
      fat: "2g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Pilzgulasch",
    image: "/images/Miscellaneous/pilzgulasch.webp",
    prepTime: 45,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Pilze putzen, waschen und in grobe Stücke schneiden. Die Zwiebel und den Knoblauch schälen und fein hacken.",
      "In einem großen Topf etwas Öl erhitzen. Die Zwiebel und den Knoblauch darin glasig dünsten.",
      "Die Pilze zugeben und etwa 5 Minuten mitbraten, bis sie Flüssigkeit abgeben und leicht gebräunt sind.",
      "Die Gemüsebrühe hinzufügen und alles zum Kochen bringen. Die Hitze reduzieren und das Gulasch etwa 30 Minuten köcheln lassen, bis die Pilze weich sind und die Sauce leicht eingedickt ist.",
      "Mit Salz und Pfeffer abschmecken und das Pilzgulasch heiß servieren, z. B. mit Semmelknödeln oder Reis."
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "5g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Gemüsestrudel",
    image: "/images/Miscellaneous/gemuesestrudel.webp",
    prepTime: 75,
    cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Mehl in eine Schüssel geben. Die Butter in kleinen Stücken hinzufügen und mit den Fingern zu einer krümeligen Masse verarbeiten. Das Ei, den Zucker, Salz und Muskatnuss hinzufügen und alles zu einem glatten Teig kneten. Den Teig 30 Minuten im Kühlschrank ruhen lassen.",
      "Das Gemüse waschen, schneiden und in einer Pfanne mit etwas Öl kurz anbraten. Mit Salz und Pfeffer würzen und abkühlen lassen.",
      "Den Teig auf einer bemehlten Arbeitsfläche dünn ausrollen. Das Gemüse gleichmäßig auf dem Teig verteilen, dabei einen Rand von ca. 2 cm frei lassen.",
      "Den Teig vorsichtig von einer Seite aufrollen und die Enden gut verschließen. Den Strudel auf ein mit Backpapier ausgelegtes Backblech legen.",
      "Den Backofen auf 180°C vorheizen. Den Strudel mit etwas verquirltem Ei bestreichen und etwa 30–35 Minuten backen, bis er goldbraun ist. Warm servieren."
    ],
    nutrition: {
      calories: 300,
      protein: "5g",
      carbs: "40g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Grießnockerl",
    image: "/images/Miscellaneous/griessnockerl.webp",
    prepTime: 35,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Zwiebel und den Knoblauch schälen und fein hacken. In einem Topf etwas Öl erhitzen und die Zwiebel sowie den Knoblauch glasig dünsten.",
      "Die Gemüsebrühe hinzufügen und zum Kochen bringen. Die Grießnocken langsam unter Rühren in die Brühe geben und etwa 10 Minuten köcheln lassen, bis sie weich sind.",
      "Mit Salz und Pfeffer abschmecken. Die Suppe heiß servieren, eventuell mit frischen Kräutern garnieren."
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "30g",
      fat: "2g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Spinatknödel",
    image: "/images/Miscellaneous/spinatknoedel.webp",
    prepTime: 55,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Spinat waschen, abtropfen lassen und in einem Topf mit etwas Wasser etwa 5 Minuten dünsten, bis er zusammengefallen ist. Anschließend abkühlen lassen und gut auspressen, um überschüssige Flüssigkeit zu entfernen.",
      "Das Mehl in eine Schüssel geben. Die Eier, Milch, Salz und Muskatnuss hinzufügen und alles zu einem glatten Teig verrühren.",
      "Den Spinat fein hacken und unter den Teig heben. Alles gut vermengen, bis eine homogene Masse entsteht.",
      "Aus dem Teig gleichmäßige Knödel formen. Dabei darauf achten, dass die Knödel fest genug sind, um nicht auseinanderzufallen.",
      "Einen großen Topf mit Salzwasser zum Kochen bringen. Die Knödel vorsichtig ins Wasser geben und bei mittlerer Hitze etwa 15–20 Minuten ziehen lassen, bis sie an die Oberfläche steigen.",
      "Die Knödel mit einer Schaumkelle herausheben, abtropfen lassen und warm servieren, z. B. mit Bratensauce oder Butter."
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "30g",
      fat: "5g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Gemüsesuppe",
    image: "/images/Soups/gemuesesuppe.webp",
    prepTime: 40,
cookingTime: 20,
rating: 4.5,
    category: "Suppen",
    slug: "gemuesesuppe",
    tags: ["Traditionell", "Suppe", "Gemüse"],
    servings: 4,
    description: "Eine einfache und leckere Gemüsesuppe.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Gemüse waschen, schälen und in gleichmäßige Stücke schneiden. Je nach Gemüseart (z. B. Karotten, Sellerie, Lauch) die Garzeit anpassen.",
      "In einem großen Topf etwas Öl erhitzen. Das Gemüse darin etwa 5 Minuten anbraten, bis es leicht Farbe annimmt.",
      "Die Gemüsebrühe hinzufügen und alles zum Kochen bringen. Die Hitze reduzieren und die Suppe etwa 30 Minuten köcheln lassen, bis das Gemüse weich ist.",
      "Mit Salz und Pfeffer abschmecken. Die Suppe heiß servieren, eventuell mit frischen Kräutern oder einem Schuss Sahne verfeinern."
    ],
    nutrition: {
      calories: 100,
      protein: "2g",
      carbs: "10g",
      fat: "1g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Kartoffelgratin",
    image: "/images/MainCourses/kartoffelgratin.webp",
    prepTime: 60,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Kartoffeln schälen und in dünne Scheiben schneiden. Den Backofen auf 180°C vorheizen.",
      "In einem Topf die Butter schmelzen. Das Mehl unterrühren und kurz anschwitzen. Nach und nach die Milch hinzufügen und unter ständigem Rühren eine glatte Sauce kochen. Mit Salz und Pfeffer abschmecken.",
      "Eine Auflaufform mit etwas Butter einfetten. Schichtweise die Kartoffelscheiben und die Sauce in die Form geben. Mit einer Schicht Sauce abschließen.",
      "Den Käse reiben und gleichmäßig über das Gratin streuen. Im vorgeheizten Backofen etwa 45 Minuten backen, bis die Oberfläche goldbraun und die Kartoffeln weich sind.",
      "Das Gratin vor dem Servieren kurz abkühlen lassen."
    ],
    nutrition: {
      calories: 400,
      protein: "15g",
      carbs: "30g",
      fat: "20g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Quinoa-Buddha-Bowl",
    image: "/images/MainCourses/quinoa-buddha-bowl.webp",
    prepTime: 25,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Quinoa nach Packungsanleitung in Salzwasser kochen, abgießen und abkühlen lassen.",
      "Das Gemüse waschen und in mundgerechte Stücke schneiden. Den Fisch in einer Pfanne mit etwas Olivenöl anbraten, bis er gar ist. Die Nüsse in einer Pfanne ohne Fett kurz anrösten.",
      "Den Käse in kleine Würfel schneiden. Die Sojasauce und das Olivenöl in einer Schüssel verrühren.",
      "Den Quinoa in Schüsseln verteilen. Das Gemüse, den Fisch, die Nüsse und den Käse darauf anrichten. Mit der Sojasauce-Olivenöl-Mischung beträufeln und servieren."
    ],
    nutrition: {
      calories: 400,
      protein: "15g",
      carbs: "40g",
      fat: "20g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Ratatouille",
    image: "/images/Miscellaneous/ratatouille.webp",
    prepTime: 45,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Gemüse waschen und in gleichmäßige Stücke schneiden. Die Zwiebel und den Knoblauch schälen und fein hacken.",
      "In einem großen Topf etwas Olivenöl erhitzen. Die Zwiebel und den Knoblauch darin glasig dünsten.",
      "Die Aubergine, Paprika und Zucchini hinzufügen und etwa 5 Minuten anbraten. Die Tomaten hinzufügen und alles weitere 10 Minuten köcheln lassen.",
      "Mit Salz und Pfeffer abschmecken. Das Ratatouille heiß oder kalt servieren, z. B. als Beilage oder Hauptgericht."
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "5g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Gemüse-Curry",
    image: "/images/MainCourses/gemuese-curry.webp",
    prepTime: 30,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Gemüse waschen und in gleichmäßige Stücke schneiden. In einem großen Topf das Kokosnussöl erhitzen.",
      "Die Currypaste hinzufügen und kurz anbraten, bis sie aromatisch duftet. Das Gemüse hinzufügen und etwa 5 Minuten unter Rühren anbraten.",
      "Die Gemüsebrühe hinzufügen und alles zum Kochen bringen. Die Hitze reduzieren und das Curry etwa 20 Minuten köcheln lassen, bis das Gemüse weich ist.",
      "Mit Salz und Pfeffer abschmecken. Das Gemüse-Curry heiß servieren, z. B. mit Reis oder Naan-Brot."
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "10g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Brokkoli-Quiche",
    image: "/images/MainCourses/brokkoli-quiche.webp",
    prepTime: 55,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Brokkoli waschen und in kleine Röschen schneiden. In Salzwasser etwa 5 Minuten blanchieren, abgießen und abkühlen lassen.",
      "Den Backofen auf 180°C vorheizen. Eine Quicheform mit Butter einfetten.",
      "Das Mehl, die Eier, die Milch, Salz und Pfeffer in einer Schüssel verrühren, bis ein glatter Teig entsteht. Den Käse reiben und unter den Teig heben.",
      "Den Brokkoli gleichmäßig in der Quicheform verteilen. Den Teig darüber gießen.",
      "Die Quiche im Ofen etwa 35–40 Minuten backen, bis sie goldbraun ist und der Teig fest ist. Vor dem Servieren etwas abkühlen lassen."
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Gefüllte Paprika",
    image: "/images/MainCourses/gefuellte-paprika.webp",
    prepTime: 40,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Paprika waschen, den Deckel abschneiden und die Kerne entfernen. Die Zwiebel und den Knoblauch schälen und fein hacken.",
      "In einer Pfanne etwas Öl erhitzen. Die Zwiebel und den Knoblauch darin glasig dünsten. Das Gemüse waschen, schneiden und zu den Zwiebeln geben. Alles etwa 10 Minuten anbraten, bis das Gemüse weich ist. Mit Salz und Pfeffer abschmecken.",
      "Die Paprika mit der Gemüsemischung füllen und die Deckel darauflegen. Die gefüllten Paprika in eine ofenfeste Form setzen.",
      "Den Backofen auf 180°C vorheizen. Die Paprika im Ofen etwa 25–30 Minuten backen, bis sie weich sind und leicht gebräunt aussehen.",
      "Die gefüllten Paprika heiß servieren, z. B. mit Reis oder einem frischen Salat."
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "5g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Kürbissuppe",
    image: "/images/Soups/kuerbissuppe.webp",
    prepTime: 35,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Kürbis schälen, entkernen und in grobe Stücke schneiden. Die Zwiebel und den Knoblauch schälen und fein hacken.",
      "In einem großen Topf etwas Öl erhitzen. Die Zwiebel und den Knoblauch darin glasig dünsten. Den Kürbis hinzufügen und etwa 5 Minuten mitbraten.",
      "Die Gemüsebrühe hinzufügen und alles zum Kochen bringen. Die Hitze reduzieren und die Suppe etwa 20–25 Minuten köcheln lassen, bis der Kürbis weich ist.",
      "Die Suppe mit einem Stabmixer pürieren, bis sie cremig ist. Mit Salz und Pfeffer abschmecken.",
      "Die Kürbissuppe heiß servieren, eventuell mit einem Schuss Sahne oder gerösteten Kürbiskernen garnieren."
    ],
    nutrition: {
      calories: 100,
      protein: "2g",
      carbs: "15g",
      fat: "1g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Mediterraner Nudelsalat",
    image: "/images/Salads/mediterraner-nudelsalat.webp",
    prepTime: 20,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Nudeln nach Packungsanleitung in Salzwasser al dente kochen, abgießen und abkühlen lassen.",
      "Das Gemüse waschen und in mundgerechte Stücke schneiden. Den Fisch in einer Pfanne mit etwas Olivenöl anbraten, bis er gar ist.",
      "Die Tomaten waschen und würfeln. Den Käse in kleine Stücke schneiden.",
      "Die Nudeln, das Gemüse, den Fisch, die Tomaten und den Käse in einer großen Schüssel vermengen. Mit Olivenöl, Salz und Pfeffer abschmecken.",
      "Den Nudelsalat kalt servieren, eventuell mit frischen Kräutern garnieren."
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "30g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Griechischer Bauernsalat",
    image: "/images/Salads/griechischer-bauernsalat.webp",
    prepTime: 15,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Gemüse waschen und in mundgerechte Stücke schneiden. Die Tomaten in Scheiben schneiden, die Oliven halbieren und den Feta in Würfel schneiden.",
      "Alles in einer großen Schüssel vermengen. Das Olivenöl darüber träufeln und mit Salz und Pfeffer abschmecken.",
      "Den Salat kalt servieren, eventuell mit frischem Oregano oder Basilikum garnieren."
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "10g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Linsen-Bolognese",
    image: "/images/MainCourses/linsen-bolognese.webp",
    prepTime: 40,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Linsen waschen und in einem Topf mit Wasser etwa 20 Minuten kochen, bis sie weich sind. Anschließend abgießen und beiseite stellen.",
      "Die Zwiebel und den Knoblauch schälen und fein hacken. In einer Pfanne das Olivenöl erhitzen und die Zwiebel sowie den Knoblauch glasig dünsten.",
      "Das Gemüse waschen, schneiden und zu den Zwiebeln geben. Die Tomaten würfeln und ebenfalls hinzufügen. Alles etwa 10 Minuten köcheln lassen.",
      "Die gekochten Linsen unter die Gemüsemischung heben und alles weitere 5 Minuten köcheln lassen. Mit Salz und Pfeffer abschmecken.",
      "Die Linsen-Bolognese heiß servieren, z. B. mit Spaghetti oder frischem Brot."
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Süßkartoffel-Kokos-Suppe",
    image: "/images/Soups/suesskartoffelKokosSuppe.webp",
    prepTime: 35,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Süßkartoffeln schälen und in grobe Stücke schneiden. In einem großen Topf das Kokosnussöl erhitzen.",
      "Die Süßkartoffeln hinzufügen und etwa 5 Minuten anbraten. Die Gemüsebrühe hinzufügen und alles zum Kochen bringen.",
      "Die Hitze reduzieren und die Suppe etwa 20 Minuten köcheln lassen, bis die Süßkartoffeln weich sind.",
      "Die Suppe mit einem Stabmixer pürieren, bis sie cremig ist. Mit Zucker, Salz und Pfeffer abschmecken.",
      "Die Suppe heiß servieren, eventuell mit Kokosflocken oder frischem Koriander garnieren."
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Bunter Quinoa-Salat",
    image: "/images/Salads/bunter-quinoa-salat.webp",
    prepTime: 25,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Quinoa nach Packungsanleitung in Salzwasser kochen, abgießen und abkühlen lassen.",
      "Das Gemüse waschen und in mundgerechte Stücke schneiden. Den Fisch in einer Pfanne mit etwas Olivenöl anbraten, bis er gar ist. Die Nüsse in einer Pfanne ohne Fett kurz anrösten.",
      "Den Käse in kleine Würfel schneiden. Die Sojasauce und das Olivenöl in einer Schüssel verrühren.",
      "Den Quinoa, das Gemüse, den Fisch, die Nüsse und den Käse in einer großen Schüssel vermengen. Mit der Sojasauce-Olivenöl-Mischung beträufeln und servieren."
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "30g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Gemüse-Couscous-Salat",
    image: "/images/Salads/gemuese-couscous-salat.webp",
    prepTime: 20,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Couscous nach Packungsanleitung in heißem Wasser einweichen, bis er weich ist. Anschließend abkühlen lassen.",
      "Das Gemüse waschen und in mundgerechte Stücke schneiden. Die Tomaten würfeln, die Zwiebel und den Knoblauch fein hacken.",
      "In einer Pfanne etwas Olivenöl erhitzen. Die Zwiebel und den Knoblauch darin glasig dünsten. Das Gemüse hinzufügen und etwa 5 Minuten anbraten.",
      "Den Couscous, das Gemüse und die Tomaten in einer Schüssel vermengen. Mit Olivenöl, Salz und Pfeffer abschmecken.",
      "Den Salat kalt servieren, eventuell mit frischer Petersilie garnieren."
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "30g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Blumenkohl-Käse-Auflauf",
    image: "/images/MainCourses/blumenkohl-kaese-auflauf.webp",
    prepTime: 45,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Blumenkohl waschen und in kleine Röschen schneiden. In Salzwasser etwa 5 Minuten blanchieren, abgießen und abkühlen lassen.",
      "Den Backofen auf 180°C vorheizen. Eine Auflaufform mit Butter einfetten.",
      "Das Mehl, die Eier, die Milch, Salz und Pfeffer in einer Schüssel verrühren, bis ein glatter Teig entsteht. Den Käse reiben und unter den Teig heben.",
      "Den Blumenkohl gleichmäßig in der Auflaufform verteilen. Den Teig darüber gießen.",
      "Den Auflauf im Ofen etwa 35–40 Minuten backen, bis er goldbraun ist und der Teig fest ist. Vor dem Servieren etwas abkühlen lassen."
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Gemüse-Polenta-Auflauf",
    image: "/images/MainCourses/gemuese-polenta-auflauf.webp",
    prepTime: 55,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Gemüse waschen und in gleichmäßige Stücke schneiden. In einem Topf die Milch zum Kochen bringen und die Polenta langsam unter Rühren hinzufügen. Etwa 10 Minuten köcheln lassen, bis die Polenta dick ist.",
      "Den Käse reiben und die Eier verquirlen. Beides unter die Polenta heben und mit Salz und Pfeffer abschmecken.",
      "Das Gemüse in einer Pfanne mit etwas Öl etwa 5 Minuten anbraten. Eine Auflaufform mit Butter einfetten.",
      "Schichtweise die Polenta und das Gemüse in die Form geben. Mit einer Schicht Polenta abschließen.",
      "Den Auflauf im vorgeheizten Backofen bei 180°C etwa 30 Minuten backen, bis die Oberfläche goldbraun ist. Vor dem Servieren etwas abkühlen lassen."
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Zucchini-Reis-Auflauf",
    image: "/images/MainCourses/zucchini-reis-auflauf.webp",
    prepTime: 50,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Zucchini waschen und in dünne Scheiben schneiden. Den Reis nach Packungsanleitung in Salzwasser kochen, abgießen und abkühlen lassen.",
      "Den Käse reiben und die Eier verquirlen. Beides mit der Milch, Salz und Pfeffer in einer Schüssel vermengen.",
      "Eine Auflaufform mit Butter einfetten. Schichtweise die Zucchini und den Reis in die Form geben. Die Milch-Eier-Mischung darüber gießen.",
      "Den Auflauf im vorgeheizten Backofen bei 180°C etwa 35–40 Minuten backen, bis die Oberfläche goldbraun ist. Vor dem Servieren etwas abkühlen lassen."
    ],
    nutrition: {
      calories: 300,
      protein: "10g",
      carbs: "20g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    "title": "Klassisches Rührei",
    "image": "/images/Frühstück/klassisches-ruehrei.webp",
    "prepTime": 10,
    "rating": 4.7,
    "category": "Frühstück",
    "slug": "klassisches-ruehrei",
    "tags": ["Frühstück", "Eier", "Klassisch"],
    "servings": 2,
    "description": "Ein einfaches und leckeres Rezept für klassisches Rührei, das perfekt zum Frühstück passt.",
    "ingredients": [
      { "amount": 4, "unit": "Stück", "name": "Eier" },
      { "amount": 2, "unit": "EL", "name": "Milch" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" },
      { "amount": 1, "unit": "EL", "name": "Butter" }
    ],
    "instructions": [
      "Die Eier in einer Schüssel aufschlagen und mit Milch, Salz und Pfeffer gut verquirlen.",
      "Eine Pfanne bei mittlerer Hitze erhitzen und die Butter darin schmelzen lassen.",
      "Die Eiermischung in die Pfanne geben und langsam unter Rühren stocken lassen. Gelegentlich umrühren, um eine gleichmäßige Konsistenz zu erreichen.",
      "Das Rührei nach Wunsch cremig oder fester kochen und sofort servieren."
    ],
    "nutrition": {
      "calories": 200,
      "protein": "12g",
      "carbs": "1.5g",
      "fat": "16g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Overnight Oats mit Beeren",
    image: "/images/Frühstück/overnight-oats-beeren.webp",
    prepTime: 60,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Haferflocken und Milch in einer Schüssel vermengen. Das Ei hinzufügen und alles gut verrühren.",
      "Mit Salz und Muskatnuss würzen. Die Beeren waschen und unter die Haferflocken heben.",
      "Die Mischung in ein verschließbares Glas füllen und über Nacht im Kühlschrank ziehen lassen.",
      "Am nächsten Morgen die Overnight Oats kalt servieren, eventuell mit zusätzlichen Beeren oder Nüssen garnieren."
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "5g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Veganes Banana Bread",
    image: "/images/Frühstück/veganes-banana-bread.webp",
    prepTime: 55,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Bananen schälen und in einer Schüssel mit einer Gabel zerdrücken. Das Mehl, den Zucker, das Olivenöl und das Ei hinzufügen und alles gut vermengen.",
      "Das Backpulver und das Backgewürz unterheben. Den Teig in eine gefettete Kastenform füllen.",
      "Den Backofen auf 180°C vorheizen. Das Banana Bread etwa 45 Minuten backen, bis es goldbraun ist und ein Zahnstocher sauber herauskommt.",
      "Vor dem Servieren abkühlen lassen und in Scheiben schneiden."
    ],
    nutrition: {
      calories: 200,
      protein: "3g",
      carbs: "30g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Smoothie Bowl",
    image: "/images/Frühstück/smoothie-bowl.webp",
    prepTime: 15,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Früchte waschen und in Stücke schneiden. Die Bananen schälen und in Scheiben schneiden.",
      "Die Früchte, Bananen und den Joghurt in einen Mixer geben und zu einem cremigen Smoothie pürieren.",
      "Die Nüsse in einer Pfanne ohne Fett kurz anrösten, bis sie duften.",
      "Den Smoothie in eine Schüssel gießen. Die gerösteten Nüsse und etwas Kokosnussöl darüber geben.",
      "Die Smoothie Bowl sofort servieren, eventuell mit zusätzlichen Früchten oder Kokosflocken garnieren."
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Französische Crêpes",
    image: "/images/Frühstück/franzoesische-crepes.webp",
    prepTime: 30,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Mehl in eine Schüssel geben. Die Eier hinzufügen und nach und nach die Milch unterrühren, bis ein glatter Teig entsteht.",
      "Die Butter schmelzen und unter den Teig rühren. Mit Zucker, Salz und Pfeffer abschmecken.",
      "Eine Pfanne bei mittlerer Hitze erhitzen und leicht mit Butter einfetten. Eine Kelle Teig in die Pfanne geben und gleichmäßig verteilen.",
      "Die Crêpe etwa 2 Minuten backen, bis die Unterseite goldbraun ist. Wenden und weitere 1–2 Minuten backen.",
      "Die Crêpes warm servieren, z. B. mit Nutella, frischen Früchten oder Zucker und Zimt."
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Granola mit Nüssen",
    image: "/images/Frühstück/granola-nuesse.webp",
    prepTime: 40,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Nüsse grob hacken. In einer Schüssel den Zucker, das Olivenöl, das Mehl und das Backpulver vermengen.",
      "Die Nüsse unter die Mischung heben und alles gut vermengen, bis eine krümelige Masse entsteht.",
      "Den Backofen auf 160°C vorheizen. Die Granola-Mischung auf ein mit Backpapier ausgelegtes Blech verteilen.",
      "Die Granola etwa 25–30 Minuten backen, bis sie goldbraun und knusprig ist. Gelegentlich umrühren, um ein gleichmäßiges Backen zu gewährleisten.",
      "Die Granola abkühlen lassen und in einem luftdichten Behälter aufbewahren. Zum Servieren mit Joghurt oder Milch kombinieren."
    ],
    nutrition: {
      calories: 200,
      protein: "10g",
      carbs: "20g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Apfelstrudel",
    image: "/images/Desserts/apfelstrudel.webp",
    prepTime: 60,
cookingTime: 20,
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
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Mehl in eine Schüssel geben. Die Butter in kleinen Stücken hinzufügen und mit den Fingern zu einer krümeligen Masse verarbeiten. Das Ei, den Zucker, Salz und Muskatnuss hinzufügen und alles zu einem glatten Teig kneten. Den Teig 30 Minuten im Kühlschrank ruhen lassen.",
      "Die Äpfel schälen, entkernen und in dünne Scheiben schneiden. In einer Schüssel mit etwas Zucker und Zimt vermengen.",
      "Den Teig auf einer bemehlten Arbeitsfläche dünn ausrollen. Die Apfelmischung gleichmäßig auf dem Teig verteilen, dabei einen Rand von ca. 2 cm frei lassen.",
      "Den Teig vorsichtig von einer Seite aufrollen und die Enden gut verschließen. Den Strudel auf ein mit Backpapier ausgelegtes Backblech legen.",
      "Den Backofen auf 180°C vorheizen. Den Strudel mit etwas verquirltem Ei bestreichen und etwa 30–35 Minuten backen, bis er goldbraun ist. Warm servieren."
    ],
    nutrition: {
      calories: 300,
      protein: "5g",
      carbs: "40g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Schokoladen-Mousse",
    image: "/images/Desserts/schokoladen-mousse.webp",
    prepTime: 140,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Schokolade in einer Schüssel über einem Wasserbad schmelzen. Die Butter hinzufügen und unterrühren, bis alles glatt ist.",
      "Die Eier trennen. Das Eiweiß steif schlagen und den Zucker langsam unterrühren. Das Eigelb unter die geschmolzene Schokolade heben.",
      "Die Sahne steif schlagen und vorsichtig unter die Schokoladenmasse heben. Anschließend den Eischnee unterheben, bis eine luftige Mousse entsteht.",
      "Die Mousse in Dessertschälchen füllen und mindestens 2 Stunden im Kühlschrank fest werden lassen. Vor dem Servieren mit Sahne oder Schokoraspeln garnieren."
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "15g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Beeren-Crumble",
    image: "/images/Desserts/beeren-crumble.webp",
    prepTime: 45,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Die Beeren waschen und trocken tupfen. In einer Schüssel mit etwas Zucker vermengen und in eine ofenfeste Form geben.",
      "Das Mehl, den restlichen Zucker und die Butter in einer Schüssel zu einer krümeligen Masse verarbeiten. Die Nüsse hacken und unter die Mischung heben.",
      "Die Krümel gleichmäßig über die Beeren streuen. Den Backofen auf 180°C vorheizen.",
      "Das Crumble etwa 25–30 Minuten backen, bis die Krümel goldbraun sind und die Beeren leicht blubbern.",
      "Das Beeren-Crumble warm servieren, z. B. mit Vanilleeis oder Schlagsahne."
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Rhabarber-Kompott",
    image: "/images/Desserts/rhabarber-kompott.webp",
    prepTime: 25,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Den Rhabarber waschen, schälen und in kleine Stücke schneiden. In einem Topf mit dem Zucker und dem Wasser vermengen.",
      "Das Rhabarber-Kompott bei mittlerer Hitze etwa 15–20 Minuten köcheln lassen, bis der Rhabarber weich ist und die Flüssigkeit leicht eingedickt ist.",
      "Das Kompott abkühlen lassen und in Gläser füllen. Kalt oder warm servieren, z. B. mit Joghurt oder Vanillepudding."
    ],
    nutrition: {
      calories: 100,
      protein: "1g",
      carbs: "20g",
      fat: "0g"
},
 tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "" 
  }
  },
  {
    title: "Zimtschnecken",
    image: "/images/Desserts/zimtschnecken.webp",
    prepTime: 90,
cookingTime: 20,
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
    descriptionOnImage: "",
  introductionParagraph: "",
  additionalParagraph: "",
  ingredientsNeeded: [{
    title: "",
    description: ""
  }],
instructions: [
      "Das Mehl in eine Schüssel geben. Die Butter in kleinen Stücken hinzufügen und mit den Fingern zu einer krümeligen Masse verarbeiten. Das Ei und den Zucker hinzufügen und alles zu einem glatten Teig kneten. Den Teig 30 Minuten im Kühlschrank ruhen lassen.",
      "Den Teig auf einer bemehlten Arbeitsfläche dünn ausrollen. Den Zimt mit etwas Zucker vermengen und gleichmäßig auf dem Teig verteilen.",
      "Den Teig von einer Seite aufrollen und in gleichmäßige Scheiben schneiden. Die Schnecken auf ein mit Backpapier ausgelegtes Backblech legen.",
      "Den Backofen auf 180°C vorheizen. Die Zimtschnecken etwa 20–25 Minuten backen, bis sie goldbraun sind.",
      "Die Zimtschnecken warm servieren, z. B. mit einem Glas Milch oder Kaffee."
    ],
    nutrition: {
      calories: 200,
      protein: "5g",
      carbs: "20g",
      fat: "10g"
    },
    tips: [""],
  whyFavorite: {
    title: "",
    reasons: [{
      title: "",
      description: "",
    }]
  },
  handwrittenMessage: {
    mainText: "",
    subText: "",
    signature: ""
  },
  ingredientGroups: [{
    title: "",
    description: "",
    ingredients: [{
      amount: "",
      unit: "",
      name: ""
    }]
  }],
  steps: [
{
    title: "",
    description: ""
  }
],
  servingSuggestion: "",
  servingSuggestions: {
    title: "",
    description: "",
    note: "",
    items: [{
      emoji: "",
      title: "",
      description: ""
    }]
  },
  funFact: {
    title: "",
    description: ""
  },
  images: {
    imageIngredient: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: ""
  }
  },
  {
    "title": "Vegetarische Dubai Schokolade: Ein Exotischer Genuss mit Milchschokolade",
    "seo_title": "Vegetarische Dubai Schokolade Rezept – Exotische Schokoladenkreation für Vegetarier",
    "image": "/images/Desserts/dubaiSchokolade.webp",
    "prepTime": 30,
    "cookingTime": 15,
    "rating": 4.9,
    "reviews": 150,
    "category": "Desserts",
    "slug": "dubai-schokolade",
    "tags": ["Vegetarisch", "Schokolade", "Dubai", "Exotisch", "Milchschokolade"],
    "createdDate": new Date("2025-03-05T00:00:00"),
    "updatedDate": new Date("2025-03-30T00:00:00"),
    "servings": 6,
    "description": "Erleben Sie die luxuriöse Welt der vegetarischen Dubai Schokolade – eine exotische Kreation, die mit reichen Aromen und einer einzigartigen Textur verführt. Ein unvergessliches Dessert für jeden Anlass, speziell für Vegetarier kreiert.",
    "descriptionOnImage": "Vergoldete, samtige vegetarische Dubai Schokolade mit orientalischen Gewürzen und knackigen Nüssen – ein Meisterwerk, das die Sinne verzaubert und die Magie Dubais in jedem Bissen einfängt.",
    "introductionParagraph": "Tauchen Sie ein in die faszinierende Welt der vegetarischen Dubai Schokolade, ein Dessert, das die Opulenz und den Glanz der Vereinigten Arabischen Emirate in jedem Bissen widerspiegelt. Diese einzigartige Schokoladenkreation kombiniert die reichhaltige Süße hochwertiger Milchschokolade mit exotischen Gewürzen und knackigen Texturen, um ein unvergessliches Geschmackserlebnis zu schaffen. Die vegetarische Dubai Schokolade ist nicht nur ein Dessert, sondern eine Reise durch die Aromen des Orients, angepasst für Liebhaber vegetarischer Genüsse. Sie zeigt, wie luxuriös und vielfältig vegetarische Desserts sein können, ohne auf Geschmack oder Textur zu verzichten.",
    "additionalParagraph": "Was diese vegetarische Dubai Schokolade so besonders macht, ist ihre Vielseitigkeit und die Möglichkeit, sie an individuelle Vorlieben anzupassen. Sie ist das perfekte Dessert für besondere Anlässe, festliche Mahlzeiten oder einfach, um sich selbst einen Moment der puren Freude zu gönnen. Die Zubereitung ist überraschend einfach und ermöglicht es, die Aromen und Texturen nach Belieben zu variieren. Für ein noch intensiveres Geschmackserlebnis können Sie geröstete Nüsse oder getrocknete Früchte hinzufügen. Und für diejenigen, die es gerne etwas würziger mögen, empfiehlt sich eine Prise Kardamom oder Zimt. Diese vegetarische Dubai Schokolade ist nicht nur ein Dessert, sondern ein Ausdruck von Kreativität und Genuss, der zeigt, wie luxuriös und vielfältig vegetarische Süßspeisen sein können.",
    "ingredientsNeeded": [
      {
        "title": "Hochwertige Milchschokolade: Die Basis für Luxus",
        "description": "Verwenden Sie hochwertige Milchschokolade mit einem hohen Kakaoanteil für ein intensives Geschmackserlebnis. Achten Sie auf Qualität, um die reichhaltige Süße der Dubai Schokolade zu gewährleisten."
      },
      {
        "title": "Datteln: Die Süße des Orients",
        "description": "Sie verleihen der Schokolade eine natürliche Süße und eine weiche, karamellartige Textur. Verwenden Sie Medjool-Datteln für ein besonders aromatisches Ergebnis in Ihrer vegetarischen Dubai Schokolade."
      },
      {
        "title": "Nüsse: Der Knackige Kontrast",
        "description": "Eine Mischung aus Mandeln, Pistazien und Cashews sorgt für einen angenehmen Biss und eine nussige Note. Rösten Sie die Nüsse leicht an, um ihr Aroma zu intensivieren."
      },
      {
        "title": "Rosenwasser: Die Exotische Note",
        "description": "Es verleiht der Schokolade ein blumiges, orientalisches Aroma. Verwenden Sie hochwertiges Rosenwasser, um die subtilen Noten der Dubai Schokolade hervorzuheben."
      },
      {
        "title": "Kardamom: Die Warme Würze",
        "description": "Er gibt der Schokolade eine warme, leicht scharfe Note. Verwenden Sie frisch gemahlenen Kardamom für ein intensives Aroma in Ihrer vegetarischen Kreation."
      },
      {
        "title": "Butter: Der Geschmeidigmacher",
        "description": "Sie sorgt für eine cremige Textur und einen zarten Schmelz. Verwenden Sie hochwertige Butter, um die natürliche Süße der Dubai Schokolade zu unterstreichen."
      },
      {
        "title": "Goldstaub (optional): Der Luxuriöse Touch",
        "description": "Er verleiht der Schokolade einen glamourösen Look und macht sie zu einem echten Hingucker. Verwenden Sie essbaren Goldstaub für eine sichere und beeindruckende Präsentation."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Die Basis der Vegetarischen Dubai Schokolade",
        "description": "Die Grundlage für ein luxuriöses, vegetarisches Dessert:",
        "ingredients": [
          { "amount": 200, "unit": "g", "name": "Milchschokolade" },
          { "amount": 100, "unit": "g", "name": "Entsteinte Datteln" },
          { "amount": 50, "unit": "g", "name": "Gemischte Nüsse (Mandeln, Pistazien, Cashews)" }
        ]
      },
      {
        "title": "Die Exotischen Aromen der Vegetarischen Dubai Schokolade",
        "description": "Die Zutaten, die der Schokolade ihren unverwechselbaren, orientalischen Geschmack verleihen:",
        "ingredients": [
          { "amount": 2, "unit": "EL", "name": "Rosenwasser" },
          { "amount": 1, "unit": "TL", "name": "Gemahlener Kardamom" },
          { "amount": 2, "unit": "EL", "name": "Butter" },
          { "amount": 1, "unit": "Prise", "name": "Essbarer Goldstaub (optional)" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 200, "unit": "g", "name": "Milchschokolade" },
      { "amount": 100, "unit": "g", "name": "Entsteinte Datteln" },
      { "amount": 50, "unit": "g", "name": "Gemischte Nüsse (Mandeln, Pistazien, Cashews)" },
      { "amount": 2, "unit": "EL", "name": "Rosenwasser" },
      { "amount": 1, "unit": "TL", "name": "Gemahlener Kardamom" },
      { "amount": 2, "unit": "EL", "name": "Butter" },
      { "amount": 1, "unit": "Prise", "name": "Essbarer Goldstaub (optional)" }
    ],
    "instructions": [
      "Die Milchschokolade und die Butter in einem Wasserbad schmelzen, bis eine glatte Masse entsteht.",
      "Die Datteln fein hacken und zusammen mit den gerösteten Nüssen, dem Rosenwasser und dem Kardamom unter die geschmolzene Schokolade rühren.",
      "Die Schokoladenmischung in eine mit Backpapier ausgelegte Form geben und glatt streichen.",
      "Die vegetarische Dubai Schokolade für mindestens 2 Stunden im Kühlschrank fest werden lassen.",
      "Vor dem Servieren mit essbarem Goldstaub bestreuen und in kleine Stücke schneiden."
    ],
    "nutrition": {
      "calories": 1859,
      "protein": "28.8g",
      "carbs": "203g",
      "fat": "110.6g"
    },
    "tips": [
      "Für eine intensivere Nussnote, rösten Sie die Nüsse vor dem Hinzufügen im Ofen an.",
      "Verwenden Sie hochwertige Milchschokolade mit einem hohen Kakaoanteil für ein reichhaltigeres Geschmackserlebnis.",
      "Experimentieren Sie mit verschiedenen Gewürzen wie Zimt oder Ingwer, um die vegetarische Dubai Schokolade zu personalisieren.",
      "Für eine reichhaltigere Textur können Sie etwas Sahne hinzufügen."
    ],
    "whyFavorite": {
      "title": "Warum diese Vegetarische Dubai Schokolade mein Herz erobert",
      "reasons": [
        {
          "title": "Exotische Aromen",
          "description": "Die Kombination aus Datteln, Rosenwasser und Kardamom ist ein wahrer Genuss für die Sinne, perfekt für Vegetarier."
        },
        {
          "title": "Luxuriöse Textur",
          "description": "Die cremige Milchschokolade und die knackigen Nüsse sorgen für ein unvergessliches Mundgefühl."
        },
        {
          "title": "Einfache Zubereitung",
          "description": "Dieses Dessert ist überraschend einfach zuzubereiten und perfekt für besondere Anlässe, speziell für Vegetarier."
        },
        {
          "title": "Vegetarischer Genuss",
          "description": "Die vegetarische Dubai Schokolade zeigt, wie luxuriös und vielfältig vegetarische Desserts sein können."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lassen Sie sich von der Magie der vegetarischen Dubai Schokolade verzaubern – ein Dessert, das die Sinne berührt und die Seele wärmt!",
      "subText": "Ich bin sicher, diese Schokolade wird Ihre Gäste begeistern und Sie in eine Welt des orientalischen Genusses entführen...",
      "signature": "Ihre Schokoladen-Liebhaberin"
    },
    "steps": [
      {
        "title": "Schritt 1: Die Schokolade Schmelzen",
        "description": "Schmelzen Sie die Milchschokolade und die Butter langsam im Wasserbad, um eine glatte, cremige Basis für Ihre Dubai Schokolade zu schaffen."
      },
      {
        "title": "Schritt 2: Die Aromen Hinzufügen",
        "description": "Fügen Sie die fein gehackten Datteln, gerösteten Nüsse, Rosenwasser und Kardamom hinzu, um die exotischen Aromen der Dubai Schokolade zu entfalten."
      },
      {
        "title": "Schritt 3: Die Schokolade Fest Werden Lassen",
        "description": "Geben Sie die Schokoladenmischung in eine Form und lassen Sie sie im Kühlschrank fest werden, um die perfekte Konsistenz zu erreichen."
      },
      {
        "title": "Schritt 4: Das Servieren",
        "description": "Bestreuen Sie die vegetarische Dubai Schokolade vor dem Servieren mit essbarem Goldstaub, um einen luxuriösen Touch zu verleihen."
      }
    ],
    "servingSuggestion": "Servieren Sie die vegetarische Dubai Schokolade mit einer Tasse arabischen Kaffees oder einem Glas Minztee, um die orientalischen Aromen zu unterstreichen.",
    "servingSuggestions": {
      "title": "Globale Schokoladen-Pairings für Vegetarier",
      "description": "Entdecken Sie neue Geschmackswelten mit diesen internationalen Servierideen für Ihre vegetarische Dubai Schokolade:",
      "note": "Diese Ideen zeigen, wie vielseitig vegetarische Schokolade sein kann und wie einfach es ist, internationale Aromen in Ihr Dessert zu integrieren!",
      "items": [
        {
          "emoji": "☕",
          "title": "Mexikanischer Mokka",
          "description": "Servieren Sie die Schokolade mit einem Mokka, verfeinert mit einer Prise Zimt und Chili, für eine würzige Note."
        },
        {
          "emoji": "🍊",
          "title": "Italienische Orangen-Schokolade",
          "description": "Kombinieren Sie die Dubai Schokolade mit kandierten Orangenschalen und einem Glas italienischen Vin Santo."
        },
        {
          "emoji": "🍵",
          "title": "Japanischer Matcha-Tee",
          "description": "Servieren Sie die Schokolade mit einem Matcha-Tee und einer Prise geröstetem Sesam für eine japanische Note."
        },
        {
          "emoji": "🥥",
          "title": "Thailändische Kokos-Schokolade",
          "description": "Verfeinern Sie die Schokolade mit Kokosraspeln und servieren Sie sie mit einem Glas Kokoswasser."
        },
        {
          "emoji": "🍇",
          "title": "Französisches Schokoladen-Soufflé",
          "description": "Servieren Sie die Dubai Schokolade als Beilage zu einem warmen Schokoladen-Soufflé und einem Glas französischen Rotwein."
        }
      ]
    },
    "funFact": {
      "title": "Fun Fact: Die Goldene Schokolade",
      "description": "Wussten Sie, dass Gold in vielen Kulturen als Symbol für Reichtum und Luxus gilt? In Dubai wird Gold oft in Desserts verwendet, um die Opulenz der Stadt widerzuspiegeln. Unsere vegetarische Dubai Schokolade ist eine Hommage an diese Tradition, ganz ohne tierische Produkte, und zeigt, wie luxuriös und vielfältig vegetarische Desserts sein können!"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/dubaiSchokoladeIngredient.webp",
      "image1": "/images/Miscellaneous/dubaiSchokolade1.webp",
      "image2": "/images/Miscellaneous/dubaiSchokolade2.webp",
      "image3": "/images/Miscellaneous/dubaiSchokolade3.webp",
      "image4": "/images/Miscellaneous/dubaiSchokolade4.webp",
      "image5": "/images/Miscellaneous/dubaiSchokolade5.webp",
      "image6": "/images/Miscellaneous/dubaiSchokolade6.webp",
      "image7": "/images/Miscellaneous/dubaiSchokolade7.webp"
    }
  },
  {
    "title": "Vegetarische Shakshuka",
    "seo_title": "Orientalische Shakshuka mit Kräutern – Vegetarisches Frühstückserlebnis",
    "image": "/images/Frühstück/shakshuka.webp",
    "prepTime": 15,
    "cookingTime": 25,
    "rating": 4.8,
    "reviews": 156,
    "category": "Frühstück",
    "slug": "shakshuka",
    "tags": ["Frühstück", "Orientalisch", "Eier", "Tomaten"],
    "createdDate": new Date('2025-03-15T00:00:00'),
    "updatedDate": new Date('2025-03-30T00:00:00'),
    "servings": 2,
    "description": "Orientalisches Frühstückserlebnis: Eier in würziger Tomatensauce mit Paprika, Zwiebeln und Gewürzen – perfekt mit frischem Brot zum Eintunken!",
    "descriptionOnImage": "Duftende Shakshuka mit pochiertem Ei in würziger Tomatensauce, bestreut mit Feta und frischen Kräutern – ein orientalisches Frühstückserlebnis.",
    "introductionParagraph": "Shakshuka ist ein Gericht, das alle Sinne anspricht – der Duft von Kreuzkümmel und Paprika, der sich in der Küche verbreitet, das Blubbern der Tomatensauce, in der die Eier sanft pochieren, und schließlich der Anblick des fertigen Gerichts: leuchtend rot mit weißen Eiern und grünen Kräutern. Ursprünglich aus Nordafrika stammend und in Israel perfektioniert, hat dieses Gericht seinen Weg in die Küchen der Welt gefunden – und das aus gutem Grund. Es ist nicht nur ein Fest für die Sinne, sondern auch unglaublich vielseitig. Ob als herzhaftes Frühstück, entspanntes Brunch-Gericht oder leichtes Abendessen – Shakshuka passt zu jeder Tageszeit. Die Kombination aus würziger Tomatensauce und cremigen Eiern, abgerundet mit Feta und frischen Kräutern, schafft ein Geschmackserlebnis, das sowohl befriedigend als auch belebend ist. Und das Beste daran? Es ist in unter 30 Minuten zubereitet und benötigt nur eine Pfanne!",
    "additionalParagraph": "Was ich besonders an Shakshuka liebe, ist seine Anpassungsfähigkeit. Die Grundzutaten – Tomaten, Paprika, Zwiebeln und Eier – bleiben gleich, aber darüber hinaus kannst du es nach Herzenslust variieren. Im Sommer füge ich gerne frisches Gemüse vom Markt hinzu, im Winter verwende ich eingelegte Paprika für eine zusätzliche Geschmackstiefe. Manchmal streue ich Ziegenkäse statt Feta darüber, oder ich gebe einen Löffel Harissa in die Sauce für eine extra Schärfe. Shakshuka ist auch ein wunderbares Gericht, um Reste zu verwerten – übrig gebliebenes geröstetes Gemüse, Spinat oder Kräuter können einfach in die Sauce gerührt werden. Und obwohl es traditionell zum Frühstück serviert wird, finde ich, dass es zu jeder Tageszeit passt. An einem geschäftigen Wochentag ist es ein schnelles, nahrhaftes Abendessen, an einem entspannten Wochenende ein geselliges Brunch-Gericht, das man direkt aus der Pfanne servieren kann.",
    "ingredientsNeeded": [
      {
        "title": "Eier",
        "description": "Frische Eier sind das Herzstück dieses Gerichts. Sie werden direkt in die Tomatensauce geschlagen und sanft pochiert, bis das Eiweiß fest und das Eigelb noch cremig ist – der perfekte Kontrast zur würzigen Sauce."
      },
      {
        "title": "Tomaten",
        "description": "Reife, saftige Tomaten bilden die Basis der Sauce. Im Sommer verwende ich frische Tomaten vom Markt, im Winter greifen stattdessen hochwertige Dosentomaten, die oft sogar intensiver im Geschmack sind."
      },
      {
        "title": "Paprika",
        "description": "Rote und gelbe Paprika bringen Süße und Farbe ins Spiel. Sie werden langsam angebraten, bis sie karamellisieren und ihre natürliche Süße freisetzen."
      },
      {
        "title": "Zwiebeln und Knoblauch",
        "description": "Das aromatische Fundament jeder guten Shakshuka. Langsam in Olivenöl angeschwitzt, entwickeln sie eine süßliche Tiefe, die die Basis für alle weiteren Aromen bildet."
      },
      {
        "title": "Gewürze",
        "description": "Kreuzkümmel, Paprikapulver und Chilipulver verleihen dem Gericht seinen charakteristischen orientalischen Geschmack. Je nach Vorliebe kann die Schärfe angepasst werden."
      },
      {
        "title": "Feta",
        "description": "Der salzige, cremige Feta bildet einen wunderbaren Kontrast zur säuerlichen Tomatensauce und den cremigen Eiern. Er wird kurz vor dem Servieren über das Gericht gestreut."
      },
      {
        "title": "Frische Kräuter",
        "description": "Petersilie und Koriander bringen Frische und Farbe ins Spiel. Sie werden am Ende über das Gericht gestreut und verleihen ihm nicht nur optisch den letzten Schliff."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Die Basis",
        "description": "Die aromatische Grundlage für eine perfekte Shakshuka – langsam angeschwitzte Zwiebeln und Paprika bilden das Fundament für die würzige Tomatensauce.",
        "ingredients": [
          { "amount": 2, "unit": "EL", "name": "Olivenöl" },
          { "amount": 1, "unit": "", "name": "Zwiebel, fein gewürfelt" },
          { "amount": 1, "unit": "", "name": "Rote Paprika, in Streifen geschnitten" },
          { "amount": 2, "unit": "Zehen", "name": "Knoblauch, fein gehackt" }
        ]
      },
      {
        "title": "Die Sauce",
        "description": "Eine würzige Tomatensauce mit orientalischen Gewürzen – das Herzstück der Shakshuka, in der die Eier sanft pochieren.",
        "ingredients": [
          { "amount": 400, "unit": "g", "name": "Gehackte Tomaten (Dose)" },
          { "amount": 1, "unit": "TL", "name": "Kreuzkümmel, gemahlen" },
          { "amount": 1, "unit": "TL", "name": "Paprikapulver" },
          { "amount": 0.5, "unit": "TL", "name": "Chilipulver (nach Geschmack)" },
          { "amount": 1, "unit": "Prise", "name": "Zucker" },
          { "amount": undefined, "unit": "", "name": "Salz und Pfeffer, nach Geschmack" }
        ]
      },
      {
        "title": "Die Hauptzutaten",
        "description": "Frische Eier, die direkt in die Sauce geschlagen werden, bilden zusammen mit dem Feta und den Kräutern den krönenden Abschluss.",
        "ingredients": [
          { "amount": 4, "unit": "", "name": "Eier" },
          { "amount": 75, "unit": "g", "name": "Feta, zerbröckelt" },
          { "amount": 2, "unit": "EL", "name": "Frische Petersilie, gehackt" },
          { "amount": 2, "unit": "EL", "name": "Frischer Koriander, gehackt (optional)" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 2, "unit": "EL", "name": "Olivenöl" },
      { "amount": 1, "unit": "", "name": "Zwiebel, fein gewürfelt" },
      { "amount": 1, "unit": "", "name": "Rote Paprika, in Streifen geschnitten" },
      { "amount": 2, "unit": "Zehen", "name": "Knoblauch, fein gehackt" },
      { "amount": 400, "unit": "g", "name": "Gehackte Tomaten (Dose)" },
      { "amount": 1, "unit": "TL", "name": "Kreuzkümmel, gemahlen" },
      { "amount": 1, "unit": "TL", "name": "Paprikapulver" },
      { "amount": 0.5, "unit": "TL", "name": "Chilipulver (nach Geschmack)" },
      { "amount": 1, "unit": "Prise", "name": "Zucker" },
      { "amount": undefined, "unit": "", "name": "Salz und Pfeffer, nach Geschmack" },
      { "amount": 4, "unit": "", "name": "Eier" },
      { "amount": 75, "unit": "g", "name": "Feta, zerbröckelt" },
      { "amount": 2, "unit": "EL", "name": "Frische Petersilie, gehackt" },
      { "amount": 2, "unit": "EL", "name": "Frischer Koriander, gehackt (optional)" }
    ],
    "instructions": [
      "In einer großen Pfanne (idealerweise aus Gusseisen) Olivenöl bei mittlerer Hitze erwärmen.",
      "Zwiebel und Paprika hinzufügen und etwa 5 Minuten anbraten, bis sie weich werden.",
      "Knoblauch hinzufügen und weitere 30 Sekunden anbraten, bis er duftet.",
      "Gehackte Tomaten, Kreuzkümmel, Paprikapulver, Chilipulver und eine Prise Zucker hinzufügen. Mit Salz und Pfeffer würzen.",
      "Die Sauce zum Köcheln bringen und bei mittlerer Hitze etwa 10 Minuten köcheln lassen, bis sie leicht eindickt.",
      "Mit einem Löffel vier Mulden in die Sauce drücken und je ein Ei in jede Mulde aufschlagen.",
      "Die Pfanne abdecken und die Eier etwa 5-7 Minuten pochieren lassen, bis das Eiweiß fest und das Eigelb noch cremig ist.",
      "Vom Herd nehmen, Feta darüberstreuen und mit frischen Kräutern garnieren.",
      "Sofort servieren, idealerweise direkt aus der Pfanne, mit frischem Brot zum Eintunken."
    ],
    "nutrition": {
      "calories": 320,
      "protein": "18g",
      "carbs": "12g",
      "fat": "22g"
    },
    "tips": [
      "Für eine vegane Version kannst du die Eier durch Tofu ersetzen – schneide ihn in Würfel und gib ihn in die Sauce, oder verwende Kichererbsenmehl, um eine eierähnliche Konsistenz zu erzielen.",
      "Die Konsistenz der Sauce ist wichtig – sie sollte dick genug sein, um die Eier zu halten, aber nicht zu trocken. Füge bei Bedarf etwas Wasser hinzu.",
      "Experimentiere mit verschiedenen Käsesorten – Ziegenkäse oder Halloumi sind wunderbare Alternativen zu Feta.",
      "Serviere Shakshuka mit frischem Fladenbrot, Pita oder Baguette – etwas, womit du die leckere Sauce auftunken kannst.",
      "Für eine zusätzliche Geschmackstiefe kannst du geröstete Paprika oder einen Löffel Harissa-Paste in die Sauce geben."
    ],
    "whyFavorite": {
      "title": "Warum Shakshuka mein vegetarisches Lieblingsgericht ist",
      "reasons": [
        {
          "title": "Einfachheit trifft auf Raffinesse",
          "description": "Mit wenigen Grundzutaten zauberst du ein Gericht, das sowohl rustikal als auch elegant ist – perfekt für Anfänger und erfahrene Köche gleichermaßen."
        },
        {
          "title": "Ein Fest für alle Sinne",
          "description": "Die leuchtenden Farben, der verführerische Duft und die Kombination aus würziger Sauce und cremigen Eiern machen jedes Shakshuka-Frühstück zu einem sinnlichen Erlebnis."
        },
        {
          "title": "Vielseitigkeit ohne Grenzen",
          "description": "Von der klassischen Version bis hin zu kreativen Variationen mit saisonalem Gemüse – Shakshuka lässt sich endlos anpassen und bleibt doch immer erkennbar."
        },
        {
          "title": "Gemeinschaftserlebnis",
          "description": "Direkt aus der Pfanne serviert, lädt Shakshuka zum gemeinsamen Essen ein – ein Gericht, das Gespräche anregt und Menschen zusammenbringt."
        },
        {
          "title": "Nährstoffreiche Kraftquelle",
          "description": "Reich an Proteinen, Vitaminen und Antioxidantien ist Shakshuka nicht nur köstlich, sondern auch eine nahrhafte Mahlzeit, die lange sättigt und Energie für den Tag gibt."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lass dich von den Aromen des Orients verzaubern – Shakshuka ist mehr als ein Frühstück, es ist eine Reise!",
      "subText": "Genieße jeden Löffel dieser würzigen Symphonie und tunke großzügig Brot in die Sauce...",
      "signature": "Deine Gewürzentdeckerin"
    },
    "steps": [
      {
        "title": "Schritt 1: Die aromatische Basis",
        "description": "Zwiebeln und Paprika werden langsam angeschwitzt, bis sie ihre natürliche Süße entfalten – das Fundament für eine geschmacksintensive Shakshuka."
      },
      {
        "title": "Schritt 2: Die Gewürzsymphonie",
        "description": "Knoblauch, Kreuzkümmel und Paprikapulver werden hinzugefügt und kurz angeröstet, um ihre ätherischen Öle freizusetzen und das volle Aroma zu entfalten."
      },
      {
        "title": "Schritt 3: Die Tomatensauce",
        "description": "Die Tomaten werden hinzugefügt und langsam eingekocht, bis eine dickflüssige, intensive Sauce entsteht – die perfekte Umgebung für die Eier."
      },
      {
        "title": "Schritt 4: Das Eier-Finale",
        "description": "Die Eier werden vorsichtig in Mulden in der Sauce aufgeschlagen und sanft pochiert, bis das Eiweiß fest und das Eigelb noch cremig ist – der krönende Abschluss."
      }
    ],
    "servingSuggestion": "Serviere die Shakshuka direkt in der Pfanne, bestreut mit zerbröckeltem Feta und frischen Kräutern. Dazu reichlich frisches Brot zum Eintunken der würzigen Sauce.",
    "servingSuggestions": {
      "title": "Shakshuka-Begleiter: Von traditionell bis kreativ",
      "description": "Hier sind vier Ideen, die deine Shakshuka zum kulinarischen Erlebnis machen:",
      "note": "Traditionell wird Shakshuka mit frischem Fladenbrot serviert, aber diese Begleiter heben das Gericht auf ein neues Level!",
      "items": [
        {
          "emoji": "🥖",
          "title": "Knuspriges Sauerteigbrot",
          "description": "Leicht geröstet und mit Olivenöl beträufelt – perfekt zum Auftunken der würzigen Sauce."
        },
        {
          "emoji": "🥑",
          "title": "Avocado-Tahini-Dip",
          "description": "Cremige Avocado mit nussigem Tahini und Zitrone – ein kühler Kontrast zur warmen Shakshuka."
        },
        {
          "emoji": "🥒",
          "title": "Israelischer Salat",
          "description": "Fein gewürfelte Gurken, Tomaten und Petersilie mit Zitronensaft – bringt Frische und Textur ins Spiel."
        },
        {
          "emoji": "🍯",
          "title": "Labneh mit Honig",
          "description": "Abgetropfter Joghurt mit einem Hauch Honig und Pistazien – süß-salzige Note zum Ausbalancieren der Würze."
        }
      ]
    },
    "funFact": {
      "title": "Fun Fact: Shakshuka's diplomatische Mission",
      "description": "Wusstest du, dass Shakshuka als 'kulinarischer Diplomat' gilt? 🌍 Dieses Gericht wird in Nordafrika, dem Nahen Osten und dem Mittelmeerraum gleichermaßen beansprucht – Tunesien, Marokko, Israel, Ägypten und die Türkei führen freundschaftliche Debatten über seinen Ursprung. In Israel wurde es in den 1950er Jahren durch eingewanderte tunesische Juden populär und ist heute ein Nationalgericht, das Grenzen überwindet. Bei UN-Veranstaltungen wird Shakshuka manchmal als 'Friedensgericht' serviert, das kulturelle Gemeinsamkeiten statt Unterschiede betont. Die wahre Magie? Egal woher es stammt – sobald der Duft von Kreuzkümmel und Tomaten die Luft erfüllt, sind alle Streitigkeiten vergessen! 😊"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/shakshukaIngredient.webp",
      "image1": "/images/MainCourses/shakshuka1.webp",
      "image2": "/images/MainCourses/shakshuka2.webp",
      "image3": "/images/MainCourses/shakshuka3.webp",
      "image4": "/images/MainCourses/shakshuka4.webp",
      "image5": "/images/MainCourses/shakshuka5.webp",
      "image6": "/images/MainCourses/shakshuka6.webp",
      "image7": "/images/MainCourses/shakshuka7.webp"
    }
  }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}