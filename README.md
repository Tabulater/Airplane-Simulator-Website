# Airplane Simulator Website

A modern landing page for the Airplane Simulator project built with Vite, React, TypeScript, and Tailwind CSS.

## Tech Stack
- **Build tool:** Vite
- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Linting:** ESLint (typescript-eslint, react-hooks, react-refresh)

## Prerequisites
- **Node.js:** v18 or newer (Vite 7 requires Node 18+)
- **Package manager:** npm (comes with Node)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
   Vite will print a local URL (e.g., http://localhost:5173). Open it in your browser.

## Available Scripts
- **Development:**
  ```bash
  npm run dev
  ```
- **Build for production:**
  ```bash
  npm run build
  ```
  Outputs to the `dist/` directory.
- **Preview production build locally:**
  ```bash
  npm run preview
  ```
- **Lint:**
  ```bash
  npm run lint
  ```

## Project Structure
```
Airplane Simulator Website/
├─ index.html
├─ src/
│  ├─ main.tsx        # App bootstrap (React + Vite)
│  ├─ App.tsx         # Landing page UI (features, aircraft grid, download section)
│  ├─ index.css       # Tailwind entry
│  └─ vite-env.d.ts
├─ public/            # Static assets served at site root (optional)
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.ts
├─ eslint.config.js
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
├─ package.json
└─ README.md
```

## Styling
Tailwind is configured to scan `index.html` and all files under `src/`:
- Config: `tailwind.config.js`
- Entry stylesheet: `src/index.css`

Use utility classes directly in JSX (see `src/App.tsx`).

## Assets
The aircraft cards in `src/App.tsx` reference images by filename (e.g., `"/AW101.jpg"`).
- Place these images in the project `public/` directory so they are served from the site root.
- Example: `public/AW101.jpg` will be reachable at `/AW101.jpg`.

If an image is missing, a placeholder is shown.

## Download Links
The landing page includes a "Download for Windows" button pointing to a GitHub Releases URL. Update the URLs in `src/App.tsx` to match your latest release as needed.

## Deployment
This is a static site. After `npm run build`, deploy the `dist/` folder to any static hosting provider:
- Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own static server.

Notes:
- Ensure your host serves `dist/` as the site root.
- No special server configuration is required.

## Environment Variables
The project includes `@supabase/supabase-js` as a dependency but it is not currently used in the landing page code. If you later integrate Supabase, configure environment variables as Vite expects (e.g., `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) via a `.env` file.

## Code Quality
ESLint is configured for TypeScript and React hooks.
- Run `npm run lint` to check for issues.

## Contributing
- Fork the repository.
- Create a feature branch: `git checkout -b feature/some-improvement`
- Commit changes: `git commit -m "feat: add some improvement"`
- Push the branch and open a PR.

## License
Choose a license for your project (e.g., MIT) and add a `LICENSE` file. Update this section accordingly.
