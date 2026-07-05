# Project Structure & Tooling Alignment

## Context

The reference project [luukasmakila/lukemadeit.io](https://github.com/luukasmakila/lukemadeit.io) uses conventions this portfolio should adopt: a `src/app` layout, feature-organized components under `components/`, a shared `types.ts`, and a `@/*` path alias. That project runs older dependencies (Next 15, Tailwind v3, yarn, legacy FlatCompat ESLint config); this project keeps its current, newer stack (Next 16, React 19, Tailwind v4, npm, native flat ESLint config) and only adopts the organizational conventions, not the dependency versions.

This portfolio currently has no content beyond the default `create-next-app` landing page, so only the organizational skeleton is scaffolded — no blog/gear/products-style pages are invented.

## Scope

1. Move `app/` → `src/app/`.
2. Add `@/*` → `./src/*` path alias in `tsconfig.json`.
3. Add `src/app/components/Navbar/navbar.tsx` — minimal shell (site name + empty nav slot) — rendered from `src/app/layout.tsx`.
4. Add `src/app/types.ts` — empty shared-types file for future use.
5. Add Prettier: `.prettierrc`, `.prettierignore`, `eslint-config-prettier` wired into `eslint.config.mjs`, `"format"` script in `package.json`.
6. Add `.nvmrc` pinned to the currently installed Node version.

## Explicitly out of scope

- No dependency downgrades (Next/Tailwind/React versions stay as-is).
- No `tailwind.config.ts` — Tailwind v4's CSS-based config via `postcss.config.mjs` already covers this; adding one would be redundant.
- No blog/gear/products pages or content-specific components.
- No Husky/lint-staged (would require deciding on git hook policy — not requested).
- No `.editorconfig` (not requested).
- No package manager change (staying on npm).

## Verification

- `npm run lint` passes after restructure.
- `npm run build` succeeds with the new `src/app` layout.
- `npm run format` runs Prettier without errors.
- Dev server renders the landing page with the Navbar shell visible.
