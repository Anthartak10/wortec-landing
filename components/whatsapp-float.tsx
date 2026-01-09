"use client"

function buildWhatsAppUrl() {
  const direct = process.env.NEXT_PUBLIC_WHATSAPP_URL
  if (direct && direct.includes("wa.me/")) return direct

  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50672827315"
  const text =
    process.env.NEXT_PUBLIC_WHATSAPP_TEXT ||
    "Hola%20Wortec%2C%20quiero%20una%20consulta%20gratis."
  return `https://wa.me/${number}?text=${text}`
}

export function WhatsAppFloat() {
  const url = buildWhatsAppUrl()

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-[80] group"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-400/25 opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="h-14 w-14 rounded-full bg-blue-950 hover:bg-blue-900 flex items-center justify-center shadow-2xl shadow-blue-950/35 border border-blue-900/60 group-hover:scale-105 transition-transform">
          <svg className="h-7 w-7 text-blue-50" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.72 1.46h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.43-8.43ZM12.06 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.22-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.86 9.89Z" />
          </svg>
        </div>
      </div>
    </a>
  )
}
