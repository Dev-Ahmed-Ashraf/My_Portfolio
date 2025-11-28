import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail, FiDownload} from 'react-icons/fi'
import { sendContactEmail } from '../utils/email'
import toast from 'react-hot-toast'

type FormState = 'idle' | 'loading' | 'success' | 'error'



// Social links with your actual profiles
const socialLinks = [
  { id: 'github', icon: FiGithub, label: 'GitHub', url: 'https://github.com/Dev-Ahmed-Ashraf' },
  { id: 'linkedin', icon: FiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed-ashraf-758b452b3/' },
  { id: 'email', icon: FiMail, label: 'Email', url: 'mailto:ahmedashraf01085@gmail.com' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
  },
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fullName = String(formData.get('fullName') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

if (!fullName || !email || !message) {
 toast.error('Please complete all fields before sending!')
 return
}

    setFormState('loading')

    try {
      await sendContactEmail({ fullName, email, message })
      toast.success('Message sent successfully! 🚀')
      formRef.current?.reset()
      setFormState('success')
} catch (error) {
  console.error(error)
  toast.error('Failed to send message. Please try again ❌')
setFormState('error')
} finally {
  setTimeout(() => setFormState('idle'), 4000)
}

  }

  return (
    <section id="contact" className="relative px-6 py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-transparent dark:via-transparent dark:to-transparent" />
      
      {/* Animated background shapes */}
      <div className="absolute -z-10 top-1/4 -right-40 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl dark:bg-blue-900/10" />
      <div className="absolute -z-10 bottom-1/3 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl dark:bg-purple-900/5" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-purple-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Get in touch
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-300 dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent">build</span> something great
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-200">
            Interested in collaboration, backend roles, or technical mentorship? Reach out and let's connect.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Social Links & Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Connect directly
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group focus-outline inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-white/5 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                    >
                      <Icon className="group-hover:rotate-12 transition-transform" />
                      {social.label}
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Download CV
              </h3>
              <motion.a
                href="/assets/resume.pdf"
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group focus-outline inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiDownload className="group-hover:translate-y-1 transition-transform" />
                Get my CV
              </motion.a>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-semibold dark:text-white text-slate-950">Email:</span> ahmedashraf01085@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-500"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-white/5 dark:via-transparent dark:to-white/0" />

            {/* Glow effect */}
            <div className="absolute -inset-full -z-10 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-6">

              {/* Full Name */}
              <motion.div variants={itemVariants}>
                <label className="text-sm font-semibold text-slate-900 dark:text-white block mb-2">
                  Full name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Ahmed Ashraf"
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="text-sm font-semibold text-slate-900 dark:text-white block mb-2">
                  Email address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="text-sm font-semibold text-slate-900 dark:text-white block mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project, timeline, and what you're looking for..."
                  className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={formState === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl disabled:shadow-none transition-all duration-300"
              >
                {formState === 'loading' && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                )}
                {formState === 'idle' && 'Send message'}
                {formState === 'loading' && 'Sending…'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactForm

