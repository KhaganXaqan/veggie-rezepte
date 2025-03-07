"use client"

import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { MobileNav } from "@/components/mobile-nav"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // If scrolling down, hide the navbar
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
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
      router.push(`/suche?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b bg-white transition-transform duration-300",
      !isVisible && "-translate-y-full"
    )}>
      <div className="w-full px-3 sm:container sm:max-w-7xl sm:mx-auto sm:pl-9 sm:pr-12 lg:pl-14 lg:pr-[62px] flex h-14 sm:h-16 items-center justify-between">
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
        
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/rezepte/alle" className="text-base font-black font-['Copperplate', 'Papyrus', 'fantasy'] text-black transition-colors hover:text-brand">
            Alle Rezepte
          </Link>
          <Link href="/kategorien" className="text-base font-black font-['Copperplate', 'Papyrus', 'fantasy'] text-black transition-colors hover:text-brand">
            Kategorien
          </Link>
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