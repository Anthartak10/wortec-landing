"use client"

import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  serviceTitle: string
  serviceSlug: string
}

export function ServiceRequestForm({ serviceTitle, serviceSlug }: Props) {
  // Cambia esto cuando crees tu Formspree (o API propia)
  const formAction = "https://formspree.io/f/TU_ID"

  const defaultSubject = useMemo(() => `Solicitud - ${serviceTitle} (${serviceSlug})`, [serviceTitle, serviceSlug])

  return (
    <section id="solicitud" className="py-16">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">
          Solicitar <span className="gradient-text">Cotización</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Cuéntanos tu necesidad y te respondemos con una propuesta clara.
        </p>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">Formulario para: {serviceTitle}</CardTitle>
        </CardHeader>

        <CardContent>
          <form action={formAction} method="POST" className="space-y-4">
            {/* Metadatos ocultos */}
            <input type="hidden" name="service" value={serviceTitle} />
            <input type="hidden" name="serviceSlug" value={serviceSlug} />
            <input type="hidden" name="_subject" value={defaultSubject} />

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="name" placeholder="Nombre" required />
              <Input type="email" name="email" placeholder="Correo" required />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input name="phone" placeholder="Teléfono / WhatsApp" />
              <Input name="company" placeholder="Empresa / Institución (opcional)" />
            </div>

            <Textarea
              name="project"
              placeholder="Describe tu proyecto: qué necesitas, para cuándo, y si tienes un presupuesto aproximado."
              rows={7}
              required
            />

            <Button type="submit" size="lg" className="w-full">
              Enviar solicitud
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
