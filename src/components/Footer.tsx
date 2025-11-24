const footerNav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
]

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[rgba(255,255,255,0.8)] px-6 py-8 text-sm text-slate-600 dark:bg-[rgba(7,10,18,0.85)] dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ahmed Samir. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4">
          {footerNav.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-neon-blue focus-outline">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer

