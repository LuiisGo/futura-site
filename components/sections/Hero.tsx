"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiMessageCircle,
  FiShield,
} from "react-icons/fi";
import { WHATSAPP_URL } from "@/lib/constants";

const solutionChips = [
  "Apps a medida",
  "Sistemas internos",
  "ERP-lite",
  "Dashboards",
  "n8n",
  "WhatsApp",
  "IA aplicada",
  "Guatemala",
];

const kpis = [
  { value: "780+", label: "horas eliminadas" },
  { value: "12+", label: "proyectos" },
  { value: "5+", label: "sectores" },
  { value: "<30s", label: "registro móvil" },
];

const modules = [
  {
    label: "Inventario actualizado",
    detail: "Bodega central y sucursales",
    status: "Activo",
  },
  {
    label: "Ventas por sucursal",
    detail: "Cierre diario y margen",
    status: "En línea",
  },
  {
    label: "Alertas pendientes",
    detail: "Stock bajo y aprobaciones",
    status: "3 alertas",
  },
  {
    label: "Reporte semanal",
    detail: "Listo para gerencia",
    status: "Automático",
  },
];

const moduleIcons = [FiActivity, FiBarChart2, FiClock, FiShield];

const recentRecords = [
  { place: "Sucursal Centro", action: "Salida registrada", time: "09:42" },
  { place: "Bodega Norte", action: "Inventario conciliado", time: "10:05" },
  { place: "Planta Principal", action: "Evidencia cargada", time: "10:18" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white min-h-[88vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient — pure dark */}
        <div className="absolute inset-0 bg-[#0c0714]" />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Ambient glow layers */}
        <motion.div
          animate={{ opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#7C3AED]/18 blur-[150px]"
        />
        <motion.div
          animate={{ opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -left-32 bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#3C88BA]/15 blur-[120px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-20 grid md:grid-cols-[1fr,0.92fr] items-center gap-12 lg:gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Positioning badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="liquid-glass-subtle inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-white/75 mb-6"
          >
            <FiCheckCircle className="text-emerald-300" />
            Apps internas, dashboards y automatización para PYMES
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.06] tracking-tight mb-6">
            Apps y sistemas a medida para ordenar la operación de tu{" "}
            <span className="bg-gradient-to-r from-white via-[#A2CEDC] to-[#7C3AED] bg-clip-text text-transparent">
              PYME.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-white/55 max-w-xl mb-4 leading-relaxed"
          >
            Convertimos Excel, WhatsApp, papel y procesos dispersos en
            herramientas simples para registrar datos, ver reportes y automatizar
            tareas clave en Guatemala y Centroamérica.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-sm md:text-base text-white/42 mb-8 leading-relaxed"
          >
            Sin ERP caro. Sin cambiar todo de golpe. Resultados por sprints.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <a
              href="https://calendar.app.google/6DiM3gfRCPkNrTfG8"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-btn-white inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0c0714] text-sm font-semibold"
            >
              Agendar diagnóstico gratuito
              <FiArrowRight className="text-[#7C3AED]" />
            </a>

            <a
              href="/casos"
              className="apple-btn-ghost inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-sm font-medium text-white/80"
            >
              Ver casos reales
              <FiArrowRight className="text-[#A2CEDC]" />
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.62, duration: 0.6 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-white/35 transition-colors hover:text-white/60"
            aria-label="Hablar con FUTURA por WhatsApp"
          >
            <FiMessageCircle />
            También podés escribirnos por WhatsApp
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
              Soluciones que implementamos
            </p>
            <div className="flex flex-wrap gap-2">
              {solutionChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full text-[11px] text-white/38 border border-white/[0.07] bg-white/[0.025]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — operating system mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <OperatingSystemCard />
        </motion.div>
      </div>
    </section>
  );
}

function OperatingSystemCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#7C3AED]/14 via-transparent to-[#3C88BA]/14 blur-2xl" />
      <div className="relative liquid-glass-strong rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/30">
              Panel operativo FUTURA
            </p>
            <p className="mt-1 text-sm font-semibold text-white/90">
              Sistema interno para operación diaria
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1.5 text-[11px] font-medium text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            En producción
          </div>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-2 gap-3">
            {kpis.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-bold tracking-tight text-white">
                  {metric.value}
                </p>
                <p className="mt-1 text-[11px] text-white/38">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-3">
            {modules.map((item, index) => (
              <DashboardModule key={item.label} item={item} index={index} />
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/32">
                Últimos registros
              </p>
              <span className="text-[11px] text-white/28">Hoy</span>
            </div>
            <div className="space-y-2">
              {recentRecords.map((record) => (
                <div
                  key={`${record.place}-${record.time}`}
                  className="grid grid-cols-[1fr,auto] gap-3 text-xs"
                >
                  <div>
                    <p className="font-medium text-white/70">{record.place}</p>
                    <p className="text-white/32">{record.action}</p>
                  </div>
                  <span className="text-white/32">{record.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 liquid-glass-subtle inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-xs text-white/45">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
        Operación más simple, datos más claros, equipo usando el sistema.
      </div>
    </div>
  );
}

function DashboardModule({
  item,
  index,
}: {
  item: (typeof modules)[number];
  index: number;
}) {
  const ModuleIcon = moduleIcons[index];

  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.45 + index * 0.08, duration: 0.45 }}
      className="flex items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-[#0c0714]/35 px-4 py-3"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.04] text-[#A2CEDC]">
          <ModuleIcon size={15} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white/86">{item.label}</p>
          <p className="text-xs text-white/35">{item.detail}</p>
        </div>
      </div>
      <span className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.035] px-2.5 py-1 text-[10px] text-white/42">
        {item.status}
      </span>
    </motion.div>
  );
}
