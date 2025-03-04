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
  ingredientGroups?: {
    title: string
    description: string
    ingredients: {
      amount?: number | string
      unit?: string
      name: string
    }[]
  }[]
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
    descriptionOnImage: "Traditionelle deutsche Kartoffelklöße - perfekt als Beilage oder eigenständiges Gericht.",
    ingredients: [
      { amount: 1, unit: "kg", name: "mehligkochende Kartoffeln" },
      { amount: 200, unit: "g", name: "Kartoffelstärke" },
      { amount: 2, name: "Eier" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
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
    }
  },
  {
    title: "Spinat-Käse Lasagne",
    image: "/images/MainCourses/spinat-kaese-lasagne.webp",
    prepTime: "50 Min.",
    rating: 4.7,
    category: "Aufläufe",
    slug: "spinat-kaese-lasagne",
    tags: ["Auflauf", "Pasta", "Käse"],
    servings: 6,
    description: "Eine klassische Lasagne mit Spinat und Käse.",
    descriptionOnImage: "Eine klassische Lasagne mit Spinat und Käse.",
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
    }
  },
  {
    title: "Flammkuchen",
    image: "/images/MainCourses/flammkuchen.webp",
    prepTime: "30 Min.",
    rating: 4.8,
    category: "Hauptgerichte",
    slug: "flammkuchen",
    tags: ["Traditionell", "Hauptgerichte", "Flammkuchen"],
    servings: 4,
    description: "Mein liebstes Rezept für einen knusprigen Flammkuchen! Während der traditionelle elsässische Flammkuchen oft mit Speck zubereitet wird, ist meine vegetarische Variante in nur 30 Minuten fertig und mindestens genauso lecker. Der hauchdünne Teig wird schön knusprig gebacken und die Kombination aus cremiger Basis und würzigen Zwiebeln macht dieses Gericht zu einem echten Geschmackserlebnis.\n\nDas Besondere an meinem Rezept ist die perfekte Balance zwischen dem knusprigen Boden und dem cremigen Belag. Die Crème fraîche bildet eine herrlich cremige Basis, während die dünn geschnittenen Zwiebeln beim Backen eine leichte Süße entwickeln. Der würzige Gruyère oder Emmentaler rundet das Geschmackserlebnis perfekt ab.",
    descriptionOnImage: "Ein dünner, knuspriger Flammkuchen mit cremiger Basis, Zwiebeln und Käse – ein Klassiker aus der deutschen Küche.",
    ingredientGroups: [
      {
        title: "Der Grundteig",
        description: "Ein hauchdünner, knuspriger Teig ist das Fundament für einen perfekten Flammkuchen. Die Kombination aus Mehl, Wasser und einem Schuss Olivenöl macht den Teig geschmeidig und beim Backen wunderbar knusprig.",
        ingredients: [
          { amount: 250, unit: "g", name: "Mehl" },
          { amount: 125, unit: "ml", name: "Wasser" },
          { amount: 2, unit: "EL", name: "Olivenöl" },
          { amount: 1, unit: "Prise", name: "Salz" }
        ]
      },
      {
        title: "Die cremige Basis",
        description: "Die Crème fraîche bildet die perfekte Grundlage für den Belag. Sie wird beim Backen leicht bräunlich und entwickelt einen herrlich würzigen Geschmack.",
        ingredients: [
          { amount: 200, unit: "g", name: "Crème fraîche" }
        ]
      },
      {
        title: "Der würzige Belag",
        description: "Die Zwiebeln werden beim Backen leicht karamellisiert und entwickeln eine natürliche Süße. Der Gruyère oder Emmentaler sorgt für den perfekten würzigen Abschluss.",
        ingredients: [
          { amount: 2, unit: "", name: "Zwiebeln (dünn geschnitten)" },
          { amount: 100, unit: "g", name: "Gruyère oder Emmentaler (gerieben)" },
          { amount: undefined, unit: "", name: "Salz" },
          { amount: undefined, unit: "", name: "Pfeffer" }
        ]
      }
    ],
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
    }
  },
  {
    title: "Käsespätzle",
    image: "/images/MainCourses/kaesespaetzle.webp",
    prepTime: "45 Min.",
    rating: 4.8,
    category: "Hauptgerichte",
    slug: "kaesespaetzle",
    tags: ["Traditionell", "Pasta", "Käse"],
    servings: 4,
    description: "Mein traditionelles Rezept für schwäbische Käsespätzle! Diese herzhafte Spezialität ist der Inbegriff des deutschen Comfort Food. Die handgemachten Spätzle werden besonders luftig und der würzige Käse sorgt für den unwiderstehlichen Geschmack. In nur 45 Minuten zaubern Sie ein Gericht, das die ganze Familie lieben wird.\n\nDas Besondere an meinem Rezept ist die Kombination aus verschiedenen Käsesorten, die für den perfekten Schmelz und Geschmack sorgen. Die goldbraun gebratenen Zwiebeln geben dem Gericht eine zusätzliche geschmackliche Note und eine knusprige Textur.",
    descriptionOnImage: "Dampfende Käsespätzle mit knusprigen Röstzwiebeln",
    ingredientGroups: [
      {
        title: "Der Spätzleteig",
        description: "Ein luftiger, geschmeidiger Teig ist die Basis für perfekte Spätzle. Die richtige Konsistenz erkennt man daran, dass der Teig schwer vom Löffel reißt.",
        ingredients: [
          { amount: 400, unit: "g", name: "Mehl" },
          { amount: 4, name: "Eier" },
          { amount: 200, unit: "ml", name: "Wasser" },
          { amount: 1, unit: "TL", name: "Salz" }
        ]
      },
      {
        title: "Die Käsemischung",
        description: "Die Kombination verschiedener Käsesorten macht den besonderen Geschmack aus. Der Bergkäse sorgt für die würzige Note, der Emmentaler für den perfekten Schmelz.",
        ingredients: [
          { amount: 200, unit: "g", name: "Bergkäse" },
          { amount: 200, unit: "g", name: "Emmentaler" }
        ]
      },
      {
        title: "Die Garnitur",
        description: "Knusprig gebratene Zwiebeln sind das i-Tüpfelchen dieses Gerichts.",
        ingredients: [
          { amount: 2, unit: "große", name: "Zwiebeln" },
          { amount: 2, unit: "EL", name: "Butter zum Braten" },
          { amount: undefined, unit: "", name: "Muskatnuss" },
          { amount: undefined, unit: "", name: "Pfeffer" }
        ]
      }
    ],
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 2, name: "Eier" },
      { amount: 100, unit: "ml", name: "Milch" },
      { amount: 100, unit: "g", name: "Käse" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    instructions: [
      "Das Mehl in eine große Schüssel geben. Die Eier und die Milch hinzufügen und alles zu einem glatten Teig verrühren. Mit Salz und Muskatnuss würzen.",
      "Einen großen Topf mit Salzwasser zum Kochen bringen. Den Spätzleteig portionsweise durch ein Spätzlesieb oder einen Spätzlehobel ins kochende Wasser drücken.",
      "Die Spätzle etwa 2–3 Minuten kochen, bis sie an die Oberfläche steigen. Anschließend mit einer Schaumkelle herausheben und abtropfen lassen.",
      "Den Käse reiben. In einer Pfanne etwas Butter erhitzen und die Spätzle darin anbraten. Den geriebenen Käse hinzufügen und schmelzen lassen, bis alles gut vermengt ist.",
      "Die Käsespätzle heiß servieren, eventuell mit gerösteten Zwiebeln bestreuen."
    ],
    nutrition: {
      calories: 450,
      protein: "20g",
      carbs: "50g",
      fat: "20g"
    }
  },
  {
    title: "Kartoffelpuffer",
    image: "/images/Miscellaneous/kartoffelpuffer.webp",
    prepTime: "30 Min.",
    rating: 4.8,
    category: "Hauptgerichte",
    slug: "kartoffelpuffer",
    tags: ["Traditionell", "Kartoffeln", "Snack"],
    servings: 2,
    description: "Mein Familienrezept für knusprige Kartoffelpuffer! Diese traditionelle deutsche Spezialität ist bei uns ein beliebter Klassiker, der sowohl herzhaft als auch süß serviert werden kann. Die Puffer werden außen wunderbar knusprig und bleiben innen saftig. Das Geheimnis liegt in der richtigen Reibetechnik und dem sorgfältigen Auspressen der Kartoffeln.\n\nDas Besondere an meinem Rezept ist die perfekte Balance zwischen Kartoffeln und Bindemitteln. Die frischen Kartoffeln werden grob gerieben, was für eine besonders schöne Textur sorgt. Ein Hauch Muskatnuss verleiht den Puffern ihre charakteristische Note, während die goldbraune Kruste für das perfekte Geschmackserlebnis sorgt.",
    descriptionOnImage: "Knusprige Kartoffelpuffer nach traditionellem Rezept",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Die Kartoffelbasis",
        description: "Frisch geriebene Kartoffeln sind das Herzstück eines perfekten Kartoffelpuffers. Sie sorgen für den authentischen Geschmack und die richtige Textur.",
        ingredients: [
          { amount: 500, unit: "g", name: "festkochende Kartoffeln" },
          { amount: 1, unit: "große", name: "Zwiebel" }
        ]
      },
      {
        title: "Die Bindung",
        description: "Diese Zutaten sorgen dafür, dass die Puffer beim Braten nicht zerfallen und schön saftig bleiben.",
        ingredients: [
          { amount: 2, name: "Eier" },
          { amount: 2, unit: "EL", name: "Mehl" }
        ]
      },
      {
        title: "Die Würzung",
        description: "Die richtige Würzung macht den Unterschied zwischen guten und herausragenden Kartoffelpuffern.",
        ingredients: [
          { amount: 1, unit: "TL", name: "Salz" },
          { amount: 1, unit: "Prise", name: "Muskatnuss" },
          { amount: undefined, unit: "", name: "Pfeffer" }
        ]
      },
      {
        title: "Zum Braten",
        description: "Reichlich Öl sorgt für die perfekte knusprige Kruste.",
        ingredients: [
          { amount: 4, unit: "EL", name: "Pflanzenöl zum Ausbacken" }
        ]
      }
    ],
    instructions: [
      "Die Kartoffeln schälen und grob reiben. Die geriebenen Kartoffeln in ein sauberes Küchentuch geben und gut auspressen, um überschüssige Flüssigkeit zu entfernen.",
      "Die Eier in einer Schüssel verquirlen. Das Mehl, die Milch, Salz und Muskatnuss hinzufügen und zu einem glatten Teig verrühren.",
      "Die geriebenen Kartoffeln unter den Teig heben und alles gut vermengen.",
      "In einer großen Pfanne reichlich Öl erhitzen. Portionsweise den Teig in die Pfanne geben und flach drücken. Die Puffer bei mittlerer Hitze von beiden Seiten goldbraun braten, etwa 3–4 Minuten pro Seite.",
      "Die Kartoffelpuffer auf Küchenpapier abtropfen lassen und warm servieren, z. B. mit Apfelmus oder Sauerrahm."
    ],
    nutrition: {
      calories: 250,
      protein: "8g",
      carbs: "30g",
      fat: "12g"
    }
  },
  {
    title: "Semmelknödel",
    image: "/images/Miscellaneous/semmelknoedel.webp",
    prepTime: "40 Min.",
    rating: 4.6,
    category: "Hauptgerichte",
    slug: "semmelknoedel",
    tags: ["Traditionell", "Beilage", "Brot"],
    servings: 4,
    description: "Traditionelle bayerische Semmelknödel aus altbackenen Brötchen.",
    descriptionOnImage: "Fluffige Semmelknödel serviert mit Sauce",
    ingredients: [
      { amount: 8, name: "altbackene Brötchen" },
      { amount: 250, unit: "ml", name: "Milch" },
      { amount: 2, name: "Eier" },
      { amount: 1, name: "Zwiebel" },
      { amount: undefined, unit: "", name: "Petersilie" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
    instructions: [
      "Die Brötchen in kleine Würfel schneiden. Die Zwiebel fein würfeln und die Petersilie hacken.",
      "Die Milch erwärmen und über die Brotwürfel gießen. Die Masse etwa 10 Minuten ziehen lassen.",
      "Die Eier verquirlen und zusammen mit den Zwiebelwürfeln und der Petersilie unter die eingeweichte Brotmasse mengen. Mit Salz, Pfeffer und Muskatnuss würzen.",
      "Mit feuchten Händen etwa 8 gleichgroße Knödel formen.",
      "Die Knödel in siedendes Salzwasser geben und bei mittlerer Hitze etwa 20 Minuten ziehen lassen."
    ],
    nutrition: {
      calories: 220,
      protein: "8g",
      carbs: "35g",
      fat: "6g"
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
    descriptionOnImage: "Ein leckerer Pilzsuppe aus verschiedenen Pilzen.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Pilze" },
      { amount: 1, name: "Zwiebel" },
      { amount: 2, name: "Knoblauchzehen" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    title: "Gemüsestrudel",
    image: "/images/Miscellaneous/gemuesestrudel.webp",
    prepTime: "75 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "gemuese-strudel",
    tags: ["Traditionell", "Gebäck", "Gemüse"],
    servings: 6,
    description: "Ein traditionelles deutsches Gebäck aus verschiedenen Gemüsen.",
    descriptionOnImage: "Ein traditionelles deutsches Gebäck aus verschiedenen Gemüsen.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, name: "Ei" },
      { amount: 100, unit: "g", name: "Gemüse" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
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
    }
  },
  {
    title: "Grießnockerl",
    image: "/images/Miscellaneous/griessnockerl.webp",
    prepTime: "35 Min.",
    rating: 4.6,
    category: "Suppen",
    slug: "griessnockerl",
    tags: ["Traditionell", "Suppe", "Beilage"],
    servings: 4,
    description: "Eine traditionelle deutsche Suppe aus Grießnocken.",
    descriptionOnImage: "Traditionelle Grießnockerl in klarer Brühe serviert",
    ingredients: [
      { amount: 200, unit: "g", name: "Grießnocken" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 1, name: "Zwiebel" },
      { amount: 1, name: "Knoblauchzehe" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    title: "Spinatknödel",
    image: "/images/Miscellaneous/spinatknoedel.webp",
    prepTime: "55 Min.",
    rating: 4.8,
    category: "Hauptgerichte",
    slug: "spinatknoedel",
    tags: ["Traditionell", "Spinat", "Knödel"],
    servings: 4,
    description: "Eine traditionelle deutsche Knödel aus Spinat.",
    descriptionOnImage: "Saftig grüne Spinatknödel mit Parmesan bestreut",
    ingredients: [
      { amount: 200, unit: "g", name: "Spinat" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 2, name: "Eier" },
      { amount: 100, unit: "ml", name: "Milch" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
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
    }
  },
  {
    title: "Gemüsesuppe",
    image: "/images/Soups/gemuesesuppe.webp",
    prepTime: "40 Min.",
    rating: 4.5,
    category: "Suppen",
    slug: "gemuesesuppe",
    tags: ["Traditionell", "Suppe", "Gemüse"],
    servings: 4,
    description: "Eine einfache und leckere Gemüsesuppe.",
    descriptionOnImage: "Eine einfache und leckere Gemüsesuppe.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    title: "Kartoffelgratin",
    image: "/images/MainCourses/kartoffelgratin.webp",
    prepTime: "60 Min.",
    rating: 4.9,
    category: "Aufläufe",
    slug: "kartoffelgratin",
    tags: ["Traditionell", "Auflauf", "Kartoffeln"],
    servings: 6,
    description: "Ein klassisches Kartoffelaufläuf aus der Region Schwaben.",
    descriptionOnImage: "Ein klassisches Kartoffelaufläuf aus der Region Schwaben.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Kartoffeln" },
      { amount: 200, unit: "g", name: "Butter" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 100, unit: "g", name: "Käse" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    title: "Quinoa-Buddha-Bowl",
    image: "/images/MainCourses/quinoa-buddha-bowl.webp",
    prepTime: "25 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "quinoa-buddha-bowl",
    tags: ["Modern", "Gesund", "Bowl"],
    servings: 2,
    description: "Ein leckerer Buddha-Bowl aus Quinoa und verschiedenen Gemüsen.",
    descriptionOnImage: "Bunte Buddha Bowl mit Quinoa, frischem Gemüse und Avocado",
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
    }
  },
  {
    title: "Ratatouille",
    image: "/images/Miscellaneous/ratatouille.webp",
    prepTime: "45 Min.",
    rating: 4.6,
    category: "Hauptgerichte",
    slug: "ratatouille",
    tags: ["Französisch", "Gemüse", "Hauptgericht"],
    servings: 4,
    description: "Eine französische Gemüseaufläuf aus verschiedenen Gemüsen.",
    descriptionOnImage: "Eine französische Gemüseaufläuf aus verschiedenen Gemüsen.",
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
    descriptionOnImage: "Aromatisches Gemüse-Curry in cremiger Kokosnusssauce",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 100, unit: "g", name: "Currypaste" },
      { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
      { amount: 100, unit: "g", name: "Kokosnussöl" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    title: "Brokkoli-Quiche",
    image: "/images/MainCourses/brokkoli-quiche.webp",
    prepTime: "55 Min.",
    rating: 4.6,
    category: "Hauptgerichte",
    slug: "brokkoli-quiche",
    tags: ["Französisch", "Gebäck", "Gemüse"],
    servings: 6,
    description: "Eine französische Quiche aus Brokkoli und Käse.",
    descriptionOnImage: "Eine französische Quiche aus Brokkoli und Käse.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Brokkoli" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    title: "Gefüllte Paprika",
    image: "/images/MainCourses/gefuellte-paprika.webp",
    prepTime: "40 Min.",
    rating: 4.5,
    category: "Hauptgerichte",
    slug: "gefuellte-paprika",
    tags: ["Traditionell", "Gemüse", "Hauptgericht"],
    servings: 4,
    description: "Mein bewährtes Rezept für gefüllte Paprika! Diese farbenfrohe Gemüsespezialität ist nicht nur ein Augenschmaus, sondern auch ein wahres Geschmackserlebnis. Die saftigen Paprikaschoten werden mit einer aromatischen Gemüsemischung gefüllt und im Ofen gebacken, bis sie zart und geschmackvoll sind.\n\nDas Besondere an meinem Rezept ist die ausgewogene Würzung der Füllung und die schonende Garzeit, die dafür sorgt, dass die Paprika ihre Form behalten und dennoch perfekt gegart sind. Die Kombination aus knackigem Gemüse und würziger Füllung macht dieses Gericht zu einem beliebten Familienessen.",
    descriptionOnImage: "Bunte Paprikaschoten gefüllt mit würziger Gemüsemischung",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Die Paprika",
        description: "Große, gleichmäßig geformte Paprikaschoten sind ideal für dieses Gericht. Sie sollten fest und frisch sein.",
        ingredients: [
          { amount: 4, unit: "große", name: "Paprikaschoten" }
        ]
      },
      {
        title: "Die Aromabasis",
        description: "Zwiebeln und Knoblauch bilden die geschmackliche Grundlage der Füllung.",
        ingredients: [
          { amount: 1, unit: "große", name: "Zwiebel" },
          { amount: 2, name: "Knoblauchzehen" }
        ]
      },
      {
        title: "Die Gemüsefüllung",
        description: "Eine bunte Mischung aus verschiedenen Gemüsesorten macht die Füllung besonders schmackhaft und nahrhaft.",
        ingredients: [
          { amount: 400, unit: "g", name: "Champignons" },
          { amount: 200, unit: "g", name: "Karotten" },
          { amount: 200, unit: "g", name: "Zucchini" }
        ]
      },
      {
        title: "Die Würzung",
        description: "Die richtige Würzung bringt alle Aromen zur Geltung.",
        ingredients: [
          { amount: 1, unit: "TL", name: "Salz" },
          { amount: undefined, unit: "", name: "Pfeffer" },
          { amount: 1, unit: "TL", name: "Paprikapulver" },
          { amount: 1, unit: "EL", name: "frische Kräuter" }
        ]
      }
    ],
    instructions: [
      "Die Paprikaschoten waschen und den Deckel abschneiden. Die Kerne und weißen Trennwände entfernen und die Paprika beiseite stellen.",
      "Die Zwiebel und den Knoblauch fein hacken. Das restliche Gemüse waschen und in kleine Würfel schneiden.",
      "In einer großen Pfanne Öl erhitzen. Zwiebeln und Knoblauch darin glasig dünsten. Das gewürfelte Gemüse hinzufügen und etwa 5-7 Minuten anbraten.",
      "Die Gemüsemischung mit den Gewürzen und Kräutern abschmecken. Die Paprikaschoten mit der Füllung gleichmäßig befüllen und die Deckel wieder aufsetzen.",
      "Die gefüllten Paprika in eine ofenfeste Form setzen. Im vorgeheizten Backofen bei 180°C etwa 25-30 Minuten backen.",
      "Heiß servieren, nach Wunsch mit frischen Kräutern garnieren."
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
    image: "/images/Soups/kuerbissuppe.webp",
    prepTime: "35 Min.",
    rating: 4.8,
    category: "Suppen",
    slug: "kuerbissuppe",
    tags: ["Herbst", "Suppe", "Kürbis"],
    servings: 4,
    description: "Mein wärmendes Rezept für eine cremige Kürbissuppe! Diese herbstliche Spezialität ist nicht nur ein Fest für die Augen, sondern auch ein wahrer Gaumenschmaus. Der Hokkaido-Kürbis verleiht der Suppe ihre charakteristische orangene Farbe und den unverwechselbaren, leicht nussigen Geschmack.\n\nDas Besondere an meinem Rezept ist die perfekte Balance zwischen der natürlichen Süße des Kürbisses und den würzigen Gewürzen. Die schonende Zubereitung erhält den vollen Geschmack des Kürbisses, während die Zugabe von Kokosmilch für eine besonders cremige Konsistenz sorgt.",
    descriptionOnImage: "Samtig cremige Kürbissuppe mit gerösteten Kürbiskernen",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Die Kürbisbasis",
        description: "Der Hokkaido-Kürbis ist das Herzstück dieser Suppe. Seine intensive Farbe und der nussige Geschmack machen ihn zum idealen Kandidaten.",
        ingredients: [
          { amount: 1, unit: "kg", name: "Hokkaido-Kürbis" }
        ]
      },
      {
        title: "Die Aromabasis",
        description: "Diese Zutaten bilden die geschmackliche Grundlage der Suppe und verleihen ihr ihre würzige Note.",
        ingredients: [
          { amount: 2, unit: "große", name: "Zwiebeln" },
          { amount: 2, unit: "große", name: "Karotten" },
          { amount: 2, unit: "cm", name: "frischer Ingwer" }
        ]
      },
      {
        title: "Die Flüssigkeit",
        description: "Die Kombination aus Gemüsebrühe und Kokosmilch macht die Suppe besonders cremig und geschmackvoll.",
        ingredients: [
          { amount: 1, unit: "Liter", name: "Gemüsebrühe" },
          { amount: 400, unit: "ml", name: "Kokosmilch" }
        ]
      },
      {
        title: "Die Würzung",
        description: "Die richtige Würzung rundet den Geschmack perfekt ab.",
        ingredients: [
          { amount: undefined, unit: "", name: "Salz" },
          { amount: undefined, unit: "", name: "Pfeffer" },
          { amount: 1, unit: "TL", name: "Currypulver" },
          { amount: 1, unit: "Prise", name: "Muskatnuss" }
        ]
      },
      {
        title: "Zum Garnieren",
        description: "Diese Zutaten geben der Suppe den letzten Schliff und eine schöne Textur.",
        ingredients: [
          { amount: 4, unit: "EL", name: "geröstete Kürbiskerne" },
          { amount: 4, unit: "EL", name: "Kürbiskernöl" },
          { amount: undefined, unit: "", name: "frische Petersilie" }
        ]
      }
    ],
    instructions: [
      "Den Kürbis waschen, halbieren und entkernen. Das Fruchtfleisch in grobe Würfel schneiden. Die Zwiebeln und den Knoblauch schälen und fein hacken. Den Ingwer schälen und fein reiben.",
      "In einem großen Topf etwas Öl erhitzen. Zwiebeln, Knoblauch und Ingwer darin glasig dünsten. Den Kürbis hinzufügen und etwa 5 Minuten mitbraten.",
      "Mit Gemüsebrühe ablöschen und die Kokosmilch hinzufügen. Alles zum Kochen bringen, dann die Hitze reduzieren und die Suppe etwa 20–25 Minuten köcheln lassen, bis der Kürbis weich ist.",
      "Die Suppe mit einem Stabmixer fein pürieren. Mit Salz, Pfeffer, Curry und Muskatnuss abschmecken.",
      "Die Kürbiskerne in einer Pfanne ohne Fett rösten, bis sie duften.",
      "Die Suppe in vorgewärmte Teller füllen, mit gerösteten Kürbiskernen, einem Spritzer Kürbiskernöl und frischer Petersilie garnieren."
    ],
    nutrition: {
      calories: 180,
      protein: "4g",
      carbs: "20g",
      fat: "10g"
    }
  },
  {
    title: "Mediterraner Nudelsalat",
    image: "/images/Salads/mediterraner-nudelsalat.webp",
    prepTime: "20 Min.",
    rating: 4.4,
    category: "Salate",
    slug: "mediterraner-nudelsalat",
    tags: ["Salat", "Pasta", "Mediterran"],
    servings: 4,
    description: "Mein sommerlicher mediterraner Nudelsalat! Diese farbenfrohe Komposition bringt ein Stück Mittelmeer auf den Teller. Die al dente gekochten Nudeln werden mit knackigem Gemüse, würzigem Käse und aromatischen Kräutern zu einem erfrischenden Salat kombiniert.\n\nDas Besondere an meinem Rezept ist die ausgewogene Mischung mediterraner Zutaten. Sonnengereifte Tomaten, knackige Paprika und würzige Oliven werden durch hochwertiges Olivenöl und frische Kräuter perfekt ergänzt. Ein Hauch von Zitrone verleiht dem Salat seine erfrischende Note.",
    descriptionOnImage: "Bunter mediterraner Nudelsalat mit frischem Gemüse und Oliven",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Die Pasta",
        description: "Die Grundlage des Salats bilden al dente gekochte Nudeln. Fusilli oder Penne eignen sich besonders gut, da sich das Dressing in ihren Windungen sammelt.",
        ingredients: [
          { amount: 400, unit: "g", name: "Fusilli oder Penne" }
        ]
      },
      {
        title: "Das frische Gemüse",
        description: "Eine bunte Mischung mediterraner Gemüsesorten sorgt für Farbe und knackige Textur.",
        ingredients: [
          { amount: 250, unit: "g", name: "Kirschtomaten" },
          { amount: 1, unit: "große", name: "rote Paprika" },
          { amount: 1, unit: "große", name: "gelbe Paprika" },
          { amount: 1, name: "Salatgurke" }
        ]
      },
      {
        title: "Die mediterranen Extras",
        description: "Diese Zutaten bringen den typisch mediterranen Geschmack und zusätzliche Textur in den Salat.",
        ingredients: [
          { amount: 200, unit: "g", name: "Feta" },
          { amount: 100, unit: "g", name: "schwarze Oliven" },
          { amount: 1, unit: "rote", name: "Zwiebel" }
        ]
      },
      {
        title: "Das Dressing",
        description: "Ein aromatisches Dressing aus hochwertigem Olivenöl und frischen Kräutern verbindet alle Zutaten perfekt.",
        ingredients: [
          { amount: 100, unit: "ml", name: "natives Olivenöl extra" },
          { amount: 2, unit: "EL", name: "Balsamico-Essig" },
          { amount: 1, name: "Bio-Zitrone (Saft und Abrieb)" },
          { amount: 1, unit: "Bund", name: "frische Kräuter (Basilikum, Oregano, Petersilie)" },
          { amount: undefined, unit: "", name: "Salz" },
          { amount: undefined, unit: "", name: "Pfeffer" }
        ]
      }
    ],
    instructions: [
      "Die Nudeln in reichlich Salzwasser nach Packungsanleitung al dente kochen. Abgießen, kurz mit kaltem Wasser abschrecken und abtropfen lassen.",
      "In der Zwischenzeit das Gemüse vorbereiten: Kirschtomaten halbieren, Paprika in kleine Würfel schneiden, Gurke schälen und würfeln, Zwiebel in feine Ringe schneiden.",
      "Den Feta würfeln und die Oliven halbieren. Die frischen Kräuter fein hacken.",
      "Für das Dressing Olivenöl mit Balsamico-Essig, Zitronensaft und -abrieb vermengen. Mit Salz und Pfeffer abschmecken.",
      "Die abgekühlten Nudeln mit dem vorbereiteten Gemüse, Feta und Oliven in einer großen Schüssel mischen. Das Dressing darüber geben und alles vorsichtig vermengen.",
      "Den Salat mindestens 30 Minuten im Kühlschrank durchziehen lassen. Vor dem Servieren nochmals abschmecken und mit frischen Kräutern garnieren."
    ],
    nutrition: {
      calories: 380,
      protein: "12g",
      carbs: "45g",
      fat: "18g"
    }
  },
  {
    title: "Griechischer Bauernsalat",
    image: "/images/Salads/griechischer-bauernsalat.webp",
    prepTime: "15 Min.",
    rating: 4.5,
    category: "Salate",
    slug: "griechischer-bauernsalat",
    tags: ["Griechisch", "Salat", "Mediterran"],
    servings: 4,
    description: "Mein authentisches Rezept für einen griechischen Bauernsalat - auch bekannt als Choriatiki! Dieser erfrischende Salat ist die Essenz der mediterranen Küche und besteht ausschließlich aus frischen, unverarbeiteten Zutaten. Die Kombination aus sonnengereiften Tomaten, knackiger Gurke, mildem Feta und würzigen Oliven macht ihn zu einem perfekten Sommergenuss.\n\nDas Besondere an meinem Rezept ist die traditionelle Zubereitung mit großen, rustikalen Gemüsestücken und einem hochwertigen Olivenöl. Der Verzicht auf Blattsalate lässt die einzelnen Zutaten besonders gut zur Geltung kommen. Ein Hauch Oregano verleiht dem Salat seine typisch griechische Note.",
    descriptionOnImage: "Klassischer griechischer Bauernsalat mit Feta und Oliven",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Das Grundgemüse",
        description: "Die Basis des Salats bilden sonnengereifte Tomaten und knackige Gurken, die in großzügige Stücke geschnitten werden.",
        ingredients: [
          { amount: 4, unit: "große", name: "Tomaten" },
          { amount: 1, unit: "große", name: "Salatgurke" },
          { amount: 1, unit: "große", name: "rote Zwiebel" },
          { amount: 1, unit: "grüne", name: "Paprika" }
        ]
      },
      {
        title: "Die griechischen Spezialitäten",
        description: "Echter griechischer Feta und Kalamata-Oliven geben dem Salat seinen authentischen Geschmack.",
        ingredients: [
          { amount: 200, unit: "g", name: "griechischer Feta am Stück" },
          { amount: 100, unit: "g", name: "Kalamata-Oliven" }
        ]
      },
      {
        title: "Das Dressing",
        description: "Ein einfaches Dressing aus bestem Olivenöl und getrockneten Kräutern unterstreicht den natürlichen Geschmack der Zutaten.",
        ingredients: [
          { amount: 6, unit: "EL", name: "natives Olivenöl extra" },
          { amount: 1, unit: "EL", name: "Rotweinessig" },
          { amount: 1, unit: "TL", name: "getrockneter Oregano" },
          { amount: undefined, unit: "", name: "Meersalz" },
          { amount: undefined, unit: "", name: "frisch gemahlener Pfeffer" }
        ]
      }
    ],
    instructions: [
      "Die Tomaten waschen und in grobe Spalten schneiden. Die Gurke schälen, längs halbieren, die Kerne entfernen und in dicke Halbmonde schneiden.",
      "Die rote Zwiebel schälen und in feine Ringe schneiden. Die Paprika waschen, entkernen und in grobe Stücke schneiden.",
      "Den Feta in große Würfel schneiden oder einfach grob zerbröseln.",
      "Alle vorbereiteten Zutaten in einer großen Schüssel anrichten. Die Oliven darüber verteilen.",
      "Für das Dressing Olivenöl mit Rotweinessig vermengen, mit Salz und Pfeffer würzen.",
      "Das Dressing über den Salat träufeln und den getrockneten Oregano darüber streuen. Den Salat vor dem Servieren etwa 10 Minuten ziehen lassen, damit sich die Aromen verbinden können."
    ],
    nutrition: {
      calories: 280,
      protein: "8g",
      carbs: "12g",
      fat: "22g"
    }
  },
  {
    title: "Gemüse-Couscous-Salat",
    image: "/images/Salads/gemuese-couscous-salat.webp",
    prepTime: "20 Min.",
    rating: 4.5,
    category: "Salate",
    slug: "gemuese-couscous-salat",
    tags: ["Salat", "Orientalisch", "Couscous"],
    servings: 4,
    description: "Ein leckerer Couscous-Salat aus verschiedenen Gemüsen.",
    descriptionOnImage: "Orientalischer Couscous-Salat mit buntem Gemüse und Kräutern",
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
    descriptionOnImage: "Ein leckerer Auflauf aus Blumenkohl und Käse.",
    ingredients: [
      { amount: 1, unit: "kg", name: "Blumenkohl" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    descriptionOnImage: "Goldbrauner Polenta-Auflauf mit mediterranem Gemüse",
    ingredients: [
      { amount: 1, unit: "kg", name: "Gemüse" },
      { amount: 200, unit: "g", name: "Polenta" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    descriptionOnImage: "Cremiger Zucchini-Reis-Auflauf mit goldener Käsekruste",
    ingredients: [
      { amount: 1, unit: "kg", name: "Zucchini" },
      { amount: 200, unit: "g", name: "Reis" },
      { amount: 200, unit: "g", name: "Käse" },
      { amount: 2, name: "Eier" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    "title": "Klassisches Rührei",
    "image": "/images/Frühstück/klassisches-ruehrei.webp",
    "prepTime": "10 Min.",
    "rating": 4.7,
    "category": "Frühstück",
    "slug": "klassisches-ruehrei",
    "tags": ["Frühstück", "Eier", "Klassisch"],
    "servings": 2,
    "description": "Ein einfaches und leckeres Rezept für klassisches Rührei, das perfekt zum Frühstück passt.",
    "descriptionOnImage": "Ein einfaches und leckeres Rezept für klassisches Rührei, das perfekt zum Frühstück passt.",
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
    }
  },
  {
    title: "Overnight Oats mit Beeren",
    image: "/images/Frühstück/overnight-oats-beeren.webp",
    prepTime: "10 Min. + 8 Std.",
    rating: 4.7,
    category: "Frühstück",
    slug: "overnight-oats-beeren",
    tags: ["Frühstück", "Gesund", "Haferflocken"],
    servings: 2,
    description: "Ein leckerer Frühstücks-Salat aus Haferflocken und Beeren.",
    descriptionOnImage: "Ein leckerer Frühstücks-Salat aus Haferflocken und Beeren.",
    ingredients: [
      { amount: 100, unit: "g", name: "Haferflocken" },
      { amount: 200, unit: "g", name: "Milch" },
      { amount: 100, unit: "g", name: "Beeren" },
      { amount: 1, name: "Ei" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
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
    descriptionOnImage: "Ein leckeres Vegan-Banana-Bread aus Bananen und verschiedenen Zutaten.",
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
    }
  },
  {
    title: "Smoothie Bowl",
    image: "/images/Frühstück/smoothie-bowl.webp",
    prepTime: "15 Min.",
    rating: 4.6,
    category: "Frühstück",
    slug: "smoothie-bowl",
    tags: ["Frühstück", "Gesund", "Obst"],
    servings: 1,
    description: "Ein leckerer Smoothie-Bowl aus verschiedenen Früchten und Nüssen.",
    descriptionOnImage: "Violette Smoothie Bowl mit frischen Beeren und Granola",
    ingredients: [
      { amount: 100, unit: "g", name: "Früchte" },
      { amount: 100, unit: "g", name: "Nüsse" },
      { amount: 100, unit: "g", name: "Joghurt" },
      { amount: 100, unit: "g", name: "Bananen" },
      { amount: 100, unit: "g", name: "Kokosnussöl" }
    ],
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
    }
  },
  {
    title: "Französische Crêpes",
    image: "/images/Frühstück/franzoesische-crepes.webp",
    prepTime: "30 Min.",
    rating: 4.9,
    category: "Frühstück",
    slug: "franzoesische-crepes",
    tags: ["Frühstück", "Französisch", "Süß"],
    servings: 4,
    description: "Eine leckere französische Crêpe aus Mehl und Eiern.",
    descriptionOnImage: "Eine leckere französische Crêpe aus Mehl und Eiern.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 4, name: "Eier" },
      { amount: 1, unit: "Liter", name: "Milch" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Pfeffer" }
    ],
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
    }
  },
  {
    title: "Granola mit Nüssen",
    image: "/images/Frühstück/granola-nuesse.webp",
    prepTime: "40 Min.",
    rating: 4.7,
    category: "Frühstück",
    slug: "granola-nuesse",
    tags: ["Frühstück", "Gesund", "Müsli"],
    servings: 4,
    description: "Eine leckere Granola aus verschiedenen Nüssen.",
    descriptionOnImage: "Knuspriges hausgemachtes Granola mit gerösteten Nüssen",
    ingredients: [
      { amount: 200, unit: "g", name: "Nüsse" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Olivenöl" },
      { amount: 100, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Backpulver" }
    ],
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
    }
  },
  {
    title: "Apfelstrudel",
    image: "/images/Desserts/apfelstrudel.webp",
    prepTime: "60 Min.",
    rating: 4.8,
    category: "Desserts",
    slug: "apfelstrudel",
    tags: ["Dessert", "Traditionell", "Gebäck"],
    servings: 8,
    description: "Ein traditionelles deutsches Apfelstrudel.",
    descriptionOnImage: "Ein traditionelles deutsches Apfelstrudel.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, name: "Ei" },
      { amount: 1, unit: "kg", name: "Äpfel" },
      { amount: undefined, unit: "", name: "Salz" },
      { amount: undefined, unit: "", name: "Muskatnuss" }
    ],
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
    descriptionOnImage: "Eine leckere Schokoladen-Mousse aus Schokolade und Eiern.",
    ingredients: [
      { amount: 200, unit: "g", name: "Schokolade" },
      { amount: 4, name: "Eier" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Sahne" }
    ],
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
    descriptionOnImage: "Ein leckeres Beeren-Crumble aus verschiedenen Beeren.",
    ingredients: [
      { amount: 200, unit: "g", name: "Beeren" },
      { amount: 100, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Nüsse" }
    ],
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
    descriptionOnImage: "Ein leckeres Rhabarber-Kompott aus verschiedenen Früchten.",
    ingredients: [
      { amount: 200, unit: "g", name: "Rhabarber" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 100, unit: "g", name: "Wasser" }
    ],
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
    }
  },
  {
    title: "Zimtschnecken",
    image: "/images/Desserts/zimtschnecken.webp",
    prepTime: "90 Min.",
    rating: 4.8,
    category: "Desserts",
    slug: "zimtschnecken",
    tags: ["Dessert", "Gebäck", "Zimt"],
    servings: 12,
    description: "Eine leckere Zimtschnecken aus Mehl und Zimt.",
    descriptionOnImage: "Eine leckere Zimtschnecken aus Mehl und Zimt.",
    ingredients: [
      { amount: 200, unit: "g", name: "Mehl" },
      { amount: 100, unit: "g", name: "Butter" },
      { amount: 100, unit: "g", name: "Zucker" },
      { amount: 1, name: "Ei" },
      { amount: 10, unit: "g", name: "Zimt" }
    ],
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
    }
  },
  {
    title: "Bunter Quinoa-Salat",
    image: "/images/Salads/bunter-quinoa-salat.webp",
    prepTime: "25 Min.",
    rating: 4.6,
    category: "Salate",
    slug: "bunter-quinoa-salat",
    tags: ["Salat", "Gesund", "Quinoa"],
    servings: 4,
    description: "Dieser farbenfrohe Quinoa-Salat ist nicht nur ein Augenschmaus, sondern auch ein wahres Superfood-Fest! Die Kombination aus nussigem Quinoa, knackigem Gemüse und proteinreichen Kichererbsen macht ihn zu einer vollwertigen Mahlzeit. Die frischen Kräuter und der Granatapfel verleihen dem Salat eine besondere Note und machen ihn zu einem perfekten Gericht für warme Tage.\n\nDas Besondere an diesem Rezept ist die ausgewogene Mischung verschiedener Texturen und Geschmacksrichtungen. Der Quinoa wird perfekt al dente gekocht und mit einer Vielfalt an buntem Gemüse kombiniert. Ein leichtes Zitronen-Dressing rundet den Salat ab und lässt alle Aromen harmonisch zusammenspielen.",
    descriptionOnImage: "Farbenfroher Quinoa-Salat mit knackigem Gemüse und Nüssen",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Die Quinoa-Basis",
        description: "Quinoa bildet die nahrhafte Grundlage des Salats und wird mit Gemüsebrühe gekocht für extra Geschmack.",
        ingredients: [
          { amount: 250, unit: "g", name: "Quinoa" },
          { amount: 500, unit: "ml", name: "Gemüsebrühe" }
        ]
      },
      {
        title: "Das bunte Gemüse",
        description: "Eine Vielfalt an frischem, knackigem Gemüse sorgt für Farbe und wichtige Nährstoffe.",
        ingredients: [
          { amount: 1, unit: "rote", name: "Paprika" },
          { amount: 1, unit: "gelbe", name: "Paprika" },
          { amount: 2, unit: "", name: "Karotten" },
          { amount: 1, unit: "Bund", name: "Frühlingszwiebeln" },
          { amount: 1, unit: "Dose", name: "Kichererbsen (400g)" }
        ]
      },
      {
        title: "Die Extras",
        description: "Nüsse, Samen und frische Kräuter geben dem Salat den besonderen Crunch und Geschmack.",
        ingredients: [
          { amount: 100, unit: "g", name: "geröstete Mandeln" },
          { amount: 50, unit: "g", name: "Kürbiskerne" },
          { amount: 1, unit: "", name: "Granatapfel" },
          { amount: 1, unit: "Bund", name: "frische Petersilie" },
          { amount: 1, unit: "Bund", name: "frische Minze" }
        ]
      },
      {
        title: "Das Dressing",
        description: "Ein frisches Zitronen-Dressing, das die Aromen aller Zutaten perfekt verbindet.",
        ingredients: [
          { amount: 4, unit: "EL", name: "natives Olivenöl extra" },
          { amount: 2, unit: "", name: "Zitronen (Saft)" },
          { amount: 1, unit: "TL", name: "Honig" },
          { amount: 1, unit: "TL", name: "Kreuzkümmel" },
          { amount: undefined, unit: "", name: "Meersalz" },
          { amount: undefined, unit: "", name: "frisch gemahlener Pfeffer" }
        ]
      }
    ],
    instructions: [
      "Quinoa in einem Sieb gründlich waschen. Die Gemüsebrühe zum Kochen bringen, Quinoa zugeben und bei niedriger Hitze etwa 15-20 Minuten köcheln lassen, bis die Körner gar sind und sich die spiralförmigen Keime gelöst haben.",
      "In der Zwischenzeit das Gemüse vorbereiten: Paprika und Karotten in kleine Würfel schneiden, Frühlingszwiebeln in feine Ringe schneiden. Kichererbsen abgießen und abspülen.",
      "Mandeln grob hacken und Kürbiskerne in einer Pfanne ohne Fett rösten. Die Granatapfelkerne vorsichtig aus der Frucht lösen. Petersilie und Minze fein hacken.",
      "Für das Dressing Olivenöl mit Zitronensaft und Honig verrühren. Mit Kreuzkümmel, Salz und Pfeffer würzen.",
      "Den abgekühlten Quinoa mit dem vorbereiteten Gemüse in einer großen Schüssel vermischen. Das Dressing darüber geben und alles gut vermengen.",
      "Zum Schluss die gehackten Kräuter, Mandeln, Kürbiskerne und Granatapfelkerne unterheben. Vor dem Servieren etwa 30 Minuten ziehen lassen, damit sich die Aromen verbinden können."
    ],
    nutrition: {
      calories: 420,
      protein: "12g",
      carbs: "45g",
      fat: "22g"
    }
  },
  {
    title: "Süßkartoffel-Kokos-Suppe",
    image: "/images/Soups/suesskartoffel-kokos-suppe.webp",
    prepTime: "35 Min.",
    rating: 4.8,
    category: "Suppen",
    slug: "suesskartoffel-kokos-suppe",
    tags: ["Suppe", "Exotisch", "Cremig"],
    servings: 4,
    description: "Diese samtig-cremige Süßkartoffel-Kokos-Suppe vereint die natürliche Süße der Süßkartoffeln mit der exotischen Note der Kokosmilch zu einer harmonischen Geschmackskomposition. Die leichte Schärfe von Ingwer und Curry verleiht der Suppe eine wärmende Note, die besonders an kalten Tagen für Behaglichkeit sorgt.\n\nDas Besondere an diesem Rezept ist die perfekte Balance zwischen süßlichen und würzigen Aromen. Die Süßkartoffeln werden zunächst angeröstet, um ihr volles Aroma zu entwickeln, bevor sie mit den anderen Zutaten zu einer seidigen Suppe veredelt werden. Ein Hauch Limettensaft am Ende sorgt für die perfekte geschmackliche Abrundung.",
    descriptionOnImage: "Cremige Süßkartoffel-Kokos-Suppe mit frischen Kräutern garniert",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Die Basis",
        description: "Süßkartoffeln bilden die Grundlage dieser cremigen Suppe, während Kokosmilch für die samtige Textur sorgt.",
        ingredients: [
          { amount: 800, unit: "g", name: "Süßkartoffeln" },
          { amount: 400, unit: "ml", name: "Kokosmilch" },
          { amount: 500, unit: "ml", name: "Gemüsebrühe" }
        ]
      },
      {
        title: "Das Aromafundament",
        description: "Frische Gewürze und Gemüse geben der Suppe ihre charakteristische Note.",
        ingredients: [
          { amount: 2, unit: "", name: "Zwiebeln" },
          { amount: 2, unit: "Zehen", name: "Knoblauch" },
          { amount: 30, unit: "g", name: "frischer Ingwer" },
          { amount: 2, unit: "Stangen", name: "Zitronengras" }
        ]
      },
      {
        title: "Die Gewürze",
        description: "Eine ausgewogene Gewürzmischung verleiht der Suppe ihre exotische Note.",
        ingredients: [
          { amount: 2, unit: "EL", name: "Currypulver" },
          { amount: 1, unit: "", name: "Limette (Saft)" },
          { amount: 2, unit: "EL", name: "Kokosöl" },
          { amount: undefined, unit: "", name: "Meersalz" },
          { amount: undefined, unit: "", name: "frisch gemahlener Pfeffer" }
        ]
      },
      {
        title: "Zum Garnieren",
        description: "Frische Toppings runden die Suppe optisch und geschmacklich ab.",
        ingredients: [
          { amount: 1, unit: "Bund", name: "frischer Koriander" },
          { amount: 100, unit: "ml", name: "Kokosmilch zum Träufeln" },
          { amount: undefined, unit: "", name: "Chiliflocken nach Belieben" }
        ]
      }
    ],
    instructions: [
      "Die Süßkartoffeln schälen und in gleichmäßige Würfel schneiden. Zwiebeln und Knoblauch schälen und fein hacken. Ingwer schälen und fein reiben. Zitronengras andrücken.",
      "In einem großen Topf das Kokosöl erhitzen. Zwiebeln, Knoblauch und Ingwer darin glasig dünsten. Currypulver hinzufügen und kurz mitrösten.",
      "Süßkartoffelwürfel hinzugeben und unter Rühren etwa 5 Minuten anbraten. Mit Gemüsebrühe ablöschen und das Zitronengras hinzufügen.",
      "Die Kokosmilch hinzugießen und alles bei mittlerer Hitze etwa 15-20 Minuten köcheln lassen, bis die Süßkartoffeln weich sind.",
      "Zitronengras entfernen. Die Suppe mit einem Stabmixer fein pürieren, bis sie seidig-glatt ist.",
      "Mit Limettensaft, Salz und Pfeffer abschmecken. Die Suppe in Schalen anrichten, mit einem Schwung Kokosmilch, frischem Koriander und nach Belieben Chiliflocken garnieren."
    ],
    nutrition: {
      calories: 320,
      protein: "5g",
      carbs: "35g",
      fat: "18g"
    }
  },
  {
    title: "Linsen-Bolognese",
    image: "/images/MainCourses/linsen-bolognese.webp",
    prepTime: "40 Min.",
    rating: 4.7,
    category: "Hauptgerichte",
    slug: "linsen-bolognese",
    tags: ["Pasta", "Italienisch", "Proteinreich"],
    servings: 4,
    description: "Diese vegetarische Linsen-Bolognese ist eine köstliche und gesunde Alternative zur klassischen Fleisch-Bolognese. Die roten Linsen geben der Sauce nicht nur eine herrlich sämige Konsistenz, sondern sind auch reich an Proteinen und Ballaststoffen. In Kombination mit frischem Gemüse und mediterranen Kräutern entsteht eine vollwertige Pasta-Sauce, die der traditionellen Bolognese in nichts nachsteht.\n\nDas Besondere an diesem Rezept ist die perfekte Balance zwischen Textur und Geschmack. Die Linsen werden genau richtig gegart, sodass sie eine angenehm bissfeste Konsistenz behalten. Die Kombination aus Tomaten, Gemüse und Gewürzen sorgt für ein authentisches italienisches Geschmackserlebnis.",
    descriptionOnImage: "Herzhafte Linsen-Bolognese mit frischen Kräutern garniert",
    ingredients: [],
    ingredientGroups: [
      {
        title: "Die Linsen-Basis",
        description: "Rote Linsen bilden die proteinreiche Grundlage dieser vegetarischen Bolognese.",
        ingredients: [
          { amount: 250, unit: "g", name: "rote Linsen" },
          { amount: 500, unit: "ml", name: "Gemüsebrühe" }
        ]
      },
      {
        title: "Das Soffritto",
        description: "Die klassische italienische Aromabasis aus fein gewürfeltem Gemüse.",
        ingredients: [
          { amount: 2, unit: "große", name: "Zwiebeln" },
          { amount: 2, unit: "Stangen", name: "Sellerie" },
          { amount: 2, unit: "große", name: "Karotten" },
          { amount: 4, unit: "Zehen", name: "Knoblauch" }
        ]
      },
      {
        title: "Die Tomatenbasis",
        description: "Hochwertige Tomatenprodukte sorgen für die charakteristische Sauce.",
        ingredients: [
          { amount: 2, unit: "Dosen", name: "stückige Tomaten (je 400g)" },
          { amount: 2, unit: "EL", name: "Tomatenmark" }
        ]
      },
      {
        title: "Die Würzung",
        description: "Mediterrane Kräuter und Gewürze verleihen der Sauce ihren authentischen Geschmack.",
        ingredients: [
          { amount: 4, unit: "EL", name: "natives Olivenöl extra" },
          { amount: 1, unit: "TL", name: "getrockneter Oregano" },
          { amount: 2, unit: "Blätter", name: "frischer Lorbeer" },
          { amount: 100, unit: "ml", name: "trockener Rotwein" },
          { amount: undefined, unit: "", name: "Meersalz" },
          { amount: undefined, unit: "", name: "frisch gemahlener Pfeffer" }
        ]
      },
      {
        title: "Zum Servieren",
        description: "Die perfekte Pasta und frische Kräuter runden das Gericht ab.",
        ingredients: [
          { amount: 500, unit: "g", name: "Spaghetti" },
          { amount: 1, unit: "Bund", name: "frisches Basilikum" },
          { amount: undefined, unit: "", name: "veganer Parmesan nach Belieben" }
        ]
      }
    ],
    instructions: [
      "Die roten Linsen in einem Sieb waschen und abtropfen lassen. Die Gemüsebrühe in einem Topf erwärmen.",
      "Für das Soffritto Zwiebeln, Sellerie, Karotten und Knoblauch sehr fein würfeln.",
      "In einem großen Topf das Olivenöl erhitzen. Das Soffritto darin bei mittlerer Hitze etwa 10 Minuten anschwitzen, bis das Gemüse weich ist.",
      "Tomatenmark hinzufügen und kurz mitrösten. Mit Rotwein ablöschen und einkochen lassen.",
      "Stückige Tomaten, Linsen und warme Gemüsebrühe hinzugeben. Oregano und Lorbeerblätter hinzufügen. Alles aufkochen lassen, dann die Hitze reduzieren und zugedeckt etwa 25-30 Minuten köcheln lassen, bis die Linsen weich sind.",
      "In der Zwischenzeit die Spaghetti in reichlich Salzwasser nach Packungsanweisung al dente kochen.",
      "Die Sauce mit Salz und Pfeffer abschmecken. Lorbeerblätter entfernen.",
      "Die Spaghetti mit der Linsen-Bolognese anrichten, mit frischem Basilikum und nach Belieben veganem Parmesan servieren."
    ],
    nutrition: {
      calories: 450,
      protein: "18g",
      carbs: "65g",
      fat: "12g"
    }
  }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}