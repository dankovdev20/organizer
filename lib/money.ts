import { RATE_SCALE } from '@/consts/currencies';
import type { Expense } from '@/types/expense';

export function toPlnMinor(amountMinor: Expense['amount'], rate: Expense['exchangeRate']): number {
  if (!Number.isInteger(amountMinor) || !Number.isInteger(rate)) {
    throw new Error(`Expected integers, got amountMinor=${amountMinor}, rate=${rate}`);
  }
  const amountPlnMinor = Math.round((amountMinor * rate) / RATE_SCALE);
  return amountPlnMinor;
}
