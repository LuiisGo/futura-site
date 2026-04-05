import type { Metadata } from "next";
import CasosContent from "./CasosContent";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Casos de Éxito — Empresas Digitalizadas con FUTURA",
  description:
    "Casos reales de PYMEs en Guatemala que digitalizaron su operación con FUTURA: Lechería San Antonio, FUELDEPOT GT y más. Resultados concretos y medibles.",
  alternates: { canonical: "https://futuratt.com/casos" },
};

export default function CasosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "Casos de Éxito", url: "https://futuratt.com/casos" },
            ])
          ),
        }}
      />
      <CasosContent />
    </>
  );
}
