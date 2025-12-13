"use client";

import { useState } from "react";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

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

  // Enviar lead del chatbot a /api/contact (que luego manda a n8n)
  async function handleSubmitLead() {
    if (loading) return;

    try {
      setLoading(true);

      const payload = {
        source: "futura_bot", // Así lo verás en Sheets y en el correo
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        country: lead.country,
        sector: lead.sector || "Otro",
        message: `Dolor principal: ${
          lead.pain || "no especificado"
        }. Tamaño aproximado de la empresa: ${lead.size || "no especificado"}.`,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Respuesta no OK desde /api/contact");
      }

      // Si todo salió bien:
      setDone(true);
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
    } catch (err) {
      console.error("[ChatWidget] Error enviando lead:", err);
      window.alert(
        "Hubo un problema al enviar tus datos. Intenta de nuevo o escríbenos por WhatsApp."
      );
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
          {/* Header */}
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

          {/* Body */}
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

      {/* Botón flotante */}
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
        ayudarte a ver cómo digitalizar tus formularios en papel, automatizar
        procesos repetitivos con IA y agendar un diagnóstico con el equipo.
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
          Ver ejemplos de digitalización y automatización
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
          href="mailto:hola@futuratt.com"
          className="underline underline-offset-2"
        >
          hola@futuratt.com
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
        q="¿Qué significa que usan inteligencia artificial?"
        a="La IA nos ayuda a entender mensajes en lenguaje natural, resumir información, responder sobre tus procesos y clasificar tareas automáticamente."
      />
      <FAQLine
        q="¿Necesito tener todo digitalizado antes?"
        a="No. Parte del proyecto es justamente pasar de papel y archivos sueltos a flujos digitales para que luego la automatización y la IA puedan trabajar."
      />
      <FAQLine
        q="¿Pueden trabajar remoto?"
        a="Sí, podemos implementar todo a distancia para PYMES en Guatemala y otros países."
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
        Ejemplos de digitalización + IA
      </p>
      <FAQLine
        q="Agroindustria y alimentos"
        a="Producción diaria registrada desde planta sin planillas en papel, inventarios por lote, rutas de reparto y cobranza reflejados en dashboards ejecutivos, con alertas inteligentes basadas en IA."
      />
      <FAQLine
        q="Retail"
        a="Reposiciones automáticas por nivel de stock, reportes de rotación y márgenes por producto, programas de lealtad con FUTURA Wallet y segmentación de clientes usando IA."
      />
      <FAQLine
        q="Combustibles / Flotas"
        a="Flujo completo de cotización, órdenes y seguimiento de entregas, con panel de clientes, estado de facturación y alertas inteligentes para consumos fuera de rango."
      />
      <FAQLine
        q="Servicios técnicos / Seguridad"
        a="Tickets centralizados, activos con QR, agenda de mantenimiento preventivo y bot interno con IA que responde preguntas rápidas del equipo."
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
  onSubmit: () => Promise<void>;
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
          <span className="font-semibold">hola@futuratt.com</span> o vía
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
          <option value="agroindustria">Agroindustria y alimentos</option>
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
