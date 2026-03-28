import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FUTURA Wallet | Lealtad inteligente para tus clientes",
  description: "Sistema de puntos, cupones y campañas con QR/NFC + WhatsApp. Mini-CRM de recurrencia para PYMEs en Guatemala.",
}

export default function WalletLayout({ children }: { children: React.ReactNode }) {
  return children
}
