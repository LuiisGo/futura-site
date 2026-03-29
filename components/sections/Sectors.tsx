"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sectors = [
  {
    title: "Agroindustria y alimentos",
    description:
      "Procesos productivos diarios, lotes, trazabilidad, rutas de reparto, devoluciones, cobranzas y análisis de márgenes por cliente y producto.",
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
      "Cualquier empresa con operación recurrente, mucha documentación en papel o procesos manuales puede beneficiarse de la digitalización y automatización de FUTURA.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Sectors() {
  return (
    <section id="sectores" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col md:flex-row gap-8 mb-10 md:items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Sectores donde FUTURA encaja perfecto
            </h2>
            <p className="text-sm md:text-base text-white/40 max-w-xl leading-relaxed">
              Estos son ejemplos de sectores donde FUTURA encaja muy bien, pero
              no son los únicos. Si tu empresa tiene procesos repetitivos, mucha
              información en papel o flujos manuales, probablemente podemos
              ayudarte sin importar la industria.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-xs md:max-w-sm mx-auto md:mx-0"
          >
            <div className="overflow-hidden rounded-2xl border border-white/[0.06] liquid-glass-subtle">
              <Image
                src="/illu-logistics-warehouse.jpg"
                alt="Operación logística y bodega trabajando con FUTURA"
                width={900}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="liquid-glass-subtle rounded-2xl p-5 cursor-default group"
            >
              <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-[#A2CEDC] transition-colors">
                {s.title}
              </h3>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
