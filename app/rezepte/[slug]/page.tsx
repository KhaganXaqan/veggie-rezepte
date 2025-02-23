import Image from "next/image"
import { Clock, Users, Star, Printer, BookmarkPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { RecipeComments } from "@/components/recipe-comments"

// This would come from your database in a real app
const recipes = {
  "kartoffelkloesse": {
    title: "Kartoffelklöße",
    author: "Maria Schmidt",
    prepTime: "60 Min.",
    difficulty: "Mittel",
    servings: 4,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599321644574-11c76fe332ed?q=80&w=2670&auto=format&fit=crop",
    description: "Traditionelle deutsche Kartoffelklöße - perfekt als Beilage oder eigenständiges Gericht.",
    ingredients: [
      "1kg mehligkochende Kartoffeln",
      "200g Kartoffelstärke",
      "2 Eier",
      "Salz",
      "Muskatnuss"
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
      fat: "1g"
    },
    tags: ["Traditionell", "Beilage", "Kartoffeln"]
  },
  "spinat-kaese-lasagne": {
    title: "Spinat-Käse Lasagne",
    author: "Lisa Weber",
    prepTime: "50 Min.",
    difficulty: "Mittel",
    servings: 6,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2670&auto=format&fit=crop",
    description: "Cremige Lasagne mit frischem Spinat und verschiedenen Käsesorten.",
    ingredients: [
      "500g frischer Spinat",
      "500g Lasagneplatten",
      "400g Ricotta",
      "200g Mozzarella",
      "100g Parmesan",
      "Bechamelsauce",
      "Knoblauch",
      "Muskatnuss"
    ],
    instructions: [
      "Spinat waschen und blanchieren",
      "Bechamelsauce zubereiten",
      "Käsemischung vorbereiten",
      "Lasagne schichten",
      "Bei 180°C 40 Minuten backen"
    ],
    nutrition: {
      calories: 385,
      protein: "18g",
      carbs: "42g",
      fat: "16g"
    },
    tags: ["Auflauf", "Pasta", "Käse"]
  },
  "kaesespaetzle": {
    title: "Käsespätzle",
    author: "Thomas Müller",
    prepTime: "45 Min.",
    difficulty: "Mittel",
    servings: 4,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=2670&auto=format&fit=crop",
    description: "Traditionelle Spätzle mit geschmolzenem Käse und Röstzwiebeln.",
    ingredients: [
      "400g Mehl",
      "4 Eier",
      "200ml Wasser",
      "300g Bergkäse",
      "2 Zwiebeln",
      "Salz",
      "Pfeffer"
    ],
    instructions: [
      "Spätzleteig zubereiten",
      "Spätzle in kochendes Wasser schaben",
      "Zwiebeln anbraten",
      "Käse reiben",
      "Alles schichten und überbacken"
    ],
    nutrition: {
      calories: 450,
      protein: "20g",
      carbs: "48g",
      fat: "22g"
    },
    tags: ["Traditionell", "Pasta", "Käse"]
  },
  "kartoffelpuffer": {
    title: "Kartoffelpuffer",
    author: "Hans Weber",
    prepTime: "30 Min.",
    difficulty: "Einfach",
    servings: 4,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&w=2670&auto=format&fit=crop",
    description: "Knusprige Kartoffelpuffer - ein beliebter deutscher Klassiker.",
    ingredients: [
      "1kg Kartoffeln",
      "2 Zwiebeln",
      "2 Eier",
      "4 EL Mehl",
      "Salz",
      "Pfeffer",
      "Muskatnuss"
    ],
    instructions: [
      "Kartoffeln und Zwiebeln reiben",
      "Mit Eiern und Mehl vermengen",
      "Mit Gewürzen abschmecken",
      "In Öl ausbacken",
      "Auf Küchenpapier abtropfen lassen"
    ],
    nutrition: {
      calories: 280,
      protein: "6g",
      carbs: "45g",
      fat: "10g"
    },
    tags: ["Traditionell", "Kartoffeln", "Snack"]
  },
  "semmelknoedel": {
    title: "Semmelknödel",
    author: "Anna Bauer",
    prepTime: "40 Min.",
    difficulty: "Mittel",
    servings: 6,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2670&auto=format&fit=crop",
    description: "Fluffige Semmelknödel aus altbackenen Brötchen - perfekt zu Pilzragout oder Sauce.",
    ingredients: [
      "8 alte Brötchen",
      "250ml warme Milch",
      "2 Eier",
      "1 Zwiebel",
      "Petersilie",
      "Salz",
      "Muskatnuss"
    ],
    instructions: [
      "Brötchen würfeln",
      "Mit warmer Milch übergießen",
      "Zwiebeln andünsten",
      "Alles vermengen und würzen",
      "Knödel formen und in Salzwasser garen"
    ],
    nutrition: {
      calories: 250,
      protein: "8g",
      carbs: "42g",
      fat: "6g"
    },
    tags: ["Traditionell", "Beilage", "Brot"]
  },
  "pilzgulasch": {
    title: "Pilzgulasch",
    author: "Peter Koch",
    prepTime: "45 Min.",
    difficulty: "Mittel",
    servings: 4,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571166584431-ec5ec8096fec?q=80&w=2670&auto=format&fit=crop",
    description: "Herzhaftes Pilzgulasch mit verschiedenen Waldpilzen und Paprika.",
    ingredients: [
      "800g gemischte Pilze",
      "2 Zwiebeln",
      "2 Paprika",
      "400ml Gemüsebrühe",
      "200ml Sahne",
      "Paprikapulver",
      "Kümmel",
      "Majoran"
    ],
    instructions: [
      "Pilze putzen und schneiden",
      "Zwiebeln und Paprika würfeln",
      "Alles anbraten",
      "Mit Brühe ablöschen",
      "Mit Sahne verfeinern und würzen"
    ],
    nutrition: {
      calories: 320,
      protein: "12g",
      carbs: "28g",
      fat: "18g"
    },
    tags: ["Traditionell", "Pilze", "Hauptgericht"]
  },
  "gemuese-strudel": {
    title: "Gemüsestrudel",
    author: "Claudia Meyer",
    prepTime: "75 Min.",
    difficulty: "Anspruchsvoll",
    servings: 6,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?q=80&w=2670&auto=format&fit=crop",
    description: "Knuspriger Strudelteig gefüllt mit saisonalem Gemüse und Kräutern.",
    ingredients: [
      "300g Strudelteig",
      "500g gemischtes Gemüse",
      "2 Zwiebeln",
      "200g Frischkäse",
      "Frische Kräuter",
      "Olivenöl",
      "Salz und Pfeffer"
    ],
    instructions: [
      "Gemüse klein schneiden und andünsten",
      "Teig ausrollen und mit Öl bestreichen",
      "Gemüse-Käse-Mischung verteilen",
      "Strudel einrollen",
      "Bei 180°C 35 Minuten backen"
    ],
    nutrition: {
      calories: 310,
      protein: "8g",
      carbs: "42g",
      fat: "14g"
    },
    tags: ["Traditionell", "Gebäck", "Gemüse"]
  },
  "griessnockerl": {
    title: "Grießnockerl",
    author: "Emma Wagner",
    prepTime: "35 Min.",
    difficulty: "Einfach",
    servings: 4,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=2670&auto=format&fit=crop",
    description: "Luftige Grießnockerl - perfekt für Suppen oder als eigenständiges Gericht.",
    ingredients: [
      "150g Grieß",
      "2 Eier",
      "50g Butter",
      "Muskatnuss",
      "Petersilie",
      "Salz"
    ],
    instructions: [
      "Butter schaumig rühren",
      "Eier unterrühren",
      "Grieß und Gewürze zugeben",
      "30 Minuten ruhen lassen",
      "In siedendem Wasser garen"
    ],
    nutrition: {
      calories: 180,
      protein: "5g",
      carbs: "25g",
      fat: "8g"
    },
    tags: ["Traditionell", "Suppe", "Beilage"]
  },
  "spinatknoedel": {
    title: "Spinatknödel",
    author: "Julia Huber",
    prepTime: "55 Min.",
    difficulty: "Mittel",
    servings: 4,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=2670&auto=format&fit=crop",
    description: "Saftige Knödel mit frischem Spinat und Bergkäse.",
    ingredients: [
      "300g Spinat",
      "250g Semmelwürfel",
      "2 Eier",
      "100ml Milch",
      "1 Zwiebel",
      "100g Bergkäse",
      "Muskatnuss"
    ],
    instructions: [
      "Spinat blanchieren und hacken",
      "Zwiebel andünsten",
      "Alle Zutaten vermengen",
      "Knödel formen",
      "In Salzwasser garen"
    ],
    nutrition: {
      calories: 280,
      protein: "12g",
      carbs: "35g",
      fat: "12g"
    },
    tags: ["Traditionell", "Spinat", "Knödel"]
  },
  "gemuesesuppe": {
    title: "Gemüsesuppe",
    author: "Martina Klein",
    prepTime: "40 Min.",
    difficulty: "Einfach",
    servings: 6,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2671&auto=format&fit=crop",
    description: "Klassische deutsche Gemüsesuppe mit saisonalem Gemüse.",
    ingredients: [
      "Verschiedenes Gemüse",
      "2 Kartoffeln",
      "1 Zwiebel",
      "2L Gemüsebrühe",
      "Petersilie",
      "Liebstöckel",
      "Salz und Pfeffer"
    ],
    instructions: [
      "Gemüse putzen und schneiden",
      "Zwiebel andünsten",
      "Gemüse kurz mitbraten",
      "Mit Brühe aufgießen",
      "20 Minuten köcheln lassen"
    ],
    nutrition: {
      calories: 120,
      protein: "4g",
      carbs: "22g",
      fat: "3g"
    },
    tags: ["Traditionell", "Suppe", "Gemüse"]
  },
  "kartoffelgratin": {
    title: "Kartoffelgratin",
    author: "Stefan Bauer",
    prepTime: "60 Min.",
    difficulty: "Mittel",
    servings: 6,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568574728383-011f8c185af0?q=80&w=2670&auto=format&fit=crop",
    description: "Cremiges Kartoffelgratin mit Sahne und Käse überbacken.",
    ingredients: [
      "1kg Kartoffeln",
      "400ml Sahne",
      "200g Käse",
      "2 Knoblauchzehen",
      "Muskatnuss",
      "Salz und Pfeffer"
    ],
    instructions: [
      "Kartoffeln in Scheiben schneiden",
      "Form mit Knoblauch ausreiben",
      "Kartoffeln schichten",
      "Mit Sahne übergießen",
      "Mit Käse bestreuen und backen"
    ],
    nutrition: {
      calories: 420,
      protein: "12g",
      carbs: "48g",
      fat: "22g"
    },
    tags: ["Traditionell", "Auflauf", "Kartoffeln"]
  }
}

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return Object.keys(recipes).map((slug) => ({
    slug: slug,
  }))
}

const getRecipeBySlug = (slug: string) => {
  return recipes[slug as keyof typeof recipes]
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipeBySlug(params.slug)
  
  if (!recipe) {
    return <div>Rezept nicht gefunden</div>
  }

  return (
    <article className="container py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {recipe.prepTime}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {recipe.servings} Portionen
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {recipe.rating}
            </span>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-lg mb-8">{recipe.description}</p>

          <div className="flex gap-2 mb-8">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            <Button variant="outline" size="lg">
              <Printer className="mr-2 h-4 w-4" />
              Drucken
            </Button>
            <Button variant="outline" size="lg">
              <BookmarkPlus className="mr-2 h-4 w-4" />
              Speichern
            </Button>
          </div>

          <Separator className="my-8" />

          {/* Ingredients */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Zutaten</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </section>

          <Separator className="my-8" />

          {/* Instructions */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Zubereitung</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-none w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <Separator className="my-8" />

          {/* Comments */}
          <RecipeComments recipeId={params.slug} />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Nährwerte pro Portion</h3>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Kalorien</dt>
                <dd className="font-medium">{recipe.nutrition.calories} kcal</dd>
              </div>
              <div className="flex justify-between">
                <dt>Protein</dt>
                <dd className="font-medium">{recipe.nutrition.protein}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Kohlenhydrate</dt>
                <dd className="font-medium">{recipe.nutrition.carbs}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Fett</dt>
                <dd className="font-medium">{recipe.nutrition.fat}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </article>
  )
}