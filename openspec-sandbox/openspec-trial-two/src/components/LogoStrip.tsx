export function LogoStrip() {
  const logos = ['Acme', 'Globex', 'Soylent', 'Initech', 'Umbrella'];
  return (
    <div className="py-12 border-y border-border">
      <p className="text-sm text-muted-foreground mb-8">Trusted by</p>
      <div className="flex justify-center gap-12 text-foreground font-bold">
        {logos.map(logo => <span key={logo}>{logo}</span>)}
      </div>
    </div>
  );
}
