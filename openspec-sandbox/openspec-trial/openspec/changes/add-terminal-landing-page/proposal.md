## Why

The product currently has no public entry point: a developer visiting the domain has no page that explains what the tool does, proves it is credible, or converts them into a signup. Developers are a skeptical, aesthetics-aware audience — a generic marketing template reads as untrustworthy. We need a conversion-focused landing page that speaks their language natively through a terminal/monospace visual identity, so the site itself signals "built by people who live in a shell."

## What Changes

- Add a public, unauthenticated marketing landing page as the site's home route (`/`).
- Compose the page from ten ordered sections: nav, hero (with an animated terminal window and copyable install command), a trusted-by logo strip, a features grid, a "how it works" step sequence, a metrics band, testimonials, a pricing teaser, a final CTA band, and a footer.
- Introduce a reusable terminal-aesthetic UI system: monospace design tokens, a terminal window primitive (traffic-light chrome, prompt glyphs, blinking cursor), copy-to-clipboard install chips, and a typed-command animation that degrades to static text under `prefers-reduced-motion`.
- Display a live GitHub star count in the nav, fetched client-side, with explicit loading, error, and success states.
- Establish the frontend foundation for this to live in: React 19 + TypeScript + Tailwind v4 with semantic color tokens.

## Capabilities

### New Capabilities
- `marketing-landing-page`: The public home route — its section composition and order, the content and CTAs each section presents, responsive (mobile-first) layout behavior, page metadata/SEO, and accessibility (semantic landmarks, keyboard navigation, contrast, reduced-motion).
- `terminal-aesthetic-system`: The reusable terminal-themed presentation layer — monospace typography and semantic color tokens, the terminal-window / prompt / cursor primitives, copy-to-clipboard install chips, and the typed-command animation with its reduced-motion fallback.
- `github-star-count`: The live GitHub repository star count shown in the nav, including its loading (skeleton), error (graceful fallback), and success states, and caching behavior.

### Modified Capabilities
<!-- None — this is a greenfield change; openspec/specs/ is empty. -->

## Impact

- **New frontend surface**: introduces a React 19 + TypeScript + Tailwind v4 app (currently the repo has only a bare `package.json`). Build tooling (Vite or equivalent), Tailwind v4 config with semantic tokens, and a monospace font pipeline are added.
- **New components**: shared primitives under `components/ui/` (TerminalWindow, CopyCommand, CTAButton, SectionShell) plus presentational section components composed by the home page/route.
- **New data dependency**: a TanStack Query hook calling the public GitHub REST API for the star count; no backend or auth is introduced.
- **Non-goals**: authentication/app dashboard, the full docs/pricing/blog pages (the page only links out or teases them), and any CMS or content-management backend.
