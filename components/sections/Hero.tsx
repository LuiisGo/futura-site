"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMessageCircle, FiPlay } from "react-icons/fi";
import Image from "next/image";

const phrases = ["con sistema", "sin papel", "con datos reales", "con FUTURA"];
const TYPE_SPEED = 60;
const ERASE_SPEED = 30;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_ERASE = 500;

function useTypewriter() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (isTyping) {
      if (text.length < currentPhrase.length) {
        return setTimeout(
          () => setText(currentPhrase.slice(0, text.length + 1)),
          TYPE_SPEED
        );
      }
      return setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPE);
    }
    if (text.length > 0) {
      return setTimeout(
        () => setText(text.slice(0, -1)),
        ERASE_SPEED
      );
    }
    setPhraseIndex((i) => (i + 1) % phrases.length);
    return setTimeout(() => setIsTyping(true), PAUSE_AFTER_ERASE);
  }, [text, isTyping, currentPhrase]);

  useEffect(() => {
    const id = tick();
    return () => clearTimeout(id);
  }, [tick]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter();
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(id);
  }, []);

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

        {/* Depth overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0720]/35 via-[#0b0720]/30 to-[#0b0720]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0720]/35 via-transparent to-[#0b0720]/20" />

        {/* Soft glow accents */}
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
          {/* Live badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur px-3 py-1.5 text-[11px] sm:text-xs font-medium text-white/80 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            4 empresas activas en FUTURA ahora
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Tu PYME operando{" "}
            <br />
            <span className="text-[#A2CEDC]">
              {typedText}
              <span
                className={`inline-block w-[2px] h-[1em] bg-[#A2CEDC] ml-0.5 align-middle ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </span>
          </h1>

          <p className="text-sm md:text-base text-white/80 max-w-xl mb-6">
            Digitalizamos y automatizamos tus formularios en papel, WhatsApp y
            sistemas dispersos usando IA y herramientas nocode. Deja que las
            máquinas hagan el trabajo repetitivo y enfócate en hacer crecer la
            empresa.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-[#401662] text-sm font-semibold shadow-lg shadow-black/20 hover:bg-white transition-colors"
              >
                Agendar diagnóstico gratuito
                <FiArrowRight className="text-[#3C88BA]" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
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
            </motion.div>
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
            {/* TODO: Replace with <video> when demo-erp.mp4 is ready */}
            {/* Glass frame */}
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-black/30 bg-white/5 backdrop-blur">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-white/5" />
              <Image
                src="/hero-relaxed-operator.jpg"
                alt="Dueño de PYME relajado mientras su operación corre en automático con FUTURA"
                width={800}
                height={640}
                className="w-full h-full object-cover"
                priority
              />

              {/* Play overlay + "próximamente" badge */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                  <FiPlay className="h-7 w-7 text-white ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/15 px-3 py-1.5 text-[11px] font-medium text-white/90 pointer-events-none">
                <FiPlay className="h-3 w-3" />
                Video demo próximamente
              </div>
            </div>

            {/* Small caption card */}
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
