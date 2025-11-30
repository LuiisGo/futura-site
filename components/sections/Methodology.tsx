"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Diagnóstico",
    description:
      "Conversamos sobre tu operación, sistemas actuales y principales dolores. Mapeamos procesos clave y definimos quick wins.",
  },
  {
    title: "2. Diseño del sistema",
    description:
      "Modelamos cómo debería fluir la información: capturas, aprobaciones, automatizaciones y dashboards para cada rol.",
  },
  {
    title: "3. Implementación por sprints",
    description:
      "Construimos módulos uno por uno (ventas, inventarios, producción, etc.) para que veas valor rápido y puedas ajustar.",
  },
  {
    title: "4. Acompañamiento y mejora",
    description:
      "Medimos, ajustamos y documentamos. Dejamos SOPs claros y capacitamos a tu equipo para que el sistema sea sostenible.",
  },
];

export default function Methodology() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
          Metodología simple, enfocada en resultados.
        </h2>
        <p className="text-sm md:text-base text-slate-600 mb-5 max-w-2xl">
          No se trata de “implementar software”, sino de construir un sistema
          que tu equipo realmente use. Trabajamos con una metodología clara,
          transparente y sin tecnicismos innecesarios.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="border border-slate-200 rounded-2xl p-4 bg-slate-50/60"
            >
              <h3 className="text-sm font-semibold text-[#362263] mb-1.5">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
