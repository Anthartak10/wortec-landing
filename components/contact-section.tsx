"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertTriangle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        page: typeof window !== "undefined" ? window.location.href : "",
        source: "Landing Wortec",
      }

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => null)

      if (!res.ok) {
        const msg = data?.error || (Array.isArray(data?.errors) && data.errors[0]?.message) || "No se pudo enviar."
        throw new Error(msg)
      }

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (err: any) {
      setStatus("error")
      setErrorMsg(err?.message || "No se pudo enviar el formulario.")
    }
  }

  return (
    <section id="contacto" className="py-24 relative">
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            ¡Conversemos <span className="gradient-text">Hoy!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Completa el formulario y te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Solicitar Cotización</CardTitle>
              <CardDescription>Cuéntanos tu necesidad y te contactamos.</CardDescription>
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
                      <p className="text-sm text-muted-foreground">{errorMsg}</p>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input
                    id="name"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@empresa.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+506 8888-8888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Servicio de Interés</Label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-md bg-background/50 border border-border px-4 py-3"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Desarrollo Web">Desarrollo Web</option>
                    <option value="Desarrollo de Apps">Desarrollo de Apps</option>
                    <option value="Redes & Servidores">Redes & Servidores</option>
                    <option value="Ciberseguridad">Ciberseguridad</option>
                    <option value="CCTV & Monitoreo">CCTV & Monitoreo</option>
                    <option value="Venta & Mantenimiento">Venta & Mantenimiento</option>
                    <option value="Soporte TI">Soporte TI</option>
                    <option value="Consultoría">Consultoría</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Describe tu proyecto</Label>
                  <Textarea
                    id="message"
                    placeholder="Objetivo, tiempos, presupuesto aproximado y detalles clave..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">Pronto</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@wortecsolutionscr.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Costa Rica</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

