export function Testimonials() {
  const testimonials = [
    { quote: "OpenSpec changed how we build.", author: "Dev A" },
    { quote: "Finally, a sane way to manage tasks.", author: "Dev B" }
  ];
  return (
    <div className="grid md:grid-cols-2 gap-8 text-left">
      {testimonials.map((t, i) => (
        <blockquote key={i} className="p-6 bg-surface border border-border rounded-lg">
          <p className="text-foreground mb-4">"{t.quote}"</p>
          <cite className="text-sm text-muted-foreground">— {t.author}</cite>
        </blockquote>
      ))}
    </div>
  );
}
