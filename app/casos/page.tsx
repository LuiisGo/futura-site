"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CaseResult {
  label: string;
}

interface CaseStudy {
  company: string;
  sector: string;
  detail?: string;
  tag: string;
  problem: string;
  solution: string;
  results: CaseResult[];
  quote?: string;
}

const cases: CaseStudy[] = [
  {
    company: "Lechería San Antonio",
    sector: "Agroindustria \u00b7 L\u00e1cteos",
    detail: "4 tiendas + bodega central \u00b7 Guatemala",
    tag: "ERP-lite",
    problem:
      "Registraban entradas y salidas de inventario en papel en 5 puntos de operaci\u00f3n. 15 horas/semana solo en registro manual.",
    solution: "ERP-lite con Google Forms y Sheets",
    results: [
      { label: "15h/semana \u2192 30 min" },
      { label: "Dinero cuadra exacto" },
      { label: "Visibilidad en tiempo real" },
      { label: "5 puntos de operaci\u00f3n en un sistema" },
    ],
    quote:
      "\u201cAntes tard\u00e1bamos 15 horas a la semana. Ahora cada empleado llena un formulario en 30 segundos.\u201d",
  },
  {
    company: "FUELDEPOT GT",
    sector: "Combustibles \u00b7 B2B",
    tag: "Landing page",
    problem: "Sin presencia digital profesional",
    solution: "Landing page B2B optimizada",
    results: [
      { label: "3 deals cerrados desde la landing" },
      { label: "Canal de leads activo" },
    ],
  },
];

export default function CasosPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-[#0b0720] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Empresas que ya operan diferente con FUTURA
          </motion.h1>
        </div>
      </section>

      {/* Cases */}
      <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">
        {cases.map((c, i) => (
          <motion.article
            key={c.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-[#362263]">
                  {c.company}
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#362263]/10 text-[#362263]">
                  {c.tag}
                </span>
              </div>

              <p className="text-sm text-slate-500 mb-1">{c.sector}</p>
              {c.detail && (
                <p className="text-sm text-slate-500 mb-6">{c.detail}</p>
              )}

              {/* Problem / Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-2">
                    Problema
                  </h3>
                  <p className="text-sm text-slate-700">{c.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-2">
                    Solución
                  </h3>
                  <p className="text-sm text-slate-700">{c.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#362263] mb-3">
                  Resultados
                </h3>
                <div className="flex flex-wrap gap-2">
                  {c.results.map((r) => (
                    <span
                      key={r.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium"
                    >
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {r.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              {c.quote && (
                <blockquote className="border-l-4 border-[#362263] pl-4 italic text-slate-600 text-sm">
                  {c.quote}
                </blockquote>
              )}
            </div>
          </motion.article>
        ))}

        {/* Placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center"
        >
          <h3 className="text-xl font-bold text-[#362263] mb-2">
            Tu caso podría ser el siguiente
          </h3>
          <p className="text-slate-600 mb-6">
            Contanos sobre tu operación y diseñamos una solución a tu medida.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-6 py-3 rounded-full bg-[#362263] text-white font-semibold hover:bg-[#2c1a50] transition-colors shadow-sm"
          >
            Agendar diagnóstico gratuito
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
