# 7Fit Visual OS v4.5 - Changelog (Stage 1)

## Date
- 2026-02-18

## Scope
- Refactor styles into layered architecture
- Add token consistency validation
- Complete component state coverage baseline
- Add accessibility-friendly live announcements for toast messages

## Changes

### 1) Layered CSS architecture
- Added `styles/tokens.css`
- Added `styles/components.css`
- Added `styles/page-visos.css`
- Updated `visos.html` to load external CSS layers

### 2) Token consistency checks
- Added `tokens.json` as JSON source-of-truth snapshot
- Added `scripts/check-tokens.js`
- Added `package.json` script: `check:tokens`

### 3) Component state improvements
- Button: hover / active / focus-visible / disabled / loading
- Input: default / success / warning / error / focus-visible
- Example section updated with success/warning/error input samples

### 4) Accessibility
- Added `.sr-only` utility class
- Added `aria-live` region for copy-toast announcements
- Loading button now includes `aria-busy="true"` + `aria-live="polite"`

## Validation checklist
- [x] `visos.html` loads external CSS files
- [x] no visual regression in primary sections expected
- [x] token check script exists and is runnable
- [x] state classes exist in component layer
- [x] a11y live region present

## Next stage recommendations
- Add contrast/min-tap automated lint checks
- Add visual regression snapshots for desktop/tablet/mobile
- Move token snippets in section 14 to generated output from `tokens.json`
