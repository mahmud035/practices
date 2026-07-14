import { useState } from 'react';
import { useGithubStars } from '../hooks/useGithubStars';
import { homeContent } from '../content/home';
import { CTAButton } from './ui/CTAButton';

export function NavBar() {
  const { data: stars, isLoading, isError } = useGithubStars(homeContent.repoSlug);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-6 max-w-6xl mx-auto w-full">
      <div className="font-bold text-lg text-foreground">{homeContent.wordmark}</div>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">Menu</button>
      <div className={`${isOpen ? 'flex' : 'hidden'} absolute top-16 left-0 right-0 bg-surface border-b border-border p-6 flex-col gap-4 md:static md:flex md:flex-row md:border-0 md:p-0 md:bg-transparent`}>
        <a href="#" className="text-sm text-foreground">Docs</a>
        <a href="#" className="text-sm text-foreground">Pricing</a>
        <a href="#" className="text-sm text-foreground">Sign in</a>
        {isLoading ? (
          <div className="w-16 h-8 bg-border animate-pulse rounded" />
        ) : isError ? null : (
          <div className="text-sm text-foreground bg-surface border border-border px-2 py-1 rounded">
            ★ {(stars / 1000).toFixed(1)}k
          </div>
        )}
        <CTAButton>{homeContent.cta.primary}</CTAButton>
      </div>
    </nav>
  );
}
