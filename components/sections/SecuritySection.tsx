"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiLock, FiShield, FiDatabase, FiFileText } from "react-icons/fi";

const pillars = [
  {
    icon: <FiShield size={18} />,
    title: "Accesos por rol",
    desc: "Permisos mínimos necesarios, revocables y con control por áreas.",
  },
  {
    icon: <FiDatabase size={18} />,
    title: "Datos en tu ecosistema",
    desc: "Trabajamos con herramientas accesibles con control de permisos.",
  },
  {
    icon: <FiLock size={18} />,
    title: "Trazabilidad y respaldo",
    desc: "Documentación, bitácoras y respaldo/versionado según el stack del proyecto.",
  },
  {
    icon: <FiFileText size={18} />,
    title: "Confidencialidad contractual",
    desc: "NDA disponible + cláusulas de confidencialidad incluidas en la propuesta.",
  },
];

export default function SecuritySection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
      >
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-slate-500">
              Confianza operativa
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-[#362263]">
              Seguridad y confidencialidad
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              <span className="font-medium text-slate-800">Tus datos son tuyos.</span>{" "}
              Nosotros construimos el sistema, pero el control lo tenés vos.
            </p>
          </div>

          <Link
            href="/seguridad"
            className="inline-flex items-center justify-center rounded-full bg-[#362263] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#2c1a50] transition-colors w-full md:w-auto"
          >
            Ver política de confidencialidad
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="border border-slate-200 rounded-2xl p-4 bg-slate-50/60"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#362263]">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50/60 border border-slate-200 p-4">
          <p className="text-sm text-slate-600">
            Recomendación: para información ultra sensible, lo ideal es usar canales y formatos
            acordados en el diagnóstico. WhatsApp se usa principalmente para coordinación y capturas operativas.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
