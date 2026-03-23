"use client";

// components/sections/CasosDeExito.tsx
// → page.tsx: DESPUÉS de <SocialProofSection />, ANTES de <Sectors />

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const casos = [
  {
    empresa: "Lechería San Antonio",
    sector: "Agroindustria · Lácteos",
    detalle: "4 tiendas + bodega central · Guatemala",
    tag: "ERP-lite",
    problema:
      "Registraban entradas y salidas de inventario en papel en 5 puntos de operación. El dinero no cuadraba al cierre del día, no había visibilidad entre sucursales, y el proceso consumía 15 horas por semana solo en registro manual.",
    solucion:
      "ERP-lite con Google Forms y Sheets: cada empleado registra movimientos desde el celular en 30 segundos. El sistema consolida inventario por sucursal y bodega en tiempo real y genera la vista ejecutiva para gerencia.",
    resultados: [
      "Tiempo de registro: de 15 horas/semana a menos de 30 minutos",
      "El dinero cuadra exacto — se eliminaron las pérdidas por falta de control",
      "Visibilidad de inventario por tienda y bodega en tiempo real",
      "5 puntos de operación manejados desde un solo sistema",
    ],
  },
  {
    empresa: "FUELDEPOT GT",
    sector: "Combustibles · B2B",
    detalle: "Guatemala",
    tag: "Landing page",
    problema:
      "Necesitaban presencia digital profesional para generar leads calificados de forma consistente, sin depender solo de referidos.",
    solucion:
      "Landing page B2B optimizada para conversión con formulario de captura integrado a su proceso comercial.",
    resultados: [
      "3 deals cerrados directamente desde la landing page",
      "Canal de generación de leads activo y medible desde el día 1",
    ],
  },
];

export default function CasosDeExito() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
      >
        {/* Header — mismo patrón que SocialProofSection */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">
              Resultados reales
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
              Empresas que ya operan diferente con FUTURA
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Casos concretos con números reales. No prometemos resultados
              genéricos — mostramos lo que ya construimos.
            </p>
          </div>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-colors whitespace-nowrap"
          >
            Ver mi caso <FiArrowRight />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {casos.map((caso, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-2xl p-6 bg-white flex flex-col gap-5"
            >
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#362263]/10 text-[#362263] mb-3">
                  {caso.tag}
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  {caso.empresa}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {caso.sector} · {caso.detalle}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  El problema
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {caso.problema}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Lo que implementamos
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {caso.solucion}
                </p>
              </div>

              <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Resultados
                </p>
                <ul className="space-y-2">
                  {caso.resultados.map((r, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-700">
                      <span className="mt-0.5 text-[#362263] flex-shrink-0">
                        <FiCheck size={14} />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            ¿Tu empresa tiene procesos similares?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-[#362263] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2c1a50] transition-colors"
          >
            Agendar diagnóstico gratuito <FiArrowRight />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
