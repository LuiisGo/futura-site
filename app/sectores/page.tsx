import Sectors from "../../components/sections/Sectors";
import CTASection from "../../components/sections/CTASection";

export default function SectoresPage() {
  return (
    <div className="pb-16">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#362263] mb-4">
          Sectores en los que trabajamos
        </h1>
        <p className="text-slate-600 max-w-2xl">
          FUTURA es transversal a distintas PYMES, pero hoy nos enfocamos en
          agroalimentos y lácteos, retail, combustibles y flotas, servicios
          técnicos/seguridad e industrias B2B.
        </p>
      </section>
      <Sectors />
      <CTASection />
    </div>
  );
}
