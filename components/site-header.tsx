"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-green-600">
            Veggie-Rezepte
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/kategorien"
              className="text-muted-foreground hover:text-green-600 transition-colors"
            >
              Kategorien
            </Link>
            <Link 
              href="/rezepte"
              className="text-muted-foreground hover:text-green-600 transition-colors"
            >
              Alle Rezepte
            </Link>
            <Link 
              href="/saisonkalender"
              className="text-muted-foreground hover:text-green-600 transition-colors"
            >
              Saisonkalender
            </Link>
            <Link 
              href="/blog"
              className="text-muted-foreground hover:text-green-600 transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <form className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Rezepte suchen..."
              className="pl-10 h-9 w-[200px] rounded-full bg-muted px-4 focus-visible:ring-1 focus-visible:ring-green-600"
            />
          </form>
          <Button className="bg-green-600 hover:bg-green-700">
            Rezept einreichen
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-white border-b",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container py-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/kategorien"
                className="block text-lg text-muted-foreground hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategorien
              </Link>
            </li>
            <li>
              <Link
                href="/rezepte"
                className="block text-lg text-muted-foreground hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Alle Rezepte
              </Link>
            </li>
            <li>
              <Link
                href="/saisonkalender"
                className="block text-lg text-muted-foreground hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Saisonkalender
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block text-lg text-muted-foreground hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <form className="relative mt-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Rezepte suchen..."
                  className="w-full pl-10 h-10 rounded-lg bg-muted px-4"
                />
              </form>
            </li>
            <li>
              <Button className="w-full bg-green-600 hover:bg-green-700 mt-4">
                Rezept einreichen
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}