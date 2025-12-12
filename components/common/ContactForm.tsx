"use client";

import React, { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    const payload = {
      source: "contact_page",
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      country: String(formData.get("country") || ""),
      sector: String(formData.get("sector") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error("API /api/contact respondió NOT OK", await res.text());
        throw new Error("API not ok");
      }

      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      console.error("Error enviando formulario:", err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Nombre completo*
          </label>
          <input
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6C4DE6] focus:ring-2 focus:ring-[#6C4DE6]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Correo electrónico*
          </label>
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6C4DE6] focus:ring-2 focus:ring-[#6C4DE6]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Teléfono / WhatsApp
          </label>
          <input
            name="phone"
            type="tel"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6C4DE6] focus:ring-2 focus:ring-[#6C4DE6]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Empresa
          </label>
          <input
            name="company"
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6C4DE6] focus:ring-2 focus:ring-[#6C4DE6]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            País / ciudad
          </label>
          <input
            name="country"
            type="text"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6C4DE6] focus:ring-2 focus:ring-[#6C4DE6]/20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">
            Sector
          </label>
          <select
            name="sector"
            className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#6C4DE6] focus:ring-2 focus:ring-[#6C4DE6]/20"
          >
            <option value="">Selecciona una opción</option>
            <option value="agroindustria">Agroindustria / alimentos</option>
            <option value="retail">Retail / tiendas</option>
            <option value="servicios">Servicios</option>
            <option value="manufactura">Manufactura</option>
            <option value="logistica">Logística / transporte</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Cuéntanos brevemente qué quisieras ordenar / automatizar
        </label>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#6C4DE6] focus:ring-2 focus:ring-[#6C4DE6]/20"
        />
      </div>

      <div className="pt-2 flex flex-col gap-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-[#6C4DE6] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#5b3fd1] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending"
            ? "Enviando..."
            : "Agendar diagnóstico gratuito"}
        </button>

        {status === "ok" && (
          <p className="text-sm text-emerald-600">
            ¡Listo! Recibimos tu información. Te contactaremos pronto para
            agendar la llamada.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-rose-600">
            Hubo un problema al enviar. Intenta de nuevo o escríbenos por
            WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
