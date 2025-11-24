import { useEffect, useState } from 'react'
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
      setTheme((current) => {
        const stored = localStorage.getItem('portfolio-theme') as ThemeMode | null
        if (stored) return stored
        return mediaQuery.matches ? 'dark' : 'light'
      })
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

