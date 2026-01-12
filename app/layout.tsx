import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wortecsolutionscr.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
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

