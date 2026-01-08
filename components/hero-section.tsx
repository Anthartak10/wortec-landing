import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

function buildWhatsAppUrl() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50672827315"
  const text =
    process.env.NEXT_PUBLIC_WHATSAPP_TEXT ||
    "Hola%20Wortec%2C%20quiero%20una%20consulta%20gratis."
  return `https://wa.me/${number}?text=${text}`
}

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 tech-grid opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium gradient-text">Tecnología del Futuro, Hoy</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Transformamos <span className="gradient-text">Ideas</span> en{" "}
              <span className="gradient-text">Soluciones</span> Digitales
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Desde desarrollo web hasta ciberseguridad. WORTEC es tu socio tecnológico integral para llevar tu negocio
              al siguiente nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[oklch(0.72_0.15_195)] via-[oklch(0.70_0.16_240)] to-[oklch(0.65_0.18_285)] hover:opacity-90 text-white font-semibold text-lg px-8 shadow-2xl shadow-primary/40 transition-all duration-300 hover:shadow-primary/60"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Escribir por WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-lg px-8 bg-transparent"
              >
                <a href="#contacto">Enviar Formulario</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


