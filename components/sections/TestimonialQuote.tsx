"use client";

import { motion } from "framer-motion";

export default function TestimonialQuote() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative liquid-glass rounded-3xl px-8 py-12 text-center"
      >
        <span
          className="absolute -top-5 left-1/2 -translate-x-1/2 text-6xl text-[#7C3AED]/15 font-serif leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
          Antes tardábamos 15 horas a la semana solo en registrar los
          movimientos de inventario en papel. Ahora cada empleado llena un
          formulario en 30 segundos desde el celular y veo todo en tiempo real.
          El dinero cuadra exacto.
        </p>

        <div className="mt-8 flex flex-col items-center gap-1">
          <span className="text-sm font-bold text-white">
            Lechería San Antonio
          </span>
          <span className="text-xs text-white/35">
            Agroindustria · 4 tiendas + bodega central · Guatemala
          </span>
        </div>
      </motion.div>
    </section>
  );
}
