import Link from "next/link"
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

type SocialLinksProps = {
  className?: string
  iconClassName?: string
}

const socials = [
  { name: "Instagram", href: "https://instagram.com/tuusuario", icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/tuusuario", icon: Facebook },
  { name: "LinkedIn", href: "https://linkedin.com/company/tuempresa", icon: Linkedin },
  { name: "X", href: "https://x.com/tuusuario", icon: Twitter },
]

export function SocialLinks({ className = "", iconClassName = "w-5 h-5" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => (
        <Link
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-card/40 hover:bg-card/70 transition"
        >
          <s.icon className={iconClassName} />
        </Link>
      ))}
    </div>
  )
}
