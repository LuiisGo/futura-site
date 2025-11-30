"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sectors = [
  {
    title: "Agroalimentos y lácteos",
    description:
      "Producción diaria, lotes, caducidades, rutas de reparto, devoluciones, cobranzas y análisis de márgenes por cliente y producto.",
  },
  {
    title: "Retail",
    description:
      "Inventarios por tienda, reposiciones automáticas, rotación, quiebres, precios y margen por categoría. Integración con FUTURA Wallet.",
  },
  {
    title: "Combustibles y flotas",
    description:
      "Flujos de cotización, órdenes, entregas, control de clientes, flotas, consumo y facturación. Panel claro de estado de cada cuenta.",
  },
  {
    title: "Servicios técnicos y seguridad",
    description:
      "Tickets, activos con QR, agenda de mantenimiento preventivo, visitas técnicas y reportes fotográficos conectados a la base de datos.",
  },
  {
    title: "Industrial B2B",
    description:
      "Cotizaciones complejas, órdenes de compra, órdenes de producción, despachos y trazabilidad de proyectos o clientes.",
  },
  {
    title: "Otros sectores",
    description:
      "Si tu empresa tiene operación recurrente, inventarios, rutas, tickets o proyectos, probablemente podamos ayudarte.",
  },
];

export default function Sectors() {
  return (
    <section id="sectores" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-6 mb-6 md:items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
              Sectores donde FUTURA encaja perfecto
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Hemos diseñado FUTURA pensando en operaciones reales:
              producción, bodegas, rutas, servicio en campo y oficinas que
              necesitan ordenarse sin perder velocidad.
            </p>
          </div>
          <div className="flex-1 max-w-xs md:max-w-sm mx-auto md:mx-0">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/illu-logistics-warehouse.jpg"
                alt="Operación logística y bodega trabajando con FUTURA"
                width={900}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-[#362263] mb-1.5">
                {s.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
