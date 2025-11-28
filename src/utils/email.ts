import emailjs from '@emailjs/browser'

export type ContactPayload = {
  fullName: string
  email: string
  message: string
}

const envFallback =
  (typeof globalThis !== 'undefined' &&
    (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env) ||
  undefined

const runtimeEnv: Record<string, string | undefined> =
  (typeof import.meta !== 'undefined'
    ? (import.meta.env as Record<string, string | undefined>)
    : envFallback) ?? {}

const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
  VITE_EMAILJS_TO_EMAIL,
} = runtimeEnv

export const sendContactEmail = async (payload: ContactPayload) => {
  if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
    throw new Error('Missing EmailJS environment variables.')
  }

  await emailjs.send(
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: payload.fullName,
      reply_to: payload.email,
      message: payload.message,
      to_email: VITE_EMAILJS_TO_EMAIL ?? 'hello@example.com',
    },
    {
      publicKey: VITE_EMAILJS_PUBLIC_KEY,
    },
  )
}

