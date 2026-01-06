"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Sparkles } from "lucide-react"

type Package = {
  name: string
  icon: any
  price: string
  description: string
  features: string[]
  popular: boolean
  gradient: string
  serviceSlugs: string[] // <-- NUEVO: para filtrar por servicio
}

const packages: Package[] = [
  {
    name: "Starter",
    icon: Zap,
    price: "$",
    description: "Perfecto para pequeños negocios que inician",
    serviceSlugs: ["desarrollo-web"],
    features: [
      "Sitio Web Responsivo (5 páginas)",
      "Formulario de Contacto",
      "Integración Redes Sociales",
      "Optimización SEO Básica",
      "Soporte Técnico 24/7",
    ],
    popular: false,
    gradient: "from-accent/20 to-primary/5",
  },
  {
    name: "Professional",
    icon: Star,
    price: "$",
    description: "La solución completa para empresas en crecimiento",
    serviceSlugs: ["desarrollo-web", "consultoria"],
    features: ["Todo del Plan Starter", "App Web Personalizada", "Sistema de Gestión de Contenido", "3 Horas de Consultoría"],
    popular: true,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    name: "Enterprise",
    icon: Sparkles,
    price: "$",
    description: "Solución empresarial completa y escalable",
    serviceSlugs: ["desarrollo-web", "desarrollo-apps", "redes-servidores", "ciberseguridad", "soporte-ti", "consultoria"],
    features: [
      "Todo del Plan Professional",
      "Software Empresarial a Medida",
      "App Móvil (iOS & Android)",
      "Backup Automático en la Nube",
      "Soporte TI Prioritario 24/7",
      "10 Horas de Consultoría",
      "Mantenimiento Preventivo",
    ],
    popular: false,
    gradient: "from-orange/20 to-orange/5",
  },
]

type PackagesSectionProps = {
  /** Si lo pasas, la sección muestra solo los paquetes que incluyen este servicio */
  serviceSlug?: string
  /** Opcional: cambia el título si estás en una página brochure */
  title?: string
  /** Opcional: cambia el subtítulo si estás en una página brochure */
  subtitle?: string
  /** Opcional: cambia el id del section */
  sectionId?: string
}

export function PackagesSection({
  serviceSlug,
  title = "Paquetes Premium",
  subtitle = "Elige el plan perfecto para las necesidades de tu negocio",
  sectionId = "paquetes",
}: PackagesSectionProps) {
  const whatsapp =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/50600000000?text=Hola%20Wortec%2C%20quiero%20cotizar%20un%20servicio."

  const filteredPackages = serviceSlug ? packages.filter((p) => p.serviceSlugs.includes(serviceSlug)) : packages

  // Si filtras por un servicio y no hay paquetes mapeados, muestra todos (fallback)
  const finalPackages = filteredPackages.length > 0 ? filteredPackages : packages

  return (
    <section id={sectionId} className="py-24 relative">
      <div className="absolute inset-0 tech-grid opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            {title.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="gradient-text">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {finalPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-105 ${
                pkg.popular ? "animated-gradient-border scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-foreground">
                  MÁS POPULAR
                </div>
              )}

              <CardHeader className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center`}>
                  <pkg.icon className="w-7 h-7 text-foreground" />
                </div>

                <div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold gradient-text">{pkg.price}</span>
                  <span className="text-muted-foreground">/proyecto</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[oklch(0.72_0.15_195)] via-[oklch(0.70_0.16_240)] to-[oklch(0.65_0.18_285)] hover:opacity-90 text-white shadow-lg shadow-primary/30 transition-all duration-300"
                      : "bg-card hover:bg-card/80 border border-primary/30"
                  }`}
                  size="lg"
                >
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    Solicitar Cotización
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Necesitas algo más personalizado?</p>
          <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              Contáctanos para un plan a medida
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
