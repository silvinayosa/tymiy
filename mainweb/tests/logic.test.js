/* ============================================================
   TymiY — tests/logic.test.js
   Pure-logic unit tests. Run with: node --test tests/logic.test.js
   Uses Node built-in node:test + node:assert (no extra deps).
   ============================================================ */
'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');

const { i18n, pricing, planComparison, findMissingKeys, nextIndex } = require('../illustrations.js');

/* ------------------------------------------------------------------
   i18n parity
   ------------------------------------------------------------------ */
test('findMissingKeys: ID and EN have identical key sets', () => {
  const missing = findMissingKeys(i18n);
  assert.deepEqual(missing, [],
    'Expected no missing keys but got: ' + JSON.stringify(missing));
});

/* ------------------------------------------------------------------
   planComparison
   pricing: paygPerTx=200, unliPerMonth=150000, tieThresholdRp=5000
   breakeven: 750 tx (150000/200)
   tie band: [726, 774] exclusive (diff < 5000)
     725 * 200 = 145000  → diff 5000 → NOT tie (boundary, payg wins)
     726 * 200 = 145200  → diff 4800 → tie
     774 * 200 = 154800  → diff 4800 → tie
     775 * 200 = 155000  → diff 5000 → NOT tie (unli wins)
   ------------------------------------------------------------------ */
test('planComparison: n=0 → winner payg', () => {
  const r = planComparison(0, pricing);
  assert.equal(r.winner, 'payg');
  assert.equal(r.payg, 0);
  assert.equal(r.unli, 150000);
});

test('planComparison: n=500 → winner payg, savings 50000', () => {
  const r = planComparison(500, pricing);
  assert.equal(r.winner, 'payg');
  assert.equal(r.savings, 50000);
});

test('planComparison: n=730 → winner eq (within tie band)', () => {
  const r = planComparison(730, pricing);
  assert.equal(r.winner, 'eq');
  assert.equal(r.savings, 0);
});

test('planComparison: n=750 → winner eq (exact breakeven)', () => {
  const r = planComparison(750, pricing);
  assert.equal(r.winner, 'eq');
  assert.equal(r.savings, 0);
});

test('planComparison: n=770 → winner eq (within tie band)', () => {
  const r = planComparison(770, pricing);
  assert.equal(r.winner, 'eq');
  assert.equal(r.savings, 0);
});

test('planComparison: n=1000 → winner unli, savings 50000', () => {
  const r = planComparison(1000, pricing);
  assert.equal(r.winner, 'unli');
  assert.equal(r.savings, 50000);
});

test('planComparison: n=2000 → winner unli, savings 250000', () => {
  const r = planComparison(2000, pricing);
  assert.equal(r.winner, 'unli');
  assert.equal(r.savings, 250000);
});

test('planComparison: payg and unli values are correct for n=500', () => {
  const r = planComparison(500, pricing);
  assert.equal(r.payg, 100000);
  assert.equal(r.unli, 150000);
});

test('planComparison: payg and unli values are correct for n=1000', () => {
  const r = planComparison(1000, pricing);
  assert.equal(r.payg, 200000);
  assert.equal(r.unli, 150000);
});

/* ------------------------------------------------------------------
   nextIndex
   ------------------------------------------------------------------ */
test('nextIndex: n=3, i=3 → 0 (wraps to start)', () => {
  assert.equal(nextIndex(3, 3), 0);
});

test('nextIndex: n=3, i=-1 → 2 (negative wraps to last)', () => {
  assert.equal(nextIndex(-1, 3), 2);
});

test('nextIndex: n=3, i=4 → 1 (overflow wraps correctly)', () => {
  assert.equal(nextIndex(4, 3), 1);
});

test('nextIndex: n=3, i=0 → 0 (identity at zero)', () => {
  assert.equal(nextIndex(0, 3), 0);
});
