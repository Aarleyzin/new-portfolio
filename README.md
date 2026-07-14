# Aarley Portfólio

Personal software engineer portfolio built with Next.js 15 (App Router) and TypeScript. Single-page, content-driven site showcasing projects, skills and background, with a light/dark theme and an animated starfield background in dark mode.

**Live:** [aarleyzin.dev](https://aarleyzin.dev)

## Features

- Centered hero with a single primary call to action
- Filterable "Tech Stack" grid (All / Frontend / Backend / Mobile / Databases / Tools / AI)
- Two-column About section with role summary and compact highlight cards
- Project case studies (Base90, Glico AI, Partiu Australia) with custom marketing artwork
- Light/dark theme toggle, persisted in `localStorage`
- CSS-driven starfield background (twinkling stars + rare shooting stars) in dark mode, respecting `prefers-reduced-motion`
- Scroll-anchored navigation with smooth-scroll CTAs
- Fully responsive, from mobile to desktop

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with CSS custom properties for theming
- [Framer Motion](https://www.framer.com/motion/) for scroll/entry animations
- [Radix UI Slot](https://www.radix-ui.com/) + [class-variance-authority](https://cva.style/docs) for the button component
- [lucide-react](https://lucide.dev/) icon set

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```text
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx           # renders <PortfolioPage />
  globals.css        # design tokens, theme variables, all component CSS
components/
  portfolio-page.tsx     # page shell: header, hero, sections, footer
  about-section.tsx       # About Me (bio + highlight cards)
  skills-section.tsx      # filterable tech stack grid
  cosmic-background.tsx   # dark-mode starfield background
  scroll-indicator.tsx    # animated "scroll" cue in the hero
  product-visual.tsx      # unused legacy SVG mock visuals
  ui/button.tsx            # shared button component (variants)
data/
  content.ts          # all site copy: nav, hero, about, skills, projects, contact
lib/
  utils.ts            # cn() class-merging helper
public/
  projects/            # project card artwork (Base90, Glico AI, Partiu Australia)
```

## Editing content

Almost everything on the page is data-driven from a single file:

- **`data/content.ts`** — nav links, hero copy, About text and highlight cards, tech stack items/categories, project case studies, contact copy, footer.
- **`app/globals.css`** — color tokens (`:root` / `.dark`), spacing, and all section styling.
- **`public/projects/`** — swap the images referenced by each project's `image` field in `data/content.ts`.

## Deployment

Deployed on [Vercel](https://vercel.com/), aliased to `aarleyzin.dev`.

```bash
vercel --prod
```

## Author

**Arlindo Orsini (Aarley)**
[GitHub](https://github.com/Aarleyzin) · [LinkedIn](https://www.linkedin.com/in/aarleyzin/)
