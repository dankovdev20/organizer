import type { Metadata } from 'next';
import Link from 'next/link';
import NoteList from '@/features/quick-notes/note-list';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'See your quick thoughts and decisions, organize on the go.',
};

export default function NotesPage() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between gap-3">
        <h1>Notes</h1>
        <Link href="/notes/new" className="flex h-11 items-center">
          New note
        </Link>
      </header>

      <NoteList />
    </div>
  );
}
