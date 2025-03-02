import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { SideNav } from "@/components/side-nav"
import { TopNav } from "@/components/top-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Retail Inventory Management System",
  description: "A comprehensive inventory management system for retail stores",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <SideNav />
            <div className="flex flex-col flex-1">
              <TopNav />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'