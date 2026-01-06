import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

<SocialLinks />

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/images/whatsapp-20image-202025-05-08-20at-2011.png" alt="WORTEC" width={40} height={40} />
              <span className="text-xl font-bold gradient-text">WORTEC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando ideas en soluciones tecnológicas innovadoras. Tu socio de confianza en el mundo digital.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#servicios" className="hover:text-foreground transition-colors">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-foreground transition-colors">
                  Apps Móviles
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-foreground transition-colors">
                  Ciberseguridad
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="hover:text-foreground transition-colors">
                  Consultoría TI
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#contacto" className="hover:text-foreground transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#paquetes" className="hover:text-foreground transition-colors">
                  Paquetes
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:border-orange/50 hover:bg-orange/10 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} WORTEC. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Términos
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
