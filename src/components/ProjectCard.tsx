import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  highlighted: boolean
}

const ProjectCard = ({ project, highlighted }: ProjectCardProps) => {
  return (
    <motion.article
      layout
      whileHover={{ y: -8, rotateX: 1.5 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`glass-panel flex flex-col rounded-3xl p-6 shadow-card-light dark:shadow-card-dark ${
        highlighted ? 'border-neon-blue/50 shadow-glow-blue' : 'border-white/10'
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent" />
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-200/60 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-outline inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-neon-blue px-4 py-2 text-sm font-semibold text-slate-900 shadow-glow-blue hover:-translate-y-0.5"
        >
          <FiExternalLink aria-hidden />
          Live
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-outline inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-neon-blue hover:text-neon-blue dark:text-slate-100"
        >
          <FiGithub aria-hidden />
          GitHub
        </a>
      </div>
    </motion.article>
  )
}

export default ProjectCard

