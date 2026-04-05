import type { Metadata } from "next";
import WalletContent from "./WalletContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "FUTURA Wallet — Lealtad y Club de Clientes",
  description:
    "Programa de lealtad basado en QR/NFC + WhatsApp para PYMEs. Puntos, cupones, gift cards y segmentación automática conectados a tu operación.",
  alternates: { canonical: "https://futuratt.com/wallet" },
};

export default function WalletPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "FUTURA Wallet", url: "https://futuratt.com/wallet" },
            ])
          ),
        }}
      />
      <WalletContent />
    </>
  );
}
