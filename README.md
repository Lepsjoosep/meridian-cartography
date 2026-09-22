# Meridian Cartography Co.

A website for a fictional bespoke map-making studio, built with **Vite + React + Tailwind CSS**.

## What's inside

- `src/components/Navbar.jsx` — sticky header with responsive links
- `src/components/Hero.jsx` — headline + a hand-built SVG map illustration
- `src/components/Process.jsx` — the five-step commissioning process
- `src/components/Gallery.jsx` — the four map styles offered
- `src/components/QuoteCalculator.jsx` — simple static estimate examples
- `src/components/Testimonials.jsx` — static customer reviews
- `src/components/FAQ.jsx` — native HTML expandable questions
- `src/components/ContactForm.jsx` — simple HTML form with browser validation
- `src/components/Footer.jsx`

The page is intentionally static and uses Tailwind classes wherever possible, so the
JSX stays easy to read and explain.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Building for production / presenting it

```bash
npm run build
npm run preview
```

`npm run build` outputs a static site to the `dist/` folder — you can open
`dist/index.html` directly, or upload the folder to any static host (Netlify,
Vercel, GitHub Pages, etc.) if you want a public link to present from.

## Customizing

- Colors and fonts live in `tailwind.config.js`.
- Copy (headings, prices, testimonials, FAQ answers) lives at the top of each
  component file, so you can swap the map studio for your own business by
  editing text and numbers — no CSS knowledge required.
