"use client";

import { motion } from "framer-motion";

export default function Wallet() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-center bg-[#362263] text-white rounded-3xl px-5 md:px-8 py-7 md:py-10"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#B3B1CA] mb-2">
            FUTURA WALLET
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Lealtad y club de clientes, conectado a tu operación.
          </h2>
          <p className="text-sm md:text-base text-slate-100/90 mb-4">
            FUTURA Wallet es una solución de lealtad basada en QR/NFC +
            WhatsApp. Asigna puntos, cupones y gift cards, mientras construyes
            un mini-CRM de recurrencia.
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-slate-100/90">
            <li>• Identificación rápida de clientes con QR o tarjeta NFC.</li>
            <li>• Puntos y recompensas configurables por segmento.</li>
            <li>• Campañas dirigidas por WhatsApp según comportamiento real.</li>
            <li>• Integración con tu ERP-lite y dashboards.</li>
          </ul>
        </div>
        <div className="bg-white/5 border border-white/20 rounded-2xl p-4 text-xs text-slate-100/95">
          <p className="font-semibold mb-2">Ejemplo de flujo:</p>
          <ol className="list-decimal list-inside space-y-1.5">
            <li>El cliente escanea su QR al comprar.</li>
            <li>Se registran puntos y compra en tu sistema.</li>
            <li>n8n actualiza su estado en la base y dispara campañas.</li>
            <li>WhatsApp envía cupones o recordatorios personalizados.</li>
          </ol>
          <p className="mt-3 text-[11px] text-slate-200/90">
            Todo sobre un stack accesible, sin necesidad de invertir en
            plataformas de lealtad gigantes.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
