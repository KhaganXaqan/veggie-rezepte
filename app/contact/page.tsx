import { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Kontakt | Veggie Rezepte",
  description: "Kontaktieren Sie das Veggie Rezepte Team mit Fragen, Anregungen oder Feedback.",
}

export default function ContactPage() {
  return (
    <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Kontaktiere Uns</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Schreib uns eine Nachricht</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Dein Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-Mail</label>
                  <Input id="email" type="email" placeholder="deine@email.de" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Betreff</label>
                  <Input id="subject" placeholder="Worum geht es?" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Nachricht</label>
                  <Textarea id="message" placeholder="Deine Nachricht..." className="min-h-[150px]" />
                </div>
              </div>
              <Button type="submit" className="w-full bg-[#db747a] hover:bg-[#c5656b]">Nachricht senden</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
            <div className="space-y-6"> 
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#db747a] mt-1" />
                <div>
                  <h3 className="font-medium">E-Mail</h3>
                  <p className="text-gray-600">info@veggie-rezepte.de</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="font-medium mb-2">Öffnungszeiten</h3>
                <div className="space-y-1 text-gray-600">
                  <p className="flex justify-between">
                    <span>Montag - Freitag:</span>
                    <span>9:00 - 17:00 Uhr</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Samstag & Sonntag:</span>
                    <span>Geschlossen</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Hast du ein Rezept, das du teilen möchtest?</h2>
          <p className="mb-4">Wir freuen uns immer über neue Rezeptideen von unserer Community! Sende uns dein Lieblingsrezept und vielleicht wird es Teil unserer Sammlung.</p>
          <Button className="bg-[#db747a] hover:bg-[#c5656b]">Rezept einreichen</Button>
        </div>
      </div>
    </div>
  )
} 