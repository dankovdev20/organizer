// consts/categories.ts

export interface Category {
  readonly key: string; // стабильный идентификатор, хранится в БД, не меняется никогда
  readonly label: string; // текст для UI, можно менять и переводить
  readonly icon: string; // имя иконки из библиотеки (например, Lucide)
}

/** Порядок в массиве = порядок в сетке на главной. 'other' всегда последний. */
export const CATEGORIES = [
  { key: 'food', label: 'Еда', icon: 'utensils' },
  { key: 'transport', label: 'Транспорт', icon: 'bus' },
  { key: 'entertainment', label: 'Развлечения', icon: 'popcorn' },
  { key: 'shopping', label: 'Покупки', icon: 'shopping-bag' },
  { key: 'health', label: 'Здоровье', icon: 'heart-pulse' },
  { key: 'education', label: 'Учёба', icon: 'graduation-cap' },
  { key: 'travel', label: 'Путешествия', icon: 'plane' },
  { key: 'utilities', label: 'Коммуналка', icon: 'zap' },
  { key: 'gifts', label: 'Подарки', icon: 'gift' },
  { key: 'other', label: 'Другое', icon: 'circle-ellipsis' },
] as const satisfies readonly Category[];

export type CategoryKey = (typeof CATEGORIES)[number]['key'];

export const DEFAULT_CATEGORY_KEY = 'other' satisfies CategoryKey;
