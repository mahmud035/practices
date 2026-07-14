export const wordmark = "acme";

export const githubRepo = "acme-inc/acme-cli";

export const installCommand = "npm install -g acme-cli";

export const nav = {
  links: [
    { label: "Docs", href: "/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
  ],
  signIn: { label: "Sign in", href: "/sign-in" },
  primaryCta: { label: "Get started", href: "/sign-up" },
};

export const hero = {
  headline: "Ship from the terminal you already live in",
  subhead:
    "acme-cli wires your local shell straight into production — deploy, tail logs, and roll back without ever leaving the prompt.",
  primaryCta: { label: "Get started", href: "/sign-up" },
  secondaryCta: { label: "Read the docs", href: "/docs" },
  terminalCommand: "acme deploy --prod",
  terminalOutput: "✓ Deployed to prod in 4.2s",
};

export const logoStrip = {
  heading: "Trusted by teams shipping at",
  logos: ["Northwind", "Globex", "Initech", "Umbrella", "Soylent", "Hooli"],
};

export const features = [
  {
    title: "One-command deploys",
    description:
      "Push straight from your branch to production with a single command — no dashboards, no clicking through wizards.",
    command: "acme deploy --prod",
    output: "✓ Deployed to prod in 4.2s",
  },
  {
    title: "Live log tailing",
    description:
      "Stream structured logs from every service in real time, filtered by tag, straight into your terminal.",
    command: "acme logs --tail --service=api",
    output: "api  200 GET /health  3ms",
  },
  {
    title: "Instant rollbacks",
    description:
      "Something broke? Roll back to the last known-good deploy in seconds, no incident channel required.",
    command: "acme rollback --last-good",
    output: "✓ Rolled back to v182",
  },
  {
    title: "Secrets, scoped",
    description:
      "Manage environment secrets per project and per environment, encrypted at rest and injected only where needed.",
    command: "acme secrets set DATABASE_URL",
    output: "✓ Secret stored (prod)",
  },
];

export const howItWorks = [
  {
    step: "Install",
    description: "Add the CLI globally with your package manager of choice.",
    command: installCommand,
  },
  {
    step: "Configure",
    description: "Link the CLI to your project and set your target environment.",
    command: "acme init",
  },
  {
    step: "Run",
    description: "Deploy, tail logs, or roll back — all from the same prompt.",
    command: "acme deploy --prod",
  },
];

export const metrics = [
  { value: "40k+", label: "Deploys per day" },
  { value: "99.99%", label: "Platform uptime" },
  { value: "120ms", label: "Median deploy latency" },
  { value: "6k+", label: "Teams shipping with acme" },
];

export const testimonials = [
  {
    quote:
      "We ripped out our deploy dashboard entirely. acme-cli is the fastest path from git push to production we've used.",
    name: "Priya Raman",
    title: "Staff Engineer, Northwind",
  },
  {
    quote:
      "Rollbacks used to be a 20-minute fire drill. Now it's one command and we're back to green.",
    name: "Marcus Webb",
    title: "Platform Lead, Globex",
  },
  {
    quote:
      "The CLI feels like it was built by people who actually deploy things for a living.",
    name: "Ana Torres",
    title: "Founding Engineer, Initech",
  },
];

export const pricingTiers = [
  {
    name: "Hobby",
    price: "$0",
    period: "/mo",
    description: "For side projects and solo experiments.",
    features: ["1 project", "Community support", "Unlimited deploys"],
    cta: { label: "Start free", href: "/sign-up" },
  },
  {
    name: "Team",
    price: "$29",
    period: "/mo",
    description: "For teams shipping to production regularly.",
    features: ["Unlimited projects", "Priority support", "Rollback history"],
    cta: { label: "Start trial", href: "/sign-up?plan=team" },
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with compliance and scale needs.",
    features: ["SSO & audit logs", "Dedicated support", "Custom SLAs"],
    cta: { label: "Contact sales", href: "/contact-sales" },
  },
];

export const pricingCta = { label: "See full pricing", href: "/pricing" };

export const ctaBand = {
  headline: "Deploy your next change from the terminal",
  subhead: "Install the CLI and ship in under a minute.",
  installCommand,
  signUpCta: { label: "Get started", href: "/sign-up" },
};

export const footer = {
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Docs", href: "/docs" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact-sales" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ],
  social: [
    { label: "GitHub", href: `https://github.com/${githubRepo}` },
    { label: "X", href: "https://x.com/acme" },
  ],
  statusLink: { label: "System status", href: "/status" },
  copyright: `© ${new Date().getFullYear()} Acme, Inc. All rights reserved.`,
};
