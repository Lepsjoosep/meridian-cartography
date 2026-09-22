# Meridian Cartography Co.

A website for a fictional bespoke map-making studio, built with **Vite + React + Tailwind CSS**.

## What's inside

- `src/components/Navbar.jsx` — sticky header with a mobile menu
- `src/components/Hero.jsx` — headline + a hand-built SVG map illustration
- `src/components/Process.jsx` — the five-step commissioning process
- `src/components/Gallery.jsx` — the four map styles offered
- `src/components/QuoteCalculator.jsx` — **interactive** price estimator (pick format, size, finish, and extras, and the price updates live)
- `src/components/Testimonials.jsx` — **interactive** review carousel
- `src/components/FAQ.jsx` — **interactive** accordion
- `src/components/ContactForm.jsx` — **interactive** form with validation and a success state
- `src/components/Footer.jsx`

The layout intentionally avoids CSS grid and keeps flexbox to a minimum (just simple
`flex` usage for a nav bar and a couple of two-column sections) so the Tailwind classes
stay easy to read.

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
