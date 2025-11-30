import ContactForm from "../../components/common/ContactForm";
import CTASection from "../../components/sections/CTASection";
import Image from "next/image";

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
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-[1.25fr,1fr] gap-6 items-center">
          <ContactForm />
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/illu-mobile-chatbot.jpg"
                alt="Chatbot de FUTURA agendando reuniones"
                width={640}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
