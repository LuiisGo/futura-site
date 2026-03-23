"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiZap,
  FiMessageCircle,
  FiTrendingUp,
} from "react-icons/fi";

const items = [
  {
    title: "Desarrollo web",
    subtitle: "Presencia digital.",
    points: [
      "Landing / web corporativa",
      "Formularios conectados + trazabilidad",
      "Optimizada para confianza y conversiones",
    ],
    icon: FiGlobe,
    img: "/demo-erp.png",
    cta: { label: "Agendar demo", href: "/contacto" },
  },
  {
    title: "Automatización / sistematización",
    subtitle: "Del dato a la acción, sin rodeos.",
    points: [
      "Lead → CRM/Sheet → email → alertas",
      "Aprobaciones y control por rol",
      "Dashboards operativos",
    ],
    icon: FiZap,
    img: "/demo-automation.png",
    cta: { label: "Agendar demo", href: "/contacto" },
  },
  {
    title: "Bots e IA (Web/WhatsApp)",
    subtitle: "Atención ordenada + captura + handoff humano.",
    points: [
      "Menú y preguntas inteligentes",
      "Captura de datos estructurada",
      "Secretaria virtual o vendedor estrella",
    ],
    icon: FiMessageCircle,
    img: "/demo-bot.png",
    cta: { label: "Agendar demo", href: "/contacto" },
  },
];

const outcomes = [
  {
    title: "Desarrollo web",
    items: [
      "Más solicitudes calificadas desde el sitio",
      "Mensaje claro: qué hacés + por qué confiar",
      "Formularios conectados (registro + seguimiento)",
      "Presencia más profesional para cerrar reuniones",
    ],
  },
  {
    title: "Automatización / sistemas",
    items: [
      "Menos trabajo repetitivo y menos pasos manuales",
      "Menos datos repetidos y menos errores por copia/pega",
      "Visibilidad diaria",
      "Alertas y seguimiento ordenado por responsables",
    ],
  },
  {
    title: "Bots / IA",
    items: [
      "Respuestas más rápidas y atención más ordenada",
      "Captura de datos completa antes del contacto humano",
      "Menos chats perdidos y mejor continuidad de conversación",
      "Resumen para tu equipo (contexto listo para actuar)",
    ],
  },
];

export default function Evidence() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 mb-2">
              Evidencia
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
              Lo que entregamos y cómo se ve en la práctica
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              En B2B, la confianza se gana mostrando el trabajo: webs, sistemas,
              automatizaciones y bots listos para operar.
            </p>
          </div>

          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-colors"
          >
            Pedir demo / diagnóstico <FiArrowRight />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <div className="relative w-full h-44 bg-slate-50">
                  <Image
                    src={it.img}
                    alt={it.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-[#362263]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {it.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 mt-1">
                        {it.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {it.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 text-xs md:text-sm text-slate-700"
                      >
                        <span className="mt-0.5 text-[#362263]">
                          <FiCheck />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={it.cta.href}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#362263] hover:underline"
                  >
                    {it.cta.label} <FiArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resultados típicos */}
        <div className="mt-6 border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#362263]">
              <FiTrendingUp />
            </span>
            <h3 className="text-sm md:text-base font-semibold text-slate-900">
              Resultados
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {outcomes.map((block) => (
              <div
                key={block.title}
                className="bg-white border border-slate-200 rounded-2xl p-4"
              >
                <p className="text-sm font-semibold text-[#362263] mb-3">
                  {block.title}
                </p>
                <ul className="space-y-2">
                  {block.items.map((t) => (
                    <li
                      key={t}
                      className="flex gap-2 text-xs md:text-sm text-slate-700"
                    >
                      <span className="mt-0.5 text-[#362263]">
                        <FiCheck />
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
  );
}
