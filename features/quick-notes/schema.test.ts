import { quickNoteInputSchema } from './schema';
import { describe, it, expect } from 'vitest';

describe('quickNoteInputSchema', () => {
  it('accepts note (title and content filled)', () => {
    const result = quickNoteInputSchema.safeParse({
      title: 'Buy milk',
      content: 'and dont forget the bread',
    });
    expect(result.success).toBe(true);
  });
  it('rejects note with empty content', () => {
    const result = quickNoteInputSchema.safeParse({ title: 'Buy milk', content: '' });
    expect(result.success).toBe(false);
  });
  it('rejects note with content of only spaces', () => {
    const result = quickNoteInputSchema.safeParse({ title: 'Buy milk', content: ' ' });
    expect(result.success).toBe(false);
  });
  it('spaces on edges of content get trimmed', () => {
    const result = quickNoteInputSchema.safeParse({ title: 'Buy milk', content: ' hello ' });
    expect(result.data?.content).toBe('hello');
  });
  it('empty title becomes null', () => {
    const result = quickNoteInputSchema.safeParse({ title: '', content: 'hello' });
    expect(result.data?.title).toBe(null);
  });
  it('title of only spaces becomes null', () => {
    const result = quickNoteInputSchema.safeParse({ title: ' ', content: 'hello' });
    expect(result.data?.title).toBe(null);
  });
  it('rejects content being too long >5000 symbols', () => {
    const result = quickNoteInputSchema.safeParse({ title: '', content: 'a'.repeat(5001) });
    expect(result.success).toBe(false);
  });
  it('accepts content of exactly 5000 characters', () => {
    const result = quickNoteInputSchema.safeParse({ title: '', content: 'a'.repeat(5000) });
    expect(result.success).toBe(true);
  });
  it('rejects title being too long >100 symbols', () => {
    const result = quickNoteInputSchema.safeParse({ title: 'a'.repeat(101), content: 'hello' });
    expect(result.success).toBe(false);
  });
});
