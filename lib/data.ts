export interface Recipe {
  id: string
  slug: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  prepTime: number
  cookingTime: number
  servings: number
  rating: number
  reviews: number
  createdDate: Date
  updatedDate: Date
  ingredients: Ingredient[]
  instructions: string[]
  nutrition: {
    calories: number
    protein: string
    carbs: string
    fat: string
  }
  seo_title?: string
  seo_keywords?: string[]
  introductionParagraph: string
  additionalParagraph: string
  images: {
    image1: string
    image2: string
    image3: string
    image4: string
    image5: string
    image6: string
    image7: string
    imageIngredient: string
  }
  ingredientsNeeded?: {
    title: string
    description: string
  }[]
  ingredientGroups?: {
    title: string
    description: string
    ingredients: Ingredient[]
  }[]
  tips?: string[]
  funFact: {
    title: string
    description: string
  }
  servingSuggestions?: {
    title: string
    description: string
    items: {
      emoji: string
      title: string
      description: string
    }[]
    note: string
  }
  whyFavorite?: {
    title: string
    reasons: {
      title: string
      description: string
    }[]
  }
  handwrittenMessage?: {
    mainText: string
    subText: string
    signature: string
  }
}

export interface Ingredient {
  amount?: number | string
  unit?: string
  name: string
}

// Sample recipes data
export const recipes: Recipe[] = [
  {
    id: "1",
    slug: "gemuese-curry",
    title: "Cremiges Gemüse-Curry",
    description: "Ein aromatisches und cremiges Gemüse-Curry mit Kokosmilch, perfekt für ein gesundes Abendessen.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1200&auto=format&fit=crop&fm=webp",
    category: "Hauptgerichte",
    tags: ["Vegan", "Glutenfrei", "Indisch", "Schnell"],
    prepTime: 15,
    cookingTime: 25,
    servings: 4,
    rating: 4.8,
    reviews: 127,
    createdDate: new Date("2024-01-15"),
    updatedDate: new Date("2024-12-01"),
    seo_title: "Cremiges Gemüse-Curry Rezept | Vegan & Glutenfrei",
    seo_keywords: ["gemüse curry", "veganes curry", "indisches curry", "kokosmilch curry"],
    introductionParagraph: "Dieses cremige Gemüse-Curry ist ein wahres Geschmackserlebnis! Mit aromatischen Gewürzen und frischem Gemüse zauberst du in nur 40 Minuten ein authentisches indisches Gericht auf den Tisch.",
    additionalParagraph: "Das Geheimnis liegt in der perfekten Gewürzmischung aus Kurkuma, Kreuzkümmel und Garam Masala. Die Kokosmilch verleiht dem Curry seine cremige Konsistenz und mildert die Schärfe ab.",
    images: {
      image1: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=800&auto=format&fit=crop&fm=webp",
      image2: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop&fm=webp",
      image3: "https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?q=80&w=800&auto=format&fit=crop&fm=webp",
      image4: "https://images.unsplash.com/photo-1563379091339-03246963d96a?q=80&w=800&auto=format&fit=crop&fm=webp",
      image5: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1200&auto=format&fit=crop&fm=webp",
      image6: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop&fm=webp",
      image7: "https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?q=80&w=800&auto=format&fit=crop&fm=webp",
      imageIngredient: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop&fm=webp"
    },
    ingredientsNeeded: [
      {
        title: "Kokosmilch",
        description: "Verwende ungesüßte Kokosmilch aus der Dose für die beste Cremigkeit."
      },
      {
        title: "Gewürze",
        description: "Frische Gewürze wie Kurkuma, Kreuzkümmel und Garam Masala sind essentiell."
      },
      {
        title: "Gemüse",
        description: "Saisonales Gemüse wie Blumenkohl, Erbsen und Karotten funktionieren perfekt."
      }
    ],
    ingredients: [
      { amount: 2, unit: "EL", name: "Kokosöl" },
      { amount: 1, unit: "große", name: "Zwiebel, gewürfelt" },
      { amount: 3, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 1, unit: "Stück", name: "Ingwer (2cm), gerieben" },
      { amount: 2, unit: "TL", name: "Kurkuma" },
      { amount: 1, unit: "TL", name: "Kreuzkümmel" },
      { amount: 1, unit: "TL", name: "Garam Masala" },
      { amount: 400, unit: "ml", name: "Kokosmilch" },
      { amount: 400, unit: "g", name: "Blumenkohl, in Röschen" },
      { amount: 2, unit: "große", name: "Karotten, in Scheiben" },
      { amount: 150, unit: "g", name: "Erbsen (TK)" },
      { amount: 1, unit: "Dose", name: "Tomaten, gehackt" },
      { name: "Salz und Pfeffer nach Geschmack" },
      { name: "Frischer Koriander zum Garnieren" }
    ],
    instructions: [
      "Kokosöl in einem großen Topf erhitzen. Zwiebel glasig dünsten, dann Knoblauch und Ingwer hinzufügen.",
      "Gewürze (Kurkuma, Kreuzkümmel, Garam Masala) einrühren und 1 Minute rösten, bis sie duften.",
      "Kokosmilch und gehackte Tomaten hinzufügen. Gut umrühren und zum Kochen bringen.",
      "Blumenkohl und Karotten hinzufügen. 15 Minuten köcheln lassen, bis das Gemüse weich ist.",
      "Erbsen hinzufügen und weitere 5 Minuten kochen. Mit Salz und Pfeffer abschmecken.",
      "Mit frischem Koriander garnieren und mit Basmatireis oder Naan-Brot servieren."
    ],
    nutrition: {
      calories: 285,
      protein: "8g",
      carbs: "18g",
      fat: "22g"
    },
    tips: [
      "Für extra Schärfe eine gehackte Chilischote hinzufügen",
      "Das Curry schmeckt am nächsten Tag noch besser",
      "Kann gut eingefroren werden"
    ],
    funFact: {
      title: "Wusstest du schon?",
      description: "Kurkuma verleiht dem Curry nicht nur seine goldene Farbe, sondern hat auch entzündungshemmende Eigenschaften und wird seit Jahrtausenden in der ayurvedischen Medizin verwendet."
    },
    servingSuggestions: {
      title: "Perfekte Beilagen",
      description: "Dieses Curry harmoniert wunderbar mit verschiedenen Beilagen:",
      items: [
        {
          emoji: "🍚",
          title: "Basmatireis",
          description: "Klassisch und perfekt zum Aufsaugen der cremigen Sauce"
        },
        {
          emoji: "🫓",
          title: "Naan-Brot",
          description: "Frisches Naan-Brot zum Dippen und Genießen"
        },
        {
          emoji: "🥒",
          title: "Gurken-Raita",
          description: "Erfrischender Joghurt-Dip als kühler Kontrast"
        }
      ],
      note: "Experimentiere mit verschiedenen Kombinationen für dein perfektes Curry-Erlebnis!"
    },
    whyFavorite: {
      title: "Warum dieses Curry unser Favorit ist",
      reasons: [
        {
          title: "Schnell & Einfach",
          description: "In nur 40 Minuten steht ein vollwertiges, aromatisches Gericht auf dem Tisch."
        },
        {
          title: "Gesund & Nährstoffreich",
          description: "Vollgepackt mit Vitaminen, Mineralien und gesunden Fetten aus der Kokosmilch."
        },
        {
          title: "Vielseitig",
          description: "Kann mit jedem saisonalen Gemüse zubereitet werden - perfekt zur Resteverwertung."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Ein Curry, das die Seele wärmt!",
      subText: "Perfekt für gemütliche Abende",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: "2",
    slug: "mediterrane-pasta",
    title: "Mediterrane Pasta mit Tomaten",
    description: "Einfache und köstliche Pasta mit frischen Tomaten, Basilikum und Mozzarella - wie ein Urlaub in Italien.",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1200&auto=format&fit=crop&fm=webp",
    category: "Hauptgerichte",
    tags: ["Mediterran", "Schnell", "Pasta", "Käse"],
    prepTime: 10,
    cookingTime: 15,
    servings: 4,
    rating: 4.6,
    reviews: 89,
    createdDate: new Date("2024-02-01"),
    updatedDate: new Date("2024-11-15"),
    seo_title: "Mediterrane Pasta mit Tomaten und Mozzarella | Schnelles Rezept",
    seo_keywords: ["mediterrane pasta", "pasta tomaten", "schnelle pasta", "italienische pasta"],
    introductionParagraph: "Diese mediterrane Pasta bringt den Geschmack Italiens direkt auf deinen Teller. Mit sonnengereiften Tomaten, frischem Basilikum und cremigem Mozzarella ist sie der perfekte Beweis dafür, dass die besten Gerichte oft die einfachsten sind.",
    additionalParagraph: "Das Geheimnis liegt in der Qualität der Zutaten: Verwende die besten Tomaten, die du finden kannst, hochwertiges Olivenöl und frischen Mozzarella. So wird aus einem einfachen Gericht ein kulinarisches Erlebnis.",
    images: {
      image1: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800&auto=format&fit=crop&fm=webp",
      image2: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=800&auto=format&fit=crop&fm=webp",
      image3: "https://images.unsplash.com/photo-1563379091339-03246963d96a?q=80&w=800&auto=format&fit=crop&fm=webp",
      image4: "https://images.unsplash.com/photo-1572441713132-51c75654db73?q=80&w=800&auto=format&fit=crop&fm=webp",
      image5: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1200&auto=format&fit=crop&fm=webp",
      image6: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=800&auto=format&fit=crop&fm=webp",
      image7: "https://images.unsplash.com/photo-1563379091339-03246963d96a?q=80&w=800&auto=format&fit=crop&fm=webp",
      imageIngredient: "https://images.unsplash.com/photo-1572441713132-51c75654db73?q=80&w=1200&auto=format&fit=crop&fm=webp"
    },
    ingredientsNeeded: [
      {
        title: "Pasta",
        description: "Verwende hochwertige Pasta - Penne oder Fusilli funktionieren perfekt."
      },
      {
        title: "Tomaten",
        description: "Frische, reife Tomaten oder hochwertige Dosentomaten für den besten Geschmack."
      },
      {
        title: "Mozzarella",
        description: "Frischer Mozzarella di Bufala für die authentische italienische Note."
      }
    ],
    ingredients: [
      { amount: 400, unit: "g", name: "Pasta (Penne oder Fusilli)" },
      { amount: 500, unit: "g", name: "reife Tomaten, gewürfelt" },
      { amount: 200, unit: "g", name: "Mozzarella, in Stücken" },
      { amount: 3, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 4, unit: "EL", name: "Olivenöl extra vergine" },
      { amount: 1, unit: "Bund", name: "frisches Basilikum" },
      { amount: 50, unit: "g", name: "Parmesan, gerieben" },
      { name: "Salz und schwarzer Pfeffer" },
      { amount: 1, unit: "Prise", name: "Zucker" }
    ],
    instructions: [
      "Pasta in reichlich gesalzenem Wasser nach Packungsanweisung al dente kochen.",
      "Währenddessen Olivenöl in einer großen Pfanne erhitzen. Knoblauch glasig dünsten.",
      "Gewürfelte Tomaten hinzufügen und 5-7 Minuten köcheln lassen. Mit Salz, Pfeffer und einer Prise Zucker würzen.",
      "Gekochte Pasta abgießen und etwas Nudelwasser auffangen.",
      "Pasta zur Tomatensauce geben und gut vermischen. Bei Bedarf etwas Nudelwasser hinzufügen.",
      "Mozzarella-Stücke unterheben und kurz schmelzen lassen. Mit frischem Basilikum und Parmesan servieren."
    ],
    nutrition: {
      calories: 420,
      protein: "18g",
      carbs: "52g",
      fat: "16g"
    },
    tips: [
      "Verwende das Nudelwasser, um die Sauce zu binden",
      "Mozzarella erst am Ende hinzufügen, damit er nicht zäh wird",
      "Frisches Basilikum nie mitkochen - immer erst zum Schluss hinzufügen"
    ],
    funFact: {
      title: "Italienische Tradition",
      description: "In Italien wird Pasta niemals mit einem Löffel gegessen - nur mit der Gabel! Und echte Italiener würden niemals Käse über Meeresfrüchte-Pasta streuen."
    },
    servingSuggestions: {
      title: "Perfekte Ergänzungen",
      description: "Diese Pasta wird noch besser mit:",
      items: [
        {
          emoji: "🥗",
          title: "Rucola-Salat",
          description: "Frischer Rucola mit Balsamico-Dressing als leichte Vorspeise"
        },
        {
          emoji: "🍷",
          title: "Weißwein",
          description: "Ein trockener italienischer Weißwein wie Pinot Grigio"
        },
        {
          emoji: "🥖",
          title: "Ciabatta",
          description: "Warmes Ciabatta-Brot mit Olivenöl und Balsamico"
        }
      ],
      note: "Buon Appetito! Genieße dein italienisches Festmahl."
    },
    whyFavorite: {
      title: "Warum wir diese Pasta lieben",
      reasons: [
        {
          title: "Authentisch Italienisch",
          description: "Einfache, hochwertige Zutaten - so wie in Italien seit Generationen gekocht wird."
        },
        {
          title: "Blitzschnell",
          description: "In nur 25 Minuten steht ein vollwertiges, köstliches Gericht auf dem Tisch."
        },
        {
          title: "Immer ein Erfolg",
          description: "Dieses Rezept gelingt immer und begeistert jeden - von Kindern bis zu Feinschmeckern."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Amore auf dem Teller!",
      subText: "Wie ein kleiner Urlaub in Italien",
      signature: "♥ Ciao Bella"
    }
  },
  {
    id: "3",
    slug: "quinoa-buddha-bowl",
    title: "Quinoa Buddha Bowl",
    description: "Eine nährstoffreiche Buddha Bowl mit Quinoa, geröstetem Gemüse und Tahini-Dressing - gesund und sättigend.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop&fm=webp",
    category: "Hauptgerichte",
    tags: ["Gesund", "Vegan", "Glutenfrei", "Bowl", "Proteinreich"],
    prepTime: 20,
    cookingTime: 30,
    servings: 2,
    rating: 4.9,
    reviews: 156,
    createdDate: new Date("2024-03-10"),
    updatedDate: new Date("2024-12-05"),
    seo_title: "Quinoa Buddha Bowl | Gesunde Bowl mit Tahini-Dressing",
    seo_keywords: ["quinoa bowl", "buddha bowl", "gesunde bowl", "tahini dressing"],
    introductionParagraph: "Diese Quinoa Buddha Bowl ist ein wahres Nährstoff-Powerhouse! Vollgepackt mit pflanzlichem Protein, gesunden Fetten und einer Vielzahl an Vitaminen und Mineralien ist sie das perfekte Gericht für alle, die sich bewusst ernähren möchten.",
    additionalParagraph: "Das cremige Tahini-Dressing verbindet alle Komponenten zu einem harmonischen Geschmackserlebnis. Quinoa liefert alle essentiellen Aminosäuren und macht diese Bowl zu einer vollwertigen Proteinquelle.",
    images: {
      image1: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop&fm=webp",
      image2: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image3: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image4: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop&fm=webp",
      image5: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop&fm=webp",
      image6: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image7: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop&fm=webp",
      imageIngredient: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop&fm=webp"
    },
    ingredientsNeeded: [
      {
        title: "Quinoa",
        description: "Verwende weißen oder roten Quinoa - beide sind reich an Protein und Ballaststoffen."
      },
      {
        title: "Saisonales Gemüse",
        description: "Süßkartoffeln, Brokkoli und Paprika rösten perfekt im Ofen."
      },
      {
        title: "Tahini",
        description: "Sesampaste für das cremige Dressing - reich an gesunden Fetten."
      }
    ],
    ingredients: [
      { amount: 150, unit: "g", name: "Quinoa" },
      { amount: 1, unit: "große", name: "Süßkartoffel, gewürfelt" },
      { amount: 200, unit: "g", name: "Brokkoli-Röschen" },
      { amount: 1, unit: "", name: "rote Paprika, in Streifen" },
      { amount: 100, unit: "g", name: "Kichererbsen (Dose)" },
      { amount: 2, unit: "Handvoll", name: "Baby-Spinat" },
      { amount: 1, unit: "", name: "Avocado, in Scheiben" },
      { amount: 2, unit: "EL", name: "Kürbiskerne" },
      { amount: 3, unit: "EL", name: "Olivenöl" },
      { name: "Salz und Pfeffer" }
    ],
    instructions: [
      "Ofen auf 200°C vorheizen. Quinoa nach Packungsanweisung kochen.",
      "Süßkartoffel, Brokkoli und Paprika mit 2 EL Olivenöl, Salz und Pfeffer würzen. 25 Minuten rösten.",
      "Kichererbsen abspülen und abtropfen lassen.",
      "Für das Tahini-Dressing: 3 EL Tahini, 2 EL Zitronensaft, 1 EL Olivenöl, 1 TL Ahornsirup und Wasser verrühren.",
      "Quinoa in Bowls verteilen. Geröstetes Gemüse, Kichererbsen, Spinat und Avocado arrangieren.",
      "Mit Tahini-Dressing beträufeln und mit Kürbiskernen bestreuen."
    ],
    nutrition: {
      calories: 485,
      protein: "16g",
      carbs: "58g",
      fat: "22g"
    },
    tips: [
      "Quinoa vor dem Kochen gründlich spülen, um Bitterstoffe zu entfernen",
      "Gemüse kann am Vortag geröstet und kalt verwendet werden",
      "Bowl lässt sich gut für Meal Prep vorbereiten"
    ],
    funFact: {
      title: "Superfood Quinoa",
      description: "Quinoa wurde bereits von den Inkas als 'Mutter aller Körner' verehrt. Es ist botanisch gesehen gar kein Getreide, sondern ein Pseudogetreide und gehört zur Familie der Gänsefußgewächse."
    },
    servingSuggestions: {
      title: "Bowl-Variationen",
      description: "Mache deine Bowl noch abwechslungsreicher:",
      items: [
        {
          emoji: "🥜",
          title: "Nüsse & Samen",
          description: "Mandeln, Walnüsse oder Sonnenblumenkerne für extra Crunch"
        },
        {
          emoji: "🌿",
          title: "Frische Kräuter",
          description: "Petersilie, Koriander oder Minze für Frische"
        },
        {
          emoji: "🍋",
          title: "Zitrusfrüchte",
          description: "Orangenscheiben oder Granatapfelkerne für Süße und Säure"
        }
      ],
      note: "Experimentiere mit saisonalen Zutaten für immer neue Geschmackserlebnisse!"
    },
    whyFavorite: {
      title: "Warum diese Bowl so besonders ist",
      reasons: [
        {
          title: "Nährstoff-Powerhouse",
          description: "Vollgepackt mit Vitaminen, Mineralien, Protein und gesunden Fetten."
        },
        {
          title: "Sättigend & Energiespendend",
          description: "Hält lange satt und versorgt den Körper mit nachhaltiger Energie."
        },
        {
          title: "Unendlich variierbar",
          description: "Kann je nach Saison und Vorlieben immer wieder neu interpretiert werden."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Gesundheit war nie so lecker!",
      subText: "Dein Körper wird es dir danken",
      signature: "♥ Healthy Vibes"
    }
  },
  {
    id: "4",
    slug: "cremige-tomatensuppe",
    title: "Cremige Tomatensuppe",
    description: "Eine klassische, cremige Tomatensuppe mit frischen Kräutern - Comfort Food vom Feinsten.",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1200&auto=format&fit=crop&fm=webp",
    category: "Suppen",
    tags: ["Klassisch", "Cremig", "Comfort Food", "Schnell"],
    prepTime: 10,
    cookingTime: 25,
    servings: 4,
    rating: 4.7,
    reviews: 203,
    createdDate: new Date("2024-01-20"),
    updatedDate: new Date("2024-11-20"),
    seo_title: "Cremige Tomatensuppe Rezept | Klassisch & Einfach",
    seo_keywords: ["tomatensuppe", "cremige suppe", "klassische tomatensuppe", "comfort food"],
    introductionParagraph: "Diese cremige Tomatensuppe ist pure Nostalgie im Löffel! Mit sonnengereiften Tomaten, frischen Kräutern und einem Hauch Sahne wird sie zum ultimativen Comfort Food für kalte Tage.",
    additionalParagraph: "Das Geheimnis einer perfekten Tomatensuppe liegt in der Balance zwischen Süße und Säure. Ein Schuss Balsamico und eine Prise Zucker bringen die Aromen perfekt zur Geltung.",
    images: {
      image1: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=800&auto=format&fit=crop&fm=webp",
      image2: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image3: "https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?q=80&w=800&auto=format&fit=crop&fm=webp",
      image4: "https://images.unsplash.com/photo-1563379091339-03246963d96a?q=80&w=800&auto=format&fit=crop&fm=webp",
      image5: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1200&auto=format&fit=crop&fm=webp",
      image6: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image7: "https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?q=80&w=800&auto=format&fit=crop&fm=webp",
      imageIngredient: "https://images.unsplash.com/photo-1563379091339-03246963d96a?q=80&w=1200&auto=format&fit=crop&fm=webp"
    },
    ingredientsNeeded: [
      {
        title: "Tomaten",
        description: "Verwende hochwertige Dosentomaten oder frische, reife Tomaten für den besten Geschmack."
      },
      {
        title: "Sahne",
        description: "Ein Schuss Sahne macht die Suppe cremig und mildert die Säure ab."
      },
      {
        title: "Frische Kräuter",
        description: "Basilikum und Oregano verleihen der Suppe ihr charakteristisches Aroma."
      }
    ],
    ingredients: [
      { amount: 800, unit: "g", name: "Tomaten (Dose, gehackt)" },
      { amount: 1, unit: "große", name: "Zwiebel, gewürfelt" },
      { amount: 2, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 500, unit: "ml", name: "Gemüsebrühe" },
      { amount: 100, unit: "ml", name: "Sahne" },
      { amount: 2, unit: "EL", name: "Olivenöl" },
      { amount: 1, unit: "TL", name: "Zucker" },
      { amount: 1, unit: "EL", name: "Balsamico-Essig" },
      { amount: 1, unit: "TL", name: "getrockneter Oregano" },
      { amount: 1, unit: "Bund", name: "frisches Basilikum" },
      { name: "Salz und Pfeffer nach Geschmack" }
    ],
    instructions: [
      "Olivenöl in einem großen Topf erhitzen. Zwiebel glasig dünsten, Knoblauch hinzufügen.",
      "Tomaten, Gemüsebrühe, Zucker und Oregano hinzufügen. 15 Minuten köcheln lassen.",
      "Suppe mit einem Pürierstab fein pürieren oder durch ein Sieb passieren.",
      "Sahne einrühren und mit Balsamico, Salz und Pfeffer abschmecken.",
      "Kurz aufkochen lassen und vom Herd nehmen.",
      "Mit frischem Basilikum garnieren und heiß servieren."
    ],
    nutrition: {
      calories: 145,
      protein: "4g",
      carbs: "12g",
      fat: "9g"
    },
    tips: [
      "Für extra Geschmack die Tomaten vorher anrösten",
      "Ein Schuss Weißwein verleiht zusätzliche Tiefe",
      "Kann gut eingefroren werden - ohne Sahne"
    ],
    funFact: {
      title: "Tomatensuppen-Geschichte",
      description: "Die erste Tomatensuppe wurde 1897 von Campbell's in Dosen abgefüllt. Davor galten Tomaten in Europa lange als giftig, da reiche Leute nach dem Verzehr erkrankten - der Grund war das Blei in ihren Zinntellern!"
    },
    servingSuggestions: {
      title: "Perfekte Begleiter",
      description: "Diese Suppe wird noch besser mit:",
      items: [
        {
          emoji: "🥪",
          title: "Grilled Cheese",
          description: "Klassisches Käse-Sandwich, goldbraun getoastet"
        },
        {
          emoji: "🥖",
          title: "Knuspriges Baguette",
          description: "Frisches Baguette mit Kräuterbutter"
        },
        {
          emoji: "🧀",
          title: "Parmesan",
          description: "Frisch geriebener Parmesan als Topping"
        }
      ],
      note: "Ein Klassiker, der nie aus der Mode kommt!"
    },
    whyFavorite: {
      title: "Warum wir diese Suppe lieben",
      reasons: [
        {
          title: "Pure Nostalgie",
          description: "Erinnert an Kindheitstage und wärmt Herz und Seele."
        },
        {
          title: "Einfach & Schnell",
          description: "Mit wenigen Zutaten in kurzer Zeit zubereitet."
        },
        {
          title: "Vielseitig",
          description: "Perfekt als Vorspeise, leichtes Abendessen oder Comfort Food."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Wie eine warme Umarmung!",
      subText: "Comfort Food at its best",
      signature: "♥ Soup Love"
    }
  },
  {
    id: "5",
    slug: "griechischer-salat",
    title: "Griechischer Bauernsalat",
    description: "Authentischer griechischer Salat mit Feta, Oliven und frischem Gemüse - ein Stück Griechenland auf dem Teller.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop&fm=webp",
    category: "Salate",
    tags: ["Mediterran", "Frisch", "Gesund", "Schnell", "Glutenfrei"],
    prepTime: 15,
    cookingTime: 0,
    servings: 4,
    rating: 4.8,
    reviews: 142,
    createdDate: new Date("2024-02-15"),
    updatedDate: new Date("2024-11-25"),
    seo_title: "Griechischer Bauernsalat Rezept | Authentisch & Frisch",
    seo_keywords: ["griechischer salat", "bauernsalat", "feta salat", "mediterraner salat"],
    introductionParagraph: "Dieser authentische griechische Bauernsalat bringt den Geschmack des Mittelmeers direkt auf deinen Tisch. Mit sonnengereiften Tomaten, knackigen Gurken, würzigem Feta und aromatischen Oliven ist er der perfekte Sommersalat.",
    additionalParagraph: "Das Geheimnis liegt im hochwertigen Olivenöl und dem echten griechischen Feta. In Griechenland wird dieser Salat übrigens 'Horiatiki' genannt und traditionell ohne Blattsalat serviert.",
    images: {
      image1: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image2: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image3: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop&fm=webp",
      image4: "https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?q=80&w=800&auto=format&fit=crop&fm=webp",
      image5: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop&fm=webp",
      image6: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image7: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop&fm=webp",
      imageIngredient: "https://images.unsplash.com/photo-1574653853027-5d3ac9b9a6e7?q=80&w=1200&auto=format&fit=crop&fm=webp"
    },
    ingredientsNeeded: [
      {
        title: "Feta-Käse",
        description: "Verwende echten griechischen Feta aus Schafs- oder Ziegenmilch für den authentischen Geschmack."
      },
      {
        title: "Oliven",
        description: "Kalamata-Oliven sind die traditionelle Wahl für griechischen Salat."
      },
      {
        title: "Olivenöl",
        description: "Hochwertiges extra natives Olivenöl macht den Unterschied."
      }
    ],
    ingredients: [
      { amount: 4, unit: "große", name: "Tomaten, in Spalten" },
      { amount: 1, unit: "große", name: "Gurke, in Scheiben" },
      { amount: 1, unit: "große", name: "rote Zwiebel, in Ringen" },
      { amount: 1, unit: "", name: "grüne Paprika, in Streifen" },
      { amount: 200, unit: "g", name: "Feta-Käse, in Würfeln" },
      { amount: 100, unit: "g", name: "Kalamata-Oliven" },
      { amount: 4, unit: "EL", name: "Olivenöl extra vergine" },
      { amount: 2, unit: "EL", name: "Rotweinessig" },
      { amount: 1, unit: "TL", name: "getrockneter Oregano" },
      { name: "Salz und schwarzer Pfeffer" },
      { amount: 1, unit: "Bund", name: "frische Petersilie" }
    ],
    instructions: [
      "Tomaten in Spalten, Gurke in dicke Scheiben und Paprika in Streifen schneiden.",
      "Zwiebel in dünne Ringe schneiden und kurz in kaltem Wasser einlegen (mildert die Schärfe).",
      "Gemüse in einer großen Schüssel mischen. Feta-Würfel und Oliven hinzufügen.",
      "Für das Dressing: Olivenöl, Rotweinessig und Oregano verrühren. Mit Salz und Pfeffer würzen.",
      "Dressing über den Salat geben und vorsichtig mischen.",
      "10 Minuten ziehen lassen und mit frischer Petersilie garnieren."
    ],
    nutrition: {
      calories: 220,
      protein: "8g",
      carbs: "12g",
      fat: "17g"
    },
    tips: [
      "Salat erst kurz vor dem Servieren salzen, damit er nicht wässrig wird",
      "Feta nicht zu stark mischen, damit er nicht zerbricht",
      "Schmeckt am besten bei Zimmertemperatur"
    ],
    funFact: {
      title: "Griechische Tradition",
      description: "In Griechenland wird Horiatiki traditionell als Hauptgericht gegessen, oft begleitet von frischem Brot und einem Glas Ouzo. Der Feta wird dabei meist als ganzer Block auf den Salat gelegt."
    },
    servingSuggestions: {
      title: "Griechische Begleiter",
      description: "Vervollständige dein griechisches Mahl:",
      items: [
        {
          emoji: "🥖",
          title: "Pita-Brot",
          description: "Warmes Pita-Brot zum Dippen und Sattwerden"
        },
        {
          emoji: "🫒",
          title: "Tzatziki",
          description: "Cremiger Joghurt-Dip mit Gurke und Knoblauch"
        },
        {
          emoji: "🍷",
          title: "Weißwein",
          description: "Ein trockener griechischer Weißwein wie Assyrtiko"
        }
      ],
      note: "Yamas! Auf die griechische Art genießen."
    },
    whyFavorite: {
      title: "Warum dieser Salat so besonders ist",
      reasons: [
        {
          title: "Authentisch Griechisch",
          description: "Original-Rezept, wie es seit Generationen in Griechenland zubereitet wird."
        },
        {
          title: "Gesund & Nährstoffreich",
          description: "Vollgepackt mit Vitaminen, gesunden Fetten und Antioxidantien."
        },
        {
          title: "Perfekt für Sommer",
          description: "Erfrischend, leicht und ohne Kochen - ideal für heiße Tage."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Wie Urlaub in Griechenland!",
      subText: "Opa! Mediterrane Freude pur",
      signature: "♥ Kalimera"
    }
  },
  {
    id: "6",
    slug: "overnight-oats",
    title: "Beeren Overnight Oats",
    description: "Gesunde Overnight Oats mit frischen Beeren und Nüssen - das perfekte Frühstück zum Vorbereiten.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1200&auto=format&fit=crop&fm=webp",
    category: "Frühstück",
    tags: ["Gesund", "Vegan", "Meal Prep", "Schnell", "Glutenfrei"],
    prepTime: 10,
    cookingTime: 0,
    servings: 2,
    rating: 4.9,
    reviews: 234,
    createdDate: new Date("2024-03-01"),
    updatedDate: new Date("2024-12-10"),
    seo_title: "Beeren Overnight Oats Rezept | Gesundes Frühstück",
    seo_keywords: ["overnight oats", "gesundes frühstück", "meal prep", "beeren frühstück"],
    introductionParagraph: "Diese Beeren Overnight Oats sind die perfekte Lösung für alle, die morgens wenig Zeit haben, aber trotzdem gesund frühstücken möchten. Einfach am Vorabend vorbereiten und am nächsten Morgen genießen!",
    additionalParagraph: "Haferflocken quellen über Nacht in der Flüssigkeit auf und werden dabei cremig und bekömmlich. Die Beeren liefern Vitamine und Antioxidantien, während Nüsse für gesunde Fette und Protein sorgen.",
    images: {
      image1: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=800&auto=format&fit=crop&fm=webp",
      image2: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop&fm=webp",
      image3: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop&fm=webp",
      image4: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop&fm=webp",
      image5: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1200&auto=format&fit=crop&fm=webp",
      image6: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop&fm=webp",
      image7: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop&fm=webp",
      imageIngredient: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop&fm=webp"
    },
    ingredientsNeeded: [
      {
        title: "Haferflocken",
        description: "Verwende kernige Haferflocken für die beste Textur und Nährstoffe."
      },
      {
        title: "Pflanzenmilch",
        description: "Mandel-, Hafer- oder Sojamilch - je nach Geschmack und Verträglichkeit."
      },
      {
        title: "Frische Beeren",
        description: "Blaubeeren, Himbeeren oder Erdbeeren - reich an Antioxidantien."
      }
    ],
    ingredients: [
      { amount: 100, unit: "g", name: "kernige Haferflocken" },
      { amount: 200, unit: "ml", name: "Mandelmilch (ungesüßt)" },
      { amount: 2, unit: "EL", name: "Chiasamen" },
      { amount: 1, unit: "EL", name: "Ahornsirup" },
      { amount: 1, unit: "TL", name: "Vanilleextrakt" },
      { amount: 150, unit: "g", name: "gemischte Beeren" },
      { amount: 2, unit: "EL", name: "gehackte Mandeln" },
      { amount: 2, unit: "EL", name: "Kokosflocken" },
      { amount: 1, unit: "Prise", name: "Zimt" },
      { name: "Frische Minze zum Garnieren" }
    ],
    instructions: [
      "Haferflocken, Mandelmilch, Chiasamen, Ahornsirup und Vanille in einer Schüssel verrühren.",
      "Die Hälfte der Beeren untermischen. Mit Zimt würzen.",
      "Mischung auf zwei Gläser oder Schüsseln verteilen.",
      "Über Nacht (mindestens 4 Stunden) im Kühlschrank quellen lassen.",
      "Am nächsten Morgen umrühren und mit restlichen Beeren toppen.",
      "Mit Mandeln, Kokosflocken und Minze garnieren."
    ],
    nutrition: {
      calories: 285,
      protein: "8g",
      carbs: "45g",
      fat: "9g"
    },
    tips: [
      "Können bis zu 3 Tage im Kühlschrank aufbewahrt werden",
      "Toppings erst kurz vor dem Verzehr hinzufügen",
      "Für mehr Protein einen Löffel Proteinpulver einrühren"
    ],
    funFact: {
      title: "Haferflocken-Power",
      description: "Haferflocken enthalten Beta-Glucan, einen löslichen Ballaststoff, der den Cholesterinspiegel senken und das Immunsystem stärken kann. Außerdem halten sie lange satt und stabilisieren den Blutzuckerspiegel."
    },
    servingSuggestions: {
      title: "Topping-Variationen",
      description: "Mache deine Overnight Oats noch abwechslungsreicher:",
      items: [
        {
          emoji: "🥜",
          title: "Nuss-Mix",
          description: "Walnüsse, Pekannüsse oder Haselnüsse für extra Crunch"
        },
        {
          emoji: "🍌",
          title: "Frucht-Power",
          description: "Banane, Apfel oder Mango für natürliche Süße"
        },
        {
          emoji: "🍫",
          title: "Schoko-Traum",
          description: "Kakao-Nibs oder dunkle Schokolade für Genuss"
        }
      ],
      note: "Experimentiere mit verschiedenen Kombinationen für dein perfektes Frühstück!"
    },
    whyFavorite: {
      title: "Warum wir Overnight Oats lieben",
      reasons: [
        {
          title: "Zeitsparend",
          description: "Einmal vorbereitet, hast du mehrere Tage ein gesundes Frühstück ready."
        },
        {
          title: "Nährstoffreich",
          description: "Vollgepackt mit Ballaststoffen, Protein und gesunden Fetten."
        },
        {
          title: "Endlos variierbar",
          description: "Kann je nach Saison und Geschmack immer wieder neu interpretiert werden."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Der beste Start in den Tag!",
      subText: "Gesund war nie so einfach",
      signature: "♥ Good Morning"
    }
  },
  {
    id: "7",
    slug: "schokoladen-mousse",
    title: "Vegane Schokoladen-Mousse",
    description: "Cremige vegane Schokoladen-Mousse mit Avocado - unglaublich lecker und gesund zugleich.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop&fm=webp",
    category: "Desserts",
    tags: ["Vegan", "Schokolade", "Gesund", "Schnell", "Glutenfrei"],
    prepTime: 15,
    cookingTime: 0,
    servings: 4,
    rating: 4.6,
    reviews: 178,
    createdDate: new Date("2024-02-20"),
    updatedDate: new Date("2024-11-30"),
    seo_title: "Vegane Schokoladen-Mousse mit Avocado | Gesundes Dessert",
    seo_keywords: ["vegane mousse", "schokoladen mousse", "avocado dessert", "gesundes dessert"],
    introductionParagraph: "Diese vegane Schokoladen-Mousse ist ein wahres Wunder! Niemand wird erraten, dass das Geheimnis cremiger Avocados sind. Sie ist nicht nur unglaublich lecker, sondern auch voller gesunder Fette und Nährstoffe.",
    additionalParagraph: "Avocados verleihen der Mousse ihre samtweiche Textur, während hochwertiger Kakao für den intensiven Schokoladengeschmack sorgt. Ein Dessert, bei dem du ohne schlechtes Gewissen zugreifen kannst!",
    images: {
      image1: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop&fm=webp",
      image2: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop&fm=webp",
      image3: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=800&auto=format&fit=crop&fm=webp",
      image4: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop&fm=webp",
      image5: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop&fm=webp",
      image6: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop&fm=webp",
      image7: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?q=80&w=800&auto=format&fit=crop&fm=webp",
      imageIngredient: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop&fm=webp"
    },
    ingredientsNeeded: [
      {
        title: "Reife Avocados",
        description: "Verwende sehr reife Avocados für die cremigste Textur und mildesten Geschmack."
      },
      {
        title: "Hochwertiger Kakao",
        description: "Ungesüßtes Kakaopulver in Bio-Qualität für den besten Schokoladengeschmack."
      },
      {
        title: "Natürliche Süße",
        description: "Ahornsirup oder Datteln für eine gesunde Süße ohne raffinierten Zucker."
      }
    ],
    ingredients: [
      { amount: 2, unit: "große", name: "reife Avocados" },
      { amount: 4, unit: "EL", name: "ungesüßtes Kakaopulver" },
      { amount: 3, unit: "EL", name: "Ahornsirup" },
      { amount: 2, unit: "EL", name: "Mandelmilch" },
      { amount: 1, unit: "TL", name: "Vanilleextrakt" },
      { amount: 1, unit: "Prise", name: "Meersalz" },
      { amount: 50, unit: "g", name: "dunkle Schokolade, geschmolzen" },
      { name: "Frische Beeren zum Garnieren" },
      { name: "Gehackte Nüsse zum Topping" },
      { name: "Minzblätter zur Dekoration" }
    ],
    instructions: [
      "Avocados halbieren, entkernen und das Fruchtfleisch herauslöffeln.",
      "Alle Zutaten (außer Toppings) in einen Mixer oder Food Processor geben.",
      "So lange mixen, bis eine völlig glatte, cremige Masse entsteht (ca. 2-3 Minuten).",
      "Mousse abschmecken und bei Bedarf mehr Süße oder Kakao hinzufügen.",
      "In Gläser oder Schüsseln füllen und mindestens 2 Stunden kühlen.",
      "Mit Beeren, Nüssen und Minze garnieren und servieren."
    ],
    nutrition: {
      calories: 195,
      protein: "4g",
      carbs: "18g",
      fat: "14g"
    },
    tips: [
      "Avocados müssen wirklich reif sein, sonst wird die Mousse nicht cremig",
      "Kann bis zu 3 Tage im Kühlschrank aufbewahrt werden",
      "Für extra Schokoladengeschmack etwas Espresso hinzufügen"
    ],
    funFact: {
      title: "Avocado-Magie",
      description: "Avocados enthalten über 20 Vitamine und Mineralien, darunter Vitamin K, Folsäure und Kalium. Ihre cremige Textur macht sie zum perfekten Ersatz für Butter oder Sahne in Desserts!"
    },
    servingSuggestions: {
      title: "Kreative Toppings",
      description: "Mache deine Mousse noch spezieller:",
      items: [
        {
          emoji: "🍓",
          title: "Beeren-Mix",
          description: "Frische Erdbeeren, Himbeeren oder Blaubeeren"
        },
        {
          emoji: "🥥",
          title: "Kokos-Crunch",
          description: "Geröstete Kokosflocken für extra Textur"
        },
        {
          emoji: "🍫",
          title: "Schoko-Extras",
          description: "Kakao-Nibs oder dunkle Schokoladensplitter"
        }
      ],
      note: "Lass deiner Kreativität freien Lauf!"
    },
    whyFavorite: {
      title: "Warum diese Mousse so besonders ist",
      reasons: [
        {
          title: "Gesund & Lecker",
          description: "Voller gesunder Fette und ohne schlechtes Gewissen zu genießen."
        },
        {
          title: "Überraschend Einfach",
          description: "In nur 15 Minuten zubereitet - ohne Backen oder komplizierte Techniken."
        },
        {
          title: "Niemand errät das Geheimnis",
          description: "Selbst Avocado-Skeptiker sind begeistert von dieser cremigen Köstlichkeit."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Schokolade kann so gesund sein!",
      subText: "Das Geheimnis bleibt unter uns",
      signature: "♥ Sweet Dreams"
    }
  }
]

// Helper function to get recipe by slug
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug)
}

// Helper function to get recipes by category
export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter(recipe => recipe.category === category)
}

// Helper function to get recipes by tag
export function getRecipesByTag(tag: string): Recipe[] {
  return recipes.filter(recipe => recipe.tags.includes(tag))
}