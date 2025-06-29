"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, Menu } from "lucide-react"
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
  const [isSearchFocused, setIsSearchFocused] = useState(false)

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
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-gray-100 shadow-sm",
        !isVisible && "-translate-y-full"
      )}
      role="banner"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex h-16 sm:h-18 items-center justify-between">
        <div className="flex items-center">
          <MobileNav />
          <Link 
            href="/" 
            className="flex items-center ml-1 sm:ml-0 group" 
            aria-label="Veggie Rezepte - Zur Startseite"
            title="Veggie Rezepte - Vegetarische Küche für jeden Tag"
          >
            <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0b3558] transition-colors duration-300 group-hover:text-[#f9d24f]">
                Veggie
              </span>
              <div className="mx-1 p-1 rounded-full bg-gradient-to-br from-[#f9d24f] to-[#f0c840] shadow-lg">
                <Image
                  src="/images/logo/logo.png"
                  alt="Veggie Rezepte Logo - Vegetarische Küche"
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 md:h-12 w-auto transition-transform duration-300 group-hover:rotate-12"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#0b3558] transition-colors duration-300 group-hover:text-[#f9d24f]">
                Rezepte
              </span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center h-full" role="navigation" aria-label="Hauptnavigation">
          <div 
            className="relative h-full"
            onMouseEnter={() => setHoveredItem('rezepte')}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href="/rezepte/alle"
              className={`flex items-center text-base font-semibold px-4 h-full transition-all duration-300 rounded-t-lg ${
                hoveredItem === 'rezepte' 
                  ? 'bg-[#f9d24f] text-[#0b3558] shadow-lg' 
                  : 'text-gray-700 hover:text-[#0b3558] hover:bg-gray-50'
              }`}
              aria-label="Alle Rezepte anzeigen"
              aria-expanded={hoveredItem === 'rezepte'}
              aria-haspopup="true"
            >
              Rezepte
              <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'rezepte' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {hoveredItem === 'rezepte' && (
              <div 
                className="absolute left-0 top-full w-64 z-40 bg-[#f9d24f] rounded-b-lg rounded-tr-lg shadow-xl border-t-2 border-[#f0c840] animate-slide-up" 
                role="menu"
                aria-label="Rezepte Untermenü"
              >
                <div className="py-4 px-4 space-y-2">
                  <Link 
                    href="/rezepte/alle" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Alle vegetarischen Rezepte durchstöbern"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Alle Rezepte
                    </div>
                  </Link>
                  <Link 
                    href="/zutaten-filter" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Rezepte nach verfügbaren Zutaten finden"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Zutaten-Filter
                    </div>
                  </Link>
                  <Link 
                    href="/rezepte/alle?sort=newest" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Neueste vegetarische Rezepte"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Neueste
                    </div>
                  </Link>
                  <Link 
                    href="/rezepte/alle?sort=popular" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Beliebteste vegetarische Rezepte"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Beliebteste
                    </div>
                  </Link>
                  <Link 
                    href="/rezepte/alle?tag=schnell" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Schnelle vegetarische Rezepte unter 30 Minuten"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Schnelle
                    </div>
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
              className={`flex items-center text-base font-semibold px-4 h-full transition-all duration-300 rounded-t-lg ${
                hoveredItem === 'kategorien' 
                  ? 'bg-[#f9d24f] text-[#0b3558] shadow-lg' 
                  : 'text-gray-700 hover:text-[#0b3558] hover:bg-gray-50'
              }`}
              aria-label="Rezeptkategorien durchstöbern"
              aria-expanded={hoveredItem === 'kategorien'}
              aria-haspopup="true"
            >
              Kategorien
              <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'kategorien' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {hoveredItem === 'kategorien' && (
              <div 
                className="absolute left-0 top-full w-64 z-40 bg-[#f9d24f] rounded-b-lg rounded-tr-lg shadow-xl border-t-2 border-[#f0c840] animate-slide-up" 
                role="menu"
                aria-label="Kategorien Untermenü"
              >
                <div className="py-4 px-4 space-y-2">
                  <Link 
                    href="/kategorien" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Alle Rezeptkategorien anzeigen"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Alle Kategorien
                    </div>
                  </Link>
                  <Link 
                    href="/kategorien/hauptgerichte" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Vegetarische Hauptgerichte"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Hauptgerichte
                    </div>
                  </Link>
                  <Link 
                    href="/kategorien/suppen" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Vegetarische Suppen und Eintöpfe"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Suppen
                    </div>
                  </Link>
                  <Link 
                    href="/kategorien/salate" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Frische vegetarische Salate"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Salate
                    </div>
                  </Link>
                  <Link 
                    href="/kategorien/fruehstueck" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Vegetarische Frühstücksideen"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Frühstück
                    </div>
                  </Link>
                  <Link 
                    href="/kategorien/desserts" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Vegetarische Desserts und Süßspeisen"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Desserts
                    </div>
                  </Link>
                  <Link 
                    href="/kategorien/auflaeufe" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Vegetarische Aufläufe und Gratins"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Aufläufe
                    </div>
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
              className={`flex items-center text-base font-semibold px-4 h-full transition-all duration-300 rounded-t-lg ${
                hoveredItem === 'ueber' 
                  ? 'bg-[#f9d24f] text-[#0b3558] shadow-lg' 
                  : 'text-gray-700 hover:text-[#0b3558] hover:bg-gray-50'
              }`}
              aria-label="Über Veggie Rezepte erfahren"
              aria-expanded={hoveredItem === 'ueber'}
              aria-haspopup="true"
            >
              Über uns
              <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${hoveredItem === 'ueber' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            {hoveredItem === 'ueber' && (
              <div 
                className="absolute left-0 top-full w-64 z-40 bg-[#f9d24f] rounded-b-lg rounded-tr-lg shadow-xl border-t-2 border-[#f0c840] animate-slide-up" 
                role="menu"
                aria-label="Über uns Untermenü"
              >
                <div className="py-4 px-4 space-y-2">
                  <Link 
                    href="/about" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Über das Veggie Rezepte Team"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Über Uns
                    </div>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Kontakt zu Veggie Rezepte"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      Kontakt
                    </div>
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block px-4 py-3 text-[#0b3558] font-medium hover:bg-white/20 rounded-lg transition-all duration-200"
                    role="menuitem"
                    aria-label="Häufig gestellte Fragen"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#0b3558] rounded-full"></div>
                      FAQ
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center">
          <form 
            onSubmit={handleSearch} 
            className="relative w-[140px] sm:w-[200px] lg:w-[320px]"
            role="search"
            aria-label="Rezepte suchen"
          >
            <label htmlFor="search-input" className="sr-only">
              Nach vegetarischen Rezepten suchen
            </label>
            <Search 
              className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-300 ${
                isSearchFocused ? 'text-[#0b3558]' : 'text-gray-400'
              }`} 
              aria-hidden="true"
            />
            <Input
              id="search-input"
              type="search"
              placeholder="Suchen..."
              className={`w-full h-10 sm:h-11 pl-10 pr-4 text-sm rounded-full border-2 transition-all duration-300 ${
                isSearchFocused 
                  ? 'border-[#f9d24f] ring-4 ring-[#f9d24f]/20 shadow-lg bg-white' 
                  : 'border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-white'
              }`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
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