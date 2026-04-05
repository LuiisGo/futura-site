import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sectors } from '@/lib/sectors-data'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

interface Props {
  params: { sector: string }
}

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const data = sectors.find((s) => s.slug === params.sector)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://futuratt.com/sectores/${data.slug}` },
  }
}

export default function SectorPage({ params }: Props) {
  const { sector } = params
  const data = sectors.find((s) => s.slug === sector)
  if (!data) notFound()

  const breadcrumbs = [
    { name: 'Inicio', url: 'https://futuratt.com' },
    { name: 'Sectores', url: 'https://futuratt.com/sectores' },
    { name: data.name, url: `https://futuratt.com/sectores/${data.slug}` },
  ]

  return (
    <div className="min-h-screen">
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(data.faq)),
        }}
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-10 md:pt-14 pb-8">
        {/* Breadcrumb nav */}
        <nav className="flex items-center gap-1.5 text-xs text-white/30 mb-6">
          <Link href="/" className="hover:text-white/60 transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/sectores" className="hover:text-white/60 transition-colors">
            Sectores
          </Link>
          <span>/</span>
          <span className="text-white/50">{data.name}</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          {data.headline}
        </h1>
        <p className="text-sm md:text-base text-white/45 max-w-3xl leading-relaxed">
          {data.description}
        </p>
      </section>

      {/* Pain Points */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
          Problemas comunes en {data.name.toLowerCase()}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {data.painPoints.map((point) => (
            <div
              key={point}
              className="flex gap-3 items-start rounded-xl border border-white/[0.06] p-4"
            >
              <span className="mt-0.5 text-red-400 shrink-0 text-sm">&#x2717;</span>
              <p className="text-sm text-white/60 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
          Lo que implementamos
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {data.solutions.map((sol) => (
            <div
              key={sol.title}
              className="rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.12] transition-colors"
            >
              <h3 className="text-sm font-semibold text-white mb-2">{sol.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{sol.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
          Herramientas que usamos
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.tools.map((tool) => (
            <span
              key={tool}
              className="inline-block text-xs font-medium px-3 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#a855f7] border border-[#7C3AED]/15"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Case Study */}
      {data.caseStudy && (
        <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
            Caso de exito
          </h2>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">
              Empresa
            </p>
            <p className="text-base font-semibold text-white mb-4">
              {data.caseStudy.company}
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-2">
              Resultados
            </p>
            <p className="text-sm text-emerald-400 leading-relaxed mb-4">
              {data.caseStudy.result}
            </p>
            {data.caseStudy.link && (
              <Link
                href={data.caseStudy.link}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#a855f7] hover:text-[#c084fc] transition-colors"
              >
                Ver caso completo
                <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 tracking-tight">
          Preguntas frecuentes
        </h2>
        <div className="space-y-2">
          {data.faq.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/[0.06] overflow-hidden hover:border-white/[0.1] transition-colors"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium text-white/80 group-open:text-white transition-colors">
                  {item.q}
                </span>
                <span className="text-white/30 shrink-0 ml-4 transition-transform group-open:rotate-180">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-4 text-sm text-white/40 border-t border-white/[0.04] pt-3 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] px-6 md:px-10 py-10 md:py-14">
          {/* Ambient glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#7C3AED]/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-[#3C88BA]/10 blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                ¿Tu empresa de {data.name.toLowerCase()} necesita orden digital?
              </h2>
              <p className="text-sm md:text-base text-white/45 leading-relaxed">
                Agendemos un diagnostico gratuito de 30-45 minutos. Revisamos tus
                procesos, identificamos quick wins y te presentamos un plan
                concreto.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0c0714] text-sm font-semibold shrink-0 hover:bg-white/90 transition-colors"
            >
              Agendar diagnostico
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
