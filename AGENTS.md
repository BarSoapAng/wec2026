# Project Instructions

Before beginning work in this repository, read `src/lib/styles.ts` and use the design tokens defined there as much as possible. If the user requests a style that is not defined yet, prompt the user if they would like to add a new style token to the file.

For any responsive layout or breakpoint-related work, always read `src/lib/responsive.ts` first and use the breakpoints defined there.

# Repository Organization

- This is a Vite React app using TypeScript and `styled-components`.
- Put page-level sections in `src/sections/<SectionName>/<SectionName>.tsx`. Shared constants for sections belong in `src/sections/constants.ts`.
- Put reusable UI in `src/components`. Follow the current grouping by area: `base` for app-wide building blocks and feature folders for section-specific pieces.
- When adding a component that should be imported elsewhere, export it from `src/components/index.ts` or the nearest existing barrel file.
- Put shared hooks, style tokens, breakpoints, and small utilities in `src/lib`.
- Store images and other static assets under `src/assets/<section-or-feature>`, then export them from `src/assets/index.ts` for app imports.
- Prefer colocating small component-specific constants next to the component that uses them, as in `src/components/about/camera/constants.ts`.
- Define component styles in the same file with `styled-components` unless an existing local pattern suggests a separate file.
