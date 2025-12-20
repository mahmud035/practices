import { Search, Wifi } from 'lucide-react';

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-zinc-900 px-3 py-1.5 text-sm font-semibold text-white">
            Admin
          </div>
          <div className="hidden text-sm text-zinc-600 sm:block">
            Manage products with resilient uploads
          </div>
        </div>

        <div className="hidden w-full max-w-md items-center gap-2 rounded-xl border bg-white px-3 py-2 text-sm text-zinc-600 sm:flex">
          <Search className="h-4 w-4" />
          <input
            className="w-full outline-none placeholder:text-zinc-400"
            placeholder="Search (UI-only for now)…"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Wifi className="h-4 w-4" />
          Network matters.
        </div>
      </div>
    </header>
  );
}
