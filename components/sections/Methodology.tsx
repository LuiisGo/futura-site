"use client";

import { motion } from "framer-motion";

export default function Methodology() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-4">
          Cómo trabajamos contigo
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700">
          <Step
            number="01"
            title="Diagnóstico fijo"
            description="Entrevistas con dueño/gerencia y personal clave. Mapeamos procesos, identificamos quick wins y definimos un roadmap realista."
          />
          <Step
            number="02"
            title="Sprints de implementación"
            description="Trabajamos por módulos (inventarios, ventas, mantenimiento, etc.) con entregables funcionales en producción, no solo documentos."
          />
          <Step
            number="03"
            title="Soporte y mejora continua"
            description="Ajustes, nuevas automatizaciones, mejoras de dashboards y soporte al equipo para que el sistema se vuelva parte del día a día."
          />
        </div>
      </motion.div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="text-xs font-mono text-slate-400 mb-1">{number}</div>
      <h3 className="text-sm font-semibold text-[#362263] mb-1.5">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-600">{description}</p>
    </div>
  );
}
