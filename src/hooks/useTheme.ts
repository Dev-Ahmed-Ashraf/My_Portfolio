import { useEffect, useState, useCallback } from 'react'
import {
  applyThemeClass,
  getInitialTheme,
  persistTheme,
  type ThemeMode,
} from '../utils/theme'

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => getInitialTheme())

  useEffect(() => {
    applyThemeClass(theme)
    persistTheme(theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      try {
        const stored = localStorage.getItem('portfolio-theme') as ThemeMode | null
        if (stored) {
          setTheme(stored)
          return
        }
      } catch {
        // ignore storage errors (e.g., private mode)
      }
      setTheme(mediaQuery.matches ? 'dark' : 'light')
    }

    // Modern browsers support addEventListener on MediaQueryList; fallback to addListener for older environments
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      // Fallback: older browsers implement addListener/removeListener on MediaQueryList
      const mq = mediaQuery as unknown as MediaQueryList & {
        addListener?: (h: (e: MediaQueryListEvent) => void) => void
        removeListener?: (h: (e: MediaQueryListEvent) => void) => void
      }
      if (typeof mq.addListener === 'function') {
        mq.addListener!(handleChange)
        return () => mq.removeListener!(handleChange)
      }
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}

