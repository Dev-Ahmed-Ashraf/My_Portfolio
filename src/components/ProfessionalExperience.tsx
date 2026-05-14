import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi'
import { professionalExperiences } from '../data/experience'

const ProfessionalExperience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring' as const, stiffness: 120, damping: 12 },
    },
  }

  return (
    <section id="experience" className="relative px-6 py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[var(--bg-primary)]" />

      {/* Animated background shapes */}
      <div className="absolute -z-10 top-1/3 -left-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl dark:bg-blue-900/5" />
      <div className="absolute -z-10 bottom-1/4 -right-40 w-80 h-80 bg-purple-200/15 rounded-full blur-3xl dark:bg-purple-900/10" />

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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
              Professional Experience
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
            Internship <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-300 dark:via-purple-300 dark:to-blue-300 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 dark:text-slate-200 max-w-2xl leading-relaxed"
          >
            Hands-on experience building production-grade systems with real-world challenges. Gained expertise in enterprise architecture, secure APIs, and distributed systems at leading tech companies.
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          {professionalExperiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl transition-all duration-500 border border-white/20 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-400/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/40 via-transparent to-white/20 dark:from-white/5 dark:via-transparent dark:to-white/0" />

              {/* Animated accent bar */}
              <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${exp.color}`} />

              {/* Colored corner glow */}
              <div className={`absolute -inset-full -z-10 bg-gradient-to-r ${exp.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="p-8 md:p-10">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  {/* Left: Company & Role */}
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 bg-clip-text text-transparent">
                          {exp.company}
                        </h3>
                        {exp.type === 'internship' && (
                          <motion.span
                            variants={badgeVariants}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-600/30 dark:to-purple-600/30 text-blue-700 dark:text-blue-200 border border-blue-300/40 dark:border-blue-500/30"
                          >
                            Internship
                          </motion.span>
                        )}
                      </div>
                      <p className="text-lg font-semibold text-slate-700 dark:text-slate-200">
                        {exp.role}
                      </p>
                    </motion.div>
                  </div>

                  {/* Right: Meta info */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.35 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:items-end gap-2"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <FiCalendar className="text-base" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                      <FiMapPin className="text-base" />
                      <span>
                        {exp.location} •{' '}
                        <span className="capitalize">
                          {exp.locationType === 'onsite' ? 'On-site' : exp.locationType === 'remote' ? 'Remote' : 'Hybrid'}
                        </span>
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed"
                >
                  {exp.description}
                </motion.p>

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.45 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200 mb-3">
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + 0.5 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <FiCheckCircle className="mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-700 dark:text-slate-200 mb-3">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/60 dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-200/40 dark:border-white/10 backdrop-blur-sm transition-all hover:bg-white/80 dark:hover:bg-white/15 hover:border-slate-300/60 dark:hover:border-white/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-blue-600/10 dark:from-blue-600/5 dark:via-purple-600/5 dark:to-blue-600/5 border border-blue-200/30 dark:border-blue-400/20 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Building Production Systems
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            These internship experiences represent real-world projects deployed in production environments, handling user traffic and business-critical operations.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Open to internship and full-time opportunities to continue building scalable, secure systems.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalExperience
