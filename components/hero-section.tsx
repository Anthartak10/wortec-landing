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
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
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

      {/* ✅ WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-6 right-6 z-[60] group"
      >
        <div className="relative">
          {/* glow */}
          <div className="absolute inset-0 rounded-full blur-xl bg-emerald-400/30 opacity-70 group-hover:opacity-100 transition-opacity" />
          <div className="h-14 w-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30 border border-white/10 group-hover:scale-105 transition-transform">
            {/* WhatsApp icon */}
            <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.43-8.43ZM12.06 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.22-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.86 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </div>

          <div className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl bg-card/70 border border-border/60 backdrop-blur text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp
          </div>
        </div>
      </a>
    </section>
  )
}


