import { NavBar } from "../components/sections/NavBar";
import { Hero } from "../components/sections/Hero";
import { LogoStrip } from "../components/sections/LogoStrip";
import { Features } from "../components/sections/Features";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Metrics } from "../components/sections/Metrics";
import { Testimonials } from "../components/sections/Testimonials";
import { PricingTeaser } from "../components/sections/PricingTeaser";
import { CtaBand } from "../components/sections/CtaBand";
import { Footer } from "../components/sections/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Metrics />
        <Testimonials />
        <PricingTeaser />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
