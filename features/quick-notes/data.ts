import { db } from '@/lib/db';
import { newId, nowISO } from '@/lib/sync-helpers';
import type { QuickNote } from '@/types/quicknote';
import type { UUID } from '@/types/sync';

type QuickNoteInput = Pick<QuickNote, 'title' | 'content'>;

// Создать быструю заметку
export async function createQuickNote(input: QuickNoteInput): Promise<UUID> {
  const now = nowISO();

  const note: QuickNote = {
    id: newId(),
    userId: null,
    done: false,
    title: input.title,
    content: input.content,
    createdAt: now,
    updatedAt: now,
    deletedAt: null,
    syncedAt: null,
  };

  await db.quickNotes.add(note);
  return note.id;
}

// Отредактировать быструю заметку (changes это название, контент, статус), также меняется дата обновления
type QuickNoteChanges = Partial<Pick<QuickNote, 'title' | 'content' | 'done'>>;

export async function updateQuickNote(id: UUID, changes: QuickNoteChanges): Promise<void> {
  const updated = await db.quickNotes.update(id, { ...changes, updatedAt: nowISO() });
  if (updated === 0) throw new Error(`QuickNote ${id} not found`);
}

// Поменять состояние заметки, просто враппер для удобного вызова
export async function toggleQuickNote(id: UUID, done: QuickNote['done']): Promise<void> {
  await updateQuickNote(id, { done });
}

// Удалить заметку (на стороне клиента)
export async function softDeleteQuickNote(id: UUID): Promise<void> {
  const now = nowISO();

  const deleted = await db.quickNotes.update(id, { deletedAt: now, updatedAt: now });
  if (deleted === 0) throw new Error(`QuickNote ${id} not found`);
}
