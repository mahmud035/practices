import type { ComponentType } from 'react';
import { Suspense, useState, useTransition } from 'react';
import { examples } from './_harness/registry';
import { Sidebar } from './_harness/Sidebar';

export default function App() {
  const [activeSlug, setActiveSlug] = useState<string>(examples[0]?.slug ?? '');
  const [, startTransition] = useTransition();
  const active = examples.find((example) => example.slug === activeSlug);

  // A transition keeps the current example on screen while the next lazy chunk
  // loads, so switching never flashes the Suspense fallback.
  function handleSelect(slug: string) {
    startTransition(() => setActiveSlug(slug));
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar
        examples={examples}
        activeSlug={activeSlug}
        onSelect={handleSelect}
      />
      <main style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
        {active ? (
          <Suspense fallback={null}>
            <ActiveExample key={active.slug} component={active.Component} />
          </Suspense>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}

function ActiveExample({ component: Component }: { component: ComponentType }) {
  return <Component />;
}

function EmptyState() {
  return (
    <div style={{ color: '#6b7a8d', maxWidth: 520 }}>
      <h1 style={{ color: '#e6edf5' }}>No examples yet</h1>
      <p>
        Create a folder under <code>src/examples/&lt;slug&gt;/</code> with an
        entry file <code>App.jsx</code> or <code>App.tsx</code> that
        default-exports a React component. It appears here automatically.
      </p>
    </div>
  );
}
