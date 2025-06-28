"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Metadata } from "next"
import Script from 'next/script'

interface FAQItemProps {
  question: string
  answer: React.ReactNode
  id: string
}

function FAQItem({ question, answer, id }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4" itemScope itemType="https://schema.org/Question">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`answer-${id}`}
        id={`question-${id}`}
      >
        <span itemProp="name">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
        )}
      </button>
      {isOpen && (
        <div 
          className="mt-3 text-gray-600 prose" 
          id={`answer-${id}`}
          itemScope 
          itemType="https://schema.org/Answer"
          itemProp="acceptedAnswer"
        >
          <div itemProp="text">{answer}</div>
        </div>
      )}
    </div>
  )
}

// FAQ data with structured content
const faqData = [
  {
    id: "vegetarian-recipes",
    question: "Sind alle Rezepte auf Veggie Rezepte vegetarisch?",
    answer: (
      <p>
        Ja, alle Rezepte auf unserer Website sind vegetarisch. Viele davon sind auch vegan oder können leicht 
        vegan angepasst werden, was in den Rezeptdetails entsprechend vermerkt ist. Wir kennzeichnen vegane 
        Rezepte deutlich und bieten Alternativen für tierische Produkte.
      </p>
    )
  },
  {
    id: "recipe-filtering",
    question: "Kann ich Rezepte nach bestimmten Kriterien filtern?",
    answer: (
      <p>
        Absolut! Du kannst Rezepte nach Kategorien (z.B. Hauptgerichte, Suppen, Salate), nach Zubereitungszeit, 
        Schwierigkeitsgrad oder nach bestimmten Zutaten filtern. Nutze einfach die Filterfunktion auf unserer 
        Rezepteseite. Zusätzlich kannst du nach Tags wie "schnell", "vegan", "glutenfrei" oder "proteinreich" suchen.
      </p>
    )
  },
  {
    id: "portion-adjustment",
    question: "Wie kann ich die Portionsgröße eines Rezepts anpassen?",
    answer: (
      <p>
        Bei jedem Rezept findest du einen Portionsregler, mit dem du die Anzahl der Portionen anpassen kannst. 
        Die Zutatenmengen werden automatisch entsprechend umgerechnet. Du kannst zwischen 1 und 12 Portionen wählen.
      </p>
    )
  },
  {
    id: "save-recipes",
    question: "Kann ich Rezepte speichern oder eine Einkaufsliste erstellen?",
    answer: (
      <p>
        Ja, du kannst Rezepte zu deinen Favoriten hinzufügen, indem du auf das Herz-Symbol klickst. Außerdem 
        kannst du für jedes Rezept eine Einkaufsliste generieren oder Zutaten zu einer bestehenden Liste hinzufügen. 
        Die Einkaufsliste kann als PDF heruntergeladen oder per E-Mail verschickt werden.
      </p>
    )
  },
  {
    id: "recipe-sources",
    question: "Woher stammen die Rezepte auf Veggie Rezepte?",
    answer: (
      <p>
        Unsere Rezepte werden von unserem Team aus Köchen und Food-Enthusiasten entwickelt und getestet. 
        Einige Rezepte stammen auch von Gastköchen oder wurden von unserer Community eingereicht und von 
        unserem Team überprüft. Jedes Rezept wird mindestens dreimal getestet, bevor es veröffentlicht wird.
      </p>
    )
  },
  {
    id: "submit-recipes",
    question: "Kann ich eigene Rezepte einreichen?",
    answer: (
      <p>
        Ja, wir freuen uns immer über Rezeptvorschläge aus unserer Community! Du kannst dein Rezept über 
        unser Kontaktformular einreichen. Bitte füge eine detaillierte Zutatenliste, Schritt-für-Schritt-Anleitung 
        und wenn möglich ein Foto hinzu. Unser Team prüft jedes eingereichte Rezept und gibt dir Feedback.
      </p>
    )
  },
  {
    id: "nutrition-accuracy",
    question: "Sind die Nährwertangaben bei den Rezepten verlässlich?",
    answer: (
      <p>
        Wir bemühen uns, möglichst genaue Nährwertangaben zu machen, aber sie sollten als Richtwerte betrachtet 
        werden. Die tatsächlichen Werte können je nach verwendeten Produkten und Zubereitungsmethoden variieren. 
        Unsere Nährwertberechnungen basieren auf aktuellen Lebensmitteldatenbanken.
      </p>
    )
  },
  {
    id: "comments-ratings",
    question: "Kann ich Rezepte kommentieren oder bewerten?",
    answer: (
      <p>
        Ja, du kannst Rezepte bewerten und Kommentare hinterlassen. Teile deine Erfahrungen, Tipps oder 
        Variationen – das hilft anderen Nutzern und gibt uns wertvolles Feedback! Du kannst auch Fotos 
        deiner nachgekochten Gerichte hochladen.
      </p>
    )
  },
  {
    id: "newsletter",
    question: "Gibt es einen Newsletter?",
    answer: (
      <p>
        Ja, du kannst unseren wöchentlichen Newsletter abonnieren, um neue Rezepte, saisonale Inspirationen 
        und Tipps rund ums Kochen zu erhalten. Melde dich einfach auf unserer Startseite an. Du erhältst auch 
        exklusive Rezepte, die nur für Newsletter-Abonnenten verfügbar sind.
      </p>
    )
  },
  {
    id: "social-media",
    question: "Wie kann ich Veggie Rezepte auf sozialen Medien folgen?",
    answer: (
      <p>
        Du findest uns auf Instagram (@veggierezepte), Facebook, Pinterest und YouTube unter dem Namen 
        @VeggieRezepte. Folge uns für tägliche Inspirationen, Kochtipps, Behind-the-Scenes-Einblicke und 
        Live-Kochsessions!
      </p>
    )
  },
  {
    id: "dietary-restrictions",
    question: "Gibt es Rezepte für spezielle Ernährungsformen?",
    answer: (
      <p>
        Ja! Wir haben Rezepte für verschiedene Ernährungsformen: vegan, glutenfrei, laktosefrei, low-carb, 
        proteinreich und mehr. Nutze unsere Filteroptionen oder suche nach entsprechenden Tags. Jedes Rezept 
        ist entsprechend gekennzeichnet und enthält Hinweise für Anpassungen.
      </p>
    )
  },
  {
    id: "cooking-tips",
    question: "Bietet ihr auch Kochtipps und Techniken an?",
    answer: (
      <p>
        Absolut! Neben Rezepten findest du bei uns auch ausführliche Kochtipps, Zubereitungstechniken und 
        Warenkunde. Wir erklären Grundlagen wie das richtige Schneiden von Gemüse, Gewürzkunde und 
        Küchenausstattung. Schau in unseren Blog-Bereich für detaillierte Anleitungen.
      </p>
    )
  }
];

// Generate FAQ structured data
function generateFAQStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.props.children
      }
    }))
  };
}

export default function FAQPage() {
  const structuredData = generateFAQStructuredData();

  return (
    <>
      {/* FAQ Structured Data */}
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <SiteHeader />
      <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li><a href="/" className="hover:text-[#0b3558]">Home</a></li>
                <li><span className="mx-2">›</span></li>
                <li className="text-[#0b3558] font-medium">FAQ</li>
              </ol>
            </nav>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Häufig gestellte Fragen</h1>
            <p className="text-lg text-gray-600 text-center">
              Hier findest du Antworten auf die häufigsten Fragen rund um Veggie Rezepte, 
              unsere vegetarischen Rezepte und die Nutzung unserer Website.
            </p>
          </header>
          
          <div className="bg-white rounded-lg shadow-sm p-6" itemScope itemType="https://schema.org/FAQPage">
            {faqData.map((faq) => (
              <FAQItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          
          {/* Additional help section */}
          <div className="mt-12 bg-gray-50 rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Weitere Fragen?</h2>
            <p className="text-gray-600 mb-4">
              Konntest du deine Frage nicht finden? Wir helfen gerne weiter!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#0b3558] text-white px-6 py-2 rounded-full hover:bg-[#f9d24f] hover:text-black transition-colors"
              >
                Kontakt aufnehmen
              </a>
              <a 
                href="mailto:info@veggie-rezepte.de" 
                className="border border-[#0b3558] text-[#0b3558] px-6 py-2 rounded-full hover:bg-[#0b3558] hover:text-white transition-colors"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}