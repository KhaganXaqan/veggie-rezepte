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
      "Das Gemüse waschen und in mundgerechte Stücke schneiden. Die Tomaten in Scheiben schneiden, die Oliven halbieren und den Feta in Würfel schneiden.",
      "Alles in einer großen Schüssel vermengen. Das Olivenöl darüber träufeln und mit Salz und Pfeffer abschmecken.",
      "Den Salat kalt servieren, eventuell mit frischem Oregano oder Basilikum garnieren."
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
  }
];

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}