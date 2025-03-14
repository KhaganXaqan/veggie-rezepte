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
        // If scrolling down, hide the navbar
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
          setHoveredItem(null)
        } 
        // If scrolling up, show the navbar
        else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // Cleanup
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

  // We can't use dynamic values in Tailwind classes, so we'll use style for the brand colors
  const navItemStyle = (isHovered: boolean) => ({
    backgroundColor: isHovered ? brandColors.primary.yellow : undefined
  });

  const dropdownStyle = {
    backgroundColor: brandColors.primary.yellow
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full bg-white transition-transform duration-300",
      !isVisible && "-translate-y-full"
    )}>
      <div className="container max-w-7xl mx-auto px-8 md:px-12 lg:px-16 flex h-14 sm:h-16 items-center justify-between">
        <div className="flex items-center">
        <MobileNav />
          <Link href="/" className="flex items-center ml-2 sm:ml-0" aria-label="Veggie Rezepte - Startseite">
            <div className="flex items-center">
              <span className="text-lg sm:text-2xl font-bold text-brand">Veggie</span>
              <Image
                src="/images/logo/logo.png"
                alt="Veggie Rezepte Logo"
                width={40}
                height={40}
                className="h-8 sm:h-14 w-auto"
                priority
              />
              <span className="text-lg sm:text-2xl font-bold text-brand">Rezepte</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden sm:flex items-center h-full">
          <nav className="flex items-center h-full">
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
              >
                Rezepte <span className="ml-1">+</span>
              </Link>
              
              {hoveredItem === 'rezepte' && (
                <div className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" style={dropdownStyle}>
                  <div className="py-4 px-4 flex flex-col space-y-3">
                    <Link href="/rezepte/alle" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Alle Rezepte
                    </Link>
                    <Link href="/rezepte/alle?sort=newest" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Neueste
                    </Link>
                    <Link href="/rezepte/alle?sort=popular" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Beliebteste
                    </Link>
                    <Link href="/rezepte/alle?tag=schnell" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Schnelle
                    </Link>
                    <Link href="/rezepte/alle?tag=einfach" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Einfache
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
              >
                Saisonale Rezepte <span className="ml-1">+</span>
              </Link>
              
              {hoveredItem === 'jahreszeiten' && (
                <div className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" style={dropdownStyle}>
                  <div className="py-4 px-4 flex flex-col space-y-3">
                    <Link href="/rezepte/alle?tag=Frühling" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Frühlingsrezepte
                    </Link>
                    <Link href="/rezepte/alle?tag=Sommer" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Sommerrezepte
                    </Link>
                    <Link href="/rezepte/alle?tag=Herbst" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Herbstrezepte
                    </Link>
                    <Link href="/rezepte/alle?tag=Winter" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
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
              >
                Kategorien <span className="ml-1">+</span>
              </Link>
              
              {hoveredItem === 'kategorien' && (
                <div className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" style={dropdownStyle}>
                  <div className="py-4 px-4 flex flex-col space-y-3">
                    <Link href="/kategorien" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Alle Kategorien
                    </Link>
                    <Link href="/kategorien/hauptgerichte" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Hauptgerichte
                    </Link>
                    <Link href="/kategorien/suppen" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Suppen
                    </Link>
                    <Link href="/kategorien/salate" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Salate
                    </Link>
                    <Link href="/kategorien/fruehstueck" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Frühstück
                    </Link>
                    <Link href="/kategorien/desserts" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Desserts
                    </Link>
                    <Link href="/kategorien/auflaeufe" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
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
              >
                Über uns <span className="ml-1">+</span>
              </Link>
              
              {hoveredItem === 'ueber' && (
                <div className="absolute right-0 top-full w-[200px] z-40 border-r-[3px] border-r-black shadow-[0_3px_0_0_rgba(0,0,0,0.9)]" style={dropdownStyle}>
                  <div className="py-4 px-4 flex flex-col space-y-3">
                    <Link href="/about" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Über Uns
                    </Link>
                    <Link href="/contact" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      Kontakt
            </Link>
                    <Link href="/faq" className="text-lg font-medium text-black hover:text-[#db747a] hover:underline">
                      FAQ
            </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center">
          <form onSubmit={handleSearch} className="relative w-[140px] sm:w-[200px] lg:w-[300px]">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
              placeholder="Suchen..."
              className="w-full h-9 pl-8 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
          </form>
        </div>
      </div>
    </header>
  )
}