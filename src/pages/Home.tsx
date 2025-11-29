import { useCallback, useState, useEffect, lazy, Suspense, memo } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import type { ThemeMode } from '../utils/theme'

// Lazy-load heavier content to improve initial bundle and perceived performance
const FeaturedProjects = lazy(() => import('../components/FeaturedProjects'))
const SkillsGrid = lazy(() => import('../components/SkillsGrid'))
const Timeline = lazy(() => import('../components/Timeline'))
const ContactForm = lazy(() => import('../components/ContactForm'))
const Footer = lazy(() => import('../components/Footer'))

type HomeProps = {
  theme: ThemeMode
  onToggleTheme: () => void
}

const LoadingBlock = ({ label = 'Loading' }: { label?: string }) => (
  <div aria-hidden className="animate-pulse rounded-lg bg-slate-100 dark:bg-slate-800 h-36 w-full" role="status">
    <span className="sr-only">{label}…</span>
  </div>
)

const Home = ({ theme, onToggleTheme }: HomeProps) => {
  const [highlightSkill, setHighlightSkill] = useState<string | null>(null)

  
  // Accessibility: quick skip link to main content for keyboard users
  useEffect(() => {
    document.title = 'Ahmed Ashraf | .NET Backend Developer'
  }, [])

  const handleScrollToProjects = useCallback(() => {
    const target = document.getElementById('projects')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const handleSelectSkill = useCallback(
    (skillId: string | null) => {
      setHighlightSkill(skillId)

      if (skillId) {
        requestAnimationFrame(() => handleScrollToProjects())
      }
    },
    [handleScrollToProjects],
  )

  return (
    <div className="bg-light-gradient text-slate-900 transition-colors duration-300 dark:bg-dark-gradient dark:text-white">
      {/* Skip link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white/90 focus:shadow-md focus:px-3 focus:py-2">Skip to content</a>

      <Header theme={theme} onToggleTheme={onToggleTheme} />

      <main id="main" role="main">
        <Hero onViewProjects={handleScrollToProjects} />

<Suspense fallback={<LoadingBlock label="Projects" />}>
  <FeaturedProjects
    highlightSkill={highlightSkill}
    onSelectSkill={handleSelectSkill}  // ⬅⬅ إضافـة مهمة
  />
</Suspense>


        <Suspense fallback={<LoadingBlock label="Skills" />}>
          <SkillsGrid activeSkill={highlightSkill} onSelectSkill={handleSelectSkill} />
        </Suspense>

        <Suspense fallback={<LoadingBlock label="Experience" />}>
          <Timeline />
        </Suspense>

        <Suspense fallback={<LoadingBlock label="Contact" />}>
          <ContactForm />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-24" aria-hidden />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default memo(Home)

