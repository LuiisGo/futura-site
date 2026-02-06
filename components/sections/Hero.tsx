"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background: mesh + grid/noise overlay (TechFlow) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/techflow/mesh-bg.webp"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <Image
          src="/techflow/grid-noise-overlay.png"
          alt=""
          fill
          priority
          className="object-cover opacity-45 mix-blend-overlay"
        />

        {/* Depth overlays (para que el texto siempre sea legible) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0720]/35 via-[#0b0720]/30 to-[#0b0720]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0720]/35 via-transparent to-[#0b0720]/20" />

        {/* Soft glow accents (premium, no neon duro) */}
        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-[3rem] bg-[#A2CEDC]/15 blur-3xl" />
        <div className="absolute -left-32 bottom-[-140px] h-96 w-96 rounded-full bg-[#6B4AA3]/18 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1"
        >
          <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white/70 mb-4">
            FUTURA • DIGITALIZACIÓN, AUTOMATIZACIÓN E IA PARA PYMES
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Digitalización y automatización{" "}
            <span className="text-white/90">con IA aplicada</span>
            <br />
            <span className="text-white">para PYMES</span>
          </h1>

          <p className="text-sm md:text-base text-white/80 max-w-xl mb-6">
            Digitalizamos y automatizamos tus formularios en papel, WhatsApp y
            sistemas dispersos usando IA y herramientas nocode. Deja que las
            máquinas hagan el trabajo repetitivo y enfócate en hacer crecer la
            empresa.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-[#401662] text-sm font-semibold shadow-lg shadow-black/20 hover:bg-white transition-colors"
            >
              Agendar diagnóstico gratuito
              <FiArrowRight className="text-[#3C88BA]" />
            </Link>

            <a
              href="https://wa.me/50233813895"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/25 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors"
              aria-label="Hablar por WhatsApp"
            >
              <FiMessageCircle />
              Hablar por WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-white/75">
            {[
              "Digitalización de procesos",
              "Automatización con n8n",
              "IA aplicada al negocio",
              "Bots de WhatsApp",
              "FUTURA Wallet",
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="flex-1 w-full"
        >
          <div className="relative max-w-md ml-auto">
            {/* Glass frame */}
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/30 bg-white/5 backdrop-blur">
              {/* subtle inner gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/5" />
              <Image
                src="/hero-relaxed-operator.jpg"
                alt="Dueño de PYME relajado mientras su operación parece correr en automático con FUTURA"
                width={800}
                height={640}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Small caption card (premium micro-info) */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-4 py-3 text-xs text-white/75">
              <span className="inline-block h-2 w-2 rounded-full bg-[#A2CEDC]/70" />
              Work less, live more — operación más simple, datos más claros.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
