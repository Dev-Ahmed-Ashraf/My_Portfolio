# Assets

This folder contains the image and PDF assets referenced by the portfolio site. Replace the placeholder files below with your real files, keeping the same filenames so code references remain valid.

- Replace `profile.jpg` with your portrait/headshot (recommended: 800×800 or 1200×1200 px, JPEG or webp, optimized under ~500KB).
- Replace `resume.pdf` with your up-to-date resume/CV (PDF).
- If you have project screenshots, place them in the `projects/` subfolder using the same filenames referenced in `src/data/projects.ts`.
- Icon files (e.g., `C_Icon.png`, `.NET_Icon.png`) should be placed here or in `src/assets/` depending on your build; prefer SVG/PNG at 64×64 or 128×128 for crisp display.

Notes :

- Keep filenames unchanged: many components import the assets by fixed paths (e.g. `/assets/profile.jpg` or `/assets/projects/...`). If you rename files, update `src/data/projects.ts` and component imports accordingly.
- Cache: browsers may cache images. If you replace an existing file and don't see updates, clear the browser cache or bump the filename briefly (e.g. `profile-v2.jpg`).
- Preview: run the dev server and open `http://localhost:5174` (or the port Vite reports) to preview changes.
- Accessibility: use a clear, well-lit headshot and include a PDF that is text-searchable (not just scanned images) for better ATS/reader support.

If you want, I can:

- Copy the provided headshot and resume into this folder and rename them to the expected filenames for you.
- Validate image sizes and optimize them.

Last updated: 2025-11-28
