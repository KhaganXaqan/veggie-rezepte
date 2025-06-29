"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChefHat, Utensils, BookOpen, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const closeNav = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 p-2 text-black lg:hidden hover:bg-[#f9d24f]/20 rounded-xl"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] bg-gradient-to-br from-white via-[#f9d24f]/5 to-[#0b3558]/5 border-r-2 border-[#f9d24f]">
        <SheetHeader className="border-b border-gray-200 pb-4 mb-6">
          <SheetTitle className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f9d24f] to-[#f0c840] rounded-xl flex items-center justify-center">
              <ChefHat className="h-6 w-6 text-[#0b3558]" />
            </div>
            <span className="text-xl font-bold text-[#0b3558]">Veggie-Rezepte</span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-3">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="alle-rezepte" className="border-none">
              <div className="flex rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                <Link 
                  href="/rezepte/alle" 
                  onClick={closeNav}
                  className="flex-1 px-4 py-4 text-[#0b3558] font-semibold text-base hover:bg-[#f9d24f]/10 transition-all duration-200 flex items-center gap-3"
                >
                  <BookOpen className="h-5 w-5" />
                  Rezepte
                </Link>
                <AccordionTrigger className="px-4 py-4 text-[#0b3558] hover:bg-[#f9d24f]/10 transition-all duration-200 border-l border-gray-100" />
              </div>
              <AccordionContent className="pt-2">
                <div className="space-y-2 pl-4">
                  <Link 
                    href="/rezepte/alle" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Alle Rezepte
                  </Link>
                  <Link 
                    href="/zutaten-filter" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Zutaten-Filter
                  </Link>
                  <Link 
                    href="/rezepte/alle?sort=newest" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Neueste Rezepte
                  </Link>
                  <Link 
                    href="/rezepte/alle?sort=popular" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Beliebteste Rezepte
                  </Link>
                  <Link 
                    href="/rezepte/alle?time=30" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Schnelle Rezepte
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="kategorien" className="border-none">
              <div className="flex rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                <Link 
                  href="/kategorien" 
                  onClick={closeNav}
                  className="flex-1 px-4 py-4 text-[#0b3558] font-semibold text-base hover:bg-[#f9d24f]/10 transition-all duration-200 flex items-center gap-3"
                >
                  <Utensils className="h-5 w-5" />
                  Kategorien
                </Link>
                <AccordionTrigger className="px-4 py-4 text-[#0b3558] hover:bg-[#f9d24f]/10 transition-all duration-200 border-l border-gray-100" />
              </div>
              <AccordionContent className="pt-2">
                <div className="space-y-2 pl-4">
                  <Link 
                    href="/kategorien" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Alle Kategorien
                  </Link>
                  <Link 
                    href="/kategorien/hauptgerichte" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Hauptgerichte
                  </Link>
                  <Link 
                    href="/kategorien/suppen" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Suppen
                  </Link>
                  <Link 
                    href="/kategorien/salate" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Salate
                  </Link>
                  <Link 
                    href="/kategorien/fruehstueck" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Frühstück
                  </Link>
                  <Link 
                    href="/kategorien/desserts" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Desserts
                  </Link>
                  <Link 
                    href="/kategorien/auflaeufe" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Aufläufe
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="ueber" className="border-none">
              <div className="flex rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
                <Link 
                  href="/about" 
                  onClick={closeNav}
                  className="flex-1 px-4 py-4 text-[#0b3558] font-semibold text-base hover:bg-[#f9d24f]/10 transition-all duration-200 flex items-center gap-3"
                >
                  <Heart className="h-5 w-5" />
                  Über uns
                </Link>
                <AccordionTrigger className="px-4 py-4 text-[#0b3558] hover:bg-[#f9d24f]/10 transition-all duration-200 border-l border-gray-100" />
              </div>
              <AccordionContent className="pt-2">
                <div className="space-y-2 pl-4">
                  <Link 
                    href="/about" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Über Uns
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    Kontakt
                  </Link>
                  <Link 
                    href="/faq" 
                    onClick={closeNav}
                    className="block px-4 py-3 text-gray-700 hover:text-[#0b3558] hover:bg-white rounded-lg transition-all duration-200 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#f9d24f] rounded-full"></div>
                    FAQ
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Quick Access Links */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600 mb-3 px-2">Schnellzugriff</h3>
            <div className="space-y-2">
              <Link 
                href="/zutaten-filter" 
                onClick={closeNav}
                className="block px-4 py-3 bg-gradient-to-r from-[#f9d24f] to-[#f0c840] text-[#0b3558] font-semibold rounded-xl hover:from-[#f0c840] hover:to-[#f9d24f] transition-all duration-200 shadow-sm"
              >
                🔍 Zutaten-Filter
              </Link>
              <Link 
                href="/rezepte/alle?tag=Schnell" 
                onClick={closeNav}
                className="block px-4 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-sm border border-gray-100"
              >
                ⚡ Schnelle Rezepte
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  className?: string
  children: React.ReactNode
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={className}
    >
      {children}
    </Link>
  )
}