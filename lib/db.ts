import Dexie, { type EntityTable } from 'dexie';
import type { Expense } from '@/types/expense';
import type { QuickNote } from '@/types/quicknote';

export const db = new Dexie('organizerDB') as Dexie & {
  expenses: EntityTable<Expense, 'id'>;
  quickNotes: EntityTable<QuickNote, 'id'>;
};

db.version(1).stores({
  expenses: 'id, occurredAt, categoryKey, updatedAt',
  quickNotes: 'id, createdAt, updatedAt',
});
