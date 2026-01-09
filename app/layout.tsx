import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "Wortec Solutions",
  description: "Soluciones tecnológicas integrales para impulsar tu negocio.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

