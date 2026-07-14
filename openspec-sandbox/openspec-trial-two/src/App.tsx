import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { LogoStrip } from './components/LogoStrip';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { PricingTeaser } from './components/PricingTeaser';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { SectionShell } from './components/ui/SectionShell';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <SectionShell id="proof"><LogoStrip /></SectionShell>
        <SectionShell id="features"><Features /></SectionShell>
        <SectionShell id="how"><HowItWorks /></SectionShell>
        <SectionShell id="metrics"><Metrics /></SectionShell>
        <SectionShell id="testimonials"><Testimonials /></SectionShell>
        <SectionShell id="pricing"><PricingTeaser /></SectionShell>
        <SectionShell id="cta"><CtaBand /></SectionShell>
      </main>
      <Footer />
    </>
  );
}

export default App;
