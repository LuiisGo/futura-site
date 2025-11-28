"use client";

import { motion } from "framer-motion";

const sectors = [
  {
    title: "Agroalimentos y lácteos",
    before:
      "Producción apuntada en papel, inventarios imprecisos, rutas de reparto improvisadas.",
    after:
      "Control diario de producción, inventarios por lote y rutas optimizadas con dashboards de ventas y merma.",
  },
  {
    title: "Retail",
    before:
      "Reposiciones reactivas, falta de visibilidad de qué se vende y qué se queda parado.",
    after:
      "Alertas de reposición, análisis de rotación y márgenes por producto, programas de lealtad con FUTURA Wallet.",
  },
  {
    title: "Combustibles y flotas",
    before:
      "Cotizaciones por correo/WhatsApp, poca trazabilidad de pedidos y entregas.",
    after:
      "Flujos claros de cotización, órdenes, facturas y seguimiento de flota en un solo sistema.",
  },
  {
    title: "Servicios técnicos y seguridad",
    before:
      "Tickets informales, técnicos descoordinados, poco control de mantenimiento preventivo.",
    after:
      "Tickets centralizados, activos con QR y agenda de mantenimiento automatizada, con bot de soporte interno.",
  },
  {
    title: "Industrial B2B",
    before:
      "Cotizaciones complejas, seguimiento comercial manual y poca visibilidad de pipeline.",
    after:
      "CRM ligero con cotizaciones, órdenes y seguimiento, integrado a tu operación interna.",
  },
];

export default function Sectors() {
  return (
    <section id="sectores" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
            Sectores donde FUTURA encaja perfecto
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl">
            Trabajamos con PYMES reales, con bodegas, rutas, técnicos y clientes
            que exigen. No son “casos de libro”, son operaciones vivas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm text-sm text-slate-700"
            >
              <h3 className="text-sm font-semibold text-[#362263] mb-2">
                {s.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-1.5">
                <span className="font-semibold text-slate-700">Antes:</span>{" "}
                {s.before}
              </p>
              <p className="text-xs md:text-sm text-slate-600">
                <span className="font-semibold text-slate-700">Después:</span>{" "}
                {s.after}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
