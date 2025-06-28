export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  prepTime: number;
  cookingTime: number;
  servings: number;
  rating: number;
  reviews: number;
  createdDate: Date;
  updatedDate: Date;
  seo_title?: string;
  seo_keywords?: string[];
  introductionParagraph: string;
  additionalParagraph: string;
  images: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    image7: string;
    imageIngredient: string;
  };
  ingredientsNeeded?: Array<{
    title: string;
    description: string;
  }>;
  ingredientGroups?: Array<{
    title: string;
    description: string;
    ingredients: Array<{
      amount?: number | string;
      unit?: string;
      name: string;
    }>;
  }>;
  ingredients: Array<{
    amount?: number | string;
    unit?: string;
    name: string;
  }>;
  instructions: string[];
  tips?: string[];
  funFact: {
    title: string;
    description: string;
  };
  servingSuggestions?: {
    title: string;
    description: string;
    items: Array<{
      emoji: string;
      title: string;
      description: string;
    }>;
    note: string;
  };
  whyFavorite?: {
    title: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
  };
  handwrittenMessage?: {
    mainText: string;
    subText: string;
    signature: string;
  };
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export const recipes: Recipe[] = [
  {
    id: "1",
    slug: "vegetarisches-gemuese-curry",
    title: "Vegetarisches Gemüse-Curry",
    description: "Ein aromatisches und gesundes Gemüse-Curry mit Kokosmilch, perfekt für ein schnelles Abendessen.",
    image: "/images/MainCourses/gemuese-curry.jpeg",
    category: "Hauptgerichte",
    tags: ["Vegan", "Glutenfrei", "Schnell", "Indisch", "Gesund"],
    prepTime: 15,
    cookingTime: 25,
    servings: 4,
    rating: 4.8,
    reviews: 127,
    createdDate: new Date("2024-01-15"),
    updatedDate: new Date("2024-12-15"),
    seo_title: "Vegetarisches Gemüse-Curry Rezept | Einfach & Lecker",
    seo_keywords: ["vegetarisches curry", "gemüse curry", "veganes curry", "indisches curry", "kokosmilch curry"],
    introductionParagraph: "Dieses vegetarische Gemüse-Curry ist ein wahres Geschmackserlebnis! Mit frischen Gemüsesorten, aromatischen Gewürzen und cremiger Kokosmilch zauberst du in nur 40 Minuten ein Restaurant-würdiges Gericht auf den Tisch.",
    additionalParagraph: "Das Besondere an diesem Curry ist die perfekte Balance aus süßen und würzigen Aromen. Die Kokosmilch verleiht dem Gericht eine cremige Textur, während die frischen Gewürze für die authentische indische Note sorgen.",
    images: {
      image1: "/images/MainCourses/gemuese-curry.jpeg",
      image2: "/images/MainCourses/cremiges-gemuese-curry-low-carb-vegetarisch.jpeg",
      image3: "/images/MainCourses/gemuese-curry-mit-kuerbis-und-kokosmilch.jpeg",
      image4: "/images/MainCourses/gemuese-curry-mit-kichererbsen-und-blumenkohl.jpeg",
      image5: "/images/MainCourses/gemuese-curry-indisch-mit-kurkuma-und-senfsamen.jpeg",
      image6: "/images/MainCourses/gemuese-curry-ohne-fleisch-mit-kokosoel-und-tomatenmark.jpeg",
      image7: "/images/MainCourses/vegetarisches-curry-mit-garam-masala-und-kreuzkuemmel.jpeg",
      imageIngredient: "/images/Ingredients/gemuese-curry-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Kokosmilch",
        description: "Verleiht dem Curry seine cremige Konsistenz und mildert die Schärfe der Gewürze ab."
      },
      {
        title: "Curry-Gewürzmischung",
        description: "Eine Mischung aus Kurkuma, Kreuzkümmel, Koriander und Garam Masala für den authentischen Geschmack."
      },
      {
        title: "Frisches Gemüse",
        description: "Paprika, Zucchini, Karotten und Brokkoli sorgen für Farbe, Textur und wichtige Nährstoffe."
      }
    ],
    ingredients: [
      { amount: 2, unit: "EL", name: "Olivenöl" },
      { amount: 1, unit: "", name: "große Zwiebel, gewürfelt" },
      { amount: 3, unit: "", name: "Knoblauchzehen, gehackt" },
      { amount: 1, unit: "EL", name: "frischer Ingwer, gerieben" },
      { amount: 2, unit: "TL", name: "Curry-Pulver" },
      { amount: 1, unit: "TL", name: "Kurkuma" },
      { amount: 1, unit: "TL", name: "Kreuzkümmel" },
      { amount: 400, unit: "ml", name: "Kokosmilch" },
      { amount: 400, unit: "g", name: "gehackte Tomaten (Dose)" },
      { amount: 1, unit: "", name: "rote Paprika, in Streifen" },
      { amount: 1, unit: "", name: "Zucchini, gewürfelt" },
      { amount: 2, unit: "", name: "Karotten, in Scheiben" },
      { amount: 200, unit: "g", name: "Brokkoli-Röschen" },
      { amount: 1, unit: "TL", name: "Salz" },
      { amount: 0.5, unit: "TL", name: "schwarzer Pfeffer" },
      { amount: "", unit: "", name: "Frischer Koriander zum Garnieren" }
    ],
    instructions: [
      "Erhitze das Olivenöl in einem großen Topf bei mittlerer Hitze. Füge die gewürfelte Zwiebel hinzu und brate sie 3-4 Minuten an, bis sie glasig wird.",
      "Gib den gehackten Knoblauch und den geriebenen Ingwer dazu. Brate alles weitere 1-2 Minuten an, bis es duftet.",
      "Füge Curry-Pulver, Kurkuma und Kreuzkümmel hinzu. Rühre die Gewürze 30 Sekunden um, damit sie ihr Aroma entfalten können.",
      "Gieße die Kokosmilch und die gehackten Tomaten hinzu. Bringe die Mischung zum Kochen und reduziere dann die Hitze.",
      "Füge das vorbereitete Gemüse (Paprika, Zucchini, Karotten und Brokkoli) hinzu. Würze mit Salz und Pfeffer.",
      "Lasse das Curry 15-20 Minuten köcheln, bis das Gemüse weich ist und die Sauce eingedickt ist.",
      "Schmecke ab und würze bei Bedarf nach. Garniere mit frischem Koriander und serviere mit Basmatireis oder Naan-Brot."
    ],
    tips: [
      "Für extra Schärfe kannst du eine gehackte Chilischote hinzufügen.",
      "Das Curry schmeckt am nächsten Tag noch besser, da die Aromen Zeit haben zu verschmelzen.",
      "Verwende Gemüse der Saison für die beste Qualität und den besten Geschmack."
    ],
    funFact: {
      title: "Wusstest du schon?",
      description: "Kurkuma, das Hauptgewürz in Curry, wird auch als 'goldenes Gewürz' bezeichnet und hat entzündungshemmende Eigenschaften. Es verleiht dem Curry nicht nur seine charakteristische gelbe Farbe, sondern ist auch sehr gesund!"
    },
    servingSuggestions: {
      title: "Perfekte Beilagen zu deinem Gemüse-Curry",
      description: "Dieses aromatische Curry harmoniert wunderbar mit verschiedenen Beilagen:",
      items: [
        {
          emoji: "🍚",
          title: "Basmatireis",
          description: "Der klassische Partner - der duftende Reis nimmt die würzige Sauce perfekt auf."
        },
        {
          emoji: "🫓",
          title: "Naan-Brot",
          description: "Frisches, warmes Naan-Brot zum Dippen in die cremige Curry-Sauce."
        },
        {
          emoji: "🥒",
          title: "Gurken-Raita",
          description: "Ein kühler Joghurt-Dip mit Gurken als erfrischender Kontrast zur Würze."
        }
      ],
      note: "Tipp: Serviere das Curry mit einem Spritzer Limettensaft für extra Frische!"
    },
    whyFavorite: {
      title: "Warum dieses Curry unser Favorit ist",
      reasons: [
        {
          title: "Schnell & Einfach",
          description: "In nur 40 Minuten steht ein vollwertiges, gesundes Gericht auf dem Tisch."
        },
        {
          title: "Nährstoffreich",
          description: "Vollgepackt mit Vitaminen, Mineralien und gesunden Pflanzenstoffen."
        },
        {
          title: "Vielseitig",
          description: "Du kannst jedes Gemüse verwenden, das du gerade zu Hause hast."
        },
        {
          title: "Meal Prep geeignet",
          description: "Lässt sich perfekt vorbereiten und hält sich mehrere Tage im Kühlschrank."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Dieses Curry wärmt Herz und Seele!",
      subText: "Perfekt für gemütliche Abende",
      signature: "♥ Veggie-Team"
    },
    nutrition: {
      calories: 285,
      protein: "8g",
      carbs: "18g",
      fat: "22g"
    }
  },
  {
    id: "2",
    slug: "cremige-kartoffelsuppe",
    title: "Cremige Kartoffelsuppe",
    description: "Eine herzhafte, cremige Kartoffelsuppe wie von Oma - perfekt für kalte Tage und einfach zuzubereiten.",
    image: "/images/Soups/kartoffelsuppe.jpeg",
    category: "Suppen",
    tags: ["Vegetarisch", "Comfort Food", "Winter", "Einfach"],
    prepTime: 15,
    cookingTime: 30,
    servings: 4,
    rating: 4.7,
    reviews: 89,
    createdDate: new Date("2024-01-20"),
    updatedDate: new Date("2024-12-10"),
    seo_title: "Cremige Kartoffelsuppe Rezept | Wie von Oma",
    seo_keywords: ["kartoffelsuppe", "cremige suppe", "omas kartoffelsuppe", "vegetarische suppe", "wintersuppe"],
    introductionParagraph: "Diese cremige Kartoffelsuppe ist pure Gemütlichkeit in einer Schüssel! Mit wenigen Zutaten und in nur 45 Minuten zauberst du eine wärmende Suppe, die an Omas Küche erinnert.",
    additionalParagraph: "Das Geheimnis liegt in der perfekten Konsistenz - teilweise püriert für die Cremigkeit, aber mit kleinen Kartoffelstückchen für den Biss. Ein Klassiker, der nie aus der Mode kommt!",
    images: {
      image1: "/images/Soups/kartoffelsuppe.jpeg",
      image2: "/images/Soups/beste-kartoffelsuppe-rezept.jpeg",
      image3: "/images/Soups/hausgemachte-kartoffelsuppe.jpeg",
      image4: "/images/Soups/omas-kartoffelsuppe-einfach.jpeg",
      image5: "/images/Soups/cremige-kartoffelsuppe-vegetarisch.jpeg",
      image6: "/images/Soups/einfache-kartoffelsuppe-vegetarisch.jpeg",
      image7: "/images/Soups/rezept-kartoffelsuppe-wie-von-oma.jpeg",
      imageIngredient: "/images/Ingredients/kartoffelsuppe-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Mehligkochende Kartoffeln",
        description: "Sorgen für die perfekte cremige Konsistenz beim Pürieren."
      },
      {
        title: "Gemüsebrühe",
        description: "Bildet die aromatische Basis der Suppe."
      },
      {
        title: "Sahne",
        description: "Verleiht der Suppe ihre charakteristische Cremigkeit."
      }
    ],
    ingredients: [
      { amount: 1, unit: "kg", name: "mehligkochende Kartoffeln" },
      { amount: 1, unit: "", name: "große Zwiebel" },
      { amount: 2, unit: "", name: "Karotten" },
      { amount: 2, unit: "", name: "Selleriestangen" },
      { amount: 2, unit: "EL", name: "Butter" },
      { amount: 1.5, unit: "l", name: "Gemüsebrühe" },
      { amount: 200, unit: "ml", name: "Sahne" },
      { amount: 1, unit: "TL", name: "Salz" },
      { amount: 0.5, unit: "TL", name: "weißer Pfeffer" },
      { amount: 1, unit: "TL", name: "Muskatnuss" },
      { amount: "", unit: "", name: "Frische Petersilie zum Garnieren" }
    ],
    instructions: [
      "Kartoffeln schälen und in gleichmäßige Würfel schneiden. Zwiebel, Karotten und Sellerie ebenfalls würfeln.",
      "Butter in einem großen Topf erhitzen. Zwiebeln glasig dünsten, dann Karotten und Sellerie hinzufügen.",
      "Kartoffeln dazugeben und kurz mitdünsten. Mit Gemüsebrühe aufgießen und zum Kochen bringen.",
      "Suppe 20-25 Minuten köcheln lassen, bis die Kartoffeln weich sind.",
      "Etwa die Hälfte der Suppe mit einem Pürierstab pürieren, sodass noch Stückchen bleiben.",
      "Sahne einrühren und mit Salz, Pfeffer und Muskatnuss abschmecken.",
      "Mit frischer Petersilie garnieren und heiß servieren."
    ],
    tips: [
      "Für eine vegane Variante verwende Hafersahne statt Sahne.",
      "Ein Schuss Weißwein beim Dünsten verleiht extra Aroma.",
      "Die Suppe lässt sich gut einfrieren - ohne Sahne zubereiten und diese erst beim Aufwärmen hinzufügen."
    ],
    funFact: {
      title: "Kartoffel-Wissen",
      description: "Kartoffeln enthalten mehr Vitamin C als Äpfel! Eine mittelgroße Kartoffel deckt etwa 45% des täglichen Vitamin-C-Bedarfs ab."
    },
    nutrition: {
      calories: 245,
      protein: "6g",
      carbs: "32g",
      fat: "11g"
    }
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter(recipe => recipe.category === category);
}

export function getRecipesByTag(tag: string): Recipe[] {
  return recipes.filter(recipe => recipe.tags.includes(tag));
}