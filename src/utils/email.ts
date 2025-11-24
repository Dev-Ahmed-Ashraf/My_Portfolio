import emailjs from '@emailjs/browser'

export type ContactPayload = {
  fullName: string
  email: string
  message: string
}

const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
  VITE_EMAILJS_TO_EMAIL,
} = import.meta.env

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

