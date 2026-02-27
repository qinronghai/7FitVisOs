# Repository Map (Analyzed Files)

This skill is grounded on all files currently present in `f:/7FitVisOs`.

## Root Files

1. `visos.html` (57,476 bytes)
   - Master Visual OS document (`v4.5`), includes strategy, principles, tokens, components, responsive, data-viz, templates, governance, QA, and examples.
   - Loads layered CSS from `styles/`.
   - Includes dark-mode toggle and copy-toast accessibility live region.
2. `ui-kit-demo.html` (12,697 bytes)
   - UI kit showcase (`v3.3`) with component examples and state demos.
   - Includes theme toggle and print stylesheet.
3. `brand-marketing.html` (14,490 bytes)
   - Marketing and business overview (`v3.4`), narrative and service modules.
   - Includes theme toggle and print stylesheet.
4. `coach-sop.html` (11,960 bytes)
   - Coaching SOP (`v3.3`) with execution process, risk controls, deliverables.
   - Includes theme toggle and print stylesheet.
5. `brand-7fit.html` (10,699 bytes)
   - Brand blueprint (`v1`) with brand pyramid, JTBD, narrative, messaging.
6. `tokens.json` (629 bytes)
   - Source-of-truth snapshot for key colors, radius, spacing, shadow, and rules.
7. `CHANGELOG_STAGE1.md` (1,493 bytes)
   - Stage 1 system changelog (layered CSS, token checks, states, accessibility).
8. `pdf-export-guide.md` (735 bytes)
   - Browser-to-PDF export recommendations (A4, margins, print options).
9. `package.json` (119 bytes)
   - Defines `check:tokens` script.
10. `7分练logo-紫色底.png` (13,201 bytes)
    - Brand logo asset, `500x500` PNG.

## Subfolders

1. `styles/tokens.css` (3,006 bytes)
   - Primitive and semantic CSS variables, typography, radius, shadow, spacing, dark-theme overrides.
2. `styles/components.css` (3,631 bytes)
   - Reusable component classes and state classes.
3. `styles/page-visos.css` (7,630 bytes)
   - Layout and composition rules for Visual OS page.
4. `scripts/check-tokens.js` (2,210 bytes)
   - Token consistency check between `styles/tokens.css` and `tokens.json`.

## Practical Implication

Use `visos.html` + `styles/` as the canonical system. Use `ui-kit-demo.html`, `brand-marketing.html`, `coach-sop.html`, and `brand-7fit.html` as applied examples for tone, structure, and composition.
