"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: React.ReactNode
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && <div className="mt-3 text-gray-600 prose">{answer}</div>}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Häufig gestellte Fragen</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <FAQItem
            question="Sind alle Rezepte auf Veggie Rezepte vegetarisch?"
            answer={
              <p>
                Ja, alle Rezepte auf unserer Website sind vegetarisch. Viele davon sind auch vegan oder können leicht 
                vegan angepasst werden, was in den Rezeptdetails entsprechend vermerkt ist.
              </p>
            }
          />
          
          <FAQItem
            question="Kann ich Rezepte nach bestimmten Kriterien filtern?"
            answer={
              <p>
                Absolut! Du kannst Rezepte nach Kategorien (z.B. Hauptgerichte, Suppen, Salate), nach Zubereitungszeit, 
                Schwierigkeitsgrad oder nach bestimmten Zutaten filtern. Nutze einfach die Filterfunktion auf unserer 
                Rezepteseite.
              </p>
            }
          />
          
          <FAQItem
            question="Wie kann ich die Portionsgröße eines Rezepts anpassen?"
            answer={
              <p>
                Bei jedem Rezept findest du einen Portionsregler, mit dem du die Anzahl der Portionen anpassen kannst. 
                Die Zutatenmengen werden automatisch entsprechend umgerechnet.
              </p>
            }
          />
          
          <FAQItem
            question="Kann ich Rezepte speichern oder eine Einkaufsliste erstellen?"
            answer={
              <p>
                Ja, du kannst Rezepte zu deinen Favoriten hinzufügen, indem du auf das Herz-Symbol klickst. Außerdem 
                kannst du für jedes Rezept eine Einkaufsliste generieren oder Zutaten zu einer bestehenden Liste hinzufügen.
              </p>
            }
          />
          
          <FAQItem
            question="Woher stammen die Rezepte auf Veggie Rezepte?"
            answer={
              <p>
                Unsere Rezepte werden von unserem Team aus Köchen und Food-Enthusiasten entwickelt und getestet. 
                Einige Rezepte stammen auch von Gastköchen oder wurden von unserer Community eingereicht und von 
                unserem Team überprüft.
              </p>
            }
          />
          
          <FAQItem
            question="Kann ich eigene Rezepte einreichen?"
            answer={
              <p>
                Ja, wir freuen uns immer über Rezeptvorschläge aus unserer Community! Du kannst dein Rezept über 
                unser Kontaktformular einreichen. Bitte füge eine detaillierte Zutatenliste, Schritt-für-Schritt-Anleitung 
                und wenn möglich ein Foto hinzu.
              </p>
            }
          />
          
          <FAQItem
            question="Sind die Nährwertangaben bei den Rezepten verlässlich?"
            answer={
              <p>
                Wir bemühen uns, möglichst genaue Nährwertangaben zu machen, aber sie sollten als Richtwerte betrachtet 
                werden. Die tatsächlichen Werte können je nach verwendeten Produkten und Zubereitungsmethoden variieren.
              </p>
            }
          />
          
          <FAQItem
            question="Kann ich Rezepte kommentieren oder bewerten?"
            answer={
              <p>
                Ja, du kannst Rezepte bewerten und Kommentare hinterlassen. Teile deine Erfahrungen, Tipps oder 
                Variationen – das hilft anderen Nutzern und gibt uns wertvolles Feedback!
              </p>
            }
          />
          
          <FAQItem
            question="Gibt es einen Newsletter?"
            answer={
              <p>
                Ja, du kannst unseren wöchentlichen Newsletter abonnieren, um neue Rezepte, saisonale Inspirationen 
                und Tipps rund ums Kochen zu erhalten. Melde dich einfach auf unserer Startseite an.
              </p>
            }
          />
          
          <FAQItem
            question="Wie kann ich Veggie Rezepte auf sozialen Medien folgen?"
            answer={
              <p>
                Du findest uns auf Instagram, Facebook, Pinterest und YouTube unter dem Namen @VeggieRezepte. 
                Folge uns für tägliche Inspirationen, Kochtipps und Behind-the-Scenes-Einblicke!
              </p>
            }
          />
        </div>
      </div>
    </div>
  )
} 