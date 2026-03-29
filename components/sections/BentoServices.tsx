"use client";

import { motion } from "framer-motion";
import {
  FiDatabase,
  FiMessageCircle,
  FiRefreshCw,
  FiBarChart2,
  FiCreditCard,
  FiCpu,
} from "react-icons/fi";
import type { IconType } from "react-icons";

interface ServiceCard {
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
  hero?: boolean;
}

const services: ServiceCard[] = [
  {
    title: "Digitalización de procesos y ERP-lite",
    description:
      "Tomamos formularios en papel, checklists y reportes manuales y los convertimos en flujos digitales. Cuando hace sentido, lo organizamos en una capa tipo ERP-lite adaptada a tu empresa.",
    tags: ["Digitalización", "ERP-lite", "Listo para IA"],
    icon: FiDatabase,
    hero: true,
  },
  {
    title: "Chatbots de WhatsApp con IA",
    description:
      "Bots con IA que entienden lenguaje natural, reciben fotos, aplican OCR y consultan tu base de conocimiento interna.",
    tags: ["IA", "WhatsApp", "OCR"],
    icon: FiMessageCircle,
  },
  {
    title: "Integraciones y RPA",
    description:
      "Conectamos facturación, inventarios, CRM, correo y otras herramientas para eliminar tareas manuales repetitivas.",
    tags: ["n8n", "APIs", "RPA"],
    icon: FiRefreshCw,
  },
  {
    title: "Dashboards ejecutivos",
    description:
      "Tableros para dueños y gerentes con KPIs de ventas, márgenes, inventarios, rotación y cobranzas.",
    tags: ["KPIs", "Data-driven"],
    icon: FiBarChart2,
  },
  {
    title: "FUTURA Wallet",
    description:
      "Sistema de puntos, cupones, gift cards y campañas con QR/NFC + WhatsApp. Mini CRM de recurrencia.",
    tags: ["Lealtad", "QR/NFC"],
    icon: FiCreditCard,
  },
  {
    title: "IA aplicada a la operación",
    description:
      "Modelos de IA para responder preguntas, clasificar tickets y apoyar decisiones sobre tus datos operativos.",
    tags: ["Asistentes", "Clasificación"],
    icon: FiCpu,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function BentoServices() {
  return (
    <section id="bento-servicios" className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Lo que hacemos en FUTURA
            </h2>
            <p className="text-sm md:text-base text-white/40 max-w-xl">
              Sistemas concretos de digitalización, automatización e inteligencia
              artificial aplicada para que tu operación funcione mejor.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4"
        >
          {services.map((s) => {
            const Icon = s.icon;

            if (s.hero) {
              return (
                <motion.div
                  key={s.title}
                  variants={cardVariants}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="md:col-span-2 md:row-span-1 liquid-glass-strong rounded-2xl p-6 md:p-8 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/15 border border-[#7C3AED]/20 flex items-center justify-center mb-4">
                    <Icon className="text-lg text-[#7C3AED]" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-5 max-w-lg leading-relaxed">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-white/[0.06] text-[11px] text-white/60 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="liquid-glass-subtle rounded-2xl p-5 md:p-6 group cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-3">
                  <Icon className="text-base text-white/60 group-hover:text-[#7C3AED] transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs md:text-sm text-white/40 mb-3 leading-relaxed">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-white/[0.03] text-[11px] text-white/35 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
