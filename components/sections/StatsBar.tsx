"use client";

// components/sections/StatsBar.tsx
// → page.tsx: DESPUÉS de <Hero />, ANTES de <Problem />
// ⚠️  Ajustá los números con los tuyos reales antes de publicar.
// Referencia de cálculo:
//   Lechería San Antonio = 15h/semana × 52 semanas = 780h/año
//   Si tenés más clientes con tiempo eliminado, sumalo al total.

import { motion } from "framer-motion";

const stats = [
  {
    number: "12+",
    label: "Proyectos entregados",
  },
  {
    number: "5",
    label: "Sectores atendidos",
  },
  {
    number: "780+",
    label: "Horas de trabajo manual eliminadas",
  },
  {
    number: "3",
    label: "Países en Centroamérica",
  },
];

export default function StatsBar() {
  return (
    <section className="w-full border-y border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#362263] leading-none">
                {stat.number}
              </span>
              <span className="mt-2 text-sm text-slate-500 leading-snug max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
