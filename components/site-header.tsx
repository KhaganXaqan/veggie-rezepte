"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SiteHeader() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/suche?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Veggie-Rezepte.de</span>
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            <Link href="/kategorien" className="text-muted-foreground hover:text-foreground">
              Kategorien
            </Link>
            <Link href="/suche" className="text-muted-foreground hover:text-foreground">
              Rezepte
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
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="hidden lg:flex">
              Rezept einreichen
            </Button>
            <Button variant="default" className="hidden lg:flex">
              Anmelden
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}