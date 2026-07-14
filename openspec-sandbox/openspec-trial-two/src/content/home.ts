export const homeContent = {
  wordmark: "OpenSpec",
  installCommand: "npm install openspec",
  repoSlug: "openspec/openspec",
  headline: "Declarative specifications for complex workflows",
  subhead: "Stop managing task states manually. Define your workflows as code, and let OpenSpec orchestrate the lifecycle.",
  cta: {
    primary: "Get Started",
    secondary: "View Docs"
  },
  features: [
    { title: "Type-safe", description: "Zod schemas for every layer.", code: "const schema = z.object({...})" },
    { title: "Composable", description: "Build workflows in minutes.", code: "spec.use(plugin)" },
    { title: "Orchestrated", description: "Automated task state management.", code: "spec.run()" }
  ]
};
