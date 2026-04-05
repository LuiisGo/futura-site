"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ContactSchema } from "@/lib/validations";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  sector: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string[]>>;

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  sector: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setFieldErrors({});

    // Client-side Zod validation
    const result = ContactSchema.safeParse(form);
    if (!result.success) {
      setFieldErrors(result.error.flatten().fieldErrors as FieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact_page",
          ...result.data,
        }),
      });

      if (!res.ok) {
        throw new Error("Respuesta no OK");
      }

      setForm(INITIAL_FORM);
      setStatus("ok");
    } catch (error) {
      console.error("Error enviando formulario", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Nombre completo*
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6f4ff6] ${fieldErrors.name ? 'border-red-400' : 'border-slate-200'}`}
            placeholder="Tu Nombre"
          />
          {fieldErrors.name && <p className="text-xs text-red-500 mt-1">{fieldErrors.name[0]}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Correo electrónico*
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6f4ff6] ${fieldErrors.email ? 'border-red-400' : 'border-slate-200'}`}
            placeholder="tu@empresa.com"
          />
          {fieldErrors.email && <p className="text-xs text-red-500 mt-1">{fieldErrors.email[0]}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Teléfono / WhatsApp
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6f4ff6]"
            placeholder="+000..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Empresa
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6f4ff6]"
            placeholder="Nombre de la empresa"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            País / ciudad
          </label>
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6f4ff6]"
            placeholder="Guatemala, CDMX, El Salvador, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Sector
          </label>
          <select
            name="sector"
            value={form.sector}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#6f4ff6]"
          >
            <option value="">Selecciona tu sector</option>
            <option value="Agroindustria / alimentos">
              Agroindustria / alimentos
            </option>
            <option value="Retail / tiendas">Retail / tiendas</option>
            <option value="Logística / transporte">
              Logística / transporte
            </option>
            <option value="Servicios">Servicios</option>
            <option value="Manufactura">Manufactura</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Cuéntanos brevemente qué quisieras ordenar / automatizar
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={`w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#6f4ff6] ${fieldErrors.message ? 'border-red-400' : 'border-slate-200'}`}
          placeholder="Por ejemplo: órdenes de compra, inventarios de bodegas, rutas de reparto, etc."
        />
        {fieldErrors.message && <p className="text-xs text-red-500 mt-1">{fieldErrors.message[0]}</p>}
      </div>
<div className="space-y-1">
  <p className="text-xs text-slate-500">
    No compartimos tu información. Solo la usamos para contactarte y preparar el diagnóstico.
  </p>
  <p className="text-xs text-slate-500">
    Tiempo típico de respuesta: dentro de 24 horas hábiles.
  </p>
</div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-full bg-[#6f4ff6] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#5a3ee0] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Agendar diagnóstico gratuito"}
      </button>

      {status === "error" && (
        <p className="mt-2 text-sm text-red-500">
          Hubo un problema al enviar. Intenta de nuevo o escríbenos por
          WhatsApp.
        </p>
      )}

      {status === "ok" && (
        <p className="mt-2 text-sm text-emerald-600">
          ¡Listo! Recibimos tu información. Te contactaremos pronto para
          agendar el diagnóstico.
        </p>
      )}
    </form>
  );
}
