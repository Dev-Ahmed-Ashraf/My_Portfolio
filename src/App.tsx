import Home from './pages/Home'
import { useTheme } from './hooks/useTheme'
import ScrollToTop from './components/ScrollToTop.tsx'
import { Toaster } from 'react-hot-toast'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Home theme={theme} onToggleTheme={toggleTheme} />
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e1e2f',
            color: '#fff',
            borderRadius: '10px',
          },
        }}
      />
    </>
  )
}

export default App
