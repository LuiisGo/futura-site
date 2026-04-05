import type { Metadata } from "next";
import Image from "next/image";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre FUTURA — Quiénes Somos",
  description:
    "FUTURA es una consultora de digitalización, automatización e inteligencia artificial aplicada para PYMEs en Guatemala y Centroamérica. Fundada por Luis Marroquín.",
  alternates: { canonical: "https://futuratt.com/sobre-futura" },
};

export default function SobreFuturaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "Sobre FUTURA", url: "https://futuratt.com/sobre-futura" },
            ])
          ),
        }}
      />
      <section className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#362263]">
          Sobre FUTURA
        </h1>
        <p className="text-sm md:text-base text-slate-600">
          FUTURA es una consultora de digitalización, automatización e
          inteligencia artificial aplicada para PYMES que ya crecieron y
          necesitan orden. Tomamos tus procesos actuales (formatos en papel,
          carpetas, WhatsApp, archivos sueltos, sistemas separados) y los
          convertimos en flujos digitales conectados donde la automatización y
          la IA hacen el trabajo pesado.
        </p>
        <p className="text-sm md:text-base text-slate-600">
          Muchas PYMES quedan atrapadas entre dos extremos: seguir sufriendo con
          papel, WhatsApp y archivos sueltos o invertir en un ERP gigante, caro
          y poco flexible. FUTURA nace para ofrecer un punto medio inteligente:
          primero digitalizamos y automatizamos tus procesos, incorporando
          inteligencia artificial donde aporta más valor, y cuando hace sentido,
          los organizamos en una capa tipo ERP-lite modular.
        </p>
        <p className="text-sm md:text-base text-slate-600">
          No vendemos una licencia de software; diseñamos un sistema a la medida
          de tu operación, con implementaciones rápidas, enfoque en quick wins y
          acompañamiento continuo para que tu equipo realmente use lo que
          construimos.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-[#362263]">
            Cómo pensamos los proyectos
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              • <span className="font-semibold">Operación primero:</span>{" "}
              partimos de cómo realmente trabajas hoy (planta, bodega, oficinas,
              rutas) y luego proponemos tecnología.
            </li>
            <li>
              •{" "}
              <span className="font-semibold">Digitalización progresiva:</span>{" "}
              no intentamos cambiar todo de un solo; priorizamos procesos clave
              y avanzamos por etapas.
            </li>
            <li>
              • <span className="font-semibold">IA con propósito:</span> usamos
              inteligencia artificial donde suma valor concreto (clasificar,
              resumir, responder, priorizar), no como buzzword.
            </li>
            <li>
              •{" "}
              <span className="font-semibold">Herramientas accesibles:</span>{" "}
              Google, WhatsApp, n8n y nocode/low-code que tu equipo puede
              entender y mantener.
            </li>
            <li>
              • <span className="font-semibold">Documentación y SOPs:</span>{" "}
              dejamos manuales simples, videos cortos y QR en planta para que el
              sistema no dependa de una sola persona.
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl md:text-2xl font-semibold text-[#362263]">
            Quién está detrás
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Image
              src="/roberto-marroquin.jpg"
              alt="Luis Marroquín — Fundador de FUTURA"
              width={120}
              height={120}
              className="rounded-2xl object-cover flex-shrink-0"
            />
            <div className="space-y-3">
              <p className="text-sm md:text-base text-slate-600">
                FUTURA fue fundada por Luis Marroquín, apasionado por combinar
                procesos operativos con tecnología accesible. Desde operar en
                negocios familiares hasta construir soluciones de digitalización,
                automatización e IA aplicada con Google Sheets, Apps Script, n8n y
                herramientas nocode, Luis entiende tanto la parte técnica como la
                realidad del día a día en planta, en la tienda y en la oficina.
              </p>
              <p className="text-sm md:text-base text-slate-600">
                FUTURA se apoya en una red de colaboradores especializados en datos,
                automatización, diseño de producto digital y estrategia, lo que nos
                permite adaptarnos al tamaño y complejidad de cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
