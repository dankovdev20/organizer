import Link from 'next/link';
import { FaBell } from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';

export function AppHeader() {
  return (
    <header className="flex justify-between pt-[calc(env(safe-area-inset-top)+16px)] px-4">
      <Link
        href="/profile"
        aria-label="open profile"
        className="flex items-center justify-center size-11"
      >
        <FaUserCircle aria-hidden size={24} />
      </Link>
      <button
        type="button"
        aria-label="notifications"
        className="flex items-center justify-center size-11"
      >
        <FaBell aria-hidden size={24} />
      </button>
    </header>
  );
}
