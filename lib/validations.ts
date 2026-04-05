import { z } from 'zod'

// ── Contact form schema ─────────────────────────────────────────────
// Shared between client (ContactForm.tsx) and server (api/contact)

export const ContactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede superar 100 caracteres')
    .regex(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'\-\.]+$/,
      'El nombre contiene caracteres no permitidos'
    )
    .trim(),
  email: z
    .string()
    .email('Email inválido')
    .max(254, 'Email demasiado largo')
    .toLowerCase()
    .trim(),
  company: z
    .string()
    .max(150, 'El nombre de empresa no puede superar 150 caracteres')
    .trim()
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .max(20, 'Teléfono demasiado largo')
    .regex(/^[\d\s+\-()\.]*/,  'Teléfono contiene caracteres no permitidos')
    .trim()
    .optional()
    .or(z.literal('')),
  country: z
    .string()
    .max(100, 'País demasiado largo')
    .trim()
    .optional()
    .or(z.literal('')),
  sector: z
    .string()
    .max(100, 'Sector demasiado largo')
    .trim()
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(2000, 'El mensaje no puede superar 2000 caracteres')
    .trim(),
})

export type ContactFormData = z.infer<typeof ContactSchema>

// ── Bot message schema ──────────────────────────────────────────────
// Matches the actual shape sent by ChatWidget: { messages: [...] }

const ChatMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().max(2000).trim(),
})

export const BotMessageSchema = z.object({
  messages: z
    .array(ChatMessageSchema)
    .min(1, 'Se requiere al menos un mensaje')
    .max(20, 'Demasiados mensajes en el historial'),
})

export type BotMessageData = z.infer<typeof BotMessageSchema>
