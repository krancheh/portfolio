<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Git

- Never run `git add`, `git commit` or `git push`. Leave all changes uncommitted; the user stages, commits and pushes themselves.
- Read-only git commands (`git status`, `git diff`, `git log`) are fine.

## Project

- Package manager: **pnpm** (never npm or yarn). Node.js 24 LTS.
- Stack: Next.js 16 (App Router, `src/` dir, Turbopack), React 19, TypeScript, Tailwind CSS v4, shadcn/ui.
- Import alias: `@/*` → `src/*`.

## Code style

- Write React components as arrow functions, never function declarations. For a page, layout or other default export, declare the arrow first, then export it:

  ```tsx
  const Home = () => {
    return <main>…</main>;
  };

  export default Home;
  ```

- ESLint enforces this (`react/function-component-definition`). Run `pnpm lint` after changes; `pnpm lint --fix` converts named exports such as shadcn/ui components, but default-exported pages and layouts need converting by hand.

## shadcn/ui

- Config in `components.json`: style `new-york`, base color `zinc`, CSS variables, icons from `lucide-react`.
- Add components with `pnpm dlx shadcn@latest add <component>`; they land in `src/components/ui/`. Then run `pnpm lint --fix` to convert them to arrow functions.
- Class merging uses the `cn` npm package (shadcn's replacement for clsx + tailwind-merge): `import { cn } from "cn"`. `src/lib/utils.ts` only re-exports it for the `utils` alias; don't add clsx or tailwind-merge back.
- Theme tokens live in `src/app/globals.css` (from the Kronk Portfolio design): zinc tinted violet (≈290°), `--radius: 0.75rem`, light in `:root`, dark in `.dark`.
- Extra tokens beyond the shadcn set: `brand`, `brand-soft`, `highlight`, `highlight-border`, `hero`, `hero-foreground`, `hero-muted-foreground` (use as `bg-hero`, `text-brand-soft`, etc.). Use tokens, not raw hex values.
- Fonts: Plus Jakarta Sans (`font-sans`) and JetBrains Mono (`font-mono`) via `next/font/google` in `src/app/layout.tsx`.
