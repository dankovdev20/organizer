import * as z from 'zod';

export const quickNoteInputSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, { error: 'Write something first' })
    .max(5000, { error: 'Note is too long (max 5000 characters)' }),
  title: z
    .string()
    .trim()
    .max(100, { error: 'Title is too long' })
    .transform((val) => (val === '' ? null : val)),
});

export type QuickNoteFormValues = z.input<typeof quickNoteInputSchema>;
export type QuickNoteInput = z.infer<typeof quickNoteInputSchema>;
