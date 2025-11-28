import ContactForm from "../../components/common/ContactForm";
import CTASection from "../../components/sections/CTASection";

export default function ContactoPage() {
  return (
    <div className="pb-20">
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#362263] mb-4">
          Hablemos de tu empresa
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Cuéntanos brevemente quién eres y qué te duele hoy en tu operación. En
          una llamada de diagnóstico de 30–45 minutos revisamos tus procesos,
          identificamos quick wins y te proponemos un plan concreto.
        </p>
      </section>
      <div className="max-w-3xl mx-auto px-4">
        <ContactForm />
      </div>
      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
