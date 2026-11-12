'use client';

import { createQuickNote, softDeleteQuickNote, toggleQuickNote } from '@/features/quick-notes/data';
import { db } from '@/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function Home() {
  const input = {
    title: 'title',
    content: 'content',
  };

  const notes = useLiveQuery(() => db.quickNotes.filter((n) => n.deletedAt === null).toArray());
  if (notes === undefined) return <p>Lodaing...</p>;

  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-accent text-white px-4 py-2 text-center rounded-2xl"
        onClick={() => createQuickNote(input)}
      >
        create test note
      </button>
      <div className="flex flex-col gap-1 px-2 py-2 text-white">
        {notes.map((note) => (
          <div key={note.id} className={note.done ? 'line-through' : ''}>
            {note.title} <button onClick={() => softDeleteQuickNote(note.id)}>delete</button>
            <button onClick={() => toggleQuickNote(note.id, !note.done)}>toggle</button>
          </div>
        ))}
      </div>
    </div>
  );
}
