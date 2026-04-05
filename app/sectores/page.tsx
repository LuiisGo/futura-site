import type { Metadata } from "next";
import Sectors from "../../components/sections/Sectors";
import CTASection from "../../components/sections/CTASection";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sectores que Digitalizamos",
  description:
    "Agroindustria, retail, combustibles, distribución, servicios técnicos, industrial B2B, educación y restaurantes. Digitalización y automatización por sector en Guatemala.",
  alternates: { canonical: "https://futuratt.com/sectores" },
};

export default function SectoresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "Sectores", url: "https://futuratt.com/sectores" },
            ])
          ),
        }}
      />
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#362263] mb-3">
          Sectores que potenciamos con FUTURA
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          FUTURA es transversal a distintas PYMES e industrias. A modo de
          ejemplo, hemos diseñado soluciones para agroindustria y alimentos,
          retail, combustibles y flotas, servicios técnicos/seguridad e
          industrias B2B, pero podemos adaptarnos a otros sectores con procesos
          repetitivos, mucha documentación en papel y oportunidades claras de
          automatización e IA.
        </p>
      </section>
      <Sectors />
      <CTASection />
    </>
  );
}
