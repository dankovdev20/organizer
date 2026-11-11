import { describe, it, expect } from 'vitest';
import { toPlnMinor } from '../money';

describe('toPlnMinor', () => {
  it('keeps the amount unchanged for PLN (rate 1.0)', () => {
    expect(toPlnMinor(2499, 10000)).toBe(2499);
  });
  it('10.00 USD to PLN conversion', () => {
    expect(toPlnMinor(1000, 39876)).toBe(3988);
  });
  it('rounds 566.2392 down to 566', () => {
    expect(toPlnMinor(142, 39876)).toBe(566);
  });
  it('rounds exactly .5 up (1.5 -> 2)', () => {
    expect(toPlnMinor(15, 1000)).toBe(2);
  });
  it('returns 0 for a zero amount', () => {
    expect(toPlnMinor(0, 10000)).toBe(0);
  });
  it('throws for a non-integer amount', () => {
    expect(() => toPlnMinor(0.5, 10000)).toThrow();
  });
  it('throws for a non-integer rate', () => {
    expect(() => toPlnMinor(15, 0.5)).toThrow();
  });
});
