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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function BentoServices() {
  return (
    <section id="bento-servicios" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
              Lo que hacemos en FUTURA
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
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
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5"
        >
          {services.map((s) => {
            const Icon = s.icon;

            if (s.hero) {
              return (
                <motion.div
                  key={s.title}
                  variants={cardVariants}
                  whileHover={{ y: -3 }}
                  className="md:col-span-2 md:row-span-1 bg-[#362263] text-white border border-white/10 rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon className="text-2xl md:text-3xl mb-3 text-white/80" />
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 mb-4 max-w-lg">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-white/90"
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
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="text-xl md:text-2xl mb-2 text-[#362263]" />
                <h3 className="text-sm font-semibold text-[#362263] mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 mb-3">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] text-slate-600"
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
