import Sectors from "../../components/sections/Sectors";
import CTASection from "../../components/sections/CTASection";

export default function SectoresPage() {
  return (
    <>
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
