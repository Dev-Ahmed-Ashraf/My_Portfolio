import { useCallback, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import SkillsGrid from '../components/SkillsGrid'
import Timeline from '../components/Timeline'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import type { ThemeMode } from '../utils/theme'

type HomeProps = {
  theme: ThemeMode
  onToggleTheme: () => void
}

const Home = ({ theme, onToggleTheme }: HomeProps) => {
  const [highlightSkill, setHighlightSkill] = useState<string | null>(null)

  const handleScrollToProjects = useCallback(() => {
    const target = document.getElementById('projects')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="bg-light-gradient text-slate-900 transition-colors duration-300 dark:bg-dark-gradient dark:text-white">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main id="main">
        <Hero onViewProjects={handleScrollToProjects} />
        <FeaturedProjects highlightSkill={highlightSkill} />
        <SkillsGrid activeSkill={highlightSkill} onSelectSkill={setHighlightSkill} />
        <Timeline />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default Home

