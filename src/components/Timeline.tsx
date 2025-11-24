import { experienceTimeline } from '../data/timeline'

const Timeline = () => {
  return (
    <section id="timeline" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neon-blue">Experience</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
          Shipping backend impact
        </h2>
        <div className="mt-10 space-y-8 border-l border-white/15 pl-8">
          {experienceTimeline.map((item) => (
            <article key={item.period} className="relative pl-6">
              <span className="absolute -left-[39px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border border-white/30 bg-purple-accent shadow-glow-purple" />
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                {item.role} · {item.company}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

