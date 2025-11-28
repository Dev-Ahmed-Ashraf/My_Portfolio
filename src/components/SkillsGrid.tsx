import { motion } from 'framer-motion'
import { skillClusters } from '../data/skills'

type SkillsGridProps = {
  activeSkill: string | null
  onSelectSkill: (skillId: string | null) => void
}

const SkillsGrid = ({ activeSkill, onSelectSkill }: SkillsGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05, duration: 0.25 },
    },
  }

  const clusterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 120, damping: 12 },
    },
  }

  return (
    <section id="skills" className="relative px-6 py-24 overflow-hidden">
      {/* Background gradient - light mode */}
      <div className="absolute inset-0 -z-10 bg-[var(--bg-primary)]" />
      
      {/* Animated background shapes */}
      <div className="absolute -z-10 top-1/2 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl dark:bg-purple-900/5" />
      <div className="absolute -z-10 bottom-1/3 -right-40 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl dark:bg-blue-900/10" />

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
            <div className="h-1 w-8 bg-gradient-to-r from-purple-600 to-blue-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300 bg-clip-text text-transparent">
              Skills & Expertise
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
            Backend <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-300 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">toolkit</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 dark:text-slate-200 max-w-2xl leading-relaxed"
          >
            Enterprise-level expertise spanning architecture patterns, database technologies, and enterprise frameworks. Click any skill to see related projects that demonstrate real-world implementation.
          </motion.p>

          {/* Clear Filter Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={() => onSelectSkill(null)}
            className="mt-6 focus-outline inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide border border-purple-200/50 dark:border-purple-400/30 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 group"
          >
            <span>✕</span>
            <span>Clear filter</span>
          </motion.button>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {skillClusters.map((cluster, idx) => (
            <motion.div
              key={cluster.id}
              variants={clusterVariants}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500 border border-white/20 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-white/5 dark:via-transparent dark:to-white/0" />

              {/* Animated corner glow */}
              <div className="absolute -inset-full -z-10 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8">
                {/* Cluster Header */}
                <div className="flex items-center justify-between mb-3">
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 bg-clip-text text-transparent"
                  >
                    {cluster.title}
                  </motion.h3>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold shadow-lg"
                  >
                    {cluster.items.length}
                  </motion.span>
                </div>

                {/* Cluster Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {cluster.description}
                </p>

                {/* Skills Grid */}
                <div className="space-y-3">
                  {cluster.items.map((skill, skillIdx) => {
                    const isActive = activeSkill === skill.id
                    return (
                      <motion.button
                        key={skill.id}
                        variants={skillVariants}
                        onClick={() => onSelectSkill(skill.id)}
                        aria-pressed={isActive}
                        className={`w-full focus-outline rounded-2xl px-4 py-4 text-left transition-all duration-300 group/skill ${
                          isActive
                            ? 'border-2 border-purple-500/60 bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:from-purple-600/15 dark:to-blue-600/15 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
                            : 'border border-white/10 dark:border-white/5 hover:border-purple-300/40 dark:hover:border-purple-400/30 bg-white/40 dark:bg-white/5 hover:bg-white/50 dark:hover:bg-white/10'
                        }`}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-bold transition-colors ${
                            isActive
                              ? 'text-purple-600 dark:text-purple-200'
                              : 'text-slate-900 dark:text-white'
                          }`}>
                            {skill.label}
                          </span>
                          <span className={`text-xs font-bold tracking-widest ${
                            isActive
                              ? 'text-purple-600 dark:text-purple-200'
                              : 'text-slate-500 dark:text-slate-400'
                          }`}>
                            {skill.level}%
                          </span>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="h-2.5 rounded-full bg-white/20 dark:bg-white/10 overflow-hidden mb-3 group-hover/skill:bg-white/30 dark:group-hover/skill:bg-white/15 transition-colors">
                          <motion.div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isActive
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-[0_0_12px_rgba(168,85,247,0.6)]'
                                : 'bg-gradient-to-r from-purple-500 to-blue-500'
                            }`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ delay: skillIdx * 0.05 + 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                          />
                        </div>

                        {/* Project Count */}
                        <div className="flex items-center gap-1.5 text-xs">
                          <span className={`${isActive ? 'text-purple-600 dark:text-purple-200' : 'text-slate-500 dark:text-slate-400'}`}>
                            📊
                          </span>
                          <span className={`${isActive ? 'text-purple-600 dark:text-purple-200 font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
                            Used in {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-purple-600/10 via-blue-600/5 to-purple-600/10 dark:from-purple-600/5 dark:via-blue-600/5 dark:to-purple-600/5 border border-purple-200/30 dark:border-purple-400/20 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Ready to collaborate?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            These skills have been proven across production systems and enterprise applications. Let's build something great together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsGrid

