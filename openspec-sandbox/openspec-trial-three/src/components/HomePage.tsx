import { NavBar } from './sections/NavBar';
import { Hero } from './sections/Hero';
import { LogoStrip } from './sections/LogoStrip';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { Metrics } from './sections/Metrics';
import { Testimonials } from './sections/Testimonials';
import { PricingTeaser } from './sections/PricingTeaser';
import { CtaBand } from './sections/CtaBand';
import { Footer } from './sections/Footer';

/**
 * The public marketing landing page at route `/`. Composes the ten ordered
 * sections; each is its own labeled landmark/region (marketing-landing-page
 * spec — section composition and order).
 */
export function HomePage() {
  return (
    <div className="min-h-dvh bg-grid">
      <a
        href="#main"
        className="sr-only rounded-md border border-border bg-surface px-4 py-2 text-sm focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      {/* 1. navigation bar */}
      <NavBar />

      <main id="main">
        {/* 2. hero */}
        <Hero />
        {/* 3. trusted-by logo strip */}
        <LogoStrip />
        {/* 4. features grid */}
        <Features />
        {/* 5. how-it-works steps */}
        <HowItWorks />
        {/* 6. metrics band */}
        <Metrics />
        {/* 7. testimonials */}
        <Testimonials />
        {/* 8. pricing teaser */}
        <PricingTeaser />
        {/* 9. final call-to-action band */}
        <CtaBand />
      </main>

      {/* 10. footer */}
      <Footer />
    </div>
  );
}
