import { useState } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import type { ThemeMode } from '../utils/theme'

const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'timeline', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

type HeaderProps = {
  theme: ThemeMode
  onToggleTheme: () => void
}

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenu = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgba(255,255,255,0.75)] backdrop-blur-2xl dark:bg-[rgba(7,10,18,0.85)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-display text-xl font-semibold tracking-tight gradient-text focus-outline"
          onClick={closeMenu}
        >
          {/* Update name via text below */}
          Ahmed.dev
        </a>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-neon-blue focus-outline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle color mode"
            onClick={onToggleTheme}
            className="focus-outline inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/60 text-slate-800 transition-colors duration-300 hover:border-neon-blue hover:text-neon-blue dark:bg-slate-900/70 dark:text-slate-100"
          >
            <span aria-hidden>
              {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
            </span>
          </button>

          <button
            className="md:hidden focus-outline inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/70 text-slate-800 dark:bg-slate-900/70 dark:text-slate-100"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-white/80 px-6 pb-6 pt-2 shadow-glow-blue dark:bg-slate-900/95"
            id="mobile-navigation"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-slate-800 dark:text-slate-100">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="block rounded-lg border border-transparent px-3 py-2 hover:border-neon-blue/40 focus-outline"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Header

