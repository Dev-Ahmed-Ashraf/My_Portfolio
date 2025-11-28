import { motion } from 'framer-motion'
import { experienceTimeline } from '../data/timeline'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 90, damping: 16 } },
}

const Timeline = () => {
  return (
    <section id="timeline" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-gradient-to-r from-purple-600 to-blue-600" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Experience
            </p>
          </div>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Professional & Project Experience
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">
            A concise timeline showcasing my learning journey, personal projects, and the practical experience I built while studying and self-learning.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
        >
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 ml-0" />

          <div className="space-y-10 pl-12">
            {experienceTimeline.map((itemData, idx) => (
              <motion.article
                key={`${itemData.period}-${idx}`}
                variants={item}
                className="relative"
              >
                <div className="absolute -left-10 top-2 -translate-y-1 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 ring-4 ring-white/90 dark:ring-slate-900 shadow-md" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                  <div className="min-w-[160px]">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300">
                      {itemData.period}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {itemData.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      {itemData.company}
                    </p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {itemData.summary}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline

