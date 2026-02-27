#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const cssPath = path.join(root, 'styles', 'tokens.css');
const jsonPath = path.join(root, 'tokens.json');

function fail(msg){
  console.error(`❌ ${msg}`);
  process.exit(1);
}

if(!fs.existsSync(cssPath)) fail(`Missing ${cssPath}`);
if(!fs.existsSync(jsonPath)) fail(`Missing ${jsonPath}`);

const css = fs.readFileSync(cssPath, 'utf8');
const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const varMap = {};
for (const m of css.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)) {
  varMap[m[1].toLowerCase()] = m[2].trim().toLowerCase();
}

const expected = {
  brand500: json.color.brand['500'],
  brand700: json.color.brand['700'],
  brand100: json.color.brand['100'],
  textPrimary: json.color.text.primary,
  textSecondary: json.color.text.secondary,
  bgPage: json.color.bg.page,
  bgSubtle: json.color.bg.subtle,
  borderDefault: json.color.border.default,
  success: json.color.state.success,
  warning: json.color.state.warning,
  danger: json.color.state.danger,
  info: json.color.state.info,
};

const bindings = {
  brand500: 'violet-500',
  brand700: 'violet-700',
  brand100: 'violet-100',
  textPrimary: 'text-primary',
  textSecondary: 'text-secondary',
  bgPage: 'bg-page',
  bgSubtle: 'bg-subtle',
  borderDefault: 'border-default',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info'
};

let errors = [];
for (const [k, cssVar] of Object.entries(bindings)) {
  const cssVal = varMap[cssVar];
  const expectedVal = String(expected[k]).trim().toLowerCase();
  if (!cssVal) {
    errors.push(`missing --${cssVar}`);
    continue;
  }

  // Resolve var(--violet-500) style links for semantic vars
  const resolved = cssVal.replace(/var\(--([a-z0-9-]+)\)/gi, (_, ref) => varMap[ref.toLowerCase()] || `var(--${ref})`);
  if (resolved !== expectedVal) {
    errors.push(`--${cssVar} mismatch: css=${cssVal} (resolved=${resolved}) json=${expectedVal}`);
  }
}

if (errors.length) {
  console.error('Token consistency check failed:');
  for (const e of errors) console.error(' - ' + e);
  process.exit(1);
}

console.log('✅ Token consistency check passed');
