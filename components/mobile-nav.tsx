"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Startseite"
    },
    {
      href: "/kategorien",
      label: "Kategorien"
    },
    {
      href: "/suche",
      label: "Rezepte"
    }
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menü öffnen</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-[300px] pr-0">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={`px-2 py-1 text-lg transition-colors hover:text-primary ${
                  pathname === route.href ? "font-medium text-primary" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full justify-start" onClick={() => setOpen(false)}>
                Rezept einreichen
              </Button>
              <Button className="w-full justify-start" onClick={() => setOpen(false)}>
                Anmelden
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}