import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const footerNav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { id: 'github', icon: FiGithub, href: 'https://github.com/Dev-Ahmed-Ashraf', label: 'GitHub' },
  { id: 'linkedin', icon: FiLinkedin, href: 'https://www.linkedin.com/in/ahmed-ashraf-758b452b3/', label: 'LinkedIn' },
  { id: 'email', icon: FiMail, href: 'mailto:ahmedashraf01085@gmail.com', label: 'Email' },
]

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          {/* Column 1 - Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-3">
              <p className="text-xl font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Ahmed Ashraf
              </p>
              <h3 className="text-lg font-bold text-slate-700 dark:text-white">Backend Developer</h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Crafting scalable, enterprise-grade backend systems using modern .NET technologies and clean architecture principles.
            </p>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-[0.15em]">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {footerNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group inline-flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-outline"
                >
                  <span className="w-0 h-px bg-current group-hover:w-3 transition-all duration-300" />
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3 - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-[0.15em]">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-all duration-300 focus-outline"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          {/* Copyright */}
          <p className="text-xs text-slate-600 dark:text-slate-500">
            © {new Date().getFullYear()} Ahmed Ashraf. Designed & developed with passion. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

