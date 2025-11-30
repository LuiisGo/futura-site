"use client";

import { useState } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

const N8N_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL || "";

type Mode = "menu" | "book" | "faq" | "examples";

interface LeadState {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  sector: string;
  pain: string;
  size: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("menu");
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState<LeadState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    sector: "",
    pain: "",
    size: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const resetBooking = () => {
    setStep(0);
    setLead({
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      sector: "",
      pain: "",
      size: "",
    });
    setDone(false);
  };

  async function handleSubmitLead() {
    if (!N8N_WEBHOOK_URL) {
      console.warn("Falta NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL");
      setDone(true);
      return;
    }
    try {
      setLoading(true);
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "chatbot",
          ...lead,
        }),
      });
      setDone(true);
    } catch (err) {
      console.error(err);
      setDone(true);
    } finally {
      setLoading(false);
    }
  }

  const showBubble = true;
  if (!showBubble) return null;

  return (
    <div className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-50">
      {open && (
        <div className="mb-3 w-80 max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          <div className="px-4 py-3 bg-[#362263] text-white flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#B3B1CA]">
                FUTURA BOT
              </div>
              <div className="text-sm font-semibold">¿En qué te ayudamos?</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-white/10"
            >
              <FiX size={16} />
            </button>
          </div>

          <div className="px-4 py-3 max-h-[360px] overflow-y-auto text-xs text-slate-700 space-y-3">
            {mode === "menu" && (
              <MenuView
                onSelect={(m) => {
                  setMode(m);
                  if (m === "book") resetBooking();
                }}
              />
            )}

            {mode === "faq" && <FAQView onBack={() => setMode("menu")} />}

            {mode === "examples" && (
              <ExamplesView onBack={() => setMode("menu")} />
            )}

            {mode === "book" && (
              <BookingView
                step={step}
                setStep={setStep}
                lead={lead}
                setLead={setLead}
                done={done}
                loading={loading}
                onBack={() => {
                  setMode("menu");
                  resetBooking();
                }}
                onSubmit={handleSubmitLead}
              />
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#362263] text-white shadow-xl hover:bg-[#2c1a50] transition-colors"
      >
        <FiMessageCircle size={22} />
        <span className="sr-only">Abrir chat de FUTURA</span>
      </button>
    </div>
  );
}

function MenuView({ onSelect }: { onSelect: (m: Mode) => void }) {
  return (
    <div className="space-y-3">
      <p className="text-slate-700">
        👋 Hola, soy <span className="font-semibold">FUTURA Bot</span>. Puedo
        ayudarte a entender qué podemos automatizar y a agendar un diagnóstico
        con el equipo.
      </p>
      <p className="font-semibold text-slate-800">
        ¿Qué te gustaría hacer ahora?
      </p>
      <div className="space-y-2">
        <button
          onClick={() => onSelect("book")}
          className="w-full text-left px-3 py-2 rounded-xl bg-[#362263] text-white text-xs font-semibold hover:bg-[#2c1a50] transition-colors"
        >
          Agendar diagnóstico para mi empresa
        </button>
        <button
          onClick={() => onSelect("examples")}
          className="w-full text-left px-3 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium hover:bg-slate-200 transition-colors"
        >
          Ver ejemplos de automatización
        </button>
        <button
          onClick={() => onSelect("faq")}
          className="w-full text-left px-3 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium hover:bg-slate-200 transition-colors"
        >
          Preguntas frecuentes
        </button>
      </div>
      <p className="text-[10px] text-slate-500">
        Tip: si prefieres, puedes escribirnos directo a{" "}
        <a
          href="mailto:luiiss.marro@gmail.com"
          className="underline underline-offset-2"
        >
          luiiss.marro@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

function FAQView({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-3">
      <p className="font-semibold text-slate-800 text-xs">FAQ rápidas</p>
      <FAQLine
        q="¿Qué es un ERP-lite?"
        a="Es un sistema de operación hecho a la medida sobre herramientas accesibles (Google, WhatsApp, n8n), en lugar de un ERP gigante y cerrado."
      />
      <FAQLine
        q="¿Qué automatizan normalmente?"
        a="Captura de datos, generación de reportes, alertas, tickets, órdenes, rutas, lealtad y más."
      />
      <FAQLine
        q="¿Pueden trabajar remoto?"
        a="Sí, trabajamos 100% remoto para PYMES en Guatemala y LATAM."
      />
      <button
        onClick={onBack}
        className="mt-1 w-full text-center text-[11px] text-[#362263] font-medium underline underline-offset-2"
      >
        ← Volver al menú principal
      </button>
    </div>
  );
}

function FAQLine({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold text-slate-800">{q}</p>
      <p className="text-[11px] text-slate-600">{a}</p>
    </div>
  );
}

function ExamplesView({ onBack }: { onBack: () => void }) {
  return (
    <div className="space-y-3">
      <p className="font-semibold text-slate-800 text-xs">
        Ejemplos de automatización
      </p>
      <FAQLine
        q="Lácteos / Agroalimentos"
        a="Producción diaria registrada desde planta, inventarios por lote, rutas de reparto y cobranza reflejados en dashboards ejecutivos."
      />
      <FAQLine
        q="Retail"
        a="Reposiciones automáticas por nivel de stock, reportes de rotación y márgenes por producto, programas de lealtad con FUTURA Wallet."
      />
      <FAQLine
        q="Combustibles / Flotas"
        a="Flujo completo de cotización, órdenes y seguimiento de entregas, con panel de clientes y estado de facturación."
      />
      <FAQLine
        q="Servicios técnicos / Seguridad"
        a="Tickets centralizados, activos con QR, agenda de mantenimiento preventivo y bot interno para soporte rápido."
      />
      <button
        onClick={onBack}
        className="mt-1 w-full text-center text-[11px] text-[#362263] font-medium underline underline-offset-2"
      >
        ← Volver al menú principal
      </button>
    </div>
  );
}

function BookingView({
  step,
  setStep,
  lead,
  setLead,
  done,
  loading,
  onBack,
  onSubmit,
}: {
  step: number;
  setStep: (s: number) => void;
  lead: LeadState;
  setLead: (l: LeadState) => void;
  done: boolean;
  loading: boolean;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const steps = [
    "¿En qué país está tu empresa?",
    "¿En qué sector operas?",
    "¿Cuál es hoy tu principal dolor?",
    "Tamaño aproximado de la empresa",
    "Datos de contacto",
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };
  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  if (done) {
    return (
      <div className="space-y-3">
        <p className="font-semibold text-slate-800 text-xs">
          ¡Listo! Registramos tu información.
        </p>
        <p className="text-[11px] text-slate-600">
          Te contactaremos desde{" "}
          <span className="font-semibold">luiiss.marro@gmail.com</span> o vía
          WhatsApp para coordinar la llamada de diagnóstico.
        </p>
        <button
          onClick={onBack}
          className="w-full text-center text-[11px] text-[#362263] font-medium underline underline-offset-2"
        >
          ← Volver al menú principal
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-[11px] text-slate-500">
        Paso {step + 1} de {steps.length}
      </p>
      <p className="font-semibold text-slate-800 text-xs">{steps[step]}</p>

      {step === 0 && (
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          placeholder="Ej: Guatemala, México..."
          value={lead.country}
          onChange={(e) => setLead({ ...lead, country: e.target.value })}
        />
      )}

      {step === 1 && (
        <select
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          value={lead.sector}
          onChange={(e) => setLead({ ...lead, sector: e.target.value })}
        >
          <option value="">Selecciona una opción</option>
          <option value="lacteos">Agroalimentos / Lácteos</option>
          <option value="retail">Retail</option>
          <option value="combustibles">Combustibles / Flotas</option>
          <option value="servicios">Servicios técnicos / Seguridad</option>
          <option value="industrial">Industrial B2B</option>
          <option value="otro">Otro</option>
        </select>
      )}

      {step === 2 && (
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          placeholder="Inventarios, ventas, mantenimiento, reportes..."
          value={lead.pain}
          onChange={(e) => setLead({ ...lead, pain: e.target.value })}
        />
      )}

      {step === 3 && (
        <select
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          value={lead.size}
          onChange={(e) => setLead({ ...lead, size: e.target.value })}
        >
          <option value="">Selecciona un rango</option>
          <option value="1-10">1–10 personas</option>
          <option value="11-50">11–50 personas</option>
          <option value="51-200">51–200 personas</option>
          <option value="200+">Más de 200 personas</option>
        </select>
      )}

      {step === 4 && (
        <div className="space-y-2">
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="Nombre completo"
            value={lead.name}
            onChange={(e) => setLead({ ...lead, name: e.target.value })}
          />
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="Empresa"
            value={lead.company}
            onChange={(e) => setLead({ ...lead, company: e.target.value })}
          />
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="Email"
            value={lead.email}
            onChange={(e) => setLead({ ...lead, email: e.target.value })}
          />
          <input
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="WhatsApp"
            value={lead.phone}
            onChange={(e) => setLead({ ...lead, phone: e.target.value })}
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-1">
        <button
          onClick={onBack}
          className="text-[11px] text-slate-500 underline underline-offset-2"
        >
          Cancelar
        </button>
        <div className="flex items-center gap-2">
          {step > 0 && (
            <button
              onClick={handlePrev}
              className="text-[11px] text-slate-600 underline underline-offset-2"
            >
              Atrás
            </button>
          )}
          {step < 4 && (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 text-[11px] font-medium text-slate-800 hover:bg-slate-200"
            >
              Siguiente
            </button>
          )}
          {step === 4 && (
            <button
              onClick={onSubmit}
              disabled={loading}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#362263] text-[11px] font-semibold text-white hover:bg-[#2c1a50] disabled:opacity-60"
            >
              {loading ? (
                "Enviando..."
              ) : (
                <>
                  Enviar
                  <FiSend size={12} />
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <p className="text-[10px] text-slate-500">
        Usaremos estos datos solo para contactarte sobre el diagnóstico. Nada de
        spam.
      </p>
    </div>
  );
}
