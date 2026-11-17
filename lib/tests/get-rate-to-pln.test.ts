import { CURRENCIES, getRateToPln, type CurrencyCode } from '@/consts/currencies';
import { describe, it, expect } from 'vitest';

describe('getRateToPln', () => {
  it('returns exactly 10000 for PLN (base currency)', () => {
    expect(getRateToPln('PLN')).toBe(10000);
  });

  it('every currency has a positive integer rate', () => {
    for (const currency of CURRENCIES) {
      expect(Number.isInteger(currency.rate)).toBe(true);
      expect(currency.rate).toBeGreaterThan(0);
    }
  });
  it('throws for an unknown currency', () => {
    expect(() => {
      getRateToPln('XYZ' as CurrencyCode);
    }).toThrow();
  });
});
