import { useState } from 'react'
import type { FormEvent } from 'react'
import { FiLinkedin, FiGithub, FiMail, FiDownload } from 'react-icons/fi'
import { sendContactEmail } from '../utils/email'

type FormState = 'idle' | 'loading' | 'success' | 'error'

// Update social handles + mailto target with your real profiles.
const socialLinks = [
  { id: 'linkedin', icon: FiLinkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' },
  { id: 'github', icon: FiGithub, label: 'GitHub', url: 'https://github.com/your-handle' },
  { id: 'email', icon: FiMail, label: 'Email', url: 'mailto:hello@yourdomain.com' },
]

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fullName = String(formData.get('fullName') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    if (!fullName || !email || !message) {
      setFormError('Please complete all fields before sending.')
      return
    }

    setFormError(null)
    setFormState('loading')

    try {
      await sendContactEmail({ fullName, email, message })
      setFormState('success')
      event.currentTarget.reset()
    } catch (error) {
      console.error(error)
      setFormState('error')
      setFormError('Something went wrong. Please try again later or email me directly.')
    } finally {
      setTimeout(() => setFormState('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="px-6 pb-24 pt-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-accent">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Let&apos;s build</h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Send a note about backend roles, architecture reviews, or technical mentorship.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-outline inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-neon-blue hover:text-neon-blue dark:text-slate-200"
                >
                  <Icon aria-hidden />
                  {social.label}
                </a>
              )
            })}
            <a
              href="/assets/resume.pdf"
              download
              className="focus-outline inline-flex items-center gap-2 rounded-full bg-neon-blue px-5 py-3 text-sm font-semibold text-slate-900 shadow-glow-blue"
            >
              <FiDownload aria-hidden />
              Download CV
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-3xl p-8 space-y-6">
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="fullName">
              Full name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className="focus-outline mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:text-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="focus-outline mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:text-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-600 dark:text-slate-300" htmlFor="message">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="focus-outline mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 dark:text-white"
              placeholder="Share timelines, stack, and delivery goals…"
            />
          </div>
          {formError ? <p className="text-sm text-red-500">{formError}</p> : null}
          <button
            type="submit"
            disabled={formState === 'loading'}
            className="focus-outline inline-flex w-full items-center justify-center rounded-2xl bg-purple-accent px-6 py-3 text-sm font-semibold text-white shadow-glow-purple disabled:opacity-60"
          >
            {formState === 'loading' ? 'Sending…' : 'Send message'}
          </button>
          <div aria-live="polite">
            {formState === 'success' ? (
              <p className="text-sm text-emerald-400" role="status">
                Message sent! Talk soon.
              </p>
            ) : null}
            {formState === 'error' ? (
              <p className="text-sm text-red-400" role="alert">
                {formError}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm

