import { chromium } from 'playwright';

// ── Pre-test cleanup: delete all expenses ────────────────────────
const listRes = await fetch('http://localhost:5000/api/expenses');
const { data: existing } = await listRes.json();
for (const e of existing) {
  await fetch(`http://localhost:5000/api/expenses/${e._id}`, { method: 'DELETE' });
}
console.log(`Cleaned up ${existing.length} pre-existing expense(s).`);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
page.setDefaultTimeout(8000);

const shots = (name) => `/tmp/batch3-${name}.png`;
let passed = 0, failed = 0;
const log = [];

function step(label, ok, detail = '') {
  const icon = ok ? '✅' : '❌';
  log.push(`${icon} ${label}${detail ? ' → ' + detail : ''}`);
  ok ? passed++ : failed++;
}

const formCategorySelect = () => page.locator('form select');
const filterCategory   = () => page.locator('[aria-label="Filter by category"]');
const filterMonth      = () => page.locator('[aria-label="Filter by month"]');
const filterYear       = () => page.locator('[aria-label="Filter by year"]');

// ── 1. Initial load ──────────────────────────────────────────────
await page.goto('http://localhost:5173/expenses');
await page.waitForLoadState('networkidle');
await page.screenshot({ path: shots('01-initial') });
step('Page loads with Add Expense form', await page.locator('form').isVisible());
step('Empty state shown on fresh load',  await page.locator('text=No expenses found').first().isVisible());

// ── 2. Add first expense ─────────────────────────────────────────
await page.fill('input[type="number"]', '25.50');
await formCategorySelect().selectOption('Food');
await page.fill('input[type="text"]', 'Lunch at office');
await page.screenshot({ path: shots('02-form-filled') });
await page.click('button[type="submit"]');
await page.waitForTimeout(1200);
await page.screenshot({ path: shots('03-after-first-add') });

step('First expense appears in list',   await page.locator('text=Lunch at office').first().isVisible());
step('Food badge shown',                await page.locator('li').filter({ hasText: 'Lunch at office' }).locator('text=Food').isVisible());
step('Amount $25.50 displayed',         await page.locator('text=$25.50').first().isVisible());
step('Form resets after submit',        (await page.inputValue('input[type="number"]')) === '');

// ── 3. Add second expense ────────────────────────────────────────
await page.fill('input[type="number"]', '12.00');
await formCategorySelect().selectOption('Transport');
await page.fill('input[type="text"]', 'Bus fare');
await page.click('button[type="submit"]');
await page.waitForTimeout(1200);
await page.screenshot({ path: shots('04-two-entries') });

step('Second expense appears in list', await page.locator('text=Bus fare').first().isVisible());
const entryCount = await page.locator('[aria-label="Delete expense"]').count();
step('List has 2 entries', entryCount === 2, `count=${entryCount}`);

// ── 4. Filter by Food ────────────────────────────────────────────
await filterCategory().selectOption('Food');
await page.waitForTimeout(900);
await page.screenshot({ path: shots('05-filter-food') });

step('Filter Food: Lunch at office visible', await page.locator('text=Lunch at office').first().isVisible());
step('Filter Food: Bus fare hidden',         !(await page.locator('text=Bus fare').isVisible()));

// ── 5. Clear filters (via button) ────────────────────────────────
await page.locator('button', { hasText: 'Clear filters' }).click();
await page.waitForTimeout(800);
await page.screenshot({ path: shots('06-cleared') });

const bothBack =
  (await page.locator('text=Lunch at office').first().isVisible()) &&
  (await page.locator('text=Bus fare').first().isVisible());
step('After clearing filters both entries visible', bothBack);

// ── 6. Delete Lunch at office ────────────────────────────────────
await page.locator('li').filter({ hasText: 'Lunch at office' })
          .locator('[aria-label="Delete expense"]').click();
await page.waitForTimeout(1500);
await page.screenshot({ path: shots('07-after-delete') });

step('Deleted expense removed from list',   !(await page.locator('text=Lunch at office').isVisible()));
step('Remaining expense Bus fare visible',  await page.locator('text=Bus fare').first().isVisible());

// ── 7. PROBE: no-match filter → empty state ──────────────────────
await filterCategory().selectOption('Entertainment');
await page.waitForTimeout(800);
await page.screenshot({ path: shots('08-no-match') });
step('🔍 No-match filter shows empty state', await page.locator('text=No expenses found').first().isVisible());

// ── 8. PROBE: form validation on empty submit ────────────────────
await filterCategory().selectOption('');       // reset filter directly
await page.waitForTimeout(300);
await page.click('button[type="submit"]');
await page.waitForTimeout(500);
await page.screenshot({ path: shots('09-validation') });
const validationShown =
  await page.locator('text=Enter a valid amount').first().isVisible() ||
  await page.locator('text=Select a category').first().isVisible();
step('🔍 Empty submit shows validation errors', validationShown);

// ── 9. PROBE: entry count label ──────────────────────────────────
// filters already clear; list shows 1 entry (Bus fare)
await page.screenshot({ path: shots('10-count') });
step('🔍 Entry count shows "1 entry"', await page.locator('text=1 entry').first().isVisible());

// ── 10. PROBE: month + year filter ──────────────────────────────
await filterMonth().selectOption('6');
await filterYear().selectOption('2026');
await page.waitForTimeout(800);
await page.screenshot({ path: shots('11-month-year') });
step('🔍 Month+year filter returns Bus fare', await page.locator('text=Bus fare').first().isVisible());

// ── Summary ──────────────────────────────────────────────────────
await browser.close();
console.log('\n--- VERIFICATION RESULTS ---');
log.forEach(l => console.log(l));
console.log(`\n${passed} passed, ${failed} failed`);
console.log(failed === 0 ? '\nVERDICT: PASS' : '\nVERDICT: FAIL');
