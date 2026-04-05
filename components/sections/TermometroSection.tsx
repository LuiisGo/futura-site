"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { TALLY_TERMOMETRO } from "@/lib/constants";

const bullets = [
  "Sin registro — respondé directo",
  "Resultado inmediato con recomendaciones",
  "100% gratis, sin compromiso",
] as const;

export default function TermometroSection() {
  return (
    <section className="bg-[#0c0714] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-4 py-16 md:py-20"
      >
        <div className="liquid-glass rounded-3xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: heading + bullets */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#7C3AED] font-semibold">
              DIAGNÓSTICO EXPRESS
            </span>

            <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
              Descubrí en 3 minutos{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#3C88BA] bg-clip-text text-transparent">
                cuánto estás perdiendo
              </span>{" "}
              por no digitalizar.
            </h2>

            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              5 preguntas rápidas. Resultado inmediato con recomendaciones
              personalizadas para tu empresa.
            </p>

            <ul className="flex flex-col gap-3">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-white/60">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <FiCheck className="text-emerald-400 text-[10px]" />
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Tally iframe */}
          <div className="w-full">
            <iframe
              src={TALLY_TERMOMETRO}
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              title="Termómetro Operativo FUTURA"
              className="rounded-2xl border border-white/[0.06]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
