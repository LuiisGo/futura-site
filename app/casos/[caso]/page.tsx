import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

/* ───────────────────────── Case data ───────────────────────── */

interface CaseStudy {
  slug: string;
  company: string;
  sector: string;
  detail: string;
  tag: string;
  problem: string;
  solution: string;
  results: string[];
  quote?: string;
  metric?: string;
  datePublished: string;
}

const cases: CaseStudy[] = [
  {
    slug: "lecheria-san-antonio",
    company: "Lechería San Antonio",
    sector: "Agroindustria · Lácteos",
    detail: "4 tiendas + bodega central · Guatemala",
    tag: "ERP-lite",
    problem:
      "Registraban entradas y salidas de inventario en papel en 5 puntos de operación. El dinero no cuadraba al cierre del día, no había visibilidad entre sucursales, y el proceso consumía 15 horas por semana solo en registro manual.",
    solution:
      "ERP-lite con Google Forms y Sheets: cada empleado registra movimientos desde el celular en 30 segundos. El sistema consolida inventario por sucursal y bodega en tiempo real y genera la vista ejecutiva para gerencia.",
    results: [
      "15h/semana → 30 min de registro",
      "El dinero cuadra exacto — se eliminaron las pérdidas por falta de control",
      "Visibilidad de inventario por tienda y bodega en tiempo real",
      "5 puntos de operación manejados desde un solo sistema",
    ],
    quote:
      "Antes tardábamos 15 horas a la semana. Ahora cada empleado llena un formulario en 30 segundos.",
    datePublished: "2025-06-01",
  },
  {
    slug: "fueldepot-gt",
    company: "FUELDEPOT GT",
    sector: "Combustibles · B2B",
    detail: "Guatemala",
    tag: "Landing page",
    problem:
      "Necesitaban presencia digital profesional para generar leads calificados de forma consistente, sin depender solo de referidos.",
    solution:
      "Landing page B2B optimizada para conversión con formulario de captura integrado a su proceso comercial.",
    results: [
      "3 deals cerrados directamente desde la landing page",
      "Canal de generación de leads activo y medible desde el día 1",
    ],
    datePublished: "2025-08-01",
  },
  {
    slug: "agricola-san-antonio",
    company: "Agrícola San Antonio",
    sector: "Agroindustria · Combustibles",
    detail: "2 tanques · múltiples proveedores · Guatemala",
    tag: "App a medida",
    problem:
      "El control de entradas y salidas de combustible se hacía en papel. No había forma de detectar discrepancias entre lo entregado por proveedores y lo que realmente llegaba a los tanques. Sin trazabilidad ni evidencia fotográfica.",
    solution:
      "PWA offline-first con autenticación biométrica para registro de entradas/salidas por tanque y proveedor. Evidencia fotográfica, análisis de varianza en tiempo real y exportación a Excel. El sistema funciona offline en áreas rurales y sincroniza automáticamente cuando hay conexión.",
    results: [
      "Registros en menos de 30 segundos desde el celular",
      "Detección de discrepancias en tiempo real entre entregas y existencias",
      "Funciona offline y sincroniza automáticamente",
      "Evidencia fotográfica de cada entrega de combustible",
      "Exportación directa a Excel para reportes",
    ],
    metric: "~90% reducción en tiempo de registro vs. proceso manual en papel",
    datePublished: "2025-10-01",
  },
];

function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

/* ───────────────────── Static params & metadata ───────────────────── */

export function generateStaticParams() {
  return cases.map((c) => ({ caso: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { caso: string };
}): Metadata {
  const data = getCase(params.caso);
  if (!data) return {};

  const title = `${data.company} — Caso de Éxito`;
  const description = `${data.company} (${data.sector}): ${data.results[0]}. Conocé cómo FUTURA digitalizó su operación.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://futuratt.com/casos/${data.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://futuratt.com/casos/${data.slug}`,
      type: "article",
    },
  };
}

/* ───────────────────────── Page component ───────────────────────── */

export default function CasoPage({ params }: { params: { caso: string } }) {
  const data = getCase(params.caso);
  if (!data) notFound();

  const breadcrumbLd = breadcrumbSchema([
    { name: "Inicio", url: "https://futuratt.com" },
    { name: "Casos de Éxito", url: "https://futuratt.com/casos" },
    { name: data.company, url: `https://futuratt.com/casos/${data.slug}` },
  ]);

  const articleLd = articleSchema({
    title: `${data.company} — Caso de Éxito | FUTURA`,
    description: `${data.company} (${data.sector}): cómo FUTURA digitalizó su operación con resultados concretos.`,
    url: `https://futuratt.com/casos/${data.slug}`,
    datePublished: data.datePublished,
  });

  return (
    <>
      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <div className="pb-20">
        {/* Back link */}
        <div className="max-w-4xl mx-auto px-4 pt-10">
          <Link
            href="/casos"
            className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white/80 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Casos de Éxito
          </Link>
        </div>

        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 pt-8 pb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {data.company}
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#7C3AED]/15 text-[#a855f7]">
              {data.tag}
            </span>
          </div>
          <p className="text-sm text-white/45">{data.sector}</p>
          <p className="text-sm text-white/45">{data.detail}</p>
        </section>

        {/* Content card */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="liquid-glass-subtle rounded-2xl p-6 md:p-10 space-y-10">
            {/* Metric highlight (if present) */}
            {data.metric && (
              <div className="rounded-2xl border border-white/[0.06] bg-emerald-500/5 p-6 text-center">
                <p className="text-2xl md:text-3xl font-bold text-emerald-400">
                  {data.metric}
                </p>
              </div>
            )}

            {/* Problem */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
                Problema
              </h2>
              <p className="text-white/80 leading-relaxed">{data.problem}</p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
                Solución
              </h2>
              <p className="text-white/80 leading-relaxed">{data.solution}</p>
            </div>

            {/* Results */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-[#a855f7] mb-4">
                Resultados
              </h2>
              <ul className="space-y-3">
                {data.results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/80">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            {data.quote && (
              <blockquote className="border-l-4 border-[#7C3AED] pl-5 py-2 italic text-white/60 text-lg leading-relaxed">
                &ldquo;{data.quote}&rdquo;
              </blockquote>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 pt-12 text-center">
          <div className="rounded-2xl border border-white/[0.06] p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Tu empresa puede ser el siguiente caso
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Contanos sobre tu operación y diseñamos una solución a tu medida
              con resultados concretos.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 rounded-full bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors"
            >
              Agendar diagnóstico gratuito
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
