"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { FiSearch, FiLayout, FiZap, FiRepeat } from "react-icons/fi";

const steps = [
  {
    title: "1. Diagnóstico",
    description:
      "Conversamos sobre tu operación, sistemas actuales y principales fricciones. Mapeamos procesos clave y definimos quick wins.",
  },
  {
    title: "2. Diseño del sistema",
    description:
      "Modelamos cómo debería fluir la información: capturas, aprobaciones, automatizaciones y dashboards para cada rol.",
  },
  {
    title: "3. Implementación por sprints",
    description:
      "Construimos módulos uno por uno (ventas, inventarios, producción, etc.) para que veas valor rápido y puedas ajustar.",
  },
  {
    title: "4. Acompañamiento y mejora",
    description:
      "Medimos, ajustamos y documentamos. Dejamos SOPs claros y capacitamos a tu equipo para que el sistema sea sostenible.",
  },
];

export default function Methodology() {
  const icons = useMemo(
    () => [<FiSearch key="s" />, <FiLayout key="d" />, <FiZap key="z" />, <FiRepeat key="r" />],
    []
  );

  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: false });

  // Scroll progress dentro de esta sección (para “dibujar” el flujo)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive(idx);
  });

  return (
    <section ref={sectionRef as any} className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: inView ? 1 : 0.98, y: inView ? 0 : 8 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
      >
        {/* TechFlow background (sutil, premium, sin oscurecer demasiado) */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/techflow/mesh-bg.webp"
            alt=""
            fill
            className="object-cover opacity-[0.10]"
            priority={false}
          />
          <Image
            src="/techflow/grid-noise-overlay.png"
            alt=""
            fill
            className="object-cover opacity-[0.28] mix-blend-multiply"
            priority={false}
          />
          <Image
            src="/techflow/flow-lines-01.png"
            alt=""
            fill
            className="object-cover opacity-[0.10]"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/85" />
        </div>

        <div className="relative p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
            Metodología simple, enfocada en resultados.
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-6 max-w-2xl">
            No se trata de “implementar software”, sino de construir un sistema que tu equipo
            realmente use. Trabajamos con una metodología clara, transparente y sin tecnicismos
            innecesarios.
          </p>

          {/* Pipeline */}
          <div className="relative">
            {/* Desktop line (horizontal) */}
            <div className="hidden md:block absolute left-6 right-6 top-[14px] h-px bg-slate-200" />
            <motion.div
              className="hidden md:block absolute left-6 top-[14px] h-px bg-[#3C88BA] origin-left"
              style={{ scaleX: lineScaleX }}
            />

            {/* Mobile line (vertical) */}
            <div className="md:hidden absolute left-3 top-1 bottom-1 w-px bg-slate-200" />
            <motion.div
              className="md:hidden absolute left-3 top-1 w-px bg-[#3C88BA] origin-top"
              style={{ scaleY: lineScaleY }}
            />

            <div className="grid md:grid-cols-4 gap-4 md:gap-4 pt-7 md:pt-8">
              {steps.map((step, i) => {
                const isActive = i === active;

                return (
                  <motion.div
                    key={step.title}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: inView ? 1 : 0.95, y: inView ? 0 : 8 }}
                    transition={{ duration: 0.45, delay: i * 0.04, ease: "easeOut" }}
                    className="relative"
                  >
                    {/* Node (desktop) */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[-18px]">
                      <div
                        className={[
                          "h-9 w-9 rounded-2xl flex items-center justify-center border backdrop-blur",
                          isActive
                            ? "bg-white border-[#3C88BA]/30 shadow-[0_0_24px_rgba(60,136,186,0.18)]"
                            : "bg-white border-slate-200",
                        ].join(" ")}
                      >
                        <span className={isActive ? "text-[#3C88BA]" : "text-slate-500"}>
                          {icons[i]}
                        </span>
                      </div>
                    </div>

                    {/* Node (mobile) */}
                    <div className="md:hidden absolute left-[2px] top-[18px]">
                      <div
                        className={[
                          "h-6 w-6 rounded-xl flex items-center justify-center border bg-white",
                          isActive ? "border-[#3C88BA]/35" : "border-slate-200",
                        ].join(" ")}
                      >
                        <span className={isActive ? "text-[#3C88BA] text-[12px]" : "text-slate-500 text-[12px]"}>
                          {icons[i]}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <motion.div
                      layout
                      animate={{
                        y: isActive ? -2 : 0,
                        scale: isActive ? 1.02 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className={[
                        "h-full rounded-2xl p-4 border transition-colors",
                        isActive
                          ? "border-[#3C88BA]/25 bg-white shadow-sm"
                          : "border-slate-200 bg-slate-50/60",
                      ].join(" ")}
                    >
                      {/* subtle glow (activo) */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[inset_0_0_0_1px_rgba(60,136,186,0.12)]" />
                      )}

                      <h3 className="text-sm font-semibold text-[#362263] mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600">
                        {step.description}
                      </p>

                      {/* micro underline accent */}
                      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                      {/* mini “progress bar” inside active card (sin cambiar textos) */}
                      <motion.div
                        className="mt-3 h-[3px] rounded-full bg-slate-200 overflow-hidden"
                        initial={false}
                      >
                        <motion.div
                          className="h-full bg-[#3C88BA]"
                          initial={false}
                          animate={{ width: isActive ? "100%" : "20%" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
