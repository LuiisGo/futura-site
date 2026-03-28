"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const bullets = [
  "Sin registro — respondé directo",
  "Resultado inmediato con recomendaciones",
  "100% gratis, sin compromiso",
] as const;

export default function TermometroSection() {
  return (
    <section className="bg-[#0b0720] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-10 md:py-14"
      >
        <div className="rounded-3xl bg-white/5 p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: heading + bullets */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] uppercase tracking-wider text-purple-400 font-semibold">
              DIAGNÓSTICO GRATUITO
            </span>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              ¿Qué tan digital está tu empresa?
            </h2>

            <p className="text-white/70 text-sm md:text-base">
              Respondé 5 preguntas en 3 minutos y descubrí tu nivel de
              digitalización.
            </p>

            <ul className="flex flex-col gap-3">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-2 text-sm text-white/80">
                  <FiCheck className="mt-0.5 shrink-0 text-green-400" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Tally iframe */}
          <div className="w-full">
            <iframe
              src="https://tally.so/r/ZjNEb5"
              loading="lazy"
              width="100%"
              height="500"
              frameBorder="0"
              title="Termómetro Operativo FUTURA"
              className="rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
