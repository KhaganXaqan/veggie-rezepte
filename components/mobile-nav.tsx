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
          className="mr-2 px-0 text-black md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-[#f9d24f]">
        <div className="px-7">
          <Link
            href="/"
            className="flex items-center"
          >
            <span className="font-bold text-black">Veggie-Rezepte</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="alle-rezepte" className="border-b-0">
              <div className="flex">
                <Link href="/rezepte/alle" className="px-7 py-2 text-black font-medium text-lg hover:text-[#db747a] flex-grow">
                  Rezepte
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-3 pl-4">
                  <Link href="/rezepte/alle" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Alle Rezepte
                  </Link>
                  <Link href="/rezepte/alle?sort=newest" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Neueste Rezepte
                  </Link>
                  <Link href="/rezepte/alle?sort=popular" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Beliebteste Rezepte
                  </Link>
                  <Link href="/rezepte/alle?time=30" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Schnelle Rezepte
                  </Link>
                  <Link href="/rezepte/alle?difficulty=easy" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Einfache Rezepte
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="kategorien" className="border-b-0">
              <div className="flex">
                <Link href="/kategorien" className="px-7 py-2 text-black font-medium text-lg hover:text-[#db747a] flex-grow">
                  Kategorien
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-3 pl-4">
                  <Link href="/kategorien" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Alle Kategorien
                  </Link>
                  <Link href="/kategorien/hauptgerichte" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Hauptgerichte
                  </Link>
                  <Link href="/kategorien/suppen" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Suppen
                  </Link>
                  <Link href="/kategorien/salate" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Salate
                  </Link>
                  <Link href="/kategorien/fruehstueck" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Frühstück
                  </Link>
                  <Link href="/kategorien/desserts" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Desserts
                  </Link>
                  <Link href="/kategorien/auflaeufe" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Aufläufe
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="saisonales" className="border-b-0">
              <div className="flex">
                <Link href="/rezepte/alle?tag=Frühling" className="px-7 py-2 text-black font-medium text-lg hover:text-[#db747a] flex-grow">
                  Saisonales
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-3 pl-4">
                  <Link href="/rezepte/alle?tag=Frühling" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Frühling
                  </Link>
                  <Link href="/rezepte/alle?tag=Sommer" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Sommer
                  </Link>
                  <Link href="/rezepte/alle?tag=Herbst" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Herbst
                  </Link>
                  <Link href="/rezepte/alle?tag=Winter" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Winter
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="spezielle-ernaehrung" className="border-b-0">
              <div className="flex">
                <Link href="/rezepte/alle?tag=Vegan" className="px-7 py-2 text-black font-medium text-lg hover:text-[#db747a] flex-grow">
                  Spezielle Ernährung
                </Link>
                <AccordionTrigger className="px-2 py-2 text-black" />
              </div>
              <AccordionContent>
                <div className="flex flex-col gap-3 pl-4">
                  <Link href="/rezepte/alle?tag=Vegan" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Vegan
                  </Link>
                  <Link href="/rezepte/alle?tag=Glutenfrei" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Glutenfrei
                  </Link>
                  <Link href="/rezepte/alle?tag=Proteinreich" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
                    Proteinreich
                  </Link>
                  <Link href="/rezepte/alle?tag=Schnell" className="px-7 py-1 text-lg text-black hover:text-[#db747a] hover:underline">
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