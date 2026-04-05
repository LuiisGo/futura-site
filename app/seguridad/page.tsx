import Link from "next/link";

import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Seguridad y Confidencialidad",
  description:
    "Cómo FUTURA maneja accesos, permisos, confidencialidad, respaldos y continuidad en proyectos de digitalización y automatización para PYMEs.",
  alternates: { canonical: "https://futuratt.com/seguridad" },
};

function Section({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-2 text-slate-600">{text}</p>
    </section>
  );
}

export default function SeguridadPage() {
  return (
    <main className="py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "Seguridad", url: "https://futuratt.com/seguridad" },
            ])
          ),
        }}
      />
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-xs tracking-[0.2em] uppercase text-slate-500">
          Confianza y control
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-[#362263]">
          Seguridad y confidencialidad
        </h1>
        <p className="mt-4 text-slate-600">
          Esto no es un documento legal pesado. Es una guía clara de cómo cuidamos accesos,
          permisos y confidencialidad en proyectos FUTURA.
        </p>

        <div className="mt-10 space-y-6">
          <Section
            title="Propiedad de datos"
            text="La información es de tu empresa. Diseñamos e implementamos el sistema, pero el control y la operación quedan en tu ecosistema según lo acordado."
          />
          <Section
            title="Accesos y permisos"
            text="Trabajamos con permisos por rol (lo mínimo necesario). Se puede revocar acceso, ajustar roles y definir quién ve qué en cada etapa."
          />
          <Section
            title="Uso de WhatsApp y datos sensibles"
            text="WhatsApp se usa para coordinación y capturas operativas. Para información ultra sensible, recomendamos canales y formatos acordados durante el diagnóstico."
          />
          <Section
            title="Respaldo, continuidad y trazabilidad"
            text="Documentamos flujos, dejamos bitácoras cuando aplica y definimos un esquema de respaldo/versionado según el stack del proyecto."
          />
          <Section
            title="Confidencialidad contractual (NDA)"
            text="Si tu empresa lo requiere, firmamos NDA y agregamos cláusulas de confidencialidad en la propuesta."
          />
          <Section
            title="Cierre de proyecto y handoff"
            text="Al cerrar, dejamos entregables, documentación y traspaso operativo para que tu equipo quede con control y claridad."
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-[#6f4ff6] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#5a3ee0] transition-colors"
          >
            Agendar diagnóstico
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-200 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
