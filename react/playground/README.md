# react/playground

A warm, zero-setup practice playground for React + React Hook Form examples.
Drop an example folder in `src/examples/` and it auto-appears in the sidebar —
no registration, no per-example scaffold. All time here is tracked by your
local WakaTime (VS Code), unlike browser sandboxes.

## Run

```bash
npm install   # once
npm run dev   # leave it running; HMR renders changes instantly
```

## Shell shortcuts

Two helpers live in `~/.zshrc` (set up once):

| Command            | What it does                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| `react-play`       | `cd` into this playground and start the dev server in one step.                                         |
| `mkexample <slug>` | Scaffold `src/examples/<slug>/App.jsx` (with a stub component) and print the path, ready to paste into. |

```bash
# Definitions (in ~/.zshrc):
alias react-play='cd ~/Workspace/practices/react/playground && npm run dev'

mkexample() {
  if [ -z "$1" ]; then echo "Usage: mkexample <slug>"; return 1; fi
  local dir=~/Workspace/practices/react/playground/src/examples/"$1"
  mkdir -p "$dir"
  printf 'export default function App() {\n  return <h1>%s</h1>;\n}\n' "$1" > "$dir/App.jsx"
  echo "✅ Created $dir/App.jsx — paste your example, save, it appears in the sidebar"
}
```

## Add a new example (the whole loop)

1. `mkexample <slug>` — creates `src/examples/<slug>/App.jsx`.
2. Paste the example into `App.jsx` (or rename to `App.tsx` if writing TypeScript).
3. Drop any sibling files beside it (`ProductTable.jsx`, `styles.css`, …) and
   import them relatively — exactly as the original example was structured.
4. Save. It appears in the sidebar automatically. Use the filter box to find it.

### The one convention

**JSX lives in `.jsx` / `.tsx` files — never `.js`.**
Pasting a CodeSandbox/react.dev example whose files are `.js`? Rename them to
`.jsx` (VS Code: select file, press F2). This is the universal React convention
and keeps the toolchain durable across Vite upgrades.

`.ts`/`.js` files with **no JSX** (pure logic, hooks, utils) are fine as-is.

## Structure

```
src/
├── examples/        ← you only ever touch this
│   └── <slug>/App.jsx (+ siblings)
├── _harness/        ← set up once, never touched
│   ├── registry.ts        ← import.meta.glob auto-discovery
│   ├── Sidebar.tsx        ← filterable example navigator
│   └── Sidebar.module.css ← sidebar styles
├── App.tsx          ← shell (sidebar + active example)
└── main.tsx
```

## How type-checking is split (why CSS imports work and experiments never block builds)

- `tsconfig.app.json` — type-checks only the harness (`_harness`, `App.tsx`,
  `main.tsx`). This is the build gate (`npm run build` → `tsc -b`).
- `tsconfig.examples.json` — editor-only config for `src/examples/`. It loads
  `vite/client` types (so `import './styles.css'` resolves in `.tsx` with no
  TS2882 error) and relaxes lint rules for quick experiments. It is **not** part
  of `tsc -b`, so a half-finished or type-broken example never fails the build.
  `npm run dev` (Vite) ignores type errors entirely, so practice is never blocked.
