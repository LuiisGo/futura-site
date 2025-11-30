"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#362263] via-[#362263] to-[#3C88BA] text-white">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -right-32 -top-40 w-80 h-80 bg-[#3C88BA] rounded-3xl rotate-12 blur-3xl" />
        <div className="absolute -left-20 bottom-[-120px] w-80 h-80 bg-[#B3B1CA] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B3B1CA] mb-4">
            FUTURA • DIGITALIZACIÓN, AUTOMATIZACIÓN E IA PARA PYMES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Digitalización y automatización con IA aplicada
            
            para PYMES 
          </h1>
          <p className="text-sm md:text-base text-slate-100/90 max-w-xl mb-6">
            Digitalizamos y automatizamos tus formularios en papel, WhatsApp y
            sistemas dispersos usando inteligencia artificial y herramientas
            nocode. Deja que las máquinas hagan el trabajo repetitivo y
            enfócate en hacer crecer la empresa.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#362263] text-sm font-semibold shadow-md hover:bg-slate-100 transition-colors"
            >
              Agendar diagnóstico gratuito
              <FiArrowRight className="text-[#3C88BA]" />
            </Link>
            <a
              href="https://wa.me/50233813895"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/40 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <FiMessageCircle />
              Hablar por WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-slate-100/80">
            {[
              "Digitalización de procesos",
              "Automatización con n8n",
              "IA aplicada al negocio",
              "Bots de WhatsApp",
              "FUTURA Wallet",
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full border border-white/25 bg-white/5"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 w-full"
        >
          <div className="relative max-w-md ml-auto">
            <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl bg-white/5 backdrop-blur">
              <Image
                src="/hero-relaxed-operator.jpg"
                alt="Dueño de PYME relajado mientras su operación corre en automático con FUTURA"
                width={800}
                height={640}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
