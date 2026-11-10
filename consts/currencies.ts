export const RATE_SCALE = 10000; // фиксируем курс валюты с точностью до 4 знаков после запятой
export const RATE_SUM_SCALE = 100; // фиксируем сумму расхода с точностью до 2 знаков после запятой

export interface Currency {
  readonly code: string; // код валюты (например, USD, EUR, PLN)
  readonly label: string; // текст для UI, можно менять и переводить
  readonly symbol: string; // символ валюты (например, $, €, zł)
  readonly rate: number; // курс валюты относительно базовой валюты (PLN) целое число, делится через RATE_SCALE, чтобы получить курс с точностью до 4 знаков после запятой
}

export const CURRENCIES = [
  { code: 'PLN', label: 'PLN', symbol: 'zł', rate: 10000 },
  { code: 'USD', label: 'USD', symbol: '$', rate: 40000 },
  { code: 'UAH', label: 'UAH', symbol: '₴', rate: 1100 },
  { code: 'EUR', label: 'EUR', symbol: '€', rate: 45000 },
] as const satisfies readonly Currency[];

export type CurrencyCode = (typeof CURRENCIES)[number]['code'];
