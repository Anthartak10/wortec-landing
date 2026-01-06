"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

type Props = {
  title?: string
  subtitle?: string
 bullets: readonly string[]

}

export function ServiceBrochureSection({
  title = "Qué ofrecemos",
  subtitle = "Una solución clara, profesional y enfocada en resultados.",
  bullets,
}: Props) {
  return (
    <section className="py-10 relative">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold">
          {title} <span className="gradient-text">Wortec</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl">Incluye</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
              <p className="text-muted-foreground">{b}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
