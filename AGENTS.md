<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# my-folio

Single-page personal portfolio built with the Next.js App Router. One app, no monorepo.

## Commands

- `npm run dev` — dev server on `:3000` (Turbopack).
- `npm run build` / `npm run start` — production build and serve.
- `npm run lint` — ESLint flat config; the only automated check. There is no test suite, typecheck script, CI, pre-commit hook, or formatter config.
- Use npm; `package-lock.json` is committed.

## Structure

- `src/app/layout.js` — server root: fonts, metadata, `ThemeProvider`, `Navbar`, `Footer`.
- `src/app/page.js` — server entry; renders `Hero → Skills → Projects → About → Resume → Contact`.
- `src/components/*.jsx` — one file per section. Most are client components (`"use client"`) for state/effects; `About`, `Resume`, and `Footer` are server components. Add the directive only when hooks or browser APIs are needed.
- `@/*` maps to `src/*` (`jsconfig.json`); existing files mix alias and relative imports.
- All content is hardcoded in component-level `const` data (`profile`, `projects`, `skills`, `experience`, `contact`, `brand`); there is no CMS or API. Edit those objects to change copy.
- To add a section: create the component with `<section id="...">`, import it in `src/app/page.js`, then add the link to `navLinks` in `Navbar.jsx` and `quickLinks` in `Footer.jsx`.
- Many comments are in Bengali; keep them unless replacing the code they document.

## Styling (Tailwind v4)

- Theme lives in `src/app/globals.css` (`:root` + `.dark` variables and `@theme inline`); there is no `tailwind.config.*`.
- Use semantic utilities, not raw colors: `bg-page`, `bg-card`, `text-primary`, `text-primary-hover`, `text-secondary`, `text-heading`, `text-paragraph`, `border-line`, `text-on-primary`.
- Retheme by changing only the `:root` / `.dark` hex values. Dark mode is class-based via `next-themes`; keep `suppressHydrationWarning` on `<html>`.
- Tailwind is loaded by a custom Turbopack rule in `next.config.mjs` (`@tailwindcss/turbopack`), not PostCSS. Don't remove it or add a conflicting PostCSS setup.
- React Compiler is enabled in `next.config.mjs` (`reactCompiler: true`).

## Gotchas

- Keep source files LF (`.gitattributes` sets `eol=lf`). CRLF inside JSX `className` template literals causes Next.js/Turbopack hydration mismatches.
- Section images live in `public/Image/` (`Hero-Image.png`, `About-me.png`, `erfan-shawon-logo.png`); all "Download CV" links use `public/cv.pdf`.
- Project cards fall back to WordPress mShots screenshots; set `project.image` to a local path (for example `/projects/foo.png`) to override.
- Contact form: with `NEXT_PUBLIC_WEB3FORMS_KEY` in `.env.local` it posts to Web3Forms; without the key it falls back to `mailto:`. `.env*` is gitignored.
- Some visible copy is still placeholder (`YourName`, `Your Institute`, metadata `"Create Next App"`); update it when the task is content-related.

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
