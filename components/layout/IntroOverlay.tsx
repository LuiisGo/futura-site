"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Mostrar solo 1 vez por sesión (simple)
    try {
      const key = "futura_intro_seen_v1";
      const seen = localStorage.getItem(key);

      if (!seen) {
        setShow(true);
        localStorage.setItem(key, String(Date.now()));
        const t = setTimeout(() => setShow(false), 1200); // duración total
        return () => clearTimeout(t);
      }
    } catch {
      // fallback si localStorage falla
      setShow(true);
      const t = setTimeout(() => setShow(false), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0b0720]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/techflow/mesh-bg.webp"
              alt=""
              fill
              priority
              className="object-cover"
            />
            <Image
              src="/techflow/grid-noise-overlay.png"
              alt=""
              fill
              priority
              className="object-cover opacity-40 mix-blend-overlay"
            />
          </div>

          {/* Center lockup (usa tu logo actual en /public) */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/Futurawhite.png"
              alt="FUTURA"
              width={220}
              height={60}
              priority
              className="h-auto w-[180px] md:w-[220px]"
            />
          </motion.div>

          {/* Shine sweep (imagen #8) */}
          <motion.div
            className="pointer-events-none absolute -left-1/2 top-1/2 z-20 h-[260px] w-[900px] -translate-y-1/2 rotate-12"
            style={{
              backgroundImage: "url(/techflow/shine-sweep.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            initial={{ x: "-40%", opacity: 0 }}
            animate={{ x: "140%", opacity: [0, 1, 0] }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeInOut" }}
          />

          {/* Particles (imagen #9) */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              backgroundImage: "url(/techflow/particles-soft.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.35,
            }}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
