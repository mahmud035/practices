import { useMemo, useState } from 'react';
import type { Example } from './registry';
import styles from './Sidebar.module.css';

type SidebarProps = {
  examples: Example[];
  activeSlug: string;
  onSelect: (slug: string) => void;
};

export function Sidebar({ examples, activeSlug, onSelect }: SidebarProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return examples;
    return examples.filter((example) =>
      example.title.toLowerCase().includes(q),
    );
  }, [examples, query]);

  return (
    <nav className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <span className={styles.title}>Examples</span>
          <span className={styles.count}>{examples.length}</span>
        </div>
        <input
          className={styles.search}
          type="search"
          placeholder="Filter examples…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Filter examples"
        />
      </div>

      <ul className={styles.list}>
        {filtered.length === 0 ? (
          <li className={styles.empty}>No matches for “{query}”</li>
        ) : (
          filtered.map((example) => {
            const isActive = example.slug === activeSlug;
            return (
              <li key={example.slug}>
                <button
                  type="button"
                  title={example.title}
                  onClick={() => onSelect(example.slug)}
                  className={
                    isActive
                      ? `${styles.item} ${styles.itemActive}`
                      : styles.item
                  }
                >
                  {example.group && (
                    <span className={styles.eyebrow}>{example.group}</span>
                  )}
                  <span className={styles.name}>{example.name}</span>
                </button>
              </li>
            );
          })
        )}
      </ul>
    </nav>
  );
}
