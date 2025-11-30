"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "ERP-lite sobre Google",
    description:
      "Sistemas a medida sobre Google Sheets, Forms y Apps Script. Módulos de ventas, inventarios, producción, compras, logística, mantenimiento y calidad.",
    tags: ["Google Sheets", "Apps Script", "Módulos a la medida"],
  },
  {
    title: "Chatbots de WhatsApp inteligentes",
    description:
      "Bots que reciben fotos y datos, aplican OCR, actualizan formularios y responden dudas internas tipo 'pregúntale a la empresa'.",
    tags: ["WhatsApp", "OCR", "RAG interno"],
  },
  {
    title: "Integraciones y RPA",
    description:
      "Conectamos facturación, inventarios, CRM, correo y otras herramientas a través de n8n para eliminar tareas manuales repetitivas.",
    tags: ["n8n", "APIs", "RPA"],
  },
  {
    title: "Dashboards ejecutivos",
    description:
      "Tableros para dueños y gerentes con KPIs de ventas, márgenes, inventarios, rotación, cobranzas y mantenimiento.",
    tags: ["KPIs", "Data-driven"],
  },
  {
    title: "Sitios web one-page de confianza",
    description:
      "Landing pages B2B enfocadas en generar credibilidad, leads y conexión directa con tu operación y CRM.",
    tags: ["Branding", "Leads", "Integrado a tu sistema"],
  },
  {
    title: "SOPs y capacitación con QR",
    description:
      "Procedimientos simples y claros accesibles desde códigos QR pegados en máquinas, bodegas y puntos de trabajo.",
    tags: ["SOP", "QR", "Onboarding"],
  },
  {
    title: "FUTURA Wallet (lealtad)",
    description:
      "Sistema de puntos, cupones, gift cards y campañas con QR/NFC + WhatsApp. Mini CRM de recurrencia para tus mejores clientes.",
    tags: ["Lealtad", "QR/NFC", "Campañas"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
              Lo que hacemos en FUTURA
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              No vendemos un software genérico. Diseñamos sistemas concretos
              para que tu operación funcione mejor, se mida mejor y dependa
              menos de tareas manuales.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold text-[#362263] mb-1.5">
                {s.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-3">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full bg-slate-100 text-[11px] text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
