import Home from './pages/Home'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return <Home theme={theme} onToggleTheme={toggleTheme} />
}

export default App
