import { motion } from 'framer-motion'
import { skillClusters } from '../data/skills'

type SkillsGridProps = {
  activeSkill: string | null
  onSelectSkill: (skillId: string | null) => void
}

const SkillsGrid = ({ activeSkill, onSelectSkill }: SkillsGridProps) => {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-accent">
              Skills
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              Backend toolkit
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Filter the projects above by selecting any skill. Bars represent proficiency depth.
            </p>
          </div>
          <button
            onClick={() => onSelectSkill(null)}
            className="focus-outline self-start rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-neon-blue"
          >
            Clear filter
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skillClusters.map((cluster) => (
            <motion.div
              key={cluster.id}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {cluster.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {cluster.items.length} skills
                </p>
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{cluster.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {cluster.items.map((skill) => {
                  const isActive = activeSkill === skill.id
                  return (
                    <button
                      key={skill.id}
                      onClick={() => onSelectSkill(isActive ? null : skill.id)}
                      aria-pressed={isActive}
                      className={`focus-outline flex-1 rounded-2xl border px-4 py-3 text-left transition ${
                        isActive
                          ? 'border-neon-blue/60 bg-neon-blue/10 text-neon-blue'
                          : 'border-white/10 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <span>{skill.label}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full ${
                            isActive ? 'bg-neon-blue' : 'bg-purple-accent/80'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-slate-500">
                        Highlights:{' '}
                        <span className="font-semibold text-slate-700 dark:text-slate-200">
                          {skill.projects.length} project(s)
                        </span>
                      </p>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsGrid

