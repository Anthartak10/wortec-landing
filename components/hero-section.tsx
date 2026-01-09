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
  { top: "36%", left: "34%", size: 6, blur: 12, opacity: 0.18, dur: 4.1, delay: 0.4 },
  { top: "64%", left: "86%", size: 7, blur: 16, opacity: 0.18, dur: 5.8, delay: 1.9 },
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
    "https://wa.me/50672827315?text=Hola%20Wortec%2C%20quiero%20una%20consulta%20gratis."

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo tech grid (suave) */}
      <div className="absolute inset-0 tech-grid opacity-35" />

      {/* Halo oscuro (sube contraste, sin blancos) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />

      {/* =========================================================
          PRESENCE CORE (CENTRADO correcto + animación visible)
         ========================================================= */}

      {/* Wrapper centrado: el translate va aquí (NO en motion) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {/* Core celeste (más fuerte, más central) */}
        <motion.div
          className="w-[34rem] h-[34rem] rounded-full blur-[120px] opacity-95
          bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.95),rgba(56,189,248,0.55),transparent_70%)]"
          animate={{
            x: [-18, 22, -12, 0],
            y: [-14, 18, -10, 0],
            scale: [1, 1.22, 1.1, 1],
            opacity: [0.7, 0.95, 0.82, 0.7],
          }}
          transition={{ duration: 9.5, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Core fucsia (encima, más latente) */}
        <motion.div
          className="absolute inset-0 w-[30rem] h-[30rem] m-auto rounded-full blur-[115px] opacity-90
          bg-[radial-gradient(circle_at_65%_35%,rgba(217,70,239,0.9),rgba(168,85,247,0.5),transparent_70%)]"
          animate={{
            x: [16, -18, 10, 0],
            y: [12, -14, 8, 0],
            scale: [1, 1.24, 1.1, 1],
            opacity: [0.65, 0.92, 0.8, 0.65],
          }}
          transition={{ duration: 10.8, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Mist compacta celeste */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[34rem] h-[11rem] rounded-full blur-[110px] opacity-70
          bg-gradient-to-r from-cyan-300/55 via-sky-400/30 to-transparent"
          animate={{ x: [-26, 26, 0], opacity: [0.45, 0.78, 0.45] }}
          transition={{ duration: 11.5, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Mist compacta fucsia */}
        <motion.div
          className="absolute left-1/2 top-[58%] -translate-x-1/2
          w-[32rem] h-[10rem] rounded-full blur-[110px] opacity-65
          bg-gradient-to-r from-fuchsia-400/55 via-purple-400/30 to-transparent"
          animate={{ x: [24, -24, 0], opacity: [0.4, 0.72, 0.4] }}
          transition={{ duration: 12.5, ease: "easeInOut", repeat: Infinity }}
        />

        {/* ✅ PULSO REAL (anillos + glow), sin blanco */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[22rem] h-[22rem] rounded-full border border-cyan-300/35 opacity-30"
          animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.42, 0.12] }}
          transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[20rem] h-[20rem] rounded-full border border-fuchsia-300/30 opacity-25"
          animate={{ scale: [1, 1.22, 1], opacity: [0.1, 0.38, 0.1] }}
          transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity, delay: 0.35 }}
        />
        {/* Glow suave del pulso */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[26rem] h-[26rem] rounded-full blur-[28px]
          bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_60%)]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 3.6, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      {/* =========================================================
          WAVES (sin “hormigas”: quitamos dash)
         ========================================================= */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <motion.svg
          className="absolute inset-0"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.g
            animate={{ x: [0, -18, 0] }}
            transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
          >
            <path
              d="M0,420 C180,360 320,520 520,450 C720,380 820,520 1020,440 C1120,400 1160,380 1200,360"
              fill="none"
              stroke="rgba(34, 211, 238, 0.28)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>

          <motion.g
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
          >
            <path
              d="M0,470 C180,410 320,560 520,500 C720,420 820,560 1020,490 C1120,450 1160,430 1200,410"
              fill="none"
              stroke="rgba(217, 70, 239, 0.22)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.g>
        </motion.svg>
      </div>

      {/* =========================================================
          TEXTURA (sin lavar a blanco)
         ========================================================= */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"110\" height=\"110\">\
<filter id=\"n\">\
<feTurbulence type=\"fractalNoise\" baseFrequency=\"0.95\" numOctaves=\"6\"/>\
</filter>\
<rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/>\
</svg>')",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,\
<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\">\
<filter id=\"n\">\
<feTurbulence type=\"fractalNoise\" baseFrequency=\"1.35\" numOctaves=\"2\"/>\
</filter>\
<rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/>\
</svg>')",
        }}
      />

      {/* =========================================================
          PARTICULAS + PULSOS (cyan/fucsia)
         ========================================================= */}
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
            animate={{
              y: [0, -18, 0],
              x: [0, 10, 0],
              opacity: [p.opacity, p.opacity + 0.12, p.opacity],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}
      </div>

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
              opacity: d.opacity,
              background: i % 2 === 0 ? "rgba(34, 211, 238, 0.95)" : "rgba(217, 70, 239, 0.95)",
            }}
            animate={{
              scale: [0.7, 2.1, 1.1, 0.7],
              opacity: [0.05, 0.62, 0.22, 0.05],
            }}
            transition={{
              duration: d.dur,
              delay: d.delay,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          CONTENT
         ========================================================= */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium gradient-text">Tecnología a tu alcance</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Transformamos <span className="gradient-text">Ideas</span> en{" "}
              <span className="gradient-text">Soluciones</span> Digitales
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
               WORTEC es tu socio tecnológico integral para llevar tu negocio al
              siguiente nivel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* ( solo gradients/pulso) */}
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[oklch(0.72_0.15_195)] via-[oklch(0.70_0.16_240)] to-[oklch(0.65_0.18_285)]
                hover:opacity-90 text-white font-semibold text-lg px-8 shadow-2xl shadow-primary/40 transition-all duration-300
                hover:shadow-primary/60"
              >
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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

<p className="text-xs italic text-muted-foreground/80">
  La unica forma de predecir el futuro, es CREA...
</p>


          </div>
        </div>
      </div>
    </section>
  )
}




