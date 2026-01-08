import Link from "next/link"
import { Button } from "@/components/ui/button"

function buildWhatsAppUrl() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50672827315"
  const text =
    process.env.NEXT_PUBLIC_WHATSAPP_TEXT ||
    "Hola%20Wortec%2C%20quiero%20una%20consulta%20gratis."
  return `https://wa.me/${number}?text=${text}`
}

export function Navbar() {
  const whatsappUrl = buildWhatsAppUrl()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          <span className="gradient-text">WORTEC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </a>
          <a href="#paquetes" className="text-muted-foreground hover:text-foreground transition-colors">
            Soluciones
          </a>
          <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="bg-transparent border-primary/40 hover:bg-primary/10">
            <a href="#contacto">Cotizar</a>
          </Button>

          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-foreground font-semibold">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}


