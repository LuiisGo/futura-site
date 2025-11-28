"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "¿Cuánto tarda una implementación típica?",
    a: "Depende del alcance, pero un primer módulo funcional (por ejemplo inventarios + ventas) suele estar listo en semanas, no en meses. Trabajamos por sprints para que veas resultados rápido.",
  },
  {
    q: "¿Necesito abandonar todo lo que uso hoy?",
    a: "No. Partimos de tus herramientas actuales (Google, WhatsApp, sistemas de facturación, etc.) y construimos alrededor. El objetivo es ordenar y conectar, no romper lo que ya funciona.",
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
    <section className="max-w-6xl mx-auto px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-4">
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
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-medium text-slate-800">{q}</span>
        <FiChevronDown
          className={`text-slate-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-4 pb-3 text-xs md:text-sm text-slate-600 border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}
