# Vespine IT — Website

A fast, distinctive marketing + portfolio site for Vespine IT, built around the
brand's hornet identity ("vespine" = *of the wasp*). Strict palette: brand
orange `#EA5B29` on black / gray / white, with full **dark + light mode**.

The hero features the **real Vespine logo extruded into 3D** (forged
metal-orange), traced directly from your PNG and rendered with Three.js.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theming)
- **Three.js** via **@react-three/fiber** + **@react-three/drei**
- **Framer Motion** for reveals and micro-interactions

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

Requires Node 18.18+ (Node 20+ recommended).

## Deploy

Zero-config on **Vercel** — push to a repo and import it, or run `vercel`.
Works on any Node host via `npm run build && npm start`.

## Where everything lives

```
src/
  app/                 # routes: / about / services / portfolio / contact (+ privacy, terms, 404)
  components/
    hero/              # Hero + the 3D hornet (HornetCanvas, HornetModel)
    layout/            # Navbar, Footer
    sections/          # Pillars, ServicesPreview, PortfolioPreview, TechStack, CTA, ContactForm
    theme/             # dark/light provider + toggle
    three/             # hornetPath.ts — the traced logo path (embedded, no fetch)
    ui/                # Reveal, SectionHeading, PageHeader, HornetMark
  data/                # ← EDIT THESE to update content
    site.ts            # name, tagline, contact, socials, stats
    services.ts        # services + the four-pillar loop + tech list
    projects.ts        # portfolio case studies (placeholders to swap)
public/
  hornet.svg, icon.svg # logo assets + favicon
```

## Swap in your real content

- **Text, contact, socials:** `src/data/site.ts`
- **Services / pillars / tech:** `src/data/services.ts`
- **Portfolio case studies:** `src/data/projects.ts` (these are placeholders)

## Wire up the contact form

`ContactForm.tsx` currently opens the visitor's mail client (mailto). For real
delivery, point `submit()` at an API route using **Resend**, **Formspree**, or
similar — the form data is already shaped for it.

## Customizing the 3D hornet

In `HornetModel.tsx`:
- **Material** — tweak `metalness` / `roughness` / `emissive` on the
  `meshStandardMaterial` for glossier or matte looks.
- **Motion** — spin speed and parallax live in the `useFrame` block.
- **Quality** — auto-drops on mobile / low-core devices and honors
  `prefers-reduced-motion` (static pose, no animation loop).

The logo geometry is built at runtime from the embedded SVG path in
`src/components/three/hornetPath.ts`, so there's no external model file to load.

## Performance notes

- 3D canvas is lazy-loaded (`ssr: false`) with a static SVG fallback, so it
  never blocks first paint.
- Capped device pixel ratio, procedural lighting (no external HDR fetch),
  adaptive resolution, and reduced geometry detail on small screens.
- Fluid `clamp()` typography and responsive grids prevent overflow/overlap at
  any viewport width.
