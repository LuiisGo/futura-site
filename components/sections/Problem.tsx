"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-10 items-start"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-3">
            Si todo está en Excel y WhatsApp,
            <br />
            ya no estás creciendo: estás sobreviviendo.
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            La mayoría de PYMES crece a punta de esfuerzo, pero llega un punto
            donde el desorden interno se vuelve el freno principal:
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-3 text-sm text-slate-700">
          <ProblemItem title="Información dispersa">
            Excel, libretas, WhatsApp, correos, fotos en el celular… nadie sabe
            dónde está la última versión de nada.
          </ProblemItem>
          <ProblemItem title="Dependencia de personas clave">
            La operación depende de “la persona que sabe”. Si falta, todo se
            atrasa o se detiene.
          </ProblemItem>
          <ProblemItem title="Cero visibilidad real">
            No hay dashboards ni indicadores claros. Se decide por intuición,
            no por datos.
          </ProblemItem>
          <ProblemItem title="ERPs que no encajan">
            Las soluciones grandes son caras, lentas de implementar y no se
            adaptan a la realidad del día a día.
          </ProblemItem>
        </div>
      </motion.div>
    </section>
  );
}

function ProblemItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#3C88BA]" />
      <div>
        <h3 className="text-sm font-semibold text-[#362263] mb-0.5">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-slate-600">{children}</p>
      </div>
    </div>
  );
}
