import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Sparkles } from "lucide-react"

function buildWhatsAppUrl() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50672827315"
  const text =
    process.env.NEXT_PUBLIC_WHATSAPP_TEXT ||
    "Hola%20Wortec%2C%20quiero%20cotizar%20un%20servicio."
  return `https://wa.me/${number}?text=${text}`
}

const packages = [
  {
    name: "Web Presencia",
    icon: Zap,
    description: "Landing moderna enfocada en convertir visitas en clientes",
    features: ["Diseño moderno + responsive", "SEO base", "Alta velocidad", "Formulario + WhatsApp"],
    popular: false,
    gradient: "from-accent/20 to-primary/5",
  },
  {
    name: "Web Negocio",
    icon: Star,
    description: "Ideal para Pymes que necesitan crecer y automatizar",
    features: ["Todo del plan anterior", "Secciones avanzadas", "Integraciones", "Asesoría inicial"],
    popular: true,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    name: "Solución a Medida",
    icon: Sparkles,
    description: "Plataforma o sistema completo escalable",
    features: ["Arquitectura + Roadmap", "Módulos a medida", "Panel admin", "Escalabilidad en nube"],
    popular: false,
    gradient: "from-orange/20 to-orange/5",
  },
]

export function PackagesSection() {
  const whatsappUrl = buildWhatsAppUrl()

  return (
    <section id="paquetes" className="py-24 relative">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Soluciones <span className="gradient-text">Wortec</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Paquetes informativos (cotización según alcance del proyecto).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-105 ${
                pkg.popular ? "animated-gradient-border scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-foreground">
                  RECOMENDADO
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
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Cotizar por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">¿Prefieres cotizar por formulario?</p>
          <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
            <a href="#contacto">Ir al formulario</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

