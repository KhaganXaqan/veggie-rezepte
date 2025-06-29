"use client"

import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"
import React from "react"
import { brandColors } from "@/lib/theme"

export function SiteHeader() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
          setHoveredItem(null)
        } 
        else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/rezepte/alle?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setHoveredItem(null)
    }
  }

  const navItemStyle = (isHovered: boolean) => ({
    backgroundColor: isHovered ? brandColors.primary.yellow : undefined
  });

  const dropdownStyle = {
    backgroundColor: brandColors.primary.yellow
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-transform duration-300 border-b border-gray-100",
        !isVisible && "-translate-y-full"
      )}
      role="banner"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex h-14 sm:h-16 items-center justify-between">
        <div className="flex items-center">
          <MobileNav />
          <Link 
            href="/" 
            className="flex items-center ml-1 sm:ml-0" 
            aria-label="Veggie Rezepte - Zur Startseite"
            title="Veggie Rezepte - Vegetarische Küche für jeden Tag"
          >
            <div className="flex items-center">
              <span className="text-base sm:text-lg md:text-2xl font-bold text-brand">Veggie</span>
              <Image
                src="/images/logo/logo.png"
                alt="Veggie Rezepte Logo - Vegetarische Küche"
                width={40}
                height={40}
                className="h-7 sm:h-10 md:h-14 w-auto"
                priority
              />
              <span className="text-base sm:text-lg md:text-2xl font-bold text-brand">Rezepte</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden sm:flex items-center h-full" role="navigation" aria-label="Hauptnavigation">
          <div 
            className="relative h-full"
            onMouseEnter={() => setHoveredItem('rezepte')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href="/rezepte/alle"
              className={`flex items-center text-base font-medium px-4 h-full transition-colors ${
                hoveredItem === 'rezepte' 
                  ? 'border-r-[3px] border-r-black' 
                  : 'hover:border-r-[3px] hover:border-r-black'
              }`}
              style={navItemStyle(hoveredItem === 'rezepte')}
              aria-label="Alle Rezepte anzeigen"
              aria-expanded={hoveredItem === 'rezepte'}
              aria-haspopup="true"
            >
              Rezepte <span className="ml-1" aria-hidden="true">+</span>
            </Link>
            
            {hoveredItem === 'rezepte' && (
              <div 
                className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" 
                style={dropdownStyle}
                role="menu"
                aria-label="Rezepte Untermenü"
              >
                <div className="py-4 px-4 flex flex-col space-y-3">
                  <Link 
                    href="/rezepte/alle" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Alle vegetarischen Rezepte durchstöbern"
                  >
                    Alle Rezepte
                  </Link>
                  <Link 
                    href="/zutaten-filter" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Rezepte nach verfügbaren Zutaten finden"
                  >
                    Zutaten-Filter
                  </Link>
                  <Link 
                    href="/rezepte/alle?sort=newest" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Neueste vegetarische Rezepte"
                  >
                    Neueste
                  </Link>
                  <Link 
                    href="/rezepte/alle?sort=popular" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Beliebteste vegetarische Rezepte"
                  >
                    Beliebteste
                  </Link>
                  <Link 
                    href="/rezepte/alle?tag=schnell" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Schnelle vegetarische Rezepte unter 30 Minuten"
                  >
                    Schnelle
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="relative h-full"
            onMouseEnter={() => setHoveredItem('jahreszeiten')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href="/rezepte/alle?tag=saison"
              className={`flex items-center text-base font-medium px-4 h-full transition-colors ${
                hoveredItem === 'jahreszeiten' 
                  ? 'border-r-[3px] border-r-black' 
                  : 'hover:border-r-[3px] hover:border-r-black'
              }`}
              style={navItemStyle(hoveredItem === 'jahreszeiten')}
              aria-label="Saisonale vegetarische Rezepte"
              aria-expanded={hoveredItem === 'jahreszeiten'}
              aria-haspopup="true"
            >
              Saisonale Rezepte <span className="ml-1" aria-hidden="true">+</span>
            </Link>
            
            {hoveredItem === 'jahreszeiten' && (
              <div 
                className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" 
                style={dropdownStyle}
                role="menu"
                aria-label="Saisonale Rezepte Untermenü"
              >
                <div className="py-4 px-4 flex flex-col space-y-3">
                  <Link 
                    href="/rezepte/alle?tag=Frühlingshaft" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Frühlingsrezepte mit saisonalen Zutaten"
                  >
                    Frühlingsrezepte
                  </Link>
                  <Link 
                    href="/rezepte/alle?tag=Sommerlich" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Sommerrezepte leicht und frisch"
                  >
                    Sommerrezepte
                  </Link>
                  <Link 
                    href="/rezepte/alle?tag=Herbstlich" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Herbstrezepte mit Kürbis und Wurzelgemüse"
                  >
                    Herbstrezepte
                  </Link>
                  <Link 
                    href="/rezepte/alle?tag=Winterlich" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Winterrezepte wärmend und nahrhaft"
                  >
                    Winterrezepte
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="relative h-full"
            onMouseEnter={() => setHoveredItem('kategorien')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href="/kategorien"
              className={`flex items-center text-base font-medium px-4 h-full transition-colors ${
                hoveredItem === 'kategorien' 
                  ? 'border-r-[3px] border-r-black' 
                  : 'hover:border-r-[3px] hover:border-r-black'
              }`}
              style={navItemStyle(hoveredItem === 'kategorien')}
              aria-label="Rezeptkategorien durchstöbern"
              aria-expanded={hoveredItem === 'kategorien'}
              aria-haspopup="true"
            >
              Kategorien <span className="ml-1" aria-hidden="true">+</span>
            </Link>
            
            {hoveredItem === 'kategorien' && (
              <div 
                className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" 
                style={dropdownStyle}
                role="menu"
                aria-label="Kategorien Untermenü"
              >
                <div className="py-4 px-4 flex flex-col space-y-3">
                  <Link 
                    href="/kategorien" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Alle Rezeptkategorien anzeigen"
                  >
                    Alle Kategorien
                  </Link>
                  <Link 
                    href="/kategorien/hauptgerichte" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Vegetarische Hauptgerichte"
                  >
                    Hauptgerichte
                  </Link>
                  <Link 
                    href="/kategorien/suppen" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Vegetarische Suppen und Eintöpfe"
                  >
                    Suppen
                  </Link>
                  <Link 
                    href="/kategorien/salate" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Frische vegetarische Salate"
                  >
                    Salate
                  </Link>
                  <Link 
                    href="/kategorien/fruehstueck" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Vegetarische Frühstücksideen"
                  >
                    Frühstück
                  </Link>
                  <Link 
                    href="/kategorien/desserts" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Vegetarische Desserts und Süßspeisen"
                  >
                    Desserts
                  </Link>
                  <Link 
                    href="/kategorien/auflaeufe" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Vegetarische Aufläufe und Gratins"
                  >
                    Aufläufe
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="relative h-full"
            onMouseEnter={() => setHoveredItem('ueber')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href="/about"
              className={`flex items-center text-base font-medium px-4 h-full transition-colors ${
                hoveredItem === 'ueber' 
                  ? 'border-r-[3px] border-r-black' 
                  : 'hover:border-r-[3px] hover:border-r-black'
              }`}
              style={navItemStyle(hoveredItem === 'ueber')}
              aria-label="Über Veggie Rezepte erfahren"
              aria-expanded={hoveredItem === 'ueber'}
              aria-haspopup="true"
            >
              Über uns <span className="ml-1" aria-hidden="true">+</span>
            </Link>
            
            {hoveredItem === 'ueber' && (
              <div 
                className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" 
                style={dropdownStyle}
                role="menu"
                aria-label="Über uns Untermenü"
              >
                <div className="py-4 px-4 flex flex-col space-y-3">
                  <Link 
                    href="/about" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Über das Veggie Rezepte Team"
                  >
                    Über Uns
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Kontakt zu Veggie Rezepte"
                  >
                    Kontakt
                  </Link>
                  <Link 
                    href="/faq" 
                    className="text-lg font-medium text-black hover:text-[#db747a] hover:underline transition-colors"
                    role="menuitem"
                    aria-label="Häufig gestellte Fragen"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center">
          <form 
            onSubmit={handleSearch} 
            className="relative w-[120px] xs:w-[140px] sm:w-[200px] lg:w-[300px]"
            role="search"
            aria-label="Rezepte suchen"
          >
            <label htmlFor="search-input" className="sr-only">
              Nach vegetarischen Rezepten suchen
            </label>
            <Search 
              className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" 
              aria-hidden="true"
            />
            <Input
              id="search-input"
              type="search"
              placeholder="Suchen..."
              className="w-full h-8 sm:h-9 pl-6 sm:pl-8 text-xs sm:text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-describedby="search-description"
            />
            <span id="search-description" className="sr-only">
              Suche nach vegetarischen Rezepten, Zutaten oder Kategorien
            </span>
          </form>
        </div>
      </div>
    </header>
  )
}