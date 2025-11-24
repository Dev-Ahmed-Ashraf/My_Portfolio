# Ahmed | Developer Portfolio

Modern React (Vite) single-page portfolio tailored for .NET backend roles. It delivers neon blue/purple styling, Framer Motion micro-interactions, Tailwind-driven theming, and EmailJS-powered contact forms — all optimized for recruiters and hiring managers.

## Features

- Dark & light themes with 300 ms transitions and persisted preference
- Hero with animated gradient lettering, orbiting shapes, and CTA buttons
- Featured projects grid with hover-lift cards, lazy-loaded SVG previews, and skill-based highlighting
- Skills matrix with grouped chips, proficiency bars, and project filters
- Timeline, contact form (EmailJS), social icons, and sticky header with mobile menu
- SEO metadata + OpenGraph image (`public/og-image.png`) generated from hero palette
- Accessibility: semantic landmarks, focus-visible styles, skip link, aria labels, and reduced-motion guard
- Performance touches: asset prefetching, lazy-loaded imagery, lightweight SVG assets

## Project Structure

```
src/
  components/        Reusable UI blocks (Header, Hero, etc.)
  data/              Centralized content (projects, skills, timeline)
  hooks/             Custom hooks like useTheme
  pages/             Page-level layout (Home)
  styles/            Tailwind + CSS variables
  utils/             Helpers (theme + EmailJS)
```

Inline comments mark the exact places to customize your name, bio, projects, resume link, and social handles.

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

### Environment Variables

Create `.env` based on `.env.example`:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_TO_EMAIL=optional-recipient
```

Get the values from your [EmailJS](https://www.emailjs.com/) dashboard. Without them the form throws an inline error.

### Tests

```
npm test
```

Jest + React Testing Library ships with an example Header test (`src/components/__tests__/Header.test.tsx`). Add more as you grow the site.

## Assets

| Asset                    | Path to drop in repo                          |
| ------------------------ | --------------------------------------------- |
| Profile image            | `public/assets/profile.jpg`                   |
| Resume PDF               | `public/assets/resume.pdf`                    |
| Project visuals (SVGs)   | `public/assets/projects/*.svg` (already added) |

Replace the placeholder profile / resume with the provided originals (`/mnt/data/9184332b-130d-48f3-813d-d0da930bc874.jpg` and `/mnt/data/My_CV (9).pdf`). Keep filenames consistent so existing imports work.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Create a new Vercel project and import the repository.
3. Set the EmailJS env vars under **Settings → Environment Variables**.
4. Build command: `npm run build`, Output: `dist`.
5. Trigger a deployment — Vercel serves the optimized SPA globally.

## Customization Checklist

- `src/components/Hero.tsx`: update `heroName`, subtitle badge, tagline, CTA copy.
- `src/components/Header.tsx` & `Footer.tsx`: replace the displayed name and nav labels if needed.
- `src/data/projects.ts`: fill in real case studies (titles, descriptions, tech, live/GitHub links, asset paths).
- `src/data/skills.ts`: tune levels + project mappings.
- `src/data/timeline.ts`: swap for your actual experience history.
- `src/components/ContactForm.tsx`: plug real social URLs + email.
- `public/assets/resume.pdf`: drop your CV generated from `/mnt/data/My_CV (9).pdf`.

## Accessibility & Performance

- Semantic landmarks (`header`, `main`, `section`, `footer`) and `aria-labels`.
- Skip link + `focus-outline` utility for keyboard navigation.
- `prefers-reduced-motion` guard ensures animations calm down when needed.
- Lazy-loaded images and asset prefetching keep initial paint snappy.

## License

Feel free to use this portfolio scaffold as-is or modify it for personal/clients projects. No attribution required.***
