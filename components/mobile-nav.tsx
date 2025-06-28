"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-1 p-1 text-black md:hidden"
        >
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-[#f9d24f] max-w-[85vw] sm:max-w-[350px]">
        <div className="px-4 sm:px-7 py-3">
          <Link
            href="/"
            className="flex items-center"
          >
            <span className="font-bold text-lg sm:text-xl text-black">Veggie-Rezepte</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="alle-rezepte" className="border-b-0">
              <div className="flex">
                <Link href="/rezepte/alle" className="px-4 sm:px-7 py-2 text-black font-medium text-base sm:text-lg hover:text-[#db747a] flex-grow">
                  Rezepte
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black min-h-[44px]" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-2 sm:pl-4">
                  <Link href="/rezepte/alle" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Alle Rezepte
                  </Link>
                  <Link href="/rezepte/alle?sort=newest" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Neueste Rezepte
                  </Link>
                  <Link href="/rezepte/alle?sort=popular" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Beliebteste Rezepte
                  </Link>
                  <Link href="/rezepte/alle?time=30" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Schnelle Rezepte
                  </Link>
                  <Link href="/rezepte/alle?difficulty=easy" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Einfache Rezepte
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="kategorien" className="border-b-0">
              <div className="flex">
                <Link href="/kategorien" className="px-4 sm:px-7 py-2 text-black font-medium text-base sm:text-lg hover:text-[#db747a] flex-grow">
                  Kategorien
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black min-h-[44px]" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-2 sm:pl-4">
                  <Link href="/kategorien" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Alle Kategorien
                  </Link>
                  <Link href="/kategorien/hauptgerichte" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Hauptgerichte
                  </Link>
                  <Link href="/kategorien/suppen" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Suppen
                  </Link>
                  <Link href="/kategorien/salate" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Salate
                  </Link>
                  <Link href="/kategorien/fruehstueck" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Frühstück
                  </Link>
                  <Link href="/kategorien/desserts" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Desserts
                  </Link>
                  <Link href="/kategorien/auflaeufe" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Aufläufe
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="saisonales" className="border-b-0">
              <div className="flex">
                <Link href="/rezepte/alle?tag=Frühling" className="px-4 sm:px-7 py-2 text-black font-medium text-base sm:text-lg hover:text-[#db747a] flex-grow">
                  Saisonales
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black min-h-[44px]" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-2 sm:pl-4">
                  <Link href="/rezepte/alle?tag=Frühlingshaft" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Frühling
                  </Link>
                  <Link href="/rezepte/alle?tag=Sommerlich" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Sommer
                  </Link>
                  <Link href="/rezepte/alle?tag=Herbstlich" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Herbst
                  </Link>
                  <Link href="/rezepte/alle?tag=Winterlich" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Winter
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="spezielle-ernaehrung" className="border-b-0">
              <div className="flex">
                <Link href="/rezepte/alle?tag=Vegan" className="px-4 sm:px-7 py-2 text-black font-medium text-base sm:text-lg hover:text-[#db747a] flex-grow">
                  Spezielle Ernährung
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black min-h-[44px]" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-2 sm:pl-4">
                  <Link href="/rezepte/alle?tag=Vegan" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Vegan
                  </Link>
                  <Link href="/rezepte/alle?tag=Glutenfrei" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Glutenfrei
                  </Link>
                  <Link href="/rezepte/alle?tag=Proteinreich" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Proteinreich
                  </Link>
                  <Link href="/rezepte/alle?tag=Schnell" className="px-4 sm:px-7 py-2 text-base sm:text-lg text-black hover:text-[#db747a] hover:underline min-h-[44px] flex items-center">
                    Schnelle Rezepte
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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