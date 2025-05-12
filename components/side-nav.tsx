"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Box, Home, LineChart, Package, Settings, ShoppingCart, Truck, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SideNav() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-background lg:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package className="h-6 w-6" />
            <span>RetailIMS</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link href="/">
              <Button variant={pathname === "/" ? "secondary" : "ghost"} className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/inventory">
              <Button
                variant={pathname?.startsWith("/inventory") ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <Box className="h-4 w-4" />
                Inventory
              </Button>
            </Link>
        
            <Link href="/forecasting">
              <Button
                variant={pathname?.startsWith("/forecasting") ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <LineChart className="h-4 w-4" />
                Forecasting
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

