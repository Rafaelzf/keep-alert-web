# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**keep-alert-web** is a web application built with Astro 5, a modern web framework that delivers fast, content-focused websites. The project uses Tailwind CSS v4 for styling via the Vite plugin integration, and TypeScript with strict mode enabled.

## Development Commands

All commands use `pnpm` as the package manager and should be run from the project root:

```bash
pnpm install           # Install dependencies
pnpm dev              # Start development server at localhost:4321
pnpm build            # Build production site to ./dist/
pnpm preview          # Preview production build locally
pnpm astro ...        # Run Astro CLI commands (e.g., astro add, astro check)
```

## Architecture

### File-Based Routing

Astro uses file-based routing where files in `src/pages/` automatically become routes:
- `src/pages/index.astro` → `/` (home page)
- `.astro` and `.md` files in `src/pages/` are exposed as routes based on their file names

### Styling with Tailwind CSS v4

The project uses **Tailwind CSS v4** integrated via the `@tailwindcss/vite` plugin:
- **astro.config.mjs** - Tailwind is configured as a Vite plugin
- **src/styles/global.css** - Imports Tailwind with `@import "tailwindcss"`
- Tailwind classes can be used directly in Astro components and pages

Note: Tailwind v4 uses a simpler import syntax and is configured through Vite, not a separate `tailwind.config.js` file.

### TypeScript Configuration

TypeScript is configured with:
- Strict mode enabled (extends `astro/tsconfigs/strict`)
- Astro TypeScript plugin for enhanced IDE support
- Path aliases for clean imports:
  - `@components/*` → `./src/components/*`
  - `@layouts/*` → `./src/layouts/*`

### Project Structure

```
keep-alert-web/
├── public/           # Static assets (images, fonts, etc.)
├── src/
│   ├── pages/        # Routes (.astro or .md files)
│   └── styles/       # Global CSS files
├── astro.config.mjs  # Astro configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project metadata and scripts
```

The `src/components/` and `src/layouts/` directories can be used for reusable Astro/React/Vue/Svelte components and layout templates, though they're not yet created in this starter.

## Configuration Files

### Astro Configuration (astro.config.mjs)
- Tailwind CSS v4 integrated via Vite plugin
- Dev toolbar disabled for cleaner development experience

### TypeScript (tsconfig.json)
- Extends Astro's strict TypeScript configuration
- Includes Astro TypeScript plugin for IDE integration
- Defines path aliases for `@components` and `@layouts`

## Important Notes

1. **Package Manager**: This project uses `pnpm`. Always use `pnpm` commands, not `npm` or `yarn`.

2. **Tailwind v4**: This project uses the new Tailwind CSS v4 which has a different setup than v3. Configuration is done through Vite, and CSS imports use the simpler `@import "tailwindcss"` syntax.

3. **Astro Components**: Astro components (`.astro` files) have a unique syntax with a frontmatter section (between `---` delimiters) for component logic and a template section for HTML/JSX-like markup.

4. **Static Assets**: Files in the `public/` directory are served as-is at the root path. For example, `public/favicon.svg` is available at `/favicon.svg`.

5. **Path Aliases**: Use the configured path aliases (`@components/*`, `@layouts/*`) for cleaner imports when adding components and layouts.
