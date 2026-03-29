"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "¿Cómo usan inteligencia artificial en los proyectos?",
    a: "La IA no es un adorno: la usamos donde realmente suma valor. Por ejemplo, en bots que entienden lenguaje natural, asistentes internos que responden sobre tus procesos (RAG), clasificación automática de tickets y priorización, resúmenes de información clave y sugerencias basadas en tus datos operativos.",
  },
  {
    q: "¿Cuánto tarda una implementación típica?",
    a: "Depende del alcance, pero un primer módulo funcional (por ejemplo digitalización de un proceso clave + automatización básica) suele estar listo en semanas, no en meses. Trabajamos por sprints para que veas resultados rápido.",
  },
  {
    q: "¿Necesito abandonar todo lo que uso hoy?",
    a: "No. Partimos de tus herramientas actuales (papel, PDFs, Google, WhatsApp, sistemas de facturación, etc.) y construimos alrededor. El objetivo es ordenar, digitalizar y conectar, no romper lo que ya funciona. La inteligencia artificial se conecta a ese ecosistema, no lo reemplaza.",
  },
  {
    q: "¿Qué tamaño mínimo de empresa atienden?",
    a: "Trabajamos con PYMES que ya tienen cierta complejidad operativa: bodegas, rutas, equipos técnicos, varias sucursales o portafolios amplios. Si tienes dudas, agendamos un diagnóstico y lo vemos juntos.",
  },
  {
    q: "¿Cómo manejan la seguridad de la información?",
    a: "Usamos cuentas y herramientas del propio cliente (Google Workspace, n8n, etc.), con accesos restringidos y buenas prácticas de permisos. FUTURA no se queda con tu información como un SaaS cerrado.",
  },
  {
    q: "¿Pueden trabajar remoto con empresas fuera de Guatemala?",
    a: "Sí. Toda la metodología puede ejecutarse online. Podemos atender PYMES en LATAM y otros mercados que trabajen en español o inglés.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 tracking-tight">
          Preguntas frecuentes
        </h2>
        <div className="space-y-2">
          {faqs.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-colors">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left group"
      >
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FiChevronDown className="text-white/30 shrink-0 ml-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 text-sm text-white/40 border-t border-white/[0.04] pt-3 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
