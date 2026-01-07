import { NextResponse } from "next/server"

const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/xykzqrdb"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // (Opcional) Validación mínima
    if (!data?.email || !data?.message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos requeridos (email, message)." },
        { status: 400 }
      )
    }

    // Reenviar a Formspree desde el server (evita bloqueos por dominio/origin y evita hashid raro)
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const body = await res.json().catch(() => ({}))
    return NextResponse.json(body, { status: res.status })
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Error inesperado en /api/lead" },
      { status: 500 }
    )
  }
}
