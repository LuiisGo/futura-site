"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      setCount(0);
    }
  }, []);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    if (inView && hasMounted.current) animate();
  }, [inView, animate]);

  return { count, ref };
}

const stats = [
  { end: 12, suffix: "+", label: "Proyectos entregados" },
  { end: 5, suffix: "+", label: "Sectores atendidos" },
  { end: 780, suffix: "+", label: "Horas de trabajo manual eliminadas" },
  { end: 3, suffix: "+", label: "Países en Centroamérica" },
];

export default function StatsBar() {
  return (
    <section className="w-full border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} delay={i * 0.1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ end, suffix, label, delay }: { end: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(end);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center md:items-start text-center md:text-left"
    >
      <span
        ref={ref}
        className="text-4xl md:text-5xl font-bold text-white tabular-nums leading-none"
      >
        {count}{suffix}
      </span>
      <span className="mt-2 text-sm text-white/35 leading-snug max-w-[160px]">
        {label}
      </span>
    </motion.div>
  );
}
