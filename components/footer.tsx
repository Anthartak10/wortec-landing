import Link from "next/link"
import Image from "next/image"
import { Great_Vibes } from "next/font/google"
import { Instagram, Facebook } from "lucide-react"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

// ✅ Cambia estos links por los tuyos reales
const SOCIAL = {
  instagram: "https://www.instagram.com/wortec_solutions?igsh=cXF1azdqZ2E4OTNw",
  facebook: "https://www.facebook.com/share/1GpjzEmGVA/",
} as const

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background/30 backdrop-blur">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="font-bold text-lg flex items-center gap-3">
              <Image
                src="/wortec-logo.png"
                alt="Wortec Logo"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span>
                WORTEC <span className="gradient-text">Solutions</span>
              </span>
            </div>

           
          
            {/* Social */}
            <div className="flex items-center gap-2">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Wortec Solutions. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

