# Design Tokens And Components

## Core Tokens (`tokens.json`)

1. Brand
   - `brand.500`: `#9566F2`
   - `brand.700`: `#6B44D8`
   - `brand.100`: `#F1EBFF`
2. Text
   - `text.primary`: `#111827`
   - `text.secondary`: `#4B5563`
3. Background and borders
   - `bg.page`: `#FFFFFF`
   - `bg.subtle`: `#F8F9FC`
   - `border.default`: `#E5E7EB`
4. State colors
   - `success`: `#16A34A`
   - `warning`: `#F59E0B`
   - `danger`: `#DC2626`
   - `info`: `#2563EB`
5. Radius
   - `8`, `12`, `16`, `20`
6. Spacing scale
   - `4, 8, 12, 16, 20, 24, 32`
7. Shadow
   - Level 1 and 2 shadows defined in tokens.
8. Hard rules
   - `brandRatioMax: 0.15`
   - `minTap: 44`
   - `textMinMobile: 14`

## Token Layer (`styles/tokens.css`)

1. Primitive palette: violet, gray, success/warning/error/info families.
2. Semantic variables:
   - Background: `--bg-page`, `--bg-subtle`, `--bg-surface`, `--bg-brand-soft`
   - Text: `--text-primary`, `--text-secondary`, `--text-tertiary`, `--text-on-brand`
   - Border and focus: `--border-default`, `--border-strong`, `--focus-ring`
   - Brand and states: `--brand`, `--brand-hover`, `--brand-active`, `--success`, `--warning`, `--danger`, `--info`
3. Includes dark-theme overrides under `[data-theme="dark"]`.

## Component Layer (`styles/components.css`)

### Core classes

1. Container and surfaces
   - `.card`, `.sub`, `.table`
2. Buttons
   - Base: `.btn`
   - Variants: `.btnPrimary`, `.btnGhost`, `.btnDanger`, `.btnSoft`
   - States: `:hover`, `:active`, `:focus-visible`, `:disabled`, `.btnLoading`, `[aria-busy="true"]`
3. Form controls
   - `.field`, `.labelx`, `.inputx`, `.help`
   - States: `.inputx.success`, `.inputx.warning`, `.inputx.error`
4. Utilities
   - `.list`, `.note`, `.sr-only`

### Behavioral requirements

1. Keep focus-visible ring on interactive controls.
2. Keep disabled and loading states visibly distinct.
3. Keep semantic colors for success/warning/error feedback.

## Page Composition Layer (`styles/page-visos.css`)

1. Layout shell
   - Desktop split: `.app` with sidebar and main content.
   - Mobile collapse at around `1100px`.
2. Reusable layout primitives
   - `.grid2`, `.grid3`, `.example-grid`, `.device-grid`, `.checks`, `.swatches`.
3. Data-viz primitives
   - `.chart`, `.line-legend`, `.bars`, `.risk`, `.track`, `.fill`.
4. Toast feedback
   - `.toast` + `.toast.show`.

## Token Check Script Notes

`scripts/check-tokens.js` compares values in `tokens.json` against CSS variables from `styles/tokens.css`.  
Because dark-theme variables are declared later in the same file, script results can reflect last-declared values rather than light-mode defaults. Treat failures as a diagnostic that needs manual interpretation, not always a hard regression.
