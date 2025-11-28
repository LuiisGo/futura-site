import Services from "../../components/sections/Services";
import CTASection from "../../components/sections/CTASection";

export default function ServiciosPage() {
  return (
    <div className="pb-16">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#362263] mb-4">
          Servicios FUTURA
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Construimos sistemas ERP-lite, bots de WhatsApp, integraciones y
          dashboards para que tu PYME opere como una gran empresa sin comprar
          un ERP gigante.
        </p>
      </section>
      <Services />
      <CTASection />
    </div>
  );
}
