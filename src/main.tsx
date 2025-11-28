import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App.tsx'

if (typeof globalThis !== 'undefined') {
  ;(globalThis as { __APP_ENV__?: Record<string, string | undefined> }).__APP_ENV__ = import.meta.env
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
