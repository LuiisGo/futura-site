import Services from "../../components/sections/Services";
import CTASection from "../../components/sections/CTASection";

export default function ServiciosPage() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-6 pb-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#362263] mb-3">
          Servicios de FUTURA
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl">
          Construimos sistemas de digitalización y automatización, bots de
          WhatsApp, integraciones, dashboards e inteligencia artificial aplicada
          para que tu PYME opere como una gran empresa. Cuando es necesario, lo
          ordenamos todo en una capa tipo ERP-lite, sin amarrarte a un software
          gigante.
        </p>
      </section>
      <Services />
      <CTASection />
    </>
  );
}
