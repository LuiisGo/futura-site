"use client";

import { useState } from "react";

const N8N_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL || "";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      source: "contact_form",
      name: formData.get("name"),
      company: formData.get("company"),
      role: formData.get("role"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      sector: formData.get("sector"),
      pain: formData.get("pain"),
    };

    if (!N8N_WEBHOOK_URL) {
      console.warn("Falta NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL");
      setStatus("error");
      return;
    }

    try {
      setLoading(true);
      setStatus("idle");
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-sm space-y-4 text-sm"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Nombre completo
          </label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Empresa
          </label>
          <input
            name="company"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Rol / Puesto
          </label>
          <input
            name="role"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              defaultValue="luiiss.marro@gmail.com"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              WhatsApp
            </label>
            <input
              name="phone"
              defaultValue="+50233813895"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Sector
          </label>
          <select
            name="sector"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          >
            <option value="">Selecciona una opción</option>
            <option value="lacteos">Agroalimentos / Lácteos</option>
            <option value="retail">Retail</option>
            <option value="combustibles">Combustibles / Flotas</option>
            <option value="servicios">Servicios técnicos / Seguridad</option>
            <option value="industrial">Industrial B2B</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1">
            Principal dolor hoy
          </label>
          <input
            name="pain"
            placeholder="Ej: inventarios, ventas, mantenimiento, reportes..."
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#362263] text-white text-sm font-semibold hover:bg-[#2c1a50] transition-colors disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar y agendar diagnóstico"}
      </button>

      {status === "ok" && (
        <p className="text-xs text-emerald-600">
          ¡Gracias! Recibimos tu información. Te contactaremos para coordinar la
          llamada.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-rose-600">
          Ocurrió un error al enviar. Revisa tu conexión o escribe directamente
          a <strong>luiiss.marro@gmail.com</strong>.
        </p>
      )}
    </form>
  );
}
