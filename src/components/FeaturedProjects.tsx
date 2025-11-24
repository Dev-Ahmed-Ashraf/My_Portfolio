import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

type FeaturedProjectsProps = {
  highlightSkill: string | null
}

const FeaturedProjects = ({ highlightSkill }: FeaturedProjectsProps) => {
  const highlightedProjects = new Set(
    highlightSkill
      ? projects.filter((project) => project.skills.includes(highlightSkill)).map((p) => p.id)
      : [],
  )

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neon-blue">
              Featured Projects
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Built for scale</h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Production-grade APIs with focus on uptime, telemetry, and developer experience.
            </p>
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              highlighted={highlightedProjects.has(project.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects

