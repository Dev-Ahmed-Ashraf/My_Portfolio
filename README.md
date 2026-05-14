<div align="center">

# 🚀 Ahmed Ashraf — Developer Portfolio

<a href="https://dev-ahmed-ashraf.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/Live%20Demo-View-blue?style=for-the-badge" alt="Live Demo" />
</a>

</div>

Modern React (Vite) + TailwindCSS + Framer Motion and single-page portfolio tailored for .NET backend roles. It delivers neon blue/purple styling, Framer Motion micro-interactions, Tailwind-driven theming, and EmailJS-powered contact forms — all optimized for recruiters and hiring managers.

## ✨ Tech Stack

- Frontend: React, TypeScript, Vite
- Styling: TailwindCSS, CSS Variables
- Animations: Framer Motion
- Contact: EmailJS
- Tooling: ESLint, Prettier, Git Hooks
- Deployment: Vercel

🎯 Features

- ⚫️ Dark & light themes with 300 ms transitions and persisted preference.
- ✨ Hero with animated gradient lettering, orbiting shapes, and CTA buttons.
- 💼 Featured projects grid with hover-lift cards, lazy-loaded SVG previews, and skill-based highlighting.
- 🧠 Skills matrix with grouped chips, proficiency bars, and project filters.
- 📬 Timeline, contact form (EmailJS) with validation, social icons & Toast notifications.
- 🔍 SEO metadata + OpenGraph image (`public/assets/og-image.png`) generated from hero palette.
- 🧭 Accessibility: semantic landmarks, focus-visible styles, skip link, aria labels, and reduced-motion guard.
- ⚡ Performance touches: asset prefetching, lazy-loaded imagery, lightweight SVG assets.

**Project Structure**

```
src/
  components/        Reusable UI blocks (Header, Hero, etc.)
  data/              Centralized content (projects, skills, timeline)
  hooks/             Custom hooks like useTheme
  pages/             Page-level layout (Home)
  styles/            Tailwind + CSS variables
  utils/             Helpers (theme + EmailJS)
public/
  assets/        # Profile, resume, project images
```

Inline comments mark the exact places to customize your name, bio, projects, resume link, and social handles.

🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

🔐 Environment Variables

Create `.env.local` based on `.env.example`:

```
VITE_EMAILJS_SERVICE_ID=your_id
VITE_EMAILJS_TEMPLATE_ID=your_template
VITE_EMAILJS_PUBLIC_KEY=your_key
VITE_EMAILJS_TO_EMAIL=your_email
```

Get the values from your [EmailJS](https://www.emailjs.com/) dashboard. Without them the form throws an inline error.

### Tests

```
npm test
```

Jest + React Testing Library ships with an example Header test (`src/components/__tests__/Header.test.tsx`). Add more as you grow the site.

## Assets

| Asset                  | Path to drop in repo                                         |
| ---------------------- | ------------------------------------------------------------ |
| Profile image          | `public/assets/profile.jpg`                                  |
| Resume PDF             | `public/assets/Ahmed_Ashraf_Junior_Full_Stack_Developer.pdf` |
| Project visuals (PNGs) | `public/assets/projects/*.png` (already added)               |
| OG Image               | `public/assets/og-image.png` (1200x630px)                    |

### Asset Replacement Instructions

**To replace the profile image and resume:**

1. Locate your source files:
   - Profile image: `/mnt/data/9184332b-130d-48f3-813d-d0da930bc874.jpg`
   - Resume PDF: `/mnt/data/My_CV (9).pdf`

2. Copy them to the project, maintaining exact filenames:

   ```bash
   # Copy profile image
   cp "/mnt/data/9184332b-130d-48f3-813d-d0da930bc874.jpg" "public/assets/profile.jpg"

   # Copy resume
   cp "/mnt/data/My_CV (9).pdf" "public/assets/Ahmed_Ashraf_Junior_Full_Stack_Developer.pdf"
   ```

3. **Important:** Keep the filenames as `profile.jpg` and `Ahmed_Ashraf_Junior_Full_Stack_Developer.pdf` so existing code references work correctly.

**OG Image:**

- The OpenGraph image (`public/assets/og-image.png`) is already present and configured
- It's set to 1200x630px (OpenGraph standard) and matches the hero's neon blue (#2DA3FF) and purple (#8B5CF6) color theme
- Includes name and ".NET Backend Developer" subtitle
- If you want to regenerate it, ensure it maintains the same dimensions and color scheme for consistency

🌐 Deployment (Vercel)

1. Push this repo to GitHub.
2. Create a new Vercel project and import the repository.
3. Set the EmailJS env vars under **Settings → Environment Variables**.
4. Build command: `npm run build`, Output: `dist`.
5. Trigger a deployment — Vercel serves the optimized SPA globally.

- Customization Checklist

- `src/components/Hero.tsx`: update `heroName`, subtitle badge, tagline, CTA copy.
- `src/components/Header.tsx` & `Footer.tsx`: replace the displayed name and nav labels if needed.
- `src/data/projects.ts`: fill in real case studies (titles, descriptions, tech, live/GitHub links, asset paths).
- `src/data/skills.ts`: tune levels + project mappings.
- `src/data/timeline.ts`: swap for your actual experience history.
- `src/components/ContactForm.tsx`: plug real social URLs + email.
- `public/assets/resume.pdf`: drop your CV generated from `/mnt/data/My_CV (9).pdf`.

♿ Accessibility & Performance

- Semantic HTML (header/main/section/footer)
- Focus-visible outlines + Skip navigation
- Reduced-motion support
- Lazy-load for images
- Minified assets & optimized bundle size

🏆 Why This Portfolio Stands Out

- Designed specifically with Backend Developer hiring in mind

- Clean DX for ongoing updates and experiments

- Production-grade architecture for a real personal brand

  👌 Feel free to clone and customize — no attribution required.

📬 Contact :

📧 Email: ahmedashraf01085@gmail.com  
🔗 LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/ahmed-ashraf-758b452b3/)  
🖥 GitHub: [GitHub Profile](https://github.com/Dev-Ahmed-Ashraf)

⭐ If you like this project

- Consider starring the repo.
- Helps grow your presence in the dev community.

License:

- Feel free to use this portfolio scaffold as-is or modify it for personal/clients projects. No attribution required.\*\*\*
