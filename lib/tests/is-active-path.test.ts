import { describe, it, expect } from 'vitest';
import { isActivePath } from '../is-active-path';

describe('isActivePath', () => {
  it('home is active only on /', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });
  it('home is not on /stats', () => {
    expect(isActivePath('/stats', '/')).toBe(false);
  });
  it('stats is active on /stats', () => {
    expect(isActivePath('/stats', '/stats')).toBe(true);
  });
  it('stats is active on /stats/2026', () => {
    expect(isActivePath('/stats/2026', '/stats')).toBe(true);
  });
  it('stats is not on /statsabc', () => {
    expect(isActivePath('/statsabc', '/stats')).toBe(false);
  });
  it('notes is not on /stats', () => {
    expect(isActivePath('/stats', '/notes')).toBe(false);
  });
});
