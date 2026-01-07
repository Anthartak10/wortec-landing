import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const neuralDots = [
  { top: "18%", left: "12%", size: 10, blur: 18, opacity: 0.35, dur: "3.7s", delay: "0.2s" },
  { top: "28%", left: "78%", size: 8, blur: 16, opacity: 0.3, dur: "4.4s", delay: "1.1s" },
  { top: "62%", left: "20%", size: 12, blur: 22, opacity: 0.28, dur: "5.2s", delay: "0.6s" },
  { top: "70%", left: "70%", size: 9, blur: 18, opacity: 0.32, dur: "3.9s", delay: "1.8s" },
  { top: "40%", left: "52%", size: 7, blur: 14, opacity: 0.25, dur: "4.9s", delay: "0.9s" },
  { top: "82%", left: "42%", size: 11, blur: 24, opacity: 0.22, dur: "6.1s", delay: "2.2s" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo grid (si lo usas) */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      {/* Orbs (animación nube) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[34rem] h-[34rem] rounded-full blur-[130px]
        bg-cyan-400/45 neural-breathe"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[45%]
        w-[30rem] h-[30rem] rounded-full blur-[140px]
        bg-sky-500/28 neural-breathe-slow"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[35%]
        w-[26rem] h-[26rem] rounded-full blur-[150px]
        bg-fuchsia-500/35 neural-breathe-random"
      />

      {/* Pulsos neuronales */}
      <div className="absolute inset-0 pointer-events-none">
        {neuralDots.map((d, i) => (
          <span
            key={i}
            className="absolute rounded-full neural-pulse"
            style={{
              top: d.top,
              left: d.left,
              width: `${d.size}px`,
              height: `${d.size}px`,
              filter: `blur(${d.blur}px)`,
              opacity: d.opacity,
              background: i % 2 === 0 ? "rgba(34, 211, 238, 0.95)" : "rgba(217, 70, 239, 0.95)",
              animationDuration: d.dur,
              animationDelay: d.delay,
            }}
          />
        ))}
      </div>

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
              Desde desarrollo web hasta ciberseguridad. WORTEC es tu socio tecnológico integral para llevar tu negocio al siguiente nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* CTA principal: al formulario */}
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[oklch(0.72_0.15_195)] via-[oklch(0.70_0.16_240)] to-[oklch(0.65_0.18_285)]
                hover:opacity-90 text-white font-semibold text-lg px-8 shadow-2xl shadow-primary/40 transition-all duration-300
                hover:shadow-primary/60"
              >
                <a href="#contacto" className="flex items-center gap-2">
                  Consulta Gratis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-lg px-8 bg-transparent"
              >
                <a href="#servicios">Ver Servicios</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


