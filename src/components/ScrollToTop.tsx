import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FiArrowUp } from "react-icons/fi"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (

<motion.button
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.85, duration: 0.5 }}
  className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 shadow-[0_8px_32px_RGBA(56,189,248,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_RGBA(56,189,248,0.6)] overflow-hidden dark:from-blue-500 dark:via-sky-500 dark:to-sky-400"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <FiArrowUp className="text-base group-hover:rotate-45 transition-transform duration-300" />
  <span className="absolute inset-0 rounded-full bg-white opacity-0 blur-xl transition group-hover:opacity-20"></span>
</motion.button>
  )
}

export default ScrollToTop
