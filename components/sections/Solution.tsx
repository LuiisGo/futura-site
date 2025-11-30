"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Solution() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-10 items-start"
      >
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-3">
            Digitalización y automatización con inteligencia artificial,
            <br />
            diseñada a la medida de tu operación.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-4">
            No te obligamos a abandonar lo que ya usas. Tomamos tus formatos
            físicos, hojas sueltas, WhatsApp y sistemas actuales y los
            convertimos en flujos digitales donde la automatización y la
            inteligencia artificial se encargan del trabajo repetitivo y de
            darte mejores decisiones.
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-slate-700">
            <li>
              • <span className="font-semibold">Captura estructurada:</span>{" "}
              digitalizamos formularios en papel, checklists y formatos físicos
              en apps y formularios simples, listos para automatizar e integrar
              con IA.
            </li>
            <li>
              • <span className="font-semibold">Flujos claros:</span> ventas,
              pedidos, inventarios, producción, mantenimiento, tickets y más
              pasan de ser pasos sueltos a procesos bien definidos.
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                Automatización con n8n e IA aplicada:
              </span>{" "}
              bots que reciben fotos y mensajes, extracción de datos (OCR),
              clasificación automática y recordatorios inteligentes.
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                Dashboards ejecutivos y asistentes con IA:
              </span>{" "}
              KPIs claros para dueños y gerentes, más asistentes internos que
              pueden responder preguntas sobre tus datos y procesos.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src="/illu-dashboards.jpg"
              alt="Dashboards y paneles de control de FUTURA"
              width={900}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs md:text-sm text-slate-600">
            Cada implementación es distinta, pero el objetivo es el mismo:
            construir una capa operativa digital, automatizada e inteligente
            que te dé visibilidad real y reduzca al mínimo el trabajo manual
            repetitivo.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
