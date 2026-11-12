import { getRateToPln } from '@/consts/currencies';
import { db } from '@/lib/db';
import { toPlnMinor } from '@/lib/money';
import { newId, nowISO } from '@/lib/sync-helpers';
import type { Expense } from '@/types/expense';
import type { UUID } from '@/types/sync';

type ExpenseInput = Pick<
  Expense,
  'name' | 'amount' | 'comment' | 'currency' | 'occurredAt' | 'categoryKey' | 'location'
>;

export async function createExpense(input: ExpenseInput): Promise<UUID> {
  const now = nowISO();

  const exchangeRate = getRateToPln(input.currency);
  const amountPln = toPlnMinor(input.amount, exchangeRate);

  const expense: Expense = {
    id: newId(),
    userId: null,
    name: input.name,
    amount: input.amount,
    comment: input.comment,
    currency: input.currency,
    occurredAt: input.occurredAt,
    categoryKey: input.categoryKey,
    location: input.location,
    exchangeRate: exchangeRate,
    amountPln: amountPln,
    createdAt: now,
    updatedAt: now,
    syncedAt: null,
    deletedAt: null,
  };

  await db.expenses.add(expense);
  return expense.id;
}

type ExpenseChanges = Partial<ExpenseInput>;

export async function updateExpense(id: UUID, changes: ExpenseChanges): Promise<void> {
  const current = await db.expenses.get(id);
  if (current === undefined) throw new Error(`No expense was found with id ${id}`);
  if (current.deletedAt !== null) throw new Error('Cant edit already deleted expense!');
  const next = { ...current, ...changes };
  // Снимок курса: новый курс берём только при смене валюты.
  // При правке суммы курс остаётся тем, по которому трата была сделана.

  let rate: number;
  if (next.currency !== current.currency) {
    rate = getRateToPln(next.currency);
  } else {
    rate = current.exchangeRate;
  }
  const amountPln = toPlnMinor(next.amount, rate);

  await db.expenses.update(id, { ...changes, exchangeRate: rate, amountPln, updatedAt: nowISO() });
}

export async function softDeleteExpense(id: UUID): Promise<void> {
  const now = nowISO();

  const deleted = await db.expenses.update(id, { deletedAt: now, updatedAt: now });
  if (deleted === 0) throw new Error(`Expense ${id} not found`);
}
