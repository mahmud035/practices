## 1. Batch 1 — Scaffold, tokens, and shared primitives

- [x] 1.1 Scaffold a Vite + React 19 + TypeScript app; add Tailwind v4 and TanStack Query v5; wire the `QueryClientProvider` at the app root
- [x] 1.2 Add the monospace font pipeline (self-hosted JetBrains Mono / Berkeley-style stack) with a monospace fallback chain
- [x] 1.3 Define Tailwind v4 semantic theme tokens: surface/background, foreground/muted-foreground, single accent, border, prompt, cursor, and the monospace font token (dark-only)
- [x] 1.4 Add a `useReducedMotion` hook and a scanline/grid background texture utility
- [x] 1.5 Build `components/ui/SectionShell` (consistent section padding, max-width, landmark wrapper)
- [x] 1.6 Build `components/ui/TerminalWindow` (traffic-light chrome marked decorative/`aria-hidden`, prompt glyph, command + output content)
- [x] 1.7 Build `components/ui/CopyCommand` chip (displays install command, copies to clipboard on click and via keyboard, shows copied confirmation)
- [x] 1.8 Build `components/ui/TypedCommand` (character-by-character animation; static full text under reduced motion)
- [x] 1.9 Build `components/ui/CTAButton` (primary and secondary variants, keyboard-focusable, visible focus ring)
- [x] 1.10 Gate: `npm run build` and `tsc --noEmit` clean; primitives render in isolation

## 2. Batch 2 — Nav, hero, and GitHub stars

- [x] 2.1 Create the typed content module (`content/home.ts`) with wordmark, install command, repo slug, headline/subhead, and CTA labels
- [x] 2.2 Build `useGithubStars(repo)` hook via TanStack Query (long `staleTime`, abbreviated formatting); expose pending/error/success
- [x] 2.3 Build `NavBar`: wordmark, Docs/Pricing/Blog/Changelog links, Sign in, primary CTA, and star count (skeleton on pending, hidden on error, abbreviated count on success — no layout shift)
- [x] 2.4 Add responsive nav: collapse content links into a keyboard- and pointer-operable menu below the mobile breakpoint
- [x] 2.5 Build `Hero`: headline, subhead, primary + secondary CTA, `TerminalWindow` with `TypedCommand`, and a `CopyCommand` install chip; single top-level `h1`
- [x] 2.6 Add page metadata: title, meta description, and Open Graph tags
- [x] 2.7 Gate: build/typecheck clean; nav + hero render; star count shows all three states; hero animation respects reduced motion

## 3. Batch 3 — Mid-page sections

- [x] 3.1 Build `LogoStrip` (trusted-by social proof row)
- [x] 3.2 Build `Features` grid: 3–6 cards, each with title, description, and a `TerminalWindow`/code snippet; source cards from content module
- [x] 3.3 Build `HowItWorks`: ordered install → configure → run steps, each with a terminal block
- [x] 3.4 Build `Metrics` band (headline statistics)
- [x] 3.5 Build `Testimonials` (developer quotes with attribution)
- [x] 3.6 Gate: build/typecheck clean; all mid-page sections render with content-module data and correct ordering

## 4. Batch 4 — Conversion tail, responsive & accessibility pass

- [x] 4.1 Build `PricingTeaser` (tiers + CTA linking to the pricing destination)
- [x] 4.2 Build `CtaBand` (final install command + sign-up CTA)
- [x] 4.3 Build `Footer` (nav columns, social, status link, copyright)
- [x] 4.4 Compose all ten sections in `HomePage` at route `/` in the specified order; verify each is a labeled landmark/region
- [x] 4.5 Responsive pass: verify no horizontal overflow at 360px and usable layout across mobile/tablet/desktop; enforce minimum touch targets
- [x] 4.6 Accessibility pass: keyboard-only traversal with visible focus, WCAG AA contrast on all text/token pairs, decorative chrome hidden from assistive tech, reduced-motion verified end to end
- [x] 4.7 Gate: build/typecheck clean; full page reviewed end to end against all three specs
