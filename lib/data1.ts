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
  images: {
    imageIngredient: string
    image1: string
    image2: string
    image3: string
    image4: string
    image5: string
  }
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
    "introductionParagraph": "Backen von Flammkuchen ist in dieser Jahreszeit eine meiner liebsten Beschäftigungen in der Küche. Es ist so einfach und stressfrei, und dabei füllt der knusprige, goldbraune Teig das ganze Haus mit herrlichen Aromen. Und das Beste daran? Du kannst ihn nach Belieben mit deinen Lieblingszutaten belegen, und er schmeckt immer köstlich. Dieser vegetarische Flammkuchen ist mein absoluter Favorit – ein dünner, knuspriger Boden, bedeckt mit einer cremigen Mischung, süß karamellisierten Zwiebeln und einer großzügigen Portion Käse. Es ist ein einfaches, aber unglaublich leckeres Gericht, das jeder Mahlzeit eine besondere Note verleiht. Und das Beste: Es ist so einfach zuzubereiten und das Ergebnis ist so zufriedenstellend, dass du ihn immer wieder machen wirst!",
    "additionalParagraph": "Jedes Mal, wenn ich einen Flammkuchen zubereite, überkommt mich ein Gefühl der Nostalgie. Es erinnert mich an gemütliche Abende mit Freunden und Familie, an unbeschwerte Zeiten, in denen wir zusammen saßen, gelacht haben und uns einfach gut fühlten. Der Duft des frisch gebackenen Flammkuchens, der durch die Küche zieht, lässt mich an all diese schönen Momente zurückdenken. Besonders dieser vegetarische Flammkuchen hat für mich eine besondere Bedeutung. Die Kombination aus dem knusprigen Teig, den karamellisierten Zwiebeln und der cremigen Basis ist nicht nur eine Gaumenfreude, sondern auch ein Stück Heimat. Es fühlt sich an, als würde jeder Bissen ein Stück Glück auf meinem Teller bringen. Und wenn ich dann mit den Menschen, die mir am meisten bedeuten, am Tisch sitze und den Flammkuchen genieße, weiß ich: Es gibt nichts Schöneres.",
    "ingredientsNeeded": [
      {
        "title": "Flammkuchenteig",
        "description": "Eine einfache Kombination aus Mehl, warmem Wasser, Olivenöl, Salz, Zucker und ein wenig Backpulver für den perfekten dünnen, knusprigen Boden. Er ist einfach zuzubereiten und gelingt immer perfekt!"
      },
      {
        "title": "Crème Fraîche",
        "description": "Die cremige Basis, die den Flammkuchen besonders lecker macht. Du kannst auch vegane Sahnealternativen verwenden, wenn du eine pflanzliche Version bevorzugst."
      },
      {
        "title": "Dijon-Senf",
        "description": "Ein Löffel Dijon-Senf gibt der cremigen Basis einen leichten, würzigen Kick und verleiht dem Flammkuchen das besondere Etwas."
      },
      {
        "title": "Zwiebeln",
        "description": "Süße, goldene Zwiebeln, die perfekt karamellisiert sind. Der langsame Kochprozess bringt ihre natürliche Süße hervor und fügt dem Flammkuchen eine wunderbare Tiefe hinzu."
      },
      {
        "title": "Käse",
        "description": "Gruyère oder Emmentaler Käse ist ideal für die klassische, schmelzende Käseschicht. Du kannst auch eine vegane Käsealternative verwenden, wenn du eine vollständig pflanzliche Version machen möchtest."
      },
      {
        "title": "Olivenöl",
        "description": "Zum Anbraten der Zwiebeln und zum Bestreichen des Teiges, damit er die goldene Farbe erhält."
      },
      {
        "title": "Thymian",
        "description": "Eine Prise getrockneter Thymian verleiht dem Flammkuchen ein aromatisches, erdiges Flair, das wunderbar mit den karamellisierten Zwiebeln und dem Käse harmoniert."
      },
      {
        "title": "Frische Petersilie",
        "description": "Ein wenig frische Petersilie am Ende bringt Farbe und einen frischen, krautigen Geschmack."
      },
      {
        "title": "Optionale Beläge",
        "description": "Wenn du kreativ werden möchtest, passen Pilze wie Champignons oder Shiitake, frischer Rosmarin oder sogar Basilikum wunderbar und verleihen dem Flammkuchen eine zusätzliche Geschmacksebene."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Der Grundteig",
        "description": "Ein hauchdünner, knuspriger Teig ist das Fundament für einen perfekten Flammkuchen. Die Kombination aus Mehl, Wasser und einem Schuss Olivenöl macht den Teig geschmeidig und beim Backen wunderbar knusprig.",
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
    },
    "tips": [
      "Für eine vegane Variante kannst du die Crème fraîche durch pflanzliche Sahne ersetzen und den Käse weglassen oder durch veganen Käse austauschen.",
      "Füge Pilze, Spinat oder Paprika hinzu, um den Belag abwechslungsreicher zu gestalten.",
      "Serviere den Flammkuchen mit einem frischen Salat oder einem Glas Weißwein für ein komplettes Mahlzeiterlebnis.",
      "Der Teig lässt sich auch einfrieren – einfach zwischen Backpapier legen und in einem Gefrierbeutel aufbewahren."
    ],
    "whyFavorite": {
      "title": "Warum mein Flammkuchen ein echtes Lieblingsgericht ist",
      "reasons": [
        {
          "title": "Knuspriger Teig und cremiger Belag",
          "description": "Die perfekte Kombination aus hauchdünnem, knusprigem Teig und einer cremigen Basis."
        },
        {
          "title": "Schnell und einfach zuzubereiten",
          "description": "In nur 30 Minuten von der Zubereitung bis zum Servieren."
        },
        {
          "title": "Perfekt für Partys oder als Hauptgericht",
          "description": "Eignet sich hervorragend zum Teilen oder als vollwertige Mahlzeit."
        },
        {
          "title": "Vegetarisch, aber auch mit Speck oder Schinken möglich",
          "description": "Flexibel anpassbar an verschiedene Ernährungsweisen."
        },
        {
          "title": "Kann mit verschiedenen Zutaten variiert werden",
          "description": "Von klassischen Zwiebeln bis zu Pilzen oder Käse – der Kreativität sind keine Grenzen gesetzt."
        },
        {
          "title": "Ideal zum Vorbereiten – Meal Prep geeignet",
          "description": "Der Teig kann vorgeknetet und eingefroren werden."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Und jetzt lass dir meinen Flammkuchen richtig gut schmecken!",
      "subText": "Ich bin schon ganz gespannt auf dein Feedback!",
      "signature": "Dein Veggie-Rezepte Team"
    },
    steps: [
      {
        title: "Schritt 1: Die Kunst des Teiges",
        description: "Der hauchdünne, knusprige Teig ist das Fundament eines authentischen Flammkuchens. Die perfekte Mischung aus Mehl, Wasser, Öl und einer Prise Salz ergibt einen Teig, der beim Backen wunderbar knusprig wird."
      },
      {
        title: "Schritt 2: Die Aromenbasis",
        description: "Die Schmand-Crème-fraîche-Mischung bildet die cremige Grundlage, die mit einer Prise Muskat und frisch gemahlenem Pfeffer verfeinert wird. Darauf werden hauchdünn geschnittene Zwiebeln verteilt, die beim Backen karamellisieren und ihr süßlich-würziges Aroma entfalten."
      },
      {
        title: "Schritt 3: Die Verfeinerung",
        description: "Fein gewürfelter Speck verleiht dem Flammkuchen seine charakteristische, herzhafte Note. Optional können auch Lauchzwiebeln oder frische Kräuter den Geschmack abrunden."
      },
      {
        title: "Schritt 4: Die Backtechnik",
        description: "Der Schlüssel zum Erfolg liegt in der hohen Backtemperatur von 250°C. In nur 12-15 Minuten verwandelt sich der Teig in eine knusprige Köstlichkeit mit perfekt gebräunten Rändern."
      }
    ],
    servingSuggestion: "Am besten schmeckt der Flammkuchen direkt aus dem Ofen, wenn der Teig noch knusprig und die Zwiebeln goldbraun sind. Traditionell wird er mit einem Glas Weißwein oder Riesling serviert.",
    images: {
      imageIngredient: "/images/Ingredients/flammkuchen-ingredients.webp",
      image1: "/images/Miscellaneous/kartoffelpuffer1.jpeg",
      image2: "/images/Miscellaneous/kartoffelpuffer2.jpeg",
      image3: "/images/Miscellaneous/kartoffelpuffer3.jpeg",
      image4: "/images/Miscellaneous/kartoffelpuffer4.jpeg",
      image5: "/images/Miscellaneous/kartoffelpuffer5.jpeg" 
    }
  },
  {
    title: "Kartoffelpuffer",
    image: "/images/Miscellaneous/kartoffelpuffer.webp",
    prepTime: "25 Min",
    rating: 5.0,
    category: "Hauptgerichte",
    slug: "kartoffelpuffer",
    tags: ["Traditionell", "Kartoffeln", "Snack"],
    servings: 2,
    description: "Knusprige, goldbraune Kartoffelpuffer, verfeinert mit einer milden Zwiebelnote – ein zeitloser Klassiker, der sowohl Groß als auch Klein begeistert. Schnell zuzubereiten und dabei unglaublich lecker!",
    descriptionOnImage: "Knusprige Kartoffelpuffer, perfekt kombiniert mit Apfelmus – ein traditionelles, geliebtes Gericht.",
    introductionParagraph: "Kartoffelpuffer, in einigen Regionen auch Reibekuchen oder Reiberdatschi genannt, sind ein Klassiker der deutschen Küche, der auch in vielen Nachbarländern sehr geschätzt wird. Außen schön knusprig und innen wunderbar weich, dazu eine zarte Zwiebelnote – einfach ein Genuss. Ob süß mit Apfelmus oder herzhaft mit cremigen Dips, sie sind immer eine Freude für den Gaumen.",
    additionalParagraph: "Jedes Mal, wenn ich einen Flammkuchen zubereite, überkommt mich ein Gefühl der Nostalgie. Es erinnert mich an gemütliche Abende mit Freunden und Familie, an unbeschwerte Zeiten, in denen wir zusammen saßen, gelacht haben und uns einfach gut fühlten. Der Duft des frisch gebackenen Flammkuchens, der durch die Küche zieht, lässt mich an all diese schönen Momente zurückdenken. Besonders dieser vegetarische Flammkuchen hat für mich eine besondere Bedeutung. Die Kombination aus dem knusprigen Teig, den karamellisierten Zwiebeln und der cremigen Basis ist nicht nur eine Gaumenfreude, sondern auch ein Stück Heimat. Es fühlt sich an, als würde jeder Bissen ein Stück Glück auf meinem Teller bringen. Und wenn ich dann mit den Menschen, die mir am meisten bedeuten, am Tisch sitze und den Flammkuchen genieße, weiß ich: Es gibt nichts Schöneres.",
    ingredientsNeeded: [
      {
        title: "Kartoffeln",
        description: "Festkochende oder mehligkochende Kartoffeln, frisch gerieben für den besten Geschmack und die perfekte Textur."
      },
      {
        title: "Zwiebeln",
        description: "Fein gehackte Zwiebeln geben den Kartoffelpuffern ihre charakteristische Note und machen sie besonders aromatisch."
      },
      {
        title: "Eier",
        description: "Frische Eier binden den Teig und sorgen dafür, dass die Kartoffelpuffer beim Braten nicht zerfallen."
      },
      {
        title: "Mehl",
        description: "Eine kleine Menge Mehl hilft dabei, den Teig zu binden und macht die Kartoffelpuffer schön knusprig."
      },
      {
        title: "Gewürze",
        description: "Salz und frisch gemahlener Pfeffer zum Abschmecken. Optional auch etwas Muskatnuss für eine zusätzliche Geschmacksnote."
      },
      {
        title: "Öl zum Braten",
        description: "Neutrales Pflanzenöl oder Butterschmalz für das perfekte Bratergebnis und eine goldbraune Kruste."
      }
    ],
    ingredientGroups: [
      {
        title: "Der Kartoffelpuffer-Teig",
        description: "Ein einfach zuzubereitender, klassischer Teig mit wenigen, preiswerten Zutaten, die man fast immer zu Hause hat.",
        ingredients: [
          { amount: 700, "unit": "g", "name": "Kartoffeln, geschält und gerieben" },
          { amount: 1, "unit": "", "name": "Zwiebel, fein gehackt" },
          { amount: 1.5, "unit": "EL", "name": "Kichererbsenmehl (oder Sojamehl), vermischt mit 2 EL Wasser" },
          { amount: 3, "unit": "EL", "name": "Mehl" },
          { amount: 1, "unit": "Prise", "name": "Muskatnuss" },
          { amount: 1, "unit": "Prise", "name": "Salz" },
          { amount: 1, "unit": "Prise", "name": "Pfeffer" },
          { amount: undefined, "unit": "", "name": "Öl (z.B. Rapsöl, Sonnenblumenöl oder Pflanzenöl)" }
        ]
      }
    ],
    ingredients: [
      { amount: 700, "unit": "g", "name": "Kartoffeln, geschält und gerieben" },
      { amount: 1, "unit": "", "name": "Zwiebel, fein gehackt" },
      { amount: 1.5, "unit": "EL", "name": "Kichererbsenmehl (oder Sojamehl), vermischt mit 2 EL Wasser" },
      { amount: 3, "unit": "EL", "name": "Mehl" },
      { amount: 1, "unit": "Prise", "name": "Muskatnuss" },
      { amount: 1, "unit": "Prise", "name": "Salz" },
      { amount: 1, "unit": "Prise", "name": "Pfeffer" },
      { amount: undefined, "unit": "", "name": "Öl (z.B. Rapsöl, Sonnenblumenöl oder Pflanzenöl)" }
    ],
    instructions: [
      "Die geriebenen Kartoffeln gut ausdrücken, um überschüssige Flüssigkeit zu entfernen.",
      "Kartoffeln und die fein gehackte Zwiebel in eine große Schüssel geben und mit dem vorbereiteten Kichererbsenmehl gut vermengen.",
      "Mehl, Muskatnuss, Salz und Pfeffer hinzufügen und alles zu einem gleichmäßigen Teig vermengen.",
      "Öl in einer beschichteten Pfanne erhitzen.",
      "Mit einem Esslöffel den Teig in die Pfanne geben und zu flachen, runden Fladen formen.",
      "Die Kartoffelpuffer von beiden Seiten goldbraun und knusprig braten.",
      "Mit Apfelmus oder einem Deiner liebsten Dips servieren. Auch ohne Beilage schmecken sie hervorragend!"
    ],
    whyFavorite: {
      title: "Warum dieses Kartoffelpuffer-Rezept besonders ist",
      reasons: [
        {
          title: "Schnell und einfach zuzubereiten",
          description: "Mit wenigen Zutaten lässt sich dieses Gericht im Handumdrehen zubereiten – perfekt für ein schnelles Abendessen oder einen kleinen Snack zwischendurch."
        },
        {
          title: "Knusprig und aromatisch",
          description: "Außen knusprig, innen zart und mit einer feinen Zwiebelnote – einfach unwiderstehlich."
        },
        {
          title: "Vielseitig und flexibel",
          description: "Ob süß mit Apfelmus oder herzhaft mit einem cremigen Dip – Kartoffelpuffer passen immer und sind wahre Allrounder in der Küche."
        }
      ]
    },
    handwrittenMessage: {
      mainText: "Guten Appetit! Lass Dir meine Kartoffelpuffer schmecken!",
      subText: "Ich bin gespannt auf Dein Feedback und Deine eigenen Variationen!",
      signature: "Dein Veggie-Rezepte Team"
    },
    steps: [
      {
        title: "Schritt 1: Die Vorbereitung",
        description: "Kartoffeln schälen, reiben und gut ausdrücken, damit die überschüssige Flüssigkeit entfernt wird. Die Zwiebel fein hacken."
      },
      {
        title: "Schritt 2: Der Teig",
        description: "Alle Zutaten gut miteinander vermengen, sodass ein geschmeidiger Teig entsteht."
      },
      {
        title: "Schritt 3: Das Braten",
        description: "Öl in einer Pfanne erhitzen und die Kartoffelpuffer von beiden Seiten goldbraun braten."
      },
      {
        title: "Schritt 4: Das Servieren",
        description: "Die frisch gebratenen Kartoffelpuffer mit Apfelmus oder Deinem Lieblingsdip servieren und genießen!"
      }
    ],
    servingSuggestion: "Am besten direkt heiß servieren, begleitet von Apfelmus oder einem leckeren, cremigen Dip.",
    nutrition: {
      calories: 803,
      protein: "20.6g",
      carbs: "157.5g",
      fat: "13.2g"
    },
    tips: [
      "Achte darauf, die Kartoffeln gut auszudrücken, damit die Puffer schön knusprig werden.",
      "Für ein zusätzliches Aroma kannst Du frische Kräuter wie Petersilie oder Schnittlauch in den Teig einarbeiten.",
      "Wenn Du die Puffer noch knuspriger haben möchtest, füge einen Esslöffel Semmelbrösel hinzu."
    ],
    images: {
      imageIngredient: "/images/Ingredients/kartoffelpufferIngredient.jpeg",
      image1: "/images/Miscellaneous/kartoffelpuffer1.jpeg",
      image2: "/images/Miscellaneous/kartoffelpuffer2.jpeg",
      image3: "/images/Miscellaneous/kartoffelpuffer3.jpeg",
      image4: "/images/Miscellaneous/kartoffelpuffer4.jpeg",
      image5: "/images/Miscellaneous/kartoffelpuffer5.jpeg" 
    }
  }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}