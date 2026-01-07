import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/30 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Wortec Solutions" width={34} height={34} className="rounded" />
          <span className="font-semibold tracking-wide">WORTEC SOLUTIONS</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#servicios" className="hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="/#paquetes" className="hover:text-foreground transition-colors">
            Paquetes
          </a>
          <a href="/#contacto" className="hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <a href="/#contacto">Cotizar</a>
          </Button>
        </div>
      </div>
    </header>
  )
}

