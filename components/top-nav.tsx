"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, Package, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export function TopNav() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="lg:hidden">
          <nav className="grid gap-2 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <Package className="h-6 w-6" />
              <span className="sr-only">RetailIMS</span>
            </Link>
            <Link
              href="/"
              className={cn(
                "mx-[-0.65rem] flex items-center rounded-xl px-3 py-2 hover:underline",
                pathname === "/" && "bg-muted font-bold",
              )}
            >
              Dashboard
            </Link>
            <Link
              href="/inventory"
              className={cn(
                "mx-[-0.65rem] flex items-center rounded-xl px-3 py-2 hover:underline",
                pathname?.startsWith("/inventory") && "bg-muted font-bold",
              )}
            >
              Inventory
            </Link>
            <Link
              href="/products"
              className={cn(
                "mx-[-0.65rem] flex items-center rounded-xl px-3 py-2 hover:underline",
                pathname?.startsWith("/products") && "bg-muted font-bold",
              )}
            >
              Products
            </Link>
            <Link
              href="/orders"
              className={cn(
                "mx-[-0.65rem] flex items-center rounded-xl px-3 py-2 hover:underline",
                pathname?.startsWith("/orders") && "bg-muted font-bold",
              )}
            >
              Orders
            </Link>
            <Link
              href="/analytics"
              className={cn(
                "mx-[-0.65rem] flex items-center rounded-xl px-3 py-2 hover:underline",
                pathname?.startsWith("/analytics") && "bg-muted font-bold",
              )}
            >
              Analytics
            </Link>
            <Link
              href="/forecasting"
              className={cn(
                "mx-[-0.65rem] flex items-center rounded-xl px-3 py-2 hover:underline",
                pathname?.startsWith("/forecasting") && "bg-muted font-bold",
              )}
            >
              Forecasting
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-2 md:ml-auto md:gap-4 lg:gap-2 xl:gap-4">
        <ModeToggle />
      </div>
    </header>
  )
}

