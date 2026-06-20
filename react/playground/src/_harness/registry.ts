import type { ComponentType, LazyExoticComponent } from 'react';
import { lazy } from 'react';

/**
 * Auto-discovers every example. Drop a folder under `src/examples/<slug>/`
 * with an entry file `App.tsx` | `App.jsx` (default-exporting a React
 * component) and it appears in the sidebar automatically. No registration.
 */
const modules = import.meta.glob('../examples/*/App.{tsx,jsx}');

/** First slug segment -> readable category label. Add new prefixes here. */
const PREFIX_LABELS: Record<string, string> = {
  rhf: 'RHF',
  rfh: 'RHF', // tolerate the folder-name typo
  eh: 'Escape Hatches',
  du: 'Describing the UI',
  ai: 'Adding Interactivity',
  ms: 'Managing State',
  api: 'API',
  rr: 'Rules of React',
  gs: 'Get Started',
  hooks: 'Hooks',
};

export type Example = {
  slug: string;
  /** Full label, e.g. "Escape Hatches: Reusing Logic ...". Used for filter + sort + tooltip. */
  title: string;
  /** Category eyebrow, e.g. "Escape Hatches". Undefined when the slug has no known prefix. */
  group?: string;
  /** Title without the category prefix, e.g. "Reusing Logic ...". */
  name: string;
  Component: LazyExoticComponent<ComponentType>;
};

/** `../examples/thinking-in-react/App.tsx` -> `thinking-in-react` */
function slugFromPath(path: string): string {
  const match = path.match(/\/examples\/([^/]+)\//);
  return match ? match[1] : path;
}

function toTitleCase(words: string[]): string {
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function labelsFromSlug(
  slug: string,
): Pick<Example, 'title' | 'group' | 'name'> {
  const parts = slug.split('-');
  const group = PREFIX_LABELS[parts[0].toLowerCase()];
  if (group) {
    const name = toTitleCase(parts.slice(1));
    return { group, name, title: `${group}: ${name}` };
  }
  const name = toTitleCase(parts);
  return { name, title: name };
}

export const examples: Example[] = Object.entries(modules)
  .map(([path, loader]) => {
    const slug = slugFromPath(path);
    return {
      slug,
      ...labelsFromSlug(slug),
      Component: lazy(loader as () => Promise<{ default: ComponentType }>),
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));
