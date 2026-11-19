# Piromanía — Agent Notes

Static one-page marketing site (Astro 7 + Tailwind 4 + TypeScript) in Spanish.
Single route: `src/pages/index.astro`. Deployed to Firebase Hosting from `dist/`.

## Commands

- `npm install`
- `npm run dev` — dev server
- `npm run build` — production build to `dist/` (this is the only verification step)
- `npm run preview`
- No lint, test, or typecheck scripts exist. `astro check` is not installed.
- Requires Node `>=22.23.4` (Astro 7 engine constraint).
- Deploy: `npm run build` then `firebase deploy --only hosting` (project `piromania`, serves `dist/`).
- No CI/CD: deployment is manual and `dist/` is gitignored.

## Docs

- `README.md` — project overview and quick start.
- `GUIA.md` — Spanish handoff/deployment guide for whoever takes over the site (accesses, clone, env, editing map, verification, deploy, Git flow, troubleshooting, rollback, handoff checklist).
- `content.md` — original Spanish copy brief (reference only; not used at build time).
- Keep these in sync when commands, deploy steps, or the editing workflow change.

## Content model

- All user-facing copy lives in `src/data/content.ts` as one `CONTENT` object with Spanish keys. Components read from it — do not hardcode copy in `.astro` files.
- Section order in `index.astro`: Header, Inicio, Talleres, Calendario, Resultados, SobreMi, Contacto, Footer.
- Navigation is anchor-based; section `id`s must match `CONTENT.encabezado.navegacion`.
- `content.md` is the original Spanish copy brief; `content.ts` is the source of truth.

## Adding or editing workshops

- Add the entry to `CONTENT.talleres.listado` with a unique `id` and `detalleId`. `Talleres.astro` renders a `<template id={detalleId}>`; `main.js` clones it into the shared modal.
- Calendar events reference a workshop via `tallerId`. `Calendario.astro` throws at build time if it doesn't match a listing, so keep both in sync.
- Categories are mapped in `Talleres.astro` (`claveCategoria`): `"Escultura"` → `escultura`, everything else → `vocal`. The filter bar only renders when `CONTENT.talleres.filtros` has more than 2 entries.
- The contact form's workshop dropdown options are a separate list in `CONTENT.contacto.formulario.campoTaller.opciones` — update it alongside new workshops.

## Styling

- Tailwind v4 via `@tailwindcss/vite` (not the legacy Astro integration). `src/styles/main.css` uses `@import "tailwindcss"` plus `@config "../../tailwind.config.mjs"`; theme colors and fonts are defined in `tailwind.config.mjs`.
- Prefer the existing `gp-*` palette (`gp-pink`, `gp-sage`, `gp-mint`, `gp-yellow`, `gp-lavender` and their `*Light` variants) over raw hex or arbitrary values.
- Icons are Font Awesome 4 (`fa fa-*`), imported from `main.css`.

## Behavior quirks

- `src/scripts/main.js` (loaded by `Layout.astro`) handles the mobile menu, workshop category filtering, and the details modal. It depends on exact IDs/classes: `mobileMenuBtn`, `mobileMenu`, `.workshop-card`, `.filter-btn`, `#workshopDetailsModal`, `#workshopDetailsTitle`, `#workshopDetailsContent`, `#closeWorkshopDetails`, `.modal-backdrop`. Renaming them requires updating the JS.
- The contact form posts to Web3Forms and needs `PUBLIC_FORM_ACCESS_KEY` in `.env` (gitignored, so a fresh clone lacks it). Its validation and character counter are an inline script in `Contacto.astro` bound to `#contactForm`, `#submit-button`, `#result`, `#message`, and `#message-character-count`.
- `Resultados.astro` gallery images are defined in `CONTENT.resultados.imagenes` and served from `public/galeria/` using sequential names (`galeria-01.jpeg`, `galeria-02.jpeg`, …). Mobile uses a scroll-snap carousel (native touch swipe plus mouse drag) with dots wired in `main.js` through `data-gallery-track`, `data-gallery-slide`, `data-gallery-dot`, and `data-gallery-dot-indicator`; desktop falls back to a grid. Clicking a slide opens `#galleryLightbox` (prev/next buttons, arrow keys, swipe/drag, Escape, backdrop close) via `initGalleryLightbox()` in `main.js`.
