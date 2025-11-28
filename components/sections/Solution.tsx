"use client";

import { motion } from "framer-motion";

export default function Solution() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-center"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-3">
            La solución: un ERP-lite diseñado sobre herramientas que ya usas.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-4">
            En FUTURA construimos un ERP-lite modular sobre Google, WhatsApp y
            nocode. No te obligamos a casarte con un sistema cerrado; diseñamos
            flujos a la medida de tu operación.
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              • Centralizamos tus datos en una sola fuente de verdad.
            </li>
            <li>
              • Automatizamos tareas repetitivas: captura, reportes, alertas,
              tickets, órdenes.
            </li>
            <li>
              • Le damos a gerencia dashboards claros para tomar decisiones.
            </li>
            <li>
              • Todo sobre un stack que tu equipo entiende (Google Workspace,
              WhatsApp, n8n).
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 text-sm text-slate-700">
          <p className="font-semibold text-[#362263] mb-2">
            De “caos distribuido” a “sistema conectado”:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-xs md:text-sm">
            <li>
              Mapeamos cómo operas hoy (ventas, inventarios, producción,
              mantenimiento, calidad, etc.).
            </li>
            <li>
              Diseñamos módulos claros sobre Google Sheets/Forms, Apps Script y
              n8n.
            </li>
            <li>
              Conectamos todo con bots de WhatsApp y automatizaciones.
            </li>
            <li>
              Te entregamos dashboards y SOPs con QR para que el equipo sepa
              qué hacer.
            </li>
          </ol>
        </div>
      </motion.div>
    </section>
  );
}
