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
  slug: string;
  tag: string;
  problem: string;
  solution: string;
  results: CaseResult[];
  quote?: string;
}

const cases: CaseStudy[] = [
  {
    company: "Lechería San Antonio",
    sector: "Agroindustria · Lácteos",
    detail: "4 tiendas + bodega central · Guatemala",
    slug: "lecheria-san-antonio",
    tag: "ERP-lite",
    problem:
      "Registraban entradas y salidas de inventario en papel en 5 puntos de operación. 15 horas/semana solo en registro manual.",
    solution: "ERP-lite con Google Forms y Sheets",
    results: [
      { label: "15h/semana → 30 min" },
      { label: "Dinero cuadra exacto" },
      { label: "Visibilidad en tiempo real" },
      { label: "5 puntos de operación en un sistema" },
    ],
    quote:
      "\u201cDe 15 horas semanales a 30 minutos. Ahora cada empleado registra desde el celular.\u201d",
  },
  {
    company: "Lechería San Antonio",
    sector: "Agroindustria · Lácteos",
    detail: "Control de entradas/salidas de leche cruda · Guatemala",
    slug: "lecheria-san-antonio-leche",
    tag: "App a medida",
    problem:
      "El registro de entradas y salidas de leche cruda se hacía en papel. Sin trazabilidad ni evidencia fotográfica.",
    solution: "PWA offline-first con autenticación biométrica y análisis de varianza",
    results: [
      { label: "Registro en <30 segundos" },
      { label: "Trazabilidad completa" },
      { label: "Funciona offline" },
      { label: "Evidencia fotográfica" },
    ],
  },
  {
    company: "Lechería San Antonio",
    sector: "Agroindustria · Lácteos",
    detail: "Calculadora de preservación de leche cruda · Guatemala",
    slug: "calculadora-lsa",
    tag: "App a medida",
    problem:
      "Cálculos de preservación (conservantes, tiempos, temperaturas) se hacían con tablas en papel, propensos a errores.",
    solution: "PWA con modelo cinético de degradación y estrategias de dosificación optimizadas",
    results: [
      { label: "Cálculos instantáneos en planta" },
      { label: "Ahorro de insumos" },
      { label: "Cero errores de dosificación" },
      { label: "Funciona offline" },
    ],
  },
  {
    company: "Agrícola San Antonio",
    sector: "Agroindustria · Combustibles",
    detail: "2 tanques · múltiples proveedores · Guatemala",
    slug: "agricola-san-antonio",
    tag: "App a medida",
    problem:
      "Control de combustible en papel. Sin forma de detectar discrepancias entre entregas y existencias reales.",
    solution: "PWA offline-first con autenticación biométrica y análisis de varianza en tiempo real",
    results: [
      { label: "Registro en <30 segundos" },
      { label: "Detección de discrepancias" },
      { label: "Funciona offline" },
      { label: "Evidencia fotográfica" },
    ],
  },
  {
    company: "FUELDEPOT GT",
    sector: "Combustibles · B2B",
    slug: "fueldepot-gt",
    tag: "Landing page",
    problem: "Sin presencia digital profesional para generar leads B2B.",
    solution: "Landing page B2B optimizada para conversión",
    results: [
      { label: "3 deals cerrados desde la landing" },
      { label: "Canal de leads activo" },
    ],
  },
  {
    company: "SUPESA Guatemala",
    sector: "Combustibles · B2B",
    slug: "supesa-guatemala",
    tag: "Landing + formularios",
    problem: "Necesitaban presencia digital con formularios integrados para captar leads B2B en combustibles.",
    solution: "Landing page B2B con formularios conectados al proceso comercial",
    results: [
      { label: "4 deals cerrados desde la landing" },
      { label: "Canal de leads B2B activo" },
      { label: "supesaguatemala.com" },
    ],
  },
];

export default function CasosContent() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="text-white py-20">
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
            key={c.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="liquid-glass-subtle rounded-2xl overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {c.company}
                </h2>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/15 text-[#a855f7]">
                  {c.tag}
                </span>
              </div>

              <p className="text-sm text-white/40 mb-1">{c.sector}</p>
              {c.detail && (
                <p className="text-sm text-white/40 mb-6">{c.detail}</p>
              )}

              {/* Problem / Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-2">
                    Problema
                  </h3>
                  <p className="text-sm text-white/80">{c.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                    Solución
                  </h3>
                  <p className="text-sm text-white/80">{c.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#a855f7] mb-3">
                  Resultados
                </h3>
                <div className="flex flex-wrap gap-2">
                  {c.results.map((r) => (
                    <span
                      key={r.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium"
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
                <blockquote className="border-l-4 border-[#7C3AED] pl-4 italic text-white/60 text-sm">
                  {c.quote}
                </blockquote>
              )}

              {/* Link */}
              <Link
                href={`/casos/${c.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#a855f7] hover:text-[#c084fc] transition-colors mt-2"
              >
                Ver caso completo
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.article>
        ))}

        {/* Placeholder card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border-2 border-dashed border-white/20 p-8 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">
            Tu caso podría ser el siguiente
          </h3>
          <p className="text-white/60 mb-6">
            Contanos sobre tu operación y diseñamos una solución a tu medida.
          </p>
          <a
            href="https://calendar.app.google/6DiM3gfRCPkNrTfG8"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn inline-block px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold"
          >
            Agendar diagnóstico gratuito
          </a>
        </motion.div>
      </section>
    </div>
  );
}
