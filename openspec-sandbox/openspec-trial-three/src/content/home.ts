/**
 * Typed content module for the marketing home page (design.md D7).
 * All copy, links, and structured section data live here so section components
 * stay pure render functions and marketing copy is editable in one place.
 * Product-provided placeholders (wordmark, install command, repo slug) can be
 * swapped without touching layout.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  terminal: { prompt?: string; command: string; output: string };
}

export interface HowItWorksStep {
  title: string;
  description: string;
  terminal: { prompt?: string; command: string; output: string };
}

export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export const brand = {
  wordmark: 'shellwright',
  /** GitHub repo slug for the live star count. */
  repo: 'shellwright/shellwright',
  installCommand: 'npm install -g shellwright',
} as const;

export const routes = {
  docs: '/docs',
  pricing: '/pricing',
  blog: '/blog',
  changelog: '/changelog',
  signIn: '/signin',
  signUp: '/signup',
  github: 'https://github.com/shellwright/shellwright',
  status: 'https://status.shellwright.dev',
} as const;

export const nav = {
  links: [
    { label: 'Docs', href: routes.docs },
    { label: 'Pricing', href: routes.pricing },
    { label: 'Blog', href: routes.blog },
    { label: 'Changelog', href: routes.changelog },
  ] satisfies NavLink[],
  signIn: { label: 'Sign in', href: routes.signIn },
  cta: { label: 'Get started', href: routes.signUp },
};

export const hero = {
  headline: 'The dev toolkit that never leaves your shell.',
  subhead:
    'shellwright wires up your project, services, and deploys from one command line. No dashboards to babysit, no context switch — just you and the prompt.',
  primaryCta: { label: 'Start building — free', href: routes.signUp },
  secondaryCta: { label: 'Read the docs', href: routes.docs },
  terminal: {
    title: 'zsh — ~/apps/checkout',
    prompt: '❯',
    command: 'shellwright deploy --prod',
    output:
      '✓ built 42 modules in 1.8s\n✓ ran 318 tests · 0 failed\n✓ deployed to prod · https://checkout.acme.dev',
  },
};

export const logoStrip = {
  heading: 'Shipping in the terminals of teams at',
  logos: ['Vercel', 'Linear', 'Supabase', 'Railway', 'Fly.io', 'Neon'],
};

export const features = {
  heading: 'Everything the CLI-first developer needs',
  subhead: 'Composable commands that do one thing well and pipe into the next.',
  cards: [
    {
      title: 'One-command setup',
      description:
        'Scaffold, install, and wire services in a single command. No fifteen-step onboarding doc.',
      terminal: {
        prompt: '❯',
        command: 'shellwright init',
        output: '✓ workspace ready · 3 services linked',
      },
    },
    {
      title: 'Instant environments',
      description:
        'Spin up an isolated, production-parity environment per branch, torn down automatically.',
      terminal: {
        prompt: '❯',
        command: 'shellwright env create feat/auth',
        output: '✓ env feat-auth live · ttl 24h',
      },
    },
    {
      title: 'Typed config',
      description:
        'Your config is validated against a schema before anything runs — errors fail loud and early.',
      terminal: {
        prompt: '❯',
        command: 'shellwright check',
        output: '✓ config valid · 0 warnings',
      },
    },
    {
      title: 'Zero-downtime deploys',
      description:
        'Rolling deploys with automatic health checks and one-command rollback when you need it.',
      terminal: {
        prompt: '❯',
        command: 'shellwright rollback',
        output: '✓ reverted to v218 in 900ms',
      },
    },
    {
      title: 'Secrets that stay secret',
      description:
        'Encrypted secrets synced across environments — never printed, never committed.',
      terminal: {
        prompt: '❯',
        command: 'shellwright secrets pull',
        output: '✓ 12 secrets synced · encrypted',
      },
    },
    {
      title: 'Pipe into anything',
      description:
        'Every command emits structured JSON, so shellwright drops into the scripts you already have.',
      terminal: {
        prompt: '❯',
        command: 'shellwright ps --json | jq .running',
        output: '4',
      },
    },
  ] satisfies FeatureCard[],
};

export const howItWorks = {
  heading: 'Up and running in three commands',
  steps: [
    {
      title: 'Install',
      description: 'Grab the CLI from npm. One binary, no runtime to manage.',
      terminal: {
        prompt: '$',
        command: 'npm install -g shellwright',
        output: 'added 1 package in 2s',
      },
    },
    {
      title: 'Configure',
      description: 'Authenticate and link your project. Config is written and validated for you.',
      terminal: {
        prompt: '❯',
        command: 'shellwright login && shellwright link',
        output: '✓ linked shellwright/checkout',
      },
    },
    {
      title: 'Run',
      description: 'Ship it. Build, test, and deploy in one pass with live output.',
      terminal: {
        prompt: '❯',
        command: 'shellwright deploy --prod',
        output: '✓ deployed to prod in 4.1s',
      },
    },
  ] satisfies HowItWorksStep[],
};

export const metrics = {
  heading: 'Trusted where uptime is the job',
  items: [
    { value: '2.1M+', label: 'deploys shipped' },
    { value: '99.99%', label: 'control-plane uptime' },
    { value: '<2s', label: 'median deploy time' },
    { value: '14k+', label: 'teams onboard' },
  ] satisfies Metric[],
};

export const testimonials = {
  heading: 'Developers who live in the terminal',
  items: [
    {
      quote:
        'We deleted three internal dashboards the week we adopted shellwright. Everything I need is a command away now.',
      name: 'Priya Raman',
      role: 'Staff Engineer, Latchbox',
    },
    {
      quote:
        'The JSON-everywhere output meant it dropped straight into our existing CI scripts. Migration took an afternoon.',
      name: 'Marco Feld',
      role: 'Platform Lead, Northbound',
    },
    {
      quote:
        'Per-branch environments that tear themselves down killed our staging bill and our staging bickering.',
      name: 'Dana Osei',
      role: 'CTO, Quorum Labs',
    },
  ] satisfies Testimonial[],
};

export const pricing = {
  heading: 'Pricing that scales with your shell history',
  subhead: 'Start free. Upgrade when your team does.',
  tiers: [
    {
      name: 'Hobby',
      price: '$0',
      cadence: '/mo',
      description: 'For solo projects and side quests.',
      features: ['1 developer', '3 environments', 'Community support'],
      cta: 'Start free',
    },
    {
      name: 'Team',
      price: '$20',
      cadence: '/dev/mo',
      description: 'For teams shipping every day.',
      features: [
        'Unlimited developers',
        'Unlimited environments',
        'Secrets sync',
        'Priority support',
      ],
      cta: 'Start free trial',
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      cadence: '',
      description: 'For orgs with compliance and scale needs.',
      features: ['SSO & SAML', 'Audit logs', 'SLA & dedicated support', 'On-prem control plane'],
      cta: 'Talk to sales',
    },
  ] satisfies PricingTier[],
  fullPricingCta: { label: 'Compare all plans', href: routes.pricing },
};

export const ctaBand = {
  heading: 'Your next deploy is one command away.',
  subhead: 'Install shellwright and ship something before your coffee cools.',
  installCommand: brand.installCommand,
  cta: { label: 'Create your account', href: routes.signUp },
};

export const footer = {
  tagline: 'The terminal-native dev toolkit.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: routes.pricing },
        { label: 'Changelog', href: routes.changelog },
        { label: 'Docs', href: routes.docs },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'Blog', href: routes.blog },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Security', href: '/security' },
      ],
    },
  ] satisfies FooterColumn[],
  social: [
    { label: 'GitHub', href: routes.github },
    { label: 'X', href: 'https://x.com/shellwright' },
    { label: 'Discord', href: 'https://discord.gg/shellwright' },
  ] satisfies NavLink[],
  status: { label: 'All systems operational', href: routes.status },
  copyright: `© ${new Date().getFullYear()} shellwright, Inc.`,
};
