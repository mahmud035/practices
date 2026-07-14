## Context

The repository is greenfield for frontend: only a bare `package.json` exists, no app, no build tooling, no design system. The proposal (`proposal.md`) calls for a public, conversion-focused marketing landing page for a developer SaaS with a terminal/monospace aesthetic, and the specs define three capabilities: `marketing-landing-page`, `terminal-aesthetic-system`, and `github-star-count`.

Constraints (from the engineering charter): React 19 + TypeScript + Tailwind v4 with semantic tokens only (no raw color literals); TanStack Query v5 for all server state; presentational UI components carry no business logic; every data-driven view defines loading/empty/error states; skeletons over spinners. A marketing page maps to no backend domain, so the usual `features/` (1:1 with backend domains) structure does not apply here — the page is an orchestrator of presentational sections plus shared `components/ui/` primitives.

## Goals / Non-Goals

**Goals:**

- Ship a single public route (`/`) that renders the ten specified sections and converts developer visitors.
- Establish a reusable terminal-aesthetic layer (tokens + primitives) that later pages can reuse.
- Encode the terminal identity as design tokens so the look is consistent and swappable, never hard-coded per component.
- Handle the one live data dependency (GitHub stars) with explicit loading/error/success states and layout stability.
- Meet an accessibility and responsiveness baseline (keyboard, contrast, reduced-motion, mobile-first, no horizontal overflow).

**Non-Goals:**

- Authentication, the app/dashboard, and any backend or CMS.
- The full Docs, Pricing, Blog, and Changelog pages — the landing page only links out to or teases them.
- Server-side rendering / SEO framework beyond static meta tags (can be revisited if organic search becomes a priority).
- A theme switcher — the page is dark-only by design, consistent with the terminal identity.

## Decisions

### D1: Build tooling — Vite + React 19 + TS

Use Vite for the app shell (fast dev server, first-class React 19 + TS, minimal config). **Alternative considered:** Next.js — rejected for now because there is no backend, no routing beyond `/`, and no SSR/ISR need; Next adds surface area we would not use. If SEO/SSR becomes a requirement, revisit (see Risks).

### D2: Component decomposition — page orchestrates presentational sections

A single `HomePage` route composes ten presentational section components (`NavBar`, `Hero`, `LogoStrip`, `Features`, `HowItWorks`, `Metrics`, `Testimonials`, `PricingTeaser`, `CtaBand`, `Footer`). Sections hold no business logic; content (copy, feature list, testimonials, tiers) is passed as data/props or read from a local content module, keeping copy editable without touching layout. **Alternative considered:** one monolithic page component — rejected as unmaintainable and untestable per the "presentational only" charter rule.

### D3: Shared primitives live in `components/ui/`

`TerminalWindow`, `CopyCommand`, `TypedCommand`, `CTAButton`, and `SectionShell` are promoted to `components/ui/` because they are reused across multiple sections (terminal windows appear in hero, features, and how-it-works). This satisfies the charter rule that shared logic is promoted before the feature boundary. Single-use layout stays inline in its section.

### D4: Terminal identity as Tailwind v4 semantic tokens

Define tokens in the Tailwind v4 theme layer: surface/background, foreground/muted-foreground, a single accent (terminal green or amber), border, and prompt/cursor colors, plus a monospace font token. Components reference token names only. **Why:** satisfies the "no raw color literals" rule, makes the accent swappable in one place, and keeps contrast auditable. **Alternative considered:** ad-hoc utility classes with literal colors — rejected (violates charter, drifts over time).

### D5: Motion is opt-out, not opt-in

The typed-command animation and cursor blink run by default but are gated on `prefers-reduced-motion`. Implement via a `useReducedMotion` hook (or CSS media query) so that `reduce` renders the full command as static text and disables the blink. **Why:** accessibility requirement in the specs; also protects against motion-triggered discomfort. Typed animation is presentation-only and must never gate content visibility — the command text is always in the DOM.

### D6: GitHub stars via TanStack Query, client-side, cached

A `useGithubStars(repo)` hook calls the public GitHub REST API through TanStack Query with a long `staleTime` (e.g., 1 hour) so navigations reuse the cache. States map directly to the spec: `isPending` → skeleton with a fixed min-width (wide enough for a plausible magnitude, e.g. "99.9k"), reserving space to prevent layout shift — NOT sized
to the actual number, which isn't known until the fetch resolves. `isError` → render nav without the count (graceful degrade, no user-facing error); success → abbreviated count (e.g., `1.2k`). Endpoint (pinned): `GET https://api.github.com/repos/{owner}/{repo}`, read the `stargazers_count` field. Pin the API version with header `X-GitHub-Api-Version: 2022-11-28` so an upstream bump can't silently change the response shape. GitHub sends permissive CORS headers for public reads, so the browser calls it directly — no proxy or token for public repos. **Alternative considered:** build-time fetch baked into the bundle — rejected because it goes stale and reintroduces a build step for a content refresh; revisit only if rate limits bite (see Risks).

### D7: Content/data separation

Feature cards, steps, metrics, testimonials, and pricing tiers live in a typed content module (e.g., `content/home.ts`) consumed by sections. Keeps marketing copy in one reviewable place and lets sections stay pure render functions.

## Risks / Trade-offs

- **Unauthenticated GitHub API rate limiting (60 req/hr/IP)** → Mitigation: aggressive client cache (D6) plus graceful error degrade (stars simply disappear, nav still works). If it becomes a real problem, move the fetch behind a tiny cached edge function later — the hook boundary makes this swap local.
- **No SSR means weaker SEO and slower first meaningful paint for crawlers** → Mitigation: static meta/OG tags and a single semantic `h1` now; the Vite→Next migration path is clean (sections are already presentational) if organic search is prioritized.
- **Terminal aesthetic can hurt readability/contrast (green-on-black, small monospace)** → Mitigation: WCAG AA contrast enforced via tokens (D4) and verified in the a11y pass; body copy uses foreground/muted tokens tuned for contrast, not the accent.
- **Typed animation could delay perceived content** → Mitigation: content is always present in the DOM (D5); animation is purely visual and skipped under reduced motion.
- **Dark-only design excludes light-mode preference** → Accepted trade-off: the terminal identity is intentionally dark; a theme switcher is an explicit non-goal.

## Migration Plan

Greenfield — no data migration or rollback of existing behavior. Deployment is a static build (`vite build`) served as static assets. Rollback = redeploy the previous static build. The change is additive (introduces the `/` route and frontend scaffold) and touches no existing runtime.

## Open Questions

- Exact product name/wordmark, install command string, and repository slug for the star count — placeholders until product provides them; do not block implementation.
- Accent color: terminal green vs. amber — decide during the design-token pass; isolated to one token (D4).
- Final copy for hero, features, testimonials, and pricing tiers — sourced from marketing; the content module (D7) is structured so copy can land without layout changes.
