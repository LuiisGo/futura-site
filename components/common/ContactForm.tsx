"use client";

import { useState } from "react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    sector: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEBHOOK_URL) {
      console.error("Falta NEXT_PUBLIC_N8N_LEAD_WEBHOOK_URL en Netlify");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact_page",
          ...form,
        }),
      });

      if (!res.ok) throw new Error("Respuesta no OK");

      setStatus("ok");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        sector: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 shadow-sm"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Nombre completo*
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="Juan Pérez"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Correo electrónico*
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="tucorreo@empresa.com"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Teléfono / WhatsApp
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="+502 0000 0000"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Empresa
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="Nombre de tu empresa"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            País / ciudad
          </label>
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
            placeholder="Guatemala, México, etc."
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">
            Sector
          </label>
          <select
            name="sector"
            value={form.sector}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          >
            <option value="">Selecciona una opción</option>
            <option value="agroindustria">Agroindustria / alimentos</option>
            <option value="retail">Retail / tiendas</option>
            <option value="combustibles">Combustibles / flotas</option>
            <option value="servicios">Servicios técnicos / seguridad</option>
            <option value="industrial">Industrial B2B</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-600 mb-1">
          Cuéntanos brevemente qué quisieras ordenar / automatizar
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3C88BA]/40 focus:border-[#3C88BA]"
          placeholder="Ej: control de pedidos, inventarios, formularios en papel, reportes de producción, etc."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#362263] text-white text-sm font-medium hover:bg-[#2c1a50] disabled:opacity-60"
      >
        {status === "sending"
          ? "Enviando..."
          : "Agendar diagnóstico gratuito"}
      </button>

      {status === "ok" && (
        <p className="text-xs text-emerald-600 mt-1">
          ✅ Gracias, recibimos tu información. Te contactaremos pronto para
          coordinar el diagnóstico.
        </p>
      )}

      {status === "error" && (
        <p className="text-xs text-red-500 mt-1">
          Hubo un problema al enviar. Intenta de nuevo o escríbenos por
          WhatsApp.
        </p>
      )}
    </form>
  );
}
