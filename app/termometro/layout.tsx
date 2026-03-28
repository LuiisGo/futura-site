import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termómetro Operativo | FUTURA — Diagnóstico gratuito para PYMEs",
  description: "Respondé 5 preguntas en 3 minutos y obtené un diagnóstico instantáneo del nivel de digitalización de tu empresa. Gratuito y sin registro.",
}

export default function TermometroLayout({ children }: { children: React.ReactNode }) {
  return children
}
