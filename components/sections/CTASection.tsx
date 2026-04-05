"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden liquid-glass-strong rounded-3xl px-6 md:px-10 py-10 md:py-14"
      >
        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#7C3AED]/15 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-[#3C88BA]/10 blur-[80px] pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Agendemos un diagnóstico gratuito para tu empresa.
            </h2>
            <p className="text-sm md:text-base text-white/45 leading-relaxed">
              En 30–45 minutos revisamos tus procesos, identificamos quick wins y
              te presentamos un plan concreto basado en digitalización de
              procesos, automatización con n8n e inteligencia artificial aplicada.
            </p>
            <p className="text-[11px] text-white/25 mt-3">
              Horarios: lunes a viernes de 10:00 a 19:00 (hora Guatemala).
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/contacto"
              className="apple-btn-white inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0c0714] text-sm font-semibold"
            >
              Agendar diagnóstico
              <FiArrowRight className="text-[#7C3AED]" />
            </Link>
            <p className="text-[11px] text-white/30 text-center md:text-left">
              ¿Prefieres WhatsApp? Escríbenos al{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-white/50 transition-colors"
              >
                +502 3381 3895
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
