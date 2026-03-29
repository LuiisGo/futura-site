"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMessageCircle, FiPlay } from "react-icons/fi";
import Image from "next/image";

/* ── Bilingual rotating phrases — cycles ES ↔ EN, never disappears ── */
const phrases = [
  { text: "con sistema", lang: "es" },
  { text: "with systems", lang: "en" },
  { text: "sin papel", lang: "es" },
  { text: "paperless", lang: "en" },
  { text: "con datos reales", lang: "es" },
  { text: "with real data", lang: "en" },
  { text: "con FUTURA", lang: "es" },
  { text: "with FUTURA", lang: "en" },
];

const INTERVAL = 2800;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden text-white min-h-[90vh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient — pure dark */}
        <div className="absolute inset-0 bg-[#0c0714]" />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Ambient glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/20 blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -left-32 bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#3C88BA]/15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-[#22d3ee]/10 blur-[100px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-24 flex flex-col md:flex-row items-center gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 max-w-xl"
        >
          {/* Live badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="liquid-glass-subtle inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-white/80 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            4 empresas activas en FUTURA ahora
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            <span className="text-white">Tu PYME operando</span>
            <br />
            <span className="relative inline-grid overflow-hidden" style={{ gridTemplateAreas: "'slot'" }}>
              {/* Invisible sizer — always renders the longest phrase to hold width */}
              <span className="invisible col-start-1 row-start-1 whitespace-nowrap" style={{ gridArea: "slot" }}>
                {phrases.reduce((a, b) => a.text.length >= b.text.length ? a : b).text}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="col-start-1 row-start-1 bg-gradient-to-r from-[#7C3AED] via-[#A2CEDC] to-[#3C88BA] bg-clip-text text-transparent whitespace-nowrap"
                  style={{ gridArea: "slot" }}
                >
                  {phrases[index].text}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg text-white/50 max-w-lg mb-8 leading-relaxed"
          >
            Digitalizamos y automatizamos tus formularios en papel, WhatsApp y
            sistemas dispersos usando IA y herramientas nocode.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <Link
              href="/contacto"
              className="apple-btn-white inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0c0714] text-sm font-semibold"
            >
              Agendar diagnóstico gratuito
              <FiArrowRight className="text-[#7C3AED]" />
            </Link>

            <a
              href="https://wa.me/50233813895"
              target="_blank"
              rel="noreferrer"
              className="apple-btn-ghost inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 text-sm font-medium text-white/80"
              aria-label="Hablar por WhatsApp"
            >
              <FiMessageCircle />
              WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {[
              "Digitalización",
              "n8n",
              "IA aplicada",
              "WhatsApp Bots",
              "FUTURA Wallet",
            ].map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full text-[11px] text-white/40 border border-white/8 bg-white/[0.02]"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — glass card with image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full max-w-md"
        >
          <div className="relative">
            {/* Glass frame */}
            <div className="liquid-glass-strong rounded-3xl overflow-hidden">
              <Image
                src="/hero-relaxed-operator.jpg"
                alt="Dueño de PYME relajado mientras su operación corre en automático con FUTURA"
                width={800}
                height={640}
                className="w-full h-full object-cover"
                priority
              />

              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="liquid-glass flex h-16 w-16 items-center justify-center rounded-full">
                  <FiPlay className="h-6 w-6 text-white ml-0.5" />
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 liquid-glass-subtle inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-medium text-white/80 pointer-events-none">
                <FiPlay className="h-3 w-3" />
                Video demo próximamente
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 liquid-glass-subtle inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-xs text-white/50">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/60" />
              Work less, live more — operación más simple, datos más claros.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
