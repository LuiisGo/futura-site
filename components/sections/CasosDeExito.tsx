"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const casos = [
  {
    empresa: "Lechería San Antonio",
    sector: "Agroindustria · Lácteos",
    detalle: "4 tiendas + bodega central · Guatemala",
    tag: "ERP-lite",
    slug: "lecheria-san-antonio",
    problema:
      "Registraban entradas y salidas de inventario en papel en 5 puntos de operación. 15 horas/semana solo en registro manual y el dinero no cuadraba.",
    solucion:
      "ERP-lite con Google Forms y Sheets: cada empleado registra movimientos desde el celular en 30 segundos con vista ejecutiva en tiempo real.",
    resultados: [
      "15h/semana → 30 minutos de registro",
      "Dinero cuadra exacto al cierre del día",
      "5 puntos de operación en un solo sistema",
    ],
  },
  {
    empresa: "Agrícola San Antonio",
    sector: "Agroindustria · Combustibles",
    detalle: "2 tanques · múltiples proveedores · Guatemala",
    tag: "App a medida",
    slug: "agricola-san-antonio",
    problema:
      "Control de combustible en papel. Sin trazabilidad ni forma de detectar discrepancias entre entregas y existencias.",
    solucion:
      "PWA offline-first con autenticación biométrica, análisis de varianza en tiempo real y evidencia fotográfica.",
    resultados: [
      "Registro en <30 segundos desde el celular",
      "Detección automática de discrepancias",
      "Funciona offline y sincroniza solo",
    ],
  },
  {
    empresa: "FUELDEPOT GT",
    sector: "Combustibles · B2B",
    detalle: "Guatemala",
    tag: "Landing + formularios",
    slug: "fueldepot-gt",
    problema:
      "Necesitaban presencia digital profesional para generar leads calificados de forma consistente, sin depender solo de referidos.",
    solucion:
      "Landing page B2B optimizada para conversión con formulario de captura integrado a su proceso comercial.",
    resultados: [
      "3 deals cerrados directamente desde la landing",
      "Canal de generación de leads activo y medible",
    ],
  },
  {
    empresa: "Lechería San Antonio",
    sector: "Agroindustria · Lácteos",
    detalle: "Calculadora de preservación · Guatemala",
    tag: "App a medida",
    slug: "calculadora-lsa",
    problema:
      "Cálculos de preservación de leche (conservantes, tiempos, temperaturas) con tablas en papel, propensos a errores que arruinaban lotes.",
    solucion:
      "PWA con modelo cinético de degradación y estrategias de dosificación optimizadas de 1, 2 o 3 dosis. Funciona offline en planta.",
    resultados: [
      "Cálculos instantáneos en planta",
      "Ahorro de insumos con dosificación óptima",
      "Cero errores de dosificación",
    ],
  },
  {
    empresa: "SUPESA Guatemala",
    sector: "Combustibles · B2B",
    detalle: "supesaguatemala.com",
    tag: "Landing + formularios",
    slug: "supesa-guatemala",
    problema:
      "Necesitaban presencia digital con formularios integrados para captar leads B2B en el mercado de combustibles.",
    solucion:
      "Landing page B2B con formularios de captura conectados al proceso comercial.",
    resultados: [
      "4 deals cerrados desde la landing",
      "Canal de leads B2B activo y medible",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function CasosDeExito() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass rounded-3xl p-6 md:p-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/30 mb-2">
              Resultados reales
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              Empresas que ya operan diferente con FUTURA
            </h2>
            <p className="text-sm md:text-base text-white/40 max-w-2xl leading-relaxed">
              Sistemas, apps y portales reales con números concretos. No
              prometemos resultados genéricos — mostramos lo que ya construimos.
            </p>
          </div>
          <a
            href="https://calendar.app.google/6DiM3gfRCPkNrTfG8"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-ghost inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap"
          >
            Ver mi caso <FiArrowRight />
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.slug}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="liquid-glass-subtle rounded-2xl p-6 flex flex-col gap-5"
            >
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]/15 mb-3">
                  {caso.tag}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {caso.empresa}
                </h3>
                <p className="text-xs text-white/30 mt-0.5">
                  {caso.sector} · {caso.detalle}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/30 mb-1.5">
                  El problema
                </p>
                <p className="text-sm text-white/45 leading-relaxed">
                  {caso.problema}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/30 mb-1.5">
                  Lo que implementamos
                </p>
                <p className="text-sm text-white/45 leading-relaxed">
                  {caso.solucion}
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/30 mb-3">
                  Resultados
                </p>
                <ul className="space-y-2">
                  {caso.resultados.map((r, j) => (
                    <li key={j} className="flex gap-2 text-sm text-white/60">
                      <span className="mt-0.5 text-emerald-400 flex-shrink-0">
                        <FiCheck size={14} />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {caso.slug && (
                <Link
                  href={`/casos/${caso.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm text-[#a855f7]/70 hover:text-[#c084fc] transition-colors mt-auto"
                >
                  Ver caso completo <FiArrowRight size={14} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06]">
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#a855f7] hover:text-[#c084fc] transition-colors"
          >
            Ver todos los casos <FiArrowRight />
          </Link>
          <a
            href="https://calendar.app.google/6DiM3gfRCPkNrTfG8"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn inline-flex items-center gap-2 rounded-full bg-[#7C3AED] px-6 py-2.5 text-sm font-semibold text-white"
          >
            Agendar diagnóstico gratuito <FiArrowRight />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
