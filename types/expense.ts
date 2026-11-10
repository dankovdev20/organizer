import type { SyncEntity, IsoDateString } from './sync';
import type { CurrencyCode } from '@/consts/currencies';
import type { CategoryKey } from '@/consts/categories';

export interface Expense extends SyncEntity {
  name: string; // название расхода, создается пользователем
  amountPln: number; // сумма расхода в базовой валюте (PLN) в виде минимальной единицы, делиться через RATE_SUM_SCALE, чтобы получить сумму в валюте
  comment: string | null;
  amount: number; // целое число в минимальных единицах (гроши/центы); делится на RATE_SUM_SCALE для отображения
  currency: CurrencyCode; // валюта, выбранная пользователем (например, USD, EUR, PLN)
  occurredAt: IsoDateString; // дата совершения расхода (создается пользователем, может быть в прошлом)
  categoryKey: CategoryKey; // ключ категории, импортируется из categories.ts
  exchangeRate: number; // снимок курса к PLN на момент траты: целое число, курс × RATE_SCALE (для PLN = 10000); пересчитывается при изменении суммы или валюты
  location: { lat: number; lng: number } | null; // географические координаты места совершения расхода, пользователь может пропустить
}
