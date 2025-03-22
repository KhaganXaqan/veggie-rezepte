// First, let's define the type for a recipe
export type Recipe = {
  title: string
  seo_title: string
  image: string
  prepTime?: number
  cookingTime?: number
  seo_keywords: string[]
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
    "rating": 4.8,
    "category": "Hauptgerichte",
    "slug": "flammkuchen",
    "tags": ["Traditionell", "Hauptgerichte", "Flammkuchen"],
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
      "imageIngredient": "/images/Ingredients/flammkuchen-ingredients.webp",
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
    "category": "Hauptgerichte",
    "slug": "kartoffelpuffer",
    "tags": ["Traditionell", "Kartoffeln", "Snack", "Hauptgericht", "Beilage", "Vegetarisch"],
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
    "rating": 4.9,
    "category": "Suppen",
    "slug": "gemuesesuppe",
    "tags": ["Traditionell", "Suppe", "Gemüse"],
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
    "seo_title": "Traditionelle vegetarische Kartoffelklöße Rezept – Einfach, lecker und unwiderstehlich",
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
    "rating": 4.9,
    "category": "Beilagen",
    "slug": "kartoffelkloesse",
    "tags": ["Traditionell", "Beilage", "Kartoffeln"],
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
  }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}