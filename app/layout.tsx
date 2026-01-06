import type React from "react"
import type { Metadata } from "next"
import { Geist, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "WORTEC - Soluciones Tecnológicas del Futuro",
  description:
    "Desarrollo Web, Apps, Ciberseguridad, Servidores, CCTV y Consultoría TI. Transformamos tus ideas en realidad digital.",
  keywords: ["desarrollo web", "apps móviles", "ciberseguridad", "servidores", "CCTV", "consultoría TI", "WORTEC"],
  authors: [{ name: "WORTEC" }],
  creator: "WORTEC",
  publisher: "WORTEC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "WORTEC - Soluciones Tecnológicas del Futuro",
    description: "Transformamos ideas en soluciones tecnológicas innovadoras",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${geist.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
