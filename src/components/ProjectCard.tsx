import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  highlighted: boolean
}

const ProjectCard = ({ project, highlighted }: ProjectCardProps) => {
  // Tech stack colors mapping - aligned with actual projects
const getTechColor = (tech: string) => {
  const techColors: Record<string, string> = {
    // ======================
    // 🟣 .NET & C# Ecosystem
    // ======================
    'C#': 'from-purple-700 to-purple-500',
    'ASP.NET Core Web API': 'from-purple-600 to-purple-400',
    'ASP.NET Core MVC': 'from-purple-600 to-purple-400',
    '.NET Framework (WinForms)': 'from-purple-700 to-purple-500',

    // ======================
    // 🔵 Databases & ORM
    // ======================
    'SQL Server': 'from-blue-700 to-blue-500',
    'EF Core': 'from-blue-600 to-cyan-500',
    'ADO.NET': 'from-blue-700 to-blue-500',
    'LINQ': 'from-cyan-600 to-teal-400',

    // ======================
    // 🧬 Architecture & Patterns
    // ======================
    'MediatR (CQRS)': 'from-indigo-600 to-indigo-400',
    'FluentValidation': 'from-indigo-600 to-indigo-400',
    'Layered Architecture': 'from-indigo-700 to-indigo-500',
    'JWT Authentication': 'from-slate-700 to-slate-500',
    'Serilog': 'from-slate-700 to-slate-500',

    // ======================
    // 🌍 UI + Frontend
    // ======================
    'HTML': 'from-red-600 to-rose-500',
    'CSS': 'from-blue-500 to-sky-400',
    'JavaScript': 'from-yellow-500 to-amber-400',
    'jQuery': 'from-blue-400 to-blue-300',
    'Ajax': 'from-green-500 to-teal-400',
    'Bootstrap 5': 'from-violet-600 to-purple-500',
    'Chart.js': 'from-emerald-500 to-teal-400',

    // ======================
    // 💳 Payments & Integrations
    // ======================
    'Stripe': 'from-pink-600 to-rose-400',

    // ======================
    // 🐳 Deployment & DevOps
    // ======================
    'Docker': 'from-blue-600 to-cyan-500',
  }

  return techColors[tech] || 'from-slate-700 to-slate-500'
}

  return (
    <motion.article
      layout
      whileHover={{ y: -12, rotateX: 2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`group relative overflow-hidden rounded-3xl backdrop-blur-2xl transition-all duration-500 ${
        highlighted 
          ? 'border-2 border-blue-500/60 shadow-[0_0_40px_rgba(59,130,246,0.4)]' 
          : 'border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.15)]'
      } hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)]`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 dark:from-white/5 dark:via-transparent dark:to-white/0" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col p-6 h-full">
        {/* Image container with enhanced effects */}
        <div className="relative overflow-hidden rounded-2xl border border-white/20 group-hover:border-blue-400/50 transition-all duration-500">
          <motion.img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-48 w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
            loading="lazy"
          />
          {/* Enhanced gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent group-hover:from-slate-950/50 transition-all duration-500" />
          
          {/* Shine effect */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content section */}
        <div className="mt-6 flex-1 space-y-4">
          {/* Title with gradient */}
          <motion.h3 
            className="project-card-title text-xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-white dark:to-slate-50 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          
          {/* Description */}
          <p className="project-card-description text-sm text-slate-800 dark:text-slate-800 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech stack with enhanced styling */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${getTechColor(tech)} px-3 py-1.5 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.3)] transition-all duration-300`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* GitHub button - enhanced */}
        <div className="mt-6 flex gap-3">
          <motion.a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn focus-outline flex-1 relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white overflow-hidden"
          >
            {/* Button background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-full" />
            
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full opacity-0 group-hover/btn:opacity-100 blur-xl transition-opacity duration-500" />
            
            {/* Button border */}
            <div className="absolute inset-0 rounded-full border border-white/30 group-hover/btn:border-white/60 transition-all duration-300" />
            
            {/* Shadow */}
            <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_8px_24px_rgba(59,130,246,0.3)] group-hover/btn:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_32px_rgba(59,130,246,0.5)] rounded-full transition-shadow duration-300" />
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              <FiGithub className="group-hover/btn:rotate-12 transition-transform duration-300" />
              View Code
            </span>
          </motion.a>
        </div>
      </div>

      {/* Highlighted border animation */}
      {highlighted && (
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-blue-500/40"
          animate={{
            boxShadow: [
              '0 0 40px rgba(59, 130, 246, 0.3)',
              '0 0 60px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(59, 130, 246, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ pointerEvents: 'none' }}
        />
      )}
    </motion.article>
  )
}

export default ProjectCard
