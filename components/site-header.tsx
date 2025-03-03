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
      <div className="container flex h-16 items-center">
        <MobileNav />
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="flex items-center space-x-2" aria-label="Veggie Rezepte - Startseite">
            <div className="flex items-center">
              <span className="text-xl font-bold text-brand">Veggie</span>
              <Image
                src="/images/logo/logo.png"
                alt="Veggie Rezepte Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <span className="text-xl font-bold text-brand">Rezepte</span>
            </div>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/rezepte/alle" className="transition-colors hover:text-foreground/80">
              Rezepte
            </Link>
            <Link href="/kategorien" className="transition-colors hover:text-foreground/80">
              Kategorien
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
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
          <nav className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost">
              Rezept einreichen
            </Button>
            <Button variant="default">
              Anmelden
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}