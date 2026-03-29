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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Evidence() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="liquid-glass rounded-3xl p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/30 mb-2">
              Evidencia
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
              Lo que entregamos y cómo se ve en la práctica
            </h2>
            <p className="text-sm md:text-base text-white/40 max-w-2xl leading-relaxed">
              En B2B, la confianza se gana mostrando el trabajo: webs, sistemas,
              automatizaciones y bots listos para operar.
            </p>
          </div>

          <Link
            href="/contacto"
            className="apple-btn inline-flex items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Pedir demo <FiArrowRight />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-3 mt-8">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                className="liquid-glass-subtle rounded-2xl overflow-hidden cursor-default"
              >
                <div className="relative w-full h-44 bg-white/[0.02]">
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
                    <div className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-[#7C3AED]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white/90">
                        {it.title}
                      </h3>
                      <p className="text-xs text-white/40 mt-0.5">
                        {it.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2 text-xs md:text-sm text-white/50">
                        <span className="mt-0.5 text-[#7C3AED]"><FiCheck size={12} /></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={it.cta.href}
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[#7C3AED] hover:text-[#a855f7] transition-colors"
                  >
                    {it.cta.label} <FiArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Resultados */}
        <div className="mt-6 liquid-glass-subtle rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#7C3AED]"><FiTrendingUp /></span>
            <h3 className="text-sm md:text-base font-semibold text-white/90">Resultados</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {outcomes.map((block) => (
              <div
                key={block.title}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4"
              >
                <p className="text-sm font-semibold text-[#7C3AED] mb-3">{block.title}</p>
                <ul className="space-y-2">
                  {block.items.map((t) => (
                    <li key={t} className="flex gap-2 text-xs md:text-sm text-white/50">
                      <span className="mt-0.5 text-[#7C3AED]"><FiCheck size={12} /></span>
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
