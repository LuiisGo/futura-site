"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGift, FiUsers, FiBarChart2, FiZap } from "react-icons/fi";

const features = [
  {
    icon: FiGift,
    text: "Programa de puntos y recompensas personalizable",
  },
  {
    icon: FiUsers,
    text: "Club de clientes con segmentación automática",
  },
  {
    icon: FiBarChart2,
    text: "Dashboard en tiempo real de métricas de lealtad",
  },
  {
    icon: FiZap,
    text: "Integración directa con tu sistema de ventas",
  },
];

const sectors = [
  {
    title: "Retail",
    description:
      "Fidelizá a tus clientes con puntos por compra, cupones personalizados y promociones segmentadas.",
  },
  {
    title: "Combustibles",
    description:
      "Programa de lealtad para flotillas y clientes frecuentes. Controlá consumo y premiá la recurrencia.",
  },
  {
    title: "Agroindustria",
    description:
      "Conectá a distribuidores y compradores con incentivos por volumen y frecuencia de compra.",
  },
];

export default function WalletPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 border border-white/20 mb-6"
          >
            FUTURA WALLET
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-10"
          >
            Tu lealtad y club de clientes, conectado a tu operación
          </motion.h1>

          <div className="max-w-xl mx-auto space-y-4">
            {features.map((f, i) => (
              <motion.div
                key={f.text}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <f.icon size={20} className="text-white" />
                </div>
                <span className="text-white/80">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo embed */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-4"
        >
          Mirá la demo en vivo
        </motion.h2>
        <p className="text-white/60 text-center mb-8 max-w-xl mx-auto">
          Explorá el prototipo funcional de FUTURA Wallet directamente desde tu
          navegador.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden liquid-glass-subtle"
        >
          {/* Loading skeleton */}
          <div className="absolute inset-0 flex items-center justify-center bg-white/[0.03] animate-pulse">
            <div className="w-32 h-4 rounded bg-white/10" />
          </div>
          <iframe
            src="https://futura-wallet.onrender.com"
            width="100%"
            height={600}
            loading="lazy"
            title="FUTURA Wallet Demo"
            className="relative z-10 border-0"
          />
        </motion.div>
      </section>

      {/* Sectors */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-12"
        >
          ¿Para quién es FUTURA Wallet?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="liquid-glass-subtle rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {sector.title}
              </h3>
              <p className="text-sm text-white/60">{sector.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-4 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/contacto"
            className="apple-btn inline-block px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold"
          >
            Agenda una demo personalizada
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
