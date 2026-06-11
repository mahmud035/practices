export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-md bg-border ${className}`} />;
}

/** Card-shaped skeleton used while job/application lists load. */
export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-surface-raised p-5">
      <Skeleton className="mb-3 h-5 w-2/3" />
      <Skeleton className="mb-2 h-4 w-1/3" />
      <Skeleton className="mb-4 h-4 w-1/2" />
      <Skeleton className="h-9 w-24" />
    </div>
  );
}

export function ListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
