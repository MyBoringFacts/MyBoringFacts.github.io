# Repository Guidelines

## Project Structure & Module Organization

This Next.js 16 portfolio uses the App Router and exports as a static site. Route entry points and global styles live in `app/`; `app/page.tsx` assembles the portfolio, while `app/me/page.tsx` provides the `/me` route. Reusable React code is organized under `components/`: page-level content belongs in `components/sections/`, and shadcn/Radix primitives belong in `components/ui/`. Shared hooks and utilities live in `hooks/` and `lib/`. Store static files in `public/`. GitHub Pages deployment is defined in `.github/workflows/nextjs.yml`; generated `.next/`, `out/`, and `node_modules/` content should not be edited or committed.

## Build, Test, and Development Commands

Use pnpm 10 and Node.js 20, matching CI.

- `pnpm install --frozen-lockfile` installs the exact locked dependencies.
- `pnpm dev` starts the local development server with hot reload.
- `pnpm lint` runs the Next.js Core Web Vitals and TypeScript ESLint rules.
- `pnpm build` type-checks, builds, and writes the static export to `out/`.
- `pnpm start` serves a Next production server; for this static-export project, validate `out/` after building when deployment behavior matters.

Before submitting changes, run `pnpm lint && pnpm build`.

## Coding Style & Naming Conventions

Write strict TypeScript and functional React components. Follow existing formatting: two-space indentation, semicolons, double quotes, and trailing commas in multiline expressions. Name components and exported types in PascalCase, hooks with a `use-`/`useX` pattern, and files in lowercase kebab-case (for example, `theme-toggle.tsx`). Prefer the `@/` path alias over deep relative imports. Keep route composition lean, place reusable UI in `components/`, and use Tailwind utility classes plus `lib/utils.ts` for class merging.

## Testing Guidelines

No automated test framework or coverage threshold is configured. Treat linting and a successful production build as required checks. Manually inspect affected routes at mobile and desktop widths, test both themes, verify reduced-motion behavior for animation changes, and confirm assets and internal anchors work in the static export. If tests are introduced, colocate them as `*.test.ts` or `*.test.tsx` and add a documented `pnpm test` script.

## Commit & Pull Request Guidelines

Recent commits use short, action-oriented subjects such as `add /me page` and `fix the error`; prefer a specific imperative summary under 72 characters (for example, `fix hero animation on page restore`). Keep commits focused. Pull requests should explain the user-visible change, list validation performed, link relevant issues, and include before/after screenshots for layout, theme, or animation changes. Call out dependency, workflow, or deployment changes explicitly.
