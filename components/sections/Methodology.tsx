"use client";

import { useMemo, useRef, useState } from "react";
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
    <section ref={sectionRef as any} className="max-w-6xl mx-auto px-4 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: inView ? 1 : 0.98, y: inView ? 0 : 8 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl liquid-glass"
      >
        {/* Subtle ambient glow */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#7C3AED]/8 blur-[100px] pointer-events-none" />

        <div className="relative p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
            Metodología simple, enfocada en resultados.
          </h2>
          <p className="text-sm md:text-base text-white/40 mb-8 max-w-2xl leading-relaxed">
            No se trata de &ldquo;implementar software&rdquo;, sino de construir un sistema que tu equipo
            realmente use. Trabajamos con una metodología clara, transparente y sin tecnicismos
            innecesarios.
          </p>

          {/* Pipeline */}
          <div className="relative">
            {/* Desktop line */}
            <div className="hidden md:block absolute left-6 right-6 top-[14px] h-px bg-white/[0.06]" />
            <motion.div
              className="hidden md:block absolute left-6 top-[14px] h-px bg-[#7C3AED] origin-left"
              style={{ scaleX: lineScaleX }}
            />

            {/* Mobile line */}
            <div className="md:hidden absolute left-3 top-1 bottom-1 w-px bg-white/[0.06]" />
            <motion.div
              className="md:hidden absolute left-3 top-1 w-px bg-[#7C3AED] origin-top"
              style={{ scaleY: lineScaleY }}
            />

            <div className="grid md:grid-cols-4 gap-4 md:gap-3 pt-7 md:pt-8">
              {steps.map((step, i) => {
                const isActive = i === active;

                return (
                  <motion.div
                    key={step.title}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: inView ? 1 : 0.95, y: inView ? 0 : 8 }}
                    transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    {/* Node (desktop) */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[-18px]">
                      <div
                        className={[
                          "h-8 w-8 rounded-xl flex items-center justify-center border transition-all duration-500",
                          isActive
                            ? "bg-[#7C3AED]/15 border-[#7C3AED]/30 shadow-[0_0_20px_rgba(124,58,237,0.2)]"
                            : "bg-white/[0.04] border-white/[0.08]",
                        ].join(" ")}
                      >
                        <span className={`transition-colors duration-500 text-sm ${isActive ? "text-[#7C3AED]" : "text-white/30"}`}>
                          {icons[i]}
                        </span>
                      </div>
                    </div>

                    {/* Node (mobile) */}
                    <div className="md:hidden absolute left-[2px] top-[18px]">
                      <div
                        className={[
                          "h-6 w-6 rounded-lg flex items-center justify-center border transition-all duration-500",
                          isActive ? "bg-[#7C3AED]/15 border-[#7C3AED]/30" : "bg-white/[0.04] border-white/[0.08]",
                        ].join(" ")}
                      >
                        <span className={`text-[12px] transition-colors duration-500 ${isActive ? "text-[#7C3AED]" : "text-white/30"}`}>
                          {icons[i]}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <motion.div
                      layout
                      animate={{
                        y: isActive ? -2 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className={[
                        "h-full rounded-2xl p-4 border transition-all duration-500",
                        isActive
                          ? "border-[#7C3AED]/20 bg-white/[0.06]"
                          : "border-white/[0.06] bg-white/[0.02]",
                      ].join(" ")}
                    >
                      <h3 className="text-sm font-semibold text-white mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-xs md:text-sm text-white/40 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                      <motion.div className="mt-3 h-[2px] rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          className="h-full bg-[#7C3AED]"
                          initial={false}
                          animate={{ width: isActive ? "100%" : "15%" }}
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
