"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Solution() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-10 items-start"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-3">
            Un ERP-lite construido a tu medida,
            <br />
            sobre herramientas que ya conoces.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-4">
            No te obligamos a abandonar tus herramientas actuales. Diseñamos un
            sistema que conecta lo que ya usas con automatizaciones y
            dashboards, paso a paso.
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-slate-700">
            <li>
              • <span className="font-semibold">Captura estructurada:</span>{" "}
              Google Forms/Sheets en lugar de notas sueltas.
            </li>
            <li>
              • <span className="font-semibold">Flujos claros:</span> ventas,
              pedidos, inventarios, producción, mantenimiento, tickets y más.
            </li>
            <li>
              • <span className="font-semibold">Automatización con n8n:</span>{" "}
              notificaciones, tareas, integraciones con otros sistemas.
            </li>
            <li>
              • <span className="font-semibold">Dashboards ejecutivos:</span>{" "}
              KPIs para dueños y gerentes, sin perderse en el detalle.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/illu-dashboards.jpg"
              alt="Dashboards y paneles de control de FUTURA"
              width={900}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs md:text-sm text-slate-600">
            Cada implementación es distinta, pero el objetivo es el mismo:
            construir una “capa operativa” que te dé visibilidad real y reduzca
            el trabajo manual repetitivo.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
