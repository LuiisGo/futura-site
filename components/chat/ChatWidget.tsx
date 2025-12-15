"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";

type Mode = "menu" | "chat" | "book" | "faq" | "examples";

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

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const CONTACT_API_PATH = "/api/contact";
const CHAT_API_PATH = "/api/futura-bot";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("menu");

  // Lead (para agendar diagnóstico)
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
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadDone, setLeadDone] = useState(false);

  // Chat IA
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "👋 Hola, soy FUTURA Bot. Te ayudo a ver cómo digitalizar tus procesos, automatizar tareas repetitivas con IA y entender si FUTURA encaja con tu empresa. ¿Qué te gustaría optimizar o automatizar?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

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
    setLeadDone(false);
  };

  async function handleSubmitLead() {
    if (leadLoading) return;

    try {
      setLeadLoading(true);

      const payload = {
        source: "futura_bot", // diferenciamos leads del bot en Sheets y correo
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        company: lead.company,
        country: lead.country,
        sector: lead.sector || "Otro",
        message: `problema principal: ${
          lead.pain || "no especificado"
        }. Tamaño aproximado de la empresa: ${lead.size || "no especificado"}.`,
      };

      const res = await fetch(CONTACT_API_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Respuesta no OK desde /api/contact");
      }

      setLeadDone(true);
      setLead({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        sector: "",
        problema: "",
        size: "",
      });

      // Mensaje de confirmación en el chat
      setMessages((prev) => [
        ...prev,
        {
          id: `lead-confirm-${Date.now()}`,
          role: "assistant",
          content:
            "Perfecto, ya guardamos tus datos. Nuestro equipo te va a escribir para agendar el diagnóstico. 💜",
        },
      ]);
    } catch (err) {
      console.error("[ChatWidget] Error enviando lead:", err);
      if (typeof window !== "undefined") {
        window.alert(
          "Hubo un problema al enviar tus datos. Intenta de nuevo o escríbenos por WhatsApp."
        );
      }
    } finally {
      setLeadLoading(false);
    }
  }

  async function handleSendChat() {
    const text = chatInput.trim();
    if (!text || chatLoading) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      content: text,
    };

    // Añadimos el mensaje del usuario al chat
    setMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setChatLoading(true);

    try {
      const payload = {
        messages: [...messages, userMsg].map((m) => ({
          role: m.role,
          content: m.content,
        })),
      };

      const res = await fetch(CHAT_API_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Respuesta no OK desde /api/futura-bot");
      }

      const data = (await res.json()) as { reply?: string };
      const replyText =
        data.reply ||
        "Perdón, algo salió mal tratando de responderte. ¿Puedes intentar otra vez?";

      const botMsg: ChatMessage = {
        id: `a-${Date.now()}`,
        role: "assistant",
        content: replyText,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("[ChatWidget] Error en chat IA:", err);
      const fallback: ChatMessage = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content:
          "Tuvimos un problema para responder en este momento. Si es urgente, escríbenos a hola@futuratt.com o por WhatsApp.",
      };
      setMessages((prev) => [...prev, fallback]);
    } finally {
      setChatLoading(false);
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
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6 rounded-full bg-white/5 flex items-center justify-center">
                <Image
                  src="/logo-futura-deeppurple.png"
                  alt="FUTURA"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#B3B1CA]">
                  FUTURA BOT
                </div>
                <div className="text-sm font-semibold leading-tight">
                  {mode === "chat"
                    ? "Asistente virtual"
                    : mode === "book"
                    ? "Agendar diagnóstico"
                    : "¿En qué te ayudamos?"}
                </div>
                <div className="text-[10px] text-[#C9C7DE]">
                  Work less, live more.
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-3 max-h-[380px] overflow-y-auto text-xs text-slate-700 space-y-3">
            {mode === "menu" && (
              <MenuView
                onSelect={(m) => {
                  setMode(m);
                  if (m === "book") resetBooking();
                }}
              />
            )}

            {mode === "chat" && (
              <ChatView
                messages={messages}
                input={chatInput}
                onChangeInput={setChatInput}
                onSend={handleSendChat}
                loading={chatLoading}
                onBack={() => setMode("menu")}
                onGoToBook={() => {
                  setMode("book");
                  resetBooking();
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
                done={leadDone}
                loading={leadLoading}
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
        onClick={() => {
          setOpen((prev) => {
            const next = !prev;
            if (next) {
              // cada vez que se abre, lo mandamos al menú
              setMode("menu");
            }
            return next;
          });
        }}
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
        conversar contigo sobre tu operación, darte ideas de automatización con
        IA y ayudarte a agendar un diagnóstico.
      </p>
      <p className="font-semibold text-slate-800">
        ¿Qué te gustaría hacer ahora?
      </p>
      <div className="space-y-2">
        <button
          onClick={() => onSelect("chat")}
          className="w-full text-left px-3 py-2 rounded-xl bg-[#362263] text-white text-xs font-semibold hover:bg-[#2c1a50] transition-colors"
        >
          Hablar con FUTURA Bot (chat)
        </button>
        <button
          onClick={() => onSelect("book")}
          className="w-full text-left px-3 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-medium hover:bg-slate-200 transition-colors"
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

function ChatView({
  messages,
  input,
  onChangeInput,
  onSend,
  loading,
  onBack,
  onGoToBook,
}: {
  messages: ChatMessage[];
  input: string;
  onChangeInput: (v: string) => void;
  onSend: () => void;
  loading: boolean;
  onBack: () => void;
  onGoToBook: () => void;
}) {
  return (
    <div className="flex flex-col h-full space-y-2">
      <div className="flex-1 space-y-2 overflow-y-auto pr-1">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
                m.role === "user"
                  ? "bg-[#362263] text-white rounded-br-sm"
                  : "bg-slate-100 text-slate-800 rounded-bl-sm"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 text-slate-500 text-[11px] px-3 py-2 rounded-2xl rounded-bl-sm">
              Pensando...
            </div>
          </div>
        )}
      </div>

      <button
        onClick={onGoToBook}
        className="w-full text-[10px] mb-1 text-[#362263] font-medium underline underline-offset-2"
      >
        Quiero que revisen mi caso y agendar un diagnóstico →
      </button>

      <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
        <button
          onClick={onBack}
          className="text-[11px] text-slate-500 underline underline-offset-2"
        >
          Menú
        </button>
        <div className="flex-1 flex items-center gap-1">
          <input
            className="flex-1 rounded-full border border-slate-200 px-3 py-1.5 text-[11px] focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={(e) => onChangeInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSend();
              }
            }}
          />
          <button
            onClick={onSend}
            disabled={loading || !input.trim()}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#362263] text-white disabled:opacity-50"
          >
            <FiSend size={12} />
          </button>
        </div>
      </div>
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
  onSubmit: () => void;
}) {
  const steps = [
    "¿En qué país está tu empresa?",
    "¿En qué sector operas?",
    "¿Cuál es hoy tu principal problema?",
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
              {loading ? "Enviando..." : "Enviar"}
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
