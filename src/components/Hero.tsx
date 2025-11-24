import { motion } from 'framer-motion'

type HeroProps = {
  onViewProjects: () => void
}

// Update `heroName` + messaging below to reflect your name and focus area.
const heroName = 'Ahmed Samir'

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.06, type: 'spring', stiffness: 120 },
  }),
}

const orbitingShapes = [
  { id: 1, size: 'w-20 h-20', delay: 0, border: 'border-neon-blue/40' },
  { id: 2, size: 'w-12 h-12', delay: 2, border: 'border-purple-accent/40' },
  { id: 3, size: 'w-16 h-16', delay: 4, border: 'border-white/20' },
]

const Hero = ({ onViewProjects }: HeroProps) => {
  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-24 pt-24 sm:pt-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        <div className="relative z-10 flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-800 shadow-glow-blue dark:bg-slate-900/80 dark:text-slate-100">
            <span className="h-2 w-2 rounded-full bg-neon-blue" aria-hidden />
            .NET Backend Developer
          </span>

          <motion.h1
            className="mt-6 font-display text-4xl leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
            initial="hidden"
            animate="visible"
          >
            {heroName.split('').map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariants}
                custom={index}
                className={char === ' ' ? 'inline-block w-3' : 'inline-block gradient-text'}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-200">
            Building scalable, high-performance RESTful APIs with ASP.NET Core, event-driven
            architectures, and Azure-native observability.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={onViewProjects}
              className="focus-outline inline-flex items-center rounded-full bg-neon-blue px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-glow-blue transition hover:-translate-y-0.5 hover:bg-neon-blue/90"
            >
              View Projects
            </button>
            <a
              href="/assets/resume.pdf"
              download
              className="focus-outline inline-flex items-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-800 transition hover:-translate-y-0.5 hover:border-neon-blue hover:text-neon-blue dark:text-slate-100"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="relative flex flex-1 justify-center lg:justify-end">
          <div className="glass-panel relative h-80 w-72 overflow-hidden rounded-3xl border border-white/20 shadow-glow-purple">
            <img
              src="/assets/profile.jpg"
              alt="Portrait of Ahmed Samir"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
          </div>

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {orbitingShapes.map((shape) => (
              <motion.span
                key={shape.id}
                className={`absolute left-1/2 top-1/2 ${shape.size} -translate-x-1/2 -translate-y-1/2 rounded-full border ${shape.border}`}
                style={{ animationDelay: `${shape.delay}s` }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear', delay: shape.delay }}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-neon-blue/20 blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-purple-accent/20 blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
    </section>
  )
}

export default Hero

