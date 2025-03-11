import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Über Uns | Veggie Rezepte",
  description: "Erfahren Sie mehr über Veggie Rezepte, unsere Mission und die Leidenschaft für vegetarische Küche.",
}

export default function AboutPage() {
  return (
    <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Über Veggie Rezepte</h1>
        
        <div className="relative w-full flex justify-center items-center mb-8">
          <Image 
            src="/images/logo/logo.png" 
            alt="Veggie Rezepte Logo" 
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </div>
        
        <div className="prose prose-lg max-w-none">
          <h2>Unsere Geschichte</h2>
          <p>
            Veggie Rezepte entstand aus einer einfachen Idee: Vegetarische Küche sollte lecker, einfach und für jeden zugänglich sein. 
            Was als kleiner Food-Blog begann, hat sich zu einer umfassenden Sammlung von vegetarischen Rezepten entwickelt, 
            die von Anfängern und erfahrenen Köchen gleichermaßen geschätzt wird.
          </p>
          
          <h2>Unsere Mission</h2>
          <p>
            Wir glauben, dass vegetarische Ernährung nicht nur gesund und umweltfreundlich ist, sondern auch unglaublich vielfältig und schmackhaft sein kann. 
            Unsere Mission ist es, Menschen zu inspirieren, mehr pflanzliche Gerichte in ihren Alltag zu integrieren – ohne dabei auf Geschmack oder Genuss zu verzichten.
          </p>
          
          <h2>Unsere Werte</h2>
          <ul>
            <li><strong>Qualität:</strong> Jedes Rezept wird sorgfältig entwickelt und mehrfach getestet.</li>
            <li><strong>Zugänglichkeit:</strong> Wir verwenden leicht erhältliche Zutaten und verständliche Anleitungen.</li>
            <li><strong>Nachhaltigkeit:</strong> Wir fördern eine umweltbewusste Ernährung und saisonale Zutaten.</li>
            <li><strong>Gemeinschaft:</strong> Wir schätzen den Austausch und das Feedback unserer Nutzer.</li>
          </ul>
          
          <h2>Das Team</h2>
          <p>
            Hinter Veggie Rezepte steht ein kleines, aber leidenschaftliches Team von Food-Enthusiasten, Köchen und Ernährungsexperten. 
            Gemeinsam arbeiten wir daran, die besten vegetarischen Rezepte zu entwickeln und zu teilen.
          </p>
          
          <h2>Mach mit!</h2>
          <p>
            Wir freuen uns immer über Feedback, Anregungen und neue Rezeptideen. Teile deine Erfahrungen mit unseren Rezepten 
            oder schlag neue Ideen vor – gemeinsam machen wir vegetarische Ernährung noch besser!
          </p>
        </div>
      </div>
    </div>
  )
} 