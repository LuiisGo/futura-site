"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiShield, FiUsers, FiArchive, FiFileText } from "react-icons/fi";

const pillars = [
  {
    title: "Accesos por rol",
    desc: "Permisos mínimos necesarios, revocables y con control por áreas.",
    icon: FiUsers,
  },
  {
    title: "Datos en tu ecosistema",
    desc: "Trabajamos con herramientas accesibles (Google, WhatsApp, n8n) con control de permisos.",
    icon: FiArchive,
  },
  {
    title: "Trazabilidad y respaldo",
    desc: "Documentación, bitácoras y respaldo/versionado según el stack del proyecto.",
    icon: FiShield,
  },
  {
    title: "Confidencialidad contractual",
    desc: "NDA disponible + cláusulas de confidencialidad incluidas en la propuesta.",
    icon: FiFileText,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Security() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass rounded-3xl p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/30 mb-2">
              Confianza operativa
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              Seguridad y confidencialidad
            </h2>
            <p className="text-sm md:text-base text-white/40 max-w-2xl">
              Tus datos son tuyos. Nosotros construimos el sistema, pero el control lo tenés vos.
            </p>
          </div>

          <Link
            href="/seguridad"
            className="apple-btn inline-flex items-center justify-center rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Ver política de confidencialidad
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mt-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="liquid-glass-subtle rounded-2xl p-4 flex gap-3 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/15 flex items-center justify-center text-[#7C3AED] shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/90 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/40 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl p-4 bg-white/[0.02] border border-white/[0.06]">
          <p className="text-xs md:text-sm text-white/35 leading-relaxed">
            Operamos con acuerdos de confidencialidad cuando el proyecto lo requiere (NDA) y dejamos
            definidos desde el inicio los accesos, responsables y canales de comunicación (llamada,
            WhatsApp Business y correo), con controles de permisos y trazabilidad.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
