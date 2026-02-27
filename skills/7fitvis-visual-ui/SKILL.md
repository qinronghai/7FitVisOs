---
name: 7fitvis-visual-ui
description: Design, extend, and review UI for the 7FitVis project using this repository's Visual OS source files, tokens, component states, and layout conventions. Use when creating or refactoring 7Fit pages in HTML or CSS, auditing visual consistency, building new sections in visos or UI kit pages, or producing responsive and print-ready output that must match the 7Fit brand system.
---

# 7FitVis Visual UI

Use this skill for UI tasks in `f:/7FitVisOs`.

## Start With Project Context

1. Read `references/repo-map.md` to understand the full file inventory.
2. Read `references/design-tokens-and-components.md` for tokens and reusable classes.
3. Read `references/page-patterns.md` only for the page family that matches the current task.
4. Read `references/quality-checklist.md` before finalizing edits.

## Apply Non-Negotiable Rules

1. Keep token-first styling; do not hardcode new colors or spacing when an existing token can be used.
2. Keep brand color usage controlled:
   - Primary brand color: `#9566F2`.
   - Brand area ratio target: `<= 15%` (`tokens.json` rule `brandRatioMax`).
3. Keep interaction and accessibility baselines:
   - Minimum tap target: `44x44` (`minTap`).
   - Minimum mobile text size: `14px` (`textMinMobile`).
   - Keep visible focus styles and semantic states (`success`, `warning`, `danger`).
   - Keep or add live regions for transient feedback when applicable.
4. Keep responsive and print behavior:
   - Preserve existing breakpoints and one-column collapse patterns on small screens.
   - Preserve `@media print` behavior and A4-friendly export settings.

## Implement UI Changes

1. Pick the closest existing page pattern from `references/page-patterns.md` before creating new layout structure.
2. Reuse existing classes in `styles/components.css` and `styles/page-visos.css` where possible.
3. Add new styles to the correct layer:
   - `styles/tokens.css` for tokens only.
   - `styles/components.css` for reusable components.
   - `styles/page-visos.css` for page composition/layout.
4. Keep dark-theme behavior consistent with current toggles:
   - `visos.html` uses `#appRoot` + `data-theme`.
   - Other pages use `document.documentElement` + `localStorage('7fit-theme')`.
5. For content-heavy pages, preserve the 7Fit tone: professional, evidence-driven, no exaggerated claims.

## Review Workflow

1. Audit against token usage, spacing rhythm, hierarchy, state coverage, and accessibility.
2. Report issues by severity with file references.
3. Include concrete fixes, not only observations.

## Validation

1. Run `npm run check:tokens` when token-related files change.
2. Interpret failures carefully: current script resolves variables after dark-mode overrides in `styles/tokens.css`, so mismatches may reflect mode-order behavior rather than missing tokens.
3. Always add a manual check for:
   - `:root` token values vs `tokens.json`
   - focus visibility
   - mobile readability
   - print output (`Ctrl+P`)
