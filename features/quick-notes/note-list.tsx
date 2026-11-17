'use client';

import Link from 'next/link';
import { useLiveQuery } from 'dexie-react-hooks';
import { GoCheckCircleFill, GoCircle } from 'react-icons/go';
import { db } from '@/lib/db';
import { toggleQuickNote } from './data';

export default function NoteList() {
  const notes = useLiveQuery(() =>
    db.quickNotes
      .orderBy('createdAt')
      .reverse()
      .filter((n) => n.deletedAt === null)
      .toArray(),
  );

  if (notes === undefined) return <p>Loading…</p>;
  if (notes.length === 0) return <p>No notes yet.</p>;

  return (
    <ul className="grid grid-cols-2 gap-2">
      {notes.map((note) => (
        <li
          key={note.id}
          className="flex aspect-square flex-col overflow-hidden bg-surface rounded-xl border-border border border-t-primary/30 p-2"
        >
          <div className="flex-row-reverse flex justify-between items-center">
            <button
              type="button"
              aria-pressed={note.done}
              aria-label="Mark as done"
              onClick={() => toggleQuickNote(note.id, !note.done)}
              className="flex size-11 shrink-0 items-center justify-center"
            >
              {note.done ? (
                <GoCheckCircleFill size={20} aria-hidden />
              ) : (
                <GoCircle size={20} aria-hidden />
              )}
            </button>
            <span className="block truncate font-bold text-lg">{note.title ?? note.content}</span>
          </div>
          <Link href={`/notes/${note.id}`} className="min-h-0 flex-1 overflow-hidden">
            {note.title !== null && <span className="block">{note.content}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
