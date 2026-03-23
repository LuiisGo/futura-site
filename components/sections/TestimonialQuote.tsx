"use client";

// components/sections/TestimonialQuote.tsx
// → page.tsx: DESPUÉS de <Wallet />, ANTES de <CTASection />
// Lugar de mayor conversión — el visitante que llegó hasta acá y ve un resultado real, convierte.

import { motion } from "framer-motion";

export default function TestimonialQuote() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white border border-slate-200 rounded-3xl px-8 py-10 text-center shadow-sm"
      >
        <span
          className="absolute -top-5 left-1/2 -translate-x-1/2 text-6xl text-[#362263]/15 font-serif leading-none select-none"
          aria-hidden="true"
        >
          "
        </span>

        <p className="text-lg md:text-xl text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
          Antes tardábamos 15 horas a la semana solo en registrar los
          movimientos de inventario en papel. Ahora cada empleado llena un
          formulario en 30 segundos desde el celular y veo todo en tiempo real.
          El dinero cuadra exacto.
        </p>

        <div className="mt-6 flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-[#362263]">
            Lechería San Antonio
          </span>
          <span className="text-xs text-slate-400">
            Agroindustria · 4 tiendas + bodega central · Guatemala
          </span>
        </div>
      </motion.div>
    </section>
  );
}
