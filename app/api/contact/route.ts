import { NextRequest, NextResponse } from 'next/server'
import { ContactSchema } from '@/lib/validations'
import { isRateLimited, getClientIp } from '@/lib/rate-limit'

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting — máximo 5 envíos por IP cada 15 minutos
    const ip = getClientIp(req)
    if (isRateLimited(ip, { maxRequests: 5, windowMs: 15 * 60 * 1000 })) {
      return NextResponse.json(
        { error: 'Demasiadas solicitudes. Intentá de nuevo en 15 minutos.' },
        { status: 429 }
      )
    }

    // 2. Verificar Content-Type
    const contentType = req.headers.get('content-type') ?? ''
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Content-Type inválido' }, { status: 400 })
    }

    // 3. Parsear body de forma segura
    let rawBody: unknown
    try {
      rawBody = await req.json()
    } catch {
      return NextResponse.json({ error: 'JSON inválido' }, { status: 400 })
    }

    // 4. Validar con Zod
    const result = ContactSchema.safeParse(rawBody)
    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Datos inválidos',
          details: result.error.flatten().fieldErrors,
        },
        { status: 422 }
      )
    }

    const validated = result.data

    // 5. Verificar que la variable de entorno existe
    const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('[contact] N8N_LEAD_WEBHOOK_URL no configurado')
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      )
    }

    // 6. Llamar al webhook con timeout de 8 segundos
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 8000)

    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: (rawBody as Record<string, unknown>)?.source ?? 'contact_page',
          name: validated.name,
          email: validated.email,
          phone: validated.phone ?? '',
          company: validated.company ?? '',
          country: validated.country ?? '',
          sector: validated.sector ?? '',
          message: validated.message,
          timestamp: new Date().toISOString(),
        }),
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

      if (!webhookResponse.ok) {
        console.error('[contact] Webhook error:', webhookResponse.status)
        return NextResponse.json(
          { error: 'Error al procesar la solicitud' },
          { status: 502 }
        )
      }
    } catch (fetchError) {
      clearTimeout(timeoutId)
      console.error('[contact] Error enviando al webhook:', fetchError)
      return NextResponse.json(
        { error: 'Error al procesar la solicitud' },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('[contact] Error inesperado:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 })
}
