import { chromium } from 'playwright';

// ── Pre-test: seed known data ────────────────────────────────────
// Clean existing
const listRes = await fetch('http://localhost:5000/api/expenses');
const { data: existing } = await listRes.json();
for (const e of existing) {
  await fetch(`http://localhost:5000/api/expenses/${e._id}`, { method: 'DELETE' });
}

// Seed: expenses across multiple categories for meaningful dashboard
const today = new Date().toISOString().slice(0, 10);
const seeds = [
  { amount: 45.00, category: 'Food',          description: 'Groceries',     date: today },
  { amount: 12.50, category: 'Transport',     description: 'Bus pass',      date: today },
  { amount: 80.00, category: 'Utilities',     description: 'Electric bill', date: today },
  { amount: 25.00, category: 'Entertainment', description: 'Movie night',   date: today },
  { amount: 15.00, category: 'Food',          description: 'Lunch',         date: today },
];
for (const seed of seeds) {
  await fetch('http://localhost:5000/api/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(seed),
  });
}
console.log(`Seeded ${seeds.length} expenses.`);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
page.setDefaultTimeout(10000);

const shots = (name) => `/tmp/batch4-${name}.png`;
let passed = 0, failed = 0;
const log = [];

function step(label, ok, detail = '') {
  const icon = ok ? '✅' : '❌';
  log.push(`${icon} ${label}${detail ? ' → ' + detail : ''}`);
  ok ? passed++ : failed++;
}

// ── 1. Navigate to dashboard ──────────────────────────────────────
await page.goto('http://localhost:5173/');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: shots('01-dashboard') });

// ── 2. This-month hero card ───────────────────────────────────────
// Total: 45 + 12.50 + 80 + 25 + 15 = $177.50
step('This Month hero card visible', await page.locator('text=This Month').first().isVisible());
step('This Month total = $177.50', await page.locator('text=$177.50').first().isVisible());

// ── 3. Category breakdown (all 5 categories shown) ───────────────
for (const cat of ['Food', 'Transport', 'Utilities', 'Entertainment', 'Other']) {
  step(`Category card "${cat}" present`, await page.locator(`text=${cat}`).first().isVisible());
}

// Known totals: Food=$60, Transport=$12.50, Utilities=$80, Entertainment=$25
step('Food total = $60.00',          await page.locator('text=$60.00').first().isVisible());
step('Utilities total = $80.00',     await page.locator('text=$80.00').first().isVisible());
step('Entertainment total = $25.00', await page.locator('text=$25.00').first().isVisible());

// ── 4. Trend chart renders with data ────────────────────────────
step('"Last 6 Months" section present', await page.locator('text=Last 6 Months').first().isVisible());
// Bar chart should render an SVG
step('Trend chart SVG rendered', await page.locator('recharts-wrapper, svg').first().isVisible());
// The empty-state message should NOT be shown
step('Empty trend message not shown', !(await page.locator('text=No spending data yet').isVisible()));

// ── 5. PROBE: empty state when no data ──────────────────────────
// Delete all and reload
const listRes2 = await fetch('http://localhost:5000/api/expenses');
const { data: all } = await listRes2.json();
for (const e of all) {
  await fetch(`http://localhost:5000/api/expenses/${e._id}`, { method: 'DELETE' });
}
await page.reload();
await page.waitForLoadState('networkidle');
await page.screenshot({ path: shots('02-empty-dashboard') });

step('🔍 This Month shows $0.00 when no data', await page.locator('text=$0.00').first().isVisible());
step('🔍 Empty trend message shown',           await page.locator('text=No spending data yet').first().isVisible());
// All 5 category cards still render (with $0)
const catCards = await page.locator('text=$0.00').count();
step('🔍 All category cards show $0.00 (5 cards + hero)', catCards >= 5, `count=${catCards}`);

// ── 6. PROBE: nav link to Expenses page and back ──────────────────
await page.click('a[href="/expenses"]');
await page.waitForLoadState('networkidle');
step('🔍 Nav to Expenses page works', page.url().includes('/expenses'));

await page.click('a[href="/"]');
await page.waitForLoadState('networkidle');
step('🔍 Nav back to Dashboard works', !page.url().includes('/expenses'));
await page.screenshot({ path: shots('03-nav-back') });

// ── Summary ──────────────────────────────────────────────────────
await browser.close();
console.log('\n--- VERIFICATION RESULTS ---');
log.forEach(l => console.log(l));
console.log(`\n${passed} passed, ${failed} failed`);
console.log(failed === 0 ? '\nVERDICT: PASS' : '\nVERDICT: FAIL');
