/** ISO 8601 в UTC, всегда через toISOString(): '2026-11-09T10:59:00.000Z' */
export type IsoDateString = string;

/** Совпадает с типом, который возвращает crypto.randomUUID() */
export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export interface SyncEntity {
  readonly id: UUID;
  /** null — запись создана до входа в аккаунт */
  userId: UUID | null;
  readonly createdAt: IsoDateString;
  updatedAt: IsoDateString;
  /** Мягкое удаление: запись остаётся, чтобы синк передал факт удаления на сервер */
  deletedAt: IsoDateString | null;
  /**
   * Время последней успешной отправки на сервер.
   * Запись не синхронизирована, если: syncedAt === null || updatedAt > syncedAt.
   * Сравнивать строки через > можно, потому что все даты в одном формате (UTC, мс, Z).
   */
  syncedAt: IsoDateString | null;
}
