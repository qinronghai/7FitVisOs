# Quality Checklist

Use this list before finalizing any UI changes.

## Visual Consistency

1. Keep brand usage focused; avoid over-coloring large surfaces.
2. Keep radius, border, and shadow values aligned with token scale.
3. Keep hierarchy clear: page title, section title, body, helper text.
4. Keep spacing rhythm consistent with token steps.

## Components And States

1. Buttons include normal, hover, active, focus-visible, disabled, and loading where relevant.
2. Inputs include normal plus success/warning/error states where relevant.
3. Empty/loading/error scenarios are explicitly represented in UI flows.

## Accessibility

1. Ensure minimum target size is `44x44` for touch controls.
2. Keep minimum mobile body text size at `14px`.
3. Keep contrast at readable levels in both light and dark themes.
4. Do not use color as the only status signal; pair with text/icon/shape cues.
5. Keep `aria-live` for transient feedback messages (for example toast copy feedback).

## Responsive Behavior

1. Verify desktop, tablet, and mobile structure:
   - desktop keeps multi-column layout where designed,
   - tablet/mobile collapse to single column when required.
2. Keep semantics and states identical across breakpoints; only rearrange layout.

## Print And PDF

1. Test with browser print preview.
2. Prefer A4 output with margins:
   - top/bottom `14mm`,
   - left/right `12mm`.
3. Hide controls not needed on paper.
4. Keep print contrast high and remove visual noise.

## Compliance And Content Tone

1. Keep copy professional and evidence-driven.
2. Avoid exaggerated or guaranteed-outcome claims.
3. Keep language aligned with 7Fit's assessment-driven training positioning.

## Validation Commands

1. Run:
   - `npm run check:tokens`
2. If token check reports mismatches, confirm whether values came from dark-mode override order.
3. Manually compare `tokens.json` with `styles/tokens.css` `:root` block when needed.
