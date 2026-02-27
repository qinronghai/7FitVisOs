# Page Patterns

## `visos.html` (System Canonical)

1. Purpose
   - Full visual system source with principles, rules, component standards, and governance.
2. Structure
   - Sticky sidebar navigation + main content sections.
   - Section IDs include: `overview`, `principles`, `logo`, `color`, `type`, `spacing`, `motion`, `components`, `component-spec`, `responsive`, `dataviz`, `templates`, `tokens`, `docs`, `a11y`, `governance`, `qa`, `example-pack`.
3. Interaction
   - Theme toggle via `#themeBtn`.
   - Copy-to-clipboard action with toast and `aria-live` region.
4. Use when
   - Defining standards, adding design-system rules, or updating canonical component guidance.

## `ui-kit-demo.html` (Component Playground)

1. Purpose
   - Demonstrate component states quickly for implementation and QA.
2. Includes
   - Buttons, form fields, tabs/tags/progress, KPI cards, loading, empty, table/pagination, modal, toast, timeline, simplified metrics.
3. Interaction
   - Theme toggle persisted by `localStorage('7fit-theme')`.
4. Use when
   - Building new reusable component blocks or verifying state coverage.

## `brand-marketing.html` (External-facing Narrative)

1. Purpose
   - Marketing story and service model with business-facing structure.
2. Visual pattern
   - Strong hero messaging, modular content cards, KPI-style value blocks.
3. Use when
   - Crafting landing or campaign sections while preserving 7Fit brand tone.

## `coach-sop.html` (Operational/Instructional)

1. Purpose
   - SOP structure for service execution and quality control.
2. Visual pattern
   - Process-heavy sections, risk/status pills, tables, schedule blocks.
3. Use when
   - Designing internal dashboards, SOP pages, or procedure-oriented docs.

## `brand-7fit.html` (Brand Foundation Document)

1. Purpose
   - Brand positioning, pyramid, JTBD, story, and messaging guidance.
2. Visual pattern
   - Dark premium narrative page with content cards and quote/callout blocks.
3. Use when
   - Aligning headline, copy tone, and brand story framing.

## Theme Pattern Matrix

1. `visos.html`: `#appRoot[data-theme]` controlled by a button.
2. Other major pages: `document.documentElement[data-theme]` + local storage key `7fit-theme`.
3. Rule
   - Reuse existing theme mechanism within each page family; do not introduce a third pattern.

## Print Pattern Matrix

1. Pages with print rules
   - `ui-kit-demo.html`, `brand-marketing.html`, `coach-sop.html` include `@media print`.
2. Print strategy
   - Hide controls/navigation.
   - Remove heavy shadows and dark backgrounds.
   - Use A4 page size and fixed margins.
