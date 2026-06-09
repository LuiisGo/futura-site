"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle, FiLayers } from "react-icons/fi";

const steps = [
  {
    eyebrow: "Antes",
    title: "Información dispersa",
    description:
      "La operación vive entre WhatsApp, Excel, papel, correos y personas clave. Nadie tiene una versión confiable de inventario, ventas, reportes o pendientes.",
    points: ["Registros manuales", "Datos duplicados", "Cero visibilidad diaria"],
  },
  {
    eyebrow: "Durante",
    title: "Sistema por sprints",
    description:
      "Mapeamos el flujo, priorizamos quick wins y construimos módulos simples: formularios, permisos, dashboards, automatizaciones con n8n e IA aplicada donde suma valor.",
    points: ["Proceso claro", "Entregas cortas", "Equipo usando la herramienta"],
  },
  {
    eyebrow: "Después",
    title: "Operación conectada",
    description:
      "Tu empresa queda con un sistema digital, alertas, reportes, trazabilidad, accesos por rol y datos en tiempo real para decidir sin perseguir información.",
    points: ["Dashboards ejecutivos", "Alertas automáticas", "Datos confiables"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ScrollStory() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass rounded-3xl p-6 md:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr,1.6fr] lg:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/30 mb-2">
              De problema a solución
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Orden operativo sin cambiar todo de golpe.
            </h2>
            <p className="text-sm md:text-base text-white/42 leading-relaxed">
              FUTURA convierte procesos manuales en apps internas, sistemas
              ERP-lite y dashboards que tu equipo puede usar desde el primer
              sprint.
            </p>
          </div>

          <div className="grid gap-3">
            {steps.map((step, index) => (
              <motion.article
                key={step.eyebrow}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="flex items-center gap-3 md:w-36 md:shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/12 text-[#A2CEDC]">
                      {index === 0 ? (
                        <FiLayers size={16} />
                      ) : index === 1 ? (
                        <FiArrowRight size={16} />
                      ) : (
                        <FiCheckCircle size={16} />
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A2CEDC]">
                      {step.eyebrow}
                    </p>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/45 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-white/[0.06] bg-[#0c0714]/30 px-2.5 py-1 text-[11px] text-white/40"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
