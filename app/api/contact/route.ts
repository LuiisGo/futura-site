import { NextResponse } from "next/server";

type IncomingLead = {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  country?: string;
  sector?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("Falta N8N_LEAD_WEBHOOK_URL en las env vars");
      return NextResponse.json(
        { error: "Config error" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as IncomingLead;

    // Normalizamos lo que le mandamos a n8n
    const payload = {
      source: body.source ?? "contact_page",
      name: body.name ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      company: body.company ?? "",
      country: body.country ?? "",
      sector: body.sector ?? "",
      message: body.message ?? "",
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("Error al llamar al webhook de n8n:", res.status, text);

      return NextResponse.json(
        { error: "Webhook failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error en /api/contact:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
