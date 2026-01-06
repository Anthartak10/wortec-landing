"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const neuralDots = [
  { top: "20%", left: "18%", size: 7, blur: 14, opacity: 0.22, dur: 3.8, delay: 0.2 },
  { top: "26%", left: "78%", size: 6, blur: 12, opacity: 0.2, dur: 4.6, delay: 0.9 },
  { top: "58%", left: "22%", size: 8, blur: 16, opacity: 0.18, dur: 5.4, delay: 0.6 },
  { top: "72%", left: "72%", size: 7, blur: 14, opacity: 0.2, dur: 4.2, delay: 1.5 },
  { top: "44%", left: "55%", size: 5, blur: 10, opacity: 0.16, dur: 4.9, delay: 1.1 },
  { top: "82%", left: "46%", size: 8, blur: 18, opacity: 0.16, dur: 6.2, delay: 2.0 },
]

const particles = Array.from({ length: 22 }).map((_, i) => ({
  id: i,
  top: `${10 + (i * 3.4) % 80}%`,
  left: `${8 + (i * 7.1) % 85}%`,
  size: 2 + (i % 3),
  blur: 6 + (i % 4) * 3,
  color: i % 2 === 0 ? "rgba(34, 211, 238, 0.85)" : "rgba(217, 70, 239, 0.85)",
  dur: 8 + (i % 6),
  delay: (i % 7) * 0.35,
  opacity: 0.1 + (i % 4) * 0.03,
}))

export function HeroSection() {
  const whatsapp =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/50600000000?text=Hola%20Wortec%2C%20quiero%20una%20consulta%20gratis."

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo base */}
      <div className="absolute inset-0 tech-grid opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" />

      {/* CORE CELESTE */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem]
        -translate-x-1/2 -translate-y-1/2
        rounded-full blur-[120px]
        bg-gradient-to-br from-cyan-400/95 via-sky-500/60 to-transparent"
        animate={{
          x: [-22, 24, -14, 0],
          y: [-18, 20, -10, 0],
          scale: [1, 1.18, 1.08, 1],
          opacity: [0.78, 0.95, 0.85, 0.78],
        }}
        transition={{ duration: 9.5, ease: "easeInOut", repeat: Infinity }}
      />

      {/* CORE FUSCIA */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[26rem] h-[26rem]
        -translate-x-1/2 -translate-y-1/2
        rounded-full blur-[115px]
        bg-gradient-to-br from-fuchsia-500/90 via-purple-500/55 to-transparent"
        animate={{
          x: [18, -20, 12, 0],
          y: [14, -16, 8, 0],
          scale: [1, 1.22, 1.1, 1],
          opacity: [0.7, 0.92, 0.82, 0.7],
        }}
        transition={{ duration: 10.8, ease: "easeInOut", repeat: Infinity }}
      />

      {/* AROS LATENTES */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[22rem] h-[22rem]
        -translate-x-1/2 -translate-y-1/2
        rounded-full border border-cyan-300/40"
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.45, 0.18] }}
        transition={{ duration: 3.6, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[20rem] h-[20rem]
        -translate-x-1/2 -translate-y-1/2
        rounded-full border border-fuchsia-300/35"
        animate={{ scale: [1, 1.12, 1], opacity: [0.14, 0.4, 0.14] }}
        transition={{ duration: 4.2, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
      />

      {/* MIST */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[28rem] h-[10rem]
        -translate-x-1/2 -translate-y-1/2
        rounded-full blur-[105px]
        bg-gradient-to-r from-cyan-300/55 via-sky-400/30 to-transparent"
        animate={{ x: [-32, 32, 0], opacity: [0.45, 0.78, 0.45] }}
        transition={{ duration: 11.5, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="absolute top-[54%] left-1/2 w-[26rem] h-[9rem]
        -translate-x-1/2
        rounded-full blur-[105px]
        bg-gradient-to-r from-fuchsia-400/55 via-purple-400/30 to-transparent"
        animate={{ x: [30, -30, 0], opacity: [0.4, 0.72, 0.4] }}
        transition={{ duration: 12.5, ease: "easeInOut", repeat: Infinity }}
      />

      {/* TEXTURA */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"110\" height=\"110\">\
<filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.95\" numOctaves=\"6\"/></filter>\
<rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\">\
<filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"1.35\" numOctaves=\"2\"/></filter>\
<rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')",
        }}
      />

      {/* PARTÍCULAS */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              filter: `blur(${p.blur}px)`,
              opacity: p.opacity,
            }}
            animate={{ y: [0, -18, 0], opacity: [p.opacity, p.opacity + 0.12, p.opacity] }}
            transition={{ duration: p.dur, delay: p.delay, ease: "easeInOut", repeat: Infinity }}
          />
        ))}
      </div>

      {/* PULSOS */}
      <div className="absolute inset-0 pointer-events-none">
        {neuralDots.map((d, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              top: d.top,
              left: d.left,
              width: `${d.size}px`,
              height: `${d.size}px`,
              filter: `blur(${d.blur}px)`,
              background: i % 2 === 0 ? "rgba(34,211,238,.95)" : "rgba(217,70,239,.95)",
            }}
            animate={{ scale: [0.7, 2.1, 1.1, 0.7], opacity: [0.05, 0.62, 0.22, 0.05] }}
            transition={{ duration: d.dur, delay: d.delay, ease: "easeInOut", repeat: Infinity }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium gradient-text">Tecnología del Futuro, Hoy</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Transformamos <span className="gradient-text">Ideas</span> en{" "}
            <span className="gradient-text">Soluciones</span> Digitales
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Desde desarrollo web hasta ciberseguridad. WORTEC es tu socio tecnológico integral.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-[oklch(0.72_0.15_195)] via-[oklch(0.70_0.16_240)] to-[oklch(0.65_0.18_285)]">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Consulta Gratis <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


