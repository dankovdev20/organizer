import type { SyncEntity } from './sync';

export interface QuickNote extends SyncEntity {
  title: string | null; // поле названия заметки пользователь может оставить пустым
  content: string; // zod проверка чтобы нельзя было сохранить '' или ' '
  done: boolean; // для чекбокса, чтобы пользователь мог отметить заметку как выполненную
}
