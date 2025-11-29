import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { skillClusters } from '../data/skills'

type FeaturedProjectsProps = {
  highlightSkill: string | null
  onSelectSkill: (skill: string | null) => void
}

const FeaturedProjects = ({ highlightSkill, onSelectSkill }: FeaturedProjectsProps) => {
  const selectedSkill = highlightSkill
    ? skillClusters.flatMap(c => c.items).find(i => i.id === highlightSkill)
    : null

  const shouldFilter = Boolean(selectedSkill)

  const filteredProjects = shouldFilter
    ? projects.filter(p => selectedSkill!.projects.includes(p.id))
    : projects

  const highlightedProjects = new Set(
    shouldFilter ? filteredProjects.map(p => p.id) : []
  )


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  }

  return (
    <section id="projects" className="relative px-6 py-24 overflow-hidden">
      {/* Background gradient - light mode */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-transparent dark:via-transparent dark:to-transparent" />
      
      {/* Animated background shapes - light mode */}
      <div className="absolute -z-10 top-20 -right-32 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl dark:bg-blue-900/10" />
      <div className="absolute -z-10 -bottom-20 -left-32 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl dark:bg-purple-900/5" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-purple-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
              Featured Projects
            </p>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Built for <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-200 dark:via-purple-500 dark:to-blue-700 bg-clip-text text-transparent">scale</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-md   text-slate-600 dark:text-slate-600 max-w-2xl leading-relaxed"
          >
            Production-grade APIs with focus on uptime, telemetry, and developer experience. Each project demonstrates clean architecture, best practices, and enterprise-level design patterns.
          </motion.p>
        </motion.div>

        {/* Skill Filter Button */}
        {shouldFilter && (
          <motion.button
            onClick={() => onSelectSkill(null)}
            className="ml-auto mb-4 focus-outline px-5 py-2.5 rounded-full 
                      text-sm font-semibold uppercase tracking-wide
                      border border-blue-500/40 dark:border-blue-400/30
                      text-blue-600 dark:text-blue-300
                      hover:bg-blue-50 dark:hover:bg-blue-900/20
                      transition-all duration-300"
            aria-label="Show all projects again"
          >
            ↺ Show All
          </motion.button>
        )}

        {/* Projects Grid */}
<motion.div
  key={highlightSkill ?? "all"}
  layout
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
>
  <AnimatePresence mode="sync">
    {filteredProjects.map((project) => (
      <motion.div
        key={project.id}
        variants={itemVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35 }}
      >
        <ProjectCard
          project={project}
          highlighted={highlightedProjects.has(project.id)}
        />
      </motion.div>
    ))}
  </AnimatePresence>
  
  {filteredProjects.length === 0 && (
    <p className="text-center text-slate-500 dark:text-slate-300 col-span-full py-8">
      No matching projects found.
    </p>
  )}
</motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-200 mb-4">
            Want to see more projects?
          </p>
          <motion.a
            href="https://github.com/Dev-Ahmed-Ashraf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            View All on GitHub
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects

