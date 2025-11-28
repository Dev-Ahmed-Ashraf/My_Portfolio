export type ThemeMode = 'light' | 'dark'

const THEME_KEY = 'portfolio-theme'

const prefersDark = () =>
  typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const getStoredTheme = (): ThemeMode | null => {
  if (typeof window === 'undefined') return null
  try {
    const v = localStorage.getItem(THEME_KEY)
    if (v === 'dark' || v === 'light') return v as ThemeMode
    return null
  } catch (e) {
    return null
  }
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

  // update theme-color meta tag if present (improves mobile browser theming)
  try {
    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff')
  } catch (e) {
    // ignore
  }
}

export const persistTheme = (theme: ThemeMode) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch (e) {
    // ignore storage errors (private mode)
  }
}

