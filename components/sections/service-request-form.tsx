"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, AlertTriangle } from "lucide-react"

const FORM_ENDPOINT = "https://formspree.io/f/xykzqrdb"

type Props = {
  serviceTitle: string
  serviceSlug: string
}

export function ServiceRequestForm({ serviceTitle, serviceSlug }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      // ✅ ESTE ES EL PAYLOAD (lo que se envía a Formspree)
      const payload = new FormData()
      payload.append("name", formData.name)
      payload.append("email", formData.email)
      payload.append("phone", formData.phone)
      payload.append("message", formData.message)

      // ✅ Campos extra para que en el correo venga claro el servicio
      payload.append("service", serviceTitle)
      payload.append("serviceSlug", serviceSlug)
      payload.append("page", typeof window !== "undefined" ? window.location.href : "")
      payload.append("source", "Service Page Wortec")

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      })

      if (!res.ok) throw new Error("Formspree submit failed")

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="solicitud" className="scroll-mt-24">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl">Solicitar {serviceTitle}</CardTitle>
          <CardDescription>
            Déjanos tu información y una breve descripción. Te respondemos en menos de 24 horas.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "success" && (
              <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">¡Listo! Recibimos tu solicitud.</p>
                  <p className="text-sm text-muted-foreground">Te contactaremos lo antes posible.</p>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4">
                <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <p className="font-semibold">No pudimos enviar el mensaje.</p>
                  <p className="text-sm text-muted-foreground">Intenta de nuevo en unos segundos.</p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+506 8888-8888"
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@empresa.com"
                required
                className="bg-background/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Descripción del proyecto</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos qué necesitas, objetivos, tiempos y presupuesto aproximado..."
                required
                className="min-h-[140px] bg-background/50"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-foreground font-semibold"
              size="lg"
            >
              <Send className="w-4 h-4 mr-2" />
              {status === "sending" ? "Enviando..." : "Enviar Solicitud"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Servicio seleccionado: <span className="font-medium">{serviceTitle}</span>
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
