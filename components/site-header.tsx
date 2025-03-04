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
      "sticky top-0 z-50 w-full border-b bg-background transition-transform duration-300",
      !isVisible && "-translate-y-full"
    )}>
      <div className="container max-w-7xl mx-auto pl-7 pr-10 sm:pl-9 sm:pr-12 lg:pl-14 lg:pr-[62px] flex h-16 items-center">
        <MobileNav />
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="flex items-center space-x-2" aria-label="Veggie Rezepte - Startseite">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-brand">Veggie</span>
              <Image
                src="/images/logo/logo.png"
                alt="Veggie Rezepte Logo"
                width={40}
                height={40}
                className="h-14 w-auto"
                priority
              />
              <span className="text-2xl font-bold text-brand">Rezepte</span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/rezepte/alle" className="text-base font-black font-['Copperplate', 'Papyrus', 'fantasy'] text-black transition-colors hover:text-brand">
              Alle Rezepte
            </Link>
            <Link href="/kategorien" className="text-base font-black font-['Copperplate', 'Papyrus', 'fantasy'] text-black transition-colors hover:text-brand">
              Kategorien
            </Link>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <form onSubmit={handleSearch} className="w-full max-w-xl lg:flex">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rezepte suchen..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  )
}