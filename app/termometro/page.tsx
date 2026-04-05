import type { Metadata } from "next";
import TermometroContent from "./TermometroContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Termómetro Operativo — Diagnóstico Digital Gratis",
  description:
    "Descubrí en 3 minutos cuánto está perdiendo tu empresa por no digitalizar. 5 preguntas rápidas, resultado inmediato con recomendaciones concretas.",
  alternates: { canonical: "https://futuratt.com/termometro" },
};

export default function TermometroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "Termómetro Operativo", url: "https://futuratt.com/termometro" },
            ])
          ),
        }}
      />
      <TermometroContent />
    </>
  );
}
