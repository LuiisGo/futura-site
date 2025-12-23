"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiPlay, FiLayers } from "react-icons/fi";

const demos = [
  {
    title: "ERP demo (Retail)",
    desc: "Captura → inventario → dashboard para el dueño.",
    outcome: "Menos trabajo repetitivo. Más control diario.",
    img: "/illu-dashboards.jpg",
    href: "/illu-dashboards.jpg",
  },
  {
    title: "Automatización/sistematizacion (flujo real)",
    desc: "Lead → CRM → email → alerta interna.",
    outcome: "Menos duplicación de información o informacion irrelevante.",
    img: "/illu-logistics-warehouse.jpg",
    href: "/illu-logistics-warehouse.jpg",
  },
  {
    title: "Bot (Web/WhatsApp) – demo",
    desc: "Menú + captura de datos + handoff humano.",
    outcome: "Respuestas más rápidas y ordenadas.",
    img: "/illu-mobile-chatbot.jpg",
    href: "/illu-mobile-chatbot.jpg",
  },
];

const results = [
  "Menos trabajo repetitivo y duplicación de información",
  "Más visibilidad diaria (KPIs)",
  "Menos quiebres gracias a alertas y reposición más ordenada",
  "Tiempos de respuesta más rápidos en pedidos/soporte",
];

const stack = [
  "Google Workspace / Sheets",
  "n8n",
  "WhatsApp Business",
  "Dashboards ejecutivos",
  "Automatización + IA aplicada",
];

export default function SocialProofSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
      >
        <div className="flex items-end justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-slate-500">
              Evidencia 
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-[#362263]">
              Proyectos, demos y cómo se ve en la práctica
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              En B2B, la confianza se gana mostrando cómo se ve el trabajo: flujos,
              tableros, automatizaciones y resultados típicos.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-200 transition-colors"
          >
            Pedir demo / diagnóstico →
          </Link>
        </div>

        {/* Bloque A: Cards */}
        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4">
          {demos.map((d) => (
            <div
              key={d.title}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden"
            >
              <div className="relative h-36">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <p className="text-sm font-semibold text-slate-900">{d.title}</p>
                <p className="mt-1 text-sm text-slate-600">{d.desc}</p>

                <div className="mt-4 flex items-center gap-2 text-sm text-slate-700">
                  <FiCheckCircle className="text-[#362263]" />
                  <span className="font-medium">{d.outcome}</span>
                </div>

                <div className="mt-4">
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#362263] hover:underline"
                  >
                    <FiPlay /> Ver demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloque B: Resultados típicos */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50/60 p-5 md:p-6">
          <div className="flex items-center gap-2">
            <FiLayers className="text-[#362263]" />
            <p className="text-sm md:text-base font-semibold text-slate-900">
              Resultados
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {results.map((r) => (
              <div
                key={r}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* Bloque C: Stack */}
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">
            Stack y forma de trabajo (para confianza técnica)
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Nota: usamos herramientas conocidas para que tu equipo adopte el sistema rápido y con control.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
