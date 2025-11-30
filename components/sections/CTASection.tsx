"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-r from-[#362263] to-[#3C88BA] text-white rounded-3xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Agendemos un diagnóstico gratuito para tu empresa.
          </h2>
          <p className="text-sm md:text-base text-slate-100/90 max-w-xl">
            En 30–45 minutos revisamos tus procesos, identificamos quick wins y
            te presentamos un plan concreto basado en digitalización de
            procesos, automatización con n8n e inteligencia artificial aplicada,
            bots de WhatsApp y, cuando hace falta, una capa tipo ERP-lite.
          </p>
          <p className="text-[11px] text-slate-100/80 mt-2">
            Horarios: lunes a viernes de 10:00 a 19:00 (hora Guatemala).
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full md:w-auto">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#362263] text-sm font-semibold shadow-md hover:bg-slate-100 transition-colors"
          >
            Agendar diagnóstico
          </Link>
          <p className="text-[11px] text-slate-100/80">
            ¿Prefieres WhatsApp? Escríbenos al{" "}
            <a
              href="https://wa.me/50233813895"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              +502 3381 3895
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
