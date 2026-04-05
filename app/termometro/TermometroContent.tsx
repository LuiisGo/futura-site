"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCheckCircle, FiClipboard, FiCalendar } from "react-icons/fi";
import { TALLY_TERMOMETRO } from "@/lib/constants";

const steps = [
  {
    icon: FiClipboard,
    title: "Respondés 5 preguntas",
    description:
      "Seleccioná las respuestas que mejor describan tu operación actual.",
  },
  {
    icon: FiCheckCircle,
    title: "Recibís tu diagnóstico",
    description:
      "Te mostramos en qué nivel de madurez digital está tu empresa.",
  },
  {
    icon: FiCalendar,
    title: "Agendás tu consulta gratuita",
    description:
      "Hablamos 30 minutos sobre quick wins y un plan concreto para tu negocio.",
  },
];

export default function TermometroContent() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Descubrí en 3 minutos cuánto estás perdiendo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-white/45 max-w-2xl mx-auto"
          >
            Completá el Termómetro Operativo en 3 minutos y recibí un
            diagnóstico personalizado con recomendaciones concretas.
          </motion.p>
        </div>
      </section>

      {/* Tally iframe */}
      <section className="w-full">
        <iframe
          src={TALLY_TERMOMETRO}
          width="100%"
          height={600}
          loading="lazy"
          title="Termómetro Operativo FUTURA"
          className="border-0"
        />
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
        >
          ¿Qué pasa después?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="liquid-glass-subtle rounded-2xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#7C3AED]/15 text-[#a855f7] mb-4">
                <step.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white/90 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-white/60 mb-4">
            ¿Preferís hablar directamente con alguien del equipo?
          </p>
          <Link
            href="/contacto"
            className="apple-btn inline-block px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold"
          >
            Agendar diagnóstico gratuito
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
