"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/95 shadow-lg backdrop-blur-lg"
          : "bg-primary"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-primary-foreground"
        >
          Vinit Agrharkar
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground hover:bg-primary-foreground/10"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="ml-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Download className="size-4" />
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="inline-flex size-10 items-center justify-center rounded-lg text-primary-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-b border-primary-foreground/10 bg-primary/95 px-6 pb-4 backdrop-blur-lg md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="mt-2 w-fit bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="size-4" />
                Resume
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
