# Ahmed Mujahid — Portfolio

Built with Next.js 14 (App Router), Tailwind CSS, Framer Motion, and react-icons.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

Almost everything you'll want to change lives in one file:

```
content/data.js
```

- `siteConfig` — your name, role, email, WhatsApp link, deployed URL
- `about` — the "Who am I" paragraphs
- `skills` — the skills grid (add/remove items, icons come from `components/icon-map.jsx`)
- `services` — the "What I can do" cards
- `works` — the 3 project tabs (HTML/CSS, JavaScript, React JS) — add project `name` + `link`
- `experience` — your work history cards
- `contact` — the Hire Me section copy

## Before deploying

1. **CV**: drop your PDF into `public/` named exactly `Ahmed-Mujahid-CV.pdf` (or update `cvPath` in `content/data.js`).
2. **OG image**: replace `public/og-image.svg` with a 1200×630 PNG named `og-image.png`, and update the reference in `app/layout.js` (`openGraph.images` / `twitter.images`).
3. **Favicon**: add a `favicon.ico` to `public/`.
4. **Domain**: update `url` in `content/data.js` — it feeds the canonical URL, sitemap, and Open Graph tags.
5. **Contact form**: currently opens the visitor's email client via a `mailto:` link (no backend needed). If you want it to submit silently in the background instead, swap it for a service like Formspree, Resend, or a custom API route.

## SEO included

- Full metadata (title template, description, keywords, canonical URL) in `app/layout.js`
- Open Graph + Twitter card tags
- JSON-LD `Person` structured data
- Auto-generated `sitemap.xml` and `robots.txt` (`app/sitemap.js`, `app/robots.js`)
- Semantic headings, `alt`/`aria-label`s, and visible focus states throughout

## Deploying

The fastest path is [Vercel](https://vercel.com): push this folder to a GitHub repo, import it in Vercel, and it deploys automatically. Any Node host that supports Next.js works too.
