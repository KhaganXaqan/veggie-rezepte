// First, let's define the type for a recipe
export type Recipe = {
  title: string
  seo_title: string
  image: string
  prepTime?: number
  cookingTime?: number
  seo_keywords: string[]
  rating?: number
  reviews?: number
  category: string
  slug: string
  tags: string[]
  createdDate: Date
  updatedDate: Date
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
    "title": "Flammkuchen",
    "seo_title": "Herzhafter vegetarischer Flammkuchen mit cremiger Basis",
    "image": "/images/MainCourses/flammkuchen.webp",
    "prepTime": 30,
    "cookingTime": 12,
    "seo_keywords": [
      "Flammkuchen Rezept",
      "Vegetarischer Flammkuchen",
      "Flammkuchen selber machen",
      "Flammkuchen ohne Speck",
      "Flammkuchen traditionell"
    ],
    "rating": 4.3,
    "reviews": 133,
    "category": "Hauptgerichte",
    "slug": "flammkuchen",
    "tags": ["Traditionell", "Hauptgerichte", "Flammkuchen"],
    "createdDate": new Date('2025-02-17T00:00:00'),
    "updatedDate": new Date('2025-03-20T00:00:00'),
    "servings": 2,
    "description": "Knuspriger vegetarischer Flammkuchen in 30 Min.! Hauchdünner Teig, cremige Basis & würzige Zwiebeln – einfach, lecker & perfekt für alle Flammkuchen-Fans!",
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
          { "amount": 50, "unit": "g", "name": "Crème fraîche" },
          { "amount": 0.5, "unit": "EL", "name": "Dijon-Senf" }
        ]
      },
      {
        "title": "Der würzige Belag",
        "description": "Die Zwiebeln werden beim Backen leicht karamellisiert und entwickeln eine natürliche Süße. Der Gruyère oder Emmentaler sorgt für den perfekten würzigen Abschluss.",
        "ingredients": [
          { "amount": 0.5, "unit": "", "name": "Zwiebel (dünn geschnitten)" },
          { "amount": 25, "unit": "g", "name": "Gruyère oder Emmentaler (gerieben)" },
          { "amount": 1, "unit": "Prise", "name": "Thymian" },
          { "amount": 1, "unit": "Prise", "name": "Salz" },
          { "amount": undefined, "unit": "", "name": "Pfeffer (nach Geschmack)" }
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
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": undefined, "unit": "", "name": "Pfeffer (nach Geschmack)" }
    ],
    "instructions": [
      "Den Backofen auf 250°C vorheizen. Ein Backblech mit Backpapier auslegen.",
      "Für den Teig Mehl, Wasser, Olivenöl und Salz in einer Schüssel zu einem glatten Teig verkneten. Den Teig dünn ausrollen und auf das Backblech legen.",
      "Die Crème fraîche mit dem Dijon-Senf vermischen und gleichmäßig auf dem Teig verteilen. Mit Salz und Pfeffer würzen.",
      "Die dünn geschnittenen Zwiebeln gleichmäßig auf der Crème fraîche verteilen. Den geriebenen Käse und den Thymian darüberstreuen.",
      "Den Flammkuchen im vorgeheizten Ofen für 10–12 Minuten backen, bis der Rand knusprig und der Käse goldbraun ist.",
      "Mit frischer Petersilie bestreuen und heiß servieren."
    ],
    "nutrition": {
      "calories": 285,
      "protein": "7g",
      "carbs": "40g",
      "fat": "7g"
    },
    "tips": [
      "Für eine vegane Variante kannst du die Crème fraîche durch pflanzliche Sahne ersetzen und den Käse weglassen oder durch veganen Käse austauschen.",
      "Füge Pilze, Spinat oder Paprika hinzu, um den Belag abwechslungsreicher zu gestalten.",
      "Serviere den Flammkuchen mit einem frischen Salat oder einem Glas Weißwein für ein komplettes Mahlzeiterlebnis.",
      "Der Teig lässt sich auch einfrieren – einfach zwischen Backpapier legen und in einem Gefrierbeutel aufbewahren.",
      "Tomaten, Oliven und Feta-Käse verleihen dem Flammkuchen eine mediterrane Geschmacksrichtung.",
      "Brokkoli passt ebenfalls hervorragend und sorgt für eine frische, leicht knackige Note."
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
    "steps": [
      {
        "title": "Schritt 1: Die Kunst des Teiges",
        "description": "Der hauchdünne, knusprige Teig ist das Fundament eines authentischen Flammkuchens. Die perfekte Mischung aus Mehl, Wasser, Öl und einer Prise Salz ergibt einen Teig, der beim Backen wunderbar knusprig wird."
      },
      {
        "title": "Schritt 2: Die Aromenbasis",
        "description": "Die Schmand-Crème-fraîche-Mischung bildet die cremige Grundlage, die mit einer Prise Muskat und frisch gemahlenem Pfeffer verfeinert wird. Darauf werden hauchdünn geschnittene Zwiebeln verteilt, die beim Backen karamellisieren und ihr süßlich-würziges Aroma entfalten."
      },
      {
        "title": "Schritt 3: Die Verfeinerung",
        "description": "Fein gewürfelter Speck verleiht dem Flammkuchen seine charakteristische, herzhafte Note. Optional können auch Lauchzwiebeln oder frische Kräuter den Geschmack abrunden."
      },
      {
        "title": "Schritt 4: Die Backtechnik",
        "description": "Der Schlüssel zum Erfolg liegt in der hohen Backtemperatur von 250°C. In nur 12-15 Minuten verwandelt sich der Teig in eine knusprige Köstlichkeit mit perfekt gebräunten Rändern."
      }
    ],
    "servingSuggestion": "Am besten schmeckt der Flammkuchen direkt aus dem Ofen, wenn der Teig noch knusprig und die Zwiebeln goldbraun sind. Traditionell wird er mit einem Glas Weißwein oder Riesling serviert.",
    "servingSuggestions": {
      "title": "Was du zu vegetarischem Flammkuchen servieren kannst",
      "description": "Der vegetarische Flammkuchen ist für sich schon ein echtes Highlight, aber mit den richtigen Beilagen wird das Ganze noch besser!",
      "note": "Egal, wofür du dich entscheidest – der vegetarische Flammkuchen bleibt der Star auf deinem Teller!",
      "items": [
        {
          "emoji": "🧑‍🍳",
          "title": "Ein frischer Beilagensalat",
          "description": "Ein einfacher Rucola- oder Feldsalat mit einem leichten Zitronen-Olivenöl-Dressing passt perfekt und sorgt für einen schönen, frischen Kontrast zum knusprigen, herzhaften Flammkuchen."
        },
        {
          "emoji": "🍷",
          "title": "Ein gutes Glas Weißwein",
          "description": "Flammkuchen und ein kühler, trockener Weißwein – das ist einfach eine unschlagbare Kombination. Besonders gut passen ein Riesling oder ein Pinot Blanc."
        },
        {
          "emoji": "🍲",
          "title": "Eine wärmende Suppe",
          "description": "Wenn es draußen kühler ist, kannst du den Flammkuchen wunderbar mit einer cremigen Kürbissuppe oder einer würzigen Tomatensuppe kombinieren."
        },
        {
          "emoji": "🥖",
          "title": "Knuspriges Baguette",
          "description": "Für den extra Genuss kannst du noch ein Stück frisches Baguette dazu reichen – perfekt, um die restliche Crème fraîche-Basis vom Flammkuchen aufzutunken."
        },
        {
          "emoji": "🌿",
          "title": "Antipasti",
          "description": "Gegrilltes Gemüse wie Zucchini, Auberginen oder Paprika bringt noch mehr mediterrane Aromen auf den Tisch und ergänzt den Flammkuchen perfekt."
        }
      ]
    },
    funFact: {
      title: "Fun Fact",
      description: "Wusstest du, dass der Flammkuchen ursprünglich als „Test-Teig“ genutzt wurde? 🔥 Früher haben Bäcker einen dünnen Teig in den Holzofen geschoben, um die Temperatur zu prüfen – wenn er in wenigen Minuten knusprig wurde, war der Ofen perfekt vorgeheizt! So entstand ganz nebenbei das köstliche Rezept für Flammkuchen. Heute gibt es ihn in vielen Variationen, aber ein vegetarischer Flammkuchen mit cremiger Basis und karamellisierten Zwiebeln ist einfach unschlagbar! 😍"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/flammkuchenIngredient.webp",
      "image1": "/images/MainCourses/flammkuchen1.webp",
      "image2": "/images/MainCourses/flammkuchen2.webp",
      "image3": "/images/MainCourses/flammkuchen-variation1.webp",
      "image4": "/images/MainCourses/flammkuchen-variation2.webp",
      "image5": "/images/MainCourses/flammkuchen5.webp",
      "image6": "/images/MainCourses/flammkuchen6.webp",
      "image7": "/images/MainCourses/flammkuchen7.webp",
    }
  },
  {
    "title": "Kartoffelpuffer",
    "seo_title": "Vegetarische Kartoffelpuffer Rezept – Schnell, einfach und knusprig",
    "image": "/images/Miscellaneous/kartoffelpuffer.webp",
    "prepTime": 25,
    "cookingTime": 25,
    "seo_keywords": [
      "Vegetarische Kartoffelpuffer",
      "Kartoffelpuffer vegetarisch",
      "Vegetarisches Reibekuchen Rezept",
      "Kartoffelpuffer ohne Ei"
    ],
    "rating": 5.0,
    "reviews": 120,
    "category": "Hauptgerichte",
    "slug": "kartoffelpuffer",
    "tags": ["Traditionell", "Kartoffeln", "Snack", "Hauptgericht", "Beilage", "Vegetarisch"],
    "createdDate": new Date('2025-02-20T00:00:00'),
    "updatedDate": new Date('2025-03-21T00:00:00'),
    "servings": 4,
    "description": "Fluffige Kartoffelklöße, die mit ihrer zarten Textur und ihrem herzhaften Geschmack jeden überzeugen – perfekt zu Braten, Pilzen oder einfach pur!",
    "descriptionOnImage": "Traditionelle Kartoffelklöße – fluffig, lecker und perfekt zu herzhaften Gerichten.",
    "introductionParagraph": "Kartoffelklöße sind für mich wie ein kleines Wunder in der Küche. Es ist erstaunlich, wie aus einfachen Kartoffeln etwas so Köstliches entstehen kann. Jedes Mal, wenn ich sie zubereite, fühle ich mich wie eine Zauberin, die mit wenigen Zutaten ein Festmahl erschafft. Diese Klöße sind nicht nur eine Beilage – sie sind ein Symbol für Liebe und Hingabe. Ob zu einem festlichen Braten oder zu einer einfachen Pilzsoße, sie machen jedes Gericht zu etwas Besonderem. Und das Beste? Sie sind so einfach zuzubereiten, dass jeder sie nachmachen kann. Egal, ob du ein erfahrener Koch bist oder gerade erst anfängst – diese Klöße werden dich begeistern.",
    "additionalParagraph": "Es gibt etwas so Beruhigendes daran, Kartoffelklöße zuzubereiten. Vielleicht ist es das rhythmische Zerdrücken der Kartoffeln oder der Duft, der durch die Küche zieht, wenn sie im Topf garen. Für mich ist es ein Moment der Achtsamkeit, in dem ich alles andere vergesse und mich ganz auf das Kochen konzentriere. Diese Klöße sind mehr als nur ein Gericht – sie sind eine Einladung, innezuhalten und die kleinen Freuden des Lebens zu genießen. Und wenn ich dann sehe, wie meine Familie und Freunde genüsslich zugreifen, weiß ich, dass ich alles richtig gemacht habe. Kartoffelklöße sind für mich ein Stück Glück auf dem Teller.",
    "ingredientsNeeded": [
      {
        "title": "Kartoffeln",
        "description": "Die Hauptzutat! Am besten eignen sich mehligkochende Kartoffeln, da sie nach dem Reiben eine schöne, bindende Konsistenz ergeben und perfekt knusprig werden."
      },
      {
        "title": "Zwiebeln",
        "description": "Fein geriebene Zwiebeln verleihen den Puffern eine zarte Würze und eine leicht süßliche Note, die den Geschmack abrundet."
      },
      {
        "title": "Mehl",
        "description": "Ein paar Esslöffel Mehl sorgen dafür, dass die Masse gut zusammenhält und die Puffer ihre Form behalten."
      },
      {
        "title": "Kichererbsenmehl",
        "description": "Dient als Bindemittel und verleiht den Puffern eine schöne Konsistenz. Kann auch durch Sojamehl ersetzt werden."
      },
      {
        "title": "Salz und Pfeffer",
        "description": "Für die Grundwürze – einfach, aber essenziell, um den Geschmack der Kartoffeln und Zwiebeln hervorzuheben."
      },
      {
        "title": "Muskatnuss",
        "description": "Verleiht den Puffern eine warme, aromatische Note."
      },
      {
        "title": "Öl oder Butterschmalz",
        "description": "Zum Braten, damit die Puffer schön knusprig und goldbraun werden. Butterschmalz verleiht zusätzlich einen nussigen Geschmack."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Der Kartoffelpuffer-Teig",
        "description": "Ein einfach zuzubereitender, klassischer Teig mit wenigen, preiswerten Zutaten, die man fast immer zu Hause hat.",
        "ingredients": [
          { "amount": 700, "unit": "g", "name": "Kartoffeln, geschält und gerieben" },
          { "amount": 1, "unit": "", "name": "Zwiebel, fein gehackt" },
          { "amount": 1.5, "unit": "EL", "name": "Kichererbsenmehl (oder Sojamehl), vermischt mit 2 EL Wasser" },
          { "amount": 3, "unit": "EL", "name": "Mehl" },
          { "amount": 1, "unit": "Prise", "name": "Muskatnuss" },
          { "amount": 1, "unit": "Prise", "name": "Salz" },
          { "amount": 1, "unit": "Prise", "name": "Pfeffer" },
          { "amount": undefined, "unit": "", "name": "Öl (z.B. Rapsöl, Sonnenblumenöl oder Pflanzenöl)" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 700, "unit": "g", "name": "Kartoffeln, geschält und gerieben" },
      { "amount": 1, "unit": "", "name": "Zwiebel, fein gehackt" },
      { "amount": 1.5, "unit": "EL", "name": "Kichererbsenmehl (oder Sojamehl), vermischt mit 2 EL Wasser" },
      { "amount": 3, "unit": "EL", "name": "Mehl" },
      { "amount": 1, "unit": "Prise", "name": "Muskatnuss" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" },
      { "amount": undefined, "unit": "", "name": "Öl (z.B. Rapsöl, Sonnenblumenöl oder Pflanzenöl)" }
    ],
    "instructions": [
      "Die geriebenen Kartoffeln gut ausdrücken, um überschüssige Flüssigkeit zu entfernen.",
      "Das Kichererbsenmehl mit 2 EL Wasser vermischen, bis eine glatte Paste entsteht.",
      "Kartoffeln, die fein gehackte Zwiebel und die Kichererbsenmehl-Paste in eine große Schüssel geben.",
      "Mehl, Muskatnuss, Salz und Pfeffer hinzufügen und alles zu einem gleichmäßigen Teig vermengen.",
      "Öl in einer beschichteten Pfanne erhitzen.",
      "Mit einem Esslöffel den Teig in die Pfanne geben und zu flachen, runden Fladen formen.",
      "Die Kartoffelpuffer von beiden Seiten goldbraun und knusprig braten.",
      "Mit Apfelmus oder einem Deiner liebsten Dips servieren. Auch ohne Beilage schmecken sie hervorragend!"
    ],
    "nutrition": {
      "calories": 245,
      "protein": "5g",
      "carbs": "40g",
      "fat": "7g"
    },
    "whyFavorite": {
      "title": "Warum dieses Kartoffelpuffer-Rezept besonders ist",
      "reasons": [
        {
          "title": "Schnell und einfach zuzubereiten",
          "description": "Mit wenigen Zutaten lässt sich dieses Gericht im Handumdrehen zubereiten – perfekt für ein schnelles Abendessen oder einen kleinen Snack zwischendurch."
        },
        {
          "title": "Knusprig und aromatisch",
          "description": "Außen knusprig, innen zart und mit einer feinen Zwiebelnote – einfach unwiderstehlich."
        },
        {
          "title": "Vielseitig und flexibel",
          "description": "Ob süß mit Apfelmus oder herzhaft mit einem cremigen Dip – Kartoffelpuffer passen immer und sind wahre Allrounder in der Küche."
        },
        {
          "title": "Tradition trifft Kreativität",
          "description": "Kartoffelpuffer sind ein Klassiker, der sich wunderbar mit neuen Ideen kombinieren lässt – ob mit Käse, Kräutern oder pikanten Gewürzen, der Fantasie sind keine Grenzen gesetzt."
        },
        {
          "title": "Perfekt für Resteverwertung",
          "description": "Kartoffelpuffer sind ideal, um übrig gebliebene Kartoffeln zu verwerten. So wird nichts verschwendet, und es entsteht etwas Köstliches!"
        },
        {
          "title": "Ein Gericht für jede Jahreszeit",
          "description": "Im Winter wärmend und herzhaft, im Sommer leicht und frisch mit einem Salat – Kartoffelpuffer passen zu jeder Jahreszeit und Stimmung."
        },
        {
          "title": "Kindheitserinnerungen auf dem Teller",
          "description": "Kartoffelpuffer erinnern viele an gemütliche Familienessen und die Küche der Großeltern – ein Gericht, das nicht nur satt macht, sondern auch das Herz erwärmt."
        },
        {
          "title": "Perfekt für große und kleine Runden",
          "description": "Egal, ob für ein gemütliches Abendessen zu zweit oder für eine große Runde bei einem Brunch – Kartoffelpuffer sind immer ein Hit und lassen sich leicht in großen Mengen zubereiten."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Guten Appetit! Lass Dir meine knusprigen Kartoffelpuffer schmecken!",
      "subText": "Ich freue mich auf Dein Feedback und Deine kreativen Variationen – ob süß oder herzhaft!",
      "signature": "Dein Veggie-Rezepte Team"
    },
    "steps": [
      {
        "title": "Schritt 1: Die Vorbereitung",
        "description": "Kartoffeln schälen, reiben und gut ausdrücken, damit die überschüssige Flüssigkeit entfernt wird. Die Zwiebel fein hacken."
      },
      {
        "title": "Schritt 2: Der Teig",
        "description": "Alle Zutaten gut miteinander vermengen, sodass ein geschmeidiger Teig entsteht."
      },
      {
        "title": "Schritt 3: Das Braten",
        "description": "Öl in einer Pfanne erhitzen und die Kartoffelpuffer von beiden Seiten goldbraun braten."
      },
      {
        "title": "Schritt 4: Das Servieren",
        "description": "Die frisch gebratenen Kartoffelpuffer mit Apfelmus oder Deinem Lieblingsdip servieren und genießen!"
      }
    ],
    "tips": [
      "Achte darauf, die Kartoffeln gut auszudrücken, damit die Puffer schön knusprig werden.",
      "Für ein zusätzliches Aroma kannst Du frische Kräuter wie Petersilie oder Schnittlauch in den Teig einarbeiten.",
      "Wenn Du die Puffer noch knuspriger haben möchtest, füge einen Esslöffel Semmelbrösel hinzu.",
      "Fein gehackter oder geriebener Knoblauch verleiht den Puffern eine extra würzige Note.",
      "Geriebener Käse wie Gouda oder Parmesan kann unter die Masse gemischt werden, um die Puffer noch herzhafter zu machen.",
      "Für eine pikante Variante kannst Du etwas Paprikapulver oder Chiliflocken hinzufügen.",
      "Übrig gebliebene Kartoffelpuffer lassen sich im Kühlschrank aufbewahren und in der Pfanne oder im Ofen wieder knusprig aufwärmen."
    ],
    "servingSuggestion": "Am besten schmecken Kartoffelpuffer frisch aus der Pfanne, wenn sie außen knusprig und innen weich sind. Traditionell werden sie mit Apfelmus oder einem cremigen Dip serviert.",
    "servingSuggestions": {
      "title": "Was du zu Kartoffelpuffern servieren kannst",
      "description": "Kartoffelpuffer sind an sich schon ein Genuss, aber mit den richtigen Beilagen wird das Ganze noch besser!",
      "note": "Egal, wofür du dich entscheidest – Kartoffelpuffer bleiben der Star auf deinem Teller! Als Hauptgericht reichen 3–4 Puffer pro Person, als Beilage oder Snack genügen 1–2 Puffer.",
      "items": [
        {
          "emoji": "🥗",
          "title": "Ein frischer Beilagensalat",
          "description": "Ein knackiger Gurkensalat oder ein gemischter Salat mit einem leichten Joghurt-Dressing passt perfekt und sorgt für einen frischen Kontrast zu den knusprigen Puffern."
        },
        {
          "emoji": "🍎",
          "title": "Apfelmus",
          "description": "Der Klassiker! Die süß-säuerliche Note des Apfelmus harmoniert wunderbar mit den herzhaften Kartoffelpuffern und schafft eine perfekte Balance."
        },
        {
          "emoji": "🥣",
          "title": "Sauerrahm oder Kräuterquark",
          "description": "Cremig und erfrischend – ob pur oder mit Kräutern verfeinert, diese Dips sind die perfekte Begleitung zu den knusprigen Puffern."
        },
        {
          "emoji": "🍲",
          "title": "Eine warme Suppe",
          "description": "An kühleren Tagen passt eine cremige Kartoffelsuppe oder eine würzige Gemüsesuppe hervorragend zu Kartoffelpuffern und macht das Essen noch gemütlicher."
        },
        {
          "emoji": "🥓",
          "title": "Herzhafte Beilagen",
          "description": "Gebratener Speck, Räucherlachs oder ein Spiegelei ergänzen die Kartoffelpuffer perfekt und machen sie zu einer vollwertigen Mahlzeit."
        },
        {
          "emoji": "🍷",
          "title": "Ein Glas Weißwein",
          "description": "Ein trockener Weißwein wie ein Riesling oder ein Grauburgunder passt hervorragend zu den herzhaften und knusprigen Kartoffelpuffern."
        },
        {
          "emoji": "🧀",
          "title": "Käsevariationen",
          "description": "Geriebener Käse wie Gouda, Emmentaler oder sogar Blauschimmelkäse kann als Topping oder Beilage die Kartoffelpuffer noch herzhafter und interessanter machen."
        }
      ]
    },
    "funFact": {
      "title": "Fun Fact",
      "description": "Wusstest du, dass Kartoffelpuffer eine lange Tradition haben und in vielen Kulturen unter verschiedenen Namen bekannt sind? 🥔 In Deutschland heißen sie je nach Region auch Reibekuchen oder Reiberdatschi, in der Schweiz heißen sie Rösti, und in Polen nennt man sie Placki ziemniaczane. Ursprünglich waren sie eine einfache und günstige Mahlzeit, die aus wenigen Zutaten zubereitet wurde – perfekt, um Reste zu verwerten. In einigen Regionen werden sie auch als Fastenspeise serviert, da sie ohne Fleisch zubereitet werden können. Heute sind sie ein echter Klassiker, der sowohl süß mit Apfelmus als auch herzhaft mit Dips genossen wird. Einfach, aber genial! 😍"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/kartoffelpufferIngredient.webp",
      "image1": "/images/Miscellaneous/kartoffelpuffer1.webp",
      "image2": "/images/Miscellaneous/kartoffelpuffer2.webp",
      "image3": "/images/Miscellaneous/kartoffelpuffer3.webp",
      "image4": "/images/Miscellaneous/kartoffelpuffer4.webp",
      "image5": "/images/Miscellaneous/kartoffelpuffer5.webp",
      "image6": "/images/Miscellaneous/kartoffelpuffer6.webp",
      "image7": "/images/Miscellaneous/kartoffelpuffer7.webp"
    }
  },
  {
    "title": "Gemüsesuppe",
    "seo_title": "Einfache vegetarische Gemüsesuppe Rezept – Schnell und gesund",
    "image": "/images/Soups/gemuesesuppe.webp",
    "prepTime": 20,
    "cookingTime": 30,
    "seo_keywords": [
      "Vegetarische Gemüsesuppe Rezept",
      "Einfache Gemüsesuppe",
      "Gesunde vegetarische Suppe",
      "Vegetarische Suppe",
      "Schnelle Gemüsesuppe"
    ],
    "rating": 4.4,
    "reviews": 150,
    "category": "Suppen",
    "slug": "gemuesesuppe",
    "tags": ["Traditionell", "Suppe", "Gemüse"],
    "createdDate": new Date('2025-02-17T00:00:00'),
    "updatedDate": new Date('2025-03-22T00:00:00'),
    "servings": 4,
    "description": "Eine einfache und gesunde vegetarische Gemüsesuppe, die in weniger als einer Stunde zubereitet ist – perfekt für kalte Tage oder als schnelle Mahlzeit!",
    "descriptionOnImage": "Eine herzhafte vegetarische Gemüsesuppe mit frischem Gemüse und würziger Brühe – gesund, lecker und schnell zubereitet.",
    "introductionParagraph": "Gemüsesuppe ist für mich das ultimative vegetarische Comfort Food. Egal, ob es draußen kalt ist und man sich nach etwas Wärmendem sehnt, oder ob man einfach eine schnelle, gesunde vegetarische Mahlzeit braucht – diese Suppe ist immer die richtige Wahl. Mit einer bunten Mischung aus frischem Gemüse und einer kräftigen vegetarischen Brühe ist sie nicht nur lecker, sondern auch unglaublich nahrhaft. Und das Beste? Du kannst das Rezept ganz einfach anpassen und alle Gemüsereste verwerten, die du im Kühlschrank hast. So wird nichts verschwendet, und es entsteht etwas Köstliches! Diese vegetarische Suppe ist nicht nur eine gesunde Wahl, sondern auch eine, die jeden Geschmack trifft – ob Vegetarier oder nicht.",
    "additionalParagraph": "Jedes Mal, wenn ich eine vegetarische Gemüsesuppe koche, erinnere ich mich an die gemütlichen Abende in meiner Kindheit, an denen meine Mutter diese Suppe zubereitete. Der Duft von frischem Gemüse und Kräutern, der durch die Küche zog, war einfach unwiderstehlich. Es war mehr als nur eine Mahlzeit – es war ein Gefühl von Geborgenheit und Wärme. Diese vegetarische Suppe ist für mich ein Stück Heimat, und ich liebe es, sie mit meinen Liebsten zu teilen. Egal, ob es ein schnelles vegetarisches Mittagessen ist oder ein gemütliches Abendessen, diese Suppe bringt immer ein Lächeln auf die Gesichter meiner Gäste. Und wenn ich dann sehe, wie sie genüsslich löffeln, weiß ich, dass ich alles richtig gemacht habe. Vegetarisch zu kochen bedeutet für mich, bewusst zu genießen und dabei die Umwelt und die Tiere zu schonen – und diese Suppe ist das perfekte Beispiel dafür, wie lecker und erfüllend vegetarische Küche sein kann.",
    "ingredientsNeeded": [
      {
        "title": "Gemüse",
        "description": "Eine bunte Mischung aus Karotten, Sellerie, Lauch und Kartoffeln bildet die Basis dieser vegetarischen Suppe. Du kannst aber auch anderes Gemüse wie Zucchini oder Brokkoli verwenden."
      },
      {
        "title": "Gemüsebrühe",
        "description": "Eine kräftige vegetarische Gemüsebrühe verleiht der Suppe ihren würzigen Geschmack. Du kannst sie selbst machen oder eine hochwertige gekaufte Brühe verwenden."
      },
      {
        "title": "Zwiebeln und Knoblauch",
        "description": "Für eine aromatische Basis, die der Suppe Tiefe verleiht."
      },
      {
        "title": "Tomaten",
        "description": "Frische oder Dosentomaten geben der Suppe eine leicht säuerliche Note und eine schöne Farbe."
      },
      {
        "title": "Kräuter",
        "description": "Frische Petersilie, Thymian und Lorbeerblätter verleihen der Suppe ein herrliches Aroma."
      },
      {
        "title": "Olivenöl",
        "description": "Zum Anbraten des Gemüses und für einen extra Geschmack."
      },
      {
        "title": "Salz und Pfeffer",
        "description": "Für die Grundwürze – einfach, aber essenziell."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Die Gemüsebasis",
        "description": "Eine bunte Mischung aus frischem Gemüse bildet das Herzstück dieser vegetarischen Suppe. Karotten, Sellerie und Lauch sorgen für Süße und Aroma, während Kartoffeln die Suppe sämig machen.",
        "ingredients": [
          { "amount": 2, "unit": "", "name": "Karotten, geschält und gewürfelt" },
          { "amount": 2, "unit": "", "name": "Stangen Sellerie, gewürfelt" },
          { "amount": 1, "unit": "", "name": "Lauch, in Ringe geschnitten" },
          { "amount": 2, "unit": "", "name": "Kartoffeln, geschält und gewürfelt" }
        ]
      },
      {
        "title": "Die aromatische Basis",
        "description": "Zwiebeln, Knoblauch und Tomaten bilden die Grundlage für den würzigen Geschmack der Suppe.",
        "ingredients": [
          { "amount": 1, "unit": "", "name": "Zwiebel, gehackt" },
          { "amount": 2, "unit": "Zehen", "name": "Knoblauch, gehackt" },
          { "amount": 2, "unit": "", "name": "Tomaten, gewürfelt" }
        ]
      },
      {
        "title": "Die Brühe und Gewürze",
        "description": "Vegetarische Gemüsebrühe und frische Kräuter verleihen der Suppe ihren charakteristischen Geschmack.",
        "ingredients": [
          { "amount": 1.5, "unit": "l", "name": "Gemüsebrühe" },
          { "amount": 2, "unit": "Zweige", "name": "Thymian" },
          { "amount": 2, "unit": "", "name": "Lorbeerblätter" },
          { "amount": 1, "unit": "Handvoll", "name": "Petersilie, gehackt" },
          { "amount": 2, "unit": "EL", "name": "Olivenöl" },
          { "amount": 1, "unit": "Prise", "name": "Salz" },
          { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 2, "unit": "", "name": "Karotten, geschält und gewürfelt" },
      { "amount": 2, "unit": "", "name": "Stangen Sellerie, gewürfelt" },
      { "amount": 1, "unit": "", "name": "Lauch, in Ringe geschnitten" },
      { "amount": 2, "unit": "", "name": "Kartoffeln, geschält und gewürfelt" },
      { "amount": 1, "unit": "", "name": "Zwiebel, gehackt" },
      { "amount": 2, "unit": "Zehen", "name": "Knoblauch, gehackt" },
      { "amount": 2, "unit": "", "name": "Tomaten, gewürfelt" },
      { "amount": 1.5, "unit": "l", "name": "Gemüsebrühe" },
      { "amount": 2, "unit": "Zweige", "name": "Thymian" },
      { "amount": 2, "unit": "", "name": "Lorbeerblätter" },
      { "amount": 1, "unit": "Handvoll", "name": "Petersilie, gehackt" },
      { "amount": 2, "unit": "EL", "name": "Olivenöl" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
    ],
    "instructions": [
      "Das Olivenöl in einem großen Topf erhitzen. Zwiebeln und Knoblauch darin anschwitzen, bis sie duften.",
      "Karotten, Sellerie und Lauch hinzufügen und für 5 Minuten anbraten.",
      "Kartoffeln und Tomaten hinzufügen und weitere 2 Minuten braten.",
      "Die vegetarische Gemüsebrühe, Thymian und Lorbeerblätter hinzufügen und alles zum Kochen bringen.",
      "Die Suppe bei mittlerer Hitze 20–25 Minuten köcheln lassen, bis das Gemüse weich ist.",
      "Mit Salz und Pfeffer abschmecken. Die Petersilie unterrühren.",
      "Heiß servieren und genießen!"
    ],
    "nutrition": {
      "calories": 560,
      "protein": "10g",
      "carbs": "84g",
      "fat": "28g"
    },
    "tips": [
      "Für eine cremige Variante kannst du etwas Sahne oder Kokosmilch hinzufügen.",
      "Füge Linsen oder Bohnen hinzu, um die Suppe proteinreicher zu machen.",
      "Serviere die Suppe mit frischem Brot oder Croutons für einen extra Knusper.",
      "Die Suppe lässt sich gut einfrieren und ist perfekt für Meal Prep.",
      "Verwende alle Gemüsereste, die du im Kühlschrank hast – so wird nichts verschwendet!"
    ],
    "whyFavorite": {
      "title": "Warum diese vegetarische Gemüsesuppe ein echtes Lieblingsgericht ist",
      "reasons": [
        {
          "title": "Schnell und einfach zuzubereiten",
          "description": "In weniger als einer Stunde ist diese vegetarische Suppe fertig – perfekt für stressige Tage."
        },
        {
          "title": "Gesund und nahrhaft",
          "description": "Vollgepackt mit frischem Gemüse und ohne künstliche Zusätze – ideal für eine vegetarische Ernährung."
        },
        {
          "title": "Perfekt für Resteverwertung",
          "description": "Ideal, um übrig gebliebenes Gemüse zu verwerten – vegetarisch kochen kann so nachhaltig sein!"
        },
        {
          "title": "Flexibel und anpassbar",
          "description": "Du kannst das Rezept nach Belieben variieren und dein Lieblingsgemüse hinzufügen – vegetarisch kochen ist so kreativ!"
        },
        {
          "title": "Ein Gericht für jede Jahreszeit",
          "description": "Im Winter wärmend, im Sommer leicht und erfrischend – diese vegetarische Suppe passt immer."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lass dir diese vegetarische Gemüsesuppe richtig gut schmecken!",
      "subText": "Ich bin schon gespannt auf dein Feedback!",
      "signature": "Dein Veggie-Rezepte Team"
    },
    "steps": [
      {
        "title": "Schritt 1: Die aromatische Basis",
        "description": "Zwiebeln und Knoblauch in Olivenöl anschwitzen, bis sie duften. Dies bildet die Grundlage für den würzigen Geschmack der Suppe."
      },
      {
        "title": "Schritt 2: Das Gemüse anbraten",
        "description": "Karotten, Sellerie und Lauch hinzufügen und anbraten, bis sie leicht weich sind. Dies verstärkt ihre natürliche Süße."
      },
      {
        "title": "Schritt 3: Die Brühe hinzufügen",
        "description": "Vegetarische Gemüsebrühe, Thymian und Lorbeerblätter hinzufügen und alles zum Kochen bringen. Die Suppe köcheln lassen, bis das Gemüse weich ist."
      },
      {
        "title": "Schritt 4: Abschmecken und servieren",
        "description": "Mit Salz und Pfeffer abschmecken und die Petersilie unterrühren. Heiß servieren und genießen!"
      }
    ],
    "servingSuggestion": "Am besten schmeckt die Suppe frisch zubereitet, wenn das Gemüse noch bissfest und die Brühe heiß ist. Serviere sie mit frischem Brot oder Croutons.",
    "servingSuggestions": {
      "title": "Was du zu vegetarischer Gemüsesuppe servieren kannst",
      "description": "Diese vegetarische Suppe ist an sich schon ein Genuss, aber mit den richtigen Beilagen wird das Ganze noch besser!",
      "note": "Egal, wofür du dich entscheidest – die vegetarische Gemüsesuppe bleibt der Star auf deinem Teller!",
      "items": [
        {
          "emoji": "🥖",
          "title": "Frisches Brot",
          "description": "Ein Stück knuspriges Baguette oder Ciabatta passt perfekt zum Eintunken in die Suppe."
        },
        {
          "emoji": "🧀",
          "title": "Käse",
          "description": "Geriebener Parmesan oder Gouda verleiht der Suppe eine extra herzhafte Note."
        },
        {
          "emoji": "🥗",
          "title": "Ein frischer Salat",
          "description": "Ein einfacher Grüner Salat mit einem leichten Dressing ergänzt die Suppe perfekt."
        },
        {
          "emoji": "🍷",
          "title": "Ein Glas Wein",
          "description": "Ein trockener Weißwein oder ein leichter Rotwein passt hervorragend zu dieser herzhaften Suppe."
        }
      ]
    },
    "funFact": {
      "title": "Fun Fact",
      "description": "Wusstest du, dass Gemüsesuppe schon seit der Antike als Heilmittel verwendet wird? 🥕 In vielen Kulturen gilt sie als „Arznei für die Seele“, da sie nicht nur nahrhaft, sondern auch leicht verdaulich ist. Besonders bei Erkältungen oder Magenverstimmungen ist sie eine beliebte Wahl. Heute ist sie ein Klassiker, der in unzähligen Varianten zubereitet wird – von der einfachen Hausmannskost bis zur Gourmet-Kreation. Einfach, aber genial! 😍"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/gemuesesuppeIngredient.webp",
      "image1": "/images/Soups/gemuesesuppe1.webp",
      "image2": "/images/Soups/gemuesesuppe2.webp",
      "image3": "/images/Soups/gemuesesuppe3.webp",
      "image4": "/images/Soups/gemuesesuppe4.webp",
      "image5": "/images/Soups/gemuesesuppe5.webp",
      "image6": "/images/Soups/gemuesesuppe6.webp",
      "image7": "/images/Soups/gemuesesuppe7.webp"
    }
  },
  {
    "title": "Kartoffelklöße",
    "seo_title": "Vegetarische Kartoffelklöße Rezept – Einfach und lecker",
    "image": "/images/Miscellaneous/kartoffelkloesse.webp",
    "prepTime": 40,
    "cookingTime": 20,
    "seo_keywords": [
      "Vegetarische Kartoffelklöße Rezept",
      "Traditionelle Kartoffelklöße",
      "Kartoffelklöße selber machen",
      "Vegetarische Klöße",
      "Deutsche vegetarische Küche"
    ],
    "rating": 4.1,
    "reviews": 174,
    "category": "Beilagen",
    "slug": "kartoffelkloesse",
    "tags": ["Traditionell", "Beilage", "Kartoffeln"],
    "createdDate": new Date('2025-02-18T00:00:00'),
    "updatedDate": new Date('2025-03-23T00:00:00'),
    "servings": 4,
    "description": "Fluffige vegetarische Kartoffelklöße, die mit ihrer zarten Textur und ihrem herzhaften Geschmack jeden überzeugen – perfekt zu vegetarischen Gerichten!",
    "descriptionOnImage": "Traditionelle vegetarische Kartoffelklöße – fluffig, lecker und perfekt zu herzhaften vegetarischen Gerichten.",
    "introductionParagraph": "Kartoffelklöße sind für mich wie ein kleines Kunstwerk in der vegetarischen Küche. Es ist faszinierend, wie aus einfachen Kartoffeln etwas so Köstliches entstehen kann. Jedes Mal, wenn ich sie zubereite, fühle ich mich wie eine Künstlerin, die mit wenigen Zutaten ein Meisterwerk erschafft. Diese vegetarischen Klöße sind nicht nur eine Beilage – sie sind ein Symbol für Kreativität und Hingabe. Ob zu einer cremigen vegetarischen Pilzsoße oder zu einem würzigen vegetarischen Gulasch, sie machen jedes Gericht zu etwas Besonderem. Und das Beste? Sie sind so einfach zuzubereiten, dass jeder sie nachmachen kann. Egal, ob du ein erfahrener Koch bist oder gerade erst anfängst – diese vegetarischen Klöße werden dich begeistern.",
    "additionalParagraph": "Es gibt etwas so Beruhigendes daran, vegetarische Kartoffelklöße zuzubereiten. Vielleicht ist es das rhythmische Zerdrücken der Kartoffeln oder der Duft, der durch die Küche zieht, wenn sie im Topf garen. Für mich ist es ein Moment der Achtsamkeit, in dem ich alles andere vergesse und mich ganz auf das Kochen konzentriere. Diese vegetarischen Klöße sind mehr als nur ein Gericht – sie sind eine Einladung, innezuhalten und die kleinen Freuden des Lebens zu genießen. Und wenn ich dann sehe, wie meine Familie und Freunde genüsslich zugreifen, weiß ich, dass ich alles richtig gemacht habe. Vegetarische Kartoffelklöße sind für mich ein Stück Glück auf dem Teller.",
    "ingredientsNeeded": [
      {
        "title": "Kartoffeln",
        "description": "Mehligkochende Kartoffeln sind ideal für vegetarische Klöße, da sie nach dem Kochen eine schöne, lockere Konsistenz haben."
      },
      {
        "title": "Salz",
        "description": "Für die Grundwürze – einfach, aber essenziell in der vegetarischen Küche."
      },
      {
        "title": "Muskatnuss",
        "description": "Verleiht den vegetarischen Klößen eine warme, aromatische Note."
      },
      {
        "title": "Stärke",
        "description": "Hilft, die vegetarischen Klöße zu binden und gibt ihnen die perfekte Textur."
      },
      {
        "title": "Ei",
        "description": "Bindet die Masse und sorgt dafür, dass die vegetarischen Klöße ihre Form behalten."
      },
      {
        "title": "Semmelbrösel",
        "description": "Für die klassische vegetarische Variante werden die Klöße in Semmelbröseln gewälzt, um eine knusprige Außenschicht zu bekommen."
      },
      {
        "title": "Butter",
        "description": "Zum Anbraten der Semmelbrösel – für ein extra Aroma in der vegetarischen Küche."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Die Kartoffelmasse",
        "description": "Die Basis für perfekte vegetarische Kartoffelklöße – mehligkochende Kartoffeln, die gekocht und zerdrückt werden, um eine lockere Masse zu erhalten.",
        "ingredients": [
          { "amount": 1, "unit": "kg", "name": "mehligkochende Kartoffeln" },
          { "amount": 1, "unit": "Prise", "name": "Salz" },
          { "amount": 1, "unit": "Prise", "name": "Muskatnuss" }
        ]
      },
      {
        "title": "Die Bindemittel",
        "description": "Stärke und Ei sorgen dafür, dass die vegetarischen Klöße ihre Form behalten und nicht auseinanderfallen.",
        "ingredients": [
          { "amount": 2, "unit": "EL", "name": "Stärke" },
          { "amount": 1, "unit": "", "name": "Ei" }
        ]
      },
      {
        "title": "Die Panade",
        "description": "Semmelbrösel und Butter verleihen den vegetarischen Klößen eine knusprige Außenschicht.",
        "ingredients": [
          { "amount": 100, "unit": "g", "name": "Semmelbrösel" },
          { "amount": 2, "unit": "EL", "name": "Butter" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 1, "unit": "kg", "name": "mehligkochende Kartoffeln" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Muskatnuss" },
      { "amount": 2, "unit": "EL", "name": "Stärke" },
      { "amount": 1, "unit": "", "name": "Ei" },
      { "amount": 100, "unit": "g", "name": "Semmelbrösel" },
      { "amount": 2, "unit": "EL", "name": "Butter" }
    ],
    "instructions": [
      "Die Kartoffeln schälen, in Stücke schneiden und in Salzwasser weich kochen. Abgießen und abkühlen lassen.",
      "Die gekochten Kartoffeln zerdrücken oder durch eine Kartoffelpresse drücken.",
      "Stärke, Ei, Salz und Muskatnuss unter die Kartoffelmasse mischen und alles zu einem glatten Teig verkneten.",
      "Aus der Masse gleichmäßige vegetarische Klöße formen (etwa so groß wie ein Tennisball).",
      "Die vegetarischen Klöße in kochendem Salzwasser etwa 15–20 Minuten gar ziehen lassen, bis sie an die Oberfläche steigen.",
      "In der Zwischenzeit die Semmelbrösel in Butter goldbraun anrösten.",
      "Die gekochten vegetarischen Klöße aus dem Wasser nehmen, abtropfen lassen und in den gerösteten Semmelbröseln wälzen.",
      "Heiß servieren und genießen!"
    ],
    "nutrition": {
      "calories": 1440,
      "protein": "36g",
      "carbs": "253g",
      "fat": "32g"
    },
    "tips": [
      "Achte darauf, die Kartoffeln gut abkühlen zu lassen, bevor du sie verarbeitest – so behält der Teig die richtige Konsistenz.",
      "Wenn der Teig zu klebrig ist, gib etwas mehr Stärke hinzu.",
      "Serviere die vegetarischen Klöße mit einer cremigen Pilzsoße oder vegetarischem Gulasch – sie schmecken einfach himmlisch!",
      "Für eine vegane Variante kannst du das Ei durch etwas Stärke und Wasser ersetzen.",
      "Die vegetarischen Klöße lassen sich auch einfrieren – einfach vor dem Kochen einfrieren und später direkt ins kochende Wasser geben."
    ],
    "whyFavorite": {
      "title": "Warum diese vegetarischen Kartoffelklöße ein echtes Lieblingsgericht sind",
      "reasons": [
        {
          "title": "Traditionell und unwiderstehlich",
          "description": "Ein Klassiker der vegetarischen deutschen Küche, der jeden überzeugt."
        },
        {
          "title": "Einfach zuzubereiten",
          "description": "Mit nur wenigen Zutaten entsteht etwas so Köstliches in der vegetarischen Küche."
        },
        {
          "title": "Perfekt zu vielen vegetarischen Gerichten",
          "description": "Ob zu Pilzrahm, vegetarischem Gulasch oder einfach pur – diese vegetarischen Klöße passen immer."
        },
        {
          "title": "Ein Gefühl von Heimat",
          "description": "Jeder Bissen erinnert an gemütliche vegetarische Familienessen und besondere Momente."
        },
        {
          "title": "Flexibel und anpassbar",
          "description": "Du kannst die vegetarischen Klöße nach Belieben variieren – zum Beispiel mit Kräutern oder Käse."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lass dir diese vegetarischen Kartoffelklöße richtig gut schmecken!",
      "subText": "Ich bin schon gespannt auf dein Feedback!",
      "signature": "Dein Veggie-Rezepte Team"
    },
    "steps": [
      {
        "title": "Schritt 1: Die Kartoffeln vorbereiten",
        "description": "Kartoffeln schälen, kochen und zerdrücken – die Basis für perfekte vegetarische Klöße."
      },
      {
        "title": "Schritt 2: Den Teig herstellen",
        "description": "Stärke, Ei und Gewürze unter die Kartoffelmasse mischen und zu einem glatten Teig verkneten."
      },
      {
        "title": "Schritt 3: Die Klöße formen",
        "description": "Aus der Masse gleichmäßige vegetarische Klöße formen – etwa so groß wie ein Tennisball."
      },
      {
        "title": "Schritt 4: Die Klöße kochen",
        "description": "Die vegetarischen Klöße in kochendem Salzwasser gar ziehen lassen, bis sie an die Oberfläche steigen."
      },
      {
        "title": "Schritt 5: Die Panade zubereiten",
        "description": "Semmelbrösel in Butter goldbraun anrösten und die vegetarischen Klöße darin wälzen."
      }
    ],
    "servingSuggestion": "Am besten schmecken die vegetarischen Klöße frisch zubereitet, wenn sie noch warm und fluffig sind. Serviere sie mit einer cremigen Pilzsoße oder vegetarischem Gulasch.",
    "servingSuggestions": {
      "title": "Was du zu vegetarischen Kartoffelklößen servieren kannst",
      "description": "Diese vegetarischen Klöße sind an sich schon ein Genuss, aber mit den richtigen Beilagen wird das Ganze noch besser!",
      "note": "Egal, wofür du dich entscheidest – die vegetarischen Kartoffelklöße bleiben der Star auf deinem Teller!",
      "items": [
        {
          "emoji": "🍄",
          "title": "Cremige Pilzsoße",
          "description": "Eine cremige vegetarische Pilzsoße verleiht den Klößen eine extra herzhafte Note."
        },
        {
          "emoji": "🥘",
          "title": "Vegetarisches Gulasch",
          "description": "Ein würziges vegetarisches Gulasch passt perfekt zu den Klößen."
        },
        {
          "emoji": "🥗",
          "title": "Ein frischer Salat",
          "description": "Ein knackiger Gurkensalat oder ein gemischter Salat ergänzt die vegetarischen Klöße perfekt."
        },
        {
          "emoji": "🍷",
          "title": "Ein Glas Rotwein",
          "description": "Ein kräftiger Rotwein passt hervorragend zu diesem herzhaften vegetarischen Gericht."
        }
      ]
    },
    "funFact": {
      "title": "Fun Fact",
      "description": "Wusstest du, dass Kartoffelklöße in vielen Regionen Deutschlands unterschiedliche Namen haben? 🥔 In Thüringen heißen sie „Thüringer Klöße“, in Bayern „Semmelknödel“ und in Schwaben „Gaisburger Marsch“. Ursprünglich wurden sie als einfache, sättigende vegetarische Beilage erfunden, um aus wenigen Zutaten etwas Köstliches zu zaubern. Heute sind sie ein fester Bestandteil der vegetarischen deutschen Küche und werden zu festlichen Anlässen genauso serviert wie im Alltag. Einfach, aber genial! 😍"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/kartoffelkloesseIngredient.webp",
      "image1": "/images/Miscellaneous/kartoffelkloesse1.webp",
      "image2": "/images/Miscellaneous/kartoffelkloesse2.webp",
      "image3": "/images/Miscellaneous/kartoffelkloesse3.webp",
      "image4": "/images/Miscellaneous/kartoffelkloesse4.webp",
      "image5": "/images/Miscellaneous/kartoffelkloesse5.webp",
      "image6": "/images/Miscellaneous/kartoffelkloesse6.webp",
      "image7": "/images/Miscellaneous/kartoffelkloesse7.webp"
    }
  },
  {
    "title": "Semmelknödel",
    "seo_title": "Vegetarische Semmelknödel Rezept – Einfach und lecker",
    "image": "/images/Miscellaneous/semmelknoedel.webp",
    "prepTime": 30,
    "cookingTime": 20,
    "seo_keywords": [
      "Vegetarische Semmelknödel Rezept",
      "Semmelknödel selber machen",
      "Vegetarische Klöße",
      "Deutsche vegetarische Küche",
      "Semmelknödel ohne Fleisch"
    ],
    "rating": 4.1,
    "reviews": 102,
    "category": "Beilagen",
    "slug": "semmelknoedel",
    "tags": ["Traditionell", "Beilage", "Kartoffeln"],
    "createdDate": new Date('2025-02-15T00:00:00'),
    "updatedDate": new Date('2025-03-24T00:00:00'),
    "servings": 4,
    "description": "Fluffige vegetarische Semmelknödel, die mit ihrer goldenen Kruste und ihrem herzhaften Geschmack jeden überzeugen – perfekt zu vegetarischen Gerichten!",
    "descriptionOnImage": "Traditionelle vegetarische Semmelknödel – fluffig, lecker und perfekt zu herzhaften vegetarischen Gerichten.",
    "introductionParagraph": "Semmelknödel sind für mich wie ein kleines Wunder der vegetarischen Küche. Es ist erstaunlich, wie aus altbackenen Brötchen etwas so Köstliches entstehen kann. Jedes Mal, wenn ich sie zubereite, fühle ich mich wie eine Alchemistin, die aus einfachen Zutaten Gold macht. Diese vegetarischen Klöße sind nicht nur eine Beilage – sie sind ein Symbol für Nachhaltigkeit und Kreativität. Ob zu einer cremigen vegetarischen Pilzsoße oder zu einem würzigen vegetarischen Gulasch, sie machen jedes Gericht zu etwas Besonderem. Und das Beste? Sie sind so einfach zuzubereiten, dass jeder sie nachmachen kann. Egal, ob du ein erfahrener Koch bist oder gerade erst anfängst – diese vegetarischen Semmelknödel werden dich begeistern.",
    "additionalParagraph": "Es gibt etwas so Befriedigendes daran, vegetarische Semmelknödel zuzubereiten. Vielleicht ist es das Gefühl, altbackene Brötchen in etwas Köstliches zu verwandeln, oder der Duft, der durch die Küche zieht, wenn sie in der Pfanne goldbraun werden. Für mich ist es ein Moment der Freude, in dem ich alles andere vergesse und mich ganz auf das Kochen konzentriere. Diese vegetarischen Klöße sind mehr als nur ein Gericht – sie sind eine Einladung, kreativ zu sein und die kleinen Freuden des Lebens zu genießen. Und wenn ich dann sehe, wie meine Familie und Freunde genüsslich zugreifen, weiß ich, dass ich alles richtig gemacht habe. Vegetarische Semmelknödel sind für mich ein Stück Glück auf dem Teller.",
    "ingredientsNeeded": [
      {
        "title": "Altbackene Brötchen",
        "description": "Die Basis für perfekte vegetarische Semmelknödel – altbackene Brötchen, die in Würfel geschnitten werden."
      },
      {
        "title": "Milch",
        "description": "Zum Einweichen der Brötchen – für eine saftige und fluffige Konsistenz."
      },
      {
        "title": "Zwiebeln",
        "description": "Fein gehackte Zwiebeln verleihen den vegetarischen Knödeln eine würzige Note."
      },
      {
        "title": "Butter",
        "description": "Zum Anbraten der Zwiebeln – für ein extra Aroma in der vegetarischen Küche."
      },
      {
        "title": "Eier",
        "description": "Bindet die Masse und sorgt dafür, dass die vegetarischen Knödel ihre Form behalten."
      },
      {
        "title": "Petersilie",
        "description": "Frische Petersilie verleiht den Knödeln eine frische, krautige Note."
      },
      {
        "title": "Muskatnuss",
        "description": "Verleiht den vegetarischen Knödeln eine warme, aromatische Note."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Die Brötchenmasse",
        "description": "Die Basis für perfekte vegetarische Semmelknödel – altbackene Brötchen, die in Würfel geschnitten und in Milch eingeweicht werden.",
        "ingredients": [
          { "amount": 250, "unit": "g", "name": "altbackene Brötchen, in Würfel geschnitten" },
          { "amount": 250, "unit": "ml", "name": "Milch" }
        ]
      },
      {
        "title": "Die aromatische Basis",
        "description": "Zwiebeln und Butter verleihen den vegetarischen Knödeln ihren würzigen Geschmack.",
        "ingredients": [
          { "amount": 1, "unit": "", "name": "Zwiebel, fein gehackt" },
          { "amount": 2, "unit": "EL", "name": "Butter" }
        ]
      },
      {
        "title": "Die Bindemittel",
        "description": "Eier und Gewürze sorgen dafür, dass die vegetarischen Knödel ihre Form behalten und nicht auseinanderfallen.",
        "ingredients": [
          { "amount": 2, "unit": "", "name": "Eier" },
          { "amount": 1, "unit": "Handvoll", "name": "frische Petersilie, gehackt" },
          { "amount": 1, "unit": "Prise", "name": "Muskatnuss" },
          { "amount": 1, "unit": "Prise", "name": "Salz" },
          { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 250, "unit": "g", "name": "altbackene Brötchen, in Würfel geschnitten" },
      { "amount": 250, "unit": "ml", "name": "Milch" },
      { "amount": 1, "unit": "", "name": "Zwiebel, fein gehackt" },
      { "amount": 2, "unit": "EL", "name": "Butter" },
      { "amount": 2, "unit": "", "name": "Eier" },
      { "amount": 1, "unit": "Handvoll", "name": "frische Petersilie, gehackt" },
      { "amount": 1, "unit": "Prise", "name": "Muskatnuss" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
    ],
    "instructions": [
      "Die altbackenen Brötchen in Würfel schneiden und in einer Schüssel mit der Milch übergießen. Etwa 15 Minuten einweichen lassen.",
      "In der Zwischenzeit die Zwiebel in Butter goldbraun anbraten.",
      "Die eingeweichten Brötchen, die angebratenen Zwiebeln, Eier, Petersilie, Muskatnuss, Salz und Pfeffer in einer Schüssel vermengen.",
      "Aus der Masse gleichmäßige vegetarische Knödel formen (etwa so groß wie ein Tennisball).",
      "Die vegetarischen Knödel in kochendem Salzwasser etwa 15–20 Minuten gar ziehen lassen, bis sie an die Oberfläche steigen.",
      "Die gekochten vegetarischen Knödel aus dem Wasser nehmen, abtropfen lassen und heiß servieren."
    ],
    "nutrition": {
      "calories": 1185,
      "protein": "41.5g",
      "carbs": "144g",
      "fat": "45g"
    },
    "tips": [
      "Achte darauf, die Brötchen nicht zu lange einzuweichen – sie sollten weich, aber nicht matschig sein.",
      "Wenn der Teig zu klebrig ist, gib etwas mehr Semmelbrösel hinzu.",
      "Serviere die vegetarischen Knödel mit einer cremigen Pilzsoße oder vegetarischem Gulasch – sie schmecken einfach himmlisch!",
      "Für eine vegane Variante kannst du die Eier durch eine Mischung aus Stärke und Wasser ersetzen.",
      "Die vegetarischen Knödel lassen sich auch einfrieren – einfach vor dem Kochen einfrieren und später direkt ins kochende Wasser geben."
    ],
    "whyFavorite": {
      "title": "Warum diese vegetarischen Semmelknödel ein echtes Lieblingsgericht sind",
      "reasons": [
        {
          "title": "Traditionell und unwiderstehlich",
          "description": "Ein Klassiker der vegetarischen deutschen Küche, der jeden überzeugt."
        },
        {
          "title": "Einfach zuzubereiten",
          "description": "Mit nur wenigen Zutaten entsteht etwas so Köstliches in der vegetarischen Küche."
        },
        {
          "title": "Perfekt zu vielen vegetarischen Gerichten",
          "description": "Ob zu Pilzrahm, vegetarischem Gulasch oder einfach pur – diese vegetarischen Knödel passen immer."
        },
        {
          "title": "Nachhaltig und kreativ",
          "description": "Altbackene Brötchen werden zu etwas Köstlichem verwandelt – perfekt für eine nachhaltige Küche."
        },
        {
          "title": "Flexibel und anpassbar",
          "description": "Du kannst die vegetarischen Knödel nach Belieben variieren – zum Beispiel mit Kräutern oder Käse."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lass dir diese vegetarischen Semmelknödel richtig gut schmecken!",
      "subText": "Ich bin schon gespannt auf dein Feedback!",
      "signature": "Dein Veggie-Rezepte Team"
    },
    "steps": [
      {
        "title": "Schritt 1: Die Brötchen vorbereiten",
        "description": "Altbackene Brötchen in Würfel schneiden und in Milch einweichen – die Basis für perfekte vegetarische Knödel."
      },
      {
        "title": "Schritt 2: Die aromatische Basis",
        "description": "Zwiebeln in Butter goldbraun anbraten – für den würzigen Geschmack der vegetarischen Knödel."
      },
      {
        "title": "Schritt 3: Den Teig herstellen",
        "description": "Eingeweichte Brötchen, angebratene Zwiebeln, Eier und Gewürze vermengen und zu einem glatten Teig verkneten."
      },
      {
        "title": "Schritt 4: Die Knödel formen",
        "description": "Aus der Masse gleichmäßige vegetarische Knödel formen – etwa so groß wie ein Tennisball."
      },
      {
        "title": "Schritt 5: Die Knödel kochen",
        "description": "Die vegetarischen Knödel in kochendem Salzwasser gar ziehen lassen, bis sie an die Oberfläche steigen."
      }
    ],
    "servingSuggestion": "Am besten schmecken die vegetarischen Knödel frisch zubereitet, wenn sie noch warm und fluffig sind. Serviere sie mit einer cremigen Pilzsoße oder vegetarischem Gulasch.",
    "servingSuggestions": {
      "title": "Was du zu vegetarischen Semmelknödeln servieren kannst",
      "description": "Diese vegetarischen Knödel sind an sich schon ein Genuss, aber mit den richtigen Beilagen wird das Ganze noch besser!",
      "note": "Egal, wofür du dich entscheidest – die vegetarischen Semmelknödel bleiben der Star auf deinem Teller!",
      "items": [
        {
          "emoji": "🍄",
          "title": "Cremige Pilzsoße",
          "description": "Eine cremige vegetarische Pilzsoße verleiht den Knödeln eine extra herzhafte Note."
        },
        {
          "emoji": "🥘",
          "title": "Vegetarisches Gulasch",
          "description": "Ein würziges vegetarisches Gulasch passt perfekt zu den Knödeln."
        },
        {
          "emoji": "🥗",
          "title": "Ein frischer Salat",
          "description": "Ein knackiger Gurkensalat oder ein gemischter Salat ergänzt die vegetarischen Knödel perfekt."
        },
        {
          "emoji": "🍷",
          "title": "Ein Glas Rotwein",
          "description": "Ein kräftiger Rotwein passt hervorragend zu diesem herzhaften vegetarischen Gericht."
        }
      ]
    },
    "funFact": {
      "title": "Fun Fact",
      "description": "Wusstest du, dass Semmelknödel ursprünglich als Resteverwertung erfunden wurden? 🥖 In der bayerischen Küche wurden altbackene Brötchen verwendet, um daraus etwas Köstliches zu zaubern. Heute sind sie ein fester Bestandteil der vegetarischen deutschen Küche und werden zu festlichen Anlässen genauso serviert wie im Alltag. Einfach, aber genial! 😍"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/semmelknoedelIngredient.webp",
      "image1": "/images/Miscellaneous/semmelknoedel1.webp",
      "image2": "/images/Miscellaneous/semmelknoedel2.webp",
      "image3": "/images/Miscellaneous/semmelknoedel3.webp",
      "image4": "/images/Miscellaneous/semmelknoedel4.webp",
      "image5": "/images/Miscellaneous/semmelknoedel5.webp",
      "image6": "/images/Miscellaneous/semmelknoedel6.webp",
      "image7": "/images/Miscellaneous/semmelknoedel7.webp"
    }
  },
  {
    "title": "Quinoa-Buddha-Bowl",
    "seo_title": "Vegetarische Quinoa-Buddha-Bowl Rezept – Gesund - lecker",
    "image": "/images/MainCourses/quinoa-buddha-bowl.webp",
    "prepTime": 25,
    "cookingTime": 20,
    "seo_keywords": [
      "Vegetarische Buddha-Bowl Rezept",
      "Quinoa-Buddha-Bowl selber machen",
      "Gesunde vegetarische Bowl",
      "Vegetarische Bowl-Rezepte",
      "Bunte Buddha-Bowl"
    ],
    "rating": 4.9,
    "reviews": 230,
    "category": "Hauptgerichte",
    "slug": "quinoa-buddha-bowl",
    "tags": ["Modern", "Gesund", "Bowl"],
    "createdDate": new Date('2025-02-20T00:00:00'),
    "updatedDate": new Date('2025-03-25T00:00:00'),
    "servings": 2,
    "description": "Eine bunte und gesunde vegetarische Quinoa-Buddha-Bowl, die mit frischem Gemüse, cremigem Avocado-Dressing und knackigen Toppings überzeugt",
    "descriptionOnImage": "Eine bunte und gesunde vegetarische Quinoa-Buddha-Bowl – voller frischer Zutaten und voller Geschmack.",
    "introductionParagraph": "Eine Quinoa-Buddha-Bowl ist für mich wie ein kulinarisches Kunstwerk auf dem Teller. Jede Zutat hat ihre eigene Farbe, Textur und Geschmacksnote, und zusammen ergeben sie ein harmonisches Ganzes. Diese vegetarische Bowl ist nicht nur ein Gericht – sie ist eine Einladung, kreativ zu sein und die Vielfalt der Natur zu genießen. Mit Quinoa als Basis, frischem Gemüse, cremigem Avocado-Dressing und knackigen Toppings ist sie eine wahre Geschmacksexplosion. Und das Beste? Sie ist so einfach zuzubereiten, dass jeder sie nachmachen kann. Egal, ob du ein erfahrener Koch bist oder gerade erst anfängst – diese vegetarische Quinoa-Buddha-Bowl wird dich begeistern.",
    "additionalParagraph": "Es gibt etwas so Befriedigendes daran, eine Quinoa-Buddha-Bowl zuzubereiten. Vielleicht ist es das Gefühl, alle Zutaten sorgfältig auszuwählen und zu schneiden, oder der Duft, der durch die Küche zieht, wenn das Gemüse geröstet wird. Für mich ist es ein Moment der Achtsamkeit, in dem ich alles andere vergesse und mich ganz auf das Kochen konzentriere. Diese vegetarische Bowl ist mehr als nur ein Gericht – sie ist eine Einladung, innezuhalten und die kleinen Freuden des Lebens zu genießen. Und wenn ich dann sehe, wie meine Familie und Freunde genüsslich zugreifen, weiß ich, dass ich alles richtig gemacht habe. Eine vegetarische Quinoa-Buddha-Bowl ist für mich ein Stück Glück auf dem Teller.",
    "ingredientsNeeded": [
      {
        "title": "Quinoa",
        "description": "Die Basis der Bowl – Quinoa ist nicht nur lecker, sondern auch reich an Proteinen und Ballaststoffen."
      },
      {
        "title": "Gemüse",
        "description": "Eine bunte Mischung aus frischem Gemüse wie Süßkartoffeln, Paprika, Spinat und Kirschtomaten."
      },
      {
        "title": "Avocado",
        "description": "Für das cremige Dressing und als Topping – Avocado verleiht der Bowl eine extra Portion Cremigkeit."
      },
      {
        "title": "Kichererbsen",
        "description": "Geröstete Kichererbsen geben der Bowl eine knusprige Note und liefern zusätzliches Protein."
      },
      {
        "title": "Tahini",
        "description": "Für das Dressing – Tahini verleiht der Bowl eine nussige Note."
      },
      {
        "title": "Zitrone",
        "description": "Für das Dressing – Zitronensaft verleiht der Bowl eine frische, säuerliche Note."
      },
      {
        "title": "Sesam",
        "description": "Als Topping – Sesam verleiht der Bowl eine knusprige Textur."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Die Basis",
        "description": "Quinoa ist die perfekte Basis für eine gesunde und nahrhafte vegetarische Bowl.",
        "ingredients": [
          { "amount": 100, "unit": "g", "name": "Quinoa" },
          { "amount": 250, "unit": "ml", "name": "Gemüsebrühe" }
        ]
      },
      {
        "title": "Das Gemüse",
        "description": "Eine bunte Mischung aus frischem Gemüse verleiht der Bowl Farbe und Geschmack.",
        "ingredients": [
          { "amount": 1, "unit": "", "name": "Süßkartoffel, gewürfelt" },
          { "amount": 1, "unit": "", "name": "Paprika, in Streifen geschnitten" },
          { "amount": 1, "unit": "Handvoll", "name": "Spinat" },
          { "amount": 100, "unit": "g", "name": "Kirschtomaten, halbiert" }
        ]
      },
      {
        "title": "Das Dressing",
        "description": "Ein cremiges Avocado-Dressing verleiht der Bowl eine extra Portion Geschmack.",
        "ingredients": [
          { "amount": 1, "unit": "", "name": "Avocado" },
          { "amount": 2, "unit": "EL", "name": "Tahini" },
          { "amount": 1, "unit": "", "name": "Zitrone, Saft" },
          { "amount": 2, "unit": "EL", "name": "Olivenöl" },
          { "amount": 1, "unit": "Prise", "name": "Salz" },
          { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
        ]
      },
      {
        "title": "Die Toppings",
        "description": "Knusprige Toppings verleihen der Bowl eine extra Portion Textur.",
        "ingredients": [
          { "amount": 100, "unit": "g", "name": "Kichererbsen, geröstet" },
          { "amount": 1, "unit": "EL", "name": "Sesam" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 100, "unit": "g", "name": "Quinoa" },
      { "amount": 250, "unit": "ml", "name": "Gemüsebrühe" },
      { "amount": 1, "unit": "", "name": "Süßkartoffel, gewürfelt" },
      { "amount": 1, "unit": "", "name": "Paprika, in Streifen geschnitten" },
      { "amount": 1, "unit": "Handvoll", "name": "Spinat" },
      { "amount": 100, "unit": "g", "name": "Kirschtomaten, halbiert" },
      { "amount": 1, "unit": "", "name": "Avocado" },
      { "amount": 2, "unit": "EL", "name": "Tahini" },
      { "amount": 1, "unit": "", "name": "Zitrone, Saft" },
      { "amount": 2, "unit": "EL", "name": "Olivenöl" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" },
      { "amount": 100, "unit": "g", "name": "Kichererbsen, geröstet" },
      { "amount": 1, "unit": "EL", "name": "Sesam" }
    ],
    "instructions": [
      "Den Quinoa in einem Sieb unter fließendem Wasser abspülen. In einem Topf mit der Gemüsebrühe zum Kochen bringen und bei mittlerer Hitze 15 Minuten köcheln lassen, bis der Quinoa weich ist.",
      "In der Zwischenzeit das Gemüse vorbereiten. Die Süßkartoffeln und Paprika in einer Pfanne mit etwas Olivenöl anbraten, bis sie weich sind. Den Spinat und die Kirschtomaten roh belassen.",
      "Für das Dressing die Avocado, Tahini, Zitronensaft, Olivenöl, Salz und Pfeffer in einer Schüssel vermengen und zu einer cremigen Masse verrühren.",
      "Die Kichererbsen in einer Pfanne mit etwas Olivenöl goldbraun rösten.",
      "Den gekochten Quinoa in eine Schüssel geben und mit dem Gemüse, den gerösteten Kichererbsen und dem Avocado-Dressing anrichten. Mit Sesam bestreuen und servieren."
    ],
    "nutrition": {
      "calories": 1377,
      "protein": "38g",
      "carbs": "158g",
      "fat": "81g"
    },
    "tips": [
      "Achte darauf, den Quinoa gut abzuspülen, um den bitteren Geschmack zu entfernen.",
      "Wenn du keine Süßkartoffeln hast, kannst du auch normale Kartoffeln oder Kürbis verwenden.",
      "Serviere die Bowl mit einem frischen Salat oder einem Glas Weißwein für ein komplettes Mahlzeiterlebnis.",
      "Die Bowl lässt sich auch gut vorbereiten – einfach die Zutaten separat aufbewahren und vor dem Servieren anrichten.",
      "Für eine vegane Variante kannst du das Dressing ohne Tahini zubereiten und stattdessen mehr Avocado verwenden."
    ],
    "whyFavorite": {
      "title": "Warum diese vegetarische Quinoa-Buddha-Bowl ein echtes Lieblingsgericht ist",
      "reasons": [
        {
          "title": "Gesund und nahrhaft",
          "description": "Vollgepackt mit frischem Gemüse, Quinoa und Kichererbsen – perfekt für eine ausgewogene vegetarische Ernährung."
        },
        {
          "title": "Einfach zuzubereiten",
          "description": "Mit nur wenigen Zutaten entsteht etwas so Köstliches in der vegetarischen Küche."
        },
        {
          "title": "Perfekt für Meal Prep",
          "description": "Die Bowl lässt sich gut vorbereiten und ist ideal für unterwegs oder als Mittagessen im Büro."
        },
        {
          "title": "Bunt und kreativ",
          "description": "Jede Bowl ist einzigartig – du kannst die Zutaten nach Belieben variieren und deine eigene Kreation erschaffen."
        },
        {
          "title": "Flexibel und anpassbar",
          "description": "Du kannst die Bowl nach Belieben variieren – zum Beispiel mit anderen Gemüsesorten oder Dressing."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lass dir diese vegetarische Quinoa-Buddha-Bowl richtig gut schmecken!",
      "subText": "Ich bin schon gespannt auf dein Feedback!",
      "signature": "Dein Veggie-Rezepte Team"
    },
    "steps": [
      {
        "title": "Schritt 1: Die Basis vorbereiten",
        "description": "Quinoa abspülen und in Gemüsebrühe kochen – die Basis für die vegetarische Bowl."
      },
      {
        "title": "Schritt 2: Das Gemüse anrichten",
        "description": "Süßkartoffeln und Paprika anbraten, Spinat und Kirschtomaten roh belassen."
      },
      {
        "title": "Schritt 3: Das Dressing zubereiten",
        "description": "Avocado, Tahini, Zitronensaft, Olivenöl, Salz und Pfeffer zu einer cremigen Masse verrühren."
      },
      {
        "title": "Schritt 4: Die Toppings rösten",
        "description": "Kichererbsen in einer Pfanne goldbraun rösten."
      },
      {
        "title": "Schritt 5: Die Bowl anrichten",
        "description": "Quinoa, Gemüse, Kichererbsen und Dressing in einer Schüssel anrichten und mit Sesam bestreuen."
      }
    ],
    "servingSuggestion": "Am besten schmeckt die Bowl frisch zubereitet, wenn das Gemüse noch knackig und das Dressing cremig ist. Serviere sie mit einem frischen Salat oder einem Glas Weißwein.",
    "servingSuggestions": {
      "title": "Was du zu einer vegetarischen Quinoa-Buddha-Bowl servieren kannst",
      "description": "Diese vegetarische Bowl ist an sich schon ein Genuss, aber mit den richtigen Beilagen wird das Ganze noch besser!",
      "note": "Egal, wofür du dich entscheidest – die vegetarische Quinoa-Buddha-Bowl bleibt der Star auf deinem Teller!",
      "items": [
        {
          "emoji": "🍠",
          "title": "Gebackene Süßkartoffel-Sticks",
          "description": "Knusprige Süßkartoffel-Sticks aus dem Ofen sind eine leckere und gesunde Ergänzung zur Bowl."
        },
        {
          "emoji": "🥑",
          "title": "Guacamole-Dip",
          "description": "Eine cremige Guacamole mit Limette und Koriander passt perfekt zu den frischen Zutaten der Bowl."
        },
        {
          "emoji": "🌽",
          "title": "Gebratener Mais",
          "description": "Gebratener Mais mit etwas Chili und Limette verleiht der Bowl eine süßlich-würzige Note."
        },
        {
          "emoji": "🍋",
          "title": "Zitronen-Ingwer-Tee",
          "description": "Ein erfrischender Zitronen-Ingwer-Tee rundet das Mahl perfekt ab und unterstützt die Verdauung."
        },
        {
          "emoji": "🧆",
          "title": "Falafel-Bällchen",
          "description": "Kleine, knusprige Falafel-Bällchen sind eine proteinreiche Ergänzung zur Bowl."
        },
        {
          "emoji": "🥒",
          "title": "Eingelegtes Gemüse",
          "description": "Schnell eingelegte Gurken, Karotten oder Rote Bete bringen eine saure und knackige Komponente auf den Teller."
        },
        {
          "emoji": "🍯",
          "title": "Honig-Senf-Dip",
          "description": "Ein süß-würziger Honig-Senf-Dip passt hervorragend zu den gerösteten Kichererbsen und dem Gemüse."
        }
      ]
    },
    "funFact": {
      "title": "Fun Fact",
      "description": "Wusstest du, dass Buddha-Bowls ursprünglich aus der veganen und vegetarischen Küche stammen? 🥗 Sie wurden erfunden, um eine ausgewogene und nahrhafte Mahlzeit in einer Schüssel zu servieren. Heute sind sie weltweit beliebt und werden in unzähligen Variationen zubereitet – von der einfachen Hausmannskost bis zur Gourmet-Kreation. Einfach, aber genial! 😍"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/quinoaBuddhaBowlIngredient.webp",
      "image1": "/images/MainCourses/quinoa-buddha-bowl1.webp",
      "image2": "/images/MainCourses/quinoa-buddha-bowl2.webp",
      "image3": "/images/MainCourses/quinoa-buddha-bowl3.webp",
      "image4": "/images/MainCourses/quinoa-buddha-bowl4.webp",
      "image5": "/images/MainCourses/quinoa-buddha-bowl5.webp",
      "image6": "/images/MainCourses/quinoa-buddha-bowl6.webp",
      "image7": "/images/MainCourses/quinoa-buddha-bowl7.webp"
    }
  },
  {
    "title": "Käsespätzle",
    "seo_title": "Vegetarische Käsespätzle Rezept – Cremig und würzig",
    "image": "/images/MainCourses/kaesespaetzle.webp",
    "prepTime": 40,
    "cookingTime": 25,
    "seo_keywords": [
      "Vegetarische Käsespätzle",
      "Hausgemachte Spätzle",
      "Käsespätzle ohne Speck",
      "Deutsche vegetarische Küche",
      "Cremige Spätzle"
    ],
    "rating": 4.1,
    "reviews": 178,
    "category": "Hauptgerichte",
    "slug": "kaesespaetzle",
    "tags": ["Traditionell", "Pasta", "Käse"],
    "createdDate": new Date('2025-02-21T00:00:00'),
    "updatedDate": new Date('2025-03-26T00:00:00'),
    "servings": 4,
    "description": "Cremige vegetarische Käsespätzle mit drei Käsesorten, karamellisierten Zwiebeln und frischem Schnittlauch – ein herzhafter Genuss ohne Fleisch!",
    "descriptionOnImage": "Goldbraune Käsespätzle mit zerlaufenem Käse und knusprigen Zwiebelringen – vegetarischer Komfort auf höchstem Niveau.",

    "introductionParagraph": "Käsespätzle sind das kulinarische Äquivalent zu einem wolkenweichen Pullover an kühlen Tagen. Diese vegetarische Version verwandelt einfache Zutaten in ein sinnliches Erlebnis – wo zarter Spätzleteig auf die umami-reiche Kraft von gereiftem Bergkäse, würzigem Emmentaler und cremigem Butterkäse trifft. Die Magie entsteht, wenn sich die Käsesorten zu einer geschmeidigen Sauce verbinden, während karamellisierte Zwiebeln eine knusprige Kontrasttextur liefern. Ein Gericht, das beweist, dass vegetarische Küche weder Verzicht noch Kompromisse bedeutet, sondern pure Geschmacksintensität.",

    "additionalParagraph": "Was diese vegetarischen Käsespätzle besonders macht, ist ihre transformierende Kraft. Aus Mehl, Eiern und Milch entsteht durch rhythmisches Schaben ein Teig, der beim Kochen zu federleichten Spätzlen wird. Die Kunst liegt im präzisen Zusammenspiel der Käsesorten – der Bergkäse für Tiefe, der Emmentaler für Würze und der Butterkäse für geschmeidige Bindung. Wenn die goldbraunen Zwiebelringe wie edible confetti über das fertige Gericht regnen, entsteht ein Fest für alle Sinne. Diese Spätzle sind kein Beilagen-Dasein, sondern ein kraftvolles vegetarisches Hauptgericht, das selbst eingefleischte Käseliebhaber überzeugt.",

    "ingredientsNeeded": [
      {
        "title": "Spätzle-Mehl",
        "description": "Spezielles Spätzlemehl (Type 550) gibt dem Teig die perfekte Bissfestigkeit und Leichtigkeit."
      },
      {
        "title": "Bergkäse",
        "description": "Gereifter Bergkäse verleiht den Spätzlen eine nussig-intensive Geschmacksnote."
      },
      {
        "title": "Emmentaler",
        "description": "Für die charakteristische Würze und schöne Fäden beim Zerteilen."
      },
      {
        "title": "Butterkäse",
        "description": "Sorgt für cremige Geschmeidigkeit und verbindet die Käsesorten harmonisch."
      },
      {
        "title": "Zwiebeln",
        "description": "Langsam karamellisiert entwickeln sie eine süßlich-rauchige Tiefe."
      },
      {
        "title": "Muskatblüte",
        "description": "Das seltenere Pendant zu Muskatnuss mit komplexeren Aromen für den Teig."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Spätzle-Teig",
        "description": "Die Basis für perfekte vegetarische Spätzle – luftig und doch bissfest.",
        "ingredients": [
          { "amount": 300, "unit": "g", "name": "Spätzlemehl (Type 550)" },
          { "amount": 4, "unit": "", "name": "Eier" },
          { "amount": 100, "unit": "ml", "name": "Mineralwasser" },
          { "amount": 1, "unit": "Prise", "name": "Muskatblüte" }
        ]
      },
      {
        "title": "Käse-Mischung",
        "description": "Drei Käsesorten erschaffen ein vegetarisches Aromenspiel.",
        "ingredients": [
          { "amount": 100, "unit": "g", "name": "Bergkäse, gerieben" },
          { "amount": 100, "unit": "g", "name": "Emmentaler, gerieben" },
          { "amount": 50, "unit": "g", "name": "Butterkäse, gewürfelt" }
        ]
      },
      {
        "title": "Toppings",
        "description": "Für knusprige Akzente und Frische.",
        "ingredients": [
          { "amount": 2, "unit": "", "name": "Zwiebeln, in Ringen" },
          { "amount": 2, "unit": "EL", "name": "Butter" },
          { "amount": 1, "unit": "Handvoll", "name": "Schnittlauchröllchen" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 300, "unit": "g", "name": "Spätzlemehl" },
      { "amount": 4, "unit": "", "name": "Eier" },
      { "amount": 100, "unit": "ml", "name": "Mineralwasser" },
      { "amount": 1, "unit": "Prise", "name": "Muskatblüte" },
      { "amount": 100, "unit": "g", "name": "Bergkäse" },
      { "amount": 100, "unit": "g", "name": "Emmentaler" },
      { "amount": 50, "unit": "g", "name": "Butterkäse" },
      { "amount": 2, "unit": "", "name": "Zwiebeln" },
      { "amount": 2, "unit": "EL", "name": "Butter" },
      { "amount": 1, "unit": "Handvoll", "name": "Schnittlauch" }
    ],
    "instructions": [
      "Für den Spätzleteig Mehl, Eier, Mineralwasser und Muskatblüte zu einem glatten, zähen Teig verrühren. 10 Minuten quellen lassen.",
      "In einem großen Topf reichlich Salzwasser zum Kochen bringen. Teig portionsweise durch ein Spätzlesieb oder Brett schaben.",
      "Spätzle in kochendem Wasser ca. 2 Minuten garen, bis sie an der Oberfläche schwimmen. Mit einem Schaumlöffel herausheben und abschrecken.",
      "Zwiebelringe in Butter bei mittlerer Hitze 15 Minuten goldbraun karamellisieren.",
      "Gekochte Spätzle abtropfen lassen, mit den geriebenen Käsesorten und Butterkäsewürfeln in einer ofenfesten Form vermengen.",
      "Bei 200°C Ober-/Unterhitze 10 Minuten überbacken, bis der Käse vollständig geschmolzen ist.",
      "Mit karamellisierten Zwiebeln und Schnittlauch bestreuen. Sofort servieren."
    ],
    "nutrition": {
      "calories": 2627,
      "protein": "129.5g",
      "carbs": "245g",
      "fat": "131g"
    },
    "tips": [
      "Für extra-lockere Spätzle das Mineralwasser kurz vor der Zubereitung öffnen – die Kohlensäure macht den Teig luftiger.",
      "Den Käse erst nach dem Abschrecken der Spätzle untermischen – so schmilzt er gleichmäßiger beim Überbacken.",
      "Für eine knusprige Kruste die Spätzle vor dem Überbacken mit Semmelbröseln und etwas Butter bestreuen.",
      "Vegetarische Variante: Butter durch hochwertiges Olivenöl ersetzen und auf Käse mit mikrobiologischem Lab achten."
    ],
    "whyFavorite": {
      "title": "Warum diese vegetarischen Käsespätzle überzeugen",
      "reasons": [
        {
          "title": "Textur-Symphonie",
          "description": "Das Spiel aus zarten Spätzlen, cremigem Käse und knusprigen Zwiebeln ist ein sensorisches Erlebnis."
        },
        {
          "title": "Käse-Alchemie",
          "description": "Drei sorgfältig ausgewählte Käsesorten erschaffen eine geschmackliche Tiefe, die Fleisch überflüssig macht."
        },
        {
          "title": "Technische Finesse",
          "description": "Vom perfekten Teig bis zur präzisen Karamellisierung – ein Gericht für passionierte Köche."
        },
        {
          "title": "Saisonal anpassbar",
          "description": "Im Sommer mit Rucola, im Winter mit Trüffelöl – die Basis lädt zum Experimentieren ein."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lass dich von der Käse-Vielfalt überraschen!",
      "subText": "Welche Käse-Kombi wird dein Favorit?",
      "signature": "Dein Käse-Experte"
    },
    "steps": [
      {
        "title": "Teig-Alchemie",
        "description": "Mineralwasser und Eier bilden mit Mehl einen elastischen Teig – die Basis für perfekte Spätzle."
      },
      {
        "title": "Schab-Perfektion",
        "description": "Der rhythmische Vorgang des Schabens entscheidet über die Textur – gleichmäßige, längliche Spätzle sind das Ziel."
      },
      {
        "title": "Käse-Triologie",
        "description": "Bergkäse, Emmentaler und Butterkäse verschmelzen zu einer geschmeidigen Sauce mit unterschiedlichen Aromanoten."
      },
      {
        "title": "Zwiebel-Alchemie",
        "description": "Langsames Karamellisieren verwandelt scharfe Zwiebeln in süß-rauchige Krönung."
      }
    ],
    "servingSuggestion": "Serviere die Käsespätzle in vorgewärmten Tellern, damit der Käse seine cremige Konsistenz behält.",
    "servingSuggestions": {
      "title": "Kreative Begleiter für Käsespätzle",
      "description": "Diese vegetarischen Spätzle sind ein Star für sich – doch mit diesen ungewöhnlichen Begleitern wird das Erlebnis noch intensiver:",
      "note": "Jede Kombination offenbart neue Geschmacksdimensionen!",
      "items": [
        {
          "emoji": "🍯",
          "title": "Birnen-Chutney",
          "description": "Süß-säuerliches Chutney aus Birnen und Zimt schneidet durch die Käsecremigkeit."
        },
        {
          "emoji": "🌿",
          "title": "Kräuter-Salz",
          "description": "Selbstgemachtes Salz mit getrockneten Wildkräutern betont die Käsenoten."
        },
        {
          "emoji": "🍎",
          "title": "Apfel-Carpaccio",
          "description": "Häppchenweise Frische: hauchdünne Äpfel mit Zitronensaft und Pink-Pfeffer."
        },
        {
          "emoji": "🍄",
          "title": "Trüffel-Chips",
          "description": "Knusprige Pilzchips aus Shiitake oder Steinpilzen für umami-Crunch."
        },
        {
          "emoji": "🥂",
          "title": "Perlwein-Schorle",
          "description": "Heller Perlwein mit Holunderblütensirup – spielt perfekt mit dem Käse."
        }
      ]
    },
    "funFact": {
      "title": "Kulinarisches Kuriosum",
      "description": "Wusstest du, dass Spätzle ursprünglich als 'Armenspeise' galten? 🥄 Im 18. Jahrhundert wurden sie aus Restmehl und Wasser zubereitet – erst die Zugabe von Eiern und Käse machte sie zur heutigen Delikatesse. In Schwaben gibt es sogar eine 'Spätzlepflicht' in Sterne-Restaurants: Jedes Lokal muss täglich frische Spätzle anbieten! Heute sind sie UNESCO-Kulturerbe und vegetarischer Stolz der deutschen Küche."
    },
    "images": {
      "imageIngredient": "/images/Ingredients/kaesespaetzleIngredient.webp",
      "image1": "/images/MainCourses/kaesespaetzle1.webp",
      "image2": "/images/MainCourses/kaesespaetzle2.webp",
      "image3": "/images/MainCourses/kaesespaetzle3.webp",
      "image4": "/images/MainCourses/kaesespaetzle4.webp",
      "image5": "/images/MainCourses/kaesespaetzle5.webp",
      "image6": "/images/MainCourses/kaesespaetzle6.webp",
      "image7": "/images/MainCourses/kaesespaetzle7.webp"
    }
  },
  {
    "title": "Pilzgulasch",
    "seo_title": "Vegetarisches Pilzgulasch Rezept – Herzhaft, rauchig & umami",
    "image": "/images/Miscellaneous/pilzgulasch.webp",
    "prepTime": 20,
    "cookingTime": 40,
    "seo_keywords": [
      "Vegetarisches Pilzgulasch",
      "Pilzgulasch ohne Fleisch",
      "Umami-Pilzgericht",
      "Vegane Gulasch-Alternative",
      "Herzhafte Pilzpfanne"
    ],
    "rating": 4.4,
    "reviews": 123,
    "category": "Hauptgerichte",
    "slug": "pilzgulasch",
    "tags": ["Traditionell", "Pilze", "Hauptgericht"],
    "createdDate": new Date('2025-02-23T00:00:00'),
    "updatedDate": new Date('2025-03-27T00:00:00'),
    "servings": 2,
    "description": "Ein tief aromatisches Pilzgulasch mit rauchigen Paprika- und Sojasoßen-Noten – eine vegetarische Meisterleistung, die selbst Fleischliebhaber überzeugt.",
    "descriptionOnImage": "Ein dunkles, glänzendes Pilzgulasch mit Champignons, Austernpilzen und Rauchpaprika, serviert mit fluffigem Kartoffelpüree – pure Komfortküche.",
    "introductionParagraph": "Es gibt Gerichte, die schmecken nicht nur – sie erzählen Geschichten. Dieses Pilzgulasch ist meine kulinarische Liebeserklärung an die Kraft der Pilze, die in meiner Küche die Hauptrolle übernehmen, statt nur Beilage zu sein. Ich erinnere mich an den Moment, als ich es zum ersten Mal für eine eingefleischte (Wortspiel intended!) Grillmeisterin zubereitete. Ihr skeptischer Blick, als ich den Dutch Oven öffnete – 'Wo ist das Fleisch?' – verwandelte sich in blankes Staunen beim ersten Bissen. Das ist die Magie der richtigen Pilzkombination: Champignons für die Substanz, Shiitake für das Umami, Austernpilze für die Textur und getrocknete Steinpilze als geheime Geschmacksbombe. Zusammen mit rauchigem Paprika und einem Schuss Rotwein entsteht ein Gulasch, das nicht vegetarisch 'schmeckt-trotzdem', sondern einfach großartig schmeckt – Punkt.",
    "additionalParagraph": "Was dieses Gericht besonders macht? Seine Wandlungsfähigkeit. An regnerischen Sonntagen schlürfe ich es klassisch mit Kartoffelpüree vom Löffel. Für Dinnerpartys wird es zur edlen Füllung für Blätterteigtaschen, garniert mit Trüffelöl. Und an stressigen Tagen wandert es einfach über Nudeln – ein Komfortfood-Chamäleon. Mein persönlicher Geheimtipp: Über Nacht ziehen lassen. Wie bei einem guten Eintopf entfalten sich die Aromen am nächsten Tag noch intensiver, während die Pilze eine fast fleischige Bissfestigkeit behalten. Probier es aus – ich wette, du wirst mindestens drei neue Lieblingsvarianten entdecken!",
    "ingredientsNeeded": [
      {
        "title": "Gemischte Pilze",
        "description": "Champignons für die Basis, Austernpilze für Biss und Shiitake für Umami – eine Texturoffensive!"
      },
      {
        "title": "Getrocknete Steinpilze",
        "description": "Das geheume Umami-Wunder: Ihre Aufgussbrühe ersetzt jeden Fleischfond."
      },
      {
        "title": "Rauchpaprika",
        "description": "Verleiht die typische Gulasch-Rauchnote – als ob es stundenlang über Holzfeuer köchelte."
      },
      {
        "title": "Dunkle Sojasoße",
        "description": "Für Farbe und Salzigkeit ohne Fleisch. Der vegane MVP!"
      },
      {
        "title": "Rotwein",
        "description": "Ein Schuss Cabernet Sauvignon baut Aromen auf, die an klassisches Gulasch erinnern – aber ganz ohne Reue."
      },
      {
        "title": "Tomatenmark (der Geschmacksbooster)",
        "description": "Angeröstet entwickelt es eine tiefe Süße und verleiht Saucen samtige Konsistenz – der Trick der Profis!"
      },
      {
        "title": "Kreuzkümmel (der orientalische Zauberer)",
        "description": "Geröstet und frisch gemahlen entfaltet er erdige Aromen, die jedes Pilzgericht wie vom Basar schmecken lassen."
      },
      {
        "title": "Gemüsebrühe (die aromatische Grundlage)",
        "description": "Selbst gekocht oder als hochwertiges Konzentrat – sie bringt Tiefe ohne künstliche Zusätze."
      }
    ],
    "ingredientGroups": [
      {
        "title": "Die Pilzgrundlage",
        "description": "Frische und getrocknete Pilze arbeiten hier Hand in Hand für maximale Geschmacksexplosion.",
        "ingredients": [
          { "amount": 300, "unit": "g", "name": "Champignons, geviertelt" },
          { "amount": 200, "unit": "g", "name": "Austernpilze, zerzupft" },
          { "amount": 50, "unit": "g", "name": "Shiitake, geschnitten" },
          { "amount": 15, "unit": "g", "name": "Getrocknete Steinpilze" },
          { "amount": 250, "unit": "ml", "name": "Heißes Wasser (für Steinpilzbrühe)" }
        ]
      },
      {
        "title": "Die Umami-Booster",
        "description": "Diese Zutaten tricksen deine Geschmacksknospen aus – sie denken, da wäre Fleisch drin!",
        "ingredients": [
          { "amount": 2, "unit": "EL", "name": "Dunkle Sojasoße" },
          { "amount": 1, "unit": "EL", "name": "Tomatenmark" },
          { "amount": 2, "unit": "TL", "name": "Rauchpaprika" },
          { "amount": 1, "unit": "TL", "name": "Kreuzkümmel" }
        ]
      },
      {
        "title": "Die Flüssigkeiten",
        "description": "Alkohol und Brühe bauen geschmackliche Komplexität auf.",
        "ingredients": [
          { "amount": 100, "unit": "ml", "name": "Rotwein (z.B. Cabernet Sauvignon)" },
          { "amount": 200, "unit": "ml", "name": "Gemüsebrühe" }
        ]
      }
    ],
    "ingredients": [
      { "amount": 300, "unit": "g", "name": "Champignons" },
      { "amount": 200, "unit": "g", "name": "Austernpilze" },
      { "amount": 50, "unit": "g", "name": "Shiitake" },
      { "amount": 15, "unit": "g", "name": "Getrocknete Steinpilze" },
      { "amount": 250, "unit": "ml", "name": "Heißes Wasser" },
      { "amount": 1, "unit": "", "name": "Zwiebel, gewürfelt" },
      { "amount": 2, "unit": "Zehen", "name": "Knoblauch, gehackt" },
      { "amount": 2, "unit": "EL", "name": "Olivenöl" },
      { "amount": 2, "unit": "EL", "name": "Dunkle Sojasoße" },
      { "amount": 1, "unit": "EL", "name": "Tomatenmark" },
      { "amount": 2, "unit": "TL", "name": "Rauchpaprika" },
      { "amount": 1, "unit": "TL", "name": "Kreuzkümmel" },
      { "amount": 100, "unit": "ml", "name": "Rotwein" },
      { "amount": 200, "unit": "ml", "name": "Gemüsebrühe" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
    ],
    "instructions": [
      "Getrocknete Steinpilze mit heißem Wasser übergießen, 15 Min. einweichen. Pilze herausnehmen (Brühe aufheben!) und hacken.",
      "Olivenöl in einem Dutch Oven erhitzen. Zwiebeln und Knoblauch glasig anschwitzen.",
      "Frische Pilze in Portions dazugeben – sie sollen Platz zum Anbraten haben! 8 Min. braten, bis sie Farbe entwickeln.",
      "Tomatenmark, Rauchpaprika und Kreuzkümmel einrühren, kurz anrösten bis es duftet.",
      "Mit Rotwein ablöschen, einkochen lassen. Steinpilzbrühe (vorsichtig, ohne Sediment!) und Gemüsebrühe angießen.",
      "Sojasoße, gehackte Steinpilze und Salz/Pfeffer zugeben. 30 Min. bei niedriger Hitze köcheln, bis die Sauce eindickt.",
      "Abschmecken – mehr Rauchpaprika für Intensität, Sojasoße für Tiefe."
    ],
    "nutrition": {
      "calories": 337,
      "protein": "23g",
      "carbs": "36g",
      "fat": "3g"
    },
    "tips": [
      "Pilz-Trick: Nie waschen, nur mit einer Bürste säubern – sie saugen sich sonst mit Wasser voll.",
      "Für extra Umami: 1 TL Marmite oder Hefeflocken unterrühren.",
      "Schärfefans geben 1 TL Chiliflocken dazu.",
      "Übrig? Als Füllung für Blätterteigtaschen oder Omeletts verwenden!",
      "Tiefkühlpilze funktionieren auch – einfach vorher nicht auftauen.",
      "Wer’s dekadent mag: Mit 1 EL veganer Butter verfeinern."
    ],
    "whyFavorite": {
      "title": "Warum dieses Rezept meine Küchen-Philosophie verkörpert",
      "reasons": [
        {
          "title": "Umami-Strategie",
          "description": "Durch die Kombination von drei Pilzsorten + Steinpilzbrühe + Sojasoße erreichen wir den fünften Geschmackssinn – kein Fleisch nötig! Mein Trick: 1 TL Marmite unterrühren für extra Tiefe."
        },
        {
          "title": "Textur-Alchemie",
          "description": "Jeder Pilz bringt eine andere Mundfeel-Erfahrung: Champignons werden saftig, Austernpilze bleiben bissfest, Shiitake zerfallen fast wie Pulled Pork. So entsteht Komplexität ohne Mehraufwand."
        },
        {
          "title": "Zero-Waste-Potential",
          "description": "Pilzstiele, die sonst im Müll landen? Einfach mitkochen und später pürieren – sie verdicken die Sauce natürlich. Reste werden zu Füllungen oder Dip-Grundlagen."
        },
        {
          "title": "Saisonaler Star",
          "description": "Im Herbst mit Wildpilzen veredeln, im Winter mit TK-Ware zubereiten – es schmeckt immer passend zur Jahreszeit. Mein Frühlings-Tipp: Mit frischem Bärlauch toppen!"
        },
        {
          "title": "Kulinarische Brücke",
          "description": "Perfekt für gemischte Tische: vegan, glutenfrei (mit Tamari statt Sojasoße), und Fleischliebhaber fragen trotzdem nach dem Rezept. Ein Gericht, das verbindet."
        },
        {
          "title": "Meditatives Kochen",
          "description": "Das rhythmische Schneiden der Pilze, das Beobachten, wie sich die Aromen entwickeln – für mich ist die Zubereitung fast schon Achtsamkeitsübung. Und das Ergebnis belohnt doppelt."
        }
      ]
    },
    "handwrittenMessage": {
      "mainText": "Lass dich von den Pilzen verzaubern – sie haben mehr Tricks drauf, als du denkst!",
      "subText": "Ich wette, du wirst nie wieder sagen, Gulasch brauche Fleisch...",
      "signature": "Deine Pilzflüsterin"
    },
    "steps": [
      {
        "title": "Schritt 1: Die Pilz-Alchemie",
        "description": "Getrocknete Steinpilze sind das Geheimnis – ihre Brühe ist so intensiv, dass sie jeden Fleischfond blass aussehen lässt. Einweichen, hacken, und schon hast du flüssiges Umami."
      },
      {
        "title": "Schritt 2: Die Maillard-Reaktion",
        "description": "Pilze brauchen Platz in der Pfanne! Crowded pan = steamed mushrooms. Wir wollen sie goldbraun und knusprig, nicht matschig."
      },
      {
        "title": "Schritt 3: Die Rauchillusion",
        "description": "Rauchpaprika und Kreuzkümmel tricksen dein Gehirn aus – sie simulieren die Aromen von langsam gegartem Fleisch, ganz ohne Tier."
      },
      {
        "title": "Schritt 4: Die Reduktion",
        "description": "Der Rotwein reduziert zu einem Sirup, die Pilzbrühe verdickt sich – Geduld ist hier der Schlüssel zur Perfektion."
      }
    ],
    "servingSuggestion": "Auf fluffigem Selleriepüree mit karamellisierten Zwiebelringen – ein Kontrast aus süß, cremig und erdig.",
    "servingSuggestions": {
      "title": "Vom Comfort Food zur Gourmet-Kreation",
      "description": "Dieses Gulasch ist wie eine blanke Leinwand – hier sind fünf völlig unterschiedliche Servierideen, die es neu erfinden:",
      "note": "Jede Variante verändert die Stimmung des Gerichts – probier dich durch!",
      "items": [
        {
          "emoji": "🫒",
          "title": "Tapas-Style",
          "description": "In kleinen Cocottes mit Oliven-Tapenade-Crunch: 1 EL gehackte schwarze Oliven mit 1 TL Kapern und Semmelbröseln mischen, über das Gulasch streuen und gratinierten."
        },
        {
          "emoji": "🍚",
          "title": "Miso-Risotto-Untergrund",
          "description": "Cremiges Risotto mit weißer Miso-Paste verfeinert, darauf das Gulasch – die Fermentnoten spielen perfekt mit den Pilzen. Garniere mit gerösteten Sesamsamen."
        },
        {
          "emoji": "🥂",
          "title": "Fine-Dining-Version",
          "description": "Als Sauce zu gebratenen Jakobsmuscheln: Dafür das Gulasch pürieren und mit 1 EL Cashewcreme verfeinern. Zeigt, wie wandlungsfähig Pilze sind!"
        },
        {
          "emoji": "🌮",
          "title": "Fusion-Tacos",
          "description": "In Mais-Tacos mit Avocado-Creme und pinken eingelegten Zwiebeln – die Säure balanciert die Erdnoten. Mein Go-To für Dinnerpartys!"
        },
        {
          "emoji": "🍳",
          "title": "Brunch-Revolution",
          "description": "Als Topping für Shakshuka: In die klassische Tomaten-Paprika-Sauce einrühren, Eier pochen lassen. Dazu Sauerteigtoast – der perfekte Wochenend-Start."
        }
      ]

    },
    "funFact": {
      "title": "Pilze: Die heimlichen Netzwerker der Natur",
      "description": "Wusstest du, dass Pilze unterirdische 'Internet'-Netzwerke betreiben? 🌐 Myzelien (Pilzwurzeln) verbinden Bäume über Kilometer und tauschen Nährstoffe aus – Wissenschaftler nennen es 'Wood Wide Web'. Unsere Speisepilze sind nur die Früchte dieses gigantischen Systems! Beim Kochen ahmen wir diese Verbindungen nach: Sojasoße (fermentiert wie Pilze), Rauchpaprika (erinnert an verbranntes Holz) und Rotwein (terroir-reich wie Waldboden) schaffen ein Geschmacksnetzwerk, das genauso komplex ist wie die Natur selbst. Kochen ist eben auch Biologie!"
    },
    "images": {
      "imageIngredient": "/images/Ingredients/pilzgulaschIngredient.webp",
      "image1": "/images/MainCourses/pilzgulasch1.webp",
      "image2": "/images/MainCourses/pilzgulasch2.webp",
      "image3": "/images/MainCourses/pilzgulasch3.webp",
      "image4": "/images/MainCourses/pilzgulasch4.webp",
      "image5": "/images/MainCourses/pilzgulasch5.webp",
      "image6": "/images/MainCourses/pilzgulasch6.webp",
      "image7": "/images/MainCourses/pilzgulasch7.webp"
    }
  },
  {
    "title": "Gemüse-Curry",
    "seo_title": "Vegetarisches Gemüse-Curry Rezept – Cremig - würzig",
    "image": "/images/MainCourses/gemuese-curry.webp",
    "prepTime": 25,
    "cookingTime": 35,
    "seo_keywords": [
      "Vegetarisches Curry",
      "Gemüse-Curry Rezept",
      "Veganes Curry",
      "Asiatisch inspiriertes Curry",
      "Gesunde Curry-Variation"
    ],
    "rating": 4.7,
    "reviews": 153,
    "category": "Hauptgerichte",
    "slug": "gemuese-curry",
    "tags": ["Asiatisch", "Proteinreich", "Cremig", "Meal Prep", "Glutenfrei"],
    "createdDate": new Date('2025-02-10T00:00:00'),
    "updatedDate": new Date('2025-03-27T00:00:00'),
    "servings": 4,
    "description": "Ein cremiges, würziges Gemüse-Curry mit geröstetem Kürbis, Blumenkohl und Kichererbsen – eine vegetarische Geschmacksexplosion, die mit exotischen Gewürzen und einer samtigen Kokossoße überzeugt.",
    "descriptionOnImage": "Ein goldgelbes Gemüse-Curry mit Kürbis, Blumenkohl und Kichererbsen in cremiger Kokossoße, garniert mit frischem Koriander – ein Fest der Farben und Aromen.",

    "introductionParagraph": "Stell dir vor, du betrittst einen Gewürzmarkt in Bangkok. Die Luft ist erfüllt mit dem Duft von geröstetem Koriander, Kreuzkümmel und frischem Kurkuma – kein Fleisch in Sicht, und doch so intensiv, dass dir sofort das Wasser im Mund zusammenläuft. Dieses Gemüse-Curry ist meine Hommage an diese sinnliche Erfahrung: eine vegetarische Version, die mit geröstetem Kürbis für natürliche Süße, Blumenkohl für Biss und Kichererbsen für Protein spielt. Es ist kein 'fleischloses' Curry – es ist eine eigenständige Kreation, die Gemüse feiert statt es zu ersetzen. Mein Geheimnis? Die Gewürze werden trocken angeröstet, bevor sie in die Kokosmilch wandern – ein kleiner Schritt mit großer Wirkung.",

    "additionalParagraph": "Was dieses Curry besonders macht? Seine Wandlungsfähigkeit. An hektischen Tessen schmeiße ich es einfach mit Reis in eine Schüssel. Für Dinnerpartys verwandle ich es in eine interaktive 'Curry-Bar' mit selbstgemachten Roti und Toppings wie gerösteten Cashews und eingelegtem Gemüse. Mein persönlicher Pro-Tipp: Die Gewürzmischung doppelt portionieren – halb fürs Curry, halb fürs Popcorn am Filmabend. Probier’s aus und du wirst sehen: Dieses Curry wird deine Gewürzdose für immer verändern.",

    "ingredientsNeeded": [
      {
        "title": "Kürbis",
        "description": "Hokkaido oder Butternut – geröstet entwickelt er karamellige Tiefe und gibt dem Curry natürliche Süße ohne Zucker."
      },
      {
        "title": "Blumenkohl",
        "description": "In Röschen gebraten, wird er zum Geschmacksträger für die Gewürze und gibt Biss."
      },
      {
        "title": "Kichererbsen",
        "description": "Vorgekocht oder aus der Dose – sie bringen Protein und eine cremige Textur ins Spiel."
      },
      {
        "title": "Kokosmilch",
        "description": "Die fettreiche Variante gibt dem Curry seine samtige Basis. Für weniger Kalorien mit Light-Kokosmilch ersetzen."
      },
      {
        "title": "Garam Masala",
        "description": "Die fertige Mischung ist praktisch, aber selbst geröstet und gemahlen schmeckt sie wie ein Flug nach Delhi."
      }
    ],

    "ingredientGroups": [
      {
        "title": "Das Gemüse",
        "description": "Geröstet entwickeln sie Röstaromen, die das Curry komplex machen – kein matschiges Einerlei!",
        "ingredients": [
          { "amount": 400, "unit": "g", "name": "Kürbis (gewürfelt, Haut dran)" },
          { "amount": 1, "unit": "Kopf", "name": "Blumenkohl (in Röschen)" },
          { "amount": 1, "unit": "Dose", "name": "Kichererbsen (abgetropft)" },
          { "amount": 2, "unit": "EL", "name": "Kokosöl" }
        ]
      },
      {
        "title": "Die Gewürzbasis",
        "description": "Trockenrösten ist der Schlüssel – so entfalten sie ihr volles Aroma bevor sie flüssig werden.",
        "ingredients": [
          { "amount": 1, "unit": "TL", "name": "Koriandersamen" },
          { "amount": 1, "unit": "TL", "name": "Kreuzkümmelsamen" },
          { "amount": 1, "unit": "TL", "name": "Senfsamen" },
          { "amount": 1, "unit": "TL", "name": "Kurkumapulver" },
          { "amount": 1, "unit": "TL", "name": "Garam Masala" },
          { "amount": 1, "unit": "Prise", "name": "Chiliflocken" }
        ]
      },
      {
        "title": "Die Flüssigkeiten",
        "description": "Sie tragen die Gewürze und machen aus Gemüse ein harmonisches Curry.",
        "ingredients": [
          { "amount": 1, "unit": "Dose", "name": "Kokosmilch (400 ml)" },
          { "amount": 200, "unit": "ml", "name": "Gemüsebrühe" },
          { "amount": 2, "unit": "EL", "name": "Tomatenmark" }
        ]
      }
    ],

    "ingredients": [
      { "amount": 400, "unit": "g", "name": "Kürbis" },
      { "amount": 1, "unit": "Kopf", "name": "Blumenkohl" },
      { "amount": 1, "unit": "Dose", "name": "Kichererbsen" },
      { "amount": 2, "unit": "EL", "name": "Kokosöl" },
      { "amount": 1, "unit": "TL", "name": "Koriandersamen" },
      { "amount": 1, "unit": "TL", "name": "Kreuzkümmelsamen" },
      { "amount": 1, "unit": "TL", "name": "Senfsamen" },
      { "amount": 1, "unit": "TL", "name": "Kurkumapulver" },
      { "amount": 1, "unit": "TL", "name": "Garam Masala" },
      { "amount": 1, "unit": "Prise", "name": "Chiliflocken" },
      { "amount": 1, "unit": "Dose", "name": "Kokosmilch" },
      { "amount": 200, "unit": "ml", "name": "Gemüsebrühe" },
      { "amount": 2, "unit": "EL", "name": "Tomatenmark" },
      { "amount": 1, "unit": "Handvoll", "name": "Koriander (frisch)" }
    ],

    "instructions": [
      "Ofen auf 200°C vorheizen. Kürbis und Blumenkohl mit 1 EL Kokosöl vermengen, 25 Min. rösten, bis sie Farbe entwickeln.",
      "In der Zwischenzeit Koriander-, Kreuzkümmel- und Senfsamen in einem trockenen Topf 2 Min. rösten, bis sie duften. Sofort herausnehmen.",
      "Im gleichen Topf 1 EL Kokosöl erhitzen. Tomatenmark und Kurkuma 1 Min. anrösten.",
      "Gemüsebrühe und Kokosmilch angießen, geröstete Gewürze und Garam Masala einrühren. 10 Min. köcheln.",
      "Geröstetes Gemüse und Kichererbsen unterheben. Mit Salz, Chiliflocken abschmecken. 5 Min. ziehen lassen.",
      "Mit frischem Koriander bestreuen."
    ],

    "nutrition": {
      "calories": 1540,
      "protein": "43.5g",
      "carbs": "124g",
      "fat": "99.5g"
    },

    "tips": [
      "Für Extra-Crunch: 2 EL Cashewkerne mit den Gewürzen rösten und als Topping verwenden.",
      "Scharf-Liebhaber: 1 frische Chili mitkochen oder Sriracha servieren.",
      "Garam Masala selbst machen: 1 TL je Kreuzkümmel, Koriander, Kardamom, Pfeffer, Zimt, Nelken trocken rösten, mahlen.",
      "Blattgemüse? Spinat oder Grünkohl in den letzten 2 Min. unterheben.",
      "Sauer macht lustig: Mit Limettensaft oder eingelegtem Rettich servieren."
    ],

    "whyFavorite": {
      "title": "Warum dieses Curry meine Gewürzschublade revolutioniert hat",
      "reasons": [
        {
          "title": "Aromen-Explosion",
          "description": "Durch das Rösten der Gewürze entstehen Tiefen, die selbst Restaurant-Currys Konkurrenz machen – ganz ohne Fischsoße oder Fleischbrühe."
        },
        {
          "title": "Textur-Feuerwerk",
          "description": "Knusprig gerösteter Kürbis, bissfester Blumenkohl und cremige Kichererbsen – jeder Löffel ist ein Erlebnis."
        },
        {
          "title": "Meal-Prep-Held",
          "description": "Schmeckt am nächsten Tag noch besser – einfach Portionen einfrieren oder für Lunchboxen verwenden."
        },
        {
          "title": "Allergiker-freundlich",
          "description": "Von Natur aus glutenfrei, laktosefrei und vegan – ohne Kompromisse beim Geschmack."
        },
        {
          "title": "Kulinarische Weltreise",
          "description": "Ein Hauch von Indien (Garam Masala), Thailand (Kokosmilch) und Nahost (Kichererbsen) in einem Topf."
        },
        {
          "title": "Kreativitäts-Katalysator",
          "description": "Grundrezept bleibt gleich, aber Gemüse und Gewürze lassen sich saisonal anpassen – mal mit Aubergine, mal mit Süßkartoffel."
        }
      ]
    },

    "handwrittenMessage": {
      "mainText": "Lass dich von den Gewürzen verführen – sie haben mehr Charakter, als du denkst!",
      "subText": "Ich wette, nach diesem Curry wirst du Gewürze nie wieder nur aus der Dose schütteln...",
      "signature": "Deine Gewürzalchemistin"
    },

    "steps": [
      {
        "title": "Schritt 1: Die Röstoffensive",
        "description": "Kürbis und Blumenkohl nicht nur dämpfen, sondern karamellisieren – das gibt rauchige Tiefe, die typisch für Straßenküchen-Currys ist."
      },
      {
        "title": "Schritt 2: Gewürz-Alchemie",
        "description": "Ganze Samen (nicht Pulver!) trocken rösten – wenn sie duften wie frisch gemahlener Kaffee, sind sie bereit für die Kokosmilch."
      },
      {
        "title": "Schritt 3: Die Emulsion",
        "description": "Tomatenmark in Öl anrösten, bis es dunkler wird – so bindet es die Flüssigkeiten und verhindert eine wässrige Soße."
      },
      {
        "title": "Schritt 4: Die Fusion",
        "description": "Kokosmilch nie kochen lassen! Nur sanft köcheln, damit sie nicht flockt – Geduld macht hier den Unterschied zwischen gut und großartig."
      }
    ],
    "servingSuggestion": "Auf Jasminreis mit karamellisierten Schalotten und einer Handvoll Mikrogrün – ein Kontrast aus süß, würzig und frisch.",
    "servingSuggestions": {
      "title": "Beyond Rice: Unerwartete Curry-Partner",
      "description": "Reis ist nur der Anfang – hier sind fünf Ideen, die dein Curry zum Hauptdarsteller machen:",
      "note": "Für klassische Vegetarier: Serviere mit duftendem Jasminreis oder cremigem Kartoffelpüree. Für Abwechslung: Die folgenden ungewöhnlichen Pairings zeigen, wie wandlungsfähig pflanzliche Küche sein kann!",
      "items": [
        {
          "emoji": "🍚",
          "title": "Reis-Variationen",
          "description": "Jasminreis für Duft • Schwarzer Reis für Drama • Kokosreis für Süße – jede Sorte verändert das Curry-Erlebnis."
        },
        {
          "emoji": "🍠",
          "title": "Süßkartoffel-Püree",
          "description": "Cremig-süßes Püree als Untergrund – die perfekte Balance zum würzigen Curry. Tipp: Mit Kokosmilch statt Butter mixen!"
        },
        {
          "emoji": "🥬",
          "title": "Kimchi-Pfannkuchen",
          "description": "Knusprige Reismehl-Pfannkuchen mit fermentiertem Kimchi – koreanisch-indische Fusion, die süchtig macht."
        },
        {
          "emoji": "🥑",
          "title": "Avocado-Schiffchen",
          "description": "Curry in Avocadohälften füllen, mit Edamame und Sesam toppen – low-carb und instagramtauglich."
        },
        {
          "emoji": "🍜",
          "title": "Curry-Ramen",
          "description": "Mit Gemüsebrühe strecken und über Ramen-Nudeln gießen – das ultimative Comfort-Food-Upgrade."
        },
        {
          "emoji": "🌯",
          "title": "Curry-Dürüm",
          "description": "In warmen Fladenbrot mit Joghurt-Sauce und Salat einwickeln – das Streetfood-Erlebnis für unterwegs."
        }
      ]
    },

    "funFact": {
      "title": "Fun Fact: Die Chemie der Gewürze",
      "description": "Wusstest du, dass Kreuzkümmel und Koriander chemische Cousins sind? 🧪 Beide enthalten Aldehyde – Aromamoleküle, die unser Gehirn als ‚warm‘ und ‚erdig‘ interpretiert. Aber während Kreuzkümmel (Cuminaldehyd) rauchig-pfeffrig schmeckt, ist Koriander (Linalool) blumig-zitronig. Zusammen ergeben sie das berühmte ‚Jeera-Dhania‘-Duo der indischen Küche. Noch wilder: Hitze verändert ihre Molekularstruktur! Beim Rösten entstehen Pyrazine – dieselben Verbindungen, die auch Kaffee und Schokolade ihr Aroma geben. Kurzum: Dein Curry ist eigentlich ein Chemielabor… und du bist die Wissenschaftlerin!"
    },

    "images": {
      "imageIngredient": "/images/Ingredients/gemueseCurryIngredient.webp",
      "image1": "/images/MainCourses/gemuese-curry1.webp",
      "image2": "/images/MainCourses/gemuese-curry2.webp",
      "image3": "/images/MainCourses/gemuese-curry3.webp",
      "image4": "/images/MainCourses/gemuese-curry4.webp",
      "image5": "/images/MainCourses/gemuese-curry5.webp",
      "image6": "/images/MainCourses/gemuese-curry6.webp",
      "image7": "/images/MainCourses/gemuese-curry7.webp"
    }
  },
  {
    "title": "Brokkoli-Quiche",
    "seo_title": "Vegetarische Brokkoli-Quiche – Cremig, nussig & voller Aromen",
    "image": "/images/MainCourses/brokkoli-quiche.webp",
    "prepTime": 30,
    "cookingTime": 45,
    "seo_keywords": [
      "Vegetarische Quiche",
      "Brokkoli-Quiche Rezept",
      "Pflanzenbasierte Quiche",
      "Proteinreiche vegetarische Gerichte",
      "Einfache vegetarische Backrezepte"
    ],
    "rating": 4.5,
    "reviews": 175,
    "category": "Vegetarische Hauptgerichte",
    "slug": "brokkoli-quiche",
    "tags": ["Französisch", "Gebäck", "Gemüse"],
    "createdDate": new Date('2025-02-14T00:00:00'),
    "updatedDate": new Date('2025-03-27T00:00:00'),
    "servings": 9,
    "description": "Eine vollständig vegetarische Quiche mit knusprigem Brokkoli, gerösteten Haselnüssen und zwei Käsesorten – eine pflanzliche Proteinbombe, die beweist, dass Backen ohne Fleisch genauso herzhaft schmeckt.",
    "descriptionOnImage": "Eine goldbraune Quiche mit saftigem Brokkoli, knusprigen Haselnüssen und geschmolzenem Käse – vegetarische Backkunst auf höchstem Niveau.",
    "ingredients": [
      { "amount": 200, "unit": "g", "name": "Dinkelvollkornmehl" },
      { "amount": 100, "unit": "g", "name": "Vollkornhaferflocken" },
      { "amount": 80, "unit": "ml", "name": "Olivenöl" },
      { "amount": 100, "unit": "g", "name": "Griechischer Joghurt (vegetarisch)" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Kopf", "name": "Brokkoli (in 2cm dicken 'Steaks')" },
      { "amount": 50, "unit": "g", "name": "Haselnüsse (geröstet)" },
      { "amount": 200, "unit": "g", "name": "Ricotta (vegetarisch)" },
      { "amount": 100, "unit": "g", "name": "Bergkäse (gerieben)" },
      { "amount": 3, "unit": "", "name": "Eier (oder 2 Eier + 1 Leinsamen-Ei für vegan)" },
      { "amount": 1, "unit": "TL", "name": "Muskatnuss" }
    ],
    "introductionParagraph": "Es gibt Gerichte, die schreien nach Aufmerksamkeit – und dann gibt es diese Brokkoli-Quiche. Sie flüstert. Mit jedem Bissen enthüllt sie eine neue Geschmacksschicht: erst die buttrige Kruste, dann der geröstete Brokkoli mit seinen nussigen Röstaromen, gefolgt von der cremigen Füllung, die dank Ricotta und Bergkäse schmilzt wie ein Sonnenuntergang über der Toskana. Was sie besonders macht? Sie braucht kein Fleisch, um zu überzeugen. Der Brokkoli wird hier nicht als 'Ersatz' behandelt, sondern als Hauptdarsteller – in Scheiben geschnitten wie ein Steak, scharf angebraten, bis die Röschen knusprige Kanten bekommen. Dies ist kein 'vegetarisches Gericht'. Dies ist einfach ein großartiges Gericht, das zufällig pflanzlich ist.",
    "additionalParagraph": "Diese Quiche ist mein geheimes Wunderwaffe gegen das Vorurteil, vegetarische Küche sei langweilig. Für Brunch-Gäste serviere ich sie mit einem Klecks Zitronen-Kräuter-Crème fraîche und beobachte, wie selbst eingefleischte Fleischliebhaber um zweite Portionen bitten. An Wochentagen wandert sie in meine Lunchbox – kalt schmeckt sie fast noch besser, wenn die Aromen über Nacht verschmelzen. Mein Pro-Tipp: Backe zwei! Eine zum sofortigen Verzehr, eine zum Einfrieren. Denn wenn spätabends die Lust auf Komfort kommt, ist eine aufgetaute Quiche-Scheibe unter dem Grill das beste pflanzliche Fast-Food der Welt.",
    "ingredientsNeeded": [
  {
    "title": "Brokkoli (der vegetarische Star)",
    "description": "In dicken 'Steaks' geschnitten und scharf angebraten – so wird er zur Hauptattraktion, nicht nur zur Beilage. Reich an Vitamin C und Ballaststoffen."
  },
  {
    "title": "Haselnüsse (pflanzliches Crunch-Wunder)",
    "description": "Geröstet und grob gehackt ersetzen sie Speck nicht – sie machen ihn überflüssig. Liefern gesunde Fette und Aroma-Tiefe."
  },
  {
    "title": "Ricotta & Bergkäse (vegetarische Cremigkeit)",
    "description": "Die Kombination aus milder Frische und würzigem Schmelz gibt pflanzlichen Gerichten die perfekte Textur – kein Ei-Überschuss nötig."
  },
  {
    "title": "Dinkelvollkornmehl (die nussige Basis)",
    "description": "Nährstoffreicher als Weißmehl und mit natürlicher Süße – der ideale Partner für herzhafte vegetarische Gebäcke."
  },
  {
    "title": "Vollkornhaferflocken (der ballaststoffreiche Partner)",
    "description": "Verleiht Teigen Biss und Nährstoffe – perfekt für eine herzhafte, sättigende Textur."
  },
  {
    "title": "Olivenöl (der flüssige Goldstandard)",
    "description": "Hochwertiges natives Öl für Röstaromen und saftige Ergebnisse. Vegan und geschmacksintensiv."
  },
  {
    "title": "Griechischer Joghurt (die sahnige Bindung)",
    "description": "Verleiht Feuchtigkeit und Frische. Vegetarische Alternative zu Eiern in Teigen."
  },
  {
    "title": "Salz (der Geschmacksverstärker)",
    "description": "Eine Prise hebt alle Aromen hervor – dosiert, um die natürliche Gemüsesüße zu bewahren."
  },
  {
    "title": "Eier (die Bindekraft)",
    "description": "Sorgen für Struktur und Lockerheit. Für vegane Version: Leinsamen-Ei (1 EL Leinsamenmehl + 3 EL Wasser pro Ei)."
  },
  {
    "title": "Muskatnuss (das warme Aroma)",
    "description": "Eine Messerspitze veredelt Käse und Ricotta mit erdiger, leicht süßlicher Note."
  }
],

    "ingredientGroups": [
      {
        "title": "Die vegetarische Teigbasis",
        "description": "Ein nussiger Vollkornteig, der auch ohne tierische Zutaten perfekt bröselt – dank griechischem Joghurt statt Ei.",
        "ingredients": [
          { "amount": 200, "unit": "g", "name": "Dinkelvollkornmehl" },
          { "amount": 100, "unit": "g", "name": "Vollkornhaferflocken" },
          { "amount": 80, "unit": "ml", "name": "Olivenöl" },
          { "amount": 100, "unit": "g", "name": "Griechischer Joghurt (vegetarisch)" },
          { "amount": 1, "unit": "Prise", "name": "Salz" }
        ]
      },
      {
        "title": "Die pflanzliche Füllung",
        "description": "Cremig ohne Sahne, proteinreich ohne Fleisch – vegetarische Küche auf ihrem besten Niveau.",
        "ingredients": [
          { "amount": 1, "unit": "Kopf", "name": "Brokkoli (in 2cm dicken 'Steaks')" },
          { "amount": 50, "unit": "g", "name": "Haselnüsse (geröstet)" },
          { "amount": 200, "unit": "g", "name": "Ricotta (vegetarisch)" },
          { "amount": 100, "unit": "g", "name": "Bergkäse (gerieben)" },
          { "amount": 3, "unit": "", "name": "Eier (oder 2 Eier + 1 Leinsamen-Ei für vegan)" },
          { "amount": 1, "unit": "TL", "name": "Muskatnuss" }
        ]
      }
    ],

    "instructions": [
      "Teig: Mehl, Haferflocken und Salz vermischen. Öl und Joghurt einrühren, zu einem Ball kneten. 30 Min. kühl stellen.",
      "Brokkoli-Steaks in einer Pfanne mit 1 EL Öl 3 Min. pro Seite anbraten, bis sie Röstaromen entwickeln. Haselnüsse grob hacken.",
      "Teig ausrollen, in eine gefettete Quicheform legen. Mit Gabel einstechen, 15 Min. blind backen (180°C).",
      "Füllung: Eier, Ricotta, Muskat und 2/3 des Käses verquirlen. Brokkoli und Nüsse auf dem Teig verteilen, Eiermischung darüber.",
      "Mit restlichem Käse bestreuen. 30 Min. backen, bis die Füllung fest ist."
    ],

    "nutrition": {
      "calories": 3302,
      "protein": "126g",
      "carbs": "253g",
      "fat": "206g"
    },

    "tips": [
      "Für vegane Version: Ei durch Kichererbsenmehl-Mischung (1 EL Mehl + 3 EL Wasser pro Ei) ersetzen.",
      "Brokkoli-Stiele nicht wegwerfen! Geschält und gewürfelt machen sie 50% mehr Füllung.",
      "Nuss-Tipp: Mandeln oder Walnüsse funktionieren genauso – einfach nach Vorrat wechseln.",
      "Meal Prep: Eingefrorene Quiche-Scheiben 10 Min. im Toaster aufbacken – perfekt für schnelle vegetarische Mahlzeiten.",
      "Käse-Alternative: Für intensiveren Geschmack 50g gereiften Gouda untermischen."
    ],

    "whyFavorite": {
      "title": "Warum diese Quiche meine vegetarische Küche repräsentiert",
      "reasons": [
        {
          "title": "Textur-Poesie",
          "description": "Knuspriger Teig + cremige Füllung + crunchige Nüsse = ein vegetarisches Sinnenerlebnis, das Fleisch nicht vermissen lässt."
        },
        {
          "title": "Protein-Power",
          "description": "Mit 14g Protein pro Stück (dank Eiern, Käse und Nüssen) ist es eine vollwertige vegetarische Hauptmahlzeit."
        },
        {
          "title": "Saisonaler Chamäleon",
          "description": "Im Frühling mit Spargel, im Herbst mit Kürbis – die Basis bleibt, die Gemüse wechseln mit den Jahreszeiten."
        },
        {
          "title": "Brunch-Queen",
          "description": "Kalt oder warm servierbar – ideal für gemischte Tische (vegane Option inklusive)."
        },
        {
          "title": "Zero-Waste-Star",
          "description": "Verwendet den ganzen Brokkoli (auch Stiele!) und Reste werden zu neuen Kreationen (siehe Serving-Ideen)."
        }
      ]
    },

    "handwrittenMessage": {
      "mainText": "Lass dich vom Brokkoli überraschen – er kann mehr, als du denkst!",
      "subText": "Ich wette, nach dieser Quiche siehst du Gemüse mit neuen Augen...",
      "signature": "Deine Gemüse-Patissière"
    },

    "steps": [
      {
        "title": "Schritt 1: Die Teig-Alchemie",
        "description": "Dinkelvollkornmehl + Haferflocken + Joghurt ergeben einen Teig, der auch ohne Butter zart bröselt – das Geheimnis liegt im griechischen Joghurt, der Feuchtigkeit und Bindekraft schenkt."
      },
      {
        "title": "Schritt 2: Brokkoli-Transformation",
        "description": "In dicken Scheiben angebraten, entwickelt der Brokkoli Röstaromen, die an Grillgemüse erinnern – kein matschiges Beilagen-Gemüse mehr!"
      },
      {
        "title": "Schritt 3: Die Füllungs-Philosophie",
        "description": "Ricotta macht die Masse luftig-leicht, während Bergkäse für Schmelz sorgt – eine vegetarische Lektion in Textur-Balance."
      }
    ],

    "servingSuggestion": "Mit einem Klecks Zitronen-Crème fraîche und essbaren Blüten – so wird vegetarische Küche zum Gourmet-Erlebnis.",

    "servingSuggestions": {
      "title": "Vom Frühstück bis zum Dinner: Vegetarische Quiche-Inszenierungen",
      "description": "Diese Quiche spielt Hauptrolle oder Nebendarsteller – je nachdem, wie du sie in Szene setzt:",
      "note": "Klassisch vegetarisch: Serviere mit Rucola-Salat oder gerösteten Cherrytomaten. Oder wage dich an diese unkonventionellen Ideen:",
      "items": [
        {
          "emoji": "🍵",
          "title": "Misosuppen-Bowle",
          "description": "Eine Tasse klare Misosuppe daneben – die Umami-Noten heben den Käse hervor, während die Brühe vegetarisch sättigt."
        },
        {
          "emoji": "🌯",
          "title": "Quiche-Tacos",
          "description": "Kalte Quiche-Stücke in warme Tortillas wickeln + Avocado-Creme – vegetarischer Brunch zum Mitnehmen."
        },
        {
          "emoji": "🍠",
          "title": "Süßkartoffel-Bett",
          "description": "Auf pürierter Süßkartoffel mit Zimt servieren – die Süße kontrastiert perfekt mit dem herzhaften Käse."
        },
        {
          "emoji": "🥗",
          "title": "Deconstructed Salad",
          "description": "Quiche in Würfel schneiden, mit gerösteten Kichererbsen und Granatapfelkernen mixen – Meal-Prep-Salat der Extraklasse."
        }
      ]
    },

    "funFact": {
      "title": "Fun Fact: Brokkoli – Der unterschätzte Proteinkünstler",
      "description": "Wusstest du, dass Brokkoli pro Kalorie mehr Protein enthält als Rindfleisch? 🥦💪 Während 100g Rind etwa 26g Protein bei 250 kcal liefern, bietet Brokkoli 3g Protein bei nur 35 kcal – hochgerechnet also mehr Protein pro Energieeinheit! Noch wilder: Die Sulforaphan-Verbindungen in Brokkoli aktivieren unsere Entgiftungsenzyme. Dieses Curry ist also nicht nur vegetarisch lecker – es ist eine kleine Detox-Kur obendrauf!"
    },

    "images": {
      "imageIngredient": "/images/Ingredients/brokkoliquicheIngredint.webp",
      "image1": "/images/MainCourses/brokkoli-quiche1.webp",
      "image2": "/images/MainCourses/brokkoli-quiche2.webp",
      "image3": "/images/MainCourses/brokkoli-quiche3.webp",
      "image4": "/images/MainCourses/brokkoli-quiche4.webp",
      "image5": "/images/MainCourses/brokkoli-quiche5.webp",
      "image6": "/images/MainCourses/brokkoli-quiche6.webp",
      "image7": "/images/MainCourses/brokkoli-quiche7.webp"
    }
  },
  {
    "title": "Ratatouille Provençal",
    "seo_title": "Vegetarisches Ratatouille Rezept – Gemüseperfektion",
    "image": "/images/Miscellaneous/ratatouille.webp",
    "prepTime": 20,
    "cookingTime": 50,
    "seo_keywords": [
      "Vegetarisches Ratatouille",
      "Pflanzliche französische Küche",
      "Gemüsegericht Provençal",
      "Gesunde mediterrane Rezepte",
      "Vegetarische Sommerküche"
    ],
    "rating": 4.1,
    "reviews": 144,
    "category": "Vegetarische Hauptgerichte",
    "slug": "ratatouille",
    "tags": ["Französisch", "Gemüse", "Hauptgericht"],
    "servings": 2,
    "createdDate": new Date('2025-02-14T00:00:00'),
    "updatedDate": new Date('2025-03-27T00:00:00'),
    "description": "Vegetarisches Gericht – geschichtete Auberginen, Zucchini und Paprika in einer Tomatenbasis, die beweisen, dass pflanzliche Küche niemals langweilig ist.",

    "descriptionOnImage": "Ein farbenfrohes Tiegelgericht mit perfekt arrangiertem Gemüse in konzentrischen Kreisen – vegetarische Ästhetik und Geschmack in Harmonie.",

    "introductionParagraph": "Stellen Sie sich vor, Sie sitzen in einem versteckten Innenhof irgendwo in Nizza. Die Luft duftet nach sonnengereiften Tomaten, frischem Basilikum und dem holzigen Aroma von Olivenöl – kein Hauch von Fleisch, und doch so tief im Geschmack, dass sich Ihre Geschmacksknospen sofort aufrichten. Dieses Ratatouille ist meine Hommage an diese sinnliche Erfahrung: ein vegetarisches Meisterwerk, bei dem jedes Gemüse wie ein Solist in einem perfekt orchestrierten Konzert behandelt wird. Die Auberginen werden nicht einfach gewürfelt, sondern in mondförmige Scheiben geschnitten, die sich beim Backen in buttrige Köstlichkeiten verwandeln. Die Zucchini behalten ihren Biss, als würden sie sich weigern, in der Hitze des Ofens nachzugeben. Und die Paprika? Sie sind die heimlichen Stars – geröstet, bis ihre natürliche Süße wie kandierte Sonnenstrahlen schmeckt.",

    "additionalParagraph": "Was dieses pflanzliche Gericht besonders macht, ist seine Wandlungsfähigkeit. An heißen Sommertagen serviere ich es lauwarm mit einem Klecks veganer Aioli – das kühle Knoblaucharoma kontrastiert wunderbar mit den warmen Gemüsenoten. An kühleren Abenden wird es zur Füllung für knusprige Blätterteigtaschen, bestreut mit gerösteten Pinienkernen. Mein Geheimtipp: Die Ratatouille-Brühe, die sich im Tiegel sammelt, ist flüssiges Gold. Einfach mit einem Löffel auffangen und über frisches Ciabatta träufeln – oder als Basis für eine vegetarische Minestrone verwenden. Dies ist kein Gericht, das Sie einmal kochen. Dies ist eine pflanzliche Technik, die Sie ein Leben lang begleiten wird.",

    "ingredientsNeeded": [
      {
        "title": "Auberginen (die pflanzlichen Schwämme)",
        "description": "In Scheiben gesalzen und gepresst, saugen sie später das Olivenöl und die Kräuteraromen optimal auf – kein matschiges Gemüse mehr!"
      },
      {
        "title": "Zucchini (der Biss-Held)",
        "description": "Mit der Schale verarbeitet, behalten sie Struktur und liefern zusätzliche Ballaststoffe für die vegetarische Ernährung."
      },
      {
        "title": "Gelbe Paprika (die Süßespender)",
        "description": "Geröstet entwickeln sie karamellige Tiefe – der natürliche Zucker ersetzt jede Zugabe von Industriezucker."
      },
      {
        "title": "San-Marzano-Tomaten (die Umami-Bombe)",
        "description": "Diese italienischen Flaschentomaten haben doppelt so viel Fruchtfleisch wie normale Tomaten – die perfekte Basis für pflanzliche Intensität."
      },
      {
        "title": "Zwiebel (die aromatische Seele)",
        "description": "Langsam geschmort entwickeln sie eine süßliche Tiefe, die jedem Gericht eine fundamentale Geschmacksbasis verleiht."
      },
      {
        "title": "Knoblauch (der pflanzliche Geschmacksverstärker)",
        "description": "Fein gehackt und sanft angeschwitzt entfaltet er sein volles Aroma ohne Dominanz – das Geheimnis jeder guten Küche."
      },
      {
        "title": "Rosmarin (das harzige Aroma-Wunder)",
        "description": "Seine nadelförmigen Blätter verleihen Gerichten eine waldige Tiefe – frisch immer besser als getrocknet!"
      },
      {
        "title": "Thymian (der mediterrane Alleskönner)",
        "description": "Seine kleinen Blättchen setzen beim Kochen kontinuierlich Aromen frei – perfekt für Schmorgerichte und Saucen."
      }
    ],

    "ingredientGroups": [
      {
        "title": "Das Gemüse-Ensemble",
        "description": "Jede Zutat wird sorgfältig vorbereitet, um ihre beste vegetarische Version zu werden:",
        "ingredients": [
          { "amount": 2, "unit": "", "name": "Auberginen (in 0,5cm Scheiben)" },
          { "amount": 3, "unit": "", "name": "Zucchini (in Scheiben)" },
          { "amount": 2, "unit": "", "name": "Gelbe Paprika (in Streifen)" },
          { "amount": 1, "unit": "", "name": "Rote Zwiebel (geviertelt)" }
        ]
      },
      {
        "title": "Die Tomatenbasis",
        "description": "Die Grundlage, die alles zusammenhält – voller pflanzlicher Tiefe:",
        "ingredients": [
          { "amount": 800, "unit": "g", "name": "San-Marzano-Tomaten (gehäutet)" },
          { "amount": 4, "unit": "Zehen", "name": "Knoblauch (gehackt)" },
          { "amount": 1, "unit": "Bund", "name": "Basilikum" },
          { "amount": 1, "unit": "TL", "name": "Zucker" }
        ]
      },
      {
        "title": "Die Kräuterdecke",
        "description": "Frische Kräuter, die das vegetarische Gericht parfümieren:",
        "ingredients": [
          { "amount": 2, "unit": "Zweige", "name": "Rosmarin" },
          { "amount": 4, "unit": "Zweige", "name": "Thymian" },
          { "amount": 1, "unit": "EL", "name": "Olivenöl" }
        ]
      }
    ],

    "ingredients": [
      { "amount": 2, "unit": "", "name": "Auberginen" },
      { "amount": 3, "unit": "", "name": "Zucchini" },
      { "amount": 2, "unit": "", "name": "Gelbe Paprika" },
      { "amount": 1, "unit": "", "name": "Rote Zwiebel" },
      { "amount": 800, "unit": "g", "name": "San-Marzano-Tomaten" },
      { "amount": 4, "unit": "Zehen", "name": "Knoblauch" },
      { "amount": 1, "unit": "Bund", "name": "Basilikum" },
      { "amount": 1, "unit": "TL", "name": "Zucker" },
      { "amount": 2, "unit": "Zweige", "name": "Rosmarin" },
      { "amount": 4, "unit": "Zweige", "name": "Thymian" },
      { "amount": 5, "unit": "EL", "name": "Olivenöl" },
      { "amount": 1, "unit": "Prise", "name": "Salz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
    ],

    "instructions": [
      "Auberginenscheiben salzen, 30 Min. beschwert abtropfen lassen (entzieht Bitterstoffe).",
      "Tomaten kreuzweise einritzen, mit kochendem Wasser überbrühen, häuten und würfeln.",
      "In einer Pfanne 2 EL Olivenöl erhitzen. Zwiebeln und Knoblauch 5 Min. anschwitzen. Tomaten und Zucker zugeben, 15 Min. köcheln.",
      "Paprikastreifen in 1 EL Öl 5 Min. anbraten, bis sie weich sind.",
      "Ofen auf 180°C vorheizen. Tomatensauce in eine Auflaufform geben.",
      "Gemüse dekorativ schichtweise anordnen: abwechselnd Auberginen, Zucchini und Paprika.",
      "Kräuter darüberlegen, mit Olivenöl beträufeln. 40 Min. backen, bis das Gemüse weich ist.",
      "Mit frischem Basilikum garnieren."
    ],

    "nutrition": {
      "calories": 707,
      "protein": "26g",
      "carbs": "122g",
      "fat": "21g"
    },

    "tips": [
      "Für extra Umami: 2 getrocknete Steinpilze mit den Tomaten köcheln.",
      "Vegan-Option: Zucker durch 1 TL Ahornsirup ersetzen.",
      "Resteverwertung: Übriges Ratatouille pürieren – ergibt eine hervorragende vegetarische Pastasauce.",
      "Kräutertipp: Lorbeerblätter unter das Gemüse legen für subtile Aromen.",
      "Meal Prep: Hält sich 4 Tage im Kühlhaus und schmeckt kalt noch intensiver."
    ],

    "whyFavorite": {
      "title": "Warum dieses Ratatouille meine pflanzliche Küche definiert",
      "reasons": [
        {
          "title": "Visuelle Poesie",
          "description": "Die spiralförmige Anordnung verwandelt einfaches Gemüse in ein essbares Kunstwerk – vegetarische Küche muss nie langweilig aussehen."
        },
        {
          "title": "Slow-Food-Philosophie",
          "description": "Jedes Gemüse wird einzeln zubereitet – eine meditative, achtsame Art des pflanzlichen Kochens."
        },
        {
          "title": "Saisonaler Bote",
          "description": "Im Sommer mit frischem Gemüse, im Winter mit Ofenkürbis variierbar – ein vegetarisches Gericht für alle Jahreszeiten."
        },
        {
          "title": "Allergikerfreundlich",
          "description": "Von Natur aus glutenfrei, laktosefrei und vegan (mit kleinen Anpassungen) – inklusive Genuss ohne Kompromisse."
        }
      ]
    },

    "handwrittenMessage": {
      "mainText": "Lass dich vom Gemüse verzaubern – es hat mehr Geschichten zu erzählen, als du denkst!",
      "subText": "Ich wette, nach diesem Ratatouille siehst du Auberginen mit neuen Augen...",
      "signature": "Deine Gemüse-Erzählerin"
    },

    "steps": [
      {
        "title": "Schritt 1: Die Auberginen-Transformation",
        "description": "Das Salzen und Pressen der Auberginen entfernt nicht nur Bitterstoffe – es öffnet ihre Poren, damit sie später Olivenöl und Kräuter wie ein Schwamm aufsaugen können."
      },
      {
        "title": "Schritt 2: Die Tomatenalchemie",
        "description": "San-Marzano-Tomaten werden nicht einfach zerkleinert, sondern zu einer konzentrierten Sauce reduziert – ihr natürlich hoher Zuckergehalt macht zusätzliche Süßungsmittel überflüssig."
      },
      {
        "title": "Schritt 3: Die Paprika-Verwandlung",
        "description": "Durch das scharfe Anbraten karamellisiert der natürliche Zucker der Paprika – diese Röstaromen sind der Schlüssel zur pflanzlichen Tiefe des Gerichts."
      },
      {
        "title": "Schritt 4: Die Komposition",
        "description": "Das schichtweise Anordnen ist kein bloßes Dekor – es ermöglicht gleichmäßige Hitzeverteilung, sodass jedes Gemüse perfekt gart, ohne zu verfallen."
      }
    ],

    "servingSuggestion": "Mit einer Prise Fleur de Sel und einem Hauch frisch geriebener Zitronenschale – so wird pflanzliche Küche zum Gourmet-Erlebnis.",

    "servingSuggestions": {
      "title": "Jenseits des Klassikers: Unerwartete Ratatouille-Partner",
      "description": "Dieses Gericht spielt Hauptrolle oder Teamplayer – hier sind vier unkonventionelle Ideen:",
      "note": "Klassisch vegetarisch: Mit frischem Baguette oder Couscous servieren. Für experimentierfreudige Köche: Diese Pairings zeigen, wie wandlungsfähig pflanzliche Küche sein kann!",
      "items": [
        {
          "emoji": "🍚",
          "title": "Miso-Polenta-Untergrund",
          "description": "Cremige Polenta mit weißer Miso-Paste verrührt – die Fermentnoten heben die Gemüsearomen hervor."
        },
        {
          "emoji": "🥟",
          "title": "Ratatouille-Dumplings",
          "description": "Abgekühltes Ratatouille als Füllung für Teigtaschen verwenden – mit Sesam bestreut ein vegetarischer Appetizer-Hit."
        },
        {
          "emoji": "🍳",
          "title": "Shakshuka-Ratatouille-Fusion",
          "description": "Ratatouille in einer Pfanne erhitzen, Mulden formen und Eier hineinpochen – mediterran-nordafrikanische Brunch-Kreation."
        },
        {
          "emoji": "🥑",
          "title": "Avocado-Boote",
          "description": "Avocadohälften mit Ratatouille füllen, mit Kürbiskernen bestreuen – low-carb und instagramtauglich."
        }
      ]
    },

    "funFact": {
      "title": "Fun Fact: Ratatouilles politische Revolution",
      "description": "Wussten Sie, dass Ratatouille einst als 'Arme-Leute-Essen' galt, bis es 1976 zum kulinarischen Botschafter der Provence wurde? 🌍 Der damalige französische Kulturminister ernannte es offiziell zum 'Patrimoine Culinaire Français' (kulinarisches Erbe) – eine politische Geste, um regionale pflanzliche Küche gegen die Fast-Food-Welle zu verteidigen. Noch verrückter: Die Originalversion aus Nizza wurde nie geschichtet! Das ikonische Spiraldesign erfand erst der Disney-Film 2007. Echte nicoise Hausköchinnen köcheln alles zusammen – aber wir dürfen ja auch mal mit Traditionen brechen, oder?"
    },

    "images": {
      "imageIngredient": "/images/Ingredients/ratatouilleIngredient.webp",
      "image1": "/images/MainCourses/ratatouille1.webp",
      "image2": "/images/MainCourses/ratatouille2.webp",
      "image3": "/images/MainCourses/ratatouille3.webp",
      "image4": "/images/MainCourses/ratatouille4.webp",
      "image5": "/images/MainCourses/ratatouille5.webp",
      "image6": "/images/MainCourses/ratatouille6.webp",
      "image7": "/images/MainCourses/ratatouille7.webp"
    }
  },
  {
    "title": "Gefüllte Paprika Vegetarisch",
    "seo_title": "Mediterrane gefüllte Paprika – Pflanzliche Geschmacksexplosion",
    "image": "/images/MainCourses/gefuellte-paprika.webp",
    "prepTime": 30,
    "cookingTime": 45,
    "seo_keywords": [
      "Vegetarische gefüllte Paprika",
      "Pflanzliche Paprikaschoten",
      "Gesunde Gemüsefüllung",
      "Mediterranes Vegetarisches Gericht",
      "Proteinreiche vegetarische Hauptspeise"
    ],
    "rating": 4.6,
    "reviews": 210,
    "category": "Vegetarische Hauptgerichte",
    "slug": "gefuellte-paprika",
    "tags": ["Traditionell", "Gemüse", "Hauptgericht"],
    "createdDate": new Date('2025-02-12T00:00:00'),
    "updatedDate": new Date('2025-03-28T00:00:00'),
    "servings": 4,
    "description": "Paprikaschoten gefüllt mit einer Quinoa-Pilz-Mischung – ein gesundes, pflanzliches Powergericht, das beweist, wie lecker vegetarische Küche sein kann.",
    "descriptionOnImage": "Goldene Paprikaschoten prall gefüllt mit duftender Quinoa-Pilz-Masse, überbacken mit knusprigem Käse – vegetarische Genussperfektion.",
    "introductionParagraph": "Es gibt Gerichte, die verwandeln gewöhnliche Zutaten in etwas Magisches – diese gefüllten Paprikaschoten sind ein perfektes Beispiel. Stellen Sie sich vor: Eine sonnengereifte Paprika, deren süßes Fleisch sich unter dem ersten Biss wie Seide anfühlt, gibt den Blick frei auf eine duftende Füllung aus goldenem Quinoa, erdigen Pilzen und würzigem Feta. Dies ist kein einfaches vegetarisches Gericht, sondern eine Ode an die pflanzliche Vielfalt des Mittelmeers. Die Paprika wird hier nicht als bloßes Gefäß behandelt, sondern als gleichberechtigter Geschmacksträger, der durch sanftes Rösten im Ofen seine ganze natürliche Süße entfaltet. Die Füllung? Eine proteinreiche Komposition, die so reichhaltig ist, dass sie mühelos als Hauptdarsteller überzeugt – ganz ohne Fleisch. Jedes Element wird mit Respekt behandelt: Die Pilze bekommen Zeit, ihre Röstaromen zu entwickeln, der Quinoa wird locker aufgegabelt für perfekte Textur, und der Feta zerbröselt, um salzige Akzente zu setzen.",
    "additionalParagraph": "Was diese vegetarische Version besonders macht, ist ihre Vielseitigkeit. An heißen Tagen serviere ich sie lauwarm mit einem Klemm Zitronen-Joghurt-Dip – das frische Zitrusaroma schneidet perfekt durch die reichhaltige Füllung. An kühlen Abenden wird sie zur Herzhaftigkeit pur, wenn ich sie mit einem Hauch geräucherter Paprika würze. Mein Geheimtipp: Die Paprikakerne nicht wegwerfen! Getrocknet und gemahlen ergeben sie ein wunderbares Gewürz für andere pflanzliche Gerichte. Dies ist kein Rezept, das Sie einmal kochen – es ist eine Technik, die Sie ein Leben lang begleiten wird.",
    "ingredientsNeeded": [
      {
        "title": "Paprikaschoten (die pflanzlichen Schatullen)",
        "description": "Gelbe oder rote Paprika sind ideal – ihre dicken Wände und natürliche Süße machen sie zur perfekten Hülle. Wählen Sie möglichst gleichmäßig geformte Schoten für gleichmäßiges Garen. Die enthaltenen Capsaicinoide regen übrigens den Stoffwechsel an!"
      },
      {
        "title": "Quinoa (das pflanzliche Proteinwunder)",
        "description": "Dieses pseudogetreide enthält alle neun essentiellen Aminosäuren und liefert pro 100g satte 14g Protein – perfekt für vegetarische Ernährung. Sein nussiger Geschmack und die leicht knusprige Textur machen ihn zur idealen Füllungsbasis."
      },
      {
        "title": "Pilze (die natürlichen Umami-Bomben)",
        "description": "Eine Mischung aus Champignons und Shiitake sorgt für Tiefe – Shiitake enthalten natürlich vorkommendes Glutamat, das den fleischigen Geschmack verstärkt. Wichtig: Pilze nie waschen, nur mit einer Bürste säubern, damit sie nicht wässrig werden."
      },
      {
        "title": "Feta (der salzige Kontrastpunkt)",
        "description": "Seine salzige Cremigkeit rundet die pflanzliche Füllung ab. Für vegane Varianten einfach durch marinierten Tofu oder 2 EL Hefeflocken ersetzen. Griechischer Feta in Salzlake hat übrigens intensiveren Geschmack als vakuumverpackte Varianten."
      }
    ],

    "steps": [
      {
        "title": "Schritt 1: Die Paprika-Veredelung",
        "description": "Schneiden Sie die Paprikaschoten der Länge nach in Hälften – so behalten sie ihre schöne Form. Entfernen Sie die Kerne und weißen Trennwände vorsichtig mit einem kleinen Messer, aber lassen Sie etwa 0,5 cm Fruchtfleisch an den Wänden für Stabilität. Bestreichen Sie die Innenseiten leicht mit Olivenöl – das verhindert das Anhaften der Füllung und fördert die Röstaromen."
      },
      {
        "title": "Schritt 2: Die Pilz-Alchemie",
        "description": "Schneiden Sie die Pilze in zwei Größen: 2/3 fein hacken für gleichmäßige Verteilung, 1/3 in größere Stücke für Textur. In einer großen Pfanne bei mittlerer Hitze 1 EL Olivenöl erhitzen. Geben Sie zunächst die fein gehackten Pilze hinein und braten Sie sie 5 Minuten an, bis sie ihre Flüssigkeit abgegeben haben. Dann die größeren Stücke zugeben und weitere 3-4 Minuten braten, bis alles goldbraun ist. Diese zweistufige Methode garantiert optimale Textur!"
      },
      {
        "title": "Schritt 3: Die Quinoa-Perfektion",
        "description": "Spülen Sie den Quinoa gründlich in einem feinen Sieb unter fließendem Wasser – das entfernt die natürlichen Saponine, die bitter schmecken können. In einem Topf mit der 1,5-fachen Menge Wasser 15 Minuten köcheln lassen, bis die kleinen Ringe sichtbar werden. Vom Herd nehmen, zugedeckt 5 Minuten nachquellen lassen, dann mit einer Gabel auflockern – so verhindern Sie Klumpenbildung in der Füllung."
      },
      {
        "title": "Schritt 4: Die harmonische Vereinigung",
        "description": "In einer großen Schüssel die Pilze mit dem Quinoa vermengen. Den Feta grob zerbröseln und unterheben – lassen Sie einige größere Stücke übrig für visuelle Akzente. Mit Rauchpaprika, Salz und frisch gemahlenem Pfeffer abschmecken. Die Masse sollte feucht, aber nicht nass sein – wenn sie zu trocken erscheint, fügen Sie 1-2 EL Gemüsebrühe hinzu."
      },
      {
        "title": "Schritt 5: Die Ofen-Transformation",
        "description": "Füllen Sie die Paprikahälften großzügig – die Füllung sollte leicht über den Rand hinausragen für eine schöne Präsentation. Im vorgeheizten Ofen bei 190°C (Ober-/Unterhitze) 25-30 Minuten backen, bis die Paprikaschoten weich sind und die Füllung goldbraun wird. In den letzten 5 Minuten den Grill einschalten für extra Farbe, wenn gewünscht."
      }
    ],


    "ingredientGroups": [
      {
        "title": "Die Paprikaschoten",
        "description": "Wählen Sie gleichmäßig geformte Schoten für gleichmäßiges Garen:",
        "ingredients": [
          { "amount": 4, "unit": "", "name": "Große Paprikaschoten (gelb oder rot)" },
          { "amount": 2, "unit": "EL", "name": "Olivenöl" },
          { "amount": 1, "unit": "Prise", "name": "Meersalz" }
        ]
      },
      {
        "title": "Die vegetarische Füllung",
        "description": "Eine proteinreiche Mischung, die satt macht:",
        "ingredients": [
          { "amount": 150, "unit": "g", "name": "Quinoa" },
          { "amount": 300, "unit": "g", "name": "Gemischte Pilze (Champignons, Shiitake)" },
          { "amount": 1, "unit": "", "name": "Zwiebel (fein gewürfelt)" },
          { "amount": 2, "unit": "Zehen", "name": "Knoblauch (gehackt)" },
          { "amount": 100, "unit": "g", "name": "Feta (gebröckelt)" },
          { "amount": 1, "unit": "TL", "name": "Rauchpaprika" }
        ]
      },
      {
        "title": "Die Kräuterkrone",
        "description": "Frische Kräuter verleihen den letzten Schliff:",
        "ingredients": [
          { "amount": 1, "unit": "Handvoll", "name": "Petersilie (gehackt)" },
          { "amount": 1, "unit": "EL", "name": "Zitronenschale" }
        ]
      }
    ],

    "ingredients": [
      { "amount": 4, "unit": "", "name": "Große Paprikaschoten" },
      { "amount": 2, "unit": "EL", "name": "Olivenöl" },
      { "amount": 150, "unit": "g", "name": "Quinoa" },
      { "amount": 300, "unit": "g", "name": "Gemischte Pilze" },
      { "amount": 1, "unit": "", "name": "Zwiebel" },
      { "amount": 2, "unit": "Zehen", "name": "Knoblauch" },
      { "amount": 100, "unit": "g", "name": "Feta" },
      { "amount": 1, "unit": "TL", "name": "Rauchpaprika" },
      { "amount": 1, "unit": "Handvoll", "name": "Petersilie" },
      { "amount": 1, "unit": "EL", "name": "Zitronenschale" },
      { "amount": 1, "unit": "Prise", "name": "Meersalz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
    ],

    "instructions": [
      "Quinoa nach Packungsanweisung kochen, abtropfen lassen.",
      "Ofen auf 190°C vorheizen. Paprikaschoten halbieren, entkernen und mit 1 EL Öl einreiben.",
      "Pilze grob hacken. In einer Pfanne 1 EL Öl erhitzen, Zwiebel und Knoblauch 3 Min. anschwitzen.",
      "Pilze zugeben und 5 Min. braten, bis sie Flüssigkeit abgegeben haben und goldbraun sind.",
      "Gekochten Quinoa, Rauchpaprika und Feta unter die Pilzmischung heben. Mit Salz und Pfeffer abschmecken.",
      "Paprikahälften mit der Quinoa-Pilz-Mischung füllen und auf ein Backblech setzen.",
      "20-25 Min. backen, bis die Paprikaschoten weich sind und die Füllung goldbraun wird.",
      "Mit Petersilie und Zitronenschale bestreuen servieren."
    ],

    "nutrition": {
      "calories": 1325,
      "protein": "45.5g",
      "carbs": "152g",
      "fat": "59g"
    },

    "tips": [
      "Für vegane Version: Feta durch 2 EL Hefeflocken ersetzen.",
      "Pilztipp: Getrocknete Steinpilze 15 Min. einweichen und mitkochen für extra Umami.",
      "Meal Prep: Gefüllte Paprika halten sich 3 Tage im Kühlhaus und schmecken kalt hervorragend.",
      "Scharf-Liebhaber: 1 gehackte Chili zur Füllung geben.",
      "Resteverwertung: Übrige Füllung als vegetarische Lasagne-Schicht verwenden."
    ],

    "whyFavorite": {
      "title": "Warum diese gefüllten Paprikaschoten meine vegetarische Küche definieren",
      "reasons": [
        {
          "title": "Protein-Power",
          "description": "Mit 14g Protein pro Portion (dank Quinoa und Pilzen) ist es eine vollwertige vegetarische Mahlzeit."
        },
        {
          "title": "Textur-Wunder",
          "description": "Knusprige Paprika, bissfester Quinoa und saftige Pilze – ein Fest für die Sinne."
        },
        {
          "title": "Visuelle Pracht",
          "description": "Die goldgelben Paprikahälften sind so schön, dass sie selbst auf Feinschmecker-Tischen glänzen."
        },
        {
          "title": "Saisonal anpassbar",
          "description": "Im Sommer mit frischen Kräutern, im Winter mit gerösteten Nüssen – immer wieder neu."
        }
      ]
    },

    "handwrittenMessage": {
      "mainText": "Lass dich von der Paprika verführen – sie hat mehr zu bieten, als du denkst!",
      "subText": "Ich wette, nach diesem Gericht wirst du Paprika mit neuen Augen sehen...",
      "signature": "Deine Gemüse-Zauberin"
    },
    "servingSuggestion": "Mit einem Klecks Zitronen-Joghurt und gerösteten Pinienkernen – so wird pflanzliche Küche zum Festmahl.",
    "servingSuggestions": {
      "title": "Vom Brunch bis zum Dinner: Vegetarische Servier-Inspirationen",
      "description": "Diese gefüllten Paprikaschoten sind wahre Verwandlungskünstler – hier sind fünf Ideen, die sie neu erfinden:",
      "note": "Klassisch vegetarisch: Mit frischem Bauernbrot und einem grünen Salat servieren. Für kulinarische Abenteurer: Diese ungewöhnlichen Pairings zeigen die Vielseitigkeit pflanzlicher Küche!",
      "items": [
        {
          "emoji": "🍳",
          "title": "Brunch-Variation",
          "description": "Mit einem pochierten Ei und frischem Dill garnieren – das flüssige Eigelb vermischt sich perfekt mit der Füllung für ein luxuriöses Wochenendfrühstück."
        },
        {
          "emoji": "🥗",
          "title": "Deconstructed Salad",
          "description": "Kalte Paprikahälften in Streifen schneiden und mit Rucola, gerösteten Kichererbsen und Zitronen-Vinaigrette mixen – ein pflanzlicher Power-Salat."
        },
        {
          "emoji": "🍜",
          "title": "Asia-Fusion",
          "description": "Mit einer Dashi-Brühe übergossen, mit Wakame-Algen und Sesam garniert – eine japanisch-mediterrane Überraschung."
        },
        {
          "emoji": "🥙",
          "title": "Pita-Pockets",
          "description": "Kalte Paprikahälften in warme Vollkorn-Pitas stecken mit Tahini-Joghurt-Sauce – perfektes vegetarisches Streetfood."
        },
        {
          "emoji": "🍲",
          "title": "Suppen-Topping",
          "description": "In Würfel geschnitten auf einer cremigen weißen Bohnensuppe – gibt Textur und pflanzliches Protein."
        }
      ]
    },

    "funFact": {
      "title": "Fun Fact: Paprikas geheime Superkraft",
      "description": "Wussten Sie, dass Paprikaschoten mehr Vitamin C enthalten als Orangen? 🍊➡️🫑 Eine rote Paprika liefert satte 150mg Vitamin C pro 100g – das Doppelte einer Orange! Noch verrückter: Die Vitamin C-Konzentration steigt, wenn die Paprika reift. Grüne Paprika enthalten nur halb so viel wie ihre roten Schwestern. Und hier kommt der Clou: Durch das Füllen und Backen bleibt das hitzeempfindliche Vitamin besser erhalten als beim Kochen in Wasser – ein genialer Trick der Natur (und Ihrer Küche)!"
    },

    "images": {
      "imageIngredient": "/images/Ingredients/gefuelltePaprikaIngredient.webp",
      "image1": "/images/MainCourses/gefuellte-paprika1.webp",
      "image2": "/images/MainCourses/gefuellte-paprika2.webp",
      "image3": "/images/MainCourses/gefuellte-paprika3.webp",
      "image4": "/images/MainCourses/gefuellte-paprika4.webp",
      "image5": "/images/MainCourses/gefuellte-paprika5.webp",
      "image6": "/images/MainCourses/gefuellte-paprika6.webp",
      "image7": "/images/MainCourses/gefuellte-paprika7.webp"
    }
  },
  {
    "title": "Gemüse-Strudel Vegetarisch",
    "seo_title": "Vegetarischer Gemüsestrudel Rezept – Blättrige Köstlichkeit",
    "image": "/images/Miscellaneous/gemueseStrudel.webp",
    "prepTime": 40,
    "cookingTime": 35,
    "seo_keywords": [
      "Vegetarischer Gemüsestrudel",
      "Pflanzliches Strudelrezept",
      "Mediterranes Ofengemüse im Teig",
      "Gesunde vegetarische Hauptgerichte",
      "Blätterteig mit Gemüsefüllung"
    ],
    "rating": 4.8,
    "reviews": 187,
    "category": "Hauptgerichte",
    "slug": "gemuese-strudel",
    "tags": ["Traditionell", "Gebäck", "Gemüse"],
    "createdDate": new Date('2025-02-17T00:00:00'),
    "updatedDate": new Date('2025-03-28T00:00:00'),
    "servings": 4,
    "description": "Knuspriger Blätterteig mit mediterranem Ofengemüse & Feta – dieser vegetarische Strudel beweist: pflanzliche Küche kann elegant & geschmacksintensiv sein!",  
    "descriptionOnImage": "Goldbrauner Blätterteigstrudel mit einer duftenden Füllung aus geröstetem Gemüse und Kräutern – vegetarische Backkunst auf höchstem Niveau.",
    "introductionParagraph": "Stellen Sie sich vor, Sie schneiden in einen perfekt gebackenen Strudel – der erste Blick offenbart Schichten von zartem Blätterteig, die sich wie ein französisches Croissant lösen, während der Duft von gerösteten Auberginen, süßen Kirschtomaten und frischem Thymian aufsteigt. Dies ist kein gewöhnliches vegetarisches Gericht, sondern eine kulinarische Liebeserklärung an mediterrane Aromen. Der Clou? Das Gemüse wird nicht einfach gekocht, sondern einzeln geröstet, bis sich seine natürliche Süße entfaltet hat. Die Paprika verwandelt sich in karamellige Streifen, die Zucchini behält ihren Biss, und die Aubergine wird zu einer buttrigen Köstlichkeit. Eingehüllt in hauchdünnen Blätterteig entsteht so ein pflanzliches Meisterwerk, das selbst eingefleischte Fleischliebhaber überzeugt.",
    "additionalParagraph": "Was diesen vegetarischen Strudel besonders macht, ist seine erstaunliche Vielseitigkeit. An heißen Sommertagen serviere ich ihn lauwarm mit einem Klecks zitronigem Joghurt-Dip – die Frische der Zitrone schneidet perfekt durch die reichhaltige Füllung. Im Winter wird er zum Herzstück eines festlichen Menüs, begleitet von einer cremigen Safransauce. Mein Geheimtipp: Die Gemüsefüllung einen Tag vorher zubereiten – über Nacht intensivieren sich die Aromen, während der Thymian seine ätherischen Öle entfaltet. Und für spontane Gäste habe ich immer eingefrorene Strudel-Rohlinge parat – einfach 10 Minuten länger backen, und Sie servieren ein pflanzliches Gourmetgericht ohne Vorbereitungsstress.",
    "ingredientsNeeded": [
      {
        "title": "Blätterteig (die luftige Hülle)",
        "description": "Verwenden Sie hochwertigen veganen Blätterteig (ohne tierische Fette) für maximale Zartheit. Tipp: Tiefgekühlten Teig langsam im Kühlhaus auftauen – so bleiben die Butterlagen intakt."
      },
      {
        "title": "Aubergine (der Geschmacksverstärker)",
        "description": "In Würfel geschnitten und vorgesalzen entwickelt sie beim Rösten eine fast fleischige Textur und saugt die Kräuteraromen optimal auf."
      },
      {
        "title": "Zucchini (der Biss-Held)",
        "description": "In Halbmonde geschnitten behält sie beim Backen die perfekte Textur – nicht zu weich, nicht zu hart."
      },
      {
        "title": "Rote Paprika (die Farbenkünstlerin)",
        "description": "Ihre natürliche Süße kommt beim Rösten voll zur Geltung und gibt dem Strudel optische Highlights."
      },
      {
        "title": "Kirschtomaten (die Süßespender)",
        "description": "Im Ofen konzentriert sich ihr Geschmack – platzen sie, bilden sie eine natürliche Sauce. Verwenden Sie bunte Sorten für optische Highlights."
      },
      {
        "title": "Feta (der salzige Kontrast)",
        "description": "Seine salzige Cremigkeit rundet die pflanzliche Füllung ab. Für vegane Version durch marinierten Tofu oder Hefeflocken ersetzen."
      },
      {
        "title": "Thymian (das aromatische Herz)",
        "description": "Frische Zweige verleihen mediterrane Duftnoten. Wichtig: Nur die Blättchen verwenden, die Stiele werden holzig."
      },
      {
        "title": "Olivenöl (der Geschmeidigmacher)",
        "description": "Hochwertiges natives Olivenöl veredelt das Gemüse beim Rösten und verhindert ein Austrocknen des Strudels."
      },
      {
        "title": "Sesamsamen (der Knusperakzent)",
        "description": "Goldbraun geröstet verleihen sie dem Blätterteig eine nussige Note und attraktive Optik."
      },
      {
        "title": "Rote Zwiebel (die sanfte Schärfe)",
        "description": "In feinen Ringen angeröstet, gibt sie dem Strudel eine süßlich-würzige Tiefe ohne Dominanz."
      },
      {
        "title": "Knoblauch (der Aromenverstärker)",
        "description": "Fein gehackt oder gepresst entfaltet er beim Rösten sein volles Bukett und harmonisiert mit dem Thymian."
      }
    ],

    "ingredientGroups": [
      {
        "title": "Die Blätterteig-Grundlage",
        "description": "Der perfekte Mantel für das Gemüse – zart und knusprig zugleich:",
        "ingredients": [
          { "amount": 1, "unit": "Packung", "name": "Blätterteig (vegan, 275g)" },
          { "amount": 1, "unit": "EL", "name": "Olivenöl (zum Bestreichen)" },
          { "amount": 1, "unit": "EL", "name": "Sesamsamen" }
        ]
      },
      {
        "title": "Die vegetarische Füllung",
        "description": "Jedes Gemüse wird einzeln zubereitet für optimale Aromen:",
        "ingredients": [
          { "amount": 1, "unit": "", "name": "Aubergine (in 2cm Würfeln)" },
          { "amount": 2, "unit": "", "name": "Zucchini (in Halbmonden)" },
          { "amount": 1, "unit": "", "name": "Rote Paprika (in Streifen)" },
          { "amount": 200, "unit": "g", "name": "Kirschtomaten" },
          { "amount": 1, "unit": "", "name": "Rote Zwiebel (geviertelt)" },
          { "amount": 3, "unit": "EL", "name": "Olivenöl" },
          { "amount": 2, "unit": "Zehen", "name": "Knoblauch (gehackt)" },
          { "amount": 1, "unit": "Bund", "name": "Thymian" },
          { "amount": 100, "unit": "g", "name": "Feta (gebröckelt)" }
        ]
      }
    ],

    "ingredients": [
      { "amount": 1, "unit": "Packung", "name": "Blätterteig (vegan)" },
      { "amount": 1, "unit": "EL", "name": "Olivenöl" },
      { "amount": 1, "unit": "EL", "name": "Sesamsamen" },
      { "amount": 1, "unit": "", "name": "Aubergine" },
      { "amount": 2, "unit": "", "name": "Zucchini" },
      { "amount": 1, "unit": "", "name": "Rote Paprika" },
      { "amount": 200, "unit": "g", "name": "Kirschtomaten" },
      { "amount": 1, "unit": "", "name": "Rote Zwiebel" },
      { "amount": 3, "unit": "EL", "name": "Olivenöl" },
      { "amount": 2, "unit": "Zehen", "name": "Knoblauch" },
      { "amount": 1, "unit": "Bund", "name": "Thymian" },
      { "amount": 100, "unit": "g", "name": "Feta" },
      { "amount": 1, "unit": "Prise", "name": "Meersalz" },
      { "amount": 1, "unit": "Prise", "name": "Pfeffer" }
    ],

    "instructions": [
      "Auberginenwürfel in ein Sieb geben, salzen und 30 Min. abtropfen lassen. Gut abspülen und trocken tupfen.",
      "Ofen auf 200°C vorheizen. Gemüse (außer Tomaten) auf einem Backblech mit 2 EL Olivenöl, Knoblauch und Thymian vermengen. 25 Min. rösten, nach 15 Min. wenden.",
      "Tomaten halbieren und in den letzten 10 Min. mitrösten. Alles auskühlen lassen, Thymianzweige entfernen.",
      "Blätterteig auf Backpapier ausrollen. Gemüse in der Mitte verteilen, Feta darüberstreuen.",
      "Teig seitlich einschlagen, dann von einer Seite aufrollen. Mit Öl bestreichen, Sesam streuen.",
      "Bei 190°C (Umluft) 30-35 Min. backen, bis der Teig goldbraun ist. 10 Min. ruhen lassen."
    ],

    "nutrition": {
      "calories": 2010,
      "protein": "24g",
      "carbs": "134g",
      "fat": "141g"
    },

    "tips": [
      "Für extra Knusper: Teig vor dem Backen mit Ei- oder Pflanzenmilch bestreichen.",
      "Vegan-Option: Feta durch 2 EL Hefeflocken + 1 TL Misopaste ersetzen.",
      "Strudel-Doppelpack: Füllung verdoppeln und zwei Strudel backen – einer friert perfekt ein.",
      "Resteverwertung: Kalten Strudel in Würfel schneiden und als Croutons für Suppen verwenden.",
      "Scharf-Liebhaber: 1 gehackte Chili mit dem Gemüse rösten."
    ],

    "whyFavorite": {
      "title": "Warum dieser Strudel meine vegetarische Küche repräsentiert",
      "reasons": [
        {
          "title": "Textur-Wunder",
          "description": "Knuspriger Teig + saftiges Gemüse + cremiger Feta – ein vegetarisches Sinnenerlebnis."
        },
        {
          "title": "Protein-Power",
          "description": "Mit 8g Protein pro Portion (dank Feta und Gemüse) eine vollwertige vegetarische Mahlzeit."
        },
        {
          "title": "Augenschmaus",
          "description": "Die spiralförmige Anschnittfläche mit den farbigen Gemüseschichten ist ein Instagram-Hit."
        },
        {
          "title": "Meal-Prep-Tauglich",
          "description": "Hält sich 3 Tage im Kühlhaus und schmeckt kalt wie warm – perfekt für vegetarische Lunchboxen."
        }
      ]
    },

    "handwrittenMessage": {
      "mainText": "Lass dich vom Blätterteig verzaubern – er trägt das Gemüse wie ein kostbares Geschenk!",
      "subText": "Ich wette, nach diesem Strudel wirst du Gemüse mit neuen Augen sehen...",
      "signature": "Deine Gemüse-Pastetierin"
    },

    "steps": [
      {
        "title": "Schritt 1: Die Gemüse-Verwandlung",
        "description": "Jedes Gemüse wird einzeln geschnitten – Auberginen in Würfel für maximale Aromenaufnahme, Zucchini in Halbmonde für ansprechende Textur, Paprika in Streifen für süße Röstaromen. Das getrennte Rösten garantiert, dass jedes Gemüse perfekt gart."
      },
      {
        "title": "Schritt 2: Die Thymian-Infusion",
        "description": "Frische Thymianzweige werden ganz mitgeröstet – ihre ätherischen Öle penetrieren das Gemüse. Erst nach dem Rösten entfernen wir die Zweige, damit kein bitterer Geschmack entsteht."
      },
      {
        "title": "Schritt 3: Die Blätterteig-Choreografie",
        "description": "Der Teig wird nicht einfach umgeklappt, sondern erst die Seiten eingeschlagen, dann von einer Seite gerollt – so entstehen die charakteristischen Schichten, die beim Backen blättrig aufplustern."
      },
      {
        "title": "Schritt 4: Die Ruhephase",
        "description": "Nach dem Backen 10 Minuten warten – diese Geduld ermöglicht, dass sich die Säfte im Strudel verteilen und der Teig knusprig bleibt statt matschig zu werden."
      }
    ],

    "servingSuggestion": "Mit einem Klecks Zitronen-Joghurt und frischem Dill – die Säure balanciert die Süße des Ofengemüses.",

    "servingSuggestions": {
      "title": "Kulinarische Zeitreise: Globale Strudel-Pairings",
      "description": "Dieser Strudel reist gerne – hier sind fünf internationale Servierideen, die mediterrane Aromen neu interpretieren:",
      "note": "Traditionell vegetarisch: Mit Tzatziki und Oliven servieren. Für Weltenbummler: Diese Fusion-Kreationen zeigen, wie wandlungsfähig pflanzliche Küche ist!",
      "items": [
        {
          "emoji": "🌶️",
          "title": "Harissa-Dattel-Chutney",
          "description": "Süß-scharfe Paste aus nordafrikanischen Datteln und Chiliflocken – der Kontrast zum milden Strudel ist spektakulär."
        },
        {
          "emoji": "🍈",
          "title": "Melonen-Carpaccio",
          "description": "Honeydew-Melone in hauchdünnen Scheiben mit Limette und Minze – die Frische balanciert die Röstaromen."
        },
        {
          "emoji": "🫘",
          "title": "Schwarze-Bohnen-Püree",
          "description": "Cremige mexikanische Bohne mit Koriander – gibt pflanzliches Protein und erdige Tiefe."
        },
        {
          "emoji": "🍯",
          "title": "Feigen-Balsamico-Glasur",
          "description": "Eingekochte Feigen mit Aceto – die fruchtige Süße harmoniert mit dem gebackenen Gemüse."
        },
        {
          "emoji": "🥬",
          "title": "Kimchi-Microgreens-Mix",
          "description": "Fermentierte Schärfe trifft keimende Sprossen – eine probiotische Geschmacksexplosion."
        }
      ]
    },

    "funFact": {
      "title": "Fun Fact: Strudels Geheimsprache",
      "description": "Wussten Sie, dass die charakteristischen Blätterteigschichten ursprünglich als Statussymbol dienten? 🏰 Im 17. Jahrhundert zeigte die Anzahl der Lagen den Reichtum des Haushalts – je mehr Schichten, desto mehr Arbeitszeit (und teure Butter) konnte man sich leisten. Ein perfekter Strudel hat mindestens 144 Schichten! Noch verrückter: In Österreich nennt man besonders dünn ausgerollten Teig 'Strudelteig, so dünn, dass man eine Liebesbrief durchlesen kann' – unsere vegetarische Version hält sich zwar nicht ganz an diese Tradition, macht aber geschmacklich doppelt glücklich!"
    },

    "images": {
      "imageIngredient": "/images/Ingredients/gemueseStrudelIngredient.webp",
      "image1": "/images/Miscellaneous/gemueseStrudel1.webp",
      "image2": "/images/Miscellaneous/gemueseStrudel2.webp",
      "image3": "/images/Miscellaneous/gemueseStrudel3.webp",
      "image4": "/images/Miscellaneous/gemueseStrudel4.webp",
      "image5": "/images/Miscellaneous/gemueseStrudel5.webp",
      "image6": "/images/Miscellaneous/gemueseStrudel6.webp",
      "image7": "/images/Miscellaneous/gemueseStrudel7.webp"
    }
  }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}