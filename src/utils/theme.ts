export type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'portfolio-theme'

const prefersDark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches

const getStoredTheme = (): ThemeMode | null => {
  if (typeof window === 'undefined') return null
  return (localStorage.getItem(THEME_KEY) as ThemeMode | null) ?? null
}

export const getInitialTheme = (): ThemeMode => {
  if (typeof document === 'undefined') {
    return 'dark'
  }

  return getStoredTheme() ?? (prefersDark() ? 'dark' : 'light')
}

export const applyThemeClass = (theme: ThemeMode) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
}

export const persistTheme = (theme: ThemeMode) => {
  if (typeof window === 'undefined') return
  localStorage.setItem(THEME_KEY, theme)
}

