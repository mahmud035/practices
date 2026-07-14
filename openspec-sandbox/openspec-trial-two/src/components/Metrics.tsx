export function Metrics() {
  const metrics = [
    { label: "Stars", value: "12k+" },
    { label: "Downloads", value: "500k+" },
    { label: "Contributors", value: "80+" }
  ];
  return (
    <div className="grid grid-cols-3 gap-8 py-16 border-t border-border">
      {metrics.map((m, i) => (
        <div key={i}>
          <div className="text-4xl font-bold text-foreground">{m.value}</div>
          <div className="text-sm text-muted-foreground">{m.label}</div>
        </div>
      ))}
    </div>
  );
}
