"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

const FORM_ENDPOINT = "https://formspree.io/f/xykzqrdb"

const SERVICE_OPTIONS = [
  { value: "", label: "Selecciona un servicio" },
  { value: "desarrollo-web", label: "Desarrollo Web" },
  { value: "desarrollo-apps", label: "Desarrollo de Apps" },
  { value: "redes-servidores", label: "Redes & Servidores" },
  { value: "ciberseguridad", label: "Ciberseguridad" },
  { value: "cctv", label: "CCTV & Monitoreo" },
  { value: "venta-mantenimiento", label: "Venta & Mantenimiento" },
  { value: "soporte-ti", label: "Soporte TI" },
  { value: "consultoria", label: "Consultoría" },
] as const

function buildWhatsAppUrl() {
  const direct = process.env.NEXT_PUBLIC_WHATSAPP_URL
  if (direct && direct.includes("wa.me/")) return direct

  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50672827315"
  const text =
    process.env.NEXT_PUBLIC_WHATSAPP_TEXT ||
    "Hola%20Wortec%2C%20quiero%20una%20consulta%20gratis."
  return `https://wa.me/${number}?text=${text}`
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(), [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const fd = new FormData()
      fd.append("service", formData.service)
      fd.append("name", formData.name)
      fd.append("email", formData.email)
      fd.append("phone", formData.phone)
      fd.append("message", formData.message)
      fd.append("page", "contact-section")
      fd.append("site", typeof window !== "undefined" ? window.location.host : "")

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      })

      if (!res.ok) throw new Error("Formspree error")

      setStatus("success")
      setFormData({ service: "", name: "", email: "", phone: "", message: "" })
    } catch {
      setStatus("error")
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
            Estamos listos para transformar tus ideas en realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un Mensaje</CardTitle>
              <CardDescription>Completa el formulario y nos pondremos en contacto contigo</CardDescription>
            </CardHeader>

            <CardContent>
              {status === "success" ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 md:p-8 text-center space-y-3">
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">¡Listo! Recibimos tu solicitud</h3>
                  <p className="text-muted-foreground">
                    Te contactaremos pronto. Si quieres acelerar la respuesta, escríbenos por WhatsApp.
                  </p>
                  <div className="pt-2">
                    <Button
                      asChild
                      size="lg"
                      className="bg-blue-950 hover:bg-blue-900 text-blue-50 border border-blue-900/60 font-semibold"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio</Label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="w-full h-11 rounded-md border border-border bg-background/50 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

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
                      placeholder="506 8888-7777"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[120px] bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-blue-950 hover:bg-blue-900 text-blue-50 border border-blue-900/60 font-semibold"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                  </Button>

                  {status === "error" && (
                    <p className="text-sm text-red-400 text-center">
                      ❌ No pudimos enviar el formulario. Intenta de nuevo o escríbenos por WhatsApp.
                    </p>
                  )}
                </form>
              )}
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
                  <p className="text-muted-foreground">7282-7315</p>
                  <p className="text-sm text-muted-foreground mt-1">Lun - Vie: 9:00 AM - 9:00 PM</p>
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
                  <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
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
                  <p className="text-muted-foreground">San José , Costa Rica</p>
                  <p className="text-sm text-muted-foreground mt-1">También atendemos remoto</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animated-gradient-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">¿Prefieres WhatsApp?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Chatea con nosotros directamente</p>
                </div>
                <Button
                  asChild
                  className="w-full bg-blue-950 hover:bg-blue-900 text-blue-50 border border-blue-900/60 font-semibold"
                  size="lg"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Abrir WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


