"use client";

import { motion } from "framer-motion";
import {
  FiDatabase,
  FiMessageCircle,
  FiRefreshCw,
  FiBarChart2,
  FiCreditCard,
  FiCpu,
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Link from "next/link";

interface ServiceCard {
  title: string;
  description: string;
  tags: string[];
  icon: IconType;
  hero?: boolean;
  link?: string;
  linkLabel?: string;
}

const services: ServiceCard[] = [
  {
    title: "Apps internas a medida",
    description:
      "Construimos aplicaciones web simples para registrar ventas, inventarios, producción, rutas, evidencias y aprobaciones desde celular o escritorio.",
    tags: ["Apps a medida", "Sistemas internos", "PWA"],
    icon: FiCpu,
    hero: true,
    link: "/blog/apps-web-medida-pymes-guatemala",
    linkLabel: "Leer más",
  },
  {
    title: "ERP-lite operativo",
    description:
      "Ordenamos formularios, checklists, inventarios y reportes manuales en una capa digital adaptada a tu empresa, sin la carga de un ERP tradicional.",
    tags: ["Digitalización", "ERP-lite", "Procesos"],
    icon: FiDatabase,
    link: "/blog/erp-vs-sistema-digital-pyme-guatemala",
    linkLabel: "Leer más",
  },
  {
    title: "Dashboards ejecutivos",
    description:
      "Tableros para dueños y gerentes con KPIs de ventas, márgenes, inventarios, rotación, cobranzas y alertas operativas.",
    tags: ["Dashboards", "KPIs", "Reportes"],
    icon: FiBarChart2,
  },
  {
    title: "Automatizaciones con n8n / Make",
    description:
      "Conectamos facturación, inventarios, CRM, correo, Sheets y herramientas internas para eliminar copia/pega y seguimiento manual.",
    tags: ["n8n", "Make", "APIs"],
    icon: FiRefreshCw,
    link: "/blog/que-es-n8n-automatizacion-pyme-guatemala",
    linkLabel: "Leer más",
  },
  {
    title: "Bots de WhatsApp con IA",
    description:
      "Flujos de WhatsApp para capturar pedidos, consultar disponibilidad, responder preguntas frecuentes y escalar casos al equipo humano.",
    tags: ["WhatsApp", "IA aplicada", "OCR"],
    icon: FiMessageCircle,
    link: "/blog/whatsapp-business-automatizacion-pymes-guatemala",
    linkLabel: "Leer más",
  },
  {
    title: "Sitios web y portales",
    description:
      "Webs B2B, portales y formularios conectados al proceso comercial para que la presencia digital alimente la operación.",
    tags: ["Portales", "Formularios", "Leads B2B"],
    icon: FiGlobe,
    link: "/casos/fueldepot-gt",
    linkLabel: "Ver caso",
  },
  {
    title: "FUTURA Wallet",
    description:
      "Producto complementario para lealtad, puntos, cupones y campañas con QR/NFC + WhatsApp cuando la recurrencia del cliente es parte del problema.",
    tags: ["Lealtad", "QR/NFC", "WhatsApp"],
    icon: FiCreditCard,
    link: "/blog/programa-lealtad-digital-pymes-guatemala",
    linkLabel: "Leer más",
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
              Apps, sistemas internos, dashboards y automatizaciones que ordenan
              procesos reales sin obligarte a comprar un software gigante.
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
                  {s.link && (
                    <Link
                      href={s.link}
                      className="inline-flex items-center gap-1 text-xs text-[#a855f7]/70 hover:text-[#c084fc] transition-colors mt-3"
                    >
                      {s.linkLabel || "Leer más"} <FiArrowRight size={12} />
                    </Link>
                  )}
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
                {s.link && (
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-1 text-xs text-[#a855f7]/70 hover:text-[#c084fc] transition-colors mt-3"
                  >
                    {s.linkLabel || "Leer más"} <FiArrowRight size={12} />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
