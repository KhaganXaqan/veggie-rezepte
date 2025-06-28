export interface Recipe {
  id: number;
  slug: string;
  title: string;
  description?: string;
  image: string;
  category: string;
  tags?: string[];
  prepTime?: number;
  cookingTime?: number;
  servings?: number;
  rating?: number;
  reviews?: number;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tips?: string[];
  seo_title?: string;
  seo_keywords?: string[];
  createdDate?: Date;
  updatedDate?: Date;
  videoUrl?: string;
  introductionParagraph?: string;
  additionalParagraph?: string;
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
  ingredientsNeeded?: {
    title: string;
    description: string;
  }[];
  ingredientGroups?: {
    title: string;
    description: string;
    ingredients: Ingredient[];
  }[];
  funFact: {
    title: string;
    description: string;
  };
  servingSuggestions?: {
    title: string;
    description: string;
    items: {
      emoji: string;
      title: string;
      description: string;
    }[];
    note: string;
  };
  whyFavorite?: {
    title: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
  handwrittenMessage?: {
    mainText: string;
    subText: string;
    signature: string;
  };
}

export interface Ingredient {
  amount?: number | string;
  unit?: string;
  name: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    slug: "cremiger-kaesekuchen-mit-sommerbeeren",
    title: "Cremiger Käsekuchen mit Sommerbeeren",
    description: "Ein unwiderstehlich cremiger Käsekuchen mit frischen Sommerbeeren - perfekt für besondere Anlässe und Sommerfeste.",
    image: "/images/Desserts/cremiger-kaesekuchen-mit-sommerbeeren.jpeg",
    category: "Desserts",
    tags: ["Backen", "Sommer", "Beeren", "Käsekuchen", "Cremig"],
    prepTime: 30,
    cookingTime: 60,
    servings: 12,
    rating: 4.8,
    reviews: 127,
    ingredients: [
      { amount: 200, unit: "g", name: "Butterkekse" },
      { amount: 80, unit: "g", name: "Butter, geschmolzen" },
      { amount: 500, unit: "g", name: "Frischkäse" },
      { amount: 200, unit: "g", name: "Zucker" },
      { amount: 3, unit: "Stück", name: "Eier" },
      { amount: 250, unit: "ml", name: "Sahne" },
      { amount: 1, unit: "TL", name: "Vanilleextrakt" },
      { amount: 300, unit: "g", name: "Gemischte Beeren" }
    ],
    instructions: [
      "Butterkekse fein zerbröseln und mit geschmolzener Butter vermischen. In eine Springform drücken und kalt stellen.",
      "Frischkäse, Zucker, Eier, Sahne und Vanilleextrakt zu einer glatten Masse verrühren.",
      "Die Käsemasse auf den Keksboden geben und bei 160°C für 50-60 Minuten backen.",
      "Kuchen vollständig abkühlen lassen und mit frischen Beeren garnieren."
    ],
    nutrition: {
      calories: 385,
      protein: "8g",
      carbs: "32g",
      fat: "26g"
    },
    tips: [
      "Alle Zutaten sollten Zimmertemperatur haben für eine glatte Masse",
      "Den Kuchen über Nacht im Kühlschrank ziehen lassen für beste Konsistenz"
    ],
    seo_title: "Cremiger Käsekuchen mit Sommerbeeren - Einfaches Rezept",
    seo_keywords: ["Käsekuchen", "Sommerbeeren", "Dessert", "Backen", "Cremig", "Cheesecake"],
    createdDate: new Date('2024-01-15'),
    updatedDate: new Date('2024-01-20'),
    introductionParagraph: "Dieser cremige Käsekuchen mit frischen Sommerbeeren ist der perfekte Abschluss für jedes Dinner oder die ideale Überraschung für Kaffeebesuch. Die Kombination aus samtiger Käsecreme und fruchtigen Beeren macht jeden Bissen zu einem wahren Genuss.",
    additionalParagraph: "Was diesen Käsekuchen so besonders macht, ist seine unglaublich cremige Textur und der frische Geschmack der Sommerbeeren. Der knusprige Keksboden bildet den perfekten Kontrast zur zarten Füllung.",
    images: {
      image1: "/images/Desserts/kaesekuchen-mit-beeren-rezept-cremig.jpeg",
      image2: "/images/Desserts/cremiger-kaesekuchen-mit-sommerbeeren.jpeg",
      image3: "/images/Desserts/sommerlicher-kaesekuchen-mit-beeren.jpeg",
      image4: "/images/Desserts/beeren-kaesekuchen-saisonal.jpeg",
      image5: "/images/Desserts/rezept-kaesekuchen-mit-beeren.jpeg",
      image6: "/images/Desserts/schneller-kaesekuchen-mit-beeren-einfach.jpeg",
      image7: "/images/Desserts/cremiger-kaesekuchen-mit-sommerbeeren.jpeg",
      imageIngredient: "/images/Ingredients/cremiger-kaesekuchen-mit-sommerbeeren-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Frischkäse",
        description: "Verwende hochwertigen Frischkäse mit mindestens 40% Fett für die beste Cremigkeit."
      },
      {
        title: "Sommerbeeren",
        description: "Frische oder tiefgekühlte Beeren funktionieren beide - Erdbeeren, Himbeeren und Blaubeeren sind ideal."
      }
    ],
    funFact: {
      title: "Wusstest du schon?",
      description: "Der moderne Käsekuchen, wie wir ihn heute kennen, wurde im 18. Jahrhundert in New York erfunden, obwohl ähnliche Desserts bereits im antiken Griechenland bekannt waren."
    },
    servingSuggestions: {
      title: "Perfekte Begleiter",
      description: "Dieser Käsekuchen schmeckt am besten mit:",
      items: [
        {
          emoji: "☕",
          title: "Kaffee",
          description: "Ein starker Espresso oder Cappuccino ergänzt die Süße perfekt."
        },
        {
          emoji: "🍃",
          title: "Minze",
          description: "Frische Minzblätter als Garnitur verleihen eine erfrischende Note."
        }
      ],
      note: "Am besten schmeckt der Kuchen, wenn er mindestens 4 Stunden gekühlt wurde."
    },
    whyFavorite: {
      title: "Warum wir dieses Rezept lieben",
      reasons: [
        {
          title: "Unglaublich cremig",
          description: "Die perfekte Balance aus Frischkäse und Sahne sorgt für eine traumhafte Textur."
        },
        {
          title: "Saisonal flexibel",
          description: "Funktioniert mit allen Beeren der Saison - immer wieder neu und lecker."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Ein Stück Himmel auf dem Teller!",
      subText: "Perfekt für besondere Momente",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 2,
    slug: "falafel-selber-machen",
    title: "Falafel selber machen",
    description: "Knusprige, selbstgemachte Falafel aus Kichererbsen - authentisch orientalisch und unglaublich lecker. Perfekt als Hauptgericht oder Beilage.",
    image: "/images/MainCourses/falafel-selber-machen.jpeg",
    category: "Hauptgerichte",
    tags: ["Orientalisch", "Kichererbsen", "Vegan", "Proteinreich", "Frittiert"],
    prepTime: 20,
    cookingTime: 15,
    servings: 4,
    rating: 4.7,
    reviews: 89,
    ingredients: [
      { amount: 400, unit: "g", name: "Kichererbsen, getrocknet" },
      { amount: 1, unit: "Stück", name: "Zwiebel, gehackt" },
      { amount: 3, unit: "Zehen", name: "Knoblauch" },
      { amount: 0.5, unit: "Bund", name: "Petersilie" },
      { amount: 0.5, unit: "Bund", name: "Koriander" },
      { amount: 1, unit: "TL", name: "Kreuzkümmel" },
      { amount: 1, unit: "TL", name: "Koriandersamen" },
      { amount: 0.5, unit: "TL", name: "Cayennepfeffer" },
      { amount: 1, unit: "TL", name: "Salz" },
      { amount: 2, unit: "EL", name: "Mehl" },
      { amount: "", unit: "", name: "Öl zum Frittieren" }
    ],
    instructions: [
      "Kichererbsen über Nacht in kaltem Wasser einweichen. Am nächsten Tag abgießen und gut abtropfen lassen.",
      "Kichererbsen mit Zwiebel, Knoblauch, Kräutern und Gewürzen in der Küchenmaschine grob hacken - nicht zu fein!",
      "Mehl unterkneten und die Masse 30 Minuten im Kühlschrank ruhen lassen.",
      "Mit feuchten Händen kleine Bällchen formen und in heißem Öl (170°C) goldbraun frittieren.",
      "Auf Küchenpapier abtropfen lassen und heiß servieren."
    ],
    nutrition: {
      calories: 285,
      protein: "12g",
      carbs: "35g",
      fat: "12g"
    },
    tips: [
      "Verwende unbedingt getrocknete Kichererbsen - Dosenkichererbsen werden zu matschig",
      "Die Masse sollte noch etwas grobkörnig sein für die perfekte Textur"
    ],
    seo_title: "Falafel selber machen - Authentisches orientalisches Rezept",
    seo_keywords: ["Falafel", "Kichererbsen", "orientalisch", "vegan", "selbstgemacht", "frittiert"],
    createdDate: new Date('2024-01-10'),
    updatedDate: new Date('2024-01-18'),
    introductionParagraph: "Selbstgemachte Falafel sind ein wahres Geschmackserlebnis! Diese knusprigen Kichererbsenbällchen sind nicht nur unglaublich lecker, sondern auch reich an pflanzlichem Protein. Mit frischen Kräutern und orientalischen Gewürzen werden sie zum perfekten Hauptgericht.",
    additionalParagraph: "Das Geheimnis perfekter Falafel liegt in der richtigen Konsistenz der Masse und der optimalen Frittiertemperatur. So werden sie außen knusprig und innen saftig - genau wie beim Lieblings-Orientalen um die Ecke.",
    images: {
      image1: "/images/MainCourses/falafel-selber-machen-rezept.jpeg",
      image2: "/images/MainCourses/orientalische-falafel.jpeg",
      image3: "/images/MainCourses/vegane-falafel-rezept.jpeg",
      image4: "/images/MainCourses/bestes-falafel-rezept.jpeg",
      image5: "/images/MainCourses/falafel-teller-rezept.jpeg",
      image6: "/images/MainCourses/falafel-rezept-original-vegan.jpeg",
      image7: "/images/MainCourses/hausgemachter-falafel-wrap.jpeg",
      imageIngredient: "/images/Ingredients/falafel-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Getrocknete Kichererbsen",
        description: "Unbedingt getrocknete verwenden! Sie müssen über Nacht eingeweicht werden, aber nur so wird die Konsistenz perfekt."
      },
      {
        title: "Frische Kräuter",
        description: "Petersilie und Koriander geben den authentischen Geschmack - verwende sie frisch für das beste Aroma."
      }
    ],
    funFact: {
      title: "Orientalische Tradition",
      description: "Falafel gelten als eines der ältesten Fast Foods der Welt und werden seit über 1000 Jahren im Nahen Osten zubereitet. Ursprünglich wurden sie aus Ackerbohnen gemacht!"
    },
    servingSuggestions: {
      title: "Perfekt serviert mit",
      description: "Falafel schmecken am besten kombiniert mit:",
      items: [
        {
          emoji: "🥙",
          title: "Pita-Brot",
          description: "Warm und fluffig - der klassische Begleiter für Falafel."
        },
        {
          emoji: "🥒",
          title: "Tahini-Sauce",
          description: "Cremige Sesampaste mit Zitrone und Knoblauch."
        },
        {
          emoji: "🥗",
          title: "Frischer Salat",
          description: "Tomaten, Gurken und rote Zwiebeln sorgen für Frische."
        }
      ],
      note: "Traditionell werden Falafel mit Hummus, Taboulé und eingelegtem Gemüse serviert."
    },
    whyFavorite: {
      title: "Darum lieben wir Falafel",
      reasons: [
        {
          title: "Proteinpower",
          description: "Kichererbsen liefern hochwertiges pflanzliches Protein und machen lange satt."
        },
        {
          title: "Vielseitig",
          description: "Als Hauptgericht, in Wraps, zu Salat oder als Snack - immer lecker!"
        },
        {
          title: "Authentisch",
          description: "Mit diesem Rezept schmecken sie wie im besten orientalischen Restaurant."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Wie beim Lieblings-Orientalen!",
      subText: "Knusprig, würzig, einfach perfekt",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 3,
    slug: "gemuese-curry-indisch",
    title: "Gemüse-Curry indisch",
    description: "Aromatisches indisches Gemüse-Curry mit Kokosmilch und exotischen Gewürzen. Gesund, sättigend und voller Geschmack.",
    image: "/images/MainCourses/gemuese-curry-indisch.jpeg",
    category: "Hauptgerichte",
    tags: ["Indisch", "Curry", "Vegan", "Gesund", "Kokosmilch", "Gewürze"],
    prepTime: 25,
    cookingTime: 30,
    servings: 4,
    rating: 4.6,
    reviews: 156,
    ingredients: [
      { amount: 2, unit: "EL", name: "Kokosöl" },
      { amount: 1, unit: "Stück", name: "Zwiebel, gewürfelt" },
      { amount: 3, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 1, unit: "Stück", name: "Ingwer, gerieben (2cm)" },
      { amount: 2, unit: "TL", name: "Garam Masala" },
      { amount: 1, unit: "TL", name: "Kurkuma" },
      { amount: 1, unit: "TL", name: "Kreuzkümmel" },
      { amount: 400, unit: "ml", name: "Kokosmilch" },
      { amount: 400, unit: "g", name: "Tomaten, gehackt (Dose)" },
      { amount: 300, unit: "g", name: "Blumenkohl, in Röschen" },
      { amount: 200, unit: "g", name: "Karotten, gewürfelt" },
      { amount: 200, unit: "g", name: "Erbsen (TK)" },
      { amount: 1, unit: "TL", name: "Salz" },
      { amount: "", unit: "Bund", name: "Koriander zum Garnieren" }
    ],
    instructions: [
      "Kokosöl in einem großen Topf erhitzen. Zwiebel, Knoblauch und Ingwer 3-4 Minuten anbraten.",
      "Gewürze hinzufügen und 1 Minute rösten, bis sie duften.",
      "Kokosmilch und Tomaten einrühren, aufkochen lassen.",
      "Blumenkohl und Karotten hinzufügen, 15 Minuten köcheln lassen.",
      "Erbsen unterrühren und weitere 5 Minuten garen. Mit Salz abschmecken.",
      "Mit frischem Koriander garnieren und mit Basmatireis servieren."
    ],
    nutrition: {
      calories: 245,
      protein: "8g",
      carbs: "18g",
      fat: "16g"
    },
    tips: [
      "Gewürze immer kurz anrösten - das intensiviert den Geschmack enorm",
      "Das Curry schmeckt am nächsten Tag noch besser, wenn die Aromen durchgezogen sind"
    ],
    seo_title: "Indisches Gemüse-Curry mit Kokosmilch - Authentisches Rezept",
    seo_keywords: ["Gemüse-Curry", "indisch", "Kokosmilch", "vegan", "Garam Masala", "gesund"],
    createdDate: new Date('2024-01-12'),
    updatedDate: new Date('2024-01-19'),
    introductionParagraph: "Dieses aromatische indische Gemüse-Curry bringt die Gewürzvielfalt Indiens direkt in deine Küche. Mit cremiger Kokosmilch, frischem Gemüse und einer perfekt abgestimmten Gewürzmischung wird jeder Bissen zu einer Geschmacksexplosion.",
    additionalParagraph: "Das Besondere an diesem Curry ist die Balance zwischen den warmen Gewürzen und der milden Kokosmilch. Es ist nicht nur unglaublich lecker, sondern auch reich an Vitaminen und pflanzlichen Nährstoffen.",
    images: {
      image1: "/images/MainCourses/gemuese-curry-gesund-und-proteinreich.jpeg",
      image2: "/images/MainCourses/cremiges-gemuese-curry-low-carb-vegetarisch.jpeg",
      image3: "/images/MainCourses/gemuese-curry-mit-kuerbis-und-kokosmilch.jpeg",
      image4: "/images/MainCourses/gemuese-curry-mit-kichererbsen-und-blumenkohl.jpeg",
      image5: "/images/MainCourses/gemuese-curry-indisch-mit-kurkuma-und-senfsamen.jpeg",
      image6: "/images/MainCourses/vegetarisches-curry-mit-garam-masala-und-kreuzkuemmel.jpeg",
      image7: "/images/MainCourses/gemuese-curry-ohne-fleisch-mit-kokosoel-und-tomatenmark.jpeg",
      imageIngredient: "/images/Ingredients/gemuese-curry-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Garam Masala",
        description: "Diese indische Gewürzmischung ist das Herzstück des Currys. Du bekommst sie im Asia-Laden oder gut sortierten Supermarkt."
      },
      {
        title: "Kokosmilch",
        description: "Verwende die dickere Kokosmilch aus der Dose für die beste Cremigkeit und den intensivsten Geschmack."
      }
    ],
    funFact: {
      title: "Gewürz-Weisheit",
      description: "In der indischen Küche werden Gewürze nicht nur für den Geschmack verwendet, sondern auch wegen ihrer gesundheitsfördernden Eigenschaften. Kurkuma wirkt entzündungshemmend und Kreuzkümmel fördert die Verdauung!"
    },
    servingSuggestions: {
      title: "Traditionell serviert mit",
      description: "Dieses Curry harmoniert perfekt mit:",
      items: [
        {
          emoji: "🍚",
          title: "Basmatireis",
          description: "Der duftende Langkornreis ist der klassische Begleiter."
        },
        {
          emoji: "🫓",
          title: "Naan-Brot",
          description: "Frisches indisches Fladenbrot zum Dippen."
        },
        {
          emoji: "🥒",
          title: "Raita",
          description: "Joghurt-Gurken-Dip kühlt die Schärfe ab."
        }
      ],
      note: "Ein Spritzer Limettensaft vor dem Servieren bringt die Aromen noch besser zur Geltung."
    },
    whyFavorite: {
      title: "Warum wir dieses Curry lieben",
      reasons: [
        {
          title: "Gesund & nährstoffreich",
          description: "Vollgepackt mit Vitaminen, Antioxidantien und gesunden Fetten aus der Kokosmilch."
        },
        {
          title: "Authentischer Geschmack",
          description: "Die Gewürzkombination schmeckt wie in einem echten indischen Restaurant."
        },
        {
          title: "Meal Prep geeignet",
          description: "Lässt sich perfekt vorbereiten und schmeckt aufgewärmt sogar noch besser."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Ein Hauch von Indien!",
      subText: "Würzig, cremig, einfach himmlisch",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 4,
    slug: "kaesespaetzle-original",
    title: "Käsespätzle Original",
    description: "Schwäbische Käsespätzle wie von Oma - mit selbstgemachten Spätzle, würzigem Bergkäse und karamellisierten Zwiebeln.",
    image: "/images/MainCourses/kaesespaetzle-original.jpeg",
    category: "Hauptgerichte",
    tags: ["Schwäbisch", "Käse", "Spätzle", "Traditionell", "Comfort Food"],
    prepTime: 45,
    cookingTime: 25,
    servings: 4,
    rating: 4.9,
    reviews: 203,
    ingredients: [
      { amount: 400, unit: "g", name: "Mehl" },
      { amount: 4, unit: "Stück", name: "Eier" },
      { amount: 200, unit: "ml", name: "Wasser" },
      { amount: 1, unit: "TL", name: "Salz" },
      { amount: 300, unit: "g", name: "Bergkäse, gerieben" },
      { amount: 100, unit: "g", name: "Emmentaler, gerieben" },
      { amount: 3, unit: "Stück", name: "Zwiebeln, in Ringe" },
      { amount: 3, unit: "EL", name: "Butter" },
      { amount: "", unit: "", name: "Salz und Pfeffer" },
      { amount: "", unit: "Bund", name: "Schnittlauch" }
    ],
    instructions: [
      "Mehl, Eier, Wasser und Salz zu einem glatten Teig verrühren. 30 Minuten ruhen lassen.",
      "Salzwasser zum Kochen bringen. Spätzle mit einem Spätzlehobel ins kochende Wasser schaben.",
      "Wenn die Spätzle an der Oberfläche schwimmen, mit einem Schaumlöffel herausnehmen.",
      "Zwiebeln in Butter goldbraun karamellisieren.",
      "Spätzle lagenweise mit Käse in eine Auflaufform schichten. Im Ofen bei 180°C 10 Minuten überbacken.",
      "Mit karamellisierten Zwiebeln und Schnittlauch servieren."
    ],
    nutrition: {
      calories: 485,
      protein: "22g",
      carbs: "45g",
      fat: "24g"
    },
    tips: [
      "Der Teig sollte zäh vom Löffel reißen - das ist die perfekte Konsistenz",
      "Verwende eine Mischung aus verschiedenen Käsesorten für den besten Geschmack"
    ],
    seo_title: "Käsespätzle Original - Schwäbisches Rezept wie von Oma",
    seo_keywords: ["Käsespätzle", "schwäbisch", "Spätzle", "Bergkäse", "traditionell", "Oma"],
    createdDate: new Date('2024-01-08'),
    updatedDate: new Date('2024-01-16'),
    introductionParagraph: "Käsespätzle sind das Herzstück der schwäbischen Küche! Diese cremig-käsige Köstlichkeit mit selbstgemachten Spätzle und karamellisierten Zwiebeln ist pure Gemütlichkeit auf dem Teller. Ein Gericht, das Kindheitserinnerungen weckt und die Seele wärmt.",
    additionalParagraph: "Das Geheimnis perfekter Käsespätzle liegt in der richtigen Teigkonsistenz und der Käseauswahl. Mit würzigem Bergkäse und mildem Emmentaler entsteht die perfekte Geschmacksbalance, die jeden Schwaben stolz machen würde.",
    images: {
      image1: "/images/MainCourses/kaesespaetzle-cremig-und-goldbraun.jpeg",
      image2: "/images/MainCourses/kaesespaetzle-mit-bergkaese-emmentaler.jpeg",
      image3: "/images/MainCourses/kaesespaetzle-karamellisierte-zwiebeln.jpeg",
      image4: "/images/MainCourses/kaesespaetzle-spaetzle-mehl-und-eier.jpeg",
      image5: "/images/MainCourses/kaesespaetzle-im-ofen-ueberbacken.jpeg",
      image6: "/images/MainCourses/kaesespaetzle-original-rezept-serviert.jpeg",
      image7: "/images/MainCourses/kaesespaetzle-mit-schnittlauch-garniert.jpeg",
      imageIngredient: "/images/Ingredients/kaesespaetzle-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Bergkäse",
        description: "Verwende einen würzigen, gut gereiften Bergkäse - er ist das Herzstück des Gerichts und sorgt für den authentischen Geschmack."
      },
      {
        title: "Spätzlemehl",
        description: "Spezielles Spätzlemehl oder griffiges Mehl Type 405 sorgt für die perfekte Teigkonsistenz."
      }
    ],
    funFact: {
      title: "Schwäbische Tradition",
      description: "Käsespätzle gelten als das Nationalgericht der Schwaben! Traditionell wurden sie als 'Arme-Leute-Essen' zubereitet, da Käse und Mehl günstige Grundzutaten waren. Heute sind sie ein beliebtes Comfort Food in ganz Deutschland."
    },
    servingSuggestions: {
      title: "Klassisch dazu serviert",
      description: "Käsespätzle werden traditionell begleitet von:",
      items: [
        {
          emoji: "🥗",
          title: "Blattsalat",
          description: "Ein frischer grüner Salat mit Essig-Öl-Dressing gleicht die Schwere aus."
        },
        {
          emoji: "🥒",
          title: "Gurkensalat",
          description: "Saurer Gurkensalat ist der klassische schwäbische Begleiter."
        },
        {
          emoji: "🍺",
          title: "Weißbier",
          description: "Ein kühles Weißbier passt perfekt zu diesem herzhaften Gericht."
        }
      ],
      note: "In Schwaben sagt man: 'Käsespätzle ohne Zwiebeln sind wie ein Tag ohne Sonnenschein!'"
    },
    whyFavorite: {
      title: "Darum sind Käsespätzle unschlagbar",
      reasons: [
        {
          title: "Pure Gemütlichkeit",
          description: "Dieses Gericht ist wie eine warme Umarmung - perfekt für kalte Tage und gesellige Runden."
        },
        {
          title: "Authentisch schwäbisch",
          description: "Mit diesem Rezept schmecken sie genau wie bei Oma in der schwäbischen Küche."
        },
        {
          title: "Sättigend & lecker",
          description: "Die Kombination aus Käse, Spätzle und Zwiebeln macht lange satt und glücklich."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Wie bei Oma in Schwaben!",
      subText: "Käsig, cremig, einfach himmlisch",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 5,
    slug: "ratatouille-mediterran",
    title: "Ratatouille mediterran",
    description: "Klassisches französisches Ratatouille mit frischem Sommergemüse, Kräutern der Provence und Olivenöl. Gesund und voller Geschmack.",
    image: "/images/MainCourses/ratatouille-mediterran.jpeg",
    category: "Hauptgerichte",
    tags: ["Französisch", "Mediterran", "Vegan", "Gesund", "Sommer", "Gemüse"],
    prepTime: 30,
    cookingTime: 45,
    servings: 4,
    rating: 4.5,
    reviews: 134,
    ingredients: [
      { amount: 2, unit: "Stück", name: "Auberginen, gewürfelt" },
      { amount: 2, unit: "Stück", name: "Zucchini, in Scheiben" },
      { amount: 2, unit: "Stück", name: "Paprika, gewürfelt" },
      { amount: 4, unit: "Stück", name: "Tomaten, gewürfelt" },
      { amount: 1, unit: "Stück", name: "Zwiebel, gewürfelt" },
      { amount: 4, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 4, unit: "EL", name: "Olivenöl" },
      { amount: 2, unit: "TL", name: "Kräuter der Provence" },
      { amount: 1, unit: "TL", name: "Thymian" },
      { amount: "", unit: "Bund", name: "Basilikum" },
      { amount: "", unit: "", name: "Salz und Pfeffer" }
    ],
    instructions: [
      "Auberginen würfeln, salzen und 20 Minuten ziehen lassen. Dann abspülen und trocken tupfen.",
      "Olivenöl in einer großen Pfanne erhitzen. Zwiebel und Knoblauch glasig anbraten.",
      "Auberginen hinzufügen und 5 Minuten anbraten. Paprika und Zucchini dazugeben.",
      "Tomaten und Kräuter unterrühren. Bei mittlerer Hitze 30-40 Minuten schmoren lassen.",
      "Mit Salz, Pfeffer und frischem Basilikum abschmecken.",
      "Heiß oder lauwarm servieren - schmeckt auch kalt hervorragend."
    ],
    nutrition: {
      calories: 165,
      protein: "4g",
      carbs: "18g",
      fat: "9g"
    },
    tips: [
      "Auberginen unbedingt salzen - das entzieht die Bitterstoffe",
      "Ratatouille schmeckt am nächsten Tag noch besser, wenn die Aromen durchgezogen sind"
    ],
    seo_title: "Ratatouille mediterran - Französisches Originalrezept",
    seo_keywords: ["Ratatouille", "französisch", "mediterran", "Sommergemüse", "vegan", "gesund"],
    createdDate: new Date('2024-01-14'),
    updatedDate: new Date('2024-01-21'),
    introductionParagraph: "Ratatouille ist der Inbegriff der französischen Sommerküche! Dieses traditionelle Schmorgericht aus der Provence vereint das Beste vom Sommergemüse in einem aromatischen, gesunden Gericht, das warm und kalt gleichermaßen köstlich schmeckt.",
    additionalParagraph: "Was Ratatouille so besonders macht, ist die Art, wie sich die verschiedenen Gemüsearomen während des langsamen Schmorens miteinander verbinden. Jedes Gemüse behält seinen Charakter, während gleichzeitig eine harmonische Geschmackskomposition entsteht.",
    images: {
      image1: "/images/MainCourses/ratatouille-mit-thymian-und-rosmarin.jpeg",
      image2: "/images/MainCourses/vegetarisches-ratatouille-rezept-mit-olivenoel.jpeg",
      image3: "/images/MainCourses/franzoesisches-ratatouille-fuer-vegetarier.jpeg",
      image4: "/images/MainCourses/ofenratatouille-mediterranes-gemuese-rezept.jpeg",
      image5: "/images/MainCourses/ratatouille-mit-tomaten-paprika-und-kraeutern.jpeg",
      image6: "/images/MainCourses/ratatouille-einfach-selbstgemacht-gesund.jpeg",
      image7: "/images/MainCourses/ratatouille-klassisch-franzoesisch-mit-zucchini-und-aubergine.jpeg",
      imageIngredient: "/images/Ingredients/ratatouille-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Frisches Sommergemüse",
        description: "Verwende nur reifes, saisonales Gemüse für den besten Geschmack. Auberginen sollten fest und glänzend sein."
      },
      {
        title: "Kräuter der Provence",
        description: "Diese typisch französische Kräutermischung mit Lavendel, Thymian und Rosmarin verleiht das authentische Aroma."
      }
    ],
    funFact: {
      title: "Französische Tradition",
      description: "Ratatouille stammt ursprünglich aus Nizza und war ein 'Arme-Leute-Essen' zur Verwertung von Gemüseresten. Heute ist es ein Symbol der raffinierten französischen Küche und wurde sogar durch den Pixar-Film weltberühmt!"
    },
    servingSuggestions: {
      title: "Vielseitig kombinierbar",
      description: "Ratatouille harmoniert wunderbar mit:",
      items: [
        {
          emoji: "🍞",
          title: "Baguette",
          description: "Frisches französisches Baguette zum Dippen und Sattwerden."
        },
        {
          emoji: "🍚",
          title: "Reis oder Quinoa",
          description: "Als Beilage für eine vollständige, sättigende Mahlzeit."
        },
        {
          emoji: "🧀",
          title: "Ziegenkäse",
          description: "Ein Stück cremiger Ziegenkäse macht das Gericht noch französischer."
        }
      ],
      note: "Ratatouille ist auch kalt ein Genuss - perfekt als Vorspeise oder für ein Picknick."
    },
    whyFavorite: {
      title: "Warum wir Ratatouille lieben",
      reasons: [
        {
          title: "Gesund & vitaminreich",
          description: "Vollgepackt mit Vitaminen, Antioxidantien und Ballaststoffen aus frischem Gemüse."
        },
        {
          title: "Vielseitig einsetzbar",
          description: "Als Hauptgericht, Beilage, Vorspeise oder sogar als Pasta-Sauce verwendbar."
        },
        {
          title: "Authentisch französisch",
          description: "Ein Stück Provence auf dem Teller - wie im Urlaub in Südfrankreich."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Bonjour aus der Provence!",
      subText: "Sommergemüse in Perfektion",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 6,
    slug: "pilzgulasch-vegetarisch",
    title: "Pilzgulasch vegetarisch",
    description: "Herzhaftes Pilzgulasch mit verschiedenen Pilzsorten, Paprika und cremiger Sauce. Deftig, würzig und unglaublich sättigend.",
    image: "/images/MainCourses/pilzgulasch-vegetarisch.jpeg",
    category: "Hauptgerichte",
    tags: ["Pilze", "Gulasch", "Deftig", "Herbst", "Paprika", "Cremig"],
    prepTime: 20,
    cookingTime: 40,
    servings: 4,
    rating: 4.7,
    reviews: 178,
    ingredients: [
      { amount: 500, unit: "g", name: "Champignons, in Scheiben" },
      { amount: 200, unit: "g", name: "Austernpilze, gerupft" },
      { amount: 100, unit: "g", name: "Shiitake, in Scheiben" },
      { amount: 2, unit: "Stück", name: "Zwiebeln, gewürfelt" },
      { amount: 2, unit: "Stück", name: "Paprika, gewürfelt" },
      { amount: 3, unit: "EL", name: "Tomatenmark" },
      { amount: 2, unit: "EL", name: "Paprikapulver edelsüß" },
      { amount: 1, unit: "TL", name: "Paprikapulver scharf" },
      { amount: 500, unit: "ml", name: "Gemüsebrühe" },
      { amount: 200, unit: "ml", name: "Sahne" },
      { amount: 2, unit: "EL", name: "Mehl" },
      { amount: 3, unit: "EL", name: "Öl" },
      { amount: "", unit: "", name: "Salz und Pfeffer" }
    ],
    instructions: [
      "Öl in einem großen Topf erhitzen. Zwiebeln glasig anbraten.",
      "Pilze portionsweise scharf anbraten, bis sie goldbraun sind. Herausnehmen.",
      "Paprika anbraten, Tomatenmark und Paprikapulver hinzufügen. 2 Minuten rösten.",
      "Mit Mehl bestäuben, kurz anrösten. Mit Brühe ablöschen und aufkochen.",
      "Pilze zurück in den Topf geben, 20 Minuten köcheln lassen.",
      "Sahne einrühren, mit Salz und Pfeffer abschmecken. Mit Spätzle oder Knödeln servieren."
    ],
    nutrition: {
      calories: 285,
      protein: "12g",
      carbs: "16g",
      fat: "20g"
    },
    tips: [
      "Pilze nicht waschen, sondern nur mit einem Tuch abreiben",
      "Pilze portionsweise anbraten, damit sie nicht im eigenen Saft kochen"
    ],
    seo_title: "Pilzgulasch vegetarisch - Herzhaftes Rezept ohne Fleisch",
    seo_keywords: ["Pilzgulasch", "vegetarisch", "Pilze", "Gulasch", "deftig", "Paprika"],
    createdDate: new Date('2024-01-11'),
    updatedDate: new Date('2024-01-17'),
    introductionParagraph: "Dieses herzhafte Pilzgulasch beweist, dass vegetarische Gerichte genauso deftig und sättigend sein können wie ihre fleischigen Verwandten. Mit einer Mischung aus verschiedenen Pilzsorten und einer würzig-cremigen Paprikasauce wird es zum perfekten Comfort Food für kalte Tage.",
    additionalParagraph: "Das Geheimnis eines guten Pilzgulaschs liegt im scharfen Anbraten der Pilze und der richtigen Würzung mit Paprikapulver. So entwickeln die Pilze intensive Röstaromen, die dem Gericht eine wunderbare Tiefe verleihen.",
    images: {
      image1: "/images/MainCourses/pilzgulasch-mit-austernpilzen-und-shiitake.jpeg",
      image2: "/images/MainCourses/pilzgulasch-ohne-fleisch-deftig-und-wuerzig.jpeg",
      image3: "/images/MainCourses/pilzgulasch-naheaufnahme-cremig-und-aromatisch.jpeg",
      image4: "/images/MainCourses/pilzgulasch-vegetarisch-serviert-mit-champignons.jpeg",
      image5: "/images/MainCourses/pilzgulasch-umami-mit-rauchpaprika-und-sojasosse.jpeg",
      image6: "/images/MainCourses/pilzgulasch-mit-getrockneten-steinpilzen-und-bruehe.jpeg",
      image7: "/images/MainCourses/pilzgulasch-schmorgericht-mit-rotwein-und-gemuesebruehe.jpeg",
      imageIngredient: "/images/Ingredients/pilzgulasch-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Verschiedene Pilzsorten",
        description: "Die Mischung macht's! Champignons für die Basis, Austernpilze für die Textur und Shiitake für den intensiven Umami-Geschmack."
      },
      {
        title: "Paprikapulver",
        description: "Verwende hochwertiges ungarisches Paprikapulver - es ist das Herzstück des Gulaschs und sorgt für die typische Farbe und den Geschmack."
      }
    ],
    funFact: {
      title: "Pilz-Power",
      description: "Pilze sind wahre Nährstoffbomben! Sie enthalten hochwertiges Protein, B-Vitamine und Mineralien. Shiitake-Pilze gelten sogar als natürliche Immunbooster und werden in der traditionellen chinesischen Medizin geschätzt."
    },
    servingSuggestions: {
      title: "Perfekte Beilagen",
      description: "Pilzgulasch harmoniert wunderbar mit:",
      items: [
        {
          emoji: "🥟",
          title: "Semmelknödel",
          description: "Klassische bayerische Knödel saugen die leckere Sauce perfekt auf."
        },
        {
          emoji: "🍝",
          title: "Spätzle",
          description: "Schwäbische Spätzle sind der ideale Begleiter für die cremige Sauce."
        },
        {
          emoji: "🍞",
          title: "Bauernbrot",
          description: "Kräftiges Brot zum Dippen und Sattwerden."
        }
      ],
      note: "Ein Klecks saure Sahne und frische Petersilie machen das Gericht perfekt."
    },
    whyFavorite: {
      title: "Darum ist Pilzgulasch unschlagbar",
      reasons: [
        {
          title: "Umami-Geschmack",
          description: "Pilze liefern den herzhaften fünften Geschmack, der das Gericht so befriedigend macht."
        },
        {
          title: "Deftig & sättigend",
          description: "Steht einem klassischen Fleischgulasch in nichts nach - pure Gemütlichkeit im Topf."
        },
        {
          title: "Herbst-Feeling",
          description: "Perfekt für die kalte Jahreszeit, wenn man sich nach warmen, herzhaften Gerichten sehnt."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Deftig wie bei Oma!",
      subText: "Pilze können auch herzhaft",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 7,
    slug: "gefuellte-paprika-quinoa",
    title: "Gefüllte Paprika mit Quinoa",
    description: "Bunte Paprika gefüllt mit würzigem Quinoa, Gemüse und Kräutern. Gesund, proteinreich und wunderschön anzusehen.",
    image: "/images/MainCourses/gefuellte-paprika-quinoa.jpeg",
    category: "Hauptgerichte",
    tags: ["Quinoa", "Paprika", "Gesund", "Proteinreich", "Bunt", "Ofen"],
    prepTime: 25,
    cookingTime: 35,
    servings: 4,
    rating: 4.6,
    reviews: 142,
    ingredients: [
      { amount: 4, unit: "Stück", name: "Paprika (verschiedene Farben)" },
      { amount: 200, unit: "g", name: "Quinoa" },
      { amount: 400, unit: "ml", name: "Gemüsebrühe" },
      { amount: 1, unit: "Stück", name: "Zwiebel, gewürfelt" },
      { amount: 2, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 150, unit: "g", name: "Champignons, gewürfelt" },
      { amount: 100, unit: "g", name: "Feta, gewürfelt" },
      { amount: 50, unit: "g", name: "Pinienkerne" },
      { amount: 2, unit: "EL", name: "Olivenöl" },
      { amount: 1, unit: "TL", name: "Oregano" },
      { amount: "", unit: "Bund", name: "Petersilie, gehackt" },
      { amount: "", unit: "", name: "Salz und Pfeffer" }
    ],
    instructions: [
      "Quinoa in Gemüsebrühe nach Packungsanweisung garen. Abkühlen lassen.",
      "Paprika oben abschneiden, entkernen und aushöhlen. Deckel aufbewahren.",
      "Zwiebel und Knoblauch in Olivenöl anbraten. Champignons hinzufügen und 5 Minuten braten.",
      "Quinoa, Gemüsemischung, Feta, Pinienkerne und Kräuter vermischen. Mit Salz und Pfeffer würzen.",
      "Paprika mit der Quinoa-Mischung füllen, Deckel aufsetzen.",
      "Bei 180°C für 30-35 Minuten backen, bis die Paprika weich sind."
    ],
    nutrition: {
      calories: 315,
      protein: "14g",
      carbs: "38g",
      fat: "12g"
    },
    tips: [
      "Quinoa vorher gut spülen, um die bitteren Saponine zu entfernen",
      "Paprika sollten stabil stehen - eventuell unten etwas abschneiden"
    ],
    seo_title: "Gefüllte Paprika mit Quinoa - Gesundes vegetarisches Rezept",
    seo_keywords: ["gefüllte Paprika", "Quinoa", "vegetarisch", "gesund", "proteinreich", "Ofen"],
    createdDate: new Date('2024-01-13'),
    updatedDate: new Date('2024-01-20'),
    introductionParagraph: "Diese bunten gefüllten Paprika sind nicht nur ein Fest für die Augen, sondern auch für den Gaumen! Die Kombination aus nussigem Quinoa, würzigem Feta und frischen Kräutern macht sie zu einem gesunden und sättigenden Hauptgericht, das auch optisch beeindruckt.",
    additionalParagraph: "Quinoa ist ein wahres Superfood und macht diese gefüllten Paprika zu einer vollwertigen Mahlzeit. Das Pseudogetreide liefert alle essentiellen Aminosäuren und macht das Gericht besonders proteinreich und nahrhaft.",
    images: {
      image1: "/images/MainCourses/paprika-gefüllt-ohne-fleisch-vegetarisch.jpeg",
      image2: "/images/MainCourses/gesunde-gefuellte-paprika-mit-pilzen-und-feta.jpeg",
      image3: "/images/MainCourses/paprika-gefüllt-mit-quinoa-pilzen-und-kraeutern.jpeg",
      image4: "/images/MainCourses/vegetarisch-gefuellte-paprika-mit-feta-und-quinoa.jpeg",
      image5: "/images/MainCourses/gefüllte-paprika-ohne-fleisch-gesund-leicht.jpeg",
      image6: "/images/MainCourses/vegetarisches-paprika-rezept-mit-quinoa.jpeg",
      image7: "/images/MainCourses/quinoa-paprika-vegetarisch-ofengericht.jpeg",
      imageIngredient: "/images/Ingredients/gefuellte-paprika-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Quinoa",
        description: "Das 'Gold der Inkas' ist glutenfrei und enthält alle essentiellen Aminosäuren. Vor dem Kochen unbedingt gut spülen!"
      },
      {
        title: "Bunte Paprika",
        description: "Verwende verschiedene Farben für ein schönes Aussehen. Rote und gelbe Paprika sind süßer als grüne."
      }
    ],
    funFact: {
      title: "Quinoa-Wissen",
      description: "Quinoa wurde bereits vor 5000 Jahren von den Inkas angebaut und als 'Mutter aller Körner' verehrt. Es ist botanisch gesehen kein Getreide, sondern verwandt mit Spinat und Rote Bete!"
    },
    servingSuggestions: {
      title: "Perfekt ergänzt durch",
      description: "Gefüllte Paprika harmonieren wunderbar mit:",
      items: [
        {
          emoji: "🥗",
          title: "Griechischer Salat",
          description: "Ein frischer Salat mit Gurken, Tomaten und Oliven passt perfekt."
        },
        {
          emoji: "🍞",
          title: "Fladenbrot",
          description: "Warmes Pita-Brot oder türkisches Fladenbrot zum Dippen."
        },
        {
          emoji: "🧄",
          title: "Tzatziki",
          description: "Cremiger Joghurt-Gurken-Dip rundet das mediterrane Feeling ab."
        }
      ],
      note: "Ein Spritzer Zitronensaft vor dem Servieren bringt die Aromen noch besser zur Geltung."
    },
    whyFavorite: {
      title: "Warum wir gefüllte Paprika lieben",
      reasons: [
        {
          title: "Nährstoff-Powerhouse",
          description: "Quinoa liefert Protein, Paprika Vitamin C und Feta Calcium - eine perfekte Nährstoffkombination."
        },
        {
          title: "Meal Prep geeignet",
          description: "Lassen sich perfekt vorbereiten und schmecken auch am nächsten Tag noch fantastisch."
        },
        {
          title: "Optisch beeindruckend",
          description: "Die bunten Paprika machen auf jedem Teller eine gute Figur - perfekt für Gäste."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Bunt, gesund, lecker!",
      subText: "Quinoa macht's perfekt",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 8,
    slug: "linsen-bolognese-pasta",
    title: "Linsen-Bolognese mit Pasta",
    description: "Herzhafte vegetarische Bolognese aus roten Linsen mit Gemüse und italienischen Kräutern. Proteinreich und unglaublich lecker.",
    image: "/images/MainCourses/linsen-bolognese-pasta.jpeg",
    category: "Hauptgerichte",
    tags: ["Linsen", "Pasta", "Italienisch", "Proteinreich", "Vegan", "Bolognese"],
    prepTime: 15,
    cookingTime: 30,
    servings: 4,
    rating: 4.8,
    reviews: 267,
    ingredients: [
      { amount: 250, unit: "g", name: "Rote Linsen" },
      { amount: 400, unit: "g", name: "Pasta (Spaghetti oder Penne)" },
      { amount: 1, unit: "Stück", name: "Zwiebel, gewürfelt" },
      { amount: 2, unit: "Stück", name: "Karotten, gewürfelt" },
      { amount: 2, unit: "Stangen", name: "Sellerie, gewürfelt" },
      { amount: 3, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 800, unit: "g", name: "Tomaten, gehackt (Dose)" },
      { amount: 500, unit: "ml", name: "Gemüsebrühe" },
      { amount: 3, unit: "EL", name: "Tomatenmark" },
      { amount: 2, unit: "TL", name: "Oregano" },
      { amount: 1, unit: "TL", name: "Basilikum" },
      { amount: 3, unit: "EL", name: "Olivenöl" },
      { amount: "", unit: "", name: "Salz und Pfeffer" },
      { amount: "", unit: "Bund", name: "Basilikum, frisch" }
    ],
    instructions: [
      "Olivenöl in einem großen Topf erhitzen. Zwiebel, Karotten und Sellerie 5 Minuten anbraten.",
      "Knoblauch hinzufügen und 1 Minute mitbraten. Tomatenmark einrühren und 2 Minuten rösten.",
      "Rote Linsen, Tomaten und Gemüsebrühe hinzufügen. Aufkochen lassen.",
      "Oregano und Basilikum einrühren. 20-25 Minuten köcheln lassen, bis die Linsen weich sind.",
      "Pasta nach Packungsanweisung kochen. Abgießen und etwas Nudelwasser aufbewahren.",
      "Bolognese mit Salz und Pfeffer abschmecken. Mit Pasta servieren und mit frischem Basilikum garnieren."
    ],
    nutrition: {
      calories: 425,
      protein: "18g",
      carbs: "72g",
      fat: "8g"
    },
    tips: [
      "Rote Linsen müssen nicht eingeweicht werden und kochen schnell",
      "Etwas Nudelwasser zur Bolognese geben, wenn sie zu dick wird"
    ],
    seo_title: "Linsen-Bolognese mit Pasta - Vegetarische Alternative",
    seo_keywords: ["Linsen-Bolognese", "vegetarisch", "Pasta", "rote Linsen", "proteinreich", "vegan"],
    createdDate: new Date('2024-01-09'),
    updatedDate: new Date('2024-01-15'),
    introductionParagraph: "Diese vegetarische Linsen-Bolognese steht der klassischen italienischen Version in nichts nach! Rote Linsen sorgen für eine fleischähnliche Textur und liefern dabei jede Menge pflanzliches Protein. Ein Gericht, das auch Fleischesser überzeugt.",
    additionalParagraph: "Das Geheimnis einer guten Linsen-Bolognese liegt im langsamen Schmoren und der richtigen Würzung. Die roten Linsen zerfallen beim Kochen leicht und ergeben zusammen mit dem Gemüse eine wunderbar sämige Sauce.",
    images: {
      image1: "/images/MainCourses/linsen-bolognese-nahaufnahme-pasta-mit-linsen.jpeg",
      image2: "/images/MainCourses/linsen-bolognese-vegatarisch-mit-roten-linsen-und-tomaten.jpeg",
      image3: "/images/MainCourses/linsen-bolognese-mit-gemuesewuerfeln-und-rotwein.jpeg",
      image4: "/images/MainCourses/linsen-bolognese-fertig-angerichtet-mit-kräutern.jpeg",
      image5: "/images/MainCourses/linsen-bolognese-gesunde-vegetarisch-pasta-alternative.jpeg",
      image6: "/images/MainCourses/linsen-bolognese-vegatarisches-rezept-mit-karotten-und-sellerie.jpeg",
      image7: "/images/MainCourses/linsen-bolognese-vegatarisch.jpeg",
      imageIngredient: "/images/Ingredients/linsen-bolognese-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Rote Linsen",
        description: "Rote Linsen kochen schnell und zerfallen zu einer cremigen Konsistenz - perfekt für Bolognese. Sie sind außerdem sehr proteinreich."
      },
      {
        title: "Mirepoix-Gemüse",
        description: "Die klassische französische Gemüsebasis aus Zwiebeln, Karotten und Sellerie bildet das Geschmacksfundament."
      }
    ],
    funFact: {
      title: "Linsen-Power",
      description: "Rote Linsen enthalten etwa 25% Protein und sind damit eine der besten pflanzlichen Proteinquellen! Sie liefern außerdem Eisen, Folsäure und Ballaststoffe - ein echtes Superfood aus der Hülsenfrucht-Familie."
    },
    servingSuggestions: {
      title: "Italienisch serviert mit",
      description: "Linsen-Bolognese wird traditionell begleitet von:",
      items: [
        {
          emoji: "🧀",
          title: "Parmesan",
          description: "Frisch geriebener Parmesan (oder vegane Alternative) macht es perfekt."
        },
        {
          emoji: "🥗",
          title: "Rucola-Salat",
          description: "Ein peppiger Rucola-Salat mit Balsamico-Dressing als Beilage."
        },
        {
          emoji: "🍞",
          title: "Knoblauchbrot",
          description: "Knuspriges Ciabatta mit Knoblauch und Kräutern."
        }
      ],
      note: "Ein Glas italienischer Rotwein rundet das mediterrane Erlebnis ab."
    },
    whyFavorite: {
      title: "Darum ist Linsen-Bolognese genial",
      reasons: [
        {
          title: "Proteinreich & sättigend",
          description: "Rote Linsen liefern hochwertiges pflanzliches Protein und machen lange satt."
        },
        {
          title: "Schnell & einfach",
          description: "In nur 30 Minuten fertig - perfekt für den Feierabend oder wenn Gäste kommen."
        },
        {
          title: "Authentisch italienisch",
          description: "Schmeckt wie beim Italiener, nur eben vegetarisch und genauso lecker."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Mama mia, che bello!",
      subText: "Italienisch gut, vegetarisch besser",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 9,
    slug: "flammkuchen-vegetarisch",
    title: "Flammkuchen vegetarisch",
    description: "Knuspriger elsässischer Flammkuchen mit Crème fraîche, karamellisierten Zwiebeln und würzigem Käse. Dünn, knusprig, unwiderstehlich.",
    image: "/images/MainCourses/flammkuchen-vegetarisch.jpeg",
    category: "Hauptgerichte",
    tags: ["Elsässisch", "Knusprig", "Zwiebeln", "Käse", "Dünn", "Französisch"],
    prepTime: 30,
    cookingTime: 15,
    servings: 4,
    rating: 4.7,
    reviews: 189,
    ingredients: [
      { amount: 300, unit: "g", name: "Mehl" },
      { amount: 150, unit: "ml", name: "Wasser, lauwarm" },
      { amount: 3, unit: "EL", name: "Olivenöl" },
      { amount: 1, unit: "TL", name: "Salz" },
      { amount: 200, unit: "g", name: "Crème fraîche" },
      { amount: 3, unit: "Stück", name: "Zwiebeln, in Ringe" },
      { amount: 150, unit: "g", name: "Gruyère, gerieben" },
      { amount: 100, unit: "g", name: "Speck, vegetarisch (optional)" },
      { amount: 2, unit: "EL", name: "Butter" },
      { amount: "", unit: "", name: "Muskatnuss" },
      { amount: "", unit: "", name: "Salz und Pfeffer" },
      { amount: "", unit: "Bund", name: "Schnittlauch" }
    ],
    instructions: [
      "Mehl, Wasser, Olivenöl und Salz zu einem glatten Teig kneten. 30 Minuten ruhen lassen.",
      "Zwiebeln in Butter langsam karamellisieren, bis sie goldbraun sind.",
      "Teig dünn ausrollen und auf ein Backblech legen.",
      "Crème fraîche mit Muskatnuss, Salz und Pfeffer würzen und auf dem Teig verstreichen.",
      "Zwiebeln und Käse darauf verteilen. Optional vegetarischen Speck hinzufügen.",
      "Bei 250°C für 12-15 Minuten backen, bis der Rand knusprig und goldbraun ist.",
      "Mit Schnittlauch garnieren und sofort servieren."
    ],
    nutrition: {
      calories: 385,
      protein: "14g",
      carbs: "42g",
      fat: "18g"
    },
    tips: [
      "Der Teig muss wirklich dünn ausgerollt werden - fast durchscheinend",
      "Ofen unbedingt richtig heiß vorheizen für die perfekte Knusprigkeit"
    ],
    seo_title: "Flammkuchen vegetarisch - Elsässisches Originalrezept",
    seo_keywords: ["Flammkuchen", "vegetarisch", "elsässisch", "knusprig", "Zwiebeln", "französisch"],
    createdDate: new Date('2024-01-16'),
    updatedDate: new Date('2024-01-22'),
    introductionParagraph: "Flammkuchen ist die elsässische Antwort auf Pizza! Dieser hauchdünne, knusprige Teig mit cremiger Crème fraîche und karamellisierten Zwiebeln ist ein wahrer Genuss. Ursprünglich wurde er von Bäckern gebacken, um die Ofentemperatur zu testen - heute ist er ein beliebtes Gericht in ganz Europa.",
    additionalParagraph: "Was Flammkuchen so besonders macht, ist seine Einfachheit und die Qualität der wenigen Zutaten. Der Teig wird ohne Hefe zubereitet und muss richtig dünn ausgerollt werden, damit er schön knusprig wird.",
    images: {
      image1: "/images/MainCourses/flammkuchen-mit-cremiger-basis-und-zwiebeln.jpeg",
      image2: "/images/MainCourses/flammkuchen-ohne-fleisch-knusprig-und-duenn.jpeg",
      image3: "/images/MainCourses/hausgemachter-flammkuchen-mit-kaese-und-zwiebeln.jpeg",
      image4: "/images/MainCourses/klassischer-flammkuchen-mit-creme-fraiche-und-senf.jpeg",
      image5: "/images/MainCourses/flammkuchen-variation-mit-gruyere-und-thymian.jpeg",
      image6: "/images/MainCourses/flammkuchen-vegetarisch-mit-zwiebeln-und-kaese.jpeg",
      image7: "/images/MainCourses/vegetarischer-flammkuchen-aus-dem-ofen.jpeg",
      imageIngredient: "/images/Ingredients/flammkuchen-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Crème fraîche",
        description: "Die cremige französische Sauerrahm-Spezialität ist das Herzstück des Flammkuchens. Nicht durch Schmand ersetzen!"
      },
      {
        title: "Gruyère",
        description: "Dieser würzige Schweizer Käse schmilzt perfekt und gibt dem Flammkuchen seinen charakteristischen Geschmack."
      }
    ],
    funFact: {
      title: "Elsässische Tradition",
      description: "Flammkuchen (französisch: Tarte flambée) wurde traditionell von Bäckern gebacken, um zu testen, ob der Ofen die richtige Temperatur für Brot hatte. Der Name kommt von den Flammen, die im Holzofen loderten!"
    },
    servingSuggestions: {
      title: "Elsässisch genießen mit",
      description: "Flammkuchen wird traditionell begleitet von:",
      items: [
        {
          emoji: "🍷",
          title: "Elsässer Weißwein",
          description: "Ein trockener Riesling oder Gewürztraminer aus dem Elsass passt perfekt."
        },
        {
          emoji: "🥗",
          title: "Grüner Salat",
          description: "Ein einfacher Blattsalat mit Vinaigrette gleicht die Reichhaltigkeit aus."
        },
        {
          emoji: "🍺",
          title: "Elsässer Bier",
          description: "Ein helles, hopfiges Bier ist eine authentische Alternative zum Wein."
        }
      ],
      note: "Flammkuchen wird traditionell mit den Händen gegessen - keine Scheu vor Fingerfood!"
    },
    whyFavorite: {
      title: "Warum Flammkuchen unwiderstehlich ist",
      reasons: [
        {
          title: "Knusprig-cremig",
          description: "Der Kontrast zwischen knusprigem Teig und cremiger Crème fraîche ist einfach perfekt."
        },
        {
          title: "Schnell gemacht",
          description: "Ohne Gehzeit für den Teig ist er viel schneller fertig als Pizza."
        },
        {
          title: "Authentisch französisch",
          description: "Ein Stück Elsass auf dem Teller - wie im Urlaub in Straßburg."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Bonjour aus dem Elsass!",
      subText: "Knusprig, cremig, magnifique",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 10,
    slug: "quinoa-buddha-bowl",
    title: "Quinoa Buddha Bowl",
    description: "Bunte Buddha Bowl mit Quinoa, geröstetem Gemüse, Avocado und Tahini-Dressing. Gesund, nährstoffreich und wunderschön anzusehen.",
    image: "/images/MainCourses/quinoa-buddha-bowl.jpeg",
    category: "Hauptgerichte",
    tags: ["Buddha Bowl", "Quinoa", "Gesund", "Bunt", "Avocado", "Tahini"],
    prepTime: 25,
    cookingTime: 25,
    servings: 4,
    rating: 4.8,
    reviews: 234,
    ingredients: [
      { amount: 200, unit: "g", name: "Quinoa" },
      { amount: 2, unit: "Stück", name: "Süßkartoffeln, gewürfelt" },
      { amount: 200, unit: "g", name: "Brokkoli, in Röschen" },
      { amount: 1, unit: "Stück", name: "Rote Bete, gewürfelt" },
      { amount: 2, unit: "Stück", name: "Avocados, in Scheiben" },
      { amount: 100, unit: "g", name: "Babyspinat" },
      { amount: 50, unit: "g", name: "Kürbiskerne" },
      { amount: 3, unit: "EL", name: "Tahini" },
      { amount: 2, unit: "EL", name: "Zitronensaft" },
      { amount: 1, unit: "EL", name: "Ahornsirup" },
      { amount: 1, unit: "Zehe", name: "Knoblauch, gepresst" },
      { amount: 4, unit: "EL", name: "Olivenöl" },
      { amount: "", unit: "", name: "Salz und Pfeffer" }
    ],
    instructions: [
      "Quinoa nach Packungsanweisung kochen und abkühlen lassen.",
      "Süßkartoffeln und Rote Bete mit Olivenöl, Salz und Pfeffer würzen. Bei 200°C 20 Minuten rösten.",
      "Brokkoli in den letzten 10 Minuten dazugeben.",
      "Für das Dressing Tahini, Zitronensaft, Ahornsirup, Knoblauch und 2-3 EL Wasser verrühren.",
      "Kürbiskerne in einer Pfanne ohne Öl rösten.",
      "Quinoa, geröstetes Gemüse, Spinat und Avocado in Schalen anrichten.",
      "Mit Tahini-Dressing beträufeln und mit Kürbiskernen garnieren."
    ],
    nutrition: {
      calories: 445,
      protein: "16g",
      carbs: "52g",
      fat: "22g"
    },
    tips: [
      "Gemüse nicht zu weich rösten - es sollte noch etwas Biss haben",
      "Buddha Bowls lassen sich perfekt vorbereiten und individuell zusammenstellen"
    ],
    seo_title: "Quinoa Buddha Bowl - Gesunde bunte Schüssel voller Nährstoffe",
    seo_keywords: ["Buddha Bowl", "Quinoa", "gesund", "bunt", "Avocado", "Tahini", "Bowl"],
    createdDate: new Date('2024-01-17'),
    updatedDate: new Date('2024-01-23'),
    introductionParagraph: "Diese bunte Quinoa Buddha Bowl ist ein wahres Fest für die Sinne! Vollgepackt mit nährstoffreichem Gemüse, proteinreichem Quinoa und cremigem Tahini-Dressing ist sie nicht nur gesund, sondern auch wunderschön anzusehen. Perfect für alle, die sich bewusst ernähren möchten.",
    additionalParagraph: "Buddha Bowls sind der Trend der gesunden Küche - und das zu Recht! Sie vereinen verschiedene Texturen, Farben und Geschmäcker in einer Schüssel und liefern dabei alle wichtigen Nährstoffe. Das Beste: Sie lassen sich unendlich variieren.",
    images: {
      image1: "/images/MainCourses/quinoa-buddha-bowl-buntes-gemuese.jpeg",
      image2: "/images/MainCourses/quinoa-bowl-mit-suesskartoffel-paprika.jpeg",
      image3: "/images/MainCourses/quinoa-bowl-naheaufnahme-gesund-lecker.jpeg",
      image4: "/images/MainCourses/quinoa-bowl-mit-geroesteten-kichererbsen.jpeg",
      image5: "/images/MainCourses/quinoa-bowl-avocado-und-tahini-dressing.jpeg",
      image6: "/images/MainCourses/quinoa-buddha-bowl-vegetarisch-serviert.jpeg",
      image7: "/images/MainCourses/quinoa-bowl-mit-zitrone-und-sesam.jpeg",
      imageIngredient: "/images/Ingredients/quinoa-buddha-bowl-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Tahini",
        description: "Diese cremige Sesampaste ist die Basis für das Dressing und verleiht der Bowl einen nussigen, orientalischen Geschmack."
      },
      {
        title: "Buntes Gemüse",
        description: "Je bunter, desto besser! Verschiedene Farben bedeuten verschiedene Nährstoffe - ein Regenbogen auf dem Teller."
      }
    ],
    funFact: {
      title: "Buddha Bowl Philosophie",
      description: "Buddha Bowls sind nach dem runden Bauch Buddhas benannt und sollen alle Geschmacksrichtungen und Texturen in Harmonie vereinen. Sie repräsentieren das Prinzip der ausgewogenen Ernährung in einer einzigen Schüssel!"
    },
    servingSuggestions: {
      title: "Variationen & Ergänzungen",
      description: "Buddha Bowls lassen sich endlos variieren:",
      items: [
        {
          emoji: "🥜",
          title: "Nüsse & Samen",
          description: "Mandeln, Walnüsse oder Sonnenblumenkerne für extra Crunch."
        },
        {
          emoji: "🫘",
          title: "Hülsenfrüchte",
          description: "Kichererbsen, schwarze Bohnen oder Edamame für mehr Protein."
        },
        {
          emoji: "🌿",
          title: "Frische Kräuter",
          description: "Koriander, Minze oder Petersilie für Frische und Aroma."
        }
      ],
      note: "Das Geheimnis einer guten Buddha Bowl liegt in der Balance von Proteinen, gesunden Fetten und komplexen Kohlenhydraten."
    },
    whyFavorite: {
      title: "Warum Buddha Bowls so beliebt sind",
      reasons: [
        {
          title: "Nährstoff-Powerhouse",
          description: "Eine perfekte Kombination aus Vitaminen, Mineralien, Proteinen und gesunden Fetten in einer Schüssel."
        },
        {
          title: "Meal Prep Champion",
          description: "Alle Komponenten lassen sich vorbereiten und individuell zusammenstellen - perfekt für die Woche."
        },
        {
          title: "Instagram-tauglich",
          description: "So bunt und schön, dass jede Bowl ein kleines Kunstwerk ist - perfekt für Social Media."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Regenbogen im Schälchen!",
      subText: "Gesund war nie so schön",
      signature: "♥ Veggie Team"
    }
  },
  {
    id: 11,
    slug: "vegetarisches-chili-sin-carne",
    title: "Vegetarisches Chili sin Carne",
    description: "Feurig-würziges Chili mit verschiedenen Bohnen, Gemüse und mexikanischen Gewürzen. Proteinreich, sättigend und voller Geschmack.",
    image: "/images/MainCourses/vegetarisches-chili-sin-carne.jpeg",
    category: "Hauptgerichte",
    tags: ["Chili", "Mexikanisch", "Bohnen", "Scharf", "Proteinreich", "Vegan"],
    prepTime: 20,
    cookingTime: 45,
    servings: 6,
    rating: 4.7,
    reviews: 198,
    ingredients: [
      { amount: 2, unit: "EL", name: "Olivenöl" },
      { amount: 2, unit: "Stück", name: "Zwiebeln, gewürfelt" },
      { amount: 3, unit: "Zehen", name: "Knoblauch, gehackt" },
      { amount: 2, unit: "Stück", name: "Paprika, gewürfelt" },
      { amount: 2, unit: "Stück", name: "Karotten, gewürfelt" },
      { amount: 400, unit: "g", name: "Kidneybohnen (Dose)" },
      { amount: 400, unit: "g", name: "Schwarze Bohnen (Dose)" },
      { amount: 400, unit: "g", name: "Mais (Dose)" },
      { amount: 800, unit: "g", name: "Tomaten, gehackt (Dose)" },
      { amount: 3, unit: "EL", name: "Tomatenmark" },
      { amount: 2, unit: "TL", name: "Chilipulver" },
      { amount: 1, unit: "TL", name: "Kreuzkümmel" },
      { amount: 1, unit: "TL", name: "Paprikapulver" },
      { amount: 1, unit: "TL", name: "Oregano" },
      { amount: 200, unit: "ml", name: "Gemüsebrühe" },
      { amount: "", unit: "", name: "Salz und Pfeffer" },
      { amount: "", unit: "Bund", name: "Koriander" }
    ],
    instructions: [
      "Olivenöl in einem großen Topf erhitzen. Zwiebeln und Knoblauch glasig anbraten.",
      "Paprika und Karotten hinzufügen, 5 Minuten mitbraten.",
      "Tomatenmark und alle Gewürze einrühren, 2 Minuten rösten.",
      "Tomaten, Bohnen, Mais und Brühe hinzufügen. Aufkochen lassen.",
      "Hitze reduzieren und 35-40 Minuten köcheln lassen, bis das Chili eingedickt ist.",
      "Mit Salz und Pfeffer abschmecken. Mit frischem Koriander garnieren.",
      "Mit Reis, Brot oder Tortilla-Chips servieren."
    ],
    nutrition: {
      calories: 285,
      protein: "14g",
      carbs: "48g",
      fat: "6g"
    },
    tips: [
      "Bohnen aus der Dose abspülen, um überschüssiges Salz zu entfernen",
      "Das Chili schmeckt am nächsten Tag noch besser - perfekt zum Vorkochen"
    ],
    seo_title: "Vegetarisches Chili sin Carne - Mexikanisches Bohnen-Chili",
    seo_keywords: ["Chili sin Carne", "vegetarisch", "Bohnen", "mexikanisch", "scharf", "vegan"],
    createdDate: new Date('2024-01-18'),
    updatedDate: new Date('2024-01-24'),
    introductionParagraph: "Dieses feurige vegetarische Chili sin Carne beweist, dass man kein Fleisch braucht für ein richtig gutes Chili! Mit verschiedenen Bohnensorten, frischem Gemüse und einer perfekt abgestimmten Gewürzmischung wird es zum ultimativen Comfort Food für kalte Tage.",
    additionalParagraph: "Das Geheimnis eines guten Chilis liegt in der Geduld beim Schmoren und der richtigen Balance der Gewürze. Die verschiedenen Bohnensorten sorgen für Abwechslung in der Textur und liefern jede Menge pflanzliches Protein.",
    images: {
      image1: "/images/MainCourses/bestes-chili-con-carne-vegetarisch.jpeg",
      image2: "/images/MainCourses/chili-con-carne-vegetarisch-rezept.jpeg",
      image3: "/images/MainCourses/veganes-chili-con-carne-mit-linsen.jpeg",
      image4: "/images/MainCourses/einfaches-veganes-chili.jpeg",
      image5: "/images/MainCourses/veganes-chili-sin-carne-mit-linsen.jpeg",
      image6: "/images/MainCourses/chili-con-carne-vegetarisch-rote-linsen.jpeg",
      image7: "/images/MainCourses/rezept-chili-con-carne-vegetarisch-linsen.jpeg",
      imageIngredient: "/images/Ingredients/veganes-chili-sin-carne-mit-linsen-zutaten.jpeg"
    },
    ingredientsNeeded: [
      {
        title: "Verschiedene Bohnensorten",
        description: "Die Mischung aus Kidney- und schwarzen Bohnen sorgt für Abwechslung in Geschmack und Textur. Beide sind reich an Protein und Ballaststoffen."
      },
      {
        title: "Mexikanische Gewürze",
        description: "Chilipulver, Kreuzkümmel und Oregano sind das Herzstück des authentischen Geschmacks - nicht sparen!"
      }
    ],
    funFact: {
      title: "Chili-Geschichte",
      description: "Chili con Carne bedeutet übersetzt 'Chili mit Fleisch' - unser 'Chili sin Carne' heißt also 'Chili ohne Fleisch'! Interessant: In Texas, wo Chili herkommt, werden traditionell gar keine Bohnen verwendet. Wir machen unser eigenes Ding!"
    },
    servingSuggestions: {
      title: "Mexikanisch serviert mit",
      description: "Chili sin Carne wird perfekt ergänzt durch:",
      items: [
        {
          emoji: "🍚",
          title: "Reis",
          description: "Basmatireis oder mexikanischer Cilantro-Lime-Rice als Basis."
        },
        {
          emoji: "🥑",
          title: "Avocado",
          description: "Frische Avocado-Scheiben oder Guacamole kühlen die Schärfe."
        },
        {
          emoji: "🧀",
          title: "Käse & Sauerrahm",
          description: "Geriebener Käse und ein Klecks Sauerrahm machen es cremig."
        }
      ],
      note: "Mit Tortilla-Chips als Dip oder in warmen Tortillas als Burrito-Füllung - einfach vielseitig!"
    },
    whyFavorite: {
      title: "Warum Chili sin Carne rockt",
      reasons: [
        {
          title: "Protein-Powerhouse",
          description: "Bohnen liefern hochwertiges pflanzliches Protein und machen das Chili richtig sättigend."
        },
        {
          title: "Meal Prep König",
          description: "Lässt sich perfekt in großen Mengen kochen und einfrieren - immer ein gesundes Essen parat."
        },
        {
          title: "Wärmt von innen",
          description: "Die Gewürze und die Schärfe wärmen an kalten Tagen und machen richtig glücklich."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "¡Muy caliente y delicioso!",
      subText: "Mexiko lässt grüßen",
      signature: "♥ Veggie Team"
    }
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}