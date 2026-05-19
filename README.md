# @pignus/ui

Shared design system for the Pignus platform. Single CSS output for all three apps.

## Consuming the package

All apps reference the hosted CSS:

```html
<!-- production URL -->
<link rel="stylesheet" href="https://pignusui.pages.dev/pignus.css">
<!-- or with custom domain (once configured in CF dashboard): -->
<!-- <link rel="stylesheet" href="https://ui.pignuslabs.com.ar/pignus.css"> -->
```

For local development, run `npm run dev` in this repo and point apps to:

```html
<!-- local dev only -->
<link rel="stylesheet" href="http://localhost:8080/pignus.css">
```

Or use a relative path:

```html
<!-- works when repos are siblings on disk -->
<link rel="stylesheet" href="../PignusUI/dist/pignus.css">
```

## Building

```bash
npm install
npm run build    # outputs dist/pignus.css (minified)
npm run dev      # watch mode, unminified
```

> **Note:** Tailwind content scanning reads sibling repos (`../PignusFacturacion`, `../PignusPortal`, `../PignusInversiones`). All four repos must be checked out side by side for accurate tree-shaking. If a Tailwind class is missing from the output, run `npm run build` here after updating an app's HTML.

## Structure

```
src/
  tokens/       design tokens (colors, typography, spacing)
  base/         global reset and body defaults
  components/   shared CSS component classes
  index.css     entry point — imports tokens + base + components, then @tailwind
dist/
  pignus.css    compiled output (committed, deployed to Cloudflare Pages)
```

## Design tokens

The WSJ-inspired palette is defined in `src/tokens/colors.css` as CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--cream` | `#f5f0e8` | Page background |
| `--card` | `#ffffff` | Card surfaces |
| `--border` | `#ddd5c0` | Default borders |
| `--ink` | `#1c1814` | Primary text |
| `--ink-2` | `#5c5248` | Secondary text |
| `--ink-3` | `#9c8f84` | Muted/tertiary text |
| `--blue` | `#1BBFA1` | Primary action |
| `--ok` | `#1a6b2a` | Success state |
| `--err` | `#c23b22` | Error state |

These are also available as Tailwind color utilities: `bg-cream`, `text-ink`, `border-border-mid`, etc.

## Standard action icons

PignusUI is CSS-only, so shared icons are documented as inline SVG snippets rather than exported components.
Use the existing `.iconbtn` styles for compact table and toolbar actions.

### Edit

Use the pencil icon for edit actions:

```html
<button class="iconbtn" title="Editar" aria-label="Editar">
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 20h4l10-10-4-4L4 16v4z"/>
    <path d="M14 6l4 4"/>
  </svg>
</button>
```

### Delete

Use the trash can icon for delete actions. Destructive actions must also use `.iconbtn--danger`.

```html
<button class="iconbtn iconbtn--danger" title="Eliminar" aria-label="Eliminar">
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 7h16M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M6 7l1 13a2 2 0 002 2h6a2 2 0 002-2l1-13"/>
  </svg>
</button>
```

## Deploying

Build locally then deploy via wrangler:

```bash
npm run build
wrangler pages deploy dist/ --project-name pignusui
```

Live at: **https://pignusui.pages.dev/pignus.css**

To add the custom domain `ui.pignuslabs.com.ar`, go to the Cloudflare Pages dashboard → pignusui project → Custom domains.

Always run `npm run build` and commit `dist/pignus.css` before pushing.

## App-specific overrides

Each app can add a thin local `app.css` loaded after PignusUI:

```html
<link rel="stylesheet" href="https://ui.pignuslabs.com.ar/pignus.css">
<link rel="stylesheet" href="app.css">
```

Currently only PignusInversiones has app-specific styles (badge colors for asset types).
