"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

interface ChapterItem {
  label: string;
  description: string;
}

interface Chapter {
  id: string;
  title: string;
  heading: string;
  items: ChapterItem[];
  image: string;
  imageAlt: string;
}

const chapters: Chapter[] = [
  {
    id: "problema",
    title: "El Problema",
    heading:
      "Si todo está en papel, WhatsApp y archivos sueltos, ya no estás creciendo.",
    items: [
      {
        label: "Información dispersa",
        description:
          "Formatos en papel, carpetas físicas, WhatsApp, correos, fotos en el celular… nadie sabe dónde está la última versión de nada.",
      },
      {
        label: "Dependencia de personas clave",
        description:
          'La operación depende de "la persona que sabe". Si falta, todo se atrasa o se detiene.',
      },
      {
        label: "Cero visibilidad real",
        description:
          "No hay dashboards ni indicadores claros. Se decide por intuición, no por datos.",
      },
      {
        label: "Tecnología que no encaja",
        description:
          "ERPs gigantes, caros y rígidos que no se adaptan a tu realidad… o seguir como siempre con papel y chats.",
      },
    ],
    image: "/illustrations/caos-pyme.png",
    imageAlt: "Ilustración del caos operativo en una PYME",
  },
  {
    id: "solucion",
    title: "La Solución",
    heading:
      "Un sistema digital que se adapta a tu empresa, no al revés.",
    items: [
      {
        label: "Procesos digitales desde el celular",
        description:
          "Formularios, checklists y flujos que tu equipo puede usar desde cualquier dispositivo, sin capacitación compleja.",
      },
      {
        label: "Datos en tiempo real",
        description:
          "Dashboards ejecutivos con KPIs claros para tomar decisiones basadas en datos, no en intuición.",
      },
      {
        label: "Automatización de tareas repetitivas",
        description:
          "Flujos automáticos con n8n que eliminan el trabajo manual: notificaciones, asignaciones, reportes y más.",
      },
      {
        label: "IA donde suma valor",
        description:
          "Asistentes internos, extracción de datos (OCR), clasificación automática y respuestas inteligentes sobre tus procesos.",
      },
    ],
    image: "/automation-graph.webp",
    imageAlt: "Gráfico de automatización y flujos digitales",
  },
  {
    id: "implementacion",
    title: "Cómo lo Implementamos",
    heading:
      "Sprint por sprint, empezando por lo que más te duele.",
    items: [
      {
        label: "Diagnóstico gratuito (30 min)",
        description:
          "Entendemos tu operación, identificamos cuellos de botella y definimos prioridades juntos.",
      },
      {
        label: "Diseño del sistema",
        description:
          "Mapeamos los flujos clave y diseñamos la arquitectura digital a la medida de tu empresa.",
      },
      {
        label: "Implementación por sprints",
        description:
          "Entregamos resultados cada 2 semanas. Empezamos por lo que más impacto tiene en tu día a día.",
      },
      {
        label: "Acompañamiento y mejora",
        description:
          "No desaparecemos después de entregar. Te acompañamos para ajustar, escalar y seguir mejorando.",
      },
    ],
    image: "/dashboards-scene.webp",
    imageAlt: "Escena de dashboards y paneles de control implementados",
  },
];

function ChapterCard({
  chapter,
  index,
}: {
  chapter: Chapter;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED] mb-2">
        Capítulo {index + 1}
      </p>
      <h3 className="text-xl md:text-2xl font-semibold text-[#362263] mb-3">
        {chapter.heading}
      </h3>
      <div className="space-y-3 mb-6">
        {chapter.items.map((item) => (
          <div key={item.label} className="flex gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full bg-[#3C88BA]" />
            <div>
              <p className="text-sm font-semibold text-[#362263]">
                {item.label}
              </p>
              <p className="text-xs md:text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-100">
        <Image
          src={chapter.image}
          alt={chapter.imageAlt}
          width={800}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    </motion.div>
  );
}

function ProgressNav({
  chapterRefs,
}: {
  chapterRefs: React.RefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <nav className="space-y-0" aria-label="Progreso de la historia">
      {chapters.map((chapter, index) => (
        <ProgressDot
          key={chapter.id}
          chapter={chapter}
          index={index}
          chapterRefs={chapterRefs}
        />
      ))}
    </nav>
  );
}

function ProgressDot({
  chapter,
  index,
  chapterRefs,
}: {
  chapter: Chapter;
  index: number;
  chapterRefs: React.RefObject<(HTMLDivElement | null)[]>;
}) {
  const el = chapterRefs.current?.[index] ?? null;
  const isActive = useIsElementInView(el);

  return (
    <div className="flex items-start gap-3">
      {/* Vertical line + dot */}
      <div className="flex flex-col items-center">
        {index > 0 && (
          <div
            className={`w-px h-6 transition-colors duration-300 ${
              isActive ? "bg-[#7C3AED]" : "bg-slate-200"
            }`}
          />
        )}
        <div
          className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${
            isActive
              ? "border-[#7C3AED] bg-[#7C3AED]"
              : "border-slate-300 bg-white"
          }`}
        />
        {index < chapters.length - 1 && (
          <div
            className={`w-px h-6 transition-colors duration-300 ${
              isActive ? "bg-[#7C3AED]" : "bg-slate-200"
            }`}
          />
        )}
      </div>

      {/* Label */}
      <button
        type="button"
        onClick={() => {
          chapterRefs.current?.[index]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
        className={`text-sm font-medium transition-colors duration-300 text-left pt-px ${
          isActive ? "text-[#7C3AED]" : "text-slate-400"
        }`}
      >
        {chapter.title}
      </button>
    </div>
  );
}

/**
 * Small hook that wraps framer-motion's useInView for a nullable element.
 * We create a stable ref object that holds the element passed in.
 */
function useIsElementInView(el: HTMLDivElement | null): boolean {
  const ref = useRef<HTMLDivElement | null>(null);
  ref.current = el;
  return useInView(ref, { amount: 0.3 });
}

export default function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Drive the progress line height based on scroll position
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-4 py-10 md:py-14"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 md:mb-14"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-[#362263] mb-2">
          De problema a solución, paso a paso
        </h2>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Entérate cómo transformamos la operación de tu empresa con un enfoque
          práctico y resultados reales.
        </p>
      </motion.div>

      {/* Desktop layout */}
      <div className="hidden md:flex gap-10">
        {/* Sticky left panel */}
        <div className="w-1/3">
          <div className="sticky top-28 space-y-2">
            {/* Scroll-driven progress bar behind the dots */}
            <div className="relative">
              <div className="absolute left-[5px] top-0 bottom-0 w-px bg-slate-200" />
              <motion.div
                className="absolute left-[5px] top-0 w-px bg-[#7C3AED] origin-top"
                style={{ height: progressHeight }}
              />
            </div>
            <ProgressNav chapterRefs={chapterRefs} />
          </div>
        </div>

        {/* Scrolling right panel */}
        <div className="w-2/3 space-y-12">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.id}
              ref={(el) => {
                chapterRefs.current[index] = el;
              }}
            >
              <ChapterCard chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout: simple vertical stack */}
      <div className="md:hidden space-y-8">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.id}
            ref={(el) => {
              // On mobile the same refs are used so ProgressNav still works
              // if it were ever rendered, but here we only render the cards.
              chapterRefs.current[index] = el;
            }}
          >
            <ChapterCard chapter={chapter} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
