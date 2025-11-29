import { motion, type Transition, useReducedMotion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaDatabase, FaDownload } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";


type HeroProps = {
  onViewProjects: () => void;
};

const heroName = "Ahmed Ashraf";

const letterVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      type: "spring" as const,
      stiffness: 140,
      damping: 12,
    },
  }),
  float: (index: number) => ({
    y: [0, -8, 0],
    transition: {
      delay: index * 0.1,
      duration: 3 + index * 0.15,
      repeat: Infinity,
            ease: [0.42, 0, 0.58, 1] as Transition["ease"], // cubic-bezier for easeInOut (typed)
    },
  }),
};

const Hero = ({ onViewProjects }: HeroProps) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-24 md:pt-28
             bg-[var(--bg-primary)] dark:bg-[#05070f]"
    >
      {/* خلفية Aura ناعمة */}
<div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full 
                bg-purple-500/20 blur-[140px] dark:hidden" />

<div className="pointer-events-none absolute -right-32 bottom-[-4rem] h-80 w-80 rounded-full 
                bg-sky-400/15 blur-[150px] dark:hidden" />

<div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full 
                bg-purple-700/20 blur-[160px] hidden dark:block" />
<div className="pointer-events-none absolute -right-32 bottom-[-4rem] h-80 w-80 rounded-full 
                bg-sky-500/15 blur-[160px] hidden dark:block" />


      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
        {/* النص */}
        <div className="relative z-10 flex-1 text-center lg:text-left">
          <motion.span
  initial={{ opacity: 0, y: -8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white shadow-[0_0_18px_rgba(89,185,255,0.7),0_0_28px_rgba(128,90,213,0.5)] backdrop-blur-md dark:border-white/10"
>
            <span className="h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_10px_white]" />
  .NET Backend Developer
</motion.span>

          {/* الاسم بالحروف المتحركة */}
          <motion.h1
  className="mt-4 font-display font-bold text-5xl leading-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
  initial="hidden"
  animate="visible"
  aria-label={heroName}
  role="heading"
  >
            <span className="sr-only">{heroName}</span>
            {heroName.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariants}
                custom={index}
                initial="hidden"
                animate={shouldReduceMotion ? "visible" : ["visible", "float"]}
                aria-hidden="true"
                className={char === " "
                  ? "inline-block w-2 sm:w-3"
                  : "inline-block bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* الجملة التعريفية */}
          <motion.p
            className="hero-text mx-auto mt-5 max-w-2xl text-base text-slate-800 dark:text-white sm:text-lg"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Building <span className="font-semibold text-sky-500 dark:text-sky-400">scalable, high-performance</span> RESTful APIs and MVC applications using ASP.NET Core, EF Core, and Clean Architecture — focused on performance, reliability, and clean engineering.
          </motion.p>

          {/* Tech icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
  {[
    { img: "/assets/C_Icon.png", label: "C#" },
    { img: "/assets/.NET_Icon.png", label: "ASP.NET Core" },
    { icon: <FaDatabase className="text-sky-500 dark:text-sky-400" />, label: "SQL Server" },
  ].map(({ img, icon, label }) => (
    <motion.div
      key={label}
      whileHover={{ scale: 1.07, y: -2 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="group flex items-center gap-2 rounded-xl
      bg-white/60 backdrop-blur-xl border border-slate-200/40
      px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm
      hover:border-sky-400/60 hover:shadow-lg
      dark:bg-slate-900/80 dark:border-slate-700/60 dark:text-slate-100"
    >
      {img && <img src={img} alt={label} className="h-3 w-3 object-contain" />}
      {icon && icon}
      {label}
    </motion.div>
  ))}
</motion.div>

{/* الأزرار */}
<motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7, duration: 0.5 }}
  className="mt-10 flex flex-wrap items-center justify-center gap-4 order-4 md:order-none lg:justify-start"
>
  {/* View Projects */}
  <motion.button
    onClick={onViewProjects}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em]
      text-white bg-gradient-to-r from-sky-500 via-blue-500 to-blue-600 shadow-[0_8px_32px_rgba(56,189,248,0.4)]
      transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(56,189,248,0.6)] overflow-hidden
      dark:from-blue-500 dark:via-sky-500 dark:to-sky-400"
  >
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition duration-500" />
    View Projects
    <FiArrowUpRight className="text-base group-hover:rotate-45 transition-transform duration-300" />
    <span className="absolute inset-0 rounded-full bg-white opacity-0 blur-xl transition group-hover:opacity-20"></span>
  </motion.button>

  {/* Download CV */}
  <motion.a
    href="/assets/resume.pdf"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em]
      border border-transparent text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 shadow-[0_8px_32px_rgba(139,92,246,0.4)]
      transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(139,92,246,0.6)] overflow-hidden
      dark:from-purple-600 dark:via-indigo-600 dark:to-sky-500"
  >
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition duration-500" />
    Download CV
    <FaDownload className="text-base group-hover:translate-y-0.5 transition-transform duration-300" />
    <span className="absolute inset-0 rounded-full bg-white opacity-0 blur-xl transition group-hover:opacity-20"></span>
  </motion.a>
</motion.div>

{/* Social icons */}
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.85, duration: 0.5 }}
  className="mt-6 flex items-center justify-center gap-4 order-5 md:order-none lg:justify-start"
>
  {[
    {
      icon: <FaEnvelope />,
      href: "mailto:ahmedashraf01085@gmail.com",
      label: "Email",
      bgColor: "from-red-500/20 to-orange-500/20 dark:from-red-900/40 dark:to-orange-900/40",
      borderColor: "border-red-300/40 dark:border-red-700/40",
      hoverBorder: "hover:border-red-400/80 dark:hover:border-red-500/80",
      color: "text-red-600 dark:text-red-400",
      hoverColor: "hover:text-red-600 dark:hover:text-red-300"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/ahmed-ashraf-758b452b3/",
      label: "LinkedIn",
      bgColor: "from-blue-500/20 to-cyan-500/20 dark:from-blue-900/40 dark:to-cyan-900/40",
      borderColor: "border-blue-300/40 dark:border-blue-700/40",
      hoverBorder: "hover:border-blue-400/80 dark:hover:border-blue-500/80",
      color: "text-blue-600 dark:text-blue-400",
      hoverColor: "hover:text-blue-600 dark:hover:text-blue-300"
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/Dev-Ahmed-Ashraf",
      label: "GitHub",
      bgColor: "from-slate-600/20 to-slate-700/20 dark:from-slate-700/40 dark:to-slate-800/40",
      borderColor: "border-slate-400/40 dark:border-slate-600/40",
      hoverBorder: "hover:border-slate-500/80 dark:hover:border-slate-500/80",
      color: "text-slate-700 dark:text-slate-300",
      hoverColor: "hover:text-slate-900 dark:hover:text-slate-100"
    },
  ].map(({ icon, href, label, bgColor, borderColor, hoverBorder, color, hoverColor }) => (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.9 }}
      className={`focus-outline group relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border backdrop-blur-xl
        bg-gradient-to-br ${bgColor}
        shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]
        transition-all duration-300 ${borderColor} ${hoverBorder} dark:border-slate-600/50 overflow-hidden`}
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition duration-500" />
      <span className={`text-xl ${color} ${hoverColor} transition-all duration-300 group-hover:scale-125`}>
        {icon}
      </span>
    </motion.a>
  ))}
</motion.div>

</div>

        
        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6, type: "spring" }}
          className="relative z-10 hidden lg:flex flex-1 justify-center lg:justify-end"
        >
          <div className="relative order-3 mt-6 h-64 w-56 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 shadow-[0_28px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/80 sm:h-72 sm:w-64 md:order-none md:h-80 md:w-72">
            <div className="pointer-events-none absolute -inset-1 rounded-[34px] bg-gradient-to-br from-sky-400/40 via-transparent to-purple-500/30" />
            <img
              src="/assets/profile.jpg"
              alt="Portrait of Ahmed Ashraf"
              className="relative h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent dark:from-slate-950/90" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
