import { useState, useEffect, useRef } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const menuRef = useRef<HTMLElement | null>(null)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // close mobile menu on Escape and when clicking outside
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }

    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (!mobileOpen) return
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(target)
      ) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('keydown', onKey)
    window.addEventListener('click', onClickOutside)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('click', onClickOutside)
    }
  }, [mobileOpen])

  // Track active section from URL hash (useful when navigating links)
  useEffect(() => {
    const updateFromHash = () => setActiveSection(window.location.hash.replace('#', '') || null)
    updateFromHash()
    window.addEventListener('hashchange', updateFromHash)
    return () => window.removeEventListener('hashchange', updateFromHash)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 supports-[backdrop-filter]:backdrop-blur-xl ${
        scrolled
          ? 'bg-white/85 dark:bg-slate-950/80 border-white/40 dark:border-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.12)]'
          : 'bg-white/40 dark:bg-slate-950/30 border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#hero"
            onClick={closeMenu}
            className="inline-flex items-center gap-3"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 220 }}
          >
            {/* On small screens show a small circular profile image; hide it on large screens (Hero will show the full image) */}
            <span className="h-9 w-9 rounded-full overflow-hidden lg:hidden">
              <img src="/assets/profile.jpg" alt="Ahmed Ashraf" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#007BFF] to-[#abbecc] bg-clip-text text-transparent select-none">
              Ahmed Ashraf
            </span>
          </motion.a>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 transition-colors dark:text-slate-200"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                aria-current={isActive ? 'page' : undefined}
                className={`relative pb-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400 dark:focus-visible:ring-sky-600 ${
                  isActive
                    ? 'text-sky-500 dark:text-sky-400'
                    : 'text-slate-600 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400'
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                  initial={{ scaleX: isActive ? 1 : 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.28 }}
                />
              </motion.a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">

          {/* CTA */}
          <motion.a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-transparent 
                       bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white 
                       shadow-lg shadow-sky-500/30 transition hover:shadow-xl"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Lets Talk
          </motion.a>

          {/* Theme Button */}
          <motion.button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="focus-outline inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40
                       bg-white/80 text-slate-700 transition hover:border-sky-400 hover:text-sky-500
                       dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-sky-500"
            whileTap={{ scale: 0.85 }}
          >
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            ref={toggleButtonRef}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full
                       border border-white/20 bg-white/60 text-slate-900 dark:bg-slate-900/70 dark:text-slate-100"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen((p) => !p)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            ref={menuRef}
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="md:hidden absolute left-0 right-0 top-full mx-4 mt-2 overflow-hidden rounded-2xl border border-white/20
                       bg-gradient-to-b from-white/95 to-white/85 px-6 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.15)] backdrop-blur-2xl
                       dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-950/95 dark:to-slate-900/80"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-slate-700 dark:text-slate-100">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 260 }}
                >
                  <a
                    onClick={closeMenu}
                    href={`#${link.id}`}
                    className="block rounded-xl px-3 py-2 transition-colors duration-300 hover:bg-slate-100/70 hover:text-sky-600 dark:hover:bg-white/10 dark:hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
