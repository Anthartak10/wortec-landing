"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Instagram, Facebook } from "lucide-react"

const navItems = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#contacto", label: "Contacto" },
] as const

// ✅ Cambia estos links por los tuyos reales
const SOCIAL = {
  instagram: "https://www.instagram.com/wortec_solutions?igsh=cXF1azdqZ2E4OTNw",
  facebook: "https://www.facebook.com/share/1GpjzEmGVA/",
} as const

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-background/50 backdrop-blur-xl border-b border-border/50" />
      <div className="relative container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand (Logo + Text) */}
        <Link href="/" className="font-bold text-lg tracking-tight flex items-center gap-3">
          <Image
            src="/wortec-logo.png"
            alt="Wortec Logo"
            width={28}
            height={28}
            className="rounded-sm"
            priority
          />
          <span>
            WORTEC <span className="gradient-text">Solutions</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}

          {/* Social */}
          <div className="flex items-center gap-2 ml-2">
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            className="bg-transparent border-border/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden relative border-b border-border/50 bg-background/80 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="justify-start text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}

            {/* Social (mobile) */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}



