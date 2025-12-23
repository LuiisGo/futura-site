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

export default function Security() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">
              Confianza operativa
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
              Seguridad y confidencialidad
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              Tus datos son tuyos. Nosotros construimos el sistema, pero el control lo tenés vos.
            </p>
          </div>

          <Link
            href="/seguridad"
            className="inline-flex items-center justify-center rounded-full bg-[#362263] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2c1a50] transition-colors shadow-sm"
          >
            Ver política de confidencialidad
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="border border-slate-200 rounded-2xl p-4 bg-slate-50/60 flex gap-3"
              >
                <div className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#362263]">
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota final sin “recomendación” */}
        <div className="mt-5 border border-slate-200 rounded-2xl p-4 bg-white">
          <p className="text-xs md:text-sm text-slate-600">
            Operamos con acuerdos de confidencialidad cuando el proyecto lo requiere (NDA) y dejamos
            definidos desde el inicio los accesos, responsables y canales de comunicación (llamada,
            WhatsApp Business y correo), con controles de permisos y trazabilidad.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
