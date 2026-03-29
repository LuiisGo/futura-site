"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

function WalletDemoModal({ onClose }: { onClose: () => void }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="wallet-demo-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          key="wallet-demo-modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl w-full mx-4 rounded-2xl overflow-hidden liquid-glass-strong"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08]">
            <span className="text-sm font-semibold text-white">
              FUTURA Wallet &mdash; Demo
            </span>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white transition-colors text-lg leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Cerrar"
            >
              &#x2715;
            </button>
          </div>

          {/* Body */}
          <div className="relative">
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-white/5 h-[400px] md:h-[600px]" />
            )}
            <iframe
              src="https://futura-wallet.onrender.com"
              title="FUTURA Wallet Demo"
              className="w-full h-[400px] md:h-[600px]"
              onLoad={() => setLoaded(true)}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export default function Wallet() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-center liquid-glass rounded-3xl px-5 md:px-8 py-7 md:py-10"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/30 mb-2">
              FUTURA WALLET
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Lealtad y club de clientes, conectado a tu operación.
            </h2>
            <p className="text-sm md:text-base text-white/45 mb-5 leading-relaxed">
              FUTURA Wallet es una solución de lealtad basada en QR/NFC + WhatsApp
              que combina automatización e inteligencia artificial para segmentar
              mejor a tus clientes. Asigna puntos, cupones y gift cards mientras
              construyes un mini-CRM de recurrencia sin salir de tu ecosistema.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-white/45">
              <li className="flex gap-2">
                <span className="text-[#7C3AED] mt-0.5">&#x2022;</span>
                Identificación rápida de clientes con QR o tarjeta NFC.
              </li>
              <li className="flex gap-2">
                <span className="text-[#7C3AED] mt-0.5">&#x2022;</span>
                Puntos y recompensas configurables por segmento.
              </li>
              <li className="flex gap-2">
                <span className="text-[#7C3AED] mt-0.5">&#x2022;</span>
                Campañas dirigidas por WhatsApp potenciadas con IA.
              </li>
              <li className="flex gap-2">
                <span className="text-[#7C3AED] mt-0.5">&#x2022;</span>
                Integración con tu sistema operativo digital y dashboards.
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="apple-btn-white bg-white text-[#0c0714] rounded-full px-6 py-3 text-sm font-semibold mt-6"
            >
              Ver demo en vivo &rarr;
            </button>
          </div>
          <div className="space-y-3">
            <div className="overflow-hidden rounded-2xl liquid-glass-subtle relative">
              <iframe
                src="https://futura-wallet.onrender.com"
                title="FUTURA Wallet Preview"
                className="w-full h-[320px] pointer-events-none"
                loading="lazy"
              />
              <button
                onClick={() => setShowModal(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] transition-all hover:bg-black/30"
              >
                <span className="liquid-glass rounded-xl px-5 py-3 text-sm font-semibold text-white">
                  Click para interactuar con el demo &rarr;
                </span>
              </button>
            </div>
            <p className="text-[11px] text-white/30">
              FUTURA Wallet se conecta con tus ventas, inventarios y campañas para
              premiar a los clientes correctos, en el momento correcto, con ayuda
              de automatización e IA.
            </p>
          </div>
        </motion.div>
      </section>

      {showModal && <WalletDemoModal onClose={() => setShowModal(false)} />}
    </>
  );
}
