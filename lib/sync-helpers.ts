import type { IsoDateString, UUID } from '@/types/sync';

// General helpers

export function newId(): UUID {
  // randomUUID всегда возвращает строку UUID (5 сегментов оттеделенных дефисом)
  return crypto.randomUUID() as UUID;
}

export function nowISO(): IsoDateString {
  return new Date().toISOString();
}
