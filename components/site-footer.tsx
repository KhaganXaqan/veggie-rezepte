import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Über uns</h3>
            <p className="text-muted-foreground mb-4">
              Veggie-Rezepte.de ist deine Quelle für köstliche vegetarische Rezepte aus der deutschen Küche und der ganzen Welt.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-green-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-green-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-green-600">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kategorien</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kategorien/hauptgerichte" className="text-muted-foreground hover:text-green-600">
                  Hauptgerichte
                </Link>
              </li>
              <li>
                <Link href="/kategorien/suppen" className="text-muted-foreground hover:text-green-600">
                  Suppen
                </Link>
              </li>
              <li>
                <Link href="/kategorien/salate" className="text-muted-foreground hover:text-green-600">
                  Salate
                </Link>
              </li>
              <li>
                <Link href="/kategorien/auflaufe" className="text-muted-foreground hover:text-green-600">
                  Aufläufe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-muted-foreground hover:text-green-600">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-green-600">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-green-600">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-green-600">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Abonniere unseren Newsletter für die neuesten Rezepte und Tipps.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="w-full px-4 py-2 rounded-lg border bg-white"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Abonnieren
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© 2025 Veggie-Rezepte.de - Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  )
}
