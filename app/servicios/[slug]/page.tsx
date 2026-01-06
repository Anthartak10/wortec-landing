import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import { ServiceBrochureSection } from "@/components/sections/service-brochure-section"
import { ServiceRequestForm } from "@/components/sections/service-request-form"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ServiceBrochurePage({ params }: Props) {
  const { slug } = await params

  const service = services.find((s) => s.slug === slug)
  if (!service) {
    notFound()
  }

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#"

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 space-y-12">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>{" "}
            / Servicios
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {service.title} <span className="gradient-text">Wortec</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl">{service.description}</p>

          <div className="flex gap-3 flex-wrap">
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/#servicios">Volver</Link>
            </Button>

            <Button asChild variant="outline" className="bg-transparent">
              <a href="#solicitud">Ir al formulario</a>
            </Button>

            <Button asChild>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <ServiceBrochureSection title="Qué incluye este servicio" bullets={service.brochure.bullets} />

        <ServiceRequestForm serviceTitle={service.title} serviceSlug={service.slug} />
      </div>
    </main>
  )
}


